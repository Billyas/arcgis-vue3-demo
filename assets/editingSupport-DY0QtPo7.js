import{au as $,av as v,aw as E,ar as S,s as o,ax as R,ay as w,k as O,S as k,az as L,aA as U,V as G,E as j,aB as B,aC as T,G as V,aD as y,a8 as D}from"./index-D0xqwRGM.js";import{u as z,i as W}from"./infoFor3D-DsOdlPuA.js";function F(e){return(e==null?void 0:e.applyEdits)!=null}function M(e){return typeof e=="object"&&e!=null&&"objectId"in e&&!!e.objectId}function te(e){return e.every(M)}function x(e){return typeof e=="object"&&e!=null&&"globalId"in e&&!!e.globalId}function ae(e){return e.every(x)}async function re(e,t,a,r={}){var d;let s;const n="gdbVersion"in e?e.gdbVersion:null,u=r.gdbVersion??n;if($(e)&&e.url)s=v(e.url,e.layerId,u,r.returnServiceEditsOption==="original-and-current-features");else{s=E(),s.promise.then(p=>{(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&e.emit("edits",p)});const i={result:s.promise};e.emit("apply-edits",i)}try{const{results:i,edits:p}=await C(e,t,a,r),c=h=>h.filter(I=>!I.error).map(S),l={edits:p,addedFeatures:c(i.addFeatureResults),updatedFeatures:c(i.updateFeatureResults),deletedFeatures:c(i.deleteFeatureResults),addedAttachments:c(i.addAttachmentResults),updatedAttachments:c(i.updateAttachmentResults),deletedAttachments:c(i.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:i.editMoment?new Date(i.editMoment):null,globalIdToObjectId:r.globalIdToObjectId};return(d=i.editedFeatureResults)!=null&&d.length&&(l.editedFeatures=i.editedFeatureResults),s.resolve(l),i}catch(i){throw s.reject(i),i}}async function C(e,t,a,r){var u,d,i,p,c,l;if(await e.load(),!F(t))throw new o(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!R(e))throw new o(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:n}=await q(e,a,r);return(u=s.addFeatures)!=null&&u.length||(d=s.updateFeatures)!=null&&d.length||(i=s.deleteFeatures)!=null&&i.length||(p=s.addAttachments)!=null&&p.length||(c=s.updateAttachments)!=null&&c.length||(l=s.deleteAttachments)!=null&&l.length?{edits:s,results:await t.applyEdits(s,n)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function q(e,t,a){const r=w(e),s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),n=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=e.infoFor3D!=null;if(P(t,r,a,!!s,!!n,`${e.type}-layer`),!r.data.isVersioned&&(a==null?void 0:a.gdbVersion))throw new o(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&(a!=null&&a.rollbackOnFailureEnabled))throw new o(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const d={...a};if(d.rollbackOnFailureEnabled!=null||r.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||d.returnServiceEditsOption!=="original-and-current-features"||(d.rollbackOnFailureEnabled===!1&&O.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),d.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new o(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&d.returnServiceEditsOption!=="original-and-current-features")throw new o(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const i=K(t,r,`${e.type}-layer`),p=(a==null?void 0:a.globalIdUsed)||u,c=e.fields.filter(l=>l.type==="big-integer"||l.type==="oid"&&(l.length||0)>=8);if(p){const{globalIdField:l}=e;if(l==null)throw new o(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");i.addFeatures.forEach(h=>X(h,l))}return i.addFeatures.forEach(l=>N(l,e,p,c)),i.updateFeatures.forEach(l=>_(l,e,p,c)),i.deleteFeatures.forEach(l=>Z(l,e,p,c)),i.addAttachments.forEach(l=>m(l,e)),i.updateAttachments.forEach(l=>m(l,e)),u&&await Q(i,e),{edits:await H(i),options:d}}function f(e,t,a,r){var s,n;if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new o(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const u of r){const d=e.attributes[u.name];if(d!==void 0&&!B(u,d))throw new o(`${t.type}-layer:invalid-parameter`,`Big-integer field '${u.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&((s=t.capabilities)==null?void 0:s.data.supportsZ)===!1)throw new o(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((n=t.capabilities)==null?void 0:n.data.supportsM)===!1)throw new o(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function A(e,t){var a;if("geometry"in e&&((a=e.geometry)==null?void 0:a.type)==="mesh"&&t.infoFor3D!=null&&t.spatialReference!=null){const{geometry:r}=e,{spatialReference:s,vertexSpace:n}=r,u=t.spatialReference,d=n.type==="local",i=T(u),p=V(u,s),c=p||y(u)&&(y(s)||D(s));if(!(d&&i&&c||!d&&!i&&p))throw new o(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${n.type} vertex space and a spatial reference wkid:${s.wkid} to a layer with a spatial reference wkid:${u.wkid} is not supported.`)}}function N(e,t,a,r){f(e,t,a,r),A(e,t)}function Z(e,t,a,r){f(e,t,a,r)}function _(e,t,a,r){f(e,t,a,r),A(e,t);const s=w(t);if("geometry"in e&&e.geometry!=null&&!(s!=null&&s.editing.supportsGeometryUpdate))throw new o(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function m(e,t){var s;const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new o(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((s=t.capabilities)!=null&&s.editing.supportsUploadWithItemId)&&r.uploadId)throw new o(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof r.data=="string"){const n=k(r.data);if(n&&!n.isBase64)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function X(e,t){const{attributes:a}=e;a[t]==null&&(a[t]=L())}async function H(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map(d=>d.geometry),s=await U(r),n=t.length,u=a.length;return s.slice(0,n).forEach((d,i)=>t[i].geometry=d),s.slice(n,n+u).forEach((d,i)=>a[i].geometry=d),e}function J(e){return{addFeatures:Array.from((e==null?void 0:e.addFeatures)??[]),updateFeatures:Array.from((e==null?void 0:e.updateFeatures)??[]),deleteFeatures:e&&G.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function K(e,t,a){var s,n,u;const r=J(e);if((s=r.addFeatures)!=null&&s.length&&!t.operations.supportsAdd)throw new o(`${a}:unsupported-operation`,"Layer does not support adding features.");if((n=r.updateFeatures)!=null&&n.length&&!t.operations.supportsUpdate)throw new o(`${a}:unsupported-operation`,"Layer does not support updating features.");if((u=r.deleteFeatures)!=null&&u.length&&!t.operations.supportsDelete)throw new o(`${a}:unsupported-operation`,"Layer does not support deleting features.");return r.addFeatures=r.addFeatures.map(g),r.updateFeatures=r.updateFeatures.map(g),r.addAssetFeatures=[],r}function P(e,t,a,r,s,n){if(!e||!r&&!s)throw new o(`${n}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&(a!=null&&a.globalIdUsed))throw new o(`${n}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new o(`${n}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(a!=null&&a.globalIdUsed)&&s)throw new o(`${n}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function g(e){const t=new j;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function Q(e,t){if(t.infoFor3D==null)return;const{infoFor3D:a}=t,r=z("model/gltf-binary",a.supportedFormats)??W("glb",a.supportedFormats);if(!(r&&a.editFormats.includes(r)))throw new o(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:s}=e;for(const n of e.addFeatures??[])b(n)&&s.push(n);for(const n of e.updateFeatures??[])b(n)&&s.push(n)}function b(e){var t;return((t=e==null?void 0:e.geometry)==null?void 0:t.type)==="mesh"}function se(e,t,a,r){if(!F(t))throw new o(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new o(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}export{re as applyEdits,P as checkEditingCapabilities,ae as isFeatureIdentifierArrayWithGlobalId,te as isFeatureIdentifierArrayWithObjectId,x as isFeatureIdentifierWithGlobalId,M as isFeatureIdentifierWithObjectId,J as normalizeCollections,K as normalizeEdits,H as normalizeGeometries,g as shallowCloneFeature,se as uploadAssets};