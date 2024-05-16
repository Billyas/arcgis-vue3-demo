import{N,e5 as Q,e as Y,hC as I,K as A,hD as _,bB as h,U as f,an as u,dX as Z,az as ss,eF as es,aE as ts,ex as os,k as as}from"./index-D0xqwRGM.js";import{h as ns,N as rs,i as S,o as x,A as is}from"./External-Db-bJ2Yp.js";import{r as cs,n as ls,a as us,d as ps,c as U,l as ms,t as fs,u as ds,p as hs}from"./uploadAssetErrors-C6H5VVVY.js";import{s as gs,u as k,i as ws}from"./infoFor3D-DsOdlPuA.js";const $={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function g(t,e=o=>{},s){return new ys(t,e,s)}let ys=class{constructor(e,s=a=>{},o){if(this.onProgress=s,this.taskName=o,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof e=="number"){this._weights={};for(let a=0;a<e;a++){const n=a,r=1/e;this._weights[n]=r,this._progressMap.set(n,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,o]of this._progressMap.entries())e+=o*this._weights[s];if(e===1&&N("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[o,a]of this._timingsMap){const n=Math.round(a.end-a.start)/1e3,r=Math.round(n/s*100);console.log(this.taskName??"Task",{stepKey:o,stepTime:n,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),N("enable-feature:esri-3dofl-upload-timings")){const o=performance.now();this._startTime??(this._startTime=o);const a=Q(this._timingsMap,e,()=>({start:o,end:0}));s===1&&(a.end=o)}this.emitProgress()}simulate(e,s){return D(o=>this.setProgress(e,o),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}};function D(t=s=>{},e=Fs){const s=performance.now();t(0);const o=setInterval(()=>{const a=performance.now()-s,n=1-Math.exp(-a/e);t(n)},$s);return Y(()=>{clearInterval(o),t(1)})}function Ps(t,e=bs){return I(_(t*B/e))}function Ts(t,e=As){return I(_(t*B/e))}const bs=10,As=10,B=8e-6,$s=A(50),Fs=A(1e3),C=1e6,E=20*C,Ms=2e9,js=3;async function vs({data:t,name:e,description:s},o,a){let n=null;try{const r=h(o,"uploads"),i=h(r,"info"),{data:c}=await f(i,{query:{f:"json"},responseType:"json"});u(a);const p=Z(o),l=c.maxUploadFileSize*C,d=p?Ms:l,b=p?Math.min(E,l):E;if(t.size>d)throw new Error("Data too large");const L=h(r,"register"),{data:F}=await f(L,{query:{f:"json",itemName:Ns(e),description:s},responseType:"json",method:"post"});if(u(a),!F.success)throw new Error("Registration failed");const{itemID:H}=F.item;n=h(r,H);const G=h(n,"uploadPart"),M=Math.ceil(t.size/b),w=new Array;for(let m=0;m<M;++m)w.push(t.slice(m*b,Math.min((m+1)*b,t.size)));const y=w.slice().reverse(),j=new Array,J=g(M,a==null?void 0:a.onProgress,"uploadItem"),K=async()=>{for(;y.length!==0;){const m=w.length-y.length,P=y.pop(),T=new FormData,V=J.simulate(m,Ps(P.size));try{T.append("f","json"),T.append("file",P),T.append("partId",`${m}`);const{data:X}=await f(G,{timeout:0,body:T,responseType:"json",method:"post"});if(u(a),!X.success)throw new Error("Part upload failed")}finally{V.remove()}}};for(let m=0;m<js&&y.length!==0;++m)j.push(K());await Promise.all(j);const W=h(n,"commit"),{data:v}=await f(W,{query:{f:"json",parts:w.map((m,P)=>P).join(",")},responseType:"json",method:"post"});if(u(a),!v.success)throw new Error("Commit failed");return v.item}catch(r){if(n!=null){const i=h(n,"delete");await f(i,{query:{f:"json"},responseType:"json",method:"post"})}throw r}}function Ns(t){return t.replaceAll("/","_").replaceAll("\\","_")}async function se(t,e,s){var n;const o=t.length;if(!o)return(n=s==null?void 0:s.onProgress)==null||n.call(s,1),[];const a=g(o,s==null?void 0:s.onProgress,"uploadAssets");return Promise.all(t.map((r,i)=>Es(r,e,{...s,onProgress:a.makeOnProgress(i)})))}async function Es(t,{layer:e,ongoingUploads:s},o){var r;const a=s.get(t);if(a)return a;if(!Js(e))throw new cs;if(Is(t,e))return(r=o==null?void 0:o.onProgress)==null||r.call(o,1),t;const n=_s(t,e,o);s.set(t,n);try{await n}finally{s.delete(t)}return t}function Is(t,e){const{parsedUrl:s}=e;return s!=null&&t.metadata.externalSources.some(o=>ns(o,s))}async function _s(t,e,s){const{metadata:o}=t,{displaySource:a}=o,n=O(a==null?void 0:a.source,e),r=!!n,i=o.externalSources.length>0,c=r?Ss(n,e,s):i?xs(t,e,s):Us(t,e,s),p=await c;return u(s),t.addExternalSources([p]),t}async function Ss(t,e,s){return{source:await q(t,e,s),original:!0}}async function xs(t,e,s){const o=z(e),{externalSources:a}=t.metadata,n=Ds(a,e);if(!n)throw new ls;const r=g($.uploadConvertibleSource,s==null?void 0:s.onProgress,"uploadConvertibleSource"),i=await q(n,e,{onProgress:r.makeOnProgress("uploadEditSource")});t.addExternalSources([{source:i,original:!0}]);const c=n.reduce((l,{asset:d})=>d instanceof File?l+d.size:l,0),p=r.simulate("serviceAssetsToGlb",Ts(c));try{return{source:await Ls(i,e,o)}}finally{p.remove()}}async function Us(t,e,s){const o=g($.uploadLocalMesh,s==null?void 0:s.onProgress,"uploadLocalMesh"),a=ks(t,e,{...s,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await R([a],e,{...s,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:t.extent.clone(),original:!0}}async function ks(t,e,s){const o=z(e),a=await t.load(s),n=await a.toBinaryGLTF({ignoreLocalTransform:!0});u(s);const r=await n.buffer();return u(s),{blob:new Blob([r.data],{type:r.type}),assetName:`${ss()}.glb`,assetType:o}}function Ds(t,e){for(const s of t){const o=O(s.source,e);if(o)return o}return null}function O(t,e){if(!t)return null;const{infoFor3D:{supportedFormats:s,editFormats:o}}=e,a=is(t),n=new Array;let r=!1;for(let i=0;i<a.length;++i){const c=Bs(a[i],s);if(!c)return null;o.includes(c.assetType)&&(r=!0),n.push(c)}return r?n:null}function Bs(t,e){const s=rs(t,e);return s?{asset:t,assetType:s}:null}async function q(t,e,s){return R(t.map(o=>Cs(o,s)),e,s)}async function R(t,e,s){const o=g($.uploadAssetBlobs,s==null?void 0:s.onProgress,"uploadAssetBlobs"),a=await qs(t,e,{...s,onProgress:o.makeOnProgress("prepareAssetItems")});u(s);const n=a.map(({item:i})=>i),{uploadResults:r}=await Rs(n,e,{...s,onProgress:o.makeOnProgress("uploadAssetItems")});return u(s),t.map((i,c)=>zs(a[c],r[c],e))}async function Cs(t,e){const{asset:s,assetType:o}=t;if(s instanceof File)return{blob:s,assetName:s.name,assetType:o};const a=await s.toBlob(e);return u(e),{blob:a,assetName:s.assetName,assetType:o}}async function Os(t,e,s){const{blob:o,assetType:a,assetName:n}=t;let r=null;try{const i=await vs({data:o,name:n},e.url,s);u(s),r={assetType:a,assetUploadId:i.itemID}}catch(i){ts(i),Ks().warnOnce(`Service ${e.url} does not support the REST Uploads API.`)}if(!r){const i=await os(o);if(u(s),!i.isBase64)throw new ds;r={assetType:a,assetData:i.data}}if(!r)throw new hs;return{item:r,assetName:n}}function qs(t,e,s){const o=g(t.length,s==null?void 0:s.onProgress,"prepareAssetItems");return Promise.all(t.map(async(a,n)=>{const r=Os(await a,e,{...s,onProgress:o.makeOnProgress(n)});return u(s),r}))}async function Rs(t,e,s){const o=D(s==null?void 0:s.onProgress);try{const a=await f(h(e.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(t)},method:"post",responseType:"json"});if(u(s),a.data.uploadResults.length!==t.length)throw new us(t.length,a.data.uploadResults.length);return a.data}finally{o.remove()}}function zs(t,e,s){const{success:o}=e;if(!o){const{error:p}=e;throw new ps(t.assetName,p)}const{assetHash:a}=e,{assetName:n,item:{assetType:r}}=t,{infoFor3D:{supportedFormats:i}}=s,c=gs(r,i);if(!c)throw new U(r);return new S(n,c,[new x(`${s.parsedUrl.path}/assets/${a}`,a)])}async function Ls(t,e,s){var p;const o=t.map(({assetName:l,parts:d})=>({assetName:l,assetHash:d[0].partHash})),a=(p=e.capabilities)==null?void 0:p.operations.supportsAsyncConvert3D,n={f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:s,async:a},r=h(e.parsedUrl.path,"convert3D");let i;try{i=(await(a?Gs:Hs)(r,{query:n,responseType:"json",timeout:0})).data}catch{throw new ms}const{supportedFormats:c}=e.infoFor3D;return i.assets.map(l=>{const d=k(l.contentType,c);if(!d)throw new U(d);return new S(l.assetName,l.contentType,[new x(l.assetURL,l.assetHash)])})}function Hs(t,e){return f(t,e)}async function Gs(t,e){const s=(await f(t,e)).data.statusUrl;for(;;){const o=(await f(s,{query:{f:"json"},responseType:"json"})).data;switch(o.status){case"Completed":return f(o.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(o.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await es(Ws)}}function Js(t){return!!t.infoFor3D&&!!t.url}function z(t){const{infoFor3D:e}=t,s=k("model/gltf-binary",e.supportedFormats)??ws("glb",e.supportedFormats);if(!s)throw new fs;return s}function Ks(){return as.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const Ws=A(1e3);export{se as uploadAssets};