(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))K(q);new MutationObserver(q=>{for(const b of q)if(b.type==="childList")for(const U of b.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&K(U)}).observe(document,{childList:!0,subtree:!0});function f(q){const b={};return q.integrity&&(b.integrity=q.integrity),q.referrerPolicy&&(b.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?b.credentials="include":q.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function K(q){if(q.ep)return;q.ep=!0;const b=f(q);fetch(q.href,b)}})();var Bo={exports:{}},xi={},Io={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function Zu(){if(Bc)return ae;Bc=1;var l=Symbol.for("react.element"),r=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),M=Symbol.iterator;function p(y){return y===null||typeof y!="object"?null:(y=M&&y[M]||y["@@iterator"],typeof y=="function"?y:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,d={};function g(y,W,ie){this.props=y,this.context=W,this.refs=d,this.updater=ie||S}g.prototype.isReactComponent={},g.prototype.setState=function(y,W){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,W,"setState")},g.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function N(){}N.prototype=g.prototype;function v(y,W,ie){this.props=y,this.context=W,this.refs=d,this.updater=ie||S}var z=v.prototype=new N;z.constructor=v,G(z,g.prototype),z.isPureReactComponent=!0;var C=Array.isArray,L=Object.prototype.hasOwnProperty,T={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function V(y,W,ie){var oe,le={},ce=null,pe=null;if(W!=null)for(oe in W.ref!==void 0&&(pe=W.ref),W.key!==void 0&&(ce=""+W.key),W)L.call(W,oe)&&!F.hasOwnProperty(oe)&&(le[oe]=W[oe]);var ue=arguments.length-2;if(ue===1)le.children=ie;else if(1<ue){for(var ve=Array(ue),$e=0;$e<ue;$e++)ve[$e]=arguments[$e+2];le.children=ve}if(y&&y.defaultProps)for(oe in ue=y.defaultProps,ue)le[oe]===void 0&&(le[oe]=ue[oe]);return{$$typeof:l,type:y,key:ce,ref:pe,props:le,_owner:T.current}}function re(y,W){return{$$typeof:l,type:y.type,key:W,ref:y.ref,props:y.props,_owner:y._owner}}function ye(y){return typeof y=="object"&&y!==null&&y.$$typeof===l}function kt(y){var W={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(ie){return W[ie]})}var gt=/\/+/g;function Qe(y,W){return typeof y=="object"&&y!==null&&y.key!=null?kt(""+y.key):W.toString(36)}function st(y,W,ie,oe,le){var ce=typeof y;(ce==="undefined"||ce==="boolean")&&(y=null);var pe=!1;if(y===null)pe=!0;else switch(ce){case"string":case"number":pe=!0;break;case"object":switch(y.$$typeof){case l:case r:pe=!0}}if(pe)return pe=y,le=le(pe),y=oe===""?"."+Qe(pe,0):oe,C(le)?(ie="",y!=null&&(ie=y.replace(gt,"$&/")+"/"),st(le,W,ie,"",function($e){return $e})):le!=null&&(ye(le)&&(le=re(le,ie+(!le.key||pe&&pe.key===le.key?"":(""+le.key).replace(gt,"$&/")+"/")+y)),W.push(le)),1;if(pe=0,oe=oe===""?".":oe+":",C(y))for(var ue=0;ue<y.length;ue++){ce=y[ue];var ve=oe+Qe(ce,ue);pe+=st(ce,W,ie,ve,le)}else if(ve=p(y),typeof ve=="function")for(y=ve.call(y),ue=0;!(ce=y.next()).done;)ce=ce.value,ve=oe+Qe(ce,ue++),pe+=st(ce,W,ie,ve,le);else if(ce==="object")throw W=String(y),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return pe}function ft(y,W,ie){if(y==null)return y;var oe=[],le=0;return st(y,oe,"","",function(ce){return W.call(ie,ce,le++)}),oe}function qe(y){if(y._status===-1){var W=y._result;W=W(),W.then(function(ie){(y._status===0||y._status===-1)&&(y._status=1,y._result=ie)},function(ie){(y._status===0||y._status===-1)&&(y._status=2,y._result=ie)}),y._status===-1&&(y._status=0,y._result=W)}if(y._status===1)return y._result.default;throw y._result}var ke={current:null},O={transition:null},te={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:O,ReactCurrentOwner:T};function $(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:ft,forEach:function(y,W,ie){ft(y,function(){W.apply(this,arguments)},ie)},count:function(y){var W=0;return ft(y,function(){W++}),W},toArray:function(y){return ft(y,function(W){return W})||[]},only:function(y){if(!ye(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ae.Component=g,ae.Fragment=f,ae.Profiler=q,ae.PureComponent=v,ae.StrictMode=K,ae.Suspense=E,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ae.act=$,ae.cloneElement=function(y,W,ie){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var oe=G({},y.props),le=y.key,ce=y.ref,pe=y._owner;if(W!=null){if(W.ref!==void 0&&(ce=W.ref,pe=T.current),W.key!==void 0&&(le=""+W.key),y.type&&y.type.defaultProps)var ue=y.type.defaultProps;for(ve in W)L.call(W,ve)&&!F.hasOwnProperty(ve)&&(oe[ve]=W[ve]===void 0&&ue!==void 0?ue[ve]:W[ve])}var ve=arguments.length-2;if(ve===1)oe.children=ie;else if(1<ve){ue=Array(ve);for(var $e=0;$e<ve;$e++)ue[$e]=arguments[$e+2];oe.children=ue}return{$$typeof:l,type:y.type,key:le,ref:ce,props:oe,_owner:pe}},ae.createContext=function(y){return y={$$typeof:U,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:b,_context:y},y.Consumer=y},ae.createElement=V,ae.createFactory=function(y){var W=V.bind(null,y);return W.type=y,W},ae.createRef=function(){return{current:null}},ae.forwardRef=function(y){return{$$typeof:D,render:y}},ae.isValidElement=ye,ae.lazy=function(y){return{$$typeof:P,_payload:{_status:-1,_result:y},_init:qe}},ae.memo=function(y,W){return{$$typeof:A,type:y,compare:W===void 0?null:W}},ae.startTransition=function(y){var W=O.transition;O.transition={};try{y()}finally{O.transition=W}},ae.unstable_act=$,ae.useCallback=function(y,W){return ke.current.useCallback(y,W)},ae.useContext=function(y){return ke.current.useContext(y)},ae.useDebugValue=function(){},ae.useDeferredValue=function(y){return ke.current.useDeferredValue(y)},ae.useEffect=function(y,W){return ke.current.useEffect(y,W)},ae.useId=function(){return ke.current.useId()},ae.useImperativeHandle=function(y,W,ie){return ke.current.useImperativeHandle(y,W,ie)},ae.useInsertionEffect=function(y,W){return ke.current.useInsertionEffect(y,W)},ae.useLayoutEffect=function(y,W){return ke.current.useLayoutEffect(y,W)},ae.useMemo=function(y,W){return ke.current.useMemo(y,W)},ae.useReducer=function(y,W,ie){return ke.current.useReducer(y,W,ie)},ae.useRef=function(y){return ke.current.useRef(y)},ae.useState=function(y){return ke.current.useState(y)},ae.useSyncExternalStore=function(y,W,ie){return ke.current.useSyncExternalStore(y,W,ie)},ae.useTransition=function(){return ke.current.useTransition()},ae.version="18.3.1",ae}var Ic;function Oo(){return Ic||(Ic=1,Io.exports=Zu()),Io.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc;function eh(){if(qc)return xi;qc=1;var l=Oo(),r=Symbol.for("react.element"),f=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,q=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function U(D,E,A){var P,M={},p=null,S=null;A!==void 0&&(p=""+A),E.key!==void 0&&(p=""+E.key),E.ref!==void 0&&(S=E.ref);for(P in E)K.call(E,P)&&!b.hasOwnProperty(P)&&(M[P]=E[P]);if(D&&D.defaultProps)for(P in E=D.defaultProps,E)M[P]===void 0&&(M[P]=E[P]);return{$$typeof:r,type:D,key:p,ref:S,props:M,_owner:q.current}}return xi.Fragment=f,xi.jsx=U,xi.jsxs=U,xi}var Uc;function th(){return Uc||(Uc=1,Bo.exports=eh()),Bo.exports}var a=th(),B=Oo(),Pr={},qo={exports:{}},Ve={},Uo={exports:{}},Go={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function nh(){return Gc||(Gc=1,(function(l){function r(O,te){var $=O.length;O.push(te);e:for(;0<$;){var y=$-1>>>1,W=O[y];if(0<q(W,te))O[y]=te,O[$]=W,$=y;else break e}}function f(O){return O.length===0?null:O[0]}function K(O){if(O.length===0)return null;var te=O[0],$=O.pop();if($!==te){O[0]=$;e:for(var y=0,W=O.length,ie=W>>>1;y<ie;){var oe=2*(y+1)-1,le=O[oe],ce=oe+1,pe=O[ce];if(0>q(le,$))ce<W&&0>q(pe,le)?(O[y]=pe,O[ce]=$,y=ce):(O[y]=le,O[oe]=$,y=oe);else if(ce<W&&0>q(pe,$))O[y]=pe,O[ce]=$,y=ce;else break e}}return te}function q(O,te){var $=O.sortIndex-te.sortIndex;return $!==0?$:O.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;l.unstable_now=function(){return b.now()}}else{var U=Date,D=U.now();l.unstable_now=function(){return U.now()-D}}var E=[],A=[],P=1,M=null,p=3,S=!1,G=!1,d=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(O){for(var te=f(A);te!==null;){if(te.callback===null)K(A);else if(te.startTime<=O)K(A),te.sortIndex=te.expirationTime,r(E,te);else break;te=f(A)}}function C(O){if(d=!1,z(O),!G)if(f(E)!==null)G=!0,qe(L);else{var te=f(A);te!==null&&ke(C,te.startTime-O)}}function L(O,te){G=!1,d&&(d=!1,N(V),V=-1),S=!0;var $=p;try{for(z(te),M=f(E);M!==null&&(!(M.expirationTime>te)||O&&!kt());){var y=M.callback;if(typeof y=="function"){M.callback=null,p=M.priorityLevel;var W=y(M.expirationTime<=te);te=l.unstable_now(),typeof W=="function"?M.callback=W:M===f(E)&&K(E),z(te)}else K(E);M=f(E)}if(M!==null)var ie=!0;else{var oe=f(A);oe!==null&&ke(C,oe.startTime-te),ie=!1}return ie}finally{M=null,p=$,S=!1}}var T=!1,F=null,V=-1,re=5,ye=-1;function kt(){return!(l.unstable_now()-ye<re)}function gt(){if(F!==null){var O=l.unstable_now();ye=O;var te=!0;try{te=F(!0,O)}finally{te?Qe():(T=!1,F=null)}}else T=!1}var Qe;if(typeof v=="function")Qe=function(){v(gt)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ft=st.port2;st.port1.onmessage=gt,Qe=function(){ft.postMessage(null)}}else Qe=function(){g(gt,0)};function qe(O){F=O,T||(T=!0,Qe())}function ke(O,te){V=g(function(){O(l.unstable_now())},te)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(O){O.callback=null},l.unstable_continueExecution=function(){G||S||(G=!0,qe(L))},l.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<O?Math.floor(1e3/O):5},l.unstable_getCurrentPriorityLevel=function(){return p},l.unstable_getFirstCallbackNode=function(){return f(E)},l.unstable_next=function(O){switch(p){case 1:case 2:case 3:var te=3;break;default:te=p}var $=p;p=te;try{return O()}finally{p=$}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(O,te){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=p;p=O;try{return te()}finally{p=$}},l.unstable_scheduleCallback=function(O,te,$){var y=l.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?y+$:y):$=y,O){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=$+W,O={id:P++,callback:te,priorityLevel:O,startTime:$,expirationTime:W,sortIndex:-1},$>y?(O.sortIndex=$,r(A,O),f(E)===null&&O===f(A)&&(d?(N(V),V=-1):d=!0,ke(C,$-y))):(O.sortIndex=W,r(E,O),G||S||(G=!0,qe(L))),O},l.unstable_shouldYield=kt,l.unstable_wrapCallback=function(O){var te=p;return function(){var $=p;p=te;try{return O.apply(this,arguments)}finally{p=$}}}})(Go)),Go}var Oc;function ih(){return Oc||(Oc=1,Uo.exports=nh()),Uo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function rh(){if(Hc)return Ve;Hc=1;var l=Oo(),r=ih();function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K=new Set,q={};function b(e,t){U(e,t),U(e+"Capture",t)}function U(e,t){for(q[e]=t,e=0;e<t.length;e++)K.add(t[e])}var D=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},M={};function p(e){return E.call(M,e)?!0:E.call(P,e)?!1:A.test(e)?M[e]=!0:(P[e]=!0,!1)}function S(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G(e,t,n,i){if(t===null||typeof t>"u"||S(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function d(e,t,n,i,o,s,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=c}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new d(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new d(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new d(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new d(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new d(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new d(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new d(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new d(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new d(e,5,!1,e.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(N,v);g[t]=new d(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(N,v);g[t]=new d(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(N,v);g[t]=new d(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new d(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new d("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new d(e,1,!1,e.toLowerCase(),null,!0,!0)});function z(e,t,n,i){var o=g.hasOwnProperty(t)?g[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G(t,n,o,i)&&(n=null),i||o===null?p(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var C=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),T=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),kt=Symbol.for("react.context"),gt=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),O=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,y;function W(e){if(y===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var ie=!1;function oe(e,t){if(!e||ie)return"";ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var i=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){i=k}e.call(t.prototype)}else{try{throw Error()}catch(k){i=k}e()}}catch(k){if(k&&i&&typeof k.stack=="string"){for(var o=k.stack.split(`
`),s=i.stack.split(`
`),c=o.length-1,u=s.length-1;1<=c&&0<=u&&o[c]!==s[u];)u--;for(;1<=c&&0<=u;c--,u--)if(o[c]!==s[u]){if(c!==1||u!==1)do if(c--,u--,0>u||o[c]!==s[u]){var h=`
`+o[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=u);break}}}finally{ie=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?W(e):""}function le(e){switch(e.tag){case 5:return W(e.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case T:return"Portal";case re:return"Profiler";case V:return"StrictMode";case Qe:return"Suspense";case st:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kt:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case gt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $e(e){var t=ve(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){i=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(c){i=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Si(e){e._valueTracker||(e._valueTracker=$e(e))}function Ho(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ve(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hr(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ko(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vo(e,t){t=t.checked,t!=null&&z(e,"checked",t,!1)}function Kr(e,t){Vo(e,t);var n=ue(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vr(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vr(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vr(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function dn(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Qr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(f(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $o(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(f(92));if(Wn(n)){if(1<n.length)throw Error(f(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function Xo(e,t){var n=ue(t.value),i=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Yo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $r(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ti,Zo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ti=Ti||document.createElement("div"),Ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},id=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){id.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function es(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function ts(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=es(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var rd=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xr(e,t){if(t){if(rd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(f(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(f(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(t.style!=null&&typeof t.style!="object")throw Error(f(62))}}function Yr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jr=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,un=null,hn=null;function ns(e){if(e=ai(e)){if(typeof ea!="function")throw Error(f(280));var t=e.stateNode;t&&(t=Qi(t),ea(e.stateNode,e.type,t))}}function is(e){un?hn?hn.push(e):hn=[e]:un=e}function rs(){if(un){var e=un,t=hn;if(hn=un=null,ns(e),t)for(e=0;e<t.length;e++)ns(t[e])}}function as(e,t){return e(t)}function os(){}var ta=!1;function ss(e,t,n){if(ta)return e(t,n);ta=!0;try{return as(e,t,n)}finally{ta=!1,(un!==null||hn!==null)&&(os(),rs())}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var i=Qi(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(f(231,t,typeof n));return n}var na=!1;if(D)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){na=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{na=!1}function ad(e,t,n,i,o,s,c,u,h){var k=Array.prototype.slice.call(arguments,3);try{t.apply(n,k)}catch(R){this.onError(R)}}var In=!1,zi=null,Ci=!1,ia=null,od={onError:function(e){In=!0,zi=e}};function sd(e,t,n,i,o,s,c,u,h){In=!1,zi=null,ad.apply(od,arguments)}function ld(e,t,n,i,o,s,c,u,h){if(sd.apply(this,arguments),In){if(In){var k=zi;In=!1,zi=null}else throw Error(f(198));Ci||(Ci=!0,ia=k)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ls(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cs(e){if(Xt(e)!==e)throw Error(f(188))}function cd(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(f(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return cs(o),e;if(s===i)return cs(o),t;s=s.sibling}throw Error(f(188))}if(n.return!==i.return)n=o,i=s;else{for(var c=!1,u=o.child;u;){if(u===n){c=!0,n=o,i=s;break}if(u===i){c=!0,i=o,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,i=o;break}if(u===i){c=!0,i=s,n=o;break}u=u.sibling}if(!c)throw Error(f(189))}}if(n.alternate!==i)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?e:t}function ds(e){return e=cd(e),e!==null?us(e):null}function us(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=us(e);if(t!==null)return t;e=e.sibling}return null}var hs=r.unstable_scheduleCallback,ps=r.unstable_cancelCallback,dd=r.unstable_shouldYield,ud=r.unstable_requestPaint,Le=r.unstable_now,hd=r.unstable_getCurrentPriorityLevel,ra=r.unstable_ImmediatePriority,ms=r.unstable_UserBlockingPriority,Di=r.unstable_NormalPriority,pd=r.unstable_LowPriority,gs=r.unstable_IdlePriority,Ei=null,yt=null;function md(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ei,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:yd,gd=Math.log,fd=Math.LN2;function yd(e){return e>>>=0,e===0?32:31-(gd(e)/fd|0)|0}var Fi=64,Ni=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,s=e.pingedLanes,c=n&268435455;if(c!==0){var u=c&~o;u!==0?i=qn(u):(s&=c,s!==0&&(i=qn(s)))}else c=n&~o,c!==0?i=qn(c):s!==0&&(i=qn(s));if(i===0)return 0;if(t!==0&&t!==i&&(t&o)===0&&(o=i&-i,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((i&4)!==0&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-lt(t),o=1<<n,i|=e[n],t&=~o;return i}function vd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wd(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var c=31-lt(s),u=1<<c,h=o[c];h===-1?((u&n)===0||(u&i)!==0)&&(o[c]=vd(u,t)):h<=t&&(e.expiredLanes|=u),s&=~u}}function aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fs(){var e=Fi;return Fi<<=1,(Fi&4194240)===0&&(Fi=64),e}function oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Un(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function xd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-lt(n),s=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~s}}function sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-lt(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var he=0;function ys(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var vs,la,ws,xs,bs,ca=!1,Pi=[],Nt=null,Mt=null,Pt=null,Gn=new Map,On=new Map,jt=[],bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ks(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function Hn(e,t,n,i,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[o]},t!==null&&(t=ai(t),t!==null&&la(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function kd(e,t,n,i,o){switch(t){case"focusin":return Nt=Hn(Nt,e,t,n,i,o),!0;case"dragenter":return Mt=Hn(Mt,e,t,n,i,o),!0;case"mouseover":return Pt=Hn(Pt,e,t,n,i,o),!0;case"pointerover":var s=o.pointerId;return Gn.set(s,Hn(Gn.get(s)||null,e,t,n,i,o)),!0;case"gotpointercapture":return s=o.pointerId,On.set(s,Hn(On.get(s)||null,e,t,n,i,o)),!0}return!1}function Ss(e){var t=Yt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=ls(n),t!==null){e.blockedOn=t,bs(e.priority,function(){ws(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ua(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Jr=i,n.target.dispatchEvent(i),Jr=null}else return t=ai(n),t!==null&&la(t),e.blockedOn=n,!1;t.shift()}return!0}function Ls(e,t,n){ji(e)&&n.delete(t)}function Sd(){ca=!1,Nt!==null&&ji(Nt)&&(Nt=null),Mt!==null&&ji(Mt)&&(Mt=null),Pt!==null&&ji(Pt)&&(Pt=null),Gn.forEach(Ls),On.forEach(Ls)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,ca||(ca=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sd)))}function Vn(e){function t(o){return Kn(o,e)}if(0<Pi.length){Kn(Pi[0],e);for(var n=1;n<Pi.length;n++){var i=Pi[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Nt!==null&&Kn(Nt,e),Mt!==null&&Kn(Mt,e),Pt!==null&&Kn(Pt,e),Gn.forEach(t),On.forEach(t),n=0;n<jt.length;n++)i=jt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)Ss(n),n.blockedOn===null&&jt.shift()}var pn=C.ReactCurrentBatchConfig,Wi=!0;function Ld(e,t,n,i){var o=he,s=pn.transition;pn.transition=null;try{he=1,da(e,t,n,i)}finally{he=o,pn.transition=s}}function Td(e,t,n,i){var o=he,s=pn.transition;pn.transition=null;try{he=4,da(e,t,n,i)}finally{he=o,pn.transition=s}}function da(e,t,n,i){if(Wi){var o=ua(e,t,n,i);if(o===null)Da(e,t,i,Ri,n),ks(e,i);else if(kd(o,e,t,n,i))i.stopPropagation();else if(ks(e,i),t&4&&-1<bd.indexOf(e)){for(;o!==null;){var s=ai(o);if(s!==null&&vs(s),s=ua(e,t,n,i),s===null&&Da(e,t,i,Ri,n),s===o)break;o=s}o!==null&&i.stopPropagation()}else Da(e,t,i,null,n)}}var Ri=null;function ua(e,t,n,i){if(Ri=null,e=Zr(i),e=Yt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ls(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ri=e,null}function Ts(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hd()){case ra:return 1;case ms:return 4;case Di:case pd:return 16;case gs:return 536870912;default:return 16}default:return 16}}var Wt=null,ha=null,Ai=null;function zs(){if(Ai)return Ai;var e,t=ha,n=t.length,i,o="value"in Wt?Wt.value:Wt.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var c=n-e;for(i=1;i<=c&&t[n-i]===o[s-i];i++);return Ai=o.slice(e,1<i?1-i:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function Cs(){return!1}function Xe(e){function t(n,i,o,s,c){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bi:Cs,this.isPropagationStopped=Cs,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pa=Xe(mn),Qn=$({},mn,{view:0,detail:0}),zd=Xe(Qn),ma,ga,$n,Ii=$({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(ma=e.screenX-$n.screenX,ga=e.screenY-$n.screenY):ga=ma=0,$n=e),ma)},movementY:function(e){return"movementY"in e?e.movementY:ga}}),Ds=Xe(Ii),Cd=$({},Ii,{dataTransfer:0}),Dd=Xe(Cd),Ed=$({},Qn,{relatedTarget:0}),fa=Xe(Ed),Fd=$({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nd=Xe(Fd),Md=$({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=Xe(Md),jd=$({},mn,{data:0}),Es=Xe(jd),Wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _d(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ad[e])?!!t[e]:!1}function ya(){return _d}var Bd=$({},Qn,{key:function(e){if(e.key){var t=Wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Id=Xe(Bd),qd=$({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fs=Xe(qd),Ud=$({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),Gd=Xe(Ud),Od=$({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hd=Xe(Od),Kd=$({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vd=Xe(Kd),Qd=[9,13,27,32],va=D&&"CompositionEvent"in window,Xn=null;D&&"documentMode"in document&&(Xn=document.documentMode);var $d=D&&"TextEvent"in window&&!Xn,Ns=D&&(!va||Xn&&8<Xn&&11>=Xn),Ms=" ",Ps=!1;function js(e,t){switch(e){case"keyup":return Qd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Xd(e,t){switch(e){case"compositionend":return Ws(t);case"keypress":return t.which!==32?null:(Ps=!0,Ms);case"textInput":return e=t.data,e===Ms&&Ps?null:e;default:return null}}function Yd(e,t){if(gn)return e==="compositionend"||!va&&js(e,t)?(e=zs(),Ai=ha=Wt=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ns&&t.locale!=="ko"?null:t.data;default:return null}}var Jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jd[e.type]:t==="textarea"}function As(e,t,n,i){is(i),t=Hi(t,"onChange"),0<t.length&&(n=new pa("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Yn=null,Jn=null;function Zd(e){tl(e,0)}function qi(e){var t=xn(e);if(Ho(t))return e}function eu(e,t){if(e==="change")return t}var _s=!1;if(D){var wa;if(D){var xa="oninput"in document;if(!xa){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),xa=typeof Bs.oninput=="function"}wa=xa}else wa=!1;_s=wa&&(!document.documentMode||9<document.documentMode)}function Is(){Yn&&(Yn.detachEvent("onpropertychange",qs),Jn=Yn=null)}function qs(e){if(e.propertyName==="value"&&qi(Jn)){var t=[];As(t,Jn,e,Zr(e)),ss(Zd,t)}}function tu(e,t,n){e==="focusin"?(Is(),Yn=t,Jn=n,Yn.attachEvent("onpropertychange",qs)):e==="focusout"&&Is()}function nu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Jn)}function iu(e,t){if(e==="click")return qi(t)}function ru(e,t){if(e==="input"||e==="change")return qi(t)}function au(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:au;function Zn(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!E.call(t,o)||!ct(e[o],t[o]))return!1}return!0}function Us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gs(e,t){var n=Us(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Us(n)}}function Os(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Os(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hs(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ou(e){var t=Hs(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Os(n.ownerDocument.documentElement,n)){if(i!==null&&ba(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(i.start,o);i=i.end===void 0?s:Math.min(i.end,o),!e.extend&&s>i&&(o=i,i=s,s=o),o=Gs(n,s);var c=Gs(n,i);o&&c&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>i?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var su=D&&"documentMode"in document&&11>=document.documentMode,fn=null,ka=null,ei=null,Sa=!1;function Ks(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||fn==null||fn!==Li(i)||(i=fn,"selectionStart"in i&&ba(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ei&&Zn(ei,i)||(ei=i,i=Hi(ka,"onSelect"),0<i.length&&(t=new pa("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=fn)))}function Ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionend:Ui("Transition","TransitionEnd")},La={},Vs={};D&&(Vs=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Gi(e){if(La[e])return La[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vs)return La[e]=t[n];return e}var Qs=Gi("animationend"),$s=Gi("animationiteration"),Xs=Gi("animationstart"),Ys=Gi("transitionend"),Js=new Map,Zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Js.set(e,t),b(t,[e])}for(var Ta=0;Ta<Zs.length;Ta++){var za=Zs[Ta],lu=za.toLowerCase(),cu=za[0].toUpperCase()+za.slice(1);Rt(lu,"on"+cu)}Rt(Qs,"onAnimationEnd"),Rt($s,"onAnimationIteration"),Rt(Xs,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Ys,"onTransitionEnd"),U("onMouseEnter",["mouseout","mouseover"]),U("onMouseLeave",["mouseout","mouseover"]),U("onPointerEnter",["pointerout","pointerover"]),U("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),du=new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));function el(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,ld(i,t,void 0,e),e.currentTarget=null}function tl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var c=i.length-1;0<=c;c--){var u=i[c],h=u.instance,k=u.currentTarget;if(u=u.listener,h!==s&&o.isPropagationStopped())break e;el(o,u,k),s=h}else for(c=0;c<i.length;c++){if(u=i[c],h=u.instance,k=u.currentTarget,u=u.listener,h!==s&&o.isPropagationStopped())break e;el(o,u,k),s=h}}}if(Ci)throw e=ia,Ci=!1,ia=null,e}function ge(e,t){var n=t[ja];n===void 0&&(n=t[ja]=new Set);var i=e+"__bubble";n.has(i)||(nl(t,e,2,!1),n.add(i))}function Ca(e,t,n){var i=0;t&&(i|=4),nl(n,e,i,t)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[Oi]){e[Oi]=!0,K.forEach(function(n){n!=="selectionchange"&&(du.has(n)||Ca(n,!1,e),Ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oi]||(t[Oi]=!0,Ca("selectionchange",!1,t))}}function nl(e,t,n,i){switch(Ts(t)){case 1:var o=Ld;break;case 4:o=Td;break;default:o=da}n=o.bind(null,t,n,e),o=void 0,!na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Da(e,t,n,i,o){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var u=i.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(c===4)for(c=i.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===o||h.nodeType===8&&h.parentNode===o))return;c=c.return}for(;u!==null;){if(c=Yt(u),c===null)return;if(h=c.tag,h===5||h===6){i=s=c;continue e}u=u.parentNode}}i=i.return}ss(function(){var k=s,R=Zr(n),_=[];e:{var j=Js.get(e);if(j!==void 0){var H=pa,X=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":H=Id;break;case"focusin":X="focus",H=fa;break;case"focusout":X="blur",H=fa;break;case"beforeblur":case"afterblur":H=fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Gd;break;case Qs:case $s:case Xs:H=Nd;break;case Ys:H=Hd;break;case"scroll":H=zd;break;case"wheel":H=Vd;break;case"copy":case"cut":case"paste":H=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Fs}var Y=(t&4)!==0,Te=!Y&&e==="scroll",w=Y?j!==null?j+"Capture":null:j;Y=[];for(var m=k,x;m!==null;){x=m;var I=x.stateNode;if(x.tag===5&&I!==null&&(x=I,w!==null&&(I=_n(m,w),I!=null&&Y.push(ii(m,I,x)))),Te)break;m=m.return}0<Y.length&&(j=new H(j,X,null,n,R),_.push({event:j,listeners:Y}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",j&&n!==Jr&&(X=n.relatedTarget||n.fromElement)&&(Yt(X)||X[St]))break e;if((H||j)&&(j=R.window===R?R:(j=R.ownerDocument)?j.defaultView||j.parentWindow:window,H?(X=n.relatedTarget||n.toElement,H=k,X=X?Yt(X):null,X!==null&&(Te=Xt(X),X!==Te||X.tag!==5&&X.tag!==6)&&(X=null)):(H=null,X=k),H!==X)){if(Y=Ds,I="onMouseLeave",w="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(Y=Fs,I="onPointerLeave",w="onPointerEnter",m="pointer"),Te=H==null?j:xn(H),x=X==null?j:xn(X),j=new Y(I,m+"leave",H,n,R),j.target=Te,j.relatedTarget=x,I=null,Yt(R)===k&&(Y=new Y(w,m+"enter",X,n,R),Y.target=x,Y.relatedTarget=Te,I=Y),Te=I,H&&X)t:{for(Y=H,w=X,m=0,x=Y;x;x=vn(x))m++;for(x=0,I=w;I;I=vn(I))x++;for(;0<m-x;)Y=vn(Y),m--;for(;0<x-m;)w=vn(w),x--;for(;m--;){if(Y===w||w!==null&&Y===w.alternate)break t;Y=vn(Y),w=vn(w)}Y=null}else Y=null;H!==null&&il(_,j,H,Y,!1),X!==null&&Te!==null&&il(_,Te,X,Y,!0)}}e:{if(j=k?xn(k):window,H=j.nodeName&&j.nodeName.toLowerCase(),H==="select"||H==="input"&&j.type==="file")var J=eu;else if(Rs(j))if(_s)J=ru;else{J=nu;var Z=tu}else(H=j.nodeName)&&H.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(J=iu);if(J&&(J=J(e,k))){As(_,J,n,R);break e}Z&&Z(e,j,k),e==="focusout"&&(Z=j._wrapperState)&&Z.controlled&&j.type==="number"&&Vr(j,"number",j.value)}switch(Z=k?xn(k):window,e){case"focusin":(Rs(Z)||Z.contentEditable==="true")&&(fn=Z,ka=k,ei=null);break;case"focusout":ei=ka=fn=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Ks(_,n,R);break;case"selectionchange":if(su)break;case"keydown":case"keyup":Ks(_,n,R)}var ee;if(va)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else gn?js(e,n)&&(ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ne="onCompositionStart");ne&&(Ns&&n.locale!=="ko"&&(gn||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&gn&&(ee=zs()):(Wt=R,ha="value"in Wt?Wt.value:Wt.textContent,gn=!0)),Z=Hi(k,ne),0<Z.length&&(ne=new Es(ne,e,null,n,R),_.push({event:ne,listeners:Z}),ee?ne.data=ee:(ee=Ws(n),ee!==null&&(ne.data=ee)))),(ee=$d?Xd(e,n):Yd(e,n))&&(k=Hi(k,"onBeforeInput"),0<k.length&&(R=new Es("onBeforeInput","beforeinput",null,n,R),_.push({event:R,listeners:k}),R.data=ee))}tl(_,t)})}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=_n(e,n),s!=null&&i.unshift(ii(e,s,o)),s=_n(e,t),s!=null&&i.push(ii(e,s,o))),e=e.return}return i}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function il(e,t,n,i,o){for(var s=t._reactName,c=[];n!==null&&n!==i;){var u=n,h=u.alternate,k=u.stateNode;if(h!==null&&h===i)break;u.tag===5&&k!==null&&(u=k,o?(h=_n(n,s),h!=null&&c.unshift(ii(n,h,u))):o||(h=_n(n,s),h!=null&&c.push(ii(n,h,u)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var uu=/\r\n?/g,hu=/\u0000|\uFFFD/g;function rl(e){return(typeof e=="string"?e:""+e).replace(uu,`
`).replace(hu,"")}function Ki(e,t,n){if(t=rl(t),rl(e)!==t&&n)throw Error(f(425))}function Vi(){}var Ea=null,Fa=null;function Na(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,pu=typeof clearTimeout=="function"?clearTimeout:void 0,al=typeof Promise=="function"?Promise:void 0,mu=typeof queueMicrotask=="function"?queueMicrotask:typeof al<"u"?function(e){return al.resolve(null).then(e).catch(gu)}:Ma;function gu(e){setTimeout(function(){throw e})}function Pa(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),Vn(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);Vn(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ol(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),vt="__reactFiber$"+wn,ri="__reactProps$"+wn,St="__reactContainer$"+wn,ja="__reactEvents$"+wn,fu="__reactListeners$"+wn,yu="__reactHandles$"+wn;function Yt(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ol(e);e!==null;){if(n=e[vt])return n;e=ol(e)}return t}e=n,n=e.parentNode}return null}function ai(e){return e=e[vt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(f(33))}function Qi(e){return e[ri]||null}var Wa=[],bn=-1;function _t(e){return{current:e}}function fe(e){0>bn||(e.current=Wa[bn],Wa[bn]=null,bn--)}function me(e,t){bn++,Wa[bn]=e.current,e.current=t}var Bt={},je=_t(Bt),Ue=_t(!1),Jt=Bt;function kn(e,t){var n=e.type.contextTypes;if(!n)return Bt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ge(e){return e=e.childContextTypes,e!=null}function $i(){fe(Ue),fe(je)}function sl(e,t,n){if(je.current!==Bt)throw Error(f(168));me(je,t),me(Ue,n)}function ll(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(f(108,pe(e)||"Unknown",o));return $({},n,i)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,Jt=je.current,me(je,e),me(Ue,Ue.current),!0}function cl(e,t,n){var i=e.stateNode;if(!i)throw Error(f(169));n?(e=ll(e,t,Jt),i.__reactInternalMemoizedMergedChildContext=e,fe(Ue),fe(je),me(je,e)):fe(Ue),me(Ue,n)}var Lt=null,Yi=!1,Ra=!1;function dl(e){Lt===null?Lt=[e]:Lt.push(e)}function vu(e){Yi=!0,dl(e)}function It(){if(!Ra&&Lt!==null){Ra=!0;var e=0,t=he;try{var n=Lt;for(he=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Lt=null,Yi=!1}catch(o){throw Lt!==null&&(Lt=Lt.slice(e+1)),hs(ra,It),o}finally{he=t,Ra=!1}}return null}var Sn=[],Ln=0,Ji=null,Zi=0,et=[],tt=0,Zt=null,Tt=1,zt="";function en(e,t){Sn[Ln++]=Zi,Sn[Ln++]=Ji,Ji=e,Zi=t}function ul(e,t,n){et[tt++]=Tt,et[tt++]=zt,et[tt++]=Zt,Zt=e;var i=Tt;e=zt;var o=32-lt(i)-1;i&=~(1<<o),n+=1;var s=32-lt(t)+o;if(30<s){var c=o-o%5;s=(i&(1<<c)-1).toString(32),i>>=c,o-=c,Tt=1<<32-lt(t)+o|n<<o|i,zt=s+e}else Tt=1<<s|n<<o|i,zt=e}function Aa(e){e.return!==null&&(en(e,1),ul(e,1,0))}function _a(e){for(;e===Ji;)Ji=Sn[--Ln],Sn[Ln]=null,Zi=Sn[--Ln],Sn[Ln]=null;for(;e===Zt;)Zt=et[--tt],et[tt]=null,zt=et[--tt],et[tt]=null,Tt=et[--tt],et[tt]=null}var Ye=null,Je=null,we=!1,dt=null;function hl(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Je=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:Tt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Je=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ia(e){if(we){var t=Je;if(t){var n=t;if(!pl(e,t)){if(Ba(e))throw Error(f(418));t=At(n.nextSibling);var i=Ye;t&&pl(e,t)?hl(i,n):(e.flags=e.flags&-4097|2,we=!1,Ye=e)}}else{if(Ba(e))throw Error(f(418));e.flags=e.flags&-4097|2,we=!1,Ye=e}}}function ml(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function er(e){if(e!==Ye)return!1;if(!we)return ml(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Na(e.type,e.memoizedProps)),t&&(t=Je)){if(Ba(e))throw gl(),Error(f(418));for(;t;)hl(e,t),t=At(t.nextSibling)}if(ml(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Ye?At(e.stateNode.nextSibling):null;return!0}function gl(){for(var e=Je;e;)e=At(e.nextSibling)}function Tn(){Je=Ye=null,we=!1}function qa(e){dt===null?dt=[e]:dt.push(e)}var wu=C.ReactCurrentBatchConfig;function oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(f(309));var i=n.stateNode}if(!i)throw Error(f(147,e));var o=i,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(c){var u=o.refs;c===null?delete u[s]:u[s]=c},t._stringRef=s,t)}if(typeof e!="string")throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function tr(e,t){throw e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fl(e){var t=e._init;return t(e._payload)}function yl(e){function t(w,m){if(e){var x=w.deletions;x===null?(w.deletions=[m],w.flags|=16):x.push(m)}}function n(w,m){if(!e)return null;for(;m!==null;)t(w,m),m=m.sibling;return null}function i(w,m){for(w=new Map;m!==null;)m.key!==null?w.set(m.key,m):w.set(m.index,m),m=m.sibling;return w}function o(w,m){return w=Qt(w,m),w.index=0,w.sibling=null,w}function s(w,m,x){return w.index=x,e?(x=w.alternate,x!==null?(x=x.index,x<m?(w.flags|=2,m):x):(w.flags|=2,m)):(w.flags|=1048576,m)}function c(w){return e&&w.alternate===null&&(w.flags|=2),w}function u(w,m,x,I){return m===null||m.tag!==6?(m=Po(x,w.mode,I),m.return=w,m):(m=o(m,x),m.return=w,m)}function h(w,m,x,I){var J=x.type;return J===F?R(w,m,x.props.children,I,x.key):m!==null&&(m.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===qe&&fl(J)===m.type)?(I=o(m,x.props),I.ref=oi(w,m,x),I.return=w,I):(I=Tr(x.type,x.key,x.props,null,w.mode,I),I.ref=oi(w,m,x),I.return=w,I)}function k(w,m,x,I){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=jo(x,w.mode,I),m.return=w,m):(m=o(m,x.children||[]),m.return=w,m)}function R(w,m,x,I,J){return m===null||m.tag!==7?(m=cn(x,w.mode,I,J),m.return=w,m):(m=o(m,x),m.return=w,m)}function _(w,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Po(""+m,w.mode,x),m.return=w,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case L:return x=Tr(m.type,m.key,m.props,null,w.mode,x),x.ref=oi(w,null,m),x.return=w,x;case T:return m=jo(m,w.mode,x),m.return=w,m;case qe:var I=m._init;return _(w,I(m._payload),x)}if(Wn(m)||te(m))return m=cn(m,w.mode,x,null),m.return=w,m;tr(w,m)}return null}function j(w,m,x,I){var J=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return J!==null?null:u(w,m,""+x,I);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case L:return x.key===J?h(w,m,x,I):null;case T:return x.key===J?k(w,m,x,I):null;case qe:return J=x._init,j(w,m,J(x._payload),I)}if(Wn(x)||te(x))return J!==null?null:R(w,m,x,I,null);tr(w,x)}return null}function H(w,m,x,I,J){if(typeof I=="string"&&I!==""||typeof I=="number")return w=w.get(x)||null,u(m,w,""+I,J);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case L:return w=w.get(I.key===null?x:I.key)||null,h(m,w,I,J);case T:return w=w.get(I.key===null?x:I.key)||null,k(m,w,I,J);case qe:var Z=I._init;return H(w,m,x,Z(I._payload),J)}if(Wn(I)||te(I))return w=w.get(x)||null,R(m,w,I,J,null);tr(m,I)}return null}function X(w,m,x,I){for(var J=null,Z=null,ee=m,ne=m=0,Ne=null;ee!==null&&ne<x.length;ne++){ee.index>ne?(Ne=ee,ee=null):Ne=ee.sibling;var de=j(w,ee,x[ne],I);if(de===null){ee===null&&(ee=Ne);break}e&&ee&&de.alternate===null&&t(w,ee),m=s(de,m,ne),Z===null?J=de:Z.sibling=de,Z=de,ee=Ne}if(ne===x.length)return n(w,ee),we&&en(w,ne),J;if(ee===null){for(;ne<x.length;ne++)ee=_(w,x[ne],I),ee!==null&&(m=s(ee,m,ne),Z===null?J=ee:Z.sibling=ee,Z=ee);return we&&en(w,ne),J}for(ee=i(w,ee);ne<x.length;ne++)Ne=H(ee,w,ne,x[ne],I),Ne!==null&&(e&&Ne.alternate!==null&&ee.delete(Ne.key===null?ne:Ne.key),m=s(Ne,m,ne),Z===null?J=Ne:Z.sibling=Ne,Z=Ne);return e&&ee.forEach(function($t){return t(w,$t)}),we&&en(w,ne),J}function Y(w,m,x,I){var J=te(x);if(typeof J!="function")throw Error(f(150));if(x=J.call(x),x==null)throw Error(f(151));for(var Z=J=null,ee=m,ne=m=0,Ne=null,de=x.next();ee!==null&&!de.done;ne++,de=x.next()){ee.index>ne?(Ne=ee,ee=null):Ne=ee.sibling;var $t=j(w,ee,de.value,I);if($t===null){ee===null&&(ee=Ne);break}e&&ee&&$t.alternate===null&&t(w,ee),m=s($t,m,ne),Z===null?J=$t:Z.sibling=$t,Z=$t,ee=Ne}if(de.done)return n(w,ee),we&&en(w,ne),J;if(ee===null){for(;!de.done;ne++,de=x.next())de=_(w,de.value,I),de!==null&&(m=s(de,m,ne),Z===null?J=de:Z.sibling=de,Z=de);return we&&en(w,ne),J}for(ee=i(w,ee);!de.done;ne++,de=x.next())de=H(ee,w,ne,de.value,I),de!==null&&(e&&de.alternate!==null&&ee.delete(de.key===null?ne:de.key),m=s(de,m,ne),Z===null?J=de:Z.sibling=de,Z=de);return e&&ee.forEach(function(Ju){return t(w,Ju)}),we&&en(w,ne),J}function Te(w,m,x,I){if(typeof x=="object"&&x!==null&&x.type===F&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case L:e:{for(var J=x.key,Z=m;Z!==null;){if(Z.key===J){if(J=x.type,J===F){if(Z.tag===7){n(w,Z.sibling),m=o(Z,x.props.children),m.return=w,w=m;break e}}else if(Z.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===qe&&fl(J)===Z.type){n(w,Z.sibling),m=o(Z,x.props),m.ref=oi(w,Z,x),m.return=w,w=m;break e}n(w,Z);break}else t(w,Z);Z=Z.sibling}x.type===F?(m=cn(x.props.children,w.mode,I,x.key),m.return=w,w=m):(I=Tr(x.type,x.key,x.props,null,w.mode,I),I.ref=oi(w,m,x),I.return=w,w=I)}return c(w);case T:e:{for(Z=x.key;m!==null;){if(m.key===Z)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(w,m.sibling),m=o(m,x.children||[]),m.return=w,w=m;break e}else{n(w,m);break}else t(w,m);m=m.sibling}m=jo(x,w.mode,I),m.return=w,w=m}return c(w);case qe:return Z=x._init,Te(w,m,Z(x._payload),I)}if(Wn(x))return X(w,m,x,I);if(te(x))return Y(w,m,x,I);tr(w,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(w,m.sibling),m=o(m,x),m.return=w,w=m):(n(w,m),m=Po(x,w.mode,I),m.return=w,w=m),c(w)):n(w,m)}return Te}var zn=yl(!0),vl=yl(!1),nr=_t(null),ir=null,Cn=null,Ua=null;function Ga(){Ua=Cn=ir=null}function Oa(e){var t=nr.current;fe(nr),e._currentValue=t}function Ha(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){ir=e,Ua=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Oe=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(ir===null)throw Error(f(308));Cn=e,ir.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var tn=null;function Ka(e){tn===null?tn=[e]:tn.push(e)}function wl(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,Ka(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ct(e,i)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(se&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,Ct(e,n)}return o=i.interleaved,o===null?(t.next=t,Ka(i)):(t.next=o.next,o.next=t),i.interleaved=t,Ct(e,n)}function rr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sa(e,n)}}function bl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=c:s=s.next=c,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ar(e,t,n,i){var o=e.updateQueue;qt=!1;var s=o.firstBaseUpdate,c=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var h=u,k=h.next;h.next=null,c===null?s=k:c.next=k,c=h;var R=e.alternate;R!==null&&(R=R.updateQueue,u=R.lastBaseUpdate,u!==c&&(u===null?R.firstBaseUpdate=k:u.next=k,R.lastBaseUpdate=h))}if(s!==null){var _=o.baseState;c=0,R=k=h=null,u=s;do{var j=u.lane,H=u.eventTime;if((i&j)===j){R!==null&&(R=R.next={eventTime:H,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var X=e,Y=u;switch(j=t,H=n,Y.tag){case 1:if(X=Y.payload,typeof X=="function"){_=X.call(H,_,j);break e}_=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=Y.payload,j=typeof X=="function"?X.call(H,_,j):X,j==null)break e;_=$({},_,j);break e;case 2:qt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,j=o.effects,j===null?o.effects=[u]:j.push(u))}else H={eventTime:H,lane:j,tag:u.tag,payload:u.payload,callback:u.callback,next:null},R===null?(k=R=H,h=_):R=R.next=H,c|=j;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;j=u,u=j.next,j.next=null,o.lastBaseUpdate=j,o.shared.pending=null}}while(!0);if(R===null&&(h=_),o.baseState=h,o.firstBaseUpdate=k,o.lastBaseUpdate=R,t=o.shared.interleaved,t!==null){o=t;do c|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);an|=c,e.lanes=c,e.memoizedState=_}}function kl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(f(191,o));o.call(i)}}}var si={},wt=_t(si),li=_t(si),ci=_t(si);function nn(e){if(e===si)throw Error(f(174));return e}function Qa(e,t){switch(me(ci,t),me(li,e),me(wt,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$r(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$r(t,e)}fe(wt),me(wt,t)}function En(){fe(wt),fe(li),fe(ci)}function Sl(e){nn(ci.current);var t=nn(wt.current),n=$r(t,e.type);t!==n&&(me(li,e),me(wt,n))}function $a(e){li.current===e&&(fe(wt),fe(li))}var xe=_t(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xa=[];function Ya(){for(var e=0;e<Xa.length;e++)Xa[e]._workInProgressVersionPrimary=null;Xa.length=0}var sr=C.ReactCurrentDispatcher,Ja=C.ReactCurrentBatchConfig,rn=0,be=null,Ce=null,Ee=null,lr=!1,di=!1,ui=0,xu=0;function We(){throw Error(f(321))}function Za(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function eo(e,t,n,i,o,s){if(rn=s,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sr.current=e===null||e.memoizedState===null?Lu:Tu,e=n(i,o),di){s=0;do{if(di=!1,ui=0,25<=s)throw Error(f(301));s+=1,Ee=Ce=null,t.updateQueue=null,sr.current=zu,e=n(i,o)}while(di)}if(sr.current=ur,t=Ce!==null&&Ce.next!==null,rn=0,Ee=Ce=be=null,lr=!1,t)throw Error(f(300));return e}function to(){var e=ui!==0;return ui=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?be.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function it(){if(Ce===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ee===null?be.memoizedState:Ee.next;if(t!==null)Ee=t,Ce=e;else{if(e===null)throw Error(f(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ee===null?be.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function hi(e,t){return typeof t=="function"?t(e):t}function no(e){var t=it(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var i=Ce,o=i.baseQueue,s=n.pending;if(s!==null){if(o!==null){var c=o.next;o.next=s.next,s.next=c}i.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,i=i.baseState;var u=c=null,h=null,k=s;do{var R=k.lane;if((rn&R)===R)h!==null&&(h=h.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),i=k.hasEagerState?k.eagerState:e(i,k.action);else{var _={lane:R,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};h===null?(u=h=_,c=i):h=h.next=_,be.lanes|=R,an|=R}k=k.next}while(k!==null&&k!==s);h===null?c=i:h.next=u,ct(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseState=c,t.baseQueue=h,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do s=o.lane,be.lanes|=s,an|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function io(e){var t=it(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var c=o=o.next;do s=e(s,c.action),c=c.next;while(c!==o);ct(s,t.memoizedState)||(Oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Ll(){}function Tl(e,t){var n=be,i=it(),o=t(),s=!ct(i.memoizedState,o);if(s&&(i.memoizedState=o,Oe=!0),i=i.queue,ro(Dl.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,pi(9,Cl.bind(null,n,i,o,t),void 0,null),Fe===null)throw Error(f(349));(rn&30)!==0||zl(n,t,o)}return o}function zl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cl(e,t,n,i){t.value=n,t.getSnapshot=i,El(t)&&Fl(e)}function Dl(e,t,n){return n(function(){El(t)&&Fl(e)})}function El(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Fl(e){var t=Ct(e,1);t!==null&&mt(t,e,1,-1)}function Nl(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},t.queue=e,e=e.dispatch=Su.bind(null,be,e),[t.memoizedState,e]}function pi(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Ml(){return it().memoizedState}function cr(e,t,n,i){var o=xt();be.flags|=e,o.memoizedState=pi(1|t,n,void 0,i===void 0?null:i)}function dr(e,t,n,i){var o=it();i=i===void 0?null:i;var s=void 0;if(Ce!==null){var c=Ce.memoizedState;if(s=c.destroy,i!==null&&Za(i,c.deps)){o.memoizedState=pi(t,n,s,i);return}}be.flags|=e,o.memoizedState=pi(1|t,n,s,i)}function Pl(e,t){return cr(8390656,8,e,t)}function ro(e,t){return dr(2048,8,e,t)}function jl(e,t){return dr(4,2,e,t)}function Wl(e,t){return dr(4,4,e,t)}function Rl(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Al(e,t,n){return n=n!=null?n.concat([e]):null,dr(4,4,Rl.bind(null,t,e),n)}function ao(){}function _l(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Za(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Bl(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Za(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Il(e,t,n){return(rn&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n):(ct(n,t)||(n=fs(),be.lanes|=n,an|=n,e.baseState=!0),t)}function bu(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var i=Ja.transition;Ja.transition={};try{e(!1),t()}finally{he=n,Ja.transition=i}}function ql(){return it().memoizedState}function ku(e,t,n){var i=Kt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ul(e))Gl(t,n);else if(n=wl(e,t,n,i),n!==null){var o=Be();mt(n,e,i,o),Ol(n,t,i)}}function Su(e,t,n){var i=Kt(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))Gl(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,u=s(c,n);if(o.hasEagerState=!0,o.eagerState=u,ct(u,c)){var h=t.interleaved;h===null?(o.next=o,Ka(t)):(o.next=h.next,h.next=o),t.interleaved=o;return}}catch{}finally{}n=wl(e,t,o,i),n!==null&&(o=Be(),mt(n,e,i,o),Ol(n,t,i))}}function Ul(e){var t=e.alternate;return e===be||t!==null&&t===be}function Gl(e,t){di=lr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ol(e,t,n){if((n&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sa(e,n)}}var ur={readContext:nt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Lu={readContext:nt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Pl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cr(4194308,4,Rl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return cr(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=xt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=ku.bind(null,be,e),[i.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Nl,useDebugValue:ao,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Nl(!1),t=e[0];return e=bu.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=be,o=xt();if(we){if(n===void 0)throw Error(f(407));n=n()}else{if(n=t(),Fe===null)throw Error(f(349));(rn&30)!==0||zl(i,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Pl(Dl.bind(null,i,s,e),[e]),i.flags|=2048,pi(9,Cl.bind(null,i,s,n,t),void 0,null),n},useId:function(){var e=xt(),t=Fe.identifierPrefix;if(we){var n=zt,i=Tt;n=(i&~(1<<32-lt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xu++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tu={readContext:nt,useCallback:_l,useContext:nt,useEffect:ro,useImperativeHandle:Al,useInsertionEffect:jl,useLayoutEffect:Wl,useMemo:Bl,useReducer:no,useRef:Ml,useState:function(){return no(hi)},useDebugValue:ao,useDeferredValue:function(e){var t=it();return Il(t,Ce.memoizedState,e)},useTransition:function(){var e=no(hi)[0],t=it().memoizedState;return[e,t]},useMutableSource:Ll,useSyncExternalStore:Tl,useId:ql,unstable_isNewReconciler:!1},zu={readContext:nt,useCallback:_l,useContext:nt,useEffect:ro,useImperativeHandle:Al,useInsertionEffect:jl,useLayoutEffect:Wl,useMemo:Bl,useReducer:io,useRef:Ml,useState:function(){return io(hi)},useDebugValue:ao,useDeferredValue:function(e){var t=it();return Ce===null?t.memoizedState=e:Il(t,Ce.memoizedState,e)},useTransition:function(){var e=io(hi)[0],t=it().memoizedState;return[e,t]},useMutableSource:Ll,useSyncExternalStore:Tl,useId:ql,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oo(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hr={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Be(),o=Kt(e),s=Dt(i,o);s.payload=t,n!=null&&(s.callback=n),t=Ut(e,s,o),t!==null&&(mt(t,e,o,i),rr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Be(),o=Kt(e),s=Dt(i,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ut(e,s,o),t!==null&&(mt(t,e,o,i),rr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),i=Kt(e),o=Dt(n,i);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,i),t!==null&&(mt(t,e,i,n),rr(t,e,i))}};function Hl(e,t,n,i,o,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,c):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,i)||!Zn(o,s):!0}function Kl(e,t,n){var i=!1,o=Bt,s=t.contextType;return typeof s=="object"&&s!==null?s=nt(s):(o=Ge(t)?Jt:je.current,i=t.contextTypes,s=(i=i!=null)?kn(e,o):Bt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hr,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Vl(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&hr.enqueueReplaceState(t,t.state,null)}function so(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Va(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=nt(s):(s=Ge(t)?Jt:je.current,o.context=kn(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(oo(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&hr.enqueueReplaceState(o,o.state,null),ar(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",i=t;do n+=le(i),i=i.return;while(i);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function lo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function co(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cu=typeof WeakMap=="function"?WeakMap:Map;function Ql(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){wr||(wr=!0,To=i),co(e,t)},n}function $l(e,t,n){n=Dt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){co(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){co(e,t),typeof i!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function Xl(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Cu;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function Yl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jl(e,t,n,i,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Du=C.ReactCurrentOwner,Oe=!1;function _e(e,t,n,i){t.child=e===null?vl(t,null,n,i):zn(t,e.child,n,i)}function Zl(e,t,n,i,o){n=n.render;var s=t.ref;return Dn(t,o),i=eo(e,t,n,i,s,o),n=to(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(we&&n&&Aa(t),t.flags|=1,_e(e,t,i,o),t.child)}function ec(e,t,n,i,o){if(e===null){var s=n.type;return typeof s=="function"&&!Mo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,tc(e,t,s,i,o)):(e=Tr(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var c=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(c,i)&&e.ref===t.ref)return Et(e,t,o)}return t.flags|=1,e=Qt(s,i),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,i,o){if(e!==null){var s=e.memoizedProps;if(Zn(s,i)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=i=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Et(e,t,o)}return uo(e,t,n,i,o)}function nc(e,t,n){var i=t.pendingProps,o=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Mn,Ze),Ze|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(Mn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,me(Mn,Ze),Ze|=i}else s!==null?(i=s.baseLanes|n,t.memoizedState=null):i=n,me(Mn,Ze),Ze|=i;return _e(e,t,o,n),t.child}function ic(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function uo(e,t,n,i,o){var s=Ge(n)?Jt:je.current;return s=kn(t,s),Dn(t,o),n=eo(e,t,n,i,s,o),i=to(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(we&&i&&Aa(t),t.flags|=1,_e(e,t,n,o),t.child)}function rc(e,t,n,i,o){if(Ge(n)){var s=!0;Xi(t)}else s=!1;if(Dn(t,o),t.stateNode===null)mr(e,t),Kl(t,n,i),so(t,n,i,o),i=!0;else if(e===null){var c=t.stateNode,u=t.memoizedProps;c.props=u;var h=c.context,k=n.contextType;typeof k=="object"&&k!==null?k=nt(k):(k=Ge(n)?Jt:je.current,k=kn(t,k));var R=n.getDerivedStateFromProps,_=typeof R=="function"||typeof c.getSnapshotBeforeUpdate=="function";_||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==i||h!==k)&&Vl(t,c,i,k),qt=!1;var j=t.memoizedState;c.state=j,ar(t,i,c,o),h=t.memoizedState,u!==i||j!==h||Ue.current||qt?(typeof R=="function"&&(oo(t,n,R,i),h=t.memoizedState),(u=qt||Hl(t,n,u,i,j,h,k))?(_||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),c.props=i,c.state=h,c.context=k,i=u):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,xl(e,t),u=t.memoizedProps,k=t.type===t.elementType?u:ut(t.type,u),c.props=k,_=t.pendingProps,j=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=nt(h):(h=Ge(n)?Jt:je.current,h=kn(t,h));var H=n.getDerivedStateFromProps;(R=typeof H=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==_||j!==h)&&Vl(t,c,i,h),qt=!1,j=t.memoizedState,c.state=j,ar(t,i,c,o);var X=t.memoizedState;u!==_||j!==X||Ue.current||qt?(typeof H=="function"&&(oo(t,n,H,i),X=t.memoizedState),(k=qt||Hl(t,n,k,i,j,X,h)||!1)?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,X,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,X,h)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=X),c.props=i,c.state=X,c.context=h,i=k):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),i=!1)}return ho(e,t,n,i,s,o)}function ho(e,t,n,i,o,s){ic(e,t);var c=(t.flags&128)!==0;if(!i&&!c)return o&&cl(t,n,!1),Et(e,t,s);i=t.stateNode,Du.current=t;var u=c&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&c?(t.child=zn(t,e.child,null,s),t.child=zn(t,null,u,s)):_e(e,t,u,s),t.memoizedState=i.state,o&&cl(t,n,!0),t.child}function ac(e){var t=e.stateNode;t.pendingContext?sl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sl(e,t.context,!1),Qa(e,t.containerInfo)}function oc(e,t,n,i,o){return Tn(),qa(o),t.flags|=256,_e(e,t,n,i),t.child}var po={dehydrated:null,treeContext:null,retryLane:0};function mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,t,n){var i=t.pendingProps,o=xe.current,s=!1,c=(t.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(xe,o&1),e===null)return Ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=i.children,e=i.fallback,s?(i=t.mode,s=t.child,c={mode:"hidden",children:c},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=c):s=zr(c,i,0,null),e=cn(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=mo(n),t.memoizedState=po,e):go(t,c));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return Eu(e,t,c,i,u,o,n);if(s){s=i.fallback,c=t.mode,o=e.child,u=o.sibling;var h={mode:"hidden",children:i.children};return(c&1)===0&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=h,t.deletions=null):(i=Qt(o,h),i.subtreeFlags=o.subtreeFlags&14680064),u!==null?s=Qt(u,s):(s=cn(s,c,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,c=e.child.memoizedState,c=c===null?mo(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},s.memoizedState=c,s.childLanes=e.childLanes&~n,t.memoizedState=po,i}return s=e.child,e=s.sibling,i=Qt(s,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function go(e,t){return t=zr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pr(e,t,n,i){return i!==null&&qa(i),zn(t,e.child,null,n),e=go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eu(e,t,n,i,o,s,c){if(n)return t.flags&256?(t.flags&=-257,i=lo(Error(f(422))),pr(e,t,c,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=i.fallback,o=t.mode,i=zr({mode:"visible",children:i.children},o,0,null),s=cn(s,o,c,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,(t.mode&1)!==0&&zn(t,e.child,null,c),t.child.memoizedState=mo(c),t.memoizedState=po,s);if((t.mode&1)===0)return pr(e,t,c,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var u=i.dgst;return i=u,s=Error(f(419)),i=lo(s,i,void 0),pr(e,t,c,i)}if(u=(c&e.childLanes)!==0,Oe||u){if(i=Fe,i!==null){switch(c&-c){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(i.suspendedLanes|c))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Ct(e,o),mt(i,e,o,-1))}return No(),i=lo(Error(f(421))),pr(e,t,c,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Uu.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,Je=At(o.nextSibling),Ye=t,we=!0,dt=null,e!==null&&(et[tt++]=Tt,et[tt++]=zt,et[tt++]=Zt,Tt=e.id,zt=e.overflow,Zt=t),t=go(t,i.children),t.flags|=4096,t)}function lc(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ha(e.return,t,n)}function fo(e,t,n,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=o)}function cc(e,t,n){var i=t.pendingProps,o=i.revealOrder,s=i.tail;if(_e(e,t,i.children,n),i=xe.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,n,t);else if(e.tag===19)lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(me(xe,i),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&or(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fo(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&or(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fo(t,!0,n,null,s);break;case"together":fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fu(e,t,n){switch(t.tag){case 3:ac(t),Tn();break;case 5:Sl(t);break;case 1:Ge(t.type)&&Xi(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;me(nr,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(me(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?sc(e,t,n):(me(xe,xe.current&1),e=Et(e,t,n),e!==null?e.sibling:null);me(xe,xe.current&1);break;case 19:if(i=(n&t.childLanes)!==0,(e.flags&128)!==0){if(i)return cc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(xe,xe.current),i)break;return null;case 22:case 23:return t.lanes=0,nc(e,t,n)}return Et(e,t,n)}var dc,yo,uc,hc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},yo=function(){},uc=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,nn(wt.current);var s=null;switch(n){case"input":o=Hr(e,o),i=Hr(e,i),s=[];break;case"select":o=$({},o,{value:void 0}),i=$({},i,{value:void 0}),s=[];break;case"textarea":o=Qr(e,o),i=Qr(e,i),s=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Vi)}Xr(n,i);var c;n=null;for(k in o)if(!i.hasOwnProperty(k)&&o.hasOwnProperty(k)&&o[k]!=null)if(k==="style"){var u=o[k];for(c in u)u.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(q.hasOwnProperty(k)?s||(s=[]):(s=s||[]).push(k,null));for(k in i){var h=i[k];if(u=o!=null?o[k]:void 0,i.hasOwnProperty(k)&&h!==u&&(h!=null||u!=null))if(k==="style")if(u){for(c in u)!u.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&u[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(s||(s=[]),s.push(k,n)),n=h;else k==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(s=s||[]).push(k,h)):k==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(k,""+h):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(q.hasOwnProperty(k)?(h!=null&&k==="onScroll"&&ge("scroll",e),s||u===h||(s=[])):(s=s||[]).push(k,h))}n&&(s=s||[]).push("style",n);var k=s;(t.updateQueue=k)&&(t.flags|=4)}},hc=function(e,t,n,i){n!==i&&(t.flags|=4)};function mi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Nu(e,t,n){var i=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Ge(t.type)&&$i(),Re(t),null;case 3:return i=t.stateNode,En(),fe(Ue),fe(je),Ya(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dt!==null&&(Do(dt),dt=null))),yo(e,t),Re(t),null;case 5:$a(t);var o=nn(ci.current);if(n=t.type,e!==null&&t.stateNode!=null)uc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(f(166));return Re(t),null}if(e=nn(wt.current),er(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[vt]=t,i[ri]=s,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",i),ge("close",i);break;case"iframe":case"object":case"embed":ge("load",i);break;case"video":case"audio":for(o=0;o<ti.length;o++)ge(ti[o],i);break;case"source":ge("error",i);break;case"img":case"image":case"link":ge("error",i),ge("load",i);break;case"details":ge("toggle",i);break;case"input":Ko(i,s),ge("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ge("invalid",i);break;case"textarea":$o(i,s),ge("invalid",i)}Xr(n,s),o=null;for(var c in s)if(s.hasOwnProperty(c)){var u=s[c];c==="children"?typeof u=="string"?i.textContent!==u&&(s.suppressHydrationWarning!==!0&&Ki(i.textContent,u,e),o=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Ki(i.textContent,u,e),o=["children",""+u]):q.hasOwnProperty(c)&&u!=null&&c==="onScroll"&&ge("scroll",i)}switch(n){case"input":Si(i),Qo(i,s,!0);break;case"textarea":Si(i),Yo(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n==="select"&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[vt]=t,e[ri]=i,dc(e,t,!1,!1),t.stateNode=e;e:{switch(c=Yr(n,i),n){case"dialog":ge("cancel",e),ge("close",e),o=i;break;case"iframe":case"object":case"embed":ge("load",e),o=i;break;case"video":case"audio":for(o=0;o<ti.length;o++)ge(ti[o],e);o=i;break;case"source":ge("error",e),o=i;break;case"img":case"image":case"link":ge("error",e),ge("load",e),o=i;break;case"details":ge("toggle",e),o=i;break;case"input":Ko(e,i),o=Hr(e,i),ge("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=$({},i,{value:void 0}),ge("invalid",e);break;case"textarea":$o(e,i),o=Qr(e,i),ge("invalid",e);break;default:o=i}Xr(n,o),u=o;for(s in u)if(u.hasOwnProperty(s)){var h=u[s];s==="style"?ts(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Zo(e,h)):s==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Rn(e,h):typeof h=="number"&&Rn(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(q.hasOwnProperty(s)?h!=null&&s==="onScroll"&&ge("scroll",e):h!=null&&z(e,s,h,c))}switch(n){case"input":Si(e),Qo(e,i,!1);break;case"textarea":Si(e),Yo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ue(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?dn(e,!!i.multiple,s,!1):i.defaultValue!=null&&dn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)hc(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(f(166));if(n=nn(ci.current),nn(wt.current),er(t)){if(i=t.stateNode,n=t.memoizedProps,i[vt]=t,(s=i.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:Ki(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(i.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vt]=t,t.stateNode=i}return Re(t),null;case 13:if(fe(xe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&Je!==null&&(t.mode&1)!==0&&(t.flags&128)===0)gl(),Tn(),t.flags|=98560,s=!1;else if(s=er(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(f(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(f(317));s[vt]=t}else Tn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),s=!1}else dt!==null&&(Do(dt),dt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?De===0&&(De=3):No())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return En(),yo(e,t),e===null&&ni(t.stateNode.containerInfo),Re(t),null;case 10:return Oa(t.type._context),Re(t),null;case 17:return Ge(t.type)&&$i(),Re(t),null;case 19:if(fe(xe),s=t.memoizedState,s===null)return Re(t),null;if(i=(t.flags&128)!==0,c=s.rendering,c===null)if(i)mi(s,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=or(e),c!==null){for(t.flags|=128,mi(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(xe,xe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Le()>Pn&&(t.flags|=128,i=!0,mi(s,!1),t.lanes=4194304)}else{if(!i)if(e=or(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!we)return Re(t),null}else 2*Le()-s.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,i=!0,mi(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n!==null?n.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Le(),t.sibling=null,n=xe.current,me(xe,i?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Fo(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(f(156,t.tag))}function Mu(e,t){switch(_a(t),t.tag){case 1:return Ge(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(),fe(Ue),fe(je),Ya(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return $a(t),null;case 13:if(fe(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(xe),null;case 4:return En(),null;case 10:return Oa(t.type._context),null;case 22:case 23:return Fo(),null;case 24:return null;default:return null}}var gr=!1,Ae=!1,Pu=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Se(e,t,i)}else n.current=null}function vo(e,t,n){try{n()}catch(i){Se(e,t,i)}}var pc=!1;function ju(e,t){if(Ea=Wi,e=Hs(),ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var c=0,u=-1,h=-1,k=0,R=0,_=e,j=null;t:for(;;){for(var H;_!==n||o!==0&&_.nodeType!==3||(u=c+o),_!==s||i!==0&&_.nodeType!==3||(h=c+i),_.nodeType===3&&(c+=_.nodeValue.length),(H=_.firstChild)!==null;)j=_,_=H;for(;;){if(_===e)break t;if(j===n&&++k===o&&(u=c),j===s&&++R===i&&(h=c),(H=_.nextSibling)!==null)break;_=j,j=_.parentNode}_=H}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fa={focusedElem:e,selectionRange:n},Wi=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var X=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var Y=X.memoizedProps,Te=X.memoizedState,w=t.stateNode,m=w.getSnapshotBeforeUpdate(t.elementType===t.type?Y:ut(t.type,Y),Te);w.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(f(163))}}catch(I){Se(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return X=pc,pc=!1,X}function gi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&vo(t,n,s)}o=o.next}while(o!==i)}}function fr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function wo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mc(e){var t=e.alternate;t!==null&&(e.alternate=null,mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[ri],delete t[ja],delete t[fu],delete t[yu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi));else if(i!==4&&(e=e.child,e!==null))for(xo(e,t,n),e=e.sibling;e!==null;)xo(e,t,n),e=e.sibling}function bo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;e!==null;)bo(e,t,n),e=e.sibling}var Me=null,ht=!1;function Gt(e,t,n){for(n=n.child;n!==null;)yc(e,t,n),n=n.sibling}function yc(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ei,n)}catch{}switch(n.tag){case 5:Ae||Nn(n,t);case 6:var i=Me,o=ht;Me=null,Gt(e,t,n),Me=i,ht=o,Me!==null&&(ht?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(ht?(e=Me,n=n.stateNode,e.nodeType===8?Pa(e.parentNode,n):e.nodeType===1&&Pa(e,n),Vn(e)):Pa(Me,n.stateNode));break;case 4:i=Me,o=ht,Me=n.stateNode.containerInfo,ht=!0,Gt(e,t,n),Me=i,ht=o;break;case 0:case 11:case 14:case 15:if(!Ae&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var s=o,c=s.destroy;s=s.tag,c!==void 0&&((s&2)!==0||(s&4)!==0)&&vo(n,t,c),o=o.next}while(o!==i)}Gt(e,t,n);break;case 1:if(!Ae&&(Nn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){Se(n,t,u)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Ae=(i=Ae)||n.memoizedState!==null,Gt(e,t,n),Ae=i):Gt(e,t,n);break;default:Gt(e,t,n)}}function vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pu),t.forEach(function(i){var o=Gu.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var s=e,c=t,u=c;e:for(;u!==null;){switch(u.tag){case 5:Me=u.stateNode,ht=!1;break e;case 3:Me=u.stateNode.containerInfo,ht=!0;break e;case 4:Me=u.stateNode.containerInfo,ht=!0;break e}u=u.return}if(Me===null)throw Error(f(160));yc(s,c,o),Me=null,ht=!1;var h=o.alternate;h!==null&&(h.return=null),o.return=null}catch(k){Se(o,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),bt(e),i&4){try{gi(3,e,e.return),fr(3,e)}catch(Y){Se(e,e.return,Y)}try{gi(5,e,e.return)}catch(Y){Se(e,e.return,Y)}}break;case 1:pt(t,e),bt(e),i&512&&n!==null&&Nn(n,n.return);break;case 5:if(pt(t,e),bt(e),i&512&&n!==null&&Nn(n,n.return),e.flags&32){var o=e.stateNode;try{Rn(o,"")}catch(Y){Se(e,e.return,Y)}}if(i&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,c=n!==null?n.memoizedProps:s,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&Vo(o,s),Yr(u,c);var k=Yr(u,s);for(c=0;c<h.length;c+=2){var R=h[c],_=h[c+1];R==="style"?ts(o,_):R==="dangerouslySetInnerHTML"?Zo(o,_):R==="children"?Rn(o,_):z(o,R,_,k)}switch(u){case"input":Kr(o,s);break;case"textarea":Xo(o,s);break;case"select":var j=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var H=s.value;H!=null?dn(o,!!s.multiple,H,!1):j!==!!s.multiple&&(s.defaultValue!=null?dn(o,!!s.multiple,s.defaultValue,!0):dn(o,!!s.multiple,s.multiple?[]:"",!1))}o[ri]=s}catch(Y){Se(e,e.return,Y)}}break;case 6:if(pt(t,e),bt(e),i&4){if(e.stateNode===null)throw Error(f(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(Y){Se(e,e.return,Y)}}break;case 3:if(pt(t,e),bt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(Y){Se(e,e.return,Y)}break;case 4:pt(t,e),bt(e);break;case 13:pt(t,e),bt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Lo=Le())),i&4&&vc(e);break;case 22:if(R=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(k=Ae)||R,pt(t,e),Ae=k):pt(t,e),bt(e),i&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!R&&(e.mode&1)!==0)for(Q=e,R=e.child;R!==null;){for(_=Q=R;Q!==null;){switch(j=Q,H=j.child,j.tag){case 0:case 11:case 14:case 15:gi(4,j,j.return);break;case 1:Nn(j,j.return);var X=j.stateNode;if(typeof X.componentWillUnmount=="function"){i=j,n=j.return;try{t=i,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(Y){Se(i,n,Y)}}break;case 5:Nn(j,j.return);break;case 22:if(j.memoizedState!==null){kc(_);continue}}H!==null?(H.return=j,Q=H):kc(_)}R=R.sibling}e:for(R=null,_=e;;){if(_.tag===5){if(R===null){R=_;try{o=_.stateNode,k?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=_.stateNode,h=_.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=es("display",c))}catch(Y){Se(e,e.return,Y)}}}else if(_.tag===6){if(R===null)try{_.stateNode.nodeValue=k?"":_.memoizedProps}catch(Y){Se(e,e.return,Y)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;R===_&&(R=null),_=_.return}R===_&&(R=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:pt(t,e),bt(e),i&4&&vc(e);break;case 21:break;default:pt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var i=n;break e}n=n.return}throw Error(f(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Rn(o,""),i.flags&=-33);var s=fc(e);bo(e,s,o);break;case 3:case 4:var c=i.stateNode.containerInfo,u=fc(e);xo(e,u,c);break;default:throw Error(f(161))}}catch(h){Se(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wu(e,t,n){Q=e,xc(e)}function xc(e,t,n){for(var i=(e.mode&1)!==0;Q!==null;){var o=Q,s=o.child;if(o.tag===22&&i){var c=o.memoizedState!==null||gr;if(!c){var u=o.alternate,h=u!==null&&u.memoizedState!==null||Ae;u=gr;var k=Ae;if(gr=c,(Ae=h)&&!k)for(Q=o;Q!==null;)c=Q,h=c.child,c.tag===22&&c.memoizedState!==null?Sc(o):h!==null?(h.return=c,Q=h):Sc(o);for(;s!==null;)Q=s,xc(s),s=s.sibling;Q=o,gr=u,Ae=k}bc(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,Q=s):bc(e)}}function bc(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ae||fr(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ae)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&kl(t,s,i);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kl(t,c,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var R=k.memoizedState;if(R!==null){var _=R.dehydrated;_!==null&&Vn(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(f(163))}Ae||t.flags&512&&wo(t)}catch(j){Se(t,t.return,j)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function kc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Sc(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fr(4,t)}catch(h){Se(t,n,h)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(h){Se(t,o,h)}}var s=t.return;try{wo(t)}catch(h){Se(t,s,h)}break;case 5:var c=t.return;try{wo(t)}catch(h){Se(t,c,h)}}}catch(h){Se(t,t.return,h)}if(t===e){Q=null;break}var u=t.sibling;if(u!==null){u.return=t.return,Q=u;break}Q=t.return}}var Ru=Math.ceil,yr=C.ReactCurrentDispatcher,ko=C.ReactCurrentOwner,rt=C.ReactCurrentBatchConfig,se=0,Fe=null,ze=null,Pe=0,Ze=0,Mn=_t(0),De=0,fi=null,an=0,vr=0,So=0,yi=null,He=null,Lo=0,Pn=1/0,Ft=null,wr=!1,To=null,Ot=null,xr=!1,Ht=null,br=0,vi=0,zo=null,kr=-1,Sr=0;function Be(){return(se&6)!==0?Le():kr!==-1?kr:kr=Le()}function Kt(e){return(e.mode&1)===0?1:(se&2)!==0&&Pe!==0?Pe&-Pe:wu.transition!==null?(Sr===0&&(Sr=fs()),Sr):(e=he,e!==0||(e=window.event,e=e===void 0?16:Ts(e.type)),e)}function mt(e,t,n,i){if(50<vi)throw vi=0,zo=null,Error(f(185));Un(e,n,i),((se&2)===0||e!==Fe)&&(e===Fe&&((se&2)===0&&(vr|=n),De===4&&Vt(e,Pe)),Ke(e,i),n===1&&se===0&&(t.mode&1)===0&&(Pn=Le()+500,Yi&&It()))}function Ke(e,t){var n=e.callbackNode;wd(e,t);var i=Mi(e,e===Fe?Pe:0);if(i===0)n!==null&&ps(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&ps(n),t===1)e.tag===0?vu(Tc.bind(null,e)):dl(Tc.bind(null,e)),mu(function(){(se&6)===0&&It()}),n=null;else{switch(ys(i)){case 1:n=ra;break;case 4:n=ms;break;case 16:n=Di;break;case 536870912:n=gs;break;default:n=Di}n=Pc(n,Lc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lc(e,t){if(kr=-1,Sr=0,(se&6)!==0)throw Error(f(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var i=Mi(e,e===Fe?Pe:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Lr(e,i);else{t=i;var o=se;se|=2;var s=Cc();(Fe!==e||Pe!==t)&&(Ft=null,Pn=Le()+500,sn(e,t));do try{Bu();break}catch(u){zc(e,u)}while(!0);Ga(),yr.current=s,se=o,ze!==null?t=0:(Fe=null,Pe=0,t=De)}if(t!==0){if(t===2&&(o=aa(e),o!==0&&(i=o,t=Co(e,o))),t===1)throw n=fi,sn(e,0),Vt(e,i),Ke(e,Le()),n;if(t===6)Vt(e,i);else{if(o=e.current.alternate,(i&30)===0&&!Au(o)&&(t=Lr(e,i),t===2&&(s=aa(e),s!==0&&(i=s,t=Co(e,s))),t===1))throw n=fi,sn(e,0),Vt(e,i),Ke(e,Le()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(f(345));case 2:ln(e,He,Ft);break;case 3:if(Vt(e,i),(i&130023424)===i&&(t=Lo+500-Le(),10<t)){if(Mi(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ma(ln.bind(null,e,He,Ft),t);break}ln(e,He,Ft);break;case 4:if(Vt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var c=31-lt(i);s=1<<c,c=t[c],c>o&&(o=c),i&=~s}if(i=o,i=Le()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ru(i/1960))-i,10<i){e.timeoutHandle=Ma(ln.bind(null,e,He,Ft),i);break}ln(e,He,Ft);break;case 5:ln(e,He,Ft);break;default:throw Error(f(329))}}}return Ke(e,Le()),e.callbackNode===n?Lc.bind(null,e):null}function Co(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Lr(e,t),e!==2&&(t=He,He=n,t!==null&&Do(t)),e}function Do(e){He===null?He=e:He.push.apply(He,e)}function Au(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],s=o.getSnapshot;o=o.value;try{if(!ct(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~So,t&=~vr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),i=1<<n;e[n]=-1,t&=~i}}function Tc(e){if((se&6)!==0)throw Error(f(327));jn();var t=Mi(e,0);if((t&1)===0)return Ke(e,Le()),null;var n=Lr(e,t);if(e.tag!==0&&n===2){var i=aa(e);i!==0&&(t=i,n=Co(e,i))}if(n===1)throw n=fi,sn(e,0),Vt(e,t),Ke(e,Le()),n;if(n===6)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,He,Ft),Ke(e,Le()),null}function Eo(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Pn=Le()+500,Yi&&It())}}function on(e){Ht!==null&&Ht.tag===0&&(se&6)===0&&jn();var t=se;se|=1;var n=rt.transition,i=he;try{if(rt.transition=null,he=1,e)return e()}finally{he=i,rt.transition=n,se=t,(se&6)===0&&It()}}function Fo(){Ze=Mn.current,fe(Mn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pu(n)),ze!==null)for(n=ze.return;n!==null;){var i=n;switch(_a(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$i();break;case 3:En(),fe(Ue),fe(je),Ya();break;case 5:$a(i);break;case 4:En();break;case 13:fe(xe);break;case 19:fe(xe);break;case 10:Oa(i.type._context);break;case 22:case 23:Fo()}n=n.return}if(Fe=e,ze=e=Qt(e.current,null),Pe=Ze=t,De=0,fi=null,So=vr=an=0,He=yi=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,s=n.pending;if(s!==null){var c=s.next;s.next=o,i.next=c}n.pending=i}tn=null}return e}function zc(e,t){do{var n=ze;try{if(Ga(),sr.current=ur,lr){for(var i=be.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}lr=!1}if(rn=0,Ee=Ce=be=null,di=!1,ui=0,ko.current=null,n===null||n.return===null){De=1,fi=t,ze=null;break}e:{var s=e,c=n.return,u=n,h=t;if(t=Pe,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var k=h,R=u,_=R.tag;if((R.mode&1)===0&&(_===0||_===11||_===15)){var j=R.alternate;j?(R.updateQueue=j.updateQueue,R.memoizedState=j.memoizedState,R.lanes=j.lanes):(R.updateQueue=null,R.memoizedState=null)}var H=Yl(c);if(H!==null){H.flags&=-257,Jl(H,c,u,s,t),H.mode&1&&Xl(s,k,t),t=H,h=k;var X=t.updateQueue;if(X===null){var Y=new Set;Y.add(h),t.updateQueue=Y}else X.add(h);break e}else{if((t&1)===0){Xl(s,k,t),No();break e}h=Error(f(426))}}else if(we&&u.mode&1){var Te=Yl(c);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),Jl(Te,c,u,s,t),qa(Fn(h,u));break e}}s=h=Fn(h,u),De!==4&&(De=2),yi===null?yi=[s]:yi.push(s),s=c;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var w=Ql(s,h,t);bl(s,w);break e;case 1:u=h;var m=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ot===null||!Ot.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var I=$l(s,u,t);bl(s,I);break e}}s=s.return}while(s!==null)}Ec(n)}catch(J){t=J,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function Cc(){var e=yr.current;return yr.current=ur,e===null?ur:e}function No(){(De===0||De===3||De===2)&&(De=4),Fe===null||(an&268435455)===0&&(vr&268435455)===0||Vt(Fe,Pe)}function Lr(e,t){var n=se;se|=2;var i=Cc();(Fe!==e||Pe!==t)&&(Ft=null,sn(e,t));do try{_u();break}catch(o){zc(e,o)}while(!0);if(Ga(),se=n,yr.current=i,ze!==null)throw Error(f(261));return Fe=null,Pe=0,De}function _u(){for(;ze!==null;)Dc(ze)}function Bu(){for(;ze!==null&&!dd();)Dc(ze)}function Dc(e){var t=Mc(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Ec(e):ze=t,ko.current=null}function Ec(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Nu(n,t,Ze),n!==null){ze=n;return}}else{if(n=Mu(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,ze=null;return}}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);De===0&&(De=5)}function ln(e,t,n){var i=he,o=rt.transition;try{rt.transition=null,he=1,Iu(e,t,n,i)}finally{rt.transition=o,he=i}return null}function Iu(e,t,n,i){do jn();while(Ht!==null);if((se&6)!==0)throw Error(f(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(xd(e,s),e===Fe&&(ze=Fe=null,Pe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xr||(xr=!0,Pc(Di,function(){return jn(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=rt.transition,rt.transition=null;var c=he;he=1;var u=se;se|=4,ko.current=null,ju(e,n),wc(n,e),ou(Fa),Wi=!!Ea,Fa=Ea=null,e.current=n,Wu(n),ud(),se=u,he=c,rt.transition=s}else e.current=n;if(xr&&(xr=!1,Ht=e,br=o),s=e.pendingLanes,s===0&&(Ot=null),md(n.stateNode),Ke(e,Le()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(wr)throw wr=!1,e=To,To=null,e;return(br&1)!==0&&e.tag!==0&&jn(),s=e.pendingLanes,(s&1)!==0?e===zo?vi++:(vi=0,zo=e):vi=0,It(),null}function jn(){if(Ht!==null){var e=ys(br),t=rt.transition,n=he;try{if(rt.transition=null,he=16>e?16:e,Ht===null)var i=!1;else{if(e=Ht,Ht=null,br=0,(se&6)!==0)throw Error(f(331));var o=se;for(se|=4,Q=e.current;Q!==null;){var s=Q,c=s.child;if((Q.flags&16)!==0){var u=s.deletions;if(u!==null){for(var h=0;h<u.length;h++){var k=u[h];for(Q=k;Q!==null;){var R=Q;switch(R.tag){case 0:case 11:case 15:gi(8,R,s)}var _=R.child;if(_!==null)_.return=R,Q=_;else for(;Q!==null;){R=Q;var j=R.sibling,H=R.return;if(mc(R),R===k){Q=null;break}if(j!==null){j.return=H,Q=j;break}Q=H}}}var X=s.alternate;if(X!==null){var Y=X.child;if(Y!==null){X.child=null;do{var Te=Y.sibling;Y.sibling=null,Y=Te}while(Y!==null)}}Q=s}}if((s.subtreeFlags&2064)!==0&&c!==null)c.return=s,Q=c;else e:for(;Q!==null;){if(s=Q,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:gi(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,Q=w;break e}Q=s.return}}var m=e.current;for(Q=m;Q!==null;){c=Q;var x=c.child;if((c.subtreeFlags&2064)!==0&&x!==null)x.return=c,Q=x;else e:for(c=m;Q!==null;){if(u=Q,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:fr(9,u)}}catch(J){Se(u,u.return,J)}if(u===c){Q=null;break e}var I=u.sibling;if(I!==null){I.return=u.return,Q=I;break e}Q=u.return}}if(se=o,It(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ei,e)}catch{}i=!0}return i}finally{he=n,rt.transition=t}}return!1}function Fc(e,t,n){t=Fn(n,t),t=Ql(e,t,1),e=Ut(e,t,1),t=Be(),e!==null&&(Un(e,1,t),Ke(e,t))}function Se(e,t,n){if(e.tag===3)Fc(e,e,n);else for(;t!==null;){if(t.tag===3){Fc(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ot===null||!Ot.has(i))){e=Fn(n,e),e=$l(t,e,1),t=Ut(t,e,1),e=Be(),t!==null&&(Un(t,1,e),Ke(t,e));break}}t=t.return}}function qu(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Pe&n)===n&&(De===4||De===3&&(Pe&130023424)===Pe&&500>Le()-Lo?sn(e,0):So|=n),Ke(e,t)}function Nc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ni,Ni<<=1,(Ni&130023424)===0&&(Ni=4194304)));var n=Be();e=Ct(e,t),e!==null&&(Un(e,t,n),Ke(e,n))}function Uu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function Gu(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(f(314))}i!==null&&i.delete(t),Nc(e,n)}var Mc;Mc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Oe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Oe=!1,Fu(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,we&&(t.flags&1048576)!==0&&ul(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;mr(e,t),e=t.pendingProps;var o=kn(t,je.current);Dn(t,n),o=eo(null,t,i,e,o,n);var s=to();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(i)?(s=!0,Xi(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Va(t),o.updater=hr,t.stateNode=o,o._reactInternals=t,so(t,i,e,n),t=ho(null,t,i,!0,s,n)):(t.tag=0,we&&s&&Aa(t),_e(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(mr(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=Hu(i),e=ut(i,e),o){case 0:t=uo(null,t,i,e,n);break e;case 1:t=rc(null,t,i,e,n);break e;case 11:t=Zl(null,t,i,e,n);break e;case 14:t=ec(null,t,i,ut(i.type,e),n);break e}throw Error(f(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:ut(i,o),uo(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:ut(i,o),rc(e,t,i,o,n);case 3:e:{if(ac(t),e===null)throw Error(f(387));i=t.pendingProps,s=t.memoizedState,o=s.element,xl(e,t),ar(t,i,null,n);var c=t.memoizedState;if(i=c.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Fn(Error(f(423)),t),t=oc(e,t,i,n,o);break e}else if(i!==o){o=Fn(Error(f(424)),t),t=oc(e,t,i,n,o);break e}else for(Je=At(t.stateNode.containerInfo.firstChild),Ye=t,we=!0,dt=null,n=vl(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),i===o){t=Et(e,t,n);break e}_e(e,t,i,n)}t=t.child}return t;case 5:return Sl(t),e===null&&Ia(t),i=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,c=o.children,Na(i,o)?c=null:s!==null&&Na(i,s)&&(t.flags|=32),ic(e,t),_e(e,t,c,n),t.child;case 6:return e===null&&Ia(t),null;case 13:return sc(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=zn(t,null,i,n):_e(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:ut(i,o),Zl(e,t,i,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,s=t.memoizedProps,c=o.value,me(nr,i._currentValue),i._currentValue=c,s!==null)if(ct(s.value,c)){if(s.children===o.children&&!Ue.current){t=Et(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){c=s.child;for(var h=u.firstContext;h!==null;){if(h.context===i){if(s.tag===1){h=Dt(-1,n&-n),h.tag=2;var k=s.updateQueue;if(k!==null){k=k.shared;var R=k.pending;R===null?h.next=h:(h.next=R.next,R.next=h),k.pending=h}}s.lanes|=n,h=s.alternate,h!==null&&(h.lanes|=n),Ha(s.return,n,t),u.lanes|=n;break}h=h.next}}else if(s.tag===10)c=s.type===t.type?null:s.child;else if(s.tag===18){if(c=s.return,c===null)throw Error(f(341));c.lanes|=n,u=c.alternate,u!==null&&(u.lanes|=n),Ha(c,n,t),c=s.sibling}else c=s.child;if(c!==null)c.return=s;else for(c=s;c!==null;){if(c===t){c=null;break}if(s=c.sibling,s!==null){s.return=c.return,c=s;break}c=c.return}s=c}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,Dn(t,n),o=nt(o),i=i(o),t.flags|=1,_e(e,t,i,n),t.child;case 14:return i=t.type,o=ut(i,t.pendingProps),o=ut(i.type,o),ec(e,t,i,o,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:ut(i,o),mr(e,t),t.tag=1,Ge(i)?(e=!0,Xi(t)):e=!1,Dn(t,n),Kl(t,i,o),so(t,i,o,n),ho(null,t,i,!0,e,n);case 19:return cc(e,t,n);case 22:return nc(e,t,n)}throw Error(f(156,t.tag))};function Pc(e,t){return hs(e,t)}function Ou(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,i){return new Ou(e,t,n,i)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hu(e){if(typeof e=="function")return Mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gt)return 11;if(e===ft)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tr(e,t,n,i,o,s){var c=2;if(i=e,typeof e=="function")Mo(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case F:return cn(n.children,o,s,t);case V:c=8,o|=8;break;case re:return e=at(12,n,t,o|2),e.elementType=re,e.lanes=s,e;case Qe:return e=at(13,n,t,o),e.elementType=Qe,e.lanes=s,e;case st:return e=at(19,n,t,o),e.elementType=st,e.lanes=s,e;case ke:return zr(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:c=10;break e;case kt:c=9;break e;case gt:c=11;break e;case ft:c=14;break e;case qe:c=16,i=null;break e}throw Error(f(130,e==null?e:typeof e,""))}return t=at(c,n,t,o),t.elementType=e,t.type=i,t.lanes=s,t}function cn(e,t,n,i){return e=at(7,e,i,t),e.lanes=n,e}function zr(e,t,n,i){return e=at(22,e,i,t),e.elementType=ke,e.lanes=n,e.stateNode={isHidden:!1},e}function Po(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function jo(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ku(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Wo(e,t,n,i,o,s,c,u,h){return e=new Ku(e,t,n,u,h),t===1?(t=1,s===!0&&(t|=8)):t=0,s=at(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Va(s),e}function Vu(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function jc(e){if(!e)return Bt;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(f(171))}if(e.tag===1){var n=e.type;if(Ge(n))return ll(e,n,t)}return t}function Wc(e,t,n,i,o,s,c,u,h){return e=Wo(n,i,!0,e,o,s,c,u,h),e.context=jc(null),n=e.current,i=Be(),o=Kt(n),s=Dt(i,o),s.callback=t??null,Ut(n,s,o),e.current.lanes=o,Un(e,o,i),Ke(e,i),e}function Cr(e,t,n,i){var o=t.current,s=Be(),c=Kt(o);return n=jc(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(s,c),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Ut(o,t,c),e!==null&&(mt(e,o,c,s),rr(e,o,c)),c}function Dr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){Rc(e,t),(e=e.alternate)&&Rc(e,t)}function Qu(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ao(e){this._internalRoot=e}Er.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));Cr(e,t,null,null)},Er.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Cr(null,e,null,null)}),t[St]=null}};function Er(e){this._internalRoot=e}Er.prototype.unstable_scheduleHydration=function(e){if(e){var t=xs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&Ss(e)}};function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function $u(e,t,n,i,o){if(o){if(typeof i=="function"){var s=i;i=function(){var k=Dr(c);s.call(k)}}var c=Wc(t,i,e,0,null,!1,!1,"",_c);return e._reactRootContainer=c,e[St]=c.current,ni(e.nodeType===8?e.parentNode:e),on(),c}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var u=i;i=function(){var k=Dr(h);u.call(k)}}var h=Wo(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=h,e[St]=h.current,ni(e.nodeType===8?e.parentNode:e),on(function(){Cr(t,h,n,i)}),h}function Nr(e,t,n,i,o){var s=n._reactRootContainer;if(s){var c=s;if(typeof o=="function"){var u=o;o=function(){var h=Dr(c);u.call(h)}}Cr(t,c,e,o)}else c=$u(n,t,e,o,i);return Dr(c)}vs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(sa(t,n|1),Ke(t,Le()),(se&6)===0&&(Pn=Le()+500,It()))}break;case 13:on(function(){var i=Ct(e,1);if(i!==null){var o=Be();mt(i,e,1,o)}}),Ro(e,1)}},la=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Be();mt(t,e,134217728,n)}Ro(e,134217728)}},ws=function(e){if(e.tag===13){var t=Kt(e),n=Ct(e,t);if(n!==null){var i=Be();mt(n,e,t,i)}Ro(e,t)}},xs=function(){return he},bs=function(e,t){var n=he;try{return he=e,t()}finally{he=n}},ea=function(e,t,n){switch(t){case"input":if(Kr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=Qi(i);if(!o)throw Error(f(90));Ho(i),Kr(i,o)}}}break;case"textarea":Xo(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}},as=Eo,os=on;var Xu={usingClientEntryPoint:!1,Events:[ai,xn,Qi,is,rs,Eo]},wi={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yu={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ds(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||Qu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{Ei=Mr.inject(Yu),yt=Mr}catch{}}return Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xu,Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_o(t))throw Error(f(200));return Vu(e,t,null,n)},Ve.createRoot=function(e,t){if(!_o(e))throw Error(f(299));var n=!1,i="",o=Ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Wo(e,1,!1,null,null,n,!1,i,o),e[St]=t.current,ni(e.nodeType===8?e.parentNode:e),new Ao(t)},Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=ds(t),e=e===null?null:e.stateNode,e},Ve.flushSync=function(e){return on(e)},Ve.hydrate=function(e,t,n){if(!Fr(t))throw Error(f(200));return Nr(null,e,t,!0,n)},Ve.hydrateRoot=function(e,t,n){if(!_o(e))throw Error(f(405));var i=n!=null&&n.hydratedSources||null,o=!1,s="",c=Ac;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=Wc(t,null,e,1,n??null,o,!1,s,c),e[St]=t.current,ni(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Er(t)},Ve.render=function(e,t,n){if(!Fr(t))throw Error(f(200));return Nr(null,e,t,!1,n)},Ve.unmountComponentAtNode=function(e){if(!Fr(e))throw Error(f(40));return e._reactRootContainer?(on(function(){Nr(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1},Ve.unstable_batchedUpdates=Eo,Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Fr(n))throw Error(f(200));if(e==null||e._reactInternals===void 0)throw Error(f(38));return Nr(e,t,n,!1,i)},Ve.version="18.3.1-next-f1338f8080-20240426",Ve}var Kc;function ah(){if(Kc)return qo.exports;Kc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),qo.exports=rh(),qo.exports}var Vc;function oh(){if(Vc)return Pr;Vc=1;var l=ah();return Pr.createRoot=l.createRoot,Pr.hydrateRoot=l.hydrateRoot,Pr}var sh=oh();const Qc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},jr=[{id:"basics",icon:"→",color:"#C2410C",title:"What Is a Vector?",subtitle:"The fundamental building block — a list of numbers that represents something",resources:[{type:"infographic",title:"3Blue1Brown — Vectors, what even are they?",url:"https://www.3blue1brown.com/lessons/vectors"},{type:"infographic",title:"Interactive Matrix Visualization — drag & transform vectors",url:"https://shad.io/MatVis/"},{type:"infographic",title:"Seeing Theory — visual probability & stats",url:"https://seeing-theory.brown.edu/"},{type:"read",title:"Mathematics for Machine Learning — Ch 2 (free textbook)",url:"https://mml-book.github.io/book/mml-book.pdf"},{type:"read",title:"Better Explained — Intuitive Guide to Linear Algebra",url:"https://betterexplained.com/articles/linear-algebra-guide/"},{type:"video",title:"3Blue1Brown — Essence of Linear Algebra (playlist)",url:"https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"}],content:[{heading:"Definition",body:`A vector is simply an ordered list of numbers. Each number is a **component**.

• 2D: **[3, 5]** — a point on a flat surface
• 3D: **[1, -2, 4]** — a point in space  
• 768D: **[0.12, -0.03, 0.87, ..., 0.44]** — what LLMs actually use

In ML, vectors represent *meaning*. A word, sentence, or document gets converted into a vector, and the model operates on those numbers.`},{heading:"Why LLMs Need Vectors",body:`Neural networks can only do math — they can't read text.

**The pipeline:**
1. Text: "The cat sat"
2. Tokenize: ["The", "cat", "sat"]  
3. Each token → a vector: [0.12, -0.5, 0.3, ...]

Every operation inside a Transformer — attention, feed-forward, normalization — is a vector operation.`},{heading:"Notation & Terminology",body:`**Bold lowercase** for vectors: **v**, **w**, **x**
**Subscript** for components: v₁, v₂, v₃

**Dimension** = how many numbers in the vector.
• GPT-2 small: 768 dimensions
• GPT-3: 12,288 dimensions
• Llama 3 70B: 8,192 dimensions`},{heading:"Example: Vectors as Meaning",body:`Imagine a 3D vector space:
• Dim 1 = "royalty", Dim 2 = "gender", Dim 3 = "age"

• king  → [0.9, 0.1, 0.6]
• queen → [0.9, 0.9, 0.6]
• boy   → [0.1, 0.1, 0.2]
• girl  → [0.1, 0.9, 0.2]

king - queen ≈ boy - girl → the "gender" direction
This is **king - man + woman ≈ queen** (Word2Vec)`}],questions:[{q:"What is the dimension of the vector [4, -1, 0, 7, 2]?",a:"5",hint:"Count the number of elements in the list.",check:l=>l.trim()==="5"},{q:"GPT-2 small uses vectors of how many dimensions?",a:"768",hint:"This was mentioned in the Notation section.",check:l=>l.trim()==="768"},{q:"If king = [0.9, 0.1, 0.6] and queen = [0.9, 0.9, 0.6], what is king - queen?",a:"[0, -0.8, 0] — the difference is entirely in the 'gender' dimension (dim 2). This shows the model learned that the only difference between king and queen is the gender direction.",hint:"Subtract element-by-element: [0.9-0.9, 0.1-0.9, 0.6-0.6]",check:l=>{const r=l.replace(/\s/g,"");return r.includes("0,-0.8,0")||r.includes("0,-.8,0")}},{q:"Why can't a Transformer process raw text directly? What must happen first?",a:"Neural networks only operate on numbers. Text must first be tokenized (split into tokens), then each token is converted into a numerical vector (embedding) before the model can process it.",hint:"Think about what neural networks actually compute on.",check:l=>{const r=l.toLowerCase();return(r.includes("number")||r.includes("numeric")||r.includes("vector"))&&(r.includes("token")||r.includes("embed")||r.includes("convert"))}}]},{id:"ops",icon:"✕",color:"#0369A1",title:"Vector Operations",subtitle:"Addition, scaling, dot product, and matrix multiplication",resources:[{type:"infographic",title:"3Blue1Brown — Dot products and duality",url:"https://www.3blue1brown.com/lessons/dot-products"},{type:"infographic",title:"Immersive Math — Interactive Linear Algebra",url:"https://immersivemath.com/ila/index.html"},{type:"infographic",title:"Matrix Multiplication Visualizer",url:"http://matrixmultiplication.xyz/"},{type:"read",title:"Dive into Deep Learning — Ch 2.3: Linear Algebra",url:"https://d2l.ai/chapter_preliminaries/linear-algebra.html"},{type:"video",title:"3Blue1Brown — Matrix multiplication as composition",url:"https://www.youtube.com/watch?v=XkY2DOUCWMU"}],content:[{heading:"Vector Addition",body:`Add element-by-element: **[2, 3] + [1, -1] = [3, 2]**

This is how **residual connections** work:
x_new = x_old + Attention(x_old)

Each layer *adds* new information rather than replacing it.`},{heading:"Scalar Multiplication",body:`Multiply every element by one number: **3 × [2, -1] = [6, -3]**

Stretches/shrinks without changing direction. **Temperature** is scalar multiplication on logits:
• temp = 0.1 → peaked (confident)
• temp = 2.0 → flat (creative)`},{heading:"Dot Product — Most Important LLM Operation",body:`Multiply corresponding elements, then sum:
**[2, 3] · [1, -1] = (2×1) + (3×-1) = -1**

Measures **similarity**. Same direction → large positive. Perpendicular → zero.

**This is the core of attention:** attention_score = Query · Key`},{heading:"Matrix Multiplication",body:`A matrix × vector = new vector in a different space.

W (3×2) × x (2D) = output (3D)

**In Transformers:** embedding layers, Q/K/V projections, FFN layers, output layer — almost every parameter is a matrix.`},{heading:"Element-wise (Hadamard)",body:`Multiply elements without summing: **[2, 3] ⊙ [4, -1] = [8, -3]**

Used in: gating, dropout (multiply by 0/1 mask), feature interaction.`}],questions:[{q:"Compute: [4, -2, 1] + [-1, 3, 5]",a:"[3, 1, 6]",hint:"Add element-by-element: [4+(-1), (-2)+3, 1+5]",check:l=>l.replace(/\s/g,"").includes("3,1,6")},{q:"Compute: [1, 2, 3] · [4, 5, 6] (dot product)",a:"32. Calculation: (1×4) + (2×5) + (3×6) = 4 + 10 + 18 = 32",hint:"Multiply corresponding elements and sum: 1×4 + 2×5 + 3×6",check:l=>l.trim()==="32"},{q:"If temperature = 0.5 and logits = [2.0, -1.0, 4.0], what are the scaled logits?",a:"[4.0, -2.0, 8.0]. We divide by temperature: [2.0/0.5, -1.0/0.5, 4.0/0.5]. Lower temperature = sharper/more confident distribution.",hint:"Divide each logit by the temperature value.",check:l=>{const r=l.replace(/\s/g,"");return r.includes("4")&&r.includes("-2")&&r.includes("8")}},{q:"Why is the dot product the most important operation in LLMs?",a:"The dot product is used to compute attention scores. In every Transformer layer, the model takes the dot product of Query and Key vectors to determine how much attention each token should pay to every other token. Higher dot product = more similar = more attention.",hint:"Think about what happens inside the attention mechanism.",check:l=>{const r=l.toLowerCase();return r.includes("attention")&&(r.includes("similar")||r.includes("query")||r.includes("key"))}},{q:"If a 3×2 matrix multiplies a 2D vector, what is the dimension of the output?",a:"3D. A (3×2) matrix × (2D) vector = (3D) output. The matrix projects the vector from 2-dimensional space into 3-dimensional space.",hint:"The output dimension equals the number of rows in the matrix.",check:l=>l.trim().startsWith("3")}]},{id:"norms",icon:"‖‖",color:"#7E22CE",title:"Norms, Distance & Similarity",subtitle:"Measuring magnitude and comparing vectors",resources:[{type:"infographic",title:"Pinecone — What is Cosine Similarity?",url:"https://www.pinecone.io/learn/vector-similarity/"},{type:"read",title:"Real Python — Embeddings & ChromaDB (hands-on)",url:"https://realpython.com/chromadb-vector-database/"},{type:"read",title:"TDS — RAG: Embeddings, Similarity & Retrieval",url:"https://towardsdatascience.com/rag-explained-understanding-embeddings-similarity-and-retrieval/"},{type:"video",title:"StatQuest — Cosine Similarity explained",url:"https://www.youtube.com/watch?v=e9U0QAFbfLI"}],content:[{heading:"Vector Norm (Length)",body:`L2 norm: ‖[3, 4]‖ = √(9 + 16) = **5**

**LayerNorm** rescales vectors at every layer to prevent magnitude explosion/vanishing.`},{heading:"Unit Vectors",body:`Divide by norm → length = 1, direction preserved.

v = [3, 4] → v̂ = [0.6, 0.8]

Embeddings are often normalized so similarity depends on *direction* not *magnitude*.`},{heading:"Cosine Similarity",body:`cos(v, w) = (v · w) / (‖v‖ × ‖w‖)

• **1.0** = same direction, **0** = unrelated, **-1.0** = opposite

Used in: RAG retrieval, semantic search, clustering.`},{heading:"Euclidean vs Cosine",body:`**Euclidean** = straight-line distance. Affected by magnitude.
**Cosine** = angle only. Magnitude-invariant.

Use cosine for text embeddings. Use Euclidean when magnitude matters (pixels, sensors).`}],questions:[{q:"What is the L2 norm of [6, 8]?",a:"10. Calculation: √(6² + 8²) = √(36 + 64) = √100 = 10",hint:"√(6² + 8²)",check:l=>l.trim()==="10"},{q:"Normalize the vector [3, 4] to a unit vector.",a:"[0.6, 0.8]. The norm is 5, so divide each element: [3/5, 4/5] = [0.6, 0.8]. Now the length = √(0.36 + 0.64) = 1.",hint:"Divide each element by the norm (which is 5).",check:l=>{const r=l.replace(/\s/g,"");return r.includes("0.6")&&r.includes("0.8")}},{q:"v = [1, 0] and w = [0, 1]. What is their cosine similarity?",a:"0. The dot product is (1×0 + 0×1) = 0. These vectors are perpendicular (90°), so they are completely unrelated in terms of direction.",hint:"Compute the dot product first. What's 1×0 + 0×1?",check:l=>l.trim()==="0"},{q:"Why is cosine similarity preferred over Euclidean distance for text embeddings in RAG?",a:"Cosine similarity only measures the angle/direction between vectors, making it invariant to magnitude. Two texts with the same meaning but different lengths would have different magnitudes, making Euclidean distance misleading. Cosine similarity captures semantic similarity regardless of vector scale.",hint:"Think about what happens when two texts have similar meaning but different lengths.",check:l=>{const r=l.toLowerCase();return(r.includes("angle")||r.includes("direction")||r.includes("magnitude"))&&(r.includes("invari")||r.includes("regardless")||r.includes("doesn't")||r.includes("not affect"))}}]},{id:"spaces",icon:"◇",color:"#B91C1C",title:"Vector Spaces & Subspaces",subtitle:"The geometric world LLM representations live in",resources:[{type:"infographic",title:"3Blue1Brown — Linear combinations & span",url:"https://www.3blue1brown.com/lessons/span"},{type:"infographic",title:"GeoGebra — Linear Algebra Applets",url:"https://www.geogebra.org/m/bkcytcdj"},{type:"read",title:"MML Book — Ch 2.4–2.7: Vector Spaces",url:"https://mml-book.github.io/book/mml-book.pdf"},{type:"video",title:"3Blue1Brown — Eigenvectors and eigenvalues",url:"https://www.youtube.com/watch?v=PFDu9oVAE-g"}],content:[{heading:"What Is a Vector Space?",body:`A collection of vectors closed under addition and scalar multiplication.

An LLM's embedding space is a vector space — GPT-3's is 12,288-dimensional.`},{heading:"Basis & Dimension",body:`A **basis** = minimum set of vectors to describe every point.

In LLMs, the model *learns* its own basis. Individual dimensions can correspond to "sentiment," "formality," etc.`},{heading:"Linear Independence & Rank",body:`Independent: [1,0] and [0,1]. Dependent: [1,0], [0,1], [1,1] (third = first + second).

**Rank** = number of independent directions. Low-rank = redundancy → why **LoRA** works (~16-64 directions suffice for fine-tuning).`},{heading:"Projections & Subspaces",body:`Each attention head projects 768D → 64D:
q = W_Q × x    (768D → 64D)

12 heads × 64D = 768D. Multi-head attention = multiple subspace perspectives combined.`}],questions:[{q:"Are these vectors linearly independent? v₁ = [1, 0], v₂ = [2, 0]",a:"No. v₂ = 2 × v₁, so v₂ is just a scaled version of v₁. They point in the same direction and cannot span 2D space — they only cover a 1D line.",hint:"Can you express one as a scalar multiple of the other?",check:l=>l.toLowerCase().startsWith("no")},{q:"GPT-2 has 12 attention heads each with 64 dimensions. What's the full model dimension?",a:"768. Each head operates in a 64-dimensional subspace, and 12 heads × 64 dimensions = 768 total dimensions. The outputs of all heads are concatenated to reconstruct the full vector.",hint:"Multiply: 12 × 64",check:l=>l.trim().startsWith("768")},{q:"Why does LoRA use low-rank matrices for fine-tuning?",a:"During fine-tuning, the weight changes tend to be low-rank — meaning the updates only need to modify a small number of directions (typically 16-64) in the full weight space, not all thousands of dimensions. LoRA exploits this by decomposing weight updates into two small matrices, drastically reducing trainable parameters while achieving similar performance.",hint:"Think about how many directions actually change during fine-tuning.",check:l=>{const r=l.toLowerCase();return(r.includes("low-rank")||r.includes("few direction")||r.includes("small number"))&&(r.includes("fine-tun")||r.includes("parameter")||r.includes("update"))}}]},{id:"embeddings",icon:"◉",color:"#0E7490",title:"Embeddings — Vectors as Meaning",subtitle:"How LLMs convert tokens into rich representations",resources:[{type:"infographic",title:"Jay Alammar — Illustrated Word2Vec",url:"https://jalammar.github.io/illustrated-word2vec/"},{type:"infographic",title:"TensorFlow Embedding Projector (3D)",url:"https://projector.tensorflow.org/"},{type:"infographic",title:"Pinecone — Vector Databases guide",url:"https://www.pinecone.io/learn/vector-database/"},{type:"read",title:"Vicki Boykis — What are Embeddings? (free book)",url:"https://vickiboykis.com/what_are_embeddings/"},{type:"read",title:"HuggingFace MTEB Leaderboard",url:"https://huggingface.co/spaces/mteb/leaderboard"},{type:"video",title:"3Blue1Brown — GPT embedding (Ch 5)",url:"https://www.youtube.com/watch?v=wjZofJX0v4M"},{type:"video",title:"Karpathy — Let's build GPT",url:"https://www.youtube.com/watch?v=kCc8FmEb1nY"}],content:[{heading:"Token Embeddings",body:`A lookup table: (vocab_size × d_model) matrix.
GPT-2: 50,257 × 768 = 38.6M parameters.

Token "cat" (ID 9246) → row 9246 → 768D vector. These are *learned* during training.`},{heading:"Positional Embeddings",body:`Without position info: "dog bites man" = "man bites dog".

**Types:** Sinusoidal (fixed sin/cos), Learned (GPT-2), **RoPE** (Llama — rotates Q/K), ALiBi (bias on attention scores).`},{heading:"Contextual Embeddings",body:`Initial "bank" embedding is the same regardless of context. After Transformer layers:
• "river bank" → encodes "waterside"
• "bank account" → encodes "financial"

Attention mixes cross-token information at each layer.`},{heading:"Sentence Embeddings",body:`For RAG: one vector per sentence.

**Mean pooling**, **[CLS] token**, or **dedicated models** (BGE, E5, Nomic).

Typical dimensions: 768–1,536D.`}],questions:[{q:"How many parameters are in the embedding matrix of a model with vocab size 32,000 and dimension 4,096?",a:"131,072,000 (approximately 131M). Calculation: 32,000 × 4,096 = 131,072,000. Each vocabulary token gets its own 4,096-dimensional vector.",hint:"Multiply vocab_size × d_model",check:l=>l.replace(/[,\s]/g,"").includes("131072000")||l.toLowerCase().includes("131m")||l.includes("131,072,000")},{q:"Why does the word 'bank' get different vectors in 'river bank' vs 'bank account' at the output of a Transformer?",a:"The attention mechanism mixes information across all tokens at each layer. After many layers, the vector for 'bank' has absorbed contextual information from surrounding words like 'river' or 'account', producing a context-dependent representation. The initial embedding is the same, but attention transforms it differently based on context.",hint:"What mechanism allows tokens to exchange information?",check:l=>{const r=l.toLowerCase();return r.includes("attention")&&(r.includes("context")||r.includes("mix")||r.includes("surround"))}},{q:"What is mean pooling and why is it used for sentence embeddings?",a:"Mean pooling averages all token vectors in a sequence to produce a single vector representing the entire sentence. It's used because RAG and semantic search need one fixed-size vector per document/sentence, not a variable-length sequence of token vectors. It's simple and works reasonably well, though dedicated sentence embedding models are better.",hint:"How do you go from N token vectors to 1 sentence vector?",check:l=>{const r=l.toLowerCase();return r.includes("average")||r.includes("mean")}}]},{id:"attention",icon:"⊛",color:"#4338CA",title:"Vectors in Attention",subtitle:"Query, Key, Value vectors — the Transformer's core",resources:[{type:"infographic",title:"Jay Alammar — Illustrated Transformer",url:"https://jalammar.github.io/illustrated-transformer/"},{type:"infographic",title:"Transformer Explainer — GPT-2 walkthrough",url:"https://poloclub.github.io/transformer-explainer/"},{type:"infographic",title:"AttentionViz — explore BERT/GPT-2 heads",url:"https://catherinesyeh.github.io/attn-docs/"},{type:"read",title:"Attention Is All You Need (paper)",url:"https://arxiv.org/abs/1706.03762"},{type:"read",title:"Lilian Weng — Attention? Attention!",url:"https://lilianweng.github.io/posts/2018-06-24-attention/"},{type:"video",title:"3Blue1Brown — Attention step by step",url:"https://www.3blue1brown.com/lessons/attention"},{type:"video",title:"Karpathy — Build GPT from scratch",url:"https://www.youtube.com/watch?v=kCc8FmEb1nY"}],content:[{heading:"Q, K, V Trinity",body:`**Query:** "What am I looking for?" — **Key:** "What do I contain?" — **Value:** "What info do I provide?"

Q = W_Q × x   K = W_K × x   V = W_V × x   (768D → 64D each)`},{heading:"Scaled Dot-Product Attention",body:`**Attention(Q,K,V) = softmax(QKᵀ / √d_k) × V**

1. QKᵀ → similarity scores
2. ÷ √d_k → prevent softmax saturation
3. Softmax → probability distribution per row
4. × V → weighted blend of values`},{heading:"Multi-Head Attention",body:`GPT-2: 12 heads × 64D = 768D. Each head learns different patterns (syntax, coreference, position).

MultiHead = Concat(all heads) × W_O`},{heading:"Causal Masking & KV Cache",body:`GPT masks future tokens with -∞ before softmax → zero attention to the future.

**KV Cache:** only compute new token's Q,K,V each step; reuse all prior K,V. Saves massive compute.`}],questions:[{q:"Why do we divide by √d_k in scaled dot-product attention?",a:"Without scaling, dot products grow proportionally with d_k (the dimension), pushing values into regions where softmax has extremely small gradients (near 0 or 1). Dividing by √d_k keeps the values in a range where softmax produces useful, non-saturated gradients, allowing the model to learn effectively.",hint:"What happens to softmax when inputs are very large?",check:l=>{const r=l.toLowerCase();return r.includes("gradient")||r.includes("saturat")||r.includes("large")||r.includes("grow")||r.includes("scale")}},{q:"If d_model = 512 and there are 8 attention heads, what is d_k (dimension per head)?",a:"64. Each head gets an equal portion: 512 / 8 = 64 dimensions per head.",hint:"d_k = d_model / num_heads",check:l=>l.trim()==="64"},{q:"In causal masking, what value is used to mask future tokens, and why that specific value?",a:"Negative infinity (-∞). This value is used because softmax(-∞) = 0, which means the model assigns exactly zero attention weight to future tokens. Any finite negative number would still allow some small attention to leak through.",hint:"What does softmax do to very large negative numbers?",check:l=>{const r=l.toLowerCase();return r.includes("-inf")||r.includes("infinity")||r.includes("negative inf")||r.includes("-∞")}},{q:"A model generates 1000 tokens. Without KV cache, how many times is K₁ (key for token 1) computed? With KV cache?",a:"Without cache: 1000 times (recomputed at every generation step). With cache: 1 time (computed once at step 1, then stored and reused for all subsequent steps). This is why KV cache makes inference dramatically faster.",hint:"Without cache, everything is recomputed from scratch each step.",check:l=>{const r=l.replace(/\s/g,"");return r.includes("1000")&&r.includes("1")}}]},{id:"ffn",icon:"⧖",color:"#15803D",title:"Feed-Forward & Output",subtitle:"How vectors get transformed and decoded into words",resources:[{type:"infographic",title:"Jay Alammar — Illustrated GPT-2",url:"https://jalammar.github.io/illustrated-gpt2/"},{type:"infographic",title:"Distill.pub — Activation Atlas",url:"https://distill.pub/2019/activation-atlas/"},{type:"read",title:"Lilian Weng — Inference Optimization",url:"https://lilianweng.github.io/posts/2023-01-10-inference-optimization/"},{type:"read",title:"HuggingFace — How to Generate",url:"https://huggingface.co/blog/how-to-generate"},{type:"video",title:"3Blue1Brown — What is a GPT? (Ch 5)",url:"https://www.youtube.com/watch?v=wjZofJX0v4M"},{type:"video",title:"Karpathy — Building micrograd",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"}],content:[{heading:"FFN Layer",body:`FFN(x) = W₂ × activation(W₁ × x + b₁) + b₂

768D → 3072D (4× expansion) → activation → back to 768D. FFN layers store factual knowledge.`},{heading:"Activation Functions",body:`**ReLU:** max(0,x) — simple, "dead neuron" risk
**GELU (GPT/BERT):** smooth gating
**SwiGLU (Llama):** gated, empirically best`},{heading:"Output Layer",body:`logits = W_unembed × h (768D → 50,257D)
→ temperature scaling → softmax → probabilities → sample (greedy/top-k/top-p)`},{heading:"Residual Connections",body:`output = LayerNorm(x + SubLayer(x))

After 96 layers: x_final = x_0 + Δ₁ + ... + Δ₉₆. Prevents vanishing gradients, enables 100+ layers.`}],questions:[{q:"In GPT-2 (d_model=768), the FFN expands to 4× before compressing back. How many dimensions in the expanded layer?",a:"3,072. The FFN projects from 768 to 768×4 = 3,072 dimensions, applies the activation function, then projects back to 768.",hint:"768 × 4 = ?",check:l=>l.replace(/[,\s]/g,"").includes("3072")},{q:"What happens if you remove all activation functions from a Transformer?",a:"Without activation functions, all layers would perform only linear transformations. Multiple linear transformations in sequence collapse into a single linear transformation — so stacking 96 layers would be equivalent to having just 1 layer. The model would lose its ability to learn complex, non-linear patterns in data.",hint:"What do multiple linear transformations compose into?",check:l=>{const r=l.toLowerCase();return r.includes("linear")&&(r.includes("collapse")||r.includes("single")||r.includes("one")||r.includes("equivalent"))}},{q:"If logits = [3.0, 1.0, 0.5] and temperature = 0.5, what are the scaled logits before softmax?",a:"[6.0, 2.0, 1.0]. Divide each logit by 0.5: [3.0/0.5, 1.0/0.5, 0.5/0.5]. Lower temperature makes the distribution sharper — the gap between the highest and lowest values increases.",hint:"Scaled logits = logits / temperature",check:l=>{const r=l.replace(/\s/g,"");return r.includes("6")&&r.includes("2")&&r.includes("1")}},{q:"Why are residual connections critical for deep Transformers?",a:"Residual connections (x + SubLayer(x)) allow gradients to flow directly through the addition operation during backpropagation, preventing vanishing gradients. They also create an 'information highway' where early layer information is preserved and refined rather than replaced. Without residuals, training Transformers deeper than ~6 layers becomes nearly impossible.",hint:"Think about gradient flow during backpropagation.",check:l=>{const r=l.toLowerCase();return(r.includes("gradient")||r.includes("vanish"))&&(r.includes("flow")||r.includes("deep")||r.includes("backprop")||r.includes("preserv"))}}]},{id:"practical",icon:"⚙",color:"#92400E",title:"Practical Code",subtitle:"PyTorch/NumPy implementations",resources:[{type:"infographic",title:"Jay Alammar — Visual NumPy",url:"https://jalammar.github.io/visual-numpy/"},{type:"infographic",title:"PyTorch Cheat Sheet",url:"https://pytorch.org/tutorials/beginner/ptcheat.html"},{type:"read",title:"PyTorch 60-Minute Blitz",url:"https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html"},{type:"read",title:"Sentence-Transformers docs",url:"https://www.sbert.net/"},{type:"video",title:"Karpathy — makemore Part 1",url:"https://www.youtube.com/watch?v=PaCmpygFfXo"}],content:[{heading:"NumPy & PyTorch Basics",body:`import numpy as np
v = np.array([1, 2, 3])
w = np.array([4, 5, 6])
v + w                   # [5, 7, 9]
np.dot(v, w)            # 32
np.linalg.norm(v)       # 3.74`},{heading:"Embedding Lookup",body:`import torch.nn as nn
embed = nn.Embedding(50000, 768)
token_ids = torch.tensor([1996, 4937])
vectors = embed(token_ids)  # (2, 768)`},{heading:"Attention from Scratch",body:`import torch, math
import torch.nn.functional as F
Q = x @ W_Q; K = x @ W_K; V = x @ W_V
scores = Q @ K.T / math.sqrt(d_k)
mask = torch.triu(torch.ones(n,n) * float('-inf'), diagonal=1)
weights = F.softmax(scores + mask, dim=-1)
output = weights @ V`},{heading:"Cosine Sim for RAG",body:`from sentence_transformers import SentenceTransformer
model = SentenceTransformer('BAAI/bge-small-en-v1.5')
doc_vecs = model.encode(docs)
query_vec = model.encode([query])[0]
sim = np.dot(query_vec, dv) / (norm(query_vec) * norm(dv))`}],questions:[{q:"In PyTorch, what does the @ operator do between two tensors?",a:"Matrix multiplication (equivalent to torch.matmul). For 2D tensors, A @ B computes the standard matrix product. For 1D tensors, it computes the dot product.",hint:"It's the same as torch.matmul()",check:l=>{const r=l.toLowerCase();return r.includes("matrix")&&(r.includes("mult")||r.includes("product"))}},{q:"nn.Embedding(50000, 768) creates a matrix. What are its dimensions and what does each row represent?",a:"It's a 50,000 × 768 matrix. Each row is a 768-dimensional learned vector representing one token in the vocabulary. Row i contains the embedding for the token with ID i.",hint:"First argument = vocab size, second = embedding dimension",check:l=>{const r=l.toLowerCase();return(r.includes("50000")||r.includes("50,000"))&&r.includes("768")&&(r.includes("token")||r.includes("word")||r.includes("vocab"))}},{q:"Why do we add a causal mask before softmax instead of after?",a:"Adding the mask (-∞) before softmax ensures that after softmax, the masked positions become exactly 0 (since e^(-∞) = 0). If we masked after softmax, the remaining attention weights wouldn't sum to 1, breaking the probability distribution. The mask must be applied before softmax to maintain a valid distribution over allowed tokens.",hint:"What should the attention weights sum to?",check:l=>{const r=l.toLowerCase();return r.includes("sum to 1")||r.includes("probability")||r.includes("distribution")||r.includes("e^")||r.includes("zero")}}]},{id:"advanced",icon:"◈",color:"#581C87",title:"Advanced Topics",subtitle:"Quantization, RoPE, sparse vectors, steering vectors",resources:[{type:"infographic",title:"Lilian Weng — Inference Optimization",url:"https://lilianweng.github.io/posts/2023-01-10-inference-optimization/"},{type:"read",title:"EleutherAI — RoPE Explained",url:"https://blog.eleuther.ai/rotary-embeddings/"},{type:"read",title:"LoRA paper",url:"https://arxiv.org/abs/2106.09685"},{type:"read",title:"Representation Engineering (Zou et al.)",url:"https://arxiv.org/abs/2310.01405"},{type:"video",title:"Karpathy — Reproducing GPT-2",url:"https://www.youtube.com/watch?v=l8pRSuU81PU"}],content:[{heading:"Quantization",body:`7B model: fp32=28GB → fp16=14GB → INT4=**3.5GB** (laptop!)

Group quantization: every 128 weights share a scale factor. ~2-3% quality loss for 4-8× memory reduction.`},{heading:"RoPE",body:"Rotates Q/K vectors by position-dependent angles. Q·K depends on *relative* position difference. Adjusting frequencies extends context from 4K→100K+."},{heading:"Sparse Vectors & Hybrid Search",body:`Dense (embeddings): semantic. Sparse (BM25): keyword.
Hybrid: 0.7×dense + 0.3×sparse. Handles both "error 0x800" and "fix permissions."`},{heading:"Steering Vectors",body:`Find a direction = a concept. honesty_dir = mean(h_honest) - mean(h_deceptive).
Add at inference: h + α×honesty_dir → more honest output. No fine-tuning needed.`}],questions:[{q:"A 13B parameter model in fp16 takes how much memory? What about INT4?",a:"fp16: 26 GB (13B × 2 bytes). INT4: 6.5 GB (13B × 0.5 bytes). Each fp16 parameter uses 2 bytes, each INT4 parameter uses 0.5 bytes (4 bits). INT4 quantization makes the model 4× smaller.",hint:"fp16 = 2 bytes per param, INT4 = 0.5 bytes per param",check:l=>{const r=l.replace(/\s/g,"");return(r.includes("26")||r.includes("26GB"))&&(r.includes("6.5")||r.includes("6.5GB"))}},{q:"Why does RoPE encode relative position rather than absolute position? What's the advantage?",a:"RoPE encodes relative position because when computing attention scores (Q·K), the dot product of two rotated vectors depends on the difference in their rotation angles (i.e., relative position). This means the model learns patterns like 'the token 2 steps back is usually the subject' rather than 'position 47 is special.' The advantage is better generalization and the ability to extend to longer contexts than seen during training.",hint:"Think about what Q·K measures when both are rotated.",check:l=>{const r=l.toLowerCase();return(r.includes("relative")||r.includes("difference"))&&(r.includes("generaliz")||r.includes("extend")||r.includes("longer")||r.includes("pattern"))}},{q:"In hybrid search, why can't you use dense embeddings alone for the query 'error code 0x80070005'?",a:"Dense embeddings capture semantic meaning but are poor at exact string matching. The specific error code '0x80070005' is an arbitrary alphanumeric identifier — its meaning isn't captured in the semantic direction of an embedding vector. Sparse search (like BM25) excels at exact keyword/string matching, which is what you need for specific error codes, product numbers, or technical identifiers.",hint:"What are dense embeddings good at vs. bad at?",check:l=>{const r=l.toLowerCase();return(r.includes("exact")||r.includes("keyword")||r.includes("specific")||r.includes("string"))&&(r.includes("semantic")||r.includes("meaning"))}}]}];function lh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&(K(b)?E("correct"):E("wrong"))},M=()=>E("revealed"),p=()=>{var S;E("idle"),U(""),(S=A.current)==null||S.focus()};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:a.jsx("textarea",{ref:A,value:b,onChange:S=>U(S.target.value),onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{flex:1,minWidth:200,padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans', sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",transition:"border 0.2s"}})}),D==="wrong"&&a.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#DC2626",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{fontSize:14},children:"✗"})," Not quite right. Try again or reveal the answer."]}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:600,transition:"opacity 0.2s",opacity:b.trim()?1:.4},children:"✓ Check Answer"}),a.jsx("button",{onClick:M,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal Answer"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#aaa",cursor:"pointer",userSelect:"none"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{fontSize:16},children:"✓"})," Correct!"]}),a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{fontSize:14},children:"📖"})," Answer"]}),a.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888"},children:"Try it myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function nd({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=jr.reduce((d,g)=>d+g.content.length,0),P=Math.round(b.size/A*100),M=d=>q(K===d?null:d),p=(d,g)=>{g.stopPropagation();const N=new Set(b);N.has(d)?N.delete(d):N.add(d),U(N)},S=d=>D[d]||"learn",G=d=>d.split(`
`).map((g,N)=>{const v=g,z=v.startsWith("import ")||v.startsWith("from ")||v.startsWith("v =")||v.startsWith("w =")||v.startsWith("embed")||v.startsWith("token")||v.startsWith("vectors")||v.startsWith("x =")||v.startsWith("Q =")||v.startsWith("K =")||v.startsWith("V =")||v.startsWith("scores")||v.startsWith("mask =")||v.startsWith("weights")||v.startsWith("output")||v.startsWith("model =")||v.startsWith("doc_v")||v.startsWith("query")||v.startsWith("sim")||v.startsWith("for ")||v.startsWith("    ")||v.startsWith("d_")||v.startsWith("np.")||v.startsWith("v +")||v.startsWith("torch")||v.startsWith("# ")||v.startsWith("W_")||v.startsWith("docs "),C=v.startsWith("import ")||v.startsWith("from ")||v.startsWith("d_")||v.startsWith("# ");if(z)return a.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:C?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:C?"6px 6px 0 0":0,marginTop:C?10:0},children:v},N);if(v==="")return a.jsx("div",{style:{height:8}},N);const L=v.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:L.map((T,F)=>F%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},F):a.jsx("span",{children:T},F))},N)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
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
        textarea:focus { border-color: #4338CA !important; }
      `}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),a.jsx("h1",{style:{fontSize:"clamp(30px, 5vw, 44px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Vectors for LLMs"}),a.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:24},children:["Learn, practice, go deeper. ",jr.length," sections · ",A," concepts · ",jr.reduce((d,g)=>{var N;return d+(((N=g.questions)==null?void 0:N.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pfill",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #4338CA, #581C87)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]}),a.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Qc).map(([d,g])=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#777"},children:[a.jsxs("span",{className:"type-badge",style:{background:g.bg,color:g.color},children:[g.emoji," ",g.label]}),d==="infographic"&&"— Primary",d==="read"&&"— Secondary",d==="video"&&"— Supplement"]},d))})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:jr.map(d=>{var L;const g=r===d.id,v=d.content.map((T,F)=>`${d.id}-${F}`).filter(T=>b.has(T)).length,z=S(d.id),C=((L=d.questions)==null?void 0:L.length)||0;return a.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(g?null:d.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:d.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono', monospace"},children:d.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15.5,fontWeight:600},children:d.title}),a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:2},children:d.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[v,"/",d.content.length]}),a.jsx("span",{className:"arr",style:{transform:g?"rotate(90deg)":"rotate(0)"},children:"›"})]}),g&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tab-btn ${z==="learn"?"active":""}`,onClick:()=>E(T=>({...T,[d.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tab-btn ${z==="practice"?"active":""}`,onClick:()=>E(T=>({...T,[d.id]:"practice"})),children:["✏️ Practice (",C,")"]}),a.jsxs("button",{className:`tab-btn ${z==="deeper"?"active":""}`,onClick:()=>E(T=>({...T,[d.id]:"deeper"})),children:["🔗 Go Deeper (",d.resources.length,")"]})]}),z==="learn"&&a.jsx("div",{children:d.content.map((T,F)=>{const V=`${d.id}-${F}`,re=K===V,ye=b.has(V);return a.jsxs("div",{style:{borderTop:F>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"block-row",onClick:()=>M(V),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`chk ${ye?"done":""}`,onClick:kt=>p(V,kt),children:ye&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:ye?"#aaa":"#2a2a2a",textDecoration:ye?"line-through":"none",flex:1},children:T.heading}),a.jsx("span",{className:"arr",style:{transform:re?"rotate(90deg)":"rotate(0)"},children:"›"})]}),re&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${d.color}20`,marginLeft:22},children:G(T.body)})]},F)})}),z==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Test your understanding. Type your answer and check, or reveal if you're stuck. Hints available for each question."}),(d.questions||[]).map((T,F)=>a.jsx(lh,{q:T.q,a:T.a,hint:T.hint,check:T.check,color:d.color},`${d.id}-q-${F}`))]}),z==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:d.resources.map((T,F)=>{const V=Qc[T.type];return a.jsxs("a",{href:T.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:V.bg+"55"},children:[a.jsxs("span",{className:"type-badge",style:{background:V.bg,color:V.color},children:[V.emoji," ",V.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:T.title})]},F)})})]})]})]},d.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Three tabs per section: Learn (content) · Practice (questions) · Go Deeper (resources)"})]})}const $c=[{id:1,title:"Mathematical Foundations",timeline:"Weeks 1–3",color:"#E8483F",icon:"∑",milestone:"Can derive backpropagation by hand & implement gradient descent from scratch",topics:[{name:"Foundations / Linear Algebra",details:"Vectors, matrices, eigenvalues, SVD, tensor operations — the language of neural nets",embedVectorsInfographic:!0,resources:[{type:"infographic",title:"3Blue1Brown — Essence of Linear Algebra (visual series)",url:"https://www.3blue1brown.com/topics/linear-algebra"},{type:"infographic",title:"Seeing Theory — visual probability/stats",url:"https://seeing-theory.brown.edu/"},{type:"read",title:"Mathematics for Machine Learning (free textbook, Ch 2–4)",url:"https://mml-book.github.io/"},{type:"video",title:"Gilbert Strang MIT 18.06 (gold standard)",url:"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"}]},{name:"Calculus & Optimization",details:"Partial derivatives, chain rule, gradient descent, loss landscapes, convexity",resources:[{type:"infographic",title:"3Blue1Brown — Essence of Calculus (visual series)",url:"https://www.3blue1brown.com/topics/calculus"},{type:"infographic",title:"Distill.pub — Momentum visualization",url:"https://distill.pub/2017/momentum/"},{type:"read",title:"Calculus Made Easy — Silvanus Thompson (free PDF)",url:"https://calculusmadeeasy.org/"}]},{name:"Probability & Statistics",details:"Bayes' theorem, distributions, MLE, information theory (entropy, KL divergence)",resources:[{type:"infographic",title:"Visual Information Theory — Chris Olah",url:"https://colah.github.io/posts/2015-09-Visual-Information/"},{type:"read",title:"StatQuest with Josh Starmer (blog + visual guides)",url:"https://statquest.org/"},{type:"video",title:"StatQuest YouTube Playlist",url:"https://www.youtube.com/c/joshstarmer"}]}]},{id:2,title:"Deep Learning Core",timeline:"Weeks 4–7",color:"#D97706",icon:"⚡",milestone:"Build & train a CNN and RNN from scratch in PyTorch, understand every gradient flow",topics:[{name:"Neural Network Fundamentals",details:"Perceptrons → MLPs → backprop → activation functions → loss functions → regularization",resources:[{type:"infographic",title:"NN Playground — TensorFlow interactive viz",url:"https://playground.tensorflow.org/"},{type:"infographic",title:"Distill.pub — Neural Networks intro articles",url:"https://distill.pub/"},{type:"read",title:"Andrej Karpathy — 'Yes you should understand backprop'",url:"https://karpathy.medium.com/yes-you-should-understand-backprop-e2f06eab496b"},{type:"video",title:"Karpathy — Building micrograd (best intro ever)",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"}]},{name:"CNNs, RNNs & Sequence Models",details:"Convolutions, pooling, LSTMs, GRUs — understanding sequential vs spatial data",resources:[{type:"infographic",title:"CNN Explainer — interactive visual tool",url:"https://poloclub.github.io/cnn-explainer/"},{type:"infographic",title:"Colah's Blog — Understanding LSTMs",url:"https://colah.github.io/posts/2015-08-Understanding-LSTMs/"},{type:"read",title:"Dive into Deep Learning — interactive textbook (Ch 7–10)",url:"https://d2l.ai/"}]},{name:"PyTorch Mastery",details:"Tensors, autograd, nn.Module, DataLoaders, training loops, GPU acceleration",resources:[{type:"infographic",title:"PyTorch Cheat Sheet (official)",url:"https://pytorch.org/tutorials/beginner/ptcheat.html"},{type:"read",title:"PyTorch Official Tutorials — 60min blitz",url:"https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html"},{type:"video",title:"Karpathy — Building makemore series",url:"https://www.youtube.com/watch?v=PaCmpygFfXo"}]}]},{id:3,title:"Transformer Architecture Deep Dive",timeline:"Weeks 8–11",color:"#059669",icon:"◈",milestone:"Implement a Transformer from scratch, understand every component & why it works",topics:[{name:"Attention Mechanism",details:"Self-attention, multi-head attention, Q/K/V intuition, scaled dot-product, causal masking",resources:[{type:"infographic",title:"Jay Alammar — The Illustrated Transformer",url:"https://jalammar.github.io/illustrated-transformer/"},{type:"infographic",title:"Lilian Weng — Attention? Attention! (with diagrams)",url:"https://lilianweng.github.io/posts/2018-06-24-attention/"},{type:"read",title:"'Attention Is All You Need' — original paper",url:"https://arxiv.org/abs/1706.03762"},{type:"video",title:"Karpathy — Let's build GPT from scratch",url:"https://www.youtube.com/watch?v=kCc8FmEb1nY"}]},{name:"Positional Encoding & Architecture Variants",details:"Sinusoidal vs RoPE vs ALiBi, encoder-only vs decoder-only vs encoder-decoder, MoE",resources:[{type:"infographic",title:"Jay Alammar — Illustrated GPT-2",url:"https://jalammar.github.io/illustrated-gpt2/"},{type:"infographic",title:"Jay Alammar — Illustrated BERT",url:"https://jalammar.github.io/illustrated-bert/"},{type:"read",title:"Lilian Weng — Large Transformer Model Lessons",url:"https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/"}]},{name:"Tokenization",details:"BPE, WordPiece, SentencePiece, vocabulary size tradeoffs, tokenizer training",resources:[{type:"infographic",title:"HuggingFace Tokenizer Visualizer",url:"https://huggingface.co/docs/tokenizers"},{type:"read",title:"Karpathy — Let's build the GPT Tokenizer",url:"https://github.com/karpathy/minbpe"},{type:"video",title:"Karpathy — Tokenizer video walkthrough",url:"https://www.youtube.com/watch?v=zduSFxRajkE"}]}]},{id:4,title:"Pre-Training LLMs",timeline:"Weeks 12–16",color:"#7C3AED",icon:"⬡",milestone:"Pre-train a small GPT on custom data, understand scaling laws & data pipeline engineering",topics:[{name:"Data Pipeline & Curation",details:"Web scraping (Common Crawl), deduplication, filtering, data quality heuristics, data mixing ratios",resources:[{type:"infographic",title:"RedPajama / Dolma data pipeline diagrams",url:"https://huggingface.co/datasets/togethercomputer/RedPajama-Data-1T"},{type:"read",title:"Llama 2 paper — data section",url:"https://arxiv.org/abs/2307.09288"},{type:"read",title:"The RefinedWeb Dataset paper",url:"https://arxiv.org/abs/2306.01116"}]},{name:"Training Dynamics & Hyperparameters",details:"Learning rate schedules (cosine, warmup), batch size scaling, weight decay, gradient clipping, loss curves",resources:[{type:"infographic",title:"Weights & Biases — LR schedule visualizations",url:"https://wandb.ai/"},{type:"read",title:"Chinchilla paper — Training Compute-Optimal LLMs",url:"https://arxiv.org/abs/2203.15556"},{type:"read",title:"GPT-3 paper — training details",url:"https://arxiv.org/abs/2005.14165"},{type:"video",title:"Karpathy — Reproducing GPT-2 (124M)",url:"https://www.youtube.com/watch?v=l8pRSuU81PU"}]},{name:"Distributed Training & Scaling",details:"Data parallelism, tensor parallelism, pipeline parallelism, FSDP, DeepSpeed, mixed precision (fp16/bf16)",resources:[{type:"infographic",title:"Lilian Weng — How to Train Really Large Models",url:"https://lilianweng.github.io/posts/2021-09-25-train-large/"},{type:"read",title:"DeepSpeed docs & ZeRO paper",url:"https://www.deepspeed.ai/"},{type:"read",title:"Megatron-LM paper (NVIDIA)",url:"https://arxiv.org/abs/1909.08053"}]},{name:"Scaling Laws",details:"Kaplan scaling laws, Chinchilla-optimal, compute budgets, emergent abilities, loss prediction",resources:[{type:"infographic",title:"AI Explained — Scaling Laws visual breakdown",url:"https://www.youtube.com/@aiexplained-official"},{type:"read",title:"Scaling Laws for Neural Language Models (Kaplan et al.)",url:"https://arxiv.org/abs/2001.08361"},{type:"read",title:"Chinchilla Paper",url:"https://arxiv.org/abs/2203.15556"}]}]},{id:5,title:"Post-Training & Alignment",timeline:"Weeks 17–21",color:"#2563EB",icon:"◎",milestone:"Fine-tune a model with SFT + RLHF/DPO, evaluate alignment quality with benchmarks",topics:[{name:"Supervised Fine-Tuning (SFT)",details:"Instruction tuning, chat formatting, data quality > quantity, LoRA & QLoRA for efficient FT",resources:[{type:"infographic",title:"Sebastian Raschka — LoRA/QLoRA visual explainer",url:"https://magazine.sebastianraschka.com/"},{type:"read",title:"LoRA paper — Low-Rank Adaptation",url:"https://arxiv.org/abs/2106.09685"},{type:"read",title:"Alpaca / Vicuna papers — instruction tuning lessons",url:"https://crfm.stanford.edu/2023/03/13/alpaca.html"},{type:"video",title:"HuggingFace — Fine-tuning LLMs course",url:"https://huggingface.co/learn"}]},{name:"RLHF & Preference Optimization",details:"Reward modeling, PPO, DPO (Direct Preference Optimization), RLAIF, KL penalty, preference data collection",resources:[{type:"infographic",title:"Chip Huyen — RLHF visual pipeline",url:"https://huyenchip.com/2023/05/02/rlhf.html"},{type:"infographic",title:"HuggingFace — RLHF illustrated blog",url:"https://huggingface.co/blog/rlhf"},{type:"read",title:"InstructGPT paper (OpenAI)",url:"https://arxiv.org/abs/2203.02155"},{type:"read",title:"DPO paper — Direct Preference Optimization",url:"https://arxiv.org/abs/2305.18290"}]},{name:"Evaluation & Benchmarks",details:"Perplexity, MMLU, HumanEval, TruthfulQA, MT-Bench, contamination, vibes-based eval",resources:[{type:"infographic",title:"OpenLLM Leaderboard — HuggingFace",url:"https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard"},{type:"read",title:"Lilian Weng — LLM Evaluation survey",url:"https://lilianweng.github.io/"},{type:"read",title:"HELM benchmark paper",url:"https://crfm.stanford.edu/helm/"}]}]},{id:6,title:"Inference & Serving",timeline:"Weeks 22–25",color:"#DC2626",icon:"⟐",milestone:"Deploy a model with KV-cache, quantization, speculative decoding — measure tokens/sec",topics:[{name:"Decoding Strategies",details:"Greedy, beam search, top-k, top-p (nucleus), temperature, repetition penalty, logit processors",resources:[{type:"infographic",title:"HuggingFace — How to Generate (interactive demos)",url:"https://huggingface.co/blog/how-to-generate"},{type:"read",title:"Holtzman et al. — Curious Case of Neural Text Degeneration",url:"https://arxiv.org/abs/1904.09751"}]},{name:"KV Cache, Quantization & Optimization",details:"KV-cache mechanics, PagedAttention (vLLM), GPTQ, AWQ, GGUF, INT4/INT8, flash attention",resources:[{type:"infographic",title:"Lilian Weng — Large Transformer Inference Optimization",url:"https://lilianweng.github.io/posts/2023-01-10-inference-optimization/"},{type:"read",title:"vLLM paper — PagedAttention",url:"https://arxiv.org/abs/2309.06180"},{type:"read",title:"FlashAttention paper",url:"https://arxiv.org/abs/2205.14135"},{type:"video",title:"Fireship / Yannic Kilcher — Quantization explainers",url:"https://www.youtube.com/@YannicKilcher"}]},{name:"Speculative Decoding & Serving",details:"Draft model acceleration, batching strategies, TensorRT-LLM, Triton, serving at scale",resources:[{type:"read",title:"Speculative Decoding paper (Leviathan et al.)",url:"https://arxiv.org/abs/2211.17192"},{type:"read",title:"TensorRT-LLM docs (NVIDIA)",url:"https://github.com/NVIDIA/TensorRT-LLM"}]}]},{id:7,title:"RAG & Retrieval Systems",timeline:"Weeks 26–29",color:"#0891B2",icon:"⬢",milestone:"Build a production RAG pipeline with hybrid search, reranking, and evaluation metrics",topics:[{name:"Embeddings & Vector Search",details:"Sentence embeddings, cosine similarity, FAISS, Pinecone, Chroma, HNSW, PQ compression",resources:[{type:"infographic",title:"Jay Alammar — Illustrated Word2Vec",url:"https://jalammar.github.io/illustrated-word2vec/"},{type:"infographic",title:"Pinecone — What are Vector Databases (visual guide)",url:"https://www.pinecone.io/learn/vector-database/"},{type:"read",title:"MTEB Leaderboard — embedding model comparison",url:"https://huggingface.co/spaces/mteb/leaderboard"}]},{name:"RAG Architecture & Patterns",details:"Naive RAG → Advanced RAG → Agentic RAG, chunking strategies, hybrid search (BM25 + dense), reranking",resources:[{type:"infographic",title:"LangChain — RAG architecture diagrams",url:"https://python.langchain.com/docs/tutorials/rag/"},{type:"read",title:"Lilian Weng — RAG survey post",url:"https://lilianweng.github.io/"},{type:"read",title:"RAGAS — RAG evaluation framework",url:"https://docs.ragas.io/"},{type:"video",title:"Jerry Liu — Building Production RAG (LlamaIndex)",url:"https://www.youtube.com/@LlamaIndex"}]}]},{id:8,title:"Beyond Text — Multimodal & Video Models",timeline:"Weeks 30–34",color:"#9333EA",icon:"◆",milestone:"Understand diffusion vs autoregressive for images/video, fine-tune a small multimodal model",topics:[{name:"Text vs Image vs Video Generation — Key Differences",details:"Autoregressive (next token) for text vs Diffusion (denoising) for images/video. Different loss functions, architectures, and training data.",resources:[{type:"infographic",title:"Lilian Weng — What are Diffusion Models?",url:"https://lilianweng.github.io/posts/2021-07-11-diffusion-models/"},{type:"infographic",title:"Jay Alammar — Illustrated Stable Diffusion",url:"https://jalammar.github.io/illustrated-stable-diffusion/"},{type:"read",title:"DDPM paper — Denoising Diffusion Probabilistic Models",url:"https://arxiv.org/abs/2006.11239"},{type:"video",title:"Yannic Kilcher — Diffusion Models explained",url:"https://www.youtube.com/@YannicKilcher"}]},{name:"Vision Transformers & Multimodal Models",details:"ViT, CLIP, LLaVA, Flamingo — bridging vision and language with shared embeddings",resources:[{type:"infographic",title:"Jay Alammar — Illustrated CLIP / DALL-E",url:"https://jalammar.github.io/"},{type:"read",title:"CLIP paper (OpenAI)",url:"https://arxiv.org/abs/2103.00020"},{type:"read",title:"LLaVA paper",url:"https://arxiv.org/abs/2304.08485"}]},{name:"Video Generation Models",details:"Temporal consistency, Sora/Runway/Kling architecture intuition, DiT (Diffusion Transformer), 3D VAE",resources:[{type:"infographic",title:"OpenAI Sora Technical Report (with diagrams)",url:"https://openai.com/index/video-generation-models-as-world-simulators/"},{type:"read",title:"DiT paper — Scalable Diffusion with Transformers",url:"https://arxiv.org/abs/2212.09748"},{type:"read",title:"Lilian Weng — Video Diffusion Models survey",url:"https://lilianweng.github.io/"}]}]},{id:9,title:"Capstone — Build World-Class",timeline:"Weeks 35–40",color:"#111827",icon:"★",milestone:"Ship an end-to-end system: custom pre-trained model → aligned → deployed → RAG-augmented",topics:[{name:"End-to-End Project",details:"Pre-train a 100M–1B param model, SFT + DPO it, serve with vLLM, add RAG, evaluate everything",resources:[{type:"read",title:"LitGPT — full training framework (Lightning AI)",url:"https://github.com/Lightning-AI/litgpt"},{type:"read",title:"NanoGPT — Karpathy's minimal GPT training repo",url:"https://github.com/karpathy/nanoGPT"}]},{name:"Stay Current — Research Frontier",details:"Read papers weekly, follow key researchers, understand what's next (MoE, SSMs, Mamba, long context, agents)",resources:[{type:"read",title:"Papers With Code — trending ML papers",url:"https://paperswithcode.com/"},{type:"read",title:"Sebastian Raschka's newsletter",url:"https://magazine.sebastianraschka.com/"},{type:"read",title:"The Gradient — ML research publication",url:"https://thegradient.pub/"}]}]}],Xc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#D97706",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}};function ch(){const[l,r]=B.useState(null),[f,K]=B.useState(null),[q,b]=B.useState(new Set),U=P=>{K(f===P?null:P)},D=(P,M)=>{M.stopPropagation();const p=new Set(q);p.has(P)?p.delete(P):p.add(P),b(p)},E=$c.reduce((P,M)=>P+M.topics.length,0),A=Math.round(q.size/E*100);return a.jsxs("div",{style:{fontFamily:"'Instrument Serif', 'Georgia', serif",background:"#FAFAF8",minHeight:"100vh",color:"#1a1a1a",padding:"0"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .phase-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .phase-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        
        .topic-row {
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .topic-row:hover {
          background: rgba(0,0,0,0.02);
        }
        
        .resource-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .resource-link:hover {
          border-color: rgba(0,0,0,0.1);
          transform: translateX(4px);
        }
        
        .check-btn {
          width: 22px; height: 22px;
          border-radius: 6px;
          border: 2px solid #ccc;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          background: white;
        }
        .check-btn.done {
          background: #059669;
          border-color: #059669;
          color: white;
        }
        
        .progress-fill {
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .type-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        
        .milestone-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          padding: 6px 12px;
          border-radius: 6px;
          background: rgba(0,0,0,0.04);
          border-left: 3px solid;
          color: #444;
        }
        
        .expand-arrow {
          transition: transform 0.25s ease;
          font-size: 18px;
          color: #999;
        }
      `}),a.jsxs("div",{style:{padding:"48px 32px 32px",maxWidth:860,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,fontWeight:600,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:12},children:"LEARNING ROADMAP"}),a.jsx("h1",{style:{fontSize:"clamp(32px, 5vw, 48px)",fontWeight:400,lineHeight:1.1,marginBottom:8,fontStyle:"italic"},children:"Machine Learning & LLMs"}),a.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:28},children:["From mathematical foundations to building world-class models. 9 phases · ~40 weeks · ",E," topics · prioritizing infographics → reading → video."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,fontFamily:"'DM Sans', sans-serif"},children:[a.jsx("div",{style:{flex:1,height:8,background:"#E5E5E3",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"progress-fill",style:{width:`${A}%`,height:"100%",background:"linear-gradient(90deg, #059669, #2563EB, #9333EA)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:13,fontWeight:600,color:"#666",minWidth:80},children:[q.size,"/",E," topics"]})]})]}),a.jsx("div",{style:{maxWidth:860,margin:"0 auto 24px",padding:"0 32px",display:"flex",gap:16,flexWrap:"wrap"},children:Object.entries(Xc).map(([P,M])=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#666"},children:[a.jsxs("span",{className:"type-badge",style:{background:M.bg,color:M.color},children:[M.emoji," ",M.label]}),P==="infographic"&&"— Primary",P==="read"&&"— Secondary",P==="video"&&"— Supplemental"]},P))}),a.jsx("div",{style:{maxWidth:860,margin:"0 auto",padding:"0 32px 64px"},children:$c.map(P=>{const M=l===P.id,S=P.topics.map((G,d)=>`${P.id}-${d}`).filter(G=>q.has(G)).length;return a.jsxs("div",{className:"phase-card",style:{background:"white",borderRadius:12,marginBottom:12,border:"1px solid #E5E5E3",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>r(M?null:P.id),style:{padding:"20px 24px",display:"flex",alignItems:"center",gap:16},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:10,background:P.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:20,flexShrink:0},children:P.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,flexWrap:"wrap"},children:[a.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:1.5,color:P.color,textTransform:"uppercase"},children:["PHASE ",P.id]}),a.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11,color:"#999"},children:P.timeline})]}),a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:17,fontWeight:600,color:"#1a1a1a",marginTop:2},children:P.title})]}),a.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#999",marginRight:8},children:[S,"/",P.topics.length]}),a.jsx("span",{className:"expand-arrow",style:{transform:M?"rotate(90deg)":"rotate(0deg)"},children:"›"})]}),M&&a.jsxs("div",{style:{borderTop:"1px solid #E5E5E3"},children:[a.jsx("div",{style:{padding:"16px 24px 8px"},children:a.jsxs("div",{className:"milestone-tag",style:{borderLeftColor:P.color},children:[a.jsx("strong",{children:"Milestone:"})," ",P.milestone]})}),P.topics.map((G,d)=>{const g=`${P.id}-${d}`,N=f===g,v=q.has(g);return a.jsxs("div",{style:{borderTop:d>0?"1px solid #f0f0ee":"none"},children:[a.jsxs("div",{className:"topic-row",onClick:()=>U(g),style:{padding:"14px 24px",display:"flex",alignItems:"flex-start",gap:12},children:[a.jsx("div",{className:`check-btn ${v?"done":""}`,onClick:z=>D(g,z),style:{marginTop:2},children:v&&"✓"}),a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,fontWeight:600,color:v?"#999":"#1a1a1a",textDecoration:v?"line-through":"none"},children:G.name}),a.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#888",marginTop:3,lineHeight:1.5},children:G.details})]}),a.jsx("span",{className:"expand-arrow",style:{transform:N?"rotate(90deg)":"rotate(0deg)",marginTop:2},children:"›"})]}),N&&a.jsxs("div",{style:{padding:"4px 24px 16px 58px",display:"flex",flexDirection:"column",gap:4},children:[G.resources.map((z,C)=>{const L=Xc[z.type];return a.jsxs("a",{href:z.url,target:"_blank",rel:"noopener noreferrer",className:"resource-link",style:{background:L.bg+"66"},children:[a.jsxs("span",{className:"type-badge",style:{background:L.bg,color:L.color},children:[L.emoji," ",L.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:z.title})]},C)}),G.embedVectorsInfographic&&a.jsx("div",{style:{marginTop:20,marginLeft:-58,marginRight:-24,borderTop:"1px solid #E5E5E3",borderRadius:0,overflow:"hidden",background:"#F5F3EE"},children:a.jsx(nd,{embedded:!0})})]})]},d)})]})]},P.id)})}),a.jsx("div",{style:{maxWidth:860,margin:"0 auto",padding:"0 32px 48px",fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#999",lineHeight:1.7,textAlign:"center"},children:"Tap a phase to expand · check off topics as you complete them · resources ordered by your preference: infographics → reading → video"})]})}const Yc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Wr=[{id:"partial",icon:"∂",color:"#9333EA",title:"Partial Derivatives",subtitle:"How changing one parameter affects the output while holding others fixed",resources:[{type:"infographic",title:"3Blue1Brown — Multivariable calculus (visual series)",url:"https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives"},{type:"infographic",title:"Distill.pub — interactive derivative visualizations",url:"https://distill.pub/"},{type:"read",title:"Mathematics for Machine Learning — Ch 5: Calculus",url:"https://mml-book.github.io/book/mml-book.pdf"},{type:"read",title:"Karpathy — 'Yes you should understand backprop'",url:"https://karpathy.medium.com/yes-you-should-understand-backprop-e2f06eab496b"},{type:"read",title:"Khan Academy — Partial derivatives intro",url:"https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/introduction-to-partial-derivatives"},{type:"video",title:"3Blue1Brown — Essence of Calculus (full series)",url:"https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr"},{type:"video",title:"Khan Academy — Partial derivatives",url:"https://www.youtube.com/watch?v=AXqhWeUEtQU"}],content:[{heading:"What Is a Derivative?",body:`A derivative measures **how fast a function's output changes** when you nudge its input.

If f(x) = x², then f'(x) = 2x.
At x = 3: f'(3) = 6 → if you increase x by a tiny amount ε, f increases by ~6ε.

**Geometrically:** the derivative is the **slope of the tangent line** at that point.

**For ML:** the derivative tells us: "if I slightly increase this weight, how much does the loss change?" That's the signal we need to improve the model.`},{heading:"Partial Derivatives — One Variable at a Time",body:`When a function has multiple inputs, a **partial derivative** measures the rate of change with respect to **one** input while holding all others **constant**.

f(x, y) = x²y + 3y

**∂f/∂x** = 2xy   (treat y as a constant, differentiate w.r.t. x)
**∂f/∂y** = x² + 3  (treat x as a constant, differentiate w.r.t. y)

At (x=2, y=5):
∂f/∂x = 2(2)(5) = **20** → nudging x by ε changes f by ~20ε
∂f/∂y = 4 + 3 = **7** → nudging y by ε changes f by ~7ε

**In neural networks:** the loss function depends on millions of parameters (weights). The partial derivative ∂Loss/∂wᵢ tells us how sensitive the loss is to *each individual weight*.`},{heading:"The Gradient — All Partials in One Vector",body:`The **gradient** collects all partial derivatives into a single vector:

∇f(x, y) = [∂f/∂x, ∂f/∂y]

For f(x, y) = x²y + 3y at (2, 5):
∇f = [20, 7]

**Key property:** The gradient points in the direction of **steepest ascent**. To minimize a function (like a loss), you go in the **opposite** direction: -∇f.

For a neural network with 1 billion parameters:
∇Loss = [∂L/∂w₁, ∂L/∂w₂, ..., ∂L/∂w₁₀₀₀₀₀₀₀₀₀]

This is a 1-billion-dimensional vector. Computing it efficiently is what backpropagation does.`},{heading:"Common Derivatives You'll See Everywhere",body:`**Power rule:** d/dx(xⁿ) = nxⁿ⁻¹
**Exponential:** d/dx(eˣ) = eˣ  (the only function that is its own derivative!)
**Log:** d/dx(ln x) = 1/x
**Sigmoid:** σ'(x) = σ(x)(1 - σ(x))  ← max value is 0.25 at x=0
**ReLU:** d/dx(max(0,x)) = 0 if x<0, 1 if x>0  (undefined at x=0, usually set to 0)
**Softmax:** ∂softmax(zᵢ)/∂zⱼ = softmax(zᵢ)(δᵢⱼ - softmax(zⱼ))

**MSE loss:** L = (ŷ - y)² → ∂L/∂ŷ = 2(ŷ - y)
**Cross-entropy:** L = -y·log(ŷ) → ∂L/∂ŷ = -y/ŷ

These appear in every backpropagation computation.`}],questions:[{q:"f(x, y) = 3x²y - 2y³ + 5x. What is ∂f/∂x?",a:"6xy + 5. Treat y as a constant: d/dx(3x²y) = 6xy, d/dx(-2y³) = 0 (y is constant), d/dx(5x) = 5. Sum: 6xy + 5.",hint:"Treat y as a constant and differentiate each term with respect to x.",check:l=>{const r=l.replace(/\s/g,"");return r.includes("6xy+5")||r.includes("6xy+5")}},{q:"f(x, y) = 3x²y - 2y³ + 5x. What is ∂f/∂y?",a:"3x² - 6y². Treat x as a constant: d/dy(3x²y) = 3x², d/dy(-2y³) = -6y², d/dy(5x) = 0.",hint:"Treat x as a constant and differentiate each term with respect to y.",check:l=>{const r=l.replace(/\s/g,"");return r.includes("3x²-6y²")||r.includes("3x^2-6y^2")||r.includes("3x")&&r.includes("6y")}},{q:"What is the derivative of σ(x) = 1/(1+e⁻ˣ) (sigmoid)? What is its maximum value?",a:"σ'(x) = σ(x)(1 - σ(x)). The maximum is 0.25, occurring at x = 0 where σ(0) = 0.5. This matters for backpropagation: every layer using sigmoid multiplies the gradient by at most 0.25, causing gradients to shrink — this is the vanishing gradient problem.",hint:"The sigmoid derivative has a nice form: σ(x) times (1 - σ(x)).",check:l=>{const r=l.toLowerCase();return r.includes("0.25")&&(r.includes("σ(x)")||r.includes("sigma")||r.includes("1-"))}},{q:"Why do we use partial derivatives instead of regular derivatives in neural networks?",a:"A neural network's loss depends on millions of parameters simultaneously. A partial derivative lets us isolate the effect of one single weight on the loss, while treating all other weights as constants. This tells us exactly how to adjust each weight independently. Regular derivatives can't handle multi-variable functions this way.",hint:"Think about what happens when a function has millions of inputs.",check:l=>{const r=l.toLowerCase();return(r.includes("one")||r.includes("single")||r.includes("isolat"))&&(r.includes("constant")||r.includes("fixed")||r.includes("hold"))}}]},{id:"chain",icon:"⛓",color:"#C2410C",title:"The Chain Rule",subtitle:"How to differentiate composite functions — the backbone of backpropagation",resources:[{type:"infographic",title:"TensorTonic — Chain Rule: Backbone of Backprop (interactive)",url:"https://www.tensortonic.com/ml-math/calculus/chain-rule"},{type:"infographic",title:"ML Cheatsheet — Backpropagation (visual walkthrough)",url:"https://ml-cheatsheet.readthedocs.io/en/latest/backpropagation.html"},{type:"read",title:"Colah's Blog — Calculus on Computational Graphs (backprop)",url:"https://colah.github.io/posts/2015-08-Backprop/"},{type:"read",title:"Jeremy Jordan — Backpropagation (detailed walkthrough)",url:"https://www.jeremyjordan.me/neural-networks-training/"},{type:"read",title:"ML Mastery — Chain Rule for Univariate & Multivariate",url:"https://machinelearningmastery.com/the-chain-rule-of-calculus-for-univariate-and-multivariate-functions/"},{type:"video",title:"3Blue1Brown — Backpropagation calculus (Ch 4)",url:"https://www.3blue1brown.com/lessons/backpropagation-calculus"},{type:"video",title:"Karpathy — Building micrograd (chain rule live-coded)",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"}],content:[{heading:"The Chain Rule — Intuition",body:`If f is a function of g, and g is a function of x, then:

**df/dx = (df/dg) × (dg/dx)**

**Gear analogy:** If gear A turns 2× faster than gear B, and gear B turns 3× faster than gear C, then gear A turns **6×** faster than gear C. You *multiply* the rates.

**Example:** f(x) = (3x + 1)²

Let g(x) = 3x + 1, then f(g) = g².
df/dg = 2g,  dg/dx = 3
df/dx = 2g × 3 = 2(3x+1) × 3 = **6(3x+1)**

Verify: expanding f(x) = 9x² + 6x + 1, so f'(x) = 18x + 6 = 6(3x+1) ✓`},{heading:"Multivariate Chain Rule",body:`When intermediate variables have multiple paths, **sum over all paths**:

If z depends on x through both u and v:
**dz/dx = (∂z/∂u)(du/dx) + (∂z/∂v)(dv/dx)**

**Neural network example:**
A weight w affects the loss through multiple neurons in the next layer. The gradient sums contributions from all paths.

**Computation graph view:**
Forward: x → multiply by w → add bias → activation → loss
Backward: multiply local gradients along each edge, sum at forks.

This "multiply along paths, sum at forks" is exactly what backpropagation computes.`},{heading:"Chain Rule in a Neural Network",body:`For a single neuron: z = wx + b, a = σ(z), L = (a - y)²

To find ∂L/∂w:
**∂L/∂w = (∂L/∂a) × (∂a/∂z) × (∂z/∂w)**

∂L/∂a = 2(a - y)        ← how loss changes with output
∂a/∂z = σ(z)(1 - σ(z))  ← how activation changes with pre-activation
∂z/∂w = x                ← how pre-activation changes with weight

**∂L/∂w = 2(a - y) × σ(z)(1 - σ(z)) × x**

For a deep network with 96 layers, the chain extends through all layers:
∂L/∂w₁ = (∂L/∂a₉₆)(∂a₉₆/∂z₉₆)(∂z₉₆/∂a₉₅)...(∂a₁/∂z₁)(∂z₁/∂w₁)

That's a product of ~192 terms. Backpropagation computes this efficiently by reusing intermediate results (memoization).`},{heading:"Vanishing & Exploding Gradients",body:`The chain rule multiplies many terms together. If each term is:
• **< 1** (e.g., sigmoid derivative max = 0.25): gradient **vanishes** → early layers stop learning
• **> 1**: gradient **explodes** → training becomes unstable

**After 50 sigmoid layers:** 0.25⁵⁰ ≈ 10⁻³⁰ — effectively zero!

**Solutions that work:**
• **ReLU activation:** derivative is 0 or 1, no multiplicative shrinkage
• **Residual connections:** gradient flows through addition (derivative = 1), bypassing layers
• **Layer normalization:** keeps activations in a healthy range
• **Gradient clipping:** caps gradient magnitude (used in RNNs/LLMs)
• **Careful initialization:** Xavier/He initialization keeps variances stable

These aren't arbitrary tricks — they're direct fixes for the chain rule's multiplicative nature.`}],questions:[{q:"If f(x) = sin(x²), what is f'(x) using the chain rule?",a:"2x·cos(x²). Let g(x) = x², f(g) = sin(g). f'(g) = cos(g), g'(x) = 2x. By chain rule: f'(x) = cos(x²) × 2x = 2x·cos(x²).",hint:"Let the inner function be g(x) = x². What's the derivative of sin(g)?",check:l=>{const r=l.replace(/\s/g,"");return r.includes("2x")&&r.includes("cos(x")}},{q:"In a network with 10 sigmoid layers, what is the maximum possible gradient magnitude at the first layer? (Sigmoid derivative max = 0.25)",a:"0.25¹⁰ ≈ 0.00000095 (roughly 10⁻⁶). Each sigmoid layer multiplies the gradient by at most 0.25, so after 10 layers the maximum gradient is 0.25^10. This is the vanishing gradient problem — the first layer's weights barely get updated.",hint:"Multiply 0.25 by itself 10 times.",check:l=>{const r=l.toLowerCase();return r.includes("10")&&(r.includes("0.000")||r.includes("10^")||r.includes("10⁻")||r.includes("vanish")||r.includes("very small"))}},{q:"For z = wx + b, a = ReLU(z), L = (a - y)². If x=2, w=0.5, b=0, y=3, compute ∂L/∂w step by step.",a:"Step 1: z = 0.5×2 + 0 = 1. Step 2: a = ReLU(1) = 1. Step 3: L = (1-3)² = 4. Now backward: ∂L/∂a = 2(1-3) = -4. ∂a/∂z = 1 (since z=1 > 0, ReLU derivative = 1). ∂z/∂w = x = 2. Chain rule: ∂L/∂w = -4 × 1 × 2 = -8. The negative sign means increasing w will decrease the loss (which is what we want).",hint:"First compute the forward pass (z, a, L), then multiply the three partial derivatives.",check:l=>l.includes("-8")},{q:"Why do residual connections help with the vanishing gradient problem?",a:"A residual connection computes output = x + F(x). During backpropagation, the gradient of x+F(x) with respect to x is 1 + ∂F/∂x. The '+1' means the gradient always has a direct path (with derivative 1) that bypasses the layers in F(x). Even if ∂F/∂x vanishes, the gradient still flows through the identity shortcut. This creates a 'gradient highway' that prevents gradients from vanishing, no matter how deep the network.",hint:"What is the derivative of x + F(x) with respect to x?",check:l=>{const r=l.toLowerCase();return(r.includes("1")||r.includes("identity"))&&(r.includes("bypass")||r.includes("shortcut")||r.includes("direct")||r.includes("highway")||r.includes("addition"))}}]},{id:"gd",icon:"⤵",color:"#0369A1",title:"Gradient Descent",subtitle:"The optimization algorithm that trains every neural network",resources:[{type:"infographic",title:"TensorFlow Playground — train a net live",url:"https://playground.tensorflow.org/"},{type:"infographic",title:"Descent Visualizers — interactive GD on loss surfaces",url:"https://descent-visualisers.netlify.app/"},{type:"infographic",title:"Distill.pub — Why Momentum Really Works",url:"https://distill.pub/2017/momentum/"},{type:"infographic",title:"TDS — Visual Explanation of GD Methods (interactive)",url:"https://towardsdatascience.com/a-visual-explanation-of-gradient-descent-methods-momentum-adagrad-rmsprop-adam-f898b102325c/"},{type:"read",title:"Sebastian Ruder — Overview of GD Optimization Algorithms",url:"https://www.ruder.io/optimizing-gradient-descent/"},{type:"read",title:"Dive into Deep Learning — Ch 12: Optimization",url:"https://d2l.ai/chapter_optimization/index.html"},{type:"video",title:"3Blue1Brown — Gradient Descent, how NN learn (Ch 2)",url:"https://www.youtube.com/watch?v=IHZwWFHWa-w"},{type:"video",title:"Karpathy — Building micrograd (GD from scratch)",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"}],content:[{heading:"The Core Idea",body:`**Goal:** find parameters θ that minimize Loss(θ).

**Algorithm:**
1. Compute gradient: ∇Loss(θ)
2. Update: **θ_new = θ_old - η × ∇Loss(θ_old)**
3. Repeat until convergence

**η (eta)** is the **learning rate** — the step size.

**Analogy:** You're blindfolded on a hilly landscape. You feel the slope under your feet (gradient) and step downhill (negative gradient). The learning rate is your stride length.

**The minus sign** matters: the gradient points uphill (steepest ascent), so we go in the *opposite* direction to descend.`},{heading:"Learning Rate — The Most Critical Hyperparameter",body:`**Too small (η = 0.0001):** Converges but painfully slow. Might take millions of steps.
**Too large (η = 10):** Overshoots the minimum, bounces around, may diverge entirely.
**Just right:** Converges quickly to a good minimum.

**In practice:**
• Start with η ≈ 1e-3 to 1e-4 for Adam
• Use **learning rate schedules**:
  - **Warmup:** start small, ramp up over first 1-5% of training
  - **Cosine decay:** η(t) = η_max × 0.5(1 + cos(πt/T)) — smoothly decreases to zero
  - **Step decay:** halve η every N epochs
  
• **Warmup + cosine decay** is the standard for LLM pre-training (used by GPT, Llama, etc.)

The learning rate often matters more than the model architecture for training success.`},{heading:"Variants: SGD, Mini-batch, Adam",body:`**Batch GD:** Use ALL training data for each update. Stable but very slow.
**Stochastic GD (SGD):** Use ONE random sample per update. Fast but noisy.
**Mini-batch GD:** Use a small batch (32-4096 samples). Best of both worlds.

**Momentum:** Accumulate velocity from past gradients (like a ball rolling downhill):
v = β×v - η×∇L
θ = θ + v
Helps escape shallow local minima and speeds up convergence.

**Adam** (the default for most ML):
Combines momentum + per-parameter adaptive learning rates.
m = β₁×m + (1-β₁)×∇L    (momentum — first moment)
v = β₂×v + (1-β₂)×(∇L)²  (adaptive — second moment)
θ = θ - η × m̂ / (√v̂ + ε)

**For LLM pre-training:** AdamW (Adam + weight decay) is standard. Typical settings: β₁=0.9, β₂=0.95, ε=1e-8, weight_decay=0.1.`},{heading:"Batch Size and Gradient Accumulation",body:`**Batch size** affects optimization quality:
• **Small batches (32-256):** Noisy gradients → acts as regularization, helps generalization
• **Large batches (2048-4M):** Smoother gradients → faster wall-clock training, may generalize worse

**LLM pre-training** uses massive batches (often 4M+ tokens). Since this doesn't fit in GPU memory:

**Gradient accumulation:** split the batch into micro-batches, accumulate gradients, then update:
for micro_batch in split(batch, micro_batch_size):
    loss = model(micro_batch)
    loss.backward()  # accumulates gradients
optimizer.step()     # single update using accumulated gradient
optimizer.zero_grad()

This is mathematically equivalent to a single large-batch update.

**Gradient clipping** (max_norm=1.0) is used to prevent exploding gradients during training.`}],questions:[{q:"If θ = 5, ∇Loss = 3, and η = 0.1, what is θ after one gradient descent step?",a:"4.7. θ_new = θ_old - η × ∇Loss = 5 - 0.1 × 3 = 5 - 0.3 = 4.7. The parameter moved in the opposite direction of the gradient (downhill).",hint:"θ_new = θ_old - η × gradient",check:l=>l.includes("4.7")},{q:"A model is training and the loss oscillates wildly without decreasing. What is the most likely problem and fix?",a:"The learning rate is too high. The parameter updates are too large, causing the optimizer to overshoot the minimum and bounce around. Fix: reduce the learning rate (e.g., divide by 10). Other options: use learning rate warmup, switch to an adaptive optimizer like Adam, or add gradient clipping.",hint:"Think about what controls the size of each update step.",check:l=>{const r=l.toLowerCase();return r.includes("learning rate")&&(r.includes("too high")||r.includes("too large")||r.includes("reduce")||r.includes("lower"))}},{q:"Why does LLM pre-training use warmup + cosine decay for learning rate?",a:"Warmup (starting with a tiny LR and ramping up) prevents early training instability — the initial random weights produce large, unreliable gradients, so small steps avoid catastrophic updates. Cosine decay (gradually decreasing LR to ~0) allows fine-grained optimization near the end of training when the model is close to a good minimum. Together, they give stable early training + precise final convergence.",hint:"Think about what happens at the start vs. end of training.",check:l=>{const r=l.toLowerCase();return(r.includes("warmup")||r.includes("start")||r.includes("early"))&&(r.includes("decay")||r.includes("end")||r.includes("fine")||r.includes("precise"))}},{q:"What is the key advantage of Adam over vanilla SGD?",a:"Adam maintains per-parameter adaptive learning rates using the first moment (momentum) and second moment (squared gradients). This means each weight gets its own effective learning rate — weights with consistently large gradients get smaller steps, and weights with small or sparse gradients get larger steps. This makes Adam much less sensitive to the initial learning rate choice and generally converges faster than vanilla SGD.",hint:"Think about what 'adaptive' means in 'adaptive learning rate'.",check:l=>{const r=l.toLowerCase();return(r.includes("adaptive")||r.includes("per-parameter")||r.includes("per parameter"))&&(r.includes("learning rate")||r.includes("moment"))}}]},{id:"loss",icon:"⊿",color:"#DC2626",title:"Loss Landscapes",subtitle:"The terrain of the optimization problem — what gradient descent navigates",resources:[{type:"infographic",title:"Descent Visualizers — 3D loss surface explorer",url:"https://descent-visualisers.netlify.app/"},{type:"infographic",title:"losslandscape.com — visualizations of real NN loss surfaces",url:"https://losslandscape.com/"},{type:"read",title:"Li et al. — Visualizing the Loss Landscape of Neural Nets (paper)",url:"https://arxiv.org/abs/1712.09913"},{type:"read",title:"DigitalOcean — Intro to Optimization: Gradient Descent",url:"https://www.digitalocean.com/community/tutorials/intro-to-optimization-in-deep-learning-gradient-descent"},{type:"video",title:"3Blue1Brown — Neural Networks (loss landscape intuition)",url:"https://www.youtube.com/watch?v=aircAruvnKk"},{type:"video",title:"Yannic Kilcher — Loss Landscape paper explained",url:"https://www.youtube.com/@YannicKilcher"}],content:[{heading:"What Is a Loss Landscape?",body:`Imagine plotting the loss function as a surface over the parameter space:
• **x-axis, y-axis:** two weights (in reality, billions of dimensions)
• **z-axis (height):** the loss value

The result is a "landscape" with:
• **Valleys** (low loss — good parameter settings)
• **Peaks** (high loss — bad parameters)
• **Ridges, saddle points, plateaus** (tricky terrain)

Training = navigating this landscape to find the lowest valley.

**Reality check:** real loss landscapes have billions of dimensions. We can only visualize 2D slices, but the same concepts apply.`},{heading:"Local Minima, Global Minima & Saddle Points",body:`**Global minimum:** the absolute lowest point. In theory, the best possible parameters.
**Local minimum:** a low point where all neighbors are higher, but lower valleys exist elsewhere.
**Saddle point:** a minimum in one direction but a maximum in another. The gradient is zero, so vanilla GD can get stuck.

**Key insight for deep learning:** In very high dimensions (millions of params), **true local minima are extremely rare**. Most "flat" points are saddle points — there's almost always a direction that leads further downhill.

**Good news:** Research shows that most local minima in deep networks have loss values close to the global minimum. Finding *any* good local minimum usually produces a model that works well.

**Saddle points** are the real challenge. SGD's noise helps escape them (random perturbation kicks you off the saddle).`},{heading:"Loss Functions You'll Encounter",body:`**Mean Squared Error (MSE):** L = (1/n)Σ(ŷᵢ - yᵢ)²
Used for regression. Creates a smooth, bowl-shaped landscape.

**Cross-Entropy Loss:** L = -(1/n)Σ[yᵢ log(ŷᵢ) + (1-yᵢ)log(1-ŷᵢ)]
Used for classification. Penalizes confident wrong predictions heavily.

**Next-token prediction (LLMs):** L = -(1/T)Σ log P(token_t | tokens_<t)
This is cross-entropy over the vocabulary at each position. The LLM is trained to maximize the probability of the correct next token.

**Perplexity** = exp(L) — the standard metric for language models. Lower = better. Perplexity of 10 means the model is "as confused as if it were choosing from 10 equally likely tokens."`},{heading:"Landscape Sharpness & Generalization",body:`**Sharp minima:** the loss rises steeply in all directions. The model is "precise" but fragile — small weight perturbations cause large loss increases. These tend to **overfit**.

**Flat minima:** the loss stays low in a wide region around the minimum. The model is robust to perturbations. These tend to **generalize better**.

**Why this matters for LLMs:**
• **Large batch sizes** tend to find sharp minima → worse generalization
• **Small batch sizes** (or SGD noise) tend to find flat minima → better generalization
• **Weight decay** penalizes large weights, pushing toward flatter regions
• **SAM (Sharpness-Aware Minimization)** explicitly seeks flat minima

The connection between flat minima and generalization is an active research area, but it's a useful mental model.`}],questions:[{q:"In a 1-million-dimensional parameter space, is a point more likely to be a local minimum or a saddle point? Why?",a:"A saddle point is overwhelmingly more likely. For a point to be a true local minimum, the curvature must be positive in ALL 1 million dimensions simultaneously. At a saddle point, it's a minimum in some dimensions and a maximum in others. The probability of all dimensions having positive curvature by chance decreases exponentially with dimension count, making true local minima extremely rare in high dimensions.",hint:"For a local minimum, what must be true in every single dimension?",check:l=>{const r=l.toLowerCase();return r.includes("saddle")&&(r.includes("all")||r.includes("every")||r.includes("dimension")||r.includes("rare"))}},{q:"What is the cross-entropy loss for a model that predicts P(correct_token) = 0.01 for a single token?",a:"-log(0.01) = -(-4.605) = 4.605 (using natural log). This is a high loss — the model was very wrong (only 1% probability on the correct token). If P(correct) = 0.99, loss would be -log(0.99) ≈ 0.01 — much better.",hint:"Cross-entropy for one token = -log(predicted probability of correct token).",check:l=>{const r=l.replace(/\s/g,"");return r.includes("4.6")||r.includes("4.605")||r.includes("log(0.01)")}},{q:"Why might a model trained with small batches generalize better than one trained with large batches?",a:"Small batches produce noisy gradient estimates, which act as a form of regularization. This noise prevents the optimizer from settling into sharp, narrow minima (which overfit) and instead pushes it toward broad, flat minima (which generalize). Flat minima are robust to small perturbations in the weights, meaning the model performs similarly on unseen data.",hint:"Think about the shape of the minima: sharp vs. flat.",check:l=>{const r=l.toLowerCase();return(r.includes("noise")||r.includes("noisy")||r.includes("regulariz"))&&(r.includes("flat")||r.includes("sharp")||r.includes("generali"))}}]},{id:"convex",icon:"⌒",color:"#15803D",title:"Convexity",subtitle:"When optimization is easy, when it's hard, and why deep learning is non-convex",resources:[{type:"infographic",title:"Boyd & Vandenberghe — Convex Optimization (Ch 1-3 visual intro)",url:"https://web.stanford.edu/~boyd/cvxbook/"},{type:"infographic",title:"Seeing Theory — visual probability (convexity intuition)",url:"https://seeing-theory.brown.edu/"},{type:"read",title:"Dive into Deep Learning — Ch 12.5: Convexity",url:"https://d2l.ai/chapter_optimization/convexity.html"},{type:"read",title:"Mathematics for Machine Learning — Ch 7: Optimization",url:"https://mml-book.github.io/book/mml-book.pdf"},{type:"read",title:"Lilian Weng — Neural Network Optimization overview",url:"https://lilianweng.github.io/posts/2017-08-20-optimization/"},{type:"video",title:"StatQuest — Convex Optimization fundamentals",url:"https://www.youtube.com/c/joshstarmer"},{type:"video",title:"3Blue1Brown — Gradient Descent & learning rate",url:"https://www.youtube.com/watch?v=IHZwWFHWa-w"}],content:[{heading:"What Is Convexity?",body:`A function f is **convex** if the line segment between any two points on the graph lies above (or on) the graph.

**Visual test:** Draw a straight line between any two points on the curve. If the curve is always below the line, it's convex. Think of a bowl shape.

**Mathematical test:** f(αx + (1-α)y) ≤ αf(x) + (1-α)f(y) for all α ∈ [0,1]

**Equivalently:** a twice-differentiable function is convex if its **second derivative ≥ 0** everywhere (or its **Hessian matrix is positive semi-definite** for multi-variable functions).

**Examples:**
• Convex: x², |x|, eˣ, -log(x)
• Non-convex: sin(x), x³, neural network loss functions`},{heading:"Why Convexity Matters for Optimization",body:`**Convex functions have ONE key property:** every local minimum is also the **global minimum**.

This means gradient descent is **guaranteed** to find the best solution (with appropriate learning rate). No local minima traps, no saddle point problems.

**Linear regression** with MSE loss is convex → GD always finds the optimal weights.
**Logistic regression** with cross-entropy loss is convex → GD always converges.
**Neural networks** are **non-convex** → GD can get stuck, but it usually works anyway.

**The paradox of deep learning:** despite non-convexity, neural networks train successfully. This is because:
1. In high dimensions, most critical points are saddle points (not local minima)
2. Local minima that do exist tend to have similar loss values
3. SGD noise helps escape bad regions
4. Overparameterization (more params than data) creates many good solutions`},{heading:"Convex vs Non-Convex Loss Landscapes",body:`**Convex (linear/logistic regression):**
• Single bowl shape
• One global minimum
• GD always converges
• Solution is unique (or a convex set of solutions)

**Non-convex (neural networks):**
• Complex terrain with many valleys
• Multiple local minima + saddle points + plateaus
• GD finds *a* minimum, not necessarily *the* minimum
• Different random initializations → different solutions (all roughly equally good)

**Practical implications:**
• Convex problems → use any optimizer, it will work
• Non-convex problems → optimizer choice, learning rate, initialization, batch size all matter
• Neural networks are non-convex, but **well-behaved non-convex** — the landscape is structured enough that GD works`},{heading:"The Hessian — Curvature Information",body:`The **Hessian** is the matrix of second derivatives. It tells you about the **curvature** of the loss landscape.

For f(x, y):
H = [[∂²f/∂x², ∂²f/∂x∂y],
     [∂²f/∂y∂x, ∂²f/∂y²]]

**Eigenvalues of H reveal landscape shape:**
• All positive → local minimum (bowl shape, convex locally)
• All negative → local maximum (dome shape)
• Mixed signs → **saddle point** (one direction curves up, another curves down)

**For neural networks:** the Hessian is too large to compute (n² entries for n parameters). But approximate Hessian information is used in:
• **Second-order optimizers** (L-BFGS, K-FAC): use curvature for better steps
• **Learning rate scheduling:** high curvature → smaller steps needed
• **Sharpness-aware minimization (SAM):** seeks low-curvature regions

First-order methods (SGD, Adam) only use the gradient. Second-order methods also use curvature. First-order is cheaper; second-order is smarter.`},{heading:"Jensen's Inequality & Its ML Applications",body:`For a convex function f: **f(E[X]) ≤ E[f(X)]**

"The function of the average is ≤ the average of the function."

**Why this matters in ML:**

1. **KL divergence is non-negative** (proved via Jensen's + convexity of -log)
   KL(P||Q) = E_P[log(P/Q)] ≥ 0 — this is used in RLHF to keep the model close to a reference.

2. **Evidence Lower Bound (ELBO)** in variational inference uses Jensen's inequality.

3. **Loss function design:** cross-entropy loss is convex in the predicted probabilities (even though the overall network loss is non-convex w.r.t. weights).

4. **Why log-loss, not squared-error, for classification:** -log(p) is convex and goes to infinity as p→0, giving strong gradients for wrong predictions. Squared error (1-p)² is also convex but gives weaker gradients.`}],questions:[{q:"Is f(x) = x⁴ - 2x² convex? How can you tell?",a:"No, it's not convex. The second derivative is f''(x) = 12x² - 4. At x = 0, f''(0) = -4 < 0, meaning the function curves downward there. A convex function requires f'' ≥ 0 everywhere. Visually, this function has a local maximum at x=0 and two local minima — a bowl can't have a bump in the middle.",hint:"Compute the second derivative and check its sign at x = 0.",check:l=>l.toLowerCase().startsWith("no")},{q:"Why is training a linear regression model with MSE loss guaranteed to find the best weights, but training a neural network is not?",a:"Linear regression's MSE loss is a convex function of the weights (it's a quadratic with positive curvature). Convex functions have a single global minimum, so gradient descent always converges to the best solution. Neural networks introduce non-linear activation functions, which make the loss function non-convex — the landscape has multiple local minima and saddle points, so there's no guarantee of reaching the global minimum.",hint:"What property does a convex loss function guarantee about local minima?",check:l=>{const r=l.toLowerCase();return r.includes("convex")&&(r.includes("global")||r.includes("non-convex")||r.includes("non-linear")||r.includes("activation"))}},{q:"At a critical point, the Hessian eigenvalues are [3, -2, 5, -1]. Is this a local minimum, maximum, or saddle point?",a:"Saddle point. The eigenvalues have mixed signs (3 and 5 are positive, -2 and -1 are negative). A local minimum requires ALL eigenvalues to be positive. A local maximum requires ALL negative. Mixed signs = saddle point — the landscape curves upward in some directions and downward in others.",hint:"Check if the eigenvalues are all positive, all negative, or mixed.",check:l=>l.toLowerCase().includes("saddle")},{q:"Explain in one sentence why Jensen's inequality proves KL divergence is always ≥ 0.",a:"Because -log is a convex function, Jensen's inequality gives E[-log(Q/P)] ≥ -log(E[Q/P]) = -log(1) = 0, which means KL(P||Q) = E_P[log(P/Q)] ≥ 0. (The expectation of Q/P under P equals 1 by definition of probability distributions.)",hint:"-log is convex. Jensen says f(E[X]) ≤ E[f(X)].",check:l=>{const r=l.toLowerCase();return r.includes("jensen")&&r.includes("convex")&&(r.includes("-log")||r.includes("log"))}}]}];function dh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")},M=()=>E("revealed"),p=()=>{var S;E("idle"),U(""),(S=A.current)==null||S.focus()};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:S=>U(S.target.value),onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal the answer."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:M,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function uh({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=Wr.reduce((d,g)=>d+g.content.length,0),P=Math.round(b.size/A*100),M=d=>q(K===d?null:d),p=(d,g)=>{g.stopPropagation();const N=new Set(b);N.has(d)?N.delete(d):N.add(d),U(N)},S=d=>D[d]||"learn",G=d=>d.split(`
`).map((g,N)=>{if(g==="")return a.jsx("div",{style:{height:8}},N);const v=g.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:v.map((z,C)=>C%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:z},C):a.jsx("span",{children:z},C))},N)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .sec-card{transition:all .3s cubic-bezier(.4,0,.2,1)}.sec-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}
        .block-row{transition:all .2s;cursor:pointer;border-radius:8px}.block-row:hover{background:rgba(0,0,0,.02)}
        .chk{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}
        .chk.done{background:#059669;border-color:#059669;color:white}
        .arr{transition:transform .25s;font-size:16px;color:#aaa}
        .pfill{transition:width .5s cubic-bezier(.4,0,.2,1)}
        .tab-btn{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}
        .tab-btn.active{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tab-btn:not(.active){background:transparent;color:#888}.tab-btn:not(.active):hover{color:#555}
        .res-link{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}
        .res-link:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}
        .type-badge{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}
        textarea:focus{border-color:#4338CA!important}
      `}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Calculus & Optimization for LLMs"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:24},children:["Partial derivatives → chain rule → gradient descent → loss landscapes → convexity."," ",Wr.length," sections · ",A," concepts · ",Wr.reduce((d,g)=>{var N;return d+(((N=g.questions)==null?void 0:N.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pfill",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #9333EA, #0369A1, #15803D)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]}),a.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Yc).map(([d,g])=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#777"},children:[a.jsxs("span",{className:"type-badge",style:{background:g.bg,color:g.color},children:[g.emoji," ",g.label]}),d==="infographic"&&"— Primary",d==="read"&&"— Secondary",d==="video"&&"— Supplement"]},d))})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Wr.map(d=>{var C;const g=r===d.id,v=d.content.map((L,T)=>`${d.id}-${T}`).filter(L=>b.has(L)).length,z=S(d.id);return a.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(g?null:d.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:d.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:d.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:d.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:d.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[v,"/",d.content.length]}),a.jsx("span",{className:"arr",style:{transform:g?"rotate(90deg)":"rotate(0)"},children:"›"})]}),g&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tab-btn ${z==="learn"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tab-btn ${z==="practice"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"practice"})),children:["✏️ Practice (",((C=d.questions)==null?void 0:C.length)||0,")"]}),a.jsxs("button",{className:`tab-btn ${z==="deeper"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"deeper"})),children:["🔗 Go Deeper (",d.resources.length,")"]})]}),z==="learn"&&a.jsx("div",{children:d.content.map((L,T)=>{const F=`${d.id}-${T}`,V=K===F,re=b.has(F);return a.jsxs("div",{style:{borderTop:T>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"block-row",onClick:()=>M(F),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`chk ${re?"done":""}`,onClick:ye=>p(F,ye),children:re&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:re?"#aaa":"#2a2a2a",textDecoration:re?"line-through":"none",flex:1},children:L.heading}),a.jsx("span",{className:"arr",style:{transform:V?"rotate(90deg)":"rotate(0)"},children:"›"})]}),V&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${d.color}20`,marginLeft:22},children:G(L.body)})]},T)})}),z==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal. Press Enter to submit."}),(d.questions||[]).map((L,T)=>a.jsx(dh,{...L,color:d.color},`${d.id}-q-${T}`))]}),z==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:d.resources.map((L,T)=>{const F=Yc[L.type];return a.jsxs("a",{href:L.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:F.bg+"55"},children:[a.jsxs("span",{className:"type-badge",style:{background:F.bg,color:F.color},children:[F.emoji," ",F.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:L.title})]},T)})})]})]})]},d.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Three tabs per section: Learn · Practice · Go Deeper — everything you need for calculus & optimization in LLMs"})]})}const Jc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Rr=[{id:"bayes",icon:"P",color:"#7C3AED",title:"Bayes' Theorem",subtitle:"Updating beliefs with evidence — the engine of learning from data",resources:[{type:"infographic",title:"Seeing Theory — Bayesian Inference (interactive sliders)",url:"https://seeing-theory.brown.edu/bayesian-inference/index.html"},{type:"infographic",title:"3Blue1Brown — Bayes' Theorem (visual + interactive)",url:"https://www.3blue1brown.com/lessons/bayes-theorem"},{type:"infographic",title:"Allen Kim — Interactive Bayes' Demo (drag priors)",url:"https://allenkim67.github.io/bayes-demo/"},{type:"infographic",title:"R Psychologist — Bayesian Inference Visualization",url:"https://rpsychologist.com/d3/bayes/"},{type:"read",title:"Arbital — Guide to Bayes' Rule (beginner → expert)",url:"https://arbital.com/p/bayes_rule_guide/"},{type:"read",title:"Think Bayes 2e — free Python-first Bayesian textbook",url:"https://allendowney.github.io/ThinkBayes2/"},{type:"video",title:"3Blue1Brown — Bayes' theorem, the geometry of changing beliefs",url:"https://www.youtube.com/watch?v=HZGCoVF3YvM"},{type:"video",title:"StatQuest — Bayes' Theorem, Clearly Explained",url:"https://www.youtube.com/watch?v=9wCnvr7Xw4E"}],content:[{heading:"The Formula & Intuition",body:`**P(A|B) = P(B|A) × P(A) / P(B)**

In plain English: "the probability of A given that B happened."

**Components:**
• **P(A)** = prior — what you believed before seeing evidence
• **P(B|A)** = likelihood — how likely is the evidence if A is true
• **P(A|B)** = posterior — your updated belief after seeing evidence
• **P(B)** = evidence — total probability of seeing that evidence

**Intuition:** You start with a belief (prior). You observe data (evidence). Bayes' theorem tells you exactly how to update your belief.

**Example:** A medical test is 99% accurate. Disease affects 1 in 10,000 people.
You test positive. What's the probability you have the disease?

P(disease|positive) = P(positive|disease) × P(disease) / P(positive)
= 0.99 × 0.0001 / (0.99 × 0.0001 + 0.01 × 0.9999)
= 0.0099 / 0.0109 ≈ **0.98%**

Only ~1%! The low prior (1 in 10,000) dominates the high test accuracy. This is why Bayes' theorem matters.`},{heading:"Prior, Likelihood, Posterior — The Learning Loop",body:`**Bayesian updating** is iterative:
posterior₁ = prior₁ × likelihood₁ / evidence₁

Then the posterior becomes the new prior:
posterior₂ = posterior₁ × likelihood₂ / evidence₂

Each new data point refines your belief. This is exactly what **training a neural network** does:
1. Start with random weights (prior)
2. Observe training data (evidence)
3. Update weights via gradient descent (posterior update)
4. Repeat with more data

**In LLMs:** The model's weights encode a learned prior over language. When you provide a prompt, it's evidence that conditions the model's output distribution (posterior). Longer prompts = more evidence = sharper posterior.

**The Beta-Binomial example:**
• Prior: Beta(1,1) = uniform (you have no idea)
• See 7 heads in 10 flips
• Posterior: Beta(8,4) — now you believe the coin is biased
• See 30 more flips (18 heads)
• Posterior: Beta(26,16) — belief becomes sharper

Each update follows Bayes' theorem exactly.`},{heading:"Bayes for Classification",body:`**Naive Bayes Classifier:**
P(class|features) ∝ P(class) × ∏ P(featureᵢ|class)

"Naive" because it assumes features are independent given the class. Despite this wrong assumption, it works surprisingly well for text classification, spam filtering, and sentiment analysis.

**Why "naive" works for text:**
P(spam|"buy", "now", "free") ∝ P(spam) × P("buy"|spam) × P("now"|spam) × P("free"|spam)

Each word independently contributes evidence. This is crude but effective.

**Beyond Naive Bayes — Bayesian Neural Networks:**
Instead of learning single weight values, learn **distributions** over weights:
P(weights|data) ∝ P(data|weights) × P(weights)

This gives you **uncertainty estimates** — the model knows what it doesn't know. Used in safety-critical applications (medical, autonomous driving).`},{heading:"Prior & Posterior in LLM Context",body:`**Pre-training** learns a prior distribution P(next_token | context) from massive text data. This prior encodes everything the model "believes" about language.

**Prompting** provides evidence that sharpens the posterior:
• Zero-shot: P(answer | question) — just the prior
• Few-shot: P(answer | examples, question) — prior + evidence from examples
• The more examples, the sharper the posterior → better answers

**RLHF** can be viewed as Bayesian updating:
• Prior: the pre-trained model's distribution
• Evidence: human preference data
• Posterior: the aligned model

The **KL divergence penalty** in RLHF prevents the posterior from drifting too far from the prior — exactly like a Bayesian prior constraining the posterior.

**Temperature** controls how "peaked" the posterior is:
• Low temp → sharp posterior (confident, deterministic)
• High temp → flat posterior (uncertain, creative)`}],questions:[{q:"A disease affects 1% of the population. A test has 95% sensitivity (true positive rate) and 90% specificity (true negative rate). If you test positive, what's the probability you have the disease?",a:"About 8.8%. P(disease|+) = P(+|disease)×P(disease) / P(+) = (0.95 × 0.01) / (0.95 × 0.01 + 0.10 × 0.99) = 0.0095 / (0.0095 + 0.099) = 0.0095 / 0.1085 ≈ 0.088 or 8.8%. Even with a good test, the low base rate means most positives are false positives.",hint:"Use Bayes' formula. P(+) = P(+|disease)P(disease) + P(+|no disease)P(no disease). Specificity of 90% means false positive rate = 10%.",check:l=>{const r=l.replace(/[%\s]/g,"");return r.includes("8.8")||r.includes("8.76")||r.includes("0.088")||r.includes("0.087")}},{q:"Why does few-shot prompting improve LLM performance, viewed through a Bayesian lens?",a:"Few-shot examples serve as evidence that updates the model's prior distribution into a sharper posterior. The pre-trained model encodes a broad prior P(output|input) learned from all training data. Each in-context example provides additional evidence that narrows this distribution toward the specific task. More examples = more evidence = sharper posterior = better task-specific predictions. This is analogous to Bayesian updating where the posterior becomes more concentrated as you observe more data.",hint:"Think about what each example does to the model's belief about what kind of task this is.",check:l=>{const r=l.toLowerCase();return(r.includes("prior")||r.includes("evidence"))&&(r.includes("posterior")||r.includes("sharper")||r.includes("narrow")||r.includes("update"))}},{q:"In the formula P(A|B) = P(B|A)×P(A)/P(B), which term is the 'likelihood' and why is it called that?",a:"P(B|A) is the likelihood. It's called 'likelihood' because it measures how likely the observed evidence B would be if hypothesis A were true. Critically, it is NOT the probability of A — it's the probability of the data given A. In MLE, we flip this: we fix the data and ask 'for which parameter values is this data most likely?' — hence 'maximum likelihood estimation.'",hint:"The likelihood answers: 'If A were true, how probable is the evidence we actually saw?'",check:l=>{const r=l.toLowerCase();return r.includes("p(b|a)")&&(r.includes("evidence")||r.includes("data")||r.includes("likely"))}}]},{id:"dist",icon:"𝒩",color:"#0369A1",title:"Probability Distributions",subtitle:"The mathematical language that models speak — every output is a distribution",resources:[{type:"infographic",title:"Seeing Theory — Probability Distributions (interactive)",url:"https://seeing-theory.brown.edu/probability-distributions/index.html"},{type:"infographic",title:"Distribution Explorer — every distribution with interactive plots",url:"https://distribution-explorer.github.io/"},{type:"infographic",title:"Distill.pub — Visual Exploration of Gaussian Processes",url:"https://distill.pub/2019/visual-exploration-gaussian-processes/"},{type:"read",title:"Jonathan Hui — Distributions in ML & Deep Learning",url:"https://jonathan-hui.medium.com/probability-distributions-in-machine-learning-deep-learning-b0203de88bdf"},{type:"read",title:"ML Mastery — How LLMs Choose Words (softmax → sampling)",url:"https://machinelearningmastery.com/how-llms-choose-their-words-a-practical-walk-through-of-logits-softmax-and-sampling/"},{type:"read",title:"Stanford CS229 — Probability Review (rigorous)",url:"https://see.stanford.edu/materials/aimlcs229/cs229-prob.pdf"},{type:"video",title:"3Blue1Brown — Probability series (why π in the normal dist)",url:"https://www.3blue1brown.com/topics/probability"},{type:"video",title:"StatQuest — Normal Distribution + Gaussian Naive Bayes",url:"https://statquest.org/video_index.html"}],content:[{heading:"Discrete vs Continuous",body:`**Discrete:** finite/countable outcomes, described by a PMF (probability mass function)
• Coin flip: {heads, tails} with probabilities {0.5, 0.5}
• LLM next token: {token₁, token₂, ..., token₅₀₂₅₇} with probabilities from softmax

**Continuous:** infinite outcomes in a range, described by a PDF (probability density function)
• Height of a person: Normal(170cm, 10cm²)
• Model weights after training: approximately Normal(0, σ²)

**Key rule:** For discrete, P(X=x) is a probability (0 to 1).
For continuous, P(X=x) = 0 for any exact value! Only P(a ≤ X ≤ b) makes sense (area under curve).

**CDF** = cumulative distribution function = P(X ≤ x). Works for both discrete and continuous.`},{heading:"Distributions You'll See in ML",body:`**Bernoulli(p):** single coin flip. X ∈ {0,1}. Used in: dropout, binary classification.
• P(X=1) = p,  P(X=0) = 1-p
• Mean = p,  Variance = p(1-p)

**Categorical(p₁, ..., pₖ):** single roll of a k-sided die. **This is what LLMs output.**
• Softmax converts logits → categorical distribution over vocabulary
• Sampling from this distribution = generating one token

**Normal/Gaussian(μ, σ²):** the bell curve. Used in: weight initialization, VAEs, diffusion models.
• 68% of values within 1σ, 95% within 2σ, 99.7% within 3σ
• Sum of many independent variables → approximately Normal (Central Limit Theorem)

**Uniform(a, b):** all values equally likely. Used in: random initialization, some sampling.

**Beta(α, β):** distribution over probabilities (values in [0,1]). The conjugate prior for Bernoulli.
• α=β=1 → uniform. α=β=10 → peaked at 0.5. α>β → skewed right.

**Dirichlet(α₁,...,αₖ):** distribution over probability vectors. Generalizes Beta to k dimensions. Used in: topic models (LDA), as priors over categorical distributions.`},{heading:"Softmax — From Logits to Distributions",body:`The softmax function converts a vector of real numbers (logits) into a probability distribution:

**softmax(zᵢ) = exp(zᵢ) / Σⱼ exp(zⱼ)**

**Example:** logits = [2.0, 1.0, 0.5]
exp(2.0) = 7.39,  exp(1.0) = 2.72,  exp(0.5) = 1.65
Sum = 11.76
Probabilities = [0.628, 0.231, 0.140]  ← sums to 1.0 ✓

**Temperature** scales logits before softmax:
softmax(zᵢ / T)

• T = 1.0: normal distribution
• T = 0.1: very peaked → nearly deterministic (greedy-like)
• T = 2.0: very flat → more random/creative

**At T → 0:** converges to argmax (greedy decoding)
**At T → ∞:** converges to uniform distribution (pure random)

**In LLMs:** at each generation step, the model computes logits (one per vocab token), applies softmax to get a categorical distribution, then samples from it. Top-k and top-p further shape this distribution before sampling.`},{heading:"Expected Value, Variance & Key Properties",body:`**Expected value** E[X] = Σ xᵢ P(xᵢ) — the "average" outcome
**Variance** Var(X) = E[(X - E[X])²] — how spread out values are
**Standard deviation** σ = √Var(X) — same units as X

**Key properties used constantly in ML:**
• E[aX + b] = a·E[X] + b  (linearity of expectation)
• Var(aX + b) = a²·Var(X)  (scaling changes variance quadratically)
• If X, Y independent: Var(X + Y) = Var(X) + Var(Y)

**For neural networks:**
• Weight initialization: N(0, 2/nᵢₙ) (He init) keeps variance stable across layers
• Batch normalization: forces each layer's activations to have mean≈0, variance≈1
• Loss is an expected value: L = E_data[-log P(correct_token)]

**Law of Large Numbers:** sample mean → true mean as n → ∞
**Central Limit Theorem:** sample mean is approximately Normal, regardless of the original distribution — this is why Gaussians are everywhere in ML.`}],questions:[{q:"Logits = [3.0, 1.0, -1.0]. Compute the softmax probabilities.",a:"exp(3.0) = 20.09, exp(1.0) = 2.72, exp(-1.0) = 0.37. Sum = 23.17. Probabilities: [20.09/23.17, 2.72/23.17, 0.37/23.17] = [0.867, 0.117, 0.016]. The first token gets 86.7% probability. Note how softmax amplifies differences — a logit of 3 vs 1 becomes 87% vs 12%.",hint:"Compute exp() of each logit, sum them, then divide each by the sum.",check:l=>{const r=l.replace(/\s/g,"");return r.includes("0.86")||r.includes("0.87")||r.includes("86")||r.includes("87")}},{q:"What distribution does an LLM's output represent at each generation step, and how is it parameterized?",a:"A categorical distribution over the entire vocabulary (e.g., 50,257 tokens for GPT-2). It's parameterized by the softmax of the logit vector — one probability per vocabulary token, all summing to 1. The model generates one token by sampling from this categorical distribution. Temperature, top-k, and top-p modify this distribution before sampling.",hint:"Think about what softmax produces and what you sample from.",check:l=>{const r=l.toLowerCase();return r.includes("categorical")&&(r.includes("softmax")||r.includes("vocab"))}},{q:"Why does He initialization use N(0, 2/n_in) specifically? What would go wrong with N(0, 1)?",a:"He initialization keeps the variance of activations stable across layers. With ReLU activation, each layer zeros out ~half its inputs, so the variance needs to be doubled to compensate. N(0, 2/n_in) ensures Var(output) ≈ Var(input) at each layer. With N(0, 1), if n_in = 768, the weights are way too large — the variance explodes layer after layer, causing numerical instability and gradient explosion. The 2/n_in factor normalizes by the fan-in to keep signals stable.",hint:"Think about what happens to variance when you multiply a vector by a random matrix.",check:l=>{const r=l.toLowerCase();return(r.includes("variance")||r.includes("stable"))&&(r.includes("layer")||r.includes("explod")||r.includes("relu"))}},{q:"What is the difference between temperature=0.1 and temperature=2.0 in LLM generation?",a:"Temperature=0.1 divides all logits by 0.1 (effectively multiplying by 10), making the softmax distribution extremely peaked — the highest-probability token dominates, giving near-deterministic output. Temperature=2.0 divides logits by 2, flattening the distribution so probabilities are more uniform — lower-probability tokens have a better chance of being selected, producing more diverse/creative (but potentially less coherent) text.",hint:"softmax(logit/T): what happens when T is very small vs very large?",check:l=>{const r=l.toLowerCase();return(r.includes("peaked")||r.includes("sharp")||r.includes("confident")||r.includes("deterministic"))&&(r.includes("flat")||r.includes("uniform")||r.includes("creative")||r.includes("diverse"))}}]},{id:"mle",icon:"ℒ",color:"#DC2626",title:"Maximum Likelihood Estimation",subtitle:"The hidden thread connecting loss functions to learning — cross-entropy IS MLE",resources:[{type:"infographic",title:"R Psychologist — Understanding MLE (interactive)",url:"https://rpsychologist.com/likelihood/"},{type:"infographic",title:"TensorTonic — Cross-Entropy Loss (MLE→BCE visualizer)",url:"https://www.tensortonic.com/ml-math/information-theory/cross-entropy"},{type:"infographic",title:"Seeing Theory — Bayesian Inference (likelihood section)",url:"https://seeing-theory.brown.edu/bayesian-inference/index.html"},{type:"read",title:"Glass Box Medicine — Log Likelihood, CE, KL (connections)",url:"https://glassboxmedicine.com/2019/12/07/connections-log-likelihood-cross-entropy-kl-divergence-logistic-regression-and-neural-networks/"},{type:"read",title:"Lei Mao — Cross Entropy, KL Divergence, and MLE",url:"https://leimao.github.io/blog/Cross-Entropy-KL-Divergence-MLE/"},{type:"read",title:"AI Summer — Understanding MLE in Supervised Learning",url:"https://theaisummer.com/mle/"},{type:"video",title:"StatQuest — Probability vs Likelihood (essential prerequisite)",url:"https://www.youtube.com/watch?v=pYxNSUDSFH4"},{type:"video",title:"StatQuest — Maximum Likelihood, clearly explained",url:"https://www.youtube.com/watch?v=XepXtl9YKwc"}],content:[{heading:"Probability vs Likelihood — The Critical Distinction",body:`**Probability:** fix the distribution parameters, ask "how likely is this data?"
P(data | θ) — θ is fixed, data varies

**Likelihood:** fix the data, ask "which parameters make this data most probable?"
L(θ | data) = P(data | θ) — same formula, but now θ varies and data is fixed

**Example:** You flip a coin 10 times and get 7 heads.
• Probability question: "If the coin is fair (p=0.5), what's the probability of 7 heads?"
• Likelihood question: "Given 7 heads in 10 flips, what value of p makes this most likely?"

The likelihood function L(p) = C(10,7) × p⁷ × (1-p)³ is maximized at **p = 0.7**.

This distinction is the foundation of all training in deep learning. When we train a model, we fix the data (our training set) and search for the parameters that maximize the likelihood.`},{heading:"MLE — Find the Best Parameters",body:`**Maximum Likelihood Estimation:**
θ_MLE = argmax_θ P(data | θ)

In practice, we maximize the **log-likelihood** (easier math, same answer):
θ_MLE = argmax_θ Σᵢ log P(xᵢ | θ)

**Why log?**
1. Products → sums (numerically stable)
2. log is monotonic (same argmax)
3. Gradients are simpler

**MLE for a Gaussian:**
Data: x₁, x₂, ..., xₙ
Log-likelihood: Σᵢ log N(xᵢ | μ, σ²) = -n/2 log(2πσ²) - Σᵢ(xᵢ-μ)²/(2σ²)

Take derivative, set to 0:
μ_MLE = (1/n)Σxᵢ = **sample mean** ← the familiar formula!
σ²_MLE = (1/n)Σ(xᵢ-μ)² = **sample variance**

MLE derives the formulas you already know.`},{heading:"The Big Reveal — Cross-Entropy Loss IS MLE",body:`**This is the most important connection in all of ML.**

For classification with model outputs q(y|x,θ) and true labels y:

Maximize log-likelihood:
argmax_θ Σᵢ log q(yᵢ | xᵢ, θ)

Minimize negative log-likelihood:
argmin_θ **-Σᵢ log q(yᵢ | xᵢ, θ)**

This IS the cross-entropy loss: **L = -Σᵢ log q(yᵢ | xᵢ, θ)**

**For LLMs specifically:**
L = -(1/T) Σₜ log P(token_t | tokens_<t, θ)

"The average negative log-probability of the correct next token."

**Perplexity** = exp(L) — if perplexity = 15, the model is "as confused as choosing from 15 equally likely tokens."

**Similarly, assuming Gaussian errors gives:**
log P(yᵢ|xᵢ,θ) = -½(yᵢ - f(xᵢ,θ))²/σ² + const
Maximizing this ↔ minimizing **MSE loss**

**Every standard loss function is MLE under a specific distributional assumption.**`},{heading:"MLE vs MAP vs Full Bayesian",body:`**MLE:** find the single best θ. θ_MLE = argmax_θ P(data|θ)
No prior. Prone to overfitting with small data.

**MAP (Maximum A Posteriori):** add a prior. θ_MAP = argmax_θ P(data|θ)P(θ)
= argmax_θ [log P(data|θ) + log P(θ)]

If P(θ) = N(0, σ²), then log P(θ) = -||θ||²/(2σ²) + const
→ This is **L2 regularization (weight decay)!**

MLE + L2 regularization = MAP with Gaussian prior.
MLE + L1 regularization = MAP with Laplace prior.

**Full Bayesian:** don't pick a single θ. Compute the entire posterior P(θ|data) and average predictions over all possible θ values. More principled but computationally expensive. Used in Bayesian neural networks, Gaussian processes.

**LLM training:** uses MLE (cross-entropy) + weight decay (MAP with Gaussian prior) + gradient clipping.`}],questions:[{q:"You observe data: [3, 5, 4, 6, 2]. Assuming a Gaussian distribution, what are the MLE estimates for μ and σ²?",a:"μ_MLE = mean = (3+5+4+6+2)/5 = 20/5 = 4.0. σ²_MLE = (1/5)[(3-4)² + (5-4)² + (4-4)² + (6-4)² + (2-4)²] = (1+1+0+4+4)/5 = 10/5 = 2.0. So MLE says the data came from N(4.0, 2.0). Note: the MLE for variance uses 1/n, not 1/(n-1) like the unbiased sample variance.",hint:"MLE for Gaussian: μ = sample mean, σ² = average squared deviation from mean.",check:l=>{const r=l.replace(/\s/g,"");return(r.includes("4.0")||r.includes("4,")||r.includes("μ=4"))&&(r.includes("2.0")||r.includes("2,")||r.includes("σ²=2"))}},{q:"Explain in your own words why minimizing cross-entropy loss is the same as maximizing likelihood.",a:"Cross-entropy loss = -Σ log P(correct_token | input, θ). This is the negative log-likelihood (NLL). Minimizing NLL is the same as maximizing likelihood, because: (1) the negative sign flips the optimization direction (minimize negative = maximize positive), and (2) log is monotonically increasing, so maximizing log-likelihood gives the same answer as maximizing likelihood. In practice, we use log-likelihood because it turns products of probabilities into sums, which is numerically stable and has simpler gradients.",hint:"What happens when you negate and take the log of the likelihood function?",check:l=>{const r=l.toLowerCase();return(r.includes("negative")||r.includes("negate")||r.includes("flip"))&&(r.includes("log")||r.includes("likelihood"))}},{q:"Why does adding L2 regularization (weight decay) to MLE correspond to MAP estimation with a Gaussian prior?",a:"MAP maximizes P(data|θ)P(θ). Taking the log: maximize log P(data|θ) + log P(θ). If P(θ) = N(0, σ²), then log P(θ) = -||θ||²/(2σ²) + const. So MAP = maximize log-likelihood - λ||θ||². Equivalently: minimize NLL + λ||θ||² = cross-entropy loss + L2 penalty. The L2 term is exactly the log of a Gaussian prior on the weights, pushing them toward zero. The regularization strength λ = 1/(2σ²) — stronger regularization = tighter prior = smaller σ.",hint:"Write out log P(θ) for θ ~ N(0, σ²). What does it look like?",check:l=>{const r=l.toLowerCase();return r.includes("gaussian")&&r.includes("prior")&&(r.includes("log")||r.includes("l2")||r.includes("||"))}}]},{id:"entropy",icon:"H",color:"#0E7490",title:"Entropy & Self-Information",subtitle:"Measuring surprise, uncertainty, and information content",resources:[{type:"infographic",title:"Chris Olah — Visual Information Theory (gold standard)",url:"https://colah.github.io/posts/2015-09-Visual-Information/"},{type:"infographic",title:"Nima Sarang — Information Theory with interactive plots",url:"https://nimasarang.com/blog/2024-08-24-information-theory/"},{type:"infographic",title:"Aimless Agents — interactive entropy/CE/KL explorer",url:"https://aimless-agents.github.io/articles/2021-03/cekl"},{type:"read",title:"d2l.ai — Information Theory chapter (with PyTorch code)",url:"https://d2l.ai/chapter_appendix-mathematics-for-deep-learning/information-theory.html"},{type:"read",title:"Eli Bendersky — Cross-entropy and KL divergence (precise derivation)",url:"https://eli.thegreenplace.net/2025/cross-entropy-and-kl-divergence/"},{type:"video",title:"3Blue1Brown — Solving Wordle using information theory",url:"https://www.youtube.com/watch?v=v68zYyaEmEA"},{type:"video",title:"StatQuest — Entropy, Clearly Explained",url:"https://www.youtube.com/watch?v=YtebGVx-Fxw"}],content:[{heading:"Self-Information — Surprise",body:`**How surprised are you when an event happens?**

I(x) = -log₂ P(x) bits

• P(x) = 1.0 (certain) → I(x) = 0 bits (no surprise)
• P(x) = 0.5 → I(x) = 1 bit (one bit of information)
• P(x) = 0.01 → I(x) = 6.64 bits (very surprising!)
• P(x) → 0 → I(x) → ∞ (infinitely surprising)

**Why log?** Because information should be **additive**. If two independent events happen, total surprise = sum of individual surprises:
I(x AND y) = I(x) + I(y) = -log P(x) - log P(y) = -log(P(x)P(y)) ✓

**In LLMs:** when the model assigns P(next_token) = 0.01 to the correct token, it means the model needed -log₂(0.01) ≈ 6.64 bits to encode that token. High surprise = high loss.`},{heading:"Entropy — Average Surprise",body:`**Entropy** = the expected (average) surprise across all possible outcomes:

**H(P) = -Σᵢ P(xᵢ) log₂ P(xᵢ)**

**Examples:**
• Fair coin: H = -(0.5 log₂ 0.5 + 0.5 log₂ 0.5) = 1 bit
• Biased coin (p=0.9): H = -(0.9 log₂ 0.9 + 0.1 log₂ 0.1) ≈ 0.47 bits
• Certain outcome (p=1.0): H = 0 bits

**Key property:** entropy is **maximized** when all outcomes are equally likely (uniform distribution), and **minimized** (= 0) when one outcome is certain.

**For LLMs:** a well-trained model has **low entropy** on predictable text ("The cat sat on the ___") and **high entropy** on ambiguous text ("The ___").

**Connection to compression:** entropy is the theoretical minimum number of bits needed to encode a message from a source. A perfect compressor achieves entropy. An LLM is essentially a text compressor — lower perplexity = better compression.`},{heading:"Joint, Conditional & Mutual Information",body:`**Joint entropy** H(X,Y): uncertainty of both X and Y together
H(X,Y) ≤ H(X) + H(Y), with equality iff X and Y are independent

**Conditional entropy** H(Y|X): remaining uncertainty about Y after observing X
H(Y|X) = H(X,Y) - H(X)

**Mutual information** I(X;Y): how much knowing X reduces uncertainty about Y
I(X;Y) = H(Y) - H(Y|X) = H(X) - H(X|Y)

**In LLMs:**
• H(next_token | context) is what the model tries to minimize
• More context → lower conditional entropy → better predictions
• Mutual information between distant tokens captures long-range dependencies
• Attention mechanisms effectively compute which tokens have high mutual information with the current token

**Chain rule of entropy:**
H(X₁, X₂, ..., Xₙ) = Σᵢ H(Xᵢ | X₁, ..., Xᵢ₋₁)

This is exactly how autoregressive LLMs decompose sequence probability:
log P(sequence) = Σₜ log P(token_t | tokens_<t)`}],questions:[{q:"Compute the entropy of a distribution P = [0.25, 0.25, 0.25, 0.25] (4 equally likely outcomes). Then compute for P = [0.97, 0.01, 0.01, 0.01].",a:"Uniform: H = -4×(0.25 × log₂ 0.25) = -4×(0.25 × -2) = 2 bits. This makes sense: you need exactly 2 bits to specify one of 4 equally likely outcomes (00, 01, 10, 11). Near-certain: H = -(0.97×log₂ 0.97 + 3×0.01×log₂ 0.01) ≈ -(0.97×(-0.044) + 3×0.01×(-6.644)) ≈ 0.043 + 0.199 ≈ 0.242 bits. Much lower entropy because there's very little uncertainty.",hint:"H = -Σ p(x) log₂ p(x). For the uniform case, log₂(0.25) = -2.",check:l=>l.includes("2")&&(l.includes("0.24")||l.includes("0.242")||l.includes("0.2"))},{q:"An LLM assigns probabilities [0.7, 0.2, 0.05, 0.05] to four candidate next tokens. What is the self-information (in nats, using ln) of each?",a:"-ln(0.7) ≈ 0.36 nats, -ln(0.2) ≈ 1.61 nats, -ln(0.05) ≈ 3.00 nats, -ln(0.05) ≈ 3.00 nats. The rare tokens carry much more information (surprise). If the correct token has probability 0.05, the loss for that position is 3.0 nats — the model was very surprised. Note: cross-entropy loss uses natural log (nats) in practice, not log₂ (bits).",hint:"Self-information = -ln(probability). Use natural log.",check:l=>{const r=l.replace(/\s/g,"");return(r.includes("0.36")||r.includes("0.35"))&&(r.includes("1.6")||r.includes("1.61"))&&r.includes("3.0")}},{q:"Why is entropy related to compression, and what does this have to do with LLMs?",a:"Shannon's source coding theorem proves that entropy H(P) is the theoretical minimum average number of bits needed per symbol to losslessly compress data from source P. An LLM trained to minimize cross-entropy is learning a compression model of language — it finds patterns and redundancies to 'predict' (compress) the next token. Lower perplexity means better compression. In fact, a perfect language model would achieve compression equal to the true entropy of language. This is why some researchers view LLMs fundamentally as compression algorithms.",hint:"Think about what it means to 'predict' the next token well vs. to 'compress' text well.",check:l=>{const r=l.toLowerCase();return r.includes("compress")&&(r.includes("minimum")||r.includes("bits")||r.includes("predict")||r.includes("perplexity"))}}]},{id:"kl",icon:"D",color:"#B91C1C",title:"Cross-Entropy & KL Divergence",subtitle:"Measuring the gap between distributions — the loss function and the RLHF penalty",resources:[{type:"infographic",title:"Chris Olah — Visual Information Theory (CE & KL sections)",url:"https://colah.github.io/posts/2015-09-Visual-Information/"},{type:"infographic",title:"TensorTonic — KL Divergence (interactive Gaussian explorer)",url:"https://www.tensortonic.com/ml-math/information-theory/kl-divergence"},{type:"infographic",title:"Aimless Agents — manipulate distributions, watch KL update",url:"https://aimless-agents.github.io/articles/2021-03/cekl"},{type:"read",title:"Giridharan — KL Divergence Powers Every Stage of LLM Dev",url:"https://medium.com/@AdithyaGiridharan/kl-divergence-the-one-metric-that-quietly-powers-every-stage-of-llm-development-d5cb01b93e4b"},{type:"read",title:"Brenndoerfer — KL Divergence Penalty in RLHF (implementation)",url:"https://mbrenndoerfer.com/writing/kl-divergence-penalty-rlhf-training"},{type:"read",title:"Floating Bytes — Cross-Entropy ↔ GPT Models (full derivation)",url:"https://saraswatmks.github.io/2026/02/cross-entropy-likelihood.html"},{type:"read",title:"Cameron Wolfe — DPO (derives from KL-constrained RLHF)",url:"https://cameronrwolfe.substack.com/p/direct-preference-optimization"},{type:"video",title:"StatQuest — Cross Entropy for Neural Networks",url:"https://www.youtube.com/watch?v=6ArSys5qHAU"},{type:"video",title:"StatQuest — Entropy, Clearly Explained",url:"https://www.youtube.com/watch?v=YtebGVx-Fxw"}],content:[{heading:"Cross-Entropy — The Universal Loss",body:`**Cross-entropy** measures the average surprise when using distribution Q to encode data from distribution P:

**H(P, Q) = -Σᵢ P(xᵢ) log Q(xᵢ)**

If P = true distribution and Q = model's prediction:
• When Q = P (perfect model): H(P,Q) = H(P) = entropy (minimum possible loss)
• When Q ≠ P: H(P,Q) > H(P) — the "extra bits" are the cost of using the wrong distribution

**In LLM training:**
P = one-hot vector [0, 0, ..., 1, ..., 0] (true next token)
Q = softmax output [0.01, 0.02, ..., 0.8, ..., 0.005]

H(P, Q) = -1 × log(0.8) = 0.223 nats

Since P is one-hot, cross-entropy simplifies to: **-log Q(correct token)**

This is exactly the cross-entropy loss you see in PyTorch:
loss = F.cross_entropy(logits, target)`},{heading:"KL Divergence — Distance Between Distributions",body:`**KL divergence** measures how different Q is from P:

**D_KL(P || Q) = Σᵢ P(xᵢ) log(P(xᵢ) / Q(xᵢ))**

**Key relationship:**
**H(P, Q) = H(P) + D_KL(P || Q)**

Cross-entropy = entropy + KL divergence

Since H(P) is constant (doesn't depend on model), minimizing cross-entropy = minimizing KL divergence.

**Properties of KL divergence:**
• **D_KL ≥ 0** always (Gibbs' inequality / Jensen's inequality)
• **D_KL = 0** iff P = Q (distributions are identical)
• **NOT symmetric:** D_KL(P||Q) ≠ D_KL(Q||P) in general

**Forward KL** D_KL(P||Q): "mean-seeking" — Q tries to cover everywhere P has mass. Used in supervised learning (cross-entropy loss).
**Reverse KL** D_KL(Q||P): "mode-seeking" — Q concentrates on the highest mode of P. Used in variational inference (VAEs).`},{heading:"KL Divergence in LLM Systems",body:`KL divergence appears at every stage of modern LLM development:

**1. Pre-training:**
Loss = -Σ log P_θ(token_t | context) = H(P_data, P_θ) = H(P_data) + D_KL(P_data || P_θ)
Minimizing cross-entropy loss = minimizing KL divergence from the true data distribution.

**2. RLHF — The KL Penalty:**
reward_total = reward_model(output) - **β × D_KL(π_θ || π_ref)**

The KL term prevents the aligned model (π_θ) from drifting too far from the pre-trained model (π_ref). Without this:
• Model finds "reward hacks" — outputs that game the reward model
• Model loses general capabilities learned during pre-training

β controls the tradeoff: higher β → more conservative (stays closer to pre-trained).

**3. Knowledge Distillation:**
L = D_KL(P_teacher || P_student)
Student learns to match teacher's full probability distribution, not just the top prediction.

**4. DPO (Direct Preference Optimization):**
Derived by solving the KL-constrained RLHF objective analytically. The DPO loss implicitly enforces a KL constraint without needing a separate reward model.

**5. VAEs:**
ELBO = E[log P(x|z)] - D_KL(Q(z|x) || P(z))
The KL term regularizes the latent space to be close to a standard Gaussian.`},{heading:"The Grand Unification",body:`The deepest insight in ML math:

**Minimize cross-entropy = Maximize likelihood = Minimize KL divergence**

All three are different views of the same optimization:

argmin_θ H(P, Q_θ) = argmin_θ -Σ log Q_θ(yᵢ) = argmin_θ D_KL(P || Q_θ)

**The full chain through LLM training:**
1. **Bayes:** learning = updating beliefs with evidence
2. **Distributions:** model outputs a categorical distribution via softmax
3. **MLE:** find parameters maximizing P(data|θ)
4. **Cross-entropy loss:** = negative log-likelihood = our training objective
5. **KL divergence:** cross-entropy - entropy = "wasted bits" from imperfect model
6. **Perplexity:** exp(cross-entropy) = how "surprised" the model is

When you call **loss.backward()** in PyTorch, you are:
• Computing gradients of cross-entropy (information theory)
• Which equals negative log-likelihood gradients (MLE)
• Which minimizes KL divergence from the true distribution (information theory)
• Via the chain rule through softmax (Bayes → categorical distribution)

It's all one thing, viewed from different angles.`}],questions:[{q:"P = [0.5, 0.5], Q = [0.9, 0.1]. Compute D_KL(P || Q) using natural log.",a:"D_KL(P||Q) = 0.5×ln(0.5/0.9) + 0.5×ln(0.5/0.1) = 0.5×ln(0.556) + 0.5×ln(5.0) = 0.5×(-0.588) + 0.5×(1.609) = -0.294 + 0.805 = 0.511 nats. This is positive as expected (KL ≥ 0). Q is a poor approximation of P — it puts 90% probability on one outcome when the true distribution is uniform.",hint:"D_KL(P||Q) = Σ P(x) ln(P(x)/Q(x)). Compute each term separately.",check:l=>{const r=l.replace(/\s/g,"");return r.includes("0.51")||r.includes("0.511")}},{q:"In RLHF, what would happen if you removed the KL penalty (set β = 0)?",a:"Without the KL penalty, the model would be optimized purely for the reward model's score. This leads to 'reward hacking' — the model discovers degenerate outputs that score highly on the reward model but are nonsensical or manipulative to humans. It would also lose the general language capabilities learned during pre-training, producing fluent-sounding but hollow outputs. The model would collapse to a narrow distribution that exploits weaknesses in the reward model. The KL penalty acts as a regularizer that keeps the aligned model grounded in its pre-trained knowledge.",hint:"Think about what optimizing purely for a proxy reward signal would do.",check:l=>{const r=l.toLowerCase();return(r.includes("reward hack")||r.includes("exploit")||r.includes("game")||r.includes("degenerat")||r.includes("collapse"))&&(r.includes("drift")||r.includes("lose")||r.includes("pre-train")||r.includes("regulariz"))}},{q:"Prove that minimizing cross-entropy H(P,Q) w.r.t. Q is equivalent to minimizing D_KL(P||Q).",a:"H(P,Q) = -Σ P(x) log Q(x). We know H(P,Q) = H(P) + D_KL(P||Q). Since H(P) = -Σ P(x) log P(x) is a constant with respect to Q (it only depends on the true distribution P, not the model Q), minimizing H(P,Q) over Q is the same as minimizing H(P) + D_KL(P||Q) over Q, which equals minimizing D_KL(P||Q) over Q. The entropy term H(P) shifts the loss by a constant but doesn't change which Q minimizes it.",hint:"H(P,Q) = H(P) + D_KL(P||Q). Which of these terms depends on Q?",check:l=>{const r=l.toLowerCase();return r.includes("constant")&&(r.includes("h(p)")||r.includes("entropy"))&&(r.includes("not depend")||r.includes("doesn't depend")||r.includes("independent")||r.includes("fixed"))}},{q:"Why is KL divergence asymmetric? Give an intuitive explanation of forward KL vs reverse KL.",a:"KL divergence is asymmetric because it measures how much 'information is lost' when using Q instead of P, which is different from using P instead of Q. Forward KL D_KL(P||Q) penalizes Q wherever P has mass — so Q must 'cover' all of P's support, making it 'mean-seeking' (spread out to cover everything). Reverse KL D_KL(Q||P) penalizes Q wherever Q has mass but P doesn't — so Q avoids placing mass where P is zero, making it 'mode-seeking' (concentrating on P's peaks). In supervised training (cross-entropy), we use forward KL. In VAEs, we use reverse KL for the latent space.",hint:"Think about what each version penalizes: where does the 'penalty' come from in each direction?",check:l=>{const r=l.toLowerCase();return(r.includes("mean-seeking")||r.includes("cover")||r.includes("spread"))&&(r.includes("mode-seeking")||r.includes("concentrat")||r.includes("peak"))}}]}];function hh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")},M=()=>E("revealed"),p=()=>{var S;E("idle"),U(""),(S=A.current)==null||S.focus()};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:S=>U(S.target.value),onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal the answer."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:M,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function ph({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=Rr.reduce((d,g)=>d+g.content.length,0),P=Math.round(b.size/A*100),M=d=>q(K===d?null:d),p=(d,g)=>{g.stopPropagation();const N=new Set(b);N.has(d)?N.delete(d):N.add(d),U(N)},S=d=>D[d]||"learn",G=d=>d.split(`
`).map((g,N)=>{if(g==="")return a.jsx("div",{style:{height:8}},N);const v=g.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:v.map((z,C)=>C%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:z},C):a.jsx("span",{children:z},C))},N)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .sec-card{transition:all .3s cubic-bezier(.4,0,.2,1)}.sec-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}
        .block-row{transition:all .2s;cursor:pointer;border-radius:8px}.block-row:hover{background:rgba(0,0,0,.02)}
        .chk{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}
        .chk.done{background:#059669;border-color:#059669;color:white}
        .arr{transition:transform .25s;font-size:16px;color:#aaa}
        .pfill{transition:width .5s cubic-bezier(.4,0,.2,1)}
        .tab-btn{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}
        .tab-btn.active{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tab-btn:not(.active){background:transparent;color:#888}.tab-btn:not(.active):hover{color:#555}
        .res-link{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}
        .res-link:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}
        .type-badge{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}
        textarea:focus{border-color:#7C3AED!important}
      `}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Probability & Information Theory for LLMs"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Bayes → distributions → MLE → entropy → cross-entropy → KL divergence. The grand unification: minimize cross-entropy = maximize likelihood = minimize KL divergence.",a.jsx("br",{}),Rr.length," sections · ",A," concepts · ",Rr.reduce((d,g)=>{var N;return d+(((N=g.questions)==null?void 0:N.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pfill",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #0369A1, #B91C1C)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]}),a.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Jc).map(([d,g])=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#777"},children:[a.jsxs("span",{className:"type-badge",style:{background:g.bg,color:g.color},children:[g.emoji," ",g.label]}),d==="infographic"&&"— Primary",d==="read"&&"— Secondary",d==="video"&&"— Supplement"]},d))})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Rr.map(d=>{var C;const g=r===d.id,v=d.content.map((L,T)=>`${d.id}-${T}`).filter(L=>b.has(L)).length,z=S(d.id);return a.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(g?null:d.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:d.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:d.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:d.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:d.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[v,"/",d.content.length]}),a.jsx("span",{className:"arr",style:{transform:g?"rotate(90deg)":"rotate(0)"},children:"›"})]}),g&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tab-btn ${z==="learn"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tab-btn ${z==="practice"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"practice"})),children:["✏️ Practice (",((C=d.questions)==null?void 0:C.length)||0,")"]}),a.jsxs("button",{className:`tab-btn ${z==="deeper"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"deeper"})),children:["🔗 Go Deeper (",d.resources.length,")"]})]}),z==="learn"&&a.jsx("div",{children:d.content.map((L,T)=>{const F=`${d.id}-${T}`,V=K===F,re=b.has(F);return a.jsxs("div",{style:{borderTop:T>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"block-row",onClick:()=>M(F),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`chk ${re?"done":""}`,onClick:ye=>p(F,ye),children:re&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:re?"#aaa":"#2a2a2a",textDecoration:re?"line-through":"none",flex:1},children:L.heading}),a.jsx("span",{className:"arr",style:{transform:V?"rotate(90deg)":"rotate(0)"},children:"›"})]}),V&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${d.color}20`,marginLeft:22},children:G(L.body)})]},T)})}),z==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal. Press Enter to submit."}),(d.questions||[]).map((L,T)=>a.jsx(hh,{...L,color:d.color},`${d.id}-q-${T}`))]}),z==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:d.resources.map((L,T)=>{const F=Jc[L.type];return a.jsxs("a",{href:L.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:F.bg+"55"},children:[a.jsxs("span",{className:"type-badge",style:{background:F.bg,color:F.color},children:[F.emoji," ",F.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:L.title})]},T)})})]})]})]},d.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Learn · Practice · Go Deeper — the math that makes LLMs learn"})]})}const Zc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ar=[{id:"bio",icon:"🧠",color:"#7C3AED",title:"From Biological Neurons to Artificial Ones",subtitle:"The biological inspiration — how real neurons inspired the first computational model",resources:[{type:"infographic",title:"3Blue1Brown — But what is a neural network? (Ch 1)",url:"https://www.3blue1brown.com/lessons/neural-networks"},{type:"infographic",title:"TensorFlow Playground — build a network live",url:"https://playground.tensorflow.org/"},{type:"read",title:"Michael Nielsen — Neural Networks and Deep Learning (Ch 1)",url:"http://neuralnetworksanddeeplearning.com/chap1.html"},{type:"read",title:"Wikipedia — History of the Perceptron",url:"https://en.wikipedia.org/wiki/Perceptron#History"},{type:"video",title:"3Blue1Brown — But what is a neural network?",url:"https://www.youtube.com/watch?v=aircAruvnKk"},{type:"video",title:"Welch Labs — Neural Networks Demystified (Part 1)",url:"https://www.youtube.com/watch?v=bxe2T-V8XRs"}],content:[{heading:"The Biological Neuron",body:`A real neuron in your brain works like this:

**1. Dendrites** receive signals from other neurons (inputs)
**2. Cell body (soma)** integrates all incoming signals (weighted sum)
**3. If the combined signal exceeds a threshold** → the neuron **fires** (activates)
**4. Axon** transmits the output signal to other neurons

**Key properties:**
• Each incoming connection has a different **strength** (like a weight)
• Some connections are **excitatory** (positive) and some are **inhibitory** (negative)
• The neuron either fires or doesn't — it's a **binary decision** (roughly)
• Learning happens by **adjusting connection strengths** (synaptic plasticity)

Your brain has ~86 billion neurons, each with ~7,000 connections. A GPT-4 scale model has ~1.8 trillion parameters (connection weights). Different architectures, but the analogy sparked the field.`},{heading:"The McCulloch-Pitts Neuron (1943)",body:`Warren McCulloch and Walter Pitts created the first mathematical model of a neuron:

**Inputs:** binary (0 or 1)
**Weights:** fixed (not learned)
**Threshold:** θ
**Output:** 1 if weighted sum ≥ θ, else 0

**output = 1  if  Σᵢ wᵢxᵢ ≥ θ**
**output = 0  otherwise**

**They proved:** any logical function (AND, OR, NOT) can be computed by a network of these neurons. This was groundbreaking — it showed that **computation and cognition could be formalized mathematically**.

**Limitation:** weights were fixed, not learned. The model showed what neurons *could* compute, but not how they *learn* to compute it. That required the perceptron.`},{heading:"Frank Rosenblatt's Perceptron (1958)",body:`Rosenblatt's breakthrough: **neurons that learn from data**.

The perceptron added:
• **Learnable weights** — adjusted automatically based on errors
• **A learning algorithm** — the perceptron learning rule
• **Hardware implementation** — the Mark I Perceptron machine at Cornell

The New York Times reported in 1958 that the perceptron was "the embryo of an electronic computer that [the Navy] expects will be able to walk, talk, see, write, reproduce itself and be conscious of its existence."

The hype was premature, but the core idea — **a simple computational unit that learns by adjusting weights** — remains the foundation of every neural network today. Every neuron in GPT-4 is a descendant of Rosenblatt's perceptron.`}],questions:[{q:"List three parallels between a biological neuron and an artificial perceptron.",a:"1) Dendrites receiving signals ↔ inputs xᵢ. 2) Synaptic strengths ↔ learnable weights wᵢ (stronger connections = higher weights). 3) Threshold for firing ↔ activation function (step function). Additional parallels: cell body summing signals ↔ weighted sum Σwᵢxᵢ, axon transmitting output ↔ output signal, synaptic plasticity (learning) ↔ weight update rule.",hint:"Think about inputs, processing, and outputs in both systems.",check:l=>{const r=l.toLowerCase();return(r.includes("weight")||r.includes("strength"))&&(r.includes("sum")||r.includes("input")||r.includes("dendrit"))&&(r.includes("threshold")||r.includes("activat")||r.includes("fire"))}},{q:"What was the key limitation of the McCulloch-Pitts neuron that the perceptron solved?",a:"The McCulloch-Pitts neuron had fixed, manually-set weights — it couldn't learn from data. You had to hand-design the weights for each task. Rosenblatt's perceptron introduced a learning algorithm that automatically adjusts weights based on errors, enabling the system to learn from examples rather than requiring manual programming.",hint:"What could the M-P neuron NOT do that the perceptron could?",check:l=>{const r=l.toLowerCase();return(r.includes("fixed")||r.includes("manual")||r.includes("couldn't learn")||r.includes("not learn"))&&(r.includes("learn")||r.includes("adjust")||r.includes("update"))}}]},{id:"model",icon:"⊕",color:"#0369A1",title:"The Perceptron Model",subtitle:"The math — weighted sum, bias, step function, and the decision boundary",resources:[{type:"infographic",title:"Perceptron Demo — train on your own inputs live",url:"https://perceptrondemo.com/"},{type:"infographic",title:"Perceptron Viz — watch the learning algorithm animate",url:"https://vinizinho.net/projects/perceptron-viz/"},{type:"infographic",title:"Karthik's Blog — Desmos perceptron weight explorer",url:"https://karthikvedula.com/2024/01/05/visualizing-the-perceptron-learning-algorithm/"},{type:"read",title:"Dive into Deep Learning — Ch 3: Linear Neural Networks",url:"https://d2l.ai/chapter_linear-classification/index.html"},{type:"read",title:"Sebastian Raschka — Single-Layer Neural Networks",url:"https://sebastianraschka.com/Articles/2015_singlelayer_neurons.html"},{type:"video",title:"StatQuest — Neural Networks Pt. 1: Inside the Black Box",url:"https://www.youtube.com/watch?v=CqOfi41LfDw"},{type:"video",title:"The Coding Train — Perceptron (Coding Challenge)",url:"https://www.youtube.com/watch?v=ntKn5TPHHAk"}],content:[{heading:"The Math — Weighted Sum + Activation",body:`A perceptron computes:

**z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b**

Then applies a **step function**:
**ŷ = 1  if z ≥ 0**
**ŷ = 0  if z < 0**

**Components:**
• **x₁, ..., xₙ** = input features (e.g., pixel values, word counts)
• **w₁, ..., wₙ** = learnable weights (how important each feature is)
• **b** = bias (the threshold, shifted so we compare to 0 instead of θ)
• **z** = pre-activation (the "raw score")
• **ŷ** = output prediction (0 or 1)

**In vector notation:**
z = **w** · **x** + b = wᵀx + b

This is a **dot product** — the same operation at the heart of attention in Transformers! The perceptron is the simplest possible neural network: one neuron, one dot product, one activation function.`},{heading:"The Bias Term — Why It Matters",body:`Without bias, the decision boundary must pass through the origin (0, 0). This is too restrictive.

**Without bias:** w₁x₁ + w₂x₂ = 0 → line through origin
**With bias:** w₁x₁ + w₂x₂ + b = 0 → line anywhere in the plane

The bias shifts the decision boundary. Think of it as the neuron's "default tendency":
• b > 0: neuron tends to fire (needs strong negative evidence to stay off)
• b < 0: neuron tends to stay off (needs strong positive evidence to fire)

**Trick for clean notation:** add a "dummy" input x₀ = 1 with weight w₀ = b:
z = w₀(1) + w₁x₁ + ... + wₙxₙ = **w** · **x̃**

Now the bias is just another weight. This is how it's often implemented in code.`},{heading:"The Decision Boundary — Geometry",body:`The perceptron divides input space with a **hyperplane**:

**w₁x₁ + w₂x₂ + b = 0**

In 2D: this is a straight **line**
In 3D: this is a flat **plane**
In nD: this is a **hyperplane**

**On one side** (z > 0): predict class 1
**On the other** (z < 0): predict class 0

**The weight vector w is perpendicular to the decision boundary.** It points toward the "positive" region. This is why:
• Larger |w| → further from origin
• Direction of w → orientation of the boundary

**Example:** w = [2, 1], b = -3
Decision boundary: 2x₁ + x₂ - 3 = 0 → x₂ = -2x₁ + 3

Points above this line → class 1. Points below → class 0.

**The perceptron is a linear classifier.** It can only learn boundaries that are straight lines (or hyperplanes). This is both its strength (simplicity) and its fatal weakness (can't learn XOR).`},{heading:"Computing Logic Gates",body:`A perceptron can compute basic logic gates — proving it's a real computational unit.

**AND gate:** both inputs must be 1
w = [1, 1], b = -1.5
• (0,0): 0+0-1.5 = -1.5 → 0 ✓
• (1,0): 1+0-1.5 = -0.5 → 0 ✓
• (0,1): 0+1-1.5 = -0.5 → 0 ✓
• (1,1): 1+1-1.5 = 0.5 → 1 ✓

**OR gate:** at least one input must be 1
w = [1, 1], b = -0.5
• (0,0): -0.5 → 0 ✓
• (1,0): 0.5 → 1 ✓
• (0,1): 0.5 → 1 ✓
• (1,1): 1.5 → 1 ✓

**NOT gate:** invert a single input
w = [-1], b = 0.5
• (0): 0.5 → 1 ✓
• (1): -0.5 → 0 ✓

**NAND gate** is universal — any computation can be built from NANDs. A perceptron can compute NAND. So in theory, a network of perceptrons can compute anything.`}],questions:[{q:"A perceptron has weights w = [3, -2] and bias b = 1. What does it output for input x = [2, 4]?",a:"z = 3×2 + (-2)×4 + 1 = 6 - 8 + 1 = -1. Since z = -1 < 0, the step function outputs 0. The input [2, 4] is classified as class 0.",hint:"Compute z = w·x + b = w₁x₁ + w₂x₂ + b, then apply the step function.",check:l=>{const r=l.toLowerCase();return(l.includes("0")||l.includes("-1"))&&(r.includes("class 0")||r.includes("output")||r.includes("z = -1")||r.includes("negative"))}},{q:"Write the equation of the decision boundary for w = [2, -1], b = 4. What does this look like geometrically?",a:"The decision boundary is: 2x₁ - x₂ + 4 = 0, which rearranges to x₂ = 2x₁ + 4. This is a straight line with slope 2 and y-intercept 4. Points above the line (where 2x₁ - x₂ + 4 > 0) are classified as class 1, and points below are class 0.",hint:"Set w·x + b = 0 and solve for x₂ in terms of x₁.",check:l=>{const r=l.toLowerCase();return(l.includes("2x")||l.includes("2x₁"))&&(r.includes("line")||r.includes("straight")||r.includes("slope"))}},{q:"Design a perceptron (find w₁, w₂, b) that computes the NAND gate: output 0 only when both inputs are 1.",a:"w = [-1, -1], b = 1.5 works. Check: (0,0): 0+0+1.5 = 1.5 → 1 ✓. (1,0): -1+0+1.5 = 0.5 → 1 ✓. (0,1): 0-1+1.5 = 0.5 → 1 ✓. (1,1): -1-1+1.5 = -0.5 → 0 ✓. Alternative: w = [-2, -2], b = 3 also works. Any negative weights with a bias between |w₁| and |w₁|+|w₂| will do.",hint:"NAND outputs 1 for everything except (1,1). Use negative weights so high inputs push z below 0.",check:l=>{const r=l.toLowerCase();return(r.includes("-1")||r.includes("-2"))&&(r.includes("1.5")||r.includes("bias")||r.includes("b ="))}},{q:"Why is the weight vector w perpendicular to the decision boundary?",a:"The decision boundary is the set of points where w·x + b = 0. For any two points x_A and x_B on the boundary: w·x_A + b = 0 and w·x_B + b = 0. Subtracting: w·(x_A - x_B) = 0. The vector (x_A - x_B) lies along the boundary, and its dot product with w is zero — which is the definition of perpendicularity. So w is perpendicular to every vector that lies in the boundary plane.",hint:"Take two points on the boundary, subtract them, and look at the dot product with w.",check:l=>{const r=l.toLowerCase();return(r.includes("dot product")||r.includes("perpendic")||r.includes("orthogonal"))&&(r.includes("zero")||r.includes("= 0")||r.includes("boundary"))}}]},{id:"learn",icon:"⟳",color:"#DC2626",title:"The Perceptron Learning Algorithm",subtitle:"How the perceptron learns from mistakes — the original weight update rule",resources:[{type:"infographic",title:"Perceptron Viz — step-by-step animation of PLA",url:"https://vinizinho.net/projects/perceptron-viz/"},{type:"infographic",title:"Perceptron Demo — interactive training",url:"https://perceptrondemo.com/"},{type:"read",title:"Michael Nielsen — Ch 1: Learning with gradient descent",url:"http://neuralnetworksanddeeplearning.com/chap1.html"},{type:"read",title:"Karpathy — Backprop explained with perceptrons",url:"https://karpathy.medium.com/yes-you-should-understand-backprop-e2f06eab496b"},{type:"video",title:"Karpathy — Building micrograd (from perceptrons up)",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"},{type:"video",title:"The Coding Train — Perceptron Learning Algorithm",url:"https://www.youtube.com/watch?v=ntKn5TPHHAk"}],content:[{heading:"The Algorithm — Learn from Mistakes",body:`The perceptron learning algorithm is beautifully simple:

**Initialize:** w = 0, b = 0 (or small random values)

**For each training example (x, y) where y ∈ {0, 1}:**
1. Compute prediction: ŷ = step(w·x + b)
2. If ŷ = y → correct! Do nothing.
3. If ŷ ≠ y → mistake! Update:
   **w ← w + η(y - ŷ)x**
   **b ← b + η(y - ŷ)**

**Where η is the learning rate** (step size, often = 1 for the classic algorithm).

**Two error cases:**
• **False negative** (ŷ=0, y=1): y-ŷ = 1 → w ← w + ηx → weights increase toward x
• **False positive** (ŷ=1, y=0): y-ŷ = -1 → w ← w - ηx → weights decrease away from x

**Intuition:** When the perceptron misclassifies a point, it nudges the decision boundary toward that point. The boundary "chases" misclassified points until it finds a position that separates all points.`},{heading:"Worked Example — Step by Step",body:`**Data:** Two classes in 2D
Class 1: (2, 3), (1, 1)
Class 0: (-1, -1), (0, -2)

**Initialize:** w = [0, 0], b = 0, η = 1

**Epoch 1:**
Point (2,3), y=1: z = 0+0+0 = 0, ŷ = 1 (z≥0). Correct! No update.
Point (1,1), y=1: z = 0+0+0 = 0, ŷ = 1. Correct!
Point (-1,-1), y=0: z = 0+0+0 = 0, ŷ = 1. WRONG! (ŷ=1, y=0)
  w ← [0,0] + 1×(0-1)×[-1,-1] = [1, 1]
  b ← 0 + 1×(0-1) = -1
Point (0,-2), y=0: z = 0-2-1 = -3, ŷ = 0. Correct!

After epoch 1: w = [1, 1], b = -1
Decision boundary: x₁ + x₂ - 1 = 0 → x₂ = -x₁ + 1

**Check all points:** All correctly classified! Algorithm converges.

In practice, you may need multiple epochs (passes through the data) before convergence.`},{heading:"The Perceptron Convergence Theorem",body:`**Theorem:** If the training data is **linearly separable**, the perceptron learning algorithm **will converge** in a finite number of steps.

**More precisely:** if there exists a weight vector w* with margin γ > 0 that correctly classifies all points, and all data points have norm ≤ R, then the algorithm makes at most **(R/γ)²** mistakes before finding a separating hyperplane.

**What this means:**
• **Guaranteed convergence** for linearly separable data
• Larger **margin** → fewer mistakes → faster convergence
• Larger **data spread** → more mistakes → slower convergence
• The bound (R/γ)² doesn't depend on the dimension! Works in any number of dimensions.

**What this DOESN'T guarantee:**
• Convergence for non-linearly-separable data (it will loop forever)
• Finding the **best** separator (just *a* separator — unlike SVMs which find the max-margin one)
• Speed in practice (the bound can be loose)

**Historical note:** this convergence proof, published by Rosenblatt in 1962, is one of the earliest guarantees in machine learning.`},{heading:"Learning Rate and Practical Details",body:`**Learning rate η:**
• η = 1: the classic perceptron (convergence theorem applies)
• η < 1: smaller updates, smoother convergence but slower
• η > 1: larger updates, can oscillate or overshoot

For the convergence theorem to apply, η doesn't actually matter (just rescales the weights). In practice, η = 1 is standard for the classic perceptron.

**Initialization:**
• w = 0, b = 0: simplest, works with convergence theorem
• Small random values: can help avoid symmetry in multi-neuron networks

**Online vs Batch:**
• **Online (stochastic):** update after each misclassified point (classic perceptron)
• **Batch:** accumulate updates over all points, apply once per epoch (smoother)

**Cycling through data:**
The algorithm makes multiple passes (epochs) through the data. Order can matter — shuffling data between epochs often helps in practice.

**Stopping criteria:**
• All points correctly classified (converged)
• Maximum number of epochs reached (for non-separable data)
• Error rate drops below a threshold`}],questions:[{q:"w = [1, -1], b = 0. The point x = [2, 3] has true label y = 1. The perceptron predicts ŷ = 0. With η = 1, what are the new w and b?",a:"Since ŷ=0 and y=1, this is a false negative. Update: w_new = w + η(y-ŷ)x = [1,-1] + 1×(1-0)×[2,3] = [1+2, -1+3] = [3, 2]. b_new = 0 + 1×(1-0) = 1. New weights: w = [3, 2], b = 1. The boundary shifted toward the misclassified point.",hint:"w_new = w + η(y - ŷ)x. Here y - ŷ = 1 - 0 = 1.",check:l=>{const r=l.replace(/\s/g,"");return r.includes("[3,2]")||r.includes("3")&&r.includes("2")&&r.includes("b=1")}},{q:"The data is: class 1 at (1,1), class 0 at (-1,-1). Can a perceptron separate this? If yes, give one valid set of weights.",a:"Yes, the data is linearly separable. Any hyperplane passing between the two points works. For example: w = [1, 1], b = 0. Check: (1,1): z = 1+1+0 = 2 > 0 → class 1 ✓. (-1,-1): z = -1-1+0 = -2 < 0 → class 0 ✓. Other valid solutions: w = [1, 0], b = 0; w = [0, 1], b = 0; w = [2, 3], b = -1; etc. Any line through the origin with positive slope works.",hint:"Just find a line that separates (1,1) from (-1,-1).",check:l=>{const r=l.toLowerCase();return r.includes("yes")&&(r.includes("w =")||r.includes("weight")||r.includes("[1"))}},{q:"Why does the perceptron learning algorithm loop forever on non-linearly-separable data?",a:"The algorithm only updates weights when it makes a mistake (misclassifies a point). For non-separable data, no straight line can correctly classify all points — there will always be at least one misclassified point. So the algorithm keeps updating: fixing one mistake creates another, and it cycles endlessly through different weight configurations without ever settling on a solution. This is why the convergence theorem requires linear separability.",hint:"If no perfect line exists, what happens when the algorithm tries to fix every mistake?",check:l=>{const r=l.toLowerCase();return(r.includes("no line")||r.includes("no straight")||r.includes("can't")||r.includes("cannot")||r.includes("always"))&&(r.includes("mistake")||r.includes("misclass")||r.includes("cycle")||r.includes("loop"))}}]},{id:"xor",icon:"⊕̸",color:"#B91C1C",title:"The XOR Problem & Minsky's Critique",subtitle:"The fatal flaw that killed perceptron research for a decade — and how it was overcome",resources:[{type:"infographic",title:"TensorFlow Playground — try XOR with 0 hidden layers",url:"https://playground.tensorflow.org/#activation=sigmoid&batchSize=10&dataset=xor&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=&seed=0.55287&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false"},{type:"infographic",title:"TF Playground — XOR with 1 hidden layer (solvable!)",url:"https://playground.tensorflow.org/#activation=sigmoid&batchSize=10&dataset=xor&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4&seed=0.55287&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false"},{type:"read",title:"Minsky & Papert — Perceptrons (historical significance)",url:"https://en.wikipedia.org/wiki/Perceptrons_(book)"},{type:"read",title:"Michael Nielsen — Ch 4: Visual proof NNs compute any function",url:"http://neuralnetworksanddeeplearning.com/chap4.html"},{type:"video",title:"3Blue1Brown — Neural networks (XOR visualization)",url:"https://www.youtube.com/watch?v=aircAruvnKk"}],content:[{heading:"XOR — The Problem",body:`**XOR (exclusive or):** output 1 when inputs differ, 0 when they're the same.

x₁ | x₂ | XOR
---|---|---
0  | 0  |  0
1  | 0  |  1
0  | 1  |  1
1  | 1  |  0

**Try to draw a single straight line separating the 1s from the 0s on a 2D plot:**
• (0,0)=0 and (1,1)=0 are "class 0" — they're on **opposite corners**
• (1,0)=1 and (0,1)=1 are "class 1" — also on **opposite corners**

**It's impossible.** No single line can separate opposite corners of a square. The data is **not linearly separable**.

This means a single perceptron **cannot learn XOR**. Period. No matter how long you train it, no matter what learning rate you use. The architecture fundamentally lacks the capacity.`},{heading:"Minsky & Papert — The AI Winter",body:`In 1969, Marvin Minsky and Seymour Papert published "Perceptrons," a rigorous mathematical analysis proving that single-layer perceptrons cannot compute XOR and many other functions.

**Their key results:**
• A single perceptron cannot compute **XOR** (or parity in general)
• A single perceptron cannot determine **connectedness** (is a shape one piece or two?)
• These limitations are **fundamental** to linear classifiers, not bugs to be fixed

**The devastating impact:**
• Research funding for neural networks dried up almost completely
• The field entered the first "AI Winter" (roughly 1969–1986)
• Researchers pivoted to symbolic AI and expert systems

**What they got wrong (or what was misunderstood):**
• The book mostly analyzed *single-layer* perceptrons
• Minsky and Papert acknowledged that multi-layer networks could solve XOR
• But they were skeptical that effective learning algorithms for multi-layer networks could be found
• They turned out to be wrong — backpropagation (rediscovered in 1986) solved this`},{heading:"The Solution — Multi-Layer Perceptrons",body:`XOR can be decomposed into operations a single perceptron CAN compute:

**XOR(x₁, x₂) = AND(OR(x₁, x₂), NAND(x₁, x₂))**

"At least one input is 1" AND "not both inputs are 1"

**Network architecture:**
Layer 1 (hidden): two neurons
  h₁ = OR(x₁, x₂):  w=[1,1], b=-0.5
  h₂ = NAND(x₁, x₂): w=[-1,-1], b=1.5

Layer 2 (output): one neuron
  out = AND(h₁, h₂): w=[1,1], b=-1.5

**Verify:**
(0,0): h₁=0, h₂=1 → AND(0,1) = 0 ✓
(1,0): h₁=1, h₂=1 → AND(1,1) = 1 ✓
(0,1): h₁=1, h₂=1 → AND(1,1) = 1 ✓
(1,1): h₁=1, h₂=0 → AND(1,0) = 0 ✓

**The hidden layer creates a NEW representation** where the data IS linearly separable. This is the fundamental insight of deep learning: each layer transforms the data into a more useful representation.`},{heading:"The Universal Approximation Theorem",body:`**Theorem (Cybenko, 1989; Hornik, 1991):**
A neural network with a single hidden layer containing a finite number of neurons can **approximate any continuous function** to arbitrary accuracy, given sufficient neurons.

**What this means:**
• Neural networks are **universal function approximators**
• ANY function (not just linear ones) can be learned
• The XOR limitation was purely about *single-layer* networks

**Caveats:**
• The theorem says a solution **exists**, not that gradient descent will **find** it
• The required number of hidden neurons may be **exponentially large**
• Deeper networks (more layers, fewer neurons) are often more **efficient** in practice
• The theorem says nothing about **generalization** — fitting training data ≠ working on new data

**This is why depth matters.** While a single hidden layer is theoretically sufficient, deeper networks can represent the same functions with exponentially fewer neurons. This is the motivation for "deep" learning — and ultimately why GPT has 96 layers, not 1 layer with 96 billion neurons.`}],questions:[{q:"Prove that XOR is not linearly separable by showing that no line w₁x₁ + w₂x₂ + b = 0 can separate the four XOR data points.",a:"The four constraints: (0,0)→0: b < 0. (1,0)→1: w₁ + b ≥ 0, so w₁ ≥ -b > 0. (0,1)→1: w₂ + b ≥ 0, so w₂ ≥ -b > 0. (1,1)→0: w₁ + w₂ + b < 0. But from constraints 2 and 3: w₁ > 0 and w₂ > 0, so w₁ + w₂ > 0. From constraint 1: b < 0. We need w₁ + w₂ + b < 0, meaning b < -(w₁+w₂). But constraint 2 requires b > -w₁ and constraint 3 requires b > -w₂. Since w₁, w₂ > 0: b > -w₁ > -(w₁+w₂), contradicting b < -(w₁+w₂). Contradiction → no solution exists.",hint:"Write out the 4 inequalities and show they can't all be satisfied simultaneously.",check:l=>{const r=l.toLowerCase();return r.includes("contradict")||r.includes("no")&&(r.includes("solution")||r.includes("possible")||r.includes("satisfy"))}},{q:"How does the hidden layer in a 2-layer network make XOR solvable? What is the hidden layer 'doing' geometrically?",a:"The hidden layer transforms the 2D input into a new 2D representation where the XOR classes become linearly separable. Geometrically, the two hidden neurons each draw a line in input space. The first neuron (OR) separates (0,0) from everything else. The second neuron (NAND) separates (1,1) from everything else. In the hidden representation space [h₁, h₂], the four inputs map to: (0,0)→[0,1], (1,0)→[1,1], (0,1)→[1,1], (1,1)→[1,0]. Now class 1 points are at [1,1] and class 0 points are at [0,1] and [1,0] — and a line CAN separate them. The hidden layer warps the space to make the problem linearly separable.",hint:"Plot the original 4 points and then the transformed 4 points after the hidden layer.",check:l=>{const r=l.toLowerCase();return(r.includes("transform")||r.includes("new representation")||r.includes("warp")||r.includes("map"))&&(r.includes("linearly separable")||r.includes("separate"))}},{q:"Why is the universal approximation theorem both extremely powerful and somewhat misleading?",a:"Powerful: it proves that neural networks can represent ANY continuous function — there's no inherent limitation in expressiveness. Any pattern in data can theoretically be captured. Misleading: (1) it doesn't guarantee that training (gradient descent) will find the right solution, (2) the required number of neurons might be exponentially large, making a single hidden layer impractical, (3) it says nothing about generalization — perfectly fitting training data doesn't mean the model works on new data. This is why depth, regularization, and training techniques matter as much as the architecture's theoretical capacity.",hint:"Think about the difference between 'a solution exists' and 'we can find it efficiently.'",check:l=>{const r=l.toLowerCase();return(r.includes("exist")||r.includes("represent")||r.includes("express"))&&(r.includes("find")||r.includes("gradient")||r.includes("generali")||r.includes("practical")||r.includes("exponential"))}}]},{id:"bridge",icon:"→→",color:"#15803D",title:"From Perceptrons to Modern Neural Networks",subtitle:"The bridge — what changes when you stack perceptrons and use smooth activations",resources:[{type:"infographic",title:"NN-Visual — forward & backward propagation visualizer",url:"https://www.nn-visual.com/"},{type:"infographic",title:"Adam Harley — Interactive CNN/MLP visualization",url:"https://adamharley.com/nn_vis/"},{type:"infographic",title:"IAExplore — 3D neural network simulator",url:"https://www.iaexplore.com/neural-network-sim/"},{type:"read",title:"Michael Nielsen — How backprop works (Ch 2)",url:"http://neuralnetworksanddeeplearning.com/chap2.html"},{type:"read",title:"Colah — Calculus on Computational Graphs",url:"https://colah.github.io/posts/2015-08-Backprop/"},{type:"read",title:"d2l.ai — MLPs (Ch 5)",url:"https://d2l.ai/chapter_multilayer-perceptrons/index.html"},{type:"video",title:"Karpathy — Building micrograd (perceptrons → backprop)",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"},{type:"video",title:"3Blue1Brown — Gradient descent (Ch 2)",url:"https://www.youtube.com/watch?v=IHZwWFHWa-w"}],content:[{heading:"Problem #1 — The Step Function Can't Do Backprop",body:`The perceptron's step function has a **critical flaw** for learning in multi-layer networks:

**Step function derivative = 0 everywhere** (except at z=0 where it's undefined)

Why this kills gradient descent:
∂Loss/∂w = ∂Loss/∂ŷ × **∂ŷ/∂z** × ∂z/∂w

If ∂ŷ/∂z = 0, the entire gradient is zero. **No learning signal flows backward.** The chain rule hits a dead end.

**Solution: smooth activation functions that have nonzero gradients:**
• **Sigmoid:** σ(z) = 1/(1+e⁻ᶻ). Output ∈ (0,1). Derivative = σ(z)(1-σ(z)). Max derivative = 0.25.
• **Tanh:** output ∈ (-1,1). Derivative = 1 - tanh²(z). Max derivative = 1.
• **ReLU:** max(0,z). Derivative = 0 if z<0, 1 if z>0. Simple, effective, widely used.

Replacing the step function with sigmoid turns a perceptron into a **logistic regression unit** — the building block of modern neural networks.`},{heading:"Problem #2 — Single Layer Can't Learn Complex Functions",body:`A single perceptron can only learn **linear decision boundaries**. Real-world data is rarely linearly separable.

**Solution: stack layers.**

**Multi-Layer Perceptron (MLP):**
Input → Hidden Layer 1 → Hidden Layer 2 → ... → Output

Each hidden layer:
1. Applies a linear transformation: z = Wx + b
2. Applies a nonlinear activation: a = σ(z)

**Why nonlinearity is essential:**
Without activation functions: layer₂(layer₁(x)) = W₂(W₁x + b₁) + b₂ = W₂W₁x + (W₂b₁+b₂)
This is still just a single linear transformation! Stacking linear layers without activations collapses to one layer.

The activation function between layers is what gives the network its **nonlinear power**. Each layer transforms the representation:
• Layer 1: learns simple features (edges, basic patterns)
• Layer 2: combines simple features into complex ones
• Layer N: combines everything into task-specific decisions

This **hierarchical feature learning** is the fundamental insight of deep learning.`},{heading:"Problem #3 — How to Train Multi-Layer Networks",body:`The perceptron learning rule only works for single-layer networks. For multi-layer networks, how do you know which hidden neuron made a mistake?

**Solution: Backpropagation** (Rumelhart, Hinton & Williams, 1986)

The idea: use the **chain rule** to compute the gradient of the loss with respect to every weight in the network.

**Forward pass:** compute outputs layer by layer
x → h₁ = σ(W₁x + b₁) → h₂ = σ(W₂h₁ + b₂) → ŷ = σ(W₃h₂ + b₃) → Loss

**Backward pass:** compute gradients layer by layer, from output to input
∂L/∂W₃ = ∂L/∂ŷ × ∂ŷ/∂z₃ × ∂z₃/∂W₃
∂L/∂W₂ = ∂L/∂ŷ × ∂ŷ/∂z₃ × ∂z₃/∂h₂ × ∂h₂/∂z₂ × ∂z₂/∂W₂

Each weight gets a gradient → gradient descent updates all weights simultaneously.

**This was the breakthrough that ended the AI Winter.** Multi-layer networks could now be trained effectively, and the XOR problem (and far more complex problems) were solvable.`},{heading:"The Perceptron's DNA in Modern LLMs",body:`Every concept from the perceptron survives in modern Transformers:

**Perceptron → Modern equivalent:**
• Weighted sum (w·x + b) → **linear projections** (Wx + b) everywhere: Q/K/V, FFN layers
• Step function → **smooth activations** (GELU, SwiGLU) + **softmax** for output
• Single neuron → **billions of neurons** in deep layers
• Linear decision boundary → **nonlinear decision boundaries** via deep composition
• Perceptron learning rule → **backpropagation + Adam optimizer**
• Learning rate → **learning rate schedules** (warmup + cosine decay)
• Binary classification → **next-token prediction** over 50K+ vocabulary

**The conceptual chain:**
Perceptron (1958) → MLP (1960s) → Backprop (1986) → Deep Networks (2006) → Transformers (2017) → GPT (2018) → ChatGPT (2022)

Every GPT model is a network of neurons that:
1. Compute weighted sums (matrix multiplications)
2. Apply activation functions (GELU/SwiGLU)
3. Learn via gradient descent (backpropagation)

Understanding the perceptron means understanding the **atom** from which all modern AI is built.`}],questions:[{q:"Why can't you use gradient descent with a step function activation? What specific mathematical property fails?",a:"The step function has a derivative of 0 everywhere (except at the discontinuity where it's undefined). Gradient descent requires computing ∂Loss/∂w, which uses the chain rule: ∂Loss/∂w = (∂Loss/∂ŷ)(∂ŷ/∂z)(∂z/∂w). Since ∂ŷ/∂z = 0 for the step function, the entire gradient is zero regardless of the loss. Zero gradient means zero parameter update — the weights never change and the network can't learn. Smooth functions like sigmoid or ReLU have nonzero derivatives, allowing gradient information to flow backward through the network.",hint:"What's the derivative of the step function? What happens when you multiply by it in the chain rule?",check:l=>{const r=l.toLowerCase();return(r.includes("derivative")||r.includes("gradient"))&&(r.includes("zero")||r.includes("0"))&&(r.includes("chain rule")||r.includes("backprop")||r.includes("learn"))}},{q:"Why do you need nonlinear activation functions between layers? What would happen without them?",a:"Without activation functions, stacking N linear layers produces W_N × W_{N-1} × ... × W_1 × x, which is equivalent to a single linear transformation (W_combined × x) because the composition of linear functions is linear. The network would have no more expressive power than a single-layer perceptron, regardless of depth. Nonlinear activations break this linearity, allowing each layer to learn a genuinely new transformation. This is what gives deep networks their power to approximate complex, nonlinear functions.",hint:"What is f(g(x)) when both f and g are linear functions (matrix multiplications)?",check:l=>{const r=l.toLowerCase();return r.includes("linear")&&(r.includes("collapse")||r.includes("equivalent")||r.includes("single")||r.includes("composition")||r.includes("same"))}},{q:"A 2-layer MLP with 10 hidden neurons and sigmoid activation has how many learnable parameters for 5 inputs and 1 output?",a:"Layer 1 (input→hidden): 5 inputs × 10 neurons = 50 weights + 10 biases = 60 parameters. Layer 2 (hidden→output): 10 inputs × 1 neuron = 10 weights + 1 bias = 11 parameters. Total: 60 + 11 = 71 parameters. Note: activation functions (sigmoid) have no learnable parameters — they're fixed functions applied element-wise.",hint:"Count weights (inputs × outputs per layer) and biases (one per neuron) separately.",check:l=>l.includes("71")},{q:"Trace the conceptual lineage from the perceptron to GPT in 5 key steps.",a:"1) Perceptron (1958) — single neuron with learnable weights and step activation. 2) Multi-Layer Perceptrons/Backprop (1986) — multiple layers of neurons with smooth activations, trained end-to-end via the chain rule. 3) Deep Networks (2006-2012) — many layers with ReLU, dropout, batch norm enabled training very deep networks. 4) Transformer (2017) — self-attention mechanism replacing recurrence, enabling parallel processing of sequences. 5) GPT/LLMs (2018-present) — decoder-only Transformers pre-trained on massive text data with next-token prediction (cross-entropy loss = MLE). All still fundamentally: weighted sums → activations → gradient descent.",hint:"Key milestones: learning rule, backprop, depth, attention, scale.",check:l=>{const r=l.toLowerCase();return(r.includes("perceptron")||r.includes("1958"))&&(r.includes("backprop")||r.includes("1986"))&&(r.includes("transformer")||r.includes("attention"))}}]}];function mh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")},M=()=>E("revealed"),p=()=>{var S;E("idle"),U(""),(S=A.current)==null||S.focus()};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:S=>U(S.target.value),onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal the answer."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:M,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function gh({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=Ar.reduce((d,g)=>d+g.content.length,0),P=Math.round(b.size/A*100),M=d=>q(K===d?null:d),p=(d,g)=>{g.stopPropagation();const N=new Set(b);N.has(d)?N.delete(d):N.add(d),U(N)},S=d=>D[d]||"learn",G=d=>d.split(`
`).map((g,N)=>{if(g==="")return a.jsx("div",{style:{height:8}},N);const v=g.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:v.map((z,C)=>C%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:z},C):a.jsx("span",{children:z},C))},N)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .sec-card{transition:all .3s cubic-bezier(.4,0,.2,1)}.sec-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}
        .block-row{transition:all .2s;cursor:pointer;border-radius:8px}.block-row:hover{background:rgba(0,0,0,.02)}
        .chk{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}
        .chk.done{background:#059669;border-color:#059669;color:white}
        .arr{transition:transform .25s;font-size:16px;color:#aaa}
        .pfill{transition:width .5s cubic-bezier(.4,0,.2,1)}
        .tab-btn{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}
        .tab-btn.active{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tab-btn:not(.active){background:transparent;color:#888}.tab-btn:not(.active):hover{color:#555}
        .res-link{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}
        .res-link:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}
        .type-badge{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}
        textarea:focus{border-color:#0369A1!important}
      `}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"NEURAL NETWORK FUNDAMENTALS"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"The Perceptron"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["The atom of neural networks — from biological neurons to the XOR crisis to the birth of deep learning. Every neuron in GPT-4 is a descendant of this 1958 invention.",a.jsx("br",{}),Ar.length," sections · ",A," concepts · ",Ar.reduce((d,g)=>{var N;return d+(((N=g.questions)==null?void 0:N.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pfill",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #0369A1, #15803D)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]}),a.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Zc).map(([d,g])=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#777"},children:[a.jsxs("span",{className:"type-badge",style:{background:g.bg,color:g.color},children:[g.emoji," ",g.label]}),d==="infographic"&&"— Primary",d==="read"&&"— Secondary",d==="video"&&"— Supplement"]},d))})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ar.map(d=>{var C;const g=r===d.id,v=d.content.map((L,T)=>`${d.id}-${T}`).filter(L=>b.has(L)).length,z=S(d.id);return a.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(g?null:d.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:d.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:d.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:d.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:d.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[v,"/",d.content.length]}),a.jsx("span",{className:"arr",style:{transform:g?"rotate(90deg)":"rotate(0)"},children:"›"})]}),g&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tab-btn ${z==="learn"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tab-btn ${z==="practice"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"practice"})),children:["✏️ Practice (",((C=d.questions)==null?void 0:C.length)||0,")"]}),a.jsxs("button",{className:`tab-btn ${z==="deeper"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"deeper"})),children:["🔗 Go Deeper (",d.resources.length,")"]})]}),z==="learn"&&a.jsx("div",{children:d.content.map((L,T)=>{const F=`${d.id}-${T}`,V=K===F,re=b.has(F);return a.jsxs("div",{style:{borderTop:T>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"block-row",onClick:()=>M(F),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`chk ${re?"done":""}`,onClick:ye=>p(F,ye),children:re&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:re?"#aaa":"#2a2a2a",textDecoration:re?"line-through":"none",flex:1},children:L.heading}),a.jsx("span",{className:"arr",style:{transform:V?"rotate(90deg)":"rotate(0)"},children:"›"})]}),V&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${d.color}20`,marginLeft:22},children:G(L.body)})]},T)})}),z==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal. Press Enter to submit."}),(d.questions||[]).map((L,T)=>a.jsx(mh,{...L,color:d.color},`${d.id}-q-${T}`))]}),z==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:d.resources.map((L,T)=>{const F=Zc[L.type];return a.jsxs("a",{href:L.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:F.bg+"55"},children:[a.jsxs("span",{className:"type-badge",style:{background:F.bg,color:F.color},children:[F.emoji," ",F.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:L.title})]},T)})})]})]})]},d.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Learn · Practice · Go Deeper — from the simplest neuron to understanding why GPT works"})]})}const ed={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},_r=[{id:"arch",icon:"⬡",color:"#7C3AED",title:"MLP Architecture",subtitle:"Layers, neurons, connections — the blueprint of the simplest deep network",resources:[{type:"infographic",title:"TensorFlow Playground — build & train an MLP live",url:"https://playground.tensorflow.org/"},{type:"infographic",title:"Interactive MLP heatmap — drag weights, see output change",url:"https://chokkan.github.io/deeplearning/demo-mlp.html"},{type:"infographic",title:"NN-Visual — forward & backward propagation visualizer",url:"https://www.nn-visual.com/"},{type:"infographic",title:"Adam Harley — 3D neural network visualization",url:"https://adamharley.com/nn_vis/"},{type:"read",title:"TDS — MLP Explained: Visual Guide with Mini 2D Dataset",url:"https://towardsdatascience.com/multilayer-perceptron-explained-a-visual-guide-with-mini-2d-dataset-0ae8100c5d1c/"},{type:"read",title:"d2l.ai — MLPs (Ch 5, with runnable PyTorch code)",url:"https://d2l.ai/chapter_multilayer-perceptrons/index.html"},{type:"read",title:"Michael Nielsen — Ch 1: Using neural nets to recognize digits",url:"http://neuralnetworksanddeeplearning.com/chap1.html"},{type:"video",title:"3Blue1Brown — But what is a neural network? (Ch 1)",url:"https://www.youtube.com/watch?v=aircAruvnKk"},{type:"video",title:"Karpathy — Building micrograd (MLP from scratch)",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"}],content:[{heading:"What Is an MLP?",body:`A **Multi-Layer Perceptron** (MLP) is a neural network with:
• An **input layer** (receives data — no computation)
• One or more **hidden layers** (learn representations)
• An **output layer** (produces predictions)

Every neuron in layer l is connected to **every** neuron in layer l+1 → "fully connected" or "dense."

**Example architecture:** [784, 256, 128, 10]
• Input: 784 features (28×28 pixel image)
• Hidden 1: 256 neurons
• Hidden 2: 128 neurons
• Output: 10 neurons (one per digit class 0-9)

**Each connection has a weight. Each neuron has a bias.** These are the learnable parameters.

**Total parameters:** (784×256 + 256) + (256×128 + 128) + (128×10 + 10) = 200,704 + 32,896 + 1,290 = **234,890 parameters**

That's nearly 235K knobs the model adjusts during training. Modern LLMs have billions.`},{heading:"Layers — What Each One Does",body:`**Input layer:** simply holds the raw data. No weights, no activation. One neuron per feature.

**Hidden layers:** where the magic happens. Each neuron:
1. Computes a weighted sum of all inputs from the previous layer
2. Adds a bias term
3. Applies a nonlinear activation function

**Why "hidden"?** We don't directly observe their values — they're internal representations the network learns on its own. Nobody tells the network what hidden neurons should represent.

**Output layer:** produces the final prediction.
• **Regression:** single neuron, linear activation (no activation). Output = any real number.
• **Binary classification:** single neuron, sigmoid. Output = probability ∈ (0,1).
• **Multi-class classification:** N neurons, softmax. Output = probability distribution over N classes.

**Depth vs Width:**
• **Deeper** (more layers): learns hierarchical features, more expressive per parameter
• **Wider** (more neurons per layer): more capacity per layer, but diminishing returns
• Modern practice: deeper is usually better than wider for the same parameter budget`},{heading:"Fully Connected — What It Means in Math",body:`"Fully connected" means every neuron in layer l connects to every neuron in layer l+1.

For layer l with nₗ neurons and layer l+1 with nₗ₊₁ neurons:
• **Weight matrix** W: shape (nₗ, nₗ₊₁) — one weight per connection
• **Bias vector** b: shape (nₗ₊₁,) — one bias per neuron in the next layer

**Number of parameters per layer:** nₗ × nₗ₊₁ + nₗ₊₁

**Why matrix form matters:**
Instead of computing each neuron's output individually:
  h₁ = σ(w₁₁x₁ + w₂₁x₂ + ... + b₁)
  h₂ = σ(w₁₂x₁ + w₂₂x₂ + ... + b₂)
  ...

We compute ALL neurons at once:
  **h = σ(xW + b)**

One matrix multiplication + one element-wise activation = entire layer computed. This is why GPUs (which are designed for matrix operations) make neural networks fast.

**In PyTorch:**
layer = nn.Linear(784, 256)  # creates W (784×256) and b (256)
output = torch.relu(layer(input))  # xW + b, then ReLU`}],questions:[{q:"An MLP has architecture [100, 64, 32, 10]. How many total learnable parameters does it have?",a:"Layer 1→2: 100×64 + 64 = 6,464. Layer 2→3: 64×32 + 32 = 2,080. Layer 3→4: 32×10 + 10 = 330. Total: 6,464 + 2,080 + 330 = 8,874 parameters. Remember: parameters = (inputs × outputs + biases) per layer.",hint:"Parameters per layer = (neurons_in × neurons_out) + neurons_out.",check:l=>l.replace(/[,\s]/g,"").includes("8874")},{q:"Why must hidden layers use nonlinear activation functions? What happens if they don't?",a:"Without nonlinear activations, the entire MLP collapses to a single linear transformation. If h₁ = W₁x + b₁ and h₂ = W₂h₁ + b₂, then h₂ = W₂W₁x + (W₂b₁ + b₂) = W_combined × x + b_combined. No matter how many layers you stack, the result is equivalent to one linear layer. Nonlinear activations break this collapse, allowing each layer to learn a genuinely new transformation and enabling the network to approximate any continuous function.",hint:"Compose two linear functions f(x)=Ax+b and g(x)=Cx+d. Is g(f(x)) still linear?",check:l=>{const r=l.toLowerCase();return r.includes("linear")&&(r.includes("collapse")||r.includes("single")||r.includes("equivalent")||r.includes("same as"))}},{q:"An MLP for binary classification has a sigmoid output. An MLP for 10-class classification has softmax. Why different activations?",a:"Binary classification needs a single probability P(class=1) ∈ (0,1). Sigmoid maps any real number to (0,1), giving exactly this. Multi-class classification needs a probability distribution over all 10 classes — probabilities that sum to 1. Softmax takes 10 logits and produces 10 probabilities that sum to 1, defining a categorical distribution. You could use sigmoid for multi-class, but each output would be independent — they wouldn't form a proper probability distribution (wouldn't sum to 1). Softmax enforces the constraint that probabilities are mutually exclusive and exhaustive.",hint:"What constraint must multi-class probabilities satisfy that binary classification doesn't need?",check:l=>{const r=l.toLowerCase();return r.includes("sum to 1")||r.includes("probability")&&r.includes("distribution")}}]},{id:"forward",icon:"▶",color:"#0369A1",title:"The Forward Pass",subtitle:"Data flows through the network — from input to prediction, one layer at a time",resources:[{type:"infographic",title:"NN-Visual — step through forward propagation",url:"https://www.nn-visual.com/"},{type:"infographic",title:"TDS — MLP Visual Guide (forward pass section)",url:"https://towardsdatascience.com/multilayer-perceptron-explained-a-visual-guide-with-mini-2d-dataset-0ae8100c5d1c/"},{type:"read",title:"d2l.ai — Forward Propagation (Ch 5.1)",url:"https://d2l.ai/chapter_multilayer-perceptrons/mlp.html"},{type:"read",title:"TDS — Visualizing MLP as Composition of Transformations",url:"https://towardsdatascience.com/visualizing-the-mlp-a-composition-of-transformations-dec1c62d4eea/"},{type:"video",title:"3Blue1Brown — What is a neural network? (forward pass)",url:"https://www.youtube.com/watch?v=aircAruvnKk"},{type:"video",title:"StatQuest — Neural Networks Pt 2: Backpropagation",url:"https://www.youtube.com/watch?v=IN2XmBhILt4"}],content:[{heading:"Layer-by-Layer Computation",body:`For a 2-hidden-layer MLP with input x:

**Layer 1 (hidden):**
z₁ = xW₁ + b₁          ← linear transformation (weighted sum)
a₁ = activation(z₁)     ← nonlinearity (e.g., ReLU)

**Layer 2 (hidden):**
z₂ = a₁W₂ + b₂
a₂ = activation(z₂)

**Layer 3 (output):**
z₃ = a₂W₃ + b₃
ŷ = output_activation(z₃)   ← softmax for classification, linear for regression

**Key notation:**
• zₗ = "pre-activation" at layer l (before applying activation)
• aₗ = "activation" at layer l (after applying activation)
• a₀ = x (the input is the "activation" of layer 0)

We save all intermediate values (z₁, a₁, z₂, a₂, ...) because backpropagation needs them! This is the memory cost of training — you must store every intermediate activation.`},{heading:"Worked Example — Full Forward Pass",body:`**Network:** 2 inputs → 2 hidden (ReLU) → 1 output (sigmoid)

**Weights & biases:**
W₁ = [[0.5, -0.3],   b₁ = [0.1, -0.2]
      [0.8,  0.4]]
W₂ = [[0.6],         b₂ = [0.1]
      [-0.5]]

**Input:** x = [1.0, 2.0]

**Hidden layer:**
z₁ = [1.0, 2.0] × [[0.5, -0.3], [0.8, 0.4]] + [0.1, -0.2]
z₁ = [1×0.5+2×0.8, 1×(-0.3)+2×0.4] + [0.1, -0.2]
z₁ = [2.1, 0.5] + [0.1, -0.2] = **[2.2, 0.3]**
a₁ = ReLU([2.2, 0.3]) = **[2.2, 0.3]** (both positive, unchanged)

**Output layer:**
z₂ = [2.2, 0.3] × [[0.6], [-0.5]] + [0.1]
z₂ = [2.2×0.6 + 0.3×(-0.5)] + [0.1]
z₂ = [1.32 - 0.15] + [0.1] = **[1.27]**
ŷ = sigmoid(1.27) = 1/(1+e⁻¹·²⁷) ≈ **0.781**

The network predicts ~78% probability of class 1. If the true label is y=1, loss = -log(0.781) ≈ 0.247.`},{heading:"What the Hidden Layers Are Really Doing",body:`Each hidden layer performs a **geometric transformation** of the data:

**Linear part (xW + b):** rotates, scales, shears, and translates the data points in space
**Activation (ReLU/sigmoid):** warps the space nonlinearly — folds, bends, or clips the geometry

**The goal:** transform the data so that classes become **linearly separable** at the output layer.

**Layer 1:** might learn to detect simple features
  "Is this pixel bright?" "Is the sum of these inputs large?"

**Layer 2:** combines simple features into complex ones
  "Is there a curve in this region?" "Are these two features correlated?"

**Output layer:** draws a linear boundary in the transformed space
  "Given these complex features, which class does this belong to?"

**Visualization insight:** if you plot the hidden layer activations (a₁) in 2D, you can often see that the data has been warped into a new arrangement where a straight line can separate the classes — even if the original data wasn't linearly separable.

This is the fundamental mechanism: **each layer warps space to make the next layer's job easier.**`}],questions:[{q:"Given x = [3, -1], W = [[2, 0], [1, -1]], b = [0, 1], compute the output after ReLU activation.",a:"z = xW + b = [3×2+(-1)×1, 3×0+(-1)×(-1)] + [0, 1] = [6-1, 0+1] + [0, 1] = [5, 1] + [0, 1] = [5, 2]. ReLU([5, 2]) = [5, 2] (both positive, unchanged). If the values were negative, ReLU would clip them to 0.",hint:"Matrix multiply first (xW), add bias, then apply ReLU element-wise.",check:l=>{const r=l.replace(/\s/g,"");return r.includes("[5,2]")||r.includes("5,2")}},{q:"Why do we need to save all intermediate activations (z and a values) during the forward pass?",a:"Backpropagation needs these values to compute gradients. The chain rule decomposes ∂Loss/∂W into products of local derivatives at each layer: ∂aₗ/∂zₗ (requires zₗ for the activation derivative), and ∂zₗ/∂Wₗ (requires aₗ₋₁, the previous layer's activation). Without saving these intermediates, you'd have to recompute the entire forward pass for each weight — making training prohibitively expensive. This is the fundamental memory/compute tradeoff: saving activations uses memory but enables efficient gradient computation.",hint:"Think about what the chain rule needs to compute ∂Loss/∂W at each layer.",check:l=>{const r=l.toLowerCase();return(r.includes("backprop")||r.includes("chain rule")||r.includes("gradient"))&&(r.includes("need")||r.includes("require")||r.includes("comput"))}},{q:"A 3-layer MLP transforms input from 100D → 50D → 20D → 5D. What is the network doing geometrically at each step?",a:"The network progressively compresses the representation: 100D → 50D → 20D → 5D. Each layer reduces dimensionality through its weight matrix (projection) and then warps the space nonlinearly through its activation function. Layer 1 projects from 100D to 50D, discarding less important directions and combining features. Layer 2 further compresses to 20D, creating higher-level feature combinations. The output layer maps to 5D (e.g., 5 class probabilities). At each step, the nonlinear activation bends/folds the space so that classes become more separable. The final 5D space should ideally have each class occupying a distinct region.",hint:"Think about what dimension reduction does to data points in space.",check:l=>{const r=l.toLowerCase();return(r.includes("compress")||r.includes("reduce")||r.includes("project")||r.includes("dimension"))&&(r.includes("separab")||r.includes("feature")||r.includes("warp")||r.includes("nonlinear"))}}]},{id:"backprop",icon:"◀",color:"#DC2626",title:"Backpropagation",subtitle:"The algorithm that makes deep learning possible — computing all gradients in one backward pass",resources:[{type:"infographic",title:"NN-Visual — step through backprop layer by layer",url:"https://www.nn-visual.com/"},{type:"infographic",title:"TensorTonic — Chain Rule: Backbone of Backprop (interactive)",url:"https://www.tensortonic.com/ml-math/calculus/chain-rule"},{type:"read",title:"Colah — Calculus on Computational Graphs (backprop)",url:"https://colah.github.io/posts/2015-08-Backprop/"},{type:"read",title:"Michael Nielsen — How backpropagation works (Ch 2)",url:"http://neuralnetworksanddeeplearning.com/chap2.html"},{type:"read",title:"ML Cheatsheet — Backpropagation (step-by-step)",url:"https://ml-cheatsheet.readthedocs.io/en/latest/backpropagation.html"},{type:"video",title:"3Blue1Brown — Backpropagation (Ch 3)",url:"https://www.youtube.com/watch?v=Ilg3gGewQ5U"},{type:"video",title:"3Blue1Brown — Backpropagation calculus (Ch 4)",url:"https://www.youtube.com/watch?v=tIeHLnjs5U8"},{type:"video",title:"Karpathy — micrograd: backprop engine from scratch",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"}],content:[{heading:"The Problem Backprop Solves",body:`We need ∂Loss/∂wᵢⱼ for **every** weight in the network.

**Naive approach:** perturb each weight by ε, rerun the forward pass, measure change in loss.
∂L/∂w ≈ (L(w+ε) - L(w)) / ε

For N parameters: N+1 forward passes. For 1 million parameters → 1 million forward passes. **Way too slow.**

**Backpropagation:** compute ALL gradients in just **2 passes**:
1. **Forward pass:** compute all activations (left → right)
2. **Backward pass:** compute all gradients (right → left)

**Cost:** backward pass ≈ 2× the cost of forward pass. So computing all N gradients costs only ~3× one forward pass, regardless of N!

This efficiency comes from the chain rule + **memoization** — intermediate gradients computed at later layers are reused by earlier layers, avoiding redundant computation.`},{heading:"The Four Equations of Backprop",body:`For layer l with pre-activation zₗ, activation aₗ, weights Wₗ, bias bₗ:

**Equation 1: Output layer error**
**δₗ = ∂L/∂zₗ = ∂L/∂aₗ ⊙ σ'(zₗ)**
(How much does the loss change per unit change in the pre-activation?)

**Equation 2: Error propagation (backward)**
**δₗ₋₁ = (δₗ × Wₗᵀ) ⊙ σ'(zₗ₋₁)**
(Propagate error backward through the weights, then through the activation)

**Equation 3: Weight gradient**
**∂L/∂Wₗ = aₗ₋₁ᵀ × δₗ**
(Gradient w.r.t. weights = outer product of incoming activation and error)

**Equation 4: Bias gradient**
**∂L/∂bₗ = δₗ**
(Gradient w.r.t. bias = the error itself)

**The key insight:** δₗ (the "error" at each layer) is computed once and reused for both the weight gradient (eq 3) and propagating backward to the previous layer (eq 2). This reuse is what makes backprop efficient.`},{heading:"Worked Example — Backward Pass",body:`Continuing from the forward pass example. Network: 2→2→1, y=1, ŷ=0.781.

**Loss:** L = -[y log(ŷ) + (1-y)log(1-ŷ)] = -log(0.781) = **0.247**

**Step 1: Output layer gradient**
∂L/∂ŷ = -y/ŷ + (1-y)/(1-ŷ) = -1/0.781 = -1.280
∂ŷ/∂z₂ = ŷ(1-ŷ) = 0.781 × 0.219 = 0.171
δ₂ = -1.280 × 0.171 = **-0.219**

**Step 2: Output weight gradients**
∂L/∂W₂ = a₁ᵀ × δ₂ = [[2.2], [0.3]] × [-0.219] = **[[-0.482], [-0.066]]**
∂L/∂b₂ = δ₂ = **[-0.219]**

**Step 3: Propagate error to hidden layer**
δ₁ = δ₂ × W₂ᵀ ⊙ ReLU'(z₁)
= [-0.219] × [[0.6, -0.5]] ⊙ [1, 1]  (ReLU'=1 since z₁=[2.2, 0.3] both positive)
= [-0.131, 0.110] ⊙ [1, 1] = **[-0.131, 0.110]**

**Step 4: Hidden weight gradients**
∂L/∂W₁ = x₁ᵀ × δ₁ = [[1.0], [2.0]] × [-0.131, 0.110]
= **[[-0.131, 0.110], [-0.263, 0.219]]**

Now we have gradients for ALL weights. Apply gradient descent: W ← W - η × ∂L/∂W`},{heading:"Computational Graphs & Autograd",body:`Modern frameworks (PyTorch, TensorFlow) don't require manual backprop. They use **automatic differentiation (autograd):**

**Forward pass:** build a computational graph recording every operation
**Backward pass:** traverse the graph in reverse, applying chain rule at each node

**PyTorch example:**
x = torch.tensor([1.0, 2.0], requires_grad=True)
W1 = torch.randn(2, 3, requires_grad=True)
h = torch.relu(x @ W1)
W2 = torch.randn(3, 1, requires_grad=True)
y_hat = torch.sigmoid(h @ W2)
loss = -torch.log(y_hat)
loss.backward()  # computes ALL gradients automatically!
# W1.grad, W2.grad now contain ∂L/∂W1, ∂L/∂W2

**How it works internally:**
Each tensor operation records its inputs and the function used. When .backward() is called, it walks backward through this record, computing gradients via chain rule.

**Karpathy's micrograd** implements this in ~100 lines of Python — watching his video is the single best way to understand autograd.

**Key concept:** you never implement backprop manually in practice. But understanding it is essential for debugging, designing architectures, and understanding why certain choices (activation functions, initialization, residual connections) matter.`}],questions:[{q:"Why is backprop so much more efficient than numerical gradient estimation (perturbation method)?",a:"Numerical estimation requires N+1 forward passes for N parameters (perturb each weight separately). Backprop requires only 1 forward + 1 backward pass (total ~3× one forward pass) regardless of N. For a model with 1 million parameters: numerical = ~1 million forward passes, backprop = ~3 forward passes. The speedup is ~333,000×. Backprop achieves this by reusing intermediate computations (memoization): the error δ at each layer is computed once and used for both the weight gradient and for propagating to the previous layer.",hint:"Compare: N+1 forward passes vs. 1 forward + 1 backward pass.",check:l=>{const r=l.toLowerCase();return(r.includes("2")||r.includes("two")||r.includes("one forward")||r.includes("1 forward"))&&(r.includes("reuse")||r.includes("memoiz")||r.includes("efficient")||r.includes("n+1"))}},{q:"In equation 3 of backprop, ∂L/∂Wₗ = aₗ₋₁ᵀ × δₗ. Why does the gradient depend on the PREVIOUS layer's activation?",a:"Because Wₗ connects layer l-1 to layer l. The pre-activation is zₗ = aₗ₋₁ × Wₗ + bₗ. By the chain rule, ∂zₗ/∂Wₗ = aₗ₋₁ᵀ (the input to this layer). Intuitively: the gradient of a weight tells us how to adjust the connection. A weight connecting a highly-activated input neuron to a high-error output neuron gets a large gradient. If the input neuron's activation is near 0, the weight barely matters — so its gradient is small. The gradient is the product of 'how active the input was' (aₗ₋₁) and 'how wrong the output was' (δₗ).",hint:"Differentiate z = aW + b with respect to W. What multiplies the error?",check:l=>{const r=l.toLowerCase();return(r.includes("input")||r.includes("previous")||r.includes("a_l-1")||r.includes("activation"))&&(r.includes("connect")||r.includes("chain rule")||r.includes("how active"))}},{q:"What does loss.backward() actually do in PyTorch? Explain in terms of the computational graph.",a:"loss.backward() traverses the computational graph in reverse topological order (from loss node back to input/parameter nodes). At each node, it: (1) retrieves the stored forward-pass values (inputs, intermediate results), (2) computes the local gradient (derivative of that operation), (3) multiplies it with the incoming gradient from downstream (chain rule), and (4) passes the result to the upstream nodes. For parameters with requires_grad=True, it accumulates the gradient into the .grad attribute. The result is that every parameter's .grad field contains ∂loss/∂parameter after one call, enabling gradient descent via optimizer.step().",hint:"Think about traversing the graph backward, applying chain rule at each operation node.",check:l=>{const r=l.toLowerCase();return(r.includes("graph")||r.includes("reverse"))&&(r.includes("chain rule")||r.includes("gradient")||r.includes("backward"))}}]},{id:"act",icon:"σ",color:"#0E7490",title:"Activation Functions Deep Dive",subtitle:"The nonlinear functions that give neural networks their power — and their problems",resources:[{type:"infographic",title:"TensorFlow Playground — compare activations live",url:"https://playground.tensorflow.org/"},{type:"infographic",title:"Dashee87 — Activation functions visualized",url:"https://dashee87.github.io/deep%20learning/visualising-activation-functions-in-neural-networks/"},{type:"read",title:"d2l.ai — Activation Functions (with plots + code)",url:"https://d2l.ai/chapter_multilayer-perceptrons/mlp.html#activation-functions"},{type:"read",title:"Sebastian Raschka — Comparing activation functions",url:"https://sebastianraschka.com/faq/docs/activation-functions.html"},{type:"video",title:"StatQuest — ReLU explained",url:"https://www.youtube.com/watch?v=68BZ5f7P94Q"},{type:"video",title:"Karpathy — makemore activations discussion",url:"https://www.youtube.com/watch?v=PaCmpygFfXo"}],content:[{heading:"Sigmoid & Tanh — The Classics",body:`**Sigmoid:** σ(z) = 1 / (1 + e⁻ᶻ)
• Output range: (0, 1) — interpretable as probability
• Derivative: σ(z)(1-σ(z)), max = 0.25 at z=0
• **Problem:** vanishing gradients. After many layers, 0.25ⁿ → 0. Early layers stop learning.
• **Problem:** outputs not zero-centered. All-positive outputs cause zig-zagging in gradient descent.
• **Used today:** output layer for binary classification. Rarely in hidden layers.

**Tanh:** tanh(z) = (eᶻ - e⁻ᶻ) / (eᶻ + e⁻ᶻ)
• Output range: (-1, 1) — zero-centered ✓
• Derivative: 1 - tanh²(z), max = 1 at z=0
• **Better than sigmoid** for hidden layers (zero-centered), but still suffers from vanishing gradients at saturation.
• **Relationship:** tanh(z) = 2σ(2z) - 1 — tanh is a rescaled sigmoid.`},{heading:"ReLU & Variants — The Modern Default",body:`**ReLU (Rectified Linear Unit):** f(z) = max(0, z)
• Derivative: 0 if z<0, 1 if z>0
• **Advantages:** no vanishing gradient (derivative = 1 for positive inputs), sparse activations (many neurons output 0), computationally trivial (just a comparison)
• **Problem: "dead ReLU"** — if a neuron's input is always negative, it always outputs 0, gradient is always 0, it never updates. The neuron is permanently dead.

**Leaky ReLU:** f(z) = z if z>0, αz if z≤0  (typically α=0.01)
• Fixes dead ReLU — small gradient even for negative inputs
• Almost no computational cost

**GELU (Gaussian Error Linear Unit):** f(z) = z × Φ(z)
• Φ = standard Gaussian CDF
• Smooth approximation of ReLU that allows small negative values through
• **Used in:** BERT, GPT-2, GPT-3 — the default for Transformer hidden layers

**SwiGLU:** f(x) = (xW₁) × σ(xW₃) × W₂
• Gated: one linear projection controls how much of another passes through
• **Used in:** Llama, PaLM, Gemma — current best for LLM FFN layers
• Requires 3 weight matrices but empirically superior`},{heading:"Softmax — The Output Activation for Classification",body:`**softmax(zᵢ) = exp(zᵢ) / Σⱼ exp(zⱼ)**

Not just an activation — it converts logits into a valid **probability distribution:**
• All outputs ∈ (0, 1)
• All outputs sum to exactly 1
• Preserves ordering (highest logit → highest probability)

**Numerical stability trick:** subtract max(z) before computing exp:
softmax(z) = softmax(z - max(z))
This prevents overflow (exp of large numbers = infinity).

**In PyTorch:**
# DON'T do this (numerically unstable):
probs = torch.exp(logits) / torch.exp(logits).sum()
# DO this (stable, and fuses with cross-entropy for efficiency):
loss = F.cross_entropy(logits, targets)  # softmax + CE in one step

**Temperature:** softmax(z/T) controls sharpness. T<1 sharpens, T>1 flattens.

**In attention mechanisms:** softmax converts QKᵀ/√d_k scores into attention weights — ensuring they form a probability distribution (each token's total attention sums to 1).`},{heading:"Choosing the Right Activation",body:`**Decision guide for 2024/2025:**

**Hidden layers in MLPs/CNNs:** ReLU (default), Leaky ReLU (if dead neurons are a problem)
**Hidden layers in Transformers:** GELU (BERT/GPT style) or SwiGLU (Llama/PaLM style)
**Output — binary classification:** Sigmoid (one probability)
**Output — multi-class:** Softmax (probability distribution)
**Output — regression:** Linear (no activation) or Tanh (bounded output)
**Output — generative models:** depends on the domain

**Why GELU/SwiGLU beat ReLU in Transformers:**
• Smoother gradients → better optimization in very deep networks
• Allow small negative values → richer representations
• SwiGLU's gating mechanism adds expressivity without much compute cost

**Historical progression:**
Sigmoid (1980s) → Tanh (1990s) → ReLU (2010s) → GELU (2016) → SwiGLU (2020s)

Each advancement solved a specific problem with the previous generation.`}],questions:[{q:"A hidden neuron using ReLU always receives negative pre-activation values across all training batches. What happens and why?",a:"The neuron is 'dead.' Since ReLU(z) = 0 for all z < 0, its output is permanently 0. During backpropagation, ∂ReLU/∂z = 0 for z < 0, so no gradient flows through this neuron — its weights never update. The neuron contributes nothing to the network and wastes capacity. This typically happens with large learning rates that push weights to produce permanently negative pre-activations. Solutions: use Leaky ReLU (small gradient for z<0), lower the learning rate, or use better initialization.",hint:"What is ReLU's derivative when input is negative?",check:l=>{const r=l.toLowerCase();return r.includes("dead")&&(r.includes("0")||r.includes("zero")||r.includes("never update")||r.includes("no gradient"))}},{q:"Why does PyTorch's F.cross_entropy combine softmax and cross-entropy loss into a single function, rather than doing them separately?",a:"Numerical stability and computational efficiency. Computing softmax separately creates very small numbers (near 0) or very large numbers (overflow). Then taking log of near-zero probabilities gives -infinity. By combining them, PyTorch uses the log-sum-exp trick: log(softmax(zᵢ)) = zᵢ - log(Σⱼ exp(zⱼ)), which avoids computing exp/log of extreme values separately. It's also more memory-efficient (doesn't store the intermediate probability vector) and faster (fused GPU kernel).",hint:"What goes wrong numerically when you compute exp() of large numbers, then log() of very small numbers?",check:l=>{const r=l.toLowerCase();return(r.includes("numerical")||r.includes("stability")||r.includes("overflow")||r.includes("underflow"))&&(r.includes("log")||r.includes("exp")||r.includes("log-sum-exp"))}}]},{id:"init",icon:"🎲",color:"#92400E",title:"Weight Initialization & Regularization",subtitle:"Starting right and preventing overfitting — the unsexy techniques that make training work",resources:[{type:"infographic",title:"d2l.ai — Numerical Stability and Initialization (interactive)",url:"https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html"},{type:"read",title:"Karpathy — A Recipe for Training Neural Networks",url:"https://karpathy.github.io/2019/04/25/recipe/"},{type:"read",title:"d2l.ai — Weight Decay (L2 Regularization)",url:"https://d2l.ai/chapter_multilayer-perceptrons/weight-decay.html"},{type:"read",title:"d2l.ai — Dropout (Ch 5.6)",url:"https://d2l.ai/chapter_multilayer-perceptrons/dropout.html"},{type:"video",title:"Karpathy — makemore Part 3 (BatchNorm, init deep-dive)",url:"https://www.youtube.com/watch?v=P6sfmUTpUmc"},{type:"video",title:"StatQuest — Regularization Clearly Explained",url:"https://www.youtube.com/watch?v=Q81RR3Y5LQE"}],content:[{heading:"Why Initialization Matters",body:`**Bad initialization → training fails before it starts.**

**All zeros:** Every neuron computes the same thing → same gradients → they all learn the same function forever. **The symmetry is never broken.** Completely useless.

**Too large (N(0, 1) for large layers):** Activations explode layer by layer. If inputs have variance 1, after multiplying by W with variance 1 and n_in columns:
Var(output) = n_in × Var(w) × Var(input) = n_in
After L layers: Var ≈ n_in^L → **explodes exponentially**

**Too small:** Activations shrink to zero. Gradients vanish. Same problem in reverse.

**The Goldilocks zone:** Var(output) ≈ Var(input) at every layer.

**Xavier/Glorot init (for sigmoid/tanh):**
W ~ N(0, 2/(n_in + n_out))

**He/Kaiming init (for ReLU):**
W ~ N(0, 2/n_in)
The 2 accounts for ReLU zeroing out half the outputs.

**For Transformers:** layers are initialized with smaller variance (often 1/√d_model) and scaled by 1/√(2N) for the N-th residual layer.`},{heading:"Regularization — Preventing Overfitting",body:`A model that memorizes training data but fails on new data is **overfitting**. Regularization prevents this.

**L2 Regularization (Weight Decay):**
L_total = L_data + λ||W||²
Penalizes large weights. Forces the model to use small, distributed weights.
Equivalent to MAP estimation with Gaussian prior (λ controls prior strength).
**AdamW** decouples weight decay from the gradient update — the standard for LLM training.

**Dropout (Srivastava et al., 2014):**
During training: randomly set each neuron's output to 0 with probability p (typically 0.1-0.5).
During inference: use all neurons but scale outputs by (1-p).

**Why dropout works:**
• Prevents co-adaptation — neurons can't rely on specific other neurons
• Implicitly trains an ensemble of ~2^N sub-networks
• Like bagging: each sub-network sees different features

**Batch Normalization (Ioffe & Szegedy, 2015):**
Normalize each layer's inputs to mean=0, variance=1, then apply learned scale (γ) and shift (β).
BN(x) = γ × (x - μ_batch) / √(σ²_batch + ε) + β
Stabilizes training, allows higher learning rates, acts as mild regularizer.

**Layer Normalization** (used in Transformers instead of BatchNorm):
Same idea but normalizes across features within each sample, not across the batch.`},{heading:"The Modern Training Recipe",body:`Putting it all together — how a modern MLP/neural network is actually trained:

**1. Architecture:** choose layer sizes, activation functions
**2. Initialization:** He init for ReLU layers, Xavier for sigmoid/tanh
**3. Loss function:** cross-entropy for classification, MSE for regression
**4. Optimizer:** Adam or AdamW (β₁=0.9, β₂=0.999, ε=1e-8)
**5. Learning rate:** start with 1e-3, use scheduler (cosine decay, reduce-on-plateau)
**6. Regularization:** weight decay (1e-4 to 1e-1), dropout (0.1-0.5)
**7. Normalization:** LayerNorm (Transformers) or BatchNorm (CNNs)
**8. Training loop:**
  for epoch in range(num_epochs):
      for batch in dataloader:
          loss = model(batch)     # forward pass
          loss.backward()         # backward pass
          optimizer.step()        # update weights
          optimizer.zero_grad()   # clear gradients
**9. Monitor:** training loss, validation loss, watch for overfitting gap
**10. Early stopping:** if validation loss stops improving, stop training

**Karpathy's recipe:** start simple, verify loss at init, overfit a small batch first, then scale up. This catches bugs early when they're cheap to fix.`}],questions:[{q:"Why does initializing all weights to zero completely break training, but initializing to small random values works?",a:"With zero initialization, all neurons in a layer compute the same function (same weights, same bias, same input). During backpropagation, they receive identical gradients, so they update identically. This symmetry is never broken — all neurons stay identical forever, effectively reducing the entire layer to a single neuron. Random initialization breaks this symmetry: each neuron starts different, receives different gradients, and learns different features. The randomness doesn't need to be large — just enough to make neurons distinguishable.",hint:"If all neurons have the same weights, what are their outputs? What are their gradients?",check:l=>{const r=l.toLowerCase();return r.includes("symmetry")||r.includes("same")&&(r.includes("gradient")||r.includes("function")||r.includes("output")||r.includes("identical"))}},{q:"During training with dropout rate 0.3, what happens to a layer with 100 neurons? What about during inference?",a:"During training: each neuron independently has a 30% chance of being set to 0 on each forward pass. On average, 30 out of 100 neurons are 'dropped' per batch, leaving ~70 active neurons. The remaining outputs are typically scaled by 1/(1-0.3) = 1/0.7 ≈ 1.43 to compensate (inverted dropout). During inference: ALL 100 neurons are active (no dropout), and no scaling is needed (because inverted dropout already compensated during training). This is why model.eval() matters in PyTorch — it disables dropout.",hint:"What does 'rate 0.3' mean? What changes between training and inference?",check:l=>{const r=l.toLowerCase();return(r.includes("30")||r.includes("70"))&&(r.includes("inference")||r.includes("eval")||r.includes("all")||r.includes("active"))&&(r.includes("scale")||r.includes("compensat")||r.includes("no dropout"))}},{q:"A model achieves 99% training accuracy but only 60% validation accuracy. Diagnose the problem and propose three solutions.",a:"The model is severely overfitting — it has memorized the training data but can't generalize. Three solutions: (1) Increase regularization: add/increase dropout (e.g., 0.3→0.5), increase weight decay (L2 penalty), which constrains model complexity. (2) Reduce model capacity: use fewer layers or fewer neurons per layer, so the model can't memorize as easily. (3) Get more training data: more diverse examples make memorization harder and give the model more patterns to learn from. Additional solutions: early stopping (stop when validation loss starts increasing), data augmentation (artificially expand training set), or use a simpler model architecture.",hint:"The model has memorized training data. What constrains memorization?",check:l=>{const r=l.toLowerCase();return r.includes("overfit")&&(r.includes("dropout")||r.includes("regulariz")||r.includes("data")||r.includes("capacity")||r.includes("simpl")||r.includes("early"))}}]},{id:"mlp-in-transformers",icon:"⟫",color:"#15803D",title:"The MLP Inside Transformers",subtitle:"How the feed-forward network in every Transformer block is literally an MLP",resources:[{type:"infographic",title:"Jay Alammar — Illustrated GPT-2 (FFN section)",url:"https://jalammar.github.io/illustrated-gpt2/"},{type:"infographic",title:"Transformer Explainer — see the MLP in GPT-2",url:"https://poloclub.github.io/transformer-explainer/"},{type:"read",title:"Lilian Weng — The Transformer Family v2",url:"https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/"},{type:"read",title:"Attention Is All You Need — Section 3.3 (FFN)",url:"https://arxiv.org/abs/1706.03762"},{type:"video",title:"3Blue1Brown — What is a GPT? (MLP layers)",url:"https://www.youtube.com/watch?v=wjZofJX0v4M"},{type:"video",title:"Karpathy — Let's build GPT (FFN implementation)",url:"https://www.youtube.com/watch?v=kCc8FmEb1nY"}],content:[{heading:"The FFN = A 2-Layer MLP",body:`Every Transformer block has two sub-layers:
1. **Multi-head self-attention** (mixes information across tokens)
2. **Feed-forward network** (processes each token independently) ← **This is an MLP!**

**The FFN in the original Transformer:**
FFN(x) = W₂ × ReLU(W₁x + b₁) + b₂

This is literally a 2-layer MLP:
• Layer 1: project from d_model to d_ff (typically 4× expansion)
• Activation: ReLU (or GELU/SwiGLU in modern models)
• Layer 2: project from d_ff back to d_model

**GPT-2 (d_model=768):**
W₁: 768 → 3072 (expand by 4×)
W₂: 3072 → 768 (compress back)
Parameters per FFN: 768×3072 + 3072 + 3072×768 + 768 = **4,722,432**
That's ~4.7M parameters per block. With 12 blocks: ~57M parameters just in FFNs.

**The FFN accounts for roughly 2/3 of a Transformer's parameters!** Attention gets the glory, but the MLP does the heavy lifting.`},{heading:"What the FFN Actually Stores",body:`Research shows the FFN acts as a **key-value memory**:

**The first layer (W₁)** encodes "keys" — patterns that the FFN recognizes:
• Specific token sequences ("Eiffel Tower is in")
• Syntactic patterns (past tense verbs, plural nouns)
• Semantic categories (countries, professions, emotions)

**The second layer (W₂)** encodes "values" — what to output when a key matches:
• Factual completions ("Paris")
• Grammatical transformations
• Contextual signals

**Evidence:** researchers can:
• Identify individual neurons that fire for specific facts
• "Edit" facts by directly modifying FFN weights
• Show that ablating specific FFN neurons removes specific knowledge

**The MLP is the Transformer's memory.** Attention routes information between tokens (communication), and the FFN processes and retrieves knowledge (computation/storage).

This is why larger models know more — more FFN parameters = more memory slots.`},{heading:"SwiGLU — The Modern FFN",body:`Modern LLMs (Llama, PaLM, Gemma) replace the standard FFN with SwiGLU:

**Standard:** FFN(x) = W₂ × GELU(W₁x)
**SwiGLU:** FFN(x) = W₂ × (SiLU(W_gate × x) ⊙ (W_up × x))

SiLU(z) = z × σ(z) (Sigmoid Linear Unit, also called Swish)

**What changed:**
• **Gating mechanism:** W_gate produces a gate that controls how much of W_up passes through
• Element-wise multiplication (⊙) creates a learned, input-dependent filter
• **3 weight matrices** instead of 2, but each is smaller (d_model × ⅔×d_ff instead of d_model × d_ff) → roughly same parameter count

**Why SwiGLU wins:**
• The gate learns which dimensions to keep and which to suppress per input
• More expressive than fixed activation functions
• Consistently outperforms GELU-based FFNs at same parameter budget

**In code:**
class SwiGLU(nn.Module):
    def __init__(self, d_model, d_ff):
        self.w_gate = nn.Linear(d_model, d_ff, bias=False)
        self.w_up = nn.Linear(d_model, d_ff, bias=False)
        self.w_down = nn.Linear(d_ff, d_model, bias=False)
    def forward(self, x):
        return self.w_down(F.silu(self.w_gate(x)) * self.w_up(x))`}],questions:[{q:"In GPT-2 (d_model=768, d_ff=3072, 12 layers), how many total parameters are in FFN layers alone? What fraction of the model's ~124M total params?",a:"Per FFN: W₁ (768×3072) + b₁ (3072) + W₂ (3072×768) + b₂ (768) = 2,359,296 + 3,072 + 2,359,296 + 768 = 4,722,432 ≈ 4.7M. For 12 layers: 4,722,432 × 12 = 56,669,184 ≈ 56.7M. Out of ~124M total parameters, that's 56.7/124 ≈ 45.7%. Including the attention layer's linear projections (which are also matrix multiplications like an MLP), the proportion is even higher. The FFN is nearly half the entire model.",hint:"Parameters per FFN = (768×3072 + 3072) + (3072×768 + 768). Multiply by 12.",check:l=>{const r=l.replace(/[,\s]/g,"");return(r.includes("56")||r.includes("57"))&&(r.includes("45")||r.includes("46")||r.includes("half"))}},{q:"Why does the FFN in a Transformer process each token independently (unlike attention which mixes tokens)?",a:"The FFN's role is different from attention's: attention handles token-to-token communication (deciding which tokens are relevant to each other), while the FFN handles per-token computation and knowledge retrieval. Each token's representation, after being enriched with context by attention, needs individual processing to retrieve relevant knowledge and transform the representation. Making the FFN independent per token also enables parallelism (all tokens processed simultaneously), keeps computation local (no quadratic cost with sequence length), and maintains a clean separation of concerns: attention = routing/communication, FFN = computation/memory.",hint:"Attention handles communication between tokens. What's left for the FFN?",check:l=>{const r=l.toLowerCase();return(r.includes("independent")||r.includes("per token")||r.includes("individual"))&&(r.includes("knowledge")||r.includes("computation")||r.includes("memory")||r.includes("retriev")||r.includes("process"))}},{q:"A researcher discovers that neuron #4721 in layer 16's FFN fires strongly whenever the context mentions the Eiffel Tower. What does this tell us about how MLPs store knowledge in Transformers?",a:"It suggests that individual FFN neurons (or small groups) act as specialized 'key-value memory' units. The first layer (W₁) acts as a pattern detector — neuron #4721's incoming weights form a 'key' that matches Eiffel Tower contexts. When activated, its outgoing weights in W₂ produce a 'value' — information about Paris, France, iron, architecture, etc. that gets added to the token representation. This is evidence that factual knowledge in LLMs is stored in a distributed but somewhat localized way in FFN weights, and it's why techniques like knowledge editing (directly modifying specific FFN weights to change facts) can work.",hint:"Think of W₁ as 'keys' (pattern detectors) and W₂ as 'values' (what to output).",check:l=>{const r=l.toLowerCase();return(r.includes("key")||r.includes("pattern")||r.includes("detector"))&&(r.includes("value")||r.includes("knowledge")||r.includes("memory")||r.includes("stor"))}}]}];function fh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")},M=()=>E("revealed"),p=()=>{var S;E("idle"),U(""),(S=A.current)==null||S.focus()};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:S=>U(S.target.value),onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal the answer."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:M,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function yh({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=_r.reduce((d,g)=>d+g.content.length,0),P=Math.round(b.size/A*100),M=d=>q(K===d?null:d),p=(d,g)=>{g.stopPropagation();const N=new Set(b);N.has(d)?N.delete(d):N.add(d),U(N)},S=d=>D[d]||"learn",G=d=>d.split(`
`).map((g,N)=>{if(g==="")return a.jsx("div",{style:{height:8}},N);const v=g.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:v.map((z,C)=>C%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:z},C):a.jsx("span",{children:z},C))},N)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .sec-card{transition:all .3s cubic-bezier(.4,0,.2,1)}.sec-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}
        .block-row{transition:all .2s;cursor:pointer;border-radius:8px}.block-row:hover{background:rgba(0,0,0,.02)}
        .chk{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}
        .chk.done{background:#059669;border-color:#059669;color:white}
        .arr{transition:transform .25s;font-size:16px;color:#aaa}
        .pfill{transition:width .5s cubic-bezier(.4,0,.2,1)}
        .tab-btn{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}
        .tab-btn.active{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tab-btn:not(.active){background:transparent;color:#888}.tab-btn:not(.active):hover{color:#555}
        .res-link{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}
        .res-link:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}
        .type-badge{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}
        textarea:focus{border-color:#0369A1!important}
      `}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"NEURAL NETWORK FUNDAMENTALS"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Multi-Layer Perceptrons"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:['The "vanilla" neural network — architecture, forward pass, backpropagation, activation functions, initialization, regularization, and the FFN block inside every Transformer.',a.jsx("br",{}),_r.length," sections · ",A," concepts · ",_r.reduce((d,g)=>{var N;return d+(((N=g.questions)==null?void 0:N.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pfill",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #15803D)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]}),a.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(ed).map(([d,g])=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#777"},children:[a.jsxs("span",{className:"type-badge",style:{background:g.bg,color:g.color},children:[g.emoji," ",g.label]}),d==="infographic"&&"— Primary",d==="read"&&"— Secondary",d==="video"&&"— Supplement"]},d))})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:_r.map(d=>{var C;const g=r===d.id,v=d.content.map((L,T)=>`${d.id}-${T}`).filter(L=>b.has(L)).length,z=S(d.id);return a.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(g?null:d.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:d.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:d.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:d.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:d.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[v,"/",d.content.length]}),a.jsx("span",{className:"arr",style:{transform:g?"rotate(90deg)":"rotate(0)"},children:"›"})]}),g&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tab-btn ${z==="learn"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tab-btn ${z==="practice"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"practice"})),children:["✏️ Practice (",((C=d.questions)==null?void 0:C.length)||0,")"]}),a.jsxs("button",{className:`tab-btn ${z==="deeper"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"deeper"})),children:["🔗 Go Deeper (",d.resources.length,")"]})]}),z==="learn"&&a.jsx("div",{children:d.content.map((L,T)=>{const F=`${d.id}-${T}`,V=K===F,re=b.has(F);return a.jsxs("div",{style:{borderTop:T>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"block-row",onClick:()=>M(F),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`chk ${re?"done":""}`,onClick:ye=>p(F,ye),children:re&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:re?"#aaa":"#2a2a2a",textDecoration:re?"line-through":"none",flex:1},children:L.heading}),a.jsx("span",{className:"arr",style:{transform:V?"rotate(90deg)":"rotate(0)"},children:"›"})]}),V&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${d.color}20`,marginLeft:22},children:G(L.body)})]},T)})}),z==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal. Press Enter to submit."}),(d.questions||[]).map((L,T)=>a.jsx(fh,{...L,color:d.color},`${d.id}-q-${T}`))]}),z==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:d.resources.map((L,T)=>{const F=ed[L.type];return a.jsxs("a",{href:L.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:F.bg+"55"},children:[a.jsxs("span",{className:"type-badge",style:{background:F.bg,color:F.color},children:[F.emoji," ",F.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:L.title})]},T)})})]})]})]},d.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Learn · Practice · Go Deeper — the foundation of every deep learning architecture"})]})}const vh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Br=[{id:"setup",icon:"∇",color:"#7C3AED",title:"The Setup — Notation & the Problem",subtitle:"Precisely defining what we need to compute and the notation that makes it clean",resources:[{type:"infographic",title:"NN-Visual — see forward/backward flow with equations",url:"https://www.nn-visual.com/"},{type:"infographic",title:"TensorTonic — Chain Rule interactive demos",url:"https://www.tensortonic.com/ml-math/calculus/chain-rule"},{type:"read",title:"Michael Nielsen — How backprop works (Ch 2, gold standard)",url:"http://neuralnetworksanddeeplearning.com/chap2.html"},{type:"read",title:"Stanford CS231n — Backprop & Matrix Calculus slides",url:"https://cs231n.stanford.edu/slides/2018/cs231n_2018_ds02.pdf"},{type:"read",title:"TDS — Backpropagation: Step-by-Step Derivation",url:"https://towardsdatascience.com/backpropagation-step-by-step-derivation-99ac8fbdcc28/"},{type:"video",title:"3Blue1Brown — Backpropagation (Ch 3)",url:"https://www.youtube.com/watch?v=Ilg3gGewQ5U"},{type:"video",title:"Karpathy — micrograd: backprop from scratch in Python",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"}],content:[{heading:"What Backprop Must Compute",body:`**Goal:** Given a loss L, compute ∂L/∂W and ∂L/∂b for **every** weight matrix and bias vector in the network.

Once we have these gradients, gradient descent updates the parameters:
**W ← W - η × ∂L/∂W**
**b ← b - η × ∂L/∂b**

**The challenge:** In a deep network, weights in early layers affect the loss only *indirectly*, through many subsequent layers of computation. The loss doesn't directly depend on W₁ — it depends on a₁ which depends on z₁ which depends on W₁.

**The solution:** The chain rule. Backpropagation is *nothing more* than a systematic, efficient application of the chain rule to compute these gradients, starting from the loss and working backward through the network.`},{heading:"Notation — Define Everything Precisely",body:`For an L-layer network, at layer l (where l = 1, ..., L):

**Wˡ** = weight matrix connecting layer l-1 to layer l. Shape: (nₗ₋₁, nₗ)
**bˡ** = bias vector for layer l. Shape: (nₗ,)
**zˡ** = pre-activation: **zˡ = aˡ⁻¹ Wˡ + bˡ**
**aˡ** = activation: **aˡ = σˡ(zˡ)** where σˡ is the activation function at layer l
**a⁰** = x (the input data)

**Loss function:** L = L(aᴸ, y) where aᴸ is the final output and y is the true label.

**What we need:**
∂L/∂Wˡ for l = 1, ..., L  (weight gradients)
∂L/∂bˡ for l = 1, ..., L  (bias gradients)

**Key intermediate quantity — the "error" or "delta":**
**δˡ = ∂L/∂zˡ**
This measures how sensitive the loss is to the pre-activation at layer l. Once we know δˡ for every layer, computing weight gradients is trivial.`},{heading:"The Computation Graph — Visualizing Dependencies",body:`The forward pass forms a chain of dependencies:

x = a⁰ → z¹ → a¹ → z² → a² → ... → zᴸ → aᴸ → L

**Each arrow represents a function:**
zˡ = f(aˡ⁻¹, Wˡ, bˡ)  → linear: multiply and add
aˡ = g(zˡ)              → activation: element-wise nonlinearity
L = h(aᴸ, y)            → loss: scalar output

**The chain rule says:** to find how an early variable affects L, multiply the local derivatives along the path connecting them.

∂L/∂W¹ = (∂L/∂aᴸ)(∂aᴸ/∂zᴸ)(∂zᴸ/∂aᴸ⁻¹)...(∂a¹/∂z¹)(∂z¹/∂W¹)

**The backward pass** computes these products from right to left, reusing intermediate results. The δˡ at each layer is:

δᴸ → δᴸ⁻¹ → ... → δ² → δ¹

Each δˡ is computed from δˡ⁺¹ (the next layer's error), which is why it's called *back*propagation.`}],questions:[{q:"In a 5-layer network, how many chain-rule terms appear in the expression for ∂L/∂W¹ (the first layer's weight gradient)?",a:"The chain goes: L → aᴸ → zᴸ → aᴸ⁻¹ → zᴸ⁻¹ → ... → a¹ → z¹ → W¹. For L=5 layers, that's: ∂L/∂a⁵ × ∂a⁵/∂z⁵ × ∂z⁵/∂a⁴ × ∂a⁴/∂z⁴ × ∂z⁴/∂a³ × ∂a³/∂z³ × ∂z³/∂a² × ∂a²/∂z² × ∂z²/∂a¹ × ∂a¹/∂z¹ × ∂z¹/∂W¹ = 11 terms. In general, for layer l in an L-layer network: 2(L-l) + 1 terms (two per layer traversed, plus one for the loss and one for the final partial).",hint:"Trace the path from L to W¹ through every z and a node.",check:l=>l.includes("11")},{q:"Why do we define δˡ = ∂L/∂zˡ (with respect to the pre-activation z) rather than ∂L/∂aˡ (with respect to the activation)?",a:"Using ∂L/∂zˡ is more convenient because: (1) Weight gradients have a clean form: ∂L/∂Wˡ = (aˡ⁻¹)ᵀ × δˡ and ∂L/∂bˡ = δˡ (directly). (2) The recurrence relation between layers is cleaner: δˡ = (δˡ⁺¹ × (Wˡ⁺¹)ᵀ) ⊙ σ'(zˡ). If we used ∂L/∂aˡ, we'd need to multiply by σ'(zˡ) separately every time we wanted weight gradients, adding complexity. The pre-activation z is the 'natural' splitting point between the linear operation (which involves W) and the nonlinear operation (which involves σ).",hint:"Look at what multiplies δˡ to get weight gradients. What form is simpler?",check:l=>{const r=l.toLowerCase();return(r.includes("weight")||r.includes("clean")||r.includes("convenient")||r.includes("simpl"))&&(r.includes("gradient")||r.includes("∂l/∂w")||r.includes("recurrence"))}}]},{id:"deriv",icon:"⟵",color:"#DC2626",title:"Deriving the Four Fundamental Equations",subtitle:"The mathematical core — each equation derived from the chain rule step by step",resources:[{type:"infographic",title:"ML Cheatsheet — Backprop visual walkthrough",url:"https://ml-cheatsheet.readthedocs.io/en/latest/backpropagation.html"},{type:"read",title:"Michael Nielsen — The four fundamental equations (derivation)",url:"http://neuralnetworksanddeeplearning.com/chap2.html#the_four_fundamental_equations_behind_backpropagation"},{type:"read",title:"Colah — Calculus on Computational Graphs",url:"https://colah.github.io/posts/2015-08-Backprop/"},{type:"read",title:"arXiv — Backpropagation for a Math Student (Jacobian form)",url:"https://arxiv.org/abs/2301.09977"},{type:"video",title:"3Blue1Brown — Backpropagation calculus (Ch 4)",url:"https://www.youtube.com/watch?v=tIeHLnjs5U8"},{type:"video",title:"StatQuest — Backpropagation Clearly Explained",url:"https://www.youtube.com/watch?v=IN2XmBhILt4"}],content:[{heading:"Equation 1 — Output Layer Error δᴸ",body:`**What:** Compute the error at the output layer.

**Derivation:**
δᴸ = ∂L/∂zᴸ

By the chain rule, since aᴸ = σ(zᴸ):
**δᴸ = (∂L/∂aᴸ) ⊙ σ'(zᴸ)**

The ⊙ is element-wise multiplication (Hadamard product).

**For specific loss + activation combinations:**

**MSE loss + linear output (regression):**
L = ½||aᴸ - y||², σ = identity
∂L/∂aᴸ = (aᴸ - y), σ'(zᴸ) = 1
δᴸ = **(aᴸ - y)**

**Cross-entropy + sigmoid (binary classification):**
L = -[y log(aᴸ) + (1-y)log(1-aᴸ)], σ = sigmoid
∂L/∂aᴸ = -y/aᴸ + (1-y)/(1-aᴸ)
σ'(z) = σ(z)(1-σ(z))
After simplification: δᴸ = **(aᴸ - y)** ← Same elegant result!

**Cross-entropy + softmax (multi-class):**
δᴸ = **(aᴸ - y)** ← Same again! (where y is one-hot)

This beautiful simplification (the loss derivative and activation derivative cancel) is NOT a coincidence — it's why these loss/activation pairings were chosen.`},{heading:"Equation 2 — Error Propagation (The Recursion)",body:`**What:** Given δˡ⁺¹ (error at layer l+1), compute δˡ (error at layer l).

**Derivation:**
δˡ = ∂L/∂zˡ

Since zˡ⁺¹ depends on aˡ, and aˡ depends on zˡ:

∂L/∂zˡ = (∂L/∂zˡ⁺¹) × (∂zˡ⁺¹/∂aˡ) ⊙ (∂aˡ/∂zˡ)

Now compute each piece:
• ∂L/∂zˡ⁺¹ = δˡ⁺¹ (by definition)
• ∂zˡ⁺¹/∂aˡ = Wˡ⁺¹ (since zˡ⁺¹ = aˡWˡ⁺¹ + bˡ⁺¹, derivative w.r.t. aˡ is Wˡ⁺¹)
• ∂aˡ/∂zˡ = σ'(zˡ) (activation function derivative)

**Putting it together:**
**δˡ = (δˡ⁺¹ × (Wˡ⁺¹)ᵀ) ⊙ σ'(zˡ)**

**Interpretation:** The error at layer l =
(error from next layer, transformed back through the weights) × (how sensitive this layer's activation is to its input)

This is the **core recursion** of backpropagation. Starting from δᴸ, we compute δᴸ⁻¹, then δᴸ⁻², all the way back to δ¹. The matrix transpose (Wˡ⁺¹)ᵀ "rotates the error backward" through the connection weights.`},{heading:"Equations 3 & 4 — Weight and Bias Gradients",body:`**Once we have δˡ at every layer, weight gradients are straightforward.**

**Equation 3 — Weight gradient:**

∂L/∂Wˡ = ∂L/∂zˡ × ∂zˡ/∂Wˡ

Since zˡ = aˡ⁻¹ Wˡ + bˡ, we have ∂zˡ/∂Wˡ = (aˡ⁻¹)ᵀ

**∂L/∂Wˡ = (aˡ⁻¹)ᵀ × δˡ**

This is an **outer product** of the incoming activation and the error. Shape: (nₗ₋₁, nₗ) — same shape as Wˡ ✓

**Interpretation:** A weight wᵢⱼ connecting neuron i (input) to neuron j (output) has gradient = (activation of neuron i) × (error at neuron j). High activation × high error = large gradient = large update.

**Equation 4 — Bias gradient:**

∂L/∂bˡ = ∂L/∂zˡ × ∂zˡ/∂bˡ

Since zˡ = aˡ⁻¹ Wˡ + bˡ, we have ∂zˡ/∂bˡ = I (identity)

**∂L/∂bˡ = δˡ**

The bias gradient is just the error itself! The bias always has input = 1, so its gradient is simply how much the loss would decrease per unit change in bias.`},{heading:"Summary — The Four Equations",body:`**The complete backpropagation algorithm in four equations:**

**BP1:** δᴸ = (∂L/∂aᴸ) ⊙ σ'(zᴸ)
→ Compute error at output layer

**BP2:** δˡ = (δˡ⁺¹ × (Wˡ⁺¹)ᵀ) ⊙ σ'(zˡ)
→ Propagate error backward through each layer

**BP3:** ∂L/∂Wˡ = (aˡ⁻¹)ᵀ × δˡ
→ Compute weight gradient from error and incoming activation

**BP4:** ∂L/∂bˡ = δˡ
→ Bias gradient equals the error

**The Algorithm:**
1. **Forward pass:** compute z¹, a¹, z², a², ..., zᴸ, aᴸ. Store everything.
2. **Compute loss:** L = L(aᴸ, y)
3. **Output error:** δᴸ (BP1)
4. **Backward pass:** for l = L-1, L-2, ..., 1: compute δˡ (BP2)
5. **Gradients:** for l = 1, ..., L: compute ∂L/∂Wˡ (BP3) and ∂L/∂bˡ (BP4)
6. **Update:** Wˡ ← Wˡ - η × ∂L/∂Wˡ, bˡ ← bˡ - η × ∂L/∂bˡ

**That's it.** Everything else is implementation detail.`}],questions:[{q:"Derive δᴸ for MSE loss L = ½(a - y)² with sigmoid activation a = σ(z). Show all steps.",a:"∂L/∂a = ∂[½(a-y)²]/∂a = (a - y). σ'(z) = σ(z)(1 - σ(z)) = a(1 - a). By BP1: δᴸ = ∂L/∂a ⊙ σ'(z) = (a - y) × a(1 - a). Note: this does NOT simplify to just (a - y). The clean form only works with cross-entropy + sigmoid pairing. With MSE + sigmoid, the a(1-a) term causes vanishing gradients when a is near 0 or 1 — this is why cross-entropy is preferred for classification.",hint:"Apply the chain rule: δ = ∂L/∂a × σ'(z). What's the derivative of ½(a-y)²?",check:l=>{const r=l.toLowerCase();return(r.includes("a-y")||r.includes("(a - y)"))&&(r.includes("a(1-a)")||r.includes("σ'")||r.includes("sigma")||r.includes("1-a"))}},{q:"Why does cross-entropy + sigmoid give δᴸ = (a - y) while MSE + sigmoid gives δᴸ = (a - y) × a(1-a)?",a:"With cross-entropy: ∂L/∂a = -y/a + (1-y)/(1-a). Multiplying by σ'(z) = a(1-a): δ = [-y/a + (1-y)/(1-a)] × a(1-a) = [-y(1-a) + (1-y)a] = -y + ya + a - ya = a - y. The a(1-a) from the sigmoid derivative CANCELS with the 1/a and 1/(1-a) from the cross-entropy derivative. This cancellation is by design — cross-entropy was chosen as the loss precisely because it produces clean, non-vanishing gradients when paired with sigmoid/softmax. MSE doesn't have this cancellation, leaving the a(1-a) factor that causes vanishing gradients when a is near 0 or 1.",hint:"Multiply out ∂L_CE/∂a × σ'(z) and simplify. What cancels?",check:l=>{const r=l.toLowerCase();return r.includes("cancel")&&(r.includes("cross-entropy")||r.includes("design")||r.includes("clean")||r.includes("vanish"))}},{q:"In BP2, δˡ = (δˡ⁺¹ × (Wˡ⁺¹)ᵀ) ⊙ σ'(zˡ). Explain intuitively what each of the three components does.",a:"Three components: (1) δˡ⁺¹ is the error signal from the next layer — 'how wrong were the neurons in layer l+1?' (2) (Wˡ⁺¹)ᵀ transposes the weight matrix to 'send the error backward' through the connections. Each neuron in layer l receives a weighted combination of errors from all neurons in layer l+1 that it connects to. The transpose reverses the direction of information flow. (3) σ'(zˡ) is the local sensitivity of the activation function at layer l. It determines how much a small change in zˡ affects aˡ. For ReLU: σ'=1 (gate is open) or σ'=0 (gate is closed, gradient dies). The ⊙ is element-wise because each neuron has its own independent activation.",hint:"Break it down: where does the error come from, how does it travel backward, and what modulates it?",check:l=>{const r=l.toLowerCase();return(r.includes("error")||r.includes("backward")||r.includes("back"))&&(r.includes("transpose")||r.includes("reverse")||r.includes("wᵀ")||r.includes("weight"))&&(r.includes("sensitivity")||r.includes("activation")||r.includes("σ'")||r.includes("gate"))}}]},{id:"worked",icon:"✎",color:"#0369A1",title:"Full Numerical Worked Example",subtitle:"Every number, every derivative — a complete forward + backward pass you can verify by hand",resources:[{type:"infographic",title:"Perceptron Demo — train step by step with weights shown",url:"https://perceptrondemo.com/"},{type:"read",title:"Jason Osajima — The Math Behind Backprop (detailed walkthrough)",url:"https://www.jasonosajima.com/backprop"},{type:"read",title:"Jeremy Jordan — Backprop training (matrix derivation)",url:"https://www.jeremyjordan.me/neural-networks-training/"},{type:"video",title:"Karpathy — micrograd (compute every gradient by hand)",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"}],content:[{heading:"Setup — The Network",body:`**Architecture:** 2 inputs → 2 hidden (ReLU) → 1 output (sigmoid)
**Task:** Binary classification with cross-entropy loss
**Learning rate:** η = 0.5

**Initial weights:**
W¹ = [[0.1, 0.3],   b¹ = [0.0, 0.0]
      [0.2, 0.4]]

W² = [[0.5],         b² = [0.0]
      [0.6]]

**Training example:** x = [1.0, 0.5], y = 1

This is small enough to compute entirely by hand. Every number below can be verified with a calculator.`},{heading:"Forward Pass — Compute Everything",body:`**Layer 1 (hidden):**
z¹ = x × W¹ + b¹
z¹ = [1.0, 0.5] × [[0.1, 0.3], [0.2, 0.4]] + [0, 0]
z¹ = [1.0×0.1 + 0.5×0.2, 1.0×0.3 + 0.5×0.4] + [0, 0]
z¹ = [0.1 + 0.1, 0.3 + 0.2]
**z¹ = [0.2, 0.5]**

a¹ = ReLU(z¹) = ReLU([0.2, 0.5])
**a¹ = [0.2, 0.5]** (both positive → unchanged)

**Layer 2 (output):**
z² = a¹ × W² + b²
z² = [0.2, 0.5] × [[0.5], [0.6]] + [0]
z² = [0.2×0.5 + 0.5×0.6]
z² = [0.1 + 0.3]
**z² = [0.4]**

a² = σ(z²) = σ(0.4) = 1/(1+e⁻⁰·⁴) = 1/1.6703
**a² = 0.5987**

**Loss:**
L = -[y log(a²) + (1-y)log(1-a²)]
L = -[1 × log(0.5987) + 0]
L = -(-0.5131)
**L = 0.5131**`},{heading:"Backward Pass — Compute All Gradients",body:`**Step 1: Output error (BP1)**
For cross-entropy + sigmoid: δ² = a² - y
**δ² = 0.5987 - 1 = [-0.4013]**

(Negative because our prediction 0.5987 is below the target 1. The network needs to increase its output.)

**Step 2: Output weight & bias gradients (BP3, BP4)**
∂L/∂W² = (a¹)ᵀ × δ²
= [[0.2], [0.5]] × [-0.4013]
**∂L/∂W² = [[-0.0803], [-0.2007]]**

∂L/∂b² = δ²
**∂L/∂b² = [-0.4013]**

**Step 3: Propagate error to hidden layer (BP2)**
δ¹ = (δ² × (W²)ᵀ) ⊙ ReLU'(z¹)
= [-0.4013] × [[0.5, 0.6]] ⊙ [1, 1]
= [-0.2007, -0.2408] ⊙ [1, 1]
**δ¹ = [-0.2007, -0.2408]**

(ReLU'(z¹) = [1, 1] because both z¹ values were positive)

**Step 4: Hidden weight & bias gradients (BP3, BP4)**
∂L/∂W¹ = (a⁰)ᵀ × δ¹ = (x)ᵀ × δ¹
= [[1.0], [0.5]] × [-0.2007, -0.2408]
**∂L/∂W¹ = [[-0.2007, -0.2408], [-0.1003, -0.1204]]**

∂L/∂b¹ = δ¹
**∂L/∂b¹ = [-0.2007, -0.2408]**`},{heading:"Weight Update — Apply Gradient Descent",body:`**Update W² (η = 0.5):**
W² ← W² - 0.5 × ∂L/∂W²
= [[0.5], [0.6]] - 0.5 × [[-0.0803], [-0.2007]]
= [[0.5 + 0.0401], [0.6 + 0.1003]]
**W²_new = [[0.5401], [0.7003]]**

**Update b² (η = 0.5):**
b² ← b² - 0.5 × [-0.4013] = [0 + 0.2007]
**b²_new = [0.2007]**

**Update W¹ (η = 0.5):**
W¹ ← W¹ - 0.5 × ∂L/∂W¹
= [[0.1, 0.3], [0.2, 0.4]] - 0.5 × [[-0.2007, -0.2408], [-0.1003, -0.1204]]
**W¹_new = [[0.2003, 0.4204], [0.2502, 0.4602]]**

**Update b¹:**
**b¹_new = [0.1003, 0.1204]**

**Verify improvement:** Rerun forward pass with new weights:
z¹ = [0.3254, 0.6505], a¹ = [0.3254, 0.6505]
z² = [0.3769 + 0.4556 + 0.2007] = [0.6312] (approximately)
a² = σ(0.6312) ≈ 0.653

**Loss dropped from 0.5131 to ~0.426.** The network learned! One step of gradient descent moved the output closer to the target.`}],questions:[{q:"In the worked example, if z¹ = [0.2, -0.3] instead of [0.2, 0.5], how would δ¹ change?",a:"With z¹ = [0.2, -0.3], ReLU'(z¹) = [1, 0] (1 for the positive element, 0 for the negative). Then δ¹ = [-0.2007, -0.2408] ⊙ [1, 0] = [-0.2007, 0]. The second neuron's gradient is killed — it's a 'dead' neuron for this example. The error signal through it is zero, so its incoming weights won't be updated. This is the dead ReLU problem in action: the neuron with z < 0 blocks all gradient flow.",hint:"Compute ReLU'(-0.3). What happens when you multiply the error by 0?",check:l=>{const r=l.replace(/\s/g,"");return r.includes("0]")&&(r.includes("[1,0]")||l.toLowerCase().includes("zero")||l.toLowerCase().includes("dead")||l.toLowerCase().includes("killed"))}},{q:"In BP3, ∂L/∂W¹ = xᵀ × δ¹. Why is this an outer product, and what shape does it have?",a:"xᵀ has shape (2, 1) — a column vector. δ¹ has shape (1, 2) — a row vector. Their product is (2,1) × (1,2) = (2,2) — a matrix. This is an outer product: every element (i,j) of the result = xᵢ × δ¹ⱼ. The shape (2,2) matches W¹, which connects 2 inputs to 2 hidden neurons — exactly one gradient per weight. Intuitively: the gradient of weight wᵢⱼ = (how active input i was) × (how wrong output j was). A weight connecting a high-activity input to a high-error neuron gets a large gradient.",hint:"What are the shapes of xᵀ and δ¹? Multiply a column by a row.",check:l=>{const r=l.toLowerCase();return(r.includes("outer product")||r.includes("(2,2)")||r.includes("2×2")||r.includes("column")||r.includes("row"))&&(r.includes("shape")||r.includes("match")||r.includes("weight"))}}]},{id:"matrix",icon:"J",color:"#B91C1C",title:"Matrix Calculus & Jacobians",subtitle:"The rigorous linear algebra behind backpropagation — Jacobian matrices and vector derivatives",resources:[{type:"read",title:"Stanford CS231n — Matrix Calculus primer",url:"https://cs231n.stanford.edu/slides/2018/cs231n_2018_ds02.pdf"},{type:"read",title:"arXiv — Backpropagation for a Math Student (Jacobian derivation)",url:"https://arxiv.org/abs/2301.09977"},{type:"read",title:"Matrix Cookbook — derivative identities reference",url:"https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf"},{type:"read",title:"d2l.ai — Automatic Differentiation (Ch 2.5)",url:"https://d2l.ai/chapter_preliminaries/autograd.html"},{type:"video",title:"3Blue1Brown — Essence of Calculus (chain rule foundations)",url:"https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr"}],content:[{heading:"Jacobian Matrix — Derivatives of Vector Functions",body:`When a function maps vectors to vectors, its derivative is a **Jacobian matrix**.

For f: ℝⁿ → ℝᵐ (n inputs, m outputs):

**J = [[∂f₁/∂x₁, ∂f₁/∂x₂, ..., ∂f₁/∂xₙ],
      [∂f₂/∂x₁, ∂f₂/∂x₂, ..., ∂f₂/∂xₙ],
      ...
      [∂fₘ/∂x₁, ∂fₘ/∂x₂, ..., ∂fₘ/∂xₙ]]**

Shape: (m, n) — one row per output, one column per input.

**For element-wise functions** (like ReLU applied element-by-element):
f(x) = [σ(x₁), σ(x₂), ..., σ(xₙ)]

The Jacobian is **diagonal**:
J = diag(σ'(x₁), σ'(x₂), ..., σ'(xₙ))

This is why the activation derivative appears as element-wise multiplication (⊙) in the backprop equations — multiplying by a diagonal matrix = element-wise multiplication.`},{heading:"Vector Chain Rule with Jacobians",body:`The chain rule for vector functions uses Jacobian matrix multiplication:

If h = g(f(x)), then:
**∂h/∂x = J_g × J_f**

(Jacobian of the outer function) × (Jacobian of the inner function)

**For a single layer:** a = σ(Wx + b)

**Jacobian of z = Wx + b w.r.t. x:** ∂z/∂x = W → shape (nₒᵤₜ, nᵢₙ)
**Jacobian of a = σ(z) w.r.t. z:** ∂a/∂z = diag(σ'(z)) → shape (nₒᵤₜ, nₒᵤₜ)

**Jacobian of a w.r.t. x:**
∂a/∂x = diag(σ'(z)) × W → shape (nₒᵤₜ, nᵢₙ)

**For the full network** (L layers):
∂aᴸ/∂x = J_L × J_{L-1} × ... × J_1

where each Jₗ = diag(σ'(zˡ)) × Wˡ

**Backpropagation computes this product from right to left (backward), reusing intermediate results (the δˡ values). The backward pass is essentially a sequence of Jacobian-vector products (JVPs), not full Jacobian computations.**`},{heading:"Gradient of Loss w.r.t. Weight Matrix",body:`For the loss L (scalar) and weight matrix Wˡ:

**∂L/∂Wˡ has the same shape as Wˡ** → (nₗ₋₁, nₗ)

**Derivation using total derivative:**
Since zˡ = aˡ⁻¹ Wˡ + bˡ, and L depends on Wˡ only through zˡ:

∂L/∂wˡᵢⱼ = Σₖ (∂L/∂zˡₖ)(∂zˡₖ/∂wˡᵢⱼ)

Since zˡₖ = Σₘ aˡ⁻¹ₘ wˡₘₖ + bˡₖ:
∂zˡₖ/∂wˡᵢⱼ = aˡ⁻¹ᵢ if k=j, else 0

Therefore:
∂L/∂wˡᵢⱼ = (∂L/∂zˡⱼ) × aˡ⁻¹ᵢ = δˡⱼ × aˡ⁻¹ᵢ

In matrix form:
**∂L/∂Wˡ = (aˡ⁻¹)ᵀ × δˡ**

This confirms BP3. The gradient matrix has a beautiful structure: each element is simply (activation of the source neuron) × (error at the destination neuron).`},{heading:"Forward Mode vs Reverse Mode (Why Reverse Wins)",body:`**Forward-mode AD (Jacobian-vector products, JVPs):**
Computes ∂output/∂input_i for ONE input dimension at a time.
Cost: one forward pass per input dimension.
For n inputs, m outputs: n passes to get all gradients.

**Reverse-mode AD (vector-Jacobian products, VJPs) = backpropagation:**
Computes ∂output_j/∂ALL_inputs for ONE output dimension at a time.
Cost: one backward pass per output dimension.
For n inputs, m outputs: m passes to get all gradients.

**In neural networks:**
• Inputs (parameters) = millions to billions (n is huge)
• Output (loss) = 1 scalar (m = 1)

**Forward mode:** millions of passes (one per parameter). Terrible.
**Reverse mode:** 1 pass (one per output = one loss). Perfect!

**This is why backpropagation uses reverse-mode AD.** It's optimal when you have many inputs (parameters) and few outputs (one loss value).

**The computational cost:**
• Forward pass: O(N) operations (N = network size)
• Backward pass: O(N) operations (roughly 2-3× forward)
• Total: O(N) regardless of parameter count — **remarkable efficiency**`}],questions:[{q:"What is the Jacobian of ReLU applied to a 3D vector z = [2, -1, 0.5]?",a:"ReLU is element-wise, so the Jacobian is diagonal. ReLU'(2) = 1, ReLU'(-1) = 0, ReLU'(0.5) = 1. Jacobian = diag(1, 0, 1) = [[1,0,0], [0,0,0], [0,0,1]]. The second diagonal element is 0 because z₂ = -1 < 0, so ReLU kills that dimension entirely. Multiplying by this diagonal matrix ≡ element-wise multiplication by [1, 0, 1] — which is exactly what the ⊙ σ'(z) in the backprop equations does.",hint:"ReLU is element-wise → Jacobian is diagonal. What's the derivative of ReLU at each element?",check:l=>{const r=l.replace(/\s/g,"");return r.includes("1,0,1")||r.includes("diag(1,0,1)")}},{q:"Why is reverse-mode AD (backprop) preferred over forward-mode AD for training neural networks?",a:"Neural network training has millions/billions of inputs (parameters) but only one output (scalar loss). Forward-mode computes gradients for one input per pass → needs millions of passes. Reverse-mode computes gradients for one output per pass → needs just 1 pass (since there's one loss). The ratio is n:1 where n = number of parameters. For GPT-3 with 175B parameters: forward-mode needs 175 billion passes, reverse-mode needs 1 pass. This asymmetry makes reverse-mode (backprop) the only viable choice.",hint:"Count: how many parameters (inputs) vs how many loss values (outputs)?",check:l=>{const r=l.toLowerCase();return(r.includes("one output")||r.includes("1 output")||r.includes("scalar")||r.includes("one loss"))&&(r.includes("million")||r.includes("billion")||r.includes("many input")||r.includes("many param"))}}]},{id:"practical",icon:"⚙",color:"#15803D",title:"Practical Backprop — Autograd, Pitfalls & Debugging",subtitle:"How it works in PyTorch, common failure modes, and gradient checking",resources:[{type:"infographic",title:"TensorFlow Playground — watch gradients flow",url:"https://playground.tensorflow.org/"},{type:"read",title:"Karpathy — A Recipe for Training Neural Networks",url:"https://karpathy.github.io/2019/04/25/recipe/"},{type:"read",title:"d2l.ai — Autograd (Ch 2.5)",url:"https://d2l.ai/chapter_preliminaries/autograd.html"},{type:"read",title:"PyTorch — Autograd mechanics docs",url:"https://pytorch.org/docs/stable/notes/autograd.html"},{type:"video",title:"Karpathy — micrograd (best autograd walkthrough)",url:"https://www.youtube.com/watch?v=VMj-3S1tku0"},{type:"video",title:"Karpathy — makemore Part 3 (BatchNorm, gradient diagnostics)",url:"https://www.youtube.com/watch?v=P6sfmUTpUmc"}],content:[{heading:"Autograd in PyTorch — How It Actually Works",body:`**PyTorch builds a computational graph dynamically during the forward pass:**

x = torch.tensor([1.0, 0.5], requires_grad=True)
W1 = torch.randn(2, 3, requires_grad=True)
b1 = torch.zeros(3, requires_grad=True)

# Each operation records itself in the graph
z1 = x @ W1 + b1       # records: AddBackward, MmBackward
a1 = torch.relu(z1)     # records: ReluBackward
W2 = torch.randn(3, 1, requires_grad=True)
z2 = a1 @ W2            # records: MmBackward
loss = F.binary_cross_entropy_with_logits(z2, target)

# One call computes ALL gradients via reverse-mode AD
loss.backward()

# Gradients are now stored:
W1.grad  # shape (2, 3) — ∂L/∂W1
W2.grad  # shape (3, 1) — ∂L/∂W2
b1.grad  # shape (3,)   — ∂L/∂b1

**Key implementation details:**
• **Gradient accumulation:** .grad ADDS to existing values. You must call optimizer.zero_grad() before each backward pass.
• **Graph destruction:** by default, .backward() destroys the graph. Use retain_graph=True to backprop twice.
• **Leaf tensors:** only tensors with requires_grad=True that were directly created (not computed) store .grad.
• **.detach()** removes a tensor from the computation graph — useful for stopping gradient flow.`},{heading:"Vanishing & Exploding Gradients — Diagnosis & Cures",body:`**Vanishing gradients:** δˡ → 0 as l decreases. Early layers don't learn.

**Symptoms:** training loss plateaus, early layer weights barely change, activation distributions collapse to narrow ranges.

**Causes:**
• Sigmoid/tanh saturation: σ'(z) < 0.25 when |z| is large
• Poor initialization: outputs of each layer shrink systematically
• Very deep networks without skip connections

**Cures:**
• ReLU/GELU activations (derivative = 1 in active region)
• Residual connections: output = x + F(x), so ∂output/∂x = I + ∂F/∂x
• Proper initialization (He/Xavier)
• Layer/Batch normalization
• Gradient clipping (for exploding gradients)

**Exploding gradients:** δˡ → ∞. Weights become NaN.

**Symptoms:** loss suddenly becomes NaN or infinity, weights grow to enormous values.

**Cures:**
• **Gradient clipping:** torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
• Lower learning rate
• Better initialization
• Residual connections (also help with this!)`},{heading:"Gradient Checking — Verifying Your Implementation",body:`**Gradient checking** compares analytical gradients (from backprop) with numerical gradients (from finite differences):

**Numerical gradient:**
∂L/∂wᵢ ≈ [L(w + εeᵢ) - L(w - εeᵢ)] / (2ε)

where eᵢ is a unit vector in the i-th direction and ε ≈ 1e-5.

**Comparison:**
relative_error = |grad_analytical - grad_numerical| / max(|grad_analytical|, |grad_numerical|, ε)

**Rule of thumb:**
• relative_error < 1e-7: perfect ✓
• relative_error < 1e-5: acceptable (usually floating-point issues)
• relative_error > 1e-3: BUG! Something is wrong.

**When to gradient check:**
• When implementing custom backward passes
• When using custom loss functions
• When debugging unexpected training behavior

**PyTorch provides:** torch.autograd.gradcheck(func, inputs) — does this automatically.

**Warning:** gradient checking is SLOW (requires 2 forward passes per parameter). Never use in training — only for debugging.`},{heading:"Backprop Through Time & Modern Extensions",body:`**Backprop Through Time (BPTT):**
For recurrent networks (RNNs, LSTMs), the computation graph is "unrolled" over time steps. Backpropagation flows backward through both layers AND time steps.

For T time steps: the gradient at time 1 involves a product of T Jacobians.
This is why RNNs suffer severely from vanishing/exploding gradients — LSTMs and GRUs were designed to mitigate this with gating mechanisms.

**Truncated BPTT:** limit backprop to the last K time steps instead of the full sequence. Trades gradient accuracy for computational feasibility.

**Transformers solved this differently:** self-attention processes all positions in parallel with direct connections. No sequential unrolling → no vanishing gradient through time. Each token directly attends to every other token, creating short gradient paths regardless of distance.

**Gradient checkpointing (memory optimization):**
Instead of storing ALL activations (memory = O(L)), store only a few "checkpoint" activations and recompute others during the backward pass.
Memory: O(√L) instead of O(L). Compute: ~1.33× forward pass cost.
Essential for training very large models like GPT-4 on limited GPU memory.

**Mixed precision training:** compute forward pass in fp16, accumulate gradients in fp32. Halves memory, 2× speedup on modern GPUs. Loss scaling prevents fp16 underflow in small gradients.`}],questions:[{q:"Why must you call optimizer.zero_grad() before each backward pass in PyTorch?",a:"PyTorch accumulates gradients by default — each .backward() call ADDS to the existing .grad values rather than replacing them. Without zeroing, gradients from the current batch would be summed with gradients from previous batches, producing incorrect updates. This accumulation behavior exists because it's useful for gradient accumulation (splitting a large batch across multiple micro-batches). But for standard training, you must explicitly zero the gradients before each new backward pass: optimizer.zero_grad() sets all .grad tensors to zero.",hint:"What does 'accumulate' mean for gradients? What happens if old gradients remain?",check:l=>{const r=l.toLowerCase();return(r.includes("accumulate")||r.includes("add"))&&(r.includes("previous")||r.includes("old")||r.includes("sum")||r.includes("incorrect"))}},{q:"You're training a 50-layer network and notice that the first 10 layers' weights haven't changed after 1000 epochs. What's happening and how do you fix it?",a:"Vanishing gradients. In a 50-layer network, the gradient signal shrinks as it propagates backward through each layer. After 40+ layers of multiplication by values < 1 (from activation derivatives and weight matrices), the gradient at layers 1-10 is effectively zero — these layers can't learn. Fixes: (1) Use ReLU or GELU activations instead of sigmoid/tanh (derivative = 1 in active region). (2) Add residual/skip connections (gradient flows directly through the identity path). (3) Use LayerNorm/BatchNorm to keep activations in a healthy range. (4) Use proper He/Xavier initialization. (5) Consider a shallower architecture if depth isn't needed.",hint:"If gradients must travel through 40+ layers, what happens to their magnitude?",check:l=>{const r=l.toLowerCase();return r.includes("vanish")&&(r.includes("relu")||r.includes("resid")||r.includes("skip")||r.includes("norm")||r.includes("init"))}},{q:"How do Transformers avoid the vanishing gradient problem that plagues RNNs?",a:"Two mechanisms: (1) Self-attention creates direct connections between all token positions regardless of distance. Unlike RNNs where information must flow sequentially through T time steps (gradient passes through T matrix multiplications), attention allows each token to directly attend to any other token — the gradient path is always just 1-2 steps through the attention mechanism, not T steps. (2) Residual connections in every Transformer block create 'gradient highways': output = x + Attention(x) + FFN(x), so the gradient always has a direct path (derivative = 1) bypassing the attention and FFN computations. Together, these ensure strong gradient flow even in 100+ layer models.",hint:"How many sequential steps must the gradient travel in an RNN vs a Transformer?",check:l=>{const r=l.toLowerCase();return(r.includes("direct")||r.includes("parallel")||r.includes("all position")||r.includes("any token"))&&(r.includes("residual")||r.includes("skip")||r.includes("highway")||r.includes("short"))}}]}];function wh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")},M=()=>E("revealed"),p=()=>{var S;E("idle"),U(""),(S=A.current)==null||S.focus()};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:S=>U(S.target.value),onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:M,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function xh({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=Br.reduce((d,g)=>d+g.content.length,0),P=Math.round(b.size/A*100),M=d=>q(K===d?null:d),p=(d,g)=>{g.stopPropagation();const N=new Set(b);N.has(d)?N.delete(d):N.add(d),U(N)},S=d=>D[d]||"learn",G=d=>d.split(`
`).map((g,N)=>{if(g==="")return a.jsx("div",{style:{height:8}},N);const v=g.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:v.map((z,C)=>C%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:z},C):a.jsx("span",{children:z},C))},N)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sec-card{transition:all .3s cubic-bezier(.4,0,.2,1)}.sec-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.block-row{transition:all .2s;cursor:pointer;border-radius:8px}.block-row:hover{background:rgba(0,0,0,.02)}.chk{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.chk.done{background:#059669;border-color:#059669;color:white}.arr{transition:transform .25s;font-size:16px;color:#aaa}.pfill{transition:width .5s cubic-bezier(.4,0,.2,1)}.tab-btn{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tab-btn.active{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tab-btn:not(.active){background:transparent;color:#888}.tab-btn:not(.active):hover{color:#555}.res-link{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.res-link:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.type-badge{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#DC2626!important}"}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"NEURAL NETWORK FUNDAMENTALS"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Backpropagation — The Full Derivation"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["The complete mathematical derivation — from the chain rule through the four fundamental equations, Jacobians, a full numerical example, and modern autograd. Every equation, every step, every gradient.",a.jsx("br",{}),Br.length," sections · ",A," concepts · ",Br.reduce((d,g)=>{var N;return d+(((N=g.questions)==null?void 0:N.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pfill",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #15803D)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Br.map(d=>{var C;const g=r===d.id,v=d.content.map((L,T)=>`${d.id}-${T}`).filter(L=>b.has(L)).length,z=S(d.id);return a.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(g?null:d.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:d.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:d.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:d.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:d.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[v,"/",d.content.length]}),a.jsx("span",{className:"arr",style:{transform:g?"rotate(90deg)":"rotate(0)"},children:"›"})]}),g&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tab-btn ${z==="learn"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tab-btn ${z==="practice"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"practice"})),children:["✏️ Practice (",((C=d.questions)==null?void 0:C.length)||0,")"]}),a.jsxs("button",{className:`tab-btn ${z==="deeper"?"active":""}`,onClick:()=>E(L=>({...L,[d.id]:"deeper"})),children:["🔗 Go Deeper (",d.resources.length,")"]})]}),z==="learn"&&a.jsx("div",{children:d.content.map((L,T)=>{const F=`${d.id}-${T}`,V=K===F,re=b.has(F);return a.jsxs("div",{style:{borderTop:T>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"block-row",onClick:()=>M(F),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`chk ${re?"done":""}`,onClick:ye=>p(F,ye),children:re&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:re?"#aaa":"#2a2a2a",textDecoration:re?"line-through":"none",flex:1},children:L.heading}),a.jsx("span",{className:"arr",style:{transform:V?"rotate(90deg)":"rotate(0)"},children:"›"})]}),V&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${d.color}20`,marginLeft:22},children:G(L.body)})]},T)})}),z==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(d.questions||[]).map((L,T)=>a.jsx(wh,{...L,color:d.color},`${d.id}-q-${T}`))]}),z==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:d.resources.map((L,T)=>{const F=vh[L.type];return a.jsxs("a",{href:L.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:F.bg+"55"},children:[a.jsxs("span",{className:"type-badge",style:{background:F.bg,color:F.color},children:[F.emoji," ",F.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:L.title})]},T)})})]})]})]},d.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Learn · Practice · Go Deeper — the algorithm that makes deep learning possible"})]})}const bh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ir=[{id:"why",icon:"¬",color:"#7C3AED",title:"Why Nonlinearity? The Fundamental Need",subtitle:"Without activation functions, deep learning is impossible — why linearity collapses",resources:[{type:"infographic",title:"TensorFlow Playground — compare linear vs nonlinear",url:"https://playground.tensorflow.org/"},{type:"read",title:"d2l.ai — Activation Functions",url:"https://d2l.ai/chapter_multilayer-perceptrons/mlp.html#activation-functions"},{type:"read",title:"Michael Nielsen — Ch 4: NNs compute any function",url:"http://neuralnetworksanddeeplearning.com/chap4.html"},{type:"video",title:"3Blue1Brown — But what is a neural network?",url:"https://www.youtube.com/watch?v=aircAruvnKk"}],content:[{heading:"The Linear Collapse Problem",body:`**Without activation functions, ANY number of layers collapses to one.**

Layer 1: h₁ = W₁x + b₁
Layer 2: h₂ = W₂h₁ + b₂ = W₂(W₁x + b₁) + b₂ = W₂W₁x + (W₂b₁ + b₂)
Layer N: hₙ = W_combined × x + b_combined

This is still a single linear transformation! 100 layers = 1 layer. The network learns only linear decision boundaries — straight lines, flat planes.

**Proof:** the composition of linear functions is linear: f(g(x)) = A(Bx+c)+d = ABx + (Ac+d). Still linear in x.

**Activation functions break this collapse** by introducing nonlinearity between layers. Each layer applies: h = **σ(Wx + b)** where σ is nonlinear. Now the composition is genuinely more complex at each layer.`},{heading:"What Makes a Good Activation Function?",body:`**Nonlinear:** obvious requirement — must break linearity
**Differentiable:** needed for gradient-based learning (backpropagation). Doesn't need to be differentiable *everywhere* (ReLU isn't at 0), but must have useful gradients almost everywhere.
**Monotonic** (mostly): non-monotonic functions (GELU, SiLU) can work but monotonicity simplifies optimization.
**Computationally cheap:** applied to EVERY neuron at EVERY layer. Even small overhead compounds.
**Non-vanishing gradients:** derivatives shouldn't shrink to 0 for large inputs, or early layers stop learning.
**Zero-centered outputs** (ideally): outputs centered around 0 help gradients converge faster (avoids zig-zagging).

**Desirable extras:**
• **Sparse activations:** some outputs = exactly 0 → efficiency (ReLU)
• **Smooth everywhere:** better optimization landscape (GELU, SiLU)
• **Bounded output** for final layer: sigmoid (0,1) or softmax (probability dist)

No single function satisfies all criteria — every activation is a tradeoff.`},{heading:"Biological Motivation",body:`**Real neurons fire in a threshold-like manner:**
• Below threshold: no firing (output ≈ 0)
• Above threshold: fires (output ≈ 1)
• The transition is smooth, not perfectly binary

This inspired the **sigmoid** σ(z) = 1/(1+e⁻ᶻ) — a smooth, bounded S-curve mimicking neural firing rates.

**More biologically plausible:** ReLU
• Neuroscientists found that real neuron firing rates are approximately **linearly proportional** to input current above a threshold, not sigmoidal
• Hahnloser et al. (2000) showed ReLU better approximates biological firing: zero below threshold, linear above
• This biological insight, combined with computational advantages, drove ReLU's adoption

**The honest truth:** modern activation functions (GELU, SwiGLU) are chosen for **engineering** reasons — gradient flow, training stability, benchmark performance — not biological plausibility. The biological metaphor launched the field but no longer drives it.`}],questions:[{q:"Prove mathematically that stacking 3 linear layers (no activations) is equivalent to a single layer.",a:"Let h₁ = W₁x + b₁, h₂ = W₂h₁ + b₂, h₃ = W₃h₂ + b₃. Substituting: h₃ = W₃(W₂(W₁x + b₁) + b₂) + b₃ = W₃W₂W₁x + W₃W₂b₁ + W₃b₂ + b₃. Let W* = W₃W₂W₁ and b* = W₃W₂b₁ + W₃b₂ + b₃. Then h₃ = W*x + b* — a single linear transformation. No matter how many layers, the result is always a single matrix multiplication plus bias. QED.",hint:"Substitute each layer into the next. What form does the final expression have?",check:l=>{const r=l.toLowerCase();return(r.includes("w*")||r.includes("w₃w₂w₁")||r.includes("w3w2w1")||r.includes("single"))&&(r.includes("linear")||r.includes("equivalent"))}},{q:"A network uses ReLU activations and produces many neurons with output = exactly 0 on a given input. Is this a bug or a feature? Why?",a:"It's a feature — this is called sparse activation. When ReLU outputs 0 for many neurons, only a subset of the network is 'active' for any given input. Benefits: (1) Computational efficiency — zero outputs require no further computation in the next layer. (2) Representational efficiency — different inputs activate different subsets of neurons, creating specialized 'pathways.' (3) Biological plausibility — real brains use sparse coding. However, if neurons are PERMANENTLY zero for ALL inputs (not just some), that's the 'dead ReLU' problem — a bug, not a feature.",hint:"Think about what happens when only some neurons fire for a given input. Is that useful?",check:l=>{const r=l.toLowerCase();return r.includes("feature")&&(r.includes("sparse")||r.includes("efficien")||r.includes("subset"))}}]},{id:"classic",icon:"σ",color:"#0369A1",title:"The Classics — Sigmoid & Tanh",subtitle:"The first generation (1980s–2000s) — elegant mathematics, fundamental limitations",resources:[{type:"infographic",title:"Dashee87 — Activation functions visualized",url:"https://dashee87.github.io/deep%20learning/visualising-activation-functions-in-neural-networks/"},{type:"read",title:"Georgia Tech — Navigating State-of-the-Art Activation Functions",url:"https://sites.gatech.edu/omscs7641/2024/01/31/navigating-neural-networks-exploring-state-of-the-art-activation-functions/"},{type:"read",title:"dublog — All the Activation Functions (comprehensive)",url:"https://dublog.net/blog/all-the-activations/"},{type:"video",title:"StatQuest — Sigmoid & Softmax explained",url:"https://www.youtube.com/watch?v=KpKog-L9veg"}],content:[{heading:"Sigmoid — σ(z) = 1/(1+e⁻ᶻ)",body:`**Origin:** inspired by logistic growth curves in biology (Verhulst, 1838). Adopted for neural networks because it maps any real number to (0,1) — interpretable as a probability.

**Formula:** σ(z) = 1 / (1 + e⁻ᶻ)
**Range:** (0, 1)
**Derivative:** σ'(z) = σ(z)(1 - σ(z))
**Max derivative:** 0.25 at z = 0

**Properties:**
• Smooth and differentiable everywhere ✓
• Output bounded in (0,1) ✓ — natural for probabilities
• Monotonically increasing ✓
• **NOT zero-centered** ✗ — all outputs > 0
• **Saturates** for |z| > 5 ✗ — derivative ≈ 0, causing vanishing gradients

**The vanishing gradient disaster:**
After L layers of sigmoid: max gradient ≤ 0.25ᴸ
• 10 layers: 0.25¹⁰ ≈ 10⁻⁶
• 20 layers: 0.25²⁰ ≈ 10⁻¹²

Early layers receive essentially zero gradient → they cannot learn.

**Still used today:** ONLY in the output layer for binary classification, and inside LSTM gates. Never in hidden layers of deep networks.`},{heading:"Tanh — tanh(z) = (eᶻ - e⁻ᶻ)/(eᶻ + e⁻ᶻ)",body:`**Origin:** the hyperbolic tangent is a classical mathematical function. Adopted because it's a zero-centered version of sigmoid.

**Relationship:** tanh(z) = 2σ(2z) - 1. It's literally a rescaled, shifted sigmoid.

**Range:** (-1, 1)
**Derivative:** tanh'(z) = 1 - tanh²(z)
**Max derivative:** 1.0 at z = 0

**Improvements over sigmoid:**
• **Zero-centered** ✓ — outputs are symmetric around 0, producing better gradient dynamics (no systematic positive bias in weight updates)
• **Stronger gradients** ✓ — max derivative is 1.0 vs sigmoid's 0.25
• **Still saturates** ✗ — for |z| > 3, tanh(z) ≈ ±1 and derivative ≈ 0

**LeCun's recommendation (1998):** "Use tanh with target values in {-1, 1} rather than sigmoid with {0, 1}." This was the standard for a decade.

**Still used today:** in LSTM/GRU gates (alongside sigmoid), and occasionally as output activation when bounded (-1, 1) output is needed.`},{heading:"Why the Classics Failed for Deep Networks",body:`**The saturation problem:**
When |z| is large, both sigmoid and tanh "saturate" — their outputs flatten and derivatives approach 0.

For sigmoid at z = 10: σ(10) = 0.99995, σ'(10) = 0.000045
For tanh at z = 5: tanh(5) = 0.9999, tanh'(5) = 0.00018

**Consequence for backpropagation:**
δˡ = (δˡ⁺¹ × Wᵀ) ⊙ **σ'(zˡ)**

If σ'(zˡ) ≈ 0, then δˡ ≈ 0 regardless of the error signal from later layers. The error is "squashed" and cannot propagate backward.

**The not-zero-centered problem (sigmoid only):**
If all inputs to a neuron are positive (all sigmoid outputs), then:
∂L/∂w = x × δ → all components of ∂L/∂w have the same sign

This forces weight updates to all go in the same direction (all increase or all decrease), causing a **zig-zag** optimization path that slows convergence.

**These problems drove the search for better activations — enter ReLU.**`}],questions:[{q:"Compute σ(0), σ(2), σ(-2), and σ'(0), σ'(2), σ'(-2) for the sigmoid function.",a:"σ(0) = 1/(1+e⁰) = 1/2 = 0.5. σ(2) = 1/(1+e⁻²) = 1/1.135 ≈ 0.881. σ(-2) = 1/(1+e²) = 1/8.389 ≈ 0.119. σ'(0) = 0.5×0.5 = 0.25. σ'(2) = 0.881×0.119 ≈ 0.105. σ'(-2) = 0.119×0.881 ≈ 0.105. Notice: σ'(z) is symmetric around z=0 and peaks at 0.25 — already less than 1, causing gradient shrinkage.",hint:"σ(z) = 1/(1+e⁻ᶻ), σ'(z) = σ(z)(1-σ(z)).",check:l=>l.includes("0.5")&&l.includes("0.25")&&(l.includes("0.881")||l.includes("0.88")||l.includes("0.105")||l.includes("0.10"))},{q:"Why is tanh preferred over sigmoid for hidden layers, even though both suffer from vanishing gradients?",a:"Two reasons: (1) Tanh is zero-centered — outputs range from -1 to 1, so the mean output is approximately 0. This means gradients for weights can be both positive and negative, avoiding the zig-zag optimization path that sigmoid causes (where all gradients have the same sign). (2) Tanh has a stronger maximum derivative (1.0 vs 0.25), so gradients vanish more slowly per layer. After 10 layers: tanh worst case ≈ 1.0¹⁰ in theory (though saturation makes it worse in practice) vs sigmoid's 0.25¹⁰ ≈ 10⁻⁶.",hint:"Compare: output ranges, max derivatives, and zero-centeredness.",check:l=>{const r=l.toLowerCase();return r.includes("zero-centered")||r.includes("zero")&&r.includes("center")||r.includes("stronger")||r.includes("1.0")}}]},{id:"relu",icon:"⌐",color:"#DC2626",title:"ReLU & Variants — The Deep Learning Revolution",subtitle:"The function that made deep learning possible (2010–2016) — and its family of fixes",resources:[{type:"infographic",title:"Brenndoerfer — FFN Activation Functions interactive (ReLU section)",url:"https://mbrenndoerfer.com/writing/ffn-activation-functions"},{type:"read",title:"Wikipedia — Rectified linear unit (comprehensive history)",url:"https://en.wikipedia.org/wiki/Rectified_linear_unit"},{type:"read",title:"Glorot et al. 2011 — Deep Sparse Rectifier NNs (ReLU paper)",url:"https://proceedings.mlr.press/v15/glorot11a.html"},{type:"read",title:"Yiqing Liang — Evolution from ReLU to SwiGLU",url:"https://lynl7130.github.io/blog/posts/activation-functions.html"},{type:"video",title:"StatQuest — ReLU Clearly Explained",url:"https://www.youtube.com/watch?v=68BZ5f7P94Q"},{type:"video",title:"Karpathy — makemore Part 3 (activation distributions)",url:"https://www.youtube.com/watch?v=P6sfmUTpUmc"}],content:[{heading:"ReLU — max(0, z)",body:`**Origin:** First studied by Hahnloser et al. (2000) as a biological model of neural firing rates. Applied to deep networks by Nair & Hinton (2010), then popularized by Glorot et al. (2011). AlexNet (Krizhevsky et al., 2012) used ReLU to win ImageNet and kicked off the deep learning revolution.

**Formula:** ReLU(z) = max(0, z)
**Range:** [0, ∞)
**Derivative:** 0 if z < 0, 1 if z > 0 (undefined at z = 0, set to 0 in practice)

**Why ReLU changed everything:**
1. **No vanishing gradient for positive inputs:** derivative = 1. Error propagates unchanged through active neurons.
2. **Sparse activations:** ~50% of neurons output exactly 0 → computational efficiency + implicit regularization.
3. **Trivially cheap:** just a comparison (if z > 0: output z, else 0). No exp(), no division. Orders of magnitude faster than sigmoid/tanh.
4. **Biologically plausible:** resembles actual neural firing rate vs. input current curves.

**Impact:** Enabled training of networks with dozens of layers without vanishing gradients. Before ReLU: ~5 layers max. After ReLU: 100+ layers became feasible.`},{heading:"The Dead ReLU Problem & Fixes",body:`**Dead ReLU:** If a neuron's weights cause z < 0 for ALL training inputs, ReLU outputs 0 forever. Gradient = 0 → weights never update → neuron is permanently dead.

**How it happens:** a large gradient step pushes weights so that z = Wx + b < 0 for all x. Once dead, there's no recovery.

**Leaky ReLU (Maas et al., 2013):**
f(z) = z if z > 0, **0.01z** if z ≤ 0
• Small gradient (0.01) for negative inputs → neurons can recover
• Almost no computational cost over ReLU

**Parametric ReLU / PReLU (He et al., 2015):**
f(z) = z if z > 0, **αz** if z ≤ 0 where α is **learned**
• The network decides the best negative slope per channel
• Introduced in the paper that also gave us He initialization

**ELU — Exponential Linear Unit (Clevert et al., 2015):**
f(z) = z if z > 0, α(eᶻ - 1) if z ≤ 0
• Smoothly approaches -α for very negative inputs
• Zero-centered outputs (mean closer to 0)
• More expensive (requires exp) but better gradient flow

**Practical impact:** Leaky ReLU is the go-to if dead neurons are a concern. PReLU if you can afford the extra parameters. ELU for architectures needing zero-centered outputs.`},{heading:"ReLU's Legacy — What It Proved",body:`**Before ReLU:** "You need smooth, bounded, biologically inspired activations"
**After ReLU:** "You just need nonlinearity. The simpler, the better."

**Key insights ReLU established:**
1. **Simplicity wins:** the simplest possible nonlinearity outperforms sophisticated ones
2. **Gradient flow matters more than mathematical elegance:** a piecewise-linear function with a non-differentiable point beats smooth sigmoids
3. **Sparsity is valuable:** half the neurons being "off" is a feature, not a limitation
4. **Computational efficiency is a first-class concern:** the gap between ReLU and sigmoid matters at scale

**ReLU in practice today:**
• **CNNs:** still the default for most convolutional networks
• **MLPs:** excellent default choice for hidden layers
• **Transformers:** replaced by GELU/SwiGLU (better for very deep, very large models)
• **Not used as output activation:** unbounded, non-probabilistic

**Parameter-free:** ReLU has ZERO learnable parameters — it's purely a fixed function. This simplicity is part of its power.`}],questions:[{q:"A layer has 1000 neurons using ReLU. After training, 400 neurons are always outputting 0 for every input in the training set. What percentage of the layer is 'dead' and what is the impact?",a:"40% of neurons are dead (400/1000). Impact: the effective capacity of this layer is only 600 neurons — 40% of the parameters (weights connecting to these neurons) are wasted. The network is learning with only 60% of its intended capacity. Fixes: (1) Switch to Leaky ReLU to allow recovery. (2) Reduce the learning rate — large steps likely caused the deaths. (3) Re-initialize the dead neurons' weights. (4) Check initialization — poor init can cause neurons to start dead.",hint:"Dead neurons output 0 for all inputs. What fraction of capacity is lost?",check:l=>l.includes("40")&&(l.toLowerCase().includes("dead")||l.toLowerCase().includes("wast")||l.toLowerCase().includes("capacity"))},{q:"Why doesn't the non-differentiability of ReLU at z=0 cause problems for gradient-based training?",a:"Three reasons: (1) The probability of z being exactly 0.0 (to floating-point precision) is essentially zero for continuous inputs — it almost never happens in practice. (2) When it does, PyTorch/TensorFlow set the derivative to 0 by convention, which is fine because one point doesn't affect the overall gradient. (3) ReLU is differentiable everywhere EXCEPT at z=0. The gradient is well-defined for z<0 (gradient=0) and z>0 (gradient=1) — the 'kink' at zero is a set of measure zero, meaning it contributes nothing to integrals/expectations used in optimization.",hint:"How often is z exactly equal to 0.0 in floating point? What does 'measure zero' mean?",check:l=>{const r=l.toLowerCase();return(r.includes("never")||r.includes("rare")||r.includes("zero")||r.includes("measure"))&&(r.includes("practice")||r.includes("float")||r.includes("convention"))}}]},{id:"modern",icon:"⌓",color:"#0E7490",title:"GELU, SiLU/Swish & the Modern Era",subtitle:"The smooth activations powering BERT, GPT, and every major LLM (2016–present)",resources:[{type:"infographic",title:"Brenndoerfer — GELU vs SiLU vs ReLU interactive comparison",url:"https://mbrenndoerfer.com/writing/ffn-activation-functions"},{type:"read",title:"Hendrycks & Gimpel 2016 — GELU paper",url:"https://arxiv.org/abs/1606.08415"},{type:"read",title:"Ramachandran et al. 2017 — Swish (Searching for Activation Functions)",url:"https://arxiv.org/abs/1710.05941"},{type:"read",title:"Hector Motsepe — GELU: Bridging Deterministic & Stochastic",url:"https://motsepe-jr.github.io/blogs/gelu/"},{type:"video",title:"Karpathy — Let's build GPT (GELU in context)",url:"https://www.youtube.com/watch?v=kCc8FmEb1nY"}],content:[{heading:"GELU — Gaussian Error Linear Unit",body:`**Origin:** Hendrycks & Gimpel (2016). Key insight: combine the ideas of ReLU (gating based on input value) and dropout (stochastic regularization) into a single deterministic function.

**Conceptual derivation:** Imagine applying stochastic ReLU where each input has a probability of being zeroed out, and that probability depends on the input's value:
• Large positive inputs: almost certainly kept (probability ≈ 1)
• Large negative inputs: almost certainly dropped (probability ≈ 0)
• Near-zero inputs: kept with ~50% probability

The "probability of being kept" = Φ(x), the standard Gaussian CDF. The expected output:

**GELU(x) = x × Φ(x)** where Φ(x) = P(X ≤ x) for X ~ N(0,1)

**Approximations (used in practice):**
• tanh approx: GELU(x) ≈ 0.5x(1 + tanh[√(2/π)(x + 0.044715x³)])
• sigmoid approx: GELU(x) ≈ x × σ(1.702x)

**Key properties:**
• **Smooth everywhere** (no kink like ReLU)
• **Non-monotonic** — has a small "bump" below zero (unique among major activations)
• **Allows small negative outputs** — richer representations than ReLU's hard zero
• **Derivative can be > 1** briefly, aiding gradient flow

**Used in:** BERT, GPT-2, GPT-3, RoBERTa, ViT — the de facto standard for Transformer encoder models.`},{heading:"SiLU/Swish — Sigmoid Linear Unit",body:`**Origin:** Two independent discoveries:
1. **SiLU** — introduced in the 2016 GELU paper as a simpler alternative
2. **Swish** — "discovered" by Google Brain in 2017 using neural architecture search (reinforcement learning found it as the best activation function)

**Formula:** SiLU(x) = x × σ(x) where σ = sigmoid

**Relationship to GELU:** Nearly identical! The Gaussian CDF Φ(x) and the sigmoid σ(1.702x) are very similar S-curves. The practical difference between GELU and SiLU is small.

**Properties:**
• Smooth everywhere ✓
• Non-monotonic (small bump below zero) ✓
• **Derivative can exceed 1** (peaks ~1.1 near x ≈ 1.5) — slightly stronger gradient flow than GELU
• Computationally cheaper than GELU (just sigmoid, no tanh or erf)

**Swish-β:** f(x) = x × σ(βx). When β = 0 → linear, β → ∞ → approaches ReLU. β is typically fixed to 1 or learned.

**Why it matters:** SiLU/Swish is the foundation of SwiGLU, the activation used in Llama, PaLM, Gemma, and Mistral. When Meta released Llama in 2023 with SiLU-based SwiGLU, adoption exploded across the open-source community.`},{heading:"The Unifying Pattern: x × F_cdf(x)",body:`**All major post-2016 activations share one pattern:**

**f(x) = x × CDF(x)**

where CDF is some S-shaped cumulative distribution function:
• **GELU:** x × Φ(x) where Φ = Gaussian CDF
• **SiLU/Swish:** x × σ(x) where σ = logistic CDF (sigmoid)
• **SoLU:** x × softmax(x) (used in Anthropic's interpretability research)

**Why this pattern works:**
1. For large positive x: CDF(x) ≈ 1, so f(x) ≈ x (like ReLU)
2. For large negative x: CDF(x) ≈ 0, so f(x) ≈ 0 (like ReLU)
3. Near zero: smooth transition — small negative values can "leak through"
4. The derivative is smooth and can exceed 1 — better gradient flow than ReLU

**The difference between GELU and SiLU is which CDF you use** — Gaussian vs logistic. They're so similar that the practical difference is negligible. The choice often comes down to which framework/hardware implements which function faster.

**Historical irony:** the architecture search that "discovered" Swish spent enormous compute to find a function nearly identical to one proposed a year earlier (SiLU).`}],questions:[{q:"GELU allows small negative outputs while ReLU does not. Why is this potentially beneficial for learning?",a:"When ReLU hard-zeros all negative inputs, it completely discards information about inputs that are slightly negative. GELU's smooth transition means slightly negative inputs produce small negative outputs, preserving some information about their magnitude. This gives the network more representational capacity — it can distinguish between 'slightly negative' and 'very negative' inputs, rather than mapping both to 0. In Transformers processing language, this nuance matters: a token that 'almost' matches a pattern is different from one that doesn't match at all, and GELU preserves this distinction.",hint:"What information is lost when ReLU maps z = -0.01 and z = -100 to the same output (0)?",check:l=>{const r=l.toLowerCase();return(r.includes("information")||r.includes("distinguish")||r.includes("nuance")||r.includes("preserv"))&&(r.includes("negative")||r.includes("slightly")||r.includes("small"))}},{q:"Why did Google need a neural architecture search to 'discover' Swish, when SiLU (same function) was proposed a year earlier?",a:"The architecture search was looking for the best activation function from a combinatorial space of possible compositions (using building blocks like sigmoid, tanh, exp, +, ×). It independently converged on x × σ(x) = SiLU from a different starting point, validating the function through extensive benchmarks rather than theoretical reasoning. The researchers weren't aware of the prior SiLU proposal. This is actually valuable — it provides empirical evidence that x × σ(x) is genuinely optimal, not just theoretically appealing. Two independent paths converging on the same answer gives more confidence than either alone. It also highlights a common pattern in ML: rediscovery with better experimental validation.",hint:"Think about the difference between finding something by theory vs. finding it by search.",check:l=>{const r=l.toLowerCase();return r.includes("independent")||r.includes("valid")||r.includes("empiric")||r.includes("not aware")||r.includes("rediscover")||r.includes("converge")}}]},{id:"gated",icon:"⊗",color:"#B91C1C",title:"GLU, SwiGLU & Gated Activations",subtitle:"The gating mechanism powering Llama, PaLM, Gemma, and Mistral (2017–present)",resources:[{type:"read",title:"Shazeer 2020 — GLU Variants Improve Transformer (SwiGLU paper)",url:"https://arxiv.org/abs/2002.05202"},{type:"read",title:"Vitalab — Recent Activation Functions (GLU family)",url:"https://vitalab.github.io/blog/2024/08/20/new_activation_functions.html"},{type:"read",title:"dublog — All the Activations (GLU/SwiGLU section)",url:"https://dublog.net/blog/all-the-activations/"},{type:"video",title:"Karpathy — Let's build GPT (FFN implementation)",url:"https://www.youtube.com/watch?v=kCc8FmEb1nY"}],content:[{heading:"Gated Linear Units (GLU) — The Idea",body:`**Origin:** Dauphin et al. (2017) introduced GLU for convolutional language models.

**Core insight:** instead of applying a fixed activation function, let the network **learn what to pass through** using a gate.

**Formula:** GLU(x) = (xW₁ + b₁) ⊗ σ(xW₂ + b₂)

• **xW₁ + b₁** = the "content" — linear transformation of input
• **σ(xW₂ + b₂)** = the "gate" — sigmoid decides what passes through (values 0-1)
• **⊗** = element-wise multiplication

**Intuition:** the gate learns an input-dependent filter. For each dimension, the network decides: "should I pass this information to the next layer, and if so, how much?"

This is inspired by **LSTM gates** — the forget gate and input gate in LSTMs control information flow in exactly this way. GLU brings gating to feed-forward layers.

**Key difference from fixed activations:** ReLU/GELU apply the SAME function to every input. GLU learns a DIFFERENT filter for each input — much more expressive.`},{heading:"SwiGLU — The State of the Art",body:`**Origin:** Noam Shazeer (2020), in a remarkably concise 5-page paper "GLU Variants Improve Transformer."

**Formula:** SwiGLU(x) = (SiLU(xW_gate)) ⊗ (xW_up)

Expanded: SwiGLU(x) = [xW_gate × σ(xW_gate)] ⊗ (xW_up)

Then projected back: output = SwiGLU(x) × W_down

**Three weight matrices:**
• **W_gate** (d_model → d_ff): produces the gating signal, activated by SiLU
• **W_up** (d_model → d_ff): produces the content to be gated
• **W_down** (d_ff → d_model): projects back to model dimension

**Parameter budget:** 3 matrices of size d_model × (2/3 × 4 × d_model) ≈ same total parameters as 2 matrices of d_model × 4 × d_model in the standard FFN.

**Why SwiGLU wins over standard FFN:**
• The gating mechanism creates input-dependent activation — more expressive
• SiLU's smooth gradient helps training stability
• Consistently outperforms GELU-based FFNs at the same parameter count in benchmarks

**Used in:** Llama 1/2/3, PaLM, PaLM 2, Gemma, Gemini, Mistral, Mixtral, Phi-3 — essentially all modern open-weight LLMs.`},{heading:"The GLU Family — Variants at a Glance",body:`All GLU variants share the same structure: **output = activation(xW₁) ⊗ (xW₂)**

The difference is which activation function is used for the gate:

**GLU:** σ(xW₁) ⊗ xW₂ — original, sigmoid gate
**ReGLU:** ReLU(xW₁) ⊗ xW₂ — ReLU gate
**GEGLU:** GELU(xW₁) ⊗ xW₂ — GELU gate
**SwiGLU:** SiLU(xW₁) ⊗ xW₂ — SiLU/Swish gate

**Benchmark results (Shazeer 2020):**
SwiGLU ≈ GEGLU > ReGLU > GLU > standard GELU FFN

The gated variants consistently outperform non-gated alternatives. SwiGLU and GEGLU are essentially tied at the top.

**Why gating helps:** A fixed activation applies the same nonlinearity everywhere. A gate learns to **selectively suppress or amplify** different dimensions based on the input content. This input-dependent filtering is analogous to attention (which selectively combines tokens) — but applied within a single token's representation.

**Practical note:** SwiGLU requires ~50% more matrix multiplications than a standard FFN (3 matrices vs 2), but the d_ff dimension is reduced to compensate, keeping total FLOPs comparable.`}],questions:[{q:"In SwiGLU, why are there 3 weight matrices instead of 2? What does each one do?",a:"W_gate (d_model → d_ff): its output is passed through SiLU to produce the gating signal — values that control how much of each dimension passes through. W_up (d_model → d_ff): a separate linear projection that produces the 'content' — the actual information to be filtered by the gate. W_down (d_ff → d_model): projects the gated result back to the model dimension. The key insight is that the gate and content are computed from SEPARATE projections of the same input — this gives the network more flexibility than applying a fixed activation to a single projection (which is what standard FFNs do).",hint:"One matrix produces the gate, one produces the content, one projects back. Why separate gate and content?",check:l=>{const r=l.toLowerCase();return r.includes("gate")&&r.includes("content")||r.includes("separate")&&r.includes("project")}},{q:"How is GLU's gating mechanism conceptually related to LSTM gates?",a:"Both use learned sigmoid gates to control information flow. In an LSTM, the forget gate decides how much of the previous cell state to keep (element-wise multiply by sigmoid output), and the input gate decides how much new information to let in. GLU does the same thing for feed-forward layers: one path computes 'what information is available' and another path computes 'how much of each dimension to let through' (sigmoid/SiLU gate). Both learn input-dependent filters rather than applying fixed transformations. The key innovation of GLU was bringing this gating mechanism (previously used only in recurrent networks) to feed-forward/convolutional layers.",hint:"What do LSTM forget/input gates control? What does GLU's gate control?",check:l=>{const r=l.toLowerCase();return(r.includes("information flow")||r.includes("control")||r.includes("filter"))&&(r.includes("sigmoid")||r.includes("forget")||r.includes("input gate")||r.includes("learned"))}}]},{id:"output",icon:"∑→P",color:"#15803D",title:"Output Activations — Softmax, Sigmoid & Linear",subtitle:"Special activations for the final layer — converting raw scores into predictions",resources:[{type:"read",title:"ML Mastery — How LLMs Choose Words (softmax pipeline)",url:"https://machinelearningmastery.com/how-llms-choose-their-words-a-practical-walk-through-of-logits-softmax-and-sampling/"},{type:"read",title:"d2l.ai — Softmax Regression",url:"https://d2l.ai/chapter_linear-classification/softmax-regression.html"},{type:"video",title:"StatQuest — Softmax Clearly Explained",url:"https://www.youtube.com/watch?v=KpKog-L9veg"}],content:[{heading:"Softmax — The Distribution Maker",body:`**softmax(zᵢ) = exp(zᵢ) / Σⱼ exp(zⱼ)**

Converts K logits into a probability distribution over K classes.

**Properties:** outputs ∈ (0,1), sum to exactly 1, preserves ordering.
**Temperature:** softmax(z/T). T→0: argmax. T→∞: uniform.

**In LLMs:** applied at every generation step to convert logit vector (50K+ dimensions) into a categorical distribution over the vocabulary. This IS the model's prediction.

**Softmax + cross-entropy = beautifully clean gradients:**
∂L/∂zᵢ = softmax(zᵢ) - yᵢ = pᵢ - yᵢ

(Predicted probability minus true label. Simple, non-vanishing, no activation derivative to worry about.)

**Numerical stability:** always compute log_softmax (subtract max(z) first) to avoid overflow. PyTorch's F.cross_entropy does this automatically.`},{heading:"Sigmoid Output vs Softmax Output",body:`**Sigmoid output — binary classification:**
• 1 output neuron, σ(z) → P(class=1)
• P(class=0) = 1 - σ(z) — implicit
• Loss: binary cross-entropy

**Softmax output — multi-class classification:**
• K output neurons, softmax(z₁,...,zₖ) → [P(class=1),...,P(class=K)]
• Probabilities are **mutually exclusive** (sum to 1)
• Loss: categorical cross-entropy

**When to use which:**
• 2 classes, mutually exclusive: sigmoid OR softmax with K=2 (equivalent)
• K > 2 classes, mutually exclusive: softmax
• Multiple labels simultaneously (multi-label): sigmoid on EACH output independently (sums can exceed 1)
• Regression (continuous output): NO activation (linear/identity)

**The key distinction:** softmax enforces competition between classes (increasing one probability decreases others). Sigmoid treats each output independently.`},{heading:"The Complete Activation Landscape — Decision Guide",body:`**Hidden layers:**
• **CNNs:** ReLU (default), Leaky ReLU (if dead neurons)
• **Transformer encoder (BERT-style):** GELU
• **Transformer decoder (GPT/Llama-style):** SiLU in SwiGLU
• **Simple MLPs:** ReLU or Leaky ReLU
• **RNNs/LSTMs:** tanh (cell state) + sigmoid (gates)

**Output layer:**
• **Binary classification:** sigmoid → BCE loss
• **Multi-class classification:** softmax → CE loss (or no activation + F.cross_entropy which fuses both)
• **Multi-label classification:** sigmoid per output → BCE per output
• **Regression:** linear (no activation) → MSE loss
• **Bounded regression [-1,1]:** tanh
• **Generative (LLM):** softmax → sample from distribution

**The historical timeline:**
Step function (1958) → Sigmoid (1980s) → Tanh (1990s) → ReLU (2010) → Leaky ReLU (2013) → PReLU/ELU (2015) → GELU (2016) → SiLU/Swish (2017) → GLU (2017) → SwiGLU (2020)

**Each solved a specific problem:** step→sigmoid (differentiability), sigmoid→tanh (zero-centering), tanh→ReLU (vanishing gradients), ReLU→LeakyReLU (dead neurons), ReLU→GELU/SiLU (smoothness for deep Transformers), GELU→SwiGLU (input-dependent gating).`}],questions:[{q:"You're building: (1) a spam classifier, (2) a movie genre tagger (multiple genres per movie), (3) a house price predictor, (4) GPT-style text generator. What output activation and loss for each?",a:"(1) Spam classifier: sigmoid output + binary cross-entropy loss (2 mutually exclusive classes). (2) Movie genre tagger: sigmoid on EACH output independently + binary cross-entropy per output (a movie can be both 'Action' AND 'Comedy' — labels are not mutually exclusive, so softmax would be wrong). (3) House price predictor: no activation (linear) + MSE loss (output is a continuous real number, not bounded). (4) GPT text generator: softmax over vocabulary + cross-entropy loss (need a probability distribution over all possible next tokens). In practice, PyTorch's F.cross_entropy combines softmax + CE into one numerically stable operation.",hint:"Are the outputs mutually exclusive? Continuous or categorical? Bounded or unbounded?",check:l=>{const r=l.toLowerCase();return r.includes("sigmoid")&&r.includes("softmax")&&(r.includes("linear")||r.includes("no activ")||r.includes("mse"))}},{q:"Why does softmax + cross-entropy produce the gradient (p - y) while sigmoid + MSE produces (a-y)·a·(1-a)? What's the practical consequence?",a:"Softmax + CE: the cross-entropy derivative cancels with the softmax derivative, producing the clean gradient (p - y). This gradient is large when the prediction is wrong and small when correct — exactly what we want. Sigmoid + MSE: the sigmoid derivative σ'(z) = a(1-a) does NOT cancel with the MSE derivative 2(a-y). The leftover a(1-a) term approaches 0 when a is near 0 or 1 (saturated sigmoid). Practical consequence: with sigmoid + MSE, if the model is very confident but WRONG (a ≈ 0, y = 1), the gradient is tiny (≈ 0 × 1 × 1 = 0) and learning is extremely slow. With softmax + CE, the gradient (p - y) is large in exactly this case, enabling fast error correction. This is why CE is always preferred for classification.",hint:"What happens to a(1-a) when a is near 0 or 1? Is that when you want large or small gradients?",check:l=>{const r=l.toLowerCase();return r.includes("cancel")&&(r.includes("vanish")||r.includes("slow")||r.includes("small")||r.includes("saturate")||r.includes("a(1-a)"))}}]}];function kh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:M=>U(M.target.value),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:()=>E("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:()=>{var M;E("idle"),U(""),(M=A.current)==null||M.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Sh({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=Ir.reduce((p,S)=>p+S.content.length,0),P=Math.round(b.size/A*100),M=p=>p.split(`
`).map((S,G)=>{if(S==="")return a.jsx("div",{style:{height:8}},G);const d=S.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:d.map((g,N)=>N%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:g},N):a.jsx("span",{children:g},N))},G)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#0E7490!important}"}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"NEURAL NETWORK FUNDAMENTALS"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Activation Functions — The Complete Story"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From biological neurons to SwiGLU — why nonlinearity is needed, how each function originated, what problems it solves, and where it's used today.",a.jsx("br",{}),Ir.length," sections · ",A," concepts · ",Ir.reduce((p,S)=>{var G;return p+(((G=S.questions)==null?void 0:G.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pf",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #0E7490, #15803D)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ir.map(p=>{var N;const S=r===p.id,G=p.content.map((v,z)=>`${p.id}-${z}`),d=G.filter(v=>b.has(v)).length,g=D[p.id]||"learn";return a.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(S?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[d,"/",p.content.length]}),a.jsx("span",{className:"ar",style:{transform:S?"rotate(90deg)":"rotate(0)"},children:"›"})]}),S&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tb ${g==="learn"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tb ${g==="practice"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"practice"})),children:["✏️ Practice (",((N=p.questions)==null?void 0:N.length)||0,")"]}),a.jsxs("button",{className:`tb ${g==="deeper"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),g==="learn"&&a.jsx("div",{children:p.content.map((v,z)=>{const C=`${p.id}-${z}`,L=K===C,T=b.has(C);return a.jsxs("div",{style:{borderTop:z>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"br",onClick:()=>q(L?null:C),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`ck ${T?"d":""}`,onClick:F=>{F.stopPropagation();const V=new Set(b);V.has(C)?V.delete(C):V.add(C),U(V)},children:T&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:T?"#aaa":"#2a2a2a",textDecoration:T?"line-through":"none",flex:1},children:v.heading}),a.jsx("span",{className:"ar",style:{transform:L?"rotate(90deg)":"rotate(0)"},children:"›"})]}),L&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:M(v.body)})]},z)})}),g==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((v,z)=>a.jsx(kh,{...v,color:p.color},`${p.id}-q-${z}`))]}),g==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((v,z)=>{const C=bh[v.type];return a.jsxs("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:C.bg+"55"},children:[a.jsxs("span",{className:"tg",style:{background:C.bg,color:C.color},children:[C.emoji," ",C.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:v.title})]},z)})})]})]})]},p.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Step function (1958) → Sigmoid (1980s) → Tanh (1990s) → ReLU (2010) → GELU (2016) → SwiGLU (2020) — every problem created the next solution"})]})}const Lh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},qr=[{id:"why",icon:"ℒ",color:"#7C3AED",title:"Why Loss Functions? The Optimization Signal",subtitle:"What losses are, why they exist, what makes a good one, and how they connect to MLE",resources:[{type:"infographic",title:"TensorFlow Playground — watch loss decrease during training",url:"https://playground.tensorflow.org/"},{type:"read",title:"Glass Box Medicine — Log Likelihood, CE, KL connections",url:"https://glassboxmedicine.com/2019/12/07/connections-log-likelihood-cross-entropy-kl-divergence-logistic-regression-and-neural-networks/"},{type:"read",title:"Springer — Comprehensive survey of loss functions (2025)",url:"https://link.springer.com/article/10.1007/s10462-025-11198-7"},{type:"read",title:"arXiv — Loss Functions in Deep Learning: Comprehensive Review",url:"https://arxiv.org/html/2504.04242v1"},{type:"video",title:"StatQuest — Machine Learning Fundamentals: Cross-Entropy",url:"https://www.youtube.com/watch?v=6ArSys5qHAU"},{type:"video",title:"3Blue1Brown — Gradient Descent (loss visualization)",url:"https://www.youtube.com/watch?v=IHZwWFHWa-w"}],content:[{heading:"What Is a Loss Function?",body:`A **loss function** (also called cost function, objective function, or error function) is a mathematical function that measures **how wrong** a model's predictions are compared to the true values.

**L(ŷ, y)** where ŷ = prediction, y = truth

**Purpose:** provide a **scalar signal** that gradient descent can minimize. Without a loss function, the model has no notion of "better" or "worse" — no direction to improve.

**The training loop:**
1. Forward pass: compute ŷ = model(x)
2. **Compute loss: L = loss_function(ŷ, y)** ← this is the signal
3. Backward pass: compute ∂L/∂θ for all parameters θ
4. Update: θ ← θ - η × ∂L/∂θ

**A model is only as good as its loss function.** A poorly chosen loss can cause the model to optimize for the wrong thing entirely. The loss defines *what* the model learns; the architecture defines *how much* it can learn.`},{heading:"The Grand Unification — Loss = Negative Log-Likelihood",body:`**The deepest insight:** nearly every standard loss function is MLE under a specific distributional assumption.

**MLE says:** find θ that maximizes P(data | θ)
**Equivalently:** minimize -log P(data | θ) = negative log-likelihood (NLL)

**Different assumptions → different losses:**
• Assume **Gaussian errors** → NLL = ½Σ(ŷ-y)² + const → **MSE loss**
• Assume **Laplace errors** → NLL = Σ|ŷ-y| + const → **MAE loss**
• Assume **Bernoulli output** → NLL = -[y log ŷ + (1-y)log(1-ŷ)] → **Binary CE**
• Assume **Categorical output** → NLL = -Σ yₖ log ŷₖ → **Categorical CE**

**Also:** minimizing cross-entropy = minimizing KL divergence from truth.
H(p, q) = H(p) + D_KL(p||q). Since H(p) is constant, min H(p,q) = min D_KL(p||q).

**Every time you call loss.backward() in PyTorch, you're doing MLE.**`},{heading:"Properties of a Good Loss Function",body:`**Differentiable** (almost everywhere): gradients must exist for backpropagation. Small exceptions (MAE at 0, hinge loss at margin) are handled by subgradients.

**Convex** (ideally): convex in the model's outputs means every local minimum is the global minimum. CE is convex in predictions; the overall loss w.r.t. weights is non-convex due to the network, but convex-in-output helps.

**Informative gradients:** the gradient should be large when the model is very wrong, and small when nearly correct. Sigmoid + MSE fails this — gradient is tiny when the model is confidently wrong.

**Aligned with the evaluation metric:** if you evaluate with accuracy, train with CE (which approximates accuracy better than MSE). If you evaluate with IoU, consider Dice loss.

**Robust to pathologies:** handle outliers (Huber), class imbalance (focal loss), label noise (label smoothing).

**Computationally efficient:** applied to every sample in every batch. Simple is better.`}],questions:[{q:"If you assume the data has Gaussian noise with variance σ², derive the loss function from MLE.",a:"Assume y = f(x;θ) + ε where ε ~ N(0, σ²). The likelihood of one observation: P(y|x,θ) = (1/√(2πσ²)) exp(-(y-f(x;θ))²/(2σ²)). Log-likelihood: log P = -½log(2πσ²) - (y-f(x;θ))²/(2σ²). Summing over N observations and negating: NLL = N/2·log(2πσ²) + (1/(2σ²))Σ(yᵢ-f(xᵢ;θ))². The first term is constant w.r.t. θ. Minimizing NLL = minimizing Σ(yᵢ-ŷᵢ)² = MSE loss (up to constant scaling by 1/(2σ²)). QED: Gaussian assumption → MSE.",hint:"Write P(y|x,θ) for Gaussian, take log, negate, and see what depends on θ.",check:l=>{const r=l.toLowerCase();return r.includes("gaussian")&&r.includes("mse")&&(r.includes("log")||r.includes("likelihood")||r.includes("nll"))}},{q:"Why is 'minimizing cross-entropy = maximizing likelihood = minimizing KL divergence' the most important equation in ML?",a:"Because it reveals that these three seemingly different objectives are the same optimization, viewed from different angles: (1) Cross-entropy: information-theoretic — minimize the 'coding cost' of using model Q to encode data from true distribution P. (2) Likelihood: statistical — find parameters making observed data most probable. (3) KL divergence: distribution matching — make the model's distribution as close to the truth as possible. This unity means all the intuitions from each field apply simultaneously: information theory tells you about compression and perplexity, statistics tells you about estimator properties, KL divergence tells you about distribution distance. It's why cross-entropy is the default loss for virtually all classification and language modeling.",hint:"H(P,Q) = H(P) + D_KL(P||Q). -log P(data|θ) = NLL. How do these connect?",check:l=>{const r=l.toLowerCase();return(r.includes("same")||r.includes("equivalent")||r.includes("unity")||r.includes("identical"))&&r.includes("cross-entropy")&&(r.includes("likelihood")||r.includes("kl"))}}]},{id:"reg",icon:"∥∥",color:"#0369A1",title:"Regression Losses — MSE, MAE, Huber",subtitle:"Predicting continuous values — from least squares (1805) to modern robust regression",resources:[{type:"read",title:"d2l.ai — Linear Regression loss functions",url:"https://d2l.ai/chapter_linear-networks/linear-regression.html"},{type:"read",title:"GeeksforGeeks — Loss Functions (MSE, MAE, Huber)",url:"https://www.geeksforgeeks.org/deep-learning/loss-functions-in-deep-learning/"},{type:"video",title:"StatQuest — Regression loss functions explained",url:"https://www.youtube.com/watch?v=Q81RR3Y5LQE"}],content:[{heading:"MSE — Mean Squared Error",body:`**Formula:** L = (1/n) Σᵢ (ŷᵢ - yᵢ)²

**Origin:** Legendre (1805) and Gauss (1809) independently developed the method of least squares. Gauss proved it was optimal under Gaussian error assumptions (Gauss-Markov theorem). The oldest loss function still in active use — over 200 years old.

**MLE derivation:** assuming y = f(x) + ε, ε ~ N(0, σ²), minimizing NLL = minimizing MSE.

**Derivative:** ∂L/∂ŷᵢ = (2/n)(ŷᵢ - yᵢ). Linear in the error — gradient is proportional to how wrong you are.

**Strengths:**
• Mathematically elegant — closed-form solution for linear regression
• Smooth, differentiable everywhere — well-behaved gradients
• Convex (for linear models) — guaranteed global minimum

**Weaknesses:**
• **Extremely sensitive to outliers** — squaring amplifies large errors. One outlier with error 100 contributes 10,000 to the loss, dominating the gradient.
• Penalizes overestimation and underestimation equally

**Used in:** regression tasks, autoencoders (reconstruction loss), value function estimation in RL, some GAN variants.

**PyTorch:** nn.MSELoss() or F.mse_loss(pred, target)`},{heading:"MAE — Mean Absolute Error (L1 Loss)",body:`**Formula:** L = (1/n) Σᵢ |ŷᵢ - yᵢ|

**MLE derivation:** assuming Laplace-distributed errors (heavier tails than Gaussian), minimizing NLL = minimizing MAE.

**Derivative:** ∂L/∂ŷᵢ = (1/n) × sign(ŷᵢ - yᵢ) = ±1/n
The gradient has **constant magnitude** regardless of error size. A tiny error and a huge error produce the same gradient magnitude.

**Strengths:**
• **Robust to outliers** — doesn't square large errors. The outlier with error 100 contributes 100, not 10,000.
• More appropriate when data has heavy-tailed noise

**Weaknesses:**
• **Not differentiable at ŷ = y** (the "kink" at zero). In practice, subgradient methods handle this.
• **Constant gradient near the target** — the model struggles to converge precisely because the gradient doesn't shrink as it approaches the correct answer. It oscillates around the minimum.
• Harder to optimize than MSE — doesn't have a closed-form solution for linear regression.

**Used in:** robust regression, L1 regularization (Lasso), median regression.`},{heading:"Huber Loss — Best of Both Worlds",body:`**Formula:**
L_δ(ŷ, y) = ½(ŷ-y)² if |ŷ-y| ≤ δ
L_δ(ŷ, y) = δ|ŷ-y| - ½δ² if |ŷ-y| > δ

**Origin:** Peter Huber (1964), robust statistics. Designed to combine MSE's smooth convergence near the target with MAE's outlier resistance far from it.

**How it works:**
• For **small errors** (|error| ≤ δ): behaves like MSE → smooth gradients, precise convergence
• For **large errors** (|error| > δ): behaves like MAE → linear penalty, outlier-robust

**Derivative:**
∂L/∂ŷ = (ŷ-y) if |ŷ-y| ≤ δ (like MSE)
∂L/∂ŷ = δ × sign(ŷ-y) if |ŷ-y| > δ (like MAE, capped at δ)

**The δ hyperparameter:** controls the transition point.
• Large δ → more like MSE (less robust, smoother optimization)
• Small δ → more like MAE (more robust, less precise)
• δ = 1 is a common default (called Smooth L1 Loss in PyTorch)

**Used in:** object detection bounding box regression (Smooth L1 in Faster R-CNN, RetinaNet), reinforcement learning (TD error in DQN), any regression where outliers exist but precise fitting matters.

**PyTorch:** nn.SmoothL1Loss() or nn.HuberLoss(delta=1.0)`}],questions:[{q:"Data: true values y = [2, 3, 100]. Predictions ŷ = [2.5, 2.8, 10]. Compute MSE and MAE. Which is more affected by the outlier?",a:"Errors: [0.5, -0.2, -90]. MSE = (0.25 + 0.04 + 8100)/3 = 8100.29/3 = 2700.1. MAE = (0.5 + 0.2 + 90)/3 = 90.7/3 = 30.23. MSE is overwhelmingly dominated by the outlier (8100 out of 8100.29). MAE is also affected but much less drastically (90 out of 90.7). The squared term in MSE amplifies the outlier's contribution by a factor of 90 — it contributes 90² = 8100 to MSE but only 90 to MAE.",hint:"Compute errors, square for MSE, absolute for MAE. Compare the outlier's contribution.",check:l=>(l.includes("2700")||l.includes("8100"))&&(l.includes("30")||l.includes("90.7"))},{q:"Why does Huber loss need a δ hyperparameter? What goes wrong without it?",a:"δ defines the boundary between MSE-like behavior (smooth, quadratic penalty for small errors) and MAE-like behavior (linear, robust penalty for large errors). Without δ, you'd be stuck with either pure MSE (sensitive to outliers) or pure MAE (poor convergence near the target due to constant gradients). δ lets you tune the tradeoff: 'treat errors smaller than δ as normal (MSE), and errors larger than δ as potential outliers (MAE).' If δ is too large, you get MSE behavior and lose robustness. If δ is too small, you get MAE behavior and lose precision. The optimal δ depends on the noise characteristics of your data.",hint:"What does 'small error' vs 'large error' mean? Who decides the threshold?",check:l=>{const r=l.toLowerCase();return(r.includes("threshold")||r.includes("boundary")||r.includes("transition"))&&(r.includes("mse")||r.includes("quadratic"))&&(r.includes("mae")||r.includes("linear")||r.includes("robust"))}}]},{id:"class",icon:"−log",color:"#DC2626",title:"Classification Losses — Cross-Entropy & Beyond",subtitle:"From binary to multi-class to LLM next-token prediction — all derived from information theory",resources:[{type:"infographic",title:"TensorTonic — Cross-Entropy Loss interactive",url:"https://www.tensortonic.com/ml-math/information-theory/cross-entropy"},{type:"infographic",title:"Chris Olah — Visual Information Theory",url:"https://colah.github.io/posts/2015-09-Visual-Information/"},{type:"read",title:"Lei Mao — CE, KL Divergence, and MLE connection",url:"https://leimao.github.io/blog/Cross-Entropy-KL-Divergence-MLE/"},{type:"read",title:"ML Mastery — Cross-Entropy for Machine Learning",url:"https://machinelearningmastery.com/cross-entropy-for-machine-learning/"},{type:"video",title:"StatQuest — Cross-Entropy Clearly Explained",url:"https://www.youtube.com/watch?v=6ArSys5qHAU"},{type:"video",title:"StatQuest — Entropy Clearly Explained",url:"https://www.youtube.com/watch?v=YtebGVx-Fxw"}],content:[{heading:"Binary Cross-Entropy (BCE / Log Loss)",body:`**Formula:** L = -[y log(ŷ) + (1-y) log(1-ŷ)]

**Origin:** derived from the NLL of a Bernoulli distribution. If y ~ Bernoulli(p), then P(y|p) = p^y (1-p)^(1-y). Taking -log: NLL = -[y log p + (1-y) log(1-p)] = BCE.

**How it works:**
When y=1 (true positive): L = -log(ŷ). Loss → 0 when ŷ → 1, loss → ∞ when ŷ → 0.
When y=0 (true negative): L = -log(1-ŷ). Loss → 0 when ŷ → 0, loss → ∞ when ŷ → 1.

**The gradient miracle:**
With sigmoid activation: ∂L/∂z = ŷ - y (predicted minus true).
• When very wrong (ŷ=0.01, y=1): gradient = -0.99 → **large update**
• When nearly correct (ŷ=0.99, y=1): gradient = -0.01 → **tiny update**
• This is EXACTLY what you want. Compare with MSE + sigmoid where the gradient vanishes when the model is confidently wrong.

**Strengths:** informative gradients at all operating points, convex in ŷ, naturally pairs with sigmoid
**Weaknesses:** assumes well-calibrated probabilities, sensitive to label noise

**PyTorch:** nn.BCELoss() (expects probabilities) or nn.BCEWithLogitsLoss() (expects logits — more stable)`},{heading:"Categorical Cross-Entropy (CCE / Softmax Loss)",body:`**Formula:** L = -Σₖ yₖ log(ŷₖ) where y is one-hot and ŷ is softmax output

Since y is one-hot (only one yₖ = 1, rest = 0), this simplifies to:
**L = -log(ŷ_c)** where c is the correct class.

"The negative log-probability of the correct class."

**MLE derivation:** y ~ Categorical(p₁,...,pₖ). P(y=c|p) = p_c. NLL = -log p_c = CCE.

**The gradient:**
∂L/∂zₖ = ŷₖ - yₖ (softmax output minus one-hot target)
For the correct class c: gradient = ŷ_c - 1 (pushes probability UP)
For wrong classes k≠c: gradient = ŷₖ - 0 = ŷₖ (pushes probability DOWN)

**This is the loss function for ALL classification in deep learning** — image classification, text classification, and critically, **next-token prediction in LLMs.**

**For LLMs:** the vocabulary has K = 50,000+ classes. At each position t:
L_t = -log P(correct_token_t | context)
Total loss = (1/T) Σₜ L_t = average negative log-probability

**Perplexity** = exp(L) — the standard LLM evaluation metric.

**PyTorch:** nn.CrossEntropyLoss() (expects raw logits, applies softmax internally)`},{heading:"Focal Loss — Solving Class Imbalance",body:`**Formula:** FL(p_t) = -α_t (1-p_t)^γ log(p_t)

**Origin:** Lin et al. (2017), "Focal Loss for Dense Object Detection" (RetinaNet paper). Designed to solve the extreme foreground-background class imbalance in object detection (e.g., 100,000 background patches vs 10 objects).

**The problem with standard CE:** when most examples are "easy" (correctly classified with high confidence), their small but numerous losses dominate the gradient. The model never focuses on the hard, misclassified examples.

**How focal loss works:**
The **(1-p_t)^γ** term is a **modulating factor:**
• When p_t is high (easy example, correctly classified): (1-p_t)^γ ≈ 0 → loss suppressed
• When p_t is low (hard example, misclassified): (1-p_t)^γ ≈ 1 → loss unchanged

**γ (gamma) controls focusing strength:**
• γ = 0: standard CE (no focusing)
• γ = 1: moderate focusing
• γ = 2: strong focusing (default, recommended)
• γ = 5: extreme focusing

**α_t** handles class imbalance: weight for the true class.

**Example with γ=2:**
Easy example (p_t = 0.9): focal weight = (0.1)² = 0.01 → 100× less loss than CE
Hard example (p_t = 0.1): focal weight = (0.9)² = 0.81 → nearly full loss

**Used in:** object detection (RetinaNet, EfficientDet), medical image segmentation, any task with severe class imbalance. Less common in NLP/LLMs where classes are more balanced.`},{heading:"Label Smoothing — Preventing Overconfidence",body:`**Formula:** y_smooth = (1-ε) × y_one_hot + ε/K

Instead of training toward hard targets [0, 0, 1, 0]:
Train toward soft targets [ε/4, ε/4, 1-3ε/4, ε/4]

With ε = 0.1 and K = 4: [0.025, 0.025, 0.925, 0.025]

**Origin:** Szegedy et al. (2016), Inception v2. Also known as "confidence penalty."

**Why it helps:**
• **Prevents overconfidence:** the model can never perfectly minimize loss (targets aren't 0/1), so it doesn't push logits to ±∞
• **Improves generalization:** acts as regularization — the model learns a softer decision boundary
• **Improves calibration:** predicted probabilities better match true frequencies

**The information-theoretic view:** label smoothing = maximizing entropy of the output distribution (subject to the constraint of being close to the correct label). Higher entropy = less overconfident.

**Used in:** Transformer training (original "Attention Is All You Need" paper used ε=0.1), image classification, knowledge distillation.

**PyTorch:** nn.CrossEntropyLoss(label_smoothing=0.1)`}],questions:[{q:"A model predicts P(class=1) = 0.99 but the true label is 0. Compute the BCE loss. Then compute for P = 0.5.",a:"For P=0.99, y=0: L = -[0×log(0.99) + 1×log(1-0.99)] = -log(0.01) = 4.605 nats. Very high loss — the model is confidently wrong. For P=0.5, y=0: L = -[0×log(0.5) + 1×log(0.5)] = -log(0.5) = 0.693 nats. Much lower — the model is uncertain, which is less wrong than being confidently incorrect. This asymmetry is by design: cross-entropy penalizes confident wrong predictions much more harshly than uncertain ones.",hint:"BCE = -[y·log(ŷ) + (1-y)·log(1-ŷ)]. When y=0, only the second term survives.",check:l=>l.includes("4.6")&&l.includes("0.69")},{q:"With focal loss (γ=2), compute the focal weight for an easy example (p_t=0.95) and a hard example (p_t=0.05). How much more does focal loss emphasize the hard example?",a:"Easy: (1-0.95)² = (0.05)² = 0.0025. Hard: (1-0.05)² = (0.95)² = 0.9025. Ratio: 0.9025/0.0025 = 361×. Focal loss emphasizes the hard example 361 times more than the easy example (compared to standard CE which would treat them equally after taking -log). This massive reweighting is why focal loss is effective for class imbalance: it effectively ignores the flood of easy examples and focuses training signal on the few hard/misclassified ones.",hint:"Focal weight = (1-p_t)^γ. Compute for each case and take the ratio.",check:l=>l.includes("361")||l.includes("0.0025")&&l.includes("0.9025")},{q:"In LLM training, what is perplexity and how does it relate to cross-entropy loss?",a:"Perplexity = exp(cross-entropy loss) = exp(-(1/T)Σlog P(correct_token)). It represents how 'surprised' the model is by the text on average. A perplexity of 15 means the model is 'as confused as if it were randomly choosing between 15 equally likely tokens at each position.' Lower perplexity = better model. A perfect model predicting every token with probability 1 would have perplexity = exp(0) = 1. Random guessing over a 50K vocabulary gives perplexity = 50,000. State-of-the-art LLMs achieve perplexities around 3-15 on typical benchmarks. Since perplexity = exp(CE), minimizing CE during training directly minimizes perplexity.",hint:"Perplexity = exp(average negative log-probability). What does this measure intuitively?",check:l=>{const r=l.toLowerCase();return r.includes("exp")&&(r.includes("surprise")||r.includes("confused")||r.includes("uncertain"))&&(r.includes("cross-entropy")||r.includes("ce")||r.includes("log"))}}]},{id:"llm",icon:"GPT",color:"#0E7490",title:"LLM-Specific Losses — Pre-training, RLHF & DPO",subtitle:"The loss functions that train, align, and evaluate language models",resources:[{type:"read",title:"Giridharan — KL Divergence Powers Every Stage of LLM Dev",url:"https://medium.com/@AdithyaGiridharan/kl-divergence-the-one-metric-that-quietly-powers-every-stage-of-llm-development-d5cb01b93e4b"},{type:"read",title:"Brenndoerfer — KL Divergence Penalty in RLHF",url:"https://mbrenndoerfer.com/writing/kl-divergence-penalty-rlhf-training"},{type:"read",title:"Cameron Wolfe — DPO (from KL-constrained RLHF)",url:"https://cameronrwolfe.substack.com/p/direct-preference-optimization"},{type:"read",title:"Floating Bytes — Cross-Entropy ↔ GPT Models",url:"https://saraswatmks.github.io/2026/02/cross-entropy-likelihood.html"},{type:"video",title:"Karpathy — Let's build GPT (loss function in context)",url:"https://www.youtube.com/watch?v=kCc8FmEb1nY"}],content:[{heading:"Pre-training Loss — Next-Token Cross-Entropy",body:`**The fundamental LLM training objective:**

**L = -(1/T) Σₜ₌₁ᵀ log P_θ(token_t | token₁, ..., token_{t-1})**

"Average negative log-probability of the correct next token, given all preceding tokens."

**What this means:**
• At each position t, the model outputs a distribution over 50K+ tokens via softmax
• The loss measures how much probability mass is on the **correct** next token
• Perfect prediction (P = 1.0) gives loss = 0
• Uniform guessing (P = 1/50000) gives loss = log(50000) ≈ 10.8

**Perplexity = exp(L):** if L = 2.5, perplexity = exp(2.5) ≈ 12.2 — the model is "as confused as choosing from ~12 equally likely tokens."

**In code (Karpathy's nanoGPT):**
logits = model(input_ids)           # (batch, seq_len, vocab_size)
loss = F.cross_entropy(
    logits.view(-1, vocab_size),     # flatten to (batch*seq_len, vocab_size)
    targets.view(-1)                 # flatten to (batch*seq_len,)
)

**This single line of code is how GPT, Llama, Claude, and every LLM learns language.**`},{heading:"RLHF Loss — Reward + KL Penalty",body:`**After pre-training, RLHF aligns the model with human preferences:**

**L_RLHF = -E[reward(output)] + β × D_KL(π_θ || π_ref)**

**Component 1: Reward maximization**
A reward model (trained on human preference data) scores model outputs. The loss encourages outputs that score highly.

**Component 2: KL divergence penalty**
D_KL(π_θ || π_ref) measures how far the aligned model (π_θ) has drifted from the pre-trained model (π_ref).

**β controls the tradeoff:**
• β = 0: pure reward maximization → **reward hacking** (model exploits reward model weaknesses)
• β → ∞: no alignment, stay at pre-trained model
• β ~ 0.01-0.1: typical range, balances alignment with capability preservation

**Why KL penalty is essential:**
Without it, the model learns to produce degenerate outputs that game the reward model. The KL term says: "improve, but don't become a fundamentally different model." It preserves the general language capabilities learned during pre-training.

**In practice:** RLHF uses PPO (Proximal Policy Optimization) to optimize this compound objective. The implementation is complex, which motivated DPO.`},{heading:"DPO Loss — Direct Preference Optimization",body:`**DPO simplifies RLHF into a single supervised loss:**

**L_DPO = -log σ(β [log(π_θ(y_w|x)/π_ref(y_w|x)) - log(π_θ(y_l|x)/π_ref(y_l|x))])**

Where y_w = preferred response, y_l = rejected response, x = prompt.

**Origin:** Rafailov et al. (2023). Key insight: the KL-constrained RLHF objective has an **analytical solution**. Instead of learning a separate reward model + running PPO, you can directly optimize the policy using preference pairs.

**In plain English:** "increase the probability of preferred responses and decrease the probability of rejected responses, relative to the reference model, with the strength controlled by β."

**The β parameter:** same role as in RLHF — controls how far from the reference model you're allowed to move.

**Advantages over RLHF:**
• No separate reward model needed
• No PPO training loop (unstable, hard to tune)
• Just supervised learning on preference pairs
• Mathematically equivalent to RLHF under certain assumptions

**Used in:** Llama 2 (RLHF), Llama 3 (DPO variants), Zephyr, many open-source models. DPO has largely replaced PPO-based RLHF in practice.`},{heading:"Knowledge Distillation Loss",body:`**Training a smaller "student" model to mimic a larger "teacher":**

**L = α × CE(y, student_output) + (1-α) × T² × KL(teacher_soft || student_soft)**

**Component 1:** standard cross-entropy with true labels (hard targets)
**Component 2:** KL divergence between teacher's and student's soft probability distributions

**Temperature T** softens both distributions before comparison:
soft_teacher = softmax(teacher_logits / T)
soft_student = softmax(student_logits / T)

**Why soft targets are valuable:**
Hard label "cat" = [0, 0, 1, 0] tells the student nothing about relationships.
Soft label from teacher = [0.01, 0.04, 0.90, 0.05] tells the student: "this is mostly cat, but it's somewhat similar to dog (0.04) and more similar to tiger (0.05) than to car (0.01)."

The teacher's soft outputs encode **dark knowledge** — the relationships between classes that hard labels throw away.

**The T² scaling** compensates for the fact that softened distributions produce smaller gradients. Without it, the distillation term would be under-weighted.

**Used in:** DistilBERT (6-layer BERT from 12-layer), model compression for deployment, training small on-device models.`}],questions:[{q:"An LLM trained on English text achieves perplexity of 8 on a test set. Another achieves perplexity of 20. Which is better and by how much?",a:"Perplexity 8 is significantly better. Perplexity 8 means the model is 'as uncertain as choosing from 8 equally likely tokens' on average, while perplexity 20 means choosing from 20. Lower = better. In terms of cross-entropy: CE₁ = ln(8) ≈ 2.08 nats, CE₂ = ln(20) ≈ 3.00 nats. The first model assigns 3.00/2.08 ≈ 1.44× higher average log-probability to the correct next token. In bits-per-character or compression terms, the first model compresses text about 44% more efficiently. Note: perplexity differences are multiplicative, not additive — going from 20 to 8 is a much larger improvement than going from 28 to 20.",hint:"Perplexity = exp(cross-entropy). Lower perplexity = model assigns higher probability to correct tokens.",check:l=>{const r=l.toLowerCase();return r.includes("8")&&r.includes("better")||r.includes("lower")&&r.includes("better")}},{q:"Why did DPO largely replace PPO-based RLHF for LLM alignment? What's the core mathematical insight?",a:"The core insight: the KL-constrained RLHF objective (maximize reward subject to KL penalty from reference model) has a closed-form analytical solution for the optimal policy. This means you don't need to: (1) train a separate reward model, (2) run an RL algorithm (PPO) to optimize against that reward model. Instead, DPO reparameterizes the reward function in terms of the policy itself, turning the RL problem into a simple supervised classification problem on preference pairs. Practically: DPO is much simpler to implement, more stable to train (no PPO hyperparameter tuning), and produces comparable results. The mathematical equivalence holds exactly when the reward model is optimal, and approximately in practice.",hint:"What happens when an RL optimization problem has an analytical (closed-form) solution?",check:l=>{const r=l.toLowerCase();return(r.includes("closed-form")||r.includes("analytical")||r.includes("supervised")||r.includes("simpl"))&&(r.includes("reward")||r.includes("ppo")||r.includes("rl"))}}]},{id:"metric",icon:"⟨,⟩",color:"#B91C1C",title:"Metric & Contrastive Losses",subtitle:"Learning embeddings — when you need to measure similarity, not classify",resources:[{type:"read",title:"Lilian Weng — Contrastive Representation Learning",url:"https://lilianweng.github.io/posts/2021-05-31-contrastive/"},{type:"read",title:"CLIP paper — contrastive loss for vision-language",url:"https://arxiv.org/abs/2103.00020"},{type:"video",title:"Yannic Kilcher — CLIP explained",url:"https://www.youtube.com/watch?v=T9XSU0pKX2E"}],content:[{heading:"Contrastive Loss — Pulling & Pushing",body:`**Goal:** learn an embedding space where similar items are close and dissimilar items are far apart.

**Formula (Hadsell et al., 2006):**
L = (1-y) × ½D² + y × ½max(0, margin - D)²

Where D = ||f(x₁) - f(x₂)||₂ and y = 1 if dissimilar, 0 if similar.

**How it works:**
• **Similar pair (y=0):** loss = ½D² → pull embeddings together
• **Dissimilar pair (y=1):** loss = ½max(0, m-D)² → push apart until distance > margin m

**Used in:** Siamese networks for face verification ("are these two faces the same person?"), signature verification, one-shot learning.`},{heading:"Triplet Loss — Anchor, Positive, Negative",body:`**Formula (Schroff et al., 2015 — FaceNet):**
L = max(0, D(a, p) - D(a, n) + margin)

Where a = anchor, p = positive (same class), n = negative (different class).

**Goal:** D(anchor, positive) + margin < D(anchor, negative)
"The anchor should be closer to the positive than to the negative, by at least a margin."

**Hard negative mining:** selecting challenging negatives (close to the anchor but wrong class) is crucial. Easy negatives (obviously different) produce zero loss and no learning.

**Used in:** FaceNet (Google, face recognition), learning person re-identification embeddings, few-shot learning.`},{heading:"InfoNCE / CLIP Loss — The Modern Standard",body:`**Formula (Oord et al., 2018; Radford et al., 2021):**
L = -log [exp(sim(x, x⁺)/τ) / Σⱼ exp(sim(x, xⱼ)/τ)]

**How it works:** among N items in a batch, classify which one is the correct positive match. It's a softmax cross-entropy where the "classes" are batch items!

**In CLIP (image-text pairs):**
• Encode image → image_embed, encode text → text_embed
• For a batch of N pairs: create N×N similarity matrix
• Correct pairs are on the diagonal
• Loss: cross-entropy on each row (image→text) + each column (text→image)

**Temperature τ** controls how peaked the similarity distribution is.

**Why InfoNCE works so well:**
• Scales naturally with batch size (more negatives = harder task = better embeddings)
• Connected to mutual information maximization
• No need to mine hard negatives — the batch provides them naturally

**Used in:** CLIP (image-text), SimCLR (self-supervised vision), sentence embeddings (Sentence-BERT), audio-text (CLAP), all modern multimodal models.`}],questions:[{q:"In triplet loss, why is 'hard negative mining' critical? What happens without it?",a:"Without hard negative mining, most triplets have negatives that are already far from the anchor. The loss for these is max(0, D(a,p) - D(a,n) + margin) = 0 (since D(a,n) >> D(a,p) + margin). Zero loss = zero gradient = no learning. The model only learns from triplets where the negative is challenging — close enough to the anchor that the margin constraint is violated. Hard negative mining selects negatives that are near the anchor (in embedding space), forcing the model to learn finer distinctions. Without it, training is extremely slow because >99% of randomly sampled triplets produce zero gradient.",hint:"What does max(0, ...) output when the negative is already very far away?",check:l=>{const r=l.toLowerCase();return(r.includes("zero")||r.includes("0"))&&(r.includes("gradient")||r.includes("loss")||r.includes("learn"))}}]},{id:"guide",icon:"🗺",color:"#15803D",title:"Practical Selection Guide",subtitle:"Which loss for which task — a decision framework",resources:[{type:"read",title:"Karpathy — A Recipe for Training Neural Networks",url:"https://karpathy.github.io/2019/04/25/recipe/"},{type:"read",title:"d2l.ai — Optimization chapter",url:"https://d2l.ai/chapter_optimization/index.html"}],content:[{heading:"Decision Framework by Task",body:`**Regression (continuous output):**
• Default: **MSE** — well-behaved gradients, standard choice
• Outliers present: **Huber** (δ = 1.0) — robust without sacrificing precision
• Need median prediction: **MAE** — robust to outliers, but harder to optimize

**Binary classification:**
• Default: **BCE with logits** (nn.BCEWithLogitsLoss) — numerically stable sigmoid + BCE
• Class imbalance: **weighted BCE** or **focal loss** (γ = 2)

**Multi-class classification:**
• Default: **CE** (nn.CrossEntropyLoss) — includes softmax, numerically stable
• Class imbalance: **focal loss** or **weighted CE**
• Prevent overconfidence: **CE + label smoothing** (ε = 0.1)

**Language modeling (LLMs):**
• Pre-training: **next-token CE** (cross-entropy over vocabulary at each position)
• Alignment: **DPO** (preference pairs) or **RLHF** (reward + KL penalty)
• Distillation: **CE + KL divergence** from teacher

**Embedding learning:**
• Modern default: **InfoNCE / CLIP loss** — scales with batch size
• Face recognition: **triplet loss + hard mining** or **ArcFace**
• Simple pairwise: **contrastive loss**

**Image segmentation:**
• Default: **pixel-wise CE**
• Class imbalance: **focal loss** or **Dice loss**
• Boundary quality: **Dice + CE** (compound loss)`},{heading:"Common Mistakes & How to Fix Them",body:`**Mistake 1: Using MSE for classification**
Symptom: slow training, model plateaus at mediocre accuracy
Why: MSE + sigmoid gives vanishing gradients when model is confidently wrong (gradient ∝ σ(1-σ) → 0)
Fix: always use **cross-entropy** for classification

**Mistake 2: Not using label smoothing with large models**
Symptom: overconfident predictions, poor calibration, worse generalization
Fix: add label_smoothing=0.1 to CrossEntropyLoss

**Mistake 3: Ignoring class imbalance**
Symptom: model predicts majority class for everything, high accuracy but useless
Fix: **weighted CE** (inverse class frequency), **focal loss**, or **oversampling**

**Mistake 4: Using the wrong reduction**
PyTorch losses have reduction='mean' (default), 'sum', or 'none'.
• 'mean': loss independent of batch size → standard choice
• 'sum': loss proportional to batch size → wrong effective learning rate
• 'none': per-sample loss → needed for sample weighting

**Mistake 5: Forgetting numerical stability**
• Never compute log(softmax(x)) — use log_softmax(x) or F.cross_entropy(logits, targets)
• Never compute exp(large_number) — subtract max first
• Always use ..._with_logits variants when available

**The Karpathy rule:** verify your initial loss. Random weights should produce loss = -log(1/num_classes). If your initial loss is much higher or lower, something is wrong.`}],questions:[{q:"Your model has 4 classes and random weights. What should the initial cross-entropy loss be approximately? You observe loss = 8.5 at initialization. What's wrong?",a:"Expected initial loss = -log(1/4) = -log(0.25) = ln(4) ≈ 1.386 nats. An initial loss of 8.5 is ~6× too high. Possible causes: (1) Data and labels are misaligned (labels are wrong or shifted). (2) The loss reduction is 'sum' instead of 'mean' (loss isn't normalized by batch size). (3) Weight initialization is extremely poor, causing logits to be very large in the wrong direction. (4) There's a bug in the forward pass — the model isn't computing what you think. Fix: check data loading, verify labels match the expected format, set reduction='mean', and inspect raw logits at initialization. This is Karpathy's 'verify initial loss' debugging step — it catches bugs early.",hint:"With random weights, softmax should output ~1/num_classes for each class.",check:l=>(l.includes("1.38")||l.includes("1.39")||l.includes("ln(4)")||l.includes("log(4)"))&&(l.toLowerCase().includes("bug")||l.toLowerCase().includes("wrong")||l.toLowerCase().includes("mismatch")||l.toLowerCase().includes("misalign"))},{q:"You're training a medical image classifier where 95% of images are 'healthy' and 5% are 'diseased.' The model achieves 95% accuracy by predicting 'healthy' for everything. Which loss fixes this and how?",a:"Use focal loss (γ=2, with α weighting) or weighted cross-entropy. The model achieves 95% accuracy trivially by always predicting the majority class — it has zero sensitivity for the disease class. Focal loss fixes this by down-weighting the loss contribution from the 95% easy 'healthy' examples (which are correctly classified with high confidence), forcing the model to focus training signal on the 5% hard 'diseased' cases. Weighted CE assigns higher weight (e.g., 19×) to the minority class, making each diseased example contribute 19× more to the loss. Alternative approaches: oversample minority class, undersample majority, or use Dice loss (which directly optimizes overlap rather than per-pixel accuracy).",hint:"The model ignores the minority class because its loss is drowned out by easy majority examples.",check:l=>{const r=l.toLowerCase();return(r.includes("focal")||r.includes("weighted")||r.includes("weight"))&&(r.includes("minority")||r.includes("imbalance")||r.includes("disease")||r.includes("focus")||r.includes("down-weight"))}}]}];function Th({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:M=>U(M.target.value),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:()=>E("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:()=>{var M;E("idle"),U(""),(M=A.current)==null||M.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function zh({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=qr.reduce((p,S)=>p+S.content.length,0),P=Math.round(b.size/A*100),M=p=>p.split(`
`).map((S,G)=>{if(S==="")return a.jsx("div",{style:{height:8}},G);const d=S.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:d.map((g,N)=>N%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:g},N):a.jsx("span",{children:g},N))},G)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#DC2626!important}"}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"NEURAL NETWORK FUNDAMENTALS"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Loss Functions — The Complete Story"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From MSE (1805) to DPO (2023) — why losses exist, how each one originated, their mathematical derivations, strengths, weaknesses, and exactly where they're used. Every loss is MLE under a different assumption.",a.jsx("br",{}),qr.length," sections · ",A," concepts · ",qr.reduce((p,S)=>{var G;return p+(((G=S.questions)==null?void 0:G.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pf",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #0E7490, #15803D)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:qr.map(p=>{var N;const S=r===p.id,G=p.content.map((v,z)=>`${p.id}-${z}`),d=G.filter(v=>b.has(v)).length,g=D[p.id]||"learn";return a.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(S?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[d,"/",p.content.length]}),a.jsx("span",{className:"ar",style:{transform:S?"rotate(90deg)":"rotate(0)"},children:"›"})]}),S&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tb ${g==="learn"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tb ${g==="practice"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"practice"})),children:["✏️ Practice (",((N=p.questions)==null?void 0:N.length)||0,")"]}),a.jsxs("button",{className:`tb ${g==="deeper"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),g==="learn"&&a.jsx("div",{children:p.content.map((v,z)=>{const C=`${p.id}-${z}`,L=K===C,T=b.has(C);return a.jsxs("div",{style:{borderTop:z>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"br",onClick:()=>q(L?null:C),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`ck ${T?"d":""}`,onClick:F=>{F.stopPropagation();const V=new Set(b);V.has(C)?V.delete(C):V.add(C),U(V)},children:T&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:T?"#aaa":"#2a2a2a",textDecoration:T?"line-through":"none",flex:1},children:v.heading}),a.jsx("span",{className:"ar",style:{transform:L?"rotate(90deg)":"rotate(0)"},children:"›"})]}),L&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:M(v.body)})]},z)})}),g==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((v,z)=>a.jsx(Th,{...v,color:p.color},`${p.id}-q-${z}`))]}),g==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((v,z)=>{const C=Lh[v.type];return a.jsxs("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:C.bg+"55"},children:[a.jsxs("span",{className:"tg",style:{background:C.bg,color:C.color},children:[C.emoji," ",C.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:v.title})]},z)})})]})]})]},p.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"MSE (1805) → CE (1948) → Hinge (1995) → Focal (2017) → DPO (2023) — every loss is MLE under a different assumption"})]})}const Ch={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ur=[{id:"overfit",icon:"🎯",color:"#7C3AED",title:"The Overfitting Problem",subtitle:"Why models memorize training data and fail on new data — the bias-variance tradeoff",resources:[{type:"infographic",title:"TensorFlow Playground — watch overfitting happen live",url:"https://playground.tensorflow.org/"},{type:"read",title:"d2l.ai — Model Selection, Underfitting, Overfitting",url:"https://d2l.ai/chapter_multilayer-perceptrons/underfit-overfit.html"},{type:"read",title:"Goodfellow et al. — Deep Learning Ch 7: Regularization",url:"https://www.deeplearningbook.org/contents/regularization.html"},{type:"video",title:"StatQuest — Bias-Variance Tradeoff Clearly Explained",url:"https://www.youtube.com/watch?v=EuBBz3bI-aA"},{type:"video",title:"3Blue1Brown — Neural networks learn? (loss curves)",url:"https://www.youtube.com/watch?v=IHZwWFHWa-w"}],content:[{heading:"What Is Overfitting?",body:`**Overfitting** = the model learns patterns specific to the training data that don't generalize to new data. It "memorizes" instead of "understanding."

**Symptoms:**
• Training loss keeps decreasing ✓
• Validation loss starts **increasing** ✗ (the gap between training and validation loss grows)
• Training accuracy 99%, test accuracy 60%

**Analogy:** studying for an exam by memorizing the practice questions and answers word-for-word, but failing when the exam has different questions testing the same concepts.

**Why it happens:**
• Model has **more parameters than necessary** for the task
• **Not enough training data** to constrain the model
• **Training too long** — given enough time, the model will memorize anything
• **No regularization** — nothing prevents the model from becoming arbitrarily complex

**The opposite: underfitting** = model is too simple to capture the patterns. Training loss AND validation loss are both high. Fix: bigger model, more training, better features.`},{heading:"Bias-Variance Tradeoff",body:`**Total error = Bias² + Variance + Irreducible noise**

**Bias** = error from wrong assumptions. High bias → underfitting.
Example: fitting a straight line to clearly curved data.

**Variance** = error from sensitivity to training data. High variance → overfitting.
Example: fitting a degree-100 polynomial that passes through every training point but oscillates wildly between them.

**The tradeoff:**
• Simple models: high bias, low variance → underfitting
• Complex models: low bias, high variance → overfitting
• **Sweet spot:** enough complexity to capture real patterns, not so much that it captures noise

**Regularization shifts this tradeoff:** it adds constraints that increase bias slightly but decrease variance significantly. The net effect is lower total error on unseen data.

**Modern insight (double descent):** very large models (billions of parameters) can sometimes have BOTH low bias AND low variance, defying the classical tradeoff. This is an active research area, but regularization still helps even in this regime.`},{heading:"How to Detect Overfitting",body:`**The learning curve plot** — the most important diagnostic tool:

Plot training loss AND validation loss vs. epochs:
• **Healthy:** both decrease together, gap stays small
• **Overfitting:** training loss decreases, validation loss increases or plateaus
• **Underfitting:** both losses are high and plateau

**Practical protocol:**
1. Split data into train / validation / test (e.g., 80/10/10)
2. NEVER look at test set during training or hyperparameter tuning
3. Use validation set to detect overfitting and tune regularization
4. Report final performance on test set ONCE at the end

**Other signals of overfitting:**
• **Very large weights** — the model uses extreme weight values to fit noise
• **Training loss near zero** — the model has essentially memorized the data
• **Performance gap increases with model size** — adding parameters helps training but hurts validation

**Rule of thumb:** if training accuracy > validation accuracy by more than 5-10%, you likely need more regularization.`}],questions:[{q:"A model achieves 99.5% training accuracy and 65% validation accuracy. Is it overfitting, underfitting, or neither? What's the evidence?",a:"Severe overfitting. Evidence: (1) The 34.5 percentage point gap between training (99.5%) and validation (65%) accuracy indicates the model has memorized training data. (2) Training accuracy near 100% suggests the model has essentially fit every training example, including noise. (3) Validation accuracy of 65% (likely near random for many tasks) shows the model can't generalize. Fixes: increase regularization (dropout, weight decay), reduce model size, get more training data, apply data augmentation, or use early stopping.",hint:"Compare training vs validation performance. What does a huge gap mean?",check:l=>{const r=l.toLowerCase();return r.includes("overfit")&&(r.includes("gap")||r.includes("memoriz")||r.includes("generaliz"))}},{q:"Explain the bias-variance tradeoff in the context of choosing between a 2-layer MLP and a 50-layer MLP for a small dataset of 1000 samples.",a:"The 2-layer MLP has high bias (may be too simple to capture complex patterns) but low variance (limited capacity means it won't memorize noise). The 50-layer MLP has low bias (can represent extremely complex functions) but high variance (with only 1000 samples, it will likely memorize every data point and fail on new data). For 1000 samples, the 2-layer MLP is likely better — the 50-layer model has far more parameters than data points, making overfitting almost certain without heavy regularization. If you must use the 50-layer model, apply aggressive regularization: dropout (0.3-0.5), strong weight decay, early stopping, and data augmentation.",hint:"Which model has more parameters relative to the dataset? What happens when params >> data?",check:l=>{const r=l.toLowerCase();return(r.includes("2-layer")||r.includes("small")||r.includes("simpl"))&&(r.includes("overfit")||r.includes("memoriz")||r.includes("variance"))}}]},{id:"l1l2",icon:"λ",color:"#0369A1",title:"L1, L2 & Weight Decay",subtitle:"Penalizing large weights — from Ridge Regression (1970) to AdamW in modern LLMs",resources:[{type:"infographic",title:"d2l.ai — Weight Decay (interactive plots)",url:"https://d2l.ai/chapter_multilayer-perceptrons/weight-decay.html"},{type:"read",title:"LunarTech — Mastering L1 and L2 Regularization",url:"https://www.lunartech.ai/blog/mastering-l1-and-l2-regularization-the-definitive-guide-to-preventing-overfitting-in-neural-networks"},{type:"read",title:"Andrew Ng — Feature Selection, L1 vs L2 (ICML paper)",url:"https://icml.cc/Conferences/2004/proceedings/papers/354.pdf"},{type:"video",title:"StatQuest — Regularization Part 1: Ridge (L2)",url:"https://www.youtube.com/watch?v=Q81RR3Y5LQE"},{type:"video",title:"StatQuest — Regularization Part 2: Lasso (L1)",url:"https://www.youtube.com/watch?v=NGf0voTMlcs"}],content:[{heading:"L2 Regularization (Ridge / Weight Decay)",body:`**Formula:** L_total = L_data + (λ/2) Σᵢ wᵢ²

**Origin:** Hoerl & Kennard (1970) — "Ridge Regression." Also called Tikhonov regularization (1943 in inverse problems). The oldest ML regularization technique still in widespread use.

**Effect on gradients:**
∂L_total/∂w = ∂L_data/∂w + **λw**

The gradient update becomes:
w ← w - η(∂L/∂w + λw) = **(1 - ηλ)w** - η∂L/∂w

The factor **(1 - ηλ) < 1** multiplies all weights at every step, shrinking them toward zero. This is why it's called **weight decay** — weights literally decay each step.

**Bayesian interpretation:**
L2 regularization = MAP estimation with a **Gaussian prior** on weights: P(w) = N(0, 1/λ)
Stronger regularization (larger λ) = tighter prior = smaller weights.

**Effect on the model:**
• Shrinks ALL weights, but doesn't set any to exactly zero
• Spreads information across many features (no feature dominates)
• Produces smoother, less extreme predictions
• Equivalent to constraining ||w||₂ ≤ c for some c (L2 norm constraint)

**Typical values:** λ = 0.0001 to 0.1 (task-dependent)
**In modern LLMs:** AdamW uses weight decay = 0.1 (standard for GPT, Llama, etc.)`},{heading:"L1 Regularization (Lasso)",body:`**Formula:** L_total = L_data + λ Σᵢ |wᵢ|

**Origin:** Tibshirani (1996) — "Lasso" (Least Absolute Shrinkage and Selection Operator).

**Effect on gradients:**
∂L_total/∂w = ∂L/∂w + λ × sign(w)

The penalty pushes each weight toward zero by a **constant amount** (λ), regardless of the weight's current size. Small weights that reach zero stay there.

**Bayesian interpretation:**
L1 = MAP with a **Laplace prior**: P(w) = Laplace(0, 1/λ)
The Laplace distribution has a sharp spike at zero → encourages weights to BE zero.

**The key difference from L2:**
• **L2 shrinks weights** toward zero (all weights get smaller, none become exactly zero)
• **L1 produces sparsity** — some weights become EXACTLY zero (automatic feature selection!)

**Why L1 creates sparsity (geometric intuition):**
The L1 constraint region is a diamond shape (corners on the axes). The loss function's contours are more likely to touch this diamond at a corner, where one or more weights = 0. The L2 constraint is a circle with no corners — contours touch it at non-zero points.

**Used in:** feature selection, interpretable models, compressed sensing. Less common in deep learning (L2 is preferred for neural networks because sparsity isn't always desirable and L1 is harder to optimize).`},{heading:"Weight Decay ≠ L2 in Adam (AdamW)",body:`**Critical subtlety:** for SGD, weight decay and L2 regularization are mathematically equivalent. For Adam, they are NOT.

**L2 regularization with Adam:**
Gradient: g = ∂L/∂w + λw
Adam normalizes by the running average of g² → the λw term gets divided by the adaptive learning rate
Result: the regularization strength varies per parameter — **not what you want**

**Weight decay with AdamW:**
Gradient: g = ∂L/∂w (no λw added)
Adam update: Δw = -η × m̂/(√v̂ + ε)
Then: **w ← (1 - ηλ)w + Δw** (decay applied separately)

The decay is applied **independently** of the adaptive gradient scaling.

**Loshchilov & Hutter (2019)** showed this distinction matters in practice. AdamW consistently outperforms Adam + L2 for training large models.

**Standard LLM settings:** AdamW with weight_decay = 0.1, applied to all weight matrices but NOT to biases, layer norm parameters, or embedding weights. This is because biases and norms are lower-dimensional and don't benefit from decay.

**In PyTorch:**
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4, weight_decay=0.1)`},{heading:"Elastic Net — L1 + L2 Combined",body:`**Formula:** L_total = L_data + α × λ Σ|wᵢ| + (1-α) × (λ/2) Σwᵢ²

**Origin:** Zou & Hastie (2005). Combines L1 sparsity with L2 stability.

**Why combine them?**
• Pure L1 is unstable with correlated features — it arbitrarily selects one and zeros the others
• Pure L2 keeps all features but provides no selection
• Elastic Net selects groups of correlated features together while still producing sparsity

**α ∈ [0,1]** controls the L1/L2 mix:
• α = 1: pure Lasso (L1)
• α = 0: pure Ridge (L2)
• α = 0.5: equal mix

**Used in:** traditional ML models (scikit-learn), genomics (many correlated features), NLP feature selection. Rarely used directly in deep learning, where dropout and weight decay dominate.`}],questions:[{q:"A model has weights [3.0, 0.01, -2.5, 0.005, 1.8]. After applying L1 with λ=0.1 for one step (lr=1), which weights become zero?",a:"L1 gradient = λ × sign(w): [0.1, 0.1, -0.1, 0.1, 0.1]. Updated weights: [3.0-0.1, 0.01-0.1, -2.5+0.1, 0.005-0.1, 1.8-0.1] = [2.9, -0.09, -2.4, -0.095, 1.7]. Wait — weights 2 and 4 crossed zero! In practice, L1 implementations clip weights at zero: w₂ = max(0, 0.01-0.1) = 0, w₄ = max(0, 0.005-0.1) = 0 (assuming positive constraint, or sign-aware clipping). The small weights (0.01 and 0.005) get pushed to exactly zero because the L1 penalty (0.1) exceeds their magnitude. This is L1's sparsity in action — small, unimportant weights are eliminated.",hint:"L1 subtracts λ×sign(w) from each weight. What happens when |w| < λ?",check:l=>{const r=l.toLowerCase();return(r.includes("0.01")||r.includes("0.005"))&&(r.includes("zero")||r.includes("spars"))}},{q:"Why does AdamW apply weight decay separately from the gradient, while standard Adam + L2 does not?",a:"In standard Adam + L2, the regularization term λw is added to the gradient BEFORE Adam's adaptive scaling. Adam divides gradients by √(running_average(gradient²)). So the λw term gets divided by the same adaptive factor — parameters with large gradient history get less regularization, parameters with small history get more. This makes the effective regularization strength unpredictable and parameter-dependent. AdamW applies decay AFTER the Adam update: w ← (1-ηλ)w + adam_update. The decay factor (1-ηλ) is the same for all parameters regardless of their gradient history, giving uniform and predictable regularization. Loshchilov & Hutter showed this produces better generalization in practice.",hint:"In Adam, gradients are divided by √v̂. What happens to the L2 term if it's part of the gradient?",check:l=>{const r=l.toLowerCase();return(r.includes("adaptive")||r.includes("scal")||r.includes("divid"))&&(r.includes("separate")||r.includes("independent")||r.includes("uniform")||r.includes("after"))}}]},{id:"dropout",icon:"⊘",color:"#DC2626",title:"Dropout",subtitle:"Randomly killing neurons during training — the most elegant regularizer (2014)",resources:[{type:"read",title:"Srivastava et al. 2014 — Dropout paper (original)",url:"https://jmlr.org/papers/v15/srivastava14a.html"},{type:"read",title:"d2l.ai — Dropout (with experiments)",url:"https://d2l.ai/chapter_multilayer-perceptrons/dropout.html"},{type:"read",title:"MDPI — Comprehensive Review of Dropout Approaches",url:"https://www.mdpi.com/2079-9292/12/14/3106"},{type:"video",title:"StatQuest — Dropout Explained",url:"https://www.youtube.com/watch?v=ARq74QuavAo"},{type:"video",title:"Karpathy — makemore Part 3 (dropout in practice)",url:"https://www.youtube.com/watch?v=P6sfmUTpUmc"}],content:[{heading:"How Dropout Works",body:`**Origin:** Srivastava, Hinton, Krizhevsky, Sutskever & Salakhutdinov (2014). Hinton's original motivation: inspired by how sexual reproduction prevents complex co-adaptations — each generation gets a random mix of genes.

**During training:** for each forward pass, randomly set each neuron's output to 0 with probability p.

**Mathematically:**
rⱼ ~ Bernoulli(1-p)     ← random mask, p = drop probability
ã = a ⊙ r / (1-p)       ← mask and scale (inverted dropout)

**The (1-p) scaling** (inverted dropout) ensures the expected value of the output stays the same:
E[ã] = a × (1-p)/(1-p) = a ✓

**During inference:** use ALL neurons (no dropout). Because we used inverted dropout during training, no scaling adjustment is needed at test time.

**In PyTorch:**
self.dropout = nn.Dropout(p=0.5)
# Training: randomly zeros 50% of elements, scales rest by 2
# Eval (model.eval()): identity, does nothing

**Typical rates:** p = 0.1–0.5 for hidden layers, p = 0.0 for output layer.
In Transformers: p = 0.1 is standard (applied after attention and after FFN).`},{heading:"Why Dropout Works — Three Perspectives",body:`**Perspective 1: Preventing co-adaptation**
Without dropout, neurons can form complex, fragile co-dependencies: "neuron A fires only if neurons B AND C fire in a specific way." Dropout breaks these co-dependencies — since any neuron might be absent, each neuron must learn to be useful **independently**. This produces more robust, distributed representations.

**Perspective 2: Implicit ensemble**
With N neurons and dropout, each training step uses a different random subset → effectively trains one of 2ᴺ possible sub-networks. The final model (all neurons, no dropout) approximates the **average prediction of all 2ᴺ sub-networks** — a massive ensemble! Ensembles are known to generalize better than individual models.

**Perspective 3: Bayesian approximation**
Gal & Ghahramani (2016) showed that dropout is mathematically equivalent to approximate Bayesian inference in deep Gaussian processes. Each forward pass with dropout samples from a distribution over models, and the average prediction approximates the Bayesian model average. This means dropout gives you **uncertainty estimates for free** — run the model multiple times with dropout active and measure the variance of predictions.

**Perspective 4: Noise injection as regularization**
Dropout adds multiplicative noise to activations. This noise makes the optimization landscape smoother and prevents the model from relying on precise activation patterns that might be specific to the training data.`},{heading:"Dropout Variants",body:`**Standard Dropout** (Srivastava 2014): drops individual neurons.

**DropConnect** (Wan et al. 2013): drops individual **weights** instead of neurons. More fine-grained — each connection can be independently dropped. More parameters to randomize → stronger regularization, but more expensive.

**Spatial Dropout** (Tompson et al. 2015): drops entire **feature maps** in CNNs (all spatial positions of one channel are dropped together). Better for convolutional networks where adjacent pixels are correlated.

**DropBlock** (Ghiasi et al. 2018): drops contiguous **regions** of feature maps. More effective than standard dropout for CNNs because dropping individual pixels is easily recovered from neighbors.

**Variational Dropout** (Kingma et al. 2015): learns the dropout rate per neuron as a trainable parameter. Bayesian approach — the network decides which neurons need more regularization.

**Attention Dropout** (Transformers): drops elements from attention weights. Standard in Transformers: dropout on attention scores after softmax, and on the output projection.

**Modern LLM practice:** dropout = 0.0 during pre-training (large models on massive data don't overfit), dropout = 0.1 during fine-tuning (smaller data → overfitting risk). Some models (GPT-3, PaLM) don't use dropout at all during pre-training.`}],questions:[{q:"A layer has 200 neurons with dropout p=0.3. On average, how many neurons are active per training step? What happens during inference?",a:"During training: 200 × (1-0.3) = 140 neurons are active on average per step. The other 60 are randomly set to zero. The active neurons' outputs are scaled by 1/(1-0.3) = 1/0.7 ≈ 1.43 to compensate (inverted dropout). During inference: ALL 200 neurons are active. No dropout is applied (model.eval() disables it). No rescaling is needed because inverted dropout already compensated during training. The expected output magnitude is the same in both modes.",hint:"Active neurons = total × (1-p). What scaling compensates for the dropped neurons?",check:l=>l.includes("140")&&(l.toLowerCase().includes("all")||l.toLowerCase().includes("200")||l.toLowerCase().includes("no dropout"))},{q:"Why is dropout used during fine-tuning but often NOT during pre-training of large LLMs?",a:"During pre-training, large LLMs (billions of parameters) are trained on trillions of tokens — an enormous amount of data relative to parameters. With this much data, overfitting is unlikely, so dropout's regularization isn't needed and would only slow training (dropout makes training noisier, requiring more steps to converge). During fine-tuning, the same large model is adapted on a much smaller dataset (thousands to millions of examples), creating a large params-to-data ratio that makes overfitting very likely. Dropout becomes valuable here to prevent the model from memorizing the small fine-tuning dataset while preserving its pre-trained capabilities.",hint:"Compare the data:parameters ratio during pre-training vs fine-tuning.",check:l=>{const r=l.toLowerCase();return(r.includes("data")||r.includes("trillions")||r.includes("massive"))&&(r.includes("small")||r.includes("fine-tun")||r.includes("overfit"))}}]},{id:"norm",icon:"μ/σ",color:"#0E7490",title:"Normalization — BatchNorm & LayerNorm",subtitle:"Stabilizing activations across layers — why Transformers use LayerNorm, not BatchNorm",resources:[{type:"read",title:"Ioffe & Szegedy 2015 — Batch Normalization paper",url:"https://arxiv.org/abs/1502.03167"},{type:"read",title:"Ba et al. 2016 — Layer Normalization paper",url:"https://arxiv.org/abs/1607.06450"},{type:"read",title:"d2l.ai — Batch Normalization",url:"https://d2l.ai/chapter_convolutional-modern/batch-norm.html"},{type:"video",title:"Karpathy — makemore Part 3 (BatchNorm deep-dive)",url:"https://www.youtube.com/watch?v=P6sfmUTpUmc"}],content:[{heading:"Batch Normalization",body:`**Origin:** Ioffe & Szegedy (2015). Addressed "internal covariate shift" — the distribution of each layer's inputs changes during training as weights update, making optimization harder.

**Formula (during training):**
μ_B = (1/m) Σᵢ xᵢ          ← batch mean
σ²_B = (1/m) Σᵢ (xᵢ - μ_B)²  ← batch variance
x̂ᵢ = (xᵢ - μ_B) / √(σ²_B + ε)  ← normalize
yᵢ = γ x̂ᵢ + β              ← scale and shift (learnable)

**γ and β** are learnable parameters — they let the network undo the normalization if needed. If γ = σ and β = μ, the normalization is completely reversed.

**During inference:** use running averages of μ and σ² computed during training (not batch statistics).

**Benefits:**
• **Smoother optimization landscape** → enables higher learning rates
• **Reduces sensitivity to initialization** → less careful init needed
• **Mild regularizing effect** → batch statistics add noise (each sample's normalization depends on the other samples in the batch)
• **Faster convergence** → often 2-10× fewer training steps

**Limitations:**
• **Batch-size dependent** — small batches → noisy statistics → poor performance
• **Train/test discrepancy** — uses batch stats during training but running averages during inference
• **Not suitable for sequences** — in NLP, different sequences have different lengths, making batch statistics across positions meaningless`},{heading:"Layer Normalization — The Transformer Standard",body:`**Origin:** Ba, Kiros & Hinton (2016). Designed to work where BatchNorm fails: RNNs and sequence models.

**Formula:**
μₗ = (1/d) Σⱼ xⱼ           ← mean across features (within ONE sample)
σ²ₗ = (1/d) Σⱼ (xⱼ - μₗ)²   ← variance across features
x̂ⱼ = (xⱼ - μₗ) / √(σ²ₗ + ε)
yⱼ = γ x̂ⱼ + β

**Key difference from BatchNorm:**
• **BatchNorm** normalizes across the **batch dimension** (same feature, different samples)
• **LayerNorm** normalizes across the **feature dimension** (different features, same sample)

**Why LayerNorm for Transformers:**
1. **Batch-size independent** — same computation for batch size 1 or 1000
2. **No train/test discrepancy** — no running averages needed
3. **Works for variable-length sequences** — each position normalized independently
4. **Each token gets its own normalization** — appropriate for autoregressive generation where batch_size=1

**Placement in Transformers:**
• **Post-norm** (original Transformer): LayerNorm after each sub-layer: LN(x + SubLayer(x))
• **Pre-norm** (GPT-2, modern LLMs): LayerNorm before each sub-layer: x + SubLayer(LN(x))

Pre-norm is preferred in practice — it produces more stable gradients during training and makes training deeper networks easier.

**RMSNorm** (Llama, Gemma): a simplified LayerNorm that skips the mean subtraction:
RMSNorm(x) = x / RMS(x) × γ  where RMS(x) = √((1/d)Σxⱼ²)
~15% faster than LayerNorm with similar performance. Used in most modern LLMs.`},{heading:"Normalization as Regularization",body:`**Both BatchNorm and LayerNorm have a regularizing effect**, even though that's not their primary purpose:

**BatchNorm's regularization:**
Each sample's normalization depends on the OTHER samples in the batch → adds noise proportional to batch composition. This noise acts like data augmentation, making the model more robust. Larger batch → less noise → less regularization.

**LayerNorm's regularization:**
More subtle. It constrains the representation at each layer to have fixed mean and variance, preventing activation magnitudes from encoding information that might be specific to the training distribution.

**Practical implication:** when using BatchNorm, you sometimes need LESS dropout. The two regularizers can be redundant.

**The deeper role of normalization:**
Normalization fundamentally changes the **loss landscape geometry**. Research shows that BatchNorm makes the loss surface smoother (fewer sharp valleys, more gentle slopes), which is the actual reason it enables faster training and higher learning rates — not the "internal covariate shift" explanation from the original paper.`}],questions:[{q:"Why do ALL modern Transformers use LayerNorm (or RMSNorm) instead of BatchNorm?",a:"Four reasons: (1) Batch independence — LayerNorm normalizes within each sample, so it works with any batch size including 1 (critical for autoregressive generation where you process one token at a time). (2) No train/test discrepancy — BatchNorm uses batch statistics during training but running averages during inference, which can cause performance gaps. LayerNorm behaves identically in both modes. (3) Variable-length sequences — in NLP, sequences have different lengths. BatchNorm would compute statistics across different positions of different sequences, which is semantically meaningless. (4) Parallelism — LayerNorm requires no cross-sample communication, making it simpler to implement for distributed training.",hint:"Think about what happens at inference when batch_size = 1 (generating one token at a time).",check:l=>{const r=l.toLowerCase();return(r.includes("batch size")||r.includes("batch-size")||r.includes("independent")||r.includes("inference")||r.includes("variable")||r.includes("sequence"))&&(r.includes("layer")||r.includes("transform"))}},{q:"In RMSNorm(x) = x / RMS(x) × γ, what simplification is made compared to LayerNorm and why is it acceptable?",a:"RMSNorm drops the mean subtraction step (re-centering). Standard LayerNorm does: x̂ = (x - mean(x)) / std(x). RMSNorm does: x̂ = x / RMS(x) where RMS = √(mean(x²)). This is acceptable because: (1) Empirically, the re-centering contributes much less to performance than the re-scaling — the variance normalization is what matters most. (2) RMSNorm is ~15% faster (one fewer reduction operation per layer). (3) In Llama and Gemma experiments, RMSNorm matches LayerNorm performance while being faster. The learned scale parameter γ can partially compensate for the missing re-centering.",hint:"Compare: LayerNorm = center + scale. RMSNorm = scale only. Which operation matters more?",check:l=>{const r=l.toLowerCase();return(r.includes("mean")||r.includes("center")||r.includes("re-center"))&&(r.includes("skip")||r.includes("drop")||r.includes("remov")||r.includes("without"))}}]},{id:"other",icon:"⊕",color:"#B91C1C",title:"Early Stopping, Data Augmentation & More",subtitle:"The regularization techniques that don't modify the loss function or architecture",resources:[{type:"read",title:"Karpathy — A Recipe for Training Neural Networks",url:"https://karpathy.github.io/2019/04/25/recipe/"},{type:"read",title:"d2l.ai — Data Augmentation",url:"https://d2l.ai/chapter_computer-vision/image-augmentation.html"},{type:"video",title:"Karpathy — makemore (training practices)",url:"https://www.youtube.com/watch?v=P6sfmUTpUmc"}],content:[{heading:"Early Stopping",body:`**Idea:** stop training when validation loss stops improving, before the model has time to overfit.

**Algorithm:**
1. After each epoch, evaluate on validation set
2. Track the best validation loss seen so far
3. If validation loss hasn't improved for **patience** epochs, stop training
4. Restore the weights from the best epoch

**Patience** = how many epochs of no improvement before stopping. Typical: 5-20 epochs.

**Why it works:** early in training, the model learns general patterns (both training and validation loss decrease). Later, it starts memorizing noise (training loss keeps decreasing but validation loss increases). Early stopping captures the model at the transition point.

**Bayesian interpretation:** early stopping is equivalent to L2 regularization with a regularization strength inversely proportional to the number of training steps (Bishop, 1995). More training = less regularization.

**In PyTorch:**
from torch.optim.lr_scheduler import ReduceLROnPlateau
# Or implement manually:
if val_loss < best_val_loss:
    best_val_loss = val_loss; save_checkpoint()
elif patience_counter > patience:
    break  # stop training

**Advantage:** zero hyperparameters besides patience. No modification to the model or loss function.`},{heading:"Data Augmentation",body:`**Idea:** artificially expand the training set by applying transformations that preserve the label.

**For images:** random crops, flips, rotations, color jitter, cutout, mixup
**For text:** synonym replacement, back-translation, random deletion/insertion
**For audio:** time stretching, pitch shifting, noise injection

**Why it works:** the model sees more diverse examples, making it harder to memorize specific patterns. It's like getting more training data for free.

**Label smoothing** (covered in loss functions) can be viewed as a form of "label augmentation."

**Mixup (Zhang et al., 2018):**
x_mix = λ × x₁ + (1-λ) × x₂
y_mix = λ × y₁ + (1-λ) × y₂
where λ ~ Beta(α, α), typically α = 0.2

Blends two training examples and their labels. Forces the model to learn linear interpolation between classes → smoother decision boundaries.

**CutMix (Yun et al., 2019):** cut a patch from one image and paste it onto another. Label is proportional to the area ratio.

**RandAugment (Cubuk et al., 2020):** randomly select N augmentation operations with magnitude M. Simple, effective, widely adopted.

**Data augmentation is often the single most effective regularizer** — it addresses the root cause of overfitting (not enough data) rather than treating the symptom (model too complex).`},{heading:"Label Smoothing, Stochastic Depth & Gradient Noise",body:`**Label Smoothing** (Szegedy et al., 2016):
Replace hard targets [0,0,1,0] with soft targets [ε/K, ε/K, 1-ε+ε/K, ε/K]
Standard: ε = 0.1. Prevents overconfidence, improves calibration.

**Stochastic Depth** (Huang et al., 2016):
Randomly skip entire layers during training. Each layer has a survival probability that decreases linearly with depth (early layers are more important → higher survival rate).
At inference: use all layers with outputs scaled by survival probability.
Used in training very deep networks (100+ layers). Conceptually: "dropout for layers."

**Gradient Noise** (Neelakantan et al., 2015):
Add Gaussian noise to gradients: g̃ = g + N(0, σ²/(1+t)^γ)
The noise helps escape sharp minima early in training (large σ) and reduces as training converges (annealing via the (1+t)^γ denominator).

**Weight Tying** (Press & Wolf, 2017):
In language models, the input embedding matrix and output projection matrix share the same weights. This halves the parameters for these large matrices and acts as a regularizer. Used in GPT-2, BERT, and most Transformer models.

**These techniques are often combined:** a modern LLM training run might use weight decay + dropout (fine-tuning only) + label smoothing + weight tying + gradient clipping + data augmentation (for vision) simultaneously.`}],questions:[{q:"Early stopping is theoretically equivalent to which explicit regularization technique? Explain the connection.",a:"L2 regularization (weight decay). Bishop (1995) and Goodfellow et al. (2016) showed that for linear models, early stopping after t steps is equivalent to L2 regularization with λ ≈ 1/(ηt) where η is the learning rate. Intuition: both techniques constrain the weights to stay close to their initialization (near zero). L2 explicitly penalizes large weights. Early stopping implicitly constrains by limiting how far weights can travel from their initial values during training. More training steps = weights travel further = less regularization. Fewer steps = weights stay near zero = more regularization. This is why both techniques push toward simpler models.",hint:"Both early stopping and L2 constrain how 'big' the weights can get. How?",check:l=>{const r=l.toLowerCase();return r.includes("l2")&&(r.includes("close")||r.includes("constrain")||r.includes("small")||r.includes("initial")||r.includes("near zero"))}},{q:"You're training a Transformer model for text classification. Which combination of regularization techniques would you use and why?",a:"Recommended combination: (1) Weight decay (AdamW, λ=0.01-0.1) — standard for all Transformer training, prevents large weights. (2) Dropout (p=0.1) on attention weights and after FFN — prevents co-adaptation, standard in Transformers. (3) Label smoothing (ε=0.1) — prevents overconfidence in predictions, standard since the original Transformer paper. (4) Early stopping (patience=5-10) — free safety net against overfitting, no cost. (5) Pre-norm LayerNorm — stabilizes training, standard architecture choice. Optionally: (6) data augmentation (if text data is limited). NOT recommended: BatchNorm (wrong for variable-length sequences), L1 (not standard for deep learning), stochastic depth (more for CNNs). The specific dropout rate and weight decay should be tuned on a validation set.",hint:"Think about what's standard in Transformer training: attention dropout, AdamW, label smoothing...",check:l=>{const r=l.toLowerCase();return(r.includes("weight decay")||r.includes("adamw"))&&r.includes("dropout")&&(r.includes("label smooth")||r.includes("early stop"))}}]}];function Dh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:M=>U(M.target.value),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:()=>E("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:()=>{var M;E("idle"),U(""),(M=A.current)==null||M.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Eh({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=Ur.reduce((p,S)=>p+S.content.length,0),P=Math.round(b.size/A*100),M=p=>p.split(`
`).map((S,G)=>{if(S==="")return a.jsx("div",{style:{height:8}},G);const d=S.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:d.map((g,N)=>N%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:g},N):a.jsx("span",{children:g},N))},G)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#0369A1!important}"}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"NEURAL NETWORK FUNDAMENTALS"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Regularization — The Complete Story"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From Ridge Regression (1970) to RMSNorm in Llama — every technique that prevents overfitting, with mathematical derivations, Bayesian interpretations, and practical recipes.",a.jsx("br",{}),Ur.length," sections · ",A," concepts · ",Ur.reduce((p,S)=>{var G;return p+(((G=S.questions)==null?void 0:G.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pf",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #0E7490, #15803D)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ur.map(p=>{var N;const S=r===p.id,G=p.content.map((v,z)=>`${p.id}-${z}`),d=G.filter(v=>b.has(v)).length,g=D[p.id]||"learn";return a.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(S?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[d,"/",p.content.length]}),a.jsx("span",{className:"ar",style:{transform:S?"rotate(90deg)":"rotate(0)"},children:"›"})]}),S&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tb ${g==="learn"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tb ${g==="practice"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"practice"})),children:["✏️ Practice (",((N=p.questions)==null?void 0:N.length)||0,")"]}),a.jsxs("button",{className:`tb ${g==="deeper"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),g==="learn"&&a.jsx("div",{children:p.content.map((v,z)=>{const C=`${p.id}-${z}`,L=K===C,T=b.has(C);return a.jsxs("div",{style:{borderTop:z>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"br",onClick:()=>q(L?null:C),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`ck ${T?"d":""}`,onClick:F=>{F.stopPropagation();const V=new Set(b);V.has(C)?V.delete(C):V.add(C),U(V)},children:T&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:T?"#aaa":"#2a2a2a",textDecoration:T?"line-through":"none",flex:1},children:v.heading}),a.jsx("span",{className:"ar",style:{transform:L?"rotate(90deg)":"rotate(0)"},children:"›"})]}),L&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:M(v.body)})]},z)})}),g==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((v,z)=>a.jsx(Dh,{...v,color:p.color},`${p.id}-q-${z}`))]}),g==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((v,z)=>{const C=Ch[v.type];return a.jsxs("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:C.bg+"55"},children:[a.jsxs("span",{className:"tg",style:{background:C.bg,color:C.color},children:[C.emoji," ",C.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:v.title})]},z)})})]})]})]},p.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Ridge (1970) → Lasso (1996) → Dropout (2014) → BatchNorm (2015) → LayerNorm (2016) → AdamW (2019) → RMSNorm (2023) — constraining complexity at every level"})]})}const Fh={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Gr=[{id:"what",icon:"⊞",color:"#7C3AED",title:"What Is Convolution?",subtitle:"The mathematical operation — sliding a filter over data to detect patterns",resources:[{type:"infographic",title:"CNN Explainer — interactive CNN visualization",url:"https://poloclub.github.io/cnn-explainer/"},{type:"infographic",title:"Pinecone — Visual Guide to CNNs",url:"https://www.pinecone.io/learn/series/image-search/cnn/"},{type:"infographic",title:"Stanford CS231n — Convolution Demo (live)",url:"https://cs231n.github.io/convolutional-networks/"},{type:"read",title:"MIT Vision Book — Ch 24: Convolutional Neural Nets",url:"https://visionbook.mit.edu/convolutional_neural_nets.html"},{type:"read",title:"d2l.ai — Convolutions for Images",url:"https://d2l.ai/chapter_convolutional-neural-networks/conv-layer.html"},{type:"video",title:"3Blue1Brown — But what is a convolution?",url:"https://www.youtube.com/watch?v=KuXjwB4LzSA"},{type:"video",title:"StatQuest — Convolutional Neural Networks Clearly Explained",url:"https://www.youtube.com/watch?v=HGwBXDKFk9I"}],content:[{heading:"The Core Idea — Slide, Multiply, Sum",body:`**Convolution** = sliding a small matrix (the **kernel** or **filter**) over a larger matrix (the **input**), computing element-wise multiplication and summing at each position.

**1D example:**
Input:  [1, 2, 3, 4, 5]
Kernel: [1, 0, -1]

Position 1: 1×1 + 2×0 + 3×(-1) = 1 + 0 - 3 = **-2**
Position 2: 2×1 + 3×0 + 4×(-1) = 2 + 0 - 4 = **-2**
Position 3: 3×1 + 4×0 + 5×(-1) = 3 + 0 - 5 = **-2**

Output: [-2, -2, -2]

This kernel [1, 0, -1] computes the **difference** between neighboring values — it's an **edge detector**! It outputs zero where values are constant and nonzero where values change.

**2D convolution** (for images): the kernel is a small 2D matrix (e.g., 3×3) that slides over the image in both dimensions. At each position: element-wise multiply the kernel with the overlapping patch, sum all values → one output number.

**Key insight:** convolution is just a **local dot product** — the same dot product operation from attention and MLPs, but applied locally to small patches instead of globally.`},{heading:"Why Convolution, Not Fully Connected?",body:`A fully connected layer connecting a 224×224×3 image to 1000 neurons needs:
224 × 224 × 3 × 1000 = **150 million parameters** for just ONE layer!

**Convolution exploits three properties of images:**

**1. Local connectivity** — a pixel's meaning depends on its neighbors, not on pixels far away. A 3×3 kernel only connects each output to 9 input pixels, not all 150,528.

**2. Weight sharing** — the same kernel (same weights) is applied at EVERY position. If a vertical-edge detector works in the top-left, it works everywhere. One set of weights → applied 50,000+ times.

**3. Translation equivariance** — if the input shifts, the output shifts by the same amount. A cat in the top-left produces the same features as a cat in the bottom-right. The network doesn't need to relearn patterns for each position.

**Parameter comparison for a 224×224×3 input:**
• Fully connected to 1000 outputs: **150M parameters**
• Conv layer with 64 3×3 filters: 3×3×3×64 + 64 = **1,792 parameters**

That's an 84,000× reduction! This efficiency is why CNNs made deep learning for images practical.`},{heading:"The Mathematical Formula",body:`**Discrete 2D convolution:**

(I * K)[i, j] = Σₘ Σₙ I[i+m, j+n] × K[m, n]

Where I = input, K = kernel, and m, n range over the kernel dimensions.

**In practice (cross-correlation, which is what "convolution" means in deep learning):**

output[i, j] = Σₘ₌₀^{H-1} Σₙ₌₀^{W-1} input[i+m, j+n] × kernel[m, n] + bias

True mathematical convolution flips the kernel; deep learning doesn't flip it (uses cross-correlation). Since the kernel is learned, the flip doesn't matter — the network learns the flipped version if needed.

**Output dimensions:**
**output_size = (input_size - kernel_size + 2×padding) / stride + 1**

Example: input = 32×32, kernel = 3×3, padding = 1, stride = 1:
output = (32 - 3 + 2×1) / 1 + 1 = 32 → same size! ("same" padding)

Example: input = 32×32, kernel = 5×5, padding = 0, stride = 2:
output = (32 - 5 + 0) / 2 + 1 = 14.5 → floor to 14 (size reduces)`}],questions:[{q:"Apply the kernel [[1, 0], [0, -1]] to the top-left 2×2 patch of the input [[5, 3, 1], [2, 8, 4], [7, 6, 9]]. What is the output value?",a:"Top-left 2×2 patch: [[5, 3], [2, 8]]. Element-wise multiply with kernel [[1, 0], [0, -1]]: 5×1 + 3×0 + 2×0 + 8×(-1) = 5 + 0 + 0 - 8 = -3. This kernel computes the difference between the top-left and bottom-right corners of each patch — it's a diagonal edge detector.",hint:"Multiply each element of the patch by the corresponding kernel element, then sum.",check:l=>l.includes("-3")},{q:"An image is 64×64×3 (RGB). A conv layer uses 32 filters of size 5×5, stride 1, padding 2. What is the output shape and how many parameters does this layer have?",a:"Output height = (64 - 5 + 2×2)/1 + 1 = 64. Output width = same = 64. Output depth = 32 (one per filter). Output shape: 64×64×32. Parameters: each filter has 5×5×3 = 75 weights (kernel covers all 3 input channels) + 1 bias = 76. For 32 filters: 76 × 32 = 2,432 parameters. Note: each filter extends through ALL input channels (3 for RGB) — this is how the conv layer mixes color information.",hint:"Output_size = (input - kernel + 2×padding)/stride + 1. Parameters = kernel_h × kernel_w × in_channels × out_channels + out_channels.",check:l=>l.includes("64")&&l.includes("32")&&(l.includes("2432")||l.includes("2,432"))}]},{id:"kernels",icon:"▦",color:"#0369A1",title:"Kernels, Filters & Feature Maps",subtitle:"What kernels detect, how they're learned, and what feature maps represent",resources:[{type:"infographic",title:"CNN Explainer — see what each filter detects",url:"https://poloclub.github.io/cnn-explainer/"},{type:"infographic",title:"Adam Harley — 3D CNN visualization (draw digits)",url:"https://adamharley.com/nn_vis/"},{type:"read",title:"Stanford CS231n — ConvNet architectures",url:"https://cs231n.github.io/convolutional-networks/"},{type:"read",title:"Zeiler & Fergus 2013 — Visualizing CNNs (seminal paper)",url:"https://arxiv.org/abs/1311.1901"},{type:"video",title:"Computerphile — How Blurs & Filters Work",url:"https://www.youtube.com/watch?v=C_zFhWdM4ic"}],content:[{heading:"Classic Handcrafted Kernels",body:`Before deep learning, engineers designed kernels by hand for specific tasks:

**Edge detection (Sobel horizontal):**
[[-1, -2, -1],
 [ 0,  0,  0],
 [ 1,  2,  1]]
Detects horizontal edges (difference between rows above and below).

**Edge detection (Sobel vertical):**
[[-1, 0, 1],
 [-2, 0, 2],
 [-1, 0, 1]]
Detects vertical edges.

**Blur (Gaussian 3×3):**
[[1, 2, 1],
 [2, 4, 2],
 [1, 2, 1]] / 16
Averages neighbors → smooths noise.

**Sharpen:**
[[ 0, -1,  0],
 [-1,  5, -1],
 [ 0, -1,  0]]
Enhances edges by amplifying the center relative to neighbors.

**In CNNs, kernels are LEARNED, not handcrafted.** The network discovers that it needs edge detectors, blur filters, and much more complex patterns through backpropagation. Early layers typically learn simple edge/color detectors; deeper layers learn complex texture and shape patterns.`},{heading:"Multi-Channel Convolution",body:`**An RGB image has 3 channels.** A single kernel must process ALL channels simultaneously.

**Filter shape:** (kernel_h, kernel_w, **in_channels**)
For a 3×3 filter on RGB input: shape = (3, 3, 3) = **27 weights + 1 bias = 28 parameters**

**How it works:**
• The 3D filter has a separate 2D kernel for each input channel (R, G, B)
• Each 2D kernel convolves with its corresponding channel
• The results from all channels are **summed** into a single 2D output
• Add bias → one 2D **feature map**

**Multiple filters:** each filter produces ONE feature map. With K filters:
• Input: (H, W, C_in)
• Output: (H', W', **K**) — K feature maps stacked as channels

**In deeper layers:** input might have 256 channels (from previous layer's 256 filters). Each new filter has shape (3, 3, 256) = 2,304 weights. With 512 filters: 2,304 × 512 = **1.18M parameters** for one layer.

**The depth explosion:** this is why deeper CNN layers have many more parameters than early layers, even with the same kernel size.`},{heading:"What Feature Maps Actually Show",body:`**Feature maps** = the output of convolution + activation at each layer. They represent "where in the image does this pattern appear?"

**Layer 1 feature maps:** respond to low-level features
• Edges at different orientations (horizontal, vertical, diagonal)
• Color blobs (red regions, blue regions)
• Gradient patterns

**Layer 2-3 feature maps:** respond to mid-level features
• Corners and junctions
• Textures (stripes, dots, grids)
• Simple shapes (curves, circles)

**Layer 4-5 feature maps:** respond to high-level features
• Object parts (eyes, wheels, windows)
• Complex textures (fur, scales, fabric)
• Spatial arrangements of simpler features

**Deeper layers:** respond to semantic concepts
• Faces, cars, animals
• Scene types (indoor, outdoor)
• Actions and poses

**This hierarchical feature learning** is the fundamental power of deep CNNs — each layer builds on the previous one, composing simple features into complex concepts. The network automatically discovers the right features for the task.

**Visualization techniques:** Zeiler & Fergus (2013) showed you can "deconvolve" feature maps back to pixel space to see what each filter detects. Tools like GradCAM show which spatial regions activate most for a given prediction.`}],questions:[{q:"A conv layer takes input of shape (32, 32, 64) and uses 128 filters of size 3×3. How many parameters does this layer have?",a:"Each filter: 3 × 3 × 64 = 576 weights + 1 bias = 577 parameters. Total: 577 × 128 = 73,856 parameters. Note the key point: each filter extends through ALL 64 input channels. The kernel is actually a 3D volume (3×3×64), not a 2D matrix. The number of parameters depends on both kernel spatial size AND input depth.",hint:"Filter shape = (kernel_h × kernel_w × in_channels). Don't forget biases.",check:l=>l.replace(/[,\s]/g,"").includes("73856")},{q:"Why do early CNN layers typically learn edge detectors while deeper layers learn complex patterns like faces?",a:"Compositionality. Layer 1 can only see a 3×3 patch (its receptive field), so the most useful thing it can detect is local patterns like edges and color gradients. Layer 2 convolves over layer 1's feature maps, effectively combining edges — it can detect corners (intersection of two edges) and simple textures (repeated edges). Each subsequent layer combines the previous layer's patterns into more complex ones: edges → corners → shapes → object parts → whole objects. This is possible because each layer's receptive field grows — layer N effectively 'sees' a much larger region of the original image than layer 1. The network learns this hierarchy through backpropagation, not because it's hard-coded.",hint:"What is the receptive field of layer 1? What can it possibly detect with only a 3×3 view?",check:l=>{const r=l.toLowerCase();return(r.includes("receptive field")||r.includes("composit")||r.includes("hierarch")||r.includes("combine")||r.includes("build"))&&(r.includes("edge")||r.includes("simple")||r.includes("local"))}}]},{id:"stride",icon:"⟿",color:"#DC2626",title:"Stride, Padding & Pooling",subtitle:"Controlling output size — compression, preservation, and downsampling",resources:[{type:"infographic",title:"Dumoulin & Visin — Convolution Arithmetic animations",url:"https://github.com/vdumoulin/conv_arithmetic"},{type:"read",title:"d2l.ai — Padding and Stride",url:"https://d2l.ai/chapter_convolutional-neural-networks/padding-and-strides.html"},{type:"read",title:"d2l.ai — Pooling",url:"https://d2l.ai/chapter_convolutional-neural-networks/pooling.html"},{type:"video",title:"Andrew Ng — Strided Convolutions",url:"https://www.youtube.com/watch?v=tQYZaDn_kSg"}],content:[{heading:"Stride — How Far the Kernel Jumps",body:`**Stride** = the number of pixels the kernel moves between positions.

**Stride 1:** kernel moves 1 pixel at a time. Maximum overlap, maximum output size.
**Stride 2:** kernel jumps 2 pixels → output is ~half the input size.
**Stride 4:** kernel jumps 4 pixels → output is ~quarter the input size.

**Output size formula:**
**output = floor((input - kernel + 2×padding) / stride) + 1**

**Example (input=8, kernel=3):**
• Stride 1, pad 0: (8-3+0)/1 + 1 = 6
• Stride 2, pad 0: (8-3+0)/2 + 1 = 3.5 → floor = 3
• Stride 1, pad 1: (8-3+2)/1 + 1 = 8 (same size! "same" padding)

**Why use stride > 1?**
• **Reduces computation** — fewer output positions to compute
• **Increases receptive field faster** — each layer "sees" a larger region of the input
• **Downsamples** — compresses spatial dimensions (like pooling, but learned)

**Modern trend:** strided convolutions are increasingly used INSTEAD of pooling (e.g., in ResNet, many modern architectures). A learned strided convolution can do better than fixed max-pooling because the downsampling is learned, not hand-designed.`},{heading:"Padding — Preserving the Borders",body:`**Problem:** without padding, each conv layer shrinks the spatial dimensions.
Input 32×32, kernel 3×3, no padding → output 30×30. After 10 layers: 12×12. Information at the edges is lost!

**Zero padding:** add rows/columns of zeros around the input border.

**"Same" padding:** choose padding so output size = input size.
For kernel K with stride 1: padding = (K-1)/2
• Kernel 3×3: pad 1 → output = input size ✓
• Kernel 5×5: pad 2 → output = input size ✓
• Kernel 7×7: pad 3 → output = input size ✓

**"Valid" padding:** no padding. Output shrinks.
For kernel K, stride 1: output = input - K + 1

**Why padding matters:**
1. **Preserves spatial dimensions** — critical for architectures with residual connections (output must match input size for addition)
2. **Border pixels participate equally** — without padding, corner pixels only contribute to 1 output value vs center pixels contributing to K² values
3. **Enables very deep networks** — without padding, spatial size shrinks rapidly, limiting depth

**In PyTorch:**
nn.Conv2d(64, 128, kernel_size=3, padding=1)  # 'same' for stride=1
nn.Conv2d(64, 128, kernel_size=3, padding=0)  # 'valid'`},{heading:"Pooling — Aggregation & Downsampling",body:`**Pooling** reduces spatial dimensions by aggregating values in local regions.

**Max Pooling (most common):**
For each 2×2 window: output = max(values in window)
[[1, 3], [5, 2]] → max = **5**

Keeps the strongest activation → if a feature is detected anywhere in the window, the max preserves it.

**Average Pooling:**
For each 2×2 window: output = mean(values in window)
[[1, 3], [5, 2]] → mean = **2.75**

Smoother downsampling, preserves overall activation level.

**Global Average Pooling (GAP):**
Average over the ENTIRE spatial extent → (H, W, C) → (1, 1, C) → (C,)
Replaces the fully connected layers at the end of modern CNNs. Much fewer parameters!

**Typical configuration:** 2×2 max pooling with stride 2 → halves both dimensions.
Input: 32×32×64 → Output: 16×16×64 (spatial halved, channels unchanged)

**No learnable parameters!** Pooling is a fixed operation — no weights.

**Provides translation invariance:** if a feature shifts by 1 pixel, max pool over a 2×2 region still detects it. This makes the network robust to small spatial shifts.

**Modern trend:** many architectures replace pooling with strided convolutions (which ARE learned). But pooling remains common in practice.`}],questions:[{q:"Input: 56×56×128. Conv layer: 256 filters, 3×3, stride 2, padding 1. What is the output shape?",a:"Output height = floor((56 - 3 + 2×1)/2) + 1 = floor(55/2) + 1 = 27 + 1 = 28. Output width = same = 28. Output depth = 256 (number of filters). Output shape: 28×28×256. This layer halves the spatial dimensions (56→28) while doubling the channels (128→256) — a very common pattern in CNN architectures (trade spatial resolution for more feature channels).",hint:"Use the formula: floor((input - kernel + 2×padding) / stride) + 1.",check:l=>l.includes("28")&&l.includes("256")},{q:"Why does max pooling provide a degree of translation invariance? Give a concrete example.",a:"Max pooling takes the maximum value in each pooling window. If a feature (represented by a high activation value) shifts by a small amount within the pooling window, the max operation still selects it. Example: a 2×2 max pool over [[0, 8], [0, 0]] outputs 8. If the feature shifts one pixel: [[8, 0], [0, 0]] still outputs 8. Even [[0, 0], [0, 8]] outputs 8. Any position within the 2×2 window gives the same pooled output. So the pooled representation is the same regardless of the exact position within the window — that's translation invariance (within the window size). This means a cat ear detected at pixel (10,10) produces the same pooled feature as if detected at pixel (11,11).",hint:"Try a 2×2 max pool with a high value at different positions in the window. Does the output change?",check:l=>{const r=l.toLowerCase();return(r.includes("max")||r.includes("maximum"))&&(r.includes("shift")||r.includes("position")||r.includes("same output")||r.includes("regardless"))}}]},{id:"arch",icon:"🏗",color:"#0E7490",title:"CNN Architectures — LeNet to ResNet",subtitle:"The evolution of convolutional networks — each architecture solved a specific problem",resources:[{type:"infographic",title:"CNN Explainer — interactive architecture exploration",url:"https://poloclub.github.io/cnn-explainer/"},{type:"read",title:"Stanford CS231n — CNN Architectures",url:"https://cs231n.github.io/convolutional-networks/#architectures"},{type:"read",title:"d2l.ai — Modern CNNs (LeNet→ResNet)",url:"https://d2l.ai/chapter_convolutional-modern/index.html"},{type:"video",title:"Yannic Kilcher — ResNet explained",url:"https://www.youtube.com/watch?v=GWt6Fu05voI"}],content:[{heading:"The Standard CNN Pipeline",body:`**Every CNN follows this general pattern:**

Input image → [Conv → ReLU → Pool] × N → Flatten → FC layers → Output

**Stage 1: Feature extraction** (convolutional layers)
• Multiple conv+activation+pooling blocks
• Spatial size decreases, channel count increases
• Each layer detects increasingly complex features

**Stage 2: Classification** (fully connected layers)
• Flatten the final feature maps into a 1D vector
• Pass through 1-2 FC layers
• Output layer with softmax for classification

**Modern variation:** replace FC layers with Global Average Pooling → much fewer parameters.

**Example (simplified VGG-like):**
Input: 224×224×3
Conv1: 64 filters 3×3 → 224×224×64 → Pool → 112×112×64
Conv2: 128 filters 3×3 → 112×112×128 → Pool → 56×56×128
Conv3: 256 filters 3×3 → 56×56×256 → Pool → 28×28×256
Conv4: 512 filters 3×3 → 28×28×512 → Pool → 14×14×512
Conv5: 512 filters 3×3 → 14×14×512 → Pool → 7×7×512
Flatten: 7×7×512 = 25,088
FC1: 4096 → FC2: 4096 → Output: 1000 (ImageNet classes)`},{heading:"Key Architectures — A Timeline",body:`**LeNet-5 (LeCun, 1998):**
5 layers. First successful CNN. Digit recognition (MNIST). Proved convolution works for visual tasks. Used tanh activation, average pooling.

**AlexNet (Krizhevsky, 2012):**
8 layers. Won ImageNet by a huge margin. **Kicked off the deep learning revolution.** Key innovations: ReLU activation, dropout, GPU training, data augmentation. 60M parameters.

**VGGNet (Simonyan & Zisserman, 2014):**
16-19 layers. Key insight: **use only 3×3 filters** (two stacked 3×3 filters have the same receptive field as one 5×5 but fewer parameters and more nonlinearity). Simple, uniform architecture. 138M parameters.

**GoogLeNet/Inception (Szegedy, 2014):**
22 layers. Key insight: **use multiple filter sizes in parallel** (1×1, 3×3, 5×5) at each layer and concatenate results. 1×1 convolutions as "bottleneck" layers to reduce parameters. Only 6.8M parameters!

**ResNet (He et al., 2015):**
Up to 152 layers. Key insight: **skip connections** (x + F(x)). Solved the degradation problem — very deep plain networks performed worse than shallower ones, not because of overfitting but because gradients couldn't flow through so many layers. Skip connections create a gradient highway. Won ImageNet with 3.57% error (superhuman). **The single most influential CNN architecture ever.**`},{heading:"Skip Connections — Why ResNet Changed Everything",body:`**The degradation problem:** a 56-layer plain CNN performed WORSE than a 20-layer one on both training and test. This wasn't overfitting — training error was also worse. More layers should never hurt (worst case: extra layers learn identity). But vanilla networks can't easily learn identity mappings.

**Skip connections fix this:**

output = F(x) + x     ← "residual connection"

If the optimal function is close to identity (the layer shouldn't change much), the network only needs to learn F(x) ≈ 0 (easy — just set weights to zero) instead of F(x) ≈ x (hard — requires specific weight values).

**Gradient flow:**
∂output/∂x = ∂F(x)/∂x + **1**

The "**+1**" means gradients always have a direct path, even if ∂F(x)/∂x vanishes. This is the same principle as LSTM gates and Transformer residual connections.

**ResNet's impact on LLMs:**
Every Transformer block uses residual connections in exactly the same way:
output = x + Attention(x)
output = output + FFN(output)

ResNet proved that skip connections enable arbitrary depth. Without this insight, 96-layer GPT models would be untrainable. **ResNet is the reason deep Transformers work.**`}],questions:[{q:"Why did VGGNet use only 3×3 filters instead of larger ones? What's the mathematical advantage?",a:"Two stacked 3×3 conv layers have the same effective receptive field (5×5) as one 5×5 layer, but with fewer parameters and more nonlinearity. Parameters: two 3×3 layers = 2×(3×3×C×C) = 18C² vs one 5×5 layer = 25C². That's 28% fewer parameters. Nonlinearity: two layers means two ReLU activations (between them), making the function more expressive than a single layer. Three stacked 3×3 = same as 7×7 but with 27C² vs 49C² parameters (45% fewer) and 3 nonlinearities. The general principle: small repeated filters are more efficient and expressive than large filters.",hint:"What receptive field do two 3×3 filters give? Compare parameters: 2×(3×3) vs 1×(5×5).",check:l=>{const r=l.toLowerCase();return(r.includes("receptive field")||r.includes("5×5")||r.includes("5x5"))&&(r.includes("fewer")||r.includes("less")||r.includes("parameter"))&&(r.includes("nonlinear")||r.includes("relu")||r.includes("expressive"))}},{q:"Explain why the '+1' in the gradient of a residual connection (∂(F(x)+x)/∂x = ∂F/∂x + 1) prevents vanishing gradients.",a:"In a plain network, the gradient through L layers is a product: ∂f/∂x = ∏ᵢ ∂fᵢ/∂xᵢ. If each factor < 1, the product vanishes exponentially. With residual connections, the gradient becomes ∏ᵢ(∂Fᵢ/∂xᵢ + 1). Even if ∂Fᵢ/∂xᵢ = 0 (the layer's contribution vanishes), the factor is still 1 (not 0). The gradient can never be smaller than 1^L = 1 along the skip path. In practice, the gradient is a sum of exponentially many paths through the network — some go through layers (may vanish) and some skip layers (don't vanish). As long as at least one path provides gradient flow, learning continues. This is why 152-layer ResNets train successfully while 56-layer plain networks fail.",hint:"What's the product of many factors that are (something + 1) vs factors that are (something < 1)?",check:l=>{const r=l.toLowerCase();return(r.includes("+1")||r.includes("plus 1")||r.includes("identity")||r.includes("skip"))&&(r.includes("never")||r.includes("always")||r.includes("path")||r.includes("highway")||r.includes("can't vanish"))}}]},{id:"1d",icon:"1D",color:"#B91C1C",title:"1D Convolutions & Beyond Images",subtitle:"Convolutions for sequences, text, audio — and how they relate to Transformers",resources:[{type:"read",title:"d2l.ai — 1D Convolutions (text)",url:"https://d2l.ai/chapter_natural-language-processing-applications/sentiment-analysis-cnn.html"},{type:"read",title:"Colah — Understanding Convolutions",url:"https://colah.github.io/posts/2014-07-Understanding-Convolutions/"},{type:"video",title:"Karpathy — makemore (conv-like patterns in LMs)",url:"https://www.youtube.com/watch?v=PaCmpygFfXo"}],content:[{heading:"1D Convolutions for Sequences",body:`**1D convolution** slides a kernel along ONE dimension (time/position), not two.

**Input:** (sequence_length, channels) — e.g., (100, 768) for a text sequence
**Kernel:** (kernel_size, in_channels, out_channels) — e.g., (3, 768, 256)
**Output:** (sequence_length', out_channels) — e.g., (100, 256) with padding

**How it works for text:**
A kernel of size 3 slides over the sequence, looking at 3 consecutive tokens at a time. It computes a weighted sum of the 3 token embeddings → one output value per position.

**What 1D conv learns for text:**
• Kernel size 2: bigram patterns ("not good", "very bad")
• Kernel size 3: trigram patterns ("on the other")
• Kernel size 5: longer phrases ("in spite of the")

**Multiple kernel sizes** (like Inception for text): use kernels of size 2, 3, and 5 in parallel, concatenate results → captures patterns at multiple scales.

**In PyTorch:**
nn.Conv1d(in_channels=768, out_channels=256, kernel_size=3, padding=1)

**Advantage over RNNs:** fully parallelizable (no sequential dependency). All positions computed simultaneously.
**Disadvantage vs Transformers:** limited receptive field. A 3-token kernel can't see long-range dependencies directly (must stack many layers).`},{heading:"Depthwise Separable Convolutions",body:`**Standard conv** with K×K kernel, C_in → C_out channels:
Parameters = K × K × C_in × C_out (e.g., 3×3×256×512 = 1.18M)

**Depthwise separable conv** (MobileNet, Xception) splits this into two steps:

**Step 1: Depthwise conv** — one K×K kernel per input channel (no cross-channel mixing)
Parameters = K × K × C_in (e.g., 3×3×256 = 2,304)

**Step 2: Pointwise conv** — 1×1 kernel that mixes channels
Parameters = C_in × C_out (e.g., 256×512 = 131,072)

**Total:** 133,376 vs 1,179,648 = **~9× fewer parameters** (and ~9× fewer operations)

**The insight:** standard convolution does spatial filtering AND channel mixing simultaneously. Separable convolution decouples these: first filter spatially (depthwise), then mix channels (pointwise).

**Used in:** MobileNet, EfficientNet, Xception — architectures designed for mobile/edge deployment.

**Connection to Transformers:** the FFN block in Transformers is conceptually similar to a pointwise (1×1) convolution — it processes each token independently, mixing the channel (feature) dimensions without any spatial interaction.`},{heading:"Convolutions vs Attention — The Fundamental Tradeoff",body:`**Convolution:**
• **Local** receptive field — each output depends on K neighboring positions
• **Translation equivariant** by design — same pattern detected everywhere
• **O(n)** computation — linear in sequence length
• **Needs many layers** to capture long-range dependencies (receptive field grows slowly)
• **Parameter efficient** — one kernel shared across all positions

**Self-Attention:**
• **Global** receptive field — each output depends on ALL positions
• **Not inherently equivariant** — needs positional encoding
• **O(n²)** computation — quadratic in sequence length
• **Captures long-range dependencies in one layer**
• **More parameters** — separate Q, K, V projections

**The historical arc:**
1. CNNs for text (2014-2016): fast but limited receptive field
2. RNNs/LSTMs (2015-2017): sequential, good for long range
3. **Transformers (2017+): attention replaces both** — global receptive field + parallelizable

**But convolutions aren't dead:**
• **Vision:** ConvNeXt (2022) showed CNNs can match Vision Transformers when modernized
• **Efficient models:** Mamba, RWKV use conv-like linear recurrences as alternatives to O(n²) attention
• **Hybrid models:** many architectures combine convolution (local patterns) with attention (global patterns)

**The key insight:** convolution and attention are not competitors — they're complementary. Convolution excels at local pattern detection; attention excels at global relationship modeling.`}],questions:[{q:"A 1D conv with kernel size 3 is applied to a sequence of 100 token embeddings (each 768-dim). With 256 filters, padding=1, stride=1, what's the output shape and parameter count?",a:"Output shape: (100, 256). Length stays 100 (padding=1 preserves size with kernel=3, stride=1). Depth is 256 (one per filter). Parameters: 3 × 768 × 256 + 256 = 589,824 + 256 = 590,080. Each filter has kernel_size × in_channels = 3 × 768 = 2,304 weights, plus 1 bias = 2,305. For 256 filters: 2,305 × 256 = 590,080.",hint:"1D conv: params = kernel_size × in_channels × out_channels + out_channels.",check:l=>l.includes("100")&&l.includes("256")&&(l.includes("590")||l.includes("589"))},{q:"Why did Transformers replace CNNs for NLP despite CNNs being computationally cheaper?",a:"The fundamental limitation: CNNs have LOCAL receptive fields. A kernel of size 3 only sees 3 tokens at a time. To capture relationships between tokens 50 positions apart, you'd need ~25 layers of stacked 3×3 convolutions. Transformers solve this with self-attention, which gives EVERY token direct access to EVERY other token in a single layer — global receptive field. For language, long-range dependencies are critical: 'The cat that the dog that I bought chased ran away' requires connecting 'cat' to 'ran' across many intervening tokens. Attention handles this natively; CNNs struggle. The O(n²) cost of attention is worth paying for the quality improvement. Though for very long sequences, efficient alternatives (Mamba, linear attention) are now bridging this gap.",hint:"Think about how many CNN layers you need to connect two tokens that are far apart.",check:l=>{const r=l.toLowerCase();return(r.includes("local")||r.includes("receptive field")||r.includes("limited"))&&(r.includes("global")||r.includes("long-range")||r.includes("all token")||r.includes("every token"))}}]}];function Nh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:M=>U(M.target.value),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:()=>E("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:()=>{var M;E("idle"),U(""),(M=A.current)==null||M.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Mh({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=Gr.reduce((p,S)=>p+S.content.length,0),P=Math.round(b.size/A*100),M=p=>p.split(`
`).map((S,G)=>{if(S==="")return a.jsx("div",{style:{height:8}},G);const d=S.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:d.map((g,N)=>N%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:g},N):a.jsx("span",{children:g},N))},G)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#7C3AED!important}"}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"CNNs, RNNs & SEQUENCE MODELS"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Convolutions — The Complete Story"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From the slide-multiply-sum operation to ResNet skip connections — the mathematical operation that made computer vision and the architecture ideas that made Transformers possible.",a.jsx("br",{}),Gr.length," sections · ",A," concepts · ",Gr.reduce((p,S)=>{var G;return p+(((G=S.questions)==null?void 0:G.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pf",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #0E7490, #B91C1C)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Gr.map(p=>{var N;const S=r===p.id,G=p.content.map((v,z)=>`${p.id}-${z}`),d=G.filter(v=>b.has(v)).length,g=D[p.id]||"learn";return a.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(S?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[d,"/",p.content.length]}),a.jsx("span",{className:"ar",style:{transform:S?"rotate(90deg)":"rotate(0)"},children:"›"})]}),S&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tb ${g==="learn"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tb ${g==="practice"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"practice"})),children:["✏️ Practice (",((N=p.questions)==null?void 0:N.length)||0,")"]}),a.jsxs("button",{className:`tb ${g==="deeper"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),g==="learn"&&a.jsx("div",{children:p.content.map((v,z)=>{const C=`${p.id}-${z}`,L=K===C,T=b.has(C);return a.jsxs("div",{style:{borderTop:z>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"br",onClick:()=>q(L?null:C),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`ck ${T?"d":""}`,onClick:F=>{F.stopPropagation();const V=new Set(b);V.has(C)?V.delete(C):V.add(C),U(V)},children:T&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:T?"#aaa":"#2a2a2a",textDecoration:T?"line-through":"none",flex:1},children:v.heading}),a.jsx("span",{className:"ar",style:{transform:L?"rotate(90deg)":"rotate(0)"},children:"›"})]}),L&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:M(v.body)})]},z)})}),g==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((v,z)=>a.jsx(Nh,{...v,color:p.color},`${p.id}-q-${z}`))]}),g==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((v,z)=>{const C=Fh[v.type];return a.jsxs("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:C.bg+"55"},children:[a.jsxs("span",{className:"tg",style:{background:C.bg,color:C.color},children:[C.emoji," ",C.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:v.title})]},z)})})]})]})]},p.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"LeNet (1998) → AlexNet (2012) → VGG (2014) → ResNet (2015) → Transformers (2017) — from local patterns to global attention"})]})}const Ph={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Or=[{id:"rnn",icon:"⟲",color:"#7C3AED",title:"Vanilla RNN — The Feedback Loop",subtitle:"The first neural network with memory — processing sequences by feeding output back as input",resources:[{type:"infographic",title:"Colah's Blog — Understanding LSTMs (starts with RNNs)",url:"https://colah.github.io/posts/2015-08-Understanding-LSTMs/"},{type:"read",title:"Karpathy — The Unreasonable Effectiveness of RNNs",url:"https://karpathy.github.io/2015/05/21/rnn-effectiveness/"},{type:"read",title:"d2l.ai — Recurrent Neural Networks",url:"https://d2l.ai/chapter_recurrent-neural-networks/index.html"},{type:"read",title:"arXiv — RNN and LSTM Tutorial and Survey",url:"https://arxiv.org/abs/2304.11461"},{type:"video",title:"3Blue1Brown — Neural Networks series",url:"https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"},{type:"video",title:"StatQuest — RNNs Clearly Explained",url:"https://www.youtube.com/watch?v=AsNTP8Kwu80"}],content:[{heading:"The Problem — Why Sequences Need Memory",body:`**Feedforward networks have no memory.** Each input is processed independently — the network has no idea what came before or after.

But sequences are everywhere:
• **Text:** "The cat sat on the ___" (need to remember "cat" to predict "mat")
• **Speech:** sounds depend on what came before
• **Time series:** stock prices, weather, sensor data
• **Music:** notes depend on the melody so far

**The key challenge:** a word's meaning depends on its **context** — the words that came before it. "Bank" means different things in "river bank" vs "bank account." A model needs to carry information forward through the sequence.

**Solution:** add a **feedback loop** — pass the output of each step back as input to the next step. This creates a **hidden state** that accumulates information as the sequence is processed, acting as the network's memory.`},{heading:"The Vanilla RNN Equations",body:`**At each time step t:**

**hₜ = tanh(W_hh × hₜ₋₁ + W_xh × xₜ + b_h)**
**yₜ = W_hy × hₜ + b_y**

**Components:**
• **xₜ** = input at time t (e.g., word embedding at position t)
• **hₜ** = hidden state at time t — the "memory" vector
• **yₜ** = output at time t (e.g., prediction for next word)
• **W_xh** = input-to-hidden weight matrix (same at every time step!)
• **W_hh** = hidden-to-hidden weight matrix (the "recurrent" connection)
• **W_hy** = hidden-to-output weight matrix
• **tanh** = activation function (bounds hidden state to [-1, 1])

**Key insight:** the SAME weights W_xh, W_hh, W_hy are shared across ALL time steps. The RNN is the same small network applied repeatedly — "unrolled" across time.

**Hidden state hₜ is a compressed summary of everything seen so far:** x₁, x₂, ..., xₜ. It's the network's "working memory."

**Parameter count:** for hidden_size d and input_size n:
W_xh: n×d, W_hh: d×d, b_h: d, W_hy: d×output, b_y: output
**Much fewer parameters than one weight per sequence position** — RNNs handle variable-length sequences with fixed parameters.`},{heading:"Unrolling — Seeing the RNN as a Deep Network",body:`"Unrolling" an RNN across T time steps reveals it as a **very deep feedforward network** with shared weights:

x₁ → [RNN cell] → h₁ → [RNN cell] → h₂ → ... → hₜ → yₜ
      ↑ W_hh        ↑ W_hh

Each "layer" is the same RNN cell with the same weights. A sequence of length 100 is like a 100-layer network with weight sharing.

**This is why vanishing/exploding gradients are so severe for RNNs** — the gradient must flow backward through T "layers" during training. With T = 100-1000, gradient problems are much worse than in a 10-layer CNN.

**Types of RNN architectures by input/output:**
• **One-to-many:** single input → sequence output (e.g., image → caption)
• **Many-to-one:** sequence input → single output (e.g., text → sentiment)
• **Many-to-many (synced):** sequence → sequence of same length (e.g., POS tagging)
• **Many-to-many (encoder-decoder):** sequence → different-length sequence (e.g., translation)

**The hidden state hₜ carries ALL the information** about the past sequence. For very long sequences, this is an impossible task for a fixed-size vector — and it's exactly why vanilla RNNs fail on long-range dependencies.`}],questions:[{q:"An RNN has hidden_size=256 and input_size=100. How many parameters are in the recurrent cell (excluding output layer)?",a:"W_xh: 100×256 = 25,600. W_hh: 256×256 = 65,536. b_h: 256. Total = 25,600 + 65,536 + 256 = 91,392 parameters. Importantly, these same 91,392 parameters are used at EVERY time step — whether the sequence has 10 or 10,000 tokens. This weight sharing is what makes RNNs parameter-efficient for sequences.",hint:"W_xh = input×hidden, W_hh = hidden×hidden, b_h = hidden.",check:l=>l.replace(/[,\s]/g,"").includes("91392")},{q:"Why is the hidden state hₜ often called a 'bottleneck' for long sequences?",a:"The hidden state hₜ is a fixed-size vector (e.g., 256 dimensions) that must encode ALL information from the entire sequence x₁, ..., xₜ. For a sequence of 1000 tokens, 256 numbers must summarize everything about those 1000 tokens. As the sequence gets longer, the fixed-size vector must 'forget' earlier information to make room for new information — it's like trying to summarize an entire book in a single tweet. This information bottleneck is why vanilla RNNs perform poorly on long sequences and why attention mechanisms (which can directly access any past position) were such a breakthrough.",hint:"How much information can a 256-dimensional vector hold? What happens as the sequence grows?",check:l=>{const r=l.toLowerCase();return(r.includes("fixed")||r.includes("limited")||r.includes("compress"))&&(r.includes("forget")||r.includes("information")||r.includes("capacity")||r.includes("long"))}}]},{id:"bptt",icon:"◀t",color:"#DC2626",title:"Backpropagation Through Time (BPTT)",subtitle:"Training RNNs — the chain rule applied across time steps and the vanishing gradient disaster",resources:[{type:"read",title:"Colah — Understanding LSTMs (gradient flow section)",url:"https://colah.github.io/posts/2015-08-Understanding-LSTMs/"},{type:"read",title:"d2l.ai — Backpropagation Through Time",url:"https://d2l.ai/chapter_recurrent-neural-networks/bptt.html"},{type:"video",title:"StatQuest — LSTM Clearly Explained (vanishing gradients)",url:"https://www.youtube.com/watch?v=YCzL96nL7j0"}],content:[{heading:"BPTT — Unrolling Then Backpropping",body:`**Training an RNN is backpropagation on the unrolled network.**

**Forward pass:** compute h₁, h₂, ..., hₜ and losses L₁, L₂, ..., Lₜ
**Total loss:** L = Σₜ Lₜ

**Backward pass (BPTT):** compute ∂L/∂W by summing gradients across all time steps:

**∂L/∂W_hh = Σₜ ∂Lₜ/∂W_hh**

For each Lₜ, the gradient flows backward through time:
∂Lₜ/∂W_hh = ∂Lₜ/∂hₜ × ∂hₜ/∂hₜ₋₁ × ∂hₜ₋₁/∂hₜ₋₂ × ... × ∂h₁/∂W_hh

**The key term:** ∂hₜ/∂hₖ = ∏ᵢ₌ₖ₊₁ᵗ ∂hᵢ/∂hᵢ₋₁

Each factor ∂hᵢ/∂hᵢ₋₁ = diag(tanh'(zᵢ)) × W_hh

This is a **product of (t-k) matrices**. For long sequences, this product either vanishes or explodes.`},{heading:"The Vanishing Gradient Problem — Mathematically",body:`**Each factor in the product:**
∂hᵢ/∂hᵢ₋₁ = diag(tanh'(zᵢ)) × W_hh

**tanh'(z) ∈ (0, 1]** — max value is 1, so it can only shrink the gradient.

**If the largest eigenvalue of W_hh is < 1:**
The product ∏ diag(tanh') × W_hh shrinks exponentially with (t-k).
After 100 time steps: gradient ≈ 0 → **vanishing gradients**
Early tokens have zero influence on the loss → no long-range learning.

**If the largest eigenvalue of W_hh is > 1:**
The product grows exponentially → **exploding gradients**
Gradients become NaN → training diverges.

**The sweet spot (eigenvalue ≈ 1) is unstable** — nearly impossible to maintain during training.

**Concrete example with tanh:**
max(tanh'(z)) = 1 at z=0. Even in the best case, the gradient magnitude is bounded by ||W_hh||^(t-k). For a dependency spanning 100 time steps with ||W_hh|| = 0.95:
gradient ≈ 0.95¹⁰⁰ ≈ 0.006 → essentially zero.

**This is why vanilla RNNs can't learn long-range dependencies.** The gradient signal from a word 100 positions back is ~0.6% of its original magnitude — the network simply can't "feel" the influence of distant tokens.`},{heading:"Truncated BPTT & Gradient Clipping",body:`**Truncated BPTT:** instead of backpropagating through the entire sequence, only backpropagate through the last K time steps.

**Forward:** process the full sequence normally (hidden state carries information)
**Backward:** compute gradients for only the last K steps

**Tradeoff:** K too small → can't learn long-range dependencies. K too large → expensive and vanishing gradients. Typical K = 30-100.

**Gradient Clipping:** if ||gradient|| > threshold, scale it down:
g ← g × threshold / ||g||

Prevents exploding gradients but doesn't help vanishing gradients. Think of it as a safety valve — caps the maximum gradient magnitude.

**Max-norm clipping (standard):**
torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)

**Value clipping:** clip each gradient element independently to [-threshold, threshold]
torch.nn.utils.clip_grad_value_(model.parameters(), clip_value=0.5)

**These are band-aids, not solutions.** The real solutions are architectural:
• **LSTM:** gating mechanism with additive cell state
• **GRU:** simplified gating
• **Transformers:** direct connections between all positions (no sequential chaining)`}],questions:[{q:"In BPTT for a sequence of length T=200, how many matrix multiplications are involved in computing ∂L₂₀₀/∂h₁?",a:"199 matrix multiplications. The gradient must flow backward from h₂₀₀ to h₁, passing through each intermediate hidden state: ∂L₂₀₀/∂h₁ = ∂L/∂h₂₀₀ × (∂h₂₀₀/∂h₁₉₉) × (∂h₁₉₉/∂h₁₉₈) × ... × (∂h₂/∂h₁). That's 199 factors of diag(tanh'(z)) × W_hh. Each factor can shrink the gradient (tanh' ≤ 1), so after 199 multiplications, the gradient is astronomically small. This is the mathematical root of why vanilla RNNs can't learn dependencies spanning 200 tokens.",hint:"How many steps from h₂₀₀ back to h₁? Each step is one matrix multiplication.",check:l=>l.includes("199")},{q:"Why does gradient clipping solve exploding gradients but NOT vanishing gradients?",a:"Gradient clipping rescales gradients when their norm exceeds a threshold: if ||g|| > max_norm, scale g down proportionally. This prevents exploding gradients (infinite values, NaN). But vanishing gradients are already too SMALL — clipping doesn't make small gradients larger, it only makes large gradients smaller. The problem with vanishing gradients is that the gradient signal is essentially zero, and you can't clip your way to a nonzero signal. Solving vanishing gradients requires architectural changes that maintain gradient magnitude: LSTM's additive cell state update (gradients flow through addition, not multiplication), or Transformers' direct attention connections (gradient path is O(1) length, not O(T)).",hint:"Clipping reduces large values. What does it do to values that are already near zero?",check:l=>{const r=l.toLowerCase();return(r.includes("small")||r.includes("too small")||r.includes("zero")||r.includes("near zero"))&&(r.includes("doesn't")||r.includes("can't")||r.includes("cannot")||r.includes("not")||r.includes("only"))}}]},{id:"lstm",icon:"🔒",color:"#0369A1",title:"LSTM — Long Short-Term Memory",subtitle:"The gating mechanism that solved the vanishing gradient problem (Hochreiter & Schmidhuber, 1997)",resources:[{type:"infographic",title:"Colah's Blog — Understanding LSTMs (gold standard)",url:"https://colah.github.io/posts/2015-08-Understanding-LSTMs/"},{type:"read",title:"d2l.ai — LSTM",url:"https://d2l.ai/chapter_recurrent-modern/lstm.html"},{type:"read",title:"Hochreiter & Schmidhuber 1997 — LSTM (original paper)",url:"https://www.bioinf.jku.at/publications/older/2604.pdf"},{type:"video",title:"StatQuest — LSTM Clearly Explained",url:"https://www.youtube.com/watch?v=YCzL96nL7j0"},{type:"video",title:"Karpathy — makemore (character-level LSTM)",url:"https://www.youtube.com/watch?v=PaCmpygFfXo"}],content:[{heading:"The Key Innovation — The Cell State Highway",body:`**LSTM's breakthrough:** separate the **long-term memory** (cell state) from the **working memory** (hidden state), and control information flow with **gates**.

**The cell state Cₜ** is like a **conveyor belt** running through the entire sequence. Information can flow along it largely unchanged — with only minor linear interactions (additions and element-wise multiplications).

**Why this solves vanishing gradients:**

Vanilla RNN: hₜ = **tanh**(W × hₜ₋₁ + ...) → gradient passes through **tanh** at every step → shrinks

LSTM cell state: Cₜ = fₜ ⊙ Cₜ₋₁ + iₜ ⊙ C̃ₜ → gradient passes through **addition** → no shrinkage!

**The gradient through the cell state:**
∂Cₜ/∂Cₜ₋₁ = fₜ (just the forget gate value, 0-1, often close to 1)

If the forget gate fₜ ≈ 1 (keep everything), the gradient flows unchanged across unlimited time steps. **No vanishing!** The cell state is a "gradient highway" — the same idea that ResNet's skip connections use.

**Three gates** control what enters, leaves, and stays in the cell state.`},{heading:"The Four LSTM Equations — Gate by Gate",body:`**At each time step t, with inputs xₜ and previous hₜ₋₁, Cₜ₋₁:**

**1. Forget gate — what to erase from memory:**
**fₜ = σ(W_f × [hₜ₋₁, xₜ] + b_f)**
Outputs 0-1 per cell dimension. 0 = forget completely, 1 = remember fully.
Example: when encountering a new subject in a sentence, forget the old subject.

**2. Input gate — what new information to store:**
**iₜ = σ(W_i × [hₜ₋₁, xₜ] + b_i)**
**C̃ₜ = tanh(W_C × [hₜ₋₁, xₜ] + b_C)**
iₜ decides HOW MUCH to add, C̃ₜ creates the CANDIDATE new information.

**3. Cell state update — combine old and new:**
**Cₜ = fₜ ⊙ Cₜ₋₁ + iₜ ⊙ C̃ₜ**
Selectively forget (fₜ ⊙ Cₜ₋₁) then selectively add (iₜ ⊙ C̃ₜ).

**4. Output gate — what to output from memory:**
**oₜ = σ(W_o × [hₜ₋₁, xₜ] + b_o)**
**hₜ = oₜ ⊙ tanh(Cₜ)**
The cell state is filtered through tanh (squash to [-1,1]) then gated by oₜ to produce the visible hidden state.

**All gates use sigmoid σ** → output ∈ (0,1) → acts as a soft switch.
**Candidate values use tanh** → output ∈ (-1,1) → full-range values.`},{heading:"LSTM Parameter Count & Intuition",body:`**For hidden_size d and input_size n:**

Each gate has its own W and b. Input to each gate: [hₜ₋₁, xₜ] has size (d + n).

**Parameters per gate:** (d + n) × d + d = d² + nd + d
**Four "gates" (f, i, C̃, o):** 4 × (d² + nd + d) = **4d² + 4nd + 4d**

**Example:** d = 256, n = 100:
4 × (256² + 256×100 + 256) = 4 × (65,536 + 25,600 + 256) = 4 × 91,392 = **365,568**

That's **4× the parameters of a vanilla RNN** (same d and n). You pay for the gates with parameters, but gain the ability to learn long-range dependencies.

**Intuitive understanding of each gate:**

**Forget gate:** "Should I remember the previous subject/topic/entity?" When processing "The dog that the cat chased **ran** away," the forget gate at "ran" should remember "dog" (subject) and forget "cat" (the chaser).

**Input gate:** "Is this new word important enough to store in long-term memory?" Function words ("the", "is") → low input gate. Content words ("explosion", "Paris") → high input gate.

**Output gate:** "Is my long-term memory relevant to the current output?" If predicting the next word needs the subject (stored in cell state), output gate opens. If predicting punctuation, output gate might close.`},{heading:"Why LSTM Works — The Gradient Flow",body:`**The gradient through the cell state:**

∂Cₜ/∂Cₜ₋₁ = fₜ + terms involving gates

**If fₜ ≈ 1 (don't forget):** gradient ≈ 1. The gradient flows perfectly across time steps with no shrinkage.

**Across T time steps:**
∂Cₜ/∂C₁ = ∏ᵢ₌₂ᵗ fᵢ

If all forget gates ≈ 1: product ≈ 1 → **no vanishing gradient**, even for T = 1000!

**Compare with vanilla RNN:**
∂hₜ/∂h₁ = ∏ diag(tanh'(zᵢ)) × W_hh → exponential decay

**The key difference:** LSTM uses **addition** (Cₜ = f ⊙ Cₜ₋₁ **+** i ⊙ C̃) while vanilla RNN uses **nonlinear composition** (hₜ = tanh(W × hₜ₋₁ + ...)). Addition preserves gradients; nonlinear composition destroys them.

**This is the SAME principle as ResNet:** output = x + F(x). The skip connection (addition) creates a gradient highway. LSTM's cell state IS a skip connection unrolled through time. ResNet (2015) was inspired by LSTM (1997) — the idea of additive shortcut paths for gradient flow.`}],questions:[{q:"Write out the four LSTM equations and explain what each gate 'decides.'",a:"1) Forget gate: fₜ = σ(W_f·[hₜ₋₁, xₜ] + b_f) — decides what fraction of each cell state dimension to KEEP from the previous step. Values near 0 = forget, near 1 = remember. 2) Input gate: iₜ = σ(W_i·[hₜ₋₁, xₜ] + b_i) — decides how much of the new candidate to ADD to the cell state. 3) Candidate: C̃ₜ = tanh(W_C·[hₜ₋₁, xₜ] + b_C) — creates new candidate information to potentially store. 4) Cell update: Cₜ = fₜ ⊙ Cₜ₋₁ + iₜ ⊙ C̃ₜ — selectively forget old, selectively add new. 5) Output gate: oₜ = σ(W_o·[hₜ₋₁, xₜ] + b_o) — decides what part of the cell state to expose as the hidden state output. 6) Hidden state: hₜ = oₜ ⊙ tanh(Cₜ).",hint:"Four weight matrices, three sigmoid gates, one tanh candidate, one additive cell update.",check:l=>{const r=l.toLowerCase();return r.includes("forget")&&r.includes("input")&&r.includes("output")&&(r.includes("cell")||r.includes("candidate"))}},{q:"Why does LSTM have 4× the parameters of a vanilla RNN with the same hidden size?",a:"A vanilla RNN has one set of weights: W_hh (hidden-to-hidden) + W_xh (input-to-hidden) + biases. An LSTM has FOUR such sets — one for each gate/computation: forget gate (W_f), input gate (W_i), candidate cell state (W_C), and output gate (W_o). Each takes the same input [hₜ₋₁, xₜ] and produces a d-dimensional output. So the total parameter count is 4× a vanilla RNN. The extra parameters are the 'price' for the gating mechanism — you're essentially running four parallel vanilla RNNs that collaborate to control information flow. In practice, this 4× cost is well worth the dramatically improved ability to learn long-range dependencies.",hint:"How many separate weight matrices does LSTM need? Each gate needs its own W and b.",check:l=>{const r=l.toLowerCase();return(r.includes("four")||r.includes("4"))&&(r.includes("gate")||r.includes("forget")||r.includes("input")||r.includes("output"))}}]},{id:"gru",icon:"⟳₂",color:"#0E7490",title:"GRU — Gated Recurrent Unit",subtitle:"LSTM simplified — fewer gates, fewer parameters, often equal performance (Cho et al., 2014)",resources:[{type:"infographic",title:"Colah's Blog — GRU section in Understanding LSTMs",url:"https://colah.github.io/posts/2015-08-Understanding-LSTMs/"},{type:"read",title:"d2l.ai — GRU",url:"https://d2l.ai/chapter_recurrent-modern/gru.html"},{type:"read",title:"Cho et al. 2014 — Learning Phrase Representations (GRU paper)",url:"https://arxiv.org/abs/1406.1078"},{type:"video",title:"StatQuest — GRU Clearly Explained",url:"https://www.youtube.com/watch?v=8HyCNIVRbSU"}],content:[{heading:"GRU — Two Gates Instead of Three",body:`**Origin:** Cho et al. (2014). Key insight: LSTM's separate cell state and hidden state might be redundant.

**GRU simplifications:**
1. **Merge cell state and hidden state** into a single hₜ
2. **Merge forget and input gates** into a single "update gate" zₜ
3. **Remove output gate** entirely

**The two GRU equations:**

**Reset gate:** rₜ = σ(W_r × [hₜ₋₁, xₜ] + b_r)
"How much of the previous hidden state to use when computing the candidate."

**Update gate:** zₜ = σ(W_z × [hₜ₋₁, xₜ] + b_z)
"How much of the old state to keep vs how much of the new candidate to use." (Combines LSTM's forget + input gates into one)

**Candidate hidden state:** h̃ₜ = tanh(W × [rₜ ⊙ hₜ₋₁, xₜ] + b)
The reset gate rₜ controls how much of the previous state influences the candidate. If rₜ ≈ 0, the candidate is computed as if there's no history.

**Final hidden state:** hₜ = (1 - zₜ) ⊙ hₜ₋₁ + zₜ ⊙ h̃ₜ
The update gate zₜ interpolates between keeping the old state (zₜ = 0) and replacing with the candidate (zₜ = 1). Note: **(1 - zₜ)** means "forget" and **zₜ** means "input" — they're tied to sum to 1.`},{heading:"GRU vs LSTM — The Comparison",body:`**Parameters:** GRU has **3 weight matrices** (reset, update, candidate) vs LSTM's **4** (forget, input, candidate, output). GRU has ~75% of LSTM's parameters.

**State:** GRU has **1 state** (hₜ) vs LSTM's **2 states** (Cₜ and hₜ).

**Gates:** GRU has **2 gates** (reset, update) vs LSTM's **3 gates** (forget, input, output).

**Performance comparison (Chung et al., 2014; Greff et al., 2016):**
• On most tasks: **roughly equivalent performance**
• GRU trains ~15-20% faster (fewer parameters, simpler computation)
• LSTM has a slight edge on tasks requiring very precise memory control
• Neither is consistently better across all tasks

**When to choose which:**
• **GRU:** smaller datasets, faster training needed, sequence modeling baseline
• **LSTM:** very long sequences, tasks where fine-grained memory control matters
• **Neither:** if you can afford it, use a **Transformer** — better performance on most NLP tasks

**The deeper lesson:** the specific gating mechanism matters less than the PRINCIPLE of gating. Both LSTM and GRU solve vanishing gradients through controlled, additive state updates. The exact architecture is less important than the design pattern.`},{heading:"The Elegant Symmetry of the Update Gate",body:`**GRU's update equation:** hₜ = **(1 - zₜ)** ⊙ hₜ₋₁ + **zₜ** ⊙ h̃ₜ

This is a **linear interpolation** between old and new:
• zₜ = 0: hₜ = hₜ₋₁ → **keep old state entirely** (perfect memory)
• zₜ = 1: hₜ = h̃ₜ → **replace with new** (complete update)
• zₜ = 0.5: hₜ = average of old and new

**Compare with LSTM's cell state:** Cₜ = fₜ ⊙ Cₜ₋₁ + iₜ ⊙ C̃ₜ
Here fₜ and iₜ are **independent** — you can forget a lot AND add a lot, or forget nothing AND add nothing. GRU constrains: forget + input = 1.

**This constraint is both GRU's strength and weakness:**
• **Strength:** simpler, fewer parameters, harder to "break" during training
• **Weakness:** can't independently control forgetting and adding. Sometimes you want to forget old info without replacing it (LSTM can do this: f=0, i=0). GRU can't express this.

**Gradient flow:** similar to LSTM. When zₜ ≈ 0 (keep old state), ∂hₜ/∂hₜ₋₁ ≈ 1. Gradients flow through unchanged. The linear interpolation IS the gradient highway.`}],questions:[{q:"In GRU, if the update gate zₜ = [0.1, 0.9, 0.5] and old state hₜ₋₁ = [1.0, 2.0, 3.0] and candidate h̃ₜ = [5.0, 6.0, 7.0], what is hₜ?",a:"hₜ = (1 - zₜ) ⊙ hₜ₋₁ + zₜ ⊙ h̃ₜ. Element by element: dim 1: (1-0.1)×1.0 + 0.1×5.0 = 0.9 + 0.5 = 1.4. dim 2: (1-0.9)×2.0 + 0.9×6.0 = 0.2 + 5.4 = 5.6. dim 3: (1-0.5)×3.0 + 0.5×7.0 = 1.5 + 3.5 = 5.0. hₜ = [1.4, 5.6, 5.0]. Interpretation: dim 1 mostly kept old (z=0.1), dim 2 mostly updated to new (z=0.9), dim 3 is a 50/50 mix.",hint:"hₜ = (1-z)×old + z×new. Compute element-by-element.",check:l=>{const r=l.replace(/\s/g,"");return r.includes("1.4")&&r.includes("5.6")&&r.includes("5.0")}},{q:"What can LSTM express that GRU cannot? Give a concrete scenario.",a:"LSTM can independently control forgetting (fₜ) and inputting (iₜ). GRU ties them: forget = (1 - update), input = update. So GRU can't 'forget without replacing.' Scenario: processing the sentence 'John went to the store. Mary went to the park.' At the period after 'store,' the model should forget John's location information but NOT yet store Mary's (she hasn't appeared). LSTM can set fₜ ≈ 0 (forget John's location) AND iₜ ≈ 0 (don't add anything yet). GRU can't do this: if update is low (keep old), it keeps John's info; if update is high (use new), it replaces but can't 'wait.' In practice, this rarely matters enough to change overall performance.",hint:"What happens in GRU when you want to forget old info without adding new info?",check:l=>{const r=l.toLowerCase();return r.includes("forget")&&r.includes("input")&&(r.includes("independent")||r.includes("tied")||r.includes("can't")||r.includes("cannot"))}}]},{id:"transform",icon:"→🔮",color:"#15803D",title:"From RNNs to Transformers — Why Attention Won",subtitle:"The three fatal flaws of RNNs that Transformers solved — and why RNN ideas survive in LLMs",resources:[{type:"read",title:"Vaswani et al. 2017 — Attention Is All You Need",url:"https://arxiv.org/abs/1706.03762"},{type:"read",title:"Jay Alammar — The Illustrated Transformer",url:"https://jalammar.github.io/illustrated-transformer/"},{type:"read",title:"Lilian Weng — Attention? Attention!",url:"https://lilianweng.github.io/posts/2018-06-24-attention/"},{type:"video",title:"3Blue1Brown — Attention in Transformers (Ch 6)",url:"https://www.3blue1brown.com/lessons/attention"},{type:"video",title:"Karpathy — Let's build GPT",url:"https://www.youtube.com/watch?v=kCc8FmEb1nY"}],content:[{heading:"RNN's Three Fatal Flaws",body:`**Flaw 1: Sequential computation → can't parallelize**
RNNs must process tokens one at a time: h₁ → h₂ → h₃ → ...
Can't compute h₃ without first computing h₁ and h₂.
On modern GPUs designed for massive parallelism, this is catastrophically slow.
A sequence of 2048 tokens = 2048 sequential operations.

**Flaw 2: Long-range dependencies → information bottleneck**
All information from the past must squeeze through the fixed-size hidden state hₜ.
Information from 500 tokens ago has been through 500 tanh compressions.
Even with LSTM/GRU gates, very long-range dependencies are lossy.

**Flaw 3: No direct access to past tokens**
To use information from token 5 at token 100, the info must survive 95 steps of processing.
There's no way to "look back" at token 5 directly.

**Transformers solve ALL three:**
1. **Parallel computation:** all positions computed simultaneously (no sequential dependency)
2. **No bottleneck:** attention can directly access ANY past position's full representation
3. **Direct access:** Query-Key dot products let any token attend to any other in one step

**The price:** O(n²) computation (every token attends to every other) vs RNN's O(n). But the parallelism makes Transformers much faster in practice on modern hardware.`},{heading:"The Attention Bridge — Bahdanau et al. (2015)",body:`**The key stepping stone between RNNs and Transformers:**

Bahdanau et al. (2015) added **attention** to the encoder-decoder RNN for machine translation. Instead of compressing the entire source sentence into one hidden vector, the decoder could "attend" to different source positions at each decoding step.

**How it worked:**
• Encoder: biLSTM processes source sentence → hidden states h₁, ..., hₙ
• At each decoding step t, compute attention weights: αₜᵢ ∝ score(sₜ, hᵢ)
• Context vector: cₜ = Σᵢ αₜᵢ hᵢ (weighted sum of encoder states)
• Decoder uses cₜ to generate the next word

**The breakthrough insight:** the decoder doesn't need to remember everything — it can dynamically "look at" the relevant parts of the source.

**From attention on top of RNNs to attention REPLACING RNNs:**
Vaswani et al. (2017) — "Attention Is All You Need" — removed the RNN entirely. Self-attention lets each position attend to all other positions in a single operation. The Transformer was born.

**What attention preserves from RNNs:**
The concept of processing sequences and maintaining context. What it discards: the sequential, one-at-a-time processing bottleneck.`},{heading:"RNN Ideas That Survive in Modern LLMs",body:`**RNNs are "dead" for most NLP tasks, but their ideas live on:**

**1. The hidden state concept → Transformer hidden representations**
Each layer's output in a Transformer serves the same role as an RNN hidden state — a context-enriched representation. The difference: Transformer representations are computed in parallel, not sequentially.

**2. Gating → SwiGLU activation in Transformer FFN**
LSTM's gate mechanism (sigmoid to control information flow) directly inspired the GLU/SwiGLU activation used in modern Transformer FFN layers. The gate idea generalized from recurrence to feed-forward.

**3. Sequential generation → autoregressive decoding**
LLMs still generate text ONE TOKEN AT A TIME (like an RNN), using the previous output as the next input. The causal mask in Transformer attention enforces this sequential dependency during generation.

**4. RNN-like alternatives are making a comeback:**
• **Mamba / S4 (State Space Models):** linear recurrence with O(n) scaling. Competitive with Transformers on some tasks.
• **RWKV:** "Transformer-quality" with RNN-like O(n) inference.
• **xLSTM (2024):** modernized LSTM with exponential gating. Proposed by Hochreiter (LSTM's original inventor!).
• **Griffin/Hawk (Google):** hybrid architectures combining linear recurrences with local attention.

**The frontier:** perhaps the best architecture isn't pure attention OR pure recurrence, but a hybrid of both — using attention for global patterns and recurrence for efficient local processing.`}],questions:[{q:"Why can a Transformer process a sequence of 2048 tokens faster than an RNN, even though the Transformer does O(n²) work and the RNN does O(n)?",a:"Parallelism. The RNN's O(n) operations are SEQUENTIAL — h₁ must finish before h₂ can start, h₂ before h₃, etc. That's 2048 serial steps. The Transformer's O(n²) = 4 million operations can be executed SIMULTANEOUSLY on a GPU with thousands of cores. The wall-clock time depends on the number of sequential steps, not total operations. The Transformer's longest sequential path is O(1) per layer (all positions computed in parallel), vs the RNN's O(n). On a GPU with 5000+ CUDA cores, running 4M parallel operations is much faster than running 2048 sequential ones. This is also why Transformers are hard to beat on modern hardware — they're perfectly matched to GPU architecture.",hint:"O(n) sequential operations vs O(n²) parallel operations. Which finishes first on a GPU with thousands of cores?",check:l=>{const r=l.toLowerCase();return r.includes("parallel")&&(r.includes("sequential")||r.includes("serial")||r.includes("gpu")||r.includes("simultaneous"))}},{q:"Name three RNN concepts that survive in modern Transformers/LLMs and explain how each was adapted.",a:"1) Hidden state → hidden representations: RNN's hidden state (compressed context vector) became the Transformer's per-layer token representations. Both carry contextual information, but Transformers compute them in parallel via attention rather than sequentially. 2) Gating mechanism → SwiGLU/GLU: LSTM's sigmoid gates (controlling information flow) inspired the GLU activation family used in modern Transformer FFN layers. The gate concept moved from temporal (controlling memory across time) to spatial (controlling feature flow within a layer). 3) Autoregressive generation → causal masked decoding: LLMs still generate one token at a time, using the previous output as input — exactly like an RNN at inference. The causal attention mask enforces the same left-to-right sequential dependency that RNNs have naturally.",hint:"Think about: state/memory, gating, and how text is generated token by token.",check:l=>{const r=l.toLowerCase();return(r.includes("hidden state")||r.includes("representation"))&&(r.includes("gate")||r.includes("glu")||r.includes("swiglu"))&&(r.includes("autoregress")||r.includes("one token")||r.includes("sequential")||r.includes("causal"))}}]}];function jh({q:l,a:r,hint:f,check:K,color:q}){const[b,U]=B.useState(""),[D,E]=B.useState("idle"),A=B.useRef(null),P=()=>{b.trim()&&E(K(b)?"correct":"wrong")};return a.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),D==="idle"||D==="wrong"?a.jsxs(a.Fragment,{children:[a.jsx("textarea",{ref:A,value:b,onChange:M=>U(M.target.value),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),P())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:D==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:D==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),D==="wrong"&&a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"✗ Not quite. Try again or reveal."}),a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[a.jsx("button",{onClick:P,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:q,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:b.trim()?1:.4},children:"✓ Check"}),a.jsx("button",{onClick:()=>E("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal"}),f&&a.jsxs("details",{style:{marginLeft:4},children:[a.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"💡 Hint"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:f})]})]})]}):D==="correct"?a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"✓ Correct!"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]}):a.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[a.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{children:"📖 Answer"}),a.jsx("button",{onClick:()=>{var M;E("idle"),U(""),(M=A.current)==null||M.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:r})]})]})}function Wh({embedded:l=!1}){const[r,f]=B.useState(null),[K,q]=B.useState(null),[b,U]=B.useState(new Set),[D,E]=B.useState({}),A=Or.reduce((p,S)=>p+S.content.length,0),P=Math.round(b.size/A*100),M=p=>p.split(`
`).map((S,G)=>{if(S==="")return a.jsx("div",{style:{height:8}},G);const d=S.split(/\*\*(.*?)\*\*/g);return a.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:d.map((g,N)=>N%2===1?a.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:g},N):a.jsx("span",{children:g},N))},G)});return a.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[a.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#7C3AED!important}"}),a.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"CNNs, RNNs & SEQUENCE MODELS"}),a.jsx("h1",{style:{fontSize:"clamp(28px,5vw,42px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"RNNs, LSTMs & GRUs — Sequence Models"}),a.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From vanilla RNNs to LSTM gates to the Transformer revolution — the complete history of sequence modeling, with full equations, gradient analysis, and the bridge to modern LLMs.",a.jsx("br",{}),Or.length," sections · ",A," concepts · ",Or.reduce((p,S)=>{var G;return p+(((G=S.questions)==null?void 0:G.length)||0)},0)," practice questions."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[a.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:a.jsx("div",{className:"pf",style:{width:`${P}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #0369A1, #15803D)",borderRadius:4}})}),a.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[b.size,"/",A]})]})]}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Or.map(p=>{var N;const S=r===p.id,G=p.content.map((v,z)=>`${p.id}-${z}`),d=G.filter(v=>b.has(v)).length,g=D[p.id]||"learn";return a.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[a.jsxs("div",{onClick:()=>f(S?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),a.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[d,"/",p.content.length]}),a.jsx("span",{className:"ar",style:{transform:S?"rotate(90deg)":"rotate(0)"},children:"›"})]}),S&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[a.jsx("button",{className:`tb ${g==="learn"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"learn"})),children:"📖 Learn"}),a.jsxs("button",{className:`tb ${g==="practice"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"practice"})),children:["✏️ Practice (",((N=p.questions)==null?void 0:N.length)||0,")"]}),a.jsxs("button",{className:`tb ${g==="deeper"?"a":""}`,onClick:()=>E(v=>({...v,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),g==="learn"&&a.jsx("div",{children:p.content.map((v,z)=>{const C=`${p.id}-${z}`,L=K===C,T=b.has(C);return a.jsxs("div",{style:{borderTop:z>0?"1px solid #F0EDE6":"none"},children:[a.jsxs("div",{className:"br",onClick:()=>q(L?null:C),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:`ck ${T?"d":""}`,onClick:F=>{F.stopPropagation();const V=new Set(b);V.has(C)?V.delete(C):V.add(C),U(V)},children:T&&"✓"}),a.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:T?"#aaa":"#2a2a2a",textDecoration:T?"line-through":"none",flex:1},children:v.heading}),a.jsx("span",{className:"ar",style:{transform:L?"rotate(90deg)":"rotate(0)"},children:"›"})]}),L&&a.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:M(v.body)})]},z)})}),g==="practice"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((v,z)=>a.jsx(jh,{...v,color:p.color},`${p.id}-q-${z}`))]}),g==="deeper"&&a.jsxs("div",{style:{padding:"16px 22px 20px"},children:[a.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((v,z)=>{const C=Ph[v.type];return a.jsxs("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:C.bg+"55"},children:[a.jsxs("span",{className:"tg",style:{background:C.bg,color:C.color},children:[C.emoji," ",C.label]}),a.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:v.title})]},z)})})]})]})]},p.id)})}),a.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"RNN (1986) → LSTM (1997) → GRU (2014) → Attention (2015) → Transformer (2017) — from sequential memory to parallel attention"})]})}const Ie={"ml-learning-roadmap":{label:"ML Learning Roadmap",Component:ch},"vectors-for-llms":{label:"Vectors for LLMs",Component:nd},"calculus-for-llms":{label:"Calculus for LLMs",Component:uh},"probability-stats-for-llms":{label:"Probability & stats for LLMs",Component:ph},"perceptron-deep-dive":{label:"Perceptron deep dive",Component:gh},"mlp-deep-dive":{label:"MLP deep dive",Component:yh},"backpropagation-deep-dive":{label:"Backpropagation deep dive",Component:xh},"activation-functions-deep-dive":{label:"Activation functions deep dive",Component:Sh},"loss-functions-deep-dive":{label:"Loss functions deep dive",Component:zh},"regularization-deep-dive":{label:"Regularization deep dive",Component:Eh},"convolutions-deep-dive":{label:"Convolutions deep dive",Component:Mh},"rnns-sequence-models-deep-dive":{label:"RNNs & sequence models deep dive",Component:Wh}},td=Object.keys(Ie),ki="'DM Sans', ui-sans-serif, system-ui, sans-serif";function ot(l,{subsection:r}){return{fontFamily:ki,fontSize:r?11:12,fontWeight:l?500:450,fontStyle:"normal",letterSpacing:"0.04em",lineHeight:1.45,textAlign:"left",cursor:"pointer",border:"none",borderRadius:5,padding:r?"5px 8px":"7px 10px",width:"100%",background:l?"#1c1c1e":"transparent",color:l?"#f7f6f4":"#5a5866",WebkitFontSmoothing:"antialiased"}}function Rh({collapsed:l}){return a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":!0,children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),a.jsx("line",{x1:"9",y1:"4",x2:"9",y2:"20"}),l?a.jsx("polyline",{points:"13 10 16 12 13 14",fill:"none"}):a.jsx("polyline",{points:"15 10 12 12 15 14",fill:"none"})]})}function Ah(){return typeof navigator>"u"||/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)?"⌘B":"Ctrl+B"}function _h(){return typeof navigator>"u"?{expand:"⌘⌥]",collapse:"⌘⌥[",mac:!0}:/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)?{expand:"⌘⌥]",collapse:"⌘⌥[",mac:!0}:{expand:"Ctrl+Alt+]",collapse:"Ctrl+Alt+[",mac:!1}}function bi({open:l}){return a.jsx("span",{style:{display:"inline-flex",width:18,justifyContent:"center",fontSize:14,color:"#666",transform:l?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.15s ease"},"aria-hidden":!0,children:"›"})}function Bh(){const[l,r]=B.useState(()=>{const T=window.location.hash.slice(1);return td.includes(T)?T:"ml-learning-roadmap"}),[f,K]=B.useState(!0),[q,b]=B.useState(!0),[U,D]=B.useState(!0),[E,A]=B.useState(!0),[P,M]=B.useState(!0),[p,S]=B.useState(!0);B.useEffect(()=>{window.location.hash=l},[l]),B.useEffect(()=>{const T=()=>{const F=window.location.hash.slice(1);td.includes(F)&&(r(F),(F==="vectors-for-llms"||F==="calculus-for-llms"||F==="probability-stats-for-llms")&&(b(!0),D(!0)),(F==="perceptron-deep-dive"||F==="mlp-deep-dive"||F==="backpropagation-deep-dive"||F==="activation-functions-deep-dive"||F==="loss-functions-deep-dive"||F==="regularization-deep-dive")&&(A(!0),M(!0)),(F==="convolutions-deep-dive"||F==="rnns-sequence-models-deep-dive")&&(A(!0),S(!0)))};return window.addEventListener("hashchange",T),()=>window.removeEventListener("hashchange",T)},[]);const G=B.useCallback(()=>{b(!0),D(!0),A(!0),M(!0),S(!0)},[]),d=B.useCallback(()=>{b(!1),D(!1),A(!1),M(!1),S(!1)},[]),g=B.useMemo(()=>_h(),[]),N=B.useMemo(()=>Ah(),[]);B.useEffect(()=>{const T=F=>{const V=F.target;if(!(V instanceof HTMLInputElement||V instanceof HTMLTextAreaElement||V.isContentEditable)){if((F.key==="b"||F.key==="B")&&(F.metaKey||F.ctrlKey)&&!F.altKey&&!F.shiftKey){F.preventDefault(),K(re=>!re);return}if(F.altKey&&(F.metaKey||F.ctrlKey)&&!F.shiftKey){if(F.code==="BracketRight"){F.preventDefault(),G();return}if(F.code==="BracketLeft"){F.preventDefault(),d();return}}}};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[G,d]);const v=Ie[l]??Ie["ml-learning-roadmap"],{Component:z}=v,C=f?268:52,L={fontFamily:ki,textAlign:"left",cursor:"pointer",border:"none",borderRadius:6,padding:"8px 10px",display:"flex",alignItems:"center",gap:4,width:"100%",background:"transparent",color:"#222",fontWeight:600,fontSize:12,letterSpacing:"0.02em"};return a.jsxs("div",{style:{display:"flex",height:"100%",width:"100%",fontFamily:"system-ui, sans-serif"},children:[a.jsxs("aside",{"aria-label":"Contents navigation",style:{width:C,flexShrink:0,boxSizing:"border-box",borderRight:"1px solid #e5e5e5",background:"#fafafa",display:"flex",flexDirection:"column",transition:"width 0.2s ease",overflow:"hidden"},children:[a.jsxs("div",{style:{padding:"10px 8px",display:"flex",alignItems:"center",justifyContent:f?"space-between":"center",gap:8,minHeight:44,boxSizing:"border-box"},children:[f?a.jsx("span",{style:{fontFamily:ki,fontSize:12,fontWeight:600,letterSpacing:"0.06em",color:"#2a292f",paddingLeft:6,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Contents"}):null,a.jsx("button",{type:"button",onClick:()=>K(T=>!T),"aria-expanded":f,"aria-controls":"infographic-nav",title:f?`Collapse sidebar. Keyboard shortcut: ${N}`:`Expand sidebar. Keyboard shortcut: ${N}`,style:{display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,padding:0,border:"none",borderRadius:8,background:"#e8e8e8",color:"#222",cursor:"pointer",flexShrink:0},children:a.jsx(Rh,{collapsed:!f})})]}),a.jsxs("nav",{id:"infographic-nav",style:{display:f?"flex":"none",flexDirection:"column",gap:0,padding:"4px 10px 16px",overflow:"auto",flex:1},children:[a.jsxs("div",{style:{display:"flex",gap:6,marginBottom:10,padding:"0 2px 8px",borderBottom:"1px solid #e8e8e8"},children:[a.jsx("button",{type:"button",onClick:G,title:`Expand all. Keyboard shortcut: ${g.expand}`,"aria-keyshortcuts":g.mac?"Meta+Alt+BracketRight":"Control+Alt+BracketRight",style:{flex:1,fontFamily:ki,fontSize:11,fontWeight:600,padding:"8px 8px",border:"1px solid #ddd",borderRadius:6,background:"#fff",color:"#333",cursor:"pointer"},children:"Expand all"}),a.jsx("button",{type:"button",onClick:d,title:`Collapse all. Keyboard shortcut: ${g.collapse}`,"aria-keyshortcuts":g.mac?"Meta+Alt+BracketLeft":"Control+Alt+BracketLeft",style:{flex:1,fontFamily:ki,fontSize:11,fontWeight:600,padding:"8px 8px",border:"1px solid #ddd",borderRadius:6,background:"#fff",color:"#333",cursor:"pointer"},children:"Collapse all"})]}),a.jsxs("button",{type:"button",onClick:()=>b(T=>!T),style:L,"aria-expanded":q,children:[a.jsx(bi,{open:q}),"Foundations"]}),q&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2,paddingLeft:8,marginTop:2},children:[a.jsx("button",{type:"button",onClick:()=>r("ml-learning-roadmap"),style:ot(l==="ml-learning-roadmap",{subsection:!1}),children:Ie["ml-learning-roadmap"].label}),a.jsxs("button",{type:"button",onClick:()=>D(T=>!T),style:{...L,marginTop:4},"aria-expanded":U,children:[a.jsx(bi,{open:U}),"Linear Algebra"]}),U&&a.jsxs("div",{style:{marginTop:4,marginLeft:2,paddingLeft:12,borderLeft:"2px solid #dcd8d0",display:"flex",flexDirection:"column",gap:4},children:[a.jsx("button",{type:"button",onClick:()=>r("vectors-for-llms"),style:ot(l==="vectors-for-llms",{subsection:!0}),children:Ie["vectors-for-llms"].label}),a.jsx("button",{type:"button",onClick:()=>r("calculus-for-llms"),style:ot(l==="calculus-for-llms",{subsection:!0}),children:Ie["calculus-for-llms"].label}),a.jsx("button",{type:"button",onClick:()=>r("probability-stats-for-llms"),style:ot(l==="probability-stats-for-llms",{subsection:!0}),children:Ie["probability-stats-for-llms"].label})]})]}),a.jsxs("button",{type:"button",onClick:()=>A(T=>!T),style:{...L,marginTop:8},"aria-expanded":E,children:[a.jsx(bi,{open:E}),"Deep Learning Core"]}),E&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2,paddingLeft:8,marginTop:2},children:[a.jsxs("button",{type:"button",onClick:()=>M(T=>!T),style:{...L,marginTop:4},"aria-expanded":P,children:[a.jsx(bi,{open:P}),"1 · Neural Network Fundamentals"]}),P&&a.jsxs("div",{style:{marginTop:4,marginLeft:2,paddingLeft:12,borderLeft:"2px solid #c4d4e8",display:"flex",flexDirection:"column",gap:4},children:[a.jsx("button",{type:"button",onClick:()=>r("perceptron-deep-dive"),style:ot(l==="perceptron-deep-dive",{subsection:!0}),children:Ie["perceptron-deep-dive"].label}),a.jsx("button",{type:"button",onClick:()=>r("mlp-deep-dive"),style:ot(l==="mlp-deep-dive",{subsection:!0}),children:Ie["mlp-deep-dive"].label}),a.jsx("button",{type:"button",onClick:()=>r("backpropagation-deep-dive"),style:ot(l==="backpropagation-deep-dive",{subsection:!0}),children:Ie["backpropagation-deep-dive"].label}),a.jsx("button",{type:"button",onClick:()=>r("activation-functions-deep-dive"),style:ot(l==="activation-functions-deep-dive",{subsection:!0}),children:Ie["activation-functions-deep-dive"].label}),a.jsx("button",{type:"button",onClick:()=>r("loss-functions-deep-dive"),style:ot(l==="loss-functions-deep-dive",{subsection:!0}),children:Ie["loss-functions-deep-dive"].label}),a.jsx("button",{type:"button",onClick:()=>r("regularization-deep-dive"),style:ot(l==="regularization-deep-dive",{subsection:!0}),children:Ie["regularization-deep-dive"].label})]}),a.jsx("div",{role:"separator",style:{margin:"10px 0 6px",border:"none",borderTop:"1px solid #e0e0e0"}}),a.jsxs("button",{type:"button",onClick:()=>S(T=>!T),style:{...L,marginTop:0},"aria-expanded":p,children:[a.jsx(bi,{open:p}),"2 · CNNs, RNNs & Sequence Models"]}),p&&a.jsxs("div",{style:{marginTop:4,marginLeft:2,paddingLeft:12,borderLeft:"2px solid #b8d4c8",display:"flex",flexDirection:"column",gap:4},children:[a.jsx("button",{type:"button",onClick:()=>r("convolutions-deep-dive"),style:ot(l==="convolutions-deep-dive",{subsection:!0}),children:Ie["convolutions-deep-dive"].label}),a.jsx("button",{type:"button",onClick:()=>r("rnns-sequence-models-deep-dive"),style:ot(l==="rnns-sequence-models-deep-dive",{subsection:!0}),children:Ie["rnns-sequence-models-deep-dive"].label})]})]})]})]}),a.jsx("main",{style:{flex:1,minWidth:0,overflow:"auto",background:"#fff"},children:a.jsx(z,{})})]})}sh.createRoot(document.getElementById("root")).render(a.jsx(B.StrictMode,{children:a.jsx(Bh,{})}));
