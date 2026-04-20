(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))V(A);new MutationObserver(A=>{for(const M of A)if(M.type==="childList")for(const U of M.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&V(U)}).observe(document,{childList:!0,subtree:!0});function S(A){const M={};return A.integrity&&(M.integrity=A.integrity),A.referrerPolicy&&(M.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?M.credentials="include":A.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function V(A){if(A.ep)return;A.ep=!0;const M=S(A);fetch(A.href,M)}})();var Oi={exports:{}},bn={},Pi={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function Kd(){if(Oc)return ae;Oc=1;var l=Symbol.for("react.element"),s=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),U=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),E=Symbol.iterator;function p(_){return _===null||typeof _!="object"?null:(_=E&&_[E]||_["@@iterator"],typeof _=="function"?_:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,m={};function d(_,O,ie){this.props=_,this.context=O,this.refs=m,this.updater=ie||w}d.prototype.isReactComponent={},d.prototype.setState=function(_,O){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,O,"setState")},d.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function h(){}h.prototype=d.prototype;function u(_,O,ie){this.props=_,this.context=O,this.refs=m,this.updater=ie||w}var b=u.prototype=new h;b.constructor=u,T(b,d.prototype),b.isPureReactComponent=!0;var f=Array.isArray,B=Object.prototype.hasOwnProperty,R={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function y(_,O,ie){var le,ue={},de=null,fe=null;if(O!=null)for(le in O.ref!==void 0&&(fe=O.ref),O.key!==void 0&&(de=""+O.key),O)B.call(O,le)&&!C.hasOwnProperty(le)&&(ue[le]=O[le]);var he=arguments.length-2;if(he===1)ue.children=ie;else if(1<he){for(var we=Array(he),Je=0;Je<he;Je++)we[Je]=arguments[Je+2];ue.children=we}if(_&&_.defaultProps)for(le in he=_.defaultProps,he)ue[le]===void 0&&(ue[le]=he[le]);return{$$typeof:l,type:_,key:de,ref:fe,props:ue,_owner:R.current}}function G(_,O){return{$$typeof:l,type:_.type,key:O,ref:_.ref,props:_.props,_owner:_._owner}}function re(_){return typeof _=="object"&&_!==null&&_.$$typeof===l}function oe(_){var O={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(ie){return O[ie]})}var mt=/\/+/g;function Ye(_,O){return typeof _=="object"&&_!==null&&_.key!=null?oe(""+_.key):O.toString(36)}function it(_,O,ie,le,ue){var de=typeof _;(de==="undefined"||de==="boolean")&&(_=null);var fe=!1;if(_===null)fe=!0;else switch(de){case"string":case"number":fe=!0;break;case"object":switch(_.$$typeof){case l:case s:fe=!0}}if(fe)return fe=_,ue=ue(fe),_=le===""?"."+Ye(fe,0):le,f(ue)?(ie="",_!=null&&(ie=_.replace(mt,"$&/")+"/"),it(ue,O,ie,"",function(Je){return Je})):ue!=null&&(re(ue)&&(ue=G(ue,ie+(!ue.key||fe&&fe.key===ue.key?"":(""+ue.key).replace(mt,"$&/")+"/")+_)),O.push(ue)),1;if(fe=0,le=le===""?".":le+":",f(_))for(var he=0;he<_.length;he++){de=_[he];var we=le+Ye(de,he);fe+=it(de,O,ie,we,ue)}else if(we=p(_),typeof we=="function")for(_=we.call(_),he=0;!(de=_.next()).done;)de=de.value,we=le+Ye(de,he++),fe+=it(de,O,ie,we,ue);else if(de==="object")throw O=String(_),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return fe}function ft(_,O,ie){if(_==null)return _;var le=[],ue=0;return it(_,le,"","",function(de){return O.call(ie,de,ue++)}),le}function Le(_){if(_._status===-1){var O=_._result;O=O(),O.then(function(ie){(_._status===0||_._status===-1)&&(_._status=1,_._result=ie)},function(ie){(_._status===0||_._status===-1)&&(_._status=2,_._result=ie)}),_._status===-1&&(_._status=0,_._result=O)}if(_._status===1)return _._result.default;throw _._result}var Se={current:null},$={transition:null},ne={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:$,ReactCurrentOwner:R};function K(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:ft,forEach:function(_,O,ie){ft(_,function(){O.apply(this,arguments)},ie)},count:function(_){var O=0;return ft(_,function(){O++}),O},toArray:function(_){return ft(_,function(O){return O})||[]},only:function(_){if(!re(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},ae.Component=d,ae.Fragment=S,ae.Profiler=A,ae.PureComponent=u,ae.StrictMode=V,ae.Suspense=F,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,ae.act=K,ae.cloneElement=function(_,O,ie){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var le=T({},_.props),ue=_.key,de=_.ref,fe=_._owner;if(O!=null){if(O.ref!==void 0&&(de=O.ref,fe=R.current),O.key!==void 0&&(ue=""+O.key),_.type&&_.type.defaultProps)var he=_.type.defaultProps;for(we in O)B.call(O,we)&&!C.hasOwnProperty(we)&&(le[we]=O[we]===void 0&&he!==void 0?he[we]:O[we])}var we=arguments.length-2;if(we===1)le.children=ie;else if(1<we){he=Array(we);for(var Je=0;Je<we;Je++)he[Je]=arguments[Je+2];le.children=he}return{$$typeof:l,type:_.type,key:ue,ref:de,props:le,_owner:fe}},ae.createContext=function(_){return _={$$typeof:U,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:M,_context:_},_.Consumer=_},ae.createElement=y,ae.createFactory=function(_){var O=y.bind(null,_);return O.type=_,O},ae.createRef=function(){return{current:null}},ae.forwardRef=function(_){return{$$typeof:x,render:_}},ae.isValidElement=re,ae.lazy=function(_){return{$$typeof:z,_payload:{_status:-1,_result:_},_init:Le}},ae.memo=function(_,O){return{$$typeof:q,type:_,compare:O===void 0?null:O}},ae.startTransition=function(_){var O=$.transition;$.transition={};try{_()}finally{$.transition=O}},ae.unstable_act=K,ae.useCallback=function(_,O){return Se.current.useCallback(_,O)},ae.useContext=function(_){return Se.current.useContext(_)},ae.useDebugValue=function(){},ae.useDeferredValue=function(_){return Se.current.useDeferredValue(_)},ae.useEffect=function(_,O){return Se.current.useEffect(_,O)},ae.useId=function(){return Se.current.useId()},ae.useImperativeHandle=function(_,O,ie){return Se.current.useImperativeHandle(_,O,ie)},ae.useInsertionEffect=function(_,O){return Se.current.useInsertionEffect(_,O)},ae.useLayoutEffect=function(_,O){return Se.current.useLayoutEffect(_,O)},ae.useMemo=function(_,O){return Se.current.useMemo(_,O)},ae.useReducer=function(_,O,ie){return Se.current.useReducer(_,O,ie)},ae.useRef=function(_){return Se.current.useRef(_)},ae.useState=function(_){return Se.current.useState(_)},ae.useSyncExternalStore=function(_,O,ie){return Se.current.useSyncExternalStore(_,O,ie)},ae.useTransition=function(){return Se.current.useTransition()},ae.version="18.3.1",ae}var Pc;function Hi(){return Pc||(Pc=1,Pi.exports=Kd()),Pi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function Qd(){if(Nc)return bn;Nc=1;var l=Hi(),s=Symbol.for("react.element"),S=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,A=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function U(x,F,q){var z,E={},p=null,w=null;q!==void 0&&(p=""+q),F.key!==void 0&&(p=""+F.key),F.ref!==void 0&&(w=F.ref);for(z in F)V.call(F,z)&&!M.hasOwnProperty(z)&&(E[z]=F[z]);if(x&&x.defaultProps)for(z in F=x.defaultProps,F)E[z]===void 0&&(E[z]=F[z]);return{$$typeof:s,type:x,key:p,ref:w,props:E,_owner:A.current}}return bn.Fragment=S,bn.jsx=U,bn.jsxs=U,bn}var Lc;function Xd(){return Lc||(Lc=1,Oi.exports=Qd()),Oi.exports}var n=Xd(),N=Hi(),Fs={},Ni={exports:{}},$e={},Li={exports:{}},qi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc;function Zd(){return qc||(qc=1,(function(l){function s($,ne){var K=$.length;$.push(ne);e:for(;0<K;){var _=K-1>>>1,O=$[_];if(0<A(O,ne))$[_]=ne,$[K]=O,K=_;else break e}}function S($){return $.length===0?null:$[0]}function V($){if($.length===0)return null;var ne=$[0],K=$.pop();if(K!==ne){$[0]=K;e:for(var _=0,O=$.length,ie=O>>>1;_<ie;){var le=2*(_+1)-1,ue=$[le],de=le+1,fe=$[de];if(0>A(ue,K))de<O&&0>A(fe,ue)?($[_]=fe,$[de]=K,_=de):($[_]=ue,$[le]=K,_=le);else if(de<O&&0>A(fe,K))$[_]=fe,$[de]=K,_=de;else break e}}return ne}function A($,ne){var K=$.sortIndex-ne.sortIndex;return K!==0?K:$.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var M=performance;l.unstable_now=function(){return M.now()}}else{var U=Date,x=U.now();l.unstable_now=function(){return U.now()-x}}var F=[],q=[],z=1,E=null,p=3,w=!1,T=!1,m=!1,d=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b($){for(var ne=S(q);ne!==null;){if(ne.callback===null)V(q);else if(ne.startTime<=$)V(q),ne.sortIndex=ne.expirationTime,s(F,ne);else break;ne=S(q)}}function f($){if(m=!1,b($),!T)if(S(F)!==null)T=!0,Le(B);else{var ne=S(q);ne!==null&&Se(f,ne.startTime-$)}}function B($,ne){T=!1,m&&(m=!1,h(y),y=-1),w=!0;var K=p;try{for(b(ne),E=S(F);E!==null&&(!(E.expirationTime>ne)||$&&!oe());){var _=E.callback;if(typeof _=="function"){E.callback=null,p=E.priorityLevel;var O=_(E.expirationTime<=ne);ne=l.unstable_now(),typeof O=="function"?E.callback=O:E===S(F)&&V(F),b(ne)}else V(F);E=S(F)}if(E!==null)var ie=!0;else{var le=S(q);le!==null&&Se(f,le.startTime-ne),ie=!1}return ie}finally{E=null,p=K,w=!1}}var R=!1,C=null,y=-1,G=5,re=-1;function oe(){return!(l.unstable_now()-re<G)}function mt(){if(C!==null){var $=l.unstable_now();re=$;var ne=!0;try{ne=C(!0,$)}finally{ne?Ye():(R=!1,C=null)}}else R=!1}var Ye;if(typeof u=="function")Ye=function(){u(mt)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ft=it.port2;it.port1.onmessage=mt,Ye=function(){ft.postMessage(null)}}else Ye=function(){d(mt,0)};function Le($){C=$,R||(R=!0,Ye())}function Se($,ne){y=d(function(){$(l.unstable_now())},ne)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function($){$.callback=null},l.unstable_continueExecution=function(){T||w||(T=!0,Le(B))},l.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<$?Math.floor(1e3/$):5},l.unstable_getCurrentPriorityLevel=function(){return p},l.unstable_getFirstCallbackNode=function(){return S(F)},l.unstable_next=function($){switch(p){case 1:case 2:case 3:var ne=3;break;default:ne=p}var K=p;p=ne;try{return $()}finally{p=K}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function($,ne){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var K=p;p=$;try{return ne()}finally{p=K}},l.unstable_scheduleCallback=function($,ne,K){var _=l.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?_+K:_):K=_,$){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=K+O,$={id:z++,callback:ne,priorityLevel:$,startTime:K,expirationTime:O,sortIndex:-1},K>_?($.sortIndex=K,s(q,$),S(F)===null&&$===S(q)&&(m?(h(y),y=-1):m=!0,Se(f,K-_))):($.sortIndex=O,s(F,$),T||w||(T=!0,Le(B))),$},l.unstable_shouldYield=oe,l.unstable_wrapCallback=function($){var ne=p;return function(){var K=p;p=ne;try{return $.apply(this,arguments)}finally{p=K}}}})(qi)),qi}var Hc;function ep(){return Hc||(Hc=1,Li.exports=Zd()),Li.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function tp(){if(Uc)return $e;Uc=1;var l=Hi(),s=ep();function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V=new Set,A={};function M(e,t){U(e,t),U(e+"Capture",t)}function U(e,t){for(A[e]=t,e=0;e<t.length;e++)V.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),F=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},E={};function p(e){return F.call(E,e)?!0:F.call(z,e)?!1:q.test(e)?E[e]=!0:(z[e]=!0,!1)}function w(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,t,r,o){if(t===null||typeof t>"u"||w(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function m(e,t,r,o,i,a,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=c}var d={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){d[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];d[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){d[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){d[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){d[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){d[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){d[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){d[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){d[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var h=/[\-:]([a-z])/g;function u(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(h,u);d[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(h,u);d[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(h,u);d[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){d[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),d.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){d[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});function b(e,t,r,o){var i=d.hasOwnProperty(t)?d[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T(t,r,i,o)&&(r=null),o||i===null?p(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,o=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var f=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),oe=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),$=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,_;function O(e){if(_===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);_=t&&t[1]||""}return`
`+_+e}var ie=!1;function le(e,t){if(!e||ie)return"";ie=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var o=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){o=j}e.call(t.prototype)}else{try{throw Error()}catch(j){o=j}e()}}catch(j){if(j&&o&&typeof j.stack=="string"){for(var i=j.stack.split(`
`),a=o.stack.split(`
`),c=i.length-1,g=a.length-1;1<=c&&0<=g&&i[c]!==a[g];)g--;for(;1<=c&&0<=g;c--,g--)if(i[c]!==a[g]){if(c!==1||g!==1)do if(c--,g--,0>g||i[c]!==a[g]){var v=`
`+i[c].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=c&&0<=g);break}}}finally{ie=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?O(e):""}function ue(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case R:return"Portal";case G:return"Profiler";case y:return"StrictMode";case Ye:return"Suspense";case it:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oe:return(e.displayName||"Context")+".Consumer";case re:return(e._context.displayName||"Context")+".Provider";case mt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function fe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Je(e){var t=we(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){o=""+c,a.call(this,c)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(c){o=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vn(e){e._valueTracker||(e._valueTracker=Je(e))}function Ui(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=we(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Us(e,t){var r=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Vi(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=he(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gi(e,t){t=t.checked,t!=null&&b(e,"checked",t,!1)}function Vs(e,t){Gi(e,t);var r=he(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gs(e,t.type,r):t.hasOwnProperty("defaultValue")&&Gs(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $i(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Gs(e,t,r){(t!=="number"||xn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var jr=Array.isArray;function ar(e,t,r,o){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&o&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yi(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(S(92));if(jr(r)){if(1<r.length)throw Error(S(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:he(r)}}function Ji(e,t){var r=he(t.value),o=he(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Ki(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ys(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kn,Xi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kn=kn||document.createElement("div"),kn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eu=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){eu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function Zi(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function ea(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=Zi(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,i):e[r]=i}}var tu=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Js(e,t){if(t){if(tu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,lr=null,cr=null;function ta(e){if(e=rn(e)){if(typeof Zs!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Vn(t),Zs(e.stateNode,e.type,t))}}function ra(e){lr?cr?cr.push(e):cr=[e]:lr=e}function na(){if(lr){var e=lr,t=cr;if(cr=lr=null,ta(e),t)for(e=0;e<t.length;e++)ta(t[e])}}function sa(e,t){return e(t)}function oa(){}var eo=!1;function ia(e,t,r){if(eo)return e(t,r);eo=!0;try{return sa(e,t,r)}finally{eo=!1,(lr!==null||cr!==null)&&(oa(),na())}}function zr(e,t){var r=e.stateNode;if(r===null)return null;var o=Vn(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,t,typeof r));return r}var to=!1;if(x)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){to=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{to=!1}function ru(e,t,r,o,i,a,c,g,v){var j=Array.prototype.slice.call(arguments,3);try{t.apply(r,j)}catch(P){this.onError(P)}}var Ir=!1,Sn=null,Cn=!1,ro=null,nu={onError:function(e){Ir=!0,Sn=e}};function su(e,t,r,o,i,a,c,g,v){Ir=!1,Sn=null,ru.apply(nu,arguments)}function ou(e,t,r,o,i,a,c,g,v){if(su.apply(this,arguments),Ir){if(Ir){var j=Sn;Ir=!1,Sn=null}else throw Error(S(198));Cn||(Cn=!0,ro=j)}}function Yt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function aa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function la(e){if(Yt(e)!==e)throw Error(S(188))}function iu(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var r=e,o=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){r=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return la(i),e;if(a===o)return la(i),t;a=a.sibling}throw Error(S(188))}if(r.return!==o.return)r=i,o=a;else{for(var c=!1,g=i.child;g;){if(g===r){c=!0,r=i,o=a;break}if(g===o){c=!0,o=i,r=a;break}g=g.sibling}if(!c){for(g=a.child;g;){if(g===r){c=!0,r=a,o=i;break}if(g===o){c=!0,o=a,r=i;break}g=g.sibling}if(!c)throw Error(S(189))}}if(r.alternate!==o)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:t}function ca(e){return e=iu(e),e!==null?ua(e):null}function ua(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ua(e);if(t!==null)return t;e=e.sibling}return null}var da=s.unstable_scheduleCallback,pa=s.unstable_cancelCallback,au=s.unstable_shouldYield,lu=s.unstable_requestPaint,Te=s.unstable_now,cu=s.unstable_getCurrentPriorityLevel,no=s.unstable_ImmediatePriority,ha=s.unstable_UserBlockingPriority,Tn=s.unstable_NormalPriority,uu=s.unstable_LowPriority,ma=s.unstable_IdlePriority,Rn=null,gt=null;function du(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Rn,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:mu,pu=Math.log,hu=Math.LN2;function mu(e){return e>>>=0,e===0?32:31-(pu(e)/hu|0)|0}var _n=64,Dn=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function En(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,c=r&268435455;if(c!==0){var g=c&~i;g!==0?o=Or(g):(a&=c,a!==0&&(o=Or(a)))}else c=r&~i,c!==0?o=Or(c):a!==0&&(o=Or(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&i)===0&&(i=o&-o,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-at(t),i=1<<r,o|=e[r],t&=~i;return o}function fu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gu(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-at(a),g=1<<c,v=i[c];v===-1?((g&r)===0||(g&o)!==0)&&(i[c]=fu(g,t)):v<=t&&(e.expiredLanes|=g),a&=~g}}function so(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fa(){var e=_n;return _n<<=1,(_n&4194240)===0&&(_n=64),e}function oo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Pr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=r}function yu(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-at(r),a=1<<i;t[i]=0,o[i]=-1,e[i]=-1,r&=~a}}function io(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-at(r),i=1<<o;i&t|e[o]&t&&(e[o]|=t),r&=~i}}var me=0;function ga(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ya,ao,ba,wa,va,lo=!1,Fn=[],Et=null,Ft=null,Wt=null,Nr=new Map,Lr=new Map,jt=[],bu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xa(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function qr(e,t,r,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},t!==null&&(t=rn(t),t!==null&&ao(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wu(e,t,r,o,i){switch(t){case"focusin":return Et=qr(Et,e,t,r,o,i),!0;case"dragenter":return Ft=qr(Ft,e,t,r,o,i),!0;case"mouseover":return Wt=qr(Wt,e,t,r,o,i),!0;case"pointerover":var a=i.pointerId;return Nr.set(a,qr(Nr.get(a)||null,e,t,r,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Lr.set(a,qr(Lr.get(a)||null,e,t,r,o,i)),!0}return!1}function ka(e){var t=Jt(e.target);if(t!==null){var r=Yt(t);if(r!==null){if(t=r.tag,t===13){if(t=aa(r),t!==null){e.blockedOn=t,va(e.priority,function(){ba(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=uo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Qs=o,r.target.dispatchEvent(o),Qs=null}else return t=rn(r),t!==null&&ao(t),e.blockedOn=r,!1;t.shift()}return!0}function Sa(e,t,r){Wn(e)&&r.delete(t)}function vu(){lo=!1,Et!==null&&Wn(Et)&&(Et=null),Ft!==null&&Wn(Ft)&&(Ft=null),Wt!==null&&Wn(Wt)&&(Wt=null),Nr.forEach(Sa),Lr.forEach(Sa)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,lo||(lo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,vu)))}function Ur(e){function t(i){return Hr(i,e)}if(0<Fn.length){Hr(Fn[0],e);for(var r=1;r<Fn.length;r++){var o=Fn[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Et!==null&&Hr(Et,e),Ft!==null&&Hr(Ft,e),Wt!==null&&Hr(Wt,e),Nr.forEach(t),Lr.forEach(t),r=0;r<jt.length;r++)o=jt[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<jt.length&&(r=jt[0],r.blockedOn===null);)ka(r),r.blockedOn===null&&jt.shift()}var ur=f.ReactCurrentBatchConfig,jn=!0;function xu(e,t,r,o){var i=me,a=ur.transition;ur.transition=null;try{me=1,co(e,t,r,o)}finally{me=i,ur.transition=a}}function ku(e,t,r,o){var i=me,a=ur.transition;ur.transition=null;try{me=4,co(e,t,r,o)}finally{me=i,ur.transition=a}}function co(e,t,r,o){if(jn){var i=uo(e,t,r,o);if(i===null)Do(e,t,o,Mn,r),xa(e,o);else if(wu(i,e,t,r,o))o.stopPropagation();else if(xa(e,o),t&4&&-1<bu.indexOf(e)){for(;i!==null;){var a=rn(i);if(a!==null&&ya(a),a=uo(e,t,r,o),a===null&&Do(e,t,o,Mn,r),a===i)break;i=a}i!==null&&o.stopPropagation()}else Do(e,t,o,null,r)}}var Mn=null;function uo(e,t,r,o){if(Mn=null,e=Xs(o),e=Jt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=aa(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mn=e,null}function Ca(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cu()){case no:return 1;case ha:return 4;case Tn:case uu:return 16;case ma:return 536870912;default:return 16}default:return 16}}var Mt=null,po=null,An=null;function Ta(){if(An)return An;var e,t=po,r=t.length,o,i="value"in Mt?Mt.value:Mt.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var c=r-e;for(o=1;o<=c&&t[r-o]===i[a-o];o++);return An=i.slice(e,1<o?1-o:void 0)}function zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Ra(){return!1}function Ke(e){function t(r,o,i,a,c){this._reactName=r,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(r=e[g],this[g]=r?r(a):a[g]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Bn:Ra,this.isPropagationStopped=Ra,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=Ke(dr),Vr=K({},dr,{view:0,detail:0}),Su=Ke(Vr),mo,fo,Gr,In=K({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(mo=e.screenX-Gr.screenX,fo=e.screenY-Gr.screenY):fo=mo=0,Gr=e),mo)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),_a=Ke(In),Cu=K({},In,{dataTransfer:0}),Tu=Ke(Cu),Ru=K({},Vr,{relatedTarget:0}),go=Ke(Ru),_u=K({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Du=Ke(_u),Eu=K({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fu=Ke(Eu),Wu=K({},dr,{data:0}),Da=Ke(Wu),ju={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Au[e])?!!t[e]:!1}function yo(){return zu}var Bu=K({},Vr,{key:function(e){if(e.key){var t=ju[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(e){return e.type==="keypress"?zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Iu=Ke(Bu),Ou=K({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=Ke(Ou),Pu=K({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),Nu=Ke(Pu),Lu=K({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qu=Ke(Lu),Hu=K({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uu=Ke(Hu),Vu=[9,13,27,32],bo=x&&"CompositionEvent"in window,$r=null;x&&"documentMode"in document&&($r=document.documentMode);var Gu=x&&"TextEvent"in window&&!$r,Fa=x&&(!bo||$r&&8<$r&&11>=$r),Wa=" ",ja=!1;function Ma(e,t){switch(e){case"keyup":return Vu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Aa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function $u(e,t){switch(e){case"compositionend":return Aa(t);case"keypress":return t.which!==32?null:(ja=!0,Wa);case"textInput":return e=t.data,e===Wa&&ja?null:e;default:return null}}function Yu(e,t){if(pr)return e==="compositionend"||!bo&&Ma(e,t)?(e=Ta(),An=po=Mt=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fa&&t.locale!=="ko"?null:t.data;default:return null}}var Ju={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ju[e.type]:t==="textarea"}function Ba(e,t,r,o){ra(o),t=qn(t,"onChange"),0<t.length&&(r=new ho("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Yr=null,Jr=null;function Ku(e){el(e,0)}function On(e){var t=yr(e);if(Ui(t))return e}function Qu(e,t){if(e==="change")return t}var Ia=!1;if(x){var wo;if(x){var vo="oninput"in document;if(!vo){var Oa=document.createElement("div");Oa.setAttribute("oninput","return;"),vo=typeof Oa.oninput=="function"}wo=vo}else wo=!1;Ia=wo&&(!document.documentMode||9<document.documentMode)}function Pa(){Yr&&(Yr.detachEvent("onpropertychange",Na),Jr=Yr=null)}function Na(e){if(e.propertyName==="value"&&On(Jr)){var t=[];Ba(t,Jr,e,Xs(e)),ia(Ku,t)}}function Xu(e,t,r){e==="focusin"?(Pa(),Yr=t,Jr=r,Yr.attachEvent("onpropertychange",Na)):e==="focusout"&&Pa()}function Zu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return On(Jr)}function ed(e,t){if(e==="click")return On(t)}function td(e,t){if(e==="input"||e==="change")return On(t)}function rd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:rd;function Kr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var i=r[o];if(!F.call(t,i)||!lt(e[i],t[i]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qa(e,t){var r=La(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=La(r)}}function Ha(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ha(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ua(){for(var e=window,t=xn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=xn(e.document)}return t}function xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nd(e){var t=Ua(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ha(r.ownerDocument.documentElement,r)){if(o!==null&&xo(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=qa(r,a);var c=qa(r,o);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sd=x&&"documentMode"in document&&11>=document.documentMode,hr=null,ko=null,Qr=null,So=!1;function Va(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;So||hr==null||hr!==xn(o)||(o=hr,"selectionStart"in o&&xo(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qr&&Kr(Qr,o)||(Qr=o,o=qn(ko,"onSelect"),0<o.length&&(t=new ho("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=hr)))}function Pn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var mr={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionend:Pn("Transition","TransitionEnd")},Co={},Ga={};x&&(Ga=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Nn(e){if(Co[e])return Co[e];if(!mr[e])return e;var t=mr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ga)return Co[e]=t[r];return e}var $a=Nn("animationend"),Ya=Nn("animationiteration"),Ja=Nn("animationstart"),Ka=Nn("transitionend"),Qa=new Map,Xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){Qa.set(e,t),M(t,[e])}for(var To=0;To<Xa.length;To++){var Ro=Xa[To],od=Ro.toLowerCase(),id=Ro[0].toUpperCase()+Ro.slice(1);At(od,"on"+id)}At($a,"onAnimationEnd"),At(Ya,"onAnimationIteration"),At(Ja,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(Ka,"onTransitionEnd"),U("onMouseEnter",["mouseout","mouseover"]),U("onMouseLeave",["mouseout","mouseover"]),U("onPointerEnter",["pointerout","pointerover"]),U("onPointerLeave",["pointerout","pointerover"]),M("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),M("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),M("onBeforeInput",["compositionend","keypress","textInput","paste"]),M("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ad=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function Za(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,ou(o,t,void 0,e),e.currentTarget=null}function el(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var c=o.length-1;0<=c;c--){var g=o[c],v=g.instance,j=g.currentTarget;if(g=g.listener,v!==a&&i.isPropagationStopped())break e;Za(i,g,j),a=v}else for(c=0;c<o.length;c++){if(g=o[c],v=g.instance,j=g.currentTarget,g=g.listener,v!==a&&i.isPropagationStopped())break e;Za(i,g,j),a=v}}}if(Cn)throw e=ro,Cn=!1,ro=null,e}function ye(e,t){var r=t[Ao];r===void 0&&(r=t[Ao]=new Set);var o=e+"__bubble";r.has(o)||(tl(t,e,2,!1),r.add(o))}function _o(e,t,r){var o=0;t&&(o|=4),tl(r,e,o,t)}var Ln="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Ln]){e[Ln]=!0,V.forEach(function(r){r!=="selectionchange"&&(ad.has(r)||_o(r,!1,e),_o(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ln]||(t[Ln]=!0,_o("selectionchange",!1,t))}}function tl(e,t,r,o){switch(Ca(t)){case 1:var i=xu;break;case 4:i=ku;break;default:i=co}r=i.bind(null,t,r,e),i=void 0,!to||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Do(e,t,r,o,i){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var c=o.tag;if(c===3||c===4){var g=o.stateNode.containerInfo;if(g===i||g.nodeType===8&&g.parentNode===i)break;if(c===4)for(c=o.return;c!==null;){var v=c.tag;if((v===3||v===4)&&(v=c.stateNode.containerInfo,v===i||v.nodeType===8&&v.parentNode===i))return;c=c.return}for(;g!==null;){if(c=Jt(g),c===null)return;if(v=c.tag,v===5||v===6){o=a=c;continue e}g=g.parentNode}}o=o.return}ia(function(){var j=a,P=Xs(r),L=[];e:{var I=Qa.get(e);if(I!==void 0){var Y=ho,Q=e;switch(e){case"keypress":if(zn(r)===0)break e;case"keydown":case"keyup":Y=Iu;break;case"focusin":Q="focus",Y=go;break;case"focusout":Q="blur",Y=go;break;case"beforeblur":case"afterblur":Y=go;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=_a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Tu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Nu;break;case $a:case Ya:case Ja:Y=Du;break;case Ka:Y=qu;break;case"scroll":Y=Su;break;case"wheel":Y=Uu;break;case"copy":case"cut":case"paste":Y=Fu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Ea}var X=(t&4)!==0,Re=!X&&e==="scroll",D=X?I!==null?I+"Capture":null:I;X=[];for(var k=j,W;k!==null;){W=k;var H=W.stateNode;if(W.tag===5&&H!==null&&(W=H,D!==null&&(H=zr(k,D),H!=null&&X.push(en(k,H,W)))),Re)break;k=k.return}0<X.length&&(I=new Y(I,Q,null,r,P),L.push({event:I,listeners:X}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",I&&r!==Qs&&(Q=r.relatedTarget||r.fromElement)&&(Jt(Q)||Q[xt]))break e;if((Y||I)&&(I=P.window===P?P:(I=P.ownerDocument)?I.defaultView||I.parentWindow:window,Y?(Q=r.relatedTarget||r.toElement,Y=j,Q=Q?Jt(Q):null,Q!==null&&(Re=Yt(Q),Q!==Re||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(Y=null,Q=j),Y!==Q)){if(X=_a,H="onMouseLeave",D="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(X=Ea,H="onPointerLeave",D="onPointerEnter",k="pointer"),Re=Y==null?I:yr(Y),W=Q==null?I:yr(Q),I=new X(H,k+"leave",Y,r,P),I.target=Re,I.relatedTarget=W,H=null,Jt(P)===j&&(X=new X(D,k+"enter",Q,r,P),X.target=W,X.relatedTarget=Re,H=X),Re=H,Y&&Q)t:{for(X=Y,D=Q,k=0,W=X;W;W=fr(W))k++;for(W=0,H=D;H;H=fr(H))W++;for(;0<k-W;)X=fr(X),k--;for(;0<W-k;)D=fr(D),W--;for(;k--;){if(X===D||D!==null&&X===D.alternate)break t;X=fr(X),D=fr(D)}X=null}else X=null;Y!==null&&rl(L,I,Y,X,!1),Q!==null&&Re!==null&&rl(L,Re,Q,X,!0)}}e:{if(I=j?yr(j):window,Y=I.nodeName&&I.nodeName.toLowerCase(),Y==="select"||Y==="input"&&I.type==="file")var Z=Qu;else if(za(I))if(Ia)Z=td;else{Z=Zu;var ee=Xu}else(Y=I.nodeName)&&Y.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(Z=ed);if(Z&&(Z=Z(e,j))){Ba(L,Z,r,P);break e}ee&&ee(e,I,j),e==="focusout"&&(ee=I._wrapperState)&&ee.controlled&&I.type==="number"&&Gs(I,"number",I.value)}switch(ee=j?yr(j):window,e){case"focusin":(za(ee)||ee.contentEditable==="true")&&(hr=ee,ko=j,Qr=null);break;case"focusout":Qr=ko=hr=null;break;case"mousedown":So=!0;break;case"contextmenu":case"mouseup":case"dragend":So=!1,Va(L,r,P);break;case"selectionchange":if(sd)break;case"keydown":case"keyup":Va(L,r,P)}var te;if(bo)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else pr?Ma(e,r)&&(se="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(se="onCompositionStart");se&&(Fa&&r.locale!=="ko"&&(pr||se!=="onCompositionStart"?se==="onCompositionEnd"&&pr&&(te=Ta()):(Mt=P,po="value"in Mt?Mt.value:Mt.textContent,pr=!0)),ee=qn(j,se),0<ee.length&&(se=new Da(se,e,null,r,P),L.push({event:se,listeners:ee}),te?se.data=te:(te=Aa(r),te!==null&&(se.data=te)))),(te=Gu?$u(e,r):Yu(e,r))&&(j=qn(j,"onBeforeInput"),0<j.length&&(P=new Da("onBeforeInput","beforeinput",null,r,P),L.push({event:P,listeners:j}),P.data=te))}el(L,t)})}function en(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qn(e,t){for(var r=t+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=zr(e,r),a!=null&&o.unshift(en(e,a,i)),a=zr(e,t),a!=null&&o.push(en(e,a,i))),e=e.return}return o}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rl(e,t,r,o,i){for(var a=t._reactName,c=[];r!==null&&r!==o;){var g=r,v=g.alternate,j=g.stateNode;if(v!==null&&v===o)break;g.tag===5&&j!==null&&(g=j,i?(v=zr(r,a),v!=null&&c.unshift(en(r,v,g))):i||(v=zr(r,a),v!=null&&c.push(en(r,v,g)))),r=r.return}c.length!==0&&e.push({event:t,listeners:c})}var ld=/\r\n?/g,cd=/\u0000|\uFFFD/g;function nl(e){return(typeof e=="string"?e:""+e).replace(ld,`
`).replace(cd,"")}function Hn(e,t,r){if(t=nl(t),nl(e)!==t&&r)throw Error(S(425))}function Un(){}var Eo=null,Fo=null;function Wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,ud=typeof clearTimeout=="function"?clearTimeout:void 0,sl=typeof Promise=="function"?Promise:void 0,dd=typeof queueMicrotask=="function"?queueMicrotask:typeof sl<"u"?function(e){return sl.resolve(null).then(e).catch(pd)}:jo;function pd(e){setTimeout(function(){throw e})}function Mo(e,t){var r=t,o=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(o===0){e.removeChild(i),Ur(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=i}while(r);Ur(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ol(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),yt="__reactFiber$"+gr,tn="__reactProps$"+gr,xt="__reactContainer$"+gr,Ao="__reactEvents$"+gr,hd="__reactListeners$"+gr,md="__reactHandles$"+gr;function Jt(e){var t=e[yt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[xt]||r[yt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ol(e);e!==null;){if(r=e[yt])return r;e=ol(e)}return t}e=r,r=e.parentNode}return null}function rn(e){return e=e[yt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Vn(e){return e[tn]||null}var zo=[],br=-1;function Bt(e){return{current:e}}function be(e){0>br||(e.current=zo[br],zo[br]=null,br--)}function ge(e,t){br++,zo[br]=e.current,e.current=t}var It={},ze=Bt(It),qe=Bt(!1),Kt=It;function wr(e,t){var r=e.type.contextTypes;if(!r)return It;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function Gn(){be(qe),be(ze)}function il(e,t,r){if(ze.current!==It)throw Error(S(168));ge(ze,t),ge(qe,r)}function al(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(S(108,fe(e)||"Unknown",i));return K({},r,o)}function $n(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Kt=ze.current,ge(ze,e),ge(qe,qe.current),!0}function ll(e,t,r){var o=e.stateNode;if(!o)throw Error(S(169));r?(e=al(e,t,Kt),o.__reactInternalMemoizedMergedChildContext=e,be(qe),be(ze),ge(ze,e)):be(qe),ge(qe,r)}var kt=null,Yn=!1,Bo=!1;function cl(e){kt===null?kt=[e]:kt.push(e)}function fd(e){Yn=!0,cl(e)}function Ot(){if(!Bo&&kt!==null){Bo=!0;var e=0,t=me;try{var r=kt;for(me=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}kt=null,Yn=!1}catch(i){throw kt!==null&&(kt=kt.slice(e+1)),da(no,Ot),i}finally{me=t,Bo=!1}}return null}var vr=[],xr=0,Jn=null,Kn=0,et=[],tt=0,Qt=null,St=1,Ct="";function Xt(e,t){vr[xr++]=Kn,vr[xr++]=Jn,Jn=e,Kn=t}function ul(e,t,r){et[tt++]=St,et[tt++]=Ct,et[tt++]=Qt,Qt=e;var o=St;e=Ct;var i=32-at(o)-1;o&=~(1<<i),r+=1;var a=32-at(t)+i;if(30<a){var c=i-i%5;a=(o&(1<<c)-1).toString(32),o>>=c,i-=c,St=1<<32-at(t)+i|r<<i|o,Ct=a+e}else St=1<<a|r<<i|o,Ct=e}function Io(e){e.return!==null&&(Xt(e,1),ul(e,1,0))}function Oo(e){for(;e===Jn;)Jn=vr[--xr],vr[xr]=null,Kn=vr[--xr],vr[xr]=null;for(;e===Qt;)Qt=et[--tt],et[tt]=null,Ct=et[--tt],et[tt]=null,St=et[--tt],et[tt]=null}var Qe=null,Xe=null,ve=!1,ct=null;function dl(e,t){var r=ot(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function pl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Qt!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ot(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Qe=e,Xe=null,!0):!1;default:return!1}}function Po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function No(e){if(ve){var t=Xe;if(t){var r=t;if(!pl(e,t)){if(Po(e))throw Error(S(418));t=zt(r.nextSibling);var o=Qe;t&&pl(e,t)?dl(o,r):(e.flags=e.flags&-4097|2,ve=!1,Qe=e)}}else{if(Po(e))throw Error(S(418));e.flags=e.flags&-4097|2,ve=!1,Qe=e}}}function hl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Qn(e){if(e!==Qe)return!1;if(!ve)return hl(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wo(e.type,e.memoizedProps)),t&&(t=Xe)){if(Po(e))throw ml(),Error(S(418));for(;t;)dl(e,t),t=zt(t.nextSibling)}if(hl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Xe=zt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Qe?zt(e.stateNode.nextSibling):null;return!0}function ml(){for(var e=Xe;e;)e=zt(e.nextSibling)}function kr(){Xe=Qe=null,ve=!1}function Lo(e){ct===null?ct=[e]:ct.push(e)}var gd=f.ReactCurrentBatchConfig;function nn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var o=r.stateNode}if(!o)throw Error(S(147,e));var i=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(c){var g=i.refs;c===null?delete g[a]:g[a]=c},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function Xn(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fl(e){var t=e._init;return t(e._payload)}function gl(e){function t(D,k){if(e){var W=D.deletions;W===null?(D.deletions=[k],D.flags|=16):W.push(k)}}function r(D,k){if(!e)return null;for(;k!==null;)t(D,k),k=k.sibling;return null}function o(D,k){for(D=new Map;k!==null;)k.key!==null?D.set(k.key,k):D.set(k.index,k),k=k.sibling;return D}function i(D,k){return D=Gt(D,k),D.index=0,D.sibling=null,D}function a(D,k,W){return D.index=W,e?(W=D.alternate,W!==null?(W=W.index,W<k?(D.flags|=2,k):W):(D.flags|=2,k)):(D.flags|=1048576,k)}function c(D){return e&&D.alternate===null&&(D.flags|=2),D}function g(D,k,W,H){return k===null||k.tag!==6?(k=ji(W,D.mode,H),k.return=D,k):(k=i(k,W),k.return=D,k)}function v(D,k,W,H){var Z=W.type;return Z===C?P(D,k,W.props.children,H,W.key):k!==null&&(k.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Le&&fl(Z)===k.type)?(H=i(k,W.props),H.ref=nn(D,k,W),H.return=D,H):(H=ks(W.type,W.key,W.props,null,D.mode,H),H.ref=nn(D,k,W),H.return=D,H)}function j(D,k,W,H){return k===null||k.tag!==4||k.stateNode.containerInfo!==W.containerInfo||k.stateNode.implementation!==W.implementation?(k=Mi(W,D.mode,H),k.return=D,k):(k=i(k,W.children||[]),k.return=D,k)}function P(D,k,W,H,Z){return k===null||k.tag!==7?(k=ir(W,D.mode,H,Z),k.return=D,k):(k=i(k,W),k.return=D,k)}function L(D,k,W){if(typeof k=="string"&&k!==""||typeof k=="number")return k=ji(""+k,D.mode,W),k.return=D,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case B:return W=ks(k.type,k.key,k.props,null,D.mode,W),W.ref=nn(D,null,k),W.return=D,W;case R:return k=Mi(k,D.mode,W),k.return=D,k;case Le:var H=k._init;return L(D,H(k._payload),W)}if(jr(k)||ne(k))return k=ir(k,D.mode,W,null),k.return=D,k;Xn(D,k)}return null}function I(D,k,W,H){var Z=k!==null?k.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return Z!==null?null:g(D,k,""+W,H);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return W.key===Z?v(D,k,W,H):null;case R:return W.key===Z?j(D,k,W,H):null;case Le:return Z=W._init,I(D,k,Z(W._payload),H)}if(jr(W)||ne(W))return Z!==null?null:P(D,k,W,H,null);Xn(D,W)}return null}function Y(D,k,W,H,Z){if(typeof H=="string"&&H!==""||typeof H=="number")return D=D.get(W)||null,g(k,D,""+H,Z);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case B:return D=D.get(H.key===null?W:H.key)||null,v(k,D,H,Z);case R:return D=D.get(H.key===null?W:H.key)||null,j(k,D,H,Z);case Le:var ee=H._init;return Y(D,k,W,ee(H._payload),Z)}if(jr(H)||ne(H))return D=D.get(W)||null,P(k,D,H,Z,null);Xn(k,H)}return null}function Q(D,k,W,H){for(var Z=null,ee=null,te=k,se=k=0,je=null;te!==null&&se<W.length;se++){te.index>se?(je=te,te=null):je=te.sibling;var pe=I(D,te,W[se],H);if(pe===null){te===null&&(te=je);break}e&&te&&pe.alternate===null&&t(D,te),k=a(pe,k,se),ee===null?Z=pe:ee.sibling=pe,ee=pe,te=je}if(se===W.length)return r(D,te),ve&&Xt(D,se),Z;if(te===null){for(;se<W.length;se++)te=L(D,W[se],H),te!==null&&(k=a(te,k,se),ee===null?Z=te:ee.sibling=te,ee=te);return ve&&Xt(D,se),Z}for(te=o(D,te);se<W.length;se++)je=Y(te,D,se,W[se],H),je!==null&&(e&&je.alternate!==null&&te.delete(je.key===null?se:je.key),k=a(je,k,se),ee===null?Z=je:ee.sibling=je,ee=je);return e&&te.forEach(function($t){return t(D,$t)}),ve&&Xt(D,se),Z}function X(D,k,W,H){var Z=ne(W);if(typeof Z!="function")throw Error(S(150));if(W=Z.call(W),W==null)throw Error(S(151));for(var ee=Z=null,te=k,se=k=0,je=null,pe=W.next();te!==null&&!pe.done;se++,pe=W.next()){te.index>se?(je=te,te=null):je=te.sibling;var $t=I(D,te,pe.value,H);if($t===null){te===null&&(te=je);break}e&&te&&$t.alternate===null&&t(D,te),k=a($t,k,se),ee===null?Z=$t:ee.sibling=$t,ee=$t,te=je}if(pe.done)return r(D,te),ve&&Xt(D,se),Z;if(te===null){for(;!pe.done;se++,pe=W.next())pe=L(D,pe.value,H),pe!==null&&(k=a(pe,k,se),ee===null?Z=pe:ee.sibling=pe,ee=pe);return ve&&Xt(D,se),Z}for(te=o(D,te);!pe.done;se++,pe=W.next())pe=Y(te,D,se,pe.value,H),pe!==null&&(e&&pe.alternate!==null&&te.delete(pe.key===null?se:pe.key),k=a(pe,k,se),ee===null?Z=pe:ee.sibling=pe,ee=pe);return e&&te.forEach(function(Jd){return t(D,Jd)}),ve&&Xt(D,se),Z}function Re(D,k,W,H){if(typeof W=="object"&&W!==null&&W.type===C&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case B:e:{for(var Z=W.key,ee=k;ee!==null;){if(ee.key===Z){if(Z=W.type,Z===C){if(ee.tag===7){r(D,ee.sibling),k=i(ee,W.props.children),k.return=D,D=k;break e}}else if(ee.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Le&&fl(Z)===ee.type){r(D,ee.sibling),k=i(ee,W.props),k.ref=nn(D,ee,W),k.return=D,D=k;break e}r(D,ee);break}else t(D,ee);ee=ee.sibling}W.type===C?(k=ir(W.props.children,D.mode,H,W.key),k.return=D,D=k):(H=ks(W.type,W.key,W.props,null,D.mode,H),H.ref=nn(D,k,W),H.return=D,D=H)}return c(D);case R:e:{for(ee=W.key;k!==null;){if(k.key===ee)if(k.tag===4&&k.stateNode.containerInfo===W.containerInfo&&k.stateNode.implementation===W.implementation){r(D,k.sibling),k=i(k,W.children||[]),k.return=D,D=k;break e}else{r(D,k);break}else t(D,k);k=k.sibling}k=Mi(W,D.mode,H),k.return=D,D=k}return c(D);case Le:return ee=W._init,Re(D,k,ee(W._payload),H)}if(jr(W))return Q(D,k,W,H);if(ne(W))return X(D,k,W,H);Xn(D,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,k!==null&&k.tag===6?(r(D,k.sibling),k=i(k,W),k.return=D,D=k):(r(D,k),k=ji(W,D.mode,H),k.return=D,D=k),c(D)):r(D,k)}return Re}var Sr=gl(!0),yl=gl(!1),Zn=Bt(null),es=null,Cr=null,qo=null;function Ho(){qo=Cr=es=null}function Uo(e){var t=Zn.current;be(Zn),e._currentValue=t}function Vo(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Tr(e,t){es=e,qo=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(qo!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(es===null)throw Error(S(308));Cr=e,es.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Zt=null;function Go(e){Zt===null?Zt=[e]:Zt.push(e)}function bl(e,t,r,o){var i=t.interleaved;return i===null?(r.next=r,Go(t)):(r.next=i.next,i.next=r),t.interleaved=r,Tt(e,o)}function Tt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Pt=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ce&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Tt(e,r)}return i=o.interleaved,i===null?(t.next=t,Go(o)):(t.next=i.next,i.next=t),o.interleaved=t,Tt(e,r)}function ts(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,io(e,r)}}function vl(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=c:a=a.next=c,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function rs(e,t,r,o){var i=e.updateQueue;Pt=!1;var a=i.firstBaseUpdate,c=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var v=g,j=v.next;v.next=null,c===null?a=j:c.next=j,c=v;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==c&&(g===null?P.firstBaseUpdate=j:g.next=j,P.lastBaseUpdate=v))}if(a!==null){var L=i.baseState;c=0,P=j=v=null,g=a;do{var I=g.lane,Y=g.eventTime;if((o&I)===I){P!==null&&(P=P.next={eventTime:Y,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var Q=e,X=g;switch(I=t,Y=r,X.tag){case 1:if(Q=X.payload,typeof Q=="function"){L=Q.call(Y,L,I);break e}L=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=X.payload,I=typeof Q=="function"?Q.call(Y,L,I):Q,I==null)break e;L=K({},L,I);break e;case 2:Pt=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,I=i.effects,I===null?i.effects=[g]:I.push(g))}else Y={eventTime:Y,lane:I,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(j=P=Y,v=L):P=P.next=Y,c|=I;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;I=g,g=I.next,I.next=null,i.lastBaseUpdate=I,i.shared.pending=null}}while(!0);if(P===null&&(v=L),i.baseState=v,i.firstBaseUpdate=j,i.lastBaseUpdate=P,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);rr|=c,e.lanes=c,e.memoizedState=L}}function xl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=r,typeof i!="function")throw Error(S(191,i));i.call(o)}}}var sn={},bt=Bt(sn),on=Bt(sn),an=Bt(sn);function er(e){if(e===sn)throw Error(S(174));return e}function Yo(e,t){switch(ge(an,t),ge(on,e),ge(bt,sn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ys(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ys(t,e)}be(bt),ge(bt,t)}function Rr(){be(bt),be(on),be(an)}function kl(e){er(an.current);var t=er(bt.current),r=Ys(t,e.type);t!==r&&(ge(on,e),ge(bt,r))}function Jo(e){on.current===e&&(be(bt),be(on))}var xe=Bt(0);function ns(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=[];function Qo(){for(var e=0;e<Ko.length;e++)Ko[e]._workInProgressVersionPrimary=null;Ko.length=0}var ss=f.ReactCurrentDispatcher,Xo=f.ReactCurrentBatchConfig,tr=0,ke=null,De=null,Fe=null,os=!1,ln=!1,cn=0,yd=0;function Be(){throw Error(S(321))}function Zo(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!lt(e[r],t[r]))return!1;return!0}function ei(e,t,r,o,i,a){if(tr=a,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ss.current=e===null||e.memoizedState===null?xd:kd,e=r(o,i),ln){a=0;do{if(ln=!1,cn=0,25<=a)throw Error(S(301));a+=1,Fe=De=null,t.updateQueue=null,ss.current=Sd,e=r(o,i)}while(ln)}if(ss.current=ls,t=De!==null&&De.next!==null,tr=0,Fe=De=ke=null,os=!1,t)throw Error(S(300));return e}function ti(){var e=cn!==0;return cn=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ke.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function nt(){if(De===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Fe===null?ke.memoizedState:Fe.next;if(t!==null)Fe=t,De=e;else{if(e===null)throw Error(S(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?ke.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function un(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=nt(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var o=De,i=o.baseQueue,a=r.pending;if(a!==null){if(i!==null){var c=i.next;i.next=a.next,a.next=c}o.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,o=o.baseState;var g=c=null,v=null,j=a;do{var P=j.lane;if((tr&P)===P)v!==null&&(v=v.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),o=j.hasEagerState?j.eagerState:e(o,j.action);else{var L={lane:P,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};v===null?(g=v=L,c=o):v=v.next=L,ke.lanes|=P,rr|=P}j=j.next}while(j!==null&&j!==a);v===null?c=o:v.next=g,lt(o,t.memoizedState)||(Ue=!0),t.memoizedState=o,t.baseState=c,t.baseQueue=v,r.lastRenderedState=o}if(e=r.interleaved,e!==null){i=e;do a=i.lane,ke.lanes|=a,rr|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ni(e){var t=nt(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var o=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var c=i=i.next;do a=e(a,c.action),c=c.next;while(c!==i);lt(a,t.memoizedState)||(Ue=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function Sl(){}function Cl(e,t){var r=ke,o=nt(),i=t(),a=!lt(o.memoizedState,i);if(a&&(o.memoizedState=i,Ue=!0),o=o.queue,si(_l.bind(null,r,o,e),[e]),o.getSnapshot!==t||a||Fe!==null&&Fe.memoizedState.tag&1){if(r.flags|=2048,dn(9,Rl.bind(null,r,o,i,t),void 0,null),We===null)throw Error(S(349));(tr&30)!==0||Tl(r,t,i)}return i}function Tl(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Rl(e,t,r,o){t.value=r,t.getSnapshot=o,Dl(t)&&El(e)}function _l(e,t,r){return r(function(){Dl(t)&&El(e)})}function Dl(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!lt(e,r)}catch{return!0}}function El(e){var t=Tt(e,1);t!==null&&ht(t,e,1,-1)}function Fl(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t.queue=e,e=e.dispatch=vd.bind(null,ke,e),[t.memoizedState,e]}function dn(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function Wl(){return nt().memoizedState}function is(e,t,r,o){var i=wt();ke.flags|=e,i.memoizedState=dn(1|t,r,void 0,o===void 0?null:o)}function as(e,t,r,o){var i=nt();o=o===void 0?null:o;var a=void 0;if(De!==null){var c=De.memoizedState;if(a=c.destroy,o!==null&&Zo(o,c.deps)){i.memoizedState=dn(t,r,a,o);return}}ke.flags|=e,i.memoizedState=dn(1|t,r,a,o)}function jl(e,t){return is(8390656,8,e,t)}function si(e,t){return as(2048,8,e,t)}function Ml(e,t){return as(4,2,e,t)}function Al(e,t){return as(4,4,e,t)}function zl(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bl(e,t,r){return r=r!=null?r.concat([e]):null,as(4,4,zl.bind(null,t,e),r)}function oi(){}function Il(e,t){var r=nt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Zo(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Ol(e,t){var r=nt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Zo(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Pl(e,t,r){return(tr&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=r):(lt(r,t)||(r=fa(),ke.lanes|=r,rr|=r,e.baseState=!0),t)}function bd(e,t){var r=me;me=r!==0&&4>r?r:4,e(!0);var o=Xo.transition;Xo.transition={};try{e(!1),t()}finally{me=r,Xo.transition=o}}function Nl(){return nt().memoizedState}function wd(e,t,r){var o=Ut(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Ll(e))ql(t,r);else if(r=bl(e,t,r,o),r!==null){var i=Ne();ht(r,e,o,i),Hl(r,t,o)}}function vd(e,t,r){var o=Ut(e),i={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))ql(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var c=t.lastRenderedState,g=a(c,r);if(i.hasEagerState=!0,i.eagerState=g,lt(g,c)){var v=t.interleaved;v===null?(i.next=i,Go(t)):(i.next=v.next,v.next=i),t.interleaved=i;return}}catch{}finally{}r=bl(e,t,i,o),r!==null&&(i=Ne(),ht(r,e,o,i),Hl(r,t,o))}}function Ll(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function ql(e,t){ln=os=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Hl(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,io(e,r)}}var ls={readContext:rt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},xd={readContext:rt,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:jl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,is(4194308,4,zl.bind(null,t,e),r)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){return is(4,2,e,t)},useMemo:function(e,t){var r=wt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=wt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=wd.bind(null,ke,e),[o.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Fl,useDebugValue:oi,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Fl(!1),t=e[0];return e=bd.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=ke,i=wt();if(ve){if(r===void 0)throw Error(S(407));r=r()}else{if(r=t(),We===null)throw Error(S(349));(tr&30)!==0||Tl(o,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,jl(_l.bind(null,o,a,e),[e]),o.flags|=2048,dn(9,Rl.bind(null,o,a,r,t),void 0,null),r},useId:function(){var e=wt(),t=We.identifierPrefix;if(ve){var r=Ct,o=St;r=(o&~(1<<32-at(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=cn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=yd++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kd={readContext:rt,useCallback:Il,useContext:rt,useEffect:si,useImperativeHandle:Bl,useInsertionEffect:Ml,useLayoutEffect:Al,useMemo:Ol,useReducer:ri,useRef:Wl,useState:function(){return ri(un)},useDebugValue:oi,useDeferredValue:function(e){var t=nt();return Pl(t,De.memoizedState,e)},useTransition:function(){var e=ri(un)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Sl,useSyncExternalStore:Cl,useId:Nl,unstable_isNewReconciler:!1},Sd={readContext:rt,useCallback:Il,useContext:rt,useEffect:si,useImperativeHandle:Bl,useInsertionEffect:Ml,useLayoutEffect:Al,useMemo:Ol,useReducer:ni,useRef:Wl,useState:function(){return ni(un)},useDebugValue:oi,useDeferredValue:function(e){var t=nt();return De===null?t.memoizedState=e:Pl(t,De.memoizedState,e)},useTransition:function(){var e=ni(un)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Sl,useSyncExternalStore:Cl,useId:Nl,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ii(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:K({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var cs={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Ne(),i=Ut(e),a=Rt(o,i);a.payload=t,r!=null&&(a.callback=r),t=Nt(e,a,i),t!==null&&(ht(t,e,i,o),ts(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Ne(),i=Ut(e),a=Rt(o,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Nt(e,a,i),t!==null&&(ht(t,e,i,o),ts(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ne(),o=Ut(e),i=Rt(r,o);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,o),t!==null&&(ht(t,e,o,r),ts(t,e,o))}};function Ul(e,t,r,o,i,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,c):t.prototype&&t.prototype.isPureReactComponent?!Kr(r,o)||!Kr(i,a):!0}function Vl(e,t,r){var o=!1,i=It,a=t.contextType;return typeof a=="object"&&a!==null?a=rt(a):(i=He(t)?Kt:ze.current,o=t.contextTypes,a=(o=o!=null)?wr(e,i):It),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cs,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Gl(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&cs.enqueueReplaceState(t,t.state,null)}function ai(e,t,r,o){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},$o(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=rt(a):(a=He(t)?Kt:ze.current,i.context=wr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ii(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&cs.enqueueReplaceState(i,i.state,null),rs(e,r,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t){try{var r="",o=t;do r+=ue(o),o=o.return;while(o);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function li(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ci(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Cd=typeof WeakMap=="function"?WeakMap:Map;function $l(e,t,r){r=Rt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){gs||(gs=!0,Ci=o),ci(e,t)},r}function Yl(e,t,r){r=Rt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;r.payload=function(){return o(i)},r.callback=function(){ci(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){ci(e,t),typeof o!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),r}function Jl(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Cd;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(r)||(i.add(r),e=Od.bind(null,e,t,r),t.then(e,e))}function Kl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ql(e,t,r,o,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Rt(-1,1),t.tag=2,Nt(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Td=f.ReactCurrentOwner,Ue=!1;function Pe(e,t,r,o){t.child=e===null?yl(t,null,r,o):Sr(t,e.child,r,o)}function Xl(e,t,r,o,i){r=r.render;var a=t.ref;return Tr(t,i),o=ei(e,t,r,o,a,i),r=ti(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(ve&&r&&Io(t),t.flags|=1,Pe(e,t,o,i),t.child)}function Zl(e,t,r,o,i){if(e===null){var a=r.type;return typeof a=="function"&&!Wi(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,ec(e,t,a,o,i)):(e=ks(r.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var c=a.memoizedProps;if(r=r.compare,r=r!==null?r:Kr,r(c,o)&&e.ref===t.ref)return _t(e,t,i)}return t.flags|=1,e=Gt(a,o),e.ref=t.ref,e.return=t,t.child=e}function ec(e,t,r,o,i){if(e!==null){var a=e.memoizedProps;if(Kr(a,o)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=o=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,_t(e,t,i)}return ui(e,t,r,o,i)}function tc(e,t,r){var o=t.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Er,Ze),Ze|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Er,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,ge(Er,Ze),Ze|=o}else a!==null?(o=a.baseLanes|r,t.memoizedState=null):o=r,ge(Er,Ze),Ze|=o;return Pe(e,t,i,r),t.child}function rc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ui(e,t,r,o,i){var a=He(r)?Kt:ze.current;return a=wr(t,a),Tr(t,i),r=ei(e,t,r,o,a,i),o=ti(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(ve&&o&&Io(t),t.flags|=1,Pe(e,t,r,i),t.child)}function nc(e,t,r,o,i){if(He(r)){var a=!0;$n(t)}else a=!1;if(Tr(t,i),t.stateNode===null)ds(e,t),Vl(t,r,o),ai(t,r,o,i),o=!0;else if(e===null){var c=t.stateNode,g=t.memoizedProps;c.props=g;var v=c.context,j=r.contextType;typeof j=="object"&&j!==null?j=rt(j):(j=He(r)?Kt:ze.current,j=wr(t,j));var P=r.getDerivedStateFromProps,L=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function";L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==o||v!==j)&&Gl(t,c,o,j),Pt=!1;var I=t.memoizedState;c.state=I,rs(t,o,c,i),v=t.memoizedState,g!==o||I!==v||qe.current||Pt?(typeof P=="function"&&(ii(t,r,P,o),v=t.memoizedState),(g=Pt||Ul(t,r,g,o,I,v,j))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=v),c.props=o,c.state=v,c.context=j,o=g):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{c=t.stateNode,wl(e,t),g=t.memoizedProps,j=t.type===t.elementType?g:ut(t.type,g),c.props=j,L=t.pendingProps,I=c.context,v=r.contextType,typeof v=="object"&&v!==null?v=rt(v):(v=He(r)?Kt:ze.current,v=wr(t,v));var Y=r.getDerivedStateFromProps;(P=typeof Y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==L||I!==v)&&Gl(t,c,o,v),Pt=!1,I=t.memoizedState,c.state=I,rs(t,o,c,i);var Q=t.memoizedState;g!==L||I!==Q||qe.current||Pt?(typeof Y=="function"&&(ii(t,r,Y,o),Q=t.memoizedState),(j=Pt||Ul(t,r,j,o,I,Q,v)||!1)?(P||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,Q,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,Q,v)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=Q),c.props=o,c.state=Q,c.context=v,o=j):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),o=!1)}return di(e,t,r,o,a,i)}function di(e,t,r,o,i,a){rc(e,t);var c=(t.flags&128)!==0;if(!o&&!c)return i&&ll(t,r,!1),_t(e,t,a);o=t.stateNode,Td.current=t;var g=c&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&c?(t.child=Sr(t,e.child,null,a),t.child=Sr(t,null,g,a)):Pe(e,t,g,a),t.memoizedState=o.state,i&&ll(t,r,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?il(e,t.pendingContext,t.pendingContext!==t.context):t.context&&il(e,t.context,!1),Yo(e,t.containerInfo)}function oc(e,t,r,o,i){return kr(),Lo(i),t.flags|=256,Pe(e,t,r,o),t.child}var pi={dehydrated:null,treeContext:null,retryLane:0};function hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function ic(e,t,r){var o=t.pendingProps,i=xe.current,a=!1,c=(t.flags&128)!==0,g;if((g=c)||(g=e!==null&&e.memoizedState===null?!1:(i&2)!==0),g?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(xe,i&1),e===null)return No(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=o.children,e=o.fallback,a?(o=t.mode,a=t.child,c={mode:"hidden",children:c},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=Ss(c,o,0,null),e=ir(e,o,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=hi(r),t.memoizedState=pi,e):mi(t,c));if(i=e.memoizedState,i!==null&&(g=i.dehydrated,g!==null))return Rd(e,t,c,o,g,i,r);if(a){a=o.fallback,c=t.mode,i=e.child,g=i.sibling;var v={mode:"hidden",children:o.children};return(c&1)===0&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=v,t.deletions=null):(o=Gt(i,v),o.subtreeFlags=i.subtreeFlags&14680064),g!==null?a=Gt(g,a):(a=ir(a,c,r,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,c=e.child.memoizedState,c=c===null?hi(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~r,t.memoizedState=pi,o}return a=e.child,e=a.sibling,o=Gt(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function mi(e,t){return t=Ss({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function us(e,t,r,o){return o!==null&&Lo(o),Sr(t,e.child,null,r),e=mi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rd(e,t,r,o,i,a,c){if(r)return t.flags&256?(t.flags&=-257,o=li(Error(S(422))),us(e,t,c,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,i=t.mode,o=Ss({mode:"visible",children:o.children},i,0,null),a=ir(a,i,c,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&Sr(t,e.child,null,c),t.child.memoizedState=hi(c),t.memoizedState=pi,a);if((t.mode&1)===0)return us(e,t,c,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var g=o.dgst;return o=g,a=Error(S(419)),o=li(a,o,void 0),us(e,t,c,o)}if(g=(c&e.childLanes)!==0,Ue||g){if(o=We,o!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|c))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Tt(e,i),ht(o,e,i,-1))}return Fi(),o=li(Error(S(421))),us(e,t,c,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pd.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Xe=zt(i.nextSibling),Qe=t,ve=!0,ct=null,e!==null&&(et[tt++]=St,et[tt++]=Ct,et[tt++]=Qt,St=e.id,Ct=e.overflow,Qt=t),t=mi(t,o.children),t.flags|=4096,t)}function ac(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Vo(e.return,t,r)}function fi(e,t,r,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=i)}function lc(e,t,r){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(Pe(e,t,o.children,r),o=xe.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,r,t);else if(e.tag===19)ac(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ge(xe,o),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&ns(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),fi(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ns(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}fi(t,!0,r,null,a);break;case"together":fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ds(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,r=Gt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Gt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function _d(e,t,r){switch(t.tag){case 3:sc(t),kr();break;case 5:kl(t);break;case 1:He(t.type)&&$n(t);break;case 4:Yo(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;ge(Zn,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ge(xe,xe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?ic(e,t,r):(ge(xe,xe.current&1),e=_t(e,t,r),e!==null?e.sibling:null);ge(xe,xe.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return lc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(xe,xe.current),o)break;return null;case 22:case 23:return t.lanes=0,tc(e,t,r)}return _t(e,t,r)}var cc,gi,uc,dc;cc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},gi=function(){},uc=function(e,t,r,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,er(bt.current);var a=null;switch(r){case"input":i=Us(e,i),o=Us(e,o),a=[];break;case"select":i=K({},i,{value:void 0}),o=K({},o,{value:void 0}),a=[];break;case"textarea":i=$s(e,i),o=$s(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Un)}Js(r,o);var c;r=null;for(j in i)if(!o.hasOwnProperty(j)&&i.hasOwnProperty(j)&&i[j]!=null)if(j==="style"){var g=i[j];for(c in g)g.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(A.hasOwnProperty(j)?a||(a=[]):(a=a||[]).push(j,null));for(j in o){var v=o[j];if(g=i!=null?i[j]:void 0,o.hasOwnProperty(j)&&v!==g&&(v!=null||g!=null))if(j==="style")if(g){for(c in g)!g.hasOwnProperty(c)||v&&v.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in v)v.hasOwnProperty(c)&&g[c]!==v[c]&&(r||(r={}),r[c]=v[c])}else r||(a||(a=[]),a.push(j,r)),r=v;else j==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,g=g?g.__html:void 0,v!=null&&g!==v&&(a=a||[]).push(j,v)):j==="children"?typeof v!="string"&&typeof v!="number"||(a=a||[]).push(j,""+v):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(A.hasOwnProperty(j)?(v!=null&&j==="onScroll"&&ye("scroll",e),a||g===v||(a=[])):(a=a||[]).push(j,v))}r&&(a=a||[]).push("style",r);var j=a;(t.updateQueue=j)&&(t.flags|=4)}},dc=function(e,t,r,o){r!==o&&(t.flags|=4)};function pn(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Dd(e,t,r){var o=t.pendingProps;switch(Oo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return He(t.type)&&Gn(),Ie(t),null;case 3:return o=t.stateNode,Rr(),be(qe),be(ze),Qo(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Qn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(_i(ct),ct=null))),gi(e,t),Ie(t),null;case 5:Jo(t);var i=er(an.current);if(r=t.type,e!==null&&t.stateNode!=null)uc(e,t,r,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(S(166));return Ie(t),null}if(e=er(bt.current),Qn(t)){o=t.stateNode,r=t.type;var a=t.memoizedProps;switch(o[yt]=t,o[tn]=a,e=(t.mode&1)!==0,r){case"dialog":ye("cancel",o),ye("close",o);break;case"iframe":case"object":case"embed":ye("load",o);break;case"video":case"audio":for(i=0;i<Xr.length;i++)ye(Xr[i],o);break;case"source":ye("error",o);break;case"img":case"image":case"link":ye("error",o),ye("load",o);break;case"details":ye("toggle",o);break;case"input":Vi(o,a),ye("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},ye("invalid",o);break;case"textarea":Yi(o,a),ye("invalid",o)}Js(r,a),i=null;for(var c in a)if(a.hasOwnProperty(c)){var g=a[c];c==="children"?typeof g=="string"?o.textContent!==g&&(a.suppressHydrationWarning!==!0&&Hn(o.textContent,g,e),i=["children",g]):typeof g=="number"&&o.textContent!==""+g&&(a.suppressHydrationWarning!==!0&&Hn(o.textContent,g,e),i=["children",""+g]):A.hasOwnProperty(c)&&g!=null&&c==="onScroll"&&ye("scroll",o)}switch(r){case"input":vn(o),$i(o,a,!0);break;case"textarea":vn(o),Ki(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Un)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qi(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=c.createElement(r,{is:o.is}):(e=c.createElement(r),r==="select"&&(c=e,o.multiple?c.multiple=!0:o.size&&(c.size=o.size))):e=c.createElementNS(e,r),e[yt]=t,e[tn]=o,cc(e,t,!1,!1),t.stateNode=e;e:{switch(c=Ks(r,o),r){case"dialog":ye("cancel",e),ye("close",e),i=o;break;case"iframe":case"object":case"embed":ye("load",e),i=o;break;case"video":case"audio":for(i=0;i<Xr.length;i++)ye(Xr[i],e);i=o;break;case"source":ye("error",e),i=o;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=o;break;case"details":ye("toggle",e),i=o;break;case"input":Vi(e,o),i=Us(e,o),ye("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=K({},o,{value:void 0}),ye("invalid",e);break;case"textarea":Yi(e,o),i=$s(e,o),ye("invalid",e);break;default:i=o}Js(r,i),g=i;for(a in g)if(g.hasOwnProperty(a)){var v=g[a];a==="style"?ea(e,v):a==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Xi(e,v)):a==="children"?typeof v=="string"?(r!=="textarea"||v!=="")&&Mr(e,v):typeof v=="number"&&Mr(e,""+v):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(A.hasOwnProperty(a)?v!=null&&a==="onScroll"&&ye("scroll",e):v!=null&&b(e,a,v,c))}switch(r){case"input":vn(e),$i(e,o,!1);break;case"textarea":vn(e),Ki(e);break;case"option":o.value!=null&&e.setAttribute("value",""+he(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?ar(e,!!o.multiple,a,!1):o.defaultValue!=null&&ar(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Un)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(S(166));if(r=er(an.current),er(bt.current),Qn(t)){if(o=t.stateNode,r=t.memoizedProps,o[yt]=t,(a=o.nodeValue!==r)&&(e=Qe,e!==null))switch(e.tag){case 3:Hn(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hn(o.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[yt]=t,t.stateNode=o}return Ie(t),null;case 13:if(be(xe),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&Xe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ml(),kr(),t.flags|=98560,a=!1;else if(a=Qn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[yt]=t}else kr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),a=!1}else ct!==null&&(_i(ct),ct=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?Ee===0&&(Ee=3):Fi())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Rr(),gi(e,t),e===null&&Zr(t.stateNode.containerInfo),Ie(t),null;case 10:return Uo(t.type._context),Ie(t),null;case 17:return He(t.type)&&Gn(),Ie(t),null;case 19:if(be(xe),a=t.memoizedState,a===null)return Ie(t),null;if(o=(t.flags&128)!==0,c=a.rendering,c===null)if(o)pn(a,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=ns(e),c!==null){for(t.flags|=128,pn(a,!1),o=c.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)a=r,e=o,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ge(xe,xe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Te()>Fr&&(t.flags|=128,o=!0,pn(a,!1),t.lanes=4194304)}else{if(!o)if(e=ns(c),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),pn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!ve)return Ie(t),null}else 2*Te()-a.renderingStartTime>Fr&&r!==1073741824&&(t.flags|=128,o=!0,pn(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(r=a.last,r!==null?r.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Te(),t.sibling=null,r=xe.current,ge(xe,o?r&1|2:r&1),t):(Ie(t),null);case 22:case 23:return Ei(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Ed(e,t){switch(Oo(t),t.tag){case 1:return He(t.type)&&Gn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),be(qe),be(ze),Qo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Jo(t),null;case 13:if(be(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(xe),null;case 4:return Rr(),null;case 10:return Uo(t.type._context),null;case 22:case 23:return Ei(),null;case 24:return null;default:return null}}var ps=!1,Oe=!1,Fd=typeof WeakSet=="function"?WeakSet:Set,J=null;function Dr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Ce(e,t,o)}else r.current=null}function yi(e,t,r){try{r()}catch(o){Ce(e,t,o)}}var pc=!1;function Wd(e,t){if(Eo=jn,e=Ua(),xo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var c=0,g=-1,v=-1,j=0,P=0,L=e,I=null;t:for(;;){for(var Y;L!==r||i!==0&&L.nodeType!==3||(g=c+i),L!==a||o!==0&&L.nodeType!==3||(v=c+o),L.nodeType===3&&(c+=L.nodeValue.length),(Y=L.firstChild)!==null;)I=L,L=Y;for(;;){if(L===e)break t;if(I===r&&++j===i&&(g=c),I===a&&++P===o&&(v=c),(Y=L.nextSibling)!==null)break;L=I,I=L.parentNode}L=Y}r=g===-1||v===-1?null:{start:g,end:v}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fo={focusedElem:e,selectionRange:r},jn=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var Q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var X=Q.memoizedProps,Re=Q.memoizedState,D=t.stateNode,k=D.getSnapshotBeforeUpdate(t.elementType===t.type?X:ut(t.type,X),Re);D.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var W=t.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(H){Ce(t,t.return,H)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return Q=pc,pc=!1,Q}function hn(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&yi(t,r,a)}i=i.next}while(i!==o)}}function hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function bi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[tn],delete t[Ao],delete t[hd],delete t[md])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wi(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Un));else if(o!==4&&(e=e.child,e!==null))for(wi(e,t,r),e=e.sibling;e!==null;)wi(e,t,r),e=e.sibling}function vi(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(vi(e,t,r),e=e.sibling;e!==null;)vi(e,t,r),e=e.sibling}var Me=null,dt=!1;function Lt(e,t,r){for(r=r.child;r!==null;)gc(e,t,r),r=r.sibling}function gc(e,t,r){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Rn,r)}catch{}switch(r.tag){case 5:Oe||Dr(r,t);case 6:var o=Me,i=dt;Me=null,Lt(e,t,r),Me=o,dt=i,Me!==null&&(dt?(e=Me,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Me.removeChild(r.stateNode));break;case 18:Me!==null&&(dt?(e=Me,r=r.stateNode,e.nodeType===8?Mo(e.parentNode,r):e.nodeType===1&&Mo(e,r),Ur(e)):Mo(Me,r.stateNode));break;case 4:o=Me,i=dt,Me=r.stateNode.containerInfo,dt=!0,Lt(e,t,r),Me=o,dt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&yi(r,t,c),i=i.next}while(i!==o)}Lt(e,t,r);break;case 1:if(!Oe&&(Dr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(g){Ce(r,t,g)}Lt(e,t,r);break;case 21:Lt(e,t,r);break;case 22:r.mode&1?(Oe=(o=Oe)||r.memoizedState!==null,Lt(e,t,r),Oe=o):Lt(e,t,r);break;default:Lt(e,t,r)}}function yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Fd),t.forEach(function(o){var i=Nd.bind(null,e,o);r.has(o)||(r.add(o),o.then(i,i))})}}function pt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];try{var a=e,c=t,g=c;e:for(;g!==null;){switch(g.tag){case 5:Me=g.stateNode,dt=!1;break e;case 3:Me=g.stateNode.containerInfo,dt=!0;break e;case 4:Me=g.stateNode.containerInfo,dt=!0;break e}g=g.return}if(Me===null)throw Error(S(160));gc(a,c,i),Me=null,dt=!1;var v=i.alternate;v!==null&&(v.return=null),i.return=null}catch(j){Ce(i,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bc(t,e),t=t.sibling}function bc(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),vt(e),o&4){try{hn(3,e,e.return),hs(3,e)}catch(X){Ce(e,e.return,X)}try{hn(5,e,e.return)}catch(X){Ce(e,e.return,X)}}break;case 1:pt(t,e),vt(e),o&512&&r!==null&&Dr(r,r.return);break;case 5:if(pt(t,e),vt(e),o&512&&r!==null&&Dr(r,r.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(X){Ce(e,e.return,X)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,c=r!==null?r.memoizedProps:a,g=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{g==="input"&&a.type==="radio"&&a.name!=null&&Gi(i,a),Ks(g,c);var j=Ks(g,a);for(c=0;c<v.length;c+=2){var P=v[c],L=v[c+1];P==="style"?ea(i,L):P==="dangerouslySetInnerHTML"?Xi(i,L):P==="children"?Mr(i,L):b(i,P,L,j)}switch(g){case"input":Vs(i,a);break;case"textarea":Ji(i,a);break;case"select":var I=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var Y=a.value;Y!=null?ar(i,!!a.multiple,Y,!1):I!==!!a.multiple&&(a.defaultValue!=null?ar(i,!!a.multiple,a.defaultValue,!0):ar(i,!!a.multiple,a.multiple?[]:"",!1))}i[tn]=a}catch(X){Ce(e,e.return,X)}}break;case 6:if(pt(t,e),vt(e),o&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(X){Ce(e,e.return,X)}}break;case 3:if(pt(t,e),vt(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(X){Ce(e,e.return,X)}break;case 4:pt(t,e),vt(e);break;case 13:pt(t,e),vt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Si=Te())),o&4&&yc(e);break;case 22:if(P=r!==null&&r.memoizedState!==null,e.mode&1?(Oe=(j=Oe)||P,pt(t,e),Oe=j):pt(t,e),vt(e),o&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!P&&(e.mode&1)!==0)for(J=e,P=e.child;P!==null;){for(L=J=P;J!==null;){switch(I=J,Y=I.child,I.tag){case 0:case 11:case 14:case 15:hn(4,I,I.return);break;case 1:Dr(I,I.return);var Q=I.stateNode;if(typeof Q.componentWillUnmount=="function"){o=I,r=I.return;try{t=o,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch(X){Ce(o,r,X)}}break;case 5:Dr(I,I.return);break;case 22:if(I.memoizedState!==null){xc(L);continue}}Y!==null?(Y.return=I,J=Y):xc(L)}P=P.sibling}e:for(P=null,L=e;;){if(L.tag===5){if(P===null){P=L;try{i=L.stateNode,j?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(g=L.stateNode,v=L.memoizedProps.style,c=v!=null&&v.hasOwnProperty("display")?v.display:null,g.style.display=Zi("display",c))}catch(X){Ce(e,e.return,X)}}}else if(L.tag===6){if(P===null)try{L.stateNode.nodeValue=j?"":L.memoizedProps}catch(X){Ce(e,e.return,X)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;P===L&&(P=null),L=L.return}P===L&&(P=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:pt(t,e),vt(e),o&4&&yc(e);break;case 21:break;default:pt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(mc(r)){var o=r;break e}r=r.return}throw Error(S(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Mr(i,""),o.flags&=-33);var a=fc(e);vi(e,a,i);break;case 3:case 4:var c=o.stateNode.containerInfo,g=fc(e);wi(e,g,c);break;default:throw Error(S(161))}}catch(v){Ce(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jd(e,t,r){J=e,wc(e)}function wc(e,t,r){for(var o=(e.mode&1)!==0;J!==null;){var i=J,a=i.child;if(i.tag===22&&o){var c=i.memoizedState!==null||ps;if(!c){var g=i.alternate,v=g!==null&&g.memoizedState!==null||Oe;g=ps;var j=Oe;if(ps=c,(Oe=v)&&!j)for(J=i;J!==null;)c=J,v=c.child,c.tag===22&&c.memoizedState!==null?kc(i):v!==null?(v.return=c,J=v):kc(i);for(;a!==null;)J=a,wc(a),a=a.sibling;J=i,ps=g,Oe=j}vc(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,J=a):vc(e)}}function vc(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Oe||hs(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Oe)if(r===null)o.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:ut(t.type,r.memoizedProps);o.componentDidUpdate(i,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&xl(t,a,o);break;case 3:var c=t.updateQueue;if(c!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}xl(t,c,r)}break;case 5:var g=t.stateNode;if(r===null&&t.flags&4){r=g;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&r.focus();break;case"img":v.src&&(r.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var P=j.memoizedState;if(P!==null){var L=P.dehydrated;L!==null&&Ur(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Oe||t.flags&512&&bi(t)}catch(I){Ce(t,t.return,I)}}if(t===e){J=null;break}if(r=t.sibling,r!==null){r.return=t.return,J=r;break}J=t.return}}function xc(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var r=t.sibling;if(r!==null){r.return=t.return,J=r;break}J=t.return}}function kc(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{hs(4,t)}catch(v){Ce(t,r,v)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(v){Ce(t,i,v)}}var a=t.return;try{bi(t)}catch(v){Ce(t,a,v)}break;case 5:var c=t.return;try{bi(t)}catch(v){Ce(t,c,v)}}}catch(v){Ce(t,t.return,v)}if(t===e){J=null;break}var g=t.sibling;if(g!==null){g.return=t.return,J=g;break}J=t.return}}var Md=Math.ceil,ms=f.ReactCurrentDispatcher,xi=f.ReactCurrentOwner,st=f.ReactCurrentBatchConfig,ce=0,We=null,_e=null,Ae=0,Ze=0,Er=Bt(0),Ee=0,mn=null,rr=0,fs=0,ki=0,fn=null,Ve=null,Si=0,Fr=1/0,Dt=null,gs=!1,Ci=null,qt=null,ys=!1,Ht=null,bs=0,gn=0,Ti=null,ws=-1,vs=0;function Ne(){return(ce&6)!==0?Te():ws!==-1?ws:ws=Te()}function Ut(e){return(e.mode&1)===0?1:(ce&2)!==0&&Ae!==0?Ae&-Ae:gd.transition!==null?(vs===0&&(vs=fa()),vs):(e=me,e!==0||(e=window.event,e=e===void 0?16:Ca(e.type)),e)}function ht(e,t,r,o){if(50<gn)throw gn=0,Ti=null,Error(S(185));Pr(e,r,o),((ce&2)===0||e!==We)&&(e===We&&((ce&2)===0&&(fs|=r),Ee===4&&Vt(e,Ae)),Ge(e,o),r===1&&ce===0&&(t.mode&1)===0&&(Fr=Te()+500,Yn&&Ot()))}function Ge(e,t){var r=e.callbackNode;gu(e,t);var o=En(e,e===We?Ae:0);if(o===0)r!==null&&pa(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&pa(r),t===1)e.tag===0?fd(Cc.bind(null,e)):cl(Cc.bind(null,e)),dd(function(){(ce&6)===0&&Ot()}),r=null;else{switch(ga(o)){case 1:r=no;break;case 4:r=ha;break;case 16:r=Tn;break;case 536870912:r=ma;break;default:r=Tn}r=jc(r,Sc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Sc(e,t){if(ws=-1,vs=0,(ce&6)!==0)throw Error(S(327));var r=e.callbackNode;if(Wr()&&e.callbackNode!==r)return null;var o=En(e,e===We?Ae:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=xs(e,o);else{t=o;var i=ce;ce|=2;var a=Rc();(We!==e||Ae!==t)&&(Dt=null,Fr=Te()+500,sr(e,t));do try{Bd();break}catch(g){Tc(e,g)}while(!0);Ho(),ms.current=a,ce=i,_e!==null?t=0:(We=null,Ae=0,t=Ee)}if(t!==0){if(t===2&&(i=so(e),i!==0&&(o=i,t=Ri(e,i))),t===1)throw r=mn,sr(e,0),Vt(e,o),Ge(e,Te()),r;if(t===6)Vt(e,o);else{if(i=e.current.alternate,(o&30)===0&&!Ad(i)&&(t=xs(e,o),t===2&&(a=so(e),a!==0&&(o=a,t=Ri(e,a))),t===1))throw r=mn,sr(e,0),Vt(e,o),Ge(e,Te()),r;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(S(345));case 2:or(e,Ve,Dt);break;case 3:if(Vt(e,o),(o&130023424)===o&&(t=Si+500-Te(),10<t)){if(En(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jo(or.bind(null,e,Ve,Dt),t);break}or(e,Ve,Dt);break;case 4:if(Vt(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var c=31-at(o);a=1<<c,c=t[c],c>i&&(i=c),o&=~a}if(o=i,o=Te()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Md(o/1960))-o,10<o){e.timeoutHandle=jo(or.bind(null,e,Ve,Dt),o);break}or(e,Ve,Dt);break;case 5:or(e,Ve,Dt);break;default:throw Error(S(329))}}}return Ge(e,Te()),e.callbackNode===r?Sc.bind(null,e):null}function Ri(e,t){var r=fn;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=xs(e,t),e!==2&&(t=Ve,Ve=r,t!==null&&_i(t)),e}function _i(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function Ad(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var i=r[o],a=i.getSnapshot;i=i.value;try{if(!lt(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~ki,t&=~fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-at(t),o=1<<r;e[r]=-1,t&=~o}}function Cc(e){if((ce&6)!==0)throw Error(S(327));Wr();var t=En(e,0);if((t&1)===0)return Ge(e,Te()),null;var r=xs(e,t);if(e.tag!==0&&r===2){var o=so(e);o!==0&&(t=o,r=Ri(e,o))}if(r===1)throw r=mn,sr(e,0),Vt(e,t),Ge(e,Te()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,Ve,Dt),Ge(e,Te()),null}function Di(e,t){var r=ce;ce|=1;try{return e(t)}finally{ce=r,ce===0&&(Fr=Te()+500,Yn&&Ot())}}function nr(e){Ht!==null&&Ht.tag===0&&(ce&6)===0&&Wr();var t=ce;ce|=1;var r=st.transition,o=me;try{if(st.transition=null,me=1,e)return e()}finally{me=o,st.transition=r,ce=t,(ce&6)===0&&Ot()}}function Ei(){Ze=Er.current,be(Er)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ud(r)),_e!==null)for(r=_e.return;r!==null;){var o=r;switch(Oo(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Gn();break;case 3:Rr(),be(qe),be(ze),Qo();break;case 5:Jo(o);break;case 4:Rr();break;case 13:be(xe);break;case 19:be(xe);break;case 10:Uo(o.type._context);break;case 22:case 23:Ei()}r=r.return}if(We=e,_e=e=Gt(e.current,null),Ae=Ze=t,Ee=0,mn=null,ki=fs=rr=0,Ve=fn=null,Zt!==null){for(t=0;t<Zt.length;t++)if(r=Zt[t],o=r.interleaved,o!==null){r.interleaved=null;var i=o.next,a=r.pending;if(a!==null){var c=a.next;a.next=i,o.next=c}r.pending=o}Zt=null}return e}function Tc(e,t){do{var r=_e;try{if(Ho(),ss.current=ls,os){for(var o=ke.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}os=!1}if(tr=0,Fe=De=ke=null,ln=!1,cn=0,xi.current=null,r===null||r.return===null){Ee=1,mn=t,_e=null;break}e:{var a=e,c=r.return,g=r,v=t;if(t=Ae,g.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var j=v,P=g,L=P.tag;if((P.mode&1)===0&&(L===0||L===11||L===15)){var I=P.alternate;I?(P.updateQueue=I.updateQueue,P.memoizedState=I.memoizedState,P.lanes=I.lanes):(P.updateQueue=null,P.memoizedState=null)}var Y=Kl(c);if(Y!==null){Y.flags&=-257,Ql(Y,c,g,a,t),Y.mode&1&&Jl(a,j,t),t=Y,v=j;var Q=t.updateQueue;if(Q===null){var X=new Set;X.add(v),t.updateQueue=X}else Q.add(v);break e}else{if((t&1)===0){Jl(a,j,t),Fi();break e}v=Error(S(426))}}else if(ve&&g.mode&1){var Re=Kl(c);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),Ql(Re,c,g,a,t),Lo(_r(v,g));break e}}a=v=_r(v,g),Ee!==4&&(Ee=2),fn===null?fn=[a]:fn.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var D=$l(a,v,t);vl(a,D);break e;case 1:g=v;var k=a.type,W=a.stateNode;if((a.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(qt===null||!qt.has(W)))){a.flags|=65536,t&=-t,a.lanes|=t;var H=Yl(a,g,t);vl(a,H);break e}}a=a.return}while(a!==null)}Dc(r)}catch(Z){t=Z,_e===r&&r!==null&&(_e=r=r.return);continue}break}while(!0)}function Rc(){var e=ms.current;return ms.current=ls,e===null?ls:e}function Fi(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),We===null||(rr&268435455)===0&&(fs&268435455)===0||Vt(We,Ae)}function xs(e,t){var r=ce;ce|=2;var o=Rc();(We!==e||Ae!==t)&&(Dt=null,sr(e,t));do try{zd();break}catch(i){Tc(e,i)}while(!0);if(Ho(),ce=r,ms.current=o,_e!==null)throw Error(S(261));return We=null,Ae=0,Ee}function zd(){for(;_e!==null;)_c(_e)}function Bd(){for(;_e!==null&&!au();)_c(_e)}function _c(e){var t=Wc(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Dc(e):_e=t,xi.current=null}function Dc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Dd(r,t,Ze),r!==null){_e=r;return}}else{if(r=Ed(r,t),r!==null){r.flags&=32767,_e=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,_e=null;return}}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Ee===0&&(Ee=5)}function or(e,t,r){var o=me,i=st.transition;try{st.transition=null,me=1,Id(e,t,r,o)}finally{st.transition=i,me=o}return null}function Id(e,t,r,o){do Wr();while(Ht!==null);if((ce&6)!==0)throw Error(S(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(yu(e,a),e===We&&(_e=We=null,Ae=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ys||(ys=!0,jc(Tn,function(){return Wr(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=st.transition,st.transition=null;var c=me;me=1;var g=ce;ce|=4,xi.current=null,Wd(e,r),bc(r,e),nd(Fo),jn=!!Eo,Fo=Eo=null,e.current=r,jd(r),lu(),ce=g,me=c,st.transition=a}else e.current=r;if(ys&&(ys=!1,Ht=e,bs=i),a=e.pendingLanes,a===0&&(qt=null),du(r.stateNode),Ge(e,Te()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],o(i.value,{componentStack:i.stack,digest:i.digest});if(gs)throw gs=!1,e=Ci,Ci=null,e;return(bs&1)!==0&&e.tag!==0&&Wr(),a=e.pendingLanes,(a&1)!==0?e===Ti?gn++:(gn=0,Ti=e):gn=0,Ot(),null}function Wr(){if(Ht!==null){var e=ga(bs),t=st.transition,r=me;try{if(st.transition=null,me=16>e?16:e,Ht===null)var o=!1;else{if(e=Ht,Ht=null,bs=0,(ce&6)!==0)throw Error(S(331));var i=ce;for(ce|=4,J=e.current;J!==null;){var a=J,c=a.child;if((J.flags&16)!==0){var g=a.deletions;if(g!==null){for(var v=0;v<g.length;v++){var j=g[v];for(J=j;J!==null;){var P=J;switch(P.tag){case 0:case 11:case 15:hn(8,P,a)}var L=P.child;if(L!==null)L.return=P,J=L;else for(;J!==null;){P=J;var I=P.sibling,Y=P.return;if(hc(P),P===j){J=null;break}if(I!==null){I.return=Y,J=I;break}J=Y}}}var Q=a.alternate;if(Q!==null){var X=Q.child;if(X!==null){Q.child=null;do{var Re=X.sibling;X.sibling=null,X=Re}while(X!==null)}}J=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,J=c;else e:for(;J!==null;){if(a=J,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:hn(9,a,a.return)}var D=a.sibling;if(D!==null){D.return=a.return,J=D;break e}J=a.return}}var k=e.current;for(J=k;J!==null;){c=J;var W=c.child;if((c.subtreeFlags&2064)!==0&&W!==null)W.return=c,J=W;else e:for(c=k;J!==null;){if(g=J,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:hs(9,g)}}catch(Z){Ce(g,g.return,Z)}if(g===c){J=null;break e}var H=g.sibling;if(H!==null){H.return=g.return,J=H;break e}J=g.return}}if(ce=i,Ot(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Rn,e)}catch{}o=!0}return o}finally{me=r,st.transition=t}}return!1}function Ec(e,t,r){t=_r(r,t),t=$l(e,t,1),e=Nt(e,t,1),t=Ne(),e!==null&&(Pr(e,1,t),Ge(e,t))}function Ce(e,t,r){if(e.tag===3)Ec(e,e,r);else for(;t!==null;){if(t.tag===3){Ec(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qt===null||!qt.has(o))){e=_r(r,e),e=Yl(t,e,1),t=Nt(t,e,1),e=Ne(),t!==null&&(Pr(t,1,e),Ge(t,e));break}}t=t.return}}function Od(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&r,We===e&&(Ae&r)===r&&(Ee===4||Ee===3&&(Ae&130023424)===Ae&&500>Te()-Si?sr(e,0):ki|=r),Ge(e,t)}function Fc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Dn,Dn<<=1,(Dn&130023424)===0&&(Dn=4194304)));var r=Ne();e=Tt(e,t),e!==null&&(Pr(e,t,r),Ge(e,r))}function Pd(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Fc(e,r)}function Nd(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(S(314))}o!==null&&o.delete(t),Fc(e,r)}var Wc;Wc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Ue=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Ue=!1,_d(e,t,r);Ue=(e.flags&131072)!==0}else Ue=!1,ve&&(t.flags&1048576)!==0&&ul(t,Kn,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ds(e,t),e=t.pendingProps;var i=wr(t,ze.current);Tr(t,r),i=ei(null,t,o,e,i,r);var a=ti();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(o)?(a=!0,$n(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$o(t),i.updater=cs,t.stateNode=i,i._reactInternals=t,ai(t,o,e,r),t=di(null,t,o,!0,a,r)):(t.tag=0,ve&&a&&Io(t),Pe(null,t,i,r),t=t.child),t;case 16:o=t.elementType;e:{switch(ds(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=qd(o),e=ut(o,e),i){case 0:t=ui(null,t,o,e,r);break e;case 1:t=nc(null,t,o,e,r);break e;case 11:t=Xl(null,t,o,e,r);break e;case 14:t=Zl(null,t,o,ut(o.type,e),r);break e}throw Error(S(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ut(o,i),ui(e,t,o,i,r);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ut(o,i),nc(e,t,o,i,r);case 3:e:{if(sc(t),e===null)throw Error(S(387));o=t.pendingProps,a=t.memoizedState,i=a.element,wl(e,t),rs(t,o,null,r);var c=t.memoizedState;if(o=c.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=_r(Error(S(423)),t),t=oc(e,t,o,r,i);break e}else if(o!==i){i=_r(Error(S(424)),t),t=oc(e,t,o,r,i);break e}else for(Xe=zt(t.stateNode.containerInfo.firstChild),Qe=t,ve=!0,ct=null,r=yl(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(kr(),o===i){t=_t(e,t,r);break e}Pe(e,t,o,r)}t=t.child}return t;case 5:return kl(t),e===null&&No(t),o=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,c=i.children,Wo(o,i)?c=null:a!==null&&Wo(o,a)&&(t.flags|=32),rc(e,t),Pe(e,t,c,r),t.child;case 6:return e===null&&No(t),null;case 13:return ic(e,t,r);case 4:return Yo(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Sr(t,null,o,r):Pe(e,t,o,r),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ut(o,i),Xl(e,t,o,i,r);case 7:return Pe(e,t,t.pendingProps,r),t.child;case 8:return Pe(e,t,t.pendingProps.children,r),t.child;case 12:return Pe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,a=t.memoizedProps,c=i.value,ge(Zn,o._currentValue),o._currentValue=c,a!==null)if(lt(a.value,c)){if(a.children===i.children&&!qe.current){t=_t(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var g=a.dependencies;if(g!==null){c=a.child;for(var v=g.firstContext;v!==null;){if(v.context===o){if(a.tag===1){v=Rt(-1,r&-r),v.tag=2;var j=a.updateQueue;if(j!==null){j=j.shared;var P=j.pending;P===null?v.next=v:(v.next=P.next,P.next=v),j.pending=v}}a.lanes|=r,v=a.alternate,v!==null&&(v.lanes|=r),Vo(a.return,r,t),g.lanes|=r;break}v=v.next}}else if(a.tag===10)c=a.type===t.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(S(341));c.lanes|=r,g=c.alternate,g!==null&&(g.lanes|=r),Vo(c,r,t),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===t){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}Pe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,Tr(t,r),i=rt(i),o=o(i),t.flags|=1,Pe(e,t,o,r),t.child;case 14:return o=t.type,i=ut(o,t.pendingProps),i=ut(o.type,i),Zl(e,t,o,i,r);case 15:return ec(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ut(o,i),ds(e,t),t.tag=1,He(o)?(e=!0,$n(t)):e=!1,Tr(t,r),Vl(t,o,i),ai(t,o,i,r),di(null,t,o,!0,e,r);case 19:return lc(e,t,r);case 22:return tc(e,t,r)}throw Error(S(156,t.tag))};function jc(e,t){return da(e,t)}function Ld(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,r,o){return new Ld(e,t,r,o)}function Wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qd(e){if(typeof e=="function")return Wi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mt)return 11;if(e===ft)return 14}return 2}function Gt(e,t){var r=e.alternate;return r===null?(r=ot(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ks(e,t,r,o,i,a){var c=2;if(o=e,typeof e=="function")Wi(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case C:return ir(r.children,i,a,t);case y:c=8,i|=8;break;case G:return e=ot(12,r,t,i|2),e.elementType=G,e.lanes=a,e;case Ye:return e=ot(13,r,t,i),e.elementType=Ye,e.lanes=a,e;case it:return e=ot(19,r,t,i),e.elementType=it,e.lanes=a,e;case Se:return Ss(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:c=10;break e;case oe:c=9;break e;case mt:c=11;break e;case ft:c=14;break e;case Le:c=16,o=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=ot(c,r,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function ir(e,t,r,o){return e=ot(7,e,o,t),e.lanes=r,e}function Ss(e,t,r,o){return e=ot(22,e,o,t),e.elementType=Se,e.lanes=r,e.stateNode={isHidden:!1},e}function ji(e,t,r){return e=ot(6,e,null,t),e.lanes=r,e}function Mi(e,t,r){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hd(e,t,r,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oo(0),this.expirationTimes=oo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oo(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ai(e,t,r,o,i,a,c,g,v){return e=new Hd(e,t,r,g,v),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ot(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(a),e}function Ud(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Mc(e){if(!e)return It;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(He(r))return al(e,r,t)}return t}function Ac(e,t,r,o,i,a,c,g,v){return e=Ai(r,o,!0,e,i,a,c,g,v),e.context=Mc(null),r=e.current,o=Ne(),i=Ut(r),a=Rt(o,i),a.callback=t??null,Nt(r,a,i),e.current.lanes=i,Pr(e,i,o),Ge(e,o),e}function Cs(e,t,r,o){var i=t.current,a=Ne(),c=Ut(i);return r=Mc(r),t.context===null?t.context=r:t.pendingContext=r,t=Rt(a,c),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Nt(i,t,c),e!==null&&(ht(e,i,c,a),ts(e,i,c)),c}function Ts(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function zi(e,t){zc(e,t),(e=e.alternate)&&zc(e,t)}function Vd(){return null}var Bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bi(e){this._internalRoot=e}Rs.prototype.render=Bi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Cs(e,t,null,null)},Rs.prototype.unmount=Bi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){Cs(null,e,null,null)}),t[xt]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=wa();e={blockedOn:null,target:e,priority:t};for(var r=0;r<jt.length&&t!==0&&t<jt[r].priority;r++);jt.splice(r,0,e),r===0&&ka(e)}};function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function Gd(e,t,r,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var j=Ts(c);a.call(j)}}var c=Ac(t,o,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=c,e[xt]=c.current,Zr(e.nodeType===8?e.parentNode:e),nr(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var g=o;o=function(){var j=Ts(v);g.call(j)}}var v=Ai(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=v,e[xt]=v.current,Zr(e.nodeType===8?e.parentNode:e),nr(function(){Cs(t,v,r,o)}),v}function Ds(e,t,r,o,i){var a=r._reactRootContainer;if(a){var c=a;if(typeof i=="function"){var g=i;i=function(){var v=Ts(c);g.call(v)}}Cs(t,c,e,i)}else c=Gd(r,t,e,i,o);return Ts(c)}ya=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Or(t.pendingLanes);r!==0&&(io(t,r|1),Ge(t,Te()),(ce&6)===0&&(Fr=Te()+500,Ot()))}break;case 13:nr(function(){var o=Tt(e,1);if(o!==null){var i=Ne();ht(o,e,1,i)}}),zi(e,1)}},ao=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var r=Ne();ht(t,e,134217728,r)}zi(e,134217728)}},ba=function(e){if(e.tag===13){var t=Ut(e),r=Tt(e,t);if(r!==null){var o=Ne();ht(r,e,t,o)}zi(e,t)}},wa=function(){return me},va=function(e,t){var r=me;try{return me=e,t()}finally{me=r}},Zs=function(e,t,r){switch(t){case"input":if(Vs(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var i=Vn(o);if(!i)throw Error(S(90));Ui(o),Vs(o,i)}}}break;case"textarea":Ji(e,r);break;case"select":t=r.value,t!=null&&ar(e,!!r.multiple,t,!1)}},sa=Di,oa=nr;var $d={usingClientEntryPoint:!1,Events:[rn,yr,Vn,ra,na,Di]},yn={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yd={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:f.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ca(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Vd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{Rn=Es.inject(Yd),gt=Es}catch{}}return $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$d,$e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ii(t))throw Error(S(200));return Ud(e,t,null,r)},$e.createRoot=function(e,t){if(!Ii(e))throw Error(S(299));var r=!1,o="",i=Bc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ai(e,1,!1,null,null,r,!1,o,i),e[xt]=t.current,Zr(e.nodeType===8?e.parentNode:e),new Bi(t)},$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ca(t),e=e===null?null:e.stateNode,e},$e.flushSync=function(e){return nr(e)},$e.hydrate=function(e,t,r){if(!_s(t))throw Error(S(200));return Ds(null,e,t,!0,r)},$e.hydrateRoot=function(e,t,r){if(!Ii(e))throw Error(S(405));var o=r!=null&&r.hydratedSources||null,i=!1,a="",c=Bc;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),t=Ac(t,null,e,1,r??null,i,!1,a,c),e[xt]=t.current,Zr(e),o)for(e=0;e<o.length;e++)r=o[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Rs(t)},$e.render=function(e,t,r){if(!_s(t))throw Error(S(200));return Ds(null,e,t,!1,r)},$e.unmountComponentAtNode=function(e){if(!_s(e))throw Error(S(40));return e._reactRootContainer?(nr(function(){Ds(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1},$e.unstable_batchedUpdates=Di,$e.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!_s(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ds(e,t,r,!1,o)},$e.version="18.3.1-next-f1338f8080-20240426",$e}var Vc;function rp(){if(Vc)return Ni.exports;Vc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Ni.exports=tp(),Ni.exports}var Gc;function np(){if(Gc)return Fs;Gc=1;var l=rp();return Fs.createRoot=l.createRoot,Fs.hydrateRoot=l.hydrateRoot,Fs}var sp=np();const op={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},$c=[{id:"p1",num:"01",weeks:"Weeks 1-2",color:"#E8483F",title:"Getting Started — Setup, Syntax, Cargo",hook:"Install Rust, write your first programs, and learn the toolchain that makes Rust a joy to use",concepts:["**Installing Rust** — rustup, rustc, and cargo: the official toolchain manager, compiler, and build system","**Cargo** — Rust's package manager and build tool: `cargo new`, `cargo build`, `cargo run`, `cargo test`","**Cargo.toml** — the manifest file: [dependencies], [dev-dependencies], edition, version, features","**Variables and mutability** — `let` vs `let mut`: immutable by default, explicit opt-in to mutability","**Primitive types** — i8/i16/i32/i64/i128/isize, u8-u128/usize, f32/f64, bool, char (4 bytes, Unicode scalar)","**Type inference** — Rust infers types but you can always annotate: `let x: i32 = 42;`","**Functions** — `fn` keyword, parameters with types, return values with `->`, expression-based (no semicolon = return)","**Control flow** — `if`/`else`, `loop`, `while`, `for` with ranges and iterators, `break` with values","**Comments** — `//` line comments, `///` doc comments with Markdown, `//!` module-level docs","**Shadowing** — re-declaring a variable with the same name: changes type without `mut`","**The `println!` macro** — format strings with `{}` (Display), `{:?}` (Debug), `{:#?}` (pretty-print)","**rustfmt and clippy** — auto-formatting and the linter that catches 500+ common mistakes"],deliverable:"Build a temperature converter CLI (Fahrenheit/Celsius/Kelvin). Use cargo to manage the project, write unit tests, generate docs with `cargo doc`, and run clippy with zero warnings.",resources:[{type:"read",title:"The Rust Programming Language (The Book) — Ch. 1-3",url:"https://doc.rust-lang.org/book/ch01-00-getting-started.html"},{type:"read",title:"Rust By Example — Interactive examples",url:"https://doc.rust-lang.org/rust-by-example/"},{type:"video",title:"Let's Get Rusty — Rust for Beginners",url:"https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8"},{type:"read",title:"Rustlings — Small exercises to learn Rust",url:"https://github.com/rust-lang/rustlings"}]},{id:"p2",num:"02",weeks:"Weeks 3-4",color:"#D97706",title:"Ownership, Borrowing & the Borrow Checker",hook:"Rust's most unique feature — memory safety without garbage collection, enforced at compile time",concepts:["**Stack vs Heap** — stack is fast/fixed-size (primitives, references), heap is dynamic/slower (String, Vec, Box)","**Ownership rules** — each value has one owner, only one owner at a time, value dropped when owner goes out of scope","**Move semantics** — assigning a heap value transfers ownership: `let s2 = s1;` invalidates s1","**Copy trait** — types that live entirely on the stack (i32, bool, f64, char) are copied, not moved","**Clone trait** — explicit deep copy for heap data: `let s2 = s1.clone();` (potentially expensive)","**References and borrowing** — `&T` (shared/immutable reference), `&mut T` (exclusive/mutable reference)","**Borrowing rules** — unlimited `&T` OR exactly one `&mut T`, never both at the same time","**The borrow checker** — compile-time analysis that prevents data races, use-after-free, and dangling references","**Dangling references** — Rust prevents returning references to local variables at compile time","**String vs &str** — `String` owns heap data (growable), `&str` is a borrowed reference to a string slice (view)"],deliverable:"Rewrite a small C program with pointer bugs in Rust. Document each compiler error the borrow checker catches. Create a cheat sheet of ownership rules with before/after examples.",resources:[{type:"read",title:"The Rust Book — Ch. 4: Understanding Ownership",url:"https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html"},{type:"read",title:"Rust Reference — The Borrow Checker",url:"https://doc.rust-lang.org/reference/destructors.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Lifetime Annotations",url:"https://www.youtube.com/watch?v=rAl-9HwD858"},{type:"read",title:"Visualizing memory layout in Rust",url:"https://cheats.rs/#memory-layout"},{type:"infographic",title:"Rust Ownership Cheat Sheet (cheats.rs)",url:"https://cheats.rs/#ownership"}]},{id:"p3",num:"03",weeks:"Weeks 5-6",color:"#059669",title:"Structs, Enums & Pattern Matching",hook:"Algebraic data types meet exhaustive pattern matching — Rust's powerful type system",concepts:["**Named structs** — `struct Point { x: f64, y: f64 }`: the primary way to define custom types","**Tuple structs** — `struct Color(u8, u8, u8)`: unnamed fields, useful for newtypes and wrappers","**Unit structs** — `struct Marker;`: zero-size types used for trait implementations and type-level markers","**Methods and `impl` blocks** — `impl Point { fn distance(&self, other: &Point) -> f64 { ... } }`","**Associated functions** — functions on the type itself (no `self`): `Point::new(x, y)` (Rust's constructors)","**Enums with data** — `enum Shape { Circle(f64), Rectangle(f64, f64) }`: each variant can hold different data","**The `match` expression** — exhaustive pattern matching: every variant must be handled, compiler enforces it","**Pattern matching features** — guards (`if x > 0`), bindings (`@`), nested patterns, `_` wildcard","**`if let` and `while let`** — concise matching for single variants: `if let Some(x) = optional { ... }`","**The `Option<T>` type** — `Some(T)` or `None`: Rust's replacement for null, forces explicit handling","**Destructuring** — extract fields from structs, tuples, and enums in `let`, `match`, and function parameters"],deliverable:"Build a simple shape calculator: define Shape enum with Circle, Rectangle, Triangle variants, implement area/perimeter methods, use pattern matching for display. Add serialization with serde.",resources:[{type:"read",title:"The Rust Book — Ch. 5: Using Structs",url:"https://doc.rust-lang.org/book/ch05-00-structs.html"},{type:"read",title:"The Rust Book — Ch. 6: Enums and Pattern Matching",url:"https://doc.rust-lang.org/book/ch06-00-enums.html"},{type:"read",title:"Rust By Example — Custom Types",url:"https://doc.rust-lang.org/rust-by-example/custom_types.html"},{type:"video",title:"Let's Get Rusty — Enums & Pattern Matching",url:"https://www.youtube.com/watch?v=DSZqIJhkNCM"}]},{id:"p4",num:"04",weeks:"Weeks 7-8",color:"#7C3AED",title:"Error Handling — Result, Option, ?",hook:"No exceptions, no null — Rust uses types to make error handling explicit, composable, and safe",concepts:["**No exceptions in Rust** — errors are values, not control flow: `Result<T, E>` and `Option<T>`","**`panic!`** — unrecoverable errors that unwind the stack: array out-of-bounds, `.unwrap()` on None","**`Result<T, E>`** — `Ok(T)` for success, `Err(E)` for failure: the primary error handling type","**The `?` operator** — early return on error: `let data = file.read_to_string(&mut buf)?;` (propagation sugar)","**`unwrap()` and `expect()`** — extract the value or panic: `expect()` adds a message, both used for prototyping","**`map`, `and_then`, `unwrap_or`** — combinators for transforming Result/Option without match","**Custom error types** — `enum AppError { NotFound, PermissionDenied, ParseError(String) }`","**The `From` trait** — automatic error conversion: `impl From<io::Error> for AppError` enables `?`","**`thiserror` crate** — derive macro for custom error types with Display and From implementations","**`anyhow` crate** — `anyhow::Result<T>` for application code: wraps any error with context via `.context()`","**When to panic vs Result** — panic for bugs/invariants, Result for expected failures (I/O, parsing, network)"],deliverable:"Build a config file parser that reads TOML/JSON, validates fields, and returns meaningful errors. Use custom error types with thiserror for the library, anyhow for the CLI wrapper.",resources:[{type:"read",title:"The Rust Book — Ch. 9: Error Handling",url:"https://doc.rust-lang.org/book/ch09-00-error-handling.html"},{type:"read",title:"Rust By Example — Error Handling",url:"https://doc.rust-lang.org/rust-by-example/error.html"},{type:"read",title:"thiserror crate documentation",url:"https://docs.rs/thiserror/latest/thiserror/"},{type:"read",title:"anyhow crate documentation",url:"https://docs.rs/anyhow/latest/anyhow/"},{type:"video",title:"Jon Gjengset — Error Handling in Rust",url:"https://www.youtube.com/watch?v=jpVzSse7oJ4"}]},{id:"p5",num:"05",weeks:"Weeks 9-10",color:"#DC2626",title:"Collections & Iterators",hook:"Vec, HashMap, and the iterator adaptor chain — Rust's zero-cost abstraction for data processing",concepts:["**`Vec<T>`** — growable array on the heap: `push`, `pop`, `len`, `capacity`, `iter`, amortized O(1) append","**`HashMap<K, V>`** — hash map with SipHash (DoS-resistant): `insert`, `get`, `entry` API for upsert patterns","**`HashSet<T>`** — unique values backed by HashMap: set operations (union, intersection, difference)","**`BTreeMap` and `BTreeSet`** — sorted collections using B-trees: O(log n) operations, ordered iteration","**`VecDeque<T>`** — double-ended queue: efficient push/pop from both ends, used for BFS and sliding windows","**The `Iterator` trait** — `.next() -> Option<T>`: the foundation of Rust's iteration system","**Adaptor methods** — `map`, `filter`, `flat_map`, `take`, `skip`, `zip`, `enumerate`, `chain`, `peekable`","**Consuming methods** — `collect`, `sum`, `count`, `any`, `all`, `find`, `fold`, `reduce`, `min`, `max`","**`collect()` turbofish** — `let v: Vec<_> = iter.collect();` or `iter.collect::<Vec<_>>()` — type-driven collection","**Iterator laziness** — adaptors don't execute until consumed: `(0..1000000).filter(|x| x % 2 == 0).take(5)` only checks 10 numbers","**`into_iter()` vs `iter()` vs `iter_mut()`** — owned, shared reference, mutable reference iteration","**Zero-cost abstraction** — iterator chains compile to the same assembly as hand-written loops (LLVM optimizes)"],deliverable:"Build a word frequency counter: read a text file, tokenize, count words with HashMap, sort by frequency, display top N. Use only iterator chains (no explicit loops). Benchmark against a loop-based version.",resources:[{type:"read",title:"The Rust Book — Ch. 8: Common Collections",url:"https://doc.rust-lang.org/book/ch08-00-common-collections.html"},{type:"read",title:"The Rust Book — Ch. 13: Iterators",url:"https://doc.rust-lang.org/book/ch13-02-iterators.html"},{type:"read",title:"Rust std::collections module documentation",url:"https://doc.rust-lang.org/std/collections/index.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Iterators",url:"https://www.youtube.com/watch?v=yozQ9C69pNs"}]},{id:"p6",num:"06",weeks:"Weeks 11-12",color:"#0369A1",title:"Traits & Generics",hook:"Rust's answer to interfaces and templates — zero-cost polymorphism with trait bounds and monomorphization",concepts:["**Traits** — defining shared behavior: `trait Summary { fn summarize(&self) -> String; }` (like interfaces)","**Implementing traits** — `impl Summary for Article { ... }`: provide behavior for specific types","**Default implementations** — methods with bodies in the trait definition, overridable by implementors","**Trait bounds** — `fn notify(item: &impl Summary)` or `fn notify<T: Summary>(item: &T)` — generic constraints","**`where` clauses** — cleaner syntax for complex bounds: `where T: Display + Clone, U: Debug`","**Generics** — `fn largest<T: PartialOrd>(list: &[T]) -> &T`: write once, work for any type satisfying bounds","**Monomorphization** — compiler generates specialized code for each concrete type: zero runtime cost","**Common std traits** — `Display`, `Debug`, `Clone`, `Copy`, `PartialEq`, `Eq`, `PartialOrd`, `Ord`, `Hash`, `Default`","**Derive macros** — `#[derive(Debug, Clone, PartialEq)]`: auto-implement common traits","**Trait objects** — `dyn Trait`: dynamic dispatch via vtable, used when you need heterogeneous collections","**`impl Trait` in return position** — return an opaque type satisfying a trait (hides concrete type)","**Orphan rule** — you can only implement a trait for a type if you own the trait or the type (coherence)"],deliverable:"Build a plugin system: define a Plugin trait with init/execute/cleanup methods. Implement 3 plugins. Create a PluginManager that stores and runs them using both static dispatch (generics) and dynamic dispatch (trait objects). Benchmark the difference.",resources:[{type:"read",title:"The Rust Book — Ch. 10: Generic Types, Traits, Bounds",url:"https://doc.rust-lang.org/book/ch10-00-generics.html"},{type:"read",title:"Rust By Example — Traits",url:"https://doc.rust-lang.org/rust-by-example/trait.html"},{type:"read",title:"Rust Reference — Traits",url:"https://doc.rust-lang.org/reference/items/traits.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Dispatch and Fat Pointers",url:"https://www.youtube.com/watch?v=xcygqF5LVmM"}]},{id:"p7",num:"07",weeks:"Weeks 13-14",color:"#B91C1C",title:"Lifetimes — The Deep Dive",hook:"The borrow checker's secret weapon — how Rust tracks reference validity without runtime checks",concepts:["**What lifetimes are** — a compile-time annotation that tells Rust how long a reference is valid","**Why lifetimes exist** — prevent dangling references: the compiler needs to know a reference outlives its use","**Lifetime elision rules** — the compiler infers lifetimes in most cases: three rules cover ~90% of situations","**Explicit lifetime annotations** — `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str` — tie input/output lifetimes","**Lifetime in structs** — `struct Excerpt<'a> { part: &'a str }` — struct can't outlive the data it borrows","**Multiple lifetimes** — `fn foo<'a, 'b>(x: &'a str, y: &'b str) -> &'a str` — when inputs have different lifetimes","**`'static` lifetime** — data that lives for the entire program: string literals, leaked memory, owned types","**Lifetime bounds on traits** — `fn print_it<T: Display + 'a>(val: &'a T)` — constrain how long trait objects live","**Higher-Ranked Trait Bounds (HRTB)** — `for<'a> Fn(&'a str)`: the closure works for ANY lifetime","**Common lifetime errors** — returning references to local variables, mixing lifetimes in structs, iterator lifetimes",`**The lifetime mental model** — think of lifetimes as "scopes" — the compiler checks that references don't outlive their scope`],deliverable:"Build a text parser that returns borrowed slices of the input. Implement a cache struct that holds references with explicit lifetimes. Write examples that trigger every common lifetime error, then fix them.",resources:[{type:"read",title:"The Rust Book — Ch. 10.3: Validating References with Lifetimes",url:"https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"},{type:"read",title:"Rust Nomicon — Lifetimes",url:"https://doc.rust-lang.org/nomicon/lifetimes.html"},{type:"read",title:"Common Rust Lifetime Misconceptions",url:"https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md"},{type:"video",title:"Jon Gjengset — Crust of Rust: Lifetime Annotations",url:"https://www.youtube.com/watch?v=rAl-9HwD858"}]},{id:"p8",num:"08",weeks:"Weeks 15-16",color:"#15803D",title:"Smart Pointers — Box, Rc, Arc, RefCell",hook:"When ownership rules aren't enough — heap allocation, reference counting, and interior mutability",concepts:["**`Box<T>`** — heap allocation with single ownership: used for recursive types, large data, and trait objects","**Recursive types** — `enum List { Cons(i32, Box<List>), Nil }` — Box breaks infinite size at compile time","**`Deref` trait** — smart pointer auto-dereferencing: `*box_val` and automatic deref coercion (`&Box<T>` → `&T`)","**`Drop` trait** — custom cleanup when a value goes out of scope: RAII pattern, automatic resource management","**`Rc<T>`** — reference-counted pointer: multiple owners of the same data (single-threaded only)","**`Rc::clone` vs `.clone()`** — `Rc::clone` just increments the count (cheap), `.clone()` copies the data (expensive)","**`Arc<T>`** — atomic reference counting: thread-safe version of Rc, uses atomic operations (slightly slower)","**`RefCell<T>`** — interior mutability: borrow rules checked at runtime instead of compile time","**`RefCell` borrowing** — `.borrow()` returns `Ref<T>`, `.borrow_mut()` returns `RefMut<T>`, panics on violation","**`Rc<RefCell<T>>`** — the common pattern: multiple owners with mutable access (single-threaded)","**`Mutex<T>` and `RwLock<T>`** — thread-safe interior mutability for concurrent access (preview of concurrency)","**Memory leaks with Rc** — reference cycles cause leaks: use `Weak<T>` to break cycles"],deliverable:"Build a DOM-like tree structure using Rc<RefCell<Node>>. Each node has children (Vec) and a parent (Weak reference). Implement tree traversal, node insertion/deletion, and demonstrate cycle prevention with Weak.",resources:[{type:"read",title:"The Rust Book — Ch. 15: Smart Pointers",url:"https://doc.rust-lang.org/book/ch15-00-smart-pointers.html"},{type:"read",title:"Rust Nomicon — Working with Smart Pointers",url:"https://doc.rust-lang.org/nomicon/vec/vec.html"},{type:"video",title:"Let's Get Rusty — Smart Pointers",url:"https://www.youtube.com/watch?v=m76sRj2VgGo"},{type:"read",title:"Rust By Example — Rc and Arc",url:"https://doc.rust-lang.org/rust-by-example/std/rc.html"}]},{id:"p9",num:"09",weeks:"Weeks 17-18",color:"#9333EA",title:"Fearless Concurrency — Threads, Channels, Send/Sync",hook:"Data races eliminated at compile time — Rust's ownership system makes concurrent programming safe",concepts:["**`std::thread::spawn`** — creating OS threads: takes a closure, returns JoinHandle for waiting","**`move` closures** — transfer ownership of captured variables into the spawned thread","**`Send` trait** — types that can be transferred between threads: most types are Send, Rc is not","**`Sync` trait** — types that can be shared between threads via references: `T: Sync` means `&T: Send`","**`Arc<Mutex<T>>`** — the standard pattern for shared mutable state across threads","**`Mutex<T>`** — mutual exclusion lock: `.lock()` returns `MutexGuard` (RAII lock, auto-released on drop)","**`RwLock<T>`** — multiple readers OR one writer: better throughput for read-heavy workloads","**Channels** — `mpsc::channel()`: multiple producer, single consumer message passing","**Channel patterns** — bounded vs unbounded, `send`/`recv`, `try_recv` for non-blocking, `select!` macro","**Deadlock prevention** — Rust prevents data races but NOT deadlocks: consistent lock ordering is your job","**`Rayon` crate** — parallel iterators: `par_iter()` drops in to replace `iter()` for automatic parallelism","**`crossbeam` crate** — scoped threads (borrow stack data), lock-free data structures, channels"],deliverable:"Build a parallel web scraper: spawn N worker threads, distribute URLs via channels, collect results with Arc<Mutex<Vec>>. Compare single-threaded vs multi-threaded vs Rayon parallel iterator performance.",resources:[{type:"read",title:"The Rust Book — Ch. 16: Fearless Concurrency",url:"https://doc.rust-lang.org/book/ch16-00-concurrency.html"},{type:"read",title:"Rust Atomics and Locks by Mara Bos (free online)",url:"https://marabos.nl/atomics/"},{type:"read",title:"Rayon crate documentation",url:"https://docs.rs/rayon/latest/rayon/"},{type:"video",title:"Jon Gjengset — Crust of Rust: Channels",url:"https://www.youtube.com/watch?v=b4mS5UPHh20"},{type:"read",title:"Crossbeam crate documentation",url:"https://docs.rs/crossbeam/latest/crossbeam/"}]},{id:"p10",num:"10",weeks:"Weeks 19-20",color:"#EA580C",title:"Closures & Functional Programming",hook:"First-class functions, three closure traits, and zero-cost functional patterns in a systems language",concepts:["**Closures** — anonymous functions that capture their environment: `|x| x + 1`","**Closure capture modes** — by reference (`&T`), by mutable reference (`&mut T`), by value (`T`) — compiler infers","**`move` keyword** — force ownership transfer into closure: required for spawning threads, returning closures","**`Fn` trait** — closure borrows captured values immutably: can be called multiple times","**`FnMut` trait** — closure borrows captured values mutably: can be called multiple times but mutates","**`FnOnce` trait** — closure takes ownership of captured values: can only be called once (consumes captures)","**Closures as parameters** — `fn apply<F: Fn(i32) -> i32>(f: F, x: i32)` or `fn apply(f: impl Fn(i32) -> i32, x: i32)`","**Returning closures** — `fn make_adder(n: i32) -> impl Fn(i32) -> i32 { move |x| x + n }` (requires `impl Trait` or `Box<dyn>`)","**Functional patterns** — `map`, `filter`, `fold`, `flat_map`, `zip` — composable data transformation pipelines","**`Option` and `Result` combinators** — `map`, `and_then`, `or_else`, `unwrap_or_else` — monadic chaining"],deliverable:"Build a data processing pipeline for CSV data: read → parse → filter → transform → aggregate → output, using only closures and iterator chains. Implement a custom `map`/`filter`/`fold` from scratch to understand the trait system.",resources:[{type:"read",title:"The Rust Book — Ch. 13: Closures",url:"https://doc.rust-lang.org/book/ch13-01-closures.html"},{type:"read",title:"Rust By Example — Closures",url:"https://doc.rust-lang.org/rust-by-example/fn/closures.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Iterators",url:"https://www.youtube.com/watch?v=yozQ9C69pNs"},{type:"read",title:"Rust Reference — Closure types",url:"https://doc.rust-lang.org/reference/types/closure.html"}]},{id:"p11",num:"11",weeks:"Weeks 21-22",color:"#0E7490",title:"Modules, Crates & Cargo Mastery",hook:"Organizing Rust code at scale — modules, visibility, workspaces, and the crates.io ecosystem",concepts:["**Modules** — `mod my_module { ... }` or `mod my_module;` (loads from file): namespaces for organizing code","**File structure** — `src/lib.rs` (library root), `src/main.rs` (binary root), `src/module_name.rs` or `src/module_name/mod.rs`","**Visibility** — `pub` (public), `pub(crate)` (crate-only), `pub(super)` (parent module), private by default","**`use` declarations** — `use std::collections::HashMap;`, `use crate::module::Type;`, re-exports with `pub use`","**Crates** — compilation units: binary crates (`main.rs`) and library crates (`lib.rs`)","**Cargo workspaces** — multi-crate projects: shared `Cargo.lock`, unified `target/`, cross-crate dependencies",'**`Cargo.toml` features** — conditional compilation: `features = ["serde"]`, `#[cfg(feature = "serde")]`',"**Cargo profiles** — `[profile.dev]` (fast compilation, debug), `[profile.release]` (optimized, LTO, strip)","**Publishing to crates.io** — `cargo publish`, semantic versioning, documentation with `cargo doc`","**Build scripts** — `build.rs`: run code before compilation (code generation, C library linking, protobuf)",'**Conditional compilation** — `#[cfg(target_os = "linux")]`, `#[cfg(test)]`, `#[cfg(feature = "async")]`'],deliverable:"Refactor a monolithic Rust project into a workspace with 3 crates: a core library, a CLI binary, and a shared utilities crate. Add feature flags for optional functionality. Publish the library to crates.io.",resources:[{type:"read",title:"The Rust Book — Ch. 7: Managing Growing Projects",url:"https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html"},{type:"read",title:"The Cargo Book — Workspaces",url:"https://doc.rust-lang.org/cargo/reference/workspaces.html"},{type:"read",title:"The Cargo Book — Features",url:"https://doc.rust-lang.org/cargo/reference/features.html"},{type:"video",title:"Let's Get Rusty — Rust Modules",url:"https://www.youtube.com/watch?v=5RPXgDQrjio"}]},{id:"p12",num:"12",weeks:"Weeks 23-24",color:"#DC2626",title:"Async Rust — Tokio, Futures, Pinning",hook:"High-performance I/O without threads — Rust's async/await with zero-cost futures and the Tokio runtime",concepts:["**`async fn` and `.await`** — declare async functions, `.await` suspends until the future completes","**`Future` trait** — `fn poll(self: Pin<&mut Self>, cx: &mut Context) -> Poll<T>`: the core abstraction","**Lazy futures** — Rust futures do nothing until polled (unlike JavaScript Promises which start immediately)","**Tokio runtime** — `#[tokio::main]` provides the event loop, task scheduler, I/O driver, and timers","**`tokio::spawn`** — spawn a task on the runtime: lightweight (like goroutines), not OS threads","**`tokio::select!`** — race multiple futures: the first to complete wins, others are cancelled","**`tokio::join!`** — run multiple futures concurrently and wait for all to complete","**Async channels** — `tokio::sync::mpsc`, `broadcast`, `watch`, `oneshot` — async message passing","**`Pin<&mut T>`** — prevents moving a future after it has been polled (self-referential safety)","**`Send` and `'static` bounds** — spawned tasks must be `Send + 'static` (no borrowed data across await points)","**`Stream` trait** — async iterator: `fn poll_next() -> Poll<Option<Item>>`, used for async data streams","**Common pitfalls** — holding locks across `.await`, blocking the runtime, accidentally sequential code"],deliverable:"Build an async HTTP server with Tokio: handle concurrent connections, implement timeouts with `tokio::select!`, use channels for inter-task communication. Compare throughput against a synchronous version using `wrk` or `hey`.",resources:[{type:"read",title:"Async Book — Asynchronous Programming in Rust",url:"https://rust-lang.github.io/async-book/"},{type:"read",title:"Tokio Tutorial — Official Guide",url:"https://tokio.rs/tokio/tutorial"},{type:"read",title:"Pin and Suffering — Understanding Pin",url:"https://fasterthanli.me/articles/pin-and-suffering"},{type:"video",title:"Jon Gjengset — Crust of Rust: async/await",url:"https://www.youtube.com/watch?v=ThjvMReOXYM"},{type:"read",title:"Tokio documentation",url:"https://docs.rs/tokio/latest/tokio/"}]},{id:"p13",num:"13",weeks:"Weeks 25-26",color:"#7C2D12",title:"Unsafe Rust, FFI & Macros",hook:"Breaking out of the sandbox — raw pointers, calling C, and metaprogramming with macros",concepts:["**`unsafe` blocks** — opt into five superpowers: deref raw pointers, call unsafe fns, access mutable statics, implement unsafe traits, access union fields","**Raw pointers** — `*const T` and `*mut T`: no borrow checker guarantees, can be null, can alias","**`unsafe` functions** — `unsafe fn dangerous() { ... }`: document and enforce invariants manually","**`unsafe` traits** — `unsafe trait Send { }` and `unsafe impl Send for MyType { }`: the implementor guarantees safety",'**FFI (Foreign Function Interface)** — `extern "C" fn` to call C code, `#[no_mangle]` to expose Rust functions to C',"**`bindgen`** — auto-generate Rust FFI bindings from C header files","**Declarative macros** — `macro_rules!`: pattern matching on syntax trees (`vec![1,2,3]`, `println!`)","**Procedural macros** — three kinds: derive macros (`#[derive(Serialize)]`), attribute macros (`#[route(GET)]`), function-like macros","**`syn` and `quote` crates** — parse Rust syntax (`syn`) and generate Rust code (`quote!`) in proc macros","**When to use unsafe** — only when the borrow checker is too conservative, always wrap in safe abstraction","**`std::mem::transmute`** — reinterpret bits as a different type: extremely dangerous, rarely needed"],deliverable:"Write a Rust wrapper around a C library (e.g., SQLite or zlib) using FFI. Create a derive macro that auto-generates a builder pattern for structs. Document all unsafe blocks with safety invariants.",resources:[{type:"read",title:"The Rust Book — Ch. 19: Advanced Features (Unsafe)",url:"https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html"},{type:"read",title:"The Rustonomicon — The Dark Arts of Unsafe Rust",url:"https://doc.rust-lang.org/nomicon/"},{type:"read",title:"The Rust Book — Ch. 19.5: Macros",url:"https://doc.rust-lang.org/book/ch19-06-macros.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Procedural Macros",url:"https://www.youtube.com/watch?v=geovSK3wMB8"},{type:"read",title:"bindgen User Guide",url:"https://rust-lang.github.io/rust-bindgen/"}]},{id:"p14",num:"14",weeks:"Weeks 27-30",color:"#111827",title:"Real-World Rust — CLI, Web, Embedded, WASM",hook:"The capstone — apply everything to build production Rust across four domains",concepts:["**CLI with `clap`** — argument parsing with derive macros: subcommands, flags, validation, shell completions","**CLI with `ratatui`** — terminal UI framework: dashboards, interactive menus, real-time displays","**Web with `Axum`** — async web framework by Tokio team: extractors, middleware, state management, routing","**Web with `Actix-web`** — actor-based web framework: high performance, WebSockets, middleware","**`serde`** — serialization/deserialization: `#[derive(Serialize, Deserialize)]` for JSON, TOML, YAML, MessagePack","**`sqlx`** — compile-time checked SQL queries: async, PostgreSQL/MySQL/SQLite, no ORM overhead","**Embedded Rust** — `#![no_std]` for bare-metal: no heap, no OS, direct hardware access with HAL crates","**`embedded-hal`** — hardware abstraction layer: GPIO, SPI, I2C, UART — write once, run on any microcontroller","**WebAssembly (WASM)** — compile Rust to `.wasm`: run in browsers, edge functions, and plugin systems","**`wasm-bindgen`** — seamless Rust/JavaScript interop: call DOM APIs, export Rust functions to JS","**`wasm-pack`** — build/test/publish Rust WASM packages: integrates with npm and webpack","**Performance profiling** — `cargo flamegraph`, `criterion` for benchmarks, `perf` on Linux, DHAT for heap profiling"],deliverable:"Choose two: (A) CLI tool with clap + ratatui, (B) REST API with Axum + sqlx + serde, (C) embedded LED controller for Raspberry Pi Pico, (D) WASM game of life in the browser. Deploy and publish.",resources:[{type:"read",title:"Command Line Applications in Rust (mdBook)",url:"https://rust-cli.github.io/book/"},{type:"read",title:"Axum documentation and examples",url:"https://docs.rs/axum/latest/axum/"},{type:"read",title:"The Embedded Rust Book",url:"https://docs.rust-embedded.org/book/"},{type:"read",title:"Rust and WebAssembly Book",url:"https://rustwasm.github.io/docs/book/"},{type:"video",title:"Let's Get Rusty — Full Rust Project",url:"https://www.youtube.com/watch?v=XZtlD_m59sM"}]}],ip=[{value:"9yr",label:"Most-loved lang (Stack Overflow)"},{value:"0",label:"Garbage collector overhead"},{value:"~85%",label:"C/C++ speed with memory safety"},{value:"14",label:"Phases to mastery"}];function ap(){const[l,s]=N.useState(null),[S,V]=N.useState(new Set),A=$c.reduce((x,F)=>x+F.concepts.length,0),M=Math.round(S.size/A*100),U=x=>{const F=x.split(`
`);if(F.some(z=>z.trim().startsWith("|"))){const z=[],E=[];let p=!1;return F.forEach(w=>{w.trim().startsWith("|")?(p=!0,z.push(w)):(p&&z.length>0&&(E.push({type:"table",lines:[...z]}),z.length=0,p=!1),E.push({type:"text",content:w}))}),z.length>0&&E.push({type:"table",lines:[...z]}),E.map((w,T)=>{var d;if(w.type==="table"){const h=w.lines.filter(f=>!f.match(/^\|\s*[-:]+/)),u=((d=h[0])==null?void 0:d.split("|").filter(f=>f.trim()).map(f=>f.trim()))||[],b=h.slice(1).map(f=>f.split("|").filter(B=>B.trim()).map(B=>B.trim()));return n.jsx("div",{style:{overflowX:"auto",margin:"8px 0"},children:n.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontFamily:"'DM Sans', sans-serif",fontSize:12},children:[n.jsx("thead",{children:n.jsx("tr",{children:u.map((f,B)=>n.jsx("th",{style:{padding:"6px 10px",borderBottom:"2px solid #E0DDD6",textAlign:"left",fontWeight:600,color:"#1a1a1a",background:"#FAF9F6"},children:f},B))})}),n.jsx("tbody",{children:b.map((f,B)=>n.jsx("tr",{children:f.map((R,C)=>n.jsx("td",{style:{padding:"5px 10px",borderBottom:"1px solid #F0EDE6",color:"#444"},children:R},C))},B))})]})},T)}const m=w.content.split(/\*\*(.*?)\*\*/g);return n.jsx("span",{children:m.map((h,u)=>u%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:700},children:h},u):n.jsx("span",{children:h},u))},T)})}return x.split(/\*\*(.*?)\*\*/g).map((z,E)=>E%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:700},children:z},E):n.jsx("span",{children:z},E))};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{style:{padding:"56px 28px 40px",maxWidth:920,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:12},children:"30-WEEK LEARNING ROADMAP"}),n.jsx("h1",{style:{fontSize:"clamp(32px, 5vw, 52px)",fontWeight:700,lineHeight:1.05,marginBottom:12,fontStyle:"italic"},children:"Mastering Rust"}),n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15,color:"#555",lineHeight:1.7,maxWidth:680,marginBottom:18},children:"From zero to systems-level mastery. Rust's ownership model, type system, and fearless concurrency give you the performance of C++ with the safety guarantees of a garbage-collected language. This roadmap covers everything: ownership and borrowing, traits and generics, lifetimes, async/await with Tokio, unsafe Rust and FFI, macros, and real-world applications across CLI, web, embedded, and WebAssembly."}),n.jsx("div",{style:{padding:"12px 16px",background:"#FFFBEB",border:"1px solid #FDE68A",borderRadius:8,marginBottom:28},children:n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#78350F",lineHeight:1.6},children:[n.jsx("strong",{children:"📖 Primary resource:"})," ",n.jsx("em",{children:"The Rust Programming Language"})," by Steve Klabnik and Carol Nichols — the official Rust book, ",n.jsx("a",{href:"https://doc.rust-lang.org/book/",target:"_blank",rel:"noopener noreferrer",style:{color:"#B45309",fontWeight:600},children:"freely available online"}),". Supplemented with Jon Gjengset's Crust of Rust series and the Rustonomicon for advanced topics."]})}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:32},children:ip.map((x,F)=>n.jsxs("div",{style:{background:"white",border:"1px solid #E0DDD6",borderRadius:8,padding:"14px 16px"},children:[n.jsx("div",{style:{fontFamily:"'Source Serif 4', serif",fontSize:22,fontWeight:700,color:"#1a1a1a",lineHeight:1,marginBottom:4},children:x.value}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888",lineHeight:1.4},children:x.label})]},F))}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif",marginBottom:12},children:[n.jsx("div",{style:{flex:1,height:8,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${M}%`,height:"100%",background:"linear-gradient(90deg, #E8483F, #D97706, #059669, #7C3AED, #DC2626, #0369A1, #B91C1C, #15803D, #9333EA, #EA580C, #0E7490, #DC2626, #7C2D12, #111827)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[S.size,"/",A," concepts"]})]}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#aaa"},children:"Check off concepts as you master them. Target: all 14 phases in ~30 weeks."})]}),n.jsx("div",{style:{maxWidth:920,margin:"0 auto",padding:"0 28px 64px"},children:$c.map(x=>{const F=l===x.id,q=x.concepts.filter((z,E)=>S.has(`${x.id}-${E}`)).length;return n.jsxs("div",{className:"ph",style:{background:"white",borderRadius:12,marginBottom:14,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(F?null:x.id),style:{padding:"22px 24px",display:"flex",alignItems:"center",gap:18,cursor:"pointer"},children:[n.jsxs("div",{style:{width:52,height:52,borderRadius:10,background:x.color,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0,fontFamily:"'JetBrains Mono', monospace"},children:[n.jsx("div",{style:{fontSize:9,fontWeight:600,opacity:.75},children:"PHASE"}),n.jsx("div",{style:{fontSize:19,fontWeight:700,lineHeight:1},children:x.num})]}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,flexWrap:"wrap",marginBottom:3},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:16,fontWeight:700,color:"#1a1a1a"},children:x.title}),n.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,color:"#aaa",fontWeight:500},children:x.weeks})]}),n.jsx("div",{style:{fontFamily:"'Source Serif 4', serif",fontSize:13,color:"#666",fontStyle:"italic",lineHeight:1.5},children:x.hook})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:4,fontWeight:500},children:[q,"/",x.concepts.length]}),n.jsx("span",{className:"ar",style:{transform:F?"rotate(90deg)":"rotate(0)"},children:"›"})]}),F&&n.jsxs("div",{style:{padding:"0 24px 24px"},children:[n.jsx("div",{style:{height:1,background:"#F0EDE6",marginBottom:20}}),n.jsxs("div",{style:{marginBottom:22},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:x.color,marginBottom:10},children:"Concepts to Master"}),x.concepts.map((z,E)=>{const p=`${x.id}-${E}`,w=S.has(p);return n.jsxs("div",{className:"cc",onClick:()=>{const T=new Set(S);T.has(p)?T.delete(p):T.add(p),V(T)},style:{padding:"8px 10px",display:"flex",alignItems:"flex-start",gap:10,borderRadius:6},children:[n.jsx("div",{className:`ck ${w?"d":""}`,style:{marginTop:2},children:w&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,lineHeight:1.6,color:w?"#aaa":"#333",textDecoration:w?"line-through":"none",flex:1},children:U(z)})]},E)})]}),n.jsxs("div",{style:{padding:"14px 16px",background:`${x.color}0A`,border:`1px solid ${x.color}30`,borderRadius:8,marginBottom:18},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:x.color,marginBottom:6},children:"🎯 Deliverable"}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#444",lineHeight:1.6},children:x.deliverable})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"#888",marginBottom:8},children:"📚 Resources"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:3},children:x.resources.map((z,E)=>{const p=op[z.type];return n.jsxs("a",{href:z.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:p.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:p.bg,color:p.color},children:[p.emoji," ",p.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:z.title})]},E)})})]})]})]},x.id)})}),n.jsx("div",{style:{maxWidth:920,margin:"0 auto",padding:"0 28px 64px"},children:n.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #2a2a3a 100%)",borderRadius:12,padding:"36px 32px",color:"white"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",opacity:.6,marginBottom:12},children:"Post-Roadmap"}),n.jsx("h2",{style:{fontFamily:"'Source Serif 4', serif",fontSize:28,fontWeight:700,marginBottom:14,lineHeight:1.2},children:"You now think in ownership and lifetimes"}),n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,lineHeight:1.7,opacity:.85,marginBottom:20},children:"By the end of 30 weeks, you'll have: mastered ownership and borrowing, written generic code with trait bounds, understood lifetimes at a deep level, built concurrent systems with fearless concurrency, written async code with Tokio, used unsafe Rust responsibly, created procedural macros, and shipped real-world applications across CLI, web, embedded, and WebAssembly. You'll understand — at a first-principles level — why Rust eliminates entire classes of bugs at compile time while delivering C-level performance."}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:14,marginTop:24},children:[{label:"Memory Safety",value:"Ownership, borrowing, lifetimes, borrow checker, RAII"},{label:"Type System",value:"Traits, generics, enums, pattern matching, monomorphization"},{label:"Concurrency",value:"Threads, channels, Arc/Mutex, Send/Sync, Rayon"},{label:"Async",value:"Futures, Tokio, async/await, Pin, streams"},{label:"Advanced",value:"Unsafe, FFI, macros, proc macros, WASM"},{label:"Ecosystem",value:"Cargo, serde, clap, axum, sqlx, embedded-hal"}].map((x,F)=>n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:9,fontWeight:700,letterSpacing:2,textTransform:"uppercase",opacity:.5,marginBottom:4},children:x.label}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,opacity:.85,lineHeight:1.5},children:x.value})]},F))})]})}),n.jsx("div",{style:{maxWidth:920,margin:"0 auto",padding:"0 28px 48px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Rust 1.0 (2015) → Ownership & borrowing → Traits & generics → Lifetimes → Smart pointers → Fearless concurrency → async/await (2019) → Tokio 1.0 (2020) → Edition 2021 → Real-world Rust everywhere (2024+)"})]})}const Yc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ws=[{id:"what-is-ownership",icon:"🏠",color:"#D97706",title:"What Is Ownership",subtitle:"Stack vs heap, move semantics, and why Rust manages memory differently from every other language",resources:[{type:"read",title:"The Rust Book — Ch. 4.1: What Is Ownership?",url:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html"},{type:"video",title:"Let's Get Rusty — Ownership",url:"https://www.youtube.com/watch?v=VFIOSWy93Ho"},{type:"read",title:"Rust By Example — Ownership and moves",url:"https://doc.rust-lang.org/rust-by-example/scope/move.html"},{type:"infographic",title:"Cheats.rs — Memory Layout",url:"https://cheats.rs/#memory-layout"},{type:"video",title:"Jon Gjengset — Crust of Rust: Lifetime Annotations",url:"https://www.youtube.com/watch?v=rAl-9HwD858"}],content:[{heading:"Stack vs Heap — Where Data Lives",body:`**Every value in Rust lives on either the stack or the heap.** Understanding which is key to understanding ownership.

**The Stack:**
• Fixed-size data: integers, floats, booleans, chars, references, fixed-size arrays
• Extremely fast: push/pop is O(1), just move the stack pointer
• Automatically cleaned up when the function returns (LIFO — Last In, First Out)
• Each thread gets its own stack (typically 2-8 MB)

**The Heap:**
• Dynamically-sized data: String, Vec, Box, HashMap, and anything that can grow
• Slower: requires memory allocator (malloc/free in C, Rust's global allocator)
• Must be explicitly managed — in C you call free(), in Rust the compiler inserts drop()

**Example — what lives where:**
let x: i32 = 42;          // stack: 4 bytes, fixed size
let s: String = String::from("hello"); // stack: 24 bytes (ptr + len + capacity), heap: 5 bytes ("hello")
let v: Vec<i32> = vec![1, 2, 3];       // stack: 24 bytes (ptr + len + capacity), heap: 12 bytes (3 × 4)

**A String on the stack looks like this:**
| Field    | Size    | Value           |
|----------|---------|-----------------|
| pointer  | 8 bytes | → heap address  |
| length   | 8 bytes | 5               |
| capacity | 8 bytes | 5 (or more)     |

**The pointer points to heap memory** containing the actual bytes: [h, e, l, l, o].

**Why this matters:** When you assign \`let s2 = s1;\`, Rust has a choice — copy the stack data (24 bytes, cheap) or copy the heap data too (potentially megabytes). Rust chooses to **move**: copy the stack data, invalidate s1, no heap copy. This is the foundation of ownership.`},{heading:"Move Semantics — Transfer of Ownership",body:`**When you assign a heap-allocated value to another variable, ownership moves:**

let s1 = String::from("hello");
let s2 = s1;  // s1 is MOVED to s2
// println!("{}", s1);  // ERROR: borrow of moved value: s1

**What happened:**
1. s1's stack data (pointer, length, capacity) is copied to s2
2. s1 is invalidated — the compiler marks it as unusable
3. There is still only ONE owner of the heap data

**Why move instead of copy?**
• If both s1 and s2 owned the same heap data, who calls drop()? Both? Double free! One? Use-after-free!
• C++ default: shallow copy → double free bugs (unless you write copy/move constructors)
• Java/Python: garbage collector tracks it → runtime overhead
• **Rust: transfer ownership at compile time → zero runtime cost, zero bugs**

**Move happens in these situations:**
• Assignment: \`let s2 = s1;\`
• Function calls: \`fn take(s: String) { ... } take(s1);\` — s1 moved into the function
• Return values: \`fn give() -> String { String::from("hi") }\` — ownership moves to caller

**The key insight:** after a move, the original variable is dead. The compiler enforces this. You cannot use it. This is Rust's single-owner guarantee.

**Analogy:** Ownership is like a physical book. You can give it to someone (move), but then you don't have it anymore. You can let someone look at it (borrow), but you still own it.`},{heading:"Functions and Ownership Transfer",body:`**Passing a value to a function moves it (for heap types):**

fn takes_ownership(s: String) {
    println!("{}", s);
} // s is dropped here — heap memory freed

fn main() {
    let s = String::from("hello");
    takes_ownership(s);
    // println!("{}", s); // ERROR: s was moved
}

**Returning a value gives ownership to the caller:**

fn gives_ownership() -> String {
    let s = String::from("hello");
    s // ownership moves to the caller
}

fn main() {
    let s = gives_ownership(); // s owns the String
    println!("{}", s); // works fine
}

**The ownership ping-pong problem (pre-borrowing):**

fn calculate_length(s: String) -> (String, usize) {
    let len = s.len();
    (s, len) // must return s to give ownership back!
}

This is tedious. That's why Rust has **borrowing** — you can lend a reference without transferring ownership. We'll cover this in the next section.

**Stack types don't move — they copy:**

let x: i32 = 42;
let y = x;  // COPY, not move — x is still valid
println!("{} {}", x, y); // both work!

This is because i32 implements the **Copy** trait. Types that are entirely on the stack and cheap to duplicate get this behavior automatically.`}],questions:[{q:'What happens to s1 after this code: let s1 = String::from("hello"); let s2 = s1;',a:"s1 is moved to s2 and becomes invalid. The compiler will reject any subsequent use of s1 with error E0382: 'borrow of moved value'. The String's stack data (pointer, length, capacity) is copied to s2, but the heap data is NOT duplicated. There is still only one copy of 'hello' on the heap, and s2 is now its sole owner.",hint:"Think about what 'move semantics' means — who owns the heap data after the assignment?",check:l=>{const s=l.toLowerCase();return(s.includes("move")||s.includes("invalid")||s.includes("cannot")||s.includes("can't"))&&(s.includes("s1")||s.includes("original"))}},{q:'Why does let x = 5; let y = x; NOT invalidate x, but let s = String::from("hi"); let t = s; DOES invalidate s?',a:"Because i32 implements the Copy trait. Copy types live entirely on the stack and are cheap to bitwise-copy (i32 is just 4 bytes). When you write let y = x, the compiler copies the 4 bytes — both x and y have independent copies. String does NOT implement Copy because it contains a heap pointer. A bitwise copy would create two pointers to the same heap data, leading to a double-free when both go out of scope. So Rust moves instead of copying, ensuring single ownership.",hint:"Consider the Copy trait — which types implement it and why?",check:l=>{const s=l.toLowerCase();return s.includes("copy")&&(s.includes("stack")||s.includes("cheap")||s.includes("trait"))}}]},{id:"three-rules",icon:"📜",color:"#DC2626",title:"The 3 Ownership Rules",subtitle:"Three simple rules that eliminate use-after-free, double-free, and memory leaks at compile time",resources:[{type:"read",title:"The Rust Book — Ownership Rules",url:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#ownership-rules"},{type:"read",title:"Rust Reference — Destructors",url:"https://doc.rust-lang.org/reference/destructors.html"},{type:"video",title:"Rust in 100 Seconds",url:"https://www.youtube.com/watch?v=5C_HPTJg5ek"},{type:"read",title:"Rust By Example — RAII",url:"https://doc.rust-lang.org/rust-by-example/scope/raii.html"}],content:[{heading:"Rule 1: Each Value Has Exactly One Owner",body:`**At any point in your program, every value has exactly one variable that owns it.**

let s1 = String::from("hello"); // s1 owns this String
let s2 = s1;                    // now s2 owns it, s1 is gone
// s1 is no longer valid

**Why one owner?** Because Rust needs to know exactly when to free the memory. If two variables owned the same heap data, which one frees it? The answer: neither safely can. So Rust enforces single ownership.

**This eliminates:**
• **Double free** — two variables trying to free the same memory (undefined behavior in C/C++)
• **Use-after-free** — accessing memory that another variable already freed

**One owner means one clear point of cleanup.** When the owner goes out of scope, the memory is freed. No ambiguity. No runtime tracking. No garbage collector.

**The ownership tree:** In a complex program, ownership forms a tree. Each value is owned by exactly one other value (or by a local variable). When the root is dropped, everything it owns is recursively dropped. This is RAII (Resource Acquisition Is Initialization).`},{heading:"Rule 2: Only One Owner at a Time",body:`**You cannot have two variables owning the same data simultaneously.**

**This is enforced through move semantics:**

let v1 = vec![1, 2, 3];
let v2 = v1;     // v1 moved to v2
// v1 is dead — cannot use it

**But you CAN have shared access through borrowing:**

let v1 = vec![1, 2, 3];
let v2 = &v1;    // v2 BORROWS v1 (does not own it)
println!("{:?} {:?}", v1, v2); // both valid!

**The distinction:**
| Operation | Syntax | Ownership | Original valid? |
|-----------|--------|-----------|-----------------|
| Move      | let b = a;     | Transfers | No  |
| Borrow    | let b = &a;    | Shared    | Yes |
| Clone     | let b = a.clone(); | Duplicates | Yes |
| Copy      | let b = a; (Copy types) | Copies | Yes |

**When you need multiple owners:** Use \`Rc<T>\` (reference counting) or \`Arc<T>\` (atomic reference counting for threads). These are smart pointers that track the number of owners at runtime and free the data when the count hits zero.`},{heading:"Rule 3: Value Dropped When Owner Goes Out of Scope",body:`**When a variable goes out of scope, Rust calls \`drop()\` to free its resources.**

{
    let s = String::from("hello"); // s comes into scope
    // use s here
} // s goes out of scope — drop() is called, heap memory freed

**This is RAII — Resource Acquisition Is Initialization:**
• Acquire a resource (memory, file handle, mutex lock) when a value is created
• Release it automatically when the value is dropped
• No manual free(), close(), or unlock() needed

**Drop order:**
• Variables are dropped in **reverse declaration order** (LIFO)
• Struct fields are dropped in **declaration order**
• You can call \`drop(value)\` early using \`std::mem::drop\`

**What drop handles:**
• \`String\` — frees heap-allocated UTF-8 bytes
• \`Vec<T>\` — frees heap-allocated array, drops each element
• \`File\` — closes the file handle
• \`MutexGuard\` — releases the lock
• \`Box<T>\` — frees the heap allocation, drops the inner value

**The Drop trait:**

struct DatabaseConn { id: u32 }

impl Drop for DatabaseConn {
    fn drop(&mut self) {
        println!("Closing connection {}", self.id);
        // cleanup logic here
    }
}

**Key insight:** In Rust, memory management is deterministic. You always know exactly when memory is freed — at the closing brace where the owner goes out of scope. No garbage collector pauses. No manual free(). No leaks (unless you explicitly leak with \`Box::leak\` or \`std::mem::forget\`).`}],questions:[{q:"What C/C++ bug does Rule 1 (each value has one owner) prevent?",a:"Rule 1 prevents double-free bugs. In C/C++, if two pointers point to the same heap memory and both try to free it, the second free causes undefined behavior — crashes, data corruption, or security vulnerabilities. Rust's single-owner rule means only one variable can drop the value, so double-free is structurally impossible.",hint:"Think about what happens when two pointers both try to free the same memory.",check:l=>{const s=l.toLowerCase();return s.includes("double")&&s.includes("free")}},{q:"In what order are variables dropped when a scope ends? Why?",a:"Variables are dropped in reverse declaration order (LIFO — last declared, first dropped). This is because later variables might reference earlier ones. By dropping later variables first, Rust ensures that references are still valid when they are needed during cleanup. For example, if a MutexGuard (declared second) borrows from a Mutex (declared first), the guard must be dropped before the mutex.",hint:"Think about LIFO order and why later variables might depend on earlier ones.",check:l=>{const s=l.toLowerCase();return(s.includes("reverse")||s.includes("lifo")||s.includes("last"))&&(s.includes("order")||s.includes("first"))}}]},{id:"borrowing",icon:"🤝",color:"#0369A1",title:"Borrowing — &T and &mut T",subtitle:"Shared and exclusive references — access without ownership, enforced by the borrow checker",resources:[{type:"read",title:"The Rust Book — Ch. 4.2: References and Borrowing",url:"https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Lifetime Annotations",url:"https://www.youtube.com/watch?v=rAl-9HwD858"},{type:"read",title:"Rust By Example — Borrowing",url:"https://doc.rust-lang.org/rust-by-example/scope/borrow.html"},{type:"infographic",title:"Cheats.rs — References & Borrowing",url:"https://cheats.rs/#references-borrowing"},{type:"read",title:"Rust Reference — References",url:"https://doc.rust-lang.org/reference/types/pointer.html"}],content:[{heading:"Shared References — &T",body:`**A shared reference (\`&T\`) lets you read data without owning it.**

fn calculate_length(s: &String) -> usize {
    s.len()  // can read s
    // s.push_str("!"); // ERROR: cannot mutate through &String
}

fn main() {
    let s = String::from("hello");
    let len = calculate_length(&s); // borrow s, don't move it
    println!("{} has length {}", s, len); // s still valid!
}

**Rules for shared references (&T):**
• You can have **unlimited** shared references to the same data simultaneously
• The data **cannot be mutated** through any shared reference
• The data **cannot be moved** while any shared reference exists
• The reference must not outlive the data it points to (lifetime enforcement)

**Multiple shared references are fine:**

let s = String::from("hello");
let r1 = &s;
let r2 = &s;
let r3 = &s;
println!("{} {} {}", r1, r2, r3); // all valid simultaneously

**Why unlimited shared references are safe:** if nobody can mutate the data, there's no risk of data races, iterator invalidation, or reading inconsistent state. Many readers, zero writers = always safe.

**Shared references are thin pointers:**
• \`&i32\` — 8 bytes (just a pointer to the i32)
• \`&String\` — 8 bytes (pointer to the String struct on the stack)
• \`&dyn Trait\` — 16 bytes (pointer to data + pointer to vtable) — this is a "fat pointer"`},{heading:"Mutable References — &mut T",body:`**A mutable reference (\`&mut T\`) lets you read AND write data without owning it.**

fn append_greeting(s: &mut String) {
    s.push_str(", world!");  // can mutate s
}

fn main() {
    let mut s = String::from("hello");
    append_greeting(&mut s);
    println!("{}", s); // "hello, world!"
}

**The critical rule: you can have either:**
• **Multiple \`&T\`** (shared/immutable references) — many readers, no writers
• **Exactly ONE \`&mut T\`** (exclusive/mutable reference) — one writer, no readers
• **NEVER both at the same time**

**This prevents data races at compile time:**

let mut s = String::from("hello");
let r1 = &s;        // shared borrow
let r2 = &s;        // another shared borrow — fine
// let r3 = &mut s;  // ERROR: cannot borrow as mutable while shared borrows exist
println!("{} {}", r1, r2);
// After r1 and r2 are no longer used, mutable borrow is OK:
let r3 = &mut s;    // OK — no other references active
r3.push_str("!");

**Non-Lexical Lifetimes (NLL):** The compiler tracks when references are LAST USED, not when they go out of scope. So a shared borrow that's never used after line 5 doesn't block a mutable borrow on line 6.

**Why exclusive mutable access?**
| Scenario | Risk | Rust's Prevention |
|----------|------|-------------------|
| Read while writing | Reading partially-updated data | &mut T is exclusive |
| Two simultaneous writes | Data corruption | Only one &mut T allowed |
| Iterator invalidation | Vec reallocates while iterating | Can't mutate during borrow |`},{heading:"Borrow Checker Error Messages",body:`**The borrow checker produces clear error messages. Here are the most common:**

**E0382 — Use of moved value:**
let s = String::from("hello");
let t = s;
println!("{}", s); // error[E0382]: borrow of moved value: \`s\`

**Fix:** Clone the value, borrow it, or restructure to avoid the move.

**E0502 — Cannot borrow as mutable because also borrowed as immutable:**
let mut v = vec![1, 2, 3];
let first = &v[0];      // immutable borrow
v.push(4);               // mutable borrow — ERROR
println!("{}", first);

**Why this is prevented:** \`push()\` might reallocate the Vec to a new heap location, making \`first\` a dangling pointer. The borrow checker catches this at compile time — in C++ this would be a use-after-free bug.

**Fix:** Use first before mutating: println first, then push.

**E0505 — Cannot move out of borrowed reference:**
let s = String::from("hello");
let r = &s;
drop(s);          // ERROR: cannot move out of \`s\` because it is borrowed
println!("{}", r);

**Fix:** Drop the reference first, or clone the data.

**E0499 — Cannot borrow as mutable more than once at a time:**
let mut s = String::from("hello");
let r1 = &mut s;
let r2 = &mut s; // ERROR
println!("{} {}", r1, r2);

**Fix:** Use one mutable reference at a time, or restructure to use scopes.

**Pro tip:** Read the error message carefully. Rust's compiler is exceptionally helpful — it tells you WHAT went wrong, WHERE the conflicting borrow is, and often HOW to fix it.`}],questions:[{q:"Can you have a &T and a &mut T to the same data at the same time? Why or why not?",a:"No, you cannot. The borrowing rules enforce mutual exclusion: you can have either multiple &T (shared/immutable references) OR exactly one &mut T (exclusive/mutable reference), never both simultaneously. This prevents data races: if you could read (&T) while another reference writes (&mut T), you might see partially-updated or inconsistent data. This is the same principle as a read-write lock (RwLock), but enforced at compile time with zero runtime overhead.",hint:"Think about what could go wrong if you read data while something else is modifying it.",check:l=>{const s=l.toLowerCase();return(s.includes("no")||s.includes("cannot")||s.includes("can't"))&&(s.includes("race")||s.includes("inconsistent")||s.includes("mutual")||s.includes("exclusive")||s.includes("simultaneously"))}},{q:"Why does the borrow checker prevent you from pushing to a Vec while holding a reference to one of its elements?",a:"Because Vec::push() might cause a reallocation. When a Vec's length exceeds its capacity, it allocates a new, larger buffer on the heap, copies all elements to the new buffer, and frees the old one. Any reference to an element in the old buffer would become a dangling pointer — pointing to freed memory. The borrow checker prevents this by treating push() as a mutable borrow of the entire Vec, which conflicts with the existing immutable borrow of the element. In C++, this exact bug (iterator invalidation) is one of the most common sources of undefined behavior.",hint:"What happens to the Vec's heap memory when push() needs more capacity?",check:l=>{const s=l.toLowerCase();return(s.includes("realloc")||s.includes("grow")||s.includes("capacity")||s.includes("new buffer"))&&(s.includes("dangling")||s.includes("invalid")||s.includes("freed")||s.includes("pointer"))}}]},{id:"slices",icon:"🔪",color:"#059669",title:"Slices",subtitle:"Borrowed views into contiguous sequences — safe, zero-copy access to parts of strings and arrays",resources:[{type:"read",title:"The Rust Book — Ch. 4.3: The Slice Type",url:"https://doc.rust-lang.org/book/ch04-03-slices.html"},{type:"read",title:"Rust By Example — Slices",url:"https://doc.rust-lang.org/rust-by-example/primitives/array.html"},{type:"read",title:"Rust std::slice documentation",url:"https://doc.rust-lang.org/std/primitive.slice.html"},{type:"video",title:"Let's Get Rusty — String Slices",url:"https://www.youtube.com/watch?v=CLMUCv7s6Pg"}],content:[{heading:"What Are Slices",body:`**A slice is a reference to a contiguous subsequence of a collection.** It's a view — no copying, no ownership.

let s = String::from("hello world");
let hello: &str = &s[0..5];   // "hello"
let world: &str = &s[6..11];  // "world"

**A slice is a fat pointer — two fields:**
| Field   | Size    | Description                    |
|---------|---------|--------------------------------|
| pointer | 8 bytes | Address of the first element   |
| length  | 8 bytes | Number of elements in the slice|

**Total: 16 bytes**, regardless of how much data the slice refers to.

**Slice syntax:**
• \`&s[0..5]\` — bytes 0 through 4 (exclusive end)
• \`&s[..5]\` — from start to 5
• \`&s[6..]\` — from 6 to end
• \`&s[..]\` — the entire collection

**Types of slices:**
• \`&str\` — string slice (view into a String or string literal)
• \`&[i32]\` — array/vec slice (view into a Vec<i32> or array)
• \`&[u8]\` — byte slice (very common for I/O)

**Why slices are powerful:**
• Zero-copy: no heap allocation, just a pointer + length
• Safe: the borrow checker ensures the underlying data isn't freed or mutated
• Generic: functions accepting \`&str\` or \`&[T]\` work with both owned and borrowed data`},{heading:"String vs &str — The Most Important Distinction",body:'**`String` and `&str` are the two main string types. Understanding the difference is critical.**\n\n| Property | String | &str |\n|----------|--------|------|\n| Ownership | Owned — heap-allocated | Borrowed — references existing data |\n| Mutability | Growable (`push_str`, `push`) | Immutable view |\n| Size | 24 bytes on stack (ptr+len+cap) | 16 bytes (ptr+len) |\n| Creation | `String::from("hi")`, `.to_string()` | `"hi"` (literal), `&s[..]` |\n| Lifetime | Lives as long as the owner | Must not outlive the data it borrows |\n\n**String literals are `&str` with a `\'static` lifetime:**\nlet s: &str = "hello"; // baked into the binary, lives forever\n\n**Deref coercion: String → &str is automatic:**\nfn greet(name: &str) { println!("Hello, {}!", name); }\n\nlet owned = String::from("Alice");\ngreet(&owned);   // &String auto-deref-coerces to &str\ngreet("Bob");    // &str passed directly\n\n**Best practice for function parameters:**\n• Accept `&str` — works with both String and &str callers\n• Return `String` when the function creates new string data\n• Return `&str` when returning a reference to existing data (requires lifetime)\n\n**Common conversion:**\n• `String` → `&str`: `&s`, `&s[..]`, `s.as_str()`\n• `&str` → `String`: `s.to_string()`, `s.to_owned()`, `String::from(s)`\n\n**Warning — string indexing is byte-based, not character-based:**\nlet s = "hello";\nlet h = &s[0..1]; // "h" — OK, ASCII is 1 byte per char\nlet emoji = "😀hello";\n// let e = &emoji[0..1]; // PANIC: byte index 1 is not a char boundary\nlet e = &emoji[0..4]; // "😀" — emoji is 4 UTF-8 bytes'},{heading:"Array and Vec Slices",body:`**Slices work the same way for arrays and Vecs:**

let arr = [1, 2, 3, 4, 5];
let slice: &[i32] = &arr[1..4]; // [2, 3, 4]

let vec = vec![10, 20, 30, 40, 50];
let slice: &[i32] = &vec[2..];  // [30, 40, 50]

**Functions that accept slices are generic over the source:**

fn sum(numbers: &[i32]) -> i32 {
    numbers.iter().sum()
}

let arr = [1, 2, 3];
let vec = vec![4, 5, 6];
println!("{}", sum(&arr));    // works with arrays
println!("{}", sum(&vec));    // works with vecs
println!("{}", sum(&vec[1..])); // works with sub-slices

**Mutable slices — \`&mut [T]\`:**

fn double_all(numbers: &mut [i32]) {
    for n in numbers.iter_mut() {
        *n *= 2;
    }
}

let mut data = vec![1, 2, 3];
double_all(&mut data);
// data is now [2, 4, 6]

**Slice methods (there are many):**
• \`.len()\`, \`.is_empty()\` — size checking
• \`.first()\`, \`.last()\` — safe access returning Option
• \`.contains(&val)\` — linear search
• \`.sort()\`, \`.sort_by()\` — sorting (mutable slices)
• \`.chunks(n)\`, \`.windows(n)\` — iterate in groups
• \`.split_at(n)\` — divide into two slices
• \`.iter()\`, \`.iter_mut()\` — create iterators`}],questions:[{q:"What is the size (in bytes) of a &str on a 64-bit system, and what fields does it contain?",a:"A &str is 16 bytes: it's a fat pointer containing two 8-byte fields — a pointer to the first byte of the string data, and a usize length indicating how many bytes the slice covers. This is the same for all slice types (&[T]) — pointer + length. The capacity field that String has is NOT present in &str because slices are views, not owners.",hint:"Think about what information you need to reference a portion of string data — where it starts and how long it is.",check:l=>{const s=l.toLowerCase();return s.includes("16")&&(s.includes("pointer")||s.includes("ptr"))&&s.includes("len")}}]},{id:"copy-clone",icon:"📋",color:"#7C3AED",title:"Copy vs Clone Traits",subtitle:"When values duplicate implicitly vs explicitly — the traits that control value semantics",resources:[{type:"read",title:"Rust std::marker::Copy documentation",url:"https://doc.rust-lang.org/std/marker/trait.Copy.html"},{type:"read",title:"Rust std::clone::Clone documentation",url:"https://doc.rust-lang.org/std/clone/trait.Clone.html"},{type:"read",title:"Rust By Example — Clone",url:"https://doc.rust-lang.org/rust-by-example/trait/clone.html"},{type:"video",title:"Let's Get Rusty — Clone and Copy",url:"https://www.youtube.com/watch?v=RAf9MlnafJE"}],content:[{heading:"The Copy Trait — Implicit Bitwise Duplication",body:`**Types that implement \`Copy\` are duplicated automatically on assignment.** No move, no invalidation.

let x: i32 = 42;
let y = x;  // x is COPIED, not moved
println!("{} {}", x, y); // both valid: 42 42

**Which types are Copy?**
| Type | Copy? | Why |
|------|-------|-----|
| i8, i16, i32, i64, i128, isize | Yes | Fixed-size, stack-only |
| u8, u16, u32, u64, u128, usize | Yes | Fixed-size, stack-only |
| f32, f64 | Yes | Fixed-size, stack-only |
| bool | Yes | 1 byte, stack-only |
| char | Yes | 4 bytes, stack-only |
| &T (shared references) | Yes | 8 bytes, just a pointer |
| (i32, f64) — tuples of Copy types | Yes | All fields are Copy |
| [i32; 5] — arrays of Copy types | Yes | All elements are Copy |
| String | **No** | Contains heap pointer |
| Vec<T> | **No** | Contains heap pointer |
| &mut T | **No** | Only one mutable ref allowed |

**The rule:** A type can implement Copy if and only if all of its components are Copy AND it doesn't implement Drop. If it allocates heap memory or manages a resource, it cannot be Copy.

**Making your own types Copy:**

#[derive(Copy, Clone)]  // Clone is required for Copy
struct Point {
    x: f64,
    y: f64,
}

let p1 = Point { x: 1.0, y: 2.0 };
let p2 = p1;  // implicit copy
println!("{} {}", p1.x, p2.x); // both valid`},{heading:"The Clone Trait — Explicit Deep Duplication",body:`**\`Clone\` provides an explicit \`.clone()\` method for duplicating values.** Unlike Copy, Clone can be expensive.

let s1 = String::from("hello");
let s2 = s1.clone();  // explicit deep copy
println!("{} {}", s1, s2); // both valid

**What \`.clone()\` does for common types:**
• \`String::clone()\` — allocates new heap memory, copies all bytes
• \`Vec<T>::clone()\` — allocates new heap memory, clones each element
• \`Rc<T>::clone()\` — increments reference count (cheap! No data copy)
• \`Arc<T>::clone()\` — atomically increments reference count (cheap!)

**Key distinction:**
• **Copy** — implicit, bitwise, always cheap (compiler does it automatically)
• **Clone** — explicit, can be deep/expensive, YOU choose when to call it

**Clone without Copy:**
• String: Clone but not Copy (heap allocation)
• Vec<T>: Clone but not Copy (heap allocation)
• HashMap: Clone but not Copy (heap allocation)
• Box<T>: Clone if T is Clone (heap allocation)

**Copy implies Clone:** every Copy type is also Clone. But Clone does NOT imply Copy.

**Performance consideration:**
let big_vec = vec![0u8; 10_000_000]; // 10 MB
let copy = big_vec.clone(); // allocates another 10 MB and copies!
// Use &big_vec (borrow) instead of clone() whenever possible

**Rule of thumb:** If you find yourself calling \`.clone()\` frequently to satisfy the borrow checker, it's a sign you should restructure your code to use references instead.`},{heading:"Deriving Copy and Clone for Custom Types",body:`**Most types should derive Clone. Only derive Copy if the type is small and stack-only.**

**Clone-only type (contains heap data):**
#[derive(Clone, Debug)]
struct User {
    name: String,      // String is not Copy
    age: u32,
}

let u1 = User { name: "Alice".into(), age: 30 };
let u2 = u1.clone();  // must explicitly clone
// let u3 = u1;       // this would MOVE u1

**Copy + Clone type (entirely stack-based):**
#[derive(Copy, Clone, Debug)]
struct Color {
    r: u8,
    g: u8,
    b: u8,
}

let c1 = Color { r: 255, g: 0, b: 0 };
let c2 = c1;  // implicit copy
println!("{:?} {:?}", c1, c2); // both valid

**Custom Clone implementation (when derive isn't enough):**
struct ExpensiveResource {
    data: Vec<u8>,
    id: u64,
}

impl Clone for ExpensiveResource {
    fn clone(&self) -> Self {
        println!("Cloning resource {} ({} bytes)", self.id, self.data.len());
        ExpensiveResource {
            data: self.data.clone(),
            id: self.id, // copy, not clone (u64 is Copy)
        }
    }
}

**When to implement Clone manually:**
• Logging or metrics on clone operations
• Partial cloning (some fields shared, some deep-copied)
• Assigning new IDs to cloned resources`}],questions:[{q:"Can a struct containing a String field implement Copy? Why or why not?",a:"No. A type can only implement Copy if ALL of its fields are Copy. String is not Copy because it owns heap-allocated data (a pointer, length, and capacity on the stack pointing to bytes on the heap). If String were Copy, a bitwise copy would create two String values pointing to the same heap buffer, and when both go out of scope, they'd both try to free it — a double-free bug. Additionally, Copy types cannot implement Drop, and String has a Drop implementation to free its heap memory.",hint:"What are the requirements for implementing Copy? Does String meet them?",check:l=>{const s=l.toLowerCase();return(s.includes("no")||s.includes("cannot")||s.includes("can't"))&&(s.includes("string")||s.includes("heap"))}},{q:"What is the performance difference between Rc::clone() and String::clone()?",a:"Rc::clone() is extremely cheap — it just increments an integer reference count (a single atomic or non-atomic increment, depending on Rc vs Arc). No data is copied. String::clone() is expensive — it allocates new heap memory and copies every byte of the string data. For a 1 MB string, clone() allocates 1 MB and copies 1 MB. For Rc<String>, clone() is O(1) regardless of string size. This is why Rc/Arc are used when you need multiple owners of expensive data — sharing is much cheaper than cloning.",hint:"Think about what each clone() actually does — does it copy the data or just a counter?",check:l=>{const s=l.toLowerCase();return(s.includes("rc")||s.includes("reference count")||s.includes("counter"))&&(s.includes("cheap")||s.includes("increment")||s.includes("o(1)")||s.includes("fast"))}}]},{id:"patterns-fixes",icon:"🔧",color:"#0E7490",title:"Common Ownership Patterns & Fixes",subtitle:"The most frequent borrow checker battles and how to win them — practical patterns for real code",resources:[{type:"read",title:"Common Rust Lifetime Misconceptions",url:"https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md"},{type:"read",title:"Rust Design Patterns — Borrow and Clone",url:"https://rust-unofficial.github.io/patterns/idioms/default.html"},{type:"video",title:"Tim McNamara — Rust in Action",url:"https://www.youtube.com/watch?v=WQoB2z67hvY"},{type:"read",title:"Rust API Guidelines — Ownership conventions",url:"https://rust-lang.github.io/api-guidelines/ownership.html"},{type:"read",title:"Rust By Example — Scoping rules",url:"https://doc.rust-lang.org/rust-by-example/scope.html"},{type:"infographic",title:"Cheats.rs — Ownership Cheat Sheet",url:"https://cheats.rs/#ownership"}],content:[{heading:"Pattern: Borrow Instead of Move",body:`**Problem:** You want to pass data to a function but keep using it afterward.

// BAD — function takes ownership
fn print_name(name: String) {
    println!("Name: {}", name);
}

let name = String::from("Alice");
print_name(name);
// println!("{}", name); // ERROR: moved

// GOOD — function borrows
fn print_name(name: &str) {
    println!("Name: {}", name);
}

let name = String::from("Alice");
print_name(&name);
println!("{}", name); // still valid!

**The guideline:** Accept the most general borrow type:
• Use \`&str\` instead of \`&String\` (works with both String and &str)
• Use \`&[T]\` instead of \`&Vec<T>\` (works with both Vec and arrays)
• Use \`&T\` instead of \`T\` when you only need to read

**When to take ownership (accept T instead of &T):**
• The function needs to store the value (e.g., pushing to a Vec, inserting into a HashMap)
• The function needs to transfer the value to another thread
• The function consumes the value (e.g., converting String to other types)`},{heading:"Pattern: Restructure to Satisfy the Borrow Checker",body:`**Problem:** The borrow checker rejects code that seems correct because borrows overlap.

// BAD — mutable borrow during iteration
let mut scores = vec![1, 2, 3, 4, 5];
for score in &scores {
    if *score > 3 {
        scores.push(*score * 2); // ERROR: can't mutate during immutable borrow
    }
}

// GOOD — collect changes, then apply
let mut scores = vec![1, 2, 3, 4, 5];
let to_add: Vec<i32> = scores.iter()
    .filter(|&&s| s > 3)
    .map(|&s| s * 2)
    .collect();
scores.extend(to_add);

**Other common restructuring patterns:**

**Scope narrowing — limit the borrow's lifetime:**
let mut map = HashMap::new();
map.insert("key", vec![1, 2, 3]);
{
    let values = map.get("key").unwrap(); // immutable borrow
    println!("{:?}", values);
} // borrow ends here
map.insert("key2", vec![4, 5]); // mutable borrow OK now

**Entry API — avoid double-lookup:**
// BAD — borrows map twice
if !map.contains_key("key") {
    map.insert("key", Vec::new());
}
map.get_mut("key").unwrap().push(42);

// GOOD — single borrow with entry API
map.entry("key").or_insert_with(Vec::new).push(42);

**Split borrows — borrow different fields of a struct:**
struct State { data: Vec<i32>, config: Config }

// The borrow checker allows borrowing DIFFERENT FIELDS simultaneously:
let state = &mut my_state;
process(&state.data, &mut state.config); // OK: different fields`},{heading:"Pattern: When to Clone vs Borrow vs Refactor",body:`**Decision tree for resolving borrow checker errors:**

Is the borrow checker complaining?
  ↓
Can you restructure the code to narrow borrow scopes?
  YES → Do that (best solution — zero cost)
  NO ↓
Can you accept a reference (&T) instead of owned (T)?
  YES → Change the function signature
  NO ↓
Is the data small and cheap to copy?
  YES → Use .clone() (pragmatic, clear)
  NO ↓
Do you need shared ownership?
  YES → Use Rc<T> (single thread) or Arc<T> (multi-thread)
  NO ↓
Do you need interior mutability?
  YES → Use RefCell<T> (single thread) or Mutex<T> (multi-thread)

**When .clone() is fine:**
• Prototyping — get it working first, optimize later
• Configuration objects — cloned once at startup
• Small types — cloning a 32-byte struct is negligible
• \`Rc::clone()\` / \`Arc::clone()\` — these are O(1), always fine

**When .clone() is a red flag:**
• In a hot loop — cloning large Vecs or Strings millions of times
• As a "shut up the borrow checker" hammer — usually means the design needs rethinking
• When there are more than 2-3 clone() calls in a function

**The anti-pattern — "clone everything":**
// Cargo cult Rust — works but wasteful and hides design problems
fn process(data: &Vec<String>) -> Vec<String> {
    let owned = data.clone(); // unnecessary clone!
    owned.iter().map(|s| s.clone().to_uppercase()).collect()
}

// Better:
fn process(data: &[String]) -> Vec<String> {
    data.iter().map(|s| s.to_uppercase()).collect()
}`},{heading:"Pattern: Ownership in Struct Design",body:`**Choosing between owned and borrowed fields in structs:**

**Owned fields (most common, simplest):**
struct User {
    name: String,   // owns the string data
    email: String,  // owns the string data
    age: u32,       // copy type, no ownership concern
}

**Borrowed fields (requires lifetimes):**
struct Excerpt<'a> {
    content: &'a str,  // borrows from somewhere else
    line: usize,
}
// Excerpt cannot outlive the string it borrows from

**When to use owned fields:**
• Default choice — simplest, most flexible, no lifetime annotations
• When the struct needs to live independently of its data source
• When fields are modified after construction

**When to use borrowed fields:**
• Performance-critical parsing (avoid allocating for each token/segment)
• Short-lived intermediate representations
• When you're wrapping borrowed data (like iterators)

**The Cow<'a, T> pattern — Clone-on-Write:**
use std::borrow::Cow;

struct Config<'a> {
    name: Cow<'a, str>,  // either &str (borrowed) or String (owned)
}

// Efficient: borrows when possible, clones only when mutation needed
let cfg = Config { name: Cow::Borrowed("default") };  // no allocation
let cfg = Config { name: Cow::Owned(format!("user_{}", id)) }; // allocates

**Cow is excellent for functions that usually return unchanged data but sometimes need to modify it** — e.g., escaping HTML entities in mostly-clean text.`}],questions:[{q:"You have a function that takes a String parameter but you want to call it with both String and &str. What should you change the parameter type to?",a:"Change the parameter type to &str. A &str can accept both &String (via deref coercion, since String implements Deref<Target = str>) and &str directly. This is the idiomatic Rust pattern: accept the most general borrow type. Alternatively, you could use impl AsRef<str> or impl Into<String> for even more flexibility, but &str is the standard choice for read-only string parameters.",hint:"Think about what type accepts both owned and borrowed strings through deref coercion.",check:l=>{const s=l.toLowerCase();return s.includes("&str")||s.includes("borrow")||s.includes("reference")||s.includes("asref")}},{q:"When is it appropriate to use .clone() to fix a borrow checker error, and when is it a code smell?",a:"Clone is appropriate when: (1) the data is small and cheap to copy, (2) you're prototyping and will optimize later, (3) the clone happens rarely (e.g., once at startup for config), or (4) you're cloning Rc/Arc which is O(1). Clone is a code smell when: (1) it's in a hot loop processing large data, (2) you're using it as a blanket fix for every borrow checker error without understanding why, (3) multiple clones in one function suggest the design needs rethinking, or (4) you could use a reference instead. The key question: 'Am I cloning because I need a separate copy, or because I can't figure out the lifetimes?' If the latter, restructure the code instead.",hint:"Consider both the cost of cloning and whether it indicates a design issue.",check:l=>{const s=l.toLowerCase();return(s.includes("small")||s.includes("cheap")||s.includes("prototype")||s.includes("config")||s.includes("rc")||s.includes("arc"))&&(s.includes("loop")||s.includes("hot")||s.includes("design")||s.includes("smell")||s.includes("restructure"))}}]}];function lp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")},E=()=>F("revealed"),p=()=>{var w;F("idle"),U(""),(w=q.current)==null||w.focus()};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:n.jsx("textarea",{ref:q,value:M,onChange:w=>U(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{flex:1,minWidth:200,padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans', sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",transition:"border 0.2s"}})}),x==="wrong"&&n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#DC2626",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:14},children:"✗"})," Not quite right. Try again or reveal the answer."]}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsx("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:600,transition:"opacity 0.2s",opacity:M.trim()?1:.4},children:"✓ Check Answer"}),n.jsx("button",{onClick:E,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal Answer"}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsx("summary",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#aaa",cursor:"pointer",userSelect:"none"},children:"💡 Hint"}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:16},children:"✓"})," Correct!"]}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:14},children:"📖"})," Answer"]}),n.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888"},children:"Try it myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function cp({embedded:l=!1}){const[s,S]=N.useState(null),[V,A]=N.useState(null),[M,U]=N.useState(new Set),[x,F]=N.useState({}),q=Ws.reduce((m,d)=>m+d.content.length,0),z=Math.round(M.size/q*100),E=m=>A(V===m?null:m),p=(m,d)=>{d.stopPropagation();const h=new Set(M);h.has(m)?h.delete(m):h.add(m),U(h)},w=m=>x[m]||"learn",T=m=>{var h;const d=m.split(`
`);if(d.some(u=>u.trim().startsWith("|"))){const u=[];let b=0;for(;b<d.length;)if(d[b].trim().startsWith("|")){const f=[];for(;b<d.length&&d[b].trim().startsWith("|");)f.push(d[b]),b++;const B=f.filter(y=>!y.match(/^\|\s*[-:]+/)),R=((h=B[0])==null?void 0:h.split("|").filter(y=>y.trim()).map(y=>y.trim()))||[],C=B.slice(1).map(y=>y.split("|").filter(G=>G.trim()).map(G=>G.trim()));u.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0"},children:n.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontFamily:"'DM Sans', sans-serif",fontSize:12},children:[n.jsx("thead",{children:n.jsx("tr",{children:R.map((y,G)=>n.jsx("th",{style:{padding:"6px 10px",borderBottom:"2px solid #E0DDD6",textAlign:"left",fontWeight:600,color:"#1a1a1a",background:"#FAF9F6"},children:y},G))})}),n.jsx("tbody",{children:C.map((y,G)=>n.jsx("tr",{children:y.map((re,oe)=>n.jsx("td",{style:{padding:"5px 10px",borderBottom:"1px solid #F0EDE6",color:"#444"},children:re},oe))},G))})]})},`t${b}`))}else{const f=d[b],B=f.startsWith("let ")||f.startsWith("fn ")||f.startsWith("//")||f.startsWith("    ")||f.startsWith("struct ")||f.startsWith("impl ")||f.startsWith("use ")||f.startsWith("pub ")||f.startsWith("println!")||f.startsWith("drop(")||f.startsWith("{")||f.startsWith("}")||f.startsWith("map.")||f.startsWith("scores.")||f.startsWith("data.")||f.startsWith("greet(")||f.startsWith("process(")||f.startsWith("print_name(")||f.startsWith("#["),R=f.startsWith("let ")||f.startsWith("fn ")||f.startsWith("struct ")||f.startsWith("impl ")||f.startsWith("use ")||f.startsWith("pub ")||f.startsWith("#[");if(B)u.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:R?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:R?"6px 6px 0 0":0,marginTop:R?10:0},children:f},b));else if(f==="")u.push(n.jsx("div",{style:{height:8}},b));else{const C=f.split(/\*\*(.*?)\*\*/g);u.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:C.map((y,G)=>G%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:y},G):n.jsx("span",{children:y},G))},b))}b++}return u}return m.split(`
`).map((u,b)=>{const f=u.startsWith("let ")||u.startsWith("fn ")||u.startsWith("//")||u.startsWith("    ")||u.startsWith("struct ")||u.startsWith("impl ")||u.startsWith("use ")||u.startsWith("pub ")||u.startsWith("println!")||u.startsWith("drop(")||u.startsWith("{")||u.startsWith("}")||u.startsWith("map.")||u.startsWith("scores.")||u.startsWith("data.")||u.startsWith("greet(")||u.startsWith("process(")||u.startsWith("print_name(")||u.startsWith("#["),B=u.startsWith("let ")||u.startsWith("fn ")||u.startsWith("struct ")||u.startsWith("impl ")||u.startsWith("use ")||u.startsWith("pub ")||u.startsWith("#[");if(f)return n.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:B?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:B?"6px 6px 0 0":0,marginTop:B?10:0},children:u},b);if(u==="")return n.jsx("div",{style:{height:8}},b);const R=u.split(/\*\*(.*?)\*\*/g);return n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:R.map((C,y)=>y%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:C},y):n.jsx("span",{children:C},y))},b)})};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),n.jsx("h1",{style:{fontSize:"clamp(30px, 5vw, 44px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Ownership & Borrowing"}),n.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:24},children:["Learn, practice, go deeper. ",Ws.length," sections · ",q," concepts · ",Ws.reduce((m,d)=>{var h;return m+(((h=d.questions)==null?void 0:h.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pfill",style:{width:`${z}%`,height:"100%",background:"linear-gradient(90deg, #D97706, #DC2626, #0369A1, #059669, #7C3AED, #0E7490)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[M.size,"/",q]})]}),n.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Yc).map(([m,d])=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#777"},children:[n.jsxs("span",{className:"type-badge",style:{background:d.bg,color:d.color},children:[d.emoji," ",d.label]}),m==="infographic"&&"— Primary",m==="read"&&"— Secondary",m==="video"&&"— Supplement"]},m))})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ws.map(m=>{var B;const d=s===m.id,u=m.content.map((R,C)=>`${m.id}-${C}`).filter(R=>M.has(R)).length,b=w(m.id),f=((B=m.questions)==null?void 0:B.length)||0;return n.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>S(d?null:m.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:m.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono', monospace"},children:m.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15.5,fontWeight:600},children:m.title}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:2},children:m.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[u,"/",m.content.length]}),n.jsx("span",{className:"arr",style:{transform:d?"rotate(90deg)":"rotate(0)"},children:"›"})]}),d&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tab-btn ${b==="learn"?"active":""}`,onClick:()=>F(R=>({...R,[m.id]:"learn"})),children:"📖 Learn"}),n.jsxs("button",{className:`tab-btn ${b==="practice"?"active":""}`,onClick:()=>F(R=>({...R,[m.id]:"practice"})),children:["✏️ Practice (",f,")"]}),n.jsxs("button",{className:`tab-btn ${b==="deeper"?"active":""}`,onClick:()=>F(R=>({...R,[m.id]:"deeper"})),children:["🔗 Go Deeper (",m.resources.length,")"]})]}),b==="learn"&&n.jsx("div",{children:m.content.map((R,C)=>{const y=`${m.id}-${C}`,G=V===y,re=M.has(y);return n.jsxs("div",{style:{borderTop:C>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"block-row",onClick:()=>E(y),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`chk ${re?"done":""}`,onClick:oe=>p(y,oe),children:re&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:re?"#aaa":"#2a2a2a",textDecoration:re?"line-through":"none",flex:1},children:R.heading}),n.jsx("span",{className:"arr",style:{transform:G?"rotate(90deg)":"rotate(0)"},children:"›"})]}),G&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${m.color}20`,marginLeft:22},children:T(R.body)})]},C)})}),b==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Test your understanding. Type your answer and check, or reveal if you're stuck. Hints available for each question."}),(m.questions||[]).map((R,C)=>n.jsx(lp,{q:R.q,a:R.a,hint:R.hint,check:R.check,color:m.color},`${m.id}-q-${C}`))]}),b==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:m.resources.map((R,C)=>{const y=Yc[R.type];return n.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:y.bg+"55"},children:[n.jsxs("span",{className:"type-badge",style:{background:y.bg,color:y.color},children:[y.emoji," ",y.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:R.title})]},C)})})]})]})]},m.id)})}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Three tabs per section: Learn (content) · Practice (questions) · Go Deeper (resources)"})]})}const Jc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},js=[{id:"structs",icon:"🏗️",color:"#059669",title:"Structs — Named, Tuple, and Unit",subtitle:"Rust's primary custom data types — group related fields into a single named type",resources:[{type:"read",title:"The Rust Book — Ch. 5.1: Defining and Instantiating Structs",url:"https://doc.rust-lang.org/book/ch05-01-defining-structs.html"},{type:"read",title:"Rust By Example — Structures",url:"https://doc.rust-lang.org/rust-by-example/custom_types/structs.html"},{type:"video",title:"Let's Get Rusty — Structs in Rust",url:"https://www.youtube.com/watch?v=n3bPhdiJm9I"},{type:"read",title:"Rust Reference — Struct types",url:"https://doc.rust-lang.org/reference/types/struct.html"}],content:[{heading:"Named Structs — The Primary Custom Type",body:`**Named structs are Rust's main way to group related data under a single type.**

struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

**Creating an instance:**
let user1 = User {
    email: String::from("alice@example.com"),
    username: String::from("alice"),
    active: true,
    sign_in_count: 1,
};

**Accessing fields:** dot notation: \`user1.email\`
**Mutating fields:** the entire struct must be \`mut\`: \`let mut user1 = User { ... }; user1.active = false;\`
**You cannot make individual fields mutable** — it's all or nothing.

**Field init shorthand** — when variable name matches field name:
fn build_user(email: String, username: String) -> User {
    User {
        email,     // shorthand for email: email
        username,  // shorthand for username: username
        active: true,
        sign_in_count: 1,
    }
}

**Struct update syntax** — create a new struct from an old one:
let user2 = User {
    email: String::from("bob@example.com"),
    ..user1  // all other fields from user1
};
// WARNING: user1.username was MOVED to user2 (String is not Copy)
// user1.active and user1.sign_in_count are still valid (they are Copy)

**Key insight:** struct update syntax (\`..user1\`) moves non-Copy fields. After this, you can't use \`user1.username\` or \`user1.email\`, but you CAN use \`user1.active\` and \`user1.sign_in_count\` because they implement Copy.`},{heading:"Tuple Structs — Named Tuples",body:`**Tuple structs have a name but unnamed fields. They're accessed by index.**

struct Color(u8, u8, u8);
struct Point(f64, f64, f64);

let red = Color(255, 0, 0);
let origin = Point(0.0, 0.0, 0.0);

println!("Red: {}", red.0); // access by index
println!("Y: {}", origin.1);

**Why tuple structs instead of regular tuples?**
• **Type safety:** Color and Point have different types even though both hold three numbers
• A function expecting Color won't accept a Point, even if the field types match
• This is Rust's version of the **newtype pattern** — wrapping a type to create a distinct type

**The newtype pattern — single-field tuple structs:**

struct Meters(f64);
struct Seconds(f64);

fn speed(distance: Meters, time: Seconds) -> f64 {
    distance.0 / time.0
}

// speed(Seconds(10.0), Meters(100.0)) — ERROR: wrong types!
// The type system prevents mixing up meters and seconds.

**Mars Climate Orbiter crashed because Lockheed Martin used pound-seconds while NASA expected newton-seconds.** Newtypes would have caught this at compile time.

**Destructuring tuple structs:**
let Color(r, g, b) = red;
println!("Red channel: {}", r); // 255`},{heading:"Unit Structs — Zero-Size Types",body:`**Unit structs have no fields. They take up zero bytes of memory.**

struct Marker;
struct AlwaysEqual;

let m = Marker;
let ae = AlwaysEqual;

**Why use zero-size types?**

**1. Trait implementations:** Implement a trait on a type with no data.

trait Greet {
    fn hello(&self) -> &str;
}

struct English;
struct Spanish;

impl Greet for English {
    fn hello(&self) -> &str { "Hello!" }
}
impl Greet for Spanish {
    fn hello(&self) -> &str { "Hola!" }
}

**2. Type-level markers:** Used in generics to select behavior at compile time.

struct Locked;
struct Unlocked;

struct Door<State> {
    _state: std::marker::PhantomData<State>,
}

impl Door<Locked> {
    fn unlock(self) -> Door<Unlocked> { Door { _state: std::marker::PhantomData } }
}
// Door<Locked> cannot be opened — the type system prevents it!

**3. The PhantomData marker:** Tell the compiler about type relationships without storing data. Used in unsafe code and lifetime management.

**Zero-cost:** Unit structs are optimized away entirely by the compiler. They exist only for type checking — no runtime representation.`}],questions:[{q:'After let user2 = User { email: String::from("new@x.com"), ..user1 };, which fields of user1 can you still access and why?',a:"You can still access user1.active (bool, implements Copy) and user1.sign_in_count (u64, implements Copy), but NOT user1.username or user1.email. The struct update syntax (..) moves non-Copy fields. String does not implement Copy (it owns heap data), so username is moved to user2. email is not moved because user2 provides its own email. But username is taken from user1 via .., so it's moved. Copy types (bool, u64) are duplicated, not moved, so they remain valid.",hint:"Think about which types implement Copy and which don't. Struct update moves non-Copy fields.",check:l=>{const s=l.toLowerCase();return(s.includes("active")||s.includes("sign_in_count")||s.includes("copy"))&&(s.includes("move")||s.includes("string")||s.includes("username"))}},{q:"What real-world bug does the newtype pattern (e.g., struct Meters(f64)) prevent?",a:"The newtype pattern prevents unit confusion bugs — accidentally passing a value in the wrong unit. The classic example is the Mars Climate Orbiter (1999), which crashed because one component provided thrust data in pound-force-seconds while another expected newton-seconds. With newtypes like struct PoundForceSeconds(f64) and struct NewtonSeconds(f64), the compiler would reject the mismatched types at compile time, preventing a $327 million failure.",hint:"Think about what happens when you confuse meters with feet, or seconds with milliseconds.",check:l=>{const s=l.toLowerCase();return(s.includes("unit")||s.includes("mars")||s.includes("meter")||s.includes("confus"))&&(s.includes("type")||s.includes("compile")||s.includes("prevent")||s.includes("safe"))}}]},{id:"methods",icon:"⚙️",color:"#D97706",title:"Methods & Associated Functions",subtitle:"impl blocks — adding behavior to your types with methods, constructors, and associated functions",resources:[{type:"read",title:"The Rust Book — Ch. 5.3: Method Syntax",url:"https://doc.rust-lang.org/book/ch05-03-method-syntax.html"},{type:"read",title:"Rust By Example — Methods",url:"https://doc.rust-lang.org/rust-by-example/fn/methods.html"},{type:"video",title:"Let's Get Rusty — Method Syntax",url:"https://www.youtube.com/watch?v=1zEQhSn5F2o"},{type:"read",title:"Rust Reference — Implementations",url:"https://doc.rust-lang.org/reference/items/implementations.html"}],content:[{heading:"Defining Methods with impl Blocks",body:`**Methods are functions defined inside an \`impl\` block that take \`self\` as their first parameter.**

struct Rectangle {
    width: f64,
    height: f64,
}

impl Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }

    fn perimeter(&self) -> f64 {
        2.0 * (self.width + self.height)
    }

    fn is_square(&self) -> bool {
        (self.width - self.height).abs() < f64::EPSILON
    }
}

let rect = Rectangle { width: 10.0, height: 5.0 };
println!("Area: {}", rect.area());       // 50.0
println!("Perimeter: {}", rect.perimeter()); // 30.0

**The three forms of \`self\`:**

| Signature | Meaning | When to Use |
|-----------|---------|-------------|
| \`&self\` | Immutable borrow | Read-only access (most common) |
| \`&mut self\` | Mutable borrow | Modify the struct's fields |
| \`self\` | Takes ownership | Consume the struct (transforms, builder pattern) |

**Mutable method:**
impl Rectangle {
    fn scale(&mut self, factor: f64) {
        self.width *= factor;
        self.height *= factor;
    }
}

let mut rect = Rectangle { width: 10.0, height: 5.0 };
rect.scale(2.0); // rect is now 20.0 x 10.0

**Consuming method (takes ownership):**
impl Rectangle {
    fn into_square(self) -> Rectangle {
        let side = self.width.max(self.height);
        Rectangle { width: side, height: side }
    }
}

let rect = Rectangle { width: 10.0, height: 5.0 };
let square = rect.into_square(); // rect is MOVED, can't use it anymore

**Auto-referencing:** Rust automatically adds \`&\`, \`&mut\`, or \`*\` when calling methods. \`rect.area()\` is automatically \`(&rect).area()\`. This is called "automatic referencing and dereferencing."`},{heading:"Associated Functions — Constructors and Utilities",body:`**Associated functions don't take \`self\` — they're called on the type, not on an instance.**

impl Rectangle {
    // Associated function (constructor) — no self parameter
    fn new(width: f64, height: f64) -> Rectangle {
        Rectangle { width, height }
    }

    fn square(size: f64) -> Rectangle {
        Rectangle { width: size, height: size }
    }
}

// Called with :: syntax (not dot notation)
let rect = Rectangle::new(10.0, 5.0);
let square = Rectangle::square(7.0);

**Rust has no constructors or \`new\` keyword.** The convention is:
• \`Type::new(...)\` — primary constructor
• \`Type::from_...\` — conversion constructors
• \`Type::with_...\` — configuration constructors
• \`Type::default()\` — default values (via the Default trait)

**Multiple impl blocks are allowed:**

impl Rectangle {
    fn new(w: f64, h: f64) -> Self { Self { width: w, height: h } }
}

impl Rectangle {
    fn area(&self) -> f64 { self.width * self.height }
}

**Note:** \`Self\` (capital S) refers to the type being implemented. Inside \`impl Rectangle { ... }\`, \`Self\` is \`Rectangle\`.

**Builder pattern using method chaining:**

struct RequestBuilder {
    url: String,
    method: String,
    timeout: u64,
}

impl RequestBuilder {
    fn new(url: &str) -> Self {
        Self { url: url.to_string(), method: "GET".to_string(), timeout: 30 }
    }
    fn method(mut self, m: &str) -> Self { self.method = m.to_string(); self }
    fn timeout(mut self, t: u64) -> Self { self.timeout = t; self }
}

let req = RequestBuilder::new("https://api.example.com")
    .method("POST")
    .timeout(60);`},{heading:"Multiple impl Blocks and Visibility",body:`**You can split methods across multiple \`impl\` blocks.** This is useful for:

**1. Organizing by purpose:**
impl User {
    // Constructors
    fn new(name: &str) -> Self { /* ... */ }
}

impl User {
    // Business logic
    fn can_access(&self, resource: &Resource) -> bool { /* ... */ }
}

**2. Conditional implementations (generics):**
struct Wrapper<T> { value: T }

impl<T: std::fmt::Display> Wrapper<T> {
    fn show(&self) { println!("{}", self.value); }
}

impl<T: Clone> Wrapper<T> {
    fn duplicate(&self) -> Self { Wrapper { value: self.value.clone() } }
}
// show() exists only for Display types, duplicate() only for Clone types

**Visibility:**
• Struct fields are **private by default** — even within the same module
• Use \`pub\` to make fields accessible outside the module
• Methods follow the same visibility rules

struct Account {
    pub name: String,      // public field
    balance: f64,          // private field
}

impl Account {
    pub fn new(name: &str, initial: f64) -> Self {
        Self { name: name.to_string(), balance: initial }
    }

    pub fn balance(&self) -> f64 { self.balance }     // public getter
    fn internal_audit(&self) { /* ... */ }              // private method
}

**Best practice:** Keep fields private and expose them through methods. This preserves invariants — e.g., ensuring balance never goes negative.`}],questions:[{q:"What is the difference between &self, &mut self, and self as method parameters?",a:"&self borrows the struct immutably (read-only access, most common for getters and computations). &mut self borrows the struct mutably (allows modifying fields, used for setters and state changes). self takes ownership of the struct (consumes it, used for transformations like into_square() or the builder pattern where you want to prevent using the original after the method call). The choice mirrors Rust's ownership system: borrow when you can, own when you must.",hint:"Think about the three levels of access: read, write, and consume.",check:l=>{const s=l.toLowerCase();return(s.includes("immutable")||s.includes("read"))&&(s.includes("mutable")||s.includes("modify")||s.includes("write"))&&(s.includes("ownership")||s.includes("consume")||s.includes("move"))}}]},{id:"enums",icon:"🔀",color:"#7C3AED",title:"Enums — Data-Carrying Variants",subtitle:"Algebraic data types — each variant can hold different data, enabling precise domain modeling",resources:[{type:"read",title:"The Rust Book — Ch. 6.1: Defining an Enum",url:"https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html"},{type:"read",title:"Rust By Example — Enums",url:"https://doc.rust-lang.org/rust-by-example/custom_types/enum.html"},{type:"video",title:"Let's Get Rusty — Enums in Rust",url:"https://www.youtube.com/watch?v=DSZqIJhkNCM"},{type:"read",title:"Rust Reference — Enumeration types",url:"https://doc.rust-lang.org/reference/types/enum.html"}],content:[{heading:"C-Like Enums and Enums with Data",body:`**Rust enums are algebraic data types — each variant can hold different types and amounts of data.**

**C-like enum (no data, just variants):**
enum Direction {
    North,
    South,
    East,
    West,
}

let d = Direction::North;

**Enum with data (each variant holds different data):**
enum IpAddr {
    V4(u8, u8, u8, u8),    // tuple variant: 4 octets
    V6(String),              // single String
}

let home = IpAddr::V4(127, 0, 0, 1);
let loopback = IpAddr::V6(String::from("::1"));

**Enums with named fields (struct-like variants):**
enum Shape {
    Circle { radius: f64 },
    Rectangle { width: f64, height: f64 },
    Triangle { base: f64, height: f64 },
}

let s = Shape::Circle { radius: 5.0 };

**Mixed variants:**
enum Message {
    Quit,                         // unit variant (no data)
    Move { x: i32, y: i32 },     // struct variant
    Write(String),                // tuple variant
    ChangeColor(u8, u8, u8),     // tuple variant with 3 fields
}

**This is equivalent to defining four separate structs, but with one huge advantage:** a single \`Message\` type can hold any of these variants. A \`Vec<Message>\` can contain any mix of Quit, Move, Write, and ChangeColor values.

**Enums can have methods too:**
impl Message {
    fn call(&self) {
        // handle each variant
    }
}

**Memory layout:** The enum's size is the size of the largest variant plus a tag (discriminant) to identify which variant is active. \`Message\` is as large as \`Write(String)\` (24 bytes) plus the discriminant (usually 1-8 bytes, optimized by the compiler).`},{heading:"Option<T> — Rust's Null Replacement",body:`**Rust has no null. Instead, it uses \`Option<T>\` to represent values that may or may not exist.**

enum Option<T> {
    Some(T),  // a value exists
    None,     // no value
}

// These are built into the language — no import needed
let some_number: Option<i32> = Some(42);
let no_number: Option<i32> = None;

**Why Option instead of null?**
• \`null\` in Java/C# can cause NullPointerException at RUNTIME
• \`None\` in Rust must be handled at COMPILE TIME — you can't use an Option<T> as a T directly

// let x: i32 = some_number; // ERROR: expected i32, found Option<i32>

**You must unwrap the Option:**
// Pattern matching (safest):
match some_number {
    Some(n) => println!("Got: {}", n),
    None => println!("Nothing!"),
}

// if let (concise for single variant):
if let Some(n) = some_number {
    println!("Got: {}", n);
}

// Methods on Option:
let val = some_number.unwrap();         // panics if None!
let val = some_number.unwrap_or(0);     // returns 0 if None
let val = some_number.expect("should exist"); // panics with message

**Chaining Options (monadic operations):**
let result = some_number
    .map(|n| n * 2)            // Some(84)
    .filter(|&n| n > 50)       // Some(84) — passes filter
    .unwrap_or(0);             // 84

**The billion-dollar mistake:** Tony Hoare, inventor of null references, called it his "billion-dollar mistake." Rust's Option<T> eliminates this entire class of bugs by forcing explicit handling of the absent case.`},{heading:"Result<T, E> — Typed Error Handling",body:`**\`Result<T, E>\` represents an operation that can succeed (Ok) or fail (Err).**

enum Result<T, E> {
    Ok(T),   // success with value T
    Err(E),  // failure with error E
}

**Example — file reading:**
use std::fs;

fn read_config() -> Result<String, std::io::Error> {
    fs::read_to_string("config.toml")
}

match read_config() {
    Ok(contents) => println!("Config: {}", contents),
    Err(e) => eprintln!("Failed to read config: {}", e),
}

**The ? operator — early return on error:**
fn read_username() -> Result<String, std::io::Error> {
    let mut s = fs::read_to_string("username.txt")?;
    // If read_to_string returns Err, ? returns it immediately
    // If it returns Ok, the value is extracted into s
    s.trim_end().to_string();
    Ok(s)
}

**Result combinators:**
let config = fs::read_to_string("config.toml")
    .map(|s| s.trim().to_string())        // transform Ok value
    .unwrap_or_else(|_| "default".into()); // fallback on Err

**Option vs Result:**
| Type | Success | Failure | Use When |
|------|---------|---------|----------|
| Option<T> | Some(T) | None | Value may not exist (no error info) |
| Result<T,E> | Ok(T) | Err(E) | Operation may fail (with error details) |

**Converting between them:**
let opt: Option<i32> = Some(42);
let res: Result<i32, &str> = opt.ok_or("missing"); // Option → Result

let res: Result<i32, &str> = Ok(42);
let opt: Option<i32> = res.ok(); // Result → Option (drops error info)`}],questions:[{q:"Why can't you use an Option<i32> directly where an i32 is expected?",a:"Because Option<i32> and i32 are completely different types. Option<i32> is an enum with two variants: Some(i32) and None. Rust's type system requires you to explicitly handle the None case before accessing the inner i32 value. This is by design — it forces you to consider what happens when the value is absent, preventing the equivalent of NullPointerException at compile time rather than runtime. You must use match, if let, unwrap(), unwrap_or(), or other Option methods to extract the inner value.",hint:"Think about what types Option<T> actually is — it's an enum, not a wrapper.",check:l=>{const s=l.toLowerCase();return(s.includes("different type")||s.includes("enum")||s.includes("none")||s.includes("handle"))&&(s.includes("compile")||s.includes("match")||s.includes("unwrap")||s.includes("explicit"))}},{q:"What is the memory size advantage of Option<&T> compared to Option<T> for heap types?",a:"Option<&T> benefits from null pointer optimization (NPO). Since a valid reference &T can never be null (0x0), the compiler uses 0x0 to represent None. This means Option<&T> is exactly the same size as &T — 8 bytes on 64-bit systems — with zero overhead. Similarly, Option<Box<T>>, Option<&T>, and Option<NonZeroU32> all use NPO. For regular Option<T> where T could be any value, a separate discriminant byte (tag) is needed to distinguish Some from None, making it slightly larger than T alone.",hint:"Think about null pointer optimization — what value can never be a valid reference?",check:l=>{const s=l.toLowerCase();return(s.includes("null pointer")||s.includes("npo")||s.includes("niche")||s.includes("zero"))&&(s.includes("same size")||s.includes("no overhead")||s.includes("8 bytes")||s.includes("optimization"))}}]},{id:"pattern-matching",icon:"🎯",color:"#DC2626",title:"Pattern Matching — match, if let, while let",subtitle:"Exhaustive, compiler-verified pattern matching — Rust's most powerful control flow construct",resources:[{type:"read",title:"The Rust Book — Ch. 6.2: The match Control Flow Construct",url:"https://doc.rust-lang.org/book/ch06-02-match.html"},{type:"read",title:"The Rust Book — Ch. 18: Patterns and Matching",url:"https://doc.rust-lang.org/book/ch18-00-patterns.html"},{type:"video",title:"Let's Get Rusty — Pattern Matching",url:"https://www.youtube.com/watch?v=DSZqIJhkNCM"},{type:"read",title:"Rust By Example — match",url:"https://doc.rust-lang.org/rust-by-example/flow_control/match.html"},{type:"read",title:"Rust Reference — Patterns",url:"https://doc.rust-lang.org/reference/patterns.html"}],content:[{heading:"The match Expression — Exhaustive Pattern Matching",body:`**\`match\` compares a value against a series of patterns and runs the code for the first match.**

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u32 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}

**Exhaustiveness:** The compiler REQUIRES that every possible value is covered. If you add a new variant to an enum and forget to handle it in a match, the code won't compile. This is a killer feature for refactoring.

**Multi-line arms with blocks:**
match coin {
    Coin::Penny => {
        println!("Lucky penny!");
        1
    },
    Coin::Nickel => 5,
    Coin::Dime => 10,
    Coin::Quarter => 25,
}

**Matching with bound values:**
enum UsState { Alabama, Alaska, /* ... */ }
enum Coin { Penny, Nickel, Dime, Quarter(UsState) }

fn value_in_cents(coin: Coin) -> u32 {
    match coin {
        Coin::Quarter(state) => {
            println!("Quarter from {:?}", state);
            25
        },
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
    }
}

**The \`_\` wildcard — catch-all pattern:**
let x = 7;
match x {
    1 => println!("one"),
    2 => println!("two"),
    _ => println!("something else"), // matches everything
}

**match is an expression — it returns a value:**
let description = match coin {
    Coin::Penny => "small copper coin",
    Coin::Nickel => "medium silver coin",
    Coin::Dime => "small silver coin",
    Coin::Quarter(_) => "large silver coin",
};`},{heading:"Advanced Pattern Matching Features",body:`**Pattern matching in Rust goes far beyond simple enum matching.**

**Multiple patterns with |:**
let x = 3;
match x {
    1 | 2 => println!("one or two"),
    3..=5 => println!("three through five"), // inclusive range
    _ => println!("other"),
}

**Match guards with if:**
let num = Some(4);
match num {
    Some(x) if x < 5 => println!("less than five: {}", x),
    Some(x) => println!("{}", x),
    None => (),
}

**Destructuring structs:**
struct Point { x: i32, y: i32 }

let p = Point { x: 0, y: 7 };
match p {
    Point { x: 0, y } => println!("on y-axis at {}", y),
    Point { x, y: 0 } => println!("on x-axis at {}", x),
    Point { x, y } => println!("at ({}, {})", x, y),
}

**Nested destructuring:**
enum Color {
    Rgb(u8, u8, u8),
    Hsv(u16, u8, u8),
}

enum Shape {
    Circle { center: Point, radius: f64, color: Color },
}

let shape = Shape::Circle {
    center: Point { x: 0, y: 0 },
    radius: 5.0,
    color: Color::Rgb(255, 0, 0),
};

match shape {
    Shape::Circle {
        center: Point { x, y },
        radius,
        color: Color::Rgb(r, _, _),
    } => println!("Circle at ({},{}) r={} red={}", x, y, radius, r),
    _ => (),
}

**The @ binding — match and capture:**
let msg = "hello";
match msg.len() {
    n @ 0..=5 => println!("short ({})", n),
    n @ 6..=20 => println!("medium ({})", n),
    n => println!("long ({})", n),
}

**Ignoring values:**
• \`_\` — ignore a single value
• \`..\` — ignore remaining fields: \`Point { x, .. }\`
• \`_name\` — suppress unused variable warning`},{heading:"if let and while let — Concise Matching",body:`**\`if let\` is syntactic sugar for a match with one pattern and a catch-all.**

// Verbose match:
match config_max {
    Some(max) => println!("Max is {}", max),
    _ => (),
}

// Concise if let:
if let Some(max) = config_max {
    println!("Max is {}", max);
}

**\`if let\` with else:**
if let Some(max) = config_max {
    println!("Max is {}", max);
} else {
    println!("No max configured");
}

**\`while let\` — loop while a pattern matches:**
let mut stack = vec![1, 2, 3];

while let Some(top) = stack.pop() {
    println!("{}", top); // prints 3, 2, 1
}
// loop ends when pop() returns None

**\`let else\` (Rust 1.65+) — diverge on mismatch:**
fn get_username(id: u32) -> Option<String> { /* ... */ }

let Some(username) = get_username(42) else {
    println!("User not found");
    return; // must diverge: return, break, continue, or panic!
};
// username is available here as a String, not Option<String>

**When to use which:**
| Pattern | Use When |
|---------|----------|
| match | Multiple arms, exhaustive matching, returning values |
| if let | One pattern you care about, optional else |
| while let | Loop until pattern stops matching |
| let else | Unwrap or diverge (early return) |

**if let chains (Rust nightly, coming soon):**
if let Some(x) = opt1 && let Some(y) = opt2 {
    println!("{} {}", x, y);
}`}],questions:[{q:"What happens if you add a new variant to an enum but don't update all match expressions that use it?",a:"The code won't compile. Rust's match expressions are exhaustive — the compiler checks that every possible variant is covered. If you add a new variant and any match expression doesn't handle it (and doesn't have a catch-all _ arm), you get error E0004: 'non-exhaustive patterns'. This is one of Rust's best refactoring features: the compiler tells you every location in the codebase that needs updating when you change an enum. Languages without exhaustive matching (like if/else chains) silently fall through, causing runtime bugs.",hint:"Think about what 'exhaustive' means in the context of match.",check:l=>{const s=l.toLowerCase();return(s.includes("compile")||s.includes("error")||s.includes("won't"))&&(s.includes("exhaustive")||s.includes("every")||s.includes("all variant")||s.includes("covered"))}},{q:"Write a match expression that handles Option<i32>: prints the value if Some and > 10, prints 'small' if Some and <= 10, and prints 'none' if None.",a:'match value { Some(n) if n > 10 => println!("{}", n), Some(_) => println!("small"), None => println!("none"), } — This uses a match guard (if n > 10) on the first arm. The second arm Some(_) catches all remaining Some values (where n <= 10). None catches the absent case. The order matters — match guards are checked first, so the more specific pattern must come before the catch-all Some(_).',hint:"Use match guards (if condition) to filter within a variant.",check:l=>{const s=l.toLowerCase();return s.includes("some")&&s.includes("none")&&(s.includes("guard")||s.includes("if")||s.includes("> 10"))}}]},{id:"destructuring",icon:"📦",color:"#0E7490",title:"Destructuring",subtitle:"Extract fields from structs, tuples, and enums in let bindings, match arms, and function parameters",resources:[{type:"read",title:"The Rust Book — Ch. 18.3: Pattern Syntax",url:"https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html"},{type:"read",title:"Rust By Example — Destructuring",url:"https://doc.rust-lang.org/rust-by-example/flow_control/match/destructuring.html"},{type:"read",title:"Rust Reference — Destructuring assignment",url:"https://doc.rust-lang.org/reference/expressions/underscore-expr.html"},{type:"video",title:"Rust in Motion — Pattern Matching & Destructuring",url:"https://www.youtube.com/watch?v=8_HPKGZGM5I"}],content:[{heading:"Destructuring Tuples and Structs",body:`**Destructuring extracts values from composite types into individual variables.**

**Tuples:**
let (x, y, z) = (1, 2, 3);
println!("{} {} {}", x, y, z); // 1 2 3

// Ignore values with _
let (first, _, third) = ("a", "b", "c");
// second is ignored

**Structs:**
struct Point { x: f64, y: f64 }

let p = Point { x: 3.0, y: 4.0 };
let Point { x, y } = p;
println!("x={}, y={}", x, y);

// Rename during destructuring:
let Point { x: horizontal, y: vertical } = p;
println!("h={}, v={}", horizontal, vertical);

**In function parameters:**
fn print_point(&Point { x, y }: &Point) {
    println!("({}, {})", x, y);
}

let p = Point { x: 1.0, y: 2.0 };
print_point(&p); // (1.0, 2.0)

**Nested destructuring:**
struct Line { start: Point, end: Point }

let line = Line {
    start: Point { x: 0.0, y: 0.0 },
    end: Point { x: 10.0, y: 5.0 },
};

let Line { start: Point { x: x1, y: y1 }, end: Point { x: x2, y: y2 } } = line;
println!("({},{}) to ({},{})", x1, y1, x2, y2);

**Rest patterns with ..:**
struct Config {
    name: String,
    port: u16,
    host: String,
    workers: usize,
}

let Config { name, port, .. } = config; // ignore host and workers`},{heading:"Destructuring Enums and Complex Types",body:`**Enum destructuring extracts the data from each variant:**

enum Command {
    Move { x: i32, y: i32 },
    Print(String),
    Quit,
}

let cmd = Command::Move { x: 10, y: 20 };

match cmd {
    Command::Move { x, y } => println!("Move to ({}, {})", x, y),
    Command::Print(msg) => println!("{}", msg),
    Command::Quit => println!("Quitting"),
}

**Destructuring references:**
let reference = &42;
let &value = reference; // value: i32 = 42
// or equivalently:
let value = *reference;

**Destructuring in for loops:**
let pairs = vec![(1, "one"), (2, "two"), (3, "three")];

for (num, name) in &pairs {
    println!("{}: {}", num, name);
}

// With HashMap:
use std::collections::HashMap;
let mut scores = HashMap::new();
scores.insert("Alice", 100);
scores.insert("Bob", 85);

for (name, score) in &scores {
    println!("{}: {}", name, score);
}

**Destructuring with let else:**
let Some(value) = optional_value else {
    return Err("missing value");
};
// value is now available as the inner type

**Destructuring closures:**
let points = vec![Point { x: 1.0, y: 2.0 }, Point { x: 3.0, y: 4.0 }];
let distances: Vec<f64> = points.iter()
    .map(|&Point { x, y }| (x * x + y * y).sqrt())
    .collect();`},{heading:"Irrefutable vs Refutable Patterns",body:`**Rust distinguishes between patterns that always match and patterns that might not.**

**Irrefutable patterns — always match:**
• \`let (x, y) = (1, 2);\` — a tuple always has two elements
• \`let Point { x, y } = p;\` — a Point always has x and y
• \`fn foo((x, y): (i32, i32))\` — the parameter always destructures

**Refutable patterns — might not match:**
• \`if let Some(x) = value\` — might be None
• \`while let Some(x) = iter.next()\` — might return None
• \`match\` arms (except the last catch-all)

**The compiler enforces this:**
// ERROR: refutable pattern in irrefutable context
// let Some(x) = option_value;
// What if it's None? let can't handle that.

// OK: use if let for refutable patterns
if let Some(x) = option_value {
    println!("{}", x);
}

// OK with let-else (Rust 1.65+) — must diverge on mismatch
let Some(x) = option_value else { return; };

**Where each kind is required:**

| Context | Required | Example |
|---------|----------|---------|
| \`let\` binding | Irrefutable | \`let (x, y) = pair;\` |
| Function param | Irrefutable | \`fn f((x, y): (i32, i32))\` |
| \`for\` loop | Irrefutable | \`for (k, v) in map\` |
| \`if let\` | Refutable | \`if let Some(x) = opt\` |
| \`while let\` | Refutable | \`while let Some(x) = iter.next()\` |
| \`match\` arms | Either | First arms refutable, last can be irrefutable |
| \`let else\` | Refutable | \`let Ok(x) = result else { return; };\` |`}],questions:[{q:"What is the difference between an irrefutable and a refutable pattern, and where is each used?",a:"An irrefutable pattern always matches the value (e.g., let (x, y) = (1, 2) — a tuple always destructures). A refutable pattern might not match (e.g., if let Some(x) = value — value could be None). Irrefutable patterns are required in let bindings, function parameters, and for loops — contexts where failure to match would be a logic error. Refutable patterns are used in if let, while let, and match arms — contexts that have a path for when the pattern doesn't match. The compiler enforces this distinction and will error if you use a refutable pattern where an irrefutable one is required.",hint:"Think about whether the pattern can fail — and what would happen if it did in a let binding.",check:l=>{const s=l.toLowerCase();return(s.includes("irrefutable")||s.includes("always match"))&&(s.includes("refutable")||s.includes("might not")||s.includes("may not"))}}]},{id:"option-deep",icon:"❓",color:"#B91C1C",title:"The Option Type Deep Dive",subtitle:"Mastering Option<T> methods — map, and_then, unwrap_or, flatten, zip, and the full combinator toolkit",resources:[{type:"read",title:"Rust std::option::Option documentation",url:"https://doc.rust-lang.org/std/option/enum.Option.html"},{type:"read",title:"Rust By Example — Option & unwrap",url:"https://doc.rust-lang.org/rust-by-example/error/option_unwrap.html"},{type:"video",title:"Jon Gjengset — Error Handling in Rust",url:"https://www.youtube.com/watch?v=jpVzSse7oJ4"},{type:"read",title:"The Rust Book — Ch. 6.3: Concise Control Flow with if let",url:"https://doc.rust-lang.org/book/ch06-03-if-let.html"}],content:[{heading:"Option Combinators — Functional Transformation",body:`**Option has a rich set of methods for transforming and chaining operations without explicit matching.**

**\`map\` — transform the inner value:**
let len: Option<usize> = Some("hello").map(|s| s.len()); // Some(5)
let len: Option<usize> = None::<&str>.map(|s| s.len());  // None

**\`and_then\` (flatMap) — chain operations that return Option:**
fn parse_port(s: &str) -> Option<u16> {
    s.parse::<u16>().ok()
}

let port: Option<u16> = Some("8080")
    .and_then(parse_port); // Some(8080)

let port: Option<u16> = Some("not_a_port")
    .and_then(parse_port); // None

// map vs and_then:
// map:      Option<A> → (A → B) → Option<B>
// and_then: Option<A> → (A → Option<B>) → Option<B>
// Use map when the transform always succeeds
// Use and_then when the transform might fail (returns Option)

**\`filter\` — keep Some only if predicate is true:**
let even = Some(4).filter(|&x| x % 2 == 0); // Some(4)
let odd = Some(3).filter(|&x| x % 2 == 0);  // None

**\`flatten\` — collapse Option<Option<T>> to Option<T>:**
let nested: Option<Option<i32>> = Some(Some(42));
let flat: Option<i32> = nested.flatten(); // Some(42)

let nested: Option<Option<i32>> = Some(None);
let flat: Option<i32> = nested.flatten(); // None

**\`zip\` — combine two Options:**
let x = Some(1);
let y = Some("hi");
let zipped = x.zip(y); // Some((1, "hi"))

let x = Some(1);
let y: Option<&str> = None;
let zipped = x.zip(y); // None`},{heading:"Unwrapping and Default Values",body:`**Methods for extracting the inner value from Option:**

| Method | None Behavior | Use When |
|--------|---------------|----------|
| \`unwrap()\` | Panics | Prototyping only, or when you've proven Some |
| \`expect("msg")\` | Panics with message | Tests, or when None is a bug |
| \`unwrap_or(default)\` | Returns default | You have a cheap default value |
| \`unwrap_or_else(f)\` | Calls f() | Default is expensive to compute |
| \`unwrap_or_default()\` | Returns T::default() | T implements Default |

**Examples:**
let x: Option<i32> = None;

let val = x.unwrap_or(0);           // 0
let val = x.unwrap_or_else(|| expensive_computation()); // lazy
let val = x.unwrap_or_default();    // 0 (i32::default())

**\`is_some()\` and \`is_none()\`:**
if config.port.is_some() {
    // use the port
}

**\`take()\` — extract value, leaving None in its place:**
let mut x = Some(42);
let taken = x.take(); // taken = Some(42), x = None

**\`replace()\` — insert a value, return the old one:**
let mut x = Some(42);
let old = x.replace(99); // old = Some(42), x = Some(99)

**\`get_or_insert()\` — insert if None, return &mut:**
let mut x: Option<i32> = None;
let val = x.get_or_insert(42); // x = Some(42), val = &mut 42
*val += 1; // x = Some(43)

**Chaining example — real-world config parsing:**
fn get_port(config: &HashMap<String, String>) -> u16 {
    config.get("port")        // Option<&String>
        .and_then(|s| s.parse().ok())  // Option<u16>
        .unwrap_or(8080)               // u16, default 8080
}`},{heading:"Option in Practice — Common Patterns",body:`**The ? operator with Option (in functions returning Option):**
fn first_even(numbers: &[i32]) -> Option<i32> {
    let first = numbers.first()?;  // returns None if empty
    if first % 2 == 0 {
        Some(*first)
    } else {
        None
    }
}

**Converting between Option and Result:**
// Option → Result: ok_or, ok_or_else
let opt: Option<i32> = Some(42);
let res: Result<i32, &str> = opt.ok_or("missing");  // Ok(42)

let opt: Option<i32> = None;
let res: Result<i32, &str> = opt.ok_or("missing");  // Err("missing")

// Result → Option: .ok(), .err()
let res: Result<i32, &str> = Ok(42);
let opt: Option<i32> = res.ok();  // Some(42)

**Iterating over Options:**
// Option implements IntoIterator: Some yields one element, None yields zero
let options = vec![Some(1), None, Some(3), None, Some(5)];
let values: Vec<i32> = options.into_iter().flatten().collect();
// [1, 3, 5]

// filter_map — combine filter + map:
let strings = vec!["1", "abc", "3", "def", "5"];
let numbers: Vec<i32> = strings.iter()
    .filter_map(|s| s.parse().ok())
    .collect();
// [1, 3, 5]

**The or / or_else pattern — fallback chain:**
fn get_from_cache(key: &str) -> Option<String> { None }
fn get_from_db(key: &str) -> Option<String> { Some("found".into()) }
fn get_from_api(key: &str) -> Option<String> { None }

let value = get_from_cache("key")
    .or_else(|| get_from_db("key"))
    .or_else(|| get_from_api("key"))
    .unwrap_or_else(|| "default".into());`}],questions:[{q:"What is the difference between Option::map and Option::and_then?",a:"map takes a function A → B and transforms Option<A> into Option<B>. The closure always returns a plain value B, and map wraps it in Some. and_then (also called flatMap in other languages) takes a function A → Option<B> — the closure itself returns an Option. If map were used with a closure returning Option, you'd get Option<Option<B>> (nested). and_then flattens this to Option<B>. Use map when the transformation always succeeds; use and_then when it might fail (e.g., parsing a string to a number).",hint:"Look at the return types: map's closure returns B, and_then's closure returns Option<B>.",check:l=>{const s=l.toLowerCase();return s.includes("map")&&s.includes("and_then")&&(s.includes("option")||s.includes("flatten")||s.includes("nested")||s.includes("return"))}}]},{id:"newtype",icon:"🏷️",color:"#15803D",title:"The Newtype Pattern",subtitle:"Wrapping types for safety, abstraction, and trait implementation — a zero-cost Rust idiom",resources:[{type:"read",title:"The Rust Book — Ch. 19.3: Advanced Types (newtype)",url:"https://doc.rust-lang.org/book/ch19-04-advanced-types.html"},{type:"read",title:"Rust Design Patterns — Newtype",url:"https://rust-unofficial.github.io/patterns/patterns/behavioural/newtype.html"},{type:"video",title:"Jon Gjengset — Type-Driven API Design in Rust",url:"https://www.youtube.com/watch?v=bnnacleqg6k"},{type:"read",title:"Rust By Example — New Type Idiom",url:"https://doc.rust-lang.org/rust-by-example/generics/new_types.html"}],content:[{heading:"What Is the Newtype Pattern",body:`**A newtype is a tuple struct with a single field that wraps an existing type.**

struct Meters(f64);
struct Seconds(f64);
struct UserId(u64);
struct Email(String);

**Why wrap a type?**

**1. Type safety — prevent mixing up values:**
fn speed(distance: Meters, time: Seconds) -> f64 {
    distance.0 / time.0
}

// speed(Seconds(10.0), Meters(100.0)) — COMPILE ERROR
// You can't accidentally swap distance and time!

**2. Implement foreign traits on foreign types (orphan rule workaround):**
// You can't impl Display for Vec<String> (both are foreign)
// But you CAN impl Display for a newtype wrapping Vec<String>:

struct Wrapper(Vec<String>);

impl std::fmt::Display for Wrapper {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "[{}]", self.0.join(", "))
    }
}

**3. Encapsulation — hide implementation details:**
struct Password(String);

impl Password {
    fn new(raw: &str) -> Result<Self, &'static str> {
        if raw.len() < 8 { return Err("too short"); }
        Ok(Password(raw.to_string()))
    }
    // No direct access to inner String — must use methods
}

**Zero-cost:** Newtypes compile away completely. \`Meters(42.0)\` has the exact same memory layout and performance as \`42.0f64\`. The type wrapper exists only at compile time for the type checker.`},{heading:"Implementing Deref for Newtypes",body:`**Use \`Deref\` to make a newtype transparently behave like its inner type:**

use std::ops::Deref;

struct Email(String);

impl Deref for Email {
    type Target = String;
    fn deref(&self) -> &String { &self.0 }
}

let email = Email("alice@example.com".to_string());
println!("Length: {}", email.len()); // calls String::len() via Deref
// email.len() → (*email).len() → email.0.len()

**When to implement Deref:**
• When your newtype IS-A the inner type (Email IS-A String, in a sense)
• When you want transparent access to inner methods
• When you're building smart pointer-like types

**When NOT to implement Deref:**
• When the newtype has different semantics (Meters should NOT deref to f64 — you'd lose type safety)
• When you want to restrict the API (Password should NOT expose the inner String)

**Alternative: selective method delegation:**
struct UserId(u64);

impl UserId {
    fn value(&self) -> u64 { self.0 }
    fn is_valid(&self) -> bool { self.0 > 0 }
}
// Only expose what makes sense — don't blanket-deref

**The From trait for newtype conversions:**
impl From<u64> for UserId {
    fn from(id: u64) -> Self { UserId(id) }
}

impl From<UserId> for u64 {
    fn from(id: UserId) -> Self { id.0 }
}

let id: UserId = 42u64.into();
let raw: u64 = id.into();`},{heading:"Real-World Newtype Examples",body:`**Newtypes are used extensively in production Rust:**

**Validated types — enforce invariants at construction:**
struct NonEmptyString(String);

impl NonEmptyString {
    fn new(s: String) -> Option<Self> {
        if s.is_empty() { None } else { Some(NonEmptyString(s)) }
    }
    fn as_str(&self) -> &str { &self.0 }
}
// Once created, a NonEmptyString is GUARANTEED non-empty
// No need to check .is_empty() ever again

**Domain modeling:**
struct OrderId(uuid::Uuid);
struct CustomerId(uuid::Uuid);

// Can't accidentally pass a CustomerId where an OrderId is expected
fn get_order(id: OrderId) -> Order { /* ... */ }

**Units of measure (without a full units library):**
struct Celsius(f64);
struct Fahrenheit(f64);

impl Celsius {
    fn to_fahrenheit(&self) -> Fahrenheit {
        Fahrenheit(self.0 * 9.0 / 5.0 + 32.0)
    }
}

impl Fahrenheit {
    fn to_celsius(&self) -> Celsius {
        Celsius((self.0 - 32.0) * 5.0 / 9.0)
    }
}

**The std library uses newtypes extensively:**
• \`String\` wraps \`Vec<u8>\` (enforces UTF-8 invariant)
• \`PathBuf\` wraps \`OsString\` (enforces path semantics)
• \`NonZeroU32\` wraps \`u32\` (guarantees non-zero for Option optimization)

**Key takeaway:** Newtypes are one of Rust's most powerful patterns. They cost nothing at runtime but give you type safety, encapsulation, and the ability to implement traits on foreign types. Use them liberally.`}],questions:[{q:"How does the newtype pattern help work around Rust's orphan rule?",a:"The orphan rule says you can only implement a trait for a type if you own either the trait or the type (or both). This prevents implementing Display for Vec<String> because both Display and Vec are from the standard library. The newtype pattern wraps Vec<String> in a local type: struct Wrapper(Vec<String>). Since you own Wrapper, you can implement any trait on it: impl Display for Wrapper { ... }. The inner Vec<String> is accessed via self.0. This is zero-cost — the wrapper compiles away — but satisfies the orphan rule because Wrapper is a local type.",hint:"Think about what the orphan rule prevents and how creating a local type changes the equation.",check:l=>{const s=l.toLowerCase();return(s.includes("orphan")||s.includes("foreign")||s.includes("own"))&&(s.includes("wrap")||s.includes("local")||s.includes("newtype"))}}]}];function up({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")},E=()=>F("revealed"),p=()=>{var w;F("idle"),U(""),(w=q.current)==null||w.focus()};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:n.jsx("textarea",{ref:q,value:M,onChange:w=>U(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{flex:1,minWidth:200,padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans', sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",transition:"border 0.2s"}})}),x==="wrong"&&n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#DC2626",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:14},children:"✗"})," Not quite right. Try again or reveal the answer."]}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsx("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:600,transition:"opacity 0.2s",opacity:M.trim()?1:.4},children:"✓ Check Answer"}),n.jsx("button",{onClick:E,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal Answer"}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsx("summary",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#aaa",cursor:"pointer",userSelect:"none"},children:"💡 Hint"}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:16},children:"✓"})," Correct!"]}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:14},children:"📖"})," Answer"]}),n.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888"},children:"Try it myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function dp({embedded:l=!1}){const[s,S]=N.useState(null),[V,A]=N.useState(null),[M,U]=N.useState(new Set),[x,F]=N.useState({}),q=js.reduce((m,d)=>m+d.content.length,0),z=Math.round(M.size/q*100),E=m=>A(V===m?null:m),p=(m,d)=>{d.stopPropagation();const h=new Set(M);h.has(m)?h.delete(m):h.add(m),U(h)},w=m=>x[m]||"learn",T=m=>{var h;const d=m.split(`
`);if(d.some(u=>u.trim().startsWith("|"))){const u=[];let b=0;for(;b<d.length;)if(d[b].trim().startsWith("|")){const f=[];for(;b<d.length&&d[b].trim().startsWith("|");)f.push(d[b]),b++;const B=f.filter(y=>!y.match(/^\|\s*[-:]+/)),R=((h=B[0])==null?void 0:h.split("|").filter(y=>y.trim()).map(y=>y.trim()))||[],C=B.slice(1).map(y=>y.split("|").filter(G=>G.trim()).map(G=>G.trim()));u.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0"},children:n.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontFamily:"'DM Sans', sans-serif",fontSize:12},children:[n.jsx("thead",{children:n.jsx("tr",{children:R.map((y,G)=>n.jsx("th",{style:{padding:"6px 10px",borderBottom:"2px solid #E0DDD6",textAlign:"left",fontWeight:600,color:"#1a1a1a",background:"#FAF9F6"},children:y},G))})}),n.jsx("tbody",{children:C.map((y,G)=>n.jsx("tr",{children:y.map((re,oe)=>n.jsx("td",{style:{padding:"5px 10px",borderBottom:"1px solid #F0EDE6",color:"#444"},children:re},oe))},G))})]})},`t${b}`))}else{const f=d[b],B=f.startsWith("let ")||f.startsWith("fn ")||f.startsWith("//")||f.startsWith("    ")||f.startsWith("struct ")||f.startsWith("impl ")||f.startsWith("use ")||f.startsWith("pub ")||f.startsWith("println!")||f.startsWith("enum ")||f.startsWith("match ")||f.startsWith("if ")||f.startsWith("} else")||f.startsWith("}")||f.startsWith("{")||f.startsWith("#[")||f.startsWith("for ")||f.startsWith("while "),R=f.startsWith("let ")||f.startsWith("fn ")||f.startsWith("struct ")||f.startsWith("impl ")||f.startsWith("use ")||f.startsWith("pub ")||f.startsWith("enum ")||f.startsWith("match ")||f.startsWith("#[")||f.startsWith("for ");if(B)u.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:R?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:R?"6px 6px 0 0":0,marginTop:R?10:0},children:f},b));else if(f==="")u.push(n.jsx("div",{style:{height:8}},b));else{const C=f.split(/\*\*(.*?)\*\*/g);u.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:C.map((y,G)=>G%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:y},G):n.jsx("span",{children:y},G))},b))}b++}return u}return m.split(`
`).map((u,b)=>{const f=u.startsWith("let ")||u.startsWith("fn ")||u.startsWith("//")||u.startsWith("    ")||u.startsWith("struct ")||u.startsWith("impl ")||u.startsWith("use ")||u.startsWith("pub ")||u.startsWith("println!")||u.startsWith("enum ")||u.startsWith("match ")||u.startsWith("if ")||u.startsWith("} else")||u.startsWith("}")||u.startsWith("{")||u.startsWith("#[")||u.startsWith("for ")||u.startsWith("while "),B=u.startsWith("let ")||u.startsWith("fn ")||u.startsWith("struct ")||u.startsWith("impl ")||u.startsWith("use ")||u.startsWith("pub ")||u.startsWith("enum ")||u.startsWith("match ")||u.startsWith("#[")||u.startsWith("for ");if(f)return n.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:B?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:B?"6px 6px 0 0":0,marginTop:B?10:0},children:u},b);if(u==="")return n.jsx("div",{style:{height:8}},b);const R=u.split(/\*\*(.*?)\*\*/g);return n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:R.map((C,y)=>y%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:C},y):n.jsx("span",{children:C},y))},b)})};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),n.jsx("h1",{style:{fontSize:"clamp(30px, 5vw, 44px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Structs, Enums & Pattern Matching"}),n.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:24},children:["Learn, practice, go deeper. ",js.length," sections · ",q," concepts · ",js.reduce((m,d)=>{var h;return m+(((h=d.questions)==null?void 0:h.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pfill",style:{width:`${z}%`,height:"100%",background:"linear-gradient(90deg, #059669, #D97706, #7C3AED, #DC2626, #0E7490, #B91C1C, #15803D)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[M.size,"/",q]})]}),n.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Jc).map(([m,d])=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#777"},children:[n.jsxs("span",{className:"type-badge",style:{background:d.bg,color:d.color},children:[d.emoji," ",d.label]}),m==="infographic"&&"— Primary",m==="read"&&"— Secondary",m==="video"&&"— Supplement"]},m))})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:js.map(m=>{var B;const d=s===m.id,u=m.content.map((R,C)=>`${m.id}-${C}`).filter(R=>M.has(R)).length,b=w(m.id),f=((B=m.questions)==null?void 0:B.length)||0;return n.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>S(d?null:m.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:m.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono', monospace"},children:m.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15.5,fontWeight:600},children:m.title}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:2},children:m.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[u,"/",m.content.length]}),n.jsx("span",{className:"arr",style:{transform:d?"rotate(90deg)":"rotate(0)"},children:"›"})]}),d&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tab-btn ${b==="learn"?"active":""}`,onClick:()=>F(R=>({...R,[m.id]:"learn"})),children:"📖 Learn"}),n.jsxs("button",{className:`tab-btn ${b==="practice"?"active":""}`,onClick:()=>F(R=>({...R,[m.id]:"practice"})),children:["✏️ Practice (",f,")"]}),n.jsxs("button",{className:`tab-btn ${b==="deeper"?"active":""}`,onClick:()=>F(R=>({...R,[m.id]:"deeper"})),children:["🔗 Go Deeper (",m.resources.length,")"]})]}),b==="learn"&&n.jsx("div",{children:m.content.map((R,C)=>{const y=`${m.id}-${C}`,G=V===y,re=M.has(y);return n.jsxs("div",{style:{borderTop:C>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"block-row",onClick:()=>E(y),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`chk ${re?"done":""}`,onClick:oe=>p(y,oe),children:re&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:re?"#aaa":"#2a2a2a",textDecoration:re?"line-through":"none",flex:1},children:R.heading}),n.jsx("span",{className:"arr",style:{transform:G?"rotate(90deg)":"rotate(0)"},children:"›"})]}),G&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${m.color}20`,marginLeft:22},children:T(R.body)})]},C)})}),b==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Test your understanding. Type your answer and check, or reveal if you're stuck. Hints available for each question."}),(m.questions||[]).map((R,C)=>n.jsx(up,{q:R.q,a:R.a,hint:R.hint,check:R.check,color:m.color},`${m.id}-q-${C}`))]}),b==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:m.resources.map((R,C)=>{const y=Jc[R.type];return n.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:y.bg+"55"},children:[n.jsxs("span",{className:"type-badge",style:{background:y.bg,color:y.color},children:[y.emoji," ",y.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:R.title})]},C)})})]})]})]},m.id)})}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Three tabs per section: Learn (content) · Practice (questions) · Go Deeper (resources)"})]})}const Kc={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ms=[{id:"panic",icon:"💥",color:"#DC2626",title:"Unrecoverable Errors — panic!",subtitle:"When something goes catastrophically wrong — stack unwinding, abort mode, and when panicking is appropriate",resources:[{type:"read",title:"The Rust Book — Ch. 9.1: Unrecoverable Errors with panic!",url:"https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html"},{type:"read",title:"Rust By Example — panic!",url:"https://doc.rust-lang.org/rust-by-example/error/panic.html"},{type:"video",title:"Let's Get Rusty — Error Handling",url:"https://www.youtube.com/watch?v=wM6o70NAWUI"},{type:"read",title:"Rust Reference — Panic behavior",url:"https://doc.rust-lang.org/reference/panic.html"}],content:[{heading:"What Is panic! and When Does It Happen",body:`**\`panic!\` is Rust's mechanism for unrecoverable errors — situations where the program cannot continue safely.**

panic!("something went terribly wrong");

**Common causes of panics:**
• Explicit \`panic!()\` macro calls
• \`unwrap()\` on None or Err
• \`expect()\` on None or Err
• Array index out of bounds: \`let v = vec![1,2,3]; v[99];\`
• Integer overflow in debug mode
• \`unreachable!()\` macro if reached
• \`todo!()\` and \`unimplemented!()\` macros

**What happens when a panic occurs:**
1. Error message is printed to stderr
2. The stack begins **unwinding** (default behavior)
3. Each stack frame's destructors (\`Drop\`) are called
4. Resources are cleaned up (files closed, locks released, memory freed)
5. The thread terminates (or the program if it's the main thread)

**Example — unwrap causing panic:**
let config: Option<String> = None;
let value = config.unwrap(); // PANIC: called 'Option::unwrap()' on a 'None' value

**RUST_BACKTRACE for debugging:**
RUST_BACKTRACE=1 cargo run
// Shows the full stack trace leading to the panic
RUST_BACKTRACE=full cargo run
// Even more detail — includes system frames`},{heading:"Unwinding vs Abort",body:`**Rust offers two strategies when a panic occurs:**

**Unwinding (default):**
• Walks up the stack, calling destructors for each frame
• Cleans up all resources properly (RAII)
• Larger binary size (unwinding tables embedded in the binary)
• Slower panic path (but panics should be rare)
• Can be caught with \`std::panic::catch_unwind()\`

**Abort:**
• Immediately terminates the process
• No destructors called — OS reclaims everything
• Smaller binary size (~10% reduction)
• Faster "panic" (instant termination)
• Cannot be caught

**Configure in Cargo.toml:**
[profile.release]
panic = "abort"   # smaller binary, instant termination

[profile.dev]
panic = "unwind"  # default, useful for testing

**Catching panics (unwinding only):**
use std::panic;

let result = panic::catch_unwind(|| {
    panic!("oh no!");
});

match result {
    Ok(_) => println!("no panic"),
    Err(_) => println!("caught a panic"),
}

**When to use abort:**
• Embedded systems with no OS to clean up
• When binary size matters (WASM, microcontrollers)
• When you want the OS to handle cleanup (it will)
• When panics should never happen in production

**Key insight:** Whether you unwind or abort, the OS always reclaims memory when a process exits. Unwinding matters for resources the OS doesn't track: flushing buffers, closing network connections, releasing distributed locks.`},{heading:"When to Panic vs Return an Error",body:`**Decision framework:**

**Use panic! when:**
• A bug is detected that violates an invariant: \`assert!(index < len)\`
• Continuing would cause undefined behavior or data corruption
• In examples, prototypes, and tests: \`unwrap()\` is fine here
• When the caller cannot possibly recover

**Use Result when:**
• Failure is expected and normal: file not found, network timeout, parse error
• The caller can take meaningful action: retry, use default, show error to user
• The function is part of a library (let the consumer decide how to handle it)

**Guidelines from the Rust Book:**

| Situation | Approach |
|-----------|----------|
| Prototype/example code | \`unwrap()\` / \`expect()\` |
| Test code | \`unwrap()\` — test should fail on error |
| You have more info than compiler | \`unwrap()\` with comment explaining why it's safe |
| Invalid input from user | Return \`Result\` |
| I/O operations | Return \`Result\` |
| Library code | Return \`Result\` (almost always) |
| Violated invariant / programming bug | \`panic!\` or \`assert!\` |

**The \`expect()\` convention:**
// BAD — unhelpful panic message:
let file = File::open("config.toml").unwrap();

// GOOD — explains why this should never fail:
let file = File::open("config.toml")
    .expect("config.toml should exist in project root");

**assert! macros for invariants:**
fn set_age(age: u32) {
    assert!(age < 150, "age {} is unrealistic", age);
    // ... rest of the function
}
// This is appropriate because age >= 150 is a programming bug,
// not a user error.`}],questions:[{q:"What is the difference between panic 'unwind' and 'abort' modes, and when would you choose each?",a:"Unwind mode (default) walks up the stack calling destructors (Drop impls) for each frame, properly cleaning up resources like open files, mutex locks, and network connections. It produces larger binaries due to unwinding tables and allows catching panics with catch_unwind(). Abort mode immediately terminates the process without running destructors, producing smaller binaries (~10% reduction). Choose unwind for development and when RAII cleanup matters (e.g., database connections, distributed locks). Choose abort for production release builds when binary size matters (embedded, WASM), when panics should never occur, or when you trust the OS to reclaim all resources.",hint:"Think about what happens to open files and locks in each mode.",check:l=>{const s=l.toLowerCase();return s.includes("unwind")&&s.includes("abort")&&(s.includes("destructor")||s.includes("drop")||s.includes("cleanup")||s.includes("binary"))}},{q:"Should a library function that reads a file use panic! or Result? Why?",a:"It should return Result<T, E>, not panic. File operations can fail for many legitimate reasons: file doesn't exist, permission denied, disk full, network filesystem timeout. These are expected failures, not programming bugs. The library's caller is in the best position to decide how to handle the error: retry, use a default value, prompt the user, or propagate it further. Panicking in a library takes that choice away from the consumer. The Rust convention is: library code should almost never panic — return Result and let the application decide.",hint:"Consider who should decide how to handle a 'file not found' error — the library or the application?",check:l=>{const s=l.toLowerCase();return(s.includes("result")||s.includes("return"))&&(s.includes("caller")||s.includes("consumer")||s.includes("library")||s.includes("expected")||s.includes("recover"))}}]},{id:"result",icon:"✅",color:"#059669",title:"Result<T, E> Type",subtitle:"Rust's primary error handling type — Ok for success, Err for failure, with rich combinator methods",resources:[{type:"read",title:"The Rust Book — Ch. 9.2: Recoverable Errors with Result",url:"https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html"},{type:"read",title:"Rust std::result::Result documentation",url:"https://doc.rust-lang.org/std/result/enum.Result.html"},{type:"video",title:"Jon Gjengset — Error Handling in Rust",url:"https://www.youtube.com/watch?v=jpVzSse7oJ4"},{type:"read",title:"Rust By Example — Result",url:"https://doc.rust-lang.org/rust-by-example/error/result.html"}],content:[{heading:"Result Basics — Ok and Err",body:`**\`Result<T, E>\` is an enum with two variants: Ok(T) for success and Err(E) for failure.**

enum Result<T, E> {
    Ok(T),
    Err(E),
}

**Reading a file returns Result:**
use std::fs;

let content: Result<String, std::io::Error> = fs::read_to_string("hello.txt");

match content {
    Ok(text) => println!("File contents: {}", text),
    Err(e) => println!("Error reading file: {}", e),
}

**Result is used everywhere in Rust:**
• File I/O: \`fs::read_to_string()\` → \`Result<String, io::Error>\`
• Parsing: \`"42".parse::<i32>()\` → \`Result<i32, ParseIntError>\`
• Network: \`TcpStream::connect()\` → \`Result<TcpStream, io::Error>\`
• Serialization: \`serde_json::from_str()\` → \`Result<T, serde_json::Error>\`

**Unlike exceptions in Java/Python:**
• Errors are values, not control flow — they don't unwind the stack
• You can't accidentally ignore an error — the compiler warns on unused Results (#[must_use])
• The error type E is part of the function signature — callers know exactly what can fail

**Extracting values:**
let content = fs::read_to_string("hello.txt");

// These all extract the Ok value but handle Err differently:
let text = content.unwrap();              // panics on Err
let text = content.expect("file missing"); // panics with message
let text = content.unwrap_or("default".to_string()); // fallback value
let text = content.unwrap_or_default();    // uses String::default() = ""
let text = content.unwrap_or_else(|e| {
    eprintln!("Warning: {}", e);
    "fallback".to_string()
});`},{heading:"Result Combinators — map, and_then, or_else",body:`**Result has a rich set of methods for transforming and chaining without explicit match statements.**

**\`map\` — transform the Ok value:**
let num: Result<i32, String> = Ok(5);
let doubled: Result<i32, String> = num.map(|n| n * 2); // Ok(10)

let err: Result<i32, String> = Err("oops".into());
let doubled: Result<i32, String> = err.map(|n| n * 2); // Err("oops")
// map does nothing to Err — it passes through unchanged

**\`map_err\` — transform the Err value:**
let result: Result<i32, String> = Err("parse failed".into());
let result: Result<i32, AppError> = result.map_err(|s| AppError::Parse(s));

**\`and_then\` — chain operations that return Result:**
fn parse_and_double(s: &str) -> Result<i32, String> {
    s.parse::<i32>()
        .map_err(|e| e.to_string())
        .and_then(|n| {
            if n > 1000 {
                Err("number too large".to_string())
            } else {
                Ok(n * 2)
            }
        })
}

**\`or_else\` — try an alternative on Err:**
fn get_from_cache(key: &str) -> Result<String, &str> { Err("cache miss") }
fn get_from_db(key: &str) -> Result<String, &str> { Ok("found!".into()) }

let value = get_from_cache("key")
    .or_else(|_| get_from_db("key")); // tries DB if cache misses

**Chaining multiple operations:**
fn process_config(path: &str) -> Result<Config, Box<dyn std::error::Error>> {
    fs::read_to_string(path)           // Result<String, io::Error>
        .map_err(|e| e.into())         // convert error type
        .and_then(|s| parse_toml(&s))  // Result<Config, ParseError>
        .map(|mut c| { c.validate(); c }) // transform Ok value
}

**Comparison to Option combinators:**
| Operation | Option | Result |
|-----------|--------|--------|
| Transform value | map | map |
| Transform error | N/A | map_err |
| Chain fallible ops | and_then | and_then |
| Fallback | or / or_else | or / or_else |
| Convert | ok_or | ok (drops error) |`},{heading:"Pattern Matching on Result",body:`**While combinators are concise, pattern matching gives full control:**

**Basic match:**
match fs::read_to_string("config.toml") {
    Ok(contents) => process(contents),
    Err(e) => match e.kind() {
        std::io::ErrorKind::NotFound => {
            println!("Config not found, using defaults");
            process(default_config())
        }
        std::io::ErrorKind::PermissionDenied => {
            eprintln!("Permission denied reading config");
            std::process::exit(1);
        }
        _ => {
            eprintln!("Unexpected error: {}", e);
            std::process::exit(1);
        }
    }
}

**if let for single-variant handling:**
if let Ok(contents) = fs::read_to_string("optional.toml") {
    // use contents — silently ignore errors
}

if let Err(e) = save_to_disk(&data) {
    eprintln!("Warning: could not save: {}", e);
}

**let-else for early return:**
let Ok(contents) = fs::read_to_string("config.toml") else {
    eprintln!("Cannot read config");
    return Err(AppError::ConfigMissing);
};
// contents is available here as String

**Nested result handling:**
fn fetch_user(id: u64) -> Result<User, DbError> { /* ... */ }
fn validate_user(user: &User) -> Result<(), ValidationError> { /* ... */ }

fn process_user(id: u64) -> Result<String, Box<dyn Error>> {
    let user = fetch_user(id)?;
    validate_user(&user)?;
    Ok(format!("User {} is valid", user.name))
}`}],questions:[{q:"What does the #[must_use] attribute on Result do, and why is it important?",a:"The #[must_use] attribute causes the compiler to emit a warning if a Result value is not used — i.e., if you call a function that returns Result but don't handle, match, or assign the return value. This prevents silently ignoring errors. In languages like C, it's common to ignore the return value of functions like write() or close(), leading to silent data loss. Rust's #[must_use] on Result makes ignoring errors a visible code smell. You can suppress it with let _ = if you intentionally want to discard the result.",hint:"Think about what happens in C when you forget to check the return value of fwrite().",check:l=>{const s=l.toLowerCase();return(s.includes("warning")||s.includes("warn")||s.includes("compiler"))&&(s.includes("ignore")||s.includes("unused")||s.includes("discard")||s.includes("silent"))}}]},{id:"question-mark",icon:"❓",color:"#7C3AED",title:"The ? Operator",subtitle:"Ergonomic error propagation — the syntactic sugar that makes Result-based error handling concise",resources:[{type:"read",title:"The Rust Book — Ch. 9.2: A Shortcut for Propagating Errors",url:"https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#a-shortcut-for-propagating-errors-the--operator"},{type:"read",title:"Rust By Example — ? operator",url:"https://doc.rust-lang.org/rust-by-example/error/result/enter_question_mark.html"},{type:"video",title:"Let's Get Rusty — The ? Operator",url:"https://www.youtube.com/watch?v=s5S2Ed5T-dc"},{type:"read",title:"Rust Reference — The ? operator",url:"https://doc.rust-lang.org/reference/expressions/operator-expr.html#the-question-mark-operator"}],content:[{heading:"How ? Works — Desugaring",body:`**The \`?\` operator is syntactic sugar for early return on error.**

**Without ?:**
fn read_username() -> Result<String, io::Error> {
    let f = File::open("username.txt");
    let mut f = match f {
        Ok(file) => file,
        Err(e) => return Err(e),
    };
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

**With ?:**
fn read_username() -> Result<String, io::Error> {
    let mut f = File::open("username.txt")?;
    let mut s = String::new();
    f.read_to_string(&mut s)?;
    Ok(s)
}

**Even more concise with chaining:**
fn read_username() -> Result<String, io::Error> {
    let mut s = String::new();
    File::open("username.txt")?.read_to_string(&mut s)?;
    Ok(s)
}

**What ? does at each step:**
1. If the Result is \`Ok(value)\`, extract \`value\` and continue
2. If the Result is \`Err(e)\`, call \`From::from(e)\` to convert the error type, then \`return Err(converted_error)\`

**The automatic From conversion is key.** If your function returns \`Result<T, AppError>\` and you use \`?\` on a \`Result<_, io::Error>\`, Rust automatically calls \`AppError::from(io::Error)\` to convert the error. This is why implementing \`From\` for your error types is so important.

**Requirements for using ?:**
• The function must return \`Result<T, E>\` (or \`Option<T>\`)
• The error type E must implement \`From<OriginalError>\` for automatic conversion
• In \`main()\`, you can use \`fn main() -> Result<(), Box<dyn Error>>\`

**? with Option:**
fn first_char(s: &str) -> Option<char> {
    let c = s.chars().next()?; // returns None if empty
    Some(c.to_uppercase().next()?)
}`},{heading:"Chaining ? for Clean Error Propagation",body:`**The real power of ? is chaining multiple fallible operations cleanly.**

**Without ? — deeply nested match statements ("pyramid of doom"):**
fn process() -> Result<Output, Error> {
    match step_1() {
        Ok(a) => match step_2(a) {
            Ok(b) => match step_3(b) {
                Ok(c) => Ok(c),
                Err(e) => Err(e),
            },
            Err(e) => Err(e),
        },
        Err(e) => Err(e),
    }
}

**With ? — flat and readable:**
fn process() -> Result<Output, Error> {
    let a = step_1()?;
    let b = step_2(a)?;
    let c = step_3(b)?;
    Ok(c)
}

**Real-world example — HTTP request pipeline:**
use reqwest;
use serde_json::Value;

async fn get_user_name(id: u64) -> Result<String, Box<dyn std::error::Error>> {
    let url = format!("https://api.example.com/users/{}", id);
    let response = reqwest::get(&url).await?;       // network error?
    let body = response.text().await?;                // read error?
    let json: Value = serde_json::from_str(&body)?;   // parse error?
    let name = json["name"].as_str()
        .ok_or("missing name field")?;                 // missing field?
    Ok(name.to_string())
}

**Each ? handles a different error type:**
• \`reqwest::get()\` → \`reqwest::Error\`
• \`response.text()\` → \`reqwest::Error\`
• \`serde_json::from_str()\` → \`serde_json::Error\`
• \`.ok_or()\` → \`&str\`

All are automatically converted to \`Box<dyn Error>\` via the From trait.

**Using ? in main:**
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let config = fs::read_to_string("config.toml")?;
    let parsed = parse_config(&config)?;
    run(parsed)?;
    Ok(())
}
// If any ? returns Err, main prints the error and exits with code 1`},{heading:"? with Option and Custom Types",body:`**? works with Option too — returns None on None:**

fn last_char_of_first_line(text: &str) -> Option<char> {
    text.lines().next()?.chars().last()
}

// .next()? returns None if the iterator is empty
// .last() returns Option<char> which is the function's return type

**You cannot mix Result and Option with ?:**
fn bad() -> Result<String, Error> {
    let opt: Option<String> = Some("hello".into());
    let val = opt?; // ERROR: ? on Option in a function returning Result
    Ok(val)
}

**Converting between them:**
fn good() -> Result<String, Error> {
    let opt: Option<String> = Some("hello".into());
    let val = opt.ok_or(Error::NotFound)?; // Option → Result, then ?
    Ok(val)
}

fn also_good() -> Option<String> {
    let res: Result<String, Error> = Ok("hello".into());
    let val = res.ok()?; // Result → Option, then ?
    Some(val)
}

**? with custom error types (requires From impls):**
#[derive(Debug)]
enum AppError {
    Io(std::io::Error),
    Parse(serde_json::Error),
    Custom(String),
}

impl From<std::io::Error> for AppError {
    fn from(e: std::io::Error) -> Self { AppError::Io(e) }
}

impl From<serde_json::Error> for AppError {
    fn from(e: serde_json::Error) -> Self { AppError::Parse(e) }
}

fn load_config() -> Result<Config, AppError> {
    let text = fs::read_to_string("config.json")?; // io::Error → AppError::Io
    let config = serde_json::from_str(&text)?;       // serde Error → AppError::Parse
    Ok(config)
}

**This manual From implementation is tedious.** That's where \`thiserror\` comes in — covered in the next section.`}],questions:[{q:"What does the ? operator do when it encounters an Err value?",a:"When ? encounters an Err(e), it does two things: (1) Calls From::from(e) to convert the error type to the function's return error type. For example, if the function returns Result<T, AppError> and ? encounters an io::Error, it calls AppError::from(io::Error). (2) Returns early from the function with Err(converted_error). This is equivalent to writing: match result { Ok(val) => val, Err(e) => return Err(From::from(e)) }. The automatic From conversion is what makes ? work across different error types without explicit conversion at each call site.",hint:"Think about the two steps: error type conversion (From) and early return.",check:l=>{const s=l.toLowerCase();return(s.includes("return")||s.includes("early"))&&(s.includes("from")||s.includes("convert")||s.includes("err"))}},{q:"Can you use ? on an Option inside a function that returns Result? If not, how do you bridge them?",a:"No, you cannot directly use ? on an Option inside a function returning Result — the compiler will error because Option and Result are different types. To bridge them, convert the Option to a Result first using .ok_or() or .ok_or_else(). For example: let value = my_option.ok_or(MyError::NotFound)?; This converts None to Err(MyError::NotFound), and Some(v) to Ok(v), which ? can then handle normally. Going the other direction, you can convert Result to Option with .ok() to use ? in a function returning Option.",hint:"Think about what method converts Option<T> to Result<T, E>.",check:l=>{const s=l.toLowerCase();return(s.includes("no")||s.includes("cannot")||s.includes("can't"))&&(s.includes("ok_or")||s.includes("convert")||s.includes("bridge"))}}]},{id:"custom-errors",icon:"🏗️",color:"#0E7490",title:"Custom Error Types",subtitle:"Designing error types that are informative, composable, and ergonomic — with enum errors and Display",resources:[{type:"read",title:"The Rust Book — Ch. 9: Error Handling (advanced)",url:"https://doc.rust-lang.org/book/ch09-00-error-handling.html"},{type:"read",title:"Rust By Example — Defining an error type",url:"https://doc.rust-lang.org/rust-by-example/error/multiple_error_types/define_error_type.html"},{type:"video",title:"Jon Gjengset — Error Handling in Rust",url:"https://www.youtube.com/watch?v=jpVzSse7oJ4"},{type:"read",title:"Rust API Guidelines — Error handling",url:"https://rust-lang.github.io/api-guidelines/interoperability.html#c-good-err"},{type:"read",title:"std::error::Error trait documentation",url:"https://doc.rust-lang.org/std/error/trait.Error.html"}],content:[{heading:"Designing Custom Error Enums",body:`**For libraries and complex applications, define an enum with a variant for each error category.**

#[derive(Debug)]
enum ConfigError {
    FileNotFound(String),
    ParseError { line: usize, message: String },
    ValidationError(String),
    IoError(std::io::Error),
}

**Each variant carries relevant context** — not just "something went wrong" but WHERE and WHY.

**Implementing Display (required for good error messages):**
use std::fmt;

impl fmt::Display for ConfigError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            ConfigError::FileNotFound(path) =>
                write!(f, "config file not found: {}", path),
            ConfigError::ParseError { line, message } =>
                write!(f, "parse error on line {}: {}", line, message),
            ConfigError::ValidationError(msg) =>
                write!(f, "config validation failed: {}", msg),
            ConfigError::IoError(e) =>
                write!(f, "I/O error: {}", e),
        }
    }
}

**Implementing std::error::Error:**
impl std::error::Error for ConfigError {
    fn source(&self) -> Option<&(dyn std::error::Error + 'static)> {
        match self {
            ConfigError::IoError(e) => Some(e), // chain to the underlying cause
            _ => None,
        }
    }
}

**The source() method creates an error chain:** callers can iterate through the chain to find the root cause using \`error.source().source().source()...\`

**Best practices for error types:**
• Use enums, not structs — each variant represents a different failure mode
• Include context: file paths, line numbers, expected vs actual values
• Implement Display with human-readable messages
• Implement Error with source() for error chaining
• Make errors #[non_exhaustive] in libraries to allow adding variants without breaking changes`},{heading:"Implementing From for Automatic Error Conversion",body:`**The \`From\` trait enables automatic error conversion with the \`?\` operator.**

impl From<std::io::Error> for ConfigError {
    fn from(e: std::io::Error) -> Self {
        ConfigError::IoError(e)
    }
}

impl From<serde_json::Error> for ConfigError {
    fn from(e: serde_json::Error) -> Self {
        ConfigError::ParseError {
            line: e.line(),
            message: e.to_string(),
        }
    }
}

**Now ? automatically converts:**
fn load_config(path: &str) -> Result<Config, ConfigError> {
    let text = fs::read_to_string(path)?;  // io::Error → ConfigError::IoError
    let config: Config = serde_json::from_str(&text)?; // serde Error → ConfigError::ParseError
    validate(&config)?;
    Ok(config)
}

**The complete manual error type boilerplate:**
1. Define the enum with variants
2. Implement \`Debug\` (derive it)
3. Implement \`Display\` (human-readable messages)
4. Implement \`std::error::Error\` (with source() for chaining)
5. Implement \`From<T>\` for each underlying error type

**This is a LOT of boilerplate.** For a typical application with 5 error sources, that's ~100 lines of mechanical code. This is why \`thiserror\` exists.

**The Box<dyn Error> shortcut (good for applications, bad for libraries):**
fn do_stuff() -> Result<(), Box<dyn std::error::Error>> {
    let data = fs::read_to_string("file.txt")?; // any error type works!
    let parsed: Value = serde_json::from_str(&data)?;
    Ok(())
}

**Box<dyn Error> erases the concrete error type** — callers can't match on specific error variants. Fine for applications (you just display the error), bad for libraries (consumers need to handle errors differently).`},{heading:"Error Type Design Patterns",body:`**Pattern 1: Library errors — typed, matchable, informative:**
#[derive(Debug)]
#[non_exhaustive] // allows adding variants without breaking changes
pub enum DatabaseError {
    ConnectionFailed { host: String, port: u16, cause: io::Error },
    QueryFailed { query: String, cause: String },
    Timeout { duration: Duration },
    AuthenticationFailed,
}
// Callers can match on specific variants and extract context

**Pattern 2: Application errors — opaque, with context:**
// Use anyhow::Error or Box<dyn Error>
// Add context with .context() or .with_context()
// Caller just prints the error chain, doesn't match on it

**Pattern 3: Error newtype — wrap Box<dyn Error> with a custom type:**
pub struct AppError(Box<dyn std::error::Error + Send + Sync>);

impl AppError {
    pub fn new(e: impl std::error::Error + Send + Sync + 'static) -> Self {
        AppError(Box::new(e))
    }
}

**Pattern 4: Nested error types — compose errors from subsystems:**
enum AppError {
    Config(ConfigError),
    Database(DatabaseError),
    Network(NetworkError),
}
// Each subsystem has its own error type, composed at the application level

**Choosing the right pattern:**
| Context | Pattern | Crate |
|---------|---------|-------|
| Library (public API) | Custom enum | thiserror |
| Application | Opaque + context | anyhow |
| Internal module | Custom enum or Box<dyn> | thiserror or anyhow |
| Tiny script | Box<dyn Error> | none needed |`}],questions:[{q:"Why should library error types be enums rather than opaque types like Box<dyn Error>?",a:"Enum error types let consumers match on specific error variants and handle each case differently. For example, a database library user might want to retry on ConnectionFailed but abort on AuthenticationFailed. With Box<dyn Error>, the consumer can only display the error — they can't inspect or match on it programmatically (without downcasting, which is fragile). Enums also provide exhaustive matching: if the library adds a new error variant (with #[non_exhaustive]), the consumer's match statements will get compiler warnings. This is type-driven error handling — one of Rust's greatest strengths.",hint:"Think about what a library consumer needs to do with errors — just display them or handle each case differently?",check:l=>{const s=l.toLowerCase();return(s.includes("match")||s.includes("variant")||s.includes("specific"))&&(s.includes("handle")||s.includes("consumer")||s.includes("different"))}}]},{id:"thiserror-anyhow",icon:"📦",color:"#D97706",title:"thiserror & anyhow Crates",subtitle:"The two essential error handling crates — thiserror for libraries, anyhow for applications",resources:[{type:"read",title:"thiserror crate documentation",url:"https://docs.rs/thiserror/latest/thiserror/"},{type:"read",title:"anyhow crate documentation",url:"https://docs.rs/anyhow/latest/anyhow/"},{type:"read",title:"thiserror GitHub repository",url:"https://github.com/dtolnay/thiserror"},{type:"read",title:"anyhow GitHub repository",url:"https://github.com/dtolnay/anyhow"},{type:"video",title:"Jon Gjengset — Error Handling in Rust",url:"https://www.youtube.com/watch?v=jpVzSse7oJ4"}],content:[{heading:"thiserror — Derive Macros for Custom Errors",body:`**\`thiserror\` auto-generates Display, Error, and From implementations via derive macros.**

use thiserror::Error;

#[derive(Error, Debug)]
pub enum DataError {
    #[error("file not found: {path}")]
    FileNotFound { path: String },

    #[error("parse error on line {line}: {message}")]
    ParseError { line: usize, message: String },

    #[error("I/O error")]
    Io(#[from] std::io::Error),  // auto-generates From<io::Error>

    #[error("JSON error")]
    Json(#[from] serde_json::Error),  // auto-generates From<serde_json::Error>

    #[error("validation failed: {0}")]
    Validation(String),

    #[error(transparent)]  // delegates Display and source to the inner error
    Other(#[from] Box<dyn std::error::Error + Send + Sync>),
}

**What thiserror generates for you:**
• \`impl Display for DataError\` using the #[error("...")] format strings
• \`impl std::error::Error for DataError\` with source() pointing to #[source] or #[from] fields
• \`impl From<io::Error> for DataError\` for each #[from] attribute

**Without thiserror, this would be ~80 lines of boilerplate.** With thiserror, it's ~15 lines.

**Using it:**
fn load_data(path: &str) -> Result<Data, DataError> {
    let text = fs::read_to_string(path)?;  // io::Error auto-converts via #[from]
    let data: Data = serde_json::from_str(&text)?;  // serde Error auto-converts
    if !data.is_valid() {
        return Err(DataError::Validation("invalid data".into()));
    }
    Ok(data)
}

**thiserror attributes:**
• \`#[error("message {field}")]\` — format string for Display
• \`#[from]\` — generates From impl (also marks as source)
• \`#[source]\` — marks field as the error source (for Error::source())
• \`#[error(transparent)]\` — delegates Display and source to the inner error`},{heading:"anyhow — Ergonomic Error Handling for Applications",body:`**\`anyhow\` provides a single error type that can hold any error, with rich context chaining.**

use anyhow::{Result, Context, bail, ensure};

fn main() -> Result<()> {
    let config = load_config()
        .context("failed to load application config")?;

    let db = connect_db(&config.db_url)
        .with_context(|| format!("failed to connect to {}", config.db_url))?;

    run_server(db, config)?;
    Ok(())
}

**\`anyhow::Result<T>\` is just \`Result<T, anyhow::Error>\`.**
\`anyhow::Error\` can hold any error type that implements \`std::error::Error\`.

**Key anyhow features:**

**context() — add context to errors:**
let file = File::open(path)
    .context("failed to open config file")?;
// Error message: "failed to open config file"
// Caused by: No such file or directory (os error 2)

**bail! — return an error immediately:**
fn validate(age: u32) -> Result<()> {
    if age > 150 {
        bail!("age {} is unrealistic", age);
    }
    Ok(())
}

**ensure! — like assert but returns Err instead of panicking:**
fn process(data: &[u8]) -> Result<()> {
    ensure!(!data.is_empty(), "data cannot be empty");
    ensure!(data.len() < 1_000_000, "data too large: {} bytes", data.len());
    Ok(())
}

**Error chain display:**
let err = load_config().unwrap_err();
// Display: "failed to load application config"
// Debug:
//   failed to load application config
//
//   Caused by:
//       0: failed to read config file
//       1: No such file or directory (os error 2)

**Downcasting (when you need to inspect the concrete error):**
if let Some(io_err) = err.downcast_ref::<std::io::Error>() {
    if io_err.kind() == ErrorKind::NotFound {
        // handle specifically
    }
}`},{heading:"thiserror vs anyhow — When to Use Each",body:`**The split is clean: thiserror for libraries, anyhow for applications.**

| Aspect | thiserror | anyhow |
|--------|-----------|--------|
| Use case | Libraries, public APIs | Applications, binaries |
| Error type | Custom enum (typed, matchable) | anyhow::Error (opaque) |
| Caller can match? | Yes — specific variants | No — must downcast |
| Context chaining | Manual (implement Display) | .context() method |
| Dependencies | Proc macro only (compile-time) | Runtime dependency |
| boilerplate | Some (define enum + attributes) | Minimal (just use Result<T>) |

**Rule of thumb:**
• If someone else will call your code → **thiserror** (they need typed errors)
• If YOUR code calls other code → **anyhow** (you just want to propagate and display errors)

**Combining both in one project:**
// In your library crate:
use thiserror::Error;

#[derive(Error, Debug)]
pub enum MyLibError {
    #[error("invalid input: {0}")]
    InvalidInput(String),
    #[error("not found: {0}")]
    NotFound(String),
}

// In your application crate:
use anyhow::{Result, Context};
use mylib::MyLibError;

fn main() -> Result<()> {
    let data = mylib::load("file.txt")
        .context("failed to load data")?; // MyLibError wrapped in anyhow::Error
    Ok(())
}

**Other error crates worth knowing:**
• **eyre** — anyhow fork with customizable error reporting (color, spans)
• **miette** — beautiful diagnostic error messages with source code snippets
• **color-eyre** — eyre + color-backtrace for gorgeous terminal errors
• **snafu** — alternative to thiserror with more explicit context`}],questions:[{q:"You're writing a Rust library that will be published to crates.io. Should you use thiserror or anyhow for error handling? Why?",a:"Use thiserror. Libraries should expose typed, matchable error enums so consumers can handle specific error cases programmatically. With thiserror, you define an error enum and use derive macros to auto-generate Display, Error, and From implementations. Consumers can then match on specific variants (e.g., match err { MyError::NotFound => ..., MyError::PermissionDenied => ... }). anyhow would erase the error types, forcing consumers to downcast (fragile) or just display the error (limiting). anyhow is designed for applications where you're the final consumer of errors and just want to propagate and display them.",hint:"Think about what a library consumer needs — can they match on anyhow::Error variants?",check:l=>{const s=l.toLowerCase();return s.includes("thiserror")&&(s.includes("match")||s.includes("typed")||s.includes("consumer")||s.includes("variant")||s.includes("library"))}}]},{id:"from-trait",icon:"🔄",color:"#9333EA",title:"Error Conversion — The From Trait",subtitle:"How Rust automatically converts between error types — enabling ? to work across different error domains",resources:[{type:"read",title:"Rust std::convert::From documentation",url:"https://doc.rust-lang.org/std/convert/trait.From.html"},{type:"read",title:"Rust By Example — From and Into",url:"https://doc.rust-lang.org/rust-by-example/conversion/from_into.html"},{type:"read",title:"Rust Reference — Type coercions",url:"https://doc.rust-lang.org/reference/type-coercions.html"},{type:"video",title:"Let's Get Rusty — From and Into traits",url:"https://www.youtube.com/watch?v=5RzMPPMEP-4"}],content:[{heading:"How From Enables the ? Operator",body:`**The ? operator doesn't just return errors — it converts them using the From trait.**

**The desugaring of ?:**
// This:
let value = some_operation()?;

// Is equivalent to:
let value = match some_operation() {
    Ok(v) => v,
    Err(e) => return Err(From::from(e)), // <-- automatic conversion!
};

**Why this matters:**
fn process() -> Result<(), AppError> {
    let data = fs::read_to_string("file.txt")?;
    //         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //         Returns Result<String, io::Error>
    //         But our function returns Result<_, AppError>
    //         ? calls AppError::from(io::Error) automatically!

    let parsed: Config = serde_json::from_str(&data)?;
    //         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //         Returns Result<Config, serde_json::Error>
    //         ? calls AppError::from(serde_json::Error) automatically!

    Ok(())
}

**This works because we implemented From:**
impl From<io::Error> for AppError {
    fn from(e: io::Error) -> Self {
        AppError::Io(e)
    }
}

impl From<serde_json::Error> for AppError {
    fn from(e: serde_json::Error) -> Self {
        AppError::Parse(e.to_string())
    }
}

**The From/Into duality:**
• \`From<A> for B\` — convert A into B: \`B::from(a)\`
• \`Into<B> for A\` — convert A into B: \`a.into()\`
• Implementing From automatically gives you Into for free (blanket impl)

**Blanket implementations in std:**
• \`From<T> for T\` — every type converts to itself (identity)
• \`From<T> for Box<dyn Error>\` if T: Error — any error → Box<dyn Error>
• This is why \`Box<dyn Error>\` works with ? on any error type`},{heading:"Building Error Conversion Chains",body:`**In complex applications, errors flow through multiple layers with automatic conversion at each step.**

**Layer 1 — Low-level I/O errors:**
// std::io::Error is the error type for all I/O operations

**Layer 2 — Database errors (wraps I/O):**
#[derive(Debug, thiserror::Error)]
enum DbError {
    #[error("connection failed: {0}")]
    Connection(#[from] io::Error),  // io::Error → DbError

    #[error("query failed: {0}")]
    Query(String),
}

**Layer 3 — Service errors (wraps Database):**
#[derive(Debug, thiserror::Error)]
enum ServiceError {
    #[error("database error: {0}")]
    Db(#[from] DbError),  // DbError → ServiceError

    #[error("auth failed")]
    Auth,
}

**Layer 4 — API errors (wraps Service):**
#[derive(Debug, thiserror::Error)]
enum ApiError {
    #[error("service error: {0}")]
    Service(#[from] ServiceError),  // ServiceError → ApiError

    #[error("bad request: {0}")]
    BadRequest(String),
}

**Now errors flow automatically:**
fn handle_request() -> Result<Response, ApiError> {
    let conn = db::connect()?;    // io::Error → DbError → ServiceError → ApiError
    let user = service::get_user(&conn, id)?; // DbError → ServiceError → ApiError
    Ok(Response::ok(user))
}

**Each ? converts through the From chain: io::Error → DbError → ServiceError → ApiError**

**Warning: don't create circular From impls!**
// impl From<A> for B + impl From<B> for A = compile error or infinite loop

**Tip: Use #[from] in thiserror to generate From impls automatically.** Only implement From manually when you need custom conversion logic (e.g., adding context, mapping error codes).`},{heading:"From for Non-Error Conversions",body:`**From is a general-purpose conversion trait, not just for errors.**

**Numeric conversions (lossless only):**
let x: i64 = i64::from(42i32);  // i32 → i64 (always safe)
let x: f64 = f64::from(42i32);  // i32 → f64 (always safe)
// i64::from(42u64) would NOT compile if lossy

**String conversions:**
let s: String = String::from("hello");  // &str → String
let s: String = String::from(42.to_string()); // via Display

**Custom type conversions:**
struct Celsius(f64);
struct Fahrenheit(f64);

impl From<Celsius> for Fahrenheit {
    fn from(c: Celsius) -> Self {
        Fahrenheit(c.0 * 9.0 / 5.0 + 32.0)
    }
}

let boiling: Fahrenheit = Celsius(100.0).into(); // 212.0

**TryFrom for fallible conversions:**
use std::convert::TryFrom;

struct Percentage(u8);

impl TryFrom<i32> for Percentage {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        if value < 0 || value > 100 {
            Err("percentage must be 0-100")
        } else {
            Ok(Percentage(value as u8))
        }
    }
}

let p = Percentage::try_from(42)?;   // Ok(Percentage(42))
let p = Percentage::try_from(200)?;  // Err("percentage must be 0-100")

**Key principle:** Use From for infallible conversions and TryFrom for fallible ones. This mirrors the Result/Option distinction — be explicit about failure.`}],questions:[{q:"How does implementing From<io::Error> for your custom error type relate to the ? operator?",a:"When you use ? on a Result<T, io::Error> inside a function that returns Result<T, YourError>, the ? operator calls YourError::from(io_error) to convert the io::Error into YourError before returning it. Without this From implementation, ? won't compile because Rust doesn't know how to convert between the error types. The From implementation is the bridge that makes ? work across different error domains. This is why thiserror's #[from] attribute is so useful — it auto-generates these From implementations.",hint:"Look at the desugaring of ? — specifically the Err branch.",check:l=>{const s=l.toLowerCase();return(s.includes("convert")||s.includes("from"))&&(s.includes("?")||s.includes("question")||s.includes("operator")||s.includes("automatic"))}}]},{id:"best-practices",icon:"🎯",color:"#B91C1C",title:"Best Practices — When to panic! vs Result",subtitle:"Decision framework for choosing the right error handling strategy in every situation",resources:[{type:"read",title:"The Rust Book — Ch. 9.3: To panic! or Not to panic!",url:"https://doc.rust-lang.org/book/ch09-03-to-panic-or-not-to-panic.html"},{type:"read",title:"Rust API Guidelines — Error handling",url:"https://rust-lang.github.io/api-guidelines/interoperability.html#c-good-err"},{type:"video",title:"Jon Gjengset — Error Handling in Rust",url:"https://www.youtube.com/watch?v=jpVzSse7oJ4"},{type:"read",title:"Rust Design Patterns — Error handling",url:"https://rust-unofficial.github.io/patterns/idioms/default.html"},{type:"read",title:"Andrew Gallant (BurntSushi) — Error Handling in Rust",url:"https://blog.burntsushi.net/rust-error-handling/"}],content:[{heading:"The Decision Framework",body:`**Use this decision tree for every error handling choice:**

Is this a programming bug (violated invariant)?
  YES → panic! / assert! / unreachable!
  NO ↓

Is this expected failure (I/O, network, user input)?
  YES → Result<T, E>
  NO ↓

Are you prototyping or writing examples?
  YES → unwrap() / expect() (acceptable tech debt)
  NO ↓

Is this in test code?
  YES → unwrap() (test should fail on error)

**Concrete guidelines:**

| Situation | Strategy | Example |
|-----------|----------|---------|
| Array index from user input | Result | \`v.get(i).ok_or("index out of bounds")?\` |
| Array index from program logic | assert/panic | \`assert!(i < v.len())\` then \`v[i]\` |
| File from config | Result | \`fs::read_to_string(path)?\` |
| File baked into binary | expect() | \`include_str!("template.html")\` |
| Network request | Result | \`client.get(url).send()?\` |
| Parsing user input | Result | \`input.parse::<i32>()?\` |
| Parsing known-good data | expect() | \`"42".parse::<i32>().expect("hardcoded")\` |
| Impossible enum variant | unreachable!() | After exhaustive if/else |
| Unfinished code | todo!() | Placeholder during development |

**The spectrum from strict to permissive:**
1. \`panic!\` / \`assert!\` — crash immediately (bugs)
2. \`Result + ?\` — propagate errors (expected failures)
3. \`unwrap_or(default)\` — use fallback values (optional features)
4. \`let _ = result;\` — explicitly ignore errors (fire-and-forget logging)`},{heading:"Error Handling Patterns by Crate Type",body:`**Different crate types have different error handling philosophies:**

**Binary application (main.rs):**
use anyhow::{Result, Context};

fn main() -> Result<()> {
    let config = load_config().context("startup failed")?;
    run(config)?;
    Ok(())
}
// Use anyhow, add context at each level, let errors bubble up to main
// main() prints the error chain and exits with code 1

**Library crate (lib.rs):**
use thiserror::Error;

#[derive(Error, Debug)]
pub enum MyLibError {
    #[error("invalid input: {0}")]
    InvalidInput(String),

    #[error("not found: {id}")]
    NotFound { id: u64 },

    #[error(transparent)]
    Io(#[from] std::io::Error),
}

pub fn do_thing(id: u64) -> Result<Thing, MyLibError> { /* ... */ }
// Use thiserror, expose typed errors, never panic (let caller decide)

**Internal module (within a crate):**
// Can use either approach:
// - thiserror if the module's errors are part of the public API
// - anyhow if the module is private and errors are handled internally
// - Box<dyn Error> for quick prototyping

**Test code:**
#[test]
fn test_parsing() {
    let result = parse("valid input").unwrap(); // OK to unwrap in tests
    assert_eq!(result.value, 42);
}

#[test]
fn test_error_case() -> Result<(), Box<dyn Error>> {
    let result = parse("invalid");
    assert!(result.is_err());
    Ok(())
}`},{heading:"Anti-Patterns to Avoid",body:`**Common error handling mistakes in Rust:**

**Anti-pattern 1: Unwrap everywhere**
// BAD — crashes on any error
let config = fs::read_to_string("config.toml").unwrap();
let parsed: Config = toml::from_str(&config).unwrap();
let db = connect(&parsed.db_url).unwrap();

// GOOD — propagate with context
let config = fs::read_to_string("config.toml")
    .context("reading config")?;
let parsed: Config = toml::from_str(&config)
    .context("parsing config")?;
let db = connect(&parsed.db_url)
    .with_context(|| format!("connecting to {}", parsed.db_url))?;

**Anti-pattern 2: Swallowing errors silently**
// BAD — error is ignored, bugs hide
if let Ok(data) = load_data() {
    process(data);
}
// What if load_data fails? Nothing happens. Silent failure.

// GOOD — at least log the error
match load_data() {
    Ok(data) => process(data),
    Err(e) => eprintln!("Warning: could not load data: {}", e),
}

**Anti-pattern 3: Using String as the error type**
// BAD — loses type information, can't match on it
fn parse(s: &str) -> Result<i32, String> {
    s.parse::<i32>().map_err(|e| e.to_string())
}

// GOOD — use a proper error type
fn parse(s: &str) -> Result<i32, ParseIntError> {
    s.parse::<i32>()
}

**Anti-pattern 4: Panic in library code**
// BAD — takes choice away from the consumer
pub fn get_user(id: u64) -> User {
    db::query(id).unwrap() // panics if user not found!
}

// GOOD — let the consumer decide
pub fn get_user(id: u64) -> Result<User, DbError> {
    db::query(id)
}

**Anti-pattern 5: Not adding context to errors**
// BAD — "No such file or directory" — WHICH file??
let data = fs::read_to_string(path)?;

// GOOD — "failed to read config from /etc/app/config.toml: No such file..."
let data = fs::read_to_string(path)
    .with_context(|| format!("failed to read config from {}", path))?;`}],questions:[{q:"A function in a library receives a user-provided file path and needs to read its contents. Should it panic or return a Result if the file doesn't exist?",a:"It must return a Result. File not found is an expected, normal failure — users can provide invalid paths, files can be deleted, permissions can change. Panicking would crash the consumer's entire application for a recoverable situation. The library should return Result<String, MyError> and let the consumer decide: they might prompt the user for a different path, use a default configuration, log the error and continue, or propagate it further. Only panic for programming bugs (violated invariants), never for expected external failures. This is a core Rust principle: errors are values, not exceptions.",hint:"Is 'file not found' a programming bug or an expected external failure?",check:l=>{const s=l.toLowerCase();return(s.includes("result")||s.includes("return"))&&(s.includes("expected")||s.includes("recover")||s.includes("caller")||s.includes("consumer")||s.includes("normal"))}},{q:"What is wrong with using String as an error type (Result<T, String>)?",a:"Using String as an error type has several problems: (1) No type information — callers can't match on specific error cases, they can only display the string. (2) No source chaining — String doesn't implement Error::source(), breaking the error chain. (3) No structured context — you can't programmatically extract the file path, line number, or error code from a string. (4) Performance — String allocates on the heap for every error. Use proper error types (thiserror enums for libraries, anyhow for applications) that implement Display for human-readable messages AND provide structured, matchable error variants.",hint:"Think about what a caller can do with a String error vs a typed enum error.",check:l=>{const s=l.toLowerCase();return(s.includes("match")||s.includes("type")||s.includes("structured")||s.includes("chain"))&&(s.includes("string")||s.includes("can't")||s.includes("cannot")||s.includes("no "))}}]}];function pp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")},E=()=>F("revealed"),p=()=>{var w;F("idle"),U(""),(w=q.current)==null||w.focus()};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:n.jsx("textarea",{ref:q,value:M,onChange:w=>U(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{flex:1,minWidth:200,padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans', sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",transition:"border 0.2s"}})}),x==="wrong"&&n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#DC2626",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:14},children:"✗"})," Not quite right. Try again or reveal the answer."]}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsx("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:600,transition:"opacity 0.2s",opacity:M.trim()?1:.4},children:"✓ Check Answer"}),n.jsx("button",{onClick:E,style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"👁 Reveal Answer"}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsx("summary",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#aaa",cursor:"pointer",userSelect:"none"},children:"💡 Hint"}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:16},children:"✓"})," Correct!"]}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:14},children:"📖"})," Answer"]}),n.jsx("button",{onClick:p,style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#888"},children:"Try it myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function hp({embedded:l=!1}){const[s,S]=N.useState(null),[V,A]=N.useState(null),[M,U]=N.useState(new Set),[x,F]=N.useState({}),q=Ms.reduce((m,d)=>m+d.content.length,0),z=Math.round(M.size/q*100),E=m=>A(V===m?null:m),p=(m,d)=>{d.stopPropagation();const h=new Set(M);h.has(m)?h.delete(m):h.add(m),U(h)},w=m=>x[m]||"learn",T=m=>{var h;const d=m.split(`
`);if(d.some(u=>u.trim().startsWith("|"))){const u=[];let b=0;for(;b<d.length;)if(d[b].trim().startsWith("|")){const f=[];for(;b<d.length&&d[b].trim().startsWith("|");)f.push(d[b]),b++;const B=f.filter(y=>!y.match(/^\|\s*[-:]+/)),R=((h=B[0])==null?void 0:h.split("|").filter(y=>y.trim()).map(y=>y.trim()))||[],C=B.slice(1).map(y=>y.split("|").filter(G=>G.trim()).map(G=>G.trim()));u.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0"},children:n.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontFamily:"'DM Sans', sans-serif",fontSize:12},children:[n.jsx("thead",{children:n.jsx("tr",{children:R.map((y,G)=>n.jsx("th",{style:{padding:"6px 10px",borderBottom:"2px solid #E0DDD6",textAlign:"left",fontWeight:600,color:"#1a1a1a",background:"#FAF9F6"},children:y},G))})}),n.jsx("tbody",{children:C.map((y,G)=>n.jsx("tr",{children:y.map((re,oe)=>n.jsx("td",{style:{padding:"5px 10px",borderBottom:"1px solid #F0EDE6",color:"#444"},children:re},oe))},G))})]})},`t${b}`))}else{const f=d[b],B=f.startsWith("let ")||f.startsWith("fn ")||f.startsWith("//")||f.startsWith("    ")||f.startsWith("struct ")||f.startsWith("impl ")||f.startsWith("use ")||f.startsWith("pub ")||f.startsWith("println!")||f.startsWith("enum ")||f.startsWith("match ")||f.startsWith("if ")||f.startsWith("} else")||f.startsWith("}")||f.startsWith("{")||f.startsWith("#[")||f.startsWith("for ")||f.startsWith("RUST_BACKTRACE")||f.startsWith("panic!")||f.startsWith("assert!")||f.startsWith("[profile"),R=f.startsWith("let ")||f.startsWith("fn ")||f.startsWith("struct ")||f.startsWith("impl ")||f.startsWith("use ")||f.startsWith("pub ")||f.startsWith("enum ")||f.startsWith("match ")||f.startsWith("#[")||f.startsWith("for ")||f.startsWith("RUST_BACKTRACE")||f.startsWith("panic!")||f.startsWith("assert!")||f.startsWith("[profile");if(B)u.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:R?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:R?"6px 6px 0 0":0,marginTop:R?10:0},children:f},b));else if(f==="")u.push(n.jsx("div",{style:{height:8}},b));else{const C=f.split(/\*\*(.*?)\*\*/g);u.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:C.map((y,G)=>G%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:y},G):n.jsx("span",{children:y},G))},b))}b++}return u}return m.split(`
`).map((u,b)=>{const f=u.startsWith("let ")||u.startsWith("fn ")||u.startsWith("//")||u.startsWith("    ")||u.startsWith("struct ")||u.startsWith("impl ")||u.startsWith("use ")||u.startsWith("pub ")||u.startsWith("println!")||u.startsWith("enum ")||u.startsWith("match ")||u.startsWith("if ")||u.startsWith("} else")||u.startsWith("}")||u.startsWith("{")||u.startsWith("#[")||u.startsWith("for ")||u.startsWith("RUST_BACKTRACE")||u.startsWith("panic!")||u.startsWith("assert!")||u.startsWith("[profile"),B=u.startsWith("let ")||u.startsWith("fn ")||u.startsWith("struct ")||u.startsWith("impl ")||u.startsWith("use ")||u.startsWith("pub ")||u.startsWith("enum ")||u.startsWith("match ")||u.startsWith("#[")||u.startsWith("for ")||u.startsWith("RUST_BACKTRACE")||u.startsWith("panic!")||u.startsWith("assert!")||u.startsWith("[profile");if(f)return n.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:B?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:B?"6px 6px 0 0":0,marginTop:B?10:0},children:u},b);if(u==="")return n.jsx("div",{style:{height:8}},b);const R=u.split(/\*\*(.*?)\*\*/g);return n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:R.map((C,y)=>y%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:C},y):n.jsx("span",{children:C},y))},b)})};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4', Georgia, serif",background:"#F5F3EE",minHeight:l?"auto":"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"SELF-SUFFICIENT INFOGRAPHIC"}),n.jsx("h1",{style:{fontSize:"clamp(30px, 5vw, 44px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Error Handling in Rust"}),n.jsxs("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:600,marginBottom:24},children:["Learn, practice, go deeper. ",Ms.length," sections · ",q," concepts · ",Ms.reduce((m,d)=>{var h;return m+(((h=d.questions)==null?void 0:h.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans', sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pfill",style:{width:`${z}%`,height:"100%",background:"linear-gradient(90deg, #DC2626, #059669, #7C3AED, #0E7490, #D97706, #9333EA, #B91C1C)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[M.size,"/",q]})]}),n.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:16},children:Object.entries(Kc).map(([m,d])=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#777"},children:[n.jsxs("span",{className:"type-badge",style:{background:d.bg,color:d.color},children:[d.emoji," ",d.label]}),m==="infographic"&&"— Primary",m==="read"&&"— Secondary",m==="video"&&"— Supplement"]},m))})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ms.map(m=>{var B;const d=s===m.id,u=m.content.map((R,C)=>`${m.id}-${C}`).filter(R=>M.has(R)).length,b=w(m.id),f=((B=m.questions)==null?void 0:B.length)||0;return n.jsxs("div",{className:"sec-card",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>S(d?null:m.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:m.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono', monospace"},children:m.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15.5,fontWeight:600},children:m.title}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"#888",marginTop:2},children:m.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[u,"/",m.content.length]}),n.jsx("span",{className:"arr",style:{transform:d?"rotate(90deg)":"rotate(0)"},children:"›"})]}),d&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tab-btn ${b==="learn"?"active":""}`,onClick:()=>F(R=>({...R,[m.id]:"learn"})),children:"📖 Learn"}),n.jsxs("button",{className:`tab-btn ${b==="practice"?"active":""}`,onClick:()=>F(R=>({...R,[m.id]:"practice"})),children:["✏️ Practice (",f,")"]}),n.jsxs("button",{className:`tab-btn ${b==="deeper"?"active":""}`,onClick:()=>F(R=>({...R,[m.id]:"deeper"})),children:["🔗 Go Deeper (",m.resources.length,")"]})]}),b==="learn"&&n.jsx("div",{children:m.content.map((R,C)=>{const y=`${m.id}-${C}`,G=V===y,re=M.has(y);return n.jsxs("div",{style:{borderTop:C>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"block-row",onClick:()=>E(y),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`chk ${re?"done":""}`,onClick:oe=>p(y,oe),children:re&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13.5,fontWeight:600,color:re?"#aaa":"#2a2a2a",textDecoration:re?"line-through":"none",flex:1},children:R.heading}),n.jsx("span",{className:"arr",style:{transform:G?"rotate(90deg)":"rotate(0)"},children:"›"})]}),G&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${m.color}20`,marginLeft:22},children:T(R.body)})]},C)})}),b==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Test your understanding. Type your answer and check, or reveal if you're stuck. Hints available for each question."}),(m.questions||[]).map((R,C)=>n.jsx(pp,{q:R.q,a:R.a,hint:R.hint,check:R.check,color:m.color},`${m.id}-q-${C}`))]}),b==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics → reading → video."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:m.resources.map((R,C)=>{const y=Kc[R.type];return n.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",className:"res-link",style:{background:y.bg+"55"},children:[n.jsxs("span",{className:"type-badge",style:{background:y.bg,color:y.color},children:[y.emoji," ",y.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:R.title})]},C)})})]})]})]},m.id)})}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Three tabs per section: Learn (content) · Practice (questions) · Go Deeper (resources)"})]})}const mp={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},As=[{id:"vec",icon:"📦",color:"#C2410C",title:"Vec<T> — The Dynamic Array",subtitle:"Creation, methods, capacity management, and memory layout of Rust’s workhorse collection",resources:[{type:"read",title:"The Rust Book — Storing Lists of Values with Vectors",url:"https://doc.rust-lang.org/book/ch08-01-vectors.html"},{type:"read",title:"std::vec::Vec — API documentation",url:"https://doc.rust-lang.org/std/vec/struct.Vec.html"},{type:"video",title:"Let’s Get Rusty — Vectors in Rust",url:"https://www.youtube.com/watch?v=Zs-pS6PA1uw"},{type:"read",title:"Rustonomicon — Vec layout and guarantees",url:"https://doc.rust-lang.org/nomicon/vec/vec.html"}],content:[{heading:"Creating Vectors",body:`**Vec<T> is Rust’s growable, heap-allocated array.** It stores elements contiguously in memory, just like a C++ std::vector or Java ArrayList.

**Four ways to create a Vec:**

\`\`\`rust
// 1. Empty vector with type annotation
let v: Vec<i32> = Vec::new();

// 2. vec! macro (most common)
let v = vec![1, 2, 3, 4, 5];

// 3. Pre-allocated capacity
let v: Vec<i32> = Vec::with_capacity(100);

// 4. From an iterator
let v: Vec<i32> = (1..=5).collect();
\`\`\`

**Memory layout:**

| Field | Size | Description |
|---|---|---|
| **ptr** | 8 bytes (64-bit) | Pointer to heap allocation |
| **len** | 8 bytes | Number of elements currently stored |
| **cap** | 8 bytes | Total allocated capacity |

So \`std::mem::size_of::<Vec<i32>>()\` is always **24 bytes** on the stack, regardless of how many elements are stored. The actual data lives on the heap.

**Type inference:** Rust infers the element type from usage. An empty \`Vec::new()\` requires a type annotation or a subsequent \`push\` call so the compiler knows the type.`},{heading:"Essential Vec Methods",body:`**Mutation methods:**

\`\`\`rust
let mut v = vec![1, 2, 3];

v.push(4);           // Append to end: [1, 2, 3, 4]
v.pop();              // Remove last → Some(4)
v.insert(1, 10);     // Insert at index: [1, 10, 2, 3]
v.remove(0);          // Remove at index: [10, 2, 3]
v.swap_remove(0);     // O(1) remove (swaps with last): [3, 2]
v.retain(|&x| x > 2); // Keep only matching: [3]
v.clear();            // Remove all elements
\`\`\`

**Access methods:**

\`\`\`rust
let v = vec![10, 20, 30, 40, 50];

v[2];                 // Direct index → 30 (panics if out of bounds!)
v.get(2);             // Safe access → Some(&30)
v.get(99);            // Out of bounds → None
v.first();            // → Some(&10)
v.last();             // → Some(&50)
v.contains(&30);      // → true
v.len();              // → 5
v.is_empty();         // → false
\`\`\`

**Rule of thumb:** use \`v.get(i)\` when the index might be out of bounds. Use \`v[i]\` when you’re certain it’s valid and want to panic on bugs.

**Slicing:**

\`\`\`rust
let v = vec![1, 2, 3, 4, 5];
let slice: &[i32] = &v[1..4]; // → [2, 3, 4]
\`\`\`

A \`&[T]\` slice is a **fat pointer**: 8 bytes for the data pointer + 8 bytes for the length = 16 bytes total.`},{heading:"Capacity & Growth Strategy",body:`**Vec grows by doubling its capacity** when it runs out of space. This gives amortized O(1) push.

\`\`\`rust
let mut v = Vec::new();
println!("len={}, cap={}", v.len(), v.capacity());
// len=0, cap=0

v.push(1);
println!("len={}, cap={}", v.len(), v.capacity());
// len=1, cap=4   (initial allocation is typically 4)

for i in 2..=4 { v.push(i); }
println!("len={}, cap={}", v.len(), v.capacity());
// len=4, cap=4

v.push(5);
println!("len={}, cap={}", v.len(), v.capacity());
// len=5, cap=8   (doubled!)
\`\`\`

**Capacity management methods:**

| Method | Effect |
|---|---|
| **with_capacity(n)** | Pre-allocate space for n elements |
| **reserve(n)** | Ensure space for n *additional* elements |
| **reserve_exact(n)** | Allocate exactly n additional slots (no over-allocation) |
| **shrink_to_fit()** | Release unused capacity |
| **shrink_to(n)** | Shrink capacity to max(n, len) |

**Performance tip:** if you know you’ll push 1000 elements, use \`Vec::with_capacity(1000)\` to avoid ~10 reallocations (each involving a memcpy of all existing elements).

**Reallocation cost:** when capacity is exceeded, Rust allocates a new buffer (2x size), copies all elements, and frees the old buffer. This invalidates all existing references, which is why Rust won’t let you hold a \`&v[0]\` while pushing.`},{heading:"Sorting, Dedup & Transformations",body:`**Sorting:**

\`\`\`rust
let mut v = vec![3, 1, 4, 1, 5, 9];

v.sort();                    // [1, 1, 3, 4, 5, 9] — stable sort
v.sort_unstable();           // Same result, but faster (not stable)
v.sort_by(|a, b| b.cmp(a)); // Descending: [9, 5, 4, 3, 1, 1]
v.sort_by_key(|&x| x % 3);  // Sort by key function
\`\`\`

**Deduplication:**

\`\`\`rust
let mut v = vec![1, 1, 2, 3, 3, 3, 4];
v.dedup();  // Removes CONSECUTIVE duplicates: [1, 2, 3, 4]

// For non-sorted data, sort first:
let mut v = vec![3, 1, 2, 1, 3];
v.sort();
v.dedup();  // [1, 2, 3]
\`\`\`

**Splitting & joining:**

\`\`\`rust
let mut v = vec![1, 2, 3, 4, 5];

let right = v.split_off(3);  // v=[1,2,3], right=[4,5]
v.append(&mut right);         // v=[1,2,3,4,5], right=[]
v.extend([6, 7, 8]);          // v=[1,2,3,4,5,6,7,8]

let chunks: Vec<&[i32]> = v.chunks(3).collect();
// [[1,2,3], [4,5,6], [7,8]]

let windows: Vec<&[i32]> = v.windows(3).collect();
// [[1,2,3], [2,3,4], [3,4,5], ...]
\`\`\`

**\`chunks\` vs \`windows\`:** chunks are non-overlapping partitions; windows are overlapping sliding views. Both are extremely useful for signal processing and data analysis.`}],questions:[{q:"What is the difference between v[i] and v.get(i)? When should you use each?",a:"v[i] uses direct indexing and panics with 'index out of bounds' if i >= v.len(). v.get(i) returns Option<&T> — Some(&element) if valid, None if out of bounds. Use v[i] when you're certain the index is valid (e.g., inside a loop bounded by v.len()) and want to catch bugs early via panics. Use v.get(i) when the index comes from external input or when out-of-bounds is an expected case you want to handle gracefully with match or if-let.",hint:"Think about what happens when the index is invalid in each case.",check:l=>{const s=l.toLowerCase();return(s.includes("panic")||s.includes("crash"))&&(s.includes("option")||s.includes("none")||s.includes("some"))}},{q:"If you push 1000 elements into a Vec::new(), approximately how many heap reallocations occur?",a:"Approximately 10 reallocations. Vec starts with capacity 0, then allocates 4 on first push, then doubles: 4 → 8 → 16 → 32 → 64 → 128 → 256 → 512 → 1024. That's 9 doublings after the initial allocation = ~10 total reallocations. Each reallocation copies all existing elements to the new buffer. Using Vec::with_capacity(1000) avoids all of them.",hint:"Vec doubles capacity each time. Start from 4 and keep doubling until you reach 1000+.",check:l=>{const s=l.toLowerCase();return s.includes("10")||s.includes("nine")||s.includes("9")||s.includes("doubl")}},{q:"What does swap_remove do and why is it O(1) instead of O(n)?",a:"swap_remove(i) removes the element at index i by swapping it with the last element in the Vec, then popping the last element. This is O(1) because it only does one swap and one pop, without shifting any elements. Regular remove(i) is O(n) because it must shift all elements after index i one position to the left to fill the gap. Use swap_remove when you don't care about element ordering.",hint:"Think about what must happen to maintain contiguous memory after removing a middle element.",check:l=>{const s=l.toLowerCase();return(s.includes("swap")||s.includes("last"))&&(s.includes("shift")||s.includes("order")||s.includes("move"))}}]},{id:"string",icon:"📝",color:"#7C3AED",title:"String & str — UTF-8 Text",subtitle:"Owned vs borrowed strings, UTF-8 encoding, and why you can’t index into a String",resources:[{type:"read",title:"The Rust Book — Storing UTF-8 Encoded Text with Strings",url:"https://doc.rust-lang.org/book/ch08-02-strings.html"},{type:"read",title:"std::string::String — API documentation",url:"https://doc.rust-lang.org/std/string/struct.String.html"},{type:"video",title:"Jon Gjengset — Strings in Rust",url:"https://www.youtube.com/watch?v=CpvzeyzgQdw"}],content:[{heading:"String vs &str",body:`**Rust has two main string types:** \`String\` (owned, heap-allocated, growable) and \`&str\` (borrowed, immutable reference to a UTF-8 byte sequence).

| Aspect | **String** | **&str** |
|---|---|---|
| Ownership | Owned | Borrowed (reference) |
| Mutability | Growable, mutable | Immutable |
| Storage | Heap-allocated | Can point to heap, stack, or binary |
| Size (stack) | 24 bytes (ptr + len + cap) | 16 bytes (ptr + len) |
| Analogy | \`Vec<u8>\` with UTF-8 guarantee | \`&[u8]\` with UTF-8 guarantee |

**Creating strings:**

\`\`\`rust
// String (owned)
let s = String::from("hello");
let s = "hello".to_string();
let s = "hello".to_owned();
let s = format!("{} {}", "hello", "world");

// &str (borrowed)
let s: &str = "hello";           // string literal (lives in binary)
let owned = String::from("hi");
let s: &str = &owned;             // borrow from String
let s: &str = &owned[0..2];       // slice of a String
\`\`\`

**Key insight:** \`String\` is essentially a \`Vec<u8>\` that guarantees valid UTF-8. The \`&str\` type is a \`&[u8]\` with the same guarantee. This is why many Vec methods work on String too.

**Function signatures — prefer &str for inputs:**

\`\`\`rust
// Good: accepts both String and &str
fn greet(name: &str) { println!("Hello, {name}!"); }

greet("world");              // &str literal
greet(&String::from("Rust")); // &String coerces to &str via Deref
\`\`\``},{heading:"UTF-8 Encoding & Why No Indexing",body:`**Rust strings are UTF-8 encoded.** This means characters can be 1-4 bytes long, which makes direct indexing by byte position unsafe.

**UTF-8 byte lengths:**

| Character | Bytes | Example |
|---|---|---|
| ASCII (U+0000–U+007F) | 1 byte | 'A' = 0x41 |
| Latin/Greek (U+0080–U+07FF) | 2 bytes | 'é' = 0xC3 0xA9 |
| CJK/Emoji (U+0800–U+FFFF) | 3 bytes | '世' = 0xE4 0xB8 0x96 |
| Emoji/rare (U+10000+) | 4 bytes | '🦀' = 0xF0 0x9F 0xA6 0x80 |

**This is why \`s[0]\` doesn’t compile:**

\`\`\`rust
let hello = String::from("Здравствуйте"); // Russian "Hello"
// hello.len() = 24 (bytes), not 12 (characters)!
// hello[0] would give byte 0xD0, which is half of 'З' — meaningless!
\`\`\`

**Three views of a string:**

\`\`\`rust
let s = "नमस्ते"; // Hindi "namaste"

// Bytes: [224, 164, 168, 224, 164, 174, 224, 164, 184, ...]
for b in s.bytes() { print!("{b} "); }

// Chars (scalar values): ['न', 'म', 'स', '्', 'त', 'े']
for c in s.chars() { print!("{c} "); }

// Grapheme clusters (what humans see): ["न", "म", "स्ते"]
// (requires the unicode-segmentation crate)
\`\`\`

**Safe ways to get substrings:**

\`\`\`rust
let s = String::from("hello");
let c = s.chars().nth(2);        // Some('l') — O(n) but safe
let sub = &s[0..3];              // "hel" — panics if not on char boundary!
\`\`\``},{heading:"String Manipulation",body:`**Building strings:**

\`\`\`rust
let mut s = String::from("hello");

s.push(' ');           // Append a char
s.push_str("world");  // Append a &str
s += "!";              // Concat via Add trait (consumes left-hand side)

// format! macro (most flexible, doesn't consume)
let greeting = format!("{s} How are you?");
\`\`\`

**The \`+\` operator gotcha:**

\`\`\`rust
let s1 = String::from("hello");
let s2 = String::from(" world");
let s3 = s1 + &s2;  // s1 is MOVED (consumed), s2 is borrowed
// s1 is no longer valid here!
// s2 is still valid
\`\`\`

This happens because \`+\` calls \`fn add(self, s: &str) -> String\`. The first argument is taken by value (moved), so ownership transfers. Use \`format!\` to avoid this.

**Searching:**

\`\`\`rust
let s = "hello world";

s.contains("world");       // true
s.starts_with("hel");      // true
s.ends_with("ld");         // true
s.find("world");           // Some(6) — byte index
s.rfind('o');               // Some(7)
s.matches("l").count();     // 3
\`\`\`

**Trimming & replacing:**

\`\`\`rust
let s = "  hello  ";
s.trim();           // "hello"
s.trim_start();     // "hello  "
s.trim_end();       // "  hello"

let s = "hello world";
s.replace("world", "Rust");   // "hello Rust"
s.replacen("l", "L", 1);      // "heLlo world" (replace first n)
\`\`\`

**Splitting:**

\`\`\`rust
let csv = "a,b,c,d";
let parts: Vec<&str> = csv.split(',').collect();
// ["a", "b", "c", "d"]

let words: Vec<&str> = "hello   world".split_whitespace().collect();
// ["hello", "world"]
\`\`\``}],questions:[{q:"Why does Rust not allow s[0] on a String? What would you use instead?",a:"Rust strings are UTF-8 encoded, where characters can be 1-4 bytes. s[0] would return a raw byte, not a character, which could be the middle of a multi-byte character (meaningless on its own). Rust refuses to compile this to prevent bugs. Instead, use s.chars().nth(0) for the first character (returns Option<char>), or s.as_bytes()[0] if you explicitly want the raw byte. For substrings, use &s[0..n] with byte-aligned boundaries, but this panics if you split a multi-byte char.",hint:"Think about what happens with multi-byte characters like emoji or Chinese characters.",check:l=>{const s=l.toLowerCase();return(s.includes("utf")||s.includes("byte")||s.includes("multi"))&&(s.includes("char")||s.includes("nth"))}},{q:"What is the stack size of a String vs a &str, and why?",a:"String is 24 bytes on the stack (pointer to heap data + length + capacity), identical to Vec<u8>. &str is 16 bytes on the stack (pointer + length only, no capacity because it's immutable and can't grow). String needs capacity to track how much heap memory is allocated for future growth. &str doesn't need capacity because it's a read-only view into existing data.",hint:"Think about what metadata each type needs to carry on the stack.",check:l=>{const s=l.toLowerCase();return s.includes("24")&&s.includes("16")}}]},{id:"hashmap",icon:"🗂",color:"#059669",title:"HashMap<K,V> & BTreeMap<K,V>",subtitle:"Hash-based and ordered maps, the entry API, hashing, and when to choose which",resources:[{type:"read",title:"The Rust Book — Storing Keys with Associated Values in Hash Maps",url:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html"},{type:"read",title:"std::collections::HashMap — API documentation",url:"https://doc.rust-lang.org/std/collections/struct.HashMap.html"},{type:"read",title:"hashbrown crate — Rust’s HashMap implementation",url:"https://github.com/rust-lang/hashbrown"},{type:"video",title:"Jon Gjengset — HashMap internals",url:"https://www.youtube.com/watch?v=ncQmHpb10KQ"}],content:[{heading:"HashMap Basics",body:`**HashMap<K, V> stores key-value pairs with O(1) average lookup.** Keys must implement \`Hash + Eq\`.

**Creating and populating:**

\`\`\`rust
use std::collections::HashMap;

// Method 1: new + insert
let mut scores = HashMap::new();
scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Red"), 50);

// Method 2: from iterator of tuples
let teams = vec!["Blue", "Red"];
let initial_scores = vec![10, 50];
let scores: HashMap<_, _> =
    teams.into_iter().zip(initial_scores).collect();

// Method 3: from arrays (Rust 1.56+)
let scores = HashMap::from([
    ("Blue", 10),
    ("Red", 50),
]);
\`\`\`

**Accessing values:**

\`\`\`rust
let score = scores.get("Blue");     // Option<&V> → Some(&10)
let score = scores["Blue"];          // Direct index → 10 (panics if missing!)

for (key, value) in &scores {
    println!("{key}: {value}");
}
\`\`\`

**Ownership:** for types that implement \`Copy\` (like i32), values are copied. For owned types (like String), ownership is moved into the HashMap. The key and value are owned by the map after insertion.`},{heading:"The Entry API",body:`**The entry API is HashMap’s killer feature.** It lets you check if a key exists, and insert or modify in a single lookup.

\`\`\`rust
use std::collections::HashMap;

let mut map = HashMap::new();

// or_insert: insert default if key absent
map.entry("key").or_insert(0);

// or_insert_with: lazy initialization
map.entry("key").or_insert_with(|| expensive_computation());

// or_default: insert Default::default()
map.entry("key").or_default(); // inserts 0 for i32

// and_modify: update existing value
map.entry("key")
   .and_modify(|v| *v += 1)
   .or_insert(1);
\`\`\`

**Classic use case — word frequency counter:**

\`\`\`rust
let text = "hello world hello rust hello world";

let mut counts = HashMap::new();
for word in text.split_whitespace() {
    let count = counts.entry(word).or_insert(0);
    *count += 1;
}
// {"hello": 3, "world": 2, "rust": 1}
\`\`\`

**Why entry > get+insert:**

| Approach | Hash lookups | Performance |
|---|---|---|
| \`if !map.contains_key(k) { map.insert(k, v); }\` | 2 lookups | Slower |
| \`map.entry(k).or_insert(v)\` | 1 lookup | Faster |

The entry API does a single hash lookup and returns a mutable reference to the slot, whether it was vacant or occupied. This is both faster and more ergonomic.`},{heading:"BTreeMap — Ordered Alternative",body:`**BTreeMap<K, V> keeps keys sorted.** Keys must implement \`Ord\` (not Hash).

**When to choose BTreeMap over HashMap:**

| Feature | HashMap | BTreeMap |
|---|---|---|
| Lookup | O(1) average | O(log n) |
| Insertion | O(1) average | O(log n) |
| Ordering | None (random) | Sorted by key |
| Range queries | Not supported | \`range(start..end)\` |
| Min/max key | O(n) scan | O(log n) via iterators |
| Memory | Hash table + probing | B-tree nodes |
| Key requirement | Hash + Eq | Ord |

**BTreeMap unique methods:**

\`\`\`rust
use std::collections::BTreeMap;

let mut map = BTreeMap::new();
map.insert(3, "c");
map.insert(1, "a");
map.insert(4, "d");
map.insert(2, "b");

// Iteration is always sorted by key
for (k, v) in &map {
    print!("{k}:{v} "); // 1:a 2:b 3:c 4:d
}

// Range queries
for (k, v) in map.range(2..4) {
    print!("{k}:{v} "); // 2:b 3:c
}

// First and last (O(log n))
map.first_key_value(); // Some((&1, &"a"))
map.last_key_value();  // Some((&4, &"d"))
\`\`\`

**Rule of thumb:** use HashMap by default. Switch to BTreeMap when you need sorted iteration, range queries, or deterministic ordering (e.g., for reproducible tests or serialization).`},{heading:"HashSet & BTreeSet",body:`**Sets are maps without values** — they store unique keys only. Rust provides HashSet and BTreeSet, backed by HashMap and BTreeMap respectively.

\`\`\`rust
use std::collections::HashSet;

let mut set = HashSet::new();
set.insert("apple");
set.insert("banana");
set.insert("apple"); // Duplicate ignored
assert_eq!(set.len(), 2);

// Check membership
assert!(set.contains("apple"));
\`\`\`

**Set operations (mathematical):**

\`\`\`rust
let a: HashSet<i32> = [1, 2, 3, 4].into();
let b: HashSet<i32> = [3, 4, 5, 6].into();

// Union: {1, 2, 3, 4, 5, 6}
let union: HashSet<_> = a.union(&b).collect();

// Intersection: {3, 4}
let inter: HashSet<_> = a.intersection(&b).collect();

// Difference (in a but not b): {1, 2}
let diff: HashSet<_> = a.difference(&b).collect();

// Symmetric difference (in either but not both): {1, 2, 5, 6}
let sym: HashSet<_> = a.symmetric_difference(&b).collect();

// Subset/superset checks
a.is_subset(&b);    // false
a.is_disjoint(&b);  // false (they share 3, 4)
\`\`\`

**Use cases:**
- Deduplicating data: \`let unique: HashSet<_> = data.into_iter().collect();\`
- Fast membership checks (O(1) vs O(n) for Vec::contains)
- Computing set operations on two collections`},{heading:"VecDeque — Double-Ended Queue",body:`**VecDeque<T> is a ring buffer** that supports efficient push/pop at both ends.

\`\`\`rust
use std::collections::VecDeque;

let mut dq = VecDeque::new();

dq.push_back(1);    // [1]
dq.push_back(2);    // [1, 2]
dq.push_front(0);   // [0, 1, 2]

dq.pop_front();      // Some(0) → [1, 2]
dq.pop_back();       // Some(2) → [1]
\`\`\`

**Performance comparison:**

| Operation | Vec | VecDeque |
|---|---|---|
| push_back | O(1) amortized | O(1) amortized |
| pop_back | O(1) | O(1) |
| push_front | **O(n)** (shift all) | **O(1)** amortized |
| pop_front | **O(n)** (shift all) | **O(1)** |
| Random access [i] | O(1) | O(1) |

**Ring buffer internals:** VecDeque stores elements in a contiguous buffer with a head and tail pointer. When you push_front, the head pointer wraps around to the end of the buffer. This is why push/pop at both ends is O(1).

**When to use VecDeque:**
- Implementing a queue (FIFO): push_back + pop_front
- Sliding window algorithms
- BFS (breadth-first search)
- Any time you need efficient operations at both ends`}],questions:[{q:"Why is the entry API more efficient than checking contains_key followed by insert?",a:"The entry API performs a single hash computation and table lookup, then returns an Entry enum that's either Vacant or Occupied. You can then insert or modify in-place without re-hashing. The contains_key + insert approach does TWO separate hash lookups: one for contains_key and one for insert. Since hashing can be expensive (especially for long string keys), the entry API is roughly 2x faster for this pattern. Additionally, the entry API is more ergonomic and avoids the borrow checker issues that arise from calling mutable methods after an immutable lookup.",hint:"Count how many times the key is hashed in each approach.",check:l=>{const s=l.toLowerCase();return(s.includes("one")||s.includes("single")||s.includes("1"))&&(s.includes("two")||s.includes("2")||s.includes("twice")||s.includes("hash"))}},{q:"When should you choose BTreeMap over HashMap?",a:"Choose BTreeMap when you need: (1) sorted iteration over keys, (2) range queries like map.range(start..end), (3) finding min/max keys efficiently (O(log n) vs O(n)), or (4) deterministic ordering for reproducible tests or serialization. HashMap is faster for pure lookup/insert (O(1) vs O(log n)), so use it as the default unless you specifically need ordering. BTreeMap keys must implement Ord; HashMap keys must implement Hash + Eq.",hint:"Think about what BTreeMap provides that HashMap doesn't: order.",check:l=>{const s=l.toLowerCase();return s.includes("sort")||s.includes("order")||s.includes("range")}}]},{id:"iterator",icon:"🔄",color:"#2563EB",title:"The Iterator Trait",subtitle:"map, filter, fold, collect, chain, zip — Rust’s zero-cost functional programming backbone",resources:[{type:"read",title:"The Rust Book — Processing a Series of Items with Iterators",url:"https://doc.rust-lang.org/book/ch13-02-iterators.html"},{type:"read",title:"std::iter::Iterator — API documentation",url:"https://doc.rust-lang.org/std/iter/trait.Iterator.html"},{type:"video",title:"Let’s Get Rusty — Iterators in Rust",url:"https://www.youtube.com/watch?v=4GcKrj4By8s"},{type:"read",title:"Rust by Example — Iterator",url:"https://doc.rust-lang.org/rust-by-example/trait/iter.html"}],content:[{heading:"The Iterator Trait Definition",body:`**Every iterator in Rust implements this trait:**

\`\`\`rust
pub trait Iterator {
    type Item;  // Associated type: what you iterate over

    fn next(&mut self) -> Option<Self::Item>;
    // ... 70+ provided methods
}
\`\`\`

**You only implement \`next()\`.** All other methods (map, filter, fold, collect, etc.) are automatically provided.

**Using next() directly:**

\`\`\`rust
let v = vec![1, 2, 3];
let mut iter = v.iter();

assert_eq!(iter.next(), Some(&1));
assert_eq!(iter.next(), Some(&2));
assert_eq!(iter.next(), Some(&3));
assert_eq!(iter.next(), None);
\`\`\`

**Three ways to get an iterator:**

| Method | Yields | Ownership |
|---|---|---|
| \`.iter()\` | \`&T\` | Borrows collection |
| \`.iter_mut()\` | \`&mut T\` | Mutably borrows |
| \`.into_iter()\` | \`T\` | Consumes collection |

**In a \`for\` loop, Rust calls \`.into_iter()\` automatically:**

\`\`\`rust
let v = vec![1, 2, 3];
for x in v {       // v.into_iter() — v is consumed
    println!("{x}");
}
// v is no longer valid here!

let v = vec![1, 2, 3];
for x in &v {      // (&v).into_iter() = v.iter()
    println!("{x}");
}
// v is still valid
\`\`\``},{heading:"Adaptors — Transform Without Consuming",body:`**Adaptors are lazy.** They return a new iterator without doing any work until consumed.

\`\`\`rust
let v = vec![1, 2, 3, 4, 5];

// map: transform each element
let doubled: Vec<i32> = v.iter().map(|x| x * 2).collect();
// [2, 4, 6, 8, 10]

// filter: keep elements matching predicate
let evens: Vec<&i32> = v.iter().filter(|&&x| x % 2 == 0).collect();
// [&2, &4]

// chain: concatenate two iterators
let a = [1, 2];
let b = [3, 4];
let chained: Vec<i32> = a.iter().chain(b.iter()).copied().collect();
// [1, 2, 3, 4]

// zip: pair elements from two iterators
let names = vec!["Alice", "Bob"];
let ages = vec![30, 25];
let pairs: Vec<_> = names.iter().zip(ages.iter()).collect();
// [("Alice", 30), ("Bob", 25)]

// enumerate: add index
for (i, val) in v.iter().enumerate() {
    println!("{i}: {val}");
}

// take / skip
let first3: Vec<_> = v.iter().take(3).collect();  // [1, 2, 3]
let after2: Vec<_> = v.iter().skip(2).collect();   // [3, 4, 5]

// flat_map: map then flatten
let words = vec!["hello world", "foo bar"];
let chars: Vec<char> = words.iter()
    .flat_map(|s| s.chars())
    .collect();
// ['h', 'e', 'l', 'l', 'o', ' ', 'w', ...]
\`\`\`

**Key point:** calling \`.map()\` alone does NOTHING. Adaptors are lazy — they only execute when a consumer pulls values.

\`\`\`rust
// This prints nothing! map is lazy.
(0..5).map(|x| println!("{x}"));

// This prints 0-4: for_each is a consumer.
(0..5).for_each(|x| println!("{x}"));
\`\`\``},{heading:"Consumers — Drive the Iterator",body:`**Consumers pull values from the iterator and produce a final result.**

\`\`\`rust
let v = vec![1, 2, 3, 4, 5];

// collect: gather into a collection
let set: HashSet<_> = v.iter().collect();

// fold: reduce to a single value with accumulator
let sum = v.iter().fold(0, |acc, x| acc + x); // 15

// sum / product (shorthand for fold)
let sum: i32 = v.iter().sum();           // 15
let prod: i32 = v.iter().product();       // 120

// count
let n = v.iter().count(); // 5

// find: first match
let first_even = v.iter().find(|&&x| x % 2 == 0); // Some(&2)

// position: index of first match
let pos = v.iter().position(|&x| x > 3); // Some(3)

// any / all: boolean checks
let has_even = v.iter().any(|&x| x % 2 == 0);  // true
let all_pos = v.iter().all(|&x| x > 0);          // true

// min / max
let smallest = v.iter().min(); // Some(&1)
let largest = v.iter().max();   // Some(&5)

// for_each: side effects
v.iter().for_each(|x| println!("{x}"));
\`\`\`

**Adaptor vs Consumer summary:**

| Type | Returns | Lazy? | Examples |
|---|---|---|---|
| **Adaptor** | New iterator | Yes | map, filter, take, skip, chain, zip, enumerate |
| **Consumer** | Final value | No (executes) | collect, fold, sum, count, find, any, all, for_each |

**The pipeline pattern:** chain adaptors, end with a consumer.

\`\`\`rust
let result: Vec<String> = data.iter()
    .filter(|x| x.is_valid())      // adaptor
    .map(|x| x.transform())         // adaptor
    .take(10)                        // adaptor
    .collect();                      // consumer — drives everything
\`\`\``},{heading:"Implementing Custom Iterators",body:`**Any struct can become an iterator by implementing the Iterator trait.**

\`\`\`rust
struct Counter {
    count: u32,
    max: u32,
}

impl Counter {
    fn new(max: u32) -> Self {
        Counter { count: 0, max }
    }
}

impl Iterator for Counter {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        if self.count < self.max {
            self.count += 1;
            Some(self.count)
        } else {
            None
        }
    }
}

// Usage:
let counter = Counter::new(5);
let v: Vec<u32> = counter.collect(); // [1, 2, 3, 4, 5]

// All adaptor methods work automatically!
let sum: u32 = Counter::new(5)
    .zip(Counter::new(5).skip(1))
    .map(|(a, b)| a * b)
    .filter(|x| x % 2 == 0)
    .sum();
\`\`\`

**IntoIterator trait — making your types work with \`for\` loops:**

\`\`\`rust
struct Playlist {
    songs: Vec<String>,
}

impl IntoIterator for Playlist {
    type Item = String;
    type IntoIter = std::vec::IntoIter<String>;

    fn into_iter(self) -> Self::IntoIter {
        self.songs.into_iter()
    }
}

// Now you can write:
let playlist = Playlist { songs: vec!["A".into(), "B".into()] };
for song in playlist {
    println!("Playing: {song}");
}
\`\`\`

**The IntoIterator trait is what makes \`for x in collection\` work.** When you write \`for x in v\`, Rust desugars it to \`for x in v.into_iter()\`.`},{heading:"Lazy Evaluation & Zero-Cost Abstractions",body:'**Iterators in Rust compile down to the same machine code as hand-written loops.** This is Rust’s "zero-cost abstraction" guarantee.\n\n**Lazy evaluation means no intermediate allocations:**\n\n```rust\n// This does NOT create intermediate Vec for each step!\nlet result: Vec<i32> = (0..1_000_000)\n    .filter(|x| x % 2 == 0)\n    .map(|x| x * x)\n    .take(100)\n    .collect();\n```\n\nInternally, this compiles to a single loop that:\n1. Generates numbers 0, 1, 2, ...\n2. Skips odd numbers\n3. Squares even numbers\n4. Stops after 100 results\nNo intermediate Vec is ever created.\n\n**Benchmark evidence:** the Rust Book demonstrates that iterator chains compile to the same assembly as manual loops. The compiler’s LLVM backend inlines and optimizes the closures away entirely.\n\n**Common pitfall — unused adaptors:**\n\n```rust\n// WARNING: this does nothing!\nv.iter().map(|x| x + 1);\n// Rust compiler warns: "unused Map that must be used"\n\n// Fix: consume the iterator\nlet result: Vec<_> = v.iter().map(|x| x + 1).collect();\n```\n\n**Performance tips:**\n- Prefer `.iter().filter().map().collect()` over manual `for` loops with `if` and `push`\n- Use `.chain()` instead of `extend()` when composing iterators before collecting\n- Use `sum()` and `product()` instead of `fold(0, |a, x| a + x)`\n- Avoid `.collect()` in the middle of a chain — keep it lazy until the end\n- For parallel iteration, consider the `rayon` crate: `.par_iter()` replaces `.iter()` for automatic parallelism'}],questions:[{q:"What is the difference between an iterator adaptor and a consumer? Give two examples of each.",a:"An adaptor transforms an iterator into another iterator lazily (no work done until consumed). Examples: map (transforms each element), filter (keeps matching elements), take (limits count), zip (pairs two iterators). A consumer drives the iterator and produces a final result. Examples: collect (gathers into a collection), fold (reduces to single value), sum (adds all elements), count (counts elements). The key difference is laziness: adaptors are lazy and return iterators; consumers are eager and return values.",hint:"Think about what each returns: another iterator, or a final value?",check:l=>{const s=l.toLowerCase();return(s.includes("lazy")||s.includes("adaptor")||s.includes("adapter"))&&(s.includes("consumer")||s.includes("collect")||s.includes("fold")||s.includes("eager"))}},{q:'Why does (0..5).map(|x| println!("{x}")); print nothing?',a:`Because map is a lazy adaptor. It returns a new iterator (Map struct) but doesn't execute anything until a consumer drives it. The println! inside the closure never runs because no consumer calls next() on the Map iterator. To fix this, use .for_each(|x| println!("{x}")) instead, which is a consumer that eagerly iterates, or chain with .collect::<Vec<_>>() to drive the iterator. The Rust compiler actually warns about this: 'unused Map iterator that must be used'.`,hint:"Is map an adaptor or a consumer?",check:l=>{const s=l.toLowerCase();return(s.includes("lazy")||s.includes("adaptor")||s.includes("adapter"))&&(s.includes("consum")||s.includes("for_each")||s.includes("never"))}},{q:"Implement a custom iterator that yields Fibonacci numbers. What trait and method must you implement?",a:"You must implement the Iterator trait with its required method next(&mut self) -> Option<Self::Item>. Here's the implementation: struct Fibonacci { a: u64, b: u64 } impl Fibonacci { fn new() -> Self { Fibonacci { a: 0, b: 1 } } } impl Iterator for Fibonacci { type Item = u64; fn next(&mut self) -> Option<Self::Item> { let result = self.a; let new_b = self.a + self.b; self.a = self.b; self.b = new_b; Some(result) } } You also need to set the associated type Item. Once implemented, all 70+ provided methods (map, filter, take, etc.) work automatically.",hint:"The trait is Iterator and it requires exactly one method plus an associated type.",check:l=>{const s=l.toLowerCase();return s.includes("iterator")&&s.includes("next")&&(s.includes("option")||s.includes("item"))}}]}];function fp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsxs("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:["✓"," Check"]}),n.jsxs("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsxs("span",{children:["📖"," Answer"]}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function gp(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=As.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else{const h=d,u=h.startsWith("let ")||h.startsWith("use ")||h.startsWith("fn ")||h.startsWith("pub ")||h.startsWith("impl ")||h.startsWith("struct ")||h.startsWith("enum ")||h.startsWith("//")||h.startsWith("    ")||h.startsWith("for ")||h.startsWith("if ")||h.startsWith("mod ")||h.startsWith("match ")||h.startsWith("println!")||h.startsWith("assert")||h.startsWith("v.")||h.startsWith("s.")||h.startsWith("map.")||h.startsWith("set.")||h.startsWith("dq.")||h.startsWith("scores")||h.startsWith("// ")||h.startsWith("///")||h.startsWith("#[")||h.startsWith("}")||h.startsWith("type ")||h.startsWith("where")||h.startsWith("Self")||h.startsWith("Some(")||h.startsWith("None")||h.startsWith("Ok(")||h.startsWith("Err(")||h.startsWith("    ")||h.trimStart().startsWith(".")||h.startsWith("counts")||h.startsWith("a.")||h.startsWith("b.")||h.startsWith("let ")||h.startsWith("result")||h.startsWith("counter"),b=h.startsWith("let ")||h.startsWith("use ")||h.startsWith("fn ")||h.startsWith("pub ")||h.startsWith("impl ")||h.startsWith("struct ")||h.startsWith("enum ")||h.startsWith("// ")||h.startsWith("///")||h.startsWith("#[")||h.startsWith("for ");u?T.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:b?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:b?"6px 6px 0 0":0,marginTop:b?10:0},children:h},`c${m}`)):h===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(h)},`p${m}`)),m++}}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#C2410C!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"RUST COLLECTIONS & ITERATORS"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Collections & Iterators Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Vec, String, HashMap, BTreeMap, HashSet, VecDeque, and the Iterator trait ","—"," Rust","’","s powerful standard library collections and functional iteration patterns.",n.jsx("br",{}),As.length," sections ","·"," ",F," concepts ","·"," ",As.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #7C3AED, #059669, #2563EB)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:As.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:"›"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:"📖 Learn"}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["✏️ Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:"›"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(fp,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=mp[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Vec ","→"," String ","→"," HashMap ","→"," BTreeMap ","→"," Sets ","→"," VecDeque ","→"," Iterator trait ","—"," master Rust","’","s collections from the ground up"]})]})}const yp={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},zs=[{id:"defining",icon:"🎯",color:"#7C3AED",title:"Defining & Implementing Traits",subtitle:"Trait syntax, implementing on types, default methods, and the orphan rule",resources:[{type:"read",title:"The Rust Book — Traits: Defining Shared Behavior",url:"https://doc.rust-lang.org/book/ch10-02-traits.html"},{type:"read",title:"Rust by Example — Traits",url:"https://doc.rust-lang.org/rust-by-example/trait.html"},{type:"video",title:"Let’s Get Rusty — Traits in Rust",url:"https://www.youtube.com/watch?v=T0Xflr4EGRC"}],content:[{heading:"Defining a Trait",body:`**A trait defines a set of methods that a type must implement.** It’s Rust’s version of interfaces (Java/Go) or abstract classes (C++), but more powerful.

\`\`\`rust
pub trait Summary {
    fn summarize(&self) -> String;
}
\`\`\`

A trait declaration contains **method signatures** (no body) that implementing types must provide. Traits can have multiple methods:

\`\`\`rust
pub trait Shape {
    fn area(&self) -> f64;
    fn perimeter(&self) -> f64;
    fn name(&self) -> &str;
}
\`\`\`

**Key insight:** traits define **what** a type can do, not **how** it does it. Different types can implement the same trait differently. A Circle and a Rectangle both implement Shape, but their area calculations differ.`},{heading:"Implementing Traits on Types",body:`**Use \`impl TraitName for TypeName\` to implement a trait:**

\`\`\`rust
pub struct NewsArticle {
    pub headline: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {}", self.headline, self.author)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("@{}: {}", self.username, self.content)
    }
}
\`\`\`

**Usage:**

\`\`\`rust
let article = NewsArticle {
    headline: String::from("Rust 2024"),
    author: String::from("Ferris"),
    content: String::from("..."),
};
println!("{}", article.summarize());
// "Rust 2024, by Ferris"
\`\`\`

**Important:** to call a trait method, the trait must be **in scope**. If Summary is from another crate, you need \`use other_crate::Summary;\`.`},{heading:"Default Implementations",body:`**Traits can provide default method bodies** that types can use or override:

\`\`\`rust
pub trait Summary {
    fn summarize_author(&self) -> String;

    // Default implementation — uses summarize_author()
    fn summarize(&self) -> String {
        format!("(Read more from {}...)", self.summarize_author())
    }
}

impl Summary for Tweet {
    fn summarize_author(&self) -> String {
        format!("@{}", self.username)
    }
    // summarize() uses the default implementation
}
\`\`\`

**Default methods can call other trait methods**, even ones without defaults. This is a powerful pattern: you require types to implement a small core (e.g., \`summarize_author\`), and provide complex behavior on top for free.

**You cannot call the default implementation from an overriding implementation.** Once you override, the default is gone for that type.

**Common standard library example:** the \`Iterator\` trait requires only \`next()\`, but provides 70+ methods (\`map\`, \`filter\`, \`fold\`, etc.) as defaults built on \`next()\`.`},{heading:"The Orphan Rule & Coherence",body:`**You can implement a trait on a type only if the trait OR the type is local to your crate.** This is the **orphan rule**.

| Trait | Type | Allowed? |
|---|---|---|
| Your trait (Summary) | Your type (Tweet) | Yes |
| Std trait (Display) | Your type (Tweet) | Yes |
| Your trait (Summary) | Std type (Vec<T>) | Yes |
| Std trait (Display) | Std type (Vec<T>) | **No** |

**Why the rule exists:** without it, two crates could both implement \`Display\` for \`Vec<T>\`, and Rust wouldn’t know which to use. The orphan rule prevents these conflicts.

**Workaround — the newtype pattern:**

\`\`\`rust
// Can't impl Display for Vec<String> directly
// Solution: wrap it in a newtype
struct Wrapper(Vec<String>);

impl std::fmt::Display for Wrapper {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "[{}]", self.0.join(", "))
    }
}
\`\`\`

The newtype \`Wrapper\` is local to your crate, so you can implement any trait on it. Use \`Deref\` to make it transparent.`}],questions:[{q:"Can you implement the Display trait from std for Vec<String>? Why or why not, and what’s the workaround?",a:"No, you cannot. The orphan rule prevents implementing a foreign trait (Display) on a foreign type (Vec<String>) because neither is local to your crate. This prevents conflicting implementations across crates. The workaround is the newtype pattern: create a wrapper struct like struct Wrapper(Vec<String>), which IS local to your crate, and implement Display on Wrapper instead. You can implement Deref to make the wrapper transparent in usage.",hint:"Think about the orphan rule: at least one of the trait or type must be local.",check:l=>{const s=l.toLowerCase();return(s.includes("orphan")||s.includes("foreign")||s.includes("cannot")||s.includes("can't"))&&(s.includes("newtype")||s.includes("wrapper")||s.includes("wrap"))}},{q:"What happens if a default trait method calls another trait method that has no default? Who must implement what?",a:"The type implementing the trait must provide an implementation for the method without a default. The default method will then call that type-specific implementation at runtime. For example, if trait Summary has summarize_author() with no default and summarize() with a default that calls summarize_author(), then a type implementing Summary MUST implement summarize_author() but gets summarize() for free. The type can optionally override summarize() too.",hint:"Think about which methods are required vs optional when implementing a trait.",check:l=>{const s=l.toLowerCase();return(s.includes("must")||s.includes("require"))&&(s.includes("default")||s.includes("free")||s.includes("optional"))}}]},{id:"bounds",icon:"🔒",color:"#DC2626",title:"Trait Bounds & Where Clauses",subtitle:"Constraining generics with trait bounds, impl Trait syntax, and where clauses for readability",resources:[{type:"read",title:"The Rust Book — Traits as Parameters",url:"https://doc.rust-lang.org/book/ch10-02-traits.html#traits-as-parameters"},{type:"read",title:"Rust Reference — Trait and lifetime bounds",url:"https://doc.rust-lang.org/reference/trait-bounds.html"},{type:"video",title:"Jon Gjengset — Generics and Trait Bounds",url:"https://www.youtube.com/watch?v=6rcTSxPJ7Bk"}],content:[{heading:"impl Trait vs Trait Bounds",body:`**Two equivalent syntaxes for constraining function parameters:**

\`\`\`rust
// 1. impl Trait syntax (concise)
fn notify(item: &impl Summary) {
    println!("Breaking: {}", item.summarize());
}

// 2. Trait bound syntax (explicit)
fn notify<T: Summary>(item: &T) {
    println!("Breaking: {}", item.summarize());
}
\`\`\`

**When they differ:**

\`\`\`rust
// impl Trait: each parameter can be a DIFFERENT type
fn notify(a: &impl Summary, b: &impl Summary) {
    // a could be Tweet, b could be NewsArticle
}

// Trait bound: SAME type enforced
fn notify<T: Summary>(a: &T, b: &T) {
    // a and b must be the same concrete type
}
\`\`\`

**Use \`impl Trait\` for simplicity, trait bounds when you need the type parameter (e.g., to enforce same type or use it elsewhere in the signature).**

**Return position:**

\`\`\`rust
fn make_summary() -> impl Summary {
    Tweet { username: "ferris".into(), content: "hello".into() }
}
\`\`\`

**Limitation:** \`-> impl Trait\` can only return ONE concrete type. You cannot return Tweet in one branch and NewsArticle in another. For that, you need trait objects (\`Box<dyn Trait>\`).`},{heading:"Multiple Trait Bounds with +",body:`**Require multiple traits using the \`+\` operator:**

\`\`\`rust
// With impl Trait
fn display_summary(item: &(impl Summary + std::fmt::Display)) {
    println!("{item}");  // uses Display
    println!("{}", item.summarize()); // uses Summary
}

// With trait bounds
fn display_summary<T: Summary + std::fmt::Display>(item: &T) {
    println!("{item}");
    println!("{}", item.summarize());
}
\`\`\`

**Common combinations in the standard library:**

| Bound | Meaning |
|---|---|
| \`T: Clone + Debug\` | Can be cloned and debug-printed |
| \`T: Send + Sync\` | Safe to send between threads and share |
| \`T: Hash + Eq\` | Can be used as a HashMap key |
| \`T: Ord\` | Totally ordered (implies PartialOrd + Eq + PartialEq) |
| \`T: Display + Error\` | Custom error type |
| \`T: Iterator<Item = u32>\` | Iterator yielding u32 values |

**Negative reasoning:** if a function’s bound is \`T: Clone\`, you can’t pass a type that doesn’t implement Clone. The compiler error will tell you exactly which trait is missing.`},{heading:"Where Clauses",body:`**Where clauses improve readability when bounds get complex:**

\`\`\`rust
// Hard to read
fn complex<T: Display + Clone + Debug, U: Clone + Into<String>>(
    t: &T, u: &U
) -> i32 {
    unimplemented!()
}

// Clearer with where clause
fn complex<T, U>(t: &T, u: &U) -> i32
where
    T: Display + Clone + Debug,
    U: Clone + Into<String>,
{
    unimplemented!()
}
\`\`\`

**Where clauses can express things inline bounds cannot:**

\`\`\`rust
// Bound on an associated type
fn print_items<I>(iter: I)
where
    I: Iterator,
    I::Item: Display,
{
    for item in iter {
        println!("{item}");
    }
}

// Bound involving the type itself
fn ensure_sortable<T>(list: &mut Vec<T>)
where
    T: Ord,
{
    list.sort();
}
\`\`\`

**Rule of thumb:** use inline bounds for 1-2 simple constraints, where clauses for anything more complex. Most Rust code in the standard library uses where clauses.`},{heading:"Conditional Method Implementation",body:`**You can implement methods only for types satisfying certain bounds:**

\`\`\`rust
struct Pair<T> {
    x: T,
    y: T,
}

// Available for ALL Pair<T>
impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Pair { x, y }
    }
}

// Only available when T: Display + PartialOrd
impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("Largest is x = {}", self.x);
        } else {
            println!("Largest is y = {}", self.y);
        }
    }
}
\`\`\`

\`Pair::new()\` works for any T, but \`cmp_display()\` only exists when T implements both Display and PartialOrd.

**Blanket implementations — implement for ALL types meeting a bound:**

\`\`\`rust
// From the standard library:
impl<T: Display> ToString for T {
    fn to_string(&self) -> String {
        format!("{self}")
    }
}
\`\`\`

This means ANY type implementing Display automatically gets \`to_string()\`. That’s why \`3.to_string()\` works — i32 implements Display, so it gets ToString for free.

**Blanket impls are one of Rust’s most powerful features.** They let library authors provide functionality to any type that meets certain criteria, without knowing about those types in advance.`}],questions:[{q:"What is the difference between fn foo(x: &impl Trait) and fn foo<T: Trait>(x: &T)? When does it matter?",a:"Both constrain x to types implementing Trait. They're equivalent for single parameters. The difference matters with multiple parameters: fn foo(a: &impl Trait, b: &impl Trait) allows a and b to be DIFFERENT concrete types (desugars to fn foo<A: Trait, B: Trait>). fn foo<T: Trait>(a: &T, b: &T) requires a and b to be the SAME type. Use trait bounds when you need to reference the type parameter elsewhere (e.g., return type, enforcing same type, or in where clauses).",hint:"Think about what happens with two parameters of the same bound.",check:l=>{const s=l.toLowerCase();return(s.includes("same")||s.includes("different"))&&(s.includes("type")||s.includes("concrete"))}},{q:"What is a blanket implementation? Give an example from the standard library.",a:"A blanket implementation implements a trait for ALL types that satisfy certain bounds, using a generic impl block. The classic example from std is: impl<T: Display> ToString for T { ... } This means every type that implements Display automatically gets the to_string() method from ToString. Another example: impl<T: Iterator> IntoIterator for T { ... } makes every Iterator automatically implement IntoIterator. Blanket implementations are powerful because library authors can provide functionality for types they don't even know about yet.",hint:"Think about impl<T: SomeTrait> OtherTrait for T.",check:l=>{const s=l.toLowerCase();return(s.includes("all")||s.includes("every")||s.includes("any"))&&(s.includes("display")||s.includes("tostring")||s.includes("to_string")||s.includes("generic"))}}]},{id:"associated",icon:"🔗",color:"#0891B2",title:"Associated Types vs Generic Parameters",subtitle:"When to use associated types vs generics in trait definitions, and how they differ",resources:[{type:"read",title:"The Rust Book — Advanced Traits",url:"https://doc.rust-lang.org/book/ch19-03-advanced-traits.html"},{type:"read",title:"Rust by Example — Associated types",url:"https://doc.rust-lang.org/rust-by-example/generics/assoc_items/types.html"}],content:[{heading:"Associated Types",body:`**An associated type is a type placeholder inside a trait** that implementors must specify.

\`\`\`rust
pub trait Iterator {
    type Item;  // Associated type
    fn next(&mut self) -> Option<Self::Item>;
}

impl Iterator for Counter {
    type Item = u32;  // Concrete type chosen by implementor
    fn next(&mut self) -> Option<u32> {
        // ...
    }
}
\`\`\`

**Why not just use generics?** Compare:

\`\`\`rust
// With associated type (actual Iterator trait)
pub trait Iterator {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
}

// Hypothetical: with generic parameter
pub trait Iterator<T> {
    fn next(&mut self) -> Option<T>;
}
\`\`\`

**The critical difference:**

| Aspect | Associated Type | Generic Parameter |
|---|---|---|
| Implementations per type | **Exactly one** | Multiple allowed |
| Syntax at call site | \`impl Iterator\` | \`impl Iterator<u32>\` |
| Inference | Compiler infers Item | Must specify T |
| Use case | One logical output type | Multiple valid types |

With associated types, a type can implement Iterator only once. With generic Iterator<T>, you could implement Iterator<u32> AND Iterator<String> for the same type — which would make \`.next()\` ambiguous.`},{heading:"When to Use Each",body:`**Use associated types when there’s one logical type per implementation:**

\`\`\`rust
// Good: each collection has ONE natural item type
trait Container {
    type Item;
    fn get(&self, index: usize) -> Option<&Self::Item>;
}

impl Container for Vec<i32> {
    type Item = i32;
    fn get(&self, index: usize) -> Option<&i32> { self.get(index) }
}
\`\`\`

**Use generic parameters when multiple implementations make sense:**

\`\`\`rust
// Good: a type can convert FROM multiple source types
trait From<T> {
    fn from(value: T) -> Self;
}

impl From<i32> for String {
    fn from(value: i32) -> String { value.to_string() }
}

impl From<bool> for String {
    fn from(value: bool) -> String { value.to_string() }
}
\`\`\`

**Standard library patterns:**

| Trait | Uses | Why |
|---|---|---|
| Iterator | Associated (Item) | One item type per iterator |
| From<T> | Generic (T) | Can convert from many types |
| Add<Rhs> | Generic (Rhs) | Can add different types |
| Deref | Associated (Target) | One deref target |
| Index<Idx> | Generic (Idx) + Associated (Output) | Multiple index types, one output |

**Combining both:** \`Index<Idx>\` uses a generic for the index type (you might index by usize or Range) and an associated type for the output (always returns the same type regardless of how you index).`}],questions:[{q:"Why does the Iterator trait use an associated type (Item) instead of a generic parameter? What would go wrong with Iterator<T>?",a:"If Iterator used a generic parameter Iterator<T>, a single type could implement Iterator<u32> AND Iterator<String>, making .next() ambiguous — the compiler wouldn't know which Item type to return without explicit annotation. With associated type Item, each type can implement Iterator exactly once, so there's no ambiguity. When you call counter.next(), the compiler knows exactly what type comes back. Associated types also make the API cleaner: you write impl Iterator instead of impl Iterator<u32>.",hint:"Think about what happens if a type implements the trait multiple times.",check:l=>{const s=l.toLowerCase();return(s.includes("ambig")||s.includes("once")||s.includes("one")||s.includes("multiple"))&&(s.includes("implement")||s.includes("impl"))}}]},{id:"dynobj",icon:"🌀",color:"#059669",title:"Trait Objects & Dynamic Dispatch",subtitle:"dyn Trait, vtable, static vs dynamic dispatch, and object safety",resources:[{type:"read",title:"The Rust Book — Using Trait Objects",url:"https://doc.rust-lang.org/book/ch17-02-trait-objects.html"},{type:"read",title:"Rustonomicon — Trait Objects",url:"https://doc.rust-lang.org/nomicon/trait-objects.html"},{type:"video",title:"Jon Gjengset — Dispatch and Fat Pointers",url:"https://www.youtube.com/watch?v=xcygqF5LVmM"}],content:[{heading:"Static Dispatch (Monomorphization)",body:`**By default, Rust uses static dispatch.** The compiler generates a specialized copy of the function for each concrete type used.

\`\`\`rust
fn print_summary<T: Summary>(item: &T) {
    println!("{}", item.summarize());
}

print_summary(&article);  // Compiler generates print_summary::<NewsArticle>
print_summary(&tweet);    // Compiler generates print_summary::<Tweet>
\`\`\`

**Monomorphization:** the compiler “unfolds” generics into concrete functions at compile time. \`print_summary<T: Summary>\` becomes two separate functions: one for NewsArticle, one for Tweet.

**Pros of static dispatch:**
- **Zero runtime overhead** — direct function calls, no indirection
- **Inlining** — the compiler can inline the trait method body
- **Optimizations** — compiler knows the exact type, can optimize aggressively

**Cons:**
- **Code bloat** — N types = N copies of the function in the binary
- **No heterogeneous collections** — \`Vec<impl Summary>\` is not valid
- **Longer compile times** — more code to generate and optimize`},{heading:"Dynamic Dispatch with dyn Trait",body:`**\`dyn Trait\` enables runtime dispatch through a vtable (virtual method table).**

\`\`\`rust
fn print_summary(item: &dyn Summary) {
    println!("{}", item.summarize());
    // Which summarize() to call is decided at RUNTIME
}
\`\`\`

**A \`&dyn Summary\` is a fat pointer (16 bytes):**

\`\`\`
&dyn Summary (16 bytes on 64-bit):
┌────────────────────────────────┐
│  data_ptr (8 bytes)           │ → points to the actual value
├────────────────────────────────┤
│  vtable_ptr (8 bytes)         │ → points to the vtable
└────────────────────────────────┘

vtable for NewsArticle as Summary:
┌────────────────────────────────┐
│  drop_fn_ptr                  │ → destructor
├────────────────────────────────┤
│  size                         │ → size of concrete type
├────────────────────────────────┤
│  align                        │ → alignment
├────────────────────────────────┤
│  summarize_fn_ptr             │ → Summary::summarize
└────────────────────────────────┘
\`\`\`

**Heterogeneous collections become possible:**

\`\`\`rust
let items: Vec<Box<dyn Summary>> = vec![
    Box::new(NewsArticle { headline: "...".into(), author: "...".into(), content: "...".into() }),
    Box::new(Tweet { username: "ferris".into(), content: "hello".into() }),
];

for item in &items {
    println!("{}", item.summarize()); // Dynamic dispatch
}
\`\`\`

This is impossible with generics alone — \`Vec<T>\` requires all elements to be the same type.`},{heading:"Static vs Dynamic Dispatch Comparison",body:`**Decision framework:**

| Aspect | Static (\`impl Trait\` / generics) | Dynamic (\`dyn Trait\`) |
|---|---|---|
| Dispatch | Compile-time | Runtime (vtable lookup) |
| Performance | Faster (inlined, no indirection) | ~2-5ns overhead per call |
| Binary size | Larger (monomorphized copies) | Smaller (one function) |
| Heterogeneous | No (\`Vec<impl T>\` invalid) | Yes (\`Vec<Box<dyn T>>\`) |
| Compile time | Longer | Shorter |
| Usage | Known types at compile time | Plugin systems, callbacks |

**When to use dynamic dispatch:**
- Heterogeneous collections (different types in one Vec)
- Plugin systems / extensibility (types not known at compile time)
- Reducing compile times and binary size
- Callback functions and event handlers

**When to use static dispatch:**
- Hot paths where performance matters
- When you know all types at compile time
- When you want the compiler to inline and optimize

**Object safety — not all traits can be used as \`dyn Trait\`:**

A trait is object-safe (usable with \`dyn\`) if:
- No methods return \`Self\` (the concrete type is erased)
- No methods have generic type parameters
- No methods use \`Self\` as a parameter (except \`&self\`/\`&mut self\`)

\`\`\`rust
// Object-safe
trait Draw { fn draw(&self); }

// NOT object-safe (returns Self)
trait Clone { fn clone(&self) -> Self; }
\`\`\`

**The \`Clone\` trait is NOT object-safe** because \`clone()\` returns \`Self\`, and with a \`dyn Clone\`, the compiler doesn’t know the concrete type to return.`}],questions:[{q:"What is monomorphization and why does it result in zero-cost abstractions?",a:"Monomorphization is the process where the Rust compiler generates a separate, specialized copy of a generic function for each concrete type it's called with. For example, fn foo<T: Display>(x: T) called with i32 and String generates foo_i32 and foo_String at compile time. This is zero-cost because at runtime, each call is a direct function call to the specialized version — no vtable lookup, no pointer indirection. The compiler can also inline the trait method body into the generated function, enabling further optimizations. The cost is paid at compile time (longer compilation, larger binary), not at runtime.",hint:"Think about what the compiler does with generic functions before producing machine code.",check:l=>{const s=l.toLowerCase();return(s.includes("specialized")||s.includes("separate")||s.includes("copy")||s.includes("generate"))&&(s.includes("compile")||s.includes("concrete"))}},{q:"What makes a trait NOT object-safe? Give an example.",a:"A trait is not object-safe if its methods return Self (the concrete type is erased with dyn), have generic type parameters (can't be resolved through vtable), or take Self by value (size unknown). Example: the Clone trait is not object-safe because fn clone(&self) -> Self requires knowing the concrete type to construct the return value. With dyn Clone, the compiler has erased the type information and can't determine what type to return. Other examples: trait Foo { fn bar<T>(&self, x: T); } is not object-safe because generics can't go through a vtable.",hint:"Think about what information is lost when you erase the concrete type behind dyn.",check:l=>{const s=l.toLowerCase();return(s.includes("self")||s.includes("generic")||s.includes("clone"))&&(s.includes("erase")||s.includes("return")||s.includes("size")||s.includes("concrete"))}}]},{id:"stdtraits",icon:"📚",color:"#D97706",title:"Essential Standard Library Traits",subtitle:"Display, Debug, Clone, Copy, PartialEq, PartialOrd, Hash, From/Into, Deref — the traits every Rustacean must know",resources:[{type:"read",title:"The Rust Reference — Derivable Traits",url:"https://doc.rust-lang.org/book/appendix-03-derivable-traits.html"},{type:"read",title:"std::ops — Operator overloading traits",url:"https://doc.rust-lang.org/std/ops/index.html"},{type:"video",title:"No Boilerplate — Rust’s Most Important Traits",url:"https://www.youtube.com/watch?v=eEWRDY5AUFA"}],content:[{heading:"Formatting: Display & Debug",body:`**Debug** (\`{:?}\`) is for developers; **Display** (\`{}\`) is for users.

\`\`\`rust
use std::fmt;

#[derive(Debug)]  // Auto-derive Debug
struct Point { x: f64, y: f64 }

// Display must be manually implemented
impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "({}, {})", self.x, self.y)
    }
}

let p = Point { x: 1.0, y: 2.5 };
println!("{:?}", p);  // Point { x: 1.0, y: 2.5 }  (Debug)
println!("{}", p);     // (1, 2.5)                    (Display)
\`\`\`

**Debug** can be derived with \`#[derive(Debug)]\` on any struct/enum where all fields implement Debug. **Display** must always be manually implemented because there’s no single “correct” way to display a type to users.

**Display unlocks ToString:** any type implementing Display automatically gets \`to_string()\` via a blanket impl.`},{heading:"Cloning & Copying: Clone & Copy",body:`**Clone** = explicit deep copy. **Copy** = implicit bitwise copy.

| Trait | Mechanism | Call | Example Types |
|---|---|---|---|
| **Clone** | Deep copy (possibly expensive) | \`x.clone()\` | String, Vec, HashMap |
| **Copy** | Bitwise copy (cheap) | Automatic on assignment | i32, f64, bool, char |

\`\`\`rust
// Clone: explicit, can be expensive
let s1 = String::from("hello");
let s2 = s1.clone();  // Deep copy — allocates new heap memory
// Both s1 and s2 are valid

// Copy: implicit, always cheap
let n1: i32 = 42;
let n2 = n1;  // Bitwise copy — both valid, no move!
\`\`\`

**Rules:**
- Copy implies Clone (every Copy type is also Clone)
- Copy types must be fully stack-allocated (no heap data)
- If a type has a Drop impl, it cannot be Copy
- You can \`#[derive(Clone, Copy)]\` if all fields are Copy

**Why String isn’t Copy:** copying a String would mean two owners of the same heap allocation, causing a double-free. Clone explicitly allocates new heap memory for the copy.`},{heading:"Comparison: PartialEq, Eq, PartialOrd, Ord",body:`**Four comparison traits in a hierarchy:**

\`\`\`
           Eq (total equality)
           │
       PartialEq (== and !=)

           Ord (total ordering)
           │
       PartialOrd (<, <=, >, >=)
\`\`\`

**Why “Partial”?** Because some types have values that can’t be compared: \`f64::NAN != f64::NAN\`. Floats implement PartialEq but NOT Eq because NaN breaks reflexivity (x == x must be true for Eq).

\`\`\`rust
#[derive(PartialEq, Eq, PartialOrd, Ord)]
struct Score {
    points: u32,
    name: String,
}

let a = Score { points: 100, name: "Alice".into() };
let b = Score { points: 200, name: "Bob".into() };
assert!(a < b);  // Compares fields in order: points first, then name
\`\`\`

**Derive order matters:** \`#[derive(Ord)]\` compares fields in declaration order. Put the most important field first.

| Trait | Required By | Example |
|---|---|---|
| PartialEq | \`assert_eq!\`, pattern matching | Almost everything |
| Eq | HashMap keys, BTreeSet | Integer types, String |
| PartialOrd | Comparison operators | Numbers, strings |
| Ord | BTreeMap keys, \`.sort()\` | Integer types, String |`},{heading:"Conversion: From, Into, TryFrom, TryInto",body:`**From/Into are infallible conversions. TryFrom/TryInto may fail.**

\`\`\`rust
// From: construct Self from another type
impl From<i32> for MyType {
    fn from(val: i32) -> Self {
        MyType(val)
    }
}

// Into is automatically implemented when you implement From!
let x: MyType = 42.into();
let x: MyType = MyType::from(42);
\`\`\`

**Implement From, get Into for free.** The standard library has a blanket impl:
\`impl<T, U> Into<U> for T where U: From<T>\`

**TryFrom for fallible conversions:**

\`\`\`rust
use std::convert::TryFrom;

impl TryFrom<i32> for PositiveInt {
    type Error = String;
    fn try_from(value: i32) -> Result<Self, Self::Error> {
        if value > 0 {
            Ok(PositiveInt(value))
        } else {
            Err(format!("{value} is not positive"))
        }
    }
}

let p = PositiveInt::try_from(42);    // Ok(PositiveInt(42))
let p = PositiveInt::try_from(-1);    // Err("-1 is not positive")
\`\`\`

**The \`?\` operator and From:** when you use \`?\` in a function returning \`Result<T, MyError>\`, Rust calls \`MyError::from(original_error)\` automatically. This is why implementing \`From<io::Error> for MyError\` lets you use \`?\` with io operations.`},{heading:"Operator Overloading",body:"**Rust overloads operators through traits in std::ops:**\n\n| Operator | Trait | Method |\n|---|---|---|\n| `a + b` | `Add<Rhs>` | `add(self, rhs: Rhs) -> Self::Output` |\n| `a - b` | `Sub<Rhs>` | `sub(self, rhs: Rhs)` |\n| `a * b` | `Mul<Rhs>` | `mul(self, rhs: Rhs)` |\n| `a / b` | `Div<Rhs>` | `div(self, rhs: Rhs)` |\n| `a % b` | `Rem<Rhs>` | `rem(self, rhs: Rhs)` |\n| `-a` | `Neg` | `neg(self)` |\n| `a[i]` | `Index<Idx>` | `index(&self, idx: Idx)` |\n| `a[i] = v` | `IndexMut<Idx>` | `index_mut(&mut self, idx: Idx)` |\n\n**Example — implementing Add for a custom type:**\n\n```rust\nuse std::ops::Add;\n\n#[derive(Debug, Clone, Copy)]\nstruct Vec2 { x: f64, y: f64 }\n\nimpl Add for Vec2 {\n    type Output = Vec2;\n    fn add(self, rhs: Vec2) -> Vec2 {\n        Vec2 { x: self.x + rhs.x, y: self.y + rhs.y }\n    }\n}\n\nlet a = Vec2 { x: 1.0, y: 2.0 };\nlet b = Vec2 { x: 3.0, y: 4.0 };\nlet c = a + b; // Vec2 { x: 4.0, y: 6.0 }\n```\n\n**Note:** the `Rhs` generic parameter defaults to `Self` (same type). You can override it to add different types together:\n\n```rust\nimpl Add<f64> for Vec2 {\n    type Output = Vec2;\n    fn add(self, scalar: f64) -> Vec2 {\n        Vec2 { x: self.x + scalar, y: self.y + scalar }\n    }\n}\n```"}],questions:[{q:"Why does f64 implement PartialEq but NOT Eq?",a:"Because f64 includes NaN (Not a Number), and NaN violates the reflexivity requirement of Eq. Specifically, f64::NAN != f64::NAN is true in IEEE 754, meaning NaN is not equal to itself. The Eq trait requires that x == x is always true (reflexivity), which NaN breaks. PartialEq allows this exception by not requiring reflexivity. This is why you can't use f64 as a HashMap key (which requires Eq + Hash) without a wrapper.",hint:"Think about what NaN does to equality comparisons.",check:l=>{const s=l.toLowerCase();return s.includes("nan")&&(s.includes("reflex")||s.includes("equal")||s.includes("itself"))}},{q:"If you implement From<A> for B, what do you get automatically?",a:"You automatically get Into<B> for A. The standard library has a blanket implementation: impl<T, U> Into<U> for T where U: From<T>. So if you write impl From<i32> for MyType, you can use both MyType::from(42) and let x: MyType = 42.into(). The Rust convention is to implement From (not Into) because you get Into for free. You also get the ? operator integration: if your error type implements From<OtherError>, the ? operator can automatically convert OtherError into your error type.",hint:"Think about the relationship between From and Into in the standard library.",check:l=>{const s=l.toLowerCase();return s.includes("into")&&(s.includes("blanket")||s.includes("auto")||s.includes("free"))}}]}];function bp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsxs("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:["✓"," Check"]}),n.jsxs("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsxs("span",{children:["📖"," Answer"]}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function wp(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=zs.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else{const h=d,u=h.startsWith("let ")||h.startsWith("use ")||h.startsWith("fn ")||h.startsWith("pub ")||h.startsWith("impl ")||h.startsWith("struct ")||h.startsWith("enum ")||h.startsWith("//")||h.startsWith("    ")||h.startsWith("for ")||h.startsWith("if ")||h.startsWith("mod ")||h.startsWith("match ")||h.startsWith("println!")||h.startsWith("assert")||h.startsWith("trait ")||h.startsWith("type ")||h.startsWith("where")||h.startsWith("Self")||h.startsWith("#[")||h.startsWith("}")||h.startsWith("Ok(")||h.startsWith("Err(")||h.startsWith("write!")||h.trimStart().startsWith(".")||h.startsWith("let ")||h.startsWith("unimplemented")||h.startsWith("format!")||h.startsWith("Vec2"),b=h.startsWith("let ")||h.startsWith("use ")||h.startsWith("fn ")||h.startsWith("pub ")||h.startsWith("impl ")||h.startsWith("struct ")||h.startsWith("enum ")||h.startsWith("// ")||h.startsWith("///")||h.startsWith("#[")||h.startsWith("trait ");u?T.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:b?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:b?"6px 6px 0 0":0,marginTop:b?10:0},children:h},`c${m}`)):h===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(h)},`p${m}`)),m++}}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#7C3AED!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"RUST TRAITS & GENERICS"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Traits & Generics Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Trait definitions, bounds, associated types, dynamic dispatch, vtables, monomorphization, and the standard library traits every Rustacean must know.",n.jsx("br",{}),zs.length," sections ","·"," ",F," concepts ","·"," ",zs.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #DC2626, #0891B2, #059669, #D97706)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:zs.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:"›"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:"📖 Learn"}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["✏️ Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:"›"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(bp,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=yp[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Traits ","→"," Bounds ","→"," Associated Types ","→"," dyn Dispatch ","→"," Std Traits ","—"," Rust","’","s type system from contracts to polymorphism"]})]})}const vp={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Bs=[{id:"why",icon:"🧠",color:"#DC2626",title:"What Are Lifetimes & Why Rust Needs Them",subtitle:"Dangling references, the borrow checker, and how lifetimes prevent use-after-free at compile time",resources:[{type:"read",title:"The Rust Book — Validating References with Lifetimes",url:"https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"},{type:"video",title:"Let’s Get Rusty — Lifetimes in Rust",url:"https://www.youtube.com/watch?v=juIINGuZyBc"},{type:"read",title:"Rust by Example — Lifetimes",url:"https://doc.rust-lang.org/rust-by-example/scope/lifetime.html"}],content:[{heading:"The Problem: Dangling References",body:`**A dangling reference points to memory that has been freed.** In C/C++, this causes undefined behavior — crashes, security vulnerabilities, or silently wrong results. Rust prevents this at compile time using lifetimes.

\`\`\`rust
fn main() {
    let r;               // Declare r (no value yet)
    {
        let x = 5;       // x is born
        r = &x;          // r borrows x
    }                     // x is dropped here!
    println!("{r}");      // ERROR: r is a dangling reference
}
\`\`\`

**Compiler error:**
\`\`\`
error[E0597]: \`x\` does not live long enough
    r = &x;
        ^^ borrowed value does not live long enough
    }
    - \`x\` dropped here while still borrowed
    println!("{r}");
              - borrow later used here
\`\`\`

**What the compiler does:** it tracks the **lifetime** (scope) of every reference and every value. If a reference outlives the value it points to, compilation fails. No runtime checks, no garbage collector — pure compile-time analysis.`},{heading:"The Borrow Checker",body:`**The borrow checker compares the lifetime of references against the lifetime of the data they reference.**

\`\`\`rust
fn main() {
    let x = 5;            // ---+-- 'b (x lives here)
                           //    |
    let r = &x;           // -+-+-- 'a (r lives here, borrows x)
                           //  | |
    println!("{r}");       //  | |
                           // -+ |
}                          // ---+
\`\`\`

**This compiles** because \`'a\` (r’s lifetime) fits entirely within \`'b\` (x’s lifetime). The reference is always valid.

**Key principle:** a reference’s lifetime must be **shorter than or equal to** the lifetime of the data it points to. If it’s longer, you get a compile error.

**Why this matters for Rust’s safety guarantees:**
- No use-after-free (dangling references caught at compile time)
- No data races (borrow checker also enforces exclusive mutable access)
- No null pointer dereferences (Option<&T> instead of nullable pointers)
- All of this with ZERO runtime cost

**In C/C++,** these bugs cause ~70% of all security vulnerabilities (per Microsoft and Google studies). Rust eliminates this entire class of bugs.`},{heading:"Lifetimes Are Not Scopes",body:`**A common misconception: lifetimes are NOT the same as scopes.** A lifetime is the region of code where a reference is **valid and used**, which can be shorter than the lexical scope.

\`\`\`rust
fn main() {
    let mut x = 5;
    let r = &x;          // Immutable borrow starts
    println!("{r}");      // Last use of r
    // r's lifetime ENDS here (Non-Lexical Lifetimes / NLL)
    x = 10;               // Mutable access — OK! r is no longer in use
    println!("{x}");
}
\`\`\`

**Before Rust 2018 (without NLL),** this wouldn’t compile because r’s lifetime extended to the end of its scope. **Non-Lexical Lifetimes (NLL)** made the borrow checker smarter: a reference’s lifetime ends at its **last use**, not at the end of its scope.

**NLL makes Rust much more ergonomic** without sacrificing any safety. The borrow checker now understands that \`r\` is dead after \`println!("{r}")\`, so mutating \`x\` afterwards is fine.`}],questions:[{q:"Why can’t Rust just use a garbage collector instead of lifetimes?",a:"Rust could use a garbage collector (like Go or Java), but that would violate its core design goals: (1) Zero-cost abstractions — GC adds runtime overhead (pause times, memory overhead, unpredictable latency). (2) Deterministic destruction — in Rust, values are dropped exactly when they go out of scope, which is critical for resource management (file handles, network connections, locks). GC makes destruction timing unpredictable. (3) Systems programming — Rust targets use cases (OS kernels, embedded, game engines) where GC is unacceptable. Lifetimes achieve the same safety as GC but at compile time with zero runtime cost.",hint:"Think about Rust's target use cases: embedded, OS kernels, real-time systems.",check:l=>{const s=l.toLowerCase();return(s.includes("runtime")||s.includes("overhead")||s.includes("performance")||s.includes("zero-cost")||s.includes("zero cost"))&&(s.includes("compile")||s.includes("deterministic")||s.includes("systems"))}},{q:"What are Non-Lexical Lifetimes (NLL) and why were they introduced?",a:`NLL (introduced in Rust 2018 edition) makes the borrow checker end a reference's lifetime at its LAST USE rather than at the end of its lexical scope. Before NLL, a reference lived until the closing brace of its block, which caused many false rejections. For example, you couldn't do: let r = &x; println!("{r}"); x = 10; because r's lifetime extended to the end of the function. With NLL, r's lifetime ends after println, so mutating x afterwards is allowed. NLL made Rust significantly more ergonomic without any loss of safety.`,hint:"Think about when a reference's lifetime should end: at the last use or at the closing brace?",check:l=>{const s=l.toLowerCase();return(s.includes("last use")||s.includes("last usage")||s.includes("scope")||s.includes("lexical"))&&(s.includes("end")||s.includes("shorter")||s.includes("ergonomic"))}}]},{id:"annotations",icon:"🏷",color:"#7C3AED",title:"Lifetime Annotations",subtitle:"The 'a syntax — telling the compiler how reference lifetimes relate to each other",resources:[{type:"read",title:"The Rust Book — Lifetime Annotation Syntax",url:"https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-annotation-syntax"},{type:"read",title:"Rust Reference — Lifetime parameters",url:"https://doc.rust-lang.org/reference/trait-bounds.html#lifetime-bounds"}],content:[{heading:"Annotation Syntax",body:"**Lifetime annotations don’t change how long references live.** They describe **relationships** between lifetimes so the compiler can verify safety.\n\n```rust\n&i32          // a reference (lifetime inferred)\n&'a i32       // a reference with explicit lifetime 'a\n&'a mut i32   // a mutable reference with lifetime 'a\n```\n\n**Naming conventions:**\n- Start with an apostrophe: `'a`, `'b`, `'c`\n- Usually single letters, starting from `'a`\n- `'_` = anonymous lifetime (let the compiler infer it)\n- `'static` = lives for the entire program\n\n**Key insight:** `'a` is a **generic parameter**, just like `T`. When you write `fn foo<'a>(x: &'a str)`, the compiler will substitute a concrete lifetime for `'a` at each call site, just like it substitutes a concrete type for `T`."},{heading:"Lifetimes in Function Signatures",body:`**The classic example — the \`longest\` function:**

\`\`\`rust
// Won't compile: which input's lifetime does the return value have?
fn longest(x: &str, y: &str) -> &str {
    if x.len() > y.len() { x } else { y }
}
\`\`\`

**Error:** \`missing lifetime specifier\`. The compiler doesn’t know whether the return value borrows from \`x\` or \`y\`, so it can’t verify the caller uses the result safely.

**Fix — add lifetime annotations:**

\`\`\`rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
\`\`\`

**What this means:**
- Both \`x\` and \`y\` must live at least as long as \`'a\`
- The return value is guaranteed to live at least as long as \`'a\`
- \`'a\` will be the **shorter** of the two input lifetimes

**Valid usage:**

\`\`\`rust
let s1 = String::from("long");
{
    let s2 = String::from("xy");
    let result = longest(s1.as_str(), s2.as_str());
    println!("{result}"); // OK: result used while both s1 and s2 are alive
}
\`\`\`

**Invalid usage:**

\`\`\`rust
let s1 = String::from("long");
let result;
{
    let s2 = String::from("xy");
    result = longest(s1.as_str(), s2.as_str());
}
println!("{result}"); // ERROR: result might borrow from s2, which is dead
\`\`\`

**The compiler takes the conservative path:** since \`longest\` MIGHT return either input, the result’s lifetime is the shorter of the two. Even if at runtime it always returns \`s1\`, the compiler must assume the worst case.`},{heading:"When Lifetimes Aren’t Needed",body:`**Not all functions with references need lifetime annotations.**

**Case 1: Return borrows from only one input:**

\`\`\`rust
fn first<'a>(x: &'a str, y: &str) -> &'a str {
    x  // Always returns x, so only x's lifetime matters
}
\`\`\`

Here \`y\`’s lifetime is irrelevant because the return value never borrows from it.

**Case 2: Return owned data:**

\`\`\`rust
fn make_greeting(name: &str) -> String {
    format!("Hello, {name}!")
    // Returns owned String, no lifetime needed
}
\`\`\`

Owned types (\`String\`, \`Vec\`, etc.) don’t have lifetimes because they own their data. The caller takes ownership and can keep it as long as they want.

**Case 3: References to local data (compile error):**

\`\`\`rust
fn dangling<'a>() -> &'a str {
    let s = String::from("hello");
    &s  // ERROR: returning reference to local variable
}
\`\`\`

No lifetime annotation can fix this — the data is dropped when the function returns. The solution is to return an owned type (\`String\`) instead.`}],questions:[{q:"In fn longest<'a>(x: &'a str, y: &'a str) -> &'a str, what concrete lifetime does 'a represent?",a:"The lifetime 'a represents the SHORTER of the two input lifetimes. When the compiler sees longest(s1, s2) where s1 lives for 10 lines and s2 lives for 5 lines, 'a becomes 5 lines. This ensures the return value is guaranteed to be valid for at least 'a — meaning it's safe to use within the overlap where BOTH inputs are alive. The compiler takes the conservative approach: since the function might return either input, the result can only be used within the shorter lifetime.",hint:"Think about the intersection of the two input lifetimes.",check:l=>{const s=l.toLowerCase();return(s.includes("short")||s.includes("small")||s.includes("overlap")||s.includes("intersect"))&&(s.includes("two")||s.includes("both")||s.includes("input"))}},{q:"Why can’t you return a reference to a local variable, even with explicit lifetime annotations?",a:"Because the local variable is dropped when the function returns, and no lifetime annotation can extend a value's actual lifetime. Lifetime annotations only describe relationships — they don't change when values are created or destroyed. A reference to a local variable would become a dangling reference the moment the function returns, regardless of what lifetime you annotate. The fix is to return an owned value (like String instead of &str), transferring ownership to the caller.",hint:"Lifetime annotations describe relationships, not control how long values live.",check:l=>{const s=l.toLowerCase();return(s.includes("drop")||s.includes("destroy")||s.includes("freed")||s.includes("dangling"))&&(s.includes("own")||s.includes("string")||s.includes("move"))}}]},{id:"elision",icon:"✨",color:"#059669",title:"Lifetime Elision Rules",subtitle:"The three rules that let you omit lifetime annotations in most function signatures",resources:[{type:"read",title:"The Rust Book — Lifetime Elision",url:"https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-elision"},{type:"read",title:"Rust Reference — Lifetime elision",url:"https://doc.rust-lang.org/reference/lifetime-elision.html"}],content:[{heading:"The Three Elision Rules",body:`**The compiler applies three rules to figure out lifetimes automatically.** If all output lifetimes are resolved after applying the rules, no annotations are needed. If not, you must annotate manually.

**Rule 1: Each reference parameter gets its own lifetime.**

\`\`\`rust
fn foo(x: &i32)              // becomes fn foo<'a>(x: &'a i32)
fn bar(x: &i32, y: &i32)    // becomes fn bar<'a, 'b>(x: &'a i32, y: &'b i32)
\`\`\`

**Rule 2: If there’s exactly ONE input lifetime, it’s assigned to all outputs.**

\`\`\`rust
fn foo(x: &i32) -> &i32     // becomes fn foo<'a>(x: &'a i32) -> &'a i32
fn first_word(s: &str) -> &str  // becomes fn first_word<'a>(s: &'a str) -> &'a str
\`\`\`

**Rule 3: If one of the inputs is \`&self\` or \`&mut self\`, that lifetime is assigned to all outputs.**

\`\`\`rust
impl MyStruct {
    fn method(&self, x: &str) -> &str {
        // Return type gets self's lifetime, not x's
        self.field
    }
}
// becomes: fn method<'a, 'b>(&'a self, x: &'b str) -> &'a str
\`\`\`

**If the rules don’t resolve all output lifetimes, you must annotate explicitly.** This is why \`longest(x: &str, y: &str) -> &str\` fails: Rule 1 gives two lifetimes, Rule 2 doesn’t apply (two inputs), Rule 3 doesn’t apply (not a method). Ambiguous!`},{heading:"Elision Rules Applied: Examples",body:`**Example 1: first_word — elision works**

\`\`\`rust
// You write:
fn first_word(s: &str) -> &str { ... }

// Compiler applies:
// Rule 1: fn first_word<'a>(s: &'a str) -> &str
// Rule 2: fn first_word<'a>(s: &'a str) -> &'a str
// All outputs resolved! No annotation needed.
\`\`\`

**Example 2: longest — elision fails**

\`\`\`rust
// You write:
fn longest(x: &str, y: &str) -> &str { ... }

// Compiler applies:
// Rule 1: fn longest<'a, 'b>(x: &'a str, y: &'b str) -> &str
// Rule 2: Doesn't apply (two input lifetimes)
// Rule 3: Doesn't apply (not a method)
// Output lifetime unresolved! Compiler error.
\`\`\`

**Example 3: method on struct — elision works**

\`\`\`rust
impl<'a> ImportantExcerpt<'a> {
    // You write:
    fn announce(&self, msg: &str) -> &str { self.part }

    // Compiler applies:
    // Rule 1: Two input lifetimes (&self and msg)
    // Rule 3: Return gets self's lifetime
    // Resolved! No annotation needed.
}
\`\`\`

**The vast majority of Rust code doesn’t need explicit lifetime annotations** because the elision rules handle common patterns automatically. You only annotate when the compiler can’t figure out the relationship.`}],questions:[{q:"Apply the three elision rules to this function signature: fn foo(x: &str, y: &str) -> &str. Does it compile?",a:"No, it does not compile. Applying the rules: Rule 1 gives each parameter its own lifetime: fn foo<'a, 'b>(x: &'a str, y: &'b str) -> &str. Rule 2 doesn't apply because there are TWO input lifetimes, not one. Rule 3 doesn't apply because this is not a method (no &self). The output lifetime is still unresolved, so the compiler requires explicit annotations. You need to write: fn foo<'a>(x: &'a str, y: &'a str) -> &'a str (or only tie the output to one input if appropriate).",hint:"Apply each rule in order. Does rule 2 or 3 apply with two input lifetimes?",check:l=>{const s=l.toLowerCase();return(s.includes("no")||s.includes("not")||s.includes("fail")||s.includes("error"))&&(s.includes("two")||s.includes("2")||s.includes("rule"))}}]},{id:"structs",icon:"🏗",color:"#0891B2",title:"Lifetimes in Structs",subtitle:"Storing references in structs and ensuring they don’t outlive the borrowed data",resources:[{type:"read",title:"The Rust Book — Lifetime Annotations in Struct Definitions",url:"https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-annotations-in-struct-definitions"},{type:"read",title:"Rust by Example — Structs with lifetimes",url:"https://doc.rust-lang.org/rust-by-example/scope/lifetime/struct.html"}],content:[{heading:"Structs Holding References",body:`**If a struct holds a reference, it needs a lifetime parameter.** This tells the compiler that the struct cannot outlive the data it borrows.

\`\`\`rust
struct ImportantExcerpt<'a> {
    part: &'a str,
}

fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().unwrap();

    let excerpt = ImportantExcerpt {
        part: first_sentence,
    };

    println!("{}", excerpt.part);
}
// novel must outlive excerpt!
\`\`\`

**The \`'a\` annotation means:** “this struct cannot live longer than the reference in its \`part\` field.” If \`novel\` is dropped before \`excerpt\`, the compiler catches it.

**Invalid example:**

\`\`\`rust
let excerpt;
{
    let novel = String::from("Call me Ishmael.");
    excerpt = ImportantExcerpt { part: &novel };
}
// ERROR: novel dropped, but excerpt still references it
println!("{}", excerpt.part);
\`\`\``},{heading:"Multiple Lifetime Parameters in Structs",body:`**Structs can have multiple lifetime parameters when they borrow from different sources:**

\`\`\`rust
struct Pair<'a, 'b> {
    first: &'a str,
    second: &'b str,
}

fn main() {
    let s1 = String::from("hello");
    let pair;
    {
        let s2 = String::from("world");
        pair = Pair { first: &s1, second: &s2 };
        println!("{} {}", pair.first, pair.second); // OK
    }
    // pair.second would dangle here, so pair can't be used
}
\`\`\`

**When to use multiple lifetimes:**
- When fields borrow from different sources with different lifetimes
- When you want to express that one field can outlive another
- When methods return references tied to one specific field

**Most structs use a single lifetime** because all borrowed fields typically come from the same source. Multiple lifetimes are rare and usually indicate a complex borrowing pattern.

**Methods on structs with lifetimes:**

\`\`\`rust
impl<'a> ImportantExcerpt<'a> {
    fn level(&self) -> i32 {
        3  // No reference returned, no lifetime needed
    }

    fn announce(&self, msg: &str) -> &str {
        println!("Attention: {msg}");
        self.part  // Returns field with lifetime 'a
        // Elision Rule 3: return gets &self's lifetime
    }
}
\`\`\``}],questions:[{q:"Why does struct Excerpt<'a> { part: &'a str } need a lifetime parameter? What would go wrong without it?",a:"Without the lifetime parameter, the compiler can't verify that the Excerpt struct doesn't outlive the string it borrows. Someone could create an Excerpt, drop the source string, and then access excerpt.part — a dangling reference. The 'a parameter creates a compile-time contract: 'this struct lives at most as long as the data behind part'. If you try to use the struct after its referenced data is dropped, the compiler rejects it. Without this annotation, Rust couldn't provide its memory safety guarantees for structs containing references.",hint:"Think about what happens if the borrowed data is dropped while the struct is still alive.",check:l=>{const s=l.toLowerCase();return(s.includes("outlive")||s.includes("dangle")||s.includes("drop")||s.includes("freed"))&&(s.includes("compiler")||s.includes("safety")||s.includes("verify"))}}]},{id:"bounds",icon:"🔍",color:"#D97706",title:"Lifetime Bounds & Generic Lifetimes",subtitle:"Combining lifetimes with generics, lifetime bounds on trait objects, and subtyping",resources:[{type:"read",title:"The Rust Book — Generic Type Parameters, Trait Bounds, and Lifetimes Together",url:"https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#generic-type-parameters-trait-bounds-and-lifetimes-together"},{type:"read",title:"Rust Reference — Subtyping and Variance",url:"https://doc.rust-lang.org/reference/subtyping.html"}],content:[{heading:"Combining Lifetimes with Generics",body:`**Lifetimes and generics can be used together in function signatures:**

\`\`\`rust
use std::fmt::Display;

fn longest_with_announcement<'a, T>(
    x: &'a str,
    y: &'a str,
    ann: T,
) -> &'a str
where
    T: Display,
{
    println!("Announcement: {ann}");
    if x.len() > y.len() { x } else { y }
}
\`\`\`

**Ordering convention:** lifetime parameters come before type parameters in the angle brackets: \`<'a, 'b, T, U>\`.

**Lifetime bounds on generic types:**

\`\`\`rust
// T must live at least as long as 'a
fn print_ref<'a, T: 'a + Display>(t: &'a T) {
    println!("{t}");
}

// T: 'a means "T contains no references shorter than 'a"
// T: 'static means "T contains no non-static references"
struct Ref<'a, T: 'a> {
    value: &'a T,
}
\`\`\`

**\`T: 'a\` explained:** this bound says “any references inside T must live at least as long as \`'a\`.” For example, if T is \`&'b str\`, then \`'b\` must be at least as long as \`'a\`. If T is \`i32\` (no references), the bound is always satisfied.`},{heading:"Lifetime Bounds on Trait Objects",body:"**Trait objects (`dyn Trait`) have implicit lifetime bounds.**\n\n```rust\n// These are equivalent:\nBox<dyn Display>            // really Box<dyn Display + 'static>\nBox<dyn Display + 'static>  // explicit: must contain no non-static references\n\n// For references:\n&'a dyn Display             // really &'a (dyn Display + 'a)\n```\n\n**The default rules:**\n- `Box<dyn Trait>` defaults to `'static` (the trait object must own all its data or have `'static` references)\n- `&'a dyn Trait` defaults to `'a` (the trait object can borrow data with lifetime `'a`)\n\n**Why this matters:**\n\n```rust\nfn make_display() -> Box<dyn Display> {\n    Box::new(42)  // OK: i32 has no references, satisfies 'static\n}\n\nfn make_display_ref<'a>(s: &'a str) -> Box<dyn Display + 'a> {\n    Box::new(s)  // Need + 'a because s has lifetime 'a, not 'static\n}\n```\n\nIf you try to put a borrowed reference into `Box<dyn Display>` (without `+ 'a`), the compiler will complain because the default `'static` bound is violated."},{heading:"Lifetime Subtyping",body:"**A longer lifetime can be used where a shorter one is expected.** `'a: 'b` means “`'a` outlives `'b`.”\n\n```rust\nfn longest<'a, 'b>(x: &'a str, y: &'b str) -> &'a str\nwhere\n    'b: 'a,  // 'b outlives 'a (so 'a is the shorter)\n{\n    if x.len() > y.len() { x } else { y }\n}\n```\n\n**Variance — how lifetimes interact with types:**\n\n| Variance | Meaning | Example |\n|---|---|---|\n| **Covariant** | Longer lifetime can substitute for shorter | `&'long T` can be used as `&'short T` |\n| **Contravariant** | Shorter can substitute for longer | Function params (rare in practice) |\n| **Invariant** | Exact match required | `&mut T` is invariant in T |\n\n**Practical implication:** if a function expects `&'short str`, you can pass `&'long str`. A `'static` reference (longest possible lifetime) can be used anywhere a shorter lifetime is expected. This is intuitive: if data lives forever, it’s certainly available for any shorter duration."}],questions:[{q:"What does T: 'a mean as a bound? When is it needed?",a:"T: 'a means 'any references contained within T must live at least as long as lifetime 'a'. For example, if T is &'b str, then 'b must be >= 'a. If T is i32 (no references), the bound is always satisfied. This bound is needed when you store a reference to T with lifetime 'a, like in struct Ref<'a, T: 'a> { value: &'a T }. Without the bound, T might contain a reference that dies before 'a, creating a dangling reference through the outer &'a.",hint:"Think about what happens if T contains a reference shorter than 'a.",check:l=>{const s=l.toLowerCase();return(s.includes("reference")||s.includes("borrow"))&&(s.includes("inside")||s.includes("contain")||s.includes("within")||s.includes("at least"))}}]},{id:"static",icon:"♾",color:"#2563EB",title:"The 'static Lifetime",subtitle:"What 'static means, when to use it, and common misconceptions",resources:[{type:"read",title:"The Rust Book — The Static Lifetime",url:"https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#the-static-lifetime"},{type:"read",title:"Common Rust Lifetime Misconceptions",url:"https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md"}],content:[{heading:"What 'static Means",body:"**`'static` is the longest possible lifetime — the entire duration of the program.**\n\n**Two contexts where `'static` appears:**\n\n**1. `&'static T` — a reference that lives forever:**\n\n```rust\n// String literals are &'static str\nlet s: &'static str = \"hello world\";\n// The text is baked into the binary, available for the entire program\n\n// Leaked memory is also 'static\nlet leaked: &'static str = Box::leak(Box::new(String::from(\"leaked\")));\n```\n\n**2. `T: 'static` as a bound — T owns all its data (no non-static references):**\n\n```rust\nfn spawn_thread<T: Send + 'static>(val: T) {\n    std::thread::spawn(move || {\n        println!(\"{:?}\", val);\n    });\n}\n```\n\n**Common misconception:** `T: 'static` does NOT mean T must be a `&'static` reference. It means T either:\n- Contains no references at all (like `String`, `Vec<i32>`, `i32`)\n- Contains only `'static` references (like `&'static str`)\n\n`String` satisfies `T: 'static` because it owns its data (no borrowed references). This is the most common case."},{heading:"When to Use 'static (and When Not To)",body:`**Appropriate uses of 'static:**

1. **Thread spawning** — data sent to threads must be \`'static\` because the thread might outlive the caller:

\`\`\`rust
let name = String::from("ferris");
std::thread::spawn(move || {
    println!("Hello, {name}"); // name is moved (owned), satisfies 'static
});
\`\`\`

2. **Global constants:**

\`\`\`rust
static GREETING: &str = "Hello, world!";
const MAX_SIZE: usize = 1024;
\`\`\`

3. **Type-erased trait objects stored long-term:**

\`\`\`rust
let handlers: Vec<Box<dyn Fn() + 'static>> = vec![
    Box::new(|| println!("handler 1")),
    Box::new(|| println!("handler 2")),
];
\`\`\`

**Anti-pattern — using 'static to silence the borrow checker:**

\`\`\`rust
// BAD: don't add 'static just to make it compile
fn process(data: &'static str) { ... }
// This forces callers to only pass string literals or leaked memory

// GOOD: use a generic lifetime instead
fn process<'a>(data: &'a str) { ... }
// This accepts any &str with any lifetime
\`\`\`

**If the compiler suggests adding \`'static\`, the real problem is usually a dangling reference.** Fix the ownership issue instead of slapping on \`'static\`.`}],questions:[{q:"Does String satisfy the bound T: 'static? Why or why not?",a:"Yes, String satisfies T: 'static. The bound T: 'static means 'T contains no non-static references', NOT 'T must be a &'static reference'. String owns its heap data outright — it contains no borrowed references at all. Since there are no references to check, the 'static bound is trivially satisfied. This is why you can pass a String to std::thread::spawn (which requires T: Send + 'static). Other types that satisfy T: 'static include i32, Vec<String>, HashMap<String, i32>, and any type that only contains owned data.",hint:"Think about what T: 'static actually constrains: the references INSIDE T.",check:l=>{const s=l.toLowerCase();return(s.includes("yes")||s.includes("satisf")||s.includes("does"))&&(s.includes("own")||s.includes("no reference")||s.includes("no borrow"))}}]},{id:"errors",icon:"🚨",color:"#C2410C",title:"Common Lifetime Errors & Fixes",subtitle:"The errors you’ll actually hit, explained with before/after solutions",resources:[{type:"read",title:"Rust Compiler Error Index — E0106, E0597, E0515",url:"https://doc.rust-lang.org/error_codes/E0106.html"},{type:"read",title:"pretzelhammer — Common Rust Lifetime Misconceptions",url:"https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md"},{type:"video",title:"Tim McNamara — Rust Lifetimes Finally Explained",url:"https://www.youtube.com/watch?v=gRAVZv7V91Q"}],content:[{heading:"E0106: Missing Lifetime Specifier",body:`**You’ll see this when a function returns a reference but the compiler can’t determine its lifetime.**

**Before (broken):**

\`\`\`rust
fn first_or_second(a: &str, b: &str) -> &str {
    if a.len() > 0 { a } else { b }
}
\`\`\`

**After (fixed):**

\`\`\`rust
fn first_or_second<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > 0 { a } else { b }
}
\`\`\`

**Decision tree when you see E0106:**
1. Does the return borrow from only ONE parameter? → Annotate only that parameter.
2. Does it borrow from multiple parameters? → Give them the same lifetime.
3. Does it borrow from local data? → Return an owned type instead.`},{heading:"E0597: Value Does Not Live Long Enough",body:`**You’ll see this when a reference outlives the data it points to.**

**Before (broken):**

\`\`\`rust
fn main() {
    let result;
    {
        let s = String::from("hello");
        result = &s;
    }
    println!("{result}");
}
\`\`\`

**Fix 1 — extend the data’s scope:**

\`\`\`rust
fn main() {
    let s = String::from("hello"); // Move s to outer scope
    let result = &s;
    println!("{result}");
}
\`\`\`

**Fix 2 — clone/own the data:**

\`\`\`rust
fn main() {
    let result;
    {
        let s = String::from("hello");
        result = s.clone(); // or just: result = s; (move)
    }
    println!("{result}"); // result owns the data
}
\`\`\`

**Pattern:** if you find yourself fighting the borrow checker, consider whether you should own the data instead of borrowing it. Cloning is often the simplest fix, and it’s rarely a performance bottleneck.`},{heading:"E0515: Cannot Return Reference to Local Variable",body:`**You’ll see this when trying to return a reference to data created inside the function.**

**Before (broken):**

\`\`\`rust
fn make_greeting(name: &str) -> &str {
    let greeting = format!("Hello, {name}!");
    &greeting  // ERROR: greeting dropped at end of function
}
\`\`\`

**After (fixed) — return owned String:**

\`\`\`rust
fn make_greeting(name: &str) -> String {
    format!("Hello, {name}!")
}
\`\`\`

**After (alternative) — use Cow for zero-copy when possible:**

\`\`\`rust
use std::borrow::Cow;

fn make_greeting(name: &str) -> Cow<'_, str> {
    if name.is_empty() {
        Cow::Borrowed("Hello, stranger!")  // No allocation
    } else {
        Cow::Owned(format!("Hello, {name}!"))  // Allocation
    }
}
\`\`\`

**Key insight:** functions cannot return references to data they create. The data is dropped when the function returns, leaving the reference dangling. You must either return an owned type or ensure the data lives in the caller’s scope.`},{heading:"Struct Lifetime Gotcha: Holding Mutable & Immutable Refs",body:`**A common trap: a struct that borrows mutably prevents other borrows of the same data.**

**Before (broken):**

\`\`\`rust
struct Parser<'a> {
    input: &'a str,
    pos: usize,
}

fn parse_two_things(input: &str) {
    let p1 = Parser { input, pos: 0 };
    let p2 = Parser { input, pos: 5 };
    // OK: both are immutable borrows

    // But if Parser held &mut:
    // struct MutParser<'a> { input: &'a mut str, pos: usize }
    // You can't create two MutParsers from the same data!
}
\`\`\`

**Fix — use indices instead of references:**

\`\`\`rust
struct Parser {
    input: String,  // Own the data
    pos: usize,
}
// No lifetime needed, no borrowing conflicts
\`\`\`

**General advice:** if you find yourself with complex lifetime annotations in structs, consider whether the struct should **own** its data instead of borrowing it. Owned data is simpler and avoids lifetime gymnastics. Clone or Rc can help when sharing is needed.`}],questions:[{q:'You have fn foo() -> &str { let s = String::from("hello"); &s }. Why doesn’t it compile and how do you fix it?',a:`It doesn't compile (E0515) because s is a local variable created on the heap. When foo() returns, s is dropped (its memory is freed), so &s would be a dangling reference. No lifetime annotation can fix this — the data simply doesn't exist after the function returns. Fix: return an owned String instead of &str: fn foo() -> String { String::from("hello") }. The caller takes ownership and the data lives as long as the caller needs it.`,hint:"What happens to local variables when a function returns?",check:l=>{const s=l.toLowerCase();return(s.includes("drop")||s.includes("freed")||s.includes("dangle")||s.includes("local"))&&(s.includes("string")||s.includes("own")||s.includes("return"))}},{q:"When should you clone data instead of fighting the borrow checker?",a:"Clone when: (1) the data is small (integers, short strings, small structs), (2) the borrowing relationships are complex and lifetime annotations make the code unreadable, (3) the clone is not in a hot loop (performance won't matter), (4) you need multiple owners but Rc/Arc is overkill. Don't clone when: (1) the data is large (huge Vec, big buffers), (2) it's called millions of times in a tight loop, (3) a simple scope restructure would fix the borrow issue. Rule of thumb: write correct code with clones first, then optimize by removing clones only where profiling shows they matter.",hint:"Think about readability vs performance trade-offs.",check:l=>{const s=l.toLowerCase();return s.includes("small")||s.includes("simple")||s.includes("readable")||s.includes("profile")||s.includes("performance")}}]},{id:"hrtb",icon:"🔬",color:"#581C87",title:"Higher-Ranked Trait Bounds (for<'a>)",subtitle:"Advanced: when a function must work for ALL possible lifetimes, not just one",resources:[{type:"read",title:"Rust Reference — Higher-ranked trait bounds",url:"https://doc.rust-lang.org/reference/trait-bounds.html#higher-ranked-trait-bounds"},{type:"read",title:"Rustonomicon — Higher-Rank Trait Bounds",url:"https://doc.rust-lang.org/nomicon/hrtb.html"},{type:"video",title:"Jon Gjengset — Lifetime annotations in Rust",url:"https://www.youtube.com/watch?v=rAl-9HwD858"}],content:[{heading:"What Are HRTBs?",body:`**A higher-ranked trait bound says “this must work for ANY lifetime, not just a specific one.”**

**The syntax: \`for<'a> Fn(&'a str) -> &'a str\`**

**The problem HRTBs solve:**

\`\`\`rust
// This function takes a closure that borrows a &str and returns a &str
fn apply(f: ???, s: &str) -> &str {
    f(s)
}
\`\`\`

**Attempt 1 — specific lifetime (too restrictive):**

\`\`\`rust
fn apply<'a>(f: impl Fn(&'a str) -> &'a str, s: &'a str) -> &'a str {
    f(s)
}
// This works, but ties 'a to one specific lifetime at each call site
\`\`\`

**Attempt 2 — HRTB (correct):**

\`\`\`rust
fn apply(f: impl for<'a> Fn(&'a str) -> &'a str, s: &str) -> &str {
    f(s)
}
// f must work for ANY lifetime 'a, not just one specific one
\`\`\`

**Why the difference matters:** with a specific \`'a\`, the closure is locked to one lifetime. With \`for<'a>\`, the closure must be polymorphic over lifetimes — it works for any input lifetime.`},{heading:"Where You See HRTBs",body:`**HRTBs appear implicitly more often than you’d expect.** The compiler inserts them automatically in many cases.

**1. Closure trait bounds (implicit HRTB):**

\`\`\`rust
fn apply(f: impl Fn(&str) -> &str) { ... }
// The compiler automatically interprets this as:
fn apply(f: impl for<'a> Fn(&'a str) -> &'a str) { ... }
\`\`\`

When you write a closure bound with references, the compiler inserts \`for<'a>\` automatically. You rarely need to write it explicitly.

**2. Iterator adaptors:**

\`\`\`rust
let v = vec![1, 2, 3];
let mapped: Vec<&i32> = v.iter()
    .filter(|&&x| x > 1)
    .collect();
// filter's closure uses for<'a> Fn(&'a &i32) -> bool internally
\`\`\`

**3. When you DO need explicit HRTBs:**

\`\`\`rust
// Storing a closure in a struct that must work for any lifetime
struct Processor {
    transform: Box<dyn for<'a> Fn(&'a str) -> String>,
}
\`\`\`

Without \`for<'a>\`, the closure in \`Processor\` would be locked to one lifetime, making the struct inflexible.

**In practice:** you rarely write \`for<'a>\` yourself. The compiler inserts it for closure bounds automatically. You mainly encounter explicit HRTBs in advanced library code, particularly around closures stored in structs or returned from functions.`}],questions:[{q:"What does for<'a> Fn(&'a str) -> &'a str mean, and how is it different from just Fn(&str) -> &str?",a:"for<'a> Fn(&'a str) -> &'a str is a higher-ranked trait bound meaning 'this closure must work for ANY possible lifetime 'a'. It's universally quantified over lifetimes. In practice, Fn(&str) -> &str and for<'a> Fn(&'a str) -> &'a str are equivalent — the compiler automatically desugars the former into the latter. The explicit for<'a> syntax is needed only in advanced cases like storing closures in structs (Box<dyn for<'a> Fn(&'a str)>) or when the implicit desugaring doesn't do what you want. Most Rust developers rarely write for<'a> directly.",hint:"Think about whether the closure must work for one specific lifetime or all possible lifetimes.",check:l=>{const s=l.toLowerCase();return(s.includes("any")||s.includes("all")||s.includes("universal")||s.includes("every"))&&(s.includes("lifetime")||s.includes("'a"))}}]}];function xp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsxs("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:["✓"," Check"]}),n.jsxs("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsxs("span",{children:["📖"," Answer"]}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function kp(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=Bs.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else{const h=d,u=h.startsWith("let ")||h.startsWith("use ")||h.startsWith("fn ")||h.startsWith("pub ")||h.startsWith("impl ")||h.startsWith("struct ")||h.startsWith("enum ")||h.startsWith("//")||h.startsWith("    ")||h.startsWith("for ")||h.startsWith("if ")||h.startsWith("mod ")||h.startsWith("match ")||h.startsWith("println!")||h.startsWith("assert")||h.startsWith("trait ")||h.startsWith("type ")||h.startsWith("where")||h.startsWith("Self")||h.startsWith("#[")||h.startsWith("}")||h.startsWith("Ok(")||h.startsWith("Err(")||h.startsWith("error")||h.startsWith("static ")||h.startsWith("const ")||h.startsWith("Box::")||h.startsWith("std::")||h.startsWith("    ")||h.trimStart().startsWith(".")||h.startsWith("result")||h.startsWith("-")&&h.includes("`")===!1&&h.includes("dropped")||h.startsWith("    -")||h.startsWith("   |")||h.startsWith("  |")||h.startsWith(" -->"),b=h.startsWith("let ")||h.startsWith("use ")||h.startsWith("fn ")||h.startsWith("pub ")||h.startsWith("impl ")||h.startsWith("struct ")||h.startsWith("enum ")||h.startsWith("// ")||h.startsWith("///")||h.startsWith("#[")||h.startsWith("trait ")||h.startsWith("error")||h.startsWith("static ")||h.startsWith("const ");u?T.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:b?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:b?"6px 6px 0 0":0,marginTop:b?10:0},children:h},`c${m}`)):h===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(h)},`p${m}`)),m++}}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#DC2626!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"RUST LIFETIMES"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Lifetimes Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["The hardest concept in Rust, demystified. Dangling references, the borrow checker, ","’","a annotations, elision rules, ","’","static, and common errors with concrete before/after fixes.",n.jsx("br",{}),Bs.length," sections ","·"," ",F," concepts ","·"," ",Bs.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #DC2626, #7C3AED, #059669, #0891B2, #D97706, #2563EB, #581C87, #C2410C)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Bs.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:"›"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:"📖 Learn"}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["✏️ Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:"›"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(xp,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=vp[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Dangling refs ","→"," Borrow checker ","→"," ","’","a annotations ","→"," Elision rules ","→"," Struct lifetimes ","→"," ","’","static ","→"," Common errors ","→"," HRTBs ","—"," conquer Rust","’","s hardest topic"]})]})}const Sp={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Is=[{id:"box",icon:"📦",color:"#2563EB",title:"Box<T> — Heap Allocation",subtitle:"The simplest smart pointer: heap allocation, recursive types, and indirection",resources:[{type:"read",title:"The Rust Book — Using Box<T> to Point to Data on the Heap",url:"https://doc.rust-lang.org/book/ch15-01-box.html"},{type:"read",title:"std::boxed::Box — API documentation",url:"https://doc.rust-lang.org/std/boxed/struct.Box.html"},{type:"video",title:"Let’s Get Rusty — Smart Pointers in Rust",url:"https://www.youtube.com/watch?v=m76sRj2VgGo"}],content:[{heading:"What Is Box<T>?",body:`**Box<T> allocates data on the heap and stores a pointer on the stack.** It’s the simplest smart pointer: no overhead except heap indirection.

\`\`\`rust
let b = Box::new(5);
println!("b = {b}"); // b = 5 (auto-dereferenced)
\`\`\`

**Memory layout:**

\`\`\`
Stack:                    Heap:
┌──────────────┐       ┌───────┐
│ b: *ptr ─────┤───────▶│  5    │
│ (8 bytes)    │       │(4 bytes)│
└──────────────┘       └───────┘
\`\`\`

**Box<T> on the stack is always 8 bytes** (a single pointer) on 64-bit systems, regardless of the size of T.

**Three primary use cases:**

| Use Case | Why Box? |
|---|---|
| **Recursive types** | Break infinite size at compile time |
| **Large data transfer** | Move ownership without copying entire value on the stack |
| **Trait objects** | \`Box<dyn Trait>\` for dynamic dispatch |

**Box owns its data.** When the Box goes out of scope, both the pointer (stack) and the data (heap) are freed automatically via the Drop trait.`},{heading:"Recursive Types with Box",body:`**Without Box, recursive types have infinite size:**

\`\`\`rust
// ERROR: recursive type has infinite size
enum List {
    Cons(i32, List),  // List contains a List, which contains a List...
    Nil,
}
\`\`\`

The compiler can’t determine the size of \`List\` because it’s infinitely nested.

**Fix with Box — known, fixed size:**

\`\`\`rust
enum List {
    Cons(i32, Box<List>),  // Box is always 8 bytes (pointer)
    Nil,
}

use List::{Cons, Nil};

let list = Cons(1, Box::new(Cons(2, Box::new(Cons(3, Box::new(Nil))))));
\`\`\`

**Memory layout of the cons list:**

\`\`\`
Stack:
Cons(1, ptr) ───▶ Heap: Cons(2, ptr) ───▶ Heap: Cons(3, ptr) ───▶ Heap: Nil
[i32 + 8 bytes]       [i32 + 8 bytes]         [i32 + 8 bytes]         [0 bytes]
\`\`\`

**Other recursive types that need Box:**
- Tree nodes: \`struct Node { value: i32, left: Option<Box<Node>>, right: Option<Box<Node>> }\`
- Linked lists (though Vec is usually better in practice)
- Any self-referential data structure`},{heading:"Box vs Stack Allocation",body:`**When to use Box vs keeping data on the stack:**

| Scenario | Stack | Box (Heap) |
|---|---|---|
| Small data (<= ~100 bytes) | Preferred (faster) | Unnecessary overhead |
| Large data (>= ~1KB) | Risk of stack overflow | Preferred |
| Size known at compile time | Works | Works |
| Size unknown at compile time | Not possible | Required |
| Recursive types | Not possible | Required |
| Ownership transfer | Copies data | Moves pointer (cheap) |
| Trait objects | Not possible | \`Box<dyn Trait>\` |

**Performance note:** heap allocation has overhead (~50-100ns per allocation via the system allocator). For hot loops allocating many small objects, consider arena allocators or stack-based alternatives.

**Boxing large values:**

\`\`\`rust
// Bad: 1MB array on the stack (may overflow!)
let huge = [0u8; 1_000_000];

// Good: 1MB array on the heap
let huge = Box::new([0u8; 1_000_000]);

// Even better: Vec handles heap allocation natively
let huge = vec![0u8; 1_000_000];
\`\`\``}],questions:[{q:"Why does enum List { Cons(i32, List), Nil } fail to compile, and how does Box fix it?",a:"The compiler needs to know the size of every type at compile time. Without Box, List contains a List which contains a List — infinitely recursive, so the size is infinite. Box<List> has a fixed, known size (8 bytes for the pointer on 64-bit) regardless of how deeply the list nests. Each Cons node stores its i32 (4 bytes) and a Box pointer (8 bytes) on the stack, with the next node allocated separately on the heap. The indirection through a pointer breaks the infinite size recursion.",hint:"How does the compiler determine the size of a type? What happens with infinite nesting?",check:l=>{const s=l.toLowerCase();return(s.includes("size")||s.includes("infinite"))&&(s.includes("pointer")||s.includes("8 byte")||s.includes("fixed")||s.includes("indirection"))}},{q:"What is the stack size of a Box<[u8; 1000000]>?",a:"8 bytes on a 64-bit system. A Box<T> is always just a pointer (8 bytes) on the stack, regardless of the size of T. The 1,000,000 bytes of array data live on the heap. This is precisely why Box is useful for large data: instead of putting 1MB on the stack (risking stack overflow), you put 8 bytes on the stack pointing to 1MB on the heap.",hint:"Box<T> on the stack is just a pointer. How big is a pointer?",check:l=>{const s=l.toLowerCase();return s.includes("8")&&(s.includes("pointer")||s.includes("byte")||s.includes("heap"))}}]},{id:"deref",icon:"🔍",color:"#7C3AED",title:"Deref & DerefMut Traits",subtitle:"How smart pointers behave like references through Deref coercion",resources:[{type:"read",title:"The Rust Book — Treating Smart Pointers Like Regular References",url:"https://doc.rust-lang.org/book/ch15-02-deref.html"},{type:"read",title:"std::ops::Deref — API documentation",url:"https://doc.rust-lang.org/std/ops/trait.Deref.html"}],content:[{heading:"The Deref Trait",body:"**Deref lets you use `*` on a type and have it behave like a reference.** Smart pointers implement Deref to be transparent.\n\n```rust\nuse std::ops::Deref;\n\nstruct MyBox<T>(T);\n\nimpl<T> MyBox<T> {\n    fn new(x: T) -> MyBox<T> { MyBox(x) }\n}\n\nimpl<T> Deref for MyBox<T> {\n    type Target = T;\n    fn deref(&self) -> &T { &self.0 }\n}\n\nlet x = MyBox::new(5);\nassert_eq!(5, *x);  // *x calls *(x.deref()) = *(&5) = 5\n```\n\n**What `*x` actually does:** the compiler translates `*x` into `*(x.deref())`. The `deref()` method returns a reference, then `*` dereferences that reference.\n\n**Standard library Deref implementations:**\n\n| Type | Deref::Target | Effect |\n|---|---|---|\n| `Box<T>` | `T` | `*box_val` gives the inner T |\n| `String` | `str` | `&String` coerces to `&str` |\n| `Vec<T>` | `[T]` | `&Vec<T>` coerces to `&[T]` |\n| `Rc<T>` | `T` | `*rc_val` gives the inner T |\n| `Arc<T>` | `T` | `*arc_val` gives the inner T |"},{heading:"Deref Coercion",body:'**Deref coercion automatically converts `&T` to `&U` when `T: Deref<Target=U>`.** This happens at function call boundaries.\n\n```rust\nfn greet(name: &str) {\n    println!("Hello, {name}!");\n}\n\nlet s = String::from("Rust");\ngreet(&s);   // &String automatically coerced to &str via Deref\n// Without coercion, you\'d write: greet(&(*s)[..])\n```\n\n**Coercion chains:** Deref coercion can chain through multiple levels:\n\n```rust\nlet boxed_string = Box::new(String::from("hello"));\ngreet(&boxed_string);\n// &Box<String> -> &String -> &str (two Deref coercions)\n```\n\n**DerefMut for mutable deref:**\n\n```rust\nuse std::ops::DerefMut;\n\nimpl<T> DerefMut for MyBox<T> {\n    fn deref_mut(&mut self) -> &mut T { &mut self.0 }\n}\n```\n\n**Coercion rules:**\n\n| From | To | Condition |\n|---|---|---|\n| `&T` | `&U` | T: Deref<Target=U> |\n| `&mut T` | `&mut U` | T: DerefMut<Target=U> |\n| `&mut T` | `&U` | T: Deref<Target=U> (mut to immut is fine) |\n\nNote: `&T` cannot coerce to `&mut U` (immutable to mutable is never allowed).'}],questions:[{q:"Why can you pass a &String to a function expecting &str? What mechanism makes this work?",a:"Deref coercion. String implements Deref<Target=str>, so when you pass &String where &str is expected, the compiler automatically calls String::deref() to convert &String into &str. This happens implicitly at function call boundaries. The coercion can even chain: &Box<String> coerces to &String (via Box's Deref) which coerces to &str (via String's Deref). Without Deref coercion, you'd have to write greet(&(*s)[..]) instead of greet(&s).",hint:"Think about what trait String implements that connects it to str.",check:l=>{const s=l.toLowerCase();return s.includes("deref")&&(s.includes("coercion")||s.includes("coerce")||s.includes("auto")||s.includes("implicit"))}}]},{id:"drop",icon:"🧹",color:"#DC2626",title:"The Drop Trait",subtitle:"RAII in Rust — automatic cleanup, custom destructors, and drop order",resources:[{type:"read",title:"The Rust Book — Running Code on Cleanup with the Drop Trait",url:"https://doc.rust-lang.org/book/ch15-03-drop.html"},{type:"read",title:"Rust Reference — Destructors",url:"https://doc.rust-lang.org/reference/destructors.html"}],content:[{heading:"RAII and the Drop Trait",body:`**Drop is Rust’s destructor.** It runs automatically when a value goes out of scope, freeing resources.

\`\`\`rust
struct CustomSmartPointer {
    data: String,
}

impl Drop for CustomSmartPointer {
    fn drop(&mut self) {
        println!("Dropping: {}", self.data);
    }
}

fn main() {
    let a = CustomSmartPointer { data: String::from("first") };
    let b = CustomSmartPointer { data: String::from("second") };
    println!("Created pointers");
}
// Output:
// Created pointers
// Dropping: second   <-- last created, first dropped (LIFO)
// Dropping: first
\`\`\`

**RAII (Resource Acquisition Is Initialization):** resources (memory, files, locks, network connections) are tied to object lifetimes. When the object is dropped, the resource is released. No manual cleanup needed.

**Drop order:**
- Variables are dropped in **reverse declaration order** (LIFO/stack order)
- Struct fields are dropped in **declaration order** (first field first)
- This is deterministic and guaranteed, unlike GC languages`},{heading:"Early Drop with std::mem::drop",body:`**You cannot call \`.drop()\` manually** — Rust prevents double-free bugs. Use \`std::mem::drop()\` instead.

\`\`\`rust
let lock = mutex.lock().unwrap();
// ... use lock ...

// Can't do: lock.drop();  // ERROR: explicit destructor calls not allowed

// Use std::mem::drop instead:
drop(lock);  // Lock is released here
// ... other code that needs the mutex ...
\`\`\`

**Why you can’t call \`.drop()\` directly:** if you could, the automatic drop at end-of-scope would run again on already-freed memory (double-free). \`std::mem::drop()\` takes ownership of the value, consuming it so it’s no longer available.

**\`std::mem::drop\` is literally just:**

\`\`\`rust
pub fn drop<T>(_x: T) {}
// Takes ownership, then T is dropped at the end of this function
\`\`\`

That’s it — an empty function that takes ownership. The magic is that T’s Drop::drop runs when _x goes out of scope.

**Common use case:** releasing locks early, closing files before the function ends, or freeing large allocations when you’re done with them.`}],questions:[{q:"In what order are variables dropped in Rust? Why?",a:"Variables are dropped in REVERSE declaration order (LIFO — last in, first out), like a stack. If you declare a, then b, then c, they're dropped in order c, b, a. This is because later variables might reference earlier ones: if b borrows from a, then a must be alive when b is dropped. Dropping in reverse order guarantees this. Struct fields, however, are dropped in forward declaration order (first field first). This is all deterministic and specified by the language, unlike garbage-collected languages where destruction timing is unpredictable.",hint:"Think about a stack: what goes in last comes out first.",check:l=>{const s=l.toLowerCase();return(s.includes("reverse")||s.includes("lifo")||s.includes("last")||s.includes("stack"))&&(s.includes("order")||s.includes("first"))}}]},{id:"rc",icon:"🔁",color:"#059669",title:"Rc<T> — Reference Counting",subtitle:"Shared ownership for single-threaded code with reference counting",resources:[{type:"read",title:"The Rust Book — Rc<T>, the Reference Counted Smart Pointer",url:"https://doc.rust-lang.org/book/ch15-04-rc.html"},{type:"read",title:"std::rc::Rc — API documentation",url:"https://doc.rust-lang.org/std/rc/struct.Rc.html"}],content:[{heading:"When Single Ownership Isn’t Enough",body:`**Sometimes a value has multiple owners.** A graph node might be pointed to by multiple edges. A shared configuration might be used by multiple components.

**Rc<T> enables multiple ownership** by keeping a reference count. When you clone an Rc, the count goes up. When an Rc is dropped, the count goes down. When the count hits zero, the value is freed.

\`\`\`rust
use std::rc::Rc;

let a = Rc::new(String::from("hello"));
println!("count = {}", Rc::strong_count(&a)); // 1

let b = Rc::clone(&a);  // Increment count, NOT deep clone
println!("count = {}", Rc::strong_count(&a)); // 2

let c = Rc::clone(&a);
println!("count = {}", Rc::strong_count(&a)); // 3

drop(c);
println!("count = {}", Rc::strong_count(&a)); // 2

drop(b);
println!("count = {}", Rc::strong_count(&a)); // 1
// When a is dropped, count reaches 0, String is freed
\`\`\`

**Rc::clone() is cheap** — it just increments a counter (not a deep copy). Convention: use \`Rc::clone(&x)\` instead of \`x.clone()\` to make it clear you’re incrementing the count, not doing an expensive clone.`},{heading:"Rc Memory Layout & Limitations",body:`**Memory layout of Rc<T>:**

\`\`\`
Stack:                     Heap (RcBox):
┌──────────────┐        ┌─────────────────┐
│ Rc { ptr } ──┤────────▶│ strong_count: 2  │
└──────────────┘        │ weak_count: 0    │
┌──────────────┐        │ value: T         │
│ Rc { ptr } ──┤────────▶│ (actual data)    │
└──────────────┘        └─────────────────┘
(Both Rc point to same heap allocation)
\`\`\`

**Critical limitations:**

| Limitation | Explanation |
|---|---|
| **Single-threaded only** | Rc uses non-atomic counter. Use Arc for threads. |
| **Immutable only** | Rc<T> gives &T, not &mut T. Use Rc<RefCell<T>> for mutation. |
| **No cycles** | Rc cycles (A -> B -> A) leak memory (count never reaches 0). Use Weak to break cycles. |

**Rc does NOT implement Send or Sync** — the compiler will refuse to let you send an Rc across threads. This is by design: the non-atomic reference count would cause data races.`}],questions:[{q:"Why is Rc::clone(&x) preferred over x.clone() for Rc types?",a:"Convention. Rc::clone(&x) only increments the reference count (O(1), very cheap). x.clone() also calls Rc::clone, but the reader might think it's doing an expensive deep clone of the inner data. Using Rc::clone(&x) explicitly signals 'I'm just sharing ownership, not copying data.' This makes code reviews easier and prevents confusion. Both calls do the exact same thing — it's purely a readability convention in the Rust community.",hint:"Think about what a code reviewer expects when they see .clone() vs Rc::clone().",check:l=>{const s=l.toLowerCase();return(s.includes("convention")||s.includes("readab")||s.includes("clear")||s.includes("signal"))&&(s.includes("count")||s.includes("cheap")||s.includes("increment")||s.includes("confus"))}}]},{id:"arc",icon:"⚡",color:"#D97706",title:"Arc<T> — Atomic Reference Counting",subtitle:"Thread-safe shared ownership using atomic operations",resources:[{type:"read",title:"The Rust Book — Shared-State Concurrency",url:"https://doc.rust-lang.org/book/ch16-03-shared-state.html"},{type:"read",title:"std::sync::Arc — API documentation",url:"https://doc.rust-lang.org/std/sync/struct.Arc.html"}],content:[{heading:"Arc = Rc for Threads",body:`**Arc<T> (Atomic Reference Counted) is the thread-safe version of Rc<T>.** It uses atomic operations for the reference count, so it’s safe to share between threads.

\`\`\`rust
use std::sync::Arc;
use std::thread;

let data = Arc::new(vec![1, 2, 3]);

let handles: Vec<_> = (0..3).map(|i| {
    let data = Arc::clone(&data);  // Clone the Arc (atomic increment)
    thread::spawn(move || {
        println!("Thread {i}: {:?}", data);
    })
}).collect();

for handle in handles {
    handle.join().unwrap();
}
\`\`\`

**Rc vs Arc:**

| Aspect | Rc<T> | Arc<T> |
|---|---|---|
| Thread safety | Not thread-safe | Thread-safe (Send + Sync) |
| Counter type | Non-atomic (Cell<usize>) | Atomic (AtomicUsize) |
| Performance | Faster (~1ns per clone) | Slower (~5-10ns per clone) |
| Use case | Single-threaded sharing | Multi-threaded sharing |

**Rule:** use Rc for single-threaded code, Arc for multi-threaded. The compiler will error if you try to send Rc across threads.

**Arc + Mutex for mutable shared state:**

\`\`\`rust
use std::sync::{Arc, Mutex};

let counter = Arc::new(Mutex::new(0));

let handles: Vec<_> = (0..10).map(|_| {
    let counter = Arc::clone(&counter);
    thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1;
    })
}).collect();

for h in handles { h.join().unwrap(); }
println!("Result: {}", *counter.lock().unwrap()); // 10
\`\`\`

**Pattern:** \`Arc<Mutex<T>>\` is the standard way to share mutable state across threads. Arc provides shared ownership, Mutex provides interior mutability with exclusive access.`}],questions:[{q:"Why does Rust have both Rc and Arc instead of just Arc for everything?",a:"Performance. Arc uses atomic operations for its reference count, which are 5-10x slower than Rc's non-atomic increment/decrement. Atomics require CPU-level synchronization (memory barriers, cache line coordination) even when only one thread is involved. Rc avoids this overhead entirely. Since most Rust code is single-threaded or doesn't need shared ownership across threads, Rc is the better default. The compiler enforces the choice: Rc won't compile in multi-threaded contexts (doesn't implement Send/Sync), and Arc works everywhere but with extra cost.",hint:"What does 'atomic' mean in terms of CPU operations? Is it free?",check:l=>{const s=l.toLowerCase();return(s.includes("performance")||s.includes("faster")||s.includes("overhead")||s.includes("atomic"))&&(s.includes("single")||s.includes("thread")||s.includes("cost"))}}]},{id:"refcell",icon:"🔓",color:"#C2410C",title:"RefCell<T> & Interior Mutability",subtitle:"Borrow checking at runtime, Ref and RefMut guards, and the Mutex of single-threaded code",resources:[{type:"read",title:"The Rust Book — RefCell<T> and the Interior Mutability Pattern",url:"https://doc.rust-lang.org/book/ch15-05-interior-mutability.html"},{type:"read",title:"std::cell::RefCell — API documentation",url:"https://doc.rust-lang.org/std/cell/struct.RefCell.html"}],content:[{heading:"Interior Mutability",body:`**Interior mutability lets you mutate data even through an immutable reference.** This sounds like it violates Rust’s rules, but it’s safe because the borrow rules are checked at **runtime** instead of compile time.

\`\`\`rust
use std::cell::RefCell;

let data = RefCell::new(5);

// Borrow immutably
let r = data.borrow();    // Returns Ref<i32>
println!("{r}");
drop(r);                   // Must drop before mutable borrow

// Borrow mutably
let mut w = data.borrow_mut();  // Returns RefMut<i32>
*w += 1;
drop(w);

println!("{}", data.borrow()); // 6
\`\`\`

**The same rules apply, just at runtime:**
- Multiple immutable borrows: OK
- One mutable borrow: OK
- Mutable + immutable at the same time: **PANIC at runtime!**

\`\`\`rust
let data = RefCell::new(5);
let r = data.borrow();        // Immutable borrow
let w = data.borrow_mut();    // PANIC: already borrowed immutably
\`\`\``},{heading:"Rc<RefCell<T>> Pattern",body:`**The classic Rust pattern for shared mutable data in single-threaded code:**

\`\`\`rust
use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug)]
struct Node {
    value: i32,
    children: Vec<Rc<RefCell<Node>>>,
}

let leaf = Rc::new(RefCell::new(Node {
    value: 3,
    children: vec![],
}));

let branch = Rc::new(RefCell::new(Node {
    value: 5,
    children: vec![Rc::clone(&leaf)],
}));

// Mutate leaf's value through shared ownership
leaf.borrow_mut().value = 10;

println!("branch: {:?}", branch.borrow());
// branch's child now shows value = 10
\`\`\`

**What each layer provides:**

| Layer | Purpose |
|---|---|
| \`Rc\` | Multiple ownership (shared) |
| \`RefCell\` | Interior mutability (runtime borrow checks) |
| \`T\` | The actual data |

**Multi-threaded equivalent:** replace \`Rc\` with \`Arc\` and \`RefCell\` with \`Mutex\` or \`RwLock\`.

| Pattern | Threading | Mutation |
|---|---|---|
| \`Rc<RefCell<T>>\` | Single-threaded | Runtime borrow check |
| \`Arc<Mutex<T>>\` | Multi-threaded | Locking |
| \`Arc<RwLock<T>>\` | Multi-threaded | Read-many / write-exclusive |`},{heading:"Cell<T> — The Simpler Alternative",body:`**Cell<T> is like RefCell but for Copy types.** It doesn’t use borrowing — it copies values in and out.

\`\`\`rust
use std::cell::Cell;

let c = Cell::new(5);
c.set(10);              // No borrow needed!
let val = c.get();      // Returns a copy: 10
\`\`\`

**Cell vs RefCell:**

| Aspect | Cell<T> | RefCell<T> |
|---|---|---|
| T requirement | T: Copy | Any T |
| Mechanism | Copy in/out | Runtime borrow checking |
| API | get() / set() | borrow() / borrow_mut() |
| Panic risk | Never panics | Panics on borrow violations |
| Overhead | Zero (no borrow tracking) | Small (tracks borrow state) |
| Use case | Counters, flags, small values | Complex data, strings, vecs |

**Rule:** if T is Copy (integers, bools, chars), prefer Cell. It’s simpler, faster, and can’t panic. Use RefCell only when you need to borrow complex, non-Copy data.`}],questions:[{q:"What happens if you call borrow() and borrow_mut() on the same RefCell at the same time? How is this different from compile-time borrowing?",a:"It panics at runtime with 'already borrowed: BorrowMutError'. With compile-time borrowing, the same violation would be caught during compilation and you'd get a compiler error instead. RefCell moves the borrow check from compile time to runtime: the same rules apply (no mutable + immutable borrows simultaneously), but the enforcement mechanism changes. This is the trade-off: RefCell gives you more flexibility (interior mutability through immutable references) at the cost of potential runtime panics instead of compile-time errors. Use RefCell only when compile-time borrowing is too restrictive.",hint:"The same borrowing rules apply, but where are they enforced?",check:l=>{const s=l.toLowerCase();return(s.includes("panic")||s.includes("runtime"))&&(s.includes("compile")||s.includes("borrow")||s.includes("same rule"))}}]},{id:"weak",icon:"🔗",color:"#0891B2",title:"Weak<T> & Breaking Cycles",subtitle:"Non-owning references that prevent memory leaks from reference cycles",resources:[{type:"read",title:"The Rust Book — Preventing Reference Cycles",url:"https://doc.rust-lang.org/book/ch15-06-reference-cycles.html"},{type:"read",title:"std::rc::Weak — API documentation",url:"https://doc.rust-lang.org/std/rc/struct.Weak.html"}],content:[{heading:"The Reference Cycle Problem",body:`**Rc can leak memory if you create cycles.** If A references B and B references A, both reference counts stay >= 1 forever.

\`\`\`
    Rc count = 1         Rc count = 1
   ┌───────┐         ┌───────┐
   │ Node A │ ──────▶ │ Node B │
   │        │ ◀────── │        │
   └───────┘         └───────┘
   When A drops: B's count = 1 (still alive)
   When B drops: A's count = 1 (still alive)
   Neither is freed! Memory leak.
\`\`\`

**This is a real problem** in tree/graph structures where child nodes reference their parents.`},{heading:"Weak<T> — Non-Owning References",body:`**Weak<T> is a non-owning reference** that doesn’t increment the strong count. It can observe whether the data is still alive, but doesn’t keep it alive.

\`\`\`rust
use std::rc::{Rc, Weak};

let strong = Rc::new(String::from("hello"));
let weak: Weak<String> = Rc::downgrade(&strong);

// Weak doesn't keep the data alive
println!("strong count: {}", Rc::strong_count(&strong)); // 1
println!("weak count: {}", Rc::weak_count(&strong));     // 1

// To use the data, upgrade Weak to Rc (returns Option)
if let Some(val) = weak.upgrade() {
    println!("Still alive: {val}");
}

drop(strong);  // Data is freed (strong count = 0)

// Upgrade now fails
assert!(weak.upgrade().is_none()); // Data is gone
\`\`\`

**Breaking cycles with Weak:**

\`\`\`rust
use std::rc::{Rc, Weak};
use std::cell::RefCell;

struct Node {
    value: i32,
    parent: RefCell<Weak<Node>>,      // Weak: doesn't own parent
    children: RefCell<Vec<Rc<Node>>>,  // Rc: owns children
}
\`\`\`

**Pattern:** children point to parent with \`Weak\`, parent points to children with \`Rc\`. Dropping the parent decrements children’s count. If no other Rc exists, children are freed too. The Weak parent pointers don’t prevent any cleanup.

**Tree ownership model:**

\`\`\`
Parent (Rc, strong count = 1)
  │
  ├── Child A (Rc, strong count = 1)
  │     └── parent: Weak (doesn't own)
  │
  └── Child B (Rc, strong count = 1)
        └── parent: Weak (doesn't own)

Drop parent → children's strong count → 0 → freed
Weak refs become None on upgrade()
\`\`\``}],questions:[{q:"How does Weak<T> prevent memory leaks in a parent-child tree structure?",a:"In a tree, parents own children (Rc<Node>) and children reference parents. If children used Rc for the parent reference, you'd get a cycle: parent -> child -> parent, with both counts >= 1 forever. Weak<T> breaks this by making the child-to-parent reference non-owning: it doesn't increment the strong count. When the parent Rc is dropped (strong count reaches 0), the parent is freed. Children's Weak references to the parent become None when upgraded. Children are also freed because no other Rc points to them. The cycle is broken because the Weak link doesn't keep the parent alive.",hint:"Think about what happens to reference counts when you use Weak vs Rc for the parent pointer.",check:l=>{const s=l.toLowerCase();return(s.includes("weak")||s.includes("non-own")||s.includes("not own")||s.includes("doesn't own"))&&(s.includes("count")||s.includes("cycle")||s.includes("break"))}}]},{id:"cow",icon:"🐄",color:"#581C87",title:"Cow<'a, T> — Clone on Write",subtitle:"Borrow when you can, clone when you must — the ultimate efficiency type",resources:[{type:"read",title:"std::borrow::Cow — API documentation",url:"https://doc.rust-lang.org/std/borrow/enum.Cow.html"},{type:"read",title:"Effective Rust — Using Cow for efficiency",url:"https://www.lurklurk.org/effective-rust/cow.html"}],content:[{heading:"What Is Cow?",body:`**Cow<’a, T> (Clone on Write) is an enum that holds either a borrowed or owned value.** It avoids cloning until mutation is needed.

\`\`\`rust
use std::borrow::Cow;

enum Cow<'a, B: ?Sized + ToOwned> {
    Borrowed(&'a B),   // Just a reference, no allocation
    Owned(<B as ToOwned>::Owned), // Owned copy, allocated
}
\`\`\`

**Practical example — sometimes you need to modify, sometimes not:**

\`\`\`rust
fn ensure_lowercase(s: &str) -> Cow<'_, str> {
    if s.chars().all(|c| c.is_lowercase()) {
        Cow::Borrowed(s)     // Already lowercase, just borrow
    } else {
        Cow::Owned(s.to_lowercase()) // Need to allocate new String
    }
}

let a = ensure_lowercase("hello");   // Cow::Borrowed — no allocation!
let b = ensure_lowercase("Hello");   // Cow::Owned — allocates new String
\`\`\`

**Why this matters:** if 90% of strings are already lowercase, Cow avoids 90% of allocations. For hot paths processing millions of strings, this is a significant performance win.`},{heading:"When to Use Cow",body:`**Use Cow when a function MIGHT need to modify data, but often doesn’t.**

**Common use cases:**

| Scenario | Without Cow | With Cow |
|---|---|---|
| String processing (trim, lowercase) | Always clone | Clone only when needed |
| Config defaults | Clone default value | Borrow static default |
| Error messages | Always allocate | Borrow literal strings |
| Data normalization | Always allocate | Borrow if already normalized |

**API design pattern — functions returning Cow:**

\`\`\`rust
fn process_name(name: &str) -> Cow<'_, str> {
    if name.is_empty() {
        Cow::Borrowed("Anonymous")  // Static string, no allocation
    } else if name.contains(' ') {
        Cow::Owned(name.replace(' ', "_"))  // Need new String
    } else {
        Cow::Borrowed(name)  // Already fine, just borrow
    }
}
\`\`\`

**When NOT to use Cow:**
- When you always need to modify the data (just return the owned type)
- When the function is not on a hot path (clarity > optimization)
- When the type is Copy (just copy it, no need for Cow)

**Cow dereferences to &B** via the Deref trait, so you can pass \`Cow<str>\` anywhere a \`&str\` is expected.

**The "smart pointer" decision tree:**

\`\`\`
Need heap allocation?
  No → Use stack value
  Yes ↓
Single owner?
  Yes → Box<T>
  No ↓
Multi-threaded?
  No → Rc<T>  (+ RefCell for mutation)
  Yes → Arc<T> (+ Mutex for mutation)
Sometimes borrow, sometimes own?
  Yes → Cow<'a, T>
Breaking reference cycles?
  Yes → Weak<T>
\`\`\``}],questions:[{q:"Write a function that takes a &str and returns the string unchanged if it has no spaces, or replaces spaces with underscores. Should it return String, &str, or Cow? Why?",a:"It should return Cow<'_, str>. If the string has no spaces (common case), you can return Cow::Borrowed(input) with zero allocation. If it has spaces, return Cow::Owned(input.replace(' ', '_')) with a new String allocation. Returning String would always allocate (wasteful when no change needed). Returning &str is impossible because replace() creates a new String (can't return reference to local data). Cow gives you the best of both worlds: borrow when possible, own when necessary.",hint:"What type can hold either a borrowed reference or an owned value?",check:l=>{const s=l.toLowerCase();return s.includes("cow")&&(s.includes("borrow")||s.includes("alloc")||s.includes("both"))}}]}];function Cp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsxs("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:["✓"," Check"]}),n.jsxs("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsxs("span",{children:["📖"," Answer"]}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function Tp(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=Is.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else{const h=d,u=h.startsWith("let ")||h.startsWith("use ")||h.startsWith("fn ")||h.startsWith("pub ")||h.startsWith("impl ")||h.startsWith("struct ")||h.startsWith("enum ")||h.startsWith("//")||h.startsWith("    ")||h.startsWith("for ")||h.startsWith("if ")||h.startsWith("mod ")||h.startsWith("match ")||h.startsWith("println!")||h.startsWith("assert")||h.startsWith("trait ")||h.startsWith("type ")||h.startsWith("where")||h.startsWith("Self")||h.startsWith("#[")||h.startsWith("}")||h.startsWith("Ok(")||h.startsWith("Err(")||h.startsWith("drop(")||h.startsWith("c.")||h.startsWith("data.")||h.startsWith("leaf.")||h.startsWith("drop(")||h.startsWith("    ")||h.trimStart().startsWith(".")||h.startsWith("Cow::")||h.startsWith("Some(")||h.startsWith("None")||h.startsWith("*")&&!h.startsWith("**"),b=h.startsWith("let ")||h.startsWith("use ")||h.startsWith("fn ")||h.startsWith("pub ")||h.startsWith("impl ")||h.startsWith("struct ")||h.startsWith("enum ")||h.startsWith("// ")||h.startsWith("///")||h.startsWith("#[")||h.startsWith("trait ");u?T.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:b?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:b?"6px 6px 0 0":0,marginTop:b?10:0},children:h},`c${m}`)):h===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(h)},`p${m}`)),m++}}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#2563EB!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"RUST SMART POINTERS"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Smart Pointers Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Box, Deref, Drop, Rc, Arc, RefCell, Weak, and Cow ","—"," Rust","’","s smart pointers for heap allocation, shared ownership, interior mutability, and clone-on-write efficiency.",n.jsx("br",{}),Is.length," sections ","·"," ",F," concepts ","·"," ",Is.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #2563EB, #7C3AED, #DC2626, #059669, #D97706, #C2410C, #0891B2, #581C87)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Is.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:"›"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:"📖 Learn"}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["✏️ Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["🔗 Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:"›"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(Cp,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=Sp[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Box ","→"," Deref ","→"," Drop ","→"," Rc ","→"," Arc ","→"," RefCell ","→"," Weak ","→"," Cow ","—"," from simple heap allocation to advanced ownership patterns"]})]})}const Rp={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Os=[{id:"fearless",icon:"🛡️",color:"#C2410C",title:"Fearless Concurrency",subtitle:"Why Rust's ownership model eliminates data races at compile time — a paradigm shift from C++, Go, and Java",resources:[{type:"read",title:"The Rust Book — Fearless Concurrency (Ch. 16)",url:"https://doc.rust-lang.org/book/ch16-00-concurrency.html"},{type:"read",title:"Rust Blog — Fearless Concurrency with Rust",url:"https://blog.rust-lang.org/2015/04/10/Fearless-Concurrency.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Send, Sync, and their implementors",url:"https://www.youtube.com/watch?v=yOezcP-XaIw"},{type:"read",title:"Rustonomicon — Concurrency chapter",url:"https://doc.rust-lang.org/nomicon/concurrency.html"}],content:[{heading:"The Data Race Problem",body:`**A data race occurs when two threads access the same memory, at least one writes, and there's no synchronization.** Data races cause undefined behavior in C/C++ and subtle bugs in Java/Go.

**Traditional approaches and their flaws:**

| Language | Approach | Weakness |
|---|---|---|
| **C/C++** | Manual locks, raw threads | Data races are UB; no compiler help; use-after-free across threads |
| **Java** | synchronized, volatile, java.util.concurrent | Race conditions still possible; deadlocks common; runtime overhead |
| **Go** | Goroutines + channels (CSP model) | Shared state still allowed; race detector is runtime-only (go race) |
| **Python** | GIL prevents true parallelism | No real concurrency for CPU-bound work; GIL removed in 3.13+ |

**Rust's breakthrough:** the compiler prevents data races entirely. If your code compiles, it's free of data races. Not just "probably safe" — **provably safe**.`},{heading:"How Ownership Prevents Data Races",body:`**Rust's ownership rules map directly to concurrency safety:**

**Rule 1: Each value has exactly one owner.**
→ You can't accidentally share mutable state between threads.

**Rule 2: You can have either ONE mutable reference OR any number of immutable references.**
→ This is the reader-writer lock pattern, enforced at compile time.

**Rule 3: References must always be valid.**
→ No dangling pointers, no use-after-free across thread boundaries.

**The key insight:** Rust's borrow checker IS a compile-time concurrency checker. The same rules that prevent memory bugs also prevent data races.

\`\`\`
// This WON'T compile — Rust prevents the data race
let mut data = vec![1, 2, 3];
thread::spawn(|| {
    data.push(4);  // ERROR: can't borrow \`data\` as mutable
});
println!("{:?}", data); // main thread also using data
\`\`\`

**In C++, this compiles and causes undefined behavior. In Rust, it's a compile error.**`},{heading:"Comparison: Concurrency Models",body:`**How Rust compares to every major language's concurrency model:**

| Feature | Rust | Go | Java | C++ |
|---|---|---|---|---|
| **Thread model** | 1:1 OS threads | M:N goroutines | 1:1 + virtual threads | 1:1 OS threads |
| **Data race prevention** | Compile-time | Runtime detector | Runtime (volatile/sync) | None (UB) |
| **Primary primitive** | Ownership + types | Channels (CSP) | Locks + concurrent collections | Locks + atomics |
| **Shared state** | Arc<Mutex<T>> | sync.Mutex (runtime) | synchronized/Lock | std::mutex (manual) |
| **Message passing** | mpsc channels | Channels (first-class) | BlockingQueue | No stdlib solution |
| **Async** | async/await + Tokio | Built-in (goroutines) | CompletableFuture | co_await (C++20) |
| **Zero-cost** | Yes | No (GC, runtime) | No (JVM, GC) | Yes (but unsafe) |
| **Safety guarantee** | Compile-time proof | Best-effort | Best-effort | None |

**Rust's unique position:** zero-cost abstractions WITH compile-time safety guarantees. No other language achieves both.`}],questions:[{q:"Why can't a data race occur in safe Rust? Explain using ownership rules.",a:"A data race requires three conditions: (1) two or more threads access the same memory, (2) at least one is writing, and (3) no synchronization. Rust's ownership system prevents all three from co-occurring. Rule: you can have ONE mutable reference OR any number of immutable references, but not both. To share data between threads, you must use Arc (atomic reference counting) for shared ownership, and Mutex/RwLock for synchronized mutation. The type system enforces that you cannot have unsynchronized mutable access from multiple threads — the code simply won't compile. The Send and Sync traits further ensure that only thread-safe types cross thread boundaries.",hint:"Think about what the borrow checker enforces: one &mut or many & references.",check:l=>{const s=l.toLowerCase();return(s.includes("ownership")||s.includes("borrow"))&&(s.includes("compile")||s.includes("compiler"))}},{q:"Go also uses channels for message passing. What advantage does Rust's approach have over Go's?",a:"While Go encourages 'share memory by communicating,' it doesn't enforce it — you can still use shared mutable state without channels, and Go's race detector only catches races at runtime (and only those exercised during the test run). Rust enforces safety at compile time: if you try to share data between threads without proper synchronization (Arc<Mutex<T>> or channels), the code won't compile. Additionally, Rust's channels transfer ownership of sent values — after tx.send(val), the sender can no longer use val. Go has no such enforcement; you can send a pointer through a channel and keep using it, creating a potential race.",hint:"Consider: does Go's compiler prevent data races, or just detect them at runtime?",check:l=>{const s=l.toLowerCase();return(s.includes("compile")||s.includes("enforce"))&&(s.includes("runtime")||s.includes("detect"))}},{q:"What is the difference between 1:1 threading and M:N threading? Which does Rust use by default, and why?",a:"1:1 threading means one language-level thread maps to one OS thread. M:N threading (green threads) means M language-level threads are multiplexed onto N OS threads by a runtime scheduler. Rust uses 1:1 threading by default because it requires no runtime, which aligns with Rust's zero-cost abstraction philosophy. A green thread runtime adds binary size, memory overhead, and complexity. However, Rust's async/await ecosystem (Tokio, async-std) effectively provides M:N concurrency for I/O-bound work through futures and tasks, giving you the best of both worlds without mandating a runtime in the language itself.",hint:"Think about Rust's philosophy of zero-cost abstractions and minimal runtime.",check:l=>{const s=l.toLowerCase();return s.includes("1:1")&&(s.includes("os thread")||s.includes("operating system")||s.includes("zero-cost")||s.includes("runtime"))}}]},{id:"threads",icon:"🧵",color:"#7C3AED",title:"std::thread — Spawn, Join, Move",subtitle:"Creating OS threads, waiting for completion, and safely transferring data with move closures",resources:[{type:"read",title:"The Rust Book — Using Threads (Ch. 16.1)",url:"https://doc.rust-lang.org/book/ch16-01-threads.html"},{type:"read",title:"std::thread module documentation",url:"https://doc.rust-lang.org/std/thread/index.html"},{type:"video",title:"Let's Get Rusty — Threads in Rust",url:"https://www.youtube.com/watch?v=kvBsZGWxJNs"}],content:[{heading:"Spawning Threads",body:`**Use thread::spawn to create a new OS thread.** It takes a closure containing the code to run.

\`\`\`
use std::thread;
use std::time::Duration;

fn main() {
    thread::spawn(|| {
        for i in 1..10 {
            println!("spawned thread: {i}");
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("main thread: {i}");
        thread::sleep(Duration::from_millis(1));
    }
}
\`\`\`

**Key behaviors:**
- Threads run concurrently — output order is non-deterministic
- **When the main thread ends, all spawned threads are killed** — even if they haven't finished
- thread::spawn returns a **JoinHandle<T>** — an owned value representing the thread
- The closure's return value becomes the JoinHandle's type parameter T`},{heading:"JoinHandle and join()",body:`**Call join() on a JoinHandle to wait for the thread to finish.**

\`\`\`
use std::thread;

fn main() {
    let handle = thread::spawn(|| {
        // expensive computation
        let sum: u64 = (1..=1_000_000).sum();
        sum
    });

    // Do other work on the main thread...
    println!("Main thread working...");

    // Block until spawned thread completes
    let result = handle.join().unwrap();
    println!("Thread computed: {result}");
}
\`\`\`

**join() behavior:**
- **Blocks** the calling thread until the spawned thread terminates
- Returns **Result<T, Box<dyn Any>>** — Ok(value) or Err if the thread panicked
- **Placement matters:** calling join() before main-thread work makes execution sequential; calling it after allows parallelism
- If you never call join(), the thread might be killed when main exits`},{heading:"Move Closures and Ownership Transfer",body:`**The move keyword forces the closure to take ownership of captured variables.**

**Without move — won't compile:**
\`\`\`
let v = vec![1, 2, 3];
let handle = thread::spawn(|| {
    println!("{:?}", v); // ERROR: closure may outlive \`v\`
});
\`\`\`

**With move — compiles:**
\`\`\`
let v = vec![1, 2, 3];
let handle = thread::spawn(move || {
    println!("{:?}", v); // OK: \`v\` is moved into the closure
});
// v is no longer accessible here
handle.join().unwrap();
\`\`\`

**Why move is required for threads:**
- The spawned thread might outlive the scope that created the data
- Rust can't prove that references will remain valid for the thread's lifetime
- **move** transfers ownership, guaranteeing the data lives as long as the thread
- After move, the original variable is no longer accessible in the spawning scope

**Returning values from threads:**
\`\`\`
let handle = thread::spawn(move || {
    // Process data and return result
    v.iter().sum::<i32>()
});
let total = handle.join().unwrap(); // Get the return value
\`\`\``},{heading:"Thread Builder and Named Threads",body:`**Use thread::Builder for more control over thread creation.**

\`\`\`
use std::thread;

let builder = thread::Builder::new()
    .name("worker-1".into())
    .stack_size(4 * 1024 * 1024); // 4 MB stack

let handle = builder.spawn(|| {
    let name = thread::current().name()
        .unwrap_or("unnamed")
        .to_string();
    println!("Running on thread: {name}");
}).unwrap();

handle.join().unwrap();
\`\`\`

**Useful thread functions:**
- **thread::current()** — get handle to current thread
- **thread::park() / unpark()** — suspend/resume a thread
- **thread::available_parallelism()** — number of hardware threads (e.g., 8 on a quad-core with hyperthreading)
- **thread::yield_now()** — hint to scheduler to switch threads
- **thread::scope()** (Rust 1.63+) — scoped threads that can borrow from the parent stack`}],questions:[{q:"What happens if you call handle.join() BEFORE doing main-thread work? How does this differ from calling it AFTER?",a:"If you call join() before main-thread work, the main thread blocks immediately and waits for the spawned thread to finish. This makes execution effectively sequential — no parallelism. If you call join() after doing main-thread work, both threads run concurrently during the main-thread work, and then the main thread waits for the spawned thread to finish if it hasn't already. This achieves actual parallelism. The placement of join() is a critical design decision: join early for sequential execution (simpler reasoning), join late for maximum parallelism.",hint:"Think about what 'blocking' means — the calling thread does nothing until the joined thread finishes.",check:l=>{const s=l.toLowerCase();return(s.includes("block")||s.includes("wait"))&&(s.includes("sequential")||s.includes("parallel"))}},{q:"Why does Rust require the `move` keyword when spawning threads with captured variables? What would happen without it in C++?",a:"Rust requires `move` because the spawned thread might outlive the scope that created the data. Without move, the closure would borrow the data by reference, but the borrow checker can't prove the reference will remain valid for the thread's lifetime — the spawning function might return, dropping the data while the thread still uses it. In C++, there's no such requirement: you can capture by reference in a lambda passed to std::thread, and if the data is destroyed before the thread finishes, you get undefined behavior (use-after-free, corrupted data, crashes). Rust's move requirement eliminates this entire class of bugs at compile time.",hint:"What happens if the spawning function returns before the thread accesses the captured data?",check:l=>{const s=l.toLowerCase();return s.includes("move")&&(s.includes("outlive")||s.includes("lifetime")||s.includes("ownership")||s.includes("dangling"))}}]},{id:"channels",icon:"📨",color:"#0891B2",title:"Message Passing — mpsc Channels",subtitle:"Thread communication via channels: send, recv, multiple producers, and ownership transfer semantics",resources:[{type:"read",title:"The Rust Book — Message Passing (Ch. 16.2)",url:"https://doc.rust-lang.org/book/ch16-02-message-passing.html"},{type:"read",title:"std::sync::mpsc documentation",url:"https://doc.rust-lang.org/std/sync/mpsc/index.html"},{type:"video",title:"Let's Get Rusty — Message Passing in Rust",url:"https://www.youtube.com/watch?v=AEha0yMdDJA"},{type:"read",title:"Crossbeam channels — improved alternative",url:"https://docs.rs/crossbeam-channel/latest/crossbeam_channel/"}],content:[{heading:"Channel Basics: tx and rx",body:`**A channel has two halves: a transmitter (tx) and a receiver (rx).** Data flows from tx to rx.

\`\`\`
use std::sync::mpsc;
use std::thread;

fn main() {
    // Create a channel. mpsc = Multiple Producer, Single Consumer
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let msg = String::from("hello from thread");
        tx.send(msg).unwrap();
        // msg is MOVED into the channel — can't use it here
    });

    let received = rx.recv().unwrap();
    println!("Got: {received}");
}
\`\`\`

**Key semantics:**
- **send()** takes ownership of the value — the sender can no longer use it
- **recv()** blocks until a message arrives — returns Result<T, RecvError>
- **try_recv()** returns immediately — Ok(val) or Err(TryRecvError::Empty)
- Dropping all transmitters closes the channel; recv() then returns Err

**Why ownership transfer matters:**
\`\`\`
tx.send(val).unwrap();
println!("{val}"); // ERROR: value moved
\`\`\`
This prevents the sender from modifying data after sending it — eliminating a whole class of race conditions that plague Go channels (where you can send a pointer and keep using it).`},{heading:"Sending Multiple Values and Iteration",body:`**The receiver can be used as an iterator, processing messages as they arrive.**

\`\`\`
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let msgs = vec!["hi", "from", "the", "thread"];
        for msg in msgs {
            tx.send(msg.to_string()).unwrap();
            thread::sleep(Duration::from_millis(200));
        }
        // tx is dropped here — channel closes
    });

    // Iterate until channel closes
    for received in rx {
        println!("Got: {received}");
    }
    println!("Channel closed, all messages received.");
}
\`\`\`

**The rx iterator:**
- Yields each value sent through the channel
- Blocks between messages (waits for next send)
- Terminates when all transmitters are dropped (channel closed)
- Equivalent to calling recv() in a loop and breaking on Err`},{heading:"Multiple Producers (the M in mpsc)",body:`**Clone the transmitter to create multiple producers sending to the same receiver.**

\`\`\`
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();

    // Producer 1
    let tx1 = tx.clone();
    thread::spawn(move || {
        for msg in ["hello", "world"] {
            tx1.send(format!("P1: {msg}")).unwrap();
        }
    });

    // Producer 2
    thread::spawn(move || {
        for msg in ["foo", "bar"] {
            tx.send(format!("P2: {msg}")).unwrap();
        }
    });

    // Single consumer receives from both
    for received in rx {
        println!("{received}");
    }
}
\`\`\`

**Output (order varies):**
P1: hello, P2: foo, P1: world, P2: bar

**Channel variants:**
- **mpsc::channel()** — unbounded (infinite buffer, can OOM)
- **mpsc::sync_channel(n)** — bounded with capacity n (send blocks when full)

| Channel Type | Buffer | send() Behavior | Use Case |
|---|---|---|---|
| **channel()** | Unbounded | Never blocks | Fast producer, slow consumer OK |
| **sync_channel(0)** | Rendezvous | Blocks until recv | Tight synchronization |
| **sync_channel(n)** | Bounded | Blocks when full | Backpressure control |`}],questions:[{q:"After calling tx.send(val), why can't you use val anymore? What problem does this solve?",a:"send() takes ownership of val, moving it into the channel. After the move, val is no longer valid in the sender's scope. This solves the problem of concurrent access: without ownership transfer, the sender could modify val after sending, while the receiver is reading it — a classic data race. In Go, you can send a pointer through a channel and keep using the original data, which means channels don't fully prevent data races. Rust's ownership semantics make channels truly safe: once you send data, it belongs exclusively to the receiver.",hint:"What would happen if the sender could still modify the data after sending it?",check:l=>{const s=l.toLowerCase();return(s.includes("ownership")||s.includes("move"))&&(s.includes("race")||s.includes("modify")||s.includes("safety")||s.includes("access"))}},{q:"When should you use sync_channel(0) vs channel()? What is a 'rendezvous' channel?",a:"Use channel() (unbounded) when the producer is fast and you don't want it to block — messages accumulate in an unlimited buffer. Use sync_channel(n) when you need backpressure: send() blocks when the buffer is full, slowing the producer to match the consumer's pace. sync_channel(0) is a 'rendezvous' channel: it has zero buffer, so send() blocks until recv() is called, and vice versa. This creates tight synchronization where both threads must 'meet' at the channel — useful for handshake protocols or when you want to ensure the message is consumed before the sender continues.",hint:"Think about what happens when the buffer is full. What does a buffer size of 0 mean?",check:l=>{const s=l.toLowerCase();return(s.includes("backpressure")||s.includes("block")||s.includes("buffer"))&&(s.includes("rendezvous")||s.includes("sync")||s.includes("synchroniz"))}}]},{id:"shared",icon:"🔒",color:"#DC2626",title:"Shared State — Mutex<T> & RwLock<T>",subtitle:"Mutual exclusion, read-write locks, interior mutability, and avoiding deadlocks",resources:[{type:"read",title:"The Rust Book — Shared-State Concurrency (Ch. 16.3)",url:"https://doc.rust-lang.org/book/ch16-03-shared-state.html"},{type:"read",title:"std::sync::Mutex documentation",url:"https://doc.rust-lang.org/std/sync/struct.Mutex.html"},{type:"read",title:"std::sync::RwLock documentation",url:"https://doc.rust-lang.org/std/sync/struct.RwLock.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Smart Pointers and Interior Mutability",url:"https://www.youtube.com/watch?v=8O0Nt9qY_vo"}],content:[{heading:"Mutex<T> Basics",body:`**Mutex<T> provides mutual exclusion — only one thread can access the data at a time.**

\`\`\`
use std::sync::Mutex;

fn main() {
    let m = Mutex::new(5);

    {
        let mut num = m.lock().unwrap();
        *num = 6;
    } // MutexGuard dropped here — lock released

    println!("m = {:?}", m); // m = Mutex { data: 6 }
}
\`\`\`

**How it works:**
- **lock()** blocks until the lock is available, returns a MutexGuard<T>
- **MutexGuard** implements Deref — use *num to access the inner value
- **MutexGuard** implements Drop — the lock is automatically released when the guard goes out of scope
- **try_lock()** returns immediately with Err if the lock is held
- If a thread panics while holding the lock, the mutex becomes **poisoned** — subsequent lock() calls return Err(PoisonError)

**Interior mutability:** Mutex<T> lets you mutate data inside an immutable container — similar to RefCell<T> but thread-safe.

| Feature | RefCell<T> | Mutex<T> |
|---|---|---|
| Thread safety | Single-threaded only | Multi-threaded |
| Borrow check | Runtime (panics) | Runtime (blocks/poisons) |
| Overhead | Minimal | Atomic ops + OS lock |
| Paired with | Rc<T> | Arc<T> |`},{heading:"RwLock<T> — Multiple Readers, One Writer",body:`**RwLock<T> allows multiple concurrent readers OR one exclusive writer.** More efficient than Mutex when reads vastly outnumber writes.

\`\`\`
use std::sync::RwLock;

let lock = RwLock::new(5);

// Multiple readers can hold the lock simultaneously
{
    let r1 = lock.read().unwrap();
    let r2 = lock.read().unwrap(); // OK: multiple readers
    println!("Readers: {} and {}", *r1, *r2);
} // Both read guards dropped

// Writer gets exclusive access
{
    let mut w = lock.write().unwrap();
    *w = 10;
} // Write guard dropped
\`\`\`

**When to use RwLock vs Mutex:**

| Scenario | Use |
|---|---|
| Mostly reads, rare writes | **RwLock** (readers don't block each other) |
| Balanced reads and writes | **Mutex** (simpler, less overhead) |
| Only writes | **Mutex** (RwLock has extra overhead) |
| Short critical sections | **Mutex** (lower per-operation cost) |

**Caution:** RwLock has higher overhead per lock/unlock than Mutex due to tracking reader count. Only use it when read concurrency provides a real benefit.`},{heading:"Deadlock Prevention",body:`**Rust prevents data races but does NOT prevent deadlocks.** You must design your locking strategy carefully.

**Classic deadlock:**
\`\`\`
// Thread 1: locks A, then tries to lock B
// Thread 2: locks B, then tries to lock A
// Both threads wait forever!
\`\`\`

**Prevention strategies:**

**1. Lock ordering — always acquire locks in the same global order:**
\`\`\`
// GOOD: both threads lock A first, then B
let _a = lock_a.lock().unwrap();
let _b = lock_b.lock().unwrap();
\`\`\`

**2. try_lock() with backoff — detect and retry:**
\`\`\`
loop {
    if let Ok(a) = lock_a.try_lock() {
        if let Ok(b) = lock_b.try_lock() {
            // Got both locks!
            break;
        }
    }
    thread::sleep(Duration::from_millis(1));
}
\`\`\`

**3. Minimize lock scope — hold locks for the shortest time possible:**
\`\`\`
// BAD: holding lock during I/O
let guard = data.lock().unwrap();
expensive_network_call(*guard); // Other threads blocked!

// GOOD: clone data, release lock, then do I/O
let value = {
    let guard = data.lock().unwrap();
    guard.clone()
};
expensive_network_call(value);
\`\`\`

**4. Use channels instead — message passing avoids shared state entirely.**`}],questions:[{q:"Why does Mutex<T> automatically release the lock when the MutexGuard goes out of scope? What pattern is this called?",a:"This is the RAII (Resource Acquisition Is Initialization) pattern. The MutexGuard implements the Drop trait, which is called automatically when the guard goes out of scope. When Drop runs, it releases the lock. This ensures you can never forget to unlock a mutex — a common bug in C/C++ and Java where forgetting to release a lock in an error path causes deadlocks. In Rust, even if a panic occurs, the Drop implementation runs during stack unwinding, poisoning the mutex (marking it as potentially inconsistent) rather than leaving it permanently locked.",hint:"Think about the Drop trait and what happens when a variable goes out of scope.",check:l=>{const s=l.toLowerCase();return(s.includes("raii")||s.includes("drop"))&&(s.includes("scope")||s.includes("automatic"))}},{q:"What is mutex poisoning? When does it occur and how do you handle it?",a:"Mutex poisoning occurs when a thread panics while holding a mutex lock. The mutex is then marked as 'poisoned' because the data it protects may be in an inconsistent state (the thread crashed mid-modification). Subsequent calls to lock() return Err(PoisonError) instead of Ok(MutexGuard). You can handle it in three ways: (1) unwrap() to propagate the panic, (2) match on the error and recover the data with into_inner() if you believe it's still valid, or (3) use is_poisoned() to check before locking. The design philosophy is defensive: it's better to know that a previous thread crashed mid-mutation than to silently use corrupted data.",hint:"What happens to the data if a thread panics in the middle of modifying it?",check:l=>{const s=l.toLowerCase();return s.includes("panic")&&(s.includes("inconsistent")||s.includes("corrupt")||s.includes("poison"))}}]},{id:"send-sync",icon:"✅",color:"#059669",title:"Send & Sync Traits",subtitle:"The marker traits that make Rust's concurrency guarantees work — what they guarantee and which types implement them",resources:[{type:"read",title:"The Rust Book — Send and Sync (Ch. 16.4)",url:"https://doc.rust-lang.org/book/ch16-04-extensible-concurrency-sync-and-send.html"},{type:"read",title:"Rustonomicon — Send and Sync",url:"https://doc.rust-lang.org/nomicon/send-and-sync.html"},{type:"read",title:"std::marker::Send documentation",url:"https://doc.rust-lang.org/std/marker/trait.Send.html"}],content:[{heading:"Send: Safe to Transfer Between Threads",body:`**A type is Send if ownership can be safely transferred to another thread.**

**What Send guarantees:**
- The value can be moved (transferred) to another thread without causing undefined behavior
- Almost every type in Rust implements Send automatically
- If all fields of a struct are Send, the struct is automatically Send

**Types that are NOT Send:**
- **Rc<T>** — reference counting is not atomic; two threads incrementing/decrementing the count = data race
- **Raw pointers** (*const T, *mut T) — no safety guarantees
- **MutexGuard<T>** (on some platforms) — must be unlocked on the same thread that locked it

**Why Rc<T> is not Send:**
\`\`\`
use std::rc::Rc;
use std::thread;

let data = Rc::new(42);
thread::spawn(move || {
    println!("{}", data);
    // ERROR: \`Rc<i32>\` cannot be sent between threads safely
});
\`\`\`

**Solution: use Arc<T> instead of Rc<T>** — Arc uses atomic operations for reference counting, making it safe to share across threads.`},{heading:"Sync: Safe to Reference from Multiple Threads",body:`**A type is Sync if &T (an immutable reference) can be safely shared between threads.** Formally: T is Sync if and only if &T is Send.

**What Sync guarantees:**
- Multiple threads can hold immutable references to the value simultaneously
- Reading from multiple threads is safe

**Types that are NOT Sync:**
- **Cell<T>** and **RefCell<T>** — their interior mutability is not thread-safe (no synchronization)
- **Rc<T>** — not Sync for the same reasons it's not Send

**The relationship:**
\`\`\`
// If T: Sync, then &T: Send
// "If I can safely reference it from many threads,
//  then I can safely send a reference to another thread."

// Mutex<T> is Sync (even though T might not be!)
// because Mutex enforces exclusive access
let m = Mutex::new(not_sync_data);
// Multiple threads can hold &Mutex<T> safely —
// they just can't access the inner data simultaneously
\`\`\`

**Summary table:**

| Type | Send? | Sync? | Why |
|---|---|---|---|
| i32, String, Vec<T> | Yes | Yes | No interior mutability |
| Mutex<T> | Yes | Yes | Synchronized access |
| Arc<T> | Yes | Yes (if T: Sync) | Atomic ref counting |
| Rc<T> | No | No | Non-atomic ref counting |
| Cell<T> | Yes | No | Unsynchronized mutation |
| RefCell<T> | Yes | No | Unsynchronized borrow checking |
| *const T | No | No | Raw pointer, no guarantees |`},{heading:"Unsafe impl and Custom Types",body:`**Manually implementing Send or Sync requires unsafe and means you're asserting thread safety guarantees that the compiler can't verify.**

\`\`\`
struct MyWrapper(*mut u8);

// UNSAFE: we're telling the compiler "trust me, this is thread-safe"
unsafe impl Send for MyWrapper {}
unsafe impl Sync for MyWrapper {}
\`\`\`

**When you might need this:**
- FFI wrappers around C libraries with thread-safe APIs
- Lock-free data structures using atomics
- Types containing raw pointers that you know are safe

**Negative implementations (opting out):**
\`\`\`
// Make a type explicitly NOT Send/Sync
impl !Send for MyType {}
impl !Sync for MyType {}
\`\`\`

**The auto-trait rule:** if every field of your struct is Send, your struct is automatically Send. Same for Sync. You almost never need manual implementations.

**Rule of thumb:** if you're writing unsafe impl Send or unsafe impl Sync, you're building a concurrency primitive. Make sure you deeply understand the Rustonomicon's guidelines on what invariants you must uphold.`}],questions:[{q:"Why is Rc<T> neither Send nor Sync, but Arc<T> is both? What's the fundamental difference?",a:"The fundamental difference is atomicity of reference counting. Rc<T> uses regular (non-atomic) increment/decrement operations on its reference count. If two threads clone or drop an Rc simultaneously, they could read-modify-write the count concurrently, causing a data race (count becomes wrong, leading to use-after-free or double-free). Arc<T> uses atomic operations (AtomicUsize) for its reference count, which are hardware-guaranteed to be indivisible even across CPU cores. This makes Arc safe to clone and drop from multiple threads. The tradeoff is performance: atomic operations are slower than regular operations (they require memory barriers/cache coherence), which is why Rust provides both types — use Rc for single-threaded code, Arc for multi-threaded.",hint:"What happens if two threads try to increment Rc's reference count at the same time?",check:l=>{const s=l.toLowerCase();return(s.includes("atomic")||s.includes("atomicusize"))&&(s.includes("reference count")||s.includes("refcount")||s.includes("ref count"))}},{q:"If T is Sync, then &T is Send. Explain why this relationship makes logical sense.",a:"If T is Sync, it means multiple threads can safely hold immutable references (&T) to the value simultaneously — reading from any thread is safe. If &T is Send, it means you can safely transfer an immutable reference to another thread. These are logically equivalent: if it's safe for multiple threads to read a value (Sync), then it must be safe to give a reference to another thread (Send for &T). Conversely, if you can send a reference to another thread, then by definition multiple threads can hold references — which is exactly what Sync means. They're two sides of the same coin: Sync says 'concurrent reading is safe,' and &T: Send says 'you can give read access to another thread.'",hint:"What does it mean for &T to be Send? What does it mean for T to be Sync?",check:l=>{const s=l.toLowerCase();return(s.includes("reference")||s.includes("&t"))&&(s.includes("read")||s.includes("access")||s.includes("share"))}}]},{id:"arc-mutex",icon:"🔗",color:"#D97706",title:"Arc<Mutex<T>> Pattern",subtitle:"The idiomatic pattern for shared mutable state across threads — why Rc fails, why Arc+Mutex works",resources:[{type:"read",title:"The Rust Book — Shared-State Concurrency",url:"https://doc.rust-lang.org/book/ch16-03-shared-state.html"},{type:"read",title:"Rust by Example — Arc",url:"https://doc.rust-lang.org/rust-by-example/std/arc.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Atomics and Memory Ordering",url:"https://www.youtube.com/watch?v=rMGWeSjctlY"}],content:[{heading:"The Problem: Sharing Mutable State",body:`**You need to share a counter (or any mutable state) across 10 threads. Here's how you arrive at Arc<Mutex<T>>.**

**Attempt 1 — Move into multiple closures (fails):**
\`\`\`
let counter = Mutex::new(0);
for _ in 0..10 {
    thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1;
    });
    // ERROR: counter moved in previous iteration
}
\`\`\`
**Problem:** move transfers ownership, but you can only move a value once.

**Attempt 2 — Rc<Mutex<T>> (fails):**
\`\`\`
let counter = Rc::new(Mutex::new(0));
for _ in 0..10 {
    let counter = Rc::clone(&counter);
    thread::spawn(move || { /* ... */ });
    // ERROR: Rc<Mutex<i32>> cannot be sent between threads
}
\`\`\`
**Problem:** Rc is not Send — its non-atomic reference counting is unsafe across threads.

**Attempt 3 — Arc<Mutex<T>> (works!):**
\`\`\`
let counter = Arc::new(Mutex::new(0));
for _ in 0..10 {
    let counter = Arc::clone(&counter);
    thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1;
    });
}
// Result: counter = 10 (correct!)
\`\`\``},{heading:"Complete Arc<Mutex<T>> Example",body:`**A full working example with proper thread joining:**

\`\`\`
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for i in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
            println!("Thread {i} incremented to {}", *num);
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final count: {}", *counter.lock().unwrap());
    // Output: Final count: 10
}
\`\`\`

**Breaking down the types:**

| Layer | Type | Purpose |
|---|---|---|
| Outer | **Arc** | Shared ownership across threads (atomic ref counting) |
| Middle | **Mutex** | Interior mutability with exclusive access (one thread at a time) |
| Inner | **T** | Your actual data |

**Arc provides sharing. Mutex provides mutation. Together: shared mutation.**

**Analogy:** Arc is a key ring with copies of the key (everyone can reach the door). Mutex is the lock on the door (only one person inside at a time). T is the room with your data.`},{heading:"Alternatives and When to Use What",body:`**Arc<Mutex<T>> is the default, but there are better options for specific cases:**

| Pattern | Use When |
|---|---|
| **Arc<Mutex<T>>** | General shared mutable state; balanced reads/writes |
| **Arc<RwLock<T>>** | Read-heavy workloads (95%+ reads) |
| **Arc<AtomicU64>** etc. | Simple counters, flags, or numeric state |
| **Channels (mpsc)** | When you can restructure as message passing |
| **DashMap** (crate) | Concurrent HashMap (better than Arc<Mutex<HashMap>>) |
| **parking_lot::Mutex** | Drop-in replacement, faster than std Mutex (no poisoning) |

**Atomic types for simple state:**
\`\`\`
use std::sync::Arc;
use std::sync::atomic::{AtomicU64, Ordering};

let counter = Arc::new(AtomicU64::new(0));
let c = Arc::clone(&counter);

thread::spawn(move || {
    c.fetch_add(1, Ordering::SeqCst);
});

// No Mutex needed! Atomics are lock-free.
\`\`\`

**Rule of thumb:** use the simplest primitive that solves your problem. Atomic > Mutex > RwLock > Channel (in order of simplicity for simple state).`}],questions:[{q:"Why do you clone the Arc BEFORE the move closure, not inside it? What would happen if you cloned inside?",a:"You clone Arc before the move closure because move transfers ownership of everything the closure captures. If you tried to clone inside the closure, the closure would need to capture the original Arc by move, but the original Arc can only be moved once (into the first thread's closure). The pattern is: let counter_clone = Arc::clone(&counter); then move counter_clone into the closure. Each iteration creates a new clone before the spawn, so each thread gets its own Arc pointing to the same data. The original Arc stays in the outer scope for the next iteration's clone. If you tried to clone inside the closure without first having a clone, you'd get 'value used after move' on the second loop iteration.",hint:"What happens to the original Arc on the second loop iteration if you moved it in the first?",check:l=>{const s=l.toLowerCase();return(s.includes("clone")||s.includes("copy"))&&(s.includes("move")||s.includes("ownership")||s.includes("iteration"))}}]},{id:"rayon-crossbeam",icon:"⚡",color:"#2563EB",title:"Rayon & Crossbeam",subtitle:"Data parallelism with par_iter, scoped threads, improved channels, and the broader concurrency ecosystem",resources:[{type:"read",title:"Rayon documentation",url:"https://docs.rs/rayon/latest/rayon/"},{type:"read",title:"Crossbeam documentation",url:"https://docs.rs/crossbeam/latest/crossbeam/"},{type:"read",title:"Rayon — FAQ and design rationale",url:"https://github.com/rayon-rs/rayon/blob/main/FAQ.md"},{type:"video",title:"Jon Gjengset — The What and How of Futures and async/await",url:"https://www.youtube.com/watch?v=9_3krAQtD2k"}],content:[{heading:"Rayon: Effortless Data Parallelism",body:`**Rayon makes data-parallel programming as easy as changing .iter() to .par_iter().**

\`\`\`
use rayon::prelude::*;

// Sequential
let sum: i64 = (0..1_000_000).sum();

// Parallel — just add par_iter!
let sum: i64 = (0..1_000_000i64)
    .into_par_iter()
    .sum();
\`\`\`

**How Rayon works:**
- Uses a **work-stealing thread pool** (one thread per CPU core by default)
- Automatically splits work into chunks and distributes across threads
- **Guaranteed data-race free** — leverages Rust's type system
- Falls back to sequential execution for small inputs (adaptive granularity)

**Common parallel operations:**
\`\`\`
use rayon::prelude::*;

let data: Vec<i32> = (0..1_000_000).collect();

// Parallel map + filter + collect
let result: Vec<i32> = data
    .par_iter()
    .map(|&x| x * 2)
    .filter(|&x| x % 3 == 0)
    .collect();

// Parallel sort
let mut nums = vec![5, 2, 8, 1, 9];
nums.par_sort();

// Parallel for_each
data.par_iter().for_each(|x| {
    process(x); // Runs in parallel
});

// Parallel fold (reduce)
let total: i32 = data
    .par_iter()
    .fold(|| 0, |acc, &x| acc + x)
    .sum();
\`\`\`

**Performance note:** Rayon only helps for CPU-bound work. For I/O-bound tasks, use async/await (Tokio).`},{heading:"Rayon join() and scope()",body:`**For custom parallelism beyond iterators, use join() and scope().**

**join() — fork-join parallelism:**
\`\`\`
use rayon;

fn fibonacci(n: u32) -> u32 {
    if n <= 1 { return n; }
    let (a, b) = rayon::join(
        || fibonacci(n - 1),
        || fibonacci(n - 2),
    );
    a + b
}
\`\`\`
- Executes two closures potentially in parallel
- Returns when both complete
- The thread pool decides whether to actually parallelize (based on available workers)

**scope() — spawn multiple tasks that can borrow from the parent:**
\`\`\`
let mut results = vec![0; 10];

rayon::scope(|s| {
    for (i, slot) in results.iter_mut().enumerate() {
        s.spawn(move |_| {
            *slot = expensive_computation(i);
        });
    }
}); // All tasks complete before scope exits

println!("{:?}", results);
\`\`\`

**Key advantage of scope():** unlike thread::spawn, scoped tasks can borrow from the parent stack because the scope guarantees all tasks finish before the scope ends.`},{heading:"Crossbeam: Better Channels and Scoped Threads",body:`**Crossbeam provides improved concurrency primitives that go beyond the standard library.**

**Crossbeam channels (better than std::sync::mpsc):**
\`\`\`
use crossbeam_channel::{bounded, unbounded, select};

// Create channels
let (s1, r1) = bounded(10);   // bounded, capacity 10
let (s2, r2) = unbounded();   // unbounded

// Multi-producer, multi-consumer (MPMC!)
// std mpsc is single-consumer; crossbeam supports MPMC

// select! macro — wait on multiple channels
select! {
    recv(r1) -> msg => println!("Channel 1: {:?}", msg),
    recv(r2) -> msg => println!("Channel 2: {:?}", msg),
    default(Duration::from_secs(1)) => println!("timeout!"),
}
\`\`\`

**Crossbeam vs std channels:**

| Feature | std::sync::mpsc | crossbeam-channel |
|---|---|---|
| Consumer model | Single consumer (MPSC) | Multi consumer (MPMC) |
| select! macro | No | Yes |
| Performance | Good | ~2-10x faster |
| Disconnect detection | recv() returns Err | recv() returns Err |
| Timeout | No built-in | Built-in with select! |

**Crossbeam scoped threads:**
\`\`\`
use crossbeam::thread;

let data = vec![1, 2, 3, 4, 5];

crossbeam::scope(|s| {
    for item in &data {
        s.spawn(|_| {
            println!("Processing: {item}");
        });
    }
}).unwrap();
// All threads finished, data still accessible
println!("Data: {:?}", data);
\`\`\`

**Note:** Since Rust 1.63, std::thread::scope provides similar functionality, but crossbeam's version has been available since 2018 and offers additional features.`},{heading:"Ecosystem Overview",body:`**The Rust concurrency ecosystem at a glance:**

| Crate | Purpose | When to Use |
|---|---|---|
| **std::thread** | OS threads, JoinHandle, scoped threads | Basic threading needs |
| **std::sync** | Mutex, RwLock, Arc, mpsc channels | Standard synchronization |
| **rayon** | Data parallelism (par_iter) | CPU-bound parallel computation |
| **crossbeam** | MPMC channels, scoped threads, atomics | Advanced channel patterns |
| **tokio** | Async runtime, I/O, networking | Async/await, network services |
| **parking_lot** | Faster Mutex, RwLock (no poisoning) | Drop-in std::sync replacement |
| **dashmap** | Concurrent HashMap | Shared hash maps across threads |
| **flume** | Fast MPMC channels | Alternative to crossbeam channels |
| **atomic** | Generic atomics for any type | Lock-free data structures |

**Decision flowchart:**
- **CPU-bound parallelism?** → Rayon (par_iter)
- **I/O-bound concurrency?** → Tokio (async/await)
- **Shared mutable state?** → Arc<Mutex<T>> or DashMap
- **Message passing?** → crossbeam channels (MPMC) or std mpsc
- **Simple threading?** → std::thread + scoped threads`}],questions:[{q:"Convert this sequential code to use Rayon for parallelism: let result: Vec<String> = items.iter().map(|x| expensive_transform(x)).filter(|s| s.len() > 10).collect();",a:`Simply change .iter() to .par_iter() and add the rayon prelude import:

use rayon::prelude::*;
let result: Vec<String> = items.par_iter().map(|x| expensive_transform(x)).filter(|s| s.len() > 10).collect();

That's it! Rayon's parallel iterators have the same API as standard iterators. The work-stealing thread pool automatically distributes the map and filter operations across CPU cores. The collect() at the end gathers results in order. The key requirement is that expensive_transform must be Send + Sync (no shared mutable state without synchronization), which Rust's type system enforces at compile time.`,hint:"Rayon's API mirrors std iterators. What's the parallel version of .iter()?",check:l=>{const s=l.toLowerCase();return s.includes("par_iter")&&(s.includes("rayon")||s.includes("prelude"))}},{q:"What is the key difference between crossbeam channels and std::sync::mpsc channels?",a:"The key difference is that crossbeam channels are MPMC (Multi-Producer, Multi-Consumer) while std::sync::mpsc is MPSC (Multi-Producer, Single-Consumer). With std mpsc, only one thread can own the receiver. With crossbeam, you can clone the receiver and have multiple consumer threads reading from the same channel. Additionally, crossbeam provides a select! macro for waiting on multiple channels simultaneously (like Go's select statement), is generally 2-10x faster in benchmarks, and supports timeouts natively. Crossbeam channels also come in bounded and unbounded variants with cleaner APIs.",hint:"What does MPSC stand for? What does crossbeam change about the consumer side?",check:l=>{const s=l.toLowerCase();return(s.includes("mpmc")||s.includes("multi-consumer")||s.includes("multiple consumer"))&&(s.includes("mpsc")||s.includes("single consumer"))}}]}];function _p({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"Not quite. Try again or reveal."}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsx("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:"Check"}),n.jsx("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"Reveal"}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"Hint"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"Correct!"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{children:"Answer"}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function Dp(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=Os.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else{const h=d.startsWith("use ")||d.startsWith("fn ")||d.startsWith("let ")||d.startsWith("    ")||d.startsWith("//")||d.startsWith("thread::")||d.startsWith("println!")||d.startsWith("for ")||d.startsWith("loop")||d.startsWith("match ")||d.startsWith("if ")||d.startsWith("}")||d.startsWith("pub ")||d.startsWith("impl ")||d.startsWith("struct ")||d.startsWith("unsafe ")||d.startsWith("select!")||d.startsWith("crossbeam")||d.startsWith("rayon")||d.startsWith("tx")||d.startsWith("rx")||d.startsWith("nums")||d.startsWith("data")||d.startsWith("drop(")||d.startsWith("handle")||d.startsWith("*")&&d.includes("=")||d.startsWith("counter")||d.startsWith("c.fetch")||d.startsWith("s.spawn")||d.trim().startsWith("a + b"),u=d.startsWith("use ")||d.startsWith("fn ")||d.startsWith("let ")||d.startsWith("//")||d.startsWith("pub ");h?T.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:u?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:u?"6px 6px 0 0":0,marginTop:u?10:0},children:d},`c${m}`)):d===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(d)},`p${m}`)),m++}}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#C2410C!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"RUST CONCURRENCY"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Concurrency Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Fearless concurrency through ownership, threads, channels, shared state, and the Rayon/Crossbeam ecosystem.",n.jsx("br",{}),Os.length," sections · ",F," concepts · ",Os.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #C2410C, #7C3AED, #0891B2, #DC2626, #059669, #D97706, #2563EB)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Os.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:">"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:"Learn"}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:">"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(_p,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics, reading, video."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=Rp[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Ownership + Send/Sync = fearless concurrency. Threads, channels, Mutex, Arc, Rayon, Crossbeam \\u2014 pick the right tool for the job."})]})}const Ep={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ps=[{id:"closure-syntax",icon:"🎯",color:"#7C3AED",title:"Closure Syntax & Type Inference",subtitle:"Anonymous functions that capture their environment — syntax variations, type inference rules, and how closures differ from functions",resources:[{type:"read",title:"The Rust Book — Closures (Ch. 13.1)",url:"https://doc.rust-lang.org/book/ch13-01-closures.html"},{type:"read",title:"Rust by Example — Closures",url:"https://doc.rust-lang.org/rust-by-example/fn/closures.html"},{type:"video",title:"Let's Get Rusty — Closures in Rust",url:"https://www.youtube.com/watch?v=dHkzSZnYXmk"}],content:[{heading:"Closure Syntax Variations",body:`**Closures use pipes || instead of parentheses () for parameters. Type annotations are optional.**

\`\`\`
// Full function (for comparison)
fn add_one(x: u32) -> u32 { x + 1 }

// Fully annotated closure
let add_one = |x: u32| -> u32 { x + 1 };

// Type-inferred closure
let add_one = |x| { x + 1 };

// Single-expression (no braces needed)
let add_one = |x| x + 1;

// No parameters
let greet = || println!("hello!");

// Multiple parameters
let add = |a, b| a + b;
\`\`\`

**Key syntax elements:**
- **|params|** — pipe-delimited parameter list
- Type annotations are optional (inferred from first use)
- Braces are optional for single expressions
- Closures are values — stored in variables, passed as arguments, returned from functions`},{heading:"Type Inference Rules",body:`**The compiler infers one concrete type per parameter from the first call. Subsequent calls must match.**

\`\`\`
let identity = |x| x;

let s = identity(String::from("hi")); // Infers x: String
let n = identity(42);                 // ERROR: expected String, got i32
\`\`\`

**Why closures don't need type annotations but functions do:**
- Functions are part of your public API — explicit types serve as documentation
- Closures are typically short-lived, used in a narrow context where types are obvious
- The compiler can infer types from how the closure is used

**Closures vs functions:**

| Feature | Functions | Closures |
|---|---|---|
| Syntax | fn name(params) -> ret | \\|params\\| body |
| Type annotations | Required | Optional (inferred) |
| Capture environment | No | Yes |
| Store in variable | Via function pointer | Direct value |
| Trait | fn(T) -> U | Fn/FnMut/FnOnce |
| Generic over | Explicit <T> | Inferred |
| Recursive | Yes | Not directly (need fn or combinator) |`},{heading:"Closures vs Lambdas in Other Languages",body:`**Every modern language has closures/lambdas. Rust's are unique because of ownership semantics.**

| Language | Syntax | Capture | Ownership | Zero-Cost |
|---|---|---|---|---|
| **Rust** | \\|x\\| x + 1 | By ref, mut ref, or move | Tracked by compiler | Yes |
| **C++** | [&](int x){ return x+1; } | Explicit [=], [&], [var] | Manual (dangling risk) | Yes |
| **Go** | func(x int) int { return x+1 } | Implicit by reference | GC managed | No |
| **Python** | lambda x: x + 1 | Implicit by reference | GC managed | No |
| **Java** | (x) -> x + 1 | Effectively final only | GC managed | No |
| **JavaScript** | (x) => x + 1 | Implicit by reference | GC managed | No |
| **Swift** | { x in x + 1 } | Implicit by reference | ARC managed | Partial |

**Rust's advantages:**
- **No garbage collector** — closures are stack-allocated by default
- **Compile-time capture tracking** — the compiler knows exactly what's captured and how
- **Zero-cost** — closures compile to the same code as hand-written structs with methods
- **Move semantics** — transfer ownership into closures for thread safety

**C++ is the closest comparison.** Both have zero-cost closures, but C++ capture lists ([&], [=]) can create dangling references. Rust's borrow checker prevents this at compile time.`}],questions:[{q:"Write the most concise closure that takes two i32 values and returns their product.",a:"The most concise form is: |a, b| a * b. No type annotations needed (inferred from usage), no braces needed (single expression), and the return is implicit. If you needed to be explicit: |a: i32, b: i32| -> i32 { a * b }. Both are valid; Rust's closure syntax is designed for brevity while remaining readable.",hint:"Single-expression closures don't need braces or explicit return.",check:l=>{const s=l.replace(/\s+/g,"");return s.includes("|a,b|a*b")||s.includes("|x,y|x*y")||s.includes("|a,b|a*b;")}},{q:'Why does this code fail? let f = |x| x; let a = f("hi"); let b = f(42);',a:`The first call f("hi") causes the compiler to infer x as &str. The closure's type is now locked: it takes &str and returns &str. The second call f(42) tries to pass an i32, which doesn't match the inferred type. Rust closures are monomorphic — they get one concrete type, not generic types. Unlike a generic function fn f<T>(x: T) -> T, closures infer a single concrete type from first use. If you need a generic closure-like behavior, use a generic function instead.`,hint:"What type does the compiler infer for x after the first call?",check:l=>{const s=l.toLowerCase();return(s.includes("infer")||s.includes("type"))&&(s.includes("first")||s.includes("concrete")||s.includes("monomorphic")||s.includes("locked"))}}]},{id:"fn-traits",icon:"🔄",color:"#C2410C",title:"Fn, FnMut, FnOnce Traits",subtitle:"How closures capture their environment — by reference, mutable reference, or ownership — and the trait hierarchy",resources:[{type:"read",title:"The Rust Book — Closure traits (Ch. 13.1)",url:"https://doc.rust-lang.org/book/ch13-01-closures.html"},{type:"read",title:"Rust Reference — Closure types",url:"https://doc.rust-lang.org/reference/types/closure.html"},{type:"video",title:"Jon Gjengset — Crust of Rust: Fn traits",url:"https://www.youtube.com/watch?v=dHkzSZnYXmk"},{type:"read",title:"Rustonomicon — Closures and Higher-Ranked Trait Bounds",url:"https://doc.rust-lang.org/nomicon/hrtb.html"}],content:[{heading:"Three Capture Modes",body:`**Closures capture values from their environment in three ways, matching Rust's borrowing rules:**

**1. Immutable borrow (&T) — implements Fn:**
\`\`\`
let name = String::from("Rust");
let greet = || println!("Hello, {name}!");
greet();      // OK
greet();      // OK — can call multiple times
println!("{name}"); // OK — name still accessible
\`\`\`

**2. Mutable borrow (&mut T) — implements FnMut:**
\`\`\`
let mut count = 0;
let mut increment = || { count += 1; };
increment();  // count = 1
increment();  // count = 2
// Can't use count while closure exists (exclusive borrow)
\`\`\`

**3. Take ownership (move) — implements FnOnce:**
\`\`\`
let name = String::from("Rust");
let consume = move || {
    let s = name; // Takes ownership
    println!("Consumed: {s}");
};
consume();    // OK
// consume(); // ERROR if closure moves captured value out
// name is no longer accessible
\`\`\`

**The compiler automatically picks the least restrictive mode.** It prefers &T, then &mut T, then move. You can force move with the \`move\` keyword.`},{heading:"The Trait Hierarchy",body:`**FnOnce, FnMut, and Fn form a hierarchy. Every Fn is also FnMut, and every FnMut is also FnOnce.**

\`\`\`
FnOnce       ← All closures implement this (can be called at least once)
  └─ FnMut    ← Closures that don't move values out (can be called many times)
      └─ Fn   ← Closures that don't mutate captures (safe for concurrent use)
\`\`\`

**The trait definitions (simplified):**
\`\`\`
pub trait FnOnce<Args> {
    type Output;
    fn call_once(self, args: Args) -> Self::Output;
    //           ^^^^ takes self by value
}

pub trait FnMut<Args>: FnOnce<Args> {
    fn call_mut(&mut self, args: Args) -> Self::Output;
    //          ^^^^^^^^^ takes self by mutable reference
}

pub trait Fn<Args>: FnMut<Args> {
    fn call(&self, args: Args) -> Self::Output;
    //      ^^^^^ takes self by shared reference
}
\`\`\`

**Practical impact — which trait to use in function signatures:**

| Trait | Meaning | When to Use |
|---|---|---|
| **FnOnce** | Might consume captured values | Accept any closure; call it once |
| **FnMut** | May mutate captures, callable many times | Callbacks, iterators |
| **Fn** | Pure read, callable many times, thread-safe | Event handlers, concurrent code |

**Rule of thumb:** use the most general trait your code allows. Prefer Fn > FnMut > FnOnce to give callers maximum flexibility.`},{heading:"move Keyword vs Fn Traits",body:`**Common misconception: move and FnOnce are NOT the same thing.**

- **move** controls HOW values are captured (by value instead of by reference)
- **FnOnce/FnMut/Fn** describes HOW the closure uses captured values

**A move closure can still implement Fn:**
\`\`\`
let name = String::from("Rust");

// move forces capture by value, but the closure
// only reads \`name\` — so it implements Fn
let greet = move || println!("Hello, {name}!");
greet();  // OK
greet();  // OK — still Fn, can call many times
\`\`\`

**When move + FnOnce actually happens:**
\`\`\`
let name = String::from("Rust");
let consume = move || {
    drop(name); // Moves name OUT of the closure
};
consume();    // OK
// consume(); // ERROR: closure implements FnOnce, not Fn
\`\`\`

**Key distinction:**
- **move** = "take ownership of variables from the environment"
- **FnOnce** = "this closure destroys/consumes a captured value when called"
- A move closure that only reads its captures is Fn (can be called many times)
- A move closure that drops/moves a capture out is FnOnce (called once)`}],questions:[{q:"Given this code, which Fn trait does the closure implement? let mut total = 0; let mut add = |x: i32| { total += x; };",a:"The closure implements FnMut (and therefore also FnOnce, since FnMut: FnOnce). It captures total by mutable reference (&mut total) because it modifies total with +=. It doesn't implement Fn because Fn requires only immutable capture. It's not limited to FnOnce because it doesn't move total out of the closure — it just mutates it in place, which can be done multiple times.",hint:"What kind of borrow does += require?",check:l=>{const s=l.toLowerCase();return s.includes("fnmut")||s.includes("fn_mut")||s.includes("fn mut")}},{q:'Why does move || println!("{name}") implement Fn and not just FnOnce? The closure owns name via move.',a:"Because the closure only reads name (via println!), it never moves name out of the closure body. The move keyword transfers ownership into the closure, but the closure's Fn trait is determined by what it does with the captured value, not how it captured it. Since println! only borrows name immutably, the closure can be called multiple times without consuming anything — making it Fn. It would only be FnOnce if the body did something like drop(name) or let x = name; which moves name out of the closure. move affects capture semantics; Fn/FnMut/FnOnce affect call semantics.",hint:"Does println! consume its arguments or just borrow them?",check:l=>{const s=l.toLowerCase();return(s.includes("read")||s.includes("borrow")||s.includes("println"))&&(s.includes("not consume")||s.includes("doesn't consume")||s.includes("doesn't move")||s.includes("not move")||s.includes("only read"))}},{q:"When writing a function that accepts a closure, should you use Fn, FnMut, or FnOnce as the trait bound? What's the tradeoff?",a:"Use the most general (least restrictive) trait your code actually needs: (1) Use FnOnce if your function only calls the closure once — this accepts ALL closures (maximum flexibility for callers). (2) Use FnMut if you call the closure multiple times and your code can handle mutation. (3) Use Fn if you need the closure to be callable concurrently or multiple times without mutation. The tradeoff: more specific traits (Fn) give you more guarantees but accept fewer closures. More general traits (FnOnce) accept more closures but give fewer guarantees. Example: Iterator::map uses FnMut (called many times, mutation OK). thread::spawn uses FnOnce + Send (called once, must be thread-safe).",hint:"Think about it from the caller's perspective — which trait accepts the widest range of closures?",check:l=>{const s=l.toLowerCase();return(s.includes("general")||s.includes("least restrictive")||s.includes("widest")||s.includes("flexible"))&&(s.includes("fnonce")||s.includes("fn_once"))}}]},{id:"closure-params",icon:"📦",color:"#0891B2",title:"Closures as Parameters & Return Values",subtitle:"Passing closures to functions, returning closures with impl Fn, and dynamic dispatch with Box<dyn Fn>",resources:[{type:"read",title:"The Rust Book — Closures as parameters",url:"https://doc.rust-lang.org/book/ch13-01-closures.html"},{type:"read",title:"Rust by Example — As input parameters",url:"https://doc.rust-lang.org/rust-by-example/fn/closures/input_parameters.html"},{type:"read",title:"Rust by Example — As output parameters",url:"https://doc.rust-lang.org/rust-by-example/fn/closures/output_parameters.html"}],content:[{heading:"Closures as Function Parameters",body:`**Use generics with Fn trait bounds to accept closures as parameters.**

\`\`\`
// Generic — monomorphized at compile time (zero-cost)
fn apply<F: Fn(i32) -> i32>(f: F, x: i32) -> i32 {
    f(x)
}

// Equivalent with where clause
fn apply<F>(f: F, x: i32) -> i32
where
    F: Fn(i32) -> i32,
{
    f(x)
}

// Usage
let double = |x| x * 2;
let result = apply(double, 5); // 10
\`\`\`

**Three ways to accept closures:**

| Syntax | Dispatch | Overhead | Use When |
|---|---|---|---|
| **F: Fn(T) -> U** | Static (monomorphized) | Zero | Performance-critical code |
| **&dyn Fn(T) -> U** | Dynamic (vtable) | Small | Heterogeneous closure collection |
| **Box<dyn Fn(T) -> U>** | Dynamic (heap) | Allocation + vtable | Storing closures, returning closures |

**Static dispatch is preferred** — the compiler generates specialized code for each closure type, identical to manually inlined code.`},{heading:"Returning Closures from Functions",body:`**Closures have unique anonymous types, so you can't name them directly. Use impl Fn or Box<dyn Fn>.**

**With impl Fn (stack-allocated, zero-cost):**
\`\`\`
fn make_adder(n: i32) -> impl Fn(i32) -> i32 {
    move |x| x + n
}

let add5 = make_adder(5);
println!("{}", add5(3)); // 8
\`\`\`

**With Box<dyn Fn> (heap-allocated, for dynamic dispatch):**
\`\`\`
fn make_op(op: &str) -> Box<dyn Fn(i32, i32) -> i32> {
    match op {
        "add" => Box::new(|a, b| a + b),
        "mul" => Box::new(|a, b| a * b),
        _     => Box::new(|a, b| a - b),
    }
}

let op = make_op("add");
println!("{}", op(3, 4)); // 7
\`\`\`

**When to use each:**
- **impl Fn** — when the function always returns the same closure type (one branch)
- **Box<dyn Fn>** — when different branches return different closures (multiple types)
- **impl Fn** is preferred when possible — no heap allocation

**Why move is needed:** the closure captures n from make_adder's stack. Without move, n would be a dangling reference after make_adder returns. move transfers ownership into the closure.`},{heading:"Function Pointers vs Closures",body:`**Function pointers (fn) and closures (Fn/FnMut/FnOnce) are related but different.**

\`\`\`
// Function pointer type
fn add_one(x: i32) -> i32 { x + 1 }
let f: fn(i32) -> i32 = add_one;

// Closure (different type!)
let g = |x: i32| x + 1;
\`\`\`

**Key differences:**

| Feature | fn pointer | Closure (Fn) |
|---|---|---|
| Captures environment | No | Yes |
| Type | fn(T) -> U (concrete) | Anonymous (impl Fn) |
| Size | Exactly 1 pointer (8 bytes) | Variable (depends on captures) |
| Trait impl | Implements Fn, FnMut, FnOnce | Implements appropriate trait |
| FFI compatible | Yes (C function pointers) | No (not repr-compatible) |

**Function pointers implement all three Fn traits.** So wherever a Fn/FnMut/FnOnce is expected, you can pass a regular function:

\`\`\`
let nums: Vec<i32> = vec![1, 2, 3];

// Closure works
let doubled: Vec<i32> = nums.iter().map(|&x| x * 2).collect();

// Function pointer also works!
fn double(x: &i32) -> i32 { x * 2 }
let doubled: Vec<i32> = nums.iter().map(double).collect();
\`\`\`

**Use function pointers for FFI** (calling C code) and when no environment capture is needed.`}],questions:[{q:"Why can't you return a closure directly like fn make() -> |i32| -> i32? Why do you need impl Fn or Box<dyn Fn>?",a:"Every closure has a unique anonymous type generated by the compiler — there's no way to write its name in a type signature. The type |i32| -> i32 is not valid Rust syntax for a type. impl Fn(i32) -> i32 uses Rust's opaque return types to say 'I return some type that implements Fn(i32) -> i32' without naming it. Box<dyn Fn(i32) -> i32> uses dynamic dispatch (trait object) to erase the concrete type at the cost of a heap allocation and vtable lookup. You need one of these mechanisms because Rust must know the return type's size at compile time, and 'some anonymous closure' doesn't provide that without impl or Box.",hint:"What does the compiler need to know about return types? (Hint: size)",check:l=>{const s=l.toLowerCase();return(s.includes("anonymous")||s.includes("unique type")||s.includes("no name"))&&(s.includes("size")||s.includes("impl")||s.includes("opaque"))}},{q:"When should you prefer &dyn Fn over Box<dyn Fn> for accepting closures?",a:"Use &dyn Fn when you only need to borrow the closure temporarily (e.g., calling it within a function and not storing it). This avoids heap allocation — the closure stays on the caller's stack. Use Box<dyn Fn> when you need to own the closure and store it (e.g., in a struct field, returning it from a function, or putting it in a collection). Box allocates on the heap. The tradeoff: &dyn Fn has zero allocation overhead but can't be stored long-term; Box<dyn Fn> has allocation cost but can be owned and moved. In practice, prefer generic F: Fn(...) when possible (zero-cost, monomorphized), then &dyn Fn, then Box<dyn Fn>.",hint:"Think about ownership: who needs to own the closure?",check:l=>{const s=l.toLowerCase();return(s.includes("borrow")||s.includes("temporary")||s.includes("stack"))&&(s.includes("heap")||s.includes("own")||s.includes("store"))}}]},{id:"iterators",icon:"🌀",color:"#059669",title:"Iterator Methods",subtitle:"map, filter, fold, flat_map, scan, zip, chain, enumerate — the full iterator toolkit with lazy evaluation",resources:[{type:"read",title:"The Rust Book — Iterators (Ch. 13.2)",url:"https://doc.rust-lang.org/book/ch13-02-iterators.html"},{type:"read",title:"std::iter::Iterator — full method list",url:"https://doc.rust-lang.org/std/iter/trait.Iterator.html"},{type:"video",title:"Let's Get Rusty — Iterators in Rust",url:"https://www.youtube.com/watch?v=4GcKrj4By8s"},{type:"read",title:"Rust by Example — Iterators",url:"https://doc.rust-lang.org/rust-by-example/trait/iter.html"}],content:[{heading:"The Iterator Trait and Laziness",body:`**All iterators implement the Iterator trait. They are lazy — no work happens until you consume them.**

\`\`\`
pub trait Iterator {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
    // 75+ provided methods...
}
\`\`\`

**Three ways to create iterators:**

| Method | Yields | Use Case |
|---|---|---|
| **.iter()** | &T (immutable references) | Read-only access |
| **.iter_mut()** | &mut T (mutable references) | Modify elements in-place |
| **.into_iter()** | T (owned values) | Consume the collection |

**Laziness example:**
\`\`\`
let v = vec![1, 2, 3];
v.iter().map(|x| x * 2); // WARNING: unused — nothing happens!

// Must consume with collect, sum, for_each, etc.
let doubled: Vec<i32> = v.iter().map(|x| x * 2).collect();
\`\`\``},{heading:"Essential Adaptor Methods",body:`**Adaptor methods transform iterators without consuming them. Chain them freely.**

\`\`\`
let data = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map — transform each element
let squares: Vec<i32> = data.iter().map(|&x| x * x).collect();
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// filter — keep elements matching predicate
let evens: Vec<&i32> = data.iter().filter(|&&x| x % 2 == 0).collect();
// [2, 4, 6, 8, 10]

// enumerate — add index
for (i, val) in data.iter().enumerate() {
    println!("{i}: {val}");
}

// zip — pair two iterators
let names = vec!["Alice", "Bob"];
let ages = vec![30, 25];
let pairs: Vec<_> = names.iter().zip(ages.iter()).collect();
// [("Alice", 30), ("Bob", 25)]

// chain — concatenate iterators
let a = vec![1, 2];
let b = vec![3, 4];
let all: Vec<&i32> = a.iter().chain(b.iter()).collect();
// [1, 2, 3, 4]

// take / skip
let first3: Vec<&i32> = data.iter().take(3).collect(); // [1, 2, 3]
let after3: Vec<&i32> = data.iter().skip(3).collect();  // [4..10]

// flat_map — map + flatten
let words = vec!["hello world", "foo bar"];
let chars: Vec<&str> = words.iter()
    .flat_map(|s| s.split_whitespace())
    .collect();
// ["hello", "world", "foo", "bar"]
\`\`\``},{heading:"Consuming Methods (fold, sum, collect)",body:`**Consuming methods call next() until the iterator is exhausted. You can't reuse the iterator after.**

\`\`\`
let nums = vec![1, 2, 3, 4, 5];

// sum — add all elements
let total: i32 = nums.iter().sum(); // 15

// fold — accumulate with initial value (most general)
let total = nums.iter().fold(0, |acc, &x| acc + x); // 15
let product = nums.iter().fold(1, |acc, &x| acc * x); // 120

// collect — gather into any collection
let set: HashSet<i32> = nums.iter().copied().collect();
let string: String = vec!['h','e','l','l','o'].into_iter().collect();

// any / all — boolean tests
let has_even = nums.iter().any(|&x| x % 2 == 0); // true
let all_pos = nums.iter().all(|&x| x > 0);       // true

// find — first matching element
let first_even = nums.iter().find(|&&x| x % 2 == 0); // Some(&2)

// count
let n = nums.iter().count(); // 5

// min / max
let smallest = nums.iter().min(); // Some(&1)
\`\`\`

**fold is the most powerful consumer.** Every other consumer (sum, product, any, all) can be implemented with fold.`},{heading:"scan, window, and Advanced Patterns",body:`**Advanced iterator methods for stateful transformations and complex patterns.**

**scan — fold that yields intermediate results:**
\`\`\`
let nums = vec![1, 2, 3, 4, 5];
let running_sum: Vec<i32> = nums.iter()
    .scan(0, |state, &x| {
        *state += x;
        Some(*state)
    })
    .collect();
// [1, 3, 6, 10, 15] — cumulative sum
\`\`\`

**windows / chunks (on slices, not Iterator trait):**
\`\`\`
let data = [1, 2, 3, 4, 5];

// Sliding window of size 3
for w in data.windows(3) {
    println!("{:?}", w); // [1,2,3], [2,3,4], [3,4,5]
}

// Non-overlapping chunks
for c in data.chunks(2) {
    println!("{:?}", c); // [1,2], [3,4], [5]
}
\`\`\`

**peekable — look ahead without consuming:**
\`\`\`
let mut iter = vec![1, 2, 3].into_iter().peekable();
assert_eq!(iter.peek(), Some(&1)); // Look without consuming
assert_eq!(iter.next(), Some(1));  // Now consume
\`\`\`

**Chaining pattern — complex transformations stay readable:**
\`\`\`
let result: Vec<String> = input
    .lines()
    .filter(|line| !line.is_empty())
    .map(|line| line.trim())
    .filter(|line| !line.starts_with('#'))
    .enumerate()
    .map(|(i, line)| format!("{}: {}", i + 1, line))
    .collect();
\`\`\``}],questions:[{q:"What is the difference between fold and scan? When would you use each?",a:"fold consumes the entire iterator and returns a single final value (e.g., the total sum). scan is like fold but yields each intermediate accumulator state as a new iterator element. Use fold when you need one final result (total, product, concatenated string). Use scan when you need all intermediate results (running sum, cumulative product, state history). scan returns an iterator, so it can be chained further; fold returns a single value and terminates the chain. Example: fold gives you 15 (total), scan gives you [1, 3, 6, 10, 15] (each partial sum).",hint:"Does fold return one value or many? What about scan?",check:l=>{const s=l.toLowerCase();return(s.includes("intermediate")||s.includes("partial")||s.includes("running"))&&(s.includes("final")||s.includes("single")||s.includes("one value"))}},{q:"Why are Rust iterators lazy? What advantage does this provide over eager evaluation (like Python list comprehensions)?",a:"Rust iterators are lazy because they don't perform any computation until a consuming method (collect, sum, for_each) is called. This provides several advantages: (1) No intermediate allocations — a chain like .map().filter().map() doesn't create intermediate vectors; each element flows through the entire pipeline. (2) Short-circuiting — methods like find, any, take stop processing as soon as the result is known. (3) Infinite iterators — you can create (0..).map(|x| x*x).take(10) which would be impossible with eager evaluation. (4) Composability — you can build up iterator chains and pass them around without triggering computation. Python list comprehensions create intermediate lists at each step, consuming O(n) memory per step.",hint:"What happens to memory when you chain three eager operations on a million-element list?",check:l=>{const s=l.toLowerCase();return(s.includes("intermediate")||s.includes("allocation")||s.includes("memory"))&&(s.includes("lazy")||s.includes("consum"))}}]},{id:"fp-patterns",icon:"🏗️",color:"#DC2626",title:"Functional Patterns",subtitle:"Combinator, builder, chain, and Option/Result method chaining — idiomatic functional Rust",resources:[{type:"read",title:"Rust Design Patterns — Functional Programming",url:"https://rust-unofficial.github.io/patterns/functional/index.html"},{type:"read",title:"Rust by Example — Higher Order Functions",url:"https://doc.rust-lang.org/rust-by-example/fn/hof.html"},{type:"read",title:"Rust Error Handling — Combinators on Result and Option",url:"https://doc.rust-lang.org/rust-by-example/error/option_unwrap.html"}],content:[{heading:"Option/Result Combinators",body:`**Rust's Option<T> and Result<T,E> have rich combinator methods that replace if/else chains.**

\`\`\`
// Instead of nested match/if
let port: u16 = std::env::var("PORT")
    .ok()                          // Result -> Option
    .and_then(|s| s.parse().ok())  // Try parsing
    .unwrap_or(8080);              // Default value

// map — transform the inner value
let len: Option<usize> = Some("hello").map(|s| s.len()); // Some(5)

// and_then (flatmap) — chain operations that might fail
fn parse_age(s: &str) -> Option<u32> {
    s.parse::<u32>().ok().and_then(|age| {
        if age > 0 && age < 150 { Some(age) } else { None }
    })
}

// unwrap_or_else — lazy default
let config = load_config().unwrap_or_else(|| Config::default());

// The ? operator — early return on None/Err
fn get_user_email(id: u64) -> Option<String> {
    let user = find_user(id)?;    // Returns None if not found
    let email = user.email()?;    // Returns None if no email
    Some(email.to_lowercase())
}
\`\`\`

**Common combinator chains:**

| Method | On Option | On Result | Purpose |
|---|---|---|---|
| **map** | Some(x) -> Some(f(x)) | Ok(x) -> Ok(f(x)) | Transform inner value |
| **and_then** | Some(x) -> f(x) | Ok(x) -> f(x) | Chain fallible ops |
| **unwrap_or** | Some(x)/None -> x/default | Ok(x)/Err(_) -> x/default | Provide default |
| **filter** | Keep if predicate true | N/A | Conditional keep |
| **or** | First Some wins | First Ok wins | Fallback |
| **?** | Return None early | Return Err early | Error propagation |`},{heading:"Builder Pattern with Closures",body:`**The builder pattern uses method chaining (fluent interface) with closures for flexible configuration.**

\`\`\`
struct QueryBuilder {
    table: String,
    filters: Vec<Box<dyn Fn(&Row) -> bool>>,
    limit: Option<usize>,
    order_by: Option<String>,
}

impl QueryBuilder {
    fn new(table: &str) -> Self {
        Self {
            table: table.to_string(),
            filters: vec![],
            limit: None,
            order_by: None,
        }
    }

    fn filter(mut self, f: impl Fn(&Row) -> bool + 'static) -> Self {
        self.filters.push(Box::new(f));
        self // Return self for chaining
    }

    fn limit(mut self, n: usize) -> Self {
        self.limit = Some(n);
        self
    }

    fn order_by(mut self, col: &str) -> Self {
        self.order_by = Some(col.to_string());
        self
    }

    fn execute(self) -> Vec<Row> { /* ... */ }
}

// Usage — fluent, readable chain
let results = QueryBuilder::new("users")
    .filter(|r| r.age > 18)
    .filter(|r| r.active)
    .order_by("name")
    .limit(100)
    .execute();
\`\`\`

**Why this is idiomatic Rust:** each method takes self by value and returns Self, allowing natural chaining while enforcing that the builder is consumed (moved) by execute().`},{heading:"Functional Composition and Pipelines",body:`**Rust doesn't have a pipe operator (like |> in Elixir), but iterator chains and method chaining achieve the same effect.**

**Iterator pipeline (data transformation):**
\`\`\`
// Process log lines: parse, filter, aggregate
let error_counts: HashMap<String, usize> = log_lines
    .iter()
    .filter_map(|line| parse_log_entry(line).ok())
    .filter(|entry| entry.level == Level::Error)
    .fold(HashMap::new(), |mut map, entry| {
        *map.entry(entry.source.clone()).or_insert(0) += 1;
        map
    });
\`\`\`

**Function composition with closures:**
\`\`\`
fn compose<A, B, C>(
    f: impl Fn(A) -> B,
    g: impl Fn(B) -> C,
) -> impl Fn(A) -> C {
    move |x| g(f(x))
}

let double_then_add1 = compose(|x: i32| x * 2, |x| x + 1);
assert_eq!(double_then_add1(5), 11); // (5 * 2) + 1
\`\`\`

**Pattern: tap (inspect without modifying):**
\`\`\`
let result: Vec<i32> = data.iter()
    .map(|x| x * 2)
    .inspect(|x| println!("after double: {x}")) // Debug tap
    .filter(|x| x > &10)
    .inspect(|x| println!("after filter: {x}"))
    .collect();
\`\`\`

**inspect() is the Rust equivalent of tap/peek in other FP languages — it lets you observe values flowing through a pipeline without modifying them.**`}],questions:[{q:"Rewrite this nested match using Option combinators: match get_user(id) { Some(u) => match u.email { Some(e) => Some(e.to_lowercase()), None => None }, None => None }",a:"get_user(id).and_then(|u| u.email).map(|e| e.to_lowercase()) — or even simpler with the ? operator in a function: let email = get_user(id)?.email?; Some(email.to_lowercase()). The and_then combinator handles the Option<Option<T>> flattening (if get_user returns Some, then check u.email), and map transforms the inner value. This is more readable, less nested, and idiomatic Rust.",hint:"and_then flattens Option<Option<T>> to Option<T>. map transforms the inner value.",check:l=>{const s=l.toLowerCase().replace(/\s+/g,"");return s.includes("and_then")||s.includes("?")}}]},{id:"performance",icon:"⚡",color:"#D97706",title:"Performance: Zero-Cost Abstractions",subtitle:"Why Rust closures and iterators compile to the same code as hand-written loops — benchmarks and proof",resources:[{type:"read",title:"The Rust Book — Performance comparison (Ch. 13.4)",url:"https://doc.rust-lang.org/book/ch13-04-performance.html"},{type:"read",title:"Rust Blog — Abstraction without overhead",url:"https://blog.rust-lang.org/2015/05/11/traits.html"},{type:"video",title:"Rust: zero-cost abstractions explained",url:"https://www.youtube.com/watch?v=A3AdN7U24iU"},{type:"read",title:"Godbolt Compiler Explorer — see Rust assembly",url:"https://godbolt.org/"}],content:[{heading:"The Zero-Cost Promise",body:`**Bjarne Stroustrup's zero-cost abstraction principle: "What you don't use, you don't pay for. What you do use, you couldn't hand-code any better."**

**Rust closures are zero-cost.** The compiler generates a unique anonymous struct for each closure, storing captures as fields, and implements the appropriate Fn trait. At compile time, all closure calls are monomorphized and inlined.

\`\`\`
// This closure:
let offset = 10;
let add = |x: i32| x + offset;

// Compiles to essentially this struct + impl:
struct AddClosure { offset: i32 }
impl Fn(i32) -> i32 for AddClosure {
    fn call(&self, x: i32) -> i32 { x + self.offset }
}
\`\`\`

**No heap allocation. No vtable. No runtime overhead.** The closure is stack-allocated and fully inlined.

**Compare with other languages:**

| Language | Closure Cost | Why |
|---|---|---|
| **Rust** | Zero (stack struct) | Monomorphized, inlined |
| **C++** | Zero (similar to Rust) | Compiler optimizes similarly |
| **Go** | Heap allocation possible | GC-managed captures |
| **Java** | Object allocation | Lambda = anonymous class instance |
| **Python** | Object + dict | Everything is a heap object |
| **JavaScript** | Closure object | V8 optimizes hot paths |`},{heading:"Iterators vs Hand-Written Loops",body:`**The Rust Book proves that iterator chains compile to identical assembly as manual for loops.**

\`\`\`
// Iterator chain
let sum: i32 = v.iter()
    .map(|&x| x * 2)
    .filter(|&x| x > 10)
    .sum();

// Hand-written loop (same performance!)
let mut sum = 0;
for &x in &v {
    let doubled = x * 2;
    if doubled > 10 {
        sum += doubled;
    }
}
\`\`\`

**Both compile to identical machine code.** The compiler:
1. Inlines all closure calls
2. Eliminates the iterator state machine
3. Produces a tight loop with no function call overhead

**Benchmark from the Rust Book:** An audio decoder using iterators was within 0% of the hand-written C-style loop version. The iterator version was actually slightly faster due to LLVM auto-vectorization (SIMD) being easier to apply to the functional style.

**Why iterators can be FASTER than loops:**
- The compiler can prove there are no aliasing/side-effects, enabling aggressive optimization
- Iterator chains expose parallelism opportunities
- No bounds checking (iterators know their length)
- LLVM can auto-vectorize iterator chains more easily than complex loop bodies`},{heading:"When Abstractions Have Cost",body:`**Not everything is zero-cost. Know where the overhead hides.**

**These have runtime cost:**
- **Box<dyn Fn>** — heap allocation + vtable indirection (dynamic dispatch)
- **trait objects** (dyn Trait) — vtable lookup on every call
- **collect()** — allocates a new collection (necessary, not waste)
- **clone()** — deep copy (use references or Cow<T> instead)
- **String formatting** — format!() allocates; write!() to a buffer doesn't

**Measuring performance:**
\`\`\`
// Use criterion for benchmarking (not std::time::Instant)
// Cargo.toml: criterion = "0.5"

use criterion::{criterion_group, criterion_main, Criterion};

fn bench_iterator(c: &mut Criterion) {
    let data: Vec<i32> = (0..10_000).collect();
    c.bench_function("iterator", |b| {
        b.iter(|| {
            data.iter().map(|&x| x * 2).filter(|&x| x > 100).sum::<i32>()
        })
    });
}
\`\`\`

**Rules of thumb:**
1. **Prefer static dispatch** (generics) over dynamic dispatch (dyn)
2. **Avoid unnecessary allocations** — use &str instead of String, &[T] instead of Vec<T>
3. **Profile before optimizing** — use cargo flamegraph, criterion, perf
4. **Trust the compiler** — Rust + LLVM optimizations are remarkably good`}],questions:[{q:"If closures are zero-cost, when would using closures actually be slower than a manual implementation?",a:"Closures are zero-cost when used with static dispatch (generics, impl Fn). They have cost when used with dynamic dispatch: Box<dyn Fn> requires heap allocation and vtable lookup on every call; &dyn Fn requires vtable lookup (no allocation). Additionally, capturing large structs by value (move) may involve copying large amounts of data into the closure struct. Very deep closure chains might also increase compile time and binary size due to monomorphization (each unique closure type generates its own code). In practice, the performance difference between static and dynamic dispatch is small (nanoseconds per call), but it matters in tight loops called millions of times.",hint:"Think about Box<dyn Fn> vs impl Fn. What's the difference at runtime?",check:l=>{const s=l.toLowerCase();return(s.includes("dynamic")||s.includes("dyn")||s.includes("box"))&&(s.includes("vtable")||s.includes("heap")||s.includes("dispatch")||s.includes("indirect"))}},{q:"The Rust Book says iterators can be faster than hand-written loops. How is that possible?",a:"It seems counterintuitive, but iterator chains can be faster because they give the compiler more information about the computation's structure. Specifically: (1) No aliasing — the compiler knows that iterator elements are processed independently, enabling SIMD vectorization. Complex loop bodies with manual indexing may have aliasing that prevents optimization. (2) Known length — iterators carry size hints, allowing the compiler to unroll loops optimally. (3) No bounds checks — iterators guarantee valid access, so bounds checks are eliminated. (4) Better cache behavior — tight iterator pipelines process data sequentially. The Rust Book's audio decoder benchmark showed the iterator version was measurably faster than the C-style loop due to LLVM auto-vectorization.",hint:"Think about what information the compiler has with iterators vs. raw indexing.",check:l=>{const s=l.toLowerCase();return s.includes("vectori")||s.includes("simd")||s.includes("bounds")||s.includes("alias")||s.includes("optimi")}}]}];function Fp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"Not quite. Try again or reveal."}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsx("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:"Check"}),n.jsx("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"Reveal"}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"Hint"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"Correct!"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{children:"Answer"}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function Wp(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=Ps.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else{const h=d.startsWith("use ")||d.startsWith("fn ")||d.startsWith("let ")||d.startsWith("    ")||d.startsWith("//")||d.startsWith("pub ")||d.startsWith("impl ")||d.startsWith("struct ")||d.startsWith("for ")||d.startsWith("match ")||d.startsWith("if ")||d.startsWith("}")||d.startsWith("assert")||d.startsWith("println!")||d.startsWith("Self")||d.startsWith("self")||d.startsWith(".")&&!d.startsWith("..")||d.startsWith("data")||d.startsWith("c.bench")||d.startsWith("b.iter")||d.startsWith("FnOnce")||d.startsWith("type ")||d.trim().startsWith("*map")||d.trim().startsWith("a + b"),u=d.startsWith("use ")||d.startsWith("fn ")||d.startsWith("let ")||d.startsWith("//")||d.startsWith("pub ")||d.startsWith("struct ");h?T.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:u?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:u?"6px 6px 0 0":0,marginTop:u?10:0},children:d},`c${m}`)):d===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(d)},`p${m}`)),m++}}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#7C3AED!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"RUST CLOSURES & FUNCTIONAL PROGRAMMING"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Closures & Functional Programming Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Closure syntax, Fn traits, iterators, functional patterns, and zero-cost abstractions in Rust.",n.jsx("br",{}),Ps.length," sections · ",F," concepts · ",Ps.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #C2410C, #0891B2, #059669, #DC2626, #D97706)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ps.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:">"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:"Learn"}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:">"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(Fp,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics, reading, video."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=Ep[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Closures + iterators = zero-cost functional programming. Fn traits enforce capture semantics at compile time."})]})}const jp={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ns=[{id:"modules",icon:"📁",color:"#7C3AED",title:"Module System: mod, pub, use, super, crate",subtitle:"Organizing code into modules with visibility control, path resolution, and re-exports",resources:[{type:"read",title:"The Rust Book — Modules (Ch. 7)",url:"https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html"},{type:"read",title:"Rust by Example — Modules",url:"https://doc.rust-lang.org/rust-by-example/mod.html"},{type:"video",title:"Let's Get Rusty — Module system explained",url:"https://www.youtube.com/watch?v=5RPXgDQrjio"}],content:[{heading:"Declaring Modules with mod",body:`**Modules organize code into namespaces with explicit visibility boundaries.**

\`\`\`
// Declare a module inline
mod math {
    pub fn add(a: i32, b: i32) -> i32 { a + b }
    fn helper() { /* private by default */ }

    pub mod advanced {
        pub fn sqrt(x: f64) -> f64 { x.sqrt() }
    }
}

fn main() {
    let sum = math::add(2, 3);           // OK: pub function
    let root = math::advanced::sqrt(9.0); // OK: pub nested module
    // math::helper();                    // ERROR: private function
}
\`\`\`

**Key rules:**
- **Everything is private by default** — only accessible within the same module
- **pub** makes an item visible to parent modules (and their children)
- Modules can nest arbitrarily deep
- The crate root (main.rs or lib.rs) is an implicit module called \`crate\``},{heading:"Path Resolution: use, super, crate, self",body:`**Paths navigate the module tree. Use absolute (crate::) or relative (self::, super::) paths.**

\`\`\`
mod network {
    pub mod server {
        pub fn start() { println!("Server starting"); }

        pub fn restart() {
            // super = parent module (network)
            super::log("restarting");
            // self = current module (server)
            self::start();
        }
    }

    fn log(msg: &str) { println!("[LOG] {msg}"); }
}

// Absolute path from crate root
use crate::network::server;

fn main() {
    server::start();

    // Bring specific items into scope
    use crate::network::server::start;
    start(); // No path prefix needed
}
\`\`\`

**Path keywords:**

| Keyword | Meaning | Example |
|---|---|---|
| **crate** | Crate root (absolute path) | crate::network::server |
| **self** | Current module | self::helper() |
| **super** | Parent module | super::log() |
| **use** | Bring path into scope | use std::collections::HashMap |

**Nested use statements:**
\`\`\`
// Instead of three separate use statements:
use std::io;
use std::io::Read;
use std::io::Write;

// Use a nested path:
use std::io::{self, Read, Write};

// Glob import (use sparingly):
use std::collections::*;
\`\`\``},{heading:"Visibility Rules (pub variations)",body:`**Rust has fine-grained visibility control beyond just pub/private.**

\`\`\`
mod outer {
    pub(crate) fn crate_visible() {} // Visible anywhere in this crate
    pub(super) fn parent_visible() {} // Visible to parent module only
    pub(in crate::outer) fn restricted() {} // Visible within outer

    pub mod inner {
        pub fn public() {}            // Visible to anyone
        pub(super) fn outer_only() {} // Only visible in outer
        fn private() {}               // Only visible in inner
    }
}
\`\`\`

**Visibility levels:**

| Modifier | Visible To |
|---|---|
| (none) | Current module only |
| **pub** | Everyone (external crates too) |
| **pub(crate)** | Current crate only |
| **pub(super)** | Parent module |
| **pub(in path)** | Specific ancestor module |

**Struct field visibility:**
\`\`\`
pub struct User {
    pub name: String,    // Public field
    pub(crate) email: String, // Crate-private field
    password_hash: String,    // Private field
}

// Constructors are needed when struct has private fields
impl User {
    pub fn new(name: String, email: String, pw: &str) -> Self {
        Self { name, email, password_hash: hash(pw) }
    }
}
\`\`\`

**Enum variants follow different rules:** if an enum is pub, all its variants are automatically pub (unlike struct fields).`},{heading:"Re-exports with pub use",body:`**pub use re-exports an item, making it available at a different path. Essential for clean public APIs.**

\`\`\`
// Internal structure:
// src/internal/database/connection.rs
pub fn connect() -> Connection { /* ... */ }

// src/lib.rs — re-export for a cleaner public API
pub use internal::database::connection::connect;

// Users of your crate see:
// my_crate::connect()
// Instead of:
// my_crate::internal::database::connection::connect()
\`\`\`

**Common re-export patterns:**

**Prelude pattern — re-export the most-used items:**
\`\`\`
// src/prelude.rs
pub use crate::core::Engine;
pub use crate::config::Config;
pub use crate::error::{Error, Result};

// Users can do:
use my_crate::prelude::*;
\`\`\`

**Flatten modules:**
\`\`\`
// src/models/mod.rs
mod user;
mod post;
mod comment;

// Re-export all model structs at models:: level
pub use user::User;
pub use post::Post;
pub use comment::Comment;
\`\`\`

**This is how the standard library works** — std::vec::Vec is actually defined deep inside the source tree but re-exported at std::vec::Vec and even brought into the prelude.`}],questions:[{q:"What is the difference between pub and pub(crate)? When should you use each?",a:"pub makes an item visible to everyone, including external crates that depend on yours. pub(crate) makes an item visible only within the current crate — external crates cannot access it. Use pub for items that are part of your public API (the interface you commit to maintaining). Use pub(crate) for items that need to be shared across modules within your crate but aren't part of the public contract. This is similar to package-private in Java or internal in C#. Rule of thumb: default to pub(crate) and only use pub for items you want external consumers to use.",hint:"Think about what external crates can see vs. what's internal to your crate.",check:l=>{const s=l.toLowerCase();return(s.includes("external")||s.includes("outside"))&&(s.includes("crate")||s.includes("internal"))}},{q:"Why are enum variants automatically public when the enum is pub, but struct fields are not?",a:"Enums represent a closed set of variants — to use an enum, you need to match on all variants, so hiding variants would make the enum unusable. If a user can see the enum, they need to see all variants to write exhaustive matches. Structs are different: you can use a struct without knowing all its fields (through methods and constructors). Private struct fields enable encapsulation — you can change internal representation without breaking the public API. This matches Rust's design philosophy: enums expose 'what it can be' (must be complete), structs expose 'what you can do with it' (can be partial).",hint:"Think about pattern matching: what happens if you can't see all enum variants?",check:l=>{const s=l.toLowerCase();return(s.includes("match")||s.includes("variant")||s.includes("exhaustive"))&&(s.includes("encapsulat")||s.includes("private")||s.includes("field"))}}]},{id:"file-structure",icon:"📂",color:"#0891B2",title:"File & Folder Module Structure",subtitle:"How the module tree maps to the filesystem — mod.rs convention, Rust 2018+ style, and organizing large projects",resources:[{type:"read",title:"The Rust Book — Separating modules into files (Ch. 7.5)",url:"https://doc.rust-lang.org/book/ch07-05-separating-modules-into-different-files.html"},{type:"read",title:"Rust Reference — Module source filenames",url:"https://doc.rust-lang.org/reference/items/modules.html#module-source-filenames"}],content:[{heading:"File-to-Module Mapping",body:`**Declaring mod foo; tells the compiler to load the module from a file. Two conventions exist.**

**Rust 2018+ style (recommended):**
\`\`\`
src/
  main.rs       → crate root
  math.rs       → mod math (declared in main.rs)
  math/
    advanced.rs  → mod math::advanced (declared in math.rs)
\`\`\`

**Legacy style (mod.rs):**
\`\`\`
src/
  main.rs       → crate root
  math/
    mod.rs      → mod math (declared in main.rs)
    advanced.rs → mod math::advanced (declared in mod.rs)
\`\`\`

**Both styles work.** The 2018+ style is preferred because you don't end up with dozens of files all named mod.rs.

**The declaration chain:**
\`\`\`
// src/main.rs
mod math;       // Loads src/math.rs (or src/math/mod.rs)
use math::add;

fn main() {
    println!("{}", add(2, 3));
}

// src/math.rs
pub mod advanced; // Loads src/math/advanced.rs
pub fn add(a: i32, b: i32) -> i32 { a + b }

// src/math/advanced.rs
pub fn power(base: f64, exp: u32) -> f64 {
    (0..exp).fold(1.0, |acc, _| acc * base)
}
\`\`\``},{heading:"Organizing a Real Project",body:`**A well-structured Rust project with multiple modules:**

\`\`\`
my_app/
  Cargo.toml
  src/
    main.rs           # Binary entry point
    lib.rs            # Library crate (shared logic)
    config.rs         # mod config
    config/
      database.rs     # mod config::database
      server.rs       # mod config::server
    models.rs         # mod models (re-exports)
    models/
      user.rs         # mod models::user
      post.rs         # mod models::post
    handlers.rs       # mod handlers
    handlers/
      auth.rs         # mod handlers::auth
      api.rs          # mod handlers::api
    error.rs          # mod error (custom error types)
\`\`\`

**lib.rs — the module tree root:**
\`\`\`
pub mod config;
pub mod models;
pub mod handlers;
pub mod error;
\`\`\`

**main.rs — thin binary that uses the library:**
\`\`\`
use my_app::{config, handlers};

fn main() {
    let cfg = config::load();
    handlers::start_server(cfg);
}
\`\`\`

**Best practice:** put most logic in lib.rs (the library crate) and keep main.rs minimal. This makes your code testable (lib crate can be tested independently) and reusable (other crates can depend on your library).`}],questions:[{q:"You have a module at src/network/http.rs. What mod declarations are needed and in which files?",a:"You need two mod declarations: (1) In src/main.rs (or src/lib.rs): mod network; — this tells the compiler to look for src/network.rs or src/network/mod.rs. (2) In src/network.rs: pub mod http; — this tells the compiler to look for src/network/http.rs. The chain is: crate root declares 'network', network declares 'http'. Each module declaration loads the corresponding file. Without both declarations, the compiler won't find the http module.",hint:"Each level of the module tree needs a declaration. Who declares 'network'? Who declares 'http'?",check:l=>{const s=l.toLowerCase();return s.includes("main")&&s.includes("network")&&s.includes("http")}}]},{id:"crates",icon:"📦",color:"#DC2626",title:"Crates: Binary vs Library",subtitle:"The compilation unit in Rust — binary crates, library crates, and how they relate to packages",resources:[{type:"read",title:"The Rust Book — Packages and Crates (Ch. 7.1)",url:"https://doc.rust-lang.org/book/ch07-01-packages-and-crates.html"},{type:"read",title:"Cargo Book — Package layout",url:"https://doc.rust-lang.org/cargo/guide/project-layout.html"}],content:[{heading:"Binary vs Library Crates",body:`**A crate is Rust's compilation unit. Two kinds exist.**

**Binary crate:**
- Has a main() function — compiles to an executable
- Entry point: src/main.rs
- Can have multiple binaries in src/bin/
- Produced by cargo build, run with cargo run

**Library crate:**
- No main() — compiles to a .rlib (Rust library)
- Entry point: src/lib.rs
- Provides reusable functionality to other crates
- Other crates depend on it via Cargo.toml

**A package can contain both:**
\`\`\`
my_package/
  Cargo.toml
  src/
    main.rs    # Binary crate (my_package)
    lib.rs     # Library crate (my_package)
    bin/
      tool.rs  # Additional binary crate (tool)
      cli.rs   # Additional binary crate (cli)
\`\`\`

**Package rules:**
- A package can have **at most one** library crate
- A package can have **any number** of binary crates
- A package must contain **at least one** crate (binary or library)

**Using the library from the binary:**
\`\`\`
// src/main.rs
use my_package::some_function; // Import from the library crate

fn main() {
    some_function();
}
\`\`\``},{heading:"Crate Root and the Crate Graph",body:`**The crate root is the source file the compiler starts from. It defines the module tree.**

**For binary crates:** src/main.rs
**For library crates:** src/lib.rs

\`\`\`
// The module tree (logical structure):
crate (root)
 ├── config
 │    ├── database
 │    └── server
 ├── models
 │    ├── user
 │    └── post
 └── handlers
      ├── auth
      └── api
\`\`\`

**The crate graph** is the dependency tree of all crates your project uses. Cargo resolves it from Cargo.toml dependencies:

\`\`\`
my_app (your crate)
 ├── serde (serialization)
 │    └── serde_derive (proc macro)
 ├── tokio (async runtime)
 │    ├── mio (OS I/O)
 │    └── bytes (byte buffers)
 └── reqwest (HTTP client)
      ├── hyper (HTTP)
      └── tokio (shared dependency!)
\`\`\`

**Cargo automatically deduplicates dependencies** — if two crates depend on the same version of tokio, only one copy is compiled.`}],questions:[{q:"A package has both src/main.rs and src/lib.rs. How many crates does it contain? Can they share code?",a:"It contains two crates: one binary crate (from main.rs) and one library crate (from lib.rs). Yes, they can share code — the binary crate can use the library crate by importing it with `use package_name::item`. The library crate acts as the shared code that both the binary and external consumers can access. This is the recommended pattern: put all logic in lib.rs, keep main.rs thin (just parse CLI args and call into the library). This makes the code testable (integration tests can only test the library crate) and reusable.",hint:"Each entry point (main.rs, lib.rs) is a separate crate. Can the binary import from the library?",check:l=>{const s=l.toLowerCase();return s.includes("two")&&(s.includes("import")||s.includes("use")||s.includes("share"))}}]},{id:"cargo-toml",icon:"⚙️",color:"#059669",title:"Cargo.toml & Dependency Management",subtitle:"Package metadata, dependency specification, versions, features, and the Cargo.lock file",resources:[{type:"read",title:"Cargo Book — The Manifest Format",url:"https://doc.rust-lang.org/cargo/reference/manifest.html"},{type:"read",title:"Cargo Book — Specifying Dependencies",url:"https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html"},{type:"read",title:"crates.io — The Rust package registry",url:"https://crates.io/"}],content:[{heading:"Cargo.toml Anatomy",body:`**Cargo.toml is the manifest file for your Rust package. It defines metadata, dependencies, and build settings.**

\`\`\`
[package]
name = "my_app"
version = "0.1.0"
edition = "2021"        # Rust edition (2015, 2018, 2021, 2024)
authors = ["Your Name"]
description = "A brief description"
license = "MIT"
repository = "https://github.com/user/repo"
rust-version = "1.70"   # Minimum supported Rust version

[dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1", features = ["full"] }
reqwest = "0.12"        # Shorthand for { version = "0.12" }
my_lib = { path = "../my_lib" }           # Local dependency
private = { git = "https://github.com/user/private.git" }

[dev-dependencies]       # Only for tests and examples
criterion = "0.5"
mockall = "0.13"

[build-dependencies]     # For build.rs scripts
cc = "1.0"

[profile.release]
opt-level = 3            # Max optimization
lto = true               # Link-time optimization
strip = true             # Strip debug symbols
\`\`\``},{heading:"Version Requirements (SemVer)",body:`**Cargo uses Semantic Versioning (SemVer) with caret (^) as the default strategy.**

| Syntax | Meaning | Example Range |
|---|---|---|
| **"1.2.3"** | ^1.2.3 (default caret) | >= 1.2.3, < 2.0.0 |
| **"^1.2.3"** | Compatible updates | >= 1.2.3, < 2.0.0 |
| **"~1.2.3"** | Patch updates only | >= 1.2.3, < 1.3.0 |
| **"=1.2.3"** | Exact version | Exactly 1.2.3 |
| **">=1.2, <1.5"** | Range | >= 1.2.0, < 1.5.0 |
| **"*"** | Any version | Not recommended |

**Pre-1.0 behavior:** for versions < 1.0.0, the rules tighten:
- "0.2.3" means >= 0.2.3, < 0.3.0 (minor = breaking change)
- "0.0.3" means >= 0.0.3, < 0.0.4 (patch = breaking change)

**Cargo.lock:**
- Records the **exact** versions resolved for your dependency tree
- **Commit Cargo.lock for binaries** (reproducible builds)
- **Don't commit Cargo.lock for libraries** (let downstream users resolve versions)

\`\`\`
// Update dependencies to latest compatible versions
cargo update

// Update a specific dependency
cargo update -p serde

// Show dependency tree
cargo tree
\`\`\``},{heading:"Dependency Sources",body:`**Dependencies can come from crates.io, git, or local paths.**

\`\`\`
[dependencies]
# From crates.io (default registry)
serde = "1.0"

# From git repository
my_dep = { git = "https://github.com/user/repo.git" }
my_dep = { git = "...", branch = "main" }
my_dep = { git = "...", tag = "v1.0" }
my_dep = { git = "...", rev = "abc123" }

# From local path
my_lib = { path = "../my_lib" }

# With optional features
serde = { version = "1.0", features = ["derive"] }

# Optional dependency (enabled by features)
fancy_output = { version = "1.0", optional = true }

# Platform-specific
[target.'cfg(windows)'.dependencies]
winapi = "0.3"

[target.'cfg(unix)'.dependencies]
nix = "0.28"
\`\`\`

**Dependency rename (aliasing):**
\`\`\`
[dependencies]
# Use a different name in your code
serde_json_v1 = { package = "serde_json", version = "1.0" }
\`\`\`

**Patch and replace (override dependencies):**
\`\`\`
[patch.crates-io]
# Use a local fork instead of crates.io version
serde = { path = "../my-serde-fork" }
\`\`\``}],questions:[{q:'What does serde = "1.0" actually mean in terms of version range? What is the default version strategy?',a:"It means ^1.0 (caret requirement), which resolves to >= 1.0.0 and < 2.0.0. This is Cargo's default strategy. It allows any minor or patch update (1.0.1, 1.5.0, 1.99.0) but not the next major version (2.0.0). The rationale is SemVer: major versions can have breaking changes, but minor/patch versions should be backward-compatible. So '1.0' means 'give me the latest 1.x version.' For pre-1.0 crates, the rules are stricter: '0.2' means >= 0.2.0, < 0.3.0 because pre-1.0 minor bumps can be breaking.",hint:"Cargo uses caret (^) by default. What does caret allow?",check:l=>{const s=l.toLowerCase();return(s.includes("caret")||s.includes("^")||s.includes("1.0.0"))&&(s.includes("2.0")||s.includes("major")||s.includes("minor"))}},{q:"Should you commit Cargo.lock? Does it matter if your project is a binary or a library?",a:"For binary projects (applications): YES, commit Cargo.lock. It ensures reproducible builds — everyone who checks out the code gets the exact same dependency versions. For library projects: traditionally NO, don't commit it. Libraries are consumed by downstream crates, which should resolve their own compatible versions. If you lock a library's dependencies, it can cause unnecessary conflicts when your library is used as a dependency. However, this guidance has evolved: committing Cargo.lock for libraries is now acceptable (it helps CI reproducibility), but cargo publish ignores it anyway — downstream consumers always resolve fresh.",hint:"Think about who controls the final dependency resolution: the binary or the library?",check:l=>{const s=l.toLowerCase();return(s.includes("binary")||s.includes("application"))&&(s.includes("library")||s.includes("lib"))&&(s.includes("reproducib")||s.includes("commit"))}}]},{id:"workspaces",icon:"🏢",color:"#D97706",title:"Workspaces: Multi-Crate Projects",subtitle:"Managing multiple related crates in a single repository with shared dependencies and builds",resources:[{type:"read",title:"Cargo Book — Workspaces",url:"https://doc.rust-lang.org/cargo/reference/workspaces.html"},{type:"read",title:"The Rust Book — Workspaces (Ch. 14.3)",url:"https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html"}],content:[{heading:"Workspace Basics",body:`**A workspace is a set of crates that share a Cargo.lock, output directory, and dependency resolution.**

\`\`\`
my_workspace/
  Cargo.toml          # Workspace root
  Cargo.lock          # Shared lock file
  target/             # Shared build directory
  crates/
    core/
      Cargo.toml      # Library crate
      src/lib.rs
    api/
      Cargo.toml      # Binary crate
      src/main.rs
    cli/
      Cargo.toml      # Binary crate
      src/main.rs
\`\`\`

**Root Cargo.toml:**
\`\`\`
[workspace]
members = [
    "crates/core",
    "crates/api",
    "crates/cli",
]
resolver = "2"        # Use v2 dependency resolver

# Shared dependencies (Rust 1.64+)
[workspace.dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1", features = ["full"] }
\`\`\`

**Member Cargo.toml (crates/api/Cargo.toml):**
\`\`\`
[package]
name = "api"
version = "0.1.0"
edition = "2021"

[dependencies]
core = { path = "../core" }              # Workspace member dependency
serde = { workspace = true }              # Inherit from workspace
tokio = { workspace = true }
reqwest = "0.12"                          # Crate-specific dependency
\`\`\`

**Benefits of workspaces:**
- **Single Cargo.lock** — all crates use the same dependency versions
- **Shared target/ directory** — dependencies compiled once, shared across members
- **Atomic builds** — cargo build builds everything; cargo test tests everything
- **Shared CI** — one pipeline for all crates`},{heading:"Workspace Commands and Patterns",body:`**Run cargo commands for specific members or the whole workspace.**

\`\`\`
// Build everything
cargo build

// Build specific member
cargo build -p api

// Test everything
cargo test

// Test specific member
cargo test -p core

// Run a specific binary
cargo run -p cli

// Check all crates without compiling
cargo check
\`\`\`

**Common workspace patterns:**

**1. Shared library + multiple binaries:**
\`\`\`
workspace/
  crates/
    shared/    # Core library used by all binaries
    server/    # Web server binary
    worker/    # Background worker binary
    cli/       # CLI tool binary
\`\`\`

**2. Layered architecture:**
\`\`\`
workspace/
  crates/
    domain/    # Business logic (no I/O)
    infra/     # Database, HTTP, filesystem
    app/       # Application orchestration
    api/       # REST/gRPC interface
\`\`\`

**3. Plugin architecture:**
\`\`\`
workspace/
  crates/
    core/      # Core traits and types
    plugin-a/  # Plugin implementation A
    plugin-b/  # Plugin implementation B
    host/      # Host that loads plugins
\`\`\`

**When to use workspaces:** when you have 2+ closely related crates that evolve together, share dependencies, and are in the same repository.`}],questions:[{q:"What does workspace.dependencies in the root Cargo.toml do? How does a member crate use it?",a:'workspace.dependencies defines shared dependency versions at the workspace level. Member crates reference them with { workspace = true } instead of specifying the version directly. This ensures all workspace members use the same version of a dependency — if you need to update serde, you change it in one place (root Cargo.toml) instead of every member. Member crates can still add crate-specific features: serde = { workspace = true, features = ["derive"] }. This feature was stabilized in Rust 1.64 and is essential for large workspaces with many shared dependencies.',hint:"Where is the version defined, and how does a member reference it?",check:l=>{const s=l.toLowerCase();return s.includes("workspace")&&(s.includes("true")||s.includes("shared")||s.includes("one place")||s.includes("inherit"))}}]},{id:"features-cfg",icon:"🏷️",color:"#C2410C",title:"Features & Conditional Compilation",subtitle:"Cargo features for optional functionality, cfg attributes, and compile-time feature flags",resources:[{type:"read",title:"Cargo Book — Features",url:"https://doc.rust-lang.org/cargo/reference/features.html"},{type:"read",title:"Rust Reference — Conditional compilation",url:"https://doc.rust-lang.org/reference/conditional-compilation.html"},{type:"video",title:"Jon Gjengset — Cargo features deep dive",url:"https://www.youtube.com/watch?v=WBqRKVxMondQ"}],content:[{heading:"Cargo Features",body:`**Features are optional compile-time flags that enable/disable functionality. They control conditional compilation and optional dependencies.**

\`\`\`
# Cargo.toml
[package]
name = "my_lib"

[features]
default = ["json"]           # Enabled unless explicitly disabled
json = ["dep:serde_json"]    # Enables serde_json dependency
yaml = ["dep:serde_yaml"]    # Enables serde_yaml dependency
full = ["json", "yaml"]      # Meta-feature: enables both
unstable = []                # Flag-only feature (no deps)

[dependencies]
serde = "1.0"
serde_json = { version = "1.0", optional = true }
serde_yaml = { version = "0.9", optional = true }
\`\`\`

**Using features in code:**
\`\`\`
#[cfg(feature = "json")]
pub fn to_json<T: Serialize>(value: &T) -> String {
    serde_json::to_string(value).unwrap()
}

#[cfg(feature = "yaml")]
pub fn to_yaml<T: Serialize>(value: &T) -> String {
    serde_yaml::to_string(value).unwrap()
}
\`\`\`

**Consuming features:**
\`\`\`
# Cargo.toml of the consumer
[dependencies]
my_lib = { version = "1.0", features = ["json", "yaml"] }

# Disable default features:
my_lib = { version = "1.0", default-features = false, features = ["yaml"] }
\`\`\`

**Features are additive** — enabling a feature should never break existing code. A feature should only add functionality, never remove it.`},{heading:"Conditional Compilation with cfg",body:`**The #[cfg] attribute and cfg! macro control what code is compiled based on features, OS, architecture, etc.**

\`\`\`
// Compile only on Linux
#[cfg(target_os = "linux")]
fn linux_only() { /* ... */ }

// Compile on any Unix
#[cfg(unix)]
fn unix_only() { /* ... */ }

// Platform-specific implementations
#[cfg(windows)]
fn get_home_dir() -> PathBuf { /* Windows path */ }
#[cfg(not(windows))]
fn get_home_dir() -> PathBuf { /* Unix path */ }

// Combine conditions
#[cfg(all(target_os = "linux", target_arch = "x86_64"))]
fn optimized_for_linux_x64() { /* ... */ }

#[cfg(any(target_os = "macos", target_os = "ios"))]
fn apple_platforms() { /* ... */ }

// Runtime check (doesn't exclude code from compilation)
if cfg!(debug_assertions) {
    println!("Debug mode!");
}
\`\`\`

**Common cfg predicates:**

| Predicate | Examples |
|---|---|
| **target_os** | "linux", "macos", "windows" |
| **target_arch** | "x86_64", "aarch64", "wasm32" |
| **target_family** | "unix", "windows", "wasm" |
| **feature** | "json", "full", "unstable" |
| **debug_assertions** | true in debug, false in release |
| **test** | true when running cargo test |

**cfg_attr — conditional attribute application:**
\`\`\`
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct Config {
    pub name: String,
    pub port: u16,
}
\`\`\``}],questions:[{q:"What does 'features are additive' mean? Why is this rule important?",a:`It means enabling a feature should only add new functionality, never remove or change existing behavior. If crate A depends on my_lib with feature 'json' and crate B depends on my_lib without it, Cargo enables 'json' for both (features are unioned). If features could remove functionality, enabling 'json' might break crate B's code that relied on behavior present without 'json'. This is critical because in a dependency graph, multiple consumers may enable different features on the same crate, and all combinations must work. Practical rule: #[cfg(feature = "x")] should add functions/modules, not change the behavior of existing ones.`,hint:"What happens if two crates depend on the same library with different features?",check:l=>{const s=l.toLowerCase();return(s.includes("add")||s.includes("only add"))&&(s.includes("break")||s.includes("remove")||s.includes("union")||s.includes("combin"))}}]},{id:"cargo-commands",icon:"🔨",color:"#2563EB",title:"Cargo Commands & Ecosystem",subtitle:"build, test, bench, doc, publish, clippy, fmt — and the most popular crates in the Rust ecosystem",resources:[{type:"read",title:"Cargo Book — Commands",url:"https://doc.rust-lang.org/cargo/commands/index.html"},{type:"read",title:"lib.rs — Curated Rust crate list",url:"https://lib.rs/"},{type:"read",title:"Blessed.rs — Unofficial recommended crates",url:"https://blessed.rs/crates"},{type:"video",title:"No Boilerplate — Rust's Cargo is so much more",url:"https://www.youtube.com/watch?v=LjWqUHb6sQc"}],content:[{heading:"Essential Cargo Commands",body:`**Cargo is Rust's build system AND package manager. Here are the commands you'll use daily.**

| Command | Purpose | Common Flags |
|---|---|---|
| **cargo new my_app** | Create new binary project | --lib for library |
| **cargo init** | Initialize in existing directory | --lib for library |
| **cargo build** | Compile the project | --release for optimized build |
| **cargo run** | Build and run | -- args to pass CLI args |
| **cargo check** | Type-check without compiling | Fastest feedback loop |
| **cargo test** | Run tests | --test name, -- --nocapture |
| **cargo bench** | Run benchmarks | Requires nightly or criterion |
| **cargo doc** | Generate documentation | --open to view in browser |
| **cargo clippy** | Lint your code | -- -W clippy::pedantic |
| **cargo fmt** | Format code | --check for CI |
| **cargo clean** | Remove target/ directory | Reclaim disk space |
| **cargo tree** | Show dependency tree | -d for duplicates |
| **cargo update** | Update Cargo.lock | -p name for specific dep |
| **cargo publish** | Publish to crates.io | --dry-run to test |
| **cargo install** | Install binary from crates.io | Global tools |

**Speed tip:** cargo check is ~3x faster than cargo build because it skips code generation. Use it as your primary feedback loop while developing.`},{heading:"Testing with Cargo",body:`**Rust has built-in test support. No external test framework needed for most use cases.**

\`\`\`
// Unit tests (in the same file)
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(2, 3), 5);
    }

    #[test]
    #[should_panic(expected = "overflow")]
    fn test_overflow() {
        add(i32::MAX, 1); // Should panic
    }

    #[test]
    fn test_result() -> Result<(), String> {
        let result = parse("42")?;
        assert_eq!(result, 42);
        Ok(())
    }
}
\`\`\`

**Integration tests (separate files):**
\`\`\`
// tests/integration_test.rs
use my_lib::public_function;

#[test]
fn test_public_api() {
    assert!(public_function().is_ok());
}
\`\`\`

**Test organization:**
\`\`\`
my_project/
  src/
    lib.rs          # #[cfg(test)] mod tests { ... }
  tests/
    common/
      mod.rs        # Shared test utilities
    integration.rs  # Integration tests
  benches/
    benchmark.rs    # Benchmarks (criterion)
\`\`\``},{heading:"Popular Crates Ecosystem Tour",body:`**The Rust ecosystem has mature, well-maintained crates for most common tasks.**

| Category | Crate | Purpose | Downloads/mo |
|---|---|---|---|
| **Serialization** | serde + serde_json | JSON/YAML/TOML/etc | 100M+ |
| **Async Runtime** | tokio | Async I/O, networking | 50M+ |
| **HTTP Client** | reqwest | HTTP requests | 30M+ |
| **HTTP Server** | axum | Web framework (Tokio-based) | 10M+ |
| **CLI** | clap | Argument parsing | 30M+ |
| **Logging** | tracing | Structured logging & tracing | 40M+ |
| **Error** | anyhow / thiserror | Error handling | 50M+ |
| **Database** | sqlx | Async SQL (compile-time checked) | 10M+ |
| **ORM** | diesel | Type-safe ORM | 5M+ |
| **Regex** | regex | Regular expressions | 40M+ |
| **Date/Time** | chrono | Date and time handling | 30M+ |
| **Random** | rand | Random number generation | 40M+ |
| **Config** | config | Configuration loading | 5M+ |
| **Testing** | criterion | Benchmarking framework | 10M+ |

**The serde ecosystem** is particularly important — it's the standard for serialization in Rust. Almost every data format has a serde implementation.

**Choosing crates:** check lib.rs (curated) and blessed.rs (community recommendations). Look at download counts, maintenance activity, and whether the crate is used by major projects.`}],questions:[{q:"What is the difference between cargo build and cargo check? When should you use each?",a:"cargo check runs the full compiler frontend (parsing, type checking, borrow checking) but skips code generation (LLVM compilation to machine code). It's about 3x faster than cargo build. Use cargo check as your primary feedback loop while developing — it catches all type errors, borrow checker violations, and most warnings without the overhead of producing binaries. Use cargo build when you actually need to run the code (before cargo run) or produce a binary. Use cargo build --release for production builds with optimizations. In CI, use cargo check for fast feedback, cargo test for correctness, and cargo build --release for the final artifact.",hint:"What step does cargo check skip compared to cargo build?",check:l=>{const s=l.toLowerCase();return(s.includes("code gen")||s.includes("llvm")||s.includes("machine code")||s.includes("compil"))&&(s.includes("faster")||s.includes("skip")||s.includes("3x"))}},{q:"Name three crates you would add to almost every Rust project and explain why.",a:"Essential crates for most projects: (1) serde + serde_json — serialization/deserialization is needed everywhere (configs, APIs, data persistence). Serde's derive macros make it zero-boilerplate. (2) anyhow or thiserror — error handling. anyhow for applications (easy error propagation with context), thiserror for libraries (custom error types with derive). (3) tracing — structured logging and diagnostics. Unlike println debugging, tracing provides spans, levels, and structured fields that integrate with log aggregation systems. Honorable mentions: clap (CLI args), tokio (async), chrono (dates). The exact choices depend on the project type (web service vs CLI vs library).",hint:"Think about what every project needs: handling errors, reading data, and observability.",check:l=>{const s=l.toLowerCase();return(s.includes("serde")||s.includes("serial"))&&(s.includes("error")||s.includes("anyhow")||s.includes("thiserror"))}}]}];function Mp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"Not quite. Try again or reveal."}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsx("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:"Check"}),n.jsx("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"Reveal"}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"Hint"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"Correct!"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{children:"Answer"}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function Ap(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=Ns.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else{const h=d.startsWith("use ")||d.startsWith("fn ")||d.startsWith("let ")||d.startsWith("    ")||d.startsWith("//")||d.startsWith("pub ")||d.startsWith("impl ")||d.startsWith("mod ")||d.startsWith("[")||d.startsWith("name ")||d.startsWith("version")||d.startsWith("edition")||d.startsWith("serde")||d.startsWith("tokio")||d.startsWith("reqwest")||d.startsWith("cargo ")||d.startsWith("#[")||d.startsWith("assert")||d.startsWith("println!")||d.startsWith("}")||d.startsWith("members")||d.startsWith("resolver")||d.startsWith("core =")||d.startsWith("struct ")||d.startsWith("Self")||d.startsWith("my_")||d.startsWith("opt-")||d.startsWith("lto")||d.startsWith("strip")||d.startsWith("default")||d.startsWith("json")||d.startsWith("yaml")||d.startsWith("full")||d.startsWith("unstable")||d.startsWith("fancy")||d.startsWith("winapi")||d.startsWith("nix")||d.startsWith("serde_json")||d.startsWith("private")||d.startsWith("cc ")||d.startsWith("criterion")||d.startsWith("mockall")||d.startsWith("Ok("),u=d.startsWith("use ")||d.startsWith("fn ")||d.startsWith("let ")||d.startsWith("//")||d.startsWith("pub ")||d.startsWith("mod ")||d.startsWith("[")||d.startsWith("#[")||d.startsWith("cargo ");h?T.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:u?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:u?"6px 6px 0 0":0,marginTop:u?10:0},children:d},`c${m}`)):d===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(d)},`p${m}`)),m++}}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#059669!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"RUST MODULES & CARGO"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Modules, Crates & Cargo Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["Module system, crate types, Cargo.toml, workspaces, features, and the ecosystem of popular crates.",n.jsx("br",{}),Ns.length," sections · ",F," concepts · ",Ns.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #0891B2, #DC2626, #059669, #D97706, #C2410C, #2563EB)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ns.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:">"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:"Learn"}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:">"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(Mp,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics, reading, video."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=jp[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"mod + pub + use = module system. Cargo.toml + features + workspaces = project management. serde + tokio + axum = ecosystem essentials."})]})}const zp={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Ls=[{id:"async-basics",icon:"⏳",color:"#7C3AED",title:"async/await Basics & the Future Trait",subtitle:"How Rust's async model works under the hood — lazy futures, polling, state machines, and why no runtime is built in",resources:[{type:"read",title:"Async Book — Getting Started",url:"https://rust-lang.github.io/async-book/"},{type:"read",title:"The Rust Book — async/await (Ch. 17)",url:"https://doc.rust-lang.org/book/ch17-00-async-await.html"},{type:"video",title:"Jon Gjengset — The What and How of Futures and async/await",url:"https://www.youtube.com/watch?v=9_3krAQtD2k"},{type:"read",title:"Rust RFC 2394 — async/await",url:"https://rust-lang.github.io/rfcs/2394-async_await.html"}],content:[{heading:"What async/await Does",body:`**async fn transforms your function into a state machine that returns a Future. The Future does nothing until polled.**

\`\`\`
// This async function:
async fn fetch_data(url: &str) -> String {
    let response = reqwest::get(url).await;
    response.text().await.unwrap()
}

// Compiles to roughly:
fn fetch_data(url: &str) -> impl Future<Output = String> {
    // Returns a state machine, NOT the actual result
    // No HTTP request happens yet!
}
\`\`\`

**Key insight: Rust futures are LAZY.** Unlike JavaScript promises (which start executing immediately), Rust futures do absolutely nothing until an executor polls them. This is a fundamental design difference.

**Comparison with other languages:**

| Language | Async Model | Eager/Lazy | Runtime Built-in |
|---|---|---|---|
| **Rust** | Future + async/await | Lazy (poll-based) | No (bring your own) |
| **JavaScript** | Promise + async/await | Eager (starts immediately) | Yes (event loop) |
| **Python** | Coroutine + async/await | Lazy (event loop drives) | Yes (asyncio) |
| **Go** | Goroutines | Eager (runtime schedules) | Yes (Go runtime) |
| **C#** | Task + async/await | Eager (starts immediately) | Yes (.NET runtime) |
| **Java** | CompletableFuture | Eager | Yes (ForkJoinPool) |

**Why lazy?** Lazy futures give you control over when and how work happens. You can compose futures without triggering execution, cancel them without wasting resources, and choose different executors for different workloads.`},{heading:"The Future Trait",body:`**Every async operation in Rust implements the Future trait. It has exactly one method: poll().**

\`\`\`
pub trait Future {
    type Output;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>)
        -> Poll<Self::Output>;
}

pub enum Poll<T> {
    Ready(T),    // The future completed, here's the value
    Pending,     // Not done yet, wake me later
}
\`\`\`

**How polling works:**

1. The **executor** (e.g., Tokio) calls poll() on your future
2. If the future can complete, it returns **Poll::Ready(value)**
3. If the future is waiting (I/O, timer, etc.), it returns **Poll::Pending** and registers a **waker** with the I/O system
4. When the I/O completes, the waker notifies the executor
5. The executor calls poll() again
6. Repeat until Ready

**The waker mechanism is critical:** without it, the executor would have to busy-loop (wasteful). The waker allows the executor to sleep until something actually happens.

**You almost never implement Future manually.** async/await generates the Future implementation for you. But understanding poll() is essential for debugging and building custom futures.`},{heading:"State Machine Transformation",body:`**The compiler transforms async fn into a state machine enum. Each .await point is a state transition.**

\`\`\`
// Your code:
async fn process() -> u32 {
    let a = step_one().await;   // State 0 -> 1
    let b = step_two(a).await;  // State 1 -> 2
    a + b                       // State 2 -> Complete
}

// Compiler generates (conceptually):
enum ProcessFuture {
    State0 { /* initial state */ },
    State1 { a: u32, step_two_fut: StepTwoFuture },
    State2 { a: u32, b: u32 },
    Complete,
}

impl Future for ProcessFuture {
    type Output = u32;
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>)
        -> Poll<u32> {
        match self.state {
            State0 => { /* poll step_one, transition to State1 */ }
            State1 => { /* poll step_two, transition to State2 */ }
            State2 => Poll::Ready(a + b),
            Complete => panic!("polled after completion"),
        }
    }
}
\`\`\`

**Key properties of the state machine:**
- **Zero heap allocation** — the state machine is a single enum on the stack (or in a Box if spawned)
- **No hidden threads** — async code runs on whatever thread the executor provides
- **Cancellation is free** — just drop the future (the state machine is dropped, destructors run)
- **Size is known at compile time** — the enum is the size of its largest variant`}],questions:[{q:"What does it mean that Rust futures are 'lazy'? How does this differ from JavaScript promises?",a:"Lazy means a Rust future does absolutely nothing until an executor polls it. Calling an async fn just creates the future (state machine) but executes zero code. You must .await it or spawn it on an executor for anything to happen. In contrast, JavaScript promises are eager: calling an async function or new Promise() immediately starts executing the body. Even if you never .then() the promise, the work still happens. Rust's lazy approach has advantages: (1) you can compose futures without side effects, (2) unused futures don't waste resources, (3) cancellation is trivial (just drop the future, no work was done). The tradeoff: Rust requires an explicit runtime (Tokio, async-std) to drive futures, while JS has a built-in event loop.",hint:"What happens if you call an async function but never .await the result? In Rust vs JavaScript?",check:l=>{const s=l.toLowerCase();return(s.includes("lazy")||s.includes("nothing")||s.includes("poll"))&&(s.includes("eager")||s.includes("immediately")||s.includes("start"))}},{q:"Why doesn't Rust include an async runtime in the standard library like Go or JavaScript?",a:"Rust doesn't include a runtime because different applications have fundamentally different needs: (1) A web server needs a multi-threaded runtime with work-stealing (Tokio). (2) An embedded system needs a single-threaded, no-alloc executor. (3) A GUI app needs integration with the platform's event loop. (4) A CLI tool might not need async at all. Including a runtime would force one design on everyone, violating Rust's zero-cost abstraction principle (you shouldn't pay for what you don't use). By keeping the runtime out of the language, Rust allows the ecosystem to provide purpose-built runtimes. The tradeoff is ecosystem fragmentation — Tokio, async-std, and smol have slightly different APIs — but in practice Tokio has become the dominant standard.",hint:"Would an embedded system and a web server want the same async runtime?",check:l=>{const s=l.toLowerCase();return(s.includes("different")||s.includes("choice")||s.includes("zero-cost"))&&(s.includes("runtime")||s.includes("tokio")||s.includes("embedded"))}}]},{id:"tokio",icon:"⚡",color:"#0891B2",title:"Tokio Runtime",subtitle:"The de facto async runtime — multi-threaded vs current-thread, #[tokio::main], and runtime configuration",resources:[{type:"read",title:"Tokio — Tutorial",url:"https://tokio.rs/tokio/tutorial"},{type:"read",title:"Tokio — API documentation",url:"https://docs.rs/tokio/latest/tokio/"},{type:"video",title:"Let's Get Rusty — Tokio tutorial",url:"https://www.youtube.com/watch?v=dOzrO40jgbA"}],content:[{heading:"Setting Up Tokio",body:`**Tokio provides the executor that drives your async code. Add it to Cargo.toml and use the macro.**

\`\`\`
// Cargo.toml
[dependencies]
tokio = { version = "1", features = ["full"] }

// main.rs — the simplest setup
#[tokio::main]
async fn main() {
    println!("Hello from async Rust!");
    let data = fetch("https://api.example.com").await;
    println!("Got: {data}");
}
\`\`\`

**#[tokio::main] expands to:**
\`\`\`
fn main() {
    tokio::runtime::Builder::new_multi_thread()
        .enable_all()
        .build()
        .unwrap()
        .block_on(async {
            // Your async main body here
        })
}
\`\`\``},{heading:"Runtime Flavors",body:`**Tokio offers two runtime configurations for different use cases.**

**Multi-threaded (default):**
\`\`\`
#[tokio::main]  // Defaults to multi-threaded
async fn main() { /* ... */ }

// Explicit:
#[tokio::main(flavor = "multi_thread", worker_threads = 4)]
async fn main() { /* ... */ }
\`\`\`
- Uses a **work-stealing** thread pool (default: 1 thread per CPU core)
- Tasks can migrate between threads
- Best for: servers, high-throughput applications
- Spawned tasks must be Send (can cross thread boundaries)

**Current-thread (single-threaded):**
\`\`\`
#[tokio::main(flavor = "current_thread")]
async fn main() { /* ... */ }
\`\`\`
- All tasks run on the main thread
- No thread synchronization overhead
- Spawned tasks don't need to be Send
- Best for: CLI tools, simple scripts, tests, WebAssembly

**Comparison:**

| Feature | Multi-thread | Current-thread |
|---|---|---|
| Threads | N (default = CPU cores) | 1 |
| Send bound | Required for spawn | Not required |
| Performance | Higher throughput | Lower latency |
| Overhead | Thread sync costs | None |
| Use case | Servers | CLI, tests, WASM |`},{heading:"Spawning Tasks",body:`**tokio::spawn creates a new concurrent task — like a lightweight thread managed by the runtime.**

\`\`\`
use tokio;

#[tokio::main]
async fn main() {
    // Spawn a background task
    let handle = tokio::spawn(async {
        // This runs concurrently
        expensive_computation().await
    });

    // Do other work while the task runs
    do_something_else().await;

    // Wait for the task to complete
    let result = handle.await.unwrap();
    println!("Task result: {result}");
}
\`\`\`

**Key differences: tokio::spawn vs std::thread::spawn:**

| Feature | tokio::spawn | std::thread::spawn |
|---|---|---|
| Weight | Very lightweight (few KB) | OS thread (~8 MB stack) |
| Quantity | Millions of tasks | Thousands of threads |
| Scheduling | Cooperative (yield at .await) | Preemptive (OS scheduler) |
| Blocking | Must NOT block | Can block freely |
| Communication | Channels, shared state | Channels, shared state |

**Critical rule: never block in async code!** Use tokio::task::spawn_blocking for blocking operations:

\`\`\`
// WRONG: blocks the async runtime
let data = std::fs::read_to_string("big_file.txt"); // Blocks!

// RIGHT: offload to a blocking thread pool
let data = tokio::task::spawn_blocking(|| {
    std::fs::read_to_string("big_file.txt")
}).await.unwrap();
\`\`\``}],questions:[{q:"Why must tasks spawned with tokio::spawn be Send in multi-threaded mode but not in current-thread mode?",a:"In multi-threaded mode, the Tokio runtime uses a work-stealing scheduler that can move tasks between threads. If a task is suspended at an .await point on thread A, it might resume on thread B. This means the task's state (all variables held across .await points) must be safely transferable between threads — which is exactly what the Send trait guarantees. In current-thread mode, there's only one thread, so tasks never move between threads. The Send bound is unnecessary because the task always runs on the same thread where it was spawned. This is why current-thread mode is useful when you have non-Send types (like Rc, RefCell).",hint:"What does the work-stealing scheduler do to tasks between .await points?",check:l=>{const s=l.toLowerCase();return(s.includes("thread")||s.includes("move"))&&(s.includes("send")||s.includes("work-steal")||s.includes("transfer"))}},{q:"Why should you never call std::thread::sleep() inside an async function? What should you use instead?",a:"std::thread::sleep() blocks the entire OS thread. In an async runtime, that thread is shared by potentially thousands of tasks. Blocking it means none of those tasks can make progress — the runtime effectively loses a worker thread. In current-thread mode, it stops ALL tasks. Use tokio::time::sleep() instead, which returns a Future that yields control back to the runtime. The runtime can run other tasks while your sleep is pending. The general rule: in async code, every I/O and wait operation must be async (non-blocking). For CPU-bound or blocking work, use tokio::task::spawn_blocking() to offload to a dedicated thread pool.",hint:"How many tasks share a single OS thread in Tokio?",check:l=>{const s=l.toLowerCase();return(s.includes("block")||s.includes("blocking"))&&(s.includes("tokio::time")||s.includes("other tasks")||s.includes("yield")||s.includes("spawn_blocking"))}}]},{id:"streams",icon:"🌊",color:"#059669",title:"Streams: AsyncRead & AsyncWrite",subtitle:"Asynchronous iteration, stream combinators, and async I/O traits for bytes and data",resources:[{type:"read",title:"Tokio — I/O documentation",url:"https://tokio.rs/tokio/tutorial/io"},{type:"read",title:"tokio-stream crate",url:"https://docs.rs/tokio-stream/latest/tokio_stream/"},{type:"read",title:"futures::Stream trait",url:"https://docs.rs/futures/latest/futures/stream/trait.Stream.html"}],content:[{heading:"The Stream Trait",body:`**A Stream is the async version of Iterator — it yields values asynchronously over time.**

\`\`\`
pub trait Stream {
    type Item;
    fn poll_next(self: Pin<&mut Self>, cx: &mut Context<'_>)
        -> Poll<Option<Self::Item>>;
}

// Iterator  yields: Option<T>  (sync, immediate)
// Stream    yields: Poll<Option<T>> (async, may be pending)
\`\`\`

**Using streams with StreamExt (from tokio-stream or futures):**
\`\`\`
use tokio_stream::{self as stream, StreamExt};

#[tokio::main]
async fn main() {
    let mut stream = stream::iter(vec![1, 2, 3, 4, 5]);

    while let Some(value) = stream.next().await {
        println!("Got: {value}");
    }

    // Stream combinators (like iterator methods)
    let doubled: Vec<i32> = stream::iter(1..=5)
        .map(|x| x * 2)
        .filter(|x| *x > 4)
        .collect()
        .await;
    // [6, 8, 10]
}
\`\`\`

**Real-world streams:**
- **WebSocket messages** — stream of Message values
- **Database query results** — stream of Row values
- **File chunks** — stream of Bytes
- **Server-sent events** — stream of Event values
- **Watch channels** — stream of state changes`},{heading:"AsyncRead and AsyncWrite",body:`**AsyncRead and AsyncWrite are the async versions of std::io::Read and std::io::Write.**

\`\`\`
use tokio::io::{self, AsyncReadExt, AsyncWriteExt};
use tokio::fs::File;

#[tokio::main]
async fn main() -> io::Result<()> {
    // Async file read
    let mut file = File::open("data.txt").await?;
    let mut contents = String::new();
    file.read_to_string(&mut contents).await?;

    // Async file write
    let mut output = File::create("output.txt").await?;
    output.write_all(b"hello async world").await?;

    // Async TCP
    use tokio::net::TcpStream;
    let mut stream = TcpStream::connect("127.0.0.1:8080").await?;
    stream.write_all(b"GET / HTTP/1.1\\r\\n\\r\\n").await?;

    let mut buf = vec![0u8; 4096];
    let n = stream.read(&mut buf).await?;
    println!("Read {} bytes", n);

    Ok(())
}
\`\`\`

**Buffered I/O:**
\`\`\`
use tokio::io::{BufReader, AsyncBufReadExt};

let file = File::open("log.txt").await?;
let reader = BufReader::new(file);
let mut lines = reader.lines();

while let Some(line) = lines.next_line().await? {
    println!("{line}");
}
\`\`\`

**tokio::io::copy — efficient async piping:**
\`\`\`
// Copy all bytes from reader to writer
let bytes_copied = tokio::io::copy(&mut reader, &mut writer).await?;
\`\`\`

**Key principle:** use tokio::fs instead of std::fs, tokio::net instead of std::net. The std versions block; the tokio versions are async.`}],questions:[{q:"What is the relationship between Stream and Iterator? How do stream combinators compare to iterator combinators?",a:"Stream is the async version of Iterator. Iterator::next() returns Option<T> synchronously (blocking). Stream::poll_next() returns Poll<Option<T>> asynchronously (non-blocking). Stream combinators (map, filter, fold, collect, take, skip, etc.) mirror Iterator combinators exactly, but they work with async closures and produce async results. The key difference: consuming a stream requires .await (e.g., stream.collect().await), and stream closures can themselves be async. You also need the StreamExt trait (from tokio-stream or futures) to use combinator methods, whereas Iterator methods are available directly.",hint:"Compare Iterator::next() return type with Stream::poll_next() return type.",check:l=>{const s=l.toLowerCase();return(s.includes("async")||s.includes("poll"))&&(s.includes("iterator")||s.includes("next"))&&(s.includes("option")||s.includes("same")||s.includes("mirror"))}}]},{id:"select-join",icon:"🔀",color:"#DC2626",title:"Select & Join",subtitle:"tokio::select! for racing futures, tokio::join! for concurrent execution, and when to use each",resources:[{type:"read",title:"Tokio — Select",url:"https://tokio.rs/tokio/tutorial/select"},{type:"read",title:"Tokio — Bridging with sync code",url:"https://tokio.rs/tokio/tutorial/bridging"},{type:"video",title:"Tokio — Tower of Async Abstractions",url:"https://www.youtube.com/watch?v=sA3gXhzfnBg"}],content:[{heading:"tokio::join! — Run Futures Concurrently",body:`**join! runs multiple futures concurrently and waits for ALL of them to complete.**

\`\`\`
use tokio;

async fn fetch_user() -> User { /* ... */ }
async fn fetch_orders() -> Vec<Order> { /* ... */ }
async fn fetch_notifications() -> Vec<Notification> { /* ... */ }

#[tokio::main]
async fn main() {
    // Sequential (slow):
    let user = fetch_user().await;
    let orders = fetch_orders().await;         // Waits for user first
    let notifs = fetch_notifications().await;  // Waits for orders first

    // Concurrent with join! (fast):
    let (user, orders, notifs) = tokio::join!(
        fetch_user(),
        fetch_orders(),
        fetch_notifications(),
    );
    // All three run concurrently! Total time = max(individual times)
}
\`\`\`

**join! variants:**

| Macro | Behavior | Returns |
|---|---|---|
| **join!** | Wait for ALL futures | Tuple of all results |
| **try_join!** | Wait for all, short-circuit on first Err | Result<tuple, error> |

\`\`\`
use tokio::try_join;

async fn load_data() -> Result<(User, Vec<Order>), Error> {
    let (user, orders) = try_join!(
        fetch_user(),    // Returns Result<User, Error>
        fetch_orders(),  // Returns Result<Vec<Order>, Error>
    )?;
    // If either fails, the other is cancelled and the error propagates
    Ok((user, orders))
}
\`\`\``},{heading:"tokio::select! — Race Futures",body:`**select! runs multiple futures and completes when the FIRST one finishes. The rest are cancelled.**

\`\`\`
use tokio::time::{sleep, Duration};

async fn fetch_with_timeout() -> Option<String> {
    tokio::select! {
        result = fetch_data() => {
            Some(result)
        }
        _ = sleep(Duration::from_secs(5)) => {
            println!("Timeout!");
            None
        }
    }
}
\`\`\`

**Common select! patterns:**

**1. Timeout:**
\`\`\`
tokio::select! {
    val = long_operation() => handle(val),
    _ = tokio::time::sleep(Duration::from_secs(10)) => {
        eprintln!("Operation timed out");
    }
}
\`\`\`

**2. Cancellation via channel:**
\`\`\`
let (shutdown_tx, mut shutdown_rx) = tokio::sync::oneshot::channel();

tokio::select! {
    _ = server.run() => println!("Server stopped"),
    _ = &mut shutdown_rx => println!("Shutdown signal received"),
}
\`\`\`

**3. Multiple event sources (event loop):**
\`\`\`
loop {
    tokio::select! {
        msg = rx.recv() => {
            match msg {
                Some(m) => handle_message(m),
                None => break, // Channel closed
            }
        }
        _ = tick_interval.tick() => {
            do_periodic_work();
        }
        _ = shutdown.recv() => {
            println!("Shutting down");
            break;
        }
    }
}
\`\`\`

**select! is biased by default** — branches are checked in order. If multiple are ready, the first wins. Use \`biased;\` explicitly for intentional priority ordering.`}],questions:[{q:"What is the difference between join! and select!? When would you use each?",a:"join! runs all futures concurrently and waits for ALL of them to complete. It's like 'do these things in parallel and give me all results.' Use it when you need all results (e.g., fetch user AND orders AND notifications). select! runs all futures concurrently but completes when the FIRST one finishes, cancelling the rest. It's like 'race these futures and give me the first result.' Use it for: timeouts (race operation vs timer), cancellation (race work vs shutdown signal), and event loops (wait for whichever event comes first). Key difference: join! always runs all futures to completion; select! drops unfinished futures when one completes.",hint:"join! = AND (all must complete). select! = OR (first to complete wins).",check:l=>{const s=l.toLowerCase();return(s.includes("all")||s.includes("every"))&&(s.includes("first")||s.includes("one")||s.includes("race")||s.includes("cancel"))}},{q:"In try_join!, what happens to the other futures when one returns Err?",a:"When one future in try_join! returns Err, the other futures are immediately cancelled (dropped). The error from the first failing future is propagated as the result of try_join!. The cancelled futures' destructors run (Drop is called), cleaning up any resources they held. This is safe because Rust futures support cancellation by design — dropping a future is always valid, and any state held by the future is cleaned up through Drop implementations. This behavior is important for error propagation: if one API call fails, there's usually no point waiting for the others.",hint:"What happens when you drop a Future?",check:l=>{const s=l.toLowerCase();return(s.includes("cancel")||s.includes("drop"))&&(s.includes("error")||s.includes("err")||s.includes("propagat"))}}]},{id:"pin-unpin",icon:"📌",color:"#C2410C",title:"Pin & Unpin",subtitle:"Why pinning exists, self-referential structs, and how Pin<&mut T> interacts with async/await",resources:[{type:"read",title:"Rust Async Book — Pinning",url:"https://rust-lang.github.io/async-book/04_pinning/01_chapter.html"},{type:"read",title:"Fasterthanlime — Pin and suffering",url:"https://fasterthanli.me/articles/pin-and-suffering"},{type:"video",title:"Jon Gjengset — Crust of Rust: Pinning",url:"https://www.youtube.com/watch?v=DkMwYxfSYNQ"},{type:"read",title:"std::pin module documentation",url:"https://doc.rust-lang.org/std/pin/index.html"}],content:[{heading:"The Problem: Self-Referential Structs",body:`**async fn generates state machines that may reference their own fields. Moving such a struct invalidates internal pointers.**

\`\`\`
async fn example() {
    let data = vec![1, 2, 3];
    let reference = &data;  // Points to data
    some_async_op().await;
    println!("{:?}", reference); // Uses reference after await
}
\`\`\`

**The compiler generates a struct like:**
\`\`\`
struct ExampleFuture {
    data: Vec<i32>,
    reference: *const Vec<i32>, // Points to self.data!
}
\`\`\`

**The problem:** if this struct is moved to a new memory location, \`reference\` still points to the OLD location — a dangling pointer. Moving a self-referential struct is unsafe.

**In most of Rust, this isn't an issue** because the borrow checker prevents self-referential structs entirely. But async state machines need them to hold references across .await points.

**Pin is the solution:** it guarantees a value will not be moved in memory.`},{heading:"How Pin Works",body:`**Pin<P> wraps a pointer P and guarantees the pointed-to value won't be moved.**

\`\`\`
use std::pin::Pin;

let mut data = String::from("hello");

// Pin to the stack (common in async code)
let pinned: Pin<&mut String> = Pin::new(&mut data);
// pinned.as_mut() gives you &mut String, but you can't move the String

// Pin to the heap (for spawning tasks)
let boxed: Pin<Box<String>> = Box::pin(String::from("hello"));
\`\`\`

**The Unpin trait:**
- **Unpin** means "this type is safe to move even when pinned" — pinning has no effect
- **Most types implement Unpin** automatically (i32, String, Vec<T>, etc.)
- **Futures generated by async fn are !Unpin** (they may be self-referential)

| Type | Unpin? | Reason |
|---|---|---|
| i32, String, Vec<T> | Yes | No self-references |
| Box<T>, Arc<T> | Yes | Pointer is movable (target stays put) |
| async fn future | No (!Unpin) | May have self-referential state |
| Manually impl Future | Depends | You decide |

**Practical rules:**
1. When you call .await, the compiler handles pinning automatically
2. When you use tokio::spawn, Box::pin is used internally
3. You only deal with Pin manually when implementing Future by hand or building custom combinators`},{heading:"Pin in Practice",body:`**You rarely write Pin code directly. Here's when it matters and how to handle it.**

**Spawning tasks (handled for you):**
\`\`\`
// tokio::spawn internally Box::pins the future
tokio::spawn(async {
    // This future is !Unpin (self-referential)
    // Tokio handles the pinning
});
\`\`\`

**Returning futures from functions:**
\`\`\`
// impl Future — compiler handles it
async fn foo() -> u32 { 42 }

// Box<dyn Future> — must pin
fn bar() -> Pin<Box<dyn Future<Output = u32>>> {
    Box::pin(async { 42 })
}
\`\`\`

**In select! or manual polling:**
\`\`\`
use tokio::pin;

async fn example() {
    let fut1 = async { 1 };
    let fut2 = async { 2 };

    // pin! macro pins futures to the stack
    tokio::pin!(fut1);
    tokio::pin!(fut2);

    tokio::select! {
        v = &mut fut1 => println!("fut1: {v}"),
        v = &mut fut2 => println!("fut2: {v}"),
    }
}
\`\`\`

**Summary:** Pin exists to make async/await safe. The compiler and runtime handle 99% of pinning for you. You only need to understand it when the compiler gives you a Pin-related error or when you're building async primitives.`}],questions:[{q:"Why do async fn futures need Pin but regular structs don't?",a:"Regular structs in Rust can't be self-referential — the borrow checker prevents a struct from containing a reference to its own field. But async fn generates state machines that hold values AND references to those values across .await points. These cross-await references create self-referential structs. If such a struct is moved in memory, the internal references become dangling pointers. Pin prevents this by guaranteeing the struct won't be moved after it's pinned. Regular structs don't need Pin because they can't contain self-references, so moving them is always safe. Most regular types implement Unpin, meaning Pin has no effect on them.",hint:"What happens to a pointer that references its own struct when the struct moves?",check:l=>{const s=l.toLowerCase();return(s.includes("self-referential")||s.includes("self referential")||s.includes("reference"))&&(s.includes("move")||s.includes("dangle")||s.includes("await"))}}]},{id:"pitfalls",icon:"⚠️",color:"#D97706",title:"Common Pitfalls",subtitle:"Holding locks across .await, Send bounds, blocking in async, and how to debug async Rust",resources:[{type:"read",title:"Tokio — Common pitfalls",url:"https://tokio.rs/tokio/tutorial/shared-state"},{type:"read",title:"Alice Ryhl — Async: What is blocking?",url:"https://ryhl.io/blog/async-what-is-blocking/"},{type:"read",title:"Tokio Console — async debugging tool",url:"https://github.com/tokio-rs/console"}],content:[{heading:"Holding Locks Across .await",body:`**Never hold a std::sync::Mutex lock across an .await point. It can deadlock the runtime.**

\`\`\`
// BAD: MutexGuard held across .await
let mut guard = mutex.lock().unwrap();
*guard += 1;
some_async_operation().await; // Guard still held! Other tasks blocked!
// guard dropped here

// GOOD: Drop the guard before .await
{
    let mut guard = mutex.lock().unwrap();
    *guard += 1;
} // Guard dropped here
some_async_operation().await;

// GOOD: Use tokio::sync::Mutex instead
let mut guard = tokio_mutex.lock().await;
*guard += 1;
some_async_operation().await; // OK with tokio Mutex
\`\`\`

**Why this is a problem:**
- std::sync::Mutex blocks the thread while waiting for the lock
- In async code, blocking the thread blocks ALL tasks on that thread
- If task A holds the lock and awaits, and task B (on the same thread) needs the lock, it blocks — deadlock

**Solutions:**

| Approach | When to Use |
|---|---|
| Drop guard before .await | Short critical sections |
| tokio::sync::Mutex | Lock held across .await points |
| Clone data, release lock | When you need data, not lock |
| Channels | Restructure as message passing |

**Rule of thumb:** use std::sync::Mutex for synchronous-only locks (fast, no .await inside). Use tokio::sync::Mutex when you need to hold a lock across .await points.`},{heading:"Send Bounds and Non-Send Types",body:`**When using multi-threaded Tokio, spawned futures must be Send. This catches many developers off guard.**

\`\`\`
use std::rc::Rc;

// This FAILS with multi-threaded runtime:
tokio::spawn(async {
    let data = Rc::new(42); // Rc is not Send!
    some_operation().await;
    println!("{data}");
    // ERROR: future is not Send
});

// Fix 1: Use Arc instead of Rc
tokio::spawn(async {
    let data = Arc::new(42); // Arc is Send!
    some_operation().await;
    println!("{data}");
});

// Fix 2: Don't hold non-Send type across .await
tokio::spawn(async {
    {
        let data = Rc::new(42);
        println!("{data}");
    } // Rc dropped before .await
    some_operation().await;
});
\`\`\`

**Common non-Send types that cause issues:**
- **Rc<T>** — use Arc<T> instead
- **RefCell<T>** — use tokio::sync::Mutex or std::sync::Mutex
- **MutexGuard** (std) — don't hold across .await
- **&dyn Trait** (without Send bound) — add + Send bound

**The error message** "future cannot be sent between threads safely" means a non-Send type is alive across an .await point. Check which variable spans the .await and fix its type or scope.`},{heading:"Blocking in Async Code",body:`**Blocking calls in async code starve the runtime. Always offload blocking work.**

**Things that block (never do in async):**
- std::thread::sleep() → use tokio::time::sleep()
- std::fs::read() → use tokio::fs::read()
- std::net::TcpStream → use tokio::net::TcpStream
- CPU-heavy computation → use spawn_blocking()
- Synchronous database drivers → use async drivers (sqlx)
- Waiting on std::sync::Mutex → use tokio::sync::Mutex

**spawn_blocking for CPU-bound work:**
\`\`\`
let hash = tokio::task::spawn_blocking(move || {
    // This runs on a separate thread pool
    // designed for blocking operations
    argon2::hash_password(password)
}).await.unwrap();
\`\`\`

**Debugging async performance:**
\`\`\`
// Install tokio-console for async debugging
// Cargo.toml: console-subscriber = "0.4"

#[tokio::main]
async fn main() {
    console_subscriber::init(); // Enable console
    // Now run: tokio-console in another terminal
    // See all tasks, their state, poll times
}
\`\`\`

**tokio-console shows:**
- Which tasks are running, idle, or blocked
- How long each poll() takes (detect slow tasks)
- Task wakeup patterns (detect busy-polling)
- Resource utilization (too few/many threads)`}],questions:[{q:"You see this error: 'future cannot be sent between threads safely'. What does it mean and how do you fix it?",a:"This error means a spawned future contains a type that doesn't implement Send, and that type is alive (in scope) across an .await point. Since the multi-threaded Tokio runtime can move tasks between threads at .await points, all state held across .await must be Send. Common causes: (1) Rc<T> held across .await — fix: use Arc<T>. (2) RefCell<T> across .await — fix: use tokio::sync::Mutex. (3) std::sync::MutexGuard across .await — fix: drop the guard before .await or use tokio::sync::Mutex. (4) A &dyn Trait without Send bound. The fix strategy: identify which variable spans the .await (the error message usually points to it), then either change its type to a Send alternative, or restructure the code so it's dropped before the .await.",hint:"Which types are not Send? What happens at an .await point in multi-threaded mode?",check:l=>{const s=l.toLowerCase();return(s.includes("send")||s.includes("rc")||s.includes("arc"))&&(s.includes("await")||s.includes("thread")||s.includes("move"))}}]},{id:"comparison",icon:"🌐",color:"#2563EB",title:"Comparison: Go Goroutines & JS Async",subtitle:"How Rust's async model compares to Go's goroutines and JavaScript's event loop — tradeoffs and performance",resources:[{type:"read",title:"Rust vs Go — Async comparison",url:"https://www.shuttle.dev/blog/2024/01/09/getting-started-with-rust-async"},{type:"read",title:"Without Boats — Why async Rust?",url:"https://without.boats/blog/why-async-rust/"},{type:"video",title:"ThePrimeagen — Rust async vs Go goroutines",url:"https://www.youtube.com/watch?v=lJ5Gn1i3aAk"}],content:[{heading:"Rust async vs Go Goroutines",body:`**Rust and Go take fundamentally different approaches to async concurrency.**

| Aspect | Rust async/await | Go goroutines |
|---|---|---|
| **Model** | Poll-based futures | Green threads (M:N) |
| **Runtime** | External (Tokio) | Built into language |
| **Scheduling** | Cooperative (yield at .await) | Preemptive (runtime can pause) |
| **Memory per task** | ~few hundred bytes | ~2-8 KB (growable stack) |
| **Max concurrent** | Millions (10M+) | Millions (but heavier) |
| **Blocking** | Programmer must avoid | Runtime handles transparently |
| **Cancellation** | Drop the future (instant) | Context cancellation (cooperative) |
| **Color problem** | Yes (async fn vs fn) | No (all functions are the same) |
| **Error handling** | Result<T, E> + ? | Multiple returns (val, err) |
| **GC** | No | Yes (GC pauses) |
| **Learning curve** | Steep (Pin, Send, lifetimes) | Gentle (goroutine + channel) |

**Go's advantage:** simplicity. go func() {} — that's it. No Pin, no Send, no colored functions, no runtime choice. Blocking is handled transparently by the runtime.

**Rust's advantages:**
- **Zero-cost:** no GC, no runtime overhead, no goroutine stack allocation
- **Predictable latency:** no GC pauses, no preemption surprises
- **Safety:** Send/Sync enforce thread safety at compile time
- **Cancellation:** dropping a future is instant and safe (Go's context.Cancel is cooperative)
- **Performance:** Rust async HTTP servers benchmark 2-5x faster than Go`},{heading:"Rust async vs JavaScript async",body:`**JavaScript's event loop is simpler but less powerful than Rust's model.**

| Aspect | Rust async | JavaScript async |
|---|---|---|
| **Futures** | Lazy (poll-based) | Eager (promises start immediately) |
| **Threading** | Multi-threaded (Tokio) | Single-threaded (event loop) |
| **Parallelism** | True parallelism via thread pool | No parallelism (use Workers) |
| **CPU-bound work** | spawn_blocking / Rayon | Blocks the event loop |
| **Memory model** | Ownership + Send/Sync | Shared mutable state (yolo) |
| **Error handling** | Result<T,E> (typed) | try/catch (untyped) |
| **Cancellation** | Drop (instant cleanup) | AbortController (manual) |
| **Runtime** | Bring your own | Built-in event loop |

**The function coloring problem:**
Both Rust and JavaScript have "colored" functions — sync and async functions are different types. You can't call async from sync without special handling:

\`\`\`
// Rust: can't .await in sync context
fn sync_fn() {
    // async_fn().await; // ERROR: not in async context
    // Fix: use block_on or restructure
}

// JS: same issue
function syncFn() {
    // await asyncFn(); // ERROR: can only await in async
}
\`\`\`

**Go doesn't have this problem** because goroutines are transparent — every function can be concurrent.

**When to choose Rust async:**
- Maximum performance matters (high-throughput servers, systems programming)
- Predictable latency (no GC pauses)
- Memory efficiency (millions of connections on limited RAM)

**When to choose Go:**
- Developer velocity matters more than raw performance
- Team has limited systems programming experience
- Building standard web services / microservices`}],questions:[{q:"What is the 'function coloring' problem in async Rust? How does Go avoid it?",a:"The function coloring problem means async and sync functions are fundamentally different types that don't mix easily. In Rust, an async fn returns a Future and can only be awaited in async context. A sync fn can't call .await directly — you need tokio::runtime::Handle::block_on() or restructure your code. This creates two 'colors' of functions that propagate through your codebase: once one function is async, its callers often need to be async too, spreading up the call stack ('viral coloring'). Go avoids this entirely because goroutines are transparent: any function can be run as a goroutine with `go func()`, and blocking operations are handled by the runtime without changing the function's signature. There's no async keyword, no Future type, no coloring. The tradeoff: Go's approach requires a runtime (with GC), while Rust's coloring enables zero-cost abstractions.",hint:"Can you call .await inside a non-async function in Rust?",check:l=>{const s=l.toLowerCase();return(s.includes("color")||s.includes("async")&&s.includes("sync"))&&(s.includes("goroutine")||s.includes("go ")||s.includes("transparent"))}},{q:"Why can Rust async servers achieve 2-5x higher throughput than Go servers in benchmarks?",a:"Several factors combine: (1) No garbage collector — Go's GC causes periodic pauses and uses CPU time. Rust has zero GC overhead. (2) Smaller per-task memory — Rust futures are ~hundreds of bytes (just the state machine enum). Go goroutines start at 2-8 KB with growable stacks. At millions of concurrent connections, this difference is enormous. (3) Zero-cost async — Rust's futures compile to state machines with no heap allocation (unless Box::pinned). Go's goroutines always allocate a stack. (4) No runtime overhead — Rust's cooperative scheduling at compile-time-known points has less overhead than Go's preemptive scheduling. (5) LLVM optimizations — Rust's monomorphized code enables aggressive inlining and vectorization. However, Go's throughput is still excellent for most applications, and its simpler model means faster development and fewer bugs.",hint:"Think about memory per connection, GC pauses, and compilation model.",check:l=>{const s=l.toLowerCase();return(s.includes("gc")||s.includes("garbage"))&&(s.includes("memory")||s.includes("allocat")||s.includes("stack")||s.includes("zero-cost"))}}]}];function Bp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:"Not quite. Try again or reveal."}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsx("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:"Check"}),n.jsx("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:"Reveal"}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsx("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:"Hint"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:"Correct!"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{children:"Answer"}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function Ip(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=Ls.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else{const h=d.startsWith("use ")||d.startsWith("fn ")||d.startsWith("let ")||d.startsWith("    ")||d.startsWith("//")||d.startsWith("pub ")||d.startsWith("impl ")||d.startsWith("async ")||d.startsWith("#[")||d.startsWith("tokio")||d.startsWith("enum ")||d.startsWith("struct ")||d.startsWith("loop")||d.startsWith("}")||d.startsWith("println!")||d.startsWith("eprintln!")||d.startsWith("match ")||d.startsWith("console")||d.startsWith("Ok(")||d.startsWith("stream")||d.startsWith("file")||d.startsWith("output")||d.startsWith("reader")||d.startsWith("while ")||d.startsWith("go ")||d.startsWith("function "),u=d.startsWith("use ")||d.startsWith("fn ")||d.startsWith("let ")||d.startsWith("//")||d.startsWith("pub ")||d.startsWith("async ")||d.startsWith("#[")||d.startsWith("enum ")||d.startsWith("struct ");h?T.push(n.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:11.5,color:"#D4D4D8",background:"#1C1C2E",padding:u?"10px 14px 2px":"2px 14px",whiteSpace:"pre-wrap",lineHeight:1.7,borderRadius:u?"6px 6px 0 0":0,marginTop:u?10:0},children:d},`c${m}`)):d===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(d)},`p${m}`)),m++}}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#7C3AED!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"ASYNC RUST"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Async Rust Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["async/await, Tokio runtime, futures, streams, select/join, Pin, and common pitfalls with cross-language comparisons.",n.jsx("br",{}),Ls.length," sections · ",F," concepts · ",Ls.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #7C3AED, #0891B2, #059669, #DC2626, #C2410C, #D97706, #2563EB)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Ls.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:">"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsx("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:"Learn"}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:">"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(Bp,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Curated resources: infographics, reading, video."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=zp[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:"Lazy futures + poll-based execution + zero-cost state machines = async Rust. Tokio drives it all."})]})}const Op={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},qs=[{id:"unsafe-rust",icon:"🚨",color:"#DC2626",title:"Unsafe Rust",subtitle:"The 5 superpowers that bypass the borrow checker — raw pointers, unsafe functions, unsafe traits, mutable statics, and extern",resources:[{type:"read",title:"The Rust Book — Unsafe Rust",url:"https://doc.rust-lang.org/book/ch20-01-unsafe-rust.html"},{type:"read",title:"The Rustonomicon — Meet Safe and Unsafe",url:"https://doc.rust-lang.org/nomicon/meet-safe-and-unsafe.html"},{type:"read",title:"Miri — An interpreter for Rust's MIR",url:"https://github.com/rust-lang/miri"},{type:"video",title:"Jon Gjengset — Unsafe & FFI in Rust",url:"https://www.youtube.com/watch?v=LsYDefGnMNM"}],content:[{heading:"Why Unsafe Exists",body:`**Rust's safety guarantees are conservative by design.** The compiler rejects programs it cannot prove safe, even if they are actually correct. \`unsafe\` lets you tell the compiler: "trust me, I've verified this manually."

**Critical misconception:** \`unsafe\` does NOT turn off the borrow checker. It only unlocks 5 specific superpowers. All other Rust rules still apply inside \`unsafe\` blocks.

**The 5 unsafe superpowers:**

| # | Superpower | What It Unlocks |
|---|---|---|
| 1 | **Dereference raw pointers** | Read/write through *const T and *mut T |
| 2 | **Call unsafe functions** | Functions with preconditions the compiler can't check |
| 3 | **Implement unsafe traits** | Traits with invariants the compiler can't verify (Send, Sync) |
| 4 | **Access mutable statics** | Global mutable state (\`static mut\`) |
| 5 | **Access union fields** | Read from unions where active field is unknown |

**The social contract:** when you write \`unsafe\`, you're making a promise that the code upholds Rust's safety invariants. If you break that promise, you get **undefined behavior** — the same dragons that haunt C/C++.

**Rule of thumb:** minimize the surface area of \`unsafe\`. Keep unsafe blocks as small as possible and wrap them in safe abstractions.`},{heading:"The 5 Superpowers In Detail",body:`**1. Dereferencing Raw Pointers (\`*const T\`, \`*mut T\`)**

Raw pointers bypass the borrow checker entirely. You can have multiple mutable pointers to the same location.

\`\`\`rust
let mut num = 42;
let r1 = &raw const num;   // *const i32
let r2 = &raw mut num;     // *mut i32

// Creating raw pointers is SAFE
// Dereferencing them is UNSAFE:
unsafe {
    println!("r1 = {}", *r1);
    println!("r2 = {}", *r2);
}
\`\`\`

**2. Calling Unsafe Functions**

Functions with preconditions the compiler cannot verify:

\`\`\`rust
unsafe fn dangerous() {
    // Caller must uphold safety invariants
}

unsafe { dangerous(); }
\`\`\`

**3. Implementing Unsafe Traits**

\`\`\`rust
unsafe trait ThreadSafe {}
unsafe impl ThreadSafe for MyType {}
\`\`\`

The most common: \`Send\` and \`Sync\`. The compiler auto-derives these, but you must manually implement them for types containing raw pointers.

**4. Accessing Mutable Statics**

\`\`\`rust
static mut COUNTER: u32 = 0;

unsafe {
    COUNTER += 1;
    println!("COUNTER: {}", *(&raw const COUNTER));
}
\`\`\`

Mutable statics are inherently unsafe because any thread can access them — data races are your problem.

**5. Accessing Union Fields**

\`\`\`rust
union MyUnion {
    i: i32,
    f: f32,
}

let u = MyUnion { i: 42 };
unsafe { println!("{}", u.f); } // Reinterpret bits
\`\`\`

You must know which field was last written — reading the wrong one is UB.`},{heading:"Safety Invariant Documentation Patterns",body:`**Every \`unsafe\` block should have a \`// SAFETY:\` comment explaining WHY it is correct.**

This is not optional — it's an enforced convention in the Rust standard library and major projects.

**Pattern 1: Inline safety comment**

\`\`\`rust
// SAFETY: ptr was just created from a valid reference
// and the slice length is bounds-checked above
let slice = unsafe {
    std::slice::from_raw_parts(ptr, len)
};
\`\`\`

**Pattern 2: Function-level safety docs**

\`\`\`rust
/// Converts a raw pointer to a reference.
///
/// # Safety
///
/// - \`ptr\` must be non-null and properly aligned
/// - \`ptr\` must point to a valid, initialized T
/// - The returned reference must not outlive
///   the allocation
unsafe fn ptr_to_ref<T>(ptr: *const T) -> &T {
    &*ptr
}
\`\`\`

**Pattern 3: Unsafe trait safety docs**

\`\`\`rust
/// # Safety
///
/// Implementors must guarantee that:
/// - The type can be safely sent between threads
/// - No interior mutability is exposed without
///   synchronization
unsafe trait MySend {}
\`\`\`

**Verification tool — Miri:**
\`\`\`bash
# Run your program under Miri to detect UB:
rustup +nightly component add miri
cargo +nightly miri run
cargo +nightly miri test
\`\`\`

Miri catches: use-after-free, out-of-bounds access, invalid pointer arithmetic, data races (with \`-Zmiri-check-number-validity\`), and more.`},{heading:"Safe Abstractions Over Unsafe Code",body:`**The most important pattern in Rust: wrap unsafe code in safe public APIs.** The unsafe internals are an implementation detail; callers never see them.

**Classic example: \`split_at_mut\`**

The borrow checker won't allow two mutable borrows of the same slice, even to non-overlapping regions. But we know it's safe:

\`\`\`rust
use std::slice;

fn split_at_mut(values: &mut [i32], mid: usize)
    -> (&mut [i32], &mut [i32])
{
    let len = values.len();
    let ptr = values.as_mut_ptr();
    assert!(mid <= len); // Bounds check!

    // SAFETY: mid is within bounds (asserted above),
    // and the two slices are non-overlapping
    unsafe {
        (
            slice::from_raw_parts_mut(ptr, mid),
            slice::from_raw_parts_mut(
                ptr.add(mid), len - mid
            ),
        )
    }
}
\`\`\`

**The pattern:**
1. Validate all preconditions in safe code (assertions, bounds checks)
2. Perform the unsafe operation
3. Return safe types (references, slices, etc.)

**Real-world examples of this pattern:**
- \`Vec<T>\` — manages raw heap allocation internally
- \`String\` — wraps raw byte manipulation with UTF-8 validation
- \`Mutex<T>\` — wraps platform-specific locking primitives
- \`Arc<T>\` — wraps atomic reference counting

**Rule:** if your safe abstraction makes it impossible for callers to trigger UB, the \`unsafe\` is sound.`}],questions:[{q:"What are the 5 unsafe superpowers in Rust? List all of them.",a:"The 5 unsafe superpowers are: (1) Dereference raw pointers (*const T and *mut T), (2) Call unsafe functions or methods, (3) Implement unsafe traits (like Send and Sync), (4) Access or modify mutable static variables (static mut), and (5) Access fields of unions. Importantly, the borrow checker and type system still apply inside unsafe blocks — unsafe only unlocks these specific capabilities.",hint:"Think about what the compiler normally prevents you from doing.",check:l=>{const s=l.toLowerCase();return s.includes("raw pointer")&&(s.includes("unsafe function")||s.includes("call unsafe"))&&(s.includes("static")||s.includes("mutable static"))}},{q:"Why can you CREATE raw pointers in safe code but only DEREFERENCE them in unsafe code? What's the reasoning?",a:"Creating a raw pointer (*const T or *mut T) is safe because it's just storing an address — nothing dangerous happens until you actually read from or write to that address. The danger comes from dereferencing: the pointer could be null, dangling, misaligned, or pointing to freed memory. The compiler can't verify pointer validity at compile time, so dereferencing requires unsafe to signal that the programmer has manually verified the pointer is valid. This separation allows safe code to prepare pointers (for FFI, for example) while restricting the actual dangerous operation.",hint:"What harm can a pointer cause if you never read from or write to it?",check:l=>{const s=l.toLowerCase();return(s.includes("creating")||s.includes("create")||s.includes("store"))&&(s.includes("dereference")||s.includes("read")||s.includes("write"))&&(s.includes("null")||s.includes("dangling")||s.includes("valid")||s.includes("safe"))}},{q:"Write a SAFETY comment for this unsafe block: `let s = unsafe { String::from_utf8_unchecked(bytes) };` where `bytes` comes from a JSON parser that already validated UTF-8.",a:"A proper SAFETY comment would be: `// SAFETY: bytes were produced by the JSON parser which validates UTF-8 encoding during parsing. All byte sequences returned by parse_json_string() are guaranteed to be valid UTF-8, as the parser rejects invalid sequences with JsonError::InvalidEncoding.` The key elements of a good SAFETY comment: (1) State the specific precondition of the unsafe function (from_utf8_unchecked requires valid UTF-8), (2) Explain WHY the precondition is met in this specific call site (the JSON parser validates), (3) Reference the source of the guarantee (the parser's behavior).",hint:"What does from_utf8_unchecked require? Why do you believe bytes meets that requirement?",check:l=>{const s=l.toLowerCase();return s.includes("utf-8")&&(s.includes("json")||s.includes("parser")||s.includes("valid"))}}]},{id:"raw-pointers",icon:"🎯",color:"#7C3AED",title:"Raw Pointers (*const T, *mut T)",subtitle:"Creating, casting, and dereferencing raw pointers — pointer arithmetic, null checks, and common patterns",resources:[{type:"read",title:"The Rustonomicon — Working with raw pointers",url:"https://doc.rust-lang.org/nomicon/raw-pointers.html"},{type:"read",title:"std::ptr module documentation",url:"https://doc.rust-lang.org/std/ptr/index.html"},{type:"video",title:"Rust raw pointers explained",url:"https://www.youtube.com/watch?v=_TlR4vu_0oE"}],content:[{heading:"Creating Raw Pointers",body:`**Raw pointers come in two flavors:**

| Type | Meaning | Analogy |
|---|---|---|
| \`*const T\` | Immutable raw pointer | C's \`const T*\` |
| \`*mut T\` | Mutable raw pointer | C's \`T*\` |

**From references (safe):**

\`\`\`rust
let x = 42;
let ptr: *const i32 = &raw const x;

let mut y = 42;
let mptr: *mut i32 = &raw mut y;
\`\`\`

**From addresses (dangerous):**

\`\`\`rust
let addr = 0x012345usize;
let ptr = addr as *const i32; // May be invalid!
\`\`\`

**From Box/Vec (common in data structures):**

\`\`\`rust
let boxed = Box::new(42);
let ptr: *const i32 = Box::into_raw(boxed);

// SAFETY: ptr was created from Box::into_raw
let boxed_back = unsafe { Box::from_raw(ptr as *mut i32) };
\`\`\`

**Key difference from references:**
- Raw pointers can be null
- Multiple \`*mut T\` to the same location is allowed
- No lifetime tracking
- No auto-deref`},{heading:"Pointer Arithmetic and Offset",body:`**Raw pointers support arithmetic, just like in C:**

\`\`\`rust
let arr = [10, 20, 30, 40, 50];
let base: *const i32 = arr.as_ptr();

unsafe {
    // .add(n) offsets by n * size_of::<T>() bytes
    let third = *base.add(2);   // 30
    let fifth = *base.add(4);   // 50

    // .offset(n) allows negative offsets
    let second = *base.offset(1);  // 20

    // .sub(n) subtracts offset
    let end = base.add(4);
    let fourth = *end.sub(1);   // 40
}
\`\`\`

**Safe helpers on raw pointers (no unsafe needed):**

| Method | Returns | Purpose |
|---|---|---|
| \`ptr.is_null()\` | bool | Null check |
| \`ptr.cast::<U>()\` | *const U | Type cast |
| \`ptr.wrapping_add(n)\` | *const T | Offset without UB on overflow |
| \`ptr.addr()\` | usize | Get address as integer |

**Common pitfall — dangling pointers:**

\`\`\`rust
let ptr: *const i32;
{
    let val = 42;
    ptr = &val as *const i32;
} // val dropped here!

// ptr is now dangling — UB to dereference
\`\`\`

**Always ensure the pointee outlives the pointer.** This is YOUR responsibility with raw pointers — the compiler won't help.`},{heading:"NonNull and Pointer Wrappers",body:`**\`NonNull<T>\` is a raw pointer guaranteed to be non-null.** It's the foundation for smart pointer types.

\`\`\`rust
use std::ptr::NonNull;

// Creating NonNull
let mut val = 42;
let nn = NonNull::new(&mut val as *mut i32)
    .expect("pointer was null!");

// Dereferencing (still unsafe)
unsafe { println!("{}", *nn.as_ptr()); }

// NonNull is covariant in T
// and implements Copy — just like *mut T
\`\`\`

**Why NonNull over *mut T?**

| Feature | *mut T | NonNull<T> |
|---|---|---|
| Can be null | Yes | No — guaranteed non-null |
| Null pointer optimization | No | Yes (Option<NonNull<T>> is pointer-sized) |
| Covariant | No (invariant) | Yes |
| Used in std lib | Rarely | Vec, Box, Rc, Arc internals |

**\`Unique<T>\` (unstable):** like NonNull but also implies ownership. Used internally by Box.

**Pattern: use NonNull for data structure internals:**

\`\`\`rust
struct LinkedList<T> {
    head: Option<NonNull<Node<T>>>,
    len: usize,
}

struct Node<T> {
    data: T,
    next: Option<NonNull<Node<T>>>,
}
\`\`\`

This gives you null pointer optimization (Option is pointer-sized) and documents the non-null invariant.`}],questions:[{q:"What is the difference between `*const T` and `&T` in Rust? Name at least 3 differences.",a:"Key differences: (1) *const T can be null, &T cannot. (2) *const T has no lifetime — the compiler doesn't track how long it's valid. &T has a lifetime that the borrow checker enforces. (3) *const T can be created from arbitrary addresses (e.g., `0x1234 as *const i32`). &T must always point to valid, initialized data. (4) Multiple *mut T to the same location is allowed. Only one &mut T at a time. (5) Dereferencing *const T requires unsafe. Dereferencing &T is always safe. (6) *const T doesn't auto-deref via the . operator. &T does.",hint:"Think about null, lifetimes, and the borrow checker.",check:l=>{const s=l.toLowerCase();return s.includes("null")&&(s.includes("lifetime")||s.includes("borrow"))&&(s.includes("unsafe")||s.includes("deref"))}},{q:"Why does `NonNull<T>` exist when we already have `*mut T`? What optimization does it enable?",a:"NonNull<T> exists primarily for the null pointer optimization (NPO). Because NonNull is guaranteed to never be null, Option<NonNull<T>> can use the null bit pattern to represent None, making it the same size as a plain pointer (8 bytes on 64-bit). With *mut T, Option<*mut T> would need an extra byte for the discriminant (16 bytes with alignment). NonNull is used extensively in standard library internals (Vec, Box, Rc, Arc) where we know pointers are never null, and the size optimization matters for collections that store millions of elements.",hint:"Think about Option and how much memory it uses.",check:l=>{const s=l.toLowerCase();return(s.includes("null")||s.includes("npo")||s.includes("optimization"))&&(s.includes("option")||s.includes("size")||s.includes("discriminant"))}}]},{id:"ffi",icon:"🌐",color:"#0891B2",title:"Foreign Function Interface (FFI)",subtitle:'Calling C from Rust and Rust from C — extern "C", #[no_mangle], repr(C), linking, and string conversion',resources:[{type:"read",title:"The Rustonomicon — FFI",url:"https://doc.rust-lang.org/nomicon/ffi.html"},{type:"read",title:"Rust FFI Guide",url:"https://doc.rust-lang.org/reference/items/external-blocks.html"},{type:"read",title:"The bindgen User Guide",url:"https://rust-lang.github.io/rust-bindgen/"},{type:"read",title:"cbindgen User Guide",url:"https://github.com/mozilla/cbindgen"},{type:"video",title:"Rust FFI — Calling C from Rust and back",url:"https://www.youtube.com/watch?v=jNKBsU2DfwA"}],content:[{heading:'extern "C" and Calling Conventions',body:`**\`extern "C"\` tells Rust to use the C calling convention (ABI).** This is essential for cross-language function calls.

\`\`\`rust
// Declare external C functions
#[link(name = "m")]  // Link to libm
unsafe extern "C" {
    fn sqrt(x: f64) -> f64;
    fn pow(base: f64, exp: f64) -> f64;
}

fn main() {
    unsafe {
        println!("sqrt(144) = {}", sqrt(144.0));
        println!("2^10 = {}", pow(2.0, 10.0));
    }
}
\`\`\`

**Available calling conventions:**

| ABI | When to Use |
|---|---|
| \`extern "C"\` | Default for FFI. C calling convention |
| \`extern "C-unwind"\` | Like "C" but allows unwinding (panics/exceptions) |
| \`extern "system"\` | stdcall on Windows x86, C elsewhere |
| \`extern "stdcall"\` | Win32 API calls |
| \`extern "Rust"\` | Default Rust ABI (unstable, not for FFI) |

**Key rule:** if you don't specify an ABI, Rust functions use \`extern "Rust"\` which is NOT compatible with C. Always use \`extern "C"\` for FFI.

**Marking C functions as safe:**
\`\`\`rust
unsafe extern "C" {
    // Tell Rust this C function is safe to call
    safe fn abs(x: i32) -> i32;
}

fn main() {
    println!("{}", abs(-5)); // No unsafe needed!
}
\`\`\`

Only mark functions \`safe\` when you're certain they can't cause UB for any input.`},{heading:"#[no_mangle] and repr(C)",body:`**\`#[no_mangle]\` prevents Rust from mangling function names.** Without it, \`my_function\` might become \`_ZN7my_crate11my_function17h1a2b3c4d5e6f7g8hE\`.

\`\`\`rust
// Expose a function to C with its exact name
#[unsafe(no_mangle)]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
\`\`\`

**\`#[repr(C)]\` makes struct layout match C:**

\`\`\`rust
#[repr(C)]
pub struct Point {
    x: f64,
    y: f64,
}

#[repr(C)]
pub struct Rect {
    origin: Point,
    size: Point,
}
\`\`\`

**Without \`repr(C)\`, Rust may:**
- Reorder fields for better alignment
- Add different padding than C expects
- Use a different struct size

**Other repr options:**

| Repr | Effect |
|---|---|
| \`#[repr(C)]\` | C-compatible layout |
| \`#[repr(C, packed)]\` | No padding between fields |
| \`#[repr(transparent)]\` | Same layout as the single field (newtypes) |
| \`#[repr(u8)]\` / \`#[repr(i32)]\` | Enum discriminant size |

**Type mapping table — Rust to C:**

| Rust | C | Size |
|---|---|---|
| i8 / u8 | int8_t / uint8_t | 1 byte |
| i32 / u32 | int32_t / uint32_t | 4 bytes |
| i64 / u64 | int64_t / uint64_t | 8 bytes |
| f32 / f64 | float / double | 4 / 8 bytes |
| *const T | const T* | pointer-sized |
| *mut T | T* | pointer-sized |
| bool | _Bool / bool | 1 byte |
| () | void | 0 bytes |`},{heading:"String Conversion — CString and CStr",body:`**C strings are null-terminated; Rust strings are length-prefixed.** You must convert between them explicitly.

**Rust → C: Use \`CString\`**

\`\`\`rust
use std::ffi::CString;

let rust_str = "Hello, C!";
let c_string = CString::new(rust_str)
    .expect("CString::new failed");

// Get a *const c_char for C
let c_ptr = c_string.as_ptr();

unsafe {
    // Pass c_ptr to a C function
    some_c_function(c_ptr);
}
// c_string must outlive c_ptr!
\`\`\`

**C → Rust: Use \`CStr\`**

\`\`\`rust
use std::ffi::CStr;
use std::os::raw::c_char;

unsafe fn read_c_string(ptr: *const c_char) -> String {
    // SAFETY: ptr must point to a valid
    // null-terminated C string
    let c_str = CStr::from_ptr(ptr);
    c_str.to_string_lossy().into_owned()
}
\`\`\`

**Common pitfall — Rust strings can contain null bytes!**

\`\`\`rust
let s = "hello\\0world";
let result = CString::new(s);
// Returns Err(NulError) because C strings
// can't have interior nulls!
\`\`\`

**OsString for OS-native paths:**

| Type | Encoding | Use Case |
|---|---|---|
| String / &str | UTF-8 | Rust strings |
| CString / &CStr | Null-terminated bytes | C interop |
| OsString / &OsStr | Platform-native | File paths, env vars |
| PathBuf / &Path | Platform-native | File system paths |`},{heading:"Calling C from Rust — Complete Example",body:`**Step-by-step: using the C snappy compression library from Rust.**

**1. Declare the C functions:**

\`\`\`rust
use libc::{c_int, size_t};

#[link(name = "snappy")]
unsafe extern "C" {
    fn snappy_compress(
        input: *const u8,
        input_length: size_t,
        compressed: *mut u8,
        compressed_length: *mut size_t,
    ) -> c_int;

    fn snappy_max_compressed_length(
        source_length: size_t,
    ) -> size_t;
}
\`\`\`

**2. Create a safe wrapper:**

\`\`\`rust
pub fn compress(src: &[u8]) -> Vec<u8> {
    unsafe {
        let srclen = src.len() as size_t;
        let mut dstlen =
            snappy_max_compressed_length(srclen);
        let mut dst =
            Vec::with_capacity(dstlen as usize);

        // SAFETY: dst has enough capacity,
        // src is a valid slice
        snappy_compress(
            src.as_ptr(), srclen,
            dst.as_mut_ptr(), &mut dstlen,
        );
        dst.set_len(dstlen as usize);
        dst
    }
}
\`\`\`

**3. Configure Cargo.toml:**

\`\`\`toml
[dependencies]
libc = "0.2"

[build-dependencies]
pkg-config = "0.3"
\`\`\`

**4. Build script (build.rs):**

\`\`\`rust
fn main() {
    pkg_config::Config::new()
        .probe("snappy")
        .unwrap();
}
\`\`\`

**Linking options:**

| Attribute | Effect |
|---|---|
| \`#[link(name = "snappy")]\` | Dynamic link (default) |
| \`#[link(name = "snappy", kind = "static")]\` | Static link |
| \`#[link(name = "CoreFoundation", kind = "framework")]\` | macOS framework |`},{heading:"Calling Rust from C",body:`**Expose Rust functions as a C-compatible shared library.**

**Rust side (lib.rs):**

\`\`\`rust
use std::ffi::{CStr, CString};
use std::os::raw::c_char;

#[unsafe(no_mangle)]
pub extern "C" fn rust_add(a: i32, b: i32) -> i32 {
    a + b
}

#[unsafe(no_mangle)]
pub extern "C" fn rust_greeting(
    name: *const c_char
) -> *mut c_char {
    // SAFETY: name must be a valid C string
    let c_str = unsafe { CStr::from_ptr(name) };
    let name_str = c_str.to_str().unwrap_or("world");
    let greeting = format!("Hello, {}!", name_str);
    CString::new(greeting)
        .unwrap()
        .into_raw() // Caller must free!
}

#[unsafe(no_mangle)]
pub extern "C" fn rust_free_string(
    s: *mut c_char
) {
    if !s.is_null() {
        // SAFETY: s was created by into_raw()
        unsafe { drop(CString::from_raw(s)); }
    }
}
\`\`\`

**Cargo.toml:**

\`\`\`toml
[lib]
crate-type = ["cdylib"]  # shared library
\`\`\`

**C side (main.c):**

\`\`\`c
#include <stdio.h>

extern int rust_add(int a, int b);
extern char* rust_greeting(const char* name);
extern void rust_free_string(char* s);

int main() {
    printf("Sum: %d\\n", rust_add(3, 4));

    char* greeting = rust_greeting("Alice");
    printf("%s\\n", greeting);
    rust_free_string(greeting);

    return 0;
}
\`\`\`

**Build and run:**

\`\`\`bash
cargo build --release
gcc main.c -o main -L target/release -l mylib
LD_LIBRARY_PATH=target/release ./main
\`\`\`

**Memory ownership rule:** whoever allocates must free. If Rust allocates (like \`CString::into_raw\`), provide a Rust function to free it.`},{heading:"bindgen and cbindgen — Automated Bindings",body:`**Don't write FFI bindings by hand — generate them.**

**bindgen: C headers → Rust bindings**

\`\`\`bash
# Install
cargo install bindgen-cli

# Generate bindings from a C header
bindgen wrapper.h -o bindings.rs
\`\`\`

**Or use it as a build dependency (build.rs):**

\`\`\`rust
// build.rs
fn main() {
    println!("cargo:rerun-if-changed=wrapper.h");
    let bindings = bindgen::Builder::default()
        .header("wrapper.h")
        .parse_callbacks(
            Box::new(bindgen::CargoCallbacks::new())
        )
        .generate()
        .expect("Unable to generate bindings");
    bindings
        .write_to_file("src/bindings.rs")
        .expect("Couldn't write bindings!");
}
\`\`\`

**cbindgen: Rust code → C headers**

\`\`\`bash
# Install
cargo install cbindgen

# Generate a C header from Rust source
cbindgen --crate mylib --output mylib.h
\`\`\`

**cbindgen.toml for configuration:**

\`\`\`toml
language = "C"
include_guard = "MY_LIB_H"
autogen_warning = "/* Auto-generated. Do not edit. */"

[export]
include = ["Point", "rust_add", "rust_greeting"]
\`\`\`

**Comparison:**

| Tool | Direction | Input | Output |
|---|---|---|---|
| **bindgen** | C → Rust | C/C++ headers (.h) | Rust source (bindings.rs) |
| **cbindgen** | Rust → C | Rust source (lib.rs) | C header (lib.h) |

**When to use each:**
- Building a Rust program that calls C libraries → bindgen
- Building a Rust library consumed by C/C++ → cbindgen
- Both → when wrapping a C library AND exposing new Rust functions`}],questions:[{q:"You want to call the C function `int strcmp(const char* s1, const char* s2)` from Rust. Write the extern declaration and a safe wrapper.",a:'Declaration: `unsafe extern "C" { fn strcmp(s1: *const c_char, s2: *const c_char) -> c_int; }`. Safe wrapper: `fn safe_strcmp(a: &str, b: &str) -> std::cmp::Ordering { let ca = CString::new(a).unwrap(); let cb = CString::new(b).unwrap(); let result = unsafe { strcmp(ca.as_ptr(), cb.as_ptr()) }; result.cmp(&0) }`. Key points: (1) Convert Rust &str to CString (adds null terminator), (2) CString must outlive the pointer passed to C, (3) Wrap in safe API that takes &str and returns Ordering.',hint:"Remember Rust strings aren't null-terminated. You need CString.",check:l=>{const s=l.toLowerCase();return(s.includes("extern")||s.includes("unsafe"))&&(s.includes("cstring")||s.includes("c_char")||s.includes("null"))}},{q:"What is the difference between bindgen and cbindgen? When would you use each?",a:"bindgen generates Rust FFI bindings FROM C/C++ header files — use it when your Rust program needs to call a C library. cbindgen generates C/C++ header files FROM Rust source code — use it when you're building a Rust library that C/C++ programs need to consume. bindgen reads .h files and produces bindings.rs. cbindgen reads your Rust lib.rs and produces a .h file. You'd use both together when you're wrapping an existing C library (bindgen) and simultaneously exposing new Rust functionality back to C (cbindgen).",hint:"One goes C-to-Rust, the other goes Rust-to-C.",check:l=>{const s=l.toLowerCase();return s.includes("bindgen")&&s.includes("cbindgen")&&(s.includes("c to rust")||s.includes("c header")||s.includes("rust to c")||s.includes("header")&&s.includes("rust"))}}]},{id:"declarative-macros",icon:"📝",color:"#D97706",title:"Declarative Macros (macro_rules!)",subtitle:"Pattern-matching macros — repetition operators, fragment specifiers, hygiene, and common patterns",resources:[{type:"read",title:"The Rust Book — Macros",url:"https://doc.rust-lang.org/book/ch20-05-macros.html"},{type:"read",title:"The Little Book of Rust Macros",url:"https://veykril.github.io/tlborm/"},{type:"read",title:"Rust Reference — Macros by Example",url:"https://doc.rust-lang.org/reference/macros-by-example.html"},{type:"video",title:"Jon Gjengset — Macros in Rust",url:"https://www.youtube.com/watch?v=q6paRBbLgNw"}],content:[{heading:"macro_rules! Basics",body:'**Declarative macros match against patterns of Rust code and expand into generated code at compile time.** They work like a `match` expression but on token streams instead of values.\n\n```rust\nmacro_rules! say_hello {\n    () => {\n        println!("Hello!");\n    };\n    ($name:expr) => {\n        println!("Hello, {}!", $name);\n    };\n}\n\nsay_hello!();           // "Hello!"\nsay_hello!("Rustacean"); // "Hello, Rustacean!"\n```\n\n**Invocation syntax — all three are equivalent:**\n\n```rust\nmy_macro!();    // Parentheses (function-like)\nmy_macro![];    // Brackets (vec!-like)\nmy_macro!{};    // Braces (block-like)\n```\n\n**Fragment specifiers — what you can capture:**\n\n| Specifier | Matches | Example |\n|---|---|---|\n| `$x:expr` | Any expression | `42`, `a + b`, `foo()` |\n| `$x:ty` | A type | `i32`, `Vec<String>` |\n| `$x:ident` | An identifier | `foo`, `my_var` |\n| `$x:pat` | A pattern | `Some(x)`, `_`, `(a, b)` |\n| `$x:stmt` | A statement | `let x = 5` |\n| `$x:block` | A block | `{ println!("hi"); }` |\n| `$x:item` | An item | `fn foo() {}`, `struct Bar;` |\n| `$x:path` | A path | `std::io::Read` |\n| `$x:tt` | A single token tree | Anything! The "catch-all" |\n| `$x:literal` | A literal | `42`, `"hello"`, `true` |\n| `$x:meta` | A meta item | `derive(Debug)` |\n\n**`$x:tt` (token tree) is the most flexible** — it matches any single token or a balanced group of tokens in brackets/parens/braces.'},{heading:"Repetition Operators",body:`**Repetitions let macros accept variable numbers of arguments.** They use \`$(...)*\` or \`$(...)+\` syntax.

**The \`vec!\` macro — the classic example:**

\`\`\`rust
#[macro_export]
macro_rules! vec {
    ( $( $x:expr ),* ) => {
        {
            let mut temp = Vec::new();
            $(
                temp.push($x);
            )*
            temp
        }
    };
}

// Usage: vec![1, 2, 3]
// Expands to:
//   let mut temp = Vec::new();
//   temp.push(1);
//   temp.push(2);
//   temp.push(3);
//   temp
\`\`\`

**Repetition operators:**

| Operator | Meaning | Matches |
|---|---|---|
| \`$(...)*\` | Zero or more | \`()\`, \`(a)\`, \`(a, b, c)\` |
| \`$(...)+\` | One or more | \`(a)\`, \`(a, b)\` (not empty) |
| \`$(...)?\` | Zero or one | \`()\` or \`(a)\` |

**With separators:**

\`\`\`rust
macro_rules! list {
    // Comma-separated, zero or more
    ( $( $item:expr ),* ) => { ... };

    // Semicolon-separated, one or more
    ( $( $item:expr );+ ) => { ... };

    // Trailing separator allowed
    ( $( $item:expr ),* $(,)? ) => { ... };
}
\`\`\`

**Multiple repetition variables — must repeat the same number of times:**

\`\`\`rust
macro_rules! make_pairs {
    ( $( $key:expr => $val:expr ),* ) => {
        vec![ $( ($key, $val) ),* ]
    };
}

let pairs = make_pairs!(
    "a" => 1, "b" => 2, "c" => 3
);
// vec![("a", 1), ("b", 2), ("c", 3)]
\`\`\``},{heading:"Practical Macro Patterns",body:`**Pattern 1: HashMap literal**

\`\`\`rust
macro_rules! hashmap {
    ( $( $key:expr => $val:expr ),* $(,)? ) => {
        {
            let mut map = std::collections::HashMap::new();
            $( map.insert($key, $val); )*
            map
        }
    };
}

let m = hashmap!{
    "name" => "Rust",
    "year" => "2010",
};
\`\`\`

**Pattern 2: Builder-style struct initialization**

\`\`\`rust
macro_rules! builder {
    ($name:ident { $($field:ident: $ty:ty),* $(,)? }) => {
        pub struct $name { $( pub $field: $ty, )* }
        impl $name {
            pub fn new() -> Self {
                $name {
                    $( $field: Default::default(), )*
                }
            }
            $(
                pub fn $field(mut self, val: $ty) -> Self {
                    self.$field = val;
                    self
                }
            )*
        }
    };
}

builder!(Config {
    debug: bool,
    port: u16,
    host: String,
});

let cfg = Config::new()
    .debug(true)
    .port(8080)
    .host("localhost".into());
\`\`\`

**Pattern 3: Test helpers**

\`\`\`rust
macro_rules! assert_approx_eq {
    ($a:expr, $b:expr, $eps:expr) => {
        let (a, b, eps) = ($a, $b, $eps);
        assert!(
            (a - b).abs() < eps,
            "assert_approx_eq! failed: |{} - {}| = {} >= {}",
            a, b, (a - b).abs(), eps
        );
    };
}

assert_approx_eq!(3.14, std::f64::consts::PI, 0.01);
\`\`\`

**Macro hygiene:** variables created inside a macro don't leak into the caller's scope. The macro generates unique names internally.`}],questions:[{q:"Write a macro_rules! macro called `min!` that takes two or more expressions and returns the minimum value.",a:`\`\`\`rust
macro_rules! min {
    ($a:expr) => ($a);
    ($a:expr, $b:expr) => (if $a < $b { $a } else { $b });
    ($a:expr, $($rest:expr),+) => (min!($a, min!($($rest),+)));
}
\`\`\`
The macro uses three arms: (1) Base case with one argument returns it directly. (2) Two arguments uses a simple if comparison. (3) Three or more arguments uses recursion: compare the first against the minimum of the rest. This is the recursive descent pattern common in macro_rules! for variadic operations.`,hint:"Use recursion: compare the first element against the min of the remaining elements.",check:l=>{const s=l.toLowerCase();return(s.includes("macro_rules")||s.includes("macro"))&&(s.includes("recurs")||s.includes("rest")||s.includes("if"))}},{q:"What is the difference between `$x:expr` and `$x:tt` as fragment specifiers? When would you prefer one over the other?",a:"expr captures a complete, valid Rust expression and is strongly typed — the compiler verifies it's a valid expression at macro invocation. tt (token tree) captures any single token or balanced group of tokens without validation. Use expr when you know the input should be an expression (like function arguments) — it gives better error messages. Use tt when you need maximum flexibility: forwarding tokens to another macro, accepting syntax that isn't a valid Rust expression (like patterns or types in a generic context), or building complex macros where you process raw tokens. tt is the 'escape hatch' — it matches anything but provides no compile-time validation.",hint:"One is strongly typed, the other is a catch-all. Think about error messages.",check:l=>{const s=l.toLowerCase();return s.includes("expr")&&s.includes("tt")&&(s.includes("token")||s.includes("valid")||s.includes("any")||s.includes("flexible"))}}]},{id:"proc-macros",icon:"⚙️",color:"#059669",title:"Procedural Macros",subtitle:"Derive macros, attribute macros, and function-like macros — TokenStream, syn, quote, and building your own",resources:[{type:"read",title:"The Rust Book — Procedural Macros",url:"https://doc.rust-lang.org/book/ch20-05-macros.html"},{type:"read",title:"syn crate documentation",url:"https://docs.rs/syn/"},{type:"read",title:"quote crate documentation",url:"https://docs.rs/quote/"},{type:"read",title:"proc-macro-workshop (practice exercises)",url:"https://github.com/dtolnay/proc-macro-workshop"},{type:"video",title:"David Tolnay — Procedural macros workshop",url:"https://www.youtube.com/watch?v=geovSK3wMB8"}],content:[{heading:"Three Types of Procedural Macros",body:`**Procedural macros are Rust functions that take code as input and produce code as output.** Unlike \`macro_rules!\`, they operate on \`TokenStream\` and can do arbitrary computation.

**The three types:**

| Type | Syntax | Use Case |
|---|---|---|
| **Derive** | \`#[derive(MyTrait)]\` | Auto-implement traits for structs/enums |
| **Attribute** | \`#[my_attr]\` | Modify/annotate any item |
| **Function-like** | \`my_macro!(...)\` | Parse custom syntax |

**Key requirement:** proc macros must live in their own crate with \`proc-macro = true\`.

\`\`\`toml
# Cargo.toml for a proc macro crate
[lib]
proc-macro = true

[dependencies]
syn = "2.0"       # Parse Rust tokens
quote = "1.0"     # Generate Rust tokens
proc-macro2 = "1.0"  # TokenStream utilities
\`\`\`

**The pipeline:**

\`\`\`
Source Code (tokens)
    |
    v
TokenStream (input)
    |
    v
syn::parse() --> AST (DeriveInput, ItemFn, etc.)
    |
    v
Your logic (inspect fields, add methods, etc.)
    |
    v
quote!{} --> TokenStream (output)
    |
    v
Compiler inserts generated code
\`\`\`

**Key crates:**
- **\`syn\`** — parses TokenStream into a typed AST (DeriveInput, Fields, Ident, etc.)
- **\`quote\`** — converts Rust-like syntax back into TokenStream using \`quote!{}\`
- **\`proc-macro2\`** — a wrapper around proc_macro that works in unit tests`},{heading:"Custom Derive Macros",body:`**Derive macros auto-implement traits for structs and enums.** They're the most common type of proc macro.

**Complete example — auto-implementing a \`Describe\` trait:**

**1. Define the trait (my_traits/src/lib.rs):**

\`\`\`rust
pub trait Describe {
    fn describe() -> String;
}
\`\`\`

**2. Implement the proc macro (my_traits_derive/src/lib.rs):**

\`\`\`rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(Describe)]
pub fn derive_describe(
    input: TokenStream,
) -> TokenStream {
    let ast = parse_macro_input!(input as DeriveInput);
    let name = &ast.ident;

    let fields_desc = match &ast.data {
        syn::Data::Struct(data) => {
            let field_names: Vec<_> = data.fields
                .iter()
                .filter_map(|f| f.ident.as_ref())
                .map(|id| id.to_string())
                .collect();
            format!("fields: {}", field_names.join(", "))
        }
        _ => "not a struct".to_string(),
    };

    let desc = format!(
        "Struct '{}' with {}", name, fields_desc
    );

    let expanded = quote! {
        impl Describe for #name {
            fn describe() -> String {
                #desc.to_string()
            }
        }
    };

    expanded.into()
}
\`\`\`

**3. Use it:**

\`\`\`rust
use my_traits::Describe;
use my_traits_derive::Describe;

#[derive(Describe)]
struct User {
    name: String,
    age: u32,
    email: String,
}

fn main() {
    println!("{}", User::describe());
    // "Struct 'User' with fields: name, age, email"
}
\`\`\`

**The \`quote!\` macro uses \`#variable\` for interpolation** (like template literals). \`#name\` inserts the identifier, \`#desc\` inserts the string.`},{heading:"Attribute and Function-Like Macros",body:`**Attribute macros annotate items and can completely replace them:**

\`\`\`rust
// Definition
#[proc_macro_attribute]
pub fn log_calls(
    attr: TokenStream,   // Attribute arguments
    item: TokenStream,   // The annotated item
) -> TokenStream {
    let input = parse_macro_input!(item as syn::ItemFn);
    let name = &input.sig.ident;
    let body = &input.block;

    let expanded = quote! {
        fn #name() {
            println!("[LOG] Entering {}", stringify!(#name));
            let result = (|| #body)();
            println!("[LOG] Leaving {}", stringify!(#name));
            result
        }
    };
    expanded.into()
}

// Usage
#[log_calls]
fn process_data() {
    // ... function body
}
\`\`\`

**Attribute macros vs derive macros:**

| Feature | Derive | Attribute |
|---|---|---|
| Applies to | structs, enums | Any item (fn, struct, impl, mod) |
| Can modify item? | No — only adds code | Yes — replaces the item entirely |
| Multiple on same item? | Yes | Yes |
| Common use | Trait implementations | Routing (#[get("/"]), logging, testing |

**Function-like macros look like function calls:**

\`\`\`rust
// Definition
#[proc_macro]
pub fn sql(input: TokenStream) -> TokenStream {
    // Parse SQL syntax at compile time
    // Validate table names, column names
    // Generate type-safe query code
    let query = input.to_string();
    let expanded = quote! {
        SqlQuery::new(#query).validate().execute()
    };
    expanded.into()
}

// Usage
let results = sql!(
    SELECT name, age FROM users
    WHERE active = true
);
\`\`\`

**Real examples:** \`sqlx::query!()\`, \`serde_json::json!()\`, \`html!()\` in Yew/Leptos.`}],questions:[{q:"Why must procedural macros be defined in a separate crate? What would go wrong if they were in the same crate?",a:"Proc macros run at compile time as compiler plugins. They must be compiled BEFORE the crate that uses them. If a proc macro were in the same crate as its users, you'd have a circular dependency: the crate needs the macro to compile, but the macro IS part of the crate being compiled. The Rust compiler must load the proc macro as a dynamic library (.so/.dylib) and execute it during compilation of the consuming crate. This architecture requires the macro crate to be a separate, pre-compiled artifact. This is why you typically see the pattern: `my_crate` (trait definitions) + `my_crate_derive` (proc macro) + `my_crate` re-exports the derive.",hint:"Think about compilation order — what needs to exist first?",check:l=>{const s=l.toLowerCase();return(s.includes("compile")||s.includes("compilation"))&&(s.includes("before")||s.includes("circular")||s.includes("order")||s.includes("separate"))}},{q:"What are the roles of the `syn` and `quote` crates in procedural macros?",a:"syn parses a TokenStream (raw tokens from the compiler) into a structured, typed abstract syntax tree (AST). For example, syn::parse::<DeriveInput>(input) gives you access to the struct name, fields, types, generics, and attributes as proper Rust types you can inspect and manipulate. quote does the reverse: it takes Rust-like syntax and converts it back into a TokenStream that the compiler can use. The quote! macro uses #variable syntax for interpolation, making it easy to template generated code. Together: syn (parse tokens into AST) → your logic (inspect/transform) → quote (AST back to tokens). proc-macro2 is a compatibility layer that makes TokenStream work in unit tests (the built-in proc_macro crate only works during compilation).",hint:"One parses tokens, the other generates tokens.",check:l=>{const s=l.toLowerCase();return s.includes("syn")&&s.includes("quote")&&(s.includes("parse")||s.includes("ast")||s.includes("token"))}}]},{id:"popular-derives",icon:"📦",color:"#2563EB",title:"Popular Derive Macros",subtitle:"serde, clap, thiserror, Debug, Clone — the derive macros every Rustacean needs to know",resources:[{type:"read",title:"serde.rs — Derive documentation",url:"https://serde.rs/derive.html"},{type:"read",title:"clap — Derive API tutorial",url:"https://docs.rs/clap/latest/clap/_derive/_tutorial/index.html"},{type:"read",title:"thiserror documentation",url:"https://docs.rs/thiserror/"},{type:"read",title:"Rust std — Derivable traits",url:"https://doc.rust-lang.org/book/appendix-03-derivable-traits.html"}],content:[{heading:"Standard Library Derives",body:"**Rust's standard library provides these derivable traits — you'll use them on almost every struct:**\n\n| Derive | Purpose | When to Use |\n|---|---|---|\n| `Debug` | `{:?}` formatting | Almost always — essential for debugging |\n| `Clone` | Deep copy via `.clone()` | When you need duplicate values |\n| `Copy` | Implicit bitwise copy | Small value types (requires Clone) |\n| `PartialEq` / `Eq` | Equality comparison (`==`) | Comparisons, HashMap keys (Eq) |\n| `PartialOrd` / `Ord` | Ordering (`<`, `>`, sort) | Sorting, BTreeMap keys (Ord) |\n| `Hash` | Hash value for hash maps | HashMap/HashSet keys (requires Eq) |\n| `Default` | Default values | Struct initialization with `..Default::default()` |\n\n**Typical struct derives:**\n\n```rust\n#[derive(Debug, Clone, PartialEq, Eq, Hash)]\npub struct UserId(u64);\n\n#[derive(Debug, Clone, Default)]\npub struct Config {\n    pub debug: bool,\n    pub port: u16,\n    pub host: String,\n}\n\nlet cfg = Config {\n    port: 8080,\n    ..Default::default()\n};\n```\n\n**Copy vs Clone:**\n- `Copy` — implicit, bitwise, cheap. For types that fit in registers (integers, bools, tuples of Copy types)\n- `Clone` — explicit (`.clone()`), can be expensive. For heap-allocated types (String, Vec)\n- `Copy` requires `Clone` (it's a supertrait)\n- Never derive `Copy` on types with heap data (String, Vec, Box)"},{heading:"serde — Serialize and Deserialize",body:`**serde is Rust's serialization framework.** \`#[derive(Serialize, Deserialize)]\` auto-generates code to convert any struct to/from JSON, TOML, YAML, MessagePack, and 30+ other formats.

\`\`\`rust
use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
struct User {
    name: String,
    age: u32,
    #[serde(default)]
    active: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    email: Option<String>,
    #[serde(rename = "user_id")]
    id: u64,
}
\`\`\`

**Key serde attributes:**

| Attribute | Effect |
|---|---|
| \`#[serde(rename = "...")]\` | Use a different name in serialized form |
| \`#[serde(default)]\` | Use Default::default() if field missing |
| \`#[serde(skip)]\` | Skip field entirely |
| \`#[serde(skip_serializing_if = "...")]\` | Conditionally skip |
| \`#[serde(flatten)]\` | Merge fields into parent |
| \`#[serde(tag = "type")]\` | Internally tagged enum |
| \`#[serde(untagged)]\` | Untagged enum (try each variant) |
| \`#[serde(with = "...")]\` | Custom ser/de module |

**Usage with serde_json:**

\`\`\`rust
let user = User {
    name: "Alice".into(),
    age: 30,
    active: true,
    email: Some("alice@example.com".into()),
    id: 42,
};

// Serialize
let json = serde_json::to_string_pretty(&user)?;

// Deserialize
let parsed: User = serde_json::from_str(&json)?;
\`\`\`

**serde is zero-cost:** the generated code is the same as hand-written serialization, just without the boilerplate.`},{heading:"clap — Command-Line Parsing",body:`**clap turns a struct definition into a full CLI with help text, validation, and shell completions.**

\`\`\`rust
use clap::Parser;

/// A simple file processor
#[derive(Parser, Debug)]
#[command(name = "fproc", version, about)]
struct Args {
    /// Input file path
    #[arg(short, long)]
    input: String,

    /// Output file path
    #[arg(short, long, default_value = "out.txt")]
    output: String,

    /// Enable verbose logging
    #[arg(short, long)]
    verbose: bool,

    /// Number of threads
    #[arg(short = 't', long, default_value_t = 4)]
    threads: usize,
}

fn main() {
    let args = Args::parse();
    if args.verbose {
        println!("Processing {} -> {}", args.input, args.output);
        println!("Using {} threads", args.threads);
    }
}
\`\`\`

**Auto-generated help:**

\`\`\`
$ fproc --help
A simple file processor

Usage: fproc [OPTIONS] --input <INPUT>

Options:
  -i, --input <INPUT>      Input file path
  -o, --output <OUTPUT>    Output file path [default: out.txt]
  -v, --verbose            Enable verbose logging
  -t, --threads <THREADS>  Number of threads [default: 4]
  -h, --help               Print help
  -V, --version            Print version
\`\`\`

**Subcommands:**

\`\`\`rust
#[derive(Parser)]
enum Command {
    /// Create a new project
    New {
        #[arg(short, long)]
        name: String,
    },
    /// Build the project
    Build {
        #[arg(long)]
        release: bool,
    },
    /// Run tests
    Test,
}
\`\`\``},{heading:"thiserror and anyhow — Error Handling",body:`**thiserror derives \`std::error::Error\` with custom messages. anyhow provides a catch-all error type for applications.**

**thiserror (for libraries):**

\`\`\`rust
use thiserror::Error;

#[derive(Error, Debug)]
pub enum AppError {
    #[error("Failed to read file: {path}")]
    FileRead {
        path: String,
        #[source]
        cause: std::io::Error,
    },

    #[error("Invalid config: {0}")]
    InvalidConfig(String),

    #[error("Database error")]
    Database(#[from] sqlx::Error),

    #[error("Not found: {entity} with id {id}")]
    NotFound {
        entity: &'static str,
        id: u64,
    },
}
\`\`\`

**Key thiserror attributes:**

| Attribute | Effect |
|---|---|
| \`#[error("...")]\` | Display message (supports field interpolation) |
| \`#[source]\` | Marks the cause field for Error::source() |
| \`#[from]\` | Auto-implements From<T> for the variant |

**anyhow (for applications):**

\`\`\`rust
use anyhow::{Context, Result};

fn read_config() -> Result<Config> {
    let content = std::fs::read_to_string("config.toml")
        .context("Failed to read config file")?;
    let config: Config = toml::from_str(&content)
        .context("Failed to parse config")?;
    Ok(config)
}
\`\`\`

**When to use which:**
- **thiserror** — libraries that expose specific error types to callers
- **anyhow** — applications where you just need to propagate errors with context
- **Both** — thiserror for your public error types, anyhow in your main() and tests`}],questions:[{q:"What is the difference between `#[derive(Copy, Clone)]` and just `#[derive(Clone)]`? When should you use each?",a:"Clone provides explicit duplication via .clone(), which can involve heap allocation (e.g., cloning a String allocates new memory). Copy is a marker trait that tells the compiler to do implicit bitwise copies instead of moves. With Copy, `let b = a;` copies a instead of moving it, so a is still usable. Use Copy + Clone for small, stack-only types: integers, bools, f32/f64, tuples of Copy types, fixed-size arrays of Copy types. Use Clone alone for types containing heap data (String, Vec, Box, HashMap) or types where copying should be explicit because it's expensive. You cannot derive Copy on types with non-Copy fields — the compiler will error.",hint:"Think about moves vs copies. What happens after `let b = a;` with each?",check:l=>{const s=l.toLowerCase();return s.includes("copy")&&s.includes("clone")&&(s.includes("implicit")||s.includes("move")||s.includes("bitwise")||s.includes("heap")||s.includes("stack"))}},{q:'Write a serde struct for a JSON payload like `{"user_name": "alice", "age": 30, "roles": ["admin", "user"]}` where the Rust field is `name` (not `user_name`) and `roles` defaults to an empty vec if missing.',a:'#[derive(Serialize, Deserialize)]\nstruct User {\n    #[serde(rename = "user_name")]\n    name: String,\n    age: u32,\n    #[serde(default)]\n    roles: Vec<String>,\n}\nThe key serde attributes: `rename` maps the JSON key "user_name" to the Rust field `name`, and `default` makes the `roles` field use `Vec::default()` (empty vec) when the key is missing from the JSON input. Without `default`, deserialization would fail if `roles` is absent.',hint:"You need two serde attributes: one for the rename and one for the default.",check:l=>{const s=l.toLowerCase();return s.includes("rename")&&s.includes("default")&&(s.includes("serde")||s.includes("user_name"))}}]},{id:"when-unsafe",icon:"🛡️",color:"#581C87",title:"When to Use Unsafe (and When Not To)",subtitle:"Decision frameworks, common mistakes, safe alternatives, and the unsafe code review checklist",resources:[{type:"read",title:"The Rustonomicon — How unsafe works",url:"https://doc.rust-lang.org/nomicon/"},{type:"read",title:"Ralf Jung — Stacked Borrows model",url:"https://www.ralfj.de/blog/2018/08/07/stacked-borrows.html"},{type:"read",title:"Rust API Guidelines — Safety",url:"https://rust-lang.github.io/api-guidelines/safety.html"},{type:"video",title:"Niko Matsakis — Unsafe code guidelines",url:"https://www.youtube.com/watch?v=ZHKnpfVNyNU"}],content:[{heading:"Decision Framework",body:`**Ask these questions before writing \`unsafe\`:**

\`\`\`
Can you solve this with safe Rust?
  YES -> Do that. Always prefer safe Rust.
  NO  |
      v
Is there a crate that already does this safely?
  YES -> Use the crate (Vec, Rc, Arc, Mutex, etc.)
  NO  |
      v
Are you doing FFI (calling C/C++ code)?
  YES -> Unsafe is necessary. Wrap in safe API.
  NO  |
      v
Are you building a low-level data structure?
  YES -> Unsafe may be justified. Document invariants.
  NO  |
      v
Are you trying to optimize performance?
  Can you benchmark to prove unsafe is needed?
    NO  -> Don't use unsafe for premature optimization.
    YES -> Use unsafe. Wrap, test, and run Miri.
\`\`\`

**Legitimate uses of unsafe:**
1. FFI — calling C/C++ libraries (no alternative)
2. Low-level data structures — LinkedList, BTreeMap, custom allocators
3. Performance-critical inner loops — after benchmarking proves the need
4. Implementing Send/Sync — for types with raw pointers that are actually thread-safe
5. Interfacing with hardware — memory-mapped I/O, DMA buffers

**NOT legitimate uses:**
- "The borrow checker won't let me" — redesign your data structures
- "I know this is safe" without SAFETY comments — document or don't use unsafe
- Performance "optimization" without benchmarks — safe Rust is already fast
- Anything you can do with RefCell, Rc, Arc, Mutex`},{heading:"Common Mistakes and Safe Alternatives",body:`**Mistake 1: Using unsafe to bypass the borrow checker**

\`\`\`rust
// BAD: Using unsafe to get two mutable refs
let ptr = &mut vec as *mut Vec<i32>;
unsafe {
    let a = &mut *ptr;
    let b = &mut *ptr; // UB! Two &mut to same data
}

// GOOD: Use split_at_mut, indices, or RefCell
let (a, b) = vec.split_at_mut(mid);
\`\`\`

**Mistake 2: Assuming transmute is safe**

\`\`\`rust
// BAD: transmute between incompatible types
let x: u32 = 42;
let y: f32 = unsafe { std::mem::transmute(x) };
// Works but fragile and surprising

// GOOD: Use From/Into or explicit conversion
let y = f32::from_bits(x);
\`\`\`

**Mistake 3: Ignoring alignment requirements**

\`\`\`rust
// BAD: Casting unaligned pointer
let bytes: &[u8] = &[1, 2, 3, 4, 5];
let ptr = &bytes[1] as *const u8 as *const u32;
unsafe { *ptr } // UB! Misaligned read

// GOOD: Use read_unaligned
unsafe { ptr.read_unaligned() }
// Or better: use from_ne_bytes
let val = u32::from_ne_bytes(
    bytes[1..5].try_into().unwrap()
);
\`\`\`

**Safe alternatives table:**

| Unsafe Pattern | Safe Alternative |
|---|---|
| Multiple mutable borrows | RefCell<T>, split_at_mut |
| Self-referential struct | Pin<Box<T>>, owning_ref, ouroboros |
| Global mutable state | Mutex, RwLock, OnceLock, AtomicXxx |
| Raw pointer arithmetic | Iterators, slice methods |
| Manual memory management | Box, Vec, Rc, Arc |
| transmute | From/Into, as, from_bits |
| static mut | std::sync::OnceLock (Rust 1.70+) |`},{heading:"Unsafe Code Review Checklist",body:`**When reviewing or writing unsafe code, verify every item:**

**Pointer validity:**
- [ ] Pointer is non-null
- [ ] Pointer is properly aligned for the type
- [ ] Pointer points to initialized, valid data
- [ ] Pointee outlives the pointer (no dangling)
- [ ] No aliasing violations (\`&mut\` exclusivity)

**Memory safety:**
- [ ] No use-after-free
- [ ] No double-free
- [ ] No buffer overflows (bounds checked)
- [ ] No uninitialized memory reads
- [ ] Correct use of \`MaybeUninit\` for uninitialized data

**Thread safety:**
- [ ] No data races on shared mutable state
- [ ] Send/Sync implementations are correct
- [ ] Atomic operations use correct Ordering

**FFI safety:**
- [ ] Type layouts match C (\`#[repr(C)]\`)
- [ ] Function signatures match C headers exactly
- [ ] String null terminators handled (CString/CStr)
- [ ] Memory ownership is clear (who allocates, who frees)
- [ ] Panics don't unwind across FFI boundaries

**Documentation:**
- [ ] Every unsafe block has a \`// SAFETY:\` comment
- [ ] Every unsafe fn has a \`# Safety\` doc section
- [ ] Invariants are documented and maintained

**Verification:**
- [ ] Tests pass under Miri (\`cargo miri test\`)
- [ ] AddressSanitizer and ThreadSanitizer clean
- [ ] Edge cases tested (null, empty, max size)

**The golden rule:** unsafe code should be boring. If your unsafe block is doing something clever, you're probably doing it wrong.`}],questions:[{q:"A colleague wants to use `unsafe` to avoid cloning a large Vec by using raw pointers. Should they? What's the safe alternative?",a:"No, they should NOT use unsafe for this. Safe alternatives: (1) Use `&[T]` (slice reference) to borrow the Vec without cloning. (2) Use `Rc<Vec<T>>` or `Arc<Vec<T>>` for shared ownership with reference counting. (3) Use `Cow<[T]>` (Clone-on-Write) for data that's usually read-only but occasionally needs mutation. (4) Restructure the code to pass ownership (move the Vec instead of cloning). (5) Use iterators instead of materializing the full Vec. Using raw pointers to avoid a clone is premature optimization that risks use-after-free, dangling pointers, and data races. The compiler can often optimize away unnecessary clones anyway.",hint:"Think about borrowing, shared ownership (Rc/Arc), and Cow.",check:l=>{const s=l.toLowerCase();return(s.includes("no")||s.includes("should not")||s.includes("shouldn't"))&&(s.includes("borrow")||s.includes("rc")||s.includes("arc")||s.includes("cow")||s.includes("slice")||s.includes("reference"))}},{q:"What tool can detect undefined behavior in unsafe Rust code at runtime? How do you use it?",a:"Miri is Rust's official interpreter for detecting undefined behavior. It runs your program under an interpreter that tracks pointer provenance, alignment, and aliasing rules. Usage: `rustup +nightly component add miri` to install, then `cargo +nightly miri test` to run tests under Miri, or `cargo +nightly miri run` to run the binary. Miri catches: use-after-free, out-of-bounds access, invalid pointer dereferences, alignment violations, data races (with flags), and violations of Stacked Borrows (the aliasing model). Limitations: Miri is dynamic (only checks executed code paths), is slow (10-100x slower than native), and cannot check all FFI interactions.",hint:"It's a tool from the Rust team that interprets MIR.",check:l=>{const s=l.toLowerCase();return s.includes("miri")&&(s.includes("cargo")||s.includes("nightly")||s.includes("undefined behavior")||s.includes("ub"))}}]}];function Pp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsxs("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:["✓"," Check"]}),n.jsxs("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsxs("span",{children:["📖"," Answer"]}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function Np(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=qs.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else d===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(d)},`p${m}`)),m++}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#DC2626!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"UNSAFE, FFI & MACROS"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Unsafe Rust, FFI & Macros Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["The power tools of Rust: unsafe superpowers, C interop, and metaprogramming with macros. Know when to use them and when safe Rust is enough.",n.jsx("br",{}),qs.length," sections · ",F," concepts · ",qs.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #DC2626, #7C3AED, #0891B2, #D97706, #059669, #2563EB, #581C87)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:qs.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:"›"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsxs("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:["📖"," Learn"]}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["✏️"," Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["🔗"," Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:"›"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(Pp,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=Op[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["Unsafe superpowers ","→"," Raw pointers ","→"," FFI ","→"," Declarative macros ","→"," Proc macros ","→"," Popular derives ","→"," When to use unsafe"]})]})}const Lp={infographic:{label:"INFOGRAPHIC",emoji:"📊",color:"#059669",bg:"#ECFDF5"},read:{label:"READ",emoji:"📄",color:"#B45309",bg:"#FFFBEB"},video:{label:"VIDEO",emoji:"🎬",color:"#DC2626",bg:"#FEF2F2"}},Hs=[{id:"cli-tools",icon:"💻",color:"#0891B2",title:"CLI Tools",subtitle:"Build polished command-line tools with clap, indicatif, dialoguer — argument parsing, progress bars, and interactive prompts",resources:[{type:"read",title:"clap — Derive API tutorial",url:"https://docs.rs/clap/latest/clap/_derive/_tutorial/index.html"},{type:"read",title:"Command Line Applications in Rust (book)",url:"https://rust-cli.github.io/book/"},{type:"read",title:"indicatif — Progress bars and spinners",url:"https://docs.rs/indicatif/"},{type:"video",title:"Building CLI tools in Rust",url:"https://www.youtube.com/watch?v=Ot3qCA3Iv_8"}],content:[{heading:"clap — The Standard CLI Framework",body:`**clap is Rust's dominant CLI framework.** It parses arguments, generates help text, validates input, and even generates shell completions — all from a struct definition.

**Derive API (recommended):**

\`\`\`rust
use clap::Parser;

/// A fast file search tool
#[derive(Parser, Debug)]
#[command(name = "fsearch", version, about)]
struct Args {
    /// Pattern to search for
    pattern: String,

    /// Directory to search in
    #[arg(short, long, default_value = ".")]
    dir: String,

    /// Enable case-insensitive search
    #[arg(short = 'i', long)]
    ignore_case: bool,

    /// Maximum search depth
    #[arg(short, long, default_value_t = 10)]
    max_depth: usize,

    /// File extensions to include
    #[arg(short, long, num_args = 1..)]
    ext: Vec<String>,
}

fn main() {
    let args = Args::parse();
    println!("Searching for '{}' in {}", args.pattern, args.dir);
}
\`\`\`

**This auto-generates:**

\`\`\`
$ fsearch --help
A fast file search tool

Usage: fsearch [OPTIONS] <PATTERN>

Arguments:
  <PATTERN>  Pattern to search for

Options:
  -d, --dir <DIR>          Directory to search in [default: .]
  -i, --ignore-case        Enable case-insensitive search
  -m, --max-depth <N>      Maximum search depth [default: 10]
  -e, --ext <EXT>...       File extensions to include
  -h, --help               Print help
  -V, --version            Print version
\`\`\`

**Subcommands:**

\`\`\`rust
#[derive(Parser)]
enum Cli {
    /// Initialize a new project
    Init {
        #[arg(short, long)]
        name: String,
        #[arg(long, default_value = "MIT")]
        license: String,
    },
    /// Build the project
    Build {
        #[arg(long)]
        release: bool,
    },
    /// Run tests
    Test {
        #[arg(long)]
        coverage: bool,
    },
}
\`\`\``},{heading:"Progress Bars and User Feedback",body:`**indicatif provides progress bars, spinners, and multi-progress for long-running CLI operations.**

\`\`\`rust
use indicatif::{ProgressBar, ProgressStyle};
use std::time::Duration;

fn process_files(files: &[String]) {
    let pb = ProgressBar::new(files.len() as u64);
    pb.set_style(
        ProgressStyle::default_bar()
            .template("{spinner:.green} [{bar:40.cyan/blue}] {pos}/{len} ({eta})")
            .unwrap()
            .progress_chars("#>-")
    );

    for file in files {
        // Process file...
        pb.set_message(format!("Processing {}", file));
        pb.inc(1);
        std::thread::sleep(Duration::from_millis(50));
    }
    pb.finish_with_message("Done!");
}
\`\`\`

**Spinner for indeterminate operations:**

\`\`\`rust
use indicatif::ProgressBar;

let spinner = ProgressBar::new_spinner();
spinner.set_message("Connecting to database...");
spinner.enable_steady_tick(
    std::time::Duration::from_millis(100)
);

// ... do work ...

spinner.finish_with_message("Connected!");
\`\`\`

**Interactive prompts with dialoguer:**

\`\`\`rust
use dialoguer::{Select, Input, Confirm};

let name: String = Input::new()
    .with_prompt("Project name")
    .default("my-project".into())
    .interact_text()?;

let framework = Select::new()
    .with_prompt("Choose a framework")
    .items(&["Axum", "Actix-web", "Rocket"])
    .default(0)
    .interact()?;

let confirm = Confirm::new()
    .with_prompt("Create project?")
    .default(true)
    .interact()?;
\`\`\`

**Colored output with colored crate:**

\`\`\`rust
use colored::Colorize;

println!("{} Project created!", "Success:".green().bold());
println!("{} Missing config file", "Warning:".yellow().bold());
println!("{} Build failed", "Error:".red().bold());
\`\`\``},{heading:"CLI Project Starter Template",body:`**Complete project structure for a production CLI tool:**

\`\`\`
my-cli/
├── Cargo.toml
├── src/
│   ├── main.rs         # Entry point, arg parsing
│   ├── cli.rs          # clap structs
│   ├── commands/       # One module per subcommand
│   │   ├── mod.rs
│   │   ├── init.rs
│   │   └── build.rs
│   ├── config.rs       # Config file handling
│   └── error.rs        # Custom error types
└── tests/
    └── integration.rs  # CLI integration tests
\`\`\`

**Cargo.toml dependencies:**

\`\`\`toml
[dependencies]
clap = { version = "4", features = ["derive"] }
indicatif = "0.17"
dialoguer = "0.11"
colored = "2"
anyhow = "1"
serde = { version = "1", features = ["derive"] }
serde_json = "1"
dirs = "5"          # XDG directories
\`\`\`

**main.rs pattern:**

\`\`\`rust
use anyhow::Result;
use clap::Parser;

mod cli;
mod commands;
mod config;
mod error;

fn main() -> Result<()> {
    let args = cli::Cli::parse();
    match args.command {
        cli::Command::Init(opts) => commands::init::run(opts),
        cli::Command::Build(opts) => commands::build::run(opts),
    }
}
\`\`\`

**CLI testing with assert_cmd:**

\`\`\`rust
use assert_cmd::Command;

#[test]
fn test_help_flag() {
    Command::cargo_bin("my-cli")
        .unwrap()
        .arg("--help")
        .assert()
        .success()
        .stdout(predicates::str::contains("Usage"));
}
\`\`\`

**Notable Rust CLI tools built this way:** ripgrep (rg), fd, bat, exa/eza, tokei, hyperfine, zoxide, starship.`}],questions:[{q:"What crate is the standard for argument parsing in Rust CLIs, and what are its two API styles?",a:"clap is the standard crate for argument parsing in Rust. It offers two API styles: (1) The Derive API, where you define a struct with #[derive(Parser)] and use attributes like #[arg(short, long)] to configure arguments — this is the recommended approach for most cases. (2) The Builder API, where you construct the CLI programmatically using Command::new().arg(Arg::new(...)) chains. The derive API is more concise and type-safe, while the builder API offers more dynamic flexibility (e.g., when CLI structure depends on runtime data).",hint:"Think about derive macros vs builder patterns.",check:l=>{const s=l.toLowerCase();return s.includes("clap")&&(s.includes("derive")||s.includes("builder"))}},{q:"Name 3 popular command-line tools written in Rust that demonstrate Rust's strength for CLI development.",a:"Popular Rust CLI tools include: (1) ripgrep (rg) — a blazing-fast grep replacement by Andrew Galloway, consistently 2-5x faster than grep. (2) fd — a user-friendly alternative to find with intuitive syntax and colorized output. (3) bat — a cat clone with syntax highlighting and Git integration. Others: exa/eza (ls replacement), tokei (code line counter), hyperfine (benchmarking tool), zoxide (smarter cd), starship (shell prompt), delta (git diff viewer). Rust excels at CLIs because: zero-cost abstractions give C-like performance, strong type system prevents runtime errors, easy cross-compilation, and single static binary distribution.",hint:"Think about tools that replace common Unix utilities.",check:l=>{const s=l.toLowerCase();return s.includes("ripgrep")||s.includes("rg")||s.includes("fd")&&(s.includes("bat")||s.includes("exa")||s.includes("starship")||s.includes("zoxide")||s.includes("tokei"))}}]},{id:"web-services",icon:"🌐",color:"#DC2626",title:"Web Services",subtitle:"Axum, Actix-web, and Rocket compared — routing, extractors, middleware, and async web development",resources:[{type:"read",title:"Axum documentation",url:"https://docs.rs/axum/latest/axum/"},{type:"read",title:"Actix-web documentation",url:"https://actix.rs/docs"},{type:"read",title:"Rocket Guide",url:"https://rocket.rs/guide/"},{type:"read",title:"Zero To Production In Rust (book)",url:"https://www.zero2prod.com/"},{type:"video",title:"Building REST APIs in Rust with Axum",url:"https://www.youtube.com/watch?v=XZtlD_m59sM"}],content:[{heading:"Framework Comparison",body:`**Rust has three major web frameworks. Here's how they compare:**

| Feature | **Axum** | **Actix-web** | **Rocket** |
|---|---|---|---|
| **Async runtime** | Tokio (required) | Tokio or actix-rt | Tokio |
| **Middleware** | Tower ecosystem | Custom middleware | Fairings |
| **Performance** | Excellent | Fastest | Good |
| **Type safety** | Very strong (extractors) | Strong | Strong (request guards) |
| **Ecosystem** | Tower, Hyper, Tonic | Standalone | Standalone |
| **Maturity** | Newer (2021) | Mature (2017) | Mature (2016) |
| **Macro usage** | Minimal | Minimal | Heavy (#[get], #[post]) |
| **Learning curve** | Medium | Medium | Low (Rails-like) |
| **Best for** | Production microservices | Maximum performance | Rapid prototyping |

**Recommendation guide:**

\`\`\`
Starting a new project?
  → Axum (best ecosystem integration,
         Tower middleware shared with gRPC/Tonic)

Need absolute maximum throughput?
  → Actix-web (consistently tops benchmarks)

Want the fastest time-to-prototype?
  → Rocket (most Rails/Flask-like experience)

Already using Tonic for gRPC?
  → Axum (shares Tower middleware)
\`\`\`

**All three are production-ready.** The Rust web ecosystem follows a "small and modular" philosophy (like Flask/Sinatra) rather than a "batteries included" approach (like Django/Rails).`},{heading:"Axum — The Modern Choice",body:`**Axum is built on Tokio and Tower, giving it the largest middleware ecosystem.**

**Hello World:**

\`\`\`rust
use axum::{Router, routing::get, Json};
use serde::Serialize;

#[derive(Serialize)]
struct Health { status: String }

async fn health() -> Json<Health> {
    Json(Health {
        status: "ok".into()
    })
}

async fn hello() -> &'static str {
    "Hello, World!"
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(hello))
        .route("/health", get(health));

    let listener =
        tokio::net::TcpListener::bind("0.0.0.0:3000")
            .await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
\`\`\`

**Extractors — type-safe request parsing:**

\`\`\`rust
use axum::extract::{Path, Query, State, Json};
use serde::Deserialize;

#[derive(Deserialize)]
struct Pagination { page: u32, per_page: u32 }

async fn get_user(
    Path(id): Path<u64>,
    Query(pagination): Query<Pagination>,
    State(db): State<DatabasePool>,
) -> Json<User> {
    let user = db.find_user(id).await.unwrap();
    Json(user)
}
\`\`\`

Axum extracts Path, Query, Headers, Body, and State from the request automatically. If extraction fails, it returns the appropriate HTTP error.

**Shared state:**

\`\`\`rust
#[derive(Clone)]
struct AppState {
    db: DatabasePool,
    cache: redis::Client,
}

let state = AppState { db, cache };
let app = Router::new()
    .route("/users/:id", get(get_user))
    .with_state(state);
\`\`\`

**Tower middleware (shared with gRPC, Hyper):**

\`\`\`rust
use tower_http::{
    cors::CorsLayer,
    trace::TraceLayer,
    compression::CompressionLayer,
};

let app = Router::new()
    .route("/", get(hello))
    .layer(CorsLayer::permissive())
    .layer(TraceLayer::new_for_http())
    .layer(CompressionLayer::new());
\`\`\``},{heading:"Actix-web and Rocket Highlights",body:`**Actix-web — performance champion:**

\`\`\`rust
use actix_web::{web, App, HttpServer, HttpResponse};
use serde::Deserialize;

#[derive(Deserialize)]
struct Info { name: String }

async fn greet(info: web::Query<Info>) -> HttpResponse {
    HttpResponse::Ok()
        .body(format!("Hello, {}!", info.name))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/greet", web::get().to(greet))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
\`\`\`

Actix-web uses an actor-based architecture for maximum concurrency. Each worker runs in its own thread with its own copy of the App.

**Rocket — developer-friendly:**

\`\`\`rust
#[macro_use] extern crate rocket;

#[get("/hello/<name>?<age>")]
fn hello(name: &str, age: Option<u8>) -> String {
    match age {
        Some(age) => format!("Hello, {} (age {})!", name, age),
        None => format!("Hello, {}!", name),
    }
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![hello])
}
\`\`\`

Rocket uses **request guards** for type-safe authorization and input validation — similar to middleware but at the handler level.

**Performance benchmarks (requests/sec, typical REST API):**

| Framework | req/s | Latency p99 |
|---|---|---|
| **Actix-web** | ~180,000 | ~1.2ms |
| **Axum** | ~160,000 | ~1.4ms |
| **Rocket** | ~120,000 | ~2.0ms |
| Express.js (Node) | ~25,000 | ~8ms |
| FastAPI (Python) | ~8,000 | ~25ms |

All three Rust frameworks are 5-20x faster than typical Python/Node frameworks.`},{heading:"Web Service Architecture Pattern",body:`**Production web service structure:**

\`\`\`
my-api/
├── Cargo.toml
├── src/
│   ├── main.rs           # Server startup
│   ├── config.rs         # Environment config
│   ├── routes/           # Route handlers
│   │   ├── mod.rs
│   │   ├── users.rs
│   │   └── health.rs
│   ├── models/           # Domain types
│   │   ├── mod.rs
│   │   └── user.rs
│   ├── db/               # Database layer
│   │   ├── mod.rs
│   │   └── queries.rs
│   ├── middleware/        # Auth, logging, etc.
│   └── error.rs          # Error types
├── migrations/           # SQL migrations
└── tests/
    └── api/              # Integration tests
\`\`\`

**Key dependencies (Cargo.toml):**

\`\`\`toml
[dependencies]
axum = "0.7"
tokio = { version = "1", features = ["full"] }
tower-http = { version = "0.5", features = [
    "cors", "trace", "compression-gzip"
] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
sqlx = { version = "0.8", features = [
    "runtime-tokio", "postgres"
] }
tracing = "0.1"
tracing-subscriber = "0.3"
anyhow = "1"
thiserror = "2"
dotenvy = "0.15"
\`\`\`

**The book "Zero To Production In Rust" by Luca Palmieri** is the definitive guide for building production Rust web services. It covers testing, CI/CD, observability, and deployment.`}],questions:[{q:"Compare Axum, Actix-web, and Rocket. When would you choose each?",a:"Choose Axum for new production microservices — it integrates with the Tower middleware ecosystem (shared with Tonic gRPC and Hyper), has excellent type-safe extractors, and is maintained by the Tokio team. Choose Actix-web when you need maximum throughput — it consistently tops web framework benchmarks and uses an actor-based architecture for high concurrency. Choose Rocket when you want the fastest development experience — its macro-based routing (#[get], #[post]) and request guards make it feel like Flask/Rails, ideal for prototyping and internal tools. All three are production-ready and 5-20x faster than Python/Node equivalents.",hint:"Think about ecosystem integration, raw performance, and developer experience.",check:l=>{const s=l.toLowerCase();return s.includes("axum")&&s.includes("actix")&&(s.includes("tower")||s.includes("ecosystem")||s.includes("performance")||s.includes("throughput")||s.includes("prototype"))}},{q:"What is a Tower middleware layer, and why does it matter for Axum?",a:"Tower is a framework for composable request/response middleware, where each layer wraps the inner service and can transform requests, responses, or add behavior (logging, auth, rate limiting, timeouts, compression). It matters because Axum is built on Tower, meaning you get access to a huge ecosystem of pre-built middleware: tower-http provides CORS, tracing, compression, request ID, timeout, and more. Critically, Tower middleware is shared across Axum, Tonic (gRPC), and Hyper (HTTP client) — so middleware you write for your web API also works for your gRPC services. This is Axum's biggest advantage over Actix-web and Rocket, which have their own isolated middleware systems.",hint:"Think about middleware reuse across different protocols.",check:l=>{const s=l.toLowerCase();return s.includes("tower")&&(s.includes("middleware")||s.includes("layer"))&&(s.includes("reuse")||s.includes("shared")||s.includes("tonic")||s.includes("ecosystem")||s.includes("composab"))}}]},{id:"database",icon:"💾",color:"#7C3AED",title:"Database Access",subtitle:"SQLx, Diesel, and SeaORM — compile-time checked queries, ORMs, migrations, and connection pooling",resources:[{type:"read",title:"SQLx documentation",url:"https://docs.rs/sqlx/"},{type:"read",title:"Diesel Getting Started Guide",url:"https://diesel.rs/guides/getting-started"},{type:"read",title:"SeaORM documentation",url:"https://www.sea-ql.org/SeaORM/docs/introduction/sea-orm/"},{type:"video",title:"Rust database access patterns",url:"https://www.youtube.com/watch?v=TCERYbgvbq0"}],content:[{heading:"SQLx — Compile-Time Checked SQL",body:`**SQLx checks your SQL queries against the actual database at compile time.** No ORM, no runtime query building — just raw SQL with type safety.

\`\`\`rust
use sqlx::postgres::PgPool;

// Compile-time verified against the database!
let users = sqlx::query_as!(
    User,
    "SELECT id, name, email FROM users WHERE active = $1",
    true
)
.fetch_all(&pool)
.await?;
\`\`\`

**If the column doesn't exist, the type is wrong, or the table doesn't exist — you get a COMPILE error, not a runtime crash.**

**Connection setup:**

\`\`\`rust
use sqlx::postgres::PgPoolOptions;

let pool = PgPoolOptions::new()
    .max_connections(5)
    .connect("postgres://user:pass@localhost/db")
    .await?;
\`\`\`

**Migrations:**

\`\`\`bash
# Create a migration
sqlx migrate add create_users_table

# Run migrations
sqlx migrate run

# Revert last migration
sqlx migrate revert
\`\`\`

\`\`\`sql
-- migrations/001_create_users_table.sql
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

**Supported databases:**

| Database | Feature Flag |
|---|---|
| PostgreSQL | \`postgres\` |
| MySQL/MariaDB | \`mysql\` |
| SQLite | \`sqlite\` |

**Key advantage:** you write real SQL (not an ORM DSL), so you have full control over query optimization, and the compile-time checking prevents SQL injection and type mismatches.`},{heading:"Diesel — Type-Safe Query Builder ORM",body:`**Diesel is Rust's most mature ORM. It provides a type-safe query builder DSL that catches errors at compile time.**

\`\`\`rust
use diesel::prelude::*;

// Schema (generated by diesel CLI)
table! {
    users (id) {
        id -> Int4,
        name -> Varchar,
        email -> Varchar,
        active -> Bool,
    }
}

#[derive(Queryable, Selectable)]
#[diesel(table_name = users)]
struct User {
    id: i32,
    name: String,
    email: String,
    active: bool,
}

#[derive(Insertable)]
#[diesel(table_name = users)]
struct NewUser<'a> {
    name: &'a str,
    email: &'a str,
}

// Queries
let results = users::table
    .filter(users::active.eq(true))
    .order(users::name.asc())
    .limit(10)
    .select(User::as_select())
    .load(&mut conn)?;

// Insert
diesel::insert_into(users::table)
    .values(&NewUser { name: "Alice", email: "alice@ex.com" })
    .execute(&mut conn)?;
\`\`\`

**Diesel vs SQLx:**

| Feature | **SQLx** | **Diesel** |
|---|---|---|
| Query style | Raw SQL strings | Type-safe DSL builder |
| Compile-time check | Against live DB | Against schema file |
| Async support | Native async | Sync (async via deadpool) |
| Learning curve | Low (just SQL) | Medium (DSL to learn) |
| Complex queries | Easy (just write SQL) | Can be verbose |
| Migrations | SQL files | Built-in CLI |
| Best for | SQL-heavy apps | CRUD-heavy apps |`},{heading:"SeaORM — Async-First ORM",body:`**SeaORM is a modern async ORM built on SQLx.** It combines SQLx's async foundation with an ActiveRecord-style API.

\`\`\`rust
use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, DeriveEntityModel)]
#[sea_orm(table_name = "users")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub name: String,
    pub email: String,
    pub active: bool,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

// Queries
let users: Vec<Model> = Entity::find()
    .filter(Column::Active.eq(true))
    .order_by_asc(Column::Name)
    .all(&db)
    .await?;

// Insert
let new_user = ActiveModel {
    name: Set("Alice".to_owned()),
    email: Set("alice@example.com".to_owned()),
    ..Default::default()
};
new_user.insert(&db).await?;
\`\`\`

**When to choose each:**

\`\`\`
Writing raw SQL and want compile-time safety?
  → SQLx (you control every query)

Want a traditional ORM with query builder?
  → Diesel (mature, sync, strong types)

Want async ORM with ActiveRecord patterns?
  → SeaORM (async-first, built on SQLx)

Need maximum query flexibility?
  → SQLx (nothing beats raw SQL control)
\`\`\``}],questions:[{q:"What makes SQLx unique compared to ORMs in other languages? What gets checked at compile time?",a:"SQLx is unique because it verifies your SQL queries against the actual database schema at compile time. It checks: (1) Table names exist, (2) Column names exist and are spelled correctly, (3) Column types match the Rust types in your query_as! struct, (4) The number of bind parameters matches, (5) Parameter types are compatible with column types. If any of these are wrong, you get a compile error, not a runtime crash. This is done by connecting to the database during compilation (or using offline mode with a cached schema). Most ORMs in Python/JavaScript only catch SQL errors at runtime, meaning you might deploy code with a typo in a column name. SQLx eliminates this entire class of bugs.",hint:"Think about what happens at compile time vs runtime with traditional ORMs.",check:l=>{const s=l.toLowerCase();return s.includes("compile")&&(s.includes("check")||s.includes("verify")||s.includes("time"))&&(s.includes("column")||s.includes("table")||s.includes("type")||s.includes("sql"))}}]},{id:"wasm",icon:"🕸️",color:"#D97706",title:"WebAssembly",subtitle:"wasm-bindgen, wasm-pack, Yew, and Leptos — running Rust in the browser and on the edge",resources:[{type:"read",title:"Rust and WebAssembly book",url:"https://rustwasm.github.io/docs/book/"},{type:"read",title:"wasm-bindgen Guide",url:"https://rustwasm.github.io/docs/wasm-bindgen/"},{type:"read",title:"Leptos — Full-stack Rust framework",url:"https://leptos.dev/"},{type:"read",title:"Yew documentation",url:"https://yew.rs/"},{type:"video",title:"Rust WebAssembly tutorial",url:"https://www.youtube.com/watch?v=nW71Kfs7QKI"}],content:[{heading:"Rust to WASM Pipeline",body:`**Rust compiles to WebAssembly (WASM), letting you run near-native-speed code in browsers, serverless edge functions, and embedded environments.**

**The build pipeline:**

\`\`\`
Rust source code
    |
    v
rustc --target wasm32-unknown-unknown
    |
    v
.wasm binary (raw WebAssembly)
    |
    v
wasm-bindgen (generates JS glue code)
    |
    v
.wasm + .js bindings (ready for browsers)
\`\`\`

**Setup:**

\`\`\`bash
# Add WASM target
rustup target add wasm32-unknown-unknown

# Install wasm-pack (recommended)
cargo install wasm-pack

# Build for web
wasm-pack build --target web
\`\`\`

**Basic wasm-bindgen example:**

\`\`\`rust
use wasm_bindgen::prelude::*;

// Expose to JavaScript
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! From Rust+WASM", name)
}

// Call JavaScript from Rust
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn say_hello() {
    log("Hello from Rust via console.log!");
}
\`\`\`

**Use from JavaScript:**

\`\`\`javascript
import init, { greet } from './pkg/my_wasm.js';

async function main() {
    await init();
    console.log(greet("World"));
    // "Hello, World! From Rust+WASM"
}
main();
\`\`\`

**WASM targets:**

| Target | Use Case |
|---|---|
| \`wasm32-unknown-unknown\` | Browsers, generic WASM |
| \`wasm32-wasi\` | Server-side WASM (Wasmtime, Wasmer) |
| \`wasm32-wasi-preview1-threads\` | WASM with threading |`},{heading:"Yew and Leptos — Frontend Frameworks",body:`**Yew and Leptos let you build full web applications entirely in Rust, compiled to WASM.** Think React, but in Rust.

**Leptos (recommended for new projects):**

\`\`\`rust
use leptos::*;

#[component]
fn Counter() -> impl IntoView {
    let (count, set_count) = create_signal(0);

    view! {
        <div>
            <h1>"Count: " {count}</h1>
            <button on:click=move |_| {
                set_count.update(|n| *n += 1)
            }>
                "Increment"
            </button>
        </div>
    }
}

fn main() {
    leptos::mount_to_body(|| view! { <Counter/> });
}
\`\`\`

**Leptos features:**
- Fine-grained reactivity (like SolidJS, not React's VDOM)
- Server-side rendering (SSR) built-in
- Server functions (RPC from client to server in Rust)
- Hydration and streaming support
- Full-stack Rust: same language for frontend + backend

**Yew (more mature, React-like):**

\`\`\`rust
use yew::prelude::*;

#[function_component(App)]
fn app() -> Html {
    let counter = use_state(|| 0);
    let onclick = {
        let counter = counter.clone();
        Callback::from(move |_| counter.set(*counter + 1))
    };

    html! {
        <div>
            <h1>{ format!("Count: {}", *counter) }</h1>
            <button {onclick}>{ "Increment" }</button>
        </div>
    }
}
\`\`\`

**Comparison:**

| Feature | **Leptos** | **Yew** |
|---|---|---|
| Reactivity | Fine-grained (signals) | Virtual DOM |
| SSR | Built-in, streaming | Limited |
| Bundle size | Smaller | Larger |
| API style | SolidJS-like | React-like |
| Full-stack | Yes (server fns) | Client-only |
| Maturity | Newer | More mature |`},{heading:"WASM Use Cases and Performance",body:`**Where WASM excels over JavaScript:**

| Use Case | Why WASM | Example Projects |
|---|---|---|
| **Image/video processing** | CPU-intensive computation | Photon (image filters), FFmpeg.wasm |
| **Games** | Consistent frame rates | Bevy (via WASM target) |
| **Cryptography** | Timing-safe, fast | ring, RustCrypto |
| **Data visualization** | Complex calculations | Plotters |
| **PDF generation** | Heavy processing | printpdf |
| **Edge computing** | Fast cold start, sandboxed | Cloudflare Workers, Fastly |

**Edge/serverless WASM (WASI):**

\`\`\`rust
// Cloudflare Workers with Rust
#[event(fetch)]
async fn fetch(req: Request, env: Env, ctx: Context)
    -> Result<Response>
{
    let url = req.url()?;
    match url.path() {
        "/api/hello" => {
            Response::ok("Hello from Rust on the edge!")
        }
        _ => Response::error("Not Found", 404),
    }
}
\`\`\`

**Performance characteristics:**
- WASM runs at 80-95% of native speed
- Cold start: ~1ms (vs 50-500ms for containers)
- Binary size: typically 100KB-2MB (tree-shaken)
- Sandboxed: memory-safe by design, no system access unless granted
- Portable: same binary runs on any platform with a WASM runtime

**When NOT to use WASM:**
- Simple DOM manipulation (JS is faster for this)
- Small scripts (WASM has initialization overhead)
- When you need direct DOM access (must go through JS bindings)`}],questions:[{q:"What is wasm-bindgen and why is it necessary? What problem does it solve?",a:"wasm-bindgen generates JavaScript-Rust bindings for WebAssembly. It's necessary because raw WASM only supports 4 numeric types (i32, i64, f32, f64) — it can't natively pass strings, objects, arrays, or closures between JS and Rust. wasm-bindgen solves this by: (1) Generating JS glue code that handles type conversion (e.g., JS strings to Rust &str via shared memory), (2) Providing #[wasm_bindgen] attribute to mark Rust functions for export and JS functions for import, (3) Managing the WASM linear memory for complex types, (4) Handling lifecycle and cleanup of JS objects accessed from Rust. Without it, you'd have to manually manage a shared memory buffer and write serialization/deserialization code for every type crossing the JS-WASM boundary.",hint:"WASM natively only supports numeric types. How do you pass strings?",check:l=>{const s=l.toLowerCase();return(s.includes("binding")||s.includes("glue")||s.includes("bridge"))&&(s.includes("type")||s.includes("string")||s.includes("numeric")||s.includes("js")||s.includes("javascript"))}},{q:"Compare Leptos and Yew. Which uses a virtual DOM and which uses fine-grained reactivity?",a:"Yew uses a virtual DOM model similar to React — when state changes, it diffs the virtual DOM tree and patches the real DOM. Leptos uses fine-grained reactivity like SolidJS — it tracks exactly which DOM nodes depend on which signals and updates only those nodes directly, without diffing. Leptos is generally more performant because it avoids the VDOM diff overhead, produces smaller bundle sizes, and supports server-side rendering with streaming out of the box. Yew is more mature and will feel familiar to React developers. For new projects, Leptos is the recommended choice due to its performance advantages and full-stack capabilities (server functions that let you call server-side Rust from the client).",hint:"One is like React, the other is like SolidJS.",check:l=>{const s=l.toLowerCase();return s.includes("yew")&&s.includes("leptos")&&(s.includes("virtual dom")||s.includes("vdom")||s.includes("fine-grained")||s.includes("signal")||s.includes("solid"))}}]},{id:"embedded",icon:"📟",color:"#059669",title:"Embedded Rust",subtitle:"no_std, embedded-hal, probe-rs — running Rust on microcontrollers without an OS",resources:[{type:"read",title:"The Embedded Rust Book",url:"https://docs.rust-embedded.org/book/"},{type:"read",title:"embedded-hal documentation",url:"https://docs.rs/embedded-hal/"},{type:"read",title:"probe-rs — Modern embedded debugging",url:"https://probe.rs/"},{type:"read",title:"Awesome Embedded Rust",url:"https://github.com/rust-embedded/awesome-embedded-rust"},{type:"video",title:"James Munns — Embedded Rust in 2024",url:"https://www.youtube.com/watch?v=TOAynddiu5M"}],content:[{heading:"no_std — Rust Without the Standard Library",body:`**Embedded systems often have no OS, no heap, and limited memory. \`#![no_std]\` disables Rust's standard library, giving you bare-metal control.**

\`\`\`rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;
use panic_halt as _;

#[entry]
fn main() -> ! {
    // Bare metal — no OS, no allocator
    let mut x: u32 = 0;
    loop {
        x = x.wrapping_add(1);
        // Blink LED, read sensor, etc.
    }
}
\`\`\`

**What you lose without std:**

| Feature | std | core | alloc |
|---|---|---|---|
| Basic types (u32, bool) | Yes | Yes | Yes |
| Option, Result, iterators | Yes | Yes | Yes |
| String, Vec, HashMap | Yes | No | Yes |
| File I/O, networking | Yes | No | No |
| Threads, sync primitives | Yes | No | No |
| println!, format! | Yes | No | Partial |
| Heap allocation | Yes | No | Yes |

**\`core\`** — always available, no allocation, no OS. Includes: primitive types, iterators, Option/Result, slices, traits.

**\`alloc\`** — opt-in with a custom allocator. Adds: String, Vec, Box, Rc, Arc. No OS needed, just a heap.

**Typical embedded constraints:**

| MCU | RAM | Flash | Clock |
|---|---|---|---|
| ATmega328P (Arduino) | 2 KB | 32 KB | 16 MHz |
| STM32F103 (Blue Pill) | 20 KB | 64 KB | 72 MHz |
| nRF52840 (BLE) | 256 KB | 1 MB | 64 MHz |
| ESP32 | 520 KB | 4 MB | 240 MHz |
| RP2040 (Pico) | 264 KB | 2 MB | 133 MHz |`},{heading:"embedded-hal and the HAL Ecosystem",body:`**\`embedded-hal\` defines hardware-agnostic traits.** Write your driver once, run it on any microcontroller.

\`\`\`rust
use embedded_hal::digital::OutputPin;
use embedded_hal::delay::DelayNs;

// This function works on ANY chip with GPIO
fn blink<P: OutputPin, D: DelayNs>(
    pin: &mut P,
    delay: &mut D,
    times: u32,
) {
    for _ in 0..times {
        pin.set_high().ok();
        delay.delay_ms(500);
        pin.set_low().ok();
        delay.delay_ms(500);
    }
}
\`\`\`

**The embedded-hal trait hierarchy:**

| Trait | Purpose |
|---|---|
| \`OutputPin\` / \`InputPin\` | GPIO digital I/O |
| \`Spi\` | SPI bus communication |
| \`I2c\` | I2C bus communication |
| \`Serial\` | UART serial port |
| \`Adc\` | Analog-to-digital conversion |
| \`Pwm\` | Pulse-width modulation |
| \`DelayNs\` | Blocking delays |

**The HAL stack:**

\`\`\`
Your Application
    |
    v
Driver crates (e.g., bme280, ssd1306)
    |  use embedded-hal traits
    v
HAL implementation (e.g., stm32f1xx-hal)
    |  implements embedded-hal for specific chip
    v
PAC (Peripheral Access Crate)
    |  auto-generated from SVD files
    v
Hardware registers
\`\`\`

**probe-rs — modern embedded tooling:**

\`\`\`bash
# Flash and run on hardware
cargo run --release  # with .cargo/config.toml runner

# Or use probe-rs directly
probe-rs run --chip STM32F103C8
probe-rs attach --chip STM32F103C8  # debug session
\`\`\`

probe-rs replaces OpenOCD and provides flash programming, debugging, and log capture through a unified interface.`}],questions:[{q:"What is the purpose of `embedded-hal` traits? Why not just write chip-specific code?",a:"embedded-hal defines hardware-agnostic traits (like OutputPin, Spi, I2c) that abstract over chip-specific peripherals. This enables: (1) Driver portability — a temperature sensor driver written against embedded-hal::I2c works on STM32, nRF52, ESP32, RP2040, and any other chip that implements the trait. Without it, you'd need separate driver implementations for each chip. (2) Ecosystem growth — hundreds of device driver crates on crates.io work across all supported microcontrollers. (3) Testing — you can mock embedded-hal traits for unit testing on your development machine. The pattern is: chip HAL crates implement the traits, and driver crates consume them. Your application ties them together.",hint:"Think about writing a sensor driver that works on multiple microcontrollers.",check:l=>{const s=l.toLowerCase();return(s.includes("portable")||s.includes("abstract")||s.includes("agnostic")||s.includes("any chip")||s.includes("multiple"))&&(s.includes("trait")||s.includes("driver"))}}]},{id:"gamedev",icon:"🎮",color:"#E11D48",title:"Game Development with Bevy",subtitle:"Entity Component System, rendering, animation, and building games in Rust with the Bevy engine",resources:[{type:"read",title:"Bevy Book — Official Guide",url:"https://bevyengine.org/learn/quick-start/introduction/"},{type:"read",title:"Bevy Cheat Book (community)",url:"https://bevy-cheatbook.github.io/"},{type:"read",title:"Bevy examples repository",url:"https://github.com/bevyengine/bevy/tree/main/examples"},{type:"video",title:"Building a game with Bevy",url:"https://www.youtube.com/watch?v=TQt-v5Rp3LA"}],content:[{heading:"ECS Architecture — Entities, Components, Systems",body:`**Bevy uses an Entity Component System (ECS), which separates data (components) from logic (systems).** This is fundamentally different from OOP game engines.

**Entities** — just an ID (u64). No data, no behavior.

**Components** — plain Rust structs attached to entities:

\`\`\`rust
use bevy::prelude::*;

#[derive(Component)]
struct Position { x: f32, y: f32 }

#[derive(Component)]
struct Velocity { dx: f32, dy: f32 }

#[derive(Component)]
struct Player;

#[derive(Component)]
struct Health(f32);
\`\`\`

**Systems** — regular functions that operate on components:

\`\`\`rust
fn movement_system(
    mut query: Query<(&mut Position, &Velocity)>,
    time: Res<Time>,
) {
    for (mut pos, vel) in &mut query {
        pos.x += vel.dx * time.delta_secs();
        pos.y += vel.dy * time.delta_secs();
    }
}

fn damage_system(
    mut query: Query<(&mut Health, &Position), With<Player>>,
    enemies: Query<&Position, With<Enemy>>,
) {
    for (mut health, player_pos) in &mut query {
        for enemy_pos in &enemies {
            let dist = ((player_pos.x - enemy_pos.x).powi(2)
                + (player_pos.y - enemy_pos.y).powi(2)).sqrt();
            if dist < 1.0 {
                health.0 -= 10.0;
            }
        }
    }
}
\`\`\`

**App setup:**

\`\`\`rust
fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_systems(Startup, setup)
        .add_systems(Update, (
            movement_system,
            damage_system,
        ))
        .run();
}

fn setup(mut commands: Commands) {
    commands.spawn((
        Player,
        Position { x: 0.0, y: 0.0 },
        Velocity { dx: 1.0, dy: 0.0 },
        Health(100.0),
    ));
}
\`\`\`

**Why ECS over OOP:**
- **Cache-friendly** — components stored contiguously in memory
- **Parallel** — systems with non-overlapping queries run in parallel automatically
- **Composable** — mix and match components (no inheritance hierarchies)
- **Data-driven** — add/remove components at runtime to change behavior`},{heading:"Bevy Features and Ecosystem",body:`**Bevy is a complete game engine, not just an ECS:**

| Feature | Details |
|---|---|
| **Rendering** | 2D sprites, 3D meshes, PBR materials, shadows |
| **Animation** | Skeletal, sprite sheet, blend shapes |
| **Audio** | Asset-based loading, spatial audio |
| **UI** | ECS-driven, flexbox layout |
| **Input** | Keyboard, mouse, gamepad, touch |
| **Asset loading** | Hot-reloading, GLTF, PNG, OGG, etc. |
| **Scenes** | Save/load game worlds |
| **Physics** | Via bevy_rapier (wrapper for Rapier physics) |
| **Networking** | Via bevy_replicon, lightyear |
| **Platforms** | Windows, macOS, Linux, Web (WASM), iOS, Android |

**Key Bevy resources and queries:**

\`\`\`rust
// Resources — global singleton data
#[derive(Resource)]
struct GameScore(u32);

fn score_system(score: Res<GameScore>) {
    println!("Score: {}", score.0);
}

// Commands — spawn/despawn entities
fn spawn_enemy(mut commands: Commands) {
    commands.spawn((
        Enemy,
        Position { x: 10.0, y: 5.0 },
        Health(50.0),
    ));
}

// Events — decouple systems
#[derive(Event)]
struct CollisionEvent {
    entity_a: Entity,
    entity_b: Entity,
}
\`\`\`

**Development workflow:**

\`\`\`toml
# Cargo.toml — enable fast compiles
[profile.dev]
opt-level = 1

[profile.dev.package."*"]
opt-level = 3
\`\`\`

With dynamic linking enabled, Bevy achieves 0.8-3.0 second compile times during development — fast enough for iterative game development.

**Bevy is free and open-source** (MIT/Apache 2.0), with an active community and regular releases.`}],questions:[{q:"Explain the difference between OOP game architecture and ECS. Why does Bevy use ECS?",a:"In OOP game architecture, game objects inherit from base classes (GameObject -> Character -> Player), mixing data and behavior in deep inheritance trees. This leads to the 'diamond problem', inflexible hierarchies, and cache-unfriendly memory layouts. In ECS: Entities are just IDs, Components are plain data structs (Position, Health, Velocity), and Systems are functions that query specific component combinations. Bevy uses ECS because: (1) Cache performance — components are stored in contiguous arrays (called archetypes), so iterating over all Position components is extremely cache-friendly. (2) Automatic parallelism — systems that query different components run in parallel without manual threading. (3) Composition over inheritance — add/remove components at runtime to change entity behavior (a 'Player' becomes a 'Ghost' by swapping components, not changing class hierarchy). (4) Data-driven design enables tools, serialization, and debugging.",hint:"Think about inheritance problems, memory layout, and parallelism.",check:l=>{const s=l.toLowerCase();return(s.includes("entity")||s.includes("component")||s.includes("system"))&&(s.includes("cache")||s.includes("parallel")||s.includes("inheritance")||s.includes("composition")||s.includes("data"))}}]},{id:"production",icon:"🏢",color:"#1D4ED8",title:"Rust in Production",subtitle:"Who uses Rust: AWS, Cloudflare, Discord, Figma, Meta, Microsoft, Google — and why they chose it",resources:[{type:"read",title:"Rust in Production (podcast + case studies)",url:"https://corrode.dev/podcast/"},{type:"read",title:"AWS — Sustainability with Rust",url:"https://aws.amazon.com/blogs/opensource/sustainability-with-rust/"},{type:"read",title:"Discord — Why Discord is switching from Go to Rust",url:"https://discord.com/blog/why-discord-is-switching-from-go-to-rust"},{type:"read",title:"Figma — Rust in production at Figma",url:"https://www.figma.com/blog/rust-in-production-at-figma/"},{type:"video",title:"Companies using Rust in production (RustConf)",url:"https://www.youtube.com/watch?v=rUzRogW9QVs"}],content:[{heading:"Major Companies Using Rust",body:`**Rust has moved from experimental to production-critical at the world's largest tech companies.**

| Company | What They Use Rust For | Scale |
|---|---|---|
| **Amazon (AWS)** | Firecracker (microVMs for Lambda), Bottlerocket (container OS), S3 | Billions of Lambda invocations |
| **Microsoft** | Windows kernel components, Azure IoT Edge | Core OS infrastructure |
| **Google** | Android (Bluetooth, networking), ChromeOS, Fuchsia | 1B+ Android devices |
| **Meta** | Source control (Mononoke/Sapling), Buck2 build system | Millions of builds/day |
| **Cloudflare** | HTTP proxy (Pingora), Workers runtime, Argo Tunnel | ~20% of web traffic |
| **Discord** | Read States service (replaced Go), message indexing | 100M+ monthly users |
| **Figma** | Multiplayer server, rendering engine | Real-time collaboration |
| **Dropbox** | File sync engine (Nucleus) | 700M users |
| **Mozilla** | Servo, Stylo (CSS engine in Firefox), WebRender | Firefox rendering |
| **1Password** | Core crypto, browser extension engine | Millions of users |
| **Shopify** | YJIT (Ruby JIT compiler), core infrastructure | E-commerce platform |
| **Vercel** | Turbopack (webpack successor), SWC (JS compiler) | Next.js builds |

**Why they chose Rust:**

1. **Performance without GC pauses** — Discord's Go service had tail latency spikes from garbage collection. Rust eliminated them entirely.

2. **Memory safety without runtime cost** — No null pointers, no buffer overflows, no data races — while matching C/C++ speed.

3. **Reliability** — "If it compiles, it works" — fewer production incidents, less on-call pain.

4. **Energy efficiency** — AWS found Rust uses ~50% less energy than Java for equivalent workloads.

5. **Developer productivity** — The compiler catches bugs early, reducing debugging time.`},{heading:"Cloudflare Pingora — A Case Study",body:`**Cloudflare replaced their nginx-based proxy with Pingora, written in Rust.** It handles ~1 trillion requests/day.

**Why they switched from nginx (C):**

| Problem with nginx | Pingora's Solution |
|---|---|
| Worker process architecture wastes connections | Multithreaded with connection sharing |
| Connection reuse: limited by process isolation | Connection pooling across all requests |
| C memory safety bugs | Rust's borrow checker prevents them |
| Difficult to extend | Modular Rust crate architecture |
| No async I/O story | Built on Tokio async runtime |

**Results:**

\`\`\`
- 70% fewer CPU resources for the same traffic
- 30% reduction in new connections to origins
- Zero memory-safety CVEs (vs multiple per year in C)
- Faster feature development (Rust vs C)
\`\`\`

**Discord's Go-to-Rust migration:**

Discord's Read States service tracks which messages you've read. In Go:
- Garbage collector paused every ~2 minutes
- Tail latency spikes during GC (p99 >> p50)
- Had to tune GOGC aggressively

In Rust:
- No GC pauses at all
- Consistent latency (p99 close to p50)
- Lower memory usage
- No runtime tuning needed

**The pattern:** companies migrate to Rust when they hit performance walls with GC'd languages (Go, Java, C#) or safety walls with unsafe languages (C, C++).

**Rust adoption is accelerating:** the 2024 Stack Overflow survey shows Rust as the most admired language for the 9th consecutive year.`},{heading:"When to Choose Rust (and When Not To)",body:`**Rust excels at specific problem domains. Choose wisely.**

**Use Rust when:**

| Domain | Why Rust Wins | Examples |
|---|---|---|
| **Systems programming** | Memory safety + C performance | OS kernels, drivers, VMs |
| **Network services** | No GC pauses, async excellence | Proxies, load balancers, CDN |
| **CLI tools** | Small binary, fast startup, cross-compile | ripgrep, fd, bat |
| **WebAssembly** | First-class WASM target, small binaries | Edge computing, browser compute |
| **Embedded** | no_std, zero runtime, predictable | IoT, robotics, automotive |
| **Crypto/security** | No undefined behavior, timing-safe | TLS, key management |
| **Data infrastructure** | Speed + safety for data pipelines | DataFusion, Polars, Delta Lake |

**Don't use Rust when:**

| Scenario | Better Choice | Why |
|---|---|---|
| Rapid prototyping | Python, TypeScript | Faster iteration, dynamic typing |
| ML model training | Python (PyTorch/TF) | Ecosystem, GPU libs, notebooks |
| Simple CRUD web app | Rails, Django, Next.js | Batteries included, faster dev |
| Scripting and glue code | Python, Bash | Lower ceremony |
| Mobile apps | Swift, Kotlin | Platform-native UIs |
| Team mostly junior | Go, Python | Gentler learning curve |

**The honest assessment:**
Rust has a steep learning curve (6-12 months to proficiency). The borrow checker is initially frustrating. Compile times are slower than Go. The ecosystem is younger than Python/Java.

**But:** if your problem is performance-sensitive, reliability-critical, or memory-safety-important — Rust is the best tool available today.`}],questions:[{q:"Why did Discord switch from Go to Rust for their Read States service? What specific problem did Rust solve?",a:"Discord switched because Go's garbage collector caused periodic latency spikes. The Read States service (which tracks which messages each user has read) maintained a large in-memory data structure. Every ~2 minutes, Go's garbage collector would pause all goroutines to scan this data, causing p99 latency to spike dramatically above p50. They tried tuning GOGC (Go's GC tuning knob) but couldn't eliminate the spikes. Rust solved this because it has no garbage collector — memory is freed deterministically when values go out of scope. The Rust rewrite had consistent latency (p99 close to p50), lower overall memory usage, and required no runtime tuning. The fundamental issue: GC-based languages add non-deterministic pauses proportional to heap size, which Rust avoids entirely.",hint:"Think about garbage collection pauses and tail latency.",check:l=>{const s=l.toLowerCase();return(s.includes("garbage")||s.includes("gc"))&&(s.includes("latency")||s.includes("pause")||s.includes("spike"))}},{q:"Name at least 3 domains where Rust excels and explain why for each.",a:"Three domains where Rust excels: (1) Network infrastructure (proxies, CDNs, load balancers) — Rust provides C-level performance without GC pauses that would cause latency spikes under load. Cloudflare's Pingora handles 1T+ requests/day. (2) CLI tools — Rust produces small static binaries with instant startup, easy cross-compilation to all platforms, and C-like speed. ripgrep is 2-5x faster than grep. (3) WebAssembly/Edge computing — Rust was designed with WASM as a first-class target, producing small binaries with near-native speed and sandboxed execution. Cloudflare Workers and Fastly Compute both use Rust+WASM. Other strong domains: embedded systems (no_std, zero runtime), cryptography (no UB, timing-safe), and data infrastructure (DataFusion, Polars).",hint:"Think about where memory safety + performance both matter.",check:l=>{const s=l.toLowerCase();return(s.includes("network")||s.includes("proxy")||s.includes("cli")||s.includes("command")||s.includes("web")||s.includes("wasm")||s.includes("embedded")||s.includes("system"))&&(s.includes("performance")||s.includes("safety")||s.includes("gc")||s.includes("speed")||s.includes("memory"))}}]},{id:"testing",icon:"🧪",color:"#581C87",title:"Testing",subtitle:"Unit tests, integration tests, doc tests, property testing, benchmarks — Rust's built-in and community testing tools",resources:[{type:"read",title:"The Rust Book — Writing Tests",url:"https://doc.rust-lang.org/book/ch11-00-testing.html"},{type:"read",title:"proptest documentation",url:"https://docs.rs/proptest/"},{type:"read",title:"criterion.rs — Benchmarking",url:"https://bheisler.github.io/criterion.rs/book/"},{type:"read",title:"nextest — Fast test runner",url:"https://nexte.st/"},{type:"video",title:"Testing in Rust",url:"https://www.youtube.com/watch?v=8XaVlL3lObQ"}],content:[{heading:"Unit Tests — Built Into the Language",body:`**Rust has first-class testing support. Unit tests live in the same file as the code, inside a \`#[cfg(test)]\` module.**

\`\`\`rust
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

pub fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Division by zero".into())
    } else {
        Ok(a / b)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(2, 3), 5);
    }

    #[test]
    fn test_add_negative() {
        assert_eq!(add(-1, 1), 0);
    }

    #[test]
    fn test_divide() {
        assert!((divide(10.0, 3.0).unwrap() - 3.333).abs() < 0.01);
    }

    #[test]
    fn test_divide_by_zero() {
        assert!(divide(1.0, 0.0).is_err());
    }

    #[test]
    #[should_panic(expected = "overflow")]
    fn test_overflow() {
        let _ = (i32::MAX).checked_add(1).expect("overflow");
    }
}
\`\`\`

**Key assertion macros:**

| Macro | Purpose |
|---|---|
| \`assert!(expr)\` | Asserts expression is true |
| \`assert_eq!(a, b)\` | Asserts a == b (shows diff on failure) |
| \`assert_ne!(a, b)\` | Asserts a != b |
| \`#[should_panic]\` | Test expects a panic |
| \`assert!(result.is_ok())\` | Check Result success |
| \`assert!(result.is_err())\` | Check Result failure |

**Running tests:**

\`\`\`bash
cargo test                    # Run all tests
cargo test test_add           # Run specific test
cargo test -- --nocapture     # Show println! output
cargo test -- --test-threads=1  # Sequential
\`\`\`

**\`#[cfg(test)]\`** means the test module is only compiled when running tests, never in release builds. Tests can access private functions because they're in the same module.`},{heading:"Integration and Doc Tests",body:`**Integration tests live in the \`tests/\` directory and test your crate as an external consumer would.**

\`\`\`
my_crate/
├── src/
│   └── lib.rs
└── tests/
    ├── api_tests.rs      # Each file is a separate test crate
    └── integration.rs
\`\`\`

\`\`\`rust
// tests/api_tests.rs
use my_crate::process_data;

#[test]
fn test_full_pipeline() {
    let input = vec![1, 2, 3, 4, 5];
    let result = process_data(&input);
    assert_eq!(result.len(), 5);
    assert!(result.iter().all(|x| *x > 0));
}
\`\`\`

**Doc tests — executable documentation:**

\`\`\`rust
/// Adds two numbers together.
///
/// # Examples
///
/// \\\`\\\`\\\`
/// let result = my_crate::add(2, 3);
/// assert_eq!(result, 5);
/// \\\`\\\`\\\`
///
/// Negative numbers work too:
///
/// \\\`\\\`\\\`
/// let result = my_crate::add(-1, 1);
/// assert_eq!(result, 0);
/// \\\`\\\`\\\`
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
\`\`\`

**\`cargo test\` runs doc tests automatically!** This means your documentation examples are always correct — if the API changes and the example breaks, the test fails.

**Test organization:**

| Test Type | Location | Purpose | Access |
|---|---|---|---|
| Unit | \`src/*.rs\` (\`#[cfg(test)]\`) | Test individual functions | Private + public |
| Integration | \`tests/*.rs\` | Test public API | Public only |
| Doc | \`///\` comments | Test documentation examples | Public only |`},{heading:"Property Testing and Fuzzing",body:`**Property testing generates random inputs to find edge cases you'd never think to test manually.**

**proptest — property-based testing:**

\`\`\`rust
use proptest::prelude::*;

fn reverse<T: Clone>(v: &[T]) -> Vec<T> {
    v.iter().rev().cloned().collect()
}

proptest! {
    #[test]
    fn test_reverse_twice_is_identity(
        v in prop::collection::vec(any::<i32>(), 0..100)
    ) {
        let reversed = reverse(&reverse(&v));
        assert_eq!(v, reversed);
    }

    #[test]
    fn test_reverse_preserves_length(
        v in prop::collection::vec(any::<String>(), 0..50)
    ) {
        assert_eq!(v.len(), reverse(&v).len());
    }

    #[test]
    fn test_sort_is_idempotent(
        mut v in prop::collection::vec(any::<i32>(), 0..100)
    ) {
        v.sort();
        let sorted = v.clone();
        v.sort();
        assert_eq!(v, sorted);
    }
}
\`\`\`

proptest runs each test with 256 random inputs by default. When a test fails, it **shrinks** the input to find the minimal failing case.

**cargo-fuzz — coverage-guided fuzzing:**

\`\`\`rust
// fuzz/fuzz_targets/parse_input.rs
#![no_main]
use libfuzzer_sys::fuzz_target;
use my_crate::parse;

fuzz_target!(|data: &[u8]| {
    if let Ok(s) = std::str::from_utf8(data) {
        let _ = parse(s);
        // Should never panic or crash
    }
});
\`\`\`

\`\`\`bash
cargo fuzz run parse_input
# Runs until it finds a crash or you stop it
\`\`\`

**When to use each:**
- **Unit tests** — specific known inputs, expected outputs
- **proptest** — invariants that should hold for ALL inputs
- **Fuzzing** — security-sensitive code, parsers, serialization`},{heading:"Benchmarks with Criterion",body:`**criterion.rs provides statistically rigorous benchmarks with HTML reports, regression detection, and comparison.**

\`\`\`rust
// benches/my_benchmark.rs
use criterion::{criterion_group, criterion_main, Criterion};
use my_crate::process_data;

fn bench_process_small(c: &mut Criterion) {
    let data = vec![1; 100];
    c.bench_function("process_100", |b| {
        b.iter(|| process_data(&data))
    });
}

fn bench_process_large(c: &mut Criterion) {
    let data = vec![1; 100_000];
    c.bench_function("process_100k", |b| {
        b.iter(|| process_data(&data))
    });
}

fn bench_comparison(c: &mut Criterion) {
    let mut group = c.benchmark_group("sort");
    for size in [100, 1000, 10000].iter() {
        let data: Vec<i32> = (0..*size).rev().collect();
        group.bench_with_input(
            format!("size_{}", size),
            &data,
            |b, d| b.iter(|| {
                let mut v = d.clone();
                v.sort();
            }),
        );
    }
    group.finish();
}

criterion_group!(benches,
    bench_process_small,
    bench_process_large,
    bench_comparison,
);
criterion_main!(benches);
\`\`\`

**Cargo.toml:**

\`\`\`toml
[[bench]]
name = "my_benchmark"
harness = false

[dev-dependencies]
criterion = { version = "0.5", features = ["html_reports"] }
\`\`\`

**Running benchmarks:**

\`\`\`bash
cargo bench                    # Run all benchmarks
cargo bench -- process         # Filter by name
\`\`\`

Criterion generates HTML reports in \`target/criterion/\` with:
- Statistical analysis (mean, median, std dev)
- Regression detection (warns if perf degrades)
- Throughput graphs over time
- Comparison between implementations

**nextest — faster test runner:**

\`\`\`bash
# Install
cargo install cargo-nextest

# 40-60% faster than cargo test
cargo nextest run

# Retry flaky tests
cargo nextest run --retries 2
\`\`\`

nextest runs each test in its own process, catches timeouts, and provides better output formatting.`}],questions:[{q:"What are the three types of tests in Rust and where does each live?",a:"The three types are: (1) Unit tests — live in the same file as the code, inside a `#[cfg(test)] mod tests { }` block. They can test private functions because they're in the same module. Only compiled during `cargo test`. (2) Integration tests — live in the `tests/` directory at the crate root. Each file is compiled as a separate crate and can only access public APIs. Tests your crate as an external consumer would. (3) Doc tests — live in `///` documentation comments as code blocks. `cargo test` automatically extracts and runs them, ensuring documentation examples always compile and produce correct results. All three are run by `cargo test`.",hint:"Think about file locations: same file, tests/ directory, and doc comments.",check:l=>{const s=l.toLowerCase();return s.includes("unit")&&s.includes("integration")&&(s.includes("doc")||s.includes("documentation"))}},{q:"What is property testing with proptest, and how does it differ from regular unit testing?",a:"Property testing generates random inputs and verifies that invariants (properties) hold for ALL of them, rather than testing specific hand-picked examples. With regular unit tests, you write `assert_eq!(reverse(vec![1,2,3]), vec![3,2,1])` — testing one specific case. With proptest, you write `for all vectors v: reverse(reverse(v)) == v` and it generates 256+ random vectors to verify the property. When a test fails, proptest automatically shrinks the failing input to find the minimal case that triggers the bug. This catches edge cases you'd never think to test: empty inputs, very large inputs, special characters, boundary values. It's particularly effective for testing parsers, serializers, sorting algorithms, and any function where correctness can be expressed as a universal property.",hint:"Think about testing 'for all inputs X, property Y holds' vs testing specific known cases.",check:l=>{const s=l.toLowerCase();return(s.includes("random")||s.includes("generat"))&&(s.includes("property")||s.includes("invariant")||s.includes("all input")||s.includes("shrink"))}}]}];function qp({q:l,a:s,hint:S,check:V,color:A}){const[M,U]=N.useState(""),[x,F]=N.useState("idle"),q=N.useRef(null),z=()=>{M.trim()&&F(V(M)?"correct":"wrong")};return n.jsxs("div",{style:{padding:"14px 0",borderBottom:"1px solid #F0EDE6"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:"#2a2a2a",marginBottom:10,lineHeight:1.5},children:l}),x==="idle"||x==="wrong"?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{ref:q,value:M,onChange:E=>U(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),z())},placeholder:"Type your answer...",rows:2,style:{width:"100%",padding:"10px 14px",borderRadius:8,border:x==="wrong"?"2px solid #EF4444":"1px solid #DDD9D0",fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.5,outline:"none",resize:"vertical",background:x==="wrong"?"#FEF2F2":"white",marginBottom:8,boxSizing:"border-box"}}),x==="wrong"&&n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#DC2626",marginBottom:8},children:["✗"," Not quite. Try again or reveal."]}),n.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[n.jsxs("button",{onClick:z,style:{padding:"7px 18px",borderRadius:6,border:"none",cursor:"pointer",background:A,color:"white",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600,opacity:M.trim()?1:.4},children:["✓"," Check"]}),n.jsxs("button",{onClick:()=>F("revealed"),style:{padding:"7px 18px",borderRadius:6,border:"1px solid #DDD9D0",cursor:"pointer",background:"transparent",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,color:"#888"},children:["👁"," Reveal"]}),S&&n.jsxs("details",{style:{marginLeft:4},children:[n.jsxs("summary",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#aaa",cursor:"pointer"},children:["💡"," Hint"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:4,padding:"6px 10px",background:"#FAF9F6",borderRadius:6},children:S})]})]})]}):x==="correct"?n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#ECFDF5",border:"1px solid #A7F3D0"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#059669",marginBottom:6},children:["✓"," Correct!"]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]}):n.jsxs("div",{style:{padding:"12px 16px",borderRadius:8,background:"#FFFBEB",border:"1px solid #FDE68A"},children:[n.jsxs("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,color:"#B45309",marginBottom:6,display:"flex",justifyContent:"space-between"},children:[n.jsxs("span",{children:["📖"," Answer"]}),n.jsx("button",{onClick:()=>{var E;F("idle"),U(""),(E=q.current)==null||E.focus()},style:{padding:"4px 12px",borderRadius:4,border:"1px solid #E5E2D9",cursor:"pointer",background:"white",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#888"},children:"Try myself"})]}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#444",lineHeight:1.6},children:s})]})]})}function Hp(){const[l,s]=N.useState(null),[S,V]=N.useState(null),[A,M]=N.useState(new Set),[U,x]=N.useState({}),F=Hs.reduce((p,w)=>p+w.content.length,0),q=Math.round(A.size/F*100),z=p=>p.split(/\*\*(.*?)\*\*/g).map((T,m)=>m%2===1?n.jsx("strong",{style:{color:"#1a1a1a",fontWeight:600},children:T},m):n.jsx("span",{children:T},m)),E=p=>{const w=p.split(`
`),T=[];let m=0;for(;m<w.length;){const d=w[m];if(d.trim().startsWith("|")&&d.trim().endsWith("|")){const h=[];for(;m<w.length&&w[m].trim().startsWith("|")&&w[m].trim().endsWith("|");)h.push(w[m]),m++;const u=C=>C.split("|").slice(1,-1).map(y=>y.trim()),b=u(h[0]),f=h.findIndex(C=>/^\|[\s\-:|]+\|$/.test(C.trim())),B=f>=0?f+1:1,R=h.slice(B).filter(C=>!/^\|[\s\-:|]+\|$/.test(C.trim()));T.push(n.jsx("div",{style:{overflowX:"auto",margin:"8px 0 12px",borderRadius:8,border:"1px solid #e5e2db"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'DM Sans',sans-serif",fontSize:12.5,lineHeight:1.5},children:[n.jsx("thead",{children:n.jsx("tr",{style:{background:"#f5f3ee"},children:b.map((C,y)=>n.jsx("th",{style:{padding:"10px 14px",textAlign:"left",fontWeight:600,color:"#1a1a1a",borderBottom:"2px solid #dcd8d0",whiteSpace:"nowrap"},children:z(C)},y))})}),n.jsx("tbody",{children:R.map((C,y)=>{const G=u(C);return n.jsx("tr",{style:{background:y%2===0?"#fff":"#fafaf8"},children:G.map((re,oe)=>n.jsx("td",{style:{padding:"8px 14px",borderBottom:"1px solid #eee",color:"#3a3a3a"},children:z(re)},oe))},y)})})]})},`t${T.length}`))}else d===""?T.push(n.jsx("div",{style:{height:8}},`e${m}`)):T.push(n.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"#3a3a3a",marginBottom:2},children:z(d)},`p${m}`)),m++}return T};return n.jsxs("div",{style:{fontFamily:"'Source Serif 4',Georgia,serif",background:"#F5F3EE",minHeight:"100vh",color:"#1a1a1a"},children:[n.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');*{box-sizing:border-box;margin:0;padding:0}.sc{transition:all .3s cubic-bezier(.4,0,.2,1)}.sc:hover{box-shadow:0 6px 24px rgba(0,0,0,.06)}.br{transition:all .2s;cursor:pointer;border-radius:8px}.br:hover{background:rgba(0,0,0,.02)}.ck{width:20px;height:20px;border-radius:5px;border:2px solid #ccc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;background:white;font-size:11px}.ck.d{background:#059669;border-color:#059669;color:white}.ar{transition:transform .25s;font-size:16px;color:#aaa}.pf{transition:width .5s cubic-bezier(.4,0,.2,1)}.tb{padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;border:none;cursor:pointer;border-radius:6px 6px 0 0;transition:all .2s;white-space:nowrap}.tb.a{background:white;color:#1a1a1a;box-shadow:0 -2px 8px rgba(0,0,0,.04)}.tb:not(.a){background:transparent;color:#888}.tb:not(.a):hover{color:#555}.rl{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:8px;text-decoration:none;color:inherit;transition:all .2s;border:1px solid transparent}.rl:hover{border-color:rgba(0,0,0,.08);transform:translateX(3px)}.tg{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:500;padding:3px 8px;border-radius:4px;letter-spacing:.4px;white-space:nowrap}textarea:focus{border-color:#1D4ED8!important}"}),n.jsxs("div",{style:{padding:"48px 28px 28px",maxWidth:840,margin:"0 auto"},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#999",marginBottom:10},children:"REAL-WORLD RUST"}),n.jsx("h1",{style:{fontSize:"clamp(26px,5vw,40px)",fontWeight:700,lineHeight:1.1,marginBottom:6,fontStyle:"italic"},children:"Real-World Rust Deep Dive"}),n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#666",lineHeight:1.6,maxWidth:620,marginBottom:24},children:["From CLI tools to web services, databases to game engines. See how Rust is used in production by AWS, Cloudflare, Discord, and more.",n.jsx("br",{}),Hs.length," sections · ",F," concepts · ",Hs.reduce((p,w)=>{var T;return p+(((T=w.questions)==null?void 0:T.length)||0)},0)," practice questions."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans',sans-serif"},children:[n.jsx("div",{style:{flex:1,height:7,background:"#DDD9D0",borderRadius:4,overflow:"hidden"},children:n.jsx("div",{className:"pf",style:{width:`${q}%`,height:"100%",background:"linear-gradient(90deg, #0891B2, #DC2626, #7C3AED, #D97706, #059669, #E11D48, #1D4ED8, #581C87)",borderRadius:4}})}),n.jsxs("span",{style:{fontSize:12,fontWeight:600,color:"#888"},children:[A.size,"/",F]})]})]}),n.jsx("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 56px"},children:Hs.map(p=>{var h;const w=l===p.id,T=p.content.map((u,b)=>`${p.id}-${b}`),m=T.filter(u=>A.has(u)).length,d=U[p.id]||"learn";return n.jsxs("div",{className:"sc",style:{background:"white",borderRadius:10,marginBottom:10,border:"1px solid #E0DDD6",overflow:"hidden"},children:[n.jsxs("div",{onClick:()=>s(w?null:p.id),style:{padding:"18px 22px",display:"flex",alignItems:"center",gap:14,cursor:"pointer"},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:8,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:16,flexShrink:0,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"},children:p.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:15.5,fontWeight:600},children:p.title}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:"#888",marginTop:2},children:p.subtitle})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",marginRight:6},children:[m,"/",p.content.length]}),n.jsx("span",{className:"ar",style:{transform:w?"rotate(90deg)":"rotate(0)"},children:"›"})]}),w&&n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:2,padding:"0 22px",borderBottom:"1px solid #E0DDD6",background:"#FAF9F6",overflowX:"auto"},children:[n.jsxs("button",{className:`tb ${d==="learn"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"learn"})),children:["📖"," Learn"]}),n.jsxs("button",{className:`tb ${d==="practice"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"practice"})),children:["✏️"," Practice (",((h=p.questions)==null?void 0:h.length)||0,")"]}),n.jsxs("button",{className:`tb ${d==="deeper"?"a":""}`,onClick:()=>x(u=>({...u,[p.id]:"deeper"})),children:["🔗"," Go Deeper (",p.resources.length,")"]})]}),d==="learn"&&n.jsx("div",{children:p.content.map((u,b)=>{const f=`${p.id}-${b}`,B=S===f,R=A.has(f);return n.jsxs("div",{style:{borderTop:b>0?"1px solid #F0EDE6":"none"},children:[n.jsxs("div",{className:"br",onClick:()=>V(B?null:f),style:{padding:"12px 22px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{className:`ck ${R?"d":""}`,onClick:C=>{C.stopPropagation();const y=new Set(A);y.has(f)?y.delete(f):y.add(f),M(y)},children:R&&"✓"}),n.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13.5,fontWeight:600,color:R?"#aaa":"#2a2a2a",textDecoration:R?"line-through":"none",flex:1},children:u.heading}),n.jsx("span",{className:"ar",style:{transform:B?"rotate(90deg)":"rotate(0)"},children:"›"})]}),B&&n.jsx("div",{style:{padding:"4px 22px 20px 54px",borderLeft:`3px solid ${p.color}20`,marginLeft:22},children:E(u.body)})]},b)})}),d==="practice"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:"Type your answer and check, use hints, or reveal."}),(p.questions||[]).map((u,b)=>n.jsx(qp,{...u,color:p.color},`${p.id}-q-${b}`))]}),d==="deeper"&&n.jsxs("div",{style:{padding:"16px 22px 20px"},children:[n.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#777",marginBottom:12,lineHeight:1.5},children:["Curated resources: infographics ","→"," reading ","→"," video."]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:p.resources.map((u,b)=>{const f=Lp[u.type];return n.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"rl",style:{background:f.bg+"55"},children:[n.jsxs("span",{className:"tg",style:{background:f.bg,color:f.color},children:[f.emoji," ",f.label]}),n.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#333",lineHeight:1.4},children:u.title})]},b)})})]})]})]},p.id)})}),n.jsxs("div",{style:{maxWidth:840,margin:"0 auto",padding:"0 28px 40px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#bbb",textAlign:"center",lineHeight:1.6},children:["CLI tools ","→"," Web services ","→"," Databases ","→"," WebAssembly ","→"," Embedded ","→"," Game dev ","→"," Production ","→"," Testing"]})]})}const wn={"rust-learning-roadmap":{label:"Rust Learning Roadmap",Component:ap},"ownership-borrowing-deep-dive":{label:"Ownership & borrowing",Component:cp},"structs-enums-deep-dive":{label:"Structs, enums & pattern matching",Component:dp},"error-handling-deep-dive":{label:"Error handling",Component:hp},"collections-iterators-deep-dive":{label:"Collections & iterators",Component:gp},"traits-generics-deep-dive":{label:"Traits & generics",Component:wp},"lifetimes-deep-dive":{label:"Lifetimes",Component:kp},"smart-pointers-deep-dive":{label:"Smart pointers",Component:Tp},"concurrency-deep-dive":{label:"Fearless concurrency",Component:Dp},"closures-fp-deep-dive":{label:"Closures & functional programming",Component:Wp},"modules-cargo-deep-dive":{label:"Modules, crates & Cargo",Component:Ap},"async-rust-deep-dive":{label:"Async Rust",Component:Ip},"unsafe-ffi-macros-deep-dive":{label:"Unsafe, FFI & macros",Component:Np},"real-world-rust-deep-dive":{label:"Real-world Rust",Component:Hp}},Qc=Object.keys(wn),Zc="'DM Sans', ui-sans-serif, system-ui, sans-serif";function Xc(l){return{fontFamily:Zc,fontSize:12,fontWeight:l?500:450,letterSpacing:"0.04em",lineHeight:1.45,textAlign:"left",cursor:"pointer",border:"none",borderRadius:5,padding:"7px 10px",width:"100%",background:l?"#1c1c1e":"transparent",color:l?"#f7f6f4":"#5a5866",WebkitFontSmoothing:"antialiased",display:"flex",alignItems:"center",gap:6,marginBottom:2}}function Up({collapsed:l}){return n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":!0,children:[n.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),n.jsx("line",{x1:"9",y1:"4",x2:"9",y2:"20"}),l?n.jsx("polyline",{points:"13 10 16 12 13 14",fill:"none"}):n.jsx("polyline",{points:"15 10 12 12 15 14",fill:"none"})]})}const Vp=[{num:"01",id:"ownership-borrowing-deep-dive"},{num:"02",id:"structs-enums-deep-dive"},{num:"03",id:"error-handling-deep-dive"},{num:"04",id:"collections-iterators-deep-dive"},{num:"05",id:"traits-generics-deep-dive"},{num:"06",id:"lifetimes-deep-dive"},{num:"07",id:"smart-pointers-deep-dive"},{num:"08",id:"concurrency-deep-dive"},{num:"09",id:"closures-fp-deep-dive"},{num:"10",id:"modules-cargo-deep-dive"},{num:"11",id:"async-rust-deep-dive"},{num:"12",id:"unsafe-ffi-macros-deep-dive"},{num:"13",id:"real-world-rust-deep-dive"}];function Gp(){const[l,s]=N.useState(()=>{const x=window.location.hash.slice(1);return Qc.includes(x)?x:"rust-learning-roadmap"}),[S,V]=N.useState(!0);N.useEffect(()=>{window.location.hash=l},[l]),N.useEffect(()=>{const x=()=>{const F=window.location.hash.slice(1);Qc.includes(F)&&s(F)};return window.addEventListener("hashchange",x),()=>window.removeEventListener("hashchange",x)},[]),N.useEffect(()=>{const x=F=>{const q=F.target;q instanceof HTMLInputElement||q instanceof HTMLTextAreaElement||q.isContentEditable||(F.key==="b"||F.key==="B")&&(F.metaKey||F.ctrlKey)&&!F.altKey&&!F.shiftKey&&(F.preventDefault(),V(z=>!z))};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[]);const A=wn[l]??wn["rust-learning-roadmap"],{Component:M}=A,U=S?268:52;return n.jsxs("div",{style:{display:"flex",height:"100%",width:"100%",fontFamily:"system-ui, sans-serif"},children:[n.jsxs("aside",{"aria-label":"Contents navigation",style:{width:U,flexShrink:0,boxSizing:"border-box",borderRight:"1px solid #e5e5e5",background:"#fafafa",display:"flex",flexDirection:"column",transition:"width 0.2s ease",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 8px",display:"flex",alignItems:"center",justifyContent:S?"space-between":"center",gap:8,minHeight:44,boxSizing:"border-box"},children:[S&&n.jsx("span",{style:{fontFamily:Zc,fontSize:12,fontWeight:600,letterSpacing:"0.06em",color:"#2a292f",paddingLeft:6,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Contents"}),n.jsx("button",{type:"button",onClick:()=>V(x=>!x),"aria-expanded":S,style:{display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,padding:0,border:"none",borderRadius:8,background:"#e8e8e8",color:"#222",cursor:"pointer",flexShrink:0},children:n.jsx(Up,{collapsed:!S})})]}),n.jsxs("nav",{style:{display:S?"flex":"none",flexDirection:"column",gap:0,padding:"4px 10px 16px",overflow:"auto",flex:1},children:[n.jsx("button",{type:"button",onClick:()=>s("rust-learning-roadmap"),style:{...Xc(l==="rust-learning-roadmap"),marginBottom:8,fontWeight:600},children:wn["rust-learning-roadmap"].label}),Vp.map(x=>n.jsxs("button",{type:"button",onClick:()=>s(x.id),style:Xc(l===x.id),children:[n.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,fontWeight:600,color:l===x.id?"#fdba74":"#aaa",flexShrink:0},children:x.num}),wn[x.id].label]},x.num))]})]}),n.jsx("main",{style:{flex:1,minWidth:0,overflow:"auto",background:"#fff"},children:n.jsx(M,{})})]})}sp.createRoot(document.getElementById("root")).render(n.jsx(N.StrictMode,{children:n.jsx(Gp,{})}));
