import{c as w,h as y,m as I,r as V,e as v,G as H,g as o,j as u,k as T,n,y as g,o as q}from"./index-D0xqwRGM.js";import"./GeometryUtils-BMZi9CIw.js";import"./UpdateTracking2D-C7eA9KGW.js";import"./enums-BRqP_wXA.js";import"./definitions-C14Q9bsB.js";import"./floatRGBA-DTubVTWl.js";import"./Container-CcfdTWvA.js";import"./WGLContainer-B5gmYGqJ.js";import"./Texture-BSQnG_dZ.js";import"./enums-CYMvjYBC.js";import"./Program-DKZptAxz.js";import"./LabelMetric-BPF3kTTV.js";import"./StyleDefinition-pu9RBNlY.js";import"./enums-BRzLM11V.js";import"./MagnifierPrograms-DL3YBIDz.js";import"./pbf-EBX50Htu.js";import"./FeatureCommandQueue-BCi2ZYGI.js";import"./OrderIndependentTransparency-D0wfjx-a.js";import"./testSVGPremultipliedAlpha-D0IgbBFY.js";import{$ as U}from"./GraphicsView2D-BcUCR2T4.js";import"./earcut-C9dYZeX3.js";import"./vec3f32-nZdmKIgz.js";import{r as S,o as f,n as d}from"./imageUtils-DgixKPC1.js";import{m as b,u as C}from"./LayerView-DZGPGYfz.js";import{h as Q}from"./HighlightGraphicContainer-BXGJCYz0.js";import{i as $}from"./RefreshableLayerView-BppB45M2.js";import{S as k,U as L,r as P}from"./drapedUtils-DTAx_dIr.js";import"./TurboLine-DSL5AW9G.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-CZdoyR3s.js";import"./highlightReasons-DjcC1a5n.js";import"./constants-D5zmR9t2.js";import"./ProgramTemplate-BgwGoCg0.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-BEJnJ0j8.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./CircularArray-DfLrgW_-.js";import"./AttributeStore-h_RrO2xU.js";import"./TimeOnly-LjyJ-yTr.js";import"./timeSupport-DeqeB8YQ.js";import"./json-Wa8cmqdu.js";import"./basicInterfaces-GbxEOYtk.js";import"./normalizeUtilsSync-BAPQaTTJ.js";import"./Bitmap-LwZVxBdA.js";import"./TileContainer-C9k3u5ft.js";import"./scaleUtils-CvRYaIUl.js";import"./AGraphicContainer-BYJSjnz0.js";import"./TechniqueInstance-umwK0nGJ.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-DsrQx4G8.js";import"./popupUtils-DhqDnWWX.js";const F=[0,0];let a=class extends $(S(b(C))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,h)=>this.fetchTile(i,h)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),k(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Q(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new L({createFetchPopupFeaturesQueryGeometry:(h,r)=>P(h,r,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,r)=>{i.graphicUpdateHandler({graphic:h,property:r})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,e;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(e=this._highlightView)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):v()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return H((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(F,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:h,resamplingLevel:r=0}=e;if(!i)try{return await this._fetchImage(t,h)}catch(s){if(!o(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(r<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const c=new u(m),_=await this.fetchTile(c,{...e,resamplingLevel:r+1});return d(this._tileInfoView,_,c,t)}}throw s}const l=new u(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,l,{signal:h}),l.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,h)}catch(s){if(o(s))throw s;p=await this._fetchImage(t,h)}return this.resampling?d(this._tileInfoView,p,l,t):p}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){o(e)||T.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const Gt=a;export{Gt as default};
