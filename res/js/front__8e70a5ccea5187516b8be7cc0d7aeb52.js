!function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'")
;throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){return i(t[a][1][e]||e)},l,l.exports,e,t,n,r)}return n[a].exports}
for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("@keybr/debug"),i=e("@keybr/thirdparty/lib/google-ads"),o=e("@keybr/thirdparty/lib/google-analytics"),a=e("./telemetry");n.init=function(e){r.RemoteLog.init(),e();var t=i.load()
;o.init(function(e){t.then(function(){},function(){})}),a.meterTrackers(t)}},{"./telemetry":3,"@keybr/debug":6,"@keybr/thirdparty/lib/google-ads":4,"@keybr/thirdparty/lib/google-analytics":5}],
2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e("./init")},{"./init":1}],3:[function(e,t,n){"use strict";function r(e){
return i.request("POST","/telemetry").sendJson(e)}Object.defineProperty(n,"__esModule",{value:!0});var i=e("@keybr/request");window,n.meterTrackers=function(e){return Promise.all([e.then(function(e){
return e?"ads_enabled":"ads_disabled"},function(e){return"ads_blocked"})]).then(function(e){return r(e)})}},{"@keybr/request":15}],4:[function(e,t,n){"use strict";function r(){
return["<h1>Please disable ad-blocker!</h1>","<p>You may not like this ad, but it supports the developer and keeps this site free.</p>"].join("\n")}Object.defineProperty(n,"__esModule",{value:!0})
;var i=e("@keybr/dom/lib/dom"),o=e("@keybr/timer");n.load=function(){return new Promise(function(e,t){o.systemTimer.setTimeout(function(){
var n=i.any(document,".Supporter iframe"),o=i.any(document,".Supporter-placeholder");o.length?n.length?(i.setStyle(o,"visibility","hidden"),i.empty(o),e(!0)):(i.setStyle(o,"visibility","visible"),
i.setHtml(o,r()),t(new Error("Ad blocker detected"))):e(!1)},1e3)})}},{"@keybr/dom/lib/dom":9,"@keybr/timer":16}],5:[function(e,t,n){"use strict";function r(e){return window[e]}
Object.defineProperty(n,"__esModule",{value:!0}),n.init=function(e){var t=r("GoogleAnalyticsObject");if("string"==typeof t){var n=r(t);"function"==typeof n&&n(e)}}},{}],6:[function(e,t,n){"use strict"
;function r(e){e.filename&&-1!=e.filename.indexOf(c)&&i(e)}function i(e){var t=o(e.error);s.request("POST","/log").sendJson({userAgent:l,message:e.message,uri:e.filename,line:e.lineno,column:e.colno,
stack:t}).catch(function(e){console.error(e)})}function o(e){if(e)try{return a.parse(e).map(function(e){return{uri:e.fileName,name:e.functionName,line:e.lineNumber,column:e.columnNumber}})}catch(t){
console.error(e)}return[]}Object.defineProperty(n,"__esModule",{value:!0});var a=e("error-stack-parser"),s=e("@keybr/request"),u=window,c=u.document.domain,l=u.navigator.userAgent;!function(e){
e.init=function(){u.addEventListener("error",r),e.init=function(){}}}(n.RemoteLog||(n.RemoteLog={}))},{"@keybr/request":15,"error-stack-parser":7}],7:[function(e,t,n){!function(r,i){"use strict"
;"function"==typeof define&&define.amd?define("error-stack-parser",["stackframe"],i):"object"==typeof n?t.exports=i(e("stackframe")):r.ErrorStackParser=i(r.StackFrame)}(this,function(e){"use strict"
;var t=/(^|@)\S+\:\d+/,n=/^\s*at .*(\S+\:\d+|\(native\))/m,r=/^(eval@)?(\[native code\])?$/;return{parse:function(e){if(void 0!==e.stacktrace||void 0!==e["opera#sourceloc"])return this.parseOpera(e)
;if(e.stack&&e.stack.match(n))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){
if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g,""));return[t[1],t[2]||void 0,t[3]||void 0]},parseV8OrIE:function(t){
return t.stack.split("\n").filter(function(e){return!!e.match(n)},this).map(function(t){t.indexOf("(eval ")>-1&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""))
;var n=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),r=this.extractLocation(n.pop()),i=n.join(" ")||void 0,o=["eval","<anonymous>"].indexOf(r[0])>-1?void 0:r[0];return new e({
functionName:i,fileName:o,lineNumber:r[1],columnNumber:r[2],source:t})},this)},parseFFOrSafari:function(t){return t.stack.split("\n").filter(function(e){return!e.match(r)},this).map(function(t){
if(t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))return new e({functionName:t})
;var n=t.split("@"),r=this.extractLocation(n.pop()),i=n.join("@")||void 0;return new e({functionName:i,fileName:r[0],lineNumber:r[1],columnNumber:r[2],source:t})},this)},parseOpera:function(e){
return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},
parseOpera9:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)/i,r=t.message.split("\n"),i=[],o=2,a=r.length;o<a;o+=2){var s=n.exec(r[o]);s&&i.push(new e({fileName:s[2],lineNumber:s[1],
source:r[o]}))}return i},parseOpera10:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=t.stacktrace.split("\n"),i=[],o=0,a=r.length;o<a;o+=2){var s=n.exec(r[o])
;s&&i.push(new e({functionName:s[3]||void 0,fileName:s[2],lineNumber:s[1],source:r[o]}))}return i},parseOpera11:function(n){return n.stack.split("\n").filter(function(e){
return!!e.match(t)&&!e.match(/^Error created at/)},this).map(function(t){
var n,r=t.split("@"),i=this.extractLocation(r.pop()),o=r.shift()||"",a=o.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0
;o.match(/\(([^\)]*)\)/)&&(n=o.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=void 0===n||"[arguments not available]"===n?void 0:n.split(",");return new e({functionName:a,args:s,fileName:i[0],
lineNumber:i[1],columnNumber:i[2],source:t})},this)}}})},{stackframe:8}],8:[function(e,t,n){!function(e,r){"use strict"
;"function"==typeof define&&define.amd?define("stackframe",[],r):"object"==typeof n?t.exports=r():e.StackFrame=r()}(this,function(){"use strict";function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}
function t(e){return e.charAt(0).toUpperCase()+e.substring(1)}function n(e){return function(){return this[e]}}function r(e){
if(e instanceof Object)for(var n=0;n<s.length;n++)e.hasOwnProperty(s[n])&&void 0!==e[s[n]]&&this["set"+t(s[n])](e[s[n]])}
var i=["isConstructor","isEval","isNative","isToplevel"],o=["columnNumber","lineNumber"],a=["fileName","functionName","source"],s=i.concat(o,a,["args"]);r.prototype={getArgs:function(){
return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin
},setEvalOrigin:function(e){if(e instanceof r)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new r(e)}},
toString:function(){
return(this.getFunctionName()||"{anonymous}")+"("+(this.getArgs()||[]).join(",")+")"+(this.getFileName()?"@"+this.getFileName():"")+(e(this.getLineNumber())?":"+this.getLineNumber():"")+(e(this.getColumnNumber())?":"+this.getColumnNumber():"")
}};for(var u=0;u<i.length;u++)r.prototype["get"+t(i[u])]=n(i[u]),r.prototype["set"+t(i[u])]=function(e){return function(t){this[e]=Boolean(t)}}(i[u])
;for(var c=0;c<o.length;c++)r.prototype["get"+t(o[c])]=n(o[c]),r.prototype["set"+t(o[c])]=function(t){return function(n){if(!e(n))throw new TypeError(t+" must be a Number");this[t]=Number(n)}}(o[c])
;for(var l=0;l<a.length;l++)r.prototype["get"+t(a[l])]=n(a[l]),r.prototype["set"+t(a[l])]=function(e){return function(t){this[e]=String(t)}}(a[l]);return r})},{}],9:[function(e,t,n){"use strict"
;function r(e){return"Empty match: '"+e+"'"}function i(e){var t=e.lastIndexOf(":");return-1!=t?{prefix:e.substring(0,t),localName:e.substring(t+1)}:{prefix:null,localName:e}}function o(e){
var t=i(e),r=t.prefix,o=t.localName;if(null!=r){var a=n.NS_URI[r];if(null==a)throw new Error("Unknown namespace '"+r+"'");return{name:o,nsUri:a}}return{name:e,nsUri:null}}function a(e,t){
if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)s(r[n],t);else s(e,t)}function s(e,t){e.textContent=String(t)}function u(e,t){
if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)c(r[n],t);else c(e,t)}function c(e,t){if(!I(e))throw new TypeError;e.innerHTML=String(t)}function l(e,t,n){
if(Array.isArray(e))for(var r=0,i=e;r<i.length;r++)f(i[r],t,n);else f(e,t,n)}function f(e,t,n){var r=o(t);null!=r.nsUri?e.setAttributeNS(r.nsUri,r.name,String(n)):e.setAttribute(r.name,String(n))}
function p(e,t){if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)d(r[n],t);else d(e,t)}function d(e,t){for(var n=0,r=Object.entries(t);n<r.length;n++){var i=r[n];l(e,i[0],i[1])}}function m(e,t){
var n=o(t);null!=n.nsUri?e.removeAttributeNS(n.nsUri,n.name):e.removeAttribute(n.name)}function v(e,t){if(I(e))return e.classList.contains(t);if(P(e))return-1!=F(e.className.baseVal).indexOf(t)
;throw new TypeError}function h(e,t){if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)g(r[n],t);else g(e,t)}function g(e,t){H(t).forEach(function(t){F(t).forEach(function(t){y(e,t)})})}
function y(e,t){if(I(e))e.classList.add(t);else{if(!P(e))throw new TypeError;var n=F(e.className.baseVal);-1==n.indexOf(t)&&(n.push(t),e.className.baseVal=n.join(" "))}}function b(e,t){
H(t).forEach(function(t){F(t).forEach(function(t){w(e,t)})})}function w(e,t){if(I(e))e.classList.remove(t);else{if(!P(e))throw new TypeError;var n=F(e.className.baseVal),r=void 0
;-1!=(r=n.indexOf(t))&&(n.splice(r,1),e.className.baseVal=n.join(" "))}}function O(e,t){H(t).forEach(function(t){F(t).forEach(function(t){N(e,t)})})}function N(e,t){if(I(e))e.classList.toggle(t);else{
if(!P(e))throw new TypeError;var n=F(e.className.baseVal),r=void 0;-1!=(r=n.indexOf(t))?n.splice(r,1):n.push(t),e.className.baseVal=n.join(" ")}}function E(e,t,n){
if(Array.isArray(e))for(var r=0,i=e;r<i.length;r++)S(i[r],t,n);else S(e,t,n)}function S(e,t,n){var r=e.style;r[A(r,t)]=String(n)}function x(e,t){
if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)k(r[n],t);else k(e,t)}function k(e,t){for(var n=0,r=Object.entries(t);n<r.length;n++){var i=r[n];E(e,i[0],i[1])}}function A(e,t){
var n=B.toCamelCase(t);if(n in e)return n;if(n in V)return V[n];for(var r,i=["Webkit","Moz","ms"],o=n[0].toUpperCase()+n.substring(1),a=0;a<i.length;a++)if((r=i[a]+o)in e)return V[n]=r;return n}
function j(e){for(var t;t=e.lastChild;)e.removeChild(t)}function T(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n,r){
if(Array.isArray(e))for(var i=0,o=e;i<o.length;i++)L(o[i],t,n,r);else L(e,t,n,r)}function L(e,t,n,r){var i,o=t;-1!=(i=t.lastIndexOf(":"))&&(t=t.substring(i+1)),t=M(t);var a,s
;null==(a=e[D])&&Object.defineProperty(e,D,{value:a=Object.create(null)}),null==(s=a[o])&&(a[o]=s=[]);var u={target:e,type:t,listener:n,capture:Boolean(r)};return s.push(u),
e.addEventListener(u.type,u.listener,u.capture),u}function C(e,t,n,r){var i,o=t;-1!=(i=t.lastIndexOf(":"))&&(t=t.substring(i+1)),t=M(t);var a,s
;if(null!=(a=e[D])&&null!=(s=a[o]))for(var u=0;u<s.length;){var c=s[u];c.type!=t||null!=n&&n!==c.listener||null!=r&&r!==c.capture?u++:(e.removeEventListener(c.type,c.listener,c.capture),s.splice(u,1))
}}function M(e){return null==$&&($=Object.create(null),!("AnimationEvent"in window)&&"WebKitAnimationEvent"in window&&($.animationstart="webkitAnimationStart",
$.animationiteration="webkitAnimationIteration",$.animationend="webkitAnimationEnd")),e in $?$[e]:e}function R(e,t,n){for(var r,i,s=null,c=[];-1!=(r=e.lastIndexOf("."));)c.push(e.substring(r+1)),
e=e.substring(0,r);-1!=(r=e.indexOf("#"))&&(s=e.substring(r+1),e=e.substring(0,r));var l=o(e);if(i=null!=l.nsUri?document.createElementNS(l.nsUri,l.name):document.createElement(l.name),
s&&i.setAttribute("id",s),c.forEach(function(e){F(e).forEach(function(e){F(e).forEach(function(e){h(i,e)})})}),J.isObject(t)){if(J.isString(t.id)&&i.setAttribute("id",t.id),
H(t.classList).forEach(function(e){F(e).forEach(function(e){h(i,e)})}),J.isObject(t.style)&&x(i,t.style),J.isObject(t.attr)&&p(i,t.attr),
J.isObject(t.event))for(var f=0,d=Object.entries(t.event);f<d.length;f++){var m=d[f],v=m[0],g=m[1];_(i,v,g)}if(J.isObject(t.prop))for(var y=0,b=Object.entries(t.prop);y<b.length;y++){
var w=b[y],v=w[0],g=w[1];i[v]=g}null!=t.text&&a(i,t.text),null!=t.html&&u(i,t.html),H(t.children).forEach(function(e){i.appendChild(U(e))})}return H(n).forEach(function(e){i.appendChild(U(e))}),i}
function U(e){if(e instanceof Node)return e;var t=String(e);return t.startsWith("<")?q(t):R(t)}function q(e){var t=document.createDocumentFragment(),n=document.createElement("body")
;for(u(n,e);n.firstChild;)t.appendChild(n.firstChild);return t}function I(e){return e instanceof HTMLElement}function P(e){return e instanceof SVGElement}function F(e){
return""==(e=e.trim())?[]:e.split(/\s+/)}function H(e){return null==e?[]:Array.isArray(e)?e:[e]}Object.defineProperty(n,"__esModule",{value:!0});var B=e("@keybr/lang/lib/id"),J=e("@keybr/lang")
;n.one=function(e,t){var n=e.querySelector(t);if(null==n)throw new Error(r(t));return n},n.all=function(e,t){var n=e.querySelectorAll(t);if(0==n.length)throw new Error(r(t));return Array.from(n)},
n.any=function(e,t){return Array.from(e.querySelectorAll(t))},n.NS_XML="http://www.w3.org/XML/1998/namespace",n.NS_XLINK="http://www.w3.org/1999/xlink",n.NS_HTML="http://www.w3.org/1999/xhtml",
n.NS_SVG="http://www.w3.org/2000/svg",n.NS_MATH="http://www.w3.org/1998/Math/MathML",n.NS_URI=J.map({xml:n.NS_XML,xlink:n.NS_XLINK,html:n.NS_HTML,svg:n.NS_SVG,math:n.NS_MATH}),n.parseQName=i,
n.resolveQName=o,n.setText=a,n.setHtml=u,n.hasAttr=function(e,t){var n=o(t);return null!=n.nsUri?e.hasAttributeNS(n.nsUri,n.name):e.hasAttribute(n.name)},n.getAttr=function(e,t){var n=o(t)
;return null!=n.nsUri?e.getAttributeNS(n.nsUri,n.name):e.getAttribute(n.name)},n.setAttr=l,n.setAttrMap=p,n.removeAttr=function(e,t){
if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)m(r[n],t);else m(e,t)},n.hasClass=function(e,t){return H(t).every(function(t){return F(t).every(function(t){return v(e,t)})})},n.addClass=h,
n.removeClass=function(e,t){if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)b(r[n],t);else b(e,t)},n.toggleClass=function(e,t){
if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)O(r[n],t);else O(e,t)},n.toggleClass0=O,n.setStyle=E,n.setStyleMap=x,n.getStyle=function(e,t){var n=getComputedStyle(e);return n[A(n,t)]};var V={
float:"cssFloat"};n.empty=function(e){if(Array.isArray(e))for(var t=0,n=e;t<n.length;t++)j(n[t]);else j(e)},n.detach=function(e){if(Array.isArray(e))for(var t=0,n=e;t<n.length;t++)T(n[t]);else T(e)},
n.prepend=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=e.firstChild,i=0,o=t;i<o.length;i++){var a=o[i];e.insertBefore(a,r)}},n.append=function(e){
for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++){var o=i[r];e.appendChild(o)}};var D="__listener__";n.on=_,n.off=function(e,t,n,r){
if(Array.isArray(e))for(var i=0,o=e;i<o.length;i++)C(o[i],t,n,r);else C(e,t,n,r)};var $=null;n.eventName=M,n.make=R,n.text=function(e){return document.createTextNode(e)},n.cast=U,n.parse=q,n.isHtml=I,
n.isSvg=P},{"@keybr/lang":13,"@keybr/lang/lib/id":12}],10:[function(e,t,n){"use strict";function r(e){u.push(e)}function i(e){c.push(e)}function o(e){l.push(e)}function a(e,t){
return-1!=e.indexOf(t.type+"/"+t.subtype)||-1!=e.indexOf(t.type+"/*")}Object.defineProperty(n,"__esModule",{value:!0});var s=e("@keybr/lang"),u=[],c=[],l=[];n.addJsonType=r,n.addTextType=i,
n.addBinaryType=o,n.parseMimeType=function(e){var t,n,r,i=null,o=s.map();if(-1!=(r=e.indexOf(";"))){var a=e.substring(r+1);e=e.substring(0,r),a.split(";").forEach(function(e){
if(-1!=(r=e.indexOf("="))){var t=e.substring(0,r).trim().toLowerCase(),n=e.substring(r+1).trim();"charset"==t?i=n:o[t]=n}})}if(-1==(r=e.indexOf("/")))throw new Error;return t=e.substring(0,r),
n=e.substring(r+1),{name:t+"/"+n,type:t,subtype:n,charset:i,parameters:o}},n.isJson=function(e){return a(u,e)},n.isText=function(e){return a(c,e)},n.isBinary=function(e){return a(l,e)},
["application/json"].forEach(function(e){r(e)
}),["text/*","image/svg+xml","application/xml","application/atom+xml","application/rss+xml","application/rdf+xml","application/xhtml+xml","application/ecmascript","application/javascript"].forEach(function(e){
i(e)}),["application/octet-stream","image/*","audio/*","video/*"].forEach(function(e){o(e)})},{"@keybr/lang":13}],11:[function(e,t,n){"use strict";function r(e){void 0===e&&(e=location.search)
;var t=o.map();if(e.startsWith("?")&&(e=e.substring(1)),e)for(var n=0,r=e.split("&");n<r.length;n++){var i=r[n],a=i.indexOf("=");-1!=a?t[s(i.substring(0,a))]=s(i.substring(a+1)):t[s(i)]=null}return t}
Object.defineProperty(n,"__esModule",{value:!0});var i=e("tslib"),o=e("@keybr/lang"),a=encodeURIComponent,s=decodeURIComponent;n.parseQueryString=r,n.parseUrl=function(e,t){null==t&&(t=o.map())
;var n=e.indexOf("?");if(-1!=n){var s=e.substring(n+1);e=e.substring(0,n),t=i.__assign({},r(s),t)}for(var u=[],c=0,l=Object.keys(t);c<l.length;c++){var f=l[c],p=t[f]
;null!=p?u.push(a(f)+"="+a(String(p))):u.push(a(f))}return u.length&&(e=e+"?"+u.join("&")),e}},{"@keybr/lang":13,tslib:"tslib"}],12:[function(e,t,n){"use strict";function r(e){
return e.substring(0,1).toLowerCase()+e.substring(1)}function i(e){return e.substring(0,1).toUpperCase()+e.substring(1)}Object.defineProperty(n,"__esModule",{value:!0}),n.toFlat=function(e){
return e.split("-").map(function(e,t){return r(e)}).join("")},n.toCamelCase=function(e){return e.split("-").map(function(e,t){return 0===t?r(e):i(e)}).join("")},n.toPascalCase=function(e){
return e.split("-").map(function(e,t){return i(e)}).join("")}},{}],13:[function(e,t,n){"use strict";function r(e){return o.call(e).match(/^\[object (.+)\]$/)[1]}function i(e){
return null!==e&&typeof e===n.S_OBJECT}Object.defineProperty(n,"__esModule",{value:!0}),n.S_UNDEFINED="undefined",n.S_STRING="string",n.S_NUMBER="number",n.S_BOOLEAN="boolean",n.S_OBJECT="object",
n.S_FUNCTION="function";var o=Object.prototype.toString;n.getType=r,n.isUndefined=function(e){return typeof e===n.S_UNDEFINED},n.isString=function(e){return typeof e===n.S_STRING},
n.isNumber=function(e){return typeof e===n.S_NUMBER},n.isBoolean=function(e){return typeof e===n.S_BOOLEAN},n.isObject=function(e){return null!==e&&typeof e===n.S_OBJECT&&!Array.isArray(e)},
n.isFunction=function(e){return typeof e===n.S_FUNCTION},n.isObjectLike=i,n.isPlainObject=function(e){if(i(e)&&"Object"===r(e)){var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}
return!1},n.map=function(e){return Object.assign(Object.create(null),e)}},{}],14:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){
return Math.round(e*t)/t}},{}],15:[function(e,t,n){"use strict";function r(e){if("json"==e.dataType)return e;throw new Error("Response is not JSON")}function i(e){if("text"==e.dataType)return e
;throw new Error("Response is not text")}function o(e){if("binary"==e.dataType)return e;throw new Error("Response is not binary")}function a(e,t,n){return void 0===n&&(n={}),a.implementation(e,t,n)}
function s(e,t,n){function r(e){return new Promise(function(t,n){c.addEventListener("load",function(e){o(),u(c,t,n)}),c.addEventListener("error",function(e){o(),n(new Error(e.message||"Unreachable"))
}),c.addEventListener("timeout",function(e){o(),n(new Error("Timeout"))}),c.addEventListener("abort",function(e){o(),n(new Error("Abort"))}),i(),c.send(e)})}function i(){
for(var e=0,t=a;e<t.length;e++)(i=t[e]).start();for(var n=0,r=s;n<r.length;n++){var i=r[n];i.start()}}function o(){for(var e=0,t=a;e<t.length;e++)(i=t[e]).stop();for(var n=0,r=s;n<r.length;n++){
var i=r[n];i.stop()}}var a=[],s=[],c=new XMLHttpRequest;c.open(e,p.parseUrl(t,n),!0),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.responseType="blob",
c.upload.addEventListener("progress",function(e){if(e.lengthComputable)for(var t=0,n=a;t<n.length;t++)n[t].step(e.total,e.loaded)}),c.addEventListener("progress",function(e){
if(e.lengthComputable)for(var t=0,n=s;t<n.length;t++)n[t].step(e.total,e.loaded)});var f=[],y={header:function(e,t){return c.setRequestHeader(e,String(t)),y},accept:function(e,t){void 0===t&&(t=null)
;var n=l.map({json:v,text:h,binary:g,any:"*/*"});return e in n&&(e=n[e]),null!=t&&(e=e+";q="+t),f.push(e),y},send:function(){return f.length&&c.setRequestHeader(d,f.join(",")),r(null)},
sendForm:function(e){if(f.length&&c.setRequestHeader(d,f.join(",")),!(e instanceof FormData)){for(var t=new FormData,n=0,i=Object.entries(e);n<i.length;n++){var o=i[n],a=o[0],s=o[1];t.append(a,s)}e=t}
return r(e)},sendJson:function(e,t){return void 0===t&&(t=v),c.setRequestHeader(m,t),f.length&&c.setRequestHeader(d,f.join(",")),r(JSON.stringify(e))},sendText:function(e,t){return void 0===t&&(t=h),
c.setRequestHeader(m,t),f.length&&c.setRequestHeader(d,f.join(",")),r(e)},sendBinary:function(e,t){return void 0===t&&(t=g),c.setRequestHeader(m,t),f.length&&c.setRequestHeader(d,f.join(",")),r(e)},
onSend:function(e){return a.push(e),y},onReceive:function(e){return s.push(e),y}};return y}function u(e,t,n){function r(e){try{h=JSON.parse(e.result)}catch(e){return void n(e)}v="json",t(a())}
function i(e){g=e.result,v="text",t(a())}function o(e){y=e.result,v="binary",t(a())}function a(){return{ok:m,status:u,statusText:l,headers:p,contentType:d,dataType:v,json:h,text:g,binary:y}}
var s=c(e),u=s.status,l=s.statusText,p=s.headers,d=s.contentType,m=u>=200&&u<300,v=null,h=null,g=null,y=null;if(204!=u&&e.response instanceof Blob){var b=e.response,w=new FileReader
;w.addEventListener("error",function(e){n(new Error(e.message))}),f.isJson(d)?(w.addEventListener("load",function(e){r(w)}),w.readAsText(b)):f.isText(d)?(w.addEventListener("load",function(e){i(w)}),
w.readAsText(b)):(w.addEventListener("load",function(e){o(w)}),w.readAsArrayBuffer(b))}else t(a())}function c(e){var t,n=e.status,r=e.statusText,i=l.map()
;e.getAllResponseHeaders().split("\n").forEach(function(e){var t=e.indexOf(":");if(-1!=t){var n=e.substring(0,t).trim().toLowerCase(),r=e.substring(t+1).trim();i[n]=r}});var o=e.getResponseHeader(m)
;return t=o?f.parseMimeType(o):f.parseMimeType(g),{status:n,statusText:r,headers:i,contentType:t}}Object.defineProperty(n,"__esModule",{value:!0})
;var l=e("@keybr/lang"),f=e("@keybr/http/lib/mimetype"),p=e("@keybr/http/lib/url"),d="Accept",m="Content-Type",v="application/json",h="text/plain",g="application/octet-stream"
;n.checkStatus=function(e){if(e.ok)return e;if("json"==e.dataType){var t=e.json,n=(void 0===t?{message:null}:t).message;if(n)throw new Error(n)}throw new Error(e.statusText)},
n.checkIsEmpty=function(e){if(204==e.status)return e;throw new Error("Response is not empty")},n.checkIsJson=r,n.expectJson=function(e){return function(t){return e(r(t).json)}},n.checkIsText=i,
n.expectText=function(e){return function(t){return e(i(t).text)}},n.checkIsBinary=o,n.expectBinary=function(e){return function(t){return e(o(t).binary)}},n.request=a,function(e){e.implementation=s,
e.reinstate=function(){e.implementation=s}}(a=n.request||(n.request={})),n.loadScript=function(e){return new Promise(function(t,n){var r=document.createElement("script")
;r.addEventListener("load",function(e){t(r)}),r.addEventListener("error",function(t){n({message:"Cannot load script from url "+e})}),r.type="text/javascript",r.async=!1,r.src=e,
document.head.appendChild(r)})}},{"@keybr/http/lib/mimetype":10,"@keybr/http/lib/url":11,"@keybr/lang":13}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("@keybr/math/lib/round");n.systemTimer={setTimeout:function(e,t){var n=window.setTimeout(e,t);return{get callback(){return e},cancel:function(){window.clearTimeout(n)}}},
setInterval:function(e,t){var n=window.setInterval(e,t);return{get callback(){return e},cancel:function(){window.clearInterval(n)}}}},n.systemClock={now:function(){return Date.now()}},
n.newStopwatch=function(e){function t(e){return e<1e3?e+"ms":r.default(e/1e3,1e3)+"s"}void 0===e&&(e=n.systemClock);var i=e.now(),o={get elapsed(){return e.now()-i},stop:function(){var n=e.now(),r={
get elapsed(){return n-i},stop:function(){return r},toString:function(){return t(r.elapsed)}};return r},toString:function(){return t(o.elapsed)}};return o}},{"@keybr/math/lib/round":14}]},{},[2]);
//# sourceMappingURL=front.js.map