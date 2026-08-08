(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function c(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(d){if(d.ep)return;d.ep=!0;const f=c(d);fetch(d.href,f)}})();function bv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var dd={exports:{}},el={};var Km;function vv(){if(Km)return el;Km=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function c(s,d,f){var p=null;if(f!==void 0&&(p=""+f),d.key!==void 0&&(p=""+d.key),"key"in d){f={};for(var x in d)x!=="key"&&(f[x]=d[x])}else f=d;return d=f.ref,{$$typeof:a,type:s,key:p,ref:d!==void 0?d:null,props:f}}return el.Fragment=l,el.jsx=c,el.jsxs=c,el}var Pm;function jv(){return Pm||(Pm=1,dd.exports=vv()),dd.exports}var i=jv(),fd={exports:{}},fe={};var Fm;function wv(){if(Fm)return fe;Fm=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),k=Symbol.iterator;function D(C){return C===null||typeof C!="object"?null:(C=k&&C[k]||C["@@iterator"],typeof C=="function"?C:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,E={};function N(C,q,Z){this.props=C,this.context=q,this.refs=E,this.updater=Z||A}N.prototype.isReactComponent={},N.prototype.setState=function(C,q){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,q,"setState")},N.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function $(){}$.prototype=N.prototype;function K(C,q,Z){this.props=C,this.context=q,this.refs=E,this.updater=Z||A}var P=K.prototype=new $;P.constructor=K,R(P,N.prototype),P.isPureReactComponent=!0;var ee=Array.isArray;function J(){}var Q={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function he(C,q,Z){var te=Z.ref;return{$$typeof:a,type:C,key:q,ref:te!==void 0?te:null,props:Z}}function ye(C,q){return he(C.type,q,C.props)}function de(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function ze(C){var q={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(Z){return q[Z]})}var Le=/\/+/g;function Ye(C,q){return typeof C=="object"&&C!==null&&C.key!=null?ze(""+C.key):q.toString(36)}function nt(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(J,J):(C.status="pending",C.then(function(q){C.status==="pending"&&(C.status="fulfilled",C.value=q)},function(q){C.status==="pending"&&(C.status="rejected",C.reason=q)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function H(C,q,Z,te,L){var G=typeof C;(G==="undefined"||G==="boolean")&&(C=null);var le=!1;if(C===null)le=!0;else switch(G){case"bigint":case"string":case"number":le=!0;break;case"object":switch(C.$$typeof){case a:case l:le=!0;break;case y:return le=C._init,H(le(C._payload),q,Z,te,L)}}if(le)return L=L(C),le=te===""?"."+Ye(C,0):te,ee(L)?(Z="",le!=null&&(Z=le.replace(Le,"$&/")+"/"),H(L,q,Z,"",function($e){return $e})):L!=null&&(de(L)&&(L=ye(L,Z+(L.key==null||C&&C.key===L.key?"":(""+L.key).replace(Le,"$&/")+"/")+le)),q.push(L)),1;le=0;var me=te===""?".":te+":";if(ee(C))for(var pe=0;pe<C.length;pe++)te=C[pe],G=me+Ye(te,pe),le+=H(te,q,Z,G,L);else if(pe=D(C),typeof pe=="function")for(C=pe.call(C),pe=0;!(te=C.next()).done;)te=te.value,G=me+Ye(te,pe++),le+=H(te,q,Z,G,L);else if(G==="object"){if(typeof C.then=="function")return H(nt(C),q,Z,te,L);throw q=String(C),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return le}function W(C,q,Z){if(C==null)return C;var te=[],L=0;return H(C,te,"","",function(G){return q.call(Z,G,L++)}),te}function ae(C){if(C._status===-1){var q=C._result;q=q(),q.then(function(Z){(C._status===0||C._status===-1)&&(C._status=1,C._result=Z)},function(Z){(C._status===0||C._status===-1)&&(C._status=2,C._result=Z)}),C._status===-1&&(C._status=0,C._result=q)}if(C._status===1)return C._result.default;throw C._result}var ce=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ve={map:W,forEach:function(C,q,Z){W(C,function(){q.apply(this,arguments)},Z)},count:function(C){var q=0;return W(C,function(){q++}),q},toArray:function(C){return W(C,function(q){return q})||[]},only:function(C){if(!de(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return fe.Activity=v,fe.Children=ve,fe.Component=N,fe.Fragment=c,fe.Profiler=d,fe.PureComponent=K,fe.StrictMode=s,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,fe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return Q.H.useMemoCache(C)}},fe.cache=function(C){return function(){return C.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(C,q,Z){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var te=R({},C.props),L=C.key;if(q!=null)for(G in q.key!==void 0&&(L=""+q.key),q)!F.call(q,G)||G==="key"||G==="__self"||G==="__source"||G==="ref"&&q.ref===void 0||(te[G]=q[G]);var G=arguments.length-2;if(G===1)te.children=Z;else if(1<G){for(var le=Array(G),me=0;me<G;me++)le[me]=arguments[me+2];te.children=le}return he(C.type,L,te)},fe.createContext=function(C){return C={$$typeof:p,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},fe.createElement=function(C,q,Z){var te,L={},G=null;if(q!=null)for(te in q.key!==void 0&&(G=""+q.key),q)F.call(q,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(L[te]=q[te]);var le=arguments.length-2;if(le===1)L.children=Z;else if(1<le){for(var me=Array(le),pe=0;pe<le;pe++)me[pe]=arguments[pe+2];L.children=me}if(C&&C.defaultProps)for(te in le=C.defaultProps,le)L[te]===void 0&&(L[te]=le[te]);return he(C,G,L)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(C){return{$$typeof:x,render:C}},fe.isValidElement=de,fe.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:ae}},fe.memo=function(C,q){return{$$typeof:g,type:C,compare:q===void 0?null:q}},fe.startTransition=function(C){var q=Q.T,Z={};Q.T=Z;try{var te=C(),L=Q.S;L!==null&&L(Z,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(J,ce)}catch(G){ce(G)}finally{q!==null&&Z.types!==null&&(q.types=Z.types),Q.T=q}},fe.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},fe.use=function(C){return Q.H.use(C)},fe.useActionState=function(C,q,Z){return Q.H.useActionState(C,q,Z)},fe.useCallback=function(C,q){return Q.H.useCallback(C,q)},fe.useContext=function(C){return Q.H.useContext(C)},fe.useDebugValue=function(){},fe.useDeferredValue=function(C,q){return Q.H.useDeferredValue(C,q)},fe.useEffect=function(C,q){return Q.H.useEffect(C,q)},fe.useEffectEvent=function(C){return Q.H.useEffectEvent(C)},fe.useId=function(){return Q.H.useId()},fe.useImperativeHandle=function(C,q,Z){return Q.H.useImperativeHandle(C,q,Z)},fe.useInsertionEffect=function(C,q){return Q.H.useInsertionEffect(C,q)},fe.useLayoutEffect=function(C,q){return Q.H.useLayoutEffect(C,q)},fe.useMemo=function(C,q){return Q.H.useMemo(C,q)},fe.useOptimistic=function(C,q){return Q.H.useOptimistic(C,q)},fe.useReducer=function(C,q,Z){return Q.H.useReducer(C,q,Z)},fe.useRef=function(C){return Q.H.useRef(C)},fe.useState=function(C){return Q.H.useState(C)},fe.useSyncExternalStore=function(C,q,Z){return Q.H.useSyncExternalStore(C,q,Z)},fe.useTransition=function(){return Q.H.useTransition()},fe.version="19.2.4",fe}var Wm;function bf(){return Wm||(Wm=1,fd.exports=wv()),fd.exports}var S=bf();const tt=bv(S);var pd={exports:{}},tl={},hd={exports:{}},md={};var Xm;function Sv(){return Xm||(Xm=1,(function(a){function l(H,W){var ae=H.length;H.push(W);e:for(;0<ae;){var ce=ae-1>>>1,ve=H[ce];if(0<d(ve,W))H[ce]=W,H[ae]=ve,ae=ce;else break e}}function c(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var W=H[0],ae=H.pop();if(ae!==W){H[0]=ae;e:for(var ce=0,ve=H.length,C=ve>>>1;ce<C;){var q=2*(ce+1)-1,Z=H[q],te=q+1,L=H[te];if(0>d(Z,ae))te<ve&&0>d(L,Z)?(H[ce]=L,H[te]=ae,ce=te):(H[ce]=Z,H[q]=ae,ce=q);else if(te<ve&&0>d(L,ae))H[ce]=L,H[te]=ae,ce=te;else break e}}return W}function d(H,W){var ae=H.sortIndex-W.sortIndex;return ae!==0?ae:H.id-W.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,x=p.now();a.unstable_now=function(){return p.now()-x}}var m=[],g=[],y=1,v=null,k=3,D=!1,A=!1,R=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function P(H){for(var W=c(g);W!==null;){if(W.callback===null)s(g);else if(W.startTime<=H)s(g),W.sortIndex=W.expirationTime,l(m,W);else break;W=c(g)}}function ee(H){if(R=!1,P(H),!A)if(c(m)!==null)A=!0,J||(J=!0,ze());else{var W=c(g);W!==null&&nt(ee,W.startTime-H)}}var J=!1,Q=-1,F=5,he=-1;function ye(){return E?!0:!(a.unstable_now()-he<F)}function de(){if(E=!1,J){var H=a.unstable_now();he=H;var W=!0;try{e:{A=!1,R&&(R=!1,$(Q),Q=-1),D=!0;var ae=k;try{t:{for(P(H),v=c(m);v!==null&&!(v.expirationTime>H&&ye());){var ce=v.callback;if(typeof ce=="function"){v.callback=null,k=v.priorityLevel;var ve=ce(v.expirationTime<=H);if(H=a.unstable_now(),typeof ve=="function"){v.callback=ve,P(H),W=!0;break t}v===c(m)&&s(m),P(H)}else s(m);v=c(m)}if(v!==null)W=!0;else{var C=c(g);C!==null&&nt(ee,C.startTime-H),W=!1}}break e}finally{v=null,k=ae,D=!1}W=void 0}}finally{W?ze():J=!1}}}var ze;if(typeof K=="function")ze=function(){K(de)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Ye=Le.port2;Le.port1.onmessage=de,ze=function(){Ye.postMessage(null)}}else ze=function(){N(de,0)};function nt(H,W){Q=N(function(){H(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return k},a.unstable_next=function(H){switch(k){case 1:case 2:case 3:var W=3;break;default:W=k}var ae=k;k=W;try{return H()}finally{k=ae}},a.unstable_requestPaint=function(){E=!0},a.unstable_runWithPriority=function(H,W){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=k;k=H;try{return W()}finally{k=ae}},a.unstable_scheduleCallback=function(H,W,ae){var ce=a.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ce+ae:ce):ae=ce,H){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ae+ve,H={id:y++,callback:W,priorityLevel:H,startTime:ae,expirationTime:ve,sortIndex:-1},ae>ce?(H.sortIndex=ae,l(g,H),c(m)===null&&H===c(g)&&(R?($(Q),Q=-1):R=!0,nt(ee,ae-ce))):(H.sortIndex=ve,l(m,H),A||D||(A=!0,J||(J=!0,ze()))),H},a.unstable_shouldYield=ye,a.unstable_wrapCallback=function(H){var W=k;return function(){var ae=k;k=W;try{return H.apply(this,arguments)}finally{k=ae}}}})(md)),md}var Zm;function Cv(){return Zm||(Zm=1,hd.exports=Sv()),hd.exports}var gd={exports:{}},At={};var Jm;function Av(){if(Jm)return At;Jm=1;var a=bf();function l(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(l(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(m,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:v==null?null:""+v,children:m,containerInfo:g,implementation:y}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,At.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(l(299));return f(m,g,null,y)},At.flushSync=function(m){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,m)return m()}finally{p.T=g,s.p=y,s.d.f()}},At.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},At.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},At.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,v=x(y,g.crossOrigin),k=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:k,fetchPriority:D}):y==="script"&&s.d.X(m,{crossOrigin:v,integrity:k,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},At.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=x(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},At.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=x(y,g.crossOrigin);s.d.L(m,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},At.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=x(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},At.requestFormReset=function(m){s.d.r(m)},At.unstable_batchedUpdates=function(m,g){return m(g)},At.useFormState=function(m,g,y){return p.H.useFormState(m,g,y)},At.useFormStatus=function(){return p.H.useHostTransitionStatus()},At.version="19.2.4",At}var eg;function Ev(){if(eg)return gd.exports;eg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),gd.exports=Av(),gd.exports}var tg;function zv(){if(tg)return tl;tg=1;var a=Cv(),l=bf(),c=Ev();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return m(o),e;if(u===r)return m(o),t;u=u.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=u;else{for(var h=!1,b=o.child;b;){if(b===n){h=!0,n=o,r=u;break}if(b===r){h=!0,r=o,n=u;break}b=b.sibling}if(!h){for(b=u.child;b;){if(b===n){h=!0,n=u,r=o;break}if(b===r){h=!0,r=u,n=o;break}b=b.sibling}if(!h)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,k=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),K=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function ze(e){return e===null||typeof e!="object"?null:(e=de&&e[de]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Symbol.for("react.client.reference");function Ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case N:return"Profiler";case E:return"StrictMode";case ee:return"Suspense";case J:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case K:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:Ye(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return Ye(e(t))}catch{}}return null}var nt=Array.isArray,H=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},ce=[],ve=-1;function C(e){return{current:e}}function q(e){0>ve||(e.current=ce[ve],ce[ve]=null,ve--)}function Z(e,t){ve++,ce[ve]=e.current,e.current=t}var te=C(null),L=C(null),G=C(null),le=C(null);function me(e,t){switch(Z(G,t),Z(L,e),Z(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gm(t),e=xm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(te),Z(te,e)}function pe(){q(te),q(L),q(G)}function $e(e){e.memoizedState!==null&&Z(le,e);var t=te.current,n=xm(t,e.type);t!==n&&(Z(L,e),Z(te,n))}function se(e){L.current===e&&(q(te),q(L)),le.current===e&&(q(le),Wr._currentValue=ae)}var ke,Ct;function ht(e){if(ke===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ke=t&&t[1]||"",Ct=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+e+Ct}var Ft=!1;function or(e,t){if(!e||Ft)return"";Ft=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(U){var M=U}Reflect.construct(e,[],I)}else{try{I.call()}catch(U){M=U}e.call(I.prototype)}}else{try{throw Error()}catch(U){M=U}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(U){if(U&&M&&typeof U.stack=="string")return[U.stack,M.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),h=u[0],b=u[1];if(h&&b){var w=h.split(`
`),O=b.split(`
`);for(o=r=0;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;for(;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;if(r===w.length||o===O.length)for(r=w.length-1,o=O.length-1;1<=r&&0<=o&&w[r]!==O[o];)o--;for(;1<=r&&0<=o;r--,o--)if(w[r]!==O[o]){if(r!==1||o!==1)do if(r--,o--,0>o||w[r]!==O[o]){var Y=`
`+w[r].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=r&&0<=o);break}}}finally{Ft=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ht(n):""}function W1(e,t){switch(e.tag){case 26:case 27:case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return e.child!==t&&t!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return or(e.type,!1);case 11:return or(e.type.render,!1);case 1:return or(e.type,!0);case 31:return ht("Activity");default:return""}}function Kf(e){try{var t="",n=null;do t+=W1(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ws=Object.prototype.hasOwnProperty,Xs=a.unstable_scheduleCallback,Zs=a.unstable_cancelCallback,X1=a.unstable_shouldYield,Z1=a.unstable_requestPaint,Ut=a.unstable_now,J1=a.unstable_getCurrentPriorityLevel,Pf=a.unstable_ImmediatePriority,Ff=a.unstable_UserBlockingPriority,Rl=a.unstable_NormalPriority,ey=a.unstable_LowPriority,Wf=a.unstable_IdlePriority,ty=a.log,ny=a.unstable_setDisableYieldValue,sr=null,Lt=null;function Jn(e){if(typeof ty=="function"&&ny(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(sr,e)}catch{}}var $t=Math.clz32?Math.clz32:ry,ay=Math.log,iy=Math.LN2;function ry(e){return e>>>=0,e===0?32:31-(ay(e)/iy|0)|0}var _l=256,Ol=262144,Ml=4194304;function _a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dl(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var o=0,u=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~u,r!==0?o=_a(r):(h&=b,h!==0?o=_a(h):n||(n=b&~e,n!==0&&(o=_a(n))))):(b=r&~u,b!==0?o=_a(b):h!==0?o=_a(h):n||(n=r&~e,n!==0&&(o=_a(n)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:o}function cr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ly(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xf(){var e=Ml;return Ml<<=1,(Ml&62914560)===0&&(Ml=4194304),e}function Js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function oy(e,t,n,r,o,u){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,w=e.expirationTimes,O=e.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-$t(n),I=1<<Y;b[Y]=0,w[Y]=-1;var M=O[Y];if(M!==null)for(O[Y]=null,Y=0;Y<M.length;Y++){var U=M[Y];U!==null&&(U.lane&=-536870913)}n&=~I}r!==0&&Zf(e,r,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(h&~t))}function Zf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-$t(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Jf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$t(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function ep(e,t){var n=t&-t;return n=(n&42)!==0?1:ec(n),(n&(e.suspendedLanes|t))!==0?0:n}function ec(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tp(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:$m(e.type))}function np(e,t){var n=W.p;try{return W.p=e,t()}finally{W.p=n}}var ea=Math.random().toString(36).slice(2),yt="__reactFiber$"+ea,Tt="__reactProps$"+ea,ri="__reactContainer$"+ea,nc="__reactEvents$"+ea,sy="__reactListeners$"+ea,cy="__reactHandles$"+ea,ap="__reactResources$"+ea,dr="__reactMarker$"+ea;function ac(e){delete e[yt],delete e[Tt],delete e[nc],delete e[sy],delete e[cy]}function li(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ri]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cm(e);e!==null;){if(n=e[yt])return n;e=Cm(e)}return t}e=n,n=e.parentNode}return null}function oi(e){if(e=e[yt]||e[ri]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function si(e){var t=e[ap];return t||(t=e[ap]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function mt(e){e[dr]=!0}var ip=new Set,rp={};function Oa(e,t){ci(e,t),ci(e+"Capture",t)}function ci(e,t){for(rp[e]=t,e=0;e<t.length;e++)ip.add(t[e])}var uy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lp={},op={};function dy(e){return Ws.call(op,e)?!0:Ws.call(lp,e)?!1:uy.test(e)?op[e]=!0:(lp[e]=!0,!1)}function Hl(e,t,n){if(dy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Bl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Tn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fy(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(h){n=""+h,u.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ic(e){if(!e._valueTracker){var t=sp(e)?"checked":"value";e._valueTracker=fy(e,t,""+e[t])}}function cp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var py=/[\n"\\]/g;function Xt(e){return e.replace(py,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function rc(e,t,n,r,o,u,h,b){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Wt(t)):e.value!==""+Wt(t)&&(e.value=""+Wt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?lc(e,h,Wt(t)):n!=null?lc(e,h,Wt(n)):r!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Wt(b):e.removeAttribute("name")}function up(e,t,n,r,o,u,h,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ic(e);return}n=n!=null?""+Wt(n):"",t=t!=null?""+Wt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),ic(e)}function lc(e,t,n){t==="number"&&Ul(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ui(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function dp(e,t,n){if(t!=null&&(t=""+Wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Wt(n):""}function fp(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(nt(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Wt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),ic(e)}function di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pp(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||hy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function hp(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&pp(e,o,r)}else for(var u in t)t.hasOwnProperty(u)&&pp(e,u,t[u])}function oc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var my=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(e){return gy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nn(){}var sc=null;function cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fi=null,pi=null;function mp(e){var t=oi(e);if(t&&(e=t.stateNode)){var n=e[Tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(rc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[Tt]||null;if(!o)throw Error(s(90));rc(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&cp(r)}break e;case"textarea":dp(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ui(e,!!n.multiple,t,!1)}}}var uc=!1;function gp(e,t,n){if(uc)return e(t,n);uc=!0;try{var r=e(t);return r}finally{if(uc=!1,(fi!==null||pi!==null)&&(zo(),fi&&(t=fi,e=pi,pi=fi=null,mp(t),e)))for(t=0;t<e.length;t++)mp(e[t])}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Tt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dc=!1;if(Rn)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){dc=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{dc=!1}var ta=null,fc=null,$l=null;function xp(){if($l)return $l;var e,t=fc,n=t.length,r,o="value"in ta?ta.value:ta.textContent,u=o.length;for(e=0;e<n&&t[e]===o[e];e++);var h=n-e;for(r=1;r<=h&&t[n-r]===o[u-r];r++);return $l=o.slice(e,1<r?1-r:void 0)}function ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yl(){return!0}function yp(){return!1}function Nt(e){function t(n,r,o,u,h){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Yl:yp,this.isPropagationStopped=yp,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=Nt(Ma),mr=v({},Ma,{view:0,detail:0}),xy=Nt(mr),pc,hc,gr,Vl=v({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(pc=e.screenX-gr.screenX,hc=e.screenY-gr.screenY):hc=pc=0,gr=e),pc)},movementY:function(e){return"movementY"in e?e.movementY:hc}}),bp=Nt(Vl),yy=v({},Vl,{dataTransfer:0}),by=Nt(yy),vy=v({},mr,{relatedTarget:0}),mc=Nt(vy),jy=v({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),wy=Nt(jy),Sy=v({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cy=Nt(Sy),Ay=v({},Ma,{data:0}),vp=Nt(Ay),Ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ky[e])?!!t[e]:!1}function gc(){return Ty}var Ny=v({},mr,{key:function(e){if(e.key){var t=Ey[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(e){return e.type==="keypress"?ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ry=Nt(Ny),_y=v({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=Nt(_y),Oy=v({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),My=Nt(Oy),Dy=v({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=Nt(Dy),By=v({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=Nt(By),Ly=v({},Ma,{newState:0,oldState:0}),$y=Nt(Ly),qy=[9,13,27,32],xc=Rn&&"CompositionEvent"in window,xr=null;Rn&&"documentMode"in document&&(xr=document.documentMode);var Yy=Rn&&"TextEvent"in window&&!xr,wp=Rn&&(!xc||xr&&8<xr&&11>=xr),Sp=" ",Cp=!1;function Ap(e,t){switch(e){case"keyup":return qy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hi=!1;function Gy(e,t){switch(e){case"compositionend":return Ep(t);case"keypress":return t.which!==32?null:(Cp=!0,Sp);case"textInput":return e=t.data,e===Sp&&Cp?null:e;default:return null}}function Vy(e,t){if(hi)return e==="compositionend"||!xc&&Ap(e,t)?(e=xp(),$l=fc=ta=null,hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wp&&t.locale!=="ko"?null:t.data;default:return null}}var Qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qy[e.type]:t==="textarea"}function kp(e,t,n,r){fi?pi?pi.push(r):pi=[r]:fi=r,t=Mo(t,"onChange"),0<t.length&&(n=new Gl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,br=null;function Iy(e){um(e,0)}function Ql(e){var t=fr(e);if(cp(t))return e}function Tp(e,t){if(e==="change")return t}var Np=!1;if(Rn){var yc;if(Rn){var bc="oninput"in document;if(!bc){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),bc=typeof Rp.oninput=="function"}yc=bc}else yc=!1;Np=yc&&(!document.documentMode||9<document.documentMode)}function _p(){yr&&(yr.detachEvent("onpropertychange",Op),br=yr=null)}function Op(e){if(e.propertyName==="value"&&Ql(br)){var t=[];kp(t,br,e,cc(e)),gp(Iy,t)}}function Ky(e,t,n){e==="focusin"?(_p(),yr=t,br=n,yr.attachEvent("onpropertychange",Op)):e==="focusout"&&_p()}function Py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(br)}function Fy(e,t){if(e==="click")return Ql(t)}function Wy(e,t){if(e==="input"||e==="change")return Ql(t)}function Xy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Xy;function vr(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ws.call(t,o)||!qt(e[o],t[o]))return!1}return!0}function Mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dp(e,t){var n=Mp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mp(n)}}function Hp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ul(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ul(e.document)}return t}function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Zy=Rn&&"documentMode"in document&&11>=document.documentMode,mi=null,jc=null,jr=null,wc=!1;function Up(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wc||mi==null||mi!==Ul(r)||(r=mi,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&vr(jr,r)||(jr=r,r=Mo(jc,"onSelect"),0<r.length&&(t=new Gl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mi)))}function Da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gi={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Sc={},Lp={};Rn&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Ha(e){if(Sc[e])return Sc[e];if(!gi[e])return e;var t=gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lp)return Sc[e]=t[n];return e}var $p=Ha("animationend"),qp=Ha("animationiteration"),Yp=Ha("animationstart"),Jy=Ha("transitionrun"),eb=Ha("transitionstart"),tb=Ha("transitioncancel"),Gp=Ha("transitionend"),Vp=new Map,Cc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cc.push("scrollEnd");function dn(e,t){Vp.set(e,t),Oa(t,[e])}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],xi=0,Ac=0;function Kl(){for(var e=xi,t=Ac=xi=0;t<e;){var n=Zt[t];Zt[t++]=null;var r=Zt[t];Zt[t++]=null;var o=Zt[t];Zt[t++]=null;var u=Zt[t];if(Zt[t++]=null,r!==null&&o!==null){var h=r.pending;h===null?o.next=o:(o.next=h.next,h.next=o),r.pending=o}u!==0&&Qp(n,o,u)}}function Pl(e,t,n,r){Zt[xi++]=e,Zt[xi++]=t,Zt[xi++]=n,Zt[xi++]=r,Ac|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ec(e,t,n,r){return Pl(e,t,n,r),Fl(e)}function Ba(e,t){return Pl(e,null,null,t),Fl(e)}function Qp(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var o=!1,u=e.return;u!==null;)u.childLanes|=n,r=u.alternate,r!==null&&(r.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-$t(n),e=u.hiddenUpdates,r=e[o],r===null?e[o]=[t]:r.push(t),t.lane=n|536870912),u):null}function Fl(e){if(50<Gr)throw Gr=0,Du=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yi={};function nb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,n,r){return new nb(e,t,n,r)}function zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var n=e.alternate;return n===null?(n=Yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ip(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wl(e,t,n,r,o,u){var h=0;if(r=e,typeof e=="function")zc(e)&&(h=1);else if(typeof e=="string")h=ov(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=Yt(31,n,t,o),e.elementType=he,e.lanes=u,e;case R:return Ua(n.children,o,u,t);case E:h=8,o|=24;break;case N:return e=Yt(12,n,t,o|2),e.elementType=N,e.lanes=u,e;case ee:return e=Yt(13,n,t,o),e.elementType=ee,e.lanes=u,e;case J:return e=Yt(19,n,t,o),e.elementType=J,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:h=10;break e;case $:h=9;break e;case P:h=11;break e;case Q:h=14;break e;case F:h=16,r=null;break e}h=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=Yt(h,n,t,o),t.elementType=e,t.type=r,t.lanes=u,t}function Ua(e,t,n,r){return e=Yt(7,e,r,t),e.lanes=n,e}function kc(e,t,n){return e=Yt(6,e,null,t),e.lanes=n,e}function Kp(e){var t=Yt(18,null,null,0);return t.stateNode=e,t}function Tc(e,t,n){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pp=new WeakMap;function Jt(e,t){if(typeof e=="object"&&e!==null){var n=Pp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Kf(t)},Pp.set(e,t),t)}return{value:e,source:t,stack:Kf(t)}}var bi=[],vi=0,Xl=null,wr=0,en=[],tn=0,na=null,yn=1,bn="";function On(e,t){bi[vi++]=wr,bi[vi++]=Xl,Xl=e,wr=t}function Fp(e,t,n){en[tn++]=yn,en[tn++]=bn,en[tn++]=na,na=e;var r=yn;e=bn;var o=32-$t(r)-1;r&=~(1<<o),n+=1;var u=32-$t(t)+o;if(30<u){var h=o-o%5;u=(r&(1<<h)-1).toString(32),r>>=h,o-=h,yn=1<<32-$t(t)+o|n<<o|r,bn=u+e}else yn=1<<u|n<<o|r,bn=e}function Nc(e){e.return!==null&&(On(e,1),Fp(e,1,0))}function Rc(e){for(;e===Xl;)Xl=bi[--vi],bi[vi]=null,wr=bi[--vi],bi[vi]=null;for(;e===na;)na=en[--tn],en[tn]=null,bn=en[--tn],en[tn]=null,yn=en[--tn],en[tn]=null}function Wp(e,t){en[tn++]=yn,en[tn++]=bn,en[tn++]=na,yn=t.id,bn=t.overflow,na=e}var bt=null,Ge=null,Ee=!1,aa=null,nn=!1,_c=Error(s(519));function ia(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sr(Jt(t,e)),_c}function Xp(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[yt]=e,t[Tt]=r,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<Qr.length;n++)we(Qr[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),up(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),fp(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||hm(t.textContent,n)?(r.popover!=null&&(we("beforetoggle",t),we("toggle",t)),r.onScroll!=null&&we("scroll",t),r.onScrollEnd!=null&&we("scrollend",t),r.onClick!=null&&(t.onclick=Nn),t=!0):t=!1,t||ia(e,!0)}function Zp(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:bt=bt.return}}function ji(e){if(e!==bt)return!1;if(!Ee)return Zp(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Wu(e.type,e.memoizedProps)),n=!n),n&&Ge&&ia(e),Zp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ge=Sm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ge=Sm(e)}else t===27?(t=Ge,ya(e.type)?(e=td,td=null,Ge=e):Ge=t):Ge=bt?rn(e.stateNode.nextSibling):null;return!0}function La(){Ge=bt=null,Ee=!1}function Oc(){var e=aa;return e!==null&&(Mt===null?Mt=e:Mt.push.apply(Mt,e),aa=null),e}function Sr(e){aa===null?aa=[e]:aa.push(e)}var Mc=C(null),$a=null,Mn=null;function ra(e,t,n){Z(Mc,t._currentValue),t._currentValue=n}function Dn(e){e._currentValue=Mc.current,q(Mc)}function Dc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hc(e,t,n,r){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var h=o.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=o;for(var w=0;w<t.length;w++)if(b.context===t[w]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),Dc(u.return,n,e),r||(h=null);break e}u=b.next}}else if(o.tag===18){if(h=o.return,h===null)throw Error(s(341));h.lanes|=n,u=h.alternate,u!==null&&(u.lanes|=n),Dc(h,n,e),h=null}else h=o.child;if(h!==null)h.return=o;else for(h=o;h!==null;){if(h===e){h=null;break}if(o=h.sibling,o!==null){o.return=h.return,h=o;break}h=h.return}o=h}}function wi(e,t,n,r){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var h=o.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var b=o.type;qt(o.pendingProps.value,h.value)||(e!==null?e.push(b):e=[b])}}else if(o===le.current){if(h=o.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Wr):e=[Wr])}o=o.return}e!==null&&Hc(t,e,n,r),t.flags|=262144}function Zl(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){$a=e,Mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vt(e){return Jp($a,e)}function Jl(e,t){return $a===null&&qa(e),Jp(e,t)}function Jp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Mn===null){if(e===null)throw Error(s(308));Mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Mn=Mn.next=t;return n}var ab=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ib=a.unstable_scheduleCallback,rb=a.unstable_NormalPriority,lt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bc(){return{controller:new ab,data:new Map,refCount:0}}function Cr(e){e.refCount--,e.refCount===0&&ib(rb,function(){e.controller.abort()})}var Ar=null,Uc=0,Si=0,Ci=null;function lb(e,t){if(Ar===null){var n=Ar=[];Uc=0,Si=qu(),Ci={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Uc++,t.then(eh,eh),t}function eh(){if(--Uc===0&&Ar!==null){Ci!==null&&(Ci.status="fulfilled");var e=Ar;Ar=null,Si=0,Ci=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ob(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(r.status="rejected",r.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),r}var th=H.S;H.S=function(e,t){U0=Ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&lb(e,t),th!==null&&th(e,t)};var Ya=C(null);function Lc(){var e=Ya.current;return e!==null?e:qe.pooledCache}function eo(e,t){t===null?Z(Ya,Ya.current):Z(Ya,t.pool)}function nh(){var e=Lc();return e===null?null:{parent:lt._currentValue,pool:e}}var Ai=Error(s(460)),$c=Error(s(474)),to=Error(s(542)),no={then:function(){}};function ah(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ih(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Nn,Nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lh(e),e;default:if(typeof t.status=="string")t.then(Nn,Nn);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=r}},function(r){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lh(e),e}throw Va=t,Ai}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Va=n,Ai):n}}var Va=null;function rh(){if(Va===null)throw Error(s(459));var e=Va;return Va=null,e}function lh(e){if(e===Ai||e===to)throw Error(s(483))}var Ei=null,Er=0;function ao(e){var t=Er;return Er+=1,Ei===null&&(Ei=[]),ih(Ei,e,t)}function zr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function io(e,t){throw t.$$typeof===k?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function oh(e){function t(T,z){if(e){var _=T.deletions;_===null?(T.deletions=[z],T.flags|=16):_.push(z)}}function n(T,z){if(!e)return null;for(;z!==null;)t(T,z),z=z.sibling;return null}function r(T){for(var z=new Map;T!==null;)T.key!==null?z.set(T.key,T):z.set(T.index,T),T=T.sibling;return z}function o(T,z){return T=_n(T,z),T.index=0,T.sibling=null,T}function u(T,z,_){return T.index=_,e?(_=T.alternate,_!==null?(_=_.index,_<z?(T.flags|=67108866,z):_):(T.flags|=67108866,z)):(T.flags|=1048576,z)}function h(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function b(T,z,_,V){return z===null||z.tag!==6?(z=kc(_,T.mode,V),z.return=T,z):(z=o(z,_),z.return=T,z)}function w(T,z,_,V){var re=_.type;return re===R?Y(T,z,_.props.children,V,_.key):z!==null&&(z.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===F&&Ga(re)===z.type)?(z=o(z,_.props),zr(z,_),z.return=T,z):(z=Wl(_.type,_.key,_.props,null,T.mode,V),zr(z,_),z.return=T,z)}function O(T,z,_,V){return z===null||z.tag!==4||z.stateNode.containerInfo!==_.containerInfo||z.stateNode.implementation!==_.implementation?(z=Tc(_,T.mode,V),z.return=T,z):(z=o(z,_.children||[]),z.return=T,z)}function Y(T,z,_,V,re){return z===null||z.tag!==7?(z=Ua(_,T.mode,V,re),z.return=T,z):(z=o(z,_),z.return=T,z)}function I(T,z,_){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=kc(""+z,T.mode,_),z.return=T,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case D:return _=Wl(z.type,z.key,z.props,null,T.mode,_),zr(_,z),_.return=T,_;case A:return z=Tc(z,T.mode,_),z.return=T,z;case F:return z=Ga(z),I(T,z,_)}if(nt(z)||ze(z))return z=Ua(z,T.mode,_,null),z.return=T,z;if(typeof z.then=="function")return I(T,ao(z),_);if(z.$$typeof===K)return I(T,Jl(T,z),_);io(T,z)}return null}function M(T,z,_,V){var re=z!==null?z.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return re!==null?null:b(T,z,""+_,V);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case D:return _.key===re?w(T,z,_,V):null;case A:return _.key===re?O(T,z,_,V):null;case F:return _=Ga(_),M(T,z,_,V)}if(nt(_)||ze(_))return re!==null?null:Y(T,z,_,V,null);if(typeof _.then=="function")return M(T,z,ao(_),V);if(_.$$typeof===K)return M(T,z,Jl(T,_),V);io(T,_)}return null}function U(T,z,_,V,re){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return T=T.get(_)||null,b(z,T,""+V,re);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case D:return T=T.get(V.key===null?_:V.key)||null,w(z,T,V,re);case A:return T=T.get(V.key===null?_:V.key)||null,O(z,T,V,re);case F:return V=Ga(V),U(T,z,_,V,re)}if(nt(V)||ze(V))return T=T.get(_)||null,Y(z,T,V,re,null);if(typeof V.then=="function")return U(T,z,_,ao(V),re);if(V.$$typeof===K)return U(T,z,_,Jl(z,V),re);io(z,V)}return null}function ne(T,z,_,V){for(var re=null,Te=null,ie=z,xe=z=0,Ae=null;ie!==null&&xe<_.length;xe++){ie.index>xe?(Ae=ie,ie=null):Ae=ie.sibling;var Ne=M(T,ie,_[xe],V);if(Ne===null){ie===null&&(ie=Ae);break}e&&ie&&Ne.alternate===null&&t(T,ie),z=u(Ne,z,xe),Te===null?re=Ne:Te.sibling=Ne,Te=Ne,ie=Ae}if(xe===_.length)return n(T,ie),Ee&&On(T,xe),re;if(ie===null){for(;xe<_.length;xe++)ie=I(T,_[xe],V),ie!==null&&(z=u(ie,z,xe),Te===null?re=ie:Te.sibling=ie,Te=ie);return Ee&&On(T,xe),re}for(ie=r(ie);xe<_.length;xe++)Ae=U(ie,T,xe,_[xe],V),Ae!==null&&(e&&Ae.alternate!==null&&ie.delete(Ae.key===null?xe:Ae.key),z=u(Ae,z,xe),Te===null?re=Ae:Te.sibling=Ae,Te=Ae);return e&&ie.forEach(function(Sa){return t(T,Sa)}),Ee&&On(T,xe),re}function oe(T,z,_,V){if(_==null)throw Error(s(151));for(var re=null,Te=null,ie=z,xe=z=0,Ae=null,Ne=_.next();ie!==null&&!Ne.done;xe++,Ne=_.next()){ie.index>xe?(Ae=ie,ie=null):Ae=ie.sibling;var Sa=M(T,ie,Ne.value,V);if(Sa===null){ie===null&&(ie=Ae);break}e&&ie&&Sa.alternate===null&&t(T,ie),z=u(Sa,z,xe),Te===null?re=Sa:Te.sibling=Sa,Te=Sa,ie=Ae}if(Ne.done)return n(T,ie),Ee&&On(T,xe),re;if(ie===null){for(;!Ne.done;xe++,Ne=_.next())Ne=I(T,Ne.value,V),Ne!==null&&(z=u(Ne,z,xe),Te===null?re=Ne:Te.sibling=Ne,Te=Ne);return Ee&&On(T,xe),re}for(ie=r(ie);!Ne.done;xe++,Ne=_.next())Ne=U(ie,T,xe,Ne.value,V),Ne!==null&&(e&&Ne.alternate!==null&&ie.delete(Ne.key===null?xe:Ne.key),z=u(Ne,z,xe),Te===null?re=Ne:Te.sibling=Ne,Te=Ne);return e&&ie.forEach(function(yv){return t(T,yv)}),Ee&&On(T,xe),re}function Be(T,z,_,V){if(typeof _=="object"&&_!==null&&_.type===R&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case D:e:{for(var re=_.key;z!==null;){if(z.key===re){if(re=_.type,re===R){if(z.tag===7){n(T,z.sibling),V=o(z,_.props.children),V.return=T,T=V;break e}}else if(z.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===F&&Ga(re)===z.type){n(T,z.sibling),V=o(z,_.props),zr(V,_),V.return=T,T=V;break e}n(T,z);break}else t(T,z);z=z.sibling}_.type===R?(V=Ua(_.props.children,T.mode,V,_.key),V.return=T,T=V):(V=Wl(_.type,_.key,_.props,null,T.mode,V),zr(V,_),V.return=T,T=V)}return h(T);case A:e:{for(re=_.key;z!==null;){if(z.key===re)if(z.tag===4&&z.stateNode.containerInfo===_.containerInfo&&z.stateNode.implementation===_.implementation){n(T,z.sibling),V=o(z,_.children||[]),V.return=T,T=V;break e}else{n(T,z);break}else t(T,z);z=z.sibling}V=Tc(_,T.mode,V),V.return=T,T=V}return h(T);case F:return _=Ga(_),Be(T,z,_,V)}if(nt(_))return ne(T,z,_,V);if(ze(_)){if(re=ze(_),typeof re!="function")throw Error(s(150));return _=re.call(_),oe(T,z,_,V)}if(typeof _.then=="function")return Be(T,z,ao(_),V);if(_.$$typeof===K)return Be(T,z,Jl(T,_),V);io(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,z!==null&&z.tag===6?(n(T,z.sibling),V=o(z,_),V.return=T,T=V):(n(T,z),V=kc(_,T.mode,V),V.return=T,T=V),h(T)):n(T,z)}return function(T,z,_,V){try{Er=0;var re=Be(T,z,_,V);return Ei=null,re}catch(ie){if(ie===Ai||ie===to)throw ie;var Te=Yt(29,ie,null,T.mode);return Te.lanes=V,Te.return=T,Te}}}var Qa=oh(!0),sh=oh(!1),la=!1;function qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=Fl(e),Qp(e,null,n),t}return Pl(e,r,t,n),Fl(e)}function kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jf(e,n)}}function Gc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?o=u=h:u=u.next=h,n=n.next}while(n!==null);u===null?o=u=t:u=u.next=t}else o=u=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Vc=!1;function Tr(){if(Vc){var e=Ci;if(e!==null)throw e}}function Nr(e,t,n,r){Vc=!1;var o=e.updateQueue;la=!1;var u=o.firstBaseUpdate,h=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var w=b,O=w.next;w.next=null,h===null?u=O:h.next=O,h=w;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,b=Y.lastBaseUpdate,b!==h&&(b===null?Y.firstBaseUpdate=O:b.next=O,Y.lastBaseUpdate=w))}if(u!==null){var I=o.baseState;h=0,Y=O=w=null,b=u;do{var M=b.lane&-536870913,U=M!==b.lane;if(U?(Ce&M)===M:(r&M)===M){M!==0&&M===Si&&(Vc=!0),Y!==null&&(Y=Y.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ne=e,oe=b;M=t;var Be=n;switch(oe.tag){case 1:if(ne=oe.payload,typeof ne=="function"){I=ne.call(Be,I,M);break e}I=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=oe.payload,M=typeof ne=="function"?ne.call(Be,I,M):ne,M==null)break e;I=v({},I,M);break e;case 2:la=!0}}M=b.callback,M!==null&&(e.flags|=64,U&&(e.flags|=8192),U=o.callbacks,U===null?o.callbacks=[M]:U.push(M))}else U={lane:M,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Y===null?(O=Y=U,w=I):Y=Y.next=U,h|=M;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;U=b,b=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);Y===null&&(w=I),o.baseState=w,o.firstBaseUpdate=O,o.lastBaseUpdate=Y,u===null&&(o.shared.lanes=0),pa|=h,e.lanes=h,e.memoizedState=I}}function ch(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function uh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ch(n[e],t)}var zi=C(null),ro=C(0);function dh(e,t){e=Vn,Z(ro,e),Z(zi,t),Vn=e|t.baseLanes}function Qc(){Z(ro,Vn),Z(zi,zi.current)}function Ic(){Vn=ro.current,q(zi),q(ro)}var Gt=C(null),an=null;function ca(e){var t=e.alternate;Z(at,at.current&1),Z(Gt,e),an===null&&(t===null||zi.current!==null||t.memoizedState!==null)&&(an=e)}function Kc(e){Z(at,at.current),Z(Gt,e),an===null&&(an=e)}function fh(e){e.tag===22?(Z(at,at.current),Z(Gt,e),an===null&&(an=e)):ua()}function ua(){Z(at,at.current),Z(Gt,Gt.current)}function Vt(e){q(Gt),an===e&&(an=null),q(at)}var at=C(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ju(n)||ed(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hn=0,ge=null,De=null,ot=null,oo=!1,ki=!1,Ia=!1,so=0,Rr=0,Ti=null,sb=0;function Xe(){throw Error(s(321))}function Pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function Fc(e,t,n,r,o,u){return Hn=u,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Fh:uu,Ia=!1,u=n(r,o),Ia=!1,ki&&(u=hh(t,n,r,o)),ph(e),u}function ph(e){H.H=Mr;var t=De!==null&&De.next!==null;if(Hn=0,ot=De=ge=null,oo=!1,Rr=0,Ti=null,t)throw Error(s(300));e===null||st||(e=e.dependencies,e!==null&&Zl(e)&&(st=!0))}function hh(e,t,n,r){ge=e;var o=0;do{if(ki&&(Ti=null),Rr=0,ki=!1,25<=o)throw Error(s(301));if(o+=1,ot=De=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}H.H=Wh,u=t(n,r)}while(ki);return u}function cb(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?_r(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ge.flags|=1024),t}function Wc(){var e=so!==0;return so=0,e}function Xc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Zc(e){if(oo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oo=!1}Hn=0,ot=De=ge=null,ki=!1,Rr=so=0,Ti=null}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?ge.memoizedState=ot=e:ot=ot.next=e,ot}function it(){if(De===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=ot===null?ge.memoizedState:ot.next;if(t!==null)ot=t,De=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},ot===null?ge.memoizedState=ot=e:ot=ot.next=e}return ot}function co(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _r(e){var t=Rr;return Rr+=1,Ti===null&&(Ti=[]),e=ih(Ti,e,t),t=ge,(ot===null?t.memoizedState:ot.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Fh:uu),e}function uo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _r(e);if(e.$$typeof===K)return vt(e)}throw Error(s(438,String(e)))}function Jc(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=ge.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=co(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ye;return t.index++,n}function Bn(e,t){return typeof t=="function"?t(e):t}function fo(e){var t=it();return eu(t,De,e)}function eu(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var o=e.baseQueue,u=r.pending;if(u!==null){if(o!==null){var h=o.next;o.next=u.next,u.next=h}t.baseQueue=o=u,r.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var b=h=null,w=null,O=t,Y=!1;do{var I=O.lane&-536870913;if(I!==O.lane?(Ce&I)===I:(Hn&I)===I){var M=O.revertLane;if(M===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),I===Si&&(Y=!0);else if((Hn&M)===M){O=O.next,M===Si&&(Y=!0);continue}else I={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},w===null?(b=w=I,h=u):w=w.next=I,ge.lanes|=M,pa|=M;I=O.action,Ia&&n(u,I),u=O.hasEagerState?O.eagerState:n(u,I)}else M={lane:I,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},w===null?(b=w=M,h=u):w=w.next=M,ge.lanes|=I,pa|=I;O=O.next}while(O!==null&&O!==t);if(w===null?h=u:w.next=b,!qt(u,e.memoizedState)&&(st=!0,Y&&(n=Ci,n!==null)))throw n;e.memoizedState=u,e.baseState=h,e.baseQueue=w,r.lastRenderedState=u}return o===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function tu(e){var t=it(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,u=t.memoizedState;if(o!==null){n.pending=null;var h=o=o.next;do u=e(u,h.action),h=h.next;while(h!==o);qt(u,t.memoizedState)||(st=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function mh(e,t,n){var r=ge,o=it(),u=Ee;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var h=!qt((De||o).memoizedState,n);if(h&&(o.memoizedState=n,st=!0),o=o.queue,iu(yh.bind(null,r,o,e),[e]),o.getSnapshot!==t||h||ot!==null&&ot.memoizedState.tag&1){if(r.flags|=2048,Ni(9,{destroy:void 0},xh.bind(null,r,o,n,t),null),qe===null)throw Error(s(349));u||(Hn&127)!==0||gh(r,t,n)}return n}function gh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=co(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xh(e,t,n,r){t.value=n,t.getSnapshot=r,bh(t)&&vh(e)}function yh(e,t,n){return n(function(){bh(t)&&vh(e)})}function bh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function vh(e){var t=Ba(e,2);t!==null&&Dt(t,e,2)}function nu(e){var t=zt();if(typeof e=="function"){var n=e;if(e=n(),Ia){Jn(!0);try{n()}finally{Jn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:e},t}function jh(e,t,n,r){return e.baseState=n,eu(e,De,typeof r=="function"?r:Bn)}function ub(e,t,n,r,o){if(mo(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};H.T!==null?n(!0):u.isTransition=!1,r(u),n=t.pending,n===null?(u.next=t.pending=u,wh(t,u)):(u.next=n.next,t.pending=n.next=u)}}function wh(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var u=H.T,h={};H.T=h;try{var b=n(o,r),w=H.S;w!==null&&w(h,b),Sh(e,t,b)}catch(O){au(e,t,O)}finally{u!==null&&h.types!==null&&(u.types=h.types),H.T=u}}else try{u=n(o,r),Sh(e,t,u)}catch(O){au(e,t,O)}}function Sh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Ch(e,t,r)},function(r){return au(e,t,r)}):Ch(e,t,n)}function Ch(e,t,n){t.status="fulfilled",t.value=n,Ah(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wh(e,n)))}function au(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Ah(t),t=t.next;while(t!==r)}e.action=null}function Ah(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Eh(e,t){return t}function zh(e,t){if(Ee){var n=qe.formState;if(n!==null){e:{var r=ge;if(Ee){if(Ge){t:{for(var o=Ge,u=nn;o.nodeType!==8;){if(!u){o=null;break t}if(o=rn(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Ge=rn(o.nextSibling),r=o.data==="F!";break e}}ia(r)}r=!1}r&&(t=n[0])}}return n=zt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eh,lastRenderedState:t},n.queue=r,n=Ih.bind(null,ge,r),r.dispatch=n,r=nu(!1),u=cu.bind(null,ge,!1,r.queue),r=zt(),o={state:t,dispatch:null,action:e,pending:null},r.queue=o,n=ub.bind(null,ge,o,u,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function kh(e){var t=it();return Th(t,De,e)}function Th(e,t,n){if(t=eu(e,t,Eh)[0],e=fo(Bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=_r(t)}catch(h){throw h===Ai?to:h}else r=t;t=it();var o=t.queue,u=o.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,Ni(9,{destroy:void 0},db.bind(null,o,n),null)),[r,u,e]}function db(e,t){e.action=t}function Nh(e){var t=it(),n=De;if(n!==null)return Th(t,n,e);it(),t=t.memoizedState,n=it();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ni(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=ge.updateQueue,t===null&&(t=co(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Rh(){return it().memoizedState}function po(e,t,n,r){var o=zt();ge.flags|=e,o.memoizedState=Ni(1|t,{destroy:void 0},n,r===void 0?null:r)}function ho(e,t,n,r){var o=it();r=r===void 0?null:r;var u=o.memoizedState.inst;De!==null&&r!==null&&Pc(r,De.memoizedState.deps)?o.memoizedState=Ni(t,u,n,r):(ge.flags|=e,o.memoizedState=Ni(1|t,u,n,r))}function _h(e,t){po(8390656,8,e,t)}function iu(e,t){ho(2048,8,e,t)}function fb(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=co(),ge.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Oh(e){var t=it().memoizedState;return fb({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Mh(e,t){return ho(4,2,e,t)}function Dh(e,t){return ho(4,4,e,t)}function Hh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bh(e,t,n){n=n!=null?n.concat([e]):null,ho(4,4,Hh.bind(null,t,e),n)}function ru(){}function Uh(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Pc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lh(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Pc(t,r[1]))return r[0];if(r=e(),Ia){Jn(!0);try{e()}finally{Jn(!1)}}return n.memoizedState=[r,t],r}function lu(e,t,n){return n===void 0||(Hn&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=$0(),ge.lanes|=e,pa|=e,n)}function $h(e,t,n,r){return qt(n,t)?n:zi.current!==null?(e=lu(e,n,r),qt(e,t)||(st=!0),e):(Hn&42)===0||(Hn&1073741824)!==0&&(Ce&261930)===0?(st=!0,e.memoizedState=n):(e=$0(),ge.lanes|=e,pa|=e,t)}function qh(e,t,n,r,o){var u=W.p;W.p=u!==0&&8>u?u:8;var h=H.T,b={};H.T=b,cu(e,!1,t,n);try{var w=o(),O=H.S;if(O!==null&&O(b,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var Y=ob(w,r);Or(e,t,Y,Kt(e))}else Or(e,t,r,Kt(e))}catch(I){Or(e,t,{then:function(){},status:"rejected",reason:I},Kt())}finally{W.p=u,h!==null&&b.types!==null&&(h.types=b.types),H.T=h}}function pb(){}function ou(e,t,n,r){if(e.tag!==5)throw Error(s(476));var o=Yh(e).queue;qh(e,o,t,ae,n===null?pb:function(){return Gh(e),n(r)})}function Yh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Gh(e){var t=Yh(e);t.next===null&&(t=e.alternate.memoizedState),Or(e,t.next.queue,{},Kt())}function su(){return vt(Wr)}function Vh(){return it().memoizedState}function Qh(){return it().memoizedState}function hb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Kt();e=oa(n);var r=sa(t,e,n);r!==null&&(Dt(r,t,n),kr(r,t,n)),t={cache:Bc()},e.payload=t;return}t=t.return}}function mb(e,t,n){var r=Kt();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mo(e)?Kh(t,n):(n=Ec(e,t,n,r),n!==null&&(Dt(n,e,r),Ph(n,t,r)))}function Ih(e,t,n){var r=Kt();Or(e,t,n,r)}function Or(e,t,n,r){var o={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mo(e))Kh(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var h=t.lastRenderedState,b=u(h,n);if(o.hasEagerState=!0,o.eagerState=b,qt(b,h))return Pl(e,t,o,0),qe===null&&Kl(),!1}catch{}if(n=Ec(e,t,o,r),n!==null)return Dt(n,e,r),Ph(n,t,r),!0}return!1}function cu(e,t,n,r){if(r={lane:2,revertLane:qu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mo(e)){if(t)throw Error(s(479))}else t=Ec(e,n,r,2),t!==null&&Dt(t,e,2)}function mo(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Kh(e,t){ki=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ph(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jf(e,n)}}var Mr={readContext:vt,use:uo,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};Mr.useEffectEvent=Xe;var Fh={readContext:vt,use:uo,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:_h,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,po(4194308,4,Hh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return po(4194308,4,e,t)},useInsertionEffect:function(e,t){po(4,2,e,t)},useMemo:function(e,t){var n=zt();t=t===void 0?null:t;var r=e();if(Ia){Jn(!0);try{e()}finally{Jn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=zt();if(n!==void 0){var o=n(t);if(Ia){Jn(!0);try{n(t)}finally{Jn(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=mb.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:function(e){e=nu(e);var t=e.queue,n=Ih.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ru,useDeferredValue:function(e,t){var n=zt();return lu(n,e,t)},useTransition:function(){var e=nu(!1);return e=qh.bind(null,ge,e.queue,!0,!1),zt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ge,o=zt();if(Ee){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),qe===null)throw Error(s(349));(Ce&127)!==0||gh(r,t,n)}o.memoizedState=n;var u={value:n,getSnapshot:t};return o.queue=u,_h(yh.bind(null,r,u,e),[e]),r.flags|=2048,Ni(9,{destroy:void 0},xh.bind(null,r,u,n,t),null),n},useId:function(){var e=zt(),t=qe.identifierPrefix;if(Ee){var n=bn,r=yn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=so++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=sb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:su,useFormState:zh,useActionState:zh,useOptimistic:function(e){var t=zt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=cu.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:Jc,useCacheRefresh:function(){return zt().memoizedState=hb.bind(null,ge)},useEffectEvent:function(e){var t=zt(),n={impl:e};return t.memoizedState=n,function(){if((Re&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},uu={readContext:vt,use:uo,useCallback:Uh,useContext:vt,useEffect:iu,useImperativeHandle:Bh,useInsertionEffect:Mh,useLayoutEffect:Dh,useMemo:Lh,useReducer:fo,useRef:Rh,useState:function(){return fo(Bn)},useDebugValue:ru,useDeferredValue:function(e,t){var n=it();return $h(n,De.memoizedState,e,t)},useTransition:function(){var e=fo(Bn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:_r(e),t]},useSyncExternalStore:mh,useId:Vh,useHostTransitionStatus:su,useFormState:kh,useActionState:kh,useOptimistic:function(e,t){var n=it();return jh(n,De,e,t)},useMemoCache:Jc,useCacheRefresh:Qh};uu.useEffectEvent=Oh;var Wh={readContext:vt,use:uo,useCallback:Uh,useContext:vt,useEffect:iu,useImperativeHandle:Bh,useInsertionEffect:Mh,useLayoutEffect:Dh,useMemo:Lh,useReducer:tu,useRef:Rh,useState:function(){return tu(Bn)},useDebugValue:ru,useDeferredValue:function(e,t){var n=it();return De===null?lu(n,e,t):$h(n,De.memoizedState,e,t)},useTransition:function(){var e=tu(Bn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:_r(e),t]},useSyncExternalStore:mh,useId:Vh,useHostTransitionStatus:su,useFormState:Nh,useActionState:Nh,useOptimistic:function(e,t){var n=it();return De!==null?jh(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Jc,useCacheRefresh:Qh};Wh.useEffectEvent=Oh;function du(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Kt(),o=oa(r);o.payload=t,n!=null&&(o.callback=n),t=sa(e,o,r),t!==null&&(Dt(t,e,r),kr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Kt(),o=oa(r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=sa(e,o,r),t!==null&&(Dt(t,e,r),kr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Kt(),r=oa(n);r.tag=2,t!=null&&(r.callback=t),t=sa(e,r,n),t!==null&&(Dt(t,e,n),kr(t,e,n))}};function Xh(e,t,n,r,o,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,h):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(o,u):!0}function Zh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fu.enqueueReplaceState(t,t.state,null)}function Ka(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Jh(e){Il(e)}function e0(e){console.error(e)}function t0(e){Il(e)}function go(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function n0(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function pu(e,t,n){return n=oa(n),n.tag=3,n.payload={element:null},n.callback=function(){go(e,t)},n}function a0(e){return e=oa(e),e.tag=3,e}function i0(e,t,n,r){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var u=r.value;e.payload=function(){return o(u)},e.callback=function(){n0(t,n,r)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){n0(t,n,r),typeof o!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function gb(e,t,n,r,o){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&wi(t,n,o,!0),n=Gt.current,n!==null){switch(n.tag){case 31:case 13:return an===null?ko():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===no?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Uu(e,r,o)),!1;case 22:return n.flags|=65536,r===no?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Uu(e,r,o)),!1}throw Error(s(435,n.tag))}return Uu(e,r,o),ko(),!1}if(Ee)return t=Gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==_c&&(e=Error(s(422),{cause:r}),Sr(Jt(e,n)))):(r!==_c&&(t=Error(s(423),{cause:r}),Sr(Jt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,r=Jt(r,n),o=pu(e.stateNode,r,o),Gc(e,o),Ze!==4&&(Ze=2)),!1;var u=Error(s(520),{cause:r});if(u=Jt(u,n),Yr===null?Yr=[u]:Yr.push(u),Ze!==4&&(Ze=2),t===null)return!0;r=Jt(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=pu(n.stateNode,r,e),Gc(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ha===null||!ha.has(u))))return n.flags|=65536,o&=-o,n.lanes|=o,o=a0(o),i0(o,e,n,r),Gc(n,o),!1}n=n.return}while(n!==null);return!1}var hu=Error(s(461)),st=!1;function jt(e,t,n,r){t.child=e===null?sh(t,null,n,r):Qa(t,e.child,n,r)}function r0(e,t,n,r,o){n=n.render;var u=t.ref;if("ref"in r){var h={};for(var b in r)b!=="ref"&&(h[b]=r[b])}else h=r;return qa(t),r=Fc(e,t,n,h,u,o),b=Wc(),e!==null&&!st?(Xc(e,t,o),Un(e,t,o)):(Ee&&b&&Nc(t),t.flags|=1,jt(e,t,r,o),t.child)}function l0(e,t,n,r,o){if(e===null){var u=n.type;return typeof u=="function"&&!zc(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,o0(e,t,u,r,o)):(e=Wl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!wu(e,o)){var h=u.memoizedProps;if(n=n.compare,n=n!==null?n:vr,n(h,r)&&e.ref===t.ref)return Un(e,t,o)}return t.flags|=1,e=_n(u,r),e.ref=t.ref,e.return=t,t.child=e}function o0(e,t,n,r,o){if(e!==null){var u=e.memoizedProps;if(vr(u,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=u,wu(e,o))(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Un(e,t,o)}return mu(e,t,n,r,o)}function s0(e,t,n,r){var o=r.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(r=t.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;r=o&~u}else r=0,t.child=null;return c0(e,t,u,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&eo(t,u!==null?u.cachePool:null),u!==null?dh(t,u):Qc(),fh(t);else return r=t.lanes=536870912,c0(e,t,u!==null?u.baseLanes|n:n,n,r)}else u!==null?(eo(t,u.cachePool),dh(t,u),ua(),t.memoizedState=null):(e!==null&&eo(t,null),Qc(),ua());return jt(e,t,o,n),t.child}function Dr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function c0(e,t,n,r,o){var u=Lc();return u=u===null?null:{parent:lt._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&eo(t,null),Qc(),fh(t),e!==null&&wi(e,t,r,!0),t.childLanes=o,null}function xo(e,t){return t=bo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function u0(e,t,n){return Qa(t,e.child,null,n),e=xo(t,t.pendingProps),e.flags|=2,Vt(t),t.memoizedState=null,e}function xb(e,t,n){var r=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ee){if(r.mode==="hidden")return e=xo(t,r),t.lanes=536870912,Dr(null,e);if(Kc(t),(e=Ge)?(e=wm(e,nn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:yn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=Kp(e),n.return=t,t.child=n,bt=t,Ge=null)):e=null,e===null)throw ia(t);return t.lanes=536870912,null}return xo(t,r)}var u=e.memoizedState;if(u!==null){var h=u.dehydrated;if(Kc(t),o)if(t.flags&256)t.flags&=-257,t=u0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(st||wi(e,t,n,!1),o=(n&e.childLanes)!==0,st||o){if(r=qe,r!==null&&(h=ep(r,n),h!==0&&h!==u.retryLane))throw u.retryLane=h,Ba(e,h),Dt(r,e,h),hu;ko(),t=u0(e,t,n)}else e=u.treeContext,Ge=rn(h.nextSibling),bt=t,Ee=!0,aa=null,nn=!1,e!==null&&Wp(t,e),t=xo(t,r),t.flags|=4096;return t}return e=_n(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function yo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mu(e,t,n,r,o){return qa(t),n=Fc(e,t,n,r,void 0,o),r=Wc(),e!==null&&!st?(Xc(e,t,o),Un(e,t,o)):(Ee&&r&&Nc(t),t.flags|=1,jt(e,t,n,o),t.child)}function d0(e,t,n,r,o,u){return qa(t),t.updateQueue=null,n=hh(t,r,n,o),ph(e),r=Wc(),e!==null&&!st?(Xc(e,t,u),Un(e,t,u)):(Ee&&r&&Nc(t),t.flags|=1,jt(e,t,n,u),t.child)}function f0(e,t,n,r,o){if(qa(t),t.stateNode===null){var u=yi,h=n.contextType;typeof h=="object"&&h!==null&&(u=vt(h)),u=new n(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=fu,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},qc(t),h=n.contextType,u.context=typeof h=="object"&&h!==null?vt(h):yi,u.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(du(t,n,h,r),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&fu.enqueueReplaceState(u,u.state,null),Nr(t,r,u,o),Tr(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,w=Ka(n,b);u.props=w;var O=u.context,Y=n.contextType;h=yi,typeof Y=="object"&&Y!==null&&(h=vt(Y));var I=n.getDerivedStateFromProps;Y=typeof I=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,Y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||O!==h)&&Zh(t,u,r,h),la=!1;var M=t.memoizedState;u.state=M,Nr(t,r,u,o),Tr(),O=t.memoizedState,b||M!==O||la?(typeof I=="function"&&(du(t,n,I,r),O=t.memoizedState),(w=la||Xh(t,n,w,r,M,O,h))?(Y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=O),u.props=r,u.state=O,u.context=h,r=w):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Yc(e,t),h=t.memoizedProps,Y=Ka(n,h),u.props=Y,I=t.pendingProps,M=u.context,O=n.contextType,w=yi,typeof O=="object"&&O!==null&&(w=vt(O)),b=n.getDerivedStateFromProps,(O=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==I||M!==w)&&Zh(t,u,r,w),la=!1,M=t.memoizedState,u.state=M,Nr(t,r,u,o),Tr();var U=t.memoizedState;h!==I||M!==U||la||e!==null&&e.dependencies!==null&&Zl(e.dependencies)?(typeof b=="function"&&(du(t,n,b,r),U=t.memoizedState),(Y=la||Xh(t,n,Y,r,M,U,w)||e!==null&&e.dependencies!==null&&Zl(e.dependencies))?(O||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,U,w),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,U,w)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=U),u.props=r,u.state=U,u.context=w,r=Y):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,yo(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=Qa(t,e.child,null,o),t.child=Qa(t,null,n,o)):jt(e,t,n,o),t.memoizedState=u.state,e=t.child):e=Un(e,t,o),e}function p0(e,t,n,r){return La(),t.flags|=256,jt(e,t,n,r),t.child}var gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xu(e){return{baseLanes:e,cachePool:nh()}}function yu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=It),e}function h0(e,t,n){var r=t.pendingProps,o=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),h&&(o=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(o?ca(t):ua(),(e=Ge)?(e=wm(e,nn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:yn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=Kp(e),n.return=t,t.child=n,bt=t,Ge=null)):e=null,e===null)throw ia(t);return ed(e)?t.lanes=32:t.lanes=536870912,null}var b=r.children;return r=r.fallback,o?(ua(),o=t.mode,b=bo({mode:"hidden",children:b},o),r=Ua(r,o,n,null),b.return=t,r.return=t,b.sibling=r,t.child=b,r=t.child,r.memoizedState=xu(n),r.childLanes=yu(e,h,n),t.memoizedState=gu,Dr(null,r)):(ca(t),bu(t,b))}var w=e.memoizedState;if(w!==null&&(b=w.dehydrated,b!==null)){if(u)t.flags&256?(ca(t),t.flags&=-257,t=vu(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),b=r.fallback,o=t.mode,r=bo({mode:"visible",children:r.children},o),b=Ua(b,o,n,null),b.flags|=2,r.return=t,b.return=t,r.sibling=b,t.child=r,Qa(t,e.child,null,n),r=t.child,r.memoizedState=xu(n),r.childLanes=yu(e,h,n),t.memoizedState=gu,t=Dr(null,r));else if(ca(t),ed(b)){if(h=b.nextSibling&&b.nextSibling.dataset,h)var O=h.dgst;h=O,r=Error(s(419)),r.stack="",r.digest=h,Sr({value:r,source:null,stack:null}),t=vu(e,t,n)}else if(st||wi(e,t,n,!1),h=(n&e.childLanes)!==0,st||h){if(h=qe,h!==null&&(r=ep(h,n),r!==0&&r!==w.retryLane))throw w.retryLane=r,Ba(e,r),Dt(h,e,r),hu;Ju(b)||ko(),t=vu(e,t,n)}else Ju(b)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Ge=rn(b.nextSibling),bt=t,Ee=!0,aa=null,nn=!1,e!==null&&Wp(t,e),t=bu(t,r.children),t.flags|=4096);return t}return o?(ua(),b=r.fallback,o=t.mode,w=e.child,O=w.sibling,r=_n(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&65011712,O!==null?b=_n(O,b):(b=Ua(b,o,n,null),b.flags|=2),b.return=t,r.return=t,r.sibling=b,t.child=r,Dr(null,r),r=t.child,b=e.child.memoizedState,b===null?b=xu(n):(o=b.cachePool,o!==null?(w=lt._currentValue,o=o.parent!==w?{parent:w,pool:w}:o):o=nh(),b={baseLanes:b.baseLanes|n,cachePool:o}),r.memoizedState=b,r.childLanes=yu(e,h,n),t.memoizedState=gu,Dr(e.child,r)):(ca(t),n=e.child,e=n.sibling,n=_n(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function bu(e,t){return t=bo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bo(e,t){return e=Yt(22,e,null,t),e.lanes=0,e}function vu(e,t,n){return Qa(t,e.child,null,n),e=bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dc(e.return,t,n)}function ju(e,t,n,r,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,treeForkCount:u}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=r,h.tail=n,h.tailMode=o,h.treeForkCount=u)}function g0(e,t,n){var r=t.pendingProps,o=r.revealOrder,u=r.tail;r=r.children;var h=at.current,b=(h&2)!==0;if(b?(h=h&1|2,t.flags|=128):h&=1,Z(at,h),jt(e,t,r,n),r=Ee?wr:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&m0(e,n,t);else if(e.tag===19)m0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ju(t,!1,o,n,u,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ju(t,!0,n,null,u,r);break;case"together":ju(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(wi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zl(e)))}function yb(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),ra(t,lt,e.memoizedState.cache),La();break;case 27:case 5:$e(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Kc(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(ca(t),t.flags|=128,null):(n&t.child.childLanes)!==0?h0(e,t,n):(ca(t),e=Un(e,t,n),e!==null?e.sibling:null);ca(t);break;case 19:var o=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(wi(e,t,n,!1),r=(n&t.childLanes)!==0),o){if(r)return g0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(at,at.current),r)break;return null;case 22:return t.lanes=0,s0(e,t,n,t.pendingProps);case 24:ra(t,lt,e.memoizedState.cache)}return Un(e,t,n)}function x0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)st=!0;else{if(!wu(e,n)&&(t.flags&128)===0)return st=!1,yb(e,t,n);st=(e.flags&131072)!==0}else st=!1,Ee&&(t.flags&1048576)!==0&&Fp(t,wr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e=="function")zc(e)?(r=Ka(e,r),t.tag=1,t=f0(null,t,e,r,n)):(t.tag=0,t=mu(null,t,e,r,n));else{if(e!=null){var o=e.$$typeof;if(o===P){t.tag=11,t=r0(null,t,e,r,n);break e}else if(o===Q){t.tag=14,t=l0(null,t,e,r,n);break e}}throw t=Ye(e)||e,Error(s(306,t,""))}}return t;case 0:return mu(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,o=Ka(r,t.pendingProps),f0(e,t,r,o,n);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var u=t.memoizedState;o=u.element,Yc(e,t),Nr(t,r,null,n);var h=t.memoizedState;if(r=h.cache,ra(t,lt,r),r!==u.cache&&Hc(t,[lt],n,!0),Tr(),r=h.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=p0(e,t,r,n);break e}else if(r!==o){o=Jt(Error(s(424)),t),Sr(o),t=p0(e,t,r,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ge=rn(e.firstChild),bt=t,Ee=!0,aa=null,nn=!0,n=sh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(La(),r===o){t=Un(e,t,n);break e}jt(e,t,r,n)}t=t.child}return t;case 26:return yo(e,t),e===null?(n=km(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,r=Do(G.current).createElement(n),r[yt]=t,r[Tt]=e,wt(r,n,e),mt(r),t.stateNode=r):t.memoizedState=km(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $e(t),e===null&&Ee&&(r=t.stateNode=Am(t.type,t.pendingProps,G.current),bt=t,nn=!0,o=Ge,ya(t.type)?(td=o,Ge=rn(r.firstChild)):Ge=o),jt(e,t,t.pendingProps.children,n),yo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((o=r=Ge)&&(r=Pb(r,t.type,t.pendingProps,nn),r!==null?(t.stateNode=r,bt=t,Ge=rn(r.firstChild),nn=!1,o=!0):o=!1),o||ia(t)),$e(t),o=t.type,u=t.pendingProps,h=e!==null?e.memoizedProps:null,r=u.children,Wu(o,u)?r=null:h!==null&&Wu(o,h)&&(t.flags|=32),t.memoizedState!==null&&(o=Fc(e,t,cb,null,null,n),Wr._currentValue=o),yo(e,t),jt(e,t,r,n),t.child;case 6:return e===null&&Ee&&((e=n=Ge)&&(n=Fb(n,t.pendingProps,nn),n!==null?(t.stateNode=n,bt=t,Ge=null,e=!0):e=!1),e||ia(t)),null;case 13:return h0(e,t,n);case 4:return me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qa(t,null,r,n):jt(e,t,r,n),t.child;case 11:return r0(e,t,t.type,t.pendingProps,n);case 7:return jt(e,t,t.pendingProps,n),t.child;case 8:return jt(e,t,t.pendingProps.children,n),t.child;case 12:return jt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ra(t,t.type,r.value),jt(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,qa(t),o=vt(o),r=r(o),t.flags|=1,jt(e,t,r,n),t.child;case 14:return l0(e,t,t.type,t.pendingProps,n);case 15:return o0(e,t,t.type,t.pendingProps,n);case 19:return g0(e,t,n);case 31:return xb(e,t,n);case 22:return s0(e,t,n,t.pendingProps);case 24:return qa(t),r=vt(lt),e===null?(o=Lc(),o===null&&(o=qe,u=Bc(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=n),o=u),t.memoizedState={parent:r,cache:o},qc(t),ra(t,lt,o)):((e.lanes&n)!==0&&(Yc(e,t),Nr(t,null,null,n),Tr()),o=e.memoizedState,u=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),ra(t,lt,r)):(r=u.cache,ra(t,lt,r),r!==o.cache&&Hc(t,[lt],n,!0))),jt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ln(e){e.flags|=4}function Su(e,t,n,r,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(V0())e.flags|=8192;else throw Va=no,$c}else e.flags&=-16777217}function y0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Om(t))if(V0())e.flags|=8192;else throw Va=no,$c}function vo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xf():536870912,e.lanes|=t,Mi|=t)}function Hr(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&65011712,r|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bb(e,t,n){var r=t.pendingProps;switch(Rc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Dn(lt),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ji(t)?Ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oc())),Ve(t),null;case 26:var o=t.type,u=t.memoizedState;return e===null?(Ln(t),u!==null?(Ve(t),y0(t,u)):(Ve(t),Su(t,o,null,r,n))):u?u!==e.memoizedState?(Ln(t),Ve(t),y0(t,u)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ln(t),Ve(t),Su(t,o,e,r,n)),null;case 27:if(se(t),n=G.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ln(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ve(t),null}e=te.current,ji(t)?Xp(t):(e=Am(o,r,n),t.stateNode=e,Ln(t))}return Ve(t),null;case 5:if(se(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ln(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ve(t),null}if(u=te.current,ji(t))Xp(t);else{var h=Do(G.current);switch(u){case 1:u=h.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=h.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=h.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?h.createElement("select",{is:r.is}):h.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?h.createElement(o,{is:r.is}):h.createElement(o)}}u[yt]=t,u[Tt]=r;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)u.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=u;e:switch(wt(u,o,r),o){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ln(t)}}return Ve(t),Su(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ln(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=G.current,ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,o=bt,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}e[yt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||hm(e.nodeValue,n)),e||ia(t,!0)}else e=Do(e).createTextNode(r),e[yt]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ji(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[yt]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=Oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Vt(t),t):(Vt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ve(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[yt]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else o=Oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Vt(t),t):(Vt(t),null)}return Vt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vo(t,t.updateQueue),Ve(t),null);case 4:return pe(),e===null&&Qu(t.stateNode.containerInfo),Ve(t),null;case 10:return Dn(t.type),Ve(t),null;case 19:if(q(at),r=t.memoizedState,r===null)return Ve(t),null;if(o=(t.flags&128)!==0,u=r.rendering,u===null)if(o)Hr(r,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=lo(e),u!==null){for(t.flags|=128,Hr(r,!1),e=u.updateQueue,t.updateQueue=e,vo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ip(n,e),n=n.sibling;return Z(at,at.current&1|2),Ee&&On(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ut()>Ao&&(t.flags|=128,o=!0,Hr(r,!1),t.lanes=4194304)}else{if(!o)if(e=lo(u),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,vo(t,e),Hr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Ee)return Ve(t),null}else 2*Ut()-r.renderingStartTime>Ao&&n!==536870912&&(t.flags|=128,o=!0,Hr(r,!1),t.lanes=4194304);r.isBackwards?(u.sibling=t.child,t.child=u):(e=r.last,e!==null?e.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ut(),e.sibling=null,n=at.current,Z(at,o?n&1|2:n&1),Ee&&On(t,r.treeForkCount),e):(Ve(t),null);case 22:case 23:return Vt(t),Ic(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&vo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&q(Ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Dn(lt),Ve(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function vb(e,t){switch(Rc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(lt),pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return se(t),null;case 31:if(t.memoizedState!==null){if(Vt(t),t.alternate===null)throw Error(s(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(at),null;case 4:return pe(),null;case 10:return Dn(t.type),null;case 22:case 23:return Vt(t),Ic(),e!==null&&q(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dn(lt),null;case 25:return null;default:return null}}function b0(e,t){switch(Rc(t),t.tag){case 3:Dn(lt),pe();break;case 26:case 27:case 5:se(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&Vt(t);break;case 13:Vt(t);break;case 19:q(at);break;case 10:Dn(t.type);break;case 22:case 23:Vt(t),Ic(),e!==null&&q(Ya);break;case 24:Dn(lt)}}function Br(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var u=n.create,h=n.inst;r=u(),h.destroy=r}n=n.next}while(n!==o)}}catch(b){Me(t,t.return,b)}}function da(e,t,n){try{var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){var h=r.inst,b=h.destroy;if(b!==void 0){h.destroy=void 0,o=t;var w=n,O=b;try{O()}catch(Y){Me(o,w,Y)}}}r=r.next}while(r!==u)}}catch(Y){Me(t,t.return,Y)}}function v0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{uh(t,n)}catch(r){Me(e,e.return,r)}}}function j0(e,t,n){n.props=Ka(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Me(e,t,r)}}function Ur(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(o){Me(e,t,o)}}function vn(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(o){Me(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Me(e,t,o)}else n.current=null}function w0(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){Me(e,e.return,o)}}function Cu(e,t,n){try{var r=e.stateNode;Yb(r,e.type,n,t),r[Tt]=t}catch(o){Me(e,e.return,o)}}function S0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function Au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||S0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nn));else if(r!==4&&(r===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}function jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(jo(e,t,n),e=e.sibling;e!==null;)jo(e,t,n),e=e.sibling}function C0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);wt(t,r,n),t[yt]=e,t[Tt]=n}catch(u){Me(e,e.return,u)}}var $n=!1,ct=!1,zu=!1,A0=typeof WeakSet=="function"?WeakSet:Set,gt=null;function jb(e,t){if(e=e.containerInfo,Pu=Yo,e=Bp(e),vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var h=0,b=-1,w=-1,O=0,Y=0,I=e,M=null;t:for(;;){for(var U;I!==n||o!==0&&I.nodeType!==3||(b=h+o),I!==u||r!==0&&I.nodeType!==3||(w=h+r),I.nodeType===3&&(h+=I.nodeValue.length),(U=I.firstChild)!==null;)M=I,I=U;for(;;){if(I===e)break t;if(M===n&&++O===o&&(b=h),M===u&&++Y===r&&(w=h),(U=I.nextSibling)!==null)break;I=M,M=I.parentNode}I=U}n=b===-1||w===-1?null:{start:b,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:e,selectionRange:n},Yo=!1,gt=t;gt!==null;)if(t=gt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,gt=e;else for(;gt!==null;){switch(t=gt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,o=u.memoizedProps,u=u.memoizedState,r=n.stateNode;try{var ne=Ka(n.type,o);e=r.getSnapshotBeforeUpdate(ne,u),r.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Me(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Zu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,gt=e;break}gt=t.return}}function E0(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Yn(e,n),r&4&&Br(5,n);break;case 1:if(Yn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Me(n,n.return,h)}else{var o=Ka(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Me(n,n.return,h)}}r&64&&v0(n),r&512&&Ur(n,n.return);break;case 3:if(Yn(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{uh(e,t)}catch(h){Me(n,n.return,h)}}break;case 27:t===null&&r&4&&C0(n);case 26:case 5:Yn(e,n),t===null&&r&4&&w0(n),r&512&&Ur(n,n.return);break;case 12:Yn(e,n);break;case 31:Yn(e,n),r&4&&T0(e,n);break;case 13:Yn(e,n),r&4&&N0(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Nb.bind(null,n),Wb(e,n))));break;case 22:if(r=n.memoizedState!==null||$n,!r){t=t!==null&&t.memoizedState!==null||ct,o=$n;var u=ct;$n=r,(ct=t)&&!u?Gn(e,n,(n.subtreeFlags&8772)!==0):Yn(e,n),$n=o,ct=u}break;case 30:break;default:Yn(e,n)}}function z0(e){var t=e.alternate;t!==null&&(e.alternate=null,z0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ac(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Rt=!1;function qn(e,t,n){for(n=n.child;n!==null;)k0(e,t,n),n=n.sibling}function k0(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(sr,n)}catch{}switch(n.tag){case 26:ct||vn(n,t),qn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ct||vn(n,t);var r=Ke,o=Rt;ya(n.type)&&(Ke=n.stateNode,Rt=!1),qn(e,t,n),Kr(n.stateNode),Ke=r,Rt=o;break;case 5:ct||vn(n,t);case 6:if(r=Ke,o=Rt,Ke=null,qn(e,t,n),Ke=r,Rt=o,Ke!==null)if(Rt)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(n.stateNode)}catch(u){Me(n,t,u)}else try{Ke.removeChild(n.stateNode)}catch(u){Me(n,t,u)}break;case 18:Ke!==null&&(Rt?(e=Ke,vm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Yi(e)):vm(Ke,n.stateNode));break;case 4:r=Ke,o=Rt,Ke=n.stateNode.containerInfo,Rt=!0,qn(e,t,n),Ke=r,Rt=o;break;case 0:case 11:case 14:case 15:da(2,n,t),ct||da(4,n,t),qn(e,t,n);break;case 1:ct||(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&j0(n,t,r)),qn(e,t,n);break;case 21:qn(e,t,n);break;case 22:ct=(r=ct)||n.memoizedState!==null,qn(e,t,n),ct=r;break;default:qn(e,t,n)}}function T0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yi(e)}catch(n){Me(t,t.return,n)}}}function N0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yi(e)}catch(n){Me(t,t.return,n)}}function wb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new A0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new A0),t;default:throw Error(s(435,e.tag))}}function wo(e,t){var n=wb(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var o=Rb.bind(null,e,r);r.then(o,o)}})}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r],u=e,h=t,b=h;e:for(;b!==null;){switch(b.tag){case 27:if(ya(b.type)){Ke=b.stateNode,Rt=!1;break e}break;case 5:Ke=b.stateNode,Rt=!1;break e;case 3:case 4:Ke=b.stateNode.containerInfo,Rt=!0;break e}b=b.return}if(Ke===null)throw Error(s(160));k0(u,h,o),Ke=null,Rt=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)R0(t,e),t=t.sibling}var fn=null;function R0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(t,e),Ot(e),r&4&&(da(3,e,e.return),Br(3,e),da(5,e,e.return));break;case 1:_t(t,e),Ot(e),r&512&&(ct||n===null||vn(n,n.return)),r&64&&$n&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var o=fn;if(_t(t,e),Ot(e),r&512&&(ct||n===null||vn(n,n.return)),r&4){var u=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(r){case"title":u=o.getElementsByTagName("title")[0],(!u||u[dr]||u[yt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(r),o.head.insertBefore(u,o.querySelector("head > title"))),wt(u,r,n),u[yt]=e,mt(u),r=u;break e;case"link":var h=Rm("link","href",o).get(r+(n.href||""));if(h){for(var b=0;b<h.length;b++)if(u=h[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(b,1);break t}}u=o.createElement(r),wt(u,r,n),o.head.appendChild(u);break;case"meta":if(h=Rm("meta","content",o).get(r+(n.content||""))){for(b=0;b<h.length;b++)if(u=h[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(b,1);break t}}u=o.createElement(r),wt(u,r,n),o.head.appendChild(u);break;default:throw Error(s(468,r))}u[yt]=e,mt(u),r=u}e.stateNode=r}else _m(o,e.type,e.stateNode);else e.stateNode=Nm(o,r,e.memoizedProps);else u!==r?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,r===null?_m(o,e.type,e.stateNode):Nm(o,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Cu(e,e.memoizedProps,n.memoizedProps)}break;case 27:_t(t,e),Ot(e),r&512&&(ct||n===null||vn(n,n.return)),n!==null&&r&4&&Cu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_t(t,e),Ot(e),r&512&&(ct||n===null||vn(n,n.return)),e.flags&32){o=e.stateNode;try{di(o,"")}catch(ne){Me(e,e.return,ne)}}r&4&&e.stateNode!=null&&(o=e.memoizedProps,Cu(e,o,n!==null?n.memoizedProps:o)),r&1024&&(zu=!0);break;case 6:if(_t(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(ne){Me(e,e.return,ne)}}break;case 3:if(Uo=null,o=fn,fn=Ho(t.containerInfo),_t(t,e),fn=o,Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(t.containerInfo)}catch(ne){Me(e,e.return,ne)}zu&&(zu=!1,_0(e));break;case 4:r=fn,fn=Ho(e.stateNode.containerInfo),_t(t,e),Ot(e),fn=r;break;case 12:_t(t,e),Ot(e);break;case 31:_t(t,e),Ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wo(e,r)));break;case 13:_t(t,e),Ot(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Co=Ut()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wo(e,r)));break;case 22:o=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,O=$n,Y=ct;if($n=O||o,ct=Y||w,_t(t,e),ct=Y,$n=O,Ot(e),r&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||w||$n||ct||Pa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(u=w.stateNode,o)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{b=w.stateNode;var I=w.memoizedProps.style,M=I!=null&&I.hasOwnProperty("display")?I.display:null;b.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(ne){Me(w,w.return,ne)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=o?"":w.memoizedProps}catch(ne){Me(w,w.return,ne)}}}else if(t.tag===18){if(n===null){w=t;try{var U=w.stateNode;o?jm(U,!0):jm(w.stateNode,!1)}catch(ne){Me(w,w.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,wo(e,n))));break;case 19:_t(t,e),Ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,wo(e,r)));break;case 30:break;case 21:break;default:_t(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(S0(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var o=n.stateNode,u=Au(e);jo(e,u,o);break;case 5:var h=n.stateNode;n.flags&32&&(di(h,""),n.flags&=-33);var b=Au(e);jo(e,b,h);break;case 3:case 4:var w=n.stateNode.containerInfo,O=Au(e);Eu(e,O,w);break;default:throw Error(s(161))}}catch(Y){Me(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)E0(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Pa(t);break;case 1:vn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&j0(t,t.return,n),Pa(t);break;case 27:Kr(t.stateNode);case 26:case 5:vn(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function Gn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,o=e,u=t,h=u.flags;switch(u.tag){case 0:case 11:case 15:Gn(o,u,n),Br(4,u);break;case 1:if(Gn(o,u,n),r=u,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(O){Me(r,r.return,O)}if(r=u,o=r.updateQueue,o!==null){var b=r.stateNode;try{var w=o.shared.hiddenCallbacks;if(w!==null)for(o.shared.hiddenCallbacks=null,o=0;o<w.length;o++)ch(w[o],b)}catch(O){Me(r,r.return,O)}}n&&h&64&&v0(u),Ur(u,u.return);break;case 27:C0(u);case 26:case 5:Gn(o,u,n),n&&r===null&&h&4&&w0(u),Ur(u,u.return);break;case 12:Gn(o,u,n);break;case 31:Gn(o,u,n),n&&h&4&&T0(o,u);break;case 13:Gn(o,u,n),n&&h&4&&N0(o,u);break;case 22:u.memoizedState===null&&Gn(o,u,n),Ur(u,u.return);break;case 30:break;default:Gn(o,u,n)}t=t.sibling}}function ku(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cr(n))}function Tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e))}function pn(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)O0(e,t,n,r),t=t.sibling}function O0(e,t,n,r){var o=t.flags;switch(t.tag){case 0:case 11:case 15:pn(e,t,n,r),o&2048&&Br(9,t);break;case 1:pn(e,t,n,r);break;case 3:pn(e,t,n,r),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e)));break;case 12:if(o&2048){pn(e,t,n,r),e=t.stateNode;try{var u=t.memoizedProps,h=u.id,b=u.onPostCommit;typeof b=="function"&&b(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Me(t,t.return,w)}}else pn(e,t,n,r);break;case 31:pn(e,t,n,r);break;case 13:pn(e,t,n,r);break;case 23:break;case 22:u=t.stateNode,h=t.alternate,t.memoizedState!==null?u._visibility&2?pn(e,t,n,r):Lr(e,t):u._visibility&2?pn(e,t,n,r):(u._visibility|=2,Ri(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),o&2048&&ku(h,t);break;case 24:pn(e,t,n,r),o&2048&&Tu(t.alternate,t);break;default:pn(e,t,n,r)}}function Ri(e,t,n,r,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,h=t,b=n,w=r,O=h.flags;switch(h.tag){case 0:case 11:case 15:Ri(u,h,b,w,o),Br(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?Ri(u,h,b,w,o):Lr(u,h):(Y._visibility|=2,Ri(u,h,b,w,o)),o&&O&2048&&ku(h.alternate,h);break;case 24:Ri(u,h,b,w,o),o&&O&2048&&Tu(h.alternate,h);break;default:Ri(u,h,b,w,o)}t=t.sibling}}function Lr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:Lr(n,r),o&2048&&ku(r.alternate,r);break;case 24:Lr(n,r),o&2048&&Tu(r.alternate,r);break;default:Lr(n,r)}t=t.sibling}}var $r=8192;function _i(e,t,n){if(e.subtreeFlags&$r)for(e=e.child;e!==null;)M0(e,t,n),e=e.sibling}function M0(e,t,n){switch(e.tag){case 26:_i(e,t,n),e.flags&$r&&e.memoizedState!==null&&sv(n,fn,e.memoizedState,e.memoizedProps);break;case 5:_i(e,t,n);break;case 3:case 4:var r=fn;fn=Ho(e.stateNode.containerInfo),_i(e,t,n),fn=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=$r,$r=16777216,_i(e,t,n),$r=r):_i(e,t,n));break;default:_i(e,t,n)}}function D0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];gt=r,B0(r,e)}D0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)H0(e),e=e.sibling}function H0(e){switch(e.tag){case 0:case 11:case 15:qr(e),e.flags&2048&&da(9,e,e.return);break;case 3:qr(e);break;case 12:qr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,So(e)):qr(e);break;default:qr(e)}}function So(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];gt=r,B0(r,e)}D0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),So(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,So(t));break;default:So(t)}e=e.sibling}}function B0(e,t){for(;gt!==null;){var n=gt;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Cr(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,gt=r;else e:for(n=e;gt!==null;){r=gt;var o=r.sibling,u=r.return;if(z0(r),r===n){gt=null;break e}if(o!==null){o.return=u,gt=o;break e}gt=u}}}var Sb={getCacheForType:function(e){var t=vt(lt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return vt(lt).controller.signal}},Cb=typeof WeakMap=="function"?WeakMap:Map,Re=0,qe=null,je=null,Ce=0,Oe=0,Qt=null,fa=!1,Oi=!1,Nu=!1,Vn=0,Ze=0,pa=0,Fa=0,Ru=0,It=0,Mi=0,Yr=null,Mt=null,_u=!1,Co=0,U0=0,Ao=1/0,Eo=null,ha=null,dt=0,ma=null,Di=null,Qn=0,Ou=0,Mu=null,L0=null,Gr=0,Du=null;function Kt(){return(Re&2)!==0&&Ce!==0?Ce&-Ce:H.T!==null?qu():tp()}function $0(){if(It===0)if((Ce&536870912)===0||Ee){var e=Ol;Ol<<=1,(Ol&3932160)===0&&(Ol=262144),It=e}else It=536870912;return e=Gt.current,e!==null&&(e.flags|=32),It}function Dt(e,t,n){(e===qe&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(Hi(e,0),ga(e,Ce,It,!1)),ur(e,n),((Re&2)===0||e!==qe)&&(e===qe&&((Re&2)===0&&(Fa|=n),Ze===4&&ga(e,Ce,It,!1)),jn(e))}function q0(e,t,n){if((Re&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||cr(e,t),o=r?zb(e,t):Bu(e,t,!0),u=r;do{if(o===0){Oi&&!r&&ga(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Ab(n)){o=Bu(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var b=e;o=Yr;var w=b.current.memoizedState.isDehydrated;if(w&&(Hi(b,h).flags|=256),h=Bu(b,h,!1),h!==2){if(Nu&&!w){b.errorRecoveryDisabledLanes|=u,Fa|=u,o=4;break e}u=Mt,Mt=o,u!==null&&(Mt===null?Mt=u:Mt.push.apply(Mt,u))}o=h}if(u=!1,o!==2)continue}}if(o===1){Hi(e,0),ga(e,t,0,!0);break}e:{switch(r=e,u=o,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ga(r,t,It,!fa);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=Co+300-Ut(),10<o)){if(ga(r,t,It,!fa),Dl(r,0,!0)!==0)break e;Qn=t,r.timeoutHandle=ym(Y0.bind(null,r,n,Mt,Eo,_u,t,It,Fa,Mi,fa,u,"Throttled",-0,0),o);break e}Y0(r,n,Mt,Eo,_u,t,It,Fa,Mi,fa,u,null,-0,0)}}break}while(!0);jn(e)}function Y0(e,t,n,r,o,u,h,b,w,O,Y,I,M,U){if(e.timeoutHandle=-1,I=t.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nn},M0(t,u,I);var ne=(u&62914560)===u?Co-Ut():(u&4194048)===u?U0-Ut():0;if(ne=cv(I,ne),ne!==null){Qn=u,e.cancelPendingCommit=ne(W0.bind(null,e,t,u,n,r,o,h,b,w,Y,I,null,M,U)),ga(e,u,h,!O);return}}W0(e,t,u,n,r,o,h,b,w)}function Ab(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var o=n[r],u=o.getSnapshot;o=o.value;try{if(!qt(u(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,n,r){t&=~Ru,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var u=31-$t(o),h=1<<u;r[u]=-1,o&=~h}n!==0&&Zf(e,n,t)}function zo(){return(Re&6)===0?(Vr(0),!1):!0}function Hu(){if(je!==null){if(Oe===0)var e=je.return;else e=je,Mn=$a=null,Zc(e),Ei=null,Er=0,e=je;for(;e!==null;)b0(e.alternate,e),e=e.return;je=null}}function Hi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Qb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qn=0,Hu(),qe=e,je=n=_n(e.current,null),Ce=t,Oe=0,Qt=null,fa=!1,Oi=cr(e,t),Nu=!1,Mi=It=Ru=Fa=pa=Ze=0,Mt=Yr=null,_u=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var o=31-$t(r),u=1<<o;t|=e[o],r&=~u}return Vn=t,Kl(),n}function G0(e,t){ge=null,H.H=Mr,t===Ai||t===to?(t=rh(),Oe=3):t===$c?(t=rh(),Oe=4):Oe=t===hu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qt=t,je===null&&(Ze=1,go(e,Jt(t,e.current)))}function V0(){var e=Gt.current;return e===null?!0:(Ce&4194048)===Ce?an===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===an:!1}function Q0(){var e=H.H;return H.H=Mr,e===null?Mr:e}function I0(){var e=H.A;return H.A=Sb,e}function ko(){Ze=4,fa||(Ce&4194048)!==Ce&&Gt.current!==null||(Oi=!0),(pa&134217727)===0&&(Fa&134217727)===0||qe===null||ga(qe,Ce,It,!1)}function Bu(e,t,n){var r=Re;Re|=2;var o=Q0(),u=I0();(qe!==e||Ce!==t)&&(Eo=null,Hi(e,t)),t=!1;var h=Ze;e:do try{if(Oe!==0&&je!==null){var b=je,w=Qt;switch(Oe){case 8:Hu(),h=6;break e;case 3:case 2:case 9:case 6:Gt.current===null&&(t=!0);var O=Oe;if(Oe=0,Qt=null,Bi(e,b,w,O),n&&Oi){h=0;break e}break;default:O=Oe,Oe=0,Qt=null,Bi(e,b,w,O)}}Eb(),h=Ze;break}catch(Y){G0(e,Y)}while(!0);return t&&e.shellSuspendCounter++,Mn=$a=null,Re=r,H.H=o,H.A=u,je===null&&(qe=null,Ce=0,Kl()),h}function Eb(){for(;je!==null;)K0(je)}function zb(e,t){var n=Re;Re|=2;var r=Q0(),o=I0();qe!==e||Ce!==t?(Eo=null,Ao=Ut()+500,Hi(e,t)):Oi=cr(e,t);e:do try{if(Oe!==0&&je!==null){t=je;var u=Qt;t:switch(Oe){case 1:Oe=0,Qt=null,Bi(e,t,u,1);break;case 2:case 9:if(ah(u)){Oe=0,Qt=null,P0(t);break}t=function(){Oe!==2&&Oe!==9||qe!==e||(Oe=7),jn(e)},u.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:ah(u)?(Oe=0,Qt=null,P0(t)):(Oe=0,Qt=null,Bi(e,t,u,7));break;case 5:var h=null;switch(je.tag){case 26:h=je.memoizedState;case 5:case 27:var b=je;if(h?Om(h):b.stateNode.complete){Oe=0,Qt=null;var w=b.sibling;if(w!==null)je=w;else{var O=b.return;O!==null?(je=O,To(O)):je=null}break t}}Oe=0,Qt=null,Bi(e,t,u,5);break;case 6:Oe=0,Qt=null,Bi(e,t,u,6);break;case 8:Hu(),Ze=6;break e;default:throw Error(s(462))}}kb();break}catch(Y){G0(e,Y)}while(!0);return Mn=$a=null,H.H=r,H.A=o,Re=n,je!==null?0:(qe=null,Ce=0,Kl(),Ze)}function kb(){for(;je!==null&&!X1();)K0(je)}function K0(e){var t=x0(e.alternate,e,Vn);e.memoizedProps=e.pendingProps,t===null?To(e):je=t}function P0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=d0(n,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=d0(n,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:Zc(t);default:b0(n,t),t=je=Ip(t,Vn),t=x0(n,t,Vn)}e.memoizedProps=e.pendingProps,t===null?To(e):je=t}function Bi(e,t,n,r){Mn=$a=null,Zc(t),Ei=null,Er=0;var o=t.return;try{if(gb(e,o,t,n,Ce)){Ze=1,go(e,Jt(n,e.current)),je=null;return}}catch(u){if(o!==null)throw je=o,u;Ze=1,go(e,Jt(n,e.current)),je=null;return}t.flags&32768?(Ee||r===1?e=!0:Oi||(Ce&536870912)!==0?e=!1:(fa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Gt.current,r!==null&&r.tag===13&&(r.flags|=16384))),F0(t,e)):To(t)}function To(e){var t=e;do{if((t.flags&32768)!==0){F0(t,fa);return}e=t.return;var n=bb(t.alternate,t,Vn);if(n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ze===0&&(Ze=5)}function F0(e,t){do{var n=vb(e.alternate,e);if(n!==null){n.flags&=32767,je=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){je=e;return}je=e=n}while(e!==null);Ze=6,je=null}function W0(e,t,n,r,o,u,h,b,w){e.cancelPendingCommit=null;do No();while(dt!==0);if((Re&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Ac,oy(e,n,u,h,b,w),e===qe&&(je=qe=null,Ce=0),Di=t,ma=e,Qn=n,Ou=u,Mu=o,L0=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_b(Rl,function(){return tm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=H.T,H.T=null,o=W.p,W.p=2,h=Re,Re|=4;try{jb(e,t,n)}finally{Re=h,W.p=o,H.T=r}}dt=1,X0(),Z0(),J0()}}function X0(){if(dt===1){dt=0;var e=ma,t=Di,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=H.T,H.T=null;var r=W.p;W.p=2;var o=Re;Re|=4;try{R0(t,e);var u=Fu,h=Bp(e.containerInfo),b=u.focusedElem,w=u.selectionRange;if(h!==b&&b&&b.ownerDocument&&Hp(b.ownerDocument.documentElement,b)){if(w!==null&&vc(b)){var O=w.start,Y=w.end;if(Y===void 0&&(Y=O),"selectionStart"in b)b.selectionStart=O,b.selectionEnd=Math.min(Y,b.value.length);else{var I=b.ownerDocument||document,M=I&&I.defaultView||window;if(M.getSelection){var U=M.getSelection(),ne=b.textContent.length,oe=Math.min(w.start,ne),Be=w.end===void 0?oe:Math.min(w.end,ne);!U.extend&&oe>Be&&(h=Be,Be=oe,oe=h);var T=Dp(b,oe),z=Dp(b,Be);if(T&&z&&(U.rangeCount!==1||U.anchorNode!==T.node||U.anchorOffset!==T.offset||U.focusNode!==z.node||U.focusOffset!==z.offset)){var _=I.createRange();_.setStart(T.node,T.offset),U.removeAllRanges(),oe>Be?(U.addRange(_),U.extend(z.node,z.offset)):(_.setEnd(z.node,z.offset),U.addRange(_))}}}}for(I=[],U=b;U=U.parentNode;)U.nodeType===1&&I.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<I.length;b++){var V=I[b];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Yo=!!Pu,Fu=Pu=null}finally{Re=o,W.p=r,H.T=n}}e.current=t,dt=2}}function Z0(){if(dt===2){dt=0;var e=ma,t=Di,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var r=W.p;W.p=2;var o=Re;Re|=4;try{E0(e,t.alternate,t)}finally{Re=o,W.p=r,H.T=n}}dt=3}}function J0(){if(dt===4||dt===3){dt=0,Z1();var e=ma,t=Di,n=Qn,r=L0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?dt=5:(dt=0,Di=ma=null,em(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(ha=null),tc(n),t=t.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(sr,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=H.T,o=W.p,W.p=2,H.T=null;try{for(var u=e.onRecoverableError,h=0;h<r.length;h++){var b=r[h];u(b.value,{componentStack:b.stack})}}finally{H.T=t,W.p=o}}(Qn&3)!==0&&No(),jn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===Du?Gr++:(Gr=0,Du=e):Gr=0,Vr(0)}}function em(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cr(t)))}function No(){return X0(),Z0(),J0(),tm()}function tm(){if(dt!==5)return!1;var e=ma,t=Ou;Ou=0;var n=tc(Qn),r=H.T,o=W.p;try{W.p=32>n?32:n,H.T=null,n=Mu,Mu=null;var u=ma,h=Qn;if(dt=0,Di=ma=null,Qn=0,(Re&6)!==0)throw Error(s(331));var b=Re;if(Re|=4,H0(u.current),O0(u,u.current,h,n),Re=b,Vr(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(sr,u)}catch{}return!0}finally{W.p=o,H.T=r,em(e,t)}}function nm(e,t,n){t=Jt(n,t),t=pu(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(ur(e,2),jn(e))}function Me(e,t,n){if(e.tag===3)nm(e,e,n);else for(;t!==null;){if(t.tag===3){nm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ha===null||!ha.has(r))){e=Jt(n,e),n=a0(2),r=sa(t,n,2),r!==null&&(i0(n,r,t,e),ur(r,2),jn(r));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(Nu=!0,o.add(n),e=Tb.bind(null,e,t,n),t.then(e,e))}function Tb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,qe===e&&(Ce&n)===n&&(Ze===4||Ze===3&&(Ce&62914560)===Ce&&300>Ut()-Co?(Re&2)===0&&Hi(e,0):Ru|=n,Mi===Ce&&(Mi=0)),jn(e)}function am(e,t){t===0&&(t=Xf()),e=Ba(e,t),e!==null&&(ur(e,t),jn(e))}function Nb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),am(e,n)}function Rb(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),am(e,n)}function _b(e,t){return Xs(e,t)}var Ro=null,Ui=null,Lu=!1,_o=!1,$u=!1,xa=0;function jn(e){e!==Ui&&e.next===null&&(Ui===null?Ro=Ui=e:Ui=Ui.next=e),_o=!0,Lu||(Lu=!0,Mb())}function Vr(e,t){if(!$u&&_o){$u=!0;do for(var n=!1,r=Ro;r!==null;){if(e!==0){var o=r.pendingLanes;if(o===0)var u=0;else{var h=r.suspendedLanes,b=r.pingedLanes;u=(1<<31-$t(42|e)+1)-1,u&=o&~(h&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,om(r,u))}else u=Ce,u=Dl(r,r===qe?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||cr(r,u)||(n=!0,om(r,u));r=r.next}while(n);$u=!1}}function Ob(){im()}function im(){_o=Lu=!1;var e=0;xa!==0&&Vb()&&(e=xa);for(var t=Ut(),n=null,r=Ro;r!==null;){var o=r.next,u=rm(r,t);u===0?(r.next=null,n===null?Ro=o:n.next=o,o===null&&(Ui=n)):(n=r,(e!==0||(u&3)!==0)&&(_o=!0)),r=o}dt!==0&&dt!==5||Vr(e),xa!==0&&(xa=0)}function rm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var h=31-$t(u),b=1<<h,w=o[h];w===-1?((b&n)===0||(b&r)!==0)&&(o[h]=ly(b,t)):w<=t&&(e.expiredLanes|=b),u&=~b}if(t=qe,n=Ce,n=Dl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Zs(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||cr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Zs(r),tc(n)){case 2:case 8:n=Ff;break;case 32:n=Rl;break;case 268435456:n=Wf;break;default:n=Rl}return r=lm.bind(null,e),n=Xs(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Zs(r),e.callbackPriority=2,e.callbackNode=null,2}function lm(e,t){if(dt!==0&&dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(No()&&e.callbackNode!==n)return null;var r=Ce;return r=Dl(e,e===qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(q0(e,r,t),rm(e,Ut()),e.callbackNode!=null&&e.callbackNode===n?lm.bind(null,e):null)}function om(e,t){if(No())return null;q0(e,t,!0)}function Mb(){Ib(function(){(Re&6)!==0?Xs(Pf,Ob):im()})}function qu(){if(xa===0){var e=Si;e===0&&(e=_l,_l<<=1,(_l&261888)===0&&(_l=256)),xa=e}return xa}function sm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ll(""+e)}function cm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Db(e,t,n,r,o){if(t==="submit"&&n&&n.stateNode===o){var u=sm((o[Tt]||null).action),h=r.submitter;h&&(t=(t=h[Tt]||null)?sm(t.formAction):h.getAttribute("formAction"),t!==null&&(u=t,h=null));var b=new Gl("action","action",null,r,o);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(xa!==0){var w=h?cm(o,h):new FormData(o);ou(n,{pending:!0,data:w,method:o.method,action:u},null,w)}}else typeof u=="function"&&(b.preventDefault(),w=h?cm(o,h):new FormData(o),ou(n,{pending:!0,data:w,method:o.method,action:u},u,w))},currentTarget:o}]})}}for(var Yu=0;Yu<Cc.length;Yu++){var Gu=Cc[Yu],Hb=Gu.toLowerCase(),Bb=Gu[0].toUpperCase()+Gu.slice(1);dn(Hb,"on"+Bb)}dn($p,"onAnimationEnd"),dn(qp,"onAnimationIteration"),dn(Yp,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(Jy,"onTransitionRun"),dn(eb,"onTransitionStart"),dn(tb,"onTransitionCancel"),dn(Gp,"onTransitionEnd"),ci("onMouseEnter",["mouseout","mouseover"]),ci("onMouseLeave",["mouseout","mouseover"]),ci("onPointerEnter",["pointerout","pointerover"]),ci("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ub=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qr));function um(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var h=r.length-1;0<=h;h--){var b=r[h],w=b.instance,O=b.currentTarget;if(b=b.listener,w!==u&&o.isPropagationStopped())break e;u=b,o.currentTarget=O;try{u(o)}catch(Y){Il(Y)}o.currentTarget=null,u=w}else for(h=0;h<r.length;h++){if(b=r[h],w=b.instance,O=b.currentTarget,b=b.listener,w!==u&&o.isPropagationStopped())break e;u=b,o.currentTarget=O;try{u(o)}catch(Y){Il(Y)}o.currentTarget=null,u=w}}}}function we(e,t){var n=t[nc];n===void 0&&(n=t[nc]=new Set);var r=e+"__bubble";n.has(r)||(dm(t,e,2,!1),n.add(r))}function Vu(e,t,n){var r=0;t&&(r|=4),dm(n,e,r,t)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Qu(e){if(!e[Oo]){e[Oo]=!0,ip.forEach(function(n){n!=="selectionchange"&&(Ub.has(n)||Vu(n,!1,e),Vu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oo]||(t[Oo]=!0,Vu("selectionchange",!1,t))}}function dm(e,t,n,r){switch($m(t)){case 2:var o=fv;break;case 8:o=pv;break;default:o=ld}n=o.bind(null,t,n,e),o=void 0,!dc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Iu(e,t,n,r,o){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var b=r.stateNode.containerInfo;if(b===o)break;if(h===4)for(h=r.return;h!==null;){var w=h.tag;if((w===3||w===4)&&h.stateNode.containerInfo===o)return;h=h.return}for(;b!==null;){if(h=li(b),h===null)return;if(w=h.tag,w===5||w===6||w===26||w===27){r=u=h;continue e}b=b.parentNode}}r=r.return}gp(function(){var O=u,Y=cc(n),I=[];e:{var M=Vp.get(e);if(M!==void 0){var U=Gl,ne=e;switch(e){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":U=Ry;break;case"focusin":ne="focus",U=mc;break;case"focusout":ne="blur",U=mc;break;case"beforeblur":case"afterblur":U=mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=My;break;case $p:case qp:case Yp:U=wy;break;case Gp:U=Hy;break;case"scroll":case"scrollend":U=xy;break;case"wheel":U=Uy;break;case"copy":case"cut":case"paste":U=Cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=jp;break;case"toggle":case"beforetoggle":U=$y}var oe=(t&4)!==0,Be=!oe&&(e==="scroll"||e==="scrollend"),T=oe?M!==null?M+"Capture":null:M;oe=[];for(var z=O,_;z!==null;){var V=z;if(_=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||_===null||T===null||(V=pr(z,T),V!=null&&oe.push(Ir(z,V,_))),Be)break;z=z.return}0<oe.length&&(M=new U(M,ne,null,n,Y),I.push({event:M,listeners:oe}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",M&&n!==sc&&(ne=n.relatedTarget||n.fromElement)&&(li(ne)||ne[ri]))break e;if((U||M)&&(M=Y.window===Y?Y:(M=Y.ownerDocument)?M.defaultView||M.parentWindow:window,U?(ne=n.relatedTarget||n.toElement,U=O,ne=ne?li(ne):null,ne!==null&&(Be=f(ne),oe=ne.tag,ne!==Be||oe!==5&&oe!==27&&oe!==6)&&(ne=null)):(U=null,ne=O),U!==ne)){if(oe=bp,V="onMouseLeave",T="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(oe=jp,V="onPointerLeave",T="onPointerEnter",z="pointer"),Be=U==null?M:fr(U),_=ne==null?M:fr(ne),M=new oe(V,z+"leave",U,n,Y),M.target=Be,M.relatedTarget=_,V=null,li(Y)===O&&(oe=new oe(T,z+"enter",ne,n,Y),oe.target=_,oe.relatedTarget=Be,V=oe),Be=V,U&&ne)t:{for(oe=Lb,T=U,z=ne,_=0,V=T;V;V=oe(V))_++;V=0;for(var re=z;re;re=oe(re))V++;for(;0<_-V;)T=oe(T),_--;for(;0<V-_;)z=oe(z),V--;for(;_--;){if(T===z||z!==null&&T===z.alternate){oe=T;break t}T=oe(T),z=oe(z)}oe=null}else oe=null;U!==null&&fm(I,M,U,oe,!1),ne!==null&&Be!==null&&fm(I,Be,ne,oe,!0)}}e:{if(M=O?fr(O):window,U=M.nodeName&&M.nodeName.toLowerCase(),U==="select"||U==="input"&&M.type==="file")var Te=Tp;else if(zp(M))if(Np)Te=Wy;else{Te=Py;var ie=Ky}else U=M.nodeName,!U||U.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?O&&oc(O.elementType)&&(Te=Tp):Te=Fy;if(Te&&(Te=Te(e,O))){kp(I,Te,n,Y);break e}ie&&ie(e,M,O),e==="focusout"&&O&&M.type==="number"&&O.memoizedProps.value!=null&&lc(M,"number",M.value)}switch(ie=O?fr(O):window,e){case"focusin":(zp(ie)||ie.contentEditable==="true")&&(mi=ie,jc=O,jr=null);break;case"focusout":jr=jc=mi=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,Up(I,n,Y);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":Up(I,n,Y)}var xe;if(xc)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else hi?Ap(e,n)&&(Ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ae="onCompositionStart");Ae&&(wp&&n.locale!=="ko"&&(hi||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&hi&&(xe=xp()):(ta=Y,fc="value"in ta?ta.value:ta.textContent,hi=!0)),ie=Mo(O,Ae),0<ie.length&&(Ae=new vp(Ae,e,null,n,Y),I.push({event:Ae,listeners:ie}),xe?Ae.data=xe:(xe=Ep(n),xe!==null&&(Ae.data=xe)))),(xe=Yy?Gy(e,n):Vy(e,n))&&(Ae=Mo(O,"onBeforeInput"),0<Ae.length&&(ie=new vp("onBeforeInput","beforeinput",null,n,Y),I.push({event:ie,listeners:Ae}),ie.data=xe)),Db(I,e,O,n,Y)}um(I,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=pr(e,n),o!=null&&r.unshift(Ir(e,o,u)),o=pr(e,t),o!=null&&r.push(Ir(e,o,u))),e.tag===3)return r;e=e.return}return[]}function Lb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fm(e,t,n,r,o){for(var u=t._reactName,h=[];n!==null&&n!==r;){var b=n,w=b.alternate,O=b.stateNode;if(b=b.tag,w!==null&&w===r)break;b!==5&&b!==26&&b!==27||O===null||(w=O,o?(O=pr(n,u),O!=null&&h.unshift(Ir(n,O,w))):o||(O=pr(n,u),O!=null&&h.push(Ir(n,O,w)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var $b=/\r\n?/g,qb=/\u0000|\uFFFD/g;function pm(e){return(typeof e=="string"?e:""+e).replace($b,`
`).replace(qb,"")}function hm(e,t){return t=pm(t),pm(e)===t}function He(e,t,n,r,o,u){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||di(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&di(e,""+r);break;case"className":Bl(e,"class",r);break;case"tabIndex":Bl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Bl(e,n,r);break;case"style":hp(e,r,u);break;case"data":if(t!=="object"){Bl(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Ll(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&He(e,t,"name",o.name,o,null),He(e,t,"formEncType",o.formEncType,o,null),He(e,t,"formMethod",o.formMethod,o,null),He(e,t,"formTarget",o.formTarget,o,null)):(He(e,t,"encType",o.encType,o,null),He(e,t,"method",o.method,o,null),He(e,t,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Ll(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=Nn);break;case"onScroll":r!=null&&we("scroll",e);break;case"onScrollEnd":r!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Ll(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":we("beforetoggle",e),we("toggle",e),Hl(e,"popover",r);break;case"xlinkActuate":Tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Tn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Tn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Tn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Tn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Hl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=my.get(n)||n,Hl(e,n,r))}}function Ku(e,t,n,r,o,u){switch(n){case"style":hp(e,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?di(e,r):(typeof r=="number"||typeof r=="bigint")&&di(e,""+r);break;case"onScroll":r!=null&&we("scroll",e);break;case"onScrollEnd":r!=null&&we("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rp.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),u=e[Tt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,o),typeof r=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Hl(e,n,r)}}}function wt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var r=!1,o=!1,u;for(u in n)if(n.hasOwnProperty(u)){var h=n[u];if(h!=null)switch(u){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:He(e,t,u,h,n,null)}}o&&He(e,t,"srcSet",n.srcSet,n,null),r&&He(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var b=u=h=o=null,w=null,O=null;for(r in n)if(n.hasOwnProperty(r)){var Y=n[r];if(Y!=null)switch(r){case"name":o=Y;break;case"type":h=Y;break;case"checked":w=Y;break;case"defaultChecked":O=Y;break;case"value":u=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:He(e,t,r,Y,n,null)}}up(e,u,b,w,O,h,o,!1);return;case"select":we("invalid",e),r=h=u=null;for(o in n)if(n.hasOwnProperty(o)&&(b=n[o],b!=null))switch(o){case"value":u=b;break;case"defaultValue":h=b;break;case"multiple":r=b;default:He(e,t,o,b,n,null)}t=u,n=h,e.multiple=!!r,t!=null?ui(e,!!r,t,!1):n!=null&&ui(e,!!r,n,!0);return;case"textarea":we("invalid",e),u=o=r=null;for(h in n)if(n.hasOwnProperty(h)&&(b=n[h],b!=null))switch(h){case"value":r=b;break;case"defaultValue":o=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:He(e,t,h,b,n,null)}fp(e,r,o,u);return;case"option":for(w in n)n.hasOwnProperty(w)&&(r=n[w],r!=null)&&(w==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":He(e,t,w,r,n,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(r=0;r<Qr.length;r++)we(Qr[r],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(r=n[O],r!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:He(e,t,O,r,n,null)}return;default:if(oc(t)){for(Y in n)n.hasOwnProperty(Y)&&(r=n[Y],r!==void 0&&Ku(e,t,Y,r,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(r=n[b],r!=null&&He(e,t,b,r,n,null))}function Yb(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,h=null,b=null,w=null,O=null,Y=null;for(U in n){var I=n[U];if(n.hasOwnProperty(U)&&I!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":w=I;default:r.hasOwnProperty(U)||He(e,t,U,null,r,I)}}for(var M in r){var U=r[M];if(I=n[M],r.hasOwnProperty(M)&&(U!=null||I!=null))switch(M){case"type":u=U;break;case"name":o=U;break;case"checked":O=U;break;case"defaultChecked":Y=U;break;case"value":h=U;break;case"defaultValue":b=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:U!==I&&He(e,t,M,U,r,I)}}rc(e,h,b,w,O,Y,u,o);return;case"select":U=h=b=M=null;for(u in n)if(w=n[u],n.hasOwnProperty(u)&&w!=null)switch(u){case"value":break;case"multiple":U=w;default:r.hasOwnProperty(u)||He(e,t,u,null,r,w)}for(o in r)if(u=r[o],w=n[o],r.hasOwnProperty(o)&&(u!=null||w!=null))switch(o){case"value":M=u;break;case"defaultValue":b=u;break;case"multiple":h=u;default:u!==w&&He(e,t,o,u,r,w)}t=b,n=h,r=U,M!=null?ui(e,!!n,M,!1):!!r!=!!n&&(t!=null?ui(e,!!n,t,!0):ui(e,!!n,n?[]:"",!1));return;case"textarea":U=M=null;for(b in n)if(o=n[b],n.hasOwnProperty(b)&&o!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(e,t,b,null,r,o)}for(h in r)if(o=r[h],u=n[h],r.hasOwnProperty(h)&&(o!=null||u!=null))switch(h){case"value":M=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==u&&He(e,t,h,o,r,u)}dp(e,M,U);return;case"option":for(var ne in n)M=n[ne],n.hasOwnProperty(ne)&&M!=null&&!r.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:He(e,t,ne,null,r,M));for(w in r)M=r[w],U=n[w],r.hasOwnProperty(w)&&M!==U&&(M!=null||U!=null)&&(w==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":He(e,t,w,M,r,U));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)M=n[oe],n.hasOwnProperty(oe)&&M!=null&&!r.hasOwnProperty(oe)&&He(e,t,oe,null,r,M);for(O in r)if(M=r[O],U=n[O],r.hasOwnProperty(O)&&M!==U&&(M!=null||U!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:He(e,t,O,M,r,U)}return;default:if(oc(t)){for(var Be in n)M=n[Be],n.hasOwnProperty(Be)&&M!==void 0&&!r.hasOwnProperty(Be)&&Ku(e,t,Be,void 0,r,M);for(Y in r)M=r[Y],U=n[Y],!r.hasOwnProperty(Y)||M===U||M===void 0&&U===void 0||Ku(e,t,Y,M,r,U);return}}for(var T in n)M=n[T],n.hasOwnProperty(T)&&M!=null&&!r.hasOwnProperty(T)&&He(e,t,T,null,r,M);for(I in r)M=r[I],U=n[I],!r.hasOwnProperty(I)||M===U||M==null&&U==null||He(e,t,I,M,r,U)}function mm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var o=n[r],u=o.transferSize,h=o.initiatorType,b=o.duration;if(u&&b&&mm(h)){for(h=0,b=o.responseEnd,r+=1;r<n.length;r++){var w=n[r],O=w.startTime;if(O>b)break;var Y=w.transferSize,I=w.initiatorType;Y&&mm(I)&&(w=w.responseEnd,h+=Y*(w<b?1:(b-O)/(w-O)))}if(--r,t+=8*(u+h)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pu=null,Fu=null;function Do(e){return e.nodeType===9?e:e.ownerDocument}function gm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xu=null;function Vb(){var e=window.event;return e&&e.type==="popstate"?e===Xu?!1:(Xu=e,!0):(Xu=null,!1)}var ym=typeof setTimeout=="function"?setTimeout:void 0,Qb=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,Ib=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(e){return bm.resolve(null).then(e).catch(Kb)}:ym;function Kb(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function vm(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(o),Yi(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")Kr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Kr(n);for(var u=n.firstChild;u;){var h=u.nextSibling,b=u.nodeName;u[dr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=h}}else n==="body"&&Kr(e.ownerDocument.body);n=o}while(n);Yi(t)}function jm(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function Zu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Zu(n),ac(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Pb(e,t,n,r){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[dr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=rn(e.nextSibling),e===null)break}return null}function Fb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rn(e.nextSibling),e===null))return null;return e}function wm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=rn(e.nextSibling),e===null))return null;return e}function Ju(e){return e.data==="$?"||e.data==="$~"}function ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var td=null;function Sm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return rn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Cm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Am(e,t,n){switch(t=Do(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Kr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ac(e)}var ln=new Map,Em=new Set;function Ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var In=W.d;W.d={f:Xb,r:Zb,D:Jb,C:ev,L:tv,m:nv,X:iv,S:av,M:rv};function Xb(){var e=In.f(),t=zo();return e||t}function Zb(e){var t=oi(e);t!==null&&t.tag===5&&t.type==="form"?Gh(t):In.r(e)}var Li=typeof document>"u"?null:document;function zm(e,t,n){var r=Li;if(r&&typeof t=="string"&&t){var o=Xt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Em.has(o)||(Em.add(o),e={rel:e,crossOrigin:n,href:t},r.querySelector(o)===null&&(t=r.createElement("link"),wt(t,"link",e),mt(t),r.head.appendChild(t)))}}function Jb(e){In.D(e),zm("dns-prefetch",e,null)}function ev(e,t){In.C(e,t),zm("preconnect",e,t)}function tv(e,t,n){In.L(e,t,n);var r=Li;if(r&&e&&t){var o='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Xt(n.imageSizes)+'"]')):o+='[href="'+Xt(e)+'"]';var u=o;switch(t){case"style":u=$i(e);break;case"script":u=qi(e)}ln.has(u)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ln.set(u,e),r.querySelector(o)!==null||t==="style"&&r.querySelector(Pr(u))||t==="script"&&r.querySelector(Fr(u))||(t=r.createElement("link"),wt(t,"link",e),mt(t),r.head.appendChild(t)))}}function nv(e,t){In.m(e,t);var n=Li;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Xt(r)+'"][href="'+Xt(e)+'"]',u=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=qi(e)}if(!ln.has(u)&&(e=v({rel:"modulepreload",href:e},t),ln.set(u,e),n.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Fr(u)))return}r=n.createElement("link"),wt(r,"link",e),mt(r),n.head.appendChild(r)}}}function av(e,t,n){In.S(e,t,n);var r=Li;if(r&&e){var o=si(r).hoistableStyles,u=$i(e);t=t||"default";var h=o.get(u);if(!h){var b={loading:0,preload:null};if(h=r.querySelector(Pr(u)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ln.get(u))&&nd(e,n);var w=h=r.createElement("link");mt(w),wt(w,"link",e),w._p=new Promise(function(O,Y){w.onload=O,w.onerror=Y}),w.addEventListener("load",function(){b.loading|=1}),w.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Bo(h,t,r)}h={type:"stylesheet",instance:h,count:1,state:b},o.set(u,h)}}}function iv(e,t){In.X(e,t);var n=Li;if(n&&e){var r=si(n).hoistableScripts,o=qi(e),u=r.get(o);u||(u=n.querySelector(Fr(o)),u||(e=v({src:e,async:!0},t),(t=ln.get(o))&&ad(e,t),u=n.createElement("script"),mt(u),wt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function rv(e,t){In.M(e,t);var n=Li;if(n&&e){var r=si(n).hoistableScripts,o=qi(e),u=r.get(o);u||(u=n.querySelector(Fr(o)),u||(e=v({src:e,async:!0,type:"module"},t),(t=ln.get(o))&&ad(e,t),u=n.createElement("script"),mt(u),wt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function km(e,t,n,r){var o=(o=G.current)?Ho(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=$i(n.href),n=si(o).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=$i(n.href);var u=si(o).hoistableStyles,h=u.get(e);if(h||(o=o.ownerDocument||o,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,h),(u=o.querySelector(Pr(e)))&&!u._p&&(h.instance=u,h.state.loading=5),ln.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ln.set(e,n),u||lv(o,e,n,h.state))),t&&r===null)throw Error(s(528,""));return h}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qi(n),n=si(o).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function $i(e){return'href="'+Xt(e)+'"'}function Pr(e){return'link[rel="stylesheet"]['+e+"]"}function Tm(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function lv(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),wt(t,"link",n),mt(t),e.head.appendChild(t))}function qi(e){return'[src="'+Xt(e)+'"]'}function Fr(e){return"script[async]"+e}function Nm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(r)return t.instance=r,mt(r),r;var o=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),mt(r),wt(r,"style",o),Bo(r,n.precedence,e),t.instance=r;case"stylesheet":o=$i(n.href);var u=e.querySelector(Pr(o));if(u)return t.state.loading|=4,t.instance=u,mt(u),u;r=Tm(n),(o=ln.get(o))&&nd(r,o),u=(e.ownerDocument||e).createElement("link"),mt(u);var h=u;return h._p=new Promise(function(b,w){h.onload=b,h.onerror=w}),wt(u,"link",r),t.state.loading|=4,Bo(u,n.precedence,e),t.instance=u;case"script":return u=qi(n.src),(o=e.querySelector(Fr(u)))?(t.instance=o,mt(o),o):(r=n,(o=ln.get(u))&&(r=v({},n),ad(r,o)),e=e.ownerDocument||e,o=e.createElement("script"),mt(o),wt(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Bo(r,n.precedence,e));return t.instance}function Bo(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,u=o,h=0;h<r.length;h++){var b=r[h];if(b.dataset.precedence===t)u=b;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function nd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ad(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Uo=null;function Rm(e,t,n){if(Uo===null){var r=new Map,o=Uo=new Map;o.set(n,r)}else o=Uo,r=o.get(n),r||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var u=n[o];if(!(u[dr]||u[yt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(t)||"";h=e+h;var b=r.get(h);b?b.push(u):r.set(h,[u])}}return r}function _m(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ov(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Om(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sv(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=$i(r.href),u=t.querySelector(Pr(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Lo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,mt(u);return}u=t.ownerDocument||t,r=Tm(r),(o=ln.get(o))&&nd(r,o),u=u.createElement("link"),mt(u);var h=u;h._p=new Promise(function(b,w){h.onload=b,h.onerror=w}),wt(u,"link",r),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Lo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var id=0;function cv(e,t){return e.stylesheets&&e.count===0&&qo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&qo(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&id===0&&(id=62500*Gb());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qo(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>id?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(o)}}:null}function Lo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $o=null;function qo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$o=new Map,t.forEach(uv,e),$o=null,Lo.call(e))}function uv(e,t){if(!(t.state.loading&4)){var n=$o.get(e);if(n)var r=n.get(null);else{n=new Map,$o.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var h=o[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),r=h)}r&&n.set(null,r)}o=t.instance,h=o.getAttribute("data-precedence"),u=n.get(h)||r,u===r&&n.set(null,o),n.set(h,o),this.count++,r=Lo.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Wr={$$typeof:K,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function dv(e,t,n,r,o,u,h,b,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.hiddenUpdates=Js(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Mm(e,t,n,r,o,u,h,b,w,O,Y,I){return e=new dv(e,t,n,h,w,O,Y,I,b),t=1,u===!0&&(t|=24),u=Yt(3,null,null,t),e.current=u,u.stateNode=e,t=Bc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:n,cache:t},qc(u),e}function Dm(e){return e?(e=yi,e):yi}function Hm(e,t,n,r,o,u){o=Dm(o),r.context===null?r.context=o:r.pendingContext=o,r=oa(t),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=sa(e,r,t),n!==null&&(Dt(n,e,t),kr(n,e,t))}function Bm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rd(e,t){Bm(e,t),(e=e.alternate)&&Bm(e,t)}function Um(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&Dt(t,e,67108864),rd(e,67108864)}}function Lm(e){if(e.tag===13||e.tag===31){var t=Kt();t=ec(t);var n=Ba(e,t);n!==null&&Dt(n,e,t),rd(e,t)}}var Yo=!0;function fv(e,t,n,r){var o=H.T;H.T=null;var u=W.p;try{W.p=2,ld(e,t,n,r)}finally{W.p=u,H.T=o}}function pv(e,t,n,r){var o=H.T;H.T=null;var u=W.p;try{W.p=8,ld(e,t,n,r)}finally{W.p=u,H.T=o}}function ld(e,t,n,r){if(Yo){var o=od(r);if(o===null)Iu(e,t,r,Go,n),qm(e,r);else if(mv(o,e,t,n,r))r.stopPropagation();else if(qm(e,r),t&4&&-1<hv.indexOf(e)){for(;o!==null;){var u=oi(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=_a(u.pendingLanes);if(h!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;h;){var w=1<<31-$t(h);b.entanglements[1]|=w,h&=~w}jn(u),(Re&6)===0&&(Ao=Ut()+500,Vr(0))}}break;case 31:case 13:b=Ba(u,2),b!==null&&Dt(b,u,2),zo(),rd(u,2)}if(u=od(r),u===null&&Iu(e,t,r,Go,n),u===o)break;o=u}o!==null&&r.stopPropagation()}else Iu(e,t,r,null,n)}}function od(e){return e=cc(e),sd(e)}var Go=null;function sd(e){if(Go=null,e=li(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=x(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Go=e,null}function $m(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J1()){case Pf:return 2;case Ff:return 8;case Rl:case ey:return 32;case Wf:return 268435456;default:return 32}default:return 32}}var cd=!1,ba=null,va=null,ja=null,Xr=new Map,Zr=new Map,wa=[],hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qm(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Jr(e,t,n,r,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[o]},t!==null&&(t=oi(t),t!==null&&Um(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function mv(e,t,n,r,o){switch(t){case"focusin":return ba=Jr(ba,e,t,n,r,o),!0;case"dragenter":return va=Jr(va,e,t,n,r,o),!0;case"mouseover":return ja=Jr(ja,e,t,n,r,o),!0;case"pointerover":var u=o.pointerId;return Xr.set(u,Jr(Xr.get(u)||null,e,t,n,r,o)),!0;case"gotpointercapture":return u=o.pointerId,Zr.set(u,Jr(Zr.get(u)||null,e,t,n,r,o)),!0}return!1}function Ym(e){var t=li(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,np(e.priority,function(){Lm(n)});return}}else if(t===31){if(t=x(n),t!==null){e.blockedOn=t,np(e.priority,function(){Lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=od(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sc=r,n.target.dispatchEvent(r),sc=null}else return t=oi(n),t!==null&&Um(t),e.blockedOn=n,!1;t.shift()}return!0}function Gm(e,t,n){Vo(e)&&n.delete(t)}function gv(){cd=!1,ba!==null&&Vo(ba)&&(ba=null),va!==null&&Vo(va)&&(va=null),ja!==null&&Vo(ja)&&(ja=null),Xr.forEach(Gm),Zr.forEach(Gm)}function Qo(e,t){e.blockedOn===t&&(e.blockedOn=null,cd||(cd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,gv)))}var Io=null;function Vm(e){Io!==e&&(Io=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Io===e&&(Io=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if(typeof r!="function"){if(sd(r||n)===null)continue;break}var u=oi(n);u!==null&&(e.splice(t,3),t-=3,ou(u,{pending:!0,data:o,method:n.method,action:r},r,o))}}))}function Yi(e){function t(w){return Qo(w,e)}ba!==null&&Qo(ba,e),va!==null&&Qo(va,e),ja!==null&&Qo(ja,e),Xr.forEach(t),Zr.forEach(t);for(var n=0;n<wa.length;n++){var r=wa[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<wa.length&&(n=wa[0],n.blockedOn===null);)Ym(n),n.blockedOn===null&&wa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],h=o[Tt]||null;if(typeof u=="function")h||Vm(n);else if(h){var b=null;if(u&&u.hasAttribute("formAction")){if(o=u,h=u[Tt]||null)b=h.formAction;else if(sd(o)!==null)continue}else b=h.action;typeof b=="function"?n[r+1]=b:(n.splice(r,3),r-=3),Vm(n)}}}function Qm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(h){return o=h})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function ud(e){this._internalRoot=e}Ko.prototype.render=ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=Kt();Hm(n,r,e,t,null,null)},Ko.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hm(e.current,2,null,e,null,null),zo(),t[ri]=null}};function Ko(e){this._internalRoot=e}Ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=tp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wa.length&&t!==0&&t<wa[n].priority;n++);wa.splice(n,0,e),n===0&&Ym(e)}};var Im=l.version;if(Im!=="19.2.4")throw Error(s(527,Im,"19.2.4"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var xv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{sr=Po.inject(xv),Lt=Po}catch{}}return tl.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,r="",o=Jh,u=e0,h=t0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Mm(e,1,!1,null,null,n,r,null,o,u,h,Qm),e[ri]=t.current,Qu(e),new ud(t)},tl.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var r=!1,o="",u=Jh,h=e0,b=t0,w=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Mm(e,1,!0,t,n??null,r,o,w,u,h,b,Qm),t.context=Dm(null),n=t.current,r=Kt(),r=ec(r),o=oa(r),o.callback=null,sa(n,o,r),n=r,t.current.lanes=n,ur(t,n),jn(t),e[ri]=t.current,Qu(e),new Ko(t)},tl.version="19.2.4",tl}var ng;function kv(){if(ng)return pd.exports;ng=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),pd.exports=zv(),pd.exports}var Tv=kv();var ag="popstate";function Nv(a={}){function l(s,d){let{pathname:f,search:p,hash:x}=s.location;return ef("",{pathname:f,search:p,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(s,d){return typeof d=="string"?d:fl(d)}return _v(l,c,null,a)}function We(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function zn(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Rv(){return Math.random().toString(36).substring(2,10)}function ig(a,l){return{usr:a.state,key:a.key,idx:l}}function ef(a,l,c=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?nr(l):l,state:c,key:l&&l.key||s||Rv()}}function fl({pathname:a="/",search:l="",hash:c=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),c&&c!=="#"&&(a+=c.charAt(0)==="#"?c:"#"+c),a}function nr(a){let l={};if(a){let c=a.indexOf("#");c>=0&&(l.hash=a.substring(c),a=a.substring(0,c));let s=a.indexOf("?");s>=0&&(l.search=a.substring(s),a=a.substring(0,s)),a&&(l.pathname=a)}return l}function _v(a,l,c,s={}){let{window:d=document.defaultView,v5Compat:f=!1}=s,p=d.history,x="POP",m=null,g=y();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function y(){return(p.state||{idx:null}).idx}function v(){x="POP";let E=y(),N=E==null?null:E-g;g=E,m&&m({action:x,location:R.location,delta:N})}function k(E,N){x="PUSH";let $=ef(R.location,E,N);g=y()+1;let K=ig($,g),P=R.createHref($);try{p.pushState(K,"",P)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;d.location.assign(P)}f&&m&&m({action:x,location:R.location,delta:1})}function D(E,N){x="REPLACE";let $=ef(R.location,E,N);g=y();let K=ig($,g),P=R.createHref($);p.replaceState(K,"",P),f&&m&&m({action:x,location:R.location,delta:0})}function A(E){return Ov(E)}let R={get action(){return x},get location(){return a(d,p)},listen(E){if(m)throw new Error("A history only accepts one active listener");return d.addEventListener(ag,v),m=E,()=>{d.removeEventListener(ag,v),m=null}},createHref(E){return l(d,E)},createURL:A,encodeLocation(E){let N=A(E);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:k,replace:D,go(E){return p.go(E)}};return R}function Ov(a,l=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),We(c,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:fl(a);return s=s.replace(/ $/,"%20"),!l&&s.startsWith("//")&&(s=c+s),new URL(s,c)}function mx(a,l,c="/"){return Mv(a,l,c,!1)}function Mv(a,l,c,s){let d=typeof l=="string"?nr(l):l,f=Xn(d.pathname||"/",c);if(f==null)return null;let p=gx(a);Dv(p);let x=null;for(let m=0;x==null&&m<p.length;++m){let g=Iv(f);x=Vv(p[m],g,s)}return x}function gx(a,l=[],c=[],s="",d=!1){let f=(p,x,m=d,g)=>{let y={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:x,route:p};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&m)return;We(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let v=Wn([s,y.relativePath]),k=c.concat(y);p.children&&p.children.length>0&&(We(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),gx(p.children,l,k,v,m)),!(p.path==null&&!p.index)&&l.push({path:v,score:Yv(v,p.index),routesMeta:k})};return a.forEach((p,x)=>{if(p.path===""||!p.path?.includes("?"))f(p,x);else for(let m of xx(p.path))f(p,x,!0,m)}),l}function xx(a){let l=a.split("/");if(l.length===0)return[];let[c,...s]=l,d=c.endsWith("?"),f=c.replace(/\?$/,"");if(s.length===0)return d?[f,""]:[f];let p=xx(s.join("/")),x=[];return x.push(...p.map(m=>m===""?f:[f,m].join("/"))),d&&x.push(...p),x.map(m=>a.startsWith("/")&&m===""?"/":m)}function Dv(a){a.sort((l,c)=>l.score!==c.score?c.score-l.score:Gv(l.routesMeta.map(s=>s.childrenIndex),c.routesMeta.map(s=>s.childrenIndex)))}var Hv=/^:[\w-]+$/,Bv=3,Uv=2,Lv=1,$v=10,qv=-2,rg=a=>a==="*";function Yv(a,l){let c=a.split("/"),s=c.length;return c.some(rg)&&(s+=qv),l&&(s+=Uv),c.filter(d=>!rg(d)).reduce((d,f)=>d+(Hv.test(f)?Bv:f===""?Lv:$v),s)}function Gv(a,l){return a.length===l.length&&a.slice(0,-1).every((s,d)=>s===l[d])?a[a.length-1]-l[l.length-1]:0}function Vv(a,l,c=!1){let{routesMeta:s}=a,d={},f="/",p=[];for(let x=0;x<s.length;++x){let m=s[x],g=x===s.length-1,y=f==="/"?l:l.slice(f.length)||"/",v=js({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),k=m.route;if(!v&&g&&c&&!s[s.length-1].route.index&&(v=js({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!v)return null;Object.assign(d,v.params),p.push({params:d,pathname:Wn([f,v.pathname]),pathnameBase:Wv(Wn([f,v.pathnameBase])),route:k}),v.pathnameBase!=="/"&&(f=Wn([f,v.pathnameBase]))}return p}function js(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[c,s]=Qv(a.path,a.caseSensitive,a.end),d=l.match(c);if(!d)return null;let f=d[0],p=f.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:v},k)=>{if(y==="*"){let A=x[k]||"";p=f.slice(0,f.length-A.length).replace(/(.)\/+$/,"$1")}const D=x[k];return v&&!D?g[y]=void 0:g[y]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:p,pattern:a}}function Qv(a,l=!1,c=!0){zn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,x,m)=>(s.push({paramName:x,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,l?void 0:"i"),s]}function Iv(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return zn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function Xn(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let c=l.endsWith("/")?l.length-1:l.length,s=a.charAt(c);return s&&s!=="/"?null:a.slice(c)||"/"}var Kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Pv(a,l="/"){let{pathname:c,search:s="",hash:d=""}=typeof a=="string"?nr(a):a,f;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?f=lg(c.substring(1),"/"):f=lg(c,l)):f=l,{pathname:f,search:Xv(s),hash:Zv(d)}}function lg(a,l){let c=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function xd(a,l,c,s){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Fv(a){return a.filter((l,c)=>c===0||l.route.path&&l.route.path.length>0)}function yx(a){let l=Fv(a);return l.map((c,s)=>s===l.length-1?c.pathname:c.pathnameBase)}function bx(a,l,c,s=!1){let d;typeof a=="string"?d=nr(a):(d={...a},We(!d.pathname||!d.pathname.includes("?"),xd("?","pathname","search",d)),We(!d.pathname||!d.pathname.includes("#"),xd("#","pathname","hash",d)),We(!d.search||!d.search.includes("#"),xd("#","search","hash",d)));let f=a===""||d.pathname==="",p=f?"/":d.pathname,x;if(p==null)x=c;else{let v=l.length-1;if(!s&&p.startsWith("..")){let k=p.split("/");for(;k[0]==="..";)k.shift(),v-=1;d.pathname=k.join("/")}x=v>=0?l[v]:"/"}let m=Pv(d,x),g=p&&p!=="/"&&p.endsWith("/"),y=(f||p===".")&&c.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var Wn=a=>a.join("/").replace(/\/\/+/g,"/"),Wv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Xv=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Zv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Jv=class{constructor(a,l,c,s=!1){this.status=a,this.statusText=l||"",this.internal=s,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function e2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function t2(a){return a.map(l=>l.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var vx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jx(a,l){let c=a;if(typeof c!="string"||!Kv.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let s=c,d=!1;if(vx)try{let f=new URL(window.location.href),p=c.startsWith("//")?new URL(f.protocol+c):new URL(c),x=Xn(p.pathname,l);p.origin===f.origin&&x!=null?c=x+p.search+p.hash:d=!0}catch{zn(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:d,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var wx=["POST","PUT","PATCH","DELETE"];new Set(wx);var n2=["GET",...wx];new Set(n2);var ar=S.createContext(null);ar.displayName="DataRouter";var _s=S.createContext(null);_s.displayName="DataRouterState";var a2=S.createContext(!1),Sx=S.createContext({isTransitioning:!1});Sx.displayName="ViewTransition";var i2=S.createContext(new Map);i2.displayName="Fetchers";var r2=S.createContext(null);r2.displayName="Await";var un=S.createContext(null);un.displayName="Navigation";var xl=S.createContext(null);xl.displayName="Location";var gn=S.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var vf=S.createContext(null);vf.displayName="RouteError";var Cx="REACT_ROUTER_ERROR",l2="REDIRECT",o2="ROUTE_ERROR_RESPONSE";function s2(a){if(a.startsWith(`${Cx}:${l2}:{`))try{let l=JSON.parse(a.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function c2(a){if(a.startsWith(`${Cx}:${o2}:{`))try{let l=JSON.parse(a.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new Jv(l.status,l.statusText,l.data)}catch{}}function u2(a,{relative:l}={}){We(yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:s}=S.useContext(un),{hash:d,pathname:f,search:p}=bl(a,{relative:l}),x=f;return c!=="/"&&(x=f==="/"?c:Wn([c,f])),s.createHref({pathname:x,search:p,hash:d})}function yl(){return S.useContext(xl)!=null}function kn(){return We(yl(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(xl).location}var Ax="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ex(a){S.useContext(un).static||S.useLayoutEffect(a)}function Na(){let{isDataRoute:a}=S.useContext(gn);return a?A2():d2()}function d2(){We(yl(),"useNavigate() may be used only in the context of a <Router> component.");let a=S.useContext(ar),{basename:l,navigator:c}=S.useContext(un),{matches:s}=S.useContext(gn),{pathname:d}=kn(),f=JSON.stringify(yx(s)),p=S.useRef(!1);return Ex(()=>{p.current=!0}),S.useCallback((m,g={})=>{if(zn(p.current,Ax),!p.current)return;if(typeof m=="number"){c.go(m);return}let y=bx(m,JSON.parse(f),d,g.relative==="path");a==null&&l!=="/"&&(y.pathname=y.pathname==="/"?l:Wn([l,y.pathname])),(g.replace?c.replace:c.push)(y,g.state,g)},[l,c,f,d,a])}var f2=S.createContext(null);function p2(a){let l=S.useContext(gn).outlet;return S.useMemo(()=>l&&S.createElement(f2.Provider,{value:a},l),[l,a])}function ir(){let{matches:a}=S.useContext(gn),l=a[a.length-1];return l?l.params:{}}function bl(a,{relative:l}={}){let{matches:c}=S.useContext(gn),{pathname:s}=kn(),d=JSON.stringify(yx(c));return S.useMemo(()=>bx(a,JSON.parse(d),s,l==="path"),[a,d,s,l])}function h2(a,l){return zx(a,l)}function zx(a,l,c,s,d){We(yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=S.useContext(un),{matches:p}=S.useContext(gn),x=p[p.length-1],m=x?x.params:{},g=x?x.pathname:"/",y=x?x.pathnameBase:"/",v=x&&x.route;{let $=v&&v.path||"";Tx(g,!v||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let k=kn(),D;if(l){let $=typeof l=="string"?nr(l):l;We(y==="/"||$.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`),D=$}else D=k;let A=D.pathname||"/",R=A;if(y!=="/"){let $=y.replace(/^\//,"").split("/");R="/"+A.replace(/^\//,"").split("/").slice($.length).join("/")}let E=mx(a,{pathname:R});zn(v||E!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),zn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=b2(E&&E.map($=>Object.assign({},$,{params:Object.assign({},m,$.params),pathname:Wn([y,f.encodeLocation?f.encodeLocation($.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?y:Wn([y,f.encodeLocation?f.encodeLocation($.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathnameBase])})),p,c,s,d);return l&&N?S.createElement(xl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},N):N}function m2(){let a=C2(),l=e2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),c=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:f},"ErrorBoundary")," or"," ",S.createElement("code",{style:f},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},l),c?S.createElement("pre",{style:d},c):null,p)}var g2=S.createElement(m2,null),kx=class extends S.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.onError?this.props.onError(a,l):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const c=c2(a.digest);c&&(a=c)}let l=a!==void 0?S.createElement(gn.Provider,{value:this.props.routeContext},S.createElement(vf.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?S.createElement(x2,{error:a},l):l}};kx.contextType=a2;var yd=new WeakMap;function x2({children:a,error:l}){let{basename:c}=S.useContext(un);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let s=s2(l.digest);if(s){let d=yd.get(l);if(d)throw d;let f=jx(s.location,c);if(vx&&!yd.get(l))if(f.isExternal||s.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:s.replace}));throw yd.set(l,p),p}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return a}function y2({routeContext:a,match:l,children:c}){let s=S.useContext(ar);return s&&s.static&&s.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=l.route.id),S.createElement(gn.Provider,{value:a},c)}function b2(a,l=[],c=null,s=null,d=null){if(a==null){if(!c)return null;if(c.errors)a=c.matches;else if(l.length===0&&!c.initialized&&c.matches.length>0)a=c.matches;else return null}let f=a,p=c?.errors;if(p!=null){let y=f.findIndex(v=>v.route.id&&p?.[v.route.id]!==void 0);We(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,y+1))}let x=!1,m=-1;if(c)for(let y=0;y<f.length;y++){let v=f[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=y),v.route.id){let{loaderData:k,errors:D}=c,A=v.route.loader&&!k.hasOwnProperty(v.route.id)&&(!D||D[v.route.id]===void 0);if(v.route.lazy||A){x=!0,m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}let g=c&&s?(y,v)=>{s(y,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:t2(c.matches),errorInfo:v})}:void 0;return f.reduceRight((y,v,k)=>{let D,A=!1,R=null,E=null;c&&(D=p&&v.route.id?p[v.route.id]:void 0,R=v.route.errorElement||g2,x&&(m<0&&k===0?(Tx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,E=null):m===k&&(A=!0,E=v.route.hydrateFallbackElement||null)));let N=l.concat(f.slice(0,k+1)),$=()=>{let K;return D?K=R:A?K=E:v.route.Component?K=S.createElement(v.route.Component,null):v.route.element?K=v.route.element:K=y,S.createElement(y2,{match:v,routeContext:{outlet:y,matches:N,isDataRoute:c!=null},children:K})};return c&&(v.route.ErrorBoundary||v.route.errorElement||k===0)?S.createElement(kx,{location:c.location,revalidation:c.revalidation,component:R,error:D,children:$(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:g}):$()},null)}function jf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function v2(a){let l=S.useContext(ar);return We(l,jf(a)),l}function j2(a){let l=S.useContext(_s);return We(l,jf(a)),l}function w2(a){let l=S.useContext(gn);return We(l,jf(a)),l}function wf(a){let l=w2(a),c=l.matches[l.matches.length-1];return We(c.route.id,`${a} can only be used on routes that contain a unique "id"`),c.route.id}function S2(){return wf("useRouteId")}function C2(){let a=S.useContext(vf),l=j2("useRouteError"),c=wf("useRouteError");return a!==void 0?a:l.errors?.[c]}function A2(){let{router:a}=v2("useNavigate"),l=wf("useNavigate"),c=S.useRef(!1);return Ex(()=>{c.current=!0}),S.useCallback(async(d,f={})=>{zn(c.current,Ax),c.current&&(typeof d=="number"?await a.navigate(d):await a.navigate(d,{fromRouteId:l,...f}))},[a,l])}var og={};function Tx(a,l,c){!l&&!og[a]&&(og[a]=!0,zn(!1,c))}S.memo(E2);function E2({routes:a,future:l,state:c,onError:s}){return zx(a,void 0,c,s,l)}function z2(a){return p2(a.context)}function Pe(a){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function k2({basename:a="/",children:l=null,location:c,navigationType:s="POP",navigator:d,static:f=!1,unstable_useTransitions:p}){We(!yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=a.replace(/^\/*/,"/"),m=S.useMemo(()=>({basename:x,navigator:d,static:f,unstable_useTransitions:p,future:{}}),[x,d,f,p]);typeof c=="string"&&(c=nr(c));let{pathname:g="/",search:y="",hash:v="",state:k=null,key:D="default"}=c,A=S.useMemo(()=>{let R=Xn(g,x);return R==null?null:{location:{pathname:R,search:y,hash:v,state:k,key:D},navigationType:s}},[x,g,y,v,k,D,s]);return zn(A!=null,`<Router basename="${x}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:S.createElement(un.Provider,{value:m},S.createElement(xl.Provider,{children:l,value:A}))}function T2({children:a,location:l}){return h2(tf(a),l)}function tf(a,l=[]){let c=[];return S.Children.forEach(a,(s,d)=>{if(!S.isValidElement(s))return;let f=[...l,d];if(s.type===S.Fragment){c.push.apply(c,tf(s.props.children,f));return}We(s.type===Pe,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=tf(s.props.children,f)),c.push(p)}),c}var cs="get",us="application/x-www-form-urlencoded";function Os(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function N2(a){return Os(a)&&a.tagName.toLowerCase()==="button"}function R2(a){return Os(a)&&a.tagName.toLowerCase()==="form"}function _2(a){return Os(a)&&a.tagName.toLowerCase()==="input"}function O2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function M2(a,l){return a.button===0&&(!l||l==="_self")&&!O2(a)}var Fo=null;function D2(){if(Fo===null)try{new FormData(document.createElement("form"),0),Fo=!1}catch{Fo=!0}return Fo}var H2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bd(a){return a!=null&&!H2.has(a)?(zn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${us}"`),null):a}function B2(a,l){let c,s,d,f,p;if(R2(a)){let x=a.getAttribute("action");s=x?Xn(x,l):null,c=a.getAttribute("method")||cs,d=bd(a.getAttribute("enctype"))||us,f=new FormData(a)}else if(N2(a)||_2(a)&&(a.type==="submit"||a.type==="image")){let x=a.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||x.getAttribute("action");if(s=m?Xn(m,l):null,c=a.getAttribute("formmethod")||x.getAttribute("method")||cs,d=bd(a.getAttribute("formenctype"))||bd(x.getAttribute("enctype"))||us,f=new FormData(x,a),!D2()){let{name:g,type:y,value:v}=a;if(y==="image"){let k=g?`${g}.`:"";f.append(`${k}x`,"0"),f.append(`${k}y`,"0")}else g&&f.append(g,v)}}else{if(Os(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=cs,s=null,d=us,p=a}return f&&d==="text/plain"&&(p=f,f=void 0),{action:s,method:c.toLowerCase(),encType:d,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function U2(a,l,c,s){let d=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${s}`:d.pathname=`${d.pathname}.${s}`:d.pathname==="/"?d.pathname=`_root.${s}`:l&&Xn(d.pathname,l)==="/"?d.pathname=`${l.replace(/\/$/,"")}/_root.${s}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${s}`,d}async function L2(a,l){if(a.id in l)return l[a.id];try{let c=await import(a.module);return l[a.id]=c,c}catch(c){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function q2(a,l,c){let s=await Promise.all(a.map(async d=>{let f=l.routes[d.route.id];if(f){let p=await L2(f,c);return p.links?p.links():[]}return[]}));return Q2(s.flat(1).filter($2).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function sg(a,l,c,s,d,f){let p=(m,g)=>c[g]?m.route.id!==c[g].route.id:!0,x=(m,g)=>c[g].pathname!==m.pathname||c[g].route.path?.endsWith("*")&&c[g].params["*"]!==m.params["*"];return f==="assets"?l.filter((m,g)=>p(m,g)||x(m,g)):f==="data"?l.filter((m,g)=>{let y=s.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(p(m,g)||x(m,g))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Y2(a,l,{includeHydrateFallback:c}={}){return G2(a.map(s=>{let d=l.routes[s.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function G2(a){return[...new Set(a)]}function V2(a){let l={},c=Object.keys(a).sort();for(let s of c)l[s]=a[s];return l}function Q2(a,l){let c=new Set;return new Set(l),a.reduce((s,d)=>{let f=JSON.stringify(V2(d));return c.has(f)||(c.add(f),s.push({key:f,link:d})),s},[])}function Nx(){let a=S.useContext(ar);return Sf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function I2(){let a=S.useContext(_s);return Sf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Cf=S.createContext(void 0);Cf.displayName="FrameworkContext";function Rx(){let a=S.useContext(Cf);return Sf(a,"You must render this element inside a <HydratedRouter> element"),a}function K2(a,l){let c=S.useContext(Cf),[s,d]=S.useState(!1),[f,p]=S.useState(!1),{onFocus:x,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=l,k=S.useRef(null);S.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let R=N=>{N.forEach($=>{p($.isIntersecting)})},E=new IntersectionObserver(R,{threshold:.5});return k.current&&E.observe(k.current),()=>{E.disconnect()}}},[a]),S.useEffect(()=>{if(s){let R=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(R)}}},[s]);let D=()=>{d(!0)},A=()=>{d(!1),p(!1)};return c?a!=="intent"?[f,k,{}]:[f,k,{onFocus:nl(x,D),onBlur:nl(m,A),onMouseEnter:nl(g,D),onMouseLeave:nl(y,A),onTouchStart:nl(v,D)}]:[!1,k,{}]}function nl(a,l){return c=>{a&&a(c),c.defaultPrevented||l(c)}}function P2({page:a,...l}){let{router:c}=Nx(),s=S.useMemo(()=>mx(c.routes,a,c.basename),[c.routes,a,c.basename]);return s?S.createElement(W2,{page:a,matches:s,...l}):null}function F2(a){let{manifest:l,routeModules:c}=Rx(),[s,d]=S.useState([]);return S.useEffect(()=>{let f=!1;return q2(a,l,c).then(p=>{f||d(p)}),()=>{f=!0}},[a,l,c]),s}function W2({page:a,matches:l,...c}){let s=kn(),{future:d,manifest:f,routeModules:p}=Rx(),{basename:x}=Nx(),{loaderData:m,matches:g}=I2(),y=S.useMemo(()=>sg(a,l,g,f,s,"data"),[a,l,g,f,s]),v=S.useMemo(()=>sg(a,l,g,f,s,"assets"),[a,l,g,f,s]),k=S.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let R=new Set,E=!1;if(l.forEach($=>{let K=f.routes[$.route.id];!K||!K.hasLoader||(!y.some(P=>P.route.id===$.route.id)&&$.route.id in m&&p[$.route.id]?.shouldRevalidate||K.hasClientLoader?E=!0:R.add($.route.id))}),R.size===0)return[];let N=U2(a,x,d.unstable_trailingSlashAwareDataRequests,"data");return E&&R.size>0&&N.searchParams.set("_routes",l.filter($=>R.has($.route.id)).map($=>$.route.id).join(",")),[N.pathname+N.search]},[x,d.unstable_trailingSlashAwareDataRequests,m,s,f,y,l,a,p]),D=S.useMemo(()=>Y2(v,f),[v,f]),A=F2(v);return S.createElement(S.Fragment,null,k.map(R=>S.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...c})),D.map(R=>S.createElement("link",{key:R,rel:"modulepreload",href:R,...c})),A.map(({key:R,link:E})=>S.createElement("link",{key:R,nonce:c.nonce,...E,crossOrigin:E.crossOrigin??c.crossOrigin})))}function X2(...a){return l=>{a.forEach(c=>{typeof c=="function"?c(l):c!=null&&(c.current=l)})}}var Z2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Z2&&(window.__reactRouterVersion="7.13.0")}catch{}function J2({basename:a,children:l,unstable_useTransitions:c,window:s}){let d=S.useRef();d.current==null&&(d.current=Nv({window:s,v5Compat:!0}));let f=d.current,[p,x]=S.useState({action:f.action,location:f.location}),m=S.useCallback(g=>{c===!1?x(g):S.startTransition(()=>x(g))},[c]);return S.useLayoutEffect(()=>f.listen(m),[f,m]),S.createElement(k2,{basename:a,children:l,location:p.location,navigationType:p.action,navigator:f,unstable_useTransitions:c})}var _x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=S.forwardRef(function({onClick:l,discover:c="render",prefetch:s="none",relative:d,reloadDocument:f,replace:p,state:x,target:m,to:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:k,...D},A){let{basename:R,unstable_useTransitions:E}=S.useContext(un),N=typeof g=="string"&&_x.test(g),$=jx(g,R);g=$.to;let K=u2(g,{relative:d}),[P,ee,J]=K2(s,D),Q=a5(g,{replace:p,state:x,target:m,preventScrollReset:y,relative:d,viewTransition:v,unstable_defaultShouldRevalidate:k,unstable_useTransitions:E});function F(ye){l&&l(ye),ye.defaultPrevented||Q(ye)}let he=S.createElement("a",{...D,...J,href:$.absoluteURL||K,onClick:$.isExternal||f?l:F,ref:X2(A,ee),target:m,"data-discover":!N&&c==="render"?"true":void 0});return P&&!N?S.createElement(S.Fragment,null,he,S.createElement(P2,{page:K})):he});Se.displayName="Link";var e5=S.forwardRef(function({"aria-current":l="page",caseSensitive:c=!1,className:s="",end:d=!1,style:f,to:p,viewTransition:x,children:m,...g},y){let v=bl(p,{relative:g.relative}),k=kn(),D=S.useContext(_s),{navigator:A,basename:R}=S.useContext(un),E=D!=null&&s5(v)&&x===!0,N=A.encodeLocation?A.encodeLocation(v).pathname:v.pathname,$=k.pathname,K=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;c||($=$.toLowerCase(),K=K?K.toLowerCase():null,N=N.toLowerCase()),K&&R&&(K=Xn(K,R)||K);const P=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let ee=$===N||!d&&$.startsWith(N)&&$.charAt(P)==="/",J=K!=null&&(K===N||!d&&K.startsWith(N)&&K.charAt(N.length)==="/"),Q={isActive:ee,isPending:J,isTransitioning:E},F=ee?l:void 0,he;typeof s=="function"?he=s(Q):he=[s,ee?"active":null,J?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let ye=typeof f=="function"?f(Q):f;return S.createElement(Se,{...g,"aria-current":F,className:he,ref:y,style:ye,to:p,viewTransition:x},typeof m=="function"?m(Q):m)});e5.displayName="NavLink";var t5=S.forwardRef(({discover:a="render",fetcherKey:l,navigate:c,reloadDocument:s,replace:d,state:f,method:p=cs,action:x,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:k,...D},A)=>{let{unstable_useTransitions:R}=S.useContext(un),E=l5(),N=o5(x,{relative:g}),$=p.toLowerCase()==="get"?"get":"post",K=typeof x=="string"&&_x.test(x),P=ee=>{if(m&&m(ee),ee.defaultPrevented)return;ee.preventDefault();let J=ee.nativeEvent.submitter,Q=J?.getAttribute("formmethod")||p,F=()=>E(J||ee.currentTarget,{fetcherKey:l,method:Q,navigate:c,replace:d,state:f,relative:g,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:k});R&&c!==!1?S.startTransition(()=>F()):F()};return S.createElement("form",{ref:A,method:$,action:N,onSubmit:s?m:P,...D,"data-discover":!K&&a==="render"?"true":void 0})});t5.displayName="Form";function n5(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ox(a){let l=S.useContext(ar);return We(l,n5(a)),l}function a5(a,{target:l,replace:c,state:s,preventScrollReset:d,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:x,unstable_useTransitions:m}={}){let g=Na(),y=kn(),v=bl(a,{relative:f});return S.useCallback(k=>{if(M2(k,l)){k.preventDefault();let D=c!==void 0?c:fl(y)===fl(v),A=()=>g(a,{replace:D,state:s,preventScrollReset:d,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:x});m?S.startTransition(()=>A()):A()}},[y,g,v,c,s,l,a,d,f,p,x,m])}var i5=0,r5=()=>`__${String(++i5)}__`;function l5(){let{router:a}=Ox("useSubmit"),{basename:l}=S.useContext(un),c=S2(),s=a.fetch,d=a.navigate;return S.useCallback(async(f,p={})=>{let{action:x,method:m,encType:g,formData:y,body:v}=B2(f,l);if(p.navigate===!1){let k=p.fetcherKey||r5();await s(k,c,p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:v,formMethod:p.method||m,formEncType:p.encType||g,flushSync:p.flushSync})}else await d(p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:v,formMethod:p.method||m,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:c,flushSync:p.flushSync,viewTransition:p.viewTransition})},[s,d,l,c])}function o5(a,{relative:l}={}){let{basename:c}=S.useContext(un),s=S.useContext(gn);We(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),f={...bl(a||".",{relative:l})},p=kn();if(a==null){f.search=p.search;let x=new URLSearchParams(f.search),m=x.getAll("index");if(m.some(y=>y==="")){x.delete("index"),m.filter(v=>v).forEach(v=>x.append("index",v));let y=x.toString();f.search=y?`?${y}`:""}}return(!a||a===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(f.pathname=f.pathname==="/"?c:Wn([c,f.pathname])),fl(f)}function s5(a,{relative:l}={}){let c=S.useContext(Sx);We(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ox("useViewTransitionState"),d=bl(a,{relative:l});if(!c.isTransitioning)return!1;let f=Xn(c.currentLocation.pathname,s)||c.currentLocation.pathname,p=Xn(c.nextLocation.pathname,s)||c.nextLocation.pathname;return js(d.pathname,p)!=null||js(d.pathname,f)!=null}var xt=function(){return xt=Object.assign||function(l){for(var c,s=1,d=arguments.length;s<d;s++){c=arguments[s];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(l[f]=c[f])}return l},xt.apply(this,arguments)};function Wi(a,l,c){if(c||arguments.length===2)for(var s=0,d=l.length,f;s<d;s++)(f||!(s in l))&&(f||(f=Array.prototype.slice.call(l,0,s)),f[s]=l[s]);return a.concat(f||Array.prototype.slice.call(l))}var Qe="-ms-",cl="-moz-",_e="-webkit-",Mx="comm",Ms="rule",Af="decl",c5="@import",u5="@namespace",Dx="@keyframes",d5="@layer",Hx=Math.abs,Ef=String.fromCharCode,nf=Object.assign;function f5(a,l){return ft(a,0)^45?(((l<<2^ft(a,0))<<2^ft(a,1))<<2^ft(a,2))<<2^ft(a,3):0}function Bx(a){return a.trim()}function Pn(a,l){return(a=l.exec(a))?a[0]:a}function be(a,l,c){return a.replace(l,c)}function ds(a,l,c){return a.indexOf(l,c)}function ft(a,l){return a.charCodeAt(l)|0}function ni(a,l,c){return a.slice(l,c)}function hn(a){return a.length}function Ux(a){return a.length}function ol(a,l){return l.push(a),a}function p5(a,l){return a.map(l).join("")}function cg(a,l){return a.filter(function(c){return!Pn(c,l)})}var Ds=1,Xi=1,Lx=0,cn=0,ut=0,rr="";function Hs(a,l,c,s,d,f,p,x){return{value:a,root:l,parent:c,type:s,props:d,children:f,line:Ds,column:Xi,length:p,return:"",siblings:x}}function Ca(a,l){return nf(Hs("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},l)}function Gi(a){for(;a.root;)a=Ca(a.root,{children:[a]});ol(a,a.siblings)}function h5(){return ut}function m5(){return ut=cn>0?ft(rr,--cn):0,Xi--,ut===10&&(Xi=1,Ds--),ut}function mn(){return ut=cn<Lx?ft(rr,cn++):0,Xi++,ut===10&&(Xi=1,Ds++),ut}function Ea(){return ft(rr,cn)}function fs(){return cn}function Bs(a,l){return ni(rr,a,l)}function pl(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g5(a){return Ds=Xi=1,Lx=hn(rr=a),cn=0,[]}function x5(a){return rr="",a}function vd(a){return Bx(Bs(cn-1,af(a===91?a+2:a===40?a+1:a)))}function y5(a){for(;(ut=Ea())&&ut<33;)mn();return pl(a)>2||pl(ut)>3?"":" "}function b5(a,l){for(;--l&&mn()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Bs(a,fs()+(l<6&&Ea()==32&&mn()==32))}function af(a){for(;mn();)switch(ut){case a:return cn;case 34:case 39:a!==34&&a!==39&&af(ut);break;case 40:a===41&&af(a);break;case 92:mn();break}return cn}function v5(a,l){for(;mn()&&a+ut!==57;)if(a+ut===84&&Ea()===47)break;return"/*"+Bs(l,cn-1)+"*"+Ef(a===47?a:mn())}function j5(a){for(;!pl(Ea());)mn();return Bs(a,cn)}function w5(a){return x5(ps("",null,null,null,[""],a=g5(a),0,[0],a))}function ps(a,l,c,s,d,f,p,x,m){for(var g=0,y=0,v=p,k=0,D=0,A=0,R=1,E=1,N=1,$=0,K="",P=d,ee=f,J=s,Q=K;E;)switch(A=$,$=mn()){case 40:if(A!=108&&ft(Q,v-1)==58){ds(Q+=be(vd($),"&","&\f"),"&\f",Hx(g?x[g-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:Q+=vd($);break;case 9:case 10:case 13:case 32:Q+=y5(A);break;case 92:Q+=b5(fs()-1,7);continue;case 47:switch(Ea()){case 42:case 47:ol(S5(v5(mn(),fs()),l,c,m),m),(pl(A||1)==5||pl(Ea()||1)==5)&&hn(Q)&&ni(Q,-1,void 0)!==" "&&(Q+=" ");break;default:Q+="/"}break;case 123*R:x[g++]=hn(Q)*N;case 125*R:case 59:case 0:switch($){case 0:case 125:E=0;case 59+y:N==-1&&(Q=be(Q,/\f/g,"")),D>0&&(hn(Q)-v||R===0&&A===47)&&ol(D>32?dg(Q+";",s,c,v-1,m):dg(be(Q," ","")+";",s,c,v-2,m),m);break;case 59:Q+=";";default:if(ol(J=ug(Q,l,c,g,y,d,x,K,P=[],ee=[],v,f),f),$===123)if(y===0)ps(Q,l,J,J,P,f,v,x,ee);else{switch(k){case 99:if(ft(Q,3)===110)break;case 108:if(ft(Q,2)===97)break;default:y=0;case 100:case 109:case 115:}y?ps(a,J,J,s&&ol(ug(a,J,J,0,0,d,x,K,d,P=[],v,ee),ee),d,ee,v,x,s?P:ee):ps(Q,J,J,J,[""],ee,0,x,ee)}}g=y=D=0,R=N=1,K=Q="",v=p;break;case 58:v=1+hn(Q),D=A;default:if(R<1){if($==123)--R;else if($==125&&R++==0&&m5()==125)continue}switch(Q+=Ef($),$*R){case 38:N=y>0?1:(Q+="\f",-1);break;case 44:x[g++]=(hn(Q)-1)*N,N=1;break;case 64:Ea()===45&&(Q+=vd(mn())),k=Ea(),y=v=hn(K=Q+=j5(fs())),$++;break;case 45:A===45&&hn(Q)==2&&(R=0)}}return f}function ug(a,l,c,s,d,f,p,x,m,g,y,v){for(var k=d-1,D=d===0?f:[""],A=Ux(D),R=0,E=0,N=0;R<s;++R)for(var $=0,K=ni(a,k+1,k=Hx(E=p[R])),P=a;$<A;++$)(P=Bx(E>0?D[$]+" "+K:be(K,/&\f/g,D[$])))&&(m[N++]=P);return Hs(a,l,c,d===0?Ms:x,m,g,y,v)}function S5(a,l,c,s){return Hs(a,l,c,Mx,Ef(h5()),ni(a,2,-2),0,s)}function dg(a,l,c,s,d){return Hs(a,l,c,Af,ni(a,0,s),ni(a,s+1,-1),s,d)}function $x(a,l,c){switch(f5(a,l)){case 5103:return _e+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return _e+a+a;case 4855:return _e+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return cl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+a+cl+a+Qe+a+a;case 5936:switch(ft(a,l+11)){case 114:return _e+a+Qe+be(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return _e+a+Qe+be(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return _e+a+Qe+be(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return _e+a+Qe+a+a;case 6165:return _e+a+Qe+"flex-"+a+a;case 5187:return _e+a+be(a,/(\w+).+(:[^]+)/,_e+"box-$1$2"+Qe+"flex-$1$2")+a;case 5443:return _e+a+Qe+"flex-item-"+be(a,/flex-|-self/g,"")+(Pn(a,/flex-|baseline/)?"":Qe+"grid-row-"+be(a,/flex-|-self/g,""))+a;case 4675:return _e+a+Qe+"flex-line-pack"+be(a,/align-content|flex-|-self/g,"")+a;case 5548:return _e+a+Qe+be(a,"shrink","negative")+a;case 5292:return _e+a+Qe+be(a,"basis","preferred-size")+a;case 6060:return _e+"box-"+be(a,"-grow","")+_e+a+Qe+be(a,"grow","positive")+a;case 4554:return _e+be(a,/([^-])(transform)/g,"$1"+_e+"$2")+a;case 6187:return be(be(be(a,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),a,"")+a;case 5495:case 3959:return be(a,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return be(be(a,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+Qe+"flex-pack:$3"),/space-between/,"justify")+_e+a+a;case 4200:if(!Pn(a,/flex-|baseline/))return Qe+"grid-column-align"+ni(a,l)+a;break;case 2592:case 3360:return Qe+be(a,"template-","")+a;case 4384:case 3616:return c&&c.some(function(s,d){return l=d,Pn(s.props,/grid-\w+-end/)})?~ds(a+(c=c[l].value),"span",0)?a:Qe+be(a,"-start","")+a+Qe+"grid-row-span:"+(~ds(c,"span",0)?Pn(c,/\d+/):+Pn(c,/\d+/)-+Pn(a,/\d+/))+";":Qe+be(a,"-start","")+a;case 4896:case 4128:return c&&c.some(function(s){return Pn(s.props,/grid-\w+-start/)})?a:Qe+be(be(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return be(a,/(.+)-inline(.+)/,_e+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(a)-1-l>6)switch(ft(a,l+1)){case 109:if(ft(a,l+4)!==45)break;case 102:return be(a,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+cl+(ft(a,l+3)==108?"$3":"$2-$3"))+a;case 115:return~ds(a,"stretch",0)?$x(be(a,"stretch","fill-available"),l,c)+a:a}break;case 5152:case 5920:return be(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,d,f,p,x,m,g){return Qe+d+":"+f+g+(p?Qe+d+"-span:"+(x?m:+m-+f)+g:"")+a});case 4949:if(ft(a,l+6)===121)return be(a,":",":"+_e)+a;break;case 6444:switch(ft(a,ft(a,14)===45?18:11)){case 120:return be(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_e+(ft(a,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+Qe+"$2box$3")+a;case 100:return be(a,":",":"+Qe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return be(a,"scroll-","scroll-snap-")+a}return a}function ws(a,l){for(var c="",s=0;s<a.length;s++)c+=l(a[s],s,a,l)||"";return c}function C5(a,l,c,s){switch(a.type){case d5:if(a.children.length)break;case c5:case u5:case Af:return a.return=a.return||a.value;case Mx:return"";case Dx:return a.return=a.value+"{"+ws(a.children,s)+"}";case Ms:if(!hn(a.value=a.props.join(",")))return""}return hn(c=ws(a.children,s))?a.return=a.value+"{"+c+"}":""}function A5(a){var l=Ux(a);return function(c,s,d,f){for(var p="",x=0;x<l;x++)p+=a[x](c,s,d,f)||"";return p}}function E5(a){return function(l){l.root||(l=l.return)&&a(l)}}function z5(a,l,c,s){if(a.length>-1&&!a.return)switch(a.type){case Af:a.return=$x(a.value,a.length,c);return;case Dx:return ws([Ca(a,{value:be(a.value,"@","@"+_e)})],s);case Ms:if(a.length)return p5(c=a.props,function(d){switch(Pn(d,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gi(Ca(a,{props:[be(d,/:(read-\w+)/,":"+cl+"$1")]})),Gi(Ca(a,{props:[d]})),nf(a,{props:cg(c,s)});break;case"::placeholder":Gi(Ca(a,{props:[be(d,/:(plac\w+)/,":"+_e+"input-$1")]})),Gi(Ca(a,{props:[be(d,/:(plac\w+)/,":"+cl+"$1")]})),Gi(Ca(a,{props:[be(d,/:(plac\w+)/,Qe+"input-$1")]})),Gi(Ca(a,{props:[d]})),nf(a,{props:cg(c,s)});break}return""})}}var k5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pt={},Zi=typeof process<"u"&&Pt!==void 0&&(Pt.REACT_APP_SC_ATTR||Pt.SC_ATTR)||"data-styled",qx="active",Yx="data-styled-version",Us="6.3.9",zf=`/*!sc*/
`,ul=typeof window<"u"&&typeof document<"u",sn=tt.createContext===void 0,T5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pt!==void 0&&Pt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pt.REACT_APP_SC_DISABLE_SPEEDY!==""?Pt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pt!==void 0&&Pt.SC_DISABLE_SPEEDY!==void 0&&Pt.SC_DISABLE_SPEEDY!==""&&Pt.SC_DISABLE_SPEEDY!=="false"&&Pt.SC_DISABLE_SPEEDY),N5={},kf=Object.freeze([]),Ji=Object.freeze({});function Gx(a,l,c){return c===void 0&&(c=Ji),a.theme!==c.theme&&a.theme||l||c.theme}var Vx=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),R5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_5=/(^-|-$)/g;function fg(a){return a.replace(R5,"-").replace(_5,"")}var O5=/(a)(d)/gi,pg=function(a){return String.fromCharCode(a+(a>25?39:97))};function rf(a){var l,c="";for(l=Math.abs(a);l>52;l=l/52|0)c=pg(l%52)+c;return(pg(l%52)+c).replace(O5,"$1-$2")}var jd,Wa=function(a,l){for(var c=l.length;c;)a=33*a^l.charCodeAt(--c);return a},Qx=function(a){return Wa(5381,a)};function Tf(a){return rf(Qx(a)>>>0)}function M5(a){return a.displayName||a.name||"Component"}function wd(a){return typeof a=="string"&&!0}var Ix=typeof Symbol=="function"&&Symbol.for,Kx=Ix?Symbol.for("react.memo"):60115,D5=Ix?Symbol.for("react.forward_ref"):60112,H5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},B5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Px={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},U5=((jd={})[D5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jd[Kx]=Px,jd);function hg(a){return("type"in(l=a)&&l.type.$$typeof)===Kx?Px:"$$typeof"in a?U5[a.$$typeof]:H5;var l}var L5=Object.defineProperty,$5=Object.getOwnPropertyNames,mg=Object.getOwnPropertySymbols,q5=Object.getOwnPropertyDescriptor,Y5=Object.getPrototypeOf,gg=Object.prototype;function Fx(a,l,c){if(typeof l!="string"){if(gg){var s=Y5(l);s&&s!==gg&&Fx(a,s,c)}var d=$5(l);mg&&(d=d.concat(mg(l)));for(var f=hg(a),p=hg(l),x=0;x<d.length;++x){var m=d[x];if(!(m in B5||c&&c[m]||p&&m in p||f&&m in f)){var g=q5(l,m);try{L5(a,m,g)}catch{}}}}return a}function ai(a){return typeof a=="function"}function Nf(a){return typeof a=="object"&&"styledComponentId"in a}function Za(a,l){return a&&l?"".concat(a," ").concat(l):a||l||""}function Ss(a,l){return a.join("")}function hl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function lf(a,l,c){if(c===void 0&&(c=!1),!c&&!hl(a)&&!Array.isArray(a))return l;if(Array.isArray(l))for(var s=0;s<l.length;s++)a[s]=lf(a[s],l[s]);else if(hl(l))for(var s in l)a[s]=lf(a[s],l[s]);return a}function Rf(a,l){Object.defineProperty(a,"toString",{value:l})}function ka(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var G5=(function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l,this._cGroup=0,this._cIndex=0}return a.prototype.indexOfGroup=function(l){if(l===this._cGroup)return this._cIndex;var c=this._cIndex;if(l>this._cGroup)for(var s=this._cGroup;s<l;s++)c+=this.groupSizes[s];else for(s=this._cGroup-1;s>=l;s--)c-=this.groupSizes[s];return this._cGroup=l,this._cIndex=c,c},a.prototype.insertRules=function(l,c){if(l>=this.groupSizes.length){for(var s=this.groupSizes,d=s.length,f=d;l>=f;)if((f<<=1)<0)throw ka(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var p=d;p<f;p++)this.groupSizes[p]=0}for(var x=this.indexOfGroup(l+1),m=0,g=(p=0,c.length);p<g;p++)this.tag.insertRule(x,c[p])&&(this.groupSizes[l]++,x++,m++);m>0&&this._cGroup>l&&(this._cIndex+=m)},a.prototype.clearGroup=function(l){if(l<this.length){var c=this.groupSizes[l],s=this.indexOfGroup(l),d=s+c;this.groupSizes[l]=0;for(var f=s;f<d;f++)this.tag.deleteRule(s);c>0&&this._cGroup>l&&(this._cIndex-=c)}},a.prototype.getGroup=function(l){var c="";if(l>=this.length||this.groupSizes[l]===0)return c;for(var s=this.groupSizes[l],d=this.indexOfGroup(l),f=d+s,p=d;p<f;p++)c+=this.tag.getRule(p)+zf;return c},a})(),hs=new Map,Cs=new Map,ms=1,Pi=function(a){if(hs.has(a))return hs.get(a);for(;Cs.has(ms);)ms++;var l=ms++;return hs.set(a,l),Cs.set(l,a),l},V5=function(a,l){ms=l+1,hs.set(a,l),Cs.set(l,a)},Q5="style[".concat(Zi,"][").concat(Yx,'="').concat(Us,'"]'),I5=new RegExp("^".concat(Zi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xg=function(a){return typeof ShadowRoot<"u"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11},of=function(a){if(!a)return document;if(xg(a))return a;if("getRootNode"in a){var l=a.getRootNode();if(xg(l))return l}return document},K5=function(a,l,c){for(var s,d=c.split(","),f=0,p=d.length;f<p;f++)(s=d[f])&&a.registerName(l,s)},P5=function(a,l){for(var c,s=((c=l.textContent)!==null&&c!==void 0?c:"").split(zf),d=[],f=0,p=s.length;f<p;f++){var x=s[f].trim();if(x){var m=x.match(I5);if(m){var g=0|parseInt(m[1],10),y=m[2];g!==0&&(V5(y,g),K5(a,y,m[3]),a.getTag().insertRules(g,d)),d.length=0}else d.push(x)}}},Sd=function(a){for(var l=of(a.options.target).querySelectorAll(Q5),c=0,s=l.length;c<s;c++){var d=l[c];d&&d.getAttribute(Zi)!==qx&&(P5(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function F5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wx=function(a){var l=document.head,c=a||l,s=document.createElement("style"),d=(function(x){var m=Array.from(x.querySelectorAll("style[".concat(Zi,"]")));return m[m.length-1]})(c),f=d!==void 0?d.nextSibling:null;s.setAttribute(Zi,qx),s.setAttribute(Yx,Us);var p=F5();return p&&s.setAttribute("nonce",p),c.insertBefore(s,f),s},W5=(function(){function a(l){this.element=Wx(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){var s;if(c.sheet)return c.sheet;for(var d=(s=c.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets,f=0,p=d.length;f<p;f++){var x=d[f];if(x.ownerNode===c)return x}throw ka(17)})(this.element),this.length=0}return a.prototype.insertRule=function(l,c){try{return this.sheet.insertRule(c,l),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},a.prototype.getRule=function(l){var c=this.sheet.cssRules[l];return c&&c.cssText?c.cssText:""},a})(),X5=(function(){function a(l){this.element=Wx(l),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(l,c){if(l<=this.length&&l>=0){var s=document.createTextNode(c);return this.element.insertBefore(s,this.nodes[l]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},a.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a})(),Z5=(function(){function a(l){this.rules=[],this.length=0}return a.prototype.insertRule=function(l,c){return l<=this.length&&(l===this.length?this.rules.push(c):this.rules.splice(l,0,c),this.length++,!0)},a.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},a.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},a})(),yg=ul,J5={isServer:!ul,useCSSOMInjection:!T5},As=(function(){function a(l,c,s){l===void 0&&(l=Ji),c===void 0&&(c={});var d=this;this.options=xt(xt({},J5),l),this.gs=c,this.names=new Map(s),this.server=!!l.isServer,!this.server&&ul&&yg&&(yg=!1,Sd(this)),Rf(this,function(){return(function(f){for(var p=f.getTag(),x=p.length,m="",g=function(v){var k=(function(N){return Cs.get(N)})(v);if(k===void 0)return"continue";var D=f.names.get(k);if(D===void 0||!D.size)return"continue";var A=p.getGroup(v);if(A.length===0)return"continue";var R=Zi+".g"+v+'[id="'+k+'"]',E="";D.forEach(function(N){N.length>0&&(E+=N+",")}),m+=A+R+'{content:"'+E+'"}'+zf},y=0;y<x;y++)g(y);return m})(d)})}return a.registerId=function(l){return Pi(l)},a.prototype.rehydrate=function(){!this.server&&ul&&Sd(this)},a.prototype.reconstructWithOptions=function(l,c){c===void 0&&(c=!0);var s=new a(xt(xt({},this.options),l),this.gs,c&&this.names||void 0);return!this.server&&ul&&l.target!==this.options.target&&of(this.options.target)!==of(l.target)&&Sd(s),s},a.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(c){var s=c.useCSSOMInjection,d=c.target;return c.isServer?new Z5(d):s?new W5(d):new X5(d)})(this.options),new G5(l)));var l},a.prototype.hasNameForId=function(l,c){var s,d;return(d=(s=this.names.get(l))===null||s===void 0?void 0:s.has(c))!==null&&d!==void 0&&d},a.prototype.registerName=function(l,c){Pi(l);var s=this.names.get(l);s?s.add(c):this.names.set(l,new Set([c]))},a.prototype.insertRules=function(l,c,s){this.registerName(l,c),this.getTag().insertRules(Pi(l),s)},a.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},a.prototype.clearRules=function(l){this.getTag().clearGroup(Pi(l)),this.clearNames(l)},a.prototype.clearTag=function(){this.tag=void 0},a})(),ej=/&/g,Fn=47,Xa=42;function bg(a){if(a.indexOf("}")===-1)return!1;for(var l=a.length,c=0,s=0,d=!1,f=0;f<l;f++){var p=a.charCodeAt(f);if(s!==0||d||p!==Fn||a.charCodeAt(f+1)!==Xa)if(d)p===Xa&&a.charCodeAt(f+1)===Fn&&(d=!1,f++);else if(p!==34&&p!==39||f!==0&&a.charCodeAt(f-1)===92){if(s===0){if(p===123)c++;else if(p===125&&--c<0)return!0}}else s===0?s=p:s===p&&(s=0);else d=!0,f++}return c!==0||s!==0}function Xx(a,l){return a.map(function(c){return c.type==="rule"&&(c.value="".concat(l," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(l," ")),c.props=c.props.map(function(s){return"".concat(l," ").concat(s)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Xx(c.children,l)),c})}function tj(a){var l,c,s,d=Ji,f=d.options,p=f===void 0?Ji:f,x=d.plugins,m=x===void 0?kf:x,g=function(A,R,E){return E.startsWith(c)&&E.endsWith(c)&&E.replaceAll(c,"").length>0?".".concat(l):A},y=m.slice();y.push(function(A){A.type===Ms&&A.value.includes("&")&&(s||(s=new RegExp("\\".concat(c,"\\b"),"g")),A.props[0]=A.props[0].replace(ej,c).replace(s,g))}),p.prefix&&y.push(z5),y.push(C5);var v=[],k=A5(y.concat(E5(function(A){return v.push(A)}))),D=function(A,R,E,N){R===void 0&&(R=""),E===void 0&&(E=""),N===void 0&&(N="&"),l=N,c=R,s=void 0;var $=(function(P){if(!bg(P))return P;for(var ee=P.length,J="",Q=0,F=0,he=0,ye=!1,de=0;de<ee;de++){var ze=P.charCodeAt(de);if(he!==0||ye||ze!==Fn||P.charCodeAt(de+1)!==Xa)if(ye)ze===Xa&&P.charCodeAt(de+1)===Fn&&(ye=!1,de++);else if(ze!==34&&ze!==39||de!==0&&P.charCodeAt(de-1)===92){if(he===0)if(ze===123)F++;else if(ze===125){if(--F<0){for(var Le=de+1;Le<ee;){var Ye=P.charCodeAt(Le);if(Ye===59||Ye===10)break;Le++}Le<ee&&P.charCodeAt(Le)===59&&Le++,F=0,de=Le-1,Q=Le;continue}F===0&&(J+=P.substring(Q,de+1),Q=de+1)}else ze===59&&F===0&&(J+=P.substring(Q,de+1),Q=de+1)}else he===0?he=ze:he===ze&&(he=0);else ye=!0,de++}if(Q<ee){var nt=P.substring(Q);bg(nt)||(J+=nt)}return J})((function(P){if(P.indexOf("//")===-1)return P;for(var ee=P.length,J=[],Q=0,F=0,he=0,ye=0;F<ee;){var de=P.charCodeAt(F);if(de!==34&&de!==39||F!==0&&P.charCodeAt(F-1)===92)if(he===0)if(de===Fn&&F+1<ee&&P.charCodeAt(F+1)===Xa){for(F+=2;F+1<ee&&(P.charCodeAt(F)!==Xa||P.charCodeAt(F+1)!==Fn);)F++;F+=2}else if(de===40&&F>=3&&(32|P.charCodeAt(F-1))==108&&(32|P.charCodeAt(F-2))==114&&(32|P.charCodeAt(F-3))==117)ye=1,F++;else if(ye>0)de===41?ye--:de===40&&ye++,F++;else if(de===Xa&&F+1<ee&&P.charCodeAt(F+1)===Fn)F>Q&&J.push(P.substring(Q,F)),Q=F+=2;else if(de===Fn&&F+1<ee&&P.charCodeAt(F+1)===Fn){for(F>Q&&J.push(P.substring(Q,F));F<ee&&P.charCodeAt(F)!==10;)F++;Q=F}else F++;else F++;else he===0?he=de:he===de&&(he=0),F++}return Q===0?P:(Q<ee&&J.push(P.substring(Q)),J.join(""))})(A)),K=w5(E||R?"".concat(E," ").concat(R," { ").concat($," }"):$);return p.namespace&&(K=Xx(K,p.namespace)),v=[],ws(K,k),v};return D.hash=m.length?m.reduce(function(A,R){return R.name||ka(15),Wa(A,R.name)},5381).toString():"",D}var nj=new As,sf=tj(),cf={shouldForwardProp:void 0,styleSheet:nj,stylis:sf},Zx=sn?{Provider:function(a){return a.children},Consumer:function(a){return(0,a.children)(cf)}}:tt.createContext(cf);Zx.Consumer;sn||tt.createContext(void 0);function uf(){return sn?cf:tt.useContext(Zx)}var Jx=(function(){function a(l,c){var s=this;this.inject=function(d,f){f===void 0&&(f=sf);var p=s.name+f.hash;d.hasNameForId(s.id,p)||d.insertRules(s.id,p,f(s.rules,p,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=c,Rf(this,function(){throw ka(12,String(s.name))})}return a.prototype.getName=function(l){return l===void 0&&(l=sf),this.name+l.hash},a})();function aj(a,l){return l==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||a in k5||a.startsWith("--")?String(l).trim():"".concat(l,"px")}var ij=function(a){return a>="A"&&a<="Z"};function vg(a){for(var l="",c=0;c<a.length;c++){var s=a[c];if(c===1&&s==="-"&&a[0]==="-")return a;ij(s)?l+="-"+s.toLowerCase():l+=s}return l.startsWith("ms-")?"-"+l:l}var e1=function(a){return a==null||a===!1||a===""},t1=function(a){var l=[];for(var c in a){var s=a[c];a.hasOwnProperty(c)&&!e1(s)&&(Array.isArray(s)&&s.isCss||ai(s)?l.push("".concat(vg(c),":"),s,";"):hl(s)?l.push.apply(l,Wi(Wi(["".concat(c," {")],t1(s),!1),["}"],!1)):l.push("".concat(vg(c),": ").concat(aj(c,s),";")))}return l};function za(a,l,c,s,d){if(d===void 0&&(d=[]),typeof a=="string")return a&&d.push(a),d;if(e1(a))return d;if(Nf(a))return d.push(".".concat(a.styledComponentId)),d;if(ai(a)){if(!ai(p=a)||p.prototype&&p.prototype.isReactComponent||!l)return d.push(a),d;var f=a(l);return za(f,l,c,s,d)}var p;if(a instanceof Jx)return c?(a.inject(c,s),d.push(a.getName(s))):d.push(a),d;if(hl(a)){for(var x=t1(a),m=0;m<x.length;m++)d.push(x[m]);return d}if(!Array.isArray(a))return d.push(a.toString()),d;for(m=0;m<a.length;m++)za(a[m],l,c,s,d);return d}function n1(a){for(var l=0;l<a.length;l+=1){var c=a[l];if(ai(c)&&!Nf(c))return!1}return!0}var rj=Qx(Us),lj=(function(){function a(l,c,s){this.rules=l,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&n1(l),this.componentId=c,this.baseHash=Wa(rj,c),this.baseStyle=s,As.registerId(c)}return a.prototype.generateAndInjectStyles=function(l,c,s){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,c,s).className:"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=Za(d,this.staticRulesId);else{var f=Ss(za(this.rules,l,c,s)),p=rf(Wa(this.baseHash,f)>>>0);if(!c.hasNameForId(this.componentId,p)){var x=s(f,".".concat(p),void 0,this.componentId);c.insertRules(this.componentId,p,x)}d=Za(d,p),this.staticRulesId=p}else{for(var m=Wa(this.baseHash,s.hash),g="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")g+=v;else if(v){var k=Ss(za(v,l,c,s));m=Wa(Wa(m,String(y)),k),g+=k}}if(g){var D=rf(m>>>0);if(!c.hasNameForId(this.componentId,D)){var A=s(g,".".concat(D),void 0,this.componentId);c.insertRules(this.componentId,D,A)}d=Za(d,D)}}return{className:d,css:typeof window>"u"?c.getTag().getGroup(Pi(this.componentId)):""}},a})(),er=sn?{Provider:function(a){return a.children},Consumer:function(a){return(0,a.children)(void 0)}}:tt.createContext(void 0);er.Consumer;function oj(){var a=sn?void 0:tt.useContext(er);if(!a)throw ka(18);return a}function sj(a){if(sn)return a.children;var l=tt.useContext(er),c=tt.useMemo(function(){return(function(s,d){if(!s)throw ka(14);if(ai(s)){var f=s(d);return f}if(Array.isArray(s)||typeof s!="object")throw ka(8);return d?xt(xt({},d),s):s})(a.theme,l)},[a.theme,l]);return a.children?tt.createElement(er.Provider,{value:c},a.children):null}var Cd={};function cj(a,l,c){var s=Nf(a),d=a,f=!wd(a),p=l.attrs,x=p===void 0?kf:p,m=l.componentId,g=m===void 0?(function(P,ee){var J=typeof P!="string"?"sc":fg(P);Cd[J]=(Cd[J]||0)+1;var Q="".concat(J,"-").concat(Tf(Us+J+Cd[J]));return ee?"".concat(ee,"-").concat(Q):Q})(l.displayName,l.parentComponentId):m,y=l.displayName,v=y===void 0?(function(P){return wd(P)?"styled.".concat(P):"Styled(".concat(M5(P),")")})(a):y,k=l.displayName&&l.componentId?"".concat(fg(l.displayName),"-").concat(l.componentId):l.componentId||g,D=s&&d.attrs?d.attrs.concat(x).filter(Boolean):x,A=l.shouldForwardProp;if(s&&d.shouldForwardProp){var R=d.shouldForwardProp;if(l.shouldForwardProp){var E=l.shouldForwardProp;A=function(P,ee){return R(P,ee)&&E(P,ee)}}else A=R}var N=new lj(c,k,s?d.componentStyle:void 0);function $(P,ee){return(function(J,Q,F){var he=J.attrs,ye=J.componentStyle,de=J.defaultProps,ze=J.foldedComponentIds,Le=J.styledComponentId,Ye=J.target,nt=sn?void 0:tt.useContext(er),H=uf(),W=J.shouldForwardProp||H.shouldForwardProp,ae=Gx(Q,nt,de)||(sn?void 0:Ji),ce=(function(me,pe,$e){for(var se,ke=xt(xt({},pe),{className:void 0,theme:$e}),Ct=0;Ct<me.length;Ct+=1){var ht=ai(se=me[Ct])?se(ke):se;for(var Ft in ht)Ft==="className"?ke.className=Za(ke.className,ht[Ft]):Ft==="style"?ke.style=xt(xt({},ke.style),ht[Ft]):ke[Ft]=ht[Ft]}return"className"in pe&&typeof pe.className=="string"&&(ke.className=Za(ke.className,pe.className)),ke})(he,Q,ae),ve=ce.as||Ye,C={};for(var q in ce)ce[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&ce.theme===ae||(q==="forwardedAs"?C.as=ce.forwardedAs:W&&!W(q,ve)||(C[q]=ce[q]));var Z=(function(me,pe){var $e=uf(),se=me.generateAndInjectStyles(pe,$e.styleSheet,$e.stylis);return se})(ye,ce),te=Z.className,L=Z.css,G=Za(ze,Le);te&&(G+=" "+te),ce.className&&(G+=" "+ce.className),C[wd(ve)&&!Vx.has(ve)?"class":"className"]=G,F&&(C.ref=F);var le=S.createElement(ve,C);return sn&&L?tt.createElement(tt.Fragment,null,tt.createElement("style",{precedence:"styled-components",href:"sc-".concat(Le,"-").concat(te),children:L}),le):le})(K,P,ee)}$.displayName=v;var K=tt.forwardRef($);return K.attrs=D,K.componentStyle=N,K.displayName=v,K.shouldForwardProp=A,K.foldedComponentIds=s?Za(d.foldedComponentIds,d.styledComponentId):"",K.styledComponentId=k,K.target=s?d.target:a,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=s?(function(ee){for(var J=[],Q=1;Q<arguments.length;Q++)J[Q-1]=arguments[Q];for(var F=0,he=J;F<he.length;F++)lf(ee,he[F],!0);return ee})({},d.defaultProps,P):P}}),Rf(K,function(){return".".concat(K.styledComponentId)}),f&&Fx(K,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function jg(a,l){for(var c=[a[0]],s=0,d=l.length;s<d;s+=1)c.push(l[s],a[s+1]);return c}var wg=function(a){return Object.assign(a,{isCss:!0})};function _f(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];if(ai(a)||hl(a))return wg(za(jg(kf,Wi([a],l,!0))));var s=a;return l.length===0&&s.length===1&&typeof s[0]=="string"?za(s):wg(za(jg(s,l)))}function df(a,l,c){if(c===void 0&&(c=Ji),!l)throw ka(1,l);var s=function(d){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return a(l,c,_f.apply(void 0,Wi([d],f,!1)))};return s.attrs=function(d){return df(a,l,xt(xt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},s.withConfig=function(d){return df(a,l,xt(xt({},c),d))},s}var a1=function(a){return df(cj,a)},j=a1;Vx.forEach(function(a){j[a]=a1(a)});var uj=(function(){function a(l,c){this.rules=l,this.componentId=c,this.isStatic=n1(l),As.registerId(this.componentId+1)}return a.prototype.createStyles=function(l,c,s,d){var f=d(Ss(za(this.rules,c,s,d)),""),p=this.componentId+l;s.insertRules(p,p,f)},a.prototype.removeStyles=function(l,c){c.clearRules(this.componentId+l)},a.prototype.renderStyles=function(l,c,s,d){l>2&&As.registerId(this.componentId+l);var f=this.componentId+l;this.isStatic?s.hasNameForId(f,f)||this.createStyles(l,c,s,d):(this.removeStyles(l,s),this.createStyles(l,c,s,d))},a})();function dj(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];var s=_f.apply(void 0,Wi([a],l,!1)),d="sc-global-".concat(Tf(JSON.stringify(s))),f=new uj(s,d),p=new WeakMap,x=function(g){var y=uf(),v=sn?void 0:tt.useContext(er),k=p.get(y.styleSheet);if(k===void 0&&(k=y.styleSheet.allocateGSInstance(d),p.set(y.styleSheet,k)),(typeof window>"u"||!y.styleSheet.server)&&m(k,g,y.styleSheet,v,y.stylis),sn||tt.useLayoutEffect(function(){return y.styleSheet.server||m(k,g,y.styleSheet,v,y.stylis),function(){var R;f.removeStyles(k,y.styleSheet),R=y.styleSheet.options.target,typeof document<"u"&&(R??document).querySelectorAll('style[data-styled-global="'.concat(d,'"]')).forEach(function(E){return E.remove()})}},[k,g,y.styleSheet,v,y.stylis]),sn){var D=d+k,A=typeof window>"u"?y.styleSheet.getTag().getGroup(Pi(D)):"";if(A)return tt.createElement("style",{key:"".concat(d,"-").concat(k),"data-styled-global":d,children:A})}return null};function m(g,y,v,k,D){if(f.isStatic)f.renderStyles(g,N5,v,D);else{var A=xt(xt({},y),{theme:Gx(y,k,x.defaultProps)});f.renderStyles(g,A,v,D)}}return tt.memo(x)}function pt(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];var s=Ss(_f.apply(void 0,Wi([a],l,!1))),d=Tf(s);return new Jx(d,s)}const fj=dj`
 
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

  html, body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }

  body {
    font-family: 'Outfit', sans-serif;
    color: ${({theme:a})=>a.colors.text};
    background-color: ${({theme:a})=>a.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    line-height: 1.2;
    color: ${({theme:a})=>a.colors.navy};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }
`,pj={colors:{navy:"#0B1A33",navyLight:"#162845",gold:"#C9A84C",goldHover:"#B08D35",white:"#FFFFFF",text:"#333333",textLight:"#E0E0E0",background:"#F9FAFB",border:"#E5E7EB"},fonts:{display:"'Outfit', sans-serif",body:"'Outfit', sans-serif"},breakpoints:{mobile:"576px",tablet:"992px",desktop:"1200px"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"64px"}};const i1=(...a)=>a.filter((l,c,s)=>!!l&&l.trim()!==""&&s.indexOf(l)===c).join(" ").trim();const hj=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const mj=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,c,s)=>s?s.toUpperCase():c.toLowerCase());const Sg=a=>{const l=mj(a);return l.charAt(0).toUpperCase()+l.slice(1)};var gj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const xj=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0;return!1};const yj=S.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:d="",children:f,iconNode:p,...x},m)=>S.createElement("svg",{ref:m,...gj,width:l,height:l,stroke:a,strokeWidth:s?Number(c)*24/Number(l):c,className:i1("lucide",d),...!f&&!xj(x)&&{"aria-hidden":"true"},...x},[...p.map(([g,y])=>S.createElement(g,y)),...Array.isArray(f)?f:[f]]));const X=(a,l)=>{const c=S.forwardRef(({className:s,...d},f)=>S.createElement(yj,{ref:f,iconNode:l,className:i1(`lucide-${hj(Sg(a))}`,`lucide-${a}`,s),...d}));return c.displayName=Sg(a),c};const bj=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],ei=X("activity",bj);const vj=[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],jj=X("ambulance",vj);const wj=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Of=X("arrow-left",wj);const Sj=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],dl=X("arrow-right",Sj);const Cj=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Ls=X("award",Cj);const Aj=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],Ej=X("baby",Aj);const zj=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],r1=X("badge-check",zj);const kj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],$s=X("bell",kj);const Tj=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Ad=X("bot",Tj);const Nj=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Cg=X("briefcase",Nj);const Rj=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],l1=X("building-2",Rj);const _j=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Oj=X("calendar",_j);const Mj=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],ml=X("car",Mj);const Dj=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Hj=X("chart-column",Dj);const Bj=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Uj=X("check",Bj);const Lj=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],o1=X("chevron-down",Lj);const $j=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Cn=X("chevron-left",$j);const qj=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],An=X("chevron-right",qj);const Yj=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],gs=X("circle-check-big",Yj);const Gj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Vj=X("circle-check",Gj);const Qj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],Ij=X("circle-parking",Qj);const Kj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Ag=X("circle-plus",Kj);const Pj=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],s1=X("clock",Pj);const Fj=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],c1=X("cloud",Fj);const Wj=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Xj=X("cpu",Wj);const Zj=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Jj=X("database",Zj);const ew=[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]],Eg=X("dog",ew);const tw=[["path",{d:"M11 20H2",key:"nlcfvz"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",key:"au4z13"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14",key:"74r1mk"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M22 20h-3",key:"vhrsz"}]],nw=X("door-open",tw);const aw=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Mf=X("download",aw);const iw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Es=X("eye",iw);const rw=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],lw=X("file-text",rw);const ow=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],sw=X("flame",ow);const cw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],gl=X("globe",cw);const uw=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],dw=X("heart",uw);const fw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],pw=X("image",fw);const hw=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],mw=X("instagram",hw);const gw=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],xw=X("layout-dashboard",gw);const yw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],bw=X("life-buoy",yw);const vw=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],jw=X("linkedin",vw);const ww=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],Sw=X("loader",ww);const Cw=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ta=X("lock",Cw);const Aw=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],Ew=X("log-in",Aw);const zw=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],u1=X("log-out",zw);const kw=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],vl=X("mail",kw);const Tw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Nw=X("map-pin",Tw);const Rw=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],_w=X("megaphone",Rw);const Ow=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Mw=X("menu",Ow);const Dw=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Hw=X("message-circle",Dw);const Bw=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],d1=X("message-square",Bw);const Uw=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],Lw=X("minimize-2",Uw);const $w=[["path",{d:"M5 12h14",key:"1ays0h"}]],qw=X("minus",$w);const Yw=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],zs=X("package",Yw);const Gw=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],qs=X("phone-call",Gw);const Vw=[["path",{d:"M14 6h8",key:"yd68k4"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Df=X("phone-forwarded",Vw);const Qw=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ys=X("phone",Qw);const Iw=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Kw=X("play",Iw);const Pw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Fw=X("plus",Pw);const Ww=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],sl=X("qr-code",Ww);const Xw=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],zg=X("quote",Xw);const Zw=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],ks=X("scan",Zw);const Jw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],e3=X("search",Jw);const t3=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],f1=X("send",t3);const n3=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],p1=X("settings",n3);const a3=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],i3=X("share-2",a3);const r3=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Ts=X("shield-alert",r3);const l3=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],kt=X("shield-check",l3);const o3=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Je=X("shield",o3);const s3=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],xs=X("shopping-bag",s3);const c3=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],jl=X("shopping-cart",c3);const u3=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]],d3=X("siren",u3);const f3=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Gs=X("smartphone",f3);const p3=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],al=X("star",p3);const h3=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],m3=X("stethoscope",h3);const g3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],x3=X("target",g3);const y3=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],b3=X("trash-2",y3);const v3=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],j3=X("triangle-alert",v3);const w3=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Hf=X("truck",w3);const S3=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],C3=X("twitter",S3);const A3=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],E3=X("user-plus",A3);const z3=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],En=X("user",z3);const k3=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ns=X("users",k3);const T3=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],N3=X("wrench",T3);const R3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],h1=X("x",R3);const _3=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],wl=X("zap",_3),m1=S.createContext(),Sl=()=>S.useContext(m1),O3=({children:a})=>{const[l,c]=S.useState(()=>{try{const g=localStorage.getItem("tarkshya_cart");if(g&&g!=="undefined")return JSON.parse(g)}catch(g){console.error("Failed to parse cart from localStorage",g),localStorage.removeItem("tarkshya_cart")}return[]});S.useEffect(()=>{localStorage.setItem("tarkshya_cart",JSON.stringify(l))},[l]);const s=(g,y=1)=>{c(v=>{if(v.find(A=>A.productId===g.id))return v.map(A=>A.productId===g.id?{...A,quantity:A.quantity+y}:A);let D=null;if(g.photos){if(Array.isArray(g.photos))D=g.photos[0];else if(typeof g.photos=="string")try{D=JSON.parse(g.photos)[0]}catch{D=g.photos}}return[...v,{productId:g.id,name:g.name,price:g.mrp||0,image:D,quantity:y}]})},d=g=>{c(y=>y.filter(v=>v.productId!==g))},f=(g,y)=>{y<1||c(v=>v.map(k=>k.productId===g?{...k,quantity:y}:k))},p=()=>c([]),x=l.reduce((g,y)=>g+y.price*y.quantity,0),m=l.reduce((g,y)=>g+y.quantity,0);return i.jsx(m1.Provider,{value:{cart:l,addToCart:s,removeFromCart:d,updateQuantity:f,clearCart:p,cartTotal:x,cartCount:m},children:a})},g1=S.createContext(),Cl=()=>{const a=S.useContext(g1);if(!a)throw new Error("useLanguage must be used within a LanguageProvider");return a},M3=({children:a})=>{const[l,c]=S.useState(()=>localStorage.getItem("app_language")||"en");S.useEffect(()=>{localStorage.setItem("app_language",l),document.documentElement.lang=l},[l]);const s=()=>{c(d=>d==="en"?"hi":"en")};return i.jsx(g1.Provider,{value:{language:l,setLanguage:c,toggleLanguage:s},children:a})},x1="/assets/new_logo-CnGHiGGP.png",Bf={en:{nav:{home:"Home",qrSafety:"QR Safety",cloudMonitoring:"Cloud Monitoring",gpsTracking:"GPS Tracking",initiative:"Become a Partner",b2b:"B2B Solutions",pricing:"Pricing",login:"LOGIN / DASHBOARD"},hero:{taglineDim:"The Next Evolution of",taglineHighlight:"SMART SAFETY IDS",subtext:"V-KAWACH provides a high-security ecosystem that protects your vehicle, family, and property through advanced QR-based communication.",getStarted:"GET STARTED",watchDemo:"WATCH DEMO",learnMore:"LEARN MORE"},sections:{categories:{title:"Top",highlight:"Categories",subtext:"Explore our wide range of safety solutions for all your needs"},safetyIds:{title:"V-Kawach",highlight:"Safety IDs",subtext:"Next-Gen Emergency QR Ecosystem for People & Property"},securityProducts:{title:"Advanced",highlight:"Security",subtext:"Intelligent monitoring and protection for your high-value assets"},services:{title:"Key",highlight:"Features",subtext:"V-KAWACH keeps journeys safe with advanced monitoring & alerts"},features:{title:"Security",highlight:"Features",subtext:"Advanced technology to keep you and your loved ones secure"},initiative:{title:"Social",highlight:"Initiative",subtext:"Mission Rakshak: Empowering safety for the common citizen.",p1:"At V-KAWACH (A product by Tarkshya Solution), we believe safety is a fundamental right, not a luxury. Mission Rakshak is our dedicated initiative to bring smart security to everyone.",p2:"Through subsidized programs and community awareness, we aim to protect 100,000+ lives by 2026. Join us in making India safer."}},about:{title:"About",highlight:"V-KAWACH",content:`<b>V-KAWACH</b>, a proud product of <b>Tarkshya Solution</b>, is a next-generation digital safety ecosystem driven by a core mission: to make Indian roads, communities, and daily life safer. By leveraging <b>privacy-first call masking</b> and advanced technology, we make communication during emergencies effortless, secure, and instantaneous.

Whether it is an improperly parked vehicle, a lost pet, or a critical emergency involving a loved one—V-KAWACH ensures that immediate help reaches you without ever exposing your personal information, such as your mobile number. Our intelligent system seamlessly connects you to real-world solutions while keeping your identity completely protected.

Our vision goes beyond simply offering a product; we are dedicated to building a <b>secure future</b> where communication is seamless and privacy is never compromised. Powered by continuous innovation and a <b>user-centric approach</b>, V-KAWACH is committed to ensuring round-the-clock (<b>24/7</b>) safety and peace of mind for you and your family.

• <b>Next-Gen Safety:</b> A comprehensive digital ecosystem for modern security needs.
• <b>Privacy-First Approach:</b> 100% secure call masking that hides your mobile number.
• <b>Instant Emergency Connectivity:</b> Fast, reliable, and anonymous communication when you need it the most.
• <b>24/7 Protection:</b> Uncompromised safety for you, your loved ones, and your assets.`,stats:{activeUsers:"Vision: Safe Users",scansProtected:"Privacy Assured",monitoring:"Emergency Helplines"}},footer:{tagline:"Securing your World",description:"V-KAWACH (A product by Tarkshya Solution) provides cutting-edge digital and physical security ecosystems, protecting what matters most with Indian innovation.",quickLinks:"Quick Links",aboutUs:"About Us",privacyPolicy:"Privacy Policy",termsConditions:"Terms & Conditions",contactUs:"Contact Us",rights:"All rights reserved."},smartQR:{title:"Smart QR Identity",subtitle:"Protect what matters with our advanced QR technology. Vehicles, pets, and loved ones — secured with instant connectivity and privacy.",getYourID:"Get Your Smart ID",howItWorks:"How It Works",steps:{scan:{title:"Scan",desc:"Anyone who finds your lost item or vehicle scans the QR code using any smartphone camera."},connect:{title:"Connect",desc:"They are instantly redirected to a secure page to contact the owner."},call:{title:"Call Owner",desc:"They can call you immediately. Your number stays private via our call masking technology."}},featuresTitle:"Key Features",features:["Call Masking (Privacy Protection)","Instant SMS & WhatsApp Alerts","Emergency Contact Integration","No App Required for Finder","Weatherproof & Durable Tags"],orderNow:"Order Now"},cloudMonitoring:{title:"Live Cloud Monitoring",subtitle:"Secure CCTV Backup & Anti-Theft Protection",badge:"COMING SOON",infoTitle:"Secure Your Premises with Cloud Intelligence",infoDesc:"Traditional CCTV systems are vulnerable to theft and damage. Our cloud monitoring solution ensures your footage is safe.",featuresTitle:"Features:",features:["Real-time Cloud Backup","Motion Detection Alerts","Anti-Theft Device Protection","Remote Access via Mobile"]},gpsTracking:{title:"Advanced GPS Tracking",subtitle:"Real-time Location & Fleet Management",badge:"COMING SOON",infoTitle:"Precision Tracking for Every Asset",infoDesc:"Whether it's a fleet of trucks or a personal vehicle, stay connected with real-time location data.",featuresTitle:"Features:",features:["Live Location Tracking","Geofencing Alerts","Speed Monitoring","Route Playback","Fuel Usage Analytics"]},social:{title:"Mission Rakshak",subtitle:"Our commitment to safer roads and connected communities.",storyTitle:"The Story",storyPart1:"Mission Rakshak was born from a simple realization: in an emergency, every second counts.",storyPart2:"Through Mission Rakshak, we distribute subsidized Smart QR stickers to public transport, elderly citizens, and school children.",stats:{vision:"Vision",visionDesc:"Impact 10,000+ Lives",partners:"Looking for",partnersDesc:"Partners",initiative:"Initiative",initiativeDesc:"Our Social Initiative"},formTitle:"Become a franchise partner",form:{name:"Full Name",namePlaceholder:"Enter your name",email:"Email Address",emailPlaceholder:"email@example.com",phone:"Phone Number",phonePlaceholder:"+91 00000 00000",message:"Message",messagePlaceholder:"How would you like to contribute?",submit:"Join the Mission",submitting:"Sending...",success:"Redirecting to WhatsApp..."}},auth:{login:{title:"Secure Your Ecosystem",subtitle:"Join India's most advanced vehicle and personal security network.",features:[{title:"Bank-Grade Security",desc:"256-bit encryption for all your personal data"},{title:"Fleet Safety",desc:"Real-time vehicle status and driver safety"},{title:"Instant Alerts",desc:"Emergency notifications via SMS and Call"},{title:"Cloud Backup",desc:"Never lose your critical security records"}],cardTitle:"Welcome Back",cardDesc:"Enter your credentials to access your dashboard.",email:"Email Address",emailPlaceholder:"name@company.com",password:"Password",passwordPlaceholder:"••••••••",submit:"ACCESS PORTAL",submitting:"Authenticating...",noAccount:"New to Ecosystem?",registerNow:"Register Now"},signup:{title:"Initialize Identity",subtitle:"Secure your assets and loved ones with our next-gen safety ecosystem.",cardTitle:"Create Account",cardDesc:"Join the ecosystem to manage your smart assets.",name:"Full Name",namePlaceholder:"Enter your full name",email:"Email Address",emailPlaceholder:"name@company.com",password:"Password",passwordPlaceholder:"Create a password",confirmPassword:"Confirm Password",confirmPasswordPlaceholder:"Confirm your password",submit:"REGISTER",submitting:"Creating Account...",hasAccount:"Already part of Network?",loginHere:"Login Here"}},products:{catalog:"Product Catalog",viewDetails:"VIEW DETAILS",material:"MATERIAL",warranty:"WARRANTY",off:"OFF",addedToCart:"Added to Cart!",items:{"kids-safety-bracelet":"Kid's Safety Bracelet","luggage-smart-tag":"Luggage Smart Tag","pet-id-tag":"Pet ID Tag","vehicle-safety-sticker":"Vehicle Safety Sticker"}},cart:{breadcrumb:"Home / Cart",title:"Shopping Cart",empty:{title:"Your cart is empty",desc:"It looks like you haven't added any safety IDs to your cart yet. Protect your assets today!",button:"BROWSE PRODUCTS"},items:{secureId:"SECURE IDENTITY"},summary:{title:"Order Summary",subtotal:"Subtotal",shipping:"Shipping",shippingFree:"FREE",platformFee:"Platform Fee",total:"Total",checkout:"PROCEED TO CHECKOUT",protection:"All payments are secured with bank-grade encryption. Your data is 100% private."}},checkout:{returnCart:"Return to Cart",title:"Shipping Logistics",form:{consignee:"Consignee Name",consigneePlaceholder:"Full name of receiver",contact:"Contact Email",contactPlaceholder:"email@example.com",phone:"Mobile Number",phonePlaceholder:"+91 00000 00000",address:"Shipping Address",addressPlaceholder:"House No, Building, Street, Area",city:"City / Town",cityPlaceholder:"Enter city",pincode:"Pincode / ZIP",pincodePlaceholder:"000000"},summary:{title:"Logistics Summary",subtotal:"Consolidated Total",logistics:"Shipping & Handling",complimentary:"COMPLIMENTARY",total:"Payable Amount",payment:{title:"Payment Protocol",desc:"Currently accepting Cash on Delivery (COD). Digital payment gateway integration is in progress."},submit:"INITIALIZE ORDER",submitting:"COMMITTING...",encryption:"AES-256 BIT ENCRYPTED"}},orderSuccess:{title:"Order Initialized",subtitle:"Your safety ecosystem is being prepared. We have sent a confirmation email to your registered address.",nextStepsTitle:"WHAT HAPPENS NEXT?",steps:["Quality check of your Smart QR Tags","Dispatched via our logistics partner","Delivery at your doorstep within 3-5 days"],returnHome:"BACK TO HOME",dashboard:"GO TO DASHBOARD",secure:"BANK-GRADE SECURITY",downloadInvoice:"INVOICE PDF"},dashboard:{sidebar:{orders:"My Orders",tags:"My QR Tags",profile:"Profile Settings",logout:"Logout"},welcome:{greet:"Welcome Back,",ordersDesc:"orders in your account",qrTitle:"My QR Identity",qrDesc:"Manage your smart safety assets",profileTitle:"Profile Settings",profileDesc:"Manage your identity and security"},stats:{totalOrders:"Total Orders",secureTags:"Secure Tags",pending:"Pending Orders"},topbar:{path:"Dashboard /",orders:"Orders",tags:"QR Tags",profile:"Profile"},orders:{title:"Order History",empty:"No orders found in your account.",table:{id:"Order ID",date:"Date",items:"Items",amount:"Amount",payment:"Payment",status:"Status"}},tags:{title:"My Smart Tags",empty:"You haven't activated any tags yet.",card:{code:"Tag Code:",preview:"Preview",download:"Download"}},profile:{title:"Edit Profile",name:"Full Name",phone:"Phone Number",passwordTitle:"Security",passwordDesc:"Change your account password",currentPassword:"Current Password",newPassword:"New Password",currentPlaceholder:"••••••••",newPlaceholder:"••••••••",save:"SAVE CHANGES"}},common:{loading:"LOADING...",loadFailed:"Failed to load data",profileUpdated:"Profile updated successfully",error:"Something went wrong"},publicProfile:{loading:"FETCHING IDENTITY...",invalid:{title:"Security Cluster Not Found",desc:"This QR code is either invalid or has not been activated yet."},header:{badge:"Verified Asset",assetId:"Asset ID:"},banner:"Securely managed by V-KAWACH protocol",owner:"Valued Owner",locationVerified:"Location Verified",form:{phonePlaceholder:"Enter mobile to connect...",callButton:"CALL OWNER",connecting:"CONNECTING...",emergency:"EMERGENCY — CALL 112",shareLocation:"SHARE LIVE LOCATION"},howItWorks:{title:"How it works",steps:[{label:"Scan QR"},{label:"Verify"},{label:"Connect"}]},footer:{protocol:"V-KAWACH Protocol Active",terms:"Terms",privacy:"Privacy",about:"About"}},admin:{sidebar:{masterPanel:"Master Panel",bulkManage:"Bulk Manage",logout:"Logout"},stats:{activeQRs:"Active QRs",totalScans:"Total Scans"}},legal:{back:"Back to Home",subtitle:"Official documentation and policies",loading:"FETCHING DOCUMENTATION...",fallback:"Content is being updated. Please check back later.",error:"Unable to load content. Please try again."},services:{backToHome:"Back to Home",items:{"instant-call-masking":{title:"Instant Call Masking",content:"<p>V-KAWACH's Instant Call Masking technology protects your privacy by hiding your real phone number during every call. When someone scans your QR tag and initiates a call, our system connects both parties through a secure masked number — your actual number is never revealed.</p><h2>How It Works</h2><p>Our telephony layer intercepts the call request and routes it through a virtual number. The caller sees only a masked ID, while you receive the call on your registered device. Both parties are connected seamlessly in real time.</p><h2>Key Benefits</h2><ul><li>Your real phone number stays 100% private</li><li>Works with any smartphone — no app needed for the caller</li><li>Instant connection in emergencies</li><li>Full call logs available in your dashboard</li><li>Works across India with local number support</li></ul>"},"emergency-helplines":{title:"Emergency Helplines",content:"<p>V-KAWACH integrates direct access to India's critical emergency helplines right from your QR scan page. Whether it's police, ambulance, or fire services — help is always one tap away.</p><h2>Integrated Helplines</h2><ul><li>Police — 100</li><li>Ambulance — 108</li><li>Fire — 101</li><li>National Emergency — 112</li><li>Women Helpline — 1091</li></ul><p>These helplines are embedded directly into every public-facing QR scan page, ensuring that anyone who finds your item or vehicle can immediately reach emergency services if needed.</p>"},"location-sharing":{title:"Live Location Sharing",content:"<p>V-KAWACH enables real-time GPS location sharing directly from the QR scan page. With a single tap, the finder can share their current location with you via WhatsApp — so you know exactly where your lost item or vehicle is.</p><h2>How It Works</h2><p>When someone scans your QR code, they see a 'Share Live Location' button. Tapping it opens WhatsApp pre-filled with their GPS coordinates, which are sent directly to your registered number.</p><h2>Benefits</h2><ul><li>No app installation required for the finder</li><li>Instant GPS coordinates via WhatsApp</li><li>Works on all modern smartphones</li><li>Helps recover lost vehicles, pets, and belongings faster</li></ul>"},"data-privacy":{title:"Data Privacy",content:"<p>At V-KAWACH, your personal data is protected with bank-grade security. We follow strict data minimization principles — we collect only what's necessary and never sell your data to third parties.</p><h2>Our Privacy Commitments</h2><ul><li>256-bit end-to-end encryption for all personal data</li><li>Phone numbers are never exposed — masked during every interaction</li><li>QR codes carry no personal information — they only link to a secure server</li><li>You can delete your data anytime from your dashboard</li><li>Full compliance with Indian data protection standards</li></ul>"},"family-control":{title:"Family Control",content:"<p>V-KAWACH's Family Control feature lets you manage safety profiles for every member of your household — children, elderly parents, pets, and vehicles — all from a single dashboard.</p><h2>Features</h2><ul><li>Create separate QR profiles for each family member</li><li>Set emergency contacts per profile</li><li>Receive instant alerts when any family QR is scanned</li><li>Monitor all scan activity in real time</li><li>Customize messages for each profile (lost, found, emergency)</li></ul>"},"verified-id":{title:"Verified Identity",content:"<p>Every V-KAWACH QR tag is linked to a verified digital identity. Our verification system ensures that each QR code is authentic, tamper-proof, and traceable — providing trust for both owners and finders.</p><h2>Verification Process</h2><ul><li>Mobile number verification via OTP during registration</li><li>Unique cryptographic QR code generation per user</li><li>Anti-counterfeit protection built into every tag</li><li>Real-time verification badge on every scan page</li></ul>"},"app-support":{title:"App Support",content:"<p>V-KAWACH is designed to work without requiring any app installation for the person who finds your QR tag. Everything works directly in the browser — making it universally accessible.</p><h2>Compatibility</h2><ul><li>Works on any smartphone with a camera</li><li>No app download required for finders</li><li>Full dashboard available as a Progressive Web App (PWA)</li><li>Supports Android and iOS</li><li>Optimized for low-bandwidth conditions</li></ul>"},"audio-alerts":{title:"Audio Alerts",content:"<p>V-KAWACH supports audio alert integration for connected smart devices. When your QR is scanned, you can receive real-time audio notifications on your registered devices, ensuring you never miss a critical alert.</p><h2>Alert Types</h2><ul><li>QR scan notification with location</li><li>Emergency distress signals</li><li>Incoming call alerts from masked numbers</li><li>Battery-low alerts for GPS-enabled tags</li></ul>"},"qr-security":{title:"QR Security",content:"<p>V-KAWACH's QR codes are built with multi-layer security. Each code is uniquely generated, server-verified, and tamper-evident — ensuring that your digital identity cannot be cloned or misused.</p><h2>Security Features</h2><ul><li>One-time cryptographic key per QR code</li><li>Server-side verification on every scan</li><li>Anti-clone detection system</li><li>Waterproof and scratch-resistant physical tags</li><li>Automatic deactivation of compromised codes</li></ul>"},verified:{title:"Verified Protocol",content:"<p>The V-KAWACH Verified Protocol is our end-to-end trust framework that ensures every interaction — from QR scan to owner contact — is authenticated, logged, and secure.</p><h2>Protocol Layers</h2><ul><li>Layer 1: QR Code Authenticity Check</li><li>Layer 2: Owner Identity Verification</li><li>Layer 3: Call Masking & Privacy Shield</li><li>Layer 4: Interaction Logging & Audit Trail</li><li>Layer 5: Emergency Escalation Path</li></ul>"},"instant-alerts":{title:"Instant Alerts",content:"<p>V-KAWACH sends real-time alerts the moment your QR code is scanned anywhere. Whether via SMS, WhatsApp, or in-app notification — you're always informed instantly.</p><h2>Alert Channels</h2><ul><li>SMS to your registered number</li><li>WhatsApp message with scan location</li><li>In-app push notification</li><li>Email alert with timestamp and GPS coordinates</li></ul>"},"smart-tracking":{title:"Smart Tracking",content:"<p>V-KAWACH's Smart Tracking feature provides real-time visibility of your assets. Combined with GPS-enabled tags and QR scan data, you always know where your belongings are.</p><h2>Tracking Features</h2><ul><li>Real-time GPS location on scan</li><li>Historical scan log with timestamps</li><li>Geofence alerts when assets leave a defined area</li><li>Route playback for vehicles</li></ul>"},"emergency-help":{title:"Emergency Help",content:"<p>V-KAWACH's Emergency Help system is designed to connect people in distress with the right resources instantly. Every QR scan page includes direct emergency access and owner contact options.</p><h2>Emergency Features</h2><ul><li>One-tap dial to emergency services (112)</li><li>Instant owner notification on scan</li><li>Pre-filled emergency message templates</li><li>Location sharing with emergency contacts</li></ul>"}}},categoryDetails:{initializing:"INITIALIZING SECURITY LAYER...",notFound:"Security Cluster Not Found",discoverMore:"DISCOVER MORE",relatedProducts:"Related Security Hardware",productsDesc:"Explore our specialized hardware modules for this category",viewSpecs:"VIEW SPECS",precisionSecurity:"PRECISION SECURITY",advancedProtocols:"Advanced Security Protocols",standardProtocols:"Standard V-KAWACH security protocols are active for this category.",strategicProtection:"Strategic Protection",verifiedSecurity:"Verified Security",certifiedHardware:"CERTIFIED HARDWARE",stats:{scanRate:"Success Rate",alertSpeed:"Alert Speed",encryption:"Encryption"}},productDetails:{initializing:"FETCHING HARDWARE SPECS...",notFound:"Hardware Module Not Found",badge:"SECURITY HARDWARE",encryption:"ENCRYPTION",delivery:"DELIVERY",addToCart:"ADD TO ECOSYSTEM",keyFeatures:"Key Features",description:"Description"},b2bPage:{title:"Smart Brand QR",subtitle:"Digital Transformation for your FMCG Products",content:"Transform your FMCG products (like Edible Oil, Packaging) into digital assets. With our Smart Brand QR, provide your customers instant access to FSSAI details, product brochures, and customer care information.",cta:"Contact for B2B"}},hi:{nav:{home:"होम",qrSafety:"क्यूआर सुरक्षा",cloudMonitoring:"क्लाउड मॉनिटरिंग",gpsTracking:"जीपीएस ट्रैकिंग",initiative:"पार्टनर बनें",b2b:"व्यापारिक समाधान",pricing:"प्लान्स",login:"लॉगिन / डैशबोर्ड"},hero:{taglineDim:"स्मार्ट सुरक्षा का",taglineHighlight:"वी-कवच सुरक्षा आईडी",subtext:"वी-कवच (V-KAWACH) एक उच्च-सुरक्षा पारिस्थितिकी तंत्र प्रदान करता है जो उन्नत क्यूआर-आधारित संचार के माध्यम से आपके वाहन, परिवार और संपत्ति की रक्षा करता है।",getStarted:"शुरू करें",watchDemo:"डेमो देखें",learnMore:"अधिक जानें"},sections:{categories:{title:"शीर्ष",highlight:"श्रेणियाँ",subtext:"अपनी सभी आवश्यकताओं के लिए सुरक्षा समाधानों की हमारी विस्तृत श्रृंखला देखें"},safetyIds:{title:"वी-कवच",highlight:"सुरक्षा आईडी",subtext:"लोगों और संपत्ति के लिए अगली पीढ़ी का आपातकालीन क्यूआर पारिस्थितिकी तंत्र"},securityProducts:{title:"उन्नत",highlight:"सुरक्षा",subtext:"आपकी उच्च-मूल्य वाली संपत्तियों के लिए बुद्धिमान निगरानी और सुरक्षा"},services:{title:"प्रमुख",highlight:"विशेषताएं",subtext:"वी-कवच उन्नत निगरानी और अलर्ट के साथ यात्रा को सुरक्षित रखता है"},features:{title:"सुरक्षा",highlight:"विशेषताएं",subtext:"आपको और आपके प्रियजनों को सुरक्षित रखने के लिए उन्नत तकनीक"},initiative:{title:"सामाजिक",highlight:"पहल",subtext:"मिशन रक्षक: सामान्य नागरिक के लिए सुरक्षा सशक्त बनाना।",p1:"वी-कवच (तार्क्ष्य समाधान का एक उत्पाद) में, हमारा मानना है कि सुरक्षा एक मौलिक अधिकार है, विलासिता नहीं। मिशन रक्षक हर किसी के लिए स्मार्ट सुरक्षा लाने की हमारी समर्पित पहल है।",p2:"रियायती कार्यक्रमों और सामुदायिक जागरूकता के माध्यम से, हमारा लक्ष्य 2026 तक 100,000+ जीवन की रक्षा करना है। भारत को सुरक्षित बनाने में हमारे साथ जुड़ें।"}},about:{title:"वी-कवच",highlight:"के बारे में",content:`<b>वी-कवच</b>, <b>तार्क्ष्य समाधान</b> का एक गौरवशाली उत्पाद, एक अगली पीढ़ी का डिजिटल सुरक्षा पारिस्थितिकी तंत्र है, जो एक मुख्य मिशन द्वारा संचालित है: भारतीय सड़कों, समुदायों और दैनिक जीवन को सुरक्षित बनाना। <b>गोपनीयता-प्रथम कॉल मास्किंग</b> और उन्नत तकनीक का लाभ उठाकर, हम आपात स्थिति के दौरान संचार को सहज, सुरक्षित और तत्काल बनाते हैं।

चाहे वह गलत तरीके से खड़ा वाहन हो, खोया हुआ पालतू जानवर हो, या किसी प्रियजन से जुड़ी महत्वपूर्ण आपात स्थिति हो—वी-कवच सुनिश्चित करता है कि आपके मोबाइल नंबर जैसे व्यक्तिगत जानकारी को उजागर किए बिना तत्काल सहायता आप तक पहुंचे। हमारा बुद्धिमान सिस्टम आपकी पहचान को पूरी तरह से सुरक्षित रखते हुए आपको वास्तविक दुनिया के समाधानों से सहजता से जोड़ता है।

हमारा विज़न केवल एक उत्पाद पेश करने से कहीं आगे है; हम एक <b>सुरक्षित भविष्य</b> के निर्माण के लिए समर्पित हैं जहाँ संचार निर्बाध हो और गोपनीयता से कभी समझौता न हो। निरंतर नवाचार और <b>उपयोगकर्ता-केंद्रित दृष्टिकोण</b> द्वारा संचालित, वी-कवच आपके और आपके परिवार के लिए चौबीसों घंटे (<b>24/7</b>) सुरक्षा और मानसिक शांति सुनिश्चित करने के लिए प्रतिबद्ध है।

• <b>नेक्स्ट-जेन सुरक्षा:</b> आधुनिक सुरक्षा आवश्यकताओं के लिए एक व्यापक डिजिटल पारिस्थितिकी तंत्र।
• <b>गोपनीयता-प्रथम दृष्टिकोण:</b> 100% सुरक्षित कॉल मास्किंग जो आपके मोबाइल नंबर को छुपाती है।
• <b>तत्काल आपातकालीन कनेक्टिविटी:</b> जब आपको इसकी सबसे अधिक आवश्यकता हो, तो तेज़, विश्वसनीय और अनाम संचार।
• <b>24/7 सुरक्षा:</b> आपके, आपके प्रियजनों और आपकी संपत्ति के लिए समझौता रहित सुरक्षा।`,stats:{activeUsers:"10k+ सुरक्षित उपयोगकर्ता",scansProtected:"गोपनीयता सुनिश्चित",monitoring:"आपातकालीन हेल्पलाइन"}},footer:{tagline:"आपकी दुनिया को सुरक्षित करना",description:"वी-कवच (तार्क्ष्य समाधान का एक उत्पाद) अत्याधुनिक डिजिटल और भौतिक सुरक्षा पारिस्थितिकी तंत्र प्रदान करता है, जो भारतीय नवाचार के साथ सबसे महत्वपूर्ण चीजों की रक्षा करता है।",quickLinks:"त्वरित संपर्क",aboutUs:"हमारे बारे में",privacyPolicy:"गोपनीयता नीति",termsConditions:"नियम और शर्तें",contactUs:"संपर्क करें",rights:"सर्वाधिकार सुरक्षित।"},smartQR:{title:"स्मार्ट क्यूआर पहचान",subtitle:"हमारी उन्नत क्यूआर तकनीक से सुरक्षित रहें। वाहन, पालतू जानवर और प्रियजन — तत्काल कनेक्टिविटी और गोपनीयता के साथ सुरक्षित।",getYourID:"अपनी स्मार्ट आईडी प्राप्त करें",howItWorks:"यह कैसे काम करता है",steps:{scan:{title:"स्कैन",desc:"कोई भी व्यक्ति जिसे आपका खोया हुआ सामान या वाहन मिलता है, वह किसी भी स्मार्टफोन कैमरे का उपयोग करके क्यूआर कोड स्कैन करता है।"},connect:{title:"जुड़ें",desc:"वे तुरंत मालिक से संपर्क करने के लिए एक सुरक्षित पृष्ठ पर भेज दिए जाते हैं।"},call:{title:"मालिक को कॉल करें",desc:"वे आपको तुरंत कॉल कर सकते हैं। आपका नंबर हमारी कॉल मास्किंग तकनीक के माध्यम से निजी रहता है।"}},featuresTitle:"प्रमुख विशेषताएं",features:["कॉल मास्किंग","एसएमएस और व्हाट्सएप अलर्ट","आपातकालीन संपर्क","कोई ऐप आवश्यक नहीं","टिकाऊ टैग"],orderNow:"अभी ऑर्डर करें"},cloudMonitoring:{title:"लाइव क्लाउड मॉनिटरिंग",subtitle:"सुरक्षित सीसीटीवी बैकअप",badge:"जल्द आ रहा है",infoTitle:"क्लाउड इंटेलिजेंस से सुरक्षित करें",infoDesc:"हमारा क्लाउड मॉनिटरिंग समाधान सुनिश्चित करता है कि आपका फुटेज सुरक्षित रहे।",featuresTitle:"विशेषताएं:",features:["रियल-टाइम बैकअप","मोशन डिटेक्शन","एंटी-थेफ्ट सुरक्षा","रिमोट एक्सेस"]},gpsTracking:{title:"उन्नत जीपीएस ट्रैकिंग",subtitle:"रियल-टाइम स्थान प्रबंधन",badge:"जल्द आ रहा है",infoTitle:"हर संपत्ति के लिए सटीक ट्रैकिंग",infoDesc:"रीयल-टाइम स्थान डेटा से जुड़े रहें।",featuresTitle:"विशेषताएं:",features:["लाइव ट्रैकिंग","जियोफेंसिंग","गति निगरानी","रूट प्लेबैक","ईंधन विश्लेषण"]},social:{title:"मिशन रक्षक",subtitle:"सुरक्षित सड़कों के लिए हमारी प्रतिबद्धता।",storyTitle:"कहानी",storyPart1:"मिशन रक्षक का जन्म एक साधारण अहसास से हुआ था: आपात स्थिति में, हर सेकंड मायने रखता है।",storyPart2:"हम सार्वजनिक परिवहन, बुजुर्गों और बच्चों को रियायती स्मार्ट क्यूआर स्टिकर वितरित करते हैं।",stats:{vision:"दृष्टि",visionDesc:"10,000+ जीवन प्रभावित",partners:"तलाश",partnersDesc:"पार्टनर्स",initiative:"पहल",initiativeDesc:"हमारी पहल"},formTitle:"फ्रैंचाइज़ी पार्टनर बनें",form:{name:"पूरा नाम",namePlaceholder:"अपना नाम दर्ज करें",email:"ईमेल पता",emailPlaceholder:"email@example.com",phone:"फ़ोन नंबर",phonePlaceholder:"+91 00000 00000",message:"संदेश",messagePlaceholder:"आप कैसे योगदान देना चाहेंगे?",submit:"मिशन में शामिल हों",submitting:"भेज रहा है...",success:"व्हाट्सएप पर भेज रहा है..."}},auth:{login:{title:"अपने इकोसिस्टम को सुरक्षित करें",subtitle:"भारत के सबसे उन्नत सुरक्षा नेटवर्क में शामिल हों।",features:[{title:"बैंक-ग्रेड सुरक्षा",desc:"256-बिट एन्क्रिप्शन"},{title:"बेड़े की सुरक्षा",desc:"रियल-टाइम वाहन स्थिति"},{title:"तत्काल अलर्ट",desc:"एसएमएस और कॉल अलर्ट"},{title:"क्लाउड बैकअप",desc:"सुरक्षित रिकॉर्ड"}],cardTitle:"वापसी पर स्वागत है",cardDesc:"प्रवेश के लिए अपनी साख दर्ज करें।",email:"ईमेल पता",emailPlaceholder:"name@company.com",password:"पासवर्ड",passwordPlaceholder:"••••••••",submit:"पोर्टल एक्सेस करें",submitting:"प्रमाणित किया जा रहा है...",noAccount:"इकोसिस्टम में नए हैं?",registerNow:"अभी रजिस्टर करें"},signup:{title:"पहचान प्रारंभ करें",subtitle:"अगली पीढ़ी के सुरक्षा इकोसिस्टम से जुड़ें।",cardTitle:"खाता बनाएं",cardDesc:"अपनी संपत्तियों के प्रबंधन के लिए शामिल हों।",name:"पूरा नाम",namePlaceholder:"अपना नाम दर्ज करें",email:"ईमेल पता",emailPlaceholder:"name@company.com",password:"पासवर्ड",passwordPlaceholder:"पासवर्ड बनाएं",confirmPassword:"पुष्टि करें",confirmPasswordPlaceholder:"पासवर्ड की पुष्टि करें",submit:"रजिस्टर करें",submitting:"खाता बनाया जा रहा है...",hasAccount:"पहले से सदस्य हैं?",loginHere:"यहाँ लॉगिन करें"}},products:{catalog:"उत्पाद कैटलॉग",viewDetails:"विवरण देखें",material:"सामग्री",warranty:"वारंटी",off:"छूट",addedToCart:"कार्ट में जोड़ा गया!",items:{"kids-safety-bracelet":"बच्चों का सुरक्षा ब्रेसलेट","luggage-smart-tag":"सामान का स्मार्ट टैग","pet-id-tag":"पालतू जानवर आईडी टैग","vehicle-safety-sticker":"वाहन सुरक्षा स्टिकर"}},cart:{breadcrumb:"होम / कार्ट",title:"शॉपिंग कार्ट",empty:{title:"आपकी कार्ट खाली है",desc:"ऐसा लगता है कि आपने अभी तक अपनी कार्ट में कोई सुरक्षा आईडी नहीं जोड़ी है। आज ही अपनी संपत्ति सुरक्षित करें!",button:"उत्पाद देखें"},items:{secureId:"सुरक्षित पहचान"},summary:{title:"ऑर्डर सारांश",subtotal:"उप-योग",shipping:"शिपिंग",shippingFree:"मुफ्त",platformFee:"प्लेटफॉर्म शुल्क",total:"कुल",checkout:"चेकआउट करें",protection:"सभी भुगतान बैंक-ग्रेड एन्क्रिप्शन के साथ सुरक्षित हैं। आपका डेटा 100% निजी है।"}},checkout:{returnCart:"कार्ट पर वापस जाएं",title:"शिपिंग और रसद",form:{consignee:"प्राप्तकर्ता का नाम",consigneePlaceholder:"प्राप्तकर्ता का पूरा नाम",contact:"संपर्क ईमेल",contactPlaceholder:"email@example.com",phone:"मोबाइल नंबर",phonePlaceholder:"+91 00000 00000",address:"शिपिंग का पता",addressPlaceholder:"घर नंबर, बिल्डिंग, सड़क, क्षेत्र",city:"शहर / कस्बा",cityPlaceholder:"शहर दर्ज करें",pincode:"पिनकोड",pincodePlaceholder:"000000"},summary:{title:"रसद सारांश",subtotal:"कुल राशि",logistics:"शिपिंग और हैंडलिंग",complimentary:"नि:शुल्क",total:"देय राशि",payment:{title:"भुगतान प्रोटोकॉल",desc:"वर्तमान में कैश ऑन डिलीवरी (COD) स्वीकार की जा रही है। डिजिटल भुगतान गेटवे जल्द ही शुरू होगा।"},submit:"ऑर्डर सबमिट करें",submitting:"प्रोसेस हो रहा है...",encryption:"एईएस-256 बिट एन्क्रिप्टेड"}},orderSuccess:{title:"ऑर्डर सफल",subtitle:"आपका सुरक्षा इकोसिस्टम तैयार किया जा रहा है। हमने आपके पंजीकृत ईमेल पर पुष्टि भेज दी है।",nextStepsTitle:"आगे क्या होगा?",steps:["स्मार्ट क्यूआर टैग्स की गुणवत्ता जांच","लॉजिस्टिक्स पार्टनर के माध्यम से शिपिंग","3-5 दिनों के भीतर आपके घर तक डिलीवरी"],returnHome:"होम पर वापस",dashboard:"डैशबोर्ड पर जाएं",secure:"बैंक-ग्रेड सुरक्षा",downloadInvoice:"इनवॉइस पीडीएफ"},dashboard:{sidebar:{orders:"मेरे ऑर्डर",tags:"मेरे क्यूआर टैग",profile:"प्रोफ़ाइल",logout:"लॉगआउट"},welcome:{greet:"स्वागत है,",ordersDesc:"आपके खाते में ऑर्डर",qrTitle:"मेरी क्यूआर पहचान",qrDesc:"अपनी स्मार्ट सुरक्षा संपत्तियों का प्रबंधन करें",profileTitle:"प्रोफ़ाइल सेटिंग्स",profileDesc:"अपनी पहचान और सुरक्षा का प्रबंधन करें"},stats:{totalOrders:"कुल ऑर्डर",secureTags:"सुरक्षित टैग",pending:"लंबित ऑर्डर"},topbar:{path:"डैशबोर्ड /",orders:"ऑर्डर",tags:"क्यूआर टैग",profile:"प्रोफ़ाइल"},orders:{title:"ऑर्डर इतिहास",empty:"आपके खाते में कोई ऑर्डर नहीं मिला।",table:{id:"ऑर्डर आईडी",date:"तारीख",items:"आइटम",amount:"राशि",payment:"भुगतान",status:"स्थिति"}},tags:{title:"मेरे स्मार्ट टैग",empty:"आपने अभी तक कोई टैग सक्रिय नहीं किया है।",card:{code:"टैग कोड:",preview:"पूर्वावलोकन",download:"डाउनलोड"}},profile:{title:"प्रोफ़ाइल संपादित करें",name:"पूरा नाम",phone:"फ़ोन नंबर",passwordTitle:"सुरक्षा",passwordDesc:"अपना खाता पासवर्ड बदलें",currentPassword:"वर्तमान पासवर्ड",newPassword:"नया पासवर्ड",currentPlaceholder:"••••••••",newPlaceholder:"••••••••",save:"बदलाव सहेजें"}},common:{loading:"लोड हो रहा है...",loadFailed:"डेटा लोड करने में विफल",profileUpdated:"प्रोफ़ाइल सफलतापूर्वक अपडेट की गई",error:"कुछ गलत हो गया"},publicProfile:{loading:"पहचान प्राप्त की जा रही है...",invalid:{title:"सुरक्षा क्लस्टर नहीं मिला",desc:"यह क्यूआर कोड या तो अमान्य है या अभी तक सक्रिय नहीं किया गया है।"},header:{badge:"सत्यापित संपत्ति",assetId:"संपत्ति आईडी:"},banner:"वी-कवच प्रोटोकॉल द्वारा सुरक्षित",owner:"सम्मानित मालिक",locationVerified:"स्थान सत्यापित",form:{phonePlaceholder:"जुड़ने के लिए मोबाइल दर्ज करें...",callButton:"मालिक को कॉल करें",connecting:"जुड़ रहा है...",emergency:"आपातकालीन — 112 पर कॉल करें",shareLocation:"लाइव लोकेशन साझा करें"},howItWorks:{title:"यह कैसे काम करता है",steps:[{label:"क्यूआर स्कैन करें"},{label:"सत्यापित करें"},{label:"जुड़ें"}]},footer:{protocol:"वी-कवच प्रोटोकॉल सक्रिय",terms:"नियम",privacy:"गोपनीयता",about:"परिचय"}},admin:{sidebar:{masterPanel:"मास्टर पैनल",bulkManage:"थोक प्रबंधन",logout:"लॉगआउट"},stats:{activeQRs:"सक्रिय क्यूआर",totalScans:"कुल स्कैन"}},legal:{back:"होम पर वापस",subtitle:"आधिकारिक दस्तावेज और नीतियां",loading:"दस्तावेज प्राप्त किए जा रहे हैं...",fallback:"सामग्री अपडेट की जा रही है। कृपया बाद में देखें।",error:"सामग्री लोड करने में असमर्थ। कृपया पुनः प्रयास करें।"},services:{backToHome:"होम पर वापस",items:{"instant-call-masking":{title:"तत्काल कॉल मास्किंग",content:"<p>V-KAWACH की तत्काल कॉल मास्किंग तकनीक हर कॉल के दौरान आपके असली फोन नंबर को छिपाकर आपकी गोपनीयता की रक्षा करती है। जब कोई आपका QR टैग स्कैन करके कॉल शुरू करता है, तो हमारा सिस्टम दोनों पक्षों को एक सुरक्षित मास्क्ड नंबर के माध्यम से जोड़ता है।</p><h2>मुख्य लाभ</h2><ul><li>आपका असली फोन नंबर 100% निजी रहता है</li><li>कॉलर के लिए कोई ऐप की जरूरत नहीं</li><li>आपातकाल में तत्काल कनेक्शन</li><li>डैशबोर्ड में पूरा कॉल लॉग</li></ul>"},"emergency-helplines":{title:"आपातकालीन हेल्पलाइन",content:"<p>V-KAWACH आपके QR स्कैन पेज से भारत की महत्वपूर्ण आपातकालीन हेल्पलाइन तक सीधी पहुंच एकीकृत करता है।</p><h2>एकीकृत हेल्पलाइन</h2><ul><li>पुलिस — 100</li><li>एम्बुलेंस — 108</li><li>दमकल — 101</li><li>राष्ट्रीय आपातकाल — 112</li><li>महिला हेल्पलाइन — 1091</li></ul>"},"location-sharing":{title:"लाइव लोकेशन शेयरिंग",content:"<p>V-KAWACH QR स्कैन पेज से सीधे रियल-टाइम GPS लोकेशन शेयरिंग सक्षम करता है। एक टैप से खोजकर्ता WhatsApp के माध्यम से अपनी वर्तमान लोकेशन आपके साथ शेयर कर सकता है।</p><h2>लाभ</h2><ul><li>खोजकर्ता के लिए कोई ऐप की जरूरत नहीं</li><li>WhatsApp के माध्यम से तुरंत GPS निर्देशांक</li><li>सभी आधुनिक स्मार्टफोन पर काम करता है</li></ul>"},"data-privacy":{title:"डेटा गोपनीयता",content:"<p>V-KAWACH में, आपका व्यक्तिगत डेटा बैंक-ग्रेड सुरक्षा के साथ संरक्षित है। हम केवल आवश्यक डेटा संग्रहीत करते हैं और इसे कभी तीसरे पक्ष को नहीं बेचते।</p><h2>हमारी गोपनीयता प्रतिबद्धताएं</h2><ul><li>256-बिट एन्क्रिप्शन</li><li>फोन नंबर कभी उजागर नहीं होते</li><li>QR कोड में कोई व्यक्तिगत जानकारी नहीं</li><li>डैशबोर्ड से कभी भी डेटा हटाएं</li></ul>"},"family-control":{title:"पारिवारिक नियंत्रण",content:"<p>V-KAWACH का फैमिली कंट्रोल फीचर आपको अपने परिवार के हर सदस्य — बच्चों, बुजुर्ग माता-पिता, पालतू जानवरों और वाहनों — के लिए एकल डैशबोर्ड से सुरक्षा प्रोफाइल प्रबंधित करने देता है।</p><h2>सुविधाएं</h2><ul><li>प्रत्येक परिवार सदस्य के लिए अलग QR प्रोफाइल</li><li>प्रति प्रोफाइल आपातकालीन संपर्क</li><li>किसी भी QR स्कैन पर तुरंत अलर्ट</li></ul>"},"verified-id":{title:"सत्यापित पहचान",content:"<p>हर V-KAWACH QR टैग एक सत्यापित डिजिटल पहचान से जुड़ा है। हमारी सत्यापन प्रणाली सुनिश्चित करती है कि प्रत्येक QR कोड प्रामाणिक, छेड़छाड़-रोधी और ट्रेस करने योग्य है।</p><h2>सत्यापन प्रक्रिया</h2><ul><li>OTP के माध्यम से मोबाइल नंबर सत्यापन</li><li>प्रति उपयोगकर्ता अद्वितीय QR कोड</li><li>एंटी-काउंटरफीट सुरक्षा</li></ul>"},"app-support":{title:"ऐप सपोर्ट",content:"<p>V-KAWACH बिना किसी ऐप इंस्टॉलेशन के काम करने के लिए डिज़ाइन किया गया है। सब कुछ सीधे ब्राउज़र में काम करता है।</p><h2>संगतता</h2><ul><li>कैमरे वाले किसी भी स्मार्टफोन पर काम करता है</li><li>खोजकर्ताओं के लिए कोई ऐप डाउनलोड आवश्यक नहीं</li><li>Android और iOS पर समर्थित</li></ul>"},"audio-alerts":{title:"ऑडियो अलर्ट",content:"<p>V-KAWACH कनेक्टेड स्मार्ट डिवाइस के लिए ऑडियो अलर्ट एकीकरण का समर्थन करता है। जब आपका QR स्कैन होता है, तो आप अपने पंजीकृत डिवाइस पर रियल-टाइम ऑडियो सूचनाएं प्राप्त कर सकते हैं।</p><h2>अलर्ट प्रकार</h2><ul><li>लोकेशन के साथ QR स्कैन सूचना</li><li>आपातकालीन संकट संकेत</li><li>मास्क्ड नंबर से इनकमिंग कॉल अलर्ट</li></ul>"},"qr-security":{title:"क्यूआर सुरक्षा",content:"<p>V-KAWACH के QR कोड बहु-परत सुरक्षा के साथ बनाए गए हैं। प्रत्येक कोड अद्वितीय रूप से उत्पन्न, सर्वर-सत्यापित और छेड़छाड़-स्पष्ट है।</p><h2>सुरक्षा सुविधाएं</h2><ul><li>प्रति QR कोड वन-टाइम क्रिप्टोग्राफिक की</li><li>प्रत्येक स्कैन पर सर्वर-साइड सत्यापन</li><li>एंटी-क्लोन डिटेक्शन सिस्टम</li><li>वाटरप्रूफ और स्क्रैच-प्रतिरोधी भौतिक टैग</li></ul>"},verified:{title:"सत्यापित प्रोटोकॉल",content:"<p>V-KAWACH सत्यापित प्रोटोकॉल हमारा एंड-टू-एंड ट्रस्ट फ्रेमवर्क है जो सुनिश्चित करता है कि QR स्कैन से लेकर मालिक संपर्क तक हर इंटरैक्शन प्रमाणित और सुरक्षित हो।</p><h2>प्रोटोकॉल परतें</h2><ul><li>परत 1: QR कोड प्रामाणिकता जांच</li><li>परत 2: मालिक पहचान सत्यापन</li><li>परत 3: कॉल मास्किंग और गोपनीयता शील्ड</li><li>परत 4: इंटरैक्शन लॉगिंग</li><li>परत 5: आपातकालीन एस्केलेशन</li></ul>"},"instant-alerts":{title:"तत्काल अलर्ट",content:"<p>V-KAWACH आपके QR कोड के स्कैन होते ही रियल-टाइम अलर्ट भेजता है।</p><h2>अलर्ट चैनल</h2><ul><li>आपके पंजीकृत नंबर पर SMS</li><li>स्कैन लोकेशन के साथ WhatsApp संदेश</li><li>इन-ऐप पुश नोटिफिकेशन</li><li>टाइमस्टैम्प के साथ ईमेल अलर्ट</li></ul>"},"smart-tracking":{title:"स्मार्ट ट्रैकिंग",content:"<p>V-KAWACH की स्मार्ट ट्रैकिंग सुविधा आपकी संपत्तियों की रियल-टाइम दृश्यता प्रदान करती है।</p><h2>ट्रैकिंग सुविधाएं</h2><ul><li>स्कैन पर रियल-टाइम GPS लोकेशन</li><li>टाइमस्टैम्प के साथ ऐतिहासिक स्कैन लॉग</li><li>जियोफेंस अलर्ट</li><li>वाहनों के लिए रूट प्लेबैक</li></ul>"},"emergency-help":{title:"आपातकालीन सहायता",content:"<p>V-KAWACH की आपातकालीन सहायता प्रणाली संकट में लोगों को तुरंत सही संसाधनों से जोड़ने के लिए डिज़ाइन की गई है।</p><h2>आपातकालीन सुविधाएं</h2><ul><li>आपातकालीन सेवाओं (112) पर वन-टैप डायल</li><li>स्कैन पर तुरंत मालिक सूचना</li><li>प्री-फिल्ड आपातकालीन संदेश टेम्पलेट</li></ul>"}}},categoryDetails:{initializing:"सुरक्षा परत शुरू की जा रही है...",notFound:"सुरक्षा क्लस्टर नहीं मिला",discoverMore:"अधिक जानें",relatedProducts:"संबंधित सुरक्षा हार्डवेयर",productsDesc:"इस श्रेणी के लिए हमारे विशेष हार्डवेयर मॉड्यूल देखें",viewSpecs:"विवरण देखें",precisionSecurity:"सटीक सुरक्षा",advancedProtocols:"उन्नत सुरक्षा प्रोटोकॉल",standardProtocols:"इस श्रेणी के लिए मानक वी-कवच सुरक्षा प्रोटोकॉल सक्रिय हैं।",strategicProtection:"रणनीतिक सुरक्षा",verifiedSecurity:"सत्यापित सुरक्षा",certifiedHardware:"प्रमाणित हार्डवेयर",stats:{scanRate:"सफलता दर",alertSpeed:"अलर्ट स्पीड",encryption:"एन्क्रिप्शन"}},productDetails:{initializing:"हार्डवेयर विवरण प्राप्त किया जा रहा है...",notFound:"हार्डवेयर मॉड्यूल नहीं मिला",badge:"सुरक्षा हार्डवेयर",encryption:"एन्क्रिप्शन",delivery:"डिलीवरी",addToCart:"कार्ट में जोड़ें",keyFeatures:"प्रमुख विशेषताएं",description:"विवरण"},b2bPage:{title:"Smart Brand QR",subtitle:"आपके FMCG उत्पादों के लिए डिजिटल परिवर्तन",content:"Smart Brand QR: अपने FMCG उत्पादों (जैसे एडिबल ऑयल, पैकेजिंग) को डिजिटल बनाएं। हमारे स्मार्ट QR के साथ ग्राहकों को तुरंत FSSAI डिटेल्स, प्रोडक्ट ब्रोशर और कस्टमर केयर की जानकारी दिखाएं।",cta:"B2B के लिए संपर्क करें"}}},D3=j.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`,H3=j.div`
  border-bottom: 1px solid #eeeeee;
  background: #fdfdfd;
  display: none;

  @media (min-width: ${({theme:a})=>a.breakpoints.tablet}) {
    display: block;
  }
`,B3=j.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`,U3=j.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 0.85rem;
  color: #555;
  font-weight: 600;

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
    
    svg {
      color: ${({theme:a})=>a.colors.gold};
      width: 14px;
      height: 14px;
    }
  }
`,L3=j.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,$3=j(Se)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  padding: 4px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.2s;

  svg {
    width: 14px;
    height: 14px;
    color: ${({theme:a})=>a.colors.gold};
  }

  &:hover {
    border-color: ${({theme:a})=>a.colors.gold};
    background: #fafafa;
  }
`,q3=j.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Y3=j(Se)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  img {
    height: 45px;
    object-fit: contain;
  }
`,G3=j.nav`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`,wn=j(Se)`
  color: #333333;
  font-family: ${({theme:a})=>a.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover, &.active {
    color: ${({theme:a})=>a.colors.gold};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({theme:a})=>a.colors.gold};
    transition: width 0.3s ease;
  }

  &:hover::after, &.active::after {
    width: 100%;
  }
`,V3=j.div`
  position: relative;
  padding: 10px 0;
  margin: -10px 0;
  
  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`,Q3=j.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 220px;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
  padding: 10px 0;
`,il=j(Se)`
  display: block;
  padding: 12px 20px;
  color: #555;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: #f9f9f9;
    color: ${({theme:a})=>a.colors.gold};
    padding-left: 25px;
  }
`,I3=j.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 25px;
  }
`,Ed=j(Se)`
  position: relative;
  color: ${({theme:a})=>a.colors.gold};
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }

  svg {
    width: 24px;
    height: 24px;
  }
  
  .badge {
    position: absolute;
    top: -8px;
    left: 12px;
    background: ${({theme:a})=>a.colors.gold};
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
  }
`,K3=j.button`
  background: none;
  border: none;
  color: #0b1a33;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`,P3=j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
  opacity: ${({$isOpen:a})=>a?"1":"0"};
  visibility: ${({$isOpen:a})=>a?"visible":"hidden"};
  transition: all 0.3s ease;
`,F3=j.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 85vw;
  max-width: 350px;
  background-color: #0b1a33;
  box-shadow: -10px 0 30px rgba(0,0,0,0.3);
  transform: translateX(${({$isOpen:a})=>a?"0":"100%"});
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  z-index: 1001;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 10px;

  @media (min-width: 1024px) {
    display: none;
  }
`,W3=j.button`
  align-self: flex-end;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  cursor: pointer;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background: rgba(255,255,255,0.1);
    transform: rotate(90deg);
  }
`,Sn=j(Se)`
  color: rgba(255,255,255,0.8);
  font-family: ${({theme:a})=>a.fonts.body};
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: all 0.3s ease;
  
  &:hover, &.active {
    color: ${({theme:a})=>a.colors.gold};
    padding-left: 10px;
    background: rgba(255,255,255,0.02);
  }
`,X3=j.button`
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
    border-color: ${({theme:a})=>a.colors.gold};
    color: ${({theme:a})=>a.colors.gold};
  }
`,Uf=()=>{const[a,l]=S.useState(!1),c=kn(),{cartCount:s}=Sl(),{language:d,setLanguage:f}=Cl();return i.jsxs(D3,{children:[i.jsx(H3,{children:i.jsxs(B3,{children:[i.jsxs(U3,{children:[i.jsxs("div",{className:"item",children:[i.jsx(vl,{}),"Info@tarkshyasolution.in"]}),i.jsxs("div",{className:"item",children:[i.jsx(Ys,{}),"+91 94123 00716"]})]}),i.jsx(L3,{children:i.jsxs($3,{as:"a",href:"/vkawach-release.apk",download:"VKawach.apk",children:[i.jsx(Mf,{})," Get the App"]})})]})}),i.jsxs(q3,{children:[i.jsx(Y3,{to:"/",children:i.jsx("img",{src:x1,alt:"V-KAWACH Logo",onError:p=>{p.target.style.display="none",p.target.nextSibling.style.display="block"}})}),i.jsxs(G3,{children:[i.jsx(wn,{to:"/",className:c.pathname==="/"?"active":"",children:"Home"}),i.jsx(wn,{to:"/#products",className:c.hash==="#products"?"active":"",onClick:p=>{c.pathname==="/"&&(p.preventDefault(),document.getElementById("products")?.scrollIntoView({behavior:"smooth"}))},children:"Products"}),i.jsxs(V3,{children:[i.jsxs(wn,{to:"/",className:["/services","/cloud-monitoring"].includes(c.pathname)?"active":"",children:["Services ",i.jsx(o1,{size:16})]}),i.jsxs(Q3,{className:"dropdown-menu",children:[i.jsx(il,{to:"/",children:"Find Location"}),i.jsx(il,{to:"/",children:"Route Tracking"}),i.jsx(il,{to:"/",children:"Phone Theft"}),i.jsx(il,{to:"/",children:"Set Flash"}),i.jsx(il,{to:"/",children:"SOS"})]})]}),i.jsx(wn,{to:"/b2b-solutions",className:c.pathname==="/b2b-solutions"?"active":"",children:"B2B Solutions"}),i.jsx(wn,{to:"/#plans",className:c.hash==="#plans"?"active":"",onClick:p=>{c.pathname==="/"&&(p.preventDefault(),document.getElementById("plans")?.scrollIntoView({behavior:"smooth"}))},children:"Pricing"}),i.jsx(wn,{to:"/",className:c.pathname==="/about"?"active":"",children:"About"}),i.jsx(wn,{to:"/case-studies",className:c.pathname==="/case-studies"?"active":"",children:"Case Studies"}),i.jsx(wn,{to:"/contact",className:c.pathname==="/contact"?"active":"",children:"Contact"}),i.jsx(wn,{to:"/social-initiative",className:c.pathname==="/social-initiative"?"active":"",children:"Partner"}),i.jsx(wn,{to:"/emergency",className:c.pathname==="/emergency"?"active":"",children:"Emergency"})]}),i.jsxs(I3,{children:[i.jsxs(Ed,{to:"/cart",children:[i.jsx(jl,{}),s>0&&i.jsx("span",{className:"badge",children:s})]}),i.jsx(Ed,{to:"/",children:i.jsx(pw,{})}),i.jsxs(Ed,{to:"/dashboard",style:{color:"#c9a84c"},children:[i.jsx(En,{})," Login"]})]}),i.jsx("div",{style:{display:"flex",alignItems:"center",gap:"20px"},className:"mobile-only",children:i.jsx(K3,{onClick:()=>l(!0),children:i.jsx(Mw,{size:28})})}),i.jsx(P3,{$isOpen:a,onClick:()=>l(!1)}),i.jsxs(F3,{$isOpen:a,children:[i.jsx(W3,{onClick:()=>l(!1),children:i.jsx(h1,{size:20})}),i.jsx(Sn,{to:"/",onClick:()=>l(!1),children:"Home"}),i.jsx(Sn,{to:"/#products",onClick:p=>{l(!1),c.pathname==="/"&&(p.preventDefault(),setTimeout(()=>{document.getElementById("products")?.scrollIntoView({behavior:"smooth"})},300))},children:"Products"}),i.jsx(Sn,{to:"/",onClick:()=>l(!1),children:"Services"}),i.jsx(Sn,{to:"/b2b-solutions",onClick:()=>l(!1),children:"B2B Solutions"}),i.jsx(Sn,{to:"/#plans",onClick:p=>{l(!1),c.pathname==="/"&&(p.preventDefault(),setTimeout(()=>{document.getElementById("plans")?.scrollIntoView({behavior:"smooth"})},300))},children:"Pricing"}),i.jsx(Sn,{to:"/",onClick:()=>l(!1),children:"About"}),i.jsx(Sn,{to:"/case-studies",onClick:()=>l(!1),children:"Case Studies"}),i.jsx(Sn,{to:"/contact",onClick:()=>l(!1),children:"Contact"}),i.jsx(Sn,{to:"/social-initiative",onClick:()=>l(!1),children:"Partner"}),i.jsx(Sn,{to:"/emergency",onClick:()=>l(!1),children:"Emergency"}),i.jsxs(X3,{onClick:()=>f(d==="en"?"hi":"en"),style:{width:"fit-content",marginTop:"15px"},children:[i.jsx(gl,{size:18}),d==="en"?"Hindi (हिन्दी)":"English"]})]})]})]})},Z3=j.footer`
  background-color: ${({theme:a})=>a.colors.navy};
  color: ${({theme:a})=>a.colors.white};
  padding: 80px 0 30px;
  border-top: 1px solid rgba(255,255,255,0.1);
`,J3=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: ${({theme:a})=>a.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`,zd=j.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,eS=j.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({theme:a})=>a.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;

  svg {
    color: ${({theme:a})=>a.colors.gold};
  }
`,tS=j.p`
  opacity: 0.7;
  max-width: 350px;
  font-size: 0.95rem;
`,kg=j.h4`
  color: ${({theme:a})=>a.colors.gold};
  font-size: 1.1rem;
  margin-bottom: 10px;
`,nS=j.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Vi=j(Se)`
  opacity: 0.7;
  font-size: 0.95rem;
  
  &:hover {
    opacity: 1;
    color: ${({theme:a})=>a.colors.gold};
    padding-left: 5px;
  }
  transition: all 0.3s ease;
`,kd=j.div`
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0.7;
  font-size: 0.95rem;

  svg {
    color: ${({theme:a})=>a.colors.gold};
    min-width: 18px;
  }
`,aS=j.div`
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
      background-color: ${({theme:a})=>a.colors.gold};
      color: ${({theme:a})=>a.colors.navy};
      border-color: ${({theme:a})=>a.colors.gold};
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`,iS=j.div`
  text-align: center;
  padding-top: 40px;
  margin-top: 60px;
  border-top: 1px solid rgba(255,255,255,0.1);
  opacity: 0.5;
  font-size: 0.85rem;
`,rS=()=>i.jsxs(Z3,{children:[i.jsxs(J3,{children:[i.jsxs(zd,{children:[i.jsxs(eS,{children:[i.jsx("img",{src:x1,alt:"Tarkshya Solution Logo",style:{height:"32px",objectFit:"contain",borderRadius:"4px"}}),i.jsxs("div",{children:[i.jsx("div",{style:{lineHeight:"1"},children:"Tarkshya Solution"}),i.jsx("div",{style:{fontSize:"0.6rem",fontWeight:400,opacity:.8,marginTop:"2px",letterSpacing:"0.05em",fontFamily:"sans-serif",textTransform:"uppercase"},children:"Securing your World"})]})]}),i.jsx(tS,{children:"Tarkshya Solution provides cutting-edge digital and physical security ecosystems, protecting what matters most with Indian innovation."}),i.jsxs(aS,{children:[i.jsx("a",{href:"#",children:i.jsx(jw,{size:20})}),i.jsx("a",{href:"#",children:i.jsx(C3,{size:20})}),i.jsx("a",{href:"#",children:i.jsx(mw,{size:20})})]})]}),i.jsxs(zd,{children:[i.jsx(kg,{children:"Quick Links"}),i.jsxs(nS,{children:[i.jsx("li",{children:i.jsx(Vi,{to:"/",children:"Home"})},"home"),i.jsx("li",{children:i.jsx(Vi,{to:"/smart-qr",children:"Smart QR Safety"})},"smart-qr"),i.jsx("li",{children:i.jsx(Vi,{to:"/cloud-monitoring",children:"Cloud Monitoring"})},"cloud"),i.jsx("li",{children:i.jsx(Vi,{to:"/gps-tracking",children:"GPS Tracking"})},"gps"),i.jsx("li",{children:i.jsx(Vi,{to:"/social-initiative",children:"Become a partner"})},"social"),i.jsx("li",{children:i.jsx(Vi,{to:"/contact",children:"Contact Us"})},"contact")]})]}),i.jsxs(zd,{children:[i.jsx(kg,{children:"Contact Us"}),i.jsxs(kd,{children:[i.jsx(vl,{size:18}),i.jsx("a",{href:"mailto:Info@tarkshyasolution.in",children:"Info@tarkshyasolution.in"})]}),i.jsxs(kd,{children:[i.jsx(Ys,{size:18}),i.jsx("a",{href:"tel:+919412300716",title:"Call Us",style:{textDecoration:"none",color:"inherit"},children:"+91 94123 00716"})]}),i.jsxs(kd,{children:[i.jsxs("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"18",width:"18",xmlns:"http://www.w3.org/2000/svg",style:{color:"#E8B642",minWidth:"18px"},children:[i.jsx("path",{d:"M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"}),i.jsx("path",{d:"M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"})]}),i.jsx("a",{href:"https://wa.me/919412300716",target:"_blank",rel:"noreferrer",title:"Chat on WhatsApp",style:{textDecoration:"none",color:"inherit"},children:"WhatsApp Us"})]})]})]}),i.jsxs(iS,{children:["© ",new Date().getFullYear()," Tarkshya Solution. All rights reserved."]})]}),lS=j.main`
  min-height: 100vh;
  padding-top: 0; // Header is overlay for hero effects
`,oS=()=>i.jsxs(i.Fragment,{children:[i.jsx(Uf,{}),i.jsx(lS,{children:i.jsx(z2,{})}),i.jsx(rS,{})]}),sS=j.section`
  padding: ${({theme:a})=>a.spacing.xxl} 0;
  background-color: ${({$bg:a,theme:l})=>a==="light"?l.colors.background:a==="white"?l.colors.white:a||l.colors.white};
`,cS=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,Fe=({children:a,bg:l="white",className:c,...s})=>i.jsx(sS,{$bg:l,className:c,...s,children:i.jsx(cS,{children:a})}),uS=j.button`
  padding: 12px 24px;
  font-family: ${({theme:a})=>a.fonts.body};
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

  ${({$variant:a,theme:l})=>a==="outline"?`
    background: transparent;
    color: ${l.colors.white};
    border-color: ${l.colors.white};
    &:hover {
      background: ${l.colors.gold};
      border-color: ${l.colors.gold};
      color: ${l.colors.navy};
    }
  `:a==="secondary"?`
    background: ${l.colors.navy};
    color: ${l.colors.white};
    &:hover {
      background: ${l.colors.navyLight};
      transform: translateY(-2px);
    }
  `:`
    background: ${l.colors.gold};
    color: ${l.colors.navy};
    &:hover {
      background: ${l.colors.goldHover};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(201, 168, 76, 0.3);
    }
  `}
`,Ue=({children:a,variant:l="primary",...c})=>i.jsx(uS,{$variant:l,...c,children:a});let dS={data:""},fS=a=>{if(typeof window=="object"){let l=(a?a.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return l.nonce=window.__nonce__,l.parentNode||(a||document.head).appendChild(l),l.firstChild}return a||dS},pS=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,hS=/\/\*[^]*?\*\/|  +/g,Tg=/\n+/g,Aa=(a,l)=>{let c="",s="",d="";for(let f in a){let p=a[f];f[0]=="@"?f[1]=="i"?c=f+" "+p+";":s+=f[1]=="f"?Aa(p,f):f+"{"+Aa(p,f[1]=="k"?"":l)+"}":typeof p=="object"?s+=Aa(p,l?l.replace(/([^,])+/g,x=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,m=>/&/.test(m)?m.replace(/&/g,x):x?x+" "+m:m)):f):p!=null&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=Aa.p?Aa.p(f,p):f+":"+p+";")}return c+(l&&d?l+"{"+d+"}":d)+s},Kn={},y1=a=>{if(typeof a=="object"){let l="";for(let c in a)l+=c+y1(a[c]);return l}return a},mS=(a,l,c,s,d)=>{let f=y1(a),p=Kn[f]||(Kn[f]=(m=>{let g=0,y=11;for(;g<m.length;)y=101*y+m.charCodeAt(g++)>>>0;return"go"+y})(f));if(!Kn[p]){let m=f!==a?a:(g=>{let y,v,k=[{}];for(;y=pS.exec(g.replace(hS,""));)y[4]?k.shift():y[3]?(v=y[3].replace(Tg," ").trim(),k.unshift(k[0][v]=k[0][v]||{})):k[0][y[1]]=y[2].replace(Tg," ").trim();return k[0]})(a);Kn[p]=Aa(d?{["@keyframes "+p]:m}:m,c?"":"."+p)}let x=c&&Kn.g?Kn.g:null;return c&&(Kn.g=Kn[p]),((m,g,y,v)=>{v?g.data=g.data.replace(v,m):g.data.indexOf(m)===-1&&(g.data=y?m+g.data:g.data+m)})(Kn[p],l,s,x),p},gS=(a,l,c)=>a.reduce((s,d,f)=>{let p=l[f];if(p&&p.call){let x=p(c),m=x&&x.props&&x.props.className||/^go/.test(x)&&x;p=m?"."+m:x&&typeof x=="object"?x.props?"":Aa(x,""):x===!1?"":x}return s+d+(p??"")},"");function Vs(a){let l=this||{},c=a.call?a(l.p):a;return mS(c.unshift?c.raw?gS(c,[].slice.call(arguments,1),l.p):c.reduce((s,d)=>Object.assign(s,d&&d.call?d(l.p):d),{}):c,fS(l.target),l.g,l.o,l.k)}let b1,ff,pf;Vs.bind({g:1});let Zn=Vs.bind({k:1});function xS(a,l,c,s){Aa.p=l,b1=a,ff=c,pf=s}function Ra(a,l){let c=this||{};return function(){let s=arguments;function d(f,p){let x=Object.assign({},f),m=x.className||d.className;c.p=Object.assign({theme:ff&&ff()},x),c.o=/ *go\d+/.test(m),x.className=Vs.apply(c,s)+(m?" "+m:"");let g=a;return a[0]&&(g=x.as||a,delete x.as),pf&&g[0]&&pf(x),b1(g,x)}return d}}var yS=a=>typeof a=="function",hf=(a,l)=>yS(a)?a(l):a,bS=(()=>{let a=0;return()=>(++a).toString()})(),vS=(()=>{let a;return()=>{if(a===void 0&&typeof window<"u"){let l=matchMedia("(prefers-reduced-motion: reduce)");a=!l||l.matches}return a}})(),jS=20,v1="default",j1=(a,l)=>{let{toastLimit:c}=a.settings;switch(l.type){case 0:return{...a,toasts:[l.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(p=>p.id===l.toast.id?{...p,...l.toast}:p)};case 2:let{toast:s}=l;return j1(a,{type:a.toasts.find(p=>p.id===s.id)?1:0,toast:s});case 3:let{toastId:d}=l;return{...a,toasts:a.toasts.map(p=>p.id===d||d===void 0?{...p,dismissed:!0,visible:!1}:p)};case 4:return l.toastId===void 0?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(p=>p.id!==l.toastId)};case 5:return{...a,pausedAt:l.time};case 6:let f=l.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(p=>({...p,pauseDuration:p.pauseDuration+f}))}}},wS=[],SS={toasts:[],pausedAt:void 0,settings:{toastLimit:jS}},Fi={},w1=(a,l=v1)=>{Fi[l]=j1(Fi[l]||SS,a),wS.forEach(([c,s])=>{c===l&&s(Fi[l])})},S1=a=>Object.keys(Fi).forEach(l=>w1(a,l)),CS=a=>Object.keys(Fi).find(l=>Fi[l].toasts.some(c=>c.id===a)),Lf=(a=v1)=>l=>{w1(l,a)},AS=(a,l="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:l,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:c?.id||bS()}),Al=a=>(l,c)=>{let s=AS(l,a,c);return Lf(s.toasterId||CS(s.id))({type:2,toast:s}),s.id},St=(a,l)=>Al("blank")(a,l);St.error=Al("error");St.success=Al("success");St.loading=Al("loading");St.custom=Al("custom");St.dismiss=(a,l)=>{let c={type:3,toastId:a};l?Lf(l)(c):S1(c)};St.dismissAll=a=>St.dismiss(void 0,a);St.remove=(a,l)=>{let c={type:4,toastId:a};l?Lf(l)(c):S1(c)};St.removeAll=a=>St.remove(void 0,a);St.promise=(a,l,c)=>{let s=St.loading(l.loading,{...c,...c?.loading});return typeof a=="function"&&(a=a()),a.then(d=>{let f=l.success?hf(l.success,d):void 0;return f?St.success(f,{id:s,...c,...c?.success}):St.dismiss(s),d}).catch(d=>{let f=l.error?hf(l.error,d):void 0;f?St.error(f,{id:s,...c,...c?.error}):St.dismiss(s)}),a};var ES=Zn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,zS=Zn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kS=Zn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,TS=Ra("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ES} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${zS} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${kS} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,NS=Zn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,RS=Ra("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${NS} 1s linear infinite;
`,_S=Zn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,OS=Zn`
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
}`,MS=Ra("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${OS} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,DS=Ra("div")`
  position: absolute;
`,HS=Ra("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,BS=Zn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,US=Ra("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${BS} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,LS=({toast:a})=>{let{icon:l,type:c,iconTheme:s}=a;return l!==void 0?typeof l=="string"?S.createElement(US,null,l):l:c==="blank"?null:S.createElement(HS,null,S.createElement(RS,{...s}),c!=="loading"&&S.createElement(DS,null,c==="error"?S.createElement(TS,{...s}):S.createElement(MS,{...s})))},$S=a=>`
0% {transform: translate3d(0,${a*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,qS=a=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${a*-150}%,-1px) scale(.6); opacity:0;}
`,YS="0%{opacity:0;} 100%{opacity:1;}",GS="0%{opacity:1;} 100%{opacity:0;}",VS=Ra("div")`
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
`,QS=Ra("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,IS=(a,l)=>{let c=a.includes("top")?1:-1,[s,d]=vS()?[YS,GS]:[$S(c),qS(c)];return{animation:l?`${Zn(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Zn(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};S.memo(({toast:a,position:l,style:c,children:s})=>{let d=a.height?IS(a.position||l||"top-center",a.visible):{opacity:0},f=S.createElement(LS,{toast:a}),p=S.createElement(QS,{...a.ariaProps},hf(a.message,a));return S.createElement(VS,{className:a.className,style:{...d,...c,...a.style}},typeof s=="function"?s({icon:f,message:p}):S.createElement(S.Fragment,null,f,p))});xS(S.createElement);Vs`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Ie=St;const Wo=window.location.hostname==="localhost"?"http://localhost:5001/api":"/api",et={get:async a=>{const l=localStorage.getItem("admin_token"),c=await fetch(`${Wo}${a}`,{headers:{Authorization:l?`Bearer ${l}`:"","Content-Type":"application/json"}}),s=await c.json();if(!c.ok)throw{response:{data:s}};return{data:s}},post:async(a,l)=>{const c=localStorage.getItem("admin_token"),s=l instanceof FormData,d=await fetch(`${Wo}${a}`,{method:"POST",headers:{Authorization:c?`Bearer ${c}`:"",...s?{}:{"Content-Type":"application/json"}},body:s?l:JSON.stringify(l)}),f=await d.json();if(!d.ok)throw{response:{data:f}};return{data:f}},put:async(a,l)=>{const c=localStorage.getItem("admin_token"),s=l instanceof FormData,d=await fetch(`${Wo}${a}`,{method:"PUT",headers:{Authorization:c?`Bearer ${c}`:"",...s?{}:{"Content-Type":"application/json"}},body:s?l:JSON.stringify(l)}),f=await d.json();if(!d.ok)throw{response:{data:f}};return{data:f}},delete:async a=>{const l=localStorage.getItem("admin_token"),c=await fetch(`${Wo}${a}`,{method:"DELETE",headers:{Authorization:l?`Bearer ${l}`:"","Content-Type":"application/json"}}),s=await c.json();if(!c.ok)throw{response:{data:s}};return{data:s}}};pt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;const KS=j.section`
  min-height: 65vh;
  background-color: #0b1a33;
  background-image: ${a=>a.bgImage?`linear-gradient(to right, rgba(11, 26, 51, 0.95) 0%, rgba(11, 26, 51, 0.6) 100%), url(${a.bgImage})`:"none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 60px;
  z-index: 1;
  transition: background-image 0.8s ease-in-out;

  @media (max-width: 768px) {
    min-height: 32vh;
    padding-top: 35px;
    padding-bottom: 15px;
    background-position: center;
    background-image: ${a=>a.bgImage?`linear-gradient(to bottom, rgba(11, 26, 51, 0.7) 0%, rgba(11, 26, 51, 0.5) 100%), url(${a.bgImage})`:"none"};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`,PS=j.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
    align-items: center;
    text-align: center;
  }
`,FS=j.h1`
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 8px;
    .dim { font-size: 1.0rem; letter-spacing: 0.5px; opacity: 0.8; }
    .highlight { font-size: 1.6rem; line-height: 1.1; color: #C9A84C; margin-top: 1px; }
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
`,WS=j.p`
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 30px;
  max-width: 650px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.78rem;
    margin-bottom: 15px;
    line-height: 1.4;
    max-width: 240px;
    opacity: 0.8;
    margin-left: auto;
    margin-right: auto;
  }
`;j.div`
  position: relative;
  max-width: 70%;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    max-width: 95%;
    margin-top: 30px;
  }

  @media (min-width: 1024px) { margin: 0 0 0 auto; }
  img {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 50px 100px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
  }
`;const XS=j.div`
  display: flex;
  gap: 8px;
  margin-top: 30px;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    cursor: pointer;
    transition: all 0.3s ease;
    &.active {
      background: #C9A84C;
      width: 30px;
      border-radius: 5px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`,Td=j(Se)`
  background-color: ${a=>a.variant==="outline"?"transparent":"#C9A84C"};
  color: ${a=>a.variant==="outline"?"white":"#0b1a33"};
  border: 2px solid ${a=>a.variant==="outline"?"white":"#C9A84C"};
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    background-color: ${a=>a.variant==="outline"?"#C9A84C":"#B08D35"};
    border-color: ${a=>(a.variant==="outline","#C9A84C")};
    color: #0b1a33;
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 0.8rem;
    border-radius: 6px;
    letter-spacing: 0px;
  }
`,Qi=j.div`
  text-align: center;
  margin-bottom: 60px;
  h2 {
    font-size: 2.5rem;
    color: #0b1a33;
    font-weight: 800;
    text-transform: uppercase;
    span { color: #C9A84C; }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  p { color: #666; margin-top: 10px; font-size: 1.1rem; }
  .line {
    width: 80px;
    height: 4px;
    background: #C9A84C;
    margin: 20px auto;
  }
`,ZS=j.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
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
`;const Ng=j.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 50px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`,Xo=j.button`
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
`,JS=j.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0 30px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  
  & > * {
    flex: 0 0 200px;
  }

  @media (max-width: 768px) {
    & > * {
      flex: 0 0 150px;
    }
  }
`,e4=j.span`
  margin-top: 12px;
  background-color: #0b1a33;
  color: white;
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 0.6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
`,t4=j(Se)`
  background: white;
  border: 1px solid rgba(0,0,0,0.06);
  padding: 15px 10px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 140px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(11, 26, 51, 0.08);
    border-color: #C9A84C;
    
    .icon-box {
      background: #0b1a33;
      color: #C9A84C;
    }
    h3 { color: #C9A84C; }
    
    .action-btn {
      background-color: #C9A84C;
      color: #0b1a33;
    }
  }

  .icon-box {
    width: 45px;
    height: 45px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f4f8;
    border-radius: 12px;
    color: #0b1a33;
    transition: all 0.4s ease;

    svg {
      width: 22px;
      height: 22px;
      stroke-width: 2px;
    }
  }

  h3 {
    font-size: 0.65rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #0b1a33;
    letter-spacing: 0.5px;
    margin: 0;
    transition: color 0.3s;
    line-height: 1.2;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,n4=j.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,a4=j.div`
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
    overflow: hidden;
    img { max-width: 80%; max-height: 80%; object-fit: contain; transition: opacity 0.5s ease; position: absolute; }
  }
  
  .carousel-dots {
    position: absolute;
    bottom: 15px;
    display: flex;
    gap: 6px;
    justify-content: center;
    width: 100%;
    z-index: 5;
    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(0,0,0,0.2);
      cursor: pointer;
      &.active { background: #C9A84C; }
    }
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
`,i4=j.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0 30px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  
  & > * {
    flex: 0 0 240px;
  }

  @media (max-width: 768px) {
    & > * {
      flex: 0 0 150px;
    }
  }
`,Ii=j(Se)`
  background: #ffffff;
  border-radius: 24px;
  padding: 25px 15px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;

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
    width: 60px;
    height: 60px;
    background: #f8fafc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    color: #0b1a33;
    transition: all 0.3s ease;
    
    svg {
      width: 28px;
      height: 28px;
      stroke-width: 1.5px;
    }
  }

  span {
    font-size: 0.85rem;
    font-weight: 800;
    color: #0b1a33;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }

  .btn {
    margin-top: auto;
    background: #0b1a33;
    color: white;
    padding: 6px 15px;
    border-radius: 8px;
    font-size: 0.65rem;
    font-weight: 900;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    min-height: 150px;
    padding: 15px 10px;
    .icon-wrapper { width: 45px; height: 45px; svg { width: 22px; height: 22px; } }
    span { font-size: 0.7rem; }
  }
`,r4=j.div`
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

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 12px 15px;
    flex-direction: column;
    gap: 5px;
  }
`,l4=j.div`
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
      display: block;
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

    @media (max-width: 768px) {
      display: none;
    }
  }

  .carousel-viewport {
    overflow: hidden;
    width: 100%;
  }

  .cards {
    display: flex;
    gap: 24px;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    & > * {
      flex: 0 0 calc(33.333% - 16px);
      min-width: 0;
    }

    @media (max-width: 1024px) {
      & > * {
        flex: 0 0 calc(50% - 12px);
      }
    }

    @media (max-width: 768px) {
      gap: 0;
      & > * {
        flex: 0 0 100%;
        padding: 0 10px;
      }
    }
  }

  .dots-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 40px;

    .nav-btn-mobile {
      display: none;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 2px solid #C9A84C;
      background: white;
      color: #0b1a33;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      @media (max-width: 768px) {
        display: flex;
      }
    }

    .dots {
      display: flex;
      justify-content: center;
      gap: 10px;
      span {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #e2e8f0;
        cursor: pointer;
        transition: all 0.3s ease;
        &.active { background: #C9A84C; transform: scale(1.2); }
      }
    }
  }
`,o4=j.div`
  background: white;
  border-radius: 24px;
  padding: 35px 30px;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  transition: all 0.4s ease;
  position: relative;

  &.featured {
    border: 2px solid #C9A84C;
    transform: scale(1.02);
    box-shadow: 0 20px 50px rgba(11,26,51,0.1);
  }

  .quote { color: #C9A84C; margin-bottom: 20px; }

  p {
    font-size: 0.98rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 30px;
    font-style: italic;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 14px;

    .avatar {
      width: 48px; height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #0b1a33, #C9A84C);
      display: flex; align-items: center; justify-content: center;
      color: white; font-weight: 900; font-size: 1.2rem;
      flex-shrink: 0;
    }

    .info {
      .name { font-weight: 800; color: #0b1a33; font-size: 1rem; }
      .loc { font-size: 0.82rem; color: #C9A84C; font-weight: 700; }
    }
  }
`,s4=j.div`
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
`,c4=j.div`
  border: 1px solid #e8ecf0;
  border-radius: 16px;
  margin-bottom: 14px;
  overflow: hidden;
  transition: all 0.3s ease;

  &.open { border-color: #C9A84C; box-shadow: 0 8px 24px rgba(201,168,76,0.1); }

  .faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 28px;
    cursor: pointer;
    background: white;
    transition: background 0.3s;

    &:hover { background: #fffdf5; }

    .q-left {
      display: flex;
      align-items: center;
      gap: 14px;

      .bar {
        width: 4px;
        height: 36px;
        border-radius: 2px;
        background: ${a=>a.open?"#C9A84C":"#e8ecf0"};
        transition: background 0.3s;
        flex-shrink: 0;
      }

      span {
        font-size: 1rem;
        font-weight: 700;
        color: #0b1a33;
      }
    }

    svg {
      color: #C9A84C;
      transition: transform 0.3s;
      transform: ${a=>a.open?"rotate(180deg)":"rotate(0deg)"};
      flex-shrink: 0;
    }
  }

  .faq-a {
    padding: ${a=>a.open?"0 28px 24px 46px":"0 28px 0 46px"};
    max-height: ${a=>a.open?"300px":"0"};
    overflow: hidden;
    transition: all 0.35s ease;
    font-size: 0.97rem;
    line-height: 1.75;
    color: #555;
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
`;const u4=j.div`
  background: #0b1a33;
  border-radius: 40px;
  padding: 40px 40px;
  max-width: 1400px;
  margin: 0 auto 80px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0,0,0,0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(circle at 70% 20%, rgba(201, 168, 76, 0.1) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    border-radius: 24px;
    padding: 30px 20px;
    margin: 0 15px 40px;
  }
`,d4=j.div`
  display: grid;
  grid-template-columns: 280px repeat(${a=>a.columns||3}, 1fr);
  gap: 15px;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 180px repeat(${a=>a.columns||3}, 1fr);
  }
  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 15px;
    padding: 10px 0 30px;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,Rg=j.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  text-align: center;
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  transition: all 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-5px);
  }
  
  &.feature-labels {
    background: transparent;
    border: none;
    text-align: left;
    padding: 15px 10px;
    h3 { 
      font-size: 1.5rem; 
      color: #C9A84C; 
      margin-bottom: 15px; 
      font-weight: 900;
      line-height: 1.1;
      text-transform: uppercase;
    }
    
    @media (max-width: 768px) {
      display: none;
    }
  }

  &.featured {
    background: rgba(201, 168, 76, 0.05);
    border: 2px solid #C9A84C;
    box-shadow: 0 10px 30px rgba(201, 168, 76, 0.1);
    
    .popular-badge {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: #C9A84C;
      color: #0b1a33;
      padding: 3px 15px;
      border-radius: 100px;
      font-size: 0.65rem;
      font-weight: 900;
      text-transform: uppercase;
      z-index: 10;
      box-shadow: 0 4px 10px rgba(201, 168, 76, 0.4);
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 280px;
    scroll-snap-align: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    .plan-header {
      .tier { color: #C9A84C; }
      .price { color: white; }
    }
    
    .feature-cell {
      justify-content: space-between;
      padding: 0 15px;
      min-height: 40px;
      
      .mobile-label { 
        display: block !important; 
        color: #C9A84C !important; 
        font-size: 0.8rem !important; 
        font-weight: 800 !important;
        text-align: left;
        flex: 1;
        padding-right: 15px;
        opacity: 1 !important;
        visibility: visible !important;
      }
      svg.check { color: #2ecc71; flex-shrink: 0; }
      span.dash { color: rgba(255, 255, 255, 0.2); flex-shrink: 0; }
    }
    
    &.featured {
      background: rgba(201, 168, 76, 0.08);
      border: 2px solid #C9A84C;
    }
  }

  .plan-header {
    margin-bottom: 10px;
    .tier { 
      font-size: 0.75rem; 
      font-weight: 900; 
      color: #C9A84C; 
      text-transform: uppercase; 
      margin-bottom: 5px; 
      letter-spacing: 1px;
    }
    .price { 
      font-size: 2.4rem; 
      font-weight: 950; 
      color: white;
      line-height: 1;
      span { font-size: 0.8rem; color: rgba(255,255,255,0.3); font-weight: 600; margin-left: 4px; }
    }
  }

  .feature-cell {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    
    .mobile-label {
      display: none;
    }
    
    svg.check { color: #C9A84C; width: 16px; height: 16px; }
    span.dash { color: rgba(255,255,255,0.1); }

    &.label {
      justify-content: flex-start;
      color: #fff;
      font-weight: 700;
      font-size: 0.75rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
  }

  .cta-box {
    margin-top: 15px;
    padding: 0 5px;
    
    button { 
      width: 100%; 
      border-radius: 12px; 
      font-weight: 900; 
      padding: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.75rem;
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      }
    }
  }
`,f4=j.div`
  position: relative;
  width: 100%;
`,_g=j.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(201, 168, 76, 0.9);
  color: #0b1a33;
  border: none;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #C9A84C;
    transform: translateY(-50%) scale(1.1);
  }

  &.left { left: 0px; }
  &.right { right: 0px; }

  @media (max-width: 768px) {
    display: flex;
    &.left { left: 5px; }
    &.right { right: 5px; }
  }
`,Og=j.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    background: #f1f5f9;
    padding: 6px;
    border-radius: 100px;
    display: inline-flex;
    margin: 0 auto 30px;
  }
`,Mg=j.button`
  padding: 12px 30px;
  border-radius: 50px;
  border: 2px solid ${a=>a.active?"#C9A84C":"#eee"};
  background: ${a=>a.active?"white":"#f8f9fa"};
  color: ${a=>a.active?"#C9A84C":"#666"};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;

  &.comparison-tab {
    background: ${a=>a.active?"#C9A84C":"rgba(255,255,255,0.05)"};
    color: ${a=>a.active?"#0b1a33":"rgba(255,255,255,0.6)"};
    border-color: ${a=>a.active?"#C9A84C":"rgba(255,255,255,0.1)"};
    
    &:hover {
      background: ${a=>a.active?"#C9A84C":"rgba(255,255,255,0.1)"};
      color: white;
    }
  }
  
  @media (max-width: 768px) {
    min-width: 140px;
    padding: 8px 15px;
    font-size: 0.75rem;
    border: none;
    background: ${a=>a.active?"white":"transparent"};
    box-shadow: ${a=>a.active?"0 2px 10px rgba(0,0,0,0.1)":"none"};
    color: ${a=>a.active?"#0b1a33":"#64748b"};
    border-radius: 100px;

    &.comparison-tab {
      background: ${a=>a.active?"white":"transparent"};
      color: ${a=>a.active?"#0b1a33":"#64748b"};
      box-shadow: ${a=>a.active?"0 2px 10px rgba(0,0,0,0.1)":"none"};
    }
  }
  
  &:hover {
    border-color: #C9A84C;
    color: #C9A84C;
    background: white;
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
`;const p4=j.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  
  h2 { 
    font-size: 3.5rem; 
    color: #0b1a33; 
    font-weight: 900; 
    margin-bottom: 25px; 
    text-align: center;
    span { color: #C9A84C; }
    @media (max-width: 768px) { font-size: 2.5rem; }
  }
  
  .subtitle {
    font-size: 1rem;
    color: #C9A84C;
    font-weight: 800;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .content-text { 
    font-size: 1.15rem; 
    line-height: 1.8; 
    color: #555; 
    margin-bottom: 60px; 
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) { font-size: 1.05rem; padding: 0 15px; line-height: 1.6; }
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 60px;
    
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 30px;
      padding: 0 20px;
    }

    .stat-item {
      background: white;
      padding: 50px 30px;
      border-radius: 40px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.04);
      border: 1px solid #f1f5f9;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      overflow: hidden;
      
      &:hover {
        transform: translateY(-15px);
        border-color: #C9A84C;
        box-shadow: 0 40px 80px rgba(201, 168, 76, 0.15);
        .icon-circle { background: #C9A84C; color: #0b1a33; transform: scale(1.1); }
      }

      .icon-circle {
        width: 90px;
        height: 90px;
        background: #0b1a33;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        color: #C9A84C;
        transition: all 0.4s ease;
        box-shadow: 0 15px 30px rgba(11, 26, 51, 0.1);
      }

      h3 { 
        font-size: 3rem; 
        color: #0b1a33; 
        font-weight: 900; 
        margin: 0;
        @media (max-width: 768px) { font-size: 2.8rem; }
      }
      
      span { 
        font-size: 1.1rem; 
        text-transform: uppercase; 
        font-weight: 800; 
        color: #C9A84C; 
        margin-top: 12px; 
        letter-spacing: 1.5px;
      }
      
      p {
        font-size: 1rem;
        color: #64748b;
        margin-top: 20px;
        line-height: 1.6;
        font-weight: 500;
      }
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
`;const h4=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;

    .travel-section-title {
      text-align: center !important;
      h2 { font-size: 2.2rem !important; }
    }
  }
`,m4=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,g4=()=>{const{language:a}=Cl(),l=Bf[a],c=kn(),s=L=>{const G=(L||"").toLowerCase();return G.includes("child")||G.includes("kid")?i.jsx(Ej,{size:34,strokeWidth:1.5}):G.includes("pet")||G.includes("dog")?i.jsx(Eg,{size:34,strokeWidth:1.5}):G.includes("travel")||G.includes("luggage")?i.jsx(Cg,{size:34,strokeWidth:1.5}):G.includes("gadget")||G.includes("phone")||G.includes("laptop")?i.jsx(Gs,{size:34,strokeWidth:1.5}):G.includes("corporate")||G.includes("office")?i.jsx(Cg,{size:34,strokeWidth:1.5}):G.includes("medical")||G.includes("emergency")?i.jsx(ei,{size:34,strokeWidth:1.5}):G.includes("vehicle")||G.includes("parking")||G.includes("bike")?i.jsx(ml,{size:34,strokeWidth:1.5}):G.includes("home")||G.includes("door")?i.jsx(nw,{size:34,strokeWidth:1.5}):G.includes("qr")?i.jsx(ks,{size:34,strokeWidth:1.5}):G.includes("family")?i.jsx(Ns,{size:34,strokeWidth:1.5}):i.jsx(Je,{size:34,strokeWidth:1.5})},[d,f]=S.useState(0),[p,x]=S.useState(null),[m,g]=S.useState([]),[y,v]=S.useState([]),[k,D]=S.useState([]),[A,R]=S.useState([]),[E,N]=S.useState(!0),[$,K]=S.useState(!1),[P,ee]=S.useState("bike"),[J,Q]=S.useState("ALL"),[F,he]=S.useState([]),[ye,de]=S.useState(0),ze=()=>new Promise(L=>{const G=document.createElement("script");G.src="https://checkout.razorpay.com/v1/checkout.js",G.onload=()=>L(!0),G.onerror=()=>L(!1),document.body.appendChild(G)}),Le=async L=>{try{if(!await ze()){Ie.error("Razorpay SDK failed to load. Are you online?");return}const me=(await et.get("/public/settings")).data.settings?.RAZORPAY_KEY_ID;if(!me){Ie.error("Razorpay is not configured on the server");return}const pe=await et.post("/payments/create-order",{amount:L.price,receipt:`plan_${L.tier}_${Date.now()}`});if(!pe.data.success)throw new Error(pe.data.error||"Order creation failed");const{order:$e}=pe.data,se={key:me,amount:$e.amount,currency:$e.currency,name:"V-KAWACH Safety Plans",description:`Activation for ${L.tier} Tier`,image:"/assets/new_logo.png",order_id:$e.id,handler:async Ct=>{try{(await et.post("/payments/verify",{razorpay_order_id:Ct.razorpay_order_id,razorpay_payment_id:Ct.razorpay_payment_id,razorpay_signature:Ct.razorpay_signature,customerData:{name:"Plan Customer",email:"customer@v-kawach.in",phone:"0000000000",shippingAddress:"Digital Activation"},cart:[{productId:L.id,name:`${L.tier} Subscription Plan`,quantity:1,price:L.price}],totalAmount:L.price})).data.success?(Ie.success(`${L.tier} Plan Activated Successfully!`),ve("/dashboard")):Ie.error("Payment verification failed.")}catch(ht){console.error("Verification Error:",ht),Ie.error("Payment verification error.")}},theme:{color:"#0b1a33"}};new window.Razorpay(se).open()}catch(G){console.error(G),Ie.error(G.message||"Failed to initiate payment")}},[Ye,nt]=S.useState(""),H=S.useRef(null),W=S.useRef(null),ae=S.useRef(null),ce=(L,G)=>{if(L.current){const le=G==="left"?-300:300;L.current.scrollBy({left:le,behavior:"smooth"})}},ve=Na(),{addToCart:C}=Sl(),q=(L,G)=>{if(L.preventDefault(),L.stopPropagation(),!localStorage.getItem("admin_token")){Ie.error("Please login to add items to your cart.",{icon:"🔒",style:{borderRadius:"100px",background:"#0b1a33",color:"#fff"}}),ve(`/login?returnUrl=${encodeURIComponent(window.location.pathname)}`);return}C(G),Ie.success(`${G.name} added to cart!`,{icon:"🛒",style:{borderRadius:"100px",background:"#0b1a33",color:"#fff"}})};S.useEffect(()=>{if(F.length>1){const L=setInterval(()=>{de(G=>(G+1)%F.length)},6e3);return()=>clearInterval(L)}},[F]);const Z=({photos:L,productName:G,apiUrl:le})=>{const[me,pe]=S.useState(0);return S.useEffect(()=>{if(!L||L.length<=1)return;const $e=setInterval(()=>{pe(se=>(se+1)%L.length)},3e3);return()=>clearInterval($e)},[L]),!L||L.length===0?i.jsx("img",{src:"https://img.icons8.com/fluency/400/security-checked.png",alt:G,style:{opacity:1}}):i.jsxs(i.Fragment,{children:[L.map(($e,se)=>{let ke=$e.startsWith("http")?$e:`${le}${$e}`;return ke.includes("images.icons8.com")&&(ke=ke.replace("images.icons8.com","img.icons8.com").replace("/bubbles/","/fluency/")),i.jsx("img",{src:ke,alt:`${G} - ${se}`,style:{opacity:se===me?1:0,zIndex:se===me?2:1}},se)}),L.length>1&&i.jsx("div",{className:"carousel-dots",onClick:$e=>$e.preventDefault(),children:L.map(($e,se)=>i.jsx("span",{className:se===me?"active":"",onClick:ke=>{ke.preventDefault(),pe(se)}},se))})]})};S.useEffect(()=>{nt(window.location.hostname==="localhost"?"http://localhost:5001":""),(async()=>{try{const G=await Promise.allSettled([et.get("/categories"),et.get("/products?type=SAFETY"),et.get("/public/settings"),et.get("/plans")]);if(G[0].status==="fulfilled"){const me=(G[0].value.data?.categories||[]).filter(pe=>pe.name!=="Smart Home"&&pe.isActive!==!1);g(me)}if(G[1].status==="fulfilled"&&v(G[1].value.data?.products||[]),G[2].status==="fulfilled")try{const le=G[2].value.data?.settings;if(console.log("Public settings fetched:",le),le?.homeSecurityFeatures){const me=JSON.parse(le.homeSecurityFeatures);R(me)}if(le?.heroBannersList){const me=JSON.parse(le.heroBannersList);console.log("Parsed banners:",me),he(me)}}catch(le){console.error("Failed to parse settings:",le)}G[3].status==="fulfilled"&&D(G[3].value.data?.plans||[])}catch(G){console.error("Failed to fetch home data:",G)}finally{N(!1)}})()},[]),S.useEffect(()=>{if(c.hash==="#plans"&&k.length>0){const L=setTimeout(()=>{const G=document.getElementById("plans");G&&G.scrollIntoView({behavior:"smooth"})},300);return()=>clearTimeout(L)}},[k,c.hash]),S.useEffect(()=>{if(c.hash==="#products"&&y.length>0){const L=setTimeout(()=>{const G=document.getElementById("products");G&&G.scrollIntoView({behavior:"smooth"})},300);return()=>clearTimeout(L)}},[y,c.hash]);const te=F[ye]?.imageUrl?F[ye].imageUrl.startsWith("http")?F[ye].imageUrl:`${Ye}${F[ye].imageUrl}`:null;return i.jsxs("div",{style:{overflowX:"hidden",width:"100%",position:"relative"},children:[i.jsxs(KS,{bgImage:te,children:[i.jsx(PS,{children:i.jsxs("div",{style:{animation:"fadeIn 0.8s ease-out",maxWidth:"800px"},children:[i.jsxs(FS,{children:[i.jsx("span",{className:"dim",children:F[ye]?.taglineDim||l.hero.taglineDim}),i.jsx("span",{className:"highlight",children:F[ye]?.taglineHighlight||l.hero.taglineHighlight})]}),i.jsx(WS,{style:{fontSize:"1.2rem",opacity:"0.9",marginBottom:"40px"},children:F[ye]?.subtext||l.hero.subtext}),i.jsxs(ZS,{children:[i.jsx(Td,{to:"/smart-qr",children:F[ye]?.button1Text||l.hero.getStarted}),i.jsx(Td,{to:`/banner/${F[ye]?.id||"default"}`,variant:"outline",children:F[ye]?.button2Text||l.hero.watchDemo})]}),F.length>1&&i.jsx(XS,{children:F.map((L,G)=>i.jsx("span",{className:ye===G?"active":"",onClick:()=>de(G)},G))})]})}),i.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `})]},ye),i.jsxs(Fe,{bg:"light",children:[i.jsxs(Qi,{children:[i.jsxs("h2",{children:[l.sections.categories.title," ",i.jsx("span",{children:l.sections.categories.highlight})]}),i.jsx("p",{children:l.sections.categories.subtext}),i.jsx("div",{className:"line"})]}),i.jsxs(Ng,{children:[i.jsx(Xo,{className:"left",onClick:()=>ce(H,"left"),children:i.jsx(Cn,{})}),i.jsxs(JS,{ref:H,children:[m.map(L=>i.jsxs(t4,{to:`/category/${L.id}`,children:[i.jsx("div",{className:"icon-box",children:s(L.name)}),i.jsx("h3",{children:L.name}),i.jsx(e4,{className:"action-btn",children:"Explore"})]},L.id)),m.length===0&&!E&&i.jsx("p",{style:{textAlign:"center",gridColumn:"1/-1",color:"#999",padding:"40px"},children:"No categories found. Manage them in Admin Panel."})]}),i.jsx("div",{className:"md:hidden text-center mt-4",children:i.jsxs("p",{className:"text-[10px] font-black uppercase text-amber-500 tracking-widest flex items-center justify-center gap-2",children:[i.jsx("span",{className:"h-[1px] w-8 bg-slate-100"}),"Swipe to See More",i.jsx("span",{className:"h-[1px] w-8 bg-slate-100"})]})}),i.jsx(Xo,{className:"right",onClick:()=>ce(H,"right"),children:i.jsx(An,{})})]})]}),i.jsxs(Fe,{bg:"white",children:[i.jsxs(Qi,{children:[i.jsxs("h2",{children:["How It Works ",i.jsx("span",{children:"3 Easy Steps"})]}),i.jsx("p",{children:"Protecting what matters most is now simpler than ever"}),i.jsx("div",{className:"line"})]}),i.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",textAlign:"center"},children:i.jsx("img",{src:"/assets/v-kawach-steps.jpg",alt:"V-Kawach 3 Easy Steps",style:{width:"100%",borderRadius:"24px",boxShadow:"0 20px 40px rgba(0,0,0,0.1)"}})})]}),i.jsxs(Fe,{id:"products",bg:"white",children:[i.jsxs(Qi,{children:[i.jsxs("h2",{children:[l.sections.safetyIds.title," ",i.jsx("span",{children:l.sections.safetyIds.highlight})]}),i.jsx("p",{children:l.sections.safetyIds.subtext}),i.jsx("div",{className:"line"})]}),i.jsx(Og,{children:[{id:"ALL",label:"All Products",icon:i.jsx(zs,{size:18})},{id:"VEHICLE",label:"Vehicle",icon:i.jsx(ml,{size:18})},{id:"PERSONAL",label:"Personal",icon:i.jsx(En,{size:18})},{id:"PETS",label:"Pets",icon:i.jsx(Eg,{size:18})}].map(L=>i.jsxs(Mg,{active:J===L.id,onClick:()=>Q(L.id),style:{minWidth:"120px",padding:"10px 20px",fontSize:"0.9rem"},children:[L.icon," ",L.label]},L.id))}),i.jsx(n4,{children:y.filter(L=>{if(J==="ALL")return!0;const G=(L.name||"").toLowerCase();return J==="VEHICLE"?/\b(vehicle|car|cars|bike|bikes|cycle|parking)\b/i.test(G):J==="PERSONAL"?/\b(kid|child|woman|laptop|bag|luggage|luggge|gadget|office|corporate|identity|card)\b/i.test(G)&&!/\b(car|bike)\b/i.test(G):J==="PETS"?/\b(pet|dog|cat|animal)\b/i.test(G):!0}).map(L=>{const G=typeof L.photos=="string"?JSON.parse(L.photos||"[]"):L.photos||[];(typeof L.dynamicData=="string"?JSON.parse(L.dynamicData||"[]"):L.dynamicData||[]).slice(0,4);let me=G[0]?G[0].startsWith("http")?G[0]:`${Ye}${G[0]}`:"https://img.icons8.com/fluency/400/security-checked.png";return me.includes("images.icons8.com")&&(me=me.replace("images.icons8.com","img.icons8.com").replace("/bubbles/","/fluency/")),i.jsxs(a4,{children:[L.isCounterfeit&&i.jsx("div",{className:"badge",style:{background:"#e74c3c"},children:"RECALLED"}),i.jsx(Se,{to:`/product/${L.id}`,className:"img-box",children:i.jsx(Z,{photos:G,productName:L.name,apiUrl:Ye})}),i.jsxs("div",{className:"content",children:[i.jsx("h3",{children:L.name}),i.jsxs("div",{className:"price-row",children:[i.jsxs("div",{className:"price",children:["₹",L.mrp||0," ",i.jsxs("span",{children:["₹",Math.round((L.mrp||0)*1.5)]})]}),i.jsx("div",{className:"discount",children:"33% OFF"})]})]}),i.jsxs("div",{className:"footer",children:[i.jsx(Td,{to:`/product/${L.id}`,style:{padding:"10px 15px",fontSize:"0.8rem"},children:"VIEW DETAILS"}),i.jsx(Ue,{variant:"secondary",style:{padding:"10px 15px"},onClick:pe=>q(pe,L),children:i.jsx(jl,{size:18})})]})]},L.id)})})]}),i.jsxs(Fe,{bg:"light",children:[i.jsxs(Qi,{children:[i.jsxs("h2",{children:[l.sections.services.title," ",i.jsx("span",{children:l.sections.services.highlight})]}),i.jsx("p",{children:l.sections.services.subtext}),i.jsx("div",{className:"line"})]}),i.jsxs(Ng,{children:[i.jsx(Xo,{className:"left",onClick:()=>ce(W,"left"),children:i.jsx(Cn,{})}),i.jsxs(i4,{ref:W,children:[i.jsxs(Ii,{to:"/service/instant-call-masking",children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(Df,{})}),i.jsx("span",{children:"Call Masking"}),i.jsx("div",{className:"btn",children:"Explore"})]}),i.jsxs(Ii,{to:"/service/qr-security",children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(ks,{})}),i.jsx("span",{children:"QR Security"}),i.jsx("div",{className:"btn",children:"Explore"})]}),i.jsxs(Ii,{to:"/service/emergency-helplines",children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(qs,{})}),i.jsx("span",{children:"Helplines"}),i.jsx("div",{className:"btn",children:"Explore"})]}),i.jsxs(Ii,{to:"/service/data-privacy",children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(kt,{})}),i.jsx("span",{children:"Data Privacy"}),i.jsx("div",{className:"btn",children:"Explore"})]}),i.jsxs(Ii,{to:"/service/verified",children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(r1,{})}),i.jsx("span",{children:"Verified Identity"}),i.jsx("div",{className:"btn",children:"Explore"})]}),i.jsxs(Ii,{to:"/service/instant-alerts",children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(wl,{})}),i.jsx("span",{children:"Instant Alerts"}),i.jsx("div",{className:"btn",children:"Explore"})]})]}),i.jsx(Xo,{className:"right",onClick:()=>ce(W,"right"),children:i.jsx(An,{})})]})]}),i.jsxs(Fe,{id:"plans",bg:"white",children:[i.jsxs(Qi,{children:[i.jsxs("h2",{children:[l.sections.features.title," ",i.jsx("span",{children:l.sections.features.highlight})]}),i.jsx("p",{children:l.sections.features.subtext}),i.jsx("div",{className:"line"})]}),i.jsx(u4,{children:(()=>{const L=[...new Set(k.filter(se=>se.name&&se.name!=="free_trial").map(se=>se.name.split("_")[0]))],G=L.length>0?L:["bike","car"],le=G.includes(P)?P:G[0],me=k.filter(se=>se.name&&se.name.startsWith(`${le}_`)).sort((se,ke)=>se.price-ke.price),pe=new Set;me.forEach(se=>{se.features&&se.features.forEach(ke=>pe.add(ke))});const $e=Array.from(pe);return i.jsxs(i.Fragment,{children:[i.jsx(Og,{style:{marginBottom:"60px"},children:G.map(se=>i.jsxs(Mg,{active:le===se,onClick:()=>ee(se),className:"comparison-tab",children:[se.toUpperCase()," SECURITY"]},se))}),i.jsxs(f4,{children:[i.jsx(_g,{className:"left",onClick:()=>ce(ae,"left"),children:i.jsx(Cn,{size:24})}),i.jsxs(d4,{ref:ae,columns:me.length,children:[i.jsxs(Rg,{className:"feature-labels",children:[i.jsx("h3",{children:"Compare Tiers"}),$e.map((se,ke)=>i.jsx("div",{className:"feature-cell label",style:{textTransform:"capitalize"},children:se},ke)),$e.length===0&&i.jsx("div",{className:"feature-cell label",children:"No features defined"})]}),me.map(se=>{const ke=se.name.split("_")[1]?.toUpperCase()||"PLAN",Ct=ke==="PRO"||ke==="PREMIUM";return i.jsxs(Rg,{className:Ct?"featured":"",children:[Ct&&i.jsx("div",{className:"popular-badge",children:"Popular"}),i.jsxs("div",{className:"plan-header",children:[i.jsx("div",{className:"tier",children:ke}),i.jsxs("div",{className:"price",children:["₹",se.price," ",i.jsx("span",{children:"/yr onwards"})]})]}),$e.map((ht,Ft)=>{const or=se.features?.includes(ht);return i.jsxs("div",{className:"feature-cell",children:[i.jsx("span",{className:"mobile-label",style:{textTransform:"capitalize"},children:ht}),or?i.jsx(Uj,{size:20,className:"check"}):i.jsx("span",{className:"dash",children:"—"})]},Ft)}),i.jsx("div",{className:"cta-box",children:i.jsxs(Ue,{onClick:()=>Le(se),style:{background:Ct?"#C9A84C":"transparent",color:Ct?"#0b1a33":"#C9A84C",border:"2px solid #C9A84C",padding:"18px",fontSize:"1rem",boxShadow:Ct?"0 10px 20px rgba(201, 168, 76, 0.2)":"none"},children:["Get ",ke]})})]},se.id)})]}),i.jsx(_g,{className:"right",onClick:()=>ce(ae,"right"),children:i.jsx(An,{size:24})})]})]})})()})]}),i.jsx(Fe,{bg:"white",children:i.jsxs(h4,{children:[i.jsxs("div",{children:[i.jsxs(Qi,{className:"travel-section-title",style:{textAlign:"left",margin:0},children:[i.jsxs("h2",{style:{fontSize:"3rem"},children:["Travel with ",i.jsx("span",{children:"Absolute Peace"})]}),i.jsx("p",{style:{margin:"25px 0"},children:"Never worry about lost luggage again. Our Smart QR tags ensure that your bags are always connected to you, anywhere in the world."}),i.jsx("div",{className:"line",style:{margin:"0 0 30px 0"}})]}),i.jsxs(m4,{children:[i.jsxs("div",{style:{background:"#f8fafc",padding:"20px",borderRadius:"16px"},children:[i.jsx(gl,{size:24,color:"#C9A84C"}),i.jsx("h4",{style:{margin:"10px 0 5px"},children:"Global Reach"}),i.jsx("p",{style:{fontSize:"0.85rem",color:"#666"},children:"Works worldwide with zero roaming charges for the finder."})]}),i.jsxs("div",{style:{background:"#f8fafc",padding:"20px",borderRadius:"16px"},children:[i.jsx(kt,{size:24,color:"#C9A84C"}),i.jsx("h4",{style:{margin:"10px 0 5px"},children:"ID Privacy"}),i.jsx("p",{style:{fontSize:"0.85rem",color:"#666"},children:"Your personal contact details are never exposed to the public."})]})]}),i.jsx(Ue,{as:"a",href:"/#products",variant:"primary",style:{padding:"15px 40px",textDecoration:"none"},children:"EXPLORE TAGS"})]}),i.jsxs("div",{style:{position:"relative"},children:[i.jsx("img",{src:"/assets/luggage-sticker-red.jpg",alt:"Luggage Tags",style:{width:"100%",borderRadius:"40px",boxShadow:"0 40px 80px rgba(0,0,0,0.1)"}}),i.jsx("div",{style:{position:"absolute",bottom:"-30px",right:"-30px",width:"250px",border:"8px solid white",borderRadius:"24px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0,0,0,0.2)"},children:i.jsx("img",{src:"/assets/luggage-sticker-green.jpg",alt:"Luggage Tags",style:{width:"100%"}})})]})]})}),i.jsxs(l4,{children:[i.jsxs("div",{className:"section-header",children:[i.jsx(zg,{size:42,className:"quote-icon"}),i.jsxs("h2",{children:[i.jsx("span",{children:"What our"}),"Customers Say"]})]}),i.jsxs("div",{className:"carousel-wrapper",children:[i.jsx("button",{className:"nav-btn",onClick:()=>f(L=>(L-1+8)%8),children:i.jsx(Cn,{size:20})}),i.jsx("div",{className:"carousel-viewport",children:i.jsx("div",{className:"cards",style:{transform:`translateX(calc(-${d*(100/(window.innerWidth>1024?3:window.innerWidth>768?2:1))}%))`},children:[{name:"Swati Singh",loc:"Bihar",featured:!1,text:`"V-KAWACH's Pet Safety QR helped me find my lost dog. Someone scanned the QR and <b>connected with me directly</b> — absolutely stress-free!"`},{name:"Rajat Patel",loc:"Gujarat",featured:!0,text:`"V-KAWACH Smart QR Tag has enhanced our vehicle's security. In an emergency, anyone can scan the QR and <b>instantly connect with us</b>."`},{name:"Surya Prakash",loc:"Jaipur",featured:!1,text:'"A fire broke out in my car in a crowded market — the Police scanned the V-KAWACH QR and contacted me immediately. This tag <b>saved us from a major loss</b>."'},{name:"Aman Verma",loc:"Delhi",featured:!1,text:`"Wrong parking was a common issue in Delhi's crowd. Now anyone scans the QR and informs me, and I move my car. A <b>very useful product</b>!"`},{name:"Priya Sharma",loc:"Mumbai",featured:!0,text:`"My daughter's school bag has a V-KAWACH tag. As a mother, I have <b>peace of mind</b> that anyone can reach me instantly in case of need."`},{name:"Vikram Singh",loc:"Chandigarh",featured:!1,text:'"I left my wallet in a cafe. A kind person scanned the QR card inside and called me. <b>Amazing technology</b>!"'},{name:"Neha Gupta",loc:"Bangalore",featured:!1,text:'"I left my laptop in an auto. The driver contacted me through the QR, and I got my valuable data and laptop back safely. <b>Thank you V-KAWACH!</b>"'},{name:"Amit Redhu",loc:"Haryana",featured:!0,text:'"This is very useful for my elderly father. He always carries an <b>emergency QR card</b>, which has reduced our worries about his safety."'}].map((L,G)=>i.jsxs(o4,{className:L.featured?"featured":"",style:{boxShadow:"0 15px 35px rgba(0,0,0,0.1)"},children:[i.jsx(zg,{size:28,className:"quote"}),i.jsx("p",{dangerouslySetInnerHTML:{__html:L.text}}),i.jsx("div",{className:"author",children:i.jsxs("div",{className:"info",children:[i.jsx("div",{className:"name",children:L.name}),i.jsx("div",{className:"loc",children:L.loc})]})})]},G))})}),i.jsx("button",{className:"nav-btn",onClick:()=>f(L=>(L+1)%8),children:i.jsx(An,{size:20})})]}),i.jsxs("div",{className:"dots-container",children:[i.jsx("button",{className:"nav-btn-mobile",onClick:()=>f(L=>(L-1+8)%8),children:i.jsx(Cn,{size:20})}),i.jsx("div",{className:"dots",children:[0,1,2,3,4,5,6,7].map(L=>i.jsx("span",{className:d===L?"active":"",onClick:()=>f(L)},L))}),i.jsx("button",{className:"nav-btn-mobile",onClick:()=>f(L=>(L+1)%8),children:i.jsx(An,{size:20})})]})]}),i.jsx(s4,{children:i.jsxs("div",{className:"faq-inner",children:[i.jsxs("div",{className:"faq-header",children:[i.jsxs("h2",{children:["Frequently Asked Questions",i.jsx("span",{})]}),i.jsx("p",{children:"V-KAWACH के बारे में सामान्य प्रश्नों के उत्तर पाएं"})]}),[{q:"V-KAWACH Safety QR क्या है?",a:"V-KAWACH Safety QR एक अगली पीढ़ी की डिजिटल सुरक्षा प्रणाली है जिसमें एक QR Tag आपके वाहन, लैपटॉप, बच्चे या पालतू जानवर पर लगाया जाता है। Emergency में कोई भी इसे scan करके आपसे तुरंत और anonymously connect कर सकता है।"},{q:"V-KAWACH QR कैसे काम करता है?",a:"QR scan होने पर एक secure page खुलता है जहाँ scanner अपना नंबर enter करता है। V-KAWACH का call masking system दोनों के नंबर छुपाकर एक safe call connect करता है — आपकी privacy 100% सुरक्षित रहती है।"},{q:"क्या बिना internet के QR scan होगा?",a:"QR scan के लिए scanner के फोन पर internet होना जरूरी है। लेकिन Emergency call का option हमेशा available रहता है जो बिना internet के भी काम करता है।"},{q:"क्या मेरा मोबाइल नंबर सुरक्षित (Safe) रहेगा?",a:"बिल्कुल! V-KAWACH में आपका नंबर कभी किसी को दिखता नहीं है। हमारी Privacy-First Call Masking Technology दोनों parties के नंबर को पूरी तरह छुपा देती है।"},{q:"V-KAWACH QR कहाँ-कहाँ use हो सकता है?",a:"गाड़ी (कार/बाइक), लैपटॉप, बच्चों का बैग, पालतू जानवर का collar, luggage, medical emergency card, corporate ID badge — कहीं भी जहाँ emergency में contact की ज़रूरत हो।"}].map((L,G)=>i.jsxs(c4,{open:p===G,children:[i.jsxs("div",{className:"faq-q",onClick:()=>x(p===G?null:G),children:[i.jsxs("div",{className:"q-left",children:[i.jsx("div",{className:"bar"}),i.jsx("span",{style:{fontWeight:"800"},children:L.q})]}),i.jsx(o1,{size:20})]}),i.jsx("div",{className:"faq-a",children:L.a})]},G))]})}),i.jsx(Fe,{bg:"light",children:i.jsxs(p4,{children:[i.jsx("div",{className:"subtitle",children:"OUR MISSION"}),i.jsxs("h2",{children:["About ",i.jsx("span",{children:"V-KAWACH"})]}),i.jsx("div",{className:"content-text",dangerouslySetInnerHTML:{__html:l.about.content}}),i.jsxs("div",{className:"stats",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"icon-circle",children:i.jsx(s1,{size:40})}),i.jsx("h3",{children:"24/7"}),i.jsx("span",{children:l.about.stats.monitoring}),i.jsx("p",{children:"Round-the-clock monitoring and instant emergency response connectivity whenever you need it."})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"icon-circle",children:i.jsx(Es,{size:40})}),i.jsx("h3",{children:"Vision"}),i.jsx("span",{children:l.about.stats.activeUsers}),i.jsx("p",{children:"Our core mission is to impact 10,000+ lives by making advanced safety accessible to everyone."})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"icon-circle",children:i.jsx(Ns,{size:40})}),i.jsx("h3",{children:"Partners"}),i.jsx("span",{children:l.social.stats.partnersDesc}),i.jsx("p",{children:"We are actively looking for dedicated partners to expand our safety network across the nation."})]})]})]})}),i.jsxs(r4,{children:[i.jsx(Ts,{})," V-Kawach Safety QR आपकी सुरक्षा के लिए है, इससे किसी भी प्रकार का payment नहीं किया जा सकता है।"]})]})},x4=j.div`
  background-color: ${({theme:a})=>a.colors.navy};
  color: ${({theme:a})=>a.colors.white};
  padding: 120px 0 80px;
  text-align: center;
`,y4=j.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`,b4=j.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${({theme:a})=>a.colors.gold};
`,v4=j.p`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
`,j4=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 60px;
  
  @media (min-width: ${({theme:a})=>a.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Nd=j.div`
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  
  .icon {
    width: 60px;
    height: 60px;
    background: ${({theme:a})=>a.colors.navy};
    color: ${({theme:a})=>a.colors.gold};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }
`,w4=j.ul`
  list-style: none;
  max-width: 600px;
  margin: 40px auto;
  text-align: left;
`,rl=j.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 1.1rem;
  
  svg {
    color: ${({theme:a})=>a.colors.gold};
  }
`,S4=()=>i.jsxs(i.Fragment,{children:[i.jsx(x4,{children:i.jsxs(y4,{children:[i.jsx(b4,{children:"Smart QR Identity"}),i.jsx(v4,{children:"Protect what matters with our advanced QR technology. Vehicles, pets, and loved ones — secured with instant connectivity and privacy."}),i.jsx(Ue,{as:"a",href:"/#products",children:"Get Your Smart ID"})]})}),i.jsxs(Fe,{children:[i.jsx("h2",{style:{textAlign:"center",marginBottom:"40px"},children:"How It Works"}),i.jsx("div",{style:{maxWidth:"800px",margin:"0 auto 60px",textAlign:"center"},children:i.jsx("img",{src:"/assets/v-kawach-steps.jpg",alt:"How it works",style:{width:"100%",borderRadius:"24px",boxShadow:"0 20px 40px rgba(0,0,0,0.1)"}})}),i.jsxs(j4,{children:[i.jsxs(Nd,{children:[i.jsx("div",{className:"icon",children:i.jsx(Gs,{size:32})}),i.jsx("h3",{children:"Scan"}),i.jsx("p",{children:"Anyone who finds your lost item or vehicle scans the QR code using any smartphone camera."})]}),i.jsxs(Nd,{children:[i.jsx("div",{className:"icon",children:i.jsx(Je,{size:32})}),i.jsx("h3",{children:"Connect"}),i.jsx("p",{children:"They are instantly redirected to a secure page to contact the owner."})]}),i.jsxs(Nd,{children:[i.jsx("div",{className:"icon",children:i.jsx(Df,{size:32})}),i.jsx("h3",{children:"Call Owner"}),i.jsx("p",{children:"They can call you immediately. Your number stays private via our call masking technology."})]})]})]}),i.jsx(Fe,{bg:"white",children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"center",maxWidth:"1200px",margin:"0 auto"},children:[i.jsx("div",{style:{borderRadius:"32px",overflow:"hidden",boxShadow:"0 30px 60px rgba(0,0,0,0.15)"},children:i.jsx("img",{src:"/assets/v-kawach-sticker-interior.jpg",alt:"V-Kawach Premium Sticker",style:{width:"100%",display:"block"}})}),i.jsxs("div",{children:[i.jsxs("h2",{style:{fontSize:"2.5rem",fontWeight:900,color:"#0b1a33",marginBottom:"20px"},children:["Premium 3D ",i.jsx("span",{style:{color:"#C9A84C"},children:"Stickers"})]}),i.jsx("p",{style:{fontSize:"1.1rem",color:"#666",lineHeight:"1.8",marginBottom:"30px"},children:"Our industrial-grade 3D stickers are not just functional—they are designed to complement your vehicle's interior. Built with high-quality resin, they are weatherproof, scratch-resistant, and feature a crystal-clear 3D depth."}),i.jsx(Ue,{as:"a",href:"/#products",children:"Order 3D Sticker"})]})]})}),i.jsxs(Fe,{bg:"light",children:[i.jsx("h2",{style:{textAlign:"center"},children:"Key Features"}),i.jsxs(w4,{children:[i.jsxs(rl,{children:[i.jsx(Je,{size:20})," Call Masking (Privacy Protection)"]}),i.jsxs(rl,{children:[i.jsx(Je,{size:20})," Instant SMS & WhatsApp Alerts"]}),i.jsxs(rl,{children:[i.jsx(Je,{size:20})," Emergency Contact Integration"]}),i.jsxs(rl,{children:[i.jsx(Je,{size:20})," No App Required for Finder"]}),i.jsxs(rl,{children:[i.jsx(Je,{size:20})," Weatherproof & Durable Tags"]})]}),i.jsx("div",{style:{textAlign:"center"},children:i.jsx(Ue,{as:"a",href:"/#products",children:"Order Now"})})]})]}),C4=j.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid ${({theme:a})=>a.colors.border};
`,A4=j.h3`
  margin-bottom: 20px;
  text-align: center;
  color: ${({theme:a})=>a.colors.navy};
`,Rd=j.div`
  margin-bottom: 20px;
`,_d=j.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${({theme:a})=>a.colors.text};
`,Od=j.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({theme:a})=>a.colors.border};
  border-radius: 4px;
  font-family: ${({theme:a})=>a.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${({theme:a})=>a.colors.gold};
    box-shadow: 0 0 0 2px rgba(201, 168, 76, 0.2);
  }
`,C1=({serviceName:a})=>{const[l,c]=S.useState({name:"",phone:"",city:""}),s=f=>{f.preventDefault();const p=`Hi, I am interested in ${a}.

My details are:
Name: ${l.name}
Phone: ${l.phone}
City: ${l.city}`,x=`https://wa.me/918881384777?text=${encodeURIComponent(p)}`;window.open(x,"_blank")},d=f=>{c({...l,[f.target.name]:f.target.value})};return i.jsxs(C4,{children:[i.jsxs(A4,{children:["Get a Quote for ",a]}),i.jsxs("form",{onSubmit:s,children:[i.jsxs(Rd,{children:[i.jsx(_d,{children:"Name"}),i.jsx(Od,{type:"text",name:"name",required:!0,placeholder:"Your Name",value:l.name,onChange:d})]}),i.jsxs(Rd,{children:[i.jsx(_d,{children:"Phone Number"}),i.jsx(Od,{type:"tel",name:"phone",required:!0,placeholder:"Your Phone Number",value:l.phone,onChange:d})]}),i.jsxs(Rd,{children:[i.jsx(_d,{children:"City"}),i.jsx(Od,{type:"text",name:"city",required:!0,placeholder:"Your City",value:l.city,onChange:d})]}),i.jsx(Ue,{type:"submit",style:{width:"100%"},children:"Request Quote"})]})]})},E4=j.header`
  background: ${({theme:a})=>a.colors.navy};
  color: white;
  padding: 100px 0 60px;
  text-align: center;
`,z4=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  
  @media (min-width: ${({theme:a})=>a.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`,k4=j.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${({theme:a})=>a.colors.navy};
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    opacity: 0.8;
  }
`,T4=j.span`
  background: ${({theme:a})=>a.colors.gold};
  color: ${({theme:a})=>a.colors.navy};
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 20px;
`,N4=()=>i.jsxs(i.Fragment,{children:[i.jsxs(E4,{children:[i.jsx("h1",{children:"Live Cloud Monitoring"}),i.jsx("p",{children:"Secure CCTV Backup & Anti-Theft Protection"})]}),i.jsx(Fe,{children:i.jsxs(z4,{children:[i.jsxs(k4,{children:[i.jsx(T4,{children:"COMING SOON"}),i.jsx("h2",{children:"Secure Your Premises with Cloud Intelligence"}),i.jsx("p",{children:"Traditional CCTV systems are vulnerable to theft and damage. Our cloud monitoring solution ensures your footage is safe, even if the camera is destroyed."}),i.jsxs("p",{children:[i.jsx("strong",{children:"Features:"}),i.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[i.jsx("li",{children:"Real-time Cloud Backup"}),i.jsx("li",{children:"Motion Detection Alerts"}),i.jsx("li",{children:"Anti-Theft Device Protection"}),i.jsx("li",{children:"Remote Access via Mobile"})]})]})]}),i.jsx(C1,{serviceName:"Cloud Monitoring"})]})})]}),R4=j.header`
  background: ${({theme:a})=>a.colors.navy};
  color: white;
  padding: 100px 0 60px;
  text-align: center;
`,_4=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  
  @media (min-width: ${({theme:a})=>a.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`,O4=j.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${({theme:a})=>a.colors.navy};
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    opacity: 0.8;
  }
`,M4=j.span`
  background: ${({theme:a})=>a.colors.gold};
  color: ${({theme:a})=>a.colors.navy};
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 20px;
`,D4=()=>i.jsxs(i.Fragment,{children:[i.jsxs(R4,{children:[i.jsx("h1",{children:"Advanced GPS Tracking"}),i.jsx("p",{children:"Real-time Location & Fleet Management"})]}),i.jsx(Fe,{children:i.jsxs(_4,{children:[i.jsxs(O4,{children:[i.jsx(M4,{children:"COMING SOON"}),i.jsx("h2",{children:"Precision Tracking for Every Asset"}),i.jsx("p",{children:"Whether it's a fleet of trucks or a personal vehicle, stay connected with real-time location data."}),i.jsxs("p",{children:[i.jsx("strong",{children:"Features:"}),i.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"10px"},children:[i.jsx("li",{children:"Live Location Tracking"}),i.jsx("li",{children:"Geofencing Alerts"}),i.jsx("li",{children:"Speed Monitoring"}),i.jsx("li",{children:"Route Playback"}),i.jsx("li",{children:"Fuel Usage Analytics"})]})]})]}),i.jsx(C1,{serviceName:"GPS Tracking"})]})})]}),H4=j.div`
  background: ${({theme:a})=>a.colors.navy};
  color: white;
  padding: 120px 0 80px;
  text-align: center;
`,Dg=j.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`,B4=j.div`
  display: flex;
  justify-content: space-around;
  margin: 60px 0;
  flex-wrap: wrap;
  gap: 30px;
`,Md=j.div`
  text-align: center;
  flex: 1;
  min-width: 200px;
  h3 {
    font-size: 2.5rem;
    color: ${({theme:a})=>a.colors.gold};
    margin-bottom: 5px;
  }
  p {
    color: ${({theme:a})=>a.colors.navy};
    font-weight: 700;
  }
`,U4=j.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-top: 60px;
  text-align: left;
  border-top: 5px solid ${({theme:a})=>a.colors.gold};

  h3 {
    margin-bottom: 25px;
    color: ${({theme:a})=>a.colors.navy};
    text-align: center;
  }
`,Zo=j.div`
  margin-bottom: 20px;
`,Jo=j.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,Dd=j.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fdfdfd;
  &:focus {
    outline: none;
    border-color: ${({theme:a})=>a.colors.gold};
  }
`,L4=j.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fdfdfd;
  min-height: 120px;
  &:focus {
    outline: none;
    border-color: ${({theme:a})=>a.colors.gold};
  }
`,$4=()=>{const[a,l]=S.useState({name:"",email:"",phone:"",message:"I want to become a partner"}),[c,s]=S.useState(!1),[d,f]=S.useState(null),p=m=>{l({...a,[m.target.name]:m.target.value})},x=m=>{m.preventDefault(),s(!0);const g=`Hi, I want to become a partner!

Name: ${a.name}
Email: ${a.email}
Phone: ${a.phone}
Message: ${a.message}`,y=`https://wa.me/918881384777?text=${encodeURIComponent(g)}`;window.open(y,"_blank"),s(!1),f({type:"success",message:"Redirecting to WhatsApp..."})};return i.jsxs(i.Fragment,{children:[i.jsx(H4,{children:i.jsxs(Dg,{children:[i.jsx("h1",{style:{fontSize:"3rem",color:"#C9A84C"},children:"Become a partner"}),i.jsx("p",{style:{fontSize:"1.2rem",marginTop:"20px",opacity:.9},children:"Our commitment to safer roads and connected communities."})]})}),i.jsx(Fe,{children:i.jsxs(Dg,{children:[i.jsx("h2",{children:"The Story"}),i.jsx("p",{style:{fontSize:"1.1rem",marginTop:"20px",lineHeight:"1.8"},children:"Our partnership initiative was born from a simple realization: in an emergency, every second counts. Too often, accident victims or lost individuals cannot be helped simply because there is no way to contact their family."}),i.jsx("p",{style:{fontSize:"1.1rem",marginTop:"20px",lineHeight:"1.8"},children:"Through our partner program, we distribute subsidized Smart QR stickers to public transport, elderly citizens, and school children, creating a safety net that spans across the city."}),i.jsxs(B4,{children:[i.jsxs(Md,{children:[i.jsx(x3,{size:48,color:"#C9A84C",style:{margin:"0 auto 10px"}}),i.jsx("h3",{style:{fontSize:"1.5rem"},children:"Vision"}),i.jsx("p",{children:"Impact 10,000+ Lives"})]}),i.jsxs(Md,{children:[i.jsx(Ns,{size:48,color:"#C9A84C",style:{margin:"0 auto 10px"}}),i.jsx("h3",{style:{fontSize:"1.2rem"},children:"Looking for"}),i.jsx("p",{children:"NGO Partners"})]}),i.jsxs(Md,{children:[i.jsx(dw,{size:48,color:"#C9A84C",style:{margin:"0 auto 10px"}}),i.jsx("h3",{style:{fontSize:"1.2rem"},children:"Initiative"}),i.jsx("p",{children:"Our Social Initiative"})]})]}),i.jsxs(U4,{id:"join-form",children:[i.jsx("h3",{children:"Become a Partner"}),i.jsxs("form",{onSubmit:x,children:[i.jsxs(Zo,{children:[i.jsx(Jo,{children:"Full Name"}),i.jsx(Dd,{type:"text",name:"name",required:!0,value:a.name,onChange:p,placeholder:"Enter your name"})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[i.jsxs(Zo,{children:[i.jsx(Jo,{children:"Email Address"}),i.jsx(Dd,{type:"email",name:"email",required:!0,value:a.email,onChange:p,placeholder:"email@example.com"})]}),i.jsxs(Zo,{children:[i.jsx(Jo,{children:"Phone Number"}),i.jsx(Dd,{type:"tel",name:"phone",required:!0,value:a.phone,onChange:p,placeholder:"+91 00000 00000"})]})]}),i.jsxs(Zo,{children:[i.jsx(Jo,{children:"Message"}),i.jsx(L4,{name:"message",value:a.message,onChange:p,placeholder:"How would you like to contribute?"})]}),i.jsxs(Ue,{type:"submit",disabled:c,style:{width:"100%",padding:"15px"},children:[c?"Sending...":"Join the Mission"," ",i.jsx(f1,{size:18,style:{marginLeft:"10px"}})]}),d&&i.jsx("p",{style:{marginTop:"20px",padding:"10px",borderRadius:"5px",textAlign:"center",background:d.type==="success"?"#e6f7e6":"#fff0f0",color:d.type==="success"?"#2e7d32":"#d32f2f"},children:d.message})]})]})]})})]})},Hg=pt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,q4=j.div`
  min-height: 100vh;
  display: flex;
  background: #0b1a33;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Y4=j.div`
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
    animation: ${Hg} 10s ease-in-out infinite;
  }
  &::after {
    background: radial-gradient(circle, rgba(26, 58, 109, 0.8) 0%, rgba(0,0,0,0) 70%);
    bottom: -200px;
    right: -200px;
    animation: ${Hg} 12s ease-in-out infinite reverse;
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
`,G4=j.div`
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
`,V4=j.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 40px 80px;
  background: white;
  position: relative;
`,Q4=j.div`
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
`,Bg=j.div`
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
        border-color: ${({theme:a})=>a.colors.gold};
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
      color: ${({theme:a})=>a.colors.gold};
    }
  }
`,I4=()=>{const a=Na(),[l,c]=S.useState({email:"",password:""}),[s,d]=S.useState(!1),[f,p]=S.useState(""),x=async m=>{m.preventDefault(),d(!0),p("");try{const g=await et.post("/auth/login",l),{token:y,role:v,user:k,admin:D}=g.data;localStorage.setItem("admin_token",y),localStorage.setItem("user_role",v),localStorage.setItem("user_profile",JSON.stringify(v==="admin"?D:k)),Ie.success("Login successful!"),v==="admin"?window.location.href="/admin/dashboard":a("/dashboard")}catch(g){p(g.response?.data?.error||"Login failed. Please check your credentials.")}finally{d(!1)}};return i.jsxs(q4,{children:[i.jsxs(Y4,{children:[i.jsxs("h1",{children:["Secure Your ",i.jsx("span",{children:"Ecosystem"})]}),i.jsx("p",{className:"subtitle",children:"Join India's most advanced vehicle and personal security network. One platform to monitor, track, and protect everything that matters."}),i.jsxs(G4,{children:[i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon",children:i.jsx(Je,{size:24})}),i.jsxs("div",{className:"text",children:[i.jsx("h4",{children:"Bank-Grade Security"}),i.jsx("p",{children:"256-bit encryption for all your personal data"})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon",children:i.jsx(ml,{size:24})}),i.jsxs("div",{className:"text",children:[i.jsx("h4",{children:"Fleet Protection"}),i.jsx("p",{children:"Real-time vehicle status and driver safety"})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon",children:i.jsx($s,{size:24})}),i.jsxs("div",{className:"text",children:[i.jsx("h4",{children:"Instant Alerts"}),i.jsx("p",{children:"Emergency notifications via SMS and calls"})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon",children:i.jsx(c1,{size:24})}),i.jsxs("div",{className:"text",children:[i.jsx("h4",{children:"Cloud Backup"}),i.jsx("p",{children:"Never lose your critical security records"})]})]})]})]}),i.jsx(V4,{children:i.jsxs(Q4,{children:[i.jsx("h2",{children:"Welcome Back"}),i.jsx("p",{className:"desc",children:"Enter your credentials to access your dashboard."}),f&&i.jsx("div",{style:{background:"rgba(239, 68, 68, 0.1)",color:"#ef4444",padding:"15px",borderRadius:"16px",marginBottom:"25px",fontSize:"0.85rem",fontWeight:600,border:"1px solid rgba(239, 68, 68, 0.2)",textAlign:"center"},children:f}),i.jsxs("form",{onSubmit:x,children:[i.jsxs(Bg,{children:[i.jsx("label",{children:"Email Address"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx("input",{type:"email",placeholder:"name@company.com",value:l.email,onChange:m=>c({...l,email:m.target.value}),autoComplete:"email",required:!0}),i.jsx(vl,{size:22})]})]}),i.jsxs(Bg,{children:[i.jsx("label",{children:"Password"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx("input",{type:"password",placeholder:"••••••••",value:l.password,onChange:m=>c({...l,password:m.target.value}),autoComplete:"current-password",required:!0}),i.jsx(Ta,{size:22})]})]}),i.jsx(Ue,{type:"submit",disabled:s,style:{width:"100%",padding:"20px",marginTop:"10px",background:"#C9A84C",color:"#0b1a33",borderRadius:"16px",fontSize:"1.1rem",fontWeight:900,opacity:s?.7:1,boxShadow:"0 10px 30px rgba(201, 168, 76, 0.2)"},children:s?"AUTHENTICATING...":i.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},children:["ACCESS PORTAL ",i.jsx(Ew,{size:22})]})})]}),i.jsxs("div",{style:{textAlign:"center",marginTop:"40px",fontSize:"0.95rem",color:"#666"},children:["Don't have an account? ",i.jsx(Se,{to:"/signup",style:{color:"#0b1a33",fontWeight:800,textDecoration:"none"},children:"Register Now"})]})]})})]})},Ug=pt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,K4=j.div`
  min-height: 100vh;
  display: flex;
  background: #0b1a33;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,P4=j.div`
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
    animation: ${Ug} 10s ease-in-out infinite;
  }
  &::after {
    background: radial-gradient(circle, rgba(26, 58, 109, 0.8) 0%, rgba(0,0,0,0) 70%);
    bottom: -200px;
    right: -200px;
    animation: ${Ug} 12s ease-in-out infinite reverse;
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
`,F4=j.div`
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
`,W4=j.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 40px 80px;
  background: white;
  position: relative;
`,X4=j.div`
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
`,es=j.div`
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
        border-color: ${({theme:a})=>a.colors.gold};
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
      color: ${({theme:a})=>a.colors.gold};
    }
  }
`,Z4=()=>{const a=Na(),[l,c]=S.useState({name:"",email:"",password:"",confirmPassword:""}),[s,d]=S.useState(!1),[f,p]=S.useState(""),x=async m=>{if(m.preventDefault(),p(""),l.password!==l.confirmPassword){p("Passwords do not match!");return}d(!0);try{await et.post("/auth/signup",{name:l.name,email:l.email,password:l.password}),Ie.success("Account created! Please login."),a("/login")}catch(g){p(g.response?.data?.error||"Signup failed. Please try again.")}finally{d(!1)}};return i.jsxs(K4,{children:[i.jsxs(P4,{children:[i.jsxs("h1",{children:["Secure Your ",i.jsx("span",{children:"Ecosystem"})]}),i.jsx("p",{className:"subtitle",children:"Join India's most advanced vehicle and personal security network. One platform to monitor, track, and protect everything that matters."}),i.jsxs(F4,{children:[i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon",children:i.jsx(Je,{size:24})}),i.jsxs("div",{className:"text",children:[i.jsx("h4",{children:"Bank-Grade Security"}),i.jsx("p",{children:"256-bit encryption for all your personal data"})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon",children:i.jsx(ml,{size:24})}),i.jsxs("div",{className:"text",children:[i.jsx("h4",{children:"Fleet Protection"}),i.jsx("p",{children:"Real-time vehicle status and driver safety"})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon",children:i.jsx($s,{size:24})}),i.jsxs("div",{className:"text",children:[i.jsx("h4",{children:"Instant Alerts"}),i.jsx("p",{children:"Emergency notifications via SMS and calls"})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("div",{className:"icon",children:i.jsx(c1,{size:24})}),i.jsxs("div",{className:"text",children:[i.jsx("h4",{children:"Cloud Backup"}),i.jsx("p",{children:"Never lose your critical security records"})]})]})]})]}),i.jsx(W4,{children:i.jsxs(X4,{children:[i.jsx("h2",{children:"Create Account"}),i.jsx("p",{className:"desc",children:"Join the ecosystem to manage your smart assets."}),f&&i.jsx("div",{style:{background:"rgba(239, 68, 68, 0.1)",color:"#ef4444",padding:"15px",borderRadius:"16px",marginBottom:"25px",fontSize:"0.85rem",fontWeight:600,border:"1px solid rgba(239, 68, 68, 0.2)",textAlign:"center"},children:f}),i.jsxs("form",{onSubmit:x,children:[i.jsxs(es,{children:[i.jsx("label",{children:"Full Name"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx("input",{type:"text",placeholder:"Enter your full name",value:l.name,onChange:m=>c({...l,name:m.target.value}),required:!0}),i.jsx(En,{size:22})]})]}),i.jsxs(es,{children:[i.jsx("label",{children:"Email Address"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx("input",{type:"email",placeholder:"name@company.com",value:l.email,onChange:m=>c({...l,email:m.target.value}),required:!0}),i.jsx(vl,{size:22})]})]}),i.jsxs(es,{children:[i.jsx("label",{children:"Password"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx("input",{type:"password",placeholder:"Create a password",value:l.password,onChange:m=>c({...l,password:m.target.value}),required:!0}),i.jsx(Ta,{size:22})]})]}),i.jsxs(es,{children:[i.jsx("label",{children:"Confirm Password"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx("input",{type:"password",placeholder:"Confirm your password",value:l.confirmPassword,onChange:m=>c({...l,confirmPassword:m.target.value}),required:!0}),i.jsx(Ta,{size:22})]})]}),i.jsx(Ue,{type:"submit",disabled:s,style:{width:"100%",padding:"20px",marginTop:"10px",background:"#C9A84C",color:"#0b1a33",borderRadius:"16px",fontSize:"1.1rem",fontWeight:900,opacity:s?.7:1,boxShadow:"0 10px 30px rgba(201, 168, 76, 0.2)"},children:s?"CREATING ACCOUNT...":i.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},children:["REGISTER ",i.jsx(E3,{size:22})]})})]}),i.jsxs("div",{style:{textAlign:"center",marginTop:"35px",fontSize:"0.95rem",color:"#666"},children:["Already have an account? ",i.jsx(Se,{to:"/login",style:{color:"#0b1a33",fontWeight:800,textDecoration:"none"},children:"Login Here"})]})]})})]})},J4=pt`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`,e8=pt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`,t8=j.div`
  background: #fcfcfc;
  color: #0b1a33;
`,n8=j.section`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  padding: 160px 20px 100px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
    animation: ${e8} 10s ease-in-out infinite;
  }

  .content {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    animation: ${J4} 0.8s ease-out;

    h1 {
      color: white;
      font-size: 4.5rem;
      font-weight: 900;
      margin-bottom: 25px;
      line-height: 1.1;
      letter-spacing: -2px;
      span { color: #C9A84C; }
      @media (max-width: 768px) { font-size: 3rem; }
    }

    p {
      font-size: 1.4rem;
      color: rgba(255,255,255,0.7);
      margin-bottom: 50px;
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`,Hd=j.section`
  padding: 120px 20px;
  background: ${a=>a.bg==="light"?"#f8fafc":a.bg==="dark"?"#0b1a33":"white"};
  color: ${a=>a.bg==="dark"?"white":"#0b1a33"};
`,Bd=j.div`
  max-width: 1400px;
  margin: 0 auto;
`,a8=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: ${a=>a.marginTop||"0"};
`,Ud=j.div`
  background: white;
  padding: 50px;
  border-radius: 32px;
  border: 1px solid #eee;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.1);
    border-color: #C9A84C;
  }

  .icon {
    width: 70px;
    height: 70px;
    background: #f8fafc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C9A84C;
    margin-bottom: 30px;
    transition: all 0.3s;
  }

  h3 { font-size: 1.8rem; font-weight: 900; margin-bottom: 20px; }
  p { font-size: 1.1rem; color: #666; line-height: 1.7; margin-bottom: 30px; }
`,i8=j.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,r8=j.div`
  flex: 1;
  background: white;
  border-radius: 32px;
  border: 1px solid #eee;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);

  .header {
    background: #0b1a33;
    padding: 30px 40px;
    color: white;
    h3 { font-size: 1.4rem; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; }
    span { color: #C9A84C; font-size: 0.8rem; font-weight: 800; letter-spacing: 2px; }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #f0f0f0;
      &:last-child { border: none; }
      th { 
        padding: 25px 40px; 
        text-align: left; 
        font-size: 0.75rem; 
        font-weight: 800; 
        color: #999; 
        text-transform: uppercase; 
        letter-spacing: 1.5px;
        width: 40%;
      }
      td { 
        padding: 25px 40px; 
        font-size: 1.1rem; 
        font-weight: 700; 
        color: #0b1a33;
      }
    }
  }
`,l8=j.div`
  flex: 0.8;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`,ts=j.div`
  background: #f8fafc;
  padding: 30px;
  border-radius: 24px;
  border: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    background: white;
    border-color: #eee;
    transform: scale(1.05);
  }

  svg { color: #C9A84C; margin-bottom: 15px; }
  h4 { font-size: 1rem; font-weight: 900; margin-bottom: 10px; color: #0b1a33; }
  p { font-size: 0.85rem; color: #666; line-height: 1.6; }
`,o8=()=>i.jsxs(t8,{children:[i.jsx(n8,{children:i.jsxs("div",{className:"content",children:[i.jsxs("h1",{children:["Enterprise ",i.jsx("span",{children:"Digital Identity"})]}),i.jsx("p",{children:"Transform your physical assets into intelligent digital endpoints. Secure your products, fleets, and personnel with Tarkshya's proprietary QR ecosystem."}),i.jsxs("div",{style:{display:"flex",gap:"20px",justifyContent:"center"},children:[i.jsx(Ue,{as:Se,to:"/contact",variant:"primary",style:{padding:"18px 50px",fontSize:"0.9rem"},children:"PARTNER WITH US"}),i.jsx(Ue,{as:Se,to:"/contact",variant:"outline",style:{padding:"18px 50px",fontSize:"0.9rem"},children:"REQUEST DEMO"})]})]})}),i.jsx(Hd,{children:i.jsxs(Bd,{children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"80px"},children:[i.jsx("span",{style:{color:"#C9A84C",fontWeight:900,letterSpacing:"4px",fontSize:"0.9rem",textTransform:"uppercase"},children:"Industry Verticals"}),i.jsxs("h2",{style:{fontSize:"3.5rem",fontWeight:900,marginTop:"10px",letterSpacing:"-1.5px"},children:["Tailored For Your ",i.jsx("span",{children:"Sector"})]})]}),i.jsxs(a8,{children:[i.jsxs(Ud,{children:[i.jsx("div",{className:"icon",children:i.jsx(Hf,{size:32})}),i.jsx("h3",{children:"Logistics & Fleet"}),i.jsx("p",{children:"Eliminate manual entry and secure driver privacy. Our tags provide 24/7 incident reporting and call masking for 50k+ vehicles."}),i.jsxs(Se,{to:"#",style:{color:"#C9A84C",fontWeight:800,textDecoration:"none",display:"flex",alignItems:"center",gap:"10px"},children:["LEARN MORE ",i.jsx(dl,{size:18})]})]}),i.jsxs(Ud,{children:[i.jsx("div",{className:"icon",children:i.jsx(l1,{size:32})}),i.jsx("h3",{children:"Corporate & Govt"}),i.jsx("p",{children:"Modernize employee IDs with secure medical & emergency clusters. Privacy-first identity management for large-scale organizations."}),i.jsxs(Se,{to:"#",style:{color:"#C9A84C",fontWeight:800,textDecoration:"none",display:"flex",alignItems:"center",gap:"10px"},children:["LEARN MORE ",i.jsx(dl,{size:18})]})]}),i.jsxs(Ud,{children:[i.jsx("div",{className:"icon",children:i.jsx(Ls,{size:32})}),i.jsx("h3",{children:"Education"}),i.jsx("p",{children:"Student safety backpacks and IDs with instant parent alerts. Secured protocols for school bus fleets and campus safety."}),i.jsxs(Se,{to:"#",style:{color:"#C9A84C",fontWeight:800,textDecoration:"none",display:"flex",alignItems:"center",gap:"10px"},children:["LEARN MORE ",i.jsx(dl,{size:18})]})]})]})]})}),i.jsx(Hd,{bg:"light",id:"fmcg",children:i.jsxs(Bd,{children:[i.jsxs("div",{style:{marginBottom:"80px"},children:[i.jsx("span",{style:{color:"#C9A84C",fontWeight:900,letterSpacing:"4px",fontSize:"0.9rem",textTransform:"uppercase"},children:"FMCG Sector Solution"}),i.jsxs("h2",{style:{fontSize:"3.5rem",fontWeight:900,marginTop:"10px",letterSpacing:"-1.5px"},children:["Brand ",i.jsx("span",{children:"Authenticity"})," & Transparency"]}),i.jsx("p",{style:{maxWidth:"800px",fontSize:"1.2rem",color:"#666",marginTop:"20px",lineHeight:1.8},children:'Tarkshya Solution enables FMCG brands to fight counterfeiting and build consumer trust. Our "Merck-style" technical integration provides instant batch verification and supply chain visibility.'})]}),i.jsxs(i8,{children:[i.jsxs(r8,{children:[i.jsxs("div",{className:"header",children:[i.jsx("span",{children:"IDENTITY VALIDATION"}),i.jsx("h3",{children:"Digital Data Sheet"})]}),i.jsx("table",{children:i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("th",{children:"Protocol"}),i.jsx("td",{children:"Blockchain-Secure Identity"})]}),i.jsxs("tr",{children:[i.jsx("th",{children:"Batch Tracking"}),i.jsx("td",{children:"Individual Unit Level"})]}),i.jsxs("tr",{children:[i.jsx("th",{children:"Certifications"}),i.jsx("td",{children:"FSSAI / ISO Linked"})]}),i.jsxs("tr",{children:[i.jsx("th",{children:"Anti-Counterfeit"}),i.jsx("td",{children:"Tamper-Evident QR Tags"})]}),i.jsxs("tr",{children:[i.jsx("th",{children:"Analytics"}),i.jsx("td",{children:"Real-time Scan Heatmaps"})]})]})})]}),i.jsxs(l8,{children:[i.jsxs(ts,{children:[i.jsx(wl,{size:24}),i.jsx("h4",{children:"Instant Verify"}),i.jsx("p",{children:"Consumers can verify authenticity in 2 seconds with any smartphone camera."})]}),i.jsxs(ts,{children:[i.jsx(lw,{size:24}),i.jsx("h4",{children:"FSSAI Connect"}),i.jsx("p",{children:"Instant access to regulatory details, lab reports, and technical specifications."})]}),i.jsxs(ts,{children:[i.jsx(Jj,{size:24}),i.jsx("h4",{children:"Supply Chain"}),i.jsx("p",{children:"Track the journey from factory to shelf with unit-level digital signatures."})]}),i.jsxs(ts,{children:[i.jsx(Hj,{size:24}),i.jsx("h4",{children:"Consumer Insights"}),i.jsx("p",{children:"Direct engagement and feedback loops via the authentication landing page."})]})]})]})]})}),i.jsx(Hd,{bg:"dark",children:i.jsx(Bd,{children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",lgDirection:"row",gap:"80px",alignItems:"center"},children:[i.jsxs("div",{style:{flex:1},children:[i.jsxs("h2",{style:{fontSize:"3.5rem",fontWeight:900,color:"white"},children:["Global ",i.jsx("span",{children:"Scale"}),". Precision ",i.jsx("span",{children:"Security"}),"."]}),i.jsx("p",{style:{fontSize:"1.2rem",color:"rgba(255,255,255,0.6)",marginTop:"30px",lineHeight:1.8},children:"Our ecosystem is built for high-throughput environments. Whether you have 100 employees or 10 million products, Tarkshya provides the infrastructure to secure them all."}),i.jsxs("div",{style:{marginTop:"50px",display:"flex",gap:"40px"},children:[i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"3rem",fontWeight:900,color:"#C9A84C"},children:"99.9%"}),i.jsx("div",{style:{fontSize:"0.8rem",fontWeight:800,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"2px"},children:"Uptime Reliability"})]}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"3rem",fontWeight:900,color:"#C9A84C"},children:"256-Bit"}),i.jsx("div",{style:{fontSize:"0.8rem",fontWeight:800,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"2px"},children:"End-to-End Encryption"})]})]})]}),i.jsxs("div",{style:{flex:.8,background:"rgba(255,255,255,0.05)",padding:"50px",borderRadius:"40px",border:"1px solid rgba(255,255,255,0.1)"},children:[i.jsxs("h3",{style:{fontSize:"2rem",fontWeight:900,color:"white",marginBottom:"30px"},children:["Consult with an ",i.jsx("span",{children:"Expert"})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[i.jsxs(Ue,{as:Se,to:"/contact",variant:"primary",style:{background:"#C9A84C",color:"#0b1a33"},children:[i.jsx(d1,{size:20,style:{marginRight:"10px"}})," BOOK STRATEGY SESSION"]}),i.jsxs(Ue,{as:Se,to:"/case-studies",variant:"outline",children:[i.jsx(gl,{size:20,style:{marginRight:"10px"}})," EXPLORE ENTERPRISE CASE STUDIES"]})]})]})]})})})]}),s8=j.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
    font-size: 1.25rem;
    color: #0b1a33;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
`,Lg=j.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #333;
    font-size: 0.9rem;
  }

  input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #C9A84C;
      box-shadow: 0 0 0 2px rgba(201, 168, 76, 0.2);
    }
  }
`,c8=j.button`
  background: #C9A84C;
  color: #0b1a33;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    background: #b5953e;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,u8=()=>{const[a,l]=S.useState(!1),[c,s]=S.useState(!0),[d,f]=S.useState({RAZORPAY_KEY_ID:"",RAZORPAY_KEY_SECRET:""});S.useEffect(()=>{(async()=>{try{const m=await et.get("/settings");m.data.settings&&f({RAZORPAY_KEY_ID:m.data.settings.RAZORPAY_KEY_ID||"",RAZORPAY_KEY_SECRET:m.data.settings.RAZORPAY_KEY_SECRET||""})}catch(m){console.error(m),Ie.error("Failed to load settings")}finally{s(!1)}})()},[]);const p=async x=>{x.preventDefault(),l(!0);try{await et.put("/settings",d),Ie.success("Settings saved successfully")}catch(m){console.error(m),Ie.error("Failed to save settings")}finally{l(!1)}};return c?i.jsx("p",{children:"Loading settings..."}):i.jsx("div",{children:i.jsxs(s8,{children:[i.jsx("h3",{children:"Payment Gateway Settings (Razorpay)"}),i.jsxs("form",{onSubmit:p,children:[i.jsxs(Lg,{children:[i.jsx("label",{children:"Razorpay Key ID"}),i.jsx("input",{type:"text",value:d.RAZORPAY_KEY_ID,onChange:x=>f({...d,RAZORPAY_KEY_ID:x.target.value}),placeholder:"rzp_test_...",required:!0})]}),i.jsxs(Lg,{children:[i.jsx("label",{children:"Razorpay Key Secret"}),i.jsx("input",{type:"password",value:d.RAZORPAY_KEY_SECRET,onChange:x=>f({...d,RAZORPAY_KEY_SECRET:x.target.value}),placeholder:"Secret Key",required:!0})]}),i.jsx(c8,{type:"submit",disabled:a,children:a?"Saving...":"Save Payment Settings"})]})]})})},d8=j.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 85px;
`,f8=j.aside`
  width: 260px;
  background-color: ${({theme:a})=>a.colors.navy};
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
  font-family: ${({theme:a})=>a.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  
  img {
    height: 32px;
    border-radius: 4px;
  }
`;const p8=j.ul`
  list-style: none;
  padding: 0;
  flex: 1;
`,$g=j.li`
  margin-bottom: 5px;
`,Ld=j(Se)`
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
    border-left-color: ${({theme:a})=>a.colors.gold};
    color: ${({theme:a})=>a.colors.gold};
  }

  svg {
    width: 20px;
  }
`,h8=j.main`
  flex: 1;
  margin-left: 260px;
  padding: 30px;
`,m8=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background: white;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`,g8=j.div`
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
      border-color: ${({theme:a})=>a.colors.gold};
    }
  }

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
  }
`,x8=j.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,y8=j.button`
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
`,b8=j.div`
  background: linear-gradient(135deg, ${({theme:a})=>a.colors.navy} 0%, #1a3a6d 100%);
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
`,v8=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`,j8=j.div`
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
    color: ${({theme:a})=>a.colors.gold};
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
      color: ${({theme:a})=>a.colors.navy};
    }
  }
`,qg=j.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`,$d=j.div`
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
      color: ${({theme:a})=>a.colors.navy};
    }
    
    button {
      color: ${({theme:a})=>a.colors.gold};
      background: none;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }
  }
`,Yg=j.table`
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
`,Gg=j.span`
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${a=>a.type==="active"?"#e6f7e6":"#fff0f0"};
  color: ${a=>a.type==="active"?"#2e7d32":"#d32f2f"};
`,w8=()=>{const a=Na(),[l,c]=S.useState([]),[s,d]=S.useState("dashboard");S.useEffect(()=>{(async()=>{try{const g=await et.get("/leads");g.data.leads&&c(g.data.leads)}catch(g){console.error("Error fetching leads:",g)}})()},[]);const f=[{label:"Active QRs",value:"12",icon:i.jsx(sl,{})},{label:"Total Scans",value:"1,284",icon:i.jsx(Es,{})},{label:"Call Alerts",value:"45",icon:i.jsx(qs,{})},{label:"Profile Views",value:"3,456",icon:i.jsx(En,{})}],p=[{id:"QR-8291",name:"Car Sticker - Swift",status:"active",date:"Feb 20, 2024"},{id:"QR-8292",name:"Pet Tag - Bruno",status:"active",date:"Feb 18, 2024"},{id:"QR-8293",name:"Keyring - Office",status:"inactive",date:"Feb 15, 2024"}],x=()=>{a("/login")};return i.jsxs(i.Fragment,{children:[i.jsx(Uf,{}),i.jsxs(d8,{children:[i.jsxs(f8,{children:[i.jsxs(p8,{children:[i.jsx($g,{children:i.jsxs(Ld,{to:"#",className:s==="dashboard"?"active":"",onClick:()=>d("dashboard"),children:[i.jsx(xw,{}),"Master Panel"]})}),i.jsx($g,{children:i.jsxs(Ld,{to:"#",className:s==="settings"?"active":"",onClick:()=>d("settings"),children:[i.jsx(p1,{}),"System Settings"]})})]}),i.jsx("div",{style:{padding:"0 30px"},children:i.jsxs(Ld,{to:"/login",onClick:x,style:{border:"none",background:"rgba(255,255,255,0.05)",borderRadius:"8px"},children:[i.jsx(u1,{}),"Logout"]})})]}),i.jsxs(h8,{children:[i.jsxs(m8,{children:[i.jsxs(g8,{children:[i.jsx(e3,{size:18}),i.jsx("input",{type:"text",placeholder:"Search Master Database..."})]}),i.jsxs(x8,{children:[i.jsxs(y8,{children:[i.jsx($s,{size:20}),i.jsx("div",{className:"badge",children:"3"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[i.jsxs("div",{style:{textAlign:"right"},children:[i.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem"},children:"Akash Yadav"}),i.jsx("div",{style:{fontSize:"0.75rem",color:"#888"},children:"Super Admin"})]}),i.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"#eee",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(En,{size:20,color:"#666"})})]})]})]}),s==="dashboard"&&i.jsxs(i.Fragment,{children:[i.jsxs(b8,{children:[i.jsx("h1",{children:"Super Admin Control"}),i.jsx("p",{children:"Managing 1,284 scan events across the Tarkshya ecosystem. 3 new critical alerts pending review."})]}),i.jsx(v8,{children:f.map((m,g)=>i.jsxs(j8,{children:[i.jsx("div",{className:"icon-box",children:m.icon}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:m.label}),i.jsx("span",{children:m.value})]})]},g))}),i.jsxs(qg,{children:[i.jsxs($d,{children:[i.jsxs("div",{className:"header",children:[i.jsx("h3",{children:"Master QR Inventory"}),i.jsxs("button",{children:[i.jsx(Ag,{size:18,style:{verticalAlign:"middle",marginRight:"5px"}})," Bulk Generate"]})]}),i.jsxs(Yg,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"ID"}),i.jsx("th",{children:"Asset Name"}),i.jsx("th",{children:"Status"}),i.jsx("th",{children:"Created Date"}),i.jsx("th",{children:"Action"})]})}),i.jsx("tbody",{children:p.map(m=>i.jsxs("tr",{children:[i.jsx("td",{children:m.id}),i.jsx("td",{style:{fontWeight:600},children:m.name}),i.jsx("td",{children:i.jsx(Gg,{type:m.status,children:m.status})}),i.jsx("td",{children:m.date}),i.jsx("td",{children:i.jsx("button",{style:{background:"none",border:"none",color:"#666",cursor:"pointer"},children:"Edit/Revoke"})})]},m.id))})]})]}),i.jsxs($d,{children:[i.jsx("div",{className:"header",children:i.jsx("h3",{children:"Live System Feed"})}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[1,2,3,4].map(m=>i.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"flex-start"},children:[i.jsx("div",{style:{width:"35px",height:"35px",borderRadius:"8px",background:"#f0f4f8",display:"flex",alignItems:"center",justifyContent:"center",color:"#0b1a33"},children:i.jsx(Es,{size:16})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"0.85rem",fontWeight:600},children:"Celerio Car QR Scanned"}),i.jsx("div",{style:{fontSize:"0.75rem",color:"#999"},children:"Chandausi, UP • 2 mins ago"})]})]},m))})]})]}),i.jsx(qg,{style:{marginTop:"30px",gridTemplateColumns:"1fr"},children:i.jsxs($d,{children:[i.jsxs("div",{className:"header",children:[i.jsx("h3",{children:"Chatbot Inquiries & Leads"}),i.jsxs("button",{children:[i.jsx(Ag,{size:18,style:{verticalAlign:"middle",marginRight:"5px"}})," View All"]})]}),i.jsxs(Yg,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Name"}),i.jsx("th",{children:"Phone"}),i.jsx("th",{children:"Inquiry"}),i.jsx("th",{children:"Status"}),i.jsx("th",{children:"Date Captured"})]})}),i.jsx("tbody",{children:l.length>0?l.map(m=>i.jsxs("tr",{children:[i.jsx("td",{style:{fontWeight:600},children:m.name}),i.jsx("td",{children:m.phone}),i.jsx("td",{children:m.message||m.inquiry||"-"}),i.jsx("td",{children:i.jsx(Gg,{type:m.status==="new"?"inactive":"active",children:m.status})}),i.jsx("td",{children:new Date(m.createdAt).toLocaleDateString()})]},m.id)):i.jsx("tr",{children:i.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"30px",color:"#999"},children:"No leads captured yet."})})})]})]})})]}),s==="settings"&&i.jsx(u8,{})]})]})]})},S8=j.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,C8=j.div`
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
`,A8=j.button`
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
`,Vg=j.div`
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
`,E8=j.div`
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
`,z8=j.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 85px;
`,k8=j.aside`
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
`;const T8=j.ul`
  list-style: none;
  padding: 0;
  flex: 1;
`,qd=j.li`
  margin-bottom: 5px;
`,Yd=j.button`
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
`,N8=pt`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,R8=j.main`
  flex: 1;
  margin-left: 260px;
  padding: 40px;
  animation: ${N8} 0.8s ease-out;
`,_8=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  background: white;
  padding: 20px 35px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.02);
`,Gd=j.div`
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
      font-family: ${({theme:a})=>a.fonts.display};
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
`,O8=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`,Vd=j.div`
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
`,Qd=j.div`
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
    font-family: ${({theme:a})=>a.fonts.display};
    
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, #eee, transparent);
    }
  }
`,ns=j.div`
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
`,M8=j.table`
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
`,as=j.span`
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${a=>a.status==="PAID"||a.status==="DELIVERED"?"#e6f7e6":"#fff3e0"};
  color: ${a=>a.status==="PAID"||a.status==="DELIVERED"?"#2e7d32":"#ef6c00"};
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`,D8=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,H8=j.div`
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
`,B8=()=>{const a=Na(),l=oj(),[c,s]=S.useState(!0),[d,f]=S.useState(null),[p,x]=S.useState("orders"),[m,g]=S.useState(null),[y,v]=S.useState({name:"",phone:"",currentPassword:"",newPassword:""}),k=async()=>{try{const N=await et.get("/user/dashboard");f(N.data),v($=>({...$,name:N.data.user?.name||"",phone:N.data.user?.phone||""}))}catch(N){console.error(N),Ie.error("Failed to load dashboard data"),N.response?.status===401&&a("/login")}finally{s(!1)}};S.useEffect(()=>{if(!localStorage.getItem("admin_token")){a("/login");return}k()},[a]);const D=async N=>{N.preventDefault();try{await et.post("/user/settings",y),Ie.success("Profile updated successfully!"),v($=>({...$,currentPassword:"",newPassword:""})),k()}catch($){Ie.error($.response?.data?.error||"Failed to update profile")}};if(c)return i.jsx("div",{style:{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center",background:"#0b1a33",color:"white"},children:"SECURE LOADING..."});const{user:A,tags:R,orders:E}=d||{};return i.jsxs(i.Fragment,{children:[i.jsx(Uf,{}),i.jsxs(z8,{children:[i.jsxs(k8,{children:[i.jsxs(T8,{children:[i.jsx(qd,{children:i.jsxs(Yd,{className:p==="orders"?"active":"",onClick:()=>x("orders"),children:[i.jsx(xs,{}),"My Orders"]})}),i.jsx(qd,{children:i.jsxs(Yd,{className:p==="qrcodes"?"active":"",onClick:()=>x("qrcodes"),children:[i.jsx(sl,{}),"My QR Tags"]})}),i.jsx(qd,{children:i.jsxs(Yd,{className:p==="profile"?"active":"",onClick:()=>x("profile"),children:[i.jsx(En,{}),"Profile Settings"]})})]}),i.jsx("div",{style:{padding:"0 30px"},children:i.jsxs("button",{onClick:()=>{localStorage.removeItem("admin_token"),localStorage.removeItem("user_role"),localStorage.removeItem("user_profile"),a("/login")},style:{width:"100%",display:"flex",alignItems:"center",gap:"12px",padding:"12px 30px",color:"white",textDecoration:"none",opacity:.7,transition:"all 0.3s ease",border:"none",background:"rgba(255,255,255,0.05)",borderRadius:"8px",cursor:"pointer",textAlign:"left",fontSize:"1rem"},children:[i.jsx(u1,{size:20}),"Logout"]})})]}),i.jsxs(R8,{children:[i.jsxs(_8,{children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[i.jsxs("div",{style:{fontSize:"0.75rem",color:"#888",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"4px"},children:["Platform / Customer / ",p]}),i.jsx("div",{style:{fontWeight:900,color:"#0b1a33",fontSize:"1.4rem",fontFamily:l?.fonts?.display||"serif"},children:p==="orders"?"Orders Ledger":p==="qrcodes"?"Digital Assets":"Account Security"})]}),i.jsx("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"8px 20px",background:"#f8f9fa",borderRadius:"100px",border:"1px solid #f0f0f0"},children:[i.jsxs("div",{style:{textAlign:"right"},children:[i.jsx("div",{style:{fontWeight:800,fontSize:"0.85rem",color:"#0b1a33"},children:A?.name}),i.jsx("div",{style:{fontSize:"0.7rem",color:"#888",fontWeight:600},children:A?.email})]}),i.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"white",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 10px rgba(0,0,0,0.05)"},children:i.jsx(En,{size:18,color:"#C9A84C"})})]})})]}),p==="orders"&&i.jsxs(i.Fragment,{children:[i.jsxs(Gd,{children:[i.jsxs("div",{className:"text",children:[i.jsxs("h1",{children:["Welcome Back, ",A?.name?.split(" ")[0]||"User","!"]}),i.jsxs("p",{children:["You have ",E?.length||0," active orders in your secure history."]})]}),i.jsx("div",{className:"accent-circle"}),i.jsx(zs,{size:80,color:"#C9A84C",opacity:.3})]}),i.jsxs(O8,{children:[i.jsxs(Vd,{children:[i.jsx("div",{className:"icon-box",children:i.jsx(xs,{size:24})}),i.jsxs("div",{className:"details",children:[i.jsx("div",{className:"label",children:"Total Orders"}),i.jsx("div",{className:"value",children:E?.length||0})]})]}),i.jsxs(Vd,{children:[i.jsx("div",{className:"icon-box",children:i.jsx(Je,{size:24})}),i.jsxs("div",{className:"details",children:[i.jsx("div",{className:"label",children:"Secure Tags"}),i.jsx("div",{className:"value",children:R?.length||0})]})]}),i.jsxs(Vd,{children:[i.jsx("div",{className:"icon-box",children:i.jsx(zs,{size:24})}),i.jsxs("div",{className:"details",children:[i.jsx("div",{className:"label",children:"Pending Delivery"}),i.jsx("div",{className:"value",children:E?.filter(N=>N.status==="PENDING")?.length||0})]})]})]}),i.jsxs(Qd,{children:[i.jsxs("h3",{children:[i.jsx(xs,{size:24,color:"#C9A84C"})," Manifest History"]}),!E||E.length===0?i.jsx("p",{style:{color:"#999",textAlign:"center",padding:"40px"},children:"You haven't placed any orders yet."}):i.jsx("div",{style:{overflowX:"auto"},children:i.jsxs(M8,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Order ID"}),i.jsx("th",{children:"Date"}),i.jsx("th",{children:"Items"}),i.jsx("th",{children:"Total Amount"}),i.jsx("th",{children:"Payment Status"}),i.jsx("th",{children:"Order Status"})]})}),i.jsx("tbody",{children:E.map(N=>i.jsxs("tr",{onClick:()=>g(N),children:[i.jsx("td",{style:{fontWeight:900,color:"#0b1a33",fontSize:"0.9rem"},children:N.orderNumber}),i.jsx("td",{style:{fontSize:"0.85rem",color:"#666"},children:new Date(N.createdAt).toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"})}),i.jsx("td",{style:{maxWidth:"250px"},children:i.jsx("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"0.9rem"},children:N.items.map($=>$.productName).join(", ")})}),i.jsxs("td",{style:{fontWeight:800},children:["₹",N.totalAmount]}),i.jsx("td",{children:i.jsx(as,{status:N.paymentStatus,children:N.paymentStatus})}),i.jsx("td",{children:i.jsx(as,{status:N.status==="DELIVERED"?"PAID":"UNPAID",children:N.status})})]},N.id))})]})})]})]}),p==="qrcodes"&&i.jsxs(i.Fragment,{children:[i.jsxs(Gd,{children:[i.jsxs("div",{className:"text",children:[i.jsx("h1",{children:"Secure QR Ecosystem"}),i.jsx("p",{children:"Manage and download your digital identity smart tags."})]}),i.jsx("div",{className:"accent-circle"}),i.jsx(sl,{size:80,color:"#C9A84C",opacity:.3})]}),i.jsxs(Qd,{children:[i.jsxs("h3",{children:[i.jsx(sl,{size:24,color:"#C9A84C"})," Digital Inventory"]}),!R||R.length===0?i.jsx("p",{style:{color:"#999",textAlign:"center",padding:"40px"},children:"No QR Tags available. Purchase a tag to see it here."}):i.jsx(D8,{children:R.map(N=>i.jsxs(H8,{children:[i.jsx("div",{className:"qr-placeholder",children:i.jsx(sl,{size:80,color:"#0b1a33"})}),i.jsx("h4",{children:N.customAssetType||N.assetType}),i.jsxs("p",{children:["Code: ",N.tagCode]}),i.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:[i.jsxs(Ue,{variant:"outline",style:{padding:"8px 15px",fontSize:"0.8rem"},onClick:()=>window.open(`/scan/${N.id}`,"_blank"),children:[i.jsx(Es,{size:14})," Preview"]}),i.jsxs(Ue,{variant:"primary",style:{padding:"8px 15px",fontSize:"0.8rem",background:"#0b1a33"},children:[i.jsx(Mf,{size:14})," Download"]})]})]},N.id))})]})]}),p==="profile"&&i.jsxs(i.Fragment,{children:[i.jsxs(Gd,{children:[i.jsxs("div",{className:"text",children:[i.jsx("h1",{children:"Profile Settings"}),i.jsx("p",{children:"Manage your account details and security."})]}),i.jsx(p1,{size:50,opacity:.2})]}),i.jsxs(Qd,{style:{maxWidth:"600px"},children:[i.jsxs("h3",{children:[i.jsx(En,{size:20,color:"#C9A84C"})," Personal Information"]}),i.jsxs("form",{onSubmit:D,children:[i.jsxs(ns,{children:[i.jsx("label",{children:"Full Name"}),i.jsx("input",{type:"text",value:y.name,onChange:N=>v({...y,name:N.target.value}),required:!0})]}),i.jsxs(ns,{children:[i.jsx("label",{children:"Phone Number"}),i.jsx("input",{type:"tel",value:y.phone,onChange:N=>v({...y,phone:N.target.value}),required:!0})]}),i.jsxs("h3",{style:{marginTop:"40px"},children:[i.jsx(Ta,{size:20,color:"#C9A84C"})," Update Password"]}),i.jsx("p",{style:{fontSize:"0.85rem",color:"#888",marginBottom:"20px"},children:"Leave blank if you don't want to change your password."}),i.jsxs(ns,{children:[i.jsx("label",{children:"Current Password"}),i.jsx("input",{type:"password",placeholder:"Enter current password",value:y.currentPassword,onChange:N=>v({...y,currentPassword:N.target.value})})]}),i.jsxs(ns,{children:[i.jsx("label",{children:"New Password"}),i.jsx("input",{type:"password",placeholder:"Enter new password",value:y.newPassword,onChange:N=>v({...y,newPassword:N.target.value})})]}),i.jsx(Ue,{type:"submit",variant:"primary",style:{width:"100%",marginTop:"20px",padding:"15px"},children:"Save Changes"})]})]})]})]}),m&&i.jsx(S8,{onClick:()=>g(null),children:i.jsxs(C8,{onClick:N=>N.stopPropagation(),children:[i.jsx(A8,{onClick:()=>g(null),children:i.jsx(h1,{size:20})}),i.jsx("h2",{children:"Order Details"}),i.jsxs(Vg,{children:[i.jsxs("div",{className:"detail-group",children:[i.jsx("label",{children:"Order Number"}),i.jsx("div",{children:m.orderNumber})]}),i.jsxs("div",{className:"detail-group",children:[i.jsx("label",{children:"Order Date"}),i.jsxs("div",{children:[new Date(m.createdAt).toLocaleDateString()," at ",new Date(m.createdAt).toLocaleTimeString()]})]}),i.jsxs("div",{className:"detail-group",children:[i.jsx("label",{children:"Payment Status"}),i.jsx("div",{children:i.jsx(as,{status:m.paymentStatus,children:m.paymentStatus})})]}),i.jsxs("div",{className:"detail-group",children:[i.jsx("label",{children:"Order Status"}),i.jsx("div",{children:i.jsx(as,{status:m.status==="DELIVERED"?"PAID":"UNPAID",children:m.status})})]})]}),i.jsx("h3",{style:{fontSize:"1.1rem",marginBottom:"15px",color:"#0b1a33"},children:"Shipping Information"}),i.jsxs(Vg,{children:[i.jsxs("div",{className:"detail-group",children:[i.jsx("label",{children:"Customer Name"}),i.jsx("div",{children:m.customerName})]}),i.jsxs("div",{className:"detail-group",children:[i.jsx("label",{children:"Phone"}),i.jsx("div",{children:m.customerPhone})]}),i.jsxs("div",{className:"detail-group",style:{gridColumn:"1 / -1"},children:[i.jsx("label",{children:"Address"}),i.jsx("div",{children:m.shippingAddress})]})]}),i.jsx("h3",{style:{fontSize:"1.1rem",marginBottom:"15px",color:"#0b1a33"},children:"Order Items"}),i.jsxs(E8,{children:[m.items.map((N,$)=>i.jsxs("div",{className:"item",children:[i.jsxs("div",{className:"name",children:[N.quantity,"x ",N.productName]}),i.jsxs("div",{className:"price",children:["₹",N.totalPrice]})]},$)),i.jsxs("div",{className:"item",style:{background:"#0b1a33",color:"white"},children:[i.jsx("div",{className:"name",style:{color:"white"},children:"Total Amount"}),i.jsxs("div",{className:"price",style:{color:"#C9A84C"},children:["₹",m.totalAmount]})]})]})]})})]})]})},U8=pt`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,L8=j.div`
  min-height: 100vh;
  background: #f4f6f8;
  font-family: 'Outfit', sans-serif;
  padding-bottom: 40px;
`,$8=j.div`
  background: #0B1A33;
  color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding-bottom: 60px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`,q8=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
`,Y8=j.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 6px 12px;
  border-radius: 12px;
  
  .icon { color: #10B981; }
  .text {
    font-size: 0.7rem;
    font-weight: 800;
    line-height: 1.2;
    color: white;
    text-align: left;
    span {
      display: block;
      color: #10B981;
    }
  }
`,G8=j.div`
  display: flex;
  background: white;
  border-radius: 20px;
  padding: 2px;
  button {
    background: transparent;
    border: none;
    padding: 6px 12px;
    font-size: 0.8rem;
    font-weight: 800;
    color: #0B1A33;
    border-radius: 18px;
    cursor: pointer;
    &.active {
      background: #0B1A33;
      color: white;
    }
  }
`,V8=j.div`
  position: relative;
  z-index: 2;
  
  img {
    height: 60px;
    margin-bottom: 15px;
  }
  
  h1 {
    font-size: 2.2rem;
    font-weight: 900;
    color: white;
    margin-bottom: 5px;
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: 1.2rem;
    color: #C9A84C;
    font-weight: 800;
    letter-spacing: 5px;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 15px;
  }
  
  .features {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  
  .asset-id {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    display: inline-block;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
  
  .protected {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.8rem;
    color: #10B981;
    font-weight: 600;
  }
`,Q8=j.div`
  background: white;
  border-radius: 24px;
  margin: -40px 15px 0;
  padding: 20px;
  position: relative;
  z-index: 3;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  animation: ${U8} 0.5s ease;
`,I8=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  
  .left {
    display: flex;
    align-items: center;
    gap: 15px;
    
    .avatar {
      width: 60px;
      height: 60px;
      background: #f0f0f0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      
      svg { color: #999; }
      
      .check {
        position: absolute;
        bottom: 0;
        right: 0;
        background: #10B981;
        color: white;
        border-radius: 50%;
        padding: 2px;
        border: 2px solid white;
      }
    }
    
    .info {
      h3 {
        font-size: 1.2rem;
        font-weight: 900;
        color: #0B1A33;
        margin-bottom: 2px;
      }
      .badges {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        color: #10B981;
        
        div {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      }
    }
  }
  
  .right-badge {
    background: #eef6ff;
    border: 1px solid #d0e3ff;
    padding: 8px 12px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    
    svg { color: #3b82f6; }
    span {
      font-size: 0.65rem;
      font-weight: 800;
      color: #3b82f6;
    }
  }
`,K8=j.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
`,Id=j.button`
  width: 100%;
  background: ${a=>a.bg||"#10B981"};
  color: white;
  border: none;
  padding: 16px 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  text-align: left;
  box-shadow: 0 4px 15px ${a=>a.shadow||"rgba(16, 185, 129, 0.2)"};
  transition: transform 0.2s;
  
  &:active { transform: scale(0.98); }
  
  .icon-bg {
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .content {
    flex: 1;
    h4 {
      font-size: 1rem;
      font-weight: 800;
      margin-bottom: 2px;
    }
    p {
      font-size: 0.75rem;
      opacity: 0.9;
    }
    .sub {
      font-size: 0.65rem;
      background: rgba(255,255,255,0.2);
      padding: 2px 8px;
      border-radius: 10px;
      display: inline-block;
      margin-top: 4px;
    }
  }
  
  .premium-badge {
    background: #C9A84C;
    color: #0B1A33;
    font-size: 0.65rem;
    font-weight: 900;
    padding: 4px 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`,Qg=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 5px;
  
  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    h3 {
      font-size: 0.9rem;
      font-weight: 800;
      color: #0B1A33;
    }
    svg { color: #ef4444; }
  }
  
  .expand {
    font-size: 0.75rem;
    color: #666;
    font-weight: 600;
  }
`,P8=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 15px;
`,is=j.div`
  background: white;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 15px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  
  .icon-wrapper {
    margin-bottom: 10px;
    svg { color: ${a=>a.color||"#ef4444"}; width: 28px; height: 28px; }
  }
  
  h4 {
    font-size: 0.8rem;
    font-weight: 900;
    color: ${a=>a.textColor||"#ef4444"};
    margin-bottom: 4px;
  }
  
  p {
    font-size: 0.7rem;
    color: #666;
    font-weight: 500;
  }
  
  .premium {
    background: #C9A84C;
    color: #0B1A33;
    font-size: 0.6rem;
    font-weight: 900;
    padding: 2px 6px;
    border-radius: 4px;
    display: inline-block;
    margin-top: 8px;
  }
`,F8=j.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  
  .left {
    display: flex;
    align-items: center;
    gap: 10px;
    svg { color: #8b5cf6; }
    span { font-size: 0.75rem; font-weight: 600; color: #333; }
  }
  
  .premium {
    background: #8b5cf6;
    color: white;
    font-size: 0.65rem;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`,W8=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
  position: relative;
  
  .bg-car {
    position: absolute;
    right: -20px;
    top: 0;
    opacity: 0.05;
    width: 150px;
    z-index: 0;
  }
  
  .item {
    position: relative;
    z-index: 1;
    .label {
      font-size: 0.65rem;
      font-weight: 600;
      color: #888;
      margin-bottom: 2px;
    }
    .value {
      font-size: 0.9rem;
      font-weight: 800;
      color: #0B1A33;
    }
  }
`,X8=j.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 15px;
  border-radius: 16px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 20px;
  
  svg { color: #16a34a; shrink: 0; mt: 2px; }
  
  .text {
    flex: 1;
    p {
      font-size: 0.75rem;
      color: #166534;
      font-weight: 600;
      line-height: 1.4;
    }
  }
  
  .link {
    font-size: 0.7rem;
    color: #2563eb;
    font-weight: 600;
    white-space: nowrap;
  }
`,Z8=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #0B1A33;
  margin: 0 -20px -20px;
  padding: 20px 10px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  
  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
    
    svg { color: rgba(255,255,255,0.5); width: 20px; height: 20px; }
    span {
      color: rgba(255,255,255,0.6);
      font-size: 0.5rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`,J8=j.div`
  text-align: center;
  padding: 20px;
  font-size: 0.65rem;
  color: #888;
  font-weight: 600;
  
  span { color: #0B1A33; }
`;function Ig(){const{id:a}=ir(),[l,c]=S.useState(!0),[s,d]=S.useState(null),[f,p]=S.useState("en");S.useEffect(()=>{(async()=>{try{const g=await et.get(`/products/verify/${a}`);d(g.data.product)}catch(g){console.error(g),d({name:"V-KAWACH IDENTITY",ownerName:"VIKAS KUMAR",ownerPhone:"918881384777",vehicleType:"Car",registrationNo:"VH-M****F1",model:"N/A",color:"N/A",year:"N/A"})}finally{c(!1)}})()},[a]);const x=m=>{const g=s?.ownerPhone||"918881384777";let y="";if(m==="call"){window.location.href=`tel:${g}`;return}else m==="whatsapp"?y="Hi, I scanned your V-Kawach QR tag.":m==="parking"?y="🚗 PARKING ALERT! Please move your vehicle. Someone is waiting.":m==="sos"&&(y="🚨 EMERGENCY ALERT! Vehicle has met with an accident.");navigator.geolocation?navigator.geolocation.getCurrentPosition(v=>{const k=`https://www.google.com/maps?q=${v.coords.latitude},${v.coords.longitude}`;y+=`
Location: ${k}`,window.open(`https://wa.me/${g}?text=${encodeURIComponent(y)}`,"_blank")},()=>{window.open(`https://wa.me/${g}?text=${encodeURIComponent(y)}`,"_blank")}):window.open(`https://wa.me/${g}?text=${encodeURIComponent(y)}`,"_blank")};return l?null:i.jsxs(L8,{children:[i.jsxs($8,{children:[i.jsxs(q8,{children:[i.jsxs(Y8,{children:[i.jsx(Je,{className:"icon",size:16}),i.jsxs("div",{className:"text",children:["QR SCAN",i.jsx("br",{}),i.jsx("span",{children:"VERIFIED"})]})]}),i.jsxs(G8,{children:[i.jsx("button",{className:f==="hi"?"active":"",onClick:()=>p("hi"),children:"HI"}),i.jsx("button",{className:f==="en"?"active":"",onClick:()=>p("en"),children:"EN"})]})]}),i.jsxs(V8,{children:[i.jsx("img",{src:"/new_logo.png",alt:"Logo"}),i.jsx("h1",{children:"V-KAWACH"}),i.jsx("h2",{children:"SECURITY"}),i.jsx("p",{className:"subtitle",children:"Smart Vehicle Security Identity"}),i.jsxs("div",{className:"features",children:[i.jsx("span",{children:"Parking"})," • ",i.jsx("span",{children:"Emergency"})," • ",i.jsx("span",{children:"Privacy"})," • ",i.jsx("span",{children:"Protection"})]}),i.jsxs("div",{className:"asset-id",children:["ASSET ID: ",a?.toUpperCase()||"VH-MUE3F1"]}),i.jsxs("div",{className:"protected",children:[i.jsx(gs,{size:14})," Protected by Tarkshya Security Network"]})]})]}),i.jsxs(Q8,{children:[i.jsxs(I8,{children:[i.jsxs("div",{className:"left",children:[i.jsxs("div",{className:"avatar",children:[i.jsx(En,{size:32}),i.jsx("div",{className:"check",children:i.jsx(gs,{size:10})})]}),i.jsxs("div",{className:"info",children:[i.jsx("h3",{children:s?.ownerName||"VIKAS KUMAR"}),i.jsxs("div",{className:"badges",children:[i.jsxs("div",{children:[i.jsx(gs,{size:12})," Verified Owner"]}),i.jsxs("div",{children:[i.jsx(Je,{size:12})," Vehicle Protected"]})]})]})]}),i.jsxs("div",{className:"right-badge",children:[i.jsx(Je,{size:20}),i.jsxs("span",{children:["VERIFIED",i.jsx("br",{}),"OWNER"]})]})]}),i.jsxs(K8,{children:[i.jsxs(Id,{bg:"#16a34a",shadow:"rgba(22, 163, 74, 0.3)",onClick:()=>x("call"),children:[i.jsx("div",{className:"icon-bg",children:i.jsx(Ys,{size:24})}),i.jsxs("div",{className:"content",children:[i.jsx("h4",{children:"CONTACT VEHICLE OWNER"}),i.jsx("p",{children:"Call securely (Number Masked)"}),i.jsx("span",{className:"sub",children:"Primary option for Parking & General Contact"})]}),i.jsx("div",{style:{paddingRight:"10px"},children:">"})]}),i.jsxs(Id,{bg:"#059669",shadow:"rgba(5, 150, 105, 0.3)",onClick:()=>x("whatsapp"),children:[i.jsx("div",{className:"icon-bg",children:i.jsx(Hw,{size:24})}),i.jsxs("div",{className:"content",children:[i.jsx("h4",{children:"CHAT ON WHATSAPP"}),i.jsx("p",{children:"Chat securely (Number Masked)"})]}),i.jsxs("div",{className:"premium-badge",children:[i.jsx(Je,{size:10})," PREMIUM"]}),i.jsx("div",{children:">"})]}),i.jsxs(Id,{bg:"#f97316",shadow:"rgba(249, 115, 22, 0.3)",onClick:()=>x("parking"),children:[i.jsx("div",{className:"icon-bg",children:i.jsx(Ij,{size:24})}),i.jsxs("div",{className:"content",children:[i.jsx("h4",{children:"VEHICLE BLOCKING THE WAY?"}),i.jsx("p",{children:"Send Parking Alert to Owner"})]}),i.jsx("div",{children:">"})]})]}),i.jsxs(Qg,{children:[i.jsxs("div",{className:"title",children:[i.jsx(Ts,{size:18}),i.jsx("h3",{children:"EMERGENCY OPTIONS"})]}),i.jsx("div",{className:"expand",children:"Tap to expand ▼"})]}),i.jsxs(P8,{children:[i.jsxs(is,{color:"#ef4444",textColor:"#ef4444",onClick:()=>x("sos"),children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(_w,{})}),i.jsx("h4",{children:"SOS EMERGENCY"}),i.jsx("p",{children:"Immediate Help"}),i.jsx("div",{style:{textAlign:"right",color:"#ccc"},children:">"})]}),i.jsxs(is,{color:"#3b82f6",textColor:"#1d4ed8",onClick:()=>x("sos"),children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(Nw,{})}),i.jsx("h4",{children:"SHARE ACCIDENT LOCATION"}),i.jsx("p",{children:"Share live location with family contacts"}),i.jsxs("span",{className:"premium",children:[i.jsx(Je,{size:8,style:{display:"inline",marginRight:"2px"}})," PREMIUM"]})]}),i.jsxs(is,{color:"#4f46e5",textColor:"#0B1A33",onClick:()=>window.location.href="tel:112",children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(Ts,{})}),i.jsx("h4",{children:"POLICE"}),i.jsxs("p",{children:["Call Police",i.jsx("br",{}),i.jsx("strong",{children:"112"})]})]}),i.jsxs(is,{color:"#ef4444",textColor:"#0B1A33",onClick:()=>window.location.href="tel:108",children:[i.jsx("div",{className:"icon-wrapper",children:i.jsx(ei,{})}),i.jsx("h4",{children:"AMBULANCE"}),i.jsxs("p",{children:["Call Ambulance",i.jsx("br",{}),i.jsx("strong",{children:"108"})]})]})]}),i.jsxs(F8,{children:[i.jsxs("div",{className:"left",children:[i.jsx(gl,{size:18}),i.jsx("span",{children:"Family will be notified in case of emergency."})]}),i.jsxs("div",{className:"premium",children:[i.jsx(Je,{size:10})," PREMIUM"]})]}),i.jsx(Qg,{children:i.jsxs("div",{className:"title",children:[i.jsx(ml,{size:18,color:"#0B1A33"}),i.jsx("h3",{children:"VEHICLE DETAILS"})]})}),i.jsxs(W8,{children:[i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Vehicle Type"}),i.jsx("div",{className:"value",children:s?.vehicleType||"Car"})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Registration No."}),i.jsx("div",{className:"value",children:s?.registrationNo||"VH-M****F1"})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Color"}),i.jsx("div",{className:"value",children:s?.color||"N/A"})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Registration State"}),i.jsx("div",{className:"value",children:s?.registrationState||"N/A"})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Model"}),i.jsx("div",{className:"value",children:s?.model||"N/A"})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Year"}),i.jsx("div",{className:"value",children:s?.year||"N/A"})]})]}),i.jsxs(X8,{children:[i.jsx(Ta,{size:20}),i.jsx("div",{className:"text",children:i.jsxs("p",{children:["Your personal details are protected.",i.jsx("br",{}),"Owner will see only masked contact details."]})}),i.jsx("div",{className:"link",children:"Learn more"})]}),i.jsxs(Z8,{children:[i.jsxs("div",{className:"stat",children:[i.jsx(Je,{}),i.jsxs("span",{children:["End-To-End",i.jsx("br",{}),"Encrypted"]})]}),i.jsxs("div",{className:"stat",children:[i.jsx(Ta,{}),i.jsxs("span",{children:["Privacy",i.jsx("br",{}),"Protected"]})]}),i.jsxs("div",{className:"stat",children:[i.jsx(gl,{}),i.jsxs("span",{children:["Secure",i.jsx("br",{}),"Network"]})]}),i.jsxs("div",{className:"stat",children:[i.jsx(ei,{}),i.jsxs("span",{children:["Managed By",i.jsx("br",{}),"Tarkshya Protocol"]})]})]})]}),i.jsxs(J8,{children:[i.jsx(Je,{size:12,style:{display:"inline",marginRight:"4px"}}),"© 2024 ",i.jsx("span",{children:"V-Kawach"})," | Powered by Tarkshya Solution"]})]})}const A1=pt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,E1=pt`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0); }
`,eC=pt`
  0% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(201, 168, 76, 0); }
  100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }
`,tC=j.div`
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
    animation: ${E1} 20s linear infinite;
    pointer-events: none;
  }
`,nC=j.div`
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
  animation: ${E1} 6s ease-in-out infinite, ${eC} 3s infinite;
  transform: rotate(45deg);

  > * {
    transform: rotate(-45deg);
  }
`,aC=j.h1`
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 20px;
  line-height: 1.1;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${A1} 0.8s ease-out;

  span {
    background: linear-gradient(to right, #C9A84C, #F2D06B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) { font-size: 3rem; }
`,iC=j.p`
  max-width: 700px;
  margin: 20px auto 0;
  color: rgba(255,255,255,0.8);
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 400;
  animation: ${A1} 1s ease-out 0.2s both;
`,rC=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  align-items: flex-start;
  @media (min-width: 1024px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`,rs=j.div`
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
`,ls=j.div`
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
`,Kd=j.div`
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
`,lC=j.div`
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
`,oC=j.div`
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
`,sC=j.div`
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
`,cC=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 10px 0;
`,uC=j.span`
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
`,dC=j.div`
  h4 {
    margin: 10px 0;
    font-size: 1.1rem;
    font-weight: 800;
    color: #000;
    text-transform: uppercase;
  }
`,fC=j.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  .current { font-size: 1.5rem; font-weight: 900; color: #B51B2E; }
  .old { font-size: 0.9rem; color: #999; text-decoration: line-through; }
`,pC=j.div`
  color: #27ae60;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 15px;
`,hC=j.div`
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
`,os=j.div`
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
`,mC=j.div`
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
`,gC=j.div`
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
`,xC=j.div`
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
`,yC=j.div`
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
`,bC=a=>({ShieldAlert:i.jsx(Ts,{size:50}),AlertTriangle:i.jsx(j3,{size:50}),Users:i.jsx(Ns,{size:50}),Scan:i.jsx(ks,{size:50}),Zap:i.jsx(wl,{size:50}),Bell:i.jsx($s,{size:50}),ShieldCheck:i.jsx(kt,{size:50}),Activity:i.jsx(ei,{size:50}),Smartphone:i.jsx(Gs,{size:50}),Lock:i.jsx(Ta,{size:50})})[a]||i.jsx(Je,{size:50}),vC=()=>{const{language:a}=Cl(),l=Bf[a].categoryDetails,{id:c}=ir(),[s,d]=S.useState(null),[f,p]=S.useState(!0),x=window.location.hostname==="localhost"?"http://localhost:5001":"",m={prevention:tt.useRef(null),emergency:tt.useRef(null),tracking:tt.useRef(null),products:tt.useRef(null)},g=(v,k)=>{v.current&&v.current.scrollBy({left:k==="next"?400:-400,behavior:"smooth"})};if(S.useEffect(()=>{(async()=>{try{const D=(await et.get("/categories")).data?.categories?.find(A=>A.id===c);if(D&&D.isActive!==!1){const A=(R,E)=>{if(!R)return E;let N=R;try{for(;typeof N=="string";)N=JSON.parse(N);return Array.isArray(N)?N:E}catch{return E}};D.features=A(D.features,[]),D.preventionCards=A(D.preventionCards,[]),D.emergencyCards=A(D.emergencyCards,[]),D.trackingCards=A(D.trackingCards,[]),d(D)}}catch(k){console.error("Failed to fetch category details:",k)}finally{p(!1)}})()},[c]),f)return i.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0b1a33",color:"white"},children:i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx(Xj,{size:50,className:"animate-spin",color:"#C9A84C"}),i.jsx("p",{style:{marginTop:"25px",fontWeight:800,letterSpacing:"3px",fontSize:"1.2rem"},children:l.initializing})]})});if(!s)return i.jsx("div",{style:{padding:"150px 20px",textAlign:"center",fontSize:"1.5rem",fontWeight:800,color:"#0b1a33"},children:l.notFound});const y=v=>{if(!v)return"Category Details";const k=v.split(" ");return k.length===1?v:i.jsxs(i.Fragment,{children:[k.slice(0,-1).join(" ")," ",i.jsx("span",{children:k[k.length-1]})]})};return i.jsxs("div",{style:{background:"#fcfcfc"},children:[i.jsxs(tC,{children:[i.jsx(nC,{children:bC(s.icon)}),i.jsx(aC,{children:y(s.name)}),i.jsx(iC,{children:a==="hi"&&s.description_hi||s.description})]}),s.preventionHeading&&i.jsxs(Fe,{bg:"transparent",children:[i.jsxs(os,{children:[i.jsx("h2",{children:y(a==="hi"&&s.preventionHeading_hi||s.preventionHeading)}),i.jsx("p",{children:a==="hi"&&s.preventionText_hi||s.preventionText})]}),i.jsxs(ls,{children:[i.jsx("button",{className:"nav-btn prev",onClick:()=>g(m.prevention,"prev"),children:i.jsx(Cn,{})}),i.jsx(rs,{ref:m.prevention,children:s.preventionCards.map((v,k)=>i.jsxs(Kd,{children:[i.jsx("div",{className:"img-wrapper",children:i.jsx("img",{src:v.image?`${x}${v.image}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:v.title})}),i.jsxs("div",{className:"content",children:[i.jsx("h4",{children:a==="hi"&&v.title_hi||v.title}),i.jsx("p",{children:a==="hi"&&v.text_hi||v.text})]})]},k))}),i.jsx("button",{className:"nav-btn next",onClick:()=>g(m.prevention,"next"),children:i.jsx(An,{})})]})]}),s.emergencyHeading&&i.jsxs(Fe,{bg:"#ffffff",children:[i.jsxs(os,{children:[i.jsx("h2",{children:y(a==="hi"&&s.emergencyHeading_hi||s.emergencyHeading)}),i.jsx("p",{children:a==="hi"&&s.emergencyText_hi||s.emergencyText})]}),i.jsxs(ls,{children:[i.jsx("button",{className:"nav-btn prev",onClick:()=>g(m.emergency,"prev"),children:i.jsx(Cn,{})}),i.jsx(rs,{ref:m.emergency,children:s.emergencyCards.map((v,k)=>i.jsxs(Kd,{children:[i.jsx("div",{className:"img-wrapper",children:i.jsx("img",{src:v.image?`${x}${v.image}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:v.title})}),i.jsxs("div",{className:"content",children:[i.jsx("h4",{children:a==="hi"&&v.title_hi||v.title}),i.jsx("p",{children:a==="hi"&&v.text_hi||v.text})]})]},k))}),i.jsx("button",{className:"nav-btn next",onClick:()=>g(m.emergency,"next"),children:i.jsx(An,{})})]})]}),(s.howItWorksHeading||s.howItWorksText)&&i.jsx(Fe,{bg:"#f8f9fa",children:i.jsxs(mC,{children:[i.jsxs("div",{className:"video-box",children:[i.jsx("img",{src:"/assets/car_qr_tag_mockup_1776107740073.png",alt:"How it works"}),i.jsx("div",{className:"play-btn",children:i.jsx(Kw,{size:40,fill:"white"})})]}),i.jsxs("div",{className:"content-box",children:[i.jsx("h3",{children:a==="hi"&&s.howItWorksHeading_hi||s.howItWorksHeading}),i.jsx("p",{children:a==="hi"&&s.howItWorksText_hi||s.howItWorksText}),i.jsx(Ue,{as:Se,to:"/smart-qr",style:{background:"#B51B2E",borderColor:"#B51B2E",color:"#ffffff"},children:"DISCOVER MORE"})]})]})}),s.trackingHeading&&i.jsxs(Fe,{bg:"#fdfdfd",children:[i.jsxs(os,{children:[i.jsx("h2",{children:y(a==="hi"&&s.trackingHeading_hi||s.trackingHeading)}),i.jsx("p",{children:a==="hi"&&s.trackingText_hi||s.trackingText})]}),i.jsxs(ls,{children:[i.jsx("button",{className:"nav-btn prev",onClick:()=>g(m.tracking,"prev"),children:i.jsx(Cn,{})}),i.jsx(rs,{ref:m.tracking,children:s.trackingCards.map((v,k)=>i.jsxs(Kd,{children:[i.jsx("div",{className:"img-wrapper",children:i.jsx("img",{src:v.image?`${x}${v.image}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:v.title})}),i.jsxs("div",{className:"content",children:[i.jsx("h4",{children:a==="hi"&&v.title_hi||v.title}),i.jsx("p",{children:a==="hi"&&v.text_hi||v.text})]})]},k))}),i.jsx("button",{className:"nav-btn next",onClick:()=>g(m.tracking,"next"),children:i.jsx(An,{})})]})]}),s.products&&s.products.length>0&&i.jsxs(Fe,{bg:"#fdfdfd",children:[i.jsxs(os,{children:[i.jsx("h2",{children:l.relatedProducts}),i.jsx("p",{children:l.productsDesc})]}),i.jsxs(ls,{children:[i.jsx("button",{className:"nav-btn prev",onClick:()=>g(m.products,"prev"),children:i.jsx(Cn,{})}),i.jsx(gC,{ref:m.products,children:s.products.map(v=>{const k=(E,N)=>{if(!E)return N;let $=E;try{for(;typeof $=="string";)$=JSON.parse($);return Array.isArray($)?$:N}catch{return N}},D=k(v.photos,[]),A=k(v.dynamicData,[]),R=D[0]?D[0].startsWith("http")?D[0]:`${x}${D[0]}`:"/assets/car_qr_tag_mockup_1776107740073.png";return i.jsxs(lC,{children:[i.jsxs(oC,{children:[i.jsx("img",{src:R,alt:v.name}),i.jsx(sC,{children:"Features"})]}),i.jsx(cC,{children:A.slice(0,4).map((E,N)=>i.jsx(uC,{title:E.value,children:E.label},N))}),i.jsx(dC,{children:i.jsx("h4",{children:a==="hi"&&v.name_hi||v.name})}),i.jsxs(fC,{children:[i.jsxs("span",{className:"current",children:["₹",v.mrp]}),i.jsxs("span",{className:"old",children:["₹",Math.round(v.mrp*1.5)]})]}),i.jsx(pC,{children:"40% OFF* (Pack of 3)"}),i.jsxs(hC,{children:[i.jsx(Se,{to:`/product/${v.id}`,className:"view-btn",children:"View Details"}),i.jsx("button",{className:"cart-btn",title:"Add to Cart",children:i.jsx(jl,{size:20})})]})]},v.id)})}),i.jsx("button",{className:"nav-btn next",onClick:()=>g(m.products,"next"),children:i.jsx(An,{})})]})]}),i.jsx(Fe,{bg:"#ffffff",children:i.jsxs(rC,{children:[i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"25px"},children:[i.jsx("div",{style:{width:"40px",height:"3px",background:"#C9A84C",borderRadius:"2px"}}),i.jsx("span",{style:{fontSize:"0.9rem",fontWeight:900,color:"#C9A84C",letterSpacing:"0.2em",textTransform:"uppercase"},children:l.precisionSecurity})]}),i.jsxs("h2",{style:{fontSize:"3.2rem",fontWeight:900,color:"#0b1a33",marginBottom:"40px",letterSpacing:"-1.5px",lineHeight:1.1},children:[l.advancedProtocols.split(" ")[0]," ",i.jsx("span",{style:{color:"#C9A84C"},children:l.advancedProtocols.split(" ").slice(1).join(" ")})]}),i.jsx(rs,{style:{marginTop:0},children:s.features.map((v,k)=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",background:"#f8f9fa",padding:"20px",borderRadius:"16px"},children:[i.jsx("div",{style:{color:"#C9A84C"},children:i.jsx(kt,{size:24})}),i.jsx("h4",{style:{margin:0,fontWeight:700,color:"#0b1a33",fontSize:"1rem"},children:a==="hi"?v.name_hi||v.name||v:v.name||v})]},k))}),s.features.length===0&&i.jsx("p",{style:{color:"#777",padding:"30px",background:"#f8f9fa",borderRadius:"16px",borderLeft:"4px solid #C9A84C"},children:l.standardProtocols}),i.jsxs(xC,{children:[i.jsxs("h3",{children:[i.jsx(Ls,{size:28})," ",l.strategicProtection]}),i.jsx("p",{children:a==="hi"&&s.benefits_hi||s.benefits})]})]}),i.jsxs(yC,{children:[i.jsxs("div",{className:"image-container",children:[i.jsx("img",{src:s.heroImage?`${x}${s.heroImage}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:s.name}),i.jsxs("div",{style:{position:"absolute",bottom:"30px",right:"-30px",background:"white",padding:"20px 30px",borderRadius:"20px",boxShadow:"0 20px 40px rgba(0,0,0,0.1)",display:"flex",alignItems:"center",gap:"15px"},children:[i.jsx("div",{style:{color:"#27ae60",background:"#eafaf1",padding:"10px",borderRadius:"12px"},children:i.jsx(Vj,{size:28})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"1rem",fontWeight:900,color:"#0b1a33"},children:l.verifiedSecurity}),i.jsx("div",{style:{fontSize:"0.7rem",color:"#888",fontWeight:800,marginTop:"2px"},children:l.certifiedHardware})]})]})]}),i.jsxs("div",{className:"stats",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"value",children:"99.9%"}),i.jsx("div",{className:"label",children:l.stats.scanRate})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"value",children:"<2s"}),i.jsx("div",{className:"label",children:l.stats.alertSpeed})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"value",children:"AES-256"}),i.jsx("div",{className:"label",children:l.stats.encryption})]})]})]})]})})]})},z1=pt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,jC=pt`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,wC=j.div`
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
    animation: ${jC} 20s linear infinite;
    pointer-events: none;
  }
`,SC=j.div`
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
`,CC=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: start;
  position: relative;
  z-index: 10;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`,AC=j.div`
  animation: ${z1} 0.8s ease-out;

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
`,EC=j.div`
  animation: ${z1} 0.8s ease-out 0.2s both;

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
`,zC=j.div`
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
`,kC=j.div`
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
`,TC=j.div`
  background: #fcfcfc;
  padding: 80px 0;
`,NC=j.div`
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
`,RC=j.div`
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
`,_C=()=>{const{language:a}=Cl(),l=Bf[a].productDetails,{id:c}=ir(),{addToCart:s}=Sl(),[d,f]=S.useState("features"),[p,x]=S.useState(null),[m,g]=S.useState(!0),[y,v]=S.useState(""),[k,D]=S.useState(0),A=()=>{if(!localStorage.getItem("admin_token")){Ie.error("Please login to add items to your cart.",{icon:"🔒",style:{borderRadius:"100px",background:"#0b1a33",color:"#fff"}}),window.location.href="/login?redirect=/product/"+c;return}p&&(s(p),Ie.success(a==="hi"?`${a==="hi"&&p.name_hi||p.name} कार्ट में जोड़ा गया!`:`${p.name} added to cart!`,{icon:"🛒",style:{borderRadius:"100px",background:"#0b1a33",color:"#fff"}}))};if(S.useEffect(()=>{v(window.location.hostname==="localhost"?"http://localhost:5001":""),(async()=>{try{const $=(await et.get(`/products/${c}`)).data?.product;if($){const K=(P,ee)=>{if(!P)return ee;let J=P;try{for(;typeof J=="string";)J=JSON.parse(J);return Array.isArray(J)?J:ee}catch{return ee}};$.photos=K($.photos,[]),$.dynamicData=K($.dynamicData,[]),x($)}}catch(N){console.error("Failed to fetch product details:",N)}finally{g(!1)}})()},[c]),m)return i.jsx("div",{style:{height:"80vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0b1a33",color:"white"},children:i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx(ei,{size:50,className:"animate-pulse",color:"#C9A84C"}),i.jsx("p",{style:{marginTop:"25px",fontWeight:800,letterSpacing:"3px",fontSize:"1.2rem",textTransform:"uppercase"},children:l.initializing})]})});if(!p)return i.jsx("div",{style:{padding:"150px 20px",textAlign:"center",fontSize:"1.5rem",fontWeight:800,color:"#0b1a33"},children:l.notFound});const R=()=>"https://img.icons8.com/fluency/400/security-checked.png";return i.jsxs(i.Fragment,{children:[i.jsx(wC,{children:i.jsxs(Fe,{bg:"transparent",children:[i.jsxs(SC,{children:[i.jsx(Se,{to:"/",children:"Ecosystem"})," / ",i.jsx(Se,{to:"/products",children:"Hardware"})," / ",i.jsx("span",{style:{color:"#C9A84C"},children:a==="hi"&&p.name_hi||p.name})]}),i.jsxs(CC,{children:[i.jsxs(AC,{children:[i.jsx("div",{className:"main-img-wrapper",children:(()=>{let E=p.photos[k]?p.photos[k].startsWith("http")?p.photos[k]:`${y}${p.photos[k]}`:R();return E.includes("images.icons8.com")&&(E=E.replace("images.icons8.com","img.icons8.com").replace("/bubbles/","/fluency/")),i.jsx("img",{src:E,alt:p.name,className:"main-img"})})()}),i.jsx("div",{className:"thumbs",children:p.photos.filter(E=>E).length>0?p.photos.filter(E=>E).map((E,N)=>{let $=E.startsWith("http")?E:`${y}${E}`;return $.includes("images.icons8.com")&&($=$.replace("images.icons8.com","img.icons8.com").replace("/bubbles/","/fluency/")),i.jsx("img",{src:$,alt:"thumb",onClick:()=>D(N),style:{borderColor:k===N?"#C9A84C":"transparent"}},N)}):i.jsx("img",{src:R(),alt:"thumb fallback"})})]}),i.jsxs(EC,{children:[i.jsx("div",{className:"badge",children:l.badge}),i.jsx("h1",{children:a==="hi"&&p.name_hi||p.name}),i.jsxs("div",{className:"reviews",children:[i.jsxs("div",{className:"stars",children:[i.jsx(al,{fill:"#C9A84C",size:16}),i.jsx(al,{fill:"#C9A84C",size:16}),i.jsx(al,{fill:"#C9A84C",size:16}),i.jsx(al,{fill:"#C9A84C",size:16}),i.jsx(al,{fill:"#C9A84C",size:16})]}),i.jsx("span",{children:"4.9/5 (128+ Verifications)"})]}),i.jsxs("div",{className:"price-card",children:[i.jsxs(zC,{children:[i.jsxs("span",{className:"current",children:["₹",p.mrp||0]}),i.jsxs("span",{className:"old",children:["₹",Math.round((p.mrp||0)*1.5)]}),i.jsx("span",{className:"discount",children:a==="hi"?"विशेष ऑफर":"SPECIAL OFFER"})]}),i.jsxs(kC,{children:[p.dynamicData.slice(0,4).map((E,N)=>i.jsxs("div",{className:"spec-item",children:[i.jsx(kt,{size:24,className:"icon"}),i.jsxs("div",{className:"text",children:[i.jsx("span",{className:"label",children:a==="hi"&&E.label_hi||E.label}),i.jsx("span",{className:"value",children:a==="hi"&&E.value_hi||E.value})]})]},N)),p.dynamicData.length===0&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"spec-item",children:[i.jsx(kt,{size:24,className:"icon"}),i.jsxs("div",{className:"text",children:[i.jsx("span",{className:"label",children:l.encryption}),i.jsx("span",{className:"value",children:"AES-256"})]})]}),i.jsxs("div",{className:"spec-item",children:[i.jsx(ei,{size:24,className:"icon"}),i.jsxs("div",{className:"text",children:[i.jsx("span",{className:"label",children:l.delivery}),i.jsx("span",{className:"value",children:"24h"})]})]})]})]}),i.jsxs(Ue,{size:"large",style:{width:"100%",height:"60px",fontSize:"1.2rem",borderRadius:"16px",boxShadow:"0 20px 40px rgba(201, 168, 76, 0.3)"},onClick:A,children:[l.addToCart," ",i.jsx(jl,{size:24,style:{marginLeft:"12px"}})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",color:"rgba(255,255,255,0.5)",fontSize:"0.9rem",fontWeight:600},children:[i.jsx(Je,{size:18})," Verified V-KAWACH Security Hardware. Ships in 24 Hours."]})]})]})]})}),i.jsx(TC,{children:i.jsx(Fe,{bg:"transparent",children:i.jsxs(NC,{children:[i.jsxs("div",{className:"tabs",children:[i.jsx("button",{className:d==="features"?"active":"",onClick:()=>f("features"),children:l.keyFeatures}),i.jsx("button",{className:d==="description"?"active":"",onClick:()=>f("description"),children:l.description})]}),d==="description"&&i.jsxs("div",{style:{background:"white",padding:"50px",borderRadius:"24px",boxShadow:"0 20px 40px rgba(0,0,0,0.02)",border:"1px solid rgba(0,0,0,0.03)"},children:[i.jsx("h3",{style:{fontSize:"1.8rem",color:"#0b1a33",fontWeight:900,marginBottom:"20px"},children:"Ecosystem Integration"}),i.jsx("p",{style:{lineHeight:1.8,color:"#555",fontSize:"1.15rem"},children:p.description||"This advanced V-KAWACH security module integrates seamlessly into your digital ecosystem. Designed with military-grade precision, it provides instant verification and tracking capabilities to ensure maximum safety for your assets and loved ones."}),i.jsxs("div",{style:{marginTop:"30px",display:"flex",gap:"20px",flexWrap:"wrap"},children:[i.jsxs("div",{style:{background:"#f8f9fa",padding:"15px 25px",borderRadius:"12px",fontWeight:700,color:"#0b1a33"},children:[i.jsx(Ls,{size:18,style:{display:"inline",marginRight:"10px",color:"#C9A84C"}})," ISO Certified"]}),i.jsxs("div",{style:{background:"#f8f9fa",padding:"15px 25px",borderRadius:"12px",fontWeight:700,color:"#0b1a33"},children:[i.jsx(Gs,{size:18,style:{display:"inline",marginRight:"10px",color:"#C9A84C"}})," App Compatible"]})]})]}),d==="features"&&i.jsxs(RC,{children:[p.dynamicData.map((E,N)=>i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"icon-box",children:i.jsx(wl,{size:24})}),i.jsxs("div",{children:[i.jsx("h4",{children:a==="hi"&&E.label_hi||E.label}),i.jsx("p",{children:a==="hi"&&E.value_hi||E.value})]})]},N)),p.dynamicData.length===0&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"icon-box",children:i.jsx(kt,{size:24})}),i.jsxs("div",{children:[i.jsx("h4",{children:"Smart QR Protocol"}),i.jsx("p",{children:"High-quality smart sticker with instant scan detection."})]})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"icon-box",children:i.jsx(Ta,{size:24})}),i.jsxs("div",{children:[i.jsx("h4",{children:"Privacy Masking"}),i.jsx("p",{children:"Call and message masking to protect your personal details."})]})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"icon-box",children:i.jsx(ei,{size:24})}),i.jsxs("div",{children:[i.jsx("h4",{children:"Live Notifications"}),i.jsx("p",{children:"Real-time alerts directly to your mobile ecosystem."})]})]})]})]})]})})})]})};function OC(){const{pathname:a}=kn();return S.useEffect(()=>{window.scrollTo(0,0)},[a]),null}const $f=pt`
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
`,MC=j.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  padding: 180px 0 100px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: ${a=>a.$bgImage?`url(${a.$bgImage})`:"none"};
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    filter: blur(4px);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0; height: 120px;
    background: linear-gradient(to top, #fcfcfc 0%, transparent 100%);
    z-index: 2;
  }
`,DC=j.div`
  position: relative;
  z-index: 3;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`,HC=j(Se)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #C9A84C;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateX(-5px);
  }
`,BC=j.h1`
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: -1.5px;
  margin-bottom: 25px;
  line-height: 1.15;
  animation: ${$f} 0.8s ease-out;

  .dim {
    display: block;
    font-size: 1.25rem;
    font-weight: 800;
    color: #C9A84C;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 15px;
  }

  .highlight {
    background: linear-gradient(to right, #ffffff, #f2d06b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    .dim { font-size: 1rem; }
  }
`,UC=j.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 30px;
  animation: ${$f} 1s ease-out 0.2s both;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  svg {
    color: #C9A84C;
  }
`,LC=j.div`
  max-width: 850px;
  margin: -50px auto 100px;
  position: relative;
  z-index: 10;
  padding: 0 20px;
`,$C=j.div`
  background: white;
  border-radius: 32px;
  padding: 50px 60px;
  box-shadow: 0 30px 60px rgba(11, 26, 51, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  animation: ${$f} 1s ease-out 0.3s both;

  @media (max-width: 768px) {
    padding: 35px 25px;
    border-radius: 24px;
  }
`,qC=j.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: #334155;
  font-weight: 500;
  margin-bottom: 40px;
  border-left: 4px solid #C9A84C;
  padding-left: 20px;
`,YC=j.div`
  font-size: 1.1rem;
  line-height: 1.85;
  color: #334155;

  p {
    margin-bottom: 25px;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 900;
    color: #0b1a33;
    margin: 45px 0 20px;
    letter-spacing: -0.5px;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #0b1a33;
    margin: 35px 0 15px;
  }

  ul, ol {
    margin-bottom: 25px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  strong {
    color: #0b1a33;
    font-weight: 700;
  }

  img {
    max-width: 100%;
    border-radius: 16px;
    margin: 30px 0;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  }
`,GC=j.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  color: white;
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(11, 26, 51, 0.15);

  h3 {
    font-size: 1.6rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: #C9A84C;
  }

  p {
    opacity: 0.8;
    font-size: 0.95rem;
    margin-bottom: 25px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`,VC=()=>{const{id:a}=ir(),{language:l}=Cl(),[c,s]=S.useState(null),[d,f]=S.useState(!0),p=window.location.hostname==="localhost"?"http://localhost:5001":"";if(S.useEffect(()=>{(async()=>{try{const v=(await et.get("/public/settings")).data.settings?.heroBannersList;if(v){const D=JSON.parse(v).find(A=>A.id===a);s(D)}}catch(y){console.error("Failed to load banner details:",y)}finally{f(!1)}})()},[a]),d)return i.jsxs("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0b1a33",color:"white"},children:[i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #C9A84C",borderTopColor:"transparent",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 20px"}}),i.jsx("p",{style:{fontWeight:800,letterSpacing:"2px",textTransform:"uppercase"},children:"Loading Article..."})]}),i.jsx("style",{children:`
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]});if(!c)return i.jsxs("div",{style:{padding:"180px 20px",textAlign:"center",minHeight:"60vh"},children:[i.jsx("h2",{style:{fontSize:"2rem",fontWeight:900,color:"#0b1a33"},children:"Article Not Found"}),i.jsx("p",{style:{color:"#666",marginTop:"10px"},children:"The requested article does not exist or has been removed."}),i.jsx(Ue,{as:Se,to:"/",variant:"primary",style:{marginTop:"30px"},children:"Back to Home"})]});const x=c.imageUrl?c.imageUrl.startsWith("http")?c.imageUrl:`${p}${c.imageUrl}`:null;return i.jsxs("div",{style:{background:"#fcfcfc",minHeight:"100vh"},children:[i.jsx(MC,{$bgImage:x,children:i.jsxs(DC,{children:[i.jsxs(HC,{to:"/",children:[i.jsx(Of,{size:16})," Back to Home"]}),i.jsxs(BC,{children:[i.jsx("span",{className:"dim",children:c.taglineDim}),i.jsx("span",{className:"highlight",children:c.taglineHighlight})]}),i.jsxs(UC,{children:[i.jsxs("span",{children:[i.jsx(En,{size:16})," Tarkshya Security Expert"]}),i.jsxs("span",{children:[i.jsx(Oj,{size:16})," May 25, 2026"]}),i.jsxs("span",{children:[i.jsx(s1,{size:16})," 4 min read"]}),i.jsxs("span",{children:[i.jsx(kt,{size:16})," Verified Protocol"]})]})]})}),i.jsx(LC,{children:i.jsxs($C,{children:[i.jsx(qC,{children:c.subtext}),i.jsx(YC,{dangerouslySetInnerHTML:{__html:c.blogContent||`
    <h2>The Digital Security Revolution</h2>
    <p>In today's fast-paced world, security and privacy are no longer luxuries — they are basic necessities. Traditional security mechanisms, like printing phone numbers on car windshields or pet collars, carry high privacy risks, expose personal contact information to unwanted calls, and fail to provide real-time updates.</p>
    
    <p><strong>V-KAWACH</strong> offers a revolutionary next-generation Smart QR Safety system. Designed by <strong>Tarkshya Solution</strong>, this ecosystem integrates smart hardware tags with cloud communication to secure your assets, pets, and family members.</p>
    
    <h2>How V-KAWACH Protects Your Privacy</h2>
    <p>At the core of the V-KAWACH security protocol is <strong>Call Masking Technology</strong>. When someone scans your QR sticker (e.g. on a wrongly parked vehicle), they can call you instantly without ever seeing your actual phone number. The call is bridged through our secure private telephony servers.</p>
    
    <h3>Key Benefits of the V-KAWACH Protocol:</h3>
    <ul>
      <li><strong>100% Privacy Protection:</strong> Hides your identity and mobile number.</li>
      <li><strong>No App Needed:</strong> The finder can scan and connect directly from any web browser.</li>
      <li><strong>Instant Notifications:</strong> Receive WhatsApp, SMS, and email alerts immediately when scanned.</li>
      <li><strong>Emergency Helplines:</strong> Embedded dialers for Police (100) and Ambulance (108) on the landing page.</li>
      <li><strong>Live Location Sharing:</strong> Tapping a button lets the finder share their GPS location via WhatsApp.</li>
    </ul>

    <h2>Universally Compatible Safety Ecosystems</h2>
    <p>Our safety IDs are tailored for every critical asset in your household:</p>
    <p><strong>Vehicle Safety Stickers:</strong> Perfect for crowded parking areas and highway emergencies. Avoid roadside conflicts by keeping communication anonymous.</p>
    <p><strong>Smart Pet Tags:</strong> Ensure your lost pets return home safely. Finders can scan the collar tag, view pet details, and contact you instantly.</p>
    <p><strong>Kid's & Elderly Safety Cards:</strong> Provide security cards for school children and elderly parents to ensure prompt help during unexpected emergencies.</p>
  `}}),i.jsxs(GC,{children:[i.jsx("h3",{children:"Get Your V-KAWACH Safety ID Today"}),i.jsx("p",{children:"Protect your family, vehicles, and high-value assets with India's most advanced privacy-first security network."}),i.jsx(Ue,{as:Se,to:"/smart-qr",variant:"primary",style:{background:"#C9A84C",color:"#0b1a33",border:"none",padding:"15px 40px"},children:"BROWSE PRODUCTS"})]})]})})]})},QC=j.div`
  padding: 120px 20px 80px;
  max-width: 900px;
  margin: 0 auto;
  min-height: 80vh;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,IC=j(Se)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 40px;
  padding: 10px 20px;
  background: white;
  border-radius: 100px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  
  &:hover {
    color: #C9A84C;
    transform: translateX(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  }
`,KC=j.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  .icon-circle {
    width: 80px;
    height: 80px;
    background: #0b1a33;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C9A84C;
    box-shadow: 0 10px 25px rgba(11, 26, 51, 0.2);
    flex-shrink: 0;
  }

  h1 {
    font-size: 3.5rem;
    color: #0b1a33;
    margin: 0;
    line-height: 1.1;
    font-weight: 900;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
`,PC=j.div`
  background: white;
  padding: 50px;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.04);
  border: 1px solid #f1f5f9;
  
  @media (max-width: 768px) {
    padding: 30px;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .highlight {
    color: #0b1a33;
    font-weight: 700;
  }
`,FC={"instant-call-masking":{title:"Instant Call Masking",icon:i.jsx(Df,{size:40,strokeWidth:1.5}),desc:"Protect your identity with our instant call masking technology. When someone scans your QR code, they can call you without ever seeing your real phone number. This ensures 100% privacy while maintaining perfect communication."},"qr-security":{title:"Advanced QR Security",icon:i.jsx(ks,{size:40,strokeWidth:1.5}),desc:"Our QR codes are backed by military-grade encryption and security protocols. Each scan is verified and logged to ensure maximum safety for your vehicles, pets, and personal items."},"emergency-helplines":{title:"Emergency Helplines",icon:i.jsx(qs,{size:40,strokeWidth:1.5}),desc:"In case of an emergency, our smart tags provide instant access to local helplines, police, and ambulance services, ensuring help is always just one scan away."},"data-privacy":{title:"100% Data Privacy",icon:i.jsx(kt,{size:40,strokeWidth:1.5}),desc:"Your data belongs to you. We employ strict data protection policies and state-of-the-art encryption to guarantee your personal information remains completely confidential and secure."},verified:{title:"Verified Profiles",icon:i.jsx(r1,{size:40,strokeWidth:1.5}),desc:"Every V-Kawach user profile is thoroughly verified to build a trusted community. This prevents misuse and ensures that alerts and communications are always genuine."},"instant-alerts":{title:"Instant WhatsApp Alerts",icon:i.jsx(wl,{size:40,strokeWidth:1.5}),desc:"Receive immediate notifications via WhatsApp the moment your QR tag is scanned. Stay updated in real-time about the location and status of your valuables."}};function WC(){const{id:a}=ir(),l=FC[a]||{title:a.split("-").map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" "),icon:i.jsx(kt,{size:40,strokeWidth:1.5}),desc:"Detailed information about this specific service will be updated shortly."};return i.jsxs(QC,{children:[i.jsxs(IC,{to:"/",children:[i.jsx(Cn,{size:20})," Back to Home"]}),i.jsxs(KC,{children:[i.jsx("div",{className:"icon-circle",children:l.icon}),i.jsx("h1",{children:l.title})]}),i.jsxs(PC,{children:[i.jsx("p",{className:"highlight",children:"Experience unmatched security and reliability with V-Kawach."}),i.jsx("p",{children:l.desc}),i.jsx("p",{children:"At V-Kawach, we prioritize your safety and privacy above all else. Our dedicated systems work 24/7 to provide you with seamless, innovative security solutions that integrate effortlessly into your daily life. Rest easy knowing that you, your loved ones, and your assets are protected by next-generation technology."})]})]})}function k1(a,l){return function(){return a.apply(l,arguments)}}const{toString:XC}=Object.prototype,{getPrototypeOf:qf}=Object,{iterator:Qs,toStringTag:T1}=Symbol,Is=(a=>l=>{const c=XC.call(l);return a[c]||(a[c]=c.slice(8,-1).toLowerCase())})(Object.create(null)),xn=a=>(a=a.toLowerCase(),l=>Is(l)===a),Ks=a=>l=>typeof l===a,{isArray:lr}=Array,tr=Ks("undefined");function El(a){return a!==null&&!tr(a)&&a.constructor!==null&&!tr(a.constructor)&&Ht(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const N1=xn("ArrayBuffer");function ZC(a){let l;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?l=ArrayBuffer.isView(a):l=a&&a.buffer&&N1(a.buffer),l}const JC=Ks("string"),Ht=Ks("function"),R1=Ks("number"),zl=a=>a!==null&&typeof a=="object",e6=a=>a===!0||a===!1,ys=a=>{if(Is(a)!=="object")return!1;const l=qf(a);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(T1 in a)&&!(Qs in a)},t6=a=>{if(!zl(a)||El(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},n6=xn("Date"),a6=xn("File"),i6=a=>!!(a&&typeof a.uri<"u"),r6=a=>a&&typeof a.getParts<"u",l6=xn("Blob"),o6=xn("FileList"),s6=a=>zl(a)&&Ht(a.pipe);function c6(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Kg=c6(),Pg=typeof Kg.FormData<"u"?Kg.FormData:void 0,u6=a=>{let l;return a&&(Pg&&a instanceof Pg||Ht(a.append)&&((l=Is(a))==="formdata"||l==="object"&&Ht(a.toString)&&a.toString()==="[object FormData]"))},d6=xn("URLSearchParams"),[f6,p6,h6,m6]=["ReadableStream","Request","Response","Headers"].map(xn),g6=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function kl(a,l,{allOwnKeys:c=!1}={}){if(a===null||typeof a>"u")return;let s,d;if(typeof a!="object"&&(a=[a]),lr(a))for(s=0,d=a.length;s<d;s++)l.call(null,a[s],s,a);else{if(El(a))return;const f=c?Object.getOwnPropertyNames(a):Object.keys(a),p=f.length;let x;for(s=0;s<p;s++)x=f[s],l.call(null,a[x],x,a)}}function _1(a,l){if(El(a))return null;l=l.toLowerCase();const c=Object.keys(a);let s=c.length,d;for(;s-- >0;)if(d=c[s],l===d.toLowerCase())return d;return null}const Ja=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,O1=a=>!tr(a)&&a!==Ja;function mf(){const{caseless:a,skipUndefined:l}=O1(this)&&this||{},c={},s=(d,f)=>{if(f==="__proto__"||f==="constructor"||f==="prototype")return;const p=a&&_1(c,f)||f;ys(c[p])&&ys(d)?c[p]=mf(c[p],d):ys(d)?c[p]=mf({},d):lr(d)?c[p]=d.slice():(!l||!tr(d))&&(c[p]=d)};for(let d=0,f=arguments.length;d<f;d++)arguments[d]&&kl(arguments[d],s);return c}const x6=(a,l,c,{allOwnKeys:s}={})=>(kl(l,(d,f)=>{c&&Ht(d)?Object.defineProperty(a,f,{value:k1(d,c),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,f,{value:d,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),a),y6=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),b6=(a,l,c,s)=>{a.prototype=Object.create(l.prototype,s),Object.defineProperty(a.prototype,"constructor",{value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{value:l.prototype}),c&&Object.assign(a.prototype,c)},v6=(a,l,c,s)=>{let d,f,p;const x={};if(l=l||{},a==null)return l;do{for(d=Object.getOwnPropertyNames(a),f=d.length;f-- >0;)p=d[f],(!s||s(p,a,l))&&!x[p]&&(l[p]=a[p],x[p]=!0);a=c!==!1&&qf(a)}while(a&&(!c||c(a,l))&&a!==Object.prototype);return l},j6=(a,l,c)=>{a=String(a),(c===void 0||c>a.length)&&(c=a.length),c-=l.length;const s=a.indexOf(l,c);return s!==-1&&s===c},w6=a=>{if(!a)return null;if(lr(a))return a;let l=a.length;if(!R1(l))return null;const c=new Array(l);for(;l-- >0;)c[l]=a[l];return c},S6=(a=>l=>a&&l instanceof a)(typeof Uint8Array<"u"&&qf(Uint8Array)),C6=(a,l)=>{const s=(a&&a[Qs]).call(a);let d;for(;(d=s.next())&&!d.done;){const f=d.value;l.call(a,f[0],f[1])}},A6=(a,l)=>{let c;const s=[];for(;(c=a.exec(l))!==null;)s.push(c);return s},E6=xn("HTMLFormElement"),z6=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(c,s,d){return s.toUpperCase()+d}),Fg=(({hasOwnProperty:a})=>(l,c)=>a.call(l,c))(Object.prototype),k6=xn("RegExp"),M1=(a,l)=>{const c=Object.getOwnPropertyDescriptors(a),s={};kl(c,(d,f)=>{let p;(p=l(d,f,a))!==!1&&(s[f]=p||d)}),Object.defineProperties(a,s)},T6=a=>{M1(a,(l,c)=>{if(Ht(a)&&["arguments","caller","callee"].indexOf(c)!==-1)return!1;const s=a[c];if(Ht(s)){if(l.enumerable=!1,"writable"in l){l.writable=!1;return}l.set||(l.set=()=>{throw Error("Can not rewrite read-only method '"+c+"'")})}})},N6=(a,l)=>{const c={},s=d=>{d.forEach(f=>{c[f]=!0})};return lr(a)?s(a):s(String(a).split(l)),c},R6=()=>{},_6=(a,l)=>a!=null&&Number.isFinite(a=+a)?a:l;function O6(a){return!!(a&&Ht(a.append)&&a[T1]==="FormData"&&a[Qs])}const M6=a=>{const l=new Array(10),c=(s,d)=>{if(zl(s)){if(l.indexOf(s)>=0)return;if(El(s))return s;if(!("toJSON"in s)){l[d]=s;const f=lr(s)?[]:{};return kl(s,(p,x)=>{const m=c(p,d+1);!tr(m)&&(f[x]=m)}),l[d]=void 0,f}}return s};return c(a,0)},D6=xn("AsyncFunction"),H6=a=>a&&(zl(a)||Ht(a))&&Ht(a.then)&&Ht(a.catch),D1=((a,l)=>a?setImmediate:l?((c,s)=>(Ja.addEventListener("message",({source:d,data:f})=>{d===Ja&&f===c&&s.length&&s.shift()()},!1),d=>{s.push(d),Ja.postMessage(c,"*")}))(`axios@${Math.random()}`,[]):c=>setTimeout(c))(typeof setImmediate=="function",Ht(Ja.postMessage)),B6=typeof queueMicrotask<"u"?queueMicrotask.bind(Ja):typeof process<"u"&&process.nextTick||D1,U6=a=>a!=null&&Ht(a[Qs]),B={isArray:lr,isArrayBuffer:N1,isBuffer:El,isFormData:u6,isArrayBufferView:ZC,isString:JC,isNumber:R1,isBoolean:e6,isObject:zl,isPlainObject:ys,isEmptyObject:t6,isReadableStream:f6,isRequest:p6,isResponse:h6,isHeaders:m6,isUndefined:tr,isDate:n6,isFile:a6,isReactNativeBlob:i6,isReactNative:r6,isBlob:l6,isRegExp:k6,isFunction:Ht,isStream:s6,isURLSearchParams:d6,isTypedArray:S6,isFileList:o6,forEach:kl,merge:mf,extend:x6,trim:g6,stripBOM:y6,inherits:b6,toFlatObject:v6,kindOf:Is,kindOfTest:xn,endsWith:j6,toArray:w6,forEachEntry:C6,matchAll:A6,isHTMLForm:E6,hasOwnProperty:Fg,hasOwnProp:Fg,reduceDescriptors:M1,freezeMethods:T6,toObjectSet:N6,toCamelCase:z6,noop:R6,toFiniteNumber:_6,findKey:_1,global:Ja,isContextDefined:O1,isSpecCompliantForm:O6,toJSONObject:M6,isAsyncFn:D6,isThenable:H6,setImmediate:D1,asap:B6,isIterable:U6};let ue=class H1 extends Error{static from(l,c,s,d,f,p){const x=new H1(l.message,c||l.code,s,d,f);return x.cause=l,x.name=l.name,l.status!=null&&x.status==null&&(x.status=l.status),p&&Object.assign(x,p),x}constructor(l,c,s,d,f){super(l),Object.defineProperty(this,"message",{value:l,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,c&&(this.code=c),s&&(this.config=s),d&&(this.request=d),f&&(this.response=f,this.status=f.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}};ue.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ue.ERR_BAD_OPTION="ERR_BAD_OPTION";ue.ECONNABORTED="ECONNABORTED";ue.ETIMEDOUT="ETIMEDOUT";ue.ERR_NETWORK="ERR_NETWORK";ue.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ue.ERR_DEPRECATED="ERR_DEPRECATED";ue.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ue.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ue.ERR_CANCELED="ERR_CANCELED";ue.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ue.ERR_INVALID_URL="ERR_INVALID_URL";const L6=null;function gf(a){return B.isPlainObject(a)||B.isArray(a)}function B1(a){return B.endsWith(a,"[]")?a.slice(0,-2):a}function Pd(a,l,c){return a?a.concat(l).map(function(d,f){return d=B1(d),!c&&f?"["+d+"]":d}).join(c?".":""):l}function $6(a){return B.isArray(a)&&!a.some(gf)}const q6=B.toFlatObject(B,{},null,function(l){return/^is[A-Z]/.test(l)});function Ps(a,l,c){if(!B.isObject(a))throw new TypeError("target must be an object");l=l||new FormData,c=B.toFlatObject(c,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,E){return!B.isUndefined(E[R])});const s=c.metaTokens,d=c.visitor||y,f=c.dots,p=c.indexes,m=(c.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(l);if(!B.isFunction(d))throw new TypeError("visitor must be a function");function g(A){if(A===null)return"";if(B.isDate(A))return A.toISOString();if(B.isBoolean(A))return A.toString();if(!m&&B.isBlob(A))throw new ue("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(A)||B.isTypedArray(A)?m&&typeof Blob=="function"?new Blob([A]):Buffer.from(A):A}function y(A,R,E){let N=A;if(B.isReactNative(l)&&B.isReactNativeBlob(A))return l.append(Pd(E,R,f),g(A)),!1;if(A&&!E&&typeof A=="object"){if(B.endsWith(R,"{}"))R=s?R:R.slice(0,-2),A=JSON.stringify(A);else if(B.isArray(A)&&$6(A)||(B.isFileList(A)||B.endsWith(R,"[]"))&&(N=B.toArray(A)))return R=B1(R),N.forEach(function(K,P){!(B.isUndefined(K)||K===null)&&l.append(p===!0?Pd([R],P,f):p===null?R:R+"[]",g(K))}),!1}return gf(A)?!0:(l.append(Pd(E,R,f),g(A)),!1)}const v=[],k=Object.assign(q6,{defaultVisitor:y,convertValue:g,isVisitable:gf});function D(A,R){if(!B.isUndefined(A)){if(v.indexOf(A)!==-1)throw Error("Circular reference detected in "+R.join("."));v.push(A),B.forEach(A,function(N,$){(!(B.isUndefined(N)||N===null)&&d.call(l,N,B.isString($)?$.trim():$,R,k))===!0&&D(N,R?R.concat($):[$])}),v.pop()}}if(!B.isObject(a))throw new TypeError("data must be an object");return D(a),l}function Wg(a){const l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(s){return l[s]})}function Yf(a,l){this._pairs=[],a&&Ps(a,this,l)}const U1=Yf.prototype;U1.append=function(l,c){this._pairs.push([l,c])};U1.toString=function(l){const c=l?function(s){return l.call(this,s,Wg)}:Wg;return this._pairs.map(function(d){return c(d[0])+"="+c(d[1])},"").join("&")};function Y6(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function L1(a,l,c){if(!l)return a;const s=c&&c.encode||Y6,d=B.isFunction(c)?{serialize:c}:c,f=d&&d.serialize;let p;if(f?p=f(l,d):p=B.isURLSearchParams(l)?l.toString():new Yf(l,d).toString(s),p){const x=a.indexOf("#");x!==-1&&(a=a.slice(0,x)),a+=(a.indexOf("?")===-1?"?":"&")+p}return a}class Xg{constructor(){this.handlers=[]}use(l,c,s){return this.handlers.push({fulfilled:l,rejected:c,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){B.forEach(this.handlers,function(s){s!==null&&l(s)})}}const Gf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},G6=typeof URLSearchParams<"u"?URLSearchParams:Yf,V6=typeof FormData<"u"?FormData:null,Q6=typeof Blob<"u"?Blob:null,I6={isBrowser:!0,classes:{URLSearchParams:G6,FormData:V6,Blob:Q6},protocols:["http","https","file","blob","url","data"]},Vf=typeof window<"u"&&typeof document<"u",xf=typeof navigator=="object"&&navigator||void 0,K6=Vf&&(!xf||["ReactNative","NativeScript","NS"].indexOf(xf.product)<0),P6=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",F6=Vf&&window.location.href||"http://localhost",W6=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Vf,hasStandardBrowserEnv:K6,hasStandardBrowserWebWorkerEnv:P6,navigator:xf,origin:F6},Symbol.toStringTag,{value:"Module"})),Et={...W6,...I6};function X6(a,l){return Ps(a,new Et.classes.URLSearchParams,{visitor:function(c,s,d,f){return Et.isNode&&B.isBuffer(c)?(this.append(s,c.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...l})}function Z6(a){return B.matchAll(/\w+|\[(\w*)]/g,a).map(l=>l[0]==="[]"?"":l[1]||l[0])}function J6(a){const l={},c=Object.keys(a);let s;const d=c.length;let f;for(s=0;s<d;s++)f=c[s],l[f]=a[f];return l}function $1(a){function l(c,s,d,f){let p=c[f++];if(p==="__proto__")return!0;const x=Number.isFinite(+p),m=f>=c.length;return p=!p&&B.isArray(d)?d.length:p,m?(B.hasOwnProp(d,p)?d[p]=[d[p],s]:d[p]=s,!x):((!d[p]||!B.isObject(d[p]))&&(d[p]=[]),l(c,s,d[p],f)&&B.isArray(d[p])&&(d[p]=J6(d[p])),!x)}if(B.isFormData(a)&&B.isFunction(a.entries)){const c={};return B.forEachEntry(a,(s,d)=>{l(Z6(s),d,c,0)}),c}return null}function eA(a,l,c){if(B.isString(a))try{return(l||JSON.parse)(a),B.trim(a)}catch(s){if(s.name!=="SyntaxError")throw s}return(c||JSON.stringify)(a)}const Tl={transitional:Gf,adapter:["xhr","http","fetch"],transformRequest:[function(l,c){const s=c.getContentType()||"",d=s.indexOf("application/json")>-1,f=B.isObject(l);if(f&&B.isHTMLForm(l)&&(l=new FormData(l)),B.isFormData(l))return d?JSON.stringify($1(l)):l;if(B.isArrayBuffer(l)||B.isBuffer(l)||B.isStream(l)||B.isFile(l)||B.isBlob(l)||B.isReadableStream(l))return l;if(B.isArrayBufferView(l))return l.buffer;if(B.isURLSearchParams(l))return c.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let x;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return X6(l,this.formSerializer).toString();if((x=B.isFileList(l))||s.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Ps(x?{"files[]":l}:l,m&&new m,this.formSerializer)}}return f||d?(c.setContentType("application/json",!1),eA(l)):l}],transformResponse:[function(l){const c=this.transitional||Tl.transitional,s=c&&c.forcedJSONParsing,d=this.responseType==="json";if(B.isResponse(l)||B.isReadableStream(l))return l;if(l&&B.isString(l)&&(s&&!this.responseType||d)){const p=!(c&&c.silentJSONParsing)&&d;try{return JSON.parse(l,this.parseReviver)}catch(x){if(p)throw x.name==="SyntaxError"?ue.from(x,ue.ERR_BAD_RESPONSE,this,null,this.response):x}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Et.classes.FormData,Blob:Et.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],a=>{Tl.headers[a]={}});const tA=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nA=a=>{const l={};let c,s,d;return a&&a.split(`
`).forEach(function(p){d=p.indexOf(":"),c=p.substring(0,d).trim().toLowerCase(),s=p.substring(d+1).trim(),!(!c||l[c]&&tA[c])&&(c==="set-cookie"?l[c]?l[c].push(s):l[c]=[s]:l[c]=l[c]?l[c]+", "+s:s)}),l},Zg=Symbol("internals");function ll(a){return a&&String(a).trim().toLowerCase()}function bs(a){return a===!1||a==null?a:B.isArray(a)?a.map(bs):String(a).replace(/[\r\n]+$/,"")}function aA(a){const l=Object.create(null),c=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=c.exec(a);)l[s[1]]=s[2];return l}const iA=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Fd(a,l,c,s,d){if(B.isFunction(s))return s.call(this,l,c);if(d&&(l=c),!!B.isString(l)){if(B.isString(s))return l.indexOf(s)!==-1;if(B.isRegExp(s))return s.test(l)}}function rA(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,c,s)=>c.toUpperCase()+s)}function lA(a,l){const c=B.toCamelCase(" "+l);["get","set","has"].forEach(s=>{Object.defineProperty(a,s+c,{value:function(d,f,p){return this[s].call(this,l,d,f,p)},configurable:!0})})}let Bt=class{constructor(l){l&&this.set(l)}set(l,c,s){const d=this;function f(x,m,g){const y=ll(m);if(!y)throw new Error("header name must be a non-empty string");const v=B.findKey(d,y);(!v||d[v]===void 0||g===!0||g===void 0&&d[v]!==!1)&&(d[v||m]=bs(x))}const p=(x,m)=>B.forEach(x,(g,y)=>f(g,y,m));if(B.isPlainObject(l)||l instanceof this.constructor)p(l,c);else if(B.isString(l)&&(l=l.trim())&&!iA(l))p(nA(l),c);else if(B.isObject(l)&&B.isIterable(l)){let x={},m,g;for(const y of l){if(!B.isArray(y))throw TypeError("Object iterator must return a key-value pair");x[g=y[0]]=(m=x[g])?B.isArray(m)?[...m,y[1]]:[m,y[1]]:y[1]}p(x,c)}else l!=null&&f(c,l,s);return this}get(l,c){if(l=ll(l),l){const s=B.findKey(this,l);if(s){const d=this[s];if(!c)return d;if(c===!0)return aA(d);if(B.isFunction(c))return c.call(this,d,s);if(B.isRegExp(c))return c.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(l,c){if(l=ll(l),l){const s=B.findKey(this,l);return!!(s&&this[s]!==void 0&&(!c||Fd(this,this[s],s,c)))}return!1}delete(l,c){const s=this;let d=!1;function f(p){if(p=ll(p),p){const x=B.findKey(s,p);x&&(!c||Fd(s,s[x],x,c))&&(delete s[x],d=!0)}}return B.isArray(l)?l.forEach(f):f(l),d}clear(l){const c=Object.keys(this);let s=c.length,d=!1;for(;s--;){const f=c[s];(!l||Fd(this,this[f],f,l,!0))&&(delete this[f],d=!0)}return d}normalize(l){const c=this,s={};return B.forEach(this,(d,f)=>{const p=B.findKey(s,f);if(p){c[p]=bs(d),delete c[f];return}const x=l?rA(f):String(f).trim();x!==f&&delete c[f],c[x]=bs(d),s[x]=!0}),this}concat(...l){return this.constructor.concat(this,...l)}toJSON(l){const c=Object.create(null);return B.forEach(this,(s,d)=>{s!=null&&s!==!1&&(c[d]=l&&B.isArray(s)?s.join(", "):s)}),c}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([l,c])=>l+": "+c).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(l){return l instanceof this?l:new this(l)}static concat(l,...c){const s=new this(l);return c.forEach(d=>s.set(d)),s}static accessor(l){const s=(this[Zg]=this[Zg]={accessors:{}}).accessors,d=this.prototype;function f(p){const x=ll(p);s[x]||(lA(d,p),s[x]=!0)}return B.isArray(l)?l.forEach(f):f(l),this}};Bt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(Bt.prototype,({value:a},l)=>{let c=l[0].toUpperCase()+l.slice(1);return{get:()=>a,set(s){this[c]=s}}});B.freezeMethods(Bt);function Wd(a,l){const c=this||Tl,s=l||c,d=Bt.from(s.headers);let f=s.data;return B.forEach(a,function(x){f=x.call(c,f,d.normalize(),l?l.status:void 0)}),d.normalize(),f}function q1(a){return!!(a&&a.__CANCEL__)}let Nl=class extends ue{constructor(l,c,s){super(l??"canceled",ue.ERR_CANCELED,c,s),this.name="CanceledError",this.__CANCEL__=!0}};function Y1(a,l,c){const s=c.config.validateStatus;!c.status||!s||s(c.status)?a(c):l(new ue("Request failed with status code "+c.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(c.status/100)-4],c.config,c.request,c))}function oA(a){const l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return l&&l[1]||""}function sA(a,l){a=a||10;const c=new Array(a),s=new Array(a);let d=0,f=0,p;return l=l!==void 0?l:1e3,function(m){const g=Date.now(),y=s[f];p||(p=g),c[d]=m,s[d]=g;let v=f,k=0;for(;v!==d;)k+=c[v++],v=v%a;if(d=(d+1)%a,d===f&&(f=(f+1)%a),g-p<l)return;const D=y&&g-y;return D?Math.round(k*1e3/D):void 0}}function cA(a,l){let c=0,s=1e3/l,d,f;const p=(g,y=Date.now())=>{c=y,d=null,f&&(clearTimeout(f),f=null),a(...g)};return[(...g)=>{const y=Date.now(),v=y-c;v>=s?p(g,y):(d=g,f||(f=setTimeout(()=>{f=null,p(d)},s-v)))},()=>d&&p(d)]}const Rs=(a,l,c=3)=>{let s=0;const d=sA(50,250);return cA(f=>{const p=f.loaded,x=f.lengthComputable?f.total:void 0,m=p-s,g=d(m),y=p<=x;s=p;const v={loaded:p,total:x,progress:x?p/x:void 0,bytes:m,rate:g||void 0,estimated:g&&x&&y?(x-p)/g:void 0,event:f,lengthComputable:x!=null,[l?"download":"upload"]:!0};a(v)},c)},Jg=(a,l)=>{const c=a!=null;return[s=>l[0]({lengthComputable:c,total:a,loaded:s}),l[1]]},ex=a=>(...l)=>B.asap(()=>a(...l)),uA=Et.hasStandardBrowserEnv?((a,l)=>c=>(c=new URL(c,Et.origin),a.protocol===c.protocol&&a.host===c.host&&(l||a.port===c.port)))(new URL(Et.origin),Et.navigator&&/(msie|trident)/i.test(Et.navigator.userAgent)):()=>!0,dA=Et.hasStandardBrowserEnv?{write(a,l,c,s,d,f,p){if(typeof document>"u")return;const x=[`${a}=${encodeURIComponent(l)}`];B.isNumber(c)&&x.push(`expires=${new Date(c).toUTCString()}`),B.isString(s)&&x.push(`path=${s}`),B.isString(d)&&x.push(`domain=${d}`),f===!0&&x.push("secure"),B.isString(p)&&x.push(`SameSite=${p}`),document.cookie=x.join("; ")},read(a){if(typeof document>"u")return null;const l=document.cookie.match(new RegExp("(?:^|; )"+a+"=([^;]*)"));return l?decodeURIComponent(l[1]):null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function fA(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function pA(a,l){return l?a.replace(/\/?\/$/,"")+"/"+l.replace(/^\/+/,""):a}function G1(a,l,c){let s=!fA(l);return a&&(s||c==!1)?pA(a,l):l}const tx=a=>a instanceof Bt?{...a}:a;function ii(a,l){l=l||{};const c={};function s(g,y,v,k){return B.isPlainObject(g)&&B.isPlainObject(y)?B.merge.call({caseless:k},g,y):B.isPlainObject(y)?B.merge({},y):B.isArray(y)?y.slice():y}function d(g,y,v,k){if(B.isUndefined(y)){if(!B.isUndefined(g))return s(void 0,g,v,k)}else return s(g,y,v,k)}function f(g,y){if(!B.isUndefined(y))return s(void 0,y)}function p(g,y){if(B.isUndefined(y)){if(!B.isUndefined(g))return s(void 0,g)}else return s(void 0,y)}function x(g,y,v){if(v in l)return s(g,y);if(v in a)return s(void 0,g)}const m={url:f,method:f,data:f,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:x,headers:(g,y,v)=>d(tx(g),tx(y),v,!0)};return B.forEach(Object.keys({...a,...l}),function(y){if(y==="__proto__"||y==="constructor"||y==="prototype")return;const v=B.hasOwnProp(m,y)?m[y]:d,k=v(a[y],l[y],y);B.isUndefined(k)&&v!==x||(c[y]=k)}),c}const V1=a=>{const l=ii({},a);let{data:c,withXSRFToken:s,xsrfHeaderName:d,xsrfCookieName:f,headers:p,auth:x}=l;if(l.headers=p=Bt.from(p),l.url=L1(G1(l.baseURL,l.url,l.allowAbsoluteUrls),a.params,a.paramsSerializer),x&&p.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):""))),B.isFormData(c)){if(Et.hasStandardBrowserEnv||Et.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if(B.isFunction(c.getHeaders)){const m=c.getHeaders(),g=["content-type","content-length"];Object.entries(m).forEach(([y,v])=>{g.includes(y.toLowerCase())&&p.set(y,v)})}}if(Et.hasStandardBrowserEnv&&(s&&B.isFunction(s)&&(s=s(l)),s||s!==!1&&uA(l.url))){const m=d&&f&&dA.read(f);m&&p.set(d,m)}return l},hA=typeof XMLHttpRequest<"u",mA=hA&&function(a){return new Promise(function(c,s){const d=V1(a);let f=d.data;const p=Bt.from(d.headers).normalize();let{responseType:x,onUploadProgress:m,onDownloadProgress:g}=d,y,v,k,D,A;function R(){D&&D(),A&&A(),d.cancelToken&&d.cancelToken.unsubscribe(y),d.signal&&d.signal.removeEventListener("abort",y)}let E=new XMLHttpRequest;E.open(d.method.toUpperCase(),d.url,!0),E.timeout=d.timeout;function N(){if(!E)return;const K=Bt.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),ee={data:!x||x==="text"||x==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:K,config:a,request:E};Y1(function(Q){c(Q),R()},function(Q){s(Q),R()},ee),E=null}"onloadend"in E?E.onloadend=N:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(N)},E.onabort=function(){E&&(s(new ue("Request aborted",ue.ECONNABORTED,a,E)),E=null)},E.onerror=function(P){const ee=P&&P.message?P.message:"Network Error",J=new ue(ee,ue.ERR_NETWORK,a,E);J.event=P||null,s(J),E=null},E.ontimeout=function(){let P=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const ee=d.transitional||Gf;d.timeoutErrorMessage&&(P=d.timeoutErrorMessage),s(new ue(P,ee.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,a,E)),E=null},f===void 0&&p.setContentType(null),"setRequestHeader"in E&&B.forEach(p.toJSON(),function(P,ee){E.setRequestHeader(ee,P)}),B.isUndefined(d.withCredentials)||(E.withCredentials=!!d.withCredentials),x&&x!=="json"&&(E.responseType=d.responseType),g&&([k,A]=Rs(g,!0),E.addEventListener("progress",k)),m&&E.upload&&([v,D]=Rs(m),E.upload.addEventListener("progress",v),E.upload.addEventListener("loadend",D)),(d.cancelToken||d.signal)&&(y=K=>{E&&(s(!K||K.type?new Nl(null,a,E):K),E.abort(),E=null)},d.cancelToken&&d.cancelToken.subscribe(y),d.signal&&(d.signal.aborted?y():d.signal.addEventListener("abort",y)));const $=oA(d.url);if($&&Et.protocols.indexOf($)===-1){s(new ue("Unsupported protocol "+$+":",ue.ERR_BAD_REQUEST,a));return}E.send(f||null)})},gA=(a,l)=>{const{length:c}=a=a?a.filter(Boolean):[];if(l||c){let s=new AbortController,d;const f=function(g){if(!d){d=!0,x();const y=g instanceof Error?g:this.reason;s.abort(y instanceof ue?y:new Nl(y instanceof Error?y.message:y))}};let p=l&&setTimeout(()=>{p=null,f(new ue(`timeout of ${l}ms exceeded`,ue.ETIMEDOUT))},l);const x=()=>{a&&(p&&clearTimeout(p),p=null,a.forEach(g=>{g.unsubscribe?g.unsubscribe(f):g.removeEventListener("abort",f)}),a=null)};a.forEach(g=>g.addEventListener("abort",f));const{signal:m}=s;return m.unsubscribe=()=>B.asap(x),m}},xA=function*(a,l){let c=a.byteLength;if(c<l){yield a;return}let s=0,d;for(;s<c;)d=s+l,yield a.slice(s,d),s=d},yA=async function*(a,l){for await(const c of bA(a))yield*xA(c,l)},bA=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const l=a.getReader();try{for(;;){const{done:c,value:s}=await l.read();if(c)break;yield s}}finally{await l.cancel()}},nx=(a,l,c,s)=>{const d=yA(a,l);let f=0,p,x=m=>{p||(p=!0,s&&s(m))};return new ReadableStream({async pull(m){try{const{done:g,value:y}=await d.next();if(g){x(),m.close();return}let v=y.byteLength;if(c){let k=f+=v;c(k)}m.enqueue(new Uint8Array(y))}catch(g){throw x(g),g}},cancel(m){return x(m),d.return()}},{highWaterMark:2})},ax=64*1024,{isFunction:ss}=B,vA=(({Request:a,Response:l})=>({Request:a,Response:l}))(B.global),{ReadableStream:ix,TextEncoder:rx}=B.global,lx=(a,...l)=>{try{return!!a(...l)}catch{return!1}},jA=a=>{a=B.merge.call({skipUndefined:!0},vA,a);const{fetch:l,Request:c,Response:s}=a,d=l?ss(l):typeof fetch=="function",f=ss(c),p=ss(s);if(!d)return!1;const x=d&&ss(ix),m=d&&(typeof rx=="function"?(A=>R=>A.encode(R))(new rx):async A=>new Uint8Array(await new c(A).arrayBuffer())),g=f&&x&&lx(()=>{let A=!1;const R=new ix,E=new c(Et.origin,{body:R,method:"POST",get duplex(){return A=!0,"half"}}).headers.has("Content-Type");return R.cancel(),A&&!E}),y=p&&x&&lx(()=>B.isReadableStream(new s("").body)),v={stream:y&&(A=>A.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(A=>{!v[A]&&(v[A]=(R,E)=>{let N=R&&R[A];if(N)return N.call(R);throw new ue(`Response type '${A}' is not supported`,ue.ERR_NOT_SUPPORT,E)})});const k=async A=>{if(A==null)return 0;if(B.isBlob(A))return A.size;if(B.isSpecCompliantForm(A))return(await new c(Et.origin,{method:"POST",body:A}).arrayBuffer()).byteLength;if(B.isArrayBufferView(A)||B.isArrayBuffer(A))return A.byteLength;if(B.isURLSearchParams(A)&&(A=A+""),B.isString(A))return(await m(A)).byteLength},D=async(A,R)=>{const E=B.toFiniteNumber(A.getContentLength());return E??k(R)};return async A=>{let{url:R,method:E,data:N,signal:$,cancelToken:K,timeout:P,onDownloadProgress:ee,onUploadProgress:J,responseType:Q,headers:F,withCredentials:he="same-origin",fetchOptions:ye}=V1(A),de=l||fetch;Q=Q?(Q+"").toLowerCase():"text";let ze=gA([$,K&&K.toAbortSignal()],P),Le=null;const Ye=ze&&ze.unsubscribe&&(()=>{ze.unsubscribe()});let nt;try{if(J&&g&&E!=="get"&&E!=="head"&&(nt=await D(F,N))!==0){let C=new c(R,{method:"POST",body:N,duplex:"half"}),q;if(B.isFormData(N)&&(q=C.headers.get("content-type"))&&F.setContentType(q),C.body){const[Z,te]=Jg(nt,Rs(ex(J)));N=nx(C.body,ax,Z,te)}}B.isString(he)||(he=he?"include":"omit");const H=f&&"credentials"in c.prototype,W={...ye,signal:ze,method:E.toUpperCase(),headers:F.normalize().toJSON(),body:N,duplex:"half",credentials:H?he:void 0};Le=f&&new c(R,W);let ae=await(f?de(Le,ye):de(R,W));const ce=y&&(Q==="stream"||Q==="response");if(y&&(ee||ce&&Ye)){const C={};["status","statusText","headers"].forEach(L=>{C[L]=ae[L]});const q=B.toFiniteNumber(ae.headers.get("content-length")),[Z,te]=ee&&Jg(q,Rs(ex(ee),!0))||[];ae=new s(nx(ae.body,ax,Z,()=>{te&&te(),Ye&&Ye()}),C)}Q=Q||"text";let ve=await v[B.findKey(v,Q)||"text"](ae,A);return!ce&&Ye&&Ye(),await new Promise((C,q)=>{Y1(C,q,{data:ve,headers:Bt.from(ae.headers),status:ae.status,statusText:ae.statusText,config:A,request:Le})})}catch(H){throw Ye&&Ye(),H&&H.name==="TypeError"&&/Load failed|fetch/i.test(H.message)?Object.assign(new ue("Network Error",ue.ERR_NETWORK,A,Le,H&&H.response),{cause:H.cause||H}):ue.from(H,H&&H.code,A,Le,H&&H.response)}}},wA=new Map,Q1=a=>{let l=a&&a.env||{};const{fetch:c,Request:s,Response:d}=l,f=[s,d,c];let p=f.length,x=p,m,g,y=wA;for(;x--;)m=f[x],g=y.get(m),g===void 0&&y.set(m,g=x?new Map:jA(l)),y=g;return g};Q1();const Qf={http:L6,xhr:mA,fetch:{get:Q1}};B.forEach(Qf,(a,l)=>{if(a){try{Object.defineProperty(a,"name",{value:l})}catch{}Object.defineProperty(a,"adapterName",{value:l})}});const ox=a=>`- ${a}`,SA=a=>B.isFunction(a)||a===null||a===!1;function CA(a,l){a=B.isArray(a)?a:[a];const{length:c}=a;let s,d;const f={};for(let p=0;p<c;p++){s=a[p];let x;if(d=s,!SA(s)&&(d=Qf[(x=String(s)).toLowerCase()],d===void 0))throw new ue(`Unknown adapter '${x}'`);if(d&&(B.isFunction(d)||(d=d.get(l))))break;f[x||"#"+p]=d}if(!d){const p=Object.entries(f).map(([m,g])=>`adapter ${m} `+(g===!1?"is not supported by the environment":"is not available in the build"));let x=c?p.length>1?`since :
`+p.map(ox).join(`
`):" "+ox(p[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+x,"ERR_NOT_SUPPORT")}return d}const I1={getAdapter:CA,adapters:Qf};function Xd(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Nl(null,a)}function sx(a){return Xd(a),a.headers=Bt.from(a.headers),a.data=Wd.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),I1.getAdapter(a.adapter||Tl.adapter,a)(a).then(function(s){return Xd(a),s.data=Wd.call(a,a.transformResponse,s),s.headers=Bt.from(s.headers),s},function(s){return q1(s)||(Xd(a),s&&s.response&&(s.response.data=Wd.call(a,a.transformResponse,s.response),s.response.headers=Bt.from(s.response.headers))),Promise.reject(s)})}const K1="1.14.0",Fs={};["object","boolean","number","function","string","symbol"].forEach((a,l)=>{Fs[a]=function(s){return typeof s===a||"a"+(l<1?"n ":" ")+a}});const cx={};Fs.transitional=function(l,c,s){function d(f,p){return"[Axios v"+K1+"] Transitional option '"+f+"'"+p+(s?". "+s:"")}return(f,p,x)=>{if(l===!1)throw new ue(d(p," has been removed"+(c?" in "+c:"")),ue.ERR_DEPRECATED);return c&&!cx[p]&&(cx[p]=!0,console.warn(d(p," has been deprecated since v"+c+" and will be removed in the near future"))),l?l(f,p,x):!0}};Fs.spelling=function(l){return(c,s)=>(console.warn(`${s} is likely a misspelling of ${l}`),!0)};function AA(a,l,c){if(typeof a!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const s=Object.keys(a);let d=s.length;for(;d-- >0;){const f=s[d],p=l[f];if(p){const x=a[f],m=x===void 0||p(x,f,a);if(m!==!0)throw new ue("option "+f+" must be "+m,ue.ERR_BAD_OPTION_VALUE);continue}if(c!==!0)throw new ue("Unknown option "+f,ue.ERR_BAD_OPTION)}}const vs={assertOptions:AA,validators:Fs},on=vs.validators;let ti=class{constructor(l){this.defaults=l||{},this.interceptors={request:new Xg,response:new Xg}}async request(l,c){try{return await this._request(l,c)}catch(s){if(s instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const f=d.stack?d.stack.replace(/^.+\n/,""):"";try{s.stack?f&&!String(s.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+f):s.stack=f}catch{}}throw s}}_request(l,c){typeof l=="string"?(c=c||{},c.url=l):c=l||{},c=ii(this.defaults,c);const{transitional:s,paramsSerializer:d,headers:f}=c;s!==void 0&&vs.assertOptions(s,{silentJSONParsing:on.transitional(on.boolean),forcedJSONParsing:on.transitional(on.boolean),clarifyTimeoutError:on.transitional(on.boolean),legacyInterceptorReqResOrdering:on.transitional(on.boolean)},!1),d!=null&&(B.isFunction(d)?c.paramsSerializer={serialize:d}:vs.assertOptions(d,{encode:on.function,serialize:on.function},!0)),c.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?c.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:c.allowAbsoluteUrls=!0),vs.assertOptions(c,{baseUrl:on.spelling("baseURL"),withXsrfToken:on.spelling("withXSRFToken")},!0),c.method=(c.method||this.defaults.method||"get").toLowerCase();let p=f&&B.merge(f.common,f[c.method]);f&&B.forEach(["delete","get","head","post","put","patch","common"],A=>{delete f[A]}),c.headers=Bt.concat(p,f);const x=[];let m=!0;this.interceptors.request.forEach(function(R){if(typeof R.runWhen=="function"&&R.runWhen(c)===!1)return;m=m&&R.synchronous;const E=c.transitional||Gf;E&&E.legacyInterceptorReqResOrdering?x.unshift(R.fulfilled,R.rejected):x.push(R.fulfilled,R.rejected)});const g=[];this.interceptors.response.forEach(function(R){g.push(R.fulfilled,R.rejected)});let y,v=0,k;if(!m){const A=[sx.bind(this),void 0];for(A.unshift(...x),A.push(...g),k=A.length,y=Promise.resolve(c);v<k;)y=y.then(A[v++],A[v++]);return y}k=x.length;let D=c;for(;v<k;){const A=x[v++],R=x[v++];try{D=A(D)}catch(E){R.call(this,E);break}}try{y=sx.call(this,D)}catch(A){return Promise.reject(A)}for(v=0,k=g.length;v<k;)y=y.then(g[v++],g[v++]);return y}getUri(l){l=ii(this.defaults,l);const c=G1(l.baseURL,l.url,l.allowAbsoluteUrls);return L1(c,l.params,l.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(l){ti.prototype[l]=function(c,s){return this.request(ii(s||{},{method:l,url:c,data:(s||{}).data}))}});B.forEach(["post","put","patch"],function(l){function c(s){return function(f,p,x){return this.request(ii(x||{},{method:l,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:p}))}}ti.prototype[l]=c(),ti.prototype[l+"Form"]=c(!0)});let EA=class P1{constructor(l){if(typeof l!="function")throw new TypeError("executor must be a function.");let c;this.promise=new Promise(function(f){c=f});const s=this;this.promise.then(d=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](d);s._listeners=null}),this.promise.then=d=>{let f;const p=new Promise(x=>{s.subscribe(x),f=x}).then(d);return p.cancel=function(){s.unsubscribe(f)},p},l(function(f,p,x){s.reason||(s.reason=new Nl(f,p,x),c(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(l){if(this.reason){l(this.reason);return}this._listeners?this._listeners.push(l):this._listeners=[l]}unsubscribe(l){if(!this._listeners)return;const c=this._listeners.indexOf(l);c!==-1&&this._listeners.splice(c,1)}toAbortSignal(){const l=new AbortController,c=s=>{l.abort(s)};return this.subscribe(c),l.signal.unsubscribe=()=>this.unsubscribe(c),l.signal}static source(){let l;return{token:new P1(function(d){l=d}),cancel:l}}};function zA(a){return function(c){return a.apply(null,c)}}function kA(a){return B.isObject(a)&&a.isAxiosError===!0}const yf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(yf).forEach(([a,l])=>{yf[l]=a});function F1(a){const l=new ti(a),c=k1(ti.prototype.request,l);return B.extend(c,ti.prototype,l,{allOwnKeys:!0}),B.extend(c,l,null,{allOwnKeys:!0}),c.create=function(d){return F1(ii(a,d))},c}const rt=F1(Tl);rt.Axios=ti;rt.CanceledError=Nl;rt.CancelToken=EA;rt.isCancel=q1;rt.VERSION=K1;rt.toFormData=Ps;rt.AxiosError=ue;rt.Cancel=rt.CanceledError;rt.all=function(l){return Promise.all(l)};rt.spread=zA;rt.isAxiosError=kA;rt.mergeConfig=ii;rt.AxiosHeaders=Bt;rt.formToJSON=a=>$1(B.isHTMLForm(a)?new FormData(a):a);rt.getAdapter=I1.getAdapter;rt.HttpStatusCode=yf;rt.default=rt;const{Axios:LE,AxiosError:$E,CanceledError:qE,isCancel:YE,CancelToken:GE,VERSION:VE,all:QE,Cancel:IE,isAxiosError:KE,spread:PE,toFormData:FE,AxiosHeaders:WE,HttpStatusCode:XE,formToJSON:ZE,getAdapter:JE,mergeConfig:ez}=rt,TA=j.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,NA=j.main`
  flex: 1;
  background-color: ${({theme:a})=>a.colors.background};
  padding: 60px 20px;
`,RA=j.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: ${({theme:a})=>a.breakpoints.tablet}) {
    grid-template-columns: 1fr 1.5fr;
  }
`,_A=j.div`
  h2 {
    color: ${({theme:a})=>a.colors.navy};
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  p {
    color: #666;
    margin-bottom: 40px;
    line-height: 1.6;
  }
`,ux=j.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;
  
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(201, 168, 76, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:a})=>a.colors.gold};
    flex-shrink: 0;
  }
  
  .details {
    h4 {
      margin: 0 0 5px 0;
      color: ${({theme:a})=>a.colors.navy};
      font-size: 1.1rem;
    }
    
    p {
      margin: 0;
      color: #666;
      font-size: 0.95rem;
    }
    
    a {
      color: #666;
      text-decoration: none;
      &:hover {
        color: ${({theme:a})=>a.colors.gold};
      }
    }
  }
`,OA=j.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
`,Zd=j.div`
  margin-bottom: 20px;
`,Jd=j.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({theme:a})=>a.colors.navy};
  font-size: 0.9rem;
`,dx=j.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: ${({theme:a})=>a.fonts.body};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({theme:a})=>a.colors.gold};
    box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.1);
  }
`,MA=j.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: ${({theme:a})=>a.fonts.body};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({theme:a})=>a.colors.gold};
    box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.1);
  }
`,DA=j.div`
  background: #e8f5e9;
  color: #2e7d32;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
`,HA=j.div`
  background: #ffebee;
  color: #c62828;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
`,BA=()=>{const[a,l]=S.useState({name:"",phone:"",message:""}),[c,s]=S.useState("idle"),d=p=>{l({...a,[p.target.name]:p.target.value})},f=async p=>{p.preventDefault(),s("submitting");try{await rt.post("/api/leads/public",a),s("success"),l({name:"",phone:"",message:""}),setTimeout(()=>s("idle"),5e3)}catch(x){console.error("Error submitting contact form:",x),s("error"),setTimeout(()=>s("idle"),5e3)}};return i.jsx(TA,{children:i.jsx(NA,{children:i.jsxs(RA,{children:[i.jsxs(_A,{children:[i.jsx("h2",{children:"Get In Touch"}),i.jsx("p",{children:"Have questions about our Smart QR tags or enterprise security solutions? Fill out the form, and our team will get back to you shortly."}),i.jsxs(ux,{children:[i.jsx("div",{className:"icon",children:i.jsx(Ys,{size:20})}),i.jsxs("div",{className:"details",children:[i.jsx("h4",{children:"Phone / WhatsApp"}),i.jsx("p",{children:i.jsx("a",{href:"tel:+919412300716",children:"+91 94123 00716"})})]})]}),i.jsxs(ux,{children:[i.jsx("div",{className:"icon",children:i.jsx(vl,{size:20})}),i.jsxs("div",{className:"details",children:[i.jsx("h4",{children:"Email"}),i.jsx("p",{children:i.jsx("a",{href:"mailto:Info@tarkshyasolution.in",children:"Info@tarkshyasolution.in"})})]})]})]}),i.jsxs(OA,{children:[c==="success"&&i.jsx(DA,{children:"Thank you! Your message has been sent successfully. We will contact you soon."}),c==="error"&&i.jsx(HA,{children:"Something went wrong. Please try again or contact us directly via phone."}),i.jsxs("form",{onSubmit:f,children:[i.jsxs(Zd,{children:[i.jsx(Jd,{children:"Full Name"}),i.jsx(dx,{type:"text",name:"name",required:!0,placeholder:"John Doe",value:a.name,onChange:d,disabled:c==="submitting"})]}),i.jsxs(Zd,{children:[i.jsx(Jd,{children:"Phone Number"}),i.jsx(dx,{type:"tel",name:"phone",required:!0,placeholder:"+91 00000 00000",value:a.phone,onChange:d,disabled:c==="submitting"})]}),i.jsxs(Zd,{children:[i.jsx(Jd,{children:"Message / Inquiry Details"}),i.jsx(MA,{name:"message",required:!0,placeholder:"How can we help you today?",value:a.message,onChange:d,disabled:c==="submitting"})]}),i.jsx(Ue,{type:"submit",variant:"primary",style:{width:"100%",padding:"15px"},disabled:c==="submitting",children:c==="submitting"?"Sending...":"Send Message"})]})]})]})})})},UA=pt`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`,LA=pt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`,$A=j.div`
  background: #fcfcfc;
  color: #0b1a33;
`,qA=j.section`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  padding: 160px 20px 100px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
    animation: ${LA} 10s ease-in-out infinite;
  }

  .content {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    animation: ${UA} 0.8s ease-out;

    h1 {
      color: white;
      font-size: 4.5rem;
      font-weight: 900;
      margin-bottom: 25px;
      line-height: 1.1;
      letter-spacing: -2px;
      span { color: #C9A84C; }
      @media (max-width: 768px) { font-size: 3rem; }
    }

    p {
      font-size: 1.4rem;
      color: rgba(255,255,255,0.7);
      margin-bottom: 50px;
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`,YA=j.section`
  padding: 120px 20px;
  background: ${a=>a.bg==="light"?"#f8fafc":a.bg==="dark"?"#0b1a33":"white"};
`,fx=j.div`
  max-width: 1400px;
  margin: 0 auto;
`,GA=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;
`,VA=j.div`
  background: white;
  border-radius: 32px;
  border: 1px solid #eee;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.1);
    border-color: #C9A84C;

    .card-image img {
      transform: scale(1.05);
    }
  }

  .card-image {
    height: 250px;
    background: #f0f4f8;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 80px;
      height: 80px;
      color: rgba(11, 26, 51, 0.1);
      transition: all 0.5s ease;
    }

    .industry-badge {
      position: absolute;
      top: 20px;
      left: 20px;
      background: #C9A84C;
      color: #0b1a33;
      padding: 8px 16px;
      border-radius: 30px;
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  &:hover .card-image svg {
    color: #C9A84C;
    transform: scale(1.1);
  }

  .card-content {
    padding: 40px;

    h3 {
      font-size: 1.8rem;
      font-weight: 900;
      margin-bottom: 20px;
      color: #0b1a33;
    }

    p {
      font-size: 1.1rem;
      color: #666;
      line-height: 1.7;
      margin-bottom: 30px;
    }

    .metrics {
      display: flex;
      gap: 20px;
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;

      .metric {
        flex: 1;
        
        .value {
          font-size: 1.5rem;
          font-weight: 900;
          color: #C9A84C;
          margin-bottom: 5px;
        }
        
        .label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
        }
      }
    }

    .read-more {
      color: #0b1a33;
      font-weight: 800;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s;

      &:hover {
        color: #C9A84C;
        gap: 15px;
      }
    }
  }
`,QA=j.section`
  background: #0b1a33;
  padding: 100px 20px;
  text-align: center;
  color: white;

  h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 20px;
    span { color: #C9A84C; }
  }

  p {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`,IA=()=>{const a=[{id:1,industry:"Logistics & Fleet",title:"Securing 50,000+ Vehicles with Smart QR",description:"How a top logistics company eliminated manual entry and improved emergency response times using Tarkshya's proprietary vehicle tags.",icon:i.jsx(Hf,{}),metrics:[{value:"50k+",label:"Vehicles Secured"},{value:"40%",label:"Faster Response"}]},{id:2,industry:"Corporate & Govt",title:"Modernizing Employee Identity",description:"A Fortune 500 company deployed Tarkshya's secure medical & emergency clusters for seamless privacy-first identity management.",icon:i.jsx(l1,{}),metrics:[{value:"100%",label:"Privacy Compliance"},{value:"12k+",label:"Employees"}]},{id:3,industry:"FMCG",title:"Defeating Counterfeit Products",description:"An FMCG giant implemented our unit-level tracking and blockchain-secure identity validation to build consumer trust.",icon:i.jsx(Je,{}),metrics:[{value:"99%",label:"Counterfeit Drop"},{value:"2M+",label:"Scans/Month"}]},{id:4,industry:"Education",title:"Campus Safety & Student IDs",description:"A prominent university network integrated Smart Student IDs with instant parent alerts and bus fleet tracking protocols.",icon:i.jsx(Ls,{}),metrics:[{value:"25k+",label:"Students Protected"},{value:"24/7",label:"Real-time Alerts"}]}];return i.jsxs($A,{children:[i.jsx(qA,{children:i.jsxs("div",{className:"content",children:[i.jsxs("h1",{children:["Enterprise ",i.jsx("span",{children:"Case Studies"})]}),i.jsx("p",{children:"Discover how leading organizations leverage Tarkshya's Smart QR ecosystem to secure their assets, personnel, and brand identity."})]})}),i.jsx(YA,{bg:"light",children:i.jsx(fx,{children:i.jsx(GA,{children:a.map(l=>i.jsxs(VA,{children:[i.jsxs("div",{className:"card-image",children:[i.jsx("span",{className:"industry-badge",children:l.industry}),l.icon]}),i.jsxs("div",{className:"card-content",children:[i.jsx("h3",{children:l.title}),i.jsx("p",{children:l.description}),i.jsx("div",{className:"metrics",children:l.metrics.map((c,s)=>i.jsxs("div",{className:"metric",children:[i.jsx("div",{className:"value",children:c.value}),i.jsx("div",{className:"label",children:c.label})]},s))}),i.jsxs(Se,{to:"/contact",className:"read-more",children:["READ FULL STORY ",i.jsx(dl,{size:18})]})]})]},l.id))})})}),i.jsx(QA,{children:i.jsxs(fx,{children:[i.jsxs("h2",{children:["Ready to ",i.jsx("span",{children:"Transform"})," Your Enterprise?"]}),i.jsx("p",{children:"Schedule a strategy session with our experts to discuss your custom requirements and implementation roadmap."}),i.jsx(Ue,{as:Se,to:"/contact",variant:"primary",style:{padding:"18px 50px",fontSize:"1rem",background:"#C9A84C",color:"#0b1a33"},children:"BOOK STRATEGY SESSION"})]})})]})},KA=j.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
`,PA=j.section`
  background-color: #0b1a33;
  color: white;
  padding: 80px 20px 120px;
  position: relative;
  overflow: hidden;

  /* Curved bottom */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #f8f9fa;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    transform: scaleX(1.5);
  }
`,FA=j.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({theme:a})=>a.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`,WA=j.div`
  flex: 1;
  max-width: 600px;

  h1 {
    font-size: 4rem;
    font-family: ${({theme:a})=>a.fonts.display};
    font-weight: 900;
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: ${({theme:a})=>a.breakpoints.tablet}) {
    h1 {
      font-size: 3rem;
    }
  }
`,XA=j.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .icon-container {
    background: rgba(255, 255, 255, 0.05);
    padding: 40px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    position: relative;
    
    svg {
      color: ${({theme:a})=>a.colors.gold};
    }

    &:nth-child(2) {
      transform: translateY(30px);
      padding: 30px;
      svg {
        color: #fff;
      }
    }
  }

  @media (max-width: ${({theme:a})=>a.breakpoints.tablet}) {
    margin-top: 40px;
  }
`,ZA=j.section`
  padding: 60px 20px 100px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`,JA=j.div`
  margin-bottom: 60px;

  h2 {
    font-size: 3rem;
    font-family: ${({theme:a})=>a.fonts.display};
    font-weight: 900;
    color: #0b1a33;
    margin-bottom: 15px;

    span {
      color: ${({theme:a})=>a.colors.gold};
    }
  }

  p {
    font-size: 1.1rem;
    color: #555;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: ${({theme:a})=>a.breakpoints.tablet}) {
    h2 {
      font-size: 2.5rem;
    }
  }
`,eE=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
`,tE=j.div`
  background: white;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    border-color: ${({theme:a})=>a.colors.gold};
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
    background: #f8f9fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    color: ${({theme:a})=>a.colors.gold};
    transition: all 0.3s ease;
  }

  &:hover .icon-wrapper {
    background: ${({theme:a})=>a.colors.navy};
    color: white;
  }

  h3 {
    font-size: 1.5rem;
    color: #0b1a33;
    margin-bottom: 15px;
    font-weight: 800;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
    flex-grow: 1;
  }
`,nE=()=>{const a=[{title:"Medical Help",description:"Quick access to Medical Help services whenever you need urgent assistance.",icon:i.jsx(m3,{size:40}),link:"/contact"},{title:"Police",description:"Quick access to Police services whenever you need urgent assistance.",icon:i.jsx(Je,{size:40}),link:"/contact"},{title:"RSA",description:"Quick access to RSA services whenever you need urgent assistance.",icon:i.jsx(N3,{size:40}),link:"/contact"},{title:"Fire Station",description:"Quick access to Fire Station services whenever you need urgent assistance.",icon:i.jsx(sw,{size:40}),link:"/contact"},{title:"Helpline",description:"Quick access to Helpline services whenever you need urgent assistance.",icon:i.jsx(qs,{size:40}),link:"/contact"},{title:"SOS",description:"Quick access to SOS services whenever you need urgent assistance.",icon:i.jsx(bw,{size:40}),link:"/contact"}];return i.jsxs(KA,{children:[i.jsx(PA,{children:i.jsxs(FA,{children:[i.jsxs(WA,{children:[i.jsx("h1",{children:"Emergency"}),i.jsx("p",{children:"Access immediate medical, police, fire, or roadside support through SOS emergency helplines for professional."})]}),i.jsxs(XA,{children:[i.jsx("div",{className:"icon-container",children:i.jsx(jj,{size:80})}),i.jsx("div",{className:"icon-container",children:i.jsx(d3,{size:60})})]})]})}),i.jsxs(ZA,{children:[i.jsxs(JA,{children:[i.jsxs("h2",{children:[i.jsx("span",{children:"Emergency"})," Services"]}),i.jsx("p",{children:"Quick access to essential emergency services — because every second counts when it matters most."})]}),i.jsx(eE,{children:a.map((l,c)=>i.jsxs(tE,{children:[i.jsx("div",{className:"icon-wrapper",children:l.icon}),i.jsx("h3",{children:l.title}),i.jsx("p",{children:l.description}),i.jsx(Ue,{as:Se,to:l.link,variant:"primary",style:{padding:"12px 35px",width:"100%"},children:"Visit Now"})]},c))})]})]})},If=pt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,px=j.div`
  padding: 120px 0 80px;
  min-height: 90vh;
  background: #f8f9fa;
  background-image: radial-gradient(circle at 10% 20%, rgba(11, 26, 51, 0.03) 0%, transparent 80%);
`,aE=j.div`
  margin-bottom: 50px;
  animation: ${If} 0.6s ease-out;
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
`,iE=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  animation: ${If} 0.8s ease-out;
  @media (min-width: 1024px) {
    grid-template-columns: 1.8fr 1fr;
  }
`,rE=j.div`
  background: white;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.04);
`,lE=j.div`
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
`,oE=j.div`
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
`,sE=j.div`
  text-align: center;
  padding: 100px 20px;
  max-width: 600px;
  margin: 0 auto;
  animation: ${If} 0.8s ease-out;

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
`,cE=()=>{const{cart:a,removeFromCart:l,updateQuantity:c,cartTotal:s,clearCart:d}=Sl(),f=Na(),p=window.location.hostname==="localhost"?"http://localhost:5001":"",x=()=>{f("/checkout")};return a.length===0?i.jsx(px,{children:i.jsxs(sE,{children:[i.jsx("div",{className:"icon-glow",children:i.jsx(xs,{size:60})}),i.jsx("h2",{children:"Your Cart is Empty"}),i.jsx("p",{children:"It looks like you haven't added any Smart Safety IDs to your cart yet. Protect your world today."}),i.jsx(Ue,{as:Se,to:"/",size:"large",children:"EXPLORE SMART TAGS"})]})}):i.jsx(px,{children:i.jsxs(Fe,{children:[i.jsxs(aE,{children:[i.jsxs("div",{className:"breadcrumb",children:["SHOPPING ",i.jsx("span",{children:"/"})," ",i.jsx("span",{className:"active",children:"CART"})]}),i.jsx("h1",{children:"Shopping Cart"})]}),i.jsxs(iE,{children:[i.jsx(rE,{children:a.map(m=>i.jsxs(lE,{children:[i.jsx("div",{className:"img-box",children:i.jsx("img",{src:m.image?`${p}${m.image}`:"/assets/car_qr_tag_mockup_1776107740073.png",alt:m.name})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:m.name}),i.jsxs("div",{className:"badge",children:[i.jsx(kt,{size:14})," SECURE QR ID"]})]}),i.jsxs("div",{className:"qty-control",children:[i.jsx("button",{onClick:()=>c(m.productId,m.quantity-1),disabled:m.quantity<=1,children:i.jsx(qw,{size:18})}),i.jsx("span",{children:m.quantity}),i.jsx("button",{onClick:()=>c(m.productId,m.quantity+1),children:i.jsx(Fw,{size:18})})]}),i.jsxs("div",{className:"price",children:["₹",m.price*m.quantity]}),i.jsx("button",{className:"remove",onClick:()=>l(m.productId),children:i.jsx(b3,{size:18})})]},m.productId))}),i.jsxs(oE,{children:[i.jsxs("h3",{children:[i.jsx(jl,{})," Order Summary"]}),i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Subtotal"}),i.jsxs("span",{children:["₹",s]})]}),i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Shipping"}),i.jsx("span",{style:{color:"#C9A84C"},children:"FREE"})]}),i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Platform Fee"}),i.jsx("span",{children:"₹0.00"})]}),i.jsxs("div",{className:"row total",children:[i.jsx("span",{children:"Total"}),i.jsxs("span",{children:["₹",s]})]}),i.jsxs("button",{onClick:x,style:{width:"100%",marginTop:"35px",padding:"22px",fontSize:"1.1rem",borderRadius:"20px",background:"linear-gradient(135deg, #C9A84C 0%, #D4B86A 100%)",color:"#0b1a33",boxShadow:"0 15px 30px rgba(201,168,76,0.2)",border:"none",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:900,transition:"all 0.3s ease"},children:["PROCEED TO CHECKOUT ",i.jsx(dl,{size:22,style:{marginLeft:"12px"}})]}),i.jsxs("div",{className:"protection",children:[i.jsx(kt,{size:40}),i.jsx("p",{children:"Your purchase is protected by Tarkshya Security Protocol. 100% data privacy guaranteed."})]})]})]})]})})},uE=pt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,dE=j.div`
  padding: 120px 0 80px;
  background: #f8f9fa;
  min-height: 90vh;
  background-image: radial-gradient(circle at 90% 10%, rgba(201, 168, 76, 0.05) 0%, transparent 60%);
`,fE=j.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  animation: ${uE} 0.6s ease-out;
  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`,pE=j.div`
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
`,Ki=j.div`
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
`,hE=j.div`
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
`,mE=j.div`
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
`,gE=j.div`
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
`,xE=j.div`
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
`,yE=()=>{const{cart:a,cartTotal:l,clearCart:c}=Sl(),s=Na(),[d,f]=S.useState(!1),[p,x]=S.useState({name:"",email:"",phone:"",address:"",city:"",pincode:""});S.useEffect(()=>{const y=localStorage.getItem("admin_token"),v=localStorage.getItem("user_profile");if(!y){Ie.error("Please login to complete your purchase"),s("/login?redirect=checkout");return}if(v)try{const k=JSON.parse(v);x(D=>({...D,name:k.name||"",email:k.email||"",phone:k.phone||""}))}catch(k){console.error("Invalid user profile in localStorage",k)}},[s]);const m=()=>new Promise(y=>{const v=document.createElement("script");v.src="https://checkout.razorpay.com/v1/checkout.js",v.onload=()=>y(!0),v.onerror=()=>y(!1),document.body.appendChild(v)}),g=async y=>{if(y&&y.preventDefault(),a.length!==0){f(!0);try{if(!await m()){Ie.error("Razorpay SDK failed to load. Are you online?"),f(!1);return}const D=(await et.get("/public/settings")).data.settings?.RAZORPAY_KEY_ID;if(!D)throw new Error("Razorpay is not configured on the server");const A=await et.post("/payments/create-order",{amount:l,receipt:`receipt_${Date.now()}`});if(!A.data.success)throw new Error(A.data.error||"Order creation failed");const{order:R}=A.data,E={key:D,amount:R.amount,currency:R.currency,name:"V-KAWACH Safety IDs",description:"Secure Payment for Smart Safety IDs",image:"/assets/new_logo.png",order_id:R.id,handler:async $=>{try{const K=await et.post("/payments/verify",{razorpay_order_id:$.razorpay_order_id,razorpay_payment_id:$.razorpay_payment_id,razorpay_signature:$.razorpay_signature,customerData:{...p,shippingAddress:`${p.address}, ${p.city} - ${p.pincode}`},cart:a,totalAmount:l});K.data.success?(Ie.success("Payment Successful!"),c(),s(`/order-success/${K.data.order.orderNumber}`)):Ie.error("Payment verification failed. Please contact support.")}catch(K){console.error("Verification Error:",K),Ie.error("Payment verification error. Please check your transaction.")}},prefill:{name:p.name,email:p.email,contact:p.phone},notes:{address:p.address},theme:{color:"#0b1a33"}},N=new window.Razorpay(E);N.on("payment.failed",function($){Ie.error("Payment Failed: "+$.error.description)}),N.open()}catch(v){console.error(v),Ie.error(v.message||"Failed to initiate payment")}finally{f(!1)}}};return i.jsx(dE,{children:i.jsxs(Fe,{children:[i.jsx("div",{style:{marginBottom:"40px"},children:i.jsxs("button",{onClick:()=>s("/cart"),style:{background:"none",border:"none",color:"#0b1a33",display:"flex",alignItems:"center",gap:"8px",fontWeight:900,cursor:"pointer",opacity:.6},children:[i.jsx(Of,{size:20})," RETURN TO CART"]})}),i.jsxs(fE,{children:[i.jsx("div",{children:i.jsxs(pE,{children:[i.jsxs("h2",{children:[i.jsx(Hf,{size:32,color:"#C9A84C"})," Shipping Logistics"]}),i.jsxs("form",{onSubmit:g,children:[i.jsxs(Ki,{children:[i.jsx("label",{children:"Consignee Name"}),i.jsx("input",{required:!0,type:"text",placeholder:"Full name of recipient",value:p.name,onChange:y=>x({...p,name:y.target.value})})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"25px"},children:[i.jsxs(Ki,{children:[i.jsx("label",{children:"Digital Contact"}),i.jsx("input",{required:!0,type:"email",placeholder:"email@tarkshya.in",value:p.email,onChange:y=>x({...p,email:y.target.value})})]}),i.jsxs(Ki,{children:[i.jsx("label",{children:"Secure Phone"}),i.jsx("input",{required:!0,type:"tel",placeholder:"+91 00000 00000",value:p.phone,onChange:y=>x({...p,phone:y.target.value})})]})]}),i.jsxs(Ki,{children:[i.jsx("label",{children:"Destination Address"}),i.jsx("textarea",{required:!0,rows:4,placeholder:"Detailed building, street and landmark info",value:p.address,onChange:y=>x({...p,address:y.target.value})})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"25px"},children:[i.jsxs(Ki,{children:[i.jsx("label",{children:"Urban Center"}),i.jsx("input",{required:!0,type:"text",placeholder:"City / District",value:p.city,onChange:y=>x({...p,city:y.target.value})})]}),i.jsxs(Ki,{children:[i.jsx("label",{children:"Postal Zone"}),i.jsx("input",{required:!0,type:"text",placeholder:"6-digit PIN",value:p.pincode,onChange:y=>x({...p,pincode:y.target.value})})]})]})]})]})}),i.jsxs(hE,{children:[i.jsx("h3",{children:"Manifest Summary"}),a.map(y=>i.jsxs(mE,{children:[i.jsxs("div",{className:"name",children:[y.name," ",i.jsxs("span",{children:["x ",y.quantity]})]}),i.jsxs("div",{className:"price",children:["₹",y.price*y.quantity]})]},y.productId)),i.jsxs(gE,{children:[i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Items Subtotal"}),i.jsxs("span",{children:["₹",l]})]}),i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Secure Logistics"}),i.jsx("span",{style:{color:"#C9A84C"},children:"COMPLIMENTARY"})]}),i.jsxs("div",{className:"grand-total",children:[i.jsx("span",{children:"Total"}),i.jsxs("span",{children:["₹",l]})]})]}),i.jsxs(xE,{children:[i.jsxs("div",{className:"title",children:[i.jsx(kt,{size:20})," Secure Online Payment"]}),i.jsx("p",{children:"Your transaction is protected with industry-standard encryption. Pay securely via Razorpay (UPI, Cards, NetBanking)."})]}),i.jsxs(Ue,{onClick:g,disabled:d||a.length===0,style:{width:"100%",marginTop:"45px",background:"#C9A84C",color:"#0b1a33",height:"70px",fontSize:"1.3rem",borderRadius:"24px",boxShadow:"0 15px 30px rgba(201, 168, 76, 0.3)"},children:[d?"SECURING ORDER...":"FINALIZE SHIPMENT"," ",i.jsx(An,{size:24,style:{marginLeft:"10px"}})]}),i.jsxs("div",{style:{marginTop:"35px",display:"flex",alignItems:"center",gap:"12px",justifyContent:"center",opacity:.4,fontSize:"0.85rem",fontWeight:600},children:[i.jsx(kt,{size:18})," END-TO-END ENCRYPTED TRANSACTION"]})]})]})]})})},bE=pt`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,vE=pt`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,jE=j.div`
  padding: 140px 0 100px;
  text-align: center;
  min-height: 90vh;
  background: #f8f9fa;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(39, 174, 96, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(201, 168, 76, 0.03) 0%, transparent 50%);
`,wE=j.div`
  max-width: 700px;
  margin: 0 auto;
  background: white;
  padding: 80px 50px;
  border-radius: 48px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.06);
  position: relative;
  overflow: hidden;
  animation: ${bE} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 8px;
    background: linear-gradient(90deg, #27ae60, #2ecc71);
  }
`,SE=j.div`
  width: 120px;
  height: 120px;
  background: #f0fdf4;
  color: #27ae60;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 40px;
  animation: ${vE} 3s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(39, 174, 96, 0.1);
`,CE=j.div`
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
`,AE=j.div`
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
`,EE=()=>{const{orderNumber:a}=ir();return i.jsx(jE,{children:i.jsx(Fe,{children:i.jsxs(wE,{children:[i.jsx(SE,{children:i.jsx(gs,{size:60,strokeWidth:3})}),i.jsxs("h1",{style:{fontSize:"3rem",fontWeight:900,color:"#0b1a33",marginBottom:"15px",letterSpacing:"-1px"},children:["Mission ",i.jsx("span",{style:{color:"#27ae60"},children:"Accomplished"})]}),i.jsx("p",{style:{color:"#666",fontSize:"1.2rem",marginBottom:"30px",fontWeight:500},children:"Your Smart Safety ecosystem has been successfully provisioned."}),i.jsxs(CE,{children:["#",a]}),i.jsxs(AE,{children:[i.jsxs("h4",{children:[i.jsx(zs,{size:24,color:"#C9A84C"})," Fulfillment Protocol"]}),i.jsxs("div",{className:"step",children:[i.jsx("span",{children:"01"})," Verification call from Jiyo India HQ within 4 hours."]}),i.jsxs("div",{className:"step",children:[i.jsx("span",{children:"02"})," QR Tag laser engraving and quality assurance."]}),i.jsxs("div",{className:"step",children:[i.jsx("span",{children:"03"})," Dispatch via priority secure logistics."]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[i.jsxs(Ue,{as:Se,to:"/",variant:"secondary",style:{height:"60px",borderRadius:"18px"},children:[i.jsx(Of,{size:20,style:{marginRight:"10px"}})," RETURN HOME"]}),i.jsxs(Ue,{as:Se,to:"/dashboard",style:{height:"60px",borderRadius:"18px",background:"#C9A84C",color:"#0b1a33"},children:["PROCEED TO DASHBOARD ",i.jsx(i3,{size:20,style:{marginLeft:"10px"}})]})]}),i.jsxs("div",{style:{marginTop:"50px",borderTop:"1px solid #eee",paddingTop:"30px",display:"flex",justifyContent:"center",gap:"30px",opacity:.5},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",fontWeight:700},children:[i.jsx(kt,{size:16})," 100% SECURE"]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",fontWeight:700},children:[i.jsx(Mf,{size:16})," DOWNLOAD INVOICE"]})]})]})})})},zE=j.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,kE=j.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({theme:a})=>a.colors.gold};
  color: ${({theme:a})=>a.colors.navy};
  border: none;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 25px rgba(201, 168, 76, 0.4);
  }
`,TE=j.div`
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform-origin: bottom right;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  @media (max-width: 480px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    margin-bottom: 0;
  }
`,NE=j.div`
  background: ${({theme:a})=>a.colors.navy};
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 1.1rem;
    
    .status-dot {
      width: 10px;
      height: 10px;
      background: #4ade80;
      border-radius: 50%;
      box-shadow: 0 0 10px #4ade80;
    }
  }

  .actions button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 1;
    }
  }
`,RE=j.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,hx=j.div`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 15px;
  font-size: 0.95rem;
  line-height: 1.5;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  
  &.user {
    background: ${({theme:a})=>a.colors.gold};
    color: ${({theme:a})=>a.colors.navy};
    align-self: flex-end;
    border-bottom-right-radius: 4px;
    
    svg {
      display: none;
    }
  }
  
  &.bot {
    background: white;
    color: #334155;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
    border: 1px solid #f1f5f9;
  }

  .icon {
    width: 24px;
    height: 24px;
    background: ${({theme:a})=>a.colors.navy};
    color: ${({theme:a})=>a.colors.gold};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`,_E=j.form`
  display: flex;
  padding: 15px;
  background: white;
  border-top: 1px solid #f1f5f9;
  gap: 10px;

  input {
    flex: 1;
    padding: 12px 15px;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    outline: none;
    font-size: 0.95rem;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({theme:a})=>a.colors.gold};
    }
  }

  button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${({theme:a})=>a.colors.navy};
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.2s;
    
    &:hover {
      background: #1a365d;
    }
    
    &:disabled {
      background: #cbd5e1;
      cursor: not-allowed;
    }
  }
`,OE=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  
  button {
    background: white;
    border: 1px solid ${({theme:a})=>a.colors.gold};
    color: ${({theme:a})=>a.colors.navy};
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      background: ${({theme:a})=>a.colors.gold};
    }
  }
`;function ME(){const[a,l]=S.useState(!1),[c,s]=S.useState([{role:"bot",content:"Hi! Welcome to V-Kawach. How can I help you secure your valuables today?"}]),[d,f]=S.useState(""),[p,x]=S.useState(!1),m=S.useRef(null),g=()=>{m.current?.scrollIntoView({behavior:"smooth"})};S.useEffect(()=>{g()},[c]);const y=async(v,k=null)=>{v&&v.preventDefault();const D=k||d;if(!D.trim())return;const A={role:"user",content:D},R=[...c,A];s(R),f(""),x(!0);try{const E=R.slice(-5),N=await et.post("/chatbot/message",{message:D,history:E});s($=>[...$,{role:"bot",content:N.data.reply}])}catch(E){console.error(E),s(N=>[...N,{role:"bot",content:"I'm sorry, I am having trouble connecting right now. Please try again later."}])}finally{x(!1)}};return i.jsxs(zE,{children:[a&&i.jsxs(TE,{children:[i.jsxs(NE,{children:[i.jsxs("div",{className:"title",children:[i.jsx(Ad,{size:22,color:"#C9A84C"}),"V-Kawach Assistant",i.jsx("div",{className:"status-dot"})]}),i.jsx("div",{className:"actions",children:i.jsx("button",{onClick:()=>l(!1),children:i.jsx(Lw,{size:18})})})]}),i.jsxs(RE,{children:[c.map((v,k)=>i.jsxs(hx,{className:v.role,children:[v.role==="bot"&&i.jsx("div",{className:"icon",children:i.jsx(Ad,{size:14})}),i.jsx("div",{children:v.content})]},k)),c.length===1&&i.jsxs(OE,{children:[i.jsx("button",{onClick:()=>y(null,"I want to buy a QR Tag"),children:"Buy QR Tag"}),i.jsx("button",{onClick:()=>y(null,"How does Call Masking work?"),children:"Call Masking Info"}),i.jsx("button",{onClick:()=>y(null,"Talk to support"),children:"Support"})]}),p&&i.jsxs(hx,{className:"bot",children:[i.jsx("div",{className:"icon",children:i.jsx(Ad,{size:14})}),i.jsxs("div",{children:[i.jsx(Sw,{size:16,className:"fa-spin",style:{animation:"spin 1s linear infinite"}})," Typing..."]})]}),i.jsx("div",{ref:m})]}),i.jsxs(_E,{onSubmit:y,children:[i.jsx("input",{type:"text",placeholder:"Type your message...",value:d,onChange:v=>f(v.target.value),disabled:p}),i.jsx("button",{type:"submit",disabled:p||!d.trim(),children:i.jsx(f1,{size:18})})]})]}),!a&&i.jsx(kE,{onClick:()=>l(!0),children:i.jsx(d1,{size:28})})]})}function DE(){return i.jsxs(sj,{theme:pj,children:[i.jsx(fj,{}),i.jsx(M3,{children:i.jsx(O3,{children:i.jsxs(J2,{children:[i.jsx(OC,{}),i.jsxs(T2,{children:[i.jsxs(Pe,{path:"/",element:i.jsx(oS,{}),children:[i.jsx(Pe,{index:!0,element:i.jsx(g4,{})}),i.jsx(Pe,{path:"smart-qr",element:i.jsx(S4,{})}),i.jsx(Pe,{path:"cloud-monitoring",element:i.jsx(N4,{})}),i.jsx(Pe,{path:"gps-tracking",element:i.jsx(D4,{})}),i.jsx(Pe,{path:"social-initiative",element:i.jsx($4,{})}),i.jsx(Pe,{path:"b2b-solutions",element:i.jsx(o8,{})}),i.jsx(Pe,{path:"category/:id",element:i.jsx(vC,{})}),i.jsx(Pe,{path:"product/:id",element:i.jsx(_C,{})}),i.jsx(Pe,{path:"service/:id",element:i.jsx(WC,{})}),i.jsx(Pe,{path:"cart",element:i.jsx(cE,{})}),i.jsx(Pe,{path:"checkout",element:i.jsx(yE,{})}),i.jsx(Pe,{path:"order-success/:orderNumber",element:i.jsx(EE,{})}),i.jsx(Pe,{path:"login",element:i.jsx(I4,{})}),i.jsx(Pe,{path:"signup",element:i.jsx(Z4,{})}),i.jsx(Pe,{path:"contact",element:i.jsx(BA,{})}),i.jsx(Pe,{path:"case-studies",element:i.jsx(IA,{})}),i.jsx(Pe,{path:"emergency",element:i.jsx(nE,{})})]}),i.jsx(Pe,{path:"/dashboard",element:i.jsx(B8,{})}),i.jsx(Pe,{path:"/admin/dashboard",element:i.jsx(w8,{})}),i.jsx(Pe,{path:"/scan/:id",element:i.jsx(Ig,{})}),i.jsx(Pe,{path:"/tag/:id",element:i.jsx(Ig,{})}),i.jsx(Pe,{path:"/banner/:id",element:i.jsx(VC,{})})]}),i.jsx(ME,{})]})})})]})}Tv.createRoot(document.getElementById("root")).render(i.jsx(S.StrictMode,{children:i.jsx(DE,{})}));
