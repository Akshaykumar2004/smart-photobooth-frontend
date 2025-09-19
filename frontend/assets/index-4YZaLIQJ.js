var f0=Object.defineProperty;var h0=(t,e,n)=>e in t?f0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ei=(t,e,n)=>h0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var p0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function om(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lm={exports:{}},Cl={},cm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),v0=Symbol.for("react.strict_mode"),x0=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),M0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),w0=Symbol.for("react.lazy"),Zf=Symbol.iterator;function T0(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var um={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dm=Object.assign,fm={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=fm,this.updater=n||um}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hm(){}hm.prototype=Ls.prototype;function kd(t,e,n){this.props=t,this.context=e,this.refs=fm,this.updater=n||um}var Od=kd.prototype=new hm;Od.constructor=kd;dm(Od,Ls.prototype);Od.isPureReactComponent=!0;var Qf=Array.isArray,pm=Object.prototype.hasOwnProperty,zd={current:null},mm={key:!0,ref:!0,__self:!0,__source:!0};function gm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)pm.call(e,i)&&!mm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Da,type:t,key:s,ref:a,props:r,_owner:zd.current}}function b0(t,e){return{$$typeof:Da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Da}function A0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?A0(""+t.key):e.toString(36)}function Uo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Da:case m0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ql(a,0):i,Qf(r)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),Uo(r,e,n,"",function(u){return u})):r!=null&&(Bd(r)&&(r=b0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Jf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Qf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ql(s,o);a+=Uo(s,e,n,l,r)}else if(l=T0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ql(s,o++),a+=Uo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return Uo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function C0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Io={transition:null},R0={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Io,ReactCurrentOwner:zd};function vm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Ls;Ve.Fragment=g0;Ve.Profiler=x0;Ve.PureComponent=kd;Ve.StrictMode=v0;Ve.Suspense=M0;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;Ve.act=vm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=dm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=zd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)pm.call(e,l)&&!mm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Da,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:y0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_0,_context:t},t.Consumer=t};Ve.createElement=gm;Ve.createFactory=function(t){var e=gm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:S0,render:t}};Ve.isValidElement=Bd;Ve.lazy=function(t){return{$$typeof:w0,_payload:{_status:-1,_result:t},_init:C0}};Ve.memo=function(t,e){return{$$typeof:E0,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Io.transition;Io.transition={};try{t()}finally{Io.transition=e}};Ve.unstable_act=vm;Ve.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Ve.useContext=function(t){return Kt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Ve.useId=function(){return Kt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Kt.current.useRef(t)};Ve.useState=function(t){return Kt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Kt.current.useTransition()};Ve.version="18.3.1";cm.exports=Ve;var K=cm.exports;const eh=om(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=K,N0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),D0=Object.prototype.hasOwnProperty,U0=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function xm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)D0.call(e,i)&&!I0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:N0,type:t,key:s,ref:a,props:r,_owner:U0.current}}Cl.Fragment=L0;Cl.jsx=xm;Cl.jsxs=xm;lm.exports=Cl;var c=lm.exports,_m={exports:{}},vn={},ym={exports:{}},Sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,X){var te=D.length;D.push(X);e:for(;0<te;){var ue=te-1>>>1,Se=D[ue];if(0<r(Se,X))D[ue]=X,D[te]=Se,te=ue;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],te=D.pop();if(te!==X){D[0]=te;e:for(var ue=0,Se=D.length,He=Se>>>1;ue<He;){var V=2*(ue+1)-1,re=D[V],xe=V+1,de=D[xe];if(0>r(re,te))xe<Se&&0>r(de,re)?(D[ue]=de,D[xe]=te,ue=xe):(D[ue]=re,D[V]=te,ue=V);else if(xe<Se&&0>r(de,te))D[ue]=de,D[xe]=te,ue=xe;else break e}}return X}function r(D,X){var te=D.sortIndex-X.sortIndex;return te!==0?te:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],p=1,h=null,f=3,m=!1,v=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=D)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function S(D){if(_=!1,y(D),!v)if(n(l)!==null)v=!0,Y(C);else{var X=n(u);X!==null&&J(S,X.startTime-D)}}function C(D,X){v=!1,_&&(_=!1,d(R),R=-1),m=!0;var te=f;try{for(y(X),h=n(l);h!==null&&(!(h.expirationTime>X)||D&&!L());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,f=h.priorityLevel;var Se=ue(h.expirationTime<=X);X=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),y(X)}else i(l);h=n(l)}if(h!==null)var He=!0;else{var V=n(u);V!==null&&J(S,V.startTime-X),He=!1}return He}finally{h=null,f=te,m=!1}}var A=!1,b=null,R=-1,T=5,M=-1;function L(){return!(t.unstable_now()-M<T)}function z(){if(b!==null){var D=t.unstable_now();M=D;var X=!0;try{X=b(!0,D)}finally{X?I():(A=!1,b=null)}}else A=!1}var I;if(typeof x=="function")I=function(){x(z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,W=$.port2;$.port1.onmessage=z,I=function(){W.postMessage(null)}}else I=function(){g(z,0)};function Y(D){b=D,A||(A=!0,I())}function J(D,X){R=g(function(){D(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Y(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var te=f;f=X;try{return D()}finally{f=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var te=f;f=D;try{return X()}finally{f=te}},t.unstable_scheduleCallback=function(D,X,te){var ue=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ue+te:ue):te=ue,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=te+Se,D={id:p++,callback:X,priorityLevel:D,startTime:te,expirationTime:Se,sortIndex:-1},te>ue?(D.sortIndex=te,e(u,D),n(l)===null&&D===n(u)&&(_?(d(R),R=-1):_=!0,J(S,te-ue))):(D.sortIndex=Se,e(l,D),v||m||(v=!0,Y(C))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var X=f;return function(){var te=f;f=X;try{return D.apply(this,arguments)}finally{f=te}}}})(Sm);ym.exports=Sm;var F0=ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0=K,gn=F0;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mm=new Set,da={};function Ur(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(da[t]=e,t=0;t<e.length;t++)Mm.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=Object.prototype.hasOwnProperty,O0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,th={},nh={};function z0(t){return tu.call(nh,t)?!0:tu.call(th,t)?!1:O0.test(t)?nh[t]=!0:(th[t]=!0,!1)}function B0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j0(t,e,n,i){if(e===null||typeof e>"u"||B0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,Hd);zt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,Hd);zt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,Hd);zt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(j0(e,n,r,i)&&(n=null),i||r===null?z0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),nu=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),wm=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),ru=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Tm=Symbol.for("react.offscreen"),ih=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=ih&&t[ih]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Jl;function Zs(t){if(Jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jl=e&&e[1]||""}return`
`+Jl+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function H0(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Qr:return"Portal";case nu:return"Profiler";case Gd:return"StrictMode";case iu:return"Suspense";case ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wm:return(t.displayName||"Context")+".Consumer";case Em:return(t._context.displayName||"Context")+".Provider";case Wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:su(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return su(t(e))}catch{}}return null}function V0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return su(e);case 8:return e===Gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function G0(t){var e=bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=G0(t))}function Am(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=bm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function au(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cm(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function ou(t,e){Cm(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&lu(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lu(t,e,n){(e!=="number"||Jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Qs(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function Rm(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ya,Nm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W0=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){W0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function Lm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function Dm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var X0=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function du(t,e){if(e){if(X0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hu=null;function $d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pu=null,fs=null,hs=null;function lh(t){if(t=Fa(t)){if(typeof pu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Dl(e),pu(t.stateNode,t.type,e))}}function Um(t){fs?hs?hs.push(t):hs=[t]:fs=t}function Im(){if(fs){var t=fs,e=hs;if(hs=fs=null,lh(t),e)for(t=0;t<e.length;t++)lh(e[t])}}function Fm(t,e){return t(e)}function km(){}var nc=!1;function Om(t,e,n){if(nc)return t(e,n);nc=!0;try{return Fm(t,e,n)}finally{nc=!1,(fs!==null||hs!==null)&&(km(),Im())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=Dl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var mu=!1;if(vi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){mu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{mu=!1}function $0(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var ia=!1,el=null,tl=!1,gu=null,q0={onError:function(t){ia=!0,el=t}};function Y0(t,e,n,i,r,s,a,o,l){ia=!1,el=null,$0.apply(q0,arguments)}function K0(t,e,n,i,r,s,a,o,l){if(Y0.apply(this,arguments),ia){if(ia){var u=el;ia=!1,el=null}else throw Error(ae(198));tl||(tl=!0,gu=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ch(t){if(Ir(t)!==t)throw Error(ae(188))}function Z0(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ch(r),t;if(s===i)return ch(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Bm(t){return t=Z0(t),t!==null?jm(t):null}function jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jm(t);if(e!==null)return e;t=t.sibling}return null}var Hm=gn.unstable_scheduleCallback,uh=gn.unstable_cancelCallback,Q0=gn.unstable_shouldYield,J0=gn.unstable_requestPaint,wt=gn.unstable_now,ex=gn.unstable_getCurrentPriorityLevel,qd=gn.unstable_ImmediatePriority,Vm=gn.unstable_UserBlockingPriority,nl=gn.unstable_NormalPriority,tx=gn.unstable_LowPriority,Gm=gn.unstable_IdlePriority,Rl=null,Zn=null;function nx(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:sx,ix=Math.log,rx=Math.LN2;function sx(t){return t>>>=0,t===0?32:31-(ix(t)/rx|0)|0}var Ka=64,Za=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Js(o):(s&=a,s!==0&&(i=Js(s)))}else a=n&~r,a!==0?i=Js(a):s!==0&&(i=Js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function ax(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ox(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=ax(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wm(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function lx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Xm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $m,Kd,qm,Ym,Km,xu=!1,Qa=[],zi=null,Bi=null,ji=null,pa=new Map,ma=new Map,Ui=[],cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fa(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ux(t,e,n,i,r){switch(e){case"focusin":return zi=Bs(zi,t,e,n,i,r),!0;case"dragenter":return Bi=Bs(Bi,t,e,n,i,r),!0;case"mouseover":return ji=Bs(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return pa.set(s,Bs(pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ma.set(s,Bs(ma.get(s)||null,t,e,n,i,r)),!0}return!1}function Zm(t){var e=_r(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=zm(n),e!==null){t.blockedOn=e,Km(t.priority,function(){qm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hu=i,n.target.dispatchEvent(i),hu=null}else return e=Fa(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function fh(t,e,n){Fo(t)&&n.delete(e)}function dx(){xu=!1,zi!==null&&Fo(zi)&&(zi=null),Bi!==null&&Fo(Bi)&&(Bi=null),ji!==null&&Fo(ji)&&(ji=null),pa.forEach(fh),ma.forEach(fh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,xu||(xu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,dx)))}function ga(t){function e(r){return js(r,t)}if(0<Qa.length){js(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&js(zi,t),Bi!==null&&js(Bi,t),ji!==null&&js(ji,t),pa.forEach(e),ma.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)Zm(n),n.blockedOn===null&&Ui.shift()}var ps=Ei.ReactCurrentBatchConfig,rl=!0;function fx(t,e,n,i){var r=it,s=ps.transition;ps.transition=null;try{it=1,Zd(t,e,n,i)}finally{it=r,ps.transition=s}}function hx(t,e,n,i){var r=it,s=ps.transition;ps.transition=null;try{it=4,Zd(t,e,n,i)}finally{it=r,ps.transition=s}}function Zd(t,e,n,i){if(rl){var r=_u(t,e,n,i);if(r===null)hc(t,e,i,sl,n),dh(t,i);else if(ux(r,t,e,n,i))i.stopPropagation();else if(dh(t,i),e&4&&-1<cx.indexOf(t)){for(;r!==null;){var s=Fa(r);if(s!==null&&$m(s),s=_u(t,e,n,i),s===null&&hc(t,e,i,sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hc(t,e,i,null,n)}}var sl=null;function _u(t,e,n,i){if(sl=null,t=$d(i),t=_r(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function Qm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ex()){case qd:return 1;case Vm:return 4;case nl:case tx:return 16;case Gm:return 536870912;default:return 16}default:return 16}}var ki=null,Qd=null,ko=null;function Jm(){if(ko)return ko;var t,e=Qd,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ko=r.slice(t,1<i?1-i:void 0)}function Oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function hh(){return!1}function xn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:hh,this.isPropagationStopped=hh,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=xn(Ds),Ia=yt({},Ds,{view:0,detail:0}),px=xn(Ia),rc,sc,Hs,Pl=yt({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(rc=t.screenX-Hs.screenX,sc=t.screenY-Hs.screenY):sc=rc=0,Hs=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),ph=xn(Pl),mx=yt({},Pl,{dataTransfer:0}),gx=xn(mx),vx=yt({},Ia,{relatedTarget:0}),ac=xn(vx),xx=yt({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=xn(xx),yx=yt({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sx=xn(yx),Mx=yt({},Ds,{data:0}),mh=xn(Mx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tx[t])?!!e[t]:!1}function ef(){return bx}var Ax=yt({},Ia,{key:function(t){if(t.key){var e=Ex[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cx=xn(Ax),Rx=yt({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=xn(Rx),Px=yt({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),Nx=xn(Px),Lx=yt({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=xn(Lx),Ux=yt({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=xn(Ux),Fx=[9,13,27,32],tf=vi&&"CompositionEvent"in window,ra=null;vi&&"documentMode"in document&&(ra=document.documentMode);var kx=vi&&"TextEvent"in window&&!ra,eg=vi&&(!tf||ra&&8<ra&&11>=ra),vh=" ",xh=!1;function tg(t,e){switch(t){case"keyup":return Fx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ng(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Ox(t,e){switch(t){case"compositionend":return ng(e);case"keypress":return e.which!==32?null:(xh=!0,vh);case"textInput":return t=e.data,t===vh&&xh?null:t;default:return null}}function zx(t,e){if(es)return t==="compositionend"||!tf&&tg(t,e)?(t=Jm(),ko=Qd=ki=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eg&&e.locale!=="ko"?null:e.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bx[t.type]:e==="textarea"}function ig(t,e,n,i){Um(i),e=al(e,"onChange"),0<e.length&&(n=new Jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var sa=null,va=null;function jx(t){pg(t,0)}function Nl(t){var e=is(t);if(Am(e))return t}function Hx(t,e){if(t==="change")return e}var rg=!1;if(vi){var oc;if(vi){var lc="oninput"in document;if(!lc){var yh=document.createElement("div");yh.setAttribute("oninput","return;"),lc=typeof yh.oninput=="function"}oc=lc}else oc=!1;rg=oc&&(!document.documentMode||9<document.documentMode)}function Sh(){sa&&(sa.detachEvent("onpropertychange",sg),va=sa=null)}function sg(t){if(t.propertyName==="value"&&Nl(va)){var e=[];ig(e,va,t,$d(t)),Om(jx,e)}}function Vx(t,e,n){t==="focusin"?(Sh(),sa=e,va=n,sa.attachEvent("onpropertychange",sg)):t==="focusout"&&Sh()}function Gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(va)}function Wx(t,e){if(t==="click")return Nl(e)}function Xx(t,e){if(t==="input"||t==="change")return Nl(e)}function $x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:$x;function xa(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tu.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eh(t,e){var n=Mh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function ag(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ag(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function og(){for(var t=window,e=Jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jo(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qx(t){var e=og(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ag(n.ownerDocument.documentElement,n)){if(i!==null&&nf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Eh(n,s);var a=Eh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yx=vi&&"documentMode"in document&&11>=document.documentMode,ts=null,yu=null,aa=null,Su=!1;function wh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||ts==null||ts!==Jo(i)||(i=ts,"selectionStart"in i&&nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&xa(aa,i)||(aa=i,i=al(yu,"onSelect"),0<i.length&&(e=new Jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},cc={},lg={};vi&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Ll(t){if(cc[t])return cc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lg)return cc[t]=e[n];return t}var cg=Ll("animationend"),ug=Ll("animationiteration"),dg=Ll("animationstart"),fg=Ll("transitionend"),hg=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){hg.set(t,e),Ur(e,[t])}for(var uc=0;uc<Th.length;uc++){var dc=Th[uc],Kx=dc.toLowerCase(),Zx=dc[0].toUpperCase()+dc.slice(1);Ji(Kx,"on"+Zx)}Ji(cg,"onAnimationEnd");Ji(ug,"onAnimationIteration");Ji(dg,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(fg,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function bh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,K0(i,e,void 0,t),t.currentTarget=null}function pg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;bh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;bh(r,o,u),s=l}}}if(tl)throw t=gu,tl=!1,gu=null,t}function ht(t,e){var n=e[bu];n===void 0&&(n=e[bu]=new Set);var i=t+"__bubble";n.has(i)||(mg(e,t,2,!1),n.add(i))}function fc(t,e,n){var i=0;e&&(i|=4),mg(n,t,i,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[to]){t[to]=!0,Mm.forEach(function(n){n!=="selectionchange"&&(Qx.has(n)||fc(n,!1,t),fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,fc("selectionchange",!1,e))}}function mg(t,e,n,i){switch(Qm(e)){case 1:var r=fx;break;case 4:r=hx;break;default:r=Zd}n=r.bind(null,e,n,t),r=void 0,!mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=_r(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Om(function(){var u=s,p=$d(n),h=[];e:{var f=hg.get(t);if(f!==void 0){var m=Jd,v=t;switch(t){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":m=Cx;break;case"focusin":v="focus",m=ac;break;case"focusout":v="blur",m=ac;break;case"beforeblur":case"afterblur":m=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Nx;break;case cg:case ug:case dg:m=_x;break;case fg:m=Dx;break;case"scroll":m=px;break;case"wheel":m=Ix;break;case"copy":case"cut":case"paste":m=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=gh}var _=(e&4)!==0,g=!_&&t==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var x=u,y;x!==null;){y=x;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,d!==null&&(S=ha(x,d),S!=null&&_.push(ya(x,S,y)))),g)break;x=x.return}0<_.length&&(f=new m(f,v,null,n,p),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==hu&&(v=n.relatedTarget||n.fromElement)&&(_r(v)||v[xi]))break e;if((m||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?_r(v):null,v!==null&&(g=Ir(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=ph,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=gh,S="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?f:is(m),y=v==null?f:is(v),f=new _(S,x+"leave",m,n,p),f.target=g,f.relatedTarget=y,S=null,_r(p)===u&&(_=new _(d,x+"enter",v,n,p),_.target=y,_.relatedTarget=g,S=_),g=S,m&&v)t:{for(_=m,d=v,x=0,y=_;y;y=kr(y))x++;for(y=0,S=d;S;S=kr(S))y++;for(;0<x-y;)_=kr(_),x--;for(;0<y-x;)d=kr(d),y--;for(;x--;){if(_===d||d!==null&&_===d.alternate)break t;_=kr(_),d=kr(d)}_=null}else _=null;m!==null&&Ah(h,f,m,_,!1),v!==null&&g!==null&&Ah(h,g,v,_,!0)}}e:{if(f=u?is(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Hx;else if(_h(f))if(rg)C=Xx;else{C=Gx;var A=Vx}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Wx);if(C&&(C=C(t,u))){ig(h,C,n,p);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&lu(f,"number",f.value)}switch(A=u?is(u):window,t){case"focusin":(_h(A)||A.contentEditable==="true")&&(ts=A,yu=u,aa=null);break;case"focusout":aa=yu=ts=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,wh(h,n,p);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":wh(h,n,p)}var b;if(tf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else es?tg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(eg&&n.locale!=="ko"&&(es||R!=="onCompositionStart"?R==="onCompositionEnd"&&es&&(b=Jm()):(ki=p,Qd="value"in ki?ki.value:ki.textContent,es=!0)),A=al(u,R),0<A.length&&(R=new mh(R,t,null,n,p),h.push({event:R,listeners:A}),b?R.data=b:(b=ng(n),b!==null&&(R.data=b)))),(b=kx?Ox(t,n):zx(t,n))&&(u=al(u,"onBeforeInput"),0<u.length&&(p=new mh("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=b))}pg(h,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ah(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ha(n,s),l!=null&&a.unshift(ya(n,l,o))):r||(l=ha(n,s),l!=null&&a.push(ya(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Jx=/\r\n?/g,e_=/\u0000|\uFFFD/g;function Ch(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace(e_,"")}function no(t,e,n){if(e=Ch(e),Ch(t)!==e&&n)throw Error(ae(425))}function ol(){}var Mu=null,Eu=null;function wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,t_=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,n_=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(t){return Rh.resolve(null).then(t).catch(i_)}:Tu;function i_(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ga(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Us,Sa="__reactProps$"+Us,xi="__reactContainer$"+Us,bu="__reactEvents$"+Us,r_="__reactListeners$"+Us,s_="__reactHandles$"+Us;function _r(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ph(t);t!==null;){if(n=t[Yn])return n;t=Ph(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[Yn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Dl(t){return t[Sa]||null}var Au=[],rs=-1;function er(t){return{current:t}}function pt(t){0>rs||(t.current=Au[rs],Au[rs]=null,rs--)}function ut(t,e){rs++,Au[rs]=t.current,t.current=e}var Ki={},Wt=er(Ki),nn=er(!1),Ar=Ki;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function ll(){pt(nn),pt(Wt)}function Nh(t,e,n){if(Wt.current!==Ki)throw Error(ae(168));ut(Wt,e),ut(nn,n)}function gg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,V0(t)||"Unknown",r));return yt({},n,i)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Ar=Wt.current,ut(Wt,t),ut(nn,nn.current),!0}function Lh(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=gg(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,pt(nn),pt(Wt),ut(Wt,t)):pt(nn),ut(nn,n)}var li=null,Ul=!1,mc=!1;function vg(t){li===null?li=[t]:li.push(t)}function a_(t){Ul=!0,vg(t)}function tr(){if(!mc&&li!==null){mc=!0;var t=0,e=it;try{var n=li;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Ul=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),Hm(qd,tr),r}finally{it=e,mc=!1}}return null}var ss=[],as=0,ul=null,dl=0,En=[],wn=0,Cr=null,ui=1,di="";function dr(t,e){ss[as++]=dl,ss[as++]=ul,ul=t,dl=e}function xg(t,e,n){En[wn++]=ui,En[wn++]=di,En[wn++]=Cr,Cr=t;var i=ui;t=di;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ui=1<<32-Bn(e)+r|n<<r|i,di=s+t}else ui=1<<s|n<<r|i,di=t}function rf(t){t.return!==null&&(dr(t,1),xg(t,1,0))}function sf(t){for(;t===ul;)ul=ss[--as],ss[as]=null,dl=ss[--as],ss[as]=null;for(;t===Cr;)Cr=En[--wn],En[wn]=null,di=En[--wn],En[wn]=null,ui=En[--wn],En[wn]=null}var mn=null,pn=null,gt=!1,kn=null;function _g(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ru(t){if(gt){var e=pn;if(e){var n=e;if(!Dh(t,e)){if(Cu(t))throw Error(ae(418));e=Hi(n.nextSibling);var i=mn;e&&Dh(t,e)?_g(i,n):(t.flags=t.flags&-4097|2,gt=!1,mn=t)}}else{if(Cu(t))throw Error(ae(418));t.flags=t.flags&-4097|2,gt=!1,mn=t}}}function Uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function io(t){if(t!==mn)return!1;if(!gt)return Uh(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wu(t.type,t.memoizedProps)),e&&(e=pn)){if(Cu(t))throw yg(),Error(ae(418));for(;e;)_g(t,e),e=Hi(e.nextSibling)}if(Uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Hi(t.stateNode.nextSibling):null;return!0}function yg(){for(var t=pn;t;)t=Hi(t.nextSibling)}function Ms(){pn=mn=null,gt=!1}function af(t){kn===null?kn=[t]:kn.push(t)}var o_=Ei.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function ro(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ih(t){var e=t._init;return e(t._payload)}function Sg(t){function e(d,x){if(t){var y=d.deletions;y===null?(d.deletions=[x],d.flags|=16):y.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Xi(d,x),d.index=0,d.sibling=null,d}function s(d,x,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<x?(d.flags|=2,x):y):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,y,S){return x===null||x.tag!==6?(x=Mc(y,d.mode,S),x.return=d,x):(x=r(x,y),x.return=d,x)}function l(d,x,y,S){var C=y.type;return C===Jr?p(d,x,y.props.children,S,y.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Li&&Ih(C)===x.type)?(S=r(x,y.props),S.ref=Vs(d,x,y),S.return=d,S):(S=Wo(y.type,y.key,y.props,null,d.mode,S),S.ref=Vs(d,x,y),S.return=d,S)}function u(d,x,y,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Ec(y,d.mode,S),x.return=d,x):(x=r(x,y.children||[]),x.return=d,x)}function p(d,x,y,S,C){return x===null||x.tag!==7?(x=Tr(y,d.mode,S,C),x.return=d,x):(x=r(x,y),x.return=d,x)}function h(d,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Mc(""+x,d.mode,y),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $a:return y=Wo(x.type,x.key,x.props,null,d.mode,y),y.ref=Vs(d,null,x),y.return=d,y;case Qr:return x=Ec(x,d.mode,y),x.return=d,x;case Li:var S=x._init;return h(d,S(x._payload),y)}if(Qs(x)||Os(x))return x=Tr(x,d.mode,y,null),x.return=d,x;ro(d,x)}return null}function f(d,x,y,S){var C=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:o(d,x,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:return y.key===C?l(d,x,y,S):null;case Qr:return y.key===C?u(d,x,y,S):null;case Li:return C=y._init,f(d,x,C(y._payload),S)}if(Qs(y)||Os(y))return C!==null?null:p(d,x,y,S,null);ro(d,y)}return null}function m(d,x,y,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(y)||null,o(x,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $a:return d=d.get(S.key===null?y:S.key)||null,l(x,d,S,C);case Qr:return d=d.get(S.key===null?y:S.key)||null,u(x,d,S,C);case Li:var A=S._init;return m(d,x,y,A(S._payload),C)}if(Qs(S)||Os(S))return d=d.get(y)||null,p(x,d,S,C,null);ro(x,S)}return null}function v(d,x,y,S){for(var C=null,A=null,b=x,R=x=0,T=null;b!==null&&R<y.length;R++){b.index>R?(T=b,b=null):T=b.sibling;var M=f(d,b,y[R],S);if(M===null){b===null&&(b=T);break}t&&b&&M.alternate===null&&e(d,b),x=s(M,x,R),A===null?C=M:A.sibling=M,A=M,b=T}if(R===y.length)return n(d,b),gt&&dr(d,R),C;if(b===null){for(;R<y.length;R++)b=h(d,y[R],S),b!==null&&(x=s(b,x,R),A===null?C=b:A.sibling=b,A=b);return gt&&dr(d,R),C}for(b=i(d,b);R<y.length;R++)T=m(b,d,R,y[R],S),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?R:T.key),x=s(T,x,R),A===null?C=T:A.sibling=T,A=T);return t&&b.forEach(function(L){return e(d,L)}),gt&&dr(d,R),C}function _(d,x,y,S){var C=Os(y);if(typeof C!="function")throw Error(ae(150));if(y=C.call(y),y==null)throw Error(ae(151));for(var A=C=null,b=x,R=x=0,T=null,M=y.next();b!==null&&!M.done;R++,M=y.next()){b.index>R?(T=b,b=null):T=b.sibling;var L=f(d,b,M.value,S);if(L===null){b===null&&(b=T);break}t&&b&&L.alternate===null&&e(d,b),x=s(L,x,R),A===null?C=L:A.sibling=L,A=L,b=T}if(M.done)return n(d,b),gt&&dr(d,R),C;if(b===null){for(;!M.done;R++,M=y.next())M=h(d,M.value,S),M!==null&&(x=s(M,x,R),A===null?C=M:A.sibling=M,A=M);return gt&&dr(d,R),C}for(b=i(d,b);!M.done;R++,M=y.next())M=m(b,d,R,M.value,S),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?R:M.key),x=s(M,x,R),A===null?C=M:A.sibling=M,A=M);return t&&b.forEach(function(z){return e(d,z)}),gt&&dr(d,R),C}function g(d,x,y,S){if(typeof y=="object"&&y!==null&&y.type===Jr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:e:{for(var C=y.key,A=x;A!==null;){if(A.key===C){if(C=y.type,C===Jr){if(A.tag===7){n(d,A.sibling),x=r(A,y.props.children),x.return=d,d=x;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Li&&Ih(C)===A.type){n(d,A.sibling),x=r(A,y.props),x.ref=Vs(d,A,y),x.return=d,d=x;break e}n(d,A);break}else e(d,A);A=A.sibling}y.type===Jr?(x=Tr(y.props.children,d.mode,S,y.key),x.return=d,d=x):(S=Wo(y.type,y.key,y.props,null,d.mode,S),S.ref=Vs(d,x,y),S.return=d,d=S)}return a(d);case Qr:e:{for(A=y.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(d,x.sibling),x=r(x,y.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Ec(y,d.mode,S),x.return=d,d=x}return a(d);case Li:return A=y._init,g(d,x,A(y._payload),S)}if(Qs(y))return v(d,x,y,S);if(Os(y))return _(d,x,y,S);ro(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,y),x.return=d,d=x):(n(d,x),x=Mc(y,d.mode,S),x.return=d,d=x),a(d)):n(d,x)}return g}var Es=Sg(!0),Mg=Sg(!1),fl=er(null),hl=null,os=null,of=null;function lf(){of=os=hl=null}function cf(t){var e=fl.current;pt(fl),t._currentValue=e}function Pu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){hl=t,of=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(hl===null)throw Error(ae(308));os=t,hl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var yr=null;function uf(t){yr===null?yr=[t]:yr.push(t)}function Eg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,uf(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,uf(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yd(t,n)}}function Fh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=u:o.next=u,p.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,p=u=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){p!==null&&(p=p.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,_=o;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,h,f):v,f==null)break e;h=yt({},h,f);break e;case 2:Di=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(u=p=m,l=h):p=p.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(p===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=a,t.lanes=a,t.memoizedState=h}}function kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var ka={},Qn=er(ka),Ma=er(ka),Ea=er(ka);function Sr(t){if(t===ka)throw Error(ae(174));return t}function ff(t,e){switch(ut(Ea,e),ut(Ma,t),ut(Qn,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uu(e,t)}pt(Qn),ut(Qn,e)}function ws(){pt(Qn),pt(Ma),pt(Ea)}function Tg(t){Sr(Ea.current);var e=Sr(Qn.current),n=uu(e,t.type);e!==n&&(ut(Ma,t),ut(Qn,n))}function hf(t){Ma.current===t&&(pt(Qn),pt(Ma))}var xt=er(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function pf(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var Bo=Ei.ReactCurrentDispatcher,vc=Ei.ReactCurrentBatchConfig,Rr=0,_t=null,Rt=null,Ut=null,gl=!1,oa=!1,wa=0,l_=0;function Bt(){throw Error(ae(321))}function mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function gf(t,e,n,i,r,s){if(Rr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?f_:h_,t=n(i,r),oa){s=0;do{if(oa=!1,wa=0,25<=s)throw Error(ae(301));s+=1,Ut=Rt=null,e.updateQueue=null,Bo.current=p_,t=n(i,r)}while(oa)}if(Bo.current=vl,e=Rt!==null&&Rt.next!==null,Rr=0,Ut=Rt=_t=null,gl=!1,e)throw Error(ae(300));return t}function vf(){var t=wa!==0;return wa=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Rn(){if(Rt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ut===null?_t.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=t;else{if(t===null)throw Error(ae(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Ta(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var p=u.lane;if((Rr&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,_t.lanes|=p,Pr|=p}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Gn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _c(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bg(){}function Ag(t,e){var n=_t,i=Rn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,xf(Pg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ba(9,Rg.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ae(349));Rr&30||Cg(n,e,r)}return r}function Cg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rg(t,e,n,i){e.value=n,e.getSnapshot=i,Ng(e)&&Lg(t)}function Pg(t,e,n){return n(function(){Ng(e)&&Lg(t)})}function Ng(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function Lg(t){var e=_i(t,1);e!==null&&jn(e,t,1,-1)}function Oh(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},e.queue=t,t=t.dispatch=d_.bind(null,_t,t),[e.memoizedState,t]}function ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Dg(){return Rn().memoizedState}function jo(t,e,n,i){var r=Xn();_t.flags|=t,r.memoizedState=ba(1|e,n,void 0,i===void 0?null:i)}function Il(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var a=Rt.memoizedState;if(s=a.destroy,i!==null&&mf(i,a.deps)){r.memoizedState=ba(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ba(1|e,n,s,i)}function zh(t,e){return jo(8390656,8,t,e)}function xf(t,e){return Il(2048,8,t,e)}function Ug(t,e){return Il(4,2,t,e)}function Ig(t,e){return Il(4,4,t,e)}function Fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kg(t,e,n){return n=n!=null?n.concat([t]):null,Il(4,4,Fg.bind(null,e,t),n)}function _f(){}function Og(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function zg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Bg(t,e,n){return Rr&21?(Gn(n,e)||(n=Wm(),_t.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function c_(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=vc.transition;vc.transition={};try{t(!1),e()}finally{it=n,vc.transition=i}}function jg(){return Rn().memoizedState}function u_(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Hg(t))Vg(e,n);else if(n=Eg(t,e,n,i),n!==null){var r=Yt();jn(n,t,i,r),Gg(n,e,i)}}function d_(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hg(t))Vg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Gn(o,a)){var l=e.interleaved;l===null?(r.next=r,uf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Eg(t,e,r,i),n!==null&&(r=Yt(),jn(n,t,i,r),Gg(n,e,i))}}function Hg(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function Vg(t,e){oa=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yd(t,n)}}var vl={readContext:Cn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},f_={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jo(4194308,4,Fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return jo(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=u_.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Oh,useDebugValue:_f,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Oh(!1),e=t[0];return t=c_.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=Xn();if(gt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Ft===null)throw Error(ae(349));Rr&30||Cg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zh(Pg.bind(null,i,s,t),[t]),i.flags|=2048,ba(9,Rg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Ft.identifierPrefix;if(gt){var n=di,i=ui;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=l_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},h_={readContext:Cn,useCallback:Og,useContext:Cn,useEffect:xf,useImperativeHandle:kg,useInsertionEffect:Ug,useLayoutEffect:Ig,useMemo:zg,useReducer:xc,useRef:Dg,useState:function(){return xc(Ta)},useDebugValue:_f,useDeferredValue:function(t){var e=Rn();return Bg(e,Rt.memoizedState,t)},useTransition:function(){var t=xc(Ta)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Ag,useId:jg,unstable_isNewReconciler:!1},p_={readContext:Cn,useCallback:Og,useContext:Cn,useEffect:xf,useImperativeHandle:kg,useInsertionEffect:Ug,useLayoutEffect:Ig,useMemo:zg,useReducer:_c,useRef:Dg,useState:function(){return _c(Ta)},useDebugValue:_f,useDeferredValue:function(t){var e=Rn();return Rt===null?e.memoizedState=t:Bg(e,Rt.memoizedState,t)},useTransition:function(){var t=_c(Ta)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Ag,useId:jg,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Wi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(jn(e,t,r,i),zo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Wi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(jn(e,t,r,i),zo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Wi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(jn(e,t,i,n),zo(e,t,i))}};function Bh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!xa(n,i)||!xa(r,s):!0}function Wg(t,e,n){var i=!1,r=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=rn(e)?Ar:Wt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function jh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function Lu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=rn(e)?Ar:Wt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fl.enqueueReplaceState(r,r.state,null),pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",i=e;do n+=H0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Du(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var m_=typeof WeakMap=="function"?WeakMap:Map;function Xg(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,Vu=i),Du(t,e)},n}function $g(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Du(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Du(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Hh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new m_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=R_.bind(null,t,e,n),e.then(t,t))}function Vh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var g_=Ei.ReactCurrentOwner,tn=!1;function qt(t,e,n,i){e.child=t===null?Mg(e,null,n,i):Es(e,t.child,n,i)}function Wh(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=gf(t,e,n,i,s,r),n=vf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(gt&&n&&rf(e),e.flags|=1,qt(t,e,i,r),e.child)}function Xh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qg(t,e,s,i,r)):(t=Wo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(a,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function qg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xa(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,yi(t,e,r)}return Uu(t,e,n,i,r)}function Yg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(cs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(cs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(cs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(cs,hn),hn|=i;return qt(t,e,r,n),e.child}function Kg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uu(t,e,n,i,r){var s=rn(n)?Ar:Wt.current;return s=Ss(e,s),ms(e,r),n=gf(t,e,n,i,s,r),i=vf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(gt&&i&&rf(e),e.flags|=1,qt(t,e,n,r),e.child)}function $h(t,e,n,i,r){if(rn(n)){var s=!0;cl(e)}else s=!1;if(ms(e,r),e.stateNode===null)Ho(t,e),Wg(e,n,i),Lu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=rn(n)?Ar:Wt.current,u=Ss(e,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&jh(e,a,i,u),Di=!1;var f=e.memoizedState;a.state=f,pl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||nn.current||Di?(typeof p=="function"&&(Nu(e,n,p,i),l=e.memoizedState),(o=Di||Bh(e,n,o,i,f,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,wg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:In(e.type,o),a.props=u,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?Ar:Wt.current,l=Ss(e,l));var m=n.getDerivedStateFromProps;(p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&jh(e,a,i,l),Di=!1,f=e.memoizedState,a.state=f,pl(e,i,a,r);var v=e.memoizedState;o!==h||f!==v||nn.current||Di?(typeof m=="function"&&(Nu(e,n,m,i),v=e.memoizedState),(u=Di||Bh(e,n,u,i,f,v,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Iu(t,e,n,i,s,r)}function Iu(t,e,n,i,r,s){Kg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Lh(e,n,!1),yi(t,e,s);i=e.stateNode,g_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,o,s)):qt(t,e,o,s),e.memoizedState=i.state,r&&Lh(e,n,!0),e.child}function Zg(t){var e=t.stateNode;e.pendingContext?Nh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nh(t,e.context,!1),ff(t,e.containerInfo)}function qh(t,e,n,i,r){return Ms(),af(r),e.flags|=256,qt(t,e,n,i),e.child}var Fu={dehydrated:null,treeContext:null,retryLane:0};function ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qg(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(xt,r&1),t===null)return Ru(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=zl(a,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ku(n),e.memoizedState=Fu,t):yf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return v_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Xi(o,s):(s=Tr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Fu,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yf(t,e){return e=zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function so(t,e,n,i){return i!==null&&af(i),Es(e,t.child,null,n),t=yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function v_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=yc(Error(ae(422))),so(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zl({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Es(e,t.child,null,a),e.child.memoizedState=ku(a),e.memoizedState=Fu,s);if(!(e.mode&1))return so(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=yc(s,i,void 0),so(t,e,a,i)}if(o=(a&t.childLanes)!==0,tn||o){if(i=Ft,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),jn(i,t,r,-1))}return bf(),i=yc(Error(ae(421))),so(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=P_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Hi(r.nextSibling),mn=e,gt=!0,kn=null,t!==null&&(En[wn++]=ui,En[wn++]=di,En[wn++]=Cr,ui=t.id,di=t.overflow,Cr=e),e=yf(e,i.children),e.flags|=4096,e)}function Yh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pu(t.return,e,n)}function Sc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Jg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,n,e);else if(t.tag===19)Yh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Sc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function x_(t,e,n){switch(e.tag){case 3:Zg(e),Ms();break;case 5:Tg(e);break;case 1:rn(e.type)&&cl(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?Qg(t,e,n):(ut(xt,xt.current&1),t=yi(t,e,n),t!==null?t.sibling:null);ut(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Jg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Yg(t,e,n)}return yi(t,e,n)}var ev,Ou,tv,nv;ev=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ou=function(){};tv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Sr(Qn.current);var s=null;switch(n){case"input":r=au(t,r),i=au(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=cu(t,r),i=cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ol)}du(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(da.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ht("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};nv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function __(t,e,n){var i=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return rn(e.type)&&ll(),jt(e),null;case 3:return i=e.stateNode,ws(),pt(nn),pt(Wt),pf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Xu(kn),kn=null))),Ou(t,e),jt(e),null;case 5:hf(e);var r=Sr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)tv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return jt(e),null}if(t=Sr(Qn.current),io(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<ea.length;r++)ht(ea[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":rh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":ah(i,s),ht("invalid",i)}du(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",""+o]):da.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":qa(i),sh(i,s,!0);break;case"textarea":qa(i),oh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Yn]=e,t[Sa]=i,ev(t,e,!1,!1),e.stateNode=t;e:{switch(a=fu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<ea.length;r++)ht(ea[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":rh(t,i),r=au(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":ah(t,i),r=cu(t,i),ht("invalid",t);break;default:r=i}du(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Dm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fa(t,l):typeof l=="number"&&fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&Vd(t,s,l,a))}switch(n){case"input":qa(t),sh(t,i,!1);break;case"textarea":qa(t),oh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)nv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Sr(Ea.current),Sr(Qn.current),io(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:no(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return jt(e),null;case 13:if(pt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&pn!==null&&e.mode&1&&!(e.flags&128))yg(),Ms(),e.flags|=98560,s=!1;else if(s=io(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Yn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else kn!==null&&(Xu(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Pt===0&&(Pt=3):bf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return ws(),Ou(t,e),t===null&&_a(e.stateNode.containerInfo),jt(e),null;case 10:return cf(e.type._context),jt(e),null;case 17:return rn(e.type)&&ll(),jt(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Gs(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ml(t),a!==null){for(e.flags|=128,Gs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>bs&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ml(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return jt(e),null}else 2*wt()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=xt.current,ut(xt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Tf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function y_(t,e){switch(sf(e),e.tag){case 1:return rn(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),pt(nn),pt(Wt),pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hf(e),null;case 13:if(pt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(xt),null;case 4:return ws(),null;case 10:return cf(e.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var ao=!1,Gt=!1,S_=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function zu(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Kh=!1;function M_(t,e){if(Mu=rl,t=og(),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,p=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++p===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:t,selectionRange:n},rl=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,g=v.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:In(e.type,_),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return v=Kh,Kh=!1,v}function la(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zu(e,n,s)}r=r.next}while(r!==i)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iv(t){var e=t.alternate;e!==null&&(t.alternate=null,iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Sa],delete e[bu],delete e[r_],delete e[s_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rv(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(i!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function Hu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hu(t,e,n),t=t.sibling;t!==null;)Hu(t,e,n),t=t.sibling}var kt=null,Fn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)sv(t,e,n),n=n.sibling}function sv(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:Gt||ls(n,e);case 6:var i=kt,r=Fn;kt=null,Ti(t,e,n),kt=i,Fn=r,kt!==null&&(Fn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Fn?(t=kt,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),ga(t)):pc(kt,n.stateNode));break;case 4:i=kt,r=Fn,kt=n.stateNode.containerInfo,Fn=!0,Ti(t,e,n),kt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&zu(n,e,a),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Gt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ti(t,e,n),Gt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function Qh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new S_),e.forEach(function(i){var r=N_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:kt=o.stateNode,Fn=!1;break e;case 3:kt=o.stateNode.containerInfo,Fn=!0;break e;case 4:kt=o.stateNode.containerInfo,Fn=!0;break e}o=o.return}if(kt===null)throw Error(ae(160));sv(s,a,r),kt=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)av(e,t),e=e.sibling}function av(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Wn(t),i&4){try{la(3,t,t.return),kl(3,t)}catch(_){Mt(t,t.return,_)}try{la(5,t,t.return)}catch(_){Mt(t,t.return,_)}}break;case 1:Nn(e,t),Wn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(Nn(e,t),Wn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{fa(r,"")}catch(_){Mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Cm(r,s),fu(o,a);var u=fu(o,s);for(a=0;a<l.length;a+=2){var p=l[a],h=l[a+1];p==="style"?Dm(r,h):p==="dangerouslySetInnerHTML"?Nm(r,h):p==="children"?fa(r,h):Vd(r,p,h,u)}switch(o){case"input":ou(r,s);break;case"textarea":Rm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ds(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(_){Mt(t,t.return,_)}}break;case 6:if(Nn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Mt(t,t.return,_)}}break;case 3:if(Nn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(_){Mt(t,t.return,_)}break;case 4:Nn(e,t),Wn(t);break;case 13:Nn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ef=wt())),i&4&&Qh(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||p,Nn(e,t),Gt=u):Nn(e,t),Wn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(_e=t,p=t.child;p!==null;){for(h=_e=p;_e!==null;){switch(f=_e,m=f.child,f.tag){case 0:case 11:case 14:case 15:la(4,f,f.return);break;case 1:ls(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Mt(i,n,_)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){ep(h);continue}}m!==null?(m.return=f,_e=m):ep(h)}p=p.sibling}e:for(p=null,h=t;;){if(h.tag===5){if(p===null){p=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Lm("display",a))}catch(_){Mt(t,t.return,_)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Mt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,t),Wn(t),i&4&&Qh(t);break;case 21:break;default:Nn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rv(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fa(r,""),i.flags&=-33);var s=Zh(t);Hu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Zh(t);ju(t,o,a);break;default:throw Error(ae(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E_(t,e,n){_e=t,ov(t)}function ov(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ao;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Gt;o=ao;var u=Gt;if(ao=a,(Gt=l)&&!u)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?tp(r):l!==null?(l.return=a,_e=l):tp(r);for(;s!==null;)_e=s,ov(s),s=s.sibling;_e=r,ao=o,Gt=u}Jh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Jh(t)}}function Jh(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&ga(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Gt||e.flags&512&&Bu(e)}catch(f){Mt(e,e.return,f)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function ep(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function tp(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Bu(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{Bu(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var w_=Math.ceil,xl=Ei.ReactCurrentDispatcher,Sf=Ei.ReactCurrentOwner,An=Ei.ReactCurrentBatchConfig,Ze=0,Ft=null,Ct=null,Ot=0,hn=0,cs=er(0),Pt=0,Aa=null,Pr=0,Ol=0,Mf=0,ca=null,en=null,Ef=0,bs=1/0,oi=null,_l=!1,Vu=null,Gi=null,oo=!1,Oi=null,yl=0,ua=0,Gu=null,Vo=-1,Go=0;function Yt(){return Ze&6?wt():Vo!==-1?Vo:Vo=wt()}function Wi(t){return t.mode&1?Ze&2&&Ot!==0?Ot&-Ot:o_.transition!==null?(Go===0&&(Go=Wm()),Go):(t=it,t!==0||(t=window.event,t=t===void 0?16:Qm(t.type)),t):1}function jn(t,e,n,i){if(50<ua)throw ua=0,Gu=null,Error(ae(185));Ua(t,n,i),(!(Ze&2)||t!==Ft)&&(t===Ft&&(!(Ze&2)&&(Ol|=n),Pt===4&&Ii(t,Ot)),sn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(bs=wt()+500,Ul&&tr()))}function sn(t,e){var n=t.callbackNode;ox(t,e);var i=il(t,t===Ft?Ot:0);if(i===0)n!==null&&uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&uh(n),e===1)t.tag===0?a_(np.bind(null,t)):vg(np.bind(null,t)),n_(function(){!(Ze&6)&&tr()}),n=null;else{switch(Xm(i)){case 1:n=qd;break;case 4:n=Vm;break;case 16:n=nl;break;case 536870912:n=Gm;break;default:n=nl}n=mv(n,lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lv(t,e){if(Vo=-1,Go=0,Ze&6)throw Error(ae(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=il(t,t===Ft?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sl(t,i);else{e=i;var r=Ze;Ze|=2;var s=uv();(Ft!==t||Ot!==e)&&(oi=null,bs=wt()+500,wr(t,e));do try{A_();break}catch(o){cv(t,o)}while(!0);lf(),xl.current=s,Ze=r,Ct!==null?e=0:(Ft=null,Ot=0,e=Pt)}if(e!==0){if(e===2&&(r=vu(t),r!==0&&(i=r,e=Wu(t,r))),e===1)throw n=Aa,wr(t,0),Ii(t,i),sn(t,wt()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!T_(r)&&(e=Sl(t,i),e===2&&(s=vu(t),s!==0&&(i=s,e=Wu(t,s))),e===1))throw n=Aa,wr(t,0),Ii(t,i),sn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:fr(t,en,oi);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=Ef+500-wt(),10<e)){if(il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tu(fr.bind(null,t,en,oi),e);break}fr(t,en,oi);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*w_(i/1960))-i,10<i){t.timeoutHandle=Tu(fr.bind(null,t,en,oi),i);break}fr(t,en,oi);break;case 5:fr(t,en,oi);break;default:throw Error(ae(329))}}}return sn(t,wt()),t.callbackNode===n?lv.bind(null,t):null}function Wu(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=en,en=n,e!==null&&Xu(e)),t}function Xu(t){en===null?en=t:en.push.apply(en,t)}function T_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~Mf,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function np(t){if(Ze&6)throw Error(ae(327));gs();var e=il(t,0);if(!(e&1))return sn(t,wt()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var i=vu(t);i!==0&&(e=i,n=Wu(t,i))}if(n===1)throw n=Aa,wr(t,0),Ii(t,e),sn(t,wt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,en,oi),sn(t,wt()),null}function wf(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(bs=wt()+500,Ul&&tr())}}function Nr(t){Oi!==null&&Oi.tag===0&&!(Ze&6)&&gs();var e=Ze;Ze|=1;var n=An.transition,i=it;try{if(An.transition=null,it=1,t)return t()}finally{it=i,An.transition=n,Ze=e,!(Ze&6)&&tr()}}function Tf(){hn=cs.current,pt(cs)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,t_(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(sf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ll();break;case 3:ws(),pt(nn),pt(Wt),pf();break;case 5:hf(i);break;case 4:ws();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:cf(i.type._context);break;case 22:case 23:Tf()}n=n.return}if(Ft=t,Ct=t=Xi(t.current,null),Ot=hn=e,Pt=0,Aa=null,Mf=Ol=Pr=0,en=ca=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}yr=null}return t}function cv(t,e){do{var n=Ct;try{if(lf(),Bo.current=vl,gl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(Rr=0,Ut=Rt=_t=null,oa=!1,wa=0,Sf.current=null,n===null||n.return===null){Pt=1,Aa=e,Ct=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ot,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=o,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var m=Vh(a);if(m!==null){m.flags&=-257,Gh(m,a,o,s,e),m.mode&1&&Hh(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Hh(s,u,e),bf();break e}l=Error(ae(426))}}else if(gt&&o.mode&1){var g=Vh(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Gh(g,a,o,s,e),af(Ts(l,o));break e}}s=l=Ts(l,o),Pt!==4&&(Pt=2),ca===null?ca=[s]:ca.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Xg(s,l,e);Fh(s,d);break e;case 1:o=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Gi===null||!Gi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=$g(s,o,e);Fh(s,S);break e}}s=s.return}while(s!==null)}fv(n)}catch(C){e=C,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function uv(){var t=xl.current;return xl.current=vl,t===null?vl:t}function bf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ft===null||!(Pr&268435455)&&!(Ol&268435455)||Ii(Ft,Ot)}function Sl(t,e){var n=Ze;Ze|=2;var i=uv();(Ft!==t||Ot!==e)&&(oi=null,wr(t,e));do try{b_();break}catch(r){cv(t,r)}while(!0);if(lf(),Ze=n,xl.current=i,Ct!==null)throw Error(ae(261));return Ft=null,Ot=0,Pt}function b_(){for(;Ct!==null;)dv(Ct)}function A_(){for(;Ct!==null&&!Q0();)dv(Ct)}function dv(t){var e=pv(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?fv(t):Ct=e,Sf.current=null}function fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=y_(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=__(n,e,hn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function fr(t,e,n){var i=it,r=An.transition;try{An.transition=null,it=1,C_(t,e,n,i)}finally{An.transition=r,it=i}return null}function C_(t,e,n,i){do gs();while(Oi!==null);if(Ze&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lx(t,s),t===Ft&&(Ct=Ft=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,mv(nl,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var a=it;it=1;var o=Ze;Ze|=4,Sf.current=null,M_(t,n),av(n,t),qx(Eu),rl=!!Mu,Eu=Mu=null,t.current=n,E_(n),J0(),Ze=o,it=a,An.transition=s}else t.current=n;if(oo&&(oo=!1,Oi=t,yl=r),s=t.pendingLanes,s===0&&(Gi=null),nx(n.stateNode),sn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=Vu,Vu=null,t;return yl&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===Gu?ua++:(ua=0,Gu=t):ua=0,tr(),null}function gs(){if(Oi!==null){var t=Xm(yl),e=An.transition,n=it;try{if(An.transition=null,it=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,yl=0,Ze&6)throw Error(ae(331));var r=Ze;for(Ze|=4,_e=t.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(_e=u;_e!==null;){var p=_e;switch(p.tag){case 0:case 11:case 15:la(8,p,s)}var h=p.child;if(h!==null)h.return=p,_e=h;else for(;_e!==null;){p=_e;var f=p.sibling,m=p.return;if(iv(p),p===u){_e=null;break}if(f!==null){f.return=m,_e=f;break}_e=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var x=t.current;for(_e=x;_e!==null;){a=_e;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,_e=y;else e:for(a=x;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:kl(9,o)}}catch(C){Mt(o,o.return,C)}if(o===a){_e=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,_e=S;break e}_e=o.return}}if(Ze=r,tr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Rl,t)}catch{}i=!0}return i}finally{it=n,An.transition=e}}return!1}function ip(t,e,n){e=Ts(n,e),e=Xg(t,e,1),t=Vi(t,e,1),e=Yt(),t!==null&&(Ua(t,1,e),sn(t,e))}function Mt(t,e,n){if(t.tag===3)ip(t,t,n);else for(;e!==null;){if(e.tag===3){ip(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Ts(n,t),t=$g(e,t,1),e=Vi(e,t,1),t=Yt(),e!==null&&(Ua(e,1,t),sn(e,t));break}}e=e.return}}function R_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Ot&n)===n&&(Pt===4||Pt===3&&(Ot&130023424)===Ot&&500>wt()-Ef?wr(t,0):Mf|=n),sn(t,e)}function hv(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=Yt();t=_i(t,e),t!==null&&(Ua(t,e,n),sn(t,n))}function P_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hv(t,n)}function N_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),hv(t,n)}var pv;pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,x_(t,e,n);tn=!!(t.flags&131072)}else tn=!1,gt&&e.flags&1048576&&xg(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ho(t,e),t=e.pendingProps;var r=Ss(e,Wt.current);ms(e,n),r=gf(null,e,i,t,r,n);var s=vf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,df(e),r.updater=Fl,e.stateNode=r,r._reactInternals=e,Lu(e,i,t,n),e=Iu(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&rf(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ho(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=D_(i),t=In(i,t),r){case 0:e=Uu(null,e,i,t,n);break e;case 1:e=$h(null,e,i,t,n);break e;case 11:e=Wh(null,e,i,t,n);break e;case 14:e=Xh(null,e,i,In(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Uu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),$h(t,e,i,r,n);case 3:e:{if(Zg(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,wg(t,e),pl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ts(Error(ae(423)),e),e=qh(t,e,i,n,r);break e}else if(i!==r){r=Ts(Error(ae(424)),e),e=qh(t,e,i,n,r);break e}else for(pn=Hi(e.stateNode.containerInfo.firstChild),mn=e,gt=!0,kn=null,n=Mg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===r){e=yi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return Tg(e),t===null&&Ru(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,wu(i,r)?a=null:s!==null&&wu(i,s)&&(e.flags|=32),Kg(t,e),qt(t,e,a,n),e.child;case 6:return t===null&&Ru(e),null;case 13:return Qg(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Es(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Wh(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(fl,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!nn.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Pu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=Cn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),Xh(t,e,i,r,n);case 15:return qg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ho(t,e),e.tag=1,rn(i)?(t=!0,cl(e)):t=!1,ms(e,n),Wg(e,i,r),Lu(e,i,r,n),Iu(null,e,i,!0,t,n);case 19:return Jg(t,e,n);case 22:return Yg(t,e,n)}throw Error(ae(156,e.tag))};function mv(t,e){return Hm(t,e)}function L_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new L_(t,e,n,i)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function D_(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wd)return 11;if(t===Xd)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Af(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Jr:return Tr(n.children,r,s,e);case Gd:a=8,r|=8;break;case nu:return t=bn(12,n,e,r|2),t.elementType=nu,t.lanes=s,t;case iu:return t=bn(13,n,e,r),t.elementType=iu,t.lanes=s,t;case ru:return t=bn(19,n,e,r),t.elementType=ru,t.lanes=s,t;case Tm:return zl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Em:a=10;break e;case wm:a=9;break e;case Wd:a=11;break e;case Xd:a=14;break e;case Li:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function zl(t,e,n,i){return t=bn(22,t,i,e),t.elementType=Tm,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function U_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,i,r,s,a,o,l){return t=new U_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(s),t}function I_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function gv(t){if(!t)return Ki;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(rn(n))return gg(t,n,e)}return e}function vv(t,e,n,i,r,s,a,o,l){return t=Cf(n,i,!0,t,r,s,a,o,l),t.context=gv(null),n=t.current,i=Yt(),r=Wi(n),s=mi(i,r),s.callback=e??null,Vi(n,s,r),t.current.lanes=r,Ua(t,r,i),sn(t,i),t}function Bl(t,e,n,i){var r=e.current,s=Yt(),a=Wi(r);return n=gv(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,a),t!==null&&(jn(t,r,a,s),zo(t,r,a)),a}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rf(t,e){rp(t,e),(t=t.alternate)&&rp(t,e)}function F_(){return null}var xv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pf(t){this._internalRoot=t}jl.prototype.render=Pf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Bl(t,e,null,null)};jl.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Bl(null,t,null,null)}),e[xi]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ym();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&Zm(t)}};function Nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sp(){}function k_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ml(a);s.call(u)}}var a=vv(e,i,t,0,null,!1,!1,"",sp);return t._reactRootContainer=a,t[xi]=a.current,_a(t.nodeType===8?t.parentNode:t),Nr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ml(l);o.call(u)}}var l=Cf(t,0,!1,null,null,!1,!1,"",sp);return t._reactRootContainer=l,t[xi]=l.current,_a(t.nodeType===8?t.parentNode:t),Nr(function(){Bl(e,l,n,i)}),l}function Vl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ml(a);o.call(l)}}Bl(e,a,t,r)}else a=k_(n,e,t,r,i);return Ml(a)}$m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(Yd(e,n|1),sn(e,wt()),!(Ze&6)&&(bs=wt()+500,tr()))}break;case 13:Nr(function(){var i=_i(t,1);if(i!==null){var r=Yt();jn(i,t,1,r)}}),Rf(t,1)}};Kd=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Yt();jn(e,t,134217728,n)}Rf(t,134217728)}};qm=function(t){if(t.tag===13){var e=Wi(t),n=_i(t,e);if(n!==null){var i=Yt();jn(n,t,e,i)}Rf(t,e)}};Ym=function(){return it};Km=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};pu=function(t,e,n){switch(e){case"input":if(ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Dl(i);if(!r)throw Error(ae(90));Am(i),ou(i,r)}}}break;case"textarea":Rm(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};Fm=wf;km=Nr;var O_={usingClientEntryPoint:!1,Events:[Fa,is,Dl,Um,Im,wf]},Ws={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z_={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||F_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Rl=lo.inject(z_),Zn=lo}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(e))throw Error(ae(200));return I_(t,e,null,n)};vn.createRoot=function(t,e){if(!Nf(t))throw Error(ae(299));var n=!1,i="",r=xv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,_a(t.nodeType===8?t.parentNode:t),new Pf(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Bm(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Nr(t)};vn.hydrate=function(t,e,n){if(!Hl(e))throw Error(ae(200));return Vl(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Nf(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=xv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=vv(e,null,t,1,n??null,r,!1,s,a),t[xi]=e.current,_a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new jl(e)};vn.render=function(t,e,n){if(!Hl(e))throw Error(ae(200));return Vl(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(ae(40));return t._reactRootContainer?(Nr(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};vn.unstable_batchedUpdates=wf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hl(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Vl(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function _v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v)}catch(t){console.error(t)}}_v(),_m.exports=vn;var B_=_m.exports,yv,ap=B_;yv=ap.createRoot,ap.hydrateRoot;const Sv=K.createContext(void 0),nr=()=>{const t=K.useContext(Sv);if(!t)throw new Error("usePhotoBooth must be used within a PhotoBoothProvider");return t},j_=({children:t})=>{const[e,n]=K.useState("welcome"),[i,r]=K.useState([]),[s,a]=K.useState({name:"",email:"",copies:2,ghibliGenerations:0,packageType:"basic"}),[o,l]=K.useState(!1),[u,p]=K.useState(0),[h,f]=K.useState(!1),[m,v]=K.useState(!1),[_,g]=K.useState(null),[d,x]=K.useState({ghibliConversionLimit:2,ghibliConversionsUsed:0}),y=4,S=M=>{i.length<y&&r(L=>[...L,M])},C=M=>{r(L=>L.filter((z,I)=>I!==M))},A=(M,L)=>{r(z=>{const I=[...z];for(;I.length<=M;)I.push({dataUrl:"",filter:"normal",frame:null});return I[M]=L,I})},b=M=>{r([...M])},R=(M,L)=>{r(z=>{const I=[...z];for(;I.length<=M;)I.push({dataUrl:"",filter:"normal",frame:null});return I[M]=L,I})},T=()=>{r([]),l(!1),p(0),g(null),a({name:"",email:"",copies:2,ghibliGenerations:0,packageType:"basic"}),x(M=>({...M,ghibliConversionsUsed:0})),console.log("Photos and session data cleared for new session")};return c.jsx(Sv.Provider,{value:{stage:e,setStage:n,photos:i,addPhoto:S,removePhoto:C,resetPhotos:T,updatePhoto:A,userInfo:s,setUserInfo:a,sessionPaid:o,setSessionPaid:l,selectedPhotoIndex:u,setSelectedPhotoIndex:p,maxPhotos:y,isLocked:h,setIsLocked:f,kioskMode:m,setKioskMode:v,photoStripBlob:_,setPhotoStripBlob:g,settings:d,setSettings:x,swapPhoto:R,updateAllPhotos:b},children:t})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Fe=(t,e)=>{const n=K.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...u},p)=>K.createElement("svg",{ref:p,...H_,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${V_(t)}`,o].join(" "),...u},[...e.map(([h,f])=>K.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Fe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=Fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=Fe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Fe("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Fe("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=Fe("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Fe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=Fe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Fe("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=Fe("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Fe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Fe("FlipHorizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Fe("FlipVertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Fe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Fe("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Fe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=Fe("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Fe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Fe("MonitorOff",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=Fe("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=Fe("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Fe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=Fe("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Fe("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Fe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Fe("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Fe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Fe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Fe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Fe("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=Fe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=Fe("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Fe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=Fe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=Fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=Fe("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=Fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=Fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=Fe("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Tv={exports:{}};(function(t,e){(function(i,r){t.exports=r(K)})(p0,function(n){return function(i){var r={};function s(a){if(r[a])return r[a].exports;var o=r[a]={i:a,l:!1,exports:{}};return i[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=i,s.c=r,s.d=function(a,o,l){s.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:l})},s.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,o){if(o&1&&(a=s(a)),o&8||o&4&&typeof a=="object"&&a&&a.__esModule)return a;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),o&2&&typeof a!="string")for(var u in a)s.d(l,u,(function(p){return a[p]}).bind(null,u));return l},s.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return s.d(o,"a",o),o},s.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},s.p="",s(s.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(i,r,s){s.r(r);var a=s("react"),o=function(){var f=function(m,v){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,g){_.__proto__=g}||function(_,g){for(var d in g)g.hasOwnProperty(d)&&(_[d]=g[d])},f(m,v)};return function(m,v){f(m,v);function _(){this.constructor=m}m.prototype=v===null?Object.create(v):(_.prototype=v.prototype,new _)}}(),l=function(){return l=Object.assign||function(f){for(var m,v=1,_=arguments.length;v<_;v++){m=arguments[v];for(var g in m)Object.prototype.hasOwnProperty.call(m,g)&&(f[g]=m[g])}return f},l.apply(this,arguments)},u=function(f,m){var v={};for(var _ in f)Object.prototype.hasOwnProperty.call(f,_)&&m.indexOf(_)<0&&(v[_]=f[_]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,_=Object.getOwnPropertySymbols(f);g<_.length;g++)m.indexOf(_[g])<0&&Object.prototype.propertyIsEnumerable.call(f,_[g])&&(v[_[g]]=f[_[g]]);return v};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(m){var v=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return v?new Promise(function(_,g){v.call(navigator,m,_,g)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function p(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var h=function(f){o(m,f);function m(v){var _=f.call(this,v)||this;return _.canvas=null,_.ctx=null,_.requestUserMediaId=0,_.unmounted=!1,_.state={hasUserMedia:!1},_}return m.prototype.componentDidMount=function(){var v=this,_=v.state,g=v.props;if(this.unmounted=!1,!p()){g.onUserMediaError("getUserMedia not supported");return}_.hasUserMedia||this.requestUserMedia(),g.children&&typeof g.children!="function"&&console.warn("children must be a function")},m.prototype.componentDidUpdate=function(v){var _=this.props;if(!p()){_.onUserMediaError("getUserMedia not supported");return}var g=JSON.stringify(v.audioConstraints)!==JSON.stringify(_.audioConstraints),d=JSON.stringify(v.videoConstraints)!==JSON.stringify(_.videoConstraints),x=v.minScreenshotWidth!==_.minScreenshotWidth,y=v.minScreenshotHeight!==_.minScreenshotHeight;(d||x||y)&&(this.canvas=null,this.ctx=null),(g||d)&&(this.stopAndCleanup(),this.requestUserMedia())},m.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},m.stopMediaStream=function(v){v&&(v.getVideoTracks&&v.getAudioTracks?(v.getVideoTracks().map(function(_){v.removeTrack(_),_.stop()}),v.getAudioTracks().map(function(_){v.removeTrack(_),_.stop()})):v.stop())},m.prototype.stopAndCleanup=function(){var v=this.state;v.hasUserMedia&&(m.stopMediaStream(this.stream),v.src&&window.URL.revokeObjectURL(v.src))},m.prototype.getScreenshot=function(v){var _=this,g=_.state,d=_.props;if(!g.hasUserMedia)return null;var x=this.getCanvas(v);return x&&x.toDataURL(d.screenshotFormat,d.screenshotQuality)},m.prototype.getCanvas=function(v){var _=this,g=_.state,d=_.props;if(!this.video||!g.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var x=this.video.videoWidth,y=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var S=x/y;x=d.minScreenshotWidth||this.video.clientWidth,y=x/S,d.minScreenshotHeight&&y<d.minScreenshotHeight&&(y=d.minScreenshotHeight,x=y*S)}this.canvas=document.createElement("canvas"),this.canvas.width=(v==null?void 0:v.width)||x,this.canvas.height=(v==null?void 0:v.height)||y,this.ctx=this.canvas.getContext("2d")}var C=this,A=C.ctx,b=C.canvas;return A&&b&&(b.width=(v==null?void 0:v.width)||b.width,b.height=(v==null?void 0:v.height)||b.height,d.mirrored&&(A.translate(b.width,0),A.scale(-1,1)),A.imageSmoothingEnabled=d.imageSmoothing,A.drawImage(this.video,0,0,(v==null?void 0:v.width)||b.width,(v==null?void 0:v.height)||b.height),d.mirrored&&(A.scale(-1,1),A.translate(-b.width,0))),b},m.prototype.requestUserMedia=function(){var v=this,_=this.props,g=function(y,S){var C={video:typeof S<"u"?S:!0};_.audio&&(C.audio=typeof y<"u"?y:!0),v.requestUserMediaId++;var A=v.requestUserMediaId;navigator.mediaDevices.getUserMedia(C).then(function(b){v.unmounted||A!==v.requestUserMediaId?m.stopMediaStream(b):v.handleUserMedia(null,b)}).catch(function(b){v.handleUserMedia(b)})};if("mediaDevices"in navigator)g(_.audioConstraints,_.videoConstraints);else{var d=function(y){return{optional:[{sourceId:y}]}},x=function(y){var S=y.deviceId;return typeof S=="string"?S:Array.isArray(S)&&S.length>0?S[0]:typeof S=="object"&&S.ideal?S.ideal:null};MediaStreamTrack.getSources(function(y){var S=null,C=null;y.forEach(function(R){R.kind==="audio"?S=R.id:R.kind==="video"&&(C=R.id)});var A=x(_.audioConstraints);A&&(S=A);var b=x(_.videoConstraints);b&&(C=b),g(d(S),d(C))})}},m.prototype.handleUserMedia=function(v,_){var g=this.props;if(v||!_){this.setState({hasUserMedia:!1}),g.onUserMediaError(v);return}this.stream=_;try{this.video&&(this.video.srcObject=_),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(_)})}g.onUserMedia(_)},m.prototype.render=function(){var v=this,_=this,g=_.state,d=_.props,x=d.audio;d.forceScreenshotSourceSize;var y=d.disablePictureInPicture;d.onUserMedia,d.onUserMediaError,d.screenshotFormat,d.screenshotQuality,d.minScreenshotWidth,d.minScreenshotHeight,d.audioConstraints,d.videoConstraints,d.imageSmoothing;var S=d.mirrored,C=d.style,A=C===void 0?{}:C,b=d.children,R=u(d,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),T=S?l(l({},A),{transform:(A.transform||"")+" scaleX(-1)"}):A,M={getScreenshot:this.getScreenshot.bind(this)};return a.createElement(a.Fragment,null,a.createElement("video",l({autoPlay:!0,disablePictureInPicture:y,src:g.src,muted:!x,playsInline:!0,ref:function(L){v.video=L},style:T},R)),b&&b(M))},m.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},m}(a.Component);r.default=h},react:function(i,r){i.exports=n}}).default})})(Tv);var yy=Tv.exports;const bv=om(yy),je=({children:t,variant:e="primary",size:n="default",className:i="",icon:r,iconPosition:s="left",...a})=>{const o="btn",l=`btn-${e}`,u=n==="lg"?"btn-lg":"";return c.jsxs("button",{className:`${o} ${l} ${u} ${i} ${r?"flex items-center justify-center gap-2":""}`,...a,children:[r&&s==="left"&&c.jsx(r,{className:"w-5 h-5"}),t,r&&s==="right"&&c.jsx(r,{className:"w-5 h-5"})]})},It=({children:t,className:e="",animate:n=!1})=>c.jsx("div",{className:`card ${n?"animate-fade-in animate-slide-up":""} ${e}`,children:t}),Sy=({onClose:t})=>{const{setStage:e,settings:n}=nr(),i=()=>{t(),e("payment")};return c.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in",children:c.jsxs(It,{className:"max-w-lg w-full animate-slide-up",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6",children:[c.jsx("h2",{className:"text-xl font-bold",children:"Pricing Information"}),c.jsx("button",{onClick:t,className:"text-gray-400 hover:text-white transition-colors",children:c.jsx(Gl,{size:24})})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded-lg",children:[c.jsxs("div",{className:"flex justify-between items-center mb-2",children:[c.jsx("h3",{className:"font-bold text-lg",children:"Complete Photo Experience"}),c.jsxs("span",{className:"text-xl font-bold",children:["₹",n.pricing.basePackagePrice]})]}),c.jsxs("div",{className:"space-y-2 text-gray-300",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Df,{size:16,className:"text-primary"}),c.jsx("span",{children:"Capture 4 high-quality photos"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx($n,{size:16,className:"text-purple-400"}),c.jsx("span",{children:"Studio Ghibli AI art conversion"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Xo,{size:16,className:"text-primary"}),c.jsx("span",{children:"2 × Professional photo strips"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(K_,{size:16,className:"text-green-400"}),c.jsx("span",{children:"Instant photo editing & filters"})]})]})]}),c.jsxs("div",{className:"bg-gray-800 rounded-lg p-4",children:[c.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[c.jsx(Ca,{size:16,className:"text-blue-400"}),"Quick & Easy Payment:"]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"bg-green-900/20 p-3 rounded-lg mb-2",children:c.jsx(X_,{className:"text-green-400 mx-auto",size:24})}),c.jsx("span",{className:"text-sm text-gray-300 font-medium",children:"Cash Payment"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"bg-blue-900/20 p-3 rounded-lg mb-2",children:c.jsx(py,{className:"text-blue-400 mx-auto",size:24})}),c.jsx("span",{className:"text-sm text-gray-300 font-medium",children:"UPI/Digital"})]})]})]}),c.jsxs("div",{className:"bg-gray-800 rounded-lg p-4",children:[c.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[c.jsx(Uf,{size:16,className:"text-green-400"}),"Everything Included:"]}),c.jsxs("div",{className:"space-y-1 text-sm text-gray-300",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"📸 4 professional photos"}),c.jsx("span",{className:"font-medium",children:"✓"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:'🖨️ 2 × Premium photo strips (4x6")'}),c.jsx("span",{className:"font-medium",children:"✓"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsxs("span",{children:["✨ ",n.pricing.freeGhibliConversions," FREE Ghibli AI conversions"]}),c.jsx("span",{className:"font-medium",children:"✓"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"🎨 Photo filters & editing tools"}),c.jsx("span",{className:"font-medium",children:"✓"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"📱 Instant digital delivery"}),c.jsx("span",{className:"font-medium",children:"✓"})]})]})]}),c.jsxs("div",{className:"bg-gradient-to-r from-green-900/20 to-blue-900/20 p-3 rounded-lg border border-green-500/30",children:[c.jsx("p",{className:"text-sm text-green-300 font-medium mb-1",children:"💡 Pro Tip:"}),c.jsxs("p",{className:"text-sm text-gray-300",children:["Extra copies: +₹",n.pricing.extraCopyPrice," per 2 additional strips. Extra Ghibli conversions: +₹",n.pricing.ghibliConversionPrice," each."]})]}),c.jsx("p",{className:"text-xs text-gray-500 text-center",children:"Perfect for events, parties, and creating lasting memories! 📷✨"})]}),c.jsx("div",{className:"mt-6",children:c.jsx(je,{variant:"primary",className:"w-full",onClick:i,children:"Start Session Now"})})]})})},My=({onClose:t})=>{const e=[{url:"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",filter:"Original"},{url:"https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",filter:"Sepia"},{url:"https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",filter:"B&W"}];return c.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in",children:c.jsxs(It,{className:"max-w-2xl w-full animate-slide-up",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6",children:[c.jsx("h2",{className:"text-xl font-bold",children:"Sample Photos"}),c.jsx("button",{onClick:t,className:"text-gray-400 hover:text-white transition-colors",children:c.jsx(Gl,{size:24})})]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:e.map((n,i)=>c.jsxs("div",{className:"relative group overflow-hidden rounded-lg",children:[c.jsx("img",{src:n.url,alt:`Sample ${i+1}`,className:"w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"}),c.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3",children:c.jsx("p",{className:"text-white font-medium",children:n.filter})})]},i))}),c.jsx("div",{className:"mt-6 text-center",children:c.jsx(je,{variant:"secondary",onClick:t,children:"Close Gallery"})})]})})},Av=({label:t,error:e,helperText:n,className:i="",id:r,...s})=>{const a=r||(t==null?void 0:t.toLowerCase().replace(/\s+/g,"-"));return c.jsxs("div",{className:"mb-4",children:[t&&c.jsx("label",{htmlFor:a,className:"block text-sm font-medium text-gray-300 mb-1",children:t}),c.jsx("input",{id:a,className:`input ${e?"border-error focus:border-error focus:ring-error/50":""} ${i}`,...s}),e&&c.jsx("p",{className:"mt-1 text-sm text-error",children:e}),n&&!e&&c.jsx("p",{className:"mt-1 text-sm text-gray-400",children:n})]})},vr=class vr{constructor(){ei(this,"isKioskActive",!1);ei(this,"originalOverflow","");ei(this,"preventContextMenu",e=>{e.preventDefault()});ei(this,"preventDevTools",e=>{e.key==="F12"&&e.preventDefault(),e.ctrlKey&&e.shiftKey&&(e.key==="I"||e.key==="J")&&e.preventDefault(),e.ctrlKey&&e.key==="u"&&e.preventDefault(),e.altKey&&e.key==="F4"&&e.preventDefault(),e.ctrlKey&&e.key==="w"&&e.preventDefault(),e.ctrlKey&&e.key==="r"&&e.preventDefault(),e.ctrlKey&&e.key==="t"&&e.preventDefault()});ei(this,"preventDragDrop",e=>{e.preventDefault()});this.setupEventListeners()}static getInstance(){return vr.instance||(vr.instance=new vr),vr.instance}enterKioskMode(){this.isKioskActive=!0,this.originalOverflow=document.body.style.overflow,document.body.style.overflowX="hidden",document.body.style.overflowY="auto",document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(console.error),window.electronAPI&&window.electronAPI.enterKioskMode(),document.addEventListener("contextmenu",this.preventContextMenu),document.addEventListener("keydown",this.preventDevTools),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",document.addEventListener("dragover",this.preventDragDrop),document.addEventListener("drop",this.preventDragDrop)}exitKioskMode(){this.isKioskActive=!1,document.body.style.overflow=this.originalOverflow,document.exitFullscreen&&document.exitFullscreen().catch(console.error),window.electronAPI&&window.electronAPI.exitKioskMode(),document.removeEventListener("contextmenu",this.preventContextMenu),document.removeEventListener("keydown",this.preventDevTools),document.body.style.userSelect="",document.body.style.webkitUserSelect="",document.removeEventListener("dragover",this.preventDragDrop),document.removeEventListener("drop",this.preventDragDrop)}setupEventListeners(){window.addEventListener("popstate",e=>{this.isKioskActive&&(e.preventDefault(),window.history.pushState(null,"",window.location.href))}),window.addEventListener("beforeunload",e=>{this.isKioskActive&&(e.preventDefault(),e.returnValue="")})}isActive(){return this.isKioskActive}};ei(vr,"instance");let El=vr;const Ey=({onClose:t})=>{const{kioskMode:e,setKioskMode:n,settings:i,setSettings:r}=nr(),[s,a]=K.useState("http://localhost:8000"),[o,l]=K.useState(null),[u,p]=K.useState(null),h=El.getInstance();K.useEffect(()=>{const y=localStorage.getItem("upiQrImage");y&&l(y);const S=localStorage.getItem("backgroundVideo");S&&p(S)},[]);const f=()=>{e?(h.exitKioskMode(),n(!1)):(h.enterKioskMode(),n(!0))},m=y=>{var C;const S=(C=y.target.files)==null?void 0:C[0];if(S){const A=new FileReader;A.onload=b=>{var T;const R=(T=b.target)==null?void 0:T.result;l(R),localStorage.setItem("upiQrImage",R)},A.readAsDataURL(S)}},v=()=>{l(null),localStorage.removeItem("upiQrImage")},_=y=>{var C;const S=(C=y.target.files)==null?void 0:C[0];if(S){if(!S.type.startsWith("video/")){alert("Please select a video file");return}if(S.size>50*1024*1024){alert("Video file is too large. Please select a file smaller than 50MB.");return}const A=new FileReader;A.onload=b=>{var T;const R=(T=b.target)==null?void 0:T.result;p(R),localStorage.setItem("backgroundVideo",R)},A.readAsDataURL(S)}},g=()=>{p(null),localStorage.removeItem("backgroundVideo")},d=y=>{r(S=>({...S,ghibliConversionLimit:Math.max(1,y)}))},x=()=>{t()};return c.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in",children:c.jsxs(It,{className:"max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6",children:[c.jsxs("h2",{className:"text-2xl font-bold flex items-center gap-2",children:[c.jsx(hy,{className:"text-primary"}),"System Settings - FastAPI Backend"]}),c.jsx("button",{onClick:t,className:"text-gray-400 hover:text-white transition-colors",children:c.jsx(Gl,{size:24})})]}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"bg-gray-900 rounded-lg p-4",children:[c.jsx("div",{className:"flex justify-between items-center mb-4",children:c.jsxs("h3",{className:"text-lg font-semibold flex items-center gap-2",children:[c.jsx(fy,{className:"text-secondary"}),"FastAPI Backend Configuration"]})}),c.jsxs("div",{className:"mb-4 p-3 rounded-lg border bg-green-900/20 border-green-500/30",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[c.jsx($_,{className:"text-green-400",size:16}),c.jsx("span",{className:"text-green-400 font-medium",children:"Backend Server Ready"})]}),c.jsx("p",{className:"text-sm text-gray-300",children:"FastAPI server is assumed to be running and ready to generate photo strips and handle printing."})]}),c.jsx("div",{className:"grid grid-cols-1 gap-4",children:c.jsx(Av,{label:"Backend API URL",value:s,onChange:y=>a(y.target.value),placeholder:"http://localhost:8000",helperText:"URL where your FastAPI server is running"})}),c.jsxs("div",{className:"mt-4 p-3 bg-gray-800 rounded-lg",children:[c.jsx("h4",{className:"font-medium mb-2",children:"Backend Features:"}),c.jsxs("div",{className:"text-sm text-gray-300 space-y-1",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Photo Strip Generation:"})," Creates professional 2x6 inch strips with 4 photos"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ CUPS Printing:"})," Direct printing to system printers via CUPS"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Image Processing:"})," PIL-based image resizing and layout"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Custom Quotes:"})," Adds timestamps and custom messages"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Logo Support:"})," Optional logo placement in strips"]})]})]}),c.jsxs("div",{className:"mt-4 p-3 bg-gray-800 rounded-lg",children:[c.jsx("h4",{className:"font-medium mb-2",children:"Backend Setup Instructions:"}),c.jsxs("div",{className:"text-sm text-gray-300 space-y-1",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"1. Install Dependencies:"})," pip install fastapi uvicorn pillow pycups"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"2. Start Server:"})," uvicorn main:app --reload --host 0.0.0.0 --port 8000"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"3. Configure Printer:"})," Ensure CUPS is configured with your printer"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"4. Test Connection:"}),' Click "Test Connection" above']})]})]}),c.jsxs("div",{className:"mt-4 p-3 bg-gray-800 rounded-lg",children:[c.jsx("h4",{className:"font-medium mb-2",children:"Server Status:"}),c.jsxs("div",{className:"text-sm text-gray-300 space-y-1",children:[c.jsx("p",{children:"Status: ✅ Ready for photo generation and printing"}),c.jsx("p",{children:"Services: Photo strip generation ✓, Print service ✓"}),c.jsxs("p",{children:["Server URL: ",s]})]})]})]}),c.jsxs("div",{className:"bg-gray-900 rounded-lg p-4",children:[c.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[c.jsx(_y,{className:"text-purple-400"}),"Background Video Configuration"]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Welcome Screen Background Video"}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("input",{type:"file",accept:"video/*",onChange:_,className:"hidden",id:"background-video-upload"}),c.jsxs("label",{htmlFor:"background-video-upload",className:"btn btn-outline cursor-pointer flex items-center gap-2",children:[c.jsx(cp,{size:16}),"Upload Video"]}),u&&c.jsx(je,{variant:"outline",onClick:g,className:"border-red-500 text-red-400 hover:bg-red-500/10",icon:wv,children:"Remove"})]}),u&&c.jsxs("div",{className:"mt-3",children:[c.jsx("p",{className:"text-sm text-gray-400 mb-2",children:"Preview:"}),c.jsx("div",{className:"inline-block border border-gray-700 rounded-lg overflow-hidden",children:c.jsx("video",{src:u,className:"w-64 h-36 object-cover",controls:!0,muted:!0})})]}),c.jsxs("p",{className:"text-sm text-gray-400 mt-2",children:["Upload a background video for the welcome screen. If no video is uploaded, the animated Three.js background will be shown instead.",c.jsx("br",{}),c.jsx("strong",{children:"Supported formats:"})," MP4, WebM, OGV",c.jsx("br",{}),c.jsx("strong",{children:"Maximum size:"})," 50MB",c.jsx("br",{}),c.jsx("strong",{children:"Recommended:"})," 1920x1080, 30fps, under 10MB for best performance"]})]}),c.jsxs("div",{className:"bg-gray-800 rounded-lg p-3",children:[c.jsx("h4",{className:"font-medium mb-2",children:"Video Features:"}),c.jsxs("div",{className:"text-sm text-gray-300 space-y-1",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Auto-play:"})," Video plays automatically on loop"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Muted playback:"})," No audio to avoid disruption"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Fallback animation:"})," Three.js animation if no video"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Responsive:"})," Video scales to fit screen"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Performance optimized:"})," Compressed playback"]})]})]})]})]}),c.jsxs("div",{className:"bg-gray-900 rounded-lg p-4",children:[c.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[c.jsx(iy,{className:"text-accent"}),"UPI Payment Configuration"]}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"UPI QR Code Image"}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("input",{type:"file",accept:"image/*",onChange:m,className:"hidden",id:"upi-image-upload"}),c.jsxs("label",{htmlFor:"upi-image-upload",className:"btn btn-outline cursor-pointer flex items-center gap-2",children:[c.jsx(cp,{size:16}),"Upload QR Code"]}),o&&c.jsx(je,{variant:"outline",onClick:v,className:"border-red-500 text-red-400 hover:bg-red-500/10",children:"Remove"})]}),o&&c.jsxs("div",{className:"mt-3",children:[c.jsx("p",{className:"text-sm text-gray-400 mb-2",children:"Preview:"}),c.jsx("div",{className:"inline-block border border-gray-700 rounded-lg overflow-hidden",children:c.jsx("img",{src:o,alt:"UPI QR Code",className:"w-32 h-32 object-cover"})})]}),c.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Upload your UPI QR code image to display during payment. Recommended size: 300x300px or larger."})]})})]}),c.jsxs("div",{className:"bg-gray-900 rounded-lg p-4",children:[c.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[c.jsx(Ev,{className:"text-green-400"}),"Pricing Configuration"]}),c.jsxs("div",{className:"bg-gray-800 rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium mb-3",children:"Fixed Pricing Structure"}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("h5",{className:"font-medium text-blue-400 mb-2",children:"Original Photos Package:"}),c.jsxs("div",{className:"grid grid-cols-5 gap-2 text-sm",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"2 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹199"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"4 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹299"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"6 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹399"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"8 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹499"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"10 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹599"})]})]})]}),c.jsxs("div",{children:[c.jsx("h5",{className:"font-medium text-purple-400 mb-2",children:"Original + 2 Ghibli Package:"}),c.jsxs("div",{className:"grid grid-cols-5 gap-2 text-sm",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"2 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹249"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"4 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹349"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"6 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹449"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"8 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹549"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"font-medium",children:"10 copies"}),c.jsx("div",{className:"text-gray-400",children:"₹649"})]})]})]})]})]}),c.jsxs("div",{className:"mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg",children:[c.jsx("h4",{className:"font-medium mb-2 text-blue-400",children:"Package Details:"}),c.jsxs("div",{className:"text-sm text-gray-300 space-y-1",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Original Package:"})," Original photos only"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Ghibli Package:"})," Original photos + 2 FREE Ghibli conversions"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Pricing:"})," Even increments of ₹100 per 2 additional copies"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Ghibli Premium:"})," +₹50 over original package price"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Maximum:"})," 10 copies per order"]})]})]})]}),c.jsxs("div",{className:"bg-gray-900 rounded-lg p-4",children:[c.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[c.jsx($n,{className:"text-purple-400"}),"Ghibli Conversion Settings"]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Conversion Limit Per Session"}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("input",{type:"number",min:"1",max:"10",value:i.ghibliConversionLimit,onChange:y=>d(parseInt(y.target.value)||1),className:"input w-24"}),c.jsx("span",{className:"text-gray-400",children:"conversions per session"})]}),c.jsxs("p",{className:"text-sm text-gray-400 mt-2",children:["Set how many photos can be converted to Ghibli style per session. Current usage: ",i.ghibliConversionsUsed,"/",i.ghibliConversionLimit]})]}),c.jsxs("div",{className:"bg-gray-800 rounded-lg p-3",children:[c.jsx("h4",{className:"font-medium mb-2",children:"Conversion Features:"}),c.jsxs("div",{className:"text-sm text-gray-300 space-y-1",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"✓ AI Style Transfer:"})," Transform photos into Studio Ghibli artwork"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Original Backup:"})," Keep original photos for swapping"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Flexible Usage:"})," Use original, Ghibli, or mix both styles"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"✓ Photo Management:"})," Remove photos to make room for new captures"]})]})]})]})]}),c.jsxs("div",{className:"bg-gray-900 rounded-lg p-4",children:[c.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[c.jsx(op,{className:"text-accent"}),"Kiosk Mode Settings"]}),c.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-800 rounded-lg",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"font-medium",children:"Full Screen Kiosk Mode"}),c.jsx("p",{className:"text-sm text-gray-400",children:"Prevents users from accessing browser controls, dev tools, or navigation"})]}),c.jsx(je,{variant:e?"secondary":"primary",icon:e?ay:op,onClick:f,children:e?"Exit Kiosk":"Enter Kiosk"})]})]}),c.jsxs("div",{className:"bg-gray-900 rounded-lg p-4",children:[c.jsx("h3",{className:"text-lg font-semibold mb-4",children:"System Information"}),c.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400",children:"Version:"}),c.jsx("span",{className:"ml-2",children:"2.0.0 Production"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400",children:"Backend:"}),c.jsx("span",{className:"ml-2",children:"FastAPI + CUPS"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400",children:"Print Method:"}),c.jsx("span",{className:"ml-2",children:"Server-side CUPS"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400",children:"Backend Status:"}),c.jsx("span",{className:"ml-2",children:"🟢 Ready"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400",children:"Ghibli Limit:"}),c.jsxs("span",{className:"ml-2",children:[i.ghibliConversionLimit," per session"]})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400",children:"Ghibli Used:"}),c.jsxs("span",{className:"ml-2",children:[i.ghibliConversionsUsed,"/",i.ghibliConversionLimit]})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400",children:"Original (2 copies):"}),c.jsx("span",{className:"ml-2",children:"₹199"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400",children:"Ghibli (2 copies):"}),c.jsx("span",{className:"ml-2",children:"₹249"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400",children:"Background Video:"}),c.jsx("span",{className:"ml-2",children:u?"🎥 Uploaded":"🎨 Animation"})]})]})]})]}),c.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[c.jsx(je,{variant:"outline",onClick:t,children:"Cancel"}),c.jsx(je,{variant:"primary",icon:dy,onClick:x,children:"Save Settings"})]})]})})},up=({onUnlock:t,onCancel:e})=>{const[n,i]=K.useState(""),[r,s]=K.useState(!1),[a,o]=K.useState(""),[l,u]=K.useState(0),p="admin",h=3,f=v=>{if(v.preventDefault(),n===p)t(),i(""),o(""),u(0);else{const _=l+1;u(_),o(`Incorrect password. ${h-_} attempts remaining.`),i(""),_>=h&&o("Maximum attempts exceeded. Please contact administrator.")}},m=()=>{e&&e()};return c.jsx("div",{className:"fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4",children:c.jsxs(It,{className:"max-w-md w-full text-center",children:[c.jsxs("div",{className:"mb-6",children:[c.jsx("div",{className:"inline-block p-4 bg-red-500/20 rounded-full mb-4",children:c.jsx(sy,{size:48,className:"text-red-400"})}),c.jsx("h2",{className:"text-2xl font-bold mb-2",children:"System Locked"}),c.jsx("p",{className:"text-gray-300",children:"Enter administrator password to unlock"})]}),c.jsxs("form",{onSubmit:f,className:"space-y-4",children:[c.jsxs("div",{className:"relative",children:[c.jsx(Av,{type:r?"text":"password",placeholder:"Enter password",value:n,onChange:v=>i(v.target.value),error:a,disabled:l>=h,className:"pr-12"}),c.jsx("button",{type:"button",onClick:()=>s(!r),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white",children:r?c.jsx(Z_,{size:20}):c.jsx(Q_,{size:20})})]}),c.jsxs("div",{className:"flex gap-3",children:[e&&c.jsx(je,{type:"button",variant:"outline",className:"flex-1",onClick:m,children:"Cancel"}),c.jsx(je,{type:"submit",variant:"primary",className:"flex-1",disabled:!n||l>=h,children:"Unlock System"})]})]})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="178",wy=0,dp=1,Ty=2,Cv=1,by=2,ai=3,Zi=0,an=1,ci=2,$i=0,vs=1,qu=2,fp=3,hp=4,Ay=5,mr=100,Cy=101,Ry=102,Py=103,Ny=104,Ly=200,Dy=201,Uy=202,Iy=203,Yu=204,Ku=205,Fy=206,ky=207,Oy=208,zy=209,By=210,jy=211,Hy=212,Vy=213,Gy=214,Zu=0,Qu=1,Ju=2,As=3,ed=4,td=5,nd=6,id=7,Rv=0,Wy=1,Xy=2,qi=0,$y=1,qy=2,Yy=3,Ky=4,Zy=5,Qy=6,Jy=7,Pv=300,Cs=301,Rs=302,rd=303,sd=304,Wl=306,ad=1e3,Mr=1001,od=1002,Hn=1003,eS=1004,co=1005,Kn=1006,wc=1007,Er=1008,Si=1009,Nv=1010,Lv=1011,Ra=1012,Ff=1013,Lr=1014,fi=1015,Oa=1016,kf=1017,Of=1018,Pa=1020,Dv=35902,Uv=1021,Iv=1022,zn=1023,Na=1026,La=1027,Fv=1028,zf=1029,kv=1030,Bf=1031,jf=1033,$o=33776,qo=33777,Yo=33778,Ko=33779,ld=35840,cd=35841,ud=35842,dd=35843,fd=36196,hd=37492,pd=37496,md=37808,gd=37809,vd=37810,xd=37811,_d=37812,yd=37813,Sd=37814,Md=37815,Ed=37816,wd=37817,Td=37818,bd=37819,Ad=37820,Cd=37821,Zo=36492,Rd=36494,Pd=36495,Ov=36283,Nd=36284,Ld=36285,Dd=36286,tS=3200,nS=3201,iS=0,rS=1,Fi="",Mn="srgb",Ps="srgb-linear",wl="linear",at="srgb",Or=7680,pp=519,sS=512,aS=513,oS=514,zv=515,lS=516,cS=517,uS=518,dS=519,mp=35044,gp="300 es",hi=2e3,Tl=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,Ud=180/Math.PI;function za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function fS(t,e){return(t%e+e)%e}function bc(t,e,n){return(1-n)*t+n*e}function Xs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ba{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],p=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=p,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(h!==_||l!==f||u!==m||p!==v){let g=1-o;const d=l*f+u*m+p*v+h*_,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,d*x);g=Math.sin(g*A)/C,o=Math.sin(o*A)/C}const S=o*x;if(l=l*g+f*S,u=u*g+m*S,p=p*g+v*S,h=h*g+_*S,g===1-o){const C=1/Math.sqrt(l*l+u*u+p*p+h*h);l*=C,u*=C,p*=C,h*=C}}e[n]=l,e[n+1]=u,e[n+2]=p,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],p=i[r+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+p*h+l*m-u*f,e[n+1]=l*v+p*f+u*h-o*m,e[n+2]=u*v+p*m+o*f-l*h,e[n+3]=p*v-o*h-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),p=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*p*h+u*m*v,this._y=u*m*h-f*p*v,this._z=u*p*v+f*m*h,this._w=u*p*h-f*m*v;break;case"YXZ":this._x=f*p*h+u*m*v,this._y=u*m*h-f*p*v,this._z=u*p*v-f*m*h,this._w=u*p*h+f*m*v;break;case"ZXY":this._x=f*p*h-u*m*v,this._y=u*m*h+f*p*v,this._z=u*p*v+f*m*h,this._w=u*p*h-f*m*v;break;case"ZYX":this._x=f*p*h-u*m*v,this._y=u*m*h+f*p*v,this._z=u*p*v-f*m*h,this._w=u*p*h+f*m*v;break;case"YZX":this._x=f*p*h+u*m*v,this._y=u*m*h+f*p*v,this._z=u*p*v-f*m*h,this._w=u*p*h-f*m*v;break;case"XZY":this._x=f*p*h-u*m*v,this._y=u*m*h-f*p*v,this._z=u*p*v+f*m*h,this._w=u*p*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],p=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(p-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(p-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+p)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,p=n._w;return this._x=i*p+a*o+r*u-s*l,this._y=r*p+a*l+s*o-i*u,this._z=s*p+a*u+i*l-r*o,this._w=a*p-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),p=Math.atan2(u,o),h=Math.sin((1-n)*p)/u,f=Math.sin(n*p)/u;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),p=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*p,this.y=i+l*p+o*u-s*h,this.z=r+l*h+s*p-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new j,vp=new Ba;class ze{constructor(e,n,i,r,s,a,o,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],p=i[4],h=i[7],f=i[2],m=i[5],v=i[8],_=r[0],g=r[3],d=r[6],x=r[1],y=r[4],S=r[7],C=r[2],A=r[5],b=r[8];return s[0]=a*_+o*x+l*C,s[3]=a*g+o*y+l*A,s[6]=a*d+o*S+l*b,s[1]=u*_+p*x+h*C,s[4]=u*g+p*y+h*A,s[7]=u*d+p*S+h*b,s[2]=f*_+m*x+v*C,s[5]=f*g+m*y+v*A,s[8]=f*d+m*S+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],p=e[8];return n*a*p-n*o*u-i*s*p+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],p=e[8],h=p*a-o*u,f=o*l-p*s,m=u*s-a*l,v=n*h+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(r*u-p*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(p*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=m*_,e[7]=(i*l-u*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Cc.makeScale(e,n)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new ze;function Bv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hS(){const t=bl("canvas");return t.style.display="block",t}const xp={};function xs(t){t in xp||(xp[t]=!0,console.warn(t))}function pS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function mS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _p=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yp=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){const t={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?wl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ps]:{primaries:e,whitePoint:i,transfer:wl,toXYZ:_p,fromXYZ:yp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:_p,fromXYZ:yp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),t}const Je=vS();function gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _s(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class xS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zr===void 0&&(zr=bl("canvas")),zr.width=e.width,zr.height=e.height;const r=zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gi(n[i]/255)*255):n[i]=gi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _S=0;class Hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Rc(r[a].image)):s.push(Rc(r[a]))}else s=Rc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yS=0;const Pc=new j;class on extends Is{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Mr,r=Mr,s=Kn,a=Er,o=zn,l=Si,u=on.DEFAULT_ANISOTROPY,p=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=za(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Pv;on.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],p=l[4],h=l[8],f=l[1],m=l[5],v=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(p-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(p+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,S=(m+1)/2,C=(d+1)/2,A=(p+f)/4,b=(h+_)/4,R=(v+g)/4;return y>S&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=b/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=R/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(h-_)*(h-_)+(f-p)*(f-p));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(h-_)/x,this.z=(f-p)/x,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SS extends Is{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new on(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Hf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends SS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jv extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MS extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),fo.subVectors(this.max,$s),Br.subVectors(e.a,$s),jr.subVectors(e.b,$s),Hr.subVectors(e.c,$s),bi.subVectors(jr,Br),Ai.subVectors(Hr,jr),sr.subVectors(Br,Hr);let n=[0,-bi.z,bi.y,0,-Ai.z,Ai.y,0,-sr.z,sr.y,bi.z,0,-bi.x,Ai.z,0,-Ai.x,sr.z,0,-sr.x,-bi.y,bi.x,0,-Ai.y,Ai.x,0,-sr.y,sr.x,0];return!Nc(n,Br,jr,Hr,fo)||(n=[1,0,0,0,1,0,0,0,1],!Nc(n,Br,jr,Hr,fo))?!1:(ho.crossVectors(bi,Ai),n=[ho.x,ho.y,ho.z],Nc(n,Br,jr,Hr,fo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ti=[new j,new j,new j,new j,new j,new j,new j,new j],Ln=new j,uo=new ja,Br=new j,jr=new j,Hr=new j,bi=new j,Ai=new j,sr=new j,$s=new j,fo=new j,ho=new j,ar=new j;function Nc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ar.fromArray(t,s);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=n.dot(ar),p=i.dot(ar);if(Math.max(-Math.max(l,u,p),Math.min(l,u,p))>o)return!1}return!0}const ES=new ja,qs=new j,Lc=new j;class Xl{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ES.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Lc)),this.expandByPoint(qs.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ni=new j,Dc=new j,po=new j,Ci=new j,Uc=new j,mo=new j,Ic=new j;class Hv{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dc.copy(e).add(n).multiplyScalar(.5),po.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(Dc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(po),o=Ci.dot(this.direction),l=-Ci.dot(po),u=Ci.lengthSq(),p=Math.abs(1-a*a);let h,f,m,v;if(p>0)if(h=a*l-o,f=a*o-l,v=s*p,h>=0)if(f>=-v)if(f<=v){const _=1/p;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Dc).addScaledVector(po,f),m}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),p>=0?(s=(e.min.y-f.y)*p,a=(e.max.y-f.y)*p):(s=(e.max.y-f.y)*p,a=(e.min.y-f.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){Uc.subVectors(n,e),mo.subVectors(i,e),Ic.crossVectors(Uc,mo);let a=this.direction.dot(Ic),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const l=o*this.direction.dot(mo.crossVectors(Ci,mo));if(l<0)return null;const u=o*this.direction.dot(Uc.cross(Ci));if(u<0||l+u>a)return null;const p=-o*Ci.dot(Ic);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,a,o,l,u,p,h,f,m,v,_,g){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,p,h,f,m,v,_,g)}set(e,n,i,r,s,a,o,l,u,p,h,f,m,v,_,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=p,d[10]=h,d[14]=f,d[3]=m,d[7]=v,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*p,m=a*h,v=o*p,_=o*h;n[0]=l*p,n[4]=-l*h,n[8]=u,n[1]=m+v*u,n[5]=f-_*u,n[9]=-o*l,n[2]=_-f*u,n[6]=v+m*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*p,m=l*h,v=u*p,_=u*h;n[0]=f+_*o,n[4]=v*o-m,n[8]=a*u,n[1]=a*h,n[5]=a*p,n[9]=-o,n[2]=m*o-v,n[6]=_+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*p,m=l*h,v=u*p,_=u*h;n[0]=f-_*o,n[4]=-a*h,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*p,n[9]=_-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*p,m=a*h,v=o*p,_=o*h;n[0]=l*p,n[4]=v*u-m,n[8]=f*u+_,n[1]=l*h,n[5]=_*u+f,n[9]=m*u-v,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,v=o*l,_=o*u;n[0]=l*p,n[4]=_-f*h,n[8]=v*h+m,n[1]=h,n[5]=a*p,n[9]=-o*p,n[2]=-u*p,n[6]=m*h+v,n[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,m=a*u,v=o*l,_=o*u;n[0]=l*p,n[4]=-h,n[8]=u*p,n[1]=f*h+_,n[5]=a*p,n[9]=m*h-v,n[2]=v*h-m,n[6]=o*p,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wS,e,TS)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ri.crossVectors(i,dn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ri.crossVectors(i,dn)),Ri.normalize(),go.crossVectors(dn,Ri),r[0]=Ri.x,r[4]=go.x,r[8]=dn.x,r[1]=Ri.y,r[5]=go.y,r[9]=dn.y,r[2]=Ri.z,r[6]=go.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],p=i[1],h=i[5],f=i[9],m=i[13],v=i[2],_=i[6],g=i[10],d=i[14],x=i[3],y=i[7],S=i[11],C=i[15],A=r[0],b=r[4],R=r[8],T=r[12],M=r[1],L=r[5],z=r[9],I=r[13],$=r[2],W=r[6],Y=r[10],J=r[14],D=r[3],X=r[7],te=r[11],ue=r[15];return s[0]=a*A+o*M+l*$+u*D,s[4]=a*b+o*L+l*W+u*X,s[8]=a*R+o*z+l*Y+u*te,s[12]=a*T+o*I+l*J+u*ue,s[1]=p*A+h*M+f*$+m*D,s[5]=p*b+h*L+f*W+m*X,s[9]=p*R+h*z+f*Y+m*te,s[13]=p*T+h*I+f*J+m*ue,s[2]=v*A+_*M+g*$+d*D,s[6]=v*b+_*L+g*W+d*X,s[10]=v*R+_*z+g*Y+d*te,s[14]=v*T+_*I+g*J+d*ue,s[3]=x*A+y*M+S*$+C*D,s[7]=x*b+y*L+S*W+C*X,s[11]=x*R+y*z+S*Y+C*te,s[15]=x*T+y*I+S*J+C*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],p=e[2],h=e[6],f=e[10],m=e[14],v=e[3],_=e[7],g=e[11],d=e[15];return v*(+s*l*h-r*u*h-s*o*f+i*u*f+r*o*m-i*l*m)+_*(+n*l*m-n*u*f+s*a*f-r*a*m+r*u*p-s*l*p)+g*(+n*u*h-n*o*m-s*a*h+i*a*m+s*o*p-i*u*p)+d*(-r*o*p-n*l*h+n*o*f+r*a*h-i*a*f+i*l*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],p=e[8],h=e[9],f=e[10],m=e[11],v=e[12],_=e[13],g=e[14],d=e[15],x=h*g*u-_*f*u+_*l*m-o*g*m-h*l*d+o*f*d,y=v*f*u-p*g*u-v*l*m+a*g*m+p*l*d-a*f*d,S=p*_*u-v*h*u+v*o*m-a*_*m-p*o*d+a*h*d,C=v*h*l-p*_*l-v*o*f+a*_*f+p*o*g-a*h*g,A=n*x+i*y+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=x*b,e[1]=(_*f*s-h*g*s-_*r*m+i*g*m+h*r*d-i*f*d)*b,e[2]=(o*g*s-_*l*s+_*r*u-i*g*u-o*r*d+i*l*d)*b,e[3]=(h*l*s-o*f*s-h*r*u+i*f*u+o*r*m-i*l*m)*b,e[4]=y*b,e[5]=(p*g*s-v*f*s+v*r*m-n*g*m-p*r*d+n*f*d)*b,e[6]=(v*l*s-a*g*s-v*r*u+n*g*u+a*r*d-n*l*d)*b,e[7]=(a*f*s-p*l*s+p*r*u-n*f*u-a*r*m+n*l*m)*b,e[8]=S*b,e[9]=(v*h*s-p*_*s-v*i*m+n*_*m+p*i*d-n*h*d)*b,e[10]=(a*_*s-v*o*s+v*i*u-n*_*u-a*i*d+n*o*d)*b,e[11]=(p*o*s-a*h*s-p*i*u+n*h*u+a*i*m-n*o*m)*b,e[12]=C*b,e[13]=(p*_*r-v*h*r+v*i*f-n*_*f-p*i*g+n*h*g)*b,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*g-n*o*g)*b,e[15]=(a*h*r-p*o*r+p*i*l-n*h*l-a*i*f+n*o*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,p=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,p*o+i,p*l-r*a,0,u*l-r*o,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,p=a+a,h=o+o,f=s*u,m=s*p,v=s*h,_=a*p,g=a*h,d=o*h,x=l*u,y=l*p,S=l*h,C=i.x,A=i.y,b=i.z;return r[0]=(1-(_+d))*C,r[1]=(m+S)*C,r[2]=(v-y)*C,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+d))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(v+y)*b,r[9]=(g-x)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const u=1/s,p=1/a,h=1/o;return Dn.elements[0]*=u,Dn.elements[1]*=u,Dn.elements[2]*=u,Dn.elements[4]*=p,Dn.elements[5]*=p,Dn.elements[6]*=p,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,n.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=hi){const l=this.elements,u=2*s/(n-e),p=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,v;if(o===hi)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Tl)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi){const l=this.elements,u=1/(n-e),p=1/(i-r),h=1/(a-s),f=(n+e)*u,m=(i+r)*p;let v,_;if(o===hi)v=(a+s)*h,_=-2*h;else if(o===Tl)v=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new j,Dn=new bt,wS=new j(0,0,0),TS=new j(1,1,1),Ri=new j,go=new j,dn=new j,Sp=new bt,Mp=new Ba;class Mi{constructor(e=0,n=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],p=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mp.setFromEuler(this),this.setFromQuaternion(Mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bS=0;const Ep=new j,Gr=new Ba,ii=new bt,vo=new j,Ys=new j,AS=new j,CS=new Ba,wp=new j(1,0,0),Tp=new j(0,1,0),bp=new j(0,0,1),Ap={type:"added"},RS={type:"removed"},Wr={type:"childadded",child:null},Fc={type:"childremoved",child:null};class ln extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new j,n=new Mi,i=new Ba,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new ze}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(wp,e)}rotateY(e){return this.rotateOnAxis(Tp,e)}rotateZ(e){return this.rotateOnAxis(bp,e)}translateOnAxis(e,n){return Ep.copy(e).applyQuaternion(this.quaternion),this.position.add(Ep.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wp,e)}translateY(e){return this.translateOnAxis(Tp,e)}translateZ(e){return this.translateOnAxis(bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ys,vo,this.up):ii.lookAt(vo,Ys,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ii),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ap),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RS),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ap),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,p=l.length;u<p;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),p=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const u in o){const p=o[u];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new j(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new j,ri=new j,kc=new j,si=new j,Xr=new j,$r=new j,Cp=new j,Oc=new j,zc=new j,Bc=new j,jc=new Tt,Hc=new Tt,Vc=new Tt;class On{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ri.subVectors(i,n),kc.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(ri),l=Un.dot(kc),u=ri.dot(ri),p=ri.dot(kc),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(u*l-o*p)*f,v=(a*p-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return jc.setScalar(0),Hc.setScalar(0),Vc.setScalar(0),jc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,i),Vc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jc,s.x),a.addScaledVector(Hc,s.y),a.addScaledVector(Vc,s.z),a}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ri.subVectors(e,n),Un.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Un.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Xr.subVectors(r,i),$r.subVectors(s,i),Oc.subVectors(e,i);const l=Xr.dot(Oc),u=$r.dot(Oc);if(l<=0&&u<=0)return n.copy(i);zc.subVectors(e,r);const p=Xr.dot(zc),h=$r.dot(zc);if(p>=0&&h<=p)return n.copy(r);const f=l*h-p*u;if(f<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Xr,a);Bc.subVectors(e,s);const m=Xr.dot(Bc),v=$r.dot(Bc);if(v>=0&&m<=v)return n.copy(s);const _=m*u-l*v;if(_<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector($r,o);const g=p*v-m*h;if(g<=0&&h-p>=0&&m-v>=0)return Cp.subVectors(s,r),o=(h-p)/(h-p+(m-v)),n.copy(r).addScaledVector(Cp,o);const d=1/(g+_+f);return a=_*d,o=f*d,n.copy(i).addScaledVector(Xr,a).addScaledVector($r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=fS(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Gc(a,s,e+1/3),this.g=Gc(a,s,e),this.b=Gc(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=Gv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Je.workingToColorSpace(Vt.copy(this),e),Math.round(qe(Vt.r*255,0,255))*65536+Math.round(qe(Vt.g*255,0,255))*256+Math.round(qe(Vt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const p=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=p<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=p,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Mn){Je.workingToColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(xo);const i=bc(Pi.h,xo.h,n),r=bc(Pi.s,xo.s,n),s=bc(Pi.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new nt;nt.NAMES=Gv;let PS=0;class Ha extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=za(),this.name="",this.type="Material",this.blending=vs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=Ku,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ku&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wv extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new j,_o=new ot;let NS=0;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mp,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_o.fromBufferAttribute(this,n),_o.applyMatrix3(e),this.setXY(n,_o.x,_o.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mp&&(e.usage=this.usage),e}}class Xv extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $v extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class br extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LS=0;const Sn=new bt,Wc=new ln,qr=new j,fn=new ja,Ks=new ja,Dt=new j;class wi extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bv(e)?$v:Xv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new br(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(fn.min,Ks.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,Ks.max),fn.expandByPoint(Dt)):(fn.expandByPoint(Ks.min),fn.expandByPoint(Ks.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,p=o.count;u<p;u++)Dt.fromBufferAttribute(o,u),l&&(qr.fromBufferAttribute(e,u),Dt.add(qr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new j,l[R]=new j;const u=new j,p=new j,h=new j,f=new ot,m=new ot,v=new ot,_=new j,g=new j;function d(R,T,M){u.fromBufferAttribute(i,R),p.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,M),p.sub(u),h.sub(u),m.sub(f),v.sub(f);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(_.copy(p).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(L),g.copy(h).multiplyScalar(m.x).addScaledVector(p,-v.x).multiplyScalar(L),o[R].add(_),o[T].add(_),o[M].add(_),l[R].add(g),l[T].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,T=x.length;R<T;++R){const M=x[R],L=M.start,z=M.count;for(let I=L,$=L+z;I<$;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new j,S=new j,C=new j,A=new j;function b(R){C.fromBufferAttribute(r,R),A.copy(C);const T=o[R];y.copy(T),y.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(A,T);const L=S.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,T=x.length;R<T;++R){const M=x[R],L=M.start,z=M.count;for(let I=L,$=L+z;I<$;I+=3)b(e.getX(I+0)),b(e.getX(I+1)),b(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,u=new j,p=new j,h=new j;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,g),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),o.add(p),l.add(p),u.add(p),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),i.setXYZ(f+0,p.x,p.y,p.z),i.setXYZ(f+1,p.x,p.y,p.z),i.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const u=o.array,p=o.itemSize,h=o.normalized,f=new u.constructor(l.length*p);let m=0,v=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*p;for(let d=0;d<p;d++)f[v++]=u[m++]}return new Vn(f,p,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let p=0,h=u.length;p<h;p++){const f=u[p],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],p=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];p.push(m.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(n))}const s=e.morphAttributes;for(const u in s){const p=[],h=s[u];for(let f=0,m=h.length;f<m;f++)p.push(h[f].clone(n));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rp=new bt,or=new Hv,yo=new Xl,Pp=new j,So=new j,Mo=new j,Eo=new j,Xc=new j,wo=new j,Np=new j,To=new j;class pi extends ln{constructor(e=new wi,n=new Wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){wo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const p=o[l],h=s[l];p!==0&&(Xc.fromBufferAttribute(h,e),a?wo.addScaledVector(Xc,p):wo.addScaledVector(Xc.sub(n),p))}n.add(wo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(yo.containsPoint(or.origin)===!1&&(or.intersectSphere(yo,Pp)===null||or.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(Rp.copy(s).invert(),or.copy(e.ray).applyMatrix4(Rp),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),y=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,C=y;S<C;S+=3){const A=o.getX(S),b=o.getX(S+1),R=o.getX(S+2);r=bo(this,d,e,i,u,p,h,A,b,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=v,d=_;g<d;g+=3){const x=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);r=bo(this,a,e,i,u,p,h,x,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,C=y;S<C;S+=3){const A=S,b=S+1,R=S+2;r=bo(this,d,e,i,u,p,h,A,b,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=v,d=_;g<d;g+=3){const x=g,y=g+1,S=g+2;r=bo(this,a,e,i,u,p,h,x,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function DS(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zi,o),l===null)return null;To.copy(o),To.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(To);return u<n.near||u>n.far?null:{distance:u,point:To.clone(),object:t}}function bo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,So),t.getVertexPosition(l,Mo),t.getVertexPosition(u,Eo);const p=DS(t,e,n,i,So,Mo,Eo,Np);if(p){const h=new j;On.getBarycoord(Np,So,Mo,Eo,h),r&&(p.uv=On.getInterpolatedAttribute(r,o,l,u,h,new ot)),s&&(p.uv1=On.getInterpolatedAttribute(s,o,l,u,h,new ot)),a&&(p.normal=On.getInterpolatedAttribute(a,o,l,u,h,new j),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new j,materialIndex:0};On.getNormal(So,Mo,Eo,f.normal),p.face=f,p.barycoord=h}return p}class Va extends wi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],p=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new br(u,3)),this.setAttribute("normal",new br(p,3)),this.setAttribute("uv",new br(h,2));function v(_,g,d,x,y,S,C,A,b,R,T){const M=S/b,L=C/R,z=S/2,I=C/2,$=A/2,W=b+1,Y=R+1;let J=0,D=0;const X=new j;for(let te=0;te<Y;te++){const ue=te*L-I;for(let Se=0;Se<W;Se++){const He=Se*M-z;X[_]=He*x,X[g]=ue*y,X[d]=$,u.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[d]=A>0?1:-1,p.push(X.x,X.y,X.z),h.push(Se/b),h.push(1-te/R),J+=1}}for(let te=0;te<R;te++)for(let ue=0;ue<b;ue++){const Se=f+ue+W*te,He=f+ue+W*(te+1),V=f+(ue+1)+W*(te+1),re=f+(ue+1)+W*te;l.push(Se,He,re),l.push(He,V,re),D+=6}o.addGroup(m,D,T),m+=D,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function US(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function qv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const IS={clone:Ns,merge:$t};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=US(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Yv extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new j,Lp=new ot,Dp=new ot;class Tn extends Yv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,Lp,Dp),n.subVectors(Dp,Lp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,Kr=1;class OS extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Yr,Kr,e,n);r.layers=this.layers,this.add(r);const s=new Tn(Yr,Kr,e,n);s.layers=this.layers,this.add(s);const a=new Tn(Yr,Kr,e,n);a.layers=this.layers,this.add(a);const o=new Tn(Yr,Kr,e,n);o.layers=this.layers,this.add(o);const l=new Tn(Yr,Kr,e,n);l.layers=this.layers,this.add(l);const u=new Tn(Yr,Kr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,p]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,p),e.setRenderTarget(h,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Kv extends on{constructor(e=[],n=Cs,i,r,s,a,o,l,u,p){super(e,n,i,r,s,a,o,l,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zS extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Va(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:$i});s.uniforms.tEquirect.value=n;const a=new pi(r,s),o=n.minFilter;return n.minFilter===Er&&(n.minFilter=Kn),new OS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Ao extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BS={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),d=this._getHandJoint(u,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const p=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=p.position.distanceTo(h.position),m=.02,v=.005;u.inputState.pinching&&f>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class jS extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qc=new j,HS=new j,VS=new ze;class hr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qc.subVectors(i,n).cross(HS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||VS.getNormalMatrix(e),r=this.coplanarPoint(qc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Xl,GS=new ot(.5,.5),Co=new j;class Zv{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],p=r[5],h=r[6],f=r[7],m=r[8],v=r[9],_=r[10],g=r[11],d=r[12],x=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,g-m,S-d).normalize(),i[1].setComponents(l+s,f+u,g+m,S+d).normalize(),i[2].setComponents(l+a,f+p,g+v,S+x).normalize(),i[3].setComponents(l-a,f-p,g-v,S-x).normalize(),i[4].setComponents(l-o,f-h,g-_,S-y).normalize(),n===hi)i[5].setComponents(l+o,f+h,g+_,S+y).normalize();else if(n===Tl)i[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);const n=GS.distanceTo(e.center);return lr.radius=.7071067811865476+n,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Co.x=r.normal.x>0?e.max.x:e.min.x,Co.y=r.normal.y>0?e.max.y:e.min.y,Co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qv extends Ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Up=new bt,Id=new Hv,Ro=new Xl,Po=new j;class WS extends ln{constructor(e=new wi,n=new Qv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;Up.copy(r).invert(),Id.copy(e.ray).applyMatrix4(Up);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,_=m;v<_;v++){const g=u.getX(v);Po.fromBufferAttribute(h,g),Ip(Po,g,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,_=m;v<_;v++)Po.fromBufferAttribute(h,v),Ip(Po,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ip(t,e,n,i,r,s,a){const o=Id.distanceSqToPoint(t);if(o<n){const l=new j;Id.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jv extends on{constructor(e,n,i=Lr,r,s,a,o=Hn,l=Hn,u,p=Na,h=1){if(p!==Na&&p!==La)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,p,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $l extends wi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,p=l+1,h=e/o,f=n/l,m=[],v=[],_=[],g=[];for(let d=0;d<p;d++){const x=d*f-a;for(let y=0;y<u;y++){const S=y*h-s;v.push(S,-x,0),_.push(0,0,1),g.push(y/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const y=x+u*d,S=x+u*(d+1),C=x+1+u*(d+1),A=x+1+u*d;m.push(y,S,A),m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new br(v,3)),this.setAttribute("normal",new br(_,3)),this.setAttribute("uv",new br(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.widthSegments,e.heightSegments)}}class XS extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $S extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qS extends Yv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class YS extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Fp(t,e,n,i){const r=KS(i);switch(n){case Uv:return t*e;case Fv:return t*e/r.components*r.byteLength;case zf:return t*e/r.components*r.byteLength;case kv:return t*e*2/r.components*r.byteLength;case Bf:return t*e*2/r.components*r.byteLength;case Iv:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case jf:return t*e*4/r.components*r.byteLength;case $o:case qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yo:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:case dd:return Math.max(t,16)*Math.max(e,8)/4;case ld:case ud:return Math.max(t,8)*Math.max(e,8)/2;case fd:case hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case vd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case _d:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case yd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Md:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Td:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zo:case Rd:case Pd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ov:case Nd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ld:case Dd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KS(t){switch(t){case Si:case Nv:return{byteLength:1,components:1};case Ra:case Lv:case Oa:return{byteLength:2,components:1};case kf:case Of:return{byteLength:2,components:4};case Lr:case Ff:case fi:return{byteLength:4,components:1};case Dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function e0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZS(t){const e=new WeakMap;function n(o,l){const u=o.array,p=o.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,p),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const p=l.array,h=l.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,p);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],_=h[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const _=h[m];t.bufferSubData(u,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:QS,alphahash_pars_fragment:JS,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:aM,batching_vertex:oM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:dM,bumpmap_pars_fragment:fM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:_M,color_vertex:yM,common:SM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:EM,displacementmap_pars_vertex:wM,displacementmap_vertex:TM,emissivemap_fragment:bM,emissivemap_pars_fragment:AM,colorspace_fragment:CM,colorspace_pars_fragment:RM,envmap_fragment:PM,envmap_common_pars_fragment:NM,envmap_pars_fragment:LM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:GM,envmap_vertex:UM,fog_vertex:IM,fog_pars_vertex:FM,fog_fragment:kM,fog_pars_fragment:OM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:BM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:HM,lights_pars_begin:VM,lights_toon_fragment:WM,lights_toon_pars_fragment:XM,lights_phong_fragment:$M,lights_phong_pars_fragment:qM,lights_physical_fragment:YM,lights_physical_pars_fragment:KM,lights_fragment_begin:ZM,lights_fragment_maps:QM,lights_fragment_end:JM,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:aE,map_particle_pars_fragment:oE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:dE,morphnormal_vertex:fE,morphtarget_pars_vertex:hE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:_E,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:EE,iridescence_pars_fragment:wE,opaque_fragment:TE,packing:bE,premultiplied_alpha_fragment:AE,project_vertex:CE,dithering_fragment:RE,dithering_pars_fragment:PE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:LE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:UE,shadowmap_vertex:IE,shadowmask_pars_fragment:FE,skinbase_vertex:kE,skinning_pars_vertex:OE,skinning_vertex:zE,skinnormal_vertex:BE,specularmap_fragment:jE,specularmap_pars_fragment:HE,tonemapping_fragment:VE,tonemapping_pars_fragment:GE,transmission_fragment:WE,transmission_pars_fragment:XE,uv_pars_fragment:$E,uv_pars_vertex:qE,uv_vertex:YE,worldpos_vertex:KE,background_vert:ZE,background_frag:QE,backgroundCube_vert:JE,backgroundCube_frag:e1,cube_vert:t1,cube_frag:n1,depth_vert:i1,depth_frag:r1,distanceRGBA_vert:s1,distanceRGBA_frag:a1,equirect_vert:o1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:u1,meshbasic_vert:d1,meshbasic_frag:f1,meshlambert_vert:h1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:g1,meshnormal_vert:v1,meshnormal_frag:x1,meshphong_vert:_1,meshphong_frag:y1,meshphysical_vert:S1,meshphysical_frag:M1,meshtoon_vert:E1,meshtoon_frag:w1,points_vert:T1,points_frag:b1,shadow_vert:A1,shadow_frag:C1,sprite_vert:R1,sprite_frag:P1},pe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},qn={basic:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:$t([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:$t([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:$t([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:$t([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:$t([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:$t([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:$t([pe.common,pe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:$t([pe.lights,pe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};qn.physical={uniforms:$t([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const No={r:0,b:0,g:0},cr=new Mi,N1=new bt;function L1(t,e,n,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,u,p,h=null,f=0,m=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?n:e).get(S)),S}function _(y){let S=!1;const C=v(y);C===null?d(o,l):C&&C.isColor&&(d(C,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,S){const C=v(S);C&&(C.isCubeTexture||C.mapping===Wl)?(p===void 0&&(p=new pi(new Va(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Ns(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(A,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),cr.copy(S.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(N1.makeRotationFromEuler(cr)),p.material.toneMapped=Je.getTransfer(C.colorSpace)!==at,(h!==C||f!==C.version||m!==t.toneMapping)&&(p.material.needsUpdate=!0,h=C,f=C.version,m=t.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new pi(new $l(2,2),new Qi({name:"BackgroundMaterial",uniforms:Ns(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=Je.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,m=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function d(y,S){y.getRGB(No,qv(t)),i.buffers.color.setClear(No.r,No.g,No.b,S,a)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:_,addToRenderList:g,dispose:x}}function D1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,L,z,I,$){let W=!1;const Y=h(I,z,L);s!==Y&&(s=Y,u(s.object)),W=m(M,I,z,$),W&&v(M,I,z,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(M,L,z,I),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function p(M){return t.deleteVertexArray(M)}function h(M,L,z){const I=z.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let W=$[L.id];W===void 0&&(W={},$[L.id]=W);let Y=W[I];return Y===void 0&&(Y=f(l()),W[I]=Y),Y}function f(M){const L=[],z=[],I=[];for(let $=0;$<n;$++)L[$]=0,z[$]=0,I[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:I,object:M,attributes:{},index:null}}function m(M,L,z,I){const $=s.attributes,W=L.attributes;let Y=0;const J=z.getAttributes();for(const D in J)if(J[D].location>=0){const te=$[D];let ue=W[D];if(ue===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),te===void 0||te.attribute!==ue||ue&&te.data!==ue.data)return!0;Y++}return s.attributesNum!==Y||s.index!==I}function v(M,L,z,I){const $={},W=L.attributes;let Y=0;const J=z.getAttributes();for(const D in J)if(J[D].location>=0){let te=W[D];te===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ue={};ue.attribute=te,te&&te.data&&(ue.data=te.data),$[D]=ue,Y++}s.attributes=$,s.attributesNum=Y,s.index=I}function _(){const M=s.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function g(M){d(M,0)}function d(M,L){const z=s.newAttributes,I=s.enabledAttributes,$=s.attributeDivisors;z[M]=1,I[M]===0&&(t.enableVertexAttribArray(M),I[M]=1),$[M]!==L&&(t.vertexAttribDivisor(M,L),$[M]=L)}function x(){const M=s.newAttributes,L=s.enabledAttributes;for(let z=0,I=L.length;z<I;z++)L[z]!==M[z]&&(t.disableVertexAttribArray(z),L[z]=0)}function y(M,L,z,I,$,W,Y){Y===!0?t.vertexAttribIPointer(M,L,z,$,W):t.vertexAttribPointer(M,L,z,I,$,W)}function S(M,L,z,I){_();const $=I.attributes,W=z.getAttributes(),Y=L.defaultAttributeValues;for(const J in W){const D=W[J];if(D.location>=0){let X=$[J];if(X===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const te=X.normalized,ue=X.itemSize,Se=e.get(X);if(Se===void 0)continue;const He=Se.buffer,V=Se.type,re=Se.bytesPerElement,xe=V===t.INT||V===t.UNSIGNED_INT||X.gpuType===Ff;if(X.isInterleavedBufferAttribute){const de=X.data,Ee=de.stride,Xe=X.offset;if(de.isInstancedInterleavedBuffer){for(let Ne=0;Ne<D.locationSize;Ne++)d(D.location+Ne,de.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ne=0;Ne<D.locationSize;Ne++)g(D.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ne=0;Ne<D.locationSize;Ne++)y(D.location+Ne,ue/D.locationSize,V,te,Ee*re,(Xe+ue/D.locationSize*Ne)*re,xe)}else{if(X.isInstancedBufferAttribute){for(let de=0;de<D.locationSize;de++)d(D.location+de,X.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let de=0;de<D.locationSize;de++)g(D.location+de);t.bindBuffer(t.ARRAY_BUFFER,He);for(let de=0;de<D.locationSize;de++)y(D.location+de,ue/D.locationSize,V,te,ue*re,ue/D.locationSize*de*re,xe)}}else if(Y!==void 0){const te=Y[J];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(D.location,te);break;case 3:t.vertexAttrib3fv(D.location,te);break;case 4:t.vertexAttrib4fv(D.location,te);break;default:t.vertexAttrib1fv(D.location,te)}}}}x()}function C(){R();for(const M in i){const L=i[M];for(const z in L){const I=L[z];for(const $ in I)p(I[$].object),delete I[$];delete L[z]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const z in L){const I=L[z];for(const $ in I)p(I[$].object),delete I[$];delete L[z]}delete i[M.id]}function b(M){for(const L in i){const z=i[L];if(z[M.id]===void 0)continue;const I=z[M.id];for(const $ in I)p(I[$].object),delete I[$];delete z[M.id]}}function R(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function U1(t,e,n){let i;function r(u){i=u}function s(u,p){t.drawArrays(i,u,p),n.update(p,i,1)}function a(u,p,h){h!==0&&(t.drawArraysInstanced(i,u,p,h),n.update(p,i,h))}function o(u,p,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,p,0,h);let m=0;for(let v=0;v<h;v++)m+=p[v];n.update(m,i,1)}function l(u,p,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)a(u[v],p[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,p,0,f,0,h);let v=0;for(let _=0;_<h;_++)v+=p[_]*f[_];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function I1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==zn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const R=b===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Si&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==fi&&!R)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const p=l(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function F1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new hr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=p(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||v===null||v.length===0||s&&!g)s?p(null):u();else{const x=s?0:i,y=x*4;let S=d.clippingState||null;l.value=S,S=p(v,f,y,m);for(let C=0;C!==y;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,f,m,v){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const d=m+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,S=m;y!==_;++y,S+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function k1(t){let e=new WeakMap;function n(a,o){return o===rd?a.mapping=Cs:o===sd&&(a.mapping=Rs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===rd||o===sd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new zS(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const us=4,kp=[.125,.215,.35,.446,.526,.582],gr=20,Yc=new qS,Op=new nt;let Kc=null,Zc=0,Qc=0,Jc=!1;const pr=(1+Math.sqrt(5))/2,Zr=1/pr,zp=[new j(-pr,Zr,0),new j(pr,Zr,0),new j(-Zr,0,pr),new j(Zr,0,pr),new j(0,pr,-Zr),new j(0,pr,Zr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],O1=new j;class Bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=O1}=s;Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Oa,format:zn,colorSpace:Ps,depthBuffer:!1},r=jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z1(s)),this._blurMaterial=B1(s,e,n)}return r}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,i,r,s){const l=new Tn(90,1,n,i),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Op),h.toneMapping=qi,h.autoClear=!1;const v=new Wv({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new pi(new Va,v);let g=!1;const d=e.background;d?d.isColor&&(v.color.copy(d),e.background=null,g=!0):(v.color.copy(Op),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[x],s.y,s.z)):y===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[x]));const S=this._cubeSize;Lo(r,y*S,x>2?S:0,S,S),h.setRenderTarget(r),g&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Cs||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Lo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Yc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zp[(r-s-1)%zp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,h=new pi(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gr-1),_=s/v,g=isFinite(s)?1+Math.floor(p*_):gr;g>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gr}`);const d=[];let x=0;for(let b=0;b<gr;++b){const R=b/_,T=Math.exp(-R*R/2);d.push(T),b===0?x+=T:b<g&&(x+=2*T)}for(let b=0;b<d.length;b++)d[b]=d[b]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;const S=this._sizeLods[r],C=3*S*(r>y-us?r-y+us:0),A=4*(this._cubeSize-S);Lo(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Yc)}}function z1(t){const e=[],n=[],i=[];let r=t;const s=t-us+1+kp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-us?l=kp[a-t+us-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),p=-u,h=1+u,f=[p,p,h,p,h,h,p,p,h,h,p,h],m=6,v=6,_=3,g=2,d=1,x=new Float32Array(_*v*m),y=new Float32Array(g*v*m),S=new Float32Array(d*v*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,R=A>2?0:-1,T=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];x.set(T,_*v*A),y.set(f,g*v*A);const M=[A,A,A,A,A,A];S.set(M,d*v*A)}const C=new wi;C.setAttribute("position",new Vn(x,_)),C.setAttribute("uv",new Vn(y,g)),C.setAttribute("faceIndex",new Vn(S,d)),e.push(C),r>us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jp(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=Wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function B1(t,e,n){const i=new Float32Array(gr),r=new j(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Hp(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Vp(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===rd||l===sd,p=l===Cs||l===Rs;if(u||p){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Bp(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return u&&m&&m.height>0||p&&m&&r(m)?(n===null&&(n=new Bp(t)),h=u?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const u=6;for(let p=0;p<u;p++)o[p]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function H1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&xs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function V1(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(h){const f=[],m=h.index,v=h.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let y=0,S=x.length;y<S;y+=3){const C=x[y+0],A=x[y+1],b=x[y+2];f.push(C,A,A,b,b,C)}}else if(v!==void 0){const x=v.array;_=v.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const C=y+0,A=y+1,b=y+2;f.push(C,A,A,b,b,C)}}else return;const g=new(Bv(f)?$v:Xv)(f,1);g.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function p(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:p}}function G1(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function u(f,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,f*a,v),n.update(m,i,v))}function p(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,v);let g=0;for(let d=0;d<v;d++)g+=m[d];n.update(g,i,1)}function h(f,m,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)u(f[d]/a,m[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,v);let d=0;for(let x=0;x<v;x++)d+=m[x]*_[x];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=h}function W1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function X1(t,e,n){const i=new WeakMap,r=new Tt;function s(a,o,l){const u=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=p!==void 0?p.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let C=o.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*A*4*h),R=new jv(b,C,A,h);R.type=fi,R.needsUpdate=!0;const T=S*4;for(let L=0;L<h;L++){const z=d[L],I=x[L],$=y[L],W=C*A*4*L;for(let Y=0;Y<z.count;Y++){const J=Y*T;v===!0&&(r.fromBufferAttribute(z,Y),b[W+J+0]=r.x,b[W+J+1]=r.y,b[W+J+2]=r.z,b[W+J+3]=0),_===!0&&(r.fromBufferAttribute(I,Y),b[W+J+4]=r.x,b[W+J+5]=r.y,b[W+J+6]=r.z,b[W+J+7]=0),g===!0&&(r.fromBufferAttribute($,Y),b[W+J+8]=r.x,b[W+J+9]=r.y,b[W+J+10]=r.z,b[W+J+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new ot(C,A)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<u.length;g++)v+=u[g];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function $1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,p=l.geometry,h=e.get(l,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}const t0=new on,Gp=new Jv(1,1),n0=new jv,i0=new MS,r0=new Kv,Wp=[],Xp=[],$p=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function Fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ql(t,e){let n=Xp[e];n===void 0&&(n=new Int32Array(e),Xp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function q1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Nt(n,i))return;Yp.set(i),t.uniformMatrix2fv(this.addr,!1,Yp),Lt(n,i)}}function J1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Nt(n,i))return;qp.set(i),t.uniformMatrix3fv(this.addr,!1,qp),Lt(n,i)}}function ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Nt(n,i))return;$p.set(i),t.uniformMatrix4fv(this.addr,!1,$p),Lt(n,i)}}function tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gp.compareFunction=zv,s=Gp):s=t0,n.setTexture2D(e||s,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||i0,r)}function dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||r0,r)}function fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||n0,r)}function hw(t){switch(t){case 5126:return q1;case 35664:return Y1;case 35665:return K1;case 35666:return Z1;case 35674:return Q1;case 35675:return J1;case 35676:return ew;case 5124:case 35670:return tw;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return aw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return fw}}function pw(t,e){t.uniform1fv(this.addr,e)}function mw(t,e){const n=Fs(e,this.size,2);t.uniform2fv(this.addr,n)}function gw(t,e){const n=Fs(e,this.size,3);t.uniform3fv(this.addr,n)}function vw(t,e){const n=Fs(e,this.size,4);t.uniform4fv(this.addr,n)}function xw(t,e){const n=Fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _w(t,e){const n=Fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yw(t,e){const n=Fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Sw(t,e){t.uniform1iv(this.addr,e)}function Mw(t,e){t.uniform2iv(this.addr,e)}function Ew(t,e){t.uniform3iv(this.addr,e)}function ww(t,e){t.uniform4iv(this.addr,e)}function Tw(t,e){t.uniform1uiv(this.addr,e)}function bw(t,e){t.uniform2uiv(this.addr,e)}function Aw(t,e){t.uniform3uiv(this.addr,e)}function Cw(t,e){t.uniform4uiv(this.addr,e)}function Rw(t,e,n){const i=this.cache,r=e.length,s=ql(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||t0,s[a])}function Pw(t,e,n){const i=this.cache,r=e.length,s=ql(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||i0,s[a])}function Nw(t,e,n){const i=this.cache,r=e.length,s=ql(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||r0,s[a])}function Lw(t,e,n){const i=this.cache,r=e.length,s=ql(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||n0,s[a])}function Dw(t){switch(t){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return vw;case 35674:return xw;case 35675:return _w;case 35676:return yw;case 5124:case 35670:return Sw;case 35667:case 35671:return Mw;case 35668:case 35672:return Ew;case 35669:case 35673:return ww;case 5125:return Tw;case 36294:return bw;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Lw}}class Uw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hw(n.type)}}class Iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Dw(n.type)}}class Fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const eu=/(\w+)(\])?(\[|\.)?/g;function Kp(t,e){t.seq.push(e),t.map[e.id]=e}function kw(t,e,n){const i=t.name,r=i.length;for(eu.lastIndex=0;;){const s=eu.exec(i),a=eu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Kp(n,u===void 0?new Uw(o,t,e):new Iw(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Fw(o),Kp(n,h)),n=h}}}class Qo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);kw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Zp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ow=37297;let zw=0;function Bw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Qp=new ze;function jw(t){Je._getMatrix(Qp,Je.workingColorSpace,t);const e=`mat3( ${Qp.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case wl:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Jp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Bw(t.getShaderSource(e),a)}else return r}function Hw(t,e){const n=jw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Vw(t,e){let n;switch(e){case $y:n="Linear";break;case qy:n="Reinhard";break;case Yy:n="Cineon";break;case Ky:n="ACESFilmic";break;case Qy:n="AgX";break;case Jy:n="Neutral";break;case Zy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Do=new j;function Gw(){Je.getLuminanceCoefficients(Do);const t=Do.x.toFixed(4),e=Do.y.toFixed(4),n=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ww(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function Xw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $w(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ta(t){return t!==""}function em(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(t){return t.replace(qw,Kw)}const Yw=new Map;function Kw(t,e){let n=Be[e];if(n===void 0){const i=Yw.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fd(n)}const Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(t){return t.replace(Zw,Qw)}function Qw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function im(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===by?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function eT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Cs:case Rs:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function nT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Rv:e="ENVMAP_BLENDING_MULTIPLY";break;case Wy:e="ENVMAP_BLENDING_MIX";break;case Xy:e="ENVMAP_BLENDING_ADD";break}return e}function iT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Jw(n),u=eT(n),p=tT(n),h=nT(n),f=iT(n),m=Ww(n),v=Xw(s),_=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ta).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ta).join(`
`),d.length>0&&(d+=`
`)):(g=[im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),d=[im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Be.tonemapping_pars_fragment:"",n.toneMapping!==qi?Vw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Hw("linearToOutputTexel",n.outputColorSpace),Gw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),a=Fd(a),a=em(a,n),a=tm(a,n),o=Fd(o),o=em(o,n),o=tm(o,n),a=nm(a),o=nm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=x+g+a,S=x+d+o,C=Zp(r,r.VERTEX_SHADER,y),A=Zp(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(L){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(A).trim();let W=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,A);else{const J=Jp(r,C,"vertex"),D=Jp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+J+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||$==="")&&(Y=!1);Y&&(L.diagnostics={runnable:W,programLog:z,vertexShader:{log:I,prefix:g},fragmentShader:{log:$,prefix:d}})}r.deleteShader(C),r.deleteShader(A),R=new Qo(r,_),T=$w(r,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Ow)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let sT=0;class aT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oT(e),n.set(e,i)),i}}class oT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function lT(t,e,n,i,r,s,a){const o=new Vv,l=new aT,u=new Set,p=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,M,L,z,I){const $=z.fog,W=I.geometry,Y=T.isMeshStandardMaterial?z.environment:null,J=(T.isMeshStandardMaterial?n:e).get(T.envMap||Y),D=J&&J.mapping===Wl?J.image.height:null,X=v[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=te!==void 0?te.length:0;let Se=0;W.morphAttributes.position!==void 0&&(Se=1),W.morphAttributes.normal!==void 0&&(Se=2),W.morphAttributes.color!==void 0&&(Se=3);let He,V,re,xe;if(X){const tt=qn[X];He=tt.vertexShader,V=tt.fragmentShader}else He=T.vertexShader,V=T.fragmentShader,l.update(T),re=l.getVertexShaderID(T),xe=l.getFragmentShaderID(T);const de=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),Xe=I.isInstancedMesh===!0,Ne=I.isBatchedMesh===!0,et=!!T.map,lt=!!T.matcap,Ge=!!J,N=!!T.aoMap,$e=!!T.lightMap,Ke=!!T.bumpMap,rt=!!T.normalMap,be=!!T.displacementMap,Ye=!!T.emissiveMap,Re=!!T.metalnessMap,Oe=!!T.roughnessMap,Et=T.anisotropy>0,P=T.clearcoat>0,E=T.dispersion>0,O=T.iridescence>0,Z=T.sheen>0,ie=T.transmission>0,q=Et&&!!T.anisotropyMap,Q=P&&!!T.clearcoatMap,G=P&&!!T.clearcoatNormalMap,ce=P&&!!T.clearcoatRoughnessMap,fe=O&&!!T.iridescenceMap,ee=O&&!!T.iridescenceThicknessMap,me=Z&&!!T.sheenColorMap,Ae=Z&&!!T.sheenRoughnessMap,Ce=!!T.specularMap,he=!!T.specularColorMap,Ie=!!T.specularIntensityMap,U=ie&&!!T.transmissionMap,ge=ie&&!!T.thicknessMap,se=!!T.gradientMap,Me=!!T.alphaMap,oe=T.alphaTest>0,ne=!!T.alphaHash,we=!!T.extensions;let ke=qi;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ke=t.toneMapping);const dt={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:V,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&I._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&I.instanceColor!==null,instancingMorph:Xe&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ps,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:lt,envMap:Ge,envMapMode:Ge&&J.mapping,envMapCubeUVHeight:D,aoMap:N,lightMap:$e,bumpMap:Ke,normalMap:rt,displacementMap:f&&be,emissiveMap:Ye,normalMapObjectSpace:rt&&T.normalMapType===rS,normalMapTangentSpace:rt&&T.normalMapType===iS,metalnessMap:Re,roughnessMap:Oe,anisotropy:Et,anisotropyMap:q,clearcoat:P,clearcoatMap:Q,clearcoatNormalMap:G,clearcoatRoughnessMap:ce,dispersion:E,iridescence:O,iridescenceMap:fe,iridescenceThicknessMap:ee,sheen:Z,sheenColorMap:me,sheenRoughnessMap:Ae,specularMap:Ce,specularColorMap:he,specularIntensityMap:Ie,transmission:ie,transmissionMap:U,thicknessMap:ge,gradientMap:se,opaque:T.transparent===!1&&T.blending===vs&&T.alphaToCoverage===!1,alphaMap:Me,alphaTest:oe,alphaHash:ne,combine:T.combine,mapUv:et&&_(T.map.channel),aoMapUv:N&&_(T.aoMap.channel),lightMapUv:$e&&_(T.lightMap.channel),bumpMapUv:Ke&&_(T.bumpMap.channel),normalMapUv:rt&&_(T.normalMap.channel),displacementMapUv:be&&_(T.displacementMap.channel),emissiveMapUv:Ye&&_(T.emissiveMap.channel),metalnessMapUv:Re&&_(T.metalnessMap.channel),roughnessMapUv:Oe&&_(T.roughnessMap.channel),anisotropyMapUv:q&&_(T.anisotropyMap.channel),clearcoatMapUv:Q&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:G&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(T.sheenRoughnessMap.channel),specularMapUv:Ce&&_(T.specularMap.channel),specularColorMapUv:he&&_(T.specularColorMap.channel),specularIntensityMapUv:Ie&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:ge&&_(T.thicknessMap.channel),alphaMapUv:Me&&_(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(rt||Et),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!W.attributes.uv&&(et||Me),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ee,skinning:I.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===at,decodeVideoTextureEmissive:Ye&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===at,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ci,flipSided:T.side===an,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:we&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&T.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return dt.vertexUv1s=u.has(1),dt.vertexUv2s=u.has(2),dt.vertexUv3s=u.has(3),u.clear(),dt}function d(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(x(M,T),y(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function x(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function S(T){const M=v[T.type];let L;if(M){const z=qn[M];L=IS.clone(z.uniforms)}else L=T.uniforms;return L}function C(T,M){let L;for(let z=0,I=p.length;z<I;z++){const $=p[z];if($.cacheKey===M){L=$,++L.usedTimes;break}}return L===void 0&&(L=new rT(t,M,T,s),p.push(L)),L}function A(T){if(--T.usedTimes===0){const M=p.indexOf(T);p[M]=p[p.length-1],p.pop(),T.destroy()}}function b(T){l.remove(T)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:p,dispose:R}}function cT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function uT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,m,v,_,g){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:_,group:g},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=g),e++,d}function o(h,f,m,v,_,g){const d=a(h,f,m,v,_,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(h,f,m,v,_,g){const d=a(h,f,m,v,_,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,f){n.length>1&&n.sort(h||uT),i.length>1&&i.sort(f||rm),r.length>1&&r.sort(f||rm)}function p(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:p,sort:u}}function dT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new sm,t.set(i,[a])):r>=s.length?(a=new sm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function fT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new nt};break;case"SpotLight":n={position:new j,direction:new j,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pT=0;function mT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gT(t){const e=new fT,n=hT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new bt,a=new bt;function o(u){let p=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,v=0,_=0,g=0,d=0,x=0,y=0,S=0,C=0,A=0,b=0;u.sort(mT);for(let T=0,M=u.length;T<M;T++){const L=u[T],z=L.color,I=L.intensity,$=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=z.r*I,h+=z.g*I,f+=z.b*I;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],I);b++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,D=n.get(L);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=L.shadow.matrix,x++}i.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(z).multiplyScalar(I),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[_]=Y;const J=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,J.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=J.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=W,S++}_++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(z).multiplyScalar(I),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=Y,g++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const J=L.shadow,D=n.get(L);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,D.shadowCameraNear=J.camera.near,D.shadowCameraFar=J.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=W,i.pointShadowMatrix[v]=L.shadow.matrix,y++}i.point[v]=Y,v++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(I),Y.groundColor.copy(L.groundColor).multiplyScalar(I),i.hemi[d]=Y,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==m||R.pointLength!==v||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==d||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,R.directionalLength=m,R.pointLength=v,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=d,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=b,i.version=pT++)}function l(u,p){let h=0,f=0,m=0,v=0,_=0;const g=p.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const y=u[d];if(y.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function am(t){const e=new gT(t),n=[],i=[];function r(p){u.camera=p,n.length=0,i.length=0}function s(p){n.push(p)}function a(p){i.push(p)}function o(){e.setup(n)}function l(p){e.setupView(n,p)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function vT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new am(t),e.set(r,[o])):s>=a.length?(o=new am(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const xT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_T=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yT(t,e,n){let i=new Zv;const r=new ot,s=new ot,a=new Tt,o=new XS({depthPacking:nS}),l=new $S,u={},p=n.maxTextureSize,h={[Zi]:an,[an]:Zi,[ci]:ci},f=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:xT,fragmentShader:_T}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new wi;v.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pi(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let d=this.type;this.render=function(A,b,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),z=t.state;z.setBlending($i),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=d!==ai&&this.type===ai,$=d===ai&&this.type!==ai;for(let W=0,Y=A.length;W<Y;W++){const J=A[W],D=J.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null||I===!0||$===!0){const ue=this.type!==ai?{minFilter:Hn,magFilter:Hn}:{};D.map!==null&&D.map.dispose(),D.map=new Dr(r.x,r.y,ue),D.map.texture.name=J.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const te=D.getViewportCount();for(let ue=0;ue<te;ue++){const Se=D.getViewport(ue);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),z.viewport(a),D.updateMatrices(J,ue),i=D.getFrustum(),S(b,R,D.camera,J,this.type)}D.isPointLightShadow!==!0&&this.type===ai&&x(D,R),D.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(T,M,L)};function x(A,b){const R=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,R,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,R,m,_,null)}function y(A,b,R,T){let M=null;const L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const z=M.uuid,I=b.uuid;let $=u[z];$===void 0&&($={},u[z]=$);let W=$[I];W===void 0&&(W=M.clone(),$[I]=W,b.addEventListener("dispose",C)),M=W}if(M.visible=b.visible,M.wireframe=b.wireframe,T===ai?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=R}return M}function S(A,b,R,T,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const I=e.update(A),$=A.material;if(Array.isArray($)){const W=I.groups;for(let Y=0,J=W.length;Y<J;Y++){const D=W[Y],X=$[D.materialIndex];if(X&&X.visible){const te=y(A,X,T,M);A.onBeforeShadow(t,A,b,R,I,te,D),t.renderBufferDirect(R,null,I,te,A,D),A.onAfterShadow(t,A,b,R,I,te,D)}}}else if($.visible){const W=y(A,$,T,M);A.onBeforeShadow(t,A,b,R,I,W,null),t.renderBufferDirect(R,null,I,W,A,null),A.onAfterShadow(t,A,b,R,I,W,null)}}const z=A.children;for(let I=0,$=z.length;I<$;I++)S(z[I],b,R,T,M)}function C(A){A.target.removeEventListener("dispose",C);for(const R in u){const T=u[R],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const ST={[Zu]:Qu,[Ju]:nd,[ed]:id,[As]:td,[Qu]:Zu,[nd]:Ju,[id]:ed,[td]:As};function MT(t,e){function n(){let U=!1;const ge=new Tt;let se=null;const Me=new Tt(0,0,0,0);return{setMask:function(oe){se!==oe&&!U&&(t.colorMask(oe,oe,oe,oe),se=oe)},setLocked:function(oe){U=oe},setClear:function(oe,ne,we,ke,dt){dt===!0&&(oe*=ke,ne*=ke,we*=ke),ge.set(oe,ne,we,ke),Me.equals(ge)===!1&&(t.clearColor(oe,ne,we,ke),Me.copy(ge))},reset:function(){U=!1,se=null,Me.set(-1,0,0,0)}}}function i(){let U=!1,ge=!1,se=null,Me=null,oe=null;return{setReversed:function(ne){if(ge!==ne){const we=e.get("EXT_clip_control");ne?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ge=ne;const ke=oe;oe=null,this.setClear(ke)}},getReversed:function(){return ge},setTest:function(ne){ne?de(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(ne){se!==ne&&!U&&(t.depthMask(ne),se=ne)},setFunc:function(ne){if(ge&&(ne=ST[ne]),Me!==ne){switch(ne){case Zu:t.depthFunc(t.NEVER);break;case Qu:t.depthFunc(t.ALWAYS);break;case Ju:t.depthFunc(t.LESS);break;case As:t.depthFunc(t.LEQUAL);break;case ed:t.depthFunc(t.EQUAL);break;case td:t.depthFunc(t.GEQUAL);break;case nd:t.depthFunc(t.GREATER);break;case id:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=ne}},setLocked:function(ne){U=ne},setClear:function(ne){oe!==ne&&(ge&&(ne=1-ne),t.clearDepth(ne),oe=ne)},reset:function(){U=!1,se=null,Me=null,oe=null,ge=!1}}}function r(){let U=!1,ge=null,se=null,Me=null,oe=null,ne=null,we=null,ke=null,dt=null;return{setTest:function(tt){U||(tt?de(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(tt){ge!==tt&&!U&&(t.stencilMask(tt),ge=tt)},setFunc:function(tt,Pn,Jn){(se!==tt||Me!==Pn||oe!==Jn)&&(t.stencilFunc(tt,Pn,Jn),se=tt,Me=Pn,oe=Jn)},setOp:function(tt,Pn,Jn){(ne!==tt||we!==Pn||ke!==Jn)&&(t.stencilOp(tt,Pn,Jn),ne=tt,we=Pn,ke=Jn)},setLocked:function(tt){U=tt},setClear:function(tt){dt!==tt&&(t.clearStencil(tt),dt=tt)},reset:function(){U=!1,ge=null,se=null,Me=null,oe=null,ne=null,we=null,ke=null,dt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let p={},h={},f=new WeakMap,m=[],v=null,_=!1,g=null,d=null,x=null,y=null,S=null,C=null,A=null,b=new nt(0,0,0),R=0,T=!1,M=null,L=null,z=null,I=null,$=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(D)[1]),Y=J>=1):D.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Y=J>=2);let X=null,te={};const ue=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),He=new Tt().fromArray(ue),V=new Tt().fromArray(Se);function re(U,ge,se,Me){const oe=new Uint8Array(4),ne=t.createTexture();t.bindTexture(U,ne),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<se;we++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ge+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return ne}const xe={};xe[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(t.DEPTH_TEST),a.setFunc(As),Ke(!1),rt(dp),de(t.CULL_FACE),N($i);function de(U){p[U]!==!0&&(t.enable(U),p[U]=!0)}function Ee(U){p[U]!==!1&&(t.disable(U),p[U]=!1)}function Xe(U,ge){return h[U]!==ge?(t.bindFramebuffer(U,ge),h[U]=ge,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ge),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ne(U,ge){let se=m,Me=!1;if(U){se=f.get(ge),se===void 0&&(se=[],f.set(ge,se));const oe=U.textures;if(se.length!==oe.length||se[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,we=oe.length;ne<we;ne++)se[ne]=t.COLOR_ATTACHMENT0+ne;se.length=oe.length,Me=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,Me=!0);Me&&t.drawBuffers(se)}function et(U){return v!==U?(t.useProgram(U),v=U,!0):!1}const lt={[mr]:t.FUNC_ADD,[Cy]:t.FUNC_SUBTRACT,[Ry]:t.FUNC_REVERSE_SUBTRACT};lt[Py]=t.MIN,lt[Ny]=t.MAX;const Ge={[Ly]:t.ZERO,[Dy]:t.ONE,[Uy]:t.SRC_COLOR,[Yu]:t.SRC_ALPHA,[By]:t.SRC_ALPHA_SATURATE,[Oy]:t.DST_COLOR,[Fy]:t.DST_ALPHA,[Iy]:t.ONE_MINUS_SRC_COLOR,[Ku]:t.ONE_MINUS_SRC_ALPHA,[zy]:t.ONE_MINUS_DST_COLOR,[ky]:t.ONE_MINUS_DST_ALPHA,[jy]:t.CONSTANT_COLOR,[Hy]:t.ONE_MINUS_CONSTANT_COLOR,[Vy]:t.CONSTANT_ALPHA,[Gy]:t.ONE_MINUS_CONSTANT_ALPHA};function N(U,ge,se,Me,oe,ne,we,ke,dt,tt){if(U===$i){_===!0&&(Ee(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),U!==Ay){if(U!==g||tt!==T){if((d!==mr||S!==mr)&&(t.blendEquation(t.FUNC_ADD),d=mr,S=mr),tt)switch(U){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qu:t.blendFunc(t.ONE,t.ONE);break;case fp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case fp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,y=null,C=null,A=null,b.set(0,0,0),R=0,g=U,T=tt}return}oe=oe||ge,ne=ne||se,we=we||Me,(ge!==d||oe!==S)&&(t.blendEquationSeparate(lt[ge],lt[oe]),d=ge,S=oe),(se!==x||Me!==y||ne!==C||we!==A)&&(t.blendFuncSeparate(Ge[se],Ge[Me],Ge[ne],Ge[we]),x=se,y=Me,C=ne,A=we),(ke.equals(b)===!1||dt!==R)&&(t.blendColor(ke.r,ke.g,ke.b,dt),b.copy(ke),R=dt),g=U,T=!1}function $e(U,ge){U.side===ci?Ee(t.CULL_FACE):de(t.CULL_FACE);let se=U.side===an;ge&&(se=!se),Ke(se),U.blending===vs&&U.transparent===!1?N($i):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Me=U.stencilWrite;o.setTest(Me),Me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(U){M!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),M=U)}function rt(U){U!==wy?(de(t.CULL_FACE),U!==L&&(U===dp?t.cullFace(t.BACK):U===Ty?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),L=U}function be(U){U!==z&&(Y&&t.lineWidth(U),z=U)}function Ye(U,ge,se){U?(de(t.POLYGON_OFFSET_FILL),(I!==ge||$!==se)&&(t.polygonOffset(ge,se),I=ge,$=se)):Ee(t.POLYGON_OFFSET_FILL)}function Re(U){U?de(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function Oe(U){U===void 0&&(U=t.TEXTURE0+W-1),X!==U&&(t.activeTexture(U),X=U)}function Et(U,ge,se){se===void 0&&(X===null?se=t.TEXTURE0+W-1:se=X);let Me=te[se];Me===void 0&&(Me={type:void 0,texture:void 0},te[se]=Me),(Me.type!==U||Me.texture!==ge)&&(X!==se&&(t.activeTexture(se),X=se),t.bindTexture(U,ge||xe[U]),Me.type=U,Me.texture=ge)}function P(){const U=te[X];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(U){He.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),He.copy(U))}function Ae(U){V.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),V.copy(U))}function Ce(U,ge){let se=u.get(ge);se===void 0&&(se=new WeakMap,u.set(ge,se));let Me=se.get(U);Me===void 0&&(Me=t.getUniformBlockIndex(ge,U.name),se.set(U,Me))}function he(U,ge){const Me=u.get(ge).get(U);l.get(ge)!==Me&&(t.uniformBlockBinding(ge,Me,U.__bindingPointIndex),l.set(ge,Me))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},X=null,te={},h={},f=new WeakMap,m=[],v=null,_=!1,g=null,d=null,x=null,y=null,S=null,C=null,A=null,b=new nt(0,0,0),R=0,T=!1,M=null,L=null,z=null,I=null,$=null,He.set(0,0,t.canvas.width,t.canvas.height),V.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:de,disable:Ee,bindFramebuffer:Xe,drawBuffers:Ne,useProgram:et,setBlending:N,setMaterial:$e,setFlipSided:Ke,setCullFace:rt,setLineWidth:be,setPolygonOffset:Ye,setScissorTest:Re,activeTexture:Oe,bindTexture:Et,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:O,texImage2D:fe,texImage3D:ee,updateUBOMapping:Ce,uniformBlockBinding:he,texStorage2D:G,texStorage3D:ce,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:me,viewport:Ae,reset:Ie}}function ET(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ot,p=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return m?new OffscreenCanvas(P,E):bl("canvas")}function _(P,E,O){let Z=1;const ie=Et(P);if((ie.width>O||ie.height>O)&&(Z=O/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(Z*ie.width),Q=Math.floor(Z*ie.height);h===void 0&&(h=v(q,Q));const G=E?v(q,Q):h;return G.width=q,G.height=Q,G.getContext("2d").drawImage(P,0,0,q,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+q+"x"+Q+")."),G}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function g(P){return P.generateMipmaps}function d(P){t.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,E,O,Z,ie=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=E;if(E===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8)),E===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),E===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8)),E===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),E===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),E===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),E===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),E===t.RGBA){const Q=ie?wl:Je.getTransfer(Z);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=Q===at?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(P,E){let O;return P?E===null||E===Lr||E===Pa?O=t.DEPTH24_STENCIL8:E===fi?O=t.DEPTH32F_STENCIL8:E===Ra&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Lr||E===Pa?O=t.DEPTH_COMPONENT24:E===fi?O=t.DEPTH_COMPONENT32F:E===Ra&&(O=t.DEPTH_COMPONENT16),O}function C(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Hn&&P.minFilter!==Kn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){const E=P.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&p.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),M(E)}function R(P){const E=i.get(P);if(E.__webglInit===void 0)return;const O=P.source,Z=f.get(O);if(Z){const ie=Z[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(P),Object.keys(Z).length===0&&f.delete(O)}i.remove(P)}function T(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const O=P.source,Z=f.get(O);delete Z[E.__cacheKey],a.memory.textures--}function M(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let ie=0;ie<E.__webglFramebuffer[Z].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[Z][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)t.deleteFramebuffer(E.__webglFramebuffer[Z]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=P.textures;for(let Z=0,ie=O.length;Z<ie;Z++){const q=i.get(O[Z]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[Z])}i.remove(P)}let L=0;function z(){L=0}function I(){const P=L;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function $(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function W(P,E){const O=i.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(O,P,E);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+E)}function Y(P,E){const O=i.get(P);if(P.version>0&&O.__version!==P.version){xe(O,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+E)}function J(P,E){const O=i.get(P);if(P.version>0&&O.__version!==P.version){xe(O,P,E);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+E)}function D(P,E){const O=i.get(P);if(P.version>0&&O.__version!==P.version){de(O,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+E)}const X={[ad]:t.REPEAT,[Mr]:t.CLAMP_TO_EDGE,[od]:t.MIRRORED_REPEAT},te={[Hn]:t.NEAREST,[eS]:t.NEAREST_MIPMAP_NEAREST,[co]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[wc]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},ue={[sS]:t.NEVER,[dS]:t.ALWAYS,[aS]:t.LESS,[zv]:t.LEQUAL,[oS]:t.EQUAL,[uS]:t.GEQUAL,[lS]:t.GREATER,[cS]:t.NOTEQUAL};function Se(P,E){if(E.type===fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kn||E.magFilter===wc||E.magFilter===co||E.magFilter===Er||E.minFilter===Kn||E.minFilter===wc||E.minFilter===co||E.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,X[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,X[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,X[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,te[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==co&&E.minFilter!==Er||E.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function He(P,E){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const Z=E.source;let ie=f.get(Z);ie===void 0&&(ie={},f.set(Z,ie));const q=$(E);if(q!==P.__cacheKey){ie[q]===void 0&&(ie[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ie[q].usedTimes++;const Q=ie[P.__cacheKey];Q!==void 0&&(ie[P.__cacheKey].usedTimes--,Q.usedTimes===0&&T(E)),P.__cacheKey=q,P.__webglTexture=ie[q].texture}return O}function V(P,E,O){return Math.floor(Math.floor(P/O)/E)}function re(P,E,O,Z){const q=P.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,O,Z,E.data);else{q.sort((ee,me)=>ee.start-me.start);let Q=0;for(let ee=1;ee<q.length;ee++){const me=q[Q],Ae=q[ee],Ce=me.start+me.count,he=V(Ae.start,E.width,4),Ie=V(me.start,E.width,4);Ae.start<=Ce+1&&he===Ie&&V(Ae.start+Ae.count-1,E.width,4)===he?me.count=Math.max(me.count,Ae.start+Ae.count-me.start):(++Q,q[Q]=Ae)}q.length=Q+1;const G=t.getParameter(t.UNPACK_ROW_LENGTH),ce=t.getParameter(t.UNPACK_SKIP_PIXELS),fe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let ee=0,me=q.length;ee<me;ee++){const Ae=q[ee],Ce=Math.floor(Ae.start/4),he=Math.ceil(Ae.count/4),Ie=Ce%E.width,U=Math.floor(Ce/E.width),ge=he,se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ie,U,ge,se,O,Z,E.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,G),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function xe(P,E,O){let Z=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=t.TEXTURE_3D);const ie=He(P,E),q=E.source;n.bindTexture(Z,P.__webglTexture,t.TEXTURE0+O);const Q=i.get(q);if(q.version!==Q.__version||ie===!0){n.activeTexture(t.TEXTURE0+O);const G=Je.getPrimaries(Je.workingColorSpace),ce=E.colorSpace===Fi?null:Je.getPrimaries(E.colorSpace),fe=E.colorSpace===Fi||G===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ee=_(E.image,!1,r.maxTextureSize);ee=Oe(E,ee);const me=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type);let Ce=y(E.internalFormat,me,Ae,E.colorSpace,E.isVideoTexture);Se(Z,E);let he;const Ie=E.mipmaps,U=E.isVideoTexture!==!0,ge=Q.__version===void 0||ie===!0,se=q.dataReady,Me=C(E,ee);if(E.isDepthTexture)Ce=S(E.format===La,E.type),ge&&(U?n.texStorage2D(t.TEXTURE_2D,1,Ce,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ce,ee.width,ee.height,0,me,Ae,null));else if(E.isDataTexture)if(Ie.length>0){U&&ge&&n.texStorage2D(t.TEXTURE_2D,Me,Ce,Ie[0].width,Ie[0].height);for(let oe=0,ne=Ie.length;oe<ne;oe++)he=Ie[oe],U?se&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,he.width,he.height,me,Ae,he.data):n.texImage2D(t.TEXTURE_2D,oe,Ce,he.width,he.height,0,me,Ae,he.data);E.generateMipmaps=!1}else U?(ge&&n.texStorage2D(t.TEXTURE_2D,Me,Ce,ee.width,ee.height),se&&re(E,ee,me,Ae)):n.texImage2D(t.TEXTURE_2D,0,Ce,ee.width,ee.height,0,me,Ae,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ce,Ie[0].width,Ie[0].height,ee.depth);for(let oe=0,ne=Ie.length;oe<ne;oe++)if(he=Ie[oe],E.format!==zn)if(me!==null)if(U){if(se)if(E.layerUpdates.size>0){const we=Fp(he.width,he.height,E.format,E.type);for(const ke of E.layerUpdates){const dt=he.data.subarray(ke*we/he.data.BYTES_PER_ELEMENT,(ke+1)*we/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,ke,he.width,he.height,1,me,dt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,he.width,he.height,ee.depth,me,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Ce,he.width,he.height,ee.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,he.width,he.height,ee.depth,me,Ae,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Ce,he.width,he.height,ee.depth,0,me,Ae,he.data)}else{U&&ge&&n.texStorage2D(t.TEXTURE_2D,Me,Ce,Ie[0].width,Ie[0].height);for(let oe=0,ne=Ie.length;oe<ne;oe++)he=Ie[oe],E.format!==zn?me!==null?U?se&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,he.width,he.height,me,he.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?se&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,he.width,he.height,me,Ae,he.data):n.texImage2D(t.TEXTURE_2D,oe,Ce,he.width,he.height,0,me,Ae,he.data)}else if(E.isDataArrayTexture)if(U){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ce,ee.width,ee.height,ee.depth),se)if(E.layerUpdates.size>0){const oe=Fp(ee.width,ee.height,E.format,E.type);for(const ne of E.layerUpdates){const we=ee.data.subarray(ne*oe/ee.data.BYTES_PER_ELEMENT,(ne+1)*oe/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,ee.width,ee.height,1,me,Ae,we)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,Ae,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,me,Ae,ee.data);else if(E.isData3DTexture)U?(ge&&n.texStorage3D(t.TEXTURE_3D,Me,Ce,ee.width,ee.height,ee.depth),se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,Ae,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,me,Ae,ee.data);else if(E.isFramebufferTexture){if(ge)if(U)n.texStorage2D(t.TEXTURE_2D,Me,Ce,ee.width,ee.height);else{let oe=ee.width,ne=ee.height;for(let we=0;we<Me;we++)n.texImage2D(t.TEXTURE_2D,we,Ce,oe,ne,0,me,Ae,null),oe>>=1,ne>>=1}}else if(Ie.length>0){if(U&&ge){const oe=Et(Ie[0]);n.texStorage2D(t.TEXTURE_2D,Me,Ce,oe.width,oe.height)}for(let oe=0,ne=Ie.length;oe<ne;oe++)he=Ie[oe],U?se&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,me,Ae,he):n.texImage2D(t.TEXTURE_2D,oe,Ce,me,Ae,he);E.generateMipmaps=!1}else if(U){if(ge){const oe=Et(ee);n.texStorage2D(t.TEXTURE_2D,Me,Ce,oe.width,oe.height)}se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ae,ee)}else n.texImage2D(t.TEXTURE_2D,0,Ce,me,Ae,ee);g(E)&&d(Z),Q.__version=q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function de(P,E,O){if(E.image.length!==6)return;const Z=He(P,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+O);const q=i.get(ie);if(ie.version!==q.__version||Z===!0){n.activeTexture(t.TEXTURE0+O);const Q=Je.getPrimaries(Je.workingColorSpace),G=E.colorSpace===Fi?null:Je.getPrimaries(E.colorSpace),ce=E.colorSpace===Fi||Q===G?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ee=E.image[0]&&E.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!fe&&!ee?me[ne]=_(E.image[ne],!0,r.maxCubemapSize):me[ne]=ee?E.image[ne].image:E.image[ne],me[ne]=Oe(E,me[ne]);const Ae=me[0],Ce=s.convert(E.format,E.colorSpace),he=s.convert(E.type),Ie=y(E.internalFormat,Ce,he,E.colorSpace),U=E.isVideoTexture!==!0,ge=q.__version===void 0||Z===!0,se=ie.dataReady;let Me=C(E,Ae);Se(t.TEXTURE_CUBE_MAP,E);let oe;if(fe){U&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ie,Ae.width,Ae.height);for(let ne=0;ne<6;ne++){oe=me[ne].mipmaps;for(let we=0;we<oe.length;we++){const ke=oe[we];E.format!==zn?Ce!==null?U?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,ke.width,ke.height,Ce,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Ie,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,ke.width,ke.height,Ce,he,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Ie,ke.width,ke.height,0,Ce,he,ke.data)}}}else{if(oe=E.mipmaps,U&&ge){oe.length>0&&Me++;const ne=Et(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ie,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ee){U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Ce,he,me[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ie,me[ne].width,me[ne].height,0,Ce,he,me[ne].data);for(let we=0;we<oe.length;we++){const dt=oe[we].image[ne].image;U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,dt.width,dt.height,Ce,he,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Ie,dt.width,dt.height,0,Ce,he,dt.data)}}else{U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,he,me[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ie,Ce,he,me[ne]);for(let we=0;we<oe.length;we++){const ke=oe[we];U?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,Ce,he,ke.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Ie,Ce,he,ke.image[ne])}}}g(E)&&d(t.TEXTURE_CUBE_MAP),q.__version=ie.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ee(P,E,O,Z,ie,q){const Q=s.convert(O.format,O.colorSpace),G=s.convert(O.type),ce=y(O.internalFormat,Q,G,O.colorSpace),fe=i.get(E),ee=i.get(O);if(ee.__renderTarget=E,!fe.__hasExternalTextures){const me=Math.max(1,E.width>>q),Ae=Math.max(1,E.height>>q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,q,ce,me,Ae,E.depth,0,Q,G,null):n.texImage2D(ie,q,ce,me,Ae,0,Q,G,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ye(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ie,ee.__webglTexture,0,be(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ie,ee.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(P,E,O){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const Z=E.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,q=S(E.stencilBuffer,ie),Q=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=be(E);Ye(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,G,q,E.width,E.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,G,q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,P)}else{const Z=E.textures;for(let ie=0;ie<Z.length;ie++){const q=Z[ie],Q=s.convert(q.format,q.colorSpace),G=s.convert(q.type),ce=y(q.internalFormat,Q,G,q.colorSpace),fe=be(E);O&&Ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ce,E.width,E.height):Ye(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ce,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const ie=Z.__webglTexture,q=be(E);if(E.depthTexture.format===Na)Ye(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(E.depthTexture.format===La)Ye(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function et(P){const E=i.get(P),O=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=Z}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?Ne(E.__webglFramebuffer[0],P):Ne(E.__webglFramebuffer,P)}else if(O){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=t.createRenderbuffer(),Xe(E.__webglDepthbuffer[Z],P,!1);else{const ie=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,q)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Xe(E.__webglDepthbuffer,P,!1);else{const ie=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function lt(P,E,O){const Z=i.get(P);E!==void 0&&Ee(Z.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&et(P)}function Ge(P){const E=P.texture,O=i.get(P),Z=i.get(E);P.addEventListener("dispose",b);const ie=P.textures,q=P.isWebGLCubeRenderTarget===!0,Q=ie.length>1;if(Q||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=E.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let G=0;G<6;G++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[G]=[];for(let ce=0;ce<E.mipmaps.length;ce++)O.__webglFramebuffer[G][ce]=t.createFramebuffer()}else O.__webglFramebuffer[G]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let G=0;G<E.mipmaps.length;G++)O.__webglFramebuffer[G]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Q)for(let G=0,ce=ie.length;G<ce;G++){const fe=i.get(ie[G]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Ye(P)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let G=0;G<ie.length;G++){const ce=ie[G];O.__webglColorRenderbuffer[G]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[G]);const fe=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),me=y(ce.internalFormat,fe,ee,ce.colorSpace,P.isXRRenderTarget===!0),Ae=be(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,O.__webglColorRenderbuffer[G])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Xe(O.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Se(t.TEXTURE_CUBE_MAP,E);for(let G=0;G<6;G++)if(E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)Ee(O.__webglFramebuffer[G][ce],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce);else Ee(O.__webglFramebuffer[G],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);g(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){for(let G=0,ce=ie.length;G<ce;G++){const fe=ie[G],ee=i.get(fe);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Se(t.TEXTURE_2D,fe),Ee(O.__webglFramebuffer,P,fe,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,0),g(fe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let G=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(G=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(G,Z.__webglTexture),Se(G,E),E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)Ee(O.__webglFramebuffer[ce],P,E,t.COLOR_ATTACHMENT0,G,ce);else Ee(O.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,G,0);g(E)&&d(G),n.unbindTexture()}P.depthBuffer&&et(P)}function N(P){const E=P.textures;for(let O=0,Z=E.length;O<Z;O++){const ie=E[O];if(g(ie)){const q=x(P),Q=i.get(ie).__webglTexture;n.bindTexture(q,Q),d(q),n.unbindTexture()}}}const $e=[],Ke=[];function rt(P){if(P.samples>0){if(Ye(P)===!1){const E=P.textures,O=P.width,Z=P.height;let ie=t.COLOR_BUFFER_BIT;const q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=i.get(P),G=E.length>1;if(G)for(let fe=0;fe<E.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);const ce=P.texture.mipmaps;ce&&ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),G){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const ee=i.get(E[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,O,Z,0,0,O,Z,ie,t.NEAREST),l===!0&&($e.length=0,Ke.length=0,$e.push(t.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&($e.push(q),Ke.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),G)for(let fe=0;fe<E.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const ee=i.get(E[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function be(P){return Math.min(r.maxSamples,P.samples)}function Ye(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(P){const E=a.render.frame;p.get(P)!==E&&(p.set(P,E),P.update())}function Oe(P,E){const O=P.colorSpace,Z=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==Ps&&O!==Fi&&(Je.getTransfer(O)===at?(Z!==zn||ie!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function Et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=D,this.rebindTextures=lt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ye}function wT(t,e){function n(i,r=Fi){let s;const a=Je.getTransfer(r);if(i===Si)return t.UNSIGNED_BYTE;if(i===kf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Of)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Dv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Nv)return t.BYTE;if(i===Lv)return t.SHORT;if(i===Ra)return t.UNSIGNED_SHORT;if(i===Ff)return t.INT;if(i===Lr)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Oa)return t.HALF_FLOAT;if(i===Uv)return t.ALPHA;if(i===Iv)return t.RGB;if(i===zn)return t.RGBA;if(i===Na)return t.DEPTH_COMPONENT;if(i===La)return t.DEPTH_STENCIL;if(i===Fv)return t.RED;if(i===zf)return t.RED_INTEGER;if(i===kv)return t.RG;if(i===Bf)return t.RG_INTEGER;if(i===jf)return t.RGBA_INTEGER;if(i===$o||i===qo||i===Yo||i===Ko)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ld||i===cd||i===ud||i===dd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ld)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ud)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fd||i===hd||i===pd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fd||i===hd)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===md||i===gd||i===vd||i===xd||i===_d||i===yd||i===Sd||i===Md||i===Ed||i===wd||i===Td||i===bd||i===Ad||i===Cd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===md)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_d)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Md)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ed)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Td)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ad)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===Rd||i===Pd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zo)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ov||i===Nd||i===Ld||i===Dd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ld)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const TT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qi({vertexShader:TT,fragmentShader:bT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new $l(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CT extends Is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,p=null,h=null,f=null,m=null,v=null;const _=new AT,g=n.getContextAttributes();let d=null,x=null;const y=[],S=[],C=new ot;let A=null;const b=new Tn;b.viewport=new Tt;const R=new Tn;R.viewport=new Tt;const T=[b,R],M=new YS;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let re=y[V];return re===void 0&&(re=new $c,y[V]=re),re.getTargetRaySpace()},this.getControllerGrip=function(V){let re=y[V];return re===void 0&&(re=new $c,y[V]=re),re.getGripSpace()},this.getHand=function(V){let re=y[V];return re===void 0&&(re=new $c,y[V]=re),re.getHandSpace()};function I(V){const re=S.indexOf(V.inputSource);if(re===-1)return;const xe=y[re];xe!==void 0&&(xe.update(V.inputSource,V.frame,u||a),xe.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",W);for(let V=0;V<y.length;V++){const re=S[V];re!==null&&(S[V]=null,y[V].disconnect(re))}L=null,z=null,_.reset(),e.setRenderTarget(d),m=null,f=null,h=null,r=null,x=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",$),r.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,de=null,Ee=null;g.depth&&(Ee=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=g.stencil?La:Na,de=g.stencil?Pa:Lr);const Xe={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Dr(f.textureWidth,f.textureHeight,{format:zn,type:Si,depthTexture:new Jv(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,xe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Dr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(V){for(let re=0;re<V.removed.length;re++){const xe=V.removed[re],de=S.indexOf(xe);de>=0&&(S[de]=null,y[de].disconnect(xe))}for(let re=0;re<V.added.length;re++){const xe=V.added[re];let de=S.indexOf(xe);if(de===-1){for(let Xe=0;Xe<y.length;Xe++)if(Xe>=S.length){S.push(xe),de=Xe;break}else if(S[Xe]===null){S[Xe]=xe,de=Xe;break}if(de===-1)break}const Ee=y[de];Ee&&Ee.connect(xe)}}const Y=new j,J=new j;function D(V,re,xe){Y.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(xe.matrixWorld);const de=Y.distanceTo(J),Ee=re.projectionMatrix.elements,Xe=xe.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),et=Ee[14]/(Ee[10]+1),lt=(Ee[9]+1)/Ee[5],Ge=(Ee[9]-1)/Ee[5],N=(Ee[8]-1)/Ee[0],$e=(Xe[8]+1)/Xe[0],Ke=Ne*N,rt=Ne*$e,be=de/(-N+$e),Ye=be*-N;if(re.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ye),V.translateZ(be),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ee[10]===-1)V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Re=Ne+be,Oe=et+be,Et=Ke-Ye,P=rt+(de-Ye),E=lt*et/Oe*Re,O=Ge*et/Oe*Re;V.projectionMatrix.makePerspective(Et,P,E,O,Re,Oe),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function X(V,re){re===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(re.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let re=V.near,xe=V.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),M.near=R.near=b.near=re,M.far=R.far=b.far=xe,(L!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,z=M.far),b.layers.mask=V.layers.mask|2,R.layers.mask=V.layers.mask|4,M.layers.mask=b.layers.mask|R.layers.mask;const de=V.parent,Ee=M.cameras;X(M,de);for(let Xe=0;Xe<Ee.length;Xe++)X(Ee[Xe],de);Ee.length===2?D(M,b,R):M.projectionMatrix.copy(b.projectionMatrix),te(V,M,de)};function te(V,re,xe){xe===null?V.matrix.copy(re.matrixWorld):(V.matrix.copy(xe.matrixWorld),V.matrix.invert(),V.matrix.multiply(re.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ud*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ue=null;function Se(V,re){if(p=re.getViewerPose(u||a),v=re,p!==null){const xe=p.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let de=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Ne=0;Ne<xe.length;Ne++){const et=xe[Ne];let lt=null;if(m!==null)lt=m.getViewport(et);else{const N=h.getViewSubImage(f,et);lt=N.viewport,Ne===0&&(e.setRenderTargetTextures(x,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(x))}let Ge=T[Ne];Ge===void 0&&(Ge=new Tn,Ge.layers.enable(Ne),Ge.viewport=new Tt,T[Ne]=Ge),Ge.matrix.fromArray(et.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(et.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(lt.x,lt.y,lt.width,lt.height),Ne===0&&(M.matrix.copy(Ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(Ge)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Ne=h.getDepthInformation(xe[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,r.renderState)}}for(let xe=0;xe<y.length;xe++){const de=S[xe],Ee=y[xe];de!==null&&Ee!==void 0&&Ee.update(de,re,u||a)}ue&&ue(V,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const He=new e0;He.setAnimationLoop(Se),this.setAnimationLoop=function(V){ue=V},this.dispose=function(){}}}const ur=new Mi,RT=new bt;function PT(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,qv(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,y,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),p(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),_(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,x,y):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===an&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===an&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),y=x.envMap,S=x.envMapRotation;y&&(g.envMap.value=y,ur.copy(S),ur.x*=-1,ur.y*=-1,ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.envMapRotation.value.setFromMatrix4(RT.makeRotationFromEuler(ur)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=y*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function p(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const S=y.program;i.uniformBlockBinding(x,S)}function u(x,y){let S=r[x.id];S===void 0&&(v(x),S=p(x),r[x.id]=S,x.addEventListener("dispose",g));const C=y.program;i.updateUBOMapping(x,C);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function p(x){const y=h();x.__bindingPointIndex=y;const S=t.createBuffer(),C=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=r[x.id],S=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,b=S.length;A<b;A++){const R=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,M=R.length;T<M;T++){const L=R[T];if(m(L,A,T,C)===!0){const z=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let W=0;W<I.length;W++){const Y=I[W],J=_(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,z+$,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,y,S,C){const A=x.value,b=y+"_"+S;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const R=C[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function v(x){const y=x.uniforms;let S=0;const C=16;for(let b=0,R=y.length;b<R;b++){const T=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,L=T.length;M<L;M++){const z=T[M],I=Array.isArray(z.value)?z.value:[z.value];for(let $=0,W=I.length;$<W;$++){const Y=I[$],J=_(Y),D=S%C,X=D%J.boundary,te=D+X;S+=X,te!==0&&C-te<J.storage&&(S+=C-te),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=J.storage}}}const A=S%C;return A>0&&(S+=C-A),x.__size=S,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class LT{constructor(e={}){const{canvas:n=hS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const x=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=Mn;let A=0,b=0,R=null,T=-1,M=null;const L=new Tt,z=new Tt;let I=null;const $=new nt(0);let W=0,Y=n.width,J=n.height,D=1,X=null,te=null;const ue=new Tt(0,0,Y,J),Se=new Tt(0,0,Y,J);let He=!1;const V=new Zv;let re=!1,xe=!1;const de=new bt,Ee=new bt,Xe=new j,Ne=new Tt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ge(){return R===null?D:1}let N=i;function $e(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${If}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",ne,!1),N===null){const F="webgl2";if(N=$e(F,w),N===null)throw $e(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ke,rt,be,Ye,Re,Oe,Et,P,E,O,Z,ie,q,Q,G,ce,fe,ee,me,Ae,Ce,he,Ie,U;function ge(){Ke=new H1(N),Ke.init(),he=new wT(N,Ke),rt=new I1(N,Ke,e,he),be=new MT(N,Ke),rt.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),Ye=new W1(N),Re=new cT,Oe=new ET(N,Ke,be,Re,rt,he,Ye),Et=new k1(S),P=new j1(S),E=new ZS(N),Ie=new D1(N,E),O=new V1(N,E,Ye,Ie),Z=new $1(N,O,E,Ye),me=new X1(N,rt,Oe),ce=new F1(Re),ie=new lT(S,Et,P,Ke,rt,Ie,ce),q=new PT(S,Re),Q=new dT,G=new vT(Ke),ee=new L1(S,Et,P,be,Z,m,l),fe=new yT(S,Z,rt),U=new NT(N,Ye,rt,be),Ae=new U1(N,Ke,Ye),Ce=new G1(N,Ke,Ye),Ye.programs=ie.programs,S.capabilities=rt,S.extensions=Ke,S.properties=Re,S.renderLists=Q,S.shadowMap=fe,S.state=be,S.info=Ye}ge();const se=new CT(S,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(Y,J,!1))},this.getSize=function(w){return w.set(Y,J)},this.setSize=function(w,F,B=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,J=F,n.width=Math.floor(w*D),n.height=Math.floor(F*D),B===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Y*D,J*D).floor()},this.setDrawingBufferSize=function(w,F,B){Y=w,J=F,D=B,n.width=Math.floor(w*B),n.height=Math.floor(F*B),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(ue)},this.setViewport=function(w,F,B,H){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,F,B,H),be.viewport(L.copy(ue).multiplyScalar(D).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,F,B,H){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,F,B,H),be.scissor(z.copy(Se).multiplyScalar(D).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(w){be.setScissorTest(He=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){te=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,B=!0){let H=0;if(w){let k=!1;if(R!==null){const le=R.texture.format;k=le===jf||le===Bf||le===zf}if(k){const le=R.texture.type,ve=le===Si||le===Lr||le===Ra||le===Pa||le===kf||le===Of,Te=ee.getClearColor(),ye=ee.getClearAlpha(),De=Te.r,Ue=Te.g,Pe=Te.b;ve?(v[0]=De,v[1]=Ue,v[2]=Pe,v[3]=ye,N.clearBufferuiv(N.COLOR,0,v)):(_[0]=De,_[1]=Ue,_[2]=Pe,_[3]=ye,N.clearBufferiv(N.COLOR,0,_))}else H|=N.COLOR_BUFFER_BIT}F&&(H|=N.DEPTH_BUFFER_BIT),B&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),ee.dispose(),Q.dispose(),G.dispose(),Re.dispose(),Et.dispose(),P.dispose(),Z.dispose(),Ie.dispose(),U.dispose(),ie.dispose(),se.dispose(),se.removeEventListener("sessionstart",Gf),se.removeEventListener("sessionend",Wf),ir.stop()};function Me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=Ye.autoReset,F=fe.enabled,B=fe.autoUpdate,H=fe.needsUpdate,k=fe.type;ge(),Ye.autoReset=w,fe.enabled=F,fe.autoUpdate=B,fe.needsUpdate=H,fe.type=k}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function we(w){const F=w.target;F.removeEventListener("dispose",we),ke(F)}function ke(w){dt(w),Re.remove(w)}function dt(w){const F=Re.get(w).programs;F!==void 0&&(F.forEach(function(B){ie.releaseProgram(B)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,B,H,k,le){F===null&&(F=et);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Te=a0(w,F,B,H,k);be.setMaterial(H,ve);let ye=B.index,De=1;if(H.wireframe===!0){if(ye=O.getWireframeAttribute(B),ye===void 0)return;De=2}const Ue=B.drawRange,Pe=B.attributes.position;let We=Ue.start*De,st=(Ue.start+Ue.count)*De;le!==null&&(We=Math.max(We,le.start*De),st=Math.min(st,(le.start+le.count)*De)),ye!==null?(We=Math.max(We,0),st=Math.min(st,ye.count)):Pe!=null&&(We=Math.max(We,0),st=Math.min(st,Pe.count));const St=st-We;if(St<0||St===1/0)return;Ie.setup(k,H,Te,B,ye);let ft,ct=Ae;if(ye!==null&&(ft=E.get(ye),ct=Ce,ct.setIndex(ft)),k.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*Ge()),ct.setMode(N.LINES)):ct.setMode(N.TRIANGLES);else if(k.isLine){let Le=H.linewidth;Le===void 0&&(Le=1),be.setLineWidth(Le*Ge()),k.isLineSegments?ct.setMode(N.LINES):k.isLineLoop?ct.setMode(N.LINE_LOOP):ct.setMode(N.LINE_STRIP)}else k.isPoints?ct.setMode(N.POINTS):k.isSprite&&ct.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Le=k._multiDrawStarts,vt=k._multiDrawCounts,Qe=k._multiDrawCount,cn=ye?E.get(ye).bytesPerElement:1,Fr=Re.get(H).currentProgram.getUniforms();for(let un=0;un<Qe;un++)Fr.setValue(N,"_gl_DrawID",un),ct.render(Le[un]/cn,vt[un])}else if(k.isInstancedMesh)ct.renderInstances(We,St,k.count);else if(B.isInstancedBufferGeometry){const Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,vt=Math.min(B.instanceCount,Le);ct.renderInstances(We,St,vt)}else ct.render(We,St)};function tt(w,F,B){w.transparent===!0&&w.side===ci&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Wa(w,F,B),w.side=Zi,w.needsUpdate=!0,Wa(w,F,B),w.side=ci):Wa(w,F,B)}this.compile=function(w,F,B=null){B===null&&(B=w),d=G.get(B),d.init(F),y.push(d),B.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),w!==B&&w.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const H=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const le=k.material;if(le)if(Array.isArray(le))for(let ve=0;ve<le.length;ve++){const Te=le[ve];tt(Te,B,k),H.add(Te)}else tt(le,B,k),H.add(le)}),d=y.pop(),H},this.compileAsync=function(w,F,B=null){const H=this.compile(w,F,B);return new Promise(k=>{function le(){if(H.forEach(function(ve){Re.get(ve).currentProgram.isReady()&&H.delete(ve)}),H.size===0){k(w);return}setTimeout(le,10)}Ke.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Pn=null;function Jn(w){Pn&&Pn(w)}function Gf(){ir.stop()}function Wf(){ir.start()}const ir=new e0;ir.setAnimationLoop(Jn),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(w){Pn=w,se.setAnimationLoop(w),w===null?ir.stop():ir.start()},se.addEventListener("sessionstart",Gf),se.addEventListener("sessionend",Wf),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,F,R),d=G.get(w,y.length),d.init(F),y.push(d),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V.setFromProjectionMatrix(Ee),xe=this.localClippingEnabled,re=ce.init(this.clippingPlanes,xe),g=Q.get(w,x.length),g.init(),x.push(g),se.enabled===!0&&se.isPresenting===!0){const le=S.xr.getDepthSensingMesh();le!==null&&Kl(le,F,-1/0,S.sortObjects)}Kl(w,F,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(X,te),lt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,lt&&ee.addToRenderList(g,w),this.info.render.frame++,re===!0&&ce.beginShadows();const B=d.state.shadowsArray;fe.render(B,w,F),re===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,k=g.transmissive;if(d.setupLights(),F.isArrayCamera){const le=F.cameras;if(k.length>0)for(let ve=0,Te=le.length;ve<Te;ve++){const ye=le[ve];$f(H,k,w,ye)}lt&&ee.render(w);for(let ve=0,Te=le.length;ve<Te;ve++){const ye=le[ve];Xf(g,w,ye,ye.viewport)}}else k.length>0&&$f(H,k,w,F),lt&&ee.render(w),Xf(g,w,F);R!==null&&b===0&&(Oe.updateMultisampleRenderTarget(R),Oe.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(S,w,F),Ie.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],re===!0&&ce.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Kl(w,F,B,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){H&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const ve=Z.update(w),Te=w.material;Te.visible&&g.push(w,ve,Te,B,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||V.intersectsObject(w))){const ve=Z.update(w),Te=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ne.copy(ve.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){const ye=ve.groups;for(let De=0,Ue=ye.length;De<Ue;De++){const Pe=ye[De],We=Te[Pe.materialIndex];We&&We.visible&&g.push(w,ve,We,B,Ne.z,Pe)}}else Te.visible&&g.push(w,ve,Te,B,Ne.z,null)}}const le=w.children;for(let ve=0,Te=le.length;ve<Te;ve++)Kl(le[ve],F,B,H)}function Xf(w,F,B,H){const k=w.opaque,le=w.transmissive,ve=w.transparent;d.setupLightsView(B),re===!0&&ce.setGlobalState(S.clippingPlanes,B),H&&be.viewport(L.copy(H)),k.length>0&&Ga(k,F,B),le.length>0&&Ga(le,F,B),ve.length>0&&Ga(ve,F,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function $f(w,F,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Dr(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Oa:Si,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const le=d.state.transmissionRenderTarget[H.id],ve=H.viewport||L;le.setSize(ve.z*S.transmissionResolutionScale,ve.w*S.transmissionResolutionScale);const Te=S.getRenderTarget(),ye=S.getActiveCubeFace(),De=S.getActiveMipmapLevel();S.setRenderTarget(le),S.getClearColor($),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),lt&&ee.render(B);const Ue=S.toneMapping;S.toneMapping=qi;const Pe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),re===!0&&ce.setGlobalState(S.clippingPlanes,H),Ga(w,B,H),Oe.updateMultisampleRenderTarget(le),Oe.updateRenderTargetMipmap(le),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let st=0,St=F.length;st<St;st++){const ft=F[st],ct=ft.object,Le=ft.geometry,vt=ft.material,Qe=ft.group;if(vt.side===ci&&ct.layers.test(H.layers)){const cn=vt.side;vt.side=an,vt.needsUpdate=!0,qf(ct,B,H,Le,vt,Qe),vt.side=cn,vt.needsUpdate=!0,We=!0}}We===!0&&(Oe.updateMultisampleRenderTarget(le),Oe.updateRenderTargetMipmap(le))}S.setRenderTarget(Te,ye,De),S.setClearColor($,W),Pe!==void 0&&(H.viewport=Pe),S.toneMapping=Ue}function Ga(w,F,B){const H=F.isScene===!0?F.overrideMaterial:null;for(let k=0,le=w.length;k<le;k++){const ve=w[k],Te=ve.object,ye=ve.geometry,De=ve.group;let Ue=ve.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),Te.layers.test(B.layers)&&qf(Te,F,B,ye,Ue,De)}}function qf(w,F,B,H,k,le){w.onBeforeRender(S,F,B,H,k,le),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(S,F,B,H,w,le),k.transparent===!0&&k.side===ci&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,S.renderBufferDirect(B,F,H,k,w,le),k.side=Zi,k.needsUpdate=!0,S.renderBufferDirect(B,F,H,k,w,le),k.side=ci):S.renderBufferDirect(B,F,H,k,w,le),w.onAfterRender(S,F,B,H,k,le)}function Wa(w,F,B){F.isScene!==!0&&(F=et);const H=Re.get(w),k=d.state.lights,le=d.state.shadowsArray,ve=k.state.version,Te=ie.getParameters(w,k.state,le,F,B),ye=ie.getProgramCacheKey(Te);let De=H.programs;H.environment=w.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(w.isMeshStandardMaterial?P:Et).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",we),De=new Map,H.programs=De);let Ue=De.get(ye);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===ve)return Kf(w,Te),Ue}else Te.uniforms=ie.getUniforms(w),w.onBeforeCompile(Te,S),Ue=ie.acquireProgram(Te,ye),De.set(ye,Ue),H.uniforms=Te.uniforms;const Pe=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=ce.uniform),Kf(w,Te),H.needsLights=l0(w),H.lightsStateVersion=ve,H.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMap.value=k.state.directionalShadowMap,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotShadowMap.value=k.state.spotShadowMap,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMap.value=k.state.pointShadowMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Yf(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Qo.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Kf(w,F){const B=Re.get(w);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.batchingColor=F.batchingColor,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.instancingMorph=F.instancingMorph,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function a0(w,F,B,H,k){F.isScene!==!0&&(F=et),Oe.resetTextureUnits();const le=F.fog,ve=H.isMeshStandardMaterial?F.environment:null,Te=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ps,ye=(H.isMeshStandardMaterial?P:Et).get(H.envMap||ve),De=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!B.morphAttributes.position,We=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let St=qi;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=S.toneMapping);const ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ct=ft!==void 0?ft.length:0,Le=Re.get(H),vt=d.state.lights;if(re===!0&&(xe===!0||w!==M)){const Xt=w===M&&H.id===T;ce.setState(H,w,Xt)}let Qe=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==vt.state.version||Le.outputColorSpace!==Te||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==ye||H.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ce.numPlanes||Le.numIntersection!==ce.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Ue||Le.morphTargets!==Pe||Le.morphNormals!==We||Le.morphColors!==st||Le.toneMapping!==St||Le.morphTargetsCount!==ct)&&(Qe=!0):(Qe=!0,Le.__version=H.version);let cn=Le.currentProgram;Qe===!0&&(cn=Wa(H,F,k));let Fr=!1,un=!1,ks=!1;const mt=cn.getUniforms(),_n=Le.uniforms;if(be.useProgram(cn.program)&&(Fr=!0,un=!0,ks=!0),H.id!==T&&(T=H.id,un=!0),Fr||M!==w){be.buffers.depth.getReversed()?(de.copy(w.projectionMatrix),mS(de),gS(de),mt.setValue(N,"projectionMatrix",de)):mt.setValue(N,"projectionMatrix",w.projectionMatrix),mt.setValue(N,"viewMatrix",w.matrixWorldInverse);const Qt=mt.map.cameraPosition;Qt!==void 0&&Qt.setValue(N,Xe.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,un=!0,ks=!0)}if(k.isSkinnedMesh){mt.setOptional(N,k,"bindMatrix"),mt.setOptional(N,k,"bindMatrixInverse");const Xt=k.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),mt.setValue(N,"boneTexture",Xt.boneTexture,Oe))}k.isBatchedMesh&&(mt.setOptional(N,k,"batchingTexture"),mt.setValue(N,"batchingTexture",k._matricesTexture,Oe),mt.setOptional(N,k,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",k._indirectTexture,Oe),mt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",k._colorsTexture,Oe));const yn=B.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&me.update(k,B,cn),(un||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,mt.setValue(N,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(_n.envMap.value=ye,_n.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),un&&(mt.setValue(N,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&o0(_n,ks),le&&H.fog===!0&&q.refreshFogUniforms(_n,le),q.refreshMaterialUniforms(_n,H,D,J,d.state.transmissionRenderTarget[w.id]),Qo.upload(N,Yf(Le),_n,Oe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qo.upload(N,Yf(Le),_n,Oe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(N,"center",k.center),mt.setValue(N,"modelViewMatrix",k.modelViewMatrix),mt.setValue(N,"normalMatrix",k.normalMatrix),mt.setValue(N,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Xt=H.uniformsGroups;for(let Qt=0,Zl=Xt.length;Qt<Zl;Qt++){const rr=Xt[Qt];U.update(rr,cn),U.bind(rr,cn)}}return cn}function o0(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function l0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,F,B){const H=Re.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Re.get(w.texture).__webglTexture=F,Re.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const B=Re.get(w);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0};const c0=N.createFramebuffer();this.setRenderTarget=function(w,F=0,B=0){R=w,A=F,b=B;let H=!0,k=null,le=!1,ve=!1;if(w){const ye=Re.get(w);if(ye.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)Oe.setupRenderTarget(w);else if(ye.__hasExternalTextures)Oe.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pe=w.depthTexture;if(ye.__boundDepthTexture!==Pe){if(Pe!==null&&Re.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(w)}}const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ve=!0);const Ue=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?k=Ue[F][B]:k=Ue[F],le=!0):w.samples>0&&Oe.useMultisampledRTT(w)===!1?k=Re.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[B]:k=Ue,L.copy(w.viewport),z.copy(w.scissor),I=w.scissorTest}else L.copy(ue).multiplyScalar(D).floor(),z.copy(Se).multiplyScalar(D).floor(),I=He;if(B!==0&&(k=c0),be.bindFramebuffer(N.FRAMEBUFFER,k)&&H&&be.drawBuffers(w,k),be.viewport(L),be.scissor(z),be.setScissorTest(I),le){const ye=Re.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,B)}else if(ve){const ye=Re.get(w.texture),De=F;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,B,De)}else if(w!==null&&B!==0){const ye=Re.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,B)}T=-1},this.readRenderTargetPixels=function(w,F,B,H,k,le,ve,Te=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){be.bindFramebuffer(N.FRAMEBUFFER,ye);try{const De=w.textures[Te],Ue=De.format,Pe=De.type;if(!rt.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&B>=0&&B<=w.height-k&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Te),N.readPixels(F,B,H,k,he.convert(Ue),he.convert(Pe),le))}finally{const De=R!==null?Re.get(R).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,F,B,H,k,le,ve,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye)if(F>=0&&F<=w.width-H&&B>=0&&B<=w.height-k){be.bindFramebuffer(N.FRAMEBUFFER,ye);const De=w.textures[Te],Ue=De.format,Pe=De.type;if(!rt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,We),N.bufferData(N.PIXEL_PACK_BUFFER,le.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Te),N.readPixels(F,B,H,k,he.convert(Ue),he.convert(Pe),0);const st=R!==null?Re.get(R).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,st);const St=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await pS(N,St,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,We),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,le),N.deleteBuffer(We),N.deleteSync(St),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,B=0){const H=Math.pow(2,-B),k=Math.floor(w.image.width*H),le=Math.floor(w.image.height*H),ve=F!==null?F.x:0,Te=F!==null?F.y:0;Oe.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ve,Te,k,le),be.unbindTexture()};const u0=N.createFramebuffer(),d0=N.createFramebuffer();this.copyTextureToTexture=function(w,F,B=null,H=null,k=0,le=null){le===null&&(k!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=k,k=0):le=0);let ve,Te,ye,De,Ue,Pe,We,st,St;const ft=w.isCompressedTexture?w.mipmaps[le]:w.image;if(B!==null)ve=B.max.x-B.min.x,Te=B.max.y-B.min.y,ye=B.isBox3?B.max.z-B.min.z:1,De=B.min.x,Ue=B.min.y,Pe=B.isBox3?B.min.z:0;else{const yn=Math.pow(2,-k);ve=Math.floor(ft.width*yn),Te=Math.floor(ft.height*yn),w.isDataArrayTexture?ye=ft.depth:w.isData3DTexture?ye=Math.floor(ft.depth*yn):ye=1,De=0,Ue=0,Pe=0}H!==null?(We=H.x,st=H.y,St=H.z):(We=0,st=0,St=0);const ct=he.convert(F.format),Le=he.convert(F.type);let vt;F.isData3DTexture?(Oe.setTexture3D(F,0),vt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Oe.setTexture2DArray(F,0),vt=N.TEXTURE_2D_ARRAY):(Oe.setTexture2D(F,0),vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=N.getParameter(N.UNPACK_ROW_LENGTH),cn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fr=N.getParameter(N.UNPACK_SKIP_PIXELS),un=N.getParameter(N.UNPACK_SKIP_ROWS),ks=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,De),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe);const mt=w.isDataArrayTexture||w.isData3DTexture,_n=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const yn=Re.get(w),Xt=Re.get(F),Qt=Re.get(yn.__renderTarget),Zl=Re.get(Xt.__renderTarget);be.bindFramebuffer(N.READ_FRAMEBUFFER,Qt.__webglFramebuffer),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zl.__webglFramebuffer);for(let rr=0;rr<ye;rr++)mt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(w).__webglTexture,k,Pe+rr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(F).__webglTexture,le,St+rr)),N.blitFramebuffer(De,Ue,ve,Te,We,st,ve,Te,N.DEPTH_BUFFER_BIT,N.NEAREST);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||Re.has(w)){const yn=Re.get(w),Xt=Re.get(F);be.bindFramebuffer(N.READ_FRAMEBUFFER,u0),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,d0);for(let Qt=0;Qt<ye;Qt++)mt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yn.__webglTexture,k,Pe+Qt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yn.__webglTexture,k),_n?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xt.__webglTexture,le,St+Qt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xt.__webglTexture,le),k!==0?N.blitFramebuffer(De,Ue,ve,Te,We,st,ve,Te,N.COLOR_BUFFER_BIT,N.NEAREST):_n?N.copyTexSubImage3D(vt,le,We,st,St+Qt,De,Ue,ve,Te):N.copyTexSubImage2D(vt,le,We,st,De,Ue,ve,Te);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _n?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(vt,le,We,st,St,ve,Te,ye,ct,Le,ft.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(vt,le,We,st,St,ve,Te,ye,ct,ft.data):N.texSubImage3D(vt,le,We,st,St,ve,Te,ye,ct,Le,ft):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,le,We,st,ve,Te,ct,Le,ft.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,le,We,st,ft.width,ft.height,ct,ft.data):N.texSubImage2D(N.TEXTURE_2D,le,We,st,ve,Te,ct,Le,ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,Qe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,cn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fr),N.pixelStorei(N.UNPACK_SKIP_ROWS,un),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ks),le===0&&F.generateMipmaps&&N.generateMipmap(vt),be.unbindTexture()},this.copyTextureToTexture3D=function(w,F,B=null,H=null,k=0){return xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,B,H,k)},this.initRenderTarget=function(w){Re.get(w).__webglFramebuffer===void 0&&Oe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Oe.setTextureCube(w,0):w.isData3DTexture?Oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Oe.setTexture2DArray(w,0):Oe.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){A=0,b=0,R=null,be.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const DT=()=>{const{setStage:t,setIsLocked:e,isLocked:n,resetPhotos:i}=nr(),[r,s]=K.useState(!1),[a,o]=K.useState(!1),[l,u]=K.useState(!1),[p,h]=K.useState(!1),[f,m]=K.useState(!1),[v,_]=K.useState(null),[g,d]=K.useState(!0),x=K.useRef(null),y=K.useRef(null),[S,C]=K.useState(!1),A=K.useRef(null),b=K.useRef(null),R=K.useRef(null);K.useEffect(()=>{const I=setTimeout(()=>{m(!0)},100),$=localStorage.getItem("backgroundVideo");if($)_($),d(!1);else{d(!0);const W=T();return()=>{clearTimeout(I),W&&W()}}return()=>{clearTimeout(I)}},[]),K.useEffect(()=>{if(g&&!v)return T()},[g,v]),K.useEffect(()=>{if(v&&y.current){const I=y.current,$=()=>{I.play().catch(console.error)},W=()=>{console.error("Video failed to load, falling back to animation"),_(null),d(!0)};return I.addEventListener("canplay",$),I.addEventListener("error",W),()=>{I.removeEventListener("canplay",$),I.removeEventListener("error",W)}}},[v]);const T=()=>{if(x.current)try{const I=new jS,$=new Tn(75,window.innerWidth/window.innerHeight,.1,1e3),W=new LT({canvas:x.current,alpha:!0,antialias:!0});W.setSize(window.innerWidth,window.innerHeight),W.setClearColor(0,0),A.current=I,b.current=W;const Y=[],J=new wi,D=50,X=new Float32Array(D*3);for(let V=0;V<D*3;V+=3)X[V]=(Math.random()-.5)*50,X[V+1]=(Math.random()-.5)*50,X[V+2]=(Math.random()-.5)*30;J.setAttribute("position",new Vn(X,3));const te=new Qv({color:9133302,size:2,transparent:!0,opacity:.6,blending:qu}),ue=new WS(J,te);I.add(ue),$.position.z=10;const Se=()=>{R.current=requestAnimationFrame(Se);const V=Date.now()*5e-4;ue.rotation.y=V*.1,ue.rotation.x=V*.05,$.position.x=Math.sin(V*.5)*.5,$.position.y=Math.cos(V*.3)*.3,$.lookAt(0,0,0),W.render(I,$)};Se();const He=()=>{$.aspect=window.innerWidth/window.innerHeight,$.updateProjectionMatrix(),W.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",He),()=>{window.removeEventListener("resize",He),R.current&&cancelAnimationFrame(R.current),b.current&&b.current.dispose(),J.dispose(),te.dispose()}}catch(I){return console.error("Three.js initialization error:",I),()=>{}}},M=()=>{h(!0)},L=()=>{h(!1),u(!0)},z=()=>{i(),console.log("Starting fresh photo session"),t("payment")};return n?c.jsx(up,{onUnlock:()=>e(!1)}):c.jsxs("div",{className:`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-opacity duration-1000 ${f?"opacity-100":"opacity-0"}`,children:[v?c.jsx("video",{ref:y,src:v,className:"absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0",style:{opacity:.3},autoPlay:!0,loop:!0,muted:!0,playsInline:!0}):g&&c.jsx("canvas",{ref:x,className:"absolute top-0 left-0 w-full h-full pointer-events-none z-0",style:{opacity:.3}}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/60 z-10"}),c.jsx("div",{className:"absolute top-6 right-6 z-30",children:c.jsx(je,{variant:"outline",onClick:M,className:"border-gray-600 text-gray-400 hover:text-gray-200 hover:border-gray-400 text-sm px-3 py-2 opacity-70 hover:opacity-100 backdrop-blur-sm",children:"Settings"})}),c.jsxs("div",{className:"relative z-20 min-h-screen flex flex-col",children:[c.jsx("div",{className:"flex-1 flex items-center justify-center px-6 py-12",children:c.jsxs("div",{className:"max-w-6xl w-full",children:[c.jsxs("div",{className:"text-center mb-16",children:[c.jsxs("div",{className:"inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8",children:[c.jsx(Df,{className:"text-primary",size:24}),c.jsx("span",{className:"text-primary font-semibold",children:"PixxeL8"})]}),c.jsxs("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight",children:["Capture",c.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary",children:"Memories"})]})]}),c.jsxs("div",{className:"bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-12",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Live Preview"}),c.jsx("p",{className:"text-gray-300 text-lg",children:"See yourself before you start"})]}),c.jsx("div",{className:"max-w-2xl mx-auto",children:c.jsxs("div",{className:"relative aspect-[4/3] bg-black rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl",children:[c.jsx(bv,{audio:!1,screenshotFormat:"image/jpeg",width:"100%",height:"100%",videoConstraints:{facingMode:"user"},onUserMedia:()=>C(!0),className:`${S?"opacity-100":"opacity-0"} transition-opacity duration-500`}),!S&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsx("div",{className:"animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"})}),c.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[c.jsx("div",{className:"absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/60 rounded-tl-lg"}),c.jsx("div",{className:"absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/60 rounded-tr-lg"}),c.jsx("div",{className:"absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/60 rounded-bl-lg"}),c.jsx("div",{className:"absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/60 rounded-br-lg"})]}),c.jsx("div",{className:"absolute bottom-6 left-6 right-6",children:c.jsx("div",{className:"bg-black/60 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20",children:c.jsx("p",{className:"text-white text-lg font-medium text-center",children:"Ready to create amazing memories?"})})})]})})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"max-w-4xl mx-auto",children:c.jsxs("button",{onClick:z,className:"w-full relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary text-white font-black text-4xl md:text-5xl py-8 md:py-12 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] group border-4 border-transparent",style:{background:"linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #10b981)",backgroundSize:"400% 400%",animation:"neonGradient 3s ease-in-out infinite, neonPulse 2s ease-in-out infinite",boxShadow:`
                      0 0 20px rgba(139, 92, 246, 0.5),
                      0 0 40px rgba(236, 72, 153, 0.3),
                      0 0 60px rgba(6, 182, 212, 0.2),
                      inset 0 0 20px rgba(255, 255, 255, 0.1)
                    `},children:[c.jsx("div",{className:"absolute inset-0 rounded-3xl opacity-75",style:{background:"linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #10b981, #8b5cf6)",backgroundSize:"400% 400%",animation:"neonBorderRace 2s linear infinite",padding:"4px",mask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",maskComposite:"xor"}}),c.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",style:{background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",animation:"neonShine 2s linear infinite"}}),c.jsxs("div",{className:"relative z-10 flex items-center justify-center gap-4",children:[c.jsx(oy,{className:"text-white animate-pulse",size:48}),c.jsx("span",{className:"tracking-wider",children:"START PHOTO SESSION"}),c.jsx("div",{className:"text-6xl animate-bounce",children:"📸"})]}),c.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden rounded-3xl",children:[c.jsx("div",{className:"absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-ping opacity-60",style:{animationDelay:"0s"}}),c.jsx("div",{className:"absolute top-8 right-12 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60",style:{animationDelay:"0.5s"}}),c.jsx("div",{className:"absolute bottom-6 left-16 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60",style:{animationDelay:"1s"}}),c.jsx("div",{className:"absolute bottom-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60",style:{animationDelay:"1.5s"}}),c.jsx("div",{className:"absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-60",style:{animationDelay:"2s"}}),c.jsx("div",{className:"absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60",style:{animationDelay:"2.5s"}})]})]})}),c.jsxs("div",{className:"mt-6 flex items-center justify-center gap-8 text-sm text-gray-400",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(q_,{size:16}),c.jsx("span",{children:"2-3 minutes"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(xy,{size:16}),c.jsx("span",{children:"Perfect for groups"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(W_,{size:16}),c.jsx("span",{children:"Professional quality"})]})]})]})]})}),c.jsx("div",{className:"py-6 text-center",children:c.jsx("div",{className:"text-xs text-gray-500 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/30 inline-block",children:"Developed by @akshaykumarbp2004@gmail.com"})})]}),r&&c.jsx(Sy,{onClose:()=>s(!1)}),a&&c.jsx(My,{onClose:()=>o(!1)}),p&&c.jsx(up,{onUnlock:L,onCancel:()=>h(!1)}),l&&c.jsx(Ey,{onClose:()=>u(!1)})]})},Yl=({steps:t,currentStep:e})=>c.jsxs("div",{className:"w-full py-4",children:[c.jsx("div",{className:"flex justify-between mb-2",children:t.map((n,i)=>c.jsxs("div",{className:`flex flex-col items-center ${i<=e?"text-primary":"text-gray-500"}`,children:[c.jsx("div",{className:`
                flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium mb-1
                ${i<e?"bg-primary text-white":""}
                ${i===e?"bg-primary/20 text-primary border-2 border-primary":""}
                ${i>e?"bg-gray-800 text-gray-500 border border-gray-700":""}
              `,children:i+1}),c.jsx("span",{className:"text-xs hidden sm:block",children:n})]},i))}),c.jsx("div",{className:"relative h-1 bg-gray-700 rounded-full",children:c.jsx("div",{className:"absolute h-1 bg-primary rounded-full transition-all duration-300 ease-in-out",style:{width:`${e/(t.length-1)*100}%`}})})]}),UT=({seconds:t,onComplete:e,photoIndex:n,isGhibliMode:i})=>{const[r,s]=K.useState(t),[a,o]=K.useState("message"),[l,u]=K.useState(0),p=["Smile please! 😊","Say cheese! 🧀","Show me that beautiful smile! ✨","Ready to shine? 🌟","Let's capture some magic! 🎭","Time to sparkle! ✨","Give me your best pose! 📸","You look amazing! 💫","Strike a pose! 🕺","Show me those pearly whites! 😁","Ready for some fun? 🎉","Let's make memories! 💝"],h=["Channel your inner Totoro! 🌳","Feel the magic of Ghibli! ✨","Let the forest spirits guide you! 🧚‍♀️","Embrace the Ghibli magic! 🎭","Time for some anime magic! ⭐","Ready for your Ghibli transformation! 🦋"],f=()=>i&&(n===0||n===2)?p[l%p.length]:i&&(n===1||n===3)?h[l%h.length]:p[l%p.length];K.useEffect(()=>{u(Math.floor(Math.random()*p.length));const v=setTimeout(()=>{o("countdown"),s(3)},3e3);return()=>clearTimeout(v)},[]),K.useEffect(()=>{if(a==="countdown"){if(r<=0){o("ready"),setTimeout(()=>{o("capture"),setTimeout(()=>{e()},500)},500);return}const v=setTimeout(()=>{s(r-1)},1e3);return()=>clearTimeout(v)}},[r,a,e]);const m=()=>{switch(a){case"message":return c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-6xl mb-6 animate-bounce",children:i&&(n===1||n===3)?"✨":"😊"}),c.jsx("div",{className:"text-4xl font-bold text-white mb-4 animate-pulse",children:f()}),c.jsx("div",{className:"text-xl text-yellow-400",children:"Get ready in 3 seconds..."})]});case"countdown":return c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-8xl font-bold text-white animate-bounce-slow",style:{textShadow:"0 0 20px rgba(139, 92, 246, 0.8)"},children:r}),c.jsx("div",{className:"text-2xl text-gray-300 mt-4",children:r===3?"Get ready...":r===2?"Almost there...":"Here we go!"})]});case"ready":return c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-6xl font-bold text-green-400 animate-pulse",children:"READY!"}),c.jsx("div",{className:"text-xl text-green-300 mt-2",children:"Hold your pose..."})]});case"capture":return c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-6xl font-bold text-yellow-400 animate-ping",children:"📸 CAPTURE!"}),c.jsx("div",{className:"text-xl text-yellow-300 mt-2",children:"Perfect!"})]});default:return null}};return c.jsx("div",{className:"absolute inset-0 z-20 bg-black/70 flex items-center justify-center",children:c.jsxs("div",{className:"relative",children:[m(),a==="countdown"&&c.jsx("div",{className:"absolute -inset-6 rounded-full border-4 border-primary animate-ping"})]})})},IT=()=>{const{setStage:t,addPhoto:e,photos:n,maxPhotos:i,userInfo:r}=nr(),[s,a]=K.useState(!1),[o,l]=K.useState(!1),[u,p]=K.useState(!1),[h,f]=K.useState(!1),[m,v]=K.useState(null),[_,g]=K.useState(!1),d=K.useRef(null),[x,y]=K.useState(!1),S=["Welcome","Payment","Capture","Preview","Delivery"];K.useEffect(()=>{y(r.packageType==="ghibli")},[r.packageType]);const C=K.useCallback(()=>{var z;if(n.length>=i){f(!1),m&&(clearTimeout(m),v(null));return}l(!0),setTimeout(()=>l(!1),300);const L=(z=d.current)==null?void 0:z.getScreenshot();if(L){let I="normal";x&&(n.length===1||n.length===3)&&(I="ghibli-ready"),e({dataUrl:L,filter:I,frame:null})}},[e,n.length,i,m,x]),A=K.useCallback(()=>{n.length>=i||(g(!0),setTimeout(()=>{g(!1),f(!0),a(!0)},3e3))},[n.length,i]),b=K.useCallback(()=>{f(!1),g(!1),m&&(clearTimeout(m),v(null))},[m]),R=K.useCallback(()=>{if(C(),a(!1),h&&n.length<i-1){const L=setTimeout(()=>{n.length<i-1&&h?a(!0):f(!1)},2e3);v(L)}else n.length>=i-1&&f(!1)},[C,h,n.length,i]),T=()=>{t("preview")},M=()=>{window.location.reload()};return K.useEffect(()=>{n.length>=i&&(m&&(clearTimeout(m),v(null)),f(!1),setTimeout(()=>{t("preview")},3e3))},[n.length,i,m]),K.useEffect(()=>()=>{m&&clearTimeout(m)},[m]),c.jsx("div",{className:"min-h-screen flex flex-col p-1 animate-fade-in",children:c.jsxs("div",{className:"w-full max-w-7xl mx-auto",children:[c.jsx(Yl,{steps:S,currentStep:2}),c.jsxs("div",{className:"flex justify-between items-center mb-4 px-4",children:[c.jsx(je,{variant:"outline",icon:Lf,onClick:()=>t("payment"),children:"Back"}),c.jsx(je,{variant:"outline",icon:cy,onClick:M,className:"border-orange-500 text-orange-400 hover:bg-orange-500/10",children:"Reset"}),n.length>0&&c.jsx(je,{variant:"primary",icon:Mv,iconPosition:"right",onClick:T,children:"Continue to Preview"})]}),c.jsxs(It,{animate:!0,className:"relative overflow-hidden mx-4",children:[c.jsx("div",{className:`absolute inset-0 bg-white z-10 pointer-events-none ${o?"opacity-70":"opacity-0"} transition-opacity duration-300`}),_&&c.jsx("div",{className:"absolute inset-0 z-20 bg-black/80 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-6xl font-bold text-primary mb-4 animate-pulse",children:"📸"}),c.jsx("h2",{className:"text-3xl font-bold text-white mb-2",children:"Get Ready!"}),x?c.jsxs("div",{className:"text-xl text-gray-300 mb-4",children:[c.jsxs("p",{className:"mb-2",children:["Prepare for ",i," continuous photos"]}),c.jsxs("div",{className:"bg-purple-900/30 border border-purple-400/50 rounded-lg p-3 text-base",children:[c.jsx("p",{className:"text-purple-300 font-medium",children:"✨ Ghibli Magic Mode ✨"}),c.jsxs("p",{className:"text-sm text-gray-300 mt-1",children:["📸 Photos 1 & 3: Normal style",c.jsx("br",{}),"🎨 Photos 2 & 4: Will be converted to Ghibli"]})]})]}):c.jsxs("p",{className:"text-xl text-gray-300 mb-4",children:["Prepare for ",i," continuous photos"]}),c.jsx("div",{className:"text-lg text-yellow-400",children:"Starting in 3 seconds..."})]})}),s&&c.jsx(UT,{seconds:7,onComplete:R,photoIndex:n.length,isGhibliMode:x}),c.jsxs("div",{className:"relative bg-black rounded-lg overflow-hidden",style:{minHeight:"400px"},children:[c.jsx(bv,{audio:!1,ref:d,screenshotFormat:"image/jpeg",width:1920,height:1080,videoConstraints:{facingMode:"user",width:{ideal:1920,min:640},height:{ideal:1080,min:480}},onUserMedia:()=>p(!0),className:`${u?"opacity-100":"opacity-0"} transition-opacity duration-300 w-full h-auto max-w-full transform scale-x-[-1]`,style:{aspectRatio:"auto",objectFit:"contain"}}),!u&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsx("div",{className:"animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"})}),c.jsxs("div",{className:"absolute inset-0 pointer-events-none border-2 border-white/30 rounded-lg",children:[c.jsx("div",{className:"absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white"}),c.jsx("div",{className:"absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white"}),c.jsx("div",{className:"absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white"}),c.jsx("div",{className:"absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white"})]}),h&&c.jsxs("div",{className:"absolute top-4 left-4 flex items-center gap-2 bg-red-500/80 px-3 py-1 rounded-full",children:[c.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-pulse"}),c.jsxs("span",{className:"text-white text-sm font-medium",children:["CAPTURING ",n.length+1,"/",i,x&&c.jsx("span",{className:"ml-2",children:n.length===1||n.length===3?"🎨 Ghibli":"📸 Normal"})]})]})]}),c.jsxs("div",{className:"mt-6 flex flex-col items-center",children:[c.jsxs("p",{className:"mb-4 text-center",children:[c.jsx("span",{className:"font-medium",children:n.length})," of ",c.jsx("span",{className:"font-medium",children:i})," photos taken"]}),n.length>0&&c.jsx("div",{className:"flex gap-2 mb-4 overflow-x-auto pb-2",children:n.map((L,z)=>c.jsxs("div",{className:"flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-gray-700 relative",children:[c.jsx("img",{src:L.dataUrl,alt:`Captured ${z+1}`,className:"w-full h-full object-cover"}),c.jsx("div",{className:"absolute bottom-0 right-0 bg-primary text-white text-xs px-1 rounded-tl",children:z+1}),L.filter==="ghibli-ready"&&c.jsx("div",{className:"absolute top-0 left-0 bg-purple-500/80 text-white text-xs px-1 rounded-br",children:"✨"})]},z))}),!h&&!_?c.jsx(je,{variant:"primary",size:"lg",icon:Df,className:n.length>=i?"opacity-50 cursor-not-allowed":"btn-ultra-neon",onClick:A,disabled:n.length>=i,children:n.length>=i?"All Photos Captured!":x?`📸✨ Start ${i} Photos (2 Normal + 2 Ghibli)`:`📸 Start ${i} Photos (Normal Mode)`}):c.jsx(je,{variant:"secondary",size:"lg",icon:my,onClick:b,disabled:_,children:_?"Getting Ready...":"Stop Capture"}),n.length>=i&&c.jsxs("p",{className:"text-success text-sm mt-2",children:["All photos captured!",x&&c.jsx("span",{className:"block text-purple-400 mt-1",children:"🎨 Photos 2 & 4 ready for Ghibli conversion"}),c.jsx("span",{className:"block",children:"Continue to preview and editing."})]})]})]})]})})},FT=({imageDataUrl:t,onSave:e,onCancel:n})=>{const i=K.useRef(null),[r,s]=K.useState(0),[a,o]=K.useState(!1),[l,u]=K.useState(!1),[p,h]=K.useState(100),[f,m]=K.useState(100),[v,_]=K.useState(100),[g,d]=K.useState(0);K.useEffect(()=>{x()},[r,a,l,p,f,v,g]);const x=()=>{const R=i.current;if(!R)return;const T=R.getContext("2d");if(!T)return;const M=new Image;M.onload=()=>{R.width=M.width,R.height=M.height,T.clearRect(0,0,R.width,R.height),T.save(),T.translate(R.width/2,R.height/2),T.rotate(r*Math.PI/180),T.scale(a?-1:1,l?-1:1),T.filter=`brightness(${p}%) contrast(${f}%) saturate(${v}%) hue-rotate(${g}deg)`,T.drawImage(M,-M.width/2,-M.height/2),T.restore()},M.src=t},y=()=>{s(R=>(R+90)%360)},S=()=>{o(!a)},C=()=>{u(!l)},A=()=>{s(0),o(!1),u(!1),h(100),m(100),_(100),d(0)},b=()=>{const R=i.current;if(!R)return;const T=R.toDataURL("image/jpeg",.9);e(T)};return c.jsx("div",{className:"fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4",children:c.jsxs("div",{className:"bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:[c.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c.jsx("h3",{className:"text-xl font-bold",children:"Edit Photo"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx(je,{variant:"outline",icon:Gl,onClick:n,children:"Cancel"}),c.jsx(je,{variant:"primary",icon:Uf,onClick:b,children:"Save Changes"})]})]}),c.jsx("div",{className:"mb-6 text-center",children:c.jsx("canvas",{ref:i,className:"max-w-full max-h-96 border border-gray-700 rounded-lg"})}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"font-medium mb-3",children:"Transform"}),c.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[c.jsx(je,{variant:"outline",icon:uy,onClick:y,className:"text-sm",children:"Rotate"}),c.jsx(je,{variant:"outline",icon:J_,onClick:S,className:`text-sm ${a?"bg-primary/20 border-primary":""}`,children:"Flip H"}),c.jsx(je,{variant:"outline",icon:ey,onClick:C,className:`text-sm ${l?"bg-primary/20 border-primary":""}`,children:"Flip V"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-medium mb-3",children:"Adjustments"}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"flex items-center gap-2 text-sm mb-1",children:[c.jsx(gy,{size:16}),"Brightness: ",p,"%"]}),c.jsx("input",{type:"range",min:"50",max:"150",value:p,onChange:R=>h(Number(R.target.value)),className:"w-full"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"flex items-center gap-2 text-sm mb-1",children:[c.jsx(Y_,{size:16}),"Contrast: ",f,"%"]}),c.jsx("input",{type:"range",min:"50",max:"150",value:f,onChange:R=>m(Number(R.target.value)),className:"w-full"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"flex items-center gap-2 text-sm mb-1",children:[c.jsx($u,{size:16}),"Saturation: ",v,"%"]}),c.jsx("input",{type:"range",min:"0",max:"200",value:v,onChange:R=>_(Number(R.target.value)),className:"w-full"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"flex items-center gap-2 text-sm mb-1",children:[c.jsx($u,{size:16}),"Hue: ",g,"°"]}),c.jsx("input",{type:"range",min:"-180",max:"180",value:g,onChange:R=>d(Number(R.target.value)),className:"w-full"})]})]})]})]}),c.jsx("div",{className:"mt-6 flex justify-center",children:c.jsx(je,{variant:"outline",icon:vy,onClick:A,className:"border-orange-500 text-orange-400 hover:bg-orange-500/10",children:"Reset All"})})]})})},xr=class xr{constructor(){ei(this,"baseUrl");this.baseUrl="http://localhost:8000"}static getInstance(){return xr.instance||(xr.instance=new xr),xr.instance}dataURLToFile(e,n){var l;const i=e.split(","),r=((l=i[0].match(/:(.*?);/))==null?void 0:l[1])||"image/jpeg",s=atob(i[1]);let a=s.length;const o=new Uint8Array(a);for(;a--;)o[a]=s.charCodeAt(a);return new File([o],n,{type:r})}async generatePhotoStrip(e,n="Good Times"){try{const i=new FormData,r=e.slice(0,4);for(;r.length<4;)r.push(r[r.length-1]||e[0]);(await Promise.all(r.map(async o=>{const l=await this.applyFilterToDataUrl(o.dataUrl,o.filter);return{...o,dataUrl:l}}))).forEach((o,l)=>{const u=this.dataURLToFile(o.dataUrl,`image${l+1}.jpg`);i.append(`image${l+1}`,u)}),i.append("quote",n);const a=await fetch(`${this.baseUrl}/generate`,{method:"POST",body:i});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.blob()}catch(i){throw console.error("Failed to generate photo strip:",i),i}}applyFilterToDataUrl(e,n){return new Promise((i,r)=>{const s=new Image;s.onload=()=>{const a=document.createElement("canvas"),o=a.getContext("2d");if(!o){i(e);return}switch(a.width=s.width,a.height=s.height,n){case"grayscale":o.filter="grayscale(100%)";break;case"sepia":o.filter="sepia(80%)";break;case"ghibli":o.filter="brightness(105%) contrast(110%) saturate(140%) hue-rotate(2deg) sepia(20%)";break;default:o.filter="none"}o.drawImage(s,0,0),i(a.toDataURL("image/jpeg",.9))},s.onerror=()=>{console.error("Failed to load image for filter application"),i(e)},s.src=e})}async printPhotoStrip(e=1){try{const n=await fetch(`${this.baseUrl}/print`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({copies:e})});if(!n.ok){const r=await n.text();throw new Error(`HTTP error! status: ${n.status}, message: ${r}`)}return await n.json()}catch(n){return console.error("Failed to print photo strip:",n),{status:"error",error:n instanceof Error?n.message:"Unknown error occurred"}}}async convertToGhibliStyle(e){await new Promise(n=>setTimeout(n,100));try{const n=this.dataURLToFile(e,"image.jpg"),i=new FormData;i.append("image",n);const r=await fetch(`${this.baseUrl}/gibli-style`,{method:"POST",body:i});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const s=await r.blob();return new Promise(a=>{const o=new FileReader;o.onload=()=>a(o.result),o.readAsDataURL(s)})}catch(n){throw console.error("Ghibli conversion failed:",n),n}}};ei(xr,"instance");let Al=xr;const s0=({onPaymentComplete:t,amount:e,includesPrint:n,copies:i=1,onCancel:r,customerInfo:s,packageType:a="Photo Package"})=>{const[o,l]=K.useState("idle"),[u,p]=K.useState(!1),[h,f]=K.useState(""),[m,v]=K.useState(""),_=()=>new Promise(d=>{if(window.Razorpay){d(!0);return}const x=document.createElement("script");x.src="https://checkout.razorpay.com/v1/checkout.js",x.onload=()=>d(!0),x.onerror=()=>d(!1),document.body.appendChild(x)}),g=async()=>{p(!0),l("processing"),f("");try{if(!await _())throw new Error("Failed to load payment system. Please refresh and try again.");const x={key:"rzp_live_RD7Lrg1bezk0F6",amount:e*100,currency:"INR",name:"Photo Booth Studio",description:`${a}${n?` - ${i} copies`:""}`,image:"",handler:function(S){console.log("Payment Success:",S),v(S.razorpay_payment_id),l("success"),setTimeout(()=>{t(S.razorpay_payment_id)},1500)},prefill:{name:(s==null?void 0:s.name)||"",email:(s==null?void 0:s.email)||"",contact:(s==null?void 0:s.phone)||""},notes:{package:a,copies:i.toString(),includes_print:n.toString()},theme:{color:"#6366f1"},modal:{ondismiss:function(){l("idle"),p(!1),f("Payment cancelled by user"),console.log("Payment dismissed")}}};new window.Razorpay(x).open()}catch(d){console.error("Payment error:",d),l("failed"),f(d.message||"Payment failed. Please try again."),p(!1)}};return o==="success"?c.jsxs(It,{animate:!0,className:"w-full text-center py-12",children:[c.jsx("div",{className:"flex justify-center mb-6",children:c.jsx("div",{className:"w-20 h-20 bg-success/20 rounded-full flex items-center justify-center animate-pulse-light",children:c.jsx(Uf,{size:40,className:"text-success"})})}),c.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Payment Successful!"}),c.jsxs("p",{className:"text-gray-300 mb-4",children:["Payment of ",c.jsxs("span",{className:"font-bold text-primary",children:["₹",e]})," confirmed"]}),m&&c.jsxs("p",{className:"text-xs text-gray-400 mb-4",children:["Payment ID: ",m]}),c.jsx("p",{className:"text-gray-300 mb-6",children:n?`Your photos will be ready for download and printing (${i} copies each)`:"Your photos are ready for download"}),c.jsx("div",{className:"animate-pulse-light",children:"Redirecting..."})]}):c.jsxs(It,{animate:!0,className:"w-full",children:[c.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Payment Required"}),c.jsxs("div",{className:"bg-gray-900 rounded-lg p-6 mb-6 text-center",children:[c.jsxs("div",{className:"text-4xl font-bold text-primary mb-2",children:[c.jsx(Ev,{size:32,className:"inline mr-2"})," ",e]}),n&&i>0&&c.jsxs("p",{className:"text-sm text-gray-400",children:["Includes physical prints (",i," copies per photo)"]})]}),h&&o==="failed"&&c.jsxs("div",{className:"mb-4 p-3 rounded-lg bg-red-500/20 text-red-400 border border-red-500/50 flex items-start space-x-2",children:[c.jsx(G_,{size:16,className:"mt-0.5 flex-shrink-0"}),c.jsx("p",{className:"text-sm",children:h})]}),c.jsxs("div",{className:"text-center space-y-3",children:[c.jsx(je,{variant:"primary",size:"lg",className:"w-full text-xl py-4 btn-racing",onClick:g,disabled:u,icon:u?void 0:Ca,children:u?c.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[c.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),c.jsx("span",{children:"Processing Payment..."})]}):`Pay ₹${e} & Continue`}),r&&c.jsx(je,{variant:"outline",className:"w-full",onClick:r,children:"Cancel"})]}),c.jsxs("div",{className:"mt-4 text-xs text-gray-400 text-center space-y-1",children:[c.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[c.jsxs("div",{className:"flex items-center space-x-1",children:[c.jsx(Ca,{size:12}),c.jsx("span",{children:"Secure payment"})]}),c.jsx("div",{children:"•"}),c.jsx("div",{children:"Powered by Razorpay"})]}),!1]})]})},kT=()=>{var Z,ie,q;const{setStage:t,photos:e,selectedPhotoIndex:n,setSelectedPhotoIndex:i,updatePhoto:r,updateAllPhotos:s,settings:a,setSettings:o,swapPhoto:l,removePhoto:u,userInfo:p,setUserInfo:h}=nr(),[f,m]=K.useState([...e]),[v,_]=K.useState(!1),[g,d]=K.useState(0),[x,y]=K.useState(!1),[S,C]=K.useState(new Set),[A,b]=K.useState(new Map),[R,T]=K.useState(new Map),[M,L]=K.useState(""),[z,I]=K.useState(new Set),[$,W]=K.useState(!1),[Y,J]=K.useState(!1),[D,X]=K.useState(!1),[te,ue]=K.useState(""),[Se,He]=K.useState(null),[V,re]=K.useState(60),[xe,de]=K.useState(!1),Ee=Al.getInstance(),Xe=["Welcome","Payment","Capture","Preview","Delivery"],Ne=4;K.useEffect(()=>{if(p.packageType==="ghibli"&&!Y&&f.length>0){const Q=f.map((G,ce)=>({photo:G,index:ce})).filter(({photo:G})=>G.filter==="ghibli-ready");Q.length>0&&(console.log("Auto-converting Ghibli photos:",Q.map(G=>G.index)),J(!0),lt(Q.map(({index:G})=>G)))}},[]);const et=["🎨 We're cooking something magical for you...","✨ Sprinkling some Ghibli fairy dust...","🌟 Transforming your photos into anime art...","🎭 Adding that Studio Ghibli charm...","🦋 Your photos are getting a magical makeover...","🌸 Creating something beautiful just for you...","🎪 The magic is happening behind the scenes...","🎨 Our AI artists are working their magic..."],lt=async Q=>{X(!0);let G=0;const ce=setInterval(()=>{ue(et[G%et.length]),G++},2e3);try{for(const fe of Q){const ee=f[fe];A.has(fe)||b(Ae=>new Map(Ae.set(fe,ee.dataUrl)));const me=await Ee.convertToGhibliStyle(ee.dataUrl);T(Ae=>new Map(Ae.set(fe,me))),m(Ae=>{const Ce=[...Ae];return Ce[fe]={...Ce[fe],dataUrl:me,filter:"ghibli"},console.log(`Updated photo ${fe} to Ghibli style`),Ce}),C(Ae=>new Set([...Ae,fe]))}o(fe=>({...fe,ghibliConversionsUsed:Q.length})),console.log("Auto Ghibli conversion complete for indices:",Q)}catch(fe){console.error("Failed to auto-convert images:",fe),L("Auto Ghibli conversion failed. You can try manual conversion.")}finally{clearInterval(ce),setTimeout(()=>{X(!1),ue("")},1e3)}},Ge=Q=>{i(Q)},N=Q=>{d(Q),_(!0)},$e=Q=>{const G=[...f];G[g]={...G[g],dataUrl:Q},m(G),_(!1)},Ke=Q=>{const G=[...f];G[n]={...G[n],filter:Q},m(G)},rt=Q=>{I(G=>{const ce=new Set(G);return ce.has(Q)?ce.delete(Q):ce.size<2&&!S.has(Q)&&ce.add(Q),ce})},be=async()=>{if(z.size!==2){L("Please select exactly 2 photos for Ghibli conversion.");return}if(a.ghibliConversionsUsed>=2){L("You have already used your 2 Ghibli conversions for this session.");return}if(p.packageType!=="ghibli"){W(!0);return}y(!0),L("");try{const Q=Array.from(z);for(const G of Q){const ce=f[G];A.has(G)||b(ee=>new Map(ee.set(G,ce.dataUrl)));const fe=await Ee.convertToGhibliStyle(ce.dataUrl);T(ee=>new Map(ee.set(G,fe))),m(ee=>{const me=[...ee];return me[G]={...me[G],dataUrl:fe,filter:"ghibli"},me}),C(ee=>new Set([...ee,G]))}o(G=>({...G,ghibliConversionsUsed:G.ghibliConversionsUsed+Q.length})),I(new Set)}catch(Q){console.error("Failed to convert images:",Q),L("Ghibli conversion failed. Please try again.")}finally{y(!1)}},Ye=Q=>{if(f.length<=1){L("You need at least one photo for the strip.");return}const G=f.filter((ce,fe)=>fe!==Q);m(G),n>=Q&&n>0&&i(n-1),L("")},Re=(Q,G)=>{Q.dataTransfer.setData("text/plain",G.toString())},Oe=Q=>{Q.preventDefault()},Et=(Q,G)=>{Q.preventDefault();const ce=parseInt(Q.dataTransfer.getData("text/plain"));if(ce===G)return;const fe=[...f],ee=fe[ce];fe.splice(ce,1),fe.splice(G,0,ee),m(fe),i(G)},P=()=>{s(f),t("delivery")},E=()=>{W(!1),h(Q=>({...Q,packageType:"ghibli"})),L("")},O=()=>50;return c.jsx(c.Fragment,{children:$?c.jsx("div",{className:"min-h-screen flex flex-col items-center p-4 animate-fade-in",children:c.jsx("div",{className:"w-full max-w-2xl",children:c.jsxs(It,{animate:!0,className:"w-full",children:[c.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[c.jsx($n,{className:"text-purple-400"}),"Upgrade to Ghibli Package"]}),c.jsxs("div",{className:"bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-500/30 mb-6",children:[c.jsx("p",{className:"text-gray-300 mb-4 text-lg",children:"🎨 Unlock Ghibli AI conversions to transform your photos into beautiful Studio Ghibli artwork!"}),c.jsxs("div",{className:"space-y-2 text-gray-300",children:[c.jsxs("p",{children:["✨ ",c.jsx("strong",{children:"2 FREE Ghibli conversions"})]}),c.jsxs("p",{children:["🎯 ",c.jsx("strong",{children:"Mix original and Ghibli photos"})]}),c.jsxs("p",{children:["📸 ",c.jsx("strong",{children:"All your original photos included"})]})]})]}),c.jsx(s0,{onPaymentComplete:E,amount:O(),includesPrint:!1,copies:0}),c.jsx("div",{className:"mt-4 text-center",children:c.jsx(je,{variant:"outline",onClick:()=>W(!1),className:"border-gray-500 text-gray-400",children:"Continue with Original Package"})})]})})}):c.jsxs("div",{className:"min-h-screen flex flex-col p-4 animate-fade-in",children:[c.jsxs("div",{className:"w-full max-w-7xl mx-auto",children:[c.jsx(Yl,{steps:Xe,currentStep:3}),c.jsxs("div",{className:"flex justify-between items-center mb-4",children:[c.jsx(je,{variant:"outline",icon:Lf,onClick:()=>t("capture"),children:"Back to Capture"}),c.jsx(je,{variant:"primary",icon:Mv,iconPosition:"right",className:"btn-racing",onClick:P,children:"Continue to Delivery"})]}),c.jsxs("div",{className:"flex gap-6",children:[c.jsx("div",{className:"flex-1",style:{flex:"0 0 70%"},children:c.jsxs(It,{animate:!0,className:"h-full",children:[c.jsx("h2",{className:"text-5xl font-bold mb-8 text-center",children:"📸 EDIT PHOTOS"}),c.jsxs("div",{className:"relative aspect-[4/3] bg-black rounded-lg overflow-hidden mb-6",children:[c.jsx("img",{src:(Z=f[n])==null?void 0:Z.dataUrl,alt:"Preview",className:`w-full h-full object-cover ${((ie=f[n])==null?void 0:ie.filter)||"normal"}`}),S.has(n)&&((q=f[n])==null?void 0:q.filter)==="ghibli"&&c.jsx("div",{className:"absolute top-4 left-4 bg-purple-500/90 px-6 py-3 rounded-full",children:c.jsxs("span",{className:"text-white text-2xl font-bold flex items-center gap-2",children:[c.jsx($n,{size:14}),"✨ GHIBLI"]})}),c.jsx("div",{className:"absolute bottom-4 right-4",children:c.jsx(je,{variant:"accent",icon:lp,onClick:()=>N(n),className:"bg-black/70 hover:bg-black/90 text-xl px-6 py-3",children:"✏️ EDIT"})})]}),c.jsxs("div",{className:"mb-6",children:[c.jsxs("h3",{className:"text-xl font-medium mb-3",children:[c.jsxs("div",{className:"text-3xl font-bold text-center mb-4",children:["📋 PHOTO ORDER (",f.length,"/",Ne,")"]}),c.jsx("div",{className:"text-xl text-center text-gray-400",children:"👆 Touch to select • 🔄 Drag to rearrange"})]}),c.jsx("div",{className:"flex gap-4 overflow-x-auto pb-2",children:f.map((Q,G)=>c.jsxs("div",{draggable:!0,onDragStart:ce=>Re(ce,G),onDragOver:Oe,onDrop:ce=>Et(ce,G),className:`relative group cursor-pointer border-2 rounded-lg overflow-hidden transition-all flex-shrink-0 w-32 h-32 ${n===G?"border-primary":"border-gray-700"} ${p.packageType==="ghibli"&&!S.has(G)&&a.ghibliConversionsUsed<2&&z.has(G)?"ring-2 ring-purple-400":""}`,onClick:()=>{Ge(G),p.packageType==="ghibli"&&!S.has(G)&&a.ghibliConversionsUsed<2&&rt(G)},children:[c.jsx("img",{src:Q.dataUrl,alt:`Photo ${G+1}`,className:`w-full h-full object-cover ${Q.filter||"normal"}`,draggable:!1}),c.jsxs("div",{className:"absolute top-2 left-2 bg-black/80 text-white text-lg font-bold px-2 py-1 rounded",children:["#",G+1]}),c.jsx("div",{className:"absolute top-2 right-2 bg-black/80 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity",children:c.jsx(ty,{size:16})}),S.has(G)&&Q.filter==="ghibli"&&c.jsx("div",{className:"absolute bottom-2 right-2 bg-purple-500/90 p-1 rounded",children:c.jsx($n,{size:14,className:"text-white"})}),p.packageType==="ghibli"&&!S.has(G)&&a.ghibliConversionsUsed<2&&z.has(G)&&!Y&&c.jsx("div",{className:"absolute bottom-2 left-2 bg-purple-500/90 p-2 rounded",children:c.jsx("div",{className:"w-4 h-4 bg-white rounded-full flex items-center justify-center",children:c.jsx("div",{className:"w-3 h-3 bg-purple-600 rounded-full"})})}),c.jsx("div",{className:"absolute top-2 right-8 opacity-0 group-hover:opacity-100 transition-opacity",children:c.jsx("button",{onClick:ce=>{ce.stopPropagation(),Ye(G)},className:"bg-red-600/90 text-white p-1 rounded hover:bg-red-700/90",children:c.jsx(wv,{size:14})})})]},G))})]}),c.jsxs("div",{className:"bg-gray-900 rounded-lg p-4",children:[c.jsx("h3",{className:"text-3xl font-bold mb-6 text-center",children:"🖨️ FINAL STRIPS"}),c.jsxs("div",{className:"flex flex-col gap-1 max-w-[200px] mx-auto bg-white p-2 rounded",children:[f.map((Q,G)=>c.jsx("div",{className:"aspect-[4/3] w-full",children:c.jsx("img",{src:Q.dataUrl,alt:`Strip ${G+1}`,className:`w-full h-full object-cover ${Q.filter||"normal"}`})},G)),Array.from({length:Ne-f.length}).map((Q,G)=>c.jsx("div",{className:"aspect-[4/3] w-full bg-gray-300 flex items-center justify-center",children:c.jsx("span",{className:"text-gray-500 text-lg font-bold",children:"EMPTY"})},`empty-${G}`))]}),c.jsx("p",{className:"text-center text-2xl font-bold text-primary mt-4",children:"📄 2 STRIPS • 4×6 INCH"})]})]})}),c.jsx("div",{className:"w-full h-full",style:{flex:"0 0 30%"},children:c.jsxs("div",{className:"space-y-6",children:[c.jsxs(It,{animate:!0,className:"flex-1",children:[c.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center gap-2 text-center",children:[c.jsx($u,{className:"text-accent"}),"🎨 FILTERS"]}),c.jsx("div",{className:"space-y-3",children:[{name:"normal",label:"📸 ORIGINAL",preview:"filter: none"},{name:"grayscale",label:"⚫ BLACK & WHITE",preview:"filter: grayscale(100%)"},{name:"sepia",label:"🟤 VINTAGE",preview:"filter: sepia(80%)"},{name:"ghibli",label:"✨ GHIBLI",preview:"filter: brightness(105%) contrast(110%) saturate(140%)"}].map(Q=>{var G,ce;return c.jsx("button",{onClick:()=>Ke(Q.name),disabled:Q.name==="ghibli"&&!S.has(n),className:`w-full p-4 rounded-lg border-2 transition-all text-center ${(((G=f[n])==null?void 0:G.filter)||"normal")===Q.name?"border-primary bg-primary/20":"border-gray-700 hover:border-gray-500 bg-gray-800/50"} ${Q.name==="ghibli"&&!S.has(n)?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,children:c.jsxs("div",{className:"flex flex-col items-center gap-3",children:[c.jsx("div",{className:"w-16 h-16 rounded-md overflow-hidden border border-gray-600",children:c.jsx("img",{src:(ce=f[n])==null?void 0:ce.dataUrl,alt:Q.label,className:`w-full h-full object-cover ${Q.name}`,style:{filter:Q.name==="ghibli"?"brightness(105%) contrast(110%) saturate(140%) hue-rotate(2deg) sepia(20%)":void 0}})}),c.jsxs("div",{children:[c.jsx("div",{className:"font-bold text-white text-lg",children:Q.label}),Q.name==="ghibli"&&!S.has(n)&&c.jsx("div",{className:"text-sm text-gray-400 font-medium",children:"CONVERT TO UNLOCK"})]})]})},Q.name)})})]}),p.packageType==="ghibli"&&!Y&&c.jsxs(It,{animate:!0,className:"flex-1",children:[c.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center gap-2 text-center",children:[c.jsx($n,{className:"text-purple-400"}),"✨ GHIBLI AI"]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-500/30 text-center",children:[c.jsx("p",{className:"text-lg font-bold text-purple-200 mb-2",children:"👆 SELECT 2 PHOTOS"}),c.jsxs("p",{className:"text-2xl font-bold text-white",children:[z.size,"/2 SELECTED"]})]}),c.jsx(je,{variant:"accent",icon:x?ry:$n,onClick:be,disabled:x||z.size!==2||a.ghibliConversionsUsed>=2,className:"w-full btn-ultra-neon text-xl py-4",children:x?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"animate-spin mr-2 text-2xl",children:"⟳"}),"🎨 CONVERTING..."]}):`✨ CONVERT ${z.size} PHOTOS`}),M&&c.jsx("div",{className:"p-3 bg-red-900/20 border border-red-500/30 rounded text-red-400 text-lg font-bold text-center",children:M})]})]}),p.packageType!=="ghibli"&&c.jsxs(It,{animate:!0,className:"flex-1",children:[c.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center gap-2 text-center",children:[c.jsx($n,{className:"text-purple-400"}),"✨ GHIBLI AI"]}),c.jsxs("div",{className:"text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-400/50",children:[c.jsx("p",{className:"text-purple-300 mb-4 text-xl font-bold",children:"🎨 UNLOCK GHIBLI!"}),c.jsx(je,{variant:"accent",icon:$n,onClick:()=>W(!0),className:"w-full btn-ultra-neon text-xl py-4",children:"✨ UPGRADE +₹50"})]})]}),p.packageType==="ghibli"&&Y&&c.jsxs(It,{animate:!0,className:"flex-1",children:[c.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center gap-2 text-center",children:[c.jsx($n,{className:"text-purple-400"}),"✨ GHIBLI AI"]}),c.jsxs("div",{className:"text-center bg-gradient-to-r from-green-900/30 to-purple-900/30 rounded-lg p-6 border border-green-400/50",children:[c.jsx("div",{className:"text-green-400 mb-3 text-xl font-bold",children:"✅ COMPLETE!"}),c.jsx("p",{className:"text-lg text-gray-300 mb-4 font-bold",children:"PHOTOS 2 & 4 = GHIBLI ✨"}),c.jsxs("div",{className:"text-lg text-gray-400 font-bold",children:["USED: ",a.ghibliConversionsUsed,"/2"]})]})]}),c.jsxs(It,{animate:!0,className:"flex-1",children:[c.jsx("h3",{className:"text-2xl font-bold mb-4 text-center",children:"⚙️ ACTIONS"}),c.jsxs("div",{className:"space-y-2",children:[c.jsx(je,{variant:"outline",icon:lp,onClick:()=>N(n),className:"w-full text-lg py-3",children:"✏️ EDIT PHOTO"}),c.jsx(je,{variant:"outline",icon:ly,onClick:()=>{m([...e]),C(new Set),b(new Map),T(new Map),L(""),i(0),o(Q=>({...Q,ghibliConversionsUsed:0})),J(!1)},className:"w-full text-lg py-3",children:"🔄 RESET ALL"})]})]})]})})]})]}),D&&c.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in",children:c.jsxs("div",{className:"text-center max-w-md mx-auto p-8",children:[c.jsx("div",{className:"relative mb-8",children:c.jsxs("div",{className:"w-32 h-32 mx-auto relative",children:[c.jsx("div",{className:"absolute inset-0 border-4 border-purple-400/30 rounded-full"}),c.jsx("div",{className:"absolute inset-0 border-4 border-transparent border-t-purple-400 rounded-full animate-spin"}),c.jsx("div",{className:"absolute inset-4 border-4 border-pink-400/30 rounded-full"}),c.jsx("div",{className:"absolute inset-4 border-4 border-transparent border-b-pink-400 rounded-full animate-spin",style:{animationDirection:"reverse",animationDuration:"2s"}}),c.jsx("div",{className:"absolute inset-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center",children:c.jsx("div",{className:"text-4xl animate-bounce",children:"✨"})}),c.jsx("div",{className:"absolute -top-4 -left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"}),c.jsx("div",{className:"absolute -top-4 -right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping",style:{animationDelay:"0.5s"}}),c.jsx("div",{className:"absolute -bottom-4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping",style:{animationDelay:"1s"}}),c.jsx("div",{className:"absolute -bottom-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping",style:{animationDelay:"1.5s"}}),c.jsx("div",{className:"absolute inset-0 animate-spin",style:{animationDuration:"4s"},children:c.jsx("div",{className:"absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl",children:"🌟"})}),c.jsx("div",{className:"absolute inset-0 animate-spin",style:{animationDuration:"3s",animationDirection:"reverse"},children:c.jsx("div",{className:"absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl",children:"🦋"})}),c.jsx("div",{className:"absolute inset-0 animate-spin",style:{animationDuration:"5s"},children:c.jsx("div",{className:"absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl",children:"🌸"})}),c.jsx("div",{className:"absolute inset-0 animate-spin",style:{animationDuration:"3.5s",animationDirection:"reverse"},children:c.jsx("div",{className:"absolute top-1/2 -left-2 transform -translate-y-1/2 text-2xl",children:"🎭"})})]})}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("h2",{className:"text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse",children:"🎨 GHIBLI MAGIC"}),c.jsx("div",{className:"text-2xl text-white font-bold animate-pulse",children:te||et[0]}),c.jsxs("div",{className:"flex justify-center gap-2 mt-6",children:[c.jsx("div",{className:"w-3 h-3 bg-purple-400 rounded-full animate-bounce",style:{animationDelay:"0s"}}),c.jsx("div",{className:"w-3 h-3 bg-pink-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}}),c.jsx("div",{className:"w-3 h-3 bg-blue-400 rounded-full animate-bounce",style:{animationDelay:"0.4s"}}),c.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded-full animate-bounce",style:{animationDelay:"0.6s"}})]}),c.jsx("div",{className:"text-xl text-gray-300 mt-6 font-bold",children:"CONVERTING PHOTOS 2 & 4 ✨"}),c.jsx("div",{className:"bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-400/30 mt-6",children:c.jsxs("div",{className:"text-lg text-purple-200 space-y-2 font-bold",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),c.jsx("span",{children:"✅ PHOTOS 1 & 3: READY"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-2 h-2 bg-yellow-400 rounded-full animate-pulse"}),c.jsx("span",{children:"🎨 PHOTOS 2 & 4: CONVERTING..."})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-2 h-2 bg-blue-400 rounded-full animate-pulse"}),c.jsx("span",{children:"⏳ AI WORKING..."})]})]})})]})]})}),v&&c.jsx(FT,{imageDataUrl:f[g].dataUrl,onSave:$e,onCancel:()=>_(!1)})]})})},OT=()=>{const{setStage:t,userInfo:e,setUserInfo:n,setSessionPaid:i}=nr(),[r,s]=K.useState("basic"),[a,o]=K.useState(2),[l,u]=K.useState(!1),[p,h]=K.useState(""),f=()=>new Promise(x=>{if(window.Razorpay){x(!0);return}const y=document.createElement("script");y.src="https://checkout.razorpay.com/v1/checkout.js",y.onload=()=>x(!0),y.onerror=()=>x(!1),document.body.appendChild(y)}),m=async()=>{u(!0),h("");try{if(!await f()){h("Failed to load payment system. Please refresh and try again."),u(!1);return}const C=r==="basic"?a===2?199:299:a===2?249:349,A={key:"rzp_live_RD7Lrg1bezk0F6",amount:C*100,currency:"INR",name:"Photo Booth Studio",description:`${r==="basic"?"Normal":"Normal + Ghibli"} Package - ${a} Copies`,image:"",handler:function(R){console.log("Payment Success:",R),n({...e,copies:a,packageType:r,paymentId:R.razorpay_payment_id,paidAmount:C}),i(!0),h("Payment successful! Starting your photo session..."),setTimeout(()=>{t("capture")},2e3)},prefill:{name:(e==null?void 0:e.name)||"",email:(e==null?void 0:e.email)||"",contact:(e==null?void 0:e.phone)||""},notes:{package:r,copies:a.toString(),session_type:"photo_booth"},theme:{color:"#6366f1"},modal:{ondismiss:function(){h("Payment cancelled. Please try again to proceed."),u(!1),console.log("Payment dismissed")}}};new window.Razorpay(A).open()}catch(x){console.error("Payment error:",x),h("Payment failed. Please try again."),u(!1)}},v=["Welcome","Payment","Capture","Preview","Delivery"],_=a===2?199:299,g=a===2?249:349,d=r==="basic"?_:g;return c.jsx("div",{className:"min-h-screen flex flex-col items-center p-4 animate-fade-in overflow-y-auto",children:c.jsxs("div",{className:"w-full max-w-2xl",children:[c.jsx(Yl,{steps:v,currentStep:1}),c.jsx(je,{variant:"outline",icon:Lf,onClick:()=>t("welcome"),className:"mb-4",children:"Back to Welcome"}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs(It,{animate:!0,className:"w-full",children:[c.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Choose Your Package"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[c.jsxs("div",{className:`p-8 rounded-xl border-4 cursor-pointer transition-all text-center ${r==="basic"?"border-primary bg-primary/20 shadow-lg shadow-primary/30":"border-gray-600 hover:border-gray-500 bg-gray-800/50"}`,onClick:()=>s("basic"),children:[c.jsx("div",{className:"text-6xl mb-4",children:"📸"}),c.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Normal"}),c.jsxs("div",{className:"text-3xl font-bold text-primary mb-4",children:["₹",_]}),c.jsx("p",{className:"text-gray-300",children:"Original photos with filters"})]}),c.jsxs("div",{className:`p-8 rounded-xl border-4 cursor-pointer transition-all text-center ${r==="ghibli"?"border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30":"border-gray-600 hover:border-gray-500 bg-gray-800/50"}`,onClick:()=>s("ghibli"),children:[c.jsx("div",{className:"text-6xl mb-4",children:"✨"}),c.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Normal + Ghibli"}),c.jsxs("div",{className:"text-3xl font-bold text-purple-400 mb-4",children:["₹",g]}),c.jsx("p",{className:"text-gray-300",children:"Original + 2 Ghibli AI conversions"})]})]}),c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Choose Copies"}),c.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-md mx-auto",children:[c.jsx(je,{variant:a===2?"primary":"outline",onClick:()=>o(2),className:"text-xl py-6",size:"lg",children:"2 Copies"}),c.jsx(je,{variant:a===4?"primary":"outline",onClick:()=>o(4),className:"text-xl py-6",size:"lg",children:"4 Copies"})]})]}),p&&c.jsx("div",{className:`mb-6 p-4 rounded-lg text-center ${p.includes("successful")?"bg-green-500/20 text-green-400 border border-green-500/50":p.includes("cancelled")||p.includes("failed")?"bg-red-500/20 text-red-400 border border-red-500/50":"bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"}`,children:c.jsx("p",{className:"font-medium",children:p})}),c.jsxs("div",{className:"text-center",children:[c.jsxs("div",{className:"text-4xl font-bold text-primary mb-6",children:["Total: ₹",d]}),c.jsx("div",{className:"space-y-4",children:c.jsx(je,{variant:"primary",size:"lg",className:"text-xl px-12 py-4 btn-ultra-neon w-full",onClick:m,disabled:l,icon:l?void 0:Ca,children:l?c.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[c.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),c.jsx("span",{children:"Processing Payment..."})]}):`Pay ₹${d} & Start Session`})})]})]}),c.jsxs(It,{className:"text-center text-sm text-gray-400",children:[c.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[c.jsxs("div",{className:"flex items-center space-x-1",children:[c.jsx(Ca,{size:16}),c.jsx("span",{children:"Secure Payment"})]}),c.jsx("div",{children:"•"}),c.jsx("div",{children:"Powered by Razorpay"})]}),c.jsx("p",{className:"mt-2 text-xs",children:"Test Mode: Use card 4111 1111 1111 1111, any CVV, future expiry"})]})]})]})})},zT=()=>{const{setStage:t,photos:e,userInfo:n,resetPhotos:i,photoStripBlob:r,setPhotoStripBlob:s}=nr(),[a,o]=K.useState(!1),[l,u]=K.useState(!1),[p,h]=K.useState(""),[f,m]=K.useState(!1),[v,_]=K.useState(""),[g,d]=K.useState(null),[x,y]=K.useState(90),[S,C]=K.useState(!1),[A,b]=K.useState(!1),[R,T]=K.useState(!1),[M,L]=K.useState(!1),[z,I]=K.useState(!1),[$,W]=K.useState(!1),[Y,J]=K.useState(0),[D,X]=K.useState(!1),[te,ue]=K.useState(!1),Se=Al.getInstance(),He=["Welcome","Payment","Capture","Preview","Delivery"],V=K.useRef(null),re=K.useRef(null);K.useEffect(()=>{const N=setTimeout(()=>{e.length>0&&!r&&!f&&!te&&(console.log("Generating strip with photos:",e.map($e=>({filter:$e.filter,hasGhibli:$e.filter==="ghibli"}))),ue(!0),xe())},200);return()=>clearTimeout(N)},[e]),K.useEffect(()=>{r&&!a&&!l&&!p&&!z&&(console.log("Starting print with strip ready"),I(!0),de())},[r,z]),K.useEffect(()=>{if(l&&!g&&!R){y(60);const N=setInterval(()=>{y($e=>$e<=1?(Ee(),0):$e-1)},1e3);d(N)}return()=>{g&&clearInterval(g)}},[l,g,R]),K.useEffect(()=>()=>{V.current&&clearTimeout(V.current),re.current&&clearTimeout(re.current),g&&clearInterval(g)},[]);const xe=async()=>{if(!(f||r)){console.log("Generating photo strip with photos:",e.map((N,$e)=>({index:$e,filter:N.filter,isGhibli:N.filter==="ghibli",hasDataUrl:!!N.dataUrl}))),m(!0),W(!1),V.current=setTimeout(()=>{W(!0),m(!1),setTimeout(()=>{Y<1?(J(N=>N+1),X(!0),W(!1),xe()):h("We deeply apologize, but the service is currently unavailable. Please try again later.")},3e4)},6e4);try{const N=await Se.generatePhotoStrip(e,"Good Times");s(N),m(!1),W(!1),X(!1),V.current&&clearTimeout(V.current)}catch(N){console.error("Photo strip generation failed:",N),m(!1),V.current&&clearTimeout(V.current),$||h("Failed to generate photo strip. Please try again.")}}},de=async()=>{if(!r){h("Photo strip not ready.");return}o(!0),h(""),_("Printing..."),W(!1),re.current=setTimeout(()=>{W(!0),o(!1),_(""),setTimeout(()=>{Y<1?(J(N=>N+1),X(!0),W(!1),de()):h("We deeply apologize, but the printing service is currently unavailable.")},3e4)},6e4);try{const N=await Se.printPhotoStrip(2);re.current&&clearTimeout(re.current),await new Promise($e=>setTimeout($e,7e3)),N.error?(h(N.error),_("")):(u(!0),_("")),o(!1),W(!1),X(!1)}catch(N){console.error("Print failed:",N),o(!1),_(""),re.current&&clearTimeout(re.current),$||h("Print failed. Please try again.")}},Ee=()=>{g&&(clearInterval(g),d(null)),o(!1),u(!1),h(""),m(!1),_(""),d(null),y(30),C(!1),b(!1),T(!1),L(!1),I(!1),W(!1),J(0),X(!1),ue(!1),s(null),i(),t("welcome")},Xe=()=>{T(!0),C(!0),g&&(clearInterval(g),d(null))},Ne=()=>{C(!1),b(!0),T(!1),u(!1),h(""),_(""),I(!1),J(0),et()},et=async()=>{if(!r){h("Photo strip not ready.");return}o(!0),h(""),_("Printing..."),W(!1),re.current=setTimeout(()=>{W(!0),o(!1),_(""),setTimeout(()=>{Y<1?(J(N=>N+1),X(!0),W(!1),et()):h("We deeply apologize, but the printing service is currently unavailable.")},3e4)},6e4);try{const N=await Se.printPhotoStrip(1);re.current&&clearTimeout(re.current),await new Promise($e=>setTimeout($e,7e3)),N.error?(h(N.error),_("")):(u(!0),_("")),o(!1),W(!1),X(!1)}catch(N){console.error("Reprint failed:",N),o(!1),_(""),re.current&&clearTimeout(re.current),$||h("Print failed. Please try again.")}},lt=()=>{if(C(!1),T(!1),l){y(30);const N=setInterval(()=>{y($e=>$e<=1?(Ee(),0):$e-1)},1e3);d(N)}},Ge=()=>100;return c.jsx(c.Fragment,{children:S?c.jsx("div",{className:"min-h-screen flex flex-col items-center p-4 animate-fade-in",children:c.jsx("div",{className:"w-full max-w-2xl",children:c.jsxs(It,{animate:!0,className:"w-full",children:[c.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Payment for Additional Copies"}),c.jsxs("p",{className:"text-gray-300 mb-6",children:["₹",Ge()," for 1 additional copy"]}),c.jsx(s0,{onPaymentComplete:Ne,amount:Ge(),includesPrint:!0,copies:1,onCancel:lt})]})})}):c.jsx("div",{className:"min-h-screen flex flex-col items-center p-4 animate-fade-in",children:c.jsxs("div",{className:"w-full max-w-2xl",children:[c.jsx(Yl,{steps:He,currentStep:4}),c.jsxs(It,{animate:!0,className:"w-full mb-6",children:[c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),c.jsx("h2",{className:"text-4xl font-bold mb-3",children:"Photos Ready!"})]}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",children:e.map((N,$e)=>c.jsxs("div",{className:"relative rounded-lg overflow-hidden",children:[c.jsx("img",{src:N.dataUrl,alt:`Photo ${$e+1}`,className:`w-full aspect-square object-cover ${N.filter}`}),N.filter==="ghibli"&&c.jsx("div",{className:"absolute top-2 left-2 bg-purple-500/80 text-white text-xs px-2 py-1 rounded",children:"✨"})]},$e))}),f&&!$&&c.jsx("div",{className:"bg-blue-900/30 border-2 border-blue-400/50 rounded-lg p-6 mb-6 animate-pulse-light",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-6xl mb-4 animate-bounce",children:"🎨"}),c.jsx("div",{className:"text-2xl font-bold text-blue-400 mb-4",children:"Creating Your Strip..."}),c.jsxs("div",{className:"flex justify-center gap-2",children:[c.jsx("div",{className:"w-3 h-3 bg-blue-400 rounded-full animate-bounce",style:{animationDelay:"0s"}}),c.jsx("div",{className:"w-3 h-3 bg-blue-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}}),c.jsx("div",{className:"w-3 h-3 bg-blue-400 rounded-full animate-bounce",style:{animationDelay:"0.4s"}})]})]})}),$&&!D&&c.jsx("div",{className:"bg-orange-900/30 border-2 border-orange-400/50 rounded-lg p-6 mb-6",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-4xl mb-4",children:"⏰"}),c.jsx("div",{className:"text-xl font-bold text-orange-400 mb-2",children:"Sorry for the delay..."}),c.jsx("div",{className:"text-gray-300",children:"Retrying in 30 seconds"})]})}),D&&c.jsx("div",{className:"bg-yellow-900/30 border-2 border-yellow-400/50 rounded-lg p-6 mb-6",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-4xl mb-4 animate-spin",children:"🔄"}),c.jsx("div",{className:"text-xl font-bold text-yellow-400",children:"Retrying..."})]})}),a&&c.jsx("div",{className:"bg-purple-900/30 border-2 border-purple-400/50 rounded-lg p-8 mb-6 animate-pulse-light",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"relative mb-6",children:c.jsx("div",{className:"printer-animation mx-auto"})}),c.jsx("div",{className:"text-3xl font-bold text-purple-400 mb-4",children:"🖨️ PRINTING..."}),c.jsx("div",{className:"text-lg text-gray-300",children:"Please wait, do not leave"})]})}),l&&c.jsx("div",{className:"bg-green-900/30 border-2 border-green-400/50 rounded-lg p-8 mb-6",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-6xl mb-4",children:"✅"}),c.jsx("div",{className:"text-3xl font-bold text-green-400 mb-4",children:"PRINT COMPLETE!"}),c.jsx("div",{className:"text-lg text-gray-300 mb-4",children:"Collect your 2 photo strips"}),!R&&c.jsxs("div",{className:"text-blue-400",children:["Returning home in ",x,"s"]})]})}),p&&c.jsx("div",{className:"bg-red-900/30 border-2 border-red-400/50 rounded-lg p-6 mb-6",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-4xl mb-4",children:"❌"}),c.jsx("div",{className:"text-xl font-bold text-red-400 mb-2",children:"Print Failed"}),c.jsx("div",{className:"text-gray-300 text-sm",children:p})]})}),c.jsxs("div",{className:"space-y-4",children:[!l&&!p&&c.jsx(je,{variant:"primary",icon:Xo,className:"w-full text-2xl py-6 btn-ultra-neon",onClick:de,disabled:a||f||!r,size:"lg",children:"🖨️ PRINT STRIPS"}),p&&c.jsx(je,{variant:"outline",icon:Xo,className:"w-full text-2xl py-6 border-red-500 text-red-400 hover:bg-red-500/10",onClick:()=>{h(""),I(!1),J(0),de()},size:"lg",children:"🔄 RETRY PRINT"}),l&&c.jsx(je,{variant:"accent",icon:Xo,className:"w-full text-3xl py-8 btn-ultra-neon animate-pulse",onClick:Xe,size:"lg",children:"✨ Print Again ✨"}),c.jsx(je,{variant:"primary",icon:ny,className:"w-full text-xl py-4",onClick:Ee,size:"lg",children:"🏠 Start New Session"})]})]})]})})})},BT=()=>{const{stage:t,kioskMode:e}=nr();return K.useEffect(()=>{const n=El.getInstance();n.enterKioskMode();const i=a=>{a.preventDefault(),window.history.pushState(null,"",window.location.href)};window.history.pushState(null,"",window.location.href),window.addEventListener("popstate",i);const r=a=>{if(a.touches.length>1)return;const l=a.touches[0].clientX,u=window.innerWidth;(l<50||l>u-50)&&a.preventDefault()};document.addEventListener("touchstart",r,{passive:!1});const s=a=>{a.altKey&&(a.key==="ArrowLeft"||a.key==="ArrowRight")&&a.preventDefault(),a.key==="Backspace"&&a.target===document.body&&a.preventDefault()};return document.addEventListener("keydown",s),()=>{window.removeEventListener("popstate",i),document.removeEventListener("touchstart",r),document.removeEventListener("keydown",s),e&&n.exitKioskMode()}},[e]),c.jsxs("div",{className:"min-h-screen bg-gray-900",children:[t==="welcome"&&c.jsx(DT,{}),t==="capture"&&c.jsx(IT,{}),t==="preview"&&c.jsx(kT,{}),t==="payment"&&c.jsx(OT,{}),t==="delivery"&&c.jsx(zT,{})]})};function jT(){const[t,e]=eh.useState(!1);return eh.useEffect(()=>{const n=i=>{console.error("App error:",i),e(!0)};return window.addEventListener("error",n),()=>window.removeEventListener("error",n)},[]),t?c.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center",children:c.jsxs("div",{className:"text-center text-white",children:[c.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Something went wrong"}),c.jsx("button",{onClick:()=>window.location.reload(),className:"bg-primary px-4 py-2 rounded",children:"Reload App"})]})}):c.jsx(j_,{children:c.jsx(BT,{})})}yv(document.getElementById("root")).render(c.jsx(K.StrictMode,{children:c.jsx(jT,{})}));
