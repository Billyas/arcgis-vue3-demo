const __vite__fileDeps=["assets/geometryEngineJSON-i2zzVrTT.js","assets/geometryEngineBase-DtcJRXpL.js","assets/index-D0xqwRGM.js","assets/index-Bgzj4hTD.css","assets/json-Wa8cmqdu.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{cG as d,cH as h,cF as g,cI as m,aO as p,cJ as y,cK as a,_ as w}from"./index-D0xqwRGM.js";import{n as _}from"./date-M6n_RqpC.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(r){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=r}}function l(n){return new b(n)}class q{constructor(r){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=r}}function G(n){return new q(n)}const c=new Set;function v(n,r,e,f=!1){c.clear();for(const i in e){const t=n.get(i);if(!t)continue;const o=P(t,e[i]);if(c.add(t.name),t&&(f||t.editable)){const u=d(t,o);if(u)return l(h(u,t,o));r[t.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!c.has(i.name))return l(`missing required field "${i.name}"`);return null}function P(n,r){let e=r;return g(n)&&typeof r=="string"?e=parseFloat(r):m(n)&&r!=null&&typeof r!="string"?e=String(r):p(n)&&typeof r=="string"&&(e=_(r)),y(e)}let s;function A(n,r){if(!n||!a(r))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(r,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-i2zzVrTT.js").then(n=>n.g),__vite__mapDeps([0,1,2,3,4]))),s}async function O(n,r){!a(n)||r!=="esriGeometryPolygon"&&r!=="esriGeometryPolyline"||await j()}export{G as d,l as f,O as j,v as p,A as y};
