(this.webpackJsonpgithub_homepage=this.webpackJsonpgithub_homepage||[]).push([[7],{28:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return m}));var r=n(1),a=n(0),o=n.n(a),c=n(12),u=n(3),i=n(2),l=n(8),s=function(e){var t=e.onClick,n=e.description,r=e.children,a=e.className;return o.a.createElement("div",{className:l.a.classNames("footer-action",a,!t&&"no-handler"),onClick:t},r,n&&o.a.createElement("div",{className:"small"},Object(u.a)(n)))},f=function(){return o.a.createElement(s,{onClick:i.a.back,description:"APP.home"},o.a.createElement(c.a.Home,null))},d=function(e){return document.getElementById("root").style.setProperty("--footer-height",e?"3rem":"0px")},m=function(e){var t=e.children,n=e.expandable,u=e.hideHome,i=e.className,l=Object(a.useState)(!0),s=Object(r.a)(l,2),m=s[0],b=s[1],p=Object(a.useCallback)((function(){return b((function(e){return!e}))}),[]);return Object(a.useEffect)((function(){n||b(!0)}),[n]),Object(a.useEffect)((function(){d(m)}),[m]),Object(a.useEffect)((function(){return function(){return d(!1)}}),[]),m?o.a.createElement("footer",{className:i},n&&o.a.createElement("div",{className:"footer-handle",onClick:p},o.a.createElement(c.a.ChevronDown,null)),o.a.createElement("div",{className:"footer-border"}),o.a.createElement("nav",null,o.a.createElement("div",{className:"footer-actions"},u||o.a.createElement(f,null),t))):o.a.createElement("footer",{className:i},o.a.createElement("div",{className:"footer-handle closed",onClick:p},o.a.createElement(c.a.ChevronUp,null)))}},31:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},32:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},33:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},34:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},35:function(e,t,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return r}))},36:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(31);function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(34),a=n(35);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=n(36);function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(c.a)(e):t}function i(e){return function(){var t,n=Object(r.a)(e);if(Object(a.a)()){var o=Object(r.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return u(this,t)}}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(32),a=n(33),o=n(38),c=n(37),u=n(0),i=n.n(u),l=n(3),s=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={hasError:!1},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.hasError,t=this.props,n=t.children,r=t.fix;return e?i.a.createElement("div",{className:"game-error"},i.a.createElement("h2",null,Object(l.a)("error.boundary.unexpected")),i.a.createElement("p",null,Object(l.a)("error.boundary.sorry")),i.a.createElement("button",{type:"button",onClick:r},Object(l.a)("error.boundary.fix"))):n}}]),n}(u.Component);s.getDerivedStateFromError=function(){return{hasError:!0}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),o=n(12),c=n(28),u=function(e){var t=e.onClick;return a.a.createElement(c.b,{onClick:t,description:"APP.restart"},a.a.createElement(o.a.PowerOff,null))}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),o=n(12),c=n(28),u=function(e){var t=e.onClick;return a.a.createElement(c.b,{onClick:t,description:"APP.undo"},a.a.createElement(o.a.Undo,{className:"reflect"}))}},93:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(39),u=n(28),i=n(41),l=n(40),s=n(5),f=n(1),d=n(9),m=n(13),b=n(8),p={badThrows:0,crossed:[b.a.array(12,!1),b.a.array(12,!1),b.a.array(12,!1),b.a.array(12,!1)],closed:b.a.array(4,!1)},v=function(){try{var e=d.a.get("quixx");return JSON.parse(e)}catch(t){return[]}},E=Object(m.a)(v()[0]||p),h=Object(f.a)(E,2),y=h[0],O=h[1],x=function(e){O.set(e);var t=O.get(),n=v();n.unshift(t),n.length>20&&n.pop(),d.a.set("quixx",JSON.stringify(n))},g=[0,1,3,6,10,15,21,28,36,45,55,66,78],_=function(e,t){return x((function(n){var r=n.crossed;return{crossed:b.a.nextArray(r,e,b.a.nextArray(r[e],t,!0))}}))},j={restart:function(){x(p)},undo:function(){var e=v();if(e.length>1){e.shift(),d.a.set("quixx",JSON.stringify(e));var t=e[0];O.set(t)}},onBadThrow:function(){return x((function(e){return{badThrows:e.badThrows+1}}))},sum:function(e,t){return b.a.sum.apply(b.a,Object(s.a)(e.map((function(e){return g[e.filter(Boolean).length]}))))-5*t},onCross:function(e,t){var n=O.get(),r=n.crossed,a=n.closed,o=r[e];o&&!a[e]&&(o.lastIndexOf(!0)<t&&(t===o.length-2?o.filter(Boolean).length>=5&&(_(e,t),_(e,t+1)):t===o.length-1?x({closed:b.a.nextArray(a,e,!0)}):_(e,t)))}};!function(e){e.RED="#f84a4a",e.YELLOW="#ffbb00",e.GREEN="#30b204",e.BLUE="#416af7"}(r||(r={}));var w=[[2,3,4,5,6,7,8,9,10,11,12,-1].map((function(e){return{color:r.RED,value:e}})),[2,3,4,5,6,7,8,9,10,11,12,-1].map((function(e){return{color:r.YELLOW,value:e}})),[12,11,10,9,8,7,6,5,4,3,2,-1].map((function(e){return{color:r.GREEN,value:e}})),[12,11,10,9,8,7,6,5,4,3,2,-1].map((function(e){return{color:r.BLUE,value:e}}))],C=n(12),k=n(3),N=function(e){var t=e.field,n=t.value,r=t.color,c=e.crossed,u=e.onClick,i=e.fieldIdx,l=e.deactivated,s=e.closed,f=Object(a.useCallback)((function(){return u(i)}),[u,i]);return o.a.createElement("div",{className:b.a.classNames("quixx__grid__field",s&&!l&&"quixx__grid__field--closed"),style:{backgroundColor:r},onClick:l?void 0:f},-1===n?o.a.createElement(C.a.Unlock,null):n,c&&o.a.createElement("div",{className:"quixx__grid__field--crossed"},"\u2718"))},P=function(e){var t=e.row,n=e.rowIdx,r=y((function(e){var t=e.crossed,r=e.closed;return{rowCrossed:t[n],rowClosed:r[n]}}),[n]),c=r.rowCrossed,u=r.rowClosed,i=Object(a.useCallback)((function(e){return j.onCross(n,e)}),[n]),l=c.lastIndexOf(!0);return o.a.createElement(o.a.Fragment,null,t.map((function(e,t){return o.a.createElement(N,{key:e.value,field:e,crossed:c[t],onClick:i,fieldIdx:t,deactivated:l>=t,closed:u})})))},S=function(){var e=y((function(e){var t=e.badThrows,n=e.crossed;return{badThrows:t,sum:j.sum(n,t)}})),t=e.sum,n=e.badThrows;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"quixx__grid"},w.map((function(e,t){return o.a.createElement(P,{key:t,row:e,rowIdx:t})}))),o.a.createElement("div",{className:"quixx__info"},o.a.createElement("div",{className:"quixx__info__bad-throws"},o.a.createElement("div",null,Object(k.a)("QUIXX.badThrows")),b.a.array(3).map((function(e,t){return o.a.createElement("span",{key:t,onClick:n===t?j.onBadThrow:void 0},n>t?"\u2718":"")}))),o.a.createElement("div",{className:"quixx__info__sum"},o.a.createElement("div",null,Object(k.a)("QUIXX.points")),o.a.createElement("span",null,t))))},q=function(){return o.a.createElement(u.a,null,o.a.createElement(i.a,{onClick:j.undo}),o.a.createElement(l.a,{onClick:j.restart}))};t.default=function(){return o.a.createElement(c.a,{fix:j.restart},o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"quixx"},o.a.createElement(S,null)),o.a.createElement(q,null)))}}}]);