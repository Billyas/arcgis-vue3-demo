import{n as a,o as n,w as d,P as u,N as l}from"./index-D0xqwRGM.js";import{X as g}from"./FeatureLayerView2D-Dtcyw3Bh.js";import"./Container-CcfdTWvA.js";import"./highlightReasons-DjcC1a5n.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-BSQnG_dZ.js";import"./LayerView-DZGPGYfz.js";import"./scaleUtils-CvRYaIUl.js";import"./TechniqueInstance-umwK0nGJ.js";import"./UpdateTracking2D-C7eA9KGW.js";import"./TurboLine-DSL5AW9G.js";import"./enums-BRqP_wXA.js";import"./earcut-C9dYZeX3.js";import"./GeometryUtils-BMZi9CIw.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BPF3kTTV.js";import"./Program-DKZptAxz.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-CZdoyR3s.js";import"./constants-D5zmR9t2.js";import"./TileContainer-C9k3u5ft.js";import"./WGLContainer-B5gmYGqJ.js";import"./ProgramTemplate-BgwGoCg0.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-BEJnJ0j8.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./tileUtils-B7X19rIS.js";import"./SDFHelper-CdlvKsqh.js";import"./floatRGBA-DTubVTWl.js";import"./FeatureCommandQueue-BCi2ZYGI.js";import"./HighlightCounter-BtWFTEXV.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-DhqDnWWX.js";import"./RefreshableLayerView-BppB45M2.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Y=i;export{Y as default};
