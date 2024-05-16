const __vite__fileDeps=["assets/knowledgeGraphService-CsbzSJoV.js","assets/index-D0xqwRGM.js","assets/index-Bgzj4hTD.css","assets/GraphQueryStreaming-B8JApxde.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ah as x,_ as G,aj as J,b1 as Q,b2 as V,b3 as j,ba as I,ag as K,ei as P,ek as M,el as U}from"./index-D0xqwRGM.js";import{a as T,b as p,r as f,x as B,d as k,G as y,a9 as C,v as L,N as E,U as b,q as O,E as q,X as W,k as X,t as Y,aa as z,ab as A,ac as H}from"./arcadeUtils-CfGo4yfj.js";import{l as Z}from"./portalUtils-BOlsZ7n_.js";import{p as $,n as tt}from"./project-BwxEEcFX.js";import{a as nt,m as et,t as rt,p as at,c as it}from"./GraphQueryStreaming-B8JApxde.js";import"./TimeOnly-LjyJ-yTr.js";import"./ImmutableArray-BlMso3qf.js";import"./number--n9yr-9u.js";import"./featureConversionUtils-BEJnJ0j8.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";let c=null;async function ot(t){const n=J.geometryServiceUrl??"";if(!n){Q()||await V();for(const e of t)e.container[e.indexer]=j(e.container[e.indexer],I.WGS84);return}const r=t.map(e=>e.container[e.indexer]),i=new $({geometries:r,outSpatialReference:I.WGS84}),s=await tt(n,i);for(let e=0;e<s.length;e++){const a=t[e];a.container[a.indexer]=s[e]}}async function D(t,n){const r=new K({portal:t,id:n});return await r.load(),c===null&&(c=await G(()=>import("./knowledgeGraphService-CsbzSJoV.js").then(i=>i.k),__vite__mapDeps([0,1,2,3]))),await c.fetchKnowledgeGraph(r.url)}function v(t,n,r,i,s){if(t===null)return null;if(y(t)||q(t))return t;if(W(t)||W(t))return t.toJSDate();if(X(t))return t.toStorageFormat();if(Y(t))return t.toStorageString();if(z(t)){const e={};for(const a of t.keys())e[a]=v(t.field(a),n,r,i,s),e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(b(t)){const e=t.map(a=>v(a,n,r,i,s));for(let a=0;a<e.length;a++)e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(A(t))return t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?M(t):t}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return U(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new p(n,f.WrongSpatialReference,null)}function S(t,n){if(!t)return null;const r={};for(const i in t)r[i]=g(t[i],n);return r}function g(t,n){return t===null?null:b(t)?t.map(r=>g(r,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:S(t.properties,n)}:t instanceof rt?{graphType:"object",properties:S(t.properties,n)}:t instanceof at?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:S(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(r=>g(r,n)):null}:A(t)?st(t,n):y(t)||q(t)||H(t)?t:null}function Rt(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,r){return t.standardFunctionAsync(n,r,(i,s,e)=>{var d,m;if(T(e,2,2,n,r),e[0]===null)throw new p(n,f.PortalRequired,r);if(e[0]instanceof B){const u=k(e[1]);let h=null;return h=(d=n.services)!=null&&d.portal?n.services.portal:x.getDefault(),D(Z(e[0],h),u)}if(y(e[0])===!1)throw new p(n,f.InvalidParameter,r);const a=k(e[0]);return D(((m=n.services)==null?void 0:m.portal)??x.getDefault(),a)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,r){return t.standardFunctionAsync(n,r,async(i,s,e)=>{var _;T(e,2,4,n,r);const a=e[0];if(!C(a))throw new p(n,f.InvalidParameter,r);const d=e[1];if(!y(d))throw new p(n,f.InvalidParameter,r);c===null&&(c=await G(()=>import("./knowledgeGraphService-CsbzSJoV.js").then(o=>o.k),__vite__mapDeps([0,1,2,3])));let m=null;const u=L(e[2],null);if(!(u instanceof E||u===null))throw new p(n,f.InvalidParameter,r);if(u){let o=[];m=v(u,!0,!1,n,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:d,bindParameters:m});(((_=a==null?void 0:a.serviceDefinition)==null?void 0:_.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const F=(await c.executeQueryStreaming(a,h)).resultRowsStream.getReader(),R=[];try{for(;;){const{done:o,value:l}=await F.read();if(o)break;if(b(l))for(const w of l)R.push(g(w,n));else{const w=[];for(const N of l)w.push(g(l[N],n));R.push(w)}}}catch(o){throw o}return E.convertJsonToArcade(R,O(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{Rt as registerFunctions};