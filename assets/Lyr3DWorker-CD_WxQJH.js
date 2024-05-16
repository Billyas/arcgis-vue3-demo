const __vite__fileDeps=["assets/lyr3DWorker-CgA8R0Pi.js","assets/index-D0xqwRGM.js","assets/index-Bgzj4hTD.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as M,h9 as y}from"./index-D0xqwRGM.js";var p,N,g,f,d,m,S,b,I,U,L,h,R,T,a;(function(t){t.U8="U8",t.I8="I8",t.U16="U16",t.I16="I16",t.U32="U32",t.I32="I32",t.F32="F32",t.F64="F64",t.Utf8String="Utf8String",t.NotSet="NotSet"})(p||(p={})),function(t){t.Png="Png",t.Jpeg="Jpeg",t.Dds="Dds",t.Raw="Raw",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.Etc2="Etc2",t.Astc="Astc",t.Pvrtc="Pvrtc",t.NotSet="NotSet"}(N||(N={})),function(t){t.Rgb8="Rgb8",t.Rgba8="Rgba8",t.R8="R8",t.Bgr8="Bgr8",t.Bgra8="Bgra8",t.Rg8="Rg8",t.NotSet="NotSet"}(g||(g={})),function(t){t.Position="Position",t.Normal="Normal",t.TexCoord="TexCoord",t.Color="Color",t.Tangent="Tangent",t.FeatureIndex="FeatureIndex",t.UvRegion="UvRegion",t.NotSet="NotSet"}(f||(f={})),function(t){t.Opaque="Opaque",t.Mask="Mask",t.Blend="Blend"}(d||(d={})),function(t){t.None="None",t.Mask="Mask",t.Alpha="Alpha",t.PreMultAlpha="PreMultAlpha",t.NotSet="NotSet"}(m||(m={})),function(t){t.Points="Points",t.Lines="Lines",t.LineStrip="LineStrip",t.Triangles="Triangles",t.TriangleStrip="TriangleStrip",t.NotSet="NotSet"}(S||(S={})),function(t){t.None="None",t.WrapXBit="WrapXBit",t.WrapYBit="WrapYBit",t.WrapXy="WrapXy",t.NotSet="NotSet"}(b||(b={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NotSet="NotSet"}(I||(I={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NearestMipmapNearest="NearestMipmapNearest",t.LinearMipmapNearest="LinearMipmapNearest",t.NearestMipmapLinear="NearestMipmapLinear",t.LinearMipmapLinear="LinearMipmapLinear",t.NotSet="NotSet"}(U||(U={})),function(t){t.FeatureId="FeatureId",t.GlobalUid="GlobalUid",t.UnspecifiedDateTime="UnspecifiedDateTime",t.EcmaIso8601DateTime="EcmaIso8601DateTime",t.EcmaIso8601DateOnly="EcmaIso8601DateOnly",t.TimeOnly="TimeOnly",t.TimeStamp="TimeStamp",t.ColorRgb="ColorRgb",t.ColorRgba="ColorRgba",t.Unrecognized="Unrecognized",t.NotSet="NotSet"}(L||(L={})),function(t){t.Texture="Texture",t.VertexAtrb="VertexAtrb",t.Implicit="Implicit",t.NotSet="NotSet"}(h||(h={})),function(t){t.Front="Front",t.Back="Back",t.None="None",t.NotSet="NotSet"}(R||(R={})),function(t){t.Pbr="Pbr",t.Unlit="Unlit"}(T||(T={})),function(t){t[t.Succeeded=0]="Succeeded",t[t.Failed=1]="Failed",t[t.MissingInputs=2]="MissingInputs"}(a||(a={}));function D(){return new Promise(t=>M(()=>import("./lyr3DWorker-CgA8R0Pi.js"),__vite__mapDeps([0,1,2])).then(r=>r.l).then(({default:r})=>{const n=r({locateFile:P,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function P(t){return y(`esri/libs/lyr3d/${t}`)}let o,e;async function x(t){if(await _(),t.inputs.length<1)return{result:{status:a.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const r={ptrs:[],sizes:[]};for(const i of t.inputs){const c=e._malloc(i.byteLength);new Uint8Array(e.HEAPU8.buffer,c,i.byteLength).set(new Uint8Array(i)),r.ptrs.push(c),r.sizes.push(i.byteLength)}const n=e.process(t.jobDescJson,r,t.isMissingResourceCase),l=n.status===a.Succeeded&&n.data,u=n.status===a.MissingInputs&&n.missingInputUrls.length>0;if(l){const i=n.data.slice();n.data=i}else u&&(n.jobDescJson=n.jobDescJson.slice(0),n.originalInputs=t.inputs);for(let i=0;i<r.ptrs.length;++i)e._free(r.ptrs[i]);const s=[];if(l)s.push(n.data.buffer);else if(u)for(const i of t.inputs)s.push(i);return{result:n,transferList:s}}function A(){e&&(e.uninitialize_lyr3d_worker_wasm(),e=null)}function _(){return e?Promise.resolve():(o||(o=D().then(t=>{e=t,e.initialize_lyr3d_worker_wasm(),o=null})),o)}export{A as destroyWasm,_ as initialize,x as process};
