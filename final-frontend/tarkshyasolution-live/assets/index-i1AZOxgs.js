(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function u(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=u(f);fetch(f.href,p)}})();function Ey(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Eu={exports:{}},Hl={};var Vh;function ky(){if(Vh)return Hl;Vh=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(c,f,p){var h=null;if(p!==void 0&&(h=""+p),f.key!==void 0&&(h=""+f.key),"key"in f){p={};for(var v in f)v!=="key"&&(p[v]=f[v])}else p=f;return f=p.ref,{$$typeof:i,type:c,key:h,ref:f!==void 0?f:null,props:p}}return Hl.Fragment=r,Hl.jsx=u,Hl.jsxs=u,Hl}var Xh;function Ty(){return Xh||(Xh=1,Eu.exports=ky()),Eu.exports}var l=Ty(),ku={exports:{}},ue={};var Kh;function Ny(){if(Kh)return ue;Kh=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),z=Symbol.iterator;function N(C){return C===null||typeof C!="object"?null:(C=z&&C[z]||C["@@iterator"],typeof C=="function"?C:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,G={};function q(C,U,I){this.props=C,this.context=U,this.refs=G,this.updater=I||R}q.prototype.isReactComponent={},q.prototype.setState=function(C,U){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,U,"setState")},q.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function Q(){}Q.prototype=q.prototype;function X(C,U,I){this.props=C,this.context=U,this.refs=G,this.updater=I||R}var O=X.prototype=new Q;O.constructor=X,$(O,q.prototype),O.isPureReactComponent=!0;var P=Array.isArray;function Z(){}var B={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function se(C,U,I){var te=I.ref;return{$$typeof:i,type:C,key:U,ref:te!==void 0?te:null,props:I}}function ze(C,U){return se(C.type,U,C.props)}function re(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function K(C){var U={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(I){return U[I]})}var F=/\/+/g;function Se(C,U){return typeof C=="object"&&C!==null&&C.key!=null?K(""+C.key):U.toString(36)}function He(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(Z,Z):(C.status="pending",C.then(function(U){C.status==="pending"&&(C.status="fulfilled",C.value=U)},function(U){C.status==="pending"&&(C.status="rejected",C.reason=U)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function D(C,U,I,te,ce){var fe=typeof C;(fe==="undefined"||fe==="boolean")&&(C=null);var je=!1;if(C===null)je=!0;else switch(fe){case"bigint":case"string":case"number":je=!0;break;case"object":switch(C.$$typeof){case i:case r:je=!0;break;case b:return je=C._init,D(je(C._payload),U,I,te,ce)}}if(je)return ce=ce(C),je=te===""?"."+Se(C,0):te,P(ce)?(I="",je!=null&&(I=je.replace(F,"$&/")+"/"),D(ce,U,I,"",function(ra){return ra})):ce!=null&&(re(ce)&&(ce=ze(ce,I+(ce.key==null||C&&C.key===ce.key?"":(""+ce.key).replace(F,"$&/")+"/")+je)),U.push(ce)),1;je=0;var Ie=te===""?".":te+":";if(P(C))for(var Re=0;Re<C.length;Re++)te=C[Re],fe=Ie+Se(te,Re),je+=D(te,U,I,fe,ce);else if(Re=N(C),typeof Re=="function")for(C=Re.call(C),Re=0;!(te=C.next()).done;)te=te.value,fe=Ie+Se(te,Re++),je+=D(te,U,I,fe,ce);else if(fe==="object"){if(typeof C.then=="function")return D(He(C),U,I,te,ce);throw U=String(C),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return je}function V(C,U,I){if(C==null)return C;var te=[],ce=0;return D(C,te,"","",function(fe){return U.call(I,fe,ce++)}),te}function J(C){if(C._status===-1){var U=C._result;U=U(),U.then(function(I){(C._status===0||C._status===-1)&&(C._status=1,C._result=I)},function(I){(C._status===0||C._status===-1)&&(C._status=2,C._result=I)}),C._status===-1&&(C._status=0,C._result=U)}if(C._status===1)return C._result.default;throw C._result}var oe=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},me={map:V,forEach:function(C,U,I){V(C,function(){U.apply(this,arguments)},I)},count:function(C){var U=0;return V(C,function(){U++}),U},toArray:function(C){return V(C,function(U){return U})||[]},only:function(C){if(!re(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ue.Activity=g,ue.Children=me,ue.Component=q,ue.Fragment=u,ue.Profiler=f,ue.PureComponent=X,ue.StrictMode=c,ue.Suspense=y,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ue.__COMPILER_RUNTIME={__proto__:null,c:function(C){return B.H.useMemoCache(C)}},ue.cache=function(C){return function(){return C.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(C,U,I){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var te=$({},C.props),ce=C.key;if(U!=null)for(fe in U.key!==void 0&&(ce=""+U.key),U)!W.call(U,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&U.ref===void 0||(te[fe]=U[fe]);var fe=arguments.length-2;if(fe===1)te.children=I;else if(1<fe){for(var je=Array(fe),Ie=0;Ie<fe;Ie++)je[Ie]=arguments[Ie+2];te.children=je}return se(C.type,ce,te)},ue.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:p,_context:C},C},ue.createElement=function(C,U,I){var te,ce={},fe=null;if(U!=null)for(te in U.key!==void 0&&(fe=""+U.key),U)W.call(U,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ce[te]=U[te]);var je=arguments.length-2;if(je===1)ce.children=I;else if(1<je){for(var Ie=Array(je),Re=0;Re<je;Re++)Ie[Re]=arguments[Re+2];ce.children=Ie}if(C&&C.defaultProps)for(te in je=C.defaultProps,je)ce[te]===void 0&&(ce[te]=je[te]);return se(C,fe,ce)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(C){return{$$typeof:v,render:C}},ue.isValidElement=re,ue.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:J}},ue.memo=function(C,U){return{$$typeof:x,type:C,compare:U===void 0?null:U}},ue.startTransition=function(C){var U=B.T,I={};B.T=I;try{var te=C(),ce=B.S;ce!==null&&ce(I,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(Z,oe)}catch(fe){oe(fe)}finally{U!==null&&I.types!==null&&(U.types=I.types),B.T=U}},ue.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ue.use=function(C){return B.H.use(C)},ue.useActionState=function(C,U,I){return B.H.useActionState(C,U,I)},ue.useCallback=function(C,U){return B.H.useCallback(C,U)},ue.useContext=function(C){return B.H.useContext(C)},ue.useDebugValue=function(){},ue.useDeferredValue=function(C,U){return B.H.useDeferredValue(C,U)},ue.useEffect=function(C,U){return B.H.useEffect(C,U)},ue.useEffectEvent=function(C){return B.H.useEffectEvent(C)},ue.useId=function(){return B.H.useId()},ue.useImperativeHandle=function(C,U,I){return B.H.useImperativeHandle(C,U,I)},ue.useInsertionEffect=function(C,U){return B.H.useInsertionEffect(C,U)},ue.useLayoutEffect=function(C,U){return B.H.useLayoutEffect(C,U)},ue.useMemo=function(C,U){return B.H.useMemo(C,U)},ue.useOptimistic=function(C,U){return B.H.useOptimistic(C,U)},ue.useReducer=function(C,U,I){return B.H.useReducer(C,U,I)},ue.useRef=function(C){return B.H.useRef(C)},ue.useState=function(C){return B.H.useState(C)},ue.useSyncExternalStore=function(C,U,I){return B.H.useSyncExternalStore(C,U,I)},ue.useTransition=function(){return B.H.useTransition()},ue.version="19.2.4",ue}var Zh;function Sd(){return Zh||(Zh=1,ku.exports=Ny()),ku.exports}var w=Sd();const Ae=Ey(w);var Tu={exports:{}},Bl={},Nu={exports:{}},_u={};var Wh;function _y(){return Wh||(Wh=1,(function(i){function r(D,V){var J=D.length;D.push(V);e:for(;0<J;){var oe=J-1>>>1,me=D[oe];if(0<f(me,V))D[oe]=V,D[J]=me,J=oe;else break e}}function u(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var V=D[0],J=D.pop();if(J!==V){D[0]=J;e:for(var oe=0,me=D.length,C=me>>>1;oe<C;){var U=2*(oe+1)-1,I=D[U],te=U+1,ce=D[te];if(0>f(I,J))te<me&&0>f(ce,I)?(D[oe]=ce,D[te]=J,oe=te):(D[oe]=I,D[U]=J,oe=U);else if(te<me&&0>f(ce,J))D[oe]=ce,D[te]=J,oe=te;else break e}}return V}function f(D,V){var J=D.sortIndex-V.sortIndex;return J!==0?J:D.id-V.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var h=Date,v=h.now();i.unstable_now=function(){return h.now()-v}}var y=[],x=[],b=1,g=null,z=3,N=!1,R=!1,$=!1,G=!1,q=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function O(D){for(var V=u(x);V!==null;){if(V.callback===null)c(x);else if(V.startTime<=D)c(x),V.sortIndex=V.expirationTime,r(y,V);else break;V=u(x)}}function P(D){if($=!1,O(D),!R)if(u(y)!==null)R=!0,Z||(Z=!0,K());else{var V=u(x);V!==null&&He(P,V.startTime-D)}}var Z=!1,B=-1,W=5,se=-1;function ze(){return G?!0:!(i.unstable_now()-se<W)}function re(){if(G=!1,Z){var D=i.unstable_now();se=D;var V=!0;try{e:{R=!1,$&&($=!1,Q(B),B=-1),N=!0;var J=z;try{t:{for(O(D),g=u(y);g!==null&&!(g.expirationTime>D&&ze());){var oe=g.callback;if(typeof oe=="function"){g.callback=null,z=g.priorityLevel;var me=oe(g.expirationTime<=D);if(D=i.unstable_now(),typeof me=="function"){g.callback=me,O(D),V=!0;break t}g===u(y)&&c(y),O(D)}else c(y);g=u(y)}if(g!==null)V=!0;else{var C=u(x);C!==null&&He(P,C.startTime-D),V=!1}}break e}finally{g=null,z=J,N=!1}V=void 0}}finally{V?K():Z=!1}}}var K;if(typeof X=="function")K=function(){X(re)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,Se=F.port2;F.port1.onmessage=re,K=function(){Se.postMessage(null)}}else K=function(){q(re,0)};function He(D,V){B=q(function(){D(i.unstable_now())},V)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return z},i.unstable_next=function(D){switch(z){case 1:case 2:case 3:var V=3;break;default:V=z}var J=z;z=V;try{return D()}finally{z=J}},i.unstable_requestPaint=function(){G=!0},i.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=z;z=D;try{return V()}finally{z=J}},i.unstable_scheduleCallback=function(D,V,J){var oe=i.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?oe+J:oe):J=oe,D){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=J+me,D={id:b++,callback:V,priorityLevel:D,startTime:J,expirationTime:me,sortIndex:-1},J>oe?(D.sortIndex=J,r(x,D),u(y)===null&&D===u(x)&&($?(Q(B),B=-1):$=!0,He(P,J-oe))):(D.sortIndex=me,r(y,D),R||N||(R=!0,Z||(Z=!0,K()))),D},i.unstable_shouldYield=ze,i.unstable_wrapCallback=function(D){var V=z;return function(){var J=z;z=V;try{return D.apply(this,arguments)}finally{z=J}}}})(_u)),_u}var Jh;function Ry(){return Jh||(Jh=1,Nu.exports=_y()),Nu.exports}var Ru={exports:{}},yt={};var Fh;function My(){if(Fh)return yt;Fh=1;var i=Sd();function r(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)x+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(y,x,b){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:g==null?null:""+g,children:y,containerInfo:x,implementation:b}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,yt.createPortal=function(y,x){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(r(299));return p(y,x,null,b)},yt.flushSync=function(y){var x=h.T,b=c.p;try{if(h.T=null,c.p=2,y)return y()}finally{h.T=x,c.p=b,c.d.f()}},yt.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(y,x))},yt.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},yt.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var b=x.as,g=v(b,x.crossOrigin),z=typeof x.integrity=="string"?x.integrity:void 0,N=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;b==="style"?c.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:g,integrity:z,fetchPriority:N}):b==="script"&&c.d.X(y,{crossOrigin:g,integrity:z,fetchPriority:N,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},yt.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var b=v(x.as,x.crossOrigin);c.d.M(y,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(y)},yt.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var b=x.as,g=v(b,x.crossOrigin);c.d.L(y,b,{crossOrigin:g,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},yt.preloadModule=function(y,x){if(typeof y=="string")if(x){var b=v(x.as,x.crossOrigin);c.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(y)},yt.requestFormReset=function(y){c.d.r(y)},yt.unstable_batchedUpdates=function(y,x){return y(x)},yt.useFormState=function(y,x,b){return h.H.useFormState(y,x,b)},yt.useFormStatus=function(){return h.H.useHostTransitionStatus()},yt.version="19.2.4",yt}var Ih;function Dy(){if(Ih)return Ru.exports;Ih=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Ru.exports=My(),Ru.exports}var Ph;function Oy(){if(Ph)return Bl;Ph=1;var i=Ry(),r=Sd(),u=Dy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var o=a.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){a=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===a)return y(o),e;if(s===n)return y(o),t;s=s.sibling}throw Error(c(188))}if(a.return!==n.return)a=o,n=s;else{for(var d=!1,m=o.child;m;){if(m===a){d=!0,a=o,n=s;break}if(m===n){d=!0,n=o,a=s;break}m=m.sibling}if(!d){for(m=s.child;m;){if(m===a){d=!0,a=s,n=o;break}if(m===n){d=!0,n=s,a=o;break}m=m.sibling}if(!d)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,z=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),X=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),ze=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var F=Symbol.for("react.client.reference");function Se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case q:return"Profiler";case G:return"StrictMode";case P:return"Suspense";case Z:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case X:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case O:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:Se(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}var He=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},oe=[],me=-1;function C(e){return{current:e}}function U(e){0>me||(e.current=oe[me],oe[me]=null,me--)}function I(e,t){me++,oe[me]=e.current,e.current=t}var te=C(null),ce=C(null),fe=C(null),je=C(null);function Ie(e,t){switch(I(fe,t),I(ce,e),I(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hh(t),e=mh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(te),I(te,e)}function Re(){U(te),U(ce),U(fe)}function ra(e){e.memoizedState!==null&&I(je,e);var t=te.current,a=mh(t,e.type);t!==a&&(I(ce,e),I(te,a))}function oa(e){ce.current===e&&(U(te),U(ce)),je.current===e&&(U(je),Rl._currentValue=J)}var kt,Qn;function $t(e){if(kt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);kt=t&&t[1]||"",Qn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+e+Qn}var sa=!1;function ds(e,t){if(!e||sa)return"";sa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(M){var _=M}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(M){_=M}e.call(Y.prototype)}}else{try{throw Error()}catch(M){_=M}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(M){if(M&&_&&typeof M.stack=="string")return[M.stack,_.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),d=s[0],m=s[1];if(d&&m){var S=d.split(`
`),T=m.split(`
`);for(o=n=0;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;for(;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;if(n===S.length||o===T.length)for(n=S.length-1,o=T.length-1;1<=n&&0<=o&&S[n]!==T[o];)o--;for(;1<=n&&0<=o;n--,o--)if(S[n]!==T[o]){if(n!==1||o!==1)do if(n--,o--,0>o||S[n]!==T[o]){var H=`
`+S[n].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=n&&0<=o);break}}}finally{sa=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$t(a):""}function ix(e,t){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return e.child!==t&&t!==null?$t("Suspense Fallback"):$t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return ds(e.type,!1);case 11:return ds(e.type.render,!1);case 1:return ds(e.type,!0);case 31:return $t("Activity");default:return""}}function Qd(e){try{var t="",a=null;do t+=ix(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var fs=Object.prototype.hasOwnProperty,ps=i.unstable_scheduleCallback,hs=i.unstable_cancelCallback,lx=i.unstable_shouldYield,rx=i.unstable_requestPaint,Tt=i.unstable_now,ox=i.unstable_getCurrentPriorityLevel,Vd=i.unstable_ImmediatePriority,Xd=i.unstable_UserBlockingPriority,lr=i.unstable_NormalPriority,sx=i.unstable_LowPriority,Kd=i.unstable_IdlePriority,cx=i.log,ux=i.unstable_setDisableYieldValue,Qi=null,Nt=null;function qa(e){if(typeof cx=="function"&&ux(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Qi,e)}catch{}}var _t=Math.clz32?Math.clz32:px,dx=Math.log,fx=Math.LN2;function px(e){return e>>>=0,e===0?32:31-(dx(e)/fx|0)|0}var rr=256,or=262144,sr=4194304;function vn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cr(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~s,n!==0?o=vn(n):(d&=m,d!==0?o=vn(d):a||(a=m&~e,a!==0&&(o=vn(a))))):(m=n&~s,m!==0?o=vn(m):d!==0?o=vn(d):a||(a=n&~e,a!==0&&(o=vn(a)))),o===0?0:t!==0&&t!==o&&(t&s)===0&&(s=o&-o,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:o}function Vi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zd(){var e=sr;return sr<<=1,(sr&62914560)===0&&(sr=4194304),e}function ms(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Xi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mx(e,t,a,n,o,s){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,S=e.expirationTimes,T=e.hiddenUpdates;for(a=d&~a;0<a;){var H=31-_t(a),Y=1<<H;m[H]=0,S[H]=-1;var _=T[H];if(_!==null)for(T[H]=null,H=0;H<_.length;H++){var M=_[H];M!==null&&(M.lane&=-536870913)}a&=~Y}n!==0&&Wd(e,n,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function Wd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-_t(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Jd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-_t(a),o=1<<n;o&t|e[n]&t&&(e[n]|=t),a&=~o}}function Fd(e,t){var a=t&-t;return a=(a&42)!==0?1:gs(a),(a&(e.suspendedLanes|t))!==0?0:a}function gs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Id(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Uh(e.type))}function Pd(e,t){var a=V.p;try{return V.p=e,t()}finally{V.p=a}}var Ya=Math.random().toString(36).slice(2),ut="__reactFiber$"+Ya,jt="__reactProps$"+Ya,Vn="__reactContainer$"+Ya,ys="__reactEvents$"+Ya,gx="__reactListeners$"+Ya,xx="__reactHandles$"+Ya,ef="__reactResources$"+Ya,Ki="__reactMarker$"+Ya;function bs(e){delete e[ut],delete e[jt],delete e[ys],delete e[gx],delete e[xx]}function Xn(e){var t=e[ut];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Vn]||a[ut]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Sh(e);e!==null;){if(a=e[ut])return a;e=Sh(e)}return t}e=a,a=e.parentNode}return null}function Kn(e){if(e=e[ut]||e[Vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Zn(e){var t=e[ef];return t||(t=e[ef]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[Ki]=!0}var tf=new Set,af={};function jn(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(af[e]=t,e=0;e<t.length;e++)tf.add(t[e])}var yx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nf={},lf={};function bx(e){return fs.call(lf,e)?!0:fs.call(nf,e)?!1:yx.test(e)?lf[e]=!0:(nf[e]=!0,!1)}function ur(e,t,a){if(bx(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function dr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ha(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vx(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){a=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vs(e){if(!e._valueTracker){var t=rf(e)?"checked":"value";e._valueTracker=vx(e,t,""+e[t])}}function of(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=rf(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jx=/[\n"\\]/g;function Yt(e){return e.replace(jx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function js(e,t,a,n,o,s,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ss(e,d,qt(t)):a!=null?Ss(e,d,qt(a)):n!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+qt(m):e.removeAttribute("name")}function sf(e,t,a,n,o,s,d,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){vs(e);return}a=a!=null?""+qt(a):"",t=t!=null?""+qt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),vs(e)}function Ss(e,t,a){t==="number"&&fr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jn(e,t,a,n){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&n&&(e[a].defaultSelected=!0)}else{for(a=""+qt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function cf(e,t,a){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+qt(a):""}function uf(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(He(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=qt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),vs(e)}function Fn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Sx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function df(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Sx.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ff(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var o in t)n=t[o],t.hasOwnProperty(o)&&a[o]!==n&&df(e,o,n)}else for(var s in t)t.hasOwnProperty(s)&&df(e,s,t[s])}function ws(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(e){return Cx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ma(){}var Cs=null;function As(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var In=null,Pn=null;function pf(e){var t=Kn(e);if(t&&(e=t.stateNode)){var a=e[jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(js(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var o=n[jt]||null;if(!o)throw Error(c(90));js(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&of(n)}break e;case"textarea":cf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Jn(e,!!a.multiple,t,!1)}}}var zs=!1;function hf(e,t,a){if(zs)return e(t,a);zs=!0;try{var n=e(t);return n}finally{if(zs=!1,(In!==null||Pn!==null)&&(eo(),In&&(t=In,e=Pn,Pn=In=null,pf(t),e)))for(t=0;t<e.length;t++)pf(e[t])}}function Wi(e,t){var a=e.stateNode;if(a===null)return null;var n=a[jt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=!1;if(ga)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Es=!1}var Ga=null,ks=null,hr=null;function mf(){if(hr)return hr;var e,t=ks,a=t.length,n,o="value"in Ga?Ga.value:Ga.textContent,s=o.length;for(e=0;e<a&&t[e]===o[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===o[s-n];n++);return hr=o.slice(e,1<n?1-n:void 0)}function mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gr(){return!0}function gf(){return!1}function St(e){function t(a,n,o,s,d){this._reactName=a,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gr:gf,this.isPropagationStopped=gf,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xr=St(Sn),Fi=g({},Sn,{view:0,detail:0}),Ax=St(Fi),Ts,Ns,Ii,yr=g({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(Ts=e.screenX-Ii.screenX,Ns=e.screenY-Ii.screenY):Ns=Ts=0,Ii=e),Ts)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),xf=St(yr),zx=g({},yr,{dataTransfer:0}),Ex=St(zx),kx=g({},Fi,{relatedTarget:0}),_s=St(kx),Tx=g({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=St(Tx),_x=g({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rx=St(_x),Mx=g({},Sn,{data:0}),yf=St(Mx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hx[e])?!!t[e]:!1}function Rs(){return Bx}var Ux=g({},Fi,{key:function(e){if(e.key){var t=Dx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(e){return e.type==="keypress"?mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lx=St(Ux),$x=g({},yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=St($x),qx=g({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),Yx=St(qx),Gx=g({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qx=St(Gx),Vx=g({},yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xx=St(Vx),Kx=g({},Sn,{newState:0,oldState:0}),Zx=St(Kx),Wx=[9,13,27,32],Ms=ga&&"CompositionEvent"in window,Pi=null;ga&&"documentMode"in document&&(Pi=document.documentMode);var Jx=ga&&"TextEvent"in window&&!Pi,vf=ga&&(!Ms||Pi&&8<Pi&&11>=Pi),jf=" ",Sf=!1;function wf(e,t){switch(e){case"keyup":return Wx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ei=!1;function Fx(e,t){switch(e){case"compositionend":return Cf(t);case"keypress":return t.which!==32?null:(Sf=!0,jf);case"textInput":return e=t.data,e===jf&&Sf?null:e;default:return null}}function Ix(e,t){if(ei)return e==="compositionend"||!Ms&&wf(e,t)?(e=mf(),hr=ks=Ga=null,ei=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vf&&t.locale!=="ko"?null:t.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Px[e.type]:t==="textarea"}function zf(e,t,a,n){In?Pn?Pn.push(n):Pn=[n]:In=n,t=oo(t,"onChange"),0<t.length&&(a=new xr("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var el=null,tl=null;function e1(e){sh(e,0)}function br(e){var t=Zi(e);if(of(t))return e}function Ef(e,t){if(e==="change")return t}var kf=!1;if(ga){var Ds;if(ga){var Os="oninput"in document;if(!Os){var Tf=document.createElement("div");Tf.setAttribute("oninput","return;"),Os=typeof Tf.oninput=="function"}Ds=Os}else Ds=!1;kf=Ds&&(!document.documentMode||9<document.documentMode)}function Nf(){el&&(el.detachEvent("onpropertychange",_f),tl=el=null)}function _f(e){if(e.propertyName==="value"&&br(tl)){var t=[];zf(t,tl,e,As(e)),hf(e1,t)}}function t1(e,t,a){e==="focusin"?(Nf(),el=t,tl=a,el.attachEvent("onpropertychange",_f)):e==="focusout"&&Nf()}function a1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return br(tl)}function n1(e,t){if(e==="click")return br(t)}function i1(e,t){if(e==="input"||e==="change")return br(t)}function l1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:l1;function al(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var o=a[n];if(!fs.call(t,o)||!Rt(e[o],t[o]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mf(e,t){var a=Rf(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rf(a)}}function Df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Of(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=fr(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var r1=ga&&"documentMode"in document&&11>=document.documentMode,ti=null,Bs=null,nl=null,Us=!1;function Hf(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Us||ti==null||ti!==fr(n)||(n=ti,"selectionStart"in n&&Hs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),nl&&al(nl,n)||(nl=n,n=oo(Bs,"onSelect"),0<n.length&&(t=new xr("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=ti)))}function wn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ai={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionrun:wn("Transition","TransitionRun"),transitionstart:wn("Transition","TransitionStart"),transitioncancel:wn("Transition","TransitionCancel"),transitionend:wn("Transition","TransitionEnd")},Ls={},Bf={};ga&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function Cn(e){if(Ls[e])return Ls[e];if(!ai[e])return e;var t=ai[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Bf)return Ls[e]=t[a];return e}var Uf=Cn("animationend"),Lf=Cn("animationiteration"),$f=Cn("animationstart"),o1=Cn("transitionrun"),s1=Cn("transitionstart"),c1=Cn("transitioncancel"),qf=Cn("transitionend"),Yf=new Map,$s="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$s.push("scrollEnd");function ea(e,t){Yf.set(e,t),jn(t,[e])}var vr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Gt=[],ni=0,qs=0;function jr(){for(var e=ni,t=qs=ni=0;t<e;){var a=Gt[t];Gt[t++]=null;var n=Gt[t];Gt[t++]=null;var o=Gt[t];Gt[t++]=null;var s=Gt[t];if(Gt[t++]=null,n!==null&&o!==null){var d=n.pending;d===null?o.next=o:(o.next=d.next,d.next=o),n.pending=o}s!==0&&Gf(a,o,s)}}function Sr(e,t,a,n){Gt[ni++]=e,Gt[ni++]=t,Gt[ni++]=a,Gt[ni++]=n,qs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ys(e,t,a,n){return Sr(e,t,a,n),wr(e)}function An(e,t){return Sr(e,null,null,t),wr(e)}function Gf(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var o=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&t!==null&&(o=31-_t(a),e=s.hiddenUpdates,n=e[o],n===null?e[o]=[t]:n.push(t),t.lane=a|536870912),s):null}function wr(e){if(50<Al)throw Al=0,Fc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ii={};function u1(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,a,n){return new u1(e,t,a,n)}function Gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,t){var a=e.alternate;return a===null?(a=Mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Cr(e,t,a,n,o,s){var d=0;if(n=e,typeof e=="function")Gs(e)&&(d=1);else if(typeof e=="string")d=my(e,a,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=Mt(31,a,t,o),e.elementType=se,e.lanes=s,e;case $:return zn(a.children,o,s,t);case G:d=8,o|=24;break;case q:return e=Mt(12,a,t,o|2),e.elementType=q,e.lanes=s,e;case P:return e=Mt(13,a,t,o),e.elementType=P,e.lanes=s,e;case Z:return e=Mt(19,a,t,o),e.elementType=Z,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:d=10;break e;case Q:d=9;break e;case O:d=11;break e;case B:d=14;break e;case W:d=16,n=null;break e}d=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=Mt(d,a,t,o),t.elementType=e,t.type=n,t.lanes=s,t}function zn(e,t,a,n){return e=Mt(7,e,n,t),e.lanes=a,e}function Qs(e,t,a){return e=Mt(6,e,null,t),e.lanes=a,e}function Vf(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function Vs(e,t,a){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Xf=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var a=Xf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Qd(t)},Xf.set(e,t),t)}return{value:e,source:t,stack:Qd(t)}}var li=[],ri=0,Ar=null,il=0,Vt=[],Xt=0,Qa=null,ca=1,ua="";function ya(e,t){li[ri++]=il,li[ri++]=Ar,Ar=e,il=t}function Kf(e,t,a){Vt[Xt++]=ca,Vt[Xt++]=ua,Vt[Xt++]=Qa,Qa=e;var n=ca;e=ua;var o=32-_t(n)-1;n&=~(1<<o),a+=1;var s=32-_t(t)+o;if(30<s){var d=o-o%5;s=(n&(1<<d)-1).toString(32),n>>=d,o-=d,ca=1<<32-_t(t)+o|a<<o|n,ua=s+e}else ca=1<<s|a<<o|n,ua=e}function Xs(e){e.return!==null&&(ya(e,1),Kf(e,1,0))}function Ks(e){for(;e===Ar;)Ar=li[--ri],li[ri]=null,il=li[--ri],li[ri]=null;for(;e===Qa;)Qa=Vt[--Xt],Vt[Xt]=null,ua=Vt[--Xt],Vt[Xt]=null,ca=Vt[--Xt],Vt[Xt]=null}function Zf(e,t){Vt[Xt++]=ca,Vt[Xt++]=ua,Vt[Xt++]=Qa,ca=t.id,ua=t.overflow,Qa=e}var dt=null,Ue=null,ve=!1,Va=null,Kt=!1,Zs=Error(c(519));function Xa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(Qt(t,e)),Zs}function Wf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ut]=e,t[jt]=n,a){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(a=0;a<El.length;a++)xe(El[a],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),sf(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),uf(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||fh(t.textContent,a)?(n.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),n.onScroll!=null&&xe("scroll",t),n.onScrollEnd!=null&&xe("scrollend",t),n.onClick!=null&&(t.onclick=ma),t=!0):t=!1,t||Xa(e,!0)}function Jf(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:dt=dt.return}}function oi(e){if(e!==dt)return!1;if(!ve)return Jf(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fu(e.type,e.memoizedProps)),a=!a),a&&Ue&&Xa(e),Jf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ue=jh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ue=jh(e)}else t===27?(t=Ue,on(e.type)?(e=xu,xu=null,Ue=e):Ue=t):Ue=dt?Wt(e.stateNode.nextSibling):null;return!0}function En(){Ue=dt=null,ve=!1}function Ws(){var e=Va;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),Va=null),e}function ll(e){Va===null?Va=[e]:Va.push(e)}var Js=C(null),kn=null,ba=null;function Ka(e,t,a){I(Js,t._currentValue),t._currentValue=a}function va(e){e._currentValue=Js.current,U(Js)}function Fs(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Is(e,t,a,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var d=o.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=o;for(var S=0;S<t.length;S++)if(m.context===t[S]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),Fs(s.return,a,e),n||(d=null);break e}s=m.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(c(341));d.lanes|=a,s=d.alternate,s!==null&&(s.lanes|=a),Fs(d,a,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function si(e,t,a,n){e=null;for(var o=t,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var m=o.type;Rt(o.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(o===je.current){if(d=o.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Rl):e=[Rl])}o=o.return}e!==null&&Is(t,e,a,n),t.flags|=262144}function zr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Tn(e){kn=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return Ff(kn,e)}function Er(e,t){return kn===null&&Tn(e),Ff(e,t)}function Ff(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ba===null){if(e===null)throw Error(c(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return a}var d1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},f1=i.unstable_scheduleCallback,p1=i.unstable_NormalPriority,Pe={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ps(){return{controller:new d1,data:new Map,refCount:0}}function rl(e){e.refCount--,e.refCount===0&&f1(p1,function(){e.controller.abort()})}var ol=null,ec=0,ci=0,ui=null;function h1(e,t){if(ol===null){var a=ol=[];ec=0,ci=nu(),ui={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ec++,t.then(If,If),t}function If(){if(--ec===0&&ol!==null){ui!==null&&(ui.status="fulfilled");var e=ol;ol=null,ci=0,ui=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function m1(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var o=0;o<a.length;o++)(0,a[o])(t)},function(o){for(n.status="rejected",n.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),n}var Pf=D.S;D.S=function(e,t){H0=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&h1(e,t),Pf!==null&&Pf(e,t)};var Nn=C(null);function tc(){var e=Nn.current;return e!==null?e:Be.pooledCache}function kr(e,t){t===null?I(Nn,Nn.current):I(Nn,t.pool)}function ep(){var e=tc();return e===null?null:{parent:Pe._currentValue,pool:e}}var di=Error(c(460)),ac=Error(c(474)),Tr=Error(c(542)),Nr={then:function(){}};function tp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ap(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ma,ma),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ip(e),e;default:if(typeof t.status=="string")t.then(ma,ma);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=n}},function(n){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ip(e),e}throw Rn=t,di}}function _n(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rn=a,di):a}}var Rn=null;function np(){if(Rn===null)throw Error(c(459));var e=Rn;return Rn=null,e}function ip(e){if(e===di||e===Tr)throw Error(c(483))}var fi=null,sl=0;function _r(e){var t=sl;return sl+=1,fi===null&&(fi=[]),ap(fi,e,t)}function cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Rr(e,t){throw t.$$typeof===z?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function lp(e){function t(E,A){if(e){var k=E.deletions;k===null?(E.deletions=[A],E.flags|=16):k.push(A)}}function a(E,A){if(!e)return null;for(;A!==null;)t(E,A),A=A.sibling;return null}function n(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function o(E,A){return E=xa(E,A),E.index=0,E.sibling=null,E}function s(E,A,k){return E.index=k,e?(k=E.alternate,k!==null?(k=k.index,k<A?(E.flags|=67108866,A):k):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function d(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function m(E,A,k,L){return A===null||A.tag!==6?(A=Qs(k,E.mode,L),A.return=E,A):(A=o(A,k),A.return=E,A)}function S(E,A,k,L){var ie=k.type;return ie===$?H(E,A,k.props.children,L,k.key):A!==null&&(A.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===W&&_n(ie)===A.type)?(A=o(A,k.props),cl(A,k),A.return=E,A):(A=Cr(k.type,k.key,k.props,null,E.mode,L),cl(A,k),A.return=E,A)}function T(E,A,k,L){return A===null||A.tag!==4||A.stateNode.containerInfo!==k.containerInfo||A.stateNode.implementation!==k.implementation?(A=Vs(k,E.mode,L),A.return=E,A):(A=o(A,k.children||[]),A.return=E,A)}function H(E,A,k,L,ie){return A===null||A.tag!==7?(A=zn(k,E.mode,L,ie),A.return=E,A):(A=o(A,k),A.return=E,A)}function Y(E,A,k){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Qs(""+A,E.mode,k),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case N:return k=Cr(A.type,A.key,A.props,null,E.mode,k),cl(k,A),k.return=E,k;case R:return A=Vs(A,E.mode,k),A.return=E,A;case W:return A=_n(A),Y(E,A,k)}if(He(A)||K(A))return A=zn(A,E.mode,k,null),A.return=E,A;if(typeof A.then=="function")return Y(E,_r(A),k);if(A.$$typeof===X)return Y(E,Er(E,A),k);Rr(E,A)}return null}function _(E,A,k,L){var ie=A!==null?A.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return ie!==null?null:m(E,A,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case N:return k.key===ie?S(E,A,k,L):null;case R:return k.key===ie?T(E,A,k,L):null;case W:return k=_n(k),_(E,A,k,L)}if(He(k)||K(k))return ie!==null?null:H(E,A,k,L,null);if(typeof k.then=="function")return _(E,A,_r(k),L);if(k.$$typeof===X)return _(E,A,Er(E,k),L);Rr(E,k)}return null}function M(E,A,k,L,ie){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return E=E.get(k)||null,m(A,E,""+L,ie);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case N:return E=E.get(L.key===null?k:L.key)||null,S(A,E,L,ie);case R:return E=E.get(L.key===null?k:L.key)||null,T(A,E,L,ie);case W:return L=_n(L),M(E,A,k,L,ie)}if(He(L)||K(L))return E=E.get(k)||null,H(A,E,L,ie,null);if(typeof L.then=="function")return M(E,A,k,_r(L),ie);if(L.$$typeof===X)return M(E,A,k,Er(A,L),ie);Rr(A,L)}return null}function ae(E,A,k,L){for(var ie=null,we=null,ne=A,pe=A=0,be=null;ne!==null&&pe<k.length;pe++){ne.index>pe?(be=ne,ne=null):be=ne.sibling;var Ce=_(E,ne,k[pe],L);if(Ce===null){ne===null&&(ne=be);break}e&&ne&&Ce.alternate===null&&t(E,ne),A=s(Ce,A,pe),we===null?ie=Ce:we.sibling=Ce,we=Ce,ne=be}if(pe===k.length)return a(E,ne),ve&&ya(E,pe),ie;if(ne===null){for(;pe<k.length;pe++)ne=Y(E,k[pe],L),ne!==null&&(A=s(ne,A,pe),we===null?ie=ne:we.sibling=ne,we=ne);return ve&&ya(E,pe),ie}for(ne=n(ne);pe<k.length;pe++)be=M(ne,E,pe,k[pe],L),be!==null&&(e&&be.alternate!==null&&ne.delete(be.key===null?pe:be.key),A=s(be,A,pe),we===null?ie=be:we.sibling=be,we=be);return e&&ne.forEach(function(fn){return t(E,fn)}),ve&&ya(E,pe),ie}function le(E,A,k,L){if(k==null)throw Error(c(151));for(var ie=null,we=null,ne=A,pe=A=0,be=null,Ce=k.next();ne!==null&&!Ce.done;pe++,Ce=k.next()){ne.index>pe?(be=ne,ne=null):be=ne.sibling;var fn=_(E,ne,Ce.value,L);if(fn===null){ne===null&&(ne=be);break}e&&ne&&fn.alternate===null&&t(E,ne),A=s(fn,A,pe),we===null?ie=fn:we.sibling=fn,we=fn,ne=be}if(Ce.done)return a(E,ne),ve&&ya(E,pe),ie;if(ne===null){for(;!Ce.done;pe++,Ce=k.next())Ce=Y(E,Ce.value,L),Ce!==null&&(A=s(Ce,A,pe),we===null?ie=Ce:we.sibling=Ce,we=Ce);return ve&&ya(E,pe),ie}for(ne=n(ne);!Ce.done;pe++,Ce=k.next())Ce=M(ne,E,pe,Ce.value,L),Ce!==null&&(e&&Ce.alternate!==null&&ne.delete(Ce.key===null?pe:Ce.key),A=s(Ce,A,pe),we===null?ie=Ce:we.sibling=Ce,we=Ce);return e&&ne.forEach(function(zy){return t(E,zy)}),ve&&ya(E,pe),ie}function Oe(E,A,k,L){if(typeof k=="object"&&k!==null&&k.type===$&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case N:e:{for(var ie=k.key;A!==null;){if(A.key===ie){if(ie=k.type,ie===$){if(A.tag===7){a(E,A.sibling),L=o(A,k.props.children),L.return=E,E=L;break e}}else if(A.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===W&&_n(ie)===A.type){a(E,A.sibling),L=o(A,k.props),cl(L,k),L.return=E,E=L;break e}a(E,A);break}else t(E,A);A=A.sibling}k.type===$?(L=zn(k.props.children,E.mode,L,k.key),L.return=E,E=L):(L=Cr(k.type,k.key,k.props,null,E.mode,L),cl(L,k),L.return=E,E=L)}return d(E);case R:e:{for(ie=k.key;A!==null;){if(A.key===ie)if(A.tag===4&&A.stateNode.containerInfo===k.containerInfo&&A.stateNode.implementation===k.implementation){a(E,A.sibling),L=o(A,k.children||[]),L.return=E,E=L;break e}else{a(E,A);break}else t(E,A);A=A.sibling}L=Vs(k,E.mode,L),L.return=E,E=L}return d(E);case W:return k=_n(k),Oe(E,A,k,L)}if(He(k))return ae(E,A,k,L);if(K(k)){if(ie=K(k),typeof ie!="function")throw Error(c(150));return k=ie.call(k),le(E,A,k,L)}if(typeof k.then=="function")return Oe(E,A,_r(k),L);if(k.$$typeof===X)return Oe(E,A,Er(E,k),L);Rr(E,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,A!==null&&A.tag===6?(a(E,A.sibling),L=o(A,k),L.return=E,E=L):(a(E,A),L=Qs(k,E.mode,L),L.return=E,E=L),d(E)):a(E,A)}return function(E,A,k,L){try{sl=0;var ie=Oe(E,A,k,L);return fi=null,ie}catch(ne){if(ne===di||ne===Tr)throw ne;var we=Mt(29,ne,null,E.mode);return we.lanes=L,we.return=E,we}}}var Mn=lp(!0),rp=lp(!1),Za=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ic(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ee&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,t=wr(e),Gf(e,null,a),t}return Sr(e,n,t,a),wr(e)}function ul(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Jd(e,a)}}function lc(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var o=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?o=s=d:s=s.next=d,a=a.next}while(a!==null);s===null?o=s=t:s=s.next=t}else o=s=t;a={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var rc=!1;function dl(){if(rc){var e=ui;if(e!==null)throw e}}function fl(e,t,a,n){rc=!1;var o=e.updateQueue;Za=!1;var s=o.firstBaseUpdate,d=o.lastBaseUpdate,m=o.shared.pending;if(m!==null){o.shared.pending=null;var S=m,T=S.next;S.next=null,d===null?s=T:d.next=T,d=S;var H=e.alternate;H!==null&&(H=H.updateQueue,m=H.lastBaseUpdate,m!==d&&(m===null?H.firstBaseUpdate=T:m.next=T,H.lastBaseUpdate=S))}if(s!==null){var Y=o.baseState;d=0,H=T=S=null,m=s;do{var _=m.lane&-536870913,M=_!==m.lane;if(M?(ye&_)===_:(n&_)===_){_!==0&&_===ci&&(rc=!0),H!==null&&(H=H.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ae=e,le=m;_=t;var Oe=a;switch(le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Y=ae.call(Oe,Y,_);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,_=typeof ae=="function"?ae.call(Oe,Y,_):ae,_==null)break e;Y=g({},Y,_);break e;case 2:Za=!0}}_=m.callback,_!==null&&(e.flags|=64,M&&(e.flags|=8192),M=o.callbacks,M===null?o.callbacks=[_]:M.push(_))}else M={lane:_,tag:m.tag,payload:m.payload,callback:m.callback,next:null},H===null?(T=H=M,S=Y):H=H.next=M,d|=_;if(m=m.next,m===null){if(m=o.shared.pending,m===null)break;M=m,m=M.next,M.next=null,o.lastBaseUpdate=M,o.shared.pending=null}}while(!0);H===null&&(S=Y),o.baseState=S,o.firstBaseUpdate=T,o.lastBaseUpdate=H,s===null&&(o.shared.lanes=0),tn|=d,e.lanes=d,e.memoizedState=Y}}function op(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function sp(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)op(a[e],t)}var pi=C(null),Mr=C(0);function cp(e,t){e=Ta,I(Mr,e),I(pi,t),Ta=e|t.baseLanes}function oc(){I(Mr,Ta),I(pi,pi.current)}function sc(){Ta=Mr.current,U(pi),U(Mr)}var Dt=C(null),Zt=null;function Fa(e){var t=e.alternate;I(Ze,Ze.current&1),I(Dt,e),Zt===null&&(t===null||pi.current!==null||t.memoizedState!==null)&&(Zt=e)}function cc(e){I(Ze,Ze.current),I(Dt,e),Zt===null&&(Zt=e)}function up(e){e.tag===22?(I(Ze,Ze.current),I(Dt,e),Zt===null&&(Zt=e)):Ia()}function Ia(){I(Ze,Ze.current),I(Dt,Dt.current)}function Ot(e){U(Dt),Zt===e&&(Zt=null),U(Ze)}var Ze=C(0);function Dr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mu(a)||gu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ja=0,de=null,Me=null,et=null,Or=!1,hi=!1,Dn=!1,Hr=0,pl=0,mi=null,g1=0;function Ve(){throw Error(c(321))}function uc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Rt(e[a],t[a]))return!1;return!0}function dc(e,t,a,n,o,s){return ja=s,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Kp:zc,Dn=!1,s=a(n,o),Dn=!1,hi&&(s=fp(t,a,n,o)),dp(e),s}function dp(e){D.H=gl;var t=Me!==null&&Me.next!==null;if(ja=0,et=Me=de=null,Or=!1,pl=0,mi=null,t)throw Error(c(300));e===null||tt||(e=e.dependencies,e!==null&&zr(e)&&(tt=!0))}function fp(e,t,a,n){de=e;var o=0;do{if(hi&&(mi=null),pl=0,hi=!1,25<=o)throw Error(c(301));if(o+=1,et=Me=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=Zp,s=t(a,n)}while(hi);return s}function x1(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?hl(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(de.flags|=1024),t}function fc(){var e=Hr!==0;return Hr=0,e}function pc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function hc(e){if(Or){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Or=!1}ja=0,et=Me=de=null,hi=!1,pl=Hr=0,mi=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?de.memoizedState=et=e:et=et.next=e,et}function We(){if(Me===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=et===null?de.memoizedState:et.next;if(t!==null)et=t,Me=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},et===null?de.memoizedState=et=e:et=et.next=e}return et}function Br(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var t=pl;return pl+=1,mi===null&&(mi=[]),e=ap(mi,e,t),t=de,(et===null?t.memoizedState:et.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Kp:zc),e}function Ur(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===X)return ft(e)}throw Error(c(438,String(e)))}function mc(e){var t=null,a=de.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=de.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Br(),de.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ze;return t.index++,a}function Sa(e,t){return typeof t=="function"?t(e):t}function Lr(e){var t=We();return gc(t,Me,e)}function gc(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var o=e.baseQueue,s=n.pending;if(s!==null){if(o!==null){var d=o.next;o.next=s.next,s.next=d}t.baseQueue=o=s,n.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var m=d=null,S=null,T=t,H=!1;do{var Y=T.lane&-536870913;if(Y!==T.lane?(ye&Y)===Y:(ja&Y)===Y){var _=T.revertLane;if(_===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),Y===ci&&(H=!0);else if((ja&_)===_){T=T.next,_===ci&&(H=!0);continue}else Y={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},S===null?(m=S=Y,d=s):S=S.next=Y,de.lanes|=_,tn|=_;Y=T.action,Dn&&a(s,Y),s=T.hasEagerState?T.eagerState:a(s,Y)}else _={lane:Y,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},S===null?(m=S=_,d=s):S=S.next=_,de.lanes|=Y,tn|=Y;T=T.next}while(T!==null&&T!==t);if(S===null?d=s:S.next=m,!Rt(s,e.memoizedState)&&(tt=!0,H&&(a=ui,a!==null)))throw a;e.memoizedState=s,e.baseState=d,e.baseQueue=S,n.lastRenderedState=s}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function xc(e){var t=We(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,o=a.pending,s=t.memoizedState;if(o!==null){a.pending=null;var d=o=o.next;do s=e(s,d.action),d=d.next;while(d!==o);Rt(s,t.memoizedState)||(tt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function pp(e,t,a){var n=de,o=We(),s=ve;if(s){if(a===void 0)throw Error(c(407));a=a()}else a=t();var d=!Rt((Me||o).memoizedState,a);if(d&&(o.memoizedState=a,tt=!0),o=o.queue,vc(gp.bind(null,n,o,e),[e]),o.getSnapshot!==t||d||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,gi(9,{destroy:void 0},mp.bind(null,n,o,a,t),null),Be===null)throw Error(c(349));s||(ja&127)!==0||hp(n,t,a)}return a}function hp(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=de.updateQueue,t===null?(t=Br(),de.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function mp(e,t,a,n){t.value=a,t.getSnapshot=n,xp(t)&&yp(e)}function gp(e,t,a){return a(function(){xp(t)&&yp(e)})}function xp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Rt(e,a)}catch{return!0}}function yp(e){var t=An(e,2);t!==null&&Et(t,e,2)}function yc(e){var t=vt();if(typeof e=="function"){var a=e;if(e=a(),Dn){qa(!0);try{a()}finally{qa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},t}function bp(e,t,a,n){return e.baseState=a,gc(e,Me,typeof n=="function"?n:Sa)}function y1(e,t,a,n,o){if(Yr(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};D.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,vp(t,s)):(s.next=a.next,t.pending=a.next=s)}}function vp(e,t){var a=t.action,n=t.payload,o=e.state;if(t.isTransition){var s=D.T,d={};D.T=d;try{var m=a(o,n),S=D.S;S!==null&&S(d,m),jp(e,t,m)}catch(T){bc(e,t,T)}finally{s!==null&&d.types!==null&&(s.types=d.types),D.T=s}}else try{s=a(o,n),jp(e,t,s)}catch(T){bc(e,t,T)}}function jp(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Sp(e,t,n)},function(n){return bc(e,t,n)}):Sp(e,t,a)}function Sp(e,t,a){t.status="fulfilled",t.value=a,wp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,vp(e,a)))}function bc(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,wp(t),t=t.next;while(t!==n)}e.action=null}function wp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cp(e,t){return t}function Ap(e,t){if(ve){var a=Be.formState;if(a!==null){e:{var n=de;if(ve){if(Ue){t:{for(var o=Ue,s=Kt;o.nodeType!==8;){if(!s){o=null;break t}if(o=Wt(o.nextSibling),o===null){o=null;break t}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Ue=Wt(o.nextSibling),n=o.data==="F!";break e}}Xa(n)}n=!1}n&&(t=a[0])}}return a=vt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cp,lastRenderedState:t},a.queue=n,a=Qp.bind(null,de,n),n.dispatch=a,n=yc(!1),s=Ac.bind(null,de,!1,n.queue),n=vt(),o={state:t,dispatch:null,action:e,pending:null},n.queue=o,a=y1.bind(null,de,o,s,a),o.dispatch=a,n.memoizedState=e,[t,a,!1]}function zp(e){var t=We();return Ep(t,Me,e)}function Ep(e,t,a){if(t=gc(e,t,Cp)[0],e=Lr(Sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=hl(t)}catch(d){throw d===di?Tr:d}else n=t;t=We();var o=t.queue,s=o.dispatch;return a!==t.memoizedState&&(de.flags|=2048,gi(9,{destroy:void 0},b1.bind(null,o,a),null)),[n,s,e]}function b1(e,t){e.action=t}function kp(e){var t=We(),a=Me;if(a!==null)return Ep(t,a,e);We(),t=t.memoizedState,a=We();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function gi(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=de.updateQueue,t===null&&(t=Br(),de.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Tp(){return We().memoizedState}function $r(e,t,a,n){var o=vt();de.flags|=e,o.memoizedState=gi(1|t,{destroy:void 0},a,n===void 0?null:n)}function qr(e,t,a,n){var o=We();n=n===void 0?null:n;var s=o.memoizedState.inst;Me!==null&&n!==null&&uc(n,Me.memoizedState.deps)?o.memoizedState=gi(t,s,a,n):(de.flags|=e,o.memoizedState=gi(1|t,s,a,n))}function Np(e,t){$r(8390656,8,e,t)}function vc(e,t){qr(2048,8,e,t)}function v1(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=Br(),de.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function _p(e){var t=We().memoizedState;return v1({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Rp(e,t){return qr(4,2,e,t)}function Mp(e,t){return qr(4,4,e,t)}function Dp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Op(e,t,a){a=a!=null?a.concat([e]):null,qr(4,4,Dp.bind(null,t,e),a)}function jc(){}function Hp(e,t){var a=We();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&uc(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Bp(e,t){var a=We();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&uc(t,n[1]))return n[0];if(n=e(),Dn){qa(!0);try{e()}finally{qa(!1)}}return a.memoizedState=[n,t],n}function Sc(e,t,a){return a===void 0||(ja&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=U0(),de.lanes|=e,tn|=e,a)}function Up(e,t,a,n){return Rt(a,t)?a:pi.current!==null?(e=Sc(e,a,n),Rt(e,t)||(tt=!0),e):(ja&42)===0||(ja&1073741824)!==0&&(ye&261930)===0?(tt=!0,e.memoizedState=a):(e=U0(),de.lanes|=e,tn|=e,t)}function Lp(e,t,a,n,o){var s=V.p;V.p=s!==0&&8>s?s:8;var d=D.T,m={};D.T=m,Ac(e,!1,t,a);try{var S=o(),T=D.S;if(T!==null&&T(m,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=m1(S,n);ml(e,t,H,Ut(e))}else ml(e,t,n,Ut(e))}catch(Y){ml(e,t,{then:function(){},status:"rejected",reason:Y},Ut())}finally{V.p=s,d!==null&&m.types!==null&&(d.types=m.types),D.T=d}}function j1(){}function wc(e,t,a,n){if(e.tag!==5)throw Error(c(476));var o=$p(e).queue;Lp(e,o,t,J,a===null?j1:function(){return qp(e),a(n)})}function $p(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qp(e){var t=$p(e);t.next===null&&(t=e.alternate.memoizedState),ml(e,t.next.queue,{},Ut())}function Cc(){return ft(Rl)}function Yp(){return We().memoizedState}function Gp(){return We().memoizedState}function S1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ut();e=Wa(a);var n=Ja(t,e,a);n!==null&&(Et(n,t,a),ul(n,t,a)),t={cache:Ps()},e.payload=t;return}t=t.return}}function w1(e,t,a){var n=Ut();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yr(e)?Vp(t,a):(a=Ys(e,t,a,n),a!==null&&(Et(a,e,n),Xp(a,t,n)))}function Qp(e,t,a){var n=Ut();ml(e,t,a,n)}function ml(e,t,a,n){var o={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yr(e))Vp(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,m=s(d,a);if(o.hasEagerState=!0,o.eagerState=m,Rt(m,d))return Sr(e,t,o,0),Be===null&&jr(),!1}catch{}if(a=Ys(e,t,o,n),a!==null)return Et(a,e,n),Xp(a,t,n),!0}return!1}function Ac(e,t,a,n){if(n={lane:2,revertLane:nu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Yr(e)){if(t)throw Error(c(479))}else t=Ys(e,a,n,2),t!==null&&Et(t,e,2)}function Yr(e){var t=e.alternate;return e===de||t!==null&&t===de}function Vp(e,t){hi=Or=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Xp(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Jd(e,a)}}var gl={readContext:ft,use:Ur,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};gl.useEffectEvent=Ve;var Kp={readContext:ft,use:Ur,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Np,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,$r(4194308,4,Dp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){$r(4,2,e,t)},useMemo:function(e,t){var a=vt();t=t===void 0?null:t;var n=e();if(Dn){qa(!0);try{e()}finally{qa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=vt();if(a!==void 0){var o=a(t);if(Dn){qa(!0);try{a(t)}finally{qa(!1)}}}else o=t;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=w1.bind(null,de,e),[n.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=yc(e);var t=e.queue,a=Qp.bind(null,de,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:jc,useDeferredValue:function(e,t){var a=vt();return Sc(a,e,t)},useTransition:function(){var e=yc(!1);return e=Lp.bind(null,de,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=de,o=vt();if(ve){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Be===null)throw Error(c(349));(ye&127)!==0||hp(n,t,a)}o.memoizedState=a;var s={value:a,getSnapshot:t};return o.queue=s,Np(gp.bind(null,n,s,e),[e]),n.flags|=2048,gi(9,{destroy:void 0},mp.bind(null,n,s,a,t),null),a},useId:function(){var e=vt(),t=Be.identifierPrefix;if(ve){var a=ua,n=ca;a=(n&~(1<<32-_t(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Hr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=g1++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Cc,useFormState:Ap,useActionState:Ap,useOptimistic:function(e){var t=vt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ac.bind(null,de,!0,a),a.dispatch=t,[e,t]},useMemoCache:mc,useCacheRefresh:function(){return vt().memoizedState=S1.bind(null,de)},useEffectEvent:function(e){var t=vt(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},zc={readContext:ft,use:Ur,useCallback:Hp,useContext:ft,useEffect:vc,useImperativeHandle:Op,useInsertionEffect:Rp,useLayoutEffect:Mp,useMemo:Bp,useReducer:Lr,useRef:Tp,useState:function(){return Lr(Sa)},useDebugValue:jc,useDeferredValue:function(e,t){var a=We();return Up(a,Me.memoizedState,e,t)},useTransition:function(){var e=Lr(Sa)[0],t=We().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:pp,useId:Yp,useHostTransitionStatus:Cc,useFormState:zp,useActionState:zp,useOptimistic:function(e,t){var a=We();return bp(a,Me,e,t)},useMemoCache:mc,useCacheRefresh:Gp};zc.useEffectEvent=_p;var Zp={readContext:ft,use:Ur,useCallback:Hp,useContext:ft,useEffect:vc,useImperativeHandle:Op,useInsertionEffect:Rp,useLayoutEffect:Mp,useMemo:Bp,useReducer:xc,useRef:Tp,useState:function(){return xc(Sa)},useDebugValue:jc,useDeferredValue:function(e,t){var a=We();return Me===null?Sc(a,e,t):Up(a,Me.memoizedState,e,t)},useTransition:function(){var e=xc(Sa)[0],t=We().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:pp,useId:Yp,useHostTransitionStatus:Cc,useFormState:kp,useActionState:kp,useOptimistic:function(e,t){var a=We();return Me!==null?bp(a,Me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mc,useCacheRefresh:Gp};Zp.useEffectEvent=_p;function Ec(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:g({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var kc={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Ut(),o=Wa(n);o.payload=t,a!=null&&(o.callback=a),t=Ja(e,o,n),t!==null&&(Et(t,e,n),ul(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Ut(),o=Wa(n);o.tag=1,o.payload=t,a!=null&&(o.callback=a),t=Ja(e,o,n),t!==null&&(Et(t,e,n),ul(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ut(),n=Wa(a);n.tag=2,t!=null&&(n.callback=t),t=Ja(e,n,a),t!==null&&(Et(t,e,a),ul(t,e,a))}};function Wp(e,t,a,n,o,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,d):t.prototype&&t.prototype.isPureReactComponent?!al(a,n)||!al(o,s):!0}function Jp(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&kc.enqueueReplaceState(t,t.state,null)}function On(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=g({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}function Fp(e){vr(e)}function Ip(e){console.error(e)}function Pp(e){vr(e)}function Gr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function e0(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Tc(e,t,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Gr(e,t)},a}function t0(e){return e=Wa(e),e.tag=3,e}function a0(e,t,a,n){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var s=n.value;e.payload=function(){return o(s)},e.callback=function(){e0(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){e0(t,a,n),typeof o!="function"&&(an===null?an=new Set([this]):an.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function C1(e,t,a,n,o){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&si(t,a,o,!0),a=Dt.current,a!==null){switch(a.tag){case 31:case 13:return Zt===null?to():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=o,n===Nr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),eu(e,n,o)),!1;case 22:return a.flags|=65536,n===Nr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),eu(e,n,o)),!1}throw Error(c(435,a.tag))}return eu(e,n,o),to(),!1}if(ve)return t=Dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,n!==Zs&&(e=Error(c(422),{cause:n}),ll(Qt(e,a)))):(n!==Zs&&(t=Error(c(423),{cause:n}),ll(Qt(t,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=Qt(n,a),o=Tc(e.stateNode,n,o),lc(e,o),Xe!==4&&(Xe=2)),!1;var s=Error(c(520),{cause:n});if(s=Qt(s,a),Cl===null?Cl=[s]:Cl.push(s),Xe!==4&&(Xe=2),t===null)return!0;n=Qt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=Tc(a.stateNode,n,e),lc(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(an===null||!an.has(s))))return a.flags|=65536,o&=-o,a.lanes|=o,o=t0(o),a0(o,e,a,n),lc(a,o),!1}a=a.return}while(a!==null);return!1}var Nc=Error(c(461)),tt=!1;function pt(e,t,a,n){t.child=e===null?rp(t,null,a,n):Mn(t,e.child,a,n)}function n0(e,t,a,n,o){a=a.render;var s=t.ref;if("ref"in n){var d={};for(var m in n)m!=="ref"&&(d[m]=n[m])}else d=n;return Tn(t),n=dc(e,t,a,d,s,o),m=fc(),e!==null&&!tt?(pc(e,t,o),wa(e,t,o)):(ve&&m&&Xs(t),t.flags|=1,pt(e,t,n,o),t.child)}function i0(e,t,a,n,o){if(e===null){var s=a.type;return typeof s=="function"&&!Gs(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,l0(e,t,s,n,o)):(e=Cr(a.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Uc(e,o)){var d=s.memoizedProps;if(a=a.compare,a=a!==null?a:al,a(d,n)&&e.ref===t.ref)return wa(e,t,o)}return t.flags|=1,e=xa(s,n),e.ref=t.ref,e.return=t,t.child=e}function l0(e,t,a,n,o){if(e!==null){var s=e.memoizedProps;if(al(s,n)&&e.ref===t.ref)if(tt=!1,t.pendingProps=n=s,Uc(e,o))(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,wa(e,t,o)}return _c(e,t,a,n,o)}function r0(e,t,a,n){var o=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,o=0;n!==null;)o=o|n.lanes|n.childLanes,n=n.sibling;n=o&~s}else n=0,t.child=null;return o0(e,t,s,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kr(t,s!==null?s.cachePool:null),s!==null?cp(t,s):oc(),up(t);else return n=t.lanes=536870912,o0(e,t,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(kr(t,s.cachePool),cp(t,s),Ia(),t.memoizedState=null):(e!==null&&kr(t,null),oc(),Ia());return pt(e,t,o,a),t.child}function xl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function o0(e,t,a,n,o){var s=tc();return s=s===null?null:{parent:Pe._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&kr(t,null),oc(),up(t),e!==null&&si(e,t,n,!0),t.childLanes=o,null}function Qr(e,t){return t=Xr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function s0(e,t,a){return Mn(t,e.child,null,a),e=Qr(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function A1(e,t,a){var n=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(n.mode==="hidden")return e=Qr(t,n),t.lanes=536870912,xl(null,e);if(cc(t),(e=Ue)?(e=vh(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},a=Vf(e),a.return=t,t.child=a,dt=t,Ue=null)):e=null,e===null)throw Xa(t);return t.lanes=536870912,null}return Qr(t,n)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(cc(t),o)if(t.flags&256)t.flags&=-257,t=s0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(tt||si(e,t,a,!1),o=(a&e.childLanes)!==0,tt||o){if(n=Be,n!==null&&(d=Fd(n,a),d!==0&&d!==s.retryLane))throw s.retryLane=d,An(e,d),Et(n,e,d),Nc;to(),t=s0(e,t,a)}else e=s.treeContext,Ue=Wt(d.nextSibling),dt=t,ve=!0,Va=null,Kt=!1,e!==null&&Zf(t,e),t=Qr(t,n),t.flags|=4096;return t}return e=xa(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function _c(e,t,a,n,o){return Tn(t),a=dc(e,t,a,n,void 0,o),n=fc(),e!==null&&!tt?(pc(e,t,o),wa(e,t,o)):(ve&&n&&Xs(t),t.flags|=1,pt(e,t,a,o),t.child)}function c0(e,t,a,n,o,s){return Tn(t),t.updateQueue=null,a=fp(t,n,a,o),dp(e),n=fc(),e!==null&&!tt?(pc(e,t,s),wa(e,t,s)):(ve&&n&&Xs(t),t.flags|=1,pt(e,t,a,s),t.child)}function u0(e,t,a,n,o){if(Tn(t),t.stateNode===null){var s=ii,d=a.contextType;typeof d=="object"&&d!==null&&(s=ft(d)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=kc,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},nc(t),d=a.contextType,s.context=typeof d=="object"&&d!==null?ft(d):ii,s.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Ec(t,a,d,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&kc.enqueueReplaceState(s,s.state,null),fl(t,n,s,o),dl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,S=On(a,m);s.props=S;var T=s.context,H=a.contextType;d=ii,typeof H=="object"&&H!==null&&(d=ft(H));var Y=a.getDerivedStateFromProps;H=typeof Y=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,H||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||T!==d)&&Jp(t,s,n,d),Za=!1;var _=t.memoizedState;s.state=_,fl(t,n,s,o),dl(),T=t.memoizedState,m||_!==T||Za?(typeof Y=="function"&&(Ec(t,a,Y,n),T=t.memoizedState),(S=Za||Wp(t,a,S,n,_,T,d))?(H||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=T),s.props=n,s.state=T,s.context=d,n=S):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,ic(e,t),d=t.memoizedProps,H=On(a,d),s.props=H,Y=t.pendingProps,_=s.context,T=a.contextType,S=ii,typeof T=="object"&&T!==null&&(S=ft(T)),m=a.getDerivedStateFromProps,(T=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==Y||_!==S)&&Jp(t,s,n,S),Za=!1,_=t.memoizedState,s.state=_,fl(t,n,s,o),dl();var M=t.memoizedState;d!==Y||_!==M||Za||e!==null&&e.dependencies!==null&&zr(e.dependencies)?(typeof m=="function"&&(Ec(t,a,m,n),M=t.memoizedState),(H=Za||Wp(t,a,H,n,_,M,S)||e!==null&&e.dependencies!==null&&zr(e.dependencies))?(T||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,M,S),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,M,S)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),s.props=n,s.state=M,s.context=S,n=H):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Vr(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Mn(t,e.child,null,o),t.child=Mn(t,null,a,o)):pt(e,t,a,o),t.memoizedState=s.state,e=t.child):e=wa(e,t,o),e}function d0(e,t,a,n){return En(),t.flags|=256,pt(e,t,a,n),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mc(e){return{baseLanes:e,cachePool:ep()}}function Dc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Bt),e}function f0(e,t,a){var n=t.pendingProps,o=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),d&&(o=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(o?Fa(t):Ia(),(e=Ue)?(e=vh(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},a=Vf(e),a.return=t,t.child=a,dt=t,Ue=null)):e=null,e===null)throw Xa(t);return gu(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,o?(Ia(),o=t.mode,m=Xr({mode:"hidden",children:m},o),n=zn(n,o,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=Mc(a),n.childLanes=Dc(e,d,a),t.memoizedState=Rc,xl(null,n)):(Fa(t),Oc(t,m))}var S=e.memoizedState;if(S!==null&&(m=S.dehydrated,m!==null)){if(s)t.flags&256?(Fa(t),t.flags&=-257,t=Hc(e,t,a)):t.memoizedState!==null?(Ia(),t.child=e.child,t.flags|=128,t=null):(Ia(),m=n.fallback,o=t.mode,n=Xr({mode:"visible",children:n.children},o),m=zn(m,o,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,Mn(t,e.child,null,a),n=t.child,n.memoizedState=Mc(a),n.childLanes=Dc(e,d,a),t.memoizedState=Rc,t=xl(null,n));else if(Fa(t),gu(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var T=d.dgst;d=T,n=Error(c(419)),n.stack="",n.digest=d,ll({value:n,source:null,stack:null}),t=Hc(e,t,a)}else if(tt||si(e,t,a,!1),d=(a&e.childLanes)!==0,tt||d){if(d=Be,d!==null&&(n=Fd(d,a),n!==0&&n!==S.retryLane))throw S.retryLane=n,An(e,n),Et(d,e,n),Nc;mu(m)||to(),t=Hc(e,t,a)}else mu(m)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ue=Wt(m.nextSibling),dt=t,ve=!0,Va=null,Kt=!1,e!==null&&Zf(t,e),t=Oc(t,n.children),t.flags|=4096);return t}return o?(Ia(),m=n.fallback,o=t.mode,S=e.child,T=S.sibling,n=xa(S,{mode:"hidden",children:n.children}),n.subtreeFlags=S.subtreeFlags&65011712,T!==null?m=xa(T,m):(m=zn(m,o,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,xl(null,n),n=t.child,m=e.child.memoizedState,m===null?m=Mc(a):(o=m.cachePool,o!==null?(S=Pe._currentValue,o=o.parent!==S?{parent:S,pool:S}:o):o=ep(),m={baseLanes:m.baseLanes|a,cachePool:o}),n.memoizedState=m,n.childLanes=Dc(e,d,a),t.memoizedState=Rc,xl(e.child,n)):(Fa(t),a=e.child,e=a.sibling,a=xa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function Oc(e,t){return t=Xr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Xr(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Hc(e,t,a){return Mn(t,e.child,null,a),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p0(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Fs(e.return,t,a)}function Bc(e,t,a,n,o,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:o,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=n,d.tail=a,d.tailMode=o,d.treeForkCount=s)}function h0(e,t,a){var n=t.pendingProps,o=n.revealOrder,s=n.tail;n=n.children;var d=Ze.current,m=(d&2)!==0;if(m?(d=d&1|2,t.flags|=128):d&=1,I(Ze,d),pt(e,t,n,a),n=ve?il:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&p0(e,a,t);else if(e.tag===19)p0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&Dr(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),Bc(t,!1,o,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Dr(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}Bc(t,!0,a,null,s,n);break;case"together":Bc(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function wa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(si(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=xa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=xa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Uc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&zr(e)))}function z1(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),Ka(t,Pe,e.memoizedState.cache),En();break;case 27:case 5:ra(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:Ka(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cc(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Fa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?f0(e,t,a):(Fa(t),e=wa(e,t,a),e!==null?e.sibling:null);Fa(t);break;case 19:var o=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(si(e,t,a,!1),n=(a&t.childLanes)!==0),o){if(n)return h0(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(Ze,Ze.current),n)break;return null;case 22:return t.lanes=0,r0(e,t,a,t.pendingProps);case 24:Ka(t,Pe,e.memoizedState.cache)}return wa(e,t,a)}function m0(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)tt=!0;else{if(!Uc(e,a)&&(t.flags&128)===0)return tt=!1,z1(e,t,a);tt=(e.flags&131072)!==0}else tt=!1,ve&&(t.flags&1048576)!==0&&Kf(t,il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=_n(t.elementType),t.type=e,typeof e=="function")Gs(e)?(n=On(e,n),t.tag=1,t=u0(null,t,e,n,a)):(t.tag=0,t=_c(null,t,e,n,a));else{if(e!=null){var o=e.$$typeof;if(o===O){t.tag=11,t=n0(null,t,e,n,a);break e}else if(o===B){t.tag=14,t=i0(null,t,e,n,a);break e}}throw t=Se(e)||e,Error(c(306,t,""))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,o=On(n,t.pendingProps),u0(e,t,n,o,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var s=t.memoizedState;o=s.element,ic(e,t),fl(t,n,null,a);var d=t.memoizedState;if(n=d.cache,Ka(t,Pe,n),n!==s.cache&&Is(t,[Pe],a,!0),dl(),n=d.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=d0(e,t,n,a);break e}else if(n!==o){o=Qt(Error(c(424)),t),ll(o),t=d0(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ue=Wt(e.firstChild),dt=t,ve=!0,Va=null,Kt=!0,a=rp(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(En(),n===o){t=wa(e,t,a);break e}pt(e,t,n,a)}t=t.child}return t;case 26:return Vr(e,t),e===null?(a=zh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,n=so(fe.current).createElement(a),n[ut]=t,n[jt]=e,ht(n,a,e),ot(n),t.stateNode=n):t.memoizedState=zh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ra(t),e===null&&ve&&(n=t.stateNode=wh(t.type,t.pendingProps,fe.current),dt=t,Kt=!0,o=Ue,on(t.type)?(xu=o,Ue=Wt(n.firstChild)):Ue=o),pt(e,t,t.pendingProps.children,a),Vr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((o=n=Ue)&&(n=ay(n,t.type,t.pendingProps,Kt),n!==null?(t.stateNode=n,dt=t,Ue=Wt(n.firstChild),Kt=!1,o=!0):o=!1),o||Xa(t)),ra(t),o=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,n=s.children,fu(o,s)?n=null:d!==null&&fu(o,d)&&(t.flags|=32),t.memoizedState!==null&&(o=dc(e,t,x1,null,null,a),Rl._currentValue=o),Vr(e,t),pt(e,t,n,a),t.child;case 6:return e===null&&ve&&((e=a=Ue)&&(a=ny(a,t.pendingProps,Kt),a!==null?(t.stateNode=a,dt=t,Ue=null,e=!0):e=!1),e||Xa(t)),null;case 13:return f0(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Mn(t,null,n,a):pt(e,t,n,a),t.child;case 11:return n0(e,t,t.type,t.pendingProps,a);case 7:return pt(e,t,t.pendingProps,a),t.child;case 8:return pt(e,t,t.pendingProps.children,a),t.child;case 12:return pt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ka(t,t.type,n.value),pt(e,t,n.children,a),t.child;case 9:return o=t.type._context,n=t.pendingProps.children,Tn(t),o=ft(o),n=n(o),t.flags|=1,pt(e,t,n,a),t.child;case 14:return i0(e,t,t.type,t.pendingProps,a);case 15:return l0(e,t,t.type,t.pendingProps,a);case 19:return h0(e,t,a);case 31:return A1(e,t,a);case 22:return r0(e,t,a,t.pendingProps);case 24:return Tn(t),n=ft(Pe),e===null?(o=tc(),o===null&&(o=Be,s=Ps(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=a),o=s),t.memoizedState={parent:n,cache:o},nc(t),Ka(t,Pe,o)):((e.lanes&a)!==0&&(ic(e,t),fl(t,null,null,a),dl()),o=e.memoizedState,s=t.memoizedState,o.parent!==n?(o={parent:n,cache:n},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Ka(t,Pe,n)):(n=s.cache,Ka(t,Pe,n),n!==o.cache&&Is(t,[Pe],a,!0))),pt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Ca(e){e.flags|=4}function Lc(e,t,a,n,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Y0())e.flags|=8192;else throw Rn=Nr,ac}else e.flags&=-16777217}function g0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_h(t))if(Y0())e.flags|=8192;else throw Rn=Nr,ac}function Kr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zd():536870912,e.lanes|=t,vi|=t)}function yl(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function E1(e,t,a){var n=t.pendingProps;switch(Ks(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),va(Pe),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(oi(t)?Ca(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ws())),Le(t),null;case 26:var o=t.type,s=t.memoizedState;return e===null?(Ca(t),s!==null?(Le(t),g0(t,s)):(Le(t),Lc(t,o,null,n,a))):s?s!==e.memoizedState?(Ca(t),Le(t),g0(t,s)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Ca(t),Le(t),Lc(t,o,e,n,a)),null;case 27:if(oa(t),a=fe.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ca(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Le(t),null}e=te.current,oi(t)?Wf(t):(e=wh(o,n,a),t.stateNode=e,Ca(t))}return Le(t),null;case 5:if(oa(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ca(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(s=te.current,oi(t))Wf(t);else{var d=so(fe.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?d.createElement("select",{is:n.is}):d.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?d.createElement(o,{is:n.is}):d.createElement(o)}}s[ut]=t,s[jt]=n;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(ht(s,o,n),o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ca(t)}}return Le(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ca(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=fe.current,oi(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,o=dt,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[ut]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||fh(e.nodeValue,a)),e||Xa(t,!0)}else e=so(e).createTextNode(n),e[ut]=t,t.stateNode=e}return Le(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=oi(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ut]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else a=Ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Le(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=oi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[ut]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else o=Ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==o&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Kr(t,t.updateQueue),Le(t),null);case 4:return Re(),e===null&&ou(t.stateNode.containerInfo),Le(t),null;case 10:return va(t.type),Le(t),null;case 19:if(U(Ze),n=t.memoizedState,n===null)return Le(t),null;if(o=(t.flags&128)!==0,s=n.rendering,s===null)if(o)yl(n,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Dr(e),s!==null){for(t.flags|=128,yl(n,!1),e=s.updateQueue,t.updateQueue=e,Kr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Qf(a,e),a=a.sibling;return I(Ze,Ze.current&1|2),ve&&ya(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Tt()>Ir&&(t.flags|=128,o=!0,yl(n,!1),t.lanes=4194304)}else{if(!o)if(e=Dr(s),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Kr(t,e),yl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ve)return Le(t),null}else 2*Tt()-n.renderingStartTime>Ir&&a!==536870912&&(t.flags|=128,o=!0,yl(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Tt(),e.sibling=null,a=Ze.current,I(Ze,o?a&1|2:a&1),ve&&ya(t,n.treeForkCount),e):(Le(t),null);case 22:case 23:return Ot(t),sc(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),a=t.updateQueue,a!==null&&Kr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&U(Nn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),va(Pe),Le(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function k1(e,t){switch(Ks(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return va(Pe),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return oa(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(c(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Ze),null;case 4:return Re(),null;case 10:return va(t.type),null;case 22:case 23:return Ot(t),sc(),e!==null&&U(Nn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return va(Pe),null;case 25:return null;default:return null}}function x0(e,t){switch(Ks(t),t.tag){case 3:va(Pe),Re();break;case 26:case 27:case 5:oa(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:U(Ze);break;case 10:va(t.type);break;case 22:case 23:Ot(t),sc(),e!==null&&U(Nn);break;case 24:va(Pe)}}function bl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var o=n.next;a=o;do{if((a.tag&e)===e){n=void 0;var s=a.create,d=a.inst;n=s(),d.destroy=n}a=a.next}while(a!==o)}}catch(m){Ne(t,t.return,m)}}function Pa(e,t,a){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var s=o.next;n=s;do{if((n.tag&e)===e){var d=n.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,o=t;var S=a,T=m;try{T()}catch(H){Ne(o,S,H)}}}n=n.next}while(n!==s)}}catch(H){Ne(t,t.return,H)}}function y0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{sp(t,a)}catch(n){Ne(e,e.return,n)}}}function b0(e,t,a){a.props=On(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ne(e,t,n)}}function vl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(o){Ne(e,t,o)}}function da(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(o){Ne(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Ne(e,t,o)}else a.current=null}function v0(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(o){Ne(e,e.return,o)}}function $c(e,t,a){try{var n=e.stateNode;J1(n,e.type,a,t),n[jt]=t}catch(o){Ne(e,e.return,o)}}function j0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&on(e.type)||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||j0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&on(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ma));else if(n!==4&&(n===27&&on(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,a),e=e.sibling;e!==null;)Yc(e,t,a),e=e.sibling}function Zr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&on(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zr(e,t,a),e=e.sibling;e!==null;)Zr(e,t,a),e=e.sibling}function S0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ht(t,n,a),t[ut]=e,t[jt]=a}catch(s){Ne(e,e.return,s)}}var Aa=!1,at=!1,Gc=!1,w0=typeof WeakSet=="function"?WeakSet:Set,st=null;function T1(e,t){if(e=e.containerInfo,uu=go,e=Of(e),Hs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var d=0,m=-1,S=-1,T=0,H=0,Y=e,_=null;t:for(;;){for(var M;Y!==a||o!==0&&Y.nodeType!==3||(m=d+o),Y!==s||n!==0&&Y.nodeType!==3||(S=d+n),Y.nodeType===3&&(d+=Y.nodeValue.length),(M=Y.firstChild)!==null;)_=Y,Y=M;for(;;){if(Y===e)break t;if(_===a&&++T===o&&(m=d),_===s&&++H===n&&(S=d),(M=Y.nextSibling)!==null)break;Y=_,_=Y.parentNode}Y=M}a=m===-1||S===-1?null:{start:m,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(du={focusedElem:e,selectionRange:a},go=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)o=e[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,o=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var ae=On(a.type,o);e=n.getSnapshotBeforeUpdate(ae,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(le){Ne(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)hu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function C0(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(e,a),n&4&&bl(5,a);break;case 1:if(Ea(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Ne(a,a.return,d)}else{var o=On(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ne(a,a.return,d)}}n&64&&y0(a),n&512&&vl(a,a.return);break;case 3:if(Ea(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{sp(e,t)}catch(d){Ne(a,a.return,d)}}break;case 27:t===null&&n&4&&S0(a);case 26:case 5:Ea(e,a),t===null&&n&4&&v0(a),n&512&&vl(a,a.return);break;case 12:Ea(e,a);break;case 31:Ea(e,a),n&4&&E0(e,a);break;case 13:Ea(e,a),n&4&&k0(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=U1.bind(null,a),iy(e,a))));break;case 22:if(n=a.memoizedState!==null||Aa,!n){t=t!==null&&t.memoizedState!==null||at,o=Aa;var s=at;Aa=n,(at=t)&&!s?ka(e,a,(a.subtreeFlags&8772)!==0):Ea(e,a),Aa=o,at=s}break;case 30:break;default:Ea(e,a)}}function A0(e){var t=e.alternate;t!==null&&(e.alternate=null,A0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,wt=!1;function za(e,t,a){for(a=a.child;a!==null;)z0(e,t,a),a=a.sibling}function z0(e,t,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Qi,a)}catch{}switch(a.tag){case 26:at||da(a,t),za(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||da(a,t);var n=Ye,o=wt;on(a.type)&&(Ye=a.stateNode,wt=!1),za(e,t,a),Tl(a.stateNode),Ye=n,wt=o;break;case 5:at||da(a,t);case 6:if(n=Ye,o=wt,Ye=null,za(e,t,a),Ye=n,wt=o,Ye!==null)if(wt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(s){Ne(a,t,s)}else try{Ye.removeChild(a.stateNode)}catch(s){Ne(a,t,s)}break;case 18:Ye!==null&&(wt?(e=Ye,yh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ki(e)):yh(Ye,a.stateNode));break;case 4:n=Ye,o=wt,Ye=a.stateNode.containerInfo,wt=!0,za(e,t,a),Ye=n,wt=o;break;case 0:case 11:case 14:case 15:Pa(2,a,t),at||Pa(4,a,t),za(e,t,a);break;case 1:at||(da(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&b0(a,t,n)),za(e,t,a);break;case 21:za(e,t,a);break;case 22:at=(n=at)||a.memoizedState!==null,za(e,t,a),at=n;break;default:za(e,t,a)}}function E0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ki(e)}catch(a){Ne(t,t.return,a)}}}function k0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ki(e)}catch(a){Ne(t,t.return,a)}}function N1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new w0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new w0),t;default:throw Error(c(435,e.tag))}}function Wr(e,t){var a=N1(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var o=L1.bind(null,e,n);n.then(o,o)}})}function Ct(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var o=a[n],s=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(on(m.type)){Ye=m.stateNode,wt=!1;break e}break;case 5:Ye=m.stateNode,wt=!1;break e;case 3:case 4:Ye=m.stateNode.containerInfo,wt=!0;break e}m=m.return}if(Ye===null)throw Error(c(160));z0(s,d,o),Ye=null,wt=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)T0(t,e),t=t.sibling}var ta=null;function T0(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),At(e),n&4&&(Pa(3,e,e.return),bl(3,e),Pa(5,e,e.return));break;case 1:Ct(t,e),At(e),n&512&&(at||a===null||da(a,a.return)),n&64&&Aa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var o=ta;if(Ct(t,e),At(e),n&512&&(at||a===null||da(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,o=o.ownerDocument||o;t:switch(n){case"title":s=o.getElementsByTagName("title")[0],(!s||s[Ki]||s[ut]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(n),o.head.insertBefore(s,o.querySelector("head > title"))),ht(s,n,a),s[ut]=e,ot(s),n=s;break e;case"link":var d=Th("link","href",o).get(n+(a.href||""));if(d){for(var m=0;m<d.length;m++)if(s=d[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(m,1);break t}}s=o.createElement(n),ht(s,n,a),o.head.appendChild(s);break;case"meta":if(d=Th("meta","content",o).get(n+(a.content||""))){for(m=0;m<d.length;m++)if(s=d[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(m,1);break t}}s=o.createElement(n),ht(s,n,a),o.head.appendChild(s);break;default:throw Error(c(468,n))}s[ut]=e,ot(s),n=s}e.stateNode=n}else Nh(o,e.type,e.stateNode);else e.stateNode=kh(o,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?Nh(o,e.type,e.stateNode):kh(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&$c(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ct(t,e),At(e),n&512&&(at||a===null||da(a,a.return)),a!==null&&n&4&&$c(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ct(t,e),At(e),n&512&&(at||a===null||da(a,a.return)),e.flags&32){o=e.stateNode;try{Fn(o,"")}catch(ae){Ne(e,e.return,ae)}}n&4&&e.stateNode!=null&&(o=e.memoizedProps,$c(e,o,a!==null?a.memoizedProps:o)),n&1024&&(Gc=!0);break;case 6:if(Ct(t,e),At(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(ae){Ne(e,e.return,ae)}}break;case 3:if(fo=null,o=ta,ta=co(t.containerInfo),Ct(t,e),ta=o,At(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{ki(t.containerInfo)}catch(ae){Ne(e,e.return,ae)}Gc&&(Gc=!1,N0(e));break;case 4:n=ta,ta=co(e.stateNode.containerInfo),Ct(t,e),At(e),ta=n;break;case 12:Ct(t,e),At(e);break;case 31:Ct(t,e),At(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wr(e,n)));break;case 13:Ct(t,e),At(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fr=Tt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wr(e,n)));break;case 22:o=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,T=Aa,H=at;if(Aa=T||o,at=H||S,Ct(t,e),at=H,Aa=T,At(e),n&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(a===null||S||Aa||at||Hn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){S=a=t;try{if(s=S.stateNode,o)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=S.stateNode;var Y=S.memoizedProps.style,_=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;m.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(ae){Ne(S,S.return,ae)}}}else if(t.tag===6){if(a===null){S=t;try{S.stateNode.nodeValue=o?"":S.memoizedProps}catch(ae){Ne(S,S.return,ae)}}}else if(t.tag===18){if(a===null){S=t;try{var M=S.stateNode;o?bh(M,!0):bh(S.stateNode,!1)}catch(ae){Ne(S,S.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Wr(e,a))));break;case 19:Ct(t,e),At(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wr(e,n)));break;case 30:break;case 21:break;default:Ct(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(j0(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var o=a.stateNode,s=qc(e);Zr(e,s,o);break;case 5:var d=a.stateNode;a.flags&32&&(Fn(d,""),a.flags&=-33);var m=qc(e);Zr(e,m,d);break;case 3:case 4:var S=a.stateNode.containerInfo,T=qc(e);Yc(e,T,S);break;default:throw Error(c(161))}}catch(H){Ne(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function N0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;N0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)C0(e,t.alternate,t),t=t.sibling}function Hn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pa(4,t,t.return),Hn(t);break;case 1:da(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&b0(t,t.return,a),Hn(t);break;case 27:Tl(t.stateNode);case 26:case 5:da(t,t.return),Hn(t);break;case 22:t.memoizedState===null&&Hn(t);break;case 30:Hn(t);break;default:Hn(t)}e=e.sibling}}function ka(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,o=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:ka(o,s,a),bl(4,s);break;case 1:if(ka(o,s,a),n=s,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(T){Ne(n,n.return,T)}if(n=s,o=n.updateQueue,o!==null){var m=n.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)op(S[o],m)}catch(T){Ne(n,n.return,T)}}a&&d&64&&y0(s),vl(s,s.return);break;case 27:S0(s);case 26:case 5:ka(o,s,a),a&&n===null&&d&4&&v0(s),vl(s,s.return);break;case 12:ka(o,s,a);break;case 31:ka(o,s,a),a&&d&4&&E0(o,s);break;case 13:ka(o,s,a),a&&d&4&&k0(o,s);break;case 22:s.memoizedState===null&&ka(o,s,a),vl(s,s.return);break;case 30:break;default:ka(o,s,a)}t=t.sibling}}function Qc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&rl(a))}function Vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e))}function aa(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_0(e,t,a,n),t=t.sibling}function _0(e,t,a,n){var o=t.flags;switch(t.tag){case 0:case 11:case 15:aa(e,t,a,n),o&2048&&bl(9,t);break;case 1:aa(e,t,a,n);break;case 3:aa(e,t,a,n),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e)));break;case 12:if(o&2048){aa(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,m=s.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ne(t,t.return,S)}}else aa(e,t,a,n);break;case 31:aa(e,t,a,n);break;case 13:aa(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?aa(e,t,a,n):jl(e,t):s._visibility&2?aa(e,t,a,n):(s._visibility|=2,xi(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Qc(d,t);break;case 24:aa(e,t,a,n),o&2048&&Vc(t.alternate,t);break;default:aa(e,t,a,n)}}function xi(e,t,a,n,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,m=a,S=n,T=d.flags;switch(d.tag){case 0:case 11:case 15:xi(s,d,m,S,o),bl(8,d);break;case 23:break;case 22:var H=d.stateNode;d.memoizedState!==null?H._visibility&2?xi(s,d,m,S,o):jl(s,d):(H._visibility|=2,xi(s,d,m,S,o)),o&&T&2048&&Qc(d.alternate,d);break;case 24:xi(s,d,m,S,o),o&&T&2048&&Vc(d.alternate,d);break;default:xi(s,d,m,S,o)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,o=n.flags;switch(n.tag){case 22:jl(a,n),o&2048&&Qc(n.alternate,n);break;case 24:jl(a,n),o&2048&&Vc(n.alternate,n);break;default:jl(a,n)}t=t.sibling}}var Sl=8192;function yi(e,t,a){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)R0(e,t,a),e=e.sibling}function R0(e,t,a){switch(e.tag){case 26:yi(e,t,a),e.flags&Sl&&e.memoizedState!==null&&gy(a,ta,e.memoizedState,e.memoizedProps);break;case 5:yi(e,t,a);break;case 3:case 4:var n=ta;ta=co(e.stateNode.containerInfo),yi(e,t,a),ta=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Sl,Sl=16777216,yi(e,t,a),Sl=n):yi(e,t,a));break;default:yi(e,t,a)}}function M0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];st=n,O0(n,e)}M0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)D0(e),e=e.sibling}function D0(e){switch(e.tag){case 0:case 11:case 15:wl(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:wl(e);break;case 12:wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jr(e)):wl(e);break;default:wl(e)}}function Jr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];st=n,O0(n,e)}M0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pa(8,t,t.return),Jr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Jr(t));break;default:Jr(t)}e=e.sibling}}function O0(e,t){for(;st!==null;){var a=st;switch(a.tag){case 0:case 11:case 15:Pa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:rl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,st=n;else e:for(a=e;st!==null;){n=st;var o=n.sibling,s=n.return;if(A0(n),n===a){st=null;break e}if(o!==null){o.return=s,st=o;break e}st=s}}}var _1={getCacheForType:function(e){var t=ft(Pe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ft(Pe).controller.signal}},R1=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Be=null,ge=null,ye=0,Te=0,Ht=null,en=!1,bi=!1,Xc=!1,Ta=0,Xe=0,tn=0,Bn=0,Kc=0,Bt=0,vi=0,Cl=null,zt=null,Zc=!1,Fr=0,H0=0,Ir=1/0,Pr=null,an=null,it=0,nn=null,ji=null,Na=0,Wc=0,Jc=null,B0=null,Al=0,Fc=null;function Ut(){return(Ee&2)!==0&&ye!==0?ye&-ye:D.T!==null?nu():Id()}function U0(){if(Bt===0)if((ye&536870912)===0||ve){var e=or;or<<=1,(or&3932160)===0&&(or=262144),Bt=e}else Bt=536870912;return e=Dt.current,e!==null&&(e.flags|=32),Bt}function Et(e,t,a){(e===Be&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Si(e,0),ln(e,ye,Bt,!1)),Xi(e,a),((Ee&2)===0||e!==Be)&&(e===Be&&((Ee&2)===0&&(Bn|=a),Xe===4&&ln(e,ye,Bt,!1)),fa(e))}function L0(e,t,a){if((Ee&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Vi(e,t),o=n?O1(e,t):Pc(e,t,!0),s=n;do{if(o===0){bi&&!n&&ln(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!M1(a)){o=Pc(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;o=Cl;var S=m.current.memoizedState.isDehydrated;if(S&&(Si(m,d).flags|=256),d=Pc(m,d,!1),d!==2){if(Xc&&!S){m.errorRecoveryDisabledLanes|=s,Bn|=s,o=4;break e}s=zt,zt=o,s!==null&&(zt===null?zt=s:zt.push.apply(zt,s))}o=d}if(s=!1,o!==2)continue}}if(o===1){Si(e,0),ln(e,t,0,!0);break}e:{switch(n=e,s=o,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ln(n,t,Bt,!en);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(o=Fr+300-Tt(),10<o)){if(ln(n,t,Bt,!en),cr(n,0,!0)!==0)break e;Na=t,n.timeoutHandle=gh($0.bind(null,n,a,zt,Pr,Zc,t,Bt,Bn,vi,en,s,"Throttled",-0,0),o);break e}$0(n,a,zt,Pr,Zc,t,Bt,Bn,vi,en,s,null,-0,0)}}break}while(!0);fa(e)}function $0(e,t,a,n,o,s,d,m,S,T,H,Y,_,M){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ma},R0(t,s,Y);var ae=(s&62914560)===s?Fr-Tt():(s&4194048)===s?H0-Tt():0;if(ae=xy(Y,ae),ae!==null){Na=s,e.cancelPendingCommit=ae(Z0.bind(null,e,t,s,a,n,o,d,m,S,H,Y,null,_,M)),ln(e,s,d,!T);return}}Z0(e,t,s,a,n,o,d,m,S)}function M1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var o=a[n],s=o.getSnapshot;o=o.value;try{if(!Rt(s(),o))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t,a,n){t&=~Kc,t&=~Bn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var o=t;0<o;){var s=31-_t(o),d=1<<s;n[s]=-1,o&=~d}a!==0&&Wd(e,a,t)}function eo(){return(Ee&6)===0?(zl(0),!1):!0}function Ic(){if(ge!==null){if(Te===0)var e=ge.return;else e=ge,ba=kn=null,hc(e),fi=null,sl=0,e=ge;for(;e!==null;)x0(e.alternate,e),e=e.return;ge=null}}function Si(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,P1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Na=0,Ic(),Be=e,ge=a=xa(e.current,null),ye=t,Te=0,Ht=null,en=!1,bi=Vi(e,t),Xc=!1,vi=Bt=Kc=Bn=tn=Xe=0,zt=Cl=null,Zc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var o=31-_t(n),s=1<<o;t|=e[o],n&=~s}return Ta=t,jr(),a}function q0(e,t){de=null,D.H=gl,t===di||t===Tr?(t=np(),Te=3):t===ac?(t=np(),Te=4):Te=t===Nc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ht=t,ge===null&&(Xe=1,Gr(e,Qt(t,e.current)))}function Y0(){var e=Dt.current;return e===null?!0:(ye&4194048)===ye?Zt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Zt:!1}function G0(){var e=D.H;return D.H=gl,e===null?gl:e}function Q0(){var e=D.A;return D.A=_1,e}function to(){Xe=4,en||(ye&4194048)!==ye&&Dt.current!==null||(bi=!0),(tn&134217727)===0&&(Bn&134217727)===0||Be===null||ln(Be,ye,Bt,!1)}function Pc(e,t,a){var n=Ee;Ee|=2;var o=G0(),s=Q0();(Be!==e||ye!==t)&&(Pr=null,Si(e,t)),t=!1;var d=Xe;e:do try{if(Te!==0&&ge!==null){var m=ge,S=Ht;switch(Te){case 8:Ic(),d=6;break e;case 3:case 2:case 9:case 6:Dt.current===null&&(t=!0);var T=Te;if(Te=0,Ht=null,wi(e,m,S,T),a&&bi){d=0;break e}break;default:T=Te,Te=0,Ht=null,wi(e,m,S,T)}}D1(),d=Xe;break}catch(H){q0(e,H)}while(!0);return t&&e.shellSuspendCounter++,ba=kn=null,Ee=n,D.H=o,D.A=s,ge===null&&(Be=null,ye=0,jr()),d}function D1(){for(;ge!==null;)V0(ge)}function O1(e,t){var a=Ee;Ee|=2;var n=G0(),o=Q0();Be!==e||ye!==t?(Pr=null,Ir=Tt()+500,Si(e,t)):bi=Vi(e,t);e:do try{if(Te!==0&&ge!==null){t=ge;var s=Ht;t:switch(Te){case 1:Te=0,Ht=null,wi(e,t,s,1);break;case 2:case 9:if(tp(s)){Te=0,Ht=null,X0(t);break}t=function(){Te!==2&&Te!==9||Be!==e||(Te=7),fa(e)},s.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:tp(s)?(Te=0,Ht=null,X0(t)):(Te=0,Ht=null,wi(e,t,s,7));break;case 5:var d=null;switch(ge.tag){case 26:d=ge.memoizedState;case 5:case 27:var m=ge;if(d?_h(d):m.stateNode.complete){Te=0,Ht=null;var S=m.sibling;if(S!==null)ge=S;else{var T=m.return;T!==null?(ge=T,ao(T)):ge=null}break t}}Te=0,Ht=null,wi(e,t,s,5);break;case 6:Te=0,Ht=null,wi(e,t,s,6);break;case 8:Ic(),Xe=6;break e;default:throw Error(c(462))}}H1();break}catch(H){q0(e,H)}while(!0);return ba=kn=null,D.H=n,D.A=o,Ee=a,ge!==null?0:(Be=null,ye=0,jr(),Xe)}function H1(){for(;ge!==null&&!lx();)V0(ge)}function V0(e){var t=m0(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,t===null?ao(e):ge=t}function X0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=c0(a,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=c0(a,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:hc(t);default:x0(a,t),t=ge=Qf(t,Ta),t=m0(a,t,Ta)}e.memoizedProps=e.pendingProps,t===null?ao(e):ge=t}function wi(e,t,a,n){ba=kn=null,hc(t),fi=null,sl=0;var o=t.return;try{if(C1(e,o,t,a,ye)){Xe=1,Gr(e,Qt(a,e.current)),ge=null;return}}catch(s){if(o!==null)throw ge=o,s;Xe=1,Gr(e,Qt(a,e.current)),ge=null;return}t.flags&32768?(ve||n===1?e=!0:bi||(ye&536870912)!==0?e=!1:(en=e=!0,(n===2||n===9||n===3||n===6)&&(n=Dt.current,n!==null&&n.tag===13&&(n.flags|=16384))),K0(t,e)):ao(t)}function ao(e){var t=e;do{if((t.flags&32768)!==0){K0(t,en);return}e=t.return;var a=E1(t.alternate,t,Ta);if(a!==null){ge=a;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Xe===0&&(Xe=5)}function K0(e,t){do{var a=k1(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Xe=6,ge=null}function Z0(e,t,a,n,o,s,d,m,S){e.cancelPendingCommit=null;do no();while(it!==0);if((Ee&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=qs,mx(e,a,s,d,m,S),e===Be&&(ge=Be=null,ye=0),ji=t,nn=e,Na=a,Wc=s,Jc=o,B0=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$1(lr,function(){return P0(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,o=V.p,V.p=2,d=Ee,Ee|=4;try{T1(e,t,a)}finally{Ee=d,V.p=o,D.T=n}}it=1,W0(),J0(),F0()}}function W0(){if(it===1){it=0;var e=nn,t=ji,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=V.p;V.p=2;var o=Ee;Ee|=4;try{T0(t,e);var s=du,d=Of(e.containerInfo),m=s.focusedElem,S=s.selectionRange;if(d!==m&&m&&m.ownerDocument&&Df(m.ownerDocument.documentElement,m)){if(S!==null&&Hs(m)){var T=S.start,H=S.end;if(H===void 0&&(H=T),"selectionStart"in m)m.selectionStart=T,m.selectionEnd=Math.min(H,m.value.length);else{var Y=m.ownerDocument||document,_=Y&&Y.defaultView||window;if(_.getSelection){var M=_.getSelection(),ae=m.textContent.length,le=Math.min(S.start,ae),Oe=S.end===void 0?le:Math.min(S.end,ae);!M.extend&&le>Oe&&(d=Oe,Oe=le,le=d);var E=Mf(m,le),A=Mf(m,Oe);if(E&&A&&(M.rangeCount!==1||M.anchorNode!==E.node||M.anchorOffset!==E.offset||M.focusNode!==A.node||M.focusOffset!==A.offset)){var k=Y.createRange();k.setStart(E.node,E.offset),M.removeAllRanges(),le>Oe?(M.addRange(k),M.extend(A.node,A.offset)):(k.setEnd(A.node,A.offset),M.addRange(k))}}}}for(Y=[],M=m;M=M.parentNode;)M.nodeType===1&&Y.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Y.length;m++){var L=Y[m];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}go=!!uu,du=uu=null}finally{Ee=o,V.p=n,D.T=a}}e.current=t,it=2}}function J0(){if(it===2){it=0;var e=nn,t=ji,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=V.p;V.p=2;var o=Ee;Ee|=4;try{C0(e,t.alternate,t)}finally{Ee=o,V.p=n,D.T=a}}it=3}}function F0(){if(it===4||it===3){it=0,rx();var e=nn,t=ji,a=Na,n=B0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?it=5:(it=0,ji=nn=null,I0(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(an=null),xs(a),t=t.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Qi,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,o=V.p,V.p=2,D.T=null;try{for(var s=e.onRecoverableError,d=0;d<n.length;d++){var m=n[d];s(m.value,{componentStack:m.stack})}}finally{D.T=t,V.p=o}}(Na&3)!==0&&no(),fa(e),o=e.pendingLanes,(a&261930)!==0&&(o&42)!==0?e===Fc?Al++:(Al=0,Fc=e):Al=0,zl(0)}}function I0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rl(t)))}function no(){return W0(),J0(),F0(),P0()}function P0(){if(it!==5)return!1;var e=nn,t=Wc;Wc=0;var a=xs(Na),n=D.T,o=V.p;try{V.p=32>a?32:a,D.T=null,a=Jc,Jc=null;var s=nn,d=Na;if(it=0,ji=nn=null,Na=0,(Ee&6)!==0)throw Error(c(331));var m=Ee;if(Ee|=4,D0(s.current),_0(s,s.current,d,a),Ee=m,zl(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Qi,s)}catch{}return!0}finally{V.p=o,D.T=n,I0(e,t)}}function eh(e,t,a){t=Qt(a,t),t=Tc(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(Xi(e,2),fa(e))}function Ne(e,t,a){if(e.tag===3)eh(e,e,a);else for(;t!==null;){if(t.tag===3){eh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(an===null||!an.has(n))){e=Qt(a,e),a=t0(2),n=Ja(t,a,2),n!==null&&(a0(a,n,t,e),Xi(n,2),fa(n));break}}t=t.return}}function eu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new R1;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(a)||(Xc=!0,o.add(a),e=B1.bind(null,e,t,a),t.then(e,e))}function B1(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Be===e&&(ye&a)===a&&(Xe===4||Xe===3&&(ye&62914560)===ye&&300>Tt()-Fr?(Ee&2)===0&&Si(e,0):Kc|=a,vi===ye&&(vi=0)),fa(e)}function th(e,t){t===0&&(t=Zd()),e=An(e,t),e!==null&&(Xi(e,t),fa(e))}function U1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),th(e,a)}function L1(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),th(e,a)}function $1(e,t){return ps(e,t)}var io=null,Ci=null,tu=!1,lo=!1,au=!1,rn=0;function fa(e){e!==Ci&&e.next===null&&(Ci===null?io=Ci=e:Ci=Ci.next=e),lo=!0,tu||(tu=!0,Y1())}function zl(e,t){if(!au&&lo){au=!0;do for(var a=!1,n=io;n!==null;){if(e!==0){var o=n.pendingLanes;if(o===0)var s=0;else{var d=n.suspendedLanes,m=n.pingedLanes;s=(1<<31-_t(42|e)+1)-1,s&=o&~(d&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,lh(n,s))}else s=ye,s=cr(n,n===Be?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Vi(n,s)||(a=!0,lh(n,s));n=n.next}while(a);au=!1}}function q1(){ah()}function ah(){lo=tu=!1;var e=0;rn!==0&&I1()&&(e=rn);for(var t=Tt(),a=null,n=io;n!==null;){var o=n.next,s=nh(n,t);s===0?(n.next=null,a===null?io=o:a.next=o,o===null&&(Ci=a)):(a=n,(e!==0||(s&3)!==0)&&(lo=!0)),n=o}it!==0&&it!==5||zl(e),rn!==0&&(rn=0)}function nh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-_t(s),m=1<<d,S=o[d];S===-1?((m&a)===0||(m&n)!==0)&&(o[d]=hx(m,t)):S<=t&&(e.expiredLanes|=m),s&=~m}if(t=Be,a=ye,a=cr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&hs(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&hs(n),xs(a)){case 2:case 8:a=Xd;break;case 32:a=lr;break;case 268435456:a=Kd;break;default:a=lr}return n=ih.bind(null,e),a=ps(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&hs(n),e.callbackPriority=2,e.callbackNode=null,2}function ih(e,t){if(it!==0&&it!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(no()&&e.callbackNode!==a)return null;var n=ye;return n=cr(e,e===Be?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(L0(e,n,t),nh(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?ih.bind(null,e):null)}function lh(e,t){if(no())return null;L0(e,t,!0)}function Y1(){ey(function(){(Ee&6)!==0?ps(Vd,q1):ah()})}function nu(){if(rn===0){var e=ci;e===0&&(e=rr,rr<<=1,(rr&261888)===0&&(rr=256)),rn=e}return rn}function rh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pr(""+e)}function oh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function G1(e,t,a,n,o){if(t==="submit"&&a&&a.stateNode===o){var s=rh((o[jt]||null).action),d=n.submitter;d&&(t=(t=d[jt]||null)?rh(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var m=new xr("action","action",null,n,o);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(rn!==0){var S=d?oh(o,d):new FormData(o);wc(a,{pending:!0,data:S,method:o.method,action:s},null,S)}}else typeof s=="function"&&(m.preventDefault(),S=d?oh(o,d):new FormData(o),wc(a,{pending:!0,data:S,method:o.method,action:s},s,S))},currentTarget:o}]})}}for(var iu=0;iu<$s.length;iu++){var lu=$s[iu],Q1=lu.toLowerCase(),V1=lu[0].toUpperCase()+lu.slice(1);ea(Q1,"on"+V1)}ea(Uf,"onAnimationEnd"),ea(Lf,"onAnimationIteration"),ea($f,"onAnimationStart"),ea("dblclick","onDoubleClick"),ea("focusin","onFocus"),ea("focusout","onBlur"),ea(o1,"onTransitionRun"),ea(s1,"onTransitionStart"),ea(c1,"onTransitionCancel"),ea(qf,"onTransitionEnd"),Wn("onMouseEnter",["mouseout","mouseover"]),Wn("onMouseLeave",["mouseout","mouseover"]),Wn("onPointerEnter",["pointerout","pointerover"]),Wn("onPointerLeave",["pointerout","pointerover"]),jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));function sh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],o=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var d=n.length-1;0<=d;d--){var m=n[d],S=m.instance,T=m.currentTarget;if(m=m.listener,S!==s&&o.isPropagationStopped())break e;s=m,o.currentTarget=T;try{s(o)}catch(H){vr(H)}o.currentTarget=null,s=S}else for(d=0;d<n.length;d++){if(m=n[d],S=m.instance,T=m.currentTarget,m=m.listener,S!==s&&o.isPropagationStopped())break e;s=m,o.currentTarget=T;try{s(o)}catch(H){vr(H)}o.currentTarget=null,s=S}}}}function xe(e,t){var a=t[ys];a===void 0&&(a=t[ys]=new Set);var n=e+"__bubble";a.has(n)||(ch(t,e,2,!1),a.add(n))}function ru(e,t,a){var n=0;t&&(n|=4),ch(a,e,n,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function ou(e){if(!e[ro]){e[ro]=!0,tf.forEach(function(a){a!=="selectionchange"&&(X1.has(a)||ru(a,!1,e),ru(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,ru("selectionchange",!1,t))}}function ch(e,t,a,n){switch(Uh(t)){case 2:var o=vy;break;case 8:o=jy;break;default:o=Su}a=o.bind(null,t,a,e),o=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function su(e,t,a,n,o){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var m=n.stateNode.containerInfo;if(m===o)break;if(d===4)for(d=n.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;m!==null;){if(d=Xn(m),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){n=s=d;continue e}m=m.parentNode}}n=n.return}hf(function(){var T=s,H=As(a),Y=[];e:{var _=Yf.get(e);if(_!==void 0){var M=xr,ae=e;switch(e){case"keypress":if(mr(a)===0)break e;case"keydown":case"keyup":M=Lx;break;case"focusin":ae="focus",M=_s;break;case"focusout":ae="blur",M=_s;break;case"beforeblur":case"afterblur":M=_s;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Yx;break;case Uf:case Lf:case $f:M=Nx;break;case qf:M=Qx;break;case"scroll":case"scrollend":M=Ax;break;case"wheel":M=Xx;break;case"copy":case"cut":case"paste":M=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=bf;break;case"toggle":case"beforetoggle":M=Zx}var le=(t&4)!==0,Oe=!le&&(e==="scroll"||e==="scrollend"),E=le?_!==null?_+"Capture":null:_;le=[];for(var A=T,k;A!==null;){var L=A;if(k=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||k===null||E===null||(L=Wi(A,E),L!=null&&le.push(kl(A,L,k))),Oe)break;A=A.return}0<le.length&&(_=new M(_,ae,null,a,H),Y.push({event:_,listeners:le}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",_&&a!==Cs&&(ae=a.relatedTarget||a.fromElement)&&(Xn(ae)||ae[Vn]))break e;if((M||_)&&(_=H.window===H?H:(_=H.ownerDocument)?_.defaultView||_.parentWindow:window,M?(ae=a.relatedTarget||a.toElement,M=T,ae=ae?Xn(ae):null,ae!==null&&(Oe=p(ae),le=ae.tag,ae!==Oe||le!==5&&le!==27&&le!==6)&&(ae=null)):(M=null,ae=T),M!==ae)){if(le=xf,L="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(le=bf,L="onPointerLeave",E="onPointerEnter",A="pointer"),Oe=M==null?_:Zi(M),k=ae==null?_:Zi(ae),_=new le(L,A+"leave",M,a,H),_.target=Oe,_.relatedTarget=k,L=null,Xn(H)===T&&(le=new le(E,A+"enter",ae,a,H),le.target=k,le.relatedTarget=Oe,L=le),Oe=L,M&&ae)t:{for(le=K1,E=M,A=ae,k=0,L=E;L;L=le(L))k++;L=0;for(var ie=A;ie;ie=le(ie))L++;for(;0<k-L;)E=le(E),k--;for(;0<L-k;)A=le(A),L--;for(;k--;){if(E===A||A!==null&&E===A.alternate){le=E;break t}E=le(E),A=le(A)}le=null}else le=null;M!==null&&uh(Y,_,M,le,!1),ae!==null&&Oe!==null&&uh(Y,Oe,ae,le,!0)}}e:{if(_=T?Zi(T):window,M=_.nodeName&&_.nodeName.toLowerCase(),M==="select"||M==="input"&&_.type==="file")var we=Ef;else if(Af(_))if(kf)we=i1;else{we=a1;var ne=t1}else M=_.nodeName,!M||M.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?T&&ws(T.elementType)&&(we=Ef):we=n1;if(we&&(we=we(e,T))){zf(Y,we,a,H);break e}ne&&ne(e,_,T),e==="focusout"&&T&&_.type==="number"&&T.memoizedProps.value!=null&&Ss(_,"number",_.value)}switch(ne=T?Zi(T):window,e){case"focusin":(Af(ne)||ne.contentEditable==="true")&&(ti=ne,Bs=T,nl=null);break;case"focusout":nl=Bs=ti=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,Hf(Y,a,H);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":Hf(Y,a,H)}var pe;if(Ms)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else ei?wf(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(vf&&a.locale!=="ko"&&(ei||be!=="onCompositionStart"?be==="onCompositionEnd"&&ei&&(pe=mf()):(Ga=H,ks="value"in Ga?Ga.value:Ga.textContent,ei=!0)),ne=oo(T,be),0<ne.length&&(be=new yf(be,e,null,a,H),Y.push({event:be,listeners:ne}),pe?be.data=pe:(pe=Cf(a),pe!==null&&(be.data=pe)))),(pe=Jx?Fx(e,a):Ix(e,a))&&(be=oo(T,"onBeforeInput"),0<be.length&&(ne=new yf("onBeforeInput","beforeinput",null,a,H),Y.push({event:ne,listeners:be}),ne.data=pe)),G1(Y,e,T,a,H)}sh(Y,t)})}function kl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function oo(e,t){for(var a=t+"Capture",n=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=Wi(e,a),o!=null&&n.unshift(kl(e,o,s)),o=Wi(e,t),o!=null&&n.push(kl(e,o,s))),e.tag===3)return n;e=e.return}return[]}function K1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function uh(e,t,a,n,o){for(var s=t._reactName,d=[];a!==null&&a!==n;){var m=a,S=m.alternate,T=m.stateNode;if(m=m.tag,S!==null&&S===n)break;m!==5&&m!==26&&m!==27||T===null||(S=T,o?(T=Wi(a,s),T!=null&&d.unshift(kl(a,T,S))):o||(T=Wi(a,s),T!=null&&d.push(kl(a,T,S)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var Z1=/\r\n?/g,W1=/\u0000|\uFFFD/g;function dh(e){return(typeof e=="string"?e:""+e).replace(Z1,`
`).replace(W1,"")}function fh(e,t){return t=dh(t),dh(e)===t}function De(e,t,a,n,o,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Fn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Fn(e,""+n);break;case"className":dr(e,"class",n);break;case"tabIndex":dr(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":dr(e,a,n);break;case"style":ff(e,n,s);break;case"data":if(t!=="object"){dr(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=pr(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&De(e,t,"name",o.name,o,null),De(e,t,"formEncType",o.formEncType,o,null),De(e,t,"formMethod",o.formMethod,o,null),De(e,t,"formTarget",o.formTarget,o,null)):(De(e,t,"encType",o.encType,o,null),De(e,t,"method",o.method,o,null),De(e,t,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=pr(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ma);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=pr(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ur(e,"popover",n);break;case"xlinkActuate":ha(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ha(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ha(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ha(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ha(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ha(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ha(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ha(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ha(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ur(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wx.get(a)||a,ur(e,a,n))}}function cu(e,t,a,n,o,s){switch(a){case"style":ff(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Fn(e,n):(typeof n=="number"||typeof n=="bigint")&&Fn(e,""+n);break;case"onScroll":n!=null&&xe("scroll",e);break;case"onScrollEnd":n!=null&&xe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ma);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!af.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),t=a.slice(2,o?a.length-7:void 0),s=e[jt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,o);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):ur(e,a,n)}}}function ht(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var n=!1,o=!1,s;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];if(d!=null)switch(s){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:De(e,t,s,d,a,null)}}o&&De(e,t,"srcSet",a.srcSet,a,null),n&&De(e,t,"src",a.src,a,null);return;case"input":xe("invalid",e);var m=s=d=o=null,S=null,T=null;for(n in a)if(a.hasOwnProperty(n)){var H=a[n];if(H!=null)switch(n){case"name":o=H;break;case"type":d=H;break;case"checked":S=H;break;case"defaultChecked":T=H;break;case"value":s=H;break;case"defaultValue":m=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:De(e,t,n,H,a,null)}}sf(e,s,m,S,T,d,o,!1);return;case"select":xe("invalid",e),n=d=s=null;for(o in a)if(a.hasOwnProperty(o)&&(m=a[o],m!=null))switch(o){case"value":s=m;break;case"defaultValue":d=m;break;case"multiple":n=m;default:De(e,t,o,m,a,null)}t=s,a=d,e.multiple=!!n,t!=null?Jn(e,!!n,t,!1):a!=null&&Jn(e,!!n,a,!0);return;case"textarea":xe("invalid",e),s=o=n=null;for(d in a)if(a.hasOwnProperty(d)&&(m=a[d],m!=null))switch(d){case"value":n=m;break;case"defaultValue":o=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:De(e,t,d,m,a,null)}uf(e,n,o,s);return;case"option":for(S in a)a.hasOwnProperty(S)&&(n=a[S],n!=null)&&(S==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":De(e,t,S,n,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(n=0;n<El.length;n++)xe(El[n],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(n=a[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:De(e,t,T,n,a,null)}return;default:if(ws(t)){for(H in a)a.hasOwnProperty(H)&&(n=a[H],n!==void 0&&cu(e,t,H,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&De(e,t,m,n,a,null))}function J1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,d=null,m=null,S=null,T=null,H=null;for(M in a){var Y=a[M];if(a.hasOwnProperty(M)&&Y!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":S=Y;default:n.hasOwnProperty(M)||De(e,t,M,null,n,Y)}}for(var _ in n){var M=n[_];if(Y=a[_],n.hasOwnProperty(_)&&(M!=null||Y!=null))switch(_){case"type":s=M;break;case"name":o=M;break;case"checked":T=M;break;case"defaultChecked":H=M;break;case"value":d=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==Y&&De(e,t,_,M,n,Y)}}js(e,d,m,S,T,H,s,o);return;case"select":M=d=m=_=null;for(s in a)if(S=a[s],a.hasOwnProperty(s)&&S!=null)switch(s){case"value":break;case"multiple":M=S;default:n.hasOwnProperty(s)||De(e,t,s,null,n,S)}for(o in n)if(s=n[o],S=a[o],n.hasOwnProperty(o)&&(s!=null||S!=null))switch(o){case"value":_=s;break;case"defaultValue":m=s;break;case"multiple":d=s;default:s!==S&&De(e,t,o,s,n,S)}t=m,a=d,n=M,_!=null?Jn(e,!!a,_,!1):!!n!=!!a&&(t!=null?Jn(e,!!a,t,!0):Jn(e,!!a,a?[]:"",!1));return;case"textarea":M=_=null;for(m in a)if(o=a[m],a.hasOwnProperty(m)&&o!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:De(e,t,m,null,n,o)}for(d in n)if(o=n[d],s=a[d],n.hasOwnProperty(d)&&(o!=null||s!=null))switch(d){case"value":_=o;break;case"defaultValue":M=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:o!==s&&De(e,t,d,o,n,s)}cf(e,_,M);return;case"option":for(var ae in a)_=a[ae],a.hasOwnProperty(ae)&&_!=null&&!n.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:De(e,t,ae,null,n,_));for(S in n)_=n[S],M=a[S],n.hasOwnProperty(S)&&_!==M&&(_!=null||M!=null)&&(S==="selected"?e.selected=_&&typeof _!="function"&&typeof _!="symbol":De(e,t,S,_,n,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)_=a[le],a.hasOwnProperty(le)&&_!=null&&!n.hasOwnProperty(le)&&De(e,t,le,null,n,_);for(T in n)if(_=n[T],M=a[T],n.hasOwnProperty(T)&&_!==M&&(_!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:De(e,t,T,_,n,M)}return;default:if(ws(t)){for(var Oe in a)_=a[Oe],a.hasOwnProperty(Oe)&&_!==void 0&&!n.hasOwnProperty(Oe)&&cu(e,t,Oe,void 0,n,_);for(H in n)_=n[H],M=a[H],!n.hasOwnProperty(H)||_===M||_===void 0&&M===void 0||cu(e,t,H,_,n,M);return}}for(var E in a)_=a[E],a.hasOwnProperty(E)&&_!=null&&!n.hasOwnProperty(E)&&De(e,t,E,null,n,_);for(Y in n)_=n[Y],M=a[Y],!n.hasOwnProperty(Y)||_===M||_==null&&M==null||De(e,t,Y,_,n,M)}function ph(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function F1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var o=a[n],s=o.transferSize,d=o.initiatorType,m=o.duration;if(s&&m&&ph(d)){for(d=0,m=o.responseEnd,n+=1;n<a.length;n++){var S=a[n],T=S.startTime;if(T>m)break;var H=S.transferSize,Y=S.initiatorType;H&&ph(Y)&&(S=S.responseEnd,d+=H*(S<m?1:(m-T)/(S-T)))}if(--n,t+=8*(s+d)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uu=null,du=null;function so(e){return e.nodeType===9?e:e.ownerDocument}function hh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pu=null;function I1(){var e=window.event;return e&&e.type==="popstate"?e===pu?!1:(pu=e,!0):(pu=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(e){return xh.resolve(null).then(e).catch(ty)}:gh;function ty(e){setTimeout(function(){throw e})}function on(e){return e==="head"}function yh(e,t){var a=t,n=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(o),ki(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Tl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Tl(a);for(var s=a.firstChild;s;){var d=s.nextSibling,m=s.nodeName;s[Ki]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}else a==="body"&&Tl(e.ownerDocument.body);a=o}while(a);ki(t)}function bh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function hu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hu(a),bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ay(e,t,a,n){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Ki])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function ny(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Wt(e.nextSibling),e===null))return null;return e}function vh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Wt(e.nextSibling),e===null))return null;return e}function mu(e){return e.data==="$?"||e.data==="$~"}function gu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iy(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xu=null;function jh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Sh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function wh(e,t,a){switch(t=so(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Tl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bs(e)}var Jt=new Map,Ch=new Set;function co(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=V.d;V.d={f:ly,r:ry,D:oy,C:sy,L:cy,m:uy,X:fy,S:dy,M:py};function ly(){var e=_a.f(),t=eo();return e||t}function ry(e){var t=Kn(e);t!==null&&t.tag===5&&t.type==="form"?qp(t):_a.r(e)}var Ai=typeof document>"u"?null:document;function Ah(e,t,a){var n=Ai;if(n&&typeof t=="string"&&t){var o=Yt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),Ch.has(o)||(Ch.add(o),e={rel:e,crossOrigin:a,href:t},n.querySelector(o)===null&&(t=n.createElement("link"),ht(t,"link",e),ot(t),n.head.appendChild(t)))}}function oy(e){_a.D(e),Ah("dns-prefetch",e,null)}function sy(e,t){_a.C(e,t),Ah("preconnect",e,t)}function cy(e,t,a){_a.L(e,t,a);var n=Ai;if(n&&e&&t){var o='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Yt(a.imageSizes)+'"]')):o+='[href="'+Yt(e)+'"]';var s=o;switch(t){case"style":s=zi(e);break;case"script":s=Ei(e)}Jt.has(s)||(e=g({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Jt.set(s,e),n.querySelector(o)!==null||t==="style"&&n.querySelector(Nl(s))||t==="script"&&n.querySelector(_l(s))||(t=n.createElement("link"),ht(t,"link",e),ot(t),n.head.appendChild(t)))}}function uy(e,t){_a.m(e,t);var a=Ai;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Yt(n)+'"][href="'+Yt(e)+'"]',s=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ei(e)}if(!Jt.has(s)&&(e=g({rel:"modulepreload",href:e},t),Jt.set(s,e),a.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_l(s)))return}n=a.createElement("link"),ht(n,"link",e),ot(n),a.head.appendChild(n)}}}function dy(e,t,a){_a.S(e,t,a);var n=Ai;if(n&&e){var o=Zn(n).hoistableStyles,s=zi(e);t=t||"default";var d=o.get(s);if(!d){var m={loading:0,preload:null};if(d=n.querySelector(Nl(s)))m.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Jt.get(s))&&yu(e,a);var S=d=n.createElement("link");ot(S),ht(S,"link",e),S._p=new Promise(function(T,H){S.onload=T,S.onerror=H}),S.addEventListener("load",function(){m.loading|=1}),S.addEventListener("error",function(){m.loading|=2}),m.loading|=4,uo(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:m},o.set(s,d)}}}function fy(e,t){_a.X(e,t);var a=Ai;if(a&&e){var n=Zn(a).hoistableScripts,o=Ei(e),s=n.get(o);s||(s=a.querySelector(_l(o)),s||(e=g({src:e,async:!0},t),(t=Jt.get(o))&&bu(e,t),s=a.createElement("script"),ot(s),ht(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(o,s))}}function py(e,t){_a.M(e,t);var a=Ai;if(a&&e){var n=Zn(a).hoistableScripts,o=Ei(e),s=n.get(o);s||(s=a.querySelector(_l(o)),s||(e=g({src:e,async:!0,type:"module"},t),(t=Jt.get(o))&&bu(e,t),s=a.createElement("script"),ot(s),ht(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(o,s))}}function zh(e,t,a,n){var o=(o=fe.current)?co(o):null;if(!o)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=zi(a.href),a=Zn(o).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zi(a.href);var s=Zn(o).hoistableStyles,d=s.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=o.querySelector(Nl(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Jt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Jt.set(e,a),s||hy(o,e,a,d.state))),t&&n===null)throw Error(c(528,""));return d}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ei(a),a=Zn(o).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function zi(e){return'href="'+Yt(e)+'"'}function Nl(e){return'link[rel="stylesheet"]['+e+"]"}function Eh(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function hy(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ht(t,"link",a),ot(t),e.head.appendChild(t))}function Ei(e){return'[src="'+Yt(e)+'"]'}function _l(e){return"script[async]"+e}function kh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(n)return t.instance=n,ot(n),n;var o=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),ot(n),ht(n,"style",o),uo(n,a.precedence,e),t.instance=n;case"stylesheet":o=zi(a.href);var s=e.querySelector(Nl(o));if(s)return t.state.loading|=4,t.instance=s,ot(s),s;n=Eh(a),(o=Jt.get(o))&&yu(n,o),s=(e.ownerDocument||e).createElement("link"),ot(s);var d=s;return d._p=new Promise(function(m,S){d.onload=m,d.onerror=S}),ht(s,"link",n),t.state.loading|=4,uo(s,a.precedence,e),t.instance=s;case"script":return s=Ei(a.src),(o=e.querySelector(_l(s)))?(t.instance=o,ot(o),o):(n=a,(o=Jt.get(s))&&(n=g({},a),bu(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),ot(o),ht(o,"link",n),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,uo(n,a.precedence,e));return t.instance}function uo(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,s=o,d=0;d<n.length;d++){var m=n[d];if(m.dataset.precedence===t)s=m;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fo=null;function Th(e,t,a){if(fo===null){var n=new Map,o=fo=new Map;o.set(a,n)}else o=fo,n=o.get(a),n||(n=new Map,o.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var s=a[o];if(!(s[Ki]||s[ut]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var m=n.get(d);m?m.push(s):n.set(d,[s])}}return n}function Nh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function my(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _h(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gy(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=zi(n.href),s=t.querySelector(Nl(o));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=po.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,ot(s);return}s=t.ownerDocument||t,n=Eh(n),(o=Jt.get(o))&&yu(n,o),s=s.createElement("link"),ot(s);var d=s;d._p=new Promise(function(m,S){d.onload=m,d.onerror=S}),ht(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=po.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var vu=0;function xy(e,t){return e.stylesheets&&e.count===0&&mo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&mo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&vu===0&&(vu=62500*F1());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>vu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(o)}}:null}function po(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ho=null;function mo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ho=new Map,t.forEach(yy,e),ho=null,po.call(e))}function yy(e,t){if(!(t.state.loading&4)){var a=ho.get(e);if(a)var n=a.get(null);else{a=new Map,ho.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var d=o[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}o=t.instance,d=o.getAttribute("data-precedence"),s=a.get(d)||n,s===n&&a.set(null,o),a.set(d,o),this.count++,n=po.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Rl={$$typeof:X,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function by(e,t,a,n,o,s,d,m,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ms(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.hiddenUpdates=ms(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Rh(e,t,a,n,o,s,d,m,S,T,H,Y){return e=new by(e,t,a,d,S,T,H,Y,m),t=1,s===!0&&(t|=24),s=Mt(3,null,null,t),e.current=s,s.stateNode=e,t=Ps(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},nc(s),e}function Mh(e){return e?(e=ii,e):ii}function Dh(e,t,a,n,o,s){o=Mh(o),n.context===null?n.context=o:n.pendingContext=o,n=Wa(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Ja(e,n,t),a!==null&&(Et(a,e,t),ul(a,e,t))}function Oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ju(e,t){Oh(e,t),(e=e.alternate)&&Oh(e,t)}function Hh(e){if(e.tag===13||e.tag===31){var t=An(e,67108864);t!==null&&Et(t,e,67108864),ju(e,67108864)}}function Bh(e){if(e.tag===13||e.tag===31){var t=Ut();t=gs(t);var a=An(e,t);a!==null&&Et(a,e,t),ju(e,t)}}var go=!0;function vy(e,t,a,n){var o=D.T;D.T=null;var s=V.p;try{V.p=2,Su(e,t,a,n)}finally{V.p=s,D.T=o}}function jy(e,t,a,n){var o=D.T;D.T=null;var s=V.p;try{V.p=8,Su(e,t,a,n)}finally{V.p=s,D.T=o}}function Su(e,t,a,n){if(go){var o=wu(n);if(o===null)su(e,t,n,xo,a),Lh(e,n);else if(wy(o,e,t,a,n))n.stopPropagation();else if(Lh(e,n),t&4&&-1<Sy.indexOf(e)){for(;o!==null;){var s=Kn(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=vn(s.pendingLanes);if(d!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var S=1<<31-_t(d);m.entanglements[1]|=S,d&=~S}fa(s),(Ee&6)===0&&(Ir=Tt()+500,zl(0))}}break;case 31:case 13:m=An(s,2),m!==null&&Et(m,s,2),eo(),ju(s,2)}if(s=wu(n),s===null&&su(e,t,n,xo,a),s===o)break;o=s}o!==null&&n.stopPropagation()}else su(e,t,n,null,a)}}function wu(e){return e=As(e),Cu(e)}var xo=null;function Cu(e){if(xo=null,e=Xn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=v(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xo=e,null}function Uh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ox()){case Vd:return 2;case Xd:return 8;case lr:case sx:return 32;case Kd:return 268435456;default:return 32}default:return 32}}var Au=!1,sn=null,cn=null,un=null,Ml=new Map,Dl=new Map,dn=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lh(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(t.pointerId)}}function Ol(e,t,a,n,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Kn(t),t!==null&&Hh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function wy(e,t,a,n,o){switch(t){case"focusin":return sn=Ol(sn,e,t,a,n,o),!0;case"dragenter":return cn=Ol(cn,e,t,a,n,o),!0;case"mouseover":return un=Ol(un,e,t,a,n,o),!0;case"pointerover":var s=o.pointerId;return Ml.set(s,Ol(Ml.get(s)||null,e,t,a,n,o)),!0;case"gotpointercapture":return s=o.pointerId,Dl.set(s,Ol(Dl.get(s)||null,e,t,a,n,o)),!0}return!1}function $h(e){var t=Xn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Pd(e.priority,function(){Bh(a)});return}}else if(t===31){if(t=v(a),t!==null){e.blockedOn=t,Pd(e.priority,function(){Bh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=wu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Cs=n,a.target.dispatchEvent(n),Cs=null}else return t=Kn(a),t!==null&&Hh(t),e.blockedOn=a,!1;t.shift()}return!0}function qh(e,t,a){yo(e)&&a.delete(t)}function Cy(){Au=!1,sn!==null&&yo(sn)&&(sn=null),cn!==null&&yo(cn)&&(cn=null),un!==null&&yo(un)&&(un=null),Ml.forEach(qh),Dl.forEach(qh)}function bo(e,t){e.blockedOn===t&&(e.blockedOn=null,Au||(Au=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Cy)))}var vo=null;function Yh(e){vo!==e&&(vo=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){vo===e&&(vo=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],o=e[t+2];if(typeof n!="function"){if(Cu(n||a)===null)continue;break}var s=Kn(a);s!==null&&(e.splice(t,3),t-=3,wc(s,{pending:!0,data:o,method:a.method,action:n},n,o))}}))}function ki(e){function t(S){return bo(S,e)}sn!==null&&bo(sn,e),cn!==null&&bo(cn,e),un!==null&&bo(un,e),Ml.forEach(t),Dl.forEach(t);for(var a=0;a<dn.length;a++){var n=dn[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<dn.length&&(a=dn[0],a.blockedOn===null);)$h(a),a.blockedOn===null&&dn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var o=a[n],s=a[n+1],d=o[jt]||null;if(typeof s=="function")d||Yh(a);else if(d){var m=null;if(s&&s.hasAttribute("formAction")){if(o=s,d=s[jt]||null)m=d.formAction;else if(Cu(o)!==null)continue}else m=d.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Yh(a)}}}function Gh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function zu(e){this._internalRoot=e}jo.prototype.render=zu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=Ut();Dh(a,n,e,t,null,null)},jo.prototype.unmount=zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dh(e.current,2,null,e,null,null),eo(),t[Vn]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Id();e={blockedOn:null,target:e,priority:t};for(var a=0;a<dn.length&&t!==0&&t<dn[a].priority;a++);dn.splice(a,0,e),a===0&&$h(e)}};var Qh=r.version;if(Qh!=="19.2.4")throw Error(c(527,Qh,"19.2.4"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Ay={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Qi=So.inject(Ay),Nt=So}catch{}}return Bl.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",o=Fp,s=Ip,d=Pp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Rh(e,1,!1,null,null,a,n,null,o,s,d,Gh),e[Vn]=t.current,ou(e),new zu(t)},Bl.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,o="",s=Fp,d=Ip,m=Pp,S=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),t=Rh(e,1,!0,t,a??null,n,o,S,s,d,m,Gh),t.context=Mh(null),a=t.current,n=Ut(),n=gs(n),o=Wa(n),o.callback=null,Ja(a,o,n),a=n,t.current.lanes=a,Xi(t,a),fa(t),e[Vn]=t.current,ou(e),new jo(t)},Bl.version="19.2.4",Bl}var em;function Hy(){if(em)return Tu.exports;em=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Tu.exports=Oy(),Tu.exports}var By=Hy();var tm="popstate";function Uy(i={}){function r(c,f){let{pathname:p,search:h,hash:v}=c.location;return rd("",{pathname:p,search:h,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(c,f){return typeof f=="string"?f:Zl(f)}return $y(r,u,null,i)}function Ge(i,r){if(i===!1||i===null||typeof i>"u")throw new Error(r)}function pa(i,r){if(!i){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ly(){return Math.random().toString(36).substring(2,10)}function am(i,r){return{usr:i.state,key:i.key,idx:r}}function rd(i,r,u=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof r=="string"?$i(r):r,state:u,key:r&&r.key||c||Ly()}}function Zl({pathname:i="/",search:r="",hash:u=""}){return r&&r!=="?"&&(i+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function $i(i){let r={};if(i){let u=i.indexOf("#");u>=0&&(r.hash=i.substring(u),i=i.substring(0,u));let c=i.indexOf("?");c>=0&&(r.search=i.substring(c),i=i.substring(0,c)),i&&(r.pathname=i)}return r}function $y(i,r,u,c={}){let{window:f=document.defaultView,v5Compat:p=!1}=c,h=f.history,v="POP",y=null,x=b();x==null&&(x=0,h.replaceState({...h.state,idx:x},""));function b(){return(h.state||{idx:null}).idx}function g(){v="POP";let G=b(),q=G==null?null:G-x;x=G,y&&y({action:v,location:$.location,delta:q})}function z(G,q){v="PUSH";let Q=rd($.location,G,q);x=b()+1;let X=am(Q,x),O=$.createHref(Q);try{h.pushState(X,"",O)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;f.location.assign(O)}p&&y&&y({action:v,location:$.location,delta:1})}function N(G,q){v="REPLACE";let Q=rd($.location,G,q);x=b();let X=am(Q,x),O=$.createHref(Q);h.replaceState(X,"",O),p&&y&&y({action:v,location:$.location,delta:0})}function R(G){return qy(G)}let $={get action(){return v},get location(){return i(f,h)},listen(G){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(tm,g),y=G,()=>{f.removeEventListener(tm,g),y=null}},createHref(G){return r(f,G)},createURL:R,encodeLocation(G){let q=R(G);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:z,replace:N,go(G){return h.go(G)}};return $}function qy(i,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(u,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:Zl(i);return c=c.replace(/ $/,"%20"),!r&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function qm(i,r,u="/"){return Yy(i,r,u,!1)}function Yy(i,r,u,c){let f=typeof r=="string"?$i(r):r,p=Ha(f.pathname||"/",u);if(p==null)return null;let h=Ym(i);Gy(h);let v=null;for(let y=0;v==null&&y<h.length;++y){let x=eb(p);v=Iy(h[y],x,c)}return v}function Ym(i,r=[],u=[],c="",f=!1){let p=(h,v,y=f,x)=>{let b={relativePath:x===void 0?h.path||"":x,caseSensitive:h.caseSensitive===!0,childrenIndex:v,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(c)&&y)return;Ge(b.relativePath.startsWith(c),`Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(c.length)}let g=Oa([c,b.relativePath]),z=u.concat(b);h.children&&h.children.length>0&&(Ge(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Ym(h.children,r,z,g,y)),!(h.path==null&&!h.index)&&r.push({path:g,score:Jy(g,h.index),routesMeta:z})};return i.forEach((h,v)=>{if(h.path===""||!h.path?.includes("?"))p(h,v);else for(let y of Gm(h.path))p(h,v,!0,y)}),r}function Gm(i){let r=i.split("/");if(r.length===0)return[];let[u,...c]=r,f=u.endsWith("?"),p=u.replace(/\?$/,"");if(c.length===0)return f?[p,""]:[p];let h=Gm(c.join("/")),v=[];return v.push(...h.map(y=>y===""?p:[p,y].join("/"))),f&&v.push(...h),v.map(y=>i.startsWith("/")&&y===""?"/":y)}function Gy(i){i.sort((r,u)=>r.score!==u.score?u.score-r.score:Fy(r.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Qy=/^:[\w-]+$/,Vy=3,Xy=2,Ky=1,Zy=10,Wy=-2,nm=i=>i==="*";function Jy(i,r){let u=i.split("/"),c=u.length;return u.some(nm)&&(c+=Wy),r&&(c+=Xy),u.filter(f=>!nm(f)).reduce((f,p)=>f+(Qy.test(p)?Vy:p===""?Ky:Zy),c)}function Fy(i,r){return i.length===r.length&&i.slice(0,-1).every((c,f)=>c===r[f])?i[i.length-1]-r[r.length-1]:0}function Iy(i,r,u=!1){let{routesMeta:c}=i,f={},p="/",h=[];for(let v=0;v<c.length;++v){let y=c[v],x=v===c.length-1,b=p==="/"?r:r.slice(p.length)||"/",g=Ko({path:y.relativePath,caseSensitive:y.caseSensitive,end:x},b),z=y.route;if(!g&&x&&u&&!c[c.length-1].route.index&&(g=Ko({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},b)),!g)return null;Object.assign(f,g.params),h.push({params:f,pathname:Oa([p,g.pathname]),pathnameBase:ib(Oa([p,g.pathnameBase])),route:z}),g.pathnameBase!=="/"&&(p=Oa([p,g.pathnameBase]))}return h}function Ko(i,r){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,c]=Py(i.path,i.caseSensitive,i.end),f=r.match(u);if(!f)return null;let p=f[0],h=p.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:c.reduce((x,{paramName:b,isOptional:g},z)=>{if(b==="*"){let R=v[z]||"";h=p.slice(0,p.length-R.length).replace(/(.)\/+$/,"$1")}const N=v[z];return g&&!N?x[b]=void 0:x[b]=(N||"").replace(/%2F/g,"/"),x},{}),pathname:p,pathnameBase:h,pattern:i}}function Py(i,r=!1,u=!0){pa(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,v,y)=>(c.push({paramName:v,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(c.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,r?void 0:"i"),c]}function eb(i){try{return i.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return pa(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),i}}function Ha(i,r){if(r==="/")return i;if(!i.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,c=i.charAt(u);return c&&c!=="/"?null:i.slice(u)||"/"}var tb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ab(i,r="/"){let{pathname:u,search:c="",hash:f=""}=typeof i=="string"?$i(i):i,p;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?p=im(u.substring(1),"/"):p=im(u,r)):p=r,{pathname:p,search:lb(c),hash:rb(f)}}function im(i,r){let u=r.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Mu(i,r,u,c){return`Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nb(i){return i.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function Qm(i){let r=nb(i);return r.map((u,c)=>c===r.length-1?u.pathname:u.pathnameBase)}function Vm(i,r,u,c=!1){let f;typeof i=="string"?f=$i(i):(f={...i},Ge(!f.pathname||!f.pathname.includes("?"),Mu("?","pathname","search",f)),Ge(!f.pathname||!f.pathname.includes("#"),Mu("#","pathname","hash",f)),Ge(!f.search||!f.search.includes("#"),Mu("#","search","hash",f)));let p=i===""||f.pathname==="",h=p?"/":f.pathname,v;if(h==null)v=u;else{let g=r.length-1;if(!c&&h.startsWith("..")){let z=h.split("/");for(;z[0]==="..";)z.shift(),g-=1;f.pathname=z.join("/")}v=g>=0?r[g]:"/"}let y=ab(f,v),x=h&&h!=="/"&&h.endsWith("/"),b=(p||h===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(x||b)&&(y.pathname+="/"),y}var Oa=i=>i.join("/").replace(/\/\/+/g,"/"),ib=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),lb=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,rb=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,ob=class{constructor(i,r,u,c=!1){this.status=i,this.statusText=r||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function sb(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function cb(i){return i.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Xm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Km(i,r){let u=i;if(typeof u!="string"||!tb.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,f=!1;if(Xm)try{let p=new URL(window.location.href),h=u.startsWith("//")?new URL(p.protocol+u):new URL(u),v=Ha(h.pathname,r);h.origin===p.origin&&v!=null?u=v+h.search+h.hash:f=!0}catch{pa(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zm=["POST","PUT","PATCH","DELETE"];new Set(Zm);var ub=["GET",...Zm];new Set(ub);var qi=w.createContext(null);qi.displayName="DataRouter";var ts=w.createContext(null);ts.displayName="DataRouterState";var db=w.createContext(!1),Wm=w.createContext({isTransitioning:!1});Wm.displayName="ViewTransition";var fb=w.createContext(new Map);fb.displayName="Fetchers";var pb=w.createContext(null);pb.displayName="Await";var Pt=w.createContext(null);Pt.displayName="Navigation";var Fl=w.createContext(null);Fl.displayName="Location";var la=w.createContext({outlet:null,matches:[],isDataRoute:!1});la.displayName="Route";var wd=w.createContext(null);wd.displayName="RouteError";var Jm="REACT_ROUTER_ERROR",hb="REDIRECT",mb="ROUTE_ERROR_RESPONSE";function gb(i){if(i.startsWith(`${Jm}:${hb}:{`))try{let r=JSON.parse(i.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function xb(i){if(i.startsWith(`${Jm}:${mb}:{`))try{let r=JSON.parse(i.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new ob(r.status,r.statusText,r.data)}catch{}}function yb(i,{relative:r}={}){Ge(Il(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=w.useContext(Pt),{hash:f,pathname:p,search:h}=er(i,{relative:r}),v=p;return u!=="/"&&(v=p==="/"?u:Oa([u,p])),c.createHref({pathname:v,search:h,hash:f})}function Il(){return w.useContext(Fl)!=null}function $a(){return Ge(Il(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Fl).location}var Fm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Im(i){w.useContext(Pt).static||w.useLayoutEffect(i)}function yn(){let{isDataRoute:i}=w.useContext(la);return i?Mb():bb()}function bb(){Ge(Il(),"useNavigate() may be used only in the context of a <Router> component.");let i=w.useContext(qi),{basename:r,navigator:u}=w.useContext(Pt),{matches:c}=w.useContext(la),{pathname:f}=$a(),p=JSON.stringify(Qm(c)),h=w.useRef(!1);return Im(()=>{h.current=!0}),w.useCallback((y,x={})=>{if(pa(h.current,Fm),!h.current)return;if(typeof y=="number"){u.go(y);return}let b=Vm(y,JSON.parse(p),f,x.relative==="path");i==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:Oa([r,b.pathname])),(x.replace?u.replace:u.push)(b,x.state,x)},[r,u,p,f,i])}var vb=w.createContext(null);function jb(i){let r=w.useContext(la).outlet;return w.useMemo(()=>r&&w.createElement(vb.Provider,{value:i},r),[r,i])}function Pl(){let{matches:i}=w.useContext(la),r=i[i.length-1];return r?r.params:{}}function er(i,{relative:r}={}){let{matches:u}=w.useContext(la),{pathname:c}=$a(),f=JSON.stringify(Qm(u));return w.useMemo(()=>Vm(i,JSON.parse(f),c,r==="path"),[i,f,c,r])}function Sb(i,r){return Pm(i,r)}function Pm(i,r,u,c,f){Ge(Il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=w.useContext(Pt),{matches:h}=w.useContext(la),v=h[h.length-1],y=v?v.params:{},x=v?v.pathname:"/",b=v?v.pathnameBase:"/",g=v&&v.route;{let Q=g&&g.path||"";tg(x,!g||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let z=$a(),N;if(r){let Q=typeof r=="string"?$i(r):r;Ge(b==="/"||Q.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),N=Q}else N=z;let R=N.pathname||"/",$=R;if(b!=="/"){let Q=b.replace(/^\//,"").split("/");$="/"+R.replace(/^\//,"").split("/").slice(Q.length).join("/")}let G=qm(i,{pathname:$});pa(g||G!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),pa(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Eb(G&&G.map(Q=>Object.assign({},Q,{params:Object.assign({},y,Q.params),pathname:Oa([b,p.encodeLocation?p.encodeLocation(Q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?b:Oa([b,p.encodeLocation?p.encodeLocation(Q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathnameBase])})),h,u,c,f);return r&&q?w.createElement(Fl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},q):q}function wb(){let i=Rb(),r=sb(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:p},"ErrorBoundary")," or"," ",w.createElement("code",{style:p},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},r),u?w.createElement("pre",{style:f},u):null,h)}var Cb=w.createElement(wb,null),eg=class extends w.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,r){return r.location!==i.location||r.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:r.error,location:r.location,revalidation:i.revalidation||r.revalidation}}componentDidCatch(i,r){this.props.onError?this.props.onError(i,r):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const u=xb(i.digest);u&&(i=u)}let r=i!==void 0?w.createElement(la.Provider,{value:this.props.routeContext},w.createElement(wd.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?w.createElement(Ab,{error:i},r):r}};eg.contextType=db;var Du=new WeakMap;function Ab({children:i,error:r}){let{basename:u}=w.useContext(Pt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let c=gb(r.digest);if(c){let f=Du.get(r);if(f)throw f;let p=Km(c.location,u);if(Xm&&!Du.get(r))if(p.isExternal||c.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Du.set(r,h),h}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return i}function zb({routeContext:i,match:r,children:u}){let c=w.useContext(qi);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(la.Provider,{value:i},u)}function Eb(i,r=[],u=null,c=null,f=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let p=i,h=u?.errors;if(h!=null){let b=p.findIndex(g=>g.route.id&&h?.[g.route.id]!==void 0);Ge(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,b+1))}let v=!1,y=-1;if(u)for(let b=0;b<p.length;b++){let g=p[b];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(y=b),g.route.id){let{loaderData:z,errors:N}=u,R=g.route.loader&&!z.hasOwnProperty(g.route.id)&&(!N||N[g.route.id]===void 0);if(g.route.lazy||R){v=!0,y>=0?p=p.slice(0,y+1):p=[p[0]];break}}}let x=u&&c?(b,g)=>{c(b,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:cb(u.matches),errorInfo:g})}:void 0;return p.reduceRight((b,g,z)=>{let N,R=!1,$=null,G=null;u&&(N=h&&g.route.id?h[g.route.id]:void 0,$=g.route.errorElement||Cb,v&&(y<0&&z===0?(tg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,G=null):y===z&&(R=!0,G=g.route.hydrateFallbackElement||null)));let q=r.concat(p.slice(0,z+1)),Q=()=>{let X;return N?X=$:R?X=G:g.route.Component?X=w.createElement(g.route.Component,null):g.route.element?X=g.route.element:X=b,w.createElement(zb,{match:g,routeContext:{outlet:b,matches:q,isDataRoute:u!=null},children:X})};return u&&(g.route.ErrorBoundary||g.route.errorElement||z===0)?w.createElement(eg,{location:u.location,revalidation:u.revalidation,component:$,error:N,children:Q(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:x}):Q()},null)}function Cd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kb(i){let r=w.useContext(qi);return Ge(r,Cd(i)),r}function Tb(i){let r=w.useContext(ts);return Ge(r,Cd(i)),r}function Nb(i){let r=w.useContext(la);return Ge(r,Cd(i)),r}function Ad(i){let r=Nb(i),u=r.matches[r.matches.length-1];return Ge(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function _b(){return Ad("useRouteId")}function Rb(){let i=w.useContext(wd),r=Tb("useRouteError"),u=Ad("useRouteError");return i!==void 0?i:r.errors?.[u]}function Mb(){let{router:i}=kb("useNavigate"),r=Ad("useNavigate"),u=w.useRef(!1);return Im(()=>{u.current=!0}),w.useCallback(async(f,p={})=>{pa(u.current,Fm),u.current&&(typeof f=="number"?await i.navigate(f):await i.navigate(f,{fromRouteId:r,...p}))},[i,r])}var lm={};function tg(i,r,u){!r&&!lm[i]&&(lm[i]=!0,pa(!1,u))}w.memo(Db);function Db({routes:i,future:r,state:u,onError:c}){return Pm(i,void 0,u,c,r)}function Ob(i){return jb(i.context)}function Ke(i){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Hb({basename:i="/",children:r=null,location:u,navigationType:c="POP",navigator:f,static:p=!1,unstable_useTransitions:h}){Ge(!Il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=i.replace(/^\/*/,"/"),y=w.useMemo(()=>({basename:v,navigator:f,static:p,unstable_useTransitions:h,future:{}}),[v,f,p,h]);typeof u=="string"&&(u=$i(u));let{pathname:x="/",search:b="",hash:g="",state:z=null,key:N="default"}=u,R=w.useMemo(()=>{let $=Ha(x,v);return $==null?null:{location:{pathname:$,search:b,hash:g,state:z,key:N},navigationType:c}},[v,x,b,g,z,N,c]);return pa(R!=null,`<Router basename="${v}"> is not able to match the URL "${x}${b}${g}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:w.createElement(Pt.Provider,{value:y},w.createElement(Fl.Provider,{children:r,value:R}))}function Bb({children:i,location:r}){return Sb(od(i),r)}function od(i,r=[]){let u=[];return w.Children.forEach(i,(c,f)=>{if(!w.isValidElement(c))return;let p=[...r,f];if(c.type===w.Fragment){u.push.apply(u,od(c.props.children,p));return}Ge(c.type===Ke,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=od(c.props.children,p)),u.push(h)}),u}var Uo="get",Lo="application/x-www-form-urlencoded";function as(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function Ub(i){return as(i)&&i.tagName.toLowerCase()==="button"}function Lb(i){return as(i)&&i.tagName.toLowerCase()==="form"}function $b(i){return as(i)&&i.tagName.toLowerCase()==="input"}function qb(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Yb(i,r){return i.button===0&&(!r||r==="_self")&&!qb(i)}var wo=null;function Gb(){if(wo===null)try{new FormData(document.createElement("form"),0),wo=!1}catch{wo=!0}return wo}var Qb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ou(i){return i!=null&&!Qb.has(i)?(pa(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lo}"`),null):i}function Vb(i,r){let u,c,f,p,h;if(Lb(i)){let v=i.getAttribute("action");c=v?Ha(v,r):null,u=i.getAttribute("method")||Uo,f=Ou(i.getAttribute("enctype"))||Lo,p=new FormData(i)}else if(Ub(i)||$b(i)&&(i.type==="submit"||i.type==="image")){let v=i.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||v.getAttribute("action");if(c=y?Ha(y,r):null,u=i.getAttribute("formmethod")||v.getAttribute("method")||Uo,f=Ou(i.getAttribute("formenctype"))||Ou(v.getAttribute("enctype"))||Lo,p=new FormData(v,i),!Gb()){let{name:x,type:b,value:g}=i;if(b==="image"){let z=x?`${x}.`:"";p.append(`${z}x`,"0"),p.append(`${z}y`,"0")}else x&&p.append(x,g)}}else{if(as(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Uo,c=null,f=Lo,h=i}return p&&f==="text/plain"&&(h=p,p=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:p,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function zd(i,r){if(i===!1||i===null||typeof i>"u")throw new Error(r)}function Xb(i,r,u,c){let f=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:r&&Ha(f.pathname,r)==="/"?f.pathname=`${r.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function Kb(i,r){if(i.id in r)return r[i.id];try{let u=await import(i.module);return r[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Wb(i,r,u){let c=await Promise.all(i.map(async f=>{let p=r.routes[f.route.id];if(p){let h=await Kb(p,u);return h.links?h.links():[]}return[]}));return Pb(c.flat(1).filter(Zb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function rm(i,r,u,c,f,p){let h=(y,x)=>u[x]?y.route.id!==u[x].route.id:!0,v=(y,x)=>u[x].pathname!==y.pathname||u[x].route.path?.endsWith("*")&&u[x].params["*"]!==y.params["*"];return p==="assets"?r.filter((y,x)=>h(y,x)||v(y,x)):p==="data"?r.filter((y,x)=>{let b=c.routes[y.route.id];if(!b||!b.hasLoader)return!1;if(h(y,x)||v(y,x))return!0;if(y.route.shouldRevalidate){let g=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Jb(i,r,{includeHydrateFallback:u}={}){return Fb(i.map(c=>{let f=r.routes[c.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function Fb(i){return[...new Set(i)]}function Ib(i){let r={},u=Object.keys(i).sort();for(let c of u)r[c]=i[c];return r}function Pb(i,r){let u=new Set;return new Set(r),i.reduce((c,f)=>{let p=JSON.stringify(Ib(f));return u.has(p)||(u.add(p),c.push({key:p,link:f})),c},[])}function ag(){let i=w.useContext(qi);return zd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function ev(){let i=w.useContext(ts);return zd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Ed=w.createContext(void 0);Ed.displayName="FrameworkContext";function ng(){let i=w.useContext(Ed);return zd(i,"You must render this element inside a <HydratedRouter> element"),i}function tv(i,r){let u=w.useContext(Ed),[c,f]=w.useState(!1),[p,h]=w.useState(!1),{onFocus:v,onBlur:y,onMouseEnter:x,onMouseLeave:b,onTouchStart:g}=r,z=w.useRef(null);w.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let $=q=>{q.forEach(Q=>{h(Q.isIntersecting)})},G=new IntersectionObserver($,{threshold:.5});return z.current&&G.observe(z.current),()=>{G.disconnect()}}},[i]),w.useEffect(()=>{if(c){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[c]);let N=()=>{f(!0)},R=()=>{f(!1),h(!1)};return u?i!=="intent"?[p,z,{}]:[p,z,{onFocus:Ul(v,N),onBlur:Ul(y,R),onMouseEnter:Ul(x,N),onMouseLeave:Ul(b,R),onTouchStart:Ul(g,N)}]:[!1,z,{}]}function Ul(i,r){return u=>{i&&i(u),u.defaultPrevented||r(u)}}function av({page:i,...r}){let{router:u}=ag(),c=w.useMemo(()=>qm(u.routes,i,u.basename),[u.routes,i,u.basename]);return c?w.createElement(iv,{page:i,matches:c,...r}):null}function nv(i){let{manifest:r,routeModules:u}=ng(),[c,f]=w.useState([]);return w.useEffect(()=>{let p=!1;return Wb(i,r,u).then(h=>{p||f(h)}),()=>{p=!0}},[i,r,u]),c}function iv({page:i,matches:r,...u}){let c=$a(),{future:f,manifest:p,routeModules:h}=ng(),{basename:v}=ag(),{loaderData:y,matches:x}=ev(),b=w.useMemo(()=>rm(i,r,x,p,c,"data"),[i,r,x,p,c]),g=w.useMemo(()=>rm(i,r,x,p,c,"assets"),[i,r,x,p,c]),z=w.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let $=new Set,G=!1;if(r.forEach(Q=>{let X=p.routes[Q.route.id];!X||!X.hasLoader||(!b.some(O=>O.route.id===Q.route.id)&&Q.route.id in y&&h[Q.route.id]?.shouldRevalidate||X.hasClientLoader?G=!0:$.add(Q.route.id))}),$.size===0)return[];let q=Xb(i,v,f.unstable_trailingSlashAwareDataRequests,"data");return G&&$.size>0&&q.searchParams.set("_routes",r.filter(Q=>$.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[q.pathname+q.search]},[v,f.unstable_trailingSlashAwareDataRequests,y,c,p,b,r,i,h]),N=w.useMemo(()=>Jb(g,p),[g,p]),R=nv(g);return w.createElement(w.Fragment,null,z.map($=>w.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...u})),N.map($=>w.createElement("link",{key:$,rel:"modulepreload",href:$,...u})),R.map(({key:$,link:G})=>w.createElement("link",{key:$,nonce:u.nonce,...G,crossOrigin:G.crossOrigin??u.crossOrigin})))}function lv(...i){return r=>{i.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rv&&(window.__reactRouterVersion="7.13.0")}catch{}function ov({basename:i,children:r,unstable_useTransitions:u,window:c}){let f=w.useRef();f.current==null&&(f.current=Uy({window:c,v5Compat:!0}));let p=f.current,[h,v]=w.useState({action:p.action,location:p.location}),y=w.useCallback(x=>{u===!1?v(x):w.startTransition(()=>v(x))},[u]);return w.useLayoutEffect(()=>p.listen(y),[p,y]),w.createElement(Hb,{basename:i,children:r,location:h.location,navigationType:h.action,navigator:p,unstable_useTransitions:u})}var ig=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qe=w.forwardRef(function({onClick:r,discover:u="render",prefetch:c="none",relative:f,reloadDocument:p,replace:h,state:v,target:y,to:x,preventScrollReset:b,viewTransition:g,unstable_defaultShouldRevalidate:z,...N},R){let{basename:$,unstable_useTransitions:G}=w.useContext(Pt),q=typeof x=="string"&&ig.test(x),Q=Km(x,$);x=Q.to;let X=yb(x,{relative:f}),[O,P,Z]=tv(c,N),B=dv(x,{replace:h,state:v,target:y,preventScrollReset:b,relative:f,viewTransition:g,unstable_defaultShouldRevalidate:z,unstable_useTransitions:G});function W(ze){r&&r(ze),ze.defaultPrevented||B(ze)}let se=w.createElement("a",{...N,...Z,href:Q.absoluteURL||X,onClick:Q.isExternal||p?r:W,ref:lv(R,P),target:y,"data-discover":!q&&u==="render"?"true":void 0});return O&&!q?w.createElement(w.Fragment,null,se,w.createElement(av,{page:X})):se});qe.displayName="Link";var sv=w.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:c="",end:f=!1,style:p,to:h,viewTransition:v,children:y,...x},b){let g=er(h,{relative:x.relative}),z=$a(),N=w.useContext(ts),{navigator:R,basename:$}=w.useContext(Pt),G=N!=null&&gv(g)&&v===!0,q=R.encodeLocation?R.encodeLocation(g).pathname:g.pathname,Q=z.pathname,X=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;u||(Q=Q.toLowerCase(),X=X?X.toLowerCase():null,q=q.toLowerCase()),X&&$&&(X=Ha(X,$)||X);const O=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let P=Q===q||!f&&Q.startsWith(q)&&Q.charAt(O)==="/",Z=X!=null&&(X===q||!f&&X.startsWith(q)&&X.charAt(q.length)==="/"),B={isActive:P,isPending:Z,isTransitioning:G},W=P?r:void 0,se;typeof c=="function"?se=c(B):se=[c,P?"active":null,Z?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let ze=typeof p=="function"?p(B):p;return w.createElement(qe,{...x,"aria-current":W,className:se,ref:b,style:ze,to:h,viewTransition:v},typeof y=="function"?y(B):y)});sv.displayName="NavLink";var cv=w.forwardRef(({discover:i="render",fetcherKey:r,navigate:u,reloadDocument:c,replace:f,state:p,method:h=Uo,action:v,onSubmit:y,relative:x,preventScrollReset:b,viewTransition:g,unstable_defaultShouldRevalidate:z,...N},R)=>{let{unstable_useTransitions:$}=w.useContext(Pt),G=hv(),q=mv(v,{relative:x}),Q=h.toLowerCase()==="get"?"get":"post",X=typeof v=="string"&&ig.test(v),O=P=>{if(y&&y(P),P.defaultPrevented)return;P.preventDefault();let Z=P.nativeEvent.submitter,B=Z?.getAttribute("formmethod")||h,W=()=>G(Z||P.currentTarget,{fetcherKey:r,method:B,navigate:u,replace:f,state:p,relative:x,preventScrollReset:b,viewTransition:g,unstable_defaultShouldRevalidate:z});$&&u!==!1?w.startTransition(()=>W()):W()};return w.createElement("form",{ref:R,method:Q,action:q,onSubmit:c?y:O,...N,"data-discover":!X&&i==="render"?"true":void 0})});cv.displayName="Form";function uv(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lg(i){let r=w.useContext(qi);return Ge(r,uv(i)),r}function dv(i,{target:r,replace:u,state:c,preventScrollReset:f,relative:p,viewTransition:h,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y}={}){let x=yn(),b=$a(),g=er(i,{relative:p});return w.useCallback(z=>{if(Yb(z,r)){z.preventDefault();let N=u!==void 0?u:Zl(b)===Zl(g),R=()=>x(i,{replace:N,state:c,preventScrollReset:f,relative:p,viewTransition:h,unstable_defaultShouldRevalidate:v});y?w.startTransition(()=>R()):R()}},[b,x,g,u,c,r,i,f,p,h,v,y])}var fv=0,pv=()=>`__${String(++fv)}__`;function hv(){let{router:i}=lg("useSubmit"),{basename:r}=w.useContext(Pt),u=_b(),c=i.fetch,f=i.navigate;return w.useCallback(async(p,h={})=>{let{action:v,method:y,encType:x,formData:b,body:g}=Vb(p,r);if(h.navigate===!1){let z=h.fetcherKey||pv();await c(z,u,h.action||v,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:g,formMethod:h.method||y,formEncType:h.encType||x,flushSync:h.flushSync})}else await f(h.action||v,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:g,formMethod:h.method||y,formEncType:h.encType||x,replace:h.replace,state:h.state,fromRouteId:u,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,f,r,u])}function mv(i,{relative:r}={}){let{basename:u}=w.useContext(Pt),c=w.useContext(la);Ge(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),p={...er(i||".",{relative:r})},h=$a();if(i==null){p.search=h.search;let v=new URLSearchParams(p.search),y=v.getAll("index");if(y.some(b=>b==="")){v.delete("index"),y.filter(g=>g).forEach(g=>v.append("index",g));let b=v.toString();p.search=b?`?${b}`:""}}return(!i||i===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(p.pathname=p.pathname==="/"?u:Oa([u,p.pathname])),Zl(p)}function gv(i,{relative:r}={}){let u=w.useContext(Wm);Ge(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=lg("useViewTransitionState"),f=er(i,{relative:r});if(!u.isTransitioning)return!1;let p=Ha(u.currentLocation.pathname,c)||u.currentLocation.pathname,h=Ha(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Ko(f.pathname,h)!=null||Ko(f.pathname,p)!=null}var ct=function(){return ct=Object.assign||function(r){for(var u,c=1,f=arguments.length;c<f;c++){u=arguments[c];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(r[p]=u[p])}return r},ct.apply(this,arguments)};function Oi(i,r,u){if(u||arguments.length===2)for(var c=0,f=r.length,p;c<f;c++)(p||!(c in r))&&(p||(p=Array.prototype.slice.call(r,0,c)),p[c]=r[c]);return i.concat(p||Array.prototype.slice.call(r))}var $e="-ms-",Vl="-moz-",ke="-webkit-",rg="comm",ns="rule",kd="decl",xv="@import",yv="@namespace",og="@keyframes",bv="@layer",sg=Math.abs,Td=String.fromCharCode,sd=Object.assign;function vv(i,r){return lt(i,0)^45?(((r<<2^lt(i,0))<<2^lt(i,1))<<2^lt(i,2))<<2^lt(i,3):0}function cg(i){return i.trim()}function Ma(i,r){return(i=r.exec(i))?i[0]:i}function he(i,r,u){return i.replace(r,u)}function $o(i,r,u){return i.indexOf(r,u)}function lt(i,r){return i.charCodeAt(r)|0}function Yn(i,r,u){return i.slice(r,u)}function na(i){return i.length}function ug(i){return i.length}function Gl(i,r){return r.push(i),i}function jv(i,r){return i.map(r).join("")}function om(i,r){return i.filter(function(u){return!Ma(u,r)})}var is=1,Hi=1,dg=0,It=0,nt=0,Yi="";function ls(i,r,u,c,f,p,h,v){return{value:i,root:r,parent:u,type:c,props:f,children:p,line:is,column:Hi,length:h,return:"",siblings:v}}function pn(i,r){return sd(ls("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},r)}function Ti(i){for(;i.root;)i=pn(i.root,{children:[i]});Gl(i,i.siblings)}function Sv(){return nt}function wv(){return nt=It>0?lt(Yi,--It):0,Hi--,nt===10&&(Hi=1,is--),nt}function ia(){return nt=It<dg?lt(Yi,It++):0,Hi++,nt===10&&(Hi=1,is++),nt}function mn(){return lt(Yi,It)}function qo(){return It}function rs(i,r){return Yn(Yi,i,r)}function Wl(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cv(i){return is=Hi=1,dg=na(Yi=i),It=0,[]}function Av(i){return Yi="",i}function Hu(i){return cg(rs(It-1,cd(i===91?i+2:i===40?i+1:i)))}function zv(i){for(;(nt=mn())&&nt<33;)ia();return Wl(i)>2||Wl(nt)>3?"":" "}function Ev(i,r){for(;--r&&ia()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return rs(i,qo()+(r<6&&mn()==32&&ia()==32))}function cd(i){for(;ia();)switch(nt){case i:return It;case 34:case 39:i!==34&&i!==39&&cd(nt);break;case 40:i===41&&cd(i);break;case 92:ia();break}return It}function kv(i,r){for(;ia()&&i+nt!==57;)if(i+nt===84&&mn()===47)break;return"/*"+rs(r,It-1)+"*"+Td(i===47?i:ia())}function Tv(i){for(;!Wl(mn());)ia();return rs(i,It)}function Nv(i){return Av(Yo("",null,null,null,[""],i=Cv(i),0,[0],i))}function Yo(i,r,u,c,f,p,h,v,y){for(var x=0,b=0,g=h,z=0,N=0,R=0,$=1,G=1,q=1,Q=0,X="",O=f,P=p,Z=c,B=X;G;)switch(R=Q,Q=ia()){case 40:if(R!=108&&lt(B,g-1)==58){$o(B+=he(Hu(Q),"&","&\f"),"&\f",sg(x?v[x-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:B+=Hu(Q);break;case 9:case 10:case 13:case 32:B+=zv(R);break;case 92:B+=Ev(qo()-1,7);continue;case 47:switch(mn()){case 42:case 47:Gl(_v(kv(ia(),qo()),r,u,y),y),(Wl(R||1)==5||Wl(mn()||1)==5)&&na(B)&&Yn(B,-1,void 0)!==" "&&(B+=" ");break;default:B+="/"}break;case 123*$:v[x++]=na(B)*q;case 125*$:case 59:case 0:switch(Q){case 0:case 125:G=0;case 59+b:q==-1&&(B=he(B,/\f/g,"")),N>0&&(na(B)-g||$===0&&R===47)&&Gl(N>32?cm(B+";",c,u,g-1,y):cm(he(B," ","")+";",c,u,g-2,y),y);break;case 59:B+=";";default:if(Gl(Z=sm(B,r,u,x,b,f,v,X,O=[],P=[],g,p),p),Q===123)if(b===0)Yo(B,r,Z,Z,O,p,g,v,P);else{switch(z){case 99:if(lt(B,3)===110)break;case 108:if(lt(B,2)===97)break;default:b=0;case 100:case 109:case 115:}b?Yo(i,Z,Z,c&&Gl(sm(i,Z,Z,0,0,f,v,X,f,O=[],g,P),P),f,P,g,v,c?O:P):Yo(B,Z,Z,Z,[""],P,0,v,P)}}x=b=N=0,$=q=1,X=B="",g=h;break;case 58:g=1+na(B),N=R;default:if($<1){if(Q==123)--$;else if(Q==125&&$++==0&&wv()==125)continue}switch(B+=Td(Q),Q*$){case 38:q=b>0?1:(B+="\f",-1);break;case 44:v[x++]=(na(B)-1)*q,q=1;break;case 64:mn()===45&&(B+=Hu(ia())),z=mn(),b=g=na(X=B+=Tv(qo())),Q++;break;case 45:R===45&&na(B)==2&&($=0)}}return p}function sm(i,r,u,c,f,p,h,v,y,x,b,g){for(var z=f-1,N=f===0?p:[""],R=ug(N),$=0,G=0,q=0;$<c;++$)for(var Q=0,X=Yn(i,z+1,z=sg(G=h[$])),O=i;Q<R;++Q)(O=cg(G>0?N[Q]+" "+X:he(X,/&\f/g,N[Q])))&&(y[q++]=O);return ls(i,r,u,f===0?ns:v,y,x,b,g)}function _v(i,r,u,c){return ls(i,r,u,rg,Td(Sv()),Yn(i,2,-2),0,c)}function cm(i,r,u,c,f){return ls(i,r,u,kd,Yn(i,0,c),Yn(i,c+1,-1),c,f)}function fg(i,r,u){switch(vv(i,r)){case 5103:return ke+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ke+i+i;case 4855:return ke+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return Vl+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+i+Vl+i+$e+i+i;case 5936:switch(lt(i,r+11)){case 114:return ke+i+$e+he(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ke+i+$e+he(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ke+i+$e+he(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return ke+i+$e+i+i;case 6165:return ke+i+$e+"flex-"+i+i;case 5187:return ke+i+he(i,/(\w+).+(:[^]+)/,ke+"box-$1$2"+$e+"flex-$1$2")+i;case 5443:return ke+i+$e+"flex-item-"+he(i,/flex-|-self/g,"")+(Ma(i,/flex-|baseline/)?"":$e+"grid-row-"+he(i,/flex-|-self/g,""))+i;case 4675:return ke+i+$e+"flex-line-pack"+he(i,/align-content|flex-|-self/g,"")+i;case 5548:return ke+i+$e+he(i,"shrink","negative")+i;case 5292:return ke+i+$e+he(i,"basis","preferred-size")+i;case 6060:return ke+"box-"+he(i,"-grow","")+ke+i+$e+he(i,"grow","positive")+i;case 4554:return ke+he(i,/([^-])(transform)/g,"$1"+ke+"$2")+i;case 6187:return he(he(he(i,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),i,"")+i;case 5495:case 3959:return he(i,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return he(he(i,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+$e+"flex-pack:$3"),/space-between/,"justify")+ke+i+i;case 4200:if(!Ma(i,/flex-|baseline/))return $e+"grid-column-align"+Yn(i,r)+i;break;case 2592:case 3360:return $e+he(i,"template-","")+i;case 4384:case 3616:return u&&u.some(function(c,f){return r=f,Ma(c.props,/grid-\w+-end/)})?~$o(i+(u=u[r].value),"span",0)?i:$e+he(i,"-start","")+i+$e+"grid-row-span:"+(~$o(u,"span",0)?Ma(u,/\d+/):+Ma(u,/\d+/)-+Ma(i,/\d+/))+";":$e+he(i,"-start","")+i;case 4896:case 4128:return u&&u.some(function(c){return Ma(c.props,/grid-\w+-start/)})?i:$e+he(he(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return he(i,/(.+)-inline(.+)/,ke+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(na(i)-1-r>6)switch(lt(i,r+1)){case 109:if(lt(i,r+4)!==45)break;case 102:return he(i,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Vl+(lt(i,r+3)==108?"$3":"$2-$3"))+i;case 115:return~$o(i,"stretch",0)?fg(he(i,"stretch","fill-available"),r,u)+i:i}break;case 5152:case 5920:return he(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,p,h,v,y,x){return $e+f+":"+p+x+(h?$e+f+"-span:"+(v?y:+y-+p)+x:"")+i});case 4949:if(lt(i,r+6)===121)return he(i,":",":"+ke)+i;break;case 6444:switch(lt(i,lt(i,14)===45?18:11)){case 120:return he(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(lt(i,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+$e+"$2box$3")+i;case 100:return he(i,":",":"+$e)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(i,"scroll-","scroll-snap-")+i}return i}function Zo(i,r){for(var u="",c=0;c<i.length;c++)u+=r(i[c],c,i,r)||"";return u}function Rv(i,r,u,c){switch(i.type){case bv:if(i.children.length)break;case xv:case yv:case kd:return i.return=i.return||i.value;case rg:return"";case og:return i.return=i.value+"{"+Zo(i.children,c)+"}";case ns:if(!na(i.value=i.props.join(",")))return""}return na(u=Zo(i.children,c))?i.return=i.value+"{"+u+"}":""}function Mv(i){var r=ug(i);return function(u,c,f,p){for(var h="",v=0;v<r;v++)h+=i[v](u,c,f,p)||"";return h}}function Dv(i){return function(r){r.root||(r=r.return)&&i(r)}}function Ov(i,r,u,c){if(i.length>-1&&!i.return)switch(i.type){case kd:i.return=fg(i.value,i.length,u);return;case og:return Zo([pn(i,{value:he(i.value,"@","@"+ke)})],c);case ns:if(i.length)return jv(u=i.props,function(f){switch(Ma(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ti(pn(i,{props:[he(f,/:(read-\w+)/,":"+Vl+"$1")]})),Ti(pn(i,{props:[f]})),sd(i,{props:om(u,c)});break;case"::placeholder":Ti(pn(i,{props:[he(f,/:(plac\w+)/,":"+ke+"input-$1")]})),Ti(pn(i,{props:[he(f,/:(plac\w+)/,":"+Vl+"$1")]})),Ti(pn(i,{props:[he(f,/:(plac\w+)/,$e+"input-$1")]})),Ti(pn(i,{props:[f]})),sd(i,{props:om(u,c)});break}return""})}}var Hv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},Bi=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",pg="active",hg="data-styled-version",os="6.3.9",Nd=`/*!sc*/
`,Xl=typeof window<"u"&&typeof document<"u",Ft=Ae.createContext===void 0,Bv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),Uv={},_d=Object.freeze([]),Ui=Object.freeze({});function mg(i,r,u){return u===void 0&&(u=Ui),i.theme!==u.theme&&i.theme||r||u.theme}var gg=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Lv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$v=/(^-|-$)/g;function um(i){return i.replace(Lv,"-").replace($v,"")}var qv=/(a)(d)/gi,dm=function(i){return String.fromCharCode(i+(i>25?39:97))};function ud(i){var r,u="";for(r=Math.abs(i);r>52;r=r/52|0)u=dm(r%52)+u;return(dm(r%52)+u).replace(qv,"$1-$2")}var Bu,Un=function(i,r){for(var u=r.length;u;)i=33*i^r.charCodeAt(--u);return i},xg=function(i){return Un(5381,i)};function Rd(i){return ud(xg(i)>>>0)}function Yv(i){return i.displayName||i.name||"Component"}function Uu(i){return typeof i=="string"&&!0}var yg=typeof Symbol=="function"&&Symbol.for,bg=yg?Symbol.for("react.memo"):60115,Gv=yg?Symbol.for("react.forward_ref"):60112,Qv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xv=((Bu={})[Gv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bu[bg]=vg,Bu);function fm(i){return("type"in(r=i)&&r.type.$$typeof)===bg?vg:"$$typeof"in i?Xv[i.$$typeof]:Qv;var r}var Kv=Object.defineProperty,Zv=Object.getOwnPropertyNames,pm=Object.getOwnPropertySymbols,Wv=Object.getOwnPropertyDescriptor,Jv=Object.getPrototypeOf,hm=Object.prototype;function jg(i,r,u){if(typeof r!="string"){if(hm){var c=Jv(r);c&&c!==hm&&jg(i,c,u)}var f=Zv(r);pm&&(f=f.concat(pm(r)));for(var p=fm(i),h=fm(r),v=0;v<f.length;++v){var y=f[v];if(!(y in Vv||u&&u[y]||h&&y in h||p&&y in p)){var x=Wv(r,y);try{Kv(i,y,x)}catch{}}}}return i}function Gn(i){return typeof i=="function"}function Md(i){return typeof i=="object"&&"styledComponentId"in i}function $n(i,r){return i&&r?"".concat(i," ").concat(r):i||r||""}function Wo(i,r){return i.join("")}function Jl(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function dd(i,r,u){if(u===void 0&&(u=!1),!u&&!Jl(i)&&!Array.isArray(i))return r;if(Array.isArray(r))for(var c=0;c<r.length;c++)i[c]=dd(i[c],r[c]);else if(Jl(r))for(var c in r)i[c]=dd(i[c],r[c]);return i}function Dd(i,r){Object.defineProperty(i,"toString",{value:r})}function xn(i){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Fv=(function(){function i(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r,this._cGroup=0,this._cIndex=0}return i.prototype.indexOfGroup=function(r){if(r===this._cGroup)return this._cIndex;var u=this._cIndex;if(r>this._cGroup)for(var c=this._cGroup;c<r;c++)u+=this.groupSizes[c];else for(c=this._cGroup-1;c>=r;c--)u-=this.groupSizes[c];return this._cGroup=r,this._cIndex=u,u},i.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,p=f;r>=p;)if((p<<=1)<0)throw xn(16,"".concat(r));this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(var h=f;h<p;h++)this.groupSizes[h]=0}for(var v=this.indexOfGroup(r+1),y=0,x=(h=0,u.length);h<x;h++)this.tag.insertRule(v,u[h])&&(this.groupSizes[r]++,v++,y++);y>0&&this._cGroup>r&&(this._cIndex+=y)},i.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],c=this.indexOfGroup(r),f=c+u;this.groupSizes[r]=0;for(var p=c;p<f;p++)this.tag.deleteRule(c);u>0&&this._cGroup>r&&(this._cIndex-=u)}},i.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var c=this.groupSizes[r],f=this.indexOfGroup(r),p=f+c,h=f;h<p;h++)u+=this.tag.getRule(h)+Nd;return u},i})(),Go=new Map,Jo=new Map,Qo=1,_i=function(i){if(Go.has(i))return Go.get(i);for(;Jo.has(Qo);)Qo++;var r=Qo++;return Go.set(i,r),Jo.set(r,i),r},Iv=function(i,r){Qo=r+1,Go.set(i,r),Jo.set(r,i)},Pv="style[".concat(Bi,"][").concat(hg,'="').concat(os,'"]'),e2=new RegExp("^".concat(Bi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mm=function(i){return typeof ShadowRoot<"u"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11},fd=function(i){if(!i)return document;if(mm(i))return i;if("getRootNode"in i){var r=i.getRootNode();if(mm(r))return r}return document},t2=function(i,r,u){for(var c,f=u.split(","),p=0,h=f.length;p<h;p++)(c=f[p])&&i.registerName(r,c)},a2=function(i,r){for(var u,c=((u=r.textContent)!==null&&u!==void 0?u:"").split(Nd),f=[],p=0,h=c.length;p<h;p++){var v=c[p].trim();if(v){var y=v.match(e2);if(y){var x=0|parseInt(y[1],10),b=y[2];x!==0&&(Iv(b,x),t2(i,b,y[3]),i.getTag().insertRules(x,f)),f.length=0}else f.push(v)}}},Lu=function(i){for(var r=fd(i.options.target).querySelectorAll(Pv),u=0,c=r.length;u<c;u++){var f=r[u];f&&f.getAttribute(Bi)!==pg&&(a2(i,f),f.parentNode&&f.parentNode.removeChild(f))}};function n2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sg=function(i){var r=document.head,u=i||r,c=document.createElement("style"),f=(function(v){var y=Array.from(v.querySelectorAll("style[".concat(Bi,"]")));return y[y.length-1]})(u),p=f!==void 0?f.nextSibling:null;c.setAttribute(Bi,pg),c.setAttribute(hg,os);var h=n2();return h&&c.setAttribute("nonce",h),u.insertBefore(c,p),c},i2=(function(){function i(r){this.element=Sg(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){var c;if(u.sheet)return u.sheet;for(var f=(c=u.getRootNode().styleSheets)!==null&&c!==void 0?c:document.styleSheets,p=0,h=f.length;p<h;p++){var v=f[p];if(v.ownerNode===u)return v}throw xn(17)})(this.element),this.length=0}return i.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},i.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},i})(),l2=(function(){function i(r){this.element=Sg(r),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[r]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},i.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},i})(),r2=(function(){function i(r){this.rules=[],this.length=0}return i.prototype.insertRule=function(r,u){return r<=this.length&&(r===this.length?this.rules.push(u):this.rules.splice(r,0,u),this.length++,!0)},i.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},i.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},i})(),gm=Xl,o2={isServer:!Xl,useCSSOMInjection:!Bv},Fo=(function(){function i(r,u,c){r===void 0&&(r=Ui),u===void 0&&(u={});var f=this;this.options=ct(ct({},o2),r),this.gs=u,this.names=new Map(c),this.server=!!r.isServer,!this.server&&Xl&&gm&&(gm=!1,Lu(this)),Dd(this,function(){return(function(p){for(var h=p.getTag(),v=h.length,y="",x=function(g){var z=(function(q){return Jo.get(q)})(g);if(z===void 0)return"continue";var N=p.names.get(z);if(N===void 0||!N.size)return"continue";var R=h.getGroup(g);if(R.length===0)return"continue";var $=Bi+".g"+g+'[id="'+z+'"]',G="";N.forEach(function(q){q.length>0&&(G+=q+",")}),y+=R+$+'{content:"'+G+'"}'+Nd},b=0;b<v;b++)x(b);return y})(f)})}return i.registerId=function(r){return _i(r)},i.prototype.rehydrate=function(){!this.server&&Xl&&Lu(this)},i.prototype.reconstructWithOptions=function(r,u){u===void 0&&(u=!0);var c=new i(ct(ct({},this.options),r),this.gs,u&&this.names||void 0);return!this.server&&Xl&&r.target!==this.options.target&&fd(this.options.target)!==fd(r.target)&&Lu(c),c},i.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(u){var c=u.useCSSOMInjection,f=u.target;return u.isServer?new r2(f):c?new i2(f):new l2(f)})(this.options),new Fv(r)));var r},i.prototype.hasNameForId=function(r,u){var c,f;return(f=(c=this.names.get(r))===null||c===void 0?void 0:c.has(u))!==null&&f!==void 0&&f},i.prototype.registerName=function(r,u){_i(r);var c=this.names.get(r);c?c.add(u):this.names.set(r,new Set([u]))},i.prototype.insertRules=function(r,u,c){this.registerName(r,u),this.getTag().insertRules(_i(r),c)},i.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},i.prototype.clearRules=function(r){this.getTag().clearGroup(_i(r)),this.clearNames(r)},i.prototype.clearTag=function(){this.tag=void 0},i})(),s2=/&/g,Da=47,Ln=42;function xm(i){if(i.indexOf("}")===-1)return!1;for(var r=i.length,u=0,c=0,f=!1,p=0;p<r;p++){var h=i.charCodeAt(p);if(c!==0||f||h!==Da||i.charCodeAt(p+1)!==Ln)if(f)h===Ln&&i.charCodeAt(p+1)===Da&&(f=!1,p++);else if(h!==34&&h!==39||p!==0&&i.charCodeAt(p-1)===92){if(c===0){if(h===123)u++;else if(h===125&&--u<0)return!0}}else c===0?c=h:c===h&&(c=0);else f=!0,p++}return u!==0||c!==0}function wg(i,r){return i.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(c){return"".concat(r," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=wg(u.children,r)),u})}function c2(i){var r,u,c,f=Ui,p=f.options,h=p===void 0?Ui:p,v=f.plugins,y=v===void 0?_d:v,x=function(R,$,G){return G.startsWith(u)&&G.endsWith(u)&&G.replaceAll(u,"").length>0?".".concat(r):R},b=y.slice();b.push(function(R){R.type===ns&&R.value.includes("&")&&(c||(c=new RegExp("\\".concat(u,"\\b"),"g")),R.props[0]=R.props[0].replace(s2,u).replace(c,x))}),h.prefix&&b.push(Ov),b.push(Rv);var g=[],z=Mv(b.concat(Dv(function(R){return g.push(R)}))),N=function(R,$,G,q){$===void 0&&($=""),G===void 0&&(G=""),q===void 0&&(q="&"),r=q,u=$,c=void 0;var Q=(function(O){if(!xm(O))return O;for(var P=O.length,Z="",B=0,W=0,se=0,ze=!1,re=0;re<P;re++){var K=O.charCodeAt(re);if(se!==0||ze||K!==Da||O.charCodeAt(re+1)!==Ln)if(ze)K===Ln&&O.charCodeAt(re+1)===Da&&(ze=!1,re++);else if(K!==34&&K!==39||re!==0&&O.charCodeAt(re-1)===92){if(se===0)if(K===123)W++;else if(K===125){if(--W<0){for(var F=re+1;F<P;){var Se=O.charCodeAt(F);if(Se===59||Se===10)break;F++}F<P&&O.charCodeAt(F)===59&&F++,W=0,re=F-1,B=F;continue}W===0&&(Z+=O.substring(B,re+1),B=re+1)}else K===59&&W===0&&(Z+=O.substring(B,re+1),B=re+1)}else se===0?se=K:se===K&&(se=0);else ze=!0,re++}if(B<P){var He=O.substring(B);xm(He)||(Z+=He)}return Z})((function(O){if(O.indexOf("//")===-1)return O;for(var P=O.length,Z=[],B=0,W=0,se=0,ze=0;W<P;){var re=O.charCodeAt(W);if(re!==34&&re!==39||W!==0&&O.charCodeAt(W-1)===92)if(se===0)if(re===Da&&W+1<P&&O.charCodeAt(W+1)===Ln){for(W+=2;W+1<P&&(O.charCodeAt(W)!==Ln||O.charCodeAt(W+1)!==Da);)W++;W+=2}else if(re===40&&W>=3&&(32|O.charCodeAt(W-1))==108&&(32|O.charCodeAt(W-2))==114&&(32|O.charCodeAt(W-3))==117)ze=1,W++;else if(ze>0)re===41?ze--:re===40&&ze++,W++;else if(re===Ln&&W+1<P&&O.charCodeAt(W+1)===Da)W>B&&Z.push(O.substring(B,W)),B=W+=2;else if(re===Da&&W+1<P&&O.charCodeAt(W+1)===Da){for(W>B&&Z.push(O.substring(B,W));W<P&&O.charCodeAt(W)!==10;)W++;B=W}else W++;else W++;else se===0?se=re:se===re&&(se=0),W++}return B===0?O:(B<P&&Z.push(O.substring(B)),Z.join(""))})(R)),X=Nv(G||$?"".concat(G," ").concat($," { ").concat(Q," }"):Q);return h.namespace&&(X=wg(X,h.namespace)),g=[],Zo(X,z),g};return N.hash=y.length?y.reduce(function(R,$){return $.name||xn(15),Un(R,$.name)},5381).toString():"",N}var u2=new Fo,pd=c2(),hd={shouldForwardProp:void 0,styleSheet:u2,stylis:pd},Cg=Ft?{Provider:function(i){return i.children},Consumer:function(i){return(0,i.children)(hd)}}:Ae.createContext(hd);Cg.Consumer;Ft||Ae.createContext(void 0);function md(){return Ft?hd:Ae.useContext(Cg)}var Ag=(function(){function i(r,u){var c=this;this.inject=function(f,p){p===void 0&&(p=pd);var h=c.name+p.hash;f.hasNameForId(c.id,h)||f.insertRules(c.id,h,p(c.rules,h,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,Dd(this,function(){throw xn(12,String(c.name))})}return i.prototype.getName=function(r){return r===void 0&&(r=pd),this.name+r.hash},i})();function d2(i,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||i in Hv||i.startsWith("--")?String(r).trim():"".concat(r,"px")}var f2=function(i){return i>="A"&&i<="Z"};function ym(i){for(var r="",u=0;u<i.length;u++){var c=i[u];if(u===1&&c==="-"&&i[0]==="-")return i;f2(c)?r+="-"+c.toLowerCase():r+=c}return r.startsWith("ms-")?"-"+r:r}var zg=function(i){return i==null||i===!1||i===""},Eg=function(i){var r=[];for(var u in i){var c=i[u];i.hasOwnProperty(u)&&!zg(c)&&(Array.isArray(c)&&c.isCss||Gn(c)?r.push("".concat(ym(u),":"),c,";"):Jl(c)?r.push.apply(r,Oi(Oi(["".concat(u," {")],Eg(c),!1),["}"],!1)):r.push("".concat(ym(u),": ").concat(d2(u,c),";")))}return r};function gn(i,r,u,c,f){if(f===void 0&&(f=[]),typeof i=="string")return i&&f.push(i),f;if(zg(i))return f;if(Md(i))return f.push(".".concat(i.styledComponentId)),f;if(Gn(i)){if(!Gn(h=i)||h.prototype&&h.prototype.isReactComponent||!r)return f.push(i),f;var p=i(r);return gn(p,r,u,c,f)}var h;if(i instanceof Ag)return u?(i.inject(u,c),f.push(i.getName(c))):f.push(i),f;if(Jl(i)){for(var v=Eg(i),y=0;y<v.length;y++)f.push(v[y]);return f}if(!Array.isArray(i))return f.push(i.toString()),f;for(y=0;y<i.length;y++)gn(i[y],r,u,c,f);return f}function kg(i){for(var r=0;r<i.length;r+=1){var u=i[r];if(Gn(u)&&!Md(u))return!1}return!0}var p2=xg(os),h2=(function(){function i(r,u,c){this.rules=r,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&kg(r),this.componentId=u,this.baseHash=Un(p2,u),this.baseStyle=c,Fo.registerId(u)}return i.prototype.generateAndInjectStyles=function(r,u,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,c).className:"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=$n(f,this.staticRulesId);else{var p=Wo(gn(this.rules,r,u,c)),h=ud(Un(this.baseHash,p)>>>0);if(!u.hasNameForId(this.componentId,h)){var v=c(p,".".concat(h),void 0,this.componentId);u.insertRules(this.componentId,h,v)}f=$n(f,h),this.staticRulesId=h}else{for(var y=Un(this.baseHash,c.hash),x="",b=0;b<this.rules.length;b++){var g=this.rules[b];if(typeof g=="string")x+=g;else if(g){var z=Wo(gn(g,r,u,c));y=Un(Un(y,String(b)),z),x+=z}}if(x){var N=ud(y>>>0);if(!u.hasNameForId(this.componentId,N)){var R=c(x,".".concat(N),void 0,this.componentId);u.insertRules(this.componentId,N,R)}f=$n(f,N)}}return{className:f,css:typeof window>"u"?u.getTag().getGroup(_i(this.componentId)):""}},i})(),Li=Ft?{Provider:function(i){return i.children},Consumer:function(i){return(0,i.children)(void 0)}}:Ae.createContext(void 0);Li.Consumer;function m2(){var i=Ft?void 0:Ae.useContext(Li);if(!i)throw xn(18);return i}function g2(i){if(Ft)return i.children;var r=Ae.useContext(Li),u=Ae.useMemo(function(){return(function(c,f){if(!c)throw xn(14);if(Gn(c)){var p=c(f);return p}if(Array.isArray(c)||typeof c!="object")throw xn(8);return f?ct(ct({},f),c):c})(i.theme,r)},[i.theme,r]);return i.children?Ae.createElement(Li.Provider,{value:u},i.children):null}var $u={};function x2(i,r,u){var c=Md(i),f=i,p=!Uu(i),h=r.attrs,v=h===void 0?_d:h,y=r.componentId,x=y===void 0?(function(O,P){var Z=typeof O!="string"?"sc":um(O);$u[Z]=($u[Z]||0)+1;var B="".concat(Z,"-").concat(Rd(os+Z+$u[Z]));return P?"".concat(P,"-").concat(B):B})(r.displayName,r.parentComponentId):y,b=r.displayName,g=b===void 0?(function(O){return Uu(O)?"styled.".concat(O):"Styled(".concat(Yv(O),")")})(i):b,z=r.displayName&&r.componentId?"".concat(um(r.displayName),"-").concat(r.componentId):r.componentId||x,N=c&&f.attrs?f.attrs.concat(v).filter(Boolean):v,R=r.shouldForwardProp;if(c&&f.shouldForwardProp){var $=f.shouldForwardProp;if(r.shouldForwardProp){var G=r.shouldForwardProp;R=function(O,P){return $(O,P)&&G(O,P)}}else R=$}var q=new h2(u,z,c?f.componentStyle:void 0);function Q(O,P){return(function(Z,B,W){var se=Z.attrs,ze=Z.componentStyle,re=Z.defaultProps,K=Z.foldedComponentIds,F=Z.styledComponentId,Se=Z.target,He=Ft?void 0:Ae.useContext(Li),D=md(),V=Z.shouldForwardProp||D.shouldForwardProp,J=mg(B,He,re)||(Ft?void 0:Ui),oe=(function(Ie,Re,ra){for(var oa,kt=ct(ct({},Re),{className:void 0,theme:ra}),Qn=0;Qn<Ie.length;Qn+=1){var $t=Gn(oa=Ie[Qn])?oa(kt):oa;for(var sa in $t)sa==="className"?kt.className=$n(kt.className,$t[sa]):sa==="style"?kt.style=ct(ct({},kt.style),$t[sa]):kt[sa]=$t[sa]}return"className"in Re&&typeof Re.className=="string"&&(kt.className=$n(kt.className,Re.className)),kt})(se,B,J),me=oe.as||Se,C={};for(var U in oe)oe[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&oe.theme===J||(U==="forwardedAs"?C.as=oe.forwardedAs:V&&!V(U,me)||(C[U]=oe[U]));var I=(function(Ie,Re){var ra=md(),oa=Ie.generateAndInjectStyles(Re,ra.styleSheet,ra.stylis);return oa})(ze,oe),te=I.className,ce=I.css,fe=$n(K,F);te&&(fe+=" "+te),oe.className&&(fe+=" "+oe.className),C[Uu(me)&&!gg.has(me)?"class":"className"]=fe,W&&(C.ref=W);var je=w.createElement(me,C);return Ft&&ce?Ae.createElement(Ae.Fragment,null,Ae.createElement("style",{precedence:"styled-components",href:"sc-".concat(F,"-").concat(te),children:ce}),je):je})(X,O,P)}Q.displayName=g;var X=Ae.forwardRef(Q);return X.attrs=N,X.componentStyle=q,X.displayName=g,X.shouldForwardProp=R,X.foldedComponentIds=c?$n(f.foldedComponentIds,f.styledComponentId):"",X.styledComponentId=z,X.target=c?f.target:i,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=c?(function(P){for(var Z=[],B=1;B<arguments.length;B++)Z[B-1]=arguments[B];for(var W=0,se=Z;W<se.length;W++)dd(P,se[W],!0);return P})({},f.defaultProps,O):O}}),Dd(X,function(){return".".concat(X.styledComponentId)}),p&&jg(X,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function bm(i,r){for(var u=[i[0]],c=0,f=r.length;c<f;c+=1)u.push(r[c],i[c+1]);return u}var vm=function(i){return Object.assign(i,{isCss:!0})};function Od(i){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(Gn(i)||Jl(i))return vm(gn(bm(_d,Oi([i],r,!0))));var c=i;return r.length===0&&c.length===1&&typeof c[0]=="string"?gn(c):vm(gn(bm(c,r)))}function gd(i,r,u){if(u===void 0&&(u=Ui),!r)throw xn(1,r);var c=function(f){for(var p=[],h=1;h<arguments.length;h++)p[h-1]=arguments[h];return i(r,u,Od.apply(void 0,Oi([f],p,!1)))};return c.attrs=function(f){return gd(i,r,ct(ct({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return gd(i,r,ct(ct({},u),f))},c}var Tg=function(i){return gd(x2,i)},j=Tg;gg.forEach(function(i){j[i]=Tg(i)});var y2=(function(){function i(r,u){this.rules=r,this.componentId=u,this.isStatic=kg(r),Fo.registerId(this.componentId+1)}return i.prototype.createStyles=function(r,u,c,f){var p=f(Wo(gn(this.rules,u,c,f)),""),h=this.componentId+r;c.insertRules(h,h,p)},i.prototype.removeStyles=function(r,u){u.clearRules(this.componentId+r)},i.prototype.renderStyles=function(r,u,c,f){r>2&&Fo.registerId(this.componentId+r);var p=this.componentId+r;this.isStatic?c.hasNameForId(p,p)||this.createStyles(r,u,c,f):(this.removeStyles(r,c),this.createStyles(r,u,c,f))},i})();function b2(i){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var c=Od.apply(void 0,Oi([i],r,!1)),f="sc-global-".concat(Rd(JSON.stringify(c))),p=new y2(c,f),h=new WeakMap,v=function(x){var b=md(),g=Ft?void 0:Ae.useContext(Li),z=h.get(b.styleSheet);if(z===void 0&&(z=b.styleSheet.allocateGSInstance(f),h.set(b.styleSheet,z)),(typeof window>"u"||!b.styleSheet.server)&&y(z,x,b.styleSheet,g,b.stylis),Ft||Ae.useLayoutEffect(function(){return b.styleSheet.server||y(z,x,b.styleSheet,g,b.stylis),function(){var $;p.removeStyles(z,b.styleSheet),$=b.styleSheet.options.target,typeof document<"u"&&($??document).querySelectorAll('style[data-styled-global="'.concat(f,'"]')).forEach(function(G){return G.remove()})}},[z,x,b.styleSheet,g,b.stylis]),Ft){var N=f+z,R=typeof window>"u"?b.styleSheet.getTag().getGroup(_i(N)):"";if(R)return Ae.createElement("style",{key:"".concat(f,"-").concat(z),"data-styled-global":f,children:R})}return null};function y(x,b,g,z,N){if(p.isStatic)p.renderStyles(x,Uv,g,N);else{var R=ct(ct({},b),{theme:mg(b,z,v.defaultProps)});p.renderStyles(x,R,g,N)}}return Ae.memo(v)}function bt(i){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var c=Wo(Od.apply(void 0,Oi([i],r,!1))),f=Rd(c);return new Ag(f,c)}const v2=b2`
 
   :root {
    --color-navy: #0B1A33;
    --color-gold: #C9A84C;
    --color-white: #FFFFFF;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    color: ${({theme:i})=>i.colors.text};
    background-color: ${({theme:i})=>i.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 800;
    line-height: 1.2;
    color: ${({theme:i})=>i.colors.navy};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }
`,j2={colors:{navy:"#0B1A33",navyLight:"#162845",gold:"#C9A84C",goldHover:"#B08D35",navyDeep:"#050D1A",goldGradient:"linear-gradient(135deg, #C9A84C 0%, #E6C566 100%)",textMuted:"#64748B",white:"#FFFFFF",text:"#333333",textLight:"#E0E0E0",background:"#F9FAFB",border:"#E5E7EB"},effects:{glass:"backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); background: rgba(255, 255, 255, 0.1);",glassDark:"backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(11, 26, 51, 0.6);",shadow:"0 10px 30px -10px rgba(11, 26, 51, 0.2)",shadowHover:"0 20px 40px -15px rgba(11, 26, 51, 0.3)"},fonts:{display:"'Playfair Display', serif",body:"'DM Sans', sans-serif"},breakpoints:{mobile:"576px",tablet:"992px",desktop:"1200px"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"64px"}};const Ng=(...i)=>i.filter((r,u,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===u).join(" ").trim();const S2=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const w2=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,u,c)=>c?c.toUpperCase():u.toLowerCase());const jm=i=>{const r=w2(i);return r.charAt(0).toUpperCase()+r.slice(1)};var C2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const A2=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};const z2=w.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:f="",children:p,iconNode:h,...v},y)=>w.createElement("svg",{ref:y,...C2,width:r,height:r,stroke:i,strokeWidth:c?Number(u)*24/Number(r):u,className:Ng("lucide",f),...!p&&!A2(v)&&{"aria-hidden":"true"},...v},[...h.map(([x,b])=>w.createElement(x,b)),...Array.isArray(p)?p:[p]]));const ee=(i,r)=>{const u=w.forwardRef(({className:c,...f},p)=>w.createElement(z2,{ref:p,iconNode:r,className:Ng(`lucide-${S2(jm(i))}`,`lucide-${i}`,c),...f}));return u.displayName=jm(i),u};const E2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Kl=ee("activity",E2);const k2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ss=ee("arrow-left",k2);const T2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xd=ee("arrow-right",T2);const N2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],_g=ee("award",N2);const _2=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],R2=ee("baby",_2);const M2=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],D2=ee("badge-check",M2);const O2=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],cs=ee("bell",O2);const H2=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Sm=ee("briefcase",H2);const B2=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],U2=ee("building-2",B2);const L2=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],$2=ee("camera",L2);const q2=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],Hd=ee("car",q2);const Y2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qu=ee("check",Y2);const G2=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ql=ee("chevron-left",G2);const Q2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ri=ee("chevron-right",Q2);const V2=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],X2=ee("circle-check-big",V2);const K2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Io=ee("circle-check",K2);const Z2=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Rg=ee("cloud",Z2);const W2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],J2=ee("cpu",W2);const F2=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],I2=ee("credit-card",F2);const P2=[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]],e5=ee("dog",P2);const t5=[["path",{d:"M11 20H2",key:"nlcfvz"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",key:"au4z13"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14",key:"74r1mk"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M22 20h-3",key:"vhrsz"}]],a5=ee("door-open",t5);const n5=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Mg=ee("download",n5);const i5=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Dg=ee("eye",i5);const l5=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],r5=ee("file-text",l5);const o5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],wm=ee("globe",o5);const s5=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],c5=ee("heart",s5);const u5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Og=ee("info",u5);const d5=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],f5=ee("instagram",d5);const p5=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],h5=ee("layout-dashboard",p5);const m5=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],g5=ee("linkedin",m5);const x5=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Hg=ee("loader-circle",x5);const y5=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ba=ee("lock",y5);const b5=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],v5=ee("log-in",b5);const j5=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Bg=ee("log-out",j5);const S5=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Bd=ee("mail",S5);const w5=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ud=ee("map-pin",w5);const C5=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],A5=ee("menu",C5);const z5=[["path",{d:"M5 12h14",key:"1ays0h"}]],Vo=ee("minus",z5);const E5=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]],k5=ee("navigation-2",E5);const T5=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Po=ee("package",T5);const N5=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ld=ee("phone-call",N5);const _5=[["path",{d:"M14 6h8",key:"yd68k4"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ug=ee("phone-forwarded",_5);const R5=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],yd=ee("phone",R5);const M5=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],D5=ee("play",M5);const O5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Lg=ee("plus",O5);const H5=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],qn=ee("qr-code",H5);const B5=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],Cm=ee("quote",B5);const U5=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],es=ee("scan",U5);const L5=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$g=ee("search",L5);const $5=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],q5=ee("send",$5);const Y5=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],qg=ee("settings",Y5);const G5=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Q5=ee("share-2",G5);const V5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Yg=ee("shield-alert",V5);const X5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gt=ee("shield-check",X5);const K5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ua=ee("shield",K5);const Z5=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Xo=ee("shopping-bag",Z5);const W5=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Gi=ee("shopping-cart",W5);const J5=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],tr=ee("smartphone",J5);const F5=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ll=ee("star",F5);const I5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],P5=ee("target",I5);const ej=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],tj=ee("trash-2",ej);const aj=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],$d=ee("triangle-alert",aj);const nj=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],ij=ee("truck",nj);const lj=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],rj=ee("twitter",lj);const oj=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],sj=ee("user-plus",oj);const cj=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Mi=ee("user",cj);const uj=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ar=ee("users",uj);const dj=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],fj=ee("volume-2",dj);const pj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gg=ee("x",pj);const hj=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Qg=ee("zap",hj),Vg=w.createContext(),nr=()=>w.useContext(Vg),mj=({children:i})=>{const[r,u]=w.useState(()=>{try{const x=localStorage.getItem("tarkshya_cart");if(x&&x!=="undefined")return JSON.parse(x)}catch(x){console.error("Failed to parse cart from localStorage",x),localStorage.removeItem("tarkshya_cart")}return[]});w.useEffect(()=>{localStorage.setItem("tarkshya_cart",JSON.stringify(r))},[r]);const c=(x,b=1)=>{u(g=>{if(g.find(R=>R.productId===x.id))return g.map(R=>R.productId===x.id?{...R,quantity:R.quantity+b}:R);let N=null;if(x.photos){if(Array.isArray(x.photos))N=x.photos[0];else if(typeof x.photos=="string")try{N=JSON.parse(x.photos)[0]}catch{N=x.photos}}return[...g,{productId:x.id,name:x.name,price:x.mrp||0,image:N,quantity:b}]})},f=x=>{u(b=>b.filter(g=>g.productId!==x))},p=(x,b)=>{b<1||u(g=>g.map(z=>z.productId===x?{...z,quantity:b}:z))},h=()=>u([]),v=r.reduce((x,b)=>x+b.price*b.quantity,0),y=r.reduce((x,b)=>x+b.quantity,0);return l.jsx(Vg.Provider,{value:{cart:r,addToCart:c,removeFromCart:f,updateQuantity:p,clearCart:h,cartTotal:v,cartCount:y},children:i})},Xg=w.createContext(),rt=()=>{const i=w.useContext(Xg);if(!i)throw new Error("useLanguage must be used within a LanguageProvider");return i},gj=({children:i})=>{const[r,u]=w.useState(()=>localStorage.getItem("app_language")||"en");w.useEffect(()=>{localStorage.setItem("app_language",r),document.documentElement.lang=r},[r]);const c=()=>{u(f=>f==="en"?"hi":"en")};return l.jsx(Xg.Provider,{value:{language:r,setLanguage:u,toggleLanguage:c},children:i})},xj=j.button`
  padding: 12px 24px;
  font-family: ${({theme:i})=>i.fonts.body};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid transparent;

  ${({$variant:i,theme:r})=>i==="outline"?`
    background: transparent;
    color: ${r.colors.white};
    border-color: ${r.colors.white};
    &:hover {
      background: ${r.colors.white};
      color: ${r.colors.navy};
    }
  `:i==="secondary"?`
    background: ${r.colors.navy};
    color: ${r.colors.white};
    &:hover {
      background: ${r.colors.navyLight};
      transform: translateY(-2px);
    }
  `:`
    background: ${r.colors.gold};
    color: ${r.colors.navy};
    &:hover {
      background: ${r.colors.goldHover};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(201, 168, 76, 0.3);
    }
  `}
`,Qe=({children:i,variant:r="primary",...u})=>l.jsx(xj,{$variant:r,...u,children:i}),Kg="/assets/new_logo-CnGHiGGP.png",_e={en:{nav:{home:"Home",qrSafety:"QR Safety",cloudMonitoring:"Cloud Monitoring",gpsTracking:"GPS Tracking",initiative:"Initiative",b2b:"B2B Solutions",login:"LOGIN / DASHBOARD"},hero:{taglineDim:"The Next Evolution of",taglineHighlight:"SMART SAFETY IDS",subtext:"V-KAWACH provides a high-security ecosystem that protects your vehicle, family, and property through advanced QR-based communication.",getStarted:"GET STARTED",watchDemo:"WATCH DEMO",learnMore:"LEARN MORE"},sections:{categories:{title:"Top",highlight:"Categories",subtext:"Explore our wide range of safety solutions for all your needs"},safetyIds:{title:"V-Kawach",highlight:"Safety IDs",subtext:"Next-Gen Emergency QR Ecosystem for People & Property"},securityProducts:{title:"Advanced",highlight:"Security",subtext:"Intelligent monitoring and protection for your high-value assets"},services:{title:"Key",highlight:"Features",subtext:"V-KAWACH keeps journeys safe with advanced monitoring & alerts"},features:{title:"Security",highlight:"Features",subtext:"Advanced technology to keep you and your loved ones secure"},initiative:{title:"Social",highlight:"Initiative",subtext:"Mission Rakshak: Empowering safety for the common citizen.",p1:"At V-KAWACH (A product by Tarkshya Solution), we believe safety is a fundamental right, not a luxury. Mission Rakshak is our dedicated initiative to bring smart security to everyone.",p2:"Through subsidized programs and community awareness, we aim to protect 100,000+ lives by 2026. Join us in making India safer."}},about:{title:"About",highlight:"V-KAWACH",content:`<b>V-KAWACH</b>, a proud product of <b>Tarkshya Solution</b>, is a next-generation digital safety ecosystem driven by a core mission: to make Indian roads, communities, and daily life safer. By leveraging <b>privacy-first call masking</b> and advanced technology, we make communication during emergencies effortless, secure, and instantaneous.

Whether it is an improperly parked vehicle, a lost pet, or a critical emergency involving a loved one—V-KAWACH ensures that immediate help reaches you without ever exposing your personal information, such as your mobile number. Our intelligent system seamlessly connects you to real-world solutions while keeping your identity completely protected.

Our vision goes beyond simply offering a product; we are dedicated to building a <b>secure future</b> where communication is seamless and privacy is never compromised. Powered by continuous innovation and a <b>user-centric approach</b>, V-KAWACH is committed to ensuring round-the-clock (<b>24/7</b>) safety and peace of mind for you and your family.

• <b>Next-Gen Safety:</b> A comprehensive digital ecosystem for modern security needs.
• <b>Privacy-First Approach:</b> 100% secure call masking that hides your mobile number.
• <b>Instant Emergency Connectivity:</b> Fast, reliable, and anonymous communication when you need it the most.
• <b>24/7 Protection:</b> Uncompromised safety for you, your loved ones, and your assets.`,stats:{activeUsers:"Vision: Safe Users",scansProtected:"Scans Protected",monitoring:"Cloud Monitoring"}},footer:{tagline:"Securing your World",description:"V-KAWACH (A product by Tarkshya Solution) provides cutting-edge digital and physical security ecosystems, protecting what matters most with Indian innovation.",quickLinks:"Quick Links",aboutUs:"About Us",privacyPolicy:"Privacy Policy",termsConditions:"Terms & Conditions",contactUs:"Contact Us",rights:"All rights reserved."},smartQR:{title:"Smart QR Identity",subtitle:"Protect what matters with our advanced QR technology. Vehicles, pets, and loved ones — secured with instant connectivity and privacy.",getYourID:"Get Your Smart ID",howItWorks:"How It Works",steps:{scan:{title:"Scan",desc:"Anyone who finds your lost item or vehicle scans the QR code using any smartphone camera."},connect:{title:"Connect",desc:"They are instantly redirected to a secure page to contact the owner."},call:{title:"Call Owner",desc:"They can call you immediately. Your number stays private via our call masking technology."}},featuresTitle:"Key Features",features:["Call Masking (Privacy Protection)","Instant SMS & WhatsApp Alerts","Emergency Contact Integration","No App Required for Finder","Weatherproof & Durable Tags"],orderNow:"Order Now"},cloudMonitoring:{title:"Live Cloud Monitoring",subtitle:"Secure CCTV Backup & Anti-Theft Protection",badge:"COMING SOON",infoTitle:"Secure Your Premises with Cloud Intelligence",infoDesc:"Traditional CCTV systems are vulnerable to theft and damage. Our cloud monitoring solution ensures your footage is safe.",featuresTitle:"Features:",features:["Real-time Cloud Backup","Motion Detection Alerts","Anti-Theft Device Protection","Remote Access via Mobile"]},gpsTracking:{title:"Advanced GPS Tracking",subtitle:"Real-time Location & Fleet Management",badge:"COMING SOON",infoTitle:"Precision Tracking for Every Asset",infoDesc:"Whether it's a fleet of trucks or a personal vehicle, stay connected with real-time location data.",featuresTitle:"Features:",features:["Live Location Tracking","Geofencing Alerts","Speed Monitoring","Route Playback","Fuel Usage Analytics"]},social:{title:"Mission Rakshak",subtitle:"Our commitment to safer roads and connected communities.",storyTitle:"The Story",storyPart1:"Mission Rakshak was born from a simple realization: in an emergency, every second counts.",storyPart2:"Through Mission Rakshak, we distribute subsidized Smart QR stickers to public transport, elderly citizens, and school children.",stats:{vision:"Vision",visionDesc:"Impact 10,000+ Lives",partners:"Looking for",partnersDesc:"Partners",initiative:"Initiative",initiativeDesc:"Our Social Initiative"},formTitle:"Become a franchise partner",form:{name:"Full Name",namePlaceholder:"Enter your name",email:"Email Address",emailPlaceholder:"email@example.com",phone:"Phone Number",phonePlaceholder:"+91 00000 00000",message:"Message",messagePlaceholder:"How would you like to contribute?",submit:"Join the Mission",submitting:"Sending...",success:"Redirecting to WhatsApp..."}},auth:{login:{title:"Secure Your Ecosystem",subtitle:"Join India's most advanced vehicle and personal security network.",features:[{title:"Bank-Grade Security",desc:"256-bit encryption for all your personal data"},{title:"Fleet Safety",desc:"Real-time vehicle status and driver safety"},{title:"Instant Alerts",desc:"Emergency notifications via SMS and Call"},{title:"Cloud Backup",desc:"Never lose your critical security records"}],cardTitle:"Welcome Back",cardDesc:"Enter your credentials to access your dashboard.",email:"Email Address",emailPlaceholder:"name@company.com",password:"Password",passwordPlaceholder:"••••••••",submit:"ACCESS PORTAL",submitting:"Authenticating...",noAccount:"New to Ecosystem?",registerNow:"Register Now"},signup:{title:"Initialize Identity",subtitle:"Secure your assets and loved ones with our next-gen safety ecosystem.",cardTitle:"Create Account",cardDesc:"Join the ecosystem to manage your smart assets.",name:"Full Name",namePlaceholder:"Enter your full name",email:"Email Address",emailPlaceholder:"name@company.com",password:"Password",passwordPlaceholder:"Create a password",confirmPassword:"Confirm Password",confirmPasswordPlaceholder:"Confirm your password",submit:"REGISTER",submitting:"Creating Account...",hasAccount:"Already part of Network?",loginHere:"Login Here"}},products:{catalog:"Product Catalog",viewDetails:"VIEW DETAILS",material:"MATERIAL",warranty:"WARRANTY",off:"OFF",addedToCart:"Added to Cart!",items:{"kids-safety-bracelet":"Kid's Safety Bracelet","luggage-smart-tag":"Luggage Smart Tag","pet-id-tag":"Pet ID Tag","vehicle-safety-sticker":"Vehicle Safety Sticker"}},cart:{breadcrumb:"Home / Cart",title:"Shopping Cart",empty:{title:"Your cart is empty",desc:"It looks like you haven't added any safety IDs to your cart yet. Protect your assets today!",button:"BROWSE PRODUCTS"},items:{secureId:"SECURE IDENTITY"},summary:{title:"Order Summary",subtotal:"Subtotal",shipping:"Shipping",shippingFree:"FREE",platformFee:"Platform Fee",total:"Total",checkout:"PROCEED TO CHECKOUT",protection:"All payments are secured with bank-grade encryption. Your data is 100% private."}},checkout:{returnCart:"Return to Cart",title:"Shipping Logistics",form:{consignee:"Consignee Name",consigneePlaceholder:"Full name of receiver",contact:"Contact Email",contactPlaceholder:"email@example.com",phone:"Mobile Number",phonePlaceholder:"+91 00000 00000",address:"Shipping Address",addressPlaceholder:"House No, Building, Street, Area",city:"City / Town",cityPlaceholder:"Enter city",pincode:"Pincode / ZIP",pincodePlaceholder:"000000"},summary:{title:"Logistics Summary",subtotal:"Consolidated Total",logistics:"Shipping & Handling",complimentary:"COMPLIMENTARY",total:"Payable Amount",payment:{title:"Payment Protocol",desc:"Currently accepting Cash on Delivery (COD). Digital payment gateway integration is in progress."},submit:"INITIALIZE ORDER",submitting:"COMMITTING...",encryption:"AES-256 BIT ENCRYPTED"}},orderSuccess:{title:"Order Initialized",subtitle:"Your safety ecosystem is being prepared. We have sent a confirmation email to your registered address.",nextStepsTitle:"WHAT HAPPENS NEXT?",steps:["Quality check of your Smart QR Tags","Dispatched via our logistics partner","Delivery at your doorstep within 3-5 days"],returnHome:"BACK TO HOME",dashboard:"GO TO DASHBOARD",secure:"BANK-GRADE SECURITY",downloadInvoice:"INVOICE PDF"},dashboard:{sidebar:{orders:"My Orders",tags:"My QR Tags",profile:"Profile Settings",logout:"Logout"},welcome:{greet:"Welcome Back,",ordersDesc:"orders in your account",qrTitle:"My QR Identity",qrDesc:"Manage your smart safety assets",profileTitle:"Profile Settings",profileDesc:"Manage your identity and security"},stats:{totalOrders:"Total Orders",secureTags:"Secure Tags",pending:"Pending Orders"},topbar:{path:"Dashboard /",orders:"Orders",tags:"QR Tags",profile:"Profile"},orders:{title:"Order History",empty:"No orders found in your account.",table:{id:"Order ID",date:"Date",items:"Items",amount:"Amount",payment:"Payment",status:"Status"}},tags:{title:"My Smart Tags",empty:"You haven't activated any tags yet.",card:{code:"Tag Code:",preview:"Preview",download:"Download"}},profile:{title:"Edit Profile",name:"Full Name",phone:"Phone Number",passwordTitle:"Security",passwordDesc:"Change your account password",currentPassword:"Current Password",newPassword:"New Password",currentPlaceholder:"••••••••",newPlaceholder:"••••••••",save:"SAVE CHANGES"}},common:{loading:"LOADING...",loadFailed:"Failed to load data",profileUpdated:"Profile updated successfully",error:"Something went wrong"},publicProfile:{loading:"FETCHING IDENTITY...",invalid:{title:"Security Cluster Not Found",desc:"This QR code is either invalid or has not been activated yet."},header:{badge:"Verified Asset",assetId:"Asset ID:"},banner:"Securely managed by V-KAWACH protocol",owner:"Valued Owner",locationVerified:"Location Verified",form:{phonePlaceholder:"Enter mobile to connect...",callButton:"CALL OWNER",connecting:"CONNECTING...",emergency:"EMERGENCY — CALL 112",shareLocation:"SHARE LIVE LOCATION"},howItWorks:{title:"How it works",steps:[{label:"Scan QR"},{label:"Verify"},{label:"Connect"}]},footer:{protocol:"V-KAWACH Protocol Active",terms:"Terms",privacy:"Privacy",about:"About"}},admin:{sidebar:{masterPanel:"Master Panel",bulkManage:"Bulk Manage",logout:"Logout"},stats:{activeQRs:"Active QRs",totalScans:"Total Scans"}},legal:{back:"Back to Home",subtitle:"Official documentation and policies",loading:"FETCHING DOCUMENTATION...",fallback:"Content is being updated. Please check back later.",error:"Unable to load content. Please try again."},services:{backToHome:"Back to Home",items:{"instant-call-masking":{title:"Instant Call Masking",content:"<p>V-KAWACH's Instant Call Masking technology protects your privacy by hiding your real phone number during every call. When someone scans your QR tag and initiates a call, our system connects both parties through a secure masked number — your actual number is never revealed.</p><h2>How It Works</h2><p>Our telephony layer intercepts the call request and routes it through a virtual number. The caller sees only a masked ID, while you receive the call on your registered device. Both parties are connected seamlessly in real time.</p><h2>Key Benefits</h2><ul><li>Your real phone number stays 100% private</li><li>Works with any smartphone — no app needed for the caller</li><li>Instant connection in emergencies</li><li>Full call logs available in your dashboard</li><li>Works across India with local number support</li></ul>"},"emergency-helplines":{title:"Emergency Helplines",content:"<p>V-KAWACH integrates direct access to India's critical emergency helplines right from your QR scan page. Whether it's police, ambulance, or fire services — help is always one tap away.</p><h2>Integrated Helplines</h2><ul><li>Police — 100</li><li>Ambulance — 108</li><li>Fire — 101</li><li>National Emergency — 112</li><li>Women Helpline — 1091</li></ul><p>These helplines are embedded directly into every public-facing QR scan page, ensuring that anyone who finds your item or vehicle can immediately reach emergency services if needed.</p>"},"location-sharing":{title:"Live Location Sharing",content:"<p>V-KAWACH enables real-time GPS location sharing directly from the QR scan page. With a single tap, the finder can share their current location with you via WhatsApp — so you know exactly where your lost item or vehicle is.</p><h2>How It Works</h2><p>When someone scans your QR code, they see a 'Share Live Location' button. Tapping it opens WhatsApp pre-filled with their GPS coordinates, which are sent directly to your registered number.</p><h2>Benefits</h2><ul><li>No app installation required for the finder</li><li>Instant GPS coordinates via WhatsApp</li><li>Works on all modern smartphones</li><li>Helps recover lost vehicles, pets, and belongings faster</li></ul>"},"data-privacy":{title:"Data Privacy",content:"<p>At V-KAWACH, your personal data is protected with bank-grade security. We follow strict data minimization principles — we collect only what's necessary and never sell your data to third parties.</p><h2>Our Privacy Commitments</h2><ul><li>256-bit end-to-end encryption for all personal data</li><li>Phone numbers are never exposed — masked during every interaction</li><li>QR codes carry no personal information — they only link to a secure server</li><li>You can delete your data anytime from your dashboard</li><li>Full compliance with Indian data protection standards</li></ul>"},"family-control":{title:"Family Control",content:"<p>V-KAWACH's Family Control feature lets you manage safety profiles for every member of your household — children, elderly parents, pets, and vehicles — all from a single dashboard.</p><h2>Features</h2><ul><li>Create separate QR profiles for each family member</li><li>Set emergency contacts per profile</li><li>Receive instant alerts when any family QR is scanned</li><li>Monitor all scan activity in real time</li><li>Customize messages for each profile (lost, found, emergency)</li></ul>"},"verified-id":{title:"Verified Identity",content:"<p>Every V-KAWACH QR tag is linked to a verified digital identity. Our verification system ensures that each QR code is authentic, tamper-proof, and traceable — providing trust for both owners and finders.</p><h2>Verification Process</h2><ul><li>Mobile number verification via OTP during registration</li><li>Unique cryptographic QR code generation per user</li><li>Anti-counterfeit protection built into every tag</li><li>Real-time verification badge on every scan page</li></ul>"},"app-support":{title:"App Support",content:"<p>V-KAWACH is designed to work without requiring any app installation for the person who finds your QR tag. Everything works directly in the browser — making it universally accessible.</p><h2>Compatibility</h2><ul><li>Works on any smartphone with a camera</li><li>No app download required for finders</li><li>Full dashboard available as a Progressive Web App (PWA)</li><li>Supports Android and iOS</li><li>Optimized for low-bandwidth conditions</li></ul>"},"audio-alerts":{title:"Audio Alerts",content:"<p>V-KAWACH supports audio alert integration for connected smart devices. When your QR is scanned, you can receive real-time audio notifications on your registered devices, ensuring you never miss a critical alert.</p><h2>Alert Types</h2><ul><li>QR scan notification with location</li><li>Emergency distress signals</li><li>Incoming call alerts from masked numbers</li><li>Battery-low alerts for GPS-enabled tags</li></ul>"},"qr-security":{title:"QR Security",content:"<p>V-KAWACH's QR codes are built with multi-layer security. Each code is uniquely generated, server-verified, and tamper-evident — ensuring that your digital identity cannot be cloned or misused.</p><h2>Security Features</h2><ul><li>One-time cryptographic key per QR code</li><li>Server-side verification on every scan</li><li>Anti-clone detection system</li><li>Waterproof and scratch-resistant physical tags</li><li>Automatic deactivation of compromised codes</li></ul>"},verified:{title:"Verified Protocol",content:"<p>The V-KAWACH Verified Protocol is our end-to-end trust framework that ensures every interaction — from QR scan to owner contact — is authenticated, logged, and secure.</p><h2>Protocol Layers</h2><ul><li>Layer 1: QR Code Authenticity Check</li><li>Layer 2: Owner Identity Verification</li><li>Layer 3: Call Masking & Privacy Shield</li><li>Layer 4: Interaction Logging & Audit Trail</li><li>Layer 5: Emergency Escalation Path</li></ul>"},"instant-alerts":{title:"Instant Alerts",content:"<p>V-KAWACH sends real-time alerts the moment your QR code is scanned anywhere. Whether via SMS, WhatsApp, or in-app notification — you're always informed instantly.</p><h2>Alert Channels</h2><ul><li>SMS to your registered number</li><li>WhatsApp message with scan location</li><li>In-app push notification</li><li>Email alert with timestamp and GPS coordinates</li></ul>"},"smart-tracking":{title:"Smart Tracking",content:"<p>V-KAWACH's Smart Tracking feature provides real-time visibility of your assets. Combined with GPS-enabled tags and QR scan data, you always know where your belongings are.</p><h2>Tracking Features</h2><ul><li>Real-time GPS location on scan</li><li>Historical scan log with timestamps</li><li>Geofence alerts when assets leave a defined area</li><li>Route playback for vehicles</li></ul>"},"emergency-help":{title:"Emergency Help",content:"<p>V-KAWACH's Emergency Help system is designed to connect people in distress with the right resources instantly. Every QR scan page includes direct emergency access and owner contact options.</p><h2>Emergency Features</h2><ul><li>One-tap dial to emergency services (112)</li><li>Instant owner notification on scan</li><li>Pre-filled emergency message templates</li><li>Location sharing with emergency contacts</li></ul>"}}},categoryDetails:{initializing:"INITIALIZING SECURITY LAYER...",notFound:"Security Cluster Not Found",discoverMore:"DISCOVER MORE",relatedProducts:"Related Security Hardware",productsDesc:"Explore our specialized hardware modules for this category",viewSpecs:"VIEW SPECS",precisionSecurity:"PRECISION SECURITY",advancedProtocols:"Advanced Security Protocols",standardProtocols:"Standard V-KAWACH security protocols are active for this category.",strategicProtection:"Strategic Protection",verifiedSecurity:"Verified Security",certifiedHardware:"CERTIFIED HARDWARE",stats:{scanRate:"Success Rate",alertSpeed:"Alert Speed",encryption:"Encryption"}},productDetails:{initializing:"FETCHING HARDWARE SPECS...",notFound:"Hardware Module Not Found",badge:"SECURITY HARDWARE",encryption:"ENCRYPTION",delivery:"DELIVERY",addToCart:"ADD TO ECOSYSTEM",keyFeatures:"Key Features",description:"Description"},b2bPage:{title:"Smart Brand QR",subtitle:"Digital Transformation for your FMCG Products",content:"Transform your FMCG products (like Edible Oil, Packaging) into digital assets. With our Smart Brand QR, provide your customers instant access to FSSAI details, product brochures, and customer care information.",cta:"Contact for B2B"}},hi:{nav:{home:"होम",qrSafety:"क्यूआर सुरक्षा",cloudMonitoring:"क्लाउड मॉनिटरिंग",gpsTracking:"जीपीएस ट्रैकिंग",initiative:"पहल",b2b:"व्यापारिक समाधान",login:"लॉगिन / डैशबोर्ड"},hero:{taglineDim:"स्मार्ट सुरक्षा का",taglineHighlight:"वी-कवच सुरक्षा आईडी",subtext:"वी-कवच (V-KAWACH) एक उच्च-सुरक्षा पारिस्थितिकी तंत्र प्रदान करता है जो उन्नत क्यूआर-आधारित संचार के माध्यम से आपके वाहन, परिवार और संपत्ति की रक्षा करता है।",getStarted:"शुरू करें",watchDemo:"डेमो देखें",learnMore:"अधिक जानें"},sections:{categories:{title:"शीर्ष",highlight:"श्रेणियाँ",subtext:"अपनी सभी आवश्यकताओं के लिए सुरक्षा समाधानों की हमारी विस्तृत श्रृंखला देखें"},safetyIds:{title:"वी-कवच",highlight:"सुरक्षा आईडी",subtext:"लोगों और संपत्ति के लिए अगली पीढ़ी का आपातकालीन क्यूआर पारिस्थितिकी तंत्र"},securityProducts:{title:"उन्नत",highlight:"सुरक्षा",subtext:"आपकी उच्च-मूल्य वाली संपत्तियों के लिए बुद्धिमान निगरानी और सुरक्षा"},services:{title:"प्रमुख",highlight:"विशेषताएं",subtext:"वी-कवच उन्नत निगरानी और अलर्ट के साथ यात्रा को सुरक्षित रखता है"},features:{title:"सुरक्षा",highlight:"विशेषताएं",subtext:"आपको और आपके प्रियजनों को सुरक्षित रखने के लिए उन्नत तकनीक"},initiative:{title:"सामाजिक",highlight:"पहल",subtext:"मिशन रक्षक: सामान्य नागरिक के लिए सुरक्षा सशक्त बनाना।",p1:"वी-कवच (तार्क्ष्य समाधान का एक उत्पाद) में, हमारा मानना है कि सुरक्षा एक मौलिक अधिकार है, विलासिता नहीं। मिशन रक्षक हर किसी के लिए स्मार्ट सुरक्षा लाने की हमारी समर्पित पहल है।",p2:"रियायती कार्यक्रमों और सामुदायिक जागरूकता के माध्यम से, हमारा लक्ष्य 2026 तक 100,000+ जीवन की रक्षा करना है। भारत को सुरक्षित बनाने में हमारे साथ जुड़ें।"}},about:{title:"वी-कवच",highlight:"के बारे में",content:`<b>वी-कवच</b>, <b>तार्क्ष्य समाधान</b> का एक गौरवशाली उत्पाद, एक अगली पीढ़ी का डिजिटल सुरक्षा पारिस्थितिकी तंत्र है, जो एक मुख्य मिशन द्वारा संचालित है: भारतीय सड़कों, समुदायों और दैनिक जीवन को सुरक्षित बनाना। <b>गोपनीयता-प्रथम कॉल मास्किंग</b> और उन्नत तकनीक का लाभ उठाकर, हम आपात स्थिति के दौरान संचार को सहज, सुरक्षित और तत्काल बनाते हैं।

चाहे वह गलत तरीके से खड़ा वाहन हो, खोया हुआ पालतू जानवर हो, या किसी प्रियजन से जुड़ी महत्वपूर्ण आपात स्थिति हो—वी-कवच सुनिश्चित करता है कि आपके मोबाइल नंबर जैसे व्यक्तिगत जानकारी को उजागर किए बिना तत्काल सहायता आप तक पहुंचे। हमारा बुद्धिमान सिस्टम आपकी पहचान को पूरी तरह से सुरक्षित रखते हुए आपको वास्तविक दुनिया के समाधानों से सहजता से जोड़ता है।

हमारा विज़न केवल एक उत्पाद पेश करने से कहीं आगे है; हम एक <b>सुरक्षित भविष्य</b> के निर्माण के लिए समर्पित हैं जहाँ संचार निर्बाध हो और गोपनीयता से कभी समझौता न हो। निरंतर नवाचार और <b>उपयोगकर्ता-केंद्रित दृष्टिकोण</b> द्वारा संचालित, वी-कवच आपके और आपके परिवार के लिए चौबीसों घंटे (<b>24/7</b>) सुरक्षा और मानसिक शांति सुनिश्चित करने के लिए प्रतिबद्ध है।

• <b>नेक्स्ट-जेन सुरक्षा:</b> आधुनिक सुरक्षा आवश्यकताओं के लिए एक व्यापक डिजिटल पारिस्थितिकी तंत्र।
• <b>गोपनीयता-प्रथम दृष्टिकोण:</b> 100% सुरक्षित कॉल मास्किंग जो आपके मोबाइल नंबर को छुपाती है।
• <b>तत्काल आपातकालीन कनेक्टिविटी:</b> जब आपको इसकी सबसे अधिक आवश्यकता हो, तो तेज़, विश्वसनीय और अनाम संचार।
• <b>24/7 सुरक्षा:</b> आपके, आपके प्रियजनों और आपकी संपत्ति के लिए समझौता रहित सुरक्षा।`,stats:{activeUsers:"10k+ सुरक्षित उपयोगकर्ता",scansProtected:"100% गोपनीयता सुनिश्चित",monitoring:"24/7 आपातकालीन हेल्पलाइन"}},footer:{tagline:"आपकी दुनिया को सुरक्षित करना",description:"वी-कवच (तार्क्ष्य समाधान का एक उत्पाद) अत्याधुनिक डिजिटल और भौतिक सुरक्षा पारिस्थितिकी तंत्र प्रदान करता है, जो भारतीय नवाचार के साथ सबसे महत्वपूर्ण चीजों की रक्षा करता है।",quickLinks:"त्वरित संपर्क",aboutUs:"हमारे बारे में",privacyPolicy:"गोपनीयता नीति",termsConditions:"नियम और शर्तें",contactUs:"संपर्क करें",rights:"सर्वाधिकार सुरक्षित।"},smartQR:{title:"स्मार्ट क्यूआर पहचान",subtitle:"हमारी उन्नत क्यूआर तकनीक से सुरक्षित रहें। वाहन, पालतू जानवर और प्रियजन — तत्काल कनेक्टिविटी और गोपनीयता के साथ सुरक्षित।",getYourID:"अपनी स्मार्ट आईडी प्राप्त करें",howItWorks:"यह कैसे काम करता है",steps:{scan:{title:"स्कैन",desc:"कोई भी व्यक्ति जिसे आपका खोया हुआ सामान या वाहन मिलता है, वह किसी भी स्मार्टफोन कैमरे का उपयोग करके क्यूआर कोड स्कैन करता है।"},connect:{title:"जुड़ें",desc:"वे तुरंत मालिक से संपर्क करने के लिए एक सुरक्षित पृष्ठ पर भेज दिए जाते हैं।"},call:{title:"मालिक को कॉल करें",desc:"वे आपको तुरंत कॉल कर सकते हैं। आपका नंबर हमारी कॉल मास्किंग तकनीक के माध्यम से निजी रहता है।"}},featuresTitle:"प्रमुख विशेषताएं",features:["कॉल मास्किंग","एसएमएस और व्हाट्सएप अलर्ट","आपातकालीन संपर्क","कोई ऐप आवश्यक नहीं","टिकाऊ टैग"],orderNow:"अभी ऑर्डर करें"},cloudMonitoring:{title:"लाइव क्लाउड मॉनिटरिंग",subtitle:"सुरक्षित सीसीटीवी बैकअप",badge:"जल्द आ रहा है",infoTitle:"क्लाउड इंटेलिजेंस से सुरक्षित करें",infoDesc:"हमारा क्लाउड मॉनिटरिंग समाधान सुनिश्चित करता है कि आपका फुटेज सुरक्षित रहे।",featuresTitle:"विशेषताएं:",features:["रियल-टाइम बैकअप","मोशन डिटेक्शन","एंटी-थेफ्ट सुरक्षा","रिमोट एक्सेस"]},gpsTracking:{title:"उन्नत जीपीएस ट्रैकिंग",subtitle:"रियल-टाइम स्थान प्रबंधन",badge:"जल्द आ रहा है",infoTitle:"हर संपत्ति के लिए सटीक ट्रैकिंग",infoDesc:"रीयल-टाइम स्थान डेटा से जुड़े रहें।",featuresTitle:"विशेषताएं:",features:["लाइव ट्रैकिंग","जियोफेंसिंग","गति निगरानी","रूट प्लेबैक","ईंधन विश्लेषण"]},social:{title:"मिशन रक्षक",subtitle:"सुरक्षित सड़कों के लिए हमारी प्रतिबद्धता।",storyTitle:"कहानी",storyPart1:"मिशन रक्षक का जन्म एक साधारण अहसास से हुआ था: आपात स्थिति में, हर सेकंड मायने रखता है।",storyPart2:"हम सार्वजनिक परिवहन, बुजुर्गों और बच्चों को रियायती स्मार्ट क्यूआर स्टिकर वितरित करते हैं।",stats:{vision:"दृष्टि",visionDesc:"10,000+ जीवन प्रभावित",partners:"तलाश",partnersDesc:"पार्टनर्स",initiative:"पहल",initiativeDesc:"हमारी पहल"},formTitle:"फ्रैंचाइज़ी पार्टनर बनें",form:{name:"पूरा नाम",namePlaceholder:"अपना नाम दर्ज करें",email:"ईमेल पता",emailPlaceholder:"email@example.com",phone:"फ़ोन नंबर",phonePlaceholder:"+91 00000 00000",message:"संदेश",messagePlaceholder:"आप कैसे योगदान देना चाहेंगे?",submit:"मिशन में शामिल हों",submitting:"भेज रहा है...",success:"व्हाट्सएप पर भेज रहा है..."}},auth:{login:{title:"अपने इकोसिस्टम को सुरक्षित करें",subtitle:"भारत के सबसे उन्नत सुरक्षा नेटवर्क में शामिल हों।",features:[{title:"बैंक-ग्रेड सुरक्षा",desc:"256-बिट एन्क्रिप्शन"},{title:"बेड़े की सुरक्षा",desc:"रियल-टाइम वाहन स्थिति"},{title:"तत्काल अलर्ट",desc:"एसएमएस और कॉल अलर्ट"},{title:"क्लाउड बैकअप",desc:"सुरक्षित रिकॉर्ड"}],cardTitle:"वापसी पर स्वागत है",cardDesc:"प्रवेश के लिए अपनी साख दर्ज करें।",email:"ईमेल पता",emailPlaceholder:"name@company.com",password:"पासवर्ड",passwordPlaceholder:"••••••••",submit:"पोर्टल एक्सेस करें",submitting:"प्रमाणित किया जा रहा है...",noAccount:"इकोसिस्टम में नए हैं?",registerNow:"अभी रजिस्टर करें"},signup:{title:"पहचान प्रारंभ करें",subtitle:"अगली पीढ़ी के सुरक्षा इकोसिस्टम से जुड़ें।",cardTitle:"खाता बनाएं",cardDesc:"अपनी संपत्तियों के प्रबंधन के लिए शामिल हों।",name:"पूरा नाम",namePlaceholder:"अपना नाम दर्ज करें",email:"ईमेल पता",emailPlaceholder:"name@company.com",password:"पासवर्ड",passwordPlaceholder:"पासवर्ड बनाएं",confirmPassword:"पुष्टि करें",confirmPasswordPlaceholder:"पासवर्ड की पुष्टि करें",submit:"रजिस्टर करें",submitting:"खाता बनाया जा रहा है...",hasAccount:"पहले से सदस्य हैं?",loginHere:"यहाँ लॉगिन करें"}},products:{catalog:"उत्पाद कैटलॉग",viewDetails:"विवरण देखें",material:"सामग्री",warranty:"वारंटी",off:"छूट",addedToCart:"कार्ट में जोड़ा गया!",items:{"kids-safety-bracelet":"बच्चों का सुरक्षा ब्रेसलेट","luggage-smart-tag":"सामान का स्मार्ट टैग","pet-id-tag":"पालतू जानवर आईडी टैग","vehicle-safety-sticker":"वाहन सुरक्षा स्टिकर"}},cart:{breadcrumb:"होम / कार्ट",title:"शॉपिंग कार्ट",empty:{title:"आपकी कार्ट खाली है",desc:"ऐसा लगता है कि आपने अभी तक अपनी कार्ट में कोई सुरक्षा आईडी नहीं जोड़ी है। आज ही अपनी संपत्ति सुरक्षित करें!",button:"उत्पाद देखें"},items:{secureId:"सुरक्षित पहचान"},summary:{title:"ऑर्डर सारांश",subtotal:"उप-योग",shipping:"शिपिंग",shippingFree:"मुफ्त",platformFee:"प्लेटफॉर्म शुल्क",total:"कुल",checkout:"चेकआउट करें",protection:"सभी भुगतान बैंक-ग्रेड एन्क्रिप्शन के साथ सुरक्षित हैं। आपका डेटा 100% निजी है।"}},checkout:{returnCart:"कार्ट पर वापस जाएं",title:"शिपिंग और रसद",form:{consignee:"प्राप्तकर्ता का नाम",consigneePlaceholder:"प्राप्तकर्ता का पूरा नाम",contact:"संपर्क ईमेल",contactPlaceholder:"email@example.com",phone:"मोबाइल नंबर",phonePlaceholder:"+91 00000 00000",address:"शिपिंग का पता",addressPlaceholder:"घर नंबर, बिल्डिंग, सड़क, क्षेत्र",city:"शहर / कस्बा",cityPlaceholder:"शहर दर्ज करें",pincode:"पिनकोड",pincodePlaceholder:"000000"},summary:{title:"रसद सारांश",subtotal:"कुल राशि",logistics:"शिपिंग और हैंडलिंग",complimentary:"नि:शुल्क",total:"देय राशि",payment:{title:"भुगतान प्रोटोकॉल",desc:"वर्तमान में कैश ऑन डिलीवरी (COD) स्वीकार की जा रही है। डिजिटल भुगतान गेटवे जल्द ही शुरू होगा।"},submit:"ऑर्डर सबमिट करें",submitting:"प्रोसेस हो रहा है...",encryption:"एईएस-256 बिट एन्क्रिप्टेड"}},orderSuccess:{title:"ऑर्डर सफल",subtitle:"आपका सुरक्षा इकोसिस्टम तैयार किया जा रहा है। हमने आपके पंजीकृत ईमेल पर पुष्टि भेज दी है।",nextStepsTitle:"आगे क्या होगा?",steps:["स्मार्ट क्यूआर टैग्स की गुणवत्ता जांच","लॉजिस्टिक्स पार्टनर के माध्यम से शिपिंग","3-5 दिनों के भीतर आपके घर तक डिलीवरी"],returnHome:"होम पर वापस",dashboard:"डैशबोर्ड पर जाएं",secure:"बैंक-ग्रेड सुरक्षा",downloadInvoice:"इनवॉइस पीडीएफ"},dashboard:{sidebar:{orders:"मेरे ऑर्डर",tags:"मेरे क्यूआर टैग",profile:"प्रोफ़ाइल",logout:"लॉगआउट"},welcome:{greet:"स्वागत है,",ordersDesc:"आपके खाते में ऑर्डर",qrTitle:"मेरी क्यूआर पहचान",qrDesc:"अपनी स्मार्ट सुरक्षा संपत्तियों का प्रबंधन करें",profileTitle:"प्रोफ़ाइल सेटिंग्स",profileDesc:"अपनी पहचान और सुरक्षा का प्रबंधन करें"},stats:{totalOrders:"कुल ऑर्डर",secureTags:"सुरक्षित टैग",pending:"लंबित ऑर्डर"},topbar:{path:"डैशबोर्ड /",orders:"ऑर्डर",tags:"क्यूआर टैग",profile:"प्रोफ़ाइल"},orders:{title:"ऑर्डर इतिहास",empty:"आपके खाते में कोई ऑर्डर नहीं मिला।",table:{id:"ऑर्डर आईडी",date:"तारीख",items:"आइटम",amount:"राशि",payment:"भुगतान",status:"स्थिति"}},tags:{title:"मेरे स्मार्ट टैग",empty:"आपने अभी तक कोई टैग सक्रिय नहीं किया है।",card:{code:"टैग कोड:",preview:"पूर्वावलोकन",download:"डाउनलोड"}},profile:{title:"प्रोफ़ाइल संपादित करें",name:"पूरा नाम",phone:"फ़ोन नंबर",passwordTitle:"सुरक्षा",passwordDesc:"अपना खाता पासवर्ड बदलें",currentPassword:"वर्तमान पासवर्ड",newPassword:"नया पासवर्ड",currentPlaceholder:"••••••••",newPlaceholder:"••••••••",save:"बदलाव सहेजें"}},common:{loading:"लोड हो रहा है...",loadFailed:"डेटा लोड करने में विफल",profileUpdated:"प्रोफ़ाइल सफलतापूर्वक अपडेट की गई",error:"कुछ गलत हो गया"},publicProfile:{loading:"पहचान प्राप्त की जा रही है...",invalid:{title:"सुरक्षा क्लस्टर नहीं मिला",desc:"यह क्यूआर कोड या तो अमान्य है या अभी तक सक्रिय नहीं किया गया है।"},header:{badge:"सत्यापित संपत्ति",assetId:"संपत्ति आईडी:"},banner:"वी-कवच प्रोटोकॉल द्वारा सुरक्षित",owner:"सम्मानित मालिक",locationVerified:"स्थान सत्यापित",form:{phonePlaceholder:"जुड़ने के लिए मोबाइल दर्ज करें...",callButton:"मालिक को कॉल करें",connecting:"जुड़ रहा है...",emergency:"आपातकालीन — 112 पर कॉल करें",shareLocation:"लाइव लोकेशन साझा करें"},howItWorks:{title:"यह कैसे काम करता है",steps:[{label:"क्यूआर स्कैन करें"},{label:"सत्यापित करें"},{label:"जुड़ें"}]},footer:{protocol:"वी-कवच प्रोटोकॉल सक्रिय",terms:"नियम",privacy:"गोपनीयता",about:"परिचय"}},admin:{sidebar:{masterPanel:"मास्टर पैनल",bulkManage:"थोक प्रबंधन",logout:"लॉगआउट"},stats:{activeQRs:"सक्रिय क्यूआर",totalScans:"कुल स्कैन"}},legal:{back:"होम पर वापस",subtitle:"आधिकारिक दस्तावेज और नीतियां",loading:"दस्तावेज प्राप्त किए जा रहे हैं...",fallback:"सामग्री अपडेट की जा रही है। कृपया बाद में देखें।",error:"सामग्री लोड करने में असमर्थ। कृपया पुनः प्रयास करें।"},services:{backToHome:"होम पर वापस",items:{"instant-call-masking":{title:"तत्काल कॉल मास्किंग",content:"<p>V-KAWACH की तत्काल कॉल मास्किंग तकनीक हर कॉल के दौरान आपके असली फोन नंबर को छिपाकर आपकी गोपनीयता की रक्षा करती है। जब कोई आपका QR टैग स्कैन करके कॉल शुरू करता है, तो हमारा सिस्टम दोनों पक्षों को एक सुरक्षित मास्क्ड नंबर के माध्यम से जोड़ता है।</p><h2>मुख्य लाभ</h2><ul><li>आपका असली फोन नंबर 100% निजी रहता है</li><li>कॉलर के लिए कोई ऐप की जरूरत नहीं</li><li>आपातकाल में तत्काल कनेक्शन</li><li>डैशबोर्ड में पूरा कॉल लॉग</li></ul>"},"emergency-helplines":{title:"आपातकालीन हेल्पलाइन",content:"<p>V-KAWACH आपके QR स्कैन पेज से भारत की महत्वपूर्ण आपातकालीन हेल्पलाइन तक सीधी पहुंच एकीकृत करता है।</p><h2>एकीकृत हेल्पलाइन</h2><ul><li>पुलिस — 100</li><li>एम्बुलेंस — 108</li><li>दमकल — 101</li><li>राष्ट्रीय आपातकाल — 112</li><li>महिला हेल्पलाइन — 1091</li></ul>"},"location-sharing":{title:"लाइव लोकेशन शेयरिंग",content:"<p>V-KAWACH QR स्कैन पेज से सीधे रियल-टाइम GPS लोकेशन शेयरिंग सक्षम करता है। एक टैप से खोजकर्ता WhatsApp के माध्यम से अपनी वर्तमान लोकेशन आपके साथ शेयर कर सकता है।</p><h2>लाभ</h2><ul><li>खोजकर्ता के लिए कोई ऐप की जरूरत नहीं</li><li>WhatsApp के माध्यम से तुरंत GPS निर्देशांक</li><li>सभी आधुनिक स्मार्टफोन पर काम करता है</li></ul>"},"data-privacy":{title:"डेटा गोपनीयता",content:"<p>V-KAWACH में, आपका व्यक्तिगत डेटा बैंक-ग्रेड सुरक्षा के साथ संरक्षित है। हम केवल आवश्यक डेटा संग्रहीत करते हैं और इसे कभी तीसरे पक्ष को नहीं बेचते।</p><h2>हमारी गोपनीयता प्रतिबद्धताएं</h2><ul><li>256-बिट एन्क्रिप्शन</li><li>फोन नंबर कभी उजागर नहीं होते</li><li>QR कोड में कोई व्यक्तिगत जानकारी नहीं</li><li>डैशबोर्ड से कभी भी डेटा हटाएं</li></ul>"},"family-control":{title:"पारिवारिक नियंत्रण",content:"<p>V-KAWACH का फैमिली कंट्रोल फीचर आपको अपने परिवार के हर सदस्य — बच्चों, बुजुर्ग माता-पिता, पालतू जानवरों और वाहनों — के लिए एकल डैशबोर्ड से सुरक्षा प्रोफाइल प्रबंधित करने देता है।</p><h2>सुविधाएं</h2><ul><li>प्रत्येक परिवार सदस्य के लिए अलग QR प्रोफाइल</li><li>प्रति प्रोफाइल आपातकालीन संपर्क</li><li>किसी भी QR स्कैन पर तुरंत अलर्ट</li></ul>"},"verified-id":{title:"सत्यापित पहचान",content:"<p>हर V-KAWACH QR टैग एक सत्यापित डिजिटल पहचान से जुड़ा है। हमारी सत्यापन प्रणाली सुनिश्चित करती है कि प्रत्येक QR कोड प्रामाणिक, छेड़छाड़-रोधी और ट्रेस करने योग्य है।</p><h2>सत्यापन प्रक्रिया</h2><ul><li>OTP के माध्यम से मोबाइल नंबर सत्यापन</li><li>प्रति उपयोगकर्ता अद्वितीय QR कोड</li><li>एंटी-काउंटरफीट सुरक्षा</li></ul>"},"app-support":{title:"ऐप सपोर्ट",content:"<p>V-KAWACH बिना किसी ऐप इंस्टॉलेशन के काम करने के लिए डिज़ाइन किया गया है। सब कुछ सीधे ब्राउज़र में काम करता है।</p><h2>संगतता</h2><ul><li>कैमरे वाले किसी भी स्मार्टफोन पर काम करता है</li><li>खोजकर्ताओं के लिए कोई ऐप डाउनलोड आवश्यक नहीं</li><li>Android और iOS पर समर्थित</li></ul>"},"audio-alerts":{title:"ऑडियो अलर्ट",content:"<p>V-KAWACH कनेक्टेड स्मार्ट डिवाइस के लिए ऑडियो अलर्ट एकीकरण का समर्थन करता है। जब आपका QR स्कैन होता है, तो आप अपने पंजीकृत डिवाइस पर रियल-टाइम ऑडियो सूचनाएं प्राप्त कर सकते हैं।</p><h2>अलर्ट प्रकार</h2><ul><li>लोकेशन के साथ QR स्कैन सूचना</li><li>आपातकालीन संकट संकेत</li><li>मास्क्ड नंबर से इनकमिंग कॉल अलर्ट</li></ul>"},"qr-security":{title:"क्यूआर सुरक्षा",content:"<p>V-KAWACH के QR कोड बहु-परत सुरक्षा के साथ बनाए गए हैं। प्रत्येक कोड अद्वितीय रूप से उत्पन्न, सर्वर-सत्यापित और छेड़छाड़-स्पष्ट है।</p><h2>सुरक्षा सुविधाएं</h2><ul><li>प्रति QR कोड वन-टाइम क्रिप्टोग्राफिक की</li><li>प्रत्येक स्कैन पर सर्वर-साइड सत्यापन</li><li>एंटी-क्लोन डिटेक्शन सिस्टम</li><li>वाटरप्रूफ और स्क्रैच-प्रतिरोधी भौतिक टैग</li></ul>"},verified:{title:"सत्यापित प्रोटोकॉल",content:"<p>V-KAWACH सत्यापित प्रोटोकॉल हमारा एंड-टू-एंड ट्रस्ट फ्रेमवर्क है जो सुनिश्चित करता है कि QR स्कैन से लेकर मालिक संपर्क तक हर इंटरैक्शन प्रमाणित और सुरक्षित हो।</p><h2>प्रोटोकॉल परतें</h2><ul><li>परत 1: QR कोड प्रामाणिकता जांच</li><li>परत 2: मालिक पहचान सत्यापन</li><li>परत 3: कॉल मास्किंग और गोपनीयता शील्ड</li><li>परत 4: इंटरैक्शन लॉगिंग</li><li>परत 5: आपातकालीन एस्केलेशन</li></ul>"},"instant-alerts":{title:"तत्काल अलर्ट",content:"<p>V-KAWACH आपके QR कोड के स्कैन होते ही रियल-टाइम अलर्ट भेजता है।</p><h2>अलर्ट चैनल</h2><ul><li>आपके पंजीकृत नंबर पर SMS</li><li>स्कैन लोकेशन के साथ WhatsApp संदेश</li><li>इन-ऐप पुश नोटिफिकेशन</li><li>टाइमस्टैम्प के साथ ईमेल अलर्ट</li></ul>"},"smart-tracking":{title:"स्मार्ट ट्रैकिंग",content:"<p>V-KAWACH की स्मार्ट ट्रैकिंग सुविधा आपकी संपत्तियों की रियल-टाइम दृश्यता प्रदान करती है।</p><h2>ट्रैकिंग सुविधाएं</h2><ul><li>स्कैन पर रियल-टाइम GPS लोकेशन</li><li>टाइमस्टैम्प के साथ ऐतिहासिक स्कैन लॉग</li><li>जियोफेंस अलर्ट</li><li>वाहनों के लिए रूट प्लेबैक</li></ul>"},"emergency-help":{title:"आपातकालीन सहायता",content:"<p>V-KAWACH की आपातकालीन सहायता प्रणाली संकट में लोगों को तुरंत सही संसाधनों से जोड़ने के लिए डिज़ाइन की गई है।</p><h2>आपातकालीन सुविधाएं</h2><ul><li>आपातकालीन सेवाओं (112) पर वन-टैप डायल</li><li>स्कैन पर तुरंत मालिक सूचना</li><li>प्री-फिल्ड आपातकालीन संदेश टेम्पलेट</li></ul>"}}},categoryDetails:{initializing:"सुरक्षा परत शुरू की जा रही है...",notFound:"सुरक्षा क्लस्टर नहीं मिला",discoverMore:"अधिक जानें",relatedProducts:"संबंधित सुरक्षा हार्डवेयर",productsDesc:"इस श्रेणी के लिए हमारे विशेष हार्डवेयर मॉड्यूल देखें",viewSpecs:"विवरण देखें",precisionSecurity:"सटीक सुरक्षा",advancedProtocols:"उन्नत सुरक्षा प्रोटोकॉल",standardProtocols:"इस श्रेणी के लिए मानक वी-कवच सुरक्षा प्रोटोकॉल सक्रिय हैं।",strategicProtection:"रणनीतिक सुरक्षा",verifiedSecurity:"सत्यापित सुरक्षा",certifiedHardware:"प्रमाणित हार्डवेयर",stats:{scanRate:"सफलता दर",alertSpeed:"अलर्ट स्पीड",encryption:"एन्क्रिप्शन"}},productDetails:{initializing:"हार्डवेयर विवरण प्राप्त किया जा रहा है...",notFound:"हार्डवेयर मॉड्यूल नहीं मिला",badge:"सुरक्षा हार्डवेयर",encryption:"एन्क्रिप्शन",delivery:"डिलीवरी",addToCart:"कार्ट में जोड़ें",keyFeatures:"प्रमुख विशेषताएं",description:"विवरण"},b2bPage:{title:"Smart Brand QR",subtitle:"आपके FMCG उत्पादों के लिए डिजिटल परिवर्तन",content:"Smart Brand QR: अपने FMCG उत्पादों (जैसे एडिबल ऑयल, पैकेजिंग) को डिजिटल बनाएं। हमारे स्मार्ट QR के साथ ग्राहकों को तुरंत FSSAI डिटेल्स, प्रोडक्ट ब्रोशर और कस्टमर केयर की जानकारी दिखाएं।",cta:"B2B के लिए संपर्क करें"}}},yj=j.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;
  transition: all 0.3s ease;
  padding: 12px 0;
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`,bj=j.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,vj=j(qe)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0b1a33;
  font-family: ${({theme:i})=>i.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  svg {
    color: ${({theme:i})=>i.colors.gold};
  }
`,jj=j.nav`
  display: none;

  @media (min-width: ${({theme:i})=>i.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`,Am=j(qe)`
  color: #333333;
  font-family: ${({theme:i})=>i.fonts.body};
  font-size: 0.9rem;
  font-weight: 700;
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover, &.active {
    color: ${({theme:i})=>i.colors.gold};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({theme:i})=>i.colors.gold};
    transition: width 0.3s ease;
  }

  &:hover::after, &.active::after {
    width: 100%;
  }
`,Sj=j.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: ${({theme:i})=>i.colors.navy};
  box-shadow: -5px 0 15px rgba(0,0,0,0.5);
  transform: translateX(${({$isOpen:i})=>i?"0":"100%"});
  transition: transform 0.3s ease;
  z-index: 1001;
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${({theme:i})=>i.breakpoints.tablet}) {
    display: none;
  }
`,wj=j.button`
  background: none;
  border: none;
  color: #0b1a33;
  cursor: pointer;
  z-index: 1002;

  @media (min-width: ${({theme:i})=>i.breakpoints.tablet}) {
    display: none;
  }
`,Cj=j(qe)`
  position: relative;
  color: ${({theme:i})=>i.colors.navy};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover { 
    transform: scale(1.15);
  }
  
  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${({theme:i})=>i.colors.gold};
    color: white;
    font-size: 10px;
    font-weight: 900;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`,zm=j.button`
  background: #f8f9fa;
  border: 1px solid #eee;
  color: #333;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #eee;
    border-color: ${({theme:i})=>i.colors.gold};
    color: ${({theme:i})=>i.colors.gold};
  }
`,qd=()=>{const[i,r]=w.useState(!1),[u,c]=w.useState(!1),f=$a(),{cartCount:p}=nr(),{language:h,setLanguage:v}=rt();f.pathname,w.useEffect(()=>{const b=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]);const y=_e[h].nav,x=[{name:y.home,path:"/"},{name:y.qrSafety,path:"/smart-qr"},{name:y.b2b,path:"/b2b-solutions"},{name:y.cloudMonitoring,path:"/cloud-monitoring"},{name:y.initiative,path:"/social-initiative"}];return l.jsx(yj,{children:l.jsxs(bj,{children:[l.jsxs(vj,{to:"/",children:[l.jsx("img",{src:Kg,alt:"V-KAWACH Logo",onError:b=>{b.target.style.display="none",b.target.nextSibling.style.display="block"},style:{height:"55px",objectFit:"contain",borderRadius:"4px"}}),l.jsx(gt,{size:32,style:{display:"none"}}),l.jsx("div",{children:l.jsx("div",{style:{lineHeight:"1",letterSpacing:"0.04em",fontSize:"1.8rem",fontWeight:800,whiteSpace:"nowrap"},children:"V-KAWACH"})})]}),l.jsxs(jj,{children:[x.map(b=>l.jsx(Am,{to:b.path,className:f.pathname===b.path?"active":"",children:b.name},b.path)),l.jsxs(Cj,{to:"/cart",children:[l.jsx(Gi,{size:24}),p>0&&l.jsx("span",{children:p})]}),l.jsxs(zm,{onClick:()=>v(h==="en"?"hi":"en"),children:[l.jsx(wm,{size:16}),h==="en"?"HI":"EN"]}),l.jsx(Qe,{as:qe,to:"/dashboard",variant:"primary",children:y.login})]}),l.jsx(wj,{onClick:()=>c(!u),children:u?l.jsx(Gg,{size:28}):l.jsx(A5,{size:28})}),l.jsxs(Sj,{$isOpen:u,children:[x.map(b=>l.jsx(Am,{to:b.path,onClick:()=>c(!1),children:b.name},b.path)),l.jsxs(zm,{onClick:()=>v(h==="en"?"hi":"en"),style:{width:"fit-content"},children:[l.jsx(wm,{size:16}),h==="en"?"Hindi (हिन्दी)":"English"]}),l.jsx(Qe,{as:qe,to:"/dashboard",onClick:()=>c(!1),variant:"primary",style:{width:"100%"},children:y.login})]})]})})},Aj=j.footer`
  background-color: ${({theme:i})=>i.colors.navy};
  color: ${({theme:i})=>i.colors.white};
  padding: 80px 0 30px;
  border-top: 1px solid rgba(255,255,255,0.1);
`,zj=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: ${({theme:i})=>i.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`,Yu=j.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ej=j.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({theme:i})=>i.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;

  svg {
    color: ${({theme:i})=>i.colors.gold};
  }
`,kj=j.p`
  opacity: 0.7;
  max-width: 350px;
  font-size: 0.95rem;
`,Em=j.h4`
  color: ${({theme:i})=>i.colors.gold};
  font-size: 1.1rem;
  margin-bottom: 10px;
`,Tj=j.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Co=j(qe)`
  opacity: 0.7;
  font-size: 0.95rem;
  
  &:hover {
    opacity: 1;
    color: ${({theme:i})=>i.colors.gold};
    padding-left: 5px;
  }
  transition: all 0.3s ease;
`,Gu=j.div`
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0.7;
  font-size: 0.95rem;

  svg {
    color: ${({theme:i})=>i.colors.gold};
    min-width: 18px;
  }
`,Nj=j.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({theme:i})=>i.colors.gold};
      color: ${({theme:i})=>i.colors.navy};
      border-color: ${({theme:i})=>i.colors.gold};
    }
  }
`,_j=j.div`
  text-align: center;
  padding-top: 40px;
  margin-top: 60px;
  border-top: 1px solid rgba(255,255,255,0.1);
  opacity: 0.5;
  font-size: 0.85rem;
`,Rj=()=>l.jsxs(Aj,{children:[l.jsxs(zj,{children:[l.jsxs(Yu,{children:[l.jsxs(Ej,{children:[l.jsx("img",{src:Kg,alt:"V-KAWACH Logo",style:{height:"32px",objectFit:"contain",borderRadius:"4px"}}),l.jsxs("div",{children:[l.jsx("div",{style:{lineHeight:"1"},children:"V-KAWACH"}),l.jsx("div",{style:{fontSize:"0.6rem",fontWeight:400,opacity:.8,marginTop:"2px",letterSpacing:"0.05em",fontFamily:"sans-serif",textTransform:"uppercase"},children:"Securing your World"})]})]}),l.jsx(kj,{children:"V-KAWACH provides cutting-edge digital and physical security ecosystems, protecting what matters most with Indian innovation."}),l.jsxs(Nj,{children:[l.jsx("a",{href:"#",children:l.jsx(g5,{size:20})}),l.jsx("a",{href:"#",children:l.jsx(rj,{size:20})}),l.jsx("a",{href:"#",children:l.jsx(f5,{size:20})})]})]}),l.jsxs(Yu,{children:[l.jsx(Em,{children:"Quick Links"}),l.jsxs(Tj,{children:[l.jsx("li",{children:l.jsx(Co,{to:"/",children:"Home"})},"home"),l.jsx("li",{children:l.jsx(Co,{to:"/smart-qr",children:"Smart QR Safety"})},"smart-qr"),l.jsx("li",{children:l.jsx(Co,{to:"/cloud-monitoring",children:"Cloud Monitoring"})},"cloud"),l.jsx("li",{children:l.jsx(Co,{to:"/social-initiative",children:"Mission Rakshak"})},"social")]})]}),l.jsxs(Yu,{children:[l.jsx(Em,{children:"Contact Us"}),l.jsxs(Gu,{children:[l.jsx(Ud,{size:18}),l.jsx("span",{children:"Chandausi, Uttar Pradesh - 244412"})]}),l.jsxs(Gu,{children:[l.jsx(Bd,{size:18}),l.jsx("span",{children:"contact@tarkshya.com"})]}),l.jsxs(Gu,{children:[l.jsx(yd,{size:18}),l.jsx("span",{children:"+91 88813 84777"})]})]})]}),l.jsxs(_j,{children:["© ",new Date().getFullYear()," V-KAWACH. All rights reserved."]})]}),Mj=j.main`
  min-height: 100vh;
  padding-top: 0; // Header is overlay for hero effects
`,Dj=()=>l.jsxs(l.Fragment,{children:[l.jsx(qd,{}),l.jsx(Mj,{children:l.jsx(Ob,{})}),l.jsx(Rj,{})]}),Oj=j.section`
  padding: ${({theme:i})=>i.spacing.xxl} 0;
  background-color: ${({$bg:i,theme:r})=>i==="light"?r.colors.background:i==="white"?r.colors.white:i||r.colors.white};
`,Hj=j.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
`,Je=({children:i,bg:r="white",className:u})=>l.jsx(Oj,{$bg:r,className:u,children:l.jsx(Hj,{children:i})});let Bj={data:""},Uj=i=>{if(typeof window=="object"){let r=(i?i.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return r.nonce=window.__nonce__,r.parentNode||(i||document.head).appendChild(r),r.firstChild}return i||Bj},Lj=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,$j=/\/\*[^]*?\*\/|  +/g,km=/\n+/g,hn=(i,r)=>{let u="",c="",f="";for(let p in i){let h=i[p];p[0]=="@"?p[1]=="i"?u=p+" "+h+";":c+=p[1]=="f"?hn(h,p):p+"{"+hn(h,p[1]=="k"?"":r)+"}":typeof h=="object"?c+=hn(h,r?r.replace(/([^,])+/g,v=>p.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,y=>/&/.test(y)?y.replace(/&/g,v):v?v+" "+y:y)):p):h!=null&&(p=/^--/.test(p)?p:p.replace(/[A-Z]/g,"-$&").toLowerCase(),f+=hn.p?hn.p(p,h):p+":"+h+";")}return u+(r&&f?r+"{"+f+"}":f)+c},Ra={},Zg=i=>{if(typeof i=="object"){let r="";for(let u in i)r+=u+Zg(i[u]);return r}return i},qj=(i,r,u,c,f)=>{let p=Zg(i),h=Ra[p]||(Ra[p]=(y=>{let x=0,b=11;for(;x<y.length;)b=101*b+y.charCodeAt(x++)>>>0;return"go"+b})(p));if(!Ra[h]){let y=p!==i?i:(x=>{let b,g,z=[{}];for(;b=Lj.exec(x.replace($j,""));)b[4]?z.shift():b[3]?(g=b[3].replace(km," ").trim(),z.unshift(z[0][g]=z[0][g]||{})):z[0][b[1]]=b[2].replace(km," ").trim();return z[0]})(i);Ra[h]=hn(f?{["@keyframes "+h]:y}:y,u?"":"."+h)}let v=u&&Ra.g?Ra.g:null;return u&&(Ra.g=Ra[h]),((y,x,b,g)=>{g?x.data=x.data.replace(g,y):x.data.indexOf(y)===-1&&(x.data=b?y+x.data:x.data+y)})(Ra[h],r,c,v),h},Yj=(i,r,u)=>i.reduce((c,f,p)=>{let h=r[p];if(h&&h.call){let v=h(u),y=v&&v.props&&v.props.className||/^go/.test(v)&&v;h=y?"."+y:v&&typeof v=="object"?v.props?"":hn(v,""):v===!1?"":v}return c+f+(h??"")},"");function us(i){let r=this||{},u=i.call?i(r.p):i;return qj(u.unshift?u.raw?Yj(u,[].slice.call(arguments,1),r.p):u.reduce((c,f)=>Object.assign(c,f&&f.call?f(r.p):f),{}):u,Uj(r.target),r.g,r.o,r.k)}let Wg,bd,vd;us.bind({g:1});let La=us.bind({k:1});function Gj(i,r,u,c){hn.p=r,Wg=i,bd=u,vd=c}function bn(i,r){let u=this||{};return function(){let c=arguments;function f(p,h){let v=Object.assign({},p),y=v.className||f.className;u.p=Object.assign({theme:bd&&bd()},v),u.o=/ *go\d+/.test(y),v.className=us.apply(u,c)+(y?" "+y:"");let x=i;return i[0]&&(x=v.as||i,delete v.as),vd&&x[0]&&vd(v),Wg(x,v)}return f}}var Qj=i=>typeof i=="function",jd=(i,r)=>Qj(i)?i(r):i,Vj=(()=>{let i=0;return()=>(++i).toString()})(),Xj=(()=>{let i;return()=>{if(i===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");i=!r||r.matches}return i}})(),Kj=20,Jg="default",Fg=(i,r)=>{let{toastLimit:u}=i.settings;switch(r.type){case 0:return{...i,toasts:[r.toast,...i.toasts].slice(0,u)};case 1:return{...i,toasts:i.toasts.map(h=>h.id===r.toast.id?{...h,...r.toast}:h)};case 2:let{toast:c}=r;return Fg(i,{type:i.toasts.find(h=>h.id===c.id)?1:0,toast:c});case 3:let{toastId:f}=r;return{...i,toasts:i.toasts.map(h=>h.id===f||f===void 0?{...h,dismissed:!0,visible:!1}:h)};case 4:return r.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(h=>h.id!==r.toastId)};case 5:return{...i,pausedAt:r.time};case 6:let p=r.time-(i.pausedAt||0);return{...i,pausedAt:void 0,toasts:i.toasts.map(h=>({...h,pauseDuration:h.pauseDuration+p}))}}},Zj=[],Wj={toasts:[],pausedAt:void 0,settings:{toastLimit:Kj}},Di={},Ig=(i,r=Jg)=>{Di[r]=Fg(Di[r]||Wj,i),Zj.forEach(([u,c])=>{u===r&&c(Di[r])})},Pg=i=>Object.keys(Di).forEach(r=>Ig(i,r)),Jj=i=>Object.keys(Di).find(r=>Di[r].toasts.some(u=>u.id===i)),Yd=(i=Jg)=>r=>{Ig(r,i)},Fj=(i,r="blank",u)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:i,pauseDuration:0,...u,id:u?.id||Vj()}),ir=i=>(r,u)=>{let c=Fj(r,i,u);return Yd(c.toasterId||Jj(c.id))({type:2,toast:c}),c.id},mt=(i,r)=>ir("blank")(i,r);mt.error=ir("error");mt.success=ir("success");mt.loading=ir("loading");mt.custom=ir("custom");mt.dismiss=(i,r)=>{let u={type:3,toastId:i};r?Yd(r)(u):Pg(u)};mt.dismissAll=i=>mt.dismiss(void 0,i);mt.remove=(i,r)=>{let u={type:4,toastId:i};r?Yd(r)(u):Pg(u)};mt.removeAll=i=>mt.remove(void 0,i);mt.promise=(i,r,u)=>{let c=mt.loading(r.loading,{...u,...u?.loading});return typeof i=="function"&&(i=i()),i.then(f=>{let p=r.success?jd(r.success,f):void 0;return p?mt.success(p,{id:c,...u,...u?.success}):mt.dismiss(c),f}).catch(f=>{let p=r.error?jd(r.error,f):void 0;p?mt.error(p,{id:c,...u,...u?.error}):mt.dismiss(c)}),i};var Ij=La`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Pj=La`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,e3=La`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,t3=bn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ij} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Pj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${i=>i.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${e3} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,a3=La`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,n3=bn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${i=>i.secondary||"#e0e0e0"};
  border-right-color: ${i=>i.primary||"#616161"};
  animation: ${a3} 1s linear infinite;
`,i3=La`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,l3=La`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,r3=bn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${i3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${l3} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${i=>i.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,o3=bn("div")`
  position: absolute;
`,s3=bn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,c3=La`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,u3=bn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${c3} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,d3=({toast:i})=>{let{icon:r,type:u,iconTheme:c}=i;return r!==void 0?typeof r=="string"?w.createElement(u3,null,r):r:u==="blank"?null:w.createElement(s3,null,w.createElement(n3,{...c}),u!=="loading"&&w.createElement(o3,null,u==="error"?w.createElement(t3,{...c}):w.createElement(r3,{...c})))},f3=i=>`
0% {transform: translate3d(0,${i*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,p3=i=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${i*-150}%,-1px) scale(.6); opacity:0;}
`,h3="0%{opacity:0;} 100%{opacity:1;}",m3="0%{opacity:1;} 100%{opacity:0;}",g3=bn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,x3=bn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,y3=(i,r)=>{let u=i.includes("top")?1:-1,[c,f]=Xj()?[h3,m3]:[f3(u),p3(u)];return{animation:r?`${La(c)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${La(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};w.memo(({toast:i,position:r,style:u,children:c})=>{let f=i.height?y3(i.position||r||"top-center",i.visible):{opacity:0},p=w.createElement(d3,{toast:i}),h=w.createElement(x3,{...i.ariaProps},jd(i.message,i));return w.createElement(g3,{className:i.className,style:{...f,...u,...i.style}},typeof c=="function"?c({icon:p,message:h}):w.createElement(w.Fragment,null,p,h))});Gj(w.createElement);us`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var xt=mt;const Ao=window.location.hostname==="localhost"?"http://localhost:5001/api":"/api",Fe={get:async i=>{const r=localStorage.getItem("admin_token"),u=await fetch(`${Ao}${i}`,{headers:{Authorization:r?`Bearer ${r}`:"","Content-Type":"application/json"}}),c=await u.json();if(!u.ok)throw{response:{data:c}};return{data:c}},post:async(i,r)=>{const u=localStorage.getItem("admin_token"),c=r instanceof FormData,f=await fetch(`${Ao}${i}`,{method:"POST",headers:{Authorization:u?`Bearer ${u}`:"",...c?{}:{"Content-Type":"application/json"}},body:c?r:JSON.stringify(r)}),p=await f.json();if(!f.ok)throw{response:{data:p}};return{data:p}},put:async(i,r)=>{const u=localStorage.getItem("admin_token"),c=r instanceof FormData,f=await fetch(`${Ao}${i}`,{method:"PUT",headers:{Authorization:u?`Bearer ${u}`:"",...c?{}:{"Content-Type":"application/json"}},body:c?r:JSON.stringify(r)}),p=await f.json();if(!f.ok)throw{response:{data:p}};return{data:p}},delete:async i=>{const r=localStorage.getItem("admin_token"),u=await fetch(`${Ao}${i}`,{method:"DELETE",headers:{Authorization:r?`Bearer ${r}`:"","Content-Type":"application/json"}}),c=await u.json();if(!u.ok)throw{response:{data:c}};return{data:c}}};bt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;const b3=j.section`
  min-height: 65vh;
  background-color: #0b1a33;
  background-image: 
    radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
  background-size: 40px 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 40px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`,v3=j.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: 1024px) {
    grid-template-columns: 1.4fr 0.6fr;
  }
`,j3=j.h1`
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 25px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  
  .dim {
    display: block;
    color: white;
    font-size: 2.4rem;
  }

  .highlight {
    color: #C9A84C;
    display: block;
    font-size: 4rem;
    margin-top: 5px;
    line-height: 1.1;
  }

  @media (min-width: 1024px) {
    font-size: 3.2rem;
    .dim {
      font-size: 3.2rem;
    }
    .highlight {
      font-size: 5.2rem;
    }
  }
`,S3=j.p`
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 30px;
  max-width: 650px;
  line-height: 1.6;
`,w3=j.div`
  position: relative;
  max-width: 70%;
  margin: 0 auto;
  @media (min-width: 1024px) { margin: 0 0 0 auto; }
  img {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 50px 100px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
  }
`,Qu=j(qe)`
  background: ${i=>i.variant==="outline"?"transparent":"linear-gradient(135deg, #C9A84C 0%, #b48a2d 100%)"};
  color: ${i=>i.variant==="outline"?"white":"#0b1a33"};
  border: ${i=>i.variant==="outline"?"2px solid white":"none"};
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${i=>i.variant==="outline"?"none":"0 10px 20px rgba(201, 168, 76, 0.2)"};
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    background-color: ${i=>i.variant==="outline"?"white":"#B08D35"};
    color: #0b1a33;
  }
`,zo=j.div`
  text-align: center;
  margin-bottom: 60px;
  h2 {
    font-size: 2.5rem;
    color: #0b1a33;
    font-weight: 800;
    text-transform: uppercase;
    span { color: #C9A84C; }
  }
  p { color: #666; margin-top: 10px; font-size: 1.1rem; }
  .line {
    width: 80px;
    height: 4px;
    background: #C9A84C;
    margin: 20px auto;
  }
  }
`;j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto 50px;
  padding: 0 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;j.div`
  background: white;
  padding: 40px 30px;
  border-radius: 30px;
  border: 1px solid #eee;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 5px;
    background: #C9A84C;
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: #C9A84C;
    box-shadow: 0 20px 40px rgba(11, 26, 51, 0.1);
    &::before { transform: scaleX(1); }
    .icon-box { background: #0b1a33; color: #C9A84C; }
  }
  
  .icon-box {
    width: 80px;
    height: 80px;
    background: #f8f9fa;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    color: #0b1a33;
    transition: all 0.4s ease;
  }
  
  h3 { font-size: 1.2rem; color: #0b1a33; margin-bottom: 10px; font-weight: 800; }
  p { color: #666; font-size: 0.9rem; margin-bottom: 0; }
`;const Tm=j.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 50px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;j.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: #0b1a33;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: #0b1a33;
    color: white;
    box-shadow: 0 6px 166px rgba(0,0,0,0.2);
  }
  
  &.left { left: 0; }
  &.right { right: 0; }

  @media (max-width: 768px) {
    display: none;
  }
`;const C3=j.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 10px 0 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,A3=j(qe)`
  background: white;
  border: 1px solid rgba(0,0,0,0.06);
  padding: 35px 20px;
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.04);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(11, 26, 51, 0.12);
    border-color: #C9A84C;
    
    .icon-box {
      background: #0b1a33;
      color: #C9A84C;
      transform: scale(1.08);
    }
    h3 { color: #C9A84C; }
  }

  .icon-box {
    width: 72px;
    height: 72px;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f4f8;
    border-radius: 18px;
    color: #0b1a33;
    transition: all 0.4s ease;

    svg {
      width: 34px;
      height: 34px;
      stroke-width: 1.5px;
    }
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 800;
    text-transform: uppercase;
    color: #0b1a33;
    letter-spacing: 1px;
    margin: 0;
    transition: color 0.3s;
  }
`,z3=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
`,E3=j.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: all 0.4s ease;
  position: relative;
  &:hover {
    transform: translateY(-12px);
    border-color: #C9A84C;
    box-shadow: 0 30px 60px rgba(11, 26, 51, 0.1);
  }
  .badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #0b1a33;
    color: #C9A84C;
    padding: 6px 12px;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    z-index: 2;
  }
  .img-box {
    height: 250px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img { max-width: 80%; max-height: 80%; object-fit: contain; }
  }
  .content {
    padding: 25px;
    h3 { font-size: 1.25rem; font-weight: 800; color: #0b1a33; margin-bottom: 8px; }
    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 20px;
      span {
        font-size: 0.7rem;
        background: #f0f2f5;
        color: #0b1a33;
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: 600;
        text-align: center;
      }
    }
    .price-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        font-size: 1.4rem;
        font-weight: 900;
        color: #0b1a33;
        span { font-size: 0.9rem; color: #999; text-decoration: line-through; margin-left: 5px; }
      }
      .discount { color: #2ecc71; font-weight: 700; font-size: 0.85rem; }
    }
  }
  .footer {
    padding: 0 25px 25px;
    display: flex;
    gap: 10px;
    button { flex: 1; }
  }
`,k3=j.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`,T3=j.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  padding: 0 20px;
`,Nm=j.button`
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid ${i=>i.active?"#C9A84C":"#e2e8f0"};
  background: ${i=>i.active?"#C9A84C":"white"};
  color: ${i=>i.active?"#0b1a33":"#64748b"};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    border-color: #C9A84C;
    color: #C9A84C;
  }
  
  ${i=>i.active&&`
    &:hover {
      color: #0b1a33;
    }
  `}
`,N3=j.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 10px 0 30px;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,$l=j(qe)`
  background: #ffffff;
  border-radius: 24px;
  padding: 35px 20px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(11, 26, 51, 0.1);
    border-color: #C9A84C;

    .icon-wrapper {
      background: #0b1a33;
      color: #C9A84C;
      transform: scale(1.1);
    }
  }

  .icon-wrapper {
    width: 70px;
    height: 70px;
    background: #f8fafc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: #0b1a33;
    transition: all 0.3s ease;
    
    svg {
      width: 32px;
      height: 32px;
      stroke-width: 1.5px;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 800;
    color: #0b1a33;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`,_3=j.div`
  background: #0b1a33;
  color: #C9A84C;
  text-align: center;
  padding: 14px 20px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg { width: 18px; height: 18px; flex-shrink: 0; }
`,R3=j.div`
  background: #f8fafc;
  padding: 80px 20px;

  .section-header {
    max-width: 1400px;
    margin: 0 auto 60px;

    .quote-icon { color: #C9A84C; margin-bottom: 15px; }

    h2 {
      font-size: 2.8rem;
      font-weight: 900;
      color: #0b1a33;
      line-height: 1.2;
      margin: 0;
      span { display: block; }
    }
  }

  .carousel-wrapper {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 40px 1fr 40px;
      gap: 10px;
    }
  }

  .nav-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #C9A84C;
    background: white;
    color: #0b1a33;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
    &:hover { background: #0b1a33; color: #C9A84C; border-color: #0b1a33; }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    @media (max-width: 1024px) { grid-template-columns: 1fr; }
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 40px;
    span {
      width: 10px; height: 10px;
      border-radius: 50%;
      background: #ddd;
      cursor: pointer;
      transition: all 0.3s;
      &.active { background: #C9A84C; width: 28px; border-radius: 5px; }
    }
  }
`,M3=j.div`
  background: white;
  border-radius: 28px;
  padding: 40px 30px;
  border: 1px solid rgba(0,0,0,0.04);
  box-shadow: 0 15px 45px rgba(0,0,0,0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &.featured {
    border: 2px solid #C9A84C;
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 30px 60px rgba(11,26,51,0.15);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 40px 80px rgba(0,0,0,0.12);
  }

  .quote { color: #C9A84C; margin-bottom: 25px; }

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 30px;
    font-style: italic;
    
    strong {
      color: #0b1a33;
      font-weight: 800;
      font-style: normal;
      background: linear-gradient(120deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.1) 100%);
      padding: 0 4px;
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 16px;
    border-top: 1px solid rgba(0,0,0,0.05);
    padding-top: 20px;

    img.avatar {
      width: 56px; 
      height: 56px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid white;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .info {
      .name { font-weight: 800; color: #0b1a33; font-size: 1.1rem; }
      .loc { font-size: 0.85rem; color: #64748b; font-weight: 600; }
    }
  }
`,D3=j.div`
  background: white;
  padding: 80px 20px;

  .faq-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .faq-header {
    text-align: center;
    margin-bottom: 60px;

    h2 {
      font-size: 2.8rem;
      font-weight: 900;
      color: #0b1a33;
      margin-bottom: 10px;
      span {
        display: block;
        width: 60px;
        height: 4px;
        background: #C9A84C;
        margin: 12px auto 0;
        border-radius: 2px;
      }
    }
    p { color: #888; font-size: 1rem; }
  }
`,O3=j.div`
  border: 1px solid #e8ecf0;
  border-radius: 20px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;

  ${i=>i.open&&`
    border-color: #C9A84C; 
    box-shadow: 0 10px 30px rgba(201,168,76,0.12);
  `}

  .faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 30px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover { background: #fffbf0; }

    span {
      font-weight: 700;
      font-size: 1.1rem;
      color: #0b1a33;
      padding-right: 20px;
    }

    svg {
      transition: transform 0.4s;
      transform: rotate(${i=>i.open?"180deg":"0deg"});
      color: #C9A84C;
      flex-shrink: 0;
    }
  }

  .faq-a {
    padding: 0 30px 30px;
    color: #475569;
    line-height: 1.7;
    font-size: 1rem;
    display: ${i=>i.open?"block":"none"};
    border-top: 1px solid rgba(0,0,0,0.02);
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;j.div`
  padding: 80px 20px;
  text-align: center;
  background: white;
  
  h2 {
    font-size: 2rem;
    color: #0b1a33;
    font-weight: 800;
    margin-bottom: 10px;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    
    &::after {
      display: none;
    }
  }
  
  .subtitle {
    color: #666;
    margin-bottom: 50px;
    font-size: 1.1rem;
  }
  
  .badges {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: 0 auto;
    
    .badge-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      transition: transform 0.3s ease;
      &:hover { transform: scale(1.1); }
      
      img {
        height: 80px;
        width: auto;
        filter: grayscale(0.2);
        &:hover { filter: grayscale(0); }
      }
      
      .circle-r {
        width: 60px;
        height: 60px;
        border: 2px solid #333;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 800;
        color: #333;
      }
    }
  }
`;const H3=j.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px repeat(3, 1fr);
  background: #0b1a33;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  border: 1px solid rgba(201, 168, 76, 0.2);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Eo=j.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255,255,255,0.05);
  background: ${i=>i.featured?"rgba(201, 168, 76, 0.05)":"transparent"};
  position: relative;
  
  &.header-col {
    background: rgba(255,255,255,0.02);
    text-align: left;
    padding-left: 40px;
    justify-content: center;
  }

  &:last-child { border-right: none; }

  .tier-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: #C9A84C;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .price {
    font-size: 2.8rem;
    font-weight: 900;
    color: white;
    margin-bottom: 30px;
    span { font-size: 0.9rem; opacity: 0.5; }
  }

  .feat-check {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    
    &.label {
      justify-content: flex-start;
      font-weight: 600;
      font-size: 0.95rem;
      color: rgba(255,255,255,0.8);
    }
  }

  .badge {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #C9A84C;
    color: #0b1a33;
    padding: 4px 15px;
    font-size: 0.7rem;
    font-weight: 900;
    border-radius: 0 0 10px 10px;
  }
`,B3=j.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`,U3=j.button`
  padding: 12px 30px;
  border-radius: 12px;
  background: ${i=>i.active?"#C9A84C":"white"};
  color: ${i=>i.active?"#0b1a33":"#64748b"};
  border: 1px solid ${i=>i.active?"#C9A84C":"#e2e8f0"};
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  
  &:hover {
    border-color: #C9A84C;
    transform: translateY(-2px);
  }
`,Vu=j(qe)`
  margin-top: 30px;
  padding: 15px 25px;
  background: ${i=>i.featured?"#C9A84C":"transparent"};
  color: ${i=>i.featured?"#0b1a33":"white"};
  border: 2px solid #C9A84C;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 900;
  font-size: 0.9rem;
  transition: all 0.3s;
  text-align: center;

  &:hover {
    background: #C9A84C;
    color: #0b1a33;
    box-shadow: 0 10px 20px rgba(201, 168, 76, 0.3);
  }
`;j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
`;j.div`
  background: white;
  padding: 30px 20px;
  border-radius: 20px;
  border: 1px solid #eee;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    border-color: #C9A84C;
    background: #0b1a33;
    h4 { color: #C9A84C; }
    .icon { color: white; transform: rotateY(360deg); }
  }
  .icon { font-size: 2.0rem; color: #C9A84C; margin-bottom: 15px; transition: all 0.6s ease; stroke-width: 1.5; }
  h4 { font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: #0b1a33; }
`;const L3=j.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  h2 { font-size: 2.5rem; color: #0b1a33; font-weight: 900; margin-bottom: 30px; text-align: left; }
  p { font-size: 1.1rem; line-height: 1.8; color: #555; margin-bottom: 40px; }
  .stats {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 50px;
    padding-top: 40px;
    border-top: 1px solid #eee;
    .stat-item {
      h3 { font-size: 2.5rem; color: #C9A84C; font-weight: 900; }
      span { font-size: 0.9rem; text-transform: uppercase; font-weight: 700; color: #0b1a33; }
    }
  }
`;j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0;
  text-align: left;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;j.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  border-left: 4px solid #C9A84C;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  h4 {
    color: #C9A84C;
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 5px;
  }
  p {
    font-size: 0.9rem !important;
    line-height: 1.4 !important;
    margin-bottom: 0 !important;
    color: #666 !important;
  }
`;const $3=()=>{const{language:i}=rt(),r=_e[i],u=K=>{const F=(K||"").toLowerCase();return F.includes("child")||F.includes("kid")?l.jsx(R2,{size:34,strokeWidth:1.5}):F.includes("pet")||F.includes("dog")?l.jsx(e5,{size:34,strokeWidth:1.5}):F.includes("travel")||F.includes("luggage")?l.jsx(Sm,{size:34,strokeWidth:1.5}):F.includes("gadget")||F.includes("phone")||F.includes("laptop")?l.jsx(tr,{size:34,strokeWidth:1.5}):F.includes("corporate")||F.includes("office")?l.jsx(Sm,{size:34,strokeWidth:1.5}):F.includes("medical")||F.includes("emergency")?l.jsx(Kl,{size:34,strokeWidth:1.5}):F.includes("vehicle")||F.includes("parking")||F.includes("bike")?l.jsx(Hd,{size:34,strokeWidth:1.5}):F.includes("home")||F.includes("door")?l.jsx(a5,{size:34,strokeWidth:1.5}):F.includes("qr")?l.jsx(es,{size:34,strokeWidth:1.5}):F.includes("family")?l.jsx(ar,{size:34,strokeWidth:1.5}):l.jsx(Ua,{size:34,strokeWidth:1.5})},[c,f]=w.useState(0),[p,h]=w.useState(null),[v,y]=w.useState([]),[x,b]=w.useState([]),[g,z]=w.useState("All"),[N,R]=w.useState([]),[$,G]=w.useState(""),[q,Q]=w.useState([]),[X,O]=w.useState(!0),[P,Z]=w.useState(""),B=w.useRef(null),W=w.useRef(null),se=yn(),{addToCart:ze}=nr(),re=(K,F)=>{if(K.preventDefault(),K.stopPropagation(),!localStorage.getItem("admin_token")){xt.error("Please login to add items to your cart.",{icon:"🔒",style:{borderRadius:"100px",background:"#0b1a33",color:"#fff"}}),se(`/login?returnUrl=${encodeURIComponent(window.location.pathname)}`);return}ze(F),xt.success(`${F.name} added to cart!`,{icon:"🛒",style:{borderRadius:"100px",background:"#0b1a33",color:"#fff"}})};return w.useEffect(()=>{Z(window.location.hostname==="localhost"?"http://localhost:5001":""),(async()=>{try{const F=await Promise.allSettled([Fe.get("/categories"),Fe.get("/products?type=SAFETY"),Fe.get("/public/settings"),Fe.get("/plans")]);if(F[0].status==="fulfilled"){const Se=F[0].value.data?.categories||[],He=["SMART HOME","TRAVEL SECURITY","GADGET SHIELD","MEDICAL EMERGENCY"],D=Se.filter(V=>!He.includes((V.name||"").toUpperCase()));y(D)}if(F[1].status==="fulfilled"&&b(F[1].value.data?.products||[]),F[2].status==="fulfilled")try{const Se=JSON.parse(F[2].value.data?.settings?.homeSecurityFeatures||"[]");Se.length>0&&Q(Se)}catch{}if(F[3].status==="fulfilled"){const Se=F[3].value.data?.plans||[];if(R(Se),Se.length>0){const He=(Se[0].displayName||"").split(" ")[0];G(He)}}}catch(F){console.error("Failed to fetch home data:",F)}finally{O(!1)}})()},[]),l.jsxs(l.Fragment,{children:[l.jsx(b3,{children:l.jsxs(v3,{children:[l.jsxs("div",{children:[l.jsxs(j3,{children:[l.jsx("span",{className:"dim",children:r.hero.taglineDim}),l.jsx("span",{className:"highlight",children:r.hero.taglineHighlight})]}),l.jsx(S3,{children:r.hero.subtext}),l.jsxs("div",{style:{display:"flex",gap:"15px"},children:[l.jsx(Qu,{to:"/smart-qr",children:r.hero.getStarted}),l.jsx(Qu,{to:"/watch-demo",variant:"outline",children:r.hero.watchDemo})]})]}),l.jsx(w3,{children:l.jsx("img",{src:"https://img.icons8.com/ios/800/C9A84C/shield.png",alt:"Tarkshya Smart Tag",style:{background:"rgba(255,255,255,0.05)",padding:"40px"}})})]})}),l.jsxs(Je,{bg:"light",children:[l.jsxs(zo,{children:[l.jsxs("h2",{children:[r.sections.categories.title," ",l.jsx("span",{children:r.sections.categories.highlight})]}),l.jsx("p",{children:r.sections.categories.subtext}),l.jsx("div",{className:"line"})]}),l.jsx(Tm,{children:l.jsxs(C3,{ref:B,children:[v.map(K=>l.jsxs(A3,{to:`/category/${K.id}`,children:[l.jsx("div",{className:"icon-box",children:u(K.name)}),l.jsx("h3",{children:K.name})]},K.id)),v.length===0&&!X&&l.jsx("p",{style:{textAlign:"center",gridColumn:"1/-1",color:"#999",padding:"40px"},children:"No categories found. Manage them in Admin Panel."})]})})]}),l.jsxs(Je,{bg:"white",children:[l.jsxs(zo,{children:[l.jsxs("h2",{children:[r.sections.safetyIds.title," ",l.jsx("span",{children:r.sections.safetyIds.highlight})]}),l.jsx("p",{children:r.sections.safetyIds.subtext}),l.jsx("div",{className:"line"})]}),l.jsxs(T3,{children:[l.jsx(Nm,{active:g==="All",onClick:()=>z("All"),children:"All"}),v.map(K=>l.jsx(Nm,{active:g===K.name,onClick:()=>z(K.name),children:K.name},K.id))]}),l.jsx(z3,{children:x.filter(K=>g==="All"||K.categoryId===g||K.category?.name===g).slice(0,6).map(K=>{const F=typeof K.photos=="string"?JSON.parse(K.photos||"[]"):K.photos||[],He=(typeof K.dynamicData=="string"?JSON.parse(K.dynamicData||"[]"):K.dynamicData||[]).slice(0,4);let D=F[0]?F[0].startsWith("http")?F[0]:`${P}${F[0]}`:"https://img.icons8.com/ios/400/0b1a33/security-checked.png";return D.includes("images.icons8.com")&&(D=D.replace("images.icons8.com","img.icons8.com").replace("/bubbles/","/ios/")),l.jsxs(E3,{children:[K.isCounterfeit&&l.jsx("div",{className:"badge",style:{background:"#e74c3c"},children:"RECALLED"}),l.jsx(qe,{to:`/product/${K.id}`,className:"img-box",children:l.jsx("img",{src:D,alt:K.name})}),l.jsxs("div",{className:"content",children:[l.jsx("h3",{children:K.name}),l.jsxs("div",{className:"features",children:[He.map((V,J)=>l.jsx("span",{children:V.label.toUpperCase()},J)),He.length===0&&l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"SMART QR"}),l.jsx("span",{children:"PRIVACY"})]})]}),l.jsxs("div",{className:"price-row",children:[l.jsxs("div",{className:"price",children:["₹",K.mrp||0," ",l.jsxs("span",{children:["₹",Math.round((K.mrp||0)*1.5)]})]}),l.jsx("div",{className:"discount",children:"33% OFF"})]})]}),l.jsxs("div",{className:"footer",children:[l.jsx(Qu,{to:`/product/${K.id}`,style:{padding:"10px 15px"},children:"VIEW DETAILS"}),l.jsx(Qe,{variant:"secondary",style:{padding:"10px 15px"},onClick:V=>re(V,K),children:l.jsx(Gi,{size:18})})]})]},K.id)})}),l.jsx(k3,{children:l.jsx(Qe,{onClick:()=>se("/shop"),children:"VIEW ALL PRODUCTS"})})]}),l.jsxs(Je,{bg:"light",children:[l.jsxs(zo,{children:[l.jsxs("h2",{children:[r.sections.services.title," ",l.jsx("span",{children:r.sections.services.highlight})]}),l.jsx("p",{children:r.sections.services.subtext}),l.jsx("div",{className:"line"})]}),l.jsx(Tm,{children:l.jsxs(N3,{ref:W,children:[l.jsxs($l,{to:"/service/instant-call-masking",children:[l.jsx("div",{className:"icon-wrapper",children:l.jsx(Ug,{size:34,strokeWidth:1.5})}),l.jsx("span",{children:"Call Masking"})]}),l.jsxs($l,{to:"/service/qr-security",children:[l.jsx("div",{className:"icon-wrapper",children:l.jsx(es,{size:34,strokeWidth:1.5})}),l.jsx("span",{children:"QR Security"})]}),l.jsxs($l,{to:"/service/emergency-helplines",children:[l.jsx("div",{className:"icon-wrapper",children:l.jsx(Ld,{size:34,strokeWidth:1.5})}),l.jsx("span",{children:"Helplines"})]}),l.jsxs($l,{to:"/service/data-privacy",children:[l.jsx("div",{className:"icon-wrapper",children:l.jsx(gt,{size:34,strokeWidth:1.5})}),l.jsx("span",{children:"Data Privacy"})]}),l.jsxs($l,{to:"/service/verified",children:[l.jsx("div",{className:"icon-wrapper",children:l.jsx(D2,{size:34,strokeWidth:1.5})}),l.jsx("span",{children:"Verified Identity"})]})]})})]}),l.jsxs(Je,{bg:"white",children:[l.jsxs(zo,{children:[l.jsxs("h2",{children:[r.sections.features.title," ",l.jsx("span",{children:r.sections.features.highlight})]}),l.jsx("p",{children:r.sections.features.subtext}),l.jsx("div",{className:"line"})]}),(()=>{const K=[...new Set(N.map(J=>(J.displayName||"").split(" ")[0]))].filter(Boolean),F=N.filter(J=>(J.displayName||"").startsWith($)),Se=F.find(J=>(J.tier||"").toUpperCase()==="LITE"),He=F.find(J=>(J.tier||"").toUpperCase()==="PRO"),D=F.find(J=>(J.tier||"").toUpperCase()==="ELITE"),V=["Basic QR Scan","Direct Call (No Masking)","WhatsApp Alert (No Masking)","Privacy Masking","Call Masking (Protected)","WhatsApp Masking (Protected)","Live Location Sharing"];return l.jsxs("div",{style:{marginTop:"40px"},children:[l.jsx(B3,{children:K.map(J=>l.jsxs(U3,{active:$===J,onClick:()=>G(J),children:[J," Security"]},J))}),l.jsxs(H3,{children:[l.jsxs(Eo,{className:"header-col",children:[l.jsx("h3",{style:{color:"#C9A84C",fontSize:"1.2rem",marginBottom:"20px"},children:"Compare Tiers"}),V.map(J=>l.jsx("div",{className:"feat-check label",children:J},J))]}),l.jsxs(Eo,{children:[l.jsx("div",{className:"tier-label",children:"Lite"}),l.jsxs("div",{className:"price",children:["₹",Se?.price||"---"," ",l.jsx("span",{children:"/yr"})]}),V.map(J=>{const oe=J.toLowerCase(),me=oe.includes("basic")||oe.includes("direct")||oe.includes("alert (no masking)");return l.jsx("div",{className:"feat-check",children:me?l.jsx(qu,{size:20,color:"#C9A84C"}):l.jsx(Vo,{size:20,color:"rgba(255,255,255,0.2)"})},J)}),l.jsx(Vu,{to:"/smart-qr",children:"Get Lite"})]}),l.jsxs(Eo,{featured:!0,children:[l.jsx("div",{className:"badge",children:"POPULAR"}),l.jsx("div",{className:"tier-label",children:"Pro"}),l.jsxs("div",{className:"price",children:["₹",He?.price||"---"," ",l.jsx("span",{children:"/yr"})]}),V.map(J=>{const oe=J.toLowerCase(),C=!oe.includes("elite")&&!oe.includes("(no masking)");return l.jsx("div",{className:"feat-check",children:C?l.jsx(qu,{size:20,color:"#C9A84C"}):l.jsx(Vo,{size:20,color:"rgba(255,255,255,0.2)"})},J)}),l.jsx(Vu,{to:"/smart-qr",featured:!0,children:"Get Pro"})]}),l.jsxs(Eo,{children:[l.jsx("div",{className:"tier-label",children:"Elite"}),l.jsxs("div",{className:"price",children:["₹",D?.price||"---"," ",l.jsx("span",{children:"/yr"})]}),V.map(J=>{const me=!J.toLowerCase().includes("(no masking)");return l.jsx("div",{className:"feat-check",children:me?l.jsx(qu,{size:20,color:"#C9A84C"}):l.jsx(Vo,{size:20,color:"rgba(255,255,255,0.2)"})},J)}),l.jsx(Vu,{to:"/smart-qr",children:"Get Elite"})]})]})]})})()]}),l.jsxs(R3,{children:[l.jsxs("div",{className:"section-header",children:[l.jsx(Cm,{size:42,className:"quote-icon"}),l.jsxs("h2",{children:[l.jsx("span",{children:"What our"}),"Customers Say"]})]}),l.jsxs("div",{className:"carousel-wrapper",children:[l.jsx("button",{className:"nav-btn",onClick:()=>f(K=>(K-1+3)%3),children:l.jsx(Ql,{size:20})}),l.jsx("div",{className:"cards",children:[{name:"Swati Singh",loc:"Bihar",featured:!1,img:"/avatar_swati.png",text:'"V-KAWACH के Pet Safety QR की वजह से मेरा खोया हुआ कुत्ता वापस मिला। किसी ने QR scan किया और <strong>सीधे मुझसे connect किया</strong> — बिल्कुल stress-free!"'},{name:"Rajat Patel",loc:"Gujarat",featured:!0,img:"/avatar_rajat.png",text:'"V-KAWACH Smart QR Tag ने हमारी गाड़ी की सुरक्षा को बढ़ा दिया है। Emergency में कोई भी QR scan करके <strong>instantly हमसे connect</strong> कर सकता है।"'},{name:"Surya Prakash",loc:"Jaipur",featured:!1,img:"/avatar_surya.png",text:'"भीड़ वाले मार्केट में गाड़ी में आग लग गई — Police ने V-KAWACH QR scan करके तुरंत मुझसे contact किया। इस tag ने <strong>बड़ा नुकसान बचाया</strong>।"'}].map((K,F)=>l.jsxs(M3,{className:K.featured?"featured":"",children:[l.jsx(Cm,{size:28,className:"quote"}),l.jsx("p",{dangerouslySetInnerHTML:{__html:K.text}}),l.jsxs("div",{className:"author",children:[l.jsx("img",{src:K.img,alt:K.name,className:"avatar"}),l.jsxs("div",{className:"info",children:[l.jsx("div",{className:"name",children:K.name}),l.jsx("div",{className:"loc",children:K.loc})]})]})]},F))}),l.jsx("button",{className:"nav-btn",onClick:()=>f(K=>(K+1)%3),children:l.jsx(Ri,{size:20})})]}),l.jsx("div",{className:"dots",children:[0,1,2].map(K=>l.jsx("span",{className:c===K?"active":"",onClick:()=>f(K)},K))})]}),l.jsx(D3,{children:l.jsxs("div",{className:"faq-inner",children:[l.jsxs("div",{className:"faq-header",children:[l.jsxs("h2",{children:["Frequently Asked Questions",l.jsx("span",{})]}),l.jsx("p",{children:"V-KAWACH के बारे में सामान्य प्रश्नों के उत्तर पाएं"})]}),[{q:"V-KAWACH Safety QR क्या है?",a:"V-KAWACH Safety QR एक अगली पीढ़ी की डिजिटल सुरक्षा प्रणाली है जिसमें एक QR Tag आपके वाहन, लैपटॉप, बच्चे या पालतू जानवर पर लगाया जाता है। Emergency में कोई भी इसे scan करके आपसे तुरंत और Anonymously (बिना नाम-नंबर जाने) connect कर सकता है।"},{q:"V-KAWACH QR कैसे काम करता है?",a:"QR scan होने पर एक secure page खुलता है जहाँ scanner अपना नंबर enter करता है। V-KAWACH का Call Masking System दोनों के नंबर छुपाकर एक safe call connect करता है — आपकी Privacy 100% सुरक्षित रहती है।"},{q:"क्या बिना इंटरनेट के QR स्कैन होगा?",a:"QR स्कैन के लिए स्कैनर के फोन पर इंटरनेट होना जरूरी है। लेकिन Emergency Call का विकल्प हमेशा उपलब्ध रहता है जो बिना इंटरनेट के भी काम करता है।"},{q:"क्या मेरा मोबाइल नंबर सुरक्षित (Safe) रहेगा?",a:"बिल्कुल! V-KAWACH में आपका मोबाइल नंबर कभी किसी को दिखाई नहीं देता। हमारी Privacy-First Call Masking Technology दोनों पक्षों के नंबर को पूरी तरह गुप्त रखती है।"},{q:"V-KAWACH QR कहाँ-कहाँ इस्तेमाल हो सकता है?",a:"गाड़ी (कार/बाइक), लैपटॉप, बच्चों का बैग, पालतू जानवर का बेल्ट, सामान (Luggage), और मेडिकल इमरजेंसी कार्ड — कहीं भी जहाँ इमरजेंसी में संपर्क की ज़रूरत हो।"}].map((K,F)=>l.jsxs(O3,{open:p===F,children:[l.jsxs("div",{className:"faq-q",onClick:()=>h(p===F?null:F),children:[l.jsx("span",{children:K.q}),l.jsx(Lg,{size:22,style:{transform:p===F?"rotate(45deg)":"rotate(0)"}})]}),l.jsx("div",{className:"faq-a",children:K.a})]},F))]})}),l.jsx(Je,{bg:"light",children:l.jsxs(L3,{children:[l.jsxs("h2",{children:[r.about.title," ",l.jsx("span",{children:r.about.highlight})]}),l.jsx("div",{dangerouslySetInnerHTML:{__html:r.about.content}}),l.jsxs("div",{className:"stats",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("h3",{children:"10k+"}),l.jsx("span",{children:"Vision: Impact 10,000+ Lives"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("h3",{children:"NGOs"}),l.jsx("span",{children:"Looking for NGO Partners"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("h3",{children:"100%"}),l.jsx("span",{children:"Our Social Initiative"})]})]})]})}),l.jsxs(_3,{children:[l.jsx(Yg,{})," V-Kawach Safety QR आपकी सुरक्षा के लिए है, इससे किसी भी प्रकार का payment नहीं किया जा सकता है।"]})]})},q3=j.div`
  background-color: ${({theme:i})=>i.colors.navy};
  color: ${({theme:i})=>i.colors.white};
  padding: 120px 0 80px;
  text-align: center;
`,Y3=j.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`,G3=j.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${({theme:i})=>i.colors.gold};
`,Q3=j.p`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
`,V3=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 60px;
  
  @media (min-width: ${({theme:i})=>i.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Xu=j.div`
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  
  .icon {
    width: 60px;
    height: 60px;
    background: ${({theme:i})=>i.colors.navy};
    color: ${({theme:i})=>i.colors.gold};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }
`,X3=j.ul`
  list-style: none;
  max-width: 600px;
  margin: 40px auto;
  text-align: left;
`,K3=j.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 1.1rem;
  
  svg {
    color: ${({theme:i})=>i.colors.gold};
  }
`,Z3=()=>{const{language:i}=rt(),r=_e[i].smartQR;return l.jsxs(l.Fragment,{children:[l.jsx(q3,{children:l.jsxs(Y3,{children:[l.jsx(G3,{children:r.title}),l.jsx(Q3,{children:r.subtitle}),l.jsx(Qe,{as:"a",href:`https://wa.me/918881384777?text=${encodeURIComponent(i==="hi"?"नमस्ते V-KAWACH, मैं स्मार्ट क्यूआर पहचान टैग ऑर्डर करना चाहता हूं। कृपया विवरण प्रदान करें।":"Hi V-KAWACH, I would like to order a Smart QR Identity Tag. Please provide details.")}`,target:"_blank",rel:"noopener noreferrer",children:r.getYourID})]})}),l.jsxs(Je,{children:[l.jsx("h2",{style:{textAlign:"center",marginBottom:"40px"},children:r.howItWorks}),l.jsxs(V3,{children:[l.jsxs(Xu,{children:[l.jsx("div",{className:"icon",children:l.jsx(tr,{size:32})}),l.jsx("h3",{children:r.steps.scan.title}),l.jsx("p",{children:r.steps.scan.desc})]}),l.jsxs(Xu,{children:[l.jsx("div",{className:"icon",children:l.jsx(Ua,{size:32})}),l.jsx("h3",{children:r.steps.connect.title}),l.jsx("p",{children:r.steps.connect.desc})]}),l.jsxs(Xu,{children:[l.jsx("div",{className:"icon",children:l.jsx(Ug,{size:32})}),l.jsx("h3",{children:r.steps.call.title}),l.jsx("p",{children:r.steps.call.desc})]})]})]}),l.jsxs(Je,{bg:"light",children:[l.jsx("h2",{style:{textAlign:"center"},children:r.featuresTitle}),l.jsx(X3,{children:r.features.map((u,c)=>l.jsxs(K3,{children:[l.jsx(Ua,{size:20})," ",u]},c))}),l.jsx("div",{style:{textAlign:"center"},children:l.jsx(Qe,{as:"a",href:`https://wa.me/918881384777?text=${encodeURIComponent(i==="hi"?"नमस्ते V-KAWACH, मैं स्मार्ट क्यूआर टैग ऑर्डर करना चाहता हूं। कृपया विवरण प्रदान करें।":"Hi V-KAWACH, I would like to order a Smart QR Tag. Please provide details.")}`,target:"_blank",rel:"noopener noreferrer",children:r.orderNow})})]})]})},W3=j.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid ${({theme:i})=>i.colors.border};
`,J3=j.h3`
  margin-bottom: 20px;
  text-align: center;
  color: ${({theme:i})=>i.colors.navy};
`,Ku=j.div`
  margin-bottom: 20px;
`,Zu=j.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${({theme:i})=>i.colors.text};
`,Wu=j.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({theme:i})=>i.colors.border};
  border-radius: 4px;
  font-family: ${({theme:i})=>i.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${({theme:i})=>i.colors.gold};
    box-shadow: 0 0 0 2px rgba(201, 168, 76, 0.2);
  }
`,F3=({serviceName:i})=>{const{language:r}=rt(),u=_e[r]?.quoteForm||{title:r==="hi"?"कोट प्राप्त करें:":"Get Quote for",name:r==="hi"?"नाम":"Name",namePlaceholder:r==="hi"?"अपना नाम दर्ज करें":"Enter your name",phone:r==="hi"?"फ़ोन नंबर":"Phone Number",phonePlaceholder:r==="hi"?"अपना फ़ोन नंबर दर्ज करें":"Enter your phone number",city:r==="hi"?"शहर":"City",cityPlaceholder:r==="hi"?"अपना शहर दर्ज करें":"Enter your city",submit:r==="hi"?"भेजें":"Submit"},[c,f]=w.useState({name:"",phone:"",city:""}),[p,h]=w.useState(!1),[v,y]=w.useState(!1),x=async g=>{g.preventDefault(),h(!0);try{await Fe.post("/public/leads",{...c,subject:`Quote Request for ${i}`,message:`City: ${c.city}`}),y(!0),xt.success(r==="hi"?"अनुरोध सफलतापूर्वक भेजा गया":"Quote request sent successfully"),setTimeout(()=>{const z=`Hi, I am interested in ${i}.

My details are:
Name: ${c.name}
Phone: ${c.phone}
City: ${c.city}`,N=`https://wa.me/918881384777?text=${encodeURIComponent(z)}`;window.open(N,"_blank")},1500)}catch(z){console.error("Quote submission failed:",z),xt.error(r==="hi"?"भेजने में विफल":"Failed to send request")}finally{h(!1)}},b=g=>{f({...c,[g.target.name]:g.target.value})};return l.jsxs(W3,{children:[l.jsxs(J3,{children:[u.title," ",i]}),v?l.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[l.jsx("h4",{style:{color:"#2e7d32"},children:r==="hi"?"धन्यवाद!":"Thank You!"}),l.jsx("p",{children:r==="hi"?"हमें आपका अनुरोध प्राप्त हो गया है।":"We have received your request."})]}):l.jsxs("form",{onSubmit:x,children:[l.jsxs(Ku,{children:[l.jsx(Zu,{children:u.name}),l.jsx(Wu,{type:"text",name:"name",required:!0,placeholder:u.namePlaceholder,value:c.name,onChange:b})]}),l.jsxs(Ku,{children:[l.jsx(Zu,{children:u.phone}),l.jsx(Wu,{type:"tel",name:"phone",required:!0,placeholder:u.phonePlaceholder,value:c.phone,onChange:b})]}),l.jsxs(Ku,{children:[l.jsx(Zu,{children:u.city}),l.jsx(Wu,{type:"text",name:"city",required:!0,placeholder:u.cityPlaceholder,value:c.city,onChange:b})]}),l.jsx(Qe,{type:"submit",disabled:p,style:{width:"100%"},children:p?r==="hi"?"भेजा जा रहा है...":"Sending...":u.submit})]})]})},I3=j.header`
  background: ${({theme:i})=>i.colors.navy};
  color: white;
  padding: 100px 0 60px;
  text-align: center;
`,P3=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  
  @media (min-width: ${({theme:i})=>i.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`,e4=j.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${({theme:i})=>i.colors.navy};
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    opacity: 0.8;
  }
`,t4=j.span`
  background: ${({theme:i})=>i.colors.gold};
  color: ${({theme:i})=>i.colors.navy};
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 20px;
`,a4=()=>{const{language:i}=rt(),r=_e[i].cloudMonitoring;return l.jsxs(l.Fragment,{children:[l.jsxs(I3,{children:[l.jsx("h1",{children:r.title}),l.jsx("p",{children:r.subtitle})]}),l.jsx(Je,{children:l.jsxs(P3,{children:[l.jsxs(e4,{children:[l.jsx(t4,{children:r.badge}),l.jsx("h2",{children:r.infoTitle}),l.jsx("p",{children:r.infoDesc}),l.jsxs("p",{children:[l.jsx("strong",{children:r.featuresTitle}),l.jsx("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:r.features.map((u,c)=>l.jsx("li",{children:u},c))})]})]}),l.jsx(F3,{serviceName:r.title})]})})]})},n4=j.div`
  background: ${({theme:i})=>i.colors.navy};
  color: white;
  padding: 120px 0 80px;
  text-align: center;
`,_m=j.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`,i4=j.div`
  display: flex;
  justify-content: space-around;
  margin: 60px 0;
  flex-wrap: wrap;
  gap: 30px;
`,Ju=j.div`
  text-align: center;
  flex: 1;
  min-width: 200px;
  h3 {
    font-size: 2.5rem;
    color: ${({theme:i})=>i.colors.gold};
    margin-bottom: 5px;
  }
  p {
    color: ${({theme:i})=>i.colors.navy};
    font-weight: 700;
  }
`,l4=j.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-top: 60px;
  text-align: left;
  border-top: 5px solid ${({theme:i})=>i.colors.gold};

  h3 {
    margin-bottom: 25px;
    color: ${({theme:i})=>i.colors.navy};
    text-align: center;
  }
`,ko=j.div`
  margin-bottom: 20px;
`,To=j.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,Fu=j.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fdfdfd;
  &:focus {
    outline: none;
    border-color: ${({theme:i})=>i.colors.gold};
  }
`,r4=j.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fdfdfd;
  min-height: 120px;
  &:focus {
    outline: none;
    border-color: ${({theme:i})=>i.colors.gold};
  }
`,o4=()=>{const{language:i}=rt(),r=_e[i].social,[u,c]=w.useState({name:"",email:"",phone:"",message:r.form.messagePlaceholder}),[f,p]=w.useState(!1),[h,v]=w.useState(null),y=b=>{c({...u,[b.target.name]:b.target.value})},x=async b=>{b.preventDefault(),p(!0);try{await Fe.post("/public/leads",{...u,subject:"Mission Rakshak Join Request"}),xt.success(i==="hi"?"अनुरोध सफलतापूर्वक भेजा गया":"Request sent successfully"),v({type:"success",message:r.form.success}),setTimeout(()=>{const z=`${i==="hi"?"नमस्ते, मैं मिशन रक्षक में शामिल होना चाहता हूं!":"Hi, I want to join Mission Rakshak!"}

Name: ${u.name}
Email: ${u.email}
Phone: ${u.phone}
Message: ${u.message}`,N=`https://wa.me/918881384777?text=${encodeURIComponent(z)}`;window.open(N,"_blank")},1500)}catch(g){console.error("Join request failed:",g),xt.error(i==="hi"?"भेजने में विफल":"Failed to send request"),v({type:"error",message:i==="hi"?"भेजने में विफल":"Failed to send"})}finally{p(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(n4,{children:l.jsxs(_m,{children:[l.jsx("h1",{style:{fontSize:"3rem",color:"#C9A84C"},children:r.title}),l.jsx("p",{style:{fontSize:"1.2rem",marginTop:"20px",opacity:.9},children:r.subtitle})]})}),l.jsx(Je,{children:l.jsxs(_m,{children:[l.jsx("h2",{children:r.storyTitle}),l.jsx("p",{style:{fontSize:"1.1rem",marginTop:"20px",lineHeight:"1.8"},children:r.storyPart1}),l.jsx("p",{style:{fontSize:"1.1rem",marginTop:"20px",lineHeight:"1.8"},children:r.storyPart2}),l.jsxs(i4,{children:[l.jsxs(Ju,{children:[l.jsx(P5,{size:48,color:"#C9A84C",style:{margin:"0 auto 10px"}}),l.jsx("h3",{style:{fontSize:"1.5rem"},children:r.stats.vision}),l.jsx("p",{children:r.stats.visionDesc})]}),l.jsxs(Ju,{children:[l.jsx(ar,{size:48,color:"#C9A84C",style:{margin:"0 auto 10px"}}),l.jsx("h3",{style:{fontSize:"1.2rem"},children:r.stats.partners}),l.jsx("p",{children:r.stats.partnersDesc})]}),l.jsxs(Ju,{children:[l.jsx(c5,{size:48,color:"#C9A84C",style:{margin:"0 auto 10px"}}),l.jsx("h3",{style:{fontSize:"1.2rem"},children:r.stats.initiative}),l.jsx("p",{children:r.stats.initiativeDesc})]})]}),l.jsxs(l4,{id:"join-form",children:[l.jsx("h3",{children:r.formTitle}),l.jsxs("form",{onSubmit:x,children:[l.jsxs(ko,{children:[l.jsx(To,{children:r.form.name}),l.jsx(Fu,{type:"text",name:"name",required:!0,value:u.name,onChange:y,placeholder:r.form.namePlaceholder})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[l.jsxs(ko,{children:[l.jsx(To,{children:r.form.email}),l.jsx(Fu,{type:"email",name:"email",required:!0,value:u.email,onChange:y,placeholder:r.form.emailPlaceholder})]}),l.jsxs(ko,{children:[l.jsx(To,{children:r.form.phone}),l.jsx(Fu,{type:"tel",name:"phone",required:!0,value:u.phone,onChange:y,placeholder:r.form.phonePlaceholder})]})]}),l.jsxs(ko,{children:[l.jsx(To,{children:r.form.message}),l.jsx(r4,{name:"message",value:u.message,onChange:y,placeholder:r.form.messagePlaceholder})]}),l.jsxs(Qe,{type:"submit",disabled:f,style:{width:"100%",padding:"15px"},children:[f?r.form.submitting:r.form.submit," ",l.jsx(q5,{size:18,style:{marginLeft:"10px"}})]}),h&&l.jsx("p",{style:{marginTop:"20px",padding:"10px",borderRadius:"5px",textAlign:"center",background:h.type==="success"?"#e6f7e6":"#fff0f0",color:h.type==="success"?"#2e7d32":"#d32f2f"},children:h.message})]})]})]})})]})},s4=j.div`
  padding-top: 100px;
  background: #f8fafc;
  min-height: 100vh;
`,c4=j.div`
  background: #0b1a33;
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
    color: #C9A84C;
    margin-bottom: 10px;
  }
  p {
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
  }
`,u4=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,d4=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`,f4=j.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Rm=j.button`
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${i=>i.active?"#C9A84C":"#e2e8f0"};
  background: ${i=>i.active?"#C9A84C":"white"};
  color: ${i=>i.active?"#0b1a33":"#64748b"};
  transition: all 0.3s;

  &:hover {
    border-color: #C9A84C;
  }
`,p4=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`,h4=j.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  border: 1px solid #f1f5f9;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .img-box {
    height: 220px;
    background: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .content {
    padding: 20px;
    h3 {
      font-size: 1.1rem;
      color: #0b1a33;
      margin-bottom: 10px;
      font-weight: 700;
    }
    .price {
      font-size: 1.2rem;
      font-weight: 800;
      color: #0b1a33;
      span {
        font-size: 0.9rem;
        color: #94a3b8;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }
  }

  .footer {
    padding: 0 20px 20px;
    display: flex;
    gap: 10px;
  }
`,m4=()=>{const[i,r]=w.useState([]),[u,c]=w.useState([]),[f,p]=w.useState("All"),[h,v]=w.useState(!0);w.useEffect(()=>{(async()=>{try{const[g,z]=await Promise.all([Fe.get("/categories"),Fe.get("/products?type=SAFETY")]);c(g.data.categories||[]),r(z.data.products||[])}catch(g){console.error(g)}finally{v(!1)}})()},[]);const y=f==="All"?i:i.filter(b=>b.categoryId===f||b.category?.name===f),x=window.location.hostname==="localhost"?"http://localhost:5001":"";return l.jsxs(s4,{children:[l.jsxs(c4,{children:[l.jsx("h1",{children:"V-KAWACH SHOP"}),l.jsx("p",{children:"Explore our full range of Smart QR Security Solutions for Vehicles, Pets, and Personal Safety."})]}),l.jsxs(u4,{children:[l.jsxs(d4,{children:[l.jsxs(f4,{children:[l.jsx(Rm,{active:f==="All",onClick:()=>p("All"),children:"All Products"}),u.map(b=>l.jsx(Rm,{active:f===b.name,onClick:()=>p(b.name),children:b.name},b.id))]}),l.jsxs("div",{style:{color:"#64748b",fontSize:"0.9rem"},children:["Showing ",y.length," products"]})]}),h?l.jsx("div",{style:{textAlign:"center",padding:"100px"},children:"Loading products..."}):l.jsx(p4,{children:y.map(b=>{const g=typeof b.photos=="string"?JSON.parse(b.photos||"[]"):b.photos||[],z=g[0]?g[0].startsWith("http")?g[0]:`${x}${g[0]}`:"https://img.icons8.com/ios/400/0b1a33/security-checked.png";return l.jsxs(h4,{children:[l.jsx(qe,{to:`/product/${b.id}`,className:"img-box",children:l.jsx("img",{src:z,alt:b.name})}),l.jsxs("div",{className:"content",children:[l.jsx("h3",{children:b.name}),l.jsxs("div",{className:"price",children:["₹",b.mrp||0," ",l.jsxs("span",{children:["₹",Math.round((b.mrp||0)*1.5)]})]})]}),l.jsxs("div",{className:"footer",children:[l.jsx(Qe,{to:`/product/${b.id}`,style:{flex:2},children:"VIEW DETAILS"}),l.jsx(Qe,{variant:"secondary",style:{flex:1},children:l.jsx(Gi,{size:18})})]})]},b.id)})})]})]})},Mm=bt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,g4=j.div`
  min-height: 100vh;
  display: flex;
  background: #0b1a33;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,x4=j.div`
  flex: 1.2;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 140px 10% 80px;
  background: linear-gradient(135deg, #0b1a33 0%, #112240 100%);
  border-right: 1px solid rgba(255,255,255,0.05);

  &::before, &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(120px);
    z-index: 0;
    opacity: 0.3;
  }
  &::before {
    background: radial-gradient(circle, rgba(201, 168, 76, 0.5) 0%, rgba(0,0,0,0) 70%);
    top: -200px;
    left: -200px;
    animation: ${Mm} 10s ease-in-out infinite;
  }
  &::after {
    background: radial-gradient(circle, rgba(26, 58, 109, 0.8) 0%, rgba(0,0,0,0) 70%);
    bottom: -200px;
    right: -200px;
    animation: ${Mm} 12s ease-in-out infinite reverse;
  }

  > * { position: relative; z-index: 1; }

  h1 {
    font-size: 3.8rem;
    font-weight: 900;
    color: white;
    line-height: 1.1;
    margin-bottom: 25px;
    letter-spacing: -1.5px;
    span { color: #C9A84C; }
  }

  p.subtitle {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 60px;
    max-width: 90%;
    line-height: 1.6;
  }
`,y4=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 15px;
    background: rgba(255,255,255,0.02);
    padding: 20px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255,255,255,0.05);
      transform: translateY(-5px);
      border-color: rgba(201, 168, 76, 0.3);
    }

    .icon {
      background: rgba(201, 168, 76, 0.1);
      color: #C9A84C;
      padding: 12px;
      border-radius: 14px;
    }

    .text {
      h4 { color: white; font-size: 1.05rem; font-weight: 700; margin-bottom: 4px; }
      p { color: rgba(255,255,255,0.5); font-size: 0.85rem; line-height: 1.4; }
    }
  }
`,b4=j.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 40px 80px;
  background: white;
  position: relative;
`,v4=j.div`
  width: 100%;
  max-width: 480px;
  background: transparent;
  padding: 40px;

  h2 {
    font-size: 2.2rem;
    color: #0b1a33;
    margin-bottom: 10px;
    font-weight: 900;
    letter-spacing: -0.5px;
  }
  
  p.desc {
    color: #666;
    font-size: 1rem;
    margin-bottom: 50px;
  }
`,Dm=j.div`
  margin-bottom: 30px;
  
  label {
    display: block;
    font-size: 0.8rem;
    font-weight: 800;
    color: #444;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .input-wrapper {
    position: relative;
    
    input {
      width: 100%;
      padding: 18px 15px 18px 55px;
      border-radius: 16px;
      border: 2px solid #f0f2f5;
      background: #f9fafb;
      color: #0b1a33;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:focus {
        border-color: ${({theme:i})=>i.colors.gold};
        background: white;
        box-shadow: 0 0 20px rgba(201, 168, 76, 0.1);
        outline: none;
      }

      &::placeholder {
        color: #bbb;
        font-weight: 400;
      }
    }
    
    svg {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      transition: all 0.3s ease;
    }

    input:focus + svg, input:focus ~ svg {
      color: ${({theme:i})=>i.colors.gold};
    }
  }
`,j4=()=>{const{language:i}=rt(),r=_e[i].auth.login,u=yn(),[c,f]=w.useState({email:"",password:""}),[p,h]=w.useState(!1),[v,y]=w.useState(""),x=async b=>{b.preventDefault(),h(!0),y("");try{const g=await Fe.post("/auth/login",c),{token:z,role:N,user:R,admin:$}=g.data;localStorage.setItem("admin_token",z),localStorage.setItem("user_role",N),localStorage.setItem("user_profile",JSON.stringify(N==="admin"?$:R)),xt.success("Login successful!"),N==="admin"?window.location.href="/admin/dashboard":u("/dashboard")}catch(g){y(g.response?.data?.error||"Login failed. Please check your credentials.")}finally{h(!1)}};return l.jsxs(g4,{children:[l.jsxs(x4,{children:[l.jsx("h1",{children:r.title.split(" ").map((b,g)=>g===r.title.split(" ").length-1?l.jsx("span",{children:b},g):b+" ")}),l.jsx("p",{className:"subtitle",children:r.subtitle}),l.jsxs(y4,{children:[l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"icon",children:l.jsx(Ua,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:r.features[0].title}),l.jsx("p",{children:r.features[0].desc})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"icon",children:l.jsx(Hd,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:r.features[1].title}),l.jsx("p",{children:r.features[1].desc})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"icon",children:l.jsx(cs,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:r.features[2].title}),l.jsx("p",{children:r.features[2].desc})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"icon",children:l.jsx(Rg,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:r.features[3].title}),l.jsx("p",{children:r.features[3].desc})]})]})]})]}),l.jsx(b4,{children:l.jsxs(v4,{children:[l.jsx("h2",{children:r.cardTitle}),l.jsx("p",{className:"desc",children:r.cardDesc}),v&&l.jsx("div",{style:{background:"rgba(239, 68, 68, 0.1)",color:"#ef4444",padding:"15px",borderRadius:"16px",marginBottom:"25px",fontSize:"0.85rem",fontWeight:600,border:"1px solid rgba(239, 68, 68, 0.2)",textAlign:"center"},children:v}),l.jsxs("form",{onSubmit:x,children:[l.jsxs(Dm,{children:[l.jsx("label",{children:r.email}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("input",{type:"email",placeholder:r.emailPlaceholder,value:c.email,onChange:b=>f({...c,email:b.target.value}),autoComplete:"email",required:!0}),l.jsx(Bd,{size:22})]})]}),l.jsxs(Dm,{children:[l.jsx("label",{children:r.password}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("input",{type:"password",placeholder:r.passwordPlaceholder,value:c.password,onChange:b=>f({...c,password:b.target.value}),autoComplete:"current-password",required:!0}),l.jsx(Ba,{size:22})]})]}),l.jsx(Qe,{type:"submit",disabled:p,style:{width:"100%",padding:"20px",marginTop:"10px",background:"#C9A84C",color:"#0b1a33",borderRadius:"16px",fontSize:"1.1rem",fontWeight:900,opacity:p?.7:1,boxShadow:"0 10px 30px rgba(201, 168, 76, 0.2)"},children:p?r.submitting:l.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},children:[r.submit," ",l.jsx(v5,{size:22})]})})]}),l.jsxs("div",{style:{textAlign:"center",marginTop:"40px",fontSize:"0.95rem",color:"#666"},children:[r.noAccount," ",l.jsx(qe,{to:"/signup",style:{color:"#0b1a33",fontWeight:800,textDecoration:"none"},children:r.registerNow})]})]})})]})},Om=bt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,S4=j.div`
  min-height: 100vh;
  display: flex;
  background: #0b1a33;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,w4=j.div`
  flex: 1.2;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 140px 10% 80px;
  background: linear-gradient(135deg, #0b1a33 0%, #112240 100%);
  border-right: 1px solid rgba(255,255,255,0.05);

  &::before, &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(120px);
    z-index: 0;
    opacity: 0.3;
  }
  &::before {
    background: radial-gradient(circle, rgba(201, 168, 76, 0.5) 0%, rgba(0,0,0,0) 70%);
    top: -200px;
    left: -200px;
    animation: ${Om} 10s ease-in-out infinite;
  }
  &::after {
    background: radial-gradient(circle, rgba(26, 58, 109, 0.8) 0%, rgba(0,0,0,0) 70%);
    bottom: -200px;
    right: -200px;
    animation: ${Om} 12s ease-in-out infinite reverse;
  }

  > * { position: relative; z-index: 1; }

  h1 {
    font-size: 3.8rem;
    font-weight: 900;
    color: white;
    line-height: 1.1;
    margin-bottom: 25px;
    letter-spacing: -1.5px;
    span { color: #C9A84C; }
  }

  p.subtitle {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 60px;
    max-width: 90%;
    line-height: 1.6;
  }
`,C4=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 15px;
    background: rgba(255,255,255,0.02);
    padding: 20px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255,255,255,0.05);
      transform: translateY(-5px);
      border-color: rgba(201, 168, 76, 0.3);
    }

    .icon {
      background: rgba(201, 168, 76, 0.1);
      color: #C9A84C;
      padding: 12px;
      border-radius: 14px;
    }

    .text {
      h4 { color: white; font-size: 1.05rem; font-weight: 700; margin-bottom: 4px; }
      p { color: rgba(255,255,255,0.5); font-size: 0.85rem; line-height: 1.4; }
    }
  }
`,A4=j.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 40px 80px;
  background: white;
  position: relative;
`,z4=j.div`
  width: 100%;
  max-width: 480px;
  background: transparent;
  padding: 40px;

  h2 {
    font-size: 2.2rem;
    color: #0b1a33;
    margin-bottom: 10px;
    font-weight: 900;
    letter-spacing: -0.5px;
  }
  
  p.desc {
    color: #666;
    font-size: 1rem;
    margin-bottom: 40px;
  }
`,No=j.div`
  margin-bottom: 25px;
  
  label {
    display: block;
    font-size: 0.8rem;
    font-weight: 800;
    color: #444;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .input-wrapper {
    position: relative;
    
    input {
      width: 100%;
      padding: 18px 15px 18px 55px;
      border-radius: 16px;
      border: 2px solid #f0f2f5;
      background: #f9fafb;
      color: #0b1a33;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:focus {
        border-color: ${({theme:i})=>i.colors.gold};
        background: white;
        box-shadow: 0 0 20px rgba(201, 168, 76, 0.1);
        outline: none;
      }

      &::placeholder {
        color: #bbb;
        font-weight: 400;
      }
    }
    
    svg {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      transition: all 0.3s ease;
    }

    input:focus + svg, input:focus ~ svg {
      color: ${({theme:i})=>i.colors.gold};
    }
  }
`,E4=()=>{const{language:i}=rt(),r=_e[i].auth.signup,u=yn(),[c,f]=w.useState({name:"",email:"",password:"",confirmPassword:""}),[p,h]=w.useState(!1),[v,y]=w.useState(""),x=async b=>{if(b.preventDefault(),y(""),c.password!==c.confirmPassword){y("Passwords do not match!");return}h(!0);try{await Fe.post("/auth/signup",{name:c.name,email:c.email,password:c.password}),xt.success("Account created! Please login."),u("/login")}catch(g){y(g.response?.data?.error||"Signup failed. Please try again.")}finally{h(!1)}};return l.jsxs(S4,{children:[l.jsxs(w4,{children:[l.jsx("h1",{children:r.title.split(" ").map((b,g)=>g===r.title.split(" ").length-1?l.jsx("span",{children:b},g):b+" ")}),l.jsx("p",{className:"subtitle",children:r.subtitle}),l.jsxs(C4,{children:[l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"icon",children:l.jsx(Ua,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:_e[i].auth.login.features[0].title}),l.jsx("p",{children:_e[i].auth.login.features[0].desc})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"icon",children:l.jsx(Hd,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:_e[i].auth.login.features[1].title}),l.jsx("p",{children:_e[i].auth.login.features[1].desc})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"icon",children:l.jsx(cs,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:_e[i].auth.login.features[2].title}),l.jsx("p",{children:_e[i].auth.login.features[2].desc})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"icon",children:l.jsx(Rg,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:_e[i].auth.login.features[3].title}),l.jsx("p",{children:_e[i].auth.login.features[3].desc})]})]})]})]}),l.jsx(A4,{children:l.jsxs(z4,{children:[l.jsx("h2",{children:r.cardTitle}),l.jsx("p",{className:"desc",children:r.cardDesc}),v&&l.jsx("div",{style:{background:"rgba(239, 68, 68, 0.1)",color:"#ef4444",padding:"15px",borderRadius:"16px",marginBottom:"25px",fontSize:"0.85rem",fontWeight:600,border:"1px solid rgba(239, 68, 68, 0.2)",textAlign:"center"},children:v}),l.jsxs("form",{onSubmit:x,children:[l.jsxs(No,{children:[l.jsx("label",{children:r.name}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("input",{type:"text",placeholder:r.namePlaceholder,value:c.name,onChange:b=>f({...c,name:b.target.value}),required:!0}),l.jsx(Mi,{size:22})]})]}),l.jsxs(No,{children:[l.jsx("label",{children:r.email}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("input",{type:"email",placeholder:r.emailPlaceholder,value:c.email,onChange:b=>f({...c,email:b.target.value}),required:!0}),l.jsx(Bd,{size:22})]})]}),l.jsxs(No,{children:[l.jsx("label",{children:r.password}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("input",{type:"password",placeholder:r.passwordPlaceholder,value:c.password,onChange:b=>f({...c,password:b.target.value}),required:!0}),l.jsx(Ba,{size:22})]})]}),l.jsxs(No,{children:[l.jsx("label",{children:r.confirmPassword}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("input",{type:"password",placeholder:r.confirmPasswordPlaceholder,value:c.confirmPassword,onChange:b=>f({...c,confirmPassword:b.target.value}),required:!0}),l.jsx(Ba,{size:22})]})]}),l.jsx(Qe,{type:"submit",disabled:p,style:{width:"100%",padding:"20px",marginTop:"10px",background:"#C9A84C",color:"#0b1a33",borderRadius:"16px",fontSize:"1.1rem",fontWeight:900,opacity:p?.7:1,boxShadow:"0 10px 30px rgba(201, 168, 76, 0.2)"},children:p?r.submitting:l.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},children:[r.submit," ",l.jsx(sj,{size:22})]})})]}),l.jsxs("div",{style:{textAlign:"center",marginTop:"35px",fontSize:"0.95rem",color:"#666"},children:[r.hasAccount," ",l.jsx(qe,{to:"/login",style:{color:"#0b1a33",fontWeight:800,textDecoration:"none"},children:r.loginHere})]})]})})]})},k4=j.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 85px;
`,T4=j.aside`
  width: 260px;
  background-color: ${({theme:i})=>i.colors.navy};
  color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  position: fixed;
  top: 85px;
  height: calc(100vh - 85px);
  z-index: 99;
`;j.div`
  padding: 0 30px 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({theme:i})=>i.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  
  img {
    height: 32px;
    border-radius: 4px;
  }
`;const N4=j.ul`
  list-style: none;
  padding: 0;
  flex: 1;
`,_o=j.li`
  margin-bottom: 5px;
`,ql=j(qe)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 30px;
  color: white;
  text-decoration: none;
  opacity: 0.7;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;

  &:hover, &.active {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
    border-left-color: ${({theme:i})=>i.colors.gold};
    color: ${({theme:i})=>i.colors.gold};
  }

  svg {
    width: 20px;
  }
`,_4=j.main`
  flex: 1;
  margin-left: 260px;
  padding: 30px;
`,R4=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background: white;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`,M4=j.div`
  position: relative;
  width: 300px;

  input {
    width: 100%;
    padding: 10px 15px 10px 40px;
    border-radius: 8px;
    border: 1px solid #eee;
    background: #fdfdfd;
    outline: none;
    
    &:focus {
      border-color: ${({theme:i})=>i.colors.gold};
    }
  }

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
  }
`,D4=j.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,O4=j.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  position: relative;

  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: red;
    color: white;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  }
`,H4=j.div`
  background: linear-gradient(135deg, ${({theme:i})=>i.colors.navy} 0%, #1a3a6d 100%);
  color: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;

  h1 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  p {
    opacity: 0.8;
    max-width: 500px;
  }

  &::after {
    content: '';
    position: absolute;
    right: -50px;
    top: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
  }
`,B4=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`,U4=j.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  gap: 20px;

  .icon-box {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff4e5;
    color: ${({theme:i})=>i.colors.gold};
  }

  .info {
    h4 {
      color: #777;
      font-size: 0.9rem;
      margin-bottom: 5px;
    }
    span {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({theme:i})=>i.colors.navy};
    }
  }
`,L4=j.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`,Iu=j.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    
    h3 {
      font-size: 1.25rem;
      color: ${({theme:i})=>i.colors.navy};
    }
    
    button {
      color: ${({theme:i})=>i.colors.gold};
      background: none;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }
  }
`,Hm=j.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: 15px;
    color: #999;
    font-size: 0.85rem;
    font-weight: 600;
    border-bottom: 1px solid #f0f0f0;
  }

  td {
    padding: 15px;
    border-bottom: 1px solid #f8f8f8;
    color: #444;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;j.span`
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${i=>i.type==="active"?"#e6f7e6":"#fff0f0"};
  color: ${i=>i.type==="active"?"#2e7d32":"#d32f2f"};
`;const $4=()=>{const{language:i}=rt(),r=_e[i].admin,u=yn(),[c,f]=Ae.useState(null),[p,h]=Ae.useState([]),[v,y]=Ae.useState([]),[x,b]=Ae.useState("dashboard"),[g,z]=Ae.useState(!0),N=async()=>{try{z(!0);const[q,Q]=await Promise.all([api.get("/dashboard/stats"),api.get("/leads")]);f(q.data.stats),h(q.data.recentScans||[]),y(Q.data.leads||[])}catch(q){console.error("Failed to fetch dashboard data:",q)}finally{z(!1)}};Ae.useEffect(()=>{N()},[]);const R=[{label:r.stats.activeQRs,value:c?.activeTags||"0",icon:l.jsx(qn,{})},{label:r.stats.totalScans,value:c?.totalScans?.toLocaleString()||"0",icon:l.jsx(Dg,{})},{label:r.stats.callAlerts,value:c?.totalCalls||"0",icon:l.jsx(Ld,{})},{label:"B2B Enquiries",value:v.length||"0",icon:l.jsx(Users,{})}],$=()=>{localStorage.removeItem("admin_token"),u("/login")},G=async q=>{if(window.confirm("Delete this lead?"))try{await api.delete(`/leads/${q}`),y(v.filter(Q=>Q.id!==q)),toast.success("Lead deleted")}catch{toast.error("Failed to delete lead")}};return l.jsxs(l.Fragment,{children:[l.jsx(qd,{}),l.jsxs(k4,{children:[l.jsxs(T4,{children:[l.jsxs(N4,{children:[l.jsx(_o,{children:l.jsxs(ql,{to:"#",className:x==="dashboard"?"active":"",onClick:()=>b("dashboard"),children:[l.jsx(h5,{}),r.sidebar.masterPanel]})}),l.jsx(_o,{children:l.jsxs(ql,{to:"#",className:x==="leads"?"active":"",onClick:()=>b("leads"),children:[l.jsx(Users,{}),"B2B Enquiries"]})}),l.jsx(_o,{children:l.jsxs(ql,{to:"#",children:[l.jsx(qn,{}),r.sidebar.bulkManage]})}),l.jsx(_o,{children:l.jsxs(ql,{to:"#",children:[l.jsx(qg,{}),r.sidebar.systemHealth]})})]}),l.jsx("div",{style:{padding:"0 30px"},children:l.jsxs(ql,{to:"/login",onClick:$,style:{border:"none",background:"rgba(255,255,255,0.05)",borderRadius:"8px"},children:[l.jsx(Bg,{}),r.sidebar.logout]})})]}),l.jsxs(_4,{children:[l.jsxs(R4,{children:[l.jsxs(M4,{children:[l.jsx($g,{size:18}),l.jsx("input",{type:"text",placeholder:r.topbar.searchPlaceholder})]}),l.jsxs(D4,{children:[l.jsxs(O4,{children:[l.jsx(cs,{size:20}),v.length>0&&l.jsx("div",{className:"badge",children:v.length})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[l.jsxs("div",{style:{textAlign:"right"},children:[l.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem"},children:"Akash Yadav"}),l.jsx("div",{style:{fontSize:"0.75rem",color:"#888"},children:r.topbar.superAdmin})]}),l.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"#eee",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(Mi,{size:20,color:"#666"})})]})]})]}),x==="dashboard"?l.jsxs(l.Fragment,{children:[l.jsxs(H4,{children:[l.jsx("h1",{children:r.welcome.title}),l.jsx("p",{children:r.welcome.desc.replace("{count}",c?.totalScans||"0").replace("{alerts}",v.length||"0")})]}),l.jsx(B4,{children:R.map((q,Q)=>l.jsxs(U4,{children:[l.jsx("div",{className:"icon-box",children:q.icon}),l.jsxs("div",{className:"info",children:[l.jsx("h4",{children:q.label}),l.jsx("span",{children:q.value})]})]},Q))}),l.jsxs(L4,{children:[l.jsxs(Iu,{children:[l.jsxs("div",{className:"header",children:[l.jsx("h3",{children:"Recent Scans"}),l.jsx("button",{children:"View All"})]}),l.jsxs(Hm,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Tag Code"}),l.jsx("th",{children:"Owner"}),l.jsx("th",{children:"Asset"}),l.jsx("th",{children:"Time"})]})}),l.jsxs("tbody",{children:[p.map(q=>l.jsxs("tr",{children:[l.jsx("td",{children:q.tag?.tagCode}),l.jsx("td",{style:{fontWeight:600},children:q.tag?.ownerName}),l.jsx("td",{children:q.tag?.assetType}),l.jsx("td",{children:new Date(q.createdAt).toLocaleTimeString()})]},q.id)),p.length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:"4",style:{textAlign:"center"},children:"No recent scans"})})]})]})]}),l.jsxs(Iu,{children:[l.jsxs("div",{className:"header",children:[l.jsx("h3",{children:"Latest Enquiries"}),l.jsx("button",{onClick:()=>b("leads"),children:"View All"})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[v.slice(0,5).map(q=>l.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"flex-start"},children:[l.jsx("div",{style:{width:"35px",height:"35px",borderRadius:"8px",background:"#f0f4f8",display:"flex",alignItems:"center",justifyContent:"center",color:"#0b1a33"},children:l.jsx(Users,{size:16})}),l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:600},children:[q.name," (",q.company||"Individual",")"]}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"#999"},children:[q.phone," • ",new Date(q.createdAt).toLocaleDateString()]})]})]},q.id)),v.length===0&&l.jsx("p",{style:{textAlign:"center",color:"#999"},children:"No enquiries yet"})]})]})]})]}):l.jsxs(Iu,{children:[l.jsx("div",{className:"header",children:l.jsx("h3",{children:"B2B Enquiries & Leads"})}),l.jsxs(Hm,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Date"}),l.jsx("th",{children:"Company"}),l.jsx("th",{children:"Name"}),l.jsx("th",{children:"Phone"}),l.jsx("th",{children:"Email"}),l.jsx("th",{children:"Message"}),l.jsx("th",{children:"Action"})]})}),l.jsxs("tbody",{children:[v.map(q=>l.jsxs("tr",{children:[l.jsx("td",{children:new Date(q.createdAt).toLocaleDateString()}),l.jsx("td",{style:{fontWeight:600},children:q.company||"N/A"}),l.jsx("td",{children:q.name}),l.jsx("td",{children:q.phone}),l.jsx("td",{children:q.email}),l.jsx("td",{title:q.message,style:{maxWidth:"200px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:q.message}),l.jsx("td",{children:l.jsx("button",{onClick:()=>G(q.id),style:{background:"none",border:"none",color:"#d32f2f",cursor:"pointer",fontWeight:600},children:"Delete"})})]},q.id)),v.length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:"7",style:{textAlign:"center"},children:"No enquiries found"})})]})]})]})]})]})]})},q4=j.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,Y4=j.div`
  background: white;
  padding: 35px;
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);

  h2 {
    color: #0b1a33;
    margin-bottom: 20px;
    font-weight: 800;
  }
`,G4=j.button`
  position: absolute;
  top: 20px; right: 20px;
  background: #f5f5f5; border: none;
  width: 35px; height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
  &:hover { background: #eee; color: #333; }
`,Bm=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
  
  .detail-group {
    label {
      font-size: 0.8rem;
      color: #888;
      font-weight: 600;
      display: block;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    div {
      font-weight: 600;
      color: #333;
    }
  }
`,Q4=j.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  
  .item {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eee;
    background: #fafafa;
    &:last-child { border-bottom: none; }
    
    .name { font-weight: 600; color: #0b1a33; }
    .price { font-weight: 700; color: #C9A84C; }
  }
`,V4=j.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 85px;
`,X4=j.aside`
  width: 260px;
  background: linear-gradient(180deg, #0b1a33 0%, #081226 100%);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  position: fixed;
  top: 85px;
  height: calc(100vh - 85px);
  z-index: 99;
  border-right: 1px solid rgba(255,255,255,0.05);
`;j.div`
  padding: 0 30px 40px;
  display: flex;
  flex-direction: column;
  
  .brand {
    font-size: 1.25rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .tagline {
    font-size: 0.6rem;
    opacity: 0.6;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 4px;
  }
`;const K4=j.ul`
  list-style: none;
  padding: 0;
  flex: 1;
`,Pu=j.li`
  margin-bottom: 5px;
`,ed=j.button`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 16px 30px;
  color: white;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  opacity: 0.6;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 4px solid transparent;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;

  &:hover, &.active {
    opacity: 1;
    background: linear-gradient(90deg, rgba(201,168,76,0.1) 0%, transparent 100%);
    border-left-color: #C9A84C;
    color: #C9A84C;
    padding-left: 35px;
  }

  svg {
    width: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`,Z4=bt`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,W4=j.main`
  flex: 1;
  margin-left: 260px;
  padding: 40px;
  animation: ${Z4} 0.8s ease-out;
`,J4=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  background: white;
  padding: 20px 35px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.02);
`,td=j.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a3a6d 100%);
  color: white;
  padding: 45px;
  border-radius: 32px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(11, 26, 51, 0.4);

  .text {
    position: relative;
    z-index: 2;
    h1 {
      font-size: 2.2rem;
      font-weight: 900;
      margin-bottom: 12px;
      font-family: ${({theme:i})=>i.fonts.display};
      background: linear-gradient(to right, #fff, #C9A84C);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      font-size: 1.1rem;
      opacity: 0.8;
      font-weight: 500;
    }
  }

  .accent-circle {
    position: absolute;
    right: -50px;
    top: -50px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
    border-radius: 50%;
  }
`,F4=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`,ad=j.div`
  background: white;
  padding: 25px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.02);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  }

  .icon-box {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    color: #C9A84C;
  }

  .details {
    .label { font-size: 0.85rem; color: #888; font-weight: 600; margin-bottom: 2px; }
    .value { font-size: 1.4rem; font-weight: 800; color: #0b1a33; }
  }
`,nd=j.div`
  background: white;
  padding: 40px;
  border-radius: 28px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.02);
  margin-bottom: 35px;
  border: 1px solid rgba(0,0,0,0.03);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 35px;
    color: #0b1a33;
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 900;
    font-family: ${({theme:i})=>i.fonts.display};
    
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, #eee, transparent);
    }
  }
`,Ro=j.div`
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #555;
  }
  input {
    width: 100%;
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #ddd;
    font-family: inherit;
    font-size: 1rem;
    &:focus {
      border-color: #C9A84C;
      outline: none;
      box-shadow: 0 0 0 3px rgba(201,168,76,0.1);
    }
  }
`,I4=j.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  
  th, td {
    padding: 20px;
    text-align: left;
  }
  
  th {
    font-weight: 800;
    color: #999;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    border: none;
  }
  
  tbody tr {
    background: transparent;
    transition: all 0.3s ease;
    border-radius: 16px;
    
    &:hover {
      background: #f8f9fa;
      transform: scale(1.01);
      box-shadow: 0 10px 20px rgba(0,0,0,0.02);
    }
    
    td {
      border-top: 1px solid transparent;
      border-bottom: 1px solid #f0f0f0;
      color: #0b1a33;
      font-weight: 600;
      
      &:first-child { border-radius: 16px 0 0 16px; }
      &:last-child { border-radius: 0 16px 16px 0; }
    }
  }
`,Mo=j.span`
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${i=>i.status==="PAID"||i.status==="DELIVERED"?"#e6f7e6":"#fff3e0"};
  color: ${i=>i.status==="PAID"||i.status==="DELIVERED"?"#2e7d32":"#ef6c00"};
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`,P4=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,eS=j.div`
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  background: #fafafa;
  
  .qr-placeholder {
    width: 150px;
    height: 150px;
    background: white;
    margin: 0 auto 20px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }

  h4 {
    margin-bottom: 5px;
    color: #0b1a33;
  }

  p {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 15px;
  }
`,tS=()=>{const{language:i}=rt(),r=_e[i].dashboard,u=_e[i].common,c=yn(),f=m2(),[p,h]=w.useState(!0),[v,y]=w.useState(null),[x,b]=w.useState("orders"),[g,z]=w.useState(null),[N,R]=w.useState({name:"",phone:"",currentPassword:"",newPassword:""}),$=async()=>{try{const O=await Fe.get("/user/dashboard");y(O.data),R(P=>({...P,name:O.data.user?.name||"",phone:O.data.user?.phone||""}))}catch(O){console.error(O),xt.error(u.loadFailed),O.response?.status===401&&c("/login")}finally{h(!1)}};w.useEffect(()=>{if(!localStorage.getItem("admin_token")){c("/login");return}$()},[c]);const G=async O=>{O.preventDefault();try{await Fe.post("/user/settings",N),xt.success(u.profileUpdated),R(P=>({...P,currentPassword:"",newPassword:""})),$()}catch(P){xt.error(P.response?.data?.error||u.loadFailed)}};if(p)return l.jsx("div",{style:{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center",background:"#0b1a33",color:"white"},children:u.loading});const{user:q,tags:Q,orders:X}=v||{};return l.jsxs(l.Fragment,{children:[l.jsx(qd,{}),l.jsxs(V4,{children:[l.jsxs(X4,{children:[l.jsxs(K4,{children:[l.jsx(Pu,{children:l.jsxs(ed,{className:x==="orders"?"active":"",onClick:()=>b("orders"),children:[l.jsx(Xo,{}),r.sidebar.orders]})}),l.jsx(Pu,{children:l.jsxs(ed,{className:x==="qrcodes"?"active":"",onClick:()=>b("qrcodes"),children:[l.jsx(qn,{}),r.sidebar.tags]})}),l.jsx(Pu,{children:l.jsxs(ed,{className:x==="profile"?"active":"",onClick:()=>b("profile"),children:[l.jsx(Mi,{}),r.sidebar.profile]})})]}),l.jsx("div",{style:{padding:"0 30px"},children:l.jsxs("button",{onClick:()=>{localStorage.removeItem("admin_token"),localStorage.removeItem("user_role"),localStorage.removeItem("user_profile"),c("/login")},style:{width:"100%",display:"flex",alignItems:"center",gap:"12px",padding:"12px 30px",color:"white",textDecoration:"none",opacity:.7,transition:"all 0.3s ease",border:"none",background:"rgba(255,255,255,0.05)",borderRadius:"8px",cursor:"pointer",textAlign:"left",fontSize:"1rem"},children:[l.jsx(Bg,{size:20}),r.sidebar.logout]})})]}),l.jsxs(W4,{children:[l.jsxs(J4,{children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{fontSize:"0.75rem",color:"#888",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"4px"},children:[r.topbar.path," ",x==="orders"?r.sidebar.orders:x==="qrcodes"?r.sidebar.tags:r.sidebar.profile]}),l.jsx("div",{style:{fontWeight:900,color:"#0b1a33",fontSize:"1.4rem",fontFamily:f?.fonts?.display||"serif"},children:x==="orders"?r.topbar.orders:x==="qrcodes"?r.topbar.tags:r.topbar.profile})]}),l.jsx("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"8px 20px",background:"#f8f9fa",borderRadius:"100px",border:"1px solid #f0f0f0"},children:[l.jsxs("div",{style:{textAlign:"right"},children:[l.jsx("div",{style:{fontWeight:800,fontSize:"0.85rem",color:"#0b1a33"},children:q?.name}),l.jsx("div",{style:{fontSize:"0.7rem",color:"#888",fontWeight:600},children:q?.email})]}),l.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"white",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 10px rgba(0,0,0,0.05)"},children:l.jsx(Mi,{size:18,color:"#C9A84C"})})]})})]}),x==="orders"&&l.jsxs(l.Fragment,{children:[l.jsxs(td,{children:[l.jsxs("div",{className:"text",children:[l.jsxs("h1",{children:[r.welcome.greet," ",q?.name?.split(" ")[0]||"User","!"]}),l.jsxs("p",{children:[X?.length||0," ",r.welcome.ordersDesc]})]}),l.jsx("div",{className:"accent-circle"}),l.jsx(Po,{size:80,color:"#C9A84C",opacity:.3})]}),l.jsxs(F4,{children:[l.jsxs(ad,{children:[l.jsx("div",{className:"icon-box",children:l.jsx(Xo,{size:24})}),l.jsxs("div",{className:"details",children:[l.jsx("div",{className:"label",children:r.stats.totalOrders}),l.jsx("div",{className:"value",children:X?.length||0})]})]}),l.jsxs(ad,{children:[l.jsx("div",{className:"icon-box",children:l.jsx(Ua,{size:24})}),l.jsxs("div",{className:"details",children:[l.jsx("div",{className:"label",children:r.stats.secureTags}),l.jsx("div",{className:"value",children:Q?.length||0})]})]}),l.jsxs(ad,{children:[l.jsx("div",{className:"icon-box",children:l.jsx(Po,{size:24})}),l.jsxs("div",{className:"details",children:[l.jsx("div",{className:"label",children:r.stats.pending}),l.jsx("div",{className:"value",children:X?.filter(O=>O.status==="PENDING")?.length||0})]})]})]}),l.jsxs(nd,{children:[l.jsxs("h3",{children:[l.jsx(Xo,{size:24,color:"#C9A84C"})," ",r.orders.title]}),!X||X.length===0?l.jsx("p",{style:{color:"#999",textAlign:"center",padding:"40px"},children:r.orders.empty}):l.jsx("div",{style:{overflowX:"auto"},children:l.jsxs(I4,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:r.orders.table.id}),l.jsx("th",{children:r.orders.table.date}),l.jsx("th",{children:r.orders.table.items}),l.jsx("th",{children:r.orders.table.amount}),l.jsx("th",{children:r.orders.table.payment}),l.jsx("th",{children:r.orders.table.status})]})}),l.jsx("tbody",{children:X.map(O=>l.jsxs("tr",{onClick:()=>z(O),children:[l.jsx("td",{style:{fontWeight:900,color:"#0b1a33",fontSize:"0.9rem"},children:O.orderNumber}),l.jsx("td",{style:{fontSize:"0.85rem",color:"#666"},children:new Date(O.createdAt).toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"})}),l.jsx("td",{style:{maxWidth:"250px"},children:l.jsx("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"0.9rem"},children:O.items.map(P=>P.productName).join(", ")})}),l.jsxs("td",{style:{fontWeight:800},children:["₹",O.totalAmount]}),l.jsx("td",{children:l.jsx(Mo,{status:O.paymentStatus,children:O.paymentStatus})}),l.jsx("td",{children:l.jsx(Mo,{status:O.status==="DELIVERED"?"PAID":"UNPAID",children:O.status})})]},O.id))})]})})]})]}),x==="qrcodes"&&l.jsxs(l.Fragment,{children:[l.jsxs(td,{children:[l.jsxs("div",{className:"text",children:[l.jsx("h1",{children:r.welcome.qrTitle}),l.jsx("p",{children:r.welcome.qrDesc})]}),l.jsx("div",{className:"accent-circle"}),l.jsx(qn,{size:80,color:"#C9A84C",opacity:.3})]}),l.jsxs(nd,{children:[l.jsxs("h3",{children:[l.jsx(qn,{size:24,color:"#C9A84C"})," ",r.tags.title]}),!Q||Q.length===0?l.jsx("p",{style:{color:"#999",textAlign:"center",padding:"40px"},children:r.tags.empty}):l.jsx(P4,{children:Q.map(O=>l.jsxs(eS,{children:[l.jsx("div",{className:"qr-placeholder",children:l.jsx(qn,{size:80,color:"#0b1a33"})}),l.jsx("h4",{children:O.customAssetType||O.assetType}),l.jsxs("p",{children:[r.tags.card.code," ",O.tagCode]}),l.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:[l.jsxs(Qe,{variant:"outline",style:{padding:"8px 15px",fontSize:"0.8rem"},onClick:()=>window.open(`/scan/${O.id}`,"_blank"),children:[l.jsx(Dg,{size:14})," ",r.tags.card.preview]}),l.jsxs(Qe,{variant:"primary",style:{padding:"8px 15px",fontSize:"0.8rem",background:"#0b1a33"},children:[l.jsx(Mg,{size:14})," ",r.tags.card.download]})]})]},O.id))})]})]}),x==="profile"&&l.jsxs(l.Fragment,{children:[l.jsxs(td,{children:[l.jsxs("div",{className:"text",children:[l.jsx("h1",{children:r.welcome.profileTitle}),l.jsx("p",{children:r.welcome.profileDesc})]}),l.jsx(qg,{size:50,opacity:.2})]}),l.jsxs(nd,{style:{maxWidth:"600px"},children:[l.jsxs("h3",{children:[l.jsx(Mi,{size:20,color:"#C9A84C"})," ",r.profile.title]}),l.jsxs("form",{onSubmit:G,children:[l.jsxs(Ro,{children:[l.jsx("label",{children:r.profile.name}),l.jsx("input",{type:"text",value:N.name,onChange:O=>R({...N,name:O.target.value}),required:!0})]}),l.jsxs(Ro,{children:[l.jsx("label",{children:r.profile.phone}),l.jsx("input",{type:"tel",value:N.phone,onChange:O=>R({...N,phone:O.target.value}),required:!0})]}),l.jsxs("h3",{style:{marginTop:"40px"},children:[l.jsx(Ba,{size:20,color:"#C9A84C"})," ",r.profile.passwordTitle]}),l.jsx("p",{style:{fontSize:"0.85rem",color:"#888",marginBottom:"20px"},children:r.profile.passwordDesc}),l.jsxs(Ro,{children:[l.jsx("label",{children:r.profile.currentPassword}),l.jsx("input",{type:"password",placeholder:r.profile.currentPlaceholder,value:N.currentPassword,onChange:O=>R({...N,currentPassword:O.target.value})})]}),l.jsxs(Ro,{children:[l.jsx("label",{children:r.profile.newPassword}),l.jsx("input",{type:"password",placeholder:r.profile.newPlaceholder,value:N.newPassword,onChange:O=>R({...N,newPassword:O.target.value})})]}),l.jsx(Qe,{type:"submit",variant:"primary",style:{width:"100%",marginTop:"20px",padding:"15px"},children:r.profile.save})]})]})]})]}),g&&l.jsx(q4,{onClick:()=>z(null),children:l.jsxs(Y4,{onClick:O=>O.stopPropagation(),children:[l.jsx(G4,{onClick:()=>z(null),children:l.jsx(Gg,{size:20})}),l.jsx("h2",{children:r.orders.modal.title}),l.jsxs(Bm,{children:[l.jsxs("div",{className:"detail-group",children:[l.jsx("label",{children:r.orders.modal.number}),l.jsx("div",{children:g.orderNumber})]}),l.jsxs("div",{className:"detail-group",children:[l.jsx("label",{children:r.orders.modal.date}),l.jsxs("div",{children:[new Date(g.createdAt).toLocaleDateString()," at ",new Date(g.createdAt).toLocaleTimeString()]})]}),l.jsxs("div",{className:"detail-group",children:[l.jsx("label",{children:"Payment Status"}),l.jsx("div",{children:l.jsx(Mo,{status:g.paymentStatus,children:g.paymentStatus})})]}),l.jsxs("div",{className:"detail-group",children:[l.jsx("label",{children:"Order Status"}),l.jsx("div",{children:l.jsx(Mo,{status:g.status==="DELIVERED"?"PAID":"UNPAID",children:g.status})})]})]}),l.jsx("h3",{style:{fontSize:"1.1rem",marginBottom:"15px",color:"#0b1a33"},children:"Shipping Information"}),l.jsxs(Bm,{children:[l.jsxs("div",{className:"detail-group",children:[l.jsx("label",{children:"Customer Name"}),l.jsx("div",{children:g.customerName})]}),l.jsxs("div",{className:"detail-group",children:[l.jsx("label",{children:"Phone"}),l.jsx("div",{children:g.customerPhone})]}),l.jsxs("div",{className:"detail-group",style:{gridColumn:"1 / -1"},children:[l.jsx("label",{children:"Address"}),l.jsx("div",{children:g.shippingAddress})]})]}),l.jsx("h3",{style:{fontSize:"1.1rem",marginBottom:"15px",color:"#0b1a33"},children:"Order Items"}),l.jsxs(Q4,{children:[g.items.map((O,P)=>l.jsxs("div",{className:"item",children:[l.jsxs("div",{className:"name",children:[O.quantity,"x ",O.productName]}),l.jsxs("div",{className:"price",children:["₹",O.totalPrice]})]},P)),l.jsxs("div",{className:"item",style:{background:"#0b1a33",color:"white"},children:[l.jsx("div",{className:"name",style:{color:"white"},children:"Total Amount"}),l.jsxs("div",{className:"price",style:{color:"#C9A84C"},children:["₹",g.totalAmount]})]})]})]})})]})]})},ex=bt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,aS=bt`
  0% { box-shadow: 0 0 0 0 rgba(15, 23, 42, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(15, 23, 42, 0); }
  100% { box-shadow: 0 0 0 0 rgba(15, 23, 42, 0); }
`,nS=bt`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,iS=j(Hg)`
  animation: ${nS} 2s linear infinite;
`,Um=j.div`
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 60px;
  font-family: 'Outfit', sans-serif;
  color: #1e293b;
  position: relative;
`,lS=j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  border-bottom: 1px solid rgba(226, 232, 240, 0.5);

  .logo {
    font-size: 1.2rem;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    gap: 8px;
    span { color: #f59e0b; }
  }
`,Lm=j.div`
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  padding: 100px 24px 100px;
  color: white;
  position: relative;
  text-align: center;
  border-radius: 0 0 40px 40px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);
  margin-bottom: -40px;
  z-index: 1;

  .badge {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 0.65rem;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    color: #fbbf24;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 10px;
    letter-spacing: -2px;
    line-height: 1;
    background: linear-gradient(to right, #ffffff, #94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .asset-id {
    font-size: 1.1rem;
    color: #94a3b8;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`,rS=j.div`
  background: white;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 0.75rem;
  font-weight: 800;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.02);
  margin-bottom: 20px;
`,oS=j.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
  animation: ${ex} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
`,sS=j.div`
  background: white;
  border-radius: 36px;
  padding: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  border: 1px solid rgba(255,255,255,1);
  position: relative;
  z-index: 2;

  .avatar-box {
    width: 80px;
    height: 80px;
    border-radius: 28px;
    background: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: inset 0 2px 8px rgba(0,0,0,0.05);

    img { border-radius: 24px; }

    .status-dot {
      position: absolute;
      bottom: -4px;
      right: -4px;
      width: 20px;
      height: 20px;
      background: #22c55e;
      border: 4px solid white;
      border-radius: 50%;
    }
  }

  .info {
    flex: 1;
    h2 { font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-bottom: 2px; }
    .location {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.85rem;
      color: #64748b;
      font-weight: 600;
    }
  }

  .verified-badge {
    background: #f0f9ff;
    color: #0ea5e9;
    padding: 10px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,cS=j.div`
  background: #f1f5f9;
  border-radius: 24px;
  padding: 8px 24px;
  margin-bottom: 16px;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus-within {
    background: white;
    border-color: #0f172a;
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.05);
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    padding: 12px 0;
    font-size: 1.15rem;
    font-weight: 700;
    color: #0f172a;
    &::placeholder { color: #94a3b8; font-weight: 500; }
  }
`,uS=j.button`
  background: #0f172a;
  color: white;
  border: none;
  width: 100%;
  padding: 22px;
  border-radius: 24px;
  font-size: 1.2rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.3);
  margin-bottom: 16px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${i=>i.active?aS:"none"} 2s infinite;

  &:hover { transform: translateY(-4px); box-shadow: 0 30px 60px -12px rgba(15, 23, 42, 0.4); }
  &:active { transform: translateY(-1px) scale(0.98); }
  &:disabled { background: #cbd5e1; color: #94a3b8; box-shadow: none; cursor: not-allowed; }
`,dS=j.button`
  background: white;
  color: #ef4444;
  border: 2px solid #fee2e2;
  width: 100%;
  padding: 20px;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: all 0.3s;

  &:hover { background: #fef2f2; border-color: #ef4444; color: #ef4444; }
`,fS=j.button`
  background: #22c55e;
  color: white;
  border: none;
  width: 100%;
  padding: 20px;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  margin-bottom: 16px;
  box-shadow: 0 15px 30px rgba(34, 197, 94, 0.2);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(34, 197, 94, 0.3); }
  &:disabled { background: #cbd5e1; box-shadow: none; cursor: not-allowed; }
`,pS=j.button`
  background: #6366f1;
  color: white;
  border: none;
  width: 100%;
  padding: 20px;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  margin-bottom: 0;
  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.2);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(99, 102, 241, 0.3); }
`,hS=j.div`
  .section-title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 30px;
    color: #334155;
  }

  .steps {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 40px;
  }
`,mS=j.div`
  text-align: center;
  flex: 1;

  .icon-circle {
    width: 64px;
    height: 64px;
    background: white;
    color: #0F172A;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0 auto 15px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.04);
    position: relative;

    .step-num {
      position: absolute;
      top: -5px;
      right: -5px;
      background: #0F172A;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid #F1F5F9;
    }
  }

  .label {
    font-size: 0.8rem;
    font-weight: 700;
    color: #64748B;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 1.4;
  }
`,gS=j.div`
  text-align: center;
  padding: 40px 24px;

  .powered-by {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #94A3B8;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 25px;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 30px;
    
    a {
      color: #64748B;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.9rem;
      transition: color 0.2s;
      &:hover { color: #F97316; }
    }
  }
`,xS=j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #25D366;
  color: white;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.88rem;
  font-weight: 800;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);

  .msg { flex: 1; line-height: 1.4; }

  a {
    background: white;
    color: #1a6b38;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 900;
    font-size: 0.8rem;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
  }
`,yS=j.div`
  position: fixed;
  inset: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .spinner {
    color: #F97316;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
`,bS=j.div`
  background: #FFF7ED;
  border: 2px dashed #FED7AA;
  padding: 20px;
  border-radius: 24px;
  marginBottom: 25px;
  position: relative;
  animation: ${ex} 0.5s ease-out;

  .label {
    position: absolute;
    top: -12px;
    left: 30px;
    background: #0F172A;
    color: white;
    padding: 2px 12px;
    border-radius: 10px;
    font-size: 0.65rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    font-size: 1.1rem;
    font-weight: 700;
    color: #9A3412;
    font-style: italic;
    line-height: 1.4;
    margin: 0;
  }
`,vS=j.div`
  background: white;
  padding: 25px;
  border-radius: 32px;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #F1F5F9;

  .safety-label {
    font-size: 0.7rem;
    font-weight: 900;
    color: #94A3B8;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }

  .sponsor-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    img {
      height: 40px;
      max-width: 120px;
      object-fit: contain;
    }

    .text {
      text-align: left;
      
      .name {
        font-weight: 800;
        font-size: 1rem;
        color: #0F172A;
      }

      a {
        font-size: 0.75rem;
        color: #0F172A;
        font-weight: 700;
        text-decoration: none;
      }
    }
  }
`,jS=()=>{const{language:i,toggleLanguage:r}=rt(),u=_e[i].publicProfile,{id:c}=Pl(),[f,p]=w.useState(null),[h,v]=w.useState(!0),[y,x]=w.useState(""),[b,g]=w.useState(!1),[z,N]=w.useState(!1),[R,$]=w.useState(null),[G,q]=w.useState(!1),Q=Ae.useRef(null);w.useEffect(()=>{const Z=navigator.userAgent||"";/WhatsApp/i.test(Z)&&q(!0)},[]),w.useEffect(()=>{(async()=>{try{const B=await Fe.get(`/public/tag/${c}`);p(B.data.tag),navigator.geolocation&&navigator.geolocation.getCurrentPosition(W=>{$(W.coords),Fe.post(`/public/tag/${c}/scan`,{lat:W.coords.latitude,lng:W.coords.longitude}).catch(se=>console.error("Auto scan log failed",se))},null,{enableHighAccuracy:!0,timeout:5e3})}catch(B){console.error("Failed to load tag",B)}finally{v(!1)}})()},[c]);const X=async()=>{N(!0);const Z=async B=>{const{latitude:W,longitude:se}=B||{},ze=W?`https://maps.google.com/?q=${W},${se}`:"Location not shared",re=encodeURIComponent(`🚨 *Emergency Alert via V-KAWACH*

I found your asset and need help. My current live location:
${ze}

Please respond ASAP.`);if(f?.planType==="basic"&&f?.ownerPhone){const F=f.ownerPhone.replace(/\D/g,""),Se=F.startsWith("91")?F:`91${F}`;window.open(`https://wa.me/${Se}?text=${re}`,"_blank"),N(!1);return}const K=B?{scannerPhone:y,lat:W,lng:se}:{scannerPhone:y};try{if((await Fe.post(`/public/tag/${c}/alert`,K)).data.success){const Se="918045883477",He=encodeURIComponent(`Alert for Tag: ${f.tagCode}
Location: ${ze}`);window.open(`https://wa.me/${Se}?text=${He}`,"_blank")}}catch{alert("Failed to send alert. Please try again.")}finally{N(!1)}};if(R){await Z(R);return}navigator.geolocation?navigator.geolocation.getCurrentPosition(B=>{$(B.coords),Z(B.coords)},()=>Z(null),{enableHighAccuracy:!1,timeout:3e3}):Z(null)},O=Z=>{const B=Z.target.files[0];if(!B)return;const se=B.type.startsWith("video")?i==="hi"?"वीडियो":"Video":i==="hi"?"फोटो":"Photo",ze=encodeURIComponent(`🚨 *Emergency Support via V-KAWACH*

I found your asset and I am sending this ${se} as evidence. I am attaching it below.`),re=f.ownerPhone?.replace(/\D/g,"")||"918045883477",K=re.startsWith("91")?re:`91${re}`;window.location.href=`https://wa.me/${K}?text=${ze}`},P=async()=>{if(!y.match(/^[6-9]\d{9}$/)){alert("Please enter a valid 10-digit Indian phone number.");return}g(!0);try{const B=(await Fe.post(`/public/tag/${c}/call`,{scannerPhone:y})).data;B.success&&(window.location.href=`tel:${B.exophone}`)}catch(Z){alert(Z.response?.data?.error||"Connection failed. Please try again.")}finally{g(!1)}};return h?l.jsxs(yS,{children:[l.jsx("div",{style:{padding:"20px",borderRadius:"20px",background:"#F8FAFC"},children:l.jsx(gt,{size:48,className:"spinner"})}),l.jsx("p",{style:{marginTop:"20px",fontWeight:600,color:"#64748B"},children:u.loading})]}):f?l.jsxs(Um,{style:{paddingTop:"64px"},children:[l.jsxs(lS,{children:[l.jsxs("div",{className:"logo",children:[l.jsx(gt,{size:24,color:"#f59e0b"}),"V-KAWACH ",l.jsx("span",{children:"PRO"})]}),l.jsx("button",{onClick:r,style:{background:"#f8fafc",border:"1px solid #e2e8f0",padding:"6px 12px",borderRadius:"12px",fontWeight:800,color:"#475569",cursor:"pointer",fontSize:"0.75rem",textTransform:"uppercase"},children:i==="en"?"हिन्दी":"English"})]}),G&&l.jsxs(xS,{style:{top:"64px"},children:[l.jsx("span",{className:"msg",children:i==="hi"?"📲 Call के लिए Safari में खोलें":"📲 Open in Safari to make calls"}),l.jsx("button",{style:{background:"white",color:"#22c55e",border:"none",padding:"6px 12px",borderRadius:"10px",fontWeight:800,fontSize:"0.7rem"},onClick:()=>{window.location.href=`safari-https://tarkshyasolution.in/scan/${c}`},children:"FIX NOW"})]}),l.jsxs(Lm,{children:[l.jsxs("div",{className:"badge",children:[l.jsx(Io,{size:14}),u.header.badge]}),l.jsx("h1",{children:"V-KAWACH"}),l.jsx("div",{className:"asset-id",children:f.assetId?f.assetId:f.assetModel?`${f.assetModel} ${f.assetNumber?`| ${f.assetNumber}`:""}`:`${u.header.assetId} ${f.tagCode}`})]}),l.jsxs(rS,{style:{background:"transparent",boxShadow:"none",marginTop:"-30px",color:"rgba(255,255,255,0.6)"},children:[l.jsx(Ba,{size:14}),u.banner]}),l.jsxs(oS,{children:[f.customMessage&&l.jsxs(bS,{children:[l.jsx("div",{className:"label",children:"Note from Owner"}),l.jsxs("p",{children:['"',f.customMessage,'"']})]}),l.jsxs(sS,{children:[l.jsxs("div",{className:"avatar-box",children:[f.ownerPhoto?l.jsx("img",{src:f.ownerPhoto.startsWith("http")?f.ownerPhoto:`https://tarkshyasolution.in${f.ownerPhoto}`,alt:"Owner",style:{width:"100%",height:"100%",objectFit:"cover"}}):l.jsx(Mi,{size:36,color:"#94a3b8"}),l.jsx("div",{className:"status-dot"})]}),l.jsxs("div",{className:"info",children:[l.jsx("h2",{children:f.ownerName||u.owner}),l.jsxs("div",{className:"location",children:[l.jsx(Ud,{size:14}),f.address||u.locationVerified]})]}),l.jsx("div",{className:"verified-badge",children:l.jsx(Io,{size:24})})]}),l.jsxs("div",{style:{background:"white",padding:"30px",borderRadius:"36px",boxShadow:"0 20px 40px rgba(0,0,0,0.04)",border:"1px solid #f1f5f9",marginBottom:"24px"},children:[l.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:800,color:"#94a3b8",textTransform:"uppercase",marginBottom:"15px",letterSpacing:"1px"},children:"Verify & Connect"}),l.jsxs(cS,{children:[l.jsx(yd,{size:20,color:"#94a3b8"}),l.jsx("input",{type:"tel",placeholder:u.form.phonePlaceholder,value:y,onChange:Z=>x(Z.target.value.replace(/\D/g,"").slice(0,10)),maxLength:10})]}),l.jsxs("p",{style:{fontSize:"0.7rem",color:"#94a3b8",textAlign:"center",marginBottom:"25px",fontWeight:600},children:[l.jsx(Ba,{size:10,style:{marginRight:"4px"}}),i==="en"?"Your number is 100% masked and safe.":"आपका नंबर पूरी तरह से सुरक्षित और गुप्त है।"]}),l.jsxs(uS,{onClick:P,disabled:b||y.length<10,active:y.length===10,children:[l.jsx(yd,{size:22}),b?u.form.connecting:u.form.callButton]}),l.jsxs(dS,{onClick:()=>window.location.href="tel:112",children:[l.jsx($d,{size:22}),u.form.emergency]}),l.jsxs(fS,{onClick:X,disabled:z,children:[z?l.jsx(iS,{size:22}):l.jsx(k5,{size:22}),z?i==="hi"?"भेज रहे हैं...":"Sending Alert...":i==="hi"?"लाइव लोकेशन भेजें":"Share Live Location"]}),l.jsxs(pS,{onClick:()=>Q.current.click(),children:[l.jsx($2,{size:22}),i==="hi"?"फोटो / वीडियो भेजें":"Share Photo / Video"]}),l.jsx("input",{type:"file",ref:Q,style:{display:"none"},accept:"image/*,video/*",onChange:O})]}),f.sponsor&&l.jsxs(vS,{style:{borderRadius:"28px"},children:[l.jsx("p",{className:"safety-label",children:"Community Partner"}),l.jsxs("div",{className:"sponsor-info",children:[f.sponsor.logo&&l.jsx("img",{src:f.sponsor.logo.startsWith("http")?f.sponsor.logo:`https://tarkshyasolution.in${f.sponsor.logo}`,alt:f.sponsor.name}),l.jsxs("div",{className:"text",children:[l.jsx("div",{className:"name",children:f.sponsor.name}),f.sponsor.website&&l.jsxs("a",{href:f.sponsor.website,target:"_blank",rel:"noreferrer",children:["Partner Website ",l.jsx(xd,{size:12})]})]})]})]}),l.jsxs(hS,{style:{padding:"0 10px"},children:[l.jsxs("div",{className:"section-title",children:[l.jsx(Og,{size:20,color:"#94a3b8"}),u.howItWorks.title]}),l.jsx("div",{className:"steps",children:[{icon:l.jsx(qn,{size:24}),num:1,label:u.howItWorks.steps[0].label},{icon:l.jsx(gt,{size:24}),num:2,label:u.howItWorks.steps[1].label},{icon:l.jsx(xd,{size:24}),num:3,label:u.howItWorks.steps[2].label}].map((Z,B)=>l.jsxs(mS,{children:[l.jsxs("div",{className:"icon-circle",children:[Z.icon,l.jsx("div",{className:"step-num",children:Z.num})]}),l.jsx("div",{className:"label",children:Z.label})]},B))})]}),l.jsxs(gS,{children:[l.jsxs("div",{className:"powered-by",children:[l.jsx(gt,{size:18,color:"#0f172a"}),"V-KAWACH ENCRYPTION ACTIVE"]}),l.jsxs("div",{className:"links",children:[l.jsx("a",{href:"/terms",children:"Terms"}),l.jsx("a",{href:"/privacy",children:"Privacy"}),l.jsx("a",{href:"/support",children:"Support"})]})]})]})]}):l.jsx(Um,{children:l.jsxs(Lm,{children:[l.jsx("h1",{children:u.invalid.title}),l.jsx("p",{className:"asset-id",children:u.invalid.desc})]})})},SS=j.div`
  min-height: 100vh;
  background-color: #ffffff;
  color: #1e293b;
  font-family: 'Inter', sans-serif;
`,wS=j.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 100px 20px 160px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: #ffffff;
    clip-path: polygon(0 100%, 100% 100%, 100% 0);
  }
`,CS=j.div`
  max-width: 900px;
  margin: -80px auto 80px;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`,AS=j.div`
  max-width: 700px;
  margin: 0 auto;
  
  .icon-box {
    width: 64px;
    height: 64px;
    background: rgba(250, 204, 21, 0.2);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    color: #facc15;
    backdrop-filter: blur(10px);
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 16px;
    letter-spacing: -1px;
    background: linear-gradient(to right, #ffffff, #94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #94a3b8;
    font-size: 1.1rem;
    font-weight: 500;
  }
`,zS=j.div`
  background: #ffffff;
  border-radius: 32px;
  padding: 60px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 30px;
    border-radius: 24px;
  }
`,ES=j.div`
  line-height: 1.8;
  color: #334155;
  white-space: pre-wrap;
  font-size: 1.125rem;
  font-weight: 400;

  h2, h3 {
    color: #0f172a;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    margin-bottom: 1.5rem;
  }
`,kS=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  gap: 20px;
  color: #64748b;
`,TS=j(qe)`
  position: absolute;
  top: 40px;
  left: 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s;
  z-index: 10;
  
  &:hover {
    color: white;
    transform: translateX(-5px);
  }
`,id=({title:i,settingKey:r})=>{const{language:u}=rt(),f=(_e[u]||_e.en).legal||{back:"Back",subtitle:"Documentation",loading:"Loading...",fallback:"Content not found.",error:"An error occurred."},[p,h]=w.useState(""),[v,y]=w.useState(!0);console.log(`LegalPage rendering: ${i}, key: ${r}, lang: ${u}`),w.useEffect(()=>{(async()=>{try{const z=(await Fe.get("/public/settings")).data.settings||{},N=u==="hi"?`${r}_hi`:r;h(z[N]||z[r]||f.fallback)}catch{h(f.error)}finally{y(!1)}})(),window.scrollTo(0,0)},[r]);const x=()=>i.toLowerCase().includes("privacy")?l.jsx(gt,{size:32}):i.toLowerCase().includes("about")?l.jsx(Og,{size:32}):l.jsx(r5,{size:32});return l.jsxs(SS,{children:[l.jsxs(wS,{children:[l.jsxs(TS,{to:"/",children:[l.jsx(ss,{size:18})," ",f.back]}),l.jsxs(AS,{children:[l.jsx("div",{className:"icon-box",children:x()}),l.jsx("h1",{children:i}),l.jsx("p",{children:f.subtitle})]})]}),l.jsx(CS,{children:l.jsx(zS,{children:v?l.jsxs(kS,{children:[l.jsx(Hg,{className:"animate-spin",size:48,color:"#2563eb"}),l.jsx("p",{style:{fontWeight:"700",textTransform:"uppercase",letterSpacing:"1px",fontSize:"0.8rem"},children:f.loading})]}):l.jsx(ES,{children:p})})})]})},tx=bt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,ax=bt`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0); }
`,NS=bt`
  0% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(201, 168, 76, 0); }
  100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }
`,_S=j.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  padding: 160px 0 100px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 50%);
    animation: ${ax} 20s linear infinite;
    pointer-events: none;
  }
`,RS=j.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05));
  backdrop-filter: blur(20px);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 40px;
  color: #C9A84C;
  border: 1px solid rgba(201, 168, 76, 0.4);
  position: relative;
  animation: ${ax} 6s ease-in-out infinite, ${NS} 3s infinite;
  transform: rotate(45deg);

  > * {
    transform: rotate(-45deg);
  }
`,MS=j.h1`
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 20px;
  line-height: 1.1;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${tx} 0.8s ease-out;

  span {
    background: linear-gradient(to right, #C9A84C, #F2D06B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) { font-size: 3rem; }
`,DS=j.p`
  max-width: 700px;
  margin: 20px auto 0;
  color: rgba(255,255,255,0.8);
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 400;
  animation: ${tx} 1s ease-out 0.2s both;
`,OS=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  align-items: flex-start;
  @media (min-width: 1024px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`,Do=j.div`
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 20px 0 40px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  scroll-behavior: smooth;
  
  & > * {
    flex: 0 0 350px;
  }

  @media (max-width: 768px) {
    & > * {
      flex: 0 0 280px;
    }
  }
`,Oo=j.div`
  position: relative;
  padding: 0 10px;
  
  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    color: #333;
    transition: all 0.3s ease;

    &:hover {
      background: #f8f8f8;
      transform: translateY(-50%) scale(1.1);
    }

    &.prev { left: -15px; }
    &.next { right: -15px; }

    @media (max-width: 1024px) {
       display: none;
    }
  }
`,ld=j.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  .img-wrapper {
    height: 200px;
    background: #f8f9fa;
    img { width: 100%; height: 100%; object-fit: cover; }
  }

  .content {
    padding: 20px;
    text-align: left;
    h4 { font-size: 1.1rem; font-weight: 800; color: #000; margin-bottom: 10px; text-transform: uppercase; }
    p { font-size: 0.9rem; color: #666; line-height: 1.5; margin: 0; }
  }
`,HS=j.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`,BS=j.div`
  position: relative;
  height: 200px;
  background: #f8f9fa;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`,US=j.div`
  background: #B51B2E;
  color: white;
  font-weight: 700;
  font-size: 0.7rem;
  padding: 4px 8px;
  position: absolute;
  top: 10px;
  left: 10px;
  text-transform: uppercase;
  z-index: 2;
`,LS=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 10px 0;
`,$S=j.span`
  background: #004085;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,qS=j.div`
  h4 {
    margin: 10px 0;
    font-size: 1.1rem;
    font-weight: 800;
    color: #000;
    text-transform: uppercase;
  }
`,YS=j.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  .current { font-size: 1.5rem; font-weight: 900; color: #B51B2E; }
  .old { font-size: 0.9rem; color: #999; text-decoration: line-through; }
`,GS=j.div`
  color: #27ae60;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 15px;
`,QS=j.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  
  .view-btn {
    flex: 1;
    background: #B51B2E;
    color: white;
    text-align: center;
    padding: 12px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 0.85rem;
    transition: all 0.3s;
    &:hover { background: #941525; }
  }
  
  .cart-btn {
    width: 48px;
    height: 48px;
    background: #B51B2E;
    color: white;
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    &:hover { background: #941525; }
  }
`,Ho=j.div`
  text-align: left;
  margin-bottom: 40px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    color: #000;
    margin-bottom: 15px;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    gap: 15px;
    text-transform: uppercase;
    
    &::before {
      content: '';
      width: 5px;
      height: 32px;
      background: #B51B2E;
      border-radius: 1px;
    }
  }
  
  p {
    max-width: 900px;
    color: #444;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }
`,VS=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
  }

  .video-box {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 16/9;
    background: #000;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    
    img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
    
    .play-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background: #B51B2E;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 0 20px rgba(181, 27, 46, 0.4);
    }
  }

  .content-box {
    h3 { font-size: 2.2rem; font-weight: 900; color: #B51B2E; margin-bottom: 20px; text-transform: uppercase; }
    p { font-size: 1.1rem; line-height: 1.8; color: #333; margin-bottom: 30px; }
  }
`,XS=j.div`
  display: flex;
  overflow-x: auto;
  gap: 25px;
  padding: 10px 0 40px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  scroll-behavior: smooth;
  
  & > * {
    flex: 0 0 320px;
  }

  @media (max-width: 768px) {
    & > * {
      flex: 0 0 280px;
    }
  }
`,KS=j.div`
  background: linear-gradient(135deg, #0b1a33, #1a2a44);
  color: white;
  padding: 40px;
  border-radius: 32px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(11, 26, 51, 0.2);

  h3 { 
    font-size: 1.5rem; 
    font-weight: 900; 
    margin-bottom: 20px; 
    display: flex; 
    align-items: center; 
    gap: 12px;
    color: #C9A84C;
  }
  
  p { opacity: 0.8; line-height: 1.7; font-size: 1.05rem; }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px; right: -20px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.15) 0%, transparent 70%);
  }
`,ZS=j.div`
  position: sticky;
  top: 120px;
  .image-container {
    position: relative;
    padding: 20px;
    background: white;
    border-radius: 40px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.08);
    
    img { 
      width: 100%; 
      border-radius: 25px; 
      display: block; 
      transition: transform 0.5s ease;
    }
  }

  .stats {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    background: white;
    padding: 30px;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    text-align: center;
    border: 1px solid rgba(0,0,0,0.02);
    
    .stat-item {
      .value { font-size: 1.8rem; font-weight: 900; color: #0b1a33; margin-bottom: 5px; }
      .label { font-size: 0.75rem; font-weight: 800; color: #999; text-transform: uppercase; letter-spacing: 1px; }
    }
  }
`,WS=i=>({ShieldAlert:l.jsx(Yg,{size:50}),AlertTriangle:l.jsx($d,{size:50}),Users:l.jsx(ar,{size:50}),Scan:l.jsx(es,{size:50}),Zap:l.jsx(Qg,{size:50}),Bell:l.jsx(cs,{size:50}),ShieldCheck:l.jsx(gt,{size:50}),Activity:l.jsx(Kl,{size:50}),Smartphone:l.jsx(tr,{size:50}),Lock:l.jsx(Ba,{size:50})})[i]||l.jsx(Ua,{size:50}),JS=()=>{const{language:i}=rt(),r=_e[i].categoryDetails,{id:u}=Pl(),[c,f]=w.useState(null),[p,h]=w.useState(!0),v=window.location.hostname==="localhost"?"http://localhost:5001":"",y={prevention:Ae.useRef(null),emergency:Ae.useRef(null),tracking:Ae.useRef(null),products:Ae.useRef(null)},x=(g,z)=>{g.current&&g.current.scrollBy({left:z==="next"?400:-400,behavior:"smooth"})};if(w.useEffect(()=>{(async()=>{try{const N=(await Fe.get("/categories")).data?.categories?.find(R=>R.id===u);N&&(N.features=typeof N.features=="string"?JSON.parse(N.features||"[]"):N.features||[],N.preventionCards=typeof N.preventionCards=="string"?JSON.parse(N.preventionCards||"[]"):N.preventionCards||[],N.emergencyCards=typeof N.emergencyCards=="string"?JSON.parse(N.emergencyCards||"[]"):N.emergencyCards||[],N.trackingCards=typeof N.trackingCards=="string"?JSON.parse(N.trackingCards||"[]"):N.trackingCards||[],f(N))}catch(z){console.error("Failed to fetch category details:",z)}finally{h(!1)}})()},[u]),p)return l.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0b1a33",color:"white"},children:l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx(J2,{size:50,className:"animate-spin",color:"#C9A84C"}),l.jsx("p",{style:{marginTop:"25px",fontWeight:800,letterSpacing:"3px",fontSize:"1.2rem"},children:r.initializing})]})});if(!c)return l.jsx("div",{style:{padding:"150px 20px",textAlign:"center",fontSize:"1.5rem",fontWeight:800,color:"#0b1a33"},children:r.notFound});const b=g=>{if(!g)return"Category Details";const z=g.split(" ");return z.length===1?g:l.jsxs(l.Fragment,{children:[z.slice(0,-1).join(" ")," ",l.jsx("span",{children:z[z.length-1]})]})};return l.jsxs("div",{style:{background:"#fcfcfc"},children:[l.jsxs(_S,{children:[l.jsx(RS,{children:WS(c.icon)}),l.jsx(MS,{children:b(c.name)}),l.jsx(DS,{children:i==="hi"&&c.description_hi||c.description})]}),c.preventionHeading&&l.jsxs(Je,{bg:"transparent",children:[l.jsxs(Ho,{children:[l.jsx("h2",{children:b(i==="hi"&&c.preventionHeading_hi||c.preventionHeading)}),l.jsx("p",{children:i==="hi"&&c.preventionText_hi||c.preventionText})]}),l.jsxs(Oo,{children:[l.jsx("button",{className:"nav-btn prev",onClick:()=>x(y.prevention,"prev"),children:l.jsx(Ql,{})}),l.jsx(Do,{ref:y.prevention,children:c.preventionCards.map((g,z)=>l.jsxs(ld,{children:[l.jsx("div",{className:"img-wrapper",children:l.jsx("img",{src:g.image?`${v}${g.image}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:g.title})}),l.jsxs("div",{className:"content",children:[l.jsx("h4",{children:i==="hi"&&g.title_hi||g.title}),l.jsx("p",{children:i==="hi"&&g.text_hi||g.text})]})]},z))}),l.jsx("button",{className:"nav-btn next",onClick:()=>x(y.prevention,"next"),children:l.jsx(Ri,{})})]})]}),c.emergencyHeading&&l.jsxs(Je,{bg:"#ffffff",children:[l.jsxs(Ho,{children:[l.jsx("h2",{children:b(i==="hi"&&c.emergencyHeading_hi||c.emergencyHeading)}),l.jsx("p",{children:i==="hi"&&c.emergencyText_hi||c.emergencyText})]}),l.jsxs(Oo,{children:[l.jsx("button",{className:"nav-btn prev",onClick:()=>x(y.emergency,"prev"),children:l.jsx(Ql,{})}),l.jsx(Do,{ref:y.emergency,children:c.emergencyCards.map((g,z)=>l.jsxs(ld,{children:[l.jsx("div",{className:"img-wrapper",children:l.jsx("img",{src:g.image?`${v}${g.image}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:g.title})}),l.jsxs("div",{className:"content",children:[l.jsx("h4",{children:i==="hi"&&g.title_hi||g.title}),l.jsx("p",{children:i==="hi"&&g.text_hi||g.text})]})]},z))}),l.jsx("button",{className:"nav-btn next",onClick:()=>x(y.emergency,"next"),children:l.jsx(Ri,{})})]})]}),(c.howItWorksHeading||c.howItWorksText)&&l.jsx(Je,{bg:"#f8f9fa",children:l.jsxs(VS,{children:[l.jsxs("div",{className:"video-box",children:[l.jsx("img",{src:"/assets/car_qr_tag_mockup_1776107740073.png",alt:"How it works"}),l.jsx("div",{className:"play-btn",children:l.jsx(D5,{size:40,fill:"white"})})]}),l.jsxs("div",{className:"content-box",children:[l.jsx("h3",{children:i==="hi"&&c.howItWorksHeading_hi||c.howItWorksHeading}),l.jsx("p",{children:i==="hi"&&c.howItWorksText_hi||c.howItWorksText}),l.jsx(Qe,{as:"a",href:"#",style:{background:"#B51B2E",borderColor:"#B51B2E"},children:"DISCOVER MORE"})]})]})}),c.trackingHeading&&l.jsxs(Je,{bg:"#fdfdfd",children:[l.jsxs(Ho,{children:[l.jsx("h2",{children:b(i==="hi"&&c.trackingHeading_hi||c.trackingHeading)}),l.jsx("p",{children:i==="hi"&&c.trackingText_hi||c.trackingText})]}),l.jsxs(Oo,{children:[l.jsx("button",{className:"nav-btn prev",onClick:()=>x(y.tracking,"prev"),children:l.jsx(Ql,{})}),l.jsx(Do,{ref:y.tracking,children:c.trackingCards.map((g,z)=>l.jsxs(ld,{children:[l.jsx("div",{className:"img-wrapper",children:l.jsx("img",{src:g.image?`${v}${g.image}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:g.title})}),l.jsxs("div",{className:"content",children:[l.jsx("h4",{children:i==="hi"&&g.title_hi||g.title}),l.jsx("p",{children:i==="hi"&&g.text_hi||g.text})]})]},z))}),l.jsx("button",{className:"nav-btn next",onClick:()=>x(y.tracking,"next"),children:l.jsx(Ri,{})})]})]}),c.products&&c.products.length>0&&l.jsxs(Je,{bg:"#fdfdfd",children:[l.jsxs(Ho,{children:[l.jsx("h2",{children:r.relatedProducts}),l.jsx("p",{children:r.productsDesc})]}),l.jsxs(Oo,{children:[l.jsx("button",{className:"nav-btn prev",onClick:()=>x(y.products,"prev"),children:l.jsx(Ql,{})}),l.jsx(XS,{ref:y.products,children:c.products.map(g=>{const z=typeof g.photos=="string"?JSON.parse(g.photos||"[]"):g.photos||[],N=typeof g.dynamicData=="string"?JSON.parse(g.dynamicData||"[]"):g.dynamicData||[],R=z[0]?z[0].startsWith("http")?z[0]:`${v}${z[0]}`:"/assets/car_qr_tag_mockup_1776107740073.png";return l.jsxs(HS,{children:[l.jsxs(BS,{children:[l.jsx("img",{src:R,alt:g.name}),l.jsx(US,{children:"Features"})]}),l.jsx(LS,{children:N.slice(0,4).map(($,G)=>l.jsx($S,{title:$.value,children:$.label},G))}),l.jsx(qS,{children:l.jsx("h4",{children:i==="hi"&&g.name_hi||g.name})}),l.jsxs(YS,{children:[l.jsxs("span",{className:"current",children:["₹",g.mrp]}),l.jsxs("span",{className:"old",children:["₹",Math.round(g.mrp*1.5)]})]}),l.jsx(GS,{children:"40% OFF* (Pack of 3)"}),l.jsxs(QS,{children:[l.jsx(qe,{to:`/product/${g.id}`,className:"view-btn",children:"View Details"}),l.jsx("button",{className:"cart-btn",title:"Add to Cart",children:l.jsx(Gi,{size:20})})]})]},g.id)})}),l.jsx("button",{className:"nav-btn next",onClick:()=>x(y.products,"next"),children:l.jsx(Ri,{})})]})]}),l.jsx(Je,{bg:"#ffffff",children:l.jsxs(OS,{children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"25px"},children:[l.jsx("div",{style:{width:"40px",height:"3px",background:"#C9A84C",borderRadius:"2px"}}),l.jsx("span",{style:{fontSize:"0.9rem",fontWeight:900,color:"#C9A84C",letterSpacing:"0.2em",textTransform:"uppercase"},children:r.precisionSecurity})]}),l.jsxs("h2",{style:{fontSize:"3.2rem",fontWeight:900,color:"#0b1a33",marginBottom:"40px",letterSpacing:"-1.5px",lineHeight:1.1},children:[r.advancedProtocols.split(" ")[0]," ",l.jsx("span",{style:{color:"#C9A84C"},children:r.advancedProtocols.split(" ").slice(1).join(" ")})]}),l.jsx(Do,{style:{marginTop:0},children:c.features.map((g,z)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",background:"#f8f9fa",padding:"20px",borderRadius:"16px"},children:[l.jsx("div",{style:{color:"#C9A84C"},children:l.jsx(gt,{size:24})}),l.jsx("h4",{style:{margin:0,fontWeight:700,color:"#0b1a33",fontSize:"1rem"},children:i==="hi"?g.name_hi||g.name||g:g.name||g})]},z))}),c.features.length===0&&l.jsx("p",{style:{color:"#777",padding:"30px",background:"#f8f9fa",borderRadius:"16px",borderLeft:"4px solid #C9A84C"},children:r.standardProtocols}),l.jsxs(KS,{children:[l.jsxs("h3",{children:[l.jsx(_g,{size:28})," ",r.strategicProtection]}),l.jsx("p",{children:i==="hi"&&c.benefits_hi||c.benefits})]})]}),l.jsxs(ZS,{children:[l.jsxs("div",{className:"image-container",children:[l.jsx("img",{src:c.heroImage?`${v}${c.heroImage}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:c.name}),l.jsxs("div",{style:{position:"absolute",bottom:"30px",right:"-30px",background:"white",padding:"20px 30px",borderRadius:"20px",boxShadow:"0 20px 40px rgba(0,0,0,0.1)",display:"flex",alignItems:"center",gap:"15px"},children:[l.jsx("div",{style:{color:"#27ae60",background:"#eafaf1",padding:"10px",borderRadius:"12px"},children:l.jsx(Io,{size:28})}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"1rem",fontWeight:900,color:"#0b1a33"},children:r.verifiedSecurity}),l.jsx("div",{style:{fontSize:"0.7rem",color:"#888",fontWeight:800,marginTop:"2px"},children:r.certifiedHardware})]})]})]}),l.jsxs("div",{className:"stats",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"value",children:"99.9%"}),l.jsx("div",{className:"label",children:r.stats.scanRate})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"value",children:"<2s"}),l.jsx("div",{className:"label",children:r.stats.alertSpeed})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"value",children:"AES-256"}),l.jsx("div",{className:"label",children:r.stats.encryption})]})]})]})]})})]})},nx=bt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,FS=bt`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,IS=j.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  padding: 60px 0 100px;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 50%);
    animation: ${FS} 20s linear infinite;
    pointer-events: none;
  }
`,PS=j.div`
  margin-bottom: 40px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.6);
  position: relative;
  z-index: 10;
  
  a { 
    color: white; 
    text-decoration: none; 
    transition: color 0.3s;
    &:hover { color: #C9A84C; }
  }
`,ew=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: start;
  position: relative;
  z-index: 10;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`,tw=j.div`
  animation: ${nx} 0.8s ease-out;

  .main-img-wrapper {
    position: relative;
    border-radius: 32px;
    background: white;
    padding: 30px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.2);
    margin-bottom: 25px;

    &::after {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      border-radius: 32px;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
      pointer-events: none;
    }
  }

  .main-img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    transition: transform 0.5s ease;
    &:hover { transform: scale(1.05); }
  }

  .thumbs {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding-bottom: 10px;

    img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 16px;
      border: 2px solid transparent;
      background: rgba(255,255,255,0.1);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        border-color: #C9A84C;
        transform: translateY(-5px);
      }
    }
  }
`,aw=j.div`
  animation: ${nx} 0.8s ease-out 0.2s both;

  .badge {
    display: inline-block;
    background: rgba(201, 168, 76, 0.2);
    color: #C9A84C;
    padding: 8px 16px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  h1 { 
    font-size: 3.5rem; 
    color: white; 
    font-weight: 900; 
    margin-bottom: 15px; 
    line-height: 1.1;
    letter-spacing: -1px;
  }

  .reviews {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
    margin-bottom: 30px;
    .stars { color: #C9A84C; display: flex; gap: 2px; }
  }

  .price-card {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(20px);
    padding: 35px;
    border-radius: 28px;
    border: 1px solid rgba(255,255,255,0.05);
    margin-bottom: 30px;
  }
`,nw=j.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 20px;
  
  .current { 
    font-size: 3rem; 
    font-weight: 900; 
    color: white; 
  }
  .old { 
    font-size: 1.4rem; 
    color: rgba(255,255,255,0.4); 
    text-decoration: line-through; 
  }
  .discount { 
    background: #27ae60;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-weight: 800; 
    font-size: 0.9rem;
  }
`,iw=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
  padding-top: 25px;
  border-top: 1px solid rgba(255,255,255,0.1);

  .spec-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;

    .icon {
      color: #C9A84C;
    }
    .text {
      display: flex;
      flex-direction: column;
      .label { font-size: 0.75rem; color: rgba(255,255,255,0.5); text-transform: uppercase; font-weight: 700; }
      .value { font-size: 1rem; font-weight: 800; }
    }
  }
`,lw=j.div`
  background: #fcfcfc;
  padding: 80px 0;
`,rw=j.div`
  max-width: 1000px;
  margin: 0 auto;

  .tabs {
    display: flex;
    gap: 40px;
    border-bottom: 2px solid rgba(0,0,0,0.05);
    margin-bottom: 50px;
    justify-content: center;

    button {
      background: none;
      border: none;
      padding: 20px 0;
      font-size: 1.2rem;
      font-weight: 900;
      color: #999;
      cursor: pointer;
      position: relative;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: color 0.3s;

      &:hover { color: #0b1a33; }

      &.active {
        color: #0b1a33;
        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 3px;
          background: #C9A84C;
          border-radius: 3px 3px 0 0;
        }
      }
    }
  }
`,ow=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;

  .feature-card {
    background: white;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.03);
    box-shadow: 0 10px 30px rgba(0,0,0,0.02);
    display: flex;
    align-items: flex-start;
    gap: 15px;

    .icon-box {
      width: 48px;
      height: 48px;
      background: #f8f9fa;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #C9A84C;
      flex-shrink: 0;
    }

    h4 { font-size: 1.1rem; font-weight: 800; color: #0b1a33; margin-bottom: 5px; }
    p { font-size: 0.95rem; color: #666; line-height: 1.5; }
  }
`,sw=()=>{const{language:i}=rt(),r=_e[i].productDetails,{id:u}=Pl(),{addToCart:c}=nr(),[f,p]=w.useState("features"),[h,v]=w.useState(null),[y,x]=w.useState(!0),[b,g]=w.useState(""),z=()=>{if(!localStorage.getItem("admin_token")){xt.error("Please login to add items to your cart.",{icon:"🔒",style:{borderRadius:"100px",background:"#0b1a33",color:"#fff"}}),window.location.href="/login?redirect=/product/"+u;return}h&&(c(h),xt.success(i==="hi"?`${i==="hi"&&h.name_hi||h.name} कार्ट में जोड़ा गया!`:`${h.name} added to cart!`,{icon:"🛒",style:{borderRadius:"100px",background:"#0b1a33",color:"#fff"}}))};if(w.useEffect(()=>{g(window.location.hostname==="localhost"?"http://localhost:5001":""),(async()=>{try{const G=(await Fe.get(`/products/${u}`)).data?.product;G&&(G.photos=typeof G.photos=="string"?JSON.parse(G.photos||"[]"):G.photos||[],G.dynamicData=typeof G.dynamicData=="string"?JSON.parse(G.dynamicData||"[]"):G.dynamicData||[],v(G))}catch($){console.error("Failed to fetch product details:",$)}finally{x(!1)}})()},[u]),y)return l.jsx("div",{style:{height:"80vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0b1a33",color:"white"},children:l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx(Kl,{size:50,className:"animate-pulse",color:"#C9A84C"}),l.jsx("p",{style:{marginTop:"25px",fontWeight:800,letterSpacing:"3px",fontSize:"1.2rem",textTransform:"uppercase"},children:r.initializing})]})});if(!h)return l.jsx("div",{style:{padding:"150px 20px",textAlign:"center",fontSize:"1.5rem",fontWeight:800,color:"#0b1a33"},children:r.notFound});const N=()=>"https://img.icons8.com/ios/400/0b1a33/security-checked.png";return l.jsxs(l.Fragment,{children:[l.jsx(IS,{children:l.jsxs(Je,{bg:"transparent",children:[l.jsxs(PS,{children:[l.jsx(qe,{to:"/",children:"Ecosystem"})," / ",l.jsx(qe,{to:"/products",children:"Hardware"})," / ",l.jsx("span",{style:{color:"#C9A84C"},children:i==="hi"&&h.name_hi||h.name})]}),l.jsxs(ew,{children:[l.jsxs(tw,{children:[l.jsx("div",{className:"main-img-wrapper",children:(()=>{let R=h.photos[0]?h.photos[0].startsWith("http")?h.photos[0]:`${b}${h.photos[0]}`:N();return R.includes("images.icons8.com")&&(R=R.replace("images.icons8.com","img.icons8.com").replace("/bubbles/","/ios/")),l.jsx("img",{src:R,alt:h.name,className:"main-img"})})()}),l.jsx("div",{className:"thumbs",children:h.photos.filter(R=>R).length>0?h.photos.filter(R=>R).map((R,$)=>{let G=R.startsWith("http")?R:`${b}${R}`;return G.includes("images.icons8.com")&&(G=G.replace("images.icons8.com","img.icons8.com").replace("/bubbles/","/ios/")),l.jsx("img",{src:G,alt:"thumb"},$)}):l.jsx("img",{src:N(),alt:"thumb fallback"})})]}),l.jsxs(aw,{children:[l.jsx("div",{className:"badge",children:r.badge}),l.jsx("h1",{children:i==="hi"&&h.name_hi||h.name}),l.jsxs("div",{className:"reviews",children:[l.jsxs("div",{className:"stars",children:[l.jsx(Ll,{fill:"#C9A84C",size:16}),l.jsx(Ll,{fill:"#C9A84C",size:16}),l.jsx(Ll,{fill:"#C9A84C",size:16}),l.jsx(Ll,{fill:"#C9A84C",size:16}),l.jsx(Ll,{fill:"#C9A84C",size:16})]}),l.jsx("span",{children:"4.9/5 (128+ Verifications)"})]}),l.jsxs("div",{className:"price-card",children:[l.jsxs(nw,{children:[l.jsxs("span",{className:"current",children:["₹",h.mrp||0]}),l.jsxs("span",{className:"old",children:["₹",Math.round((h.mrp||0)*1.5)]}),l.jsx("span",{className:"discount",children:i==="hi"?"विशेष ऑफर":"SPECIAL OFFER"})]}),l.jsxs(iw,{children:[h.dynamicData.slice(0,4).map((R,$)=>l.jsxs("div",{className:"spec-item",children:[l.jsx(gt,{size:24,className:"icon"}),l.jsxs("div",{className:"text",children:[l.jsx("span",{className:"label",children:i==="hi"&&R.label_hi||R.label}),l.jsx("span",{className:"value",children:i==="hi"&&R.value_hi||R.value})]})]},$)),h.dynamicData.length===0&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"spec-item",children:[l.jsx(gt,{size:24,className:"icon"}),l.jsxs("div",{className:"text",children:[l.jsx("span",{className:"label",children:r.encryption}),l.jsx("span",{className:"value",children:"AES-256"})]})]}),l.jsxs("div",{className:"spec-item",children:[l.jsx(Kl,{size:24,className:"icon"}),l.jsxs("div",{className:"text",children:[l.jsx("span",{className:"label",children:r.delivery}),l.jsx("span",{className:"value",children:"24h"})]})]})]})]}),l.jsxs(Qe,{size:"large",style:{width:"100%",height:"60px",fontSize:"1.2rem",borderRadius:"16px",boxShadow:"0 20px 40px rgba(201, 168, 76, 0.3)"},onClick:z,children:[r.addToCart," ",l.jsx(Gi,{size:24,style:{marginLeft:"12px"}})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",color:"rgba(255,255,255,0.5)",fontSize:"0.9rem",fontWeight:600},children:[l.jsx(Ua,{size:18})," Verified V-KAWACH Security Hardware. Ships in 24 Hours."]})]})]})]})}),l.jsx(lw,{children:l.jsx(Je,{bg:"transparent",children:l.jsxs(rw,{children:[l.jsxs("div",{className:"tabs",children:[l.jsx("button",{className:f==="features"?"active":"",onClick:()=>p("features"),children:r.keyFeatures}),l.jsx("button",{className:f==="description"?"active":"",onClick:()=>p("description"),children:r.description})]}),f==="description"&&l.jsxs("div",{style:{background:"white",padding:"50px",borderRadius:"24px",boxShadow:"0 20px 40px rgba(0,0,0,0.02)",border:"1px solid rgba(0,0,0,0.03)"},children:[l.jsx("h3",{style:{fontSize:"1.8rem",color:"#0b1a33",fontWeight:900,marginBottom:"20px"},children:"Ecosystem Integration"}),l.jsx("p",{style:{lineHeight:1.8,color:"#555",fontSize:"1.15rem"},children:h.description||"This advanced V-KAWACH security module integrates seamlessly into your digital ecosystem. Designed with military-grade precision, it provides instant verification and tracking capabilities to ensure maximum safety for your assets and loved ones."}),l.jsxs("div",{style:{marginTop:"30px",display:"flex",gap:"20px",flexWrap:"wrap"},children:[l.jsxs("div",{style:{background:"#f8f9fa",padding:"15px 25px",borderRadius:"12px",fontWeight:700,color:"#0b1a33"},children:[l.jsx(_g,{size:18,style:{display:"inline",marginRight:"10px",color:"#C9A84C"}})," ISO Certified"]}),l.jsxs("div",{style:{background:"#f8f9fa",padding:"15px 25px",borderRadius:"12px",fontWeight:700,color:"#0b1a33"},children:[l.jsx(tr,{size:18,style:{display:"inline",marginRight:"10px",color:"#C9A84C"}})," App Compatible"]})]})]}),f==="features"&&l.jsxs(ow,{children:[h.dynamicData.map((R,$)=>l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Qg,{size:24})}),l.jsxs("div",{children:[l.jsx("h4",{children:i==="hi"&&R.label_hi||R.label}),l.jsx("p",{children:i==="hi"&&R.value_hi||R.value})]})]},$)),h.dynamicData.length===0&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"icon-box",children:l.jsx(gt,{size:24})}),l.jsxs("div",{children:[l.jsx("h4",{children:"Smart QR Protocol"}),l.jsx("p",{children:"High-quality smart sticker with instant scan detection."})]})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Ba,{size:24})}),l.jsxs("div",{children:[l.jsx("h4",{children:"Privacy Masking"}),l.jsx("p",{children:"Call and message masking to protect your personal details."})]})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Kl,{size:24})}),l.jsxs("div",{children:[l.jsx("h4",{children:"Live Notifications"}),l.jsx("p",{children:"Real-time alerts directly to your mobile ecosystem."})]})]})]})]})]})})})]})},cw=j.div`
  min-height: 100vh;
  background: white;
  padding-top: 100px;
`,uw=j.div`
  background: #0b1a33;
  color: white;
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
  }
`,dw=j.div`
  width: 80px;
  height: 80px;
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #C9A84C;
  border: 1px solid rgba(255,255,255,0.2);
`,fw=j.div`
  max-width: 800px;
  margin: -40px auto 60px;
  background: white;
  border-radius: 30px;
  padding: 50px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  border: 1px solid #eee;
  position: relative;
  z-index: 10;
`,pw=j.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #0b1a33;
  margin-bottom: 20px;
`,hw=j.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  
  p { margin-bottom: 20px; }
  
  h2 {
    font-size: 1.5rem;
    color: #0b1a33;
    margin: 30px 0 15px;
    font-weight: 700;
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;
    li { margin-bottom: 10px; }
  }
`,mw=j(qe)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #C9A84C;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  &:hover { transform: translateX(-5px); }
`,gw=()=>{const{slug:i}=Pl(),{language:r}=rt(),u=_e[r].services,f={"instant-call-masking":{icon:l.jsx(Ld,{size:40})},"emergency-helplines":{icon:l.jsx($d,{size:40})},"location-sharing":{icon:l.jsx(Ud,{size:40})},"data-privacy":{icon:l.jsx(Ba,{size:40})},"family-control":{icon:l.jsx(ar,{size:40})},"verified-id":{icon:l.jsx(gt,{size:40})},"app-support":{icon:l.jsx(tr,{size:40})},"audio-alerts":{icon:l.jsx(fj,{size:40})},"qr-security":{icon:l.jsx(es,{size:40})},verified:{icon:l.jsx(Io,{size:40})}}[i]?.icon||l.jsx(Ua,{size:40}),p=u.items&&u.items[i]||{title:r==="hi"?"सुरक्षा सुविधा":"Security Feature",content:r==="hi"?"<p>इस सुविधा के लिए विस्तृत जानकारी जल्द ही अपडेट की जाएगी।</p>":"<p>Detail information for this feature will be updated soon.</p>"};return l.jsxs(cw,{children:[l.jsxs(uw,{children:[l.jsx(dw,{children:f}),l.jsx(pw,{style:{color:"white"},children:p.title})]}),l.jsxs(fw,{children:[l.jsxs(mw,{to:"/",children:[l.jsx(ss,{size:20}),u.backToHome]}),l.jsx(hw,{dangerouslySetInnerHTML:{__html:p.content}})]})]})},xw=j.div`
  padding: 160px 0 100px;
  background: linear-gradient(135deg, #0b1a33 0%, #1a3a5f 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80') center/cover;
    opacity: 0.15;
    z-index: 0;
  }
`,yw=j.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 20px;
`,bw=j.span`
  background: ${({theme:i})=>i.colors.gold};
  color: ${({theme:i})=>i.colors.navy};
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  display: inline-block;
`,vw=j.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-family: ${({theme:i})=>i.fonts.display};
  margin-bottom: 20px;
  line-height: 1.1;
  
  span {
    color: ${({theme:i})=>i.colors.gold};
  }
`,jw=j.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
`,Sw=j.div`
  background: white;
  border-radius: 30px;
  padding: 60px;
  margin-top: -80px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.1);
  position: relative;
  z-index: 10;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`,ww=j.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  margin-top: 60px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Bo=j.div`
  padding: 40px;
  background: ${({theme:i})=>i.colors.light};
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 280px;
  justify-content: center;

  &:hover {
    transform: translateY(-8px);
    background: white;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
    border-color: ${({theme:i})=>i.colors.gold};
  }

  .icon {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:i})=>i.colors.gold};
    margin-bottom: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  h3 {
    margin-bottom: 15px;
    color: ${({theme:i})=>i.colors.navy};
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #666;
  }
`,Cw=j.div`
  margin-top: 80px;
  padding-top: 80px;
  border-top: 1px solid rgba(0,0,0,0.05);
`,Aw=j.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`,Yl=j.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: ${({theme:i})=>i.colors.navy};
  }
  
  input, textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${({theme:i})=>i.colors.gold};
      box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`,zw=j.div`
  background: #f0fff4;
  border: 1px solid #c6f6d5;
  color: #22543d;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  
  h3 {
    color: #22543d;
    margin-bottom: 10px;
  }
  
  p {
    margin: 0;
    opacity: 0.8;
  }
`,Ew=()=>{const{language:i}=rt(),r=_e[i].b2bPage,[u,c]=Ae.useState(!1),[f,p]=Ae.useState(!1),[h,v]=Ae.useState({company:"",name:"",phone:"",email:"",message:""}),y=b=>{const{name:g,value:z}=b.target;v(N=>({...N,[g]:z}))},x=async b=>{b.preventDefault(),p(!0);try{await Fe.post("/public/leads",{...h,subject:"B2B Solution Enquiry"}),c(!0),xt.success(i==="hi"?"पूछताछ सफलतापूर्वक भेजी गई":"Enquiry sent successfully")}catch(g){console.error("Enquiry failed:",g),xt.error(i==="hi"?"भेजने में विफल":"Failed to send enquiry")}finally{p(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(xw,{children:l.jsxs(yw,{children:[l.jsx(bw,{children:"B2B & Enterprise"}),l.jsx(vw,{children:l.jsx("span",{children:r.title})}),l.jsx(jw,{children:r.subtitle}),l.jsx(Qe,{size:"large",onClick:()=>document.getElementById("enquiry-form").scrollIntoView({behavior:"smooth"}),children:i==="hi"?"पूछताछ करें":"Get in Touch"})]})}),l.jsx(Je,{children:l.jsxs(Sw,{children:[l.jsxs("div",{style:{textAlign:"center",maxWidth:"800px",margin:"0 auto"},children:[l.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"20px",color:"#0b1a33"},children:i==="hi"?"डिजिटल ब्रांडिंग और सुरक्षा":"Digital Branding & Security"}),l.jsx("p",{style:{fontSize:"1.1rem",lineHeight:"1.8",color:"#444"},children:r.content})]}),l.jsxs(ww,{children:[l.jsxs(Bo,{children:[l.jsx("div",{className:"icon",children:l.jsx(Po,{size:30})}),l.jsx("h3",{children:i==="hi"?"स्मार्ट पैकेजिंग":"Smart Packaging"}),l.jsx("p",{children:i==="hi"?"अपने उत्पादों को स्मार्ट क्यूआर के साथ डिजिटल बनाएं ताकि ग्राहक स्कैन करके जानकारी पा सकें।":"Digitize your products with smart QR so customers can access info by scanning."})]}),l.jsxs(Bo,{children:[l.jsx("div",{className:"icon",children:l.jsx($g,{size:30})}),l.jsx("h3",{children:i==="hi"?"प्रामाणिकता जांच":"Authenticity Check"}),l.jsx("p",{children:i==="hi"?"नकली उत्पादों से बचें और ग्राहकों को असली उत्पाद की पहचान करने में मदद करें।":"Avoid counterfeit products and help customers identify genuine items."})]}),l.jsxs(Bo,{children:[l.jsx("div",{className:"icon",children:l.jsx(U2,{size:30})}),l.jsx("h3",{children:i==="hi"?"FSSAI और अनुपालन":"FSSAI & Compliance"}),l.jsx("p",{children:i==="hi"?"बिना किसी परेशानी के डिजिटल रूप से FSSAI विवरण और लाइसेंस जानकारी प्रदर्शित करें।":"Display FSSAI details and license information digitally without any hassle."})]}),l.jsxs(Bo,{children:[l.jsx("div",{className:"icon",children:l.jsx(ar,{size:30})}),l.jsx("h3",{children:i==="hi"?"सीधा ग्राहक जुड़ाव":"Direct Engagement"}),l.jsx("p",{children:i==="hi"?"ग्राहकों को सीधे कस्टमर केयर या व्हाट्सएप सपोर्ट से जोड़ें।":"Connect customers directly with customer care or WhatsApp support."})]})]}),l.jsxs(Cw,{id:"enquiry-form",children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[l.jsx("h2",{style:{color:"#0b1a33",marginBottom:"10px"},children:i==="hi"?"B2B पूछताछ":"B2B Enquiry"}),l.jsx("p",{children:i==="hi"?"अपने व्यवसाय के लिए डिजिटल समाधान प्राप्त करने के लिए नीचे दिया गया फॉर्म भरें।":"Fill out the form below to get digital solutions for your business."})]}),l.jsx(Aw,{children:u?l.jsxs(zw,{children:[l.jsx("h3",{children:i==="hi"?"धन्यवाद!":"Thank You!"}),l.jsx("p",{children:i==="hi"?"आपकी पूछताछ हमें प्राप्त हो गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी।":"We have received your enquiry. Our team will reach you shortly."})]}):l.jsxs("form",{onSubmit:x,children:[l.jsxs(Yl,{children:[l.jsx("label",{children:i==="hi"?"कंपनी का नाम":"Company Name"}),l.jsx("input",{type:"text",name:"company",value:h.company,onChange:y,placeholder:i==="hi"?"आपकी कंपनी का नाम दर्ज करें":"Enter your company name",required:!0})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[l.jsxs(Yl,{children:[l.jsx("label",{children:i==="hi"?"आपका नाम":"Your Name"}),l.jsx("input",{type:"text",name:"name",value:h.name,onChange:y,placeholder:i==="hi"?"आपका नाम":"Your name",required:!0})]}),l.jsxs(Yl,{children:[l.jsx("label",{children:i==="hi"?"फोन नंबर":"Phone Number"}),l.jsx("input",{type:"tel",name:"phone",value:h.phone,onChange:y,placeholder:"+91 XXXXX XXXXX",required:!0})]})]}),l.jsxs(Yl,{children:[l.jsx("label",{children:i==="hi"?"ईमेल पता":"Email Address"}),l.jsx("input",{type:"email",name:"email",value:h.email,onChange:y,placeholder:"email@company.com",required:!0})]}),l.jsxs(Yl,{children:[l.jsx("label",{children:i==="hi"?"संदेश":"Message"}),l.jsx("textarea",{name:"message",value:h.message,onChange:y,placeholder:i==="hi"?"हमें अपनी आवश्यकताओं के बारे में बताएं":"Tell us about your requirements",required:!0})]}),l.jsx(Qe,{type:"submit",variant:"primary",style:{width:"100%",marginTop:"10px"},disabled:f,children:f?i==="hi"?"भेजा जा रहा है...":"Sending...":i==="hi"?"पूछताछ भेजें":"Send Enquiry"})]})})]})]})})]})};function kw(){const{pathname:i}=$a();return w.useEffect(()=>{window.scrollTo(0,0)},[i]),null}const Gd=bt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,$m=j.div`
  padding: 120px 0 80px;
  min-height: 90vh;
  background: #f8f9fa;
  background-image: radial-gradient(circle at 10% 20%, rgba(11, 26, 51, 0.03) 0%, transparent 80%);
`,Tw=j.div`
  margin-bottom: 50px;
  animation: ${Gd} 0.6s ease-out;
  h1 { 
    font-size: 3rem; 
    font-weight: 900; 
    color: #0b1a33; 
    margin-bottom: 10px;
    letter-spacing: -1px;
  }
  .breadcrumb {
    display: flex;
    gap: 10px;
    color: #999;
    font-size: 0.9rem;
    font-weight: 600;
    span.active { color: #C9A84C; }
  }
`,Nw=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  animation: ${Gd} 0.8s ease-out;
  @media (min-width: 1024px) {
    grid-template-columns: 1.8fr 1fr;
  }
`,_w=j.div`
  background: white;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.04);
`,Rw=j.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 40px;
  border-bottom: 1px solid rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  &:last-child { border-bottom: none; }
  &:hover { background: #fafbfc; }

  .img-box {
    width: 140px;
    height: 140px;
    background: white;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
    img { width: 100%; height: 100%; object-fit: cover; }
  }

  .info {
    flex: 1;
    h4 { margin: 0 0 12px; color: #0b1a33; font-size: 1.4rem; font-weight: 800; letter-spacing: -0.5px; }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      background: rgba(39, 174, 96, 0.1);
      color: #27ae60;
      padding: 6px 12px;
      border-radius: 100px;
      font-weight: 800;
      letter-spacing: 0.5px;
    }
  }

  .qty-control {
    display: flex;
    align-items: center;
    gap: 15px;
    background: #f1f3f5;
    padding: 10px 20px;
    border-radius: 100px;
    
    button {
      background: white;
      border: none;
      color: #0b1a33;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      &:hover { color: #C9A84C; transform: scale(1.1); }
      &:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }
    }
    
    span { font-weight: 900; min-width: 30px; text-align: center; font-size: 1.1rem; }
  }

  .price { 
    font-weight: 900; 
    color: #0b1a33; 
    font-size: 1.5rem; 
    text-align: right;
    min-width: 120px;
  }

  .remove {
    background: transparent;
    color: #ff4d4d;
    border: 2px solid #ffe5e5;
    width: 45px;
    height: 45px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-left: 10px;
    &:hover { background: #ff4d4d; color: white; border-color: #ff4d4d; transform: scale(1.05) rotate(5deg); }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 25px;
    .img-box { width: 100px; height: 100px; }
    .info { min-width: 150px; }
    .qty-control { margin-right: auto; }
  }
`,Mw=j.div`
  background: linear-gradient(145deg, #0b1a33 0%, #112240 100%);
  border-radius: 32px;
  padding: 45px;
  height: fit-content;
  color: white;
  position: sticky;
  top: 120px;
  box-shadow: 0 30px 60px rgba(11, 26, 51, 0.2);
  border: 1px solid rgba(255,255,255,0.05);
  
  h3 { 
    margin-bottom: 35px; 
    color: white; 
    font-size: 1.6rem; 
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: -0.5px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    font-weight: 600;
    font-size: 1.05rem;
    color: rgba(255,255,255,0.7);
    
    &.total {
      margin-top: 35px;
      padding-top: 35px;
      border-top: 1px dashed rgba(255,255,255,0.2);
      color: #C9A84C;
      font-weight: 900;
      font-size: 2rem;
      align-items: center;
    }
  }

  .protection {
    margin-top: 40px;
    background: rgba(0,0,0,0.2);
    padding: 25px;
    border-radius: 24px;
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 0.85rem;
    line-height: 1.5;
    color: rgba(255,255,255,0.6);
    border: 1px solid rgba(255,255,255,0.03);
    svg { flex-shrink: 0; color: #C9A84C; }
  }
`,Dw=j.div`
  text-align: center;
  padding: 100px 20px;
  max-width: 600px;
  margin: 0 auto;
  animation: ${Gd} 0.8s ease-out;

  .icon-glow {
    width: 150px;
    height: 150px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 40px;
    color: #C9A84C;
    position: relative;
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    &::after {
      content: '';
      position: absolute;
      width: 100%; height: 100%;
      border: 2px dashed #C9A84C;
      border-radius: 50%;
      animation: rotate 20s linear infinite;
    }
  }

  @keyframes rotate { from { transform: rotate(0); } to { transform: rotate(360deg); } }

  h2 { font-size: 2.5rem; font-weight: 900; color: #0b1a33; margin-bottom: 15px; }
  p { color: #666; font-size: 1.1rem; line-height: 1.6; margin-bottom: 40px; }
`,Ow=()=>{const{language:i}=rt(),r=_e[i].cart,{cart:u,removeFromCart:c,updateQuantity:f,cartTotal:p,clearCart:h}=nr(),v=yn(),y=window.location.hostname==="localhost"?"http://localhost:5001":"",x=()=>{v("/checkout")};return u.length===0?l.jsx($m,{children:l.jsxs(Dw,{children:[l.jsx("div",{className:"icon-glow",children:l.jsx(Xo,{size:60})}),l.jsx("h2",{children:r.empty.title}),l.jsx("p",{children:r.empty.desc}),l.jsx(Qe,{as:qe,to:"/",size:"large",children:r.empty.button})]})}):l.jsx($m,{children:l.jsxs(Je,{children:[l.jsxs(Tw,{children:[l.jsx("div",{className:"breadcrumb",children:r.breadcrumb.split(" ").map((b,g)=>g===r.breadcrumb.split(" ").length-1?l.jsx("span",{className:"active",children:b},g):b==="/"?l.jsx("span",{children:"/"},g):b+" ")}),l.jsx("h1",{children:r.title})]}),l.jsxs(Nw,{children:[l.jsx(_w,{children:u.map(b=>l.jsxs(Rw,{children:[l.jsx("div",{className:"img-box",children:l.jsx("img",{src:b.image?`${y}${b.image}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:b.name})}),l.jsxs("div",{className:"info",children:[l.jsx("h4",{children:b.name}),l.jsxs("div",{className:"badge",children:[l.jsx(gt,{size:14})," ",r.items.secureId]})]}),l.jsxs("div",{className:"qty-control",children:[l.jsx("button",{onClick:()=>f(b.productId,b.quantity-1),disabled:b.quantity<=1,children:l.jsx(Vo,{size:18})}),l.jsx("span",{children:b.quantity}),l.jsx("button",{onClick:()=>f(b.productId,b.quantity+1),children:l.jsx(Lg,{size:18})})]}),l.jsxs("div",{className:"price",children:["₹",b.price*b.quantity]}),l.jsx("button",{className:"remove",onClick:()=>c(b.productId),children:l.jsx(tj,{size:18})})]},b.productId))}),l.jsxs(Mw,{children:[l.jsxs("h3",{children:[l.jsx(Gi,{})," ",r.summary.title]}),l.jsxs("div",{className:"row",children:[l.jsx("span",{children:r.summary.subtotal}),l.jsxs("span",{children:["₹",p]})]}),l.jsxs("div",{className:"row",children:[l.jsx("span",{children:r.summary.shipping}),l.jsx("span",{style:{color:"#C9A84C"},children:r.summary.shippingFree})]}),l.jsxs("div",{className:"row",children:[l.jsx("span",{children:r.summary.platformFee}),l.jsx("span",{children:"₹0.00"})]}),l.jsxs("div",{className:"row total",children:[l.jsx("span",{children:r.summary.total}),l.jsxs("span",{children:["₹",p]})]}),l.jsxs("button",{onClick:x,style:{width:"100%",marginTop:"35px",padding:"22px",fontSize:"1.1rem",borderRadius:"20px",background:"linear-gradient(135deg, #C9A84C 0%, #D4B86A 100%)",color:"#0b1a33",boxShadow:"0 15px 30px rgba(201,168,76,0.2)",border:"none",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:900,transition:"all 0.3s ease"},children:[r.summary.checkout," ",l.jsx(xd,{size:22,style:{marginLeft:"12px"}})]}),l.jsxs("div",{className:"protection",children:[l.jsx(gt,{size:40}),l.jsx("p",{children:r.summary.protection})]})]})]})]})})},Hw=bt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Bw=j.div`
  padding: 120px 0 80px;
  background: #f8f9fa;
  min-height: 90vh;
  background-image: radial-gradient(circle at 90% 10%, rgba(201, 168, 76, 0.05) 0%, transparent 60%);
`,Uw=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  animation: ${Hw} 0.6s ease-out;
  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`,Lw=j.div`
  background: white;
  padding: 40px;
  border-radius: 32px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.05);

  h2 { 
    font-size: 1.8rem; 
    font-weight: 900; 
    color: #0b1a33; 
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 15px;
    letter-spacing: -0.5px;
  }
`,Ni=j.div`
  margin-bottom: 25px;
  label { 
    display: block; 
    margin-bottom: 8px; 
    font-weight: 800; 
    color: #0b1a33; 
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.6;
  }
  input, textarea {
    width: 100%;
    padding: 15px 20px;
    border: 2px solid #f0f2f5;
    border-radius: 18px;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #f8f9fa;
    color: #0b1a33;
    font-weight: 600;
    &:focus {
      outline: none;
      border-color: #C9A84C;
      background: white;
      box-shadow: 0 10px 30px rgba(201, 168, 76, 0.1);
    }
    &::placeholder { color: #ccc; font-weight: 400; }
  }
`,$w=j.div`
  background: #0b1a33;
  padding: 45px;
  border-radius: 40px;
  color: white;
  height: fit-content;
  position: sticky;
  top: 120px;
  box-shadow: 0 40px 80px rgba(11, 26, 51, 0.3);

  h3 { 
    font-size: 1.8rem; 
    font-weight: 900; 
    margin-bottom: 35px;
    color: #C9A84C;
  }
`,qw=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  .name { 
    font-weight: 700; 
    font-size: 1rem;
    span { opacity: 0.5; margin-left: 10px; font-weight: 400; }
  }
  .price { font-weight: 900; color: white; }
`,Yw=j.div`
  margin-top: 35px;
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    opacity: 0.6;
    font-weight: 600;
    font-size: 0.95rem;
  }
  .grand-total {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 2.2rem;
    font-weight: 900;
    color: #C9A84C;
    letter-spacing: -1px;
  }
`,Gw=j.div`
  margin-top: 40px;
  background: rgba(255,255,255,0.03);
  padding: 30px;
  border-radius: 24px;
  border: 1px solid rgba(201, 168, 76, 0.2);
  
  .title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 900;
    margin-bottom: 12px;
    color: #C9A84C;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  p { font-size: 0.9rem; opacity: 0.5; line-height: 1.6; font-weight: 500; }
`,Qw=()=>{const{language:i}=rt(),r=_e[i].checkout,{cart:u,cartTotal:c,clearCart:f}=nr(),p=yn(),[h,v]=w.useState(!1),[y,x]=w.useState({name:"",email:"",phone:"",address:"",city:"",pincode:""});w.useEffect(()=>{const g=localStorage.getItem("admin_token"),z=localStorage.getItem("user_profile");if(!g){xt.error("Please login to complete your purchase"),p("/login?redirect=checkout");return}if(z)try{const N=JSON.parse(z);x(R=>({...R,name:N.name||"",email:N.email||"",phone:N.phone||""}))}catch(N){console.error("Invalid user profile in localStorage",N)}},[p]);const b=async g=>{if(g&&g.preventDefault(),u.length!==0){v(!0);try{const z={customerName:y.name,customerEmail:y.email,customerPhone:y.phone,shippingAddress:`${y.address}, ${y.city} - ${y.pincode}`,items:u,totalAmount:c},N=await Fe.post("/orders",z);N.data.success&&(f(),p(`/order-success/${N.data.order.orderNumber}`))}catch(z){console.error(z),xt.error(z.response?.data?.error||"Failed to place order")}finally{v(!1)}}};return l.jsx(Bw,{children:l.jsxs(Je,{children:[l.jsx("div",{style:{marginBottom:"40px"},children:l.jsxs("button",{onClick:()=>p("/cart"),style:{background:"none",border:"none",color:"#0b1a33",display:"flex",alignItems:"center",gap:"8px",fontWeight:900,cursor:"pointer",opacity:.6},children:[l.jsx(ss,{size:20})," ",r.returnCart]})}),l.jsxs(Uw,{children:[l.jsx("div",{children:l.jsxs(Lw,{children:[l.jsxs("h2",{children:[l.jsx(ij,{size:32,color:"#C9A84C"})," ",r.title]}),l.jsxs("form",{onSubmit:b,children:[l.jsxs(Ni,{children:[l.jsx("label",{children:r.form.consignee}),l.jsx("input",{required:!0,type:"text",placeholder:r.form.consigneePlaceholder,value:y.name,onChange:g=>x({...y,name:g.target.value})})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"25px"},children:[l.jsxs(Ni,{children:[l.jsx("label",{children:r.form.contact}),l.jsx("input",{required:!0,type:"email",placeholder:r.form.contactPlaceholder,value:y.email,onChange:g=>x({...y,email:g.target.value})})]}),l.jsxs(Ni,{children:[l.jsx("label",{children:r.form.phone}),l.jsx("input",{required:!0,type:"tel",placeholder:r.form.phonePlaceholder,value:y.phone,onChange:g=>x({...y,phone:g.target.value})})]})]}),l.jsxs(Ni,{children:[l.jsx("label",{children:r.form.address}),l.jsx("textarea",{required:!0,rows:4,placeholder:r.form.addressPlaceholder,value:y.address,onChange:g=>x({...y,address:g.target.value})})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"25px"},children:[l.jsxs(Ni,{children:[l.jsx("label",{children:r.form.city}),l.jsx("input",{required:!0,type:"text",placeholder:r.form.cityPlaceholder,value:y.city,onChange:g=>x({...y,city:g.target.value})})]}),l.jsxs(Ni,{children:[l.jsx("label",{children:r.form.pincode}),l.jsx("input",{required:!0,type:"text",placeholder:r.form.pincodePlaceholder,value:y.pincode,onChange:g=>x({...y,pincode:g.target.value})})]})]})]})]})}),l.jsxs($w,{children:[l.jsx("h3",{children:r.summary.title}),u.map(g=>l.jsxs(qw,{children:[l.jsxs("div",{className:"name",children:[g.name," ",l.jsxs("span",{children:["x ",g.quantity]})]}),l.jsxs("div",{className:"price",children:["₹",g.price*g.quantity]})]},g.productId)),l.jsxs(Yw,{children:[l.jsxs("div",{className:"row",children:[l.jsx("span",{children:r.summary.subtotal}),l.jsxs("span",{children:["₹",c]})]}),l.jsxs("div",{className:"row",children:[l.jsx("span",{children:r.summary.logistics}),l.jsx("span",{style:{color:"#C9A84C"},children:r.summary.complimentary})]}),l.jsxs("div",{className:"grand-total",children:[l.jsx("span",{children:r.summary.total}),l.jsxs("span",{children:["₹",c]})]})]}),l.jsxs(Gw,{children:[l.jsxs("div",{className:"title",children:[l.jsx(I2,{size:20})," ",r.summary.payment.title]}),l.jsx("p",{children:r.summary.payment.desc})]}),l.jsxs(Qe,{onClick:b,disabled:h||u.length===0,style:{width:"100%",marginTop:"45px",background:"#C9A84C",color:"#0b1a33",height:"70px",fontSize:"1.3rem",borderRadius:"24px",boxShadow:"0 15px 30px rgba(201, 168, 76, 0.3)"},children:[h?r.summary.submitting:r.summary.submit," ",l.jsx(Ri,{size:24,style:{marginLeft:"10px"}})]}),l.jsxs("div",{style:{marginTop:"35px",display:"flex",alignItems:"center",gap:"12px",justifyContent:"center",opacity:.4,fontSize:"0.85rem",fontWeight:600},children:[l.jsx(gt,{size:18})," ",r.summary.encryption]})]})]})]})})},Vw=bt`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,Xw=bt`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,Kw=j.div`
  padding: 140px 0 100px;
  text-align: center;
  min-height: 90vh;
  background: #f8f9fa;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(39, 174, 96, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(201, 168, 76, 0.03) 0%, transparent 50%);
`,Zw=j.div`
  max-width: 700px;
  margin: 0 auto;
  background: white;
  padding: 80px 50px;
  border-radius: 48px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.06);
  position: relative;
  overflow: hidden;
  animation: ${Vw} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 8px;
    background: linear-gradient(90deg, #27ae60, #2ecc71);
  }
`,Ww=j.div`
  width: 120px;
  height: 120px;
  background: #f0fdf4;
  color: #27ae60;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 40px;
  animation: ${Xw} 3s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(39, 174, 96, 0.1);
`,Jw=j.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0b1a33;
  color: #C9A84C;
  padding: 10px 25px;
  border-radius: 100px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 900;
  font-size: 1.2rem;
  margin-bottom: 40px;
  box-shadow: 0 10px 20px rgba(11, 26, 51, 0.2);
`,Fw=j.div`
  background: #fcfdfe;
  border: 2px dashed #e0e6ed;
  padding: 35px;
  border-radius: 32px;
  margin-bottom: 50px;
  text-align: left;
  
  h4 { 
    color: #0b1a33; 
    font-size: 1.2rem; 
    font-weight: 800; 
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .step {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 0.95rem;
    color: #555;
    font-weight: 600;
    &:last-child { margin-bottom: 0; }
    span { color: #C9A84C; font-weight: 900; }
  }
`,Iw=()=>{const{language:i}=rt(),r=_e[i].orderSuccess,{orderNumber:u}=Pl();return l.jsx(Kw,{children:l.jsx(Je,{children:l.jsxs(Zw,{children:[l.jsx(Ww,{children:l.jsx(X2,{size:60,strokeWidth:3})}),l.jsxs("h1",{style:{fontSize:"3rem",fontWeight:900,color:"#0b1a33",marginBottom:"15px",letterSpacing:"-1px"},children:[r.title.split(" ")[0]," ",l.jsx("span",{style:{color:"#27ae60"},children:r.title.split(" ").slice(1).join(" ")})]}),l.jsx("p",{style:{color:"#666",fontSize:"1.2rem",marginBottom:"30px",fontWeight:500},children:r.subtitle}),l.jsxs(Jw,{children:["#",u]}),l.jsxs(Fw,{children:[l.jsxs("h4",{children:[l.jsx(Po,{size:24,color:"#C9A84C"})," ",r.nextStepsTitle]}),r.steps.map((c,f)=>l.jsxs("div",{className:"step",children:[l.jsxs("span",{children:["0",f+1]})," ",c]},f))]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[l.jsxs(Qe,{as:qe,to:"/",variant:"secondary",style:{height:"60px",borderRadius:"18px"},children:[l.jsx(ss,{size:20,style:{marginRight:"10px"}})," ",r.returnHome]}),l.jsxs(Qe,{as:qe,to:"/dashboard",style:{height:"60px",borderRadius:"18px",background:"#C9A84C",color:"#0b1a33"},children:[r.dashboard," ",l.jsx(Q5,{size:20,style:{marginLeft:"10px"}})]})]}),l.jsxs("div",{style:{marginTop:"50px",borderTop:"1px solid #eee",paddingTop:"30px",display:"flex",justifyContent:"center",gap:"30px",opacity:.5},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",fontWeight:700},children:[l.jsx(gt,{size:16})," ",r.secure]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",fontWeight:700},children:[l.jsx(Mg,{size:16})," ",r.downloadInvoice]})]})]})})})};class Pw extends w.Component{constructor(r){super(r),this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,u){console.error("ErrorBoundary caught an error",r,u)}render(){return this.state.hasError?l.jsxs("div",{style:{padding:"40px",textAlign:"center",background:"#0B1A33",color:"#fff",height:"100vh"},children:[l.jsx("h1",{children:"Something went wrong."}),l.jsx("p",{children:this.state.error?.message}),l.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"10px 20px",background:"#C9A84C",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Reload Page"})]}):this.props.children}}function e8(){return l.jsx(Pw,{children:l.jsxs(g2,{theme:j2,children:[l.jsx(v2,{}),l.jsx(gj,{children:l.jsx(mj,{children:l.jsxs(ov,{children:[l.jsx(kw,{}),l.jsxs(Bb,{children:[l.jsxs(Ke,{path:"/",element:l.jsx(Dj,{}),children:[l.jsx(Ke,{index:!0,element:l.jsx($3,{})}),l.jsx(Ke,{path:"smart-qr",element:l.jsx(Z3,{})}),l.jsx(Ke,{path:"cloud-monitoring",element:l.jsx(a4,{})}),l.jsx(Ke,{path:"social-initiative",element:l.jsx(o4,{})}),l.jsx(Ke,{path:"b2b-solutions",element:l.jsx(Ew,{})}),l.jsx(Ke,{path:"category/:id",element:l.jsx(JS,{})}),l.jsx(Ke,{path:"product/:id",element:l.jsx(sw,{})}),l.jsx(Ke,{path:"cart",element:l.jsx(Ow,{})}),l.jsx(Ke,{path:"shop",element:l.jsx(m4,{})}),l.jsx(Ke,{path:"checkout",element:l.jsx(Qw,{})}),l.jsx(Ke,{path:"order-success/:orderNumber",element:l.jsx(Iw,{})}),l.jsx(Ke,{path:"service/:slug",element:l.jsx(gw,{})}),l.jsx(Ke,{path:"about",element:l.jsx(id,{title:"About Us",settingKey:"about_content"})}),l.jsx(Ke,{path:"privacy",element:l.jsx(id,{title:"Privacy Policy",settingKey:"privacy_policy_content"})}),l.jsx(Ke,{path:"terms",element:l.jsx(id,{title:"Terms & Conditions",settingKey:"terms_conditions_content"})}),l.jsx(Ke,{path:"login",element:l.jsx(j4,{})}),l.jsx(Ke,{path:"signup",element:l.jsx(E4,{})})]}),l.jsx(Ke,{path:"/dashboard",element:l.jsx(tS,{})}),l.jsx(Ke,{path:"/admin/dashboard",element:l.jsx($4,{})}),l.jsx(Ke,{path:"/scan/:id",element:l.jsx(jS,{})})]})]})})})]})})}By.createRoot(document.getElementById("root")).render(l.jsx(w.StrictMode,{children:l.jsx(e8,{})}));
