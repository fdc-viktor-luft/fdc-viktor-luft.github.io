import{j as t,U as l,G as j,r as m,c as ls,P as L,v as k,I as y}from"./index-C5d-M75W.js";import{F as T,a as f,E as ds,b as Rs}from"./FooterRestart-DWUh72Zz.js";import{F as Z}from"./FooterUndo-C2bEwUJe.js";import{C as Os,a as b}from"./Cube-DTWxKmxa.js";import{S as Gs}from"./select-DfqDIqjF.js";import"./DisplayError-Bw3wIOAX.js";const g=({content:s,color:o,customColor:e,circled:n,crossed:a,onClick:i,star:d,borderColor:r,flicker:G})=>t.jsx("div",{children:t.jsx("div",{className:l.classNames("box box-bordered",G&&"box-flicker"),onClick:i,children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",children:[t.jsx("rect",{x:"0",y:"0",width:"50",height:"50",rx:"10",ry:"10",fill:o&&Os[o]||e||"white"}),r&&t.jsx("rect",{x:"1",y:"1",width:"48",height:"48",rx:"10",ry:"10",fill:"none",stroke:r,strokeWidth:"3"}),d&&t.jsx("polygon",{points:"25 5,31 20,45 20,34 28,40 44,25 34,9 44,16 28,5 20,19 20",fill:"white"}),s!==void 0&&t.jsx("text",{textAnchor:"middle",x:"25",y:"35",fontSize:"30",children:s}),n&&t.jsx("circle",{cx:"25",cy:"25",r:"23",fill:"none",stroke:"black",strokeWidth:"2"}),a&&t.jsxs("g",{stroke:"black",strokeWidth:"4",children:[t.jsx("line",{x1:"5",y1:"5",x2:"45",y2:"45"}),t.jsx("line",{x1:"5",y1:"45",x2:"45",y2:"5"})]})]})})}),Bs=s=>()=>c.blockColorPoints(s),w="OBGRY".split(""),hs=({colorPointsBlocked:s,completedColors:o})=>t.jsxs("div",{className:l.classNames("again-color-points"),children:[t.jsx("div",{className:"again-color-points-1",children:w.map((e,n)=>t.jsx(g,{content:5,color:e,crossed:s[n],onClick:Bs(n),circled:!s[n]&&o[n]},n))}),t.jsx("div",{className:"again-color-points-2",children:w.map((e,n)=>t.jsx(g,{content:3,color:e,circled:s[n]&&o[n]},n))})]}),us="533322212223335".split("").map(Number),xs="322211101112223".split("").map(Number),D=s=>s.map(o=>o.every(e=>e)),F=(s,o)=>"OBGRY".split("").map(e=>s.every((n,a)=>n.every((i,d)=>o.grid[a][d]!==e||i))),Ys=(s,o,e,n)=>{const{rowPointsBlocked:a,colorPointsBlocked:i,crossed:d,takenJokers:r,hasStandardPoints:G}=s,R=l.sum(...e.map((x,Y)=>x?a[Y]?xs[Y]:us[Y]:0)),h=l.sum(...n.map((x,Y)=>x?i[Y]?3:5:0)),B=-r,u=l.sum(...d.map((x,Y)=>x[o.stars[Y]]?2:0));return R+h+B+u+(G?-22:0)},U=(s,o=!0)=>s.map((e,n)=>e.map((a,i)=>!a&&(o&&n===7||(s[n-1]||{})[i]||(s[n+1]||{})[i]||e[i-1]||e[i+1]))),ps=(s,o)=>{const e=D(s.crossed),n=F(s.crossed,o),a=Ys(s,o,e,n);return{completedRows:e,completedColors:n,totalPoints:a}},gs=(s,o,e,n,a)=>{if(s){const i=D(o),r=D(e).map((B,u)=>B&&!i[u]),G=F(e,n),R=F(o,n),h=G.map((B,u)=>B&&!R[u]).findIndex(Boolean);return{type:p.CHOSEN,data:{...s,completedRows:r,completedColor:w[h]},index:a+1}}return{type:p.SKIP,index:a+1}},Q=s=>{const o=s.filter(e=>typeof e.index=="number");return o.length>0?o[o.length-1]:void 0},ms=s=>s.map(o=>o.split("")),js=s=>s.split("").map(Number),ks=({label:s,grid:o,stars:e,backgroundColor:n})=>({label:s,grid:ms(o),stars:js(e),backgroundColor:n}),ys={black:{label:"AGAIN.color.black",backgroundColor:"#222222",stars:"251513205150635",grid:["GOBBRRY","GGGROBY","GYRROBB","YGGGORB","YYGOORB","YYGORRB","YOGBBRR","GORBBYY","BRRGOYY","BBRGOOY","BBYYORG","OOYYRBG","YOOORBG","YGGRRBO","YGGBROO"]},blue:{label:"AGAIN.color.blue",backgroundColor:"#64a8ff",stars:"125161046141324",grid:["ROBBGGY","RROBBGY","GROOBYY","GBBORYY","YBGORRR","YGGGRBO","YYGRBBO","GGRRBYO","GGOOBYR","RRGOBYY","RGGOOBY","RYGOBBB","RRGBYOO","OOGBYYR","OOYYGBR"]},green:{label:"AGAIN.color.green",backgroundColor:"#22b244",stars:"044266214405344",grid:["OGBBBRY","GGBORRY","BGOOORY","BGGORRY","RRYOBBG","RYYGOBB","RGGGOBY","GRBBOYY","GGRBBYO","GGRBYYO","YRRBOOG","YYROOBG","YYORRGB","RROOYGB","RYYOOGB"]},orange:{label:"AGAIN.color.orange",backgroundColor:"#d03b09",stars:"030414031051652",grid:["OBYYRGG","OOBYYGR","YOBBGGR","OOGYBRR","RGGYBBO","RRRYGBO","RGGYYBO","GGYBOOR","OYYBBGR","RRYYBGO","GRRYBOO","GGRRBYO","GBBOOYR","GYYOBBR","GYOOBBR"]},pink:{label:"AGAIN.color.pink",backgroundColor:"#9c2271",stars:"206201230315514",grid:["GRBBBOY","GOBBRYY","OOBRRGY","OYRRBGG","OGGRBBY","RGGGBOY","RBBGOOY","RYYOBGG","YYROBBG","BYRROOG","BGRYYOO","BOOGYYR","BOGGYRR","BOOGYRR","RROGBYY"]},violet:{label:"AGAIN.color.violet",backgroundColor:"#701fa7",stars:"530420214213612",grid:["YOOOGBR","YBOGGGR","OBBYGRR","OBBYRGG","ORYYYGB","GRRYOOB","BROOGGY","BROGGYY","BROOYGG","YYBBORG","YYBBORG","RBBOOYG","RRRBOYG","GRBBOYY","GOBRRRY"]},yellow:{label:"AGAIN.color.yellow",backgroundColor:"#d09012",stars:"625062536324220",grid:["RRBOYYG","GGROBYY","GRROBBY","YRBOOGG","YRBBOGG","YYGBROO","YYGBROO","OOGBRYY","RRGGBYO","RRGYBOO","GGRYBBO","GGBBRYO","GBORRYY","BBBROYG","YBRROOG"]},grey:{label:"AGAIN.color.grey",backgroundColor:"#cfcfcf",stars:"630360526100354",grid:["RBBOOGY","RYYBOGG","OYBBRRG","YYBGROO","YOBBGGR","ROOYBGG","RROYBGG","GROBBYY","GBBOYYR","YBGOORR","YYGGORB","OYYGRRB","ORRGYBB","OORRYBG","BOORYGG"]}},v=Object.fromEntries(Object.entries(ys).map(([s,o])=>[s,ks(o)])),J=Object.keys(v),Cs=J.map(s=>({label:v[s].label,value:s})),vs=(s,o)=>{let e=0;return(...n)=>{j.window().clearTimeout(e),e=j.window().setTimeout(()=>s(...n),o)}},Ns={debounced:vs},fs=(s,o,e)=>{const n=m.useRef(o);n.current=o;const a=m.useCallback(i=>{n.current(i)},[]);m.useEffect(()=>(j.window().addEventListener(s,a,e),()=>j.window().removeEventListener(s,a,e)),[s,e])},bs=s=>{const o=m.useRef(s);o.current=s;const e=m.useCallback(Ns.debounced(()=>{o.current(j.window().innerWidth)},10),[]);fs("resize",e)},ws=.48,S="again-resize",Ss=()=>{const s=ws-(window.innerHeight-48)/window.innerWidth;return s>0?s*window.innerWidth:0},V=()=>{const s=Ss(),o=s?`0 ${s}px`:"";Array.from(document.getElementsByClassName(S)).forEach(e=>{e.style.setProperty("padding",o)})},As=()=>{m.useEffect(V,[]),bs(V)},z="ABCDEFGHIJKLMNO".split(""),Ps=()=>t.jsx("div",{className:l.classNames("again-letters",S),children:z.map((s,o)=>t.jsx(g,{content:s},o))});var p=(s=>(s.ROW="row",s.COLOR="color",s.JOKER="joker",s.SKIP="skip",s.CHOSEN="chosen",s))(p||{});const Es=l.array(7).map(()=>!1),C=l.array(15).map(()=>Es),Ws=l.array(15).map(()=>!1),Ds=l.array(5).map(()=>!1),K={crossed:C,rowPointsBlocked:Ws,colorPointsBlocked:Ds,takenJokers:0,turns:[],option:null,hasStandardPoints:!1},M={crossed:C,turnCrossed:C,chosen:null,completedColor:null},[A,O]=ls({againSplash:null,again:K,againData:null,againStarted:M}),Fs=s=>O.set({againSplash:s}),$="again",I=()=>{try{const s=L.get($);return JSON.parse(s)}catch{return[]}},Js=s=>Math.floor(Math.random()*s),Hs=()=>J[Js(J.length)],Ls=s=>s==="random"?Hs():s,Ts=s=>{const o=Ls(s);O.set({againData:v[o]}),_({option:o})},P=s=>O.set(({againStarted:o})=>({againStarted:{...o,...s}})),_=(s,o)=>{O.set(({again:a})=>({again:{...a,...s}}));const e=O.get().again;o||P({crossed:e.crossed});const n=I();n.unshift(e),n.length>20&&n.pop(),L.set($,JSON.stringify(n))},zs=()=>{if(!O.get().againSplash){const s=I();if(s.length>1){s.shift(),L.set($,JSON.stringify(s));const o=s[0];O.set({again:o,againSplash:"undo",againData:o.option?v[o.option]:null}),P({crossed:o.crossed})}}},E=()=>I()[0]||K,Ks=()=>{const s=E();O.set({again:s,againData:s.option?v[s.option]:null,againStarted:{...M,crossed:s.crossed}})},Ms=()=>{_({...K,hasStandardPoints:O.get().again.hasStandardPoints}),P(M),O.set({againData:null})};Ks();const $s=(s,o)=>{const{againStarted:{crossed:e,turnCrossed:n,chosen:a},againData:i}=O.get(),d=e[o];if(!d[s]&&i){const r=i.grid[o][s];if(a&&(r!==a.color||a.count>4))return;const G=l.nextArray(d,s,!0),R=l.nextArray(n[o],s,!0),h=a?a.count+1:1;c.setStarted({crossed:l.nextArray(e,o,G),turnCrossed:l.nextArray(n,o,R),chosen:{color:r,count:h}})}},Is=()=>{const{againStarted:{crossed:s,chosen:o},againSplash:e,again:n,againData:a}=O.get();if(!e&&a){const i=Q(n.turns),d=i?i.index:0,r=gs(o,n.crossed,s,a,d);c.set({crossed:s,turns:[...n.turns,r]}),c.setSplash(r.type==="skip"?"skip":"submit"),c.setStarted({turnCrossed:C,chosen:null,completedColor:r.type==="chosen"?r.data.completedColor:void 0})}},_s=()=>{const{againSplash:s,again:o}=O.get();s||(c.setSplash("cancel"),c.setStarted({turnCrossed:C,chosen:null,crossed:o.crossed,completedColor:null}))},Us=()=>c.setStarted({completedColor:null}),Vs=()=>{const{takenJokers:s,turns:o}=E();c.set({takenJokers:s+1,turns:[...o,{type:"joker"}]},!0)},qs=s=>{const{rowPointsBlocked:o,turns:e}=E();c.set({rowPointsBlocked:l.nextArray(o,s,!0),turns:[...e,{type:"row",data:z[s]}]},!0)},Zs=s=>{const{colorPointsBlocked:o,turns:e}=E();c.set({colorPointsBlocked:l.nextArray(o,s,!0),turns:[...e,{type:"color",data:w[s]}]},!0)},c={set:_,undo:zs,restart:Ms,chooseData:Ts,setSplash:Fs,setStarted:P,onCross:$s,onFinish:Is,onAbort:_s,onClosePopup:Us,takeJoker:Vs,blockRowPoints:qs,blockColorPoints:Zs},N=({children:s,onClick:o})=>t.jsx("div",{children:t.jsx("div",{className:"box",onClick:o,children:s})}),Qs=()=>t.jsx(N,{children:t.jsxs("svg",{viewBox:"0 0 50 50",children:[t.jsx("rect",{x:"0",y:"0",width:"50",height:"50",rx:"10",ry:"10",fill:"black"}),t.jsx("text",{textAnchor:"middle",x:"25",y:"38",fontSize:"40",fontWeight:"900",fill:"white",children:"?"})]})}),Xs=()=>t.jsx(N,{children:t.jsxs("svg",{viewBox:"0 0 50 50",children:[t.jsx("rect",{x:"0",y:"0",width:"50",height:"50",rx:"10",ry:"10",fill:"black"}),t.jsxs("g",{stroke:"white",strokeWidth:"10",children:[t.jsx("line",{x1:"10",y1:"10",x2:"40",y2:"40"}),t.jsx("line",{x1:"10",y1:"40",x2:"40",y2:"10"})]})]})}),st=()=>t.jsx(N,{children:t.jsx("svg",{viewBox:"0 0 50 50",children:t.jsx("line",{x1:"15",y1:"45",x2:"35",y2:"5",stroke:"black",strokeWidth:"10"})})}),tt=()=>t.jsx(N,{children:t.jsxs("svg",{viewBox:"0 0 50 50",children:[t.jsx("line",{x1:"10",y1:"20",x2:"40",y2:"20",stroke:"black",strokeWidth:"7"}),t.jsx("line",{x1:"10",y1:"30",x2:"40",y2:"30",stroke:"black",strokeWidth:"7"})]})}),X=({taken:s,onClick:o})=>t.jsx(N,{onClick:o,children:t.jsxs("svg",{viewBox:"0 0 50 50",children:[t.jsx("circle",{cx:"25",cy:"25",r:"23",fill:"white",stroke:"black",strokeWidth:"2"}),t.jsx("text",{textAnchor:"middle",x:"25",y:"38",fontSize:"40",fontWeight:"900",children:"!"}),s&&t.jsxs("g",{stroke:"black",strokeWidth:"4",children:[t.jsx("line",{x1:"7",y1:"7",x2:"43",y2:"43"}),t.jsx("line",{x1:"7",y1:"43",x2:"43",y2:"7"})]})]})}),ot=({takenJokers:s})=>t.jsxs("div",{className:"again-jokers",children:[t.jsx(Qs,{}),t.jsx(st,{}),t.jsx(Xs,{}),t.jsx(tt,{}),l.array(8).map((o,e)=>t.jsx(X,{onClick:e===s?c.takeJoker:void 0,taken:e<s},e))]}),ss=()=>t.jsx("svg",{className:"icon",viewBox:"0 0 500 500",children:t.jsxs("g",{stroke:"red",strokeWidth:"100",children:[t.jsx("line",{x1:"80",y1:"80",x2:"420",y2:"420"}),t.jsx("line",{x1:"80",y1:"420",x2:"420",y2:"80"})]})}),ts=()=>t.jsx("svg",{className:"icon",viewBox:"0 0 500 500",children:t.jsxs("g",{stroke:"darkgreen",strokeWidth:"100",children:[t.jsx("line",{x1:"70",y1:"180",x2:"262",y2:"347"}),t.jsx("line",{x1:"220",y1:"320",x2:"420",y2:"80"})]})}),et=()=>t.jsx(t.Fragment,{children:t.jsx(y.Ban,{className:"cube"})}),os=({chosen:{count:s,color:o}})=>t.jsxs(t.Fragment,{children:[t.jsx(b,{count:s}),t.jsx(b,{color:o})]}),nt=({chosen:s})=>t.jsxs(T,{hideHome:!0,className:"turn-control top",children:[t.jsx(f,{onClick:c.onAbort,children:t.jsx(ss,{})}),t.jsx(f,{className:"turn",children:t.jsx(os,{chosen:s})}),t.jsx(f,{onClick:c.onFinish,children:t.jsx(ts,{})})]}),at=({chosen:{completedColor:s,completedRows:o}})=>{const e=[];return s&&e.push(t.jsx(b,{color:s},"color")),o&&o.forEach((n,a)=>{n&&e.push(t.jsx(g,{content:z[a]},a))}),e.length>0?t.jsxs(t.Fragment,{children:[t.jsx(y.ArrowRight,{className:"success-arrow"}),e]}):null},es=({turn:s,hideIndex:o})=>{switch(s.type){case p.CHOSEN:return t.jsxs("div",{className:"again-turn",children:[o||`${s.index}) `,t.jsx("div",{className:"turn-chosen",children:t.jsx(os,{chosen:s.data})}),o||t.jsx("div",{className:"turn-success",children:t.jsx(at,{chosen:s.data})})]});case p.SKIP:return t.jsxs("div",{className:"again-turn",children:[o||`${s.index}) `,t.jsx("div",{className:"turn-chosen",children:t.jsx(et,{})})]});case p.JOKER:return t.jsx("div",{className:"again-pseudo-turn",children:t.jsx(X,{taken:!0})});case p.COLOR:return t.jsx("div",{className:"again-pseudo-turn",children:t.jsx(g,{color:s.data,crossed:!0})});case p.ROW:return t.jsx("div",{className:"again-pseudo-turn",children:t.jsx(g,{content:s.data,crossed:!0})})}},rt=({turns:s})=>t.jsxs("div",{className:"again-turns",children:[t.jsx("h4",{children:k("AGAIN.madeTurns")}),s.map((o,e)=>t.jsx(es,{turn:o},e))]}),ct=s=>{if(!s)return null;switch(s){case"cancel":return t.jsx(ss,{});case"submit":return t.jsx(ts,{});case"undo":return t.jsx(y.Undo,{className:"reflect"});case"skip":return t.jsx(y.Ban,{});default:return null}},it=()=>c.setSplash(null),lt=()=>{const{icon:s}=A(({againSplash:e})=>({icon:e}));m.useEffect(()=>()=>{window.setTimeout(it,500)},[s]);const o=ct(s);return o?t.jsxs("div",{className:"again-splash",children:[t.jsx("div",{className:"splash-overlay"}),t.jsx("div",{className:"splash-content",children:o})]}):null},dt=({color:s,onClose:o})=>t.jsxs("div",{className:"again-popup",onClick:o,children:[t.jsx("div",{className:"popup-overlay"}),t.jsxs("div",{className:"popup-content",children:[k("AGAIN.color.finished"),t.jsx(b,{color:s})]})]}),Rt="533322212223335".split("").map(Number),Ot="322211101112223".split("").map(Number),Gt=s=>()=>c.blockRowPoints(s),H=(s,o)=>!!(o&&o.type===p.CHOSEN&&o.data.completedRows&&o.data.completedRows[s]),q="#5eee61",Bt=({rowPointsBlocked:s,completedRows:o,lastTurn:e})=>t.jsxs("div",{className:l.classNames("again-row-points",S),children:[t.jsx("div",{className:"again-row-points-1",children:Rt.map((n,a)=>t.jsx(g,{content:n,crossed:s[a],onClick:s[a]?void 0:Gt(a),circled:!s[a]&&o[a],customColor:!s[a]&&H(a,e)?q:void 0},a))}),t.jsx("div",{className:"again-row-points-2",children:Ot.map((n,a)=>t.jsx(g,{content:n,circled:s[a]&&o[a],customColor:s[a]&&H(a,e)?q:void 0},a))})]}),ht=({gridData:s,crossed:o,clickable:e,lastTurn:n,onCross:a})=>{const i=m.useCallback((d,r)=>()=>a(d,r),[a]);return t.jsx("div",{className:l.classNames("again-grid",S),children:s.grid.map((d,r)=>t.jsx("div",{className:l.classNames("again-row",H(r,n)&&"row-alert"),children:d.map((G,R)=>{const h=s.stars[r],B=o[r],u=r===7,x=e[r][R];return t.jsx(g,{onClick:x?i(R,r):void 0,color:G,star:h===R,crossed:B[R],borderColor:u?"white":"black"},R)})},r))})},ut=({totalPoints:s,lastTurn:o})=>t.jsxs("div",{className:"again-total",children:[k("AGAIN.points"),t.jsx("div",{className:"again-total-points",children:s}),o&&t.jsxs("div",{className:"again-last-turn",children:[k("AGAIN.lastTurn"),t.jsx(es,{hideIndex:!0,turn:o})]})]}),xt=({gridData:s})=>{As();const{again:o,againSplash:e,againStarted:n}=A(({again:rs,againSplash:cs,againStarted:is})=>({again:rs,againSplash:cs,againStarted:is})),{crossed:a,chosen:i,turnCrossed:d,completedColor:r}=n,{rowPointsBlocked:G,colorPointsBlocked:R,takenJokers:h,turns:B}=o,{completedRows:u,completedColors:x,totalPoints:Y}=ps(o,s),{backgroundColor:ns}=s,as=i?U(d,!1):U(a),W=Q(B);return t.jsxs("div",{className:"again",style:{backgroundColor:ns},children:[t.jsx(lt,{}),r&&!e&&t.jsx(dt,{color:r,onClose:c.onClosePopup}),t.jsxs("div",{className:"again-inner",children:[t.jsx(ht,{gridData:s,crossed:a,clickable:as,onCross:c.onCross,lastTurn:W}),t.jsx(Ps,{}),t.jsx(Bt,{rowPointsBlocked:G,completedRows:u,lastTurn:W}),t.jsx(ot,{takenJokers:h}),t.jsx(hs,{colorPointsBlocked:R,completedColors:x}),t.jsx(ut,{totalPoints:Y,lastTurn:W}),t.jsx(rt,{turns:B})]})]})},Yt=({value:s,onChange:o,labelMsg:e})=>t.jsxs("label",{className:"checkbox",children:[t.jsx("input",{type:"checkbox",checked:s,onChange:n=>o(n.target.checked)}),k(e)]}),pt={label:"AGAIN.color.choose",value:void 0},gt={label:"AGAIN.color.random",value:"random"},mt=s=>s&&c.chooseData(s),jt=s=>c.set({hasStandardPoints:s}),kt=[pt,...Cs,gt],yt=()=>{const s=A(({again:o})=>o.hasStandardPoints);return t.jsxs("div",{className:"again-selection",children:[t.jsx(Gs,{options:kt,onChange:mt,value:void 0}),t.jsx(Yt,{value:s,onChange:jt,labelMsg:"AGAIN.activateStandardPoints"})]})},Ct=()=>t.jsxs(T,{className:"top",children:[t.jsx(Z,{onClick:c.undo}),t.jsx(Rs,{onClick:c.restart}),t.jsx(f,{onClick:c.onFinish,description:"APP.skip",children:t.jsx(y.Forward,{})})]}),At=()=>{const{againData:s,chosen:o}=A(({againData:e,againStarted:{chosen:n}})=>({againData:e,chosen:n}));return s?t.jsx(ds,{fix:c.restart,children:t.jsxs(t.Fragment,{children:[o?t.jsx(nt,{chosen:o}):t.jsx(Ct,{}),t.jsx(xt,{gridData:s})]})}):t.jsxs(t.Fragment,{children:[t.jsx(yt,{}),t.jsx(T,{children:t.jsx(Z,{onClick:c.undo})})]})};export{At as default};
