import{D as p,E as g,V as m,q as n,e as a,n as o,y as l,o as c}from"./index-D0xqwRGM.js";import{t as d}from"./highlightReasons-DjcC1a5n.js";import{m as u,u as w}from"./LayerView-DZGPGYfz.js";import{t as y}from"./GraphicContainer-CAH5erWV.js";import{$ as V}from"./GraphicsView2D-BcUCR2T4.js";import{t as f}from"./HighlightCounter-BtWFTEXV.js";import"./scaleUtils-CvRYaIUl.js";import"./Container-CcfdTWvA.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-BSQnG_dZ.js";import"./AGraphicContainer-BYJSjnz0.js";import"./TechniqueInstance-umwK0nGJ.js";import"./UpdateTracking2D-C7eA9KGW.js";import"./TurboLine-DSL5AW9G.js";import"./enums-BRqP_wXA.js";import"./earcut-C9dYZeX3.js";import"./GeometryUtils-BMZi9CIw.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BPF3kTTV.js";import"./Program-DKZptAxz.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-CZdoyR3s.js";import"./constants-D5zmR9t2.js";import"./TileContainer-C9k3u5ft.js";import"./WGLContainer-B5gmYGqJ.js";import"./ProgramTemplate-BgwGoCg0.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-BEJnJ0j8.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-BCi2ZYGI.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-h_RrO2xU.js";import"./TimeOnly-LjyJ-yTr.js";import"./timeSupport-DeqeB8YQ.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-BAPQaTTJ.js";let s=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new f}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new y(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(n);return e!=null&&e.length?(this._addHighlight(e,t),a(()=>this._removeHighlight(e,t))):a()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(r),h=d(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};o([l()],s.prototype,"graphicsView",void 0),s=o([c("esri.views.2d.layers.GraphicsLayerView2D")],s);const ai=s;export{ai as default};
