(()=>{var Pc=Object.create;var Ls=Object.defineProperty;var ld=Object.getOwnPropertyDescriptor;var Mc=Object.getOwnPropertyNames;var Lc=Object.getPrototypeOf,$c=Object.prototype.hasOwnProperty;var dd=(y,m)=>()=>(m||y((m={exports:{}}).exports,m),m.exports);var zc=(y,m,u,v)=>{if(m&&typeof m=="object"||typeof m=="function")for(let _ of Mc(m))!$c.call(y,_)&&_!==u&&Ls(y,_,{get:()=>m[_],enumerable:!(v=ld(m,_))||v.enumerable});return y};var cd=(y,m,u)=>(u=y!=null?Pc(Lc(y)):{},zc(m||!y||!y.__esModule?Ls(u,"default",{value:y,enumerable:!0}):u,y));var md=(y,m,u,v)=>{for(var _=v>1?void 0:v?ld(m,u):m,A=y.length-1,T;A>=0;A--)(T=y[A])&&(_=(v?T(m,u,_):T(_))||_);return v&&_&&Ls(m,u,_),_};var ud=dd(pd=>{(function(){"use strict";var y;function m(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}var u=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,e,o){return t==Array.prototype||t==Object.prototype||(t[e]=o.value),t};function v(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof global=="object"&&global];for(var e=0;e<t.length;++e){var o=t[e];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var _=v(this);function A(t,e){if(e)t:{var o=_;t=t.split(".");for(var n=0;n<t.length-1;n++){var i=t[n];if(!(i in o))break t;o=o[i]}t=t[t.length-1],n=o[t],e=e(n),e!=n&&e!=null&&u(o,t,{configurable:!0,writable:!0,value:e})}}A("Symbol",function(t){function e(i){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new o("jscomp_symbol_"+(i||"")+"_"+n++,i)}function o(i,s){this.g=i,u(this,"description",{configurable:!0,writable:!0,value:s})}if(t)return t;o.prototype.toString=function(){return this.g};var n=0;return e}),A("Symbol.iterator",function(t){if(t)return t;t=Symbol("Symbol.iterator");for(var e="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),o=0;o<e.length;o++){var n=_[e[o]];typeof n=="function"&&typeof n.prototype[t]!="function"&&u(n.prototype,t,{configurable:!0,writable:!0,value:function(){return T(m(this))}})}return t});function T(t){return t={next:t},t[Symbol.iterator]=function(){return this},t}function Z(t){var e=typeof Symbol<"u"&&Symbol.iterator&&t[Symbol.iterator];return e?e.call(t):{next:m(t)}}function z(t){if(!(t instanceof Array)){t=Z(t);for(var e,o=[];!(e=t.next()).done;)o.push(e.value);t=o}return t}var Q;if(typeof Object.setPrototypeOf=="function")Q=Object.setPrototypeOf;else{var $t;t:{var nt={a:!0},gt={};try{gt.__proto__=nt,$t=gt.a;break t}catch{}$t=!1}Q=$t?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw new TypeError(t+" is not extensible");return t}:null}var zt=Q;function Nt(){this.u=!1,this.h=null,this.Oa=void 0,this.g=1,this.ea=0,this.i=null}function St(t){if(t.u)throw new TypeError("Generator is already running");t.u=!0}Nt.prototype.O=function(t){this.Oa=t};function le(t,e){t.i={ab:e,fb:!0},t.g=t.ea}Nt.prototype.return=function(t){this.i={return:t},this.g=this.ea};function pr(t,e){return t.g=3,{value:e}}function un(t){this.g=new Nt,this.h=t}function Fa(t,e){St(t.g);var o=t.g.h;return o?fn(t,"return"in o?o.return:function(n){return{value:n,done:!0}},e,t.g.return):(t.g.return(e),To(t))}function fn(t,e,o,n){try{var i=e.call(t.g.h,o);if(!(i instanceof Object))throw new TypeError("Iterator result "+i+" is not an object");if(!i.done)return t.g.u=!1,i;var s=i.value}catch(d){return t.g.h=null,le(t.g,d),To(t)}return t.g.h=null,n.call(t.g,s),To(t)}function To(t){for(;t.g.g;)try{var e=t.h(t.g);if(e)return t.g.u=!1,{value:e.value,done:!1}}catch(o){t.g.Oa=void 0,le(t.g,o)}if(t.g.u=!1,t.g.i){if(e=t.g.i,t.g.i=null,e.fb)throw e.ab;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function hn(t){this.next=function(e){return St(t.g),t.g.h?e=fn(t,t.g.h.next,e,t.g.O):(t.g.O(e),e=To(t)),e},this.throw=function(e){return St(t.g),t.g.h?e=fn(t,t.g.h.throw,e,t.g.O):(le(t.g,e),e=To(t)),e},this.return=function(e){return Fa(t,e)},this[Symbol.iterator]=function(){return this}}function ur(t,e){return e=new hn(new un(e)),zt&&t.prototype&&zt(e,t.prototype),e}Array.from||(Array.from=function(t){return[].slice.call(t)}),Object.assign||(Object.assign=function(t){for(var e=[].slice.call(arguments,1),o=0,n;o<e.length;o++)if(n=e[o])for(var i=t,s=Object.keys(n),d=0;d<s.length;d++){var p=s[d];i[p]=n[p]}return t});var Ti=setTimeout;function Ba(){}function Ai(t,e){return function(){t.apply(e,arguments)}}function At(t){if(!(this instanceof At))throw new TypeError("Promises must be constructed via new");if(typeof t!="function")throw new TypeError("not a function");this.N=0,this.Ha=!1,this.I=void 0,this.ba=[],bn(t,this)}function gn(t,e){for(;t.N===3;)t=t.I;t.N===0?t.ba.push(e):(t.Ha=!0,gr(function(){var o=t.N===1?e.hb:e.ib;if(o===null)(t.N===1?fr:to)(e.promise,t.I);else{try{var n=o(t.I)}catch(i){to(e.promise,i);return}fr(e.promise,n)}}))}function fr(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&(typeof e=="object"||typeof e=="function")){var o=e.then;if(e instanceof At){t.N=3,t.I=e,Ao(t);return}if(typeof o=="function"){bn(Ai(o,e),t);return}}t.N=1,t.I=e,Ao(t)}catch(n){to(t,n)}}function to(t,e){t.N=2,t.I=e,Ao(t)}function Ao(t){t.N===2&&t.ba.length===0&&gr(function(){t.Ha||typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",t.I)});for(var e=0,o=t.ba.length;e<o;e++)gn(t,t.ba[e]);t.ba=null}function Ua(t,e,o){this.hb=typeof t=="function"?t:null,this.ib=typeof e=="function"?e:null,this.promise=o}function bn(t,e){var o=!1;try{t(function(n){o||(o=!0,fr(e,n))},function(n){o||(o=!0,to(e,n))})}catch(n){o||(o=!0,to(e,n))}}At.prototype.catch=function(t){return this.then(null,t)},At.prototype.then=function(t,e){var o=new this.constructor(Ba);return gn(this,new Ua(t,e,o)),o},At.prototype.finally=function(t){var e=this.constructor;return this.then(function(o){return e.resolve(t()).then(function(){return o})},function(o){return e.resolve(t()).then(function(){return e.reject(o)})})};function C(t){return new At(function(e,o){function n(p,f){try{if(f&&(typeof f=="object"||typeof f=="function")){var g=f.then;if(typeof g=="function"){g.call(f,function(w){n(p,w)},o);return}}i[p]=f,--s===0&&e(i)}catch(w){o(w)}}if(!t||typeof t.length>"u")return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(t);if(i.length===0)return e([]);for(var s=i.length,d=0;d<i.length;d++)n(d,i[d])})}function hr(t){return t&&typeof t=="object"&&t.constructor===At?t:new At(function(e){e(t)})}function Ne(t){return new At(function(e,o){o(t)})}function vn(t){return new At(function(e,o){if(!t||typeof t.length>"u")return o(new TypeError("Promise.race accepts an array"));for(var n=0,i=t.length;n<i;n++)hr(t[n]).then(e,o)})}var gr=typeof setImmediate=="function"&&function(t){setImmediate(t)}||function(t){Ti(t,0)};if(!window.Promise){window.Promise=At,At.prototype.then=At.prototype.then,At.all=C,At.race=vn,At.resolve=hr,At.reject=Ne;var Oo=document.createTextNode(""),oe=[];new MutationObserver(function(){for(var t=oe.length,e=0;e<t;e++)oe[e]();oe.splice(0,t)}).observe(Oo,{characterData:!0}),gr=function(t){oe.push(t),Oo.textContent=0<Oo.textContent.length?"":"a"}}(function(t,e){if(!(e in t)){var o=typeof global==typeof o?window:global,n=0,i=String(Math.random()),s="__symbol@@"+i,d=t.getOwnPropertyNames,p=t.getOwnPropertyDescriptor,f=t.create,g=t.keys,w=t.freeze||t,D=t.defineProperty,ht=t.defineProperties,rt=p(t,"getOwnPropertyNames"),M=t.prototype,mt=M.hasOwnProperty,it=M.propertyIsEnumerable,jt=M.toString,G=function(j,at,xt){mt.call(j,s)||D(j,s,{enumerable:!1,configurable:!1,writable:!1,value:{}}),j[s]["@@"+at]=xt},se=function(j,at){var xt=f(j);return d(at).forEach(function(N){Eo.call(at,N)&&wi(xt,N,at[N])}),xt},R=function(){},ko=function(j){return j!=s&&!mt.call(Ce,j)},Ee=function(j){return j!=s&&mt.call(Ce,j)},Eo=function(j){var at=String(j);return Ee(at)?mt.call(this,at)&&!!this[s]&&this[s]["@@"+at]:it.call(this,j)},k=function(j){return D(M,j,{enumerable:!1,configurable:!0,get:R,set:function(at){ar(this,j,{enumerable:!1,configurable:!0,writable:!0,value:at}),G(this,j,!0)}}),Ce[j]=D(t(j),"constructor",Ps),w(Ce[j])},yt=function j(at){if(this instanceof j)throw new TypeError("Symbol is not a constructor");return k("__symbol:".concat(at||"",i,++n))},Ce=f(null),Ps={value:yt},ja=function(j){return Ce[j]},wi=function(j,at,xt){var N=String(at);if(Ee(N)){if(at=ar,xt.enumerable){var $=f(xt);$.enumerable=!1}else $=xt;at(j,N,$),G(j,N,!!xt.enumerable)}else D(j,at,xt);return j},Pa=function(j){return d(j).filter(Ee).map(ja)};rt.value=wi,D(t,"defineProperty",rt),rt.value=Pa,D(t,e,rt),rt.value=function(j){return d(j).filter(ko)},D(t,"getOwnPropertyNames",rt),rt.value=function(j,at){var xt=Pa(at);return xt.length?g(at).concat(xt).forEach(function(N){Eo.call(at,N)&&wi(j,N,at[N])}):ht(j,at),j},D(t,"defineProperties",rt),rt.value=Eo,D(M,"propertyIsEnumerable",rt),rt.value=yt,D(o,"Symbol",rt),rt.value=function(j){return j="__symbol:".concat("__symbol:",j,i),j in M?Ce[j]:k(j)},D(yt,"for",rt),rt.value=function(j){if(ko(j))throw new TypeError(j+" is not a symbol");if(mt.call(Ce,j)&&(j=j.slice(10),j.slice(0,10)==="__symbol:"&&(j=j.slice(10),j!==i)))return j=j.slice(0,j.length-i.length),0<j.length?j:void 0},D(yt,"keyFor",rt),rt.value=function(j,at){var xt=p(j,at);return xt&&Ee(at)&&(xt.enumerable=Eo.call(j,at)),xt},D(t,"getOwnPropertyDescriptor",rt),rt.value=function(j,at){return arguments.length===1||typeof at>"u"?f(j):se(j,at)},D(t,"create",rt),rt.value=function(){var j=jt.call(this);return j==="[object String]"&&Ee(this)?"[object Symbol]":j},D(M,"toString",rt);try{if(f(D({},"__symbol:",{get:function(){return D(this,"__symbol:",{value:!0})["__symbol:"]}}))["__symbol:"]===!0)var ar=D;else throw"IE11"}catch{ar=function(at,xt,N){var $=p(M,xt);delete M[xt],D(at,xt,N),D(M,xt,$)}}}})(Object,"getOwnPropertySymbols"),function(t,e){var o=t.defineProperty,n=t.prototype,i=n.toString,s;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(d){d in e||(o(e,d,{value:e(d)}),d==="toStringTag"&&(s=t.getOwnPropertyDescriptor(n,"toString"),s.value=function(){var p=i.call(this),f=this==null?this:this[e.toStringTag];return f==null?p:"[object "+f+"]"},o(n,"toString",s)))})}(Object,Symbol),function(t,e,o){function n(){return this}e[t]||(e[t]=function(){var i=0,s=this,d={next:function(){var p=s.length<=i;return p?{done:p}:{done:p,value:s[i++]}}};return d[t]=n,d}),o[t]||(o[t]=function(){var i=String.fromCodePoint,s=this,d=0,p=s.length,f={next:function(){var g=p<=d,w=g?"":i(s.codePointAt(d));return d+=w.length,g?{done:g}:{done:g,value:w}}};return f[t]=n,f})}(Symbol.iterator,Array.prototype,String.prototype);var Do=Object.prototype.toString;Object.prototype.toString=function(){return this===void 0?"[object Undefined]":this===null?"[object Null]":Do.call(this)},Object.keys=function(t){return Object.getOwnPropertyNames(t).filter(function(e){return(e=Object.getOwnPropertyDescriptor(t,e))&&e.enumerable})},String.prototype[Symbol.iterator]&&String.prototype.codePointAt||(String.prototype[Symbol.iterator]=function t(){var e,o=this;return ur(t,function(n){if(n.g==1&&(e=0),n.g!=3)return e<o.length?n=pr(n,o[e]):(n.g=0,n=void 0),n;e++,n.g=2})}),Set.prototype[Symbol.iterator]||(Set.prototype[Symbol.iterator]=function t(){var e,o=this,n;return ur(t,function(i){if(i.g==1&&(e=[],o.forEach(function(s){e.push(s)}),n=0),i.g!=3)return n<e.length?i=pr(i,e[n]):(i.g=0,i=void 0),i;n++,i.g=2})}),Map.prototype[Symbol.iterator]||(Map.prototype[Symbol.iterator]=function t(){var e,o=this,n;return ur(t,function(i){if(i.g==1&&(e=[],o.forEach(function(s,d){e.push([d,s])}),n=0),i.g!=3)return n<e.length?i=pr(i,e[n]):(i.g=0,i=void 0),i;n++,i.g=2})});var qt=document.createEvent("Event");if(qt.initEvent("foo",!0,!0),qt.preventDefault(),!qt.defaultPrevented){var br=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(br.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var He=/Trident/.test(navigator.userAgent);if(!window.Event||He&&typeof window.Event!="function"){var jo=window.Event;if(window.Event=function(t,e){e=e||{};var o=document.createEvent("Event");return o.initEvent(t,!!e.bubbles,!!e.cancelable),o},jo){for(var eo in jo)window.Event[eo]=jo[eo];window.Event.prototype=jo.prototype}}if((!window.CustomEvent||He&&typeof window.CustomEvent!="function")&&(window.CustomEvent=function(t,e){e=e||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail),o},window.CustomEvent.prototype=window.Event.prototype),!window.MouseEvent||He&&typeof window.MouseEvent!="function"){var V=window.MouseEvent;if(window.MouseEvent=function(t,e){e=e||{};var o=document.createEvent("MouseEvent");return o.initMouseEvent(t,!!e.bubbles,!!e.cancelable,e.view||window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),o},V)for(var Oi in V)window.MouseEvent[Oi]=V[Oi];window.MouseEvent.prototype=V.prototype}var yn,vr=function(){function t(){i++}var e=!1,o=!1,n={get capture(){return e=!0},get once(){return o=!0}},i=0,s=document.createElement("div");s.addEventListener("click",t,n);var d=e&&o;return d&&(s.dispatchEvent(new Event("click")),s.dispatchEvent(new Event("click")),d=i==1),s.removeEventListener("click",t,n),d}(),ve=(yn=window.EventTarget)!==null&&yn!==void 0?yn:window.Node;if(!vr&&"addEventListener"in ve.prototype){var Fe=function(t){if(!t||typeof t!="object"&&typeof t!="function"){var e=!!t;t=!1}else e=!!t.capture,t=!!t.once;return{capture:e,once:t}},oo=ve.prototype.addEventListener,Po=ve.prototype.removeEventListener,xn=new WeakMap,Di=new WeakMap,Mo=function(t,e,o){var n=o?xn:Di;return o=n.get(t),o===void 0&&n.set(t,o=new Map),t=o.get(e),t===void 0&&o.set(e,t=new WeakMap),t};ve.prototype.addEventListener=function(t,e,o){var n=this;if(e!=null){o=Fe(o);var i=o.capture;o=o.once;var s=Mo(this,t,i);if(!s.has(e)){var d=o?function(p){if(s.delete(e),Po.call(n,t,d,i),typeof e=="function")return e.call(n,p);if(typeof e?.handleEvent=="function")return e.handleEvent(p)}:null;s.set(e,d),oo.call(this,t,d??e,i)}}},ve.prototype.removeEventListener=function(t,e,o){if(e!=null){o=Fe(o).capture;var n=Mo(this,t,o),i=n.get(e);i!==void 0&&(n.delete(e),Po.call(this,t,i??e,o))}}}Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var t=(this.ownerDocument||this).querySelector("base[href]");return t&&t.href||window.location.href},configurable:!0,enumerable:!0});var wn,_n,kn=Element.prototype,Se=(wn=Object.getOwnPropertyDescriptor(kn,"attributes"))!==null&&wn!==void 0?wn:Object.getOwnPropertyDescriptor(Node.prototype,"attributes"),En=(_n=Se?.get)!==null&&_n!==void 0?_n:function(){return this.attributes},yr=Array.prototype.map;kn.hasOwnProperty("getAttributeNames")||(kn.getAttributeNames=function(){return yr.call(En.call(this),function(t){return t.name})});var ro,no=Element.prototype;no.hasOwnProperty("matches")||(no.matches=(ro=no.webkitMatchesSelector)!==null&&ro!==void 0?ro:no.msMatchesSelector);var Wa=Node.prototype.appendChild;function Cn(t){t=t.prototype,t.hasOwnProperty("append")||Object.defineProperty(t,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var o=[],n=0;n<arguments.length;++n)o[n]=arguments[n];for(o=Z(o),n=o.next();!n.done;n=o.next())n=n.value,Wa.call(this,typeof n=="string"?document.createTextNode(n):n)}})}Cn(Document),Cn(DocumentFragment),Cn(Element);var Te,Pt,Xt=Node.prototype.insertBefore,Gt=(Pt=(Te=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild"))===null||Te===void 0?void 0:Te.get)!==null&&Pt!==void 0?Pt:function(){return this.firstChild};function Mt(t){t=t.prototype,t.hasOwnProperty("prepend")||Object.defineProperty(t,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var o=[],n=0;n<arguments.length;++n)o[n]=arguments[n];n=Gt.call(this),o=Z(o);for(var i=o.next();!i.done;i=o.next())i=i.value,Xt.call(this,typeof i=="string"?document.createTextNode(i):i,n)}})}Mt(Document),Mt(DocumentFragment),Mt(Element);var io,Ae,Be=Node.prototype.appendChild,ao=Node.prototype.removeChild,ji=(Ae=(io=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild"))===null||io===void 0?void 0:io.get)!==null&&Ae!==void 0?Ae:function(){return this.firstChild};function Lo(t){t=t.prototype,t.hasOwnProperty("replaceChildren")||Object.defineProperty(t,"replaceChildren",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var o=[],n=0;n<arguments.length;++n)o[n]=arguments[n];for(;(n=ji.call(this))!==null;)ao.call(this,n);for(o=Z(o),n=o.next();!n.done;n=o.next())n=n.value,Be.call(this,typeof n=="string"?document.createTextNode(n):n)}})}Lo(Document),Lo(DocumentFragment),Lo(Element);var Oe,xr,$o,zo,Pi=Node.prototype.insertBefore,Mi=(xr=(Oe=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))===null||Oe===void 0?void 0:Oe.get)!==null&&xr!==void 0?xr:function(){return this.parentNode},Li=(zo=($o=Object.getOwnPropertyDescriptor(Node.prototype,"nextSibling"))===null||$o===void 0?void 0:$o.get)!==null&&zo!==void 0?zo:function(){return this.nextSibling};function Nn(t){t=t.prototype,t.hasOwnProperty("after")||Object.defineProperty(t,"after",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var o=[],n=0;n<arguments.length;++n)o[n]=arguments[n];if(n=Mi.call(this),n!==null){var i=Li.call(this);o=Z(o);for(var s=o.next();!s.done;s=o.next())s=s.value,Pi.call(n,typeof s=="string"?document.createTextNode(s):s,i)}}})}Nn(CharacterData),Nn(Element);var wr,_r,$i=Node.prototype.insertBefore,zi=(_r=(wr=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))===null||wr===void 0?void 0:wr.get)!==null&&_r!==void 0?_r:function(){return this.parentNode};function Sn(t){t=t.prototype,t.hasOwnProperty("before")||Object.defineProperty(t,"before",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var o=[],n=0;n<arguments.length;++n)o[n]=arguments[n];if(n=zi.call(this),n!==null){o=Z(o);for(var i=o.next();!i.done;i=o.next())i=i.value,$i.call(n,typeof i=="string"?document.createTextNode(i):i,this)}}})}Sn(CharacterData),Sn(Element);var kr,re,ne=Node.prototype.removeChild,Ue=(re=(kr=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))===null||kr===void 0?void 0:kr.get)!==null&&re!==void 0?re:function(){return this.parentNode};function Yt(t){t=t.prototype,t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Ue.call(this);e&&ne.call(e,this)}})}Yt(CharacterData),Yt(Element);var Io,Ro,ue=Node.prototype.insertBefore,We=Node.prototype.removeChild,Er=(Ro=(Io=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))===null||Io===void 0?void 0:Io.get)!==null&&Ro!==void 0?Ro:function(){return this.parentNode};function Ve(t){t=t.prototype,t.hasOwnProperty("replaceWith")||Object.defineProperty(t,"replaceWith",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var o=[],n=0;n<arguments.length;++n)o[n]=arguments[n];if(n=Er.call(this),n!==null){o=Z(o);for(var i=o.next();!i.done;i=o.next())i=i.value,ue.call(n,typeof i=="string"?document.createTextNode(i):i,this);We.call(n,this)}}})}Ve(CharacterData),Ve(Element);var Cr=window.Element.prototype,Tn=window.HTMLElement.prototype,so=window.SVGElement.prototype;!Tn.hasOwnProperty("classList")||Cr.hasOwnProperty("classList")||so.hasOwnProperty("classList")||Object.defineProperty(Cr,"classList",Object.getOwnPropertyDescriptor(Tn,"classList"));var Nr=document.createElement("style");Nr.textContent=`body {transition: opacity ease-in 0.2s; } 
body[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } 
`;var An=document.querySelector("head");An.insertBefore(Nr,An.firstChild);var It=window;It.WebComponents=It.WebComponents||{flags:{}};var Ii=document.querySelector('script[src*="webcomponents-bundle"]'),De=/wc-(.+)/,Ut={};if(!Ut.noOpts){if(location.search.slice(1).split("&").forEach(function(t){t=t.split("=");var e;t[0]&&(e=t[0].match(De))&&(Ut[e[1]]=t[1]||!0)}),Ii)for(var On=0,je=void 0;je=Ii.attributes[On];On++)je.name!=="src"&&(Ut[je.name]=je.value||!0);var Sr={};Ut.log&&Ut.log.split&&Ut.log.split(",").forEach(function(t){Sr[t]=!0}),Ut.log=Sr}It.WebComponents.flags=Ut;var lo=Ut.shadydom;if(lo){It.ShadyDOM=It.ShadyDOM||{},It.ShadyDOM.force=lo;var Dn=Ut.noPatch;It.ShadyDOM.noPatch=Dn==="true"?!0:Dn}var jn=Ut.register||Ut.ce;jn&&window.customElements&&(It.customElements.forcePolyfill=jn),function(){function t(){}function e(N,$){if(!N.childNodes.length)return[];switch(N.nodeType){case Node.DOCUMENT_NODE:return mt.call(N,$);case Node.DOCUMENT_FRAGMENT_NODE:return it.call(N,$);default:return M.call(N,$)}}var o=typeof HTMLTemplateElement>"u",n=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),i=!1;/Trident/.test(navigator.userAgent)&&function(){function N(K,Ft){if(K instanceof DocumentFragment)for(var Ma;Ma=K.firstChild;)st.call(this,Ma,Ft);else st.call(this,K,Ft);return K}i=!0;var $=Node.prototype.cloneNode;Node.prototype.cloneNode=function(K){return K=$.call(this,K),this instanceof DocumentFragment&&(K.__proto__=DocumentFragment.prototype),K},DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll,DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector,Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var st=Node.prototype.insertBefore;Node.prototype.insertBefore=N;var Et=Node.prototype.appendChild;Node.prototype.appendChild=function(K){return K instanceof DocumentFragment?N.call(this,K,null):Et.call(this,K),K};var pe=Node.prototype.removeChild,Re=Node.prototype.replaceChild;Node.prototype.replaceChild=function(K,Ft){return K instanceof DocumentFragment?(N.call(this,K,Ft),pe.call(this,Ft)):Re.call(this,K,Ft),Ft},Document.prototype.createDocumentFragment=function(){var K=this.createElement("df");return K.__proto__=DocumentFragment.prototype,K};var Co=Document.prototype.importNode;Document.prototype.importNode=function(K,Ft){return Ft=Co.call(this,K,Ft||!1),K instanceof DocumentFragment&&(Ft.__proto__=DocumentFragment.prototype),Ft}}();var s=Node.prototype.cloneNode,d=Document.prototype.createElement,p=Document.prototype.importNode,f=Node.prototype.removeChild,g=Node.prototype.appendChild,w=Node.prototype.replaceChild,D=DOMParser.prototype.parseFromString,ht=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(N){this.innerHTML=N}},rt=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},M=Element.prototype.querySelectorAll,mt=Document.prototype.querySelectorAll,it=DocumentFragment.prototype.querySelectorAll,jt=function(){if(!o){var N=document.createElement("template"),$=document.createElement("template");return $.content.appendChild(document.createElement("div")),N.content.appendChild($),N=N.cloneNode(!0),N.content.childNodes.length===0||N.content.firstChild.content.childNodes.length===0||n}}();if(o){var G=document.implementation.createHTMLDocument("template"),se=!0,R=document.createElement("style");R.textContent="template{display:none;}";var ko=document.head;ko.insertBefore(R,ko.firstElementChild),t.prototype=Object.create(HTMLElement.prototype);var Ee=!document.createElement("div").hasOwnProperty("innerHTML");t.Z=function(N){if(!N.content&&N.namespaceURI===document.documentElement.namespaceURI){N.content=G.createDocumentFragment();for(var $;$=N.firstChild;)g.call(N.content,$);if(Ee)N.__proto__=t.prototype;else if(N.cloneNode=function(st){return t.va(this,st)},se)try{k(N),yt(N)}catch{se=!1}t.bootstrap(N.content)}};var Eo={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},k=function(N){Object.defineProperty(N,"innerHTML",{get:function(){return ar(this)},set:function($){var st=Eo[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec($)||["",""])[1].toLowerCase()];if(st)for(var Et=0;Et<st.length;Et++)$="<"+st[Et]+">"+$+"</"+st[Et]+">";for(G.body.innerHTML=$,t.bootstrap(G);this.content.firstChild;)f.call(this.content,this.content.firstChild);if($=G.body,st)for(Et=0;Et<st.length;Et++)$=$.lastChild;for(;$.firstChild;)g.call(this.content,$.firstChild)},configurable:!0})},yt=function(N){Object.defineProperty(N,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function($){if(this.parentNode){for(G.body.innerHTML=$,$=this.ownerDocument.createDocumentFragment();G.body.firstChild;)g.call($,G.body.firstChild);w.call(this.parentNode,$,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.")},configurable:!0})};k(t.prototype),yt(t.prototype),t.bootstrap=function(N){N=e(N,"template");for(var $=0,st=N.length,Et;$<st&&(Et=N[$]);$++)t.Z(Et)},document.addEventListener("DOMContentLoaded",function(){t.bootstrap(document)}),Document.prototype.createElement=function(){var N=d.apply(this,arguments);return N.localName==="template"&&t.Z(N),N},DOMParser.prototype.parseFromString=function(){var N=D.apply(this,arguments);return t.bootstrap(N),N},Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ar(this)},set:function(N){ht.set.call(this,N),t.bootstrap(this)},configurable:!0,enumerable:!0});var Ce=/[&\u00A0"]/g,Ps=/[&\u00A0<>]/g,ja=function(N){switch(N){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"\xA0":return"&nbsp;"}};R=function(N){for(var $={},st=0;st<N.length;st++)$[N[st]]=!0;return $};var wi=R("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Pa=R("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ar=function(N,$){N.localName==="template"&&(N=N.content);for(var st="",Et=$?$(N):rt.get.call(N),pe=0,Re=Et.length,Co;pe<Re&&(Co=Et[pe]);pe++){t:{var K=Co,Ft=N,Ma=$;switch(K.nodeType){case Node.ELEMENT_NODE:for(var Ms=K.localName,La="<"+Ms,jc=K.attributes,sd=0;Ft=jc[sd];sd++)La+=" "+Ft.name+'="'+Ft.value.replace(Ce,ja)+'"';La+=">",K=wi[Ms]?La:La+ar(K,Ma)+"</"+Ms+">";break t;case Node.TEXT_NODE:K=K.data,K=Ft&&Pa[Ft.localName]?K:K.replace(Ps,ja);break t;case Node.COMMENT_NODE:K="<!--"+K.data+"-->";break t;default:throw window.console.error(K),Error("not implemented")}}st+=K}return st}}if(o||jt){t.va=function(N,$){var st=s.call(N,!1);return this.Z&&this.Z(st),$&&(g.call(st.content,s.call(N.content,!0)),j(st.content,N.content)),st};var j=function(N,$){if($.querySelectorAll&&($=e($,"template"),$.length!==0)){N=e(N,"template");for(var st=0,Et=N.length,pe,Re;st<Et;st++)Re=$[st],pe=N[st],t&&t.Z&&t.Z(Re),w.call(pe.parentNode,at.call(Re,!0),pe)}},at=Node.prototype.cloneNode=function(N){if(!i&&n&&this instanceof DocumentFragment)if(N)var $=xt.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&this.localName==="template"&&this.namespaceURI==document.documentElement.namespaceURI?$=t.va(this,N):$=s.call(this,N);return N&&j($,this),$},xt=Document.prototype.importNode=function(N,$){if($=$||!1,N.localName==="template")return t.va(N,$);var st=p.call(this,N,$);if($){j(st,N),N=e(st,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');for(var Et,pe=0;pe<N.length;pe++){Et=N[pe],$=d.call(document,"script"),$.textContent=Et.textContent;for(var Re=Et.attributes,Co=0,K;Co<Re.length;Co++)K=Re[Co],$.setAttribute(K.name,K.value);w.call(Et.parentNode,$,Et)}}return st}}o&&(window.HTMLTemplateElement=t)}();function Pn(){}Pn.prototype.toJSON=function(){return{}};function ft(t){return t.__shady||(t.__shady=new Pn),t.__shady}function q(t){return t&&t.__shady}var I=window.ShadyDOM||{};I.cb=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var Ho=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");I.D=!!(Ho&&Ho.configurable&&Ho.get),I.Ba=I.force||!I.cb,I.J=I.noPatch||!1,I.ha=I.preferPerformance,I.Da=I.J==="on-demand";var Fo,Tr=I.querySelectorImplementation;Fo=-1<["native","selectorEngine"].indexOf(Tr)?Tr:void 0,I.wb=Fo,I.Ra=navigator.userAgent.match("Trident");function Ri(){return Document.prototype.msElementsFromPoint?"msElementsFromPoint":"elementsFromPoint"}function fe(t){return(t=q(t))&&t.firstChild!==void 0}function Ot(t){return t instanceof ShadowRoot}function Ar(t){return(t=(t=q(t))&&t.root)&&Yr(t)}var Pe=Element.prototype,Bo=Pe.matches||Pe.matchesSelector||Pe.mozMatchesSelector||Pe.msMatchesSelector||Pe.oMatchesSelector||Pe.webkitMatchesSelector,Uo=document.createTextNode(""),Mn=0,qe=[];new MutationObserver(function(){for(;qe.length;)try{qe.shift()()}catch(t){throw Uo.textContent=Mn++,t}}).observe(Uo,{characterData:!0});function Or(t){qe.push(t),Uo.textContent=Mn++}var Ln=document.contains?function(t,e){return t.__shady_native_contains(e)}:function(t,e){return t===e||t.documentElement&&t.documentElement.__shady_native_contains(e)};function $n(t,e){for(;e;){if(e==t)return!0;e=e.__shady_parentNode}return!1}function he(t){for(var e=t.length-1;0<=e;e--){var o=t[e],n=o.getAttribute("id")||o.getAttribute("name");n&&n!=="length"&&isNaN(n)&&(t[n]=o)}return t.item=function(i){return t[i]},t.namedItem=function(i){if(i!=="length"&&isNaN(i)&&t[i])return t[i];for(var s=Z(t),d=s.next();!d.done;d=s.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==i)return d;return null},t}function Hi(t){var e=[];for(t=t.__shady_native_firstChild;t;t=t.__shady_native_nextSibling)e.push(t);return e}function Dr(t){var e=[];for(t=t.__shady_firstChild;t;t=t.__shady_nextSibling)e.push(t);return e}function zn(t,e,o){if(o.configurable=!0,o.value)t[e]=o.value;else try{Object.defineProperty(t,e,o)}catch{}}function Rt(t,e,o,n){o=o===void 0?"":o;for(var i in e)n&&0<=n.indexOf(i)||zn(t,o+i,e[i])}function jr(t,e){for(var o in e)o in t&&zn(t,o,e[o])}function wt(t){var e={};return Object.getOwnPropertyNames(t).forEach(function(o){e[o]=Object.getOwnPropertyDescriptor(t,o)}),e}function Wo(t,e){for(var o=Object.getOwnPropertyNames(e),n=0,i;n<o.length;n++)i=o[n],t[i]=e[i]}function In(t){return t instanceof Node?t:document.createTextNode(""+t)}function co(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];if(e.length===1)return In(e[0]);o=document.createDocumentFragment(),e=Z(e);for(var n=e.next();!n.done;n=e.next())o.appendChild(In(n.value));return o}function Rn(t){var e;for(e=e===void 0?1:e;0<e;e--)t=t.reduce(function(o,n){return Array.isArray(n)?o.push.apply(o,z(n)):o.push(n),o},[]);return t}function Fi(t){var e=[],o=new Set;t=Z(t);for(var n=t.next();!n.done;n=t.next())n=n.value,o.has(n)||(e.push(n),o.add(n));return e}var mo=[],po;function Bi(t){po||(po=!0,Or(Pr)),mo.push(t)}function Pr(){po=!1;for(var t=!!mo.length;mo.length;)mo.shift()();return t}Pr.list=mo;function Vo(){this.g=!1,this.addedNodes=[],this.removedNodes=[],this.qa=new Set}function Ui(t){t.g||(t.g=!0,Or(function(){t.flush()}))}Vo.prototype.flush=function(){if(this.g){this.g=!1;var t=this.takeRecords();t.length&&this.qa.forEach(function(e){e(t)})}},Vo.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var t=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];return this.addedNodes=[],this.removedNodes=[],t}return[]};function Wi(t,e){var o=ft(t);o.ga||(o.ga=new Vo),o.ga.qa.add(e);var n=o.ga;return{Va:e,X:n,Wa:t,takeRecords:function(){return n.takeRecords()}}}function Va(t){var e=t&&t.X;e&&(e.qa.delete(t.Va),e.qa.size||(ft(t.Wa).ga=null))}function Vi(t,e){var o=e.getRootNode();return t.map(function(n){var i=o===n.target.getRootNode();if(i&&n.addedNodes){if(i=[].slice.call(n.addedNodes).filter(function(s){return o===s.getRootNode()}),i.length)return n=Object.create(n),Object.defineProperty(n,"addedNodes",{value:i,configurable:!0}),n}else if(i)return n}).filter(function(n){return n})}var qi=/[&\u00A0"]/g,Xi=/[&\u00A0<>]/g;function uo(t){switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"\xA0":return"&nbsp;"}}function Me(t){for(var e={},o=0;o<t.length;o++)e[t[o]]=!0;return e}var qa=Me("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Mr=Me("style script xmp iframe noembed noframes plaintext noscript".split(" "));function Hn(t,e){t.localName==="template"&&(t=t.content);for(var o="",n=e?e(t):t.childNodes,i=0,s=n.length,d=void 0;i<s&&(d=n[i]);i++){t:{var p=d,f=t,g=e;switch(p.nodeType){case Node.ELEMENT_NODE:f=p.localName;for(var w="<"+f,D=p.attributes,ht=0,rt;rt=D[ht];ht++)w+=" "+rt.name+'="'+rt.value.replace(qi,uo)+'"';w+=">",p=qa[f]?w:w+Hn(p,g)+"</"+f+">";break t;case Node.TEXT_NODE:p=p.data,p=f&&Mr[f.localName]?p:p.replace(Xi,uo);break t;case Node.COMMENT_NODE:p="<!--"+p.data+"-->";break t;default:throw window.console.error(p),Error("not implemented")}}o+=p}return o}var Lr=I.D,Fn={querySelector:function(t){return this.__shady_native_querySelector(t)},querySelectorAll:function(t){return this.__shady_native_querySelectorAll(t)}},Gi={};function Yi(t){Gi[t]=function(e){return e["__shady_native_"+t]}}function qo(t,e){Rt(t,e,"__shady_native_");for(var o in e)Yi(o)}function _t(t,e){e=e===void 0?[]:e;for(var o=0;o<e.length;o++){var n=e[o],i=Object.getOwnPropertyDescriptor(t,n);i&&(Object.defineProperty(t,"__shady_native_"+n,i),i.value?Fn[n]||(Fn[n]=i.value):Yi(n))}}var Kt=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),bt=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),$r=document.implementation.createHTMLDocument("inert");function Bn(t){for(var e;e=t.__shady_native_firstChild;)t.__shady_native_removeChild(e)}var fo=["firstElementChild","lastElementChild","children","childElementCount"],zr=["querySelector","querySelectorAll","append","prepend","replaceChildren"];function Un(){var t=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?(_t(window.EventTarget.prototype,t),window.__shady_native_addEventListener===void 0&&_t(Window.prototype,t)):(_t(Node.prototype,t),_t(Window.prototype,t),_t(XMLHttpRequest.prototype,t)),Lr?_t(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):qo(Node.prototype,{parentNode:{get:function(){return Kt.currentNode=this,Kt.parentNode()}},firstChild:{get:function(){return Kt.currentNode=this,Kt.firstChild()}},lastChild:{get:function(){return Kt.currentNode=this,Kt.lastChild()}},previousSibling:{get:function(){return Kt.currentNode=this,Kt.previousSibling()}},nextSibling:{get:function(){return Kt.currentNode=this,Kt.nextSibling()}},childNodes:{get:function(){var e=[];Kt.currentNode=this;for(var o=Kt.firstChild();o;)e.push(o),o=Kt.nextSibling();return e}},parentElement:{get:function(){return bt.currentNode=this,bt.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var e=document.createTreeWalker(this,NodeFilter.SHOW_TEXT,null,!1),o="",n;n=e.nextNode();)o+=n.nodeValue;return o;default:return this.nodeValue}},set:function(e){switch((typeof e>"u"||e===null)&&(e=""),this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:Bn(this),(0<e.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(e),void 0);break;default:this.nodeValue=e}}}}),_t(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" ")),_t(HTMLElement.prototype,["parentElement","contains"]),t={firstElementChild:{get:function(){return bt.currentNode=this,bt.firstChild()}},lastElementChild:{get:function(){return bt.currentNode=this,bt.lastChild()}},children:{get:function(){var e=[];bt.currentNode=this;for(var o=bt.firstChild();o;)e.push(o),o=bt.nextSibling();return he(e)}},childElementCount:{get:function(){return this.children?this.children.length:0}}},Lr?(_t(Element.prototype,fo),_t(Element.prototype,["previousElementSibling","nextElementSibling","innerHTML","className"]),_t(HTMLElement.prototype,["children","innerHTML","className"])):(qo(Element.prototype,t),qo(Element.prototype,{previousElementSibling:{get:function(){return bt.currentNode=this,bt.previousSibling()}},nextElementSibling:{get:function(){return bt.currentNode=this,bt.nextSibling()}},innerHTML:{get:function(){return Hn(this,Hi)},set:function(e){var o=this.localName==="template"?this.content:this;Bn(o);var n=this.localName||"div";for(n=this.namespaceURI&&this.namespaceURI!==$r.namespaceURI?$r.createElementNS(this.namespaceURI,n):$r.createElement(n),n.innerHTML=e,e=this.localName==="template"?n.content:n;n=e.__shady_native_firstChild;)o.__shady_native_insertBefore(n,void 0)}},className:{get:function(){return this.getAttribute("class")||""},set:function(e){this.setAttribute("class",e)}}})),_t(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" ")),_t(Element.prototype,zr),_t(HTMLElement.prototype,["focus","blur"]),window.HTMLTemplateElement&&_t(window.HTMLTemplateElement.prototype,["innerHTML"]),Lr?_t(DocumentFragment.prototype,fo):qo(DocumentFragment.prototype,t),_t(DocumentFragment.prototype,zr),Lr?(_t(Document.prototype,fo),_t(Document.prototype,["activeElement"])):qo(Document.prototype,t),_t(Document.prototype,["importNode","getElementById","elementFromPoint",Ri()]),_t(Document.prototype,zr)}var Ir=wt({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),Rr=wt({get textContent(){return this.__shady_textContent},set textContent(t){this.__shady_textContent=t},get innerHTML(){return this.__shady_innerHTML},set innerHTML(t){this.__shady_innerHTML=t}}),Wn=wt({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},set className(t){this.__shady_className=t}});function Vn(t){for(var e in t){var o=t[e];o&&(o.enumerable=!1)}}Vn(Ir),Vn(Rr),Vn(Wn);var qn=I.D||I.J===!0,Xn=qn?function(){}:function(t){var e=ft(t);e.Ta||(e.Ta=!0,jr(t,Wn))},Gn=qn?function(){}:function(t){var e=ft(t);e.Sa||(e.Sa=!0,jr(t,Ir),window.customElements&&window.customElements.polyfillWrapFlushCallback&&!I.J||jr(t,Rr))},Xo="__eventWrappers"+Date.now(),Yn=function(){var t=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return t?function(e){return t.get.call(e)}:null}(),Ki=function(){function t(){}var e=!1,o={get capture(){return e=!0,!1}};return window.addEventListener("test",t,o),window.removeEventListener("test",t,o),e}();function Kn(t){if(t===null||typeof t!="object"&&typeof t!="function")var e=!!t,o=!1;else{e=!!t.capture,o=!!t.once;var n=t.U}return{Pa:n,capture:e,once:o,Na:Ki?t:e}}var Qi={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},Qn={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function Zn(t){return t instanceof Node?t.__shady_getRootNode():t}function ho(t,e){var o=[],n=t;for(t=Zn(t);n;)o.push(n),n=n.__shady_assignedSlot?n.__shady_assignedSlot:n.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&n.host&&(e||n!==t)?n.host:n.__shady_parentNode;return o[o.length-1]===document&&o.push(window),o}function Xa(t){return t.__composedPath||(t.__composedPath=ho(t.target,!0)),t.__composedPath}function Jn(t,e){if(!Ot)return t;t=ho(t,!0);for(var o=0,n,i=void 0,s,d=void 0;o<e.length;o++)if(n=e[o],s=Zn(n),s!==i&&(d=t.indexOf(s),i=s),!Ot(s)||-1<d)return n}var ye={get composed(){return this.__composed===void 0&&(Yn?this.__composed=this.type==="focusin"||this.type==="focusout"||Yn(this):this.isTrusted!==!1&&(this.__composed=Qi[this.type])),this.__composed||!1},composedPath:function(){return this.__composedPath||(this.__composedPath=ho(this.__target,this.composed)),this.__composedPath},get target(){return Jn(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){return this.__relatedTarget?(this.__relatedTargetComposedPath||(this.__relatedTargetComposedPath=ho(this.__relatedTarget,!0)),Jn(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)):null},stopPropagation:function(){Event.prototype.stopPropagation.call(this),this.ua=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this),this.ua=this.__immediatePropagationStopped=!0}},ti=I.D&&Object.getOwnPropertyDescriptor(Event.prototype,"eventPhase");ti&&(Object.defineProperty(ye,"eventPhase",{get:function(){return this.currentTarget===this.target?Event.AT_TARGET:this.__shady_native_eventPhase},enumerable:!0,configurable:!0}),Object.defineProperty(ye,"__shady_native_eventPhase",ti));function Hr(t){function e(o,n){return o=new t(o,n),o.__composed=n&&!!n.composed,o}return e.__proto__=t,e.prototype=t.prototype,e}var ei={focus:!0,blur:!0};function oi(t){return t.__target!==t.target||t.__relatedTarget!==t.relatedTarget}function ri(t,e,o){if(o=e.__handlers&&e.__handlers[t.type]&&e.__handlers[t.type][o])for(var n=0,i;(i=o[n])&&(!oi(t)||t.target!==t.relatedTarget)&&(i.call(e,t),!t.__immediatePropagationStopped);n++);}var ni=new Event("e").hasOwnProperty("currentTarget");function Zi(t){t=ni?Object.create(t):t;var e=t.composedPath(),o=e.map(function(w){return Jn(w,e)}),n=t.bubbles,i=Object.getOwnPropertyDescriptor(t,"currentTarget");Object.defineProperty(t,"currentTarget",{configurable:!0,enumerable:!0,get:function(){return f}});var s=Event.CAPTURING_PHASE,d=Object.getOwnPropertyDescriptor(t,"eventPhase");Object.defineProperty(t,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return s}});try{for(var p=e.length-1;0<=p;p--){var f=e[p];if(s=f===o[p]?Event.AT_TARGET:Event.CAPTURING_PHASE,ri(t,f,"capture"),t.ua)return}for(p=0;p<e.length;p++){f=e[p];var g=f===o[p];if((g||n)&&(s=g?Event.AT_TARGET:Event.BUBBLING_PHASE,ri(t,f,"bubble"),t.ua))break}}finally{ni||(i?Object.defineProperty(t,"currentTarget",i):delete t.currentTarget,d?Object.defineProperty(t,"eventPhase",d):delete t.eventPhase)}}function Ji(t,e,o,n){for(var i=0;i<t.length;i++){var s=t[i],d=s.type,p=s.capture;if(e===s.node&&o===d&&n===p)return i}return-1}function ge(t){return Pr(),!I.ha&&this instanceof Node&&!Ln(document,this)?(t.__target||Fr(t,this),Zi(t)):this.__shady_native_dispatchEvent(t)}function ii(t,e,o){var n=this,i=Kn(o),s=i.capture,d=i.once,p=i.Pa;if(i=i.Na,e){var f=typeof e;if((f==="function"||f==="object")&&(f!=="object"||e.handleEvent&&typeof e.handleEvent=="function")){if(Qn[t])return this.__shady_native_addEventListener(t,e,i);var g=p||this;if(p=e[Xo]){if(-1<Ji(p,g,t,s))return}else e[Xo]=[];p=function(w){if(d&&n.__shady_removeEventListener(t,e,o),w.__target||Fr(w),g!==n){var D=Object.getOwnPropertyDescriptor(w,"currentTarget");Object.defineProperty(w,"currentTarget",{get:function(){return g},configurable:!0});var ht=Object.getOwnPropertyDescriptor(w,"eventPhase");Object.defineProperty(w,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return s?Event.CAPTURING_PHASE:Event.BUBBLING_PHASE}})}if(w.__previousCurrentTarget=w.currentTarget,(!Ot(g)&&g.localName!=="slot"||w.composedPath().indexOf(g)!=-1)&&(w.composed||-1<w.composedPath().indexOf(g))){if(oi(w)&&w.target===w.relatedTarget)w.eventPhase===Event.BUBBLING_PHASE&&w.stopImmediatePropagation();else if(w.eventPhase===Event.CAPTURING_PHASE||w.bubbles||w.target===g||g instanceof Window){var rt=f==="function"?e.call(g,w):e.handleEvent&&e.handleEvent(w);return g!==n&&(D?(Object.defineProperty(w,"currentTarget",D),D=null):delete w.currentTarget,ht?(Object.defineProperty(w,"eventPhase",ht),ht=null):delete w.eventPhase),rt}}},e[Xo].push({node:g,type:t,capture:s,ub:p}),this.__handlers=this.__handlers||{},this.__handlers[t]=this.__handlers[t]||{capture:[],bubble:[]},this.__handlers[t][s?"capture":"bubble"].push(p),ei[t]||this.__shady_native_addEventListener(t,p,i)}}}function ai(t,e,o){if(e){var n=Kn(o);o=n.capture;var i=n.Pa;if(n=n.Na,Qn[t])return this.__shady_native_removeEventListener(t,e,n);var s=i||this;i=void 0;var d=null;try{d=e[Xo]}catch{}d&&(s=Ji(d,s,t,o),-1<s&&(i=d.splice(s,1)[0].ub,d.length||(e[Xo]=void 0))),this.__shady_native_removeEventListener(t,i||e,n),i&&this.__handlers&&this.__handlers[t]&&(t=this.__handlers[t][o?"capture":"bubble"],e=t.indexOf(i),-1<e&&t.splice(e,1))}}function Ga(){for(var t in ei)window.__shady_native_addEventListener(t,function(e){e.__target||(Fr(e),Zi(e))},!0)}var ta=wt(ye);function Fr(t,e){if(e=e===void 0?t.target:e,t.__target=e,t.__relatedTarget=t.relatedTarget,I.D){if(e=Object.getPrototypeOf(t),!e.hasOwnProperty("__shady_patchedProto")){var o=Object.create(e);o.__shady_sourceProto=e,Rt(o,ta),e.__shady_patchedProto=o}t.__proto__=e.__shady_patchedProto}else Rt(t,ta)}var Ya=Hr(Event),Ka=Hr(CustomEvent),Qa=Hr(MouseEvent);function Za(){if(!Yn&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var t=function(){var e=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(e)};Element.prototype.click?Element.prototype.click=t:HTMLElement.prototype.click&&(HTMLElement.prototype.click=t)}}var ea=Object.getOwnPropertyNames(Element.prototype).filter(function(t){return t.substring(0,2)==="on"}),Br=Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(t){return t.substring(0,2)==="on"});function Go(t){return{set:function(e){var o=ft(this),n=t.substring(2);o.T||(o.T={}),o.T[t]&&this.removeEventListener(n,o.T[t]),this.__shady_addEventListener(n,e),o.T[t]=e},get:function(){var e=q(this);return e&&e.T&&e.T[t]},configurable:!0}}function go(t,e){return{index:t,ia:[],pa:e}}function oa(t,e,o,n){var i=0,s=0,d=0,p=0,f=Math.min(e-i,n-s);if(i==0&&s==0)t:{for(d=0;d<f;d++)if(t[d]!==o[d])break t;d=f}if(e==t.length&&n==o.length){p=t.length;for(var g=o.length,w=0;w<f-d&&Ur(t[--p],o[--g]);)w++;p=w}if(i+=d,s+=d,e-=p,n-=p,e-i==0&&n-s==0)return[];if(i==e){for(e=go(i,0);s<n;)e.ia.push(o[s++]);return[e]}if(s==n)return[go(i,e-i)];for(f=i,d=s,n=n-d+1,p=e-f+1,e=Array(n),g=0;g<n;g++)e[g]=Array(p),e[g][0]=g;for(g=0;g<p;g++)e[0][g]=g;for(g=1;g<n;g++)for(w=1;w<p;w++)if(t[f+w-1]===o[d+g-1])e[g][w]=e[g-1][w-1];else{var D=e[g-1][w]+1,ht=e[g][w-1]+1;e[g][w]=D<ht?D:ht}for(f=e.length-1,d=e[0].length-1,n=e[f][d],t=[];0<f||0<d;)f==0?(t.push(2),d--):d==0?(t.push(3),f--):(p=e[f-1][d-1],g=e[f-1][d],w=e[f][d-1],D=g<w?g<p?g:p:w<p?w:p,D==p?(p==n?t.push(0):(t.push(1),n=p),f--,d--):D==g?(t.push(3),f--,n=g):(t.push(2),d--,n=w));for(t.reverse(),e=void 0,f=[],d=0;d<t.length;d++)switch(t[d]){case 0:e&&(f.push(e),e=void 0),i++,s++;break;case 1:e||(e=go(i,0)),e.pa++,i++,e.ia.push(o[s]),s++;break;case 2:e||(e=go(i,0)),e.pa++,i++;break;case 3:e||(e=go(i,0)),e.ia.push(o[s]),s++}return e&&f.push(e),f}function Ur(t,e){return t===e}var Wr=wt({dispatchEvent:ge,addEventListener:ii,removeEventListener:ai}),si=null;function Xe(){return si||(si=window.ShadyCSS&&window.ShadyCSS.ScopingShim),si||null}function ra(t,e,o){var n=Xe();return n&&e==="class"?(n.setElementClass(t,o),!0):!1}function Le(t,e){var o=Xe();o&&o.unscopeNode(t,e)}function na(t,e){var o=Xe();if(!o)return!0;if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){for(o=!0,t=t.__shady_firstChild;t;t=t.__shady_nextSibling)o=o&&na(t,e);return o}return t.nodeType!==Node.ELEMENT_NODE?!0:o.currentScopeForNode(t)===e}function Vr(t){if(t.nodeType!==Node.ELEMENT_NODE)return"";var e=Xe();return e?e.currentScopeForNode(t):""}function bo(t,e){if(t)for(t.nodeType===Node.ELEMENT_NODE&&e(t),t=t.__shady_firstChild;t;t=t.__shady_nextSibling)t.nodeType===Node.ELEMENT_NODE&&bo(t,e)}var qr=window.document,Ge=I.ha,li=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),ia=li&&li.get;function di(t){for(var e;e=t.__shady_firstChild;)t.__shady_removeChild(e)}function vo(t){var e=q(t);if(e&&e.ta!==void 0)for(e=t.__shady_firstChild;e;e=e.__shady_nextSibling)vo(e);(t=q(t))&&(t.ta=void 0)}function aa(t){var e=t;if(t&&t.localName==="slot"){var o=q(t);(o=o&&o.aa)&&(e=o.length?o[0]:aa(t.__shady_nextSibling))}return e}function ci(t,e,o){if(t=(t=q(t))&&t.ga){if(e)if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(var n=0,i=e.childNodes.length;n<i;n++)t.addedNodes.push(e.childNodes[n]);else t.addedNodes.push(e);o&&t.removedNodes.push(o),Ui(t)}}var Xr=wt({get parentNode(){var t=q(this);return t=t&&t.parentNode,t!==void 0?t:this.__shady_native_parentNode},get firstChild(){var t=q(this);return t=t&&t.firstChild,t!==void 0?t:this.__shady_native_firstChild},get lastChild(){var t=q(this);return t=t&&t.lastChild,t!==void 0?t:this.__shady_native_lastChild},get nextSibling(){var t=q(this);return t=t&&t.nextSibling,t!==void 0?t:this.__shady_native_nextSibling},get previousSibling(){var t=q(this);return t=t&&t.previousSibling,t!==void 0?t:this.__shady_native_previousSibling},get childNodes(){if(fe(this)){var t=q(this);if(!t.childNodes){t.childNodes=[];for(var e=this.__shady_firstChild;e;e=e.__shady_nextSibling)t.childNodes.push(e)}var o=t.childNodes}else o=this.__shady_native_childNodes;return o.item=function(n){return o[n]},o},get parentElement(){var t=q(this);return(t=t&&t.parentNode)&&t.nodeType!==Node.ELEMENT_NODE&&(t=null),t!==void 0?t:this.__shady_native_parentElement},get isConnected(){if(ia&&ia.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;var t=this.ownerDocument;if(t===null||Ln(t,this))return!0;for(t=this;t&&!(t instanceof Document);)t=t.__shady_parentNode||(Ot(t)?t.host:void 0);return!!(t&&t instanceof Document)},get textContent(){if(fe(this)){for(var t=[],e=this.__shady_firstChild;e;e=e.__shady_nextSibling)e.nodeType!==Node.COMMENT_NODE&&t.push(e.__shady_textContent);return t.join("")}return this.__shady_native_textContent},set textContent(t){switch((typeof t>"u"||t===null)&&(t=""),this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!fe(this)&&I.D){var e=this.__shady_firstChild;(e!=this.__shady_lastChild||e&&e.nodeType!=Node.TEXT_NODE)&&di(this),this.__shady_native_textContent=t}else di(this),(0<t.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(t));break;default:this.nodeValue=t}},insertBefore:function(t,e){if(this.ownerDocument!==qr&&t.ownerDocument!==qr)return this.__shady_native_insertBefore(t,e),t;if(t===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(e){var o=q(e);if(o=o&&o.parentNode,o!==void 0&&o!==this||o===void 0&&e.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.")}if(e===t)return t;ci(this,t);var n=[],i=(o=Ke(this))?o.host.localName:Vr(this),s=t.__shady_parentNode;if(s){var d=Vr(t),p=!!o||!Ke(t)||Ge&&this.__noInsertionPoint!==void 0;s.__shady_removeChild(t,p)}s=!0;var f=(!Ge||t.__noInsertionPoint===void 0&&this.__noInsertionPoint===void 0)&&!na(t,i),g=o&&!t.__noInsertionPoint&&(!Ge||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE);return(g||f)&&(f&&(d=d||Vr(t)),bo(t,function(w){if(g&&w.localName==="slot"&&n.push(w),f){var D=d;Xe()&&(D&&Le(w,D),(D=Xe())&&D.scopeNode(w,i))}})),n.length&&(ui(o),o.i.push.apply(o.i,z(n)),et(o)),fe(this)&&(kt(t,this,e),p=q(this),p.root?(s=!1,Ar(this)&&et(p.root)):o&&this.localName==="slot"&&(s=!1,et(o))),s?(o=Ot(this)?this.host:this,e?(e=aa(e),o.__shady_native_insertBefore(t,e)):o.__shady_native_appendChild(t)):t.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(t),t},appendChild:function(t){if(this!=t||!Ot(t))return this.__shady_insertBefore(t)},removeChild:function(t,e){if(e=e===void 0?!1:e,this.ownerDocument!==qr)return this.__shady_native_removeChild(t);if(t.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+t);ci(this,null,t);var o=Ke(t),n=o&&ts(o,t),i=q(this);if(fe(this)&&(Qt(t,this),Ar(this))){et(i.root);var s=!0}if(Xe()&&!e&&o&&t.nodeType!==Node.TEXT_NODE){var d=Vr(t);bo(t,function(p){Le(p,d)})}return vo(t),o&&((e=this.localName==="slot")&&(s=!0),(n||e)&&et(o)),s||(s=Ot(this)?this.host:this,(!i.root&&t.localName!=="slot"||s===t.__shady_native_parentNode)&&s.__shady_native_removeChild(t)),t},replaceChild:function(t,e){return this.__shady_insertBefore(t,e),this.__shady_removeChild(e),t},cloneNode:function(t){if(this.localName=="template")return this.__shady_native_cloneNode(t);var e=this.__shady_native_cloneNode(!1);if(t&&e.nodeType!==Node.ATTRIBUTE_NODE){t=this.__shady_firstChild;for(var o;t;t=t.__shady_nextSibling)o=t.__shady_cloneNode(!0),e.__shady_appendChild(o)}return e},getRootNode:function(t){if(this&&this.nodeType){var e=ft(this),o=e.ta;return o===void 0&&(Ot(this)?(o=this,e.ta=o):(o=(o=this.__shady_parentNode)?o.__shady_getRootNode(t):this,document.documentElement.__shady_native_contains(this)&&(e.ta=o))),o}},contains:function(t){return $n(this,t)}}),yo=wt({get assignedSlot(){var t=this.__shady_parentNode;return(t=t&&t.__shady_shadowRoot)&&Dt(t),(t=q(this))&&t.assignedSlot||null}}),xo=new Map;[["(",{end:")",sa:!0}],["[",{end:"]",sa:!0}],['"',{end:'"',sa:!1}],["'",{end:"'",sa:!1}]].forEach(function(t){var e=Z(t);t=e.next().value,e=e.next().value,xo.set(t,e)});function mi(t,e,o,n){for(n=n===void 0?!0:n;e<t.length;e++)if(t[e]==="\\"&&e<t.length-1&&t[e+1]!==`
`)e++;else{if(o.indexOf(t[e])!==-1)return e;if(n&&xo.has(t[e])){var i=xo.get(t[e]);e=mi(t,e+1,[i.end],i.sa)}}return t.length}function pi(t){function e(){if(0<n.length){for(;n[n.length-1]===" ";)n.pop();o.push({La:n.filter(function(f,g){return g%2===0}),Za:n.filter(function(f,g){return g%2===1})}),n.length=0}}for(var o=[],n=[],i=0;i<t.length;){var s=n[n.length-1],d=mi(t,i,[","," ",">","+","~"]),p=d===i?t[i]:t.substring(i,d);p===","?e():([void 0," ",">","+","~"].indexOf(s)===-1||p!==" ")&&(s===" "&&[">","+","~"].indexOf(p)!==-1?n[n.length-1]=p:n.push(p)),i=d+(d===i?1:0)}return e(),o}function Yo(t,e,o){var n=[];return Gr(t,e,o,n),n}function Gr(t,e,o,n){for(t=t.__shady_firstChild;t;t=t.__shady_nextSibling){var i;if(i=t.nodeType===Node.ELEMENT_NODE){i=t;var s=e,d=o,p=n,f=s(i);f&&p.push(i),d&&d(f)?i=f:(Gr(i,s,d,p),i=void 0)}if(i)break}}var be={get firstElementChild(){var t=q(this);if(t&&t.firstChild!==void 0){for(t=this.__shady_firstChild;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__shady_nextSibling;return t}return this.__shady_native_firstElementChild},get lastElementChild(){var t=q(this);if(t&&t.lastChild!==void 0){for(t=this.__shady_lastChild;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__shady_previousSibling;return t}return this.__shady_native_lastElementChild},get children(){return fe(this)?he(Array.prototype.filter.call(Dr(this),function(t){return t.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var t=this.__shady_children;return t?t.length:0}},Ye=wt((be.append=function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];this.__shady_insertBefore(co.apply(null,z(e)),null)},be.prepend=function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];this.__shady_insertBefore(co.apply(null,z(e)),this.__shady_firstChild)},be.replaceChildren=function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];for(;(o=this.__shady_firstChild)!==null;)this.__shady_removeChild(o);this.__shady_insertBefore(co.apply(null,z(e)),null)},be));function Ko(t,e){function o(i,s){return(i===t||s.indexOf(":scope")===-1)&&Bo.call(i,s)}var n=pi(e);if(1>n.length)return[];for(e=Rn(Yo(t,function(){return!0}).map(function(i){return Rn(n.map(function(s){var d=s.La,p=d.length-1;return o(i,d[p])?{target:i,da:s,fa:i,index:p}:[]}))}));e.some(function(i){return 0<i.index});)e=Rn(e.map(function(i){if(0>=i.index)return i;var s=i.target,d=i.fa,p=i.da;i=i.index-1;var f=p.Za[i],g=p.La[i];if(f===" "){for(f=[],d=d.__shady_parentElement;d;d=d.__shady_parentElement)o(d,g)&&f.push({target:s,da:p,fa:d,index:i});return f}if(f===">")return d=d.__shady_parentElement,o(d,g)?{target:s,da:p,fa:d,index:i}:[];if(f==="+")return(d=d.__shady_previousElementSibling)&&o(d,g)?{target:s,da:p,fa:d,index:i}:[];if(f==="~"){for(f=[],d=d.__shady_previousElementSibling;d;d=d.__shady_previousElementSibling)o(d,g)&&f.push({target:s,da:p,fa:d,index:i});return f}throw Error("Unrecognized combinator: '"+f+"'.")}));return Fi(e.map(function(i){return i.target}))}var de=I.querySelectorImplementation,Ja=wt({querySelector:function(t){if(de==="native"){var e=Array.prototype.slice.call((this instanceof ShadowRoot?this.host:this).__shady_native_querySelectorAll(t)),o=this.__shady_getRootNode();e=Z(e);for(var n=e.next();!n.done;n=e.next())if(n=n.value,n.__shady_getRootNode()==o)return n;return null}if(de==="selectorEngine")return Ko(this,t)[0]||null;if(de===void 0)return Yo(this,function(i){return Bo.call(i,t)},function(i){return!!i})[0]||null;throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '"+(de+"'"))},querySelectorAll:function(t,e){if(e||de==="native"){e=Array.prototype.slice.call((this instanceof ShadowRoot?this.host:this).__shady_native_querySelectorAll(t));var o=this.__shady_getRootNode();return he(e.filter(function(n){return n.__shady_getRootNode()==o}))}if(de==="selectorEngine")return he(Ko(this,t));if(de===void 0)return he(Yo(this,function(n){return Bo.call(n,t)}));throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '"+(de+"'"))}}),sa=I.ha&&!I.J?Wo({},Ye):Ye;Wo(Ye,Ja);var wo=wt({after:function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];if(o=this.__shady_parentNode,o!==null){var n=this.__shady_nextSibling;o.__shady_insertBefore(co.apply(null,z(e)),n)}},before:function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];o=this.__shady_parentNode,o!==null&&o.__shady_insertBefore(co.apply(null,z(e)),this)},remove:function(){var t=this.__shady_parentNode;t!==null&&t.__shady_removeChild(this)},replaceWith:function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];if(o=this.__shady_parentNode,o!==null){var n=this.__shady_nextSibling;o.__shady_removeChild(this),o.__shady_insertBefore(co.apply(null,z(e)),n)}}}),l=window.document;function r(t,e){if(e==="slot")t=t.__shady_parentNode,Ar(t)&&et(q(t).root);else if(t.localName==="slot"&&e==="name"&&(e=Ke(t))){if(e.g){Zo(e);var o=t.Ua,n=Jo(t);if(n!==o){o=e.h[o];var i=o.indexOf(t);0<=i&&o.splice(i,1),o=e.h[n]||(e.h[n]=[]),o.push(t),1<o.length&&(e.h[n]=la(o))}}et(e)}}var a=wt({get previousElementSibling(){var t=q(this);if(t&&t.previousSibling!==void 0){for(t=this.__shady_previousSibling;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__shady_previousSibling;return t}return this.__shady_native_previousElementSibling},get nextElementSibling(){var t=q(this);if(t&&t.nextSibling!==void 0){for(t=this.__shady_nextSibling;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__shady_nextSibling;return t}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},set slot(t){this.__shady_setAttribute("slot",t)},get className(){return this.getAttribute("class")||""},set className(t){this.__shady_setAttribute("class",t)},setAttribute:function(t,e){this.ownerDocument!==l?this.__shady_native_setAttribute(t,e):ra(this,t,e)||(this.__shady_native_setAttribute(t,e),r(this,t))},removeAttribute:function(t){this.ownerDocument!==l?this.__shady_native_removeAttribute(t):ra(this,t,"")?this.getAttribute(t)===""&&this.__shady_native_removeAttribute(t):(this.__shady_native_removeAttribute(t),r(this,t))}});I.ha||ea.forEach(function(t){a[t]=Go(t)});var c=wt({attachShadow:function(t){if(!this)throw Error("Must provide a host.");if(!t)throw Error("Not enough arguments.");if(t.shadyUpgradeFragment&&!I.Ra){var e=t.shadyUpgradeFragment;if(e.__proto__=ShadowRoot.prototype,Tt(e,this,t),Vt(e,e),t=e.__noInsertionPoint?null:e.querySelectorAll("slot"),e.__noInsertionPoint=void 0,t&&t.length){var o=e;ui(o),o.i.push.apply(o.i,z(t)),et(e)}e.host.__shady_native_appendChild(e)}else e=new xe(Ht,this,t);return this.__CE_shadowRoot=e},get shadowRoot(){var t=q(this);return t&&t.lb||null}});Wo(a,c);var h=document.implementation.createHTMLDocument("inert"),b=wt({get innerHTML(){return fe(this)?Hn(this.localName==="template"?this.content:this,Dr):this.__shady_native_innerHTML},set innerHTML(t){if(this.localName==="template")this.__shady_native_innerHTML=t;else{di(this);var e=this.localName||"div";for(e=this.namespaceURI&&this.namespaceURI!==h.namespaceURI?h.createElementNS(this.namespaceURI,e):h.createElement(e),I.D?e.__shady_native_innerHTML=t:e.innerHTML=t;t=e.__shady_firstChild;)this.__shady_insertBefore(t)}}}),x=wt({blur:function(){var t=q(this);(t=(t=t&&t.root)&&t.activeElement)?t.__shady_blur():this.__shady_native_blur()}});I.ha||Br.forEach(function(t){x[t]=Go(t)});var E=wt({assignedNodes:function(t){if(this.localName==="slot"){var e=this.__shady_getRootNode();return e&&Ot(e)&&Dt(e),(e=q(this))?(t&&t.flatten?e.aa:e.assignedNodes)||[]:[]}},addEventListener:function(t,e,o){if(this.localName!=="slot"||t==="slotchange")ii.call(this,t,e,o);else{typeof o!="object"&&(o={capture:!!o});var n=this.__shady_parentNode;if(!n)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");o.U=this,n.__shady_addEventListener(t,e,o)}},removeEventListener:function(t,e,o){if(this.localName!=="slot"||t==="slotchange")ai.call(this,t,e,o);else{typeof o!="object"&&(o={capture:!!o});var n=this.__shady_parentNode;if(!n)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");o.U=this,n.__shady_removeEventListener(t,e,o)}}}),S=wt({getElementById:function(t){return t===""?null:Yo(this,function(e){return e.id==t},function(e){return!!e})[0]||null}});function P(t,e){for(var o;e&&!t.has(o=e.__shady_getRootNode());)e=o.host;return e}function L(t){var e=new Set;for(e.add(t);Ot(t)&&t.host;)t=t.host.__shady_getRootNode(),e.add(t);return e}var O="__shady_native_"+Ri(),X=wt({get activeElement(){var t=I.D?document.__shady_native_activeElement:document.activeElement;if(!t||!t.nodeType)return null;var e=!!Ot(this);if(!(this===document||e&&this.host!==t&&this.host.__shady_native_contains(t)))return null;for(e=Ke(t);e&&e!==this;)t=e.host,e=Ke(t);return this===document?e?null:t:e===this?t:null},elementsFromPoint:function(t,e){if(t=document[O](t,e),this===document&&I.useNativeDocumentEFP)return t;t=[].slice.call(t),e=L(this);for(var o=new Set,n=0;n<t.length;n++)o.add(P(e,t[n]));var i=[];return o.forEach(function(s){return i.push(s)}),i},elementFromPoint:function(t,e){return this===document&&I.useNativeDocumentEFP?this.__shady_native_elementFromPoint(t,e):this.__shady_elementsFromPoint(t,e)[0]||null}}),H=window.document,W=wt({importNode:function(t,e){if(t.ownerDocument!==H||t.localName==="template")return this.__shady_native_importNode(t,e);var o=this.__shady_native_importNode(t,!1);if(e)for(t=t.__shady_firstChild;t;t=t.__shady_nextSibling)e=this.__shady_importNode(t,!0),o.__shady_appendChild(e);return o}}),B=wt({dispatchEvent:ge,addEventListener:ii.bind(window),removeEventListener:ai.bind(window)}),F={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(F.parentElement=Xr.parentElement),Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(F.contains=Xr.contains),Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(F.children=Ye.children),Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(F.innerHTML=b.innerHTML),Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(F.className=a.className);var J={EventTarget:[Wr],Node:[Xr,window.EventTarget?null:Wr],Text:[yo],Comment:[yo],CDATASection:[yo],ProcessingInstruction:[yo],Element:[a,Ye,wo,yo,!I.D||"innerHTML"in Element.prototype?b:null,window.HTMLSlotElement?null:E],HTMLElement:[x,F],HTMLSlotElement:[E],DocumentFragment:[sa,S],Document:[W,sa,S,X],Window:[B],CharacterData:[wo],XMLHttpRequest:[window.EventTarget?null:Wr]},ut=I.D?null:["innerHTML","textContent"];function U(t,e,o,n){e.forEach(function(i){return t&&i&&Rt(t,i,o,n)})}function lt(t){var e=t?null:ut,o;for(o in J)U(window[o]&&window[o].prototype,J[o],t,e)}["Text","Comment","CDATASection","ProcessingInstruction"].forEach(function(t){var e=window[t],o=Object.create(e.prototype);o.__shady_protoIsPatched=!0,U(o,J.EventTarget),U(o,J.Node),J[t]&&U(o,J[t]),e.prototype.__shady_patchedProto=o});function Y(t){return t.__shady_protoIsPatched=!0,U(t,J.EventTarget),U(t,J.Node),U(t,J.Element),U(t,J.HTMLElement),U(t,J.HTMLSlotElement),t}var tt=I.Da,pt=I.D;function dt(t,e){if(tt&&!t.__shady_protoIsPatched&&!Ot(t)){var o=Object.getPrototypeOf(t),n=o.hasOwnProperty("__shady_patchedProto")&&o.__shady_patchedProto;n||(n=Object.create(o),Y(n),o.__shady_patchedProto=n),Object.setPrototypeOf(t,n)}pt||(e===1?Xn(t):e===2&&Gn(t))}function ct(t,e,o,n){dt(t,1),n=n||null;var i=ft(t),s=n?ft(n):null;i.previousSibling=n?s.previousSibling:e.__shady_lastChild,(s=q(i.previousSibling))&&(s.nextSibling=t),(s=q(i.nextSibling=n))&&(s.previousSibling=t),i.parentNode=e,n?n===o.firstChild&&(o.firstChild=t):(o.lastChild=t,o.firstChild||(o.firstChild=t)),o.childNodes=null}function kt(t,e,o){dt(e,2);var n=ft(e);if(n.firstChild!==void 0&&(n.childNodes=null),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(t=t.__shady_native_firstChild;t;t=t.__shady_native_nextSibling)ct(t,e,n,o);else ct(t,e,n,o)}function Qt(t,e){var o=ft(t);e=ft(e),t===e.firstChild&&(e.firstChild=o.nextSibling),t===e.lastChild&&(e.lastChild=o.previousSibling),t=o.previousSibling;var n=o.nextSibling;t&&(ft(t).nextSibling=n),n&&(ft(n).previousSibling=t),o.parentNode=o.previousSibling=o.nextSibling=void 0,e.childNodes!==void 0&&(e.childNodes=null)}function Vt(t,e){var o=ft(t);if(e||o.firstChild===void 0){o.childNodes=null;var n=o.firstChild=t.__shady_native_firstChild;for(o.lastChild=t.__shady_native_lastChild,dt(t,2),o=n,n=void 0;o;o=o.__shady_native_nextSibling){var i=ft(o);i.parentNode=e||t,i.nextSibling=o.__shady_native_nextSibling,i.previousSibling=n||null,n=o,dt(o,1)}}}var Wt=wt({addEventListener:function(t,e,o){typeof o!="object"&&(o={capture:!!o}),o.U=o.U||this,this.host.__shady_addEventListener(t,e,o)},removeEventListener:function(t,e,o){typeof o!="object"&&(o={capture:!!o}),o.U=o.U||this,this.host.__shady_removeEventListener(t,e,o)}});function Zt(t,e){Rt(t,Wt,e),Rt(t,X,e),Rt(t,b,e),Rt(t,Ye,e),I.J&&!e?(Rt(t,Xr,e),Rt(t,S,e)):I.D||(Rt(t,Wn),Rt(t,Ir),Rt(t,Rr))}var Ht={},vt=I.deferConnectionCallbacks&&document.readyState==="loading",Jt;function ce(t){var e=[];do e.unshift(t);while(t=t.__shady_parentNode);return e}function xe(t,e,o){if(t!==Ht)throw new TypeError("Illegal constructor");this.g=null,Tt(this,e,o)}function Tt(t,e,o){if(t.host=e,t.mode=o&&o.mode,Vt(t.host),e=ft(t.host),e.root=t,e.lb=t.mode!=="closed"?t:null,e=ft(t),e.firstChild=e.lastChild=e.parentNode=e.nextSibling=e.previousSibling=null,I.preferPerformance)for(;e=t.host.__shady_native_firstChild;)t.host.__shady_native_removeChild(e);else et(t)}function et(t){t.Y||(t.Y=!0,Bi(function(){return Dt(t)}))}function Dt(t){var e;if(e=t.Y){for(var o;t;)t:{if(t.Y&&(o=t),e=t,t=e.host.__shady_getRootNode(),Ot(t)&&(e=q(e.host))&&0<e.ka)break t;t=void 0}e=o}(o=e)&&o._renderSelf()}xe.prototype._renderSelf=function(){var t=vt;if(vt=!0,this.Y=!1,this.g){Zo(this);for(var e=0,o;e<this.g.length;e++){o=this.g[e];var n=q(o),i=n.assignedNodes;if(n.assignedNodes=[],n.aa=[],n.Ja=i)for(n=0;n<i.length;n++){var s=q(i[n]);s.xa=s.assignedSlot,s.assignedSlot===o&&(s.assignedSlot=null)}}for(e=this.host.__shady_firstChild;e;e=e.__shady_nextSibling)te(this,e);for(e=0;e<this.g.length;e++){if(o=this.g[e],i=q(o),!i.assignedNodes.length)for(n=o.__shady_firstChild;n;n=n.__shady_nextSibling)te(this,n,o);if((n=(n=q(o.__shady_parentNode))&&n.root)&&(Yr(n)||n.Y)&&n._renderSelf(),we(this,i.aa,i.assignedNodes),n=i.Ja){for(s=0;s<n.length;s++)q(n[s]).xa=null;i.Ja=null,n.length>i.assignedNodes.length&&(i.Aa=!0)}i.Aa&&(i.Aa=!1,Qo(this,o))}for(o=this.g,e=[],i=0;i<o.length;i++)n=o[i].__shady_parentNode,(s=q(n))&&s.root||!(0>e.indexOf(n))||e.push(n);for(o=0;o<e.length;o++){for(s=e[o],i=s===this?this.host:s,n=[],s=s.__shady_firstChild;s;s=s.__shady_nextSibling)if(s.localName=="slot")for(var d=q(s).aa,p=0;p<d.length;p++)n.push(d[p]);else n.push(s);s=Hi(i),d=oa(n,n.length,s,s.length);for(var f=p=0,g=void 0;p<d.length&&(g=d[p]);p++){for(var w=0,D=void 0;w<g.ia.length&&(D=g.ia[w]);w++)D.__shady_native_parentNode===i&&i.__shady_native_removeChild(D),s.splice(g.index+f,1);f-=g.pa}for(f=0,g=void 0;f<d.length&&(g=d[f]);f++)for(p=s[g.index],w=g.index;w<g.index+g.pa;w++)D=n[w],i.__shady_native_insertBefore(D,p),s.splice(w,0,D)}}if(!I.preferPerformance&&!this.Ia)for(e=this.host.__shady_firstChild;e;e=e.__shady_nextSibling)o=q(e),e.__shady_native_parentNode!==this.host||e.localName!=="slot"&&o.assignedSlot||this.host.__shady_native_removeChild(e);this.Ia=!0,vt=t,Jt&&Jt()};function te(t,e,o){var n=ft(e),i=n.xa;n.xa=null,o||(o=(t=t.h[e.__shady_slot||"__catchall"])&&t[0]),o?(ft(o).assignedNodes.push(e),n.assignedSlot=o):n.assignedSlot=void 0,i!==n.assignedSlot&&n.assignedSlot&&(ft(n.assignedSlot).Aa=!0)}function we(t,e,o){for(var n=0,i=void 0;n<o.length&&(i=o[n]);n++)if(i.localName=="slot"){var s=q(i).assignedNodes;s&&s.length&&we(t,e,s)}else e.push(o[n])}function Qo(t,e){e.__shady_native_dispatchEvent(new Event("slotchange")),e=q(e),e.assignedSlot&&Qo(t,e.assignedSlot)}function ui(t){t.i=t.i||[],t.g=t.g||[],t.h=t.h||{}}function Zo(t){if(t.i&&t.i.length){for(var e=t.i,o,n=0;n<e.length;n++){var i=e[n];Vt(i);var s=i.__shady_parentNode;Vt(s),s=q(s),s.ka=(s.ka||0)+1,s=Jo(i),t.h[s]?(o=o||{},o[s]=!0,t.h[s].push(i)):t.h[s]=[i],t.g.push(i)}if(o)for(var d in o)t.h[d]=la(t.h[d]);t.i=[]}}function Jo(t){var e=t.name||t.getAttribute("name")||"__catchall";return t.Ua=e}function la(t){return t.sort(function(e,o){e=ce(e);for(var n=ce(o),i=0;i<e.length;i++){o=e[i];var s=n[i];if(o!==s)return e=Dr(o.__shady_parentNode),e.indexOf(o)-e.indexOf(s)}})}function ts(t,e){if(t.g){Zo(t);var o=t.h,n;for(n in o)for(var i=o[n],s=0;s<i.length;s++){var d=i[s];if($n(e,d)){i.splice(s,1);var p=t.g.indexOf(d);if(0<=p&&(t.g.splice(p,1),(p=q(d.__shady_parentNode))&&p.ka&&p.ka--),s--,d=q(d),p=d.aa)for(var f=0;f<p.length;f++){var g=p[f],w=g.__shady_native_parentNode;w&&w.__shady_native_removeChild(g)}d.aa=[],d.assignedNodes=[],p=!0}}return p}}function Yr(t){return Zo(t),!(!t.g||!t.g.length)}if(function(t){t.__proto__=DocumentFragment.prototype,Zt(t,"__shady_"),Zt(t),Object.defineProperties(t,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}}),["localName","namespaceURI","prefix"].forEach(function(e){Object.defineProperty(t,e,{value:void 0,configurable:!0})}),["ownerDocument","baseURI","isConnected"].forEach(function(e){Object.defineProperty(t,e,{get:function(){return this.host[e]},configurable:!0})})}(xe.prototype),window.customElements&&window.customElements.define&&I.Ba&&!I.preferPerformance){var Kr=new Map;Jt=function(){var t=[];Kr.forEach(function(n,i){t.push([i,n])}),Kr.clear();for(var e=0;e<t.length;e++){var o=t[e][0];t[e][1]?o.__shadydom_connectedCallback():o.__shadydom_disconnectedCallback()}},vt&&document.addEventListener("readystatechange",function(){vt=!1,Jt()},{once:!0});var da=function(t,e,o){var n=0,i="__isConnected"+n++;return(e||o)&&(t.prototype.connectedCallback=t.prototype.__shadydom_connectedCallback=function(){vt?Kr.set(this,!0):this[i]||(this[i]=!0,e&&e.call(this))},t.prototype.disconnectedCallback=t.prototype.__shadydom_disconnectedCallback=function(){vt?this.isConnected||Kr.set(this,!1):this[i]&&(this[i]=!1,o&&o.call(this))}),t},es=window.customElements.define,fi=function(t,e){var o=e.prototype.connectedCallback,n=e.prototype.disconnectedCallback;es.call(window.customElements,t,da(e,o,n)),e.prototype.connectedCallback=o,e.prototype.disconnectedCallback=n};window.customElements.define=fi,Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:fi,configurable:!0})}function Ke(t){if(t=t.__shady_getRootNode(),Ot(t))return t}function _o(t){this.node=t}y=_o.prototype,y.addEventListener=function(t,e,o){return this.node.__shady_addEventListener(t,e,o)},y.removeEventListener=function(t,e,o){return this.node.__shady_removeEventListener(t,e,o)},y.appendChild=function(t){return this.node.__shady_appendChild(t)},y.insertBefore=function(t,e){return this.node.__shady_insertBefore(t,e)},y.removeChild=function(t){return this.node.__shady_removeChild(t)},y.replaceChild=function(t,e){return this.node.__shady_replaceChild(t,e)},y.cloneNode=function(t){return this.node.__shady_cloneNode(t)},y.getRootNode=function(t){return this.node.__shady_getRootNode(t)},y.contains=function(t){return this.node.__shady_contains(t)},y.dispatchEvent=function(t){return this.node.__shady_dispatchEvent(t)},y.setAttribute=function(t,e){this.node.__shady_setAttribute(t,e)},y.getAttribute=function(t){return this.node.__shady_native_getAttribute(t)},y.hasAttribute=function(t){return this.node.__shady_native_hasAttribute(t)},y.removeAttribute=function(t){this.node.__shady_removeAttribute(t)},y.attachShadow=function(t){return this.node.__shady_attachShadow(t)},y.focus=function(){this.node.__shady_native_focus()},y.blur=function(){this.node.__shady_blur()},y.importNode=function(t,e){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(t,e)},y.getElementById=function(t){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(t)},y.elementsFromPoint=function(t,e){return this.node.__shady_elementsFromPoint(t,e)},y.elementFromPoint=function(t,e){return this.node.__shady_elementFromPoint(t,e)},y.querySelector=function(t){return this.node.__shady_querySelector(t)},y.querySelectorAll=function(t,e){return this.node.__shady_querySelectorAll(t,e)},y.assignedNodes=function(t){if(this.node.localName==="slot")return this.node.__shady_assignedNodes(t)},y.append=function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];return this.node.__shady_append.apply(this.node,z(e))},y.prepend=function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];return this.node.__shady_prepend.apply(this.node,z(e))},y.after=function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];return this.node.__shady_after.apply(this.node,z(e))},y.before=function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];return this.node.__shady_before.apply(this.node,z(e))},y.remove=function(){return this.node.__shady_remove()},y.replaceWith=function(t){for(var e=[],o=0;o<arguments.length;++o)e[o]=arguments[o];return this.node.__shady_replaceWith.apply(this.node,z(e))},_.Object.defineProperties(_o.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(Ot(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(Ot(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(t){this.node.__shady_innerHTML=t}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(t){this.node.__shady_textContent=t}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(t){this.node.__shady_slot=t}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(t){this.node.__shady_className=t}}});function ca(t){Object.defineProperty(_o.prototype,t,{get:function(){return this.node["__shady_"+t]},set:function(e){this.node["__shady_"+t]=e},configurable:!0})}ea.forEach(function(t){return ca(t)}),Br.forEach(function(t){return ca(t)});var $e=new WeakMap;function tr(t){if(Ot(t)||t instanceof _o)return t;var e=$e.get(t);return e||(e=new _o(t),$e.set(t,e)),e}if(I.Ba){var hi=I.D?function(t){return t}:function(t){return Gn(t),Xn(t),t},ma={inUse:I.Ba,patch:hi,isShadyRoot:Ot,enqueue:Bi,flush:Pr,flushInitial:function(t){!t.Ia&&t.Y&&Dt(t)},settings:I,filterMutations:Vi,observeChildren:Wi,unobserveChildren:Va,deferConnectionCallbacks:I.deferConnectionCallbacks,preferPerformance:I.preferPerformance,handlesDynamicScoping:!0,wrap:I.J?tr:hi,wrapIfNeeded:I.J===!0?tr:function(t){return t},Wrapper:_o,composedPath:Xa,noPatch:I.J,patchOnDemand:I.Da,nativeMethods:Fn,nativeTree:Gi,patchElementProto:Y,querySelectorImplementation:I.querySelectorImplementation};window.ShadyDOM=ma,Un(),lt("__shady_"),Object.defineProperty(document,"_activeElement",X.activeElement),Rt(Window.prototype,B,"__shady_"),I.J?I.Da&&Rt(Element.prototype,c):(lt(),Za()),Ga(),window.Event=Ya,window.CustomEvent=Ka,window.MouseEvent=Qa,window.ShadowRoot=xe}var er=window.Document.prototype.createElement,Qr=window.Document.prototype.createElementNS,pa=window.Document.prototype.importNode,ua=window.Document.prototype.prepend,fa=window.Document.prototype.append,os=window.DocumentFragment.prototype.prepend,rs=window.DocumentFragment.prototype.append,Zr=window.Node.prototype.cloneNode,or=window.Node.prototype.appendChild,Js=window.Node.prototype.insertBefore,ns=window.Node.prototype.removeChild,tl=window.Node.prototype.replaceChild,is=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),el=window.Element.prototype.attachShadow,as=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),ss=window.Element.prototype.getAttribute,ol=window.Element.prototype.setAttribute,rl=window.Element.prototype.removeAttribute,ha=window.Element.prototype.getAttributeNS,nl=window.Element.prototype.setAttributeNS,il=window.Element.prototype.removeAttributeNS,al=window.Element.prototype.insertAdjacentElement,sl=window.Element.prototype.insertAdjacentHTML,$d=window.Element.prototype.prepend,zd=window.Element.prototype.append,ll=window.Element.prototype.before,dl=window.Element.prototype.after,cl=window.Element.prototype.replaceWith,ml=window.Element.prototype.remove,Id=window.HTMLElement,ls=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),pl=window.HTMLElement.prototype.insertAdjacentElement,ul=window.HTMLElement.prototype.insertAdjacentHTML,fl=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(t){return fl.add(t)});function hl(t){var e=fl.has(t);return t=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t),!e&&t}var Rd=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function Ct(t){var e=t.isConnected;if(e!==void 0)return e;if(Rd(t))return!0;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function ds(t){var e=t.children;if(e)return Array.prototype.slice.call(e);for(e=[],t=t.firstChild;t;t=t.nextSibling)t.nodeType===Node.ELEMENT_NODE&&e.push(t);return e}function cs(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function ms(t,e,o){for(var n=t;n;){if(n.nodeType===Node.ELEMENT_NODE){var i=n;e(i);var s=i.localName;if(s==="link"&&i.getAttribute("rel")==="import"){if(n=i.import,o===void 0&&(o=new Set),n instanceof Node&&!o.has(n))for(o.add(n),n=n.firstChild;n;n=n.nextSibling)ms(n,e,o);n=cs(t,i);continue}else if(s==="template"){n=cs(t,i);continue}if(i=i.__CE_shadowRoot)for(i=i.firstChild;i;i=i.nextSibling)ms(i,e,o)}n=n.firstChild?n.firstChild:cs(t,n)}}function ga(){var t=!(Ie==null||!Ie.noDocumentConstructionObserver),e=!(Ie==null||!Ie.shadyDomFastWalk);this.ca=[],this.g=[],this.W=!1,this.shadyDomFastWalk=e,this.sb=!t}function gi(t,e,o,n){var i=window.ShadyDOM;if(t.shadyDomFastWalk&&i&&i.inUse){if(e.nodeType===Node.ELEMENT_NODE&&o(e),e.querySelectorAll)for(t=i.nativeMethods.querySelectorAll.call(e,"*"),e=0;e<t.length;e++)o(t[e])}else ms(e,o,n)}function Hd(t,e){t.W=!0,t.ca.push(e)}function Fd(t,e){t.W=!0,t.g.push(e)}function ps(t,e){t.W&&gi(t,e,function(o){return Jr(t,o)})}function Jr(t,e){if(t.W&&!e.__CE_patched){e.__CE_patched=!0;for(var o=0;o<t.ca.length;o++)t.ca[o](e);for(o=0;o<t.g.length;o++)t.g[o](e)}}function ze(t,e){var o=[];for(gi(t,e,function(i){return o.push(i)}),e=0;e<o.length;e++){var n=o[e];n.__CE_state===1?t.connectedCallback(n):ba(t,n)}}function me(t,e){var o=[];for(gi(t,e,function(i){return o.push(i)}),e=0;e<o.length;e++){var n=o[e];n.__CE_state===1&&t.disconnectedCallback(n)}}function Qe(t,e,o){o=o===void 0?{}:o;var n=o.tb,i=o.upgrade||function(d){return ba(t,d)},s=[];for(gi(t,e,function(d){if(t.W&&Jr(t,d),d.localName==="link"&&d.getAttribute("rel")==="import"){var p=d.import;p instanceof Node&&(p.__CE_isImportDocument=!0,p.__CE_registry=document.__CE_registry),p&&p.readyState==="complete"?p.__CE_documentLoadHandled=!0:d.addEventListener("load",function(){var f=d.import;if(!f.__CE_documentLoadHandled){f.__CE_documentLoadHandled=!0;var g=new Set;n&&(n.forEach(function(w){return g.add(w)}),g.delete(f)),Qe(t,f,{tb:g,upgrade:i})}})}else s.push(d)},n),e=0;e<s.length;e++)i(s[e])}function ba(t,e){try{var o=e.ownerDocument,n=o.__CE_registry,i=n&&(o.defaultView||o.__CE_isImportDocument)?va(n,e.localName):void 0;if(i&&e.__CE_state===void 0){i.constructionStack.push(e);try{try{if(new i.constructorFunction!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{i.constructionStack.pop()}}catch(f){throw e.__CE_state=2,f}if(e.__CE_state=1,e.__CE_definition=i,i.attributeChangedCallback&&e.hasAttributes()){var s=i.observedAttributes;for(i=0;i<s.length;i++){var d=s[i],p=e.getAttribute(d);p!==null&&t.attributeChangedCallback(e,d,null,p,null)}}Ct(e)&&t.connectedCallback(e)}}catch(f){tn(f)}}ga.prototype.connectedCallback=function(t){var e=t.__CE_definition;if(e.connectedCallback)try{e.connectedCallback.call(t)}catch(o){tn(o)}},ga.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;if(e.disconnectedCallback)try{e.disconnectedCallback.call(t)}catch(o){tn(o)}},ga.prototype.attributeChangedCallback=function(t,e,o,n,i){var s=t.__CE_definition;if(s.attributeChangedCallback&&-1<s.observedAttributes.indexOf(e))try{s.attributeChangedCallback.call(t,e,o,n,i)}catch(d){tn(d)}};function gl(t,e,o,n){var i=e.__CE_registry;if(i&&(n===null||n==="http://www.w3.org/1999/xhtml")&&(i=va(i,o)))try{var s=new i.constructorFunction;if(s.__CE_state===void 0||s.__CE_definition===void 0)throw Error("Failed to construct '"+o+"': The returned value was not constructed with the HTMLElement constructor.");if(s.namespaceURI!=="http://www.w3.org/1999/xhtml")throw Error("Failed to construct '"+o+"': The constructed element's namespace must be the HTML namespace.");if(s.hasAttributes())throw Error("Failed to construct '"+o+"': The constructed element must not have any attributes.");if(s.firstChild!==null)throw Error("Failed to construct '"+o+"': The constructed element must not have any children.");if(s.parentNode!==null)throw Error("Failed to construct '"+o+"': The constructed element must not have a parent node.");if(s.ownerDocument!==e)throw Error("Failed to construct '"+o+"': The constructed element's owner document is incorrect.");if(s.localName!==o)throw Error("Failed to construct '"+o+"': The constructed element's local name is incorrect.");return s}catch(d){return tn(d),e=n===null?er.call(e,o):Qr.call(e,n,o),Object.setPrototypeOf(e,HTMLUnknownElement.prototype),e.__CE_state=2,e.__CE_definition=void 0,Jr(t,e),e}return e=n===null?er.call(e,o):Qr.call(e,n,o),Jr(t,e),e}function tn(t){var e="",o="",n=0,i=0;t instanceof Error?(e=t.message,o=t.sourceURL||t.fileName||"",n=t.line||t.lineNumber||0,i=t.column||t.columnNumber||0):e="Uncaught "+String(t);var s=void 0;ErrorEvent.prototype.initErrorEvent===void 0?s=new ErrorEvent("error",{cancelable:!0,message:e,filename:o,lineno:n,colno:i,error:t}):(s=document.createEvent("ErrorEvent"),s.initErrorEvent("error",!1,!0,e,o,n),s.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),s.error===void 0&&Object.defineProperty(s,"error",{configurable:!0,enumerable:!0,get:function(){return t}}),window.dispatchEvent(s),s.defaultPrevented||console.error(t)}function bl(){var t=this;this.I=void 0,this.Ka=new Promise(function(e){t.g=e})}bl.prototype.resolve=function(t){if(this.I)throw Error("Already resolved.");this.I=t,this.g(t)};function vl(t){var e=document;this.X=void 0,this.S=t,this.g=e,Qe(this.S,this.g),this.g.readyState==="loading"&&(this.X=new MutationObserver(this.h.bind(this)),this.X.observe(this.g,{childList:!0,subtree:!0}))}function yl(t){t.X&&t.X.disconnect()}vl.prototype.h=function(t){var e=this.g.readyState;for(e!=="interactive"&&e!=="complete"||yl(this),e=0;e<t.length;e++)for(var o=t[e].addedNodes,n=0;n<o.length;n++)Qe(this.S,o[n])};function ee(t){this.ma=new Map,this.na=new Map,this.Fa=new Map,this.wa=!1,this.za=new Map,this.la=function(e){return e()},this.V=!1,this.oa=[],this.S=t,this.Ga=t.sb?new vl(t):void 0}y=ee.prototype,y.jb=function(t,e){var o=this;if(!(e instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");xl(this,t),this.ma.set(t,e),this.oa.push(t),this.V||(this.V=!0,this.la(function(){return _l(o)}))},y.define=function(t,e){var o=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");xl(this,t),wl(this,t,e),this.oa.push(t),this.V||(this.V=!0,this.la(function(){return _l(o)}))};function xl(t,e){if(!hl(e))throw new SyntaxError("The element name '"+e+"' is not valid.");if(va(t,e))throw Error("A custom element with name '"+(e+"' has already been defined."));if(t.wa)throw Error("A custom element is already being defined.")}function wl(t,e,o){t.wa=!0;var n;try{var i=o.prototype;if(!(i instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var s=function(w){var D=i[w];if(D!==void 0&&!(D instanceof Function))throw Error("The '"+w+"' callback must be a function.");return D},d=s("connectedCallback"),p=s("disconnectedCallback"),f=s("adoptedCallback"),g=(n=s("attributeChangedCallback"))&&o.observedAttributes||[]}catch(w){throw w}finally{t.wa=!1}return o={localName:e,constructorFunction:o,connectedCallback:d,disconnectedCallback:p,adoptedCallback:f,attributeChangedCallback:n,observedAttributes:g,constructionStack:[]},t.na.set(e,o),t.Fa.set(o.constructorFunction,o),o}y.upgrade=function(t){Qe(this.S,t)};function _l(t){if(t.V!==!1){t.V=!1;for(var e=[],o=t.oa,n=new Map,i=0;i<o.length;i++)n.set(o[i],[]);for(Qe(t.S,document,{upgrade:function(f){if(f.__CE_state===void 0){var g=f.localName,w=n.get(g);w?w.push(f):t.na.has(g)&&e.push(f)}}}),i=0;i<e.length;i++)ba(t.S,e[i]);for(i=0;i<o.length;i++){for(var s=o[i],d=n.get(s),p=0;p<d.length;p++)ba(t.S,d[p]);(s=t.za.get(s))&&s.resolve(void 0)}o.length=0}}y.get=function(t){if(t=va(this,t))return t.constructorFunction},y.whenDefined=function(t){if(!hl(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var e=this.za.get(t);if(e)return e.Ka;e=new bl,this.za.set(t,e);var o=this.na.has(t)||this.ma.has(t);return t=this.oa.indexOf(t)===-1,o&&t&&e.resolve(void 0),e.Ka},y.polyfillWrapFlushCallback=function(t){this.Ga&&yl(this.Ga);var e=this.la;this.la=function(o){return t(function(){return e(o)})}};function va(t,e){var o=t.na.get(e);if(o)return o;if(o=t.ma.get(e)){t.ma.delete(e);try{return wl(t,e,o())}catch(n){tn(n)}}}ee.prototype.define=ee.prototype.define,ee.prototype.upgrade=ee.prototype.upgrade,ee.prototype.get=ee.prototype.get,ee.prototype.whenDefined=ee.prototype.whenDefined,ee.prototype.polyfillDefineLazy=ee.prototype.jb,ee.prototype.polyfillWrapFlushCallback=ee.prototype.polyfillWrapFlushCallback;function us(t,e,o){function n(i){return function(s){for(var d=[],p=0;p<arguments.length;++p)d[p]=arguments[p];p=[];for(var f=[],g=0;g<d.length;g++){var w=d[g];if(w instanceof Element&&Ct(w)&&f.push(w),w instanceof DocumentFragment)for(w=w.firstChild;w;w=w.nextSibling)p.push(w);else p.push(w)}for(i.apply(this,d),d=0;d<f.length;d++)me(t,f[d]);if(Ct(this))for(d=0;d<p.length;d++)f=p[d],f instanceof Element&&ze(t,f)}}o.prepend!==void 0&&(e.prepend=n(o.prepend)),o.append!==void 0&&(e.append=n(o.append))}function Bd(t){Document.prototype.createElement=function(e){return gl(t,this,e,null)},Document.prototype.importNode=function(e,o){return e=pa.call(this,e,!!o),this.__CE_registry?Qe(t,e):ps(t,e),e},Document.prototype.createElementNS=function(e,o){return gl(t,this,o,e)},us(t,Document.prototype,{prepend:ua,append:fa})}function Ud(t){function e(n){return function(i){for(var s=[],d=0;d<arguments.length;++d)s[d]=arguments[d];d=[];for(var p=[],f=0;f<s.length;f++){var g=s[f];if(g instanceof Element&&Ct(g)&&p.push(g),g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)d.push(g);else d.push(g)}for(n.apply(this,s),s=0;s<p.length;s++)me(t,p[s]);if(Ct(this))for(s=0;s<d.length;s++)p=d[s],p instanceof Element&&ze(t,p)}}var o=Element.prototype;ll!==void 0&&(o.before=e(ll)),dl!==void 0&&(o.after=e(dl)),cl!==void 0&&(o.replaceWith=function(n){for(var i=[],s=0;s<arguments.length;++s)i[s]=arguments[s];s=[];for(var d=[],p=0;p<i.length;p++){var f=i[p];if(f instanceof Element&&Ct(f)&&d.push(f),f instanceof DocumentFragment)for(f=f.firstChild;f;f=f.nextSibling)s.push(f);else s.push(f)}for(p=Ct(this),cl.apply(this,i),i=0;i<d.length;i++)me(t,d[i]);if(p)for(me(t,this),i=0;i<s.length;i++)d=s[i],d instanceof Element&&ze(t,d)}),ml!==void 0&&(o.remove=function(){var n=Ct(this);ml.call(this),n&&me(t,this)})}function Wd(t){function e(i,s){Object.defineProperty(i,"innerHTML",{enumerable:s.enumerable,configurable:!0,get:s.get,set:function(d){var p=this,f=void 0;if(Ct(this)&&(f=[],gi(t,this,function(D){D!==p&&f.push(D)})),s.set.call(this,d),f)for(var g=0;g<f.length;g++){var w=f[g];w.__CE_state===1&&t.disconnectedCallback(w)}return this.ownerDocument.__CE_registry?Qe(t,this):ps(t,this),d}})}function o(i,s){i.insertAdjacentElement=function(d,p){var f=Ct(p);return d=s.call(this,d,p),f&&me(t,p),Ct(d)&&ze(t,p),d}}function n(i,s){function d(p,f){for(var g=[];p!==f;p=p.nextSibling)g.push(p);for(f=0;f<g.length;f++)Qe(t,g[f])}i.insertAdjacentHTML=function(p,f){if(p=p.toLowerCase(),p==="beforebegin"){var g=this.previousSibling;s.call(this,p,f),d(g||this.parentNode.firstChild,this)}else if(p==="afterbegin")g=this.firstChild,s.call(this,p,f),d(this.firstChild,g);else if(p==="beforeend")g=this.lastChild,s.call(this,p,f),d(g||this.firstChild,null);else if(p==="afterend")g=this.nextSibling,s.call(this,p,f),d(this.nextSibling,g);else throw new SyntaxError("The value provided ("+String(p)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.")}}el&&(Element.prototype.attachShadow=function(i){if(i=el.call(this,i),t.W&&!i.__CE_patched){i.__CE_patched=!0;for(var s=0;s<t.ca.length;s++)t.ca[s](i)}return this.__CE_shadowRoot=i}),as&&as.get?e(Element.prototype,as):ls&&ls.get?e(HTMLElement.prototype,ls):Fd(t,function(i){e(i,{enumerable:!0,configurable:!0,get:function(){return Zr.call(this,!0).innerHTML},set:function(s){var d=this.localName==="template",p=d?this.content:this,f=Qr.call(document,this.namespaceURI,this.localName);for(f.innerHTML=s;0<p.childNodes.length;)ns.call(p,p.childNodes[0]);for(s=d?f.content:f;0<s.childNodes.length;)or.call(p,s.childNodes[0])}})}),Element.prototype.setAttribute=function(i,s){if(this.__CE_state!==1)return ol.call(this,i,s);var d=ss.call(this,i);ol.call(this,i,s),s=ss.call(this,i),t.attributeChangedCallback(this,i,d,s,null)},Element.prototype.setAttributeNS=function(i,s,d){if(this.__CE_state!==1)return nl.call(this,i,s,d);var p=ha.call(this,i,s);nl.call(this,i,s,d),d=ha.call(this,i,s),t.attributeChangedCallback(this,s,p,d,i)},Element.prototype.removeAttribute=function(i){if(this.__CE_state!==1)return rl.call(this,i);var s=ss.call(this,i);rl.call(this,i),s!==null&&t.attributeChangedCallback(this,i,s,null,null)},Element.prototype.removeAttributeNS=function(i,s){if(this.__CE_state!==1)return il.call(this,i,s);var d=ha.call(this,i,s);il.call(this,i,s);var p=ha.call(this,i,s);d!==p&&t.attributeChangedCallback(this,s,d,p,i)},pl?o(HTMLElement.prototype,pl):al&&o(Element.prototype,al),ul?n(HTMLElement.prototype,ul):sl&&n(Element.prototype,sl),us(t,Element.prototype,{prepend:$d,append:zd}),Ud(t)}var kl={};function Vd(t){function e(){var o=this.constructor,n=document.__CE_registry.Fa.get(o);if(!n)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var i=n.constructionStack;if(i.length===0)return i=er.call(document,n.localName),Object.setPrototypeOf(i,o.prototype),i.__CE_state=1,i.__CE_definition=n,Jr(t,i),i;var s=i.length-1,d=i[s];if(d===kl)throw Error("Failed to construct '"+n.localName+"': This element was already constructed.");return i[s]=kl,Object.setPrototypeOf(d,o.prototype),Jr(t,d),d}e.prototype=Id.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:e}),window.HTMLElement=e}function qd(t){function e(o,n){Object.defineProperty(o,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(i){if(this.nodeType===Node.TEXT_NODE)n.set.call(this,i);else{var s=void 0;if(this.firstChild){var d=this.childNodes,p=d.length;if(0<p&&Ct(this)){s=Array(p);for(var f=0;f<p;f++)s[f]=d[f]}}if(n.set.call(this,i),s)for(i=0;i<s.length;i++)me(t,s[i])}}})}Node.prototype.insertBefore=function(o,n){if(o instanceof DocumentFragment){var i=ds(o);if(o=Js.call(this,o,n),Ct(this))for(n=0;n<i.length;n++)ze(t,i[n]);return o}return i=o instanceof Element&&Ct(o),n=Js.call(this,o,n),i&&me(t,o),Ct(this)&&ze(t,o),n},Node.prototype.appendChild=function(o){if(o instanceof DocumentFragment){var n=ds(o);if(o=or.call(this,o),Ct(this))for(var i=0;i<n.length;i++)ze(t,n[i]);return o}return n=o instanceof Element&&Ct(o),i=or.call(this,o),n&&me(t,o),Ct(this)&&ze(t,o),i},Node.prototype.cloneNode=function(o){return o=Zr.call(this,!!o),this.ownerDocument.__CE_registry?Qe(t,o):ps(t,o),o},Node.prototype.removeChild=function(o){var n=o instanceof Element&&Ct(o),i=ns.call(this,o);return n&&me(t,o),i},Node.prototype.replaceChild=function(o,n){if(o instanceof DocumentFragment){var i=ds(o);if(o=tl.call(this,o,n),Ct(this))for(me(t,n),n=0;n<i.length;n++)ze(t,i[n]);return o}i=o instanceof Element&&Ct(o);var s=tl.call(this,o,n),d=Ct(this);return d&&me(t,n),i&&me(t,o),d&&ze(t,o),s},is&&is.get?e(Node.prototype,is):Hd(t,function(o){e(o,{enumerable:!0,configurable:!0,get:function(){for(var n=[],i=this.firstChild;i;i=i.nextSibling)i.nodeType!==Node.COMMENT_NODE&&n.push(i.textContent);return n.join("")},set:function(n){for(;this.firstChild;)ns.call(this,this.firstChild);n!=null&&n!==""&&or.call(this,document.createTextNode(n))}})})}var Ie=window.customElements;function El(){var t=new ga;Vd(t),Bd(t),us(t,DocumentFragment.prototype,{prepend:os,append:rs}),qd(t),Wd(t),window.CustomElementRegistry=ee,t=new ee(t),document.__CE_registry=t,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:t})}Ie&&!Ie.forcePolyfill&&typeof Ie.define=="function"&&typeof Ie.get=="function"||El(),window.__CE_installPolyfill=El;function fs(){this.end=this.start=0,this.rules=this.parent=this.previous=null,this.cssText=this.parsedCssText="",this.atRule=!1,this.type=0,this.parsedSelector=this.selector=this.keyframesName=""}function hs(t){var e=t=t.replace(Gd,"").replace(Yd,""),o=new fs;o.start=0,o.end=e.length;for(var n=o,i=0,s=e.length;i<s;i++)if(e[i]==="{"){n.rules||(n.rules=[]);var d=n,p=d.rules[d.rules.length-1]||null;n=new fs,n.start=i+1,n.parent=d,n.previous=p,d.rules.push(n)}else e[i]==="}"&&(n.end=i+1,n=n.parent||o);return Cl(o,t)}function Cl(t,e){var o=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=o.trim(),t.parent&&(o=e.substring(t.previous?t.previous.end:t.parent.start,t.start-1),o=Xd(o),o=o.replace(jl," "),o=o.substring(o.lastIndexOf(";")+1),o=t.parsedSelector=t.selector=o.trim(),t.atRule=o.indexOf("@")===0,t.atRule?o.indexOf("@media")===0?t.type=Tl:o.match(Zd)&&(t.type=gs,t.keyframesName=t.selector.split(jl).pop()):t.type=o.indexOf("--")===0?Al:Sl),o=t.rules)for(var n=0,i=o.length,s=void 0;n<i&&(s=o[n]);n++)Cl(s,e);return t}function Xd(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(e,o){for(e=o,o=6-e.length;o--;)e="0"+e;return"\\"+e})}function Nl(t,e,o){o=o===void 0?"":o;var n="";if(t.cssText||t.rules){var i=t.rules,s;if((s=i)&&(s=i[0],s=!(s&&s.selector&&s.selector.indexOf("--")===0)),s){s=0;for(var d=i.length,p=void 0;s<d&&(p=i[s]);s++)n=Nl(p,e,n)}else e?e=t.cssText:(e=t.cssText,e=e.replace(Ol,"").replace(Dl,""),e=e.replace(Kd,"").replace(Qd,"")),(n=e.trim())&&(n="  "+n+`
`)}return n&&(t.selector&&(o+=t.selector+` {
`),o+=n,t.selector&&(o+=`}

`)),o}var Sl=1,gs=7,Tl=4,Al=1e3,Gd=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,Yd=/@import[^;]*;/gim,Ol=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Dl=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Kd=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Qd=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,Zd=/^@[^\s]*keyframes/,jl=/\s+/g,Lt=!(window.ShadyDOM&&window.ShadyDOM.inUse),bs;function Pl(t){bs=t&&t.shimcssproperties?!1:Lt||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}var ya;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(ya=window.ShadyCSS.cssBuild);var en=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?bs=window.ShadyCSS.nativeCss:window.ShadyCSS?(Pl(window.ShadyCSS),window.ShadyCSS=void 0):Pl(window.WebComponents&&window.WebComponents.flags);var ie=bs,xa=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,wa=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Jd=/(--[\w-]+)\s*([:,;)]|$)/gi,tc=/(animation\s*:)|(animation-name\s*:)/,ec=/@media\s(.*)/,oc=/\{[^}]*\}/g,Ml=new Set;function on(t,e){return t?(typeof t=="string"&&(t=hs(t)),e&&rn(t,e),Nl(t,ie)):""}function bi(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=hs(t.textContent)),t.__cssRules||null}function Ll(t){return!!t.parent&&t.parent.type===gs}function rn(t,e,o,n){if(t){var i=!1,s=t.type;if(n&&s===Tl){var d=t.selector.match(ec);d&&(window.matchMedia(d[1]).matches||(i=!0))}if(s===Sl?e(t):o&&s===gs?o(t):s===Al&&(i=!0),(t=t.rules)&&!i)for(i=0,s=t.length,d=void 0;i<s&&(d=t[i]);i++)rn(d,e,o,n)}}function vs(t,e,o,n){var i=document.createElement("style");return e&&i.setAttribute("scope",e),i.textContent=t,zl(i,o,n),i}var rr=null;function $l(t){t=document.createComment(" Shady DOM styles for "+t+" ");var e=document.head;return e.insertBefore(t,(rr?rr.nextSibling:null)||e.firstChild),rr=t}function zl(t,e,o){e=e||document.head,e.insertBefore(t,o&&o.nextSibling||e.firstChild),rr?t.compareDocumentPosition(rr)===Node.DOCUMENT_POSITION_PRECEDING&&(rr=t):rr=t}function ys(t,e){for(var o=0,n=t.length;e<n;e++)if(t[e]==="(")o++;else if(t[e]===")"&&--o===0)return e;return-1}function Il(t,e){var o=t.indexOf("var(");if(o===-1)return e(t,"","","");var n=ys(t,o+3),i=t.substring(o+4,n);return o=t.substring(0,o),t=Il(t.substring(n+1),e),n=i.indexOf(","),n===-1?e(o,i.trim(),"",t):e(o,i.substring(0,n).trim(),i.substring(n+1).trim(),t)}function _a(t,e){Lt?t.setAttribute("class",e):window.ShadyDOM.nativeMethods.setAttribute.call(t,"class",e)}var vi=window.ShadyDOM&&window.ShadyDOM.wrap||function(t){return t};function nr(t){var e=t.localName,o="";return e?-1<e.indexOf("-")||(o=e,e=t.getAttribute&&t.getAttribute("is")||""):(e=t.is,o=t.extends),{is:e,ja:o}}function Rl(t){for(var e=[],o="",n=0;0<=n&&n<t.length;n++)if(t[n]==="("){var i=ys(t,n);o+=t.slice(n,i+1),n=i}else t[n]===","?(e.push(o),o=""):o+=t[n];return o&&e.push(o),e}function nn(t){if(ya!==void 0)return ya;if(t.__cssBuild===void 0){var e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{t:{if(e=t.localName==="template"?t.content.firstChild:t.firstChild,e instanceof Comment&&(e=e.textContent.trim().split(":"),e[0]==="css-build")){e=e[1];break t}e=""}if(e!==""){var o=t.localName==="template"?t.content.firstChild:t.firstChild;o.parentNode.removeChild(o)}t.__cssBuild=e}}return t.__cssBuild||""}function xs(t){return t=t===void 0?"":t,t!==""&&ie?Lt?t==="shadow":t==="shady":!1}function ka(){}function rc(t,e){Ea(_e,t,function(o){ir(o,e||"")})}function Ea(t,e,o){e.nodeType===Node.ELEMENT_NODE&&o(e);var n;if(e.localName==="template"?n=(e.content||e._content||e).childNodes:n=e.children||e.childNodes,n)for(e=0;e<n.length;e++)Ea(t,n[e],o)}function ir(t,e,o){if(e){if(t.classList)o?(t.classList.remove("style-scope"),t.classList.remove(e)):(t.classList.add("style-scope"),t.classList.add(e));else if(t.getAttribute){var n=t.getAttribute("class");o?n&&(e=n.replace("style-scope","").replace(e,""),_a(t,e)):_a(t,(n?n+" ":"")+"style-scope "+e)}}}function nc(t,e,o){Ea(_e,t,function(n){ir(n,e,!0),ir(n,o)})}function ic(t,e){Ea(_e,t,function(o){ir(o,e||"",!0)})}function Ca(t,e,o,n,i){var s=_e;return i=i===void 0?"":i,i===""&&(Lt||(n===void 0?"":n)==="shady"?i=on(e,o):(t=nr(t),i=ac(s,e,t.is,t.ja,o)+`

`)),i.trim()}function ac(t,e,o,n,i){var s=ws(o,n);return o=o?"."+o:"",on(e,function(d){d.i||(d.selector=d.G=_s(t,d,t.h,o,s),d.i=!0),i&&i(d,o,s)})}function ws(t,e){return e?"[is="+t+"]":t}function _s(t,e,o,n,i){var s=Rl(e.selector);if(!Ll(e)){e=0;for(var d=s.length,p=void 0;e<d&&(p=s[e]);e++)s[e]=o.call(t,p,n,i)}return s.filter(function(f){return!!f}).join(",")}function Hl(t){return t.replace(ks,function(e,o,n){return-1<n.indexOf("+")?n=n.replace(/\+/g,"___"):-1<n.indexOf("___")&&(n=n.replace(/___/g,"+")),":"+o+"("+n+")"})}function sc(t){for(var e=[],o;o=t.match(Vl);){var n=o.index,i=ys(t,n);if(i===-1)throw Error(o.input+" selector missing ')'");o=t.slice(n,i+1),t=t.replace(o,"\uE000"),e.push(o)}return{Ea:t,matches:e}}function lc(t,e){var o=t.split("\uE000");return e.reduce(function(n,i,s){return n+i+o[s+1]},o[0])}ka.prototype.h=function(t,e,o){var n=!1;t=t.trim();var i=ks.test(t);i&&(t=t.replace(ks,function(p,f,g){return":"+f+"("+g.replace(/\s/g,"")+")"}),t=Hl(t));var s=Vl.test(t);if(s){var d=sc(t);t=d.Ea,d=d.matches}return t=t.replace(pc,":host $1"),t=t.replace(mc,function(p,f,g){return n||(p=dc(g,f,e,o),n=n||p.stop,f=p.Ya,g=p.value),f+g}),s&&(t=lc(t,d)),i&&(t=Hl(t)),t=t.replace(fc,function(p,f,g,w){return'[dir="'+g+'"] '+f+w+", "+f+'[dir="'+g+'"]'+w})};function dc(t,e,o,n){var i=t.indexOf("::slotted");if(0<=t.indexOf(":host")?t=cc(t,n):i!==0&&(t=o?Fl(t,o):t),o=!1,0<=i&&(e="",o=!0),o){var s=!0;o&&(t=t.replace(uc,function(d,p){return" > "+p}))}return{value:t,Ya:e,stop:s}}function Fl(t,e){t=t.split(/(\[.+?\])/);for(var o=[],n=0;n<t.length;n++)if(n%2===1)o.push(t[n]);else{var i=t[n];(i!==""||n!==t.length-1)&&(i=i.split(":"),i[0]+=e,o.push(i.join(":")))}return o.join("")}function cc(t,e){var o=t.match(Wl);return(o=o&&o[2].trim()||"")?o[0].match(Ul)?t.replace(Wl,function(n,i,s){return e+s}):o.split(Ul)[0]===e?o:"should_not_match":t.replace(":host",e)}function Bl(t){t.selector===":root"&&(t.selector="html")}ka.prototype.i=function(t){return t.match(":host")?"":t.match("::slotted")?this.h(t,":not(.style-scope)"):Fl(t.trim(),":not(.style-scope)")},_.Object.defineProperties(ka.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});var ks=/:(nth[-\w]+)\(([^)]+)\)/,mc=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Ul=/[[.:#*]/,pc=/^(::slotted)/,Wl=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,uc=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,fc=/(.*):dir\((?:(ltr|rtl))\)(.*)/,Vl=/:(?:matches|any|-(?:webkit|moz)-any)/,_e=new ka;function an(t,e,o,n,i){this.M=t||null,this.h=e||null,this.Ca=o||[],this.K=null,this.cssBuild=i||"",this.ja=n||"",this.g=this.L=this.R=null}function ke(t){return t?t.__styleInfo:null}function Es(t,e){return t.__styleInfo=e}an.prototype.i=function(){return this.M},an.prototype._getStyleRules=an.prototype.i;function ql(t){var e=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return e&&e.call(this,t)}var hc=/:host\s*>\s*/,gc=navigator.userAgent.match("Trident");function Xl(){}function bc(t){var e={},o=[],n=0;rn(t,function(s){Na(s),s.index=n++,s=s.F.cssText;for(var d;d=Jd.exec(s);){var p=d[1];d[2]!==":"&&(e[p]=!0)}},function(s){o.push(s)}),t.h=o,t=[];for(var i in e)t.push(i);return t}function Na(t){if(!t.F){var e={},o={};Sa(t,o)&&(e.P=o,t.rules=null),e.cssText=t.parsedCssText.replace(oc,"").replace(xa,""),t.F=e}}function Sa(t,e){var o=t.F;if(o){if(o.P)return Object.assign(e,o.P),!0}else{o=t.parsedCssText;for(var n;t=xa.exec(o);)n=(t[2]||t[3]).trim(),(n!=="inherit"||n!=="unset")&&(e[t[1].trim()]=n),n=!0;return n}}function yi(t,e,o){return e&&(e=0<=e.indexOf(";")?Cs(t,e,o):Il(e,function(n,i,s,d){return i?((i=yi(t,o[i],o))&&i!=="initial"?i==="apply-shim-inherit"&&(i="inherit"):i=yi(t,o[s]||s,o)||s,n+(i||"")+d):n+d})),e&&e.trim()||""}function Cs(t,e,o){e=e.split(";");for(var n=0,i,s;n<e.length;n++)if(i=e[n]){if(wa.lastIndex=0,s=wa.exec(i))i=yi(t,o[s[1]],o);else if(s=i.indexOf(":"),s!==-1){var d=i.substring(s);d=d.trim(),d=yi(t,d,o)||d,i=i.substring(0,s)+d}e[n]=i&&i.lastIndexOf(";")===i.length-1?i.slice(0,-1):i||""}return e.join(";")}function vc(t,e){var o={},n=[];return rn(t,function(i){i.F||Na(i);var s=i.G||i.parsedSelector;e&&i.F.P&&s&&ql.call(e,s)&&(Sa(i,o),i=i.index,s=parseInt(i/32,10),n[s]=(n[s]||0)|1<<i%32)},null,!0),{P:o,key:n}}function yc(t,e,o,n){if(e.F||Na(e),e.F.P){var i=nr(t);t=i.is,i=i.ja,i=t?ws(t,i):"html";var s=e.parsedSelector,d=!!s.match(hc)||i==="html"&&-1<s.indexOf("html"),p=s.indexOf(":host")===0&&!d;o==="shady"&&(d=s===i+" > *."+i||s.indexOf("html")!==-1,p=!d&&s.indexOf(i)===0),(d||p)&&(o=i,p&&(e.G||(e.G=_s(_e,e,_e.h,t?"."+t:"",i)),o=e.G||i),d&&i==="html"&&(o=e.G||e.O),n({Ea:o,gb:p,vb:d}))}}function xc(t,e,o){var n={},i={};return rn(e,function(s){yc(t,s,o,function(d){ql.call(t._element||t,d.Ea)&&(d.gb?Sa(s,n):Sa(s,i))})},null,!0),{mb:i,eb:n}}function wc(t,e,o,n){var i=nr(e),s=ws(i.is,i.ja),d=new RegExp("(?:^|[^.#[:])"+(e.extends?"\\"+s.slice(0,-1)+"\\]":s)+"($|[.:[\\s>+~])"),p=ke(e);i=p.M,p=p.cssBuild;var f=_c(i,n);return Ca(e,i,function(g){var w="";if(g.F||Na(g),g.F.cssText&&(w=Cs(t,g.F.cssText,o)),g.cssText=w,!Lt&&!Ll(g)&&g.cssText){var D=w=g.cssText;if(g.Ma==null&&(g.Ma=tc.test(w)),g.Ma)if(g.ra==null){g.ra=[];for(var ht in f)D=f[ht],D=D(w),w!==D&&(w=D,g.ra.push(ht))}else{for(ht=0;ht<g.ra.length;++ht)D=f[g.ra[ht]],w=D(w);D=w}g.cssText=D,g.G=g.G||g.selector,w="."+n,ht=Rl(g.G),D=0;for(var rt=ht.length,M=void 0;D<rt&&(M=ht[D]);D++)ht[D]=M.match(d)?M.replace(s,w):w+" "+M;g.selector=ht.join(",")}},p)}function _c(t,e){t=t.h;var o={};if(!Lt&&t)for(var n=0,i=t[n];n<t.length;i=t[++n]){var s=i,d=e;s.u=new RegExp("\\b"+s.keyframesName+"(?!\\B|-)","g"),s.g=s.keyframesName+"-"+d,s.G=s.G||s.selector,s.selector=s.G.replace(s.keyframesName,s.g),o[i.keyframesName]=kc(i)}return o}function kc(t){return function(e){return e.replace(t.u,t.g)}}function Ec(t,e){var o=Ta,n=bi(t);t.textContent=on(n,function(i){var s=i.cssText=i.parsedCssText;i.F&&i.F.cssText&&(s=s.replace(Ol,"").replace(Dl,""),i.cssText=Cs(o,s,e))})}_.Object.defineProperties(Xl.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var Ta=new Xl,sn={},Aa=window.customElements;if(Aa&&!Lt&&!en){var Cc=Aa.define;Aa.define=function(t,e,o){sn[t]||(sn[t]=$l(t)),Cc.call(Aa,t,e,o)}}function Gl(){this.cache={}}Gl.prototype.store=function(t,e,o,n){var i=this.cache[t]||[];i.push({P:e,styleElement:o,L:n}),100<i.length&&i.shift(),this.cache[t]=i};function Yl(){}var Nc=new RegExp(_e.g+"\\s*([^\\s]*)");function Kl(t){return(t=(t.classList&&t.classList.value?t.classList.value:t.getAttribute("class")||"").match(Nc))?t[1]:""}function Ns(t){var e=vi(t).getRootNode();return e===t||e===t.ownerDocument?"":(t=e.host)?nr(t).is:""}function Ql(t){for(var e=0;e<t.length;e++){var o=t[e];if(o.target!==document.documentElement&&o.target!==document.head)for(var n=0;n<o.addedNodes.length;n++){var i=o.addedNodes[n];if(i.nodeType===Node.ELEMENT_NODE){var s=i.getRootNode(),d=Kl(i);if(d&&s===i.ownerDocument&&(i.localName!=="style"&&i.localName!=="template"||nn(i)===""))ic(i,d);else if(s instanceof ShadowRoot)for(s=Ns(i),s!==d&&nc(i,d,s),i=window.ShadyDOM.nativeMethods.querySelectorAll.call(i,":not(."+_e.g+")"),d=0;d<i.length;d++){s=i[d];var p=Ns(s);p&&ir(s,p)}}}}}if(!(Lt||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var Zl=new MutationObserver(Ql),Jl=function(t){Zl.observe(t,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Jl(document);else{var Ss=function(){Jl(document.body)};window.HTMLImports?window.HTMLImports.whenReady(Ss):requestAnimationFrame(function(){if(document.readyState==="loading"){var t=function(){Ss(),document.removeEventListener("readystatechange",t)};document.addEventListener("readystatechange",t)}else Ss()})}Yl=function(){Ql(Zl.takeRecords())}}var Oa={},Sc=Promise.resolve();function Tc(t){(t=Oa[t])&&(t._applyShimCurrentVersion=t._applyShimCurrentVersion||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t._applyShimNextVersion=(t._applyShimNextVersion||0)+1)}function td(t){return t._applyShimCurrentVersion===t._applyShimNextVersion}function Ac(t){t._applyShimValidatingVersion=t._applyShimNextVersion,t._validating||(t._validating=!0,Sc.then(function(){t._applyShimCurrentVersion=t._applyShimNextVersion,t._validating=!1}))}var ed={},od=new Gl;function ot(){this.ea={},this.i=document.documentElement;var t=new fs;t.rules=[],this.u=Es(this.i,new an(t)),this.O=!1,this.g=this.h=null}y=ot.prototype,y.flush=function(){Yl()},y.bb=function(t){return bi(t)},y.qb=function(t){return on(t)},y.prepareTemplate=function(t,e,o){this.prepareTemplateDom(t,e),this.prepareTemplateStyles(t,e,o)},y.prepareTemplateStyles=function(t,e,o){if(!t._prepared&&!en){Lt||sn[e]||(sn[e]=$l(e)),t._prepared=!0,t.name=e,t.extends=o,Oa[e]=t;var n=nn(t),i=xs(n);o={is:e,extends:o};for(var s=[],d=t.content.querySelectorAll("style"),p=0;p<d.length;p++){var f=d[p];if(f.hasAttribute("shady-unscoped")){if(!Lt){var g=f.textContent;if(!Ml.has(g)){Ml.add(g);var w=document.createElement("style");w.setAttribute("shady-unscoped",""),w.textContent=g,document.head.appendChild(w)}f.parentNode.removeChild(f)}}else s.push(f.textContent),f.parentNode.removeChild(f)}s=s.join("").trim()+(ed[e]||""),xi(this),i||((d=!n)&&(d=wa.test(s)||xa.test(s),wa.lastIndex=0,xa.lastIndex=0),p=hs(s),d&&ie&&this.h&&this.h.transformRules(p,e),t._styleAst=p),d=[],ie||(d=bc(t._styleAst)),(!d.length||ie)&&(p=Lt?t.content:null,e=sn[e]||null,n=Ca(o,t._styleAst,null,n,i?s:""),n=n.length?vs(n,o.is,p,e):null,t._style=n),t.g=d}},y.kb=function(t,e){ed[e]=t.join(" ")},y.prepareTemplateDom=function(t,e){if(!en){var o=nn(t);Lt||o==="shady"||t._domPrepared||(t._domPrepared=!0,rc(t.content,e))}};function rd(t){var e=nr(t),o=e.is;e=e.ja;var n=sn[o]||null,i=Oa[o];if(i){o=i._styleAst;var s=i.g;return i=nn(i),e=new an(o,n,s,e,i),Es(t,e),e}}function Oc(t){!t.g&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(t.g=window.ShadyCSS.CustomStyleInterface,t.g.transformCallback=function(e){t.Qa(e)},t.g.validateCallback=function(){requestAnimationFrame(function(){(t.g.enqueued||t.O)&&t.flushCustomStyles()})})}function xi(t){if(!t.h&&window.ShadyCSS&&window.ShadyCSS.ApplyShim){t.h=window.ShadyCSS.ApplyShim,t.h.invalidCallback=Tc;var e=!0}else e=!1;return Oc(t),e}y.flushCustomStyles=function(){if(!en){var t=xi(this);if(this.g){var e=this.g.processStyles();if((t||this.g.enqueued)&&!xs(this.u.cssBuild)){if(ie){if(!this.u.cssBuild)for(t=0;t<e.length;t++){var o=this.g.getStyleForCustomStyle(e[t]);if(o&&ie&&this.h){var n=bi(o);xi(this),this.h.transformRules(n),o.textContent=on(n)}}}else{for(Dc(this,e),As(this,this.i,this.u),t=0;t<e.length;t++)(o=this.g.getStyleForCustomStyle(e[t]))&&Ec(o,this.u.R);this.O&&this.styleDocument()}this.g.enqueued=!1}}}};function Dc(t,e){e=e.map(function(o){return t.g.getStyleForCustomStyle(o)}).filter(function(o){return!!o}),e.sort(function(o,n){return o=n.compareDocumentPosition(o),o&Node.DOCUMENT_POSITION_FOLLOWING?1:o&Node.DOCUMENT_POSITION_PRECEDING?-1:0}),t.u.M.rules=e.map(function(o){return bi(o)})}y.styleElement=function(t,e){if(en){if(e){ke(t)||Es(t,new an(null));var o=ke(t);o.K=o.K||{},Object.assign(o.K,e),nd(this,t,o)}}else if(o=ke(t)||rd(t)){if(t!==this.i&&(this.O=!0),e&&(o.K=o.K||{},Object.assign(o.K,e)),ie)nd(this,t,o);else if(this.flush(),As(this,t,o),o.Ca&&o.Ca.length){e=nr(t).is;var n;t:{if(n=od.cache[e])for(var i=n.length-1;0<=i;i--){var s=n[i];e:{for(var d=o.Ca,p=0;p<d.length;p++){var f=d[p];if(s.P[f]!==o.R[f]){d=!1;break e}}d=!0}if(d){n=s;break t}}n=void 0}d=n?n.styleElement:null,i=o.L,(s=n&&n.L)||(s=this.ea[e]=(this.ea[e]||0)+1,s=e+"-"+s),o.L=s,s=o.L,p=Ta,p=d?d.textContent||"":wc(p,t,o.R,s),f=ke(t);var g=f.g;g&&!Lt&&g!==d&&(g._useCount--,0>=g._useCount&&g.parentNode&&g.parentNode.removeChild(g)),Lt?f.g?(f.g.textContent=p,d=f.g):p&&(d=vs(p,s,t.shadowRoot,f.h)):d?d.parentNode||(gc&&-1<p.indexOf("@media")&&(d.textContent=p),zl(d,null,f.h)):p&&(d=vs(p,s,null,f.h)),d&&(d._useCount=d._useCount||0,f.g!=d&&d._useCount++,f.g=d),s=d,Lt||(d=o.L,f=p=t.getAttribute("class")||"",i&&(f=p.replace(new RegExp("\\s*x-scope\\s*"+i+"\\s*","g")," ")),f+=(f?" ":"")+"x-scope "+d,p!==f&&_a(t,f)),n||od.store(e,o.R,s,o.L)}}};function nd(t,e,o){var n=nr(e).is;if(o.K){var i=o.K,s;for(s in i)s===null?e.style.removeProperty(s):e.style.setProperty(s,i[s])}i=Oa[n],!(!i&&e!==t.i||i&&nn(i)!=="")&&i&&i._style&&!td(i)&&((td(i)||i._applyShimValidatingVersion!==i._applyShimNextVersion)&&(xi(t),t.h&&t.h.transformRules(i._styleAst,n),i._style.textContent=Ca(e,o.M),Ac(i)),Lt&&(t=e.shadowRoot)&&(t=t.querySelector("style"))&&(t.textContent=Ca(e,o.M)),o.M=i._styleAst)}function Ts(t,e){return(e=vi(e).getRootNode().host)?ke(e)||rd(e)?e:Ts(t,e):t.i}function As(t,e,o){var n=Ts(t,e),i=ke(n),s=i.R;n===t.i||s||(As(t,n,i),s=i.R),t=Object.create(s||null),n=xc(e,o.M,o.cssBuild),e=vc(i.M,e).P,Object.assign(t,n.eb,e,n.mb),e=o.K;for(var d in e)((i=e[d])||i===0)&&(t[d]=i);for(d=Ta,e=Object.getOwnPropertyNames(t),i=0;i<e.length;i++)n=e[i],t[n]=yi(d,t[n],t);o.R=t}y.styleDocument=function(t){this.styleSubtree(this.i,t)},y.styleSubtree=function(t,e){var o=vi(t),n=o.shadowRoot,i=t===this.i;if((n||i)&&this.styleElement(t,e),t=i?o:n)for(t=Array.from(t.querySelectorAll("*")).filter(function(s){return vi(s).shadowRoot}),e=0;e<t.length;e++)this.styleSubtree(t[e])},y.Qa=function(t){var e=this,o=nn(t);if(o!==this.u.cssBuild&&(this.u.cssBuild=o),!xs(o)){var n=bi(t);rn(n,function(i){if(Lt)Bl(i);else{var s=_e;i.selector=i.parsedSelector,Bl(i),i.selector=i.G=_s(s,i,s.i,void 0,void 0)}ie&&o===""&&(xi(e),e.h&&e.h.transformRule(i))}),ie?t.textContent=on(n):this.u.M.rules.push(n)}},y.getComputedStyleValue=function(t,e){var o;return ie||(o=(ke(t)||ke(Ts(this,t))).R[e]),(o=o||window.getComputedStyle(t).getPropertyValue(e))?o.trim():""},y.pb=function(t,e){var o=vi(t).getRootNode();if(e=e?(typeof e=="string"?e:String(e)).split(/\s/):[],o=o.host&&o.host.localName,!o){var n=t.getAttribute("class");if(n){n=n.split(/\s/);for(var i=0;i<n.length;i++)if(n[i]===_e.g){o=n[i+1];break}}}o&&e.push(_e.g,o),ie||(o=ke(t))&&o.L&&e.push(Ta.g,o.L),_a(t,e.join(" "))},y.Xa=function(t){return ke(t)},y.ob=function(t,e){ir(t,e)},y.rb=function(t,e){ir(t,e,!0)},y.nb=function(t){return Ns(t)},y.$a=function(t){return Kl(t)},ot.prototype.flush=ot.prototype.flush,ot.prototype.prepareTemplate=ot.prototype.prepareTemplate,ot.prototype.styleElement=ot.prototype.styleElement,ot.prototype.styleDocument=ot.prototype.styleDocument,ot.prototype.styleSubtree=ot.prototype.styleSubtree,ot.prototype.getComputedStyleValue=ot.prototype.getComputedStyleValue,ot.prototype.setElementClass=ot.prototype.pb,ot.prototype._styleInfoForNode=ot.prototype.Xa,ot.prototype.transformCustomStyleForDocument=ot.prototype.Qa,ot.prototype.getStyleAst=ot.prototype.bb,ot.prototype.styleAstToString=ot.prototype.qb,ot.prototype.flushCustomStyles=ot.prototype.flushCustomStyles,ot.prototype.scopeNode=ot.prototype.ob,ot.prototype.unscopeNode=ot.prototype.rb,ot.prototype.scopeForNode=ot.prototype.nb,ot.prototype.currentScopeForNode=ot.prototype.$a,ot.prototype.prepareAdoptedCssText=ot.prototype.kb,Object.defineProperties(ot.prototype,{nativeShadow:{get:function(){return Lt}},nativeCss:{get:function(){return ie}}});var ae=new ot,Os,Ds;window.ShadyCSS&&(Os=window.ShadyCSS.ApplyShim,Ds=window.ShadyCSS.CustomStyleInterface),window.ShadyCSS={ScopingShim:ae,prepareTemplate:function(t,e,o){ae.flushCustomStyles(),ae.prepareTemplate(t,e,o)},prepareTemplateDom:function(t,e){ae.prepareTemplateDom(t,e)},prepareTemplateStyles:function(t,e,o){ae.flushCustomStyles(),ae.prepareTemplateStyles(t,e,o)},styleSubtree:function(t,e){ae.flushCustomStyles(),ae.styleSubtree(t,e)},styleElement:function(t){ae.flushCustomStyles(),ae.styleElement(t)},styleDocument:function(t){ae.flushCustomStyles(),ae.styleDocument(t)},flushCustomStyles:function(){ae.flushCustomStyles()},getComputedStyleValue:function(t,e){return ae.getComputedStyleValue(t,e)},nativeCss:ie,nativeShadow:Lt,cssBuild:ya,disableRuntime:en},Os&&(window.ShadyCSS.ApplyShim=Os),Ds&&(window.ShadyCSS.CustomStyleInterface=Ds),function(t){function e(M){return M==""&&(s.call(this),this.m=!0),M.toLowerCase()}function o(M){var mt=M.charCodeAt(0);return 32<mt&&127>mt&&[34,35,60,62,63,96].indexOf(mt)==-1?M:encodeURIComponent(M)}function n(M){var mt=M.charCodeAt(0);return 32<mt&&127>mt&&[34,35,60,62,96].indexOf(mt)==-1?M:encodeURIComponent(M)}function i(M,mt,it){function jt(Ce){Eo.push(Ce)}var G=mt||"scheme start",se=0,R="",ko=!1,Ee=!1,Eo=[];t:for(;(M[se-1]!=null||se==0)&&!this.m;){var k=M[se];switch(G){case"scheme start":if(k&&D.test(k))R+=k.toLowerCase(),G="scheme";else if(mt){jt("Invalid scheme.");break t}else{R="",G="no scheme";continue}break;case"scheme":if(k&&ht.test(k))R+=k.toLowerCase();else if(k==":"){if(this.l=R,R="",mt)break t;g[this.l]!==void 0&&(this.H=!0),G=this.l=="file"?"relative":this.H&&it&&it.l==this.l?"relative or authority":this.H?"authority first slash":"scheme data"}else if(mt){k!=null&&jt("Code point not allowed in scheme: "+k);break t}else{R="",se=0,G="no scheme";continue}break;case"scheme data":k=="?"?(this.A="?",G="query"):k=="#"?(this.C="#",G="fragment"):k!=null&&k!="	"&&k!=`
`&&k!="\r"&&(this.ya+=o(k));break;case"no scheme":if(it&&g[it.l]!==void 0){G="relative";continue}else jt("Missing scheme."),s.call(this),this.m=!0;break;case"relative or authority":if(k=="/"&&M[se+1]=="/")G="authority ignore slashes";else{jt("Expected /, got: "+k),G="relative";continue}break;case"relative":if(this.H=!0,this.l!="file"&&(this.l=it.l),k==null){this.o=it.o,this.v=it.v,this.s=it.s.slice(),this.A=it.A,this.B=it.B,this.j=it.j;break t}else if(k=="/"||k=="\\")k=="\\"&&jt("\\ is an invalid code point."),G="relative slash";else if(k=="?")this.o=it.o,this.v=it.v,this.s=it.s.slice(),this.A="?",this.B=it.B,this.j=it.j,G="query";else if(k=="#")this.o=it.o,this.v=it.v,this.s=it.s.slice(),this.A=it.A,this.C="#",this.B=it.B,this.j=it.j,G="fragment";else{G=M[se+1];var yt=M[se+2];(this.l!="file"||!D.test(k)||G!=":"&&G!="|"||yt!=null&&yt!="/"&&yt!="\\"&&yt!="?"&&yt!="#")&&(this.o=it.o,this.v=it.v,this.B=it.B,this.j=it.j,this.s=it.s.slice(),this.s.pop()),G="relative path";continue}break;case"relative slash":if(k=="/"||k=="\\")k=="\\"&&jt("\\ is an invalid code point."),G=this.l=="file"?"file host":"authority ignore slashes";else{this.l!="file"&&(this.o=it.o,this.v=it.v,this.B=it.B,this.j=it.j),G="relative path";continue}break;case"authority first slash":if(k=="/")G="authority second slash";else{jt("Expected '/', got: "+k),G="authority ignore slashes";continue}break;case"authority second slash":if(G="authority ignore slashes",k!="/"){jt("Expected '/', got: "+k);continue}break;case"authority ignore slashes":if(k!="/"&&k!="\\"){G="authority";continue}else jt("Expected authority, got: "+k);break;case"authority":if(k=="@"){for(ko&&(jt("@ already seen."),R+="%40"),ko=!0,k=0;k<R.length;k++)yt=R[k],yt=="	"||yt==`
`||yt=="\r"?jt("Invalid whitespace in authority."):yt==":"&&this.j===null?this.j="":(yt=o(yt),this.j!==null?this.j+=yt:this.B+=yt);R=""}else if(k==null||k=="/"||k=="\\"||k=="?"||k=="#"){se-=R.length,R="",G="host";continue}else R+=k;break;case"file host":if(k==null||k=="/"||k=="\\"||k=="?"||k=="#"){R.length!=2||!D.test(R[0])||R[1]!=":"&&R[1]!="|"?(R.length!=0&&(this.o=e.call(this,R),R=""),G="relative path start"):G="relative path";continue}else k=="	"||k==`
`||k=="\r"?jt("Invalid whitespace in file host."):R+=k;break;case"host":case"hostname":if(k!=":"||Ee)if(k==null||k=="/"||k=="\\"||k=="?"||k=="#"){if(this.o=e.call(this,R),R="",G="relative path start",mt)break t;continue}else k!="	"&&k!=`
`&&k!="\r"?(k=="["?Ee=!0:k=="]"&&(Ee=!1),R+=k):jt("Invalid code point in host/hostname: "+k);else if(this.o=e.call(this,R),R="",G="port",mt=="hostname")break t;break;case"port":if(/[0-9]/.test(k))R+=k;else if(k==null||k=="/"||k=="\\"||k=="?"||k=="#"||mt){if(R!=""&&(R=parseInt(R,10),R!=g[this.l]&&(this.v=R+""),R=""),mt)break t;G="relative path start";continue}else k=="	"||k==`
`||k=="\r"?jt("Invalid code point in port: "+k):(s.call(this),this.m=!0);break;case"relative path start":if(k=="\\"&&jt("'\\' not allowed in path."),G="relative path",k!="/"&&k!="\\")continue;break;case"relative path":k!=null&&k!="/"&&k!="\\"&&(mt||k!="?"&&k!="#")?k!="	"&&k!=`
`&&k!="\r"&&(R+=o(k)):(k=="\\"&&jt("\\ not allowed in relative path."),(yt=w[R.toLowerCase()])&&(R=yt),R==".."?(this.s.pop(),k!="/"&&k!="\\"&&this.s.push("")):R=="."&&k!="/"&&k!="\\"?this.s.push(""):R!="."&&(this.l=="file"&&this.s.length==0&&R.length==2&&D.test(R[0])&&R[1]=="|"&&(R=R[0]+":"),this.s.push(R)),R="",k=="?"?(this.A="?",G="query"):k=="#"&&(this.C="#",G="fragment"));break;case"query":mt||k!="#"?k!=null&&k!="	"&&k!=`
`&&k!="\r"&&(this.A+=n(k)):(this.C="#",G="fragment");break;case"fragment":k!=null&&k!="	"&&k!=`
`&&k!="\r"&&(this.C+=k)}se++}}function s(){this.B=this.ya=this.l="",this.j=null,this.v=this.o="",this.s=[],this.C=this.A="",this.H=this.m=!1}function d(M,mt){mt===void 0||mt instanceof d||(mt=new d(String(mt))),this.g=M,s.call(this),i.call(this,this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,""),null,mt)}var p=!1;try{var f=new URL("b","http://a");f.pathname="c%20d",p=f.href==="http://a/c%20d"}catch{}if(!p){var g=Object.create(null);g.ftp=21,g.file=0,g.gopher=70,g.http=80,g.https=443,g.ws=80,g.wss=443;var w=Object.create(null);w["%2e"]=".",w[".%2e"]="..",w["%2e."]="..",w["%2e%2e"]="..";var D=/[a-zA-Z]/,ht=/[a-zA-Z0-9+\-.]/;d.prototype={toString:function(){return this.href},get href(){if(this.m)return this.g;var M="";return(this.B!=""||this.j!=null)&&(M=this.B+(this.j!=null?":"+this.j:"")+"@"),this.protocol+(this.H?"//"+M+this.host:"")+this.pathname+this.A+this.C},set href(M){s.call(this),i.call(this,M)},get protocol(){return this.l+":"},set protocol(M){this.m||i.call(this,M+":","scheme start")},get host(){return this.m?"":this.v?this.o+":"+this.v:this.o},set host(M){!this.m&&this.H&&i.call(this,M,"host")},get hostname(){return this.o},set hostname(M){!this.m&&this.H&&i.call(this,M,"hostname")},get port(){return this.v},set port(M){!this.m&&this.H&&i.call(this,M,"port")},get pathname(){return this.m?"":this.H?"/"+this.s.join("/"):this.ya},set pathname(M){!this.m&&this.H&&(this.s=[],i.call(this,M,"relative path start"))},get search(){return this.m||!this.A||this.A=="?"?"":this.A},set search(M){!this.m&&this.H&&(this.A="?",M[0]=="?"&&(M=M.slice(1)),i.call(this,M,"query"))},get hash(){return this.m||!this.C||this.C=="#"?"":this.C},set hash(M){this.m||(M?(this.C="#",M[0]=="#"&&(M=M.slice(1)),i.call(this,M,"fragment")):this.C="")},get origin(){var M;if(this.m||!this.l)return"";switch(this.l){case"data":case"file":case"javascript":case"mailto":return"null"}return(M=this.host)?this.l+"://"+M:""}};var rt=t.URL;rt&&(d.createObjectURL=function(M){return rt.createObjectURL.apply(rt,arguments)},d.revokeObjectURL=function(M){rt.revokeObjectURL(M)}),t.URL=d}}(window);var id=window.customElements,ad=!1,js=null;id.polyfillWrapFlushCallback&&id.polyfillWrapFlushCallback(function(t){js=t,ad&&t()});function Da(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document),js&&js(),ad=!0,window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}document.readyState!=="complete"?(window.addEventListener("load",Da),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",Da),Da()})):Da()}).call(pd)});var Pd=dd((Ks,Qs)=>{(function(y,m){typeof Ks=="object"&&typeof Qs<"u"?Qs.exports=m():typeof define=="function"&&define.amd?define(m):(y=typeof globalThis<"u"?globalThis:y||self).bootstrap=m()})(Ks,function(){"use strict";let y="transitionend",m=l=>{let r=l.getAttribute("data-bs-target");if(!r||r==="#"){let a=l.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),r=a&&a!=="#"?a.trim():null}return r},u=l=>{let r=m(l);return r&&document.querySelector(r)?r:null},v=l=>{let r=m(l);return r?document.querySelector(r):null},_=l=>{l.dispatchEvent(new Event(y))},A=l=>!(!l||typeof l!="object")&&(l.jquery!==void 0&&(l=l[0]),l.nodeType!==void 0),T=l=>A(l)?l.jquery?l[0]:l:typeof l=="string"&&l.length>0?document.querySelector(l):null,Z=l=>{if(!A(l)||l.getClientRects().length===0)return!1;let r=getComputedStyle(l).getPropertyValue("visibility")==="visible",a=l.closest("details:not([open])");if(!a)return r;if(a!==l){let c=l.closest("summary");if(c&&c.parentNode!==a||c===null)return!1}return r},z=l=>!l||l.nodeType!==Node.ELEMENT_NODE||!!l.classList.contains("disabled")||(l.disabled!==void 0?l.disabled:l.hasAttribute("disabled")&&l.getAttribute("disabled")!=="false"),Q=l=>{if(!document.documentElement.attachShadow)return null;if(typeof l.getRootNode=="function"){let r=l.getRootNode();return r instanceof ShadowRoot?r:null}return l instanceof ShadowRoot?l:l.parentNode?Q(l.parentNode):null},$t=()=>{},nt=l=>{l.offsetHeight},gt=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,zt=[],Nt=()=>document.documentElement.dir==="rtl",St=l=>{var r;r=()=>{let a=gt();if(a){let c=l.NAME,h=a.fn[c];a.fn[c]=l.jQueryInterface,a.fn[c].Constructor=l,a.fn[c].noConflict=()=>(a.fn[c]=h,l.jQueryInterface)}},document.readyState==="loading"?(zt.length||document.addEventListener("DOMContentLoaded",()=>{for(let a of zt)a()}),zt.push(r)):r()},le=l=>{typeof l=="function"&&l()},pr=(l,r,a=!0)=>{if(!a)return void le(l);let c=(x=>{if(!x)return 0;let{transitionDuration:E,transitionDelay:S}=window.getComputedStyle(x),P=Number.parseFloat(E),L=Number.parseFloat(S);return P||L?(E=E.split(",")[0],S=S.split(",")[0],1e3*(Number.parseFloat(E)+Number.parseFloat(S))):0})(r)+5,h=!1,b=({target:x})=>{x===r&&(h=!0,r.removeEventListener(y,b),le(l))};r.addEventListener(y,b),setTimeout(()=>{h||_(r)},c)},un=(l,r,a,c)=>{let h=l.length,b=l.indexOf(r);return b===-1?!a&&c?l[h-1]:l[0]:(b+=a?1:-1,c&&(b=(b+h)%h),l[Math.max(0,Math.min(b,h-1))])},Fa=/[^.]*(?=\..*)\.|.*/,fn=/\..*/,To=/::\d+$/,hn={},ur=1,Ti={mouseenter:"mouseover",mouseleave:"mouseout"},Ba=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ai(l,r){return r&&`${r}::${ur++}`||l.uidEvent||ur++}function At(l){let r=Ai(l);return l.uidEvent=r,hn[r]=hn[r]||{},hn[r]}function gn(l,r,a=null){return Object.values(l).find(c=>c.callable===r&&c.delegationSelector===a)}function fr(l,r,a){let c=typeof r=="string",h=c?a:r||a,b=bn(l);return Ba.has(b)||(b=l),[c,h,b]}function to(l,r,a,c,h){if(typeof r!="string"||!l)return;let[b,x,E]=fr(r,a,c);r in Ti&&(x=(W=>function(B){if(!B.relatedTarget||B.relatedTarget!==B.delegateTarget&&!B.delegateTarget.contains(B.relatedTarget))return W.call(this,B)})(x));let S=At(l),P=S[E]||(S[E]={}),L=gn(P,x,b?a:null);if(L)return void(L.oneOff=L.oneOff&&h);let O=Ai(x,r.replace(Fa,"")),X=b?function(H,W,B){return function F(J){let ut=H.querySelectorAll(W);for(let{target:U}=J;U&&U!==this;U=U.parentNode)for(let lt of ut)if(lt===U)return hr(J,{delegateTarget:U}),F.oneOff&&C.off(H,J.type,W,B),B.apply(U,[J])}}(l,a,x):function(H,W){return function B(F){return hr(F,{delegateTarget:H}),B.oneOff&&C.off(H,F.type,W),W.apply(H,[F])}}(l,x);X.delegationSelector=b?a:null,X.callable=x,X.oneOff=h,X.uidEvent=O,P[O]=X,l.addEventListener(E,X,b)}function Ao(l,r,a,c,h){let b=gn(r[a],c,h);b&&(l.removeEventListener(a,b,Boolean(h)),delete r[a][b.uidEvent])}function Ua(l,r,a,c){let h=r[a]||{};for(let b of Object.keys(h))if(b.includes(c)){let x=h[b];Ao(l,r,a,x.callable,x.delegationSelector)}}function bn(l){return l=l.replace(fn,""),Ti[l]||l}let C={on(l,r,a,c){to(l,r,a,c,!1)},one(l,r,a,c){to(l,r,a,c,!0)},off(l,r,a,c){if(typeof r!="string"||!l)return;let[h,b,x]=fr(r,a,c),E=x!==r,S=At(l),P=S[x]||{},L=r.startsWith(".");if(b===void 0){if(L)for(let O of Object.keys(S))Ua(l,S,O,r.slice(1));for(let O of Object.keys(P)){let X=O.replace(To,"");if(!E||r.includes(X)){let H=P[O];Ao(l,S,x,H.callable,H.delegationSelector)}}}else{if(!Object.keys(P).length)return;Ao(l,S,x,b,h?a:null)}},trigger(l,r,a){if(typeof r!="string"||!l)return null;let c=gt(),h=null,b=!0,x=!0,E=!1;r!==bn(r)&&c&&(h=c.Event(r,a),c(l).trigger(h),b=!h.isPropagationStopped(),x=!h.isImmediatePropagationStopped(),E=h.isDefaultPrevented());let S=new Event(r,{bubbles:b,cancelable:!0});return S=hr(S,a),E&&S.preventDefault(),x&&l.dispatchEvent(S),S.defaultPrevented&&h&&h.preventDefault(),S}};function hr(l,r){for(let[a,c]of Object.entries(r||{}))try{l[a]=c}catch{Object.defineProperty(l,a,{configurable:!0,get:()=>c})}return l}let Ne=new Map,vn={set(l,r,a){Ne.has(l)||Ne.set(l,new Map);let c=Ne.get(l);c.has(r)||c.size===0?c.set(r,a):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(c.keys())[0]}.`)},get:(l,r)=>Ne.has(l)&&Ne.get(l).get(r)||null,remove(l,r){if(!Ne.has(l))return;let a=Ne.get(l);a.delete(r),a.size===0&&Ne.delete(l)}};function gr(l){if(l==="true")return!0;if(l==="false")return!1;if(l===Number(l).toString())return Number(l);if(l===""||l==="null")return null;if(typeof l!="string")return l;try{return JSON.parse(decodeURIComponent(l))}catch{return l}}function Oo(l){return l.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}let oe={setDataAttribute(l,r,a){l.setAttribute(`data-bs-${Oo(r)}`,a)},removeDataAttribute(l,r){l.removeAttribute(`data-bs-${Oo(r)}`)},getDataAttributes(l){if(!l)return{};let r={},a=Object.keys(l.dataset).filter(c=>c.startsWith("bs")&&!c.startsWith("bsConfig"));for(let c of a){let h=c.replace(/^bs/,"");h=h.charAt(0).toLowerCase()+h.slice(1,h.length),r[h]=gr(l.dataset[c])}return r},getDataAttribute:(l,r)=>gr(l.getAttribute(`data-bs-${Oo(r)}`))};class Do{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(r){return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r}_mergeConfigObj(r,a){let c=A(a)?oe.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof c=="object"?c:{},...A(a)?oe.getDataAttributes(a):{},...typeof r=="object"?r:{}}}_typeCheckConfig(r,a=this.constructor.DefaultType){for(let h of Object.keys(a)){let b=a[h],x=r[h],E=A(x)?"element":(c=x)==null?`${c}`:Object.prototype.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(b).test(E))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${E}" but expected type "${b}".`)}var c}}class qt extends Do{constructor(r,a){super(),(r=T(r))&&(this._element=r,this._config=this._getConfig(a),vn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){vn.remove(this._element,this.constructor.DATA_KEY),C.off(this._element,this.constructor.EVENT_KEY);for(let r of Object.getOwnPropertyNames(this))this[r]=null}_queueCallback(r,a,c=!0){pr(r,a,c)}_getConfig(r){return r=this._mergeConfigObj(r,this._element),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}static getInstance(r){return vn.get(T(r),this.DATA_KEY)}static getOrCreateInstance(r,a={}){return this.getInstance(r)||new this(r,typeof a=="object"?a:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(r){return`${r}${this.EVENT_KEY}`}}let br=(l,r="hide")=>{let a=`click.dismiss${l.EVENT_KEY}`,c=l.NAME;C.on(document,a,`[data-bs-dismiss="${c}"]`,function(h){if(["A","AREA"].includes(this.tagName)&&h.preventDefault(),z(this))return;let b=v(this)||this.closest(`.${c}`);l.getOrCreateInstance(b)[r]()})};class He extends qt{static get NAME(){return"alert"}close(){if(C.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");let r=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,r)}_destroyElement(){this._element.remove(),C.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(r){return this.each(function(){let a=He.getOrCreateInstance(this);if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r](this)}})}}br(He,"close"),St(He);let jo='[data-bs-toggle="button"]';class eo extends qt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(r){return this.each(function(){let a=eo.getOrCreateInstance(this);r==="toggle"&&a[r]()})}}C.on(document,"click.bs.button.data-api",jo,l=>{l.preventDefault();let r=l.target.closest(jo);eo.getOrCreateInstance(r).toggle()}),St(eo);let V={find:(l,r=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(r,l)),findOne:(l,r=document.documentElement)=>Element.prototype.querySelector.call(r,l),children:(l,r)=>[].concat(...l.children).filter(a=>a.matches(r)),parents(l,r){let a=[],c=l.parentNode.closest(r);for(;c;)a.push(c),c=c.parentNode.closest(r);return a},prev(l,r){let a=l.previousElementSibling;for(;a;){if(a.matches(r))return[a];a=a.previousElementSibling}return[]},next(l,r){let a=l.nextElementSibling;for(;a;){if(a.matches(r))return[a];a=a.nextElementSibling}return[]},focusableChildren(l){let r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(r,l).filter(a=>!z(a)&&Z(a))}},Oi={endCallback:null,leftCallback:null,rightCallback:null},yn={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class vr extends Do{constructor(r,a){super(),this._element=r,r&&vr.isSupported()&&(this._config=this._getConfig(a),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Oi}static get DefaultType(){return yn}static get NAME(){return"swipe"}dispose(){C.off(this._element,".bs.swipe")}_start(r){this._supportPointerEvents?this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX):this._deltaX=r.touches[0].clientX}_end(r){this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX-this._deltaX),this._handleSwipe(),le(this._config.endCallback)}_move(r){this._deltaX=r.touches&&r.touches.length>1?0:r.touches[0].clientX-this._deltaX}_handleSwipe(){let r=Math.abs(this._deltaX);if(r<=40)return;let a=r/this._deltaX;this._deltaX=0,a&&le(a>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(C.on(this._element,"pointerdown.bs.swipe",r=>this._start(r)),C.on(this._element,"pointerup.bs.swipe",r=>this._end(r)),this._element.classList.add("pointer-event")):(C.on(this._element,"touchstart.bs.swipe",r=>this._start(r)),C.on(this._element,"touchmove.bs.swipe",r=>this._move(r)),C.on(this._element,"touchend.bs.swipe",r=>this._end(r)))}_eventIsPointerPenTouch(r){return this._supportPointerEvents&&(r.pointerType==="pen"||r.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}let ve="next",Fe="prev",oo="left",Po="right",xn="slid.bs.carousel",Di="carousel",Mo="active",wn={ArrowLeft:Po,ArrowRight:oo},_n={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},kn={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Se extends qt{constructor(r,a){super(r,a),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=V.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Di&&this.cycle()}static get Default(){return _n}static get DefaultType(){return kn}static get NAME(){return"carousel"}next(){this._slide(ve)}nextWhenVisible(){!document.hidden&&Z(this._element)&&this.next()}prev(){this._slide(Fe)}pause(){this._isSliding&&_(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?C.one(this._element,xn,()=>this.cycle()):this.cycle())}to(r){let a=this._getItems();if(r>a.length-1||r<0)return;if(this._isSliding)return void C.one(this._element,xn,()=>this.to(r));let c=this._getItemIndex(this._getActive());if(c===r)return;let h=r>c?ve:Fe;this._slide(h,a[r])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(r){return r.defaultInterval=r.interval,r}_addEventListeners(){this._config.keyboard&&C.on(this._element,"keydown.bs.carousel",r=>this._keydown(r)),this._config.pause==="hover"&&(C.on(this._element,"mouseenter.bs.carousel",()=>this.pause()),C.on(this._element,"mouseleave.bs.carousel",()=>this._maybeEnableCycle())),this._config.touch&&vr.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let a of V.find(".carousel-item img",this._element))C.on(a,"dragstart.bs.carousel",c=>c.preventDefault());let r={leftCallback:()=>this._slide(this._directionToOrder(oo)),rightCallback:()=>this._slide(this._directionToOrder(Po)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new vr(this._element,r)}_keydown(r){if(/input|textarea/i.test(r.target.tagName))return;let a=wn[r.key];a&&(r.preventDefault(),this._slide(this._directionToOrder(a)))}_getItemIndex(r){return this._getItems().indexOf(r)}_setActiveIndicatorElement(r){if(!this._indicatorsElement)return;let a=V.findOne(".active",this._indicatorsElement);a.classList.remove(Mo),a.removeAttribute("aria-current");let c=V.findOne(`[data-bs-slide-to="${r}"]`,this._indicatorsElement);c&&(c.classList.add(Mo),c.setAttribute("aria-current","true"))}_updateInterval(){let r=this._activeElement||this._getActive();if(!r)return;let a=Number.parseInt(r.getAttribute("data-bs-interval"),10);this._config.interval=a||this._config.defaultInterval}_slide(r,a=null){if(this._isSliding)return;let c=this._getActive(),h=r===ve,b=a||un(this._getItems(),c,h,this._config.wrap);if(b===c)return;let x=this._getItemIndex(b),E=O=>C.trigger(this._element,O,{relatedTarget:b,direction:this._orderToDirection(r),from:this._getItemIndex(c),to:x});if(E("slide.bs.carousel").defaultPrevented||!c||!b)return;let S=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(x),this._activeElement=b;let P=h?"carousel-item-start":"carousel-item-end",L=h?"carousel-item-next":"carousel-item-prev";b.classList.add(L),nt(b),c.classList.add(P),b.classList.add(P),this._queueCallback(()=>{b.classList.remove(P,L),b.classList.add(Mo),c.classList.remove(Mo,L,P),this._isSliding=!1,E(xn)},c,this._isAnimated()),S&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return V.findOne(".active.carousel-item",this._element)}_getItems(){return V.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(r){return Nt()?r===oo?Fe:ve:r===oo?ve:Fe}_orderToDirection(r){return Nt()?r===Fe?oo:Po:r===Fe?Po:oo}static jQueryInterface(r){return this.each(function(){let a=Se.getOrCreateInstance(this,r);if(typeof r!="number"){if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r]()}}else a.to(r)})}}C.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",function(l){let r=v(this);if(!r||!r.classList.contains(Di))return;l.preventDefault();let a=Se.getOrCreateInstance(r),c=this.getAttribute("data-bs-slide-to");return c?(a.to(c),void a._maybeEnableCycle()):oe.getDataAttribute(this,"slide")==="next"?(a.next(),void a._maybeEnableCycle()):(a.prev(),void a._maybeEnableCycle())}),C.on(window,"load.bs.carousel.data-api",()=>{let l=V.find('[data-bs-ride="carousel"]');for(let r of l)Se.getOrCreateInstance(r)}),St(Se);let En="show",yr="collapse",ro="collapsing",no='[data-bs-toggle="collapse"]',Wa={parent:null,toggle:!0},Cn={parent:"(null|element)",toggle:"boolean"};class Te extends qt{constructor(r,a){super(r,a),this._isTransitioning=!1,this._triggerArray=[];let c=V.find(no);for(let h of c){let b=u(h),x=V.find(b).filter(E=>E===this._element);b!==null&&x.length&&this._triggerArray.push(h)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Wa}static get DefaultType(){return Cn}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let r=[];if(this._config.parent&&(r=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(h=>h!==this._element).map(h=>Te.getOrCreateInstance(h,{toggle:!1}))),r.length&&r[0]._isTransitioning||C.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(let h of r)h.hide();let a=this._getDimension();this._element.classList.remove(yr),this._element.classList.add(ro),this._element.style[a]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let c=`scroll${a[0].toUpperCase()+a.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ro),this._element.classList.add(yr,En),this._element.style[a]="",C.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[a]=`${this._element[c]}px`}hide(){if(this._isTransitioning||!this._isShown()||C.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;let r=this._getDimension();this._element.style[r]=`${this._element.getBoundingClientRect()[r]}px`,nt(this._element),this._element.classList.add(ro),this._element.classList.remove(yr,En);for(let a of this._triggerArray){let c=v(a);c&&!this._isShown(c)&&this._addAriaAndCollapsedClass([a],!1)}this._isTransitioning=!0,this._element.style[r]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ro),this._element.classList.add(yr),C.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(r=this._element){return r.classList.contains(En)}_configAfterMerge(r){return r.toggle=Boolean(r.toggle),r.parent=T(r.parent),r}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;let r=this._getFirstLevelChildren(no);for(let a of r){let c=v(a);c&&this._addAriaAndCollapsedClass([a],this._isShown(c))}}_getFirstLevelChildren(r){let a=V.find(":scope .collapse .collapse",this._config.parent);return V.find(r,this._config.parent).filter(c=>!a.includes(c))}_addAriaAndCollapsedClass(r,a){if(r.length)for(let c of r)c.classList.toggle("collapsed",!a),c.setAttribute("aria-expanded",a)}static jQueryInterface(r){let a={};return typeof r=="string"&&/show|hide/.test(r)&&(a.toggle=!1),this.each(function(){let c=Te.getOrCreateInstance(this,a);if(typeof r=="string"){if(c[r]===void 0)throw new TypeError(`No method named "${r}"`);c[r]()}})}}C.on(document,"click.bs.collapse.data-api",no,function(l){(l.target.tagName==="A"||l.delegateTarget&&l.delegateTarget.tagName==="A")&&l.preventDefault();let r=u(this),a=V.find(r);for(let c of a)Te.getOrCreateInstance(c,{toggle:!1}).toggle()}),St(Te);var Pt="top",Xt="bottom",Gt="right",Mt="left",io="auto",Ae=[Pt,Xt,Gt,Mt],Be="start",ao="end",ji="clippingParents",Lo="viewport",Oe="popper",xr="reference",$o=Ae.reduce(function(l,r){return l.concat([r+"-"+Be,r+"-"+ao])},[]),zo=[].concat(Ae,[io]).reduce(function(l,r){return l.concat([r,r+"-"+Be,r+"-"+ao])},[]),Pi="beforeRead",Mi="read",Li="afterRead",Nn="beforeMain",wr="main",_r="afterMain",$i="beforeWrite",zi="write",Sn="afterWrite",kr=[Pi,Mi,Li,Nn,wr,_r,$i,zi,Sn];function re(l){return l?(l.nodeName||"").toLowerCase():null}function ne(l){if(l==null)return window;if(l.toString()!=="[object Window]"){var r=l.ownerDocument;return r&&r.defaultView||window}return l}function Ue(l){return l instanceof ne(l).Element||l instanceof Element}function Yt(l){return l instanceof ne(l).HTMLElement||l instanceof HTMLElement}function Io(l){return typeof ShadowRoot<"u"&&(l instanceof ne(l).ShadowRoot||l instanceof ShadowRoot)}let Ro={name:"applyStyles",enabled:!0,phase:"write",fn:function(l){var r=l.state;Object.keys(r.elements).forEach(function(a){var c=r.styles[a]||{},h=r.attributes[a]||{},b=r.elements[a];Yt(b)&&re(b)&&(Object.assign(b.style,c),Object.keys(h).forEach(function(x){var E=h[x];E===!1?b.removeAttribute(x):b.setAttribute(x,E===!0?"":E)}))})},effect:function(l){var r=l.state,a={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(r.elements.popper.style,a.popper),r.styles=a,r.elements.arrow&&Object.assign(r.elements.arrow.style,a.arrow),function(){Object.keys(r.elements).forEach(function(c){var h=r.elements[c],b=r.attributes[c]||{},x=Object.keys(r.styles.hasOwnProperty(c)?r.styles[c]:a[c]).reduce(function(E,S){return E[S]="",E},{});Yt(h)&&re(h)&&(Object.assign(h.style,x),Object.keys(b).forEach(function(E){h.removeAttribute(E)}))})}},requires:["computeStyles"]};function ue(l){return l.split("-")[0]}var We=Math.max,Er=Math.min,Ve=Math.round;function Cr(){var l=navigator.userAgentData;return l!=null&&l.brands?l.brands.map(function(r){return r.brand+"/"+r.version}).join(" "):navigator.userAgent}function Tn(){return!/^((?!chrome|android).)*safari/i.test(Cr())}function so(l,r,a){r===void 0&&(r=!1),a===void 0&&(a=!1);var c=l.getBoundingClientRect(),h=1,b=1;r&&Yt(l)&&(h=l.offsetWidth>0&&Ve(c.width)/l.offsetWidth||1,b=l.offsetHeight>0&&Ve(c.height)/l.offsetHeight||1);var x=(Ue(l)?ne(l):window).visualViewport,E=!Tn()&&a,S=(c.left+(E&&x?x.offsetLeft:0))/h,P=(c.top+(E&&x?x.offsetTop:0))/b,L=c.width/h,O=c.height/b;return{width:L,height:O,top:P,right:S+L,bottom:P+O,left:S,x:S,y:P}}function Nr(l){var r=so(l),a=l.offsetWidth,c=l.offsetHeight;return Math.abs(r.width-a)<=1&&(a=r.width),Math.abs(r.height-c)<=1&&(c=r.height),{x:l.offsetLeft,y:l.offsetTop,width:a,height:c}}function An(l,r){var a=r.getRootNode&&r.getRootNode();if(l.contains(r))return!0;if(a&&Io(a)){var c=r;do{if(c&&l.isSameNode(c))return!0;c=c.parentNode||c.host}while(c)}return!1}function It(l){return ne(l).getComputedStyle(l)}function Ii(l){return["table","td","th"].indexOf(re(l))>=0}function De(l){return((Ue(l)?l.ownerDocument:l.document)||window.document).documentElement}function Ut(l){return re(l)==="html"?l:l.assignedSlot||l.parentNode||(Io(l)?l.host:null)||De(l)}function On(l){return Yt(l)&&It(l).position!=="fixed"?l.offsetParent:null}function je(l){for(var r=ne(l),a=On(l);a&&Ii(a)&&It(a).position==="static";)a=On(a);return a&&(re(a)==="html"||re(a)==="body"&&It(a).position==="static")?r:a||function(c){var h=/firefox/i.test(Cr());if(/Trident/i.test(Cr())&&Yt(c)&&It(c).position==="fixed")return null;var b=Ut(c);for(Io(b)&&(b=b.host);Yt(b)&&["html","body"].indexOf(re(b))<0;){var x=It(b);if(x.transform!=="none"||x.perspective!=="none"||x.contain==="paint"||["transform","perspective"].indexOf(x.willChange)!==-1||h&&x.willChange==="filter"||h&&x.filter&&x.filter!=="none")return b;b=b.parentNode}return null}(l)||r}function Sr(l){return["top","bottom"].indexOf(l)>=0?"x":"y"}function lo(l,r,a){return We(l,Er(r,a))}function Dn(l){return Object.assign({},{top:0,right:0,bottom:0,left:0},l)}function jn(l,r){return r.reduce(function(a,c){return a[c]=l,a},{})}let Pn={name:"arrow",enabled:!0,phase:"main",fn:function(l){var r,a=l.state,c=l.name,h=l.options,b=a.elements.arrow,x=a.modifiersData.popperOffsets,E=ue(a.placement),S=Sr(E),P=[Mt,Gt].indexOf(E)>=0?"height":"width";if(b&&x){var L=function(dt,ct){return Dn(typeof(dt=typeof dt=="function"?dt(Object.assign({},ct.rects,{placement:ct.placement})):dt)!="number"?dt:jn(dt,Ae))}(h.padding,a),O=Nr(b),X=S==="y"?Pt:Mt,H=S==="y"?Xt:Gt,W=a.rects.reference[P]+a.rects.reference[S]-x[S]-a.rects.popper[P],B=x[S]-a.rects.reference[S],F=je(b),J=F?S==="y"?F.clientHeight||0:F.clientWidth||0:0,ut=W/2-B/2,U=L[X],lt=J-O[P]-L[H],Y=J/2-O[P]/2+ut,tt=lo(U,Y,lt),pt=S;a.modifiersData[c]=((r={})[pt]=tt,r.centerOffset=tt-Y,r)}},effect:function(l){var r=l.state,a=l.options.element,c=a===void 0?"[data-popper-arrow]":a;c!=null&&(typeof c!="string"||(c=r.elements.popper.querySelector(c)))&&An(r.elements.popper,c)&&(r.elements.arrow=c)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ft(l){return l.split("-")[1]}var q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function I(l){var r,a=l.popper,c=l.popperRect,h=l.placement,b=l.variation,x=l.offsets,E=l.position,S=l.gpuAcceleration,P=l.adaptive,L=l.roundOffsets,O=l.isFixed,X=x.x,H=X===void 0?0:X,W=x.y,B=W===void 0?0:W,F=typeof L=="function"?L({x:H,y:B}):{x:H,y:B};H=F.x,B=F.y;var J=x.hasOwnProperty("x"),ut=x.hasOwnProperty("y"),U=Mt,lt=Pt,Y=window;if(P){var tt=je(a),pt="clientHeight",dt="clientWidth";tt===ne(a)&&It(tt=De(a)).position!=="static"&&E==="absolute"&&(pt="scrollHeight",dt="scrollWidth"),(h===Pt||(h===Mt||h===Gt)&&b===ao)&&(lt=Xt,B-=(O&&tt===Y&&Y.visualViewport?Y.visualViewport.height:tt[pt])-c.height,B*=S?1:-1),h!==Mt&&(h!==Pt&&h!==Xt||b!==ao)||(U=Gt,H-=(O&&tt===Y&&Y.visualViewport?Y.visualViewport.width:tt[dt])-c.width,H*=S?1:-1)}var ct,kt=Object.assign({position:E},P&&q),Qt=L===!0?function(Vt){var Wt=Vt.x,Zt=Vt.y,Ht=window.devicePixelRatio||1;return{x:Ve(Wt*Ht)/Ht||0,y:Ve(Zt*Ht)/Ht||0}}({x:H,y:B}):{x:H,y:B};return H=Qt.x,B=Qt.y,S?Object.assign({},kt,((ct={})[lt]=ut?"0":"",ct[U]=J?"0":"",ct.transform=(Y.devicePixelRatio||1)<=1?"translate("+H+"px, "+B+"px)":"translate3d("+H+"px, "+B+"px, 0)",ct)):Object.assign({},kt,((r={})[lt]=ut?B+"px":"",r[U]=J?H+"px":"",r.transform="",r))}let Ho={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(l){var r=l.state,a=l.options,c=a.gpuAcceleration,h=c===void 0||c,b=a.adaptive,x=b===void 0||b,E=a.roundOffsets,S=E===void 0||E,P={placement:ue(r.placement),variation:ft(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:h,isFixed:r.options.strategy==="fixed"};r.modifiersData.popperOffsets!=null&&(r.styles.popper=Object.assign({},r.styles.popper,I(Object.assign({},P,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:x,roundOffsets:S})))),r.modifiersData.arrow!=null&&(r.styles.arrow=Object.assign({},r.styles.arrow,I(Object.assign({},P,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:S})))),r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})},data:{}};var Fo={passive:!0};let Tr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(l){var r=l.state,a=l.instance,c=l.options,h=c.scroll,b=h===void 0||h,x=c.resize,E=x===void 0||x,S=ne(r.elements.popper),P=[].concat(r.scrollParents.reference,r.scrollParents.popper);return b&&P.forEach(function(L){L.addEventListener("scroll",a.update,Fo)}),E&&S.addEventListener("resize",a.update,Fo),function(){b&&P.forEach(function(L){L.removeEventListener("scroll",a.update,Fo)}),E&&S.removeEventListener("resize",a.update,Fo)}},data:{}};var Ri={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(l){return l.replace(/left|right|bottom|top/g,function(r){return Ri[r]})}var Ot={start:"end",end:"start"};function Ar(l){return l.replace(/start|end/g,function(r){return Ot[r]})}function Pe(l){var r=ne(l);return{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function Bo(l){return so(De(l)).left+Pe(l).scrollLeft}function Uo(l){var r=It(l),a=r.overflow,c=r.overflowX,h=r.overflowY;return/auto|scroll|overlay|hidden/.test(a+h+c)}function Mn(l){return["html","body","#document"].indexOf(re(l))>=0?l.ownerDocument.body:Yt(l)&&Uo(l)?l:Mn(Ut(l))}function qe(l,r){var a;r===void 0&&(r=[]);var c=Mn(l),h=c===((a=l.ownerDocument)==null?void 0:a.body),b=ne(c),x=h?[b].concat(b.visualViewport||[],Uo(c)?c:[]):c,E=r.concat(x);return h?E:E.concat(qe(Ut(x)))}function Or(l){return Object.assign({},l,{left:l.x,top:l.y,right:l.x+l.width,bottom:l.y+l.height})}function Ln(l,r,a){return r===Lo?Or(function(c,h){var b=ne(c),x=De(c),E=b.visualViewport,S=x.clientWidth,P=x.clientHeight,L=0,O=0;if(E){S=E.width,P=E.height;var X=Tn();(X||!X&&h==="fixed")&&(L=E.offsetLeft,O=E.offsetTop)}return{width:S,height:P,x:L+Bo(c),y:O}}(l,a)):Ue(r)?function(c,h){var b=so(c,!1,h==="fixed");return b.top=b.top+c.clientTop,b.left=b.left+c.clientLeft,b.bottom=b.top+c.clientHeight,b.right=b.left+c.clientWidth,b.width=c.clientWidth,b.height=c.clientHeight,b.x=b.left,b.y=b.top,b}(r,a):Or(function(c){var h,b=De(c),x=Pe(c),E=(h=c.ownerDocument)==null?void 0:h.body,S=We(b.scrollWidth,b.clientWidth,E?E.scrollWidth:0,E?E.clientWidth:0),P=We(b.scrollHeight,b.clientHeight,E?E.scrollHeight:0,E?E.clientHeight:0),L=-x.scrollLeft+Bo(c),O=-x.scrollTop;return It(E||b).direction==="rtl"&&(L+=We(b.clientWidth,E?E.clientWidth:0)-S),{width:S,height:P,x:L,y:O}}(De(l)))}function $n(l){var r,a=l.reference,c=l.element,h=l.placement,b=h?ue(h):null,x=h?ft(h):null,E=a.x+a.width/2-c.width/2,S=a.y+a.height/2-c.height/2;switch(b){case Pt:r={x:E,y:a.y-c.height};break;case Xt:r={x:E,y:a.y+a.height};break;case Gt:r={x:a.x+a.width,y:S};break;case Mt:r={x:a.x-c.width,y:S};break;default:r={x:a.x,y:a.y}}var P=b?Sr(b):null;if(P!=null){var L=P==="y"?"height":"width";switch(x){case Be:r[P]=r[P]-(a[L]/2-c[L]/2);break;case ao:r[P]=r[P]+(a[L]/2-c[L]/2)}}return r}function he(l,r){r===void 0&&(r={});var a=r,c=a.placement,h=c===void 0?l.placement:c,b=a.strategy,x=b===void 0?l.strategy:b,E=a.boundary,S=E===void 0?ji:E,P=a.rootBoundary,L=P===void 0?Lo:P,O=a.elementContext,X=O===void 0?Oe:O,H=a.altBoundary,W=H!==void 0&&H,B=a.padding,F=B===void 0?0:B,J=Dn(typeof F!="number"?F:jn(F,Ae)),ut=X===Oe?xr:Oe,U=l.rects.popper,lt=l.elements[W?ut:X],Y=function(Wt,Zt,Ht,vt){var Jt=Zt==="clippingParents"?function(et){var Dt=qe(Ut(et)),te=["absolute","fixed"].indexOf(It(et).position)>=0&&Yt(et)?je(et):et;return Ue(te)?Dt.filter(function(we){return Ue(we)&&An(we,te)&&re(we)!=="body"}):[]}(Wt):[].concat(Zt),ce=[].concat(Jt,[Ht]),xe=ce[0],Tt=ce.reduce(function(et,Dt){var te=Ln(Wt,Dt,vt);return et.top=We(te.top,et.top),et.right=Er(te.right,et.right),et.bottom=Er(te.bottom,et.bottom),et.left=We(te.left,et.left),et},Ln(Wt,xe,vt));return Tt.width=Tt.right-Tt.left,Tt.height=Tt.bottom-Tt.top,Tt.x=Tt.left,Tt.y=Tt.top,Tt}(Ue(lt)?lt:lt.contextElement||De(l.elements.popper),S,L,x),tt=so(l.elements.reference),pt=$n({reference:tt,element:U,strategy:"absolute",placement:h}),dt=Or(Object.assign({},U,pt)),ct=X===Oe?dt:tt,kt={top:Y.top-ct.top+J.top,bottom:ct.bottom-Y.bottom+J.bottom,left:Y.left-ct.left+J.left,right:ct.right-Y.right+J.right},Qt=l.modifiersData.offset;if(X===Oe&&Qt){var Vt=Qt[h];Object.keys(kt).forEach(function(Wt){var Zt=[Gt,Xt].indexOf(Wt)>=0?1:-1,Ht=[Pt,Xt].indexOf(Wt)>=0?"y":"x";kt[Wt]+=Vt[Ht]*Zt})}return kt}function Hi(l,r){r===void 0&&(r={});var a=r,c=a.placement,h=a.boundary,b=a.rootBoundary,x=a.padding,E=a.flipVariations,S=a.allowedAutoPlacements,P=S===void 0?zo:S,L=ft(c),O=L?E?$o:$o.filter(function(W){return ft(W)===L}):Ae,X=O.filter(function(W){return P.indexOf(W)>=0});X.length===0&&(X=O);var H=X.reduce(function(W,B){return W[B]=he(l,{placement:B,boundary:h,rootBoundary:b,padding:x})[ue(B)],W},{});return Object.keys(H).sort(function(W,B){return H[W]-H[B]})}let Dr={name:"flip",enabled:!0,phase:"main",fn:function(l){var r=l.state,a=l.options,c=l.name;if(!r.modifiersData[c]._skip){for(var h=a.mainAxis,b=h===void 0||h,x=a.altAxis,E=x===void 0||x,S=a.fallbackPlacements,P=a.padding,L=a.boundary,O=a.rootBoundary,X=a.altBoundary,H=a.flipVariations,W=H===void 0||H,B=a.allowedAutoPlacements,F=r.options.placement,J=ue(F),ut=S||(J!==F&&W?function(et){if(ue(et)===io)return[];var Dt=fe(et);return[Ar(et),Dt,Ar(Dt)]}(F):[fe(F)]),U=[F].concat(ut).reduce(function(et,Dt){return et.concat(ue(Dt)===io?Hi(r,{placement:Dt,boundary:L,rootBoundary:O,padding:P,flipVariations:W,allowedAutoPlacements:B}):Dt)},[]),lt=r.rects.reference,Y=r.rects.popper,tt=new Map,pt=!0,dt=U[0],ct=0;ct<U.length;ct++){var kt=U[ct],Qt=ue(kt),Vt=ft(kt)===Be,Wt=[Pt,Xt].indexOf(Qt)>=0,Zt=Wt?"width":"height",Ht=he(r,{placement:kt,boundary:L,rootBoundary:O,altBoundary:X,padding:P}),vt=Wt?Vt?Gt:Mt:Vt?Xt:Pt;lt[Zt]>Y[Zt]&&(vt=fe(vt));var Jt=fe(vt),ce=[];if(b&&ce.push(Ht[Qt]<=0),E&&ce.push(Ht[vt]<=0,Ht[Jt]<=0),ce.every(function(et){return et})){dt=kt,pt=!1;break}tt.set(kt,ce)}if(pt)for(var xe=function(et){var Dt=U.find(function(te){var we=tt.get(te);if(we)return we.slice(0,et).every(function(Qo){return Qo})});if(Dt)return dt=Dt,"break"},Tt=W?3:1;Tt>0&&xe(Tt)!=="break";Tt--);r.placement!==dt&&(r.modifiersData[c]._skip=!0,r.placement=dt,r.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function zn(l,r,a){return a===void 0&&(a={x:0,y:0}),{top:l.top-r.height-a.y,right:l.right-r.width+a.x,bottom:l.bottom-r.height+a.y,left:l.left-r.width-a.x}}function Rt(l){return[Pt,Gt,Xt,Mt].some(function(r){return l[r]>=0})}let jr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(l){var r=l.state,a=l.name,c=r.rects.reference,h=r.rects.popper,b=r.modifiersData.preventOverflow,x=he(r,{elementContext:"reference"}),E=he(r,{altBoundary:!0}),S=zn(x,c),P=zn(E,h,b),L=Rt(S),O=Rt(P);r.modifiersData[a]={referenceClippingOffsets:S,popperEscapeOffsets:P,isReferenceHidden:L,hasPopperEscaped:O},r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":L,"data-popper-escaped":O})}},wt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(l){var r=l.state,a=l.options,c=l.name,h=a.offset,b=h===void 0?[0,0]:h,x=zo.reduce(function(L,O){return L[O]=function(X,H,W){var B=ue(X),F=[Mt,Pt].indexOf(B)>=0?-1:1,J=typeof W=="function"?W(Object.assign({},H,{placement:X})):W,ut=J[0],U=J[1];return ut=ut||0,U=(U||0)*F,[Mt,Gt].indexOf(B)>=0?{x:U,y:ut}:{x:ut,y:U}}(O,r.rects,b),L},{}),E=x[r.placement],S=E.x,P=E.y;r.modifiersData.popperOffsets!=null&&(r.modifiersData.popperOffsets.x+=S,r.modifiersData.popperOffsets.y+=P),r.modifiersData[c]=x}},Wo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(l){var r=l.state,a=l.name;r.modifiersData[a]=$n({reference:r.rects.reference,element:r.rects.popper,strategy:"absolute",placement:r.placement})},data:{}},In={name:"preventOverflow",enabled:!0,phase:"main",fn:function(l){var r=l.state,a=l.options,c=l.name,h=a.mainAxis,b=h===void 0||h,x=a.altAxis,E=x!==void 0&&x,S=a.boundary,P=a.rootBoundary,L=a.altBoundary,O=a.padding,X=a.tether,H=X===void 0||X,W=a.tetherOffset,B=W===void 0?0:W,F=he(r,{boundary:S,rootBoundary:P,padding:O,altBoundary:L}),J=ue(r.placement),ut=ft(r.placement),U=!ut,lt=Sr(J),Y=lt==="x"?"y":"x",tt=r.modifiersData.popperOffsets,pt=r.rects.reference,dt=r.rects.popper,ct=typeof B=="function"?B(Object.assign({},r.rects,{placement:r.placement})):B,kt=typeof ct=="number"?{mainAxis:ct,altAxis:ct}:Object.assign({mainAxis:0,altAxis:0},ct),Qt=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null,Vt={x:0,y:0};if(tt){if(b){var Wt,Zt=lt==="y"?Pt:Mt,Ht=lt==="y"?Xt:Gt,vt=lt==="y"?"height":"width",Jt=tt[lt],ce=Jt+F[Zt],xe=Jt-F[Ht],Tt=H?-dt[vt]/2:0,et=ut===Be?pt[vt]:dt[vt],Dt=ut===Be?-dt[vt]:-pt[vt],te=r.elements.arrow,we=H&&te?Nr(te):{width:0,height:0},Qo=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ui=Qo[Zt],Zo=Qo[Ht],Jo=lo(0,pt[vt],we[vt]),la=U?pt[vt]/2-Tt-Jo-ui-kt.mainAxis:et-Jo-ui-kt.mainAxis,ts=U?-pt[vt]/2+Tt+Jo+Zo+kt.mainAxis:Dt+Jo+Zo+kt.mainAxis,Yr=r.elements.arrow&&je(r.elements.arrow),Kr=Yr?lt==="y"?Yr.clientTop||0:Yr.clientLeft||0:0,da=(Wt=Qt?.[lt])!=null?Wt:0,es=Jt+ts-da,fi=lo(H?Er(ce,Jt+la-da-Kr):ce,Jt,H?We(xe,es):xe);tt[lt]=fi,Vt[lt]=fi-Jt}if(E){var Ke,_o=lt==="x"?Pt:Mt,ca=lt==="x"?Xt:Gt,$e=tt[Y],tr=Y==="y"?"height":"width",hi=$e+F[_o],ma=$e-F[ca],er=[Pt,Mt].indexOf(J)!==-1,Qr=(Ke=Qt?.[Y])!=null?Ke:0,pa=er?hi:$e-pt[tr]-dt[tr]-Qr+kt.altAxis,ua=er?$e+pt[tr]+dt[tr]-Qr-kt.altAxis:ma,fa=H&&er?function(os,rs,Zr){var or=lo(os,rs,Zr);return or>Zr?Zr:or}(pa,$e,ua):lo(H?pa:hi,$e,H?ua:ma);tt[Y]=fa,Vt[Y]=fa-$e}r.modifiersData[c]=Vt}},requiresIfExists:["offset"]};function co(l,r,a){a===void 0&&(a=!1);var c,h,b=Yt(r),x=Yt(r)&&function(O){var X=O.getBoundingClientRect(),H=Ve(X.width)/O.offsetWidth||1,W=Ve(X.height)/O.offsetHeight||1;return H!==1||W!==1}(r),E=De(r),S=so(l,x,a),P={scrollLeft:0,scrollTop:0},L={x:0,y:0};return(b||!b&&!a)&&((re(r)!=="body"||Uo(E))&&(P=(c=r)!==ne(c)&&Yt(c)?{scrollLeft:(h=c).scrollLeft,scrollTop:h.scrollTop}:Pe(c)),Yt(r)?((L=so(r,!0)).x+=r.clientLeft,L.y+=r.clientTop):E&&(L.x=Bo(E))),{x:S.left+P.scrollLeft-L.x,y:S.top+P.scrollTop-L.y,width:S.width,height:S.height}}function Rn(l){var r=new Map,a=new Set,c=[];function h(b){a.add(b.name),[].concat(b.requires||[],b.requiresIfExists||[]).forEach(function(x){if(!a.has(x)){var E=r.get(x);E&&h(E)}}),c.push(b)}return l.forEach(function(b){r.set(b.name,b)}),l.forEach(function(b){a.has(b.name)||h(b)}),c}var Fi={placement:"bottom",modifiers:[],strategy:"absolute"};function mo(){for(var l=arguments.length,r=new Array(l),a=0;a<l;a++)r[a]=arguments[a];return!r.some(function(c){return!(c&&typeof c.getBoundingClientRect=="function")})}function po(l){l===void 0&&(l={});var r=l,a=r.defaultModifiers,c=a===void 0?[]:a,h=r.defaultOptions,b=h===void 0?Fi:h;return function(x,E,S){S===void 0&&(S=b);var P,L,O={placement:"bottom",orderedModifiers:[],options:Object.assign({},Fi,b),modifiersData:{},elements:{reference:x,popper:E},attributes:{},styles:{}},X=[],H=!1,W={state:O,setOptions:function(F){var J=typeof F=="function"?F(O.options):F;B(),O.options=Object.assign({},b,O.options,J),O.scrollParents={reference:Ue(x)?qe(x):x.contextElement?qe(x.contextElement):[],popper:qe(E)};var ut,U,lt=function(Y){var tt=Rn(Y);return kr.reduce(function(pt,dt){return pt.concat(tt.filter(function(ct){return ct.phase===dt}))},[])}((ut=[].concat(c,O.options.modifiers),U=ut.reduce(function(Y,tt){var pt=Y[tt.name];return Y[tt.name]=pt?Object.assign({},pt,tt,{options:Object.assign({},pt.options,tt.options),data:Object.assign({},pt.data,tt.data)}):tt,Y},{}),Object.keys(U).map(function(Y){return U[Y]})));return O.orderedModifiers=lt.filter(function(Y){return Y.enabled}),O.orderedModifiers.forEach(function(Y){var tt=Y.name,pt=Y.options,dt=pt===void 0?{}:pt,ct=Y.effect;if(typeof ct=="function"){var kt=ct({state:O,name:tt,instance:W,options:dt});X.push(kt||function(){})}}),W.update()},forceUpdate:function(){if(!H){var F=O.elements,J=F.reference,ut=F.popper;if(mo(J,ut)){O.rects={reference:co(J,je(ut),O.options.strategy==="fixed"),popper:Nr(ut)},O.reset=!1,O.placement=O.options.placement,O.orderedModifiers.forEach(function(ct){return O.modifiersData[ct.name]=Object.assign({},ct.data)});for(var U=0;U<O.orderedModifiers.length;U++)if(O.reset!==!0){var lt=O.orderedModifiers[U],Y=lt.fn,tt=lt.options,pt=tt===void 0?{}:tt,dt=lt.name;typeof Y=="function"&&(O=Y({state:O,options:pt,name:dt,instance:W})||O)}else O.reset=!1,U=-1}}},update:(P=function(){return new Promise(function(F){W.forceUpdate(),F(O)})},function(){return L||(L=new Promise(function(F){Promise.resolve().then(function(){L=void 0,F(P())})})),L}),destroy:function(){B(),H=!0}};if(!mo(x,E))return W;function B(){X.forEach(function(F){return F()}),X=[]}return W.setOptions(S).then(function(F){!H&&S.onFirstUpdate&&S.onFirstUpdate(F)}),W}}var Bi=po(),Pr=po({defaultModifiers:[Tr,Wo,Ho,Ro]}),Vo=po({defaultModifiers:[Tr,Wo,Ho,Ro,wt,Dr,In,Pn,jr]});let Ui=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:po,detectOverflow:he,createPopperBase:Bi,createPopper:Vo,createPopperLite:Pr,top:Pt,bottom:Xt,right:Gt,left:Mt,auto:io,basePlacements:Ae,start:Be,end:ao,clippingParents:ji,viewport:Lo,popper:Oe,reference:xr,variationPlacements:$o,placements:zo,beforeRead:Pi,read:Mi,afterRead:Li,beforeMain:Nn,main:wr,afterMain:_r,beforeWrite:$i,write:zi,afterWrite:Sn,modifierPhases:kr,applyStyles:Ro,arrow:Pn,computeStyles:Ho,eventListeners:Tr,flip:Dr,hide:jr,offset:wt,popperOffsets:Wo,preventOverflow:In},Symbol.toStringTag,{value:"Module"})),Wi="dropdown",Va="ArrowUp",Vi="ArrowDown",qi="click.bs.dropdown.data-api",Xi="keydown.bs.dropdown.data-api",uo="show",Me='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',qa=`${Me}.show`,Mr=".dropdown-menu",Hn=Nt()?"top-end":"top-start",Lr=Nt()?"top-start":"top-end",Fn=Nt()?"bottom-end":"bottom-start",Gi=Nt()?"bottom-start":"bottom-end",Yi=Nt()?"left-start":"right-start",qo=Nt()?"right-start":"left-start",_t={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Kt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class bt extends qt{constructor(r,a){super(r,a),this._popper=null,this._parent=this._element.parentNode,this._menu=V.next(this._element,Mr)[0]||V.prev(this._element,Mr)[0]||V.findOne(Mr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return _t}static get DefaultType(){return Kt}static get NAME(){return Wi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(z(this._element)||this._isShown())return;let r={relatedTarget:this._element};if(!C.trigger(this._element,"show.bs.dropdown",r).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(let a of[].concat(...document.body.children))C.on(a,"mouseover",$t);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(uo),this._element.classList.add(uo),C.trigger(this._element,"shown.bs.dropdown",r)}}hide(){if(z(this._element)||!this._isShown())return;let r={relatedTarget:this._element};this._completeHide(r)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(r){if(!C.trigger(this._element,"hide.bs.dropdown",r).defaultPrevented){if("ontouchstart"in document.documentElement)for(let a of[].concat(...document.body.children))C.off(a,"mouseover",$t);this._popper&&this._popper.destroy(),this._menu.classList.remove(uo),this._element.classList.remove(uo),this._element.setAttribute("aria-expanded","false"),oe.removeDataAttribute(this._menu,"popper"),C.trigger(this._element,"hidden.bs.dropdown",r)}}_getConfig(r){if(typeof(r=super._getConfig(r)).reference=="object"&&!A(r.reference)&&typeof r.reference.getBoundingClientRect!="function")throw new TypeError(`${Wi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return r}_createPopper(){if(Ui===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let r=this._element;this._config.reference==="parent"?r=this._parent:A(this._config.reference)?r=T(this._config.reference):typeof this._config.reference=="object"&&(r=this._config.reference);let a=this._getPopperConfig();this._popper=Vo(r,this._menu,a)}_isShown(){return this._menu.classList.contains(uo)}_getPlacement(){let r=this._parent;if(r.classList.contains("dropend"))return Yi;if(r.classList.contains("dropstart"))return qo;if(r.classList.contains("dropup-center"))return"top";if(r.classList.contains("dropdown-center"))return"bottom";let a=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return r.classList.contains("dropup")?a?Lr:Hn:a?Gi:Fn}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){let{offset:r}=this._config;return typeof r=="string"?r.split(",").map(a=>Number.parseInt(a,10)):typeof r=="function"?a=>r(a,this._element):r}_getPopperConfig(){let r={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(oe.setDataAttribute(this._menu,"popper","static"),r.modifiers=[{name:"applyStyles",enabled:!1}]),{...r,...typeof this._config.popperConfig=="function"?this._config.popperConfig(r):this._config.popperConfig}}_selectMenuItem({key:r,target:a}){let c=V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(h=>Z(h));c.length&&un(c,a,r===Vi,!c.includes(a)).focus()}static jQueryInterface(r){return this.each(function(){let a=bt.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0)throw new TypeError(`No method named "${r}"`);a[r]()}})}static clearMenus(r){if(r.button===2||r.type==="keyup"&&r.key!=="Tab")return;let a=V.find(qa);for(let c of a){let h=bt.getInstance(c);if(!h||h._config.autoClose===!1)continue;let b=r.composedPath(),x=b.includes(h._menu);if(b.includes(h._element)||h._config.autoClose==="inside"&&!x||h._config.autoClose==="outside"&&x||h._menu.contains(r.target)&&(r.type==="keyup"&&r.key==="Tab"||/input|select|option|textarea|form/i.test(r.target.tagName)))continue;let E={relatedTarget:h._element};r.type==="click"&&(E.clickEvent=r),h._completeHide(E)}}static dataApiKeydownHandler(r){let a=/input|textarea/i.test(r.target.tagName),c=r.key==="Escape",h=[Va,Vi].includes(r.key);if(!h&&!c||a&&!c)return;r.preventDefault();let b=this.matches(Me)?this:V.prev(this,Me)[0]||V.next(this,Me)[0]||V.findOne(Me,r.delegateTarget.parentNode),x=bt.getOrCreateInstance(b);if(h)return r.stopPropagation(),x.show(),void x._selectMenuItem(r);x._isShown()&&(r.stopPropagation(),x.hide(),b.focus())}}C.on(document,Xi,Me,bt.dataApiKeydownHandler),C.on(document,Xi,Mr,bt.dataApiKeydownHandler),C.on(document,qi,bt.clearMenus),C.on(document,"keyup.bs.dropdown.data-api",bt.clearMenus),C.on(document,qi,Me,function(l){l.preventDefault(),bt.getOrCreateInstance(this).toggle()}),St(bt);let $r=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Bn=".sticky-top",fo="padding-right",zr="margin-right";class Un{constructor(){this._element=document.body}getWidth(){let r=document.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}hide(){let r=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,fo,a=>a+r),this._setElementAttributes($r,fo,a=>a+r),this._setElementAttributes(Bn,zr,a=>a-r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,fo),this._resetElementAttributes($r,fo),this._resetElementAttributes(Bn,zr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(r,a,c){let h=this.getWidth();this._applyManipulationCallback(r,b=>{if(b!==this._element&&window.innerWidth>b.clientWidth+h)return;this._saveInitialAttribute(b,a);let x=window.getComputedStyle(b).getPropertyValue(a);b.style.setProperty(a,`${c(Number.parseFloat(x))}px`)})}_saveInitialAttribute(r,a){let c=r.style.getPropertyValue(a);c&&oe.setDataAttribute(r,a,c)}_resetElementAttributes(r,a){this._applyManipulationCallback(r,c=>{let h=oe.getDataAttribute(c,a);h!==null?(oe.removeDataAttribute(c,a),c.style.setProperty(a,h)):c.style.removeProperty(a)})}_applyManipulationCallback(r,a){if(A(r))a(r);else for(let c of V.find(r,this._element))a(c)}}let Ir="show",Rr="mousedown.bs.backdrop",Wn={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Vn={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class qn extends Do{constructor(r){super(),this._config=this._getConfig(r),this._isAppended=!1,this._element=null}static get Default(){return Wn}static get DefaultType(){return Vn}static get NAME(){return"backdrop"}show(r){if(!this._config.isVisible)return void le(r);this._append();let a=this._getElement();this._config.isAnimated&&nt(a),a.classList.add(Ir),this._emulateAnimation(()=>{le(r)})}hide(r){this._config.isVisible?(this._getElement().classList.remove(Ir),this._emulateAnimation(()=>{this.dispose(),le(r)})):le(r)}dispose(){this._isAppended&&(C.off(this._element,Rr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){let r=document.createElement("div");r.className=this._config.className,this._config.isAnimated&&r.classList.add("fade"),this._element=r}return this._element}_configAfterMerge(r){return r.rootElement=T(r.rootElement),r}_append(){if(this._isAppended)return;let r=this._getElement();this._config.rootElement.append(r),C.on(r,Rr,()=>{le(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(r){pr(r,this._getElement(),this._config.isAnimated)}}let Xn=".bs.focustrap",Gn="backward",Xo={autofocus:!0,trapElement:null},Yn={autofocus:"boolean",trapElement:"element"};class Ki extends Do{constructor(r){super(),this._config=this._getConfig(r),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Xo}static get DefaultType(){return Yn}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),C.off(document,Xn),C.on(document,"focusin.bs.focustrap",r=>this._handleFocusin(r)),C.on(document,"keydown.tab.bs.focustrap",r=>this._handleKeydown(r)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,C.off(document,Xn))}_handleFocusin(r){let{trapElement:a}=this._config;if(r.target===document||r.target===a||a.contains(r.target))return;let c=V.focusableChildren(a);c.length===0?a.focus():this._lastTabNavDirection===Gn?c[c.length-1].focus():c[0].focus()}_handleKeydown(r){r.key==="Tab"&&(this._lastTabNavDirection=r.shiftKey?Gn:"forward")}}let Kn="hidden.bs.modal",Qi="show.bs.modal",Qn="modal-open",Zn="show",ho="modal-static",Xa={backdrop:!0,focus:!0,keyboard:!0},Jn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ye extends qt{constructor(r,a){super(r,a),this._dialog=V.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Un,this._addEventListeners()}static get Default(){return Xa}static get DefaultType(){return Jn}static get NAME(){return"modal"}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||this._isTransitioning||C.trigger(this._element,Qi,{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Qn),this._adjustDialog(),this._backdrop.show(()=>this._showElement(r)))}hide(){this._isShown&&!this._isTransitioning&&(C.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Zn),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){for(let r of[window,this._dialog])C.off(r,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new qn({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ki({trapElement:this._element})}_showElement(r){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let a=V.findOne(".modal-body",this._dialog);a&&(a.scrollTop=0),nt(this._element),this._element.classList.add(Zn),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,C.trigger(this._element,"shown.bs.modal",{relatedTarget:r})},this._dialog,this._isAnimated())}_addEventListeners(){C.on(this._element,"keydown.dismiss.bs.modal",r=>{if(r.key==="Escape")return this._config.keyboard?(r.preventDefault(),void this.hide()):void this._triggerBackdropTransition()}),C.on(window,"resize.bs.modal",()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),C.on(this._element,"mousedown.dismiss.bs.modal",r=>{C.one(this._element,"click.dismiss.bs.modal",a=>{this._element===r.target&&this._element===a.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Qn),this._resetAdjustments(),this._scrollBar.reset(),C.trigger(this._element,Kn)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(C.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;let r=this._element.scrollHeight>document.documentElement.clientHeight,a=this._element.style.overflowY;a==="hidden"||this._element.classList.contains(ho)||(r||(this._element.style.overflowY="hidden"),this._element.classList.add(ho),this._queueCallback(()=>{this._element.classList.remove(ho),this._queueCallback(()=>{this._element.style.overflowY=a},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let r=this._element.scrollHeight>document.documentElement.clientHeight,a=this._scrollBar.getWidth(),c=a>0;if(c&&!r){let h=Nt()?"paddingLeft":"paddingRight";this._element.style[h]=`${a}px`}if(!c&&r){let h=Nt()?"paddingRight":"paddingLeft";this._element.style[h]=`${a}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(r,a){return this.each(function(){let c=ye.getOrCreateInstance(this,r);if(typeof r=="string"){if(c[r]===void 0)throw new TypeError(`No method named "${r}"`);c[r](a)}})}}C.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(l){let r=v(this);["A","AREA"].includes(this.tagName)&&l.preventDefault(),C.one(r,Qi,c=>{c.defaultPrevented||C.one(r,Kn,()=>{Z(this)&&this.focus()})});let a=V.findOne(".modal.show");a&&ye.getInstance(a).hide(),ye.getOrCreateInstance(r).toggle(this)}),br(ye),St(ye);let ti="show",Hr="showing",ei="hiding",oi=".offcanvas.show",ri="hidePrevented.bs.offcanvas",ni="hidden.bs.offcanvas",Zi={backdrop:!0,keyboard:!0,scroll:!1},Ji={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ge extends qt{constructor(r,a){super(r,a),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Zi}static get DefaultType(){return Ji}static get NAME(){return"offcanvas"}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||C.trigger(this._element,"show.bs.offcanvas",{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Un().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Hr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(ti),this._element.classList.remove(Hr),C.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:r})},this._element,!0))}hide(){this._isShown&&(C.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ei),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(ti,ei),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Un().reset(),C.trigger(this._element,ni)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let r=Boolean(this._config.backdrop);return new qn({className:"offcanvas-backdrop",isVisible:r,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:r?()=>{this._config.backdrop!=="static"?this.hide():C.trigger(this._element,ri)}:null})}_initializeFocusTrap(){return new Ki({trapElement:this._element})}_addEventListeners(){C.on(this._element,"keydown.dismiss.bs.offcanvas",r=>{r.key==="Escape"&&(this._config.keyboard?this.hide():C.trigger(this._element,ri))})}static jQueryInterface(r){return this.each(function(){let a=ge.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r](this)}})}}C.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(l){let r=v(this);if(["A","AREA"].includes(this.tagName)&&l.preventDefault(),z(this))return;C.one(r,ni,()=>{Z(this)&&this.focus()});let a=V.findOne(oi);a&&a!==r&&ge.getInstance(a).hide(),ge.getOrCreateInstance(r).toggle(this)}),C.on(window,"load.bs.offcanvas.data-api",()=>{for(let l of V.find(oi))ge.getOrCreateInstance(l).show()}),C.on(window,"resize.bs.offcanvas",()=>{for(let l of V.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(l).position!=="fixed"&&ge.getOrCreateInstance(l).hide()}),br(ge),St(ge);let ii=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),ai=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ga=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,ta=(l,r)=>{let a=l.nodeName.toLowerCase();return r.includes(a)?!ii.has(a)||Boolean(ai.test(l.nodeValue)||Ga.test(l.nodeValue)):r.filter(c=>c instanceof RegExp).some(c=>c.test(a))},Fr={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ya={allowList:Fr,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ka={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Qa={entry:"(string|element|function|null)",selector:"(string|element)"};class Za extends Do{constructor(r){super(),this._config=this._getConfig(r)}static get Default(){return Ya}static get DefaultType(){return Ka}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(r=>this._resolvePossibleFunction(r)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(r){return this._checkContent(r),this._config.content={...this._config.content,...r},this}toHtml(){let r=document.createElement("div");r.innerHTML=this._maybeSanitize(this._config.template);for(let[h,b]of Object.entries(this._config.content))this._setContent(r,b,h);let a=r.children[0],c=this._resolvePossibleFunction(this._config.extraClass);return c&&a.classList.add(...c.split(" ")),a}_typeCheckConfig(r){super._typeCheckConfig(r),this._checkContent(r.content)}_checkContent(r){for(let[a,c]of Object.entries(r))super._typeCheckConfig({selector:a,entry:c},Qa)}_setContent(r,a,c){let h=V.findOne(c,r);h&&((a=this._resolvePossibleFunction(a))?A(a)?this._putElementInTemplate(T(a),h):this._config.html?h.innerHTML=this._maybeSanitize(a):h.textContent=a:h.remove())}_maybeSanitize(r){return this._config.sanitize?function(a,c,h){if(!a.length)return a;if(h&&typeof h=="function")return h(a);let b=new window.DOMParser().parseFromString(a,"text/html"),x=[].concat(...b.body.querySelectorAll("*"));for(let E of x){let S=E.nodeName.toLowerCase();if(!Object.keys(c).includes(S)){E.remove();continue}let P=[].concat(...E.attributes),L=[].concat(c["*"]||[],c[S]||[]);for(let O of P)ta(O,L)||E.removeAttribute(O.nodeName)}return b.body.innerHTML}(r,this._config.allowList,this._config.sanitizeFn):r}_resolvePossibleFunction(r){return typeof r=="function"?r(this):r}_putElementInTemplate(r,a){if(this._config.html)return a.innerHTML="",void a.append(r);a.textContent=r.textContent}}let ea=new Set(["sanitize","allowList","sanitizeFn"]),Br="fade",Go="show",go=".modal",oa="hide.bs.modal",Ur="hover",Wr="focus",si={AUTO:"auto",TOP:"top",RIGHT:Nt()?"left":"right",BOTTOM:"bottom",LEFT:Nt()?"right":"left"},Xe={allowList:Fr,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ra={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Le extends qt{constructor(r,a){if(Ui===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(r,a),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Xe}static get DefaultType(){return ra}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),C.off(this._element.closest(go),oa,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;let r=C.trigger(this._element,this.constructor.eventName("show")),a=(Q(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(r.defaultPrevented||!a)return;this._disposePopper();let c=this._getTipElement();this._element.setAttribute("aria-describedby",c.getAttribute("id"));let{container:h}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(h.append(c),C.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(c),c.classList.add(Go),"ontouchstart"in document.documentElement)for(let b of[].concat(...document.body.children))C.on(b,"mouseover",$t);this._queueCallback(()=>{C.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!C.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Go),"ontouchstart"in document.documentElement)for(let r of[].concat(...document.body.children))C.off(r,"mouseover",$t);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),C.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(r){let a=this._getTemplateFactory(r).toHtml();if(!a)return null;a.classList.remove(Br,Go),a.classList.add(`bs-${this.constructor.NAME}-auto`);let c=(h=>{do h+=Math.floor(1e6*Math.random());while(document.getElementById(h));return h})(this.constructor.NAME).toString();return a.setAttribute("id",c),this._isAnimated()&&a.classList.add(Br),a}setContent(r){this._newContent=r,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(r){return this._templateFactory?this._templateFactory.changeContent(r):this._templateFactory=new Za({...this._config,content:r,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(r){return this.constructor.getOrCreateInstance(r.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Br)}_isShown(){return this.tip&&this.tip.classList.contains(Go)}_createPopper(r){let a=typeof this._config.placement=="function"?this._config.placement.call(this,r,this._element):this._config.placement,c=si[a.toUpperCase()];return Vo(this._element,r,this._getPopperConfig(c))}_getOffset(){let{offset:r}=this._config;return typeof r=="string"?r.split(",").map(a=>Number.parseInt(a,10)):typeof r=="function"?a=>r(a,this._element):r}_resolvePossibleFunction(r){return typeof r=="function"?r.call(this._element):r}_getPopperConfig(r){let a={placement:r,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:c=>{this._getTipElement().setAttribute("data-popper-placement",c.state.placement)}}]};return{...a,...typeof this._config.popperConfig=="function"?this._config.popperConfig(a):this._config.popperConfig}}_setListeners(){let r=this._config.trigger.split(" ");for(let a of r)if(a==="click")C.on(this._element,this.constructor.eventName("click"),this._config.selector,c=>{this._initializeOnDelegatedTarget(c).toggle()});else if(a!=="manual"){let c=a===Ur?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),h=a===Ur?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");C.on(this._element,c,this._config.selector,b=>{let x=this._initializeOnDelegatedTarget(b);x._activeTrigger[b.type==="focusin"?Wr:Ur]=!0,x._enter()}),C.on(this._element,h,this._config.selector,b=>{let x=this._initializeOnDelegatedTarget(b);x._activeTrigger[b.type==="focusout"?Wr:Ur]=x._element.contains(b.relatedTarget),x._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},C.on(this._element.closest(go),oa,this._hideModalHandler)}_fixTitle(){let r=this._element.getAttribute("title");r&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",r),this._element.setAttribute("data-bs-original-title",r),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(r,a){clearTimeout(this._timeout),this._timeout=setTimeout(r,a)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(r){let a=oe.getDataAttributes(this._element);for(let c of Object.keys(a))ea.has(c)&&delete a[c];return r={...a,...typeof r=="object"&&r?r:{}},r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r.container=r.container===!1?document.body:T(r.container),typeof r.delay=="number"&&(r.delay={show:r.delay,hide:r.delay}),typeof r.title=="number"&&(r.title=r.title.toString()),typeof r.content=="number"&&(r.content=r.content.toString()),r}_getDelegateConfig(){let r={};for(let a in this._config)this.constructor.Default[a]!==this._config[a]&&(r[a]=this._config[a]);return r.selector=!1,r.trigger="manual",r}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(r){return this.each(function(){let a=Le.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0)throw new TypeError(`No method named "${r}"`);a[r]()}})}}St(Le);let na={...Le.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Vr={...Le.DefaultType,content:"(null|string|element|function)"};class bo extends Le{static get Default(){return na}static get DefaultType(){return Vr}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(r){return this.each(function(){let a=bo.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0)throw new TypeError(`No method named "${r}"`);a[r]()}})}}St(bo);let qr="click.bs.scrollspy",Ge="active",li="[href]",ia={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},di={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class vo extends qt{constructor(r,a){super(r,a),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ia}static get DefaultType(){return di}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let r of this._observableSections.values())this._observer.observe(r)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(r){return r.target=T(r.target)||document.body,r.rootMargin=r.offset?`${r.offset}px 0px -30%`:r.rootMargin,typeof r.threshold=="string"&&(r.threshold=r.threshold.split(",").map(a=>Number.parseFloat(a))),r}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(C.off(this._config.target,qr),C.on(this._config.target,qr,li,r=>{let a=this._observableSections.get(r.target.hash);if(a){r.preventDefault();let c=this._rootElement||window,h=a.offsetTop-this._element.offsetTop;if(c.scrollTo)return void c.scrollTo({top:h,behavior:"smooth"});c.scrollTop=h}}))}_getNewObserver(){let r={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(a=>this._observerCallback(a),r)}_observerCallback(r){let a=x=>this._targetLinks.get(`#${x.target.id}`),c=x=>{this._previousScrollData.visibleEntryTop=x.target.offsetTop,this._process(a(x))},h=(this._rootElement||document.documentElement).scrollTop,b=h>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=h;for(let x of r){if(!x.isIntersecting){this._activeTarget=null,this._clearActiveClass(a(x));continue}let E=x.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(b&&E){if(c(x),!h)return}else b||E||c(x)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let r=V.find(li,this._config.target);for(let a of r){if(!a.hash||z(a))continue;let c=V.findOne(a.hash,this._element);Z(c)&&(this._targetLinks.set(a.hash,a),this._observableSections.set(a.hash,c))}}_process(r){this._activeTarget!==r&&(this._clearActiveClass(this._config.target),this._activeTarget=r,r.classList.add(Ge),this._activateParents(r),C.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:r}))}_activateParents(r){if(r.classList.contains("dropdown-item"))V.findOne(".dropdown-toggle",r.closest(".dropdown")).classList.add(Ge);else for(let a of V.parents(r,".nav, .list-group"))for(let c of V.prev(a,".nav-link, .nav-item > .nav-link, .list-group-item"))c.classList.add(Ge)}_clearActiveClass(r){r.classList.remove(Ge);let a=V.find("[href].active",r);for(let c of a)c.classList.remove(Ge)}static jQueryInterface(r){return this.each(function(){let a=vo.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r]()}})}}C.on(window,"load.bs.scrollspy.data-api",()=>{for(let l of V.find('[data-bs-spy="scroll"]'))vo.getOrCreateInstance(l)}),St(vo);let aa="ArrowLeft",ci="ArrowRight",Xr="ArrowUp",yo="ArrowDown",xo="active",mi="fade",pi="show",Yo='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Gr=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Yo}`;class be extends qt{constructor(r){super(r),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),C.on(this._element,"keydown.bs.tab",a=>this._keydown(a)))}static get NAME(){return"tab"}show(){let r=this._element;if(this._elemIsActive(r))return;let a=this._getActiveElem(),c=a?C.trigger(a,"hide.bs.tab",{relatedTarget:r}):null;C.trigger(r,"show.bs.tab",{relatedTarget:a}).defaultPrevented||c&&c.defaultPrevented||(this._deactivate(a,r),this._activate(r,a))}_activate(r,a){r&&(r.classList.add(xo),this._activate(v(r)),this._queueCallback(()=>{r.getAttribute("role")==="tab"?(r.removeAttribute("tabindex"),r.setAttribute("aria-selected",!0),this._toggleDropDown(r,!0),C.trigger(r,"shown.bs.tab",{relatedTarget:a})):r.classList.add(pi)},r,r.classList.contains(mi)))}_deactivate(r,a){r&&(r.classList.remove(xo),r.blur(),this._deactivate(v(r)),this._queueCallback(()=>{r.getAttribute("role")==="tab"?(r.setAttribute("aria-selected",!1),r.setAttribute("tabindex","-1"),this._toggleDropDown(r,!1),C.trigger(r,"hidden.bs.tab",{relatedTarget:a})):r.classList.remove(pi)},r,r.classList.contains(mi)))}_keydown(r){if(![aa,ci,Xr,yo].includes(r.key))return;r.stopPropagation(),r.preventDefault();let a=[ci,yo].includes(r.key),c=un(this._getChildren().filter(h=>!z(h)),r.target,a,!0);c&&(c.focus({preventScroll:!0}),be.getOrCreateInstance(c).show())}_getChildren(){return V.find(Gr,this._parent)}_getActiveElem(){return this._getChildren().find(r=>this._elemIsActive(r))||null}_setInitialAttributes(r,a){this._setAttributeIfNotExists(r,"role","tablist");for(let c of a)this._setInitialAttributesOnChild(c)}_setInitialAttributesOnChild(r){r=this._getInnerElement(r);let a=this._elemIsActive(r),c=this._getOuterElement(r);r.setAttribute("aria-selected",a),c!==r&&this._setAttributeIfNotExists(c,"role","presentation"),a||r.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(r,"role","tab"),this._setInitialAttributesOnTargetPanel(r)}_setInitialAttributesOnTargetPanel(r){let a=v(r);a&&(this._setAttributeIfNotExists(a,"role","tabpanel"),r.id&&this._setAttributeIfNotExists(a,"aria-labelledby",`#${r.id}`))}_toggleDropDown(r,a){let c=this._getOuterElement(r);if(!c.classList.contains("dropdown"))return;let h=(b,x)=>{let E=V.findOne(b,c);E&&E.classList.toggle(x,a)};h(".dropdown-toggle",xo),h(".dropdown-menu",pi),c.setAttribute("aria-expanded",a)}_setAttributeIfNotExists(r,a,c){r.hasAttribute(a)||r.setAttribute(a,c)}_elemIsActive(r){return r.classList.contains(xo)}_getInnerElement(r){return r.matches(Gr)?r:V.findOne(Gr,r)}_getOuterElement(r){return r.closest(".nav-item, .list-group-item")||r}static jQueryInterface(r){return this.each(function(){let a=be.getOrCreateInstance(this);if(typeof r=="string"){if(a[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);a[r]()}})}}C.on(document,"click.bs.tab",Yo,function(l){["A","AREA"].includes(this.tagName)&&l.preventDefault(),z(this)||be.getOrCreateInstance(this).show()}),C.on(window,"load.bs.tab",()=>{for(let l of V.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))be.getOrCreateInstance(l)}),St(be);let Ye="hide",Ko="show",de="showing",Ja={animation:"boolean",autohide:"boolean",delay:"number"},sa={animation:!0,autohide:!0,delay:5e3};class wo extends qt{constructor(r,a){super(r,a),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return sa}static get DefaultType(){return Ja}static get NAME(){return"toast"}show(){C.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ye),nt(this._element),this._element.classList.add(Ko,de),this._queueCallback(()=>{this._element.classList.remove(de),C.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(C.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(de),this._queueCallback(()=>{this._element.classList.add(Ye),this._element.classList.remove(de,Ko),C.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ko),super.dispose()}isShown(){return this._element.classList.contains(Ko)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(r,a){switch(r.type){case"mouseover":case"mouseout":this._hasMouseInteraction=a;break;case"focusin":case"focusout":this._hasKeyboardInteraction=a}if(a)return void this._clearTimeout();let c=r.relatedTarget;this._element===c||this._element.contains(c)||this._maybeScheduleHide()}_setListeners(){C.on(this._element,"mouseover.bs.toast",r=>this._onInteraction(r,!0)),C.on(this._element,"mouseout.bs.toast",r=>this._onInteraction(r,!1)),C.on(this._element,"focusin.bs.toast",r=>this._onInteraction(r,!0)),C.on(this._element,"focusout.bs.toast",r=>this._onInteraction(r,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(r){return this.each(function(){let a=wo.getOrCreateInstance(this,r);if(typeof r=="string"){if(a[r]===void 0)throw new TypeError(`No method named "${r}"`);a[r](this)}})}}return br(wo),St(wo),{Alert:He,Button:eo,Carousel:Se,Collapse:Te,Dropdown:bt,Modal:ye,Offcanvas:ge,Popover:bo,ScrollSpy:vo,Tab:be,Toast:wo,Tooltip:Le}})});var Vm=cd(ud());var $a=window,za=$a.ShadowRoot&&($a.ShadyCSS===void 0||$a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$s=Symbol(),fd=new WeakMap,_i=class{constructor(m,u,v){if(this._$cssResult$=!0,v!==$s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=m,this.t=u}get styleSheet(){let m=this.o,u=this.t;if(za&&m===void 0){let v=u!==void 0&&u.length===1;v&&(m=fd.get(u)),m===void 0&&((this.o=m=new CSSStyleSheet).replaceSync(this.cssText),v&&fd.set(u,m))}return m}toString(){return this.cssText}},hd=y=>new _i(typeof y=="string"?y:y+"",void 0,$s),ki=(y,...m)=>{let u=y.length===1?y[0]:m.reduce((v,_,A)=>v+(T=>{if(T._$cssResult$===!0)return T.cssText;if(typeof T=="number")return T;throw Error("Value passed to 'css' function must be a 'css' function result: "+T+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(_)+y[A+1],y[0]);return new _i(u,y,$s)},zs=(y,m)=>{za?y.adoptedStyleSheets=m.map(u=>u instanceof CSSStyleSheet?u:u.styleSheet):m.forEach(u=>{let v=document.createElement("style"),_=$a.litNonce;_!==void 0&&v.setAttribute("nonce",_),v.textContent=u.cssText,y.appendChild(v)})},Ia=za?y=>y:y=>y instanceof CSSStyleSheet?(m=>{let u="";for(let v of m.cssRules)u+=v.cssText;return hd(u)})(y):y;var Is,Ra=window,gd=Ra.trustedTypes,Ic=gd?gd.emptyScript:"",bd=Ra.reactiveElementPolyfillSupport,Hs={toAttribute(y,m){switch(m){case Boolean:y=y?Ic:null;break;case Object:case Array:y=y==null?y:JSON.stringify(y)}return y},fromAttribute(y,m){let u=y;switch(m){case Boolean:u=y!==null;break;case Number:u=y===null?null:Number(y);break;case Object:case Array:try{u=JSON.parse(y)}catch{u=null}}return u}},vd=(y,m)=>m!==y&&(m==m||y==y),Rs={attribute:!0,type:String,converter:Hs,reflect:!1,hasChanged:vd},Ze=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(m){var u;this.finalize(),((u=this.h)!==null&&u!==void 0?u:this.h=[]).push(m)}static get observedAttributes(){this.finalize();let m=[];return this.elementProperties.forEach((u,v)=>{let _=this._$Ep(v,u);_!==void 0&&(this._$Ev.set(_,v),m.push(_))}),m}static createProperty(m,u=Rs){if(u.state&&(u.attribute=!1),this.finalize(),this.elementProperties.set(m,u),!u.noAccessor&&!this.prototype.hasOwnProperty(m)){let v=typeof m=="symbol"?Symbol():"__"+m,_=this.getPropertyDescriptor(m,v,u);_!==void 0&&Object.defineProperty(this.prototype,m,_)}}static getPropertyDescriptor(m,u,v){return{get(){return this[u]},set(_){let A=this[m];this[u]=_,this.requestUpdate(m,A,v)},configurable:!0,enumerable:!0}}static getPropertyOptions(m){return this.elementProperties.get(m)||Rs}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let m=Object.getPrototypeOf(this);if(m.finalize(),m.h!==void 0&&(this.h=[...m.h]),this.elementProperties=new Map(m.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let u=this.properties,v=[...Object.getOwnPropertyNames(u),...Object.getOwnPropertySymbols(u)];for(let _ of v)this.createProperty(_,u[_])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(m){let u=[];if(Array.isArray(m)){let v=new Set(m.flat(1/0).reverse());for(let _ of v)u.unshift(Ia(_))}else m!==void 0&&u.push(Ia(m));return u}static _$Ep(m,u){let v=u.attribute;return v===!1?void 0:typeof v=="string"?v:typeof m=="string"?m.toLowerCase():void 0}u(){var m;this._$E_=new Promise(u=>this.enableUpdating=u),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(m=this.constructor.h)===null||m===void 0||m.forEach(u=>u(this))}addController(m){var u,v;((u=this._$ES)!==null&&u!==void 0?u:this._$ES=[]).push(m),this.renderRoot!==void 0&&this.isConnected&&((v=m.hostConnected)===null||v===void 0||v.call(m))}removeController(m){var u;(u=this._$ES)===null||u===void 0||u.splice(this._$ES.indexOf(m)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((m,u)=>{this.hasOwnProperty(u)&&(this._$Ei.set(u,this[u]),delete this[u])})}createRenderRoot(){var m;let u=(m=this.shadowRoot)!==null&&m!==void 0?m:this.attachShadow(this.constructor.shadowRootOptions);return zs(u,this.constructor.elementStyles),u}connectedCallback(){var m;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(m=this._$ES)===null||m===void 0||m.forEach(u=>{var v;return(v=u.hostConnected)===null||v===void 0?void 0:v.call(u)})}enableUpdating(m){}disconnectedCallback(){var m;(m=this._$ES)===null||m===void 0||m.forEach(u=>{var v;return(v=u.hostDisconnected)===null||v===void 0?void 0:v.call(u)})}attributeChangedCallback(m,u,v){this._$AK(m,v)}_$EO(m,u,v=Rs){var _;let A=this.constructor._$Ep(m,v);if(A!==void 0&&v.reflect===!0){let T=(((_=v.converter)===null||_===void 0?void 0:_.toAttribute)!==void 0?v.converter:Hs).toAttribute(u,v.type);this._$El=m,T==null?this.removeAttribute(A):this.setAttribute(A,T),this._$El=null}}_$AK(m,u){var v;let _=this.constructor,A=_._$Ev.get(m);if(A!==void 0&&this._$El!==A){let T=_.getPropertyOptions(A),Z=typeof T.converter=="function"?{fromAttribute:T.converter}:((v=T.converter)===null||v===void 0?void 0:v.fromAttribute)!==void 0?T.converter:Hs;this._$El=A,this[A]=Z.fromAttribute(u,T.type),this._$El=null}}requestUpdate(m,u,v){let _=!0;m!==void 0&&(((v=v||this.constructor.getPropertyOptions(m)).hasChanged||vd)(this[m],u)?(this._$AL.has(m)||this._$AL.set(m,u),v.reflect===!0&&this._$El!==m&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(m,v))):_=!1),!this.isUpdatePending&&_&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(u){Promise.reject(u)}let m=this.scheduleUpdate();return m!=null&&await m,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var m;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((_,A)=>this[A]=_),this._$Ei=void 0);let u=!1,v=this._$AL;try{u=this.shouldUpdate(v),u?(this.willUpdate(v),(m=this._$ES)===null||m===void 0||m.forEach(_=>{var A;return(A=_.hostUpdate)===null||A===void 0?void 0:A.call(_)}),this.update(v)):this._$Ek()}catch(_){throw u=!1,this._$Ek(),_}u&&this._$AE(v)}willUpdate(m){}_$AE(m){var u;(u=this._$ES)===null||u===void 0||u.forEach(v=>{var _;return(_=v.hostUpdated)===null||_===void 0?void 0:_.call(v)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(m)),this.updated(m)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(m){return!0}update(m){this._$EC!==void 0&&(this._$EC.forEach((u,v)=>this._$EO(v,this[v],u)),this._$EC=void 0),this._$Ek()}updated(m){}firstUpdated(m){}};Ze.finalized=!0,Ze.elementProperties=new Map,Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},bd?.({ReactiveElement:Ze}),((Is=Ra.reactiveElementVersions)!==null&&Is!==void 0?Is:Ra.reactiveElementVersions=[]).push("1.6.1");var Fs,Ha=window,dn=Ha.trustedTypes,yd=dn?dn.createPolicy("lit-html",{createHTML:y=>y}):void 0,No=`lit$${(Math.random()+"").slice(9)}$`,Nd="?"+No,Rc=`<${Nd}>`,cn=document,Ci=(y="")=>cn.createComment(y),Ni=y=>y===null||typeof y!="object"&&typeof y!="function",Sd=Array.isArray,Hc=y=>Sd(y)||typeof y?.[Symbol.iterator]=="function",Ei=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xd=/-->/g,wd=/>/g,sr=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_d=/'/g,kd=/"/g,Td=/^(?:script|style|textarea|title)$/i,Ad=y=>(m,...u)=>({_$litType$:y,strings:m,values:u}),Je=Ad(1),Jc=Ad(2),lr=Symbol.for("lit-noChange"),Bt=Symbol.for("lit-nothing"),Ed=new WeakMap,ln=cn.createTreeWalker(cn,129,null,!1),Fc=(y,m)=>{let u=y.length-1,v=[],_,A=m===2?"<svg>":"",T=Ei;for(let z=0;z<u;z++){let Q=y[z],$t,nt,gt=-1,zt=0;for(;zt<Q.length&&(T.lastIndex=zt,nt=T.exec(Q),nt!==null);)zt=T.lastIndex,T===Ei?nt[1]==="!--"?T=xd:nt[1]!==void 0?T=wd:nt[2]!==void 0?(Td.test(nt[2])&&(_=RegExp("</"+nt[2],"g")),T=sr):nt[3]!==void 0&&(T=sr):T===sr?nt[0]===">"?(T=_??Ei,gt=-1):nt[1]===void 0?gt=-2:(gt=T.lastIndex-nt[2].length,$t=nt[1],T=nt[3]===void 0?sr:nt[3]==='"'?kd:_d):T===kd||T===_d?T=sr:T===xd||T===wd?T=Ei:(T=sr,_=void 0);let Nt=T===sr&&y[z+1].startsWith("/>")?" ":"";A+=T===Ei?Q+Rc:gt>=0?(v.push($t),Q.slice(0,gt)+"$lit$"+Q.slice(gt)+No+Nt):Q+No+(gt===-2?(v.push(void 0),z):Nt)}let Z=A+(y[u]||"<?>")+(m===2?"</svg>":"");if(!Array.isArray(y)||!y.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yd!==void 0?yd.createHTML(Z):Z,v]},dr=class{constructor({strings:m,_$litType$:u},v){let _;this.parts=[];let A=0,T=0,Z=m.length-1,z=this.parts,[Q,$t]=Fc(m,u);if(this.el=dr.createElement(Q,v),ln.currentNode=this.el.content,u===2){let nt=this.el.content,gt=nt.firstChild;gt.remove(),nt.append(...gt.childNodes)}for(;(_=ln.nextNode())!==null&&z.length<Z;){if(_.nodeType===1){if(_.hasAttributes()){let nt=[];for(let gt of _.getAttributeNames())if(gt.endsWith("$lit$")||gt.startsWith(No)){let zt=$t[T++];if(nt.push(gt),zt!==void 0){let Nt=_.getAttribute(zt.toLowerCase()+"$lit$").split(No),St=/([.?@])?(.*)/.exec(zt);z.push({type:1,index:A,name:St[2],strings:Nt,ctor:St[1]==="."?Us:St[1]==="?"?Ws:St[1]==="@"?Vs:pn})}else z.push({type:6,index:A})}for(let gt of nt)_.removeAttribute(gt)}if(Td.test(_.tagName)){let nt=_.textContent.split(No),gt=nt.length-1;if(gt>0){_.textContent=dn?dn.emptyScript:"";for(let zt=0;zt<gt;zt++)_.append(nt[zt],Ci()),ln.nextNode(),z.push({type:2,index:++A});_.append(nt[gt],Ci())}}}else if(_.nodeType===8)if(_.data===Nd)z.push({type:2,index:A});else{let nt=-1;for(;(nt=_.data.indexOf(No,nt+1))!==-1;)z.push({type:7,index:A}),nt+=No.length-1}A++}}static createElement(m,u){let v=cn.createElement("template");return v.innerHTML=m,v}};function mn(y,m,u=y,v){var _,A,T,Z;if(m===lr)return m;let z=v!==void 0?(_=u._$Co)===null||_===void 0?void 0:_[v]:u._$Cl,Q=Ni(m)?void 0:m._$litDirective$;return z?.constructor!==Q&&((A=z?._$AO)===null||A===void 0||A.call(z,!1),Q===void 0?z=void 0:(z=new Q(y),z._$AT(y,u,v)),v!==void 0?((T=(Z=u)._$Co)!==null&&T!==void 0?T:Z._$Co=[])[v]=z:u._$Cl=z),z!==void 0&&(m=mn(y,z._$AS(y,m.values),z,v)),m}var Bs=class{constructor(m,u){this.u=[],this._$AN=void 0,this._$AD=m,this._$AM=u}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(m){var u;let{el:{content:v},parts:_}=this._$AD,A=((u=m?.creationScope)!==null&&u!==void 0?u:cn).importNode(v,!0);ln.currentNode=A;let T=ln.nextNode(),Z=0,z=0,Q=_[0];for(;Q!==void 0;){if(Z===Q.index){let $t;Q.type===2?$t=new cr(T,T.nextSibling,this,m):Q.type===1?$t=new Q.ctor(T,Q.name,Q.strings,this,m):Q.type===6&&($t=new qs(T,this,m)),this.u.push($t),Q=_[++z]}Z!==Q?.index&&(T=ln.nextNode(),Z++)}return A}p(m){let u=0;for(let v of this.u)v!==void 0&&(v.strings!==void 0?(v._$AI(m,v,u),u+=v.strings.length-2):v._$AI(m[u])),u++}},cr=class{constructor(m,u,v,_){var A;this.type=2,this._$AH=Bt,this._$AN=void 0,this._$AA=m,this._$AB=u,this._$AM=v,this.options=_,this._$Cm=(A=_?.isConnected)===null||A===void 0||A}get _$AU(){var m,u;return(u=(m=this._$AM)===null||m===void 0?void 0:m._$AU)!==null&&u!==void 0?u:this._$Cm}get parentNode(){let m=this._$AA.parentNode,u=this._$AM;return u!==void 0&&m.nodeType===11&&(m=u.parentNode),m}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(m,u=this){m=mn(this,m,u),Ni(m)?m===Bt||m==null||m===""?(this._$AH!==Bt&&this._$AR(),this._$AH=Bt):m!==this._$AH&&m!==lr&&this.g(m):m._$litType$!==void 0?this.$(m):m.nodeType!==void 0?this.T(m):Hc(m)?this.k(m):this.g(m)}O(m,u=this._$AB){return this._$AA.parentNode.insertBefore(m,u)}T(m){this._$AH!==m&&(this._$AR(),this._$AH=this.O(m))}g(m){this._$AH!==Bt&&Ni(this._$AH)?this._$AA.nextSibling.data=m:this.T(cn.createTextNode(m)),this._$AH=m}$(m){var u;let{values:v,_$litType$:_}=m,A=typeof _=="number"?this._$AC(m):(_.el===void 0&&(_.el=dr.createElement(_.h,this.options)),_);if(((u=this._$AH)===null||u===void 0?void 0:u._$AD)===A)this._$AH.p(v);else{let T=new Bs(A,this),Z=T.v(this.options);T.p(v),this.T(Z),this._$AH=T}}_$AC(m){let u=Ed.get(m.strings);return u===void 0&&Ed.set(m.strings,u=new dr(m)),u}k(m){Sd(this._$AH)||(this._$AH=[],this._$AR());let u=this._$AH,v,_=0;for(let A of m)_===u.length?u.push(v=new cr(this.O(Ci()),this.O(Ci()),this,this.options)):v=u[_],v._$AI(A),_++;_<u.length&&(this._$AR(v&&v._$AB.nextSibling,_),u.length=_)}_$AR(m=this._$AA.nextSibling,u){var v;for((v=this._$AP)===null||v===void 0||v.call(this,!1,!0,u);m&&m!==this._$AB;){let _=m.nextSibling;m.remove(),m=_}}setConnected(m){var u;this._$AM===void 0&&(this._$Cm=m,(u=this._$AP)===null||u===void 0||u.call(this,m))}},pn=class{constructor(m,u,v,_,A){this.type=1,this._$AH=Bt,this._$AN=void 0,this.element=m,this.name=u,this._$AM=_,this.options=A,v.length>2||v[0]!==""||v[1]!==""?(this._$AH=Array(v.length-1).fill(new String),this.strings=v):this._$AH=Bt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(m,u=this,v,_){let A=this.strings,T=!1;if(A===void 0)m=mn(this,m,u,0),T=!Ni(m)||m!==this._$AH&&m!==lr,T&&(this._$AH=m);else{let Z=m,z,Q;for(m=A[0],z=0;z<A.length-1;z++)Q=mn(this,Z[v+z],u,z),Q===lr&&(Q=this._$AH[z]),T||(T=!Ni(Q)||Q!==this._$AH[z]),Q===Bt?m=Bt:m!==Bt&&(m+=(Q??"")+A[z+1]),this._$AH[z]=Q}T&&!_&&this.j(m)}j(m){m===Bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,m??"")}},Us=class extends pn{constructor(){super(...arguments),this.type=3}j(m){this.element[this.name]=m===Bt?void 0:m}},Bc=dn?dn.emptyScript:"",Ws=class extends pn{constructor(){super(...arguments),this.type=4}j(m){m&&m!==Bt?this.element.setAttribute(this.name,Bc):this.element.removeAttribute(this.name)}},Vs=class extends pn{constructor(m,u,v,_,A){super(m,u,v,_,A),this.type=5}_$AI(m,u=this){var v;if((m=(v=mn(this,m,u,0))!==null&&v!==void 0?v:Bt)===lr)return;let _=this._$AH,A=m===Bt&&_!==Bt||m.capture!==_.capture||m.once!==_.once||m.passive!==_.passive,T=m!==Bt&&(_===Bt||A);A&&this.element.removeEventListener(this.name,this,_),T&&this.element.addEventListener(this.name,this,m),this._$AH=m}handleEvent(m){var u,v;typeof this._$AH=="function"?this._$AH.call((v=(u=this.options)===null||u===void 0?void 0:u.host)!==null&&v!==void 0?v:this.element,m):this._$AH.handleEvent(m)}},qs=class{constructor(m,u,v){this.element=m,this.type=6,this._$AN=void 0,this._$AM=u,this.options=v}get _$AU(){return this._$AM._$AU}_$AI(m){mn(this,m)}};var Cd=Ha.litHtmlPolyfillSupport;Cd?.(dr,cr),((Fs=Ha.litHtmlVersions)!==null&&Fs!==void 0?Fs:Ha.litHtmlVersions=[]).push("2.6.1");var Od=(y,m,u)=>{var v,_;let A=(v=u?.renderBefore)!==null&&v!==void 0?v:m,T=A._$litPart$;if(T===void 0){let Z=(_=u?.renderBefore)!==null&&_!==void 0?_:null;A._$litPart$=T=new cr(m.insertBefore(Ci(),Z),Z,void 0,u??{})}return T._$AI(y),T};var Xs,Gs;var So=class extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var m,u;let v=super.createRenderRoot();return(m=(u=this.renderOptions).renderBefore)!==null&&m!==void 0||(u.renderBefore=v.firstChild),v}update(m){let u=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(m),this._$Do=Od(u,this.renderRoot,this.renderOptions)}connectedCallback(){var m;super.connectedCallback(),(m=this._$Do)===null||m===void 0||m.setConnected(!0)}disconnectedCallback(){var m;super.disconnectedCallback(),(m=this._$Do)===null||m===void 0||m.setConnected(!1)}render(){return lr}};So.finalized=!0,So._$litElement$=!0,(Xs=globalThis.litElementHydrateSupport)===null||Xs===void 0||Xs.call(globalThis,{LitElement:So});var Dd=globalThis.litElementPolyfillSupport;Dd?.({LitElement:So});((Gs=globalThis.litElementVersions)!==null&&Gs!==void 0?Gs:globalThis.litElementVersions=[]).push("3.2.2");var jd=y=>m=>typeof m=="function"?((u,v)=>(customElements.define(u,v),v))(y,m):((u,v)=>{let{kind:_,elements:A}=v;return{kind:_,elements:A,finisher(T){customElements.define(u,T)}}})(y,m);var Ys,Sm=((Ys=window.HTMLSlotElement)===null||Ys===void 0?void 0:Ys.prototype.assignedElements)!=null?(y,m)=>y.assignedElements(m):(y,m)=>y.assignedNodes(m).filter(u=>u.nodeType===Node.ELEMENT_NODE);var Ld=cd(Pd());var Md=ki`@charset "UTF-8";
/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}

hr:not([size]) {
  height: 1px;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.5rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.75rem;
  }
}

h4, .h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.5rem;
  }
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-bs-original-title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.875em;
}

mark, .mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #0d6efd;
  text-decoration: underline;
}
a:hover {
  color: #0a58ca;
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: #6c757d;
}

.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }

  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }

  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }

  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }

  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }

  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.33333333%;
  }

  .offset-sm-2 {
    margin-left: 16.66666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.33333333%;
  }

  .offset-sm-5 {
    margin-left: 41.66666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.33333333%;
  }

  .offset-sm-8 {
    margin-left: 66.66666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.33333333%;
  }

  .offset-sm-11 {
    margin-left: 91.66666667%;
  }

  .g-sm-0,
.gx-sm-0 {
    --bs-gutter-x: 0;
  }

  .g-sm-0,
.gy-sm-0 {
    --bs-gutter-y: 0;
  }

  .g-sm-1,
.gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-sm-1,
.gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-sm-2,
.gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-sm-2,
.gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-sm-3,
.gx-sm-3 {
    --bs-gutter-x: 1rem;
  }

  .g-sm-3,
.gy-sm-3 {
    --bs-gutter-y: 1rem;
  }

  .g-sm-4,
.gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-sm-4,
.gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-sm-5,
.gx-sm-5 {
    --bs-gutter-x: 3rem;
  }

  .g-sm-5,
.gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.33333333%;
  }

  .offset-md-2 {
    margin-left: 16.66666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.33333333%;
  }

  .offset-md-5 {
    margin-left: 41.66666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.33333333%;
  }

  .offset-md-8 {
    margin-left: 66.66666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.33333333%;
  }

  .offset-md-11 {
    margin-left: 91.66666667%;
  }

  .g-md-0,
.gx-md-0 {
    --bs-gutter-x: 0;
  }

  .g-md-0,
.gy-md-0 {
    --bs-gutter-y: 0;
  }

  .g-md-1,
.gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-md-1,
.gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-md-2,
.gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-md-2,
.gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-md-3,
.gx-md-3 {
    --bs-gutter-x: 1rem;
  }

  .g-md-3,
.gy-md-3 {
    --bs-gutter-y: 1rem;
  }

  .g-md-4,
.gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-md-4,
.gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-md-5,
.gx-md-5 {
    --bs-gutter-x: 3rem;
  }

  .g-md-5,
.gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.33333333%;
  }

  .offset-lg-2 {
    margin-left: 16.66666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.33333333%;
  }

  .offset-lg-5 {
    margin-left: 41.66666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.33333333%;
  }

  .offset-lg-8 {
    margin-left: 66.66666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.33333333%;
  }

  .offset-lg-11 {
    margin-left: 91.66666667%;
  }

  .g-lg-0,
.gx-lg-0 {
    --bs-gutter-x: 0;
  }

  .g-lg-0,
.gy-lg-0 {
    --bs-gutter-y: 0;
  }

  .g-lg-1,
.gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-lg-1,
.gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-lg-2,
.gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-lg-2,
.gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-lg-3,
.gx-lg-3 {
    --bs-gutter-x: 1rem;
  }

  .g-lg-3,
.gy-lg-3 {
    --bs-gutter-y: 1rem;
  }

  .g-lg-4,
.gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-lg-4,
.gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-lg-5,
.gx-lg-5 {
    --bs-gutter-x: 3rem;
  }

  .g-lg-5,
.gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xl-11 {
    margin-left: 91.66666667%;
  }

  .g-xl-0,
.gx-xl-0 {
    --bs-gutter-x: 0;
  }

  .g-xl-0,
.gy-xl-0 {
    --bs-gutter-y: 0;
  }

  .g-xl-1,
.gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xl-1,
.gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xl-2,
.gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xl-2,
.gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xl-3,
.gx-xl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xl-3,
.gy-xl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xl-4,
.gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xl-4,
.gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xl-5,
.gx-xl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xl-5,
.gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xxl-0 {
    margin-left: 0;
  }

  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xxl-3 {
    margin-left: 25%;
  }

  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xxl-6 {
    margin-left: 50%;
  }

  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xxl-9 {
    margin-left: 75%;
  }

  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }

  .g-xxl-0,
.gx-xxl-0 {
    --bs-gutter-x: 0;
  }

  .g-xxl-0,
.gy-xxl-0 {
    --bs-gutter-y: 0;
  }

  .g-xxl-1,
.gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xxl-1,
.gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xxl-2,
.gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xxl-2,
.gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xxl-3,
.gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xxl-3,
.gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xxl-4,
.gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xxl-4,
.gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xxl-5,
.gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xxl-5,
.gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}
.table > :not(:last-child) > :last-child > * {
  border-bottom-color: currentColor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}

.table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}

.table-hover > tbody > tr:hover {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}

.table-primary {
  --bs-table-bg: #cfe2ff;
  --bs-table-striped-bg: #c5d7f2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bacbe6;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bacbe6;
}

.table-secondary {
  --bs-table-bg: #e2e3e5;
  --bs-table-striped-bg: #d7d8da;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #cbccce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #d1d2d4;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #cbccce;
}

.table-success {
  --bs-table-bg: #d1e7dd;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bcd0c7;
}

.table-info {
  --bs-table-bg: #cff4fc;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #badce3;
}

.table-warning {
  --bs-table-bg: #fff3cd;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6dbb9;
}

.table-danger {
  --bs-table-bg: #f8d7da;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfc2c4;
}

.table-light {
  --bs-table-bg: #f8f9fa;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfe0e1;
}

.table-dark {
  --bs-table-bg: #212529;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: #fff;
  border-color: #373b3e;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #6c757d;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}
.form-control::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + (0.5rem + 2px));
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.form-control-sm::-webkit-file-upload-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  min-height: calc(1.5em + (1rem + 2px));
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}
.form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: calc(1.5em + (0.75rem + 2px));
}
textarea.form-control-sm {
  min-height: calc(1.5em + (0.5rem + 2px));
}
textarea.form-control-lg {
  min-height: calc(1.5em + (1rem + 2px));
}

.form-control-color {
  max-width: 3rem;
  height: auto;
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}
.form-control-color::-webkit-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  background-color: #e9ecef;
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212529;
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}
.form-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.form-floating > .form-control::placeholder {
  color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 3rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(25, 135, 84, 0.9);
  border-radius: 0.25rem;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: #198754;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: #198754;
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: #198754;
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: #198754;
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #198754;
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,
.was-validated .input-group .form-select:valid,
.input-group .form-select.is-valid {
  z-index: 1;
}
.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,
.was-validated .input-group .form-select:valid:focus,
.input-group .form-select.is-valid:focus {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.25rem;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: #dc3545;
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,
.was-validated .input-group .form-select:invalid,
.input-group .form-select.is-invalid {
  z-index: 2;
}
.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,
.was-validated .input-group .form-select:invalid:focus,
.input-group .form-select.is-invalid:focus {
  z-index: 3;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
}
.btn-check:focus + .btn, .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  pointer-events: none;
  opacity: 0.65;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0a58ca;
  border-color: #0a53be;
}
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-primary:disabled, .btn-primary.disabled {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-secondary:hover {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
}
.btn-check:focus + .btn-secondary, .btn-secondary:focus {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #565e64;
  border-color: #51585e;
}
.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-secondary:disabled, .btn-secondary.disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-success:hover {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
}
.btn-check:focus + .btn-success, .btn-success:focus {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #146c43;
  border-color: #13653f;
}
.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-success:disabled, .btn-success.disabled {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}

.btn-info {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-info:hover {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
}
.btn-check:focus + .btn-info, .btn-info:focus {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {
  color: #000;
  background-color: #3dd5f3;
  border-color: #25cff2;
}
.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-info:disabled, .btn-info.disabled {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}

.btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-warning:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.btn-check:focus + .btn-warning, .btn-warning:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-warning:disabled, .btn-warning.disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.btn-check:focus + .btn-danger, .btn-danger:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-danger:disabled, .btn-danger.disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-light:hover {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:focus + .btn-light, .btn-light:focus {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-light:disabled, .btn-light.disabled {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-dark {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-dark:hover {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
}
.btn-check:focus + .btn-dark, .btn-dark:focus {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1a1e21;
  border-color: #191c1f;
}
.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-dark:disabled, .btn-dark.disabled {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-outline-primary:disabled, .btn-outline-primary.disabled {
  color: #0d6efd;
  background-color: transparent;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-success {
  color: #198754;
  border-color: #198754;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-outline-success:disabled, .btn-outline-success.disabled {
  color: #198754;
  background-color: transparent;
}

.btn-outline-info {
  color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-outline-info:hover {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-outline-info:disabled, .btn-outline-info.disabled {
  color: #0dcaf0;
  background-color: transparent;
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}
.btn-outline-warning:hover {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-outline-warning:disabled, .btn-outline-warning.disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}
.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger:disabled, .btn-outline-danger.disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:hover {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light:disabled, .btn-outline-light.disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-dark {
  color: #212529;
  border-color: #212529;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-outline-dark:disabled, .btn-outline-dark.disabled {
  color: #212529;
  background-color: transparent;
}

.btn-link {
  font-weight: 400;
  color: #0d6efd;
  text-decoration: underline;
}
.btn-link:hover {
  color: #0a58ca;
}
.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.125rem;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  color: #1e2125;
  background-color: #e9ecef;
}
.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #0d6efd;
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #212529;
}

.dropdown-menu-dark {
  color: #dee2e6;
  background-color: #343a40;
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
  color: #fff;
  background-color: #0d6efd;
}
.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
  color: #adb5bd;
}
.dropdown-menu-dark .dropdown-divider {
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item-text {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-header {
  color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn ~ .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: #0a58ca;
}
.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
  isolation: isolate;
}
.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.25rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #0d6efd;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.25rem;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-text a,
.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}
.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.1);
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-subtitle {
  margin-top: -0.25rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}
.card-link + .card-link {
  margin-left: 1rem;
}

.card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-group > .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: #0c63e4;
  background-color: #e7f1ff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.accordion-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.accordion-item:first-of-type {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.accordion-body {
  padding: 1rem 1.25rem;
}

.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button {
  border-radius: 0;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  color: #0d6efd;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dee2e6;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: #0a58ca;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
.page-link:focus {
  z-index: 3;
  color: #0a58ca;
  background-color: #e9ecef;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-link {
  padding: 0.375rem 0.75rem;
}

.page-item:first-child .page-link {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.alert-primary {
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
}
.alert-primary .alert-link {
  color: #06357a;
}

.alert-secondary {
  color: #41464b;
  background-color: #e2e3e5;
  border-color: #d3d6d8;
}
.alert-secondary .alert-link {
  color: #34383c;
}

.alert-success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}
.alert-success .alert-link {
  color: #0c4128;
}

.alert-info {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
}
.alert-info .alert-link {
  color: #04414d;
}

.alert-warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}
.alert-warning .alert-link {
  color: #523e02;
}

.alert-danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.alert-danger .alert-link {
  color: #6a1a21;
}

.alert-light {
  color: #636464;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.alert-light .alert-link {
  color: #4f5050;
}

.alert-dark {
  color: #141619;
  background-color: #d3d3d4;
  border-color: #bcbebf;
}
.alert-dark .alert-link {
  color: #101214;
}

@-webkit-keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #0d6efd;
  transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #084298;
  background-color: #bacbe6;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}

.list-group-item-secondary {
  color: #41464b;
  background-color: #e2e3e5;
}
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #41464b;
  background-color: #cbccce;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #41464b;
  border-color: #41464b;
}

.list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}

.list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}

.list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}

.list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}

.list-group-item-light {
  color: #636464;
  background-color: #fefefe;
}
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #636464;
  background-color: #e5e5e5;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #636464;
  border-color: #636464;
}

.list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #141619;
  background-color: #bebebf;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}

.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}
.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  opacity: 1;
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  opacity: 0.25;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.toast {
  width: 350px;
  max-width: 100%;
  font-size: 0.875rem;
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.toast:not(.showing):not(.show) {
  opacity: 0;
}
.toast.hide {
  display: none;
}

.toast-container {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: 0.75rem;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.toast-header .btn-close {
  margin-right: -0.375rem;
  margin-left: 0.75rem;
}

.toast-body {
  padding: 0.75rem;
  word-wrap: break-word;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
.modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}
.modal-fullscreen .modal-footer {
  border-radius: 0;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
}
.tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 0.9;
}
.tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {
  padding: 0.4rem 0;
}
.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: 0;
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {
  padding: 0 0.4rem;
}
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {
  padding: 0.4rem 0;
}
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: 0;
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {
  padding: 0 0.4rem;
}
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0 /* rtl:ignore */;
  z-index: 1070;
  display: block;
  max-width: 276px;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.popover .popover-arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-0.5rem - 1px);
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-0.5rem - 1px);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f0f0f0;
}

.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 1rem 1rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

/* rtl:begin:ignore */
.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

/* rtl:end:ignore */
.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: 0.75s linear infinite spinner-grow;
  animation: 0.75s linear infinite spinner-grow;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
.spinner-grow {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }
}
.offcanvas {
  position: fixed;
  bottom: 0;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  visibility: hidden;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .offcanvas {
    transition: none;
  }
}

.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
}
.offcanvas-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin-top: -0.5rem;
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.offcanvas-body {
  flex-grow: 1;
  padding: 1rem 1rem;
  overflow-y: auto;
}

.offcanvas-start {
  top: 0;
  left: 0;
  width: 400px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
}

.offcanvas-end {
  top: 0;
  right: 0;
  width: 400px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
}

.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(-100%);
}

.offcanvas-bottom {
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(100%);
}

.offcanvas.show {
  transform: none;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.link-primary {
  color: #0d6efd;
}
.link-primary:hover, .link-primary:focus {
  color: #0a58ca;
}

.link-secondary {
  color: #6c757d;
}
.link-secondary:hover, .link-secondary:focus {
  color: #565e64;
}

.link-success {
  color: #198754;
}
.link-success:hover, .link-success:focus {
  color: #146c43;
}

.link-info {
  color: #0dcaf0;
}
.link-info:hover, .link-info:focus {
  color: #3dd5f3;
}

.link-warning {
  color: #ffc107;
}
.link-warning:hover, .link-warning:focus {
  color: #ffcd39;
}

.link-danger {
  color: #dc3545;
}
.link-danger:hover, .link-danger:focus {
  color: #b02a37;
}

.link-light {
  color: #f8f9fa;
}
.link-light:hover, .link-light:focus {
  color: #f9fafb;
}

.link-dark {
  color: #212529;
}
.link-dark:hover, .link-dark:focus {
  color: #1a1e21;
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
  --bs-aspect-ratio: calc(3 / 4 * 100%);
}

.ratio-16x9 {
  --bs-aspect-ratio: calc(9 / 16 * 100%);
}

.ratio-21x9 {
  --bs-aspect-ratio: calc(9 / 21 * 100%);
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .sticky-sm-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sticky-xl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: 1px solid #dee2e6 !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: 1px solid #dee2e6 !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #0d6efd !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #198754 !important;
}

.border-info {
  border-color: #0dcaf0 !important;
}

.border-warning {
  border-color: #ffc107 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #212529 !important;
}

.border-white {
  border-color: #fff !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-1 {
  gap: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}

.gap-4 {
  gap: 1.5rem !important;
}

.gap-5 {
  gap: 3rem !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fs-6 {
  font-size: 1rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.25 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 2 !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
  color: #0d6efd !important;
}

.text-secondary {
  color: #6c757d !important;
}

.text-success {
  color: #198754 !important;
}

.text-info {
  color: #0dcaf0 !important;
}

.text-warning {
  color: #ffc107 !important;
}

.text-danger {
  color: #dc3545 !important;
}

.text-light {
  color: #f8f9fa !important;
}

.text-dark {
  color: #212529 !important;
}

.text-white {
  color: #fff !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-reset {
  color: inherit !important;
}

.bg-primary {
  background-color: #0d6efd !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

.bg-success {
  background-color: #198754 !important;
}

.bg-info {
  background-color: #0dcaf0 !important;
}

.bg-warning {
  background-color: #ffc107 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.bg-dark {
  background-color: #212529 !important;
}

.bg-body {
  background-color: #fff !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: 0.2rem !important;
}

.rounded-2 {
  border-radius: 0.25rem !important;
}

.rounded-3 {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-end {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-start {
  border-bottom-left-radius: 0.25rem !important;
  border-top-left-radius: 0.25rem !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }

  .float-sm-end {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-grid {
    display: grid !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }

  .d-sm-none {
    display: none !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-sm-0 {
    gap: 0 !important;
  }

  .gap-sm-1 {
    gap: 0.25rem !important;
  }

  .gap-sm-2 {
    gap: 0.5rem !important;
  }

  .gap-sm-3 {
    gap: 1rem !important;
  }

  .gap-sm-4 {
    gap: 1.5rem !important;
  }

  .gap-sm-5 {
    gap: 3rem !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }

  .order-sm-first {
    order: -1 !important;
  }

  .order-sm-0 {
    order: 0 !important;
  }

  .order-sm-1 {
    order: 1 !important;
  }

  .order-sm-2 {
    order: 2 !important;
  }

  .order-sm-3 {
    order: 3 !important;
  }

  .order-sm-4 {
    order: 4 !important;
  }

  .order-sm-5 {
    order: 5 !important;
  }

  .order-sm-last {
    order: 6 !important;
  }

  .m-sm-0 {
    margin: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-sm-0 {
    margin-top: 0 !important;
  }

  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mt-sm-3 {
    margin-top: 1rem !important;
  }

  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mt-sm-5 {
    margin-top: 3rem !important;
  }

  .mt-sm-auto {
    margin-top: auto !important;
  }

  .me-sm-0 {
    margin-right: 0 !important;
  }

  .me-sm-1 {
    margin-right: 0.25rem !important;
  }

  .me-sm-2 {
    margin-right: 0.5rem !important;
  }

  .me-sm-3 {
    margin-right: 1rem !important;
  }

  .me-sm-4 {
    margin-right: 1.5rem !important;
  }

  .me-sm-5 {
    margin-right: 3rem !important;
  }

  .me-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-0 {
    margin-bottom: 0 !important;
  }

  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }

  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }

  .mb-sm-auto {
    margin-bottom: auto !important;
  }

  .ms-sm-0 {
    margin-left: 0 !important;
  }

  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }

  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }

  .ms-sm-3 {
    margin-left: 1rem !important;
  }

  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }

  .ms-sm-5 {
    margin-left: 3rem !important;
  }

  .ms-sm-auto {
    margin-left: auto !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-sm-0 {
    padding-top: 0 !important;
  }

  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pt-sm-3 {
    padding-top: 1rem !important;
  }

  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pt-sm-5 {
    padding-top: 3rem !important;
  }

  .pe-sm-0 {
    padding-right: 0 !important;
  }

  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pe-sm-3 {
    padding-right: 1rem !important;
  }

  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pe-sm-5 {
    padding-right: 3rem !important;
  }

  .pb-sm-0 {
    padding-bottom: 0 !important;
  }

  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }

  .ps-sm-0 {
    padding-left: 0 !important;
  }

  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }

  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }

  .ps-sm-3 {
    padding-left: 1rem !important;
  }

  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }

  .ps-sm-5 {
    padding-left: 3rem !important;
  }

  .text-sm-start {
    text-align: left !important;
  }

  .text-sm-end {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }

  .float-md-end {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-grid {
    display: grid !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }

  .d-md-none {
    display: none !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-md-0 {
    gap: 0 !important;
  }

  .gap-md-1 {
    gap: 0.25rem !important;
  }

  .gap-md-2 {
    gap: 0.5rem !important;
  }

  .gap-md-3 {
    gap: 1rem !important;
  }

  .gap-md-4 {
    gap: 1.5rem !important;
  }

  .gap-md-5 {
    gap: 3rem !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }

  .order-md-first {
    order: -1 !important;
  }

  .order-md-0 {
    order: 0 !important;
  }

  .order-md-1 {
    order: 1 !important;
  }

  .order-md-2 {
    order: 2 !important;
  }

  .order-md-3 {
    order: 3 !important;
  }

  .order-md-4 {
    order: 4 !important;
  }

  .order-md-5 {
    order: 5 !important;
  }

  .order-md-last {
    order: 6 !important;
  }

  .m-md-0 {
    margin: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-md-0 {
    margin-top: 0 !important;
  }

  .mt-md-1 {
    margin-top: 0.25rem !important;
  }

  .mt-md-2 {
    margin-top: 0.5rem !important;
  }

  .mt-md-3 {
    margin-top: 1rem !important;
  }

  .mt-md-4 {
    margin-top: 1.5rem !important;
  }

  .mt-md-5 {
    margin-top: 3rem !important;
  }

  .mt-md-auto {
    margin-top: auto !important;
  }

  .me-md-0 {
    margin-right: 0 !important;
  }

  .me-md-1 {
    margin-right: 0.25rem !important;
  }

  .me-md-2 {
    margin-right: 0.5rem !important;
  }

  .me-md-3 {
    margin-right: 1rem !important;
  }

  .me-md-4 {
    margin-right: 1.5rem !important;
  }

  .me-md-5 {
    margin-right: 3rem !important;
  }

  .me-md-auto {
    margin-right: auto !important;
  }

  .mb-md-0 {
    margin-bottom: 0 !important;
  }

  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-md-3 {
    margin-bottom: 1rem !important;
  }

  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-md-5 {
    margin-bottom: 3rem !important;
  }

  .mb-md-auto {
    margin-bottom: auto !important;
  }

  .ms-md-0 {
    margin-left: 0 !important;
  }

  .ms-md-1 {
    margin-left: 0.25rem !important;
  }

  .ms-md-2 {
    margin-left: 0.5rem !important;
  }

  .ms-md-3 {
    margin-left: 1rem !important;
  }

  .ms-md-4 {
    margin-left: 1.5rem !important;
  }

  .ms-md-5 {
    margin-left: 3rem !important;
  }

  .ms-md-auto {
    margin-left: auto !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-md-0 {
    padding-top: 0 !important;
  }

  .pt-md-1 {
    padding-top: 0.25rem !important;
  }

  .pt-md-2 {
    padding-top: 0.5rem !important;
  }

  .pt-md-3 {
    padding-top: 1rem !important;
  }

  .pt-md-4 {
    padding-top: 1.5rem !important;
  }

  .pt-md-5 {
    padding-top: 3rem !important;
  }

  .pe-md-0 {
    padding-right: 0 !important;
  }

  .pe-md-1 {
    padding-right: 0.25rem !important;
  }

  .pe-md-2 {
    padding-right: 0.5rem !important;
  }

  .pe-md-3 {
    padding-right: 1rem !important;
  }

  .pe-md-4 {
    padding-right: 1.5rem !important;
  }

  .pe-md-5 {
    padding-right: 3rem !important;
  }

  .pb-md-0 {
    padding-bottom: 0 !important;
  }

  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-md-3 {
    padding-bottom: 1rem !important;
  }

  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-md-5 {
    padding-bottom: 3rem !important;
  }

  .ps-md-0 {
    padding-left: 0 !important;
  }

  .ps-md-1 {
    padding-left: 0.25rem !important;
  }

  .ps-md-2 {
    padding-left: 0.5rem !important;
  }

  .ps-md-3 {
    padding-left: 1rem !important;
  }

  .ps-md-4 {
    padding-left: 1.5rem !important;
  }

  .ps-md-5 {
    padding-left: 3rem !important;
  }

  .text-md-start {
    text-align: left !important;
  }

  .text-md-end {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }

  .float-lg-end {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-grid {
    display: grid !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }

  .d-lg-none {
    display: none !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-lg-0 {
    gap: 0 !important;
  }

  .gap-lg-1 {
    gap: 0.25rem !important;
  }

  .gap-lg-2 {
    gap: 0.5rem !important;
  }

  .gap-lg-3 {
    gap: 1rem !important;
  }

  .gap-lg-4 {
    gap: 1.5rem !important;
  }

  .gap-lg-5 {
    gap: 3rem !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }

  .order-lg-first {
    order: -1 !important;
  }

  .order-lg-0 {
    order: 0 !important;
  }

  .order-lg-1 {
    order: 1 !important;
  }

  .order-lg-2 {
    order: 2 !important;
  }

  .order-lg-3 {
    order: 3 !important;
  }

  .order-lg-4 {
    order: 4 !important;
  }

  .order-lg-5 {
    order: 5 !important;
  }

  .order-lg-last {
    order: 6 !important;
  }

  .m-lg-0 {
    margin: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-lg-0 {
    margin-top: 0 !important;
  }

  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mt-lg-3 {
    margin-top: 1rem !important;
  }

  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mt-lg-5 {
    margin-top: 3rem !important;
  }

  .mt-lg-auto {
    margin-top: auto !important;
  }

  .me-lg-0 {
    margin-right: 0 !important;
  }

  .me-lg-1 {
    margin-right: 0.25rem !important;
  }

  .me-lg-2 {
    margin-right: 0.5rem !important;
  }

  .me-lg-3 {
    margin-right: 1rem !important;
  }

  .me-lg-4 {
    margin-right: 1.5rem !important;
  }

  .me-lg-5 {
    margin-right: 3rem !important;
  }

  .me-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-0 {
    margin-bottom: 0 !important;
  }

  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }

  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }

  .mb-lg-auto {
    margin-bottom: auto !important;
  }

  .ms-lg-0 {
    margin-left: 0 !important;
  }

  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }

  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }

  .ms-lg-3 {
    margin-left: 1rem !important;
  }

  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }

  .ms-lg-5 {
    margin-left: 3rem !important;
  }

  .ms-lg-auto {
    margin-left: auto !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-lg-0 {
    padding-top: 0 !important;
  }

  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pt-lg-3 {
    padding-top: 1rem !important;
  }

  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pt-lg-5 {
    padding-top: 3rem !important;
  }

  .pe-lg-0 {
    padding-right: 0 !important;
  }

  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pe-lg-3 {
    padding-right: 1rem !important;
  }

  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pe-lg-5 {
    padding-right: 3rem !important;
  }

  .pb-lg-0 {
    padding-bottom: 0 !important;
  }

  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }

  .ps-lg-0 {
    padding-left: 0 !important;
  }

  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }

  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }

  .ps-lg-3 {
    padding-left: 1rem !important;
  }

  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }

  .ps-lg-5 {
    padding-left: 3rem !important;
  }

  .text-lg-start {
    text-align: left !important;
  }

  .text-lg-end {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }

  .float-xl-end {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-grid {
    display: grid !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }

  .d-xl-none {
    display: none !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xl-0 {
    gap: 0 !important;
  }

  .gap-xl-1 {
    gap: 0.25rem !important;
  }

  .gap-xl-2 {
    gap: 0.5rem !important;
  }

  .gap-xl-3 {
    gap: 1rem !important;
  }

  .gap-xl-4 {
    gap: 1.5rem !important;
  }

  .gap-xl-5 {
    gap: 3rem !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }

  .order-xl-first {
    order: -1 !important;
  }

  .order-xl-0 {
    order: 0 !important;
  }

  .order-xl-1 {
    order: 1 !important;
  }

  .order-xl-2 {
    order: 2 !important;
  }

  .order-xl-3 {
    order: 3 !important;
  }

  .order-xl-4 {
    order: 4 !important;
  }

  .order-xl-5 {
    order: 5 !important;
  }

  .order-xl-last {
    order: 6 !important;
  }

  .m-xl-0 {
    margin: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xl-0 {
    margin-top: 0 !important;
  }

  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xl-3 {
    margin-top: 1rem !important;
  }

  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xl-5 {
    margin-top: 3rem !important;
  }

  .mt-xl-auto {
    margin-top: auto !important;
  }

  .me-xl-0 {
    margin-right: 0 !important;
  }

  .me-xl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xl-3 {
    margin-right: 1rem !important;
  }

  .me-xl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xl-5 {
    margin-right: 3rem !important;
  }

  .me-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xl-auto {
    margin-bottom: auto !important;
  }

  .ms-xl-0 {
    margin-left: 0 !important;
  }

  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xl-3 {
    margin-left: 1rem !important;
  }

  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xl-5 {
    margin-left: 3rem !important;
  }

  .ms-xl-auto {
    margin-left: auto !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xl-0 {
    padding-top: 0 !important;
  }

  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xl-3 {
    padding-top: 1rem !important;
  }

  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xl-5 {
    padding-top: 3rem !important;
  }

  .pe-xl-0 {
    padding-right: 0 !important;
  }

  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xl-3 {
    padding-right: 1rem !important;
  }

  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xl-5 {
    padding-right: 3rem !important;
  }

  .pb-xl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xl-0 {
    padding-left: 0 !important;
  }

  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xl-3 {
    padding-left: 1rem !important;
  }

  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xl-5 {
    padding-left: 3rem !important;
  }

  .text-xl-start {
    text-align: left !important;
  }

  .text-xl-end {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }

  .float-xxl-end {
    float: right !important;
  }

  .float-xxl-none {
    float: none !important;
  }

  .d-xxl-inline {
    display: inline !important;
  }

  .d-xxl-inline-block {
    display: inline-block !important;
  }

  .d-xxl-block {
    display: block !important;
  }

  .d-xxl-grid {
    display: grid !important;
  }

  .d-xxl-table {
    display: table !important;
  }

  .d-xxl-table-row {
    display: table-row !important;
  }

  .d-xxl-table-cell {
    display: table-cell !important;
  }

  .d-xxl-flex {
    display: flex !important;
  }

  .d-xxl-inline-flex {
    display: inline-flex !important;
  }

  .d-xxl-none {
    display: none !important;
  }

  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xxl-row {
    flex-direction: row !important;
  }

  .flex-xxl-column {
    flex-direction: column !important;
  }

  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xxl-0 {
    gap: 0 !important;
  }

  .gap-xxl-1 {
    gap: 0.25rem !important;
  }

  .gap-xxl-2 {
    gap: 0.5rem !important;
  }

  .gap-xxl-3 {
    gap: 1rem !important;
  }

  .gap-xxl-4 {
    gap: 1.5rem !important;
  }

  .gap-xxl-5 {
    gap: 3rem !important;
  }

  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xxl-center {
    justify-content: center !important;
  }

  .justify-content-xxl-between {
    justify-content: space-between !important;
  }

  .justify-content-xxl-around {
    justify-content: space-around !important;
  }

  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xxl-start {
    align-items: flex-start !important;
  }

  .align-items-xxl-end {
    align-items: flex-end !important;
  }

  .align-items-xxl-center {
    align-items: center !important;
  }

  .align-items-xxl-baseline {
    align-items: baseline !important;
  }

  .align-items-xxl-stretch {
    align-items: stretch !important;
  }

  .align-content-xxl-start {
    align-content: flex-start !important;
  }

  .align-content-xxl-end {
    align-content: flex-end !important;
  }

  .align-content-xxl-center {
    align-content: center !important;
  }

  .align-content-xxl-between {
    align-content: space-between !important;
  }

  .align-content-xxl-around {
    align-content: space-around !important;
  }

  .align-content-xxl-stretch {
    align-content: stretch !important;
  }

  .align-self-xxl-auto {
    align-self: auto !important;
  }

  .align-self-xxl-start {
    align-self: flex-start !important;
  }

  .align-self-xxl-end {
    align-self: flex-end !important;
  }

  .align-self-xxl-center {
    align-self: center !important;
  }

  .align-self-xxl-baseline {
    align-self: baseline !important;
  }

  .align-self-xxl-stretch {
    align-self: stretch !important;
  }

  .order-xxl-first {
    order: -1 !important;
  }

  .order-xxl-0 {
    order: 0 !important;
  }

  .order-xxl-1 {
    order: 1 !important;
  }

  .order-xxl-2 {
    order: 2 !important;
  }

  .order-xxl-3 {
    order: 3 !important;
  }

  .order-xxl-4 {
    order: 4 !important;
  }

  .order-xxl-5 {
    order: 5 !important;
  }

  .order-xxl-last {
    order: 6 !important;
  }

  .m-xxl-0 {
    margin: 0 !important;
  }

  .m-xxl-1 {
    margin: 0.25rem !important;
  }

  .m-xxl-2 {
    margin: 0.5rem !important;
  }

  .m-xxl-3 {
    margin: 1rem !important;
  }

  .m-xxl-4 {
    margin: 1.5rem !important;
  }

  .m-xxl-5 {
    margin: 3rem !important;
  }

  .m-xxl-auto {
    margin: auto !important;
  }

  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xxl-0 {
    margin-top: 0 !important;
  }

  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xxl-3 {
    margin-top: 1rem !important;
  }

  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xxl-5 {
    margin-top: 3rem !important;
  }

  .mt-xxl-auto {
    margin-top: auto !important;
  }

  .me-xxl-0 {
    margin-right: 0 !important;
  }

  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xxl-3 {
    margin-right: 1rem !important;
  }

  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xxl-5 {
    margin-right: 3rem !important;
  }

  .me-xxl-auto {
    margin-right: auto !important;
  }

  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xxl-auto {
    margin-bottom: auto !important;
  }

  .ms-xxl-0 {
    margin-left: 0 !important;
  }

  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xxl-3 {
    margin-left: 1rem !important;
  }

  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xxl-5 {
    margin-left: 3rem !important;
  }

  .ms-xxl-auto {
    margin-left: auto !important;
  }

  .p-xxl-0 {
    padding: 0 !important;
  }

  .p-xxl-1 {
    padding: 0.25rem !important;
  }

  .p-xxl-2 {
    padding: 0.5rem !important;
  }

  .p-xxl-3 {
    padding: 1rem !important;
  }

  .p-xxl-4 {
    padding: 1.5rem !important;
  }

  .p-xxl-5 {
    padding: 3rem !important;
  }

  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xxl-0 {
    padding-top: 0 !important;
  }

  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xxl-3 {
    padding-top: 1rem !important;
  }

  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xxl-5 {
    padding-top: 3rem !important;
  }

  .pe-xxl-0 {
    padding-right: 0 !important;
  }

  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xxl-3 {
    padding-right: 1rem !important;
  }

  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xxl-5 {
    padding-right: 3rem !important;
  }

  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xxl-0 {
    padding-left: 0 !important;
  }

  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xxl-3 {
    padding-left: 1rem !important;
  }

  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xxl-5 {
    padding-left: 3rem !important;
  }

  .text-xxl-start {
    text-align: left !important;
  }

  .text-xxl-end {
    text-align: right !important;
  }

  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }

  .fs-2 {
    font-size: 2rem !important;
  }

  .fs-3 {
    font-size: 1.75rem !important;
  }

  .fs-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-grid {
    display: grid !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }

  .d-print-none {
    display: none !important;
  }
}
`;var mr=class extends So{constructor(u){super();this.configItems=u}checkboxTemplate(u){return Je`
      <li
        class="checkbox-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="fw-bold control-title">${u.title}</div>
          <small class="control-description disabled"
            >${u.description}</small
          >
        </div>
        <input
          @input="${v=>this.saveChange(u.id,v)}"
          class="form-check-input me-1"
          type="checkbox"
          id="thirdCheckbox"
          ${u.value?"checked":""}
        />
      </li>
    `}switchTemplate(u){return Je`
      <li
        class="switch-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-auto">
          <div class="control-title fw-bold">${u.title}</div>
          <small class="control-description disabled"
            >${u.description}
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"            
          ${u.value?"checked":""}
          />
        </div>
      </li>
    `}radioTemplate(u){return Je`
      <li
        class="radio-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="control-title fw-bold">${u.title}</div>
          <small class="control-description disabled"
            >${u.description}</small
          >
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">Left</button>
          <button type="button" class="btn btn-primary">Middle</button>
          <button type="button" class="btn btn-primary">Right</button>
        </div>
      </li>
    `}rangeTemplate(u){return Je`
      <li class="range-template list-group-item p-4">
        <div class="ms-2">
          <div class="control-title fw-bold">${u.title}</div>
          <small class="control-description disabled"
            >${u.description}>
          <input
            type="range"
            class="form-range"
            min="0"
            max="5"
            value="${u.value}"
            id="customRange2"
          />
        </div>
      </li>
    `}textareaTemplate(u){return Je`
      <li class="textarea-template list-group-item p-4 ">
        <div class="d-flex justify-content-between align-items-center">
          <div class="ms-2 me-auto">
            <div class="control-title fw-bold">${u.title}</div>
            <small class="control-description disabled"
              >${u.description}
          </div>
          <div class="form-check form-switch">
          V
            <i
              class="bi-caret-down-fill"
              style="font-size: 1.5rem"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            ></i>
          </div>
        </div>
        <div class="collapse ms-2" id="collapseExample">
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value="${u.value}"
            ></textarea>
          </div>
        </div>
      </li>
    `}selectTemplate(u){return Je`
      <li
        class="select-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="control-title fw-bold">${u.title}</div>
          <small class="control-description disabled"
            >${u.description}</small
          >
        </div>
        <select
          class="form-select form-select-md"
          aria-label="example"
          style="max-width: 200px"
          value="${u.value}"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </li>
    `}toastTemplate(){return Je`
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <img
              src="../assets/logo-24x24.png"
              class="rounded me-2"
              alt="Logo"
            />
            <strong class="me-auto"
              >${chrome.i18n.getMessage("appName")}</strong
            >
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Successfully updated settings</div>
        </div>
      </div>
    `}render(){let u=[];return this.configItems.forEach(v=>{switch(v.type){case"checkbox":u.push(this.checkboxTemplate(v));break;case"switch":u.push(this.switchTemplate(v));break;case"radio":u.push(this.radioTemplate(v));break;case"select":u.push(this.selectTemplate(v));break;case"textarea":u.push(this.textareaTemplate(v));break;case"range":u.push(this.rangeTemplate(v));break}}),Je`
      <div class="container">
        <div class="row">
          <div class="col">
            <ul class="list-group">
              ${u}
            </ul>
          </div>
        </div>
        ${this.toastTemplate()}
      </div>
    `}saveChange(u,v){console.log("saving: ",u,v),this.showToast()}showToast(){let u=this.renderRoot.querySelector("#liveToast");new Ld.default.Toast(u).show()}};mr.styles=ki`
    ${Md}
    
    input[type="checkbox"] {
      /* Double-sized Checkboxes */
      -ms-transform: scale(1.4); /* IE */
      -moz-transform: scale(1.4); /* FF */
      -webkit-transform: scale(1.4); /* Safari and Chrome */
      -o-transform: scale(1.4); /* Opera */
      padding: 10px;
    }
    
    .collapse {
      margin-top: 15px;
    }
    .container {
      min-width: 400px;
      min-height: 400px;
    }
  `,mr=md([jd("options-element")],mr);var Zs=class{render(m){console.log("rendering options: ",m);let u=new mr(m);document.body.appendChild(u)}},Uc=[{id:"disable-extension-on-site",type:"checkbox",title:"Temporarily disable extension",description:"Turns off the extension on all websites.",value:!0},{id:"disable-sync",type:"checkbox",title:"Disable storage sync",description:"Your settings will not propagate to other browsers.",value:!0},{id:"radio-id",type:"radio",title:"Sample radio title",description:"The detail information about the radio here.",value:1},{id:"switch-id",type:"switch",title:"Sample switch title",description:"The detail information about the switch here.",value:!0},{id:"select-id",type:"select",title:"Sample select title",description:"The detail information about the select here.",value:2},{id:"range-id",type:"range",title:"Sample range title",description:"The detail information about the range here.",value:0},{id:"textarea-id",type:"textarea",title:"Sample textarea title",description:"The detail information about the textarea here.",value:"hello world"}],Wc=new Zs;Wc.render(Uc);})();
