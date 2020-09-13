require=function e(t,n,a){function r(o,s){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!s&&c)return c(o,!0);if(i)return i(o,!0);var l=new Error("Cannot find module '"+o+"'")
;throw l.code="MODULE_NOT_FOUND",l}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){return r(t[o][1][e]||e)},u,u.exports,e,t,n,a)}return n[o].exports}
for(var i="function"==typeof require&&require,o=0;o<a.length;o++)r(a[o]);return r}({217:[function(e,t,n){"use strict";function a(e,t){
var n=s.newDatabase("history",e),a=o.newSettings(l.newObjectStorage());a.load().then(function(){return t.url&&a.importUrl(t.url)?a.store():null}).then(function(){var t=u.newRootPage(a,n,c.default)
;m.mount(e,p.createElement(d.DatabaseLoader,{database:n,component:t},m.getMarkup(".Article")))})}Object.defineProperty(n,"__esModule",{value:!0}),e("../lib/runtime/polyfill")
;var r=e("../lib/http/url"),i=e("../common/env"),o=e("../common/practice/settings"),s=e("../common/practice/database/web"),c=e("../common/practice/lesson/factory/web"),l=e("../common/util/storage/web"),u=e("../common/practice/ui/root"),d=e("../common/practice/ui/loader/database"),f=e("./init"),m=e("./mount"),p=e("react")
;f.init(function(){a(i.currentUser(),r.parseQueryString())})},{"../common/env":1,"../common/practice/database/web":13,"../common/practice/lesson/factory/web":18,"../common/practice/settings":25,
"../common/practice/ui/loader/database":28,"../common/practice/ui/root":41,"../common/util/storage/web":54,"../lib/http/url":136,"../lib/runtime/polyfill":147,"./init":212,"./mount":213,react:"react"
}],213:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e("../lib/runtime/polyfill")
;var a=e("../lib/runtime/global"),r=e("../lib/dom"),i=e("../lib/ui/static"),o=e("./page/error"),s=e("./ui/avatar"),c=e("./ui/navmenu"),l=e("react"),u=e("react-dom"),d=r.one(a.DOCUMENT,"#App"),f=r.one(a.DOCUMENT,"#Nav")
;o.initErrorPage(d),n.mount=function(e,t){var n=s.userAvatar(e);u.render(t,d),u.render(l.createElement(c.NavMenu,{avatar:n}),f)},n.getMarkup=function(e){var t=r.one(d,e).outerHTML
;return l.createElement(i.StaticMarkup,{html:t})}},{"../lib/dom":130,"../lib/runtime/global":145,"../lib/runtime/polyfill":147,"../lib/ui/static":170,"./page/error":216,"./ui/avatar":228,
"./ui/navmenu":229,react:"react","react-dom":"react-dom"}],229:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("react"),r=e("../../res/icon/material-design/action/help"),i=e("../../res/icon/material-design/av/games"),o=e("../../res/icon/material-design/editor/insert_chart"),s=e("../../res/icon/material-design/hardware/toys"),c=e("../../res/icon/material-design/hardware/videogame_asset"),l=e("../thirdparty/facebook-like"),u=e("../thirdparty/google-webstore"),d=e("../thirdparty/social-shares"),f=e("./avatar"),m=[{
to:"/practice",icon:i.default,name:"Practice",title:"Practice typing lessons"},{to:"/profile",icon:o.default,name:"Profile",title:"See detailed statistics about your results"},{to:"/help",
icon:r.default,name:"Help",title:"Read instruction manual"},{to:"/high-scores",icon:s.default,name:"High Scores",title:"See the table of the fastest typists"},{to:"/multiplayer",icon:c.default,
name:"Multiplayer",title:"Play online against other users"}];n.NavMenu=function(e){var t=e.avatar,n=e.full,r=void 0===n||n;return a.createElement("div",{className:"NavMenu"},a.createElement("div",{
className:"NavMenu-item"},a.createElement(f.Avatar,{avatar:t})),m.map(function(e){return a.createElement("div",{key:e.to,className:"NavMenu-item"},a.createElement("a",{href:e.to,className:"NavLink",
title:e.title},a.createElement(e.icon,{className:"NavLink-icon"}),a.createElement("span",{className:"NavLink-label"},e.name)))}),r&&a.createElement("div",{className:"NavMenu-item"
},a.createElement(d.SocialShares,null)),r&&a.createElement("div",{className:"NavMenu-item"},a.createElement(l.FacebookLikeButton,{action:"like",colorScheme:"light",href:"http://www.keybr.com/",
layout:"button_count",size:"small",share:!1,showFaces:!1})),r&&u.GoogleWebStoreBadge.canInstall()&&a.createElement("div",{className:"NavMenu-item"},a.createElement(u.GoogleWebStoreBadge,null)))}},{
"../../res/icon/material-design/action/help":188,"../../res/icon/material-design/av/games":189,"../../res/icon/material-design/editor/insert_chart":196,
"../../res/icon/material-design/hardware/toys":197,"../../res/icon/material-design/hardware/videogame_asset":198,"../thirdparty/facebook-like":220,"../thirdparty/google-webstore":224,
"../thirdparty/social-shares":226,"./avatar":228,react:"react"}],226:[function(e,t,n){"use strict";function a(e){var t=e.onLoad,n=e.onError,a=e.onShare,r={
url:"https://www.facebook.com/sharer/sharer.php",params:{u:"url"},width:650,height:450};return f.createElement(_,{id:"facebook",icon:f.createElement(y.default,{className:"SocialShares-icon"}),
title:"Share this site on Facebook",config:r,onLoad:t,onError:n,onShare:a})}function r(e){var t=e.onLoad,n=e.onError,a=e.onShare,r={url:"https://twitter.com/intent/tweet",params:{url:"url",
text:"description"},width:600,height:300};return f.createElement(_,{id:"twitter",icon:f.createElement(h.default,{className:"SocialShares-icon"}),title:"Share this site on Twitter",config:r,onLoad:t,
onError:n,onShare:a})}function i(e){var t=e.onLoad,n=e.onError,a=e.onShare,r={url:"https://plus.google.com/share",params:{url:"url"},width:600,height:600};return f.createElement(_,{id:"googleplus",
icon:f.createElement(b.default,{className:"SocialShares-icon"}),title:"Share this site on Google+",config:r,onLoad:t,onError:n,onShare:a})}function o(e){var t=e.onLoad,n=e.onError,a=e.onShare,r={
url:"https://www.linkedin.com/shareArticle",params:{url:"url",text:"description",mini:"true"},width:650,height:500};return f.createElement(_,{id:"linkedin",icon:f.createElement(v.default,{
className:"SocialShares-icon"}),title:"Share this site on LinkedIn",config:r,onLoad:t,onError:n,onShare:a})}function s(e){for(var t=p.map(),n=0,a=Object.keys(e);n<a.length;n++){var r=a[n];t[r]=k[e[r]]
}return t}function c(e){for(var t=[],n=0,a=Object.entries(e);n<a.length;n++){var r=a[n],i=r[0],o=r[1];t.push(i+"="+String(o))}return t.join(",")}Object.defineProperty(n,"__esModule",{value:!0})
;var l=e("tslib"),u=e("classnames"),d=e("prop-types"),f=e("react"),m=e("../../lib/http/url"),p=e("../../lib/lang"),y=e("../../res/icon/custom/social/facebook"),b=e("../../res/icon/custom/social/googleplus"),v=e("../../res/icon/custom/social/linkedin"),h=e("../../res/icon/custom/social/twitter"),g=e("./meta"),k=p.map({
url:g.OPENGRAPH_URL,title:g.OPENGRAPH_TITLE,description:g.OPENGRAPH_DESCRIPTION}),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l.__extends(t,e),
t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return f.createElement("div",{className:"SocialShares"
},f.createElement(a,null),f.createElement(r,null),f.createElement(i,null),f.createElement(o,null))},t}(f.Component);n.SocialShares=E,n.FacebookButton=a,n.TwitterButton=r,n.GooglePlusButton=i,
n.LinkedInButton=o;var _=function(e){function t(t,n){var a=e.call(this,t,n)||this;return a.state={count:null},a}return l.__extends(t,e),t.prototype.render=function(){function e(){
var e=Math.round(screen.width/2-i.width/2),t=Math.round(screen.height/2-i.height/2),n=i.width,a=i.height,r=open(l,"SocialShares",c({left:e,top:t,width:n,height:a,personalbar:0,toolbar:0,scrollbars:1,
resizable:1}));r?r.focus():location.href=l}var t=this.props,n=t.id,a=t.icon,r=t.title,i=t.config,o=t.onShare,l=m.parseUri(i.url,s(i.params));return f.createElement("a",{
className:u("SocialShares-widget",n),href:l,title:r,onClick:function(t){t.preventDefault(),e(),o()}},a)},t.propTypes={onLoad:d.func,onError:d.func,onShare:d.func},t.defaultProps={onLoad:function(){},
onError:function(){},onShare:function(){}},t}(f.Component)},{"../../lib/http/url":136,"../../lib/lang":139,"../../res/icon/custom/social/facebook":183,"../../res/icon/custom/social/googleplus":184,
"../../res/icon/custom/social/linkedin":185,"../../res/icon/custom/social/twitter":186,"./meta":225,classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],
224:[function(e,t,n){"use strict";function a(e){e.preventDefault(),l.install()}function r(){location.reload(!1)}function i(e,t){"userCancelled"!=t&&(console.log("Cannot install application:",e,t),
alert("Cannot install application:\n"+e))}Object.defineProperty(n,"__esModule",{value:!0});var o=e("tslib"),s=e("react"),c=e("./meta"),l=function(e){function t(){
return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return s.createElement("a",{
className:"WebStoreBadge",href:c.CHROME_WEBSTORE_ITEM,target:"web-store",title:"Install this application to your computer from the Chrome Web Store",onClick:a},s.createElement("img",{
className:"WebStoreBadge-image",src:"/res/image/webstore/ChromeWebStore_Badge_v2_496x150.png"}))},t.canInstall=function(){try{
return null!=chrome&&null!=chrome.webstore&&null!=chrome.app&&0==chrome.app.isInstalled}catch(e){return!1}},t.install=function(){t.canInstall()&&chrome.webstore.install(c.CHROME_WEBSTORE_ITEM,r,i)},t
}(s.Component);n.GoogleWebStoreBadge=l},{"./meta":225,react:"react",tslib:"tslib"}],220:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("prop-types"),i=e("react"),o=e("./facebook-sdk"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),
t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.componentDidMount=function(){var e=this;o.loadSdk().then(function(){var t=e.refs.root;t&&FB.XFBML.parse(t)})},
t.prototype.render=function(){var e=this.props,t=e.action,n=e.colorScheme,a=e.href,r=e.layout,o=e.size,s=e.share,c=e.showFaces,l=e.width;return i.createElement("div",{ref:"root",
className:"FacebookLikeButton"},i.createElement("div",{className:"fb-like","data-action":t,"data-colorscheme":n,"data-href":a,"data-layout":r,"data-size":o,"data-share":s,"data-show-faces":c,
"data-width":l}))},t.propTypes={action:r.string,colorScheme:r.string,href:r.string,layout:r.string,size:r.string,share:r.bool,showFaces:r.bool,width:r.number},t.defaultProps={action:"like",
colorScheme:"light",layout:"standard",size:"small",share:!1,showFaces:!1},t}(i.Component);n.FacebookLikeButton=s},{"./facebook-sdk":221,"prop-types":"prop-types",react:"react",tslib:"tslib"}],
221:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("../../lib/runtime/global"),r=e("./meta"),i=null;n.loadSdk=function(){
return null==i&&(i=new Promise(function(e,t){a.WINDOW.fbAsyncInit=function(){FB.init({appId:r.FACEBOOK_APP_ID,version:"v2.7"}),console.log("Loaded Facebook SDK"),e(FB)}
;var n=a.DOCUMENT.createElement("script");n.src="https://connect.facebook.net/en_US/sdk.js",n.addEventListener("error",function(e){console.log("Error loading Facebook SDK"),t()}),
a.HEAD_ELEMENT.appendChild(n)})),i}},{"../../lib/runtime/global":145,"./meta":225}],225:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("../../common/env"),r=e("../../lib/dom"),i=e("../../lib/lang"),o=e("../../lib/runtime/global");n.META=Object.freeze(i.map(a.currentEnv().meta)),
n.CHROME_WEBSTORE_ITEM=n.META.CHROME_WEBSTORE_ITEM,n.FACEBOOK_APP_ID=n.META.FACEBOOK_APP_ID,n.OPENGRAPH_URL=n.META.OPENGRAPH_URL,n.OPENGRAPH_SITE_NAME=n.META.OPENGRAPH_SITE_NAME,
n.OPENGRAPH_TITLE=n.META.OPENGRAPH_TITLE,n.OPENGRAPH_DESCRIPTION=n.META.OPENGRAPH_DESCRIPTION,n.OPENGRAPH_IMAGE=n.META.OPENGRAPH_IMAGE,n.validateMeta=function(){function e(e,t){if(e!=t)throw new Error
}e(n.CHROME_WEBSTORE_ITEM,r.getAttr(r.one(o.DOCUMENT,"link[rel='chrome-webstore-item']"),"href")),e(n.FACEBOOK_APP_ID,r.getAttr(r.one(o.DOCUMENT,"meta[property='fb:app_id']"),"content")),
e(n.OPENGRAPH_URL,r.getAttr(r.one(o.DOCUMENT,"meta[property='og:type']"),"content")),e(n.OPENGRAPH_SITE_NAME,r.getAttr(r.one(o.DOCUMENT,"meta[property='og:url']"),"content")),
e(n.OPENGRAPH_SITE_NAME,r.getAttr(r.one(o.DOCUMENT,"meta[property='og:site_name']"),"content")),e(n.OPENGRAPH_TITLE,r.getAttr(r.one(o.DOCUMENT,"meta[property='og:title']"),"content")),
e(n.OPENGRAPH_DESCRIPTION,r.getAttr(r.one(o.DOCUMENT,"meta[property='og:title']"),"content")),e(n.OPENGRAPH_IMAGE,r.getAttr(r.one(o.DOCUMENT,"meta[property='og:image']"),"content"))}},{
"../../common/env":1,"../../lib/dom":130,"../../lib/lang":139,"../../lib/runtime/global":145}],216:[function(e,t,n){"use strict";function a(e){var t=e.reason;return i.createElement("article",{
className:"Article"},i.createElement("h1",null,"Error"),i.createElement("p",null,"Something bad has happened."),i.createElement("pre",null,r(t)))}function r(e){function t(e){
return e&&e.message?e.message:String(e)}return function(e){var n=[];for(n.push(t(e));e=e.cause;)n.push("Because: "+t(e));return n}(e).join("\n")}Object.defineProperty(n,"__esModule",{value:!0})
;var i=e("react"),o=e("react-dom"),s=e("../../lib/promise");n.initErrorPage=function(e){s.useTrap(function(t){o.render(a({reason:t}),e,function(){console.error(t)})})}},{"../../lib/promise":144,
react:"react","react-dom":"react-dom"}],212:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("./error-log"),r=e("./thirdparty/google-ads"),i=e("./thirdparty/google-analytics"),o=e("./thirdparty/telemetry");n.init=function(e){a.init(),e();var t=r.load();i.init(function(e){
t.then(function(){},function(){})}),o.meterTrackers(t)}},{"./error-log":210,"./thirdparty/google-ads":222,"./thirdparty/google-analytics":223,"./thirdparty/telemetry":227}],227:[function(e,t,n){
"use strict";function a(e){return r.POST("/telemetry").sendJson(e)}Object.defineProperty(n,"__esModule",{value:!0});var r=e("../../lib/http/request");e("../../lib/runtime/global"),
n.meterTrackers=function(e){return Promise.all([e.then(function(e){return e?"ads_enabled":"ads_disabled"},function(e){return"ads_blocked"})]).then(function(e){return a(e)})}},{
"../../lib/http/request":135,"../../lib/runtime/global":145}],223:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("../../lib/runtime/global");n.init=function(e){
var t,n;"string"==typeof(t=a.WINDOW.GoogleAnalyticsObject)&&"function"==typeof(n=a.WINDOW[t])&&n(e)}},{"../../lib/runtime/global":145}],222:[function(e,t,n){"use strict";function a(){
return["<h1>Please disable ad-blocker!</h1>","<p>You may not like this ad, but it supports the developer and keeps this site free.</p>","<p>Or consider switching to the <a href='/ad-free-survey'>ad-free version</a>.</p>"].join("\n")
}Object.defineProperty(n,"__esModule",{value:!0});var r=e("../../lib/dom"),i=e("../../lib/runtime/global"),o=e("../../lib/runtime/timer");n.load=function(){return new Promise(function(e,t){
o.systemTimer.setTimeout(function(){var n=r.any(i.DOCUMENT,".Supporter iframe"),o=r.any(i.DOCUMENT,".Supporter-placeholder");o.length?n.length?(r.setStyle(o,"visibility","hidden"),r.empty(o),
e(!0)):(r.setStyle(o,"visibility","visible"),r.setHtml(o,a()),t(new Error("Ad blocker detected"))):e(!1)},1e3)})}},{"../../lib/dom":130,"../../lib/runtime/global":145,"../../lib/runtime/timer":156}],
210:[function(e,t,n){"use strict";function a(e,t,n,s,u){if(null==l||l!=u){l=u,c.WINDOW.onerror=r;try{t&&-1!=t.indexOf(document.domain)&&o({userAgent:navigator.userAgent,message:e,uri:t,line:n,
column:s,stack:i(u)})}finally{c.WINDOW.onerror=a}}return!1}function r(){return!1}function i(e){if(e instanceof Error)return s.StackFrame.parse(e);try{throw new Error("stack frame")}catch(e){
var t=s.StackFrame.parse(e);return t.length&&t.shift(),t.length&&t.shift(),t}}function o(e){var t=new XMLHttpRequest;t.open("POST","/log",!0),t.setRequestHeader("Content-Type","application/json"),
t.send(JSON.stringify(e))}Object.defineProperty(n,"__esModule",{value:!0});var s=e("../lib/debug"),c=e("../lib/runtime/global"),l=null;n.init=function(){c.WINDOW.onerror=a},n.log=function(e){l=e,o({
userAgent:navigator.userAgent,message:String(e),uri:String(location),stack:i(e)})}},{"../lib/debug":127,"../lib/runtime/global":145}],198:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M42 12H6c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM22 26h-6v6h-4v-6H6v-4h6v-6h4v6h6v4zm9 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8-6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],197:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M24 24c0-6.1 4.9-11 11-11s11 4.9 11 11H24zm0 0c0 6.1-4.9 11-11 11S2 30.1 2 24h22zm0 0c-6.1 0-11-4.9-11-11S17.9 2 24 2v22zm0 0c6.1 0 11 4.9 11 11s-4.9 11-11 11V24z"}))}},{"../../SvgIcon":175,
react:"react",tslib:"tslib"}],196:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM18 34h-4V20h4v14zm8 0h-4V14h4v20zm8 0h-4v-8h4v8z"}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"
}],189:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{d:"M30 15V4H18v11l6 6 6-6zm-15 3H4v12h11l6-6-6-6zm3 15v11h12V33l-6-6-6 6zm15-15l-6 6 6 6h11V18H33z"}))}},{"../../SvgIcon":175,
react:"react",tslib:"tslib"}],188:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 34h-4v-4h4v4zm4.13-15.49l-1.79 1.84C26.9 25.79 26 27 26 30h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 20.1 28 19.1 28 18c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],186:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e,{viewBox:"0 0 64 64"}),i.createElement("path",{
d:"M52.92 29.935c3.039-.251 5.1-1.632 5.893-3.507-1.096.674-4.498 1.408-6.377.709-.092-.442-.195-.861-.296-1.24-1.432-5.257-6.334-9.493-11.47-8.98a21.816 21.816 0 0 1 1.257-.465c.565-.203 3.882-.742 3.36-1.913-.44-1.03-4.493.778-5.256 1.014 1.007-.378 2.673-1.03 2.851-2.188-1.543.212-3.058.942-4.229 2.003.423-.455.744-1.01.812-1.606-4.117 2.63-6.521 7.93-8.467 13.074-1.528-1.481-2.882-2.647-4.097-3.295-3.408-1.828-7.484-3.734-13.88-6.11-.197 2.117 1.046 4.931 4.628 6.803-.776-.104-2.195.128-3.33.4.462 2.424 1.972 4.422 6.059 5.388-1.868.123-2.833.548-3.708 1.464.85 1.687 2.926 3.671 6.66 3.264-4.151 1.79-1.693 5.103 1.686 4.609-5.763 5.952-14.849 5.515-20.066.536 13.622 18.562 43.232 10.977 47.645-6.901 3.306.028 5.25-1.145 6.455-2.439-1.905.323-4.666-.01-6.13-.62z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],185:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e,{viewBox:"0 0 64 64"}),i.createElement("path",{
d:"M49.038 12.01H14.963c-1.631 0-2.954 1.281-2.954 2.864v34.251c0 1.583 1.323 2.866 2.954 2.866h34.075c1.632 0 2.953-1.284 2.953-2.866V14.874c0-1.582-1.321-2.865-2.953-2.865zM24.131 45.476H18.09V27.425h6.04v18.052zm-3.02-20.518h-.04c-2.027 0-3.34-1.385-3.34-3.12 0-1.77 1.352-3.117 3.418-3.117s3.337 1.348 3.377 3.117c0 1.735-1.31 3.12-3.415 3.12zm24.795 20.518h-6.039v-9.658c0-2.427-.875-4.083-3.059-4.083-1.67 0-2.662 1.117-3.098 2.196-.16.385-.2.923-.2 1.462v10.082H27.47s.08-16.358 0-18.051h6.039v2.56c.802-1.23 2.234-2.985 5.441-2.985 3.975 0 6.955 2.579 6.955 8.126v10.35zM33.471 30.042a.958.958 0 0 1 .039-.058v.058h-.039z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],184:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e,{viewBox:"0 0 64 64"}),i.createElement("path",{
d:"M45.748 29.808h-18.41v6.137H38.57c-1.676 5.335-6.66 9.206-12.548 9.206-7.263 0-13.15-5.888-13.15-13.151s5.887-13.15 13.15-13.15a13.11 13.11 0 0 1 9.35 3.903l4.454-4.842a19.66 19.66 0 0 0-13.804-5.637C15.128 12.274 6.296 21.106 6.296 32c0 10.894 8.832 19.726 19.726 19.726 9.543 0 17.899-6.777 19.727-15.78v-6.138zm11.956-.01h-3.766v-3.766H50.71v3.766h-3.766v3.227h3.766v3.766h3.228v-3.766h3.766z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],183:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e,{viewBox:"0 0 64 64"}),i.createElement("path",{
d:"M51.974 18.685c0-3.499-3.159-6.659-6.658-6.659H18.684c-3.499 0-6.658 3.16-6.658 6.659v26.63c0 3.499 3.159 6.659 6.659 6.659H32V36.882h-4.882v-6.657H32V27.63c0-4.474 3.36-8.503 7.49-8.503h5.382v6.658H39.49c-.589 0-1.276.715-1.276 1.786v2.653h6.658v6.657h-6.658v15.092h7.102c3.499 0 6.658-3.16 6.658-6.659v-26.63z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],170:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("react"),i=function(e){function t(){
return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.html}})},t
}(r.PureComponent);n.StaticMarkup=i},{react:"react",tslib:"tslib"}],127:[function(e,t,n){"use strict";function a(e){var t=String(e)+"\n",n=e.stack;return n.startsWith(t)&&(n=n.substring(t.length)),
n.split("\n").map(r).filter(function(e){return null!=e})}function r(e){var t;if(-1!=e.indexOf("@")){
if(t=e.match(/(.+)@(.+) line (\d+) .+ eval:(\d+):(\d+)$/i))return new s(o(t[1]),null,Number(t[4]),Number(t[5]))
;if(t=e.match(/@(.+) line (\d+) .+ eval:(\d+):(\d+)$/i))return new s(null,null,Number(t[3]),Number(t[4]));if(t=e.match(/^(.+)@(.+):(\d+):(\d+)$/i))return new s(o(t[1]),t[2],Number(t[3]),Number(t[4]))
;if(t=e.match(/^@(.+):(\d+):(\d+)$/i))return new s(null,t[1],Number(t[2]),Number(t[3]))}if(-1!=e.indexOf("at ")){
if(t=e.match(/^[ \t]+at (.+) \(eval at (.+) \((.+):(\d+):(\d+)\), (.+):(\d+):(\d+)\)$/i))return new s(i(t[1]),null,Number(t[7]),Number(t[8]))
;if(t=e.match(/^[ \t]+at (.+) \((.+):(\d+):(\d+)\)$/i))return new s(i(t[1]),t[2],Number(t[3]),Number(t[4]))
;if(t=e.match(/^[ \t]+at (.+):(\d+):(\d+)$/i))return new s(null,t[1],Number(t[2]),Number(t[3]))}return null}function i(e){if(e.endsWith("<anonymous>"))return null;var t=e.toLowerCase()
;return"object.eval"==t?null:"eval code"==t?null:"anonymous function"==t?null:e}function o(e){return e}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t,n,a){
this.name=e,this.uri=t,this.line=n,this.column=a}return e.prototype.toString=function(){var e="";return e=null!=this.name?this.name:"<anonymous>",null!=this.uri?e=e+"@"+this.uri:e+="@<anonymous>",
null!=this.line&&null!=this.column&&(e=e+":"+this.line+":"+this.column),e},e.parse=function(e){try{if("string"==typeof e.stack)return a(e)}catch(e){console.error(e)}return[]},e}();n.StackFrame=s},{}],
54:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("./local"),r=e("./transient");n.newObjectStorage=function(){try{var e=localStorage
;if(e instanceof Storage)return a.newObjectStorage(e)}catch(e){console.error(e)}return r.newObjectStorage()}},{"./local":52,"./transient":53}],53:[function(e,t,n){"use strict";function a(e){
return JSON.stringify(e)}function r(e,t){if(e)try{return JSON.parse(e)}catch(e){console.error(e)}return t}Object.defineProperty(n,"__esModule",{value:!0});var i=e("../../../lib/lang")
;n.newObjectStorage=function(){var e=i.map();return{remove:function(t){for(var n=0,a=t;n<a.length;n++){var r=a[n];delete e[r]}return Promise.resolve(null)},store:function(t){
for(var n=0,r=Object.entries(t);n<r.length;n++){var i=r[n],o=i[0],s=i[1];null!=s?e[o]=a(s):delete e[o]}return Promise.resolve(null)},load:function(t){
for(var n=i.map(),a=0,o=Object.entries(t);a<o.length;a++){var s=o[a],c=s[0],l=s[1];n[c]=r(e[c],l)}return Promise.resolve(n)}}}},{"../../../lib/lang":139}],52:[function(e,t,n){"use strict"
;function a(e){return JSON.stringify(e)}function r(e,t){if(e)try{return JSON.parse(e)}catch(e){console.error(e)}return t}Object.defineProperty(n,"__esModule",{value:!0});var i=e("../../../lib/lang")
;n.newObjectStorage=function(e){return{remove:function(t){for(var n=0,a=t;n<a.length;n++){var r=a[n];e.removeItem(r)}return Promise.resolve(null)},store:function(t){
for(var n=0,r=Object.entries(t);n<r.length;n++){var i=r[n],o=i[0],s=i[1];null!=s?e.setItem(o,a(s)):e.removeItem(o)}return Promise.resolve(null)},load:function(t){
for(var n=i.map(),a=0,o=Object.entries(t);a<o.length;a++){var s=o[a],c=s[0],l=s[1];n[c]=r(e.getItem(c),l)}return Promise.resolve(n)}}}},{"../../../lib/lang":139}],41:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("react"),i=e("./practice"),o=e("./settings");n.newRootPage=function(e,t,n){return r.createElement(s,{settings:e,database:t,
lessonFactory:n})};var s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={configure:!1},n}return a.__extends(t,e),t.prototype.render=function(){
var e=this,t=e.props,n=t.settings,a=t.database,r=t.lessonFactory;return e.state.configure?o.newSettingsPage(n,a,r,function(){e.setState(Object.assign({},e.state,{configure:!1}))
}):i.newPracticePage(n,a,r,function(){e.setState(Object.assign({},e.state,{configure:!0}))})},t}(r.Component);n.RootPage=s},{"./practice":31,"./settings":42,react:"react",tslib:"tslib"}],
42:[function(e,t,n){"use strict";function a(e){var t=e.onClick;return i.createElement("div",{className:"u-hFlex u-justifyContentEnd u-gridRow"},i.createElement(s.Button,{
icon:i.createElement(l.default,null),label:"Done",title:"Apply changes and go start practicing",onClick:t}))}Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("tslib"),i=e("react"),o=e("../../../lib/promise"),s=e("../../../lib/ui/button"),c=e("../../../lib/ui/tabs"),l=e("../../../res/icon/custom/check"),u=e("./settings/layout"),d=e("./settings/lesson"),f=e("./settings/misc")
;n.newSettingsPage=function(e,t,n,a){return i.createElement(m,{settings:e,database:t,lessonFactory:n,onSubmit:a})};var m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}
return r.__extends(t,e),t.prototype.render=function(){function e(e){n.validate(),n.store().then(function(){l()},o.watcher)}var t=this.props,n=t.settings,r=t.database,s=t.lessonFactory,l=t.onSubmit
;return i.createElement("section",{className:"Dialog"},i.createElement(c.TabList,null,i.createElement(c.Tab,{label:"Learning Mode"},i.createElement(d.default,{settings:n,database:r,lessonFactory:s
}),i.createElement(a,{onClick:e})),i.createElement(c.Tab,{label:"Keyboard Layout"},i.createElement(u.default,{settings:n}),i.createElement(a,{onClick:e})),i.createElement(c.Tab,{label:"Miscellaneous"
},i.createElement(f.default,{settings:n}),i.createElement(a,{onClick:e}))))},t}(i.Component);n.SettingsPage=m},{"../../../lib/promise":144,"../../../lib/ui/button":159,"../../../lib/ui/tabs":171,
"../../../res/icon/custom/check":177,"./settings/layout":43,"./settings/lesson":44,"./settings/misc":47,react:"react",tslib:"tslib"}],177:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../SvgIcon"),i=e("react");n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"}))}},{"../SvgIcon":175,react:"react",
tslib:"tslib"}],171:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("classnames"),i=e("prop-types"),o=e("react"),s=e("../keyboard"),c=function(e){
function t(t){var n=e.call(this,t)||this;return n.state={isFocused:!1,selectedIndex:t.selectedIndex},n}return a.__extends(t,e),t.prototype.render=function(){function e(e){return function(t){
t&&!f&&h&&e==g&&t.focus()}}function t(e){}function n(e){}function a(e){return function(t){t.preventDefault(),c(!0,e)}}function i(e){return function(t){switch(s.normalize(t.nativeEvent).code){
case"ArrowUp":case"ArrowLeft":t.preventDefault(),c(!0,e-1);break;case"ArrowDown":case"ArrowRight":t.preventDefault(),c(!0,e+1)}}}function c(e,t){f||(t<0?t=k.length-1:t>=k.length&&(t=0),
!1!==y(t)&&l.setState(Object.assign({},l.state,{isFocused:e,selectedIndex:t}),function(){p(t),b(t)}))}
var l=this,u=l.props,d=u.className,f=u.disabled,m=u.children,p=u.onAfterChange,y=u.onBeforeChange,b=u.onSelect,v=l.state,h=v.isFocused,g=v.selectedIndex,k=o.Children.toArray(m),E=k[g],_=[]
;k.forEach(function(s,c){var l=s==E;_.push(o.createElement("span",{key:"tab-spacer-"+c,className:"TabList-spacer"}));var u=r("TabList-item",l?"TabList-item--active":"TabList-item--inactive")
;_.push(o.createElement("span",{key:"tab-item-"+c,ref:e(c),className:u,tabIndex:!f&&l?0:null,title:s.props.title,onBlur:t,onClick:a(c),onFocus:n,onKeyDown:i(c)},s.props.label))}),
_.push(o.createElement("span",{key:"tab-spacer-last",className:"TabList-spacer"}));var K=r("TabList",f&&"TabList--disabled",d);return o.createElement("div",{className:K},o.createElement("div",{
className:"TabList-menu"},_),o.createElement("div",{className:"TabList-body"},E.props.children))},t.propTypes={className:i.any,disabled:i.bool,children:i.arrayOf(i.element),selectedIndex:i.number,
onAfterChange:i.func,onBeforeChange:i.func,onSelect:i.func},t.defaultProps={className:null,disabled:!1,children:null,selectedIndex:0,onAfterChange:function(){},onBeforeChange:function(){},
onSelect:function(){}},t}(o.Component);n.TabList=c;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){return null},
t.propTypes={children:i.node,label:i.node,title:i.string},t.defaultProps={children:null,label:null,title:null},t}(o.Component);n.Tab=l},{"../keyboard":138,classnames:"classnames",
"prop-types":"prop-types",react:"react",tslib:"tslib"}],47:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("react"),i=e("../../../../lib/ui/checkbox"),o=e("../../../../lib/ui/form"),s=e("../../../../lib/ui/radio"),c=e("../../../util/enum"),l=e("../../settings"),u=function(e){
function t(t){var n=e.call(this,t)||this,a=t.settings,r=a.stopOnError,i=a.speedUnit,o=a.enableSound;return n.state={stopOnError:r,speedUnit:i,enableSound:o},n}return a.__extends(t,e),
t.prototype.componentWillReceiveProps=function(e){var t=e.settings,n=t.stopOnError,a=t.speedUnit,r=t.enableSound;this.setState(Object.assign({},this.state,{stopOnError:n,speedUnit:a,enableSound:r}))},
t.prototype.render=function(){function e(e){n.speedUnit=c.byId(l.SPEED_UNIT,e),t.setState(Object.assign({},t.state,{speedUnit:n.speedUnit}))}
var t=this,n=t.props.settings,a=t.state,u=a.stopOnError,d=a.speedUnit,f=a.enableSound;return r.createElement("div",{className:"u-gridRow"},r.createElement(o.FieldSet,{legend:"Learning Options"
},r.createElement("p",{className:"u-fieldList"},r.createElement("span",{className:"u-field"},r.createElement(i.CheckBox,{label:"Stop cursor on error",checked:u,onChange:function(e){n.stopOnError=e,
t.setState(Object.assign({},t.state,{stopOnError:n.stopOnError}))}
}))),r.createElement("p",null,"When enabled the cursor will not advance until you type the right character at the current position.")),r.createElement(o.FieldSet,{legend:"Interface Options"
},r.createElement("p",{className:"u-fieldList"},r.createElement("span",{className:"u-field"},"Measure typing speed in:"),r.createElement("span",{className:"u-field"},r.createElement(s.Radio,{
onSelect:e,checked:d==l.SPEED_UNIT.WPM,name:"speedUnit",value:l.SPEED_UNIT.WPM.id,label:"Words per minute",title:"Measure typing speed in words per minute."})),r.createElement("span",{
className:"u-field"},r.createElement(s.Radio,{onSelect:e,checked:d==l.SPEED_UNIT.CPM,name:"speedUnit",value:l.SPEED_UNIT.CPM.id,label:"Characters per minute",
title:"Measure typing speed in characters per minute."
}))),r.createElement("p",null,"For the purpose of typing measurement, each word is standardized to be five characters or keystrokes long in English, including spaces and punctuation."),r.createElement("p",{
className:"u-fieldList"},r.createElement("span",{className:"u-field"},r.createElement(i.CheckBox,{label:"Enable sounds",checked:f,onChange:function(e){n.enableSound=e,
t.setState(Object.assign({},t.state,{enableSound:n.enableSound}))}}))),r.createElement("p",null,"Make extra noise when typing and on errors.")))},t}(r.Component);n.default=u},{
"../../../../lib/ui/checkbox":160,"../../../../lib/ui/form":161,"../../../../lib/ui/radio":169,"../../../util/enum":51,"../../settings":25,react:"react",tslib:"tslib"}],44:[function(e,t,n){
"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("react"),i=e("../../../../lib/ui/radio"),o=e("../../../util/enum"),s=e("../../database"),c=e("../../lesson"),l=e("../../settings"),u=e("../loader/lesson"),d=e("./lesson/custom"),f=e("./lesson/guided")
;n.default=function(e){var t=e.settings,n=e.database,a=e.lessonFactory;return r.createElement(u.LessonLoader,{promise:function(){return a.loadGuided(t)},component:function(e){
var a=s.newDataMap(n.data()).dataForKey(t.modeKey),i=c.newStatistics(e.letters,a);return e.update(i),r.createElement(m,{settings:t,statistics:i,lesson:e})}})};var m=function(e){function t(t){
var n=e.call(this,t)||this,a=t.settings.mode;return n.state={mode:a},n}return a.__extends(t,e),t.prototype.render=function(){function e(e){a.mode=o.byId(l.MODE,e),t.setState(Object.assign({},t.state,{
mode:a.mode}))}var t=this,n=t.props,a=n.settings,s=n.statistics,c=n.lesson,u=t.state.mode;return r.createElement("div",{className:"u-gridRow"},r.createElement("div",{className:"Settings-modeSwitch"
},r.createElement("div",{className:"Settings-modeSwitchGroup"},r.createElement("div",{className:"Settings-modeSwitchCaption"},"Beginner Mode"),r.createElement("div",{
className:"Settings-modeSwitchItem"},r.createElement(i.Radio,{onSelect:e,checked:u==l.MODE.GUIDED,name:"mode",value:l.MODE.GUIDED.id,label:"Guided Lessons",
title:"A best mode for beginners. Computer will give you lessons matching your skills."}))),r.createElement("div",{className:"Settings-modeSwitchGroup"},r.createElement("div",{
className:"Settings-modeSwitchCaption"},"Advanced Mode"),r.createElement("div",{className:"Settings-modeSwitchItem"},r.createElement(i.Radio,{onSelect:e,checked:u==l.MODE.IMPORT_WEBSITE,name:"mode",
value:l.MODE.IMPORT_WEBSITE.id,label:"Import text from web site",title:"Import content of a web site of web blog."})),r.createElement("div",{className:"Settings-modeSwitchItem"
},r.createElement(i.Radio,{onSelect:e,checked:u==l.MODE.IMPORT_TEXT,name:"mode",value:l.MODE.IMPORT_TEXT.id,label:"Provide your own custom text",title:"Paste your own text to type out."
})))),u==l.MODE.GUIDED&&r.createElement(f.ModeGuided,{settings:a,statistics:s,lesson:c}),u==l.MODE.IMPORT_WEBSITE&&r.createElement(d.ModeUrl,{settings:a
}),u==l.MODE.IMPORT_TEXT&&r.createElement(d.ModeText,{settings:a}))},t}(r.Component)},{"../../../../lib/ui/radio":169,"../../../util/enum":51,"../../database":10,"../../lesson":16,"../../settings":25,
"../loader/lesson":29,"./lesson/custom":45,"./lesson/guided":46,react:"react",tslib:"tslib"}],169:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("classnames"),i=e("prop-types"),o=e("react"),s=e("../../res/icon/material-design/toggle/radio_button_checked"),c=e("../../res/icon/material-design/toggle/radio_button_unchecked"),l=function(e){
function t(t){var n=e.call(this,t)||this;return n.state={isChecked:t.defaultChecked||t.checked||!1,isFocused:!1},n}return a.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){
null!=e.checked&&this.setState(Object.assign({},this.state,{isChecked:e.checked}))},t.prototype.blur=function(){this.input&&this.input.blur()},t.prototype.focus=function(){
this.input&&this.input.focus()},t.prototype.render=function(){
var e=this,t=e.props,n=t.checked,i=t.children,s=t.className,c=t.defaultChecked,l=t.disabled,u=t.iconOn,d=t.iconOff,f=t.label,m=t.name,p=t.tabIndex,y=t.title,b=t.value,v=t.onBlur,h=t.onChange,g=t.onClick,k=t.onFocus,E=t.onKeyDown,_=t.onKeyUp,K=t.onMouseDown,S=t.onMouseEnter,N=t.onMouseLeave,x=t.onMouseUp,w=t.onSelect,O=e.state,D=O.isChecked,C=O.isFocused,M=r("Radio",D&&"Radio--checked",l&&"is-disabled",C&&"is-focused",s),I={}
;null!=n&&(I.checked=n),null!=c&&(I.defaultChecked=c);var T=n?o.cloneElement(u,{className:"Radio-icon"}):o.cloneElement(d,{className:"Radio-icon"});return o.createElement("label",{className:M,title:y,
onClick:function(e){g(e)},onKeyDown:E,onKeyUp:_,onMouseDown:K,onMouseEnter:S,onMouseLeave:N,onMouseUp:x},o.createElement("input",a.__assign({},I,{ref:function(t){e.input=t},disabled:l,name:m,
tabIndex:p,type:"radio",value:b,onBlur:function(t){e.setState(Object.assign({},e.state,{isFocused:!1}),function(){v(t)})},onChange:function(t){var n=e.input.checked
;e.setState(Object.assign({},e.state,{isChecked:n}),function(){h(n),n&&w(b)})},onFocus:function(t){e.setState(Object.assign({},e.state,{isFocused:!0}),function(){k(t)})}})),T,o.createElement("span",{
className:"Radio-label"},f||i))},t.propTypes={checked:i.bool,className:i.any,defaultChecked:i.bool,disabled:i.bool,iconOn:i.element,iconOff:i.element,label:i.node,name:i.string,tabIndex:i.number,
title:i.string,value:i.string,onBlur:i.func,onChange:i.func,onClick:i.func,onFocus:i.func,onKeyDown:i.func,onKeyUp:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseUp:i.func,
onSelect:i.func},t.defaultProps={checked:null,className:null,defaultChecked:null,disabled:!1,iconOn:o.createElement(s.default,null),iconOff:o.createElement(c.default,null),label:null,name:null,
tabIndex:0,title:null,value:"",onBlur:function(){},onChange:function(){},onClick:function(){},onFocus:function(){},onKeyDown:function(){},onKeyUp:function(){},onMouseDown:function(){},
onMouseEnter:function(){},onMouseLeave:function(){},onMouseUp:function(){},onSelect:function(){}},t}(o.Component);n.Radio=l},{"../../res/icon/material-design/toggle/radio_button_checked":205,
"../../res/icon/material-design/toggle/radio_button_unchecked":206,classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],206:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],
205:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],46:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("react"),i=e("../../../../../lib/ui/checkbox"),o=e("../../../../../lib/ui/form"),s=e("../../../../../lib/ui/label"),c=e("../../../fragment"),l=e("../../lesson/key"),u=e("../../textinput"),d=function(e){
function t(t){var n=e.call(this,t)||this,a=t.settings.lesson,r=a.complexity,i=a.length,o=a.capitals,s=a.punctuators;return n.state={complexity:r,length:i,capitals:o,punctuators:s},n}
return a.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){var t=e.settings.lesson,n=t.complexity,a=t.length,r=t.capitals,i=t.punctuators;this.setState(Object.assign({},this.state,{
complexity:n,length:a,capitals:r,punctuators:i}))},t.prototype.render=function(){
var e=this,t=e.props,n=t.settings,a=t.statistics,d=t.lesson,f=e.state,m=f.complexity,p=f.length,y=f.capitals,b=f.punctuators;d.update(a);var v=d.generate(),h=c.newFragment({stopOnError:!1,
forgiving:!1,modeKey:null},v)
;return r.createElement("div",null,r.createElement(o.FieldSet,null,r.createElement("p",null,"This mode will automatically generate typing lessons with random words in pseudo-English language. The key set is expanded dynamically based on user performance."),r.createElement("p",{
className:"u-fieldList"},r.createElement("span",{className:"u-field"},r.createElement("label",null,"Extend alphabet size:")),r.createElement("span",{className:"u-field"},r.createElement("input",{
className:"u-wide",type:"range",min:1,max:100,value:Math.round(100*m),title:"Increase lesson's key set size",onChange:function(t){n.lesson.complexity=t.target.valueAsNumber/100,
e.setState(Object.assign({},e.state,{complexity:n.lesson.complexity}))}})),r.createElement("span",{className:"u-field"},r.createElement("label",null,"Extend lesson length:")),r.createElement("span",{
className:"u-field"},r.createElement("input",{className:"u-wide",type:"range",min:1,max:100,value:Math.round(100*p),title:"Increase lesson's length",onChange:function(t){
n.lesson.length=t.target.valueAsNumber/100,e.setState(Object.assign({},e.state,{length:n.lesson.length}))}}))),r.createElement("p",{className:"u-fieldList"},r.createElement("span",{className:"u-field"
},r.createElement(i.CheckBox,{label:"Enable capital letters",title:"Generate text with capital letters",checked:y,onChange:function(t){n.lesson.capitals=t,e.setState(Object.assign({},e.state,{
capitals:n.lesson.capitals}))}})),r.createElement("span",{className:"u-field"},r.createElement(i.CheckBox,{label:"Enable punctuation characters",
title:"Add punctuation characters to the generated text",checked:b,onChange:function(t){n.lesson.punctuators=t,e.setState(Object.assign({},e.state,{punctuators:n.lesson.punctuators}))}
})))),r.createElement(o.FieldSet,{legend:"Preview"},r.createElement("div",{className:"Practice-indicator GaugeRow u-hFlex",title:"The current key set, on order of letter frequency"
},r.createElement(s.Name,{className:"GaugeRow-name",name:"Lesson's key set"}),r.createElement(l.KeySet,{id:"Practice-keySet",className:"u-sizeFill u-hFlex",settings:n,statistics:a,lesson:d,
onSelect:function(e){}})),r.createElement("div",{className:"Practice-indicator GaugeRow u-hFlex",title:"The current key details"},r.createElement(s.Name,{className:"GaugeRow-name",name:"Current key"
}),r.createElement(l.CurrentKey,{id:"Practice-currentKey",className:"u-sizeFill u-hFlex",settings:n,statistics:a,lesson:d})),r.createElement("div",null,r.createElement(u.TextExample,{fragment:h}))))},
t}(r.Component);n.ModeGuided=d},{"../../../../../lib/ui/checkbox":160,"../../../../../lib/ui/form":161,"../../../../../lib/ui/label":163,"../../../fragment":15,"../../lesson/key":27,
"../../textinput":49,react:"react",tslib:"tslib"}],45:[function(e,t,n){"use strict";function a(){return i.createElement(c.FieldSet,{legend:"Bookmarklet"
},i.createElement("p",null,"Import any web page into keybr with a single click. Install the keybr bookmarklet button in your browser's bookmark bar. Later, when you visit a web page, just click this button to import page's content into keybr."),i.createElement("p",{
className:"u-textCenter"},i.createElement(o.Button,{onClick:function(e){e.preventDefault(),alert("To start using this bookmarklet, drag it to your browser's bookmarks toolbar.")},
href:"javascript:location.href='http://www.keybr.com/?url='+encodeURIComponent(location.href)",label:"KEYBR.COM",title:"Type this page in keybr.com"
})," ← This is the bookmarklet button, drag it to your bookmarks bar."))}Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("tslib"),i=e("react"),o=e("../../../../../lib/ui/button"),s=e("../../../../../lib/ui/checkbox"),c=e("../../../../../lib/ui/form"),l=e("../../../../../lib/ui/textfield"),u=e("../../../../example"),d=function(e){
function t(t){var n=e.call(this,t)||this,a=t.settings.text.url;return n.state={url:a},n}return r.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){var t=e.settings.text.url
;this.setState(Object.assign({},this.state,{url:t}))},t.prototype.render=function(){function e(e){var a=e.url;return function(e){e.preventDefault(),n.text.url=a,t.setState(Object.assign({},t.state,{
url:n.text.url}))}}var t=this,n=t.props.settings,r=t.state.url
;return i.createElement("div",null,i.createElement(c.FieldSet,null,i.createElement("p",null,"Paste web site url here, its content will be imported for exercises:"),i.createElement("p",null,i.createElement("small",null,"Examples: ",u.EXAMPLE_URL.map(function(t,n){
return i.createElement("span",{key:n},n>0?", ":null,i.createElement("a",{href:"#",onClick:e(t)},t.title))}))),i.createElement("p",null,i.createElement(l.TextField,{className:"u-block u-fluid",
onChange:function(e){n.text.url=e.target.value,t.setState(Object.assign({},t.state,{url:n.text.url}))},value:r,type:"url",placeholder:"Web site url..."})),i.createElement(m,{settings:n
})),i.createElement(a,null))},t}(i.Component);n.ModeUrl=d;var f=function(e){function t(t){var n=e.call(this,t)||this,a=t.settings.text.content;return n.state={content:a},n}return r.__extends(t,e),
t.prototype.componentWillReceiveProps=function(e){var t=e.settings.text.content;this.setState(Object.assign({},this.state,{content:t}))},t.prototype.render=function(){function e(e){var a=e.content
;return function(e){e.preventDefault(),n.text.content=a,t.setState(Object.assign({},t.state,{content:n.text.content}))}}var t=this,n=t.props.settings,a=t.state.content
;return i.createElement("div",null,i.createElement(c.FieldSet,null,i.createElement("p",null,"Paste your custom text here, it will be used in exercises:"),i.createElement("p",null,i.createElement("small",null,"Examples: ",u.EXAMPLE_TEXT.map(function(t,n){
return i.createElement("span",{key:n},n>0?", ":null,i.createElement("a",{href:"#",onClick:e(t)},t.title))}))),i.createElement("p",null,i.createElement(l.TextField,{className:"u-block u-fluid",
onChange:function(e){n.text.content=e.target.value,t.setState(Object.assign({},t.state,{content:n.text.content}))},value:a,type:"textarea",placeholder:"Custom text..."})),i.createElement(m,{settings:n
})))},t}(i.Component);n.ModeText=f;var m=function(e){function t(t){var n=e.call(this,t)||this,a=t.settings.text.mangle,r=a.simplify,i=a.lowercase;return n.state={simplify:r,lowercase:i},n}
return r.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){var t=e.settings.text.mangle,n=t.simplify,a=t.lowercase;this.setState(Object.assign({},this.state,{simplify:n,lowercase:a}))},
t.prototype.render=function(){var e=this,t=e.props.settings,n=e.state,a=n.simplify,r=n.lowercase;return i.createElement("p",{className:"u-fieldList"},i.createElement("span",{className:"u-field"
},"Clean-up text:"),i.createElement("span",{className:"u-field"},i.createElement(s.CheckBox,{checked:a,onChange:function(n){t.text.mangle.simplify=n,e.setState(Object.assign({},e.state,{
simplify:t.text.mangle.simplify}))},label:"Remove punctuation",title:"Remove punctuation from the text to make it simpler to type"})),i.createElement("span",{className:"u-field"
},i.createElement(s.CheckBox,{checked:r,onChange:function(n){t.text.mangle.lowercase=n,e.setState(Object.assign({},e.state,{lowercase:t.text.mangle.lowercase}))},label:"Transform to lowercase",
title:"Transform all text to lower case to make it simpler to type"})))},t}(i.Component)},{"../../../../../lib/ui/button":159,"../../../../../lib/ui/checkbox":160,"../../../../../lib/ui/form":161,
"../../../../../lib/ui/textfield":172,"../../../../example":2,react:"react",tslib:"tslib"}],172:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("classnames"),i=e("prop-types"),o=e("react"),s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={isFocused:!1},n}return a.__extends(t,e),
t.prototype.blur=function(){this.input&&this.input.blur()},t.prototype.focus=function(){this.input&&this.input.focus()},t.prototype.getValue=function(){return this.input?this.input.value:void 0},
t.prototype.render=function(){function e(e){s.input=e}function t(e){s.setState(Object.assign({},s.state,{isFocused:!1}),function(){g(e)})}function n(e){s.setState(Object.assign({},s.state,{
isFocused:!0}),function(){_(e)})}function i(e){k(e)}
var s=this,c=s.props,l=c.className,u=c.defaultValue,d=c.disabled,f=c.maxLength,m=c.name,p=c.placeholder,y=c.tabIndex,b=c.title,v=c.type,h=c.value,g=c.onBlur,k=c.onChange,E=c.onClick,_=c.onFocus,K=c.onKeyDown,S=c.onKeyUp,N=c.onMouseDown,x=c.onMouseEnter,w=c.onMouseLeave,O=c.onMouseUp,D=s.state.isFocused,C=r("TextField",d&&"is-disabled",D&&"is-focused",l),M={}
;return null!=h&&(M.value=h),null!=u&&(M.defaultValue=u),"textarea"==v?o.createElement("textarea",a.__assign({},M,{ref:e,className:C,disabled:d,maxLength:f,name:m,placeholder:p,tabIndex:y,title:b,
onBlur:t,onChange:i,onClick:E,onFocus:n,onKeyDown:K,onKeyUp:S,onMouseDown:N,onMouseEnter:x,onMouseLeave:w,onMouseUp:O})):o.createElement("input",a.__assign({},M,{ref:e,className:C,disabled:d,
maxLength:f,name:m,placeholder:p,tabIndex:y,title:b,type:v,onBlur:t,onChange:i,onClick:E,onFocus:n,onKeyDown:K,onKeyUp:S,onMouseDown:N,onMouseEnter:x,onMouseLeave:w,onMouseUp:O}))},t.propTypes={
className:i.any,defaultValue:i.string,disabled:i.bool,maxLength:i.string,name:i.string,placeholder:i.string,tabIndex:i.number,title:i.string,type:i.oneOf(["text","textarea","email","url","password"]),
value:i.string,onBlur:i.func,onChange:i.func,onClick:i.func,onFocus:i.func,onKeyDown:i.func,onKeyUp:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseUp:i.func},t.defaultProps={
className:null,defaultValue:null,disabled:!1,maxLength:null,name:null,placeholder:null,tabIndex:0,title:null,type:"text",value:null,onBlur:function(){},onChange:function(){},onClick:function(){},
onFocus:function(){},onKeyDown:function(){},onKeyUp:function(){},onMouseDown:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseUp:function(){}},t}(o.Component);n.TextField=s},{
classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],43:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("react"),i=e("../../../../lib/lang"),o=e("../../../../lib/ui/checkbox"),s=e("../../../../lib/ui/form"),c=e("../../../../lib/ui/optionlist"),l=e("../../../keyboard/input"),u=e("../../../keyboard/layout"),d=e("../../../util/enum"),f=e("../keyboard"),m=function(e){
function t(t){for(var n=e.call(this,t)||this,a=i.map(),r=u.getLayouts(),o=0,s=Object.values(r);o<s.length;o++){var c=s[o].language;null==a[c.id]&&(a[c.id]=c)}n.languageList=Object.values(a),
n.layoutList=Object.values(r);var l=t.settings,d=l.layout,f=l.emulateLayout;return n.state={layout:d,emulateLayout:f},n}return a.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){
var t=e.settings,n=t.layout,a=t.emulateLayout;this.setState(Object.assign({},this.state,{layout:n,emulateLayout:a}))},t.prototype.componentDidMount=function(){this.listen()},
t.prototype.componentDidUpdate=function(e,t){this.listen()},t.prototype.componentWillUnmount=function(){this.unlisten()},t.prototype.render=function(){
var e=this,t=e.props.settings,n=e.state,a=n.layout,i=n.emulateLayout,l=e.languageList.map(function(e){return{value:e.id,name:e.name}}),m=e.layoutList.filter(function(e){
return e.language.id==a.language.id}).map(function(e){return{value:e.id,name:e.name}});return r.createElement("div",{className:"u-gridRow"},r.createElement(s.FieldSet,{legend:"Options"
},r.createElement("p",{className:"u-fieldList"},r.createElement("span",{className:"u-field"},"Language:"),r.createElement("span",{className:"u-field"},r.createElement(c.OptionList,{options:l,
value:a.language.id,onSelect:function(n){t.layout=e.layoutList.find(function(e){return e.language.id==n}),e.setState(Object.assign({},e.state,{layout:t.layout}))},title:"Select language"
})),r.createElement("span",{className:"u-field"},"Layout:"),r.createElement("span",{className:"u-field"},r.createElement(c.OptionList,{options:m,value:a.id,onSelect:function(n){
t.layout=d.byId(u.getLayouts(),n),e.setState(Object.assign({},e.state,{layout:t.layout}))},title:"Select layout"})),r.createElement("span",{className:"u-field"},r.createElement(o.CheckBox,{
label:"Emulate layout",checked:i,disabled:null==a.variantOf,onChange:function(n){t.emulateLayout=n,e.setState(Object.assign({},e.state,{emulateLayout:t.emulateLayout}))},
title:"Emulate the selected layout when the standard layout is set in the system"})))),r.createElement(s.FieldSet,{legend:"Preview"},r.createElement(f.Keyboard,{ref:function(t){e.keyboard=t},layout:a,
full:!0},r.createElement(f.KeyLayer,null))))},t.prototype.listen=function(){var e=this,t=e.state,n=t.layout,a=t.emulateLayout;l.translate(l.newTranslator(n,a,{onKeyDown:function(t){
e.keyboard.keyDown(t)},onKeyUp:function(t){e.keyboard.keyUp(t)},onInput:function(e){}}))},t.prototype.unlisten=function(){l.translate(null)},t}(r.Component);n.default=m},{"../../../../lib/lang":139,
"../../../../lib/ui/checkbox":160,"../../../../lib/ui/form":161,"../../../../lib/ui/optionlist":167,"../../../keyboard/input":3,"../../../keyboard/layout":5,"../../../util/enum":51,"../keyboard":26,
react:"react",tslib:"tslib"}],161:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("classnames"),i=e("prop-types"),o=e("react"),s=function(e){
function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.children,a=e.title,i=r("Form",t)
;return o.createElement("form",{className:i,title:a},n)},t.propTypes={className:i.any,title:i.string},t.defaultProps={className:null,title:null},t}(o.Component);n.Form=s;var c=function(e){
function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){
var e=this.props,t=e.className,n=e.children,a=e.disabled,i=e.legend,s=e.title,c=r("FieldSet",t);return o.createElement("fieldset",{className:c,disabled:a,title:s},i&&o.createElement("legend",{
className:"Legend"},i),n)},t.propTypes={className:i.any,disabled:i.bool,legend:i.node,title:i.string},t.defaultProps={className:null,disabled:!1,legend:null,title:null},t}(o.Component);n.FieldSet=c
;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){
var e=this.props,t=e.className,n=e.children,a=e.title,i=r("Legend",t);return o.createElement("legend",{className:i,title:a},n)},t.propTypes={className:i.any,title:i.string},t.defaultProps={
className:null,title:null},t}(o.Component);n.Legend=l},{classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],160:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("classnames"),i=e("prop-types"),o=e("react"),s=e("../../res/icon/material-design/toggle/check_box"),c=e("../../res/icon/material-design/toggle/check_box_outline_blank"),l=function(e){
function t(t){var n=e.call(this,t)||this;return n.state={isChecked:t.defaultChecked||t.checked||!1,isFocused:!1},n}return a.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){
null!=e.checked&&this.setState(Object.assign({},this.state,{isChecked:e.checked}))},t.prototype.blur=function(){this.input&&this.input.blur()},t.prototype.focus=function(){
this.input&&this.input.focus()},t.prototype.render=function(){
var e=this,t=e.props,n=t.checked,i=t.children,s=t.className,c=t.defaultChecked,l=t.disabled,u=t.iconOn,d=t.iconOff,f=t.label,m=t.name,p=t.tabIndex,y=t.title,b=t.value,v=t.onBlur,h=t.onChange,g=t.onClick,k=t.onFocus,E=t.onKeyDown,_=t.onKeyUp,K=t.onMouseDown,S=t.onMouseEnter,N=t.onMouseLeave,x=t.onMouseUp,w=e.state,O=w.isChecked,D=w.isFocused,C=r("CheckBox",O&&"CheckBox--checked",l&&"is-disabled",D&&"is-focused",s),M={}
;null!=n&&(M.checked=n),null!=c&&(M.defaultChecked=c);var I=n?o.cloneElement(u,{className:"CheckBox-icon"}):o.cloneElement(d,{className:"CheckBox-icon"});return o.createElement("label",{className:C,
title:y,onClick:function(e){g(e)},onKeyDown:E,onKeyUp:_,onMouseDown:K,onMouseEnter:S,onMouseLeave:N,onMouseUp:x},o.createElement("input",a.__assign({},M,{ref:function(t){e.input=t},disabled:l,name:m,
tabIndex:p,type:"checkbox",value:b,onBlur:function(t){e.setState(Object.assign({},e.state,{isFocused:!1}),function(){v(t)})},onChange:function(t){var n=e.input.checked
;e.setState(Object.assign({},e.state,{isChecked:n}),function(){h(n)})},onFocus:function(t){e.setState(Object.assign({},e.state,{isFocused:!0}),function(){k(t)})}})),I,o.createElement("span",{
className:"CheckBox-label"},f||i))},t.propTypes={checked:i.bool,className:i.any,defaultChecked:i.bool,disabled:i.bool,iconOn:i.element,iconOff:i.element,label:i.node,name:i.string,tabIndex:i.number,
title:i.string,value:i.string,onBlur:i.func,onChange:i.func,onClick:i.func,onFocus:i.func,onKeyDown:i.func,onKeyUp:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseUp:i.func},
t.defaultProps={checked:null,className:null,defaultChecked:null,disabled:!1,iconOn:o.createElement(s.default,null),iconOff:o.createElement(c.default,null),label:null,name:null,tabIndex:0,title:null,
value:"",onBlur:function(){},onChange:function(){},onClick:function(){},onFocus:function(){},onKeyDown:function(){},onKeyUp:function(){},onMouseDown:function(){},onMouseEnter:function(){},
onMouseLeave:function(){},onMouseUp:function(){}},t}(o.Component);n.CheckBox=l},{"../../res/icon/material-design/toggle/check_box":203,
"../../res/icon/material-design/toggle/check_box_outline_blank":204,classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],204:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M38 10v28H10V10h28m0-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z"}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],203:[function(e,t,n){
"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM20 34L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"}))}},{"../../SvgIcon":175,react:"react",
tslib:"tslib"}],167:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("classnames"),i=e("prop-types"),o=e("react"),s=navigator.userAgent.includes("Trident/7.0"),c=function(e){function t(t){var n=e.call(this,t)||this
;if(null!=t.defaultValue&&null!=t.value)throw new Error;var a={currentValue:null,isFocused:!1,isOpen:!1};return null!=t.defaultValue&&(a.currentValue=t.defaultValue),
null!=t.value&&(a.currentValue=t.value),n.state=a,n}return a.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){if(null!=e.defaultValue&&null!=e.value)throw new Error
;null!=e.value&&this.setState(Object.assign({},this.state,{currentValue:e.value}))},t.prototype.blur=function(){this.button&&this.button.blur()},t.prototype.focus=function(){
this.button&&this.button.focus()},t.prototype.render=function(){function e(e){return function(n){n.preventDefault(),i||(null==d?t.setState(Object.assign({},t.state,{currentValue:e.value,isOpen:!1
}),function(){e.value!=K&&E(e.value)}):t.setState(Object.assign({},t.state,{isOpen:!1}),function(){e.value!=K&&E(e.value)}))}}var t=this,n=t.props,a=n.className,i=(n.defaultValue,
n.disabled),c=n.options,l=n.tabIndex,u=n.title,d=n.value,f=n.onBlur,m=n.onClick,p=n.onFocus,y=n.onKeyDown,b=n.onKeyUp,v=n.onMouseDown,h=n.onMouseEnter,g=n.onMouseLeave,k=n.onMouseUp,E=n.onSelect,_=t.state,K=_.currentValue,S=_.isFocused,N=_.isOpen,x=c.find(function(e){
return e.value==K})||null,w=r("OptionList",N&&"OptionList--open",i&&"is-disabled",S&&"is-focused",a),O=null!=x?x.name:"-";return o.createElement("span",{ref:function(e){t.button=e},className:w,
tabIndex:i?-1:l,title:u,onBlur:function(e){i||(s?t.setState(Object.assign({},t.state,{isFocused:!1}),function(){f(e)}):t.setState(Object.assign({},t.state,{isFocused:!1,isOpen:!1}),function(){f(e)}))
},onClick:m,onFocus:function(e){i||t.setState(Object.assign({},t.state,{isFocused:!0}),function(){p(e)})},onKeyDown:y,onKeyUp:b,onMouseDown:v,onMouseEnter:h,onMouseLeave:g,onMouseUp:k
},o.createElement("span",{className:"OptionList-placeholder",onClick:function(e){e.preventDefault(),i||t.setState(Object.assign({},t.state,{isOpen:!N}))}},o.createElement("span",{
className:"OptionList-placeholderName",title:O},O),o.createElement("span",{className:"OptionList-placeholderArrow"},N?"▼":"►")),N&&o.createElement("span",{className:"OptionList-list"
},c.map(function(t,n){return o.createElement("span",{key:n,className:"OptionList-item",title:t.name,onClick:e(t)},t.name)})))},t.propTypes={className:i.any,defaultValue:i.string,disabled:i.bool,
options:i.array,tabIndex:i.number,title:i.string,value:i.string,onBlur:i.func,onClick:i.func,onFocus:i.func,onKeyDown:i.func,onKeyUp:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,
onMouseUp:i.func,onSelect:i.func},t.defaultProps={className:null,defaultValue:null,disabled:!1,options:[],tabIndex:0,title:null,value:null,onBlur:function(){},onClick:function(){},
onFocus:function(){},onKeyDown:function(){},onKeyUp:function(){},onMouseDown:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseUp:function(){},onSelect:function(){}},t
}(o.Component);n.OptionList=c},{classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],31:[function(e,t,n){"use strict";function a(e){var t=e.onLayout,n=(e.onReset,e.onNext,
e.onHelp),a=e.onConfigure;return u.createElement("div",null,!1,!1,u.createElement(p.IconButton,{onClick:t,icon:u.createElement(E.default,null),title:"Switch layout"
}),u.createElement(v.ThemeButton,null),u.createElement(C.TextSizeButton,null),u.createElement(b.FullScreenButton,null),u.createElement(p.IconButton,{onClick:n,icon:u.createElement(g.default,null),
title:"Show guided tour with help slides"}),u.createElement(m.Button,{icon:u.createElement(k.default,null),label:"Settings...",
title:"Change lesson settings, configure language, keyboard layout, etc.",onClick:a}))}function r(e){var t=e.settings,n=e.lesson,a=e.statistics,r=t.speedUnit.measure;return u.createElement("div",{
className:"u-vFlex"},u.createElement("div",{className:"u-hFlex"},u.createElement(i,{id:"Practice-speed",className:["Practice-indicator","u-gridCell"],primaryName:"Speed",
primaryValue:u.createElement(y.Value,{value:d.default(r(a.lastSpeed),1)}),secondaryName:"Gain",secondaryValue:u.createElement(y.ValueDelta,{value:d.default(r(a.deltaSpeed),100),
title:"Difference from the average value. Positive values are better."}),title:"Typing speed in the last lesson"}),u.createElement(i,{id:"Practice-errors",
className:["Practice-indicator","u-gridCell"],primaryName:"Errors",primaryValue:u.createElement(y.Value,{value:d.default(a.lastErrors,1)}),secondaryName:"Gain",
secondaryValue:u.createElement(y.ValueDelta,{value:d.default(a.deltaErrors,100),invert:!0,title:"Difference from the average value. Negative values are better."}),
title:"Number of error in the last lesson"}),u.createElement(i,{id:"Practice-score",className:["Practice-indicator","u-gridCell"],primaryName:"Score",primaryValue:u.createElement(y.Value,{
value:d.default(a.lastScore,1)}),secondaryName:"Gain",secondaryValue:u.createElement(y.ValueDelta,{value:d.default(a.deltaScore,1),
title:"Difference from the average value. Positive values are better."}),title:"Score of the last lesson. Scores are greater when you type faster and with fewer errors."})),u.createElement("div",{
className:"Practice-indicator GaugeRow u-hFlex",title:"Changes in time to type a key, in milliseconds"},u.createElement(y.Name,{className:"GaugeRow-name",name:"Key time deltas"
}),u.createElement(x.KeyTimeDeltas,{id:"Practice-keyTimeDeltas",className:"u-sizeFill u-hFlex",settings:t,statistics:a,lesson:n})),u.createElement("div",{
className:"Practice-indicator GaugeRow u-hFlex",title:"The current key set, on order of letter frequency"},u.createElement(y.Name,{className:"GaugeRow-name",name:"Lesson's key set"
}),u.createElement(x.KeySet,{id:"Practice-keySet",className:"u-sizeFill u-hFlex",settings:t,statistics:a,lesson:n,onSelect:function(e){}})),u.createElement("div",{
className:"Practice-indicator GaugeRow u-hFlex",title:"The current key details"},u.createElement(y.Name,{className:"GaugeRow-name",name:"Current key"}),u.createElement(x.CurrentKey,{
id:"Practice-currentKey",className:"u-sizeFill u-hFlex",settings:t,statistics:a,lesson:n})))}function i(e){
var t=e.id,n=e.className,a=e.title,r=e.primaryName,i=e.primaryValue,o=e.secondaryName,s=e.secondaryValue,c=l("Gauge",n);return u.createElement("div",{id:t,className:c,title:a},u.createElement("div",{
className:"Gauge-primary"},u.createElement("span",{className:"Gauge-name Gauge-name--primary"},y.asName(r)),u.createElement("span",{className:"Gauge-value Gauge-value--primary"
},y.asValue(i))),u.createElement("div",{className:"Gauge-secondary"},u.createElement("span",{className:"Gauge-name Gauge-name--secondary"},y.asName(o)),u.createElement("span",{
className:"Gauge-value Gauge-value--secondary"},y.asValueDelta(s))))}function o(){h.startTour(u.createElement(s,null))}function s(){return u.createElement(h.Tour,{onStart:function(){},
onShow:function(e){},onClose:function(){}},u.createElement(h.Slide,{className:"Slide--large u-article"
},u.createElement("h1",null,"Learn Touch Typing"),u.createElement("p",null,"This is keybr.com, a web application that will help you teach touch typing. Touch typing is typing without using the sense of sight to find the keys. A person possessing touch typing skills will know their location on the keyboard through muscle memory. It can improve any individual's typing speed and accuracy dramatically."),u.createElement("p",null,"This is a short tutorial that will explain how this application works."),u.createElement("p",null,"You can use the left and right arrow keys to navigate through these slides.")),u.createElement(h.Slide,{
className:"Slide--large u-article"
},u.createElement("p",null,"This tutorial is based on these few principles:"),u.createElement("ul",null,u.createElement("li",null,"No boring, repetitive exercises. Unlike most other typing tutors, keybr does not force you to repeat the same lessons over and over again. This is very annoying and contributes very little to your learning."),u.createElement("li",null,"Keybr uses a sophisticated computer algorithm to generate typing lessons matching your skills. These lessons consist of random words generated from a subset of the current alphabet. The size of the subset and individual letter frequency is controlled by the algorithm to give you the best learning experience."))),u.createElement(h.Slide,{
className:"Slide--large u-article"
},u.createElement("p",null,"Initially it starts generating words from a small subset of the most frequent letters of the alphabet."),u.createElement("p",null,"When you are typing these words, keybr measures time to type a key for every letter in that subset. This time is used to measure your learning progress. The more familiar you become with a key, the shorter time does it takes you to type it."),u.createElement("p",null,"Once you familiarize yourself with the current subset of letters, the algorithm expands it, adding more and more letters to it.")),u.createElement(h.Slide,{
className:"Slide--large u-article"
},u.createElement("p",null,"As soon as the algorithm includes new letters to the current subset, frequency of these letters is artificially boosted, so that the newly added letters will appear in every generated word in a lesson."),u.createElement("p",null,"The algorithm can also artificially rearrange letter frequencies, putting emphasis on the letters with the worst time to type metric."),u.createElement("p",null,"So at any time, you will be typing the letters you are least familiar with.")),u.createElement(h.Slide,{
className:"Slide--small u-article",target:"#Practice-textInput",position:"n"
},u.createElement("p",null,"This is the text board. It displays the text to type out. The text is generated automatically.")),u.createElement(h.Slide,{className:"Slide--small u-article",
target:"#Practice-keyboard",position:"n"
},u.createElement("p",null,"This is the virtual keyboard. It helps you memorize key positions. Use it to find the keys, don't look at your keyboard!")),u.createElement(h.Slide,{
className:"Slide--small u-article",target:"#Practice-speed",position:"s"},u.createElement("p",null,"This is the typing speed indicator. Higher typing speed is better.")),u.createElement(h.Slide,{
className:"Slide--small u-article",target:"#Practice-errors",position:"s"
},u.createElement("p",null,"This is the error counter, it is increased every time you make a typo. Lower is better.")),u.createElement(h.Slide,{className:"Slide--small u-article",
target:"#Practice-score",position:"s"
},u.createElement("p",null,"This is the typing score in abstract points. Higher is better. The score is calculated from your typing speed, error count and the current alphabet size.")),u.createElement(h.Slide,{
className:"Slide--small u-article",target:"#Practice-keyTimeDeltas",position:"s"
},u.createElement("p",null,"This indicator shows how the time to type a key in the last lesson has changed compared to the average time for the same key.")),u.createElement(h.Slide,{
className:"Slide--small u-article",target:"#Practice-keySet",position:"s"
},u.createElement("p",null,"This indicator shows the current subset of letters used to generate lessons, and your confidence level for every letter in the subset:"),u.createElement("p",null,u.createElement(x.KeyLegend,{
isIncluded:!0,confidenceLevel:null})," ","A not calibrated key with unknown confidence level"),u.createElement("p",null,u.createElement(x.KeyLegend,{isIncluded:!0,confidenceLevel:0
})," ","A calibrated key with the least confidence level"),u.createElement("p",null,u.createElement(x.KeyLegend,{isIncluded:!0,confidenceLevel:1
})," ","A calibrated key with the most confidence level"),u.createElement("p",null,u.createElement(x.KeyLegend,{isIncluded:!0,confidenceLevel:1,isBoosted:!0
})," ","A key with boosted frequency"),u.createElement("p",null,u.createElement(x.KeyLegend,{isIncluded:!0,confidenceLevel:1,isForced:!0
})," ","A key that was manually included in lessons by the user"),u.createElement("p",null,u.createElement(x.KeyLegend,{isIncluded:!1,confidenceLevel:1
})," ","A key that was not yet included in lessons")),u.createElement(h.Slide,{className:"Slide--small u-article",target:"#Practice-currentKey",position:"s"
},u.createElement("p",null,"This indicator shows details about the key that is currently included in every lesson. This is the key with the worst typing speed so far.")))}
Object.defineProperty(n,"__esModule",{value:!0})
;var c=e("tslib"),l=e("classnames"),u=e("react"),d=e("../../../lib/math/round"),f=e("../../../lib/runtime/global"),m=e("../../../lib/ui/button"),p=e("../../../lib/ui/iconbutton"),y=e("../../../lib/ui/label"),b=e("../../../lib/ui/lnf/fullscreen-button"),v=e("../../../lib/ui/lnf/theme-button"),h=e("../../../lib/ui/tour"),g=e("../../../res/icon/custom/help"),k=e("../../../res/icon/custom/settings"),E=e("../../../res/icon/material-design/av/web"),_=(e("../../../res/icon/material-design/content/redo"),
e("../../../res/icon/material-design/content/undo"),
e("../../keyboard/input")),K=e("../events"),S=e("../practice"),N=e("./keyboard"),x=e("./lesson/key"),w=e("./loader/lesson"),O=e("./sound"),D=e("./textinput"),C=e("../../../lib/ui/lnf/text-size-button")
;n.newPracticePage=function(e,t,n,a){return u.createElement(w.LessonLoader,{promise:function(){return n.load(e)},component:function(n){return u.createElement(M,{settings:e,database:t,lesson:n,
practice:S.newPractice(e,t,n),onConfigure:a})}})};var M=function(e){function t(t){var n=e.call(this,t)||this;return n.unlisten=null,n.state={fragment:null,result:null,achievements:null,focus:!1,
layout:"normal"},n}return c.__extends(t,e),t.prototype.componentDidMount=function(){function e(e){s.reset()}function t(e){s.reset()}function n(e){s.reset()}_.translate(null)
;var a=this,r=a.props,i=r.settings,s=r.practice;f.WINDOW.addEventListener("focus",e),f.WINDOW.addEventListener("blur",t),f.DOCUMENT.addEventListener("visibilitychange",n)
;var c=K.listenLessonStarted(function(e){a.setState(Object.assign({},a.state,{fragment:e}),function(){a.textInput.focus()})}),l=K.listenLessonAdvanced(function(e,t){switch(a.textInput.update(e),
t.hit){case!0:O.playSound(O.S_CLICK);break;case!1:O.playSound(O.S_BLIP)}}),u=K.listenLessonCompleted(function(e,t){a.setState(Object.assign({},a.state,{result:e,achievements:t})),
null!=t&&t.list.length>0?O.playSound(O.S_TADA):0==e.errors?O.playSound(O.S_CORRECT):O.playSound(O.S_WRONG)});a.unlisten=function(){f.WINDOW.removeEventListener("focus",e),
f.WINDOW.removeEventListener("blur",t),f.DOCUMENT.removeEventListener("visibilitychange",n),c(),l(),u(),a.unlisten=null},O.initSounds(i),s.next(),i.newSettings&&o()},
t.prototype.componentWillUnmount=function(){_.translate(null),this.unlisten(),h.closeTour()},t.prototype.render=function(){function e(e){return u.createElement("div",{id:"Practice-controls",
className:l("Practice-controls",e)},u.createElement(a,{onLayout:c,onReset:d,onNext:f,onHelp:m,onConfigure:K}))}function t(e){return u.createElement("div",{id:"Practice-indicators",
className:l("Practice-indicators",e)},u.createElement(r,{settings:g,lesson:k,statistics:E.statistics}))}function n(e,t){return u.createElement("div",{id:"Practice-textInput",
className:l("Practice-textInput",e)},u.createElement(D.TextInput,{ref:i,size:t,fragment:x,onFocus:p,onBlur:y}))}function i(e){v.textInput=e}function s(e){v.keyboard=e}function c(){var e;switch(O){
case"normal":e="compact";break;case"compact":e="bare";break;case"bare":e="normal"}v.setState(Object.assign({},v.state,{layout:e}),function(){E.reset()})}function d(){E.reset()}function f(){E.next()}
function m(){v.setState(Object.assign({},v.state,{layout:"normal"}),function(){o()})}function p(){v.setState(Object.assign({},v.state,{focus:!0}),function(){v.keyboard&&v.keyboard.focus(),
_.translate(b()),E.reset()})}function y(){v.setState(Object.assign({},v.state,{focus:!1}),function(){v.keyboard&&v.keyboard.blur(),_.translate(null)})}function b(){var e=E.listen()
;return _.newTranslator(g.layout,g.emulateLayout,{onKeyDown:function(t){e.onKeyDown(t),v.keyboard&&v.keyboard.keyDown(t)},onKeyUp:function(t){e.onKeyUp(t),v.keyboard&&v.keyboard.keyUp(t)},
onInput:function(t){e.onInput(t)}})}var v=this,h=v.props,g=h.settings,k=h.lesson,E=h.practice,K=h.onConfigure,S=v.state,x=S.fragment,w=S.focus,O=S.layout;if(!x)return u.createElement("section",{
id:"Practice",className:"Practice"});switch(O){case"normal":return u.createElement("section",{id:"Practice",className:l("Practice","l--normal")
},e("l--normal"),t("l--normal"),n("l--normal"),u.createElement("div",{id:"Practice-keyboard",className:l("Practice-keyboard","l--normal")},u.createElement(N.Keyboard,{ref:s,layout:g.layout,full:!0
},u.createElement(N.KeyLayer,{showZones:!w}),w&&u.createElement(N.MarkerLayer,null),w||u.createElement(N.ZonesLayer,null))));case"compact":return u.createElement("section",{id:"Practice",
className:l("Practice","l--compact")},e("l--compact"),t("l--compact"),n("l--compact","X1"));case"bare":return u.createElement("section",{id:"Practice",className:l("Practice","l--bare")
},e("l--bare"),n("l--bare","X2"));default:throw new Error}},t}(u.Component);n.PracticePage=M},{"../../../lib/math/round":142,"../../../lib/runtime/global":145,"../../../lib/ui/button":159,
"../../../lib/ui/iconbutton":162,"../../../lib/ui/label":163,"../../../lib/ui/lnf/fullscreen-button":164,"../../../lib/ui/lnf/text-size-button":165,"../../../lib/ui/lnf/theme-button":166,
"../../../lib/ui/tour":173,"../../../res/icon/custom/help":181,"../../../res/icon/custom/settings":182,"../../../res/icon/material-design/av/web":191,
"../../../res/icon/material-design/content/redo":192,"../../../res/icon/material-design/content/undo":194,"../../keyboard/input":3,"../events":14,"../practice":23,"./keyboard":26,"./lesson/key":27,
"./loader/lesson":29,"./sound":48,"./textinput":49,classnames:"classnames",react:"react",tslib:"tslib"}],194:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M25 16c-5.29 0-10.11 1.97-13.8 5.2L4 14v18h18l-7.23-7.23C17.54 22.44 21.09 21 25 21c7.09 0 13.09 4.61 15.19 11l4.73-1.56C42.17 22.06 34.3 16 25 16z"}))}},{"../../SvgIcon":175,react:"react",
tslib:"tslib"}],192:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M36.79 21.2C33.11 17.97 28.29 16 23 16c-9.3 0-17.17 6.06-19.92 14.44L7.81 32c2.1-6.39 8.1-11 15.19-11 3.91 0 7.46 1.44 10.23 3.77L26 32h18V14l-7.21 7.2z"}))}},{"../../SvgIcon":175,react:"react",
tslib:"tslib"}],191:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM30 36H8v-8h22v8zm0-10H8v-8h22v8zm10 10h-8V18h8v18z"}))}},{"../../SvgIcon":175,react:"react",
tslib:"tslib"}],182:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3c-1.22.51-2.35 1.17-3.38 1.97L9.9 10.1c-.45-.17-.97 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3c1.22-.51 2.35-1.17 3.38-1.97l4.98 2.01c.45.17.97 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
}))}},{"../SvgIcon":175,react:"react",tslib:"tslib"}],181:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../SvgIcon"),i=e("react")
;n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 34h-4v-4h4v4zm4.13-15.49l-1.79 1.84C26.9 25.79 26 27 26 30h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 20.1 28 19.1 28 18c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z"
}))}},{"../SvgIcon":175,react:"react",tslib:"tslib"}],173:[function(e,t,n){"use strict";function a(){r()}function r(){null!=y&&(l.unmountComponentAtNode(y),p.BODY_ELEMENT.removeChild(y),y=null)}
Object.defineProperty(n,"__esModule",{value:!0})
;var i=e("tslib"),o=e("classnames"),s=e("prop-types"),c=e("react"),l=e("react-dom"),u=e("../../res/icon/custom/close"),d=e("../dom"),f=e("../dom.html"),m=e("../keyboard"),p=e("../runtime/global"),y=null
;n.startTour=function(e){r(),y=p.DOCUMENT.createElement("div"),p.BODY_ELEMENT.appendChild(y),l.render(e,y)},n.closeTour=a;var b=function(e){function t(t){var n=e.call(this,t)||this;return n.state={
slides:c.Children.toArray(t.children),currentIndex:0},n.onKeyDown=n.onKeyDown.bind(n),n.onResize=n.onResize.bind(n),n}return i.__extends(t,e),t.prototype.componentWillMount=function(){
this.select(0,null)},t.prototype.componentDidMount=function(){p.WINDOW.addEventListener("keydown",this.onKeyDown,!0),p.WINDOW.addEventListener("resize",this.onResize,!0),this.reposition(),
this.props.onStart()},t.prototype.componentWillUnmount=function(){p.WINDOW.removeEventListener("keydown",this.onKeyDown,!0),p.WINDOW.removeEventListener("resize",this.onResize,!0),this.props.onClose()
},t.prototype.componentDidUpdate=function(e,t){this.reposition()},t.prototype.render=function(){function e(e){e.preventDefault(),a.close()}function t(e){e.preventDefault(),a.selectPrev()}
function n(e){e.preventDefault(),a.selectNext()}var a=this,r=(a.props,a.state),i=r.slides,s=r.currentIndex,l=i[s],d=l.props,f=d.target,m=d.position,p=0==s,y=s==i.length-1
;return c.createElement("div",{className:"PopupContainer"},f?c.createElement("div",{ref:"overlay",className:"PopupOverlay"},c.createElement("div",{ref:"overlay-c1",className:"PopupOverlay-c1"
}),c.createElement("div",{ref:"overlay-c2",className:"PopupOverlay-c2"}),c.createElement("div",{ref:"overlay-c3",className:"PopupOverlay-c3"}),c.createElement("div",{ref:"overlay-c4",
className:"PopupOverlay-c4"}),c.createElement("div",{ref:"overlay-marker",className:"PopupOverlay-marker"})):c.createElement("div",{ref:"overlay",className:"PopupOverlay"}),function(){
var a=o("Tour","Popup",m&&"Popup-"+m);return c.createElement("div",{ref:"tour",className:a},c.createElement("a",{onClick:e,href:"#",className:"Tour-close"
},c.createElement(u.default,null)),c.createElement("div",{className:"Tour-content"},l),c.createElement("div",{className:"Tour-footer"},function(){var e=i.map(function(e,t){
var n=o("Tour-meterItem",t==s&&"Tour-meterItem--current");return c.createElement("span",{key:t,className:n})});return c.createElement("div",{className:"Tour-meter"},e)}(),p?null:c.createElement("a",{
onClick:t,href:"#",className:"Tour-prev"},"Previous"),y?c.createElement("a",{onClick:e,href:"#",className:"Tour-next"},"Close"):c.createElement("a",{onClick:n,href:"#",className:"Tour-next"},"Next")))
}())},t.prototype.onKeyDown=function(e){switch(m.normalize(e).code){case"Escape":e.preventDefault(),this.close();break;case"ArrowLeft":case"ArrowUp":case"PageUp":case"Backspace":e.preventDefault(),
this.selectPrev();break;case"ArrowRight":case"ArrowDown":case"PageDown":case"Space":e.preventDefault(),this.selectNext()}},t.prototype.onResize=function(e){this.reposition()},
t.prototype.close=function(){a()},t.prototype.select=function(e,t){var n=this,a=n.props.onShow,r=n.state.slides;this.setState(Object.assign({},this.state,{currentIndex:e}),function(){a(e),
null!=t&&r[t].props.onHide(),r[e].props.onShow()})},t.prototype.selectPrev=function(){var e=this.state,t=(e.slides,e.currentIndex);t>0&&this.select(t-1,t)},t.prototype.selectNext=function(){
var e=this.state,t=e.slides,n=e.currentIndex;n<t.length-1&&this.select(n+1,n)},t.prototype.reposition=function(){function e(){
var e=f.boundingBox(c),t=(p.WINDOW.innerWidth-e.width)/2,n=(p.WINDOW.innerHeight-e.height)/2;d.setStyleMap(c,{left:a(t),top:a(n)})}function t(e){var t=e.x-5,n=e.y-5,r=e.width+10,i=e.height+10
;d.setStyleMap(l,{left:a(0),top:a(0),width:a(t+r),height:a(n)}),d.setStyleMap(u,{left:a(t+r),top:a(0),right:a(0),height:a(n+i)}),d.setStyleMap(m,{left:a(t),top:a(n+i),right:a(0),bottom:a(0)}),
d.setStyleMap(y,{left:a(0),top:a(n),width:a(t),bottom:a(0)}),d.setStyleMap(b,{left:a(t),top:a(n),width:a(r),height:a(i)})}function n(e,t){var n,r;switch(s){case"e":n=t.x+t.width+18,
r=t.y-(e.height-t.height)/2;break;case"s":n=t.x+(t.width-e.width)/2,r=t.y+t.height+18;break;case"w":n=t.x-e.width-18,r=t.y-(e.height-t.height)/2;break;case"n":n=t.x+(t.width-e.width)/2,
r=t.y-e.height-18;break;default:n=(p.WINDOW.innerWidth-e.width)/2,r=(p.WINDOW.innerHeight-e.height)/2}d.setStyleMap(c,{left:a(n),top:a(r)})}function a(e){return e+"px"}
var r=this.state,i=r.slides[r.currentIndex].props,o=i.target,s=i.position,c=this.refs.tour,l=this.refs["overlay-c1"],u=this.refs["overlay-c2"],m=this.refs["overlay-c3"],y=this.refs["overlay-c4"],b=this.refs["overlay-marker"]
;if(o){var v=p.DOCUMENT.querySelector(o);null==v?(console.warn("Unknown target",o),e()):function(e){e.scrollIntoView();var a=f.boundingBox(c),r=f.boundingBox(e);t(r),n(a,r)}(v)}else e()},t.propTypes={
children:s.arrayOf(s.element),onClose:s.func,onShow:s.func,onStart:s.func},t.defaultProps={onClose:function(){},onShow:function(){},onStart:function(){}},t}(c.Component);n.Tour=b;var v=function(e){
function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.children,a=(e.target,e.position,o("Slide",t))
;return c.createElement("div",{className:a},n)},t.propTypes={className:s.any,children:s.node,target:s.string,position:s.oneOf(["e","s","w","n"]),onHide:s.func,onShow:s.func},t.defaultProps={
className:null,children:null,target:null,position:null,onHide:function(){},onShow:function(){}},t}(c.Component);n.Slide=v},{"../../res/icon/custom/close":178,"../dom":130,"../dom.html":128,
"../keyboard":138,"../runtime/global":145,classnames:"classnames","prop-types":"prop-types",react:"react","react-dom":"react-dom",tslib:"tslib"}],178:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../SvgIcon"),i=e("react");n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"}))}},{"../SvgIcon":175,react:"react",tslib:"tslib"}],128:[function(e,t,n){"use strict"
;function a(e,t){var n=e.getBoundingClientRect(),a=n.left,o=n.top,s=n.width,c=n.height;if(t)for(;;){var l=e.offsetParent;if(!l)break;if(e=l,a+=e.scrollLeft,o+=e.scrollTop,e==i.BODY_ELEMENT){
var u=i.BODY_ELEMENT.parentElement;a+=u.scrollLeft,o+=u.scrollTop}}return new r.Rect(a,o,s,c)}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./geometry"),i=e("./runtime/global")
;n.boundingBox=function(e,t,n){var i=a(e,n),o=i.x,s=i.y,c=i.width,l=i.height;if(t){var u=a(t,n);o-=u.x,s-=u.y}return new r.Rect(o,s,c,l)}},{"./geometry":132,"./runtime/global":145}],
132:[function(e,t,n){"use strict";function a(e){return e%360*Math.PI/180}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./lang"),i=function(){function e(){var e,t,n,a=arguments,i=a.length
;if(2==i&&r.isNumber(t=a[0])&&r.isNumber(n=a[1]))return this.x=t,this.y=n,this;if(1==i&&r.isObject(e=a[0])&&r.isNumber(t=e.x)&&r.isNumber(n=e.y))return this.x=t,this.y=n,this;throw new TypeError}
return e.isPoint=function(e){return r.isObject(e)&&r.isNumber(e.x)&&r.isNumber(e.y)},e}();n.Point=i;var o=function(){function e(){var e,t,n,a=arguments,i=a.length
;if(2==i&&r.isNumber(t=a[0])&&r.isNumber(n=a[1]))return this.width=t,this.height=n,this;if(1==i&&r.isObject(e=a[0])&&r.isNumber(t=e.width)&&r.isNumber(n=e.height))return this.width=t,this.height=n,
this;throw new TypeError}return e.isSize=function(e){return r.isObject(e)&&r.isNumber(e.width)&&r.isNumber(e.height)},e}();n.Size=o;var s=function(){function e(){
var e,t,n,a,s,c,l,u=arguments,d=u.length;if(4==d&&r.isNumber(a=u[0])&&r.isNumber(s=u[1])&&r.isNumber(c=u[2])&&r.isNumber(l=u[3]))return this.x=a,this.y=s,this.width=c,this.height=l,this
;if(2==d&&i.isPoint(e=u[0])&&o.isSize(t=u[1]))return this.x=e.x,this.y=e.y,this.width=t.width,this.height=t.height,this
;if(1==d&&r.isObject(n=u[0])&&r.isNumber(a=n.x)&&r.isNumber(s=n.y)&&r.isNumber(c=n.width)&&r.isNumber(l=n.height))return this.x=a,this.y=s,this.width=c,this.height=l,this;throw new TypeError}
return Object.defineProperty(e.prototype,"cx",{get:function(){return this.x+this.width/2},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cy",{get:function(){
return this.y+this.height/2},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"left",{get:function(){return Math.min(this.x,this.x+this.width)},enumerable:!0,configurable:!0}),
Object.defineProperty(e.prototype,"right",{get:function(){return Math.max(this.x,this.x+this.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"top",{get:function(){
return Math.min(this.y,this.y+this.height)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottom",{get:function(){return Math.max(this.y,this.y+this.height)},enumerable:!0,
configurable:!0}),e.isRect=function(e){return r.isObject(e)&&r.isNumber(e.x)&&r.isNumber(e.y)&&r.isNumber(e.width)&&r.isNumber(e.height)},e}();n.Rect=s;var c=function(){function e(){
var e,t,n,a,i,o,s,c=arguments,l=c.length;if(0==l)return this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0,this
;if(6==l&&r.isNumber(t=c[0])&&r.isNumber(n=c[1])&&r.isNumber(a=c[2])&&r.isNumber(i=c[3])&&r.isNumber(o=c[4])&&r.isNumber(s=c[5]))return this.a=t,this.b=n,this.c=a,this.d=i,this.e=o,this.f=s,this
;if(1==l&&r.isObject(e=c[0])&&r.isNumber(t=e.a)&&r.isNumber(n=e.b)&&r.isNumber(a=e.c)&&r.isNumber(i=e.d)&&r.isNumber(o=e.e)&&r.isNumber(s=e.f))return this.a=t,this.b=n,this.c=a,this.d=i,this.e=o,
this.f=s,this;throw new TypeError}return e.prototype.transform=function(e){return new i(this.a*e.x+this.c*e.y+this.e,this.b*e.x+this.d*e.y+this.f)},e.prototype.multiply=function(t){
return new e(this.a*t.a+this.c*t.b,this.b*t.a+this.d*t.b,this.a*t.c+this.c*t.d,this.b*t.c+this.d*t.d,this.a*t.e+this.c*t.f+this.e,this.b*t.e+this.d*t.f+this.f)},e.prototype.translate=function(e,t){
return this.multiply({a:1,b:0,c:0,d:1,e:e,f:t})},e.prototype.scale=function(e,t){return this.multiply({a:e,b:0,c:0,d:t,e:0,f:0})},e.prototype.rotate=function(e){e=a(e);var t=Math.cos(e),n=Math.sin(e)
;return this.multiply({a:t,b:n,c:-n,d:t,e:0,f:0})},e.prototype.skewX=function(e){return this.multiply({a:1,b:0,c:Math.tan(a(e)),d:1,e:0,f:0})},e.prototype.skewY=function(e){return this.multiply({a:1,
b:Math.tan(a(e)),c:0,d:1,e:0,f:0})},e.prototype.flipX=function(){return this.multiply({a:-1,b:0,c:0,d:1,e:0,f:0})},e.prototype.flipY=function(){return this.multiply({a:1,b:0,c:0,d:-1,e:0,f:0})},
e.prototype.inverse=function(){var t=this.a*this.d-this.b*this.c;return new e(this.d/t,-this.b/t,-this.c/t,this.a/t,(this.c*this.f-this.d*this.e)/t,(this.b*this.e-this.a*this.f)/t)},
e.prototype.isIdentity=function(){return 1==this.a&&0==this.b&&0==this.c&&1==this.d&&0==this.e&&0==this.f},e.prototype.toString=function(){
return"matrix("+[this.a,this.b,this.c,this.d,this.e,this.f].join(",")+")"},e.isMatrix=function(e){
return r.isObject(e)&&r.isNumber(e.a)&&r.isNumber(e.b)&&r.isNumber(e.c)&&r.isNumber(e.d)&&r.isNumber(e.e)&&r.isNumber(e.f)},e}();n.Matrix=c},{"./lang":139}],166:[function(e,t,n){"use strict"
;function a(e){for(var t=0,n=Array.from(l.DOCUMENT.getElementsByTagName("link"));t<n.length;t++){var a=n[t],r=a.getAttribute("rel"),i=a.getAttribute("title");"alternate stylesheet"==r&&(a.disabled=!0,
i==e&&(a.disabled=!1))}}Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("tslib"),i=e("prop-types"),o=e("react"),s=e("../../../res/icon/material-design/image/brightness_4"),c=e("../../../res/icon/material-design/image/brightness_7"),l=e("../../runtime/global"),u=e("../iconbutton"),d=[{
icon:o.createElement(c.default,null),title:"Light Colors"},{icon:o.createElement(s.default,null),title:"Dark Colors"}],f=0,m=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}
return r.__extends(t,e),t.prototype.render=function(){var e=this,t=e.props.onSwitch,n=d[f];return o.createElement(u.IconButton,{icon:n.icon,title:'Switch to theme "'+n.title+'"',onClick:function(n){
(f+=1)>=d.length&&(f=0);var r=d[f];a(r.title),e.forceUpdate(function(){t(r.title)})}})},t.propTypes={onSwitch:i.func},t.defaultProps={onSwitch:function(){}},t}(o.Component);n.ThemeButton=m},{
"../../../res/icon/material-design/image/brightness_4":199,"../../../res/icon/material-design/image/brightness_7":200,"../../runtime/global":145,"../iconbutton":162,"prop-types":"prop-types",
react:"react",tslib:"tslib"}],200:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12zm0-20c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],199:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{
d:"M40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM24 36c-1.79 0-3.48-.4-5-1.1 4.13-1.9 7-6.06 7-10.9s-2.87-9-7-10.9c1.52-.7 3.21-1.1 5-1.1 6.63 0 12 5.37 12 12s-5.37 12-12 12z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],165:[function(e,t,n){"use strict";function a(e){for(var t=c.ROOT_ELEMENT.classList,n=0,a=u;n<a.length;n++){var r=a[n];t.remove(r.id)}
t.add(e.id)}Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("tslib"),i=e("prop-types"),o=e("react"),s=e("../../../res/icon/material-design/editor/format_size"),c=e("../../runtime/global"),l=e("../iconbutton"),u=[{id:"theme--size-x1",
title:"Normal Text Size"},{id:"theme--size-x2",title:"Large Text Size"},{id:"theme--size-x3",title:"Huge Text Size"}],d=function(e){function t(t){var n=e.call(this,t)||this;return n.state={
currentIndex:0},n}return r.__extends(t,e),t.prototype.render=function(){var e=this,t=e.props.onSwitch,n=e.state.currentIndex+1;n>=u.length&&(n=0);var r=u[n];return o.createElement(l.IconButton,{
icon:o.createElement(s.default,null),title:'Switch to theme "'+r.title+'"',onClick:function(i){a(r),e.setState(Object.assign({},e.state,{currentIndex:n}),function(){t()})}})},t.propTypes={
onSwitch:i.func},t.defaultProps={onSwitch:function(){}},t}(o.Component);n.TextSizeButton=d},{"../../../res/icon/material-design/editor/format_size":195,"../../runtime/global":145,"../iconbutton":162,
"prop-types":"prop-types",react:"react",tslib:"tslib"}],195:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{d:"M18 8v6h10v24h6V14h10V8H18zM6 24h6v14h6V24h6v-6H6v6z"}))}},{"../../SvgIcon":175,react:"react",
tslib:"tslib"}],164:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("react"),i=e("../../../res/icon/material-design/navigation/fullscreen"),o=e("../../../res/icon/material-design/navigation/fullscreen_exit"),s=e("../../runtime/global"),c=e("../iconbutton"),l=function(e){
function t(t){var n=e.call(this,t)||this;return n.onFullscreenChange=n.onFullscreenChange.bind(n),n.onFullscreenError=n.onFullscreenError.bind(n),n}return a.__extends(t,e),
t.prototype.componentDidMount=function(){s.DOCUMENT.addEventListener("fullscreenchange",this.onFullscreenChange),s.DOCUMENT.addEventListener("fullscreenerror",this.onFullscreenError)},
t.prototype.componentWillUnmount=function(){s.DOCUMENT.removeEventListener("fullscreenchange",this.onFullscreenChange),s.DOCUMENT.removeEventListener("fullscreenerror",this.onFullscreenError)},
t.prototype.onFullscreenChange=function(){this.forceUpdate()},t.prototype.onFullscreenError=function(){this.forceUpdate()},t.prototype.render=function(){function e(){
s.DOCUMENT.fullscreenElement?s.DOCUMENT.exitFullscreen():(n.element||s.DOCUMENT.querySelector(n.selector)||s.DOCUMENT.documentElement).requestFullscreen(),t.forceUpdate()}var t=this,n=t.props
;return s.DOCUMENT.fullscreenEnabled?s.DOCUMENT.fullscreenElement?r.cloneElement(n.enterButton||r.createElement(c.IconButton,{icon:r.createElement(o.default,null),title:"Exit full-screen mode"}),{
onClick:e}):r.cloneElement(n.enterButton||r.createElement(c.IconButton,{icon:r.createElement(i.default,null),title:"Enter full-screen mode"}),{onClick:e
}):r.cloneElement(n.disabledButton||r.createElement(c.IconButton,{icon:r.createElement(i.default,null),title:"Full-screen mode not supported"}),{disabled:!0})},t}(r.Component);n.FullScreenButton=l},{
"../../../res/icon/material-design/navigation/fullscreen":201,"../../../res/icon/material-design/navigation/fullscreen_exit":202,"../../runtime/global":145,"../iconbutton":162,react:"react",
tslib:"tslib"}],202:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{d:"M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z"}))}},{"../../SvgIcon":175,
react:"react",tslib:"tslib"}],201:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../../SvgIcon"),i=e("react");n.default=function(e){
return i.createElement(r.SvgIcon,a.__assign({},e),i.createElement("path",{d:"M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z"}))}},{"../../SvgIcon":175,
react:"react",tslib:"tslib"}],162:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("classnames"),i=e("prop-types"),o=e("react"),s=function(e){
function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.blur=function(){this.button&&this.button.blur()},t.prototype.focus=function(){
this.button&&this.button.focus()},t.prototype.render=function(){function e(e){t.button=e}var t=this,n=t.props,a=(n.children,n.className),i=n.disabled,s=n.href,c=n.icon,l=(n.label,
n.tabIndex),u=n.title,d=n.onBlur,f=n.onClick,m=n.onFocus,p=n.onKeyDown,y=n.onKeyUp,b=n.onMouseDown,v=n.onMouseEnter,h=n.onMouseLeave,g=n.onMouseUp,k=r("IconButton",i&&"is-disabled",a)
;return s?o.createElement("a",{ref:e,className:k,href:s,tabIndex:l,title:u,onBlur:d,onClick:f,onFocus:m,onKeyDown:p,onKeyUp:y,onMouseDown:b,onMouseEnter:v,onMouseLeave:h,onMouseUp:g
},c):o.createElement("button",{ref:e,className:k,disabled:i,tabIndex:l,title:u,onBlur:d,onClick:f,onFocus:m,onKeyDown:p,onKeyUp:y,onMouseDown:b,onMouseEnter:v,onMouseLeave:h,onMouseUp:g},c)},
t.propTypes={className:i.any,disabled:i.bool,href:i.string,icon:i.element.isRequired,label:i.node,tabIndex:i.number,title:i.string,onBlur:i.func,onClick:i.func,onFocus:i.func,onKeyDown:i.func,
onKeyUp:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseUp:i.func},t.defaultProps={className:null,disabled:!1,href:null,icon:null,label:null,tabIndex:0,title:null,
onBlur:function(){},onClick:function(){},onFocus:function(){},onKeyDown:function(){},onKeyUp:function(){},onMouseDown:function(){},onMouseEnter:function(){},onMouseLeave:function(){},
onMouseUp:function(){}},t}(o.Component);n.IconButton=s},{classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],159:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("classnames"),i=e("prop-types"),o=e("react"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}
return a.__extends(t,e),t.prototype.blur=function(){this.button&&this.button.blur()},t.prototype.focus=function(){this.button&&this.button.focus()},t.prototype.render=function(){function e(e){
t.button=e}
var t=this,n=t.props,a=n.children,i=n.className,s=n.disabled,c=n.href,l=n.icon,u=n.label,d=n.tabIndex,f=n.title,m=n.onBlur,p=n.onClick,y=n.onFocus,b=n.onKeyDown,v=n.onKeyUp,h=n.onMouseDown,g=n.onMouseEnter,k=n.onMouseLeave,E=n.onMouseUp,_=r("Button",s&&"is-disabled",i)
;return c?o.createElement("a",{ref:e,className:_,href:c,tabIndex:d,title:f,onBlur:m,onClick:p,onFocus:y,onKeyDown:b,onKeyUp:v,onMouseDown:h,onMouseEnter:g,onMouseLeave:k,onMouseUp:E
},l," ",u||a):o.createElement("button",{ref:e,className:_,disabled:s,tabIndex:d,title:f,onBlur:m,onClick:p,onFocus:y,onKeyDown:b,onKeyUp:v,onMouseDown:h,onMouseEnter:g,onMouseLeave:k,onMouseUp:E
},l," ",u||a)},t.propTypes={className:i.any,disabled:i.bool,href:i.string,icon:i.element,label:i.node,tabIndex:i.number,title:i.string,onBlur:i.func,onClick:i.func,onFocus:i.func,onKeyDown:i.func,
onKeyUp:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseUp:i.func},t.defaultProps={className:null,disabled:!1,href:null,icon:null,label:null,tabIndex:0,title:null,
onBlur:function(){},onClick:function(){},onFocus:function(){},onKeyDown:function(){},onKeyUp:function(){},onMouseDown:function(){},onMouseEnter:function(){},onMouseLeave:function(){},
onMouseUp:function(){}},t}(o.Component);n.Button=s},{classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],48:[function(e,t,n){"use strict";function a(e){
return["/res/sound/"+e+".ogg","/res/sound/"+e+".mp3","/res/sound/"+e+".wav"]}Object.defineProperty(n,"__esModule",{value:!0});var r=e("../../../lib/lang"),i=e("../../../lib/sound");n.S_CLICK="click",
n.S_BLIP="blip",n.S_CORRECT="correct",n.S_WRONG="wrong",n.S_TADA="tada";var o=[n.S_CLICK,n.S_BLIP,n.S_CORRECT,n.S_WRONG,n.S_TADA],s=null;n.initSounds=function(e){if(e.enableSound){if(null==s){
s=r.map();for(var t=0,n=o;t<n.length;t++)!function(e){s[e]=i.nullPlayer(),i.loadPlayer({urls:a(e)}).then(function(t){s[e]=t},function(e){console.log(e)})}(n[t])}}else s=null},n.playSound=function(e){
if(null!=s){var t=s[e];if(null==t)throw new Error;t.play()}}},{"../../../lib/lang":139,"../../../lib/sound":157}],157:[function(e,t,n){"use strict";function a(e){var t=s(e)
;m.isNumber(t.offset)?e.currentTime=t.offset:e.currentTime=0,m.isNumber(t.duration)?t.timeout=p.systemTimer.setTimeout(function(){r(e)},1e3*t.duration):t.timeout=null,t.iteration++,e.play()}
function r(e){var t=s(e);t.timeout&&(t.timeout=null,t.loop?a(e):(t.iteration=0,e.pause()))}function i(e){var t=s(e);t.timeout&&(t.timeout.cancel(),t.timeout=null),t.iteration=0,e.pause()}
function o(e){var t=s(e);t.loop?a(e):(t.iteration=0,e.pause())}function s(e,t){var n=e.__playback;if(null!=t)e.__playback=t;else if(null==n)throw new Error;return n}function c(e,t,n,a){
var r=function(i){e.removeEventListener(t,r,a),n(i)};e.addEventListener(t,r,a)}function l(e){return m.isString(e)?e:"play"+String(h++)}function u(e){for(var t=0;t<e.length;t++){var n=e[t],a=void 0
;if(-1!=(a=n.indexOf("#"))&&(n=n.substring(0,a)),-1!=(a=n.indexOf("?"))&&(n=n.substring(0,a)),-1!=(a=n.lastIndexOf("."))){var r=n.substring(a+1);if(-1!=y.indexOf(r))return e[t]}}
throw new Error("Unsupported media type")}Object.defineProperty(n,"__esModule",{value:!0});var d=e("tslib"),f=e("./http/request"),m=e("./lang"),p=e("./runtime/timer"),y=function(e){
for(var t=new Audio,n=[],a=0,r=Object.entries(e);a<r.length;a++){var i=r[a],o=i[0];i[1].some(function(e){switch(t.canPlayType(e)){case"probably":case"maybe":return!0;default:return!1}})&&n.push(o)}
return n}({mp3:["audio/mpeg;"],ogg:['audio/ogg; codecs="vorbis"'],opus:['audio/ogg; codecs="opus"'],wav:['audio/wav; codecs="1"'],aac:["audio/aac;"],m4a:["audio/x-m4a;","audio/m4a;","audio/aac;"],
mp4:["audio/x-mp4;","audio/mp4;","audio/aac;"],weba:['audio/webm; codecs="vorbis"']});n.context=null;try{n.context=new AudioContext}catch(e){}var b=m.map(),v=[],h=1,g=function(){function e(e,t){
var n=this;this.player=e,this.sprite=t,this._playing=new Set,e.on("play",function(e){n._playing.add(e)}),e.on("end",function(e){n._playing.delete(e)})}return e.prototype.play=function(e){
var t=this.sprite[e];if(null==t)throw new Error;return this.player.play(t.offset,t.duration)},e.prototype.stop=function(e){var t=this;e?this.player.stop(e):this._playing.forEach(function(e){
t.player.stop(e)})},e}();n.SpritePlayer=g,n.nullPlayer=function(){return Object.freeze({duration:0,play:function(e,t){return"null"},stop:function(e){},loop:function(e){},mute:function(e,t){},
volume:function(e,t){},on:function(){return this},off:function(){return this}})},n.loadPlayer=function(e){var t=u(e.urls);return n.context?E.load(t,e):_.load(t,e)};var k=function(){function e(e){
this._autoplay=e.autoplay||!1,this._loop=e.loop||!1,this._muted=e.muted||!1,this._volume=m.isNumber(e.volume)?e.volume:1,this._onplay=[e.onplay||function(){}],this._onend=[e.onend||function(){}]}
return e.prototype._fire=function(e,t){for(var n=this["_on"+e],a=0;a<n.length;a++)n[a].call(this,t);return this},e.prototype.on=function(e,t){return this["_on"+e].push(t),this},
e.prototype.off=function(e,t){for(var n=this["_on"+e],a=0;a<n.length;)t==n[a]?n.splice(a,1):a++;return this},e}(),E=function(e){function t(t,a){var r=e.call(this,t)||this;return r._buffer=a,
r._gain=n.context.createGain(),r._gain.connect(n.context.destination),r._playing=Object.create(null),r.duration=r._buffer.duration,v.push(r),r._autoplay&&r.play(),r}return d.__extends(t,e),
t.load=function(e,a){return new Promise(function(r,i){var o=b[e];o?r(new t(a,o)):f.GET(e).send().then(function(o){o.isBinary?n.context.decodeAudioData(o.binary,function(n){r(new t(a,b[e]=n))
},function(){i(new Error("Cannot decode media"))}):i(new Error("Invalid response"))},i)})},t.prototype.play=function(e,t){var a=this,r=l(null),i=n.context.createBufferSource()
;return i.buffer=this._buffer,i.connect(this._gain),i.loop=this._loop,i.start(0),i.onended=function(e){delete a._playing[r],a._fire("end",r)},this._playing[r]={id:r,offset:e,duration:t,
loop:this._loop,source:i},this._fire("play",r),r},t.prototype.stop=function(e){for(var t=0,n=Object.values(this._playing);t<n.length;t++){var a=n[t];null!=e&&e!=a.id||a.source.stop()}},
t.prototype.loop=function(e){this._loop=e},t.prototype.mute=function(e,t){this._gain.gain.value=e?0:this._volume},t.prototype.volume=function(e,t){this._gain.gain.value=this._volume=e},t}(k)
;n.WebAudioPlayer=E;var _=function(e){function t(t,n){var a=e.call(this,t)||this;return a._master=n,a._initEvents(a._master),a._pool=[a._master],a.duration=a._master.duration,v.push(a),
a._autoplay&&a.play(),a}return d.__extends(t,e),t.load=function(e,n){return new Promise(function(a,r){var i=new Audio(e);c(i,"error",function(e){r({message:"Cannot load audio",code:i.error.code})
},!1),c(i,"canplaythrough",function(e){a(new t(n,i))},!1),i.load()})},t.prototype.play=function(e,t){var n=this,r=l(null);return this._borrowNode(function(i){i.id=r,i.muted=n._muted,
i.volume=n._volume,s(i,{id:r,offset:e,duration:t,loop:n._loop,iteration:0,timeout:null}),a(i)}),r},t.prototype.stop=function(e){for(var t=0;t<this._pool.length;t++){var n=this._pool[t]
;null!=e&&n.id!=e||i(n)}},t.prototype.loop=function(e){this._loop=e},t.prototype.mute=function(e,t){t||(this._muted=e);for(var n=0;n<this._pool.length;n++){var a=this._pool[n]
;null!=t&&a.id!=t||(a.muted=e)}},t.prototype.volume=function(e,t){t||(this._volume=e);for(var n=0;n<this._pool.length;n++){var a=this._pool[n];null!=t&&a.id!=t||(a.volume=e)}},
t.prototype._borrowNode=function(e){for(var t=this,n=0;n<this._pool.length;n++){var a=this._pool[n];if(a.paused)return e(a),a}var r=new Audio(this._master.src);return this._initEvents(r),
c(r,"canplaythrough",function(n){t._pool.push(r),e(r)},!1),r},t.prototype._initEvents=function(e){var t=this;e.addEventListener("play",function(n){var a=s(e)
;a.loop&&1!=a.iteration||t._fire("play",e.id)},!1),e.addEventListener("pause",function(n){var a=s(e);a.loop&&0!=a.iteration||t._fire("end",e.id)},!1),e.addEventListener("ended",function(t){o(e)},!1)},
t}(k);n.FallbackPlayer=_},{"./http/request":135,"./lang":139,"./runtime/timer":156,tslib:"tslib"}],29:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("react"),i=e("../../../../lib/promise"),o=e("./loader"),s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={total:0,current:0,result:null},n}
return a.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;this.setState(Object.assign({},this.state,{total:0,current:0,result:null}),function(){t.load()})},
t.prototype.componentDidMount=function(){this.load()},t.prototype.load=function(){var e=this;(0,this.props.promise)().then(function(t){e.setState(Object.assign({},e.state,{result:t}))},i.watcher)},
t.prototype.render=function(){var e=this,t=e.props,n=t.children,a=t.component,i=e.state,s=i.total,c=i.current,l=i.result;return l?a(l):r.createElement(o.Loader,{total:s,current:c
},r.createElement("article",{className:"Article"},r.createElement("h1",null,"Loading Lesson Data..."),r.createElement("p",null,"Please wait, it will only take a few seconds.")),n)},t}(r.Component)
;n.LessonLoader=s},{"../../../../lib/promise":144,"./loader":30,react:"react",tslib:"tslib"}],28:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("tslib"),r=e("react"),i=e("../../../../lib/promise"),o=e("./loader"),s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={total:0,current:0,ready:!1},n}
return a.__extends(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.database.open(this).then(function(){e.setState(Object.assign({},e.state,{ready:!0}))},i.watcher)},
t.prototype.start=function(){this.setState(Object.assign({},this.state,{total:0,current:0}))},t.prototype.step=function(e){this.setState(Object.assign({},this.state,e))},t.prototype.stop=function(){
this.setState(Object.assign({},this.state,{total:1,current:1}))},t.prototype.render=function(){var e=this,t=e.props,n=t.children,a=t.component,i=e.state,s=i.total,c=i.current
;return i.ready?a:r.createElement(o.Loader,{total:s,current:c},n)},t}(r.Component);n.DatabaseLoader=s},{"../../../../lib/promise":144,"./loader":30,react:"react",tslib:"tslib"}],30:[function(e,t,n){
"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("react"),r=e("../../../../lib/ui/progressbar");n.Loader=function(e){var t=e.total,n=e.current,i=e.children
;return a.createElement("div",null,i,a.createElement("div",{className:"Loader"},a.createElement(r.ProgressBar,{total:t,current:n})))}},{"../../../../lib/ui/progressbar":168,react:"react"}],
168:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("react"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}
return a.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.total,n=e.current;if(Number.isFinite(t)&&Number.isFinite(n)&&t>0){var a=Math.round(100*Math.max(0,Math.min(1,n/t)))
;return r.createElement("div",{className:"ProgressBar ProgressBar--progress",title:a+"% ready"},r.createElement("div",{className:"ProgressBar-bar",style:{width:a+"%"}}))}return r.createElement("div",{
className:"ProgressBar ProgressBar--intermediate",title:"Work in progress..."},r.createElement("div",{className:"ProgressBar-bar"}))},t}(r.Component);n.ProgressBar=i},{react:"react",tslib:"tslib"}],
27:[function(e,t,n){"use strict";function a(e){var t=e.className,n=e.settings,a=e.statistics,r=e.lessonKey,i=e.isIncluded,u=e.onClick,d=e.onMouseDown,f=e.onMouseEnter,p=e.onMouseLeave,y=e.onMouseUp
;return l.createElement("span",{key:r.letter.charCode,
className:c("LessonKey",i?"LessonKey--included":"LessonKey--excluded",null==r.confidenceLevel&&"LessonKey--uncalibrated",i&&r.isBoosted&&"LessonKey--boosted",i&&r.isForced&&"LessonKey--forced",t),
style:o(!0,r.confidenceLevel),title:s(n,a)(r),onClick:u,onMouseDown:d,onMouseEnter:f,onMouseLeave:p,onMouseUp:y},m.keyName(r.letter))}function r(e){
var t=e.className,n=e.settings,a=e.statistics,r=e.lessonKey,i=a.getKeyData(r.letter).learningRate(),o=m.formatSpeedEx(n);return null!=r.confidenceLevel?l.createElement("span",{
className:c("KeyDetails",t)},l.createElement(d.NameValue,{name:l.createElement(d.Name,{name:"Average typing speed"}),value:l.createElement(d.Value,{value:o(f.timeToSpeed(r.meanTime))}),
title:"Average typing speed"}),l.createElement(d.NameValue,{name:l.createElement(d.Name,{name:"Best typing speed"}),value:l.createElement(d.Value,{value:o(f.timeToSpeed(r.bestMeanTime))}),
title:"Best typing speed"}),l.createElement(d.NameValue,{name:l.createElement(d.Name,{name:"Confidence level"}),value:l.createElement(d.Value,{value:u.default(r.confidenceLevel,100)}),
title:"Confidence level"}),l.createElement(d.NameValue,{name:l.createElement(d.Name,{name:"Learning rate"}),value:l.createElement(d.Value,{value:m.formatLearningRate(n,i)}),title:"Learning rate"
})):l.createElement("span",{className:c("KeyDetails",t)},"Not calibrated, need more samples")}function i(e){e.settings;var t=e.keyData,n=t.letter,a=t.deltaTime;return l.createElement("span",{
className:"KeyTimeDelta"},l.createElement(d.NameValue,{name:l.createElement(d.Name,{name:m.keyName(n)}),value:l.createElement(d.ValueDelta,{value:u.default(a,1),invert:!0})}))}function o(e,t){
return e?{backgroundColor:m.confidenceColor(t)}:{}}function s(e,t){var n=m.formatSpeedEx(e);return function(a){var r=["Character '"+m.keyName(a.letter)+"'"];if(null!=a.confidenceLevel){
r.push("Average typing speed: "+n(f.timeToSpeed(a.meanTime))),r.push("Best typing speed: "+n(f.timeToSpeed(a.bestMeanTime))),r.push("Confidence level: "+u.default(a.confidenceLevel,100))
;var i=t.getKeyData(a.letter).learningRate();null!=i&&r.push("Learning rate: "+m.formatLearningRate(e,i))}else r.push("Not calibrated, need more samples")
;return a.isBoosted&&r.push("Boosted frequency"),a.isForced&&r.push("Added by user"),r.join(";\n")}}Object.defineProperty(n,"__esModule",{value:!0})
;var c=e("classnames"),l=e("react"),u=e("../../../../lib/math/round"),d=e("../../../../lib/ui/label"),f=e("../../lesson"),m=e("../util");n.Key=a,n.KeyLegend=function(e){
var t=e.className,n=e.confidenceLevel,a=e.isIncluded,r=e.isBoosted,i=e.isForced,s=e.onClick,u=e.onMouseDown,d=e.onMouseEnter,f=e.onMouseLeave,m=e.onMouseUp;return l.createElement("span",{
className:c("LessonKey",a?"LessonKey--included":"LessonKey--excluded",null==n&&"LessonKey--uncalibrated",r&&"LessonKey--boosted",i&&"LessonKey--forced",t),style:o(a,n),onClick:s,onMouseDown:u,
onMouseEnter:d,onMouseLeave:f,onMouseUp:m},"?")},n.KeyDetails=r,n.KeyTimeDelta=i,n.KeyTimeDeltas=function(e){for(var t=e.id,n=e.className,a=e.settings,r=e.statistics,o=(e.lesson,
[]),s=0,u=r.keyData;s<u.length;s++){var d=u[s];d.deltaTime&&o.push(d)}return o.sort(function(e,t){return e.deltaTime-t.deltaTime}),l.createElement("span",{id:t,className:c(n)},o.map(function(e){
return l.createElement(i,{key:e.letter.charCode,settings:a,keyData:e})}))},n.KeySet=function(e){function t(e,t){d(t)}function n(e,t){d(null)}
var r=e.id,i=e.className,o=e.settings,s=e.statistics,u=e.lesson,d=e.onSelect;return l.createElement("span",{id:r,className:c(i)},u.includedKeys.map(function(e){return l.createElement(a,{
key:e.letter.charCode,settings:o,statistics:s,lessonKey:e,isIncluded:!0,onMouseEnter:function(n){return t(0,e)},onMouseLeave:function(e){return n()}})}),u.excludedKeys.map(function(e){
return l.createElement(a,{key:e.letter.charCode,settings:o,statistics:s,lessonKey:e,isIncluded:!1,onMouseEnter:function(n){return t(0,e)},onMouseLeave:function(e){return n()}})}))},
n.CurrentKey=function(e){var t=e.id,n=e.className,i=e.settings,o=e.statistics,s=e.lesson.boostedKey;return null!=s?l.createElement("span",{id:t,className:c(n)},l.createElement(a,{settings:i,
statistics:o,lessonKey:s,isIncluded:!0})," ",l.createElement(r,{settings:i,statistics:o,lessonKey:s})):l.createElement("span",{id:t,className:c(n)},l.createElement("span",null,"No Key"))}},{
"../../../../lib/math/round":142,"../../../../lib/ui/label":163,"../../lesson":16,"../util":50,classnames:"classnames",react:"react"}],50:[function(e,t,n){"use strict";function a(e,t){
return void 0===t&&(t=1),function(n,a){return void 0===a&&(a=t),String(i.default(e.speedUnit.measure(n),a))+e.speedUnit.id}}Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("../../../lib/color"),i=e("../../../lib/math/round");n.keyName=function(e){return String.fromCharCode(e.charCode).toUpperCase()},n.formatter=function(e,t){function n(n,a){
return void 0===a&&(a=t),String(i.default(e.measure(n),a))+e.id}return void 0===t&&(t=1),{speed:function(n,a){return void 0===a&&(a=t),String(i.default(e.measure(n),a))},learningRate:function(e){
return null!=e?"~"+n(e.perLesson,1e3)+"/sample, ~"+n(e.perHour,1e3)+"/hour":"Uncertain"}}},n.formatSpeed=function(e,t){return void 0===t&&(t=1),function(n,a){return void 0===a&&(a=t),
String(i.default(e.speedUnit.measure(n),a))}},n.formatSpeedEx=a,n.formatLearningRate=function(e,t){return null!=t?"~"+a(e,1e3)(t.perHour)+"/hour":"Uncertain"},
n.COLOR_MIN_CONFIDENCE=r.Color.rgb(13369344),n.COLOR_MAX_CONFIDENCE=r.Color.rgb(973409),n.confidenceColor=function(e){
return null==e?r.Color.rgb(14540253):r.RGBAColor.between(n.COLOR_MIN_CONFIDENCE,n.COLOR_MAX_CONFIDENCE,e)}},{"../../../lib/color":122,"../../../lib/math/round":142}],122:[function(e,t,n){"use strict"
;function a(e,t,n,a){var r=Math.max(e,t,n),i=Math.min(e,t,n),o=r-i,s=0,c=0,l=(r+i)/2;if(o>0){switch(c=l>.5?o/(2-r-i):o/(r+i),r){case e:s=(t-n)/o+(t<n?6:0);break;case t:s=(n-e)/o+2;break;case n:
s=(e-t)/o+4}s/=6}return{h:s,s:c,l:l,a:a}}function r(e,t,n,a){var r=n<=.5?n*(t+1):n+t-n*t,o=2*n-r;return{r:i(o,r,e+1/3),g:i(o,r,e),b:i(o,r,e-1/3),a:a}}function i(e,t,n){
return 6*(n=n<0?n+1:n>1?n-1:n)<1?e+(t-e)*n*6:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e}function o(e){return u(e.endsWith("%")?l(e.substring(0,e.length-1))/100:l(e)/255)}function s(e){
return u(e.endsWith("%")?l(e.substring(0,e.length-1))/100:l(e)%360/360)}function c(e){return u(e.endsWith("%")?l(e.substring(0,e.length-1))/100:l(e))}function l(e){var t=parseFloat(e)
;if(isNaN(t))throw new Error;return t}function u(e){return Math.min(1,Math.max(0,e))}Object.defineProperty(n,"__esModule",{value:!0});var d=e("tslib"),f=e("./lang"),m=function(){function e(){}
return e.prototype.toRgb=function(e){throw new Error},e.prototype.toHsl=function(e){throw new Error},e.prototype.hue=function(){return this.toHsl().h},e.prototype.saturation=function(){
return this.toHsl().s},e.prototype.lightness=function(){return this.toHsl().l},e.prototype.red=function(){return this.toRgb().r},e.prototype.green=function(){return this.toRgb().g},
e.prototype.blue=function(){return this.toRgb().b},e.prototype.luminance=function(){var e=this.toRgb();return(.2126*e.r+.7152*e.g+.0722*e.b)*(e.a||1)},e.prototype.saturate=function(e){
var t=this.toHsl(!0);return t.s=u(t.s+e),t},e.prototype.desaturate=function(e){var t=this.toHsl(!0);return t.s=u(t.s-e),t},e.prototype.lighten=function(e){var t=this.toHsl(!0);return t.l=u(t.l+e),t},
e.prototype.darken=function(e){var t=this.toHsl(!0);return t.l=u(t.l-e),t},e.prototype.fadeIn=function(e){var t=this.toHsl(!0);return t.a=u((t.a||0)+e),t},e.prototype.fadeOut=function(e){
var t=this.toHsl(!0);return t.a=u((t.a||1)-e),t},e.prototype.fade=function(e){var t=this.toHsl(!0);return t.a=u(e),t},e.prototype.spin=function(e){var t=this.toHsl(!0),n=t.h+e
;return n<0&&(n=-(n-Math.ceil(n))),n>1&&(n-=Math.floor(n)),t.h=n,t},e.prototype.format=function(){throw new Error},e.prototype.toString=function(){return this.format()},e.rgb=function(e){
return new p((e>>>16&255)/255,(e>>>8&255)/255,(255&e)/255)},e.RE_HEX_RGB=/^#([a-z0-9]{1})([a-z0-9]{1})([a-z0-9]{1})$/i,e.RE_HEX_RRGGBB=/^#([a-z0-9]{2})([a-z0-9]{2})([a-z0-9]{2})$/i,
e.RE_RGB=/^rgb\(\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*\)*$/i,e.RE_RGBA=/^rgba\(\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*\)*$/i,
e.RE_HSL=/^hsl\(\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*\)$/i,e.RE_HSLA=/^hsla\(\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*,\s*([\.0-9]+%?)\s*\)*$/i,e}();n.Color=m
;var p=function(e){function t(n){var a=e.call(this)||this,r=arguments,i=r.length;if(3==i&&f.isNumber(r[0])&&f.isNumber(r[1])&&f.isNumber(r[2]))return a.r=u(r[0]),a.g=u(r[1]),a.b=u(r[2]),a
;if(4==i&&f.isNumber(r[0])&&f.isNumber(r[1])&&f.isNumber(r[2])&&f.isNumber(r[3]))return a.r=u(r[0]),a.g=u(r[1]),a.b=u(r[2]),a.a=u(r[3]),a;if(1==i&&f.isString(n)){var s=void 0
;if(s=n.match(m.RE_HEX_RGB)){var l=parseInt(s[1],16),d=parseInt(s[2],16),p=parseInt(s[3],16);return a.r=(l<<4|l)/255,a.g=(d<<4|d)/255,a.b=(p<<4|p)/255,a}
if(s=n.match(m.RE_HEX_RRGGBB))return a.r=parseInt(s[1],16)/255,a.g=parseInt(s[2],16)/255,a.b=parseInt(s[3],16)/255,a;if(s=n.match(m.RE_RGB))return a.r=o(s[1]),a.g=o(s[2]),a.b=o(s[3]),a
;if(s=n.match(m.RE_RGBA))return a.r=o(s[1]),a.g=o(s[2]),a.b=o(s[3]),a.a=c(s[4]),a}if(1==i&&t.isColor(n))return a.r=u(n.r),a.g=u(n.g),a.b=u(n.b),null!=n.a&&(a.a=u(n.a)),a;throw new TypeError}
return d.__extends(t,e),t.prototype.toRgb=function(e){return e?new t(this):this},t.prototype.toHsl=function(){return new y(a(this.r,this.g,this.b,this.a))},t.prototype.format=function(){
var e=Math.round(255*this.r),t=Math.round(255*this.g),n=Math.round(255*this.b),a=this.a;return f.isNumber(a)&&1!=a?"rgba("+[e,t,n,a].join(",")+")":"rgb("+[e,t,n].join(",")+")"},
t.prototype.formatHex=function(){function e(e){var t=e.toString(16);return e<16?"0"+t:t}var t=Math.round(255*this.r),n=Math.round(255*this.g),a=Math.round(255*this.b)
;return"#"+(e(t)+e(n)+e(a)).toUpperCase()},t.between=function(e,n,a){return new t((n.r-e.r)*a+e.r,(n.g-e.g)*a+e.g,(n.b-e.b)*a+e.b)},t.isColor=function(e){
return f.isObject(e)&&f.isNumber(e.r)&&f.isNumber(e.g)&&f.isNumber(e.b)&&(null==e.a||f.isNumber(e.a))},t}(m);n.RGBAColor=p;var y=function(e){function t(n){
var a=e.call(this)||this,r=arguments,i=r.length;if(3==i&&f.isNumber(r[0])&&f.isNumber(r[1])&&f.isNumber(r[2]))return a.h=u(r[0]),a.s=u(r[1]),a.l=u(r[2]),a
;if(4==i&&f.isNumber(r[0])&&f.isNumber(r[1])&&f.isNumber(r[2])&&f.isNumber(r[3]))return a.h=u(r[0]),a.s=u(r[1]),a.l=u(r[2]),a.a=u(r[3]),a;if(1==i&&f.isString(n)){var o=void 0
;if(o=n.match(m.RE_HSL))return a.h=s(o[1]),a.s=c(o[2]),a.l=c(o[3]),a;if(o=n.match(m.RE_HSLA))return a.h=s(o[1]),a.s=c(o[2]),a.l=c(o[3]),a.a=c(o[4]),a}if(1==i&&t.isColor(n))return a.h=u(n.h),
a.s=u(n.s),a.l=u(n.l),null!=n.a&&(a.a=u(n.a)),a;throw new TypeError}return d.__extends(t,e),t.prototype.toRgb=function(){return new p(r(this.h,this.s,this.l,this.a))},t.prototype.toHsl=function(e){
return e?new t(this):this},t.prototype.format=function(){var e=Math.round(360*this.h),t=Math.round(100*this.s),n=Math.round(100*this.l),a=this.a
;return f.isNumber(a)&&1!=a?"hsla("+[e,t+"%",n+"%",a].join(",")+")":"hsl("+[e,t+"%",n+"%"].join(",")+")"},t.isColor=function(e){
return f.isObject(e)&&f.isNumber(e.h)&&f.isNumber(e.s)&&f.isNumber(e.l)&&(null==e.a||f.isNumber(e.a))},t}(m);n.HSLAColor=y,n.rgbToHsl=a,n.hslToRgb=r},{"./lang":139,tslib:"tslib"}],26:[function(e,t,n){
"use strict";function a(){return v.createElement("defs",null,v.createElement("pattern",{id:"key-zone-a",patternUnits:"userSpaceOnUse",width:"10",height:"10"},v.createElement("path",{
className:"Zone--background",d:"M0 0h10v10H0z"}),v.createElement("path",{className:"Zone--foreground-a",d:"M-1 1l2-2M0 10L10 0M9 11l2-2"})),v.createElement("pattern",{id:"key-zone-b",
patternUnits:"userSpaceOnUse",width:"10",height:"10"},v.createElement("path",{className:"Zone--background",d:"M10 0H0v10h10z"}),v.createElement("path",{className:"Zone--foreground-b",
d:"M11 1L9-1m1 11L0 0m1 11l-2-2"})))}function r(e){
var t=e.layoutKey,n=e.elementMap,a=e.showZones,r=e.children,i=e.onClick,o=e.onMouseDown,s=e.onMouseEnter,c=e.onMouseLeave,l=e.onMouseUp,u=y(w,O,a&&M+t.zone),d={"data-id":t.id}
;return v.createElement("svg",p.__assign({key:t.id,ref:function(e){n[t.id]=e},className:u,x:t.x,y:t.y,onClick:i,onMouseDown:o,onMouseEnter:s,onMouseLeave:c,onMouseUp:l},d),r)}function i(e){
var t=e.layoutKey,n=e.elementMap,a=e.showZones,r=e.children,i=e.onClick,o=e.onMouseDown,s=e.onMouseEnter,c=e.onMouseLeave,l=e.onMouseUp,u=y(w,D,a&&M+t.zone),d={"data-id":t.id}
;return v.createElement("svg",p.__assign({key:t.id,ref:function(e){n[t.id]=e},className:u,x:t.x,y:t.y,onClick:i,onMouseDown:o,onMouseEnter:s,onMouseLeave:c,onMouseUp:l},d),r)}function o(e){
var t=e.className,n=e.x,a=e.y,r=e.text,i=e.textAnchor,o=y(T,t);return v.createElement("text",{className:o,x:n,y:a,textAnchor:i},r)}function s(e){
var t=e.className,n=e.x,a=e.y,r=e.text,i=e.charCode,o=e.textAnchor;i>0&&(k.isCombiningDiacritic(i)&&(i=k.getDiacritic(i).diacritic,t=[P,t]),r=String.fromCharCode(i).toUpperCase());var s=y(T,A,t)
;return v.createElement("text",{className:s,x:n,y:a,textAnchor:o},r)}function c(e){var t=e.className,n=e.x,a=e.y,r=e.text,i=e.charCode,o=e.textAnchor
;i>0&&(k.isCombiningDiacritic(i)&&(i=k.getDiacritic(i).diacritic,t=[P,t]),r=String.fromCharCode(i));var s=y(T,L,t);return v.createElement("text",{className:s,x:n,y:a,textAnchor:o},r)}function l(e,t){
return{id:e,vk:null,a:null,b:null,c:null,d:null,x:t.x,y:t.y,shape:t.shape,zone:t.zone}}function u(e){return String.fromCharCode(e).toUpperCase()}function d(e){var t=e.layoutKey,n=R[t.shape]
;if(n)return n(Object.assign({},e,{key:t.id}));throw new Error}function f(e,t,n){var a=e[t];a&&(n?h.addClass(a,C):h.removeClass(a,C))}function m(e,t){t.ctrlKey||(f(e,"ControlLeft",!1),
f(e,"ControlRight",!1)),t.altKey||(f(e,"AltLeft",!1),f(e,"AltRight",!1)),t.shiftKey||(f(e,"ShiftLeft",!1),f(e,"ShiftRight",!1))}Object.defineProperty(n,"__esModule",{value:!0})
;var p=e("tslib"),y=e("classnames"),b=e("prop-types"),v=e("react"),h=e("../../../lib/dom"),g=e("../../../lib/lang"),k=e("../../../lib/unicode"),E=e("../../../data/geometry"),_=function(e){
function t(t){var n=e.call(this,t)||this;return n.elementMap=g.map(),n.state={focus:!1},n}return p.__extends(t,e),t.prototype.getChildContext=function(){return{layout:this.props.layout,
full:this.props.full,elementMap:this.elementMap}},t.prototype.focus=function(){this.setState(Object.assign({},this.state,{focus:!0}))},t.prototype.blur=function(){
this.setState(Object.assign({},this.state,{focus:!1}))},t.prototype.keyDown=function(e){f(this.elementMap,e.code,!0),m(this.elementMap,e)},t.prototype.keyUp=function(e){f(this.elementMap,e.code,!1),
m(this.elementMap,e)},t.prototype.render=function(){var e=this.props,t=e.children,n=(e.layout,e.full),a=n?1e3:671;return v.createElement("div",{className:y("KeyboardWrap",n&&"KeyboardWrap--full")
},v.createElement("svg",{className:y("Keyboard",n&&"Keyboard--full"),viewBox:"0 0 "+a+" 250"},v.createElement("rect",{className:"Keyboard-frame",x:0,y:0,width:a,height:250,rx:10,ry:10}),t))},
t.propTypes={children:b.any,layout:b.object.isRequired,full:b.bool.isRequired},t.defaultProps={children:null,layout:null,full:!1},t.childContextTypes={layout:b.object.isRequired,
full:b.bool.isRequired,elementMap:b.object.isRequired},t}(v.Component);n.Keyboard=_;var K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p.__extends(t,e),t
}(v.Component);n.Layer=K;var S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p.__extends(t,e),t.prototype.render=function(){
for(var e=this.context,t=this.props.showZones,n=e.layout,r=e.full,i=e.elementMap,o=[],s=0,c=Object.entries(n.geometryMap);s<c.length;s++){var u=c[s],f=u[0],m=u[1];o.push(n.keysById[f]||l(f,m))}
if(o.sort(function(e,t){return e.y-t.y||e.x-t.x}),r){for(var p=0,y=Object.entries(E.CONTROL_PAD);p<y.length;p++){var b=y[p],f=b[0],m=b[1];o.push(l(f,m))}
for(var h=0,g=Object.entries(E.CURSOR_PAD);h<g.length;h++){var k=g[h],f=k[0],m=k[1];o.push(l(f,m))}for(var _=0,K=Object.entries(E.NUM_PAD);_<K.length;_++){var S=K[_],f=S[0],m=S[1];o.push(l(f,m))}}
return v.createElement("svg",{className:"Keyboard-layout",x:21,y:21},v.createElement(a,null),o.map(function(e){return d({layoutKey:e,elementMap:i,showZones:t})}))},t.contextTypes={
layout:b.object.isRequired,full:b.bool.isRequired,elementMap:b.object.isRequired},t}(K);n.KeyLayer=S;var N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}
return p.__extends(t,e),t.prototype.render=function(){var e=this.context;return e.layout,e.full,e.elementMap,v.createElement("svg",{className:"Keyboard-marker",x:21,y:21})},t.contextTypes={
layout:b.object.isRequired,full:b.bool.isRequired,elementMap:b.object.isRequired},t}(K);n.MarkerLayer=N;var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}
return p.__extends(t,e),t.prototype.render=function(){return v.createElement("svg",{className:"KeyboardZones",x:0,y:0},v.createElement("svg",{x:41,y:41},v.createElement("circle",{cx:72,cy:84,r:20,
className:"ZoneMarker ZoneMarker--zone-z1"}),v.createElement("circle",{cx:114,cy:84,r:20,className:"ZoneMarker ZoneMarker--zone-z2"}),v.createElement("circle",{cx:156,cy:84,r:20,
className:"ZoneMarker ZoneMarker--zone-z3"}),v.createElement("circle",{cx:198,cy:84,r:20,className:"ZoneMarker ZoneMarker--zone-z4"}),v.createElement("circle",{cx:324,cy:84,r:20,
className:"ZoneMarker ZoneMarker--zone-z5"}),v.createElement("circle",{cx:366,cy:84,r:20,className:"ZoneMarker ZoneMarker--zone-z6"}),v.createElement("circle",{cx:408,cy:84,r:20,
className:"ZoneMarker ZoneMarker--zone-z7"}),v.createElement("circle",{cx:450,cy:84,r:20,className:"ZoneMarker ZoneMarker--zone-z8"})),v.createElement("image",{className:"HandsIllustration",x:10,y:10,
width:656,height:271,xlinkHref:"/res/image/hands_above.svg"}))},t}(K);n.ZonesLayer=x
;var w="KeyboardKey",O=w+"--simple",D=w+"--special",C=w+"--depressed",M=w+"--zone-",I=w+"-button",T=w+"-symbol",A=T+"--primary",L=T+"--secondary",P=T+"--dead";n.Key=r,n.SpecialKey=i;var R={
key:function(e){var t=e.layoutKey,n=t.a>0&&t.b>0&&u(t.a)==u(t.b);return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),t.b>0&&!n&&v.createElement(c,{x:10,y:15,charCode:t.b}),t.a>0&&!n&&v.createElement(c,{x:10,y:30,charCode:t.a}),t.d>0&&v.createElement(c,{x:28,y:15,charCode:t.d}),t.c>0&&v.createElement(c,{x:28,y:30,
charCode:t.c}),n&&v.createElement(s,{x:15,y:25,charCode:t.a}))},"key-backslash":function(e){var t=e.layoutKey,n=t.a>0&&t.b>0&&u(t.a)==u(t.b)
;return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:60,height:40}),t.b>0&&!n&&v.createElement(c,{x:10,y:15,charCode:t.b}),t.a>0&&!n&&v.createElement(c,{x:10,
y:30,charCode:t.a}),t.d>0&&v.createElement(c,{x:28,y:15,charCode:t.d}),t.c>0&&v.createElement(c,{x:28,y:30,charCode:t.c}),n&&v.createElement(s,{x:15,y:25,charCode:t.a}))},"key-left-shift":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:92,height:40}),v.createElement(o,{x:15,y:25,text:"Shift"}))},"key-left-shift-standard-102":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:50,height:40}),v.createElement(o,{x:15,y:25,text:"Shift"}))},"key-right-shift":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:115,height:40}),v.createElement(o,{x:15,y:25,text:"Shift"}))},"key-ctrl":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:63,height:40}),v.createElement(o,{x:15,y:25,text:"Ctrl"}))},"key-alt":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:63,height:40}),v.createElement(o,{x:15,y:25,text:"Alt"}))},"key-alt-gr":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:63,height:40}),v.createElement(o,{x:15,y:25,text:"Alt Gr"}))},"key-tab":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:63,height:40}),v.createElement(o,{x:15,y:25,text:"Tab"}))},"key-caps-lock":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:70,height:40}),v.createElement(o,{x:15,y:25,text:"Caps Lock"}))},"key-backspace":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:83,height:40}),v.createElement(o,{x:15,y:25,text:"Backspace"}))},"key-enter":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:95,height:40}),v.createElement(o,{x:15,y:25,text:"Enter"}))},"key-enter-standard-102":function(e){
return v.createElement(i,p.__assign({},e),v.createElement("path",{className:I,d:"m 0,0 0,40 7,0 0,42 53,0 0,-82 z"}),v.createElement(o,{x:15,y:25,text:"Enter"}))},"key-space":function(e){
return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:369,height:40}))},"key-home":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{
className:I,x:0,y:0,width:40,height:40}),v.createElement(o,{x:5,y:16,text:"Home"}))},"key-end":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,
width:40,height:40}),v.createElement(o,{x:5,y:16,text:"End"}))},"key-insert":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),v.createElement(o,{x:5,y:16,text:"Insert"}))},"key-delete":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40}),v.createElement(o,{
x:5,y:16,text:"Delete"}))},"key-page-up":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40}),v.createElement(o,{x:5,y:16,text:"Page"
}),v.createElement(o,{x:5,y:28,text:"Up"}))},"key-page-down":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40}),v.createElement(o,{
x:5,y:16,text:"Page"}),v.createElement(o,{x:5,y:28,text:"Down"}))},"key-up":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),v.createElement(s,{x:20,y:25,text:"↑",textAnchor:"middle"}))},"key-down":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),v.createElement(s,{x:20,y:25,text:"↓",textAnchor:"middle"}))},"key-left":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),v.createElement(s,{x:20,y:25,text:"←",textAnchor:"middle"}))},"key-right":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),v.createElement(s,{x:20,y:25,text:"→",textAnchor:"middle"}))},"key-np-num-lock":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),v.createElement(o,{x:5,y:16,text:"Num"}),v.createElement(o,{x:5,y:28,text:"Lock"}))},"key-np-divide":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,
y:0,width:40,height:40}),v.createElement(s,{x:15,y:25,text:"⁄"}))},"key-np-multiply":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,
height:40}),v.createElement(s,{x:15,y:25,text:"×"}))},"key-np-subtract":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),v.createElement(s,{x:15,y:25,text:"−"}))},"key-np-add":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:82}),v.createElement(s,{
x:15,y:25,text:"+"}))},"key-np-enter":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:82}),v.createElement(o,{x:5,y:16,text:"Enter"}))
},"key-np-decimal":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40}),v.createElement(s,{x:8,y:18,text:"."}),v.createElement(o,{
x:35,y:32,text:"Del",textAnchor:"end"}))},"key-np-0":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:82,height:40}),v.createElement(s,{x:8,y:18,
text:"0"}),v.createElement(o,{x:77,y:32,text:"Ins",textAnchor:"end"}))},"key-np-1":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),v.createElement(s,{x:8,y:18,text:"1"}),v.createElement(o,{x:35,y:32,text:"End",textAnchor:"end"}))},"key-np-2":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{
className:I,x:0,y:0,width:40,height:40}),v.createElement(s,{x:8,y:18,text:"2"}),v.createElement(o,{x:35,y:32,text:"↓",textAnchor:"end"}))},"key-np-3":function(e){
return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40}),v.createElement(s,{x:8,y:18,text:"3"}),v.createElement(o,{x:35,y:32,text:"Pg Dn",
textAnchor:"end"}))},"key-np-4":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40}),v.createElement(s,{x:8,y:18,text:"4"
}),v.createElement(o,{x:35,y:32,text:"←",textAnchor:"end"}))},"key-np-5":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40
}),v.createElement(s,{x:8,y:18,text:"5"}))},"key-np-6":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40}),v.createElement(s,{x:8,
y:18,text:"6"}),v.createElement(o,{x:35,y:32,text:"→",textAnchor:"end"}))},"key-np-7":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,
height:40}),v.createElement(s,{x:8,y:18,text:"7"}),v.createElement(o,{x:35,y:32,text:"Home",textAnchor:"end"}))},"key-np-8":function(e){
return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40}),v.createElement(s,{x:8,y:18,text:"8"}),v.createElement(o,{x:35,y:32,text:"↑",textAnchor:"end"
}))},"key-np-9":function(e){return v.createElement(r,p.__assign({},e),v.createElement("rect",{className:I,x:0,y:0,width:40,height:40}),v.createElement(s,{x:8,y:18,text:"9"}),v.createElement(o,{x:35,
y:32,text:"Pg Dn",textAnchor:"end"}))}}},{"../../../data/geometry":56,"../../../lib/dom":130,"../../../lib/lang":139,"../../../lib/unicode":174,classnames:"classnames","prop-types":"prop-types",
react:"react",tslib:"tslib"}],130:[function(e,t,n){"use strict";function a(e){return"Empty match: '"+e+"'"}function r(e){var t=e.lastIndexOf(":");return-1!=t?{prefix:e.substring(0,t),
localName:e.substring(t+1)}:{prefix:null,localName:e}}function i(e){var t=r(e),a=t.prefix,i=t.localName;if(null!=a){var o=n.NS_URI[a];if(null==o)throw new Error("Unknown namespace '"+a+"'");return{
name:i,nsUri:o}}return{name:e,nsUri:null}}function o(e,t){if(Array.isArray(e))for(var n=0,a=e;n<a.length;n++)s(a[n],t);else s(e,t)}function s(e,t){e.textContent=String(t)}function c(e,t){
if(Array.isArray(e))for(var n=0,a=e;n<a.length;n++)l(a[n],t);else l(e,t)}function l(e,t){if(!R(e))throw new TypeError;e.innerHTML=String(t)}function u(e,t,n){
if(Array.isArray(e))for(var a=0,r=e;a<r.length;a++)d(r[a],t,n);else d(e,t,n)}function d(e,t,n){var a=i(t);null!=a.nsUri?e.setAttributeNS(a.nsUri,a.name,String(n)):e.setAttribute(a.name,String(n))}
function f(e,t){if(Array.isArray(e))for(var n=0,a=e;n<a.length;n++)m(a[n],t);else m(e,t)}function m(e,t){for(var n=0,a=Object.entries(t);n<a.length;n++){var r=a[n];u(e,r[0],r[1])}}function p(e,t){
var n=i(t);null!=n.nsUri?e.removeAttributeNS(n.nsUri,n.name):e.removeAttribute(n.name)}function y(e,t){if(R(e))return e.classList.contains(t);if(j(e))return-1!=z(e.className.baseVal).indexOf(t)
;throw new TypeError}function b(e,t){if(Array.isArray(e))for(var n=0,a=e;n<a.length;n++)v(a[n],t);else v(e,t)}function v(e,t){U(t).forEach(function(t){z(t).forEach(function(t){h(e,t)})})}
function h(e,t){if(R(e))e.classList.add(t);else{if(!j(e))throw new TypeError;var n=z(e.className.baseVal);-1==n.indexOf(t)&&(n.push(t),e.className.baseVal=n.join(" "))}}function g(e,t){
U(t).forEach(function(t){z(t).forEach(function(t){k(e,t)})})}function k(e,t){if(R(e))e.classList.remove(t);else{if(!j(e))throw new TypeError;var n=z(e.className.baseVal),a=void 0
;-1!=(a=n.indexOf(t))&&(n.splice(a,1),e.className.baseVal=n.join(" "))}}function E(e,t){U(t).forEach(function(t){z(t).forEach(function(t){_(e,t)})})}function _(e,t){if(R(e))e.classList.toggle(t);else{
if(!j(e))throw new TypeError;var n=z(e.className.baseVal),a=void 0;-1!=(a=n.indexOf(t))?n.splice(a,1):n.push(t),e.className.baseVal=n.join(" ")}}function K(e,t,n){
if(Array.isArray(e))for(var a=0,r=e;a<r.length;a++)S(r[a],t,n);else S(e,t,n)}function S(e,t,n){var a=e.style;a[w(a,t)]=String(n)}function N(e,t){
if(Array.isArray(e))for(var n=0,a=e;n<a.length;n++)x(a[n],t);else x(e,t)}function x(e,t){for(var n=0,a=Object.entries(t);n<a.length;n++){var r=a[n];K(e,r[0],r[1])}}function w(e,t){
var n=B.toCamelCase(t);if(n in e)return n;if(n in W)return W[n];for(var a,r=["Webkit","Moz","ms"],i=n[0].toUpperCase()+n.substring(1),o=0;o<r.length;o++)if((a=r[o]+i)in e)return W[n]=a;return n}
function O(e){for(var t;t=e.lastChild;)e.removeChild(t)}function D(e){var t=e.parentNode;t&&t.removeChild(e)}function C(e,t,n,a){
if(Array.isArray(e))for(var r=0,i=e;r<i.length;r++)M(i[r],t,n,a);else M(e,t,n,a)}function M(e,t,n,a){var r,i=t;-1!=(r=t.lastIndexOf(":"))&&(t=t.substring(r+1)),t=T(t);var o,s
;null==(o=e[V])&&Object.defineProperty(e,V,{value:o=Object.create(null)}),null==(s=o[i])&&(o[i]=s=[]);var c={target:e,type:t,listener:n,capture:!!a};return s.push(c),
e.addEventListener(c.type,c.listener,c.capture),c}function I(e,t,n,a){var r,i=t;-1!=(r=t.lastIndexOf(":"))&&(t=t.substring(r+1)),t=T(t);var o,s
;if(null!=(o=e[V])&&null!=(s=o[i]))for(var c=0;c<s.length;){var l=s[c];l.type!=t||null!=n&&n!==l.listener||null!=a&&a!==l.capture?c++:(e.removeEventListener(l.type,l.listener,l.capture),s.splice(c,1))
}}function T(e){return null==G&&(G=Object.create(null),!("AnimationEvent"in H.WINDOW)&&"WebKitAnimationEvent"in H.WINDOW&&(G.animationstart="webkitAnimationStart",
G.animationiteration="webkitAnimationIteration",G.animationend="webkitAnimationEnd")),e in G?G[e]:e}function A(e,t,n){for(var a,r,s=null,l=[];-1!=(a=e.lastIndexOf("."));)l.push(e.substring(a+1)),
e=e.substring(0,a);-1!=(a=e.indexOf("#"))&&(s=e.substring(a+1),e=e.substring(0,a));var u=i(e);if(r=null!=u.nsUri?H.DOCUMENT.createElementNS(u.nsUri,u.name):H.DOCUMENT.createElement(u.name),
s&&r.setAttribute("id",s),l.forEach(function(e){z(e).forEach(function(e){z(e).forEach(function(e){b(r,e)})})}),F.isObject(t)){if(F.isString(t.id)&&r.setAttribute("id",t.id),
U(t.classList).forEach(function(e){z(e).forEach(function(e){b(r,e)})}),F.isObject(t.style)&&N(r,t.style),F.isObject(t.attr)&&f(r,t.attr),
F.isObject(t.event))for(var d=0,m=Object.entries(t.event);d<m.length;d++){var p=m[d],y=p[0],v=p[1];C(r,y,v)}if(F.isObject(t.prop))for(var h=0,g=Object.entries(t.prop);h<g.length;h++){
var k=g[h],y=k[0],v=k[1];r[y]=v}null!=t.text&&o(r,t.text),null!=t.html&&c(r,t.html),U(t.children).forEach(function(e){r.appendChild(L(e))})}return U(n).forEach(function(e){r.appendChild(L(e))}),r}
function L(e){if(e instanceof Node)return e;var t=String(e);return t.startsWith("<")?P(t):A(t)}function P(e){var t=H.DOCUMENT.createDocumentFragment(),n=H.DOCUMENT.createElement("body")
;for(c(n,e);n.firstChild;)t.appendChild(n.firstChild);return t}function R(e){return e instanceof HTMLElement}function j(e){return e instanceof SVGElement}function z(e){
return""==(e=e.trim())?[]:e.split(/\s+/)}function U(e){return null==e?[]:Array.isArray(e)?e:[e]}Object.defineProperty(n,"__esModule",{value:!0});var B=e("./id"),F=e("./lang"),H=e("./runtime/global")
;n.one=function(e,t){var n=e.querySelector(t);if(null==n)throw new Error(a(t));return n},n.all=function(e,t){var n=e.querySelectorAll(t);if(0==n.length)throw new Error(a(t));return Array.from(n)},
n.any=function(e,t){return Array.from(e.querySelectorAll(t))},n.NS_XML="http://www.w3.org/XML/1998/namespace",n.NS_XLINK="http://www.w3.org/1999/xlink",n.NS_HTML="http://www.w3.org/1999/xhtml",
n.NS_SVG="http://www.w3.org/2000/svg",n.NS_MATH="http://www.w3.org/1998/Math/MathML",n.NS_URI=F.map({xml:n.NS_XML,xlink:n.NS_XLINK,html:n.NS_HTML,svg:n.NS_SVG,math:n.NS_MATH}),n.parseQName=r,
n.resolveQName=i,n.setText=o,n.setHtml=c,n.hasAttr=function(e,t){var n=i(t);return null!=n.nsUri?e.hasAttributeNS(n.nsUri,n.name):e.hasAttribute(n.name)},n.getAttr=function(e,t){var n=i(t)
;return null!=n.nsUri?e.getAttributeNS(n.nsUri,n.name):e.getAttribute(n.name)},n.setAttr=u,n.setAttrMap=f,n.removeAttr=function(e,t){
if(Array.isArray(e))for(var n=0,a=e;n<a.length;n++)p(a[n],t);else p(e,t)},n.hasClass=function(e,t){return U(t).every(function(t){return z(t).every(function(t){return y(e,t)})})},n.addClass=b,
n.removeClass=function(e,t){if(Array.isArray(e))for(var n=0,a=e;n<a.length;n++)g(a[n],t);else g(e,t)},n.toggleClass=function(e,t){
if(Array.isArray(e))for(var n=0,a=e;n<a.length;n++)E(a[n],t);else E(e,t)},n.toggleClass0=E,n.setStyle=K,n.setStyleMap=N,n.getStyle=function(e,t){var n=getComputedStyle(e,null);return n[w(n,t)]}
;var W={float:"cssFloat"};n.empty=function(e){if(Array.isArray(e))for(var t=0,n=e;t<n.length;t++)O(n[t]);else O(e)},n.detach=function(e){
if(Array.isArray(e))for(var t=0,n=e;t<n.length;t++)D(n[t]);else D(e)},n.prepend=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var a=e.firstChild,r=0,i=t;r<i.length;r++){
var o=i[r];e.insertBefore(o,a)}},n.append=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var a=0,r=t;a<r.length;a++){var i=r[a];e.appendChild(i)}};var V="__listener__"
;n.on=C,n.off=function(e,t,n,a){if(Array.isArray(e))for(var r=0,i=e;r<i.length;r++)I(i[r],t,n,a);else I(e,t,n,a)};var G=null;n.eventName=T,n.make=A,n.text=function(e){
return H.DOCUMENT.createTextNode(e)},n.cast=L,n.parse=P,n.isHtml=R,n.isSvg=j},{"./id":137,"./lang":139,"./runtime/global":145}],137:[function(e,t,n){"use strict";function a(e){
return e.substring(0,1).toLowerCase()+e.substring(1)}function r(e){return e.substring(0,1).toUpperCase()+e.substring(1)}Object.defineProperty(n,"__esModule",{value:!0}),n.toFlat=function(e){
return e.split("-").map(function(e,t){return a(e)}).join("")},n.toCamelCase=function(e){return e.split("-").map(function(e,t){return 0===t?a(e):r(e)}).join("")},n.toPascalCase=function(e){
return e.split("-").map(function(e,t){return r(e)}).join("")}},{}],23:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("../../lib/promise"),r=e("./achievements"),i=e("./database"),o=e("./events"),s=e("./fragment"),c=e("./lesson"),l=e("./result");n.newPractice=function(e,t,n){function u(e){
"Escape"==e.key?m():"ArrowLeft"==e.key&&e.ctrlKey?m():"ArrowRight"==e.key&&e.ctrlKey&&p()}function d(e){}function f(e){b(e)}function m(){null!=E&&(E.reset(),y(E))}function p(){y(null)}function y(t){
n.update(g),null==t&&(t=s.newFragment({stopOnError:e.stopOnError,forgiving:!0,modeKey:e.modeKey},n.generate())),E=t,o.dispatchLessonStartedEvent(E)}function b(e){var t=E.step(e)
;o.dispatchLessonAdvancedEvent(E,t),null!=t.result&&v(t.result)}function v(e){if(l.validateResult(e)){g.add(e);var n=k.add(e);o.dispatchLessonCompletedEvent(e,n),t.add(e,{start:function(){},
step:function(e){},stop:function(){}}).then(function(){},a.watcher)}p()}var h=i.newDataMap(t.data()).dataForKey(e.modeKey),g=c.newStatistics(n.letters,h),k=r.newAnalyzer(),E=null;return k.analyze(h),{
get lesson(){return n},get statistics(){return g},listen:function(){return{onKeyDown:u,onKeyUp:d,onInput:f}},reset:m,next:p}}},{"../../lib/promise":144,"./achievements":9,"./database":10,
"./events":14,"./fragment":15,"./lesson":16,"./result":24}],18:[function(e,t,n){"use strict";function a(e){return p.get(e).then(m.newPhoneticModel)}function r(e){
return a(e.layout.language).then(function(t){return f.newGuidedLesson(e,t)})}function i(e){return a(e.layout.language).then(function(t){return s(e.text.url).then(function(n){
return d.newCustomLesson(e,t,n)},function(n){return d.newCustomLesson(e,t,String(n))})})}function o(e){return a(e.layout.language).then(function(t){return d.newCustomLesson(e,t,e.text.content)})}
function s(e){return l.GET("/fetch",{url:e}).send().then(function(e){if(e.isText)return e.text;throw new Error("Invalid response")},function(e){
throw e.isJson?new Error(e.json.message):new Error(e.message)})}Object.defineProperty(n,"__esModule",{value:!0})
;var c=e("../../../../lib/cache"),l=e("../../../../lib/http/request"),u=e("../../settings"),d=e("../custom"),f=e("../guided"),m=e("../phoneticmodel");n.default={loadPhoneticModel:a,load:function(e){
switch(e.mode){case u.MODE.GUIDED:return r(e);case u.MODE.IMPORT_WEBSITE:return i(e);case u.MODE.IMPORT_TEXT:return o(e);default:throw new Error}},loadGuided:r,importUrl:i,importText:o}
;var p=new c.default(function(e){return l.GET("/res/data/lang-"+e+".data").send().then(function(e){if(e.isBinary)return e.binary;throw new Error("Invalid response")})})},{"../../../../lib/cache":121,
"../../../../lib/http/request":135,"../../settings":25,"../custom":17,"../guided":19,"../phoneticmodel":20}],121:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("./lang"),r=function(){function e(e){this._data=a.map(),this._load=e}return e.prototype.get=function(e){return e in this._data?this._data[e]:this._data[e]=this._load(e)},
e.prototype.pub=function(e,t){this._data[e]=t},e}();n.default=r},{"./lang":139}],20:[function(e,t,n){"use strict";function a(e){return e&&e.length?e.map(r):null}function r(e){return e?e.charCode:null}
Object.defineProperty(n,"__esModule",{value:!0});var i=e("../../../lib/lang"),o=e("../../../lib/math/random");n.newPhoneticModel=function(e){function t(e,t){
for(var n=f.length,a=0,r=1,i=0;i<d;i++)a+=r*t[d-i-1],r*=n;var o=m[2*a]<<8|m[2*a+1],s=[];if(65535!=o)for(var c=0;c<n;){for(var l=p[o++],u=l>>>4&15,y=15&l;u-- >0;){var b=f.charCodeAt(c),v=p[o++]
;32!=b&&null!=e&&-1==e.indexOf(b)||s.push({index:c,charCode:b,weight:v}),c++}c+=y}return s}function n(e,t){for(var n=0;n<t.length;n++){var a=f.charCodeAt(t[n]);if(a>32&&-1==e.indexOf(a))return!1}
return!0}function s(e,t){var a=y[t];if(null==a)throw new Error;if(e){for(var r=[],i=0;i<a.length;i++){var o=a[i];n(e,o)&&r.push(o)}if(r.length>0)return r}return a}function c(e,n,a,r){
for(var i=0;i<f.length;i++)if(e[n]=i,n<d-1)c(e,n+1,a,r||0==n&&0==i);else for(var o=t(null,e),s=0;s<o.length;s++){var l=o[s],u=a[l.charCode];if(u+=l.weight,a[l.charCode]=u,r){
var m=y[l.charCode],p=e.slice(0);p.push(l.index),p.shift(),m.push(p)}}}function l(e){for(var t=0;t<d;t++)e[t]=0}function u(e,n,a,r){function i(){if(c++,l(e),u="",m){if(!m.length)throw new Error
;e=o.pick(m).slice(0);for(var t=0;t<d;t++){var n=f.charCodeAt(e[t]);n>32&&(u+=String.fromCharCode(n))}}}var c=0,u="",m=null;for(a&&(m=s(n,a)),i();;){var p=t(n,e);if(0==p.length)i();else{
var y=o.pickWeighted(p,function(e){return e.weight});if(function(t){for(var n=0;n<d-1;n++)e[n]=e[n+1];e[d-1]=t}(y.index),32==y.charCode){if(!(u.length<3))return u;if(5==c)return u;i()
}else if(u.length==r){if(5==c)return u;i()}else u+=String.fromCharCode(y.charCode)}}}var d=0,f="",m=null,p=null,y=i.map();!function(){
for(var t=new Uint8Array(e),n=0,a=0,r=[107,101,121,98,114,46,99,111,109];a<r.length;a++){var i=r[a];if(t[n++]!=i)throw new Error("Invalid data")}
for(var o=t[n++],s=0;s<o;s++)f+=String.fromCharCode(t[n++]<<8|t[n++]);d=t[n++]-1;var c=n,l=c+2*Math.pow(f.length,d);m=new Uint8Array(e,c,l-c),p=new Uint8Array(e,l)}();var b=function(){
for(var e=i.map(),t=0;t<f.length;t++){var n=f.charCodeAt(t);e[n]=0,y[n]=[]}return e}();c(new Array(d),0,b,!1);var v=function(e){for(var t=0,n=0;n<f.length;n++)(r=f.charCodeAt(n))>32&&(t+=e[r])
;for(var a=[],n=0;n<f.length;n++){var r=f.charCodeAt(n);r>32&&a.push(Object.freeze({charCode:r,f:e[r]/t}))}return Object.freeze(a)}(b),h=new Array(d);return{get letters(){return v},reset:function(){
l(h)},nextWord:function(e,t,n){return u(h,a(e),r(t),n)}}}},{"../../../lib/lang":139,"../../../lib/math/random":141}],19:[function(e,t,n){"use strict";function a(e,t){
var n=e.confidenceLevel||0,a=t.confidenceLevel||0;return n==a?t.letter.f-e.letter.f:n-a}Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("../../../lib/math/random"),i=e("../../keyboard/layout"),o=e("../letter"),s=e("./wordfilter");n.MIN_KEY_SET_SIZE=6,n.newGuidedLesson=function(e,t){var c=i.layoutCharCodes(e.layout,{
enableDeadKeys:!1}),l=o.sortLetters(o.filterLetters(t.letters,c),o.byFrequency),u=o.filterLetters(o.punctuators,c),d=[],f=[],m=null;return{get letters(){return l},get includedKeys(){return d},
get excludedKeys(){return f},get boostedKey(){return m},generate:function(){function n(e){try{for(var n=0,a="";n<3;)if(a=t.nextWord(i,o,c),s.allow(a)){if(a!=e)return a;n++}return a}catch(e){
return null!=o?String.fromCharCode(o.charCode):"?"}}function a(e){return e?e.letter:null}var i=function(e){return e&&e.length?e.map(a):null
}(d),o=a(m),c=5+Math.round(4*e.lesson.length),l=50+Math.round(100*e.lesson.length);t.reset();for(var f="",p="";f.length<l;){var y=p=n(p)
;if(e.lesson.capitals&&(y=y.substring(0,1).toUpperCase()+y.substring(1)),e.lesson.punctuators){var b=r.pickWeighted(u,function(e){return e.f}),v=String.fromCharCode(b.charCode);switch(v){case null:
break;case"-":y=y+"-"+n(p);break;case"(":y="("+y+")";break;case"[":y="["+y+"]";break;case'"':y='"'+y+'"';break;case"'":y=y+"'"+n(p);break;default:y+=v}}0==f.length?f=y:f+=" "+y}return f},
update:function(t){var r=n.MIN_KEY_SET_SIZE,i=r+Math.round((l.length-r)*e.lesson.complexity);d=[],f=[],m=null;for(var o=0;o<l.length;o++){var s=l[o],c=t.getKeyData(s),u={letter:s,meanTime:c.meanTime,
bestMeanTime:c.bestMeanTime,confidenceLevel:c.confidenceLevel,isConfident:c.isConfident,isBoosted:!1,isForced:o>=r&&o<i};o<r||u.isConfident||d.every(function(e){return e.isConfident
})||u.isForced?d.push(u):f.push(u)}var p=d.filter(function(e){return!e.isConfident});if(p.length>0){var y=p.sort(a).shift();d=d.map(function(e){return e==y?m={letter:e.letter,meanTime:e.meanTime,
bestMeanTime:e.bestMeanTime,confidenceLevel:e.confidenceLevel,isConfident:e.isConfident,isBoosted:!0,isForced:e.isForced}:e})}}}}},{"../../../lib/math/random":141,"../../keyboard/layout":5,
"../letter":22,"./wordfilter":21}],21:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("../../../lib/lang").map({97:110,98:111,99:112,100:113,101:114,102:115,
103:116,104:117,105:118,106:119,107:120,108:121,109:122,110:97,111:98,112:99,113:100,114:101,115:102,116:103,117:104,118:105,119:106,120:107,121:108,122:109
}),r=["nany","nanyf","nahf","nahfrf","nefrubyr","nefrubyrf","nff","nffont","nffontf","nffrf","nffubyr","nffubyrf","ovgpu","ovgpurf","obare","obaref","obbo","obbof","ohgg","ohggf","puvap","puvapf","puvax","puvaxf","pyvg","pyvgbevf","pyvgf","pbpx","pbpxf","phz","phag","phagf","qntb","qntbf","qvpx","qvpxf","qvxr","qvxrf","snt","snttvg","snttvgf","snttbg","snttbgf","sntf","srypu","srypurf","shpx","shpxre","shpxref","shpxf","tnl","tnlf","wvmm","wvmmrf","whtt","whttf","zvys","zvysf","zhss","zhssf","avttn","avttnf","avttre","avttref","betvrf","betl","crpxre","crpxref","cravf","cravfrf","cvff","cvffrf","cbea","cbeaf","chffvrf","chffl","dhrre","dhrref","fuvg","fuvgf","fyhg","fyhgf","fzhg","fzhgf","fcvp","fcvp","fcvpx","fcvpxf","gneq","gneqf","gvg","gvgf","gjng","gjngf","jnax","jnaxf","juber","juberf"].map(function(e){
for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);t+=r in a?String.fromCharCode(a[r]):String.fromCharCode(r)}return t.toLowerCase()});n.allow=function(e){return-1==r.indexOf(e.toLowerCase())}},{
"../../../lib/lang":139}],17:[function(e,t,n){"use strict";function a(e){for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n));return t}Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("../../keyboard/layout"),i=e("../../plaintext"),o=e("../letter");n.newCustomLesson=function(e,t,n){function s(){return y=m.nextWord(p)}
var c=r.layoutCharCodes(e.layout,{}),l=o.sortLetters(o.filterLetters(t.letters,c),o.byIndex),u=[],d=[],f=null
;n=e.text.mangle.simplify?i.sanitize(n,c,a("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")):i.sanitize(n,c),e.text.mangle.lowercase&&(n=n.toLowerCase());var m=i.newParser(n),p=30,y=null;return s(),{
get letters(){return l},get includedKeys(){return u},get excludedKeys(){return d},get boostedKey(){return f},generate:function(){for(var e="",t=0,n=" ";y!=i.SPLIT&&t<5;){
if(""==e)"\n"!=y&&(e=y);else if("\n"==y)n="\n",t++;else{if(e.length+y.length+1>80)break;e=e+n+y,n=" "}s()}for(;y==i.SPLIT;)s();return e},update:function(e){u=[],d=[],f=null
;for(var t=0;t<l.length;t++){var n=l[t],a=e.getKeyData(n),r={letter:n,meanTime:a.meanTime,bestMeanTime:a.bestMeanTime,confidenceLevel:a.confidenceLevel,isConfident:a.isConfident,isBoosted:!1,
isForced:!1};u.push(r)}}}}},{"../../keyboard/layout":5,"../../plaintext":8,"../letter":22}],22:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),
n.punctuators=[Object.freeze({charCode:33,f:1}),Object.freeze({charCode:34,f:1}),Object.freeze({charCode:39,f:1}),Object.freeze({charCode:40,f:1}),Object.freeze({charCode:44,f:1}),Object.freeze({
charCode:45,f:1}),Object.freeze({charCode:46,f:1}),Object.freeze({charCode:58,f:1}),Object.freeze({charCode:59,f:1}),Object.freeze({charCode:63,f:1}),Object.freeze({charCode:91,f:1})],
n.filterLetters=function(e,t){for(var n=[],a=0,r=e;a<r.length;a++){var i=r[a];-1!=t.indexOf(i.charCode)&&n.push(i)}return Object.freeze(n)},n.sortLetters=function(e,t){var n=e.slice()
;return n.sort(t),Object.freeze(n)},n.byIndex=function(e,t){return e.charCode-t.charCode},n.byFrequency=function(e,t){return t.f-e.f}},{}],16:[function(e,t,n){"use strict";function a(e){
return null==e||0==e?null:6e4/e}function r(e){return null==e||0==e?null:(e=Math.max(e,n.MIN_TIME),e=Math.min(e,n.MAX_TIME),1-(e=(e-n.MIN_TIME)/(n.MAX_TIME-n.MIN_TIME)))}function i(e){
return null==e||0==e?null:e<=n.MIN_TIME}function o(e){var t=0,n=[],a=[],o=l.movingMean(u),c=null,f=null;return{get letter(){return e},get meanTime(){return o.mean},get bestMeanTime(){return o.minMean
},get confidenceLevel(){return r(o.mean)},get isConfident(){return i(o.minMean)},get t(){return a},get deltaTime(){return c},add:function(r){var i=r.histogram[e.charCode];null!=i&&i.t>0?(c=i.t-o.mean,
n.push(t+=r.time),a.push(i.t),o.add(i.t)):c=null,f=null},learningRate:function(){return a.length<10?null:(null==f&&(f=s(n,a,d)),f)}}}function s(e,t,n){
for(var r=e.slice(-n),i=r[0],o=0;o<r.length;o++)r[o]=r[o]-i;var s=l.movingMeanSmooth(u,t).slice(-n).map(a);return{x:r,y:s,perHour:60*l.linearRegression(r,s).b*60*1e3}}
Object.defineProperty(n,"__esModule",{value:!0});var c=e("../../lib/lang"),l=e("../../lib/math/statistics");n.MIN_TIME=340,n.MAX_TIME=1e3;var u=.1,d=50;n.timeToSpeed=a,n.confidenceLevel=r,
n.isConfident=i,n.newKeyData=o,n.newStatistics=function(e,t){function n(e,t){a+=e.time,r=e.speed,i=Math.max(i,r),s+=r,d=e.score,f=Math.max(f,d),m+=d,b=e.errors,v+=b,t>0&&(u=r-l,l=s/t,y=d-p,p=m/t,
g=b-h,h=v/t)}for(var a=0,r=0,i=0,s=0,l=0,u=0,d=0,f=0,m=0,p=0,y=0,b=0,v=0,h=0,g=0,k=c.map(),E=0,_=e;E<_.length;E++){for(var K=_[E],S=o(K),N=t.length,x=0;x<N;x++)S.add(t[x]);k[K.charCode]=S}
for(var w=t.length,x=0;x<w;x++)n(t[x],x+1);return{get letters(){return e},get data(){return t},getKeyData:function(e){var t=k[e.charCode];if(null==t)throw new Error;return t},get keyData(){
return Object.values(k)},get totalSamples(){return t.length},get totalTime(){return a},get lastSpeed(){return r},get topSpeed(){return i},get avgSpeed(){return l},get deltaSpeed(){return u},
get lastScore(){return d},get topScore(){return f},get avgScore(){return p},get deltaScore(){return y},get lastErrors(){return b},get avgErrors(){return h},get deltaErrors(){return g},add:function(a){
t.push(a),n(a,t.length);for(var r=0,i=e;r<i.length;r++){var o=i[r];k[o.charCode].add(a)}}}}},{"../../lib/lang":139,"../../lib/math/statistics":143}],143:[function(e,t,n){"use strict";function a(e){
var t=0,n=null,a=null,r=null;return{get n(){return t},get mean(){return n},get minMean(){return a},get maxMean(){return r},add:function(i){++t>1?(n=e*i+(1-e)*n,a=Math.min(a,n),r=Math.max(r,n)):(a=n=i,
r=n)}}}Object.defineProperty(n,"__esModule",{value:!0}),n.indices=function(e){for(var t=Array(e.length),n=e.length,a=0;a<n;a++)t[a]=a;return t},n.linearRegression=function(e,t){
if(e.length<3||e.length!=t.length)throw new Error;var n=e.length,a=0,r=0,i=0,o=0,s=0;return function(){for(var c=0,l=0,u=0,d=0,f=0,m=0;m<n;m++)c+=b=e[m],l+=v=t[m]
;for(var p=c/n,y=l/n,m=0;m<n;m++)u+=(h=(b=e[m])-p)*(g=(v=t[m])-y),d+=h*h;for(a=y-u/d*p,r=u/d,m=0;m<n;m++){var b=e[m],v=t[m],h=v-(a+b*r),g=v-y;i+=h*h,f+=g*g}o=i/(n-2),s=1-i/f}(),{get a(){return a},
get b(){return r},get rss(){return i},get mse(){return o},get r2(){return s},fn:function(e){return a+e*r}}},n.movingMean=a,n.movingMeanSmooth=function(e,t){
for(var n=Array(t.length),r=a(e),i=t.length,o=0;o<i;o++)r.add(t[o]),n[o]=r.mean;return n}},{}],15:[function(e,t,n){"use strict";function a(e){for(var t=[],n=0;n<e.length;n++){var a=e.charCodeAt(n)
;-1==t.indexOf(a)&&t.push(a)}return t.length}function r(){function e(e,t){var n=u[e];null==n&&(n=u[e]={h:0,m:0,t:[]}),n.h++,m&&t&&m<t&&n.t.push(t-m)}function t(e,t){var n=d[e];null==n&&(n=d[e]={h:0,
m:0,t:[]}),n.h++,m&&t&&m<t&&n.t.push(t-m)}function n(e){var t=u[e];null==t&&(t=u[e]={h:0,m:0,t:[]}),t.m++}function a(e){var t=d[e];null==t&&(t=d[e]={h:0,m:0,t:[]}),t.m++}function r(){
for(var e=o.map(),t=0,n=Object.keys(u).map(Number).sort();t<n.length;t++){var a=n[t],r=u[a];e[a]={h:r.h,m:r.m,t:s.default(i(r.t),1e3)}}return e}function c(){
for(var e=o.map(),t=0,n=Object.keys(d).map(Number).sort();t<n.length;t++){var a=n[t],r=d[a];e[a]={h:r.h,m:r.m,t:s.default(i(r.t),1e3)}}return e}var u=o.map(),d=o.map(),f=0,m=0;return{reset:function(){
f=0,m=0},stumble:function(){m=0},hit:function(n,a){e(n,a),f&&t(l.transition(f,n),a),f=n,m=a},miss:function(e){n(e),f&&a(l.transition(f,e)),m=0},build:function(){var e=r();return c(),e}}}function i(e){
for(var t=0,n=0,a=0,r=e;a<r.length;a++){var i=r[a];i>0&&(t+=i,n+=1)}return n>0?t/n:0}Object.defineProperty(n,"__esModule",{value:!0})
;var o=e("../../lib/lang"),s=e("../../lib/math/round"),c=e("../../lib/time"),l=e("./result");n.newFragment=function(e,t){function n(){h=null,g=null,k=0,E=0,_=[],K="",S=null,N=[],x=r()}
function i(e,t,n){return O?D?s(e,t,n):u(e,t,n):d(e,t,n)}function o(){x.reset(),O?D?f():m():p()}function s(e,n,a){if(0==N.length&&e==n)return x.hit(e,a),k++,!0;if(v(),x.stumble(),N.push({charCode:n,
time:a}),k+w<t.length&&N.length==w&&y()){for(x.miss(e),s=0;s<N.length;s++){var r=N[s],i=r.charCode,o=r.time;x.hit(i,o)}return N=[],k+=w+1,!0}if(k+w<t.length&&N.length==w+1&&b()){x.miss(e)
;for(var s=1;s<N.length;s++){var c=N[s],i=c.charCode,o=c.time;x.hit(i,o)}return N=[],k+=w+1,!0}return e==n&&(x.miss(e),x.hit(e,a),N=[],k++,!0)}function u(e,t,n){return e==t?(x.hit(e,n),k++,
!0):(v()&&x.miss(e),!1)}function d(e,t,n){return K.length>0?(K.length<30&&(K+=String.fromCharCode(t)),!1):e==t?(x.hit(e,n),k++,!0):(v()&&x.miss(e),K=String.fromCharCode(t),!1)}function f(){N=[]}
function m(){}function p(){K.length>0&&(K=K.substring(0,K.length-1))}function y(){for(var e=0;e<N.length;e++)if(t.charCodeAt(k+1+e)!=N[e].charCode)return!1;return!0}function b(){
for(var e=1;e<N.length;e++)if(t.charCodeAt(k+e)!=N[e].charCode)return!1;return!0}function v(){return-1==_.indexOf(k)&&(E++,_.push(k),!0)}
var h,g,k,E,_,K,S,N,x,w=3,O=e.stopOnError,D=e.forgiving,C=e.modeKey,M=e.clock||c.systemClock,I=a(t);if(0==t.length)throw new Error;return n(),{reset:n,step:function(e){if(null!=S)throw new Error
;var n=t.charCodeAt(k);if(0==k&&0==K.length&&(8==e||9==e||10==e||32==e))return{elapsed:0,hit:null,expected:n,actual:e,result:null};var a=M.now();if(null==h&&(h=a),g=a-h,8==e)return o(),{elapsed:g,
hit:null,expected:n,actual:e,result:null};var r=i(n,e,a);return k==t.length&&(S=l.newResult(C,h,t.length,g,E,I,x.build())),{elapsed:g,hit:r,expected:n,actual:e,result:S}},get text(){return t},
get position(){return k},get errors(){return E},get errorPositions(){return _},get garbage(){return K}}},n.newHistogramBuilder=r},{"../../lib/lang":139,"../../lib/math/round":142,"../../lib/time":158,
"./result":24}],158:[function(e,t,n){"use strict";function a(e){return e<10?"0"+String(e):String(e)}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./lang"),i=e("./math/round")
;n.systemClock={now:function(){return Date.now()}},n.newStopwatch=function(e){function t(e){return e<1e3?e+"ms":i.default(e/1e3,1e3)+"s"}void 0===e&&(e=n.systemClock);var a=e.now(),r={get elapsed(){
return e.now()-a},stop:function(){var n=e.now(),r={get elapsed(){return n-a},stop:function(){return r},toString:function(){return t(r.elapsed)}};return r},toString:function(){return t(r.elapsed)}}
;return r},n.formatDuration=function(e){var t=e/3600|0,n=(e-=3600*t)/60|0,r=0|(e-=60*n);return a(t)+":"+a(n)+":"+a(r)};var o=function(){function e(){var e,t,n,i,o,s=arguments
;if(3==s.length&&r.isNumber(e=s[0])&&r.isNumber(t=s[1])&&r.isNumber(n=s[2]))o=new Date(e,t-1,n);else if(1==s.length&&r.isNumber(i=s[0]))o=new Date(i);else{
if(1!=s.length||!r.isObject(o=s[0]))throw new TypeError;o=new Date(o.getTime())}return o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0),this.year=o.getFullYear(),
this.month=o.getMonth()+1,this.day=o.getDate(),this.timeStamp=o.getTime(),this.value=this.year+"-"+a(this.month)+"-"+a(this.day),this}return e.now=function(){return new e(Date.now())},
e.prototype.includes=function(e){return this.timeStamp<=e&&e<this.timeStamp+864e5},e.prototype.toString=function(){return this.value},e}();n.CalendarDate=o},{"./lang":139,"./math/round":142}],
14:[function(e,t,n){"use strict";function a(e,t,n,a){return void 0===n&&(n=!0),void 0===a&&(a=!1),i.DOCUMENT.dispatchEvent(o.newCustomEvent(e,{detail:t,bubbles:n,cancelable:a}))}function r(e,t){
return i.DOCUMENT.addEventListener(e,t,!0),function(){i.DOCUMENT.removeEventListener(e,t,!0)}}Object.defineProperty(n,"__esModule",{value:!0})
;var i=e("../../lib/runtime/global"),o=e("../../lib/runtime/polyfill");n.EV_LESSON_STARTED="lesson-started",n.EV_LESSON_ADVANCED="lesson-advanced",n.EV_LESSON_COMPLETED="lesson-completed",
n.dispatchLessonStartedEvent=function(e){return a(n.EV_LESSON_STARTED,{fragment:e})},n.listenLessonStarted=function(e){return r(n.EV_LESSON_STARTED,function(t){var n=t.detail;e(n.fragment)})},
n.dispatchLessonAdvancedEvent=function(e,t){return a(n.EV_LESSON_ADVANCED,{fragment:e,step:t})},n.listenLessonAdvanced=function(e){return r(n.EV_LESSON_ADVANCED,function(t){var n=t.detail
;e(n.fragment,n.step)})},n.dispatchLessonCompletedEvent=function(e,t){return a(n.EV_LESSON_COMPLETED,{result:e,achievements:t})},n.listenLessonCompleted=function(e){
return r(n.EV_LESSON_COMPLETED,function(t){var n=t.detail;e(n.result,n.achievements)})}},{"../../lib/runtime/global":145,"../../lib/runtime/polyfill":147}],147:[function(e,t,n){"use strict"
;function a(e,t,n,a,r){t in e||Object.defineProperty(e,t,{value:n,configurable:r,writable:a})}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./global"),i=e("./polyfill/event")
;n.newCustomEvent=i.newCustomEvent,n.newEvent=i.newEvent
;var o=e("./polyfill/object"),s=e("./polyfill/array"),c=e("./polyfill/number"),l=e("./polyfill/string"),u=e("./polyfill/promise"),d=e("./polyfill/url"),f=e("./polyfill/fullscreen")
;a(Object,"assign",o.Object_assign,!0,!0),a(Object,"is",o.Object_is,!0,!0),a(Object,"values",o.Object_values,!0,!0),a(Object,"entries",o.Object_entries,!0,!0),a(Array,"from",s.Array_from,!0,!0),
a(Array,"of",s.Array_of,!0,!0),a(Array.prototype,"find",s.Array_find,!0,!0),a(Array.prototype,"findIndex",s.Array_findIndex,!0,!0),a(Number,"EPSILON",c.Number_EPSILON,!1,!1),
a(Number,"MIN_SAFE_INTEGER",c.Number_MIN_SAFE_INTEGER,!1,!1),a(Number,"MAX_SAFE_INTEGER",c.Number_MAX_SAFE_INTEGER,!1,!1),a(Number,"parseFloat",parseFloat,!0,!0),a(Number,"parseInt",parseInt,!0,!0),
a(Number,"isNaN",c.Number_isNaN,!0,!0),a(Number,"isFinite",c.Number_isFinite,!0,!0),a(Number,"isInteger",c.Number_isInteger,!0,!0),a(Number,"isSafeInteger",c.Number_isSafeInteger,!0,!0),
a(String.prototype,"startsWith",l.String_startsWith,!0,!0),a(String.prototype,"endsWith",l.String_endsWith,!0,!0),a(String.prototype,"includes",l.String_includes,!0,!0),
a(r.WINDOW,"Promise",u.default,!0,!0),d.default(),f.default()},{"./global":145,"./polyfill/array":148,"./polyfill/event":149,"./polyfill/fullscreen":150,"./polyfill/number":151,
"./polyfill/object":152,"./polyfill/promise":153,"./polyfill/string":154,"./polyfill/url":155}],155:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a=e("../global"),r=a.WINDOW.URL;n.default=function(){try{if("http://a/b"==new URL("b","http://a").href)return}catch(e){}a.WINDOW.URL=i};var i=function(){function e(e,t){
if(!e)throw new TypeError("Invalid URL");var n=a.DOCUMENT.implementation.createHTMLDocument("");if(t){var r=n.createElement("base");r.href=t,n.head.appendChild(r)}var i=n.createElement("a")
;if(i.href=e,n.body.appendChild(i),":"==i.protocol||!/:/.test(i.href))throw new TypeError("Invalid URL");this._elem=i}return e.prototype.toString=function(){return this.href},
Object.defineProperty(e.prototype,"hash",{get:function(){return this._elem.hash},set:function(e){this._elem.hash=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"host",{
get:function(){return this._elem.host},set:function(e){this._elem.host=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hostname",{get:function(){return this._elem.hostname},
set:function(e){this._elem.hostname=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"href",{get:function(){return this._elem.href},set:function(e){this._elem.href=e},
enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"origin",{get:function(){throw new Error},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"password",{
get:function(){return""},set:function(e){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"protocol",{get:function(){return this._elem.protocol},set:function(e){
this._elem.protocol=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pathname",{get:function(){return this._elem.pathname},set:function(e){this._elem.pathname=e},enumerable:!0,
configurable:!0}),Object.defineProperty(e.prototype,"port",{get:function(){return this._elem.port},set:function(e){this._elem.port=e},enumerable:!0,configurable:!0}),
Object.defineProperty(e.prototype,"search",{get:function(){return this._elem.search},set:function(e){this._elem.search=e},enumerable:!0,configurable:!0}),
Object.defineProperty(e.prototype,"searchParams",{get:function(){throw new Error},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"username",{get:function(){return""},
set:function(e){},enumerable:!0,configurable:!0}),e.createObjectURL=function(e,t){return r.createObjectURL.apply(r,arguments)},e.revokeObjectURL=function(e){return r.revokeObjectURL.apply(r,arguments)
},e}()},{"../global":145}],154:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.String_startsWith=function(e,t){if(null==this)throw new TypeError
;if(e instanceof RegExp)throw new TypeError;e=String(e);var n=this.length,a=e.length,r=void 0!=t?0|t:0,i=Math.min(Math.max(r,0),n);if(i+a>n)return!1
;for(var o=0;o<a;o++)if(this.charCodeAt(i+o)!=e.charCodeAt(o))return!1;return!0},n.String_endsWith=function(e,t){if(null==this)throw new TypeError;if(e instanceof RegExp)throw new TypeError
;e=String(e);var n=this.length,a=e.length,r=void 0!=t?0|t:n,i=Math.min(Math.max(r,0),n)-a;if(i<0)return!1;for(var o=0;o<a;o++)if(this.charCodeAt(i+o)!=e.charCodeAt(o))return!1;return!0},
n.String_includes=function(e,t){if(null==this)throw new TypeError;if(e instanceof RegExp)throw new TypeError;e=String(e);var n=this.length,a=e.length,r=void 0!=t?0|t:0,i=Math.min(Math.max(r,0),n)
;return!(i+a>n)&&-1!=this.indexOf(e,i)}},{}],153:[function(e,t,n){"use strict";function a(e,t){var n=!1;try{e(function(e){n||(n=!0,i(t,e))},function(e){n||(n=!0,o(t,e))})}catch(e){if(n)return;n=!0,
o(t,e)}}function r(e,t){for(;e._state===y;)e=e._value;e._state!==f?(e._handled=!0,b(function(){var n=e._state===m?t.onFulfilled:t.onRejected;if(null!==n){var a;try{a=n(e._value)}catch(e){
return void o(t.promise,e)}i(t.promise,a)}else(e._state===m?i:o)(t.promise,e._value)})):e._deferreds.push(t)}function i(e,t){try{
if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof v)return e._state=y,e._value=t,void s(e)
;if("function"==typeof n)return void a(l(n,t),e)}e._state=m,e._value=t,s(e)}catch(t){o(e,t)}}function o(e,t){e._state=p,e._value=t,s(e)}function s(e){
e._state===p&&0===e._deferreds.length&&b(function(){e._handled||u(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)r(e,e._deferreds[t]);e._deferreds=null}function c(){}function l(e,t){
return function(){e.apply(t,arguments)}}function u(e){console.warn("Possible Unhandled Promise Rejection:",e)}Object.defineProperty(n,"__esModule",{value:!0})
;var d=e("../global"),f=0,m=1,p=2,y=3,b="function"==typeof d.WINDOW.setImmediate?function(e){d.WINDOW.setImmediate(e)}:function(e){d.WINDOW.setTimeout(e)},v=function(){function e(e){
if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=f,this._handled=!1,this._value=void 0,
this._deferreds=[],a(e,this)}return e.prototype.then=function(t,n){var a=new e(c);return r(this,new h(t,n,a)),a},e.prototype.catch=function(e){return this.then(null,e)},e.resolve=function(t){
return t&&"object"==typeof t&&t.constructor===e?t:new e(function(e){e(t)})},e.reject=function(t){return new e(function(e,n){n(t)})},e.all=function(t){var n=Array.prototype.slice.call(t)
;return new e(function(e,t){function a(i,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,function(e){a(i,e)},t)}n[i]=o,0==--r&&e(n)
}catch(e){t(e)}}if(0===n.length)return e([]);for(var r=n.length,i=0;i<n.length;i++)a(i,n[i])})},e.race=function(t){return new e(function(e,n){for(var a=0,r=t.length;a<r;a++)t[a].then(e,n)})},e}()
;n.default=v;var h=function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}},{"../global":145}],152:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0}),n.Object_assign=function(e){if(null==e)throw new TypeError;for(var t=Object(e),n=1;n<arguments.length;n++){var a=arguments[n]
;if(null!=a)for(var r=Object(a),i=0,o=Object.keys(r);i<o.length;i++){var s=o[i];t[s]=r[s]}}return t},n.Object_is=function(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t},n.Object_values=function(e){
if(null==e)throw new TypeError;for(var t=Object(e),n=[],a=0,r=Object.keys(t);a<r.length;a++){var i=r[a];n.push(t[i])}return n},n.Object_entries=function(e){if(null==e)throw new TypeError
;for(var t=Object(e),n=[],a=0,r=Object.keys(t);a<r.length;a++){var i=r[a];n.push([i,t[i]])}return n}},{}],151:[function(e,t,n){"use strict";function a(e){return"number"==typeof e&&isFinite(e)}
function r(e){return a(e)&&Math.floor(e)===e}Object.defineProperty(n,"__esModule",{value:!0}),n.Number_EPSILON=2.220446049250313e-16,n.Number_MIN_SAFE_INTEGER=-9007199254740991,
n.Number_MAX_SAFE_INTEGER=9007199254740991,n.Number_isNaN=function(e){return"number"==typeof e&&isNaN(e)},n.Number_isFinite=a,n.Number_isInteger=r,n.Number_isSafeInteger=function(e){
return r(e)&&e>=n.Number_MIN_SAFE_INTEGER&&e<=n.Number_MAX_SAFE_INTEGER}},{}],150:[function(e,t,n){"use strict";function a(e,t,n,a){if(!(t in e)){for(var r=0,i=n;r<i.length;r++){var o=i[r]
;if(o in e)return void Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(e,o))}a.get||a.set?Object.defineProperty(e,t,Object.assign({configurable:!0,enumerable:!0
},a)):Object.defineProperty(e,t,Object.assign({configurable:!0,enumerable:!0,writable:!0},a))}}function r(e,t){for(var n=0,a=Object.keys(e);n<a.length;n++){var r=a[n];if(r in s.DOCUMENT){var i=e[r]
;s.DOCUMENT.addEventListener(i,t);break}}}function i(e){s.DOCUMENT.dispatchEvent(c.newEvent("fullscreenchange",!0,!1))}function o(e){s.DOCUMENT.dispatchEvent(c.newEvent("fullscreenerror",!0,!1))}
Object.defineProperty(n,"__esModule",{value:!0});var s=e("../global"),c=e("./event");n.default=function(){
a(Element.prototype,"requestFullscreen",["webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],{value:function(){}}),function(e){
a(e,"exitFullscreen",["webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],{value:function(){}}),
a(e,"fullscreenEnabled",["webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],{get:function(){return!1}}),
a(e,"fullscreenElement",["webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],{get:function(){return null}})}(Document.prototype),r({
onwebkitfullscreenchange:"webkitfullscreenchange",onmozfullscreenchange:"mozfullscreenchange",onmsfullscreenchange:"MSFullscreenChange"},i),r({onwebkitfullscreenerror:"webkitfullscreenerror",
onmozfullscreenerror:"mozfullscreenerror",onmsfullscreenerror:"MSFullscreenError"},o)}},{"../global":145,"./event":149}],149:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{
value:!0});var a=e("../global");n.newEvent=function(e,t,n){var r=a.DOCUMENT.createEvent("Event");return r.initEvent(e,t,n),r},n.newCustomEvent=function(e,t){var n=a.DOCUMENT.createEvent("CustomEvent")
;return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}},{"../global":145}],148:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Array_from=function(e,t,n){
if(null==e)throw new TypeError;for(var a=Object(e),r=a.length>>>0,i=new Array(r),o=0;o<r;o++)i[o]=t?t.call(n,a[o],o):a[o];return i},n.Array_of=function(){return Array.prototype.slice.call(arguments)},
n.Array_find=function(e,t){if(null==this)throw new TypeError;if("function"!=typeof e)throw new TypeError;for(var n,a=Object(this),r=a.length>>>0,i=0;i<r;i++)if(n=a[i],e.call(t,n,i,a))return n},
n.Array_findIndex=function(e,t){if(null==this)throw new TypeError;if("function"!=typeof e)throw new TypeError;for(var n,a=Object(this),r=a.length>>>0,i=0;i<r;i++)if(n=a[i],e.call(t,n,i,a))return i
;return-1}},{}],13:[function(e,t,n){"use strict";function a(e,t){function n(e){e.sort(function(e,t){return e.timeStamp-t.timeStamp}),a.splice.apply(a,[0,a.length].concat(e))}var a=[];return{
open:function(a){function i(){return t.receive(a).then(function(r){return r.length>0?(n(r),null):e.read().then(function(r){return n(r),r.length>0?t.send(r,a).then(function(){return e.clear()}):null})
})}function o(){return e.read().then(function(e){return n(e),null})}return(t.enabled?i():o()).catch(r.explain("Cannot read records from database"))},data:function(){return a},add:function(n,i){
return a.push(n),function(n){return t.enabled?t.send([n],i):e.add([n])}(n).catch(r.explain("Cannot add new record to database"))},clear:function(){return a.splice(0,a.length),
(t.enabled?t.clear():e.clear()).catch(r.explain("Cannot clear database"))}}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("../../../lib/promise"),i=e("./resultstorage"),o=e("./resultsync")
;n.newDatabase=function(e,t){return a(i.openLocalResultStorage(e),o.openRemoteResultSync(t))},n.openDatabase=a},{"../../../lib/promise":144,"./resultstorage":11,"./resultsync":12}],
12:[function(e,t,n){"use strict";function a(e){return{enabled:!0,send:function(e,t){var n=c.encode(new Uint8Array(r(e))).buffer;return new Promise(function(e,a){t.start(),l.POST("/sync").monitor({
send:function(e){t.step({total:e.total,current:e.loaded})},receive:null}).sendBinary(n).then(function(n){t.stop(),e(null)},function(e){t.stop(),a(e)})})},receive:function(e){
return new Promise(function(t,n){e.start(),l.GET("/sync").monitor({receive:function(t){e.step({total:t.total,current:t.loaded})},send:null}).send().then(function(a){e.stop(),
a.isBinary?t(o(a.binary)):n(new Error("Invalid response"))},function(t){e.stop(),n(t)})})},clear:function(){return new Promise(function(e,t){l.DELETE("/sync").send().then(function(t){e(null)
},function(e){t(e)})})}}}function r(e){var t=new s.Writer;t.putUint32(m),t.putUint32(p),t.putUint32(e.length);for(var n=0,a=e;n<a.length;n++){
var r=a[n],o=i(r.histogram),c=r.timeStamp/1e3|0,l=r.timeStamp-1e3*c|0;t.putUint8(r.modeKey.layout.xid),t.putUint8(r.modeKey.modeType.xid),t.putUint32(c),t.putUint16(l),t.putUint16(r.time),
t.putUint8(r.length),t.putUint8(r.errors),t.putUint8(r.complexity),t.putUint8(o.length);for(var u=0,d=o;u<d.length;u++){var f=d[u];t.putUint16(f.charCode),t.putUint8(f.h),t.putUint8(f.m),
t.putUint32(Math.round(1e3*f.t))}}return t.putUint32(t.crc32()),t.buffer()}function i(e){for(var t=[],n=0,a=Object.entries(e);n<a.length;n++){var r=a[n],i=r[0],o=r[1];t.push({charCode:Number(i),h:o.h,
m:o.m,t:o.t})}return t}function o(e){var t=[],n=new s.Reader(e);if(n.remaining()>8&&n.getUint32()==y&&n.getUint32()==b)for(;n.remaining()>0;){
for(var a=n.getUint8(),r=n.getUint8(),i=n.getUint32(),o=n.getUint16(),c=n.getUint16(),l=n.getUint8(),m=n.getUint8(),p=n.getUint8(),v=n.getUint8(),h=u.map(),g=0;g<v;g++){
var k=n.getUint16(),E=n.getUint8(),_=n.getUint8(),K=n.getUint32()/1e3;h[k]={h:E,m:_,t:K}}var S=d.newResult(f.getModeKeyByXid(a,r),1e3*i+o,l,c,m,p,h);d.validateResult(S)&&t.push(S)}return t}
Object.defineProperty(n,"__esModule",{value:!0})
;var s=e("../../../lib/data/io"),c=e("../../../lib/data/secret"),l=e("../../../lib/http/request"),u=e("../../../lib/lang"),d=e("../result"),f=e("../settings");n.openRemoteResultSync=function(e){
if(e&&e.id)return a();var t=new Error("Disabled");return{enabled:!1,send:function(e,n){return Promise.reject(t)},receive:function(e){return Promise.reject(t)},clear:function(){return Promise.reject(t)
}}};var m=1262836034,p=1,y=1262836034,b=1;n.format=r,n.parse=o},{"../../../lib/data/io":124,"../../../lib/data/secret":125,"../../../lib/http/request":135,"../../../lib/lang":139,"../result":24,
"../settings":25}],135:[function(e,t,n){"use strict";function a(e,t,n,a){function o(e){return new Promise(function(t,n){c.addEventListener("load",function(e){
c.status>=200&&c.status<300?i(c,t,n):i(c,function(e){n(Object.assign(e,{message:e.statusText}))},function(e){n(e)})}),c.addEventListener("error",function(e){n(r(e.message||"Unreachable"))}),
c.addEventListener("timeout",function(e){n(r("Timeout"))}),c.addEventListener("abort",function(e){n(r("Abort"))}),c.send(e)})}var c=new XMLHttpRequest;if(c.open(e,u.parseUri(t,n),!0),
c.responseType="blob",a)for(var l=0,b=Object.entries(a);l<b.length;l++){var v=b[l],h=v[0],g=v[1];c.setRequestHeader(h,String(g))}var k=[],E={header:function(e,t){
return c.setRequestHeader(e,String(t)),E},accept:function(e,t){void 0===t&&(t=null);var n=s.map({json:m,text:p,binary:y,any:"*/*"});return e in n&&(e=n[e]),null!=t&&(e=e+";q="+t),k.push(e),E},
send:function(){return k.length&&c.setRequestHeader(d,k.join(",")),o(null)},sendForm:function(e){if(k.length&&c.setRequestHeader(d,k.join(",")),!(e instanceof FormData)){
for(var t=new FormData,n=0,a=Object.entries(e);n<a.length;n++){var r=a[n],i=r[0],s=r[1];t.append(i,s)}e=t}return o(e)},sendJson:function(e,t){return void 0===t&&(t=m),c.setRequestHeader(f,t),
k.length&&c.setRequestHeader(d,k.join(",")),o(JSON.stringify(e))},sendText:function(e,t){return void 0===t&&(t=p),c.setRequestHeader(f,t),k.length&&c.setRequestHeader(d,k.join(",")),o(e)},
sendBinary:function(e,t){return void 0===t&&(t=y),c.setRequestHeader(f,t),k.length&&c.setRequestHeader(d,k.join(",")),o(e)},monitor:function(e){
return e.send&&c.upload.addEventListener("progress",e.send),e.receive&&c.addEventListener("progress",e.receive),E}};return E}function r(e){return{status:0,statusText:"Unknown",headers:s.map(),
contentType:l.parseMimeType(y),body:null,isJson:!1,json:null,isText:!1,text:null,isBinary:!1,binary:null,message:e}}function i(e,t,n){function a(e){var a=null,r=null;try{a=JSON.parse(e.result)
}catch(e){r=e}r?n(Object.assign(c,{message:"JSON parse error"})):(c.isJson=!0,c.json=a,t(c))}function r(e){c.isText=!0,c.text=e.result,t(c)}function i(e){c.isBinary=!0,c.binary=e.result,t(c)}
var s=o(e),c={status:s.status,statusText:s.statusText,headers:s.headers,contentType:s.contentType,body:null,isJson:!1,json:null,isText:!1,text:null,isBinary:!1,binary:null}
;if(e.response instanceof Blob){c.body=e.response;var u=new FileReader;u.addEventListener("error",function(e){n(Object.assign(c,{message:e.message}))}),
l.isJson(s.contentType)?(u.addEventListener("load",function(e){a(u)}),u.readAsText(c.body)):l.isText(s.contentType)?(u.addEventListener("load",function(e){r(u)}),
u.readAsText(c.body)):(u.addEventListener("load",function(e){i(u)}),u.readAsArrayBuffer(c.body))}else t(c)}function o(e){var t=e.status,n=e.statusText,a=s.map(),r=null
;e.getAllResponseHeaders().split("\n").forEach(function(e){var t=e.indexOf(":");if(-1!=t){var n=e.substring(0,t).trim().toLowerCase(),r=e.substring(t+1).trim();a[n]=r}});var i=e.getResponseHeader(f)
;return r=i?l.parseMimeType(i):l.parseMimeType(y),{status:t,statusText:n,headers:a,contentType:r}}Object.defineProperty(n,"__esModule",{value:!0})
;var s=e("../lang"),c=e("../runtime/global"),l=e("./mimetype"),u=e("./url"),d="Accept",f="Content-Type",m="application/json",p="text/plain",y="application/octet-stream";n.GET=function(e,t,n){
return a("GET",e,t,n)},n.HEAD=function(e,t,n){return a("HEAD",e,t,n)},n.PUT=function(e,t,n){return a("PUT",e,t,n)},n.PATCH=function(e,t,n){return a("PATCH",e,t,n)},n.POST=function(e,t,n){
return a("POST",e,t,n)},n.DELETE=function(e,t,n){return a("DELETE",e,t,n)},n.loadScript=function(e){return new Promise(function(t,n){var a=c.DOCUMENT.createElement("script")
;a.addEventListener("load",function(e){t(a)}),a.addEventListener("error",function(t){n({message:"Cannot load script from uri "+e})}),a.type="text/javascript",a.async=!1,a.src=e,
c.DOCUMENT.head.appendChild(a)})}},{"../lang":139,"../runtime/global":145,"./mimetype":134,"./url":136}],134:[function(e,t,n){"use strict";function a(e){c.push(e)}function r(e){l.push(e)}
function i(e){u.push(e)}function o(e,t){return-1!=e.indexOf(t.type+"/"+t.subtype)||-1!=e.indexOf(t.type+"/*")}Object.defineProperty(n,"__esModule",{value:!0});var s=e("../lang"),c=[],l=[],u=[]
;n.addJsonType=a,n.addTextType=r,n.addBinaryType=i,n.parseMimeType=function(e){var t,n=null,a=null,r=null,i=s.map();if(-1!=(t=e.indexOf(";"))){var o=e.substring(t+1);e=e.substring(0,t),
o.split(";").forEach(function(e){if(-1!=(t=e.indexOf("="))){var n=e.substring(0,t).trim().toLowerCase(),a=e.substring(t+1).trim();"charset"==n?r=a:i[n]=a}})}
return-1!=(t=e.indexOf("/"))&&(n=e.substring(0,t),a=e.substring(t+1)),{name:n+"/"+a,type:n,subtype:a,charset:r,parameters:i}},n.isJson=function(e){return o(c,e)},n.isText=function(e){return o(l,e)},
n.isBinary=function(e){return o(u,e)},["application/json"].forEach(function(e){a(e)}),
["text/*","image/svg+xml","application/xml","application/atom+xml","application/rss+xml","application/rdf+xml","application/xhtml+xml","application/ecmascript","application/javascript"].forEach(function(e){
r(e)}),["application/octet-stream","image/*","audio/*","video/*"].forEach(function(e){i(e)})},{"../lang":139}],11:[function(e,t,n){"use strict";function a(e,t){function n(n,a){var r=t.open(e,1)
;r.onerror=function(e){e.preventDefault(),n(s.cause(r.error))},r.onblocked=function(e){n(new Error("Database is blocked"))},r.onupgradeneeded=function(t){r.result.createObjectStore(e,{autoIncrement:!0
})},r.onsuccess=function(e){var t=r.result;try{a(t)}finally{t.close()}}}return{persistent:!0,read:function(){return new Promise(function(t,a){n(a,function(n){var r,i=[];try{
r=n.transaction(e).objectStore(e)}catch(e){return void a(e)}var l=r.openCursor();l.onerror=function(e){e.preventDefault(),a(s.cause(l.error))},l.onsuccess=function(e){var n=l.result;if(n){try{
var a=n.value;if("string"==typeof a.l&&"string"==typeof a.m){var r=o(a);c.validateResult(r)&&i.push(r)}}catch(e){}n.continue()}else t(i)}})})},add:function(t){return new Promise(function(a,r){
n(r,function(n){function o(){var e=l.add(i(t[u++]));e.onerror=function(t){t.preventDefault(),r(s.cause(e.error))},e.onsuccess=function(e){u<t.length?o():a(null)}}var c,l;try{
c=n.transaction(e,"readwrite"),l=c.objectStore(e)}catch(e){return void r(e)}var u=0;o()})})},clear:function(){return new Promise(function(n,a){var r=t.deleteDatabase(e);r.onerror=function(e){
e.preventDefault(),a(s.cause(r.error))},r.onblocked=function(e){a(new Error("Database is blocked"))},r.onsuccess=function(e){n(null)}})}}}function r(){var e=[];return{persistent:!0,read:function(){
return Promise.resolve(e.slice())},add:function(t){return e.push.apply(e,t),Promise.resolve(null)},clear:function(){return e.splice(0,e.length),Promise.resolve(null)}}}function i(e){return{
l:e.modeKey.layout.id,m:e.modeKey.modeType.id,ts:e.timeStamp,n:e.length,t:e.time,e:e.errors,c:e.complexity,h:e.histogram}}function o(e){
return c.newResult(l.getModeKeyById(e.l,e.m),e.ts,e.n,e.t,e.e,e.c,e.h)}Object.defineProperty(n,"__esModule",{value:!0});var s=e("../../../lib/promise"),c=e("../result"),l=e("../settings")
;n.openLocalResultStorage=function(e){try{var t=indexedDB;if(t instanceof IDBFactory)return a(e,t)}catch(e){console.error(e)}return r()}},{"../../../lib/promise":144,"../result":24,"../settings":25}],
144:[function(e,t,n){"use strict";function a(e){i(e)}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./lang");n.explain=function(e){return function(t){var n=new Error(e);throw n.cause=t,n}},
n.cause=function(e){return r.isString(e.message)?e:{message:"Unknown"}},n.watcher=function(e){a(e)};var i=function(e){function t(e){return e&&e.message?e.message:String(e)}console.error(e),
alert(function(e){var n=[];for(n.push(t(e));e=e.cause;)n.push("Because: "+t(e));return n}(e).join("\n"))};n.useTrap=function(e){i=e}},{"./lang":139}],24:[function(e,t,n){"use strict";function a(e){
for(var t in e){var n=e[t];if(0!=n.t&&n.t<40)return!1}return!0}Object.defineProperty(n,"__esModule",{value:!0}),n.newResult=function(e,t,n,a,r,i,o){var s=0,c=0
;return a>1&&n>1&&i>1&&(c=(s=n/(a/1e3)*60)*i/(r+1)*(n/50)),{modeKey:e,timeStamp:t,length:n,time:a,errors:r,complexity:i,speed:s,score:c,histogram:o}},n.validateResult=function(e){
return e.time>1&&e.length>1&&e.complexity>1&&e.speed>1&&e.speed<1500&&a(e.histogram)},n.validateHistogram=a,n.transition=function(e,t){return(65535&e)<<16|65535&t},n.transitionFrom=function(e){
return e>>>16&65535},n.transitionTo=function(e){return 65535&e}},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("../../lib/lang"),r=e("./settings")
;n.newDataMap=function(e){for(var t=a.map(),n=0,i=e;n<i.length;n++){var o=i[n],s=String(o.modeKey),c=t[s];null==c&&(c=t[s]=[]),c.push(o)}return{data:function(){return e},keySet:function(){
return Object.keys(t).map(r.parseModeKey)},dataForKey:function(e){var n=String(e),a=t[n];return null==a&&(a=t[n]=[]),a}}}},{"../../lib/lang":139,"./settings":25}],25:[function(e,t,n){"use strict"
;function a(e,t){if(null==e||null==t)throw new Error;var n=e.id+":"+t.id,a=h[n];return null==a&&(a=h[n]=Object.freeze({layout:e,modeType:t,key:n,name:t.name+" / "+e.name,toString:function(){return n}
})),a}function r(e,t){return a(v.byId(b.getLayouts(),e),v.byId(n.MODE_TYPE,t))}function i(e,t){return e.load((n={},n[g]=null,n)).then(function(n){var a=n[g];return null!=a?(c(t,a),t.newSettings=!1,
null):(c(t,{}),t.newSettings=!0,o(e,t))});var n}function o(e,t){return e.store((n={},n[g]=s(t),n));var n}function s(e){return{layout:e.layout.id,emulateLayout:e.emulateLayout,mode:e.mode.id,lesson:{
complexity:e.lesson.complexity,length:e.lesson.length,capitals:e.lesson.capitals,punctuators:e.lesson.punctuators},text:{mangle:{simplify:e.text.mangle.simplify,lowercase:e.text.mangle.lowercase},
url:e.text.url,content:e.text.content},stopOnError:e.stopOnError,speedUnit:e.speedUnit.id,enableSound:e.enableSound}}function c(e,t){y.isObject(t.lesson)||(t.lesson={}),
y.isObject(t.text)||(t.text={}),y.isObject(t.text.mangle)||(t.text.mangle={}),e.layout=v.byId(b.getLayouts(),t.layout,b.getDefaultLayout(b.getLayouts())),e.emulateLayout=l(t.emulateLayout,!1),
e.mode=v.byId(n.MODE,t.mode,n.MODE.GUIDED),e.lesson.complexity=u(t.lesson.complexity,0,0,1),e.lesson.length=u(t.lesson.length,0,0,1),e.lesson.capitals=l(t.lesson.capitals,!1),
e.lesson.punctuators=l(t.lesson.punctuators,!1),e.text.url=d(t.text.url,""),e.text.content=d(t.text.content,""),e.text.mangle.simplify=l(t.text.mangle.simplify,!0),
e.text.mangle.lowercase=l(t.text.mangle.lowercase,!0),e.stopOnError=l(t.stopOnError,!0),e.speedUnit=v.byId(n.SPEED_UNIT,t.speedUnit,n.SPEED_UNIT.WPM),e.enableSound=l(t.enableSound,!1),e.validate()}
function l(e,t){return y.isBoolean(e)?e:t}function u(e,t,n,a){return y.isNumber(e)&&Number.isFinite(e)?(y.isNumber(n)&&e<n&&(e=n),y.isNumber(a)&&e>a&&(e=a),e):t}function d(e,t){
return y.isString(e)?e:t}function f(e){for(var t=e.trim(),n=0,a=0;a<t.length;a++)t.charCodeAt(a)>32&&n++;return n>=10?t:null}function m(e){var t=e.trim();if(""==t)return null;var n=p(t)
;if(null==n&&t.match(k)&&(n=p("http://"+t)),null==n)return null;var a=n.protocol,r=n.username,i=n.password,o=n.hostname;return"http:"!=a&&"https:"!=a?null:r||i?null:o.match(E)?null:String(n)}
function p(e){try{return new URL(e)}catch(e){return null}}Object.defineProperty(n,"__esModule",{value:!0});var y=e("../../lib/lang"),b=e("../keyboard/layout"),v=e("../util/enum")
;n.SPEED_UNIT=Object.freeze(y.map({WPM:Object.freeze({id:"wpm",xid:1,name:"Words per minute",measure:function(e){return e/5}}),CPM:Object.freeze({id:"cpm",xid:2,name:"Characters per minute",
measure:function(e){return e}})})),n.MODE_TYPE=Object.freeze(y.map({AUTO:Object.freeze({id:"auto",xid:1,name:"Computer-generated lessons"}),CUSTOM:Object.freeze({id:"custom",xid:2,
name:"User-provided lessons"})})),n.MODE=Object.freeze(y.map({GUIDED:Object.freeze({id:"guided",xid:1,type:n.MODE_TYPE.AUTO}),IMPORT_WEBSITE:Object.freeze({id:"import_website",xid:2,
type:n.MODE_TYPE.CUSTOM}),IMPORT_TEXT:Object.freeze({id:"import_text",xid:3,type:n.MODE_TYPE.CUSTOM})}));var h=y.map();n.getModeKey=a,n.getModeKeyById=r,n.getModeKeyByXid=function(e,t){
return a(v.byXId(b.getLayouts(),e),v.byXId(n.MODE_TYPE,t))},n.parseModeKey=function(e){var t=e.indexOf(":");if(-1==t)throw new Error;return r(e.substring(0,t),e.substring(t+1))},
n.newSettings=function(e){var t=b.getDefaultLayout(b.getLayouts()),r=!1,s=n.MODE.GUIDED,c=0,l=0,u=!1,d=!1,p={get complexity(){return c},set complexity(e){c=e},get length(){return l},set length(e){l=e
},get capitals(){return u},set capitals(e){u=e},get punctuators(){return d},set punctuators(e){d=e}},y=!0,v=!0,h={get simplify(){return y},set simplify(e){y=e},get lowercase(){return v},
set lowercase(e){v=e}},g="",k="",E={get url(){return g},set url(e){g=m(e)||""},get content(){return k},set content(e){k=f(e)||""},get mangle(){return h}},_=!0,K=n.SPEED_UNIT.WPM,S=!1,N=!0,x={
get modeKey(){return a(t,s.type)},get layout(){return t},set layout(e){t=e},get emulateLayout(){return r},set emulateLayout(e){r=e},get mode(){return s},set mode(e){s=e},get lesson(){return p},
get text(){return E},get stopOnError(){return _},set stopOnError(e){_=e},get speedUnit(){return K},set speedUnit(e){K=e},get enableSound(){return S},set enableSound(e){S=e},get newSettings(){return N
},set newSettings(e){N=e},validate:function(){switch(s){case n.MODE.IMPORT_WEBSITE:g||(s=n.MODE.GUIDED);break;case n.MODE.IMPORT_TEXT:k||(s=n.MODE.GUIDED)}},importUrl:function(e){
return!!(e=m(e))&&(s=n.MODE.IMPORT_WEBSITE,g=e,!0)},importText:function(e){return!!(e=f(e))&&(s=n.MODE.IMPORT_TEXT,k=e,!0)},load:function(){return i(e,x)},store:function(){return o(e,x)}};return x}
;var g="settings";n.loadSettings=i,n.storeSettings=o,n.validateText=f;var k=new RegExp("^\\[?[a-z0-9\\.\\_\\-\\:]+\\]?$"),E=new RegExp("^[\\.\\_\\-]*$");n.validateUrl=m},{"../../lib/lang":139,
"../keyboard/layout":5,"../util/enum":51}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("../../lib/lang");n.ACH_ID=Object.freeze(a.map({
MAX_SPEED:"max-speed",MAX_SCORE:"max-score",SPEED_STREAK:"speed-streak",SCORE_STREAK:"score-streak",ACCURACY_STREAK:"accuracy-streak"})),n.ACH_VALUE=Object.freeze(a.map({SILVER:"silver",
BRONZE:"bronze",GOLD:"gold",RUBY:"ruby"})),n.newAnalyzer=function(){function e(){r=null,i=0,o=0,s=0,c=0,l=0,u=0}function t(e){var t=[]
;return r&&(e.speed>=r.speed?7==++s?t.push(a(n.ACH_ID.SPEED_STREAK,n.ACH_VALUE.GOLD)):5==s?t.push(a(n.ACH_ID.SPEED_STREAK,n.ACH_VALUE.BRONZE)):3==s&&t.push(a(n.ACH_ID.SPEED_STREAK,n.ACH_VALUE.SILVER)):s=0,
e.score>=r.score?7==++c?t.push(a(n.ACH_ID.SCORE_STREAK,n.ACH_VALUE.GOLD)):3==c?t.push(a(n.ACH_ID.SCORE_STREAK,n.ACH_VALUE.BRONZE)):5==c&&t.push(a(n.ACH_ID.SCORE_STREAK,n.ACH_VALUE.SILVER)):c=0),
0==e.errors?17==++l?t.push(a(n.ACH_ID.ACCURACY_STREAK,n.ACH_VALUE.RUBY)):12==l?t.push(a(n.ACH_ID.ACCURACY_STREAK,n.ACH_VALUE.GOLD)):8==l?t.push(a(n.ACH_ID.ACCURACY_STREAK,n.ACH_VALUE.BRONZE)):5==l&&t.push(a(n.ACH_ID.ACCURACY_STREAK,n.ACH_VALUE.SILVER)):l=0,
u>=10&&(e.speed>i&&(i=e.speed,t.push(a(n.ACH_ID.MAX_SPEED,null))),e.score>o&&(o=e.score,t.push(a(n.ACH_ID.MAX_SCORE,null)))),r=e,u++,t.length>0?{modeKey:e.modeKey,timeStamp:e.timeStamp,list:t}:null}
function a(e,t){var a;switch(e){case n.ACH_ID.MAX_SPEED:a="Top speed so far";break;case n.ACH_ID.MAX_SCORE:a="Best score so far";break;case n.ACH_ID.SPEED_STREAK:a="Increasing speed sequence";break
;case n.ACH_ID.SCORE_STREAK:a="Increasing score sequence";break;case n.ACH_ID.ACCURACY_STREAK:a="Sequence without errors";break;default:throw new Error}return{id:e,value:t,description:a,
toString:function(){return t?"["+t+"] "+a:a}}}var r=null,i=0,o=0,s=0,c=0,l=0,u=0;return e(),{reset:e,add:t,analyze:function(e){for(var n=[],a=0,r=e;a<r.length;a++){var i=t(r[a]);null!=i&&n.push(i)}
return n}}}},{"../../lib/lang":139}],8:[function(e,t,n){"use strict";function a(e){
return 32==e||9==e||10==e||13==e||160==e||8192==e||8193==e||8194==e||8195==e||8196==e||8197==e||8198==e||8199==e||8200==e||8201==e||8202==e||8232==e||8233==e}function r(e){
return 10==e||13==e||8232==e||8233==e}Object.defineProperty(n,"__esModule",{value:!0});var i=e("../lib/unicode");n.sanitize=function(e,t,n){e=i.combine(e);for(var o="",s="",c=0;c<e.length;c++){
var l=e.charCodeAt(c);if(r(l))s=""==o?"":"\n";else if(a(l))""==o?s="":"\n"!=s&&(s=" ");else if(l<32)""==o?s="":"\n"!=s&&(s=" ");else{o+=s,s="";var u=String.fromCharCode(l);switch(l){case 8210:
case 8211:case 8212:case 8213:l=45,u="-";break;case 8216:case 8217:case 8218:l=39,u="'";break;case 8220:case 8221:case 8222:case 171:case 187:l=34,u='"';break;case 8230:l=46,u="..."}
null!=n&&-1!=n.indexOf(l)||null!=t&&-1==t.indexOf(l)||(o+=u)}}return o},n.SPLIT=">>>",n.newParser=function(e){function t(){s=0,c=null}function i(t){if(o())return"\n";if(s==e.length)return null
;for(var r=s;s<e.length&&(!t||s-r!=t)&&!a(e.charCodeAt(s));)s++;var i=e.substring(r,s);return i==n.SPLIT&&o(),i}function o(){for(var t=!1;s<e.length;){var n=e.charCodeAt(s);if(!a(n))break
;r(n)&&(t=!0),s++}return t}var s,c;return t(),{reset:t,nextWord:function(e){for(;;){var a=c,r=i(e);if(null==r){if(null==a)return"empty";t(),a!=n.SPLIT&&(c=n.SPLIT)}else{if(null==a&&r==n.SPLIT)continue
;if(null==a&&"\n"==r)continue;if(a==n.SPLIT&&r==n.SPLIT){c=n.SPLIT;continue}if(a==n.SPLIT&&"\n"==r){c=n.SPLIT;continue}if("\n"==a&&r==n.SPLIT){c=n.SPLIT;continue}if("\n"==a&&"\n"==r){c="\n";continue}
c=r}if(null!=a)return a}}}},n.isWs=a,n.isNl=r},{"../lib/unicode":174}],136:[function(e,t,n){"use strict";function a(e){void 0===e&&(e=location.search);var t=o.map()
;if(e.startsWith("?")&&(e=e.substring(1)),e)for(var n=0,a=e.split("&");n<a.length;n++){var i=a[n],s=i.indexOf("=");-1!=s?t[r(i.substring(0,s))]=r(i.substring(s+1)):t[r(i)]=null}return t}function r(e){
return decodeURIComponent(e)}function i(e){return encodeURIComponent(e)}Object.defineProperty(n,"__esModule",{value:!0});var o=e("../lang");n.parseQueryString=a,n.parseUri=function(e,t){
null==t&&(t=o.map());var n=e.indexOf("?");if(-1!=n){var r=e.substring(n+1);e=e.substring(0,n),t=Object.assign(a(r),t)}for(var s=[],c=0,l=Object.keys(t);c<l.length;c++){var u=l[c],d=t[u]
;null!=d?s.push(i(u)+"="+i(String(d))):s.push(i(u))}return s.length&&(e=e+"?"+s.join("&")),e}},{"../lang":139}],228:[function(e,t,n){"use strict";function a(e){var t=e.className,n=e.avatar,a=i(t)
;return n.imageUrl?o.createElement("img",{className:a,src:n.imageUrl}):o.createElement(s.default,{className:a})}Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("tslib"),i=e("classnames"),o=e("react"),s=e("../../res/icon/custom/anonymous"),c={id:null,email:null,userName:"anonymous",fullName:"Anonymous",externalId:{}};n.userAvatar=function(e){
null!=e&&null!=e.id||(e=c);for(var t=0,n=["google","facebook"];t<n.length;t++){var a=n[t],r=e.externalId[a];if(r)return{id:e.id,name:r.fullName||r.userName,imageUrl:r.imageUrl}}return{id:e.id,
name:e.fullName||e.userName,imageUrl:null}},n.PublicAvatar=function(e){var t=e.className,n=e.avatar,s=i("PublicAvatar",t);return o.createElement("span",r.__assign({},{className:s,title:n.name
}),o.createElement(a,{className:"PublicAvatar-image",avatar:n}),o.createElement("span",{className:"PublicAvatar-name"},n.name))},n.Avatar=function(e){var t=e.className,n=e.avatar,s=i("Avatar",t)
;return o.createElement("div",r.__assign({},{className:s,title:n.name}),o.createElement("a",{href:"/account",className:"Avatar-link"},o.createElement(a,{className:"Avatar-image",avatar:n
}),o.createElement("span",{className:"Avatar-name"},n.name)))},n.AvatarImage=a},{"../../res/icon/custom/anonymous":176,classnames:"classnames",react:"react",tslib:"tslib"}],176:[function(e,t,n){
"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("../SvgIcon"),i=e("react");n.default=function(e){return i.createElement(r.SvgIcon,a.__assign({},e,{
viewBox:"0 0 24 24"}),i.createElement("path",{
d:"M14.695 17.105c-0.745 0.575-1.7 0.895-2.695 0.895s-1.95-0.32-2.695-0.895c-0.215-0.17-0.53-0.13-0.7 0.090s-0.13 0.53 0.090 0.7c0.915 0.71 2.090 1.105 3.305 1.105s2.39-0.395 3.305-1.105c0.22-0.17 0.26-0.485 0.090-0.7-0.17-0.22-0.485-0.26-0.7-0.090z"
}),i.createElement("path",{d:"M9.5 12.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"}),i.createElement("path",{
d:"M12 0c-6.625 0-12 5.375-12 12s5.375 12 12 12 12-5.375 12-12-5.375-12-12-12zM19.96 14.82c-1.090 3.74-4.27 6.455-8.040 6.455-3.775 0-6.96-2.725-8.045-6.475-1.19-0.1-2.125-1.18-2.125-2.51 0-1.27 0.855-2.315 1.965-2.495v-0.005c2.090-1.465 3.805-3.49 4.095-5.050l0.005 0.005v-0.015c1.355 2.625 6.3 5.19 11.825 5.060 0.1-0.015 0.195-0.035 0.295-0.035 1.275 0 2.31 1.135 2.31 2.535 0.005 1.39-1.020 2.52-2.285 2.53z"
}),i.createElement("path",{d:"M16.5 12.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"}))}},{"../SvgIcon":175,react:"react",tslib:"tslib"}],175:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),r=e("classnames"),i=e("react"),o=e("prop-types");n.propTypes={children:o.node.isRequired,className:o.any,viewBox:o.string,
onClick:o.func,onMouseDown:o.func,onMouseEnter:o.func,onMouseLeave:o.func,onMouseUp:o.func},n.defaultProps={className:null,viewBox:"0 0 48 48",onClick:function(){},onMouseDown:function(){},
onMouseEnter:function(){},onMouseLeave:function(){},onMouseUp:function(){}};var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),
t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=e.viewBox,o=e.onClick,s=e.onMouseDown,c=e.onMouseEnter,l=e.onMouseLeave,u=e.onMouseUp,d=r("Icon",n)
;return i.createElement("svg",{className:d,viewBox:a,onClick:o,onMouseDown:s,onMouseEnter:c,onMouseLeave:l,onMouseUp:u},t)},t.propTypes=n.propTypes,t.defaultProps=n.defaultProps,t}(i.PureComponent)
;n.SvgIcon=s},{classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],163:[function(e,t,n){"use strict";function a(e){return u.isValidElement(e)?e:u.createElement(r,{name:e})}
function r(e){var t=e.className,n=e.title,a=e.name;return u.createElement("span",{className:l("Name",t),title:n},a+":")}function i(e){return u.isValidElement(e)?e:u.createElement(o,{value:e})}
function o(e){var t=e.className,n=e.title,a=e.value;return u.createElement("span",{className:l("Value",t),title:n},a)}function s(e){var t=e.className,n=e.title,a=e.value,r=e.invert
;return u.createElement("span",{className:l("ValueDelta",a>0&&(r?"ValueDelta--less":"ValueDelta--more"),a<0&&(r?"ValueDelta--more":"ValueDelta--less"),0==a&&"ValueDelta--zero",t),title:n},c(a))}
function c(e){var t=String(e);return e>0?"+"+t:t}Object.defineProperty(n,"__esModule",{value:!0});var l=e("classnames"),u=e("react");n.NameValue=function(e){
var t=e.className,n=e.title,r=e.name,o=e.value;return u.createElement("span",{className:l("NameValue",t),title:n},a(r),i(o))},n.asName=a,n.Name=r,n.asValue=i,n.Value=o,n.asValueDelta=function(e){
return u.isValidElement(e)?e:u.createElement(s,{value:e})},n.ValueDelta=s,n.Indicator=function(e){var t=e.className,n=e.title,a=e.name,r=e.value;return u.createElement("div",{
className:l("Indicator",t),title:n},u.createElement("span",{className:"Indicator-name"},String(a)+":"),u.createElement("span",{className:"Indicator-value"},String(r)))}},{classnames:"classnames",
react:"react"}],142:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){return Math.round(e*t)/t}},{}],125:[function(e,t,n){"use strict"
;function a(e,t){for(var n=i(e),a=4;a<t.length;a++)t[a]=t[a]^n()}function r(){return Math.floor(4294967296*l.random())}function i(e){var t=c(e,2147483629)+12820163>>>0;return function(){
return t=c(t,1664525)+1013904223>>>0}}function o(e,t){return(e[t+0]<<24>>>0|e[t+1]<<16>>>0|e[t+2]<<8>>>0|e[t+3]<<0>>>0)>>>0}function s(e,t,n){e[t+0]=n>>>24,e[t+1]=n>>>16,e[t+2]=n>>>8,e[t+3]=n>>>0}
function c(e,t){e>>>=0,t>>>=0;for(var n=0,a=0;a<32;a++)1==(t>>>a&1)&&(n+=e<<a);return n>>>0}Object.defineProperty(n,"__esModule",{value:!0});var l=e("../math/random"),u=e("./crc32")
;n.encode=function(e){var t=r(),n=new Uint8Array(e.length+8);return s(n,0,t),s(n,4,u.crc32(e)),n.set(e,8),a(t,n),n},n.decode=function(e){if(e.length<8)throw new Error;a(o(e,0),e)
;var t=o(e,4),n=e.slice(8);if(u.crc32(n)!=t)throw new Error;return n}},{"../math/random":141,"./crc32":123}],141:[function(e,t,n){"use strict";function a(){return Math.random()}function r(e,t){
var n=Math.sqrt(3*t),r=2*n;return e+(a()*r-n+(a()*r-n)+(a()*r-n)+(a()*r-n)+(a()*r-n))/5*2.23606797749979}Object.defineProperty(n,"__esModule",{value:!0}),n.random=a,n.normal=function(e,t,n){
if(!(Number.isFinite(n)&&n>0))return r(e,t);for(;;){var a=r(e,t);if(Math.abs(a-e)<n)return a}},n.pick=function(e){if(0==e.length)throw new Error;return e[Math.floor(a()*e.length)]},
n.pickWeighted=function(e,t){if(0==e.length)throw new Error;for(var n=0,r=0,i=e;r<i.length;r++)n+=t(l=i[r]);for(var o=a()*n,s=0,c=e;s<c.length;s++){var l=c[s],u=t(l);if(o<=u)return l;o-=u}
throw new Error}},{}],124:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("./crc32"),r=e("./utf8"),i=function(){function e(e){void 0===e&&(e=64),
this.dataView=new DataView(new ArrayBuffer(Math.max(e,64))),this.byteOffset=0}return e.prototype.ensureSize=function(e){if(this.dataView.byteLength<e){for(var t=64;t<e;)t*=t;var n=new ArrayBuffer(t)
;new Uint8Array(n).set(new Uint8Array(this.dataView.buffer)),this.dataView=new DataView(n)}},e.prototype.ensureAvailable=function(e){this.ensureSize(this.byteOffset+e)},
e.prototype.putString=function(e){var t=r.size(e);return this.putUint16(t),this.ensureAvailable(t),r.encode(e,this.dataView,this.byteOffset),this.byteOffset+=t,this},e.prototype.putInt8=function(e){
return this.ensureAvailable(1),this.dataView.setInt8(this.byteOffset,e),this.byteOffset+=1,this},e.prototype.putUint8=function(e){return this.ensureAvailable(1),
this.dataView.setUint8(this.byteOffset,e),this.byteOffset+=1,this},e.prototype.putInt16=function(e){return this.ensureAvailable(2),this.dataView.setInt16(this.byteOffset,e,!1),this.byteOffset+=2,this
},e.prototype.putUint16=function(e){return this.ensureAvailable(2),this.dataView.setUint16(this.byteOffset,e,!1),this.byteOffset+=2,this},e.prototype.putInt32=function(e){
return this.ensureAvailable(4),this.dataView.setInt32(this.byteOffset,e,!1),this.byteOffset+=4,this},e.prototype.putUint32=function(e){return this.ensureAvailable(4),
this.dataView.setUint32(this.byteOffset,e,!1),this.byteOffset+=4,this},e.prototype.putFloat32=function(e){return this.ensureAvailable(4),this.dataView.setFloat32(this.byteOffset,e,!1),
this.byteOffset+=4,this},e.prototype.putFloat64=function(e){return this.ensureAvailable(8),this.dataView.setFloat64(this.byteOffset,e,!1),this.byteOffset+=8,this},e.prototype.crc32=function(){
return a.crc32(new Uint8Array(this.dataView.buffer,0,this.byteOffset))},e.prototype.buffer=function(){return this.dataView.buffer.slice(0,this.byteOffset)},e}();n.Writer=i;var o=function(){
function e(e){if(this.byteOffset=0,e instanceof ArrayBuffer)this.dataView=new DataView(e);else{if(!(e instanceof DataView))throw new TypeError;this.dataView=e}}
return e.prototype.ensureAvailable=function(e){if(this.byteOffset+e>this.dataView.byteLength)throw new Error},e.prototype.getString=function(){var e=this.getUint16();this.ensureAvailable(e)
;var t=r.decode(this.dataView,this.byteOffset,e);return this.byteOffset+=e,t},e.prototype.getInt8=function(){this.ensureAvailable(1);var e=this.dataView.getInt8(this.byteOffset)
;return this.byteOffset+=1,e},e.prototype.getUint8=function(){this.ensureAvailable(1);var e=this.dataView.getUint8(this.byteOffset);return this.byteOffset+=1,e},e.prototype.getInt16=function(){
this.ensureAvailable(2);var e=this.dataView.getInt16(this.byteOffset,!1);return this.byteOffset+=2,e},e.prototype.getUint16=function(){this.ensureAvailable(2)
;var e=this.dataView.getUint16(this.byteOffset,!1);return this.byteOffset+=2,e},e.prototype.getInt32=function(){this.ensureAvailable(4);var e=this.dataView.getInt32(this.byteOffset,!1)
;return this.byteOffset+=4,e},e.prototype.getUint32=function(){this.ensureAvailable(4);var e=this.dataView.getUint32(this.byteOffset,!1);return this.byteOffset+=4,e},e.prototype.getFloat32=function(){
this.ensureAvailable(4);var e=this.dataView.getFloat32(this.byteOffset,!1);return this.byteOffset+=4,e},e.prototype.getFloat64=function(){this.ensureAvailable(8)
;var e=this.dataView.getFloat64(this.byteOffset,!1);return this.byteOffset+=8,e},e.prototype.remaining=function(){return this.dataView.byteLength-this.byteOffset},e}();n.Reader=o},{"./crc32":123,
"./utf8":126}],126:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.size=function(e){for(var t=0,n=0;n<e.length;n++){var a=e.charCodeAt(n);t+=a<128?1:a<2048?2:3}
return t},n.encode=function(e,t,n){for(var a=0;a<e.length;a++){var r=e.charCodeAt(a);r<128?t.setUint8(n++,127&r|0):r<2048?(t.setUint8(n++,r>>6&31|192),
t.setUint8(n++,r>>0&63|128)):(t.setUint8(n++,r>>12&15|224),t.setUint8(n++,r>>6&63|128),t.setUint8(n++,r>>0&63|128))}return n},n.decode=function(e,t,n){function a(){
throw new Error("Truncated UTF-8 stream")}for(var r,i,o,s="",c=t+n;t<c;)(r=e.getUint8(t++))<128?s+=String.fromCharCode(r):r<224?(t+1>c&&a(),i=e.getUint8(t++),
s+=String.fromCharCode((31&r)<<6|(63&i)<<0)):(t+2>c&&a(),i=e.getUint8(t++),o=e.getUint8(t++),s+=String.fromCharCode((15&r)<<12|(63&i)<<6|(63&o)<<0));return s}},{}],123:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=function(){for(var e=[],t=0;t<256;t++){for(var n=t,a=0;a<8;a++)n=1&n?3988292384^n>>>1:n>>>1;e[t]=n}return e}();n.crc32=function(e){
for(var t=4294967295,n=0;n<e.length;n++)t=t>>>8^a[255&(t^e[n])];return(4294967295^t)>>>0}},{}],49:[function(e,t,n){"use strict";function a(e){
for(var t=e.text,n=e.position,a=e.errorPositions,i=e.garbage,s=[],c=0;c<t.length;c++)i&&c==n&&s.push(d.createElement(K,{key:"garbage",garbage:i})),o(s,t,c,!0,r(c,n,a));return d.createElement("div",{
key:t,className:m},s)}function r(e,t,n){var a=[];return-1!=n.indexOf(e)&&a.push(b),e<t&&a.push(v),e==t&&a.push(h),a}function i(e,t){e.classList.remove(b),e.classList.remove(v),e.classList.remove(h)
;for(var n=0,a=t;n<a.length;n++){var r=a[n];e.classList.add(r)}}function o(e,t,n,a,r){var i=t.charCodeAt(n),o=String(n);switch(i){case 9:s=l(p,y,r),e.push(d.createElement("span",{ref:o,key:n,
className:s},"↹"),d.createElement("wbr",{key:-n}));break;case 10:s=l(p,y,r),e.push(d.createElement("span",{ref:o,key:n,className:s},"↵"),a?d.createElement("br",{key:-n}):d.createElement("wbr",{key:-n
}));break;case 32:s=l(p,y,r),e.push(d.createElement("span",{ref:o,key:n,className:s},"␣"),d.createElement("wbr",{key:-n}));break;default:var s=l(p,r);e.push(d.createElement("span",{ref:o,key:n,
className:s},String.fromCharCode(i)))}}function s(e){return e?"TextInput--size"+e:null}Object.defineProperty(n,"__esModule",{value:!0})
;var c=e("tslib"),l=e("classnames"),u=e("prop-types"),d=e("react"),f=e("../../util/systeminput"),m="TextInput-fragment",p="TextInput-item",y="TextInput-item--special",b="TextInput-item--error",v="TextInput-item--ready",h="TextInput-item--cursor",g=f.newCursor("TextInput--blink"),k=function(e){
function t(){return null!==e&&e.apply(this,arguments)||this}return c.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.fragment,n=e.size,r=l("TextExample",s(n))
;return d.createElement("div",{className:r},a(t))},t.propTypes={fragment:u.shape({text:u.string.isRequired,position:u.number.isRequired,errorPositions:u.array.isRequired,garbage:u.string.isRequired
}).isRequired,size:u.oneOf(["X0","X1","X2","X3"])},t.defaultProps={fragment:null,size:"X0"},t}(d.Component);n.TextExample=k;var E=function(e){function t(t){var n=e.call(this,t)||this
;n.systemInput=null;var a=t.fragment,r=a.text,i=a.position,o=a.errorPositions,s=a.garbage;return n.state={focus:!1,text:r,position:i,errorPositions:o,garbage:s},n.clickHandler=n.clickHandler.bind(n),
n.systemInputFocusHandler=n.systemInputFocusHandler.bind(n),n.systemInputBlurHandler=n.systemInputBlurHandler.bind(n),n}return c.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){
var t=e.fragment,n=t.text,a=t.position,r=t.errorPositions,i=t.garbage;this.setState(Object.assign({},this.state,{text:n,position:a,errorPositions:r,garbage:i}))},t.prototype.update=function(e){
var t=e.text,n=e.position,a=e.errorPositions,r=e.garbage;this.setState(Object.assign({},this.state,{text:t,position:n,errorPositions:a,garbage:r}))},t.prototype.isFocused=function(){
return!!this.systemInput&&this.systemInput.isFocused()},t.prototype.focus=function(){this.systemInput&&this.systemInput.focus()},t.prototype.blur=function(){this.systemInput&&this.systemInput.blur()},
t.prototype.render=function(){var e=this,t=this,n=t.props.size,a=t.state,r=a.focus,i=a.text,o=a.position,c=a.errorPositions,u=a.garbage,m=l("TextInput",s(n),!r&&"TextInput--inactive")
;return i?d.createElement("div",{className:m,onClick:this.clickHandler,onMouseDown:this.clickHandler,onMouseUp:this.clickHandler},d.createElement(f.SystemInput,{ref:function(t){e.systemInput=t},
onFocus:this.systemInputFocusHandler,onBlur:this.systemInputBlurHandler}),d.createElement(_,{focus:r,text:i,position:o,errorPositions:c,garbage:u}),!r&&d.createElement("div",{
className:"TextInput-label"},"Click to activate...")):d.createElement("div",{className:m})},t.prototype.clickHandler=function(e){e.preventDefault(),this.focus()},
t.prototype.systemInputFocusHandler=function(e){var t=this;this.setState(Object.assign({},this.state,{focus:this.systemInput.isFocused()}),function(){var e=t.props.onFocus;e&&e()})},
t.prototype.systemInputBlurHandler=function(e){var t=this;this.setState(Object.assign({},this.state,{focus:this.systemInput.isFocused()}),function(){var e=t.props.onBlur;e&&e()})},t.propTypes={
fragment:u.shape({text:u.string.isRequired,position:u.number.isRequired,errorPositions:u.array.isRequired,garbage:u.string.isRequired}).isRequired,size:u.oneOf(["X0","X1","X2","X3"])},t.defaultProps={
fragment:null,size:"X0"},t}(d.Component);n.TextInput=E;var _=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c.__extends(t,e),
t.prototype.shouldComponentUpdate=function(e,t){var n=e.focus,a=e.text,o=e.position,s=e.errorPositions,c=e.garbage;if(this.props.focus!=n)return!0;if(this.props.text!=a)return!0
;if(this.props.garbage!=c)return!0;n&&o!=this.props.position&&g.reset();for(var l=0;l<a.length;l++)i(this.refs[l],r(l,o,s));return!1},t.prototype.render=function(){
var e=this.props,t=e.focus,n=e.text,r=e.position,i=e.errorPositions,o=e.garbage;return t?f.withCursor(g,a({text:n,position:r,errorPositions:i,garbage:o})):a({text:n,position:r,errorPositions:i,
garbage:o})},t}(d.Component),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c.__extends(t,e),t.prototype.render=function(){
for(var e=this.props.garbage,t=[],n=0;n<e.length;n++)o(t,e,n,!1,"TextInput-item--garbage");return d.createElement("span",{className:"TextInput-garbage"},t)},t}(d.PureComponent)},{
"../../util/systeminput":55,classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],55:[function(e,t,n){"use strict";function a(e){function t(e){var t=o.normalize(e)
;t.ctrlKey||t.altKey||t.metaKey||"Tab"!=t.key||e.preventDefault(),a()}function n(e){a()}function a(){e.value=""}e.addEventListener("keydown",t,!0),e.addEventListener("keypress",t,!0),
e.addEventListener("keyup",t,!0),e.addEventListener("input",function(e){a()},!0),e.addEventListener("cut",n,!0),e.addEventListener("copy",n,!0),e.addEventListener("paste",n,!0),
e.addEventListener("compositionstart",function(e){},!0),e.addEventListener("compositionupdate",function(e){},!0),e.addEventListener("compositionend",function(e){},!0)}
Object.defineProperty(n,"__esModule",{value:!0});var r=e("tslib"),i=e("react"),o=e("../../lib/keyboard"),s=e("../../lib/runtime/global"),c=e("../../lib/runtime/timer"),l={position:"absolute",
top:"0px",left:"0px",width:"0em",height:"1em",overflow:"hidden"},u={display:"block",margin:"0px",padding:"0px",width:"1em",height:"1em",fontSize:"1em",lineHeight:"1em",border:"none",outline:"none"
},d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.componentDidMount=function(){a(this.element)},t.prototype.isFocused=function(){
return null!=this.element&&s.DOCUMENT.activeElement==this.element},t.prototype.focus=function(){null!=this.element&&s.DOCUMENT.activeElement!=this.element&&this.element.focus()},
t.prototype.blur=function(){null!=this.element&&s.DOCUMENT.activeElement==this.element&&this.element.blur()},t.prototype.render=function(){var e=this,t=this.props,n=t.onFocus,a=t.onBlur
;return i.createElement("div",{style:l},i.createElement("input",{ref:function(t){e.element=t},type:"text",style:u,onFocus:n,onBlur:a}))},t}(i.PureComponent);n.SystemInput=d,n.intercept=a,
n.newCursor=function(e){function t(){i&&(r&&r.cancel(),r=c.systemTimer.setInterval(a,300),i.classList.add(e))}function n(){r&&(r.cancel(),r=null),i&&(i.classList.remove(e),i=null)}function a(){
i&&i.classList.toggle(e)}var r=null,i=null;return{enable:function(e){n(),i=e,t()},reset:t,disable:function(){n()}}},n.withCursor=function(e,t){return i.cloneElement(t,{ref:function(t){
t?e.enable(t):e.disable()}})}},{"../../lib/keyboard":138,"../../lib/runtime/global":145,"../../lib/runtime/timer":156,react:"react",tslib:"tslib"}],156:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("./global");n.systemTimer={setTimeout:function(e,t){var n=a.WINDOW.setTimeout(e,t);return{get callback(){return e},cancel:function(){
a.WINDOW.clearTimeout(n)}}},setInterval:function(e,t){var n=a.WINDOW.setInterval(e,t);return{get callback(){return e},cancel:function(){a.WINDOW.clearInterval(n)}}}}},{"./global":145}],
3:[function(e,t,n){"use strict";function a(e){return{onKeyDown:function(t){e.onKeyDown(t),t.ctrlKey||t.altKey||t.metaKey||t.charCode>0&&t.charCode<=32&&e.onInput(t.charCode)},onKeyPress:function(t){
t.ctrlKey||t.altKey||t.metaKey||t.charCode>32&&e.onInput(t.charCode)},onKeyUp:function(t){e.onKeyUp(t)}}}function r(e,t){function n(t){if(t.code&&t.key)return t;var n={native:t.native,type:t.type,
timeStamp:t.timeStamp,vk:t.vk,code:t.code,key:t.key,charCode:t.charCode,shiftKey:t.shiftKey,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey},a=e.keysByVk[t.vk];if(null!=a){
var r=l.layoutKeyCharCode(a,n.shiftKey,n.altKey);n.code=a.id,n.key=String.fromCharCode(r)}return Object.freeze(n)}return{onKeyDown:function(e){t.onKeyDown(n(e))},onKeyPress:function(e){t.onKeyPress(e)
},onKeyUp:function(e){t.onKeyUp(n(e))}}}function i(e,t){function n(t){var n={native:t.native,type:t.type,timeStamp:t.timeStamp,vk:t.vk,code:t.code,key:t.key,charCode:t.charCode,shiftKey:t.shiftKey,
altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey};if(t.code&&t.key){var a=e.keysById[t.code];if(null!=a){var r=l.layoutKeyCharCode(a,n.shiftKey,n.altKey);n.code=a.id,n.key=String.fromCharCode(r),
n.charCode=r}}return Object.freeze(n)}return{onKeyDown:function(e){var a=n(e);t.onKeyDown(a),t.onKeyPress(a)},onKeyPress:function(e){},onKeyUp:function(e){var a=n(e);t.onKeyUp(a)}}}function o(e){
return!("isTrusted"in e)||e.isTrusted}Object.defineProperty(n,"__esModule",{value:!0});var s=e("../../lib/keyboard"),c=e("../../lib/runtime/global"),l=e("./layout"),u=null
;c.WINDOW.addEventListener("keydown",function(e){null!=u&&o(e)&&u.onKeyDown(s.normalize(e))},!0),c.WINDOW.addEventListener("keypress",function(e){null!=u&&o(e)&&u.onKeyPress(s.normalize(e))},!0),
c.WINDOW.addEventListener("keyup",function(e){null!=u&&o(e)&&u.onKeyUp(s.normalize(e))},!0),n.translate=function(e){u=e},n.newTranslator=function(e,t,n){var o=a(n)
;return t&&e.variantOf?r(e.variantOf,i(e,o)):r(e,o)},n.newSimpleTranslator=a},{"../../lib/keyboard":138,"../../lib/runtime/global":145,"./layout":5}],138:[function(e,t,n){"use strict";function a(e,t){
return e+"/"+t}Object.defineProperty(n,"__esModule",{value:!0});var r,i=e("./lang");!function(e){e[e.Backquote=0]="Backquote",e[e.Backslash=1]="Backslash",e[e.Backspace=2]="Backspace",
e[e.BracketLeft=3]="BracketLeft",e[e.BracketRight=4]="BracketRight",e[e.Comma=5]="Comma",e[e.Digit0=6]="Digit0",e[e.Digit1=7]="Digit1",e[e.Digit2=8]="Digit2",e[e.Digit3=9]="Digit3",
e[e.Digit4=10]="Digit4",e[e.Digit5=11]="Digit5",e[e.Digit6=12]="Digit6",e[e.Digit7=13]="Digit7",e[e.Digit8=14]="Digit8",e[e.Digit9=15]="Digit9",e[e.Equal=16]="Equal",
e[e.IntlBackslash=17]="IntlBackslash",e[e.IntlHash=18]="IntlHash",e[e.IntlRo=19]="IntlRo",e[e.IntlYen=20]="IntlYen",e[e.KeyA=21]="KeyA",e[e.KeyB=22]="KeyB",e[e.KeyC=23]="KeyC",e[e.KeyD=24]="KeyD",
e[e.KeyE=25]="KeyE",e[e.KeyF=26]="KeyF",e[e.KeyG=27]="KeyG",e[e.KeyH=28]="KeyH",e[e.KeyI=29]="KeyI",e[e.KeyJ=30]="KeyJ",e[e.KeyK=31]="KeyK",e[e.KeyL=32]="KeyL",e[e.KeyM=33]="KeyM",e[e.KeyN=34]="KeyN",
e[e.KeyO=35]="KeyO",e[e.KeyP=36]="KeyP",e[e.KeyQ=37]="KeyQ",e[e.KeyR=38]="KeyR",e[e.KeyS=39]="KeyS",e[e.KeyT=40]="KeyT",e[e.KeyU=41]="KeyU",e[e.KeyV=42]="KeyV",e[e.KeyW=43]="KeyW",e[e.KeyX=44]="KeyX",
e[e.KeyY=45]="KeyY",e[e.KeyZ=46]="KeyZ",e[e.Minus=47]="Minus",e[e.Period=48]="Period",e[e.Quote=49]="Quote",e[e.Semicolon=50]="Semicolon",e[e.Slash=51]="Slash",e[e.AltLeft=52]="AltLeft",
e[e.AltRight=53]="AltRight",e[e.CapsLock=54]="CapsLock",e[e.ContextMenu=55]="ContextMenu",e[e.ControlLeft=56]="ControlLeft",e[e.ControlRight=57]="ControlRight",e[e.Enter=58]="Enter",
e[e.OSLeft=59]="OSLeft",e[e.OSRight=60]="OSRight",e[e.ShiftLeft=61]="ShiftLeft",e[e.ShiftRight=62]="ShiftRight",e[e.Space=63]="Space",e[e.Tab=64]="Tab",e[e.Delete=65]="Delete",e[e.End=66]="End",
e[e.Home=67]="Home",e[e.Insert=68]="Insert",e[e.PageDown=69]="PageDown",e[e.PageUp=70]="PageUp",e[e.ArrowDown=71]="ArrowDown",e[e.ArrowLeft=72]="ArrowLeft",e[e.ArrowRight=73]="ArrowRight",
e[e.ArrowUp=74]="ArrowUp",e[e.NumLock=75]="NumLock",e[e.Numpad0=76]="Numpad0",e[e.Numpad1=77]="Numpad1",e[e.Numpad2=78]="Numpad2",e[e.Numpad3=79]="Numpad3",e[e.Numpad4=80]="Numpad4",
e[e.Numpad5=81]="Numpad5",e[e.Numpad6=82]="Numpad6",e[e.Numpad7=83]="Numpad7",e[e.Numpad8=84]="Numpad8",e[e.Numpad9=85]="Numpad9",e[e.NumpadAdd=86]="NumpadAdd",e[e.NumpadClear=87]="NumpadClear",
e[e.NumpadComma=88]="NumpadComma",e[e.NumpadDecimal=89]="NumpadDecimal",e[e.NumpadDivide=90]="NumpadDivide",e[e.NumpadEnter=91]="NumpadEnter",e[e.NumpadMultiply=92]="NumpadMultiply",
e[e.NumpadSubtract=93]="NumpadSubtract",e[e.Escape=94]="Escape",e[e.F1=95]="F1",e[e.F2=96]="F2",e[e.F3=97]="F3",e[e.F4=98]="F4",e[e.F5=99]="F5",e[e.F6=100]="F6",e[e.F7=101]="F7",e[e.F8=102]="F8",
e[e.F9=103]="F9",e[e.F10=104]="F10",e[e.F11=105]="F11",e[e.F12=106]="F12",e[e.PrintScreen=107]="PrintScreen",e[e.ScrollLock=108]="ScrollLock",e[e.Pause=109]="Pause"}(r=n.Code||(n.Code={}))
;var o=KeyboardEvent.DOM_KEY_LOCATION_STANDARD,s=KeyboardEvent.DOM_KEY_LOCATION_LEFT,c=KeyboardEvent.DOM_KEY_LOCATION_RIGHT,l=KeyboardEvent.DOM_KEY_LOCATION_NUMPAD,u=function(){function e(e,t,n,a){
if(void 0===a&&(a=n),!(n in r))throw new Error;return Object.freeze({vk:e,location:t,code:n,key:a})}
for(var t=i.map(),n=0,u=[e(8,o,"Backspace"),e(18,s,"AltLeft","Alt"),e(18,c,"AltRight","Alt"),e(225,c,"AltRight","Alt"),e(20,o,"CapsLock"),e(93,o,"ContextMenu"),e(17,s,"ControlLeft","Control"),e(17,c,"ControlRight","Control"),e(13,o,"Enter"),e(91,s,"OSLeft","OS"),e(91,c,"OSRight","OS"),e(16,s,"ShiftLeft","Shift"),e(16,c,"ShiftRight","Shift"),e(32,o,"Space"," "),e(9,o,"Tab"),e(46,o,"Delete"),e(35,o,"End"),e(36,o,"Home"),e(45,o,"Insert"),e(34,o,"PageDown"),e(33,o,"PageUp"),e(40,o,"ArrowDown"),e(37,o,"ArrowLeft"),e(39,o,"ArrowRight"),e(38,o,"ArrowUp"),e(144,o,"NumLock"),e(96,l,"Numpad0"),e(45,l,"Numpad0"),e(97,l,"Numpad1"),e(35,l,"Numpad1"),e(98,l,"Numpad2"),e(40,l,"Numpad2"),e(99,l,"Numpad3"),e(34,l,"Numpad3"),e(100,l,"Numpad4"),e(37,l,"Numpad4"),e(101,l,"Numpad5"),e(12,l,"Numpad5"),e(102,l,"Numpad6"),e(39,l,"Numpad6"),e(103,l,"Numpad7"),e(36,l,"Numpad7"),e(104,l,"Numpad8"),e(38,l,"Numpad8"),e(105,l,"Numpad9"),e(33,l,"Numpad9"),e(110,l,"NumpadDecimal"),e(46,l,"NumpadDecimal"),e(111,l,"NumpadDivide"),e(106,l,"NumpadMultiply"),e(109,l,"NumpadSubtract"),e(107,l,"NumpadAdd"),e(13,l,"NumpadEnter"),e(188,l,"NumpadComma"),e(27,o,"Escape"),e(112,o,"F1"),e(113,o,"F2"),e(114,o,"F3"),e(115,o,"F4"),e(116,o,"F5"),e(117,o,"F6"),e(118,o,"F7"),e(119,o,"F8"),e(120,o,"F9"),e(121,o,"F10"),e(122,o,"F11"),e(123,o,"F12"),e(44,o,"PrintScreen"),e(145,o,"ScrollLock"),e(19,o,"Pause")];n<u.length;n++){
var d=u[n];t[a(d.vk,d.location)]=d}return Object.freeze(t)}();n.normalize=function(e){var t=e.keyCode,n="",r="",i=e.charCode;switch(e.keyCode){case 59:t=186;break;case 61:t=187;break;case 173:t=189
;break;case 225:t=18,n="AltRight",r="AltGraph",i=0}if(""==n||""==r)if("code"in e&&"key"in e)n=e.code,r=e.key;else{var o=u[a(t,e.location)];null!=o&&(n=o.code,r=o.key)}switch(r){case"Backspace":i=8
;break;case"Tab":i=9;break;case"Enter":i=10;break;case"Space":case" ":i=32}return Object.freeze({native:e,type:e.type,timeStamp:e.timeStamp,vk:t,code:n,key:r,charCode:i,shiftKey:e.shiftKey,
altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}},{"./lang":139}],5:[function(e,t,n){"use strict";function a(e,t,n,a,c,u,d){function f(e,t,n,a){
e>0&&!l.isCombiningDiacritic(e)&&p(i(e,t,n,a,null,null,null))}function m(e,t,n,a){if(e>0&&l.isCombiningDiacritic(e))for(var r=0,o=Object.values(h);r<o.length;r++){var s=o[r];if(null==s.deadKey){
var c=l.combineDiacritic(s.charCode,e);null!=c&&p(i(c.combined,s.key,s.shift,s.alt,t,n,a))}}}function p(e){var t=h[e.charCode];null!=t?o(t)>o(e)&&(h[e.charCode]=e):h[e.charCode]=e}
for(var y=[],b=s.map(),v=s.map(),h=s.map(),g=0,k=Object.entries(c);g<k.length;g++){var E=k[g],_=E[0],K=E[1],S=u[_];if(null!=S){var N=r(_,K.vk,0|K.a,0|K.b,0|K.c,0|K.d,S.x,S.y,S.shape,S.zone||null)
;y.push(N),b[N.id]=N,v[N.vk]=N}}return y.forEach(function(e){f(e.a,e,!1,!1),f(e.b,e,!0,!1),f(e.c,e,!1,!0),f(e.d,e,!0,!0)}),y.forEach(function(e){m(e.a,e,!1,!1),m(e.b,e,!0,!1),m(e.c,e,!1,!0),
m(e.d,e,!0,!0)}),Object.freeze({id:e,xid:t,name:n,language:a,keyMap:c,geometryMap:u,variantOf:d,keys:y,keysById:b,keysByVk:v,combos:h})}function r(e,t,n,a,r,i,o,s,c,l){return Object.freeze({id:e,vk:t,
a:n,b:a,c:r,d:i,x:o,y:s,shape:c,zone:l})}function i(e,t,n,a,r,i,o){return Object.freeze({charCode:e,key:t,shift:n,alt:a,deadKey:r,deadShift:i,deadAlt:o})}function o(e){var t=1;return e.shift&&t++,
e.alt&&t++,e.deadKey&&(t++,e.deadShift&&t++,e.deadAlt&&t++),t}Object.defineProperty(n,"__esModule",{value:!0})
;var s=e("../../lib/lang"),c=e("../../lib/runtime/platform"),l=e("../../lib/unicode"),u=e("../util/enum"),d=e("../../data/layout"),f=e("./language"),m=function(e,t){
for(var n=s.map(),r=0,i=e;r<i.length;r++){var o=i[r];if(t.match(o.platform)){var c=u.byId(f.LANGUAGE,o.language),l=u.byId(n,o.variantOf,null),d=a(o.id,o.xid,o.name,c,o.keySet,o.geometry,l)
;if(null!=n[d.id])throw new Error;n[d.id]=d}}return Object.freeze(n)}(d.LAYOUT_LIST,c.newPlatform());n.getLayouts=function(){return m},n.getDefaultLayout=function(e){for(var t in e)return e[t]
;throw new Error},n.newLayout=a,n.layoutCharCodes=function(e,t){
for(var n=t.enableDeadKeys,a=void 0===n||n,r=t.enableShift,i=void 0===r||r,o=t.enableAlt,s=void 0===o||o,c=[],l=0,u=Object.values(e.combos);l<u.length;l++){var d=u[l]
;d.deadKey&&!a||d.shift&&!i||d.alt&&!s||c.push(d.charCode)}return c.sort()},n.layoutKeyCharCode=function(e,t,n){return n?t?e.d||e.c:e.c:t?e.b||e.a:e.a},n.keyComboComplexity=o},{"../../data/layout":62,
"../../lib/lang":139,"../../lib/runtime/platform":146,"../../lib/unicode":174,"../util/enum":51,"./language":4}],174:[function(e,t,n){"use strict";function a(e){return null!=c[e]}function r(e,t){
var n=u[t];return n?n[e]||null:null}function i(e,t,n,a){if(n.length!=a.length)throw new Error;s[e]=c[t]=Object.freeze({diacritic:e,combiningDiacritic:t});for(var r=u[t]=o.map(),i=0;i<n.length;i++){
var d=n.charCodeAt(i),f=a.charCodeAt(i);l[f]=r[d]=Object.freeze({uncombined:d,combined:f,diacritic:e,combiningDiacritic:t})}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./lang")
;n.DIACRITIC_ACUTE=180,n.COMBINING_DIACRITIC_ACUTE=769,n.DIACRITIC_DOUBLE_ACUTE=733,n.COMBINING_DIACRITIC_DOUBLE_ACUTE=779,n.DIACRITIC_BREVE=728,n.COMBINING_DIACRITIC_BREVE=774,n.DIACRITIC_CARON=711,
n.COMBINING_DIACRITIC_CARON=780,n.DIACRITIC_CEDILLA=184,n.COMBINING_DIACRITIC_CEDILLA=807,n.DIACRITIC_CIRCUMFLEX=710,n.COMBINING_DIACRITIC_CIRCUMFLEX=770,n.DIACRITIC_DIAERESIS=168,
n.COMBINING_DIACRITIC_DIAERESIS=776,n.DIACRITIC_GRAVE=96,n.COMBINING_DIACRITIC_GRAVE=768,n.DIACRITIC_TILDE=126,n.COMBINING_DIACRITIC_TILDE=771;var s=o.map(),c=o.map(),l=o.map(),u=o.map()
;n.isCombiningDiacritic=a,n.getDiacritic=function(e){var t;return null!=(t=s[e])?t:null!=(t=c[e])?t:null},n.combineDiacritic=r,n.uncombineDiacritic=function(e){return l[e]||null},
n.combine=function(e){for(var t="",n=0,i=0;i<e.length;i++){var o=e.charCodeAt(i);if(a(o)){if(n>0){var s=r(n,o);null!=s&&(n=s.combined)}}else n>0&&(t+=String.fromCharCode(n)),n=o}
return n>0&&(t+=String.fromCharCode(n)),t},i(n.DIACRITIC_ACUTE,n.COMBINING_DIACRITIC_ACUTE,"AaCcEeGgIiKkLlMmNnOoPpRrSsUuWwYyZz","ÁáĆćÉéǴǵÍíḰḱĹĺḾḿŃńÓóṔṕŔŕŚśÚúẂẃÝýŹź"),
i(n.DIACRITIC_DOUBLE_ACUTE,n.COMBINING_DIACRITIC_DOUBLE_ACUTE,"OoUu","ŐőŰű"),i(n.DIACRITIC_CEDILLA,n.COMBINING_DIACRITIC_CEDILLA,"CcDdEeGgHhKkLlNnRrSsTt","ÇçḐḑȨȩĢģḨḩĶķĻļŅņŖŗŞşŢţ"),
i(n.DIACRITIC_CIRCUMFLEX,n.COMBINING_DIACRITIC_CIRCUMFLEX,"AaCcEeGgHhIiJjOoSsUuWwYyZz","ÂâĈĉÊêĜĝĤĥÎîĴĵÔôŜŝÛûŴŵŶŷẐẑ"),
i(n.DIACRITIC_DIAERESIS,n.COMBINING_DIACRITIC_DIAERESIS,"AaEeHhIiOotUuWwXxYy","ÄäËëḦḧÏïÖöẗÜüẄẅẌẍŸÿ"),i(n.DIACRITIC_GRAVE,n.COMBINING_DIACRITIC_GRAVE,"AaEeIiNnOoUuWwYy","ÀàÈèÌìǸǹÒòÙùẀẁỲỳ"),
i(n.DIACRITIC_TILDE,n.COMBINING_DIACRITIC_TILDE,"AaEeIiNnOoUuVvYy","ÃãẼẽĨĩÑñÕõŨũṼṽỸỹ")},{"./lang":139}],146:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0})
;var a,r=e("./global");!function(e){e.LINUX="linux",e.OSX="osx",e.WINDOWS="windows",e.UNKNOWN="unknown"}(a=n.OS||(n.OS={}));var i;!function(e){e.CHROME="chrome",e.EDGE="edge",e.FIREFOX="firefox",
e.SAFARI="safari",e.TRIDENT="trident",e.UNKNOWN="unknown"}(i=n.Browser||(n.Browser={}));var o;!function(e){e.LEGACY="legacy",e.MODERN="modern"}(o=n.Specification||(n.Specification={})),
n.newPlatform=function(){
var e=r.WINDOW.navigator.userAgent,t=/(\bLinux\b)/i.test(e)?a.LINUX:/(\bMac\b|\biPhone\b|\biPad\b)/i.test(e)?a.OSX:/(\bWindows\b|\bWin32\b|\bWin64\b)/i.test(e)?a.WINDOWS:a.UNKNOWN,n=/(\bTrident\b)/i.test(e)?i.TRIDENT:/(\bEdge\b)/i.test(e)?i.EDGE:/(\bSafari\b)/i.test(e)?i.SAFARI:/(\bFirefox\b)/i.test(e)?i.FIREFOX:/(\bChrome\b)/i.test(e)?i.CHROME:i.UNKNOWN,s=r.DOCUMENT.createEvent("KeyboardEvent"),c=o.LEGACY
;return"code"in s&&"key"in s&&(c=o.MODERN),{os:t,browser:n,specification:c,match:function(e){return null==e||"any"==e||e==t},toString:function(){
return"OS family: "+t+"; Browser family: "+n+"; Keyboard events specification: "+c}}}},{"./global":145}],145:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),
n.WINDOW=window,n.DOCUMENT=document,n.ROOT_ELEMENT=document.documentElement,n.HEAD_ELEMENT=document.head,n.BODY_ELEMENT=document.body},{}],62:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("../lib/lang"),r=e("./geometry"),i=a.map(e("./layout/english_us.json"));n.KEY_SET_ENGLISH_US=i
;var o=a.map(e("./layout/english_us_international-win.json"));n.KEY_SET_ENGLISH_US_INTERNATIONAL_WIN=o;var s=a.map(e("./layout/english_uk-win.json"));n.KEY_SET_ENGLISH_UK_WIN=s
;var c=a.map(e("./layout/english_uk-osx.json"));n.KEY_SET_ENGLISH_UK_OSX=c;var l=a.map(e("./layout/english_uk_extended-win.json"));n.KEY_SET_ENGLISH_UK_EXTENDED_WIN=l
;var u=a.map(e("./layout/english_us_dvorak.json"));n.KEY_SET_ENGLISH_US_DVORAK=u;var d=a.map(e("./layout/english_us_dvorak_left_handed.json"));n.KEY_SET_ENGLISH_US_DVORAK_LEFT_HANDED=d
;var f=a.map(e("./layout/english_us_dvorak_right_handed.json"));n.KEY_SET_ENGLISH_US_DVORAK_RIGHT_HANDED=f;var m=a.map(e("./layout/english_us_colemak.json"));n.KEY_SET_ENGLISH_US_COLEMAK=m
;var p=a.map(e("./layout/english_us_workman.json"));n.KEY_SET_ENGLISH_US_WORKMAN=p;var y=a.map(e("./layout/german-win.json"));n.KEY_SET_GERMAN_WIN=y
;var b=a.map(e("./layout/german_switzerland-win.json"));n.KEY_SET_GERMAN_SWITZERLAND_WIN=b;var v=a.map(e("./layout/french-win.json"));n.KEY_SET_FRENCH_WIN=v
;var h=a.map(e("./layout/french_canada-win.json"));n.KEY_SET_FRENCH_CANADA_WIN=h;var g=a.map(e("./layout/french_switzerland-win.json"));n.KEY_SET_FRENCH_SWITZERLAND_WIN=g
;var k=a.map(e("./layout/italian-win.json"));n.KEY_SET_ITALIAN_WIN=k;var E=a.map(e("./layout/spanish-win.json"));n.KEY_SET_SPANISH_WIN=E;var _=a.map(e("./layout/spanish_variation-win.json"))
;n.KEY_SET_SPANISH_VARIATION_WIN=_;var K=a.map(e("./layout/portuguese-win.json"));n.KEY_SET_PORTUGUESE_WIN=K;var S=a.map(e("./layout/portuguese_brazilian_abtn2-win.json"))
;n.KEY_SET_PORTUGUESE_BRAZILIAN_ABTN2_WIN=S;var N=a.map(e("./layout/russian-win.json"));n.KEY_SET_RUSSIAN_WIN=N;var x=a.map(e("./layout/russian-osx.json"));n.KEY_SET_RUSSIAN_OSX=x
;var w=a.map(e("./layout/russian_typewriter-win.json"));n.KEY_SET_RUSSIAN_TYPEWRITER_WIN=w,n.LAYOUT_LIST=[{id:"us",xid:16,name:"US",language:"en",keySet:i,geometry:r.STANDARD_101,variantOf:null,
platform:null},{id:"uk",xid:17,name:"UK",language:"en",keySet:s,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"uk",xid:17,name:"UK",language:"en",keySet:c,geometry:r.STANDARD_101,
variantOf:null,platform:"osx"},{id:"uk",xid:17,name:"UK",language:"en",keySet:s,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"us-dvorak",xid:24,name:"US Dvorak",language:"en",keySet:u,
geometry:r.STANDARD_101,variantOf:"us",platform:null},{id:"us-colemak",xid:25,name:"US Colemak",language:"en",keySet:m,geometry:r.STANDARD_101,variantOf:"us",platform:null},{id:"us-workman",xid:26,
name:"US Workman",language:"en",keySet:p,geometry:r.STANDARD_101,variantOf:"us",platform:null},{id:"de",xid:32,name:"Germany",language:"de",keySet:y,geometry:r.STANDARD_102,variantOf:null,
platform:"windows"},{id:"de",xid:32,name:"Germany",language:"de",keySet:y,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"de",xid:32,name:"Germany",language:"de",keySet:y,
geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"de-ch",xid:33,name:"Switzerland",language:"de",keySet:b,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"de-ch",xid:33,
name:"Switzerland",language:"de",keySet:b,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"de-ch",xid:33,name:"Switzerland",language:"de",keySet:b,geometry:r.STANDARD_102,variantOf:null,
platform:"linux"},{id:"fr",xid:48,name:"France",language:"fr",keySet:v,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"fr",xid:48,name:"France",language:"fr",keySet:v,
geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"fr",xid:48,name:"France",language:"fr",keySet:v,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"fr-ca",xid:49,name:"Canada",
language:"fr",keySet:h,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"fr-ca",xid:49,name:"Canada",language:"fr",keySet:h,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{
id:"fr-ca",xid:49,name:"Canada",language:"fr",keySet:h,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"fr-ch",xid:50,name:"Switzerland",language:"fr",keySet:g,geometry:r.STANDARD_102,
variantOf:null,platform:"windows"},{id:"fr-ch",xid:50,name:"Switzerland",language:"fr",keySet:g,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"fr-ch",xid:50,name:"Switzerland",
language:"fr",keySet:g,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"it",xid:64,name:"Italy",language:"it",keySet:k,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"it",
xid:64,name:"Italy",language:"it",keySet:k,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"it",xid:64,name:"Italy",language:"it",keySet:k,geometry:r.STANDARD_102,variantOf:null,
platform:"linux"},{id:"es",xid:80,name:"Spanish",language:"es",keySet:E,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"es-variation",xid:81,name:"Spanish Variation",language:"es",
keySet:_,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"pt-br",xid:96,name:"Brazilian ABNT2",language:"pt",keySet:S,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{
id:"pt-br",xid:96,name:"Brazilian ABNT2",language:"pt",keySet:S,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"pt-br",xid:96,name:"Brazilian ABNT2",language:"pt",keySet:S,
geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"pt-pt",xid:98,name:"Portugal",language:"pt",keySet:K,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"pt-pt",xid:98,
name:"Portugal",language:"pt",keySet:K,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"pt-pt",xid:98,name:"Portugal",language:"pt",keySet:K,geometry:r.STANDARD_102,variantOf:null,
platform:"linux"},{id:"ru",xid:112,name:"Russian",language:"ru",keySet:N,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"ru",xid:112,name:"Russian",language:"ru",keySet:x,
geometry:r.STANDARD_101,variantOf:null,platform:"osx"},{id:"ru",xid:112,name:"Russian",language:"ru",keySet:N,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"ru-typewriter",xid:113,
name:"Russian (Typewriter)",language:"ru",keySet:w,geometry:r.STANDARD_102,variantOf:null,platform:"windows"}]},{"../lib/lang":139,"./geometry":56,"./layout/english_uk-osx.json":63,
"./layout/english_uk-win.json":64,"./layout/english_uk_extended-win.json":65,"./layout/english_us.json":66,"./layout/english_us_colemak.json":67,"./layout/english_us_dvorak.json":68,
"./layout/english_us_dvorak_left_handed.json":69,"./layout/english_us_dvorak_right_handed.json":70,"./layout/english_us_international-win.json":71,"./layout/english_us_workman.json":72,
"./layout/french-win.json":73,"./layout/french_canada-win.json":74,"./layout/french_switzerland-win.json":75,"./layout/german-win.json":76,"./layout/german_switzerland-win.json":77,
"./layout/italian-win.json":78,"./layout/portuguese-win.json":79,"./layout/portuguese_brazilian_abtn2-win.json":80,"./layout/russian-osx.json":81,"./layout/russian-win.json":82,
"./layout/russian_typewriter-win.json":83,"./layout/spanish-win.json":84,"./layout/spanish_variation-win.json":85}],85:[function(e,t,n){t.exports={Backquote:{vk:220,a:39,b:183,c:92,d:0},Digit1:{vk:49,
a:49,b:170,c:124,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:47,c:35,d:0},Digit4:{vk:52,a:52,b:40,c:188,d:0},Digit5:{vk:53,a:53,b:41,c:189,d:0},Digit6:{vk:54,a:54,b:161,c:172,d:0},
Digit7:{vk:55,a:55,b:33,c:95,d:0},Digit8:{vk:56,a:56,b:191,c:35,d:0},Digit9:{vk:57,a:57,b:63,c:167,d:0},Digit0:{vk:48,a:48,b:8359,c:92,d:0},Minus:{vk:189,a:45,b:43,c:42,d:0},Equal:{vk:219,a:776,b:776,
c:771,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,
c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:221,a:247,b:215,c:91,d:0},BracketRight:{vk:186,
a:768,b:768,c:93,d:0},Backslash:{vk:191,a:769,b:769,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:36,d:0},KeyS:{vk:83,a:115,b:83,c:38,d:0},KeyD:{vk:68,a:100,b:68,c:64,d:0},KeyF:{vk:70,a:102,b:70,c:91,d:0},KeyG:{
vk:71,a:103,b:71,c:93,d:0},KeyH:{vk:72,a:104,b:72,c:124,d:0},KeyJ:{vk:74,a:106,b:74,c:163,d:0},KeyK:{vk:75,a:107,b:75,c:177,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:241,b:209,c:126,d:0
},Quote:{vk:222,a:231,b:199,c:123,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},
KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:770,d:0},Slash:{vk:223,a:61,b:37,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,
c:0,d:0}}},{}],84:[function(e,t,n){t.exports={Backquote:{vk:220,a:186,b:170,c:92,d:0},Digit1:{vk:49,a:49,b:33,c:124,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:183,c:35,d:0},Digit4:{
vk:52,a:52,b:36,c:771,d:0},Digit5:{vk:53,a:53,b:37,c:8364,d:0},Digit6:{vk:54,a:54,b:38,c:172,d:0},Digit7:{vk:55,a:55,b:47,c:0,d:0},Digit8:{vk:56,a:56,b:40,c:0,d:0},Digit9:{vk:57,a:57,b:41,c:0,d:0},
Digit0:{vk:48,a:48,b:61,c:0,d:0},Minus:{vk:219,a:39,b:63,c:0,d:0},Equal:{vk:221,a:161,b:191,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},
KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{
vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:186,a:768,b:770,c:91,d:0},BracketRight:{vk:187,a:43,b:42,c:93,d:0},Backslash:{vk:191,a:231,b:199,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,
b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,
c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:241,b:209,c:0,d:0},Quote:{vk:222,a:769,b:776,c:123,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,
b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,
c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:0,d:0}}},{}],83:[function(e,t,n){t.exports={Backquote:{vk:192,a:124,b:43,c:0,d:0},Digit1:{vk:49,a:8470,b:49,c:0,d:0},
Digit2:{vk:50,a:45,b:50,c:0,d:0},Digit3:{vk:51,a:47,b:51,c:0,d:0},Digit4:{vk:52,a:34,b:52,c:0,d:0},Digit5:{vk:53,a:58,b:53,c:0,d:0},Digit6:{vk:54,a:44,b:54,c:0,d:0},Digit7:{vk:55,a:46,b:55,c:0,d:0},
Digit8:{vk:56,a:95,b:56,c:8381,d:0},Digit9:{vk:57,a:63,b:57,c:0,d:0},Digit0:{vk:48,a:37,b:48,c:0,d:0},Minus:{vk:189,a:33,b:61,c:0,d:0},Equal:{vk:187,a:59,b:92,c:0,d:0},KeyQ:{vk:81,a:1081,b:1049,c:0,
d:0},KeyW:{vk:87,a:1094,b:1062,c:0,d:0},KeyE:{vk:69,a:1091,b:1059,c:0,d:0},KeyR:{vk:82,a:1082,b:1050,c:0,d:0},KeyT:{vk:84,a:1077,b:1045,c:0,d:0},KeyY:{vk:89,a:1085,b:1053,c:0,d:0},KeyU:{vk:85,a:1075,
b:1043,c:0,d:0},KeyI:{vk:73,a:1096,b:1064,c:0,d:0},KeyO:{vk:79,a:1097,b:1065,c:0,d:0},KeyP:{vk:80,a:1079,b:1047,c:0,d:0},BracketLeft:{vk:219,a:1093,b:1061,c:0,d:0},BracketRight:{vk:221,a:1098,b:1066,
c:0,d:0},Backslash:{vk:220,a:41,b:40,c:0,d:0},KeyA:{vk:65,a:1092,b:1060,c:0,d:0},KeyS:{vk:83,a:1099,b:1067,c:0,d:0},KeyD:{vk:68,a:1074,b:1042,c:0,d:0},KeyF:{vk:70,a:1072,b:1040,c:0,d:0},KeyG:{vk:71,
a:1087,b:1055,c:0,d:0},KeyH:{vk:72,a:1088,b:1056,c:0,d:0},KeyJ:{vk:74,a:1086,b:1054,c:0,d:0},KeyK:{vk:75,a:1083,b:1051,c:0,d:0},KeyL:{vk:76,a:1076,b:1044,c:0,d:0},Semicolon:{vk:186,a:1078,b:1046,c:0,
d:0},Quote:{vk:222,a:1101,b:1069,c:0,d:0},KeyZ:{vk:90,a:1103,b:1071,c:0,d:0},KeyX:{vk:88,a:1095,b:1063,c:0,d:0},KeyC:{vk:67,a:1089,b:1057,c:0,d:0},KeyV:{vk:86,a:1084,b:1052,c:0,d:0},KeyB:{vk:66,
a:1080,b:1048,c:0,d:0},KeyN:{vk:78,a:1090,b:1058,c:0,d:0},KeyM:{vk:77,a:1100,b:1068,c:0,d:0},Comma:{vk:188,a:1073,b:1041,c:0,d:0},Period:{vk:190,a:1102,b:1070,c:0,d:0},Slash:{vk:191,a:1105,b:1025,c:0,
d:0},IntlBackslash:{vk:226,a:41,b:40,c:0,d:0}}},{}],82:[function(e,t,n){t.exports={Backquote:{vk:192,a:1105,b:1025,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:0,d:0},Digit3:{
vk:51,a:51,b:8470,c:0,d:0},Digit4:{vk:52,a:52,b:59,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:58,c:0,d:0},Digit7:{vk:55,a:55,b:63,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:8381,d:0},
Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:1081,b:1049,c:0,d:0},KeyW:{vk:87,a:1094,b:1062,c:0,d:0
},KeyE:{vk:69,a:1091,b:1059,c:0,d:0},KeyR:{vk:82,a:1082,b:1050,c:0,d:0},KeyT:{vk:84,a:1077,b:1045,c:0,d:0},KeyY:{vk:89,a:1085,b:1053,c:0,d:0},KeyU:{vk:85,a:1075,b:1043,c:0,d:0},KeyI:{vk:73,a:1096,
b:1064,c:0,d:0},KeyO:{vk:79,a:1097,b:1065,c:0,d:0},KeyP:{vk:80,a:1079,b:1047,c:0,d:0},BracketLeft:{vk:219,a:1093,b:1061,c:0,d:0},BracketRight:{vk:221,a:1098,b:1066,c:0,d:0},Backslash:{vk:220,a:92,
b:47,c:0,d:0},KeyA:{vk:65,a:1092,b:1060,c:0,d:0},KeyS:{vk:83,a:1099,b:1067,c:0,d:0},KeyD:{vk:68,a:1074,b:1042,c:0,d:0},KeyF:{vk:70,a:1072,b:1040,c:0,d:0},KeyG:{vk:71,a:1087,b:1055,c:0,d:0},KeyH:{
vk:72,a:1088,b:1056,c:0,d:0},KeyJ:{vk:74,a:1086,b:1054,c:0,d:0},KeyK:{vk:75,a:1083,b:1051,c:0,d:0},KeyL:{vk:76,a:1076,b:1044,c:0,d:0},Semicolon:{vk:186,a:1078,b:1046,c:0,d:0},Quote:{vk:222,a:1101,
b:1069,c:0,d:0},KeyZ:{vk:90,a:1103,b:1071,c:0,d:0},KeyX:{vk:88,a:1095,b:1063,c:0,d:0},KeyC:{vk:67,a:1089,b:1057,c:0,d:0},KeyV:{vk:86,a:1084,b:1052,c:0,d:0},KeyB:{vk:66,a:1080,b:1048,c:0,d:0},KeyN:{
vk:78,a:1090,b:1058,c:0,d:0},KeyM:{vk:77,a:1100,b:1068,c:0,d:0},Comma:{vk:188,a:1073,b:1041,c:0,d:0},Period:{vk:190,a:1102,b:1070,c:0,d:0},Slash:{vk:191,a:46,b:44,c:0,d:0},IntlBackslash:{vk:226,a:92,
b:47,c:0,d:0}}},{}],81:[function(e,t,n){t.exports={Backquote:{vk:192,a:93,b:91,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:0,d:0},Digit3:{vk:51,a:51,b:8470,c:0,d:0},Digit4:{
vk:52,a:52,b:37,c:0,d:0},Digit5:{vk:53,a:53,b:58,c:0,d:0},Digit6:{vk:54,a:54,b:44,c:0,d:0},Digit7:{vk:55,a:55,b:46,c:0,d:0},Digit8:{vk:56,a:56,b:59,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{
vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:1081,b:1049,c:0,d:0},KeyW:{vk:87,a:1094,b:1062,c:0,d:0},KeyE:{vk:69,a:1091,b:1059,c:0,d:0},
KeyR:{vk:82,a:1082,b:1050,c:0,d:0},KeyT:{vk:84,a:1077,b:1045,c:0,d:0},KeyY:{vk:89,a:1085,b:1053,c:0,d:0},KeyU:{vk:85,a:1075,b:1043,c:0,d:0},KeyI:{vk:73,a:1096,b:1064,c:0,d:0},KeyO:{vk:79,a:1097,
b:1065,c:0,d:0},KeyP:{vk:80,a:1079,b:1047,c:0,d:0},BracketLeft:{vk:219,a:1093,b:1061,c:0,d:0},BracketRight:{vk:221,a:1098,b:1066,c:0,d:0},Backslash:{vk:220,a:1105,b:1025,c:0,d:0},KeyA:{vk:65,a:1092,
b:1060,c:0,d:0},KeyS:{vk:83,a:1099,b:1067,c:0,d:0},KeyD:{vk:68,a:1074,b:1042,c:0,d:0},KeyF:{vk:70,a:1072,b:1040,c:0,d:0},KeyG:{vk:71,a:1087,b:1055,c:0,d:0},KeyH:{vk:72,a:1088,b:1056,c:0,d:0},KeyJ:{
vk:74,a:1086,b:1054,c:0,d:0},KeyK:{vk:75,a:1083,b:1051,c:0,d:0},KeyL:{vk:76,a:1076,b:1044,c:0,d:0},Semicolon:{vk:186,a:1078,b:1046,c:0,d:0},Quote:{vk:222,a:1101,b:1069,c:0,d:0},KeyZ:{vk:90,a:1103,
b:1071,c:0,d:0},KeyX:{vk:88,a:1095,b:1063,c:0,d:0},KeyC:{vk:67,a:1089,b:1057,c:0,d:0},KeyV:{vk:86,a:1084,b:1052,c:0,d:0},KeyB:{vk:66,a:1080,b:1048,c:0,d:0},KeyN:{vk:78,a:1090,b:1058,c:0,d:0},KeyM:{
vk:77,a:1100,b:1068,c:0,d:0},Comma:{vk:188,a:1073,b:1041,c:0,d:0},Period:{vk:190,a:1102,b:1070,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0}}},{}],80:[function(e,t,n){t.exports={Backquote:{vk:192,a:39,
b:34,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:185,d:0},Digit2:{vk:50,a:50,b:64,c:178,d:0},Digit3:{vk:51,a:51,b:35,c:179,d:0},Digit4:{vk:52,a:52,b:36,c:163,d:0},Digit5:{vk:53,a:53,b:37,c:162,d:0},Digit6:{
vk:54,a:54,b:776,c:172,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{
vk:187,a:61,b:43,c:167,d:0},KeyQ:{vk:81,a:113,b:81,c:47,d:0},KeyW:{vk:87,a:119,b:87,c:63,d:0},KeyE:{vk:69,a:101,b:69,c:176,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{
vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:769,b:768,c:0,d:0},
BracketRight:{vk:221,a:91,b:123,c:170,d:0},Backslash:{vk:220,a:93,b:125,c:186,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,
b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:231,
b:199,c:0,d:0},Quote:{vk:222,a:771,b:770,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:8354,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,
b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:59,b:58,c:0,d:0},IntlBackslash:{vk:226,
a:92,b:124,c:0,d:0}}},{}],79:[function(e,t,n){t.exports={Backquote:{vk:220,a:92,b:124,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:35,c:163,d:0},
Digit4:{vk:52,a:52,b:36,c:167,d:0},Digit5:{vk:53,a:53,b:37,c:8364,d:0},Digit6:{vk:54,a:54,b:38,c:0,d:0},Digit7:{vk:55,a:55,b:47,c:123,d:0},Digit8:{vk:56,a:56,b:40,c:91,d:0},Digit9:{vk:57,a:57,b:41,
c:93,d:0},Digit0:{vk:48,a:48,b:61,c:125,d:0},Minus:{vk:219,a:39,b:63,c:0,d:0},Equal:{vk:221,a:171,b:187,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,
c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,
d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:187,a:43,b:42,c:776,d:0},BracketRight:{vk:186,a:769,b:768,c:93,d:0},Backslash:{vk:191,a:771,b:770,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{
vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,
a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:231,b:199,c:0,d:0},Quote:{vk:222,a:186,b:170,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{
vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,
a:46,b:58,c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:0,d:0}}},{}],78:[function(e,t,n){t.exports={Backquote:{vk:220,a:92,b:124,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0
},Digit2:{vk:50,a:50,b:34,c:0,d:0},Digit3:{vk:51,a:51,b:163,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:8364,d:0},Digit6:{vk:54,a:54,b:38,c:0,d:0},Digit7:{vk:55,a:55,b:47,c:0,
d:0},Digit8:{vk:56,a:56,b:40,c:0,d:0},Digit9:{vk:57,a:57,b:41,c:0,d:0},Digit0:{vk:48,a:48,b:61,c:0,d:0},Minus:{vk:219,a:39,b:63,c:0,d:0},Equal:{vk:221,a:236,b:94,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,
d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},
KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:186,a:232,b:233,c:91,d:123},BracketRight:{vk:187,a:43,b:42,c:93,d:125},Backslash:{
vk:191,a:249,b:167,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,
a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:242,b:231,c:64,d:0},Quote:{vk:222,a:224,b:176,c:35,d:0},KeyZ:{
vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,
a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:0,d:0}}},{}],77:[function(e,t,n){t.exports={
Backquote:{vk:191,a:167,b:176,c:0,d:0},Digit1:{vk:49,a:49,b:43,c:166,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:42,c:35,d:0},Digit4:{vk:52,a:52,b:231,c:176,d:0},Digit5:{vk:53,a:53,
b:37,c:167,d:0},Digit6:{vk:54,a:54,b:38,c:172,d:0},Digit7:{vk:55,a:55,b:47,c:124,d:0},Digit8:{vk:56,a:56,b:40,c:162,d:0},Digit9:{vk:57,a:57,b:41,c:0,d:0},Digit0:{vk:48,a:48,b:61,c:0,d:0},Minus:{
vk:219,a:39,b:63,c:769,d:0},Equal:{vk:221,a:770,b:768,c:771,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},
KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:90,a:122,b:90,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},
BracketLeft:{vk:186,a:220,b:200,c:91,d:0},BracketRight:{vk:192,a:776,b:33,c:93,d:0},Backslash:{vk:223,a:36,b:163,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,
a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,
b:76,c:0,d:0},Semicolon:{vk:222,a:214,b:201,c:0,d:0},Quote:{vk:220,a:196,b:192,c:123,d:0},KeyZ:{vk:89,a:121,b:89,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,
a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:0,d:0},Slash:{vk:189,
a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:92,d:0}}},{}],76:[function(e,t,n){t.exports={Backquote:{vk:220,a:770,b:176,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:178,
d:0},Digit3:{vk:51,a:51,b:167,c:179,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:38,c:0,d:0},Digit7:{vk:55,a:55,b:47,c:123,d:0},Digit8:{vk:56,a:56,b:40,
c:91,d:0},Digit9:{vk:57,a:57,b:41,c:93,d:0},Digit0:{vk:48,a:48,b:61,c:125,d:0},Minus:{vk:219,a:223,b:63,c:92,d:0},Equal:{vk:221,a:769,b:768,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:64,d:0},KeyW:{vk:87,a:119,
b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:90,a:122,b:90,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,
c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:186,a:252,b:220,c:0,d:0},BracketRight:{vk:187,a:43,b:42,c:126,d:0},Backslash:{vk:191,a:35,b:39,c:0,d:0},KeyA:{
vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,
a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:246,b:214,c:0,d:0},Quote:{vk:222,a:228,b:196,c:0,d:0},KeyZ:{vk:89,a:121,b:89,c:0,d:0},KeyX:{
vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:181,d:0},Comma:{vk:188,
a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:124,d:0}}},{}],75:[function(e,t,n){t.exports={Backquote:{vk:191,a:167,b:176,c:0,
d:0},Digit1:{vk:49,a:49,b:43,c:166,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:42,c:35,d:0},Digit4:{vk:52,a:52,b:231,c:176,d:0},Digit5:{vk:53,a:53,b:37,c:167,d:0},Digit6:{vk:54,a:54,
b:38,c:172,d:0},Digit7:{vk:55,a:55,b:47,c:124,d:0},Digit8:{vk:56,a:56,b:40,c:162,d:0},Digit9:{vk:57,a:57,b:41,c:0,d:0},Digit0:{vk:48,a:48,b:61,c:0,d:0},Minus:{vk:219,a:39,b:63,c:769,d:0},Equal:{
vk:221,a:770,b:768,c:771,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{
vk:90,a:122,b:90,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:186,a:232,b:252,c:91,d:0},
BracketRight:{vk:192,a:776,b:33,c:93,d:0},Backslash:{vk:223,a:36,b:163,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,
c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:222,a:233,b:246,
c:0,d:0},Quote:{vk:220,a:224,b:228,c:123,d:0},KeyZ:{vk:89,a:121,b:89,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,
d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,
b:62,c:92,d:0}}},{}],74:[function(e,t,n){t.exports={Backquote:{vk:222,a:35,b:124,c:92,d:0},Digit1:{vk:49,a:49,b:33,c:177,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:47,c:163,d:0},
Digit4:{vk:52,a:52,b:36,c:162,d:0},Digit5:{vk:53,a:53,b:37,c:164,d:0},Digit6:{vk:54,a:54,b:63,c:172,d:0},Digit7:{vk:55,a:55,b:38,c:166,d:0},Digit8:{vk:56,a:56,b:42,c:178,d:0},Digit9:{vk:57,a:57,b:40,
c:179,d:0},Digit0:{vk:48,a:48,b:41,c:188,d:0},Minus:{vk:189,a:45,b:95,c:189,d:0},Equal:{vk:187,a:61,b:43,c:190,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,
b:69,c:0,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,
c:167,d:0},KeyP:{vk:80,a:112,b:80,c:182,d:0},BracketLeft:{vk:219,a:770,b:770,c:91,d:0},BracketRight:{vk:221,a:807,b:776,c:93,d:0},Backslash:{vk:220,a:60,b:62,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},
KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{
vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,c:126,d:0},Quote:{vk:192,a:768,b:768,c:123,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},
KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:181,d:0},Comma:{vk:188,a:44,b:39,c:175,d:0},
Period:{vk:190,a:46,b:46,c:173,d:0},Slash:{vk:191,a:233,b:201,c:769,d:0},IntlBackslash:{vk:226,a:171,b:187,c:176,d:0}}},{}],73:[function(e,t,n){t.exports={Backquote:{vk:222,a:178,b:0,c:0,d:0},Digit1:{
vk:49,a:38,b:49,c:0,d:0},Digit2:{vk:50,a:233,b:50,c:771,d:0},Digit3:{vk:51,a:34,b:51,c:35,d:0},Digit4:{vk:52,a:39,b:52,c:123,d:0},Digit5:{vk:53,a:40,b:53,c:91,d:0},Digit6:{vk:54,a:45,b:54,c:124,d:0},
Digit7:{vk:55,a:232,b:55,c:768,d:0},Digit8:{vk:56,a:95,b:56,c:92,d:0},Digit9:{vk:57,a:231,b:57,c:94,d:0},Digit0:{vk:48,a:224,b:48,c:64,d:0},Minus:{vk:219,a:41,b:176,c:93,d:0},Equal:{vk:187,a:61,b:43,
c:125,d:0},KeyQ:{vk:65,a:97,b:65,c:0,d:0},KeyW:{vk:90,a:122,b:90,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,
d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:221,a:770,b:776,c:0,d:0},BracketRight:{vk:186,a:36,
b:163,c:164,d:0},Backslash:{vk:220,a:42,b:181,c:0,d:0},KeyA:{vk:81,a:113,b:81,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,
a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:77,a:109,b:77,c:0,d:0},Quote:{vk:192,
a:249,b:37,c:0,d:0},KeyZ:{vk:87,a:119,b:87,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,
b:78,c:0,d:0},KeyM:{vk:188,a:44,b:63,c:0,d:0},Comma:{vk:190,a:59,b:46,c:0,d:0},Period:{vk:191,a:58,b:47,c:0,d:0},Slash:{vk:223,a:33,b:167,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:0,d:0}}},{}],
72:[function(e,t,n){t.exports={Backquote:{vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0
},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},
Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:68,a:100,b:68,c:0,d:0},KeyE:{vk:82,a:114,b:82,c:0,d:0},KeyR:{vk:87,a:119,b:87,c:0,d:0},KeyT:{
vk:66,a:98,b:66,c:0,d:0},KeyY:{vk:74,a:106,b:74,c:0,d:0},KeyU:{vk:70,a:102,b:70,c:0,d:0},KeyI:{vk:85,a:117,b:85,c:0,d:0},KeyO:{vk:80,a:112,b:80,c:0,d:0},KeyP:{vk:186,a:59,b:58,c:0,d:0},BracketLeft:{
vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,b:125,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:72,a:104,b:72,c:0,d:0
},KeyF:{vk:84,a:116,b:84,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:89,a:121,b:89,c:0,d:0},KeyJ:{vk:78,a:110,b:78,c:0,d:0},KeyK:{vk:69,a:101,b:69,c:0,d:0},KeyL:{vk:79,a:111,b:79,c:0,d:0},
Semicolon:{vk:73,a:105,b:73,c:0,d:0},Quote:{vk:222,a:39,b:34,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:77,a:109,b:77,c:0,d:0},KeyV:{vk:67,a:99,b:67,c:0,d:0},
KeyB:{vk:86,a:118,b:86,c:0,d:0},KeyN:{vk:75,a:107,b:75,c:0,d:0},KeyM:{vk:76,a:108,b:76,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0}}
},{}],71:[function(e,t,n){t.exports={Backquote:{vk:192,a:768,b:771,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:161,d:185},Digit2:{vk:50,a:50,b:64,c:178,d:0},Digit3:{vk:51,a:51,b:35,c:179,d:0},Digit4:{vk:52,
a:52,b:36,c:164,d:163},Digit5:{vk:53,a:53,b:37,c:8364,d:0},Digit6:{vk:54,a:54,b:770,c:188,d:0},Digit7:{vk:55,a:55,b:38,c:189,d:0},Digit8:{vk:56,a:56,b:42,c:190,d:0},Digit9:{vk:57,a:57,b:40,c:8216,d:0
},Digit0:{vk:48,a:48,b:41,c:8217,d:0},Minus:{vk:189,a:45,b:95,c:165,d:0},Equal:{vk:187,a:61,b:43,c:215,d:247},KeyQ:{vk:81,a:113,b:81,c:228,d:196},KeyW:{vk:87,a:119,b:87,c:229,d:197},KeyE:{vk:69,a:101,
b:69,c:233,d:201},KeyR:{vk:82,a:114,b:82,c:174,d:0},KeyT:{vk:84,a:116,b:84,c:254,d:222},KeyY:{vk:89,a:121,b:89,c:252,d:220},KeyU:{vk:85,a:117,b:85,c:250,d:218},KeyI:{vk:73,a:105,b:73,c:237,d:205},
KeyO:{vk:79,a:111,b:79,c:243,d:211},KeyP:{vk:80,a:112,b:80,c:246,d:214},BracketLeft:{vk:219,a:91,b:123,c:171,d:0},BracketRight:{vk:221,a:93,b:125,c:187,d:0},Backslash:{vk:220,a:92,b:124,c:172,d:166},
KeyA:{vk:65,a:97,b:65,c:225,d:193},KeyS:{vk:83,a:115,b:83,c:223,d:167},KeyD:{vk:68,a:100,b:68,c:240,d:208},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,
d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:248,d:216},Semicolon:{vk:186,a:59,b:58,c:182,d:176},Quote:{vk:222,a:0,b:0,c:180,d:168},KeyZ:{vk:90,a:122,
b:90,c:230,d:198},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:169,d:162},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:241,d:209},KeyM:{vk:77,
a:109,b:77,c:181,d:0},Comma:{vk:188,a:44,b:60,c:231,d:199},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:191,d:0},IntlBackslash:{vk:226,a:92,b:124,c:0,d:0}}},{}],70:[function(e,t,n){
t.exports={Backquote:{vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:74,
a:106,b:74,c:0,d:0},Digit6:{vk:76,a:108,b:76,c:0,d:0},Digit7:{vk:77,a:109,b:77,c:0,d:0},Digit8:{vk:70,a:102,b:70,c:0,d:0},Digit9:{vk:80,a:112,b:80,c:0,d:0},Digit0:{vk:191,a:47,b:63,c:0,d:0},Minus:{
vk:219,a:91,b:123,c:0,d:0},Equal:{vk:221,a:93,b:125,c:0,d:0},KeyQ:{vk:53,a:53,b:37,c:0,d:0},KeyW:{vk:54,a:54,b:94,c:0,d:0},KeyE:{vk:81,a:113,b:81,c:0,d:0},KeyR:{vk:190,a:46,b:62,c:0,d:0},KeyT:{vk:79,
a:111,b:79,c:0,d:0},KeyY:{vk:82,a:114,b:82,c:0,d:0},KeyU:{vk:83,a:115,b:83,c:0,d:0},KeyI:{vk:85,a:117,b:85,c:0,d:0},KeyO:{vk:89,a:121,b:89,c:0,d:0},KeyP:{vk:66,a:98,b:66,c:0,d:0},BracketLeft:{vk:186,
a:59,b:58,c:0,d:0},BracketRight:{vk:187,a:61,b:43,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:55,a:55,b:38,c:0,d:0},KeyS:{vk:56,a:56,b:42,c:0,d:0},KeyD:{vk:90,a:122,b:90,c:0,d:0},KeyF:{
vk:65,a:97,b:65,c:0,d:0},KeyG:{vk:69,a:101,b:69,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:84,a:116,b:84,c:0,d:0},KeyK:{vk:68,a:100,b:68,c:0,d:0},KeyL:{vk:67,a:99,b:67,c:0,d:0},Semicolon:{
vk:75,a:107,b:75,c:0,d:0},Quote:{vk:189,a:45,b:95,c:0,d:0},KeyZ:{vk:57,a:57,b:40,c:0,d:0},KeyX:{vk:48,a:48,b:41,c:0,d:0},KeyC:{vk:88,a:120,b:88,c:0,d:0},KeyV:{vk:188,a:44,b:60,c:0,d:0},KeyB:{vk:73,
a:105,b:73,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:87,a:119,b:87,c:0,d:0},Comma:{vk:86,a:118,b:86,c:0,d:0},Period:{vk:71,a:103,b:71,c:0,d:0},Slash:{vk:222,a:39,b:34,c:0,d:0},IntlBackslash:{
vk:226,a:92,b:124,c:0,d:0}}},{}],69:[function(e,t,n){t.exports={Backquote:{vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:219,a:91,b:123,c:0,d:0},Digit2:{vk:221,a:93,b:125,c:0,d:0},Digit3:{vk:191,a:47,b:63,
c:0,d:0},Digit4:{vk:80,a:112,b:80,c:0,d:0},Digit5:{vk:70,a:102,b:70,c:0,d:0},Digit6:{vk:77,a:109,b:77,c:0,d:0},Digit7:{vk:76,a:108,b:76,c:0,d:0},Digit8:{vk:74,a:106,b:74,c:0,d:0},Digit9:{vk:52,a:52,
b:36,c:0,d:0},Digit0:{vk:51,a:51,b:35,c:0,d:0},Minus:{vk:50,a:50,b:64,c:0,d:0},Equal:{vk:49,a:49,b:33,c:0,d:0},KeyQ:{vk:186,a:59,b:58,c:0,d:0},KeyW:{vk:81,a:113,b:81,c:0,d:0},KeyE:{vk:66,a:98,b:66,
c:0,d:0},KeyR:{vk:89,a:121,b:89,c:0,d:0},KeyT:{vk:85,a:117,b:85,c:0,d:0},KeyY:{vk:82,a:114,b:82,c:0,d:0},KeyU:{vk:83,a:115,b:83,c:0,d:0},KeyI:{vk:79,a:111,b:79,c:0,d:0},KeyO:{vk:190,a:46,b:62,c:0,d:0
},KeyP:{vk:54,a:54,b:94,c:0,d:0},BracketLeft:{vk:53,a:53,b:37,c:0,d:0},BracketRight:{vk:187,a:61,b:43,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:189,a:45,b:95,c:0,d:0},KeyS:{vk:75,a:107,
b:75,c:0,d:0},KeyD:{vk:67,a:99,b:67,c:0,d:0},KeyF:{vk:68,a:100,b:68,c:0,d:0},KeyG:{vk:84,a:116,b:84,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:69,a:101,b:69,c:0,d:0},KeyK:{vk:65,a:97,b:65,c:0,
d:0},KeyL:{vk:90,a:122,b:90,c:0,d:0},Semicolon:{vk:56,a:56,b:42,c:0,d:0},Quote:{vk:55,a:55,b:38,c:0,d:0},KeyZ:{vk:222,a:39,b:34,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:71,a:103,b:71,c:0,d:0
},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:87,a:119,b:87,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:73,a:105,b:73,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:48,a:48,b:41,c:0,d:0},
Slash:{vk:57,a:57,b:40,c:0,d:0},IntlBackslash:{vk:226,a:92,b:124,c:0,d:0}}},{}],68:[function(e,t,n){t.exports={Backquote:{vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,
a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,
a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:219,a:91,b:123,c:0,d:0},Equal:{vk:221,a:93,b:125,c:0,d:0},KeyQ:{vk:222,a:39,b:34,c:0,d:0},KeyW:{vk:188,
a:44,b:60,c:0,d:0},KeyE:{vk:190,a:46,b:62,c:0,d:0},KeyR:{vk:80,a:112,b:80,c:0,d:0},KeyT:{vk:89,a:121,b:89,c:0,d:0},KeyY:{vk:70,a:102,b:70,c:0,d:0},KeyU:{vk:71,a:103,b:71,c:0,d:0},KeyI:{vk:67,a:99,
b:67,c:0,d:0},KeyO:{vk:82,a:114,b:82,c:0,d:0},KeyP:{vk:76,a:108,b:76,c:0,d:0},BracketLeft:{vk:191,a:47,b:63,c:0,d:0},BracketRight:{vk:187,a:61,b:43,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},
KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:79,a:111,b:79,c:0,d:0},KeyD:{vk:69,a:101,b:69,c:0,d:0},KeyF:{vk:85,a:117,b:85,c:0,d:0},KeyG:{vk:73,a:105,b:73,c:0,d:0},KeyH:{vk:68,a:100,b:68,c:0,d:0},KeyJ:{
vk:72,a:104,b:72,c:0,d:0},KeyK:{vk:84,a:116,b:84,c:0,d:0},KeyL:{vk:78,a:110,b:78,c:0,d:0},Semicolon:{vk:83,a:115,b:83,c:0,d:0},Quote:{vk:189,a:45,b:95,c:0,d:0},KeyZ:{vk:186,a:59,b:58,c:0,d:0},KeyX:{
vk:81,a:113,b:81,c:0,d:0},KeyC:{vk:74,a:106,b:74,c:0,d:0},KeyV:{vk:75,a:107,b:75,c:0,d:0},KeyB:{vk:88,a:120,b:88,c:0,d:0},KeyN:{vk:66,a:98,b:66,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:87,
a:119,b:87,c:0,d:0},Period:{vk:86,a:118,b:86,c:0,d:0},Slash:{vk:90,a:122,b:90,c:0,d:0},IntlBackslash:{vk:226,a:92,b:124,c:0,d:0}}},{}],67:[function(e,t,n){t.exports={Backquote:{vk:192,a:96,b:126,c:0,
d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:0,
d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,
d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:70,a:102,b:70,c:0,d:0},KeyR:{vk:80,a:112,b:80,c:0,d:0},KeyT:{vk:71,a:103,b:71,c:0,d:0},KeyY:{vk:74,a:106,b:74,c:0,d:0},
KeyU:{vk:76,a:108,b:76,c:0,d:0},KeyI:{vk:85,a:117,b:85,c:0,d:0},KeyO:{vk:89,a:121,b:89,c:0,d:0},KeyP:{vk:186,a:59,b:58,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,b:125,
c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:82,a:114,b:82,c:0,d:0},KeyD:{vk:83,a:115,b:83,c:0,d:0},KeyF:{vk:84,a:116,b:84,c:0,d:0},KeyG:{vk:68,a:100,b:68,
c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:78,a:110,b:78,c:0,d:0},KeyK:{vk:69,a:101,b:69,c:0,d:0},KeyL:{vk:73,a:105,b:73,c:0,d:0},Semicolon:{vk:79,a:111,b:79,c:0,d:0},Quote:{vk:222,a:39,b:34,
c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:75,a:107,b:75,c:0,d:0},
KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0}}},{}],66:[function(e,t,n){t.exports={Backquote:{vk:192,a:96,b:126,
c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,
c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,
c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:0,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0
},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,
b:125,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,
b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,c:0,d:0},Quote:{vk:222,a:39,
b:34,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,
d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0},IntlBackslash:{vk:226,a:92,b:124,c:0,d:0}}},{}],
65:[function(e,t,n){t.exports={Backquote:{vk:223,a:768,b:172,c:166,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:776,d:0},Digit3:{vk:51,a:51,b:163,c:0,d:0},Digit4:{vk:52,a:52,b:36,
c:8364,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:770,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,
b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:7811,d:7810},KeyE:{vk:69,a:101,b:69,c:233,d:201},KeyR:{vk:82,
a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:253,d:221},KeyU:{vk:85,a:117,b:85,c:250,d:218},KeyI:{vk:73,a:105,b:73,c:237,d:205},KeyO:{vk:79,a:111,b:79,c:243,d:211},
KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,b:125,c:0,d:0},Backslash:{vk:222,a:35,b:126,c:771,d:0},KeyA:{vk:65,a:97,b:65,c:225,d:193},KeyS:{vk:83,
a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,
b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,c:0,d:0},Quote:{vk:192,a:39,b:64,c:769,d:96},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,
b:67,c:231,d:199},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,
b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0},IntlBackslash:{vk:220,a:92,b:124,c:0,d:0}}},{}],64:[function(e,t,n){t.exports={Backquote:{vk:223,a:96,b:172,c:166,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},
Digit2:{vk:50,a:50,b:34,c:0,d:0},Digit3:{vk:51,a:51,b:163,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:8364,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0
},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},
KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:201,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:218,d:0},
KeyI:{vk:73,a:105,b:73,c:205,d:0},KeyO:{vk:79,a:111,b:79,c:211,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,b:125,c:0,d:0},Backslash:{vk:222,
a:35,b:126,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:193,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,
b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,c:0,d:0},Quote:{vk:192,a:39,b:64,c:0,d:0},KeyZ:{vk:90,a:122,
b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,
d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0},IntlBackslash:{vk:220,a:92,b:124,c:0,d:0}}},{}],63:[function(e,t,n){t.exports={Backquote:{
vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:163,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},
Digit6:{vk:54,a:54,b:94,c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},
Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:0,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{
vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},
BracketRight:{vk:221,a:93,b:125,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,
c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,
c:0,d:0},Quote:{vk:222,a:39,b:34,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},
KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0}}},{}],56:[function(e,t,n){
"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("../lib/lang"),r=a.map(e("./geometry/standard_101.json"));n.STANDARD_101=r;var i=a.map(e("./geometry/standard_102.json"))
;n.STANDARD_102=i;var o=a.map(e("./geometry/control_pad.json"));n.CONTROL_PAD=o;var s=a.map(e("./geometry/cursor_pad.json"));n.CURSOR_PAD=s;var c=a.map(e("./geometry/num_pad.json"));n.NUM_PAD=c},{
"../lib/lang":139,"./geometry/control_pad.json":57,"./geometry/cursor_pad.json":58,"./geometry/num_pad.json":59,"./geometry/standard_101.json":60,"./geometry/standard_102.json":61}],
61:[function(e,t,n){t.exports={Backquote:{x:0,y:0,shape:"key",zone:"z1"},Digit1:{x:42,y:0,shape:"key",zone:"z1"},Digit2:{x:84,y:0,shape:"key",zone:"z2"},Digit3:{x:126,y:0,shape:"key",zone:"z3"},
Digit4:{x:168,y:0,shape:"key",zone:"z4"},Digit5:{x:210,y:0,shape:"key",zone:"z4"},Digit6:{x:252,y:0,shape:"key",zone:"z5"},Digit7:{x:294,y:0,shape:"key",zone:"z5"},Digit8:{x:336,y:0,shape:"key",
zone:"z6"},Digit9:{x:378,y:0,shape:"key",zone:"z7"},Digit0:{x:420,y:0,shape:"key",zone:"z8"},Minus:{x:462,y:0,shape:"key",zone:"z8"},Equal:{x:504,y:0,shape:"key",zone:"z8"},Backspace:{x:546,y:0,
shape:"key-backspace",zone:null},Tab:{x:0,y:42,shape:"key-tab",zone:null},KeyQ:{x:65,y:42,shape:"key",zone:"z1"},KeyW:{x:107,y:42,shape:"key",zone:"z2"},KeyE:{x:149,y:42,shape:"key",zone:"z3"},KeyR:{
x:191,y:42,shape:"key",zone:"z4"},KeyT:{x:233,y:42,shape:"key",zone:"z4"},KeyY:{x:275,y:42,shape:"key",zone:"z5"},KeyU:{x:317,y:42,shape:"key",zone:"z5"},KeyI:{x:359,y:42,shape:"key",zone:"z6"},KeyO:{
x:401,y:42,shape:"key",zone:"z7"},KeyP:{x:443,y:42,shape:"key",zone:"z8"},BracketLeft:{x:485,y:42,shape:"key",zone:"z8"},BracketRight:{x:527,y:42,shape:"key",zone:"z8"},CapsLock:{x:0,y:84,
shape:"key-caps-lock",zone:null},KeyA:{x:72,y:84,shape:"key",zone:"z1"},KeyS:{x:114,y:84,shape:"key",zone:"z2"},KeyD:{x:156,y:84,shape:"key",zone:"z3"},KeyF:{x:198,y:84,shape:"key",zone:"z4"},KeyG:{
x:240,y:84,shape:"key",zone:"z4"},KeyH:{x:282,y:84,shape:"key",zone:"z5"},KeyJ:{x:324,y:84,shape:"key",zone:"z5"},KeyK:{x:366,y:84,shape:"key",zone:"z6"},KeyL:{x:408,y:84,shape:"key",zone:"z7"},
Semicolon:{x:450,y:84,shape:"key",zone:"z8"},Quote:{x:492,y:84,shape:"key",zone:"z8"},Backslash:{x:534,y:84,shape:"key",zone:"z8"},Enter:{x:569,y:42,shape:"key-enter-standard-102",zone:null},
ShiftLeft:{x:0,y:126,shape:"key-left-shift-standard-102",zone:null},IntlBackslash:{x:52,y:126,shape:"key",zone:"z1"},KeyZ:{x:94,y:126,shape:"key",zone:"z1"},KeyX:{x:136,y:126,shape:"key",zone:"z2"},
KeyC:{x:178,y:126,shape:"key",zone:"z3"},KeyV:{x:220,y:126,shape:"key",zone:"z4"},KeyB:{x:262,y:126,shape:"key",zone:"z4"},KeyN:{x:304,y:126,shape:"key",zone:"z5"},KeyM:{x:346,y:126,shape:"key",
zone:"z5"},Comma:{x:388,y:126,shape:"key",zone:"z6"},Period:{x:430,y:126,shape:"key",zone:"z7"},Slash:{x:472,y:126,shape:"key",zone:"z8"},ShiftRight:{x:514,y:126,shape:"key-right-shift",zone:null},
ControlLeft:{x:0,y:168,shape:"key-ctrl",zone:null},AltLeft:{x:65,y:168,shape:"key-alt",zone:null},Space:{x:130,y:168,shape:"key-space",zone:null},AltRight:{x:501,y:168,shape:"key-alt-gr",zone:null},
ControlRight:{x:566,y:168,shape:"key-ctrl",zone:null}}},{}],60:[function(e,t,n){t.exports={Backquote:{x:0,y:0,shape:"key",zone:"z1"},Digit1:{x:42,y:0,shape:"key",zone:"z1"},Digit2:{x:84,y:0,
shape:"key",zone:"z2"},Digit3:{x:126,y:0,shape:"key",zone:"z3"},Digit4:{x:168,y:0,shape:"key",zone:"z4"},Digit5:{x:210,y:0,shape:"key",zone:"z4"},Digit6:{x:252,y:0,shape:"key",zone:"z5"},Digit7:{
x:294,y:0,shape:"key",zone:"z5"},Digit8:{x:336,y:0,shape:"key",zone:"z6"},Digit9:{x:378,y:0,shape:"key",zone:"z7"},Digit0:{x:420,y:0,shape:"key",zone:"z8"},Minus:{x:462,y:0,shape:"key",zone:"z8"},
Equal:{x:504,y:0,shape:"key",zone:"z8"},Backspace:{x:546,y:0,shape:"key-backspace",zone:null},Tab:{x:0,y:42,shape:"key-tab",zone:null},KeyQ:{x:65,y:42,shape:"key",zone:"z1"},KeyW:{x:107,y:42,
shape:"key",zone:"z2"},KeyE:{x:149,y:42,shape:"key",zone:"z3"},KeyR:{x:191,y:42,shape:"key",zone:"z4"},KeyT:{x:233,y:42,shape:"key",zone:"z4"},KeyY:{x:275,y:42,shape:"key",zone:"z5"},KeyU:{x:317,y:42,
shape:"key",zone:"z5"},KeyI:{x:359,y:42,shape:"key",zone:"z6"},KeyO:{x:401,y:42,shape:"key",zone:"z7"},KeyP:{x:443,y:42,shape:"key",zone:"z8"},BracketLeft:{x:485,y:42,shape:"key",zone:"z8"},
BracketRight:{x:527,y:42,shape:"key",zone:"z8"},Backslash:{x:569,y:42,shape:"key-backslash",zone:"z8"},CapsLock:{x:0,y:84,shape:"key-caps-lock",zone:null},KeyA:{x:72,y:84,shape:"key",zone:"z1"},KeyS:{
x:114,y:84,shape:"key",zone:"z2"},KeyD:{x:156,y:84,shape:"key",zone:"z3"},KeyF:{x:198,y:84,shape:"key",zone:"z4"},KeyG:{x:240,y:84,shape:"key",zone:"z4"},KeyH:{x:282,y:84,shape:"key",zone:"z5"},KeyJ:{
x:324,y:84,shape:"key",zone:"z5"},KeyK:{x:366,y:84,shape:"key",zone:"z6"},KeyL:{x:408,y:84,shape:"key",zone:"z7"},Semicolon:{x:450,y:84,shape:"key",zone:"z8"},Quote:{x:492,y:84,shape:"key",zone:"z8"},
Enter:{x:534,y:84,shape:"key-enter",zone:null},ShiftLeft:{x:0,y:126,shape:"key-left-shift",zone:null},KeyZ:{x:94,y:126,shape:"key",zone:"z1"},KeyX:{x:136,y:126,shape:"key",zone:"z2"},KeyC:{x:178,
y:126,shape:"key",zone:"z3"},KeyV:{x:220,y:126,shape:"key",zone:"z4"},KeyB:{x:262,y:126,shape:"key",zone:"z4"},KeyN:{x:304,y:126,shape:"key",zone:"z5"},KeyM:{x:346,y:126,shape:"key",zone:"z5"},Comma:{
x:388,y:126,shape:"key",zone:"z6"},Period:{x:430,y:126,shape:"key",zone:"z7"},Slash:{x:472,y:126,shape:"key",zone:"z8"},ShiftRight:{x:514,y:126,shape:"key-right-shift",zone:null},ControlLeft:{x:0,
y:168,shape:"key-ctrl",zone:null},AltLeft:{x:65,y:168,shape:"key-alt",zone:null},Space:{x:130,y:168,shape:"key-space",zone:null},AltRight:{x:501,y:168,shape:"key-alt",zone:null},ControlRight:{x:566,
y:168,shape:"key-ctrl",zone:null}}},{}],59:[function(e,t,n){t.exports={NumLock:{x:792,y:0,shape:"key-np-num-lock",zone:null},NumpadDivide:{x:834,y:0,shape:"key-np-divide",zone:null},NumpadMultiply:{
x:876,y:0,shape:"key-np-multiply",zone:null},NumpadSubtract:{x:918,y:0,shape:"key-np-subtract",zone:null},Numpad7:{x:792,y:42,shape:"key-np-7",zone:null},Numpad8:{x:834,y:42,shape:"key-np-8",zone:null
},Numpad9:{x:876,y:42,shape:"key-np-9",zone:null},NumpadAdd:{x:918,y:42,shape:"key-np-add",zone:null},Numpad4:{x:792,y:84,shape:"key-np-4",zone:null},Numpad5:{x:834,y:84,shape:"key-np-5",zone:null},
Numpad6:{x:876,y:84,shape:"key-np-6",zone:null},Numpad1:{x:792,y:126,shape:"key-np-1",zone:null},Numpad2:{x:834,y:126,shape:"key-np-2",zone:null},Numpad3:{x:876,y:126,shape:"key-np-3",zone:null},
NumpadEnter:{x:918,y:126,shape:"key-np-enter",zone:null},Numpad0:{x:792,y:168,shape:"key-np-0",zone:null},NumpadDecimal:{x:876,y:168,shape:"key-np-decimal",zone:null}}},{}],58:[function(e,t,n){
t.exports={ArrowUp:{x:690,y:126,shape:"key-up",zone:null},ArrowLeft:{x:648,y:168,shape:"key-left",zone:null},ArrowDown:{x:690,y:168,shape:"key-down",zone:null},ArrowRight:{x:732,y:168,
shape:"key-right",zone:null}}},{}],57:[function(e,t,n){t.exports={Insert:{x:648,y:0,shape:"key-insert",zone:null},Home:{x:690,y:0,shape:"key-home",zone:null},PageUp:{x:732,y:0,shape:"key-page-up",
zone:null},Delete:{x:648,y:42,shape:"key-delete",zone:null},End:{x:690,y:42,shape:"key-end",zone:null},PageDown:{x:732,y:42,shape:"key-page-down",zone:null}}},{}],51:[function(e,t,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0});var a=e("../../lib/lang");n.byId=function(e,t,n){for(var r in e){var i=e[r];if(i.id===t)return i}if(a.isUndefined(n))throw new Error;return n},
n.byXId=function(e,t,n){for(var r in e){var i=e[r];if(i.xid===t)return i}if(a.isUndefined(n))throw new Error;return n}},{"../../lib/lang":139}],4:[function(e,t,n){"use strict";function a(e,t,n){
return Object.freeze({id:e,xid:t,name:n,toString:function(){return e}})}Object.defineProperty(n,"__esModule",{value:!0})
;var r=e("../../lib/lang"),i=a("en",16,"English"),o=a("de",32,"German"),s=a("fr",48,"French"),c=a("it",64,"Italian"),l=a("es",80,"Spanish"),u=a("pt",96,"Portuguese"),d=a("ru",112,"Russian")
;n.LANGUAGE=Object.freeze(r.map({EN:i,DE:o,FR:s,IT:c,ES:l,PT:u,RU:d}))},{"../../lib/lang":139}],139:[function(e,t,n){"use strict";function a(e){return i.call(e).match(/^\[object (.+)\]$/)[1]}
function r(e){return null!==e&&typeof e===n.S_OBJECT}Object.defineProperty(n,"__esModule",{value:!0}),n.S_UNDEFINED="undefined",n.S_STRING="string",n.S_NUMBER="number",n.S_BOOLEAN="boolean",
n.S_OBJECT="object",n.S_FUNCTION="function";var i=Object.prototype.toString;n.getType=a,n.isUndefined=function(e){return typeof e===n.S_UNDEFINED},n.isString=function(e){return typeof e===n.S_STRING},
n.isNumber=function(e){return typeof e===n.S_NUMBER},n.isBoolean=function(e){return typeof e===n.S_BOOLEAN},n.isObject=function(e){return null!==e&&typeof e===n.S_OBJECT&&!Array.isArray(e)},
n.isFunction=function(e){return typeof e===n.S_FUNCTION},n.isObjectLike=r,n.isPlainObject=function(e){if(r(e)&&"Object"===a(e)){var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}
return!1},n.map=function(e){return Object.assign(Object.create(null),e)}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={title:"Jabberwocky",
content:'Jabberwocky\n\n\'Twas brillig, and the slithy toves\nDid gyre and gimble in the wabe;\nAll mimsy were the borogoves,\nAnd the mome raths outgrabe.\n\n"Beware the Jabberwock, my son!\nThe jaws that bite, the claws that catch!\nBeware the Jubjub bird, and shun\nThe frumious Bandersnatch!"\n\nHe took his vorpal sword in hand:\nLong time the manxome foe he sought-\nSo rested he by the Tumtum tree,\nAnd stood awhile in thought.\n\nAnd as in uffish thought he stood,\nThe Jabberwock, with eyes of flame,\nCame whiffling through the tulgey wood,\nAnd burbled as it came!\n\nOne, two! One, two! and through and through\nThe vorpal blade went snicker-snack!\nHe left it dead, and with its head\nHe went galumphing back.\n\n"And hast thou slain the Jabberwock?\nCome to my arms, my beamish boy!\nO frabjous day! Callooh! Callay!"\nHe chortled in his joy.\n\n\'Twas brillig, and the slithy toves\nDid gyre and gimble in the wabe;\nAll mimsy were the borogoves,\nAnd the mome raths outgrabe.'
},r={title:"Lorem Ipsum",
content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas libero non laoreet scelerisque. Mauris nec sodales velit. Quisque mattis eu nulla varius accumsan. Sed interdum erat eu justo sodales, vel hendrerit diam pretium. Phasellus lacus libero, scelerisque quis enim eget, tempus elementum massa. Aenean elementum nec magna at fringilla. Nam nisl eros, viverra et luctus eget, placerat non velit. Cras ante velit, mattis quis porttitor nec, pellentesque eu sem. Aenean blandit consectetur metus ut bibendum.Aliquam in suscipit erat. Praesent non vulputate tortor, ac semper diam."
},i={title:"A Short Story",
content:"Imagine all human beings swept off the face of the earth, excepting one man. Imagine this man in some vast city, New York or London. Imagine him on the third or fourth day of his solitude sitting in a house and hearing a ring at the door-bell!"
};n.EXAMPLE_TEXT=[a,r,i],n.EXAMPLE_URL=[{title:"Random Wikipedia article",url:"https://en.wikipedia.org/wiki/Special:Random"},{title:"nytimes.com",url:"http://www.nytimes.com/"},{title:"theonion.com",
url:"http://www.theonion.com/"}]},{}],1:[function(e,t,n){"use strict";function a(){return __env}Object.defineProperty(n,"__esModule",{value:!0});var r={id:null,email:null,userName:null,fullName:null,
externalId:{}};n.currentEnv=a,n.currentUser=function(){var e=a();return null!=e.user?e.user:r}},{}]},{},[217]);
//# sourceMappingURL=practice.js.map