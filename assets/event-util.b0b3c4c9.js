import{j as I,_ as V,R as C,r as c}from"./index.7eb625f0.js";const ct=({error:t})=>I("span",{className:"invalid-feedback",children:V(t)});var P={exports:{}},E={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=C,M=Symbol.for("react.element"),N=Symbol.for("react.fragment"),U=Object.prototype.hasOwnProperty,q=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function k(t,r,n){var e,u={},s=null,a=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(a=r.ref);for(e in r)U.call(r,e)&&!T.hasOwnProperty(e)&&(u[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)u[e]===void 0&&(u[e]=r[e]);return{$$typeof:M,type:t,key:s,ref:a,props:u,_owner:q.current}}E.Fragment=N;E.jsx=k;E.jsxs=k;P.exports=E;const g=P.exports.jsx;class D extends Error{constructor(r){super(r),Object.setPrototypeOf(this,new.target.prototype),this.name=this.constructor.name}}const y=C.createContext(null),S=t=>Boolean(t&&typeof t.then=="function"),L=["onChange","onBlur","onSubmit"],F=(t,r)=>{if(!t)return;const n=[];let e;if(L.forEach(u=>{const s=t[u];if(s&&!e){const a=s(r);a&&(S(a)?n.push(a):e=a)}}),e)return e;if(n.length>0)return new Promise(u=>{Promise.all(n).then(s=>{u(s.find(Boolean))})})},m=(t,r)=>{const n=t.toString();return n?n.split(".").reduce((u,s)=>u==null?void 0:u[s],r):r},O=(t,r="")=>(r&&r+".")+t,j=(t,r)=>Object.entries(t).reduce((n,[e,u])=>{const s=O(e,r);if(!u)return n;const{onChange:a,onBlur:o,onSubmit:i,...l}=u;return{...n,[s]:{onChange:a,onBlur:o,onSubmit:i},...j(l,s)}},{}),$=(t,r)=>{const n=R(t),e=[],u=j(r);return Object.entries(u).forEach(([s,a])=>{const o=F(a,m(s,t.values));o&&(S(o)?e.push(o.then(i=>{n.errors[s]=i})):n.errors[s]=o)}),e.length>0?new Promise(s=>{Promise.all(e).then(()=>s(_(n)))}):_(n)},H=(t,r,n)=>{const e=r.toString().split("."),u={...t};let s=u;return e.forEach((a,o)=>{o===e.length-1?s[a]=n:(s[a]={...s[a]},s=s[a])}),u},W=(t,r,n,e,u)=>{const s=R(t);return s.values=H(s.values,r,n),s.dirty[r]=e,s.errors[r]=u,_(s)},R=t=>({...t,values:{...t.values},errors:{...t.errors},dirty:{...t.dirty}}),J=t=>Object.values(t.errors).some(r=>r!==void 0),_=t=>({...t,hasErrors:J(t),isDirty:Object.values(t.dirty).some(Boolean)}),Y=t=>{const r=c.exports.useRef(!0);c.exports.useEffect(()=>()=>{r.current=!1},[]);const n=c.exports.useCallback(s=>{r.current&&t.current.onChange(s)},[]),e=c.exports.useCallback((s,a)=>{r.current&&Promise.resolve().then(()=>{var o,i;(i=(o=t.current).onSubmitFailed)==null||i.call(o,s,a)})},[]),u=c.exports.useCallback(s=>{r.current&&Promise.resolve().then(()=>{var a,o;(o=(a=t.current).onSubmitFinished)==null||o.call(a,s)})},[]);return{onChange:n,onSubmitFinished:u,onSubmitFailed:e}},z=(t,r,n)=>{const e=c.exports.useCallback((a,o,i)=>{const{data:l}=t.current;(m(a,l.values)!==o||i&&!l.errors[a])&&n(W(l,a,o,o!==m(a,r.current),i))},[n]),u=c.exports.useCallback((a,o,i)=>{var l,d;const{data:b,validation:x}=t.current,v=o==="onChange"?i:m(a,b.values),p=(d=(l=m(a,x))==null?void 0:l[o])==null?void 0:d.call(l,v);S(p)?(m(a,b.values)!==v&&e(a,v,void 0),p.then(h=>{m(a,t.current.data.values)===v&&e(a,v,h)})):e(a,v,p)},[e]),s=c.exports.useRef(u);return s.current=u,s},G=(t,r,n,e,u)=>{const s=c.exports.useCallback(()=>{const o=_({...t.current.data,isSubmitting:!1,dirty:{}});n(o.values),r(o),e(o)},[r,e]),a=c.exports.useCallback(o=>{if(!o.hasErrors)new Promise(i=>{var l,d;return i((d=(l=t.current).onSubmit)==null?void 0:d.call(l,o.values))}).then(s).catch(i=>{const l={...t.current.data,isSubmitting:!1};r(l),u(i,l)});else{const i={...o,isSubmitting:!1};r(i),u(new D("validation failed"),i)}},[s,r,u]);return c.exports.useCallback(o=>{o==null||o.preventDefault();const{data:i,validation:l}=t.current;r({...i,isSubmitting:!0});const d=l?$(i,l):i;S(d)?d.then(b=>{a(b)}):a(d)},[a,r])},Q=({className:t,children:r,version:n,...e},u)=>{const s=c.exports.useRef(e.data.values),a=c.exports.useCallback(f=>{s.current=f},[]),o=c.exports.useRef(e);o.current=e;const{onChange:i,onSubmitFinished:l,onSubmitFailed:d}=Y(o),b=z(o,s,i),x=G(o,i,a,l,d),[v,p]=c.exports.useState(()=>({data:e.data,update:(...f)=>b.current(...f),isRequired:f=>!!F(m(f,o.current.validation)),clearErrors:f=>o.current.onChange(ot.clearErrors(o.current.data,f))})),h=c.exports.useRef(!0);c.exports.useEffect(()=>{h.current||p(f=>({...f,data:e.data}))},[e.data]),c.exports.useEffect(()=>{h.current||(a(o.current.data.values),i(_({...o.current.data,errors:{},dirty:{}})))},[n]),c.exports.useEffect(()=>{h.current=!1},[]),c.exports.useImperativeHandle(u,()=>({submit:()=>x(),updateInitialData:f=>{s.current=f(s.current)}}),[x]);const{Provider:B}=y;return g("form",{className:t,onSubmit:x,noValidate:!0,children:g(B,{value:v,children:r})})},X=C.forwardRef(Q),Z=t=>{const{update:r,data:n,isRequired:e}=c.exports.useContext(y);return{onChange:c.exports.useCallback(u=>r(t,"onChange",u),[r,t]),onBlur:c.exports.useCallback(()=>r(t,"onBlur",void 0),[r,t]),value:m(t,n.values),error:n.errors[t],dirty:!!n.dirty[t],required:e(t),name:t.toString()}},w=(t="")=>new Proxy({},{get(r,n){return n==="toString"||typeof n=="symbol"?()=>t:(r[n]||(r[n]=w(O(n,t))),r[n])}}),K=()=>c.exports.useMemo(()=>({fields:w(),Form:X}),[]),tt=t=>({values:t,errors:{},hasErrors:!1,dirty:{},isDirty:!1,isSubmitting:!1}),rt=({hasErrors:t,isDirty:r,isSubmitting:n},{skipDirty:e}={})=>t||n||!(r||e),et=t=>t instanceof D,st=(t,r)=>{const n=Object.entries(t.errors).filter(([u,s])=>s&&!u.startsWith(r.toString())),e=Object.fromEntries(n);return{...t,errors:e,hasErrors:!!n.length}},nt=()=>c.exports.useContext(y).clearErrors,ot={useForm:K,useField:Z,initialData:tt,notSubmittable:rt,isValidationError:et,clearErrors:st,useClearErrors:nt},at=(t,{preventDefault:r=!0}={})=>n=>{r&&n.preventDefault();const e=n.target.value;t(e)},ut=t=>t.preventDefault(),lt={inputHandler:at,preventDefault:ut};export{ct as D,lt as E,ot as M};
