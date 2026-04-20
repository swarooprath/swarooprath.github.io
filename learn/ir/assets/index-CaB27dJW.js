(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))$(L);new MutationObserver(L=>{for(const F of L)if(F.type==="childList")for(const _ of F.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&$(_)}).observe(document,{childList:!0,subtree:!0});function x(L){const F={};return L.integrity&&(F.integrity=L.integrity),L.referrerPolicy&&(F.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?F.credentials="include":L.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function $(L){if(L.ep)return;L.ep=!0;const F=x(L);fetch(L.href,F)}})();var _o={exports:{}},bi={},Go={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c;function eh(){if(_c)return se;_c=1;var l=Symbol.for("react.element"),r=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),_=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),T=Symbol.iterator;function p(B){return B===null||typeof B!="object"?null:(B=T&&B[T]||B["@@iterator"],typeof B=="function"?B:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,c={};function m(B,G,oe){this.props=B,this.context=G,this.refs=c,this.updater=oe||h}m.prototype.isReactComponent={},m.prototype.setState=function(B,G){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,G,"setState")},m.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function C(){}C.prototype=m.prototype;function u(B,G,oe){this.props=B,this.context=G,this.refs=c,this.updater=oe||h}var f=u.prototype=new C;f.constructor=u,k(f,m.prototype),f.isPureReactComponent=!0;var b=Array.isArray,A=Object.prototype.hasOwnProperty,D={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function y(B,G,oe){var le,de={},ue=null,ye=null;if(G!=null)for(le in G.ref!==void 0&&(ye=G.ref),G.key!==void 0&&(ue=""+G.key),G)A.call(G,le)&&!R.hasOwnProperty(le)&&(de[le]=G[le]);var pe=arguments.length-2;if(pe===1)de.children=oe;else if(1<pe){for(var ke=Array(pe),Ye=0;Ye<pe;Ye++)ke[Ye]=arguments[Ye+2];de.children=ke}if(B&&B.defaultProps)for(le in pe=B.defaultProps,pe)de[le]===void 0&&(de[le]=pe[le]);return{$$typeof:l,type:B,key:ue,ref:ye,props:de,_owner:D.current}}function N(B,G){return{$$typeof:l,type:B.type,key:G,ref:B.ref,props:B.props,_owner:B._owner}}function V(B){return typeof B=="object"&&B!==null&&B.$$typeof===l}function re(B){var G={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(oe){return G[oe]})}var fe=/\/+/g;function ve(B,G){return typeof B=="object"&&B!==null&&B.key!=null?re(""+B.key):G.toString(36)}function ge(B,G,oe,le,de){var ue=typeof B;(ue==="undefined"||ue==="boolean")&&(B=null);var ye=!1;if(B===null)ye=!0;else switch(ue){case"string":case"number":ye=!0;break;case"object":switch(B.$$typeof){case l:case r:ye=!0}}if(ye)return ye=B,de=de(ye),B=le===""?"."+ve(ye,0):le,b(de)?(oe="",B!=null&&(oe=B.replace(fe,"$&/")+"/"),ge(de,G,oe,"",function(Ye){return Ye})):de!=null&&(V(de)&&(de=N(de,oe+(!de.key||ye&&ye.key===de.key?"":(""+de.key).replace(fe,"$&/")+"/")+B)),G.push(de)),1;if(ye=0,le=le===""?".":le+":",b(B))for(var pe=0;pe<B.length;pe++){ue=B[pe];var ke=le+ve(ue,pe);ye+=ge(ue,G,oe,ke,de)}else if(ke=p(B),typeof ke=="function")for(B=ke.call(B),pe=0;!(ue=B.next()).done;)ue=ue.value,ke=le+ve(ue,pe++),ye+=ge(ue,G,oe,ke,de);else if(ue==="object")throw G=String(B),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ye}function gt(B,G,oe){if(B==null)return B;var le=[],de=0;return ge(B,le,"","",function(ue){return G.call(oe,ue,de++)}),le}function Oe(B){if(B._status===-1){var G=B._result;G=G(),G.then(function(oe){(B._status===0||B._status===-1)&&(B._status=1,B._result=oe)},function(oe){(B._status===0||B._status===-1)&&(B._status=2,B._result=oe)}),B._status===-1&&(B._status=0,B._result=G)}if(B._status===1)return B._result.default;throw B._result}var Ce={current:null},K={transition:null},ie={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:K,ReactCurrentOwner:D};function Y(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:gt,forEach:function(B,G,oe){gt(B,function(){G.apply(this,arguments)},oe)},count:function(B){var G=0;return gt(B,function(){G++}),G},toArray:function(B){return gt(B,function(G){return G})||[]},only:function(B){if(!V(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},se.Component=m,se.Fragment=x,se.Profiler=L,se.PureComponent=u,se.StrictMode=$,se.Suspense=M,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,se.act=Y,se.cloneElement=function(B,G,oe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var le=k({},B.props),de=B.key,ue=B.ref,ye=B._owner;if(G!=null){if(G.ref!==void 0&&(ue=G.ref,ye=D.current),G.key!==void 0&&(de=""+G.key),B.type&&B.type.defaultProps)var pe=B.type.defaultProps;for(ke in G)A.call(G,ke)&&!R.hasOwnProperty(ke)&&(le[ke]=G[ke]===void 0&&pe!==void 0?pe[ke]:G[ke])}var ke=arguments.length-2;if(ke===1)le.children=oe;else if(1<ke){pe=Array(ke);for(var Ye=0;Ye<ke;Ye++)pe[Ye]=arguments[Ye+2];le.children=pe}return{$$typeof:l,type:B.type,key:de,ref:ue,props:le,_owner:ye}},se.createContext=function(B){return B={$$typeof:_,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:F,_context:B},B.Consumer=B},se.createElement=y,se.createFactory=function(B){var G=y.bind(null,B);return G.type=B,G},se.createRef=function(){return{current:null}},se.forwardRef=function(B){return{$$typeof:v,render:B}},se.isValidElement=V,se.lazy=function(B){return{$$typeof:q,_payload:{_status:-1,_result:B},_init:Oe}},se.memo=function(B,G){return{$$typeof:j,type:B,compare:G===void 0?null:G}},se.startTransition=function(B){var G=K.transition;K.transition={};try{B()}finally{K.transition=G}},se.unstable_act=Y,se.useCallback=function(B,G){return Ce.current.useCallback(B,G)},se.useContext=function(B){return Ce.current.useContext(B)},se.useDebugValue=function(){},se.useDeferredValue=function(B){return Ce.current.useDeferredValue(B)},se.useEffect=function(B,G){return Ce.current.useEffect(B,G)},se.useId=function(){return Ce.current.useId()},se.useImperativeHandle=function(B,G,oe){return Ce.current.useImperativeHandle(B,G,oe)},se.useInsertionEffect=function(B,G){return Ce.current.useInsertionEffect(B,G)},se.useLayoutEffect=function(B,G){return Ce.current.useLayoutEffect(B,G)},se.useMemo=function(B,G){return Ce.current.useMemo(B,G)},se.useReducer=function(B,G,oe){return Ce.current.useReducer(B,G,oe)},se.useRef=function(B){return Ce.current.useRef(B)},se.useState=function(B){return Ce.current.useState(B)},se.useSyncExternalStore=function(B,G,oe){return Ce.current.useSyncExternalStore(B,G,oe)},se.useTransition=function(){return Ce.current.useTransition()},se.version="18.3.1",se}var Gc;function $o(){return Gc||(Gc=1,Go.exports=eh()),Go.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function th(){if(Hc)return bi;Hc=1;var l=$o(),r=Symbol.for("react.element"),x=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,L=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F={key:!0,ref:!0,__self:!0,__source:!0};function _(v,M,j){var q,T={},p=null,h=null;j!==void 0&&(p=""+j),M.key!==void 0&&(p=""+M.key),M.ref!==void 0&&(h=M.ref);for(q in M)$.call(M,q)&&!F.hasOwnProperty(q)&&(T[q]=M[q]);if(v&&v.defaultProps)for(q in M=v.defaultProps,M)T[q]===void 0&&(T[q]=M[q]);return{$$typeof:r,type:v,key:p,ref:h,props:T,_owner:L.current}}return bi.Fragment=x,bi.jsx=_,bi.jsxs=_,bi}var Oc;function nh(){return Oc||(Oc=1,_o.exports=th()),_o.exports}var i=nh(),z=$o(),Br={},Ho={exports:{}},Je={},Oo={exports:{}},Uo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function ih(){return Uc||(Uc=1,(function(l){function r(K,ie){var Y=K.length;K.push(ie);e:for(;0<Y;){var B=Y-1>>>1,G=K[B];if(0<L(G,ie))K[B]=ie,K[Y]=G,Y=B;else break e}}function x(K){return K.length===0?null:K[0]}function $(K){if(K.length===0)return null;var ie=K[0],Y=K.pop();if(Y!==ie){K[0]=Y;e:for(var B=0,G=K.length,oe=G>>>1;B<oe;){var le=2*(B+1)-1,de=K[le],ue=le+1,ye=K[ue];if(0>L(de,Y))ue<G&&0>L(ye,de)?(K[B]=ye,K[ue]=Y,B=ue):(K[B]=de,K[le]=Y,B=le);else if(ue<G&&0>L(ye,Y))K[B]=ye,K[ue]=Y,B=ue;else break e}}return ie}function L(K,ie){var Y=K.sortIndex-ie.sortIndex;return Y!==0?Y:K.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var F=performance;l.unstable_now=function(){return F.now()}}else{var _=Date,v=_.now();l.unstable_now=function(){return _.now()-v}}var M=[],j=[],q=1,T=null,p=3,h=!1,k=!1,c=!1,m=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(K){for(var ie=x(j);ie!==null;){if(ie.callback===null)$(j);else if(ie.startTime<=K)$(j),ie.sortIndex=ie.expirationTime,r(M,ie);else break;ie=x(j)}}function b(K){if(c=!1,f(K),!k)if(x(M)!==null)k=!0,Oe(A);else{var ie=x(j);ie!==null&&Ce(b,ie.startTime-K)}}function A(K,ie){k=!1,c&&(c=!1,C(y),y=-1),h=!0;var Y=p;try{for(f(ie),T=x(M);T!==null&&(!(T.expirationTime>ie)||K&&!re());){var B=T.callback;if(typeof B=="function"){T.callback=null,p=T.priorityLevel;var G=B(T.expirationTime<=ie);ie=l.unstable_now(),typeof G=="function"?T.callback=G:T===x(M)&&$(M),f(ie)}else $(M);T=x(M)}if(T!==null)var oe=!0;else{var le=x(j);le!==null&&Ce(b,le.startTime-ie),oe=!1}return oe}finally{T=null,p=Y,h=!1}}var D=!1,R=null,y=-1,N=5,V=-1;function re(){return!(l.unstable_now()-V<N)}function fe(){if(R!==null){var K=l.unstable_now();V=K;var ie=!0;try{ie=R(!0,K)}finally{ie?ve():(D=!1,R=null)}}else D=!1}var ve;if(typeof u=="function")ve=function(){u(fe)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,gt=ge.port2;ge.port1.onmessage=fe,ve=function(){gt.postMessage(null)}}else ve=function(){m(fe,0)};function Oe(K){R=K,D||(D=!0,ve())}function Ce(K,ie){y=m(function(){K(l.unstable_now())},ie)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(K){K.callback=null},l.unstable_continueExecution=function(){k||h||(k=!0,Oe(A))},l.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<K?Math.floor(1e3/K):5},l.unstable_getCurrentPriorityLevel=function(){return p},l.unstable_getFirstCallbackNode=function(){return x(M)},l.unstable_next=function(K){switch(p){case 1:case 2:case 3:var ie=3;break;default:ie=p}var Y=p;p=ie;try{return K()}finally{p=Y}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(K,ie){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var Y=p;p=K;try{return ie()}finally{p=Y}},l.unstable_scheduleCallback=function(K,ie,Y){var B=l.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?B+Y:B):Y=B,K){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=Y+G,K={id:q++,callback:ie,priorityLevel:K,startTime:Y,expirationTime:G,sortIndex:-1},Y>B?(K.sortIndex=Y,r(j,K),x(M)===null&&K===x(j)&&(c?(C(y),y=-1):c=!0,Ce(b,Y-B))):(K.sortIndex=G,r(M,K),k||h||(k=!0,Oe(A))),K},l.unstable_shouldYield=re,l.unstable_wrapCallback=function(K){var ie=p;return function(){var Y=p;p=ie;try{return K.apply(this,arguments)}finally{p=Y}}}})(Uo)),Uo}var $c;function rh(){return $c||($c=1,Oo.exports=ih()),Oo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc;function ah(){if(Vc)return Je;Vc=1;var l=$o(),r=rh();function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $=new Set,L={};function F(e,t){_(e,t),_(e+"Capture",t)}function _(e,t){for(L[e]=t,e=0;e<t.length;e++)$.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),M=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q={},T={};function p(e){return M.call(T,e)?!0:M.call(q,e)?!1:j.test(e)?T[e]=!0:(q[e]=!0,!1)}function h(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,t,n,a){if(t===null||typeof t>"u"||h(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function c(e,t,n,a,o,s,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=d}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){m[e]=new c(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];m[t]=new c(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){m[e]=new c(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){m[e]=new c(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){m[e]=new c(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){m[e]=new c(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){m[e]=new c(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){m[e]=new c(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){m[e]=new c(e,5,!1,e.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function u(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(C,u);m[t]=new c(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(C,u);m[t]=new c(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(C,u);m[t]=new c(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){m[e]=new c(e,1,!1,e.toLowerCase(),null,!1,!1)}),m.xlinkHref=new c("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){m[e]=new c(e,1,!1,e.toLowerCase(),null,!0,!0)});function f(e,t,n,a){var o=m.hasOwnProperty(t)?m[t]:null;(o!==null?o.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k(t,n,o,a)&&(n=null),a||o===null?p(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,a=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var b=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),D=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),re=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Ce=Symbol.for("react.offscreen"),K=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,B;function G(e){if(B===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);B=t&&t[1]||""}return`
`+B+e}var oe=!1;function le(e,t){if(!e||oe)return"";oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(P){var a=P}Reflect.construct(e,[],t)}else{try{t.call()}catch(P){a=P}e.call(t.prototype)}else{try{throw Error()}catch(P){a=P}e()}}catch(P){if(P&&a&&typeof P.stack=="string"){for(var o=P.stack.split(`
`),s=a.stack.split(`
`),d=o.length-1,g=s.length-1;1<=d&&0<=g&&o[d]!==s[g];)g--;for(;1<=d&&0<=g;d--,g--)if(o[d]!==s[g]){if(d!==1||g!==1)do if(d--,g--,0>g||o[d]!==s[g]){var w=`
`+o[d].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=d&&0<=g);break}}}finally{oe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?G(e):""}function de(e){switch(e.tag){case 5:return G(e.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case D:return"Portal";case N:return"Profiler";case y:return"StrictMode";case ve:return"Suspense";case ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case re:return(e.displayName||"Context")+".Consumer";case V:return(e._context.displayName||"Context")+".Provider";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gt:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ye(e){var t=ke(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){a=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=Ye(e))}function Vo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ke(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vr(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ko(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=pe(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qo(e,t){t=t.checked,t!=null&&f(e,"checked",t,!1)}function Kr(e,t){Qo(e,t);var n=pe(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qr(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qr(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qr(e,t,n){(t!=="number"||xi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function ln(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+pe(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Jr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Pn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pe(n)}}function Xo(e,t){var n=pe(t.value),a=pe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Zo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function es(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?es(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,ts=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){rd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function ns(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function is(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,o=ns(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,o):e[n]=o}}var ad=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xr(e,t){if(t){if(ad[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Zr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ea=null;function ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,cn=null,dn=null;function rs(e){if(e=ii(e)){if(typeof na!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Ui(t),na(e.stateNode,e.type,t))}}function as(e){cn?dn?dn.push(e):dn=[e]:cn=e}function os(){if(cn){var e=cn,t=dn;if(dn=cn=null,rs(e),t)for(e=0;e<t.length;e++)rs(t[e])}}function ss(e,t){return e(t)}function ls(){}var ia=!1;function cs(e,t,n){if(ia)return e(t,n);ia=!0;try{return ss(e,t,n)}finally{ia=!1,(cn!==null||dn!==null)&&(ls(),os())}}function jn(e,t){var n=e.stateNode;if(n===null)return null;var a=Ui(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var ra=!1;if(v)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){ra=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{ra=!1}function od(e,t,n,a,o,s,d,g,w){var P=Array.prototype.slice.call(arguments,3);try{t.apply(n,P)}catch(H){this.onError(H)}}var zn=!1,Si=null,Di=!1,aa=null,sd={onError:function(e){zn=!0,Si=e}};function ld(e,t,n,a,o,s,d,g,w){zn=!1,Si=null,od.apply(sd,arguments)}function cd(e,t,n,a,o,s,d,g,w){if(ld.apply(this,arguments),zn){if(zn){var P=Si;zn=!1,Si=null}else throw Error(x(198));Di||(Di=!0,aa=P)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ds(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function us(e){if(Kt(e)!==e)throw Error(x(188))}function dd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return us(o),e;if(s===a)return us(o),t;s=s.sibling}throw Error(x(188))}if(n.return!==a.return)n=o,a=s;else{for(var d=!1,g=o.child;g;){if(g===n){d=!0,n=o,a=s;break}if(g===a){d=!0,a=o,n=s;break}g=g.sibling}if(!d){for(g=s.child;g;){if(g===n){d=!0,n=s,a=o;break}if(g===a){d=!0,a=s,n=o;break}g=g.sibling}if(!d)throw Error(x(189))}}if(n.alternate!==a)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function hs(e){return e=dd(e),e!==null?ps(e):null}function ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ps(e);if(t!==null)return t;e=e.sibling}return null}var ms=r.unstable_scheduleCallback,gs=r.unstable_cancelCallback,ud=r.unstable_shouldYield,hd=r.unstable_requestPaint,Me=r.unstable_now,pd=r.unstable_getCurrentPriorityLevel,oa=r.unstable_ImmediatePriority,fs=r.unstable_UserBlockingPriority,Ri=r.unstable_NormalPriority,md=r.unstable_LowPriority,ys=r.unstable_IdlePriority,Ci=null,ft=null;function gd(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:bd,fd=Math.log,yd=Math.LN2;function bd(e){return e>>>=0,e===0?32:31-(fd(e)/yd|0)|0}var Ti=64,Mi=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,s=e.pingedLanes,d=n&268435455;if(d!==0){var g=d&~o;g!==0?a=Nn(g):(s&=d,s!==0&&(a=Nn(s)))}else d=n&~o,d!==0?a=Nn(d):s!==0&&(a=Nn(s));if(a===0)return 0;if(t!==0&&t!==a&&(t&o)===0&&(o=a&-a,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-lt(t),o=1<<n,a|=e[n],t&=~o;return a}function vd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-lt(s),g=1<<d,w=o[d];w===-1?((g&n)===0||(g&a)!==0)&&(o[d]=vd(g,t)):w<=t&&(e.expiredLanes|=g),s&=~g}}function sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bs(){var e=Ti;return Ti<<=1,(Ti&4194240)===0&&(Ti=64),e}function la(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function xd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-lt(n),s=1<<o;t[o]=0,a[o]=-1,e[o]=-1,n&=~s}}function ca(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-lt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}var me=0;function vs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ws,da,xs,ks,Ss,ua=!1,Bi=[],Ft=null,Bt=null,It=null,_n=new Map,Gn=new Map,Et=[],kd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ds(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":_n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Hn(e,t,n,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},t!==null&&(t=ii(t),t!==null&&da(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sd(e,t,n,a,o){switch(t){case"focusin":return Ft=Hn(Ft,e,t,n,a,o),!0;case"dragenter":return Bt=Hn(Bt,e,t,n,a,o),!0;case"mouseover":return It=Hn(It,e,t,n,a,o),!0;case"pointerover":var s=o.pointerId;return _n.set(s,Hn(_n.get(s)||null,e,t,n,a,o)),!0;case"gotpointercapture":return s=o.pointerId,Gn.set(s,Hn(Gn.get(s)||null,e,t,n,a,o)),!0}return!1}function Rs(e){var t=Qt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=ds(n),t!==null){e.blockedOn=t,Ss(e.priority,function(){xs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ea=a,n.target.dispatchEvent(a),ea=null}else return t=ii(n),t!==null&&da(t),e.blockedOn=n,!1;t.shift()}return!0}function Cs(e,t,n){Ii(e)&&n.delete(t)}function Dd(){ua=!1,Ft!==null&&Ii(Ft)&&(Ft=null),Bt!==null&&Ii(Bt)&&(Bt=null),It!==null&&Ii(It)&&(It=null),_n.forEach(Cs),Gn.forEach(Cs)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,ua||(ua=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Dd)))}function Un(e){function t(o){return On(o,e)}if(0<Bi.length){On(Bi[0],e);for(var n=1;n<Bi.length;n++){var a=Bi[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Ft!==null&&On(Ft,e),Bt!==null&&On(Bt,e),It!==null&&On(It,e),_n.forEach(t),Gn.forEach(t),n=0;n<Et.length;n++)a=Et[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)Rs(n),n.blockedOn===null&&Et.shift()}var un=b.ReactCurrentBatchConfig,Ei=!0;function Rd(e,t,n,a){var o=me,s=un.transition;un.transition=null;try{me=1,ha(e,t,n,a)}finally{me=o,un.transition=s}}function Cd(e,t,n,a){var o=me,s=un.transition;un.transition=null;try{me=4,ha(e,t,n,a)}finally{me=o,un.transition=s}}function ha(e,t,n,a){if(Ei){var o=pa(e,t,n,a);if(o===null)Ba(e,t,a,Pi,n),Ds(e,a);else if(Sd(o,e,t,n,a))a.stopPropagation();else if(Ds(e,a),t&4&&-1<kd.indexOf(e)){for(;o!==null;){var s=ii(o);if(s!==null&&ws(s),s=pa(e,t,n,a),s===null&&Ba(e,t,a,Pi,n),s===o)break;o=s}o!==null&&a.stopPropagation()}else Ba(e,t,a,null,n)}}var Pi=null;function pa(e,t,n,a){if(Pi=null,e=ta(a),e=Qt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ds(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function Ts(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pd()){case oa:return 1;case fs:return 4;case Ri:case md:return 16;case ys:return 536870912;default:return 16}default:return 16}}var Pt=null,ma=null,Ai=null;function Ms(){if(Ai)return Ai;var e,t=ma,n=t.length,a,o="value"in Pt?Pt.value:Pt.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===o[s-a];a++);return Ai=o.slice(e,1<a?1-a:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function Fs(){return!1}function Xe(e){function t(n,a,o,s,d){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ji:Fs,this.isPropagationStopped=Fs,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ga=Xe(hn),$n=Y({},hn,{view:0,detail:0}),Td=Xe($n),fa,ya,Vn,qi=Y({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(fa=e.screenX-Vn.screenX,ya=e.screenY-Vn.screenY):ya=fa=0,Vn=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),Bs=Xe(qi),Md=Y({},qi,{dataTransfer:0}),Fd=Xe(Md),Bd=Y({},$n,{relatedTarget:0}),ba=Xe(Bd),Id=Y({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ed=Xe(Id),Pd=Y({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ad=Xe(Pd),Ld=Y({},hn,{data:0}),Is=Xe(Ld),jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zd[e])?!!t[e]:!1}function va(){return Nd}var Wd=Y({},$n,{key:function(e){if(e.key){var t=jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_d=Xe(Wd),Gd=Y({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Es=Xe(Gd),Hd=Y({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),Od=Xe(Hd),Ud=Y({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=Xe(Ud),Vd=Y({},qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kd=Xe(Vd),Qd=[9,13,27,32],wa=v&&"CompositionEvent"in window,Kn=null;v&&"documentMode"in document&&(Kn=document.documentMode);var Jd=v&&"TextEvent"in window&&!Kn,Ps=v&&(!wa||Kn&&8<Kn&&11>=Kn),As=" ",Ls=!1;function js(e,t){switch(e){case"keyup":return Qd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Yd(e,t){switch(e){case"compositionend":return qs(t);case"keypress":return t.which!==32?null:(Ls=!0,As);case"textInput":return e=t.data,e===As&&Ls?null:e;default:return null}}function Xd(e,t){if(pn)return e==="compositionend"||!wa&&js(e,t)?(e=Ms(),Ai=ma=Pt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ps&&t.locale!=="ko"?null:t.data;default:return null}}var Zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zd[e.type]:t==="textarea"}function Ns(e,t,n,a){as(a),t=Gi(t,"onChange"),0<t.length&&(n=new ga("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Qn=null,Jn=null;function eu(e){il(e,0)}function zi(e){var t=bn(e);if(Vo(t))return e}function tu(e,t){if(e==="change")return t}var Ws=!1;if(v){var xa;if(v){var ka="oninput"in document;if(!ka){var _s=document.createElement("div");_s.setAttribute("oninput","return;"),ka=typeof _s.oninput=="function"}xa=ka}else xa=!1;Ws=xa&&(!document.documentMode||9<document.documentMode)}function Gs(){Qn&&(Qn.detachEvent("onpropertychange",Hs),Jn=Qn=null)}function Hs(e){if(e.propertyName==="value"&&zi(Jn)){var t=[];Ns(t,Jn,e,ta(e)),cs(eu,t)}}function nu(e,t,n){e==="focusin"?(Gs(),Qn=t,Jn=n,Qn.attachEvent("onpropertychange",Hs)):e==="focusout"&&Gs()}function iu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(Jn)}function ru(e,t){if(e==="click")return zi(t)}function au(e,t){if(e==="input"||e==="change")return zi(t)}function ou(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:ou;function Yn(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!M.call(t,o)||!ct(e[o],t[o]))return!1}return!0}function Os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,t){var n=Os(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Os(n)}}function $s(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$s(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vs(){for(var e=window,t=xi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xi(e.document)}return t}function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function su(e){var t=Vs(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$s(n.ownerDocument.documentElement,n)){if(a!==null&&Sa(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(a.start,o);a=a.end===void 0?s:Math.min(a.end,o),!e.extend&&s>a&&(o=a,a=s,s=o),o=Us(n,s);var d=Us(n,a);o&&d&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lu=v&&"documentMode"in document&&11>=document.documentMode,mn=null,Da=null,Xn=null,Ra=!1;function Ks(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ra||mn==null||mn!==xi(a)||(a=mn,"selectionStart"in a&&Sa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xn&&Yn(Xn,a)||(Xn=a,a=Gi(Da,"onSelect"),0<a.length&&(t=new ga("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=mn)))}function Ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionend:Ni("Transition","TransitionEnd")},Ca={},Qs={};v&&(Qs=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Wi(e){if(Ca[e])return Ca[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qs)return Ca[e]=t[n];return e}var Js=Wi("animationend"),Ys=Wi("animationiteration"),Xs=Wi("animationstart"),Zs=Wi("transitionend"),el=new Map,tl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){el.set(e,t),F(t,[e])}for(var Ta=0;Ta<tl.length;Ta++){var Ma=tl[Ta],cu=Ma.toLowerCase(),du=Ma[0].toUpperCase()+Ma.slice(1);At(cu,"on"+du)}At(Js,"onAnimationEnd"),At(Ys,"onAnimationIteration"),At(Xs,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(Zs,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),F("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),F("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),F("onBeforeInput",["compositionend","keypress","textInput","paste"]),F("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));function nl(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,cd(a,t,void 0,e),e.currentTarget=null}function il(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var d=a.length-1;0<=d;d--){var g=a[d],w=g.instance,P=g.currentTarget;if(g=g.listener,w!==s&&o.isPropagationStopped())break e;nl(o,g,P),s=w}else for(d=0;d<a.length;d++){if(g=a[d],w=g.instance,P=g.currentTarget,g=g.listener,w!==s&&o.isPropagationStopped())break e;nl(o,g,P),s=w}}}if(Di)throw e=aa,Di=!1,aa=null,e}function we(e,t){var n=t[ja];n===void 0&&(n=t[ja]=new Set);var a=e+"__bubble";n.has(a)||(rl(t,e,2,!1),n.add(a))}function Fa(e,t,n){var a=0;t&&(a|=4),rl(n,e,a,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[_i]){e[_i]=!0,$.forEach(function(n){n!=="selectionchange"&&(uu.has(n)||Fa(n,!1,e),Fa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,Fa("selectionchange",!1,t))}}function rl(e,t,n,a){switch(Ts(t)){case 1:var o=Rd;break;case 4:o=Cd;break;default:o=ha}n=o.bind(null,t,n,e),o=void 0,!ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ba(e,t,n,a,o){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var g=a.stateNode.containerInfo;if(g===o||g.nodeType===8&&g.parentNode===o)break;if(d===4)for(d=a.return;d!==null;){var w=d.tag;if((w===3||w===4)&&(w=d.stateNode.containerInfo,w===o||w.nodeType===8&&w.parentNode===o))return;d=d.return}for(;g!==null;){if(d=Qt(g),d===null)return;if(w=d.tag,w===5||w===6){a=s=d;continue e}g=g.parentNode}}a=a.return}cs(function(){var P=s,H=ta(n),O=[];e:{var W=el.get(e);if(W!==void 0){var Q=ga,X=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":Q=_d;break;case"focusin":X="focus",Q=ba;break;case"focusout":X="blur",Q=ba;break;case"beforeblur":case"afterblur":Q=ba;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Od;break;case Js:case Ys:case Xs:Q=Ed;break;case Zs:Q=$d;break;case"scroll":Q=Td;break;case"wheel":Q=Kd;break;case"copy":case"cut":case"paste":Q=Ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Es}var Z=(t&4)!==0,Fe=!Z&&e==="scroll",I=Z?W!==null?W+"Capture":null:W;Z=[];for(var S=P,E;S!==null;){E=S;var U=E.stateNode;if(E.tag===5&&U!==null&&(E=U,I!==null&&(U=jn(S,I),U!=null&&Z.push(ti(S,U,E)))),Fe)break;S=S.return}0<Z.length&&(W=new Q(W,X,null,n,H),O.push({event:W,listeners:Z}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",W&&n!==ea&&(X=n.relatedTarget||n.fromElement)&&(Qt(X)||X[xt]))break e;if((Q||W)&&(W=H.window===H?H:(W=H.ownerDocument)?W.defaultView||W.parentWindow:window,Q?(X=n.relatedTarget||n.toElement,Q=P,X=X?Qt(X):null,X!==null&&(Fe=Kt(X),X!==Fe||X.tag!==5&&X.tag!==6)&&(X=null)):(Q=null,X=P),Q!==X)){if(Z=Bs,U="onMouseLeave",I="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Es,U="onPointerLeave",I="onPointerEnter",S="pointer"),Fe=Q==null?W:bn(Q),E=X==null?W:bn(X),W=new Z(U,S+"leave",Q,n,H),W.target=Fe,W.relatedTarget=E,U=null,Qt(H)===P&&(Z=new Z(I,S+"enter",X,n,H),Z.target=E,Z.relatedTarget=Fe,U=Z),Fe=U,Q&&X)t:{for(Z=Q,I=X,S=0,E=Z;E;E=fn(E))S++;for(E=0,U=I;U;U=fn(U))E++;for(;0<S-E;)Z=fn(Z),S--;for(;0<E-S;)I=fn(I),E--;for(;S--;){if(Z===I||I!==null&&Z===I.alternate)break t;Z=fn(Z),I=fn(I)}Z=null}else Z=null;Q!==null&&al(O,W,Q,Z,!1),X!==null&&Fe!==null&&al(O,Fe,X,Z,!0)}}e:{if(W=P?bn(P):window,Q=W.nodeName&&W.nodeName.toLowerCase(),Q==="select"||Q==="input"&&W.type==="file")var ee=tu;else if(zs(W))if(Ws)ee=au;else{ee=iu;var te=nu}else(Q=W.nodeName)&&Q.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ee=ru);if(ee&&(ee=ee(e,P))){Ns(O,ee,n,H);break e}te&&te(e,W,P),e==="focusout"&&(te=W._wrapperState)&&te.controlled&&W.type==="number"&&Qr(W,"number",W.value)}switch(te=P?bn(P):window,e){case"focusin":(zs(te)||te.contentEditable==="true")&&(mn=te,Da=P,Xn=null);break;case"focusout":Xn=Da=mn=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,Ks(O,n,H);break;case"selectionchange":if(lu)break;case"keydown":case"keyup":Ks(O,n,H)}var ne;if(wa)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else pn?js(e,n)&&(ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(Ps&&n.locale!=="ko"&&(pn||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&pn&&(ne=Ms()):(Pt=H,ma="value"in Pt?Pt.value:Pt.textContent,pn=!0)),te=Gi(P,ae),0<te.length&&(ae=new Is(ae,e,null,n,H),O.push({event:ae,listeners:te}),ne?ae.data=ne:(ne=qs(n),ne!==null&&(ae.data=ne)))),(ne=Jd?Yd(e,n):Xd(e,n))&&(P=Gi(P,"onBeforeInput"),0<P.length&&(H=new Is("onBeforeInput","beforeinput",null,n,H),O.push({event:H,listeners:P}),H.data=ne))}il(O,t)})}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=jn(e,n),s!=null&&a.unshift(ti(e,s,o)),s=jn(e,t),s!=null&&a.push(ti(e,s,o))),e=e.return}return a}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function al(e,t,n,a,o){for(var s=t._reactName,d=[];n!==null&&n!==a;){var g=n,w=g.alternate,P=g.stateNode;if(w!==null&&w===a)break;g.tag===5&&P!==null&&(g=P,o?(w=jn(n,s),w!=null&&d.unshift(ti(n,w,g))):o||(w=jn(n,s),w!=null&&d.push(ti(n,w,g)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var hu=/\r\n?/g,pu=/\u0000|\uFFFD/g;function ol(e){return(typeof e=="string"?e:""+e).replace(hu,`
`).replace(pu,"")}function Hi(e,t,n){if(t=ol(t),ol(e)!==t&&n)throw Error(x(425))}function Oi(){}var Ia=null,Ea=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,mu=typeof clearTimeout=="function"?clearTimeout:void 0,sl=typeof Promise=="function"?Promise:void 0,gu=typeof queueMicrotask=="function"?queueMicrotask:typeof sl<"u"?function(e){return sl.resolve(null).then(e).catch(fu)}:Aa;function fu(e){setTimeout(function(){throw e})}function La(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),Un(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);Un(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ll(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),yt="__reactFiber$"+yn,ni="__reactProps$"+yn,xt="__reactContainer$"+yn,ja="__reactEvents$"+yn,yu="__reactListeners$"+yn,bu="__reactHandles$"+yn;function Qt(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ll(e);e!==null;){if(n=e[yt])return n;e=ll(e)}return t}e=n,n=e.parentNode}return null}function ii(e){return e=e[yt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Ui(e){return e[ni]||null}var qa=[],vn=-1;function jt(e){return{current:e}}function xe(e){0>vn||(e.current=qa[vn],qa[vn]=null,vn--)}function be(e,t){vn++,qa[vn]=e.current,e.current=t}var qt={},ze=jt(qt),Ue=jt(!1),Jt=qt;function wn(e,t){var n=e.type.contextTypes;if(!n)return qt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function $i(){xe(Ue),xe(ze)}function cl(e,t,n){if(ze.current!==qt)throw Error(x(168));be(ze,t),be(Ue,n)}function dl(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var o in a)if(!(o in t))throw Error(x(108,ye(e)||"Unknown",o));return Y({},n,a)}function Vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,Jt=ze.current,be(ze,e),be(Ue,Ue.current),!0}function ul(e,t,n){var a=e.stateNode;if(!a)throw Error(x(169));n?(e=dl(e,t,Jt),a.__reactInternalMemoizedMergedChildContext=e,xe(Ue),xe(ze),be(ze,e)):xe(Ue),be(Ue,n)}var kt=null,Ki=!1,za=!1;function hl(e){kt===null?kt=[e]:kt.push(e)}function vu(e){Ki=!0,hl(e)}function zt(){if(!za&&kt!==null){za=!0;var e=0,t=me;try{var n=kt;for(me=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}kt=null,Ki=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),ms(oa,zt),o}finally{me=t,za=!1}}return null}var xn=[],kn=0,Qi=null,Ji=0,nt=[],it=0,Yt=null,St=1,Dt="";function Xt(e,t){xn[kn++]=Ji,xn[kn++]=Qi,Qi=e,Ji=t}function pl(e,t,n){nt[it++]=St,nt[it++]=Dt,nt[it++]=Yt,Yt=e;var a=St;e=Dt;var o=32-lt(a)-1;a&=~(1<<o),n+=1;var s=32-lt(t)+o;if(30<s){var d=o-o%5;s=(a&(1<<d)-1).toString(32),a>>=d,o-=d,St=1<<32-lt(t)+o|n<<o|a,Dt=s+e}else St=1<<s|n<<o|a,Dt=e}function Na(e){e.return!==null&&(Xt(e,1),pl(e,1,0))}function Wa(e){for(;e===Qi;)Qi=xn[--kn],xn[kn]=null,Ji=xn[--kn],xn[kn]=null;for(;e===Yt;)Yt=nt[--it],nt[it]=null,Dt=nt[--it],nt[it]=null,St=nt[--it],nt[it]=null}var Ze=null,et=null,Se=!1,dt=null;function ml(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,et=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:St,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,et=null,!0):!1;default:return!1}}function _a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if(Se){var t=et;if(t){var n=t;if(!gl(e,t)){if(_a(e))throw Error(x(418));t=Lt(n.nextSibling);var a=Ze;t&&gl(e,t)?ml(a,n):(e.flags=e.flags&-4097|2,Se=!1,Ze=e)}}else{if(_a(e))throw Error(x(418));e.flags=e.flags&-4097|2,Se=!1,Ze=e}}}function fl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Yi(e){if(e!==Ze)return!1;if(!Se)return fl(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=et)){if(_a(e))throw yl(),Error(x(418));for(;t;)ml(e,t),t=Lt(t.nextSibling)}if(fl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=Ze?Lt(e.stateNode.nextSibling):null;return!0}function yl(){for(var e=et;e;)e=Lt(e.nextSibling)}function Sn(){et=Ze=null,Se=!1}function Ha(e){dt===null?dt=[e]:dt.push(e)}var wu=b.ReactCurrentBatchConfig;function ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var a=n.stateNode}if(!a)throw Error(x(147,e));var o=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(d){var g=o.refs;d===null?delete g[s]:g[s]=d},t._stringRef=s,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bl(e){var t=e._init;return t(e._payload)}function vl(e){function t(I,S){if(e){var E=I.deletions;E===null?(I.deletions=[S],I.flags|=16):E.push(S)}}function n(I,S){if(!e)return null;for(;S!==null;)t(I,S),S=S.sibling;return null}function a(I,S){for(I=new Map;S!==null;)S.key!==null?I.set(S.key,S):I.set(S.index,S),S=S.sibling;return I}function o(I,S){return I=$t(I,S),I.index=0,I.sibling=null,I}function s(I,S,E){return I.index=E,e?(E=I.alternate,E!==null?(E=E.index,E<S?(I.flags|=2,S):E):(I.flags|=2,S)):(I.flags|=1048576,S)}function d(I){return e&&I.alternate===null&&(I.flags|=2),I}function g(I,S,E,U){return S===null||S.tag!==6?(S=Lo(E,I.mode,U),S.return=I,S):(S=o(S,E),S.return=I,S)}function w(I,S,E,U){var ee=E.type;return ee===R?H(I,S,E.props.children,U,E.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Oe&&bl(ee)===S.type)?(U=o(S,E.props),U.ref=ri(I,S,E),U.return=I,U):(U=kr(E.type,E.key,E.props,null,I.mode,U),U.ref=ri(I,S,E),U.return=I,U)}function P(I,S,E,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=jo(E,I.mode,U),S.return=I,S):(S=o(S,E.children||[]),S.return=I,S)}function H(I,S,E,U,ee){return S===null||S.tag!==7?(S=sn(E,I.mode,U,ee),S.return=I,S):(S=o(S,E),S.return=I,S)}function O(I,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Lo(""+S,I.mode,E),S.return=I,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case A:return E=kr(S.type,S.key,S.props,null,I.mode,E),E.ref=ri(I,null,S),E.return=I,E;case D:return S=jo(S,I.mode,E),S.return=I,S;case Oe:var U=S._init;return O(I,U(S._payload),E)}if(Pn(S)||ie(S))return S=sn(S,I.mode,E,null),S.return=I,S;Xi(I,S)}return null}function W(I,S,E,U){var ee=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return ee!==null?null:g(I,S,""+E,U);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case A:return E.key===ee?w(I,S,E,U):null;case D:return E.key===ee?P(I,S,E,U):null;case Oe:return ee=E._init,W(I,S,ee(E._payload),U)}if(Pn(E)||ie(E))return ee!==null?null:H(I,S,E,U,null);Xi(I,E)}return null}function Q(I,S,E,U,ee){if(typeof U=="string"&&U!==""||typeof U=="number")return I=I.get(E)||null,g(S,I,""+U,ee);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case A:return I=I.get(U.key===null?E:U.key)||null,w(S,I,U,ee);case D:return I=I.get(U.key===null?E:U.key)||null,P(S,I,U,ee);case Oe:var te=U._init;return Q(I,S,E,te(U._payload),ee)}if(Pn(U)||ie(U))return I=I.get(E)||null,H(S,I,U,ee,null);Xi(S,U)}return null}function X(I,S,E,U){for(var ee=null,te=null,ne=S,ae=S=0,Le=null;ne!==null&&ae<E.length;ae++){ne.index>ae?(Le=ne,ne=null):Le=ne.sibling;var he=W(I,ne,E[ae],U);if(he===null){ne===null&&(ne=Le);break}e&&ne&&he.alternate===null&&t(I,ne),S=s(he,S,ae),te===null?ee=he:te.sibling=he,te=he,ne=Le}if(ae===E.length)return n(I,ne),Se&&Xt(I,ae),ee;if(ne===null){for(;ae<E.length;ae++)ne=O(I,E[ae],U),ne!==null&&(S=s(ne,S,ae),te===null?ee=ne:te.sibling=ne,te=ne);return Se&&Xt(I,ae),ee}for(ne=a(I,ne);ae<E.length;ae++)Le=Q(ne,I,ae,E[ae],U),Le!==null&&(e&&Le.alternate!==null&&ne.delete(Le.key===null?ae:Le.key),S=s(Le,S,ae),te===null?ee=Le:te.sibling=Le,te=Le);return e&&ne.forEach(function(Vt){return t(I,Vt)}),Se&&Xt(I,ae),ee}function Z(I,S,E,U){var ee=ie(E);if(typeof ee!="function")throw Error(x(150));if(E=ee.call(E),E==null)throw Error(x(151));for(var te=ee=null,ne=S,ae=S=0,Le=null,he=E.next();ne!==null&&!he.done;ae++,he=E.next()){ne.index>ae?(Le=ne,ne=null):Le=ne.sibling;var Vt=W(I,ne,he.value,U);if(Vt===null){ne===null&&(ne=Le);break}e&&ne&&Vt.alternate===null&&t(I,ne),S=s(Vt,S,ae),te===null?ee=Vt:te.sibling=Vt,te=Vt,ne=Le}if(he.done)return n(I,ne),Se&&Xt(I,ae),ee;if(ne===null){for(;!he.done;ae++,he=E.next())he=O(I,he.value,U),he!==null&&(S=s(he,S,ae),te===null?ee=he:te.sibling=he,te=he);return Se&&Xt(I,ae),ee}for(ne=a(I,ne);!he.done;ae++,he=E.next())he=Q(ne,I,ae,he.value,U),he!==null&&(e&&he.alternate!==null&&ne.delete(he.key===null?ae:he.key),S=s(he,S,ae),te===null?ee=he:te.sibling=he,te=he);return e&&ne.forEach(function(Zu){return t(I,Zu)}),Se&&Xt(I,ae),ee}function Fe(I,S,E,U){if(typeof E=="object"&&E!==null&&E.type===R&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case A:e:{for(var ee=E.key,te=S;te!==null;){if(te.key===ee){if(ee=E.type,ee===R){if(te.tag===7){n(I,te.sibling),S=o(te,E.props.children),S.return=I,I=S;break e}}else if(te.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Oe&&bl(ee)===te.type){n(I,te.sibling),S=o(te,E.props),S.ref=ri(I,te,E),S.return=I,I=S;break e}n(I,te);break}else t(I,te);te=te.sibling}E.type===R?(S=sn(E.props.children,I.mode,U,E.key),S.return=I,I=S):(U=kr(E.type,E.key,E.props,null,I.mode,U),U.ref=ri(I,S,E),U.return=I,I=U)}return d(I);case D:e:{for(te=E.key;S!==null;){if(S.key===te)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){n(I,S.sibling),S=o(S,E.children||[]),S.return=I,I=S;break e}else{n(I,S);break}else t(I,S);S=S.sibling}S=jo(E,I.mode,U),S.return=I,I=S}return d(I);case Oe:return te=E._init,Fe(I,S,te(E._payload),U)}if(Pn(E))return X(I,S,E,U);if(ie(E))return Z(I,S,E,U);Xi(I,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,S!==null&&S.tag===6?(n(I,S.sibling),S=o(S,E),S.return=I,I=S):(n(I,S),S=Lo(E,I.mode,U),S.return=I,I=S),d(I)):n(I,S)}return Fe}var Dn=vl(!0),wl=vl(!1),Zi=jt(null),er=null,Rn=null,Oa=null;function Ua(){Oa=Rn=er=null}function $a(e){var t=Zi.current;xe(Zi),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){er=e,Oa=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ve=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(Oa!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(er===null)throw Error(x(308));Rn=e,er.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var Zt=null;function Ka(e){Zt===null?Zt=[e]:Zt.push(e)}function xl(e,t,n,a){var o=t.interleaved;return o===null?(n.next=n,Ka(t)):(n.next=o.next,o.next=n),t.interleaved=n,Rt(e,a)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ce&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,Rt(e,n)}return o=a.interleaved,o===null?(t.next=t,Ka(a)):(t.next=o.next,o.next=t),a.interleaved=t,Rt(e,n)}function tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ca(e,n)}}function Sl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nr(e,t,n,a){var o=e.updateQueue;Nt=!1;var s=o.firstBaseUpdate,d=o.lastBaseUpdate,g=o.shared.pending;if(g!==null){o.shared.pending=null;var w=g,P=w.next;w.next=null,d===null?s=P:d.next=P,d=w;var H=e.alternate;H!==null&&(H=H.updateQueue,g=H.lastBaseUpdate,g!==d&&(g===null?H.firstBaseUpdate=P:g.next=P,H.lastBaseUpdate=w))}if(s!==null){var O=o.baseState;d=0,H=P=w=null,g=s;do{var W=g.lane,Q=g.eventTime;if((a&W)===W){H!==null&&(H=H.next={eventTime:Q,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var X=e,Z=g;switch(W=t,Q=n,Z.tag){case 1:if(X=Z.payload,typeof X=="function"){O=X.call(Q,O,W);break e}O=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=Z.payload,W=typeof X=="function"?X.call(Q,O,W):X,W==null)break e;O=Y({},O,W);break e;case 2:Nt=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,W=o.effects,W===null?o.effects=[g]:W.push(g))}else Q={eventTime:Q,lane:W,tag:g.tag,payload:g.payload,callback:g.callback,next:null},H===null?(P=H=Q,w=O):H=H.next=Q,d|=W;if(g=g.next,g===null){if(g=o.shared.pending,g===null)break;W=g,g=W.next,W.next=null,o.lastBaseUpdate=W,o.shared.pending=null}}while(!0);if(H===null&&(w=O),o.baseState=w,o.firstBaseUpdate=P,o.lastBaseUpdate=H,t=o.shared.interleaved,t!==null){o=t;do d|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);nn|=d,e.lanes=d,e.memoizedState=O}}function Dl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],o=a.callback;if(o!==null){if(a.callback=null,a=n,typeof o!="function")throw Error(x(191,o));o.call(a)}}}var ai={},bt=jt(ai),oi=jt(ai),si=jt(ai);function en(e){if(e===ai)throw Error(x(174));return e}function Ja(e,t){switch(be(si,t),be(oi,e),be(bt,ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yr(t,e)}xe(bt),be(bt,t)}function Tn(){xe(bt),xe(oi),xe(si)}function Rl(e){en(si.current);var t=en(bt.current),n=Yr(t,e.type);t!==n&&(be(oi,e),be(bt,n))}function Ya(e){oi.current===e&&(xe(bt),xe(oi))}var De=jt(0);function ir(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xa=[];function Za(){for(var e=0;e<Xa.length;e++)Xa[e]._workInProgressVersionPrimary=null;Xa.length=0}var rr=b.ReactCurrentDispatcher,eo=b.ReactCurrentBatchConfig,tn=0,Re=null,Ie=null,Pe=null,ar=!1,li=!1,ci=0,xu=0;function Ne(){throw Error(x(321))}function to(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function no(e,t,n,a,o,s){if(tn=s,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rr.current=e===null||e.memoizedState===null?Ru:Cu,e=n(a,o),li){s=0;do{if(li=!1,ci=0,25<=s)throw Error(x(301));s+=1,Pe=Ie=null,t.updateQueue=null,rr.current=Tu,e=n(a,o)}while(li)}if(rr.current=lr,t=Ie!==null&&Ie.next!==null,tn=0,Pe=Ie=Re=null,ar=!1,t)throw Error(x(300));return e}function io(){var e=ci!==0;return ci=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?Re.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function at(){if(Ie===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Pe===null?Re.memoizedState:Pe.next;if(t!==null)Pe=t,Ie=e;else{if(e===null)throw Error(x(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Pe===null?Re.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function di(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=at(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var a=Ie,o=a.baseQueue,s=n.pending;if(s!==null){if(o!==null){var d=o.next;o.next=s.next,s.next=d}a.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,a=a.baseState;var g=d=null,w=null,P=s;do{var H=P.lane;if((tn&H)===H)w!==null&&(w=w.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),a=P.hasEagerState?P.eagerState:e(a,P.action);else{var O={lane:H,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};w===null?(g=w=O,d=a):w=w.next=O,Re.lanes|=H,nn|=H}P=P.next}while(P!==null&&P!==s);w===null?d=a:w.next=g,ct(a,t.memoizedState)||(Ve=!0),t.memoizedState=a,t.baseState=d,t.baseQueue=w,n.lastRenderedState=a}if(e=n.interleaved,e!==null){o=e;do s=o.lane,Re.lanes|=s,nn|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ao(e){var t=at(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do s=e(s,d.action),d=d.next;while(d!==o);ct(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Cl(){}function Tl(e,t){var n=Re,a=at(),o=t(),s=!ct(a.memoizedState,o);if(s&&(a.memoizedState=o,Ve=!0),a=a.queue,oo(Bl.bind(null,n,a,e),[e]),a.getSnapshot!==t||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,ui(9,Fl.bind(null,n,a,o,t),void 0,null),Ae===null)throw Error(x(349));(tn&30)!==0||Ml(n,t,o)}return o}function Ml(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fl(e,t,n,a){t.value=n,t.getSnapshot=a,Il(t)&&El(e)}function Bl(e,t,n){return n(function(){Il(t)&&El(e)})}function Il(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function El(e){var t=Rt(e,1);t!==null&&mt(t,e,1,-1)}function Pl(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:e},t.queue=e,e=e.dispatch=Du.bind(null,Re,e),[t.memoizedState,e]}function ui(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Al(){return at().memoizedState}function or(e,t,n,a){var o=vt();Re.flags|=e,o.memoizedState=ui(1|t,n,void 0,a===void 0?null:a)}function sr(e,t,n,a){var o=at();a=a===void 0?null:a;var s=void 0;if(Ie!==null){var d=Ie.memoizedState;if(s=d.destroy,a!==null&&to(a,d.deps)){o.memoizedState=ui(t,n,s,a);return}}Re.flags|=e,o.memoizedState=ui(1|t,n,s,a)}function Ll(e,t){return or(8390656,8,e,t)}function oo(e,t){return sr(2048,8,e,t)}function jl(e,t){return sr(4,2,e,t)}function ql(e,t){return sr(4,4,e,t)}function zl(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nl(e,t,n){return n=n!=null?n.concat([e]):null,sr(4,4,zl.bind(null,t,e),n)}function so(){}function Wl(e,t){var n=at();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&to(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function _l(e,t){var n=at();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&to(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Gl(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n):(ct(n,t)||(n=bs(),Re.lanes|=n,nn|=n,e.baseState=!0),t)}function ku(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var a=eo.transition;eo.transition={};try{e(!1),t()}finally{me=n,eo.transition=a}}function Hl(){return at().memoizedState}function Su(e,t,n){var a=Ot(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Ol(e))Ul(t,n);else if(n=xl(e,t,n,a),n!==null){var o=He();mt(n,e,a,o),$l(n,t,a)}}function Du(e,t,n){var a=Ot(e),o={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Ul(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,g=s(d,n);if(o.hasEagerState=!0,o.eagerState=g,ct(g,d)){var w=t.interleaved;w===null?(o.next=o,Ka(t)):(o.next=w.next,w.next=o),t.interleaved=o;return}}catch{}finally{}n=xl(e,t,o,a),n!==null&&(o=He(),mt(n,e,a,o),$l(n,t,a))}}function Ol(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Ul(e,t){li=ar=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $l(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ca(e,n)}}var lr={readContext:rt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Ru={readContext:rt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Ll,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,or(4194308,4,zl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return or(4194308,4,e,t)},useInsertionEffect:function(e,t){return or(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=vt();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Su.bind(null,Re,e),[a.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Pl,useDebugValue:so,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Pl(!1),t=e[0];return e=ku.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Re,o=vt();if(Se){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),Ae===null)throw Error(x(349));(tn&30)!==0||Ml(a,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Ll(Bl.bind(null,a,s,e),[e]),a.flags|=2048,ui(9,Fl.bind(null,a,s,n,t),void 0,null),n},useId:function(){var e=vt(),t=Ae.identifierPrefix;if(Se){var n=Dt,a=St;n=(a&~(1<<32-lt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xu++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cu={readContext:rt,useCallback:Wl,useContext:rt,useEffect:oo,useImperativeHandle:Nl,useInsertionEffect:jl,useLayoutEffect:ql,useMemo:_l,useReducer:ro,useRef:Al,useState:function(){return ro(di)},useDebugValue:so,useDeferredValue:function(e){var t=at();return Gl(t,Ie.memoizedState,e)},useTransition:function(){var e=ro(di)[0],t=at().memoizedState;return[e,t]},useMutableSource:Cl,useSyncExternalStore:Tl,useId:Hl,unstable_isNewReconciler:!1},Tu={readContext:rt,useCallback:Wl,useContext:rt,useEffect:oo,useImperativeHandle:Nl,useInsertionEffect:jl,useLayoutEffect:ql,useMemo:_l,useReducer:ao,useRef:Al,useState:function(){return ao(di)},useDebugValue:so,useDeferredValue:function(e){var t=at();return Ie===null?t.memoizedState=e:Gl(t,Ie.memoizedState,e)},useTransition:function(){var e=ao(di)[0],t=at().memoizedState;return[e,t]},useMutableSource:Cl,useSyncExternalStore:Tl,useId:Hl,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function lo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cr={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=He(),o=Ot(e),s=Ct(a,o);s.payload=t,n!=null&&(s.callback=n),t=Wt(e,s,o),t!==null&&(mt(t,e,o,a),tr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=He(),o=Ot(e),s=Ct(a,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Wt(e,s,o),t!==null&&(mt(t,e,o,a),tr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),a=Ot(e),o=Ct(n,a);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,a),t!==null&&(mt(t,e,a,n),tr(t,e,a))}};function Vl(e,t,n,a,o,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,d):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,a)||!Yn(o,s):!0}function Kl(e,t,n){var a=!1,o=qt,s=t.contextType;return typeof s=="object"&&s!==null?s=rt(s):(o=$e(t)?Jt:ze.current,a=t.contextTypes,s=(a=a!=null)?wn(e,o):qt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cr,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ql(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&cr.enqueueReplaceState(t,t.state,null)}function co(e,t,n,a){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Qa(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=rt(s):(s=$e(t)?Jt:ze.current,o.context=wn(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(lo(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&cr.enqueueReplaceState(o,o.state,null),nr(e,n,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",a=t;do n+=de(a),a=a.return;while(a);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function uo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mu=typeof WeakMap=="function"?WeakMap:Map;function Jl(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){fr||(fr=!0,To=a),ho(e,t)},n}function Yl(e,t,n){n=Ct(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=t.value;n.payload=function(){return a(o)},n.callback=function(){ho(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ho(e,t),typeof a!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function Xl(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Mu;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(o.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Zl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ec(e,t,n,a,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Fu=b.ReactCurrentOwner,Ve=!1;function Ge(e,t,n,a){t.child=e===null?wl(t,null,n,a):Dn(t,e.child,n,a)}function tc(e,t,n,a,o){n=n.render;var s=t.ref;return Cn(t,o),a=no(e,t,n,a,s,o),n=io(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(Se&&n&&Na(t),t.flags|=1,Ge(e,t,a,o),t.child)}function nc(e,t,n,a,o){if(e===null){var s=n.type;return typeof s=="function"&&!Ao(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ic(e,t,s,a,o)):(e=kr(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(d,a)&&e.ref===t.ref)return Tt(e,t,o)}return t.flags|=1,e=$t(s,a),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,a,o){if(e!==null){var s=e.memoizedProps;if(Yn(s,a)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=a=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,Tt(e,t,o)}return po(e,t,n,a,o)}function rc(e,t,n){var a=t.pendingProps,o=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Bn,tt),tt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(Bn,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:n,be(Bn,tt),tt|=a}else s!==null?(a=s.baseLanes|n,t.memoizedState=null):a=n,be(Bn,tt),tt|=a;return Ge(e,t,o,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function po(e,t,n,a,o){var s=$e(n)?Jt:ze.current;return s=wn(t,s),Cn(t,o),n=no(e,t,n,a,s,o),a=io(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(Se&&a&&Na(t),t.flags|=1,Ge(e,t,n,o),t.child)}function oc(e,t,n,a,o){if($e(n)){var s=!0;Vi(t)}else s=!1;if(Cn(t,o),t.stateNode===null)ur(e,t),Kl(t,n,a),co(t,n,a,o),a=!0;else if(e===null){var d=t.stateNode,g=t.memoizedProps;d.props=g;var w=d.context,P=n.contextType;typeof P=="object"&&P!==null?P=rt(P):(P=$e(n)?Jt:ze.current,P=wn(t,P));var H=n.getDerivedStateFromProps,O=typeof H=="function"||typeof d.getSnapshotBeforeUpdate=="function";O||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==a||w!==P)&&Ql(t,d,a,P),Nt=!1;var W=t.memoizedState;d.state=W,nr(t,a,d,o),w=t.memoizedState,g!==a||W!==w||Ue.current||Nt?(typeof H=="function"&&(lo(t,n,H,a),w=t.memoizedState),(g=Nt||Vl(t,n,g,a,W,w,P))?(O||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=w),d.props=a,d.state=w,d.context=P,a=g):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{d=t.stateNode,kl(e,t),g=t.memoizedProps,P=t.type===t.elementType?g:ut(t.type,g),d.props=P,O=t.pendingProps,W=d.context,w=n.contextType,typeof w=="object"&&w!==null?w=rt(w):(w=$e(n)?Jt:ze.current,w=wn(t,w));var Q=n.getDerivedStateFromProps;(H=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==O||W!==w)&&Ql(t,d,a,w),Nt=!1,W=t.memoizedState,d.state=W,nr(t,a,d,o);var X=t.memoizedState;g!==O||W!==X||Ue.current||Nt?(typeof Q=="function"&&(lo(t,n,Q,a),X=t.memoizedState),(P=Nt||Vl(t,n,P,a,W,X,w)||!1)?(H||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,X,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,X,w)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=X),d.props=a,d.state=X,d.context=w,a=P):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),a=!1)}return mo(e,t,n,a,s,o)}function mo(e,t,n,a,o,s){ac(e,t);var d=(t.flags&128)!==0;if(!a&&!d)return o&&ul(t,n,!1),Tt(e,t,s);a=t.stateNode,Fu.current=t;var g=d&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&d?(t.child=Dn(t,e.child,null,s),t.child=Dn(t,null,g,s)):Ge(e,t,g,s),t.memoizedState=a.state,o&&ul(t,n,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?cl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cl(e,t.context,!1),Ja(e,t.containerInfo)}function lc(e,t,n,a,o){return Sn(),Ha(o),t.flags|=256,Ge(e,t,n,a),t.child}var go={dehydrated:null,treeContext:null,retryLane:0};function fo(e){return{baseLanes:e,cachePool:null,transitions:null}}function cc(e,t,n){var a=t.pendingProps,o=De.current,s=!1,d=(t.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(o&2)!==0),g?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),be(De,o&1),e===null)return Ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=a.children,e=a.fallback,s?(a=t.mode,s=t.child,d={mode:"hidden",children:d},(a&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=Sr(d,a,0,null),e=sn(e,a,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=fo(n),t.memoizedState=go,e):yo(t,d));if(o=e.memoizedState,o!==null&&(g=o.dehydrated,g!==null))return Bu(e,t,d,a,g,o,n);if(s){s=a.fallback,d=t.mode,o=e.child,g=o.sibling;var w={mode:"hidden",children:a.children};return(d&1)===0&&t.child!==o?(a=t.child,a.childLanes=0,a.pendingProps=w,t.deletions=null):(a=$t(o,w),a.subtreeFlags=o.subtreeFlags&14680064),g!==null?s=$t(g,s):(s=sn(s,d,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,d=e.child.memoizedState,d=d===null?fo(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~n,t.memoizedState=go,a}return s=e.child,e=s.sibling,a=$t(s,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function yo(e,t){return t=Sr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dr(e,t,n,a){return a!==null&&Ha(a),Dn(t,e.child,null,n),e=yo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bu(e,t,n,a,o,s,d){if(n)return t.flags&256?(t.flags&=-257,a=uo(Error(x(422))),dr(e,t,d,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,o=t.mode,a=Sr({mode:"visible",children:a.children},o,0,null),s=sn(s,o,d,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,(t.mode&1)!==0&&Dn(t,e.child,null,d),t.child.memoizedState=fo(d),t.memoizedState=go,s);if((t.mode&1)===0)return dr(e,t,d,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var g=a.dgst;return a=g,s=Error(x(419)),a=uo(s,a,void 0),dr(e,t,d,a)}if(g=(d&e.childLanes)!==0,Ve||g){if(a=Ae,a!==null){switch(d&-d){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(a.suspendedLanes|d))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Rt(e,o),mt(a,e,o,-1))}return Po(),a=uo(Error(x(421))),dr(e,t,d,a)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hu.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,et=Lt(o.nextSibling),Ze=t,Se=!0,dt=null,e!==null&&(nt[it++]=St,nt[it++]=Dt,nt[it++]=Yt,St=e.id,Dt=e.overflow,Yt=t),t=yo(t,a.children),t.flags|=4096,t)}function dc(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Va(e.return,t,n)}function bo(e,t,n,a,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=o)}function uc(e,t,n){var a=t.pendingProps,o=a.revealOrder,s=a.tail;if(Ge(e,t,a.children,n),a=De.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dc(e,n,t);else if(e.tag===19)dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(be(De,a),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ir(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),bo(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ir(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}bo(t,!0,n,null,s);break;case"together":bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ur(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Iu(e,t,n){switch(t.tag){case 3:sc(t),Sn();break;case 5:Rl(t);break;case 1:$e(t.type)&&Vi(t);break;case 4:Ja(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,o=t.memoizedProps.value;be(Zi,a._currentValue),a._currentValue=o;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(be(De,De.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?cc(e,t,n):(be(De,De.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);be(De,De.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return uc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),be(De,De.current),a)break;return null;case 22:case 23:return t.lanes=0,rc(e,t,n)}return Tt(e,t,n)}var hc,vo,pc,mc;hc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},vo=function(){},pc=function(e,t,n,a){var o=e.memoizedProps;if(o!==a){e=t.stateNode,en(bt.current);var s=null;switch(n){case"input":o=Vr(e,o),a=Vr(e,a),s=[];break;case"select":o=Y({},o,{value:void 0}),a=Y({},a,{value:void 0}),s=[];break;case"textarea":o=Jr(e,o),a=Jr(e,a),s=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Oi)}Xr(n,a);var d;n=null;for(P in o)if(!a.hasOwnProperty(P)&&o.hasOwnProperty(P)&&o[P]!=null)if(P==="style"){var g=o[P];for(d in g)g.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(L.hasOwnProperty(P)?s||(s=[]):(s=s||[]).push(P,null));for(P in a){var w=a[P];if(g=o!=null?o[P]:void 0,a.hasOwnProperty(P)&&w!==g&&(w!=null||g!=null))if(P==="style")if(g){for(d in g)!g.hasOwnProperty(d)||w&&w.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in w)w.hasOwnProperty(d)&&g[d]!==w[d]&&(n||(n={}),n[d]=w[d])}else n||(s||(s=[]),s.push(P,n)),n=w;else P==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,g=g?g.__html:void 0,w!=null&&g!==w&&(s=s||[]).push(P,w)):P==="children"?typeof w!="string"&&typeof w!="number"||(s=s||[]).push(P,""+w):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(L.hasOwnProperty(P)?(w!=null&&P==="onScroll"&&we("scroll",e),s||g===w||(s=[])):(s=s||[]).push(P,w))}n&&(s=s||[]).push("style",n);var P=s;(t.updateQueue=P)&&(t.flags|=4)}},mc=function(e,t,n,a){n!==a&&(t.flags|=4)};function hi(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Eu(e,t,n){var a=t.pendingProps;switch(Wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return $e(t.type)&&$i(),We(t),null;case 3:return a=t.stateNode,Tn(),xe(Ue),xe(ze),Za(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dt!==null&&(Bo(dt),dt=null))),vo(e,t),We(t),null;case 5:Ya(t);var o=en(si.current);if(n=t.type,e!==null&&t.stateNode!=null)pc(e,t,n,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(x(166));return We(t),null}if(e=en(bt.current),Yi(t)){a=t.stateNode,n=t.type;var s=t.memoizedProps;switch(a[yt]=t,a[ni]=s,e=(t.mode&1)!==0,n){case"dialog":we("cancel",a),we("close",a);break;case"iframe":case"object":case"embed":we("load",a);break;case"video":case"audio":for(o=0;o<Zn.length;o++)we(Zn[o],a);break;case"source":we("error",a);break;case"img":case"image":case"link":we("error",a),we("load",a);break;case"details":we("toggle",a);break;case"input":Ko(a,s),we("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},we("invalid",a);break;case"textarea":Yo(a,s),we("invalid",a)}Xr(n,s),o=null;for(var d in s)if(s.hasOwnProperty(d)){var g=s[d];d==="children"?typeof g=="string"?a.textContent!==g&&(s.suppressHydrationWarning!==!0&&Hi(a.textContent,g,e),o=["children",g]):typeof g=="number"&&a.textContent!==""+g&&(s.suppressHydrationWarning!==!0&&Hi(a.textContent,g,e),o=["children",""+g]):L.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&we("scroll",a)}switch(n){case"input":wi(a),Jo(a,s,!0);break;case"textarea":wi(a),Zo(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=Oi)}a=o,t.updateQueue=a,a!==null&&(t.flags|=4)}else{d=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=es(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=d.createElement(n,{is:a.is}):(e=d.createElement(n),n==="select"&&(d=e,a.multiple?d.multiple=!0:a.size&&(d.size=a.size))):e=d.createElementNS(e,n),e[yt]=t,e[ni]=a,hc(e,t,!1,!1),t.stateNode=e;e:{switch(d=Zr(n,a),n){case"dialog":we("cancel",e),we("close",e),o=a;break;case"iframe":case"object":case"embed":we("load",e),o=a;break;case"video":case"audio":for(o=0;o<Zn.length;o++)we(Zn[o],e);o=a;break;case"source":we("error",e),o=a;break;case"img":case"image":case"link":we("error",e),we("load",e),o=a;break;case"details":we("toggle",e),o=a;break;case"input":Ko(e,a),o=Vr(e,a),we("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=Y({},a,{value:void 0}),we("invalid",e);break;case"textarea":Yo(e,a),o=Jr(e,a),we("invalid",e);break;default:o=a}Xr(n,o),g=o;for(s in g)if(g.hasOwnProperty(s)){var w=g[s];s==="style"?is(e,w):s==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&ts(e,w)):s==="children"?typeof w=="string"?(n!=="textarea"||w!=="")&&An(e,w):typeof w=="number"&&An(e,""+w):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(L.hasOwnProperty(s)?w!=null&&s==="onScroll"&&we("scroll",e):w!=null&&f(e,s,w,d))}switch(n){case"input":wi(e),Jo(e,a,!1);break;case"textarea":wi(e),Zo(e);break;case"option":a.value!=null&&e.setAttribute("value",""+pe(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?ln(e,!!a.multiple,s,!1):a.defaultValue!=null&&ln(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Oi)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)mc(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(x(166));if(n=en(si.current),en(bt.current),Yi(t)){if(a=t.stateNode,n=t.memoizedProps,a[yt]=t,(s=a.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Hi(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hi(a.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[yt]=t,t.stateNode=a}return We(t),null;case 13:if(xe(De),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)yl(),Sn(),t.flags|=98560,s=!1;else if(s=Yi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(x(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[yt]=t}else Sn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),s=!1}else dt!==null&&(Bo(dt),dt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(De.current&1)!==0?Ee===0&&(Ee=3):Po())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Tn(),vo(e,t),e===null&&ei(t.stateNode.containerInfo),We(t),null;case 10:return $a(t.type._context),We(t),null;case 17:return $e(t.type)&&$i(),We(t),null;case 19:if(xe(De),s=t.memoizedState,s===null)return We(t),null;if(a=(t.flags&128)!==0,d=s.rendering,d===null)if(a)hi(s,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=ir(e),d!==null){for(t.flags|=128,hi(s,!1),a=d.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)s=n,e=a,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(De,De.current&1|2),t.child}e=e.sibling}s.tail!==null&&Me()>In&&(t.flags|=128,a=!0,hi(s,!1),t.lanes=4194304)}else{if(!a)if(e=ir(d),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!Se)return We(t),null}else 2*Me()-s.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,a=!0,hi(s,!1),t.lanes=4194304);s.isBackwards?(d.sibling=t.child,t.child=d):(n=s.last,n!==null?n.sibling=d:t.child=d,s.last=d)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Me(),t.sibling=null,n=De.current,be(De,a?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Eo(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(tt&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Pu(e,t){switch(Wa(t),t.tag){case 1:return $e(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),xe(Ue),xe(ze),Za(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ya(t),null;case 13:if(xe(De),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(De),null;case 4:return Tn(),null;case 10:return $a(t.type._context),null;case 22:case 23:return Eo(),null;case 24:return null;default:return null}}var hr=!1,_e=!1,Au=typeof WeakSet=="function"?WeakSet:Set,J=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Te(e,t,a)}else n.current=null}function wo(e,t,n){try{n()}catch(a){Te(e,t,a)}}var gc=!1;function Lu(e,t){if(Ia=Ei,e=Vs(),Sa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,g=-1,w=-1,P=0,H=0,O=e,W=null;t:for(;;){for(var Q;O!==n||o!==0&&O.nodeType!==3||(g=d+o),O!==s||a!==0&&O.nodeType!==3||(w=d+a),O.nodeType===3&&(d+=O.nodeValue.length),(Q=O.firstChild)!==null;)W=O,O=Q;for(;;){if(O===e)break t;if(W===n&&++P===o&&(g=d),W===s&&++H===a&&(w=d),(Q=O.nextSibling)!==null)break;O=W,W=O.parentNode}O=Q}n=g===-1||w===-1?null:{start:g,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Ei=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var X=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var Z=X.memoizedProps,Fe=X.memoizedState,I=t.stateNode,S=I.getSnapshotBeforeUpdate(t.elementType===t.type?Z:ut(t.type,Z),Fe);I.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(U){Te(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return X=gc,gc=!1,X}function pi(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&wo(t,n,s)}o=o.next}while(o!==a)}}function pr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function xo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fc(e){var t=e.alternate;t!==null&&(e.alternate=null,fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[ni],delete t[ja],delete t[yu],delete t[bu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ko(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi));else if(a!==4&&(e=e.child,e!==null))for(ko(e,t,n),e=e.sibling;e!==null;)ko(e,t,n),e=e.sibling}function So(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(So(e,t,n),e=e.sibling;e!==null;)So(e,t,n),e=e.sibling}var je=null,ht=!1;function _t(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Ci,n)}catch{}switch(n.tag){case 5:_e||Fn(n,t);case 6:var a=je,o=ht;je=null,_t(e,t,n),je=a,ht=o,je!==null&&(ht?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(ht?(e=je,n=n.stateNode,e.nodeType===8?La(e.parentNode,n):e.nodeType===1&&La(e,n),Un(e)):La(je,n.stateNode));break;case 4:a=je,o=ht,je=n.stateNode.containerInfo,ht=!0,_t(e,t,n),je=a,ht=o;break;case 0:case 11:case 14:case 15:if(!_e&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var s=o,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&wo(n,t,d),o=o.next}while(o!==a)}_t(e,t,n);break;case 1:if(!_e&&(Fn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(g){Te(n,t,g)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(_e=(a=_e)||n.memoizedState!==null,_t(e,t,n),_e=a):_t(e,t,n);break;default:_t(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Au),t.forEach(function(a){var o=Ou.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];try{var s=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 5:je=g.stateNode,ht=!1;break e;case 3:je=g.stateNode.containerInfo,ht=!0;break e;case 4:je=g.stateNode.containerInfo,ht=!0;break e}g=g.return}if(je===null)throw Error(x(160));vc(s,d,o),je=null,ht=!1;var w=o.alternate;w!==null&&(w.return=null),o.return=null}catch(P){Te(o,t,P)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xc(t,e),t=t.sibling}function xc(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),wt(e),a&4){try{pi(3,e,e.return),pr(3,e)}catch(Z){Te(e,e.return,Z)}try{pi(5,e,e.return)}catch(Z){Te(e,e.return,Z)}}break;case 1:pt(t,e),wt(e),a&512&&n!==null&&Fn(n,n.return);break;case 5:if(pt(t,e),wt(e),a&512&&n!==null&&Fn(n,n.return),e.flags&32){var o=e.stateNode;try{An(o,"")}catch(Z){Te(e,e.return,Z)}}if(a&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,d=n!==null?n.memoizedProps:s,g=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{g==="input"&&s.type==="radio"&&s.name!=null&&Qo(o,s),Zr(g,d);var P=Zr(g,s);for(d=0;d<w.length;d+=2){var H=w[d],O=w[d+1];H==="style"?is(o,O):H==="dangerouslySetInnerHTML"?ts(o,O):H==="children"?An(o,O):f(o,H,O,P)}switch(g){case"input":Kr(o,s);break;case"textarea":Xo(o,s);break;case"select":var W=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var Q=s.value;Q!=null?ln(o,!!s.multiple,Q,!1):W!==!!s.multiple&&(s.defaultValue!=null?ln(o,!!s.multiple,s.defaultValue,!0):ln(o,!!s.multiple,s.multiple?[]:"",!1))}o[ni]=s}catch(Z){Te(e,e.return,Z)}}break;case 6:if(pt(t,e),wt(e),a&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(Z){Te(e,e.return,Z)}}break;case 3:if(pt(t,e),wt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Un(t.containerInfo)}catch(Z){Te(e,e.return,Z)}break;case 4:pt(t,e),wt(e);break;case 13:pt(t,e),wt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Co=Me())),a&4&&wc(e);break;case 22:if(H=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(P=_e)||H,pt(t,e),_e=P):pt(t,e),wt(e),a&8192){if(P=e.memoizedState!==null,(e.stateNode.isHidden=P)&&!H&&(e.mode&1)!==0)for(J=e,H=e.child;H!==null;){for(O=J=H;J!==null;){switch(W=J,Q=W.child,W.tag){case 0:case 11:case 14:case 15:pi(4,W,W.return);break;case 1:Fn(W,W.return);var X=W.stateNode;if(typeof X.componentWillUnmount=="function"){a=W,n=W.return;try{t=a,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(Z){Te(a,n,Z)}}break;case 5:Fn(W,W.return);break;case 22:if(W.memoizedState!==null){Dc(O);continue}}Q!==null?(Q.return=W,J=Q):Dc(O)}H=H.sibling}e:for(H=null,O=e;;){if(O.tag===5){if(H===null){H=O;try{o=O.stateNode,P?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(g=O.stateNode,w=O.memoizedProps.style,d=w!=null&&w.hasOwnProperty("display")?w.display:null,g.style.display=ns("display",d))}catch(Z){Te(e,e.return,Z)}}}else if(O.tag===6){if(H===null)try{O.stateNode.nodeValue=P?"":O.memoizedProps}catch(Z){Te(e,e.return,Z)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;H===O&&(H=null),O=O.return}H===O&&(H=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:pt(t,e),wt(e),a&4&&wc(e);break;case 21:break;default:pt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yc(n)){var a=n;break e}n=n.return}throw Error(x(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(An(o,""),a.flags&=-33);var s=bc(e);So(e,s,o);break;case 3:case 4:var d=a.stateNode.containerInfo,g=bc(e);ko(e,g,d);break;default:throw Error(x(161))}}catch(w){Te(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ju(e,t,n){J=e,kc(e)}function kc(e,t,n){for(var a=(e.mode&1)!==0;J!==null;){var o=J,s=o.child;if(o.tag===22&&a){var d=o.memoizedState!==null||hr;if(!d){var g=o.alternate,w=g!==null&&g.memoizedState!==null||_e;g=hr;var P=_e;if(hr=d,(_e=w)&&!P)for(J=o;J!==null;)d=J,w=d.child,d.tag===22&&d.memoizedState!==null?Rc(o):w!==null?(w.return=d,J=w):Rc(o);for(;s!==null;)J=s,kc(s),s=s.sibling;J=o,hr=g,_e=P}Sc(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,J=s):Sc(e)}}function Sc(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:_e||pr(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!_e)if(n===null)a.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);a.componentDidUpdate(o,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Dl(t,s,a);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dl(t,d,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var w=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&n.focus();break;case"img":w.src&&(n.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var P=t.alternate;if(P!==null){var H=P.memoizedState;if(H!==null){var O=H.dehydrated;O!==null&&Un(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}_e||t.flags&512&&xo(t)}catch(W){Te(t,t.return,W)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function Dc(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function Rc(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pr(4,t)}catch(w){Te(t,n,w)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var o=t.return;try{a.componentDidMount()}catch(w){Te(t,o,w)}}var s=t.return;try{xo(t)}catch(w){Te(t,s,w)}break;case 5:var d=t.return;try{xo(t)}catch(w){Te(t,d,w)}}}catch(w){Te(t,t.return,w)}if(t===e){J=null;break}var g=t.sibling;if(g!==null){g.return=t.return,J=g;break}J=t.return}}var qu=Math.ceil,mr=b.ReactCurrentDispatcher,Do=b.ReactCurrentOwner,ot=b.ReactCurrentBatchConfig,ce=0,Ae=null,Be=null,qe=0,tt=0,Bn=jt(0),Ee=0,mi=null,nn=0,gr=0,Ro=0,gi=null,Ke=null,Co=0,In=1/0,Mt=null,fr=!1,To=null,Gt=null,yr=!1,Ht=null,br=0,fi=0,Mo=null,vr=-1,wr=0;function He(){return(ce&6)!==0?Me():vr!==-1?vr:vr=Me()}function Ot(e){return(e.mode&1)===0?1:(ce&2)!==0&&qe!==0?qe&-qe:wu.transition!==null?(wr===0&&(wr=bs()),wr):(e=me,e!==0||(e=window.event,e=e===void 0?16:Ts(e.type)),e)}function mt(e,t,n,a){if(50<fi)throw fi=0,Mo=null,Error(x(185));Wn(e,n,a),((ce&2)===0||e!==Ae)&&(e===Ae&&((ce&2)===0&&(gr|=n),Ee===4&&Ut(e,qe)),Qe(e,a),n===1&&ce===0&&(t.mode&1)===0&&(In=Me()+500,Ki&&zt()))}function Qe(e,t){var n=e.callbackNode;wd(e,t);var a=Fi(e,e===Ae?qe:0);if(a===0)n!==null&&gs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&gs(n),t===1)e.tag===0?vu(Tc.bind(null,e)):hl(Tc.bind(null,e)),gu(function(){(ce&6)===0&&zt()}),n=null;else{switch(vs(a)){case 1:n=oa;break;case 4:n=fs;break;case 16:n=Ri;break;case 536870912:n=ys;break;default:n=Ri}n=Lc(n,Cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cc(e,t){if(vr=-1,wr=0,(ce&6)!==0)throw Error(x(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var a=Fi(e,e===Ae?qe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=xr(e,a);else{t=a;var o=ce;ce|=2;var s=Fc();(Ae!==e||qe!==t)&&(Mt=null,In=Me()+500,an(e,t));do try{Wu();break}catch(g){Mc(e,g)}while(!0);Ua(),mr.current=s,ce=o,Be!==null?t=0:(Ae=null,qe=0,t=Ee)}if(t!==0){if(t===2&&(o=sa(e),o!==0&&(a=o,t=Fo(e,o))),t===1)throw n=mi,an(e,0),Ut(e,a),Qe(e,Me()),n;if(t===6)Ut(e,a);else{if(o=e.current.alternate,(a&30)===0&&!zu(o)&&(t=xr(e,a),t===2&&(s=sa(e),s!==0&&(a=s,t=Fo(e,s))),t===1))throw n=mi,an(e,0),Ut(e,a),Qe(e,Me()),n;switch(e.finishedWork=o,e.finishedLanes=a,t){case 0:case 1:throw Error(x(345));case 2:on(e,Ke,Mt);break;case 3:if(Ut(e,a),(a&130023424)===a&&(t=Co+500-Me(),10<t)){if(Fi(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Aa(on.bind(null,e,Ke,Mt),t);break}on(e,Ke,Mt);break;case 4:if(Ut(e,a),(a&4194240)===a)break;for(t=e.eventTimes,o=-1;0<a;){var d=31-lt(a);s=1<<d,d=t[d],d>o&&(o=d),a&=~s}if(a=o,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*qu(a/1960))-a,10<a){e.timeoutHandle=Aa(on.bind(null,e,Ke,Mt),a);break}on(e,Ke,Mt);break;case 5:on(e,Ke,Mt);break;default:throw Error(x(329))}}}return Qe(e,Me()),e.callbackNode===n?Cc.bind(null,e):null}function Fo(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=xr(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&Bo(t)),e}function Bo(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function zu(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var o=n[a],s=o.getSnapshot;o=o.value;try{if(!ct(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Ro,t&=~gr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),a=1<<n;e[n]=-1,t&=~a}}function Tc(e){if((ce&6)!==0)throw Error(x(327));En();var t=Fi(e,0);if((t&1)===0)return Qe(e,Me()),null;var n=xr(e,t);if(e.tag!==0&&n===2){var a=sa(e);a!==0&&(t=a,n=Fo(e,a))}if(n===1)throw n=mi,an(e,0),Ut(e,t),Qe(e,Me()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Ke,Mt),Qe(e,Me()),null}function Io(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(In=Me()+500,Ki&&zt())}}function rn(e){Ht!==null&&Ht.tag===0&&(ce&6)===0&&En();var t=ce;ce|=1;var n=ot.transition,a=me;try{if(ot.transition=null,me=1,e)return e()}finally{me=a,ot.transition=n,ce=t,(ce&6)===0&&zt()}}function Eo(){tt=Bn.current,xe(Bn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mu(n)),Be!==null)for(n=Be.return;n!==null;){var a=n;switch(Wa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&$i();break;case 3:Tn(),xe(Ue),xe(ze),Za();break;case 5:Ya(a);break;case 4:Tn();break;case 13:xe(De);break;case 19:xe(De);break;case 10:$a(a.type._context);break;case 22:case 23:Eo()}n=n.return}if(Ae=e,Be=e=$t(e.current,null),qe=tt=t,Ee=0,mi=null,Ro=gr=nn=0,Ke=gi=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],a=n.interleaved,a!==null){n.interleaved=null;var o=a.next,s=n.pending;if(s!==null){var d=s.next;s.next=o,a.next=d}n.pending=a}Zt=null}return e}function Mc(e,t){do{var n=Be;try{if(Ua(),rr.current=lr,ar){for(var a=Re.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}ar=!1}if(tn=0,Pe=Ie=Re=null,li=!1,ci=0,Do.current=null,n===null||n.return===null){Ee=1,mi=t,Be=null;break}e:{var s=e,d=n.return,g=n,w=t;if(t=qe,g.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var P=w,H=g,O=H.tag;if((H.mode&1)===0&&(O===0||O===11||O===15)){var W=H.alternate;W?(H.updateQueue=W.updateQueue,H.memoizedState=W.memoizedState,H.lanes=W.lanes):(H.updateQueue=null,H.memoizedState=null)}var Q=Zl(d);if(Q!==null){Q.flags&=-257,ec(Q,d,g,s,t),Q.mode&1&&Xl(s,P,t),t=Q,w=P;var X=t.updateQueue;if(X===null){var Z=new Set;Z.add(w),t.updateQueue=Z}else X.add(w);break e}else{if((t&1)===0){Xl(s,P,t),Po();break e}w=Error(x(426))}}else if(Se&&g.mode&1){var Fe=Zl(d);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),ec(Fe,d,g,s,t),Ha(Mn(w,g));break e}}s=w=Mn(w,g),Ee!==4&&(Ee=2),gi===null?gi=[s]:gi.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var I=Jl(s,w,t);Sl(s,I);break e;case 1:g=w;var S=s.type,E=s.stateNode;if((s.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Gt===null||!Gt.has(E)))){s.flags|=65536,t&=-t,s.lanes|=t;var U=Yl(s,g,t);Sl(s,U);break e}}s=s.return}while(s!==null)}Ic(n)}catch(ee){t=ee,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function Fc(){var e=mr.current;return mr.current=lr,e===null?lr:e}function Po(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ae===null||(nn&268435455)===0&&(gr&268435455)===0||Ut(Ae,qe)}function xr(e,t){var n=ce;ce|=2;var a=Fc();(Ae!==e||qe!==t)&&(Mt=null,an(e,t));do try{Nu();break}catch(o){Mc(e,o)}while(!0);if(Ua(),ce=n,mr.current=a,Be!==null)throw Error(x(261));return Ae=null,qe=0,Ee}function Nu(){for(;Be!==null;)Bc(Be)}function Wu(){for(;Be!==null&&!ud();)Bc(Be)}function Bc(e){var t=Ac(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?Ic(e):Be=t,Do.current=null}function Ic(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Eu(n,t,tt),n!==null){Be=n;return}}else{if(n=Pu(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,Be=null;return}}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ee===0&&(Ee=5)}function on(e,t,n){var a=me,o=ot.transition;try{ot.transition=null,me=1,_u(e,t,n,a)}finally{ot.transition=o,me=a}return null}function _u(e,t,n,a){do En();while(Ht!==null);if((ce&6)!==0)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(xd(e,s),e===Ae&&(Be=Ae=null,qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yr||(yr=!0,Lc(Ri,function(){return En(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ot.transition,ot.transition=null;var d=me;me=1;var g=ce;ce|=4,Do.current=null,Lu(e,n),xc(n,e),su(Ea),Ei=!!Ia,Ea=Ia=null,e.current=n,ju(n),hd(),ce=g,me=d,ot.transition=s}else e.current=n;if(yr&&(yr=!1,Ht=e,br=o),s=e.pendingLanes,s===0&&(Gt=null),gd(n.stateNode),Qe(e,Me()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],a(o.value,{componentStack:o.stack,digest:o.digest});if(fr)throw fr=!1,e=To,To=null,e;return(br&1)!==0&&e.tag!==0&&En(),s=e.pendingLanes,(s&1)!==0?e===Mo?fi++:(fi=0,Mo=e):fi=0,zt(),null}function En(){if(Ht!==null){var e=vs(br),t=ot.transition,n=me;try{if(ot.transition=null,me=16>e?16:e,Ht===null)var a=!1;else{if(e=Ht,Ht=null,br=0,(ce&6)!==0)throw Error(x(331));var o=ce;for(ce|=4,J=e.current;J!==null;){var s=J,d=s.child;if((J.flags&16)!==0){var g=s.deletions;if(g!==null){for(var w=0;w<g.length;w++){var P=g[w];for(J=P;J!==null;){var H=J;switch(H.tag){case 0:case 11:case 15:pi(8,H,s)}var O=H.child;if(O!==null)O.return=H,J=O;else for(;J!==null;){H=J;var W=H.sibling,Q=H.return;if(fc(H),H===P){J=null;break}if(W!==null){W.return=Q,J=W;break}J=Q}}}var X=s.alternate;if(X!==null){var Z=X.child;if(Z!==null){X.child=null;do{var Fe=Z.sibling;Z.sibling=null,Z=Fe}while(Z!==null)}}J=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,J=d;else e:for(;J!==null;){if(s=J,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:pi(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,J=I;break e}J=s.return}}var S=e.current;for(J=S;J!==null;){d=J;var E=d.child;if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,J=E;else e:for(d=S;J!==null;){if(g=J,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:pr(9,g)}}catch(ee){Te(g,g.return,ee)}if(g===d){J=null;break e}var U=g.sibling;if(U!==null){U.return=g.return,J=U;break e}J=g.return}}if(ce=o,zt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Ci,e)}catch{}a=!0}return a}finally{me=n,ot.transition=t}}return!1}function Ec(e,t,n){t=Mn(n,t),t=Jl(e,t,1),e=Wt(e,t,1),t=He(),e!==null&&(Wn(e,1,t),Qe(e,t))}function Te(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Gt===null||!Gt.has(a))){e=Mn(n,e),e=Yl(t,e,1),t=Wt(t,e,1),e=He(),t!==null&&(Wn(t,1,e),Qe(t,e));break}}t=t.return}}function Gu(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(qe&n)===n&&(Ee===4||Ee===3&&(qe&130023424)===qe&&500>Me()-Co?an(e,0):Ro|=n),Qe(e,t)}function Pc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Mi,Mi<<=1,(Mi&130023424)===0&&(Mi=4194304)));var n=He();e=Rt(e,t),e!==null&&(Wn(e,t,n),Qe(e,n))}function Hu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pc(e,n)}function Ou(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(x(314))}a!==null&&a.delete(t),Pc(e,n)}var Ac;Ac=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Ve=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ve=!1,Iu(e,t,n);Ve=(e.flags&131072)!==0}else Ve=!1,Se&&(t.flags&1048576)!==0&&pl(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ur(e,t),e=t.pendingProps;var o=wn(t,ze.current);Cn(t,n),o=no(null,t,a,e,o,n);var s=io();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(a)?(s=!0,Vi(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Qa(t),o.updater=cr,t.stateNode=o,o._reactInternals=t,co(t,a,e,n),t=mo(null,t,a,!0,s,n)):(t.tag=0,Se&&s&&Na(t),Ge(null,t,o,n),t=t.child),t;case 16:a=t.elementType;e:{switch(ur(e,t),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=$u(a),e=ut(a,e),o){case 0:t=po(null,t,a,e,n);break e;case 1:t=oc(null,t,a,e,n);break e;case 11:t=tc(null,t,a,e,n);break e;case 14:t=nc(null,t,a,ut(a.type,e),n);break e}throw Error(x(306,a,""))}return t;case 0:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:ut(a,o),po(e,t,a,o,n);case 1:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:ut(a,o),oc(e,t,a,o,n);case 3:e:{if(sc(t),e===null)throw Error(x(387));a=t.pendingProps,s=t.memoizedState,o=s.element,kl(e,t),nr(t,a,null,n);var d=t.memoizedState;if(a=d.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Mn(Error(x(423)),t),t=lc(e,t,a,n,o);break e}else if(a!==o){o=Mn(Error(x(424)),t),t=lc(e,t,a,n,o);break e}else for(et=Lt(t.stateNode.containerInfo.firstChild),Ze=t,Se=!0,dt=null,n=wl(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),a===o){t=Tt(e,t,n);break e}Ge(e,t,a,n)}t=t.child}return t;case 5:return Rl(t),e===null&&Ga(t),a=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,d=o.children,Pa(a,o)?d=null:s!==null&&Pa(a,s)&&(t.flags|=32),ac(e,t),Ge(e,t,d,n),t.child;case 6:return e===null&&Ga(t),null;case 13:return cc(e,t,n);case 4:return Ja(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Dn(t,null,a,n):Ge(e,t,a,n),t.child;case 11:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:ut(a,o),tc(e,t,a,o,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,o=t.pendingProps,s=t.memoizedProps,d=o.value,be(Zi,a._currentValue),a._currentValue=d,s!==null)if(ct(s.value,d)){if(s.children===o.children&&!Ue.current){t=Tt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var g=s.dependencies;if(g!==null){d=s.child;for(var w=g.firstContext;w!==null;){if(w.context===a){if(s.tag===1){w=Ct(-1,n&-n),w.tag=2;var P=s.updateQueue;if(P!==null){P=P.shared;var H=P.pending;H===null?w.next=w:(w.next=H.next,H.next=w),P.pending=w}}s.lanes|=n,w=s.alternate,w!==null&&(w.lanes|=n),Va(s.return,n,t),g.lanes|=n;break}w=w.next}}else if(s.tag===10)d=s.type===t.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(x(341));d.lanes|=n,g=d.alternate,g!==null&&(g.lanes|=n),Va(d,n,t),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps.children,Cn(t,n),o=rt(o),a=a(o),t.flags|=1,Ge(e,t,a,n),t.child;case 14:return a=t.type,o=ut(a,t.pendingProps),o=ut(a.type,o),nc(e,t,a,o,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:ut(a,o),ur(e,t),t.tag=1,$e(a)?(e=!0,Vi(t)):e=!1,Cn(t,n),Kl(t,a,o),co(t,a,o,n),mo(null,t,a,!0,e,n);case 19:return uc(e,t,n);case 22:return rc(e,t,n)}throw Error(x(156,t.tag))};function Lc(e,t){return ms(e,t)}function Uu(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,a){return new Uu(e,t,n,a)}function Ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $u(e){if(typeof e=="function")return Ao(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===gt)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function kr(e,t,n,a,o,s){var d=2;if(a=e,typeof e=="function")Ao(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case R:return sn(n.children,o,s,t);case y:d=8,o|=8;break;case N:return e=st(12,n,t,o|2),e.elementType=N,e.lanes=s,e;case ve:return e=st(13,n,t,o),e.elementType=ve,e.lanes=s,e;case ge:return e=st(19,n,t,o),e.elementType=ge,e.lanes=s,e;case Ce:return Sr(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:d=10;break e;case re:d=9;break e;case fe:d=11;break e;case gt:d=14;break e;case Oe:d=16,a=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=st(d,n,t,o),t.elementType=e,t.type=a,t.lanes=s,t}function sn(e,t,n,a){return e=st(7,e,a,t),e.lanes=n,e}function Sr(e,t,n,a){return e=st(22,e,a,t),e.elementType=Ce,e.lanes=n,e.stateNode={isHidden:!1},e}function Lo(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function jo(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vu(e,t,n,a,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qo(e,t,n,a,o,s,d,g,w){return e=new Vu(e,t,n,g,w),t===1?(t=1,s===!0&&(t|=8)):t=0,s=st(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(s),e}function Ku(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function jc(e){if(!e)return qt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if($e(n))return dl(e,n,t)}return t}function qc(e,t,n,a,o,s,d,g,w){return e=qo(n,a,!0,e,o,s,d,g,w),e.context=jc(null),n=e.current,a=He(),o=Ot(n),s=Ct(a,o),s.callback=t??null,Wt(n,s,o),e.current.lanes=o,Wn(e,o,a),Qe(e,a),e}function Dr(e,t,n,a){var o=t.current,s=He(),d=Ot(o);return n=jc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(s,d),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Wt(o,t,d),e!==null&&(mt(e,o,d,s),tr(e,o,d)),d}function Rr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zo(e,t){zc(e,t),(e=e.alternate)&&zc(e,t)}function Qu(){return null}var Nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function No(e){this._internalRoot=e}Cr.prototype.render=No.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Dr(e,t,null,null)},Cr.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Dr(null,e,null,null)}),t[xt]=null}};function Cr(e){this._internalRoot=e}Cr.prototype.unstable_scheduleHydration=function(e){if(e){var t=ks();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&Rs(e)}};function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wc(){}function Ju(e,t,n,a,o){if(o){if(typeof a=="function"){var s=a;a=function(){var P=Rr(d);s.call(P)}}var d=qc(t,a,e,0,null,!1,!1,"",Wc);return e._reactRootContainer=d,e[xt]=d.current,ei(e.nodeType===8?e.parentNode:e),rn(),d}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var g=a;a=function(){var P=Rr(w);g.call(P)}}var w=qo(e,0,!1,null,null,!1,!1,"",Wc);return e._reactRootContainer=w,e[xt]=w.current,ei(e.nodeType===8?e.parentNode:e),rn(function(){Dr(t,w,n,a)}),w}function Mr(e,t,n,a,o){var s=n._reactRootContainer;if(s){var d=s;if(typeof o=="function"){var g=o;o=function(){var w=Rr(d);g.call(w)}}Dr(t,d,e,o)}else d=Ju(n,t,e,o,a);return Rr(d)}ws=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(ca(t,n|1),Qe(t,Me()),(ce&6)===0&&(In=Me()+500,zt()))}break;case 13:rn(function(){var a=Rt(e,1);if(a!==null){var o=He();mt(a,e,1,o)}}),zo(e,1)}},da=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=He();mt(t,e,134217728,n)}zo(e,134217728)}},xs=function(e){if(e.tag===13){var t=Ot(e),n=Rt(e,t);if(n!==null){var a=He();mt(n,e,t,a)}zo(e,t)}},ks=function(){return me},Ss=function(e,t){var n=me;try{return me=e,t()}finally{me=n}},na=function(e,t,n){switch(t){case"input":if(Kr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=Ui(a);if(!o)throw Error(x(90));Vo(a),Kr(a,o)}}}break;case"textarea":Xo(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}},ss=Io,ls=rn;var Yu={usingClientEntryPoint:!1,Events:[ii,bn,Ui,as,os,Io]},yi={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xu={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hs(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||Qu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{Ci=Fr.inject(Xu),ft=Fr}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yu,Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wo(t))throw Error(x(200));return Ku(e,t,null,n)},Je.createRoot=function(e,t){if(!Wo(e))throw Error(x(299));var n=!1,a="",o=Nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qo(e,1,!1,null,null,n,!1,a,o),e[xt]=t.current,ei(e.nodeType===8?e.parentNode:e),new No(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=hs(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return rn(e)},Je.hydrate=function(e,t,n){if(!Tr(t))throw Error(x(200));return Mr(null,e,t,!0,n)},Je.hydrateRoot=function(e,t,n){if(!Wo(e))throw Error(x(405));var a=n!=null&&n.hydratedSources||null,o=!1,s="",d=Nc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=qc(t,null,e,1,n??null,o,!1,s,d),e[xt]=t.current,ei(e),a)for(e=0;e<a.length;e++)n=a[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Cr(t)},Je.render=function(e,t,n){if(!Tr(t))throw Error(x(200));return Mr(null,e,t,!1,n)},Je.unmountComponentAtNode=function(e){if(!Tr(e))throw Error(x(40));return e._reactRootContainer?(rn(function(){Mr(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1},Je.unstable_batchedUpdates=Io,Je.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Tr(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Mr(e,t,n,!1,a)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var Kc;function oh(){if(Kc)return Ho.exports;Kc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Ho.exports=ah(),Ho.exports}var Qc;function sh(){if(Qc)return Br;Qc=1;var l=oh();return Br.createRoot=l.createRoot,Br.hydrateRoot=l.hydrateRoot,Br}var lh=sh();const ch={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Jc=[{id:"p1",num:"01",weeks:"Weeks 1-2",color:"#7C3AED",title:"Foundations — Boolean Retrieval & Inverted Indexes",hook:"Manning Ch. 1 — the simple data structure that powers every search engine on Earth",concepts:["What is Information Retrieval? — finding unstructured material that satisfies an information need","The term-document incidence matrix — naive approach that explodes in memory","**Inverted index** — the fundamental data structure of search (term → sorted postings list of doc IDs)","Boolean retrieval: AND, OR, NOT operators via postings list intersection","Query optimization: process rarest terms first to minimize intersection work","Extended Boolean: phrase queries, proximity queries (NEAR operator)","The three pillars of IR: **indexing** (storage), **retrieval** (matching), **ranking** (ordering)","Why Google/Bing/Elasticsearch all still use inverted indexes 60 years after their invention"],deliverable:"Build an inverted index from 1000 Wikipedia articles. Implement AND/OR/NOT Boolean queries. Measure query time against full-text grep.",resources:[{type:"read",title:"Manning Ch. 1 — Boolean Retrieval (free online)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/boolean-retrieval-1.html"},{type:"read",title:"Stanford CS276 — Information Retrieval Course",url:"https://web.stanford.edu/class/cs276/"},{type:"infographic",title:"How Google Search Works — The Foundations",url:"https://www.google.com/search/howsearchworks/"},{type:"video",title:"Manning lectures on IR (Stanford)",url:"https://www.youtube.com/playlist?list=PLoROMvodv4rOFZnDyrlW3-nI7tMLtmiJZ"}]},{id:"p2",num:"02",weeks:"Weeks 3-4",color:"#DC2626",title:"Term Vocabulary & Postings Lists",hook:"Manning Ch. 2 — how raw text becomes searchable tokens, and how indexes get fast",concepts:["**Tokenization** — splitting text into terms (harder than it looks: apostrophes, hyphens, URLs, emojis)","Language-specific challenges: Chinese/Japanese word segmentation, Arabic morphology, compound German words","**Stop words** — should we remove 'the', 'is', 'and'? (modern systems keep them for phrase queries)","**Normalization** — case folding, accent removal, Unicode normalization (NFC vs NFD)","**Stemming** — Porter stemmer, Snowball: 'running' → 'run', but 'organization' → 'organ' (lossy)","**Lemmatization** — dictionary-based reduction to root form (accurate but slow)","Skip lists — augment postings lists for O(√n) intersection instead of O(n)","**Positional indexes** — store position offsets for phrase queries ('machine learning' as exact phrase)","Biword indexes — indexing word pairs directly for common multi-word queries","The bifurcated indexing approach — position + frequency in separate postings for cache efficiency"],deliverable:"Build a full text-processing pipeline: tokenize → normalize → stem → index with positions. Support phrase queries. Benchmark against Elasticsearch on the same corpus.",resources:[{type:"read",title:"Manning Ch. 2 — Term Vocabulary & Postings",url:"https://nlp.stanford.edu/IR-book/html/htmledition/the-term-vocabulary-and-postings-lists-1.html"},{type:"read",title:"Porter Stemmer — Original 1980 Paper",url:"https://tartarus.org/martin/PorterStemmer/"},{type:"read",title:"Snowball — Porter's Language for Stemming Algorithms",url:"https://snowballstem.org/"},{type:"read",title:"Lucene Analyzers — Production Tokenization",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/analysis/package-summary.html"}]},{id:"p3",num:"03",weeks:"Weeks 5-6",color:"#0369A1",title:"Dictionaries & Tolerant Retrieval",hook:"Manning Ch. 3 — handling typos, wildcards, and the messy reality of user queries",concepts:["**Dictionary data structures** — hash tables vs B-trees for term lookup","Wildcard queries: prefix ('auto*'), suffix ('*tion'), infix ('au*ile')","**Permuterm index** — rotate terms for wildcard queries: 'hello$' → $hello, hello$, ello$h, llo$he, lo$hel, o$hell","**k-gram indexes** — break terms into character n-grams for wildcard and fuzzy matching","**Edit distance (Levenshtein)** — dynamic programming algorithm for spelling correction","**Soundex** — phonetic matching for names (Robert vs Rupert → same code)","Context-sensitive spelling correction — 'flew form Paris' → 'flew from Paris' via language models","**Google's 'Did you mean?'** — query log mining + edit distance + language model","Query autocomplete — prefix tries, frequency-weighted suggestions","Fuzzy search in production: Elasticsearch's fuzzy query, Lucene's FuzzyQuery"],deliverable:"Implement a spelling corrector using edit distance + unigram language model. Achieve >80% correction accuracy on Norvig's test set. Add wildcard query support.",resources:[{type:"read",title:"Manning Ch. 3 — Dictionaries & Tolerant Retrieval",url:"https://nlp.stanford.edu/IR-book/html/htmledition/dictionaries-and-tolerant-retrieval-1.html"},{type:"read",title:"Peter Norvig — How to Write a Spelling Corrector",url:"https://norvig.com/spell-correct.html"},{type:"read",title:"Elasticsearch Fuzzy Query Docs",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-fuzzy-query.html"}]},{id:"p4",num:"04",weeks:"Weeks 7-8",color:"#0E7490",title:"Index Construction & Compression",hook:"Manning Ch. 4-5 — building indexes at web scale and fitting them in memory",concepts:["**BSBI (Blocked Sort-Based Indexing)** — sort-merge approach when index doesn't fit in RAM","**SPIMI (Single-Pass In-Memory Indexing)** — write each block as separate index, merge at end","**MapReduce indexing** — how Google indexed the whole web in 2004","Distributed indexing: shard-by-document vs shard-by-term (Google uses by-doc)","**Dynamic indexing** — handling inserts, deletes, updates without full rebuild","Logarithmic merge trees — amortized cost structure used in LSM trees, Lucene segments","**Dictionary compression** — blocked storage, front coding, dictionary-as-string (saves 60%+)","**Postings compression** — variable byte encoding, γ-codes, δ-codes, simple9/simple16","**Elias Fano encoding** — used by modern search engines (Tantivy, PISA)","**Frame of Reference (FOR) + Roaring Bitmaps** — the modern state of the art","The engineering payoff: a 400GB raw corpus compresses to ~100GB index with <10% query slowdown"],deliverable:"Implement SPIMI indexing for a 10GB corpus. Add variable-byte compression for postings. Measure compression ratio and query latency vs uncompressed baseline.",resources:[{type:"read",title:"Manning Ch. 4 — Index Construction",url:"https://nlp.stanford.edu/IR-book/html/htmledition/index-construction-1.html"},{type:"read",title:"Manning Ch. 5 — Index Compression",url:"https://nlp.stanford.edu/IR-book/html/htmledition/index-compression-1.html"},{type:"read",title:"Google's MapReduce Paper (2004)",url:"https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/"},{type:"read",title:"PISA — Performant Indexes and Search for Academia",url:"https://github.com/pisa-engine/pisa"}]},{id:"p5",num:"05",weeks:"Weeks 9-10",color:"#B91C1C",title:"Scoring & the Vector Space Model",hook:"Manning Ch. 6-7 — from Boolean yes/no to ranked relevance, the birth of modern IR",concepts:["The limits of Boolean retrieval — too many or too few results, no ordering","**Term frequency (TF)** — documents with more occurrences of a term are more relevant","**Inverse document frequency (IDF)** — rare terms are more informative (log(N/df))","**TF-IDF** — the foundational relevance formula that ruled IR from 1970s-2000s","**Vector Space Model** — represent documents and queries as vectors in term space","**Cosine similarity** — angle between query vector and doc vector as relevance","Document length normalization — why 'pivoted length normalization' matters","**BM25 (Best Matching 25)** — the probabilistic model that replaced TF-IDF, still used by Google/Elasticsearch","BM25 parameters: k1 (term frequency saturation) and b (length normalization)","**BM25F** — fielded BM25 for structured documents (title, body, anchor text weighted differently)","Champion lists & impact-ordered postings — retrieve top-k without scanning everything","**WAND & BlockMaxWAND** — the algorithms that make sub-millisecond ranking possible"],deliverable:"Implement TF-IDF and BM25 from scratch. Compare rankings on the same queries. Tune k1 and b via grid search on a labeled dataset. Beat a naive baseline on MS MARCO.",resources:[{type:"read",title:"Manning Ch. 6 — Scoring, Term Weighting & Vector Space Model",url:"https://nlp.stanford.edu/IR-book/html/htmledition/scoring-term-weighting-and-the-vector-space-model-1.html"},{type:"read",title:"Manning Ch. 7 — Complete Search System",url:"https://nlp.stanford.edu/IR-book/html/htmledition/computing-scores-in-a-complete-search-system-1.html"},{type:"read",title:"Robertson & Zaragoza — BM25 and Beyond",url:"https://www.nowpublishers.com/article/Details/INR-019"},{type:"infographic",title:"BM25 Visualized — Interactive Guide",url:"https://medium.com/@spandana_doki/ranking-documents-with-bm25-understanding-the-math-behind-search-relevance-31505b350825"}]},{id:"p6",num:"06",weeks:"Weeks 11-12",color:"#15803D",title:"Evaluation in Information Retrieval",hook:"Manning Ch. 8 — if you can't measure it, you can't improve it (the hardest chapter in IR)",concepts:["**Precision** (fraction of retrieved that are relevant) vs **Recall** (fraction of relevant that are retrieved)","**F1 score** — harmonic mean of precision and recall","**Precision@k (P@k)** — precision at top-k results (e.g., P@10 for web search)","**Mean Average Precision (MAP)** — averaging precision over multiple queries","**nDCG (Normalized Discounted Cumulative Gain)** — the gold standard for ranked retrieval","DCG formula: gain / log₂(rank+1) — rewards putting relevant results higher","**Mean Reciprocal Rank (MRR)** — for question-answering and navigational queries","**Cohen's Kappa** — measuring inter-annotator agreement on relevance judgments","Pooling — how TREC creates relevance judgments without labeling everything","**A/B testing** — the only metric that matters in production: click-through, dwell time, conversions","**TREC (Text REtrieval Conference)** — the decades-long benchmark that drives IR research","Modern benchmarks: **MS MARCO**, **BEIR**, **LoTTE**, **MTEB** — the evaluation frontier"],deliverable:"Build an evaluation harness. Score BM25 vs TF-IDF on MS MARCO with nDCG@10, MRR, and MAP. Create visualizations of precision-recall curves.",resources:[{type:"read",title:"Manning Ch. 8 — Evaluation in IR",url:"https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-in-information-retrieval-1.html"},{type:"read",title:"MS MARCO — Microsoft's Passage Ranking Benchmark",url:"https://microsoft.github.io/msmarco/"},{type:"read",title:"BEIR — Heterogeneous IR Benchmark",url:"https://github.com/beir-cellar/beir"},{type:"read",title:"TREC — Text REtrieval Conference Homepage",url:"https://trec.nist.gov/"}]},{id:"p7",num:"07",weeks:"Weeks 13-14",color:"#EA580C",title:"Relevance Feedback & Query Expansion",hook:"Manning Ch. 9 — making users happier by understanding what they really meant",concepts:["**Explicit relevance feedback** — user marks results as relevant/not relevant, system learns","**Rocchio's algorithm** — move query vector toward relevant docs, away from non-relevant","**Pseudo-relevance feedback (blind feedback)** — assume top-k initial results are relevant","**Query expansion** — adding related terms to the original query","Global methods: **thesauri and WordNet** — 'car' → add 'automobile', 'vehicle'","Local methods: expand with terms from top-ranked documents (e.g., RM3)","**Word embeddings for expansion** — find semantically similar terms via Word2Vec/GloVe","**Query reformulation** — how Google rewrites queries internally (Hummingbird, 2013)","**Hypothetical Document Embeddings (HyDE)** — LLM generates a fake answer, embed it, search for real answers","Query suggestions & auto-complete — prefix matching + popularity weighting","Session-based expansion — using prior queries in the same session for context","The production reality: Google's query rewrites happen silently, billions of times per day"],deliverable:"Implement Rocchio's algorithm and pseudo-relevance feedback. Compare query expansion strategies on TREC Robust04. Add a HyDE-style LLM query expansion and measure improvement.",resources:[{type:"read",title:"Manning Ch. 9 — Relevance Feedback & Query Expansion",url:"https://nlp.stanford.edu/IR-book/html/htmledition/relevance-feedback-and-query-expansion-1.html"},{type:"read",title:"Gao et al. 2023 — HyDE Paper",url:"https://arxiv.org/abs/2212.10496"},{type:"read",title:"RM3 — Relevance Model for Query Expansion",url:"https://dl.acm.org/doi/10.1145/1008992.1009052"}]},{id:"p8",num:"08",weeks:"Weeks 15-16",color:"#9333EA",title:"Probabilistic & Language Model IR",hook:"Manning Ch. 11-12 — the mathematical underpinnings of modern ranking",concepts:["**The Probability Ranking Principle (PRP)** — rank documents by probability of relevance","**Binary Independence Model (BIM)** — documents and queries as sets of binary term occurrences","Derivation of **BM25** from probabilistic principles (not just a heuristic!)","**Language Models for IR** — each document generates a probability distribution over terms","**Query likelihood** — rank by P(query | doc language model)","**Smoothing** — Jelinek-Mercer (linear interpolation), Dirichlet (Bayesian prior)","Why smoothing matters: unseen query terms would give probability 0 without it","**Divergence from Randomness (DFR)** models — Terrier's alternative framework","**KL-divergence retrieval** — measuring how different the query distribution is from each document","Connection to modern neural retrieval — BERT retrieval as implicit language modeling","The mathematical beauty: BM25 and language models converge in practice despite different theory"],deliverable:"Implement query-likelihood with Dirichlet smoothing. Compare with BM25 on BEIR benchmark. Derive the BM25 formula from the Binary Independence Model on paper.",resources:[{type:"read",title:"Manning Ch. 11 — Probabilistic IR",url:"https://nlp.stanford.edu/IR-book/html/htmledition/probabilistic-information-retrieval-1.html"},{type:"read",title:"Manning Ch. 12 — Language Models for IR",url:"https://nlp.stanford.edu/IR-book/html/htmledition/language-models-for-information-retrieval-1.html"},{type:"read",title:"Ponte & Croft 1998 — The Original Language Model for IR",url:"https://ciir.cs.umass.edu/pubfiles/ir-120.pdf"}]},{id:"p9",num:"09",weeks:"Weeks 17-18",color:"#059669",title:"Text Classification & Clustering",hook:"Manning Ch. 13-17 — organizing documents beyond retrieval: categorization, clustering, semantic analysis",concepts:["**Naive Bayes classification** — probabilistic approach, still a surprisingly strong baseline","**Vector space classification** — nearest centroid (Rocchio classifier), k-NN","**Support Vector Machines (SVMs)** — the dominant text classifier of the 2000s-2010s","**Feature engineering for text** — n-grams, character n-grams, TF-IDF features","Document classification applications: spam filtering, news categorization, sentiment analysis, topic tagging","**k-means clustering** — partitioning documents into K groups (flat clustering)","**Hierarchical clustering** — agglomerative (bottom-up) and divisive (top-down)","Cluster evaluation: purity, Rand index, normalized mutual information (NMI)","**Latent Semantic Indexing (LSI/LSA)** — SVD of term-document matrix for semantic analysis","**Latent Dirichlet Allocation (LDA)** — topic modeling, probabilistic version of LSA","**Modern evolution:** BERT/sentence-transformers replace these for classification at scale","Still-relevant use cases: quick prototypes, interpretability, small-data regimes"],deliverable:"Build Naive Bayes and k-NN text classifiers from scratch. Compare with fine-tuned BERT on Reuters-21578 (classic dataset). Cluster a Wikipedia subset with k-means and LDA; evaluate with NMI.",resources:[{type:"read",title:"Manning Ch. 13 — Text Classification & Naive Bayes",url:"https://nlp.stanford.edu/IR-book/html/htmledition/text-classification-and-naive-bayes-1.html"},{type:"read",title:"Manning Ch. 14-15 — Vector Space Classification & SVMs",url:"https://nlp.stanford.edu/IR-book/html/htmledition/vector-space-classification-1.html"},{type:"read",title:"Manning Ch. 16-17 — Flat & Hierarchical Clustering",url:"https://nlp.stanford.edu/IR-book/html/htmledition/flat-clustering-1.html"},{type:"read",title:"Manning Ch. 18 — Matrix Decompositions & LSI",url:"https://nlp.stanford.edu/IR-book/html/htmledition/matrix-decompositions-and-latent-semantic-indexing-1.html"}]},{id:"p10",num:"10",weeks:"Weeks 19-20",color:"#DC2626",title:"Web Search — Crawling, Indexing, Link Analysis",hook:"Manning Ch. 19-21 — the special challenges of searching the open web",concepts:["What makes web search different: scale (trillions of pages), adversarial (SEO/spam), heterogeneous","**Web crawlers** — how Googlebot works: URL frontier, politeness, robots.txt, crawl scheduling","Duplicate detection: **MinHash & SimHash** for near-duplicate pages (essential for web)","**URL frontier** prioritization — PageRank + freshness + change frequency","Crawl challenges: JavaScript rendering, infinite spaces, trap detection, distributed crawling","Anchor text indexing — link text is enormously valuable (treated like document metadata)","**PageRank** — the algorithm that built Google (random walk on the web graph)","PageRank math: eigenvector of modified adjacency matrix, teleportation parameter (~0.85)","**HITS (Hubs & Authorities)** — Kleinberg's alternative to PageRank","**TrustRank, SpamRank** — combating link spam and bought backlinks","Web spam taxonomy: cloaking, doorway pages, link farms, content spinning","**Helpful Content Update (Google, 2022)** — machine learning classifier for page quality","The E-E-A-T signals: Experience, Expertise, Authoritativeness, Trustworthiness"],deliverable:"Build a mini-crawler respecting robots.txt. Index 100K pages. Implement PageRank via power iteration. Visualize the graph and top-ranked pages.",resources:[{type:"read",title:"Manning Ch. 19 — Web Search Basics",url:"https://nlp.stanford.edu/IR-book/html/htmledition/web-search-basics-1.html"},{type:"read",title:"Manning Ch. 20 — Web Crawling & Indexes",url:"https://nlp.stanford.edu/IR-book/html/htmledition/web-crawling-and-indexes-1.html"},{type:"read",title:"Manning Ch. 21 — Link Analysis",url:"https://nlp.stanford.edu/IR-book/html/htmledition/link-analysis-1.html"},{type:"read",title:"Brin & Page 1998 — The Original Google Paper",url:"http://infolab.stanford.edu/~backrub/google.html"},{type:"read",title:"Google Search Central — Crawling & Indexing Docs",url:"https://developers.google.com/search/docs"}]},{id:"p11",num:"11",weeks:"Weeks 21-22",color:"#7C3AED",title:"Neural IR & The Transformer Revolution",hook:"Beyond the textbook — how BERT, BM25-rerankers, and dense retrieval reshape search (2018–present)",concepts:["The limits of lexical retrieval — vocabulary mismatch: 'car' won't match 'automobile'","**Word embeddings for IR** — Word2Vec, GloVe bringing semantics to retrieval","**DSSM (Microsoft 2013)** — the first deep learning retrieval model","**BERT for ranking** — cross-encoders: concatenate [query, doc], output relevance score","The rerank pipeline: BM25 retrieves top-1000 → BERT reranks → top-10 to user","**Bi-encoders (DPR, ANCE)** — encode query and docs separately, cosine similarity for retrieval","**ColBERT** — late interaction: token-level matching preserves BERT power at retrieval speed","**SPLADE** — learned sparse retrieval: BERT predicts important terms + weights in vocabulary space","**RankLLM & LLM-based ranking** — zero-shot ranking with GPT-4/Claude as the final ranker","**Hybrid search** — combining BM25 + dense + sparse via Reciprocal Rank Fusion (RRF)","Training retrievers: contrastive learning, hard negatives, in-batch negatives","**MS MARCO & TREC Deep Learning tracks** — how neural retrieval dethroned BM25"],deliverable:"Build a two-stage retrieval pipeline: BM25 candidate generation + BERT cross-encoder reranking. Measure improvement on BEIR. Compare with a pure dense retrieval baseline using sentence-transformers.",resources:[{type:"read",title:"Lin et al. — Pretrained Transformers for Text Ranking (comprehensive book)",url:"https://arxiv.org/abs/2010.06467"},{type:"read",title:"Karpukhin et al. 2020 — DPR (Dense Passage Retrieval)",url:"https://arxiv.org/abs/2004.04906"},{type:"read",title:"Khattab & Zaharia 2020 — ColBERT",url:"https://arxiv.org/abs/2004.12832"},{type:"read",title:"Formal et al. 2021 — SPLADE",url:"https://arxiv.org/abs/2107.05720"},{type:"infographic",title:"Pyserini — Sparse + Dense Retrieval Toolkit",url:"https://github.com/castorini/pyserini"}]},{id:"p12",num:"12",weeks:"Weeks 23-24",color:"#B45309",title:"Learning to Rank",hook:"The machine learning framework that powers every commercial search engine",concepts:["Why Learning to Rank (LTR)? — combining hundreds of relevance signals optimally","**Pointwise LTR** — predict relevance score for each (query, doc) pair independently (regression)","**Pairwise LTR** — learn to order pairs correctly (RankNet, RankSVM)","**Listwise LTR** — optimize the entire ranking directly (LambdaRank, LambdaMART)","**LambdaMART** — the gradient-boosted tree algorithm behind Bing/Yahoo for years","**Feature engineering for LTR**: BM25, TF-IDF, PageRank, click-through rate, recency, domain authority, ~200+ features","**LETOR datasets** — Microsoft's public LTR benchmarks for research","Click models: position bias, cascade model, DBN — extracting signal from click logs","**Counterfactual evaluation** — learning from logged clicks without biasing toward what users saw","**Neural LTR** — replacing boosted trees with deep networks (but GBM still often wins)","**Google's ML-based ranking**: RankBrain (2015), DeepRank, Neural Matching, RankEmbed","Production LTR: feature stores, online learning, exploration-exploitation tradeoffs"],deliverable:"Train a LambdaMART model on MSLR-WEB30K. Engineer 20+ features. Measure nDCG@10 improvement over BM25 baseline. Analyze which features matter most.",resources:[{type:"read",title:"Liu 2009 — Learning to Rank for IR (foundational survey)",url:"https://www.nowpublishers.com/article/Details/INR-016"},{type:"read",title:"LightGBM LambdaRank Tutorial",url:"https://lightgbm.readthedocs.io/en/latest/Features.html#lambdarank"},{type:"read",title:"Microsoft LETOR Datasets",url:"https://www.microsoft.com/en-us/research/project/letor-learning-rank-information-retrieval/"},{type:"read",title:"Google's Ranking Systems Guide (official)",url:"https://developers.google.com/search/docs/appearance/ranking-systems-guide"}]},{id:"p13",num:"13",weeks:"Weeks 25-26",color:"#0369A1",title:"Modern Search Engine Architecture",hook:"How Google, Bing, DuckDuckGo, Elasticsearch, Algolia actually work under the hood",concepts:["The multi-stage ranking architecture: candidate generation → first-pass ranking → neural rerank → business logic","**Google's stack (public info):** Caffeine indexer, Percolator for incremental updates, Colossus filesystem","Google's ranking stages: retrieval (inverted index + RankEmbed) → scoring (BM25-like) → RankBrain/DeepRank → Twiddlers (diversity, freshness) → business rules","**Apache Lucene** — the library behind Elasticsearch, Solr, OpenSearch, and dozens of others","Lucene internals: segments (immutable), translog (WAL), merges, refresh cycle","**Elasticsearch architecture**: cluster → nodes → indices → shards (primary + replica) → Lucene segments","**Fan-out/fan-in pattern** — query hits coordinator → parallel to all shards → merge results","Sharding strategies: hash-based routing vs time-based (for log data) vs tenant-based","**Near Real-Time (NRT)** search — 1-second refresh interval is the classic Elasticsearch default","**Query parser & analyzer chain** — how 'Tim's shoes' becomes ['tim', 'shoe']","**Bing's architecture** — TigerGraph for knowledge graph, Project Turing for neural ranking","**DuckDuckGo** — 400+ sources (Bing, Yandex, own crawl); privacy-preserving aggregation","**Algolia** — SaaS search optimized for instant (typo-tolerant, sub-10ms)","**Meilisearch, Typesense, Tantivy** — the modern Rust/C++ alternatives"],deliverable:"Deploy Elasticsearch locally. Index 1M documents across 3 shards. Write complex queries with filters, facets, highlighting. Benchmark against OpenSearch and Meilisearch. Profile query latency under load.",resources:[{type:"read",title:"Elasticsearch: The Definitive Guide (free, classic)",url:"https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html"},{type:"read",title:"Lucene Internals — Deep Dive",url:"https://dev.to/heisenberg60/understanding-lucene-the-engine-behind-elasticsearchs-magic-4ke8"},{type:"read",title:"How Google Search Works — Internal Technical Details (from DOJ trial)",url:"https://keywordspeopleuse.com/seo/guides/how-google-search-works"},{type:"read",title:"Apache Solr Reference Guide",url:"https://solr.apache.org/guide/"},{type:"read",title:"Tantivy — Rust's answer to Lucene",url:"https://github.com/quickwit-oss/tantivy"},{type:"read",title:"Meilisearch Documentation",url:"https://www.meilisearch.com/docs"}]},{id:"p14",num:"14",weeks:"Weeks 27-28",color:"#7C2D12",title:"Storage Engines & Datastores Behind Search",hook:"Every search engine is ultimately a storage system — understand the databases, engines, and distributed systems that make it all work",concepts:["**The storage engine question:** search engines don't store data in 'a database' — they use specialized engines optimized for append-heavy, read-mostly workloads","**LSM-Tree (Log-Structured Merge Tree)** — the storage engine paradigm behind Lucene, Cassandra, HBase, RocksDB, LevelDB. Optimized for write throughput via sequential disk writes","LSM-Tree anatomy: MemTable (in-memory sorted structure) → WAL (write-ahead log for durability) → SSTables (immutable sorted files on disk) → compaction","**Bloom filters** — probabilistic data structure used by LSM engines to avoid checking SSTables that don't contain a key","**Compaction strategies:** leveled (LevelDB, RocksDB) vs size-tiered (Cassandra) — the classic write-amplification vs read-amplification tradeoff","**B-Trees vs LSM** — why traditional databases (PostgreSQL, InnoDB) use B-trees (read-optimized) while search engines use LSM (write-optimized)","**Lucene's segment architecture:** MemTable-like buffer → flush to immutable segment → background merge. Near-identical to LSM but with inverted-index contents","**Write-Ahead Log (WAL) / Translog** — the durability guarantee: every write is logged before acknowledged, replayed after crashes","**Immutability as a design principle** — why Lucene segments never mutate (simpler concurrency, better caching, cheap snapshots)","**Google's storage stack:** Colossus (distributed filesystem, successor to GFS) → Bigtable (NoSQL on Colossus) → Spanner (global transactions) → BigQuery (analytics)","**Bigtable** — the paper that inspired HBase and Cassandra. Column-family data model, SSTables, and the birthplace of LSM terminology","**Colossus** — exabyte-scale filesystem where Google stores search indexes; uses Bigtable for metadata, D-file-servers for data","**Indexes beyond inverted:** forward indexes (docID→field data), doc values (column-oriented per-field storage for sorting/aggregations), BKD trees (numeric/geo), FSTs (dictionary)","**Transactions in search engines: mostly NO.** Lucene/Elasticsearch have no multi-document transactions — only single-doc atomic updates and optimistic concurrency via version numbers","Why no transactions? Search is append-dominated, eventual consistency is acceptable, and ACID would destroy write throughput at scale","**Sharding strategies:** hash-based (random distribution, balanced load), range-based (efficient range queries, risk of hotspots), custom routing (tenant-based, time-based)","Shard-by-document (Google, Elasticsearch default) vs shard-by-term (rare, only for specific use cases) — fan-out query pattern explained","**Replication models:** primary-replica (Elasticsearch, Solr legacy), multi-primary (Cassandra), leader-based with Raft (modern systems)","**The CAP theorem applied to search:** most search engines are **AP** (Availability + Partition tolerance, sacrificing Consistency) — eventual consistency is fine when you're returning top-10 relevant docs","CAP in practice: Elasticsearch defaults to AP (stale reads during partitions); Solr with ZooKeeper leans CP (may reject writes during partitions); Google Spanner achieves 'effective CA' via TrueTime","**Consistency levels in Cassandra/ScyllaDB:** ONE, QUORUM, ALL — tunable per-query consistency","**PACELC theorem** — extends CAP: if there's a Partition (P), choose Availability or Consistency; Else (E), choose Latency or Consistency","**Near-Real-Time (NRT) search** — Elasticsearch's 1-second refresh: writes are durable in translog but not visible to queries for ~1s. The tradeoff between write throughput and search freshness","**Real-time search** — achieved via the GetById API that bypasses segments by reading the translog directly","**Cross-datacenter replication:** CCR (Cross-Cluster Replication) in Elasticsearch, async replication in Solr, Spanner's synchronous Paxos groups","**Cold vs hot data tiering:** frequently-searched indexes in RAM/SSD, rarely-searched in cheaper storage (S3, HDD) — used by Elasticsearch ILM, Google's distillery system","**Durability tradeoffs:** Lucene fsyncs on commit (slow) vs translog flush every 5s (fast, small data loss risk); each engine picks its own defaults","**Modern alternatives to Lucene/ES storage:**","**Tantivy (Rust)** — Lucene-inspired but uses tighter segment format, memory-mapped indexes, outperforms Lucene on many benchmarks","**Quickwit** — built on Tantivy, stores indexes on object storage (S3) for extreme cost efficiency at scale","**Vespa (Yahoo)** — purpose-built search engine with strong consistency, used by Yahoo Search, Spotify, HBO Max","**Redis Search** — all-in-memory indexes, suitable for sub-millisecond low-cardinality search","**OpenSearch** — AWS's fork of Elasticsearch 7.10, same Lucene foundation but divergent clustering internals","**Turbopuffer** — object-storage-native (S3), serverless, pay-per-query. Used by Cursor, Notion, Suno. Trades latency (~100ms) for extreme cost savings","**ClickHouse for search** — column-oriented OLAP DB increasingly used for log search; not a classical search engine but competes with ES for that workload"],deliverable:"Build a write path that mirrors Lucene: memtable → WAL → flush to immutable segment → background merge. Measure write throughput vs durability tradeoffs. Write a 5-page comparison doc: pick 5 search systems and map each one to its storage engine, consistency model, replication strategy, and CAP position.",resources:[{type:"read",title:"Kleppmann — Designing Data-Intensive Applications (the definitive systems book)",url:"https://dataintensive.net/"},{type:"read",title:"Google — Bigtable Paper (2006, seminal)",url:"https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf"},{type:"read",title:"Google — The Colossus File System (Cloud Blog)",url:"https://cloud.google.com/blog/products/storage-data-transfer/a-peek-behind-colossus-googles-file-system"},{type:"read",title:"Google — Spanner Paper (globally-consistent DB with TrueTime)",url:"https://research.google/pubs/spanner-googles-globally-distributed-database-2/"},{type:"read",title:"O'Neil et al. — The Log-Structured Merge-Tree Paper (1996)",url:"https://www.cs.umb.edu/~poneil/lsmtree.pdf"},{type:"read",title:"Alibaba — Lucene Analysis: Basic Concepts & Index Types",url:"https://www.alibabacloud.com/blog/analysis-of-lucene---basic-concepts_594672"},{type:"read",title:"RocksDB Wiki — LSM internals and tunable parameters",url:"https://github.com/facebook/rocksdb/wiki/RocksDB-Overview"},{type:"read",title:"Elasticsearch — Consistency Model and Replication Docs",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-replication.html"},{type:"read",title:"Vespa Architecture — Purpose-built Search Engine",url:"https://docs.vespa.ai/en/overview.html"},{type:"read",title:"Martin Kleppmann — Please Stop Calling Databases CP or AP",url:"https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html"},{type:"read",title:"Quickwit — Search on Object Storage",url:"https://quickwit.io/docs/overview/introduction"},{type:"video",title:"Jepsen — Testing Distributed Systems (classic tests of ES, Cassandra, etc.)",url:"https://jepsen.io/analyses"}]},{id:"p15",num:"15",weeks:"Weeks 29-30",color:"#0E7490",title:"The Modern Retrieval Stack — LLM-Era IR",hook:"Where IR is going — retrieval agents, multimodal search, and the next 10 years",concepts:["**Retrieval-Augmented Generation (RAG)** — IR is no longer just for humans, it feeds LLMs","The LLM retrieval loop: query → retrieve → augment prompt → generate → (maybe) re-retrieve","**Agentic search** — Perplexity, ChatGPT Search, Claude web search: LLMs that search iteratively","**Query decomposition** — breaking complex questions into sub-queries that each get retrieved","**Multi-hop retrieval** — following citation chains, graph traversal for reasoning","**GraphRAG (Microsoft 2024)** — extract entities and relations, traverse the graph for context","**Contextual Retrieval (Anthropic 2024)** — prepend chunk-specific context to reduce retrieval failures by 49-67%","**Reranking with LLMs** — Cohere Rerank, RankGPT, RankZephyr replacing cross-encoders","**Multimodal retrieval** — CLIP for image-text, unified embedding spaces for text/image/video/audio","**Generative retrieval** — models like DSI that generate document IDs directly (no index lookup)","**Real-time + streaming indexes** — how modern engines handle live data (Kafka → index)","The economics: sub-cent-per-query cost targets, GPU vs CPU inference tradeoffs","**Privacy-preserving search** — federated retrieval, differential privacy, on-device search"],deliverable:"Build an end-to-end modern RAG system: Elasticsearch + sentence-transformers hybrid retrieval, Cohere/cross-encoder reranking, contextual retrieval chunking, LLM generation with citations. Evaluate with RAGAS. Deploy to production with observability.",resources:[{type:"read",title:"Anthropic — Contextual Retrieval",url:"https://www.anthropic.com/news/contextual-retrieval"},{type:"read",title:"Microsoft — GraphRAG",url:"https://arxiv.org/abs/2404.16130"},{type:"read",title:"Lewis et al. 2020 — The Original RAG Paper",url:"https://arxiv.org/abs/2005.11401"},{type:"read",title:"DSI — Differentiable Search Index (Google 2022)",url:"https://arxiv.org/abs/2202.06991"},{type:"read",title:"Jay Alammar — Illustrated Retrieval & Rerank",url:"https://cohere.com/blog/rerank"}]},{id:"p16",num:"16",weeks:"Weeks 31-34",color:"#DC2626",title:"Capstone — Build a Real Search Engine",hook:"The deepest mastery comes from building — tackle a real search problem end-to-end",concepts:["Choose a project that forces you to confront every layer of the IR stack","**Option A: Personal web search engine** — crawl, index, rank, serve your favorite 10K sites","**Option B: Code search for a monorepo** — semantic code search with AST-aware ranking (like GitHub's Blackbird)","**Option C: Scientific paper search** — ingest arXiv, add citation graph, implement multi-hop retrieval","**Option D: Vertical search engine** — legal, medical, or e-commerce with domain-specific ranking","**Option E: Multimodal search** — text+image unified search over a photo collection","**Option F: Fix a problem in Lucene/Elasticsearch/Tantivy** — real open source contribution","Full pipeline: crawling → cleaning → tokenization → indexing → retrieval → ranking → serving","Production concerns: latency budget (target p95 < 100ms), capacity planning, monitoring","Evaluation: build your own test set, measure nDCG/MRR, iterate","Write up your architecture: blog post with diagrams, benchmarks, design decisions","Teach: the deepest understanding is the ability to explain it to others"],deliverable:"Ship a complete search engine with a public demo. Write a detailed technical blog post explaining: crawling strategy, indexing choices, ranking pipeline, evaluation methodology, production tradeoffs. Target quality: something you'd present at a conference.",resources:[{type:"read",title:"SIGIR — The Top IR Research Conference",url:"https://sigir.org/"},{type:"read",title:"ECIR — European Conference on IR Research",url:"https://ecir.org/"},{type:"read",title:"Haystack Conference — Industry IR Talks",url:"https://haystackconf.com/"},{type:"read",title:"GitHub Code Search Architecture (Blackbird)",url:"https://github.blog/engineering/the-technology-behind-githubs-new-code-search/"}]}],dh=[{value:"60+",label:"Years of IR research"},{value:"21",label:"Chapters in Manning's book"},{value:"8.5B",label:"Google searches per day"},{value:"4×",label:"Hybrid search beats BM25 alone"}];function uh(){const[l,r]=z.useState(null),[x,$]=z.useState(new Set),L=Jc.reduce((v,M)=>v+M.concepts.length,0),F=Math.round(x.size/L*100),_=v=>v.split(/\*\*(.*?)\*\*/g).map((j,q)=>q%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:700},children:j},q):i.jsx("span",{children:j},q));return i.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .ph { transition: all 0.3s cubic-bezier(.4,0,.2,1); }
        .ph:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-1px); }
        .cc { transition: all 0.2s; cursor: pointer; }
        .cc:hover { background: rgba(0,0,0,0.02); }
        .ck { width: 18px; height: 18px; border-radius: 5px; border: 2px solid #ccc; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; flex-shrink: 0; background: white; font-size: 10px; }
        .ck.d { background: #059669; border-color: #059669; color: white; }
        .ar { transition: transform 0.3s; font-size: 18px; color: #aaa; }
        .pf { transition: width 0.5s cubic-bezier(.4,0,.2,1); }
        .rl { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 6px; text-decoration: none; color: inherit; transition: all 0.2s; border: 1px solid transparent; }
        .rl:hover { border-color: rgba(0,0,0,0.08); transform: translateX(3px); }
        .tg { font-family: 'JetBrains Mono', monospace; font-size: 9px; font-weight: 500; padding: 3px 7px; border-radius: 4px; letter-spacing: 0.4px; white-space: nowrap; }
      `}),i.jsxs("div",{style:{padding:"56px 28px 40px",maxWidth:920,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:12},children:"34-WEEK LEARNING ROADMAP"}),i.jsx("h1",{style:{fontSize:"clamp(32px, 5vw, 52px)",fontWeight:700,lineHeight:1.05,marginBottom:12,fontStyle:"italic"},children:"Mastering Information Retrieval"}),i.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15,color:"#555",lineHeight:1.7,maxWidth:680,marginBottom:18},children:"From Boolean retrieval in the 1960s to the neural-augmented search engines powering Google, Bing, and modern AI — a comprehensive path through classical IR (Manning/Raghavan/Schütze) and the post-BERT revolution. This roadmap follows the canonical textbook structure and extends it with the modern search stack: Lucene, Elasticsearch, BM25 reranking pipelines, ColBERT, SPLADE, and agentic LLM-powered retrieval."}),i.jsx("div",{style:{padding:"12px 16px",background:"#FFFBEB",border:"1px solid #FDE68A",borderRadius:8,marginBottom:28},children:i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#78350F",lineHeight:1.6},children:[i.jsx("strong",{children:"📖 Based on:"})," ",i.jsx("em",{children:"Introduction to Information Retrieval"})," by Christopher D. Manning, Prabhakar Raghavan, and Hinrich Schütze (Cambridge University Press, 2008) — the canonical IR textbook, ",i.jsx("a",{href:"https://nlp.stanford.edu/IR-book/information-retrieval-book.html",target:"_blank",rel:"noopener noreferrer",style:{color:"#B45309",fontWeight:600},children:"freely available online"}),". Extended with modern research from 2018–2025."]})}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:32},children:dh.map((v,M)=>i.jsxs("div",{style:{background:"white",border:"1px solid #E0DDD6",borderRadius:8,padding:"14px 16px"},children:[i.jsx("div",{style:{fontFamily:"'Source Serif 4', serif",fontSize:22,fontWeight:700,color:"#1a1a1a",lineHeight:1,marginBottom:4},children:v.value}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888",lineHeight:1.4},children:v.label})]},M))}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif",marginBottom:12},children:[i.jsx("div",{style:{flex:1,height:8,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${F}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #0369A1, #0E7490, #B91C1C, #15803D, #EA580C, #9333EA, #059669, #DC2626, #7C3AED, #B45309, #0369A1, #7C2D12, #0E7490, #DC2626)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[x.size,"/",L," concepts"]})]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#aaa"},children:"Check off concepts as you master them. Target: all 16 phases in ~8 months."})]}),i.jsx("div",{style:{maxWidth:920,margin:"0 auto",padding:"0 28px 64px"},children:Jc.map(v=>{const M=l===v.id,j=v.concepts.filter((q,T)=>x.has(`${v.id}-${T}`)).length;return i.jsxs("div",{className:"ph",style:{background:"white",borderRadius:12,marginBottom:14,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>r(M?null:v.id),style:{padding:"22px 24px",display:"flex",alignItems:"center",gap:18,cursor:"pointer"},children:[i.jsxs("div",{style:{width:52,height:52,borderRadius:10,background:v.color,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0,fontFamily:"'JetBrains Mono', monospace"},children:[i.jsx("div",{style:{fontSize:9,fontWeight:600,opacity:.75},children:"PHASE"}),i.jsx("div",{style:{fontSize:19,fontWeight:700,lineHeight:1},children:v.num})]}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,flexWrap:"wrap",marginBottom:3},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:16,fontWeight:700,color:"#1a1a1a"},children:v.title}),i.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,color:"#aaa",fontWeight:500},children:v.weeks})]}),i.jsx("div",{style:{fontFamily:"'Source Serif 4', serif",fontSize:13,color:"#666",fontStyle:"italic",lineHeight:1.5},children:v.hook})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:4,fontWeight:500},children:[j,"/",v.concepts.length]}),i.jsx("span",{className:"ar",style:{transform:M?"rotate(90deg)":"rotate(0)"},children:"›"})]}),M&&i.jsxs("div",{style:{padding:"0 24px 24px"},children:[i.jsx("div",{style:{height:1,background:"#F0EDE6",marginBottom:20}}),i.jsxs("div",{style:{marginBottom:22},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:v.color,marginBottom:10},children:"Concepts to Master"}),v.concepts.map((q,T)=>{const p=`${v.id}-${T}`,h=x.has(p);return i.jsxs("div",{className:"cc",onClick:()=>{const k=new Set(x);k.has(p)?k.delete(p):k.add(p),$(k)},style:{padding:"8px 10px",display:"flex",alignItems:"flex-start",gap:10,borderRadius:6},children:[i.jsx("div",{className:`ck ${h?"d":""}`,style:{marginTop:2},children:h&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,lineHeight:1.6,color:h?"#aaa":"#333",textDecoration:h?"line-through":"none",flex:1},children:_(q)})]},T)})]}),i.jsxs("div",{style:{padding:"14px 16px",background:`${v.color}0A`,border:`1px solid ${v.color}30`,borderRadius:8,marginBottom:18},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:v.color,marginBottom:6},children:"🎯 Deliverable"}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#444",lineHeight:1.6},children:v.deliverable})]}),i.jsxs("div",{children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"#888",marginBottom:8},children:"📚 Resources"}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:3},children:v.resources.map((q,T)=>{const p=ch[q.type];return i.jsxs("a",{href:q.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:p.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:p.bg,color:p.color},children:[p.emoji," ",p.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:q.title})]},T)})})]})]})]},v.id)})}),i.jsx("div",{style:{maxWidth:920,margin:"0 auto",padding:"0 28px 64px"},children:i.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #2a2a3a 100%)",borderRadius:12,padding:"36px 32px",color:"white"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",opacity:.6,marginBottom:12},children:"Post-Roadmap"}),i.jsx("h2",{style:{fontFamily:"'Source Serif 4', serif",fontSize:28,fontWeight:700,marginBottom:14,lineHeight:1.2},children:"You now understand how search actually works"}),i.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,lineHeight:1.7,opacity:.85,marginBottom:20},children:"By the end of 34 weeks, you'll have: built inverted indexes from scratch, implemented BM25 and PageRank, trained learning-to-rank models, understood LSM trees and Google's storage stack, set up production Elasticsearch, built neural retrieval pipelines, and shipped a real search engine. You'll understand — at a first-principles level — every part of Google's search stack, from Colossus and Bigtable up through URL crawling, inverted indexes, ranking, and neural reranking. This is the kind of deep knowledge that lets you design, debug, and innovate in any search-related problem."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:14,marginTop:24},children:[{label:"Classical IR",value:"Inverted indexes, BM25, PageRank, LSA, language models"},{label:"Storage Engines",value:"LSM trees, Lucene segments, Colossus, Bigtable, RocksDB"},{label:"Distributed Systems",value:"CAP/PACELC, sharding, replication, consistency models"},{label:"Modern Stack",value:"Lucene, Elasticsearch, Solr, Tantivy, Vespa, Quickwit"},{label:"Neural IR",value:"BERT rerankers, DPR, ColBERT, SPLADE, hybrid search"},{label:"LLM-Era",value:"RAG, agentic search, GraphRAG, contextual retrieval"}].map((v,M)=>i.jsxs("div",{children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:9,fontWeight:700,letterSpacing:2,textTransform:"uppercase",opacity:.5,marginBottom:4},children:v.label}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,opacity:.85,lineHeight:1.5},children:v.value})]},M))})]})}),i.jsx("div",{style:{maxWidth:920,margin:"0 auto",padding:"0 28px 48px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Boolean retrieval (1960s) → TF-IDF (1970s) → Vector space (1975) → BM25 (1994) → PageRank (1998) → Lucene (1999) → LambdaMART (2007) → Word2Vec (2013) → BERT for IR (2019) → Dense retrieval (2020) → RAG & agentic search (2023+)"})]})}const hh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ir=[{id:"what-is-ir",icon:"🔍",color:"#0891B2",title:"What Is Information Retrieval?",subtitle:"From database lookup to ranked document search — the IR pipeline, evaluation metrics, and scale dimensions",resources:[{type:"read",title:"Stanford NLP — Introduction to Information Retrieval (free textbook)",url:"https://nlp.stanford.edu/IR-book/"},{type:"read",title:"Manning, Raghavan, Schütze — Ch 1: Boolean Retrieval",url:"https://nlp.stanford.edu/IR-book/html/htmledition/boolean-retrieval-1.html"},{type:"video",title:"Stanford CS276 — Information Retrieval lecture series",url:"https://www.youtube.com/playlist?list=PLaZQkZp6WhWwoDuD6pQCmgVyDbUWl_ZUi"},{type:"read",title:"Baeldung — Inverted Index explained with diagrams",url:"https://www.baeldung.com/cs/indexing-inverted-index"}],content:[{heading:"IR vs Database Lookup",body:`**Information Retrieval (IR)** is the activity of obtaining information system resources relevant to an information need from a collection of those resources.

It differs fundamentally from database lookup:

| Aspect | Database Lookup | Information Retrieval |
|---|---|---|
| Data type | Structured (rows, columns) | Unstructured (text, images) |
| Query type | Exact match (SQL WHERE) | Keyword / natural language |
| Results | Exact set of matching rows | Ranked by relevance |
| Completeness | All matching rows returned | Top-k most relevant |
| Schema | Required | No schema needed |

**Key insight:** A database answers "give me all orders from customer X" with perfect precision. An IR system answers "find documents about climate change policy" with a ranked list — some results may be irrelevant, and some relevant documents may be missed.`},{heading:"The IR Pipeline",body:`**Every IR system follows the same two-phase architecture:**

**Offline (indexing):**
Document Collection → Tokenize → Normalize → Build Index

**Online (query time):**
User Query → Query Processing → Matching/Retrieval → Ranking → Results

The **index** is the bridge between offline and online. It pre-processes the collection so that queries can be answered in milliseconds, not hours.

**Scale dimensions of IR:**

| Dimension | Examples |
|---|---|
| **Web search** | Google indexes hundreds of billions of pages |
| **Enterprise** | Internal docs, emails, wikis — millions of documents |
| **Personal** | Email, files — thousands of documents |
| **Vertical** | Legal, medical, patent search — domain-specific |`},{heading:"Evaluation Metrics",body:`**How do we measure whether an IR system is good?**

| Metric | Formula | Meaning |
|---|---|---|
| **Precision** | relevant ∩ retrieved / retrieved | What fraction of returned results are relevant? |
| **Recall** | relevant ∩ retrieved / relevant | What fraction of relevant docs were found? |
| **F1** | 2 · P · R / (P + R) | Harmonic mean of precision and recall |
| **MAP** | Mean of AP across queries | Average quality across many queries |
| **NDCG** | Normalized Discounted Cumulative Gain | Accounts for ranking position |

**Precision and recall are in tension:** returning more results increases recall but typically hurts precision. The art of IR is balancing both.

**Example:** Search for "machine learning" returns 10 results, 7 are relevant, and there are 20 relevant docs total.
- Precision = 7/10 = 70%
- Recall = 7/20 = 35%
- F1 = 2 · 0.7 · 0.35 / (0.7 + 0.35) = 46.7%`}],questions:[{q:"A search engine returns 15 documents for the query 'neural networks'. 9 are relevant. The collection contains 30 relevant documents total. Calculate precision, recall, and F1.",a:"Precision = 9/15 = 0.60 (60%). Recall = 9/30 = 0.30 (30%). F1 = 2 * 0.60 * 0.30 / (0.60 + 0.30) = 0.36 / 0.90 = 0.40 (40%). The low recall means the system is missing 70% of relevant documents — likely the ranking cutoff is too aggressive.",hint:"Precision = relevant-and-retrieved / retrieved. Recall = relevant-and-retrieved / total-relevant.",check:l=>{const r=l.toLowerCase();return(r.includes("60")||r.includes("0.6"))&&(r.includes("30")||r.includes("0.3"))&&(r.includes("40")||r.includes("0.4"))}},{q:"Why is IR fundamentally different from SQL database queries? Give at least two reasons.",a:"Two key differences: (1) IR deals with unstructured data (free text) while databases handle structured data with schemas. There's no 'column' to match against — you need to understand language. (2) IR results are ranked by relevance rather than returned as an exact set. A database query returns ALL matching rows; an IR system returns the BEST matches. Additionally, IR queries are ambiguous (natural language) while SQL is precise, and IR accepts partial matches while SQL demands exact predicates.",hint:"Think about data structure, result format, and query ambiguity.",check:l=>{const r=l.toLowerCase();return(r.includes("unstructured")||r.includes("text")||r.includes("no schema"))&&(r.includes("rank")||r.includes("relevance")||r.includes("scored"))}}]},{id:"term-doc-matrix",icon:"📋",color:"#DC2626",title:"Term-Document Incidence Matrix",subtitle:"The simplest document representation — binary matrix, Boolean operations on bit vectors, and why it doesn't scale",resources:[{type:"read",title:"Stanford IR Book — An example information retrieval problem",url:"https://nlp.stanford.edu/IR-book/html/htmledition/an-example-information-retrieval-problem-1.html"},{type:"read",title:"Wikipedia — Document-term matrix",url:"https://en.wikipedia.org/wiki/Document-term_matrix"},{type:"video",title:"Victor Lavrenko — Boolean Retrieval Model",url:"https://www.youtube.com/watch?v=TKF-KCGSmo0"},{type:"read",title:"GeeksforGeeks — Boolean Model in Information Retrieval",url:"https://www.geeksforgeeks.org/boolean-model-in-information-retrieval/"}],content:[{heading:"Binary Incidence Matrix",body:`The simplest model for representing a document collection is a **term-document incidence matrix** — a binary matrix where entry (t, d) = 1 if term t appears in document d, and 0 otherwise.

**Example with Shakespeare plays:**

| Term | Antony & Cleopatra | Julius Caesar | The Tempest | Hamlet | Othello | Macbeth |
|---|---|---|---|---|---|---|
| **BRUTUS** | 1 | 1 | 0 | 1 | 0 | 1 |
| **CAESAR** | 1 | 1 | 0 | 1 | 1 | 1 |
| **CALPURNIA** | 0 | 1 | 0 | 0 | 0 | 0 |
| **MERCY** | 1 | 0 | 1 | 1 | 1 | 1 |

Each row is a **bit vector** for that term. Boolean operations on queries become bitwise operations on these vectors.`},{heading:"Boolean Operations on Bit Vectors",body:`**Query: BRUTUS AND CAESAR AND NOT CALPURNIA**

Step 1: Get bit vectors
BRUTUS:     110101
CAESAR:     110111
CALPURNIA:  010000

Step 2: Compute NOT CALPURNIA
NOT CALPURNIA: 101111

Step 3: AND all three vectors
110101 AND 110111 AND 101111 = 100101

Step 4: Decode result
Position 1 = Antony & Cleopatra ✓
Position 4 = Hamlet ✓
Position 6 = Macbeth ✓

**Each AND/OR/NOT is a single CPU instruction** on modern hardware (bitwise AND, OR, NOT). For small collections, this is extremely fast.`},{heading:"Why the Matrix Doesn't Scale",body:`For a real collection with **M = 500,000** distinct terms and **N = 1,000,000** documents:

Matrix size = M × N = 500,000 × 1,000,000 = **500 billion entries**

At 1 bit per entry: ~62.5 GB of storage.

**But the matrix is extremely sparse** — a typical document contains ~200 unique terms out of 500,000 possible. That means ~99.96% of entries are zeros.

**The sparsity insight**: Instead of storing all the zeros, store only the ones. This is exactly what an **inverted index** does — for each term, list only the documents that contain it.

| Representation | Storage | Lookup Time |
|---|---|---|
| Dense matrix | M × N bits | O(N) per term |
| Inverted index | O(total postings) | O(df) per term |

For a term appearing in 1,000 of 1M documents: matrix stores 1M bits, inverted index stores 1,000 docIDs.`},{heading:"From Matrix to Inverted Index",body:`**The conceptual leap:** instead of rows (one per term, spanning all documents), store only the non-zero columns for each term.

Matrix row for BRUTUS: [1, 1, 0, 1, 0, 1]
Inverted index entry: BRUTUS → [1, 2, 4, 6]

Matrix row for CALPURNIA: [0, 1, 0, 0, 0, 0]
Inverted index entry: CALPURNIA → [2]

**Key savings:**
- BRUTUS: 6 bits → 4 docIDs (saved 33%)
- CALPURNIA: 6 bits → 1 docID (saved 83%)
- Common terms save less, rare terms save enormously
- Overall savings: typically **95-99%** for real collections

This transformation from matrix to inverted index is the single most important data structure decision in all of information retrieval.`}],questions:[{q:"Given a term-document matrix with M=100,000 terms and N=5,000,000 documents, calculate the matrix size in GB. If the average document contains 300 unique terms, what fraction of the matrix is non-zero?",a:"Matrix size = 100,000 * 5,000,000 = 5 * 10^11 bits = 62.5 GB. Total non-zero entries = 5,000,000 docs * 300 terms/doc = 1.5 * 10^9. Fraction non-zero = 1.5 * 10^9 / (5 * 10^11) = 0.003 = 0.3%. So 99.7% of the matrix is zeros — an enormous waste of space that motivates the inverted index.",hint:"Matrix entries = M * N bits. Non-zero entries = N * avg_terms_per_doc.",check:l=>{const r=l.toLowerCase();return(r.includes("62.5")||r.includes("62,5"))&&(r.includes("0.3")||r.includes("99.7")||r.includes("0.003"))}}]},{id:"inverted-index",icon:"📚",color:"#7C3AED",title:"Inverted Index Data Structure",subtitle:"Dictionary + postings lists — the core data structure behind every search engine from Google to Elasticsearch",resources:[{type:"read",title:"Stanford IR Book — A first take at building an inverted index",url:"https://nlp.stanford.edu/IR-book/html/htmledition/a-first-take-at-building-an-inverted-index-1.html"},{type:"video",title:"MIT 6.006 — Inverted Index lecture",url:"https://www.youtube.com/watch?v=Mlp8hlKwETs"},{type:"read",title:"Elasticsearch — How inverted indexes work",url:"https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up"},{type:"read",title:"Baeldung — Inverted Index data structure",url:"https://www.baeldung.com/cs/indexing-inverted-index"},{type:"video",title:"Hussein Nasser — Inverted Index explained",url:"https://www.youtube.com/watch?v=S16mFzpJnAQ"}],content:[{heading:"Structure: Dictionary + Postings Lists",body:`An **inverted index** maps each term in the vocabulary to a **postings list** — a sorted list of document IDs where that term appears.

**Components:**

**Dictionary** (vocabulary):
Each entry stores the term string, the document frequency (df), and a pointer to the postings list.

**Postings lists**:
Sorted arrays of document IDs. "Sorted" is critical — it enables efficient merge-based Boolean operations.

**Example:**
Dictionary                  Postings Lists
───────────────────────────────────────────
BRUTUS     df=4  → [1, 2, 4, 6]
CAESAR     df=5  → [1, 2, 4, 5, 6]
CALPURNIA  df=1  → [2]
MERCY      df=5  → [1, 3, 4, 5, 6]

**In-memory vs on-disk:** The dictionary typically fits in RAM (millions of terms). Postings lists are stored on disk and loaded on demand.`},{heading:"Construction Algorithm",body:`**Building an inverted index from a document collection:**

BUILDINVERTEDINDEX(Collection):
    1. Gather all documents D1, D2, ..., DN
    2. For each document Di:
       a. Tokenize text into terms
       b. Apply preprocessing (lowercase, stem)
       c. For each term t in Di: create pair (t, docID_i)
    3. Sort all pairs by term (primary), then docID (secondary)
    4. Group consecutive pairs with same term
    5. For each group: create dictionary entry with term, df
       and postings list from sorted docIDs
    6. Remove duplicate docIDs (record tf if needed)

**Worked example with 3 documents:**
D1: "the cat sat on the mat"
D2: "the dog sat on the log"
D3: "the cat and the dog"

**After tokenization and sorting:**
(and, 3) (cat, 1) (cat, 3) (dog, 2) (dog, 3) (log, 2) (mat, 1) (on, 1) (on, 2) (sat, 1) (sat, 2) (the, 1) (the, 2) (the, 3)

**Final index:**
and  → df:1 → [3]
cat  → df:2 → [1, 3]
dog  → df:2 → [2, 3]
log  → df:1 → [2]
mat  → df:1 → [1]
on   → df:2 → [1, 2]
sat  → df:2 → [1, 2]
the  → df:3 → [1, 2, 3]`},{heading:"Storage Requirements",body:`**How much space does an inverted index need?**

**Dictionary size** (fits in RAM):
- V distinct terms, each ~8 bytes average + 4 bytes df + 4 bytes pointer = ~16 bytes/term
- For V = 500,000: ~8 MB

**Postings size** (stored on disk):
- Total postings = sum of all df values = N × avg_unique_terms_per_doc
- For N = 1,000,000 docs, 200 unique terms each: 200M postings
- At 4 bytes per docID: ~800 MB
- **With compression**: ~200-300 MB (4x reduction typical)

**Comparison:**

| Collection | Documents | Terms | Postings | Compressed Index |
|---|---|---|---|---|
| Reuters-RCV1 | 800K | 400K | 100M | ~150 MB |
| English Wikipedia | 6M | 10M | 2B | ~5 GB |
| Google Web Index | 100B+ | billions | trillions | petabytes |

**Key insight:** Even Google's trillion-posting index uses inverted indexes. The data structure scales across 6 orders of magnitude.`},{heading:"Why Inverted Indexes Have Endured 60+ Years",body:`The inverted index was first described by Luhn in 1957 at IBM. It remains the core data structure in every major search system today.

| System | Year | Uses Inverted Index |
|---|---|---|
| SMART System (Salton) | 1965 | Yes |
| Google | 1998-present | Yes |
| Elasticsearch/Lucene | 2004-present | Yes |
| Typesense | 2018-present | Yes |

**Why they persist:**

1. **Optimal for query patterns:** Search queries mention a few terms; the inverted index gives O(1) lookup to find documents containing each term. Scanning all documents would be O(N).

2. **Compression-friendly:** Sorted docID lists compress extremely well — often to 1-2 bits per posting.

3. **Boolean operations map naturally:** AND = intersection, OR = union — both O(n+m) on sorted lists.

4. **Scales to billions:** Google's index covers hundreds of billions of web pages.

5. **Composable with ranking:** The inverted index retrieves candidates; a ranking model (BM25, neural) scores them. This two-phase architecture is universal.

6. **Incrementally updatable:** New documents can be added without rebuilding the entire index (via segment merging).`}],questions:[{q:"Given documents D1='big data is great', D2='data is everywhere', D3='big data big problems'. Build the inverted index and evaluate the query: big AND data AND NOT problems.",a:"Index: big → [1, 3], data → [1, 2, 3], is → [1, 2], great → [1], everywhere → [2], problems → [3]. Query evaluation: big AND data = intersect([1,3], [1,2,3]) = [1, 3]. Then [1, 3] AND NOT problems = difference([1,3], [3]) = [1]. Result: D1 only.",hint:"Build the index first by listing which documents each term appears in, then apply Boolean operations on the postings lists.",check:l=>{const r=l.toLowerCase();return r.includes("d1")&&!r.includes("d2")&&(r.includes("[1]")||r.includes("result: d1")||r.includes("only d1")||r.includes("document 1"))}},{q:"Why must postings lists be stored in sorted order? Give two distinct reasons.",a:"Two reasons: (1) Sorted lists enable O(n+m) merge-based intersection and union. Without sorting, intersection would require O(n*m) comparisons — checking every element in list A against every element in list B. (2) Sorted docID gaps tend to be small and uniform, making them highly compressible. Gap encoding (storing differences between consecutive IDs instead of absolute IDs) produces small numbers that compress well with variable-byte or gamma codes.",hint:"Think about algorithm efficiency and compression.",check:l=>{const r=l.toLowerCase();return(r.includes("merge")||r.includes("intersect")||r.includes("o(n+m)")||r.includes("o(n + m)")||r.includes("linear"))&&(r.includes("compress")||r.includes("gap"))}}]},{id:"boolean-retrieval",icon:"∧",color:"#059669",title:"Boolean Retrieval: AND, OR, NOT",subtitle:"Merge-based algorithms for postings list intersection, union, and difference — with complexity analysis",resources:[{type:"read",title:"Stanford IR Book — Processing Boolean queries",url:"https://nlp.stanford.edu/IR-book/html/htmledition/processing-boolean-queries-1.html"},{type:"video",title:"Victor Lavrenko — Inverted Index and Boolean Retrieval",url:"https://www.youtube.com/watch?v=WZ4OfMqLnbo"},{type:"read",title:"GeeksforGeeks — Merge two sorted arrays",url:"https://www.geeksforgeeks.org/merge-two-sorted-arrays/"},{type:"read",title:"Stanford IR Book — The extended Boolean model",url:"https://nlp.stanford.edu/IR-book/html/htmledition/the-extended-boolean-model-versus-ranked-retrieval-1.html"}],content:[{heading:"AND: Postings List Intersection",body:`The core operation for AND queries is **merging two sorted postings lists** to find common document IDs.

INTERSECT(p1, p2):
    answer = []
    i = 0, j = 0
    while i < len(p1) and j < len(p2):
        if p1[i] == p2[j]:
            answer.append(p1[i])
            i++; j++
        elif p1[i] < p2[j]:
            i++
        else:
            j++
    return answer

**Time complexity**: O(len(p1) + len(p2)) — linear in the sum of list lengths.

**Walkthrough: BRUTUS AND CAESAR**

BRUTUS:  [1, 2, 4, 6]      (pointer →)
CAESAR:  [1, 2, 4, 5, 6]   (pointer →)

Step 1: 1 == 1 → add 1, advance both
Step 2: 2 == 2 → add 2, advance both
Step 3: 4 == 4 → add 4, advance both
Step 4: 6 > 5  → advance CAESAR
Step 5: 6 == 6 → add 6, advance both

Result: [1, 2, 4, 6]

**Why this works:** Both lists are sorted, so we never need to go backwards. Each comparison either adds a match or advances the smaller pointer, guaranteeing progress.`},{heading:"OR: Postings List Union",body:`**Union produces all documents containing either term.**

UNION(p1, p2):
    answer = []
    i = 0, j = 0
    while i < len(p1) and j < len(p2):
        if p1[i] == p2[j]:
            answer.append(p1[i])
            i++; j++
        elif p1[i] < p2[j]:
            answer.append(p1[i])
            i++
        else:
            answer.append(p2[j])
            j++
    answer.extend(p1[i:])
    answer.extend(p2[j:])
    return answer

**Time complexity**: O(len(p1) + len(p2))

**Example: MERCY OR CALPURNIA**
MERCY:     [1, 3, 4, 5, 6]
CALPURNIA: [2]
Result:    [1, 2, 3, 4, 5, 6]

The union is always at least as large as the larger input list, and at most the sum of both list sizes (when they share no documents).`},{heading:"NOT: Postings List Difference",body:`**A AND NOT B** returns elements in A's postings that are not in B's postings.

DIFFERENCE(p1, p2):
    answer = []
    i = 0, j = 0
    while i < len(p1) and j < len(p2):
        if p1[i] == p2[j]:
            i++; j++           // skip — in both lists
        elif p1[i] < p2[j]:
            answer.append(p1[i])  // in p1 only
            i++
        else:
            j++                // skip — in p2 only
    answer.extend(p1[i:])     // remaining p1 elements
    return answer

**Time complexity**: O(len(p1) + len(p2))

**Example: BRUTUS AND NOT CALPURNIA**
BRUTUS:    [1, 2, 4, 6]
CALPURNIA: [2]

Step 1: 1 < 2 → add 1
Step 2: 2 == 2 → skip both
Step 3: 4 > end of CALPURNIA → add remaining [4, 6]
Result: [1, 4, 6]`},{heading:"Complexity Summary",body:`**All Boolean operations on sorted postings lists are linear:**

| Operation | Algorithm | Time | Output Size |
|---|---|---|---|
| A AND B | Sorted merge (intersection) | O(n + m) | ≤ min(n, m) |
| A OR B | Sorted merge (union) | O(n + m) | between max(n,m) and n+m |
| A AND NOT B | Sorted merge (difference) | O(n + m) | ≤ n |
| k-way AND | Sequential pairwise | O(k × max list) | ≤ min list |

**Why linear time matters:** For a term with df=100,000 AND a term with df=50,000, intersection takes at most 150,000 comparisons. Even on modest hardware, this completes in under a millisecond.

**Contrast with naive approach:** Without sorted lists, intersection would be O(n × m) = 5 billion comparisons for the same example. Sorting transforms a minutes-long operation into a sub-millisecond one.`}],questions:[{q:"Given postings: A=[2,5,8,12,15], B=[3,5,9,12,18], C=[5,12,20]. Compute A AND B AND C step by step.",a:"Step 1: A AND B. Walk both lists: 2<3 advance A; 3<5 advance B; 5==5 add 5; 8<9 advance A; 9<12 advance B; 12==12 add 12; 15<18 advance A; done. A AND B = [5, 12]. Step 2: [5,12] AND C=[5,12,20]. 5==5 add 5; 12==12 add 12. Result: [5, 12].",hint:"Use the two-pointer merge algorithm. When pointers point to equal values, add to result and advance both.",check:l=>{const r=l.toLowerCase();return r.includes("5")&&r.includes("12")&&!r.includes("20")&&!r.includes("15")}},{q:"What is the time complexity of intersecting k sorted postings lists of maximum length n each? Can you do better than O(k * n)?",a:"Naive sequential pairwise intersection: O(k * n) — intersect list 1 with list 2, then result with list 3, etc. Each step is O(n), and there are k-1 steps. You can improve this by: (1) Processing shortest list first (result is always bounded by shortest list). (2) Using skip pointers to skip over sections of longer lists. (3) Using a priority-queue based k-way merge in O(total_postings * log k) time. However, in practice, the sequential approach with shortest-first ordering is hard to beat because intermediate results shrink rapidly.",hint:"Think about what bounds the intermediate result size at each step.",check:l=>{const r=l.toLowerCase();return(r.includes("o(k")||r.includes("k *")||r.includes("k*"))&&(r.includes("shortest")||r.includes("smallest")||r.includes("priority")||r.includes("skip"))}}]},{id:"query-optimization",icon:"⚡",color:"#D97706",title:"Query Optimization",subtitle:"Processing terms in optimal order — smallest df first, skip pointers, and conjunctive query planning",resources:[{type:"read",title:"Stanford IR Book — Query optimization",url:"https://nlp.stanford.edu/IR-book/html/htmledition/faster-postings-list-intersection-via-skip-pointers-1.html"},{type:"read",title:"Stanford IR Book — General conjunctive queries",url:"https://nlp.stanford.edu/IR-book/html/htmledition/processing-boolean-queries-1.html"},{type:"video",title:"Stanford CS276 — Query Processing",url:"https://www.youtube.com/watch?v=BpVVaOjqjL8"},{type:"read",title:"Lucene — Boolean Query implementation",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/search/BooleanQuery.html"}],content:[{heading:"Process Rarest Terms First",body:`For a multi-term AND query like A AND B AND C, **processing order matters enormously.**

**Strategy:** Sort terms by increasing document frequency (df), then intersect smallest lists first.

**Example: CALPURNIA AND BRUTUS AND CAESAR**

df(CALPURNIA) = 1
df(BRUTUS)    = 4
df(CAESAR)    = 5

**Optimal order:** CALPURNIA first (smallest df)

Step 1: Start with CALPURNIA → [2]              (1 element)
Step 2: Intersect with BRUTUS [1,2,4,6] → [2]   (1+4 = 5 comparisons)
Step 3: Intersect with CAESAR [1,2,4,5,6] → [2] (1+5 = 6 comparisons)
Total: ~11 comparisons

**Without optimization (BRUTUS first):**
Step 1: BRUTUS AND CAESAR: [1,2,4,6] AND [1,2,4,5,6] → [1,2,4,6]  (9 comparisons)
Step 2: [1,2,4,6] AND CALPURNIA [2] → [2]                          (5 comparisons)
Total: ~14 comparisons

**Why it works:** The intermediate result can never be larger than the smallest input list, so starting with the smallest list minimizes work at every subsequent step.`},{heading:"Skip Pointers for Faster Intersection",body:`Standard intersection walks every element of both lists. **Skip pointers** add "express lanes" to jump over sections that cannot contain matches.

**Structure:** Add skip pointers every √n elements:

List: [2, 5, 8, 12, 15, 19, 23, 28, 33, 41, 47, 55, 62, 70, 81, 90]

With skip pointers (every 4 elements):
[2] ---skip--> [15] ---skip--> [33] ---skip--> [62] ---skip--> [90]
 |               |                |               |
 v               v                v               v
[5,8,12]     [19,23,28]      [41,47,55]      [70,81]

**During intersection:** If looking for docID 45, check skip pointer at 33 (33 < 45, skip). Next skip at 62 (62 > 45, don't skip). Linear scan from 33: 41, 47 (passed 45 — not found).

**Optimal skip interval:** For list of length n, place skips every **√n** elements.
- Expected comparisons: O(√n) instead of O(n)
- Space overhead: √n extra pointers per list

**Example:** List with 10,000 elements:
- Without skips: up to 10,000 comparisons
- With skips every 100: ~200 comparisons

**Modern relevance:** Skip pointers are less critical today because (1) compressed postings decode sequentially very fast on modern CPUs, and (2) impact-ordered indexes enable early termination for ranked retrieval.`},{heading:"Conjunctive Query Planning",body:`**For complex Boolean queries, the query optimizer builds an execution plan.**

Query: (A AND B) OR (C AND NOT D)

**Execution plan:**
1. Estimate result sizes: use df values
2. For AND subqueries: process smallest df first
3. For OR subqueries: process largest df first (maximize early hits for ranked retrieval)
4. For NOT: always compute the positive part first, then subtract

**Cost estimation:** The size of A AND B is at most min(df(A), df(B)). The size of A OR B is at most df(A) + df(B). These estimates guide the optimizer.

| Query Structure | Estimated Result Size |
|---|---|
| A AND B | ≤ min(df(A), df(B)) |
| A OR B | ≤ df(A) + df(B) |
| A AND NOT B | ≤ df(A) |
| A OR NOT B | ≥ N - df(B) |

**In practice:** Modern search engines rarely use pure Boolean queries. Users type free-text queries that are implicitly treated as OR queries with TF-IDF or BM25 ranking. But the Boolean retrieval machinery remains the foundation — it's the first stage that generates candidate documents before ranking.`}],questions:[{q:"A 3-term AND query has terms with df = 10,000, df = 50, df = 5,000. What is the optimal processing order and approximately how many total comparisons are needed?",a:"Optimal order: df=50, df=5,000, df=10,000. Process smallest first. Step 1: Intersect df=50 with df=5,000. At most 50+5,000 = 5,050 comparisons. Result has at most 50 elements. Step 2: Intersect result (≤50 elements) with df=10,000. At most 50+10,000 = 10,050 comparisons. Total: ~15,100 comparisons. Compare with worst order (10,000 first): 10,000+5,000 = 15,000, then result(≤5,000)+50 = 5,050. Total: ~20,050 — about 33% more work.",hint:"Start with the smallest df. The intermediate result is bounded by min(inputs).",check:l=>{const r=l.toLowerCase();return r.includes("50")&&r.includes("first")||r.includes("smallest")&&r.includes("first")||r.includes("15,100")||r.includes("15100")}}]},{id:"phrase-queries",icon:"📝",color:"#2563EB",title:"Phrase & Proximity Queries",subtitle:"Biword indexes, positional indexes, and the NEAR operator — matching exact phrases and nearby terms",resources:[{type:"read",title:"Stanford IR Book — Positional postings and phrase queries",url:"https://nlp.stanford.edu/IR-book/html/htmledition/positional-postings-and-phrase-queries-1.html"},{type:"read",title:"Stanford IR Book — Biword indexes",url:"https://nlp.stanford.edu/IR-book/html/htmledition/biword-indexes-1.html"},{type:"video",title:"Victor Lavrenko — Phrase queries and positional indexes",url:"https://www.youtube.com/watch?v=QVVnrIAomoU"},{type:"read",title:"Elasticsearch — Match phrase query",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query-phrase.html"}],content:[{heading:"Why Standard Indexes Fail for Phrases",body:`A phrase query like **"stanford university"** requires the words to appear **consecutively in that exact order**. A standard inverted index can tell you which documents contain both "stanford" and "university" — but NOT whether they appear adjacent.

**Example of false positive:**
Document: "The university has a stanford building and a large campus."
- Contains both "stanford" and "university" ✔
- But NOT the phrase "stanford university" ✘

**Two solutions exist:**
1. **Biword indexes** — index consecutive term pairs
2. **Positional indexes** — store term positions within documents (preferred)`},{heading:"Biword Indexes",body:`**Idea:** Index every pair of consecutive terms as a single vocabulary entry.

"stanford university palo alto" → index: "stanford university", "university palo", "palo alto"

**Query processing:**
- 2-word phrase: direct lookup → "stanford university" → postings
- Longer phrase: AND of biwords
  "stanford university palo alto" → "stanford university" AND "university palo" AND "palo alto"

**Extended biword index** uses POS tagging:
Tag words as Nouns (N) or function words (X: articles, prepositions).
Index phrases matching pattern N(X+N)*
"renegotiation of the constitution" → tags: N X X N → biword: "renegotiation constitution"

**Limitations:**

| Issue | Description |
|---|---|
| False positives | Biwords from different parts of document can match |
| Vocabulary explosion | Every consecutive pair = new dictionary entry |
| Longer phrases | Chaining biwords increases false positive rate |
| Storage | Dictionary grows quadratically with vocabulary |

**In practice:** Biword indexes are sometimes used as a **supplement** to positional indexes for very common phrases ("New York", "United States") to speed up frequent queries.`},{heading:"Positional Indexes",body:`**Store term positions within each document in the postings list.** This is the standard approach in all modern search engines.

**Structure:**
Term      → docID: [pos1, pos2, ...], docID: [pos1, ...], ...

STANFORD  → 1: [3, 17, 42], 2: [8], 4: [1, 95]
UNIVERSITY → 1: [4, 18], 2: [9, 71], 4: [2]

**Phrase query algorithm for "stanford university":**
1. Get positional postings for both terms
2. Find documents in the intersection
3. For each shared document, check if STANFORD at position p and UNIVERSITY at position p+1:
   - Doc 1: STANFORD at 3, UNIVERSITY at 4 → 3+1=4 ✔ Match!
   - Doc 2: STANFORD at 8, UNIVERSITY at 9 → 8+1=9 ✔ Match!
   - Doc 4: STANFORD at 1, UNIVERSITY at 2 → 1+1=2 ✔ Match!

**Storage overhead:** Positional indexes are **2-4x larger** than non-positional indexes because they store position data for every occurrence of every term. Despite this cost, they are the **standard** because phrase queries account for ~10% of all web searches.`},{heading:"Proximity Queries (NEAR Operator)",body:`A proximity query like **STANFORD /3 UNIVERSITY** means the two terms must appear within 3 words of each other (in either order).

**Algorithm:** Same as phrase queries but check |pos_t1 - pos_t2| ≤ k instead of pos_t1 + 1 == pos_t2.

PROXIMITYINTERSECT(p1, p2, k):
    answer = []
    For each doc d in INTERSECT(p1.docs, p2.docs):
        positions1 = p1.positions[d]
        positions2 = p2.positions[d]
        for each pos1 in positions1:
            for each pos2 in positions2:
                if abs(pos1 - pos2) <= k:
                    answer.append((d, pos1, pos2))
    return answer

**Use cases:**
- **NEAR/5:** terms within 5 words — catches paraphrases
- **NEAR/1:** adjacent terms — equivalent to phrase query
- **NEAR/0:** same position — impossible (unless synonyms at same position)

**Positional index storage overhead:**

| Component | Non-positional | Positional |
|---|---|---|
| Entries per posting | 1 per (term, doc) pair | 1 per term occurrence |
| Size for 1M docs | ~800 MB | ~2-4 GB |
| Compression ratio | 1x | 2-4x larger |

**Rule of thumb:** A positional index is about **35-50% of the original collection size.**`}],questions:[{q:`For the positional index below, does document 2 contain the phrase 'new york times'?

NEW   → 2: [3, 15, 29]
YORK  → 2: [4, 30, 87]
TIMES → 2: [5, 16, 88]`,a:"Check if NEW at position p, YORK at p+1, TIMES at p+2 exist. NEW=3: YORK at 4 (3+1=4 ✔), TIMES at 5 (3+2=5 ✔) → YES! The phrase 'new york times' appears at positions 3-4-5 in document 2. Other positions don't form the phrase: NEW=15, YORK would need to be at 16 (not present, YORK has 30), so no match at position 15.",hint:"For a 3-word phrase at positions p, p+1, p+2, check if all three terms have positions that are consecutive.",check:l=>{const r=l.toLowerCase();return(r.includes("yes")||r.includes("3")&&r.includes("4")&&r.includes("5"))&&r.includes("match")}},{q:"A positional index for a collection with 1 million documents and average 500 term occurrences per document. Estimate the total number of position entries and the approximate uncompressed index size at 4 bytes per entry.",a:"Total position entries = 1,000,000 docs * 500 occurrences/doc = 500,000,000 (500 million) entries. At 4 bytes per entry (docID + position would actually be more, but for position entries within a doc): 500M * 4 bytes = 2 GB uncompressed. Each entry needs both the docID grouping and the position, so realistic size is closer to 500M * 8 bytes = 4 GB. With compression (VByte on gaps): approximately 1-2 GB. This aligns with the '2-4x larger than non-positional' rule of thumb, since a non-positional index for the same collection would be about 200M postings * 4 bytes = 800 MB.",hint:"Total positions = docs * avg_occurrences_per_doc. Multiply by bytes per entry.",check:l=>{const r=l.toLowerCase();return r.includes("500")&&r.includes("million")||r.includes("500,000,000")||r.includes("500m")||r.includes("2 gb")||r.includes("4 gb")}}]},{id:"positional-indexes",icon:"📍",color:"#581C87",title:"Positional Indexes",subtitle:"Detailed positional index structure, phrase query processing algorithm, and storage-performance tradeoffs",resources:[{type:"read",title:"Stanford IR Book — Positional indexes",url:"https://nlp.stanford.edu/IR-book/html/htmledition/positional-indexes-1.html"},{type:"read",title:"Lucene — How positional information is stored",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/codecs/lucene90/package-summary.html"},{type:"video",title:"IIT Kharagpur NPTEL — Positional Index",url:"https://www.youtube.com/watch?v=mc3Y1gNBIjA"},{type:"read",title:"Elasticsearch — Index options for positions",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-options.html"}],content:[{heading:"Full Positional Index Structure",body:`Each postings entry contains a sorted list of positions where the term occurs within that document:

**Detailed structure:**
"information" →
    doc1: tf=6, positions=[7, 18, 33, 72, 86, 231]
    doc2: tf=3, positions=[1, 17, 74]
    doc5: tf=5, positions=[8, 16, 190, 429, 433]

**Each entry stores:**
- Document ID
- Term frequency (tf) in that document
- Sorted list of positions

**Positions are 1-indexed** within the document (position 1 = first word). This convention is standard across IR systems.

**Dictionary entry for "information":**
- Term: "information"
- Document frequency (df): 3 (appears in 3 documents)
- Collection frequency (cf): 14 (total occurrences across all docs)
- Pointer to postings list on disk`},{heading:"Positional Phrase Query Algorithm",body:`**Full algorithm for positional phrase intersection:**

POSITIONAL_INTERSECT(p1, p2):
    result = []
    while p1 and p2 not exhausted:
        if p1.docID == p2.docID:
            positions1 = p1.positions
            positions2 = p2.positions
            for pos1 in positions1:
                for pos2 in positions2:
                    if pos2 - pos1 == 1:     // adjacent
                        result.add((p1.docID, pos1))
            advance both p1, p2
        elif p1.docID < p2.docID:
            advance p1
        else:
            advance p2
    return result

**Optimization for the inner loop:** Since position lists are sorted, use binary search or two-pointer scan instead of nested loops. For phrase "A B" at doc d:
- Walk positions of A with pointer i
- Walk positions of B with pointer j
- If pos_B[j] - pos_A[i] == 1: match, advance both
- If pos_B[j] - pos_A[i] < 1: advance j (B position too early)
- If pos_B[j] - pos_A[i] > 1: advance i (A position too early)

This reduces the inner loop from O(tf_A × tf_B) to O(tf_A + tf_B).`},{heading:"Multi-Word Phrase Queries",body:`**For phrases of 3+ words**, chain pairwise positional intersections:

Phrase: "to be or not to be"

Step 1: positional_intersect("to", "be") with offset 1
        → positions where "to" at p and "be" at p+1

Step 2: positional_intersect(result, "or") with offset 2 from "to"
        → positions where "to" at p, "be" at p+1, "or" at p+2

Step 3: Continue for "not" at p+3, "to" at p+4, "be" at p+5

**Alternative approach:** Represent as constraints:
pos(to) = p
pos(be) = p + 1
pos(or) = p + 2
pos(not) = p + 3
pos(to) = p + 4
pos(be) = p + 5

Check all constraints simultaneously using a single pass through each term's position list.

**Performance consideration:** Phrase queries on very common terms (like "to be or not to be" — all stop words) can be expensive because the position lists are enormous. This is one reason why some systems maintain special "phrase indexes" for common multi-word expressions.`},{heading:"Storage-Performance Tradeoffs",body:`**Positional indexes create a classic space-time tradeoff:**

| Configuration | Index Size | Phrase Queries | Proximity Queries |
|---|---|---|---|
| No positions (docID only) | 1x (baseline) | Not supported | Not supported |
| Positions stored | 2-4x | Supported | Supported |
| Positions + biword supplement | 2.5-5x | Very fast common phrases | Supported |
| Positions + skip pointers | 2-4x + √n overhead | Faster intersection | Supported |

**Why 2-4x?** A non-positional index stores one entry per unique (term, document) pair. A positional index stores one entry per term **occurrence**. Since terms typically appear 1-5 times per document, the positional index is proportionally larger.

**Real-world numbers for Reuters-RCV1 (800K documents):**

| Index Type | Size | Compression |
|---|---|---|
| Non-positional, uncompressed | 400 MB | 1.0x |
| Non-positional, VByte | 116 MB | 3.4x |
| Positional, uncompressed | ~1.2 GB | 1.0x |
| Positional, VByte | ~350 MB | 3.4x |

**Conclusion:** Despite the overhead, positional indexes are universally used because (1) phrase queries are ~10% of web searches, (2) proximity-based ranking significantly improves relevance, and (3) compression reduces the overhead to manageable levels.`}],questions:[{q:"What is the space complexity of a term-document incidence matrix vs an inverted index for V=100,000 terms, N=10,000,000 documents, and average 200 unique terms per document?",a:"Matrix: V * N = 100,000 * 10,000,000 = 10^12 bits = 125 GB. Inverted index: Total postings = N * 200 = 2 * 10^9. At 4 bytes per docID = 8 GB (uncompressed). With compression (VByte): approximately 2-3 GB. The inverted index is ~50-60x smaller than the matrix. This dramatic difference is because the matrix is ~99.98% zeros (200/100,000 = 0.2% fill rate), and the inverted index only stores the non-zero entries.",hint:"Matrix = V * N bits. Inverted index = N * avg_terms * bytes_per_docID.",check:l=>{const r=l.toLowerCase();return(r.includes("125")||r.includes("10^12"))&&(r.includes("8 gb")||r.includes("2-3")||r.includes("50")||r.includes("60x"))}}]}];function ph({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:"✓ Check"}),i.jsx("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsx("span",{children:"📖 Answer"}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function mh({embedded:l=!1}){const[r,x]=z.useState(null),[$,L]=z.useState(null),[F,_]=z.useState(new Set),[v,M]=z.useState({}),j=Ir.reduce((h,k)=>h+k.content.length,0),q=Math.round(F.size/j*100),T=h=>h.split(/\*\*(.*?)\*\*/g).map((c,m)=>m%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:c},m):i.jsx("span",{children:c},m)),p=h=>{const k=h.split(`
`),c=[];let m=0;for(;m<k.length;){const C=k[m];if(C.trim().startsWith("|")&&C.trim().endsWith("|")){const u=[];for(;m<k.length&&k[m].trim().startsWith("|")&&k[m].trim().endsWith("|");)u.push(k[m]),m++;const f=y=>y.split("|").slice(1,-1).map(N=>N.trim()),b=f(u[0]),A=u.findIndex(y=>/^\|[\s\-:|]+\|$/.test(y.trim())),D=A>=0?A+1:1,R=u.slice(D).filter(y=>!/^\|[\s\-:|]+\|$/.test(y.trim()));c.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((y,N)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:T(y)},N))})}),i.jsx("tbody",{children:R.map((y,N)=>{const V=f(y);return i.jsx("tr",{style:{background:N%2===0?"#fff":"#fafaf8"},children:V.map((re,fe)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:T(re)},fe))},N)})})]})},`t${c.length}`))}else C===""?c.push(i.jsx("div",{style:{height:8}},`e${m}`)):c.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:T(C)},`p${m}`)),m++}return c};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#0891B2!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"INFORMATION RETRIEVAL"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Boolean Retrieval & Inverted Indexes"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["The foundational data structures and algorithms behind every search engine — from term-document matrices to positional indexes.",i.jsx("br",{}),Ir.length," sections · ",j," concepts · ",Ir.reduce((h,k)=>{var c;return h+(((c=k.questions)==null?void 0:c.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #0891B2, #DC2626, #7C3AED, #059669, #D97706, #2563EB, #581C87)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[F.size,"/",j]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ir.map(h=>{var u;const k=r===h.id,c=h.content.map((f,b)=>`${h.id}-${b}`),m=c.filter(f=>F.has(f)).length,C=v[h.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>x(k?null:h.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:h.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:h.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:h.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:h.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",h.content.length]}),i.jsx("span",{className:"ar",style:{transform:k?"rotate(90deg)":"rotate(0)"},children:"›"})]}),k&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsx("button",{className:`tb ${C==="learn"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"learn"})),children:"📖 Learn"}),i.jsxs("button",{className:`tb ${C==="practice"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"practice"})),children:["✏️ Practice (",((u=h.questions)==null?void 0:u.length)||0,")"]}),i.jsxs("button",{className:`tb ${C==="deeper"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"deeper"})),children:["🔗 Go Deeper (",h.resources.length,")"]})]}),C==="learn"&&i.jsx("div",{children:h.content.map((f,b)=>{const A=`${h.id}-${b}`,D=$===A,R=F.has(A);return i.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>L(D?null:A),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${R?"d":""}`,onClick:y=>{y.stopPropagation();const N=new Set(F);N.has(A)?N.delete(A):N.add(A),_(N)},children:R&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:f.heading}),i.jsx("span",{className:"ar",style:{transform:D?"rotate(90deg)":"rotate(0)"},children:"›"})]}),D&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${h.color}20`,marginLeft:22},children:p(f.body)})]},b)})}),C==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(h.questions||[]).map((f,b)=>i.jsx(ph,{...f,color:h.color},`${h.id}-q-${b}`))]}),C==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:h.resources.map((f,b)=>{const A=hh[f.type];return i.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:A.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:A.bg,color:A.color},children:[A.emoji," ",A.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:f.title})]},b)})})]})]})]},h.id)})}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Term-document matrix → Inverted index → Boolean operations → Query optimization → Phrase queries → Positional indexes"})]})}const gh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Er=[{id:"tokenization",icon:"✂",color:"#C2410C",title:"Tokenization Challenges",subtitle:"Splitting text into tokens — apostrophes, hyphens, URLs, CJK segmentation, and Unicode edge cases",resources:[{type:"read",title:"Stanford IR Book — Tokenization",url:"https://nlp.stanford.edu/IR-book/html/htmledition/tokenization-1.html"},{type:"read",title:"Unicode Technical Standard #29 — Text Segmentation",url:"https://www.unicode.org/reports/tr29/"},{type:"video",title:"Stanford CS276 — Tokenization and normalization",url:"https://www.youtube.com/watch?v=B9TjuVKgJTk"},{type:"read",title:"Elasticsearch — Anatomy of an analyzer",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/analyzer-anatomy.html"}],content:[{heading:"What Tokenization Does",body:`**Tokenization** is the process of splitting text into individual tokens (terms). It seems simple — split on whitespace and punctuation — but edge cases are everywhere.

**The basic pipeline:**
Raw text → Character normalization → Tokenization → Token filtering → Terms

**Why it matters:** Every decision in tokenization directly affects what queries will match what documents. Tokenize "O'Brien" as one token? Then the query "Brien" won't match. Split it? Then "O'Brien" as a phrase won't match.

**The fundamental tension:** More aggressive tokenization increases recall (more matches) but hurts precision (more false matches). Less aggressive tokenization does the opposite.`},{heading:"Apostrophes and Hyphens",body:`**Apostrophes create ambiguity:**

| Input | Options | Issue |
|---|---|---|
| aren't | aren't, arent, aren + t, are + n't | Contractions have multiple valid splits |
| O'Neill | oneill, o'neill, o + neill | Names with apostrophes |
| it's | its (possessive) vs it is | Ambiguous — possessive or contraction? |

**Best practice:** Index multiple forms. Store both "oneill" and "o'neill" so both query styles match.

**Hyphens are equally problematic:**

| Input | Options | Issue |
|---|---|---|
| Hewlett-Packard | One token or two? | Company name — should be one |
| co-education | coeducation, co-education | Prefix hyphen |
| state-of-the-art | One token? Four? | Compound phrase |
| hold-him-back | Clearly multiple words | Ad-hoc compound |

**Best practice:** Index both the hyphenated form and split components. Let queries with or without hyphens match.`},{heading:"URLs, Emails, and Special Patterns",body:`**Modern text contains many non-word patterns that need special handling:**

http://www.example.com/path?q=test   → Keep as single token? Split on /, ?, .?
jblack@mail.yahoo.com                → Single token or split on @ and .?
142.32.48.231                         → IP address — keep intact
1Z9999W99845399981                    → Tracking number — keep intact
#machinelearning                      → Hashtag — index with and without #
@username                             → Mention — index with and without @

**Best practice:** Recognize and preserve these patterns with **regular expressions** before general tokenization. Most search engines have pattern-based tokenizers that detect URLs, emails, numbers, and hashtags as special token types.`},{heading:"CJK and Compound Word Segmentation",body:`**CJK languages (Chinese, Japanese, Korean) have no spaces between words:**

Chinese: 他是研究生物化学的 (He studies biochemistry)
Segmentation 1: 他 / 是 / 研究生 / 物化学 / 的  (graduate student + chemistry)
Segmentation 2: 他 / 是 / 研究 / 生物化学 / 的  (research + biochemistry)

**Approaches:**

| Method | How It Works | Quality |
|---|---|---|
| Dictionary-based | Match longest dictionary entries (jieba, MeCab) | Good for known words |
| Statistical | HMM, CRF, neural models on segmented corpora | Better for novel words |
| Character n-gram | Index overlapping bigrams/trigrams — no segmentation | Always works, larger index |

**German compound words** pose a similar challenge:
Lebensversicherungsgesellschaftsangestellter = Life + insurance + company + employee
Requires **compound splitting** against a dictionary.

**Modern approach:** Subword tokenization (BPE, WordPiece) handles these cases naturally by learning common character sequences from data.`}],questions:[{q:"Tokenize 'Dr. O'Brien's state-of-the-art COVID-19 research' — what challenges arise, and what tokens would you produce?",a:"Challenges: (1) 'Dr.' — abbreviation with period, could be confused with sentence end. (2) 'O'Brien's' — apostrophe in name plus possessive 's'. (3) 'state-of-the-art' — long hyphenated compound. (4) 'COVID-19' — acronym with embedded number. Reasonable tokens: dr, obrien (also index o'brien), state-of-the-art (keep as one) plus state, of, the, art (also index components), covid-19, covid, 19, research. Modern tokenizers would index multiple forms for maximum recall.",hint:"Consider abbreviations, possessives, hyphenated compounds, and acronyms.",check:l=>{const r=l.toLowerCase();return(r.includes("abbreviat")||r.includes("dr"))&&(r.includes("apostrophe")||r.includes("o'brien")||r.includes("possessive"))&&(r.includes("hyphen")||r.includes("compound")||r.includes("state-of-the-art"))}},{q:"Why do CJK languages require special tokenization? What are the two main approaches?",a:"CJK languages (Chinese, Japanese, Korean) have no spaces between words, so standard whitespace tokenization produces nothing useful. The entire sentence is one long string. Two main approaches: (1) Dictionary-based segmentation: match the longest known dictionary entries greedily (tools: jieba for Chinese, MeCab for Japanese). Works well for known vocabulary but fails on new words. (2) Statistical/neural segmentation: use HMM, CRF, or neural networks trained on human-segmented corpora to predict word boundaries. Better at handling novel words and ambiguous segmentations. A third alternative is character n-gram indexing — skip segmentation entirely by indexing overlapping bigrams/trigrams, which always works but produces a larger index.",hint:"What happens when you split on whitespace in Chinese?",check:l=>{const r=l.toLowerCase();return(r.includes("no space")||r.includes("no whitespace")||r.includes("no word boundar"))&&(r.includes("dictionary")||r.includes("statistical")||r.includes("neural")||r.includes("n-gram"))}}]},{id:"stop-words",icon:"🛑",color:"#DC2626",title:"Stop Words",subtitle:"The evolution from aggressive removal to keeping everything — and why modern systems skip stop lists entirely",resources:[{type:"read",title:"Stanford IR Book — Dropping common terms (stop words)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/dropping-common-terms-stop-words-1.html"},{type:"read",title:"Elasticsearch — Stop token filter",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-stop-tokenfilter.html"},{type:"video",title:"IIT Kharagpur NPTEL — Stop words in IR",url:"https://www.youtube.com/watch?v=YsCH4qKKz0w"},{type:"read",title:"Lucene — StopFilter documentation",url:"https://lucene.apache.org/core/9_0_0/analysis/common/org/apache/lucene/analysis/core/StopFilter.html"}],content:[{heading:"What Are Stop Words?",body:`**Stop words** are extremely common terms (the, is, at, which, on) that traditionally were excluded from indexes to save space and processing time.

**Historical context:**
- The top 30 English words account for ~30% of all tokens
- These words carry little semantic content on their own
- Removing them dramatically reduces index size

**Evolution of stop word handling:**

| Era | Approach | Stop List Size |
|---|---|---|
| 1960s-1980s | Aggressive removal | 200-300 words |
| 1990s-2000s | Conservative removal | 7-12 words |
| 2010s-present | No stop list | 0 words |

Early IR systems used large stop lists of **200-300 terms** because storage was expensive and every posting consumed precious disk space.`},{heading:"Problems with Removing Stop Words",body:`Stop word removal breaks specific queries where the "stop words" are actually meaningful:

| Query | Why Stop Words Matter |
|---|---|
| "to be or not to be" | Every word is a "stop word" |
| "flights to London" | Removing "to" loses meaning |
| "President of the United States" | Phrase requires stop words |
| "The Who" (band name) | Both words are stop words |
| "Let It Be" (song) | All words are stop words |
| "what is" vs "what was" | Tense distinction matters |

**The key insight:** Words that seem unimportant in isolation often carry critical meaning in context, especially in phrases.`},{heading:"Modern Approach: Keep Everything",body:`**Modern search engines do not use stop lists.** Four reasons:

**1. Index compression makes storage costs negligible.** Even very frequent terms compress well with VByte or gamma codes. The posting list for "the" might be huge, but each gap is tiny (the term appears in nearly every document).

**2. TF-IDF / BM25 weighting naturally handles common terms.** A term with high document frequency (df) gets a very low IDF score, so it contributes little to ranking. The weighting effectively does what stop lists did, but without losing the ability to match phrases.

**3. Phrase queries require stop words to work.** "to be or not to be" requires positions for every word. Removing stop words makes phrase queries impossible.

**4. Impact-ordered indexes allow early termination.** Instead of processing full postings lists of common terms, modern engines order postings by impact score and stop processing when the score contribution becomes negligible.

**Bottom line:** The computational reasons for stop lists (space, time) have been solved by compression and smarter algorithms. Removing stop words creates more problems than it solves.`}],questions:[{q:"Why did early IR systems use stop word lists of 200-300 words, and why have modern systems abandoned them?",a:"Early systems (1960s-1990s) used large stop lists because: (1) Storage was expensive — disk space per posting mattered, and the top 30 words accounted for ~30% of all tokens. Removing them dramatically shrunk the index. (2) Processing was slow — scanning long postings lists of common terms was computationally expensive. Modern systems abandoned them because: (1) Index compression (VByte, gamma codes) makes the storage cost negligible — common terms compress extremely well. (2) TF-IDF/BM25 weighting naturally assigns low weight to common terms (high df → low IDF), effectively doing what stop lists did without losing data. (3) Phrase queries ('to be or not to be') become impossible without stop words in the index. (4) Users search for 'The Who', 'Let It Be' — stop words are part of real queries.",hint:"Think about what changed: storage costs, ranking algorithms, and query types.",check:l=>{const r=l.toLowerCase();return(r.includes("storage")||r.includes("space")||r.includes("disk"))&&(r.includes("compression")||r.includes("idf")||r.includes("bm25")||r.includes("phrase"))}}]},{id:"normalization",icon:"🔤",color:"#7C3AED",title:"Normalization: Case, Accents, Unicode",subtitle:"Case folding, diacritic removal, Unicode NFC/NFD/NFKC normalization, and equivalence classes",resources:[{type:"read",title:"Stanford IR Book — Normalization",url:"https://nlp.stanford.edu/IR-book/html/htmledition/normalization-equivalence-classing-of-terms-1.html"},{type:"read",title:"Unicode Normalization Forms (UAX #15)",url:"https://www.unicode.org/reports/tr15/"},{type:"video",title:"Computerphile — Unicode",url:"https://www.youtube.com/watch?v=MijmeoH9LT4"},{type:"read",title:"Python unicodedata — Unicode Database",url:"https://docs.python.org/3/library/unicodedata.html"}],content:[{heading:"Case Folding",body:`**Convert all text to lowercase before indexing:**

Apple → apple, APPLE → apple, aPpLe → apple

**Benefits:** Reduces vocabulary size. Query "apple" matches "Apple", "APPLE", "apple".

**Risks:** Conflates proper nouns with common words:

| Word | Lowercase | Problem |
|---|---|---|
| Turkey (country) | turkey | Matches "turkey" the bird |
| US (United States) | us | Matches "us" the pronoun |
| IT (Information Technology) | it | Matches "it" the pronoun |
| General Motors | general motors | Matches "general motors" (adjective + noun) |

**Best practice:** Case-fold for general search; maintain original case for named entity recognition (NER). Some systems use "true casing" — a model that predicts the correct case for each word based on context.`},{heading:"Accent and Diacritic Removal",body:`**Many languages use accented characters that users may or may not type:**

café → cafe
naïve → naive
résumé → resume
Zürich → Zurich

**Implementation using Unicode NFD decomposition:**

import unicodedata
def remove_accents(text):
    nfd = unicodedata.normalize('NFD', text)
    return ''.join(c for c in nfd if unicodedata.category(c) != 'Mn')

**How it works:** NFD decomposition separates base characters from combining marks. "é" (e + combining acute accent) becomes two code points. Then strip all characters in the "Mark, Nonspacing" (Mn) category.

**When NOT to remove accents:**
- In Spanish, "año" (year) vs "ano" (anus) — accent removal changes meaning
- In Turkish, "ö" and "o" are different letters
- For precision-sensitive applications, keep accents and add accent-folded forms as alternatives`},{heading:"Unicode Normalization: NFC vs NFD",body:`**Unicode allows multiple byte sequences to represent the same visible character:**

| Form | Description | Example for "é" |
|---|---|---|
| **NFC** (Composed) | Single code point | U+00E9 (é) |
| **NFD** (Decomposed) | Base + combining mark | U+0065 (e) + U+0301 (combining accent) |
| **NFKC** (Compatibility Composed) | Resolves compatibility | ﬁ → fi |
| **NFKD** (Compatibility Decomposed) | Decomposes + resolves | ﬁ → f + i |

**Why this matters for IR:**

Without normalization, the same visible text produces different byte sequences. A query containing NFC "café" would NOT match an indexed NFD "café" because the underlying bytes differ.

**For IR:** Normalize all text to **NFKC** or **NFC** before indexing to ensure consistent matching.

**NFKC is recommended** because it also handles compatibility characters:
- ﬁ (fi ligature) → "fi" (two characters)
- Ω (Ohm sign) → Ω (Greek capital omega)
- ½ (vulgar fraction) → "1/2"

These equivalences matter for search — users don't distinguish between ﬁ and "fi".`}],questions:[{q:"Unicode string 'café' can be encoded as either 4 code points (NFC) or 5 code points (NFD). Why is normalization critical for IR?",a:"Without normalization, the same visible text produces different byte sequences. NFC encodes 'é' as a single code point U+00E9, while NFD encodes it as U+0065 (e) + U+0301 (combining acute accent) — two separate code points. If a document is indexed with NFD 'café' and a user searches with NFC 'café', the byte-level comparison will FAIL even though the text looks identical. Normalizing all text to the same form (typically NFKC) before both indexing and querying ensures consistent matching. NFKC is preferred over NFC because it also resolves compatibility characters like ligatures (ﬁ → fi).",hint:"Think about what happens when the same character has two different binary representations.",check:l=>{const r=l.toLowerCase();return(r.includes("byte")||r.includes("code point")||r.includes("binary")||r.includes("encoding"))&&(r.includes("match")||r.includes("fail")||r.includes("differ"))}}]},{id:"stemming-lemmatization",icon:"🌳",color:"#059669",title:"Stemming vs Lemmatization",subtitle:"Porter stemmer rules, Snowball framework, dictionary-based lemmatization, and impact on IR performance",resources:[{type:"read",title:"Stanford IR Book — Stemming and lemmatization",url:"https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html"},{type:"read",title:"Martin Porter — The Porter Stemming Algorithm",url:"https://tartarus.org/martin/PorterStemmer/"},{type:"read",title:"Snowball — A language for stemming algorithms",url:"https://snowballstem.org/"},{type:"video",title:"Stanford NLP — Stemming and Lemmatization",url:"https://www.youtube.com/watch?v=HHAilAC3cXw"},{type:"read",title:"NLTK — Stemmers and lemmatizers",url:"https://www.nltk.org/api/nltk.stem.html"}],content:[{heading:"Stemming: Rule-Based Suffix Stripping",body:`**Stemming** applies heuristic rules to chop off word endings. It doesn't need a dictionary — just pattern-matching rules.

**The Porter Stemmer (1980)** is the most widely used English stemmer. It applies 5 sequential phases of suffix removal, using a "measure" m (roughly: number of vowel-consonant sequences) to avoid over-stemming short words.

**Key rules (simplified):**

| Rule | Example | Condition |
|---|---|---|
| SSES → SS | caresses → caress | Always |
| IES → I | ponies → poni | Always |
| ATIONAL → ATE | relational → relate | m > 0 |
| TIONAL → TION | conditional → condition | m > 0 |
| EMENT → (remove) | replacement → replac | m > 1 |
| NESS → (remove) | happiness → happi | m > 0 |

**Full stemming example:**
operate    → oper
operating  → oper
operates   → oper
operation  → oper
operative  → oper
operational → oper

All six forms map to the same stem "oper", enabling a search for any variant to match documents containing any other variant.`},{heading:"Lemmatization: Dictionary-Based",body:`**Lemmatization** uses a dictionary and morphological analysis to return the proper base form (lemma).

am, are, is    → be
better         → good
running        → run
mice           → mouse
saw            → see (verb) or saw (noun)

**Key requirement:** Lemmatization needs **part-of-speech (POS) tagging** to disambiguate. "saw" → "see" (if verb) vs "saw" (if noun).

**Comparison:**

| Feature | Stemming | Lemmatization |
|---|---|---|
| **Approach** | Rule-based suffix stripping | Dictionary + morphological analysis |
| **Speed** | Very fast (regex rules) | Slower (dictionary lookup + POS) |
| **Accuracy** | Produces non-words (oper, happi) | Always produces real words |
| **Over-stemming** | Common (conflates unrelated words) | Rare |
| **Under-stemming** | Sometimes (misses irregular forms) | Handles irregulars well |
| **Resources** | None (rules only) | Dictionary + POS tagger |
| **IR effect** | Increases recall, can hurt precision | Balanced recall/precision |`},{heading:"Impact on IR Performance",body:`**A counterintuitive finding:** Stemming often does **not** improve English IR performance in aggregate. It increases recall (finds more relevant documents) while harming precision (returns more irrelevant documents).

**Example of harm:** Searching "operating system" when operate/operating/operation/operational all stem to "oper" returns documents about "surgical operations" — irrelevant noise.

**However**, for morphologically rich languages (Spanish, German, Finnish, Arabic), stemming provides **significant gains** because word forms vary much more.

| Language | Morphological Richness | Stemming Benefit |
|---|---|---|
| English | Low | Minimal (+0 to +2% MAP) |
| Spanish | Medium | Moderate (+5-10% MAP) |
| German | High (compounds) | Significant (+10-15% MAP) |
| Finnish | Very High (15+ cases) | Large (+20-30% MAP) |
| Arabic | Very High (root patterns) | Large (+15-25% MAP) |

**Modern approach:** Many systems skip stemming entirely and rely on:
1. **Query expansion** — add morphological variants at query time
2. **Word embeddings** — semantically similar terms cluster together
3. **BPE/subword tokenization** — shares subword units across word forms`},{heading:"Snowball Stemmer Framework",body:`**Snowball** is an improved stemming framework by Martin Porter himself (2001). It provides a domain-specific language for writing stemming algorithms.

**Key improvements over the original Porter stemmer:**
- More consistent rule application
- Better handling of edge cases
- Supports 15+ languages out of the box: English, French, German, Spanish, Russian, Arabic, Finnish, Hungarian, Turkish, and more

**Language-specific examples:**

| Language | Input | Snowball Stem |
|---|---|---|
| English | connections | connect |
| French | nationales | national |
| German | Aufgabenstellung | aufgab |
| Spanish | bibliotecas | bibliotec |
| Russian | студентов | студент |

**In practice:** Snowball is the standard stemmer in Lucene/Elasticsearch, NLTK, and most modern IR systems. The original Porter stemmer is primarily of historical interest.`}],questions:[{q:"The Porter stemmer maps both 'universal' and 'university' to 'univers'. Is this a problem? What would lemmatization do?",a:"Yes, this is a serious problem called over-stemming. 'Universal' and 'university' are completely unrelated concepts — a search for 'university' would incorrectly return documents about 'universal truths' or 'universal healthcare'. Lemmatization would keep them separate: 'universal' → 'universal' and 'university' → 'university', because they are different lemmas (different dictionary entries). This illustrates the precision/recall tradeoff: stemming increases recall (more matches) but can dramatically hurt precision by conflating unrelated terms.",hint:"Think about what 'universal' and 'university' mean — are they related?",check:l=>{const r=l.toLowerCase();return(r.includes("over-stem")||r.includes("unrelated")||r.includes("problem")||r.includes("yes"))&&(r.includes("separate")||r.includes("different lemma")||r.includes("different word"))}},{q:"Why does stemming help Finnish and Arabic IR significantly (+20-30% MAP) but barely helps English (+0-2%)?",a:"Finnish and Arabic are morphologically rich languages with many word forms per lemma. Finnish has 15+ grammatical cases, so a single noun can appear in dozens of forms (talo, talon, taloa, talossa, talosta, taloon, talolla, talolta, talolle...). Without stemming, a query for one form misses documents using other forms. Arabic uses root patterns with prefixes/suffixes/infixes, creating hundreds of surface forms from a 3-letter root. English has relatively simple morphology — most words have only 2-5 forms (run, runs, running, ran). The recall gains from stemming in English are small and are offset by precision losses from over-stemming (universal/university). In morphologically rich languages, the recall gains far outweigh precision losses.",hint:"How many distinct word forms does a Finnish noun have vs an English noun?",check:l=>{const r=l.toLowerCase();return(r.includes("morpholog")||r.includes("word form")||r.includes("case")||r.includes("inflect"))&&(r.includes("recall")||r.includes("miss")||r.includes("variant"))}}]},{id:"skip-lists",icon:"⏩",color:"#D97706",title:"Skip Lists for Faster Intersection",subtitle:"Express lanes over postings lists — optimal skip interval, O(√n) intersection, and modern relevance",resources:[{type:"read",title:"Stanford IR Book — Faster postings list intersection via skip pointers",url:"https://nlp.stanford.edu/IR-book/html/htmledition/faster-postings-list-intersection-via-skip-pointers-1.html"},{type:"read",title:"Wikipedia — Skip list data structure",url:"https://en.wikipedia.org/wiki/Skip_list"},{type:"video",title:"MIT 6.046J — Skip Lists",url:"https://www.youtube.com/watch?v=2g9OSRKJuzM"},{type:"read",title:"William Pugh — Skip Lists: A Probabilistic Alternative to Balanced Trees",url:"https://15721.courses.cs.cmu.edu/spring2018/papers/08-oltpindexes1/pugh-skiplists-cacm1990.pdf"}],content:[{heading:"How Skip Lists Work",body:`Standard postings list intersection is O(n+m). **Skip lists** add "express lanes" to allow skipping over sections that cannot contain matches.

**Structure:** Add skip pointers at regular intervals:

List for "cat": [1] →→→ [5] →→→ [11] →→→ [17] → ...
                 |        |         |         |
                [2]      [7]      [13]      [19]
                 |        |         |         |
                [3]      [8]      [15]      [21]
                 |        |
                [4]      [9]

**During intersection:** If current pointer in list B is at docID 3 and the skip pointer jumps to docID 11, and we're looking for matches with list A where current element is 15:
- Can we skip to 11? Yes, because 11 ≤ 15.
- Skip to 11, now check: 11 < 15, so continue linearly: 13, 15 — found!

Without skip pointers: would have traversed 3, 4, 5, 7, 8, 9, 11, 13, 15 (9 steps).
With skip pointers: 3 → skip to 11, 13, 15 (3 steps).`},{heading:"Optimal Skip Interval",body:`For a postings list of length n, place skip pointers every **√n** elements.

**Why √n?**

With skip interval s, there are n/s skip pointers.
Expected comparisons: O(n/s + s) per query.
Minimize: d/ds(n/s + s) = -n/s² + 1 = 0 → s = √n
Total comparisons: O(√n + √n) = **O(√n)**

**Example:** List with 10,000 elements:
- Without skips: up to 10,000 comparisons
- With skips every √10000 = 100 elements: ~200 comparisons
- **50x improvement!**

**Another example:** List with 1,000,000 elements:
- Without skips: up to 1,000,000 comparisons
- With skips every 1000: ~2,000 comparisons
- **500x improvement!**`},{heading:"Tradeoffs and Modern Relevance",body:`**Skip lists have real tradeoffs:**

| Aspect | Without Skips | With Skips |
|---|---|---|
| Intersection time | O(n + m) | O(√n + √m) average |
| Space overhead | None | √n pointers per list |
| Complexity | Simple | Moderate |
| Cache performance | Sequential access | Random jumps (cache misses) |

**Modern relevance is declining because:**

1. **Compressed postings decode sequentially very fast** on modern CPUs. VByte decoding is branchless and pipelined — linear scan through compressed data is often faster than following skip pointers that cause cache misses.

2. **Block-based compression** (PForDelta, SIMD-based) processes 128-256 integers at once. Skip pointers must align with block boundaries, limiting granularity.

3. **Impact-ordered indexes** for ranked retrieval can terminate early without processing full postings lists, making skip pointers less necessary.

4. **SSD storage** has low seek latency compared to spinning disks, reducing the benefit of skipping over disk blocks.

**In practice:** Lucene still uses skip pointers in its postings format, but they are a micro-optimization rather than a fundamental performance driver.`}],questions:[{q:"Given a postings list with 10,000 entries and skip pointers every 100 elements, what is the maximum number of comparisons to determine if a specific docID is in the list?",a:"First check skip pointers: 10,000/100 = 100 skip checks to find the right block. Then linear scan within the block: up to 100 comparisons. Total: at most 200 comparisons (vs 10,000 without skips). This matches O(√n) = √10,000 = 100, times a constant factor of 2. The skip interval of 100 = √10,000 is optimal.",hint:"How many skip pointers are there? How many elements per block?",check:l=>{const r=l.toLowerCase();return r.includes("200")||r.includes("100 + 100")||r.includes("100+100")}}]},{id:"positional-indexes",icon:"📍",color:"#2563EB",title:"Positional Indexes & Phrase Queries",subtitle:"Storing positions for phrase matching — structure, algorithms, and 2-4x storage overhead tradeoff",resources:[{type:"read",title:"Stanford IR Book — Positional postings",url:"https://nlp.stanford.edu/IR-book/html/htmledition/positional-postings-and-phrase-queries-1.html"},{type:"read",title:"Lucene — Positions and offsets",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/codecs/lucene90/package-summary.html"},{type:"video",title:"Victor Lavrenko — Phrase queries",url:"https://www.youtube.com/watch?v=QVVnrIAomoU"},{type:"read",title:"Elasticsearch — Match phrase query",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query-phrase.html"}],content:[{heading:"Positional Index Structure",body:`Each postings entry contains a list of positions where the term occurs:

"information" →
    doc1: tf=6, [7, 18, 33, 72, 86, 231]
    doc2: tf=3, [1, 17, 74]
    doc5: tf=5, [8, 16, 190, 429, 433]

**Each entry stores:**
- Document ID
- Term frequency (tf)
- Sorted list of positions (1-indexed within the document)

**Phrase query processing for "information retrieval":**
1. Get positional postings for both terms
2. Find documents in the intersection of both postings lists
3. For each shared document, check if "information" at position p and "retrieval" at position p+1

**Proximity query for NEAR/k:** Same algorithm but check |pos1 - pos2| ≤ k instead of pos2 - pos1 == 1.`},{heading:"Storage Overhead Analysis",body:`**Positional indexes are substantially larger:**

| Component | Non-positional | Positional |
|---|---|---|
| Entries | 1 per (term, doc) pair | 1 per term occurrence |
| Size for 1M docs, 200 terms/doc avg | ~800 MB | ~2-4 GB |
| Ratio | 1x | 2-4x |

**Rule of thumb:** A positional index is about **35-50% of the original collection size.**

**Why the overhead is worth it:**
1. Phrase queries are ~10% of all web searches
2. Proximity-based ranking (BM25 with proximity) significantly improves relevance
3. Passage retrieval (for question answering) needs positions
4. Highlighting search terms in results needs positions
5. Compression reduces the absolute overhead to manageable levels`},{heading:"Optimized Phrase Processing",body:`**Naive positional intersection is O(tf1 × tf2) per document — too slow for frequent terms.**

**Optimized approach using two pointers on sorted position lists:**

For phrase "A B" in document d:
- Walk positions of A with pointer i
- Walk positions of B with pointer j
- If pos_B[j] - pos_A[i] == 1: MATCH! advance both
- If pos_B[j] - pos_A[i] < 1: advance j (B position too early)
- If pos_B[j] - pos_A[i] > 1: advance i (A position too early)

**This reduces from O(tf_A × tf_B) to O(tf_A + tf_B) per document.**

**Multi-word phrases:** Chain pairwise, carrying position offsets:
"information retrieval system" =
  intersect_pos("information", "retrieval", offset=1) then
  intersect_pos(result, "system", offset=2 from "information")

**Performance for common phrases:** Some systems maintain a "phrase cache" that precomputes postings for very common phrases like "new york", "machine learning", "united states" to avoid recomputing them on every query.`}],questions:[{q:"Why are positional indexes 2-4x larger than non-positional indexes, yet universally preferred?",a:"Size difference: Non-positional indexes store one entry per unique (term, document) pair. Positional indexes store one entry per term occurrence — since terms appear on average 1-5 times per document, this multiplies storage proportionally. Why they're preferred despite the overhead: (1) Phrase queries (~10% of web queries) are impossible without positions. (2) Proximity-based ranking (knowing how close query terms appear) significantly improves search quality. (3) Passage retrieval and answer extraction for question answering need positions. (4) Highlighting matched terms in search result snippets requires positions. (5) Compression (VByte on position gaps) reduces the real overhead to roughly 2x, which is manageable.",hint:"Think about what you can't do without positions.",check:l=>{const r=l.toLowerCase();return(r.includes("occurrence")||r.includes("per term")||r.includes("frequency"))&&(r.includes("phrase")||r.includes("proximity")||r.includes("impossible"))}}]},{id:"biword-indexes",icon:"📑",color:"#581C87",title:"Biword Indexes",subtitle:"Indexing consecutive term pairs for fast phrase lookup — construction, extended biwords, and limitations",resources:[{type:"read",title:"Stanford IR Book — Biword indexes",url:"https://nlp.stanford.edu/IR-book/html/htmledition/biword-indexes-1.html"},{type:"read",title:"Stanford IR Book — Positional indexes",url:"https://nlp.stanford.edu/IR-book/html/htmledition/positional-indexes-1.html"},{type:"video",title:"IIT Kharagpur — Phrase queries",url:"https://www.youtube.com/watch?v=mc3Y1gNBIjA"},{type:"read",title:"Lucene — ShingleFilter for n-gram indexing",url:"https://lucene.apache.org/core/9_0_0/analysis/common/org/apache/lucene/analysis/shingle/ShingleFilter.html"}],content:[{heading:"Biword Index Construction",body:`A **biword index** treats every consecutive pair of terms as a single vocabulary entry.

**Document:** "Friends, Romans, Countrymen, lend me your ears"

**Biwords indexed:**
friends romans
romans countrymen
countrymen lend
lend me
me your
your ears

**Query processing:**
- 2-word phrase: direct lookup → "friends romans" → postings list
- Longer phrase: Boolean AND of biwords
  "stanford university palo alto" → "stanford university" AND "university palo" AND "palo alto"

**This is extremely fast for 2-word phrases** — a single dictionary lookup instead of positional intersection.`},{heading:"Extended Biwords with POS Tagging",body:`**Extended biword indexes** use part-of-speech tagging to index only meaningful noun phrases:

Tag words as Nouns (N) or function words (X: articles, prepositions).
Index phrases matching pattern N(X+N)*

**Example:**
"renegotiation of the constitution"
POS tags: N X X N
Extended biword: "renegotiation constitution"

"abolition of capital punishment"
POS tags: N X N N
Extended biwords: "abolition punishment", "abolition capital"

**Benefit:** Captures meaningful phrases while skipping function words, reducing dictionary size and false positives compared to raw biwords.`},{heading:"Limitations and Practical Usage",body:`**Biword indexes have significant drawbacks:**

| Issue | Description |
|---|---|
| **False positives** | "stanford university" AND "university palo" matches even if they're in different paragraphs |
| **Vocabulary explosion** | Every consecutive pair = new dictionary entry |
| **Storage** | Dictionary can grow quadratically with vocabulary |
| **Longer phrases** | Chaining biwords increases false positive rate |

**Practical usage:** Biword indexes are sometimes used as a **supplement** to positional indexes:
- Pre-index very common phrases ("New York", "United States", "machine learning")
- These "phrase shortcuts" speed up the most frequent queries
- Fall back to positional intersection for uncommon phrases

**Comparison:**

| Feature | Biword Index | Positional Index |
|---|---|---|
| 2-word phrase speed | O(1) lookup | O(n) position scan |
| Arbitrary phrase support | Requires chaining | Native support |
| Proximity queries | Not supported | Supported |
| False positives | Yes (for chained biwords) | No |
| Dictionary size | Large (pair explosion) | Normal |`}],questions:[{q:"Why do modern search engines prefer positional indexes over biword indexes despite biwords being faster for 2-word phrases?",a:"Several reasons: (1) Biword indexes only handle exact 2-word phrases efficiently. Longer phrases require chaining biwords with AND, which produces false positives — the biwords might appear in different parts of the document. (2) Positional indexes support proximity queries (NEAR/k) which biwords cannot. (3) The dictionary size explodes with biwords — if V is the vocabulary size, there are up to V² possible biwords. (4) Positional indexes also enable passage retrieval, snippet highlighting, and proximity-based ranking. (5) The speed advantage of biwords for 2-word phrases is small in practice because positional intersection with modern CPUs and compressed indexes is very fast. The only common use of biwords today is as a supplement for extremely frequent phrases.",hint:"Think about longer phrases, dictionary size, and additional capabilities.",check:l=>{const r=l.toLowerCase();return(r.includes("false positive")||r.includes("longer phrase"))&&(r.includes("proximity")||r.includes("dictionary")||r.includes("vocabulary"))}}]}];function fh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:"✓ Check"}),i.jsx("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsx("span",{children:"📖 Answer"}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function yh({embedded:l=!1}){const[r,x]=z.useState(null),[$,L]=z.useState(null),[F,_]=z.useState(new Set),[v,M]=z.useState({}),j=Er.reduce((h,k)=>h+k.content.length,0),q=Math.round(F.size/j*100),T=h=>h.split(/\*\*(.*?)\*\*/g).map((c,m)=>m%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:c},m):i.jsx("span",{children:c},m)),p=h=>{const k=h.split(`
`),c=[];let m=0;for(;m<k.length;){const C=k[m];if(C.trim().startsWith("|")&&C.trim().endsWith("|")){const u=[];for(;m<k.length&&k[m].trim().startsWith("|")&&k[m].trim().endsWith("|");)u.push(k[m]),m++;const f=y=>y.split("|").slice(1,-1).map(N=>N.trim()),b=f(u[0]),A=u.findIndex(y=>/^\|[\s\-:|]+\|$/.test(y.trim())),D=A>=0?A+1:1,R=u.slice(D).filter(y=>!/^\|[\s\-:|]+\|$/.test(y.trim()));c.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((y,N)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:T(y)},N))})}),i.jsx("tbody",{children:R.map((y,N)=>{const V=f(y);return i.jsx("tr",{style:{background:N%2===0?"#fff":"#fafaf8"},children:V.map((re,fe)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:T(re)},fe))},N)})})]})},`t${c.length}`))}else C===""?c.push(i.jsx("div",{style:{height:8}},`e${m}`)):c.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:T(C)},`p${m}`)),m++}return c};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#C2410C!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"INFORMATION RETRIEVAL"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Term Vocabulary & Postings Lists"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["How text becomes searchable \\u2014 tokenization, normalization, stemming, skip lists, positional indexes, and biword indexes.",i.jsx("br",{}),Er.length," sections · ",j," concepts · ",Er.reduce((h,k)=>{var c;return h+(((c=k.questions)==null?void 0:c.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #DC2626, #7C3AED, #059669, #D97706, #2563EB, #581C87)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[F.size,"/",j]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Er.map(h=>{var u;const k=r===h.id,c=h.content.map((f,b)=>`${h.id}-${b}`),m=c.filter(f=>F.has(f)).length,C=v[h.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>x(k?null:h.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:h.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:h.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:h.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:h.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",h.content.length]}),i.jsx("span",{className:"ar",style:{transform:k?"rotate(90deg)":"rotate(0)"},children:"›"})]}),k&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsx("button",{className:`tb ${C==="learn"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"learn"})),children:"📖 Learn"}),i.jsxs("button",{className:`tb ${C==="practice"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"practice"})),children:["✏️ Practice (",((u=h.questions)==null?void 0:u.length)||0,")"]}),i.jsxs("button",{className:`tb ${C==="deeper"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"deeper"})),children:["🔗 Go Deeper (",h.resources.length,")"]})]}),C==="learn"&&i.jsx("div",{children:h.content.map((f,b)=>{const A=`${h.id}-${b}`,D=$===A,R=F.has(A);return i.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>L(D?null:A),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${R?"d":""}`,onClick:y=>{y.stopPropagation();const N=new Set(F);N.has(A)?N.delete(A):N.add(A),_(N)},children:R&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:f.heading}),i.jsx("span",{className:"ar",style:{transform:D?"rotate(90deg)":"rotate(0)"},children:"›"})]}),D&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${h.color}20`,marginLeft:22},children:p(f.body)})]},b)})}),C==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(h.questions||[]).map((f,b)=>i.jsx(fh,{...f,color:h.color},`${h.id}-q-${b}`))]}),C==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:h.resources.map((f,b)=>{const A=gh[f.type];return i.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:A.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:A.bg,color:A.color},children:[A.emoji," ",A.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:f.title})]},b)})})]})]})]},h.id)})}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Tokenization → Stop words → Normalization → Stemming/Lemmatization → Skip lists → Positional indexes → Biword indexes"})]})}const bh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Pr=[{id:"dict-structures",icon:"📖",color:"#0891B2",title:"Dictionary Data Structures",subtitle:"Hash tables vs B-trees for term lookup — tradeoffs in speed, range queries, prefix search, and memory",resources:[{type:"read",title:"Stanford IR Book — Dictionary data structures",url:"https://nlp.stanford.edu/IR-book/html/htmledition/dictionaries-1.html"},{type:"video",title:"MIT 6.006 — B-Trees and balanced search trees",url:"https://www.youtube.com/watch?v=TOb1tuEZ2X4"},{type:"read",title:"Wikipedia — B-tree",url:"https://en.wikipedia.org/wiki/B-tree"},{type:"read",title:"Lucene — BlockTree terms dictionary",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/codecs/lucene90/blocktree/package-summary.html"}],content:[{heading:"Hash Table for Term Lookup",body:`**Hash tables provide O(1) average-case lookup** — the fastest option for exact term matching.

| Property | Details |
|---|---|
| **Lookup** | O(1) average, O(n) worst case |
| **Insertion** | O(1) amortized |
| **Range queries** | Not supported |
| **Prefix queries** | Not supported |
| **Space** | Moderate (load factor ~0.5-0.75) |
| **Sorted traversal** | Not supported (need separate sort) |

**How it works for IR:** Hash the term string to find the bucket, then follow the pointer to the postings list. Collisions handled by chaining or open addressing.

**Limitation:** Hash tables can only answer "does this exact term exist?" They cannot answer "what terms start with 'auto'?" or "what terms are between 'aa' and 'az'?" These queries are essential for wildcard matching and autocomplete.`},{heading:"B-Tree for Term Lookup",body:`**B-trees provide O(log n) lookup with support for range and prefix queries.**

| Property | Details |
|---|---|
| **Lookup** | O(log n) |
| **Insertion** | O(log n) |
| **Range queries** | Efficient (leaf-level linked list in B+ trees) |
| **Prefix queries** | Efficient (find starting point, scan) |
| **Space** | Compact (high fanout reduces height) |
| **Sorted traversal** | Natural (in-order traversal) |

**B-tree properties:**
- Internal nodes have between m/2 and m children (m = order)
- All leaves at the same level
- For a dictionary of 1 million terms with order 100: height = log_100(1,000,000) ≈ 3
- Only 3 disk reads to find any term!

**B+ tree variant:** All data in leaves, internal nodes only store keys for routing. Leaves linked in a sorted list for efficient range scans. This is what Lucene and most databases use.`},{heading:"Comparison for IR Applications",body:`**Which to choose depends on what queries you need to support:**

| Feature | Hash Table | B-Tree | Winner |
|---|---|---|---|
| Exact term lookup | O(1) | O(log n) | Hash |
| Prefix search (auto*) | Impossible | O(log n + k) | B-Tree |
| Range search (aa..az) | Impossible | O(log n + k) | B-Tree |
| Sorted enumeration | O(n log n) sort | O(n) traversal | B-Tree |
| Memory efficiency | Wastes ~25-50% | Very compact | B-Tree |
| Minor spelling variants | Impossible | Impossible | Neither |

**In practice:** Most IR systems use **B-trees or tries** because prefix and range queries are needed for wildcard queries, autocomplete, and sorted term enumeration. Hash tables are only used when exact lookup is the sole requirement.

**Lucene's approach:** Uses a **BlockTree** terms dictionary — a B-tree variant that stores terms in blocks with shared prefixes (front coding) for compression, combined with an FST (Finite State Transducer) for fast in-memory prefix lookup.`}],questions:[{q:"A search engine needs to support exact term lookup, prefix-based autocomplete, and wildcard queries like 'auto*'. Which dictionary data structure should it use and why?",a:"It should use a B-tree (or B+ tree / trie). Hash tables support O(1) exact lookup but cannot answer prefix queries ('auto*') or range queries at all — there's no way to find all keys starting with 'auto' without scanning every entry. B-trees support O(log n) exact lookup (slightly slower but still fast), plus O(log n + k) prefix queries by finding the first key >= 'auto' and scanning forward, plus range queries naturally. For a dictionary of 1M terms, a B-tree with order 100 has height ~3, so exact lookup requires only 3 comparisons. The slight speed disadvantage vs hash tables is negligible compared to the essential capabilities B-trees provide.",hint:"Can hash tables answer 'what terms start with auto'?",check:l=>{const r=l.toLowerCase();return(r.includes("b-tree")||r.includes("b tree")||r.includes("btree")||r.includes("trie"))&&(r.includes("prefix")||r.includes("range")||r.includes("auto"))}},{q:"For a dictionary with 10 million terms and a B-tree of order 200, what is the maximum height and how many disk reads are needed for a lookup?",a:"Height = ceil(log_200(10,000,000)). log_200(10M) = log(10M)/log(200) = 7/2.3 = 3.04. So maximum height is 4 levels. A lookup requires at most 4 disk reads (one per level). In practice, the root and often the second level are cached in RAM, so typically only 1-2 disk reads are needed. Compare this to a hash table which needs exactly 1 disk read (after hashing) but can't support prefix queries.",hint:"Height = ceil(log_order(num_terms)). Each level is one disk read.",check:l=>{const r=l.toLowerCase();return(r.includes("4")||r.includes("3"))&&(r.includes("disk")||r.includes("read")||r.includes("level"))}}]},{id:"wildcard",icon:"✱",color:"#DC2626",title:"Wildcard Queries: Permuterm & K-gram",subtitle:"Handling * and ? wildcards — permuterm rotation trick, k-gram indexes, and post-filtering",resources:[{type:"read",title:"Stanford IR Book — Wildcard queries",url:"https://nlp.stanford.edu/IR-book/html/htmledition/wildcard-queries-1.html"},{type:"read",title:"Stanford IR Book — Permuterm indexes",url:"https://nlp.stanford.edu/IR-book/html/htmledition/permuterm-indexes-1.html"},{type:"video",title:"Victor Lavrenko — Wildcard queries",url:"https://www.youtube.com/watch?v=ASt4XTnKXkI"},{type:"read",title:"Stanford IR Book — k-gram indexes",url:"https://nlp.stanford.edu/IR-book/html/htmledition/k-gram-indexes-for-wildcard-queries-1.html"}],content:[{heading:"Types of Wildcard Queries",body:`Wildcard queries contain * (match any string) or ? (match single character).

| Pattern | Type | Example Matches |
|---|---|---|
| mon* | Trailing wildcard | mon, money, monkey, monster |
| *mon | Leading wildcard | demon, lemon, sermon |
| m*n | Infix wildcard | man, men, moon, maiden |
| *m*n* | Multiple wildcards | ammunition, dimension |

**Trailing wildcards are easy:** B-tree prefix search finds all terms starting with "mon".

**Leading wildcards are hard:** B-trees can't search by suffix. Need a special index structure.

**Infix wildcards are hardest:** Need to match both a prefix and suffix constraint simultaneously.`},{heading:"Permuterm Index",body:`**Idea:** Generate all rotations of each term (appended with $) and store in a B-tree. Any wildcard query can be rotated so the * appears at the end — then it becomes a simple prefix search.

**Construction for term "hello":**
Append $ → hello$
Generate all rotations:
hello$     (original)
ello$h     (rotate 1)
llo$he     (rotate 2)
lo$hel     (rotate 3)
o$hell     (rotate 4)
$hello     (rotate 5)

All rotations point back to the original term "hello".

**Query processing:**

| Query | Rotation | B-tree Search |
|---|---|---|
| X* (trailing) | Already ends in * | Search $X* |
| *X (leading) | Rotate to X$* | Search X$* |
| X*Y (infix) | Rotate to Y$X* | Search Y$X* |

**Example: Query m*n**
1. Append $: m*n$
2. Rotate * to end: n$m*
3. Search permuterm index for entries starting with "n$m"
4. Matches: n$man (→ man), n$men (→ men), n$moon (→ moon)

**Space:** Permuterm index is **~10x larger** than the original dictionary because each term of length k generates k+1 rotations.`},{heading:"K-gram Index",body:`**Idea:** Index all character k-grams (subsequences of length k) and map them to terms containing those k-grams.

**Construction (k=3, trigrams) for term "castle":**
Add boundary markers: $castle$
Trigrams: $ca, cas, ast, stl, tle, le$

**K-gram index entries:**
$ca  → [castle, cat, car, catalog, ...]
cas  → [castle, case, cash, casual, ...]
ast  → [castle, fast, mast, ...]
tle  → [castle, bottle, subtle, ...]

**Query processing for re*ve:**
1. Extract k-grams from non-wildcard parts: $re (from re*), ve$ (from *ve)
2. Intersect k-gram postings: terms containing both $re AND ve$
3. Candidates: receive, relive, remove, retrieve, reserve
4. **Post-filter:** Check each candidate against original pattern re*ve
   - retrieve → starts with "re", ends with "ve" ✔
   - remove → starts with "re", ends with "e" not "ve" ✘

**Post-filtering is essential** because k-gram intersection produces false positives.

**Space:** K-gram indexes are **~3-4x larger** — much better than permuterm's ~10x.`},{heading:"Permuterm vs K-gram Comparison",body:`**Both solve the wildcard problem but with different tradeoffs:**

| Feature | Permuterm | K-gram |
|---|---|---|
| Space overhead | ~10x dictionary | ~3-4x dictionary |
| Query types | All wildcard patterns | All wildcard patterns |
| Post-filtering needed | Only for multi-wildcard | Always |
| Implementation | Simple (B-tree of rotations) | Moderate (intersect + filter) |
| Practical usage | Rarely used (too large) | Widely used |
| Single * queries | Exact results (no false positives) | Requires post-filtering |

**In practice:** K-gram indexes dominate because the 3-4x space overhead is acceptable, while permuterm's 10x overhead is not. The post-filtering step in k-gram is fast because it operates on a small candidate set.

**Modern alternatives:**
- **FST (Finite State Transducer)** — used by Lucene. Compact representation that supports all wildcard patterns efficiently.
- **n-gram completion** — used by Elasticsearch's completion suggester for autocomplete.`}],questions:[{q:"Using the permuterm index, how would you process the wildcard query *tion?",a:"Step 1: Append $: *tion$. Step 2: Rotate * to end: tion$*. Step 3: Search B-tree for all entries starting with 'tion$'. Step 4: Matches include: tion$ac (→ action), tion$na (→ nation), tion$mo (→ motion), tion$educa (→ education), etc. The rotation trick converts a leading wildcard (which B-trees can't handle) into a trailing wildcard prefix search (which B-trees handle natively).",hint:"Append $, then rotate until * is at the end.",check:l=>{const r=l.toLowerCase();return r.includes("tion$")&&(r.includes("rotate")||r.includes("prefix")||r.includes("b-tree"))}},{q:"For k=2 (bigrams), what bigrams does the term 'star' produce? How would you use the bigram index to find terms matching s*r?",a:"Bigrams of $star$: $s, st, ta, ar, r$. For query s*r: extract bigrams $s (from s*) and r$ (from *r). Intersect bigram postings: terms containing both $s and r$. Candidates might include: star, stir, sour, super, scar, sir, etc. Post-filter against s*r: keep only terms starting with 's' and ending with 'r'. Results: star, stir, sour, scar, sir (all start with s and end with r). Note: 'super' would be filtered out because it ends with 'r' but checking the full pattern s*r confirms it matches. Actually super does match s*r (starts with s, ends with r).",hint:"Add $ boundary markers, extract bigrams, then intersect and post-filter.",check:l=>{const r=l.toLowerCase();return(r.includes("$s")||r.includes("r$"))&&(r.includes("intersect")||r.includes("post-filter")||r.includes("candidate"))}}]},{id:"edit-distance",icon:"📏",color:"#7C3AED",title:"Edit Distance (Levenshtein)",subtitle:"Dynamic programming for string similarity — the DP matrix, Damerau-Levenshtein extension, and IR applications",resources:[{type:"read",title:"Stanford IR Book — Edit distance",url:"https://nlp.stanford.edu/IR-book/html/htmledition/edit-distance-1.html"},{type:"video",title:"Back To Back SWE — Edit Distance (Levenshtein)",url:"https://www.youtube.com/watch?v=MiqoA-yF-0M"},{type:"read",title:"Wikipedia — Levenshtein distance",url:"https://en.wikipedia.org/wiki/Levenshtein_distance"},{type:"read",title:"Peter Norvig — How to Write a Spelling Corrector",url:"https://norvig.com/spell-correct.html"}],content:[{heading:"The Levenshtein Distance",body:`The **Levenshtein distance** between two strings is the minimum number of single-character edits (insertions, deletions, substitutions) needed to transform one into the other.

**Three operations, each costs 1:**
- **Insert**: cat → cats (insert 's')
- **Delete**: cats → cat (delete 's')
- **Substitute**: cat → car (substitute 't' with 'r')

**Examples:**
- "kitten" → "sitting": distance = 3 (k→s, e→i, insert g)
- "sunday" → "saturday": distance = 3 (insert a, insert t, n→r)
- "abc" → "abc": distance = 0 (identical)

**Properties (true metric):**
1. Non-negativity: d(a, b) ≥ 0
2. Identity: d(a, b) = 0 iff a = b
3. Symmetry: d(a, b) = d(b, a)
4. Triangle inequality: d(a, c) ≤ d(a, b) + d(b, c)`},{heading:"Dynamic Programming Algorithm",body:`Given strings s (length m) and t (length n), build matrix D[0..m][0..n]:

**Base cases:**
D[i][0] = i    (delete i characters from s)
D[0][j] = j    (insert j characters into s)

**Recurrence:**
D[i][j] = min(
    D[i-1][j] + 1,        // deletion
    D[i][j-1] + 1,        // insertion
    D[i-1][j-1] + cost    // substitution (cost=0 if s[i]==t[j], else 1)
)

**Worked example: "kitten" → "sitting"**

        ""  s  i  t  t  i  n  g
    ""   0  1  2  3  4  5  6  7
    k    1  1  2  3  4  5  6  7
    i    2  2  1  2  3  4  5  6
    t    3  3  2  1  2  3  4  5
    t    4  4  3  2  1  2  3  4
    e    5  5  4  3  2  2  3  4
    n    6  6  5  4  3  3  2  3

**Result:** Edit distance = **3** (bottom-right cell)

**Complexity:** O(m × n) time, O(m × n) space (optimizable to O(min(m,n)) using two-row trick).`},{heading:"Damerau-Levenshtein Extension",body:`The **Damerau-Levenshtein** distance adds **transposition** (swapping adjacent characters) as a fourth operation with cost 1.

Standard Levenshtein: "ab" → "ba" = distance 2 (delete b, insert b before a)
Damerau-Levenshtein: "ab" → "ba" = distance 1 (single transposition)

**Why this matters:** ~80% of human misspellings are within Damerau-Levenshtein distance 1. Adjacent key transpositions are the most common typing error.

| Error Type | Example | Frequency |
|---|---|---|
| Transposition | "teh" → "the" | ~40% of typos |
| Deletion | "th" → "the" | ~25% |
| Insertion | "thee" → "the" | ~20% |
| Substitution | "tge" → "the" | ~15% |

**Applications in IR:**
- **Spelling correction:** Find dictionary words within edit distance 1 or 2
- **Fuzzy matching:** Match "colr" to "color" or "colour"
- **Record linkage:** "Jon Smith" vs "John Smith" (distance 1)
- **DNA alignment:** Counting mutations between gene sequences`},{heading:"Using Edit Distance for Spelling Correction",body:`**Naive approach:** Compute edit distance from query to every dictionary word → O(V × m × n). For V=500,000 terms, this is far too slow.

**Practical approaches:**

**1. K-gram filtering:** Use the k-gram index to find candidate terms sharing many k-grams with the query, then compute edit distance only for those candidates.

**2. Jaccard coefficient:** Measure k-gram set overlap:
J(A, B) = |A ∩ B| / |A ∪ B|

Example: "bord" vs "board"
Bigrams of $bord$: $b, bo, or, rd, d$
Bigrams of $board$: $b, bo, oa, ar, rd, d$
Intersection: {$b, bo, rd, d$} = 4
Union: {$b, bo, or, rd, d$, oa, ar} = 7
J = 4/7 = 0.57

Filter: Keep candidates with J > 0.5, then compute exact edit distance.

**3. BK-trees:** A tree data structure where each node stores a dictionary word, and children are organized by edit distance from the parent. Enables efficient range queries: "find all words within edit distance k of query." Reduces candidates from O(V) to a small fraction.`}],questions:[{q:"Compute the Levenshtein distance between 'intention' and 'execution'. Show key steps.",a:"Build the DP matrix for 'intention' (9 chars) vs 'execution' (9 chars). The final answer is D[9][9] = 5. The five edits are: (1) i→e (substitute), (2) n→x (substitute), (3) t→c (substitute), (4) insert 'u' after 'c', (5) n→n stays but with shifted alignment — actually the optimal alignment involves 5 single-character edits. The DP matrix bottom-right value is 5. Key cells: D[2][2]=2 (in→ex), D[4][4]=4, D[9][9]=5.",hint:"Build the DP matrix row by row. The answer is in the bottom-right cell.",check:l=>l.toLowerCase().includes("5")},{q:"Why is Damerau-Levenshtein distance more useful than standard Levenshtein for spelling correction?",a:"Because ~80% of human misspellings are within Damerau-Levenshtein distance 1, and transposition (swapping adjacent characters) is the single most common typing error (~40% of all typos). Standard Levenshtein counts a transposition as distance 2 (delete + insert or two substitutions), which means common typos like 'teh'→'the' appear further away than they actually are. By adding transposition as a primitive operation with cost 1, Damerau-Levenshtein better models how humans actually make typing mistakes, leading to more accurate spelling suggestions — the intended correction is ranked higher because it's at distance 1 instead of 2.",hint:"What is the most common type of typing error?",check:l=>{const r=l.toLowerCase();return(r.includes("transpos")||r.includes("swap")||r.includes("adjacent"))&&(r.includes("common")||r.includes("80%")||r.includes("frequent")||r.includes("typo"))}}]},{id:"soundex",icon:"🔊",color:"#059669",title:"Soundex Phonetic Matching",subtitle:"Encoding words by pronunciation — the Soundex algorithm, examples, limitations, and modern alternatives",resources:[{type:"read",title:"Stanford IR Book — Phonetic correction",url:"https://nlp.stanford.edu/IR-book/html/htmledition/phonetic-correction-1.html"},{type:"read",title:"Wikipedia — Soundex",url:"https://en.wikipedia.org/wiki/Soundex"},{type:"video",title:"Computerphile — Soundex Phonetic Algorithm",url:"https://www.youtube.com/watch?v=4GEFA_DSSUA"},{type:"read",title:"Apache Commons — Soundex and Metaphone implementations",url:"https://commons.apache.org/proper/commons-codec/userguide.html"}],content:[{heading:"The Soundex Algorithm",body:`**Soundex** encodes words based on their **pronunciation** rather than spelling, so that homophones and similar-sounding words get the same code.

**Algorithm:**
1. Keep the first letter (uppercase)
2. Replace consonants with digits:
   B, F, P, V         → 1
   C, G, J, K, Q, S, X, Z → 2
   D, T               → 3
   L                   → 4
   M, N               → 5
   R                   → 6
3. Remove vowels (A, E, I, O, U) and H, W, Y
4. Remove consecutive duplicate digits
5. Pad with zeros or truncate to exactly 4 characters

**Examples:**

| Name | Code | Steps |
|---|---|---|
| Robert | R163 | R, o→skip, b→1, e→skip, r→6, t→3 |
| Rupert | R163 | R, u→skip, p→1, e→skip, r→6, t→3 |
| Smith | S530 | S, m→5, i→skip, t→3, h→skip, pad 0 |
| Smyth | S530 | S, m→5, y→skip, t→3, h→skip, pad 0 |

Robert and Rupert share code R163; Smith and Smyth share S530.`},{heading:"Limitations of Soundex",body:`**Soundex has significant limitations:**

1. **English-only:** Designed for English names; doesn't work well for other languages
2. **Ignores vowels:** Vowels carry meaning in many languages (Arabic, Hebrew)
3. **First letter dominates:** "Carl" (C640) vs "Karl" (K640) get different codes despite identical pronunciation
4. **Fixed length (4 chars):** Long names lose information
5. **Crude groupings:** Maps too many consonants together (C, G, J, K, Q, S, X, Z all → 2)

**Modern alternatives:**

| Algorithm | Improvement | Language Support |
|---|---|---|
| **Metaphone** | Better consonant rules, handles more English patterns | English |
| **Double Metaphone** | Returns two codes (primary + alternate) for ambiguous pronunciations | English + some European |
| **Beider-Morse** | Considers language of origin for names | 15+ languages |
| **NYSIIS** | Better vowel handling, returns variable-length codes | English names |`},{heading:"Soundex in IR Systems",body:`**Soundex is primarily used for name matching**, not general text search:

**Use cases:**
- Census record matching ("Is John Smyth the same person as John Smith?")
- Customer database deduplication
- Genealogy research
- Legal document search (finding variant spellings of party names)

**Why not for general search?**
- Too many false positives for common words
- "Cat" (C300) and "Cut" (C300) would match
- "See" (S000) and "Zoo" (Z000) would not match despite rhyming

**In practice:** Modern IR systems use **edit distance** and **embedding-based similarity** instead of phonetic matching for general spelling correction. Soundex remains useful only for its original domain: name matching across databases with spelling variations.`}],questions:[{q:"Soundex encodes 'Smith' and 'Smyth' identically as S530. Give an example where Soundex fails to match names that sound alike, and explain why.",a:"Example: 'Carr' → C600 and 'Kar' → K600. They sound very similar (identical pronunciation) but get different Soundex codes because Soundex preserves the first letter unchanged. The 'C' vs 'K' distinction at the start produces completely different codes despite identical pronunciation. Similarly, 'Catherine' (C365) and 'Katherine' (K365) don't match. This is a well-known limitation — Double Metaphone addresses it by normalizing initial consonant sounds (both C and K map to 'K' initially).",hint:"The first letter is always kept unchanged in Soundex. What if two names start with different letters that sound the same?",check:l=>{const r=l.toLowerCase();return(r.includes("first letter")||r.includes("c")&&r.includes("k")||r.includes("catherine")&&r.includes("katherine"))&&(r.includes("different code")||r.includes("fail")||r.includes("limitation"))}}]},{id:"spelling",icon:"📝",color:"#D97706",title:"Spelling Correction",subtitle:"Isolated word correction, context-sensitive correction, the noisy channel model, and Norvig's 21-line corrector",resources:[{type:"read",title:"Peter Norvig — How to Write a Spelling Corrector",url:"https://norvig.com/spell-correct.html"},{type:"read",title:"Stanford IR Book — Spelling correction",url:"https://nlp.stanford.edu/IR-book/html/htmledition/spelling-correction-1.html"},{type:"video",title:"Stanford NLP — Spelling Correction and the Noisy Channel",url:"https://www.youtube.com/watch?v=SIXBgHmRur8"},{type:"read",title:"Google — Did You Mean algorithm explanation",url:"https://ai.googleblog.com/2009/03/large-scale-language-modeling-in.html"}],content:[{heading:"Isolated vs Context-Sensitive Correction",body:`**Isolated word correction** checks each word independently against a dictionary:

"flew form Heathrow" → "form" is a valid word → NO correction!

**Context-sensitive correction** considers surrounding words:

P("flew from Heathrow") >> P("flew form Heathrow")
→ Correct "form" to "from" based on context!

**This is the fundamental difference:** Isolated correction only catches non-words ("teh" → "the"). Context-sensitive correction also catches real-word errors ("form" → "from" when preceded by "flew").

**Google's "Did You Mean?" uses context-sensitive correction:**
1. Generate candidates for each query word (edit distance 1-2)
2. Score using **noisy channel model**: P(intended | typed) ∝ P(typed | intended) × P(intended)
3. If best alternative >> original, suggest it
4. Additional signal: **query logs** — if users frequently retype Q1 as Q2, Q2 is likely the correction`},{heading:"The Noisy Channel Model",body:`**The key probabilistic framework for spelling correction:**

Find the correction c that maximizes:
argmax_c P(c | w) = argmax_c P(w | c) × P(c)

Where:
- **P(c)** = language model — probability of word c in the language
- **P(w|c)** = error model — probability of typing w when meaning c

**P(c) — Language model:**
Estimated from a large corpus. More frequent words are more likely intended:
- P("the") = 0.07  (very common)
- P("teh") = 0.0   (not a word)
- P("thee") = 0.001 (rare but valid)

**P(w|c) — Error model:**
Based on keyboard layout and common error patterns:
- Substitution of adjacent keys: P("e"|"r") > P("e"|"z")
- Transposition: P("hte"|"the") is high
- Deletion: P("th"|"the") is moderate
- Insertion: P("thee"|"the") is moderate

**The product P(w|c) × P(c) balances** "how likely was this typo?" with "how common is the intended word?"`},{heading:"Norvig's 21-Line Spelling Corrector",body:`**Peter Norvig's elegant Python program achieves ~70% accuracy:**

**Candidate generation (edit distance 1):**
For a word of length n:
- Deletes: remove 1 character → n candidates
- Transposes: swap adjacent chars → n-1 candidates
- Replaces: change 1 character → 26n candidates
- Inserts: add 1 character → 26(n+1) candidates
- Total: ~54n + 25 candidates

For a 5-letter word: ~295 candidates at distance 1.

**Priority cascade:**
1. If the word itself is in the dictionary → return it (distance 0)
2. Else check edit distance 1 candidates
3. Else check edit distance 2 candidates (edits of edits)
4. Else return the original (give up)

**Performance:**

| Metric | Result |
|---|---|
| Accuracy (dev set) | 75% |
| Accuracy (test set) | 68% |
| Speed | 41 words/sec |
| Dictionary size | 32,192 words |

**Limitations:** Simple error model (all edits equally likely), no context (single word), max distance 2, small dictionary.`},{heading:"Modern Spelling Correction",body:`**Modern systems go far beyond Norvig's approach:**

**Neural language models:** GPT-style models capture context far better than n-grams. "flew form" is extremely unlikely in a neural LM, triggering correction.

**Query log mining:** Track sequences of queries by the same user in short time windows. If users type "pythn" then immediately type "python", learn that "pythn" should correct to "python". This captures domain-specific corrections (programming terms, brand names) that no dictionary contains.

**Learned error models:** Instead of uniform edit costs, train on actual correction data:
- 'i' and 'o' are adjacent on QWERTY → higher substitution probability
- Double letters are commonly dropped: "occurrence" → "occurence"
- Common homophones: "their/there/they're"

**Correction pipeline in modern search:**
1. Spell check using neural model + query logs
2. If confident correction: auto-correct and show "Showing results for X. Search instead for Y?"
3. If uncertain: show "Did you mean X?"
4. If no suggestion: search as-is`}],questions:[{q:"A user types 'flew form Heathrow'. Why does isolated word correction fail here, and how does context-sensitive correction fix it?",a:"Isolated correction checks each word independently against the dictionary. 'form' IS a valid English word, so isolated correction sees no error and makes no correction. Context-sensitive correction considers the surrounding words and uses a language model to compute P('flew from Heathrow') vs P('flew form Heathrow'). The trigram/bigram 'flew from' is vastly more likely than 'flew form' in any English corpus. The noisy channel model scores P('form'|'from') * P('from in context') higher than P('form'|'form') * P('form in context'), triggering the correction to 'from'. This demonstrates that real-word errors (where the typo happens to be a valid word) can only be caught by considering context.",hint:"Is 'form' a real English word? What does a language model tell us about 'flew form' vs 'flew from'?",check:l=>{const r=l.toLowerCase();return(r.includes("valid word")||r.includes("real word")||r.includes("dictionary"))&&(r.includes("context")||r.includes("language model")||r.includes("probability"))}}]},{id:"autocomplete",icon:"🔎",color:"#2563EB",title:"Query Autocomplete",subtitle:"Prefix tries, frequency-weighted suggestions, precomputed top-k, and real-world considerations",resources:[{type:"read",title:"Stanford IR Book — Tries and prefix-based lookup",url:"https://nlp.stanford.edu/IR-book/html/htmledition/dictionaries-1.html"},{type:"read",title:"System Design — Design Autocomplete System",url:"https://www.designgurus.io/course-play/grokking-the-system-design-interview/doc/638c0b7dac93e7ae59a1b00b"},{type:"video",title:"NeetCode — Design Search Autocomplete System",url:"https://www.youtube.com/watch?v=us0qySiUsGU"},{type:"read",title:"Elasticsearch — Completion Suggester",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html#completion-suggester"}],content:[{heading:"Prefix Trie Data Structure",body:`A **trie** (prefix tree) stores all terms character by character, enabling O(L) prefix lookup (L = query length).

Root
├── a
│   ├── p
│   │   ├── p
│   │   │   ├── l
│   │   │   │   └── e [freq: 500]    ← "apple"
│   │   │   └── s [freq: 120]      ← "apps"
│   │   └── r
│   │       └── i
│   │           └── l [freq: 80]    ← "april"
│   └── u
│       └── t
│           └── o [freq: 300]      ← "auto"
└── b
    └── o
        └── o
            └── k [freq: 450]          ← "book"

**Lookup "app":** Follow a → p → p. Now in the subtree containing "apple" (500) and "apps" (120). Return both as suggestions.`},{heading:"Frequency-Weighted Suggestions",body:`**The key problem:** Given a prefix, return the **top-k most frequent** completions efficiently.

**Approach 1: DFS from prefix node**
Traverse the entire subtree, collect all terminal nodes with frequencies, sort by frequency, return top-k.
- Slow for large tries — must explore all branches under the prefix.

**Approach 2: Precomputed top-k at each node**
Each internal node stores a sorted list of the k highest-frequency terms in its subtree.
- Lookup: O(L) to reach prefix node, O(1) to return precomputed top-k.
- Space: O(k × total_nodes) — significant but practical.
- **This is the standard approach** for production autocomplete.

**Approach 3: Weighted trie + priority queue**
Store max subtree weight at each node. Use a priority queue to explore branches in weight order. Stop after finding k results.
- Time: O(L + k × log(alphabet_size))
- Good when k is small and the trie is large.`},{heading:"Real-World Autocomplete Considerations",body:`**Production autocomplete systems go far beyond simple prefix tries:**

| Aspect | Implementation |
|---|---|
| **Personalization** | Boost terms from user's search history |
| **Recency** | Weight recent/trending queries higher |
| **Typo tolerance** | Use edit distance to match despite prefix typos |
| **Geographic** | Boost location-relevant suggestions |
| **Update frequency** | Rebuild trie periodically from query logs |
| **Latency** | Must return in <100ms — precomputation essential |

**Google's autocomplete architecture:**
1. **Query log aggregation:** Collect billions of queries, group by prefix, count frequencies
2. **Trie sharding:** Distribute the trie across servers by prefix range (a-f on server 1, g-m on server 2, etc.)
3. **Edge caching:** Cache popular prefixes at CDN edge nodes
4. **Real-time trending:** Inject trending queries with boosted weights
5. **Safety filtering:** Remove offensive, dangerous, or legally problematic suggestions
6. **Latency budget:** <50ms end-to-end, including network round trip

**The result:** When you type "wea", Google returns "weather", "weather tomorrow", "weather radar" within 30-50ms, personalized to your location, with trending events boosted.`}],questions:[{q:"Design an autocomplete system that returns the top-5 suggestions for any prefix in under 100ms. What data structure would you use and why?",a:"Use a trie with precomputed top-k at each node. Data structure: Each trie node stores (1) children map, (2) array of top-5 (term, frequency) pairs for its subtree. Construction: Build trie from query logs, then bottom-up compute top-5 for each node by merging children's top-5 lists. Query: Follow prefix path in O(L) time (L = prefix length), then return the precomputed top-5 array in O(1). Total query time: O(L) which is microseconds for typical 3-10 character prefixes. Update: Periodically rebuild from fresh query logs (batch), or use a separate small 'hot' trie for real-time trending queries merged with the main trie at query time. The precomputed approach sacrifices update latency for query latency — the right tradeoff for autocomplete where reads vastly outnumber writes.",hint:"Which approach gives O(1) lookup after reaching the prefix node?",check:l=>{const r=l.toLowerCase();return(r.includes("trie")||r.includes("prefix tree"))&&(r.includes("precompute")||r.includes("top-k")||r.includes("top-5")||r.includes("store")&&r.includes("node"))}}]}];function vh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:"✓ Check"}),i.jsx("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsx("span",{children:"📖 Answer"}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function wh({embedded:l=!1}){const[r,x]=z.useState(null),[$,L]=z.useState(null),[F,_]=z.useState(new Set),[v,M]=z.useState({}),j=Pr.reduce((h,k)=>h+k.content.length,0),q=Math.round(F.size/j*100),T=h=>h.split(/\*\*(.*?)\*\*/g).map((c,m)=>m%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:c},m):i.jsx("span",{children:c},m)),p=h=>{const k=h.split(`
`),c=[];let m=0;for(;m<k.length;){const C=k[m];if(C.trim().startsWith("|")&&C.trim().endsWith("|")){const u=[];for(;m<k.length&&k[m].trim().startsWith("|")&&k[m].trim().endsWith("|");)u.push(k[m]),m++;const f=y=>y.split("|").slice(1,-1).map(N=>N.trim()),b=f(u[0]),A=u.findIndex(y=>/^\|[\s\-:|]+\|$/.test(y.trim())),D=A>=0?A+1:1,R=u.slice(D).filter(y=>!/^\|[\s\-:|]+\|$/.test(y.trim()));c.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((y,N)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:T(y)},N))})}),i.jsx("tbody",{children:R.map((y,N)=>{const V=f(y);return i.jsx("tr",{style:{background:N%2===0?"#fff":"#fafaf8"},children:V.map((re,fe)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:T(re)},fe))},N)})})]})},`t${c.length}`))}else C===""?c.push(i.jsx("div",{style:{height:8}},`e${m}`)):c.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:T(C)},`p${m}`)),m++}return c};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#7C3AED!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"INFORMATION RETRIEVAL"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Dictionaries & Tolerant Retrieval"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Handling imperfect queries \\u2014 wildcard matching, fuzzy search, phonetic matching, spelling correction, and autocomplete.",i.jsx("br",{}),Pr.length," sections · ",j," concepts · ",Pr.reduce((h,k)=>{var c;return h+(((c=k.questions)==null?void 0:c.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #0891B2, #DC2626, #7C3AED, #059669, #D97706, #2563EB)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[F.size,"/",j]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Pr.map(h=>{var u;const k=r===h.id,c=h.content.map((f,b)=>`${h.id}-${b}`),m=c.filter(f=>F.has(f)).length,C=v[h.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>x(k?null:h.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:h.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:h.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:h.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:h.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",h.content.length]}),i.jsx("span",{className:"ar",style:{transform:k?"rotate(90deg)":"rotate(0)"},children:"›"})]}),k&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsx("button",{className:`tb ${C==="learn"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"learn"})),children:"📖 Learn"}),i.jsxs("button",{className:`tb ${C==="practice"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"practice"})),children:["✏️ Practice (",((u=h.questions)==null?void 0:u.length)||0,")"]}),i.jsxs("button",{className:`tb ${C==="deeper"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"deeper"})),children:["🔗 Go Deeper (",h.resources.length,")"]})]}),C==="learn"&&i.jsx("div",{children:h.content.map((f,b)=>{const A=`${h.id}-${b}`,D=$===A,R=F.has(A);return i.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>L(D?null:A),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${R?"d":""}`,onClick:y=>{y.stopPropagation();const N=new Set(F);N.has(A)?N.delete(A):N.add(A),_(N)},children:R&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:f.heading}),i.jsx("span",{className:"ar",style:{transform:D?"rotate(90deg)":"rotate(0)"},children:"›"})]}),D&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${h.color}20`,marginLeft:22},children:p(f.body)})]},b)})}),C==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(h.questions||[]).map((f,b)=>i.jsx(vh,{...f,color:h.color},`${h.id}-q-${b}`))]}),C==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:h.resources.map((f,b)=>{const A=bh[f.type];return i.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:A.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:A.bg,color:A.color},children:[A.emoji," ",A.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:f.title})]},b)})})]})]})]},h.id)})}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Dictionary structures → Wildcard queries → Edit distance → Soundex → Spelling correction → Autocomplete"})]})}const xh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ar=[{id:"bsbi",icon:"📦",color:"#C2410C",title:"BSBI Algorithm",subtitle:"Blocked Sort-Based Indexing — external sorting for collections that don't fit in RAM, with multi-way merge",resources:[{type:"read",title:"Stanford IR Book — Blocked sort-based indexing",url:"https://nlp.stanford.edu/IR-book/html/htmledition/blocked-sort-based-indexing-1.html"},{type:"video",title:"Stanford CS276 — Index construction",url:"https://www.youtube.com/watch?v=cKHX845gWig"},{type:"read",title:"Wikipedia — External sorting",url:"https://en.wikipedia.org/wiki/External_sorting"},{type:"read",title:"Stanford IR Book — Ch 4: Index Construction",url:"https://nlp.stanford.edu/IR-book/html/htmledition/index-construction-1.html"}],content:[{heading:"The Problem: Index Won't Fit in RAM",body:`**Building an inverted index for a large collection when the data doesn't fit in memory.**

Consider indexing Wikipedia (6M documents, ~10 billion tokens):
- Each (termID, docID) pair = 8 bytes
- Total pairs: ~10 billion × 8 bytes = **80 GB**
- Typical server RAM: 16-64 GB

**We need an external sorting algorithm** that processes the collection in memory-sized blocks and merges the results.

BSBI (Blocked Sort-Based Indexing) solves this by:
1. Processing the collection in fixed-size blocks that fit in RAM
2. Sorting each block in memory
3. Writing sorted blocks to disk
4. Merging all blocks into the final index using a multi-way merge`},{heading:"The BSBI Algorithm",body:`BSBI_INDEX_CONSTRUCTION(Collection):
    1. Assign unique integer termIDs to all terms
    2. n = 0  (block counter)
    3. While there are documents to process:
       a. n = n + 1
       b. block = []
       c. While block fits in memory AND documents remain:
          - Parse next document
          - For each term, create (termID, docID) pair
          - Add pair to block
       d. Sort block by termID (primary), then docID (secondary)
       e. Write sorted block to disk as file block_n
    4. Merge all block files into single index:
       - Open all block files simultaneously
       - Use priority queue (min-heap) keyed on termID
       - For each termID, merge postings from all blocks
       - Write merged postings to final index file
    Return final index`},{heading:"Worked Example",body:`**Collection:** 100M tokens, 800 MB of (termID, docID) pairs
**Memory:** 100 MB available

**Steps:**
1. Create ⌈800/100⌉ = 8 blocks of ~100 MB each
2. Sort each block in memory — O(B log B) per block where B = pairs per block
3. Write 8 sorted files to disk
4. Merge: open all 8 files, read small buffers, merge via priority queue

**Merge process (4-way merge example):**
Block 1: (a, 1) (a, 5) (b, 2) ...
Block 2: (a, 3) (b, 1) (b, 4) ...
Block 3: (a, 7) (a, 9) (c, 1) ...
Block 4: (b, 3) (c, 2) (c, 5) ...

Priority queue extracts (a, 1) from Block 1 first, then (a, 3) from Block 2, etc. All postings for term "a" are merged together: [1, 3, 5, 7, 9].

**Complexity:**

| Aspect | Complexity |
|---|---|
| **Time** | O(T log T) where T = total pairs |
| **Disk I/O** | O(T) reads + O(T) writes (2 passes) |
| **Memory** | Fixed block size (user-configured) |
| **Disk seeks** | Minimal — sequential reads and writes |`},{heading:"BSBI Limitations",body:`**Key limitation:** BSBI requires a **term-to-termID mapping** that fits in memory, or a pre-pass to build it.

For very large vocabularies (web-scale: billions of terms), this mapping itself can be problematic:
- 1 billion terms × ~20 bytes per term = 20 GB just for the dictionary
- May not fit in RAM alongside the block being sorted

**This motivates SPIMI** (Single-Pass In-Memory Indexing), which eliminates the need for a global term-to-ID mapping.

**Other limitations:**
- Sorting (termID, docID) pairs is O(T log T) — can we do better?
- Each pair stores both termID and docID redundantly across blocks
- The entire collection must be processed before any queries can be answered`}],questions:[{q:"You have 50 million (term, docID) pairs and 500 MB of RAM. Using BSBI with 100 MB blocks, how many blocks are created, and what is the merge complexity?",a:"Each pair is approximately 8 bytes, so 50M * 8 = 400 MB total data. With 100 MB blocks: ceil(400/100) = 4 blocks. Merge complexity: 4-way merge using a priority queue. Total comparisons during merge: O(50M * log 4) = O(100M). Disk I/O during merge: read 400 MB + write 400 MB = 800 MB sequential I/O. The merge is dominated by I/O, not computation, since sequential disk reads at ~500 MB/s complete in under 2 seconds.",hint:"Total data = pairs * 8 bytes. Blocks = ceil(total / block_size). Merge = O(T log k) where k = number of blocks.",check:l=>{const r=l.toLowerCase();return r.includes("4")&&(r.includes("block")||r.includes("merge"))&&(r.includes("log")||r.includes("100m")||r.includes("400"))}}]},{id:"spimi",icon:"⚡",color:"#DC2626",title:"SPIMI Algorithm",subtitle:"Single-Pass In-Memory Indexing — no global term mapping, O(T) construction, and why it's faster than BSBI",resources:[{type:"read",title:"Stanford IR Book — Single-pass in-memory indexing",url:"https://nlp.stanford.edu/IR-book/html/htmledition/single-pass-in-memory-indexing-1.html"},{type:"read",title:"Wikipedia — SPIMI",url:"https://en.wikipedia.org/wiki/Single-pass_in-memory_indexing"},{type:"video",title:"IIT Kharagpur NPTEL — SPIMI",url:"https://www.youtube.com/watch?v=Zih8O6PTxxs"},{type:"read",title:"Lucene — How indexing works internally",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/index/package-summary.html"}],content:[{heading:"Key Insight: Build Postings Directly",body:`**SPIMI improves on BSBI by eliminating the sorting step** and the need for a global term-to-termID mapping.

**Instead of creating (termID, docID) pairs and sorting them, SPIMI builds postings lists directly in memory using a hash table.**

SPIMI_INVERT(token_stream):
    output_file = NEW_FILE()
    dictionary = {}  // hash table: term → postings_list

    While memory available AND tokens remain:
        token = next(token_stream)
        term = token.term
        docID = token.docID

        if term not in dictionary:
            dictionary[term] = new postings_list
        dictionary[term].append(docID)

    // Sort terms alphabetically (NOT the postings)
    sorted_terms = sort(dictionary.keys())

    // Write block to disk
    for term in sorted_terms:
        write(output_file, term, dictionary[term])

    return output_file`},{heading:"SPIMI vs BSBI Comparison",body:`**Key differences:**

| Feature | BSBI | SPIMI |
|---|---|---|
| **Term representation** | Integer termIDs | String terms directly |
| **Sorting step** | Sort all (termID, docID) pairs | Sort only dictionary keys |
| **Postings construction** | After sorting, group by termID | Build postings directly as tokens arrive |
| **Memory efficiency** | Stores (termID, docID) pairs | Stores terms + growing postings lists |
| **Term mapping** | Requires global term→ID map | No global mapping needed |
| **Time complexity** | O(T log T) | O(T) — no pair sorting |
| **Speed** | Slower (sorting overhead) | Faster (linear in collection size) |

**Why SPIMI is faster:**
1. **No sorting of (term, docID) pairs:** Postings are accumulated directly into lists
2. **No termID storage:** Terms stored as strings in dictionary, postings don't store term info redundantly
3. **Dynamic memory allocation:** Postings lists grow as needed
4. **Only sort dictionary keys at flush time** — sorting V keys (vocabulary size) is much cheaper than sorting T pairs (total tokens)`},{heading:"SPIMI Merge Phase",body:`**After creating all blocks, SPIMI uses the same multi-way merge as BSBI:**

1. Open all block files simultaneously
2. Since each block is sorted alphabetically by term, use a priority queue
3. For each term, merge postings lists from all blocks that contain it
4. Write merged result to final index

**The merge phase is identical for BSBI and SPIMI** — the difference is entirely in how blocks are created.

**SPIMI complexity:**

| Aspect | Complexity |
|---|---|
| **Block creation** | O(T) — linear in tokens |
| **Block flush** | O(V log V) per block — sort vocabulary |
| **Merge** | O(T) across all blocks |
| **Total** | O(T + k × V log V) where k = number of blocks |

Since T >> V (tokens >> unique terms), the O(T) dominance makes SPIMI essentially **linear** in the collection size.`}],questions:[{q:"Why does SPIMI not need to sort (term, docID) pairs, and what does it sort instead?",a:"SPIMI doesn't sort (term, docID) pairs because it builds postings lists directly using a hash table. As each token arrives, SPIMI looks up the term in the hash table (O(1)) and appends the docID to that term's postings list. Since documents are processed in order, docIDs are naturally appended in sorted order within each postings list. What SPIMI does sort is the dictionary keys (term strings) alphabetically at flush time, so that the block written to disk is in term-sorted order for the subsequent merge phase. Sorting V dictionary keys is much cheaper than sorting T (term, docID) pairs because V << T (vocabulary is much smaller than total tokens).",hint:"How do docIDs end up in sorted order without explicit sorting?",check:l=>{const r=l.toLowerCase();return(r.includes("hash")||r.includes("directly")||r.includes("append"))&&(r.includes("dictionary")||r.includes("keys")||r.includes("vocabulary")||r.includes("term string"))}}]},{id:"mapreduce",icon:"🌍",color:"#7C3AED",title:"MapReduce Indexing",subtitle:"Distributed index construction across thousands of machines — map, shuffle, reduce phases for web-scale",resources:[{type:"read",title:"Stanford IR Book — Distributed indexing",url:"https://nlp.stanford.edu/IR-book/html/htmledition/distributed-indexing-1.html"},{type:"read",title:"Dean & Ghemawat — MapReduce: Simplified Data Processing (Google, 2004)",url:"https://research.google/pubs/pub62/"},{type:"video",title:"MIT 6.824 — MapReduce lecture",url:"https://www.youtube.com/watch?v=cQP8WApzIQQ"},{type:"read",title:"Apache Hadoop — MapReduce Tutorial",url:"https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html"}],content:[{heading:"Why Distributed Indexing",body:`**For web-scale collections (billions of documents), a single machine is insufficient.**

Google's web index (2024 estimates):
- ~400 billion web pages
- ~100 petabytes of raw HTML
- Inverted index: multiple petabytes
- Building time on one machine: **years**
- Building time on 10,000 machines: **hours**

**MapReduce** distributes index construction across thousands of machines, originally described by Dean & Ghemawat at Google in 2004.`},{heading:"Map-Shuffle-Reduce Architecture",body:`**Three phases:**

**Map Phase:** Each mapper processes a chunk of documents:
MAP(docID, document):
    for each term t in document:
        emit(t, docID)

**Shuffle Phase:** The framework groups all emitted pairs by key (term):
- All (term_a, docID) pairs go to the same reducer
- Partitioning: hash(term) mod num_reducers

**Reduce Phase:** Each reducer handles a partition of terms:
REDUCE(term, list_of_docIDs):
    sort(list_of_docIDs)
    remove_duplicates(list_of_docIDs)
    compute_term_frequency(list_of_docIDs)
    write_postings_list(term, list_of_docIDs)

**Example with 3 mappers:**
Mapper 1: (cat, d1) (dog, d1) (cat, d2)
Mapper 2: (dog, d3) (bird, d3) (cat, d4)
Mapper 3: (bird, d5) (dog, d5) (dog, d6)

After shuffle:
Reducer for "bird": [d3, d5]
Reducer for "cat": [d1, d2, d4]
Reducer for "dog": [d1, d3, d5, d6]`},{heading:"Google's Indexing Pipeline Evolution",body:`**Google's indexing has evolved through several generations:**

| Era | System | Approach |
|---|---|---|
| 1998-2003 | Original Google | Single-machine batch indexing |
| 2004-2010 | MapReduce | Distributed batch processing on commodity hardware |
| 2010-present | Caffeine | Continuous real-time indexing (not batch) |
| 2015-present | Spanner + custom | Globally distributed, strongly consistent |

**Modern Google no longer uses batch MapReduce for indexing.** Caffeine (2010) replaced it with a continuously updated system where new and changed pages are indexed within minutes, not hours.

**But the MapReduce model remains fundamental** for understanding distributed index construction, and is still used at many companies for batch reindexing and analytics.`}],questions:[{q:"In MapReduce indexing, why is the shuffle phase the most expensive step? What determines its cost?",a:"The shuffle phase is the most expensive because it requires transferring ALL intermediate data across the network. Every (term, docID) pair emitted by every mapper must be sent to the correct reducer based on the term's hash partition. This is an all-to-all communication pattern. The cost is determined by: (1) Total intermediate data volume = number of tokens in the collection * size per pair. For a 100 billion token collection at 12 bytes per pair, this is ~1.2 TB of network transfer. (2) Network bandwidth between machines — typically 1-10 Gbps, so 1.2 TB takes minutes to hours. (3) Number of reducers — more reducers = more parallelism but more network connections. The map and reduce phases are embarrassingly parallel (no inter-machine communication), but the shuffle requires coordinated data movement across the entire cluster.",hint:"What happens to all the emitted (term, docID) pairs between map and reduce?",check:l=>{const r=l.toLowerCase();return(r.includes("network")||r.includes("transfer")||r.includes("data movement"))&&(r.includes("all")||r.includes("every")||r.includes("intermediate"))}}]},{id:"dynamic-indexing",icon:"🔄",color:"#059669",title:"Dynamic Indexing & LSM Trees",subtitle:"Updating indexes without full rebuilds — auxiliary indexes, logarithmic merge, Lucene segments, and LSM trees",resources:[{type:"read",title:"Stanford IR Book — Dynamic indexing",url:"https://nlp.stanford.edu/IR-book/html/htmledition/dynamic-indexing-1.html"},{type:"read",title:"Exploring Apache Lucene Index — Segments and merging",url:"https://j.blaszyk.me/tech-blog/exploring-apache-lucene-index/"},{type:"read",title:"Elasticsearch — Merge settings",url:"https://www.elastic.co/docs/reference/elasticsearch/index-settings/merge"},{type:"video",title:"Martin Kleppmann — LSM Trees and SSTables",url:"https://www.youtube.com/watch?v=_5vrfuwhvlQ"}],content:[{heading:"The Update Problem",body:`**Real-world collections change constantly:** documents are added, modified, and deleted. Rebuilding the entire index for every change is prohibitively expensive.

**Three approaches:**

| Approach | Cost per Update | Query Overhead | Rebuild Needed |
|---|---|---|---|
| Full rebuild | O(T) — rebuild everything | None | Every update |
| Auxiliary index | O(1) amortized | Search 2 indexes | Periodic merge |
| Logarithmic merge | O(log T) amortized | Search O(log T) indexes | Never |`},{heading:"Auxiliary Index + Periodic Merge",body:`**The simplest dynamic indexing approach:**

1. Maintain the **main index** on disk (immutable, large)
2. Keep a small **auxiliary index** in memory for new/modified documents
3. At query time, search both indexes and merge results
4. Periodically merge auxiliary into main index

**Problem:** Merging is O(T) where T = total postings in the main index. If done too frequently, merge cost dominates. If done too rarely, the auxiliary index grows large and slows queries (must search two indexes).

**The tradeoff:**
- Merge every 1 hour: good query performance, expensive merges
- Merge every 24 hours: cheap merges, auxiliary index grows large
- Need: a strategy that balances merge cost and query performance`},{heading:"Logarithmic Merge",body:`**Maintain multiple indexes of exponentially increasing size:**

Level 0 (memory): I₀     capacity n
Level 1 (disk):   I₁     capacity 2n
Level 2 (disk):   I₂     capacity 4n
Level 3 (disk):   I₃     capacity 8n

**Merge rule:** When level k is full and a new index arrives, merge levels k and k into level k+1.

**Cost analysis:** Each posting is merged at most O(log(T/n)) times.
Total cost: **O(T log(T/n))** instead of O(T²/n) for naive periodic merge.

**This is the fundamental idea behind Lucene segments and LSM trees.**`},{heading:"Lucene Segments and LSM Trees",body:`**Apache Lucene** (the engine behind Elasticsearch, Solr) implements logarithmic merge via segments:

1. New documents buffered in **memory** (RAM buffer)
2. When buffer full, flush to disk as a new **segment** (mini inverted index)
3. Segments are **immutable** — never modified after creation
4. **Deletions** tracked via per-segment bitset (not physically removed)
5. **Updates** = delete old version + add new version
6. **Background merge** combines small segments into larger ones

**TieredMergePolicy** (Elasticsearch defaults):
- max_merge_at_once: 10 segments merged per operation
- segments_per_tier: 10 segments per level
- floor_segment: 2 MB minimum segment size

**LSM Trees** generalize this pattern:
- Write-optimized: all writes go to in-memory buffer (memtable)
- When full, memtable flushed to disk as sorted run (SSTable)
- Background compaction merges SSTables
- Used by: LevelDB, RocksDB, Cassandra, HBase, **Lucene**

**Key insight:** Lucene segments ARE essentially an LSM tree where "keys" are terms and "values" are postings lists.`}],questions:[{q:"Why does Lucene use immutable segments instead of updating the index in place? What problem does immutability create, and how is it solved?",a:"Immutable segments enable: (1) Lock-free concurrent reads — readers never see partially written data because segments are written atomically. (2) Crash safety — incomplete writes don't corrupt existing segments. (3) Simple caching — cached segment data never goes stale. (4) Easy replication — just copy segment files. The problem: deletions can't physically remove data. Deleted documents are marked in a per-segment bitset (deletion vector) but remain in the segment, wasting space and requiring the deletion bitset check during every query. Solution: background segment merging physically removes deleted documents while consolidating small segments into larger ones, reclaiming space and improving query performance.",hint:"Think about concurrency, crash recovery, and what happens with deletions.",check:l=>{const r=l.toLowerCase();return(r.includes("concurrent")||r.includes("crash")||r.includes("read")||r.includes("lock"))&&(r.includes("delet")||r.includes("bitset")||r.includes("merge"))}}]},{id:"dict-compression",icon:"💾",color:"#D97706",title:"Dictionary Compression",subtitle:"Dictionary-as-a-string, blocked storage, and front coding — fitting millions of terms in RAM",resources:[{type:"read",title:"Stanford IR Book — Dictionary compression",url:"https://nlp.stanford.edu/IR-book/html/htmledition/dictionary-compression-1.html"},{type:"read",title:"Stanford IR Book — Ch 5: Index Compression",url:"https://nlp.stanford.edu/IR-book/html/htmledition/index-compression-1.html"},{type:"video",title:"IIT Kharagpur — Index Compression",url:"https://www.youtube.com/watch?v=6QNh0ssBFTs"},{type:"read",title:"Lucene — BlockTree terms format",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/codecs/lucene90/blocktree/package-summary.html"}],content:[{heading:"Why Compress the Dictionary?",body:`**For fast lookup, the dictionary should fit in main memory.** Even with millions of terms, compression keeps it in RAM.

**Reuters-RCV1 example:**
- 400,000 distinct terms
- Average term length: 8 characters
- Uncompressed: 400K × (8 bytes term + 4 bytes df + 4 bytes pointer) = ~6.4 MB
- After compression: ~1.6 MB (4x reduction)

**Three compression techniques (applied in combination):**
1. Dictionary-as-a-string
2. Blocked storage
3. Front coding`},{heading:"Dictionary-as-a-String and Blocked Storage",body:`**Dictionary-as-a-String:**
Instead of fixed-width entries, concatenate all terms into one string with pointers:

Fixed-width (28 bytes per entry):
[automata________|ptr][betray__________|ptr][compact_________|ptr]

Dictionary-as-string:
automatabetraycompact...
↑0       ↑8      ↑14       (pointer table: term_ptr, df, postings_ptr)

**Savings:** Eliminates padding for short terms. Average savings ~60%.

**Blocked Storage:**
Group terms into blocks of k terms. Store the first term's pointer, then each term as (length, characters):

Block size k=4:
Block 1: ptr → 8automata6betray7compact5dense
                ↑length  ↑length ↑length ↑length

Term pointer table needs only 1 entry per k terms instead of 1 per term.

**Tradeoff:** Lookup requires scanning within a block — O(k) per lookup instead of O(1). With k=4, this is negligible.`},{heading:"Front Coding",body:`**Consecutive sorted terms often share long prefixes.** Front coding stores only the shared prefix length and the differing suffix.

**Without front coding:**
automata
automate
automatic
automobile

**With front coding:**
automata         → 0:automata     (0 shared, full word)
automate         → 7:e            (share "automat", add "e")
automatic        → 7:ic           (share "automat", add "ic")
automobile       → 5:mobile       (share "autom", add "obile")

**Savings:** Typically 25-30% on top of dictionary-as-string. Works especially well for large vocabularies with many shared prefixes (URLs, file paths, scientific terms).

**Combined savings for Reuters-RCV1:**

| Technique | Dictionary Size |
|---|---|
| Uncompressed (fixed-width) | 11.2 MB |
| Dictionary-as-string | 7.6 MB |
| + Blocked (k=4) | 7.1 MB |
| + Front coding | 5.9 MB |
| All combined | **3.2 MB** (3.5x reduction) |`}],questions:[{q:"Front-code the following sorted terms: 'database', 'dataflow', 'datagram', 'datatype'. Show the encoded output.",a:"database → 0:database (0 shared, 8 new chars, full word). dataflow → 4:flow (share 'data', 4 new chars). datagram → 4:gram (share 'data', 4 new chars). datatype → 4:type (share 'data', 4 new chars). Note: we could be more aggressive — 'dataflow' to 'datagram' share 'data' (not 'dataf'), so the second entry's prefix sharing is relative to the previous entry. If using differential front coding: database(0:database), dataflow(4:flow), datagram(5:ram sharing 'datag'? No — 'dataf' vs 'datag' differ at position 5), so datagram shares 4 chars with dataflow: 4:gram. The simplest approach: each entry shares prefix with the FIRST entry in the block.",hint:"Each entry encodes the number of shared prefix characters with the previous entry, then the remaining suffix.",check:l=>{const r=l.toLowerCase();return r.includes("4")&&(r.includes("flow")||r.includes("gram")||r.includes("type"))&&r.includes("data")}}]},{id:"postings-compression",icon:"🗜",color:"#2563EB",title:"Postings Compression",subtitle:"Gap encoding, Variable Byte (VByte), gamma codes, and Elias-Fano — shrinking postings lists 3-5x",resources:[{type:"read",title:"Stanford IR Book — Postings file compression",url:"https://nlp.stanford.edu/IR-book/html/htmledition/postings-file-compression-1.html"},{type:"read",title:"Antonio Mallia — Elias-Fano Encoding",url:"https://www.antoniomallia.it/sorted-integers-compression-with-elias-fano-encoding.html"},{type:"video",title:"Stanford CS276 — Index compression",url:"https://www.youtube.com/watch?v=6QNh0ssBFTs"},{type:"read",title:"Daniel Lemire — Stream VByte implementation",url:"https://lemire.me/blog/2017/09/27/stream-vbyte-breaking-new-speed-records-for-integer-compression/"}],content:[{heading:"Gap Encoding: The Key Insight",body:`**Postings lists store sorted document IDs. Instead of absolute IDs, store the gaps (differences):**

Original:    [1, 5, 9, 18, 23, 24, 30]
Gaps:        [1, 4, 4, 9,  5,  1,  6]

**Why gaps are better:** Gaps tend to be much smaller than absolute IDs, especially for common terms. Smaller numbers need fewer bits.

**For a term appearing in 1% of 10M documents:**
- Absolute IDs: up to 10,000,000 (~24 bits each)
- Average gap: 100 (~7 bits each)
- Savings: ~3.4x just from gap encoding

**For a very common term (50% of documents):**
- Average gap: 2 (~2 bits each vs 24 bits)
- Savings: ~12x

**For a rare term (0.01% of documents):**
- Average gap: 10,000 (~14 bits each vs 24 bits)
- Savings: ~1.7x

**Key insight:** The more frequent a term, the smaller its gaps, and the better compression works.`},{heading:"Variable Byte (VByte) Encoding",body:`**The most widely used practical compression. Encodes each gap using a variable number of bytes.**

**Rules:**
- Use 7 bits per byte for data
- Use the high bit as continuation flag: 0 = more bytes follow, 1 = last byte

**Examples:**

| Gap | Binary | VByte Encoding | Bytes |
|---|---|---|---|
| 5 | 101 | **1**0000101 | 1 |
| 127 | 1111111 | **1**1111111 | 1 |
| 128 | 10000000 | 00000001 **1**0000000 | 2 |
| 214577 | ... | 00001101 00001100 **1**0110001 | 3 |

**Range per byte count:**
- 1 byte: 0-127
- 2 bytes: 128-16,383
- 3 bytes: 16,384-2,097,151

**Properties:**
- Simple and fast to encode/decode (no bit manipulation beyond shifts)
- Byte-aligned — no bit packing needed
- Used in Protocol Buffers, Lucene, SQLite, and many production systems
- Decoding is branchless on modern CPUs (very cache-friendly)`},{heading:"Gamma and Delta Codes",body:`**Elias gamma coding** — bit-level compression for even smaller representations:

Each positive integer encoded as:
1. Unary prefix: ⌊log₂(n)⌋ zeros + a 1
2. Binary suffix: remaining ⌊log₂(n)⌋ bits

| Number | ⌊log₂(n)⌋ | Unary | Suffix | γ-code | Bits |
|---|---|---|---|---|---|
| 1 | 0 | 1 | (empty) | 1 | 1 |
| 2 | 1 | 01 | 0 | 010 | 3 |
| 3 | 1 | 01 | 1 | 011 | 3 |
| 5 | 2 | 001 | 01 | 00101 | 5 |
| 13 | 3 | 0001 | 101 | 0001101 | 7 |
| 100 | 6 | 0000001 | 100100 | 0000001100100 | 13 |

**Elias delta (δ) codes:** Encode the LENGTH using gamma, then the number itself. Better for large numbers (δ beats γ when n > ~16).

**Comparison:**

| Method | gap=1 | gap=10 | gap=100 | gap=10000 | Decode Speed |
|---|---|---|---|---|---|
| Uncompressed | 32 bits | 32 | 32 | 32 | Fastest |
| VByte | 8 | 8 | 16 | 16 | Fast |
| γ-code | 1 | 7 | 13 | 27 | Moderate |
| δ-code | 1 | 8 | 12 | 22 | Moderate |

**In practice:** VByte dominates production systems because its byte-alignment makes decoding extremely fast. Gamma/delta codes are optimal in theory but slower to decode.`},{heading:"Elias-Fano Encoding",body:`**A "quasi-succinct" representation of sorted integers that approaches information-theoretic lower bounds while supporting random access.**

**How it works for n integers from universe [0, m):**
1. Split each integer into high bits (top ⌈log n⌉ bits) and low bits (remaining ⌈log(m/n)⌉ bits)
2. Store low bits concatenated: n × ⌈log(m/n)⌉ bits total
3. Store high bits using unary-coded bitvector with rank/select support

**Space bound:** 2n + n⌈log(m/n)⌉ bits — within n bits of the information-theoretic lower bound.

**Key advantage over VByte:** Supports O(1) random access (Access, NextGEQ, Predecessor operations) while VByte only supports sequential decoding.

**Used by:**
- Meta/Facebook: Folly library (compressed sets)
- Apache Lucene 8+: For very large postings lists
- Research systems: Quasi-succinct indexes

**Real-world compression (Reuters-RCV1):**

| Method | Size | Ratio |
|---|---|---|
| Uncompressed (32-bit) | 400 MB | 1.0x |
| VByte | 116 MB | 3.4x |
| γ-codes | 101 MB | 4.0x |
| Elias-Fano | ~90 MB | 4.4x |`}],questions:[{q:"Encode the gap sequence [1, 4, 11, 128] using Variable Byte encoding. How many bytes total?",a:"1 → 10000001 (1 byte, high bit set = last byte). 4 → 10000100 (1 byte). 11 → 10001011 (1 byte). 128 → needs 2 bytes: 128 = 1*128 + 0, so: 00000001 10000000 (first byte: continuation with value 1, second byte: final with value 0). Total: 5 bytes. Compare to uncompressed: 4 * 4 = 16 bytes. Compression ratio: 3.2x.",hint:"Numbers 0-127 fit in 1 byte. 128 needs 2 bytes. The high bit is the continuation flag.",check:l=>{const r=l.toLowerCase();return r.includes("5")&&(r.includes("byte")||r.includes("3.2"))}},{q:"Encode the number 13 using gamma code. How many bits does it take?",a:"Step 1: k = floor(log2(13)) = 3. Step 2: Unary prefix = 3 zeros + 1 = '0001'. Step 3: Binary suffix = 13 - 2^3 = 13 - 8 = 5 = '101' in 3 bits. Step 4: Gamma code = '0001101' = 7 bits. Formula confirms: length = 2*floor(log2(13)) + 1 = 2*3 + 1 = 7 bits. Compare to VByte which would use 8 bits (1 byte) for 13. Gamma saves 1 bit but requires bit-level decoding.",hint:"Gamma code = unary(floor(log2(n))) + binary suffix of n.",check:l=>{const r=l.toLowerCase();return r.includes("7")&&(r.includes("bit")||r.includes("0001101"))}}]},{id:"roaring",icon:"🖼",color:"#581C87",title:"Roaring Bitmaps",subtitle:"Adaptive compressed bitmaps — array, bitmap, and run containers for blazing-fast set operations",resources:[{type:"read",title:"Roaring Bitmaps — Original paper (Chambi et al., 2016)",url:"https://arxiv.org/abs/1603.06549"},{type:"read",title:"Roaring Bitmap Format Specification (GitHub)",url:"https://github.com/RoaringBitmap/RoaringFormatSpec"},{type:"video",title:"Daniel Lemire — Roaring Bitmaps",url:"https://www.youtube.com/watch?v=ubykHUyNi_0"},{type:"read",title:"Apache Lucene — Roaring DocIdSet",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/util/RoaringDocIdSet.html"}],content:[{heading:"Adaptive Container Architecture",body:`**Roaring Bitmaps** divide the 32-bit integer space into chunks of 2^16 (65,536) values. Each chunk uses the best container type for its data density.

**Architecture:**
- Top 16 bits = chunk key
- Bottom 16 bits = value within chunk
- Each chunk independently chooses a container type

**Three container types:**

| Container | Used When | Storage |
|---|---|---|
| **Array** | < 4,096 values in chunk | Sorted array of 16-bit values |
| **Bitmap** | ≥ 4,096 values in chunk | 8,192 bytes (2^16 bits) fixed |
| **Run** | Many consecutive values | Pairs of (start, length) |

**Why 4,096?** It's the crossover point: 4,096 × 2 bytes = 8,192 bytes = size of a full bitmap container. Below this, arrays are smaller; above, bitmaps are.

**This adaptive approach means Roaring Bitmaps are near-optimal for ANY data distribution** — sparse data uses arrays, dense data uses bitmaps, sequential data uses runs.`},{heading:"Operations on Containers",body:`**Set operations (intersection, union) are specialized for each container pair:**

| Operation | Array ∩ Array | Bitmap ∩ Bitmap | Array ∩ Bitmap |
|---|---|---|---|
| Intersection | Galloping search O(n log m) | Bitwise AND O(1) per word | Lookup each array element O(n) |
| Union | Merge O(n + m) | Bitwise OR O(1) per word | Set bits for elements O(n) |

**Bitmap-Bitmap operations are incredibly fast:** A 64-bit AND/OR processes 64 values in a single CPU instruction. An 8,192-byte bitmap = 128 64-bit words → 128 instructions for the entire chunk.

**Container type can change after operations:**
- Union of two sparse arrays might produce > 4,096 values → convert to bitmap
- Intersection of two bitmaps might produce < 4,096 values → convert to array`},{heading:"Performance and Real-World Usage",body:`**Benchmarks show Roaring Bitmaps vastly outperform alternatives:**

| Operation | Roaring | Java BitSet | Ratio |
|---|---|---|---|
| Intersection | 824K ops/s | 3.5K ops/s | 235x |
| Union | 512K ops/s | 2.8K ops/s | 183x |
| Serialization | 2-10x smaller | Baseline | — |

**Real-world usage:**
- **Apache Lucene/Elasticsearch:** Filter caches and doc value sets
- **Apache Druid:** Bitmap indexes for OLAP queries
- **Apache Spark:** Bloom filter alternative
- **Git:** Commit graph reachability bitmaps
- **Pilosa:** Entire database built on Roaring Bitmaps

**Why Roaring beats traditional compressed bitmaps (WAH, EWAH, Concise):**
1. Random access is O(1) — can check membership without decompressing
2. Operations don't require full decompression
3. Adaptive containers handle all data densities well
4. Cache-friendly — containers fit in L1/L2 cache
5. SIMD-accelerated on modern CPUs`}],questions:[{q:"A Roaring Bitmap chunk contains exactly 4,096 values. Should it use an array container or a bitmap container? What if it contains 4,095 values? 4,097?",a:"At exactly 4,096 values: both are the same size (4,096 * 2 bytes = 8,192 bytes = bitmap size), so either works. Roaring typically uses bitmap at the crossover point because bitmap operations (bitwise AND/OR) are faster than array operations (merge/galloping search). At 4,095 values: array container (4,095 * 2 = 8,190 bytes < 8,192 bytes bitmap). At 4,097 values: bitmap container (4,097 * 2 = 8,194 bytes > 8,192 bytes bitmap). The crossover at 4,096 is the key design insight — it's the point where the array representation becomes larger than a fixed-size bitmap, so switching to bitmap saves space.",hint:"Array cost = n * 2 bytes. Bitmap cost = 8,192 bytes fixed. At what n are they equal?",check:l=>{const r=l.toLowerCase();return r.includes("4096")&&(r.includes("crossover")||r.includes("equal")||r.includes("same size")||r.includes("8192"))}}]}];function kh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:"✓ Check"}),i.jsx("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsx("span",{children:"📖 Answer"}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Sh({embedded:l=!1}){const[r,x]=z.useState(null),[$,L]=z.useState(null),[F,_]=z.useState(new Set),[v,M]=z.useState({}),j=Ar.reduce((h,k)=>h+k.content.length,0),q=Math.round(F.size/j*100),T=h=>h.split(/\*\*(.*?)\*\*/g).map((c,m)=>m%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:c},m):i.jsx("span",{children:c},m)),p=h=>{const k=h.split(`
`),c=[];let m=0;for(;m<k.length;){const C=k[m];if(C.trim().startsWith("|")&&C.trim().endsWith("|")){const u=[];for(;m<k.length&&k[m].trim().startsWith("|")&&k[m].trim().endsWith("|");)u.push(k[m]),m++;const f=y=>y.split("|").slice(1,-1).map(N=>N.trim()),b=f(u[0]),A=u.findIndex(y=>/^\|[\s\-:|]+\|$/.test(y.trim())),D=A>=0?A+1:1,R=u.slice(D).filter(y=>!/^\|[\s\-:|]+\|$/.test(y.trim()));c.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((y,N)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:T(y)},N))})}),i.jsx("tbody",{children:R.map((y,N)=>{const V=f(y);return i.jsx("tr",{style:{background:N%2===0?"#fff":"#fafaf8"},children:V.map((re,fe)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:T(re)},fe))},N)})})]})},`t${c.length}`))}else C===""?c.push(i.jsx("div",{style:{height:8}},`e${m}`)):c.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:T(C)},`p${m}`)),m++}return c};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#2563EB!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"INFORMATION RETRIEVAL"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Index Construction & Compression"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Building and compressing indexes at scale — from single-machine algorithms to distributed MapReduce, with VByte, gamma codes, and Roaring Bitmaps.",i.jsx("br",{}),Ar.length," sections · ",j," concepts · ",Ar.reduce((h,k)=>{var c;return h+(((c=k.questions)==null?void 0:c.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #DC2626, #7C3AED, #059669, #D97706, #2563EB, #581C87)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[F.size,"/",j]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ar.map(h=>{var u;const k=r===h.id,c=h.content.map((f,b)=>`${h.id}-${b}`),m=c.filter(f=>F.has(f)).length,C=v[h.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>x(k?null:h.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:h.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:h.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:h.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:h.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",h.content.length]}),i.jsx("span",{className:"ar",style:{transform:k?"rotate(90deg)":"rotate(0)"},children:"›"})]}),k&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsx("button",{className:`tb ${C==="learn"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"learn"})),children:"📖 Learn"}),i.jsxs("button",{className:`tb ${C==="practice"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"practice"})),children:["✏️ Practice (",((u=h.questions)==null?void 0:u.length)||0,")"]}),i.jsxs("button",{className:`tb ${C==="deeper"?"a":""}`,onClick:()=>M(f=>({...f,[h.id]:"deeper"})),children:["🔗 Go Deeper (",h.resources.length,")"]})]}),C==="learn"&&i.jsx("div",{children:h.content.map((f,b)=>{const A=`${h.id}-${b}`,D=$===A,R=F.has(A);return i.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>L(D?null:A),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${R?"d":""}`,onClick:y=>{y.stopPropagation();const N=new Set(F);N.has(A)?N.delete(A):N.add(A),_(N)},children:R&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:f.heading}),i.jsx("span",{className:"ar",style:{transform:D?"rotate(90deg)":"rotate(0)"},children:"›"})]}),D&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${h.color}20`,marginLeft:22},children:p(f.body)})]},b)})}),C==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(h.questions||[]).map((f,b)=>i.jsx(kh,{...f,color:h.color},`${h.id}-q-${b}`))]}),C==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:h.resources.map((f,b)=>{const A=xh[f.type];return i.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:A.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:A.bg,color:A.color},children:[A.emoji," ",A.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:f.title})]},b)})})]})]})]},h.id)})}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"BSBI → SPIMI → MapReduce → Dynamic indexing → Dictionary compression → Postings compression → Roaring Bitmaps"})]})}const Yc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Lr=[{id:"tf",icon:"🔢",color:"#C2410C",title:"Term Frequency (TF)",subtitle:"Measuring how often a term appears in a document and why raw counts mislead",resources:[{type:"read",title:"Manning, Raghavan, Schutze -- Introduction to Information Retrieval, Ch. 6",url:"https://nlp.stanford.edu/IR-book/html/htmledition/term-frequency-and-weighting-1.html"},{type:"read",title:"Wikipedia -- Tf-idf",url:"https://en.wikipedia.org/wiki/Tf%E2%80%93idf"},{type:"video",title:"Stanford CS276 -- Scoring, Term Weighting & the Vector Space Model",url:"https://www.youtube.com/watch?v=b6I2FdQm5aQ"},{type:"read",title:"scikit-learn -- TfidfVectorizer documentation",url:"https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html"}],content:[{heading:"Raw Term Frequency",body:`**Raw term frequency** is the simplest relevance signal: how many times does term *t* appear in document *d*?

tf(t, d) = f(t, d)    # the raw count

**Problem**: A document mentioning "cat" 100 times is not 100x more relevant than one mentioning it once. Relevance does **not** scale linearly with frequency.

Real example: a Wikipedia article about "Python" might mention the word 200 times, but a focused tutorial mentioning it 15 times could be far more useful for a search query.`},{heading:"Log-Frequency Weighting",body:`To dampen the effect of very high term counts, we apply **logarithmic scaling**:

tf_log(t, d) = 1 + log10(f(t, d))    if f(t, d) > 0
             = 0                       if f(t, d) = 0

**Worked example** -- how raw counts compress:

| Raw count f(t,d) | log10(f) | tf_log = 1 + log10(f) |
|--:|--:|--:|
| 0 | -- | 0 |
| 1 | 0 | 1.000 |
| 2 | 0.301 | 1.301 |
| 10 | 1.000 | 2.000 |
| 100 | 2.000 | 3.000 |
| 1000 | 3.000 | 4.000 |

A document with 1000 occurrences scores only **4x** a document with 1 occurrence -- not 1000x. This is the key insight behind log-frequency weighting.`},{heading:"TF Variants Comparison",body:`Several TF formulas exist, each with different tradeoffs:

| Variant | Formula | Notes |
|---|---|---|
| **Raw** | f(t,d) | Simplest, biased toward long docs |
| **Log-normalized** | 1 + log(f(t,d)) | Most common in practice |
| **Augmented (double 0.5)** | 0.5 + 0.5 * f(t,d) / max_t' f(t',d) | Normalizes within document |
| **Boolean** | 1 if f(t,d) > 0 else 0 | Binary presence/absence |
| **Log-average** | (1 + log(f(t,d))) / (1 + log(avg(f(t',d)))) | Normalized by average TF |

**Augmented TF** divides by the maximum term frequency in the document. This prevents bias toward long documents where all terms have higher raw counts. It was used in the classic SMART system at Cornell.

**Boolean TF** throws away all frequency information -- it only asks "is the term present?" This is the simplest model but loses valuable signal.`},{heading:"Why Log Weighting Matters in Practice",body:`**Spam resistance**: Without log weighting, a spammer can boost their document's score by repeating a keyword thousands of times. Log weighting limits this advantage.

**Document length fairness**: Long documents naturally accumulate higher raw TF scores. Log weighting compresses these differences:
- 50-word abstract with tf=3 scores 1.477
- 5000-word article with tf=30 scores 2.477
- Ratio: 1.68x instead of 10x

**Modern search engines** (Elasticsearch, Solr, Lucene) all use log-based TF internally as part of their default BM25 scoring. The principle of diminishing returns from repeated term occurrence is fundamental to ranking.`}],questions:[{q:"A document contains the term 'neural' 25 times. Compute the log-frequency weighted TF using log base 10.",a:"tf_log = 1 + log10(25) = 1 + 1.398 = 2.398. Despite appearing 25 times, the weighted score is only about 2.4x a single occurrence, not 25x.",hint:"Remember: tf_log = 1 + log10(f) when f > 0.",check:l=>{const r=l.toLowerCase();return r.includes("2.39")||r.includes("2.40")||r.includes("2.4")}},{q:"Why does raw term frequency unfairly favor long documents? Give a concrete example.",a:"Long documents have more words, so terms naturally appear more often by chance. For example, a 10,000-word survey paper might mention 'machine learning' 50 times just because it covers the topic broadly, while a focused 500-word tutorial mentions it 5 times but is entirely about ML. Raw TF would score the survey 10x higher (50 vs 5), even though the tutorial may be more relevant. Log weighting reduces this to 2.70 vs 1.70 -- much fairer.",hint:"Think about what happens as documents get longer -- do term counts go up even if relevance stays the same?",check:l=>{const r=l.toLowerCase();return(r.includes("long")||r.includes("length"))&&(r.includes("more")||r.includes("higher")||r.includes("natural"))}}]},{id:"idf",icon:"🌍",color:"#7C3AED",title:"Inverse Document Frequency (IDF)",subtitle:"Measuring the discriminative power of terms across the entire collection",resources:[{type:"read",title:"Manning et al. -- Inverse Document Frequency (IIR Ch. 6.2)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/inverse-document-frequency-1.html"},{type:"read",title:"Karen Sparck Jones -- A Statistical Interpretation of Term Specificity (1972, seminal paper)",url:"https://doi.org/10.1108/eb026526"},{type:"video",title:"Victor Lavrenko -- IDF explained",url:"https://www.youtube.com/watch?v=4vT4fzjkGCQ"},{type:"read",title:"Wikipedia -- Inverse document frequency",url:"https://en.wikipedia.org/wiki/Tf%E2%80%93idf#Inverse_document_frequency"}],content:[{heading:"IDF Intuition",body:`Not all terms are equally useful for distinguishing documents. **Common terms** like "the", "is", "and" appear in nearly every document and carry almost no discriminative power. **Rare terms** like "mitochondria" or "quaternion" appear in few documents and are powerful signals of relevance.

IDF quantifies this intuition: **rare terms get high weight, common terms get low weight**.

Think of it as the "surprisingness" of seeing a term. Seeing "the" in a document is boring (IDF near 0). Seeing "PageRank" is exciting (IDF = 4.0 in a 1M-doc collection).`},{heading:"IDF Formula and Worked Example",body:`**Formula**:

idf(t) = log10(N / df(t))

Where **N** = total documents in the collection, **df(t)** = number of documents containing term *t*.

**Worked example** (N = 1,000,000 documents):

| Term | df(t) | N/df(t) | idf = log10(N/df) |
|---|--:|--:|--:|
| "the" | 999,000 | 1.001 | 0.000 |
| "computer" | 100,000 | 10 | 1.000 |
| "algorithm" | 10,000 | 100 | 2.000 |
| "PageRank" | 100 | 10,000 | 4.000 |
| "xylophone" | 10 | 100,000 | 5.000 |

**Key observations**: Terms in ALL documents have IDF near 0 (useless discriminators). Rare terms have high IDF (powerful discriminators). IDF is computed **once per term per collection** -- it is a collection-level statistic, not document-level.`},{heading:"IDF Variants",body:`Several IDF formulas exist for different use cases:

| Variant | Formula | Use Case |
|---|---|---|
| **Standard** | log(N / df(t)) | Classic Manning et al. |
| **Smooth** | log(N / (1 + df(t))) + 1 | Avoids zero; used in scikit-learn |
| **Probabilistic** | log((N - df(t)) / df(t)) | Foundation for BM25 IDF |
| **Max-based** | log(max_t' df(t') / df(t)) | Relative to most common term |

The **probabilistic variant** is particularly important because it forms the basis of BM25's IDF component. It can go negative for terms appearing in more than half the collection, which some implementations handle by clamping to zero.

**scikit-learn's smooth IDF** adds 1 to the denominator (avoiding division by zero for unknown terms) and adds 1 to the result (ensuring no term gets zero IDF).`},{heading:"IDF as Information Content",body:`IDF has a deep connection to **information theory**. The self-information (surprisal) of an event with probability p is:

I(p) = -log(p) = log(1/p)

If we estimate the probability of a term appearing in a random document as P(t) = df(t)/N, then:

I(t) = log(N / df(t)) = idf(t)

**IDF is literally the information content of a term** in the Shannon sense. High-IDF terms carry more bits of information -- they tell you more about which document you are looking at.

Karen Sparck Jones first proposed this weighting in 1972, making it one of the most enduring ideas in information retrieval.`}],questions:[{q:"In a collection of N = 50,000 documents, the term 'neural' appears in 200 documents. Compute the IDF using log base 10.",a:"idf('neural') = log10(50000 / 200) = log10(250) = 2.398. This is a moderately discriminative term -- it appears in only 0.4% of documents.",hint:"Just divide N by df and take log base 10.",check:l=>{const r=l.toLowerCase();return r.includes("2.39")||r.includes("2.40")||r.includes("2.4")}},{q:"A term appears in every document in the collection. What is its IDF? Why does this make sense intuitively?",a:"IDF = log10(N/N) = log10(1) = 0. This makes intuitive sense because a term appearing in every document tells you nothing about which document is relevant -- it has zero discriminative power. Words like 'the' and 'is' approach this. They are effectively stop words from a ranking perspective.",hint:"What is log10(1)?",check:l=>{const r=l.toLowerCase();return r.includes("0")&&(r.includes("discriminat")||r.includes("nothing")||r.includes("useless")||r.includes("no information")||r.includes("every"))}}]},{id:"tfidf",icon:"⚖️",color:"#059669",title:"TF-IDF Formula & Examples",subtitle:"Combining local importance (TF) with global importance (IDF) into the foundational scoring formula",resources:[{type:"infographic",title:"TF-IDF Interactive Visualization",url:"https://mccormickml.com/2015/09/30/word2vec-class-notes/"},{type:"read",title:"Manning et al. -- TF-IDF Weighting (IIR Ch. 6.2.2)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/tf-idf-weighting-1.html"},{type:"video",title:"StatQuest -- TF-IDF clearly explained",url:"https://www.youtube.com/watch?v=D2V1okCEsiE"},{type:"read",title:"Elasticsearch -- Similarity module (TF-IDF to BM25)",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-similarity.html"},{type:"read",title:"Wikipedia -- Tf-idf",url:"https://en.wikipedia.org/wiki/Tf%E2%80%93idf"}],content:[{heading:"The TF-IDF Formula",body:`**TF-IDF combines term frequency (local) with inverse document frequency (global)**:

tfidf(t, d, D) = tf(t, d) * idf(t, D)

The most common production variant uses log-frequency TF:

tfidf(t, d) = (1 + log10(f(t,d))) * log10(N / df(t))    if f(t,d) > 0
            = 0                                            otherwise

**Intuition**: A term scores high when it appears frequently in THIS document (high TF) but rarely across the collection (high IDF). It scores low when it appears rarely in the document OR in many documents across the collection.`},{heading:"Worked Example",body:`**Collection**: N = 10,000 documents
**Document d**: "the cat sat on the mat the cat"

| Term | f(t,d) | tf = 1+log10(f) | df(t) | idf = log10(N/df) | TF-IDF |
|---|--:|--:|--:|--:|--:|
| the | 3 | 1.477 | 9,900 | 0.004 | 0.006 |
| cat | 2 | 1.301 | 500 | 1.301 | 1.693 |
| sat | 1 | 1.000 | 200 | 1.699 | 1.699 |
| on | 1 | 1.000 | 8,000 | 0.097 | 0.097 |
| mat | 1 | 1.000 | 50 | 2.301 | 2.301 |

**Interpretation**: "mat" has the **highest** TF-IDF (rare, informative term). "the" has near-zero TF-IDF despite appearing 3 times (too common). The formula automatically surfaces discriminative content words and suppresses function words.`},{heading:"Why TF-IDF Works",body:`Three scenarios explain the formula's behavior:

**1. High TF-IDF**: term appears many times in few documents (distinctive)
- "mitochondria" in a biology paper -- high TF, high IDF

**2. Low TF-IDF**: term appears rarely in a doc OR in many documents
- "algorithm" once in a doc about cooking -- low TF
- "the" 50 times in any document -- zero IDF

**3. Zero TF-IDF**: term absent from the document
- Any term not in the document contributes nothing

**Historical significance**: TF-IDF was the dominant scoring method from the 1970s through the 2000s. It remains competitive as a baseline and is still used in production systems (scikit-learn, early-stage retrieval pipelines, text classification).`},{heading:"Python Implementation",body:`A clean implementation showing the complete TF-IDF computation:

import math
from collections import Counter

def compute_tfidf(documents):
    N = len(documents)
    # Compute document frequencies
    df = Counter()
    for doc in documents:
        unique_terms = set(doc.split())
        for term in unique_terms:
            df[term] += 1
    # Compute TF-IDF for each document
    tfidf_docs = []
    for doc in documents:
        tf = Counter(doc.split())
        tfidf = {}
        for term, count in tf.items():
            tf_score = 1 + math.log10(count)
            idf_score = math.log10(N / df[term])
            tfidf[term] = tf_score * idf_score
        tfidf_docs.append(tfidf)
    return tfidf_docs

This takes a list of documents (strings), computes document frequencies globally, then calculates TF-IDF for each term in each document. Note how df is computed once for the entire collection, while tf is computed per-document.`}],questions:[{q:"Given N = 50,000, a document where 'neural' appears 8 times, and df('neural') = 200, compute the TF-IDF score using log base 10.",a:"tf = 1 + log10(8) = 1 + 0.903 = 1.903. idf = log10(50000/200) = log10(250) = 2.398. TF-IDF = 1.903 * 2.398 = 4.561. This is a high TF-IDF score, indicating 'neural' is both frequent in this document and rare in the collection.",hint:"Compute TF and IDF separately, then multiply.",check:l=>{const r=l.toLowerCase();return r.includes("4.56")||r.includes("4.5")}},{q:"Why does 'the' get a near-zero TF-IDF even when it appears many times in a document?",a:"Because 'the' appears in virtually every document in the collection, its IDF is nearly zero: idf = log10(N/df) where df is close to N, so N/df approaches 1 and log10(1) = 0. No matter how high the TF component is, multiplying by near-zero IDF gives near-zero TF-IDF. This is exactly the intended behavior -- common function words should not influence ranking.",hint:"Think about the IDF component. What happens when df(t) approaches N?",check:l=>{const r=l.toLowerCase();return(r.includes("idf")||r.includes("inverse"))&&(r.includes("zero")||r.includes("every")||r.includes("common")||r.includes("all doc"))}}]},{id:"vsm",icon:"📐",color:"#2563EB",title:"Vector Space Model & Cosine Similarity",subtitle:"Representing documents and queries as vectors, measuring similarity by angle rather than distance",resources:[{type:"read",title:"Manning et al. -- The Vector Space Model (IIR Ch. 6.3-6.4)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/the-vector-space-model-for-scoring-1.html"},{type:"read",title:"Wikipedia -- Cosine Similarity",url:"https://en.wikipedia.org/wiki/Cosine_similarity"},{type:"video",title:"3Blue1Brown -- Dot Products and Duality",url:"https://www.youtube.com/watch?v=LyGKycYT2v0"},{type:"read",title:"Gerard Salton -- The SMART Retrieval System (historical context)",url:"https://en.wikipedia.org/wiki/SMART_Information_Retrieval_System"},{type:"video",title:"Victor Lavrenko -- Cosine Similarity",url:"https://www.youtube.com/watch?v=JtW_eTqyY-E"}],content:[{heading:"Documents as Vectors",body:`**Core idea**: Represent every document and every query as a vector in a high-dimensional space. Each dimension corresponds to a term in the vocabulary.

Vocabulary = {t1, t2, ..., t_M}    (M unique terms)

Document d -> d_vec = [w(t1,d), w(t2,d), ..., w(t_M,d)]
Query    q -> q_vec = [w(t1,q), w(t2,q), ..., w(t_M,q)]

Where w(t,d) is typically the **TF-IDF weight** of term t in document d.

**Example** (vocabulary: {cat, dog, fish}):

|  | cat | dog | fish |
|--|--:|--:|--:|
| d1 = "cat dog cat" | 1.301 | 1.000 | 0 |
| d2 = "fish fish dog" | 0 | 1.000 | 1.301 |
| q = "cat fish" | 1.000 | 0 | 1.000 |

Documents and queries become **points** (or arrows from the origin) in this 3D space. Similar documents point in similar directions.`},{heading:"Properties of the Vector Space",body:`**Dimension**: |V| (vocabulary size) -- can be 100K to 1M+ for real collections. The Google web index vocabulary is estimated at billions of unique terms.

**Sparsity**: Most entries are zero. A typical document uses only a tiny fraction of all vocabulary terms. A 500-word document might use 200 unique terms out of a 500K vocabulary -- that is 99.96% zeros.

**No word order**: "cat sat on mat" and "mat on sat cat" produce **identical vectors**. This is the **bag-of-words assumption** -- we lose all positional information. This is a fundamental limitation of the VSM that neural models later addressed.

**Curse of dimensionality**: In very high dimensions, distances between points become less meaningful. However, because vectors are sparse, similarity computations remain efficient.`},{heading:"Why Not Euclidean Distance?",body:`**Euclidean distance is biased by document length**. A long document about cats (with high TF values) would be far from a short cat-related query, even if both are about the same topic.

**Concrete example**:
- Document A (1000 words about cats): TF-IDF = [5, 0, 3]
- Document B (100 words about cats): TF-IDF = [2, 0, 1.2]
- Query about cats: q = [1, 0, 0.6]

Euclidean distance to A: sqrt((5-1)^2 + (3-0.6)^2) = sqrt(16 + 5.76) = 4.67
Euclidean distance to B: sqrt((2-1)^2 + (1.2-0.6)^2) = sqrt(1 + 0.36) = 1.17

B appears "closer" by Euclidean distance. But both documents have **identical term distributions** (same ratio of cat-to-other terms). We want a measure of **direction**, not magnitude -- that is cosine similarity.`},{heading:"Cosine Similarity Formula and Example",body:`**Formula**:

cos(d, q) = (d . q) / (||d|| * ||q||)
           = sum(di * qi) / (sqrt(sum(di^2)) * sqrt(sum(qi^2)))

**Range**: [0, 1] for non-negative TF-IDF weights.
- cos = 1: vectors point in the same direction (identical term distribution)
- cos = 0: vectors are orthogonal (no terms in common)

**Worked example**:

d1 = [2, 1, 0, 3]     (TF-IDF weights for 4 terms)
q  = [1, 0, 0, 2]

Dot product: 2*1 + 1*0 + 0*0 + 3*2 = 8
||d1|| = sqrt(4 + 1 + 0 + 9) = sqrt(14) = 3.742
||q||  = sqrt(1 + 0 + 0 + 4) = sqrt(5)  = 2.236

cos(d1, q) = 8 / (3.742 * 2.236) = 8 / 8.367 = **0.956**

High similarity! The document and query align well in the vector space.`},{heading:"Document Length Normalization",body:`**The problem**: Longer documents naturally accumulate higher term frequencies. Without normalization, long documents are unfairly favored.

**Cosine normalization** (dividing by L2 norms) is one approach, but it can **over-penalize** long documents that are genuinely more relevant because they cover a topic comprehensively.

**Pivoted length normalization** (Singhal et al., 1996) introduces a pivot point:

normalization = 1 - s + s * (dl / avgdl)

Where s is a slope parameter (0 to 1), dl is the document length, and avgdl is the average document length. Documents shorter than the pivot get boosted; documents longer get penalized. The slope s is tuned on a development set (common value: 0.2 to 0.75).

This idea of length normalization relative to the collection average directly influenced BM25's design.`}],questions:[{q:"Compute the cosine similarity between d = [3, 0, 4] and q = [1, 2, 0].",a:"Dot product: 3*1 + 0*2 + 4*0 = 3. ||d|| = sqrt(9+0+16) = sqrt(25) = 5. ||q|| = sqrt(1+4+0) = sqrt(5) = 2.236. Cosine = 3/(5*2.236) = 3/11.18 = 0.268. Low similarity -- the vectors share only one non-zero dimension.",hint:"Compute the dot product, then divide by the product of the two magnitudes.",check:l=>{const r=l.toLowerCase();return r.includes("0.268")||r.includes("0.27")||r.includes(".268")}},{q:"Why is cosine similarity preferred over Euclidean distance for document retrieval?",a:"Cosine similarity measures the angle between vectors (direction), not the distance between their endpoints (magnitude). Two documents about the same topic but of different lengths point in the same direction but have different magnitudes. Cosine similarity correctly identifies them as similar (cos near 1), while Euclidean distance incorrectly shows them as far apart. Length-invariance is crucial because relevance depends on topic distribution, not document length.",hint:"Think about what happens when you double all the weights in a vector -- does the topic change?",check:l=>{const r=l.toLowerCase();return(r.includes("angle")||r.includes("direction"))&&(r.includes("length")||r.includes("magnitude"))}}]},{id:"bm25",icon:"🎯",color:"#DC2626",title:"BM25 (Best Matching 25)",subtitle:"The most important classical scoring function -- formula, parameters k1/b, saturation, and why it replaced TF-IDF",resources:[{type:"read",title:"Wikipedia -- Okapi BM25",url:"https://en.wikipedia.org/wiki/Okapi_BM25"},{type:"read",title:"Elasticsearch -- Practical BM25 (picking b and k1)",url:"https://www.elastic.co/blog/practical-bm25-part-3-considerations-for-picking-b-and-k1-in-elasticsearch"},{type:"video",title:"Victor Lavrenko -- BM25 explained step by step",url:"https://www.youtube.com/watch?v=a3sg6MH8m4k"},{type:"read",title:"Manning et al. -- Okapi BM25 (IIR Ch. 11.4.3)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/okapi-bm25-a-non-binary-model-1.html"},{type:"read",title:"Robertson & Zaragoza -- The Probabilistic Relevance Framework: BM25 and Beyond",url:"https://www.staff.city.ac.uk/~sbrp622/papers/foundations_bm25_review.pdf"}],content:[{heading:"The BM25 Formula",body:`BM25 was developed by Stephen Robertson and Karen Sparck Jones at City University London. It is the **default scoring function** in Elasticsearch, Lucene, Solr, and most production search engines.

**Full formula**:

score(D, Q) = sum over t in Q of: IDF(t) * [f(t,D) * (k1 + 1)] / [f(t,D) + k1 * (1 - b + b * |D|/avgdl)]

**IDF component** (Robertson-Sparck Jones):

IDF(t) = ln[(N - df(t) + 0.5) / (df(t) + 0.5) + 1]

**TF saturation component**:

TF_sat = f(t,D) * (k1 + 1) / (f(t,D) + k1 * B)

Where B = 1 - b + b * |D|/avgdl is the length normalization factor.`},{heading:"Parameters k1 and b",body:`BM25 has two tunable parameters:

| Parameter | Typical Value | Effect |
|---|:---:|---|
| **k1** | 1.2 - 2.0 | Controls TF saturation speed. Higher k1 = slower saturation (more credit for repeated terms). At k1=0, BM25 reduces to IDF-only (binary). As k1 -> infinity, approaches raw TF. |
| **b** | 0.75 | Controls document length normalization. b=0: no length norm. b=1: full normalization relative to avgdl. |

**Intuition for k1**: Think of k1 as "how much do repeated mentions matter?" For k1=0, only presence matters. For k1=2.0, the 10th mention still adds meaningful score. For typical text search, k1=1.2 is the sweet spot.

**Intuition for b**: Think of b as "how much should we penalize long documents?" For encyclopedic collections where length varies widely (Wikipedia), b=0.75 works well. For collections with uniform document length (tweets), b closer to 0 is better.`},{heading:"Saturation Effect -- Why BM25 Beats TF-IDF",body:`The critical innovation of BM25 is **TF saturation**. In standard TF-IDF, doubling term frequency always increases the score. In BM25, the contribution **asymptotically approaches a ceiling**:

With k1 = 1.2 and B = 1 (average-length doc):

f = 1   -> TF_sat = 1.00
f = 2   -> TF_sat = 1.38
f = 5   -> TF_sat = 1.77
f = 10  -> TF_sat = 1.96
f = 100 -> TF_sat = 2.17
f = inf -> TF_sat = k1 + 1 = 2.20 (ceiling)

The **100th occurrence** of a term adds almost nothing! This makes BM25 robust against:
- **Term spam**: repeating a keyword cannot inflate scores indefinitely
- **Length bias**: even in very long documents, a term's contribution is bounded
- **Outlier documents**: a document with tf=1000 scores only slightly above tf=10`},{heading:"Worked Example",body:`**Collection**: N = 100,000, avgdl = 200 words
**Document D**: |D| = 250 words
**Query**: "information retrieval"

B = 1 - 0.75 + 0.75 * (250/200) = 0.25 + 0.9375 = 1.1875

| Term | f(t,D) | df(t) | IDF | B | TF_sat | Score |
|---|--:|--:|--:|--:|--:|--:|
| information | 5 | 40,000 | 0.598 | 1.188 | 1.596 | 0.955 |
| retrieval | 3 | 5,000 | 2.367 | 1.188 | 1.327 | 3.141 |
| **Total** | | | | | | **4.096** |

"retrieval" contributes 77% of the score because it has much higher IDF (rarer term). Even though "information" appears more often in the document, its prevalence in the collection diminishes its impact.`},{heading:"BM25 vs TF-IDF Comparison",body:`| Aspect | TF-IDF | BM25 |
|---|---|---|
| TF treatment | Unbounded (log or linear) | Saturating (bounded by k1+1) |
| Length normalization | Cosine or ad-hoc | Built-in via parameter b |
| Theoretical basis | Heuristic | Probabilistic (derived from BIM) |
| Robustness | Susceptible to term spam | Robust due to saturation |
| Parameter tuning | Few knobs | k1 and b allow fine-tuning |
| Production adoption | Historical | Default in Elasticsearch, Solr, Lucene |

**Why BM25 won**: It produces consistently better rankings across diverse collections, is robust to edge cases, and has a principled probabilistic derivation. The two parameters (k1, b) provide just enough flexibility without overfitting risk. Every major search engine has adopted it as the default.`}],questions:[{q:"What happens to BM25 scoring when k1 = 0? What about when b = 0?",a:"(a) k1=0: The TF component becomes f(t,D)*1/(f(t,D)+0) = 1 for all non-zero frequencies. BM25 reduces to IDF-only scoring -- binary model where only presence/absence matters. (b) b=0: B = 1 regardless of document length. No length normalization -- all documents are treated as if they have average length. Long and short documents get the same treatment.",hint:"Substitute k1=0 and b=0 into the formula and simplify.",check:l=>{const r=l.toLowerCase();return(r.includes("idf")||r.includes("binary")||r.includes("presence"))&&(r.includes("length")||r.includes("normali"))}},{q:"A document has 300 words in a collection with avgdl = 200. With k1 = 1.2 and b = 0.75, compute the BM25 length normalization factor B.",a:"B = 1 - b + b*(|D|/avgdl) = 1 - 0.75 + 0.75*(300/200) = 0.25 + 0.75*1.5 = 0.25 + 1.125 = 1.375. Since B > 1, this document is longer than average, so its effective TF will be reduced (penalized for being long).",hint:"B = 1 - b + b * (dl / avgdl). Just plug in the values.",check:l=>{const r=l.toLowerCase();return r.includes("1.375")||r.includes("1.38")}}]},{id:"bm25f",icon:"📝",color:"#0891B2",title:"BM25F & Field Weighting",subtitle:"Extending BM25 to handle structured documents with title, body, URL, and anchor text fields",resources:[{type:"read",title:"Robertson et al. -- Simple BM25 Extension to Multiple Weighted Fields",url:"https://trec.nist.gov/pubs/trec13/papers/microsoft-cambridge.web.hard.pdf"},{type:"read",title:"Elasticsearch -- Multi-field queries and boosting",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-multi-match-query.html"},{type:"video",title:"Doug Turnbull -- Field-level scoring in Elasticsearch",url:"https://www.youtube.com/watch?v=MqR8s5ObcMc"},{type:"read",title:"Wikipedia -- BM25F",url:"https://en.wikipedia.org/wiki/Okapi_BM25#BM25F"}],content:[{heading:"Why Fields Matter",body:`Real documents have **structure**: title, body, URL, anchor text, headings. A term match in the title is far more meaningful than the same term buried in the body.

Standard BM25 treats documents as flat bags of words, losing this structural signal. **BM25F** extends BM25 to weight fields differently.

**Example**: For the query "python tutorial":
- A page titled "Python Tutorial for Beginners" with "python" once in the title
- A page with "python" mentioned 50 times in the body but not in the title

The first page is almost certainly more relevant. BM25F captures this by boosting title matches.`},{heading:"BM25F Formula",body:`**Step 1** -- Compute a weighted pseudo-term-frequency across fields:

tf_tilde(t, D) = sum over f in fields of: wf * tf(t, D_f) / B_f

Where:
- **wf** = boost weight for field f (e.g., title=5, body=1)
- **tf(t, D_f)** = term frequency in field f
- **B_f = 1 - b_f + b_f * |D_f| / avgdl_f** = per-field length normalization

**Step 2** -- Plug tf_tilde into BM25:

score_BM25F(D, Q) = sum over t in Q of: IDF(t) * [tf_tilde(t,D) * (k1+1)] / [tf_tilde(t,D) + k1]

Note: no outer B normalization -- it is already applied per-field inside tf_tilde.`},{heading:"Typical Field Weights",body:`| Field | Typical Boost (wf) | Rationale |
|---|:---:|---|
| Title | 5-10 | Highly descriptive of content |
| Body | 1 | Baseline |
| URL | 2-3 | Contains topical keywords |
| Anchor text | 3-5 | External description by linkers |
| H1/H2 headings | 3-4 | Structural importance signals |

**Anchor text** is particularly powerful because it represents how **other people** describe the page. If 100 pages link to a page with anchor text "Python tutorial", that is strong evidence the page is indeed a Python tutorial.

These weights are typically tuned using **learning-to-rank** methods on click-through data in production systems.`},{heading:"BM25F Worked Example",body:`**Query**: "python tutorial"
**Document fields**:
- Title: "Python Tutorial for Beginners" (title_tf("python")=1, title_tf("tutorial")=1)
- Body: 500 words, body_tf("python")=8, body_tf("tutorial")=3

With wt_title=5, wt_body=1, and assuming B_title=1, B_body=1:

tf_tilde("python")  = 5 * 1/1 + 1 * 8/1 = 5 + 8 = 13
tf_tilde("tutorial") = 5 * 1/1 + 1 * 3/1 = 5 + 3 = 8

The single title match for "python" contributes 5 out of 13 (38%) of the effective TF -- dramatically boosting this highly relevant result compared to flat BM25 which would weight the title match at only 1 out of 9 (11%).`}],questions:[{q:"In BM25F, a document has tf('search')=1 in the title (weight=5) and tf('search')=10 in the body (weight=1). What is the weighted pseudo-term-frequency, assuming all B_f = 1?",a:"tf_tilde('search') = 5*1/1 + 1*10/1 = 5 + 10 = 15. The single title match contributes one-third (5/15) of the total effective TF, despite appearing only once vs 10 times in the body.",hint:"Multiply each field's TF by its boost weight and sum.",check:l=>l.toLowerCase().includes("15")},{q:"Why does BM25F apply length normalization per-field rather than globally?",a:"Because fields have very different typical lengths. A title might average 8 words while a body averages 500 words. A title with 20 words is unusually long (should be penalized), but a body with 20 words is very short (should not be penalized the same way). Per-field normalization using each field's own avgdl ensures fair comparison within each field type. Global normalization would conflate these very different distributions.",hint:"Think about the typical length of a title vs the typical length of a body.",check:l=>{const r=l.toLowerCase();return(r.includes("different")||r.includes("vary"))&&(r.includes("length")||r.includes("title")||r.includes("body"))}}]},{id:"champion",icon:"🏆",color:"#9333EA",title:"Champion Lists & WAND/BlockMaxWAND",subtitle:"Index-time and query-time optimizations for fast top-k retrieval without exhaustive scoring",resources:[{type:"read",title:"Vespa -- WAND Algorithm documentation",url:"https://docs.vespa.ai/en/ranking/wand.html"},{type:"read",title:"Elasticsearch -- Faster Retrieval with BlockMaxWAND",url:"https://www.elastic.co/blog/faster-retrieval-of-top-hits-in-elasticsearch-with-block-max-wand"},{type:"read",title:"Manning et al. -- Champion Lists (IIR Ch. 7.1)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/champion-lists-1.html"},{type:"video",title:"Stanford CS276 -- Efficient Scoring and Ranking",url:"https://www.youtube.com/watch?v=PB5YjGwuCJ4"},{type:"read",title:"Broder et al. -- Efficient Query Evaluation using a Two-Level Retrieval Process (WAND paper)",url:"https://dl.acm.org/doi/10.1145/956863.956944"}],content:[{heading:"Champion Lists (Top-Docs Lists)",body:`**Idea**: For each term t in the index, precompute and store only the **top-r documents** by TF-IDF weight. These are the "champions" for that term.

**Process**:
1. At **index time**: for each term, sort its posting list by weight, keep only the top r entries
2. At **query time**: only consider documents in the champion lists of query terms
3. Merge champion lists across query terms; score only those candidates

**Parameters**: r = champion list size (typically r >> k, where k = desired result count). Must set r large enough to avoid missing relevant documents.

**Example**: Query "machine learning" with k=10 results wanted:
- Champion list for "machine": 100 docs
- Champion list for "learning": 100 docs
- 20 docs appear in both lists
- Candidate set: 100 + 100 - 20 = **180 documents** (instead of millions)`},{heading:"Impact-Ordered Postings",body:`**Standard postings**: sorted by document ID -- enables efficient merging but no early termination.

**Impact-ordered postings**: sorted by **decreasing impact score** (TF contribution) within each term's posting list.

Standard posting for "cat":    [doc1:3, doc5:1, doc8:7, doc12:2]  (by docID)
Impact-ordered for "cat":      [doc8:7, doc1:3, doc12:2, doc5:1]  (by score, desc)

**Advantage**: Process high-impact entries first and stop early when remaining entries **cannot** affect the top-k results.

If the current threshold is 5.0, we can skip doc12 (score=2) and doc5 (score=1) since their contributions cannot exceed the threshold. This is a form of **safe early termination** -- the results are exactly the same as exhaustive scoring.`},{heading:"WAND Algorithm (Weak AND)",body:`WAND (Broder et al., 2003) is a **dynamic pruning** algorithm for efficiently finding top-k documents.

**Key ideas**:
1. Maintain a heap of current top-k results with threshold theta (minimum score in heap)
2. For each term, precompute an **upper bound** on maximum contribution to any document
3. Sort posting list cursors by current document ID
4. **Pivot selection**: find the leftmost set of terms whose upper bounds sum > theta
5. If the pivot document's upper bound > theta, fully evaluate it; otherwise, skip ahead

**Performance**: Reduces full evaluations by **>90%** compared to exhaustive scoring, with **no loss** in result quality for top-k retrieval. It returns the exact same results as scoring every document -- just much faster.

WAND is used in production systems like Vespa, Lucene, and many large-scale search engines.`},{heading:"BlockMaxWAND",body:`BlockMaxWAND (Ding & Suel, 2011) refines WAND by computing **tighter upper bounds at the block level**.

**Key improvement**: Instead of one global max score per term, divide each posting list into fixed-size blocks (128 or 256 docs) and store the max impact score within each block.

Global UB for "cat":    max_score = 7.5
Block-level UBs:        block1: 2.1, block2: 7.5, block3: 3.2, block4: 1.8

**Why this helps**: When theta = 5.0, blocks 1, 3, and 4 can be **skipped entirely** since their max possible contribution (2.1, 3.2, 1.8) cannot exceed the threshold.

**Performance gains** (Elasticsearch/Lucene benchmarks):
- Term queries: 3-7x faster
- Conjunctions: 3-7x faster
- Disjunctions: up to **15x faster**

| Feature | Exhaustive | WAND | BlockMaxWAND |
|---|---|---|---|
| Docs evaluated | All matching | ~10% | ~2-5% |
| Upper bounds | N/A | Per-term global | Per-term per-block |
| Skip efficiency | None | Good | Excellent |
| Result quality | Exact | Exact top-k | Exact top-k |`}],questions:[{q:"A search engine uses champion lists of size r=100. Query 'machine learning' has champion lists with 100 and 100 docs respectively, with 20 in common. How many candidate documents need scoring?",a:"The union of both champion lists: 100 + 100 - 20 = 180 candidate documents. Only these 180 (out of potentially millions) need to be fully scored to produce the top-k results. This is an enormous speedup -- from millions of score computations to just 180.",hint:"Union of two sets = |A| + |B| - |A intersection B|.",check:l=>l.toLowerCase().includes("180")},{q:"Why does BM25's bounded TF saturation make WAND/BlockMaxWAND particularly effective?",a:"BM25's TF saturation means each term's contribution is bounded by k1+1 (typically 2.2). This provides a tight, known upper bound on any term's maximum contribution to a document's score. WAND and BlockMaxWAND rely on upper bounds to prune documents -- the tighter the bounds, the more aggressive the pruning. With unbounded TF (like raw TF-IDF), upper bounds would be loose, reducing pruning effectiveness. BM25's natural ceiling makes these algorithms work exceptionally well.",hint:"Think about what WAND needs to skip documents -- tight upper bounds. What does BM25 guarantee about maximum per-term score?",check:l=>{const r=l.toLowerCase();return(r.includes("bound")||r.includes("ceiling")||r.includes("saturat"))&&(r.includes("prun")||r.includes("skip")||r.includes("tight"))}}]}];function Dh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")},T=()=>M("revealed"),p=()=>{var h;M("idle"),_(""),(h=j.current)==null||h.focus()};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:i.jsx("textarea",{ref:j,value:F,onChange:h=>_(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{flex:1,minWidth:200,padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans', sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",transition:"border 0.2s"}})}),v==="wrong"&&i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#DC2626",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:14},children:"✗"})," Not quite right. Try again or reveal the answer."]}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsxs("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:600,transition:"opacity 0.2s",opacity:F.trim()?1:.4},children:["✓"," Check Answer"]}),i.jsxs("button",{onClick:T,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal Answer"]}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsxs("summary",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#aaa",cursor:"pointer",userSelect:"none"},children:["💡"," Hint"]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:16},children:"✓"})," Correct!"]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:14},children:"📖"})," Answer"]}),i.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888"},children:"Try it myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Rh({embedded:l=!1}){const[r,x]=z.useState(null),[$,L]=z.useState(null),[F,_]=z.useState(new Set),[v,M]=z.useState({}),j=Lr.reduce((c,m)=>c+m.content.length,0),q=Math.round(F.size/j*100),T=c=>L($===c?null:c),p=(c,m)=>{m.stopPropagation();const C=new Set(F);C.has(c)?C.delete(c):C.add(c),_(C)},h=c=>v[c]||"learn",k=c=>c.split(`
`).map((m,C)=>{var D,R;const u=m,f=u.startsWith("import ")||u.startsWith("from ")||u.startsWith("def ")||u.startsWith("    ")||u.startsWith("tf")||u.startsWith("idf")||u.startsWith("tfidf")||u.startsWith("score")||u.startsWith("cos")||u.startsWith("IDF")||u.startsWith("TF")||u.startsWith("B =")||u.startsWith("f =")||u.startsWith("q_")||u.startsWith("d_")||u.startsWith("norm")||u.startsWith("# ")||u.startsWith("N =")||u.startsWith("for ")||u.startsWith("return")||u.startsWith("Where")||u.startsWith("  "),b=u.startsWith("import ")||u.startsWith("from ")||u.startsWith("def ")||u.startsWith("# ")||u.startsWith("score")||u.startsWith("cos")||u.startsWith("tfidf");if(f)return i.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:b?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:b?"6px 6px 0 0":0,marginTop:b?10:0},children:u},C);if(u==="")return i.jsx("div",{style:{height:8}},C);if(u.startsWith("|")){const y=u.split("|").filter(V=>V.trim()!=="");if(y.every(V=>/^[\s-:]+$/.test(V)))return null;const N=C<c.split(`
`).length-1&&((D=c.split(`
`)[C+1])==null?void 0:D.trim().startsWith("|"))&&/^[\s|:-]+$/.test((R=c.split(`
`)[C+1])==null?void 0:R.trim());return i.jsx("div",{style:{display:"flex",gap:0,fontFamily:"'DM Sans', sans-serif",fontSize:12,borderBottom:"1px solid #E5E2D9"},children:y.map((V,re)=>{const fe=V.trim().split(/\*\*(.*?)\*\*/g);return i.jsx("div",{style:{flex:1,padding:"6px 10px",fontWeight:N?600:400,color:N?"#1a1a1a":"#444",background:N?"#FAF9F6":"transparent",minWidth:0},children:fe.map((ve,ge)=>ge%2===1?i.jsx("strong",{children:ve},ge):i.jsx("span",{children:ve},ge))},re)})},C)}const A=u.split(/\*\*(.*?)\*\*/g);return i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:A.map((y,N)=>N%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:y},N):i.jsx("span",{children:y},N))},C)});return i.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:`@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
.sec-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
.sec-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.06); }
.block-row { transition: all 0.2s ease; cursor: pointer; border-radius: 8px; }
.block-row:hover { background: rgba(0,0,0,0.02); }
.chk { width: 20px; height: 20px; border-radius: 5px; border: 2px solid #ccc; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; flex-shrink: 0; background: white; font-size: 11px; }
.chk.done { background: #059669; border-color: #059669; color: white; }
.arr { transition: transform 0.25s ease; font-size: 16px; color: #aaa; }
.pfill { transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }
.tab-btn { padding: 8px 14px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; border: none; cursor: pointer; border-radius: 6px 6px 0 0; transition: all 0.2s; white-space: nowrap; }
.tab-btn.active { background: white; color: #1a1a1a; box-shadow: 0 -2px 8px rgba(0,0,0,0.04); }
.tab-btn:not(.active) { background: transparent; color: #888; }
.tab-btn:not(.active):hover { color: #555; }
.res-link { display: flex; align-items: center; gap: 10px; padding: 9px 14px; border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; border: 1px solid transparent; }
.res-link:hover { border-color: rgba(0,0,0,0.08); transform: translateX(3px); }
.type-badge { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 500; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.4px; white-space: nowrap; }
textarea:focus { border-color: #4338CA !important; }`}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),i.jsx("h1",{style:{fontSize:"clamp(30px, 5vw, 44px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Scoring & the Vector Space Model"}),i.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:24},children:["Learn, practice, go deeper. ",Lr.length," sections ","·"," ",j," concepts ","·"," ",Lr.reduce((c,m)=>{var C;return c+(((C=m.questions)==null?void 0:C.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pfill",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #4338CA, #581C87)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[F.size,"/",j]})]}),i.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Yc).map(([c,m])=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#777"},children:[i.jsxs("span",{className:"type-badge",style:{background:m.bg,color:m.color},children:[m.emoji," ",m.label]}),c==="infographic"&&"— Primary",c==="read"&&"— Secondary",c==="video"&&"— Supplement"]},c))})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Lr.map(c=>{var A;const m=r===c.id,u=c.content.map((D,R)=>`${c.id}-${R}`).filter(D=>F.has(D)).length,f=h(c.id),b=((A=c.questions)==null?void 0:A.length)||0;return i.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>x(m?null:c.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:c.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono', monospace"},children:c.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15.5,fontWeight:600},children:c.title}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:2},children:c.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[u,"/",c.content.length]}),i.jsx("span",{className:"arr",style:{transform:m?"rotate(90deg)":"rotate(0)"},children:"›"})]}),m&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsxs("button",{className:`tab-btn ${f==="learn"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"learn"})),children:["📖"," Learn"]}),i.jsxs("button",{className:`tab-btn ${f==="practice"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"practice"})),children:["✏️"," Practice (",b,")"]}),i.jsxs("button",{className:`tab-btn ${f==="deeper"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"deeper"})),children:["🔗"," Go Deeper (",c.resources.length,")"]})]}),f==="learn"&&i.jsx("div",{children:c.content.map((D,R)=>{const y=`${c.id}-${R}`,N=$===y,V=F.has(y);return i.jsxs("div",{style:{borderTop:R>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"block-row",onClick:()=>T(y),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`chk ${V?"done":""}`,onClick:re=>p(y,re),children:V&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:V?"#aaa":"#2a2a2a",textDecoration:V?"line-through":"none",flex:1},children:D.heading}),i.jsx("span",{className:"arr",style:{transform:N?"rotate(90deg)":"rotate(0)"},children:"›"})]}),N&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${c.color}20`,marginLeft:22},children:k(D.body)})]},R)})}),f==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Test your understanding. Type your answer and check, or reveal if you're stuck."}),(c.questions||[]).map((D,R)=>i.jsx(Dh,{q:D.q,a:D.a,hint:D.hint,check:D.check,color:c.color},`${c.id}-q-${R}`))]}),f==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:c.resources.map((D,R)=>{const y=Yc[D.type];return i.jsxs("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:y.bg+"55"},children:[i.jsxs("span",{className:"type-badge",style:{background:y.bg,color:y.color},children:[y.emoji," ",y.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:D.title})]},R)})})]})]})]},c.id)})}),i.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Three tabs per section: Learn (content) ","·"," Practice (questions) ","·"," Go Deeper (resources)"]})]})}const Xc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},jr=[{id:"precision-recall",icon:"🎯",color:"#C2410C",title:"Precision & Recall",subtitle:"The two fundamental dimensions of retrieval quality -- what fraction is relevant vs what fraction is found",resources:[{type:"read",title:"Manning et al. -- Evaluation in IR (IIR Ch. 8)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-in-information-retrieval-1.html"},{type:"read",title:"Weaviate -- Retrieval Evaluation Metrics",url:"https://weaviate.io/blog/retrieval-evaluation-metrics"},{type:"video",title:"StatQuest -- Sensitivity and Specificity",url:"https://www.youtube.com/watch?v=vP06aMoz4v8"},{type:"read",title:"Wikipedia -- Precision and Recall",url:"https://en.wikipedia.org/wiki/Precision_and_recall"}],content:[{heading:"Definitions and Confusion Matrix",body:`Given a query, let **Relevant** = set of all relevant documents in the collection, and **Retrieved** = set of documents returned by the system.

|  | Relevant | Not Relevant |
|---|---|---|
| Retrieved | TP (True Positive) | FP (False Positive) |
| Not Retrieved | FN (False Negative) | TN (True Negative) |

**Precision**: Of the documents we retrieved, what fraction are relevant?

Precision = TP / (TP + FP) = |Relevant intersection Retrieved| / |Retrieved|

**Recall**: Of all relevant documents, what fraction did we retrieve?

Recall = TP / (TP + FN) = |Relevant intersection Retrieved| / |Relevant|

**Precision answers**: "How clean are my results?" (low noise)
**Recall answers**: "How complete are my results?" (low misses)`},{heading:"The Precision-Recall Tradeoff",body:`Precision and recall are fundamentally in tension:

- Returning **MORE** documents: recall goes up but precision goes down (more noise)
- Returning **FEWER** documents: precision goes up but recall goes down (miss relevant ones)
- Returning **ALL** documents: recall = 1.0 but precision = |Relevant|/|Collection| (very low)
- Returning **NO** documents: precision is undefined, recall = 0

This tradeoff is central to IR system design. **Web search** prioritizes precision (users want the first page to be relevant). **Legal discovery** prioritizes recall (missing a relevant document could lose a case). **Medical search** also prioritizes recall (missing a relevant study could affect patient care).

The operating point on the precision-recall curve depends on the application.`},{heading:"Worked Example",body:`**Collection**: 1000 documents. Query: "Python decorators"
- 20 documents are truly relevant
- System retrieves 15 documents, of which 10 are relevant

Precision = 10/15 = 0.667  (67% of retrieved are relevant)
Recall    = 10/20 = 0.500  (50% of relevant docs found)

**Interpretation**: The system returns mostly relevant results (67% precision) but misses half the relevant documents (50% recall). Whether this is good depends on the application:
- For web search: 67% precision at rank 15 is decent
- For patent search: 50% recall is dangerously low (missed patents could invalidate a filing)`},{heading:"Precision-Recall Curves",body:`A **precision-recall curve** plots precision at various recall levels. As you move down the ranked list:
- Each new relevant document increases recall (more relevant found)
- Precision may increase (relevant doc found) or decrease (non-relevant doc found)

**Ideal curve**: precision stays at 1.0 as recall increases (all relevant docs ranked first)
**Worst case**: precision drops rapidly (relevant docs buried at bottom)

The **area under the precision-recall curve** (AUC-PR) is a single-number summary. Higher AUC = better system. This is closely related to **Average Precision** (AP), which we cover in the MAP section.

**11-point interpolated precision**: For comparison across systems, compute precision at 11 standard recall levels (0.0, 0.1, 0.2, ..., 1.0). At each recall level, use the maximum precision at that or any higher recall level (interpolation).`}],questions:[{q:"A system retrieves 20 documents, of which 12 are relevant. The collection contains 30 relevant documents total. Compute precision and recall.",a:"Precision = 12/20 = 0.600 (60%). Recall = 12/30 = 0.400 (40%). The system returns mostly relevant results but finds less than half of all relevant documents.",hint:"Precision = relevant retrieved / total retrieved. Recall = relevant retrieved / total relevant.",check:l=>{const r=l.toLowerCase();return(r.includes("0.6")||r.includes("60%"))&&(r.includes("0.4")||r.includes("40%"))}},{q:"In what scenario would you optimize for recall over precision? Give a specific real-world example.",a:"Legal e-discovery is the classic example: when a company is sued, lawyers must find ALL relevant documents. Missing even one relevant email could lead to sanctions or losing the case. High recall (find everything) matters far more than high precision (some irrelevant docs in the results is acceptable -- lawyers can filter them). Other examples: medical literature search (missing a relevant study could affect patient safety), intelligence analysis (missing a threat signal is far worse than investigating false leads).",hint:"Think about domains where missing a relevant document has severe consequences.",check:l=>{const r=l.toLowerCase();return(r.includes("legal")||r.includes("medical")||r.includes("safety")||r.includes("discovery"))&&(r.includes("miss")||r.includes("find all")||r.includes("consequence"))}}]},{id:"f1-pak",icon:"⚖️",color:"#7C3AED",title:"F1 Score & Precision@k",subtitle:"Combining precision and recall into a single metric and evaluating at specific cutoff depths",resources:[{type:"read",title:"Manning et al. -- F-measure and P@k (IIR Ch. 8.3-8.4)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html"},{type:"read",title:"Fabian Hertwig -- Information Retrieval Metrics",url:"https://fabianhertwig.com/blog/information-retrieval-metrics/"},{type:"video",title:"Victor Lavrenko -- Evaluation metrics in IR",url:"https://www.youtube.com/watch?v=SqJpkEEMbFo"},{type:"read",title:"Wikipedia -- F-score",url:"https://en.wikipedia.org/wiki/F-score"}],content:[{heading:"F1 Score -- Harmonic Mean",body:`The **F1 score** is the harmonic mean of precision and recall, giving a single balanced metric:

F1 = 2 * (Precision * Recall) / (Precision + Recall)

**Why harmonic mean** (not arithmetic)? The harmonic mean penalizes extreme imbalances. If either precision or recall is 0, F1 = 0. If precision = 1.0 and recall = 0.01, the arithmetic mean would be 0.505 (misleadingly high), but F1 = 0.020 (correctly low).

**Example**: Precision = 0.667, Recall = 0.500
F1 = 2 * (0.667 * 0.500) / (0.667 + 0.500) = 2 * 0.333 / 1.167 = 0.571

The F1 of 0.571 is below both precision and recall -- the harmonic mean pulls toward the lower value.`},{heading:"Generalized F-beta Score",body:`The **F-beta score** weights recall beta times as much as precision:

F_beta = (1 + beta^2) * (Precision * Recall) / (beta^2 * Precision + Recall)

| beta | Behavior | Use Case |
|---|---|---|
| beta = 1 | Balanced (standard F1) | General-purpose evaluation |
| beta = 2 | Recall is 2x as important as precision | Medical search, legal discovery |
| beta = 0.5 | Precision is 2x as important | Web search top results, recommendations |

**F2 example**: If Precision = 0.6 and Recall = 0.9:
F1 = 2*(0.6*0.9)/(0.6+0.9) = 1.08/1.5 = 0.720
F2 = (1+4)*(0.6*0.9)/(4*0.6+0.9) = 5*0.54/3.3 = 0.818

F2 is higher because it rewards the high recall more than F1 does.`},{heading:"Precision@k (P@k)",body:`**Precision@k** measures precision considering only the **top-k** retrieved documents:

P@k = (number of relevant documents in top k) / k

**Worked example** -- retrieved results (R = relevant, N = not):
Position: 1(R), 2(N), 3(R), 4(R), 5(N), 6(R), 7(N), 8(N), 9(R), 10(N)

P@1  = 1/1 = 1.000
P@3  = 2/3 = 0.667
P@5  = 3/5 = 0.600
P@10 = 5/10 = 0.500

**Limitation**: P@k ignores the **positions** of relevant documents within the top k. Getting relevant docs at positions [1,2,3] is treated the same as [8,9,10] within P@10. This is why rank-aware metrics like MAP and nDCG are preferred.

**P@10 is still commonly reported** because it directly answers: "of the first page of results (10 blue links), how many are relevant?"`},{heading:"R-Precision",body:`**R-Precision** sets k equal to the number of relevant documents for the query:

R-Precision = P@R  (where R = total number of relevant documents)

**Example**: If there are 15 relevant documents for a query, R-Precision = P@15.

**Advantage**: Adjusts the cutoff to the query. A query with 5 relevant docs is evaluated at P@5; a query with 100 relevant docs at P@100. This is fairer than a fixed cutoff.

**Disadvantage**: Requires knowing R (total relevant documents) in advance, which means you need complete relevance judgments. In practice, R-Precision correlates strongly with MAP.`}],questions:[{q:"Compute P@5 for the ranking: R, N, R, N, R (where R=relevant, N=not).",a:"P@5 = 3/5 = 0.600. Three out of the top five results are relevant.",hint:"Count relevant documents in the top 5, divide by 5.",check:l=>{const r=l.toLowerCase();return r.includes("0.6")||r.includes("3/5")||r.includes("60%")}},{q:"Precision is 0.8 and recall is 0.4. Compute F1 and explain why it is closer to the lower value.",a:"F1 = 2*(0.8*0.4)/(0.8+0.4) = 2*0.32/1.2 = 0.64/1.2 = 0.533. F1 (0.533) is much closer to recall (0.4) than precision (0.8). This is because the harmonic mean penalizes imbalance -- it cannot be high unless BOTH precision and recall are high. This property makes F1 a stricter measure than the arithmetic mean (which would give 0.6).",hint:"F1 = 2*P*R/(P+R). The harmonic mean always skews toward the lower value.",check:l=>{const r=l.toLowerCase();return r.includes("0.53")||r.includes(".533")}}]},{id:"map",icon:"📈",color:"#059669",title:"Mean Average Precision (MAP)",subtitle:"The gold standard offline metric for ranked retrieval -- rewarding both precision and rank position",resources:[{type:"read",title:"Manning et al. -- Mean Average Precision (IIR Ch. 8.4)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html"},{type:"video",title:"Victor Lavrenko -- Mean Average Precision step by step",url:"https://www.youtube.com/watch?v=pM6DJ0ZZee0"},{type:"read",title:"TREC Evaluation -- trec_eval documentation",url:"https://trec.nist.gov/trec_eval/"},{type:"read",title:"Weaviate -- MAP explained with examples",url:"https://weaviate.io/blog/retrieval-evaluation-metrics"}],content:[{heading:"Average Precision (AP) for a Single Query",body:`**Average Precision** considers both precision and the position of relevant documents:

AP = (1/R) * sum over k=1 to n of [P(k) * rel(k)]

Where:
- **R** = total number of relevant documents for this query
- **n** = number of retrieved documents
- **P(k)** = precision at position k
- **rel(k)** = 1 if document at position k is relevant, 0 otherwise

Only positions with relevant documents contribute to the sum. Relevant documents ranked **higher** contribute more (because P(k) is higher when fewer non-relevant docs precede them).`},{heading:"Worked Example",body:`**Query**: "machine learning basics"
**Total relevant documents**: R = 4

| Position k | Relevant? | P(k) | P(k) * rel(k) |
|--:|:---:|--:|--:|
| 1 | Yes | 1/1 = 1.000 | 1.000 |
| 2 | No | 1/2 = 0.500 | 0.000 |
| 3 | Yes | 2/3 = 0.667 | 0.667 |
| 4 | No | 2/4 = 0.500 | 0.000 |
| 5 | Yes | 3/5 = 0.600 | 0.600 |
| 6 | No | 3/6 = 0.500 | 0.000 |
| 7 | No | 3/7 = 0.429 | 0.000 |
| 8 | Yes | 4/8 = 0.500 | 0.500 |

AP = (1/4) * (1.000 + 0.667 + 0.600 + 0.500) = (1/4) * 2.767 = **0.692**

**Key insight**: If the 4th relevant document were at position 4 instead of position 8, AP would be higher. AP rewards placing relevant documents at the top.`},{heading:"Mean Average Precision (MAP)",body:`**MAP** averages AP over all queries in the evaluation set:

MAP = (1/|Q|) * sum over q in Q of AP(q)

**Example**: Three queries with AP values 0.692, 0.450, 0.833:
MAP = (0.692 + 0.450 + 0.833) / 3 = **0.658**

**Why MAP is the gold standard**:
1. **Rank-sensitive**: Rewards placing relevant documents higher
2. **Recall-sensitive**: Missing relevant documents always hurts (they contribute 0 to the sum but count in the denominator R)
3. **Single number**: Summarizes both precision and recall across all queries
4. **Widely used**: The primary metric in TREC evaluations for decades

**Limitation**: MAP uses **binary relevance** (relevant or not). It cannot distinguish between "somewhat relevant" and "highly relevant" documents. For graded relevance, use nDCG.`},{heading:"MAP and Missing Relevant Documents",body:`If a relevant document is **never retrieved**, it contributes 0 to the AP sum but still counts in the denominator R. This means missing relevant documents always hurts AP.

**Example**: R = 4 relevant docs, but system only finds 2 (at positions 1 and 3):
AP = (1/4) * (1.000 + 0.667 + 0 + 0) = (1/4) * 1.667 = **0.417**

Compare to finding all 4 at positions 1, 3, 5, 8: AP = 0.692

The two missing documents reduced AP from 0.692 to 0.417 -- a 40% drop. MAP thus provides a strong incentive to improve recall, not just precision.`}],questions:[{q:"Compute AP for this ranking: R, R, N, N, R. There are 3 total relevant documents in the collection.",a:"Position 1 (R): P(1)=1/1=1.000. Position 2 (R): P(2)=2/2=1.000. Position 5 (R): P(5)=3/5=0.600. AP = (1/3)*(1.000+1.000+0.600) = 2.600/3 = 0.867. Excellent AP because two relevant docs are at the very top.",hint:"Sum P(k) only at positions where rel(k)=1, then divide by total relevant (R=3).",check:l=>{const r=l.toLowerCase();return r.includes("0.867")||r.includes("0.87")||r.includes(".867")}},{q:"Two queries have AP values of 0.867 and 0.250. What is the MAP and what does the difference in AP values suggest?",a:"MAP = (0.867 + 0.250) / 2 = 0.558. The large gap between the two AP values (0.867 vs 0.250) suggests the system performs well on some queries but poorly on others. The low AP of 0.250 indicates either many relevant documents were missed (low recall) or relevant documents were ranked very low. MAP averages over these cases, potentially masking the inconsistency. Reporting the variance or distribution of AP values across queries is also important.",hint:"MAP is just the average of AP values. Think about what a low AP means for a query.",check:l=>{const r=l.toLowerCase();return r.includes("0.558")||r.includes("0.56")||r.includes(".558")}}]},{id:"ndcg",icon:"📉",color:"#2563EB",title:"nDCG (Normalized Discounted Cumulative Gain)",subtitle:"Handling graded relevance -- discounting gains by position and normalizing against the ideal ranking",resources:[{type:"read",title:"Manning et al. -- Discounted Cumulative Gain (IIR Ch. 8.4)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html"},{type:"video",title:"Victor Lavrenko -- nDCG explained",url:"https://www.youtube.com/watch?v=C3kUYIi2ojc"},{type:"read",title:"Jarvelin & Kekalainen -- Cumulated Gain-Based Evaluation (original 2002 paper)",url:"https://dl.acm.org/doi/10.1145/582415.582418"},{type:"read",title:"Kaggle -- Understanding nDCG with worked examples",url:"https://www.kaggle.com/code/davidgasquez/ndcg-scorer"},{type:"read",title:"Wikipedia -- Discounted cumulative gain",url:"https://en.wikipedia.org/wiki/Discounted_cumulative_gain"}],content:[{heading:"Why Graded Relevance?",body:`MAP treats relevance as **binary** (relevant or not). But in reality, documents have varying degrees of relevance:

- 0 = irrelevant
- 1 = marginally relevant
- 2 = relevant
- 3 = highly relevant

A search engine that returns a "highly relevant" document at rank 1 should score higher than one returning a "marginally relevant" document at rank 1. nDCG handles this by using **graded relevance scores**.

**Example**: For the query "Python tutorial", a comprehensive beginner tutorial (grade 3) is more valuable than a brief mention of Python (grade 1), even though both are "relevant" in a binary sense.`},{heading:"DCG Formula",body:`**Cumulative Gain (CG)** -- simple sum of relevance (ignores position):

CG@k = sum of rel_i for i=1 to k

**Discounted Cumulative Gain (DCG)** -- discounts by position (relevant docs lower in ranking are worth less):

DCG@k = sum of rel_i / log2(i + 1)  for i=1 to k

The **logarithmic discount** means:
- Position 1: divide by log2(2) = 1.000 (full value)
- Position 2: divide by log2(3) = 1.585 (63% of full value)
- Position 3: divide by log2(4) = 2.000 (50% of full value)
- Position 10: divide by log2(11) = 3.459 (29% of full value)

**Alternative formula** (emphasizes highly relevant docs more):

DCG@k = sum of (2^rel_i - 1) / log2(i + 1)

With this formula, a relevance-3 doc contributes 7 (2^3-1) while a relevance-1 doc contributes only 1 (2^1-1). The exponential gain makes the difference between "relevant" and "highly relevant" much larger.`},{heading:"Normalized DCG (nDCG) -- Worked Example",body:`**Query results** (graded relevance 0-3):

| Position i | rel_i | log2(i+1) | rel_i / log2(i+1) |
|--:|--:|--:|--:|
| 1 | 3 | 1.000 | 3.000 |
| 2 | 2 | 1.585 | 1.262 |
| 3 | 0 | 2.000 | 0.000 |
| 4 | 1 | 2.322 | 0.431 |
| 5 | 3 | 2.585 | 1.161 |

**DCG@5** = 3.000 + 1.262 + 0.000 + 0.431 + 1.161 = **5.854**

**Ideal ranking** (sorted by relevance): [3, 3, 2, 1, 0]

| Position i | rel_i | rel_i / log2(i+1) |
|--:|--:|--:|
| 1 | 3 | 3.000 |
| 2 | 3 | 1.893 |
| 3 | 2 | 1.000 |
| 4 | 1 | 0.431 |
| 5 | 0 | 0.000 |

**IDCG@5** = 3.000 + 1.893 + 1.000 + 0.431 + 0.000 = **6.324**

**nDCG@5** = DCG / IDCG = 5.854 / 6.324 = **0.926**

The system achieved 92.6% of the ideal ranking quality.`},{heading:"nDCG Properties and Usage",body:`**Range**: [0, 1], where 1.0 means the ranking is ideal (perfect ordering by relevance).

**Key properties**:
- nDCG is **rank-sensitive**: swapping a relevant doc from position 1 to position 10 reduces the score
- nDCG handles **graded relevance**: distinguishes highly relevant from marginally relevant
- nDCG is **normalized**: scores are comparable across queries with different numbers of relevant docs

**Common cutoff depths**:
- **nDCG@10**: Standard for web search (evaluates the first page)
- **nDCG@100**: Standard for passage retrieval (MS MARCO, BEIR)

**nDCG vs MAP**:
- MAP: binary relevance, recall-sensitive, penalizes missing docs
- nDCG: graded relevance, position-sensitive, does NOT penalize missing docs below cutoff k
- For most modern IR tasks with graded judgments, **nDCG is preferred**`}],questions:[{q:"Compute nDCG@4 for relevance scores [3, 0, 2, 1] with ideal ranking [3, 2, 1, 0]. Use the standard formula rel_i / log2(i+1).",a:"DCG@4: 3/log2(2) + 0/log2(3) + 2/log2(4) + 1/log2(5) = 3/1.000 + 0/1.585 + 2/2.000 + 1/2.322 = 3.000 + 0.000 + 1.000 + 0.431 = 4.431. IDCG@4: 3/1.000 + 2/1.585 + 1/2.000 + 0/2.322 = 3.000 + 1.262 + 0.500 + 0.000 = 4.762. nDCG@4 = 4.431/4.762 = 0.931.",hint:"Compute DCG for the actual ranking and IDCG for the ideal ranking, then divide.",check:l=>{const r=l.toLowerCase();return r.includes("0.93")||r.includes(".931")}},{q:"Why does nDCG use a logarithmic discount rather than a linear one (e.g., dividing by position i)?",a:"A logarithmic discount reflects how users actually interact with search results. Users examine the first few results carefully (positions 1-3 get similar attention), then attention drops off gradually. A linear discount (1/i) would penalize position 2 at 50% of position 1, which is too aggressive -- users do look at the second result almost as much as the first. The log discount gives: position 1 = 100%, position 2 = 63%, position 3 = 50%, position 10 = 29%. This better models the gradual decay of user attention.",hint:"Think about how users actually scan search results -- do they give position 2 half the attention of position 1?",check:l=>{const r=l.toLowerCase();return(r.includes("user")||r.includes("attention")||r.includes("gradual"))&&(r.includes("log")||r.includes("decay"))}}]},{id:"mrr",icon:"🔍",color:"#DC2626",title:"Mean Reciprocal Rank (MRR)",subtitle:"When only the first relevant result matters -- optimizing for single-answer retrieval tasks",resources:[{type:"read",title:"Manning et al. -- MRR (IIR Ch. 8)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-ranked-retrieval-results-1.html"},{type:"read",title:"Wikipedia -- Mean Reciprocal Rank",url:"https://en.wikipedia.org/wiki/Mean_reciprocal_rank"},{type:"video",title:"Victor Lavrenko -- MRR explained",url:"https://www.youtube.com/watch?v=qJ_V_KOlnE0"},{type:"read",title:"MS MARCO Leaderboard (uses MRR@10)",url:"https://microsoft.github.io/msmarco/"}],content:[{heading:"MRR Formula",body:`MRR is designed for tasks where only the **first relevant result** matters (e.g., question answering, navigational queries).

**Reciprocal Rank** for a single query:

RR(q) = 1 / rank_of_first_relevant_result
       = 0 if no relevant result is found

**Mean Reciprocal Rank** over all queries:

MRR = (1/|Q|) * sum of RR(q) for all q in Q

**Intuition**: Finding the answer at position 1 is perfect (RR=1). Finding it at position 2 is half as good (RR=0.5). Finding it at position 10 is worth only 0.1. Not finding it at all is 0.`},{heading:"Worked Example",body:`| Query | Results (R=relevant) | First relevant at | RR |
|---|---|--:|--:|
| q1 | R, N, N, N | 1 | 1.000 |
| q2 | N, N, R, N | 3 | 0.333 |
| q3 | N, R, N, R | 2 | 0.500 |
| q4 | N, N, N, N | -- | 0.000 |

MRR = (1.000 + 0.333 + 0.500 + 0.000) / 4 = 1.833/4 = **0.458**

**Interpretation**: On average, the first relevant result appears around position 1/0.458 = 2.2. There is room for improvement, especially because q4 found no relevant results at all.`},{heading:"When to Use MRR",body:`| Metric | Best For |
|---|---|
| **MRR** | Single-answer tasks (QA, navigational queries, "I'm feeling lucky") |
| **MAP** | Tasks where ALL relevant docs matter (research, legal, exhaustive search) |
| **nDCG** | Tasks with graded relevance (web search, recommendations) |

**MRR is the primary metric for MS MARCO** (the most important passage retrieval benchmark), reported as MRR@10. It is ideal when:
- Users want ONE answer (not a list)
- Only the first relevant result matters
- Speed to the right answer is critical

**Limitation**: MRR ignores everything after the first relevant result. A system that returns 10 relevant results at positions 2-11 gets the same MRR as one that returns 1 relevant result at position 2 and 9 garbage results.`}],questions:[{q:"Three queries have first relevant results at positions 2, 1, and 4. Compute MRR.",a:"RR(q1) = 1/2 = 0.500. RR(q2) = 1/1 = 1.000. RR(q3) = 1/4 = 0.250. MRR = (0.500 + 1.000 + 0.250)/3 = 1.750/3 = 0.583.",hint:"RR = 1/position of first relevant result. MRR = average of all RR values.",check:l=>{const r=l.toLowerCase();return r.includes("0.583")||r.includes("0.58")||r.includes(".583")}},{q:"Why is MRR@10 used for MS MARCO instead of MAP or nDCG?",a:"MS MARCO has sparse relevance judgments -- on average only about 1.1 relevant passages per query. With so few relevant documents, MAP (which rewards finding ALL relevant docs) provides little additional signal beyond finding the first one. MRR directly measures what matters: how quickly the system finds that one relevant passage. Additionally, MS MARCO simulates a QA task where users want a single correct answer, not a ranked list of many relevant documents. MRR is the most natural metric for this use case.",hint:"Think about how many relevant documents exist per query in MS MARCO (hint: very few).",check:l=>{const r=l.toLowerCase();return(r.includes("sparse")||r.includes("one")||r.includes("single")||r.includes("few"))&&(r.includes("relevant")||r.includes("answer"))}}]},{id:"kappa",icon:"🤝",color:"#0891B2",title:"Cohen's Kappa & Inter-Annotator Agreement",subtitle:"Measuring annotation quality -- how much do judges agree beyond what chance would predict?",resources:[{type:"read",title:"Wikipedia -- Cohen's Kappa",url:"https://en.wikipedia.org/wiki/Cohen%27s_kappa"},{type:"read",title:"Manning et al. -- Assessing Relevance (IIR Ch. 8.5)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/assessing-relevance-1.html"},{type:"video",title:"StatQuest -- Cohen's Kappa",url:"https://www.youtube.com/watch?v=6yY-Iy6P3HA"},{type:"read",title:"Artstein & Poesio -- Inter-coder Agreement for Computational Linguistics",url:"https://doi.org/10.1162/coli.07-034-R2"}],content:[{heading:"Why Agreement Matters",body:`Evaluation metrics like MAP and nDCG depend on **relevance judgments** -- human annotations of which documents are relevant. But humans disagree! Different annotators may judge the same document differently based on:

- Interpretation of the query intent
- Personal knowledge and expertise
- Annotation guidelines clarity
- Fatigue and attention

**Cohen's Kappa** (kappa) measures how much two annotators agree **beyond what chance would predict**. High kappa means the annotations are reliable and the evaluation is trustworthy.`},{heading:"Kappa Formula",body:`kappa = (P_o - P_e) / (1 - P_e)

Where:
- **P_o** = observed agreement (fraction of items where annotators agree)
- **P_e** = expected agreement by chance

**Computing P_e** (for binary labels):
P_e = P(both say relevant by chance) + P(both say not-relevant by chance)
    = P(A=R) * P(B=R) + P(A=NR) * P(B=NR)

**Interpretation**: kappa = 0 means agreement is no better than random. kappa = 1 means perfect agreement. Negative kappa means worse than random (systematic disagreement).`},{heading:"Worked Example",body:`100 documents judged by two annotators:

|  | B: Relevant | B: Not Relevant | Total |
|---|--:|--:|--:|
| A: Relevant | 40 | 10 | 50 |
| A: Not Relevant | 5 | 45 | 50 |
| Total | 45 | 55 | 100 |

P_o = (40 + 45) / 100 = 0.85

P(A=R) = 50/100 = 0.50,  P(B=R) = 45/100 = 0.45
P(A=NR) = 50/100 = 0.50, P(B=NR) = 55/100 = 0.55

P_e = 0.50 * 0.45 + 0.50 * 0.55 = 0.225 + 0.275 = 0.50

kappa = (0.85 - 0.50) / (1 - 0.50) = 0.35 / 0.50 = **0.70**`},{heading:"Interpretation Scale",body:`| kappa Value | Interpretation |
|--:|---|
| < 0 | Less than chance agreement |
| 0.01 - 0.20 | Slight agreement |
| 0.21 - 0.40 | Fair agreement |
| 0.41 - 0.60 | Moderate agreement |
| 0.61 - 0.80 | Substantial agreement |
| 0.81 - 1.00 | Almost perfect agreement |

**kappa = 0.70** from our example indicates **substantial agreement** between annotators.

**In IR practice**, kappa values of 0.4-0.7 are typical for relevance judgments. TREC evaluations generally achieve kappa around 0.5-0.6, which is considered adequate for evaluation purposes. Higher kappa is achievable with:
- Clearer annotation guidelines
- Training sessions for annotators
- Simpler relevance scales (binary vs 5-level graded)`}],questions:[{q:"Two annotators judge 200 documents. They agree on 160 (100 both relevant, 60 both not relevant). Annotator A labels 120 relevant; Annotator B labels 110 relevant. Compute kappa.",a:"P_o = 160/200 = 0.80. P(A=R) = 120/200 = 0.60, P(B=R) = 110/200 = 0.55. P(A=NR) = 80/200 = 0.40, P(B=NR) = 90/200 = 0.45. P_e = 0.60*0.55 + 0.40*0.45 = 0.33 + 0.18 = 0.51. kappa = (0.80 - 0.51)/(1 - 0.51) = 0.29/0.49 = 0.592. This indicates moderate agreement.",hint:"First compute P_o (observed agreement), then P_e (chance agreement), then plug into the formula.",check:l=>{const r=l.toLowerCase();return r.includes("0.59")||r.includes(".592")}},{q:"Why can't we just use raw agreement percentage (P_o) instead of kappa? What's wrong with saying '85% agreement'?",a:"Raw agreement percentage (P_o) does not account for agreement that would happen by chance. If both annotators label 90% of documents as 'not relevant', they would agree 81% of the time just by random chance (0.9*0.9 = 0.81), making 85% agreement unimpressive. Kappa corrects for this by subtracting expected chance agreement (P_e). In our example, P_o=0.85 with P_e=0.50 gives kappa=0.70 -- the agreement is 70% of the way from chance to perfect, which is meaningful. Without kappa, we cannot tell if high agreement reflects genuine consensus or just label imbalance.",hint:"Think about what happens when one label is much more common than the other.",check:l=>{const r=l.toLowerCase();return(r.includes("chance")||r.includes("random"))&&(r.includes("account")||r.includes("correct")||r.includes("adjust")||r.includes("subtract"))}}]},{id:"benchmarks",icon:"🏆",color:"#9333EA",title:"TREC & Modern Benchmarks",subtitle:"From TREC pooling methodology to MS MARCO, BEIR, and MTEB -- how we evaluate IR systems at scale",resources:[{type:"read",title:"TREC -- Text REtrieval Conference (NIST)",url:"https://trec.nist.gov/"},{type:"read",title:"MS MARCO Datasets",url:"https://microsoft.github.io/msmarco/Datasets.html"},{type:"read",title:"BEIR Benchmark (Thakur et al., 2021)",url:"https://github.com/beir-cellar/beir"},{type:"read",title:"MTEB Benchmark -- Massive Text Embedding Benchmark",url:"https://github.com/embeddings-benchmark/mteb"},{type:"read",title:"BEIR Paper (arXiv)",url:"https://arxiv.org/abs/2104.08663"}],content:[{heading:"TREC Pooling Methodology",body:`Evaluating IR systems requires knowing which documents are relevant. But for large collections, it is impossible to judge every document. **TREC** (Text REtrieval Conference, NIST, since 1992) solves this with **pooling**:

1. **Multiple systems** (30-100 teams) submit ranked results for a set of "topics" (queries)
2. **Pool construction**: Take the top-k results (typically k=100) from each system, merge into one pool per query
3. **De-duplicate** the pool
4. **Human judgment**: Professional assessors judge every document in the pool
5. **Evaluation**: Compute MAP, nDCG, etc. for all systems using these judgments

**Key property -- reusability**: These judgments can evaluate systems that did NOT participate in the original pooling (with some caveats). Documents not in the pool are assumed non-relevant, which may penalize novel systems that find different relevant documents.

**Scale**: Typical TREC track: 50 topics * ~1000-2000 docs per pool = 50K-100K human judgments.`},{heading:"MS MARCO",body:`**MS MARCO** (Microsoft Machine Reading Comprehension) is the standard benchmark for neural IR:

| Property | Value |
|---|---|
| Passage collection | 8.8 million passages |
| Training queries | ~500K+ |
| Evaluation queries | ~6,980 (dev set) |
| Relevance labels | Binary (sparse -- ~1.1 relevant per query) |
| Primary metric | MRR@10 (passage), MRR@100 (document) |

**Significance**: Most dense retrieval and neural ranking models are first evaluated on MS MARCO. The large training set enables supervised learning of retrieval models. The sparse judgments (only ~1 relevant passage per query) mean MRR is the natural metric.

**Leaderboard**: Top systems achieve MRR@10 around 0.40+ (passage ranking).`},{heading:"BEIR -- Zero-Shot Generalization",body:`**BEIR** (Benchmarking IR, Thakur et al., 2021) tests whether retrieval models **generalize** across domains:

- **18 diverse datasets**: fact checking, citation prediction, duplicate question detection, argument retrieval, news, QA, biomedical, tweets, entities
- **Zero-shot evaluation**: Train on MS MARCO, test on other domains WITHOUT fine-tuning
- **Primary metric**: nDCG@10

**Key finding**: BM25 remains competitive in zero-shot settings! Dense retrievers that excel on MS MARCO often fail to generalize to other domains. This was a wake-up call for the neural IR community.

**Why**: Dense retrievers overfit to the domain and query distribution of their training data. BM25's lexical matching is domain-agnostic.`},{heading:"MTEB -- Embedding Model Leaderboard",body:`**MTEB** (Massive Text Embedding Benchmark, 2023) is the definitive benchmark for comparing embedding models:

- **8 task types**: Retrieval, Classification, Clustering, Pair Classification, Reranking, STS, Summarization, Bitext Mining
- **58+ datasets** across 112+ languages
- **200+ models** evaluated
- **Primary metric**: Task-dependent (nDCG@10 for retrieval)

**Why MTEB matters**: When choosing an embedding model for your application, MTEB provides standardized comparisons. Models that excel at retrieval may not excel at clustering, and vice versa.

**A/B Testing in Production**: Offline metrics (MAP, nDCG on fixed judgments) complement but do not replace online evaluation. Production search engines use A/B testing with real user signals: click-through rate, session success rate, abandonment rate, dwell time, and reformulation rate. **Interleaving** (merging results from two systems into one ranking and attributing clicks) requires 10-100x fewer queries than traditional A/B tests.`}],questions:[{q:"Match each scenario to the best metric: (a) Web search ranking, (b) Legal document discovery, (c) Voice assistant finding one answer.",a:"(a) Web search -> nDCG (graded relevance, position matters, users scan results). (b) Legal discovery -> MAP or Recall (finding ALL relevant documents is critical, missing one could lose the case). (c) Voice assistant -> MRR (only the first correct answer matters, user wants one response).",hint:"Think about what matters most in each scenario -- completeness, ranking quality, or speed to first answer.",check:l=>{const r=l.toLowerCase();return r.includes("ndcg")&&(r.includes("map")||r.includes("recall"))&&r.includes("mrr")}},{q:"Why did BEIR's results surprise the neural IR community?",a:"BEIR showed that dense retrieval models trained on MS MARCO often failed to generalize to other domains in zero-shot settings. BM25, a decades-old lexical method with no training, was competitive or even superior on many BEIR datasets. This surprised researchers who assumed neural models would universally outperform traditional methods. The key insight: dense retrievers overfit to their training domain's query patterns and vocabulary, while BM25's lexical matching is inherently domain-agnostic. This motivated research into domain-adaptive retrieval and multi-task training.",hint:"Think about what 'zero-shot' means and why a method trained on web queries might fail on biomedical text.",check:l=>{const r=l.toLowerCase();return(r.includes("bm25")||r.includes("lexical"))&&(r.includes("generali")||r.includes("zero-shot")||r.includes("overfit")||r.includes("domain"))}}]}];function Ch({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")},T=()=>M("revealed"),p=()=>{var h;M("idle"),_(""),(h=j.current)==null||h.focus()};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:i.jsx("textarea",{ref:j,value:F,onChange:h=>_(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{flex:1,minWidth:200,padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans', sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",transition:"border 0.2s"}})}),v==="wrong"&&i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#DC2626",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:14},children:"✗"})," Not quite right. Try again or reveal the answer."]}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsxs("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:600,transition:"opacity 0.2s",opacity:F.trim()?1:.4},children:["✓"," Check Answer"]}),i.jsxs("button",{onClick:T,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal Answer"]}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsxs("summary",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#aaa",cursor:"pointer",userSelect:"none"},children:["💡"," Hint"]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:16},children:"✓"})," Correct!"]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:14},children:"📖"})," Answer"]}),i.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888"},children:"Try it myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Th({embedded:l=!1}){const[r,x]=z.useState(null),[$,L]=z.useState(null),[F,_]=z.useState(new Set),[v,M]=z.useState({}),j=jr.reduce((c,m)=>c+m.content.length,0),q=Math.round(F.size/j*100),T=c=>L($===c?null:c),p=(c,m)=>{m.stopPropagation();const C=new Set(F);C.has(c)?C.delete(c):C.add(c),_(C)},h=c=>v[c]||"learn",k=c=>c.split(`
`).map((m,C)=>{var D,R;const u=m,f=u.startsWith("import ")||u.startsWith("from ")||u.startsWith("def ")||u.startsWith("    ")||u.startsWith("P_")||u.startsWith("P(")||u.startsWith("Precision")||u.startsWith("Recall")||u.startsWith("F1")||u.startsWith("F_")||u.startsWith("AP")||u.startsWith("MAP")||u.startsWith("DCG")||u.startsWith("IDCG")||u.startsWith("nDCG")||u.startsWith("CG")||u.startsWith("RR")||u.startsWith("MRR")||u.startsWith("kappa")||u.startsWith("score")||u.startsWith("# "),b=u.startsWith("import ")||u.startsWith("from ")||u.startsWith("def ")||u.startsWith("# ")||u.startsWith("Precision")||u.startsWith("Recall")||u.startsWith("AP")||u.startsWith("MAP")||u.startsWith("DCG")||u.startsWith("CG")||u.startsWith("RR")||u.startsWith("MRR")||u.startsWith("kappa");if(f)return i.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:b?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:b?"6px 6px 0 0":0,marginTop:b?10:0},children:u},C);if(u==="")return i.jsx("div",{style:{height:8}},C);if(u.startsWith("|")){const y=u.split("|").filter(V=>V.trim()!=="");if(y.every(V=>/^[\s-:]+$/.test(V)))return null;const N=C<c.split(`
`).length-1&&((D=c.split(`
`)[C+1])==null?void 0:D.trim().startsWith("|"))&&/^[\s|:-]+$/.test((R=c.split(`
`)[C+1])==null?void 0:R.trim());return i.jsx("div",{style:{display:"flex",gap:0,fontFamily:"'DM Sans', sans-serif",fontSize:12,borderBottom:"1px solid #E5E2D9"},children:y.map((V,re)=>{const fe=V.trim().split(/\*\*(.*?)\*\*/g);return i.jsx("div",{style:{flex:1,padding:"6px 10px",fontWeight:N?600:400,color:N?"#1a1a1a":"#444",background:N?"#FAF9F6":"transparent",minWidth:0},children:fe.map((ve,ge)=>ge%2===1?i.jsx("strong",{children:ve},ge):i.jsx("span",{children:ve},ge))},re)})},C)}const A=u.split(/\*\*(.*?)\*\*/g);return i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:A.map((y,N)=>N%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:y},N):i.jsx("span",{children:y},N))},C)});return i.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:`@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
.sec-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
.sec-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.06); }
.block-row { transition: all 0.2s ease; cursor: pointer; border-radius: 8px; }
.block-row:hover { background: rgba(0,0,0,0.02); }
.chk { width: 20px; height: 20px; border-radius: 5px; border: 2px solid #ccc; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; flex-shrink: 0; background: white; font-size: 11px; }
.chk.done { background: #059669; border-color: #059669; color: white; }
.arr { transition: transform 0.25s ease; font-size: 16px; color: #aaa; }
.pfill { transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }
.tab-btn { padding: 8px 14px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; border: none; cursor: pointer; border-radius: 6px 6px 0 0; transition: all 0.2s; white-space: nowrap; }
.tab-btn.active { background: white; color: #1a1a1a; box-shadow: 0 -2px 8px rgba(0,0,0,0.04); }
.tab-btn:not(.active) { background: transparent; color: #888; }
.tab-btn:not(.active):hover { color: #555; }
.res-link { display: flex; align-items: center; gap: 10px; padding: 9px 14px; border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; border: 1px solid transparent; }
.res-link:hover { border-color: rgba(0,0,0,0.08); transform: translateX(3px); }
.type-badge { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 500; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.4px; white-space: nowrap; }
textarea:focus { border-color: #4338CA !important; }`}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),i.jsx("h1",{style:{fontSize:"clamp(30px, 5vw, 44px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Evaluation Metrics in IR"}),i.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:24},children:["Learn, practice, go deeper. ",jr.length," sections ","·"," ",j," concepts ","·"," ",jr.reduce((c,m)=>{var C;return c+(((C=m.questions)==null?void 0:C.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pfill",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #4338CA, #581C87)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[F.size,"/",j]})]}),i.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Xc).map(([c,m])=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#777"},children:[i.jsxs("span",{className:"type-badge",style:{background:m.bg,color:m.color},children:[m.emoji," ",m.label]}),c==="infographic"&&"— Primary",c==="read"&&"— Secondary",c==="video"&&"— Supplement"]},c))})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:jr.map(c=>{var A;const m=r===c.id,u=c.content.map((D,R)=>`${c.id}-${R}`).filter(D=>F.has(D)).length,f=h(c.id),b=((A=c.questions)==null?void 0:A.length)||0;return i.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>x(m?null:c.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:c.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono', monospace"},children:c.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15.5,fontWeight:600},children:c.title}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:2},children:c.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[u,"/",c.content.length]}),i.jsx("span",{className:"arr",style:{transform:m?"rotate(90deg)":"rotate(0)"},children:"›"})]}),m&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsxs("button",{className:`tab-btn ${f==="learn"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"learn"})),children:["📖"," Learn"]}),i.jsxs("button",{className:`tab-btn ${f==="practice"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"practice"})),children:["✏️"," Practice (",b,")"]}),i.jsxs("button",{className:`tab-btn ${f==="deeper"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"deeper"})),children:["🔗"," Go Deeper (",c.resources.length,")"]})]}),f==="learn"&&i.jsx("div",{children:c.content.map((D,R)=>{const y=`${c.id}-${R}`,N=$===y,V=F.has(y);return i.jsxs("div",{style:{borderTop:R>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"block-row",onClick:()=>T(y),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`chk ${V?"done":""}`,onClick:re=>p(y,re),children:V&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:V?"#aaa":"#2a2a2a",textDecoration:V?"line-through":"none",flex:1},children:D.heading}),i.jsx("span",{className:"arr",style:{transform:N?"rotate(90deg)":"rotate(0)"},children:"›"})]}),N&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${c.color}20`,marginLeft:22},children:k(D.body)})]},R)})}),f==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Test your understanding. Type your answer and check, or reveal if you're stuck."}),(c.questions||[]).map((D,R)=>i.jsx(Ch,{q:D.q,a:D.a,hint:D.hint,check:D.check,color:c.color},`${c.id}-q-${R}`))]}),f==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:c.resources.map((D,R)=>{const y=Xc[D.type];return i.jsxs("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:y.bg+"55"},children:[i.jsxs("span",{className:"type-badge",style:{background:y.bg,color:y.color},children:[y.emoji," ",y.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:D.title})]},R)})})]})]})]},c.id)})}),i.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Three tabs per section: Learn (content) ","·"," Practice (questions) ","·"," Go Deeper (resources)"]})]})}const Zc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},qr=[{id:"rocchio",icon:"🧭",color:"#C2410C",title:"Rocchio's Algorithm",subtitle:"The foundational relevance feedback method -- moving the query vector toward relevant documents and away from non-relevant ones",resources:[{type:"read",title:"Manning et al. -- Relevance Feedback and Rocchio (IIR Ch. 9)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/relevance-feedback-and-query-expansion-1.html"},{type:"read",title:"Wikipedia -- Rocchio Algorithm",url:"https://en.wikipedia.org/wiki/Rocchio_algorithm"},{type:"video",title:"Victor Lavrenko -- Rocchio relevance feedback",url:"https://www.youtube.com/watch?v=s-H6rX7-kn4"},{type:"read",title:"Salton & Buckley -- Improving Retrieval Performance by Relevance Feedback (1990)",url:"https://doi.org/10.1002/asi.4630410106"}],content:[{heading:"The Core Problem",body:`Users often cannot express their information need precisely in a single query. The query "java" could mean the programming language, the island, or the coffee. Even with clear intent, users may not know the right vocabulary.

**Relevance feedback** solves this by letting the system learn from user judgments on initial results. The user marks some results as relevant or non-relevant, and the system uses this feedback to improve the query.

**Key insight**: The user knows what they want when they see it, even if they cannot express it precisely upfront. Relevance feedback turns "I know it when I see it" into a computable signal.`},{heading:"Rocchio's Formula",body:`Developed by J.J. Rocchio (1971) as part of the SMART system at Cornell. The most influential relevance feedback method ever created.

**Formula**:

q_m = alpha * q_0 + beta * (1/|D_r|) * sum(d in D_r) d - gamma * (1/|D_nr|) * sum(d in D_nr) d

Where:
- **q_m** = modified (improved) query vector
- **q_0** = original query vector
- **D_r** = set of relevant documents (judged by user)
- **D_nr** = set of non-relevant documents
- **alpha** = weight of original query (preserves intent), typically 1.0
- **beta** = weight of relevant centroid (pull toward relevant), typically 0.75
- **gamma** = weight of non-relevant centroid (push away), typically 0.15

The formula computes three things: keep the original query, add the average of relevant docs, subtract the average of non-relevant docs.`},{heading:"Geometric Interpretation",body:`In the vector space, Rocchio performs an elegant geometric operation:

1. The original query **q_0** is a point in term space
2. Compute the **centroid** (average) of relevant documents -- this represents "what relevant docs look like"
3. Compute the **centroid** of non-relevant documents -- "what non-relevant docs look like"
4. The modified query **q_m** is shifted **toward** the relevant centroid and **away** from the non-relevant centroid

**Visual**:
- Original query sits in one part of the space
- Relevant documents cluster in a nearby region
- Non-relevant documents cluster elsewhere
- The modified query moves toward the relevant cluster

**Important side effect**: New terms from relevant documents are **added** to the query automatically. If relevant docs mention "django" and "flask" but the original query was just "python web framework", those terms enter the modified query. This is **implicit query expansion**.`},{heading:"Worked Example",body:`Vocabulary: {information, retrieval, database, query}

Original query:    q_0 = [1, 1, 0, 0]
Relevant doc d1:   d_1 = [2, 3, 0, 1]
Relevant doc d2:   d_2 = [1, 2, 0, 2]
Non-relevant d3:   d_3 = [0, 0, 3, 1]

Relevant centroid:     (1/2)([2,3,0,1] + [1,2,0,2]) = [1.5, 2.5, 0, 1.5]
Non-relevant centroid: (1/1)([0,0,3,1]) = [0, 0, 3, 1]

With alpha=1, beta=0.75, gamma=0.15:

q_m = 1*[1,1,0,0] + 0.75*[1.5,2.5,0,1.5] - 0.15*[0,0,3,1]
    = [1,1,0,0] + [1.125,1.875,0,1.125] - [0,0,0.45,0.15]
    = [2.125, 2.875, -0.45, 0.975]

Clip negatives to 0:  q_m = [2.125, 2.875, 0, 0.975]

**Result**: "retrieval" is now the heaviest term (was 1.0, now 2.875). "query" has been **added** as a new term (was 0, now 0.975). "database" remains excluded. The query has been both **reweighted** and **expanded**.`},{heading:"Limitations of Explicit Feedback",body:`Despite its elegance, explicit relevance feedback has practical limitations:

- **User effort**: Marking documents relevant/non-relevant requires work users are reluctant to do
- **Single iteration**: Users typically tolerate only one round of feedback (no patience for iterative refinement)
- **Web search**: Works poorly because users want instant results, not an interactive refinement process
- **Specialized domains**: Works well in patent search, legal discovery, and medical literature where precision matters and users are trained professionals

**Historical note**: Web search engines tried explicit relevance feedback in the early 2000s but abandoned it because users would not use it. This motivated **pseudo-relevance feedback** and **implicit feedback** (clicks, dwell time) as alternatives.`}],questions:[{q:"Apply Rocchio with alpha=1, beta=0.8, gamma=0.1. Original query q_0 = [1, 0, 1]. One relevant doc d_r = [2, 3, 1]. One non-relevant doc d_nr = [0, 1, 4]. Compute the modified query.",a:"Relevant centroid = [2, 3, 1] (only 1 doc). Non-relevant centroid = [0, 1, 4]. q_m = 1*[1,0,1] + 0.8*[2,3,1] - 0.1*[0,1,4] = [1,0,1] + [1.6,2.4,0.8] - [0,0.1,0.4] = [2.6, 2.3, 1.4]. The term at dimension 2 (was 0) has been added with weight 2.3 -- query expansion in action.",hint:"Multiply each centroid by its weight, then add/subtract from the original query.",check:l=>{const r=l.toLowerCase();return r.includes("2.6")&&r.includes("2.3")&&r.includes("1.4")}},{q:"Why is gamma typically much smaller than beta in Rocchio's formula?",a:"Gamma is smaller because non-relevant documents are noisy and diverse -- they could be about anything unrelated to the query. Giving them too much negative weight risks pushing the query away from valid search directions. Relevant documents, by contrast, are coherent (they cluster around the user's actual need), so giving them more weight (beta) reliably moves the query in the right direction. In practice, sometimes gamma is set to 0 entirely (ignore non-relevant docs), and the system still improves. The relevant centroid alone is usually sufficient.",hint:"Think about how coherent/noisy relevant vs non-relevant document sets are.",check:l=>{const r=l.toLowerCase();return(r.includes("noisy")||r.includes("diverse")||r.includes("varied"))&&(r.includes("non-relevant")||r.includes("negative"))}}]},{id:"pseudo",icon:"🤖",color:"#7C3AED",title:"Pseudo-Relevance Feedback",subtitle:"Automatic relevance feedback by assuming top-k initial results are relevant -- no user effort required",resources:[{type:"read",title:"Manning et al. -- Pseudo-Relevance Feedback (IIR Ch. 9.1.6)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/pseudo-relevance-feedback-1.html"},{type:"video",title:"Victor Lavrenko -- Pseudo-relevance feedback",url:"https://www.youtube.com/watch?v=s-H6rX7-kn4"},{type:"read",title:"Stanford CS276 -- Query Expansion lecture notes",url:"https://web.stanford.edu/class/cs276/"},{type:"read",title:"Wikipedia -- Pseudo-relevance feedback",url:"https://en.wikipedia.org/wiki/Relevance_feedback#Pseudo-relevance_feedback"}],content:[{heading:"The Idea",body:`Instead of asking the user for relevance judgments, **assume the top-k documents from initial retrieval are relevant** and apply Rocchio automatically.

**Algorithm**:
1. Run initial query q against the collection
2. Take top-k results (e.g., k = 10)
3. Assume all top-k are relevant (D_r = top-k, D_nr = empty)
4. Apply Rocchio: q_m = alpha * q_0 + beta * centroid(top-k)
5. Re-run the modified query q_m
6. Return the new results

**No user interaction required** -- the system does everything automatically. This is sometimes called **blind feedback** because the system "blindly" trusts the initial results.`},{heading:"When It Works and When It Fails",body:`**Works well** when the initial retrieval is reasonably good (top results are indeed relevant):
- Typical improvement: **5-15% MAP** improvement on TREC collections
- Adds related terms the user did not think to include
- Particularly effective for short, underspecified queries

**Fails badly** when the initial query is poor (top results are off-topic):
- **Topic drift**: expanding with wrong terms pushes the query further away from the intended meaning
- Example: query "jaguar speed" -- top results about Jaguar cars lead to expansion with "engine", "horsepower", moving away from the animal

**Key insight**: Pseudo-relevance feedback **amplifies** the quality of initial retrieval. Good initial results get better; bad initial results get worse.`},{heading:"Practical Parameters",body:`| Parameter | Typical Value | Notes |
|---|:---:|---|
| k (feedback docs) | 10-20 | More docs = more terms but more noise |
| Expansion terms | 20-50 | Too many leads to topic drift |
| alpha (original query weight) | 1.0 | Keep original intent strong |
| beta (feedback weight) | 0.5-0.8 | Lower than explicit feedback (less trust) |

**Note**: beta is typically **lower** than in explicit feedback (0.5-0.8 vs 0.75) because we are less confident the top-k are truly relevant.

**Failure mitigation strategies**:
- Use a **lower beta** to limit feedback influence
- Use **fewer feedback documents** (k=3-5 instead of 10-20)
- Apply **query term weighting** to preserve original intent more strongly
- Use **diverse** initial results to avoid feedback from a single topic cluster`}],questions:[{q:"The query is 'jaguar speed'. The top-5 initial results are all about Jaguar cars. What happens with pseudo-relevance feedback? How could you mitigate this?",a:"Pseudo-relevance feedback assumes top results are relevant. Since all top-5 are about Jaguar cars, the expansion adds car-related terms (engine, horsepower, model), causing topic drift further away from the animal meaning. Mitigations: (1) Lower beta to reduce feedback influence, (2) Use fewer feedback docs (k=3), (3) Apply result diversification before feedback so both senses are represented, (4) Use contextual embeddings that can distinguish word senses, (5) Fall back to explicit feedback for ambiguous queries.",hint:"What happens when the initial results are all about the wrong sense of an ambiguous word?",check:l=>{const r=l.toLowerCase();return(r.includes("drift")||r.includes("car")||r.includes("wrong"))&&(r.includes("mitigat")||r.includes("lower")||r.includes("divers")||r.includes("fewer"))}}]},{id:"expansion",icon:"📚",color:"#059669",title:"Query Expansion (Thesaurus, RM3)",subtitle:"Systematically adding related terms to queries using thesauri, language models, and relevance models",resources:[{type:"read",title:"Manning et al. -- Query Expansion (IIR Ch. 9.2)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/query-expansion-1.html"},{type:"read",title:"Lavrenko & Croft -- Relevance-Based Language Models (RM3 paper, 2001)",url:"https://dl.acm.org/doi/10.1145/383952.383972"},{type:"video",title:"Victor Lavrenko -- Relevance Models for IR",url:"https://www.youtube.com/watch?v=XjSBa2Wv2hg"},{type:"read",title:"Wikipedia -- Query Expansion",url:"https://en.wikipedia.org/wiki/Query_expansion"},{type:"read",title:"WordNet -- Princeton's Lexical Database",url:"https://wordnet.princeton.edu/"}],content:[{heading:"Thesaurus-Based Expansion",body:`Expand query terms with synonyms and related terms from a curated thesaurus.

**Sources**:
- **Manual thesauri**: Domain-specific (MeSH for medicine, LCSH for libraries)
- **WordNet**: Lexical database with synonym sets (synsets)
  - "car" -> {car, auto, automobile, motorcar}
  - "bank" -> {bank, financial institution} OR {bank, river bank} (polysemy!)
- **Automatically built thesauri**: From co-occurrence statistics in the corpus

**Limitations**:
- **Polysemy**: "bank" expands to both financial and river senses simultaneously
- **Coverage**: May miss domain-specific terms not in the thesaurus
- **Maintenance**: Manual thesauri require constant updating as language evolves

Despite limitations, thesaurus expansion is still used in specialized domains (medical search with MeSH, library catalogs with LCSH) where curated vocabularies exist.`},{heading:"RM3 (Relevance Model 3)",body:`RM3 (Lavrenko & Croft, 2001) is the **most widely used pseudo-relevance feedback method** in modern IR research. It combines a language model approach with query expansion.

**Step 1 -- Estimate Relevance Model (RM1)**:

P(w | R) = sum over d in F of: P(w|d) * P(q|d) * P(d) / sum over d' in F of: P(q|d') * P(d')

Where F = top-k feedback documents, P(w|d) = word probability in document d, P(q|d) = query likelihood score.

**Step 2 -- Interpolate with Original Query (RM3)**:

P_RM3(w|q) = lambda * P_MLE(w|q) + (1 - lambda) * P_RM1(w|R)

Where lambda = interpolation weight (typically 0.5-0.8).

**Step 3 -- Expand**: Select top-m terms by P_RM3 score; use as expanded query for final retrieval.

**Why RM3 works**: It identifies terms that co-occur with ALL query terms in top-ranked documents. These are almost certainly topically related.`},{heading:"RM3 Worked Example",body:`Original query: "python web framework"

After RM3 with top-10 feedback documents:

Original terms:   python (0.15), web (0.12), framework (0.10)
Expanded terms:   django (0.08), flask (0.06), wsgi (0.04),
                  request (0.03), template (0.02), routing (0.02)

The expanded query now includes **highly relevant terms** (django, flask) that the user did not think to include.

**With lambda = 0.6**:
P_RM3("django") = 0.6 * 0 + 0.4 * 0.12 = 0.048  (new term added)
P_RM3("web")    = 0.6 * 0.5 + 0.4 * 0.08 = 0.332  (mostly keeps original weight)

The interpolation ensures the original query terms retain strong weight while new terms are added at lower weights. This prevents topic drift.`},{heading:"RM3 vs Rocchio",body:`| Aspect | Rocchio | RM3 |
|---|---|---|
| Framework | Vector space | Language model |
| Term selection | All terms from feedback docs | Weighted by query likelihood |
| Interpolation | alpha/beta/gamma on vectors | lambda on probability distributions |
| Term weights | TF-IDF based | Probability based (P(w|R)) |
| Typical improvement | 5-10% MAP | 8-15% MAP |
| Modern usage | Less common | Standard baseline in IR research |
| Implementation | Simple vector arithmetic | More complex (requires language models) |

**RM3 is generally preferred** because it selects expansion terms more carefully -- weighting them by how strongly they co-occur with the original query terms in feedback documents. Rocchio adds terms based solely on their frequency in feedback documents, which can introduce noise.`}],questions:[{q:"The RM1 model gives P('django') = 0.12 and P('web') = 0.08. The original query MLE gives P('django') = 0 and P('web') = 0.5. With lambda = 0.6, compute RM3 probabilities for both terms.",a:"P_RM3('django') = 0.6 * 0 + 0.4 * 0.12 = 0.048. P_RM3('web') = 0.6 * 0.5 + 0.4 * 0.08 = 0.300 + 0.032 = 0.332. 'django' is added as a new term with weight 0.048. 'web' retains most of its original weight (0.332 vs original 0.5).",hint:"RM3 = lambda * original_MLE + (1-lambda) * RM1.",check:l=>{const r=l.toLowerCase();return r.includes("0.048")&&(r.includes("0.332")||r.includes("0.33"))}},{q:"Why does RM3 use interpolation with the original query (lambda) rather than just using the relevance model directly?",a:"Without interpolation (lambda=0), the relevance model alone could completely override the original query intent. If feedback documents happen to discuss a subtopic heavily, the expansion could drift away from what the user actually wanted. Interpolation preserves the original query terms with strong weight, ensuring the expanded query stays anchored to the user's intent. It also handles the case where the initial retrieval is poor -- with high lambda, the original query dominates and limits damage from bad feedback. Lambda provides a safety valve: higher lambda = more conservative = less risk of topic drift.",hint:"Think about what happens when RM1 produces terms that are only loosely related to the original query.",check:l=>{const r=l.toLowerCase();return(r.includes("original")||r.includes("intent")||r.includes("preserv"))&&(r.includes("drift")||r.includes("anchor")||r.includes("override"))}}]},{id:"embeddings",icon:"🧠",color:"#2563EB",title:"Word Embeddings for Expansion",subtitle:"Using Word2Vec, GloVe, and contextualized embeddings to find semantically similar expansion terms",resources:[{type:"read",title:"Mikolov et al. -- Word2Vec (original 2013 paper)",url:"https://arxiv.org/abs/1301.3781"},{type:"read",title:"Pennington et al. -- GloVe: Global Vectors for Word Representation",url:"https://nlp.stanford.edu/projects/glove/"},{type:"video",title:"Stanford CS224N -- Word Vectors and Word Senses",url:"https://www.youtube.com/watch?v=kEMJRjEdNzM"},{type:"read",title:"Roy et al. -- Using Word Embeddings for Automatic Query Expansion",url:"https://arxiv.org/abs/1606.07608"}],content:[{heading:"Embedding-Based Query Expansion",body:`Use pre-trained word embeddings to find semantically similar terms for query expansion, even if they never co-occur in the same document.

**Algorithm**:
1. For each query term t, find top-m nearest neighbors in embedding space
2. Filter by similarity threshold (e.g., cosine > 0.6)
3. Weight expansion terms by their similarity score
4. Add expansion terms to the query with reduced weights
5. Re-run the expanded query

**Example with Word2Vec**:
Query term "python" -> nearest neighbors:
[('snake', 0.65), ('perl', 0.62), ('ruby', 0.58), ('java', 0.55)]

This captures both the animal and programming language senses -- which is both a feature (broader coverage) and a bug (noise from wrong sense).`},{heading:"GloVe Expansion",body:`**GloVe** (Global Vectors) captures co-occurrence statistics from a corpus. Similar words have similar vectors:

cos(GloVe("king"), GloVe("queen")) = 0.75
cos(GloVe("python"), GloVe("java")) = 0.72

GloVe and Word2Vec produce **static embeddings** -- one vector per word regardless of context. This means "bank" always has the same embedding whether it appears near "river" or "money".

**Advantage over thesaurus expansion**: Embeddings capture semantic similarity beyond strict synonymy. "car" and "vehicle" are synonyms (thesaurus captures this), but "car" and "highway" are related concepts that only embeddings capture.

**Advantage over co-occurrence thesauri**: Embeddings work in continuous space, providing smooth similarity scores rather than binary related/not-related judgments.`},{heading:"Challenges and Solutions",body:`| Challenge | Description | Solution |
|---|---|---|
| **Polysemy** | "apple" -> both "pear" and "macintosh" | Use contextualized embeddings (BERT) |
| **Domain mismatch** | Pre-trained embeddings miss domain vocabulary | Train domain-specific embeddings |
| **Semantic drift** | Expansion terms shift query meaning | Strict similarity thresholds (>0.6) |
| **Noise** | Too many expansion terms add noise | Limit to top 3-5 per query term |

**Contextualized embeddings** (BERT, RoBERTa) solve the polysemy problem by producing different vectors for "apple" in "apple pie" vs "Apple iPhone". However, they are more expensive to compute and harder to use for query expansion (require sentence context, not just single words).

**Best practice**: Use static embeddings (Word2Vec/GloVe) for fast, simple expansion with strict thresholds. Use contextualized embeddings when polysemy is a known problem in your domain.`}],questions:[{q:"Using Word2Vec, the nearest neighbors of 'apple' include both 'macintosh' and 'pear'. Why is this problematic for query expansion?",a:"Word2Vec produces a single embedding per word (static), conflating multiple senses. 'apple' the fruit should expand to 'pear', 'banana', 'fruit'. 'Apple' the company should expand to 'macintosh', 'iPhone', 'tech'. Expanding with ALL neighbors causes semantic drift -- a query about Apple computers would retrieve fruit documents and vice versa. Solutions: use contextualized embeddings (BERT) that produce different vectors based on context, use sense-specific embeddings, or apply word sense disambiguation before expansion.",hint:"Think about what happens when a word has multiple meanings and you expand with neighbors from ALL meanings.",check:l=>{const r=l.toLowerCase();return(r.includes("polysem")||r.includes("multiple")||r.includes("sense")||r.includes("meaning"))&&(r.includes("drift")||r.includes("wrong")||r.includes("conflat"))}}]},{id:"hyde",icon:"💭",color:"#DC2626",title:"HyDE (Hypothetical Document Embeddings)",subtitle:"Using LLMs to generate hypothetical answers, then retrieving with their embeddings for zero-shot dense retrieval",resources:[{type:"read",title:"Gao et al. -- Precise Zero-Shot Dense Retrieval without Relevance Labels (HyDE paper, 2022)",url:"https://arxiv.org/abs/2212.10496"},{type:"video",title:"AI Coffee Break -- HyDE explained",url:"https://www.youtube.com/watch?v=bRlInHQb6TQ"},{type:"read",title:"LangChain -- HyDE retriever implementation",url:"https://python.langchain.com/docs/integrations/retrievers/hyde/"},{type:"read",title:"Weaviate -- HyDE for improved retrieval",url:"https://weaviate.io/blog/HyDE-retrieval"}],content:[{heading:"How HyDE Works",body:`HyDE (Gao et al., 2022) uses a large language model to generate a **hypothetical answer document**, then uses that document's embedding (instead of the query's embedding) for dense retrieval.

**Algorithm**:

1. User submits query: "What causes aurora borealis?"

2. LLM generates hypothetical document:
   "Aurora borealis is caused by charged particles from the sun
    (solar wind) interacting with Earth's magnetosphere. When
    these particles collide with atmospheric gases like oxygen
    and nitrogen, they emit photons of light..."

3. Encode the hypothetical document with a dense encoder:
   h_vec = Encoder(hypothetical_document)

4. Search the document collection using h_vec as the query vector:
   results = nearest_neighbors(h_vec, document_embeddings, top_k)

**Key insight**: The hypothetical document uses the **same language style** as actual documents in the collection, bridging the query-document vocabulary gap.`},{heading:"Why HyDE Works",body:`**Vocabulary mismatch solved**: Queries are terse ("aurora borealis causes?") while documents are verbose and descriptive. The hypothetical document converts the terse query into document-style language.

**Zero-shot**: No relevance labels or training data needed. The LLM's world knowledge generates plausible answers that are close in embedding space to real relevant documents.

**LLM knowledge**: The generated document contains topically relevant terms the user might not know to include. A query about "northern lights" would generate a hypothetical doc mentioning "solar wind", "magnetosphere", "charged particles" -- all terms that help find relevant documents.

**Important caveat**: The hypothetical document may contain **factual errors** (LLM hallucinations). But this is okay! We use it only for its embedding vector, not its factual content. Even an inaccurate answer about aurora borealis will have an embedding vector close to real documents about aurora borealis because it uses the right vocabulary.`},{heading:"When to Use HyDE",body:`| Scenario | Use HyDE? | Why |
|---|:---:|---|
| Short keyword queries | Yes | Expands sparse query into rich document |
| Complex questions | Yes | LLM generates comprehensive hypothetical answer |
| Well-resourced with labeled data | No | Fine-tuned dense retrievers outperform HyDE |
| Factual precision required | Caution | LLM may hallucinate (but embeddings still work) |
| Real-time latency-sensitive | No | LLM generation adds 100ms-2s latency |
| Out-of-domain retrieval | Yes | Good zero-shot generalization |

**Cost**: One LLM call per query (typically $0.001-0.01 per query). This is cheap compared to the quality improvement.

**Comparison to standard dense retrieval**: For "What medicine treats high cholesterol?", standard retrieval encodes the question-style query directly. HyDE first generates "Statins such as atorvastatin (Lipitor) are commonly prescribed..." and encodes THAT, matching document-style text much more effectively.`},{heading:"Implementation",body:`**Python pseudocode**:

def hyde_retrieve(query, llm, encoder, doc_index, top_k=10):
    # Step 1: Generate hypothetical document
    prompt = f"Write a passage that answers: {query}"
    hypothetical_doc = llm.generate(prompt, max_tokens=256)
    # Step 2: Encode the hypothetical document
    hyp_embedding = encoder.encode(hypothetical_doc)
    # Step 3: Retrieve nearest neighbors
    results = doc_index.search(hyp_embedding, top_k)
    return results

**Variations**:
- **Multi-HyDE**: Generate N hypothetical docs, average their embeddings. More robust but N times the LLM cost.
- **HyDE + reranking**: Use HyDE for initial retrieval, then rerank with a cross-encoder for precision.
- **Conditional HyDE**: Only use HyDE for short/ambiguous queries; use direct encoding for long/specific queries.`}],questions:[{q:"How does HyDE compare to standard dense retrieval for the query 'What medicine treats high cholesterol?'",a:"Standard dense retrieval encodes the query 'What medicine treats high cholesterol?' directly. This is a question-style embedding that must bridge the query-document style gap to match declarative-style documents like 'Statins are a class of lipid-lowering medications...' HyDE first generates a hypothetical answer: 'Statins such as atorvastatin (Lipitor) and rosuvastatin (Crestor) are commonly prescribed...' and encodes THIS as the search vector. The embedding now matches the style and vocabulary of actual medical documents, finding relevant results more effectively -- even without any training data.",hint:"Think about the style difference between questions and documents.",check:l=>{const r=l.toLowerCase();return(r.includes("hypothetical")||r.includes("generate")||r.includes("style"))&&(r.includes("document")||r.includes("vocabulary")||r.includes("match"))}},{q:"Why is it okay that HyDE's hypothetical document may contain factual errors?",a:"HyDE uses the hypothetical document only for its embedding vector, not its factual content. Even a factually wrong answer about aurora borealis will use the right vocabulary (solar wind, magnetosphere, charged particles), producing an embedding vector that is close in vector space to real, accurate documents about the same topic. The final retrieved documents are real documents from the corpus -- the hypothetical doc is just a bridge for embedding similarity. The factual accuracy of retrieved results depends on the corpus, not the hypothetical document.",hint:"Think about what we actually USE from the hypothetical document -- is it the text itself or just the embedding?",check:l=>{const r=l.toLowerCase();return(r.includes("embedding")||r.includes("vector"))&&(r.includes("vocabulary")||r.includes("not")||r.includes("only")||r.includes("bridge"))}}]},{id:"session",icon:"💬",color:"#0891B2",title:"Session-Based Expansion",subtitle:"Leveraging the user's search session -- previous queries, clicks, and dwell time -- to improve current results",resources:[{type:"read",title:"Carterette et al. -- Session-Based Evaluation of IR Systems",url:"https://dl.acm.org/doi/10.1145/2484028.2484099"},{type:"read",title:"Manning et al. -- Implicit Feedback (IIR Ch. 9.1.7)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/implicit-relevance-feedback-1.html"},{type:"video",title:"Google Research -- Contextual Search and Personalization",url:"https://www.youtube.com/watch?v=3sxyD0MthGs"},{type:"read",title:"Joachims -- Evaluating Retrieval Performance Using Clickthrough Data",url:"https://www.cs.cornell.edu/people/tj/publications/joachims_02c.pdf"}],content:[{heading:"Session Signals",body:`A search session contains rich signals beyond the current query:

| Signal | Usage |
|---|---|
| Previous queries | Add terms from earlier queries to current query |
| Clicked documents | Extract key terms from clicked doc snippets |
| Dwell time | Long-dwelling docs are more likely relevant; weight their terms higher |
| Reformulation patterns | If user changed "python web" -> "django tutorial", learn that django is relevant |
| Scroll depth | Deep scrolling suggests partial relevance |

**Example session**:
q1: "python" -> clicks on "Python programming language" article
q2: "web framework" -> clicks on "Django vs Flask comparison"
q3: "deployment" -> ???

Session-expanded q3: "deployment" + "python" + "web" + "django" + "flask"
The system understands the user wants **Python web framework deployment**, not generic deployment.`},{heading:"Session Expansion Algorithm",body:`**Simple session expansion**:

1. Maintain session context S = {(q1, clicks1), (q2, clicks2), ..., (qt, clickst)}
2. For current query qt:
   a. Extract terms from previous queries q1...qt-1
   b. Extract terms from clicked document titles/snippets
   c. Weight terms by recency (more recent = higher weight)
   d. Expand: q_expanded = qt + alpha * sum(recency_weight * session_terms)
3. Run q_expanded against the index

**Recency weighting** is important because earlier queries in the session may be exploratory and less relevant to the current intent. The most recent queries and clicks are the strongest signals.

**Production implementation** (Google, Bing):
Modern search engines maintain session context automatically. They use:
- Short-term history (current session queries and clicks)
- Long-term history (personalized search based on past behavior)
- Both explicit signals (queries, clicks) and implicit signals (dwell time, scroll depth, mouse movements)`},{heading:"Click Models and Implicit Feedback",body:`**Click data** is the most abundant implicit feedback signal. But clicks are **biased**:

- **Position bias**: Users click higher-ranked results more, regardless of relevance
- **Attractiveness bias**: Snippets affect clicks independently of actual document quality
- **Trust bias**: Users trust the search engine and assume top results are relevant

**Click models** correct for these biases:

| Model | Approach | Complexity |
|---|---|---|
| Random Click Model | Assumes clicks are random | Baseline (unrealistic) |
| Position-Based Model | Separates relevance from position | Simple, effective |
| Cascade Model | User scans top-down, clicks first relevant | Models sequential behavior |
| Dynamic Bayesian Network | Full session model with state transitions | Most accurate, most complex |

**The Cascade Model** (Craswell et al., 2008) is widely used:
- User examines results from top to bottom
- At each position, decides to click (with some probability based on relevance)
- After clicking, either satisfied (stops) or continues scanning
- This naturally explains position bias and abandonment

**Key principle**: Clicks are not binary relevance judgments. A click tells you the result was attractive enough to examine, not that it was ultimately satisfying. **Long clicks** (dwell time > 30 seconds) are much stronger relevance signals than short clicks.`}],questions:[{q:"A user's search session contains: q1='python', q2='web framework', q3='deployment'. How would session-based expansion improve q3?",a:"Without session context, 'deployment' is ambiguous -- it could be about military deployment, software deployment, cloud deployment, etc. With session expansion, q3 becomes 'deployment + python + web + framework' (and possibly 'django' and 'flask' from clicked documents in q2). The system now understands the user wants Python web framework deployment specifically, returning results about deploying Django/Flask apps to production servers rather than generic deployment topics. The session context disambiguates the query.",hint:"Think about how the earlier queries in the session narrow down the meaning of 'deployment'.",check:l=>{const r=l.toLowerCase();return(r.includes("python")||r.includes("web")||r.includes("framework"))&&(r.includes("context")||r.includes("disambigu")||r.includes("narrow")||r.includes("specific"))}}]}];function Mh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")},T=()=>M("revealed"),p=()=>{var h;M("idle"),_(""),(h=j.current)==null||h.focus()};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:i.jsx("textarea",{ref:j,value:F,onChange:h=>_(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{flex:1,minWidth:200,padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans', sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",transition:"border 0.2s"}})}),v==="wrong"&&i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#DC2626",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:14},children:"✗"})," Not quite right. Try again or reveal the answer."]}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsxs("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:600,transition:"opacity 0.2s",opacity:F.trim()?1:.4},children:["✓"," Check Answer"]}),i.jsxs("button",{onClick:T,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal Answer"]}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsxs("summary",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#aaa",cursor:"pointer",userSelect:"none"},children:["💡"," Hint"]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:16},children:"✓"})," Correct!"]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:14},children:"📖"})," Answer"]}),i.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888"},children:"Try it myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Fh({embedded:l=!1}){const[r,x]=z.useState(null),[$,L]=z.useState(null),[F,_]=z.useState(new Set),[v,M]=z.useState({}),j=qr.reduce((c,m)=>c+m.content.length,0),q=Math.round(F.size/j*100),T=c=>L($===c?null:c),p=(c,m)=>{m.stopPropagation();const C=new Set(F);C.has(c)?C.delete(c):C.add(c),_(C)},h=c=>v[c]||"learn",k=c=>c.split(`
`).map((m,C)=>{var D,R;const u=m,f=u.startsWith("import ")||u.startsWith("from ")||u.startsWith("def ")||u.startsWith("    ")||u.startsWith("q_")||u.startsWith("P(")||u.startsWith("P_")||u.startsWith("h_")||u.startsWith("hyp_")||u.startsWith("results")||u.startsWith("prompt")||u.startsWith("hypothetical")||u.startsWith("# ")||u.startsWith("1.")||u.startsWith("2.")||u.startsWith("3.")||u.startsWith("4.")||u.startsWith("5.")||u.startsWith("6."),b=u.startsWith("import ")||u.startsWith("from ")||u.startsWith("def ")||u.startsWith("# ")||u.startsWith("q_m")||u.startsWith("P_RM3");if(f&&(u.startsWith("def ")||u.startsWith("import ")||u.startsWith("    ")||u.startsWith("# ")||u.startsWith("prompt")||u.startsWith("hypothetical")||u.startsWith("hyp_")||u.startsWith("results")||u.startsWith("h_")))return i.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:b?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:b?"6px 6px 0 0":0,marginTop:b?10:0},children:u},C);if(u==="")return i.jsx("div",{style:{height:8}},C);if(u.startsWith("|")){const y=u.split("|").filter(V=>V.trim()!=="");if(y.every(V=>/^[\s-:]+$/.test(V)))return null;const N=C<c.split(`
`).length-1&&((D=c.split(`
`)[C+1])==null?void 0:D.trim().startsWith("|"))&&/^[\s|:-]+$/.test((R=c.split(`
`)[C+1])==null?void 0:R.trim());return i.jsx("div",{style:{display:"flex",gap:0,fontFamily:"'DM Sans', sans-serif",fontSize:12,borderBottom:"1px solid #E5E2D9"},children:y.map((V,re)=>{const fe=V.trim().split(/\*\*(.*?)\*\*/g);return i.jsx("div",{style:{flex:1,padding:"6px 10px",fontWeight:N?600:400,color:N?"#1a1a1a":"#444",background:N?"#FAF9F6":"transparent",minWidth:0},children:fe.map((ve,ge)=>ge%2===1?i.jsx("strong",{children:ve},ge):i.jsx("span",{children:ve},ge))},re)})},C)}const A=u.split(/\*\*(.*?)\*\*/g);return i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:A.map((y,N)=>N%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:y},N):i.jsx("span",{children:y},N))},C)});return i.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:`@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
.sec-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
.sec-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.06); }
.block-row { transition: all 0.2s ease; cursor: pointer; border-radius: 8px; }
.block-row:hover { background: rgba(0,0,0,0.02); }
.chk { width: 20px; height: 20px; border-radius: 5px; border: 2px solid #ccc; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; flex-shrink: 0; background: white; font-size: 11px; }
.chk.done { background: #059669; border-color: #059669; color: white; }
.arr { transition: transform 0.25s ease; font-size: 16px; color: #aaa; }
.pfill { transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }
.tab-btn { padding: 8px 14px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; border: none; cursor: pointer; border-radius: 6px 6px 0 0; transition: all 0.2s; white-space: nowrap; }
.tab-btn.active { background: white; color: #1a1a1a; box-shadow: 0 -2px 8px rgba(0,0,0,0.04); }
.tab-btn:not(.active) { background: transparent; color: #888; }
.tab-btn:not(.active):hover { color: #555; }
.res-link { display: flex; align-items: center; gap: 10px; padding: 9px 14px; border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; border: 1px solid transparent; }
.res-link:hover { border-color: rgba(0,0,0,0.08); transform: translateX(3px); }
.type-badge { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 500; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.4px; white-space: nowrap; }
textarea:focus { border-color: #4338CA !important; }`}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),i.jsx("h1",{style:{fontSize:"clamp(30px, 5vw, 44px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Relevance Feedback & Query Expansion"}),i.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:24},children:["Learn, practice, go deeper. ",qr.length," sections ","·"," ",j," concepts ","·"," ",qr.reduce((c,m)=>{var C;return c+(((C=m.questions)==null?void 0:C.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pfill",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #4338CA, #581C87)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[F.size,"/",j]})]}),i.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Zc).map(([c,m])=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#777"},children:[i.jsxs("span",{className:"type-badge",style:{background:m.bg,color:m.color},children:[m.emoji," ",m.label]}),c==="infographic"&&"— Primary",c==="read"&&"— Secondary",c==="video"&&"— Supplement"]},c))})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:qr.map(c=>{var A;const m=r===c.id,u=c.content.map((D,R)=>`${c.id}-${R}`).filter(D=>F.has(D)).length,f=h(c.id),b=((A=c.questions)==null?void 0:A.length)||0;return i.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>x(m?null:c.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:c.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono', monospace"},children:c.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15.5,fontWeight:600},children:c.title}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:2},children:c.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[u,"/",c.content.length]}),i.jsx("span",{className:"arr",style:{transform:m?"rotate(90deg)":"rotate(0)"},children:"›"})]}),m&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsxs("button",{className:`tab-btn ${f==="learn"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"learn"})),children:["📖"," Learn"]}),i.jsxs("button",{className:`tab-btn ${f==="practice"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"practice"})),children:["✏️"," Practice (",b,")"]}),i.jsxs("button",{className:`tab-btn ${f==="deeper"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"deeper"})),children:["🔗"," Go Deeper (",c.resources.length,")"]})]}),f==="learn"&&i.jsx("div",{children:c.content.map((D,R)=>{const y=`${c.id}-${R}`,N=$===y,V=F.has(y);return i.jsxs("div",{style:{borderTop:R>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"block-row",onClick:()=>T(y),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`chk ${V?"done":""}`,onClick:re=>p(y,re),children:V&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:V?"#aaa":"#2a2a2a",textDecoration:V?"line-through":"none",flex:1},children:D.heading}),i.jsx("span",{className:"arr",style:{transform:N?"rotate(90deg)":"rotate(0)"},children:"›"})]}),N&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${c.color}20`,marginLeft:22},children:k(D.body)})]},R)})}),f==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Test your understanding. Type your answer and check, or reveal if you're stuck."}),(c.questions||[]).map((D,R)=>i.jsx(Mh,{q:D.q,a:D.a,hint:D.hint,check:D.check,color:c.color},`${c.id}-q-${R}`))]}),f==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:c.resources.map((D,R)=>{const y=Zc[D.type];return i.jsxs("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:y.bg+"55"},children:[i.jsxs("span",{className:"type-badge",style:{background:y.bg,color:y.color},children:[y.emoji," ",y.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:D.title})]},R)})})]})]})]},c.id)})}),i.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Three tabs per section: Learn (content) ","·"," Practice (questions) ","·"," Go Deeper (resources)"]})]})}const ed={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},zr=[{id:"prp",icon:"📜",color:"#C2410C",title:"Probability Ranking Principle",subtitle:"The theoretical foundation -- why ranking by P(R=1|d,q) is optimal and what assumptions it requires",resources:[{type:"read",title:"Manning et al. -- The Probability Ranking Principle (IIR Ch. 11.3)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/the-probability-ranking-principle-1.html"},{type:"read",title:"Robertson (1977) -- The Probability Ranking Principle in IR",url:"https://doi.org/10.1108/eb026647"},{type:"video",title:"Victor Lavrenko -- Probabilistic Retrieval",url:"https://www.youtube.com/watch?v=_Xg8MmDk1jI"},{type:"read",title:"Stanford CS276 -- Probabilistic IR lecture notes",url:"https://web.stanford.edu/class/cs276/"}],content:[{heading:"Statement of the PRP",body:`The **Probability Ranking Principle** (Robertson, 1977) is the theoretical foundation of probabilistic IR:

> "If a reference retrieval system's response to each request is a ranking of the documents in the collection in order of decreasing probability of relevance to the user who submitted the request, where the probabilities are estimated as accurately as possible on the basis of whatever data have been made available to the system for this purpose, the overall effectiveness of the system to its user will be the best that is obtainable on the basis of those data."

**In plain English**: Rank documents by P(R=1 | d, q) -- the probability that document d is relevant to query q. If you can estimate this probability accurately, this ranking is **optimal** (minimizes expected loss).`},{heading:"Formal Definition and Ranking",body:`Given a query q and document d, rank by:

P(R=1 | d, q)

Documents with higher P(R=1|d,q) should be ranked higher.

In practice, we rank by the **log-odds ratio** (equivalent ranking, easier to compute):

RSV(d, q) = log O(R | d, q) = log [P(R=1|d,q) / P(R=0|d,q)]

Since monotonic transformations preserve ranking order, maximizing RSV produces the same ranking as maximizing P(R=1|d,q).

This is the **Retrieval Status Value** (RSV) -- the fundamental score in probabilistic IR.`},{heading:"Implications and Assumptions",body:`**1. Optimal ranking**: If we could perfectly estimate P(R|d,q), PRP guarantees the best possible ranking.

**2. Independence assumption**: PRP assumes relevance of each document is **independent** of other documents. This is a simplification -- in practice, the 2nd relevant document is less useful if the 1st already answers the question (diminishing returns).

**3. Foundation for all probabilistic models**: PRP is the theoretical justification for:
- Binary Independence Model (BIM)
- BM25
- Language models for IR
- Learning-to-rank approaches

**4. Connection to decision theory**: PRP can be derived from the Bayes decision rule for minimizing expected loss. Ranking by P(R=1|d,q) minimizes the expected number of non-relevant documents shown before relevant ones.

**Limitation**: The PRP says WHAT to optimize (P(R|d,q)) but not HOW to estimate it. The various probabilistic models (BIM, BM25, LM) are different approaches to this estimation problem.`}],questions:[{q:"What key assumption does the Probability Ranking Principle make about documents, and when might this assumption be violated?",a:"The PRP assumes that the relevance of each document is independent of all other documents. This is violated when: (1) Two documents contain nearly identical information -- the second one adds little value if the first was already retrieved (redundancy). (2) Diversity matters -- a good result set should cover different aspects of the query, not repeat the same perspective. (3) Novelty-based ranking -- in session search, documents seen before should be downranked. This has led to research in diversified search (e.g., MMR - Maximal Marginal Relevance) that explicitly models document interdependencies.",hint:"Think about what happens when two documents say exactly the same thing -- is the second one as valuable as the first?",check:l=>{const r=l.toLowerCase();return(r.includes("independen")||r.includes("other document"))&&(r.includes("redundan")||r.includes("divers")||r.includes("duplicate")||r.includes("same"))}}]},{id:"bim",icon:"📊",color:"#7C3AED",title:"Binary Independence Model (BIM)",subtitle:"The foundational probabilistic retrieval model -- binary term representation with independence assumptions",resources:[{type:"read",title:"Manning et al. -- Binary Independence Model (IIR Ch. 11.3)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/the-binary-independence-model-1.html"},{type:"read",title:"Wikipedia -- Binary Independence Model",url:"https://en.wikipedia.org/wiki/Binary_Independence_Model"},{type:"video",title:"Victor Lavrenko -- Binary Independence Model derivation",url:"https://www.youtube.com/watch?v=_Xg8MmDk1jI"},{type:"read",title:"Robertson & Sparck Jones -- Relevance Weighting of Search Terms (1976)",url:"https://doi.org/10.1002/asi.4630270302"}],content:[{heading:"BIM Assumptions",body:`The Binary Independence Model makes two key assumptions:

**1. Binary**: Documents are represented as binary vectors (term present/absent). A document is a vector d = (x1, x2, ..., x_M) where each x_i is 0 or 1. This throws away term frequency information entirely.

**2. Independence**: Terms occur independently of each other given relevance status. Knowing that a relevant document contains "information" tells you nothing about whether it contains "retrieval". This is clearly wrong but makes the math tractable.

**Despite these simplifications**, BIM gives surprisingly good results and forms the theoretical basis for BM25.`},{heading:"BIM Derivation",body:`Start from the odds ratio using Bayes' rule:

O(R | d, q) = [P(d | R=1, q) * P(R=1|q)] / [P(d | R=0, q) * P(R=0|q)]

The prior ratio P(R=1|q)/P(R=0|q) is constant for all documents -- does not affect ranking.

Using binary representation and independence:

P(d | R=1, q) = product over i of P(x_i | R=1, q)

Let:
- **p_i** = P(x_i = 1 | R=1, q) -- probability term i appears in a relevant doc
- **r_i** = P(x_i = 1 | R=0, q) -- probability term i appears in a non-relevant doc

**Retrieval Status Value (RSV)**:

RSV(d, q) = sum over i where x_i=1 AND q_i=1 of: log [p_i * (1 - r_i)] / [(1 - p_i) * r_i]

Only query terms present in the document contribute. Each term's contribution is the **log-odds ratio** of appearing in relevant vs non-relevant documents.`},{heading:"Estimation Without Relevance Data",body:`Without relevance data, we assume:
- p_i = 0.5 (equal chance term appears in relevant doc)
- r_i = df_i / N (approximate from collection statistics)

This gives:

c_i = log [(N - df_i) / df_i]

This is essentially the **IDF** component! The BIM derivation provides a principled probabilistic justification for IDF weighting. What started as a heuristic in TF-IDF turns out to have a deep probabilistic foundation.

**Key insight**: IDF is not just a clever trick -- it is the **optimal term weight** under the binary independence model when no relevance data is available.`},{heading:"Estimation With Relevance Data",body:`Given judged relevant documents:

| | Relevant (R=1) | Non-relevant (R=0) |
|---|:---:|:---:|
| Term i present | s_i | df_i - s_i |
| Term i absent | S - s_i | N - df_i - S + s_i |

Where S = total relevant docs, s_i = relevant docs containing term i.

With **Laplace smoothing** (add 0.5 to avoid zeros):

p_i = (s_i + 0.5) / (S + 1)
r_i = (df_i - s_i + 0.5) / (N - S + 1)

**Example**: N=10,000, df("neural")=200, S=50 relevant docs, s("neural")=30.

p_i = (30 + 0.5) / 51 = 0.598
r_i = (170 + 0.5) / 9951 = 0.01713

c_i = log[0.598 * 0.983 / (0.402 * 0.01713)] = log[85.36] = **4.447**

High weight! "neural" is strongly associated with relevant documents (60% of relevant docs contain it vs only 1.7% of non-relevant docs).`}],questions:[{q:"In BIM without relevance data, why does the term weight reduce to approximately IDF? Show the connection.",a:"Without relevance data, we set p_i = 0.5 for all terms. The BIM weight becomes: c_i = log[p_i(1-r_i)/((1-p_i)r_i)] = log[0.5(1-r_i)/(0.5*r_i)] = log[(1-r_i)/r_i]. With r_i = df_i/N: c_i = log[(1-df_i/N)/(df_i/N)] = log[(N-df_i)/df_i]. This is the probabilistic IDF formula. For rare terms (df_i << N), this approximates log(N/df_i) which is the standard IDF. This shows that IDF is not just a heuristic -- it is the optimal BIM weight when no relevance information is available.",hint:"Substitute p_i = 0.5 into the BIM weight formula and simplify.",check:l=>{const r=l.toLowerCase();return(r.includes("0.5")||r.includes("half"))&&(r.includes("idf")||r.includes("df")||r.includes("log"))}},{q:"What are the two main limitations of BIM that motivated the development of BM25?",a:"(1) Binary term representation: BIM only knows if a term is present or absent, ignoring how many times it appears. A document mentioning 'retrieval' 50 times is treated the same as one mentioning it once. BM25 fixes this by adding term frequency with saturation. (2) No document length normalization: BIM treats all documents equally regardless of length. Long documents are more likely to contain any given term just by chance, biasing BIM toward long documents. BM25 fixes this with the b parameter for length normalization relative to the collection average.",hint:"Think about what information BIM ignores that could improve scoring.",check:l=>{const r=l.toLowerCase();return(r.includes("binary")||r.includes("frequency")||r.includes("how many"))&&(r.includes("length")||r.includes("normali"))}}]},{id:"bm25-prob",icon:"🎯",color:"#059669",title:"BM25 Probabilistic Derivation",subtitle:"How BM25 extends BIM with term frequency saturation and document length normalization",resources:[{type:"read",title:"Robertson & Zaragoza -- The Probabilistic Relevance Framework: BM25 and Beyond",url:"https://www.staff.city.ac.uk/~sbrp622/papers/foundations_bm25_review.pdf"},{type:"read",title:"Wikipedia -- Okapi BM25",url:"https://en.wikipedia.org/wiki/Okapi_BM25"},{type:"video",title:"Victor Lavrenko -- From BIM to BM25",url:"https://www.youtube.com/watch?v=a3sg6MH8m4k"},{type:"read",title:"Manning et al. -- Okapi BM25 (IIR Ch. 11.4.3)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/okapi-bm25-a-non-binary-model-1.html"}],content:[{heading:"From BIM to BM25",body:`BM25 extends the Binary Independence Model in two fundamental ways:

**1. Adds term frequency**: BIM treats terms as present/absent. BM25 incorporates **how many times** a term appears via the saturation function. The 2-Poisson model (Robertson & Walker, 1994) provides the theoretical basis:
- Model TF in relevant documents as Poisson with rate lambda_R
- Model TF in non-relevant documents as Poisson with rate lambda_NR
- The log-odds of relevance given TF leads to a weight function that saturates

**2. Adds document length normalization**: BIM ignores document length. BM25 normalizes by length relative to the collection average via the b parameter.

The "25" in BM25 is literal: it is the **25th "Best Match" formula** experimented with by Robertson and colleagues. BM1, BM11, BM15 were earlier variants. BM25 emerged as the best combination.`},{heading:"Deriving the TF Saturation",body:`Starting from the 2-Poisson model, the saturation function emerges:

w(t, d) = tf(t,d) * (k1 + 1) / (tf(t,d) + k1 * B)

Where B = 1 - b + b * |d|/avgdl.

**Why saturation?** The 2-Poisson model says: seeing a term 1 time is strong evidence it is "about" that topic. Seeing it 10 times is slightly more evidence. Seeing it 100 times adds almost nothing. This diminishing-returns property leads mathematically to a function that approaches a ceiling.

**The ceiling**: As tf -> infinity, w(t,d) -> k1 + 1. With k1 = 1.2, the maximum contribution per term is 2.2, regardless of how many times it appears.

**Connection to BIM**: At k1 = 0, BM25 reduces to BIM (binary, presence/absence only). As k1 increases, term frequency matters more. k1 = 1.2 is the sweet spot balancing frequency signal with saturation.`},{heading:"The Complete BM25 Formula",body:`Combining IDF (from BIM) with TF saturation and length normalization:

BM25(d, q) = sum over t in q of: log[(N-df+0.5)/(df+0.5)] * [tf*(k1+1)] / [tf + k1*(1-b+b*dl/avgdl)]

**IDF component** (Robertson-Sparck Jones):
log[(N - df(t) + 0.5) / (df(t) + 0.5)]

This is the BIM-derived term weight with Laplace smoothing.

**TF saturation component**:
tf * (k1 + 1) / (tf + k1 * B)

This is the 2-Poisson-derived saturation function.

**Length normalization**:
B = 1 - b + b * |d| / avgdl

This is the pivoted length normalization factor.

Each piece has a principled probabilistic derivation. BM25 is not a heuristic -- it is a carefully engineered approximation to the optimal probabilistic ranking.`},{heading:"Historical Context",body:`**Timeline of BM25 development**:

1960s-70s: Maron & Kuhns propose probabilistic retrieval, Robertson formalizes PRP
1976: Robertson & Sparck Jones publish BIM with relevance weighting
1990: Salton introduces pivoted length normalization
1994: Robertson & Walker derive 2-Poisson model for term frequency
1994: BM25 formula published, combining all components
1990s: BM25 wins multiple TREC competitions
2000s: BM25 becomes default in Lucene, Elasticsearch, Solr
2010s: Still competitive against early neural methods
2020s: BM25 remains Stage 1 retriever in modern hybrid pipelines

**Legacy**: BM25 is arguably the most successful algorithm in IR history. It has been the default scoring function for over 25 years and remains irreplaceable in production systems as a fast, robust first-stage retriever.`}],questions:[{q:"Explain why BM25 can be considered both a heuristic and a principled probabilistic model.",a:"BM25 is principled because each component has a probabilistic derivation: the IDF comes from the Binary Independence Model (Bayes' rule under term independence), the TF saturation comes from the 2-Poisson model of term frequency distributions, and the length normalization comes from pivoted document length analysis. However, BM25 is also somewhat heuristic because: (1) the 2-Poisson model is an approximation, not an exact derivation, (2) the specific functional form (rational function for saturation) was chosen partly for convenience, (3) the parameters k1 and b are tuned empirically rather than derived from theory. The 25 in BM25 literally means it was the 25th formula tried -- suggesting empirical experimentation alongside theory.",hint:"Consider the theoretical basis of each component and where empirical choices were made.",check:l=>{const r=l.toLowerCase();return(r.includes("probabilistic")||r.includes("deriv")||r.includes("bim")||r.includes("poisson"))&&(r.includes("heuristic")||r.includes("empiric")||r.includes("tuned")||r.includes("approxim"))}}]},{id:"lm-ir",icon:"📖",color:"#2563EB",title:"Language Models for IR",subtitle:"Ranking by query likelihood -- how likely would each document's language model generate the query?",resources:[{type:"read",title:"Manning et al. -- Language Models for IR (IIR Ch. 12)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/language-models-for-information-retrieval-1.html"},{type:"read",title:"Ponte & Croft -- A Language Modeling Approach to IR (seminal 1998 paper)",url:"https://dl.acm.org/doi/10.1145/290941.291008"},{type:"video",title:"Victor Lavrenko -- Language Models for IR",url:"https://www.youtube.com/watch?v=EIxUqCgZmCo"},{type:"read",title:"Zhai & Lafferty -- A Study of Smoothing Methods for LMs",url:"https://experts.illinois.edu/en/publications/a-study-of-smoothing-methods-for-language-models-applied-to-infor"}],content:[{heading:"Core Idea",body:`The language model approach to IR flips the question:

**Traditional**: "How relevant is document d to query q?"
**Language model**: "How likely is it that the query q was generated by the language model of document d?"

Each document defines a **probability distribution over words** (a unigram language model). We rank documents by the probability they would "generate" the query.

**Intuition**: If a document is about "machine learning", its language model assigns high probability to words like "model", "training", "data". A query containing these words would be "likely" under this document's model, resulting in a high ranking.

This approach was introduced by Ponte & Croft (1998) and became one of the two main paradigms in probabilistic IR (alongside BM25).`},{heading:"Document Language Model",body:`For document d, the **maximum likelihood estimate** (MLE) of its language model is:

P_MLE(w | d) = tf(w, d) / |d|

Where tf(w,d) = count of word w in document d, and |d| = total words in d.

**Example**: Document d = "the cat sat on the mat"

P_MLE("the" | d) = 2/6 = 0.333
P_MLE("cat" | d) = 1/6 = 0.167
P_MLE("sat" | d) = 1/6 = 0.167
P_MLE("dog" | d) = 0/6 = 0.000  <- PROBLEM!

The **zero probability problem**: Any term not in the document gets P = 0. This means if ANY query term is absent from a document, the entire query likelihood becomes zero, killing the ranking. Smoothing is essential to fix this.`},{heading:"Query Likelihood Ranking",body:`Rank documents by the probability of generating the query from the document's language model:

P(q | M_d) = product over w in q of: P(w | M_d)^{c(w,q)}

Where c(w,q) is the count of word w in the query.

Taking the log (for numerical stability):

log P(q | M_d) = sum over w in q of: c(w,q) * log P(w | M_d)

**Ranking**: Higher log P(q | M_d) = better match. Documents whose language models assign high probability to all query terms rank highest.

**Connection to TF-IDF**: Query likelihood naturally captures TF-IDF-like behavior. A term frequent in d has high P(w|d) (like TF). A term rare in the collection gets more "credit" after smoothing (like IDF). But the language model framework provides a cleaner probabilistic foundation.`}],questions:[{q:"Without smoothing, a document containing 'information' (tf=5) and 'retrieval' (tf=3) but not 'system' (tf=0) would get what query likelihood for 'information retrieval system'? Why is this a problem?",a:"P_MLE('information'|d) = 5/|d|, P_MLE('retrieval'|d) = 3/|d|, P_MLE('system'|d) = 0. P(q|d) = (5/|d|) * (3/|d|) * 0 = 0. The entire score is zero! A single missing term makes the document score zero, even though it is clearly relevant for 'information retrieval'. This is the zero-probability problem, and it is why smoothing is essential -- it assigns a small non-zero probability to every term via the collection background model.",hint:"What happens when you multiply any number by zero?",check:l=>{const r=l.toLowerCase();return(r.includes("0")||r.includes("zero"))&&(r.includes("smooth")||r.includes("missing")||r.includes("problem"))}}]},{id:"smoothing",icon:"📊",color:"#DC2626",title:"Smoothing: Jelinek-Mercer vs Dirichlet",subtitle:"Solving the zero-probability problem by mixing document models with collection background models",resources:[{type:"read",title:"Zhai & Lafferty -- A Study of Smoothing Methods (2004)",url:"https://experts.illinois.edu/en/publications/a-study-of-smoothing-methods-for-language-models-applied-to-infor"},{type:"read",title:"Manning et al. -- Smoothing (IIR Ch. 12.2)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/estimating-the-query-generation-probability-1.html"},{type:"video",title:"Victor Lavrenko -- Smoothing for Language Models in IR",url:"https://www.youtube.com/watch?v=XR_4bVqZhzE"},{type:"read",title:"Stanford CS276 -- Language Model IR lecture",url:"https://web.stanford.edu/class/cs276/"}],content:[{heading:"Why Smoothing?",body:`Smoothing mixes the document-specific language model with a **collection-wide background model** to avoid zero probabilities.

**Without smoothing**: P("dog"|d) = 0 if "dog" never appears in d. Any query containing "dog" gets score 0.

**With smoothing**: P("dog"|d) = small but positive (from the collection). The document is not completely ruled out just because one query term is missing.

**Dual role of smoothing in IR**:
1. **Avoid zeros**: Assign non-zero probability to unseen terms
2. **IDF effect**: Smoothing naturally implements IDF-like term weighting. Terms rare in the collection get less smoothing "help" and thus are more discriminative.`},{heading:"Jelinek-Mercer (Linear Interpolation)",body:`**Formula**:

P_JM(w | d) = lambda * P_MLE(w|d) + (1 - lambda) * P(w|C)

Where:
- **lambda** = smoothing parameter (0 < lambda < 1)
- **P_MLE(w|d)** = tf(w,d) / |d| (document estimate)
- **P(w|C)** = cf(w) / |C| (collection background model)

**Properties**:
- Same lambda for all documents regardless of length
- Short documents get the same smoothing as long documents
- Best for **long/verbose queries** (lambda = 0.1 works well for short queries, 0.7 for long queries)
- Theoretical basis: maximum entropy

**Example** (lambda = 0.3, |d| = 200):
P_JM("retrieval"|d) = 0.3 * (3/200) + 0.7 * 0.0005 = 0.0045 + 0.00035 = 0.00485
P_JM("unknown"|d)   = 0.3 * (0/200) + 0.7 * 0.002  = 0 + 0.0014 = 0.00140`},{heading:"Dirichlet Prior Smoothing",body:`**Formula**:

P_Dir(w | d) = [tf(w,d) + mu * P(w|C)] / [|d| + mu]

Where mu = Dirichlet prior parameter (pseudo-count), typically 1000-10000 (default: 2000).

**Key property -- document-length-dependent smoothing**:

P_Dir(w|d) = [|d| / (|d| + mu)] * P_MLE(w|d) + [mu / (|d| + mu)] * P(w|C)

This is JM with a **document-length-dependent** lambda:
- lambda_d = |d| / (|d| + mu)

**Short documents** (|d| << mu): rely more on collection model (heavy smoothing)
**Long documents** (|d| >> mu): rely more on their own model (light smoothing)

This is natural and desirable: short documents have sparse statistics, so we trust the collection more. Long documents have rich statistics, so we trust the document itself more.

**Best for short keyword queries** (mu = 2000 is a common default).`},{heading:"JM vs Dirichlet Comparison",body:`| Property | Jelinek-Mercer | Dirichlet Prior |
|---|:---:|:---:|
| Formula | lambda*P(w|d) + (1-lambda)*P(w|C) | (tf + mu*P(w|C)) / (|d| + mu) |
| Parameter | lambda (fixed interpolation) | mu (pseudo-count prior) |
| Length dependence | No (same lambda for all) | Yes (adapts to doc length) |
| Best for | Long verbose queries | Short keyword queries |
| Typical value | lambda = 0.1 to 0.7 | mu = 2000 |
| Theoretical basis | Maximum entropy | Bayesian prior |

**Worked comparison** (P("retrieval"|C) = 0.0005, P("info"|C) = 0.002):

**Doc A**: 20 words, tf("query")=1
JM (lambda=0.5):  0.5*(1/20) + 0.5*0.001 = **0.0255**
Dirichlet (mu=2000): (1+2) / (20+2000) = 3/2020 = **0.00149**

**Doc B**: 2000 words, tf("query")=10
JM (lambda=0.5):  0.5*(10/2000) + 0.5*0.001 = **0.0030**
Dirichlet (mu=2000): (10+2) / (2000+2000) = 12/4000 = **0.00300**

JM strongly favors short Doc A (0.0255 vs 0.0030). Dirichlet gives Doc B a **higher** score (0.003 vs 0.00149) because it distrusts the sparse statistics of the short document. Dirichlet's behavior is more principled.`}],questions:[{q:"Document d has 100 words. Term 'search' appears 5 times. Collection has 1M total words with 'search' appearing 2000 times. Compute P('search'|d) using Dirichlet smoothing with mu=2000.",a:"P('search'|C) = 2000/1,000,000 = 0.002. P_Dir('search'|d) = (5 + 2000*0.002) / (100 + 2000) = (5 + 4) / 2100 = 9/2100 = 0.00429. The smoothed probability (0.00429) is between the MLE (5/100=0.05) and collection (0.002), pulled toward the collection because mu=2000 is much larger than |d|=100.",hint:"P_Dir = (tf + mu*P(w|C)) / (|d| + mu). Compute P(w|C) first.",check:l=>{const r=l.toLowerCase();return r.includes("0.00429")||r.includes("0.0043")||r.includes("9/2100")}},{q:"Why does Dirichlet smoothing naturally implement IDF-like term discrimination?",a:"Dirichlet smoothing adds mu*P(w|C) to each term's count. Common words (high P(w|C)) get a large pseudo-count added, so their smoothed probability is dominated by the collection background. Rare words (low P(w|C)) get a small pseudo-count, so their smoothed probability is driven more by their actual document frequency. This means: a rare term present in a document gets much more 'credit' (higher probability ratio vs background) than a common term -- exactly the IDF effect. The smoothing parameter mu controls how strongly this IDF-like effect operates.",hint:"Think about what mu*P(w|C) adds for common vs rare words, and how that affects the ratio P(w|d)/P(w|C).",check:l=>{const r=l.toLowerCase();return(r.includes("common")||r.includes("rare")||r.includes("background"))&&(r.includes("idf")||r.includes("discriminat")||r.includes("credit")||r.includes("ratio"))}}]},{id:"kl-div",icon:"📏",color:"#0891B2",title:"KL-Divergence Retrieval",subtitle:"Ranking by the divergence between query and document language models -- a unifying framework for IR",resources:[{type:"read",title:"Lafferty & Zhai -- Document Language Models, Query Models, and Risk Minimization (2001)",url:"https://dl.acm.org/doi/10.1145/383952.384019"},{type:"read",title:"Manning et al. -- KL-divergence for IR (IIR Ch. 12.4)",url:"https://nlp.stanford.edu/IR-book/html/htmledition/extended-language-modeling-approaches-1.html"},{type:"video",title:"Victor Lavrenko -- KL-divergence retrieval model",url:"https://www.youtube.com/watch?v=EIxUqCgZmCo"},{type:"read",title:"Wikipedia -- Kullback-Leibler divergence",url:"https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence"}],content:[{heading:"KL-Divergence for Ranking",body:`Rank documents by the **KL-divergence** between the query language model and the document language model:

KL(theta_q || theta_d) = sum over w of: P(w|theta_q) * log[P(w|theta_q) / P(w|theta_d)]

Where theta_q = query language model, theta_d = document language model (smoothed).

**Ranking**: Documents with **lower** KL-divergence (more similar language models) rank higher. Equivalently, rank by negative KL-divergence:

score(d, q) = -KL(theta_q || theta_d)

Since the query entropy term is constant across documents, this simplifies to:

score(d, q) = sum over w of: P(w|theta_q) * log P(w|theta_d)

Which is exactly the **query likelihood** model! KL-divergence generalizes query likelihood.`},{heading:"Why KL-Divergence Matters",body:`**1. Unifying framework**: Query likelihood is a special case of KL-divergence where the query model is the MLE from the query text. This provides a single theoretical framework that encompasses multiple retrieval approaches.

**2. Natural support for feedback**: After obtaining relevance information, update theta_q (the query model) and re-rank. This is exactly what **RM3** does -- it updates the query language model using feedback documents, then re-ranks using the updated KL-divergence.

**3. Symmetric extension**: While KL-divergence is asymmetric (KL(q||d) != KL(d||q)), the framework naturally supports both directions:
- KL(q||d): "How well does the document model explain the query?" (standard)
- KL(d||q): "How well does the query model explain the document?" (less common)

**4. Connection to cross-entropy**: Minimizing KL-divergence is equivalent to minimizing cross-entropy between query and document models, linking IR to information theory.`},{heading:"Connection to Modern Neural IR",body:`The bridge from classical to neural retrieval:

| Classical Concept | Neural Analog |
|---|---|
| TF-IDF/BM25 term weights | Learned token importance (attention) |
| Document language model | Neural document encoder (BERT) |
| Query likelihood P(q|d) | Cross-encoder score: BERT([q; d]) |
| Smoothing with collection LM | Pre-training on large corpus |
| Cosine similarity (VSM) | Dense retriever: cos(encode(q), encode(d)) |
| BIM independence assumption | Dropped -- neural models capture dependencies |
| Rocchio relevance feedback | Contrastive learning from pos/neg examples |
| RM3 query expansion | HyDE, learned expansion, prompt-based |

**Modern hybrid architecture** (2024-2026):
Stage 1: BM25 / sparse retrieval (fast, recall-oriented) -> top-1000
Stage 2: Dense bi-encoder retrieval -> merge with BM25
Stage 3: Cross-encoder reranker (BERT) -> re-rank top-100
Stage 4: LLM-based refinement (optional) -> listwise reranking

BM25 and language models remain critical in Stage 1 because they are **fast, interpretable, and provide strong baselines** that neural models must beat.`}],questions:[{q:"How does the KL-divergence framework simplify to query likelihood? Show the key step.",a:"KL(theta_q || theta_d) = sum_w P(w|theta_q) * log[P(w|theta_q)/P(w|theta_d)] = sum_w P(w|theta_q)*log P(w|theta_q) - sum_w P(w|theta_q)*log P(w|theta_d). The first term is the negative entropy of the query model, which is CONSTANT across all documents (it depends only on the query, not the document). For ranking, we can ignore it. The ranking-relevant part is: -sum_w P(w|theta_q)*log P(w|theta_d), which is the cross-entropy. Maximizing this (equivalently, maximizing sum_w P(w|theta_q)*log P(w|theta_d)) is exactly query likelihood ranking.",hint:"Expand the log ratio and identify which terms are constant across documents.",check:l=>{const r=l.toLowerCase();return(r.includes("constant")||r.includes("entropy")||r.includes("ignore"))&&(r.includes("query")||r.includes("document")||r.includes("likelihood"))}},{q:"Name three advantages of BM25 over neural dense retrieval, and three advantages of neural retrieval over BM25.",a:"BM25 advantages: (1) Speed -- no GPU needed, pure inverted index operations, sub-millisecond latency. (2) Interpretability -- can explain exactly why each term contributed to the score. (3) Zero-shot robustness -- works out-of-the-box without training data; BEIR benchmark shows BM25 is competitive zero-shot. Neural advantages: (1) Semantic matching -- 'car' matches 'automobile' without explicit synonyms. (2) Contextualization -- handles polysemy ('bank' near 'river' vs 'bank' near 'money' produces different representations). (3) Learned relevance -- trained on millions of query-document pairs, captures complex patterns humans cannot manually encode.",hint:"Think about speed, interpretability, and generalization for BM25; semantics, context, and learning for neural.",check:l=>{const r=l.toLowerCase();return(r.includes("speed")||r.includes("fast")||r.includes("interpret"))&&(r.includes("semantic")||r.includes("meaning")||r.includes("context"))}}]}];function Bh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")},T=()=>M("revealed"),p=()=>{var h;M("idle"),_(""),(h=j.current)==null||h.focus()};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:i.jsx("textarea",{ref:j,value:F,onChange:h=>_(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{flex:1,minWidth:200,padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans', sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",transition:"border 0.2s"}})}),v==="wrong"&&i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#DC2626",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:14},children:"✗"})," Not quite right. Try again or reveal the answer."]}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsxs("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:600,transition:"opacity 0.2s",opacity:F.trim()?1:.4},children:["✓"," Check Answer"]}),i.jsxs("button",{onClick:T,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal Answer"]}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsxs("summary",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#aaa",cursor:"pointer",userSelect:"none"},children:["💡"," Hint"]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:16},children:"✓"})," Correct!"]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[i.jsx("span",{style:{fontSize:14},children:"📖"})," Answer"]}),i.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888"},children:"Try it myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Ih({embedded:l=!1}){const[r,x]=z.useState(null),[$,L]=z.useState(null),[F,_]=z.useState(new Set),[v,M]=z.useState({}),j=zr.reduce((c,m)=>c+m.content.length,0),q=Math.round(F.size/j*100),T=c=>L($===c?null:c),p=(c,m)=>{m.stopPropagation();const C=new Set(F);C.has(c)?C.delete(c):C.add(c),_(C)},h=c=>v[c]||"learn",k=c=>c.split(`
`).map((m,C)=>{var D,R;const u=m,f=u.startsWith("import ")||u.startsWith("from ")||u.startsWith("def ")||u.startsWith("    ")||u.startsWith("P_")||u.startsWith("P(")||u.startsWith("O(")||u.startsWith("RSV")||u.startsWith("BM25")||u.startsWith("score")||u.startsWith("log")||u.startsWith("KL")||u.startsWith("c_i")||u.startsWith("p_i")||u.startsWith("r_i")||u.startsWith("w(")||u.startsWith("lambda")||u.startsWith("# ")||u.startsWith("Stage"),b=u.startsWith("import ")||u.startsWith("def ")||u.startsWith("# ")||u.startsWith("P_MLE")||u.startsWith("P_JM")||u.startsWith("P_Dir")||u.startsWith("RSV")||u.startsWith("BM25")||u.startsWith("KL")||u.startsWith("O(")||u.startsWith("score")||u.startsWith("Stage 1");if(f)return i.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:b?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:b?"6px 6px 0 0":0,marginTop:b?10:0},children:u},C);if(u==="")return i.jsx("div",{style:{height:8}},C);if(u.startsWith("|")){const y=u.split("|").filter(V=>V.trim()!=="");if(y.every(V=>/^[\s-:]+$/.test(V)))return null;const N=C<c.split(`
`).length-1&&((D=c.split(`
`)[C+1])==null?void 0:D.trim().startsWith("|"))&&/^[\s|:-]+$/.test((R=c.split(`
`)[C+1])==null?void 0:R.trim());return i.jsx("div",{style:{display:"flex",gap:0,fontFamily:"'DM Sans', sans-serif",fontSize:12,borderBottom:"1px solid #E5E2D9"},children:y.map((V,re)=>{const fe=V.trim().split(/\*\*(.*?)\*\*/g);return i.jsx("div",{style:{flex:1,padding:"6px 10px",fontWeight:N?600:400,color:N?"#1a1a1a":"#444",background:N?"#FAF9F6":"transparent",minWidth:0},children:fe.map((ve,ge)=>ge%2===1?i.jsx("strong",{children:ve},ge):i.jsx("span",{children:ve},ge))},re)})},C)}const A=u.split(/\*\*(.*?)\*\*/g);return i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:A.map((y,N)=>N%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:y},N):i.jsx("span",{children:y},N))},C)});return i.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:`@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
.sec-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
.sec-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.06); }
.block-row { transition: all 0.2s ease; cursor: pointer; border-radius: 8px; }
.block-row:hover { background: rgba(0,0,0,0.02); }
.chk { width: 20px; height: 20px; border-radius: 5px; border: 2px solid #ccc; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; flex-shrink: 0; background: white; font-size: 11px; }
.chk.done { background: #059669; border-color: #059669; color: white; }
.arr { transition: transform 0.25s ease; font-size: 16px; color: #aaa; }
.pfill { transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }
.tab-btn { padding: 8px 14px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; border: none; cursor: pointer; border-radius: 6px 6px 0 0; transition: all 0.2s; white-space: nowrap; }
.tab-btn.active { background: white; color: #1a1a1a; box-shadow: 0 -2px 8px rgba(0,0,0,0.04); }
.tab-btn:not(.active) { background: transparent; color: #888; }
.tab-btn:not(.active):hover { color: #555; }
.res-link { display: flex; align-items: center; gap: 10px; padding: 9px 14px; border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; border: 1px solid transparent; }
.res-link:hover { border-color: rgba(0,0,0,0.08); transform: translateX(3px); }
.type-badge { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 500; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.4px; white-space: nowrap; }
textarea:focus { border-color: #4338CA !important; }`}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),i.jsx("h1",{style:{fontSize:"clamp(30px, 5vw, 44px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Probabilistic & Language Model IR"}),i.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:24},children:["Learn, practice, go deeper. ",zr.length," sections ","·"," ",j," concepts ","·"," ",zr.reduce((c,m)=>{var C;return c+(((C=m.questions)==null?void 0:C.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pfill",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #4338CA, #581C87)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[F.size,"/",j]})]}),i.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(ed).map(([c,m])=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#777"},children:[i.jsxs("span",{className:"type-badge",style:{background:m.bg,color:m.color},children:[m.emoji," ",m.label]}),c==="infographic"&&"— Primary",c==="read"&&"— Secondary",c==="video"&&"— Supplement"]},c))})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:zr.map(c=>{var A;const m=r===c.id,u=c.content.map((D,R)=>`${c.id}-${R}`).filter(D=>F.has(D)).length,f=h(c.id),b=((A=c.questions)==null?void 0:A.length)||0;return i.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>x(m?null:c.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:c.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono', monospace"},children:c.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15.5,fontWeight:600},children:c.title}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:2},children:c.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[u,"/",c.content.length]}),i.jsx("span",{className:"arr",style:{transform:m?"rotate(90deg)":"rotate(0)"},children:"›"})]}),m&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsxs("button",{className:`tab-btn ${f==="learn"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"learn"})),children:["📖"," Learn"]}),i.jsxs("button",{className:`tab-btn ${f==="practice"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"practice"})),children:["✏️"," Practice (",b,")"]}),i.jsxs("button",{className:`tab-btn ${f==="deeper"?"active":""}`,onClick:()=>M(D=>({...D,[c.id]:"deeper"})),children:["🔗"," Go Deeper (",c.resources.length,")"]})]}),f==="learn"&&i.jsx("div",{children:c.content.map((D,R)=>{const y=`${c.id}-${R}`,N=$===y,V=F.has(y);return i.jsxs("div",{style:{borderTop:R>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"block-row",onClick:()=>T(y),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`chk ${V?"done":""}`,onClick:re=>p(y,re),children:V&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:V?"#aaa":"#2a2a2a",textDecoration:V?"line-through":"none",flex:1},children:D.heading}),i.jsx("span",{className:"arr",style:{transform:N?"rotate(90deg)":"rotate(0)"},children:"›"})]}),N&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${c.color}20`,marginLeft:22},children:k(D.body)})]},R)})}),f==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Test your understanding. Type your answer and check, or reveal if you're stuck."}),(c.questions||[]).map((D,R)=>i.jsx(Bh,{q:D.q,a:D.a,hint:D.hint,check:D.check,color:c.color},`${c.id}-q-${R}`))]}),f==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:c.resources.map((D,R)=>{const y=ed[D.type];return i.jsxs("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:y.bg+"55"},children:[i.jsxs("span",{className:"type-badge",style:{background:y.bg,color:y.color},children:[y.emoji," ",y.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:D.title})]},R)})})]})]})]},c.id)})}),i.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Three tabs per section: Learn (content) ","·"," Practice (questions) ","·"," Go Deeper (resources)"]})]})}const Eh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Nr=[{id:"naive-bayes",icon:"📧",color:"#C2410C",title:"Naive Bayes Classification",subtitle:"Bayes' theorem with conditional independence -- the fast, surprisingly effective text classifier",resources:[{type:"read",title:"Manning, Raghavan & Schutze -- IIR Chapter 13: Text Classification",url:"https://nlp.stanford.edu/IR-book/html/htmledition/text-classification-and-naive-bayes-1.html"},{type:"read",title:"Jurafsky & Martin -- Naive Bayes and Sentiment Classification",url:"https://web.stanford.edu/~jurafsky/slp3/4.pdf"},{type:"read",title:"Paul Graham -- A Plan for Spam (2002)",url:"http://www.paulgraham.com/spam.html"},{type:"video",title:"StatQuest -- Naive Bayes Clearly Explained",url:"https://www.youtube.com/watch?v=O2L2Uv9pdDA"},{type:"video",title:"Stanford CS124 -- Text Classification with Naive Bayes",url:"https://www.youtube.com/watch?v=Z2-dg10bvKY"}],content:[{heading:"Bayes' Theorem for Documents",body:`**Naive Bayes applies Bayes' theorem to classify documents** by computing the posterior probability of each class given the document's words.

For a document d with words w_1, w_2, ..., w_n:

**P(c | d) ∝ P(c) × ∏ P(w_i | c)**

We classify by choosing the class with maximum posterior probability. In **log-space** (to avoid underflow from multiplying small probabilities):

**c* = argmax_c [ log P(c) + ∑ log P(w_i | c) ]**

**Two variants for text:**

| Variant | Model | Feature |
|---|---|---|
| **Multinomial NB** | Bag of word counts | P(w_i \\| c) = count of w_i in class c / total words in class c |
| **Bernoulli NB** | Binary vector (word present/absent) | P(w_i \\| c) = fraction of docs in c containing w_i |

Multinomial NB is generally preferred for longer documents; Bernoulli NB can work better for short texts.`},{heading:"Parameter Estimation",body:`**Training is just counting:**

**Prior**: P(c) = N_c / N (fraction of training docs in class c)
**Likelihood**: P(w | c) = count(w, c) / ∑_{w'} count(w', c)

**Why it works for text:**
1. **High-dimensional sparse data** -- thousands of features (words), most zero. NB handles this naturally because each P(w|c) is estimated independently.
2. **Conditional independence is approximately okay** -- while word co-occurrences exist, the argmax decision is often correct even if probability magnitudes are wrong.
3. **Small training sets** -- with V parameters per class, NB needs far fewer examples than models with V^2 parameters.
4. **Linear classifier in log-space** -- the log-posterior is a linear function of word counts.`},{heading:"Laplace Smoothing",body:`**Problem**: If word w never appears in class c's training data, P(w|c) = 0, which zeros out the entire product.

**Solution -- Add-alpha (Laplace) smoothing**:

**P(w | c) = (count(w, c) + α) / (∑_{w'} count(w', c) + α × |V|)**

Where α = 1 is Laplace smoothing, |V| = vocabulary size.

**Worked Example**:
- Class "sports": 1000 total word tokens, vocabulary |V| = 5000
- Word "goal" appears 50 times in sports
- Word "blockchain" appears 0 times in sports

Without smoothing:
P("goal" | sports) = 50/1000 = 0.050
P("blockchain" | sports) = 0/1000 = **0.000 -- PROBLEM!**

With Laplace smoothing (α = 1):
P("goal" | sports) = 51/6000 = 0.0085
P("blockchain" | sports) = 1/6000 = **0.000167 -- no longer zero**`},{heading:"Spam Filtering -- A Classic Application",body:`**Spam filtering** was one of the earliest and most successful applications of Naive Bayes. Paul Graham's "A Plan for Spam" (2002) popularized Bayesian spam filtering.

**Worked example**:

Training: P(spam) = 0.4, P(ham) = 0.6
P("buy" | spam) = 0.08, P("buy" | ham) = 0.005
P("cheap" | spam) = 0.05, P("cheap" | ham) = 0.001

Email: "buy cheap"
P(spam | email) ∝ 0.4 × 0.08 × 0.05 = **0.0016**
P(ham | email) ∝ 0.6 × 0.005 × 0.001 = **0.000003**

→ Classified as **spam** (0.0016 >> 0.000003)

**Features used in practice**: word unigrams/bigrams, presence of URLs, ALL CAPS ratio, HTML tags, sender reputation.

| Approach | Accuracy (Movie Reviews) |
|---|---|
| Naive Bayes (unigrams) | ~81% |
| SVM (unigrams + bigrams) | ~87% |
| BERT fine-tuned | ~95% |`}],questions:[{q:"Given P(spam)=0.3, P(ham)=0.7, P(free|spam)=0.10, P(free|ham)=0.01, P(money|spam)=0.08, P(money|ham)=0.005. Classify the email 'free money'. What is the normalized probability of spam?",a:"P(spam|email) is proportional to P(spam) x P(free|spam) x P(money|spam) = 0.3 x 0.10 x 0.08 = 0.0024. P(ham|email) is proportional to P(ham) x P(free|ham) x P(money|ham) = 0.7 x 0.01 x 0.005 = 0.000035. Normalized: P(spam) = 0.0024 / (0.0024 + 0.000035) = 0.986. The email is classified as SPAM with 98.6% probability.",hint:"Multiply prior times the product of likelihoods for each class, then normalize so they sum to 1.",check:l=>{const r=l.toLowerCase();return(r.includes("0.98")||r.includes("98.6")||r.includes("spam"))&&(r.includes("0.0024")||r.includes("normalize")||r.includes("prior"))}},{q:"Why does Laplace smoothing add alpha to BOTH the numerator and alpha*|V| to the denominator? Why not just add alpha to the numerator?",a:"Adding alpha to just the numerator would change the probability distribution so it no longer sums to 1 across all words. By adding alpha*|V| to the denominator (where |V| is vocabulary size), we ensure that the sum of P(w|c) across all words still equals 1. Each of the |V| words gets alpha added in the numerator, so the total added to the numerator is alpha*|V|, which must be reflected in the denominator. This preserves the valid probability distribution while eliminating zero probabilities.",hint:"Think about what happens to the sum of all word probabilities in a class.",check:l=>{const r=l.toLowerCase();return(r.includes("sum")||r.includes("distribut")||r.includes("normalize"))&&(r.includes("vocabular")||r.includes("|v|")||r.includes("all words"))}}]},{id:"vector-space",icon:"📍",color:"#7C3AED",title:"Vector Space Classifiers",subtitle:"Rocchio nearest-centroid and k-NN -- geometry-based classification in TF-IDF space",resources:[{type:"read",title:"Manning, Raghavan & Schutze -- IIR Chapter 14: Vector Space Classification",url:"https://nlp.stanford.edu/IR-book/html/htmledition/vector-space-classification-1.html"},{type:"read",title:"scikit-learn -- Nearest Centroid Classifier",url:"https://scikit-learn.org/stable/modules/neighbors.html#nearest-centroid-classifier"},{type:"video",title:"Victor Lavrenko -- Rocchio Classification",url:"https://www.youtube.com/watch?v=53nHFKCpqRA"},{type:"video",title:"StatQuest -- K-Nearest Neighbors Clearly Explained",url:"https://www.youtube.com/watch?v=HVXime0nQeI"}],content:[{heading:"Rocchio Classifier (Nearest Centroid)",body:`**Rocchio adapts relevance feedback for classification.** Each class is represented by a single centroid vector.

**Training -- Compute centroids**:
μ_c = (1 / |D_c|) × ∑_{d ∈ D_c} v(d)

Where v(d) is the TF-IDF vector of document d, and D_c is the set of training documents in class c.

**Classification**:
c* = argmax_c cos(v(d), μ_c)

**Worked Example** (simplified 3D):
d1 = [0.8, 0.1, 0.0] (sports), d2 = [0.7, 0.2, 0.1] (sports), d3 = [0.1, 0.8, 0.7] (politics)

μ_sports = [0.75, 0.15, 0.05]
μ_politics = [0.1, 0.8, 0.7]

New document d_new = [0.6, 0.3, 0.1]:
dist(d_new, μ_sports) = 0.218
dist(d_new, μ_politics) = 0.927
→ Classify as **"sports"** (closer centroid)

**Advantages**: O(|C| × M_a) testing -- very fast.
**Limitations**: Assumes classes form convex, roughly spherical clusters. Fails on multimodal classes.`},{heading:"k-Nearest Neighbors (k-NN)",body:`**k-NN is a non-parametric, instance-based classifier:**

1. Compute similarity between test document and **all** training documents
2. Select the k most similar training documents
3. Assign the majority class among those k neighbors

**Weighted variant** -- weight votes by similarity:
c* = argmax_c ∑_{d ∈ kNN(d_test)} sim(d_test, d) × 1[label(d) = c]

| Property | Rocchio | k-NN |
|---|---|---|
| Decision boundary | Linear (hyperplane) | Non-linear, arbitrary |
| Training time | O(N) -- compute centroids | O(1) -- store all examples |
| Classification time | O(C) -- compare to C centroids | O(N) -- compare to all examples |
| Handles multimodal classes | No | Yes |
| Sensitivity to outliers | Centroids average out outliers | Sensitive if k is small |
| Typical k value | N/A | k = 3, 5, or √N |`},{heading:"Decision Boundaries Compared",body:`**The geometry of classification decisions differs fundamentally between methods:**

**Rocchio** draws a hyperplane equidistant from two centroids:
w^T x = b where w = μ_1 - μ_2

This is a **linear** boundary. If a class has two distinct subclusters (e.g., "vehicles" with cars and boats), Rocchio's single centroid falls in the empty space between them.

**k-NN** creates an **arbitrary, non-linear** boundary shaped by local data density. It naturally handles multimodal distributions because it looks at individual neighbors, not averages.

**When to choose Rocchio**: very large datasets where k-NN's O(N) query time is prohibitive, or when classes are known to be unimodal.

**When to choose k-NN**: classes have complex shapes, training data has subclusters, or you need high accuracy and can afford slower classification.`}],questions:[{q:"A class 'vehicles' contains documents about cars and documents about boats. Explain why Rocchio would fail on this class but k-NN would succeed.",a:"Rocchio computes a single centroid for 'vehicles' by averaging all car and boat document vectors. This centroid falls in the empty space between the car cluster and the boat cluster -- a region where no actual vehicle documents exist. New car documents close to the car cluster might be closer to another class's centroid than to the vehicles centroid. k-NN succeeds because it uses individual training examples as reference points, not averages. A new car document would find its k nearest neighbors among the car documents, correctly classifying it as 'vehicles' regardless of the boat subcluster's location.",hint:"Think about what happens when you average vectors from two very different clusters.",check:l=>{const r=l.toLowerCase();return(r.includes("centroid")||r.includes("average"))&&(r.includes("between")||r.includes("empty")||r.includes("middle")||r.includes("subcluster"))}}]},{id:"svm",icon:"⚔",color:"#2563EB",title:"SVMs for Text Classification",subtitle:"Maximum-margin classifiers that dominated text classification from 2000 to 2015",resources:[{type:"read",title:"Manning, Raghavan & Schutze -- IIR Chapter 15: Support Vector Machines",url:"https://nlp.stanford.edu/IR-book/html/htmledition/support-vector-machines-and-machine-learning-on-documents-1.html"},{type:"read",title:"Joachims -- Text Categorization with SVMs (1998)",url:"https://link.springer.com/chapter/10.1007/BFb0026683"},{type:"read",title:"scikit-learn -- SVM Guide",url:"https://scikit-learn.org/stable/modules/svm.html"},{type:"video",title:"MIT 6.034 -- Support Vector Machines",url:"https://www.youtube.com/watch?v=_PwhiWxHK8o"}],content:[{heading:"Why SVMs Dominated Text (2000-2015)",body:`**SVMs were the gold standard for text classification** for over a decade. Key reasons:

1. **High-dimensional data**: Text features (words/n-grams) create vectors with 10,000-100,000+ dimensions. SVMs handle this natively because they maximize the margin.
2. **Sparse data**: Most words are absent from any given document. SVMs work directly with sparse representations.
3. **Linear separability**: In high dimensions, data tends to be linearly separable. A linear SVM suffices.
4. **Theoretical guarantees**: SVM generalization bounds depend on the **margin**, not the dimensionality.
5. **Small sample performance**: Maximizing the margin makes effective use of limited training data.`},{heading:"The Algorithm",body:`**Soft-margin SVM** (with slack variables ξ_i):

minimize: (1/2) ||w||^2 + C × ∑ ξ_i
subject to: y_i (w · x_i + b) ≥ 1 - ξ_i, ξ_i ≥ 0

Where C controls the trade-off between maximizing margin and minimizing training error.

**Decision function**: f(x) = sign(w · x + b)
**The margin** = 2 / ||w|| -- SVMs maximize this.

**For text, the linear kernel K(x_i, x_j) = x_i · x_j is almost always sufficient** because data is already high-dimensional. Linear SVMs train in O(N) with SGD or LIBLINEAR, vs O(N^2)-O(N^3) for non-linear kernels.`},{heading:"Multi-class SVMs",body:`**SVMs are inherently binary.** For C classes:

**One-vs-Rest (OVR)**: Train C classifiers, each separating one class from the rest. Classify by the classifier with highest confidence.

**One-vs-One (OVO)**: Train C(C-1)/2 classifiers. Classify by majority vote.

| Method | # Classifiers | Training Cost | Best For |
|---|---|---|---|
| OVR | C | Faster | Large C |
| OVO | C(C-1)/2 | Slower total but smaller problems | Small C |

**When to prefer NB over SVM**: Very small training data (< 100 per class), need for probability calibration, incremental learning needed, or multi-label classification.`}],questions:[{q:"Why does the linear kernel work so well for text, while images typically need non-linear kernels (RBF/polynomial)?",a:"Text is naturally high-dimensional (10K-100K dimensions for word features) and sparse. In such high-dimensional spaces, data points are far apart and tend to be linearly separable -- there's enough room to find a separating hyperplane. Images are lower-dimensional (e.g., 784 for 28x28 MNIST), dense, and the decision boundaries between classes are inherently non-linear (rotations, translations, deformations). Non-linear kernels project images into even higher dimensions where linear separation becomes possible, but text is already there.",hint:"Think about the dimensionality and sparsity of the feature spaces.",check:l=>{const r=l.toLowerCase();return(r.includes("high-dim")||r.includes("high dim")||r.includes("dimensional"))&&(r.includes("sparse")||r.includes("linear")||r.includes("separab"))}}]},{id:"features",icon:"🔧",color:"#059669",title:"Feature Engineering for Text",subtitle:"N-grams, TF-IDF weighting, feature selection -- the building blocks of text representation",resources:[{type:"read",title:"Manning, Raghavan & Schutze -- IIR Chapter 6: Scoring and Term Weighting",url:"https://nlp.stanford.edu/IR-book/html/htmledition/scoring-term-weighting-and-the-vector-space-model-1.html"},{type:"read",title:"scikit-learn -- Text Feature Extraction",url:"https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction"},{type:"video",title:"Normalized Nerd -- TF-IDF Explained",url:"https://www.youtube.com/watch?v=D2V1okCEsiE"},{type:"read",title:"Jurafsky & Martin -- Vector Semantics and Embeddings",url:"https://web.stanford.edu/~jurafsky/slp3/6.pdf"}],content:[{heading:"N-grams",body:`**An n-gram is a contiguous sequence of n tokens** from text.

| Type | n | Example ("the cat sat on the mat") |
|---|---|---|
| Unigrams | 1 | "the", "cat", "sat", "on", "the", "mat" |
| Bigrams | 2 | "the cat", "cat sat", "sat on", "on the", "the mat" |
| Trigrams | 3 | "the cat sat", "cat sat on", "sat on the", "on the mat" |

**Trade-offs**:

| Property | Unigrams | Bigrams | Trigrams |
|---|---|---|---|
| Vocabulary size | ~50K | ~500K | ~5M |
| Sparsity | Low | High | Very high |
| Captures word order | No | Partially | Better |
| Typical use | Baseline | Common | Rare (overfitting risk) |

**Character n-grams** handle misspellings, morphologically rich languages, and language identification. "hello" → char trigrams: "hel", "ell", "llo".`},{heading:"TF-IDF Features",body:`**The standard feature weighting for text classification:**

**TF-IDF(t, d) = TF(t, d) × IDF(t)**

TF(t, d) = log(1 + count(t, d)) -- sublinear TF
IDF(t) = log(N / df(t)) -- inverse document frequency

Where N = total documents, df(t) = number of documents containing term t.

**Feature vector construction**:
1. Tokenize documents
2. Build vocabulary (optionally prune by min_df, max_df)
3. Compute TF-IDF for each (term, document) pair
4. L2-normalize vectors: v(d) = v(d) / ||v(d)||

**Feature selection methods**:

| Method | Formula | Use Case |
|---|---|---|
| **Chi-squared** | χ^2 = ∑ (O - E)^2 / E | Statistical test of word-class independence |
| **Mutual Information** | MI(w, c) = log P(w,c) / (P(w)P(c)) | Information-theoretic measure |
| **Document Frequency** | Remove words with df < threshold | Simple, effective baseline |
| **L1 regularization** | Built into SVM/logistic regression | Automatic feature selection |`},{heading:"From Bag-of-Words to Embeddings",body:`**Classical methods lose word order and context.** The evolution:

| Aspect | Classical (NB/SVM) | BERT Fine-Tuned | Sentence Transformers |
|---|---|---|---|
| Features | Manual (TF-IDF, n-grams) | Learned (contextual) | Pre-computed embeddings |
| Context | None (bag-of-words) | Full bidirectional | Full bidirectional |
| Training data needed | 100s-1000s | 1000s | 0 (zero-shot) to 100s |
| Inference speed | ~1μs per doc | ~10ms per doc | ~1ms per doc |
| Accuracy (sentiment) | ~87% (SVM) | ~95% | ~92% (zero-shot) |
| Interpretability | High (feature weights) | Low | Low |

**Sentence-BERT** (Reimers & Gurevych, 2019) produces fixed-size embeddings via mean pooling, enabling fast k-NN or k-means on dense vectors.`}],questions:[{q:"Why do we use sublinear TF (log(1 + count)) instead of raw term frequency? Give a concrete example.",a:"Raw TF gives disproportionate weight to repeated terms. If 'the' appears 100 times and 'algorithm' appears 2 times, raw TF says 'the' is 50x more important. With sublinear TF: log(1+100)=4.62 vs log(1+2)=1.10, so 'the' is only ~4x more important. This better reflects reality -- a word appearing 100 times is more important than one appearing twice, but not 50x more important. The diminishing returns of repetition are captured by the logarithm.",hint:"Consider what happens with very common words like 'the' that appear dozens of times.",check:l=>{const r=l.toLowerCase();return(r.includes("log")||r.includes("diminish")||r.includes("proportio"))&&(r.includes("repeat")||r.includes("frequent")||r.includes("common")||r.includes("100"))}}]},{id:"kmeans",icon:"🌀",color:"#DC2626",title:"k-Means Clustering",subtitle:"Partition-based clustering with k-means++ initialization and the elbow method",resources:[{type:"read",title:"Manning, Raghavan & Schutze -- IIR Chapter 16: Flat Clustering",url:"https://nlp.stanford.edu/IR-book/html/htmledition/flat-clustering-1.html"},{type:"read",title:"Arthur & Vassilvitskii -- k-means++: The Advantages of Careful Seeding (2007)",url:"https://theory.stanford.edu/~sergei/papers/kMeansPP-soda.pdf"},{type:"read",title:"scikit-learn -- KMeans Clustering",url:"https://scikit-learn.org/stable/modules/clustering.html#k-means"},{type:"video",title:"StatQuest -- K-Means Clustering",url:"https://www.youtube.com/watch?v=4b5d3muPQmA"}],content:[{heading:"The Algorithm",body:`**k-means partitions N data points into K clusters by iteratively assigning points to the nearest centroid and recomputing centroids.**

1. **Initialize**: Select K initial centroids μ_1, ..., μ_K
2. **Repeat until convergence**:
   a. **ASSIGN**: For each x_i, assign to nearest centroid: c_i = argmin_k || x_i - μ_k ||^2
   b. **UPDATE**: Recompute each centroid: μ_k = (1/|C_k|) × ∑_{x_i ∈ C_k} x_i
3. **Convergence**: Assignments no longer change

**Objective function** (minimize):
J = ∑_{k=1}^{K} ∑_{x_i ∈ C_k} || x_i - μ_k ||^2

This is the **within-cluster sum of squares (WCSS)**, also called inertia.`},{heading:"k-Means++ Initialization",body:`**Standard random initialization can lead to poor local minima.** k-means++ (Arthur & Vassilvitskii, 2007) provides smarter initialization:

1. Choose first centroid μ_1 uniformly at random from data points
2. For each subsequent centroid μ_k:
   a. Compute D(x) = min distance from x to any existing centroid
   b. Choose next centroid with probability proportional to **D(x)^2**
3. Proceed with standard k-means iterations

**Guarantee**: k-means++ is O(log k)-competitive with optimal clustering in expectation.

**Convergence properties**:
- Each iteration strictly decreases J (or leaves it unchanged)
- Finite number of possible assignments → guaranteed to terminate
- Typical convergence: 10-50 iterations
- Finding the global optimum is **NP-hard**; k-means finds a local optimum
- Common practice: run 10-20 times with different initializations, keep the best`},{heading:"Choosing K",body:`**How to determine the right number of clusters:**

| Method | How It Works |
|---|---|
| **Elbow Method** | Plot WCSS vs K; look for "elbow" where improvement diminishes |
| **Silhouette Score** | Average (b-a)/max(a,b) where a=intra-cluster, b=nearest-cluster distance |
| **Gap Statistic** | Compare WCSS to expected WCSS under null reference distribution |
| **Domain knowledge** | Often the best guide (e.g., K=26 for letter recognition) |

**Worked Example**:
Data: (1,1), (1,2), (2,1), (8,8), (8,9), (9,8). k=2.
Init: μ_1=(1,1), μ_2=(9,8).
After Iteration 1: μ_1=(1.33, 1.33), μ_2=(8.33, 8.33). Assignments unchanged → **converged**.`}],questions:[{q:"Why is k-means guaranteed to converge, and why might the result be suboptimal?",a:"k-means converges because (1) each assignment step assigns points to minimize total distance given fixed centroids, (2) each update step computes optimal centroids for fixed assignments, so the objective J strictly decreases (or stays the same) each iteration, and (3) there are finitely many possible assignments, so the algorithm must terminate. However, J is non-convex with many local minima, and k-means only finds a local optimum. The final result depends on initialization, which is why k-means++ and multiple restarts are important.",hint:"Think about whether J can ever increase during an iteration.",check:l=>{const r=l.toLowerCase();return(r.includes("decrease")||r.includes("monoton")||r.includes("finite"))&&(r.includes("local")||r.includes("np-hard")||r.includes("initialization"))}},{q:"You cluster 100 documents into 3 clusters. Cluster 1: 40 docs (30 sports, 10 politics). Cluster 2: 35 docs (5 sports, 25 politics, 5 tech). Cluster 3: 25 docs (5 politics, 20 tech). Calculate purity.",a:"Purity = (1/100) x (max(30,10) + max(5,25,5) + max(5,20)) = (1/100) x (30 + 25 + 20) = 75/100 = 0.75. Limitation: if we split into 100 clusters (one per document), purity = 1.0. Purity favors over-clustering and cannot detect it. Use NMI or ARI instead.",hint:"For each cluster, take the count of the most common class label.",check:l=>{const r=l.toLowerCase();return(r.includes("0.75")||r.includes("75"))&&(r.includes("purity")||r.includes("max"))}}]},{id:"hierarchical",icon:"🌳",color:"#0891B2",title:"Hierarchical Clustering",subtitle:"Agglomerative bottom-up clustering with linkage criteria and dendrograms",resources:[{type:"read",title:"Manning, Raghavan & Schutze -- IIR Chapter 17: Hierarchical Clustering",url:"https://nlp.stanford.edu/IR-book/html/htmledition/hierarchical-clustering-1.html"},{type:"read",title:"scikit-learn -- Hierarchical Clustering",url:"https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering"},{type:"video",title:"StatQuest -- Hierarchical Clustering",url:"https://www.youtube.com/watch?v=7xHsRkOdVwo"},{type:"read",title:"SciPy -- Linkage Methods",url:"https://docs.scipy.org/doc/scipy/reference/cluster.hierarchy.html"}],content:[{heading:"Agglomerative (Bottom-Up)",body:`**Start with each document as its own cluster, iteratively merge the two closest clusters.**

1. Initialize: Each data point is a singleton cluster
2. Compute distance matrix between all pairs of clusters
3. Repeat until one cluster remains:
   a. Find the two closest clusters C_i, C_j
   b. Merge C_i and C_j
   c. Update distance matrix
4. Output: **Dendrogram** recording merge history

**Linkage criteria -- how to measure distance between clusters:**

| Linkage | Formula | Properties |
|---|---|---|
| **Single** (MIN) | min d(a,b) for a∈C_i, b∈C_j | Elongated chains; sensitive to noise |
| **Complete** (MAX) | max d(a,b) | Compact, spherical clusters |
| **Average** (UPGMA) | avg d(a,b) | Compromise |
| **Ward's** | ΔJ = increase in WCSS | Equal-sized clusters |

**Time complexity**: O(N^2 log N) with efficient implementations.`},{heading:"Dendrograms",body:`**A dendrogram is a tree diagram showing the merge/split history:**
- Leaves = individual data points
- Height of merge = distance at which clusters were joined
- **Cut** the dendrogram horizontally at a chosen height to get K clusters

**Agglomerative vs Divisive**:

| Property | Agglomerative | Divisive |
|---|---|---|
| Direction | Bottom-up | Top-down |
| Complexity | O(N^2 log N) | O(2^N) worst case |
| Popularity | More common | Rare |
| Quality at top | Poorer (noisy singletons) | Better (global view) |
| Quality at bottom | Better (local structure) | Poorer |

**When to use hierarchical over k-means**: when you don't know K in advance, need a hierarchy of clusters (taxonomy), or want to visualize cluster relationships.`},{heading:"Cluster Evaluation Metrics",body:`**Three key external evaluation metrics:**

**Purity**: fraction of each cluster belonging to its majority class.
Purity = (1/N) × ∑_k max_j |C_k ∩ L_j|

**Rand Index (RI)**: agreement over all pairs.
RI = (TP + TN) / C(N, 2)

**Normalized Mutual Information (NMI)**: information-theoretic measure.
NMI(Ω, C) = 2 × I(Ω; C) / (H(Ω) + H(C))

| Metric | Range | Corrects for Chance? | Handles Varying K? |
|---|---|---|---|
| Purity | [0, 1] | No | No (biased toward large K) |
| RI | [0, 1] | No | Somewhat |
| ARI | [-1, 1] | Yes | Yes |
| NMI | [0, 1] | Partially | Yes |`}],questions:[{q:"You need to build a taxonomy of news articles without knowing the number of categories in advance. Would you use k-means or agglomerative clustering? Explain why.",a:"Agglomerative clustering is better here because: (1) You don't know K -- agglomerative produces a full dendrogram that you can cut at any level to get different numbers of clusters, while k-means requires K upfront. (2) A taxonomy IS a hierarchy -- agglomerative naturally produces hierarchical relationships (Sports > Football > NFL) that k-means cannot. (3) You can explore different granularities by cutting the dendrogram at different heights. Use Ward's linkage for balanced cluster sizes.",hint:"Think about what a dendrogram gives you that a flat partition does not.",check:l=>{const r=l.toLowerCase();return(r.includes("agglomerative")||r.includes("hierarchical")||r.includes("dendrogram"))&&(r.includes("don't know")||r.includes("hierarchy")||r.includes("taxonomy")||r.includes("cut"))}}]},{id:"topic-modeling",icon:"📖",color:"#9333EA",title:"LSI/LSA & LDA Topic Modeling",subtitle:"Latent Semantic Indexing via SVD and Latent Dirichlet Allocation for discovering hidden topics",resources:[{type:"read",title:"Blei, Ng & Jordan -- Latent Dirichlet Allocation (2003)",url:"https://www.jmlr.org/papers/v3/blei03a.html"},{type:"read",title:"Deerwester et al. -- Indexing by Latent Semantic Analysis (1990)",url:"https://doi.org/10.1002/(SICI)1097-4571(199009)41:6%3C391::AID-ASI1%3E3.0.CO;2-9"},{type:"read",title:"Gensim -- Topic Modeling in Python",url:"https://radimrehurek.com/gensim/models/ldamodel.html"},{type:"video",title:"Serrano.Academy -- LDA Topic Models",url:"https://www.youtube.com/watch?v=T05t-SqKArY"},{type:"read",title:"David Blei -- Probabilistic Topic Models (survey)",url:"https://www.cs.columbia.edu/~blei/papers/Blei2012.pdf"}],content:[{heading:"LSI/LSA -- SVD for Semantics",body:`**Latent Semantic Indexing** uses SVD to find a low-rank approximation of the term-document matrix that captures latent semantic structure.

**SVD Decomposition**: A = U Σ V^T

Where A is the term-document matrix (m × n), U is the term-concept matrix, Σ is diagonal singular values, V^T is the concept-document matrix.

**Truncated SVD** (keep top k singular values): A_k = U_k Σ_k V_k^T

This is the best rank-k approximation (Eckart-Young theorem). Typical k: 100-300.

**How LSI captures semantics**:
- **Synonymy**: "car" and "automobile" will be close in reduced space because they co-occur with similar context words
- **Polysemy**: Partially handled -- the reduced representation blends senses

**To query**: project query into concept space: q_k = Σ_k^{-1} U_k^T q, then compare with documents using cosine similarity.`},{heading:"LDA -- Generative Topic Model",body:`**LDA models each document as a mixture of topics, each topic as a distribution over words.**

**Generative process** for each document d:
1. Draw topic proportions: θ_d ~ Dirichlet(α)
2. For each word position:
   a. Draw topic assignment: z ~ Multinomial(θ_d)
   b. Draw word: w ~ Multinomial(φ_z) where φ_k ~ Dirichlet(β)

**Inference** (posterior is intractable):

| Method | Approach | Speed | Quality |
|---|---|---|---|
| **Variational Bayes** | Approximate with factored distribution | Fast | Good |
| **Collapsed Gibbs Sampling** | Sample z, integrate out θ and φ | Slower | Often better |

**Example**: K=2 topics from news:
Topic 1 (Sports): goal: 0.08, player: 0.07, team: 0.06 ...
Topic 2 (Politics): vote: 0.07, election: 0.06, party: 0.05 ...

A charity game article might have θ_d = [0.45, 0.55] -- 45% sports, 55% politics.`},{heading:"LSI vs LDA Comparison",body:`| Property | LSI/LSA | LDA |
|---|---|---|
| Model type | Linear algebra (SVD) | Probabilistic generative |
| Output | Real-valued topic weights | Probability distributions |
| Interpretability | Difficult (negative weights) | Good (probabilities) |
| Number of topics | Singular value cutoff | Hyperparameter K |
| Incrementality | Difficult | Possible (online LDA) |
| Inference | Exact (SVD) | Approximate |

**Polysemy handling**: A corpus with "bank" (financial) and "bank" (river). LDA can assign different occurrences of "bank" to different topics via z_i, allowing per-occurrence disambiguation. LSI maps "bank" to a single point blending both senses.

**Modern alternative**: Both are largely superseded by BERT-based sentence embeddings for clustering, but LDA remains valuable for **interpretable** topic discovery where you need human-readable topic labels.`}],questions:[{q:"A corpus contains documents about 'bank' (financial) and 'bank' (river bank). Which technique handles this polysemy better -- LSI or LDA? Explain why.",a:"LDA handles it better. LSI maps 'bank' to a single point in concept space that blends both meanings. LDA can assign occurrences of 'bank' to different topics -- one topic about finance (co-occurring with 'loan', 'interest') and another about geography (co-occurring with 'river', 'water'). Each occurrence of 'bank' gets a topic assignment z_i, allowing per-occurrence disambiguation. However, full disambiguation requires contextualized embeddings (BERT).",hint:"Think about whether each method can give 'bank' different representations in different contexts.",check:l=>{const r=l.toLowerCase();return r.includes("lda")&&(r.includes("topic")||r.includes("assign")||r.includes("z_i")||r.includes("different"))}}]}];function Ph({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:"✓ Check"}),i.jsx("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsx("span",{children:"📖 Answer"}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Ah(){const[l,r]=z.useState(null),[x,$]=z.useState(null),[L,F]=z.useState(new Set),[_,v]=z.useState({}),M=Nr.reduce((p,h)=>p+h.content.length,0),j=Math.round(L.size/M*100),q=p=>p.split(/\*\*(.*?)\*\*/g).map((k,c)=>c%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:k},c):i.jsx("span",{children:k},c)),T=p=>{const h=p.split(`
`),k=[];let c=0;for(;c<h.length;){const m=h[c];if(m.trim().startsWith("|")&&m.trim().endsWith("|")){const C=[];for(;c<h.length&&h[c].trim().startsWith("|")&&h[c].trim().endsWith("|");)C.push(h[c]),c++;const u=R=>R.split("|").slice(1,-1).map(y=>y.trim()),f=u(C[0]),b=C.findIndex(R=>/^\|[\s\-:|]+\|$/.test(R.trim())),A=b>=0?b+1:1,D=C.slice(A).filter(R=>!/^\|[\s\-:|]+\|$/.test(R.trim()));k.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:f.map((R,y)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:q(R)},y))})}),i.jsx("tbody",{children:D.map((R,y)=>{const N=u(R);return i.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:N.map((V,re)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:q(V)},re))},y)})})]})},`t${k.length}`))}else m===""?k.push(i.jsx("div",{style:{height:8}},`e${c}`)):k.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:q(m)},`p${c}`)),c++}return k};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#C2410C!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"INFORMATION RETRIEVAL"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Text Classification & Clustering Deep Dive"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From Naive Bayes to LDA topic modeling -- the complete toolkit for categorizing and grouping text documents.",i.jsx("br",{}),Nr.length," sections · ",M," concepts · ",Nr.reduce((p,h)=>{var k;return p+(((k=h.questions)==null?void 0:k.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${j}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #7C3AED, #2563EB, #059669, #DC2626, #0891B2, #9333EA)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[L.size,"/",M]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Nr.map(p=>{var C;const h=l===p.id,k=p.content.map((u,f)=>`${p.id}-${f}`),c=k.filter(u=>L.has(u)).length,m=_[p.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>r(h?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[c,"/",p.content.length]}),i.jsx("span",{className:"ar",style:{transform:h?"rotate(90deg)":"rotate(0)"},children:"›"})]}),h&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsx("button",{className:`tb ${m==="learn"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"learn"})),children:"📖 Learn"}),i.jsxs("button",{className:`tb ${m==="practice"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"practice"})),children:["✏️ Practice (",((C=p.questions)==null?void 0:C.length)||0,")"]}),i.jsxs("button",{className:`tb ${m==="deeper"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),m==="learn"&&i.jsx("div",{children:p.content.map((u,f)=>{const b=`${p.id}-${f}`,A=x===b,D=L.has(b);return i.jsxs("div",{style:{borderTop:f>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>$(A?null:b),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${D?"d":""}`,onClick:R=>{R.stopPropagation();const y=new Set(L);y.has(b)?y.delete(b):y.add(b),F(y)},children:D&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:D?"#aaa":"#2a2a2a",textDecoration:D?"line-through":"none",flex:1},children:u.heading}),i.jsx("span",{className:"ar",style:{transform:A?"rotate(90deg)":"rotate(0)"},children:"›"})]}),A&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:T(u.body)})]},f)})}),m==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,f)=>i.jsx(Ph,{...u,color:p.color},`${p.id}-q-${f}`))]}),m==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,f)=>{const b=Eh[u.type];return i.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:b.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:b.bg,color:b.color},children:[b.emoji," ",b.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},f)})})]})]})]},p.id)})}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Naive Bayes → Vector Space → SVM → Feature Engineering → k-Means → Hierarchical → Topic Modeling"})]})}const Lh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Wr=[{id:"crawlers",icon:"🕷",color:"#0891B2",title:"Web Crawlers",subtitle:"Googlebot, URL frontiers, politeness policies, and crawl scheduling strategies",resources:[{type:"read",title:"Manning, Raghavan & Schutze -- IIR Chapter 20: Web Crawling",url:"https://nlp.stanford.edu/IR-book/html/htmledition/web-crawling-and-indexes-1.html"},{type:"read",title:"Google Search Central -- How Google Search Works",url:"https://developers.google.com/search/docs/fundamentals/how-search-works"},{type:"read",title:"Leskovec, Rajaraman & Ullman -- MMDS Chapter 9.1: Web Crawling",url:"http://www.mmds.org/"},{type:"video",title:"Google -- How Search Works (official)",url:"https://www.youtube.com/watch?v=BNHR6IQJGZs"},{type:"read",title:"robots.txt Specification",url:"https://www.robotstxt.org/robotstxt.html"}],content:[{heading:"Crawler Architecture",body:`**A web crawler systematically downloads web pages for indexing.** Major components:

**Seed URLs** → **URL Frontier** (Priority Queue) → **Fetcher** (HTTP GET) → **Parser** (HTML→text) → **URL Extractor** → **URL Seen?** (Bloom filter) → back to Frontier

**URL Frontier** balances multiple concerns:

**Priority scoring**:
Priority(URL) = w_1 × PageRank(URL) + w_2 × Freshness(URL) + w_3 × Relevance(URL)

**Politeness enforcement**:
- Maintain per-domain crawl delays (typically 1-10 seconds between requests)
- Respect robots.txt directives
- Use a **back queue** with per-host buckets to enforce rate limits
- Token bucket algorithm for rate limiting`},{heading:"robots.txt and Politeness",body:`**robots.txt tells crawlers what they can and cannot access:**

User-agent: *
Disallow: /private/
Crawl-delay: 10

User-agent: Googlebot
Allow: /public/
Disallow: /admin/
Sitemap: https://example.com/sitemap.xml

**Politeness is critical** -- an aggressive crawler can be mistaken for a DDoS attack. Good crawlers:
- Wait at least 1 second between requests to the same domain
- Identify themselves via User-Agent (e.g., "Googlebot/2.1")
- Honor Crawl-delay directives
- Reduce frequency during peak hours`},{heading:"Crawl Scheduling Strategies",body:`| Strategy | Description | When to Use |
|---|---|---|
| **Uniform** | Re-crawl all pages at same interval | Simple but wasteful |
| **Proportional** | Re-crawl frequency ∝ change frequency | Better resource use |
| **Age-based** | Prioritize pages not crawled recently | Ensures coverage |
| **Importance-based** | Prioritize high-PageRank pages | Quality-focused |
| **Adaptive** | Estimate change rate per page, adjust frequency | Optimal but complex |

**Googlebot specifics**:
- Distributed across thousands of machines worldwide
- Renders JavaScript (headless Chrome) since ~2019
- **Crawl budget**: each site gets a limited number of pages crawled per day
- Uses HTTP/2 for efficient multiplexing
- Identifies itself via User-Agent: "Googlebot/2.1"`}],questions:[{q:"Why does a crawler use a Bloom filter for URL deduplication instead of a hash set?",a:"A Bloom filter uses far less memory than a hash set. For billions of URLs, a hash set would require storing all URL strings (hundreds of GB). A Bloom filter uses only ~10 bits per element regardless of string length -- for 10 billion URLs, that's about 12 GB. The tradeoff is false positives (a Bloom filter may incorrectly say a URL was seen, causing it to be skipped), but false negatives never occur (it never misses a URL it has seen). For crawling, occasionally skipping an unseen URL is acceptable, but re-crawling already-seen URLs wastes bandwidth.",hint:"Think about the memory cost of storing billions of full URL strings.",check:l=>{const r=l.toLowerCase();return(r.includes("memory")||r.includes("space")||r.includes("size"))&&(r.includes("false positive")||r.includes("probabilistic")||r.includes("bit"))}}]},{id:"duplicate",icon:"🔍",color:"#DC2626",title:"Duplicate Detection",subtitle:"MinHash for Jaccard similarity and SimHash for fingerprinting -- finding near-duplicate web pages at scale",resources:[{type:"read",title:"Leskovec, Rajaraman & Ullman -- MMDS Chapter 3: Finding Similar Items",url:"http://www.mmds.org/"},{type:"read",title:"Charikar -- Similarity Estimation Techniques from Rounding Algorithms (2002)",url:"https://dl.acm.org/doi/10.1145/509907.509965"},{type:"read",title:"Broder et al. -- Syntactic Clustering of the Web (1997)",url:"https://dl.acm.org/doi/10.1016/S0169-7552(97)00031-7"},{type:"video",title:"Mining Massive Datasets -- MinHash and LSH (Stanford)",url:"https://www.youtube.com/watch?v=bQAYY8INBxg"}],content:[{heading:"MinHash Algorithm",body:`**~25-30% of web pages are near-duplicates.** MinHash estimates Jaccard similarity J(A, B) = |A ∩ B| / |A ∪ B| between document shingle sets.

**Step 1 -- Shingling**: Convert to sets of k-shingles:
"the cat sat" (k=2 word shingles) → {"the cat", "cat sat"}

**Step 2 -- MinHash signature**: For each hash function h, compute min(h(shingle) for shingle in set).
**Key theorem**: P(h_min(A) = h_min(B)) = J(A, B)

**Step 3 -- LSH (Locality-Sensitive Hashing)**:
Divide signature into b bands of r rows (b × r = total hashes). Two documents are candidates if they agree in ALL rows of at least one band.

**P(candidate) = 1 - (1 - s^r)^b** where s = true Jaccard similarity.

**Worked Example** (b=5, r=4):
s=0.8: P = 1 - (1 - 0.8^4)^5 = **0.928** (high similarity caught)
s=0.3: P = 1 - (1 - 0.3^4)^5 = **0.040** (low similarity filtered out)`},{heading:"SimHash Algorithm",body:`**Developed by Moses Charikar (2002), used by Google for web deduplication.**

1. Extract features f_1, ..., f_n with weights w_1, ..., w_n
2. Hash each feature to a b-bit hash: h(f_i)
3. Initialize vector V = [0, 0, ..., 0] (b dimensions)
4. For each feature: if bit j = 1, V[j] += w_i; if bit j = 0, V[j] -= w_i
5. Final fingerprint: bit j = 1 if V[j] > 0, else 0

**Comparison**: Near-duplicates if Hamming distance ≤ k (typically k=3 for 64-bit fingerprints).

| Property | MinHash | SimHash |
|---|---|---|
| Similarity metric | Jaccard similarity | Cosine similarity |
| Output | Signature vector (many hashes) | Single fingerprint (b bits) |
| Storage | O(num_hashes) per doc | O(b) bits per doc (typically 64) |
| Comparison speed | O(num_hashes) | O(1) -- Hamming distance |
| Used by | AltaVista, academic systems | Google |`},{heading:"Anchor Text Indexing",body:`**Anchor text is the visible, clickable text in a hyperlink.** It describes the target page from an external perspective.

**Why anchor text matters**:
1. **Description by others**: 1000 pages linking to Wikipedia's "Python" article with "Python programming language" makes that a strong descriptor
2. **Handles non-text content**: Images and videos have no text, but anchor text provides description
3. **Consensus signal**: Many independent authors choosing similar anchor text is reliable

**The "miserable failure" example**: In 2003, many pages linked to George W. Bush's White House biography with anchor text "miserable failure." Google returned that page for the query "miserable failure" even though those words never appeared on the page. This demonstrated the power (and vulnerability) of anchor text indexing.`}],questions:[{q:"You have 1 billion web pages. Why is pairwise comparison infeasible, and how does LSH with MinHash make it tractable?",a:"Pairwise comparison requires C(10^9, 2) ~ 5 x 10^17 comparisons -- at 10^9 comparisons/second, it would take 16 years. LSH with MinHash: (1) Compute MinHash signatures (200 hashes per doc) in O(N) total; (2) Divide into b bands of r rows; (3) Hash each band to buckets -- only documents sharing a bucket are candidate pairs; (4) With b=20, r=10, pairs with J>0.5 have >90% probability of becoming candidates. This reduces from O(N^2) to approximately O(N) expected candidate pairs. Storage: 200 x 4 bytes x 10^9 = 800 GB for signatures, distributed across machines.",hint:"Calculate C(10^9, 2) to see why brute force fails, then think about how banding reduces comparisons.",check:l=>{const r=l.toLowerCase();return(r.includes("10^17")||r.includes("quadratic")||r.includes("n^2")||r.includes("infeasible")||r.includes("16 year"))&&(r.includes("band")||r.includes("lsh")||r.includes("bucket")||r.includes("candidate"))}}]},{id:"pagerank",icon:"👑",color:"#7C3AED",title:"PageRank",subtitle:"The algorithm that made Google -- recursive link importance via random surfer model and power iteration",resources:[{type:"read",title:"Brin & Page -- The Anatomy of a Large-Scale Hypertextual Web Search Engine (1998)",url:"http://infolab.stanford.edu/~backrub/google.html"},{type:"read",title:"Manning, Raghavan & Schutze -- IIR Chapter 21: Link Analysis",url:"https://nlp.stanford.edu/IR-book/html/htmledition/link-analysis-1.html"},{type:"read",title:"Leskovec, Rajaraman & Ullman -- MMDS Chapter 5: Link Analysis",url:"http://www.mmds.org/"},{type:"video",title:"3Blue1Brown -- PageRank (Eigenvectors)",url:"https://www.youtube.com/watch?v=PBt2wYGhV5k"},{type:"video",title:"Stanford CS224W -- PageRank Lecture",url:"https://www.youtube.com/watch?v=TU0ankRcHmo"}],content:[{heading:"The Algorithm",body:`**A page is important if many important pages link to it.** This recursive definition is resolved by computing the dominant eigenvector of the web link matrix.

**Basic formula** for page j:
r(j) = ∑_{i→j} r(i) / d_out(i)

Where d_out(i) is the number of outgoing links from page i.

**Matrix formulation**: r = M r -- PageRank is the principal eigenvector with eigenvalue 1.

**Problems with the basic model**:
- **Dead ends** (dangling nodes): Pages with no outgoing links absorb all probability
- **Spider traps**: Groups of pages that only link to each other, accumulating all rank`},{heading:"Teleportation (Damping Factor)",body:`**With probability β (damping factor), follow a link; with probability (1-β), jump to a random page.**

r(j) = (1 - β)/N + β × ∑_{i→j} r(i) / d_out(i)

**Google Matrix**: A = β × M + (1 - β) × (1/N) × 1 × 1^T

Typical β = **0.85** (Google's original value).

**Power Iteration**: Initialize r = [1/N, ...], then iterate r_new = A × r until convergence (ε < 10^-8). Convergence typically in **50-100 iterations**.

| Property | Value |
|---|---|
| Sum of all PageRank values | 1.0 (probability distribution) |
| Convergence speed | O(log(1/ε) / log(1/β)) iterations |
| Storage | O(N + E) for sparse matrix |
| Computational cost per iteration | O(E) -- one pass over all edges |`},{heading:"Worked Example",body:`**Web graph**: A → B, A → C, B → C, C → A, D → C

With β = 0.85, N = 4, starting from r = [0.25, 0.25, 0.25, 0.25]:

**Iteration 1**:
r(A) = 0.15/4 + 0.85 × r(C) = 0.0375 + 0.2125 = 0.250
r(B) = 0.15/4 + 0.85 × r(A)/2 = 0.0375 + 0.106 = 0.144
r(C) = 0.15/4 + 0.85 × (r(A)/2 + r(B) + r(D)) = 0.0375 + 0.531 = 0.569
r(D) = 0.15/4 + 0.85 × 0 = 0.0375

**After convergence** (~10 iterations):
r ≈ [0.37, 0.20, **0.39**, 0.04]

Page C has highest PageRank (most in-links, including from important page A). Page D has lowest (no in-links).`},{heading:"PageRank as Random Surfer",body:`**A random surfer model provides intuition:**

1. Start at a random page
2. At each step, follow a random outgoing link with probability β
3. With probability (1-β), **teleport** to a random page
4. The **stationary distribution** of this random walk = PageRank

The damping factor β = 0.85 means:
- 85% of the time, follow a link (respect the web graph structure)
- 15% of the time, jump randomly (escape dead ends and spider traps)

**Interpretation**: PageRank(p) is the fraction of time a random surfer would spend on page p over an infinite random walk.`}],questions:[{q:"In a 3-page web with links A->B, B->C, C->A, C->B, compute one iteration of PageRank with beta=0.85 starting from uniform r=[1/3, 1/3, 1/3].",a:"Transition matrix M: To A: [0, 0, 1/2], To B: [1, 0, 1/2], To C: [0, 1, 0]. r_new(A) = (1-0.85)/3 + 0.85 x (r(C) x 1/2) = 0.05 + 0.85 x 1/6 = 0.192. r_new(B) = 0.05 + 0.85 x (r(A) x 1 + r(C) x 1/2) = 0.05 + 0.85 x (1/3 + 1/6) = 0.475. r_new(C) = 0.05 + 0.85 x (r(B) x 1) = 0.05 + 0.85 x 1/3 = 0.333. Sum = 1.0. Page B has highest rank after iteration 1.",hint:"Build the column-stochastic transition matrix first, then apply the teleportation formula.",check:l=>{const r=l.toLowerCase();return r.includes("0.192")||r.includes("0.475")||r.includes("0.333")||r.includes("page b")}},{q:"Why does decreasing the damping factor beta from 0.85 to 0.5 cause PageRank to converge faster but produce less meaningful rankings?",a:"Faster convergence: The convergence rate of power iteration is |lambda_2/lambda_1| = beta. With beta=0.5, convergence is faster than beta=0.85 because the second eigenvalue is smaller relative to the first. Less meaningful rankings: A lower beta means more teleportation (50% random jumps vs 15%). The PageRank values converge toward the uniform distribution 1/N, washing out the link structure signal. At beta=0 (all teleportation), every page gets the same rank 1/N. The value beta=0.85 was chosen as a good tradeoff between incorporating link structure and ensuring convergence.",hint:"Think about what happens at beta=0 (all teleportation) and beta=1 (no teleportation).",check:l=>{const r=l.toLowerCase();return(r.includes("teleport")||r.includes("uniform")||r.includes("random jump"))&&(r.includes("converge")||r.includes("eigenvalue")||r.includes("faster"))}}]},{id:"hits",icon:"🔗",color:"#D97706",title:"HITS (Hubs & Authorities)",subtitle:"Kleinberg's algorithm -- mutual reinforcement of hub and authority scores",resources:[{type:"read",title:"Kleinberg -- Authoritative Sources in a Hyperlinked Environment (1999)",url:"https://www.cs.cornell.edu/home/kleinber/auth.pdf"},{type:"read",title:"Manning, Raghavan & Schutze -- IIR: HITS",url:"https://nlp.stanford.edu/IR-book/html/htmledition/hubs-and-authorities-1.html"},{type:"video",title:"Stanford CS224W -- HITS Algorithm",url:"https://www.youtube.com/watch?v=TU0ankRcHmo"},{type:"read",title:"Wikipedia -- HITS Algorithm",url:"https://en.wikipedia.org/wiki/HITS_algorithm"}],content:[{heading:"Hubs and Authorities",body:`**Key insight**: Web pages serve two roles:
- **Authorities**: Pages with valuable content on a topic (answers)
- **Hubs**: Pages that link to many good authorities (curators/directories)

**Mutual reinforcement**: Good hubs point to good authorities, and good authorities are pointed to by good hubs.

**Algorithm**:
1. Initialize: a(p) = 1, h(p) = 1 for all pages
2. Repeat until convergence:
   a. UPDATE AUTHORITY: a(p) = ∑_{q→p} h(q)
   b. UPDATE HUB: h(p) = ∑_{p→q} a(q)
   c. NORMALIZE (L2)
3. Output: Top authorities and top hubs

**Matrix formulation**:
Authority vector a = principal eigenvector of L^T L
Hub vector h = principal eigenvector of L L^T`},{heading:"HITS vs PageRank",body:`| Property | PageRank | HITS |
|---|---|---|
| Query dependence | Query-independent (offline) | Query-dependent (query time) |
| Scores per page | One (importance) | Two (hub + authority) |
| Computation | Offline, once for whole web | Online, per query |
| Scope | Entire web graph | Focused subgraph |
| Spam resistance | Moderate (teleportation) | Lower (manipulable subgraph) |
| Used by | Google | Teoma/Ask.com (historically) |

**Why HITS produces different rankings for different queries**: The algorithm starts from a root set retrieved by text matching, then expands to neighbors. Different queries → different root sets → different subgraphs → different hub/authority scores. A "Python" page might be a top authority for "programming languages" but not appear for "snake species."`},{heading:"Worked Example",body:`Pages: A, B, C, D. Links: A→B, A→C, D→B, D→C, B→C.

**Iteration 1**:
a(A) = 0, a(B) = h(A) + h(D) = 2, a(C) = h(A) + h(B) + h(D) = 3, a(D) = 0
h(A) = a(B) + a(C) = 5, h(B) = a(C) = 3, h(D) = a(B) + a(C) = 5

After normalization and convergence:
- **Top authority**: C (most in-links from good hubs)
- **Top hubs**: A and D (link to the best authorities)

**Practical impact**: HITS is less used today because query-time computation is expensive at web scale, and PageRank's offline computation is more practical.`}],questions:[{q:"Why might HITS produce different authority rankings for the same pages when triggered by different queries?",a:"HITS is query-dependent. It starts from a root set of pages retrieved by text matching, then expands to include linked pages. Different queries produce different root sets, which produce different subgraphs, leading to different hub/authority scores. For example, a page about 'Python' might be a top authority for 'programming languages' but not appear at all for 'snake species.' PageRank avoids this by computing a single query-independent score over the entire web graph.",hint:"Think about where the initial set of pages comes from.",check:l=>{const r=l.toLowerCase();return(r.includes("query")||r.includes("root set")||r.includes("subgraph"))&&(r.includes("different")||r.includes("depend"))}}]},{id:"spam",icon:"🛡",color:"#059669",title:"Web Spam & Anti-Spam",subtitle:"TrustRank, link farms, content spam taxonomy, and SpamRank detection",resources:[{type:"read",title:"Gyongyi et al. -- Combating Web Spam with TrustRank (2004)",url:"https://vldb.org/conf/2004/RS15P3.PDF"},{type:"read",title:"Manning, Raghavan & Schutze -- IIR: Web Spam",url:"https://nlp.stanford.edu/IR-book/html/htmledition/web-spam-1.html"},{type:"video",title:"Stanford CS224W -- Spam Detection in Web Graphs",url:"https://www.youtube.com/watch?v=TU0ankRcHmo"},{type:"read",title:"Google Search Central -- Spam Policies",url:"https://developers.google.com/search/docs/essentials/spam-policies"}],content:[{heading:"TrustRank",body:`**Problem**: Link spammers create fake pages to inflate PageRank.

**Solution -- Trust propagation** from a seed set of known-good pages:

1. SELECT seed set S of trusted pages (manually curated)
2. ASSIGN trust t(s) = 1 for s ∈ S, t(p) = 0 otherwise
3. PROPAGATE trust like PageRank with decay:
   t(p) = β × ∑_{q→p} t(q) / d_out(q)
4. Pages with t(p) < threshold are likely spam

**Key insight**: Trust decays with distance from seed. Spam pages are typically far from trusted seeds.

**SpamRank** = PageRank(p) - TrustRank(p). High SpamRank indicates artificial link inflation.

**Inverse TrustRank**: Start from known spam pages, propagate "distrust" backward through in-links to find pages that support spam.`},{heading:"Web Spam Taxonomy",body:`**Content Spam**:

| Technique | Description | Detection |
|---|---|---|
| **Keyword stuffing** | Repeating keywords excessively | TF analysis, language models |
| **Cloaking** | Different content for crawlers vs users | Re-fetch with browser UA |
| **Doorway pages** | Low-quality pages redirecting to main site | Redirect chain analysis |
| **Hidden text** | White text on white background | Render comparison |
| **Scraped content** | Copying from other sites | Content fingerprinting |

**Link Spam**:

| Technique | Description | Detection |
|---|---|---|
| **Link farms** | Networks created solely to boost PageRank | Graph analysis, TrustRank |
| **Blog comment spam** | Posting links in comments | nofollow attribute |
| **Link exchange** | "I link you, you link me" | Reciprocal link detection |
| **Private Blog Networks** | Expired domains with existing authority | Registration patterns |`},{heading:"Anti-Spam Signals",body:`**Modern search engines use many signals to detect spam:**

| Signal | What It Detects |
|---|---|
| TrustRank distance | Pages far from trusted seeds |
| Link velocity | Sudden spikes in incoming links |
| Anchor text diversity | Natural links have varied anchor text |
| Domain age | New domains are more likely spam |
| Content-to-ads ratio | Thin content with excessive ads |
| Link reciprocity | Excessive mutual linking |

**The arms race**: Spammers continuously evolve their techniques. Modern AI-generated content spam uses LLMs to create plausible-looking but low-value content at scale, making detection increasingly challenging.`}],questions:[{q:"A website creates 10,000 fake pages, each linking to a target page. Each fake page also links to CNN and BBC to appear legitimate. What type of spam is this, and how would TrustRank detect it?",a:"This is a link farm. TrustRank detects it because: (1) Trust starts at seed pages (CNN, BBC are seeds); (2) Trust propagates with decay -- the 10,000 fake pages receive some trust from linking to CNN/BBC, but this trust is diluted by their many outgoing links; (3) The target page receives links from low-trust pages (the farm), so its TrustRank stays low; (4) Meanwhile, its PageRank might be artificially high, so SpamRank = PageRank - TrustRank signals spam.",hint:"Think about how trust flows from the legitimate sites through the fake pages to the target.",check:l=>{const r=l.toLowerCase();return(r.includes("link farm")||r.includes("farm"))&&(r.includes("trust")||r.includes("dilut")||r.includes("decay")||r.includes("spamrank"))}}]},{id:"eeat",icon:"⭐",color:"#2563EB",title:"Google E-E-A-T",subtitle:"Experience, Expertise, Authoritativeness, Trustworthiness -- Google's content quality framework",resources:[{type:"read",title:"Google -- Search Quality Rater Guidelines",url:"https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf"},{type:"read",title:"Google Search Central -- Creating Helpful Content",url:"https://developers.google.com/search/docs/fundamentals/creating-helpful-content"},{type:"read",title:"Search Engine Journal -- E-E-A-T Guide",url:"https://www.searchenginejournal.com/google-eat/what-is-it/"},{type:"video",title:"Google Search Central -- Helpful Content System Explained",url:"https://www.youtube.com/watch?v=5aBP4CrGbfk"}],content:[{heading:"E-E-A-T Framework",body:`**Google's Search Quality Rater Guidelines use E-E-A-T to evaluate content quality:**

| Signal | Meaning | Example |
|---|---|---|
| **Experience** | Creator has first-hand experience | Product review by actual user |
| **Expertise** | Creator has knowledge/skill | Medical article by a doctor |
| **Authoritativeness** | Creator/site is recognized authority | CDC for health information |
| **Trustworthiness** | Page is accurate, honest, safe | HTTPS, clear attribution |

**E-E-A-T is NOT a direct ranking factor** -- it is a framework for human raters whose feedback trains ranking models.

**YMYL (Your Money or Your Life)**: Pages about health, finances, safety, or legal topics are held to **higher E-E-A-T standards**.`},{heading:"Helpful Content Update",body:`**Google's system-wide classifier (2022-2023) evaluates whether content is:**

- Written primarily for people (not search engines)
- Demonstrates first-hand expertise
- Provides substantial value beyond what's already available
- Satisfies the user's intent after reading

**Sites with significant "unhelpful" content may see site-wide ranking demotions.**

**Key implication for IR**: Modern search ranking isn't just about matching queries to documents. Content quality, creator credibility, and user satisfaction are increasingly important signals that complement traditional text-matching and link analysis.`},{heading:"The Full Picture -- Quality + Relevance",body:`**Modern web search combines multiple signal types:**

1. **Text matching** (BM25, TF-IDF) -- does the page contain the query terms?
2. **Link analysis** (PageRank, anchor text) -- is the page important/authoritative?
3. **Content quality** (E-E-A-T, Helpful Content) -- is the content trustworthy and valuable?
4. **User signals** (click-through rate, dwell time) -- do users find it useful?
5. **Neural understanding** (BERT, MUM) -- does the page semantically match the query?

The evolution from pure text matching (1990s) to multi-signal quality assessment (2020s) represents the maturation of web search as a discipline.`}],questions:[{q:"A new medical blog writes a comprehensive article about diabetes treatment. Despite excellent content, it ranks poorly. Using E-E-A-T, explain why and what could improve its ranking.",a:"The blog lacks E-E-A-T signals: (1) Experience -- no evidence the author has first-hand medical experience; (2) Expertise -- no medical credentials listed, no author bio; (3) Authoritativeness -- the domain is new with no backlinks from medical institutions; (4) Trustworthiness -- no citations to peer-reviewed research, no HTTPS perhaps, no editorial review process. To improve: add author credentials (MD, board certification), link to peer-reviewed sources, get cited by authoritative medical sites (Mayo Clinic, WebMD), add an editorial review process, and build domain authority over time. Medical content is YMYL, so the E-E-A-T bar is especially high.",hint:"Think about what signals distinguish Mayo Clinic from a random blog.",check:l=>{const r=l.toLowerCase();return(r.includes("expertise")||r.includes("credential")||r.includes("authority"))&&(r.includes("ymyl")||r.includes("medical")||r.includes("trust"))}}]}];function jh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:"✓ Check"}),i.jsx("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsx("span",{children:"📖 Answer"}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function qh(){const[l,r]=z.useState(null),[x,$]=z.useState(null),[L,F]=z.useState(new Set),[_,v]=z.useState({}),M=Wr.reduce((p,h)=>p+h.content.length,0),j=Math.round(L.size/M*100),q=p=>p.split(/\*\*(.*?)\*\*/g).map((k,c)=>c%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:k},c):i.jsx("span",{children:k},c)),T=p=>{const h=p.split(`
`),k=[];let c=0;for(;c<h.length;){const m=h[c];if(m.trim().startsWith("|")&&m.trim().endsWith("|")){const C=[];for(;c<h.length&&h[c].trim().startsWith("|")&&h[c].trim().endsWith("|");)C.push(h[c]),c++;const u=R=>R.split("|").slice(1,-1).map(y=>y.trim()),f=u(C[0]),b=C.findIndex(R=>/^\|[\s\-:|]+\|$/.test(R.trim())),A=b>=0?b+1:1,D=C.slice(A).filter(R=>!/^\|[\s\-:|]+\|$/.test(R.trim()));k.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:f.map((R,y)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:q(R)},y))})}),i.jsx("tbody",{children:D.map((R,y)=>{const N=u(R);return i.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:N.map((V,re)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:q(V)},re))},y)})})]})},`t${k.length}`))}else m===""?k.push(i.jsx("div",{style:{height:8}},`e${c}`)):k.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:q(m)},`p${c}`)),c++}return k};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#0891B2!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"INFORMATION RETRIEVAL"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Web Search, Crawling & Link Analysis Deep Dive"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From web crawlers to PageRank to spam detection -- how search engines discover, analyze, and rank the web.",i.jsx("br",{}),Wr.length," sections · ",M," concepts · ",Wr.reduce((p,h)=>{var k;return p+(((k=h.questions)==null?void 0:k.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${j}%`,height:"100%",background:"linear-gradient(90deg, #0891B2, #DC2626, #7C3AED, #D97706, #059669, #2563EB)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[L.size,"/",M]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Wr.map(p=>{var C;const h=l===p.id,k=p.content.map((u,f)=>`${p.id}-${f}`),c=k.filter(u=>L.has(u)).length,m=_[p.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>r(h?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[c,"/",p.content.length]}),i.jsx("span",{className:"ar",style:{transform:h?"rotate(90deg)":"rotate(0)"},children:"›"})]}),h&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsx("button",{className:`tb ${m==="learn"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"learn"})),children:"📖 Learn"}),i.jsxs("button",{className:`tb ${m==="practice"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"practice"})),children:["✏️ Practice (",((C=p.questions)==null?void 0:C.length)||0,")"]}),i.jsxs("button",{className:`tb ${m==="deeper"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),m==="learn"&&i.jsx("div",{children:p.content.map((u,f)=>{const b=`${p.id}-${f}`,A=x===b,D=L.has(b);return i.jsxs("div",{style:{borderTop:f>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>$(A?null:b),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${D?"d":""}`,onClick:R=>{R.stopPropagation();const y=new Set(L);y.has(b)?y.delete(b):y.add(b),F(y)},children:D&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:D?"#aaa":"#2a2a2a",textDecoration:D?"line-through":"none",flex:1},children:u.heading}),i.jsx("span",{className:"ar",style:{transform:A?"rotate(90deg)":"rotate(0)"},children:"›"})]}),A&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:T(u.body)})]},f)})}),m==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,f)=>i.jsx(jh,{...u,color:p.color},`${p.id}-q-${f}`))]}),m==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,f)=>{const b=Lh[u.type];return i.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:b.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:b.bg,color:b.color},children:[b.emoji," ",b.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},f)})})]})]})]},p.id)})}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Crawlers → Duplicate Detection → PageRank → HITS → Anti-Spam → E-E-A-T"})]})}const zh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},_r=[{id:"vocab-mismatch",icon:"🔌",color:"#DC2626",title:"The Vocabulary Mismatch Problem",subtitle:"Why lexical retrieval fails and the motivation for neural approaches to IR",resources:[{type:"read",title:"Mitra & Craswell -- An Introduction to Neural Information Retrieval (2018)",url:"https://arxiv.org/abs/1903.06902"},{type:"read",title:"Lin et al. -- Pretrained Transformers for Text Ranking (survey)",url:"https://arxiv.org/abs/2010.06467"},{type:"video",title:"Sebastian Hofstatter -- Neural IR Tutorial",url:"https://www.youtube.com/watch?v=EJ_7Gx6amt8"},{type:"read",title:"Robertson & Zaragoza -- The Probabilistic Relevance Framework: BM25 and Beyond",url:"https://www.nowpublishers.com/article/Details/INR-019"}],content:[{heading:"Why BM25 Fails",body:`**Traditional lexical retrieval (BM25) matches exact terms.** This fails when query and document use different words for the same concept:

Query: "How to fix a broken screen on my phone"
Relevant doc: "Steps to repair a cracked display on your mobile device"
**Shared terms after stopword removal: 0. BM25 score: 0.0 -- complete miss!**

| Lexical Failure Mode | Example |
|---|---|
| Synonymy | "buy" vs "purchase", "car" vs "automobile" |
| Morphological variation | "running" vs "run" vs "ran" |
| Acronyms | "NYC" vs "New York City" |
| Paraphrasing | "temperature increase" vs "getting hotter" |
| Domain jargon | Medical: "MI" vs "heart attack" |`},{heading:"Why BM25 Still Matters",body:`**Despite vocabulary mismatch, BM25 remains essential:**

- **Extremely fast**: O(Q × postings) per query via inverted index
- **No training data required** -- works out of the box
- **Highly interpretable** -- you can see which terms matched
- **Strong baseline** -- hard to beat by more than 5-15% on many benchmarks
- **Perfect for exact match** -- product IDs, proper nouns, code snippets

**The modern approach**: Don't replace BM25 -- **combine** it with neural methods. Hybrid search (BM25 + dense retrieval) consistently outperforms either alone.`},{heading:"Early Neural Approaches",body:`**Word2Vec and GloVe** (2013-2014) offered the first neural path around vocabulary mismatch:

**Simple approach**: Average word embeddings for document/query vectors:
v(d) = (1/|d|) × ∑_{w ∈ d} emb(w)

**Problem**: Averaging loses word order, negation, compositionality. "The dog bit the man" ≈ "The man bit the dog."

**DSSM** (Microsoft, 2013) was the first deep learning model for web-scale retrieval -- siamese networks with word hashing (letter trigrams). It showed neural approaches could work, but results were limited compared to BM25 on many benchmarks.

**The real breakthrough came with BERT** (2018) -- pretrained bidirectional transformers that understand language context.`}],questions:[{q:"Give a concrete example where BM25 scores 0.0 on a clearly relevant document, and explain how a dense retriever would handle it.",a:"Query: 'affordable places to stay in Paris'. Relevant document: 'Budget hotels and hostels in the French capital.' Zero term overlap after stopword removal -> BM25 score = 0. A dense bi-encoder would encode both into 768-d vectors where semantically similar concepts map to nearby points. 'Affordable places to stay' and 'budget hotels' would have high cosine similarity (~0.7-0.8) because BERT learned during pretraining that these phrases appear in similar contexts. The retriever would rank this document highly despite zero lexical overlap.",hint:"Find two phrases that mean the same thing but share no content words.",check:l=>{const r=l.toLowerCase();return(r.includes("synonym")||r.includes("semantic")||r.includes("embedding")||r.includes("dense"))&&(r.includes("zero")||r.includes("no overlap")||r.includes("different words"))}}]},{id:"cross-encoder",icon:"🧠",color:"#7C3AED",title:"BERT Cross-Encoders for Ranking",subtitle:"Full cross-attention reranking -- the most accurate but slowest neural ranking approach",resources:[{type:"read",title:"Nogueira & Cho -- Passage Re-ranking with BERT (2019)",url:"https://arxiv.org/abs/1901.04085"},{type:"read",title:"Sentence-Transformers -- Cross-Encoder Usage",url:"https://www.sbert.net/docs/cross_encoder/usage.html"},{type:"video",title:"Nils Reimers -- Cross-Encoders and Bi-Encoders",url:"https://www.youtube.com/watch?v=bqz_dJdCKzM"},{type:"read",title:"MS MARCO Leaderboard",url:"https://microsoft.github.io/msmarco/"}],content:[{heading:"Architecture",body:`**A cross-encoder concatenates query and document as a single input:**

[CLS] query tokens [SEP] document tokens [SEP]
↓ BERT (12 layers, full cross-attention between query and document tokens)
↓ [CLS] embedding → Linear(768, 1) → relevance score

**Why cross-encoders are powerful**:
- Full attention between every query token and every document token
- Can model complex interactions: negation, entity relationships, paraphrasing
- BERT-base achieves **NDCG@10 improvements of 10-25% over BM25** on MS MARCO`},{heading:"Why Cross-Encoders Cannot Retrieve",body:`**The latency problem makes cross-encoders impossible for first-stage retrieval:**

Corpus: 10 million documents
BERT inference: ~10ms per (query, doc) pair on GPU
Total: 10M × 10ms = **100,000 seconds = 27.8 hours per query!**

**Solution**: Use as a **reranker** on a small candidate set (100-1000 documents).`},{heading:"The Modern Rerank Pipeline",body:`**Standard Modern IR Pipeline:**

Corpus (10M+ docs) → Stage 1: Fast retrieval (BM25 or bi-encoder) → Top 1000 → Stage 2: Neural reranker (cross-encoder) → Top 100 → Stage 3: Business logic → Top 10

| Stage | Method | Docs Scored | Latency |
|---|---|---|---|
| Retrieval | BM25 (inverted index) | Full corpus | ~5-20ms |
| Retrieval | Dense bi-encoder (ANN) | Full corpus | ~10-50ms |
| Rerank | BERT cross-encoder | 100-1000 | ~100-500ms |
| Rerank | Distilled model (MiniLM) | 100-1000 | ~20-100ms |

**Training**: Fine-tune on (query, positive, negative) triples with pairwise loss: L = -log(σ(score_pos - score_neg))`}],questions:[{q:"A search engine has 50 million documents. Explain why you cannot use a cross-encoder for first-stage retrieval, and describe the two-stage pipeline.",a:"A cross-encoder processes [CLS] query [SEP] document [SEP] through BERT jointly, requiring ~10ms per pair. For 50M documents: 50M x 10ms = 500,000 seconds ~ 5.8 days per query. Two-stage pipeline: Stage 1: Bi-encoder encodes all 50M documents offline into 768-d vectors stored in an ANN index (HNSW). At query time, encode the query (10ms) and search the ANN index (20ms) to retrieve top-1000 candidates. Stage 2: Cross-encoder reranks the 1000 candidates: 1000 x 10ms = 10 seconds (or ~500ms with batching/distillation). Total: ~530ms vs 5.8 days.",hint:"Calculate the total time to score 50M documents at 10ms each.",check:l=>{const r=l.toLowerCase();return(r.includes("days")||r.includes("hours")||r.includes("infeasible")||r.includes("impossible"))&&(r.includes("two-stage")||r.includes("rerank")||r.includes("pipeline")||r.includes("bi-encoder"))}}]},{id:"bi-encoder",icon:"🔄",color:"#2563EB",title:"Bi-Encoders (DPR, ANCE)",subtitle:"Dense Passage Retrieval -- separate query and document encoders for scalable neural search",resources:[{type:"read",title:"Karpukhin et al. -- Dense Passage Retrieval for Open-Domain QA (2020)",url:"https://arxiv.org/abs/2004.04906"},{type:"read",title:"Xiong et al. -- ANCE: Approximate Nearest Neighbor Negative Contrastive Learning (2020)",url:"https://arxiv.org/abs/2007.00808"},{type:"read",title:"Hugging Face -- Dense Retrieval Guide",url:"https://huggingface.co/blog/dense-retrieval"},{type:"video",title:"Nils Reimers -- Dense Passage Retrieval Explained",url:"https://www.youtube.com/watch?v=bqz_dJdCKzM"},{type:"read",title:"FAISS -- Efficient Similarity Search (Meta)",url:"https://github.com/facebookresearch/faiss"}],content:[{heading:"DPR Architecture",body:`**Two independent BERT encoders -- one for queries, one for passages:**

Query: "Who wrote Hamlet?" → BERT_Q → query vector q (768-d)
Passage: "Shakespeare wrote..." → BERT_P → passage vector p (768-d)
Score = q · p (dot product)

**Key advantage**: Passage vectors are **precomputed offline**. At query time, only encode the query and search via ANN (HNSW/IVF).

| Metric | BM25 | DPR | DPR + BM25 |
|---|---|---|---|
| Top-5 accuracy (NQ) | 43.8% | 65.2% | 69.6% |
| Top-20 accuracy (NQ) | 62.9% | 78.4% | 80.1% |
| Top-100 accuracy (NQ) | 78.3% | 85.4% | 86.5% |`},{heading:"Training with Contrastive Learning",body:`**Loss function** (negative log-likelihood):

L = -log [ exp(q · p+) / (exp(q · p+) + ∑_j exp(q · p_j-)) ]

**Negative sampling strategies**:

| Strategy | Description | Quality |
|---|---|---|
| Random negatives | Random passages from corpus | Weak signal |
| **In-batch negatives** | Positive passages of other queries in batch | Free, effective |
| **BM25 hard negatives** | Top BM25 results that are NOT relevant | Strong signal |
| **Model-mined hard negatives** | Closest non-relevant from current model | Strongest |

**In-batch negatives**: With batch size B, each query gets B-1 free negatives. With batch size 256, that's 255 negatives per query at zero extra cost.

**ANCE** improves over DPR by using the model's own ANN index to mine hard negatives during training, providing increasingly difficult examples as the model improves.`},{heading:"Knowledge Distillation for Retrieval",body:`**Train a fast bi-encoder to mimic a slow cross-encoder:**

1. Score all (query, passage) pairs with cross-encoder → soft labels
2. Train bi-encoder to match soft labels using KL divergence:
   L_KD = KL(P_cross-encoder || P_bi-encoder)

This **transfers the cross-encoder's accuracy to the bi-encoder's speed**.

**Result**: Distilled bi-encoders achieve near-cross-encoder quality at bi-encoder speed, making them the best first-stage retrievers in practice.`}],questions:[{q:"Why do BM25 hard negatives improve dense retriever training more than random negatives?",a:"Random negatives (e.g., a passage about 'quantum physics' for query 'causes of diabetes') are trivially distinguishable -- the model learns nothing useful. BM25 hard negatives are lexically similar but semantically irrelevant (e.g., 'diabetes medication dosage chart' for 'what causes diabetes'). They force the model to learn semantic distinctions beyond keyword matching. The gradient signal from hard negatives is much larger (the model is confused, so there's more to learn) compared to random negatives (the model is already confident, gradient ~ 0).",hint:"Think about what kind of negative example makes the model learn the most.",check:l=>{const r=l.toLowerCase();return(r.includes("lexical")||r.includes("keyword")||r.includes("similar"))&&(r.includes("semantic")||r.includes("meaning")||r.includes("gradient"))}}]},{id:"colbert",icon:"⚡",color:"#059669",title:"ColBERT (Late Interaction)",subtitle:"MaxSim token-level matching -- the sweet spot between bi-encoders and cross-encoders",resources:[{type:"read",title:"Khattab & Zaharia -- ColBERT: Efficient and Effective Passage Search (2020)",url:"https://arxiv.org/abs/2004.12832"},{type:"read",title:"Santhanam et al. -- ColBERTv2: Effective and Efficient Retrieval (2022)",url:"https://arxiv.org/abs/2112.01488"},{type:"read",title:"ColBERT GitHub Repository",url:"https://github.com/stanford-futuredata/ColBERT"},{type:"video",title:"Omar Khattab -- ColBERT and DSPy",url:"https://www.youtube.com/watch?v=nEhPUM9hBcU"}],content:[{heading:"Late Interaction Architecture",body:`**ColBERT introduces a middle ground between bi-encoders and cross-encoders:**

Query: "who invented the telephone"
→ BERT encoder → token embeddings [q_1, q_2, q_3, q_4, q_5] (5 × 128-d)

Document: "Alexander Graham Bell invented..."
→ BERT encoder → token embeddings [d_1, d_2, ..., d_n] (n × 128-d)

**MaxSim scoring**:
S(q, d) = ∑_{i=1}^{|q|} max_{j=1}^{|d|} cos(q_i, d_j)

Each query token **finds its best match** anywhere in the document.

| Model | Interaction | Precomputation | Quality | Speed |
|---|---|---|---|---|
| Bi-encoder | None | Full (1 vector/doc) | Lower | Fastest |
| ColBERT | Late (token-level) | Partial (token vectors/doc) | High | Medium |
| Cross-encoder | Full (cross-attention) | None | Highest | Slowest |`},{heading:"Why MaxSim Works",body:`**MaxSim captures fine-grained matching that single-vector bi-encoders miss:**

- **Synonym matching**: Different tokens with similar embeddings score highly
- **Multi-hop matching**: Each query term matches independently -- "who" finds the person, "invented" finds the action, "telephone" finds the object
- **Soft term matching**: Partial matches contribute partial scores

**ColBERTv2 improvements**:
- **Residual compression**: Compress 128-d token vectors to ~2 bytes using centroids + residuals
- **Storage reduction**: 6-10x compression with minimal quality loss

**Storage for MS MARCO (8.8M passages)**:
Original: 8.8M × 180 tokens × 128 × 4 bytes = ~780 GB
With ColBERTv2 compression: **~25-50 GB**`},{heading:"When to Choose ColBERT",body:`**ColBERT is ideal when you need better quality than bi-encoders but can't afford cross-encoder latency.**

**Use ColBERT when**:
- Your queries are multi-faceted (multiple distinct information needs in one query)
- Synonym matching is critical
- You can afford the storage overhead (10-50x more than single-vector)
- You need interpretability (can inspect which tokens matched which)

**Don't use ColBERT when**:
- Storage is severely constrained (single-vector bi-encoders need ~3GB for 10M docs)
- You need sub-10ms latency (ANN search on single vectors is faster)
- Your queries are simple keyword lookups (bi-encoder suffices)`}],questions:[{q:"Explain why ColBERT's MaxSim is more expressive than a single dot product (bi-encoder) but cheaper than full cross-attention.",a:"A bi-encoder compresses each text into a single vector, losing token-level information. The dot product gives one scalar -- it can't distinguish which query terms matched which document terms. ColBERT's MaxSim preserves per-token embeddings and computes the best match for each query token independently, enabling soft synonym matching, multi-faceted queries, and partial matching. Yet unlike cross-attention, there's no attention between query and document during encoding -- they're encoded independently. MaxSim is just matrix multiplication + max + sum over precomputed vectors, requiring O(|q| x |d|) operations with no backpropagation through the encoders at inference time.",hint:"Think about what information is lost when you compress a document to a single vector.",check:l=>{const r=l.toLowerCase();return(r.includes("token")||r.includes("per-word")||r.includes("fine-grain"))&&(r.includes("independent")||r.includes("precompute")||r.includes("no attention"))}}]},{id:"splade",icon:"📝",color:"#D97706",title:"SPLADE (Learned Sparse Retrieval)",subtitle:"BERT-powered vocabulary expansion using inverted indexes -- bridging lexical and neural",resources:[{type:"read",title:"Formal et al. -- SPLADE: Sparse Lexical and Expansion Model (2021)",url:"https://arxiv.org/abs/2107.05720"},{type:"read",title:"SPLADE GitHub Repository",url:"https://github.com/naver/splade"},{type:"read",title:"Pyserini -- Learned Sparse Retrieval",url:"https://github.com/castorini/pyserini"},{type:"video",title:"Thibault Formal -- SPLADE Explained",url:"https://www.youtube.com/watch?v=GCz3lqCSB1s"}],content:[{heading:"How SPLADE Works",body:`**SPLADE uses BERT to predict a sparse vocabulary-sized vector for each document/query:**

Input: "puppy training tips"
→ BERT encoder → MLM head (vocabulary projection)
→ log(1 + ReLU(logits)) → sparse |V|-dimensional vector

Output (non-zero entries):
"puppy": 2.3, "dog": 1.8, "train": 1.5, "training": 2.1, "obedience": 0.9, "pet": 1.1, "tip": 1.7, "advice": 0.8 ...

**Vocabulary expansion**: The MLM head predicts related words NOT in the original text:
"puppy" → also activates "dog", "pet", "canine"

**Inverted index compatible**: Output is directly indexable in a standard inverted index (like Lucene), but with **learned weights** instead of TF-IDF.`},{heading:"SPLADE vs BM25 vs Dense",body:`| Property | BM25 | SPLADE | Dense (DPR) |
|---|---|---|---|
| Representation | Exact term frequencies | Learned sparse weights | Dense vector (768-d) |
| Vocabulary expansion | No | Yes (MLM head) | Implicit in embedding |
| Index type | Inverted index | Inverted index | ANN index (HNSW/IVF) |
| Interpretable | Yes | Yes (inspect term weights) | No |
| MRR@10 (MS MARCO) | 0.187 | 0.368 | 0.330 |
| Latency | ~5ms | ~20ms | ~30ms |

**Key advantage**: SPLADE bridges the gap between lexical and neural retrieval while keeping the efficiency and interpretability of inverted indexes.`},{heading:"When to Use SPLADE",body:`**SPLADE excels when you need:**
- Vocabulary expansion (handle synonyms) with inverted index infrastructure
- Interpretability (can inspect which expanded terms matched)
- Integration with existing Lucene/Elasticsearch/Solr infrastructure
- Better accuracy than BM25 without switching to ANN indexes

**The full picture**: In a production hybrid system, you might run **BM25 + SPLADE + dense** in parallel, then fuse results with RRF for the best possible recall before cross-encoder reranking.`}],questions:[{q:"How does SPLADE bridge the vocabulary mismatch problem while still using an inverted index? Why is this an advantage over dense retrievers?",a:"SPLADE uses BERT's masked language model (MLM) head to predict related words not in the original text. For 'puppy training tips', it also activates 'dog', 'pet', 'canine', 'obedience', 'advice'. These expanded terms get learned weights and are stored in a standard inverted index. The advantage over dense retrievers: (1) existing Lucene/Elasticsearch infrastructure works without modification, (2) the representation is interpretable -- you can see exactly which terms matched, (3) latency is lower (~20ms vs ~30ms for dense ANN search), and (4) it naturally handles exact match (product IDs, proper nouns) while also handling synonyms.",hint:"Think about what the MLM head does during BERT pretraining and how that helps here.",check:l=>{const r=l.toLowerCase();return(r.includes("mlm")||r.includes("expand")||r.includes("related words")||r.includes("vocabulary"))&&(r.includes("inverted index")||r.includes("lucene")||r.includes("interpret"))}}]},{id:"rankllm",icon:"🤖",color:"#9333EA",title:"RankLLM & Zero-Shot Ranking",subtitle:"Using GPT-4 and other LLMs to rank documents without task-specific training",resources:[{type:"read",title:"Sun et al. -- Is ChatGPT Good at Search? RankGPT (2023)",url:"https://arxiv.org/abs/2304.09542"},{type:"read",title:"RankLLM GitHub Repository",url:"https://github.com/sunnweiwei/RankGPT"},{type:"video",title:"Weiwei Sun -- RankGPT at EMNLP 2023",url:"https://www.youtube.com/watch?v=RWTGS8OROQE"},{type:"read",title:"Qin et al. -- Large Language Models are Effective Text Rankers",url:"https://arxiv.org/abs/2312.01234"}],content:[{heading:"LLM Ranking Approaches",body:`**Use LLMs to rank documents without task-specific training:**

**Pointwise**: "Rate this passage's relevance on a scale of 1-5"
**Pairwise**: "Which passage is more relevant: A or B?"
**Listwise** (RankGPT): "Rank these 20 passages from most to least relevant"

**Performance**: RankGPT (GPT-4) achieves competitive or superior results to fine-tuned cross-encoders on TREC-DL -- with **zero training data**.

**Tradeoffs**:
- Very expensive (~$0.01-0.10 per query for reranking 20 passages)
- Slow (2-10 seconds per query vs 100ms for cross-encoder)
- **Position bias**: LLMs tend to favor passages shown first/last in the prompt`},{heading:"Practical RankLLM Pipeline",body:`**RankLLM fits into the pipeline as a high-quality reranker:**

BM25/Dense → Top 100 → Cross-encoder → Top 20 → **RankLLM** → Top 10

**When to use RankLLM over cross-encoders:**
- Latency is not critical (batch processing, offline evaluation)
- You have zero training data for the domain
- You need the highest possible quality for a small candidate set
- You want to leverage LLM reasoning about relevance

**When NOT to use**: real-time search (too slow), high-volume (too expensive), when fine-tuned cross-encoders are available (similar quality, 100x cheaper).`}],questions:[{q:"What is the position bias problem in listwise RankLLM, and how might you mitigate it?",a:"Position bias means LLMs tend to favor passages presented first or last in the prompt (primacy/recency effects), regardless of true relevance. A passage at position 1 in the prompt might be ranked higher than an identical passage at position 10. Mitigations: (1) Run multiple permutations with different orderings and aggregate rankings; (2) Use sliding window approach -- rank in chunks of 10, then merge; (3) Use pairwise comparison instead of listwise (more comparisons but no position effect); (4) Explicitly instruct the model to ignore presentation order.",hint:"Think about how humans (and LLMs) process long lists.",check:l=>{const r=l.toLowerCase();return(r.includes("first")||r.includes("last")||r.includes("order")||r.includes("primacy")||r.includes("recency"))&&(r.includes("permut")||r.includes("mitigat")||r.includes("window")||r.includes("pairwise"))}}]},{id:"hybrid",icon:"🔀",color:"#0891B2",title:"Hybrid Search via RRF",subtitle:"Combining BM25 + dense + sparse retrieval with Reciprocal Rank Fusion for maximum recall",resources:[{type:"read",title:"Cormack et al. -- Reciprocal Rank Fusion outperforms Condorcet (2009)",url:"https://dl.acm.org/doi/10.1145/1571941.1572114"},{type:"read",title:"Elasticsearch -- Hybrid Search with RRF",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rrf.html"},{type:"read",title:"Weaviate -- Hybrid Search Explained",url:"https://weaviate.io/blog/hybrid-search-explained"},{type:"video",title:"James Briggs -- Hybrid Search Tutorial",url:"https://www.youtube.com/watch?v=OzF0Q4xyEfI"}],content:[{heading:"Reciprocal Rank Fusion",body:`**RRF combines multiple ranked lists into a single ranking:**

RRF_score(d) = ∑_{r ∈ rankers} 1 / (k + rank_r(d))

Where k = 60 (constant) and rank_r(d) is position in ranker r's list.

**Worked Example**: Three rankers rank document D:
BM25: rank 3 → 1/(60+3) = 0.01587
Dense: rank 1 → 1/(60+1) = 0.01639
SPLADE: rank 5 → 1/(60+5) = 0.01538
**RRF(D) = 0.04764**

**Why k=60?** It reduces the impact of outlier rankings. k=1 makes rank 1 dominate (score 0.5 vs 0.33 for rank 2). k=60 makes it balanced (0.0164 vs 0.0161).`},{heading:"Why Hybrid Search Works",body:`| Retrieval Type | Strengths | Weaknesses |
|---|---|---|
| BM25 (lexical) | Exact match, proper nouns, IDs | Vocabulary mismatch |
| Dense (bi-encoder) | Semantic similarity, paraphrase | Rare terms, exact match |
| Sparse (SPLADE) | Vocabulary expansion, interpretable | Training data dependent |

**Combining them covers each method's blind spots.** Empirically, hybrid > any single method by **5-15%** on most benchmarks.`},{heading:"Modern Hybrid Architecture",body:`**Production hybrid search pipeline:**

Query
├→ BM25 retriever → Top 1000 (lexical matches)
├→ Dense bi-encoder (ANN) → Top 1000 (semantic matches)
└→ SPLADE retriever → Top 1000 (expanded lexical)
      ↓
RRF fusion → Top 200 candidates
      ↓
Cross-encoder reranker → Top 20
      ↓
Final results

**This is the state of the art** for production search in 2024-2025. Each component is replaceable and independently improvable.`}],questions:[{q:"Three rankers produce rankings: BM25=[A,B,C], Dense=[C,A,B], SPLADE=[B,A,C]. Compute RRF scores (k=60) and the final ranking.",a:"RRF(A) = 1/(60+1) + 1/(60+2) + 1/(60+2) = 0.01639 + 0.01613 + 0.01613 = 0.04865. RRF(B) = 1/(60+2) + 1/(60+3) + 1/(60+1) = 0.01613 + 0.01587 + 0.01639 = 0.04839. RRF(C) = 1/(60+3) + 1/(60+1) + 1/(60+3) = 0.01587 + 0.01639 + 0.01587 = 0.04813. Final ranking: A (0.04865) > B (0.04839) > C (0.04813). A wins because it's consistently ranked 1st or 2nd across all rankers.",hint:"For each document, compute 1/(60+rank) for each ranker and sum.",check:l=>{const r=l.toLowerCase();return(r.includes("0.048")||r.includes("a wins")||r.includes("a >"))&&(r.includes("consistent")||r.includes("sum")||r.includes("rrf"))}}]},{id:"training",icon:"🏋",color:"#C2410C",title:"Training Retrievers",subtitle:"Contrastive learning, hard negatives, in-batch negatives, and knowledge distillation",resources:[{type:"read",title:"Sentence-Transformers -- Training Overview",url:"https://www.sbert.net/docs/sentence_transformer/training_overview.html"},{type:"read",title:"Qu et al. -- RocketQA: Optimized Training for Dense Passage Retrieval",url:"https://arxiv.org/abs/2010.08191"},{type:"video",title:"Lilian Weng -- Contrastive Representation Learning",url:"https://lilianweng.github.io/posts/2021-05-31-contrastive/"},{type:"read",title:"Hofstatter et al. -- Improving Retriever with Distillation",url:"https://arxiv.org/abs/2010.02666"}],content:[{heading:"Contrastive Learning",body:`**The fundamental training paradigm for dense retrievers:**

L = -log [ exp(sim(q, d+) / τ) / (exp(sim(q, d+) / τ) + ∑_j exp(sim(q, d_j-) / τ)) ]

Where:
- sim() = dot product or cosine similarity
- d+ = positive (relevant) document
- d_j- = negative (irrelevant) documents
- τ = temperature parameter (controls sharpness)

**Temperature τ**: Small τ (e.g., 0.01) makes the model more discriminative but harder to train. Large τ (e.g., 1.0) produces smoother distributions. Typical: 0.05-0.1.`},{heading:"Hard Negatives Deep Dive",body:`**Why they matter**: Random negatives are too easy -- the model doesn't learn fine-grained distinctions.

| Type | Source | Example for "What causes diabetes?" |
|---|---|---|
| Random | Corpus sample | Passage about quantum physics |
| BM25 hard | Top BM25 non-relevant | "Diabetes medication dosage chart" |
| Model-mined | Closest by current model | "Risk factors for heart disease" |
| Cross-encoder | High cross-encoder score but not relevant | Most confusing cases |

**BM25 hard negatives** force the model to distinguish **semantic relevance from lexical similarity** -- exactly the skill needed to surpass BM25.

**In-batch negatives**: With batch size B, each query gets B-1 free negatives (the positive passages of other queries). No extra computation needed.`},{heading:"Putting It All Together",body:`**A modern retriever training recipe:**

1. Start with pretrained BERT/RoBERTa
2. Train with in-batch negatives + BM25 hard negatives (epoch 1-2)
3. Mine hard negatives from the trained model, retrain (epoch 3-4)
4. Optionally distill from a cross-encoder for soft labels
5. Evaluate on held-out queries with recall@k, MRR@10

**Data requirements**:
- Minimum: 10K (query, positive passage) pairs
- Good: 100K+ pairs with hard negatives
- Excellent: 1M+ pairs (MS MARCO scale)

**The knowledge distillation shortcut**: If you have a good cross-encoder, you can bootstrap a strong bi-encoder in one step by training on the cross-encoder's soft scores.`}],questions:[{q:"You have 50K training queries but no negative labels. Design a training strategy that progressively improves your dense retriever.",a:"Progressive training: Round 1: Train with in-batch negatives only (batch size 256 gives 255 free negatives per query). This learns basic semantic similarity. Round 2: Use a BM25 index to find hard negatives -- for each query, take the top BM25 results that are NOT the labeled positive. Retrain with these + in-batch negatives. This teaches the model to distinguish semantic from lexical similarity. Round 3: Use the Round 2 model to encode all passages, build an ANN index, and mine model-hard negatives (closest passages that aren't positive). Retrain. Round 4 (optional): Train a cross-encoder on the same data, then distill its scores into the bi-encoder for a final quality boost. Each round produces harder negatives, creating a curriculum that progressively improves the retriever.",hint:"Think about how to get progressively harder negatives without explicit negative labels.",check:l=>{const r=l.toLowerCase();return(r.includes("in-batch")||r.includes("batch"))&&(r.includes("hard negative")||r.includes("bm25"))&&(r.includes("progressive")||r.includes("round")||r.includes("stage")||r.includes("iterative"))}}]}];function Nh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:"✓ Check"}),i.jsx("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsx("span",{children:"📖 Answer"}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Wh(){const[l,r]=z.useState(null),[x,$]=z.useState(null),[L,F]=z.useState(new Set),[_,v]=z.useState({}),M=_r.reduce((p,h)=>p+h.content.length,0),j=Math.round(L.size/M*100),q=p=>p.split(/\*\*(.*?)\*\*/g).map((k,c)=>c%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:k},c):i.jsx("span",{children:k},c)),T=p=>{const h=p.split(`
`),k=[];let c=0;for(;c<h.length;){const m=h[c];if(m.trim().startsWith("|")&&m.trim().endsWith("|")){const C=[];for(;c<h.length&&h[c].trim().startsWith("|")&&h[c].trim().endsWith("|");)C.push(h[c]),c++;const u=R=>R.split("|").slice(1,-1).map(y=>y.trim()),f=u(C[0]),b=C.findIndex(R=>/^\|[\s\-:|]+\|$/.test(R.trim())),A=b>=0?b+1:1,D=C.slice(A).filter(R=>!/^\|[\s\-:|]+\|$/.test(R.trim()));k.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:f.map((R,y)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:q(R)},y))})}),i.jsx("tbody",{children:D.map((R,y)=>{const N=u(R);return i.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:N.map((V,re)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:q(V)},re))},y)})})]})},`t${k.length}`))}else m===""?k.push(i.jsx("div",{style:{height:8}},`e${c}`)):k.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:q(m)},`p${c}`)),c++}return k};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#7C3AED!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"INFORMATION RETRIEVAL"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Neural IR & The Transformer Revolution"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From BERT cross-encoders to ColBERT to hybrid search -- how transformers revolutionized information retrieval.",i.jsx("br",{}),_r.length," sections · ",M," concepts · ",_r.reduce((p,h)=>{var k;return p+(((k=h.questions)==null?void 0:k.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${j}%`,height:"100%",background:"linear-gradient(90deg, #DC2626, #7C3AED, #2563EB, #059669, #D97706, #9333EA, #0891B2, #C2410C)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[L.size,"/",M]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:_r.map(p=>{var C;const h=l===p.id,k=p.content.map((u,f)=>`${p.id}-${f}`),c=k.filter(u=>L.has(u)).length,m=_[p.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>r(h?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[c,"/",p.content.length]}),i.jsx("span",{className:"ar",style:{transform:h?"rotate(90deg)":"rotate(0)"},children:"›"})]}),h&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsx("button",{className:`tb ${m==="learn"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"learn"})),children:"📖 Learn"}),i.jsxs("button",{className:`tb ${m==="practice"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"practice"})),children:["✏️ Practice (",((C=p.questions)==null?void 0:C.length)||0,")"]}),i.jsxs("button",{className:`tb ${m==="deeper"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),m==="learn"&&i.jsx("div",{children:p.content.map((u,f)=>{const b=`${p.id}-${f}`,A=x===b,D=L.has(b);return i.jsxs("div",{style:{borderTop:f>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>$(A?null:b),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${D?"d":""}`,onClick:R=>{R.stopPropagation();const y=new Set(L);y.has(b)?y.delete(b):y.add(b),F(y)},children:D&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:D?"#aaa":"#2a2a2a",textDecoration:D?"line-through":"none",flex:1},children:u.heading}),i.jsx("span",{className:"ar",style:{transform:A?"rotate(90deg)":"rotate(0)"},children:"›"})]}),A&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:T(u.body)})]},f)})}),m==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,f)=>i.jsx(Nh,{...u,color:p.color},`${p.id}-q-${f}`))]}),m==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,f)=>{const b=zh[u.type];return i.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:b.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:b.bg,color:b.color},children:[b.emoji," ",b.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},f)})})]})]})]},p.id)})}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Vocabulary Mismatch → Cross-Encoders → Bi-Encoders → ColBERT → SPLADE → RankLLM → Hybrid Search → Training"})]})}const _h={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Gr=[{id:"pointwise",icon:"📍",color:"#DC2626",title:"Pointwise LTR",subtitle:"Treating ranking as regression or classification on individual query-document pairs",resources:[{type:"read",title:"Li -- Learning to Rank for Information Retrieval (survey)",url:"https://www.nowpublishers.com/article/Details/INR-016"},{type:"read",title:"Microsoft -- MSLR-WEB10K Dataset",url:"https://www.microsoft.com/en-us/research/project/mslr/"},{type:"video",title:"Stanford CS276 -- Learning to Rank",url:"https://www.youtube.com/watch?v=MRxgMuTbsT4"},{type:"read",title:"scikit-learn -- Regression Models",url:"https://scikit-learn.org/stable/supervised_learning.html"}],content:[{heading:"Why Learning to Rank?",body:`**Modern search engines use hundreds of features to rank results:**

- Text matching features (BM25, TF-IDF, exact match)
- Link analysis features (PageRank, anchor text)
- User behavior features (click-through rate, dwell time)
- Freshness features (document age, last update)
- Quality features (spam score, readability)
- Query-document features (query coverage, term proximity)

**No single formula can optimally combine 200+ features.** Learning to Rank uses machine learning to learn the optimal combination from training data.

| Source | Label Type | Quality |
|---|---|---|
| Human judgments | Relevance grades (0-4) | High but expensive |
| Click logs | Implicit feedback | Abundant but biased |
| User engagement | Dwell time, bounces | Moderate quality |`},{heading:"Pointwise Approach",body:`**Treat ranking as regression or classification on individual pairs:**

**Regression**: Predict a relevance score:
ŷ = f(x_qd), Loss = ∑ (y_i - ŷ_i)^2 (MSE)

**Classification**: Predict a relevance grade (0=irrelevant, 1=relevant, 2=highly relevant):
Loss = -∑ y_i log(ŷ_i) (Cross-entropy)

**Worked Example**:
d1: features=[BM25=12.5, PageRank=0.003, CTR=0.15], label=2
d2: features=[BM25=8.1, PageRank=0.001, CTR=0.08], label=1
d3: features=[BM25=15.2, PageRank=0.0001, CTR=0.02], label=0

Model: ŷ = 0.1*BM25 + 1000*PageRank + 5*CTR
ŷ_1 = 5.0, ŷ_2 = 2.21, ŷ_3 = 1.72
Ranking: d1 > d2 > d3 ← **correct!**`},{heading:"Limitations of Pointwise",body:`1. **Ignores ranking structure**: Optimizes per-document accuracy, not ranking quality
2. **Query-level imbalance**: Queries with many documents dominate training
3. **Score calibration**: Absolute scores don't matter -- only relative order matters
4. **Metric mismatch**: MSE/cross-entropy ≠ NDCG/MAP

**Key insight**: The pointwise approach treats each document independently. It doesn't know that getting d1 above d2 for query q matters more than getting the absolute score right. This is why **pairwise and listwise** approaches were developed.`}],questions:[{q:"A pointwise model assigns scores [0.9, 0.8, 0.3] to three documents with labels [2, 0, 1]. What is the NDCG@3? Why might this model 'fail' despite good regression accuracy?",a:"Ranking by scores: d1(rel=2), d2(rel=0), d3(rel=1). DCG = (2^2-1)/log2(2) + (2^0-1)/log2(3) + (2^1-1)/log2(4) = 3.0 + 0.631 + 0.5 = 4.131. Wait -- recalculate. d1 score=0.9 label=2, d2 score=0.8 label=0, d3 score=0.3 label=1. Ranking: d1, d2, d3 with labels [2, 0, 1]. DCG = 3/1 + 0/1.585 + 1/2 = 3.5. IDCG (optimal: labels [2,1,0]) = 3/1 + 1/1.585 + 0/2 = 3.631. NDCG = 3.5/3.631 = 0.964. The model 'fails' because it ranks d2(label=0) above d3(label=1). Despite d2 getting a high score close to its predicted value, the ranking is suboptimal. A pairwise model that correctly orders d3 above d2 would achieve NDCG=1.0.",hint:"Calculate DCG for the model's ranking vs the ideal ranking.",check:l=>{const r=l.toLowerCase();return(r.includes("0.96")||r.includes("3.5")||r.includes("ndcg"))&&(r.includes("order")||r.includes("ranking")||r.includes("pairwise"))}}]},{id:"pairwise",icon:"⚖",color:"#7C3AED",title:"Pairwise LTR (RankNet, RankSVM)",subtitle:"Learning from document pairs -- RankNet's probabilistic model and RankSVM's margin maximization",resources:[{type:"read",title:"Burges et al. -- Learning to Rank Using Gradient Descent (RankNet, 2005)",url:"https://icml.cc/Conferences/2005/proceedings/papers/012_LearningToRank_BurgesEtAl.pdf"},{type:"read",title:"Joachims -- Optimizing Search Engines Using Clickthrough Data (RankSVM, 2002)",url:"https://dl.acm.org/doi/10.1145/775047.775067"},{type:"video",title:"Microsoft Research -- RankNet Tutorial",url:"https://www.youtube.com/watch?v=8yG1wKgzSvk"},{type:"read",title:"scikit-learn -- SVM for Ranking",url:"https://scikit-learn.org/stable/modules/svm.html"}],content:[{heading:"RankNet (Burges et al., 2005)",body:`**Key idea**: Learn a scoring function f(x) such that for any pair where d_i is more relevant than d_j: f(x_i) > f(x_j).

**Pairwise probability model**:
P(d_i ≻ d_j) = σ(f(x_i) - f(x_j)) = 1 / (1 + exp(-(s_i - s_j)))

**Loss function** (cross-entropy on pairs):
L = ∑ log(1 + exp(-(s_i - s_j))) for all pairs where d_i should rank above d_j

**Gradient** (the "lambda" that inspired LambdaRank):
∂L/∂s_i = σ(s_j - s_i)

This gradient pushes relevant documents' scores **up** and irrelevant documents' scores **down**.`},{heading:"RankSVM (Joachims, 2002)",body:`**Adapts SVM to pairwise preferences:**

minimize: (1/2) ||w||^2 + C × ∑ ξ_{ij}
subject to: w · (x_i - x_j) ≥ 1 - ξ_{ij} for all pairs where d_i ≻ d_j

**Equivalent to**: Training an SVM on **difference vectors** (x_i - x_j) with label +1.

This is elegant because it reduces ranking to binary classification, and SVMs are well-understood for classification.`},{heading:"Pairwise Limitations",body:`1. **Number of pairs**: For n documents per query, there are O(n^2) pairs -- expensive
2. **Pair weight**: All pairs weighted equally, but **swapping rank 1↔2 matters more than swapping 99↔100**
3. **Metric agnosticism**: Optimizes pairwise accuracy, not NDCG/MAP directly

**These limitations motivate listwise approaches** that directly optimize ranking metrics like NDCG.`}],questions:[{q:"RankNet treats ranking as pairwise classification. What is the key limitation that LambdaRank addresses?",a:"RankNet weights all pairs equally -- swapping documents at positions 1 and 2 produces the same loss as swapping documents at positions 99 and 100. But in NDCG, swapping at the top matters enormously while swapping at the bottom barely matters. LambdaRank addresses this by multiplying the RankNet gradient by |delta-NDCG| -- the change in NDCG that would result from swapping those two documents. This makes the gradient proportional to ranking metric impact, focusing training on the most important ranking decisions.",hint:"Think about where swaps matter most in a search results page.",check:l=>{const r=l.toLowerCase();return(r.includes("equal")||r.includes("weight")||r.includes("same"))&&(r.includes("ndcg")||r.includes("delta")||r.includes("top")||r.includes("position"))}}]},{id:"listwise",icon:"🎯",color:"#059669",title:"Listwise LTR (LambdaRank, LambdaMART)",subtitle:"Directly optimizing NDCG via lambda gradients -- the industry standard for ranking",resources:[{type:"read",title:"Burges et al. -- Learning to Rank with Nonsmooth Cost Functions (LambdaRank, 2006)",url:"https://proceedings.neurips.cc/paper/2006/file/af44c4c56f385c43f2529f9b1b018f6a-Paper.pdf"},{type:"read",title:"Wu et al. -- Adapting Boosting for LTR (LambdaMART, 2007)",url:"https://dl.acm.org/doi/10.1145/1835804.1835935"},{type:"read",title:"LightGBM -- LambdaRank Objective",url:"https://lightgbm.readthedocs.io/en/latest/Parameters.html"},{type:"video",title:"Tie-Yan Liu -- Learning to Rank Tutorial (Microsoft)",url:"https://www.youtube.com/watch?v=8yG1wKgzSvk"},{type:"read",title:"XGBoost -- Ranking Documentation",url:"https://xgboost.readthedocs.io/en/stable/tutorials/learning_to_rank.html"}],content:[{heading:"LambdaRank -- The Key Insight",body:`**Instead of deriving gradients from a loss function, directly define gradients ("lambdas") that incorporate the ranking metric.**

**Lambda gradient** for a pair (i, j) where d_i ≻ d_j:

λ_{ij} = σ(s_j - s_i) × |ΔNDCG_{ij}|

Where:
- σ(s_j - s_i) = how wrong the current ranking is (RankNet gradient)
- |ΔNDCG_{ij}| = how much NDCG would change if documents i and j swapped

**Why this is genius**: NDCG is non-differentiable (depends on discrete rankings). By multiplying the smooth RankNet gradient by ΔNDCG, LambdaRank gets gradient **direction** from RankNet and gradient **magnitude** from NDCG.`},{heading:"Delta-NDCG Worked Example",body:`Query with 4 documents ranked [d1, d2, d3, d4] with relevance labels [3, 2, 1, 0]:

**Current DCG** = (2^3-1)/log2(2) + (2^2-1)/log2(3) + (2^1-1)/log2(4) + 0
= 7.0 + 1.893 + 0.5 + 0 = **9.393**

IDCG = 9.393 (already perfect) → NDCG = 1.0

**Swap d1 (rel=3) and d3 (rel=1)**:
New ranking labels: [1, 2, 3, 0]
New DCG = 1/1 + 3/1.585 + 7/2 = 1.0 + 1.893 + 3.5 = **6.393**

**ΔNDCG_{13}** = |9.393 - 6.393| / 9.393 = 3.0/9.393 = **0.319**

The lambda for this pair is **large** because swapping ranks 1 and 3 significantly hurts NDCG. Compare: swapping ranks 98 and 100 would produce ΔNDCG ≈ 0.001.`},{heading:"LambdaMART = LambdaRank + Gradient Boosting",body:`**LambdaMART combines lambda gradients with gradient-boosted decision trees:**

For m = 1 to K trees:
1. Compute lambdas for each document using current model scores
2. Fit regression tree to pseudo-responses λ_i
3. Update model: F_m(x) = F_{m-1}(x) + η × h_m(x)

| Hyperparameter | Typical Value | Effect |
|---|---|---|
| Number of trees K | 500-2000 | More = better fit |
| Learning rate η | 0.05-0.1 | Smaller = better generalization |
| Max tree depth | 6-8 | Deeper = more complex interactions |
| Min leaf samples | 50-100 | Prevents overfitting |

**Production implementations**: LightGBM (lambdarank), XGBoost (rank:ndcg), CatBoost (YetiRank)`},{heading:"Why LambdaMART Dominates Production",body:`1. **Directly optimizes NDCG** via lambda gradients
2. **Handles heterogeneous features** -- no normalization needed for tree models
3. **Non-linear feature interactions** -- trees automatically learn them
4. **Fast inference**: O(K × depth) per document -- ~1μs
5. **Interpretability**: Feature importance scores, partial dependence plots
6. **Robust**: Missing values handled naturally by trees

**LambdaMART is still the primary ranker at Bing, Yahoo, and Yandex.** Even Google combines neural signals with tree-based ranking.`}],questions:[{q:"Two documents have scores s1=2.0 (relevant, label=1) and s2=3.0 (irrelevant, label=0). The irrelevant doc is ranked higher. If delta-NDCG from swapping = 0.15, what is the lambda gradient?",a:"lambda_12 = sigma(s2 - s1) x |delta-NDCG| = sigma(3.0 - 2.0) x 0.15 = sigma(1.0) x 0.15 = (1/(1+exp(-1))) x 0.15 = 0.731 x 0.15 = 0.110. This positive lambda pushes d1's score up and d2's score down. The magnitude (0.110) is amplified by delta-NDCG -- if these were at positions 98 and 99, delta-NDCG would be ~0.001 and lambda would be ~0.0007, so the model wouldn't bother fixing it.",hint:"Apply the sigmoid function to the score difference, then multiply by delta-NDCG.",check:l=>{const r=l.toLowerCase();return(r.includes("0.11")||r.includes("0.731")||r.includes("sigmoid"))&&(r.includes("push")||r.includes("gradient")||r.includes("lambda"))}}]},{id:"features",icon:"🔧",color:"#D97706",title:"Feature Engineering for LTR",subtitle:"200+ features across text matching, link analysis, clicks, freshness, and quality",resources:[{type:"read",title:"Microsoft -- MSLR-WEB Feature Documentation",url:"https://www.microsoft.com/en-us/research/project/mslr/"},{type:"read",title:"Qin & Liu -- Feature Engineering for LTR",url:"https://dl.acm.org/doi/10.1145/2396761.2396826"},{type:"video",title:"Elasticsearch -- Learning to Rank Plugin",url:"https://www.youtube.com/watch?v=JDR4y7yJIiU"},{type:"read",title:"Google -- How Search Works (ranking factors)",url:"https://www.google.com/search/howsearchworks/how-search-works/ranking-results/"}],content:[{heading:"Feature Categories",body:`**Production search engines use 200+ features:**

| Category | Examples | Count |
|---|---|---|
| **Query-document text** | BM25, TF-IDF cosine, term coverage, exact phrase, proximity | 20-30 |
| **Query features** | Query length, frequency, type (navigational/informational) | 5-10 |
| **Document features** | PageRank, doc length, URL depth, domain authority, spam score | 15-20 |
| **Click features** | CTR, average dwell time, bounce rate, skip rate | 10-15 |
| **Freshness** | Document age, last modified, update frequency | 5-10 |
| **Link features** | In-link count, anchor text match, hub/authority scores | 10-15 |
| **Content quality** | Readability, grammar, content length, ad density | 5-10 |
| **User features** | Location, language, device, search history | 10-20 |
| **Field-specific** | Title BM25, body BM25, URL match, meta description | 20-40 |
| **Semantic** | BERT score, embedding similarity, entity overlap | 5-15 |`},{heading:"Feature Extraction Example",body:`**Query: "best Italian restaurants NYC"**
**Document: Restaurant review page**

Feature vector:
BM25_title: 8.5, BM25_body: 12.3, PageRank: 0.0042
URL_depth: 3, Doc_length: 1500, Query_term_coverage: 0.75
CTR_historical: 0.08, Dwell_time_avg: 45.0
Freshness: 30 (days since update), Exact_phrase_match: 0
Domain_authority: 72

**Key principle**: Features should capture different aspects of relevance. BM25 captures text match, PageRank captures authority, CTR captures user preference, freshness captures timeliness.`},{heading:"Feature Importance in Practice",body:`**Typical feature importance ranking in web search:**

1. **BM25 variants** (title, body, anchor) -- still the most important single signal
2. **Click features** (CTR, dwell time) -- strongest behavioral signal
3. **PageRank/domain authority** -- quality/trust signal
4. **Query-document coverage** -- what fraction of query terms appear
5. **BERT/neural similarity** -- semantic understanding
6. **Freshness** -- critical for news, time-sensitive queries
7. **URL features** -- depth, domain match

**The long tail matters**: Features 50-200 individually contribute little, but collectively improve NDCG by 5-10%. LambdaMART is uniquely suited to leverage many weak signals.`}],questions:[{q:"You're building a recipe search engine. List 10 features grouped by category for your LTR model.",a:"Text matching: (1) BM25(query, recipe_title), (2) BM25(query, ingredient_list), (3) Exact phrase match in title. Quality/popularity: (4) Average user rating (1-5 stars), (5) Number of reviews (log-scaled), (6) Number of 'made it' clicks. User engagement: (7) Historical CTR, (8) Average time on page (dwell time). Freshness/metadata: (9) Recipe publication date (days ago), (10) Number of ingredients (user preference for simple vs complex).",hint:"Think about what makes a recipe search result good -- text match, popularity, freshness.",check:l=>{const r=l.toLowerCase();return(r.includes("bm25")||r.includes("text match"))&&(r.includes("rating")||r.includes("review")||r.includes("popular"))&&(r.includes("ctr")||r.includes("click")||r.includes("dwell"))}}]},{id:"clicks",icon:"🖱",color:"#2563EB",title:"Click Models & Position Bias",subtitle:"Extracting true relevance from biased click data -- cascade model, DBN, and propensity scoring",resources:[{type:"read",title:"Craswell et al. -- An Experimental Comparison of Click Position-Bias Models (2008)",url:"https://dl.acm.org/doi/10.1145/1341531.1341545"},{type:"read",title:"Chapelle & Zhang -- A Dynamic Bayesian Network Click Model",url:"https://dl.acm.org/doi/10.1145/1526709.1526711"},{type:"video",title:"Thorsten Joachims -- Unbiased LTR from Biased Feedback",url:"https://www.youtube.com/watch?v=5s8cFR4STZY"},{type:"read",title:"Joachims et al. -- Unbiased Learning-to-Rank with Biased Feedback (2017)",url:"https://dl.acm.org/doi/10.1145/3018661.3018699"}],content:[{heading:"Position Bias",body:`**Clicks are biased -- users are more likely to click higher positions regardless of relevance:**

P(click | d, pos) = P(examine | pos) × P(click | examine, relevance(d))

**Examination probability drops sharply with position:**

| Position | P(examine) |
|---|---|
| 1 | 1.00 |
| 2 | 0.62 |
| 3 | 0.47 |
| 5 | 0.28 |
| 10 | 0.14 |

**Naive CTR is misleading**: A document at position 1 with CTR=10% may be **less relevant** than a document at position 5 with CTR=3%, because most users never see position 5.`},{heading:"Click Models",body:`**Cascade Model** (Craswell et al., 2008):
Users scan top-to-bottom, stop after first click:
P(click_i) = P(relevant_i) × ∏_{j<i} (1 - P(relevant_j))

**Dynamic Bayesian Network (DBN)**:
Extends cascade with possibility of continuing after a click:
P(examine_i) depends on whether user was satisfied at previous position.

Two parameters per (document, query):
- **attractiveness**: probability the snippet looks relevant
- **satisfaction**: probability the full page satisfies the user

**Debiased relevance estimation**:
Relevance(d) = CTR(d, pos) / P(examine | pos)

**Worked Example**: Doc A at pos 1: CTR=10%, P(examine)=1.0, Relevance=0.100. Doc B at pos 5: CTR=3%, P(examine)=0.28, Relevance=**0.107**. Doc B is actually MORE relevant!`},{heading:"Inverse Propensity Scoring",body:`**Estimate unbiased relevance from position-biased clicks:**

Unbiased_CTR(d) = (1/N) × ∑_i click_i / P(examine | pos_i)

**For LTR training**, use propensity-weighted loss:
L = ∑_i (click_i / propensity_i) × loss(ŷ_i, click_i)

This debiases training so the model learns **true relevance**, not position effects.

| Challenge | Solution |
|---|---|
| High variance from large ratios | Clip ratios: min(ratio, M) |
| Missing data for unshown docs | Can only evaluate on docs in logs |
| Self-normalized estimator | Normalize by sum of weights (SNIPS) |`}],questions:[{q:"Document A at position 1 gets CTR=10% (1000 impressions). Document B at position 5 gets CTR=3% (1000 impressions). P(examine|1)=1.0, P(examine|5)=0.28. Which is more relevant?",a:"Debiased relevance: Relevance(A) = CTR(A)/P(examine|1) = 0.10/1.00 = 0.100. Relevance(B) = CTR(B)/P(examine|5) = 0.03/0.28 = 0.107. Document B is MORE relevant than A! Its lower CTR is entirely explained by position bias -- most users never even see position 5. Among those who do examine it (28%), a higher fraction click. This demonstrates why raw CTR cannot be used as a relevance label without position bias correction.",hint:"Divide each CTR by the probability that users even see that position.",check:l=>{const r=l.toLowerCase();return r.includes("b")&&(r.includes("more relevant")||r.includes("higher"))||r.includes("0.107")}}]},{id:"counterfactual",icon:"🧪",color:"#0891B2",title:"Counterfactual Evaluation",subtitle:"Evaluating new ranking models offline using logged click data from the old model",resources:[{type:"read",title:"Joachims et al. -- Unbiased Learning-to-Rank with Biased Feedback",url:"https://dl.acm.org/doi/10.1145/3018661.3018699"},{type:"read",title:"Swaminathan & Joachims -- Counterfactual Risk Minimization",url:"https://arxiv.org/abs/1502.02362"},{type:"video",title:"Thorsten Joachims -- Counterfactual Evaluation",url:"https://www.youtube.com/watch?v=5s8cFR4STZY"},{type:"read",title:"Gilotte et al. -- Offline A/B Testing for Recommender Systems",url:"https://dl.acm.org/doi/10.1145/3159652.3159687"}],content:[{heading:"The Problem",body:`**You have a new ranking model and want to evaluate it, but you only have click logs from the current production model.**

Running an online A/B test is expensive, risky, and slow. **Counterfactual evaluation** estimates the new model's performance using historical logs.

**Inverse Propensity Scoring (IPS)**:
V(π_new) = (1/N) ∑_i reward_i × P(action_i | π_new) / P(action_i | π_old)

**Intuition**: Up-weight clicks on documents that the new policy would have shown at high positions but the old policy showed at low positions.`},{heading:"Practical Considerations",body:`| Challenge | Solution |
|---|---|
| High variance from large propensity ratios | Clip ratios: min(ratio, M) with M=10-100 |
| Missing data for documents never shown | Can only evaluate on documents in the logs |
| Position bias in clicks | Use position-aware propensity |
| Self-normalized estimator | SNIPS: normalize by sum of weights |

**Counterfactual LTR Training**: Train the new model using propensity-weighted loss to debias the training data and learn true relevance.

**When to use**: when you want to iterate on ranking models quickly without expensive A/B tests. A/B tests remain the gold standard for final validation.`},{heading:"The Evaluation Pipeline",body:`**Modern ranking iteration cycle:**

1. **Offline training**: Train LambdaMART on historical judgments + propensity-weighted clicks
2. **Counterfactual eval**: Estimate NDCG improvement using IPS on logged data
3. **Interleaving test**: Run the new model alongside the old one, showing interleaved results
4. **A/B test**: If interleaving is positive, run a full A/B test (1-2 weeks)
5. **Launch**: If metrics are positive, promote to production

Steps 1-2 can be done in hours. Steps 3-4 take days to weeks. The counterfactual evaluation step filters out bad models before expensive online experiments.`}],questions:[{q:"Why can't you simply compare NDCG of the new model on historical judgments without counterfactual methods?",a:"Historical click data is collected under the OLD model's ranking policy. The clicks are biased by position (users click what they see) and by the old model's choices (documents the old model didn't show have no click data). Simply training on this data would learn to mimic the old model rather than optimize true relevance. Counterfactual methods (IPS) correct for the old model's selection bias by reweighting observations -- up-weighting clicks on documents the old model underranked and down-weighting clicks on documents it overranked.",hint:"Think about what data is missing -- can you evaluate a document that was never shown?",check:l=>{const r=l.toLowerCase();return(r.includes("bias")||r.includes("position")||r.includes("old model"))&&(r.includes("reweight")||r.includes("correct")||r.includes("propensity")||r.includes("selection"))}}]},{id:"google",icon:"🌐",color:"#9333EA",title:"Google's Ranking Evolution",subtitle:"From PageRank (1998) to RankBrain to BERT to DeepRank -- 25 years of search innovation",resources:[{type:"read",title:"Google -- How Search Works",url:"https://www.google.com/search/howsearchworks/"},{type:"read",title:"Nayak -- Understanding Searches Better Than Ever (BERT, 2019)",url:"https://blog.google/products/search/search-language-understanding-bert/"},{type:"video",title:"Google -- MUM Explained",url:"https://www.youtube.com/watch?v=Z9LuJkDRcqU"},{type:"read",title:"Search Engine Journal -- Google Algorithm Updates History",url:"https://www.searchenginejournal.com/google-algorithm-history/"}],content:[{heading:"Timeline of Google's Ranking",body:`| Year | System | What It Does |
|---|---|---|
| 1998 | **PageRank** | Link-based authority signal |
| 2003 | Florida Update | First major anti-spam ML |
| 2015 | **RankBrain** | Neural query understanding for long-tail queries |
| 2018 | **Neural Matching** | Embedding-based retrieval for semantic matching |
| 2019 | **BERT** | Transformer-based passage understanding |
| 2021 | **MUM** | Multi-modal, multi-lingual understanding |
| 2022 | **Helpful Content** | Site-wide quality classifier |
| 2023+ | **DeepRank** | Deep neural ranking on top-30 candidates |

**RankBrain** was the **third most important** ranking signal (after links and content). It interprets never-before-seen queries by mapping them to concept vectors.`},{heading:"Google's Full Pipeline (Approximate)",body:`Query
↓ Query understanding (RankBrain, BERT encoding)
↓ Retrieval from inverted index + neural matching → ~10,000 candidates
↓ Initial scoring (BM25 + basic features) → ~1,000 candidates
↓ ML ranking (LTR with hundreds of features) → ~100 candidates
↓ DeepRank (transformer reranking) → ~30 candidates
↓ Twiddlers (diversity, freshness, personalization) → ~10 results
↓ SERP (Search Engine Results Page)

**Key insight**: Google uses a **multi-stage pipeline** where each stage reduces the candidate set. Neural models (BERT, DeepRank) are only applied to the final 30-100 candidates because they're too slow for the full corpus.`},{heading:"Neural vs Trees in Production",body:`**Despite the deep learning revolution, gradient-boosted trees (LambdaMART) remain dominant:**

| Property | LambdaMART (GBT) | Neural LTR |
|---|---|---|
| Inference time | ~1μs per doc | ~1ms per doc (1000x slower) |
| Handles tabular features | Excellent | Okay |
| Training data needed | 10K-100K queries | 100K+ queries |
| Interpretability | High | Low |
| Current usage | Bing, Yahoo, Yandex | Google (partially) |

**The hybrid approach (most common)**: BERT produces a "semantic similarity" score, which becomes **one feature among 200+** in LambdaMART. Best of both worlds: neural understanding + efficient tree ensemble.`}],questions:[{q:"Despite the deep learning revolution, most search engines still use LambdaMART (gradient-boosted trees) as their primary ranker. Give three reasons why.",a:"(1) Inference speed: LambdaMART scores a document in ~1 microsecond (tree traversal), while neural models take ~1 millisecond (1000x slower). At 10,000 QPS scoring 1000 candidates each, this is the difference between 10 servers vs 10,000 servers. (2) Heterogeneous features: Production rankers combine 200+ features of different types (counts, ratios, scores, booleans, categorical). Trees handle this natively without normalization. Neural networks struggle with mixed feature types. (3) Debuggability: When ranking goes wrong, engineers can inspect tree splits, feature importances, and partial dependence plots. Neural LTR is a black box. In systems where ranking errors cost revenue or trust, interpretability is critical for rapid incident response.",hint:"Think about speed, feature types, and what happens when things go wrong.",check:l=>{const r=l.toLowerCase();return(r.includes("speed")||r.includes("fast")||r.includes("latency")||r.includes("microsecond"))&&(r.includes("feature")||r.includes("heterogeneous")||r.includes("tabular"))&&(r.includes("interpret")||r.includes("debug")||r.includes("explain"))}}]}];function Gh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:"✓ Check"}),i.jsx("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsx("span",{children:"📖 Answer"}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Hh(){const[l,r]=z.useState(null),[x,$]=z.useState(null),[L,F]=z.useState(new Set),[_,v]=z.useState({}),M=Gr.reduce((p,h)=>p+h.content.length,0),j=Math.round(L.size/M*100),q=p=>p.split(/\*\*(.*?)\*\*/g).map((k,c)=>c%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:k},c):i.jsx("span",{children:k},c)),T=p=>{const h=p.split(`
`),k=[];let c=0;for(;c<h.length;){const m=h[c];if(m.trim().startsWith("|")&&m.trim().endsWith("|")){const C=[];for(;c<h.length&&h[c].trim().startsWith("|")&&h[c].trim().endsWith("|");)C.push(h[c]),c++;const u=R=>R.split("|").slice(1,-1).map(y=>y.trim()),f=u(C[0]),b=C.findIndex(R=>/^\|[\s\-:|]+\|$/.test(R.trim())),A=b>=0?b+1:1,D=C.slice(A).filter(R=>!/^\|[\s\-:|]+\|$/.test(R.trim()));k.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:f.map((R,y)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:q(R)},y))})}),i.jsx("tbody",{children:D.map((R,y)=>{const N=u(R);return i.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:N.map((V,re)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:q(V)},re))},y)})})]})},`t${k.length}`))}else m===""?k.push(i.jsx("div",{style:{height:8}},`e${c}`)):k.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:q(m)},`p${c}`)),c++}return k};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#059669!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"INFORMATION RETRIEVAL"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Learning to Rank Deep Dive"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From pointwise regression to LambdaMART -- how machine learning learns to combine hundreds of ranking signals.",i.jsx("br",{}),Gr.length," sections · ",M," concepts · ",Gr.reduce((p,h)=>{var k;return p+(((k=h.questions)==null?void 0:k.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${j}%`,height:"100%",background:"linear-gradient(90deg, #DC2626, #7C3AED, #059669, #D97706, #2563EB, #0891B2, #9333EA)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[L.size,"/",M]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Gr.map(p=>{var C;const h=l===p.id,k=p.content.map((u,f)=>`${p.id}-${f}`),c=k.filter(u=>L.has(u)).length,m=_[p.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>r(h?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[c,"/",p.content.length]}),i.jsx("span",{className:"ar",style:{transform:h?"rotate(90deg)":"rotate(0)"},children:"›"})]}),h&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsx("button",{className:`tb ${m==="learn"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"learn"})),children:"📖 Learn"}),i.jsxs("button",{className:`tb ${m==="practice"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"practice"})),children:["✏️ Practice (",((C=p.questions)==null?void 0:C.length)||0,")"]}),i.jsxs("button",{className:`tb ${m==="deeper"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),m==="learn"&&i.jsx("div",{children:p.content.map((u,f)=>{const b=`${p.id}-${f}`,A=x===b,D=L.has(b);return i.jsxs("div",{style:{borderTop:f>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>$(A?null:b),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${D?"d":""}`,onClick:R=>{R.stopPropagation();const y=new Set(L);y.has(b)?y.delete(b):y.add(b),F(y)},children:D&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:D?"#aaa":"#2a2a2a",textDecoration:D?"line-through":"none",flex:1},children:u.heading}),i.jsx("span",{className:"ar",style:{transform:A?"rotate(90deg)":"rotate(0)"},children:"›"})]}),A&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:T(u.body)})]},f)})}),m==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,f)=>i.jsx(Gh,{...u,color:p.color},`${p.id}-q-${f}`))]}),m==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,f)=>{const b=_h[u.type];return i.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:b.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:b.bg,color:b.color},children:[b.emoji," ",b.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},f)})})]})]})]},p.id)})}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Pointwise → Pairwise (RankNet) → Listwise (LambdaMART) → Feature Engineering → Click Models → Counterfactual → Google's Evolution"})]})}const Oh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Hr=[{id:"pipeline",icon:"🔍",color:"#C2410C",title:"Multi-Stage Ranking Pipeline",subtitle:"The funnel architecture that makes neural ranking tractable at web scale — from billions to ten results",resources:[{type:"read",title:"Google Research — Rethinking Search: Making Domain Experts out of Dilettantes",url:"https://research.google/pubs/pub49733/"},{type:"read",title:"Sebastian Bruch — The Art of Retrieval: An Introduction to Multi-Stage Ranking",url:"https://ar5iv.labs.arxiv.org/html/2407.18311"},{type:"video",title:"Google — How Search Works (official explainer)",url:"https://www.google.com/search/howsearchworks/"},{type:"read",title:"Nogueira & Cho — Passage Re-ranking with BERT",url:"https://arxiv.org/abs/1901.04085"},{type:"video",title:"CMU 11-711 — Neural Retrieval and Ranking",url:"https://www.youtube.com/watch?v=kzPh6SfWXiI"}],content:[{heading:"Why Multi-Stage?",body:`**A cross-encoder scoring 1 billion documents at 1 ms/doc = 11.6 days.** Scoring 100 documents = 100 ms. The funnel architecture makes neural ranking tractable by progressively narrowing the candidate set.

Modern search engines use a **funnel architecture** where each stage trades off precision for speed. The deeper in the funnel, the more expensive the model but the fewer candidates it must score.

**The key insight:** cheap models eliminate obviously irrelevant documents early, so expensive models only process strong candidates.

| Stage | Candidates | Model Type | Latency Budget |
|---|---|---|---|
| Candidate Generation | 10B → 10K | BM25 + ANN (HNSW/IVF) | ~5 ms |
| First-Pass Ranking | 10K → 1K | Lightweight GBDT or small neural net | ~3 ms |
| Neural Rerank | 1K → 100 | Transformer cross-encoder | ~8 ms |
| Business Logic | 100 → 10 | Rules + personalization | ~2 ms |
| Snippet Generation | 10 | Extractive or generative | ~8 ms |

**Total P95 target:** < 50 ms for the full pipeline.`},{heading:"Candidate Generation (Stage 1)",body:`**The first stage must be blazingly fast because it touches the entire corpus.** Two main approaches run in parallel:

**1. Inverted Index (BM25):**
- Term-based lookup: query terms → posting lists → candidate doc IDs
- BM25 scoring: TF-IDF with saturation and length normalization
- Latency: ~2-5 ms for 10 billion documents (thanks to skip lists and compressed postings)

**2. Approximate Nearest Neighbor (ANN):**
- Dense vector search using HNSW or IVF indexes
- Query embedding compared against document embeddings
- Captures **semantic** similarity that BM25 misses ("car" matches "automobile")

**Why both?** Hybrid retrieval consistently outperforms either alone. BM25 catches exact keyword matches; ANN catches semantic matches. The union of both candidate sets feeds into stage 2.

**Reciprocal Rank Fusion (RRF)** merges the two ranked lists:
score(doc) = 1/(k + rank_BM25) + 1/(k + rank_ANN)
where k = 60 is standard.`},{heading:"Neural Reranking (Stage 3)",body:`**Cross-encoders jointly process (query, document) pairs through a full transformer, producing a single relevance score.**

Unlike bi-encoders (which embed query and document separately), cross-encoders see the query and document together, enabling deep token-level interaction.

**Architecture:**
Input: [CLS] query tokens [SEP] document tokens [SEP]
Output: single relevance score (0-1) from the [CLS] representation

**Why not use cross-encoders for everything?** A cross-encoder processing 10,000 candidates at 1 ms each = 10 seconds per query. That's why stage 1 and 2 narrow down first.

**Popular models:**
- **ms-marco-MiniLM-L-12**: Fast, good quality, 33M parameters
- **BGE-reranker-v2-M3**: Multilingual, 567M parameters
- **Cohere Rerank v3.5**: Production API, fastest commercial reranker

**Latency:** ~5-10 ms for 100 documents on GPU (batch inference).`},{heading:"Business Logic & Personalization (Stage 4)",body:`**After neural reranking, business rules adjust the final ordering.** This stage is often underappreciated but critically important.

**Common signals applied:**
- **Diversity:** ensure results aren't all from one domain or topic
- **Freshness:** boost recent content for time-sensitive queries ("election results")
- **Geo-boosting:** prefer results near the user's location ("restaurants near me")
- **Personalization:** adjust based on user history, preferences, language
- **Ad injection:** interleave sponsored results at specific positions

**Quality controls:**
- **Demotion signals:** low-quality content, spam scores, policy violations
- **Safe search:** filter adult content based on user settings
- **Legal compliance:** DMCA takedowns, right to be forgotten

**This stage is rules-based, not ML-based** — it runs in <2 ms. Business stakeholders often have the most input here because it directly affects revenue and user satisfaction.`},{heading:"Snippet Generation & SERP Assembly",body:`**The final step produces the Search Engine Results Page (SERP) that users see.**

**Snippet generation approaches:**
- **Extractive:** find the most relevant sentence or passage in the document that matches the query terms. Highlight matching terms in bold.
- **Generative:** use an LLM to produce a natural-language summary (Google's AI Overviews, Bing Chat)

**SERP components:**
- **Title:** page title, truncated to ~60 characters
- **URL breadcrumb:** domain > path > page
- **Snippet:** 2-3 line description with query term highlighting
- **Rich results:** star ratings, prices, images, FAQs (via structured data / Schema.org)
- **Knowledge panels:** entity cards from knowledge graphs
- **People Also Ask:** related questions with expandable answers

**Latency budget:** ~5-8 ms for extractive snippets (substring matching + BM25 on passage level). Generative snippets (LLM-based) can add 200-500 ms and are typically cached aggressively.`}],questions:[{q:"Why can't you just use a single cross-encoder model to score all documents in the corpus?",a:"A cross-encoder processes (query, document) pairs jointly through a transformer. For a corpus of 1 billion documents at ~1 ms per pair, scoring would take ~11.6 days. The multi-stage funnel reduces candidates at each stage: BM25/ANN narrows to ~10K in ~5ms, first-pass ML to ~1K in ~3ms, then the cross-encoder only scores ~100 documents in ~8ms. Total: ~16ms vs 11.6 days. The funnel makes neural ranking tractable by applying increasingly expensive models to progressively smaller candidate sets.",hint:"Calculate how long it would take to score 1 billion documents at 1 ms per document.",check:l=>{const r=l.toLowerCase();return(r.includes("cost")||r.includes("latency")||r.includes("time")||r.includes("slow")||r.includes("expensive"))&&(r.includes("funnel")||r.includes("stage")||r.includes("narrow")||r.includes("candidates"))}},{q:"What is Reciprocal Rank Fusion (RRF) and why is it used in hybrid retrieval?",a:"RRF merges two or more ranked lists into a single ranking using the formula: score(doc) = sum over lists of 1/(k + rank_i), where k is a constant (typically 60). It's used in hybrid retrieval to combine BM25 keyword results with ANN semantic results. BM25 catches exact keyword matches, while ANN catches semantic similarity (e.g., 'car' matches 'automobile'). RRF is preferred over simple score normalization because it doesn't require comparable score distributions between the two systems — it only uses rank positions, making it robust across different scoring scales.",hint:"Think about why you can't just average BM25 scores and cosine similarity scores directly.",check:l=>{const r=l.toLowerCase();return(r.includes("rank")||r.includes("merge")||r.includes("fusion"))&&(r.includes("bm25")||r.includes("keyword"))&&(r.includes("semantic")||r.includes("vector")||r.includes("ann"))}}]},{id:"google",icon:"🌍",color:"#4285F4",title:"Google's Search Stack",subtitle:"Caffeine indexer, Colossus filesystem, Percolator transactions, and the infrastructure behind web-scale search",resources:[{type:"read",title:"Google — Caffeine: A Continuous Indexing System for Web Search",url:"https://research.google/pubs/pub36726/"},{type:"read",title:"Google — Bigtable: A Distributed Storage System",url:"https://research.google/pubs/pub27898/"},{type:"read",title:"Peng & Dabek — Large-scale Incremental Processing Using Distributed Transactions (Percolator)",url:"https://research.google/pubs/pub36726/"},{type:"video",title:"Google I/O — How Google Search organizes information",url:"https://www.youtube.com/watch?v=tFq6Q_muwG0"},{type:"read",title:"Google Search Central — How Google Search Works (technical docs)",url:"https://developers.google.com/search/docs/fundamentals/how-search-works"}],content:[{heading:"Caffeine Indexer",body:`**Caffeine (2010-present) replaced Google's batch indexing system with continuous streaming.** Before Caffeine, Google rebuilt its entire index periodically (the "Google Dance"), causing multi-day delays for new content.

**Key innovations:**
- Processes web pages **incrementally** as they are discovered
- News sites indexed within **~5 minutes**; new sites may take 4-28 days
- Operates as distributed queues converting the web into a continuous data stream
- No more full index rebuilds — index is always fresh

**Impact on SEO:** Before Caffeine, site owners had to wait for the next "crawl cycle" to see their changes reflected. After Caffeine, changes to high-authority sites appear within minutes.

**Architecture:** Caffeine is built on top of **Percolator** and **Bigtable**, enabling incremental updates without the overhead of full index rebuilds.`},{heading:"Percolator — Incremental Transaction Processing",body:`**Percolator is Google's distributed transaction framework that enables Caffeine's incremental indexing.** Built on Bigtable, it adds cross-row transactions with observer triggers.

**Problem it solves:** Web indexing requires updating multiple data structures atomically — inverted indexes, PageRank tables, metadata stores. Without transactions, partial updates could leave the index in an inconsistent state.

**Key concepts:**
- **Observers:** trigger functions that fire when a cell changes (similar to database triggers)
- **Snapshot isolation:** reads see a consistent snapshot; writes are atomic
- **Timestamp-based MVCC:** uses Bigtable's versioned cells for concurrency control

**How it works with Caffeine:**
1. Googlebot fetches a page
2. Percolator writes the raw page to Bigtable
3. Observer triggers fire: tokenize → extract links → update inverted index → update PageRank
4. Each observer can trigger further observers (cascade)
5. All within snapshot isolation — readers never see half-processed pages

**Scale:** Processes small clusters of pages as discovered, avoiding the cost of full index rebuilds.`},{heading:"Colossus & Storage Tiering",body:`**Colossus is Google's distributed filesystem, the successor to Google File System (GFS).** It stores cached web pages, index segments, and all intermediate data.

**Key properties:**
- Separates storage from compute
- Petabyte-scale operations across commodity servers
- Metadata managed by Colossus master; data stored on chunk servers

**Storage tiering for the search index:**

| Tier | Storage | Content | Access Pattern |
|---|---|---|---|
| Flash (SSD) | Fastest, most expensive | High-authority pages, frequently accessed | Real-time serving |
| Standard (HDD) | Medium cost | Average pages | Regular search |
| Cold | Cheapest | Low-quality, old pages | Rare access |

**Colossus underpins everything:** Bigtable, Spanner, BigQuery, and dozens of other Google systems all store data on Colossus. It's the storage foundation of Google's entire infrastructure.`},{heading:"Full Ranking Pipeline (Google Scale)",body:`**Google's search pipeline from crawl to SERP involves roughly 10 major stages:**

1. **Scheduler / URL Frontier** — Priority queue with crawl budget and politeness constraints
2. **Googlebot** — Distributed fetcher using HTTP/2 multiplexing
3. **Web Rendering Service (WRS)** — Headless Chromium with 5-10s JS execution timeout
4. **Processing & Tokenization** — N-gram identification, entity mapping
5. **Canonicalization** — Deduplication across 20+ signals (URL, content hash, etc.)
6. **Inverted Index** — Term → DocID with positional metadata
7. **Bigtable** — Sparse, distributed column-family storage
8. **Ranking Signals Aggregation** — PageRank, quality scores pre-computed at index time
9. **Sharding & Scatter-Gather** — Root servers distribute queries to thousands of leaf servers
10. **SERP Assembly** — Snippet generation, rich results, knowledge panels

**JavaScript impact:** Client-side rendered pages receive approximately **1/4 effective crawl budget** compared to server-rendered HTML. The WRS is resource-constrained, so pages requiring JS execution are deprioritized.

**Key numbers:** Google processes ~8.5 billion searches per day across an index of hundreds of billions of pages.`}],questions:[{q:"What problem did Caffeine solve compared to Google's previous batch indexing approach?",a:"Before Caffeine (pre-2010), Google rebuilt its entire search index in batch mode periodically (the 'Google Dance'). This meant new content could take days to appear in search results. Caffeine replaced this with continuous streaming indexing: pages are processed incrementally as they are discovered. News sites can be indexed within ~5 minutes. This was made possible by Percolator (distributed transactions on Bigtable) which enabled atomic incremental updates to the inverted index, PageRank tables, and other data structures without requiring a full rebuild.",hint:"Think about the delay users experienced before Caffeine and what 'incremental' means versus 'batch'.",check:l=>{const r=l.toLowerCase();return(r.includes("batch")||r.includes("rebuild")||r.includes("google dance"))&&(r.includes("incremental")||r.includes("continuous")||r.includes("streaming")||r.includes("real-time"))}}]},{id:"lucene",icon:"📚",color:"#059669",title:"Lucene Internals",subtitle:"Segments, translog, merges, analysis pipeline, FSTs, BKD trees — the library behind Elasticsearch, Solr, and OpenSearch",resources:[{type:"read",title:"Apache Lucene — Official documentation",url:"https://lucene.apache.org/core/"},{type:"read",title:"Adrien Grand — Lucene's Segment Architecture (Elastic blog)",url:"https://www.elastic.co/blog/lucene-index-architecture"},{type:"read",title:"Michael McCandless — Lucene's Codec Architecture",url:"https://blog.mikemccandless.com/"},{type:"video",title:"Adrien Grand — What is in a Lucene Index (Berlin Buzzwords)",url:"https://www.youtube.com/watch?v=T5RmMNDR5XI"},{type:"read",title:"Mikhail Khludnev — Understanding Lucene Segment Merges",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/index/MergePolicy.html"},{type:"read",title:"Doug Cutting — Lucene original design docs",url:"https://lucene.apache.org/core/9_0_0/core/overview-summary.html"}],content:[{heading:"Inverted Index Structure",body:`**A traditional database maps Document → Terms. Lucene's inverted index flips this: Term → [Documents].**

Each posting entry stores:
- **Document ID** — which document contains the term
- **Term Frequency** — how many times it appears (used in BM25 scoring)
- **Positions** — where in the document (for phrase queries like "machine learning")
- **Offsets** — character-level positions (for search result highlighting)

**Example:**
Term "hotel" → [{docID:1, freq:3, positions:[0,5,12]}, {docID:4, freq:1, positions:[7]}, {docID:9, freq:2, positions:[2,8]}]

**Why inverted?** A forward lookup ("what terms are in doc 7?") is O(1) but useless for search. An inverted lookup ("which docs contain 'hotel'?") is exactly what search needs — O(1) to find the posting list, then scan it.

**On-disk files per segment:**
.tim = term dictionary (FST-compressed), .doc = postings lists, .pos = positions, .fdt = stored fields, .dvd = doc values (columnar), .del = deleted document bitset.`},{heading:"Segment Architecture (Immutable)",body:`**Lucene uses an append-only, immutable segment design.** Documents are buffered in memory (~16 MB), then flushed as an immutable segment on disk.

**Write path:**
Document → In-Memory Buffer (~16 MB) → Flush → Immutable Segment on Disk

**Key properties:**
- Segments are **never modified** after creation
- Deletions are recorded in .del files (bitset marking deleted docs)
- Updates = delete old version + insert new version
- Each segment is a complete, self-contained inverted index

**Why immutability?**
1. **No locking for reads** — readers never see partial writes (lock-free concurrency)
2. **Filesystem cache efficiency** — segments never change, so the OS page cache is always valid
3. **Simple crash recovery** — a half-written segment is simply discarded
4. **Compression** — data written once can be heavily compressed

**Tradeoff:** Deletes require tombstones (.del bitset) and background merging for space reclamation. This is the same tradeoff as LSM-Trees.`},{heading:"Translog (WAL) & Near Real-Time Search",body:`**The translog is Lucene's Write-Ahead Log (WAL), bridging the gap between write speed and durability.**

**Write flow timeline:**
T=0.0s: Document indexed → written to translog (fsync'd) + in-memory buffer
T=0.0s: **NOT** searchable yet
T=1.0s: **Refresh** → new segment created from buffer → **NOW searchable**
T=1.0s: **NOT** durable yet (only in translog on disk)
T=30min: **Flush** → fsync segments to disk → **NOW durable**, translog cleared

**Why this design?**
- The ~1-second refresh interval is the source of "near real-time" (NRT) — documents become searchable within ~1 second
- The translog provides durability: if the process crashes between refresh and flush, writes are replayed from the translog on restart
- Full flush (fsync) is expensive, so it only happens every ~30 minutes

**Critical distinction:**
- **Refresh** = make searchable (create segment in memory, not durable)
- **Flush** = make durable (fsync to disk, crash-safe)
- **Translog** = durability bridge between refresh and flush`},{heading:"Merge Process",body:`**Over time, many small segments accumulate. Background merging consolidates them.**

Before merge: Seg-1 (50 docs), Seg-2 (30 docs), Seg-3 (40 docs), Seg-4 (80 docs)
After merge: Seg-5 (160 docs) — deleted docs physically removed, disk reclaimed

**Benefits of merging:**
- **Fewer segments** = fewer files to search at query time
- **Physically removes** deleted documents (reclaims space)
- **Improves query performance** — fewer segment seeks per query

**TieredMergePolicy (default):**
- Selects segments based on size tiers, targeting ~10 segments per tier
- Small segments merge first; large segments merge less frequently
- Balances merge I/O cost against query performance

**Merge is a background operation** but can temporarily double disk usage (old + new segments exist simultaneously until the old ones are deleted). Production systems monitor merge lag — if merges can't keep up with indexing, query performance degrades.`},{heading:"Analysis Pipeline & Advanced Data Structures",body:`**The analysis pipeline converts raw text into indexed terms. The SAME analyzer must run at index time and query time for matching to work.**

Input: "Hotels in Dhaka City"
→ Character Filter: "Hotels in Dhaka City" (strip HTML)
→ Tokenizer: ["Hotels", "in", "Dhaka", "City"]
→ Lowercase Filter: ["hotels", "in", "dhaka", "city"]
→ Stopword Filter: ["hotels", "dhaka", "city"]
→ Stemmer: ["hotel", "dhaka", "city"]

**Advanced data structures:**

**Finite State Transducer (FST)** — Used for the term dictionary. Like a trie with both prefix AND suffix sharing, producing minimal acyclic structures. Lookup is O(m) where m = term length. Dramatically smaller than hash maps for large dictionaries.

**BKD Trees (Block KD-Trees)** — For numeric ranges and geo queries. Alternates splitting dimensions at each level. Leaf blocks are sorted packed arrays. Replaced legacy numeric tries in Lucene 6+.

**Doc Values** — Columnar storage for sorting and aggregations. Instead of row-oriented (doc1: {price:120, rating:4.5}), stores price: [120, 85, 200, 45], rating: [4.5, 4.8, 3.9, 4.2]. Accessed via memory-mapped files for speed.`}],questions:[{q:"Explain the difference between Lucene's refresh, flush, and commit operations and why each exists.",a:"Refresh (~1s): Creates a new in-memory segment from the buffer, making documents searchable but NOT durable. This is cheap and fast, giving us near real-time search. Flush (~30min): Calls fsync on all segments to disk and clears the translog, making data crash-safe and durable. This is expensive (disk I/O). The translog (Write-Ahead Log) bridges the durability gap: if the node crashes between refresh and flush, writes are replayed from the translog on restart. The three operations exist because of a fundamental tradeoff: making data searchable (refresh) is cheap but not crash-safe, while making data durable (flush) is expensive. The translog lets us have both fast searchability AND durability without paying the fsync cost on every write.",hint:"Think about what 'searchable' vs 'durable' means and why you'd want to separate them.",check:l=>{const r=l.toLowerCase();return r.includes("refresh")&&r.includes("flush")&&(r.includes("translog")||r.includes("wal")||r.includes("durable")||r.includes("durability"))}},{q:"Why does Lucene use immutable segments instead of in-place updates?",a:"Immutability provides four key benefits: (1) No locking needed for concurrent reads — readers never see partial writes, enabling lock-free concurrency. (2) Filesystem cache efficiency — segments never change, so the OS page cache is always valid. (3) Simple crash recovery — a half-written segment is simply discarded. (4) Compression opportunities — data written once can be heavily compressed. The tradeoff is that deletes require tombstones (.del bitset) and background merging for space reclamation, which introduces write amplification and temporary space overhead. This is architecturally very similar to how LSM-Trees use immutable SSTables.",hint:"Think about concurrency, caching, and crash safety.",check:l=>{const r=l.toLowerCase();return(r.includes("lock")||r.includes("concurren"))&&(r.includes("cache")||r.includes("crash"))}}]},{id:"elastic",icon:"⚙️",color:"#FEC514",title:"Elasticsearch Architecture",subtitle:"Clusters, nodes, shards, fan-out/fan-in queries, shard sizing, and Index Lifecycle Management",resources:[{type:"read",title:"Elastic — Elasticsearch: The Definitive Guide",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"},{type:"read",title:"Elastic — Shard sizing and best practices",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/size-your-shards.html"},{type:"video",title:"Philipp Krenn — Elasticsearch From the Bottom Up (Elastic meetup)",url:"https://www.youtube.com/watch?v=PpX7J-G2PEo"},{type:"read",title:"Elastic — Index Lifecycle Management (ILM)",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html"}],content:[{heading:"Cluster Hierarchy",body:`**Elasticsearch wraps Lucene with distributed systems capabilities.** A cluster consists of nodes, each holding shards of one or more indexes.

**Cluster hierarchy:**
Cluster → Nodes → Indexes → Shards → Lucene Segments

**Node types:**
- **Master-eligible:** Cluster state management, index creation/deletion
- **Data nodes:** Store shards, execute queries (the workhorses)
- **Coordinating nodes:** Route requests, merge results (every node can coordinate)
- **Ingest nodes:** Pre-process documents through enrichment pipelines

**Each shard IS a Lucene index.** A shard contains multiple Lucene segments, each with its own inverted index, doc values, stored fields, etc.

**Shard routing formula:**
shard_number = hash(document_id) % number_of_primary_shards

**Critical:** Primary shard count is **immutable** after index creation. Changing the denominator in the hash formula would route documents to different shards, making existing data unfindable. The only solution is to create a new index and reindex all documents.`},{heading:"Fan-Out / Fan-In Query Pattern",body:`**Every Elasticsearch query follows a two-phase fan-out/fan-in pattern.**

**Phase 1 (Query — Fan-Out):**
1. Client sends query to a coordinating node
2. Coordinating node forwards the query to ALL relevant shards (fan-out)
3. Each shard searches its local Lucene segments
4. Each shard returns top-N doc IDs + scores (metadata only, NOT full documents)

**Phase 2 (Fetch — Fan-In):**
1. Coordinating node merges all shard results, sorts globally, picks final top-N
2. Coordinating node requests full documents from the winning shards only
3. Full documents are returned and assembled into the response

**Why two phases?** Phase 1 only transfers small metadata (doc IDs + scores). Full document content is only fetched for the final result set, **minimizing network traffic.** This is especially important for large documents.

**Performance implications:**
- Query latency = max(shard latencies) + merge overhead (slowest shard dominates)
- More shards = more parallelism but more network overhead
- Very slow shards ("hot spots") degrade the entire query`},{heading:"Shard Sizing & Strategies",body:`**Shard sizing directly impacts performance, storage efficiency, and operational complexity.**

**Sizing guidelines:**
- Target: **20-50 GB per shard** (100 GB max with optimization)
- Rule of thumb: ≤20 shards per GB of JVM heap memory
- JVM heap: keep below **31 GB** (JVM compressed oops threshold)

**Sharding strategies:**

| Strategy | How It Works | Best For | Tradeoffs |
|---|---|---|---|
| **Hash-based** | hash(id) % N | Even distribution | Cannot add shards without reindex |
| **Time-based** | One index per day/week | Logs, events, time-series | Hot/cold tiering natural; old indices deletable |
| **Tenant-based** | One index per customer | Multi-tenant SaaS | Isolation; uneven sizes possible |
| **Routing-based** | Custom _routing field | Co-locate related docs | Careful design needed; hot spots |

**Time-based ILM example:**
logs-2026-04-19 (hot — SSD, 1 primary + 1 replica)
logs-2026-04-18 (warm — HDD, 1 primary + 1 replica)
logs-2026-04-12 (cold — frozen, searchable snapshot)
logs-2026-03-* (delete after 30 days)

**Over-sharding** is the #1 Elasticsearch anti-pattern. Too many small shards waste memory (each shard has overhead) and slow queries (more fan-out).`},{heading:"Replicas, Fault Tolerance & Write Consistency",body:`**Each primary shard can have one or more replica shards for redundancy and read scaling.**

**Replication model:**
- Writes go to the primary shard first
- Primary forwards to all in-sync replicas
- Write acknowledged only after replicas confirm (configurable via wait_for_active_shards)

**Read scaling:** Replicas can serve read requests, doubling (or tripling) read throughput.

**Failure handling:**
- If a data node goes down, its primary shards are promoted from replicas on other nodes
- If the master node goes down, a new master is elected (quorum-based)
- Split-brain protection: requires a quorum (majority) of master-eligible nodes

**Consistency tradeoffs (PACELC):**
- Elasticsearch is **PA/EL** — during partitions, favors availability; during normal operation, favors low latency
- Reads from any replica may return slightly stale data (~1s refresh interval)
- The **wait_for_active_shards** parameter lets you tune toward consistency at the cost of availability

**Production recommendation:** Always have at least 1 replica for fault tolerance. For critical data, use 2 replicas.`}],questions:[{q:"What happens if you try to change the number of primary shards in an Elasticsearch index?",a:"You cannot change the primary shard count after index creation. The shard routing formula is hash(document_id) % number_of_primary_shards. Changing the denominator would route documents to different shards, making existing data unfindable — a document stored on shard 3 might now hash to shard 7. The solution is to create a new index with the desired shard count and reindex all documents. This is a destructive operation that requires enough storage for both indexes temporarily. Use the Reindex API: POST _reindex with source and destination indexes.",hint:"Think about what hash(doc_id) % N means when N changes.",check:l=>{const r=l.toLowerCase();return(r.includes("cannot")||r.includes("immutable")||r.includes("can't")||r.includes("not possible"))&&(r.includes("reindex")||r.includes("new index")||r.includes("hash"))}},{q:"Why does Elasticsearch use a two-phase query (query then fetch) instead of returning full documents in phase 1?",a:"In phase 1, each shard returns only doc IDs and scores (small metadata). If each shard returned full documents (which could be kilobytes or megabytes each), and you have 40 shards each returning top-100 docs, that's 4,000 full documents transferred over the network — potentially hundreds of megabytes. By using two phases, phase 1 transfers only small metadata from all shards, the coordinating node determines the global top-N (typically 10), and phase 2 fetches full documents from ONLY the winning shards. This reduces network traffic by ~99.75% (10 full docs instead of 4,000).",hint:"Consider the network traffic if 40 shards each returned 100 full documents in phase 1.",check:l=>{const r=l.toLowerCase();return(r.includes("network")||r.includes("traffic")||r.includes("bandwidth"))&&(r.includes("metadata")||r.includes("doc id")||r.includes("score"))}}]},{id:"sharding",icon:"🧩",color:"#7C3AED",title:"Sharding Strategies & NRT Search",subtitle:"Hash-based, time-based, tenant-based sharding, and how near real-time search actually works",resources:[{type:"read",title:"Elastic — Near real-time search explained",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/near-real-time.html"},{type:"read",title:"Vitess — Sharding strategies for distributed databases",url:"https://vitess.io/docs/concepts/shard/"},{type:"read",title:"Martin Kleppmann — Designing Data-Intensive Applications, Chapter 6: Partitioning",url:"https://dataintensive.net/"},{type:"video",title:"ByteByteGo — Sharding explained in 5 minutes",url:"https://www.youtube.com/watch?v=5faMjKXVGWE"}],content:[{heading:"Why Shard?",body:`**A single machine cannot store or query billions of documents fast enough.** Sharding distributes data across multiple nodes.

**Three reasons to shard:**
1. **Storage capacity:** 10 TB of index data won't fit on one node
2. **Query parallelism:** 40 shards search in parallel = 40x throughput
3. **Write throughput:** Writes can be distributed across primary shards on different nodes

**The fundamental question:** How do you decide which shard a document belongs to?

**Shard routing function:** shard = hash(routing_key) % num_shards

The routing key defaults to the document ID but can be customized. The choice of routing key determines data distribution, query efficiency, and hot-spot risk.

**Key constraint:** The number of primary shards is fixed at index creation (in Elasticsearch). This means you must plan capacity upfront.`},{heading:"Hash-Based Sharding",body:`**The simplest approach: hash the document ID and modulo by the number of shards.**

shard = hash(doc_id) % N

**Advantages:**
- **Uniform distribution** — hash functions spread data evenly
- **Deterministic routing** — given a doc ID, you always know which shard has it
- **Simple implementation** — one line of code

**Disadvantages:**
- **Cannot change N** without resharding all data (the hash changes when N changes)
- **No data locality** — related documents (same user, same category) end up on random shards
- **Range queries are expensive** — must query ALL shards for "all orders from customer X"

**Consistent hashing** (used by Cassandra, DynamoDB) mitigates the resharding problem: only ~1/N of data moves when adding a node. But Elasticsearch uses simple modulo hashing, which is why shard count is immutable.`},{heading:"Time-Based & Tenant-Based Sharding",body:`**Time-based sharding is the dominant pattern for log and event data.**

**Time-based:** Create a new index per day/week (e.g., logs-2026-04-19)
- **Natural hot/cold tiering:** yesterday's index moves from SSD to HDD, last month's is deleted
- **Easy retention:** delete an entire index to delete old data (much faster than deleting individual documents)
- **Query optimization:** searching "last 24 hours" only hits today's and yesterday's index

**Tenant-based:** One index per customer (e.g., tenant-acme, tenant-globex)
- **Data isolation:** one customer's data is completely separate from another's
- **Independent scaling:** large customers get more shards; small customers share infrastructure
- **Security:** access control at the index level is straightforward

**Routing-based:** Custom _routing field co-locates related documents
- Route by user_id: all of a user's documents land on the same shard
- **Advantage:** queries filtered by user_id hit only ONE shard instead of all shards
- **Risk:** uneven distribution if some users have much more data than others

**Choosing a strategy:**

| Data Type | Recommended Strategy | Reason |
|---|---|---|
| Logs / Events | Time-based | Natural retention, hot/cold, easy deletion |
| Product catalog | Hash-based | Uniform access, rarely deleted |
| Multi-tenant SaaS | Tenant-based | Isolation, security, independent scaling |
| Social media feeds | Routing by user_id | User-scoped queries, locality |`},{heading:"Near Real-Time (NRT) Search Deep Dive",body:`**"Near real-time" means documents become searchable within ~1 second of indexing, NOT instantly.**

**The refresh cycle:**
1. Document arrives → written to translog (durable) + in-memory buffer (not searchable)
2. Every ~1 second, a **refresh** creates a new segment from the buffer
3. The new segment is opened for reading → document is now searchable
4. Every ~30 minutes, a **flush** fsyncs segments to disk and clears the translog

**Why not instant?**
Creating a new segment for every single document would be extremely expensive — each segment involves file I/O, memory allocation, and adds to the segment count that must be searched and eventually merged.

**Tuning NRT:**
- **Lower refresh_interval** (e.g., 100ms) for faster searchability — at the cost of more segments and higher merge load
- **Raise refresh_interval** (e.g., 30s) for write-heavy workloads — less overhead, slightly stale search results
- **Disable refresh** (-1) during bulk indexing, then re-enable after

**Production consideration:** Most users never notice the 1-second delay. For truly real-time requirements (financial trading, chat), consider a write-through cache or push-based system instead of polling search.`}],questions:[{q:"You're designing a multi-tenant SaaS search system with 500 customers ranging from 1K to 10M documents each. What sharding strategy would you recommend and why?",a:"Use a hybrid approach: (1) For large tenants (>1M docs): dedicated index per tenant with appropriate shard count based on data size (e.g., 1 shard per 20-30 GB). This gives isolation, independent scaling, and the ability to tune settings per tenant. (2) For small tenants (<100K docs): shared indexes with routing-based sharding using tenant_id as the routing key. This avoids the overhead of thousands of tiny indexes (each index has metadata overhead, shard overhead, segment overhead). (3) For medium tenants (100K-1M): start in shared indexes, move to dedicated when they grow. The key reasons: avoid over-sharding (500 single-shard indexes = 500 shards, which is manageable but wasteful for tiny tenants), provide isolation for large tenants who need it, and use routing to ensure tenant-scoped queries only hit one shard in shared indexes.",hint:"Consider the overhead of creating 500 separate indexes versus sharing indexes with routing.",check:l=>{const r=l.toLowerCase();return(r.includes("tenant")||r.includes("routing"))&&(r.includes("large")||r.includes("small")||r.includes("dedicated")||r.includes("shared"))}}]},{id:"alternatives",icon:"🚀",color:"#DC2626",title:"Modern Search Alternatives",subtitle:"Meilisearch, Typesense, Tantivy, Quickwit, Vespa — the new generation of search engines",resources:[{type:"read",title:"Meilisearch — Official documentation",url:"https://docs.meilisearch.com/"},{type:"read",title:"Typesense — Official documentation",url:"https://typesense.org/docs/"},{type:"read",title:"Tantivy — Full-text search engine library in Rust",url:"https://github.com/quickwit-oss/tantivy"},{type:"read",title:"Quickwit — Cloud-native search engine for logs",url:"https://quickwit.io/docs/"},{type:"read",title:"Vespa — The open big data serving engine",url:"https://docs.vespa.ai/"},{type:"video",title:"Quickwit vs Elasticsearch — Log search comparison",url:"https://quickwit.io/blog/quickwit-vs-elasticsearch"}],content:[{heading:"Modern Search Engine Landscape",body:`**Elasticsearch/Solr dominated search for a decade. A new generation of search engines — mostly written in Rust and C++ — is challenging that dominance.**

| Engine | Language | Key Feature | License | Primary Use Case |
|---|---|---|---|---|
| **Meilisearch** | Rust | Instant search, typo-tolerant, easy setup | MIT | Developer-friendly site search |
| **Typesense** | C++ | Speed-focused, auto schema detection | GPL-3 | Real-time search, Algolia alternative |
| **Tantivy** | Rust | Lucene-equivalent library, embeddable | MIT | Building custom search engines |
| **Quickwit** | Rust (Tantivy) | Cloud-native, S3-backed | AGPL-3 | Log analytics (ELK replacement) |
| **Vespa** | Java/C++ | Hybrid search + ML serving + real-time | Apache-2 | Production ML-powered search |
| **Redis Search** | C | In-memory, real-time indexing | Redis License | Low-latency application search |

**The Rust revolution:** Meilisearch, Tantivy, and Quickwit are all written in Rust, giving them memory safety without garbage collection pauses (a major Elasticsearch pain point due to JVM GC).`},{heading:"Meilisearch vs Typesense",body:`**Both target the "developer-friendly instant search" niche that Algolia pioneered, but at a fraction of the cost.**

**Meilisearch:**
- **Best developer experience:** single binary, zero-config, built-in dashboard
- Typo tolerance, faceted search, geo search out of the box
- **Algolia-compatible API** — easy migration path
- Multi-tenancy support via tenant tokens
- NeuralSearch for hybrid semantic + keyword
- Limitation: single-node only (no native clustering yet)

**Typesense:**
- **Faster raw performance** than Meilisearch for large datasets
- Better faceting performance and more mature clustering
- Auto schema detection — just index documents, schema is inferred
- Scoped API keys for multi-tenancy
- Built-in conversation search (RAG-like Q&A)

**Both:** Sub-50ms latency, typo tolerance, faceted search, geo search, easy setup

**When to choose Meilisearch:** prototyping, small-medium datasets, developer-first UX
**When to choose Typesense:** production workloads, larger datasets, need clustering`},{heading:"Tantivy & Quickwit",body:`**Tantivy is the Rust equivalent of Lucene — a full-text search library, not a server.** It powers Quickwit the same way Lucene powers Elasticsearch.

**Tantivy:**
- Embeddable library (link it into your Rust application)
- Implements: inverted indexes, BM25, phrase queries, range queries, faceting
- MIT-licensed — use it anywhere with no restrictions
- **Use case:** building custom search engines with fine-grained control

**Quickwit (Tantivy + cloud-native distribution):**
- Stores data on **S3/object storage** (10-100x cheaper than SSD)
- Stateless compute nodes — no JVM, no heap tuning, no GC pauses
- Designed specifically for **log and trace analytics**
- Sub-second search over petabytes of log data on S3

**Quickwit vs Elasticsearch for logs:**

| Dimension | Quickwit | Elasticsearch |
|---|---|---|
| Storage cost | S3 (~$0.023/GB/mo) | SSD (~$0.10-0.25/GB/mo) |
| Compute | Stateless, scale to zero | Always-on nodes |
| JVM tuning | None (Rust) | Heap size, GC tuning |
| Ecosystem | Growing | Massive, mature |
| Query latency | Slightly higher (S3 reads) | Lower (local SSD) |
| Best for | Cost-sensitive log search | Real-time search, rich queries |`},{heading:"Vespa — Search + ML Serving",body:`**Vespa (by Yahoo/Verizon) uniquely combines search, recommendation, and ML model serving in one platform.**

**Key differentiators:**
- **Real-time ML serving:** deploy ONNX models alongside the index and score documents at query time
- **Hybrid search:** combines BM25, vector search, and ML features in a single query
- **Real-time writes:** documents are searchable within milliseconds (true real-time, not NRT)
- **Tensor operations:** native support for tensor computations in ranking expressions

**Architecture:**
Content Nodes (store data + run ML models) + Container Nodes (query processing, document processing)

**Use cases:**
- Personalized product search (combine text relevance + user features + ML scores)
- Real-time recommendation systems
- Conversational AI retrieval (RAG with inline reranking)

**When to choose Vespa over Elasticsearch:**
- You need to serve ML models at query time (Vespa is the only engine that does this natively)
- You need true real-time indexing (not 1-second NRT)
- You need to combine multiple ranking signals (text, vectors, features) in complex ways

**Downside:** Steeper learning curve than Elasticsearch, smaller community, more complex operations.`},{heading:"Selection Guide",body:`**Choosing the right search engine depends on your specific requirements.**

**Decision framework:**

Need instant site search with zero ops?
→ **Meilisearch** (simplest setup, great DX, MIT license)

Need an Algolia replacement at lower cost?
→ **Typesense** (performance + clustering + Algolia-compatible)

Building a custom search engine in Rust?
→ **Tantivy** (library, not a server — maximum control)

Replacing ELK for log analytics on a budget?
→ **Quickwit** (S3-backed, 10x cheaper storage)

Need search + ML model serving in production?
→ **Vespa** (unique ML serving + search combo)

Need the richest query language and ecosystem?
→ **Elasticsearch** (still the king of features and community)

Need sub-millisecond latency with in-memory indexing?
→ **Redis Search** (when data fits in RAM)

**The Algolia model (SaaS):**
Algolia distributes across 70+ data centers with sub-10ms response times and a 5-layer tie-breaking ranking algorithm (typo → words → proximity → attribute → exactness → custom ranking). If you want managed search-as-a-service, Algolia remains the premium option.`}],questions:[{q:"Your startup needs full-text search for a product catalog of 5 million items with typo tolerance, faceting, and instant results. Budget is limited. Which engine would you recommend and why?",a:"For a startup with 5M items and budget constraints, I'd recommend Typesense. Reasons: (1) Free and open source (GPL-3), self-hostable on a single server — no SaaS fees. (2) Handles 5M documents easily on a single node with sub-50ms latency. (3) Built-in typo tolerance, faceted search, geo search, and instant search — all the features you need out of the box. (4) Algolia-compatible API — if you outgrow self-hosting, migrating to Algolia (or back) is straightforward. (5) Auto schema detection reduces setup time. (6) Has native clustering when you need to scale later. Alternative: Meilisearch if developer experience is the top priority (even simpler setup, built-in dashboard), but Typesense has better performance at 5M+ docs and clustering support. Avoid Elasticsearch for this use case — it's overkill operationally (JVM tuning, heap management) and the developer experience for instant search is worse.",hint:"Consider what features the product catalog needs and which engines are free to self-host.",check:l=>{const r=l.toLowerCase();return(r.includes("typesense")||r.includes("meilisearch"))&&(r.includes("typo")||r.includes("facet")||r.includes("instant"))}}]}];function Uh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsxs("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:["✓"," Check"]}),i.jsxs("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsxs("span",{children:["📖"," Answer"]}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function $h(){const[l,r]=z.useState(null),[x,$]=z.useState(null),[L,F]=z.useState(new Set),[_,v]=z.useState({}),M=Hr.reduce((p,h)=>p+h.content.length,0),j=Math.round(L.size/M*100),q=p=>p.split(/\*\*(.*?)\*\*/g).map((k,c)=>c%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:k},c):i.jsx("span",{children:k},c)),T=p=>{const h=p.split(`
`),k=[];let c=0;for(;c<h.length;){const m=h[c];if(m.trim().startsWith("|")&&m.trim().endsWith("|")){const C=[];for(;c<h.length&&h[c].trim().startsWith("|")&&h[c].trim().endsWith("|");)C.push(h[c]),c++;const u=R=>R.split("|").slice(1,-1).map(y=>y.trim()),f=u(C[0]),b=C.findIndex(R=>/^\|[\s\-:|]+\|$/.test(R.trim())),A=b>=0?b+1:1,D=C.slice(A).filter(R=>!/^\|[\s\-:|]+\|$/.test(R.trim()));k.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:f.map((R,y)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:q(R)},y))})}),i.jsx("tbody",{children:D.map((R,y)=>{const N=u(R);return i.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:N.map((V,re)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:q(V)},re))},y)})})]})},`t${k.length}`))}else m===""?k.push(i.jsx("div",{style:{height:8}},`e${c}`)):k.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:q(m)},`p${c}`)),c++}return k};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#C2410C!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SEARCH ENGINE ARCHITECTURE"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Search Engine Architecture Deep Dive"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Multi-stage ranking, Google's stack, Lucene internals, Elasticsearch clusters, sharding strategies, and modern alternatives.",i.jsx("br",{}),Hr.length," sections ","·"," ",M," concepts ","·"," ",Hr.reduce((p,h)=>{var k;return p+(((k=h.questions)==null?void 0:k.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${j}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #4285F4, #059669, #FEC514, #7C3AED, #DC2626)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[L.size,"/",M]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Hr.map(p=>{var C;const h=l===p.id,k=p.content.map((u,f)=>`${p.id}-${f}`),c=k.filter(u=>L.has(u)).length,m=_[p.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>r(h?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[c,"/",p.content.length]}),i.jsx("span",{className:"ar",style:{transform:h?"rotate(90deg)":"rotate(0)"},children:"›"})]}),h&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsxs("button",{className:`tb ${m==="learn"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"learn"})),children:["📖"," Learn"]}),i.jsxs("button",{className:`tb ${m==="practice"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"practice"})),children:["✏️"," Practice (",((C=p.questions)==null?void 0:C.length)||0,")"]}),i.jsxs("button",{className:`tb ${m==="deeper"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"deeper"})),children:["🔗"," Go Deeper (",p.resources.length,")"]})]}),m==="learn"&&i.jsx("div",{children:p.content.map((u,f)=>{const b=`${p.id}-${f}`,A=x===b,D=L.has(b);return i.jsxs("div",{style:{borderTop:f>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>$(A?null:b),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${D?"d":""}`,onClick:R=>{R.stopPropagation();const y=new Set(L);y.has(b)?y.delete(b):y.add(b),F(y)},children:D&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:D?"#aaa":"#2a2a2a",textDecoration:D?"line-through":"none",flex:1},children:u.heading}),i.jsx("span",{className:"ar",style:{transform:A?"rotate(90deg)":"rotate(0)"},children:"›"})]}),A&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:T(u.body)})]},f)})}),m==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,f)=>i.jsx(Uh,{...u,color:p.color},`${p.id}-q-${f}`))]}),m==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,f)=>{const b=Oh[u.type];return i.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:b.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:b.bg,color:b.color},children:[b.emoji," ",b.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},f)})})]})]})]},p.id)})}),i.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Three tabs per section: Learn (content) ","·"," Practice (questions) ","·"," Go Deeper (resources)"]})]})}const Vh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Or=[{id:"lsm",icon:"🌲",color:"#059669",title:"LSM-Tree Architecture",subtitle:"MemTable → WAL → SSTables → compaction — the write-optimized storage engine behind RocksDB, Cassandra, and HBase",resources:[{type:"read",title:"O'Neil et al. — The Log-Structured Merge-Tree (original 1996 paper)",url:"https://www.cs.umb.edu/~poneil/lsmtree.pdf"},{type:"read",title:"RocksDB — Official Wiki",url:"https://github.com/facebook/rocksdb/wiki"},{type:"read",title:"Martin Kleppmann — Designing Data-Intensive Applications, Ch. 3: Storage",url:"https://dataintensive.net/"},{type:"video",title:"CMU Database Group — LSM-Trees (Andy Pavlo)",url:"https://www.youtube.com/watch?v=I6jB0nM9SKU"},{type:"read",title:"Dong et al. — RocksDB: Evolution of Development Priorities (Meta/VLDB)",url:"https://vldb.org/pvldb/vol14/p2472-dong.pdf"}],content:[{heading:"Why LSM-Trees?",body:`**LSM-Trees optimize for write-heavy workloads through sequential I/O.** Instead of updating data in-place (like B-Trees), LSM-Trees buffer writes in memory and flush them as sorted, immutable files.

**Key insight:** Sequential disk writes are 100-1000x faster than random writes. By converting random writes into sequential ones, LSM-Trees achieve dramatically higher write throughput.

**Systems using LSM-Trees:**
- **RocksDB** (Meta) — embedded key-value store, used by MySQL (MyRocks), CockroachDB, TiKV
- **LevelDB** (Google) — RocksDB's predecessor
- **Cassandra** (Apache) — wide-column store
- **HBase** (Apache) — Hadoop-based column store
- **CockroachDB** — distributed SQL (built on RocksDB/Pebble)

**The tradeoff:** LSM-Trees trade read performance for write performance. Reads may need to check multiple levels, while writes are always fast appends.`},{heading:"Write Path: MemTable → WAL → SSTable",body:`**Every write follows a three-step path:**

**Step 1: Append to WAL (Write-Ahead Log)**
- Sequential append to disk (cheap, durable)
- Provides crash recovery: if the process dies, uncommitted writes are replayed from the WAL

**Step 2: Insert into MemTable**
- In-memory sorted structure (red-black tree or skip list)
- Typically 64 MB – 256 MB in size
- Writes are fast: O(log n) insertion into a balanced tree

**Step 3: Flush to SSTable (when MemTable is full)**
- MemTable becomes immutable
- Flushed to disk as a sorted SSTable (Sorted String Table)
- WAL is truncated after flush

**Deletions are writes!** A delete inserts a "tombstone" marker for the key. The actual data is only physically removed during compaction.

**SSTable file layout:**
Data Blocks (sorted key-value pairs, 4-64 KB each) → Meta Blocks (Bloom filter, stats) → Index Block (sparse index for binary search) → Footer (offsets, magic number)`},{heading:"Read Path: MemTable → Bloom Filters → SSTables",body:`**Reads search in reverse chronological order, newest data first:**

1. **Check active MemTable** (in-memory, fastest)
2. **Check immutable MemTables** (if any are pending flush)
3. **Check SSTables level by level** (L0 → L1 → L2 → ...)
   - For each SSTable: check **Bloom filter** first
   - If Bloom filter says "definitely not present" → skip this SSTable entirely
   - If Bloom filter says "maybe present" → binary search within the SSTable

**Why newest first?** If a key was written twice, the most recent write is the correct value. By searching newest-to-oldest, the first match is always the right answer.

**Read amplification:** In the worst case (key doesn't exist), we check all SSTables across all levels. With 4 levels and 3 L0 SSTables, that's potentially 6+ disk reads. Bloom filters reduce this to near-zero for non-existent keys.

**Point read performance (warm cache):** With Bloom filters at 1% false positive rate, a non-existent key triggers ~0.06 expected disk reads instead of 6. For existing keys, typically 0-2 disk reads.`},{heading:"SSTable Internals",body:`**An SSTable is a sorted, immutable file containing key-value pairs organized into blocks.**

**Structure:**
- **Data Blocks** (4-64 KB each): Sorted key-value pairs, optionally compressed (Snappy, Zstd, LZ4)
- **Meta Blocks**: Bloom filter for fast negative lookups, min/max key, count, size stats
- **Index Block**: Sparse index mapping last key of each data block to its file offset, enabling binary search
- **Footer**: Pointers to index and meta blocks, magic number, format version

**How a point lookup works within an SSTable:**
1. Read footer → get index block offset
2. Binary search the index block → find which data block might contain the key
3. Read that data block → binary search within it
4. Return value (or "not found")

**Compression:** Data blocks are typically compressed individually. RocksDB defaults to Snappy for speed, but Zstd provides better compression ratios. Compression happens at the block level, so you decompress only the block you need.

**Key property:** SSTables are **never modified** after creation. This enables lock-free concurrent reads, efficient OS page caching, and simple replication (just copy the file).`}],questions:[{q:"Walk through a point read in an LSM-Tree with 4 levels (L0 has 3 SSTables). The key does NOT exist. How many disk reads occur with and without Bloom filters?",a:"Without Bloom filters: Check MemTable (0 disk reads) → Check L0 (3 overlapping SSTables, each requires a binary search = 3 reads) → L1 (1 read) → L2 (1 read) → L3 (1 read) = 6 disk reads total. With Bloom filters at 1% false positive rate: Each SSTable's Bloom filter says 'definitely not present' with 99% probability. Expected disk reads = 6 x 0.01 = 0.06 expected disk reads (usually zero). This is a ~99% reduction in disk I/O for non-existent key lookups, which is the most common case in many workloads.",hint:"Count the number of SSTables that must be checked at each level and multiply by the Bloom filter false positive rate.",check:l=>{const r=l.toLowerCase();return r.includes("6")&&(r.includes("bloom")||r.includes("0.06")||r.includes("99%")||r.includes("zero"))}},{q:"Why are deletions in an LSM-Tree implemented as writes (tombstones) instead of actually removing the data?",a:"Because SSTables are immutable — you cannot modify a file after it's written. Instead of removing the key-value pair from potentially multiple SSTables across multiple levels, a tombstone marker is written to the MemTable (and eventually flushed to an SSTable). During reads, if a tombstone is encountered before the actual value, the key is reported as 'not found'. The tombstone and the original data are only physically removed during compaction, when SSTables are merged and tombstoned entries are discarded. This design preserves the sequential-write-only property that makes LSM-Trees fast.",hint:"Think about the immutability of SSTables and what that means for deletions.",check:l=>{const r=l.toLowerCase();return(r.includes("immutable")||r.includes("immutab"))&&(r.includes("compaction")||r.includes("merge"))}}]},{id:"bloom",icon:"🌸",color:"#7C3AED",title:"Bloom Filters",subtitle:"Probabilistic data structures for fast negative lookups — math, false positive rates, and optimal sizing",resources:[{type:"read",title:"Bloom — Space/Time Trade-offs in Hash Coding (original 1970 paper)",url:"https://dl.acm.org/doi/10.1145/362686.362692"},{type:"infographic",title:"Jason Davies — Bloom Filter interactive visualization",url:"https://www.jasondavies.com/bloomfilter/"},{type:"read",title:"Michael Mitzenmacher — Bloom Filters and Cuckoo Filters (survey)",url:"https://www.eecs.harvard.edu/~michaelm/postscripts/im2005b.pdf"},{type:"video",title:"Spanning Tree — Bloom Filters explained",url:"https://www.youtube.com/watch?v=V3pzxngeLqw"}],content:[{heading:"How Bloom Filters Work",body:`**A Bloom filter is a space-efficient probabilistic data structure that answers: "Is this element definitely NOT in the set?"**

**Structure:** A bit array of m bits, initialized to all 0s, with k independent hash functions.

**Insert(x):** Set bits at positions h1(x), h2(x), ..., hk(x) to 1.

**Query(x):** If ALL bits at h1(x), h2(x), ..., hk(x) are 1 → "Maybe present" (could be false positive). If ANY bit is 0 → "Definitely not present" (guaranteed true negative).

**Key properties:**
- **No false negatives:** if the filter says "not present", it's 100% correct
- **Possible false positives:** the filter may say "maybe present" when the element is not actually in the set
- **No deletions:** you can't remove an element (setting bits to 0 might affect other elements)
- **Space efficient:** typically 10 bits per element for 1% FP rate (~1.2 bytes/element)`},{heading:"False Positive Rate & Optimal Parameters",body:`**The false positive probability depends on three parameters: m (bits), k (hash functions), n (elements).**

**False positive probability:**
P(false positive) = (1 - e^(-kn/m))^k

**Optimal number of hash functions:**
k_optimal = (m/n) x ln(2) = 0.693 x (m/n)

**Concrete example:**
Given: n = 1,000,000 elements, desired FP rate = 1%

Required bits: m = -n x ln(p) / (ln(2))^2
m = -1,000,000 x ln(0.01) / (0.693)^2
m = -1,000,000 x (-4.605) / 0.480
m = 9,585,059 bits = **1.14 MB**

Optimal k: k = (m/n) x 0.693 = 9.59 x 0.693 = **7 hash functions**

Verification: P = (1 - e^(-7x1,000,000/9,585,059))^7 = (0.518)^7 = 0.0099 = 1%

**Rule of thumb:** ~10 bits per element gives ~1% false positive rate with 7 hash functions. For 0.1% FP rate, use ~15 bits per element.`},{heading:"Bloom Filters in LSM-Tree Context",body:`**Bloom filters are the critical optimization that makes LSM-Tree reads fast.**

**Without Bloom filter:** A read for a non-existent key must check ALL SSTables:
L0 (3 SSTables) + L1 (10) + L2 (100) + L3 (1000) = 1,113 lookups

**With Bloom filter (1% FP rate):**
Expected disk reads = 1,113 x 0.01 = **~11 lookups** (99% reduction!)

**In practice:** The FP rate is even lower because Bloom filters are typically sized for each SSTable individually, and most SSTables are small enough that the filter fits in memory.

**Memory usage in RocksDB:**
- Default: 10 bits per key
- For 1 billion keys: 10 x 10^9 bits = 1.19 GB
- This 1.19 GB of memory saves thousands of unnecessary disk reads per second

**Bloom filter variants:**
- **Blocked Bloom filter:** cache-friendly, divides filter into cache-line-sized blocks
- **Counting Bloom filter:** allows deletions by using counters instead of bits (more space)
- **Cuckoo filter:** supports deletion and has slightly better space efficiency
- **Ribbon filter:** newer (2021), ~30% more space efficient than standard Bloom filters (used in newer RocksDB)`},{heading:"Practical Sizing Table",body:`**Quick reference for Bloom filter sizing at common scales:**

| Elements (n) | FP Rate | Bits/Element | Total Size | Hash Functions (k) |
|---|---|---|---|---|
| 100,000 | 1% | 9.6 | 117 KB | 7 |
| 1,000,000 | 1% | 9.6 | 1.14 MB | 7 |
| 10,000,000 | 1% | 9.6 | 11.4 MB | 7 |
| 100,000,000 | 1% | 9.6 | 114 MB | 7 |
| 1,000,000,000 | 1% | 9.6 | 1.14 GB | 7 |
| 1,000,000 | 0.1% | 14.4 | 1.71 MB | 10 |
| 1,000,000 | 0.01% | 19.2 | 2.28 MB | 13 |

**The space-accuracy tradeoff is remarkably favorable:** doubling the memory halves the FP rate (roughly). Going from 1% to 0.1% only costs 50% more memory.

**When NOT to use Bloom filters:**
- When the set is small enough to store exactly (hash set)
- When false positives are completely unacceptable (use a hash set instead)
- When elements need to be deleted frequently (use Cuckoo filter instead)`}],questions:[{q:"A Bloom filter has m = 10 million bits and n = 1 million elements. What is the optimal number of hash functions and the resulting false positive rate?",a:"k_optimal = (m/n) x ln(2) = 10 x 0.693 = 6.93, rounded to 7. FP rate = (1 - e^(-7 x 1,000,000 / 10,000,000))^7 = (1 - e^(-0.7))^7 = (1 - 0.4966)^7 = (0.5034)^7 = 0.0082 = 0.82%. Memory usage: 10M bits = 1.19 MB. With 7 hash functions and 10 bits per element, you get a very low false positive rate of under 1% using just over 1 MB of memory for 1 million elements.",hint:"Use the formula k = (m/n) x 0.693 and P = (1 - e^(-kn/m))^k.",check:l=>{const r=l.toLowerCase();return(r.includes("7")||r.includes("seven"))&&(r.includes("0.8")||r.includes("0.82")||r.includes("1%")||r.includes("under 1"))}}]},{id:"compaction",icon:"🔄",color:"#D97706",title:"Compaction Strategies",subtitle:"Leveled vs size-tiered compaction — write amplification, read amplification, and space amplification tradeoffs",resources:[{type:"read",title:"RocksDB — Leveled Compaction",url:"https://github.com/facebook/rocksdb/wiki/Leveled-Compaction"},{type:"read",title:"Cassandra — Compaction Strategies",url:"https://cassandra.apache.org/doc/latest/cassandra/operating/compaction/index.html"},{type:"read",title:"Dayan & Idreos — Dostoevsky: Better Space-Time Trade-offs for LSM-Trees",url:"https://scholar.harvard.edu/files/stratos/files/dostoevskykv.pdf"},{type:"video",title:"ScyllaDB — Understanding Compaction Strategies",url:"https://www.youtube.com/watch?v=0BYfmANP_sc"}],content:[{heading:"Why Compaction is Necessary",body:`**Without compaction, an LSM-Tree would accumulate thousands of small SSTables, making reads increasingly slow.**

**Problems compaction solves:**
1. **Too many SSTables** — each read must check more files, increasing latency
2. **Deleted data still on disk** — tombstones occupy space until physically removed
3. **Duplicate keys across levels** — old versions of updated keys waste space
4. **Overlapping key ranges in L0** — multiple L0 SSTables may contain the same key range

**Compaction = merge sort + garbage collection.** It takes multiple SSTables, merge-sorts them by key, removes tombstones and old versions, and writes the result as new SSTables.

**The three amplification factors:**

| Factor | Definition | Without Compaction | With Compaction |
|---|---|---|---|
| **Write Amplification** | Bytes written to disk / bytes written by user | 1x (just WAL + flush) | 10-30x (data rewritten during compaction) |
| **Read Amplification** | Disk reads per point query | O(N) where N = SSTable count | O(log N) |
| **Space Amplification** | Disk used / actual data size | Up to Nx (all versions kept) | ~1.1x (only live data) |`},{heading:"Leveled Compaction (LevelDB/RocksDB)",body:`**Leveled compaction organizes SSTables into levels with non-overlapping key ranges (except L0).**

**Level structure:**
- **L0:** MemTable dumps, key ranges MAY overlap (sorted within each SSTable, not across)
- **L1-LN:** Non-overlapping key ranges, each level 10x larger than the previous

**How it works:**
1. Pick an SSTable from level L
2. Find all overlapping SSTables in level L+1
3. Merge-sort them together
4. Write results back to level L+1
5. Delete old SSTables

**Size ratio (fanout):** Typically 10x between levels.
L0: ~64 MB, L1: ~640 MB, L2: ~6.4 GB, L3: ~64 GB, L4: ~640 GB

**Write amplification:** O(k x log_k(N/B)) where k = fanout. Each byte may be rewritten ~10 times per level transition. With 4 levels and fanout 10, total write amplification is roughly 40x.

**Read amplification:** Excellent! At most 1 SSTable per level (non-overlapping), so point reads check at most L levels + Bloom filter makes most checks free.

**Best for:** Read-heavy workloads, point lookups, consistent latency.`},{heading:"Size-Tiered Compaction (Cassandra)",body:`**Size-tiered compaction groups SSTables of similar size and merges them when enough accumulate.**

**How it works:**
1. Group SSTables of similar size into tiers
2. When N same-size SSTables accumulate (N=4 typical), merge into one
3. Resulting SSTable joins the next size tier

**Example:**
Tier 0: [1MB] [1MB] [1MB] [1MB] → merge → Tier 1: [4MB]
Tier 1: [4MB] [4MB] [4MB] [4MB] → merge → Tier 2: [16MB]

**Write amplification:** Lower than leveled! Each byte is rewritten only once per tier transition (1x per level vs k x per level in leveled).

**Read amplification:** Higher than leveled. Multiple SSTables at each tier may have overlapping key ranges, so a point read may need to check multiple SSTables per tier.

**Space amplification:** Higher — during compaction, you need space for both the input SSTables and the merged output (up to 2x temporarily).

| Property | Leveled | Size-Tiered |
|---|---|---|
| Write amplification | Higher (k per level) | Lower (1 per level) |
| Read amplification | Lower (1 SSTable/level) | Higher (multiple overlap) |
| Space amplification | Lower (~10%) | Higher (up to 2x during merge) |
| Read latency | Predictable | Variable |
| Write throughput | Lower | Higher |
| Best for | Read-heavy, point lookups | Write-heavy, time-series |`},{heading:"FIFO & Universal Compaction",body:`**Beyond leveled and size-tiered, other compaction strategies exist for specialized workloads.**

**FIFO Compaction (RocksDB):**
- Simply deletes the oldest SSTable when total size exceeds a threshold
- No merging at all — zero write amplification
- Only suitable for TTL-based data (logs, events) where old data can be discarded
- Essentially a circular buffer on disk

**Universal Compaction (RocksDB):**
- Hybrid between leveled and size-tiered
- Always compacts from newest to oldest SSTables
- Provides better write amplification than leveled while maintaining reasonable read performance
- RocksDB's recommendation for write-heavy workloads

**Choosing a compaction strategy:**

| Workload | Recommended Strategy | Reason |
|---|---|---|
| Read-heavy (OLTP) | Leveled | Low read amplification, predictable latency |
| Write-heavy (logs) | Size-tiered or FIFO | Low write amplification |
| Mixed (general) | Universal | Balanced tradeoffs |
| Time-series with TTL | FIFO | Zero compaction overhead |
| Cassandra | Size-tiered (default) | Optimized for Cassandra's write patterns |`}],questions:[{q:"Why does leveled compaction have higher write amplification than size-tiered? Explain with a concrete example.",a:"In leveled compaction, when an SSTable at level L is compacted, it must be merge-sorted with ALL overlapping SSTables at level L+1. With a fanout ratio of 10, one SSTable at L1 (64 MB) overlaps with up to 10 SSTables at L2 (each ~64 MB). So compacting one 64 MB SSTable rewrites up to 10 x 64 MB = 640 MB of data at L2. The byte is amplified ~10x per level. With 4 levels, total write amplification can be ~40x. In size-tiered compaction, 4 SSTables of similar size merge into one output SSTable — each byte is written only once per tier. The write amplification per tier is just 1x. Total write amplification across tiers is roughly equal to the number of tiers, typically 4-6x. The tradeoff: size-tiered has higher read amplification because multiple SSTables at each tier may overlap.",hint:"Think about how many SSTables are involved in a single compaction operation at each level.",check:l=>{const r=l.toLowerCase();return(r.includes("overlap")||r.includes("merge")||r.includes("rewrite"))&&(r.includes("10")||r.includes("fanout")||r.includes("level"))}}]},{id:"btree",icon:"🌳",color:"#2563EB",title:"B-Trees vs LSM-Trees",subtitle:"The fundamental storage engine tradeoff — random I/O vs sequential I/O, and which workloads favor which",resources:[{type:"read",title:"Bayer & McCreight — Organization and Maintenance of Large Ordered Indexes (B-Tree paper)",url:"https://dl.acm.org/doi/10.1145/1734663.1734671"},{type:"read",title:"Martin Kleppmann — Designing Data-Intensive Applications, Ch. 3",url:"https://dataintensive.net/"},{type:"video",title:"CMU Database Group — B+Tree Indexes (Andy Pavlo)",url:"https://www.youtube.com/watch?v=oRBiJah6o1M"},{type:"read",title:"Mark Callaghan — B-Tree vs LSM (MyRocks benchmarks)",url:"https://smalldatum.blogspot.com/"}],content:[{heading:"B-Tree Fundamentals",body:`**B-Trees are the dominant storage structure for traditional databases (PostgreSQL, MySQL/InnoDB, SQLite).** They organize data in sorted pages with efficient point lookups and range scans.

**Key properties:**
- Data is stored in **fixed-size pages** (typically 4-16 KB)
- Internal nodes contain keys and pointers to child pages
- Leaf nodes contain actual key-value pairs (in B+Trees, only leaves store values)
- Tree is always **balanced** — all leaves at the same depth

**Lookup:** O(log_B(N)) where B is the branching factor (~100-500 for 4 KB pages)
- For 1 billion keys with B=200: log_200(10^9) = **~3.3 levels** → 3-4 disk reads
- Internal nodes are typically cached in memory, so warm reads are ~1 disk read

**Write pattern:** Random I/O — must seek to the correct leaf page and update in-place. If the page is full, a **split** creates two half-full pages and updates the parent.

**Space utilization:** ~50-70% due to splits and page fragmentation. Pages are never fully packed.`},{heading:"Head-to-Head Comparison",body:`**The fundamental tradeoff: B-Trees optimize for reads, LSM-Trees optimize for writes.**

| Dimension | B-Tree | LSM-Tree |
|---|---|---|
| **Write pattern** | Random I/O (seek to leaf) | Sequential I/O (append) |
| **Write amplification** | O(B) per write (rewrite full page) | O(k x log_k(N/B)) amortized |
| **Read amplification** | O(log_B(N)) — 1 seek per level | O(log^2(N)/log(k)) — multiple levels |
| **Point read (warm)** | ~1 disk read (internal nodes cached) | Bloom filter → 0-2 reads typical |
| **Range scan** | Excellent (sequential leaf pages) | Good but may span SSTables |
| **Space efficiency** | ~50-70% (splits, fragmentation) | Near 100% (after compaction) |
| **Concurrency** | Complex locking (latches per page) | Simpler (immutable SSTables) |
| **Best for** | OLTP reads, transactions | Write-heavy, logging, time-series |

**Real-world choices:**
- **B-Tree:** PostgreSQL, MySQL/InnoDB, SQLite, MongoDB (WiredTiger has both)
- **LSM-Tree:** RocksDB, LevelDB, Cassandra, HBase, CockroachDB, TiKV`},{heading:"Lucene Segments vs LSM SSTables",body:`**Lucene's segment architecture is conceptually similar to LSM-Trees but structurally different.**

| Concept | LSM-Tree | Lucene |
|---|---|---|
| In-memory buffer | MemTable | In-memory index buffer |
| Durability log | WAL | Translog |
| On-disk immutable unit | SSTable | Segment |
| Background consolidation | Compaction | Merge |
| Delete handling | Tombstones | .del bitset |
| Sorted structure | By key | By term (inverted index) |

**Key difference:** SSTables store sorted key-value pairs (one lookup path per key). Lucene segments store inverted indexes (term → document list mappings). An SSTable answers "what is the value for key X?" while a Lucene segment answers "which documents contain term X?" — fundamentally different query patterns despite the same lifecycle.

**But the lifecycle is nearly identical:** buffer in memory → flush to immutable file → background merge → delete old files. Understanding one helps you understand the other.`},{heading:"When to Choose Which",body:`**Decision framework for storage engine selection:**

**Choose B-Tree when:**
- Read-heavy workload (>80% reads)
- Need transactions with strong isolation
- Range scans are frequent and performance-critical
- Workload is OLTP (online transaction processing)
- Database already uses B-Tree (don't fight the defaults)

**Choose LSM-Tree when:**
- Write-heavy workload (>50% writes)
- Time-series data, logging, event ingestion
- Space efficiency matters (LSM achieves near-100% utilization)
- Can tolerate slightly higher and variable read latency
- Embedding in an application (RocksDB as embedded store)

**Hybrid approaches:**
- **WiredTiger** (MongoDB): supports both B-Tree and LSM modes
- **BW-Tree** (Microsoft): lock-free B-Tree variant with LSM-like delta updates
- **Bw-Tree** is used in SQL Server Hekaton for in-memory OLTP

**The trend:** LSM-Trees are gaining ground. CockroachDB, TiDB, and YugabyteDB all chose LSM-Trees (via RocksDB/Pebble) for their SQL storage layer, even for OLTP workloads. The write amplification of B-Trees is a significant cost at scale.`}],questions:[{q:"Explain why Lucene segments and SSTables are conceptually similar but structurally different.",a:"Both are immutable on-disk files created by flushing in-memory buffers, both use background merging for consolidation, and both use tombstone-style deletion (Lucene uses a .del bitset). The lifecycle is nearly identical: buffer in memory → flush to immutable file → background merge → delete old files. However, SSTables store sorted key-value pairs (one lookup path per key), while Lucene segments store inverted indexes (term → document list mappings). An SSTable answers 'what is the value for key X?' while a Lucene segment answers 'which documents contain term X?' — fundamentally different query patterns. Additionally, a Lucene segment contains multiple data structures (term dictionary via FST, postings lists, doc values, stored fields, BKD trees), while an SSTable is a simpler sorted key-value structure.",hint:"Focus on what data structure each stores and what questions each answers.",check:l=>{const r=l.toLowerCase();return(r.includes("immutable")||r.includes("lifecycle"))&&(r.includes("inverted")||r.includes("term"))&&(r.includes("key-value")||r.includes("sorted"))}}]},{id:"google-storage",icon:"☁️",color:"#4285F4",title:"Google's Storage Stack",subtitle:"Colossus, Bigtable, Spanner, BigQuery — the infrastructure powering Google Search and beyond",resources:[{type:"read",title:"Google — Bigtable: A Distributed Storage System for Structured Data",url:"https://research.google/pubs/pub27898/"},{type:"read",title:"Google — Spanner: Google's Globally-Distributed Database",url:"https://research.google/pubs/pub39966/"},{type:"read",title:"Google — Dremel: Interactive Analysis of Web-Scale Datasets (BigQuery)",url:"https://research.google/pubs/pub36632/"},{type:"video",title:"Google Cloud — Spanner internals deep dive",url:"https://www.youtube.com/watch?v=nvlt0dA7rsQ"}],content:[{heading:"Colossus — The Filesystem Foundation",body:`**Colossus is Google's distributed filesystem, the successor to Google File System (GFS).** Every other Google storage system is built on top of it.

**Key properties:**
- Separates metadata (Colossus master) from data (chunk servers)
- Petabyte-scale operations across commodity servers
- Automatic replication, erasure coding, and failure recovery
- Underpins: Bigtable, Spanner, BigQuery, Blobstore, and all other Google storage

**Evolution from GFS:**
- GFS had a single master (bottleneck) → Colossus distributes metadata
- GFS used 64 MB chunks → Colossus supports smaller chunks for latency-sensitive workloads
- GFS was append-only → Colossus supports random writes (needed by Bigtable/Spanner)

**Analogy:** Colossus is to Google what HDFS is to the Hadoop ecosystem — the foundation that everything else builds on. But Colossus is decades ahead in terms of scale and sophistication.`},{heading:"Bigtable — Column-Family Storage",body:`**Bigtable is Google's sparse, distributed, sorted key-value store with column families. Used by: Google Search, Maps, Gmail, YouTube.**

**Data model:**
Row Key: "com.example.www"
Column Family "contents": {"": "<html>..." @t=123}
Column Family "anchor": {"cnn.com": "CNN", "bbc.co.uk": "BBC News"}

**Key properties:**
- **Sparse:** rows can have different columns; empty cells cost nothing
- **Sorted by row key** → efficient range scans on key prefixes
- **Versioned:** each cell stores multiple timestamped versions
- **Column families:** group related columns for storage locality

**Architecture:** Table → Tablets → SSTables
- Each tablet is an LSM-Tree: MemTable + WAL + SSTables
- Tablets are ~100-200 MB, automatically split and merged
- Tablets are served by tablet servers, coordinated by a master

**Design insight:** The row key design determines performance. For web URLs, reversing the domain ("com.example.www") ensures all pages from the same domain are stored adjacently, enabling efficient per-domain scans.`},{heading:"Spanner — Global Consistency with TrueTime",body:`**Spanner is Google's globally distributed, strongly consistent relational database.** It's the only system that provides external consistency at global scale.

**The TrueTime innovation:**
- Uses **GPS receivers + atomic clocks** in every data center
- TrueTime returns an interval [earliest, latest] rather than a point in time
- Uncertainty interval is typically 1-7 ms (bounded by clock synchronization)
- Transactions **wait out the uncertainty interval** before committing

**External consistency guarantee:** If transaction T1 commits before T2 starts, T1's commit timestamp is guaranteed to be less than T2's. This is stronger than serializable isolation — it's linearizable across the globe.

**How it works:**
1. Transaction acquires locks
2. Choose commit timestamp s = TrueTime.now().latest
3. Wait until TrueTime.now().earliest > s (wait out uncertainty)
4. Commit and release locks

**Wait time:** ~7 ms average. This small latency tax buys global consistency.

**Used by:** Google Ads (F1), Google Play, Cloud Spanner (public version)

**Impact:** Spanner proved that you DON'T have to sacrifice consistency for global distribution — if you have sufficiently accurate clocks.`},{heading:"BigQuery — Serverless Analytics",body:`**BigQuery is Google's serverless, petabyte-scale SQL analytics engine.** It separates storage and compute completely.

**Architecture:**
- **Storage:** Capacitor columnar format on Colossus (highly compressed)
- **Compute:** Dremel query engine — tree of root, intermediate, and leaf servers
- **Scheduling:** Borg-managed compute slots allocated per query

**Dremel's tree architecture:**
Root server receives query → distributes to intermediate servers → intermediate servers distribute to leaf servers → leaf servers scan storage → results aggregate back up the tree

**Key features:**
- **Serverless:** no clusters to manage, no capacity planning
- **Columnar:** only reads the columns needed for the query
- **Slot-based:** compute is measured in slots (CPU + memory units)
- **BI Engine:** in-memory analysis for sub-second query latency on frequently accessed data

**For search systems:** BigQuery is where you analyze search logs, compute offline ranking features, evaluate search quality (nDCG on test sets), and run A/B test analyses. It's the analytics layer, not the serving layer.`}],questions:[{q:"How does Spanner's TrueTime API enable global consistency, and why can't regular NTP-synchronized clocks achieve the same thing?",a:"TrueTime uses GPS receivers and atomic clocks to provide bounded clock uncertainty — it returns an interval [earliest, latest] with typical uncertainty of 1-7 ms. Transactions choose a commit timestamp at the latest bound and then WAIT until the earliest bound exceeds that timestamp. This guarantees that if T1 commits before T2 starts, T1's timestamp < T2's timestamp (external consistency). Regular NTP clocks have unbounded uncertainty — NTP can be off by 100ms or more, and you don't know the exact error bound. Without knowing the uncertainty bound, you can't know how long to wait to guarantee ordering. Spanner's innovation is making clock uncertainty a KNOWN, BOUNDED quantity, then paying the small latency cost (~7ms) of waiting it out.",hint:"Focus on the concept of 'bounded uncertainty' vs 'unknown uncertainty' in clock synchronization.",check:l=>{const r=l.toLowerCase();return(r.includes("uncertainty")||r.includes("interval")||r.includes("bound"))&&(r.includes("wait")||r.includes("gps")||r.includes("atomic"))}}]},{id:"cap",icon:"🛡️",color:"#DC2626",title:"CAP & PACELC Theorems",subtitle:"The fundamental impossibility results in distributed systems and how search systems navigate the tradeoffs",resources:[{type:"read",title:"Brewer — CAP Twelve Years Later: How the Rules Have Changed",url:"https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/"},{type:"read",title:"Abadi — Consistency Tradeoffs in Modern Distributed Database System Design (PACELC)",url:"https://cs.uwaterloo.ca/~kmsalem/courses/CS848/W20/reading/abadi-pacelc.pdf"},{type:"read",title:"Kleppmann — Please stop calling databases CP or AP",url:"https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html"},{type:"video",title:"Martin Kleppmann — Distributed Systems lecture on CAP theorem",url:"https://www.youtube.com/watch?v=k-D2fagS_D4"}],content:[{heading:"CAP Theorem",body:`**In a distributed system during a network partition, you must choose between Consistency and Availability.**

**The three properties:**
- **Consistency (C):** Every read receives the most recent write or an error
- **Availability (A):** Every request receives a (non-error) response, though it may not be the most recent write
- **Partition Tolerance (P):** The system continues to operate despite network partitions between nodes

**During a partition, pick one:**
- **CP:** Block writes/reads to maintain consistency. Examples: MongoDB, HBase, Bigtable, Redis
- **AP:** Continue serving but may return stale data. Examples: Cassandra, DynamoDB, DNS, CouchDB
- **CA:** Only possible without partitions (single-node). Examples: Traditional RDBMS (PostgreSQL, MySQL single-node)

**Important nuance:** Partitions are rare but inevitable. The real question is: what does your system do during the 99.9% of the time when there's NO partition?`},{heading:"PACELC — Beyond CAP",body:`**PACELC extends CAP to address normal (non-partition) operation: if no Partition, choose between Latency and Consistency.**

If **P**artition → choose **A** or **C** (same as CAP)
**E**lse → choose **L**atency or **C**onsistency

**System classifications:**

| System | During Partition | Normal Operation | Notes |
|---|---|---|---|
| **Cassandra** | PA (favor availability) | EL (favor latency) | Tunable consistency per query |
| **DynamoDB** | PA | EL | Eventually consistent by default |
| **MongoDB** | PC (favor consistency) | EC | Strong consistency always |
| **HBase** | PC | EC | Single-master per region |
| **Spanner** | PC | EC | TrueTime enables global consistency |
| **Cosmos DB** | PA | EL or EC | Tunable per collection |
| **CockroachDB** | PC | EL | Consistent, optimizes latency |

**Elasticsearch in PACELC:** PA/EL — during partitions, favors availability (continues serving on accessible shards); during normal operation, favors low latency (reads from any replica, which may be slightly behind the primary due to the ~1s refresh interval).`},{heading:"CAP in Search Systems",body:`**Search systems overwhelmingly choose availability over consistency.** A stale search result is far more acceptable than no search results.

**Elasticsearch's approach:**
- Uses primary-replica model with configurable write consistency
- The **wait_for_active_shards** parameter controls the tradeoff:
  - wait_for_active_shards=1: Write to primary only (fast, less durable)
  - wait_for_active_shards=all: Wait for all replicas (slow, more durable)
  - Default: wait for primary + 1 replica
- Split-brain protection via quorum-based master election

**Why AP is usually right for search:**
- A slightly stale search result is 1000x better than "Service Unavailable"
- Search indexes are typically rebuilt from a source of truth (database, data lake)
- Freshness is already "near real-time" (~1s refresh), so a few seconds of staleness during a partition is acceptable
- Users don't notice if result #8 should actually be result #7

**Exception:** Financial search (trading, compliance) may need CP behavior — returning stale regulatory data could be a legal violation.`}],questions:[{q:"Where does Elasticsearch fall in the PACELC classification and why?",a:"Elasticsearch is PA/EL. During partitions (P), it favors availability (A): continues serving reads and writes on accessible shards even if some replicas are unreachable. A query may return results from only the available shards. During normal operation (Else), it favors low latency (L) over strict consistency: reads can be served from any replica, which may be slightly behind the primary due to the ~1-second refresh interval. This means a read immediately after a write may not see the just-written document. The wait_for_active_shards setting allows tuning toward consistency (wait for replicas to acknowledge writes) at the cost of higher write latency and reduced availability.",hint:"Think about what Elasticsearch does when some nodes are unreachable and whether reads always return the latest write.",check:l=>{const r=l.toLowerCase();return(r.includes("pa")||r.includes("availab"))&&(r.includes("el")||r.includes("latency"))&&(r.includes("stale")||r.includes("refresh")||r.includes("replica"))}}]},{id:"indexes",icon:"📇",color:"#0891B2",title:"Index Types Beyond Inverted",subtitle:"Forward indexes, doc values, BKD trees, FSTs, points indexes — the full taxonomy of search index structures",resources:[{type:"read",title:"Apache Lucene — Codec Architecture",url:"https://lucene.apache.org/core/9_0_0/core/org/apache/lucene/codecs/package-summary.html"},{type:"read",title:"Mihov & Maurel — Direct Construction of Minimal Acyclic Subsequential Transducers (FST)",url:"https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.24.3698"},{type:"video",title:"Elastic — How Lucene Stores Your Data (Lucenecon)",url:"https://www.youtube.com/watch?v=T5RmMNDR5XI"},{type:"read",title:"Lucene BKD Trees — Technical overview",url:"https://users.cs.duke.edu/~pankaj/publications/papers/bkd-sstd.pdf"}],content:[{heading:"Index Type Taxonomy",body:`**Lucene uses six different index structures, each optimized for a different access pattern:**

| Index Type | Data Structure | Used For | Lucene Files |
|---|---|---|---|
| **Inverted Index** | Term → [DocIDs] | Full-text search | .tim, .doc |
| **Forward Index** | DocID → [Terms] | Document retrieval by ID | .fdt (stored fields) |
| **Doc Values** | Field → [Values by DocID] | Sorting, aggregations | .dvd files (columnar) |
| **BKD Tree** | Block KD-Tree | Numeric ranges, geo queries | .dim, .dii files |
| **FST** | Finite State Transducer | Term dictionary compression | .tip files |
| **Points Index** | Packed arrays | IP addresses, timestamps | Point values |

**Key insight:** Each data structure is purpose-built for its access pattern. Using the inverted index for sorting would be catastrophically slow; using doc values for full-text search would be impossible. The right index for the right job.`},{heading:"Finite State Transducers (FSTs)",body:`**FSTs are the secret weapon behind Lucene's term dictionary. They provide O(m) lookup (m = term length) with minimal memory.**

**How FSTs differ from tries:**
- **Prefix sharing** (like tries): common prefixes reuse nodes ("september", "november", "december" share nothing at the start but...)
- **Suffix sharing** (unique to FSTs): common suffixes also merge. Words ending in "ember" share those suffix nodes
- **Result:** minimal acyclic deterministic finite automaton — the smallest possible structure for the term set

**Performance:**
- Lookup: O(m) where m = term length (character-by-character traversal)
- Construction: requires sorted input, uses Mihov-Maurel algorithm
- Memory: dramatically smaller than hash maps for large term dictionaries

**Why not just use a hash map?** For 10 million unique terms averaging 12 characters:
- Hash map: ~240 MB (key + hash + overhead per entry)
- FST: ~30-50 MB (shared prefixes and suffixes compress dramatically)
- FST also supports prefix queries ("hotel*") that hash maps cannot`},{heading:"BKD Trees & Doc Values",body:`**BKD Trees handle numeric and geospatial data. Doc Values provide columnar storage for sorting and aggregations.**

**BKD Trees (Block KD-Trees):**
- Multi-dimensional extension of binary search trees
- Alternates splitting dimensions at each level (e.g., split on X, then Y, then X...)
- Leaf blocks stored as sorted, packed arrays for cache efficiency
- Supports: range queries, nearest-neighbor, polygon containment
- Replaced legacy numeric tries in Lucene 6+ (much more space efficient)

**Example:** Finding all hotels with price between $100-$200 AND rating > 4.0
BKD tree splits on price dimension first, then rating, quickly narrowing to the matching block.

**Doc Values (Columnar Storage):**
Row-oriented (stored fields): doc1: {price:120, rating:4.5}, doc2: {price:85, rating:4.8}
Columnar (doc values): price: [120, 85, 200, 45], rating: [4.5, 4.8, 3.9, 4.2]

**Why columnar for sorting/aggregations?**
- Sorting by price: read only the price column (sequential I/O), not entire documents
- Aggregation (avg rating): scan only the rating column
- Compression: same-type values compress much better (delta encoding, run-length encoding)
- Memory-mapped files for zero-copy access

**Doc values are NOT for full-text search** — that's the inverted index's job. They complement each other.`}],questions:[{q:"Why does Lucene use FSTs for the term dictionary instead of a hash map?",a:"Three reasons: (1) Space efficiency: For 10 million terms, an FST uses ~30-50 MB vs ~240 MB for a hash map. FSTs achieve this through both prefix sharing (like tries) and suffix sharing (unique to FSTs), creating minimal acyclic structures. (2) Prefix query support: FSTs can efficiently answer prefix queries like 'hotel*' by traversing the prefix path, which hash maps fundamentally cannot support. (3) Ordered iteration: FSTs maintain sort order, enabling range queries on terms. Hash maps have no ordering. The tradeoff is that FSTs require sorted input during construction and are immutable (perfect for Lucene's immutable segments), while hash maps support dynamic insertions.",hint:"Compare memory usage and think about what query types each supports.",check:l=>{const r=l.toLowerCase();return(r.includes("space")||r.includes("memory")||r.includes("smaller"))&&(r.includes("prefix")||r.includes("suffix")||r.includes("sharing"))}}]}];function Kh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsxs("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:["✓"," Check"]}),i.jsxs("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsxs("span",{children:["📖"," Answer"]}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Qh(){const[l,r]=z.useState(null),[x,$]=z.useState(null),[L,F]=z.useState(new Set),[_,v]=z.useState({}),M=Or.reduce((p,h)=>p+h.content.length,0),j=Math.round(L.size/M*100),q=p=>p.split(/\*\*(.*?)\*\*/g).map((k,c)=>c%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:k},c):i.jsx("span",{children:k},c)),T=p=>{const h=p.split(`
`),k=[];let c=0;for(;c<h.length;){const m=h[c];if(m.trim().startsWith("|")&&m.trim().endsWith("|")){const C=[];for(;c<h.length&&h[c].trim().startsWith("|")&&h[c].trim().endsWith("|");)C.push(h[c]),c++;const u=R=>R.split("|").slice(1,-1).map(y=>y.trim()),f=u(C[0]),b=C.findIndex(R=>/^\|[\s\-:|]+\|$/.test(R.trim())),A=b>=0?b+1:1,D=C.slice(A).filter(R=>!/^\|[\s\-:|]+\|$/.test(R.trim()));k.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:f.map((R,y)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:q(R)},y))})}),i.jsx("tbody",{children:D.map((R,y)=>{const N=u(R);return i.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:N.map((V,re)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:q(V)},re))},y)})})]})},`t${k.length}`))}else m===""?k.push(i.jsx("div",{style:{height:8}},`e${c}`)):k.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:q(m)},`p${c}`)),c++}return k};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#059669!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"STORAGE ENGINES & DATASTORES"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Storage Engines & Datastores Deep Dive"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["LSM-Trees, Bloom filters, compaction strategies, B-Trees, Google's storage stack, CAP/PACELC, and index types behind search.",i.jsx("br",{}),Or.length," sections ","·"," ",M," concepts ","·"," ",Or.reduce((p,h)=>{var k;return p+(((k=h.questions)==null?void 0:k.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${j}%`,height:"100%",background:"linear-gradient(90deg, #059669, #7C3AED, #D97706, #2563EB, #4285F4, #DC2626, #0891B2)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[L.size,"/",M]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Or.map(p=>{var C;const h=l===p.id,k=p.content.map((u,f)=>`${p.id}-${f}`),c=k.filter(u=>L.has(u)).length,m=_[p.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>r(h?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[c,"/",p.content.length]}),i.jsx("span",{className:"ar",style:{transform:h?"rotate(90deg)":"rotate(0)"},children:"›"})]}),h&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsxs("button",{className:`tb ${m==="learn"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"learn"})),children:["📖"," Learn"]}),i.jsxs("button",{className:`tb ${m==="practice"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"practice"})),children:["✏️"," Practice (",((C=p.questions)==null?void 0:C.length)||0,")"]}),i.jsxs("button",{className:`tb ${m==="deeper"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"deeper"})),children:["🔗"," Go Deeper (",p.resources.length,")"]})]}),m==="learn"&&i.jsx("div",{children:p.content.map((u,f)=>{const b=`${p.id}-${f}`,A=x===b,D=L.has(b);return i.jsxs("div",{style:{borderTop:f>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>$(A?null:b),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${D?"d":""}`,onClick:R=>{R.stopPropagation();const y=new Set(L);y.has(b)?y.delete(b):y.add(b),F(y)},children:D&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:D?"#aaa":"#2a2a2a",textDecoration:D?"line-through":"none",flex:1},children:u.heading}),i.jsx("span",{className:"ar",style:{transform:A?"rotate(90deg)":"rotate(0)"},children:"›"})]}),A&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:T(u.body)})]},f)})}),m==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,f)=>i.jsx(Kh,{...u,color:p.color},`${p.id}-q-${f}`))]}),m==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,f)=>{const b=Vh[u.type];return i.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:b.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:b.bg,color:b.color},children:[b.emoji," ",b.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},f)})})]})]})]},p.id)})}),i.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Three tabs per section: Learn (content) ","·"," Practice (questions) ","·"," Go Deeper (resources)"]})]})}const Jh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ur=[{id:"rag",icon:"📚",color:"#7C3AED",title:"Retrieval-Augmented Generation (RAG)",subtitle:"The dominant pattern for grounding LLMs in external knowledge — chunking, embedding, retrieval, and evaluation",resources:[{type:"read",title:"Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",url:"https://arxiv.org/abs/2005.11401"},{type:"read",title:"Anthropic — Contextual Retrieval guide",url:"https://www.anthropic.com/news/contextual-retrieval"},{type:"read",title:"LangChain — RAG tutorial",url:"https://python.langchain.com/docs/tutorials/rag/"},{type:"video",title:"Jerry Liu — Building Production RAG (LlamaIndex)",url:"https://www.youtube.com/watch?v=TRjq7t2Ms5I"},{type:"read",title:"RAGAS — RAG evaluation framework",url:"https://docs.ragas.io/"}],content:[{heading:"RAG Pipeline Overview",body:`**RAG grounds LLMs in external knowledge, preventing hallucination and enabling access to private or current data.**

**The pipeline has two phases:**

**Ingestion (offline):**
Documents → Chunk (512-1024 tokens) → Embed each chunk → Store in vector database

**Query (online):**
Query → Embed query → Retrieve top-K similar chunks → Feed chunks as context to LLM → Generate answer with sources

**Why RAG over fine-tuning?**
- **Up-to-date:** index new documents without retraining
- **Attributable:** can cite specific source chunks
- **Cost-effective:** no GPU training, just API calls
- **Private data:** works with proprietary documents without exposing them to the model provider

**When fine-tuning IS better:**
- Teaching the model a new skill or style (not new knowledge)
- When latency is critical (RAG adds retrieval latency)
- When the knowledge is stable and well-defined`},{heading:"Chunking Strategies",body:`**Chunking is the most underrated component of RAG. Poor chunking = poor retrieval = poor answers.**

**Chunking strategies:**

| Strategy | How It Works | Pros | Cons |
|---|---|---|---|
| **Fixed-size** | Split every N tokens | Simple, predictable | May split mid-sentence |
| **Recursive** | Split by paragraph → sentence → word | Respects structure | Uneven chunk sizes |
| **Semantic** | Use embedding similarity to find boundaries | Natural boundaries | Expensive (embedding each candidate split) |
| **Document-aware** | Use headings, sections, tables | Preserves structure | Format-specific logic |

**Recommended defaults:**
- Chunk size: **512 tokens** (sweet spot for most embedding models)
- Overlap: **50-100 tokens** (prevents information loss at boundaries)
- Strategy: **Recursive** for most use cases

**The context loss problem:** "The company's revenue increased 15% YoY to $4.2B" — which company? What period? The chunk alone doesn't say. This is exactly what Contextual Retrieval solves (see section 4).

**Embedding models (as of 2025):**
- OpenAI text-embedding-3-small: 1536d, good quality, $0.02/1M tokens
- Voyage AI voyage-3: high quality, competitive pricing
- Cohere embed-v3: multilingual, good for non-English
- BGE-M3 / E5-Mistral: best open-source options`},{heading:"Hybrid Retrieval & Evaluation",body:`**Hybrid retrieval combines vector (semantic) search with BM25 (keyword) search for better recall.**

**Why hybrid?** Vector search misses exact keyword matches ("error code E-4021"), BM25 misses semantic matches ("car" vs "automobile"). Together, they catch both.

**Reciprocal Rank Fusion (RRF):**
For each document, combine ranks from both systems:
score(doc) = 1/(k + rank_semantic) + 1/(k + rank_bm25)
where k = 60 is standard.

**RAG Evaluation Metrics:**

| Metric | Formula | Measures |
|---|---|---|
| **Context Recall** | relevant_retrieved / total_relevant | Did we find the right chunks? |
| **Context Precision** | relevant_in_top_k / k | Are top results actually relevant? |
| **Faithfulness** | supported_claims / total_claims | Does the answer stick to context? |
| **Answer Relevancy** | semantic_sim(answer, query) | Does the answer address the question? |

**Evaluation tools:** RAGAS (open-source framework), LangSmith, Langfuse — all provide automated RAG evaluation pipelines.

**Key insight:** Measure retrieval quality SEPARATELY from generation quality. A perfect LLM can't fix bad retrieval.`}],questions:[{q:"Why does standard RAG fail at global questions like 'What are the main themes in this corpus?' and what approach addresses this?",a:"Standard RAG retrieves the top-K most similar chunks to the query via embedding similarity. For a global question, no single chunk contains a corpus-wide summary — the answer is distributed across potentially ALL chunks. Standard RAG might retrieve a few topically relevant chunks but miss the breadth needed for a comprehensive answer. GraphRAG (Microsoft, 2024) solves this by: (1) extracting entities and relationships from all documents to build a knowledge graph, (2) running community detection (Leiden algorithm) to find clusters of related entities, (3) generating summaries for each community using an LLM, (4) answering global questions via map-reduce over community summaries. This enables corpus-level analytical questions that standard RAG fundamentally cannot answer.",hint:"Think about what happens when the answer requires information from many different chunks spread across the entire corpus.",check:l=>{const r=l.toLowerCase();return(r.includes("chunk")||r.includes("distributed")||r.includes("spread"))&&(r.includes("graphrag")||r.includes("graph")||r.includes("community")||r.includes("knowledge graph"))}}]},{id:"agentic",icon:"🤖",color:"#DC2626",title:"Agentic Search",subtitle:"Perplexity AI, ChatGPT Search, Claude Web Search — LLMs as search orchestrators",resources:[{type:"read",title:"Perplexity AI — How Perplexity builds product",url:"https://www.perplexity.ai/hub"},{type:"read",title:"OpenAI — ChatGPT Search documentation",url:"https://openai.com/index/searchgpt-is-now-chatgpt/"},{type:"read",title:"Anthropic — Claude web search",url:"https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/web-search"},{type:"video",title:"Aravind Srinivas (Perplexity CEO) — Building an AI search engine",url:"https://www.youtube.com/watch?v=LFSS_eKEcsU"},{type:"read",title:"Brave Search API — AI-ready search",url:"https://brave.com/search/api/"}],content:[{heading:"What is Agentic Search?",body:`**Agentic search systems use LLMs as orchestrators that decompose queries, execute multiple retrievals, and synthesize answers with citations.**

**Traditional search:** Query → 10 blue links → user clicks and reads
**Agentic search:** Query → LLM decomposes into sub-queries → parallel retrievals → synthesis with inline citations → direct answer

**Key capabilities:**
- **Query decomposition:** break complex questions into retrievable sub-queries
- **Multi-hop reasoning:** chain retrievals ("who founded X?" → "when was that person born?")
- **Source triangulation:** verify claims across multiple sources
- **Citation generation:** every claim linked to its source URL

**The shift:** Search is moving from "find me 10 pages" to "answer my question with evidence." This fundamentally changes the user experience and the economics of search (no more ad-click revenue from result pages).`},{heading:"Perplexity AI Architecture",body:`**Perplexity indexes 200+ billion unique URLs and processes 200 million daily queries with a median latency of 358 ms.**

**Pipeline:**
1. **Query Analysis & Decomposition** — determine if multi-hop retrieval is needed, generate sub-queries
2. **Parallel Search** — execute sub-queries simultaneously against the index
3. **Hybrid Retrieval** — lexical + semantic matching, progressive filtering of stale content
4. **Tiered Reranking** — fast heuristic filter → cross-encoder reranker
5. **LLM Synthesis** — generate answer with inline [1], [2], [3] citations

**Technical details:**
- **Exabyte-scale index** with tens of thousands of CPUs
- Median latency: **358 ms** (P95: 763 ms)
- AI-driven content understanding: dynamically extracts semantically meaningful content
- Documents decomposed into **self-contained spans** for sub-document retrieval (not just full-page chunks)

**Query decomposition example:**
Original: "How does the iPhone 16 Pro battery compare to Galaxy S25 for gaming?"
Sub-query 1: "iPhone 16 Pro battery life gaming hours benchmark"
Sub-query 2: "Samsung Galaxy S25 Ultra battery life gaming benchmark"
Sub-query 3: "iPhone 16 Pro vs Samsung Galaxy S25 battery comparison"
Each sub-query retrieves independently; results are merged and synthesized.`},{heading:"ChatGPT Search & Claude Web Search",body:`**Both OpenAI and Anthropic have integrated real-time web search directly into their chat products.**

**ChatGPT Search (OpenAI):**
- Uses Bing API + custom reranking + GPT-4 synthesis
- Triggered automatically when the query needs current information
- Returns answers with clickable source links
- Can search and synthesize across news, Wikipedia, shopping, and more
- Available as a built-in tool via the Responses API

**Claude Web Search (Anthropic):**
- Real-time web retrieval integrated into Claude's response generation
- Uses search results as additional context alongside the conversation
- Focuses on factual accuracy and source attribution
- Available as a tool in the Messages API

**Key design difference:**
- **Perplexity:** search-first, always retrieves (even for simple questions)
- **ChatGPT/Claude:** LLM-first, retrieves only when the model determines it needs external information

**Impact on traditional search:**
- Zero-click answers reduce traffic to publisher websites
- SEO shifts from "rank on page 1" to "be cited by AI"
- Ad revenue models under pressure (no result page to show ads on)
- Content licensing becomes a major business issue`},{heading:"Building Your Own Agentic Search",body:`**You can build an agentic search system using existing tools and APIs.**

**Minimal stack:**
1. **Search API:** Tavily ($0.01/search, AI-optimized), Brave Search API (free tier), or Serper ($0.001/search)
2. **LLM:** Claude Sonnet or GPT-4o for synthesis
3. **Orchestration:** Simple Python loop or LangGraph for complex flows

**Basic pattern:**
- User query → LLM decides if search is needed
- If yes: generate 1-3 search queries → call search API → collect results
- LLM synthesizes answer from search results with citations
- Return answer + source URLs

**Advanced patterns:**
- **Iterative search:** if first results are insufficient, reformulate and search again
- **Source verification:** search for counter-evidence to check claims
- **Knowledge graph enrichment:** extract entities from results, build temporary graph
- **Multi-source fusion:** combine web search + vector DB + SQL database results

**Cost per query:** ~$0.02-0.10 (search API + LLM tokens). At scale, prompt caching reduces LLM costs by 50-90%.`}],questions:[{q:"Compare Perplexity's 'search-first' approach with ChatGPT's 'LLM-first' approach. What are the tradeoffs?",a:"Perplexity is search-first: every query triggers retrieval, even simple ones. This ensures every answer is grounded in current sources, reducing hallucination. Tradeoff: higher latency and cost per query (always pays for search + retrieval), and unnecessary searches for questions the LLM already knows ('what is 2+2?'). ChatGPT is LLM-first: the model first attempts to answer from its training data and only triggers web search when it determines current information is needed. This is faster and cheaper for knowledge questions, but risks: (1) the model may not realize it needs to search (answers with outdated info), (2) the decision to search is itself error-prone, (3) users may not know whether the answer came from search or training data. Perplexity's approach is better for factual/current information queries. ChatGPT's approach is better for reasoning, creative, and code tasks where search adds latency without value.",hint:"Think about when each approach adds unnecessary overhead and when it misses important information.",check:l=>{const r=l.toLowerCase();return(r.includes("perplexity")||r.includes("search-first")||r.includes("always"))&&(r.includes("chatgpt")||r.includes("llm-first")||r.includes("decide"))}}]},{id:"graphrag",icon:"🕸️",color:"#059669",title:"GraphRAG (Microsoft 2024)",subtitle:"Knowledge graphs + community detection + LLM summarization for corpus-level question answering",resources:[{type:"read",title:"Edge et al. — From Local to Global: A Graph RAG Approach to Query-Focused Summarization",url:"https://arxiv.org/abs/2404.16130"},{type:"read",title:"Microsoft — GraphRAG official repository",url:"https://github.com/microsoft/graphrag"},{type:"read",title:"Microsoft Research — GraphRAG: Unlocking LLM discovery on narrative data",url:"https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/"},{type:"video",title:"Microsoft Research — GraphRAG deep dive presentation",url:"https://www.youtube.com/watch?v=r09tJfON6kE"}],content:[{heading:"The Problem GraphRAG Solves",body:`**Standard RAG fails at global questions about a corpus because retrieval is local — it finds similar chunks, not corpus-wide patterns.**

**Questions standard RAG handles well:**
- "What is the capital of France?" (specific fact, one chunk)
- "Summarize this document" (one document, manageable context)
- "What does section 3.2 say about X?" (local lookup)

**Questions standard RAG fails at:**
- "What are the main themes across all 500 documents?" (global pattern)
- "How do topics A, B, and C relate to each other?" (cross-document relationships)
- "What entities appear most frequently and in what contexts?" (corpus-level analysis)

**Why the failure?** Top-K retrieval returns the K most similar chunks to the query. For a global question, no single chunk contains the answer — the answer is the emergent pattern across ALL chunks. Retrieving 5-10 chunks out of 10,000 gives you a keyhole view, not the full picture.

**GraphRAG's insight:** Pre-compute a knowledge graph and community summaries ONCE (expensive), then answer global questions cheaply by aggregating over pre-computed summaries.`},{heading:"GraphRAG Pipeline",body:`**GraphRAG has two phases: offline indexing and online query processing.**

**Phase 1: Index Building (offline, LLM-driven):**
1. **Entity & Relation Extraction:** LLM reads each document chunk and extracts entities (people, organizations, concepts) and relationships between them
2. **Knowledge Graph Construction:** Entities become nodes, relationships become edges
3. **Community Detection:** Leiden algorithm clusters the graph into hierarchical communities of related entities
4. **Community Summary Generation:** LLM generates a natural-language summary for each community

**Entity extraction example:**
Text: "Microsoft acquired Activision Blizzard for $69B. CEO Satya Nadella announced the deal."
Entities: Microsoft (Org), Activision Blizzard (Org), Satya Nadella (Person)
Relations: Microsoft --[acquired]--> Activision Blizzard ($69B), Satya Nadella --[CEO_of]--> Microsoft

**Phase 2: Query Processing:**
- **Local Search:** Retrieve entities + their neighbors from the graph → focused, specific answers
- **Global Search:** Map each community summary to a partial answer → Reduce (merge) partial answers into final answer → corpus-level themes, trends, summaries

**Performance:** For global sensemaking over ~1M tokens, GraphRAG shows "substantial improvements over conventional RAG" in both comprehensiveness and diversity.`},{heading:"When to Use GraphRAG vs Standard RAG",body:`**GraphRAG is NOT a replacement for standard RAG — it's a complement for a specific class of questions.**

| Question Type | Standard RAG | GraphRAG |
|---|---|---|
| Specific fact lookup | Excellent | Overkill |
| Document summarization | Good | Unnecessary |
| Cross-document themes | Fails | Excellent |
| Entity relationship analysis | Poor | Excellent |
| Trend identification | Fails | Good |
| Corpus-level summary | Fails | Excellent |

**Cost considerations:**
- Index building is expensive: every chunk requires an LLM call for entity extraction, plus community summarization
- For a 10,000-chunk corpus: ~10,000 LLM calls for extraction + ~100-500 for community summaries
- Cost: ~$20-100 for indexing (one-time), then queries are fast and cheap
- Standard RAG indexing: just embedding ($0.02/1M tokens) — 100x cheaper

**Recommendation:** Start with standard RAG. Add GraphRAG only when you need corpus-level analytical questions. Many applications never need GraphRAG.

**Hybrid approach:** Use standard RAG for local queries (fast, cheap) and GraphRAG's global search for analytical queries. Route between them based on query classification.`}],questions:[{q:"What role does the Leiden community detection algorithm play in GraphRAG and why is it necessary?",a:"The Leiden algorithm clusters the knowledge graph into hierarchical communities of related entities. This is necessary because global questions can't be answered by looking at individual entities — they require understanding groups of related entities. For example, 'What are the main themes?' requires identifying clusters of entities that co-occur or are related. The Leiden algorithm finds these natural groupings. Then, an LLM generates a summary for each community. At query time, global questions are answered via map-reduce: each community summary produces a partial answer (map), and partial answers are merged into a final answer (reduce). Without community detection, you'd have to send ALL entities to the LLM, which exceeds context limits. Communities provide a natural way to partition the graph into manageable, thematically coherent chunks.",hint:"Think about why you can't just send all entities to the LLM and what role communities play in making global queries tractable.",check:l=>{const r=l.toLowerCase();return(r.includes("cluster")||r.includes("group")||r.includes("community"))&&(r.includes("summary")||r.includes("summari")||r.includes("map")||r.includes("reduce"))}}]},{id:"contextual",icon:"📝",color:"#D97706",title:"Contextual Retrieval (Anthropic 2024)",subtitle:"Solving the context loss problem in chunking by prepending LLM-generated context to each chunk before embedding",resources:[{type:"read",title:"Anthropic — Introducing Contextual Retrieval",url:"https://www.anthropic.com/news/contextual-retrieval"},{type:"read",title:"Anthropic — Prompt caching documentation",url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching"},{type:"read",title:"Kamradt — Semantic Chunking (Five Levels of Text Splitting)",url:"https://github.com/FullStackRetrieval-com/RetrievalTutorials"},{type:"video",title:"Greg Kamradt — 5 Levels of Text Splitting for RAG",url:"https://www.youtube.com/watch?v=8OJC21T2SL4"}],content:[{heading:"The Context Loss Problem",body:`**When you chunk a document, individual chunks lose the surrounding context that makes them meaningful.**

**Example of context loss:**
Chunk: "The company's revenue increased 15% YoY to $4.2B"
Problem: Which company? What time period? What division?

**Why this matters for retrieval:** If a user asks "What was Acme Corp's Q3 2024 revenue?", this chunk is a perfect answer. But the embedding of "The company's revenue increased 15% YoY to $4.2B" has no information about "Acme Corp" or "Q3 2024" — the retriever may not find it.

**Traditional solutions (and their limits):**
- **Overlap between chunks:** helps at boundaries but doesn't solve the "which company?" problem
- **Metadata tagging:** requires manual or rule-based extraction
- **Document titles in chunks:** helps but is coarse-grained
- **Parent-child retrieval:** retrieves the parent section when a child chunk matches, but doesn't help the embedding itself

**Contextual Retrieval's approach:** Use an LLM to generate a concise context description for each chunk, then prepend it to the chunk before embedding. The context becomes part of the vector representation.`},{heading:"How Contextual Retrieval Works",body:`**Before embedding each chunk, an LLM generates a short context description explaining what the chunk contains and how it fits within the document.**

**Process:**
1. For each chunk, send the FULL document + the chunk to the LLM
2. LLM generates: "This chunk is from Acme Corp's Q3 2024 earnings report, specifically the revenue highlights section."
3. Prepend this context to the chunk before embedding
4. The enriched chunk now embeds information about Acme Corp AND Q3 2024

**Prompt caching for efficiency:**
For a document with 50 chunks, the full document text would be sent 50 times. With prompt caching:
- First chunk: full document processed (cache miss)
- Chunks 2-50: document read from cache at 90% discount
- Cost with caching: ~$1.02 per million document tokens
- Cost without caching: ~$3.50 per million document tokens
- Savings: ~71%

**Performance results (Pass@k = % queries where golden chunk is in top-k):**

| Approach | Pass@20 | Failure Rate Reduction |
|---|---|---|
| Baseline RAG | 90.06% | — |
| + Contextual Embeddings | 94.29% | ~40% |
| + Hybrid Search (BM25) | 95.23% | ~41% |
| + Reranking | 97.45% | **63%** |

**Key insight:** Contextual embeddings alone reduce retrieval failure rate by ~40%. Adding BM25 hybrid search and reranking achieves a 63% reduction.`},{heading:"Implementation & Best Practices",body:`**Practical implementation details for Contextual Retrieval:**

**Context generation prompt:**
"Here is the full document: <document>{doc}</document>
Here is the chunk we want to situate: <chunk>{chunk}</chunk>
Give a short succinct context to situate this chunk within the overall document for improving search retrieval. Answer only with the context."

**Best practices:**
- Use **prompt caching** (Anthropic) to avoid resending the full document for each chunk
- Use a **cheap, fast model** (Claude Haiku) for context generation — quality is sufficient
- Keep context to **1-3 sentences** — more isn't better (dilutes the embedding)
- **Combine with hybrid search:** Contextual Retrieval + BM25 + reranking gives the best results
- **Cache hit rate** of 60%+ is typical, keeping costs low

**When NOT to use Contextual Retrieval:**
- Very short documents (chunks already have full context)
- When document structure is very uniform (context adds little value)
- When cost is the primary constraint and retrieval quality is already good enough

**Combining everything for maximum quality:**
Contextual Embeddings + BM25 Hybrid Search + Reciprocal Rank Fusion + Cross-Encoder Reranking = 97.45% Pass@20 (best known configuration from Anthropic's benchmarks)`}],questions:[{q:"Explain why Contextual Retrieval uses prompt caching and calculate the cost savings for a document with 100 chunks.",a:"Contextual Retrieval sends the full document + each chunk to an LLM. For 100 chunks, that's 100 LLM calls, each containing the full document text. Without caching, the document is processed from scratch 100 times. With Anthropic's prompt caching, the document text is cached after the first call, and subsequent calls read it from cache at a 90% discount. For an 8K-token document: without caching = 100 x 8K = 800K input tokens at full price. With caching = 8K (first call, full price) + 99 x 8K x 0.1 (cached) = 8K + 79.2K = 87.2K effective token cost. Savings: (800K - 87.2K) / 800K = ~89%. At Anthropic's Haiku pricing ($0.25/1M input), this means ~$0.20 without caching vs ~$0.022 with caching for 100 chunks.",hint:"Calculate the total input tokens with and without caching, remembering that cached tokens cost 10% of full price.",check:l=>{const r=l.toLowerCase();return(r.includes("cache")||r.includes("cach"))&&(r.includes("90%")||r.includes("89%")||r.includes("10%")||r.includes("discount"))}}]},{id:"rerank",icon:"🎯",color:"#2563EB",title:"Reranking with LLMs",subtitle:"Cross-encoders, RankGPT, Cohere Rerank, RankZephyr — making retrieval results more relevant",resources:[{type:"read",title:"Sun et al. — Is ChatGPT Good at Search? RankGPT paper",url:"https://arxiv.org/abs/2304.09542"},{type:"read",title:"Cohere — Rerank v3.5 documentation",url:"https://docs.cohere.com/reference/rerank"},{type:"read",title:"Pradeep et al. — RankZephyr: LLM Reranking via Distillation",url:"https://arxiv.org/abs/2312.02724"},{type:"video",title:"Nils Reimers — Cross-Encoders for Reranking (Sentence Transformers)",url:"https://www.youtube.com/watch?v=OATCbEZ7kJA"}],content:[{heading:"Why Reranking Matters",body:`**Retrieval gets you candidate documents. Reranking ensures the BEST candidates are at the top.**

**The retrieval-reranking pipeline:**
Stage 1 (Retrieval): Fast, recall-optimized → returns ~100-1000 candidates
Stage 2 (Reranking): Slow, precision-optimized → reorders top candidates

**Why not just use a better retriever?** Even the best bi-encoder (embedding model) cannot do deep token-level interaction between query and document. A bi-encoder embeds query and document independently and compares vectors. A cross-encoder (reranker) processes the query AND document together through a transformer, seeing every token interaction.

**Analogy:** Bi-encoder = reading the book summary and movie description separately, deciding if they match. Cross-encoder = reading the book and watching the movie, then deciding if they match.

**Impact:** Adding reranking to a RAG pipeline typically improves answer quality by 15-30% (measured by faithfulness and answer relevancy).`},{heading:"Cross-Encoder vs LLM-Based Reranking",body:`**Two major approaches to reranking, each with different tradeoffs.**

**1. Cross-Encoder Rerankers (Traditional):**
- Input: [CLS] query [SEP] document [SEP]
- Output: single relevance score (0-1)
- Speed: ~5-10 ms per document
- Models: ms-marco-MiniLM (33M params), BGE-reranker-v2-M3 (567M params)

**2. LLM-Based Rerankers (RankGPT):**
- Input: "Given query Q, rank these passages by relevance: [P1, P2, ..., PN]"
- Output: ranked permutation [3, 1, 5, 2, 4]
- Speed: ~100-500 ms per batch of 20 passages
- Models: GPT-4, RankZephyr (open-source distilled from GPT-4)

**3. API Rerankers:**
- Cohere Rerank v3.5: fastest production reranker
- Voyage Rerank 2.5: best speed/quality balance
- Zerank-1: highest accuracy in benchmarks

| Reranker | Quality | Speed | Cost | Open Source |
|---|---|---|---|---|
| Zerank-1 | Highest | Slow | High | No |
| Voyage Rerank 2.5 | High | Fast | Medium | No |
| Cohere v3.5 | Good | Fastest | Low | No |
| RankZephyr | High | Medium | Free (self-hosted) | Yes |
| BGE-reranker-v2 | Good | Fast | Free (self-hosted) | Yes |`},{heading:"RankGPT & RankZephyr",body:`**RankGPT uses a large language model to rank passages via a listwise approach — seeing all candidates at once.**

**RankGPT prompt pattern:**
"I will provide a query and a list of passages. Rank the passages based on their relevance to the query. Output a permutation of passage numbers from most to least relevant.

Query: {query}
Passage 1: {doc1}
Passage 2: {doc2}
...
Passage N: {docN}

Ranking:"

Output: [3, 1, 5, 2, 4] — a permutation of passage numbers

**Why listwise works:** The LLM can compare passages against each other, not just against the query. It can reason: "Passage 3 directly answers the question, while Passage 1 is related but tangential."

**RankZephyr** is an open-source 7B model trained via knowledge distillation from GPT-4's ranking behavior. It achieves comparable quality at much lower cost (~$0 for self-hosted vs ~$0.05-0.20 per RankGPT call with GPT-4).

**When to use which:**
- **Production, high throughput:** Cohere Rerank v3.5 or BGE-reranker
- **Maximum quality, low volume:** RankGPT with GPT-4
- **Self-hosted, good quality:** RankZephyr
- **Budget-friendly production:** BGE-reranker-v2 (self-hosted, free)`}],questions:[{q:"Compare cross-encoder reranking with RankGPT. When would you use each and why?",a:"Cross-encoders (e.g., ms-marco-MiniLM) process one (query, doc) pair at a time through a transformer, outputting a relevance score. They are fast (~5ms per doc) and work well at scale, making them ideal for production systems with high throughput requirements. However, they only see one document at a time and can't compare documents against each other. RankGPT uses a large LLM (GPT-4) to rank a batch of documents in a single prompt, leveraging the LLM's world knowledge, reasoning ability, and ability to compare documents against each other (listwise ranking). This produces higher quality rankings but is much slower (~100-500ms per batch) and expensive. Use cross-encoders for: production systems, high QPS, cost-sensitive applications. Use RankGPT for: high-value searches (legal, medical), evaluation/benchmarking, low-volume/high-stakes queries.",hint:"Think about the tradeoff between throughput/cost and ranking quality.",check:l=>{const r=l.toLowerCase();return r.includes("cross")&&r.includes("fast")||r.includes("rankgpt")&&(r.includes("quality")||r.includes("expensive")||r.includes("slow"))}}]},{id:"clip",icon:"🖼️",color:"#9333EA",title:"Multimodal Retrieval (CLIP)",subtitle:"Contrastive Language-Image Pre-training — unified embeddings for text and images enabling cross-modal search",resources:[{type:"read",title:"Radford et al. — Learning Transferable Visual Models From Natural Language Supervision (CLIP)",url:"https://arxiv.org/abs/2103.00020"},{type:"read",title:"OpenAI — CLIP blog post",url:"https://openai.com/research/clip"},{type:"read",title:"Zhai et al. — SigLIP: Sigmoid Loss for Language Image Pre-Training",url:"https://arxiv.org/abs/2303.15343"},{type:"video",title:"Yannic Kilcher — CLIP paper explained",url:"https://www.youtube.com/watch?v=T9XSU0pKX2E"}],content:[{heading:"CLIP Architecture",body:`**CLIP creates a unified embedding space for text and images, enabling cross-modal retrieval.**

**Architecture:**
- **Text Encoder:** Transformer that maps text → 512/768d embedding
- **Image Encoder:** Vision Transformer (ViT) or ResNet that maps image → 512/768d embedding
- Both encoders project into the SAME vector space

**Training objective (contrastive learning):**
Given a batch of (text, image) pairs:
- Maximize cosine similarity of MATCHING pairs
- Minimize cosine similarity of NON-MATCHING pairs

Loss = -log(exp(sim(text_i, image_i) / τ) / Σ_j exp(sim(text_i, image_j) / τ))
where τ is a learned temperature parameter.

**Training data:** 400 million (text, image) pairs from the internet. The scale of data is what makes CLIP work — it learns extremely general visual concepts from natural language descriptions.

**Key innovation:** Text and image embeddings are directly comparable via cosine similarity. You can search for images using text queries or find similar images using text descriptions, all without any task-specific fine-tuning (zero-shot).`},{heading:"Multimodal Search Applications",body:`**CLIP enables four types of cross-modal retrieval:**

**1. Text → Image:** "Find images of sunset over mountains"
- Embed the text query with CLIP's text encoder
- Compare against all image embeddings via cosine similarity
- Return top-K most similar images

**2. Image → Image:** "Find images similar to this one"
- Embed the query image with CLIP's image encoder
- Compare against all image embeddings
- Return top-K nearest neighbors

**3. Image → Text:** "Find documents describing this image"
- Embed the image with CLIP's image encoder
- Compare against text embeddings of document chunks
- Return the most relevant textual descriptions

**4. Any → Any:** Unified embedding space enables arbitrary cross-modal retrieval

**Real-world applications:**
- **E-commerce:** visual product search ("find dresses like this photo")
- **Stock photography:** natural language image search
- **Content moderation:** find images matching text descriptions of policy violations
- **Medical imaging:** search for similar pathology images across databases
- **Fashion:** "find outfits similar to this celebrity's look"`},{heading:"CLIP Successors & Limitations",body:`**CLIP spawned a family of improved multimodal models:**

**SigLIP (Google, 2023):** Replaces CLIP's softmax contrastive loss with a simpler sigmoid loss. Eliminates the need for large batch sizes during training. Achieves better performance with 4x less compute.

**OpenCLIP:** Open-source reproduction of CLIP trained on LAION-5B (5 billion image-text pairs). Matches or exceeds original CLIP quality.

**BLIP-2 (Salesforce):** Adds a "Q-Former" bridge between frozen image and language models. Enables image captioning and visual question answering, not just retrieval.

**LLaVA (Large Language and Vision Assistant):** Connects CLIP's visual encoder to an LLM (LLaMA), enabling conversational image understanding.

**CLIP limitations:**
- **Compositional understanding:** "a red car next to a blue house" may match images of blue cars or red houses (poor at spatial/attribute binding)
- **Fine-grained categories:** struggles with similar breeds, species, or technical diagrams
- **Text rendering:** cannot reliably read text in images
- **Bias:** inherits biases from internet training data (gender, racial stereotypes in image associations)
- **Temporal understanding:** no concept of actions, sequences, or video (single frame only)`}],questions:[{q:"What is the key innovation of CLIP for multimodal retrieval and why is zero-shot capability important?",a:"CLIP's key innovation is training a text encoder and image encoder jointly using contrastive learning on 400M (text, image) pairs, mapping both modalities into the SAME embedding space. This means a text embedding and an image embedding are directly comparable via cosine similarity. The zero-shot capability is important because previous models required task-specific fine-tuning — e.g., a model trained for 'cat vs dog' classification couldn't do 'car vs truck' without retraining. CLIP can perform ANY image classification or retrieval task by simply embedding the class labels as text and comparing against image embeddings. You can search for 'sunset over mountains' without ever training on sunset images specifically. This eliminates the need for labeled datasets, fine-tuning, and task-specific models, dramatically reducing the cost and time to deploy multimodal retrieval.",hint:"Focus on what 'same embedding space' enables and why not needing task-specific training matters.",check:l=>{const r=l.toLowerCase();return(r.includes("same")||r.includes("shared")||r.includes("unified"))&&(r.includes("embedding")||r.includes("space"))&&(r.includes("zero-shot")||r.includes("fine-tun")||r.includes("task-specific"))}}]},{id:"dsi",icon:"🧠",color:"#0891B2",title:"Generative Retrieval (DSI)",subtitle:"Differentiable Search Index — when the model's parameters ARE the index",resources:[{type:"read",title:"Tay et al. — Transformer Memory as a Differentiable Search Index (DSI)",url:"https://arxiv.org/abs/2202.06991"},{type:"read",title:"Mehta et al. — DSI++: Updating Transformer Memory with New Documents",url:"https://arxiv.org/abs/2212.09744"},{type:"read",title:"Wang et al. — A Neural Corpus Indexer for Document Retrieval",url:"https://arxiv.org/abs/2206.02743"},{type:"video",title:"Yi Tay — Differentiable Search Index talk",url:"https://www.youtube.com/watch?v=qlB0TPBQ7YY"}],content:[{heading:"The Paradigm Shift",body:`**Traditional retrieval uses an external index. Generative retrieval encodes the entire index in the model's parameters.**

**Traditional pipeline:**
Query → Encoder → Vector → ANN Index → Document IDs → Fetch Documents

**Generative retrieval (DSI):**
Query → Seq2Seq Model → Document ID (autoregressively generated)

**Training phases:**
1. **Indexing phase:** Model learns: Document Content → Document ID
2. **Retrieval phase:** Model learns: Query → Document ID

The model memorizes the mapping between document content and document IDs, then generalizes to map queries to the right document IDs.

**Why this is radical:** No inverted index, no vector database, no ANN search, no embedding model. The retrieval system IS the language model. A single model replaces an entire search pipeline.`},{heading:"Document ID Strategies",body:`**The representation of document IDs significantly impacts DSI's performance.**

| Strategy | Example | Pros | Cons |
|---|---|---|---|
| **Atomic** | doc_42 → single token | Simple decoding | Huge softmax for large corpora |
| **Naive String** | "4", "2" → two tokens | Scalable vocabulary | No semantic meaning in IDs |
| **Semantic** | Hierarchical cluster IDs | Structured, meaningful | Complex construction |

**Semantic ID construction (best approach):**
1. Embed all documents → 768d vectors
2. Hierarchical k-means clustering:
   - Level 1: 10 clusters → first digit
   - Level 2: 10 sub-clusters per cluster → second digit
   - Level 3: 10 sub-sub-clusters → third digit
3. Document embedding → [Cluster 3, Sub-cluster 7, Sub-sub 2] → ID "372"

**At inference:** Model generates "3" → "7" → "2" token by token, using beam search to find the best document IDs.

**Why semantic IDs work better:** Similar documents get similar IDs (because they're in the same clusters). The model can generalize: "this query is about topic 3, subtopic 7" without memorizing every individual document.`},{heading:"Limitations & Future Directions",body:`**DSI is a research direction, not yet a production technology. Several fundamental challenges remain.**

**Current limitations:**
1. **Scale:** Only evaluated on corpora up to ~100K documents. Web-scale search indexes billions. The model's parameters must encode all document information, which doesn't scale.
2. **Updating:** Adding new documents requires retraining the model (though DSI++ addresses this with continual learning)
3. **Out-of-distribution:** DSI models struggle with queries/documents significantly different from training data
4. **Latency:** Autoregressive ID generation is slower than a single ANN lookup
5. **Not yet competitive** with dense retrieval (bi-encoders + HNSW) at any meaningful scale

**Why it still matters:**
- Represents a fundamentally new paradigm for information retrieval
- Could become viable as model capacity and training efficiency improve
- The "model as index" concept may find niches (small, specialized corpora)
- Inspired related work: GENRE (entity retrieval), SEAL (search engine autoregressive language)

**The grand question:** Can a model with enough parameters eventually replace a billion-document index? Current evidence says no, but the field is moving fast.`}],questions:[{q:"Why hasn't generative retrieval (DSI) replaced traditional search at web scale despite being an elegant idea?",a:"Four main limitations prevent DSI from replacing traditional search: (1) Scale — DSI has only been evaluated on corpora up to ~100K documents; web-scale search indexes billions. The model's parameters must encode ALL document information, requiring enormous model capacity. (2) Updating — adding new documents requires retraining the model, while traditional indexes support real-time updates via incremental indexing (like Lucene's segment model). (3) Out-of-distribution generalization — DSI models struggle with queries or documents significantly different from training data, while BM25/vector search are more robust to distribution shift. (4) Latency — autoregressive ID generation (token by token) is fundamentally slower than a single ANN vector lookup. Traditional retrieval separates the index (fast data structure) from the model (slow reasoning), allowing each to be optimized independently.",hint:"Think about what happens when you need to add new documents or when the corpus is billions of documents.",check:l=>{const r=l.toLowerCase();return(r.includes("scale")||r.includes("billion"))&&(r.includes("update")||r.includes("retrain")||r.includes("adding"))}}]},{id:"streaming",icon:"⚡",color:"#F59E0B",title:"Streaming Indexes",subtitle:"Real-time document indexing via Kafka, exactly-once semantics, and backpressure handling",resources:[{type:"read",title:"Confluent — Kafka Streams documentation",url:"https://docs.confluent.io/platform/current/streams/index.html"},{type:"read",title:"Vespa — Real-time indexing documentation",url:"https://docs.vespa.ai/en/writing-to-vespa.html"},{type:"read",title:"Elasticsearch — Data streams for time-series",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/data-streams.html"},{type:"video",title:"Confluent — Building Real-Time Search with Kafka and Elasticsearch",url:"https://www.youtube.com/watch?v=K4wEm1B92x0"}],content:[{heading:"Why Streaming Indexes?",body:`**Modern search systems need to make documents searchable within seconds of creation, not hours or days.**

**Use cases requiring real-time indexing:**
- **E-commerce:** new product listings searchable immediately
- **News/social media:** breaking news indexed within seconds
- **Monitoring/observability:** logs searchable for debugging in real-time
- **Customer support:** new tickets searchable by agents instantly

**The streaming pipeline:**
Producer (app, sensor, crawler) → Kafka Topic → Indexing Consumer (embed + index) → Search Index (ES, Vespa)

**Latency targets:**
- Document published → searchable: **< 5 seconds** (hot path)
- Bulk historical data: batch ETL nightly (cold path)

**Key design decisions:**
- **Consumer groups** for parallel processing across partitions
- **Batch size:** 100-1000 docs per batch for embedding efficiency
- **Exactly-once semantics** via Kafka transactions + idempotent indexing
- **Backpressure handling** when the index can't keep up with the ingestion rate`},{heading:"Exactly-Once & Backpressure",body:`**In a streaming index pipeline, two problems are critical: duplicate documents and overwhelming the index.**

**Exactly-once semantics:**
The pipeline must ensure each document is indexed exactly once, even if consumers crash and restart.

Approach 1: **Idempotent writes** — use the document ID as the index ID. Re-indexing the same document with the same ID is a no-op (just overwrites with identical data).

Approach 2: **Kafka transactions** — consume message + index document + commit offset atomically. If any step fails, all are rolled back.

**Backpressure handling:**
When documents arrive faster than the index can process them:

1. **Consumer lag monitoring:** track the gap between latest Kafka offset and consumer's current offset
2. **Auto-scaling:** spin up more consumer instances when lag exceeds threshold
3. **Batch size tuning:** increase batch size to amortize per-document overhead
4. **Circuit breaker:** if the index is unhealthy (high GC, disk full), pause consumption temporarily
5. **Priority queues:** high-priority documents (breaking news) bypass the queue

**Production monitoring:**
- Consumer lag (messages behind): alert if > 10,000
- Index refresh latency: alert if document-to-searchable > 30 seconds
- Embedding throughput: documents embedded per second
- Index error rate: failed indexing operations`},{heading:"Architecture Patterns",body:`**Three common patterns for streaming search indexes:**

**Pattern 1: Direct indexing (simplest)**
App → Elasticsearch directly via Bulk API
- Pros: simple, low latency
- Cons: couples app to ES, no buffering, app must handle ES failures

**Pattern 2: Kafka-backed (recommended)**
App → Kafka → Consumer → Elasticsearch
- Pros: decoupled, buffered, replayable, scalable consumers
- Cons: added complexity, Kafka operations

**Pattern 3: CDC (Change Data Capture)**
Database → Debezium → Kafka → Consumer → Elasticsearch
- Pros: index stays in sync with database automatically, no app changes needed
- Cons: most complex, CDC lag, schema evolution challenges

**Choosing a pattern:**

| Factor | Direct | Kafka-backed | CDC |
|---|---|---|---|
| Complexity | Low | Medium | High |
| Reliability | Low (no buffer) | High (Kafka durability) | High |
| Latency | Lowest | Low (~1-5s) | Medium (~5-30s) |
| Decoupling | None | Full | Full |
| Best for | Prototyping | Production search | Database-driven search |`}],questions:[{q:"Design a streaming index pipeline for a news aggregator that must make articles searchable within 5 seconds. What are the key components?",a:"Pipeline: (1) News crawlers/RSS feeds publish articles to Kafka topic 'articles' (partitioned by source for ordering). (2) Consumer group with 4-8 instances reads from Kafka, each processing a partition. (3) Each consumer: validates article, extracts text from HTML, generates embedding via batch API (batch of 100 articles for efficiency), and indexes to Elasticsearch via Bulk API. (4) Elasticsearch configured with refresh_interval=1s for near-real-time search. (5) Use idempotent indexing (article URL as document ID) for exactly-once semantics. Key components: Kafka (durable buffer, replay capability), consumer group (parallel processing), embedding service (GPU-backed for throughput), Elasticsearch (search + analytics). Monitoring: consumer lag < 1000 messages, end-to-end latency P95 < 5s, embedding throughput > 100 articles/sec. Backpressure: auto-scale consumers when lag > 5000, circuit breaker if ES returns 429/503.",hint:"Think about the path from article discovery to searchability and what happens when components fail.",check:l=>{const r=l.toLowerCase();return(r.includes("kafka")||r.includes("queue")||r.includes("stream"))&&(r.includes("consumer")||r.includes("worker"))&&(r.includes("elasticsearch")||r.includes("index"))}}]}];function Yh({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsxs("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:["✓"," Check"]}),i.jsxs("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsxs("span",{children:["📖"," Answer"]}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Xh(){const[l,r]=z.useState(null),[x,$]=z.useState(null),[L,F]=z.useState(new Set),[_,v]=z.useState({}),M=Ur.reduce((p,h)=>p+h.content.length,0),j=Math.round(L.size/M*100),q=p=>p.split(/\*\*(.*?)\*\*/g).map((k,c)=>c%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:k},c):i.jsx("span",{children:k},c)),T=p=>{const h=p.split(`
`),k=[];let c=0;for(;c<h.length;){const m=h[c];if(m.trim().startsWith("|")&&m.trim().endsWith("|")){const C=[];for(;c<h.length&&h[c].trim().startsWith("|")&&h[c].trim().endsWith("|");)C.push(h[c]),c++;const u=R=>R.split("|").slice(1,-1).map(y=>y.trim()),f=u(C[0]),b=C.findIndex(R=>/^\|[\s\-:|]+\|$/.test(R.trim())),A=b>=0?b+1:1,D=C.slice(A).filter(R=>!/^\|[\s\-:|]+\|$/.test(R.trim()));k.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:f.map((R,y)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:q(R)},y))})}),i.jsx("tbody",{children:D.map((R,y)=>{const N=u(R);return i.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:N.map((V,re)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:q(V)},re))},y)})})]})},`t${k.length}`))}else m===""?k.push(i.jsx("div",{style:{height:8}},`e${c}`)):k.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:q(m)},`p${c}`)),c++}return k};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#7C3AED!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"MODERN RETRIEVAL STACK"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Modern Retrieval Stack Deep Dive"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["RAG, agentic search, GraphRAG, Contextual Retrieval, LLM reranking, CLIP multimodal, generative retrieval, and streaming indexes.",i.jsx("br",{}),Ur.length," sections ","·"," ",M," concepts ","·"," ",Ur.reduce((p,h)=>{var k;return p+(((k=h.questions)==null?void 0:k.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${j}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #059669, #D97706, #2563EB, #9333EA, #0891B2, #F59E0B)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[L.size,"/",M]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ur.map(p=>{var C;const h=l===p.id,k=p.content.map((u,f)=>`${p.id}-${f}`),c=k.filter(u=>L.has(u)).length,m=_[p.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>r(h?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[c,"/",p.content.length]}),i.jsx("span",{className:"ar",style:{transform:h?"rotate(90deg)":"rotate(0)"},children:"›"})]}),h&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsxs("button",{className:`tb ${m==="learn"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"learn"})),children:["📖"," Learn"]}),i.jsxs("button",{className:`tb ${m==="practice"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"practice"})),children:["✏️"," Practice (",((C=p.questions)==null?void 0:C.length)||0,")"]}),i.jsxs("button",{className:`tb ${m==="deeper"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"deeper"})),children:["🔗"," Go Deeper (",p.resources.length,")"]})]}),m==="learn"&&i.jsx("div",{children:p.content.map((u,f)=>{const b=`${p.id}-${f}`,A=x===b,D=L.has(b);return i.jsxs("div",{style:{borderTop:f>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>$(A?null:b),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${D?"d":""}`,onClick:R=>{R.stopPropagation();const y=new Set(L);y.has(b)?y.delete(b):y.add(b),F(y)},children:D&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:D?"#aaa":"#2a2a2a",textDecoration:D?"line-through":"none",flex:1},children:u.heading}),i.jsx("span",{className:"ar",style:{transform:A?"rotate(90deg)":"rotate(0)"},children:"›"})]}),A&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:T(u.body)})]},f)})}),m==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,f)=>i.jsx(Yh,{...u,color:p.color},`${p.id}-q-${f}`))]}),m==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,f)=>{const b=Jh[u.type];return i.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:b.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:b.bg,color:b.color},children:[b.emoji," ",b.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},f)})})]})]})]},p.id)})}),i.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Three tabs per section: Learn (content) ","·"," Practice (questions) ","·"," Go Deeper (resources)"]})]})}const Zh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},$r=[{id:"projects",icon:"📋",color:"#7C3AED",title:"Project Options",subtitle:"Web search, code search, paper search, vertical search, multimodal — choose your capstone challenge",resources:[{type:"read",title:"Tantivy — Full-text search library in Rust",url:"https://github.com/quickwit-oss/tantivy"},{type:"read",title:"Scrapy — Python web crawling framework",url:"https://docs.scrapy.org/"},{type:"read",title:"Semantic Scholar API — Academic paper search",url:"https://api.semanticscholar.org/"},{type:"video",title:"Building a search engine from scratch (ByteByteGo)",url:"https://www.youtube.com/watch?v=CeGtqYdA-w4"},{type:"read",title:"Common Crawl — Open repository of web crawl data",url:"https://commoncrawl.org/"}],content:[{heading:"Choosing Your Project",body:`**The capstone project should exercise the full search pipeline: crawl/ingest → index → rank → serve.**

| Project | Corpus Size | Key Challenges | Learning Focus |
|---|---|---|---|
| **Personal Web Search** | 100K pages | Crawling politeness, dedup, PageRank | Full pipeline, web-scale thinking |
| **Code Search** | ~1M files | Syntax-aware tokenization, AST parsing | Structured search, code understanding |
| **Scientific Paper Search** | ArXiv/Semantic Scholar | Citation graphs, math notation | Domain-specific ranking, metadata |
| **Vertical Search** | Products, recipes, jobs | Faceted search, structured data | Business logic, filtering |
| **Multimodal Search** | Images + captions | CLIP embeddings, dual indexing | Cross-modal retrieval |

**Recommendation for maximum learning:** Start with **Personal Web Search** (100K pages). It touches every component: crawling, cleaning, tokenization, indexing, BM25, vector search, reranking, serving, and evaluation. If you can build a web search engine, you can build any kind of search.

**Time estimate:** 4-6 weeks part-time (10-15 hours/week) for a minimal but functional search engine.`},{heading:"Web Search Project Specification",body:`**Build a personal web search engine that indexes 100K pages and serves queries with sub-100ms latency.**

**Requirements:**
1. **Crawler:** Polite web crawler with robots.txt compliance, rate limiting, and URL frontier
2. **Cleaner:** HTML stripping, boilerplate removal, language detection, deduplication
3. **Indexer:** Full-text inverted index + dense vector index (hybrid search)
4. **Ranker:** BM25 + neural reranking (cross-encoder on top 100)
5. **Server:** REST API with query parsing, snippet generation, pagination
6. **Evaluator:** nDCG@10 on a manually curated test set of 50 queries

**Seed strategy:** Start with 10-20 seed URLs from diverse, high-quality domains (.edu, Wikipedia, tech blogs). Let the crawler discover links organically.

**Technology choices:**
- Crawler: Scrapy (Python) or custom with aiohttp + asyncio
- Index: Tantivy (Rust, Lucene-equivalent) or Elasticsearch
- Vectors: FAISS or pgvector
- Reranker: BGE-reranker-v2 (open-source, free)
- API: FastAPI (Python)
- Frontend: Simple HTML or React`},{heading:"Code Search Project Specification",body:`**Build a code search engine that indexes GitHub repositories and supports syntax-aware queries.**

**Unique challenges vs web search:**
- **Tokenization:** code has different token boundaries than natural language. "getUserName" should be split into ["get", "User", "Name"]. Punctuation like :: and -> is semantically meaningful.
- **AST parsing:** understand code structure (functions, classes, imports) for structured search
- **Ranking signals:** star count, fork count, recency, language match, file path relevance

**Scope:** Index 10-50 popular GitHub repositories (~1M files total)

**Features to implement:**
1. Language-specific tokenizers (Python, JavaScript, Rust)
2. Symbol search: find function/class definitions
3. File path search: "test/**/auth*.py"
4. Semantic code search: "function to parse JSON" (using code embedding models like CodeBERT or StarCoder embeddings)
5. Snippet highlighting with syntax coloring

**Existing tools to study:** Sourcegraph, GitHub Code Search, grep.app, Zoekt (Google's code search).

**Key insight:** Code search is the best project if you're already a strong programmer. You'll learn search fundamentals while building a tool you'd actually use.`},{heading:"Paper Search & Vertical Search",body:`**Two additional project options for domain-specific search.**

**Scientific Paper Search:**
- **Corpus:** ArXiv papers (via bulk download) or Semantic Scholar API
- **Unique challenges:** citation graph (PageRank equivalent), math notation parsing, abstract vs full-text ranking, author disambiguation
- **Features:** search by title/abstract, filter by venue/year/author, citation-based ranking, "similar papers" via embeddings
- **Learning focus:** domain-specific ranking features, knowledge graphs, metadata-rich search

**Vertical Search (E-commerce, Recipes, Jobs):**
- **Corpus:** Product catalogs (scrape or use open datasets), recipe datasets, job listings
- **Unique challenges:** faceted search (filter by price, category, location), structured data ranking, business rules
- **Features:** faceted filtering, sort by relevance/price/rating, autocomplete, "did you mean?"
- **Learning focus:** how business requirements shape ranking, the tension between relevance and revenue

**Key difference from web search:** Vertical search has much richer structured metadata. Ranking isn't just text relevance — it's text relevance + structured filters + business rules (bestsellers, margins, freshness).`}],questions:[{q:"You want to build a search engine as a portfolio project. You have 6 weeks and are a backend engineer comfortable with Python. Which project would you choose and why?",a:"I'd recommend Personal Web Search (100K pages). Reasons: (1) It covers the FULL pipeline end-to-end: crawling, cleaning, indexing, ranking, serving, and evaluation. No other project touches every component. (2) Python has excellent libraries for every step: Scrapy for crawling, Beautiful Soup for HTML parsing, Tantivy (Python bindings) or Elasticsearch for indexing, FastAPI for serving, FAISS for vector search. (3) It's the most impressive portfolio piece because it demonstrates systems thinking, not just API consumption. (4) You can start simple (BM25 only) and iteratively add features: vector search, reranking, PageRank, snippet generation. (5) It produces a tangible demo: type a query, see results with snippets and latency. Alternative for a frontend-leaning engineer: Vertical Search (product catalog), since it naturally includes a rich UI (facets, filters, autocomplete).",hint:"Think about which project exercises the most search concepts and which has the best Python tooling.",check:l=>{const r=l.toLowerCase();return(r.includes("web")||r.includes("full pipeline")||r.includes("end-to-end"))&&(r.includes("crawl")||r.includes("portfolio")||r.includes("python"))}}]},{id:"pipeline",icon:"🔧",color:"#C2410C",title:"Full Pipeline Architecture",subtitle:"Crawling → cleaning → tokenizing → indexing → querying → ranking → serving — the complete system",resources:[{type:"read",title:"Scrapy — Web crawling best practices",url:"https://docs.scrapy.org/en/latest/topics/practices.html"},{type:"read",title:"Tantivy Python bindings — tantivy-py",url:"https://github.com/quickwit-oss/tantivy-py"},{type:"read",title:"FastAPI — Modern Python web framework",url:"https://fastapi.tiangolo.com/"},{type:"video",title:"James Briggs — Building Hybrid Search (Pinecone)",url:"https://www.youtube.com/watch?v=lYxGYXjfrNI"},{type:"read",title:"SimHash — Near-duplicate detection algorithm",url:"https://matpalm.com/resemblance/simhash/"}],content:[{heading:"Crawling",body:`**A polite web crawler respects robots.txt, rate limits requests per domain, and prioritizes high-quality URLs.**

**Key components:**
1. **URL Frontier:** Priority queue managing which URLs to crawl next. Higher priority for: shorter URLs, .edu/.gov domains, pages with many inbound links.
2. **Politeness:** Wait 1+ seconds between requests to the same domain. Check robots.txt before crawling. Identify your crawler via User-Agent.
3. **Robots.txt Parser:** Parse and cache robots.txt files per domain. Respect Crawl-delay directives.
4. **Content Fetching:** Use HTTP/2 with connection pooling. Handle redirects (301/302), timeouts, and errors gracefully. Set reasonable timeouts (10-30 seconds).
5. **JavaScript Rendering:** For JS-heavy sites, use Playwright or Puppeteer (expensive, only when needed). Most content is extractable from raw HTML.

**Crawl budget:** For a 100K page project, target ~10 pages/second sustained. At this rate, crawling completes in ~3 hours.

**Deduplication during crawl:** Track visited URLs (normalized) to avoid recrawling. Use URL canonicalization: strip fragments (#), normalize query parameters, lowercase the domain.`},{heading:"Cleaning & Content Extraction",body:`**Raw HTML must be cleaned, deduplicated, and structured before indexing.**

**Cleaning pipeline:**
1. **HTML Parsing:** Parse with Beautiful Soup or lxml. Strip scripts, styles, nav, footer, sidebar elements.
2. **Main Content Extraction:** Use readability algorithms (like Mozilla Readability) to identify the main article content vs boilerplate.
3. **Language Detection:** Use langdetect or fasttext to identify the language. Filter to your target language(s).
4. **Text Normalization:** Collapse whitespace, strip HTML entities, handle encoding issues (UTF-8 normalization).
5. **Metadata Extraction:** Title (from <title> or <h1>), description (from meta tags), author, publication date, canonical URL.

**Deduplication (critical at scale):**
- **Exact dedup:** Hash the full text (SHA-256). Skip if already seen.
- **Near-dedup:** Use SimHash or MinHash to detect near-duplicate content (same article on different URLs, slightly reformatted pages). SimHash: compute fingerprint, documents within Hamming distance 3 are near-duplicates.

**Output:** Each cleaned document has: URL, title, description, cleaned text, language, content hash, and extracted outbound links.`},{heading:"Indexing (Inverted + Vector)",body:`**Build two complementary indexes: an inverted index for keyword search (BM25) and a vector index for semantic search.**

**Inverted Index (using Tantivy or Elasticsearch):**
- Define schema: title (text, stored), body (text, stored), url (stored), pagerank (fast field)
- Analyzer: lowercase → stopword removal → Porter stemmer
- Index each document with its cleaned text and metadata
- BM25 scoring is built-in (k1=1.2, b=0.75)

**Vector Index (using FAISS or pgvector):**
- Embed each document's text using an embedding model (e.g., BGE-base, text-embedding-3-small)
- For long documents: embed the title + first 512 tokens (or use chunking + max pooling)
- Store embeddings in FAISS (IVF-PQ for 100K+ docs) or pgvector
- ANN search via cosine similarity or dot product

**Hybrid search at query time:**
1. BM25 search → top 150 candidates
2. Vector search → top 150 candidates
3. Reciprocal Rank Fusion (RRF) to merge: score(doc) = 1/(60+rank_bm25) + 1/(60+rank_vector)
4. Rerank top 100 with cross-encoder

**PageRank (optional but impressive):**
Build a link graph from crawled pages. Run iterative PageRank (20 iterations, damping=0.85). Use as a static ranking signal alongside BM25 and vector similarity.`},{heading:"Query Processing & Serving",body:`**The query pipeline transforms a raw user query into a ranked list of results with snippets.**

**Query processing steps:**
1. **Parse:** tokenize query, detect special syntax (quotes for phrase, minus for exclusion)
2. **Spell correction:** SymSpell or BK-tree for edit distance suggestions
3. **Synonym expansion:** "car" → "car OR automobile" (optional, adds recall)
4. **Embed query:** generate vector embedding for semantic search

**Serving with latency budgets:**

| Component | Budget | Technique |
|---|---|---|
| Query parsing | 2 ms | Regex, dictionary lookup |
| Spell correction | 3 ms | SymSpell (pre-computed) |
| BM25 retrieval | 5 ms | Inverted index |
| ANN search | 5 ms | HNSW/IVF-PQ |
| RRF merge | 1 ms | Simple score computation |
| Neural rerank (top 100) | 8 ms | Cross-encoder, GPU batch |
| Snippet generation | 5 ms | BM25 on passage level |
| Serialization | 2 ms | JSON response |
| **Total** | **31 ms** | **Buffer to P95 < 50 ms** |

**Caching strategy:**
- L1: In-process LRU cache for popular queries (~30% of traffic from top 1% queries)
- L2: Redis for recent queries
- Cache invalidation: TTL-based (1 hour for web search, shorter for news)

**API design (FastAPI):**
GET /search?q=machine+learning&page=1&size=10
Response: {query, total_hits, results: [{url, title, snippet, score}], took_ms}`}],questions:[{q:"Design the complete data flow for a hybrid search query from user input to response. Include BM25, vector search, and reranking.",a:"Data flow: (1) User types 'machine learning optimization techniques' → (2) Query parser tokenizes, lowercases, removes stopwords → (3) Spell checker verifies spelling → (4) Two parallel paths: Path A: BM25 search on inverted index returns top-150 docs ranked by BM25 score. Path B: Embed query via embedding model, ANN search (HNSW) returns top-150 docs by cosine similarity. (5) Reciprocal Rank Fusion merges both lists: score(doc) = 1/(60+rank_bm25) + 1/(60+rank_vector). Take top-100 by fused score. (6) Cross-encoder reranker scores each (query, doc) pair from the top-100, producing a final relevance score (0-1). Reorder by reranker score. (7) Take top-10 for the requested page. (8) Generate snippets: for each result, find the most relevant passage (highest BM25 against the query within the document), highlight matching terms. (9) Assemble response JSON with url, title, snippet, score, total_hits, took_ms. Total latency target: P95 < 50ms.",hint:"Think about what runs in parallel (BM25 and ANN) and what runs sequentially (reranking after merge).",check:l=>{const r=l.toLowerCase();return r.includes("bm25")&&(r.includes("vector")||r.includes("ann")||r.includes("embed"))&&(r.includes("rerank")||r.includes("cross-encoder"))&&(r.includes("merge")||r.includes("fusion")||r.includes("rrf"))}}]},{id:"production",icon:"🏭",color:"#059669",title:"Production Concerns",subtitle:"Latency budgets, capacity planning, caching hierarchies, monitoring dashboards, and operational runbooks",resources:[{type:"read",title:"Google SRE Book — Monitoring Distributed Systems",url:"https://sre.google/sre-book/monitoring-distributed-systems/"},{type:"read",title:"Elastic — Production deployment best practices",url:"https://www.elastic.co/guide/en/elasticsearch/reference/current/system-config.html"},{type:"read",title:"SymSpell — Fast spell checking algorithm",url:"https://github.com/wolfgarbe/SymSpell"},{type:"video",title:"Elastic — Sizing and capacity planning for Elasticsearch",url:"https://www.youtube.com/watch?v=p0R4bfRJvaQ"}],content:[{heading:"Latency Budgets",body:`**Every millisecond matters in search. Google found that 500ms of added latency reduced search traffic by 20%.**

**End-to-end latency budget (P95 = 50ms target):**

| Component | Budget | Optimization Technique |
|---|---|---|
| Query parsing | 2 ms | Regex, pre-compiled patterns |
| Spell correction | 3 ms | SymSpell (pre-computed edits) |
| Candidate generation (BM25) | 5 ms | Inverted index, skip lists |
| ANN search (vectors) | 5 ms | HNSW with ef_search=64 |
| Feature assembly | 3 ms | Doc values, pre-computed scores |
| Neural rerank (top 100) | 8 ms | Cross-encoder on GPU, batched |
| Snippet generation | 5 ms | Extractive BM25 on passages |
| Serialization + overhead | 7 ms | Protobuf or optimized JSON |
| **Total** | **38 ms** | **12 ms buffer to P95** |

**Optimization principles:**
1. **Do less work:** narrow candidates aggressively at each stage
2. **Do work in parallel:** BM25 and ANN search run concurrently
3. **Cache aggressively:** popular queries, embedding results, spell corrections
4. **Pre-compute:** PageRank, quality scores, popular query results
5. **Co-locate:** keep index and compute on the same machine to avoid network hops`},{heading:"Capacity Planning",body:`**Sizing a search system requires estimating storage, memory, and compute requirements.**

**Example: 100M document search engine:**

**Storage:**
- 100M documents x 5 KB avg = 500 GB raw text
- Inverted index: ~30% of raw text = 150 GB
- Vector index (768d float32): 100M x 768 x 4B = 307 GB
- Doc values + stored fields: ~200 GB
- Total index size: **~1.2 TB**

**Sharding:**
- Target: 30 GB per shard → 40 primary shards
- 1 replica → 80 total shards
- 10 data nodes (8 shards/node) with 256 GB RAM each
- Each node: 32 cores, 2 TB NVMe SSD

**Query capacity:**
- Target: 1,000 QPS at P99 < 100ms
- Each query fans out to 40 shards → 40,000 shard queries/sec
- Per-shard: ~1,000 queries/sec (achievable on modern hardware)
- With caching (70% hit rate): effective shard load drops to 300/sec

**Memory rule of thumb:** Keep at least the vector index + term dictionary in RAM. For 100M docs: ~350-500 GB total RAM across the cluster.`},{heading:"Caching Strategy",body:`**Search caching follows a hierarchy: the closer to the user, the faster and cheaper.**

**Cache hierarchy:**

| Layer | Storage | Hit Rate | Latency | What's Cached |
|---|---|---|---|---|
| **L1: In-process LRU** | Application memory | ~30% | <1 ms | Top 1% queries (head queries) |
| **L2: Redis/Memcached** | Distributed cache | ~40% | 1-2 ms | Recent queries, embeddings |
| **L3: CDN edge** | CDN PoPs | ~10% | 5-10 ms | Static result pages |
| **L4: Full pipeline** | None (compute) | — | 30-50 ms | Long-tail queries |

**Cache key design:** Normalize queries before caching: lowercase, collapse whitespace, sort filter parameters. "Machine Learning" and "machine  learning" should hit the same cache entry.

**Cache invalidation:**
- **TTL-based:** 1 hour for web search, 5 minutes for news, 24 hours for product catalog
- **Event-based:** invalidate when index is refreshed (for real-time systems)
- **Versioned keys:** include index version in cache key; new index = new keys = automatic invalidation

**Query distribution follows a power law:** Top 1% of queries = ~30% of traffic. Top 10% = ~70%. This means even a small cache has dramatic impact.`},{heading:"Monitoring & Alerting",body:`**A search system requires monitoring across four dimensions: quality, performance, infrastructure, and freshness.**

**Search Quality Metrics:**
- **nDCG@10:** daily evaluation against a curated test set (target: >0.7)
- **Click-through rate (CTR):** by position (position 1 should have ~30% CTR)
- **Zero-result rate:** queries returning no results (target: <5%)
- **Mean Reciprocal Rank (MRR):** average position of first relevant result

**Performance Metrics:**
- Query latency: P50, P95, P99 (alert if P99 > 200ms)
- Queries per second (QPS): track peak vs average
- Cache hit rate: L1, L2, total (alert if total drops below 50%)
- Index refresh latency: time from document creation to searchable

**Infrastructure Metrics:**
- CPU utilization per node (alert if sustained >80%)
- JVM heap usage (for ES/Solr — alert if >75% of max)
- Disk I/O and network throughput
- Shard sizes, segment count, merge rate and lag

**Freshness Metrics:**
- Index age: time since last document indexed
- Crawl queue depth: URLs waiting to be crawled
- Documents indexed per second (throughput)

**Alerting rules:**
- P99 latency > 200ms for 5 minutes → page on-call
- Zero-result rate > 10% for 10 minutes → page on-call
- nDCG@10 drops >10% vs yesterday → notify team
- Consumer lag > 10,000 messages → auto-scale consumers`}],questions:[{q:"Size a search system for 50 million documents averaging 3 KB each. How much storage, how many shards, and how many nodes do you need?",a:"Storage calculation: (1) Raw text: 50M x 3 KB = 150 GB. (2) Inverted index: ~30% of raw = 45 GB. (3) Vector index (768d float32): 50M x 768 x 4 bytes = 153 GB. (4) Doc values + stored fields: ~100 GB. (5) Total: ~448 GB, round up to ~500 GB with overhead. Sharding: Target 30 GB per shard = ~17 primary shards (round to 20). With 1 replica = 40 total shards. Nodes: ~5 data nodes with 128 GB RAM each (640 GB total cluster RAM, enough to keep vectors + term dictionary in memory). Each node: 16+ cores, 1 TB NVMe SSD. This handles ~500 QPS at P99 < 100ms with caching. For 1,000+ QPS, add a 6th node and increase replicas to 2.",hint:"Calculate each component separately: raw text, inverted index (~30%), vectors (dimensions x 4 bytes), and doc values.",check:l=>{const r=l.toLowerCase();return(r.includes("150")||r.includes("450")||r.includes("500"))&&(r.includes("shard")||r.includes("node"))&&(r.includes("vector")||r.includes("153")||r.includes("index"))}}]},{id:"evaluation",icon:"📏",color:"#2563EB",title:"Evaluation Methodology",subtitle:"nDCG, MRR, MAP, test set construction, LLM-as-judge, and A/B testing for search quality",resources:[{type:"read",title:"TREC — Text REtrieval Conference (evaluation methodology)",url:"https://trec.nist.gov/"},{type:"read",title:"Manning et al. — Introduction to Information Retrieval, Ch. 8: Evaluation",url:"https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-in-information-retrieval-1.html"},{type:"read",title:"Microsoft MARCO — Benchmark dataset for passage retrieval",url:"https://microsoft.github.io/msmarco/"},{type:"video",title:"Stanford IR Course — Evaluation in Information Retrieval",url:"https://www.youtube.com/watch?v=01VrUCt3fPQ"},{type:"read",title:"Zheng et al. — Judging LLM-as-a-Judge (LMSYS)",url:"https://arxiv.org/abs/2306.05685"}],content:[{heading:"Building Evaluation Test Sets",body:`**You cannot improve search quality without measuring it. Building a test set is the first step.**

**Three approaches:**

**1. Manual Relevance Judgments (gold standard):**
- Expert annotators rate (query, document) pairs on a 0-3 scale:
  0 = irrelevant, 1 = marginally relevant, 2 = relevant, 3 = highly relevant
- Typically 50-200 queries, 50-100 judged docs per query
- Expensive but highest quality
- Use pooling: combine top-20 results from multiple retrieval methods, judge only those

**2. Click Log Mining (cheapest at scale):**
- Use search logs: clicked results = relevant (with position bias correction)
- Position bias correction: P(relevant | clicked at position k) = click_rate / examination_rate
- Examination rate drops with position: [1.0, 0.7, 0.5, 0.35, 0.25, ...]
- Free at scale but noisy (users click irrelevant results, skip relevant ones)

**3. LLM-as-Judge (emerging standard):**
- Use GPT-4/Claude to judge relevance of (query, document) pairs
- Prompt: "Rate the relevance of this document to this query on a 0-3 scale. Explain your reasoning."
- Cheaper than human annotation, reasonable correlation with experts (~0.8)
- Best for bootstrapping evaluation sets before investing in manual annotation

**For your capstone:** Use LLM-as-Judge to create an initial test set of 50 queries x 20 judged docs each. Refine with manual spot-checking.`},{heading:"nDCG Calculation (Step by Step)",body:`**Normalized Discounted Cumulative Gain (nDCG@k) is the standard metric for ranked search results.**

**Step 1: Assign relevance labels**
Query: "python web framework"
Results: [Flask(3), Django(3), FastAPI(2), Tornado(1), Bottle(2)]
Relevance scores: [3, 3, 2, 1, 2]

**Step 2: Compute DCG@5**
DCG@5 = sum of rel(i) / log2(i+1) for i=1 to 5

= 3/log2(2) + 3/log2(3) + 2/log2(4) + 1/log2(5) + 2/log2(6)
= 3/1.000 + 3/1.585 + 2/2.000 + 1/2.322 + 2/2.585
= 3.000 + 1.893 + 1.000 + 0.431 + 0.774
= **7.098**

**Step 3: Compute Ideal DCG (IDCG@5)**
Ideal ranking (sorted descending): [3, 3, 2, 2, 1]
IDCG@5 = 3/1.000 + 3/1.585 + 2/2.000 + 2/2.322 + 1/2.585
= 3.000 + 1.893 + 1.000 + 0.861 + 0.387 = **7.141**

**Step 4: Compute nDCG@5**
nDCG@5 = DCG@5 / IDCG@5 = 7.098 / 7.141 = **0.994**

**Interpretation:** 0.994 = near-perfect ranking. The only imperfection is that positions 4 and 5 are swapped (Tornado(1) before Bottle(2)).

**nDCG@10 targets:** >0.7 is good, >0.8 is excellent, >0.9 is near-perfect.`},{heading:"MRR and MAP",body:`**MRR and MAP are complementary metrics to nDCG, each measuring a different aspect of ranking quality.**

**Mean Reciprocal Rank (MRR):**
MRR = (1/|Q|) x sum of 1/rank_q for each query q
Where rank_q = position of FIRST relevant result

Example with 4 queries:
Q1: [irr, rel, ...] → rank=2 → RR=1/2=0.500
Q2: [rel, irr, ...] → rank=1 → RR=1/1=1.000
Q3: [irr, irr, irr, rel, ...] → rank=4 → RR=1/4=0.250
Q4: [irr, rel, ...] → rank=2 → RR=1/2=0.500

MRR = (0.500 + 1.000 + 0.250 + 0.500) / 4 = **0.5625**
Interpretation: first relevant result appears around position 1.78 on average.

**Mean Average Precision (MAP):**
For each query, compute Average Precision:
AP = (1/R) x sum of P(k) x rel(k) for k=1 to N

Example: Results = [R, N, R, N, R] (R=relevant, N=not)
R = 3 relevant docs total

Position 1: rel=1, P@1=1/1=1.000 → 1.000x1=1.000
Position 2: rel=0, P@2=1/2=0.500 → 0.500x0=0.000
Position 3: rel=1, P@3=2/3=0.667 → 0.667x1=0.667
Position 4: rel=0, P@4=2/4=0.500 → 0.500x0=0.000
Position 5: rel=1, P@5=3/5=0.600 → 0.600x1=0.600

AP = (1/3) x (1.000 + 0.667 + 0.600) = **0.756**

**When to use which:**
- **nDCG:** when you have graded relevance (0-3 scale) — most nuanced
- **MRR:** when only the first relevant result matters (navigational queries, Q&A)
- **MAP:** when binary relevance is sufficient (relevant vs irrelevant)`},{heading:"A/B Testing for Search",body:`**Offline metrics (nDCG, MRR) measure ranking quality. A/B tests measure user satisfaction.**

**Setting up search A/B tests:**
1. **Split traffic:** 50/50 between control (current system) and treatment (new ranking)
2. **Randomize by user** (not by query) to avoid learning effects
3. **Run for at least 1-2 weeks** to capture weekly patterns
4. **Primary metric:** session success rate (user found what they needed)

**Key online metrics:**

| Metric | What It Measures | Good Direction |
|---|---|---|
| **Click-through rate (CTR)** | % of queries with at least one click | Higher is better |
| **Time to first click** | Speed of finding a result | Lower is better |
| **Abandonment rate** | Queries with no clicks and no refinement | Lower is better |
| **Reformulation rate** | User refined the query | Lower is better (usually) |
| **Session length** | Clicks/actions per session | Context-dependent |
| **Position of first click** | How far down the user scrolled | Lower (higher position) is better |

**Common pitfalls:**
- **Novelty effect:** users explore a new UI more initially → wait 1 week before measuring
- **Position bias:** users click higher results regardless of relevance → use interleaving instead of side-by-side
- **Multiple testing:** running many tests simultaneously inflates false positives → use Bonferroni correction

**Interleaving (better than A/B for ranking):**
Instead of showing different result pages, interleave results from both systems into one page. Track which system's results get more clicks. Requires ~10x fewer queries to detect differences.`}],questions:[{q:"Calculate nDCG@4 for the following search results. Query: 'best laptop 2024'. Results with relevance scores: [3, 0, 2, 3].",a:"Step 1: Compute DCG@4. DCG@4 = 3/log2(2) + 0/log2(3) + 2/log2(4) + 3/log2(5) = 3/1.000 + 0/1.585 + 2/2.000 + 3/2.322 = 3.000 + 0 + 1.000 + 1.292 = 5.292. Step 2: Compute IDCG@4. Ideal ranking (sorted): [3, 3, 2, 0]. IDCG@4 = 3/1.000 + 3/1.585 + 2/2.000 + 0/2.322 = 3.000 + 1.893 + 1.000 + 0 = 5.893. Step 3: nDCG@4 = DCG@4/IDCG@4 = 5.292/5.893 = 0.898. Interpretation: the ranking is good but not perfect — the irrelevant result at position 2 and the highly relevant result at position 4 should be swapped for an ideal ranking.",hint:"Remember DCG formula: sum of rel(i)/log2(i+1). Sort relevance scores descending for IDCG.",check:l=>{const r=l.toLowerCase();return r.includes("0.89")||r.includes("0.90")||r.includes("5.29")||r.includes("5.89")}},{q:"You notice your search system's nDCG@10 is 0.82 but users are still unsatisfied. What online metrics would you check and why?",a:"nDCG@10 measures ranking quality but not user experience. Check these online metrics: (1) Zero-result rate — if 15% of queries return nothing, users are frustrated even when ranked results are good. Fix: better spell correction, query expansion, broader matching. (2) Abandonment rate — users may search and leave without clicking, indicating results don't match intent despite being 'relevant' by annotator standards. (3) Time to first click — if it's high, snippets might not be informative enough for users to identify relevant results. (4) Reformulation rate — high reformulation suggests the system doesn't understand user intent well. (5) Click position distribution — if most clicks are on results 5-10 instead of 1-3, the top results may be technically relevant but not matching user intent. The gap between offline metrics (nDCG) and user satisfaction often comes from: (a) test set doesn't represent real query distribution, (b) relevance judgments don't match user needs, (c) snippet/presentation issues, or (d) latency problems.",hint:"Think about what nDCG does NOT measure — zero results, user intent match, snippet quality, latency.",check:l=>{const r=l.toLowerCase();return(r.includes("zero")||r.includes("abandon")||r.includes("click"))&&(r.includes("intent")||r.includes("snippet")||r.includes("user"))}}]},{id:"documentation",icon:"📑",color:"#D97706",title:"Architecture Documentation",subtitle:"How to document your search engine — system overview, data pipeline, query pipeline, and operational runbook",resources:[{type:"read",title:"arc42 — Software architecture documentation template",url:"https://arc42.org/overview"},{type:"read",title:"Google — Technical Writing courses (free)",url:"https://developers.google.com/tech-writing"},{type:"read",title:"Elastic — Reference architecture examples",url:"https://www.elastic.co/guide/en/cloud-enterprise/current/ece-reference-architecture.html"},{type:"video",title:"ByteByteGo — System Design Interview: Design a Search Engine",url:"https://www.youtube.com/watch?v=CeGtqYdA-w4"}],content:[{heading:"Architecture Document Template",body:`**A well-documented search engine architecture covers six sections:**

**1. System Overview**
- Purpose and scope: what does this search engine do?
- Target corpus: size, format, update frequency
- User personas: who searches and why?
- Key metrics: corpus size, QPS target, latency target (P50, P95, P99)
- High-level architecture diagram

**2. Data Pipeline**
- Ingestion: sources, formats, update frequency, crawling strategy
- Processing: cleaning, tokenization, enrichment steps
- Indexing: technology choice (Tantivy/ES), schema design, sharding strategy
- Freshness: how quickly new documents become searchable

**3. Query Pipeline**
- Query parsing and expansion (spell check, synonyms)
- Retrieval strategy (lexical, semantic, hybrid)
- Ranking stages with latency budgets per stage
- Result presentation (snippets, facets, suggestions)

**4. Infrastructure**
- Node topology and resource allocation
- Sharding and replication strategy
- Failover and disaster recovery plan
- Capacity planning formulas and growth projections

**5. Quality & Evaluation**
- Test set construction methodology
- Metrics tracked (nDCG, MRR, CTR)
- A/B testing framework
- Monitoring dashboards and alerting rules

**6. Operational Runbook**
- Common failure modes and remediation steps
- Scaling procedures (add nodes, reindex, increase replicas)
- Index lifecycle management
- On-call procedures and escalation paths`},{heading:"System Design Interview Tips",body:`**Building a capstone search engine prepares you for system design interviews. Here's how to present it.**

**The 4-step framework (35-40 minute interview):**

**Step 1: Requirements Clarification (5 min)**
- "What's the corpus size? 1M or 1B documents?"
- "What's the latency target? Sub-100ms or sub-1s?"
- "Do we need real-time indexing or batch is OK?"
- "What ranking quality matters? Just keyword or neural reranking?"

**Step 2: High-Level Design (10 min)**
- Draw the full pipeline: Crawl → Clean → Index → Query → Rank → Serve
- Identify the data stores: inverted index, vector store, cache, metadata DB
- Show the query flow: fan-out to shards → merge → rerank → respond

**Step 3: Deep Dive (15 min)**
- Interviewer picks 1-2 areas to deep dive
- Common deep dives: sharding strategy, ranking pipeline, caching, scaling

**Step 4: Scale & Tradeoffs (5 min)**
- "If we need 10x more QPS, what changes?"
- "If we add 1B documents, how does the architecture change?"
- "What's the biggest bottleneck and how would you address it?"

**Key concepts interviewers look for:**
- Multi-stage ranking (not just one model)
- Sharding strategy with clear rationale
- Latency budget awareness
- Cache design for power-law query distributions
- Evaluation methodology (how do you know it's working?)`},{heading:"Portfolio Presentation",body:`**Your capstone search engine is a powerful portfolio piece. Here's how to present it effectively.**

**GitHub README structure:**
1. **Demo GIF/screenshot** at the top (30-second visual of search working)
2. **Architecture diagram** (clear, labeled, showing data flow)
3. **Key metrics:** corpus size, latency P50/P95, nDCG@10 score
4. **Technology stack** with rationale for each choice
5. **Quick start:** docker-compose up and search is running
6. **Design decisions:** 3-5 key decisions with tradeoff analysis

**What to highlight in interviews:**
- "I built a search engine that indexes 100K pages with P95 latency under 50ms"
- "I implemented hybrid retrieval (BM25 + vectors) with RRF fusion, improving nDCG@10 from 0.65 to 0.78"
- "I designed a multi-stage ranking pipeline with BM25 candidate generation, neural reranking, and snippet generation"
- "I evaluated quality using a 50-query test set with LLM-as-judge annotations"

**Common follow-up questions:**
- "Why did you choose Tantivy over Elasticsearch?" (performance, simplicity, Rust)
- "How would this scale to 1 billion documents?" (sharding, distributed coordination)
- "What's the biggest quality improvement you could make?" (better reranker, more training data, click-through feedback)
- "How do you handle freshness?" (streaming index via Kafka, NRT refresh)`}],questions:[{q:"In a system design interview, the interviewer asks you to design a search engine for 10 million product listings with faceted search. What are the 3 most important design decisions and why?",a:"The 3 most important design decisions: (1) Sharding strategy: Use hash-based sharding on product_id for even distribution. With 10M products at ~2 KB each = 20 GB, you need ~1-2 shards (well under the 30 GB target). This means you can start with a single node, keeping complexity low. Don't over-shard — the biggest anti-pattern is creating too many shards for a small dataset. (2) Faceted search implementation: Store category, brand, price range, color, and size as keyword/numeric fields with doc values enabled. Use Elasticsearch aggregations or Tantivy's faceting. Pre-compute facet counts for common category pages (cache aggressively since product catalogs change slowly). This is the feature that makes product search product search — without facets, it's just text search. (3) Ranking strategy: BM25 for text relevance + business signals (sales velocity, margin, stock level, review score) as boosting factors. The ranking formula should be: final_score = text_relevance * 0.4 + popularity * 0.3 + business_value * 0.3. This is where product search differs most from web search — business metrics often matter more than pure text relevance.",hint:"Think about what makes product search different from web search: structured data, facets, and business metrics.",check:l=>{const r=l.toLowerCase();return(r.includes("shard")||r.includes("partition"))&&(r.includes("facet")||r.includes("filter")||r.includes("aggregat"))&&(r.includes("rank")||r.includes("business")||r.includes("relevance"))}}]}];function ep({q:l,a:r,hint:x,check:$,color:L}){const[F,_]=z.useState(""),[v,M]=z.useState("idle"),j=z.useRef(null),q=()=>{F.trim()&&M($(F)?"correct":"wrong")};return i.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),v==="idle"||v==="wrong"?i.jsxs(i.Fragment,{children:[i.jsx("textarea",{ref:j,value:F,onChange:T=>_(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),q())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:v==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:v==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),v==="wrong"&&i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),i.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[i.jsxs("button",{onClick:q,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:L,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:F.trim()?1:.4},children:["✓"," Check"]}),i.jsxs("button",{onClick:()=>M("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),x&&i.jsxs("details",{style:{marginLeft:4},children:[i.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:x})]})]})]}):v==="correct"?i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):i.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[i.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[i.jsxs("span",{children:["📖"," Answer"]}),i.jsx("button",{onClick:()=>{var T;M("idle"),_(""),(T=j.current)==null||T.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function tp(){const[l,r]=z.useState(null),[x,$]=z.useState(null),[L,F]=z.useState(new Set),[_,v]=z.useState({}),M=$r.reduce((p,h)=>p+h.content.length,0),j=Math.round(L.size/M*100),q=p=>p.split(/\*\*(.*?)\*\*/g).map((k,c)=>c%2===1?i.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:k},c):i.jsx("span",{children:k},c)),T=p=>{const h=p.split(`
`),k=[];let c=0;for(;c<h.length;){const m=h[c];if(m.trim().startsWith("|")&&m.trim().endsWith("|")){const C=[];for(;c<h.length&&h[c].trim().startsWith("|")&&h[c].trim().endsWith("|");)C.push(h[c]),c++;const u=R=>R.split("|").slice(1,-1).map(y=>y.trim()),f=u(C[0]),b=C.findIndex(R=>/^\|[\s\-:|]+\|$/.test(R.trim())),A=b>=0?b+1:1,D=C.slice(A).filter(R=>!/^\|[\s\-:|]+\|$/.test(R.trim()));k.push(i.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[i.jsx("thead",{children:i.jsx("tr",{style:{background:"#f5f3ee"},children:f.map((R,y)=>i.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:q(R)},y))})}),i.jsx("tbody",{children:D.map((R,y)=>{const N=u(R);return i.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:N.map((V,re)=>i.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:q(V)},re))},y)})})]})},`t${k.length}`))}else m===""?k.push(i.jsx("div",{style:{height:8}},`e${c}`)):k.push(i.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:q(m)},`p${c}`)),c++}return k};return i.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#111827!important}"}),i.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"CAPSTONE PROJECT"}),i.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Build a Search Engine \\u2014 Capstone Deep Dive"}),i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Project options, full pipeline architecture, production concerns, evaluation methodology, and documentation best practices.",i.jsx("br",{}),$r.length," sections ","·"," ",M," concepts ","·"," ",$r.reduce((p,h)=>{var k;return p+(((k=h.questions)==null?void 0:k.length)||0)},0)," practice questions."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[i.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:i.jsx("div",{className:"pf",style:{width:`${j}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #C2410C, #059669, #2563EB, #D97706)",borderRadius:4}})}),i.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[L.size,"/",M]})]})]}),i.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:$r.map(p=>{var C;const h=l===p.id,k=p.content.map((u,f)=>`${p.id}-${f}`),c=k.filter(u=>L.has(u)).length,m=_[p.id]||"learn";return i.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[i.jsxs("div",{onClick:()=>r(h?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),i.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[c,"/",p.content.length]}),i.jsx("span",{className:"ar",style:{transform:h?"rotate(90deg)":"rotate(0)"},children:"›"})]}),h&&i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[i.jsxs("button",{className:`tb ${m==="learn"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"learn"})),children:["📖"," Learn"]}),i.jsxs("button",{className:`tb ${m==="practice"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"practice"})),children:["✏️"," Practice (",((C=p.questions)==null?void 0:C.length)||0,")"]}),i.jsxs("button",{className:`tb ${m==="deeper"?"a":""}`,onClick:()=>v(u=>({...u,[p.id]:"deeper"})),children:["🔗"," Go Deeper (",p.resources.length,")"]})]}),m==="learn"&&i.jsx("div",{children:p.content.map((u,f)=>{const b=`${p.id}-${f}`,A=x===b,D=L.has(b);return i.jsxs("div",{style:{borderTop:f>0?"1px solid #F0EDE6":"none"},children:[i.jsxs("div",{className:"br",onClick:()=>$(A?null:b),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:`ck ${D?"d":""}`,onClick:R=>{R.stopPropagation();const y=new Set(L);y.has(b)?y.delete(b):y.add(b),F(y)},children:D&&"✓"}),i.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:D?"#aaa":"#2a2a2a",textDecoration:D?"line-through":"none",flex:1},children:u.heading}),i.jsx("span",{className:"ar",style:{transform:A?"rotate(90deg)":"rotate(0)"},children:"›"})]}),A&&i.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:T(u.body)})]},f)})}),m==="practice"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,f)=>i.jsx(ep,{...u,color:p.color},`${p.id}-q-${f}`))]}),m==="deeper"&&i.jsxs("div",{style:{padding:"16px 22px 20px"},children:[i.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,f)=>{const b=Zh[u.type];return i.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:b.bg+"55"},children:[i.jsxs("span",{className:"tg",style:{background:b.bg,color:b.color},children:[b.emoji," ",b.label]}),i.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},f)})})]})]})]},p.id)})}),i.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Three tabs per section: Learn (content) ","·"," Practice (questions) ","·"," Go Deeper (resources)"]})]})}const vi={"ir-learning-roadmap":{label:"IR Learning Roadmap",Component:uh},"boolean-retrieval-deep-dive":{label:"Boolean retrieval & inverted indexes",Component:mh},"term-vocabulary-deep-dive":{label:"Term vocabulary & postings lists",Component:yh},"dictionaries-tolerant-deep-dive":{label:"Dictionaries & tolerant retrieval",Component:wh},"index-construction-deep-dive":{label:"Index construction & compression",Component:Sh},"scoring-vector-space-deep-dive":{label:"Scoring & vector space model",Component:Rh},"evaluation-metrics-deep-dive":{label:"Evaluation metrics",Component:Th},"relevance-feedback-deep-dive":{label:"Relevance feedback & query expansion",Component:Fh},"probabilistic-ir-deep-dive":{label:"Probabilistic & language model IR",Component:Ih},"text-classification-deep-dive":{label:"Text classification & clustering",Component:Ah},"web-search-deep-dive":{label:"Web search & link analysis",Component:qh},"neural-ir-deep-dive":{label:"Neural IR & transformers",Component:Wh},"learning-to-rank-deep-dive":{label:"Learning to rank",Component:Hh},"search-architecture-deep-dive":{label:"Search engine architecture",Component:$h},"storage-engines-deep-dive":{label:"Storage engines & datastores",Component:Qh},"modern-retrieval-deep-dive":{label:"Modern retrieval stack (LLM-era)",Component:Xh},"capstone-search-deep-dive":{label:"Capstone — build a search engine",Component:tp}},td=Object.keys(vi),id="'DM Sans', ui-sans-serif, system-ui, sans-serif";function nd(l,{subsection:r}){return{fontFamily:id,fontSize:r?11:12,fontWeight:l?500:450,fontStyle:"normal",letterSpacing:"0.04em",lineHeight:1.45,textAlign:"left",cursor:"pointer",border:"none",borderRadius:5,padding:r?"5px 8px":"7px 10px",width:"100%",background:l?"#1c1c1e":"transparent",color:l?"#f7f6f4":"#5a5866",WebkitFontSmoothing:"antialiased"}}function np({collapsed:l}){return i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":!0,children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),i.jsx("line",{x1:"9",y1:"4",x2:"9",y2:"20"}),l?i.jsx("polyline",{points:"13 10 16 12 13 14",fill:"none"}):i.jsx("polyline",{points:"15 10 12 12 15 14",fill:"none"})]})}function ip(){const[l,r]=z.useState(()=>{const M=window.location.hash.slice(1);return td.includes(M)?M:"ir-learning-roadmap"}),[x,$]=z.useState(!0);z.useEffect(()=>{window.location.hash=l},[l]),z.useEffect(()=>{const M=()=>{const j=window.location.hash.slice(1);td.includes(j)&&r(j)};return window.addEventListener("hashchange",M),()=>window.removeEventListener("hashchange",M)},[]),z.useEffect(()=>{const M=j=>{const q=j.target;if(!(q instanceof HTMLInputElement||q instanceof HTMLTextAreaElement||q.isContentEditable)&&(j.key==="b"||j.key==="B")&&(j.metaKey||j.ctrlKey)&&!j.altKey&&!j.shiftKey){j.preventDefault(),$(T=>!T);return}};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[]);const L=vi[l]??vi["ir-learning-roadmap"],{Component:F}=L,_=x?268:52,v=[{num:"01",id:"boolean-retrieval-deep-dive"},{num:"02",id:"term-vocabulary-deep-dive"},{num:"03",id:"dictionaries-tolerant-deep-dive"},{num:"04",id:"index-construction-deep-dive"},{num:"05",id:"scoring-vector-space-deep-dive"},{num:"06",id:"evaluation-metrics-deep-dive"},{num:"07",id:"relevance-feedback-deep-dive"},{num:"08",id:"probabilistic-ir-deep-dive"},{num:"09",id:"text-classification-deep-dive"},{num:"10",id:"web-search-deep-dive"},{num:"11",id:"neural-ir-deep-dive"},{num:"12",id:"learning-to-rank-deep-dive"},{num:"13",id:"search-architecture-deep-dive"},{num:"14",id:"storage-engines-deep-dive"},{num:"15",id:"modern-retrieval-deep-dive"},{num:"16",id:"capstone-search-deep-dive"}];return i.jsxs("div",{style:{display:"flex",height:"100%",width:"100%",fontFamily:"system-ui, sans-serif"},children:[i.jsxs("aside",{"aria-label":"Contents navigation",style:{width:_,flexShrink:0,boxSizing:"border-box",borderRight:"1px solid #e5e5e5",background:"#fafafa",display:"flex",flexDirection:"column",transition:"width 0.2s ease",overflow:"hidden"},children:[i.jsxs("div",{style:{padding:"10px 8px",display:"flex",alignItems:"center",justifyContent:x?"space-between":"center",gap:8,minHeight:44,boxSizing:"border-box"},children:[x&&i.jsx("span",{style:{fontFamily:id,fontSize:12,fontWeight:600,letterSpacing:"0.06em",color:"#2a292f",paddingLeft:6,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Contents"}),i.jsx("button",{type:"button",onClick:()=>$(M=>!M),"aria-expanded":x,style:{display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,padding:0,border:"none",borderRadius:8,background:"#e8e8e8",color:"#222",cursor:"pointer",flexShrink:0},children:i.jsx(np,{collapsed:!x})})]}),i.jsxs("nav",{id:"ir-nav",style:{display:x?"flex":"none",flexDirection:"column",gap:0,padding:"4px 10px 16px",overflow:"auto",flex:1},children:[i.jsx("button",{type:"button",onClick:()=>r("ir-learning-roadmap"),style:{...nd(l==="ir-learning-roadmap",{subsection:!1}),marginBottom:6},children:vi["ir-learning-roadmap"].label}),v.map(M=>i.jsxs("button",{type:"button",onClick:()=>r(M.id),style:{...nd(l===M.id,{subsection:!1}),display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[i.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,fontWeight:600,color:l===M.id?"#a5b4fc":"#aaa",flexShrink:0},children:M.num}),vi[M.id].label]},M.num))]})]}),i.jsx("main",{style:{flex:1,minWidth:0,overflow:"auto",background:"#fff"},children:i.jsx(F,{})})]})}lh.createRoot(document.getElementById("root")).render(i.jsx(z.StrictMode,{children:i.jsx(ip,{})}));
