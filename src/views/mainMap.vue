<template>
  <div class="mapView">
    <div id="viewDiv"></div>
  </div>
</template>

<script>
import { provide, onMounted } from 'vue'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import Graphic from '@arcgis/core/Graphic'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import {baseUrl} from '@/js/config.js'
export default {
  name: 'MapView',
  props: {
    msg: String
  },
  setup() {

    const map = new Map({
      basemap: 'topo-vector'
      // ground: 'world-elevation'
    })

    const view = new MapView({ // 使用 MapView 而不是 SceneView
      map: map,
      center: [119.0077, 25.4545],
      zoom: 8
    })

    provide('view', view) // 此处是为了让view能够跨组件通信，
    // 后代组件只需要通过 const view = inject('view')来获取到view，然后进行操作
    onMounted(() => {
      view.container = 'viewDiv'


      //vue3加载geojson数据public/geojson/pt.json,在MapView渲染上加载geojson数据 type是"MultiPolygon"
      fetch(baseUrl+'/geojson/pt.json')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          // debugger
          let graphics = data.features.map((feature) => {
            //Polygon 单个多边形绘制
            let geometry = {
              type: 'polygon',
              rings: feature.geometry.coordinates[0]
            }
            return new Graphic({
              geometry: geometry,
              attributes: feature.properties
            })
          })
                      
          let featureLayer = new FeatureLayer({
            fields: [
              {
                name: 'ObjectID',
                alias: 'ObjectID',
                type: 'oid'
              },
              {
                name: 'name',
                alias: 'name',
                type: 'string'
              },
              {
                name: 'adcode',
                alias: 'adcode',
                type: 'integer'
              }
            ],
            objectIdField: 'ObjectID',
            geometryType: 'polygon',
            spatialReference: {
              wkid: 4326
            },
            source: graphics,
            renderer: {
              type: 'simple',
              symbol: {
                type: 'simple-fill',
                color: [227, 139, 79, 0.8],
                outline: {
                  color: [255, 255, 255],
                  width: 1
                }
              }
            },
            labelingInfo: [
              {
                labelExpressionInfo: {
                  expression: '$feature.name'
                },
                symbol: {
                  type: 'text',
                  color: [0, 0, 0, 1],
                  haloColor: [255, 255, 255, 1],
                  haloSize: 1,
                  font: {
                    size: 12
                  }
                }
              }
            ]
          })

          //地图加载featureLayer
          view.map.layers.add(featureLayer)
        })

    })


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 90vh;
  overflow: hidden;
}

.MapView {
  width: 100%;
  height: 100%;
}

#viewDiv {
  width: 100%;
  height: 100vh;
}
</style>