import{a5 as V,a6 as A,a7 as X,a8 as $,a9 as T,Y as J,a0 as N,O as R,Z as Y,$ as M,aa as Z,ab as j,ac as q,ad as p}from"./index-D0xqwRGM.js";function G(t){return b(t,!0)}function H(t){return b(t,!1)}function b(t,s){if(t==null)return null;const i=t.spatialReference,n=A(i),e=X(t)?t.toJSON():t;if(!n)return e;const h=$(i)?102100:4326,u=T[h].maxX,_=T[h].minX;if(J(e))return S(e,u,_);if(N(e))return e.points=e.points.map(o=>S(o,u,_)),e;if(R(e))return z(e,n);if(Y(e)||M(e)){const o=Z(D,e),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=p(r.xmin,_)*(2*u),a=x===0?e:j(e,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?L(a,u,s):r.xmin<_?L(a,_,s):a}return e}function z(t,s){if(!s)return t;const i=B(t,s).map(n=>n.extent);return i.length<2?i[0]||t:i.length>2?(t.xmin=s.valid[0],t.xmax=s.valid[1],t):{rings:i.map(n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]])}}function S(t,s,i){if(Array.isArray(t)){const n=t[0];if(n>s){const e=p(n,s);t[0]=n+e*(-2*s)}else if(n<i){const e=p(n,i);t[0]=n+e*(-2*i)}}else{const n=t.x;if(n>s){const e=p(n,s);t.x+=e*(-2*s)}else if(n<i){const e=p(n,i);t.x+=e*(-2*i)}}return t}function B(t,s){const i=[],{ymin:n,ymax:e,xmin:h,xmax:u}=t,_=t.xmax-t.xmin,[o,r]=s.valid,{x,frameId:a}=w(t.xmin,s),{x:l,frameId:c}=w(t.xmax,s),k=x===l&&_>0;if(_>2*r){const v={xmin:h<u?x:l,ymin:n,xmax:r,ymax:e},O={xmin:o,ymin:n,xmax:h<u?l:x,ymax:e},P={xmin:0,ymin:n,xmax:r,ymax:e},C={xmin:o,ymin:n,xmax:0,ymax:e},f=[],d=[];I(v,P)&&f.push(a),I(v,C)&&d.push(a),I(O,P)&&f.push(c),I(O,C)&&d.push(c);for(let y=a+1;y<c;y++)f.push(y),d.push(y);i.push(new m(v,[a]),new m(O,[c]),new m(P,f),new m(C,d))}else x>l||k?i.push(new m({xmin:x,ymin:n,xmax:r,ymax:e},[a]),new m({xmin:o,ymin:n,xmax:l,ymax:e},[c])):i.push(new m({xmin:x,ymin:n,xmax:l,ymax:e},[a]));return i}function w(t,s){const[i,n]=s.valid,e=2*n;let h,u=0;return t>n?(h=Math.ceil(Math.abs(t-n)/e),t-=h*e,u=h):t<i&&(h=Math.ceil(Math.abs(t-i)/e),t+=h*e,u=-h),{x:t,frameId:u}}function I(t,s){const{xmin:i,ymin:n,xmax:e,ymax:h}=s;return g(t,i,n)&&g(t,i,h)&&g(t,e,h)&&g(t,e,n)}function g(t,s,i){return s>=t.xmin&&s<=t.xmax&&i>=t.ymin&&i<=t.ymax}function L(t,s,i=!0){const n=!M(t);if(n&&q(t),i)return new E().cut(t,s);const e=n?t.rings:t.paths,h=n?4:2,u=e.length,_=-2*s;for(let o=0;o<u;o++){const r=e[o];if(r&&r.length>=h){const x=[];for(const a of r)x.push([a[0]+_,a[1]]);e.push(x)}}return n?t.rings=e:t.paths=e,t}class m{constructor(s,i){this.extent=s,this.frameIds=i}}const D=V();class E{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,i){let n;if(this._xCut=i,s.rings)this._closed=!0,n=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,n=s.paths,this._minPts=2}for(const h of n){if(!h||h.length<this._minPts)continue;let u=!0;for(const _ of h)u?(this.moveTo(_),u=!1):this.lineTo(_);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&n.push(h);const e=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=e;n.push(h)}return this._closed?s.rings=n:s.paths=n,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const i=this._side(s[0]);if(i*this._prevSide==-1){const n=this._intersect(this._prevPt,s);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(s[0],s[1],i)}else this._lineTo(s[0],s[1],i);this._prevSide=i,this._prevPt=s}close(){const s=this._firstPt,i=this._prevPt;s[0]===i[0]&&s[1]===i[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,i,n){this._closed?(this._lineIn.push([n<=0?s:this._xCut,i]),this._lineOut.push([n>=0?s:this._xCut,i])):(n<=0&&this._lineIn.push([s,i]),n>=0&&this._lineOut.push([s,i]))}_lineTo(s,i,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?s:this._xCut,i),this._addPolyVertex(this._lineOut,n>=0?s:this._xCut,i)):n<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,i])):n>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,i])):this._prevSide<0?(this._lineIn.push([s,i]),this._lineOut.push([s,i])):this._prevSide>0&&(this._lineOut.push([s,i]),this._lineIn.push([s,i]))}_addPolyVertex(s,i,n){const e=s.length;e>1&&s[e-1][0]===i&&s[e-2][0]===i?s[e-1][1]=n:s.push([i,n])}_checkClosingPt(s){const i=s.length;i>3&&s[0][0]===this._xCut&&s[i-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[i-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,i){const n=(this._xCut-s[0])/(i[0]-s[0]);return s[1]+n*(i[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}export{H as a,G as p};
