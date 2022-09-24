import{E as M,F as D,b as j}from"./FooterRestart.3507ed4b.js";import{U as R,c as J,P as w,j as c,I as v,a as O,_ as B,r as p}from"./index.7eb625f0.js";import{F as $}from"./FooterUndo.aa08db4b.js";var e=(n=>(n.YELLOW="#b18e05",n.BLUE="#1313b1",n.BLACK="#000",n.GREEN="#054800",n.ORANGE="#b85409",n.PURPLE="#390257",n))(e||{});const h="\u2718";var o=(n=>(n.FOX="FOX",n.PLUS_1="PLUS_1",n.REFRESH="REFRESH",n.YELLOW="YELLOW",n.YELLOW_10="YELLOW_10",n.YELLOW_14="YELLOW_14",n.YELLOW_16="YELLOW_16",n.YELLOW_20="YELLOW_20",n.BLUE="BLUE",n.GREEN="GREEN",n.ORANGE_4="ORANGE_4",n.ORANGE_5="ORANGE_5",n.ORANGE_6="ORANGE_6",n.PURPLE="PURPLE",n.ULTIMATE="ULTIMATE",n))(o||{});const F=[1,1,1,2,1,1,2,1,2,1,3],u={["#b18e05"]:{contents:[3,6,5,h,2,1,h,5,1,h,2,4,h,3,4,6],rowBonus:["BLUE","ORANGE_4","GREEN","FOX"],columnBonus:["YELLOW_10","YELLOW_14","YELLOW_16","YELLOW_20","PLUS_1"]},["#1313b1"]:{contents:[h,2,3,4,5,6,7,8,9,10,11,12],points:[0,1,2,4,7,11,16,22,29,37,46,56],rowBonus:["ORANGE_5","YELLOW","FOX"],columnBonus:["REFRESH","GREEN","PURPLE","PLUS_1"]},["#054800"]:{contents:[1,2,3,4,5,1,2,3,4,5,6],points:[1,3,6,10,15,21,28,36,45,55,66],bonus:[void 0,void 0,void 0,"PLUS_1",void 0,"BLUE","FOX",void 0,"PURPLE","REFRESH",void 0]},["#b85409"]:{factors:F,contents:F.map(n=>n>1?`x${n}`:""),bonus:[void 0,void 0,"REFRESH",void 0,"YELLOW","PLUS_1",void 0,"FOX",void 0,"PURPLE",void 0]},["#390257"]:{contents:["","","","","","","","","","",""],bonus:[void 0,void 0,"REFRESH","BLUE","PLUS_1","YELLOW","FOX","REFRESH","GREEN","ORANGE_6","PLUS_1"]}},H="veryClever",A=n=>w.set(H,JSON.stringify(n)),Y=()=>{try{const n=JSON.parse(w.get(H)||"[]");if(Array.isArray(n))return n}catch{A([])}return[]},q=()=>Y().pop(),W={[e.YELLOW]:R.arrayFill(R.array(16,!1),[3,6,9,12],!0),[e.BLUE]:R.arrayFill(R.array(12,!1),[0],!0),[e.GREEN]:R.array(11,!1),[e.ORANGE]:R.array(11,0),[e.PURPLE]:R.array(11,0),earnedBonus:{[e.YELLOW]:[],[e.BLUE]:[]},reshuffle:[!1],plusOne:[],round:1,selection:null,highlight:null,bonus:[],foxes:0},z=n=>A([...Y().slice(-9),n]),[_,g]=J(W),U=n=>{g.set(n),z(g.get())};g.set(q()||{});const Q=()=>{const n=Y();n.length>1&&(n.pop(),A(n),g.set(n[n.length-1]))},Z=()=>{A([]),U(W)},E={get:g.get,set:U,restart:()=>U(W),undo:Q,reset:Z},V=n=>{const s=n.findIndex(t=>!t);return s>=0?R.nextArray(n,s,!0):n},nn=()=>E.set(({reshuffle:n})=>({reshuffle:V(n)})),sn=()=>E.set(({plusOne:n})=>({plusOne:V(n)})),L=(n,...s)=>s.every(t=>n[t]),en=(n,s)=>{const t=[];return!s.includes(o.YELLOW_10)&&L(n,0,4,8)&&t.push(o.YELLOW_10),!s.includes(o.YELLOW_14)&&L(n,1,5,13)&&t.push(o.YELLOW_14),!s.includes(o.YELLOW_16)&&L(n,2,10,14)&&t.push(o.YELLOW_16),!s.includes(o.YELLOW_20)&&L(n,7,11,15)&&t.push(o.YELLOW_20),!s.includes(o.BLUE)&&L(n,0,1,2)&&t.push(o.BLUE),!s.includes(o.ORANGE_4)&&L(n,4,5,7)&&t.push(o.ORANGE_4),!s.includes(o.GREEN)&&L(n,8,10,11)&&t.push(o.GREEN),!s.includes(o.FOX)&&L(n,13,14,15)&&t.push(o.FOX),!s.includes(o.PLUS_1)&&L(n,0,5,10,15)&&t.push(o.PLUS_1),t},tn=(n,s)=>{const t=[];return!s.includes(o.REFRESH)&&L(n,4,8)&&t.push(o.REFRESH),!s.includes(o.GREEN)&&L(n,1,5,9)&&t.push(o.GREEN),!s.includes(o.PURPLE)&&L(n,2,6,10)&&t.push(o.PURPLE),!s.includes(o.PLUS_1)&&L(n,3,7,11)&&t.push(o.PLUS_1),!s.includes(o.ORANGE_5)&&L(n,1,2,3)&&t.push(o.ORANGE_5),!s.includes(o.YELLOW)&&L(n,4,5,6,7)&&t.push(o.YELLOW),!s.includes(o.FOX)&&L(n,8,9,10,11)&&t.push(o.FOX),t},X=(n,s,t)=>{const i=u[n].bonus[t];return i?[i]:[]},on=(n,s,t,i)=>{if(n===e.YELLOW)return en(s,t);if(n===e.BLUE)return tn(s,t);if(n===e.GREEN)return X(e.GREEN,s,i)},I=(n,s,t)=>E.set(i=>{const r=n===e.GREEN?[]:i.earnedBonus[n],l=n,d=R.nextArray(i[l],s,!0),a=on(l,d,r,s);return{[l]:d,earnedBonus:{...i.earnedBonus,[l]:[...r,...a]},bonus:[...t||i.bonus,...a],highlight:{color:l,index:s}}}),y=n=>E.get()[n].findIndex(s=>!s),cn=(n,s)=>!!E.get()[n][s],ln=(n,s)=>y(n)===s,rn=(n,s)=>{if(!cn(n,s)){if(n===e.ORANGE||n===e.PURPLE||n===e.GREEN){if(!ln(n,s))return;if(n!==e.GREEN)return E.set({selection:n})}return I(n,s)}},En=()=>E.set({selection:null}),m=(n,s,t)=>{const i=y(n),r=n===e.ORANGE?u[e.ORANGE].factors[i]:1;E.set(l=>{const d=n,a=R.nextArray(l[d],i,r*s);return{[d]:a,selection:null,bonus:[...t||l.bonus,...X(d,a.map(Boolean),i)],highlight:{color:d,index:i}}})},un=n=>{const{selection:s}=E.get();s&&m(s,n)},an=n=>{const s=n.includes(o.YELLOW_10)?10:0,t=n.includes(o.YELLOW_14)?14:0,i=n.includes(o.YELLOW_16)?16:0,r=n.includes(o.YELLOW_20)?20:0;return s+t+i+r},Ln=n=>u[e.BLUE].points[n.filter(Boolean).length-1],dn=n=>u[e.GREEN].points[n.filter(Boolean).length-1],C=n=>n.reduce((s,t)=>s+t,0),Rn=n=>{const s=an(n.earnedBonus[e.YELLOW]),t=Ln(n[e.BLUE]),i=dn(n[e.GREEN])||0,r=C(n[e.ORANGE]),l=C(n[e.PURPLE]),d=Math.min(s,t,i,r,l)*n.foxes;return s+t+i+r+l+d},On=(n,s)=>{n===o.GREEN?I(e.GREEN,y(e.GREEN),s):n===o.ORANGE_4?m(e.ORANGE,4,s):n===o.ORANGE_5?m(e.ORANGE,5,s):n===o.ORANGE_6?m(e.ORANGE,6,s):n===o.PURPLE?m(e.PURPLE,6,s):n===o.FOX?E.set(({foxes:t})=>({foxes:t+1,bonus:s})):n===o.PLUS_1?E.set(({plusOne:t})=>({plusOne:[...t,!1],bonus:s})):n===o.REFRESH?E.set(({reshuffle:t})=>({reshuffle:[...t,!1],bonus:s})):E.set({bonus:s})},hn=()=>{const{bonus:n}=E.get();if(n){const[s,...t]=n;On(s,t)}},x=[o.REFRESH,o.PLUS_1,o.REFRESH,o.ULTIMATE],Nn=n=>x[n]?[x[n]]:[],_n=()=>E.set(({round:n})=>({round:n+1,bonus:Nn(n)})),N={takeReshuffleBonus:nn,takePlusOneBonus:sn,boxClicked:rn,selectValue:un,clearSelection:En,points:Rn,useBonus:hn,nextRound:_n},T=({children:n,crossed:s,onClick:t})=>O("div",{className:"grid-bonus-row",children:[c("div",{className:"grid-item",children:n}),s.map((i,r)=>c("div",{className:"grid-item",onClick:t,children:c("div",{className:R.classNames("box",i&&"crossed")})},r))]}),fn=()=>{const{reshuffle:n}=_(({reshuffle:s})=>({reshuffle:s}));return c(T,{crossed:n,onClick:N.takeReshuffleBonus,children:c(v.Refresh2,{})})},Pn=()=>{const{plusOne:n}=_(({plusOne:s})=>({plusOne:s}));return c(T,{crossed:n,onClick:N.takePlusOneBonus,children:c("div",{className:"content",children:"+1"})})},mn=()=>{const{round:n}=_(({round:s})=>({round:s}));return O("div",{className:"round-overview",children:[O("span",{className:"title",children:[B("VC.round"),n]}),c("button",{onClick:N.nextRound,children:B("VC.next")})]})},vn=({value:n,color:s})=>{const t=p.exports.useCallback(()=>N.selectValue(n),[n]);return c("div",{className:"value",style:{backgroundColor:s},onClick:t,children:n})},gn=({color:n})=>{const{prevVal:s}=_(t=>{const i=n===e.PURPLE?t[e.PURPLE].findIndex(r=>!r)-1:-1;return{prevVal:i>=0?t[e.PURPLE][i]:0}});return O("div",{className:"value-selection",children:[c("div",{className:"value-selection-inner",children:[1,2,3,4,5,6].slice(s===6?0:s).map(t=>c(vn,{color:n,value:t},t))}),c("div",{className:"value-selection-overlay",onClick:N.clearSelection})]})},pn="\u{1F98A}",Gn="+1",An=c(v.Refresh2,{}),S={[o.FOX]:{content:pn,color:e.BLACK},[o.PLUS_1]:{content:Gn,color:e.BLACK},[o.REFRESH]:{content:An,color:e.BLACK},[o.YELLOW]:{content:h,color:e.YELLOW},[o.YELLOW_10]:{content:10,color:e.YELLOW},[o.YELLOW_14]:{content:14,color:e.YELLOW},[o.YELLOW_16]:{content:16,color:e.YELLOW},[o.YELLOW_20]:{content:20,color:e.YELLOW},[o.BLUE]:{content:h,color:e.BLUE},[o.GREEN]:{content:h,color:e.GREEN},[o.ORANGE_4]:{content:4,color:e.ORANGE},[o.ORANGE_5]:{content:5,color:e.ORANGE},[o.ORANGE_6]:{content:6,color:e.ORANGE},[o.PURPLE]:{content:6,color:e.PURPLE},[o.ULTIMATE]:{content:h+"/6",color:e.BLACK}},G=({bonus:n})=>c("div",{className:"box bonus",style:{backgroundColor:S[n].color},children:c("div",{className:"content",children:S[n].content})}),bn=(n,s,t)=>n?n.color===s&&n.index===t:!1,K=({content:n,color:s,gePrefix:t,index:i})=>{const{crossed:r,newContent:l,highlight:d}=_(f=>{const P=bn(f.highlight,s,i);switch(s){case e.ORANGE:case e.PURPLE:return{crossed:!1,newContent:f[s][i],highlight:P};default:return{crossed:f[s][i],highlight:P}}}),a=p.exports.useCallback(()=>{N.boxClicked(s,i)},[s,i]);return c("div",{onClick:a,className:R.classNames("box",r&&"crossed",d&&"highlight"),style:{color:s,borderColor:s},children:t?O("div",{className:"content",children:["\u2265",n]}):l?c("div",{className:"picked",children:l}):c("div",{className:"content",children:n})})},b=({color:n,contents:s,className:t,gePrefix:i,bonusList:r,points:l=[]})=>c("div",{className:R.classNames("grid-row",t),style:{borderColor:n},children:s.map((d,a)=>{const f=l[a],P=r[a];return O("div",{className:"grid-item",children:[c(K,{content:d,color:n,gePrefix:i,index:a}),f&&c("div",{className:"points",style:{backgroundColor:n},children:f}),P&&c(G,{bonus:P})]},a)})}),Bn=R.array(6),k=({color:n,contents:s,rowBonusList:t,columnBonusList:i})=>c("div",{className:"grid-box-outer",children:O("div",{className:"grid-box",style:{borderColor:n,color:n},children:[R.array(s.length/4).map((r,l)=>O(p.exports.Fragment,{children:[s.slice(l*4,l*4+4).map((d,a)=>c("div",{className:"grid-item",children:c(K,{content:d,color:n,index:4*l+a},a)},a)),c("div",{className:"grid-item grid-arrow",children:c(v.ArrowRight,{})}),c("div",{className:"grid-item",children:c(G,{bonus:t[l]})})]},l)),Bn.map((r,l)=>c("div",{className:"grid-item grid-arrow",children:l<i.length?l===4?c(v.ArrowRight,{className:"rotate-45"}):c(v.ArrowDown,{}):null},l)),i.map((r,l)=>O(p.exports.Fragment,{children:[l===4&&c("div",{className:"grid-item"}),c("div",{className:"grid-item",children:c(G,{bonus:r})})]},l))]})}),Un=()=>{const{points:n}=_(s=>({points:N.points(s)}));return O("div",{className:"points-total",children:[B("VC.points"),n]})},Yn=({earned:n})=>n.length?O("div",{className:"bonus-splash",onClick:N.useBonus,children:[c("div",{className:"bonus-splash-overlay"}),c("div",{className:"bonus-splash-inner",children:n.map((s,t)=>c(G,{bonus:s},t))})]}):null,Wn=()=>{const{selection:n,bonus:s}=_(({selection:t,bonus:i})=>({selection:t,bonus:i}));return c("div",{className:"very-clever-outer",children:O("div",{className:"very-clever",children:[c(mn,{}),c(fn,{}),c(Pn,{}),c(k,{color:e.YELLOW,contents:u[e.YELLOW].contents,rowBonusList:u[e.YELLOW].rowBonus,columnBonusList:u[e.YELLOW].columnBonus}),c(k,{color:e.BLUE,contents:u[e.BLUE].contents,rowBonusList:u[e.BLUE].rowBonus,columnBonusList:u[e.BLUE].columnBonus}),c(b,{color:e.GREEN,contents:u[e.GREEN].contents,gePrefix:!0,bonusList:u[e.GREEN].bonus,points:u[e.GREEN].points}),c(b,{color:e.ORANGE,contents:u[e.ORANGE].contents,bonusList:u[e.ORANGE].bonus}),c(b,{color:e.PURPLE,contents:u[e.PURPLE].contents,className:"growing",bonusList:u[e.PURPLE].bonus}),c(Un,{}),n&&c(gn,{color:n}),s&&c(Yn,{earned:s})]})})},yn=()=>O(D,{children:[c($,{onClick:E.undo}),c(j,{onClick:E.reset})]}),Sn=()=>O(M,{fix:E.reset,children:[c(Wn,{}),c(yn,{})]});export{Sn as default};
