import{U as l,c as H,P as y,r as v,j as r,I as W,F as S,a as f,_ as k}from"./index.7eb625f0.js";import{F as E,E as j,b as G}from"./FooterRestart.3507ed4b.js";import{F as L}from"./FooterUndo.aa08db4b.js";import{S as J}from"./select.b6966feb.js";import"./event-util.b0b3c4c9.js";const X=()=>l.array(12,!1),F={badThrows:0,crossed:l.array(4,null).map(X),crossedBigPoints:l.array(2,null).map(X),closed:l.array(4,!1),option:null},O="quixx",Q=()=>{try{const s=y.get(O);return JSON.parse(s)}catch{return[]}},M=()=>Q()[0]||F,[I,m]=H(F);m.set(M());const b=s=>{m.set(s);const o=m.get(),t=Q();t.unshift(o),t.length>20&&t.pop(),y.set(O,JSON.stringify(t))},$=()=>{b(F)},V=()=>{const s=Q();if(s.length>1){s.shift(),y.set(O,JSON.stringify(s));const o=s[0];m.set(o)}},z=()=>b(({badThrows:s})=>({badThrows:s+1})),K=5,Y=s=>s*(s+1)/2,U=s=>s.filter(Boolean).length,Z=(s,o,t)=>{const e=o.map(U),n=[e[0],e[0],e[1],e[1]],i=t*K;return l.sum(...s.map((a,c)=>Y(U(a)+n[c])))-i},N=(s,o)=>b(({crossed:t})=>({crossed:l.nextArray(t,s,l.nextArray(t[s],o,!0))})),ss=(s,o)=>{const{crossed:t,closed:e}=m.get(),n=t[s];n&&!e[s]&&n.lastIndexOf(!0)<o&&(o===n.length-2?U(n)>=5&&(N(s,o),N(s,o+1)):o===n.length-1?b({closed:l.nextArray(e,s,!0)}):N(s,o))},os=(s,o)=>{const{crossedBigPoints:t}=m.get(),e=t[s];e&&b({crossedBigPoints:l.nextArray(t,s,l.nextArray(e,o,!0))})},ts=s=>b({option:s}),u={restart:$,undo:V,onBadThrow:z,sum:Z,onCross:ss,onCrossBigPoints:os,chooseData:ts},es=({field:{value:s,color:o},crossed:t,onClick:e,fieldIdx:n,disabled:i,closed:a})=>{const c=v.exports.useCallback(()=>e(n),[e,n]);return r("div",{className:l.classNames("quixx__grid__field",t&&"quixx__grid__field--crossed",!t&&a&&"quixx__grid__field--closed",!t&&(a||i)&&"quixx__grid__field--disabled"),style:{backgroundColor:o},onClick:i||a?void 0:c,children:s===-1?r(W.Unlock,{}):s})},rs=({row:s,rowIdx:o})=>{const{rowCrossed:t,rowClosed:e}=I(({crossed:c,closed:_})=>({rowCrossed:c[o],rowClosed:_[o]})),n=v.exports.useCallback(c=>u.onCross(o,c),[o]),i=t.lastIndexOf(!0),a=t.filter(Boolean).length>=5;return r(S,{children:s.map((c,_)=>r(es,{field:c,crossed:t[_],onClick:n,fieldIdx:_,disabled:i>=_||!a&&t.length-2===_,closed:e},c.value))})},ns=({firstColor:s,secondColor:o,crossed:t,onClick:e,fieldIdx:n,disabled:i,isLastItem:a})=>{const c=v.exports.useCallback(()=>e(n),[e,n]);return a?r("div",{}):r("div",{className:l.classNames("quixx__grid__field quixx__grid__field--big-points",t&&"quixx__grid__field--crossed",i&&"quixx__grid__field--disabled"),style:{background:`linear-gradient(${s} 50%, ${o} 50%)`},onClick:i?void 0:c})},q=({data:s,firstIdx:o,secondIdx:t,bigPointsIdx:e})=>{const{firstCrossed:n,secondCrossed:i,crossed:a}=I(({crossed:x,crossedBigPoints:d})=>({crossed:d[e],firstCrossed:x[o],secondCrossed:x[t]})),c=v.exports.useCallback(x=>u.onCrossBigPoints(e,x),[e]),_=a.lastIndexOf(!0);return r(S,{children:a.map((x,d)=>r(ns,{firstColor:s[o][d].color,secondColor:s[t][d].color,crossed:x,onClick:c,fieldIdx:d,disabled:_>=d||!n[d]&&!i[d],isLastItem:d===a.length-1},d))})},is=4,as=(s,o)=>{const t=s.map((e,n)=>r(rs,{row:e,rowIdx:n},n));return o&&(t.splice(1,0,r(q,{data:s,firstIdx:0,secondIdx:1,bigPointsIdx:0},"foo")),t.splice(4,0,r(q,{data:s,firstIdx:2,secondIdx:3,bigPointsIdx:1},"bar"))),t},cs=({data:s,withBigPoints:o=!1})=>{const{sum:t,badThrows:e}=I(({badThrows:n,crossed:i,crossedBigPoints:a})=>({badThrows:n,sum:u.sum(i,a,n)}));return f(S,{children:[r("div",{className:"quixx__grid",children:as(s,o)}),f("div",{className:"quixx__info",children:[f("div",{className:"quixx__info__bad-throws",children:[r("div",{children:k("QUIXX.badThrows")}),l.array(is).map((n,i)=>r("span",{onClick:e===i?u.onBadThrow:void 0,children:e>i?"\u2718":""},i))]}),f("div",{className:"quixx__info__sum",children:[r("div",{children:k("QUIXX.points")}),r("span",{children:t})]})]})]})},B=[2,3,4,5,6,7,8,9,10,11,12],w=[...B].reverse();B.push(-1);w.push(-1);const P=s=>o=>o.map(t=>({color:s,value:t})),h=P("#f84a4a"),p=P("#ffbb00"),g=P("#30b204"),C=P("#416af7"),T=[h(B),p(B),g(w),C(w)],D=[h([10,6,2,8,3,4,12,5,9,7,11,-1]),p([9,12,4,6,7,2,5,8,11,3,10,-1]),g([8,2,10,12,6,9,7,4,5,11,3,-1]),C([5,7,11,9,12,3,8,10,2,6,4,-1])],R=[[p([2,3,4]),C([5,6,7]),g([8,9,10]),h([11,12,-1])].flat(),[h([2,3]),g([4,5,6,7]),C([8,9]),p([10,11,12,-1])].flat(),[C([12,11,10]),p([9,8,7]),h([6,5,4]),g([3,2,-1])].flat(),[g([12,11]),h([10,9,8,7]),p([6,5]),C([4,3,2,-1])].flat()],A={DEFAULT:{value:T,label:"QUIXX.option.default",withBigPoints:!1},SHUFFLED_NUMBERS:{value:D,label:"QUIXX.option.shuffledNumbers",withBigPoints:!1},SHUFFLED_COLORS:{value:R,label:"QUIXX.option.shuffledColors",withBigPoints:!1},BIG_POINTS:{value:T,label:"QUIXX.option.bigPoints",withBigPoints:!0},BIG_POINTS_SHUFFLED_NUMBERS:{value:D,label:"QUIXX.option.bigPoints.shuffledNumbers",withBigPoints:!0},BIG_POINTS_SHUFFLED_COLORS:{value:R,label:"QUIXX.option.bigPoints.shuffledColors",withBigPoints:!0}},ls={label:"QUIXX.option.choose",value:void 0},ds=s=>s&&u.chooseData(s),us=[ls,...Object.entries(A).map(([s,{label:o}])=>({value:s,label:o}))],_s=()=>r("div",{className:"quixx__selection",children:r(J,{options:us,onChange:ds,value:void 0})}),fs=()=>f(E,{children:[r(L,{onClick:u.undo}),r(G,{onClick:u.restart})]}),ms=()=>{const s=I(({option:t})=>t),o=v.exports.useMemo(()=>s&&A[s],[s]);return o?r(j,{fix:u.restart,children:f("div",{className:"quixx",children:[r("div",{className:"quixx__inner",children:r(cs,{data:o.value,withBigPoints:o.withBigPoints})}),r(fs,{})]})}):f(S,{children:[r(_s,{}),r(E,{children:r(L,{onClick:u.undo})})]})};export{ms as default};
