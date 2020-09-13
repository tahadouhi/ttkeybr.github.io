require=function e(t,a,n){function r(c,o){if(!a[c]){if(!t[c]){var s="function"==typeof require&&require;if(!o&&s)return s(c,!0);if(i)return i(c,!0);var l=new Error("Cannot find module '"+c+"'")
;throw l.code="MODULE_NOT_FOUND",l}var u=a[c]={exports:{}};t[c][0].call(u.exports,function(e){return r(t[c][1][e]||e)},u,u.exports,e,t,a,n)}return a[c].exports}
for(var i="function"==typeof require&&require,c=0;c<n.length;c++)r(n[c]);return r}({213:[function(e,t,a){"use strict";function n(e){o.mountApp(s.createElement(i.Connector,{user:e})),o.mountMenu(e)}
Object.defineProperty(a,"__esModule",{value:!0}),e("../lib/runtime/polyfill");var r=e("../common/env"),i=e("../common/multiplayer/connector"),c=e("./init"),o=e("./mount"),s=e("react")
;c.init(function(){n(r.currentUser())})},{"../common/env":1,"../common/multiplayer/connector":6,"../lib/runtime/polyfill":147,"./init":210,"./mount":217,react:"react"}],217:[function(e,t,a){
"use strict";Object.defineProperty(a,"__esModule",{value:!0}),e("../lib/runtime/polyfill")
;var n=e("../lib/runtime/global"),r=e("../lib/dom"),i=e("../lib/ui/static"),c=e("./page/error"),o=e("./ui/avatar"),s=e("./ui/navmenu"),l=e("react"),u=e("react-dom"),d=r.one(n.DOCUMENT,"#App"),v=r.one(n.DOCUMENT,"#Nav")
;c.initErrorPage(d),a.mountApp=function(e){u.render(e,d)},a.mountMenu=function(e){u.render(l.createElement(s.NavMenu,{avatar:o.userAvatar(e)}),v)},a.getMarkup=function(e){var t=r.one(d,e).outerHTML
;return l.createElement(i.StaticMarkup,{html:t})}},{"../lib/dom":130,"../lib/runtime/global":145,"../lib/runtime/polyfill":147,"../lib/ui/static":170,"./page/error":219,"./ui/avatar":228,
"./ui/navmenu":230,react:"react","react-dom":"react-dom"}],230:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0})
;var n=e("react"),r=e("../../res/icon/material-design/action/help"),i=e("../../res/icon/material-design/av/games"),c=e("../../res/icon/material-design/editor/insert_chart"),o=e("../../res/icon/material-design/hardware/toys"),s=e("../../res/icon/material-design/hardware/videogame_asset"),l=e("../thirdparty/facebook-like"),u=e("../thirdparty/google-webstore"),d=e("../thirdparty/social-shares"),v=e("./avatar"),b=[{
to:"/practice",icon:i.default,name:"Practice",title:"Practice typing lessons"},{to:"/profile",icon:c.default,name:"Profile",title:"See detailed statistics about your results"},{to:"/help",
icon:r.default,name:"Help",title:"Read instruction manual"},{to:"/high-scores",icon:o.default,name:"High Scores",title:"See the table of the fastest typists"},{to:"/multiplayer",icon:s.default,
name:"Multiplayer",title:"Play online against other users"}];a.NavMenu=function(e){var t=e.avatar,a=e.full,r=void 0===a||a;return n.createElement("div",{className:"NavMenu"},n.createElement("div",{
className:"NavMenu-item"},n.createElement(v.Avatar,{avatar:t})),b.map(function(e){return n.createElement("div",{key:e.to,className:"NavMenu-item"},n.createElement("a",{href:e.to,className:"NavLink",
title:e.title},n.createElement(e.icon,{className:"NavLink-icon"}),n.createElement("span",{className:"NavLink-label"},e.name)))}),r&&n.createElement("div",{className:"NavMenu-item"
},n.createElement(d.SocialShares,null)),r&&n.createElement("div",{className:"NavMenu-item"},n.createElement(l.FacebookLikeButton,{action:"like",colorScheme:"light",href:"http://www.keybr.com/",
layout:"button_count",size:"small",share:!1,showFaces:!1})),r&&u.GoogleWebStoreBadge.canInstall()&&n.createElement("div",{className:"NavMenu-item"},n.createElement(u.GoogleWebStoreBadge,null)))}},{
"../../res/icon/material-design/action/help":188,"../../res/icon/material-design/av/games":189,"../../res/icon/material-design/editor/insert_chart":196,
"../../res/icon/material-design/hardware/toys":197,"../../res/icon/material-design/hardware/videogame_asset":198,"../thirdparty/facebook-like":220,"../thirdparty/google-webstore":224,
"../thirdparty/social-shares":226,"./avatar":228,react:"react"}],226:[function(e,t,a){"use strict";function n(e){var t=e.onLoad,a=e.onError,n=e.onShare,r={
url:"https://www.facebook.com/sharer/sharer.php",params:{u:"url"},width:650,height:450};return v.createElement(E,{id:"facebook",icon:v.createElement(f.default,{className:"SocialShares-icon"}),
title:"Share this site on Facebook",config:r,onLoad:t,onError:a,onShare:n})}function r(e){var t=e.onLoad,a=e.onError,n=e.onShare,r={url:"https://twitter.com/intent/tweet",params:{url:"url",
text:"description"},width:600,height:300};return v.createElement(E,{id:"twitter",icon:v.createElement(m.default,{className:"SocialShares-icon"}),title:"Share this site on Twitter",config:r,onLoad:t,
onError:a,onShare:n})}function i(e){var t=e.onLoad,a=e.onError,n=e.onShare,r={url:"https://plus.google.com/share",params:{url:"url"},width:600,height:600};return v.createElement(E,{id:"googleplus",
icon:v.createElement(k.default,{className:"SocialShares-icon"}),title:"Share this site on Google+",config:r,onLoad:t,onError:a,onShare:n})}function c(e){var t=e.onLoad,a=e.onError,n=e.onShare,r={
url:"https://www.linkedin.com/shareArticle",params:{url:"url",text:"description",mini:"true"},width:650,height:500};return v.createElement(E,{id:"linkedin",icon:v.createElement(p.default,{
className:"SocialShares-icon"}),title:"Share this site on LinkedIn",config:r,onLoad:t,onError:a,onShare:n})}function o(e){for(var t=y.map(),a=0,n=Object.keys(e);a<n.length;a++){var r=n[a];t[r]=g[e[r]]
}return t}function s(e){for(var t=[],a=0,n=Object.entries(e);a<n.length;a++){var r=n[a],i=r[0],c=r[1];t.push(i+"="+String(c))}return t.join(",")}Object.defineProperty(a,"__esModule",{value:!0})
;var l=e("tslib"),u=e("classnames"),d=e("prop-types"),v=e("react"),b=e("../../lib/http/url"),y=e("../../lib/lang"),f=e("../../res/icon/custom/social/facebook"),k=e("../../res/icon/custom/social/googleplus"),p=e("../../res/icon/custom/social/linkedin"),m=e("../../res/icon/custom/social/twitter"),h=e("./meta"),g=y.map({
url:h.OPENGRAPH_URL,title:h.OPENGRAPH_TITLE,description:h.OPENGRAPH_DESCRIPTION}),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l.__extends(t,e),
t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return v.createElement("div",{className:"SocialShares"
},v.createElement(n,null),v.createElement(r,null),v.createElement(i,null),v.createElement(c,null))},t}(v.Component);a.SocialShares=K,a.FacebookButton=n,a.TwitterButton=r,a.GooglePlusButton=i,
a.LinkedInButton=c;var E=function(e){function t(t,a){var n=e.call(this,t,a)||this;return n.state={count:null},n}return l.__extends(t,e),t.prototype.render=function(){function e(){
var e=Math.round(screen.width/2-i.width/2),t=Math.round(screen.height/2-i.height/2),a=i.width,n=i.height,r=open(l,"SocialShares",s({left:e,top:t,width:a,height:n,personalbar:0,toolbar:0,scrollbars:1,
resizable:1}));r?r.focus():location.href=l}var t=this.props,a=t.id,n=t.icon,r=t.title,i=t.config,c=t.onShare,l=b.parseUri(i.url,o(i.params));return v.createElement("a",{
className:u("SocialShares-widget",a),href:l,title:r,onClick:function(t){t.preventDefault(),e(),c()}},n)},t.propTypes={onLoad:d.func,onError:d.func,onShare:d.func},t.defaultProps={onLoad:function(){},
onError:function(){},onShare:function(){}},t}(v.Component)},{"../../lib/http/url":136,"../../lib/lang":139,"../../res/icon/custom/social/facebook":183,"../../res/icon/custom/social/googleplus":184,
"../../res/icon/custom/social/linkedin":185,"../../res/icon/custom/social/twitter":186,"./meta":225,classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],
224:[function(e,t,a){"use strict";function n(e){e.preventDefault(),l.install()}function r(){location.reload(!1)}function i(e,t){"userCancelled"!=t&&(console.log("Cannot install application:",e,t),
alert("Cannot install application:\n"+e))}Object.defineProperty(a,"__esModule",{value:!0});var c=e("tslib"),o=e("react"),s=e("./meta"),l=function(e){function t(){
return null!==e&&e.apply(this,arguments)||this}return c.__extends(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return o.createElement("a",{
className:"WebStoreBadge",href:s.CHROME_WEBSTORE_ITEM,target:"web-store",title:"Install this application to your computer from the Chrome Web Store",onClick:n},o.createElement("img",{
className:"WebStoreBadge-image",src:"/res/image/webstore/ChromeWebStore_Badge_v2_496x150.png"}))},t.canInstall=function(){try{
return null!=chrome&&null!=chrome.webstore&&null!=chrome.app&&0==chrome.app.isInstalled}catch(e){return!1}},t.install=function(){t.canInstall()&&chrome.webstore.install(s.CHROME_WEBSTORE_ITEM,r,i)},t
}(o.Component);a.GoogleWebStoreBadge=l},{"./meta":225,react:"react",tslib:"tslib"}],220:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0})
;var n=e("tslib"),r=e("prop-types"),i=e("react"),c=e("./facebook-sdk"),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),
t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.componentDidMount=function(){var e=this;c.loadSdk().then(function(){var t=e.refs.root;t&&FB.XFBML.parse(t)})},
t.prototype.render=function(){var e=this.props,t=e.action,a=e.colorScheme,n=e.href,r=e.layout,c=e.size,o=e.share,s=e.showFaces,l=e.width;return i.createElement("div",{ref:"root",
className:"FacebookLikeButton"},i.createElement("div",{className:"fb-like","data-action":t,"data-colorscheme":a,"data-href":n,"data-layout":r,"data-size":c,"data-share":o,"data-show-faces":s,
"data-width":l}))},t.propTypes={action:r.string,colorScheme:r.string,href:r.string,layout:r.string,size:r.string,share:r.bool,showFaces:r.bool,width:r.number},t.defaultProps={action:"like",
colorScheme:"light",layout:"standard",size:"small",share:!1,showFaces:!1},t}(i.Component);a.FacebookLikeButton=o},{"./facebook-sdk":221,"prop-types":"prop-types",react:"react",tslib:"tslib"}],
221:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("../../lib/runtime/global"),r=e("./meta"),i=null;a.loadSdk=function(){
return null==i&&(i=new Promise(function(e,t){n.WINDOW.fbAsyncInit=function(){FB.init({appId:r.FACEBOOK_APP_ID,version:"v2.7"}),console.log("Loaded Facebook SDK"),e(FB)}
;var a=n.DOCUMENT.createElement("script");a.src="https://connect.facebook.net/en_US/sdk.js",a.addEventListener("error",function(e){console.log("Error loading Facebook SDK"),t()}),
n.HEAD_ELEMENT.appendChild(a)})),i}},{"../../lib/runtime/global":145,"./meta":225}],225:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0})
;var n=e("../../common/env"),r=e("../../lib/dom"),i=e("../../lib/lang"),c=e("../../lib/runtime/global");a.META=Object.freeze(i.map(n.currentEnv().meta)),
a.CHROME_WEBSTORE_ITEM=a.META.CHROME_WEBSTORE_ITEM,a.FACEBOOK_APP_ID=a.META.FACEBOOK_APP_ID,a.OPENGRAPH_URL=a.META.OPENGRAPH_URL,a.OPENGRAPH_SITE_NAME=a.META.OPENGRAPH_SITE_NAME,
a.OPENGRAPH_TITLE=a.META.OPENGRAPH_TITLE,a.OPENGRAPH_DESCRIPTION=a.META.OPENGRAPH_DESCRIPTION,a.OPENGRAPH_IMAGE=a.META.OPENGRAPH_IMAGE,a.validateMeta=function(){function e(e,t){if(e!=t)throw new Error
}e(a.CHROME_WEBSTORE_ITEM,r.getAttr(r.one(c.DOCUMENT,"link[rel='chrome-webstore-item']"),"href")),e(a.FACEBOOK_APP_ID,r.getAttr(r.one(c.DOCUMENT,"meta[property='fb:app_id']"),"content")),
e(a.OPENGRAPH_URL,r.getAttr(r.one(c.DOCUMENT,"meta[property='og:type']"),"content")),e(a.OPENGRAPH_SITE_NAME,r.getAttr(r.one(c.DOCUMENT,"meta[property='og:url']"),"content")),
e(a.OPENGRAPH_SITE_NAME,r.getAttr(r.one(c.DOCUMENT,"meta[property='og:site_name']"),"content")),e(a.OPENGRAPH_TITLE,r.getAttr(r.one(c.DOCUMENT,"meta[property='og:title']"),"content")),
e(a.OPENGRAPH_DESCRIPTION,r.getAttr(r.one(c.DOCUMENT,"meta[property='og:title']"),"content")),e(a.OPENGRAPH_IMAGE,r.getAttr(r.one(c.DOCUMENT,"meta[property='og:image']"),"content"))}},{
"../../common/env":1,"../../lib/dom":130,"../../lib/lang":139,"../../lib/runtime/global":145}],219:[function(e,t,a){"use strict";function n(e){var t=e.reason;return i.createElement("article",{
className:"Article"},i.createElement("h1",null,"Error"),i.createElement("p",null,"Something bad has happened."),i.createElement("pre",null,r(t)))}function r(e){function t(e){
return e&&e.message?e.message:String(e)}return function(e){var a=[];for(a.push(t(e));e=e.cause;)a.push("Because: "+t(e));return a}(e).join("\n")}Object.defineProperty(a,"__esModule",{value:!0})
;var i=e("react"),c=e("react-dom"),o=e("../../lib/promise");a.initErrorPage=function(e){o.useTrap(function(t){c.render(n({reason:t}),e,function(){console.error(t)})})}},{"../../lib/promise":144,
react:"react","react-dom":"react-dom"}],210:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0})
;var n=e("./error-log"),r=e("./thirdparty/google-ads"),i=e("./thirdparty/google-analytics"),c=e("./thirdparty/telemetry");a.init=function(e){n.init(),e();var t=r.load();i.init(function(e){
t.then(function(){},function(){})}),c.meterTrackers(t)}},{"./error-log":209,"./thirdparty/google-ads":222,"./thirdparty/google-analytics":223,"./thirdparty/telemetry":227}],227:[function(e,t,a){
"use strict";function n(e){return r.POST("/telemetry").sendJson(e)}Object.defineProperty(a,"__esModule",{value:!0});var r=e("../../lib/http/request");e("../../lib/runtime/global"),
a.meterTrackers=function(e){return Promise.all([e.then(function(e){return e?"ads_enabled":"ads_disabled"},function(e){return"ads_blocked"})]).then(function(e){return n(e)})}},{
"../../lib/http/request":135,"../../lib/runtime/global":145}],223:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("../../lib/runtime/global");a.init=function(e){
var t,a;"string"==typeof(t=n.WINDOW.GoogleAnalyticsObject)&&"function"==typeof(a=n.WINDOW[t])&&a(e)}},{"../../lib/runtime/global":145}],222:[function(e,t,a){"use strict";function n(){
return["<h1>Please disable ad-blocker!</h1>","<p>You may not like this ad, but it supports the developer and keeps this site free.</p>"].join("\n")}Object.defineProperty(a,"__esModule",{value:!0})
;var r=e("../../lib/dom"),i=e("../../lib/runtime/global"),c=e("../../lib/runtime/timer");a.load=function(){return new Promise(function(e,t){c.systemTimer.setTimeout(function(){
var a=r.any(i.DOCUMENT,".Supporter iframe"),c=r.any(i.DOCUMENT,".Supporter-placeholder");c.length?a.length?(r.setStyle(c,"visibility","hidden"),r.empty(c),e(!0)):(r.setStyle(c,"visibility","visible"),
r.setHtml(c,n()),t(new Error("Ad blocker detected"))):e(!1)},1e3)})}},{"../../lib/dom":130,"../../lib/runtime/global":145,"../../lib/runtime/timer":156}],209:[function(e,t,a){"use strict"
;function n(e,t,a,o,u){if(null==l||l!=u){l=u,s.WINDOW.onerror=r;try{t&&-1!=t.indexOf(document.domain)&&c({userAgent:navigator.userAgent,message:e,uri:t,line:a,column:o,stack:i(u)})}finally{
s.WINDOW.onerror=n}}return!1}function r(){return!1}function i(e){if(e instanceof Error)return o.StackFrame.parse(e);try{throw new Error("stack frame")}catch(e){var t=o.StackFrame.parse(e)
;return t.length&&t.shift(),t.length&&t.shift(),t}}function c(e){var t=new XMLHttpRequest;t.open("POST","/log",!0),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e))}
Object.defineProperty(a,"__esModule",{value:!0});var o=e("../lib/debug"),s=e("../lib/runtime/global"),l=null;a.init=function(){s.WINDOW.onerror=n},a.log=function(e){l=e,c({
userAgent:navigator.userAgent,message:String(e),uri:String(location),stack:i(e)})}},{"../lib/debug":127,"../lib/runtime/global":145}],198:[function(e,t,a){"use strict"
;Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../../SvgIcon"),i=e("react");a.default=function(e){return i.createElement(r.SvgIcon,n.__assign({},e),i.createElement("path",{
d:"M42 12H6c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM22 26h-6v6h-4v-6H6v-4h6v-6h4v6h6v4zm9 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8-6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],197:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;a.default=function(e){return i.createElement(r.SvgIcon,n.__assign({},e),i.createElement("path",{
d:"M24 24c0-6.1 4.9-11 11-11s11 4.9 11 11H24zm0 0c0 6.1-4.9 11-11 11S2 30.1 2 24h22zm0 0c-6.1 0-11-4.9-11-11S17.9 2 24 2v22zm0 0c6.1 0 11 4.9 11 11s-4.9 11-11 11V24z"}))}},{"../../SvgIcon":175,
react:"react",tslib:"tslib"}],196:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../../SvgIcon"),i=e("react");a.default=function(e){
return i.createElement(r.SvgIcon,n.__assign({},e),i.createElement("path",{
d:"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM18 34h-4V20h4v14zm8 0h-4V14h4v20zm8 0h-4v-8h4v8z"}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"
}],189:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../../SvgIcon"),i=e("react");a.default=function(e){
return i.createElement(r.SvgIcon,n.__assign({},e),i.createElement("path",{d:"M30 15V4H18v11l6 6 6-6zm-15 3H4v12h11l6-6-6-6zm3 15v11h12V33l-6-6-6 6zm15-15l-6 6 6 6h11V18H33z"}))}},{"../../SvgIcon":175,
react:"react",tslib:"tslib"}],188:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../../SvgIcon"),i=e("react");a.default=function(e){
return i.createElement(r.SvgIcon,n.__assign({},e),i.createElement("path",{
d:"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 34h-4v-4h4v4zm4.13-15.49l-1.79 1.84C26.9 25.79 26 27 26 30h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 20.1 28 19.1 28 18c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],186:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;a.default=function(e){return i.createElement(r.SvgIcon,n.__assign({},e,{viewBox:"0 0 64 64"}),i.createElement("path",{
d:"M52.92 29.935c3.039-.251 5.1-1.632 5.893-3.507-1.096.674-4.498 1.408-6.377.709-.092-.442-.195-.861-.296-1.24-1.432-5.257-6.334-9.493-11.47-8.98a21.816 21.816 0 0 1 1.257-.465c.565-.203 3.882-.742 3.36-1.913-.44-1.03-4.493.778-5.256 1.014 1.007-.378 2.673-1.03 2.851-2.188-1.543.212-3.058.942-4.229 2.003.423-.455.744-1.01.812-1.606-4.117 2.63-6.521 7.93-8.467 13.074-1.528-1.481-2.882-2.647-4.097-3.295-3.408-1.828-7.484-3.734-13.88-6.11-.197 2.117 1.046 4.931 4.628 6.803-.776-.104-2.195.128-3.33.4.462 2.424 1.972 4.422 6.059 5.388-1.868.123-2.833.548-3.708 1.464.85 1.687 2.926 3.671 6.66 3.264-4.151 1.79-1.693 5.103 1.686 4.609-5.763 5.952-14.849 5.515-20.066.536 13.622 18.562 43.232 10.977 47.645-6.901 3.306.028 5.25-1.145 6.455-2.439-1.905.323-4.666-.01-6.13-.62z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],185:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;a.default=function(e){return i.createElement(r.SvgIcon,n.__assign({},e,{viewBox:"0 0 64 64"}),i.createElement("path",{
d:"M49.038 12.01H14.963c-1.631 0-2.954 1.281-2.954 2.864v34.251c0 1.583 1.323 2.866 2.954 2.866h34.075c1.632 0 2.953-1.284 2.953-2.866V14.874c0-1.582-1.321-2.865-2.953-2.865zM24.131 45.476H18.09V27.425h6.04v18.052zm-3.02-20.518h-.04c-2.027 0-3.34-1.385-3.34-3.12 0-1.77 1.352-3.117 3.418-3.117s3.337 1.348 3.377 3.117c0 1.735-1.31 3.12-3.415 3.12zm24.795 20.518h-6.039v-9.658c0-2.427-.875-4.083-3.059-4.083-1.67 0-2.662 1.117-3.098 2.196-.16.385-.2.923-.2 1.462v10.082H27.47s.08-16.358 0-18.051h6.039v2.56c.802-1.23 2.234-2.985 5.441-2.985 3.975 0 6.955 2.579 6.955 8.126v10.35zM33.471 30.042a.958.958 0 0 1 .039-.058v.058h-.039z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],184:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;a.default=function(e){return i.createElement(r.SvgIcon,n.__assign({},e,{viewBox:"0 0 64 64"}),i.createElement("path",{
d:"M45.748 29.808h-18.41v6.137H38.57c-1.676 5.335-6.66 9.206-12.548 9.206-7.263 0-13.15-5.888-13.15-13.151s5.887-13.15 13.15-13.15a13.11 13.11 0 0 1 9.35 3.903l4.454-4.842a19.66 19.66 0 0 0-13.804-5.637C15.128 12.274 6.296 21.106 6.296 32c0 10.894 8.832 19.726 19.726 19.726 9.543 0 17.899-6.777 19.727-15.78v-6.138zm11.956-.01h-3.766v-3.766H50.71v3.766h-3.766v3.227h3.766v3.766h3.228v-3.766h3.766z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],183:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../../SvgIcon"),i=e("react")
;a.default=function(e){return i.createElement(r.SvgIcon,n.__assign({},e,{viewBox:"0 0 64 64"}),i.createElement("path",{
d:"M51.974 18.685c0-3.499-3.159-6.659-6.658-6.659H18.684c-3.499 0-6.658 3.16-6.658 6.659v26.63c0 3.499 3.159 6.659 6.659 6.659H32V36.882h-4.882v-6.657H32V27.63c0-4.474 3.36-8.503 7.49-8.503h5.382v6.658H39.49c-.589 0-1.276.715-1.276 1.786v2.653h6.658v6.657h-6.658v15.092h7.102c3.499 0 6.658-3.16 6.658-6.659v-26.63z"
}))}},{"../../SvgIcon":175,react:"react",tslib:"tslib"}],170:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("react"),i=function(e){function t(){
return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.html}})},t
}(r.PureComponent);a.StaticMarkup=i},{react:"react",tslib:"tslib"}],127:[function(e,t,a){"use strict";function n(e){var t=String(e)+"\n",a=e.stack;return a.startsWith(t)&&(a=a.substring(t.length)),
a.split("\n").map(r).filter(function(e){return null!=e})}function r(e){var t;if(-1!=e.indexOf("@")){
if(t=e.match(/(.+)@(.+) line (\d+) .+ eval:(\d+):(\d+)$/i))return new o(c(t[1]),null,Number(t[4]),Number(t[5]))
;if(t=e.match(/@(.+) line (\d+) .+ eval:(\d+):(\d+)$/i))return new o(null,null,Number(t[3]),Number(t[4]));if(t=e.match(/^(.+)@(.+):(\d+):(\d+)$/i))return new o(c(t[1]),t[2],Number(t[3]),Number(t[4]))
;if(t=e.match(/^@(.+):(\d+):(\d+)$/i))return new o(null,t[1],Number(t[2]),Number(t[3]))}if(-1!=e.indexOf("at ")){
if(t=e.match(/^[ \t]+at (.+) \(eval at (.+) \((.+):(\d+):(\d+)\), (.+):(\d+):(\d+)\)$/i))return new o(i(t[1]),null,Number(t[7]),Number(t[8]))
;if(t=e.match(/^[ \t]+at (.+) \((.+):(\d+):(\d+)\)$/i))return new o(i(t[1]),t[2],Number(t[3]),Number(t[4]))
;if(t=e.match(/^[ \t]+at (.+):(\d+):(\d+)$/i))return new o(null,t[1],Number(t[2]),Number(t[3]))}return null}function i(e){if(e.endsWith("<anonymous>"))return null;var t=e.toLowerCase()
;return"object.eval"==t?null:"eval code"==t?null:"anonymous function"==t?null:e}function c(e){return e}Object.defineProperty(a,"__esModule",{value:!0});var o=function(){function e(e,t,a,n){
this.name=e,this.uri=t,this.line=a,this.column=n}return e.prototype.toString=function(){var e="";return e=null!=this.name?this.name:"<anonymous>",null!=this.uri?e=e+"@"+this.uri:e+="@<anonymous>",
null!=this.line&&null!=this.column&&(e=e+":"+this.line+":"+this.column),e},e.parse=function(e){try{if("string"==typeof e.stack)return n(e)}catch(e){console.error(e)}return[]},e}();a.StackFrame=o},{}],
130:[function(e,t,a){"use strict";function n(e){return"Empty match: '"+e+"'"}function r(e){var t=e.lastIndexOf(":");return-1!=t?{prefix:e.substring(0,t),localName:e.substring(t+1)}:{prefix:null,
localName:e}}function i(e){var t=r(e),n=t.prefix,i=t.localName;if(null!=n){var c=a.NS_URI[n];if(null==c)throw new Error("Unknown namespace '"+n+"'");return{name:i,nsUri:c}}return{name:e,nsUri:null}}
function c(e,t){if(Array.isArray(e))for(var a=0,n=e;a<n.length;a++)o(n[a],t);else o(e,t)}function o(e,t){e.textContent=String(t)}function s(e,t){
if(Array.isArray(e))for(var a=0,n=e;a<n.length;a++)l(n[a],t);else l(e,t)}function l(e,t){if(!P(e))throw new TypeError;e.innerHTML=String(t)}function u(e,t,a){
if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)d(r[n],t,a);else d(e,t,a)}function d(e,t,a){var n=i(t);null!=n.nsUri?e.setAttributeNS(n.nsUri,n.name,String(a)):e.setAttribute(n.name,String(a))}
function v(e,t){if(Array.isArray(e))for(var a=0,n=e;a<n.length;a++)b(n[a],t);else b(e,t)}function b(e,t){for(var a=0,n=Object.entries(t);a<n.length;a++){var r=n[a];u(e,r[0],r[1])}}function y(e,t){
var a=i(t);null!=a.nsUri?e.removeAttributeNS(a.nsUri,a.name):e.removeAttribute(a.name)}function f(e,t){if(P(e))return e.classList.contains(t);if(B(e))return-1!=L(e.className.baseVal).indexOf(t)
;throw new TypeError}function k(e,t){if(Array.isArray(e))for(var a=0,n=e;a<n.length;a++)p(n[a],t);else p(e,t)}function p(e,t){j(t).forEach(function(t){L(t).forEach(function(t){m(e,t)})})}
function m(e,t){if(P(e))e.classList.add(t);else{if(!B(e))throw new TypeError;var a=L(e.className.baseVal);-1==a.indexOf(t)&&(a.push(t),e.className.baseVal=a.join(" "))}}function h(e,t){
j(t).forEach(function(t){L(t).forEach(function(t){g(e,t)})})}function g(e,t){if(P(e))e.classList.remove(t);else{if(!B(e))throw new TypeError;var a=L(e.className.baseVal),n=void 0
;-1!=(n=a.indexOf(t))&&(a.splice(n,1),e.className.baseVal=a.join(" "))}}function K(e,t){j(t).forEach(function(t){L(t).forEach(function(t){E(e,t)})})}function E(e,t){if(P(e))e.classList.toggle(t);else{
if(!B(e))throw new TypeError;var a=L(e.className.baseVal),n=void 0;-1!=(n=a.indexOf(t))?a.splice(n,1):a.push(t),e.className.baseVal=a.join(" ")}}function _(e,t,a){
if(Array.isArray(e))for(var n=0,r=e;n<r.length;n++)N(r[n],t,a);else N(e,t,a)}function N(e,t,a){var n=e.style;n[I(n,t)]=String(a)}function D(e,t){
if(Array.isArray(e))for(var a=0,n=e;a<n.length;a++)S(n[a],t);else S(e,t)}function S(e,t){for(var a=0,n=Object.entries(t);a<n.length;a++){var r=n[a];_(e,r[0],r[1])}}function I(e,t){
var a=U.toCamelCase(t);if(a in e)return a;if(a in H)return H[a];for(var n,r=["Webkit","Moz","ms"],i=a[0].toUpperCase()+a.substring(1),c=0;c<r.length;c++)if((n=r[c]+i)in e)return H[a]=n;return a}
function O(e){for(var t;t=e.lastChild;)e.removeChild(t)}function A(e){var t=e.parentNode;t&&t.removeChild(e)}function w(e,t,a,n){
if(Array.isArray(e))for(var r=0,i=e;r<i.length;r++)C(i[r],t,a,n);else C(e,t,a,n)}function C(e,t,a,n){var r,i=t;-1!=(r=t.lastIndexOf(":"))&&(t=t.substring(r+1)),t=T(t);var c,o
;null==(c=e[G])&&Object.defineProperty(e,G,{value:c=Object.create(null)}),null==(o=c[i])&&(c[i]=o=[]);var s={target:e,type:t,listener:a,capture:!!n};return o.push(s),
e.addEventListener(s.type,s.listener,s.capture),s}function x(e,t,a,n){var r,i=t;-1!=(r=t.lastIndexOf(":"))&&(t=t.substring(r+1)),t=T(t);var c,o
;if(null!=(c=e[G])&&null!=(o=c[i]))for(var s=0;s<o.length;){var l=o[s];l.type!=t||null!=a&&a!==l.listener||null!=n&&n!==l.capture?s++:(e.removeEventListener(l.type,l.listener,l.capture),o.splice(s,1))
}}function T(e){return null==V&&(V=Object.create(null),!("AnimationEvent"in W.WINDOW)&&"WebKitAnimationEvent"in W.WINDOW&&(V.animationstart="webkitAnimationStart",
V.animationiteration="webkitAnimationIteration",V.animationend="webkitAnimationEnd")),e in V?V[e]:e}function z(e,t,a){for(var n,r,o=null,l=[];-1!=(n=e.lastIndexOf("."));)l.push(e.substring(n+1)),
e=e.substring(0,n);-1!=(n=e.indexOf("#"))&&(o=e.substring(n+1),e=e.substring(0,n));var u=i(e);if(r=null!=u.nsUri?W.DOCUMENT.createElementNS(u.nsUri,u.name):W.DOCUMENT.createElement(u.name),
o&&r.setAttribute("id",o),l.forEach(function(e){L(e).forEach(function(e){L(e).forEach(function(e){k(r,e)})})}),F.isObject(t)){if(F.isString(t.id)&&r.setAttribute("id",t.id),
j(t.classList).forEach(function(e){L(e).forEach(function(e){k(r,e)})}),F.isObject(t.style)&&D(r,t.style),F.isObject(t.attr)&&v(r,t.attr),
F.isObject(t.event))for(var d=0,b=Object.entries(t.event);d<b.length;d++){var y=b[d],f=y[0],p=y[1];w(r,f,p)}if(F.isObject(t.prop))for(var m=0,h=Object.entries(t.prop);m<h.length;m++){
var g=h[m],f=g[0],p=g[1];r[f]=p}null!=t.text&&c(r,t.text),null!=t.html&&s(r,t.html),j(t.children).forEach(function(e){r.appendChild(M(e))})}return j(a).forEach(function(e){r.appendChild(M(e))}),r}
function M(e){if(e instanceof Node)return e;var t=String(e);return t.startsWith("<")?R(t):z(t)}function R(e){var t=W.DOCUMENT.createDocumentFragment(),a=W.DOCUMENT.createElement("body")
;for(s(a,e);a.firstChild;)t.appendChild(a.firstChild);return t}function P(e){return e instanceof HTMLElement}function B(e){return e instanceof SVGElement}function L(e){
return""==(e=e.trim())?[]:e.split(/\s+/)}function j(e){return null==e?[]:Array.isArray(e)?e:[e]}Object.defineProperty(a,"__esModule",{value:!0});var U=e("./id"),F=e("./lang"),W=e("./runtime/global")
;a.one=function(e,t){var a=e.querySelector(t);if(null==a)throw new Error(n(t));return a},a.all=function(e,t){var a=e.querySelectorAll(t);if(0==a.length)throw new Error(n(t));return Array.from(a)},
a.any=function(e,t){return Array.from(e.querySelectorAll(t))},a.NS_XML="http://www.w3.org/XML/1998/namespace",a.NS_XLINK="http://www.w3.org/1999/xlink",a.NS_HTML="http://www.w3.org/1999/xhtml",
a.NS_SVG="http://www.w3.org/2000/svg",a.NS_MATH="http://www.w3.org/1998/Math/MathML",a.NS_URI=F.map({xml:a.NS_XML,xlink:a.NS_XLINK,html:a.NS_HTML,svg:a.NS_SVG,math:a.NS_MATH}),a.parseQName=r,
a.resolveQName=i,a.setText=c,a.setHtml=s,a.hasAttr=function(e,t){var a=i(t);return null!=a.nsUri?e.hasAttributeNS(a.nsUri,a.name):e.hasAttribute(a.name)},a.getAttr=function(e,t){var a=i(t)
;return null!=a.nsUri?e.getAttributeNS(a.nsUri,a.name):e.getAttribute(a.name)},a.setAttr=u,a.setAttrMap=v,a.removeAttr=function(e,t){
if(Array.isArray(e))for(var a=0,n=e;a<n.length;a++)y(n[a],t);else y(e,t)},a.hasClass=function(e,t){return j(t).every(function(t){return L(t).every(function(t){return f(e,t)})})},a.addClass=k,
a.removeClass=function(e,t){if(Array.isArray(e))for(var a=0,n=e;a<n.length;a++)h(n[a],t);else h(e,t)},a.toggleClass=function(e,t){
if(Array.isArray(e))for(var a=0,n=e;a<n.length;a++)K(n[a],t);else K(e,t)},a.toggleClass0=K,a.setStyle=_,a.setStyleMap=D,a.getStyle=function(e,t){var a=getComputedStyle(e,null);return a[I(a,t)]}
;var H={float:"cssFloat"};a.empty=function(e){if(Array.isArray(e))for(var t=0,a=e;t<a.length;t++)O(a[t]);else O(e)},a.detach=function(e){
if(Array.isArray(e))for(var t=0,a=e;t<a.length;t++)A(a[t]);else A(e)},a.prepend=function(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];for(var n=e.firstChild,r=0,i=t;r<i.length;r++){
var c=i[r];e.insertBefore(c,n)}},a.append=function(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];for(var n=0,r=t;n<r.length;n++){var i=r[n];e.appendChild(i)}};var G="__listener__"
;a.on=w,a.off=function(e,t,a,n){if(Array.isArray(e))for(var r=0,i=e;r<i.length;r++)x(i[r],t,a,n);else x(e,t,a,n)};var V=null;a.eventName=T,a.make=z,a.text=function(e){
return W.DOCUMENT.createTextNode(e)},a.cast=M,a.parse=R,a.isHtml=P,a.isSvg=B},{"./id":137,"./lang":139,"./runtime/global":145}],137:[function(e,t,a){"use strict";function n(e){
return e.substring(0,1).toLowerCase()+e.substring(1)}function r(e){return e.substring(0,1).toUpperCase()+e.substring(1)}Object.defineProperty(a,"__esModule",{value:!0}),a.toFlat=function(e){
return e.split("-").map(function(e,t){return n(e)}).join("")},a.toCamelCase=function(e){return e.split("-").map(function(e,t){return 0===t?n(e):r(e)}).join("")},a.toPascalCase=function(e){
return e.split("-").map(function(e,t){return r(e)}).join("")}},{}],147:[function(e,t,a){"use strict";function n(e,t,a,n,r){t in e||Object.defineProperty(e,t,{value:a,configurable:r,writable:n})}
Object.defineProperty(a,"__esModule",{value:!0});var r=e("./global"),i=e("./polyfill/event");a.newCustomEvent=i.newCustomEvent,a.newEvent=i.newEvent
;var c=e("./polyfill/object"),o=e("./polyfill/array"),s=e("./polyfill/number"),l=e("./polyfill/string"),u=e("./polyfill/promise"),d=e("./polyfill/url"),v=e("./polyfill/fullscreen")
;n(Object,"assign",c.Object_assign,!0,!0),n(Object,"is",c.Object_is,!0,!0),n(Object,"values",c.Object_values,!0,!0),n(Object,"entries",c.Object_entries,!0,!0),n(Array,"from",o.Array_from,!0,!0),
n(Array,"of",o.Array_of,!0,!0),n(Array.prototype,"find",o.Array_find,!0,!0),n(Array.prototype,"findIndex",o.Array_findIndex,!0,!0),n(Number,"EPSILON",s.Number_EPSILON,!1,!1),
n(Number,"MIN_SAFE_INTEGER",s.Number_MIN_SAFE_INTEGER,!1,!1),n(Number,"MAX_SAFE_INTEGER",s.Number_MAX_SAFE_INTEGER,!1,!1),n(Number,"parseFloat",parseFloat,!0,!0),n(Number,"parseInt",parseInt,!0,!0),
n(Number,"isNaN",s.Number_isNaN,!0,!0),n(Number,"isFinite",s.Number_isFinite,!0,!0),n(Number,"isInteger",s.Number_isInteger,!0,!0),n(Number,"isSafeInteger",s.Number_isSafeInteger,!0,!0),
n(String.prototype,"startsWith",l.String_startsWith,!0,!0),n(String.prototype,"endsWith",l.String_endsWith,!0,!0),n(String.prototype,"includes",l.String_includes,!0,!0),
n(r.WINDOW,"Promise",u.default,!0,!0),d.default(),v.default()},{"./global":145,"./polyfill/array":148,"./polyfill/event":149,"./polyfill/fullscreen":150,"./polyfill/number":151,
"./polyfill/object":152,"./polyfill/promise":153,"./polyfill/string":154,"./polyfill/url":155}],155:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0})
;var n=e("../global"),r=n.WINDOW.URL;a.default=function(){try{if("http://a/b"==new URL("b","http://a").href)return}catch(e){}n.WINDOW.URL=i};var i=function(){function e(e,t){
if(!e)throw new TypeError("Invalid URL");var a=n.DOCUMENT.implementation.createHTMLDocument("");if(t){var r=a.createElement("base");r.href=t,a.head.appendChild(r)}var i=a.createElement("a")
;if(i.href=e,a.body.appendChild(i),":"==i.protocol||!/:/.test(i.href))throw new TypeError("Invalid URL");this._elem=i}return e.prototype.toString=function(){return this.href},
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
},e}()},{"../global":145}],154:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.String_startsWith=function(e,t){if(null==this)throw new TypeError
;if(e instanceof RegExp)throw new TypeError;e=String(e);var a=this.length,n=e.length,r=void 0!=t?0|t:0,i=Math.min(Math.max(r,0),a);if(i+n>a)return!1
;for(var c=0;c<n;c++)if(this.charCodeAt(i+c)!=e.charCodeAt(c))return!1;return!0},a.String_endsWith=function(e,t){if(null==this)throw new TypeError;if(e instanceof RegExp)throw new TypeError
;e=String(e);var a=this.length,n=e.length,r=void 0!=t?0|t:a,i=Math.min(Math.max(r,0),a)-n;if(i<0)return!1;for(var c=0;c<n;c++)if(this.charCodeAt(i+c)!=e.charCodeAt(c))return!1;return!0},
a.String_includes=function(e,t){if(null==this)throw new TypeError;if(e instanceof RegExp)throw new TypeError;e=String(e);var a=this.length,n=e.length,r=void 0!=t?0|t:0,i=Math.min(Math.max(r,0),a)
;return!(i+n>a)&&-1!=this.indexOf(e,i)}},{}],153:[function(e,t,a){"use strict";function n(e,t){var a=!1;try{e(function(e){a||(a=!0,i(t,e))},function(e){a||(a=!0,c(t,e))})}catch(e){if(a)return;a=!0,
c(t,e)}}function r(e,t){for(;e._state===f;)e=e._value;e._state!==v?(e._handled=!0,k(function(){var a=e._state===b?t.onFulfilled:t.onRejected;if(null!==a){var n;try{n=a(e._value)}catch(e){
return void c(t.promise,e)}i(t.promise,n)}else(e._state===b?i:c)(t.promise,e._value)})):e._deferreds.push(t)}function i(e,t){try{
if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var a=t.then;if(t instanceof p)return e._state=f,e._value=t,void o(e)
;if("function"==typeof a)return void n(l(a,t),e)}e._state=b,e._value=t,o(e)}catch(t){c(e,t)}}function c(e,t){e._state=y,e._value=t,o(e)}function o(e){
e._state===y&&0===e._deferreds.length&&k(function(){e._handled||u(e._value)});for(var t=0,a=e._deferreds.length;t<a;t++)r(e,e._deferreds[t]);e._deferreds=null}function s(){}function l(e,t){
return function(){e.apply(t,arguments)}}function u(e){console.warn("Possible Unhandled Promise Rejection:",e)}Object.defineProperty(a,"__esModule",{value:!0})
;var d=e("../global"),v=0,b=1,y=2,f=3,k="function"==typeof d.WINDOW.setImmediate?function(e){d.WINDOW.setImmediate(e)}:function(e){d.WINDOW.setTimeout(e)},p=function(){function e(e){
if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=v,this._handled=!1,this._value=void 0,
this._deferreds=[],n(e,this)}return e.prototype.then=function(t,a){var n=new e(s);return r(this,new m(t,a,n)),n},e.prototype.catch=function(e){return this.then(null,e)},e.resolve=function(t){
return t&&"object"==typeof t&&t.constructor===e?t:new e(function(e){e(t)})},e.reject=function(t){return new e(function(e,a){a(t)})},e.all=function(t){var a=Array.prototype.slice.call(t)
;return new e(function(e,t){function n(i,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var o=c.then;if("function"==typeof o)return void o.call(c,function(e){n(i,e)},t)}a[i]=c,0==--r&&e(a)
}catch(e){t(e)}}if(0===a.length)return e([]);for(var r=a.length,i=0;i<a.length;i++)n(i,a[i])})},e.race=function(t){return new e(function(e,a){for(var n=0,r=t.length;n<r;n++)t[n].then(e,a)})},e}()
;a.default=p;var m=function(e,t,a){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=a}},{"../global":145}],152:[function(e,t,a){"use strict"
;Object.defineProperty(a,"__esModule",{value:!0}),a.Object_assign=function(e){if(null==e)throw new TypeError;for(var t=Object(e),a=1;a<arguments.length;a++){var n=arguments[a]
;if(null!=n)for(var r=Object(n),i=0,c=Object.keys(r);i<c.length;i++){var o=c[i];t[o]=r[o]}}return t},a.Object_is=function(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t},a.Object_values=function(e){
if(null==e)throw new TypeError;for(var t=Object(e),a=[],n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];a.push(t[i])}return a},a.Object_entries=function(e){if(null==e)throw new TypeError
;for(var t=Object(e),a=[],n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];a.push([i,t[i]])}return a}},{}],151:[function(e,t,a){"use strict";function n(e){return"number"==typeof e&&isFinite(e)}
function r(e){return n(e)&&Math.floor(e)===e}Object.defineProperty(a,"__esModule",{value:!0}),a.Number_EPSILON=2.220446049250313e-16,a.Number_MIN_SAFE_INTEGER=-9007199254740991,
a.Number_MAX_SAFE_INTEGER=9007199254740991,a.Number_isNaN=function(e){return"number"==typeof e&&isNaN(e)},a.Number_isFinite=n,a.Number_isInteger=r,a.Number_isSafeInteger=function(e){
return r(e)&&e>=a.Number_MIN_SAFE_INTEGER&&e<=a.Number_MAX_SAFE_INTEGER}},{}],150:[function(e,t,a){"use strict";function n(e,t,a,n){if(!(t in e)){for(var r=0,i=a;r<i.length;r++){var c=i[r]
;if(c in e)return void Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(e,c))}n.get||n.set?Object.defineProperty(e,t,Object.assign({configurable:!0,enumerable:!0
},n)):Object.defineProperty(e,t,Object.assign({configurable:!0,enumerable:!0,writable:!0},n))}}function r(e,t){for(var a=0,n=Object.keys(e);a<n.length;a++){var r=n[a];if(r in o.DOCUMENT){var i=e[r]
;o.DOCUMENT.addEventListener(i,t);break}}}function i(e){o.DOCUMENT.dispatchEvent(s.newEvent("fullscreenchange",!0,!1))}function c(e){o.DOCUMENT.dispatchEvent(s.newEvent("fullscreenerror",!0,!1))}
Object.defineProperty(a,"__esModule",{value:!0});var o=e("../global"),s=e("./event");a.default=function(){
n(Element.prototype,"requestFullscreen",["webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],{value:function(){}}),function(e){
n(e,"exitFullscreen",["webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],{value:function(){}}),
n(e,"fullscreenEnabled",["webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],{get:function(){return!1}}),
n(e,"fullscreenElement",["webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],{get:function(){return null}})}(Document.prototype),r({
onwebkitfullscreenchange:"webkitfullscreenchange",onmozfullscreenchange:"mozfullscreenchange",onmsfullscreenchange:"MSFullscreenChange"},i),r({onwebkitfullscreenerror:"webkitfullscreenerror",
onmozfullscreenerror:"mozfullscreenerror",onmsfullscreenerror:"MSFullscreenError"},c)}},{"../global":145,"./event":149}],149:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{
value:!0});var n=e("../global");a.newEvent=function(e,t,a){var r=n.DOCUMENT.createEvent("Event");return r.initEvent(e,t,a),r},a.newCustomEvent=function(e,t){var a=n.DOCUMENT.createEvent("CustomEvent")
;return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}},{"../global":145}],148:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Array_from=function(e,t,a){
if(null==e)throw new TypeError;for(var n=Object(e),r=n.length>>>0,i=new Array(r),c=0;c<r;c++)i[c]=t?t.call(a,n[c],c):n[c];return i},a.Array_of=function(){return Array.prototype.slice.call(arguments)},
a.Array_find=function(e,t){if(null==this)throw new TypeError;if("function"!=typeof e)throw new TypeError;for(var a,n=Object(this),r=n.length>>>0,i=0;i<r;i++)if(a=n[i],e.call(t,a,i,n))return a},
a.Array_findIndex=function(e,t){if(null==this)throw new TypeError;if("function"!=typeof e)throw new TypeError;for(var a,n=Object(this),r=n.length>>>0,i=0;i<r;i++)if(a=n[i],e.call(t,a,i,n))return i
;return-1}},{}],135:[function(e,t,a){"use strict";function n(e,t,a,n){function c(e){return new Promise(function(t,a){s.addEventListener("load",function(e){
s.status>=200&&s.status<300?i(s,t,a):i(s,function(e){a(Object.assign(e,{message:e.statusText}))},function(e){a(e)})}),s.addEventListener("error",function(e){a(r(e.message||"Unreachable"))}),
s.addEventListener("timeout",function(e){a(r("Timeout"))}),s.addEventListener("abort",function(e){a(r("Abort"))}),s.send(e)})}var s=new XMLHttpRequest;if(s.open(e,u.parseUri(t,a),!0),
s.responseType="blob",n)for(var l=0,k=Object.entries(n);l<k.length;l++){var p=k[l],m=p[0],h=p[1];s.setRequestHeader(m,String(h))}var g=[],K={header:function(e,t){
return s.setRequestHeader(e,String(t)),K},accept:function(e,t){void 0===t&&(t=null);var a=o.map({json:b,text:y,binary:f,any:"*/*"});return e in a&&(e=a[e]),null!=t&&(e=e+";q="+t),g.push(e),K},
send:function(){return g.length&&s.setRequestHeader(d,g.join(",")),c(null)},sendForm:function(e){if(g.length&&s.setRequestHeader(d,g.join(",")),!(e instanceof FormData)){
for(var t=new FormData,a=0,n=Object.entries(e);a<n.length;a++){var r=n[a],i=r[0],o=r[1];t.append(i,o)}e=t}return c(e)},sendJson:function(e,t){return void 0===t&&(t=b),s.setRequestHeader(v,t),
g.length&&s.setRequestHeader(d,g.join(",")),c(JSON.stringify(e))},sendText:function(e,t){return void 0===t&&(t=y),s.setRequestHeader(v,t),g.length&&s.setRequestHeader(d,g.join(",")),c(e)},
sendBinary:function(e,t){return void 0===t&&(t=f),s.setRequestHeader(v,t),g.length&&s.setRequestHeader(d,g.join(",")),c(e)},monitor:function(e){
return e.send&&s.upload.addEventListener("progress",e.send),e.receive&&s.addEventListener("progress",e.receive),K}};return K}function r(e){return{status:0,statusText:"Unknown",headers:o.map(),
contentType:l.parseMimeType(f),body:null,isJson:!1,json:null,isText:!1,text:null,isBinary:!1,binary:null,message:e}}function i(e,t,a){function n(e){var n=null,r=null;try{n=JSON.parse(e.result)
}catch(e){r=e}r?a(Object.assign(s,{message:"JSON parse error"})):(s.isJson=!0,s.json=n,t(s))}function r(e){s.isText=!0,s.text=e.result,t(s)}function i(e){s.isBinary=!0,s.binary=e.result,t(s)}
var o=c(e),s={status:o.status,statusText:o.statusText,headers:o.headers,contentType:o.contentType,body:null,isJson:!1,json:null,isText:!1,text:null,isBinary:!1,binary:null}
;if(e.response instanceof Blob){s.body=e.response;var u=new FileReader;u.addEventListener("error",function(e){a(Object.assign(s,{message:e.message}))}),
l.isJson(o.contentType)?(u.addEventListener("load",function(e){n(u)}),u.readAsText(s.body)):l.isText(o.contentType)?(u.addEventListener("load",function(e){r(u)}),
u.readAsText(s.body)):(u.addEventListener("load",function(e){i(u)}),u.readAsArrayBuffer(s.body))}else t(s)}function c(e){var t=e.status,a=e.statusText,n=o.map(),r=null
;e.getAllResponseHeaders().split("\n").forEach(function(e){var t=e.indexOf(":");if(-1!=t){var a=e.substring(0,t).trim().toLowerCase(),r=e.substring(t+1).trim();n[a]=r}});var i=e.getResponseHeader(v)
;return r=i?l.parseMimeType(i):l.parseMimeType(f),{status:t,statusText:a,headers:n,contentType:r}}Object.defineProperty(a,"__esModule",{value:!0})
;var o=e("../lang"),s=e("../runtime/global"),l=e("./mimetype"),u=e("./url"),d="Accept",v="Content-Type",b="application/json",y="text/plain",f="application/octet-stream";a.GET=function(e,t,a){
return n("GET",e,t,a)},a.HEAD=function(e,t,a){return n("HEAD",e,t,a)},a.PUT=function(e,t,a){return n("PUT",e,t,a)},a.PATCH=function(e,t,a){return n("PATCH",e,t,a)},a.POST=function(e,t,a){
return n("POST",e,t,a)},a.DELETE=function(e,t,a){return n("DELETE",e,t,a)},a.loadScript=function(e){return new Promise(function(t,a){var n=s.DOCUMENT.createElement("script")
;n.addEventListener("load",function(e){t(n)}),n.addEventListener("error",function(t){a({message:"Cannot load script from uri "+e})}),n.type="text/javascript",n.async=!1,n.src=e,
s.DOCUMENT.head.appendChild(n)})}},{"../lang":139,"../runtime/global":145,"./mimetype":134,"./url":136}],134:[function(e,t,a){"use strict";function n(e){s.push(e)}function r(e){l.push(e)}
function i(e){u.push(e)}function c(e,t){return-1!=e.indexOf(t.type+"/"+t.subtype)||-1!=e.indexOf(t.type+"/*")}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../lang"),s=[],l=[],u=[]
;a.addJsonType=n,a.addTextType=r,a.addBinaryType=i,a.parseMimeType=function(e){var t,a=null,n=null,r=null,i=o.map();if(-1!=(t=e.indexOf(";"))){var c=e.substring(t+1);e=e.substring(0,t),
c.split(";").forEach(function(e){if(-1!=(t=e.indexOf("="))){var a=e.substring(0,t).trim().toLowerCase(),n=e.substring(t+1).trim();"charset"==a?r=n:i[a]=n}})}
return-1!=(t=e.indexOf("/"))&&(a=e.substring(0,t),n=e.substring(t+1)),{name:a+"/"+n,type:a,subtype:n,charset:r,parameters:i}},a.isJson=function(e){return c(s,e)},a.isText=function(e){return c(l,e)},
a.isBinary=function(e){return c(u,e)},["application/json"].forEach(function(e){n(e)}),
["text/*","image/svg+xml","application/xml","application/atom+xml","application/rss+xml","application/rdf+xml","application/xhtml+xml","application/ecmascript","application/javascript"].forEach(function(e){
r(e)}),["application/octet-stream","image/*","audio/*","video/*"].forEach(function(e){i(e)})},{"../lang":139}],144:[function(e,t,a){"use strict";function n(e){i(e)}
Object.defineProperty(a,"__esModule",{value:!0});var r=e("./lang");a.explain=function(e){return function(t){var a=new Error(e);throw a.cause=t,a}},a.cause=function(e){return r.isString(e.message)?e:{
message:"Unknown"}},a.watcher=function(e){n(e)};var i=function(e){function t(e){return e&&e.message?e.message:String(e)}console.error(e),alert(function(e){var a=[]
;for(a.push(t(e));e=e.cause;)a.push("Because: "+t(e));return a}(e).join("\n"))};a.useTrap=function(e){i=e}},{"./lang":139}],6:[function(e,t,a){"use strict";function n(e){
var t=d.WINDOW.location,a=t.protocol,n=t.host,r="";switch(a){case"https:":r="wss:";break;case"http:":r="ws:";break;default:throw new Error}return u.parseUri(r+"//"+n+"/game",{u:e.id})}function r(){
return l.createElement("p",{className:"u-textCenter"
},"Compete against other players in this online multiplayer game. The faster you type, the faster your car goes. Type as fast as you can to win the race!")}function i(){
return l.createElement("article",{className:"Article"},l.createElement("h1",null,"Connecting to Server..."),l.createElement("p",null,"Establishing connection to the game server."))}function c(){
return l.createElement("article",{className:"Article"
},l.createElement("h1",null,"Server is Offline"),l.createElement("p",null,"Something is wrong with our game server."),l.createElement("p",null,"Please revisit this site in a few minutes while we are fixing the problem."))
}function o(){return l.createElement("article",{className:"Article"
},l.createElement("h1",null,"Kicked out of the Game"),l.createElement("p",null,"You were kicked out of the game for staying inactive for too long."))}Object.defineProperty(a,"__esModule",{value:!0})
;var s=e("tslib"),l=e("react"),u=e("../../lib/http/url"),d=e("../../lib/runtime/global"),v=e("../../lib/runtime/timer"),b=e("./game"),y=function(e){function t(t){var a=e.call(this,t)||this
;return a.state={ws:null,readyState:WebSocket.CONNECTING,kicked:!1},a}return s.__extends(t,e),t.prototype.componentDidMount=function(){this.connect()},t.prototype.componentWillUnmount=function(){
this.disconnect()},t.prototype.render=function(){var e=this.state,t=e.ws,a=e.readyState,n=e.kicked;switch(a){case WebSocket.CONNECTING:return l.createElement(i,null);case WebSocket.OPEN:
return l.createElement("div",null,l.createElement(r,null),l.createElement(b.Game,{ws:t}));default:return n?l.createElement(o,null):l.createElement(c,null)}},t.prototype.connect=function(){
function e(){v.systemTimer.setTimeout(function(){t.connect()},3e3)}var t=this;t.disconnect();var a=new WebSocket(n(t.props.user));a.binaryType="arraybuffer",a.addEventListener("open",function(e){
console.log("WebSocket connected"),t.setState(Object.assign({},t.state,{ws:a,readyState:WebSocket.OPEN,kicked:!1}))}),a.addEventListener("close",function(a){
console.log("WebSocket closed; code="+a.code+", reason='"+a.reason+"'"),t.setState(Object.assign({},t.state,{ws:null,readyState:WebSocket.CLOSED,kicked:4001==a.code}),function(){switch(a.code){
case 1006:case 1012:case 1013:e()}})}),a.addEventListener("error",function(e){console.error("WebSocket error",e.error),t.disconnect()})},t.prototype.disconnect=function(){var e=this.state.ws
;e&&e.close()},t}(l.Component);a.Connector=y},{"../../lib/http/url":136,"../../lib/runtime/global":145,"../../lib/runtime/timer":156,"./game":7,react:"react",tslib:"tslib"}],136:[function(e,t,a){
"use strict";function n(e){void 0===e&&(e=location.search);var t=c.map();if(e.startsWith("?")&&(e=e.substring(1)),e)for(var a=0,n=e.split("&");a<n.length;a++){var i=n[a],o=i.indexOf("=")
;-1!=o?t[r(i.substring(0,o))]=r(i.substring(o+1)):t[r(i)]=null}return t}function r(e){return decodeURIComponent(e)}function i(e){return encodeURIComponent(e)}Object.defineProperty(a,"__esModule",{
value:!0});var c=e("../lang");a.parseQueryString=n,a.parseUri=function(e,t){null==t&&(t=c.map());var a=e.indexOf("?");if(-1!=a){var r=e.substring(a+1);e=e.substring(0,a),t=Object.assign(n(r),t)}
for(var o=[],s=0,l=Object.keys(t);s<l.length;s++){var u=l[s],d=t[u];null!=d?o.push(i(u)+"="+i(String(d))):o.push(i(u))}return o.length&&(e=e+"?"+o.join("&")),e}},{"../lang":139}],7:[function(e,t,a){
"use strict";function n(e,t){function a(e){k(e.data)}function n(e){}function i(e){}function c(e){S()&&q.isFocused()&&(I(Date.now()-$,e),Z<Y.length&&P(Y.charCodeAt(Z))==P(e)&&Z++,q.update(R()))}
function d(){}function b(){}function y(){x()}function f(){q.focus()}function k(e){var a=new s.Reader(e),n=a.getInt8();switch(n){case L:h(a);break;case j:K(a);break;case U:_(a);break;case F:N(a);break
;case W:D(a);break;default:t.close(4e3,"Unrecognized message "+n)}}function h(e){for(var t=e.getInt32(),a=[],n=e.getInt8();n>0;n--)a.push({id:e.getInt32(),avatar:E(e)});var r=Object.keys(Q);O(a),
0==r.length&&(J=Q[t]),C()}function K(e){for(var t=e.getInt32(),a=[],n=e.getInt8();n>0;n--)a.push({id:e.getInt32(),avatar:E(e)});O(a),J.id==t&&(console.log("Player was kicked out of the game"),J=null),
C()}function E(e){var t={id:function(e){return 0==e?null:e.toString(36)}(e.getInt32()),name:e.getString()||null,imageUrl:e.getString()||null};return null==t.id?{id:null,name:"Anonymous",imageUrl:null
}:t}function _(e){Y=e.getString(),Z=0}function N(e){var t=B[B[e.getInt8()]],a=e.getInt8();if(G!=t||X!=a)switch(G=t,X=a,t){case B.WAITING:for(var n=0,r=Object.keys(Q);n<r.length;n++)o=r[n],w(Q[o])
;ee="Waiting for more players...";break;case B.STARTING:for(var i=0,c=Object.keys(Q);i<c.length;i++){var o=c[i];w(Q[o])}ee="Start in "+String(X),f();break;case B.RUNNING:$=Date.now(),ee="GO!",f()
;break;case B.FINISHED:J.finished||(ee="Race finished!");break;default:throw new Error}C()}function D(e){e.getInt32();for(var t=e.getInt8();t>0;t--){var a={id:e.getInt32(),flags:e.getInt8(),
position:e.getInt8(),offset:e.getInt16(),speed:e.getInt16(),errors:e.getInt16()},n=Q[a.id],i=!!(1&a.flags),c=!!(2&a.flags);n.spectator=i,n.finished=c,n.position=a.position,n.offset=a.offset,
n.speed=a.speed,n.errors=a.errors,G==B.RUNNING||G==B.FINISHED?n.progress=n.offset/Y.length:n.progress=0,n==J&&n.spectator&&(ee="Zzz... Wait for the next race"),
n==J&&n.finished&&(ee=1==a.position?"You won the race!":"You finished "+r(a.position)+"!")}x()}function S(){return G==B.RUNNING&&J&&!J.spectator}function I(e,a){var n=new s.Writer;n.putUint8(H),
n.putUint32(e),n.putUint16(a),t.send(l.encode(new Uint8Array(n.buffer())))}function O(e){for(var t=0,a=Object.keys(Q);t<a.length;t++)!function(t){var a=Q[t];null==e.find(function(e){return a.id==e.id
})&&delete Q[t]}(a[t]);for(var n=0,r=e;n<r.length;n++){var i=r[n];null==Q[i.id]&&(Q[i.id]=A(i))}}function A(e){return{id:e.id,avatar:e.avatar,spectator:!1,finished:!1,position:0,offset:0,speed:0,
errors:0,progress:0}}function w(e){e.spectator=!1,e.finished=!1,e.position=0,e.offset=0,e.speed=0,e.errors=0,e.progress=0}function C(t){e.forceUpdate(t)}function x(e){V.update({ticker:ee,players:Q,
me:J},e)}function T(){return o.createElement("div",{className:"Game"},o.createElement(g,{ref:z,ticker:ee,players:Q,me:J}),o.createElement(m.TextInput,{ref:M,fragment:R(),onFocus:d,onBlur:b}))}
function z(e){V=e}function M(e){q=e}function R(){return{text:Y,position:Z,errorPositions:[],garbage:null}}function P(e){return 10==e?32:e}var B,L=17,j=18,U=33,F=34,W=35,H=33;!function(e){
e[e.INITIALIZING=-1]="INITIALIZING",e[e.WAITING=0]="WAITING",e[e.STARTING=1]="STARTING",e[e.RUNNING=2]="RUNNING",e[e.FINISHED=3]="FINISHED"}(B||(B={}))
;var G=B.INITIALIZING,V=null,q=null,Y=null,X=null,Q=u.map(),J=null,Z=null,$=null,ee="";return{init:function(){t.addEventListener("message",a),v.WINDOW.addEventListener("resize",y,!0),
p.translate(p.newSimpleTranslator({onKeyDown:n,onKeyUp:i,onInput:c}))},destroy:function(){t.removeEventListener("message",a),v.WINDOW.removeEventListener("resize",y,!0),p.translate(null)},
render:function(){return T()}}}function r(e){if(e)switch(e){case 1:return"1st";case 2:return"2nd";case 3:return"3rd";default:return String(e)+"th"}return"-"}Object.defineProperty(a,"__esModule",{
value:!0})
;var i=e("tslib"),c=e("classnames"),o=e("react"),s=e("../../lib/data/io"),l=e("../../lib/data/secret"),u=e("../../lib/lang"),d=e("../../lib/math/round"),v=e("../../lib/runtime/global"),b=e("../../lib/ui/label"),y=e("../../res/image/car"),f=e("../../res/image/checkeredflag"),k=e("../../web/ui/avatar"),p=e("../keyboard/input"),m=e("../practice/ui/textinput"),h=function(e){
function t(t){var a=e.call(this,t)||this;return a.driver=n(a,a.props.ws),a}return i.__extends(t,e),t.prototype.componentDidMount=function(){this.driver.init()},
t.prototype.componentWillUnmount=function(){this.driver.destroy()},t.prototype.render=function(){return this.driver.render()},t}(o.Component);a.Game=h;var g=function(e){function t(t){
var a=e.call(this,t)||this;return a.state=Object.assign({},t),a}return i.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){this.setState(Object.assign({},e))},
t.prototype.update=function(e,t){this.setState(Object.assign({},e))},t.prototype.render=function(){var e=this.state,t=e.ticker,a=e.players,n=e.me;return o.createElement("div",{className:"Track"
},o.createElement("div",{className:"Ticker"},t),Object.keys(a).map(function(e){return o.createElement(K,{key:e,player:a[e],me:n})}),n&&n.finished&&o.createElement("div",{className:"Center"
},o.createElement(f.default,{className:"Flag"})))},t}(o.Component),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.render=function(){
var e=this.props,t=e.player,a=e.me,n=null,r=null,i=[];return t.finished&&i.push("Player--finished"),t.spectator&&i.push("Player--spectator"),t==a&&i.push("Player--me"),o.createElement("div",{key:t.id,
ref:function(){if(n&&r){var e=n.offsetWidth,a=r.offsetWidth;r.style.left=String((e-a)*t.progress)+"px"}},className:c("Player",i)},o.createElement(k.PublicAvatar,{avatar:t.avatar
}),o.createElement("div",{ref:function(e){n=e},className:"Lane"},o.createElement("div",{ref:function(e){r=e},className:"Car"},o.createElement(_,{player:t}))),o.createElement(E,{player:t}))},t
}(o.Component),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.render=function(){
var e=this.props.player,t=e.progress,a=e.speed,n=e.errors,i=e.position;return o.createElement("div",{className:"PlayerDetails"},o.createElement(b.NameValue,{title:"Position on track",name:"Position",
value:o.createElement(b.Value,{className:"Value--wide",value:r(i)})}),o.createElement(b.NameValue,{title:"Distance completed",name:"Progress",value:o.createElement(b.Value,{className:"Value--wide",
value:d.default(100*t,100)+"%"})}),o.createElement(b.NameValue,{title:"Typing speed",name:"Speed",value:o.createElement(b.Value,{className:"Value--wide",value:a})}),o.createElement(b.NameValue,{
title:"Number of errors",name:"Errors",value:o.createElement(b.Value,{className:"Value--wide",value:n})}))},t}(o.Component),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}
return i.__extends(t,e),t.prototype.render=function(){var e=this.props.player;return o.createElement(y.default,{className:"CarFigure",index:e.id%5})},t}(o.PureComponent)},{"../../lib/data/io":124,
"../../lib/data/secret":125,"../../lib/lang":139,"../../lib/math/round":142,"../../lib/runtime/global":145,"../../lib/ui/label":163,"../../res/image/car":207,"../../res/image/checkeredflag":208,
"../../web/ui/avatar":228,"../keyboard/input":3,"../practice/ui/textinput":49,classnames:"classnames",react:"react",tslib:"tslib"}],228:[function(e,t,a){"use strict";function n(e){
var t=e.className,a=e.avatar,n=c(t);return a.id&&a.imageUrl?o.createElement("img",{className:n,src:a.imageUrl}):a.id&&a.name?o.createElement(s.Identicon,{className:n,name:a.name
}):o.createElement(l.default,{className:n})}function r(e,t){for(var a=[],n=0,r=[e,t];n<r.length;n++)for(var i=0,c=r[n];i<c.length;i++){var o=c[i];-1==a.indexOf(o)&&a.push(o)}return a}
Object.defineProperty(a,"__esModule",{value:!0});var i=e("tslib"),c=e("classnames"),o=e("react"),s=e("./identicon"),l=e("../../res/icon/custom/anonymous");a.userAvatar=function(e){
null!=e&&null!=e.id||(e={id:null,email:null,userName:"anonymous",fullName:"Anonymous",externalId:{}});for(var t=0,a=r(["google","facebook"],Object.keys(e.externalId));t<a.length;t++){
var n=a[t],i=e.externalId[n];if(i)return{id:e.id,name:i.fullName,imageUrl:i.imageUrl}}return{id:e.id,name:e.fullName||e.userName,imageUrl:null}},a.PublicAvatar=function(e){
var t=e.className,a=e.avatar,r=c("PublicAvatar",t);return o.createElement("span",i.__assign({},{className:r,title:a.name}),o.createElement(n,{className:"PublicAvatar-image",avatar:a
}),o.createElement("span",{className:"PublicAvatar-name"},a.name))},a.Avatar=function(e){var t=e.className,a=e.avatar,r=c("Avatar",t);return o.createElement("div",i.__assign({},{className:r,
title:a.name}),o.createElement("a",{href:"/account",className:"Avatar-link",title:a.name},o.createElement(n,{className:"Avatar-image",avatar:a}),o.createElement("span",{className:"Avatar-name"
},a.name)))},a.AvatarImage=n},{"../../res/icon/custom/anonymous":176,"./identicon":229,classnames:"classnames",react:"react",tslib:"tslib"}],229:[function(e,t,a){"use strict"
;Object.defineProperty(a,"__esModule",{value:!0})
;var n=e("classnames"),r=e("react"),i=["#00b2ee","#009acd","#2c3e50","#7f8c8d","#8e44ad","#9b59b6","#95a5a6","#436eee","#2980b9","#3498db","#595959","#b0e0e6","#bcd2ee","#bdc3c7","#bf3eff","#c0392b","#d35400","#e67e22","#e74c3c","#ee5c42","#f1c40f","#ff69b4","#ffb90f"]
;a.Identicon=function(e){for(var t=e.className,a=e.name,c=0,o=0;o<a.length;o++)c=(997*c+a.charCodeAt(o))%i.length;var s=i[c],l=a.charAt(0).toUpperCase();return r.createElement("svg",{
className:n("Identicon",t),viewBox:"0 0 64 64"},r.createElement("circle",{cx:32,cy:32,r:32,fill:s}),r.createElement("text",{x:32,y:34,fill:"#ffffff",textAnchor:"middle",alignmentBaseline:"middle",
fontSize:"36"},l))}},{classnames:"classnames",react:"react"}],176:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("../SvgIcon"),i=e("react")
;a.default=function(e){return i.createElement(r.SvgIcon,n.__assign({},e,{viewBox:"0 0 24 24"}),i.createElement("path",{
d:"M14.695 17.105c-0.745 0.575-1.7 0.895-2.695 0.895s-1.95-0.32-2.695-0.895c-0.215-0.17-0.53-0.13-0.7 0.090s-0.13 0.53 0.090 0.7c0.915 0.71 2.090 1.105 3.305 1.105s2.39-0.395 3.305-1.105c0.22-0.17 0.26-0.485 0.090-0.7-0.17-0.22-0.485-0.26-0.7-0.090z"
}),i.createElement("path",{d:"M9.5 12.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"}),i.createElement("path",{
d:"M12 0c-6.625 0-12 5.375-12 12s5.375 12 12 12 12-5.375 12-12-5.375-12-12-12zM19.96 14.82c-1.090 3.74-4.27 6.455-8.040 6.455-3.775 0-6.96-2.725-8.045-6.475-1.19-0.1-2.125-1.18-2.125-2.51 0-1.27 0.855-2.315 1.965-2.495v-0.005c2.090-1.465 3.805-3.49 4.095-5.050l0.005 0.005v-0.015c1.355 2.625 6.3 5.19 11.825 5.060 0.1-0.015 0.195-0.035 0.295-0.035 1.275 0 2.31 1.135 2.31 2.535 0.005 1.39-1.020 2.52-2.285 2.53z"
}),i.createElement("path",{d:"M16.5 12.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"}))}},{"../SvgIcon":175,react:"react",tslib:"tslib"}],175:[function(e,t,a){"use strict"
;Object.defineProperty(a,"__esModule",{value:!0});var n=e("tslib"),r=e("classnames"),i=e("react"),c=e("prop-types");a.propTypes={children:c.node.isRequired,className:c.any,viewBox:c.string,
onClick:c.func,onMouseDown:c.func,onMouseEnter:c.func,onMouseLeave:c.func,onMouseUp:c.func},a.defaultProps={className:null,viewBox:"0 0 48 48",onClick:function(){},onMouseDown:function(){},
onMouseEnter:function(){},onMouseLeave:function(){},onMouseUp:function(){}};var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),
t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.viewBox,c=e.onClick,o=e.onMouseDown,s=e.onMouseEnter,l=e.onMouseLeave,u=e.onMouseUp,d=r("Icon",a)
;return i.createElement("svg",{className:d,viewBox:n,onClick:c,onMouseDown:o,onMouseEnter:s,onMouseLeave:l,onMouseUp:u},t)},t.propTypes=a.propTypes,t.defaultProps=a.defaultProps,t}(i.PureComponent)
;a.SvgIcon=o},{classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],208:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0})
;var n=e("tslib"),r=e("classnames"),i=e("react"),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){
var e=this.props.className;return i.createElement("svg",{className:r(e),width:"200",height:"200",viewBox:"0 0 200 200"},i.createElement("path",{fill:"#fff",
d:"M132.28 11.82a63.16 63.16 0 0 0-3.298.028l-7.203.27-6.075 14.83c-3.34 8.158-6.106 15.31-6.144 15.892-.05.763 1.785 1.058 6.56 1.058 6.445 0 20.81 2.03 24.28 3.43.946.382 2.077.6 2.516.484.752-.197 16.49-29.075 16.55-30.363.04-.918-9.792-3.748-16.923-4.872-2.622-.413-6.71-.702-10.262-.758zM89.464 23.182a.312.312 0 0 0-.168.033c-.777.347-4.465 1.72-8.193 3.05-6.092 2.17-7.696 2.393-15.805 2.186l-9.026-.23-3.168 14.407c-1.744 7.924-3.336 14.85-3.538 15.393-.2.54.328 1.186 1.178 1.43 3.658 1.057 16.907-.066 21.836-1.85 2.77-1.003 5.334-2.122 5.7-2.487.364-.365 3.31-7.833 6.546-16.595 4.076-11.04 5.355-15.24 4.64-15.336zm16.475 22.476c-2.23.123-9.748 2.762-18.083 6.406l-8.5 3.717-5.7 15.458c-3.132 8.5-5.694 15.784-5.692 16.184.002.4.86.49 1.91.2A3463.2 3463.2 0 0 1 82.36 84.27l10.583-2.83 7.043-17.6c3.874-9.68 6.83-17.816 6.57-18.076-.09-.09-.3-.123-.618-.106zm-79.086 3.3c-1-.15-1.375 2.476-3.22 15.872-1.38 10.03-1.987 16.985-1.523 17.45.424.424 4.146 2.064 8.27 3.644 11.754 4.5 11.127 4.985 14.854-11.518 1.737-7.69 3.177-14.22 3.2-14.508.022-.29-1.62-.99-3.653-1.56-3.41-.955-13.022-5.97-17.112-8.928-.322-.233-.586-.416-.816-.45zm117.02.185l-8.962 17.082-8.963 17.08 5.543 3.107c3.05 1.71 8.784 5.76 12.746 9l7.205 5.89 8.87-17.646 8.872-17.648-2.092-2.25c-2.856-3.076-10.53-8.224-17.46-11.715l-5.757-2.9zM105.73 81.557c-6.148-.008-11.794.43-12.355 1.324-1.054 1.678-12.702 30.72-12.7 31.665.002.402 1.703.477 3.78.166 5.2-.78 18.134-.646 21.223.22l2.543.713 8.214-15.747 8.214-15.744-3.552-1.238c-2.57-.896-9.22-1.35-15.367-1.357zm-39.634 8.027l-3.938.646c-2.165.356-7.454.61-11.752.565-6.534-.07-7.88.144-8.228 1.3-.868 2.885-6.414 28.41-6.414 29.516 0 .924 1.85 1.11 9.095.92l9.095-.24 6.07-16.354 6.07-16.352z"
}),i.createElement("path",{fill:"#000",
d:"M121.97 10.576c-12.14.886-25.13 7.775-29.98 9.617l-12.998 35.35s21.783-10.512 29.11-10.705l13.87-34.262zM29.66 12.56l-4.824 34.073c12.157 9.924 24.11 12.71 24.11 12.71l7.322-33.005S43.595 24.11 29.66 12.56zm131.04 3.76l-17.075 32.477s15.36 5.39 26.82 17.45l15.653-31.34.582-1.198s-10.33-12.535-25.98-17.39zm-17.075 32.477c-.01-.004-12.9-4.938-29.273-4.508a51.4 51.4 0 0 0-6.247.554L93.085 81.96c-5.736.934-18.51 4.82-26.37 6.99l-12.74 34.645c5.857-.154 20.134-6.24 24.83-6.365l14.277-35.267s7.405-1.263 14.72-1.455c7.312-.192 17.394 3.3 17.405 3.305h.004l18.416-35.018zm-18.418 35.017l-17.283 33.444c14.475 3.87 28.162 18.62 28.162 18.62l16.04-32.79s-13.19-14.067-26.92-19.273zM78.987 55.55s-9.628 4.817-19.14 5.067c-6.093.16-10.898-1.267-10.898-1.267l-6.765 30.47s6.326 1.01 11.53.87c5.21-.134 12.995-1.735 12.995-1.735l12.28-33.408h-.002zM19.917 81.5l-5.065 35.816c11.51 5.596 19.85 6.446 19.85 6.446l7.48-33.94s-11.624-1.9-22.266-8.324z"
}),i.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",strokeLinecap:"round",
d:"M108.55 191.535l84.07-169.82m-5.94 11.993s-19.825-24.748-60.493-23.68c-24.755.65-38.345 17.064-58.774 17.6C46.996 28.164 29.66 12.56 29.66 12.56L14.853 117.316s13.607 7.674 31.125 7.214c17.51-.46 25.794-8.71 49.527-9.332 22.508-.59 40.58 20.682 40.58 20.682l50.597-102.172z"
}))},t}(i.PureComponent);a.default=c},{classnames:"classnames",react:"react",tslib:"tslib"}],207:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0})
;var n=e("tslib"),r=e("classnames"),i=e("react"),c=["#C02026","#B30DB5","#195FFF","#FEB300","#389E4B"],o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}
return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.index;return i.createElement("svg",{className:r(t),width:"80",height:"48",viewBox:"0 0 80 48"
},i.createElement("path",{style:{fill:c[a]},
d:"m 32.6 0.37 c 7.3 -0.61 15.53 -0.91 21.67 3.74 3.46 2.53 5.66 6.28 7.29 10.16 1.3 2.6 4.91 2.05 7.26 3.14 5.14 1.66 8.92 6.87 8.52 12.33 0.77 2.68 -0.77 3.43 -3.19 3.11 C 56.45 33.47 38.73 33.06 21.05 32.26 14.87 31.86 8.63 31.79 2.54 30.59 2.36 23.98 4.54 17.28 8.88 12.25 13.68 5.96 21.1 2.08 28.84 0.88 30.09 0.66 31.34 0.49 32.6 0.37 z"
}),i.createElement("path",{style:{fill:"#FFFFFF"},
d:"m 36.93 2.6 c 1.53 -0.24 3.08 -0.09 4.62 0.06 2.01 0.25 4.02 0.6 5.96 1.2 1.56 0.53 3.04 1.29 4.44 2.17 2.02 1.3 3.9 2.92 5.2 4.99 0.89 1.42 1.46 3.14 1.23 4.84 -0.14 0.92 -0.7 1.77 -1.51 2.21 -1.28 0.73 -2.79 0.85 -4.22 0.94 -1.8 0.03 -3.6 0.01 -5.4 -0.07 -1.8 0 -3.61 0 -5.41 0 -1.65 -0.06 -3.33 -0.11 -4.94 -0.56 -0.66 -0.19 -1.34 -0.5 -1.72 -1.11 -0.68 -1.08 -0.79 -2.4 -0.86 -3.65 0.01 -2.76 -0.41 -5.55 0.08 -8.29 0.16 -0.76 0.39 -1.57 0.96 -2.12 0.44 -0.37 1.02 -0.51 1.58 -0.61 z"
}),i.createElement("path",{style:{fill:"#FFFFFF"},
d:"M 13.65 9 C 16.38 6.54 19.58 4.63 23.02 3.38 17.82 5.98 13.13 9.72 9.7 14.43 7.99 16.88 6.5 19.54 5.69 22.44 5.06 24.83 4.68 27.29 3.99 29.66 3.92 27.34 4.29 25.02 4.87 22.77 5.44 20.66 6.17 18.58 7.28 16.69 9.07 13.87 11.16 11.23 13.65 9 z"
}),i.createElement("path",{style:{fill:"#FFFFFF"},
d:"m 28.25 3.55 c 0.95 -0.1 2.04 -0.27 2.88 0.29 0.6 0.55 0.72 1.42 0.82 2.19 0.2 1.75 0 3.52 -0.07 5.28 -0.17 1.71 0.12 3.51 -0.58 5.13 -0.29 0.74 -1.06 1.11 -1.78 1.28 -2.05 0.5 -4.17 0.34 -6.26 0.36 -2.01 -0.04 -4.03 0.25 -6.02 -0.1 -0.98 -0.17 -2 -0.63 -2.47 -1.56 -0.51 -1.01 -0.46 -2.21 -0.22 -3.28 0.47 -1.9 1.75 -3.48 3.2 -4.74 2.98 -2.53 6.67 -4.19 10.5 -4.86 z"
}),i.createElement("path",{style:{fill:"#FFFFFF"},
d:"m 72.42 22.36 c 0.51 -0.25 1.11 -0.04 1.55 0.26 0.87 0.65 1.43 1.64 1.77 2.66 0.34 1.09 0.49 2.3 0.08 3.4 -0.19 0.49 -0.56 0.97 -1.1 1.07 -0.73 0.12 -1.39 -0.35 -1.86 -0.86 -1.03 -1.19 -1.56 -2.79 -1.52 -4.37 0.06 -0.81 0.29 -1.77 1.08 -2.16 z"
}),i.createElement("path",{style:{fill:"#B5B5B6"},
d:"m 2.54 30.59 c 2.05 0.47 4.15 0.68 6.24 0.88 2.11 0.19 4.23 0.37 6.35 0.47 -0.96 1.37 -1.56 2.98 -1.75 4.63 -1.68 0.04 -3.36 -0.12 -5.04 -0.15 -2.06 -0.04 -4.12 -0.22 -6.19 -0.09 0.77 0.27 1.58 0.35 2.38 0.53 2.89 0.58 5.84 0.75 8.78 1.01 0.02 0.54 0.05 1.09 0.14 1.62 C 10.28 39.36 7.12 39 4.02 38.38 2.81 38.17 1.71 37.44 0.98 36.46 0.17 35.36 -0.11 33.88 0.25 32.56 0.56 31.52 1.51 30.81 2.54 30.59 z"
}),i.createElement("path",{style:{fill:"#B5B5B6"},
d:"m 64.63 33.1 c 4.23 -0.05 8.46 -0.14 12.68 -0.44 1.16 0.16 2.25 0.96 2.54 2.13 0.5 1.76 -0.61 3.68 -2.25 4.34 -1.17 0.42 -2.36 0.78 -3.59 0.94 -2.84 0.39 -5.72 0.39 -8.58 0.29 0.14 -0.54 0.23 -1.09 0.29 -1.65 2.59 0.04 5.19 0.03 7.75 -0.34 1.29 -0.17 2.55 -0.56 3.76 -1.04 -0.44 0.02 -0.87 0.07 -1.31 0.15 -3.36 0.55 -6.78 0.35 -10.17 0.37 0.01 -1.64 -0.36 -3.29 -1.12 -4.75 z"
}),i.createElement("path",{style:{fill:"#B5B5B6"},
d:"m 32.35 32.73 c 4.73 0.15 9.45 0.25 14.18 0.32 -0.69 1.35 -1.09 2.84 -1.13 4.36 -3.91 -0.09 -7.82 -0.12 -11.73 -0.14 -0.08 -1.59 -0.53 -3.16 -1.31 -4.54 z"}),i.createElement("path",{style:{
fill:"#C9C7C8"},d:"m 2.15 36.33 c 2.06 -0.14 4.12 0.05 6.19 0.09 1.68 0.03 3.36 0.19 5.04 0.15 -0.05 0.43 -0.07 0.86 -0.07 1.29 C 10.37 37.61 7.42 37.43 4.53 36.85 3.74 36.68 2.92 36.6 2.15 36.33 z"
}),i.createElement("path",{style:{fill:"#C9C7C8"},
d:"m 33.67 37.27 c 3.91 0.02 7.82 0.05 11.73 0.14 -0.01 0.3 -0.01 0.6 0 0.9 -2.8 -0.04 -5.61 -0.13 -8.41 -0.15 -1.11 0.01 -2.23 -0.12 -3.32 0.08 0.02 -0.32 0.02 -0.65 -0 -0.97 z"
}),i.createElement("path",{style:{fill:"#C9C7C8"},
d:"m 75.92 37.48 c 0.43 -0.08 0.87 -0.13 1.31 -0.15 -1.21 0.49 -2.47 0.87 -3.76 1.04 -2.57 0.37 -5.17 0.38 -7.75 0.34 0.02 -0.28 0.03 -0.57 0.04 -0.86 3.39 -0.02 6.81 0.18 10.17 -0.37 z"
}),i.createElement("path",{style:{fill:"#B5B5B6"},
d:"m 33.67 38.24 c 1.1 -0.2 2.22 -0.08 3.32 -0.08 2.8 0.01 5.61 0.1 8.41 0.15 0.03 0.57 0.11 1.13 0.23 1.69 -4.05 -0.09 -8.11 -0.16 -12.16 -0.18 0.11 -0.52 0.15 -1.05 0.2 -1.57 z"
}),i.createElement("path",{style:{fill:"#050708"},
d:"m 21.35 27.78 c 2.07 -0.45 4.28 -0.23 6.23 0.63 2 0.87 3.69 2.42 4.77 4.32 0.79 1.38 1.23 2.95 1.31 4.54 0.02 0.32 0.02 0.65 0 0.97 -0.04 0.53 -0.09 1.06 -0.2 1.57 -0.48 2.41 -1.87 4.62 -3.82 6.1 -1.72 1.33 -3.88 2.03 -6.04 2.09 l -0.24 0 c -2.2 -0.05 -4.4 -0.79 -6.13 -2.16 -2 -1.55 -3.37 -3.86 -3.79 -6.35 -0.09 -0.54 -0.12 -1.08 -0.14 -1.62 0 -0.43 0.02 -0.86 0.07 -1.29 0.2 -1.66 0.79 -3.27 1.75 -4.63 1.46 -2.1 3.72 -3.64 6.22 -4.15 z"
}),i.createElement("path",{style:{fill:"#323332"},
d:"m 17.44 32.04 c 1.09 -1.22 2.51 -2.12 4.05 -2.65 -1.74 1.18 -3.15 2.85 -3.96 4.8 -1.11 2.63 -1.24 5.65 -0.4 8.37 0.17 0.58 0.44 1.13 0.64 1.71 -1.32 -1.2 -2.16 -2.9 -2.5 -4.64 -0.54 -2.69 0.33 -5.58 2.18 -7.59 z"
}),i.createElement("path",{style:{fill:"#323332"},
d:"m 23.16 33.97 c 2.09 -0.31 4.2 1.34 4.45 3.44 0.31 1.97 -1.1 4 -3.03 4.42 -1.6 0.43 -3.41 -0.33 -4.27 -1.73 -0.59 -0.9 -0.8 -2.05 -0.53 -3.1 0.38 -1.58 1.77 -2.83 3.38 -3.03 z"
}),i.createElement("path",{style:{fill:"#050708"},
d:"m 52.6 28 c 2.6 -0.8 5.51 -0.5 7.89 0.82 1.76 0.97 3.22 2.48 4.14 4.28 0.76 1.46 1.14 3.11 1.12 4.75 -0 0.29 -0.01 0.57 -0.04 0.86 -0.06 0.56 -0.15 1.11 -0.29 1.65 -0.57 2.21 -1.9 4.2 -3.72 5.57 -1.71 1.32 -3.85 2.02 -6 2.07 l -0.29 0 c -2.15 -0.06 -4.28 -0.76 -5.98 -2.08 -1.92 -1.44 -3.28 -3.59 -3.8 -5.93 -0.12 -0.56 -0.2 -1.12 -0.23 -1.69 -0.01 -0.3 -0.01 -0.6 -0 -0.9 0.05 -1.51 0.44 -3.01 1.13 -4.36 1.25 -2.4 3.48 -4.27 6.07 -5.05 z"
}),i.createElement("path",{style:{fill:"#323332"},
d:"m 47.2 37.87 c 0 -3.68 2.58 -7.16 6.04 -8.32 -0.55 0.57 -1.22 1 -1.72 1.61 -2.55 2.84 -3.41 6.98 -2.51 10.66 0.19 0.88 0.57 1.7 0.89 2.54 -1.72 -1.67 -2.76 -4.07 -2.69 -6.49 z"
}),i.createElement("path",{style:{fill:"#323332"},
d:"m 55.19 33.97 c 2.22 -0.37 4.47 1.49 4.52 3.75 0.17 2.01 -1.44 3.92 -3.42 4.18 -2.22 0.39 -4.48 -1.49 -4.52 -3.74 -0.17 -2.01 1.44 -3.94 3.42 -4.18 z"}))},t}(i.PureComponent);a.default=o},{
classnames:"classnames",react:"react",tslib:"tslib"}],163:[function(e,t,a){"use strict";function n(e){return u.isValidElement(e)?e:u.createElement(r,{name:e})}function r(e){
var t=e.className,a=e.title,n=e.name;return u.createElement("span",{className:l("Name",t),title:a},n+":")}function i(e){return u.isValidElement(e)?e:u.createElement(c,{value:e})}function c(e){
var t=e.className,a=e.title,n=e.value;return u.createElement("span",{className:l("Value",t),title:a},n)}function o(e){var t=e.className,a=e.title,n=e.value,r=e.invert;return u.createElement("span",{
className:l("ValueDelta",n>0&&(r?"ValueDelta--less":"ValueDelta--more"),n<0&&(r?"ValueDelta--more":"ValueDelta--less"),0==n&&"ValueDelta--zero",t),title:a},s(n))}function s(e){var t=String(e)
;return e>0?"+"+t:t}Object.defineProperty(a,"__esModule",{value:!0});var l=e("classnames"),u=e("react");a.NameValue=function(e){var t=e.className,a=e.title,r=e.name,c=e.value
;return u.createElement("span",{className:l("NameValue",t),title:a},n(r),i(c))},a.asName=n,a.Name=r,a.asValue=i,a.Value=c,a.asValueDelta=function(e){return u.isValidElement(e)?e:u.createElement(o,{
value:e})},a.ValueDelta=o,a.Indicator=function(e){var t=e.className,a=e.title,n=e.name,r=e.value;return u.createElement("div",{className:l("Indicator",t),title:a},u.createElement("span",{
className:"Indicator-name"},String(n)+":"),u.createElement("span",{className:"Indicator-value"},String(r)))}},{classnames:"classnames",react:"react"}],142:[function(e,t,a){"use strict"
;Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){return Math.round(e*t)/t}},{}],125:[function(e,t,a){"use strict";function n(e,t){
for(var a=i(e),n=4;n<t.length;n++)t[n]=t[n]^a()}function r(){return Math.floor(4294967296*l.random())}function i(e){var t=s(e,2147483629)+12820163>>>0;return function(){
return t=s(t,1664525)+1013904223>>>0}}function c(e,t){return(e[t+0]<<24>>>0|e[t+1]<<16>>>0|e[t+2]<<8>>>0|e[t+3]<<0>>>0)>>>0}function o(e,t,a){e[t+0]=a>>>24,e[t+1]=a>>>16,e[t+2]=a>>>8,e[t+3]=a>>>0}
function s(e,t){e>>>=0,t>>>=0;for(var a=0,n=0;n<32;n++)1==(t>>>n&1)&&(a+=e<<n);return a>>>0}Object.defineProperty(a,"__esModule",{value:!0});var l=e("../math/random"),u=e("./crc32")
;a.encode=function(e){var t=r(),a=new Uint8Array(e.length+8);return o(a,0,t),o(a,4,u.crc32(e)),a.set(e,8),n(t,a),a},a.decode=function(e){if(e.length<8)throw new Error;n(c(e,0),e)
;var t=c(e,4),a=e.slice(8);if(u.crc32(a)!=t)throw new Error;return a}},{"../math/random":141,"./crc32":123}],141:[function(e,t,a){"use strict";function n(){return Math.random()}function r(e,t){
var a=Math.sqrt(3*t),r=2*a;return e+(n()*r-a+(n()*r-a)+(n()*r-a)+(n()*r-a)+(n()*r-a))/5*2.23606797749979}Object.defineProperty(a,"__esModule",{value:!0}),a.random=n,a.normal=function(e,t,a){
if(!(Number.isFinite(a)&&a>0))return r(e,t);for(;;){var n=r(e,t);if(Math.abs(n-e)<a)return n}},a.pick=function(e){if(0==e.length)throw new Error;return e[Math.floor(n()*e.length)]},
a.pickWeighted=function(e,t){if(0==e.length)throw new Error;for(var a=0,r=0,i=e;r<i.length;r++)a+=t(l=i[r]);for(var c=n()*a,o=0,s=e;o<s.length;o++){var l=s[o],u=t(l);if(c<=u)return l;c-=u}
throw new Error}},{}],124:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("./crc32"),r=e("./utf8"),i=function(){function e(e){void 0===e&&(e=64),
this.dataView=new DataView(new ArrayBuffer(Math.max(e,64))),this.byteOffset=0}return e.prototype.ensureSize=function(e){if(this.dataView.byteLength<e){for(var t=64;t<e;)t*=t;var a=new ArrayBuffer(t)
;new Uint8Array(a).set(new Uint8Array(this.dataView.buffer)),this.dataView=new DataView(a)}},e.prototype.ensureAvailable=function(e){this.ensureSize(this.byteOffset+e)},
e.prototype.putString=function(e){var t=r.size(e);return this.putUint16(t),this.ensureAvailable(t),r.encode(e,this.dataView,this.byteOffset),this.byteOffset+=t,this},e.prototype.putInt8=function(e){
return this.ensureAvailable(1),this.dataView.setInt8(this.byteOffset,e),this.byteOffset+=1,this},e.prototype.putUint8=function(e){return this.ensureAvailable(1),
this.dataView.setUint8(this.byteOffset,e),this.byteOffset+=1,this},e.prototype.putInt16=function(e){return this.ensureAvailable(2),this.dataView.setInt16(this.byteOffset,e,!1),this.byteOffset+=2,this
},e.prototype.putUint16=function(e){return this.ensureAvailable(2),this.dataView.setUint16(this.byteOffset,e,!1),this.byteOffset+=2,this},e.prototype.putInt32=function(e){
return this.ensureAvailable(4),this.dataView.setInt32(this.byteOffset,e,!1),this.byteOffset+=4,this},e.prototype.putUint32=function(e){return this.ensureAvailable(4),
this.dataView.setUint32(this.byteOffset,e,!1),this.byteOffset+=4,this},e.prototype.putFloat32=function(e){return this.ensureAvailable(4),this.dataView.setFloat32(this.byteOffset,e,!1),
this.byteOffset+=4,this},e.prototype.putFloat64=function(e){return this.ensureAvailable(8),this.dataView.setFloat64(this.byteOffset,e,!1),this.byteOffset+=8,this},e.prototype.crc32=function(){
return n.crc32(new Uint8Array(this.dataView.buffer,0,this.byteOffset))},e.prototype.buffer=function(){return this.dataView.buffer.slice(0,this.byteOffset)},e}();a.Writer=i;var c=function(){
function e(e){if(this.byteOffset=0,e instanceof ArrayBuffer)this.dataView=new DataView(e);else{if(!(e instanceof DataView))throw new TypeError;this.dataView=e}}
return e.prototype.ensureAvailable=function(e){if(this.byteOffset+e>this.dataView.byteLength)throw new Error},e.prototype.getString=function(){var e=this.getUint16();this.ensureAvailable(e)
;var t=r.decode(this.dataView,this.byteOffset,e);return this.byteOffset+=e,t},e.prototype.getInt8=function(){this.ensureAvailable(1);var e=this.dataView.getInt8(this.byteOffset)
;return this.byteOffset+=1,e},e.prototype.getUint8=function(){this.ensureAvailable(1);var e=this.dataView.getUint8(this.byteOffset);return this.byteOffset+=1,e},e.prototype.getInt16=function(){
this.ensureAvailable(2);var e=this.dataView.getInt16(this.byteOffset,!1);return this.byteOffset+=2,e},e.prototype.getUint16=function(){this.ensureAvailable(2)
;var e=this.dataView.getUint16(this.byteOffset,!1);return this.byteOffset+=2,e},e.prototype.getInt32=function(){this.ensureAvailable(4);var e=this.dataView.getInt32(this.byteOffset,!1)
;return this.byteOffset+=4,e},e.prototype.getUint32=function(){this.ensureAvailable(4);var e=this.dataView.getUint32(this.byteOffset,!1);return this.byteOffset+=4,e},e.prototype.getFloat32=function(){
this.ensureAvailable(4);var e=this.dataView.getFloat32(this.byteOffset,!1);return this.byteOffset+=4,e},e.prototype.getFloat64=function(){this.ensureAvailable(8)
;var e=this.dataView.getFloat64(this.byteOffset,!1);return this.byteOffset+=8,e},e.prototype.remaining=function(){return this.dataView.byteLength-this.byteOffset},e}();a.Reader=c},{"./crc32":123,
"./utf8":126}],126:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.size=function(e){for(var t=0,a=0;a<e.length;a++){var n=e.charCodeAt(a);t+=n<128?1:n<2048?2:3}
return t},a.encode=function(e,t,a){for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t.setUint8(a++,127&r|0):r<2048?(t.setUint8(a++,r>>6&31|192),
t.setUint8(a++,r>>0&63|128)):(t.setUint8(a++,r>>12&15|224),t.setUint8(a++,r>>6&63|128),t.setUint8(a++,r>>0&63|128))}return a},a.decode=function(e,t,a){function n(){
throw new Error("Truncated UTF-8 stream")}for(var r,i,c,o="",s=t+a;t<s;)(r=e.getUint8(t++))<128?o+=String.fromCharCode(r):r<224?(t+1>s&&n(),i=e.getUint8(t++),
o+=String.fromCharCode((31&r)<<6|(63&i)<<0)):(t+2>s&&n(),i=e.getUint8(t++),c=e.getUint8(t++),o+=String.fromCharCode((15&r)<<12|(63&i)<<6|(63&c)<<0));return o}},{}],123:[function(e,t,a){"use strict"
;Object.defineProperty(a,"__esModule",{value:!0});var n=function(){for(var e=[],t=0;t<256;t++){for(var a=t,n=0;n<8;n++)a=1&a?3988292384^a>>>1:a>>>1;e[t]=a}return e}();a.crc32=function(e){
for(var t=4294967295,a=0;a<e.length;a++)t=t>>>8^n[255&(t^e[a])];return(4294967295^t)>>>0}},{}],49:[function(e,t,a){"use strict";function n(e){
for(var t=e.text,a=e.position,n=e.errorPositions,i=e.garbage,o=[],s=0;s<t.length;s++)i&&s==a&&o.push(d.createElement(_,{key:"garbage",garbage:i})),c(o,t,s,!0,r(s,a,n));return d.createElement("div",{
key:t,className:b},o)}function r(e,t,a){var n=[];return-1!=a.indexOf(e)&&n.push(k),e<t&&n.push(p),e==t&&n.push(m),n}function i(e,t){e.classList.remove(k),e.classList.remove(p),e.classList.remove(m)
;for(var a=0,n=t;a<n.length;a++){var r=n[a];e.classList.add(r)}}function c(e,t,a,n,r){var i=t.charCodeAt(a),c=String(a);switch(i){case 9:o=l(y,f,r),e.push(d.createElement("span",{ref:c,key:a,
className:o},"↹"),d.createElement("wbr",{key:-a}));break;case 10:o=l(y,f,r),e.push(d.createElement("span",{ref:c,key:a,className:o},"↵"),n?d.createElement("br",{key:-a}):d.createElement("wbr",{key:-a
}));break;case 32:o=l(y,f,r),e.push(d.createElement("span",{ref:c,key:a,className:o},"␣"),d.createElement("wbr",{key:-a}));break;default:var o=l(y,r);e.push(d.createElement("span",{ref:c,key:a,
className:o},String.fromCharCode(i)))}}function o(e){return e?"TextInput--size"+e:null}Object.defineProperty(a,"__esModule",{value:!0})
;var s=e("tslib"),l=e("classnames"),u=e("prop-types"),d=e("react"),v=e("../../util/systeminput"),b="TextInput-fragment",y="TextInput-item",f="TextInput-item--special",k="TextInput-item--error",p="TextInput-item--ready",m="TextInput-item--cursor",h=v.newCursor("TextInput--blink"),g=function(e){
function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.fragment,a=e.size,r=l("TextExample",o(a))
;return d.createElement("div",{className:r},n(t))},t.propTypes={fragment:u.shape({text:u.string.isRequired,position:u.number.isRequired,errorPositions:u.array.isRequired,garbage:u.string.isRequired
}).isRequired,size:u.oneOf(["X0","X1","X2","X3"])},t.defaultProps={fragment:null,size:"X0"},t}(d.Component);a.TextExample=g;var K=function(e){function t(t){var a=e.call(this,t)||this
;a.systemInput=null;var n=t.fragment,r=n.text,i=n.position,c=n.errorPositions,o=n.garbage;return a.state={focus:!1,text:r,position:i,errorPositions:c,garbage:o},a.clickHandler=a.clickHandler.bind(a),
a.systemInputFocusHandler=a.systemInputFocusHandler.bind(a),a.systemInputBlurHandler=a.systemInputBlurHandler.bind(a),a}return s.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){
var t=e.fragment,a=t.text,n=t.position,r=t.errorPositions,i=t.garbage;this.setState(Object.assign({},this.state,{text:a,position:n,errorPositions:r,garbage:i}))},t.prototype.update=function(e){
var t=e.text,a=e.position,n=e.errorPositions,r=e.garbage;this.setState(Object.assign({},this.state,{text:t,position:a,errorPositions:n,garbage:r}))},t.prototype.isFocused=function(){
return!!this.systemInput&&this.systemInput.isFocused()},t.prototype.focus=function(){this.systemInput&&this.systemInput.focus()},t.prototype.blur=function(){this.systemInput&&this.systemInput.blur()},
t.prototype.render=function(){var e=this,t=this,a=t.props.size,n=t.state,r=n.focus,i=n.text,c=n.position,s=n.errorPositions,u=n.garbage,b=l("TextInput",o(a),!r&&"TextInput--inactive")
;return i?d.createElement("div",{className:b,onClick:this.clickHandler,onMouseDown:this.clickHandler,onMouseUp:this.clickHandler},d.createElement(v.SystemInput,{ref:function(t){e.systemInput=t},
onFocus:this.systemInputFocusHandler,onBlur:this.systemInputBlurHandler}),d.createElement(E,{focus:r,text:i,position:c,errorPositions:s,garbage:u}),!r&&d.createElement("div",{
className:"TextInput-label"},"Click to activate...")):d.createElement("div",{className:b})},t.prototype.clickHandler=function(e){e.preventDefault(),this.focus()},
t.prototype.systemInputFocusHandler=function(e){var t=this;this.setState(Object.assign({},this.state,{focus:this.systemInput.isFocused()}),function(){var e=t.props.onFocus;e&&e()})},
t.prototype.systemInputBlurHandler=function(e){var t=this;this.setState(Object.assign({},this.state,{focus:this.systemInput.isFocused()}),function(){var e=t.props.onBlur;e&&e()})},t.propTypes={
fragment:u.shape({text:u.string.isRequired,position:u.number.isRequired,errorPositions:u.array.isRequired,garbage:u.string.isRequired}).isRequired,size:u.oneOf(["X0","X1","X2","X3"])},t.defaultProps={
fragment:null,size:"X0"},t}(d.Component);a.TextInput=K;var E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),
t.prototype.shouldComponentUpdate=function(e,t){var a=e.focus,n=e.text,c=e.position,o=e.errorPositions,s=e.garbage;if(this.props.focus!=a)return!0;if(this.props.text!=n)return!0
;if(this.props.garbage!=s)return!0;a&&c!=this.props.position&&h.reset();for(var l=0;l<n.length;l++)i(this.refs[l],r(l,c,o));return!1},t.prototype.render=function(){
var e=this.props,t=e.focus,a=e.text,r=e.position,i=e.errorPositions,c=e.garbage;return t?v.withCursor(h,n({text:a,position:r,errorPositions:i,garbage:c})):n({text:a,position:r,errorPositions:i,
garbage:c})},t}(d.Component),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(t,e),t.prototype.render=function(){
for(var e=this.props.garbage,t=[],a=0;a<e.length;a++)c(t,e,a,!1,"TextInput-item--garbage");return d.createElement("span",{className:"TextInput-garbage"},t)},t}(d.PureComponent)},{
"../../util/systeminput":55,classnames:"classnames","prop-types":"prop-types",react:"react",tslib:"tslib"}],55:[function(e,t,a){"use strict";function n(e){function t(e){var t=c.normalize(e)
;t.ctrlKey||t.altKey||t.metaKey||"Tab"!=t.key||e.preventDefault(),n()}function a(e){n()}function n(){e.value=""}e.addEventListener("keydown",t,!0),e.addEventListener("keypress",t,!0),
e.addEventListener("keyup",t,!0),e.addEventListener("input",function(e){n()},!0),e.addEventListener("cut",a,!0),e.addEventListener("copy",a,!0),e.addEventListener("paste",a,!0),
e.addEventListener("compositionstart",function(e){},!0),e.addEventListener("compositionupdate",function(e){},!0),e.addEventListener("compositionend",function(e){},!0)}
Object.defineProperty(a,"__esModule",{value:!0});var r=e("tslib"),i=e("react"),c=e("../../lib/keyboard"),o=e("../../lib/runtime/global"),s=e("../../lib/runtime/timer"),l={position:"absolute",
top:"0px",left:"0px",width:"0em",height:"1em",overflow:"hidden"},u={display:"block",margin:"0px",padding:"0px",width:"1em",height:"1em",fontSize:"1em",lineHeight:"1em",border:"none",outline:"none"
},d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.componentDidMount=function(){n(this.element)},t.prototype.isFocused=function(){
return null!=this.element&&o.DOCUMENT.activeElement==this.element},t.prototype.focus=function(){null!=this.element&&o.DOCUMENT.activeElement!=this.element&&this.element.focus()},
t.prototype.blur=function(){null!=this.element&&o.DOCUMENT.activeElement==this.element&&this.element.blur()},t.prototype.render=function(){var e=this,t=this.props,a=t.onFocus,n=t.onBlur
;return i.createElement("div",{style:l},i.createElement("input",{ref:function(t){e.element=t},type:"text",style:u,onFocus:a,onBlur:n}))},t}(i.PureComponent);a.SystemInput=d,a.intercept=n,
a.newCursor=function(e){function t(){i&&(r&&r.cancel(),r=s.systemTimer.setInterval(n,300),i.classList.add(e))}function a(){r&&(r.cancel(),r=null),i&&(i.classList.remove(e),i=null)}function n(){
i&&i.classList.toggle(e)}var r=null,i=null;return{enable:function(e){a(),i=e,t()},reset:t,disable:function(){a()}}},a.withCursor=function(e,t){return i.cloneElement(t,{ref:function(t){
t?e.enable(t):e.disable()}})}},{"../../lib/keyboard":138,"../../lib/runtime/global":145,"../../lib/runtime/timer":156,react:"react",tslib:"tslib"}],156:[function(e,t,a){"use strict"
;Object.defineProperty(a,"__esModule",{value:!0});var n=e("./global");a.systemTimer={setTimeout:function(e,t){var a=n.WINDOW.setTimeout(e,t);return{get callback(){return e},cancel:function(){
n.WINDOW.clearTimeout(a)}}},setInterval:function(e,t){var a=n.WINDOW.setInterval(e,t);return{get callback(){return e},cancel:function(){n.WINDOW.clearInterval(a)}}}}},{"./global":145}],
3:[function(e,t,a){"use strict";function n(e){return{onKeyDown:function(t){e.onKeyDown(t),t.ctrlKey||t.altKey||t.metaKey||t.charCode>0&&t.charCode<=32&&e.onInput(t.charCode)},onKeyPress:function(t){
t.ctrlKey||t.altKey||t.metaKey||t.charCode>32&&e.onInput(t.charCode)},onKeyUp:function(t){e.onKeyUp(t)}}}function r(e,t){function a(t){if(t.code&&t.key)return t;var a={native:t.native,type:t.type,
timeStamp:t.timeStamp,vk:t.vk,code:t.code,key:t.key,charCode:t.charCode,shiftKey:t.shiftKey,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey},n=e.keysByVk[t.vk];if(null!=n){
var r=l.layoutKeyCharCode(n,a.shiftKey,a.altKey);a.code=n.id,a.key=String.fromCharCode(r)}return Object.freeze(a)}return{onKeyDown:function(e){t.onKeyDown(a(e))},onKeyPress:function(e){t.onKeyPress(e)
},onKeyUp:function(e){t.onKeyUp(a(e))}}}function i(e,t){function a(t){var a={native:t.native,type:t.type,timeStamp:t.timeStamp,vk:t.vk,code:t.code,key:t.key,charCode:t.charCode,shiftKey:t.shiftKey,
altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey};if(t.code&&t.key){var n=e.keysById[t.code];if(null!=n){var r=l.layoutKeyCharCode(n,a.shiftKey,a.altKey);a.code=n.id,a.key=String.fromCharCode(r),
a.charCode=r}}return Object.freeze(a)}return{onKeyDown:function(e){var n=a(e);t.onKeyDown(n),t.onKeyPress(n)},onKeyPress:function(e){},onKeyUp:function(e){var n=a(e);t.onKeyUp(n)}}}function c(e){
return!("isTrusted"in e)||e.isTrusted}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../../lib/keyboard"),s=e("../../lib/runtime/global"),l=e("./layout"),u=null
;s.WINDOW.addEventListener("keydown",function(e){null!=u&&c(e)&&u.onKeyDown(o.normalize(e))},!0),s.WINDOW.addEventListener("keypress",function(e){null!=u&&c(e)&&u.onKeyPress(o.normalize(e))},!0),
s.WINDOW.addEventListener("keyup",function(e){null!=u&&c(e)&&u.onKeyUp(o.normalize(e))},!0),a.translate=function(e){u=e},a.newTranslator=function(e,t,a){var c=n(a)
;return t&&e.variantOf?r(e.variantOf,i(e,c)):r(e,c)},a.newSimpleTranslator=n},{"../../lib/keyboard":138,"../../lib/runtime/global":145,"./layout":5}],138:[function(e,t,a){"use strict";function n(e,t){
return e+"/"+t}Object.defineProperty(a,"__esModule",{value:!0});var r,i=e("./lang");!function(e){e[e.Backquote=0]="Backquote",e[e.Backslash=1]="Backslash",e[e.Backspace=2]="Backspace",
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
e[e.F9=103]="F9",e[e.F10=104]="F10",e[e.F11=105]="F11",e[e.F12=106]="F12",e[e.PrintScreen=107]="PrintScreen",e[e.ScrollLock=108]="ScrollLock",e[e.Pause=109]="Pause"}(r=a.Code||(a.Code={}))
;var c=KeyboardEvent.DOM_KEY_LOCATION_STANDARD,o=KeyboardEvent.DOM_KEY_LOCATION_LEFT,s=KeyboardEvent.DOM_KEY_LOCATION_RIGHT,l=KeyboardEvent.DOM_KEY_LOCATION_NUMPAD,u=function(){function e(e,t,a,n){
if(void 0===n&&(n=a),!(a in r))throw new Error;return Object.freeze({vk:e,location:t,code:a,key:n})}
for(var t=i.map(),a=0,u=[e(8,c,"Backspace"),e(18,o,"AltLeft","Alt"),e(18,s,"AltRight","Alt"),e(225,s,"AltRight","Alt"),e(20,c,"CapsLock"),e(93,c,"ContextMenu"),e(17,o,"ControlLeft","Control"),e(17,s,"ControlRight","Control"),e(13,c,"Enter"),e(91,o,"OSLeft","OS"),e(91,s,"OSRight","OS"),e(16,o,"ShiftLeft","Shift"),e(16,s,"ShiftRight","Shift"),e(32,c,"Space"," "),e(9,c,"Tab"),e(46,c,"Delete"),e(35,c,"End"),e(36,c,"Home"),e(45,c,"Insert"),e(34,c,"PageDown"),e(33,c,"PageUp"),e(40,c,"ArrowDown"),e(37,c,"ArrowLeft"),e(39,c,"ArrowRight"),e(38,c,"ArrowUp"),e(144,c,"NumLock"),e(96,l,"Numpad0"),e(45,l,"Numpad0"),e(97,l,"Numpad1"),e(35,l,"Numpad1"),e(98,l,"Numpad2"),e(40,l,"Numpad2"),e(99,l,"Numpad3"),e(34,l,"Numpad3"),e(100,l,"Numpad4"),e(37,l,"Numpad4"),e(101,l,"Numpad5"),e(12,l,"Numpad5"),e(102,l,"Numpad6"),e(39,l,"Numpad6"),e(103,l,"Numpad7"),e(36,l,"Numpad7"),e(104,l,"Numpad8"),e(38,l,"Numpad8"),e(105,l,"Numpad9"),e(33,l,"Numpad9"),e(110,l,"NumpadDecimal"),e(46,l,"NumpadDecimal"),e(111,l,"NumpadDivide"),e(106,l,"NumpadMultiply"),e(109,l,"NumpadSubtract"),e(107,l,"NumpadAdd"),e(13,l,"NumpadEnter"),e(188,l,"NumpadComma"),e(27,c,"Escape"),e(112,c,"F1"),e(113,c,"F2"),e(114,c,"F3"),e(115,c,"F4"),e(116,c,"F5"),e(117,c,"F6"),e(118,c,"F7"),e(119,c,"F8"),e(120,c,"F9"),e(121,c,"F10"),e(122,c,"F11"),e(123,c,"F12"),e(44,c,"PrintScreen"),e(145,c,"ScrollLock"),e(19,c,"Pause")];a<u.length;a++){
var d=u[a];t[n(d.vk,d.location)]=d}return Object.freeze(t)}();a.normalize=function(e){var t=e.keyCode,a="",r="",i=e.charCode;switch(e.keyCode){case 59:t=186;break;case 61:t=187;break;case 173:t=189
;break;case 225:t=18,a="AltRight",r="AltGraph",i=0}if(""==a||""==r)if("code"in e&&"key"in e)a=e.code,r=e.key;else{var c=u[n(t,e.location)];null!=c&&(a=c.code,r=c.key)}switch(r){case"Backspace":i=8
;break;case"Tab":i=9;break;case"Enter":i=10;break;case"Space":case" ":i=32}return Object.freeze({native:e,type:e.type,timeStamp:e.timeStamp,vk:t,code:a,key:r,charCode:i,shiftKey:e.shiftKey,
altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}},{"./lang":139}],5:[function(e,t,a){"use strict";function n(e,t,a,n,s,u,d){function v(e,t,a,n){
e>0&&!l.isCombiningDiacritic(e)&&y(i(e,t,a,n,null,null,null))}function b(e,t,a,n){if(e>0&&l.isCombiningDiacritic(e))for(var r=0,c=Object.values(m);r<c.length;r++){var o=c[r];if(null==o.deadKey){
var s=l.combineDiacritic(o.charCode,e);null!=s&&y(i(s.combined,o.key,o.shift,o.alt,t,a,n))}}}function y(e){var t=m[e.charCode];null!=t?c(t)>c(e)&&(m[e.charCode]=e):m[e.charCode]=e}
for(var f=[],k=o.map(),p=o.map(),m=o.map(),h=0,g=Object.entries(s);h<g.length;h++){var K=g[h],E=K[0],_=K[1],N=u[E];if(null!=N){var D=r(E,_.vk,0|_.a,0|_.b,0|_.c,0|_.d,N.x,N.y,N.shape,N.zone||null)
;f.push(D),k[D.id]=D,p[D.vk]=D}}return f.forEach(function(e){v(e.a,e,!1,!1),v(e.b,e,!0,!1),v(e.c,e,!1,!0),v(e.d,e,!0,!0)}),f.forEach(function(e){b(e.a,e,!1,!1),b(e.b,e,!0,!1),b(e.c,e,!1,!0),
b(e.d,e,!0,!0)}),Object.freeze({id:e,xid:t,name:a,language:n,keyMap:s,geometryMap:u,variantOf:d,keys:f,keysById:k,keysByVk:p,combos:m})}function r(e,t,a,n,r,i,c,o,s,l){return Object.freeze({id:e,vk:t,
a:a,b:n,c:r,d:i,x:c,y:o,shape:s,zone:l})}function i(e,t,a,n,r,i,c){return Object.freeze({charCode:e,key:t,shift:a,alt:n,deadKey:r,deadShift:i,deadAlt:c})}function c(e){var t=1;return e.shift&&t++,
e.alt&&t++,e.deadKey&&(t++,e.deadShift&&t++,e.deadAlt&&t++),t}Object.defineProperty(a,"__esModule",{value:!0})
;var o=e("../../lib/lang"),s=e("../../lib/runtime/platform"),l=e("../../lib/unicode"),u=e("../util/enum"),d=e("../../data/layout"),v=e("./language"),b=function(e,t){
for(var a=o.map(),r=0,i=e;r<i.length;r++){var c=i[r];if(t.match(c.platform)){var s=u.byId(v.LANGUAGE,c.language),l=u.byId(a,c.variantOf,null),d=n(c.id,c.xid,c.name,s,c.keySet,c.geometry,l)
;if(null!=a[d.id])throw new Error;a[d.id]=d}}return Object.freeze(a)}(d.LAYOUT_LIST,s.newPlatform());a.getLayouts=function(){return b},a.getDefaultLayout=function(e){for(var t in e)return e[t]
;throw new Error},a.newLayout=n,a.layoutCharCodes=function(e,t){
for(var a=t.enableDeadKeys,n=void 0===a||a,r=t.enableShift,i=void 0===r||r,c=t.enableAlt,o=void 0===c||c,s=[],l=0,u=Object.values(e.combos);l<u.length;l++){var d=u[l]
;d.deadKey&&!n||d.shift&&!i||d.alt&&!o||s.push(d.charCode)}return s.sort()},a.layoutKeyCharCode=function(e,t,a){return a?t?e.d||e.c:e.c:t?e.b||e.a:e.a},a.keyComboComplexity=c},{"../../data/layout":62,
"../../lib/lang":139,"../../lib/runtime/platform":146,"../../lib/unicode":174,"../util/enum":51,"./language":4}],174:[function(e,t,a){"use strict";function n(e){return null!=s[e]}function r(e,t){
var a=u[t];return a?a[e]||null:null}function i(e,t,a,n){if(a.length!=n.length)throw new Error;o[e]=s[t]=Object.freeze({diacritic:e,combiningDiacritic:t});for(var r=u[t]=c.map(),i=0;i<a.length;i++){
var d=a.charCodeAt(i),v=n.charCodeAt(i);l[v]=r[d]=Object.freeze({uncombined:d,combined:v,diacritic:e,combiningDiacritic:t})}}Object.defineProperty(a,"__esModule",{value:!0});var c=e("./lang")
;a.DIACRITIC_ACUTE=180,a.COMBINING_DIACRITIC_ACUTE=769,a.DIACRITIC_DOUBLE_ACUTE=733,a.COMBINING_DIACRITIC_DOUBLE_ACUTE=779,a.DIACRITIC_BREVE=728,a.COMBINING_DIACRITIC_BREVE=774,a.DIACRITIC_CARON=711,
a.COMBINING_DIACRITIC_CARON=780,a.DIACRITIC_CEDILLA=184,a.COMBINING_DIACRITIC_CEDILLA=807,a.DIACRITIC_CIRCUMFLEX=710,a.COMBINING_DIACRITIC_CIRCUMFLEX=770,a.DIACRITIC_DIAERESIS=168,
a.COMBINING_DIACRITIC_DIAERESIS=776,a.DIACRITIC_GRAVE=96,a.COMBINING_DIACRITIC_GRAVE=768,a.DIACRITIC_TILDE=126,a.COMBINING_DIACRITIC_TILDE=771;var o=c.map(),s=c.map(),l=c.map(),u=c.map()
;a.isCombiningDiacritic=n,a.getDiacritic=function(e){var t;return null!=(t=o[e])?t:null!=(t=s[e])?t:null},a.combineDiacritic=r,a.uncombineDiacritic=function(e){return l[e]||null},
a.combine=function(e){for(var t="",a=0,i=0;i<e.length;i++){var c=e.charCodeAt(i);if(n(c)){if(a>0){var o=r(a,c);null!=o&&(a=o.combined)}}else a>0&&(t+=String.fromCharCode(a)),a=c}
return a>0&&(t+=String.fromCharCode(a)),t},i(a.DIACRITIC_ACUTE,a.COMBINING_DIACRITIC_ACUTE,"AaCcEeGgIiKkLlMmNnOoPpRrSsUuWwYyZz","ÁáĆćÉéǴǵÍíḰḱĹĺḾḿŃńÓóṔṕŔŕŚśÚúẂẃÝýŹź"),
i(a.DIACRITIC_DOUBLE_ACUTE,a.COMBINING_DIACRITIC_DOUBLE_ACUTE,"OoUu","ŐőŰű"),i(a.DIACRITIC_CEDILLA,a.COMBINING_DIACRITIC_CEDILLA,"CcDdEeGgHhKkLlNnRrSsTt","ÇçḐḑȨȩĢģḨḩĶķĻļŅņŖŗŞşŢţ"),
i(a.DIACRITIC_CIRCUMFLEX,a.COMBINING_DIACRITIC_CIRCUMFLEX,"AaCcEeGgHhIiJjOoSsUuWwYyZz","ÂâĈĉÊêĜĝĤĥÎîĴĵÔôŜŝÛûŴŵŶŷẐẑ"),
i(a.DIACRITIC_DIAERESIS,a.COMBINING_DIACRITIC_DIAERESIS,"AaEeHhIiOotUuWwXxYy","ÄäËëḦḧÏïÖöẗÜüẄẅẌẍŸÿ"),i(a.DIACRITIC_GRAVE,a.COMBINING_DIACRITIC_GRAVE,"AaEeIiNnOoUuWwYy","ÀàÈèÌìǸǹÒòÙùẀẁỲỳ"),
i(a.DIACRITIC_TILDE,a.COMBINING_DIACRITIC_TILDE,"AaEeIiNnOoUuVvYy","ÃãẼẽĨĩÑñÕõŨũṼṽỸỹ")},{"./lang":139}],146:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0})
;var n,r=e("./global");!function(e){e.LINUX="linux",e.OSX="osx",e.WINDOWS="windows",e.UNKNOWN="unknown"}(n=a.OS||(a.OS={}));var i;!function(e){e.CHROME="chrome",e.EDGE="edge",e.FIREFOX="firefox",
e.SAFARI="safari",e.TRIDENT="trident",e.UNKNOWN="unknown"}(i=a.Browser||(a.Browser={}));var c;!function(e){e.LEGACY="legacy",e.MODERN="modern"}(c=a.Specification||(a.Specification={})),
a.newPlatform=function(){
var e=r.WINDOW.navigator.userAgent,t=/(\bLinux\b)/i.test(e)?n.LINUX:/(\bMac\b|\biPhone\b|\biPad\b)/i.test(e)?n.OSX:/(\bWindows\b|\bWin32\b|\bWin64\b)/i.test(e)?n.WINDOWS:n.UNKNOWN,a=/(\bTrident\b)/i.test(e)?i.TRIDENT:/(\bEdge\b)/i.test(e)?i.EDGE:/(\bSafari\b)/i.test(e)?i.SAFARI:/(\bFirefox\b)/i.test(e)?i.FIREFOX:/(\bChrome\b)/i.test(e)?i.CHROME:i.UNKNOWN,o=r.DOCUMENT.createEvent("KeyboardEvent"),s=c.LEGACY
;return"code"in o&&"key"in o&&(s=c.MODERN),{os:t,browser:a,specification:s,match:function(e){return null==e||"any"==e||e==t},toString:function(){
return"OS family: "+t+"; Browser family: "+a+"; Keyboard events specification: "+s}}}},{"./global":145}],145:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),
a.WINDOW=window,a.DOCUMENT=document,a.ROOT_ELEMENT=document.documentElement,a.HEAD_ELEMENT=document.head,a.BODY_ELEMENT=document.body},{}],62:[function(e,t,a){"use strict"
;Object.defineProperty(a,"__esModule",{value:!0});var n=e("../lib/lang"),r=e("./geometry"),i=n.map(e("./layout/english_us.json"));a.KEY_SET_ENGLISH_US=i
;var c=n.map(e("./layout/english_us_international-win.json"));a.KEY_SET_ENGLISH_US_INTERNATIONAL_WIN=c;var o=n.map(e("./layout/english_uk-win.json"));a.KEY_SET_ENGLISH_UK_WIN=o
;var s=n.map(e("./layout/english_uk-osx.json"));a.KEY_SET_ENGLISH_UK_OSX=s;var l=n.map(e("./layout/english_uk_extended-win.json"));a.KEY_SET_ENGLISH_UK_EXTENDED_WIN=l
;var u=n.map(e("./layout/english_us_dvorak.json"));a.KEY_SET_ENGLISH_US_DVORAK=u;var d=n.map(e("./layout/english_us_dvorak_left_handed.json"));a.KEY_SET_ENGLISH_US_DVORAK_LEFT_HANDED=d
;var v=n.map(e("./layout/english_us_dvorak_right_handed.json"));a.KEY_SET_ENGLISH_US_DVORAK_RIGHT_HANDED=v;var b=n.map(e("./layout/english_us_colemak.json"));a.KEY_SET_ENGLISH_US_COLEMAK=b
;var y=n.map(e("./layout/english_us_workman.json"));a.KEY_SET_ENGLISH_US_WORKMAN=y;var f=n.map(e("./layout/german-win.json"));a.KEY_SET_GERMAN_WIN=f
;var k=n.map(e("./layout/german_switzerland-win.json"));a.KEY_SET_GERMAN_SWITZERLAND_WIN=k;var p=n.map(e("./layout/french-win.json"));a.KEY_SET_FRENCH_WIN=p
;var m=n.map(e("./layout/french_canada-win.json"));a.KEY_SET_FRENCH_CANADA_WIN=m;var h=n.map(e("./layout/french_switzerland-win.json"));a.KEY_SET_FRENCH_SWITZERLAND_WIN=h
;var g=n.map(e("./layout/italian-win.json"));a.KEY_SET_ITALIAN_WIN=g;var K=n.map(e("./layout/spanish-win.json"));a.KEY_SET_SPANISH_WIN=K;var E=n.map(e("./layout/spanish_variation-win.json"))
;a.KEY_SET_SPANISH_VARIATION_WIN=E;var _=n.map(e("./layout/portuguese-win.json"));a.KEY_SET_PORTUGUESE_WIN=_;var N=n.map(e("./layout/portuguese_brazilian_abtn2-win.json"))
;a.KEY_SET_PORTUGUESE_BRAZILIAN_ABTN2_WIN=N;var D=n.map(e("./layout/russian-win.json"));a.KEY_SET_RUSSIAN_WIN=D;var S=n.map(e("./layout/russian-osx.json"));a.KEY_SET_RUSSIAN_OSX=S
;var I=n.map(e("./layout/russian_typewriter-win.json"));a.KEY_SET_RUSSIAN_TYPEWRITER_WIN=I,a.LAYOUT_LIST=[{id:"us",xid:16,name:"US",language:"en",keySet:i,geometry:r.STANDARD_101,variantOf:null,
platform:null},{id:"uk",xid:17,name:"UK",language:"en",keySet:o,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"uk",xid:17,name:"UK",language:"en",keySet:s,geometry:r.STANDARD_101,
variantOf:null,platform:"osx"},{id:"uk",xid:17,name:"UK",language:"en",keySet:o,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"us-dvorak",xid:24,name:"US Dvorak",language:"en",keySet:u,
geometry:r.STANDARD_101,variantOf:"us",platform:null},{id:"us-colemak",xid:25,name:"US Colemak",language:"en",keySet:b,geometry:r.STANDARD_101,variantOf:"us",platform:null},{id:"us-workman",xid:26,
name:"US Workman",language:"en",keySet:y,geometry:r.STANDARD_101,variantOf:"us",platform:null},{id:"de",xid:32,name:"Germany",language:"de",keySet:f,geometry:r.STANDARD_102,variantOf:null,
platform:"windows"},{id:"de",xid:32,name:"Germany",language:"de",keySet:f,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"de",xid:32,name:"Germany",language:"de",keySet:f,
geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"de-ch",xid:33,name:"Switzerland",language:"de",keySet:k,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"de-ch",xid:33,
name:"Switzerland",language:"de",keySet:k,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"de-ch",xid:33,name:"Switzerland",language:"de",keySet:k,geometry:r.STANDARD_102,variantOf:null,
platform:"linux"},{id:"fr",xid:48,name:"France",language:"fr",keySet:p,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"fr",xid:48,name:"France",language:"fr",keySet:p,
geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"fr",xid:48,name:"France",language:"fr",keySet:p,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"fr-ca",xid:49,name:"Canada",
language:"fr",keySet:m,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"fr-ca",xid:49,name:"Canada",language:"fr",keySet:m,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{
id:"fr-ca",xid:49,name:"Canada",language:"fr",keySet:m,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"fr-ch",xid:50,name:"Switzerland",language:"fr",keySet:h,geometry:r.STANDARD_102,
variantOf:null,platform:"windows"},{id:"fr-ch",xid:50,name:"Switzerland",language:"fr",keySet:h,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"fr-ch",xid:50,name:"Switzerland",
language:"fr",keySet:h,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"it",xid:64,name:"Italy",language:"it",keySet:g,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"it",
xid:64,name:"Italy",language:"it",keySet:g,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"it",xid:64,name:"Italy",language:"it",keySet:g,geometry:r.STANDARD_102,variantOf:null,
platform:"linux"},{id:"es",xid:80,name:"Spanish",language:"es",keySet:K,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"es-variation",xid:81,name:"Spanish Variation",language:"es",
keySet:E,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"pt-br",xid:96,name:"Brazilian ABNT2",language:"pt",keySet:N,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{
id:"pt-br",xid:96,name:"Brazilian ABNT2",language:"pt",keySet:N,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"pt-br",xid:96,name:"Brazilian ABNT2",language:"pt",keySet:N,
geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"pt-pt",xid:98,name:"Portugal",language:"pt",keySet:_,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"pt-pt",xid:98,
name:"Portugal",language:"pt",keySet:_,geometry:r.STANDARD_102,variantOf:null,platform:"osx"},{id:"pt-pt",xid:98,name:"Portugal",language:"pt",keySet:_,geometry:r.STANDARD_102,variantOf:null,
platform:"linux"},{id:"ru",xid:112,name:"Russian",language:"ru",keySet:D,geometry:r.STANDARD_102,variantOf:null,platform:"windows"},{id:"ru",xid:112,name:"Russian",language:"ru",keySet:S,
geometry:r.STANDARD_101,variantOf:null,platform:"osx"},{id:"ru",xid:112,name:"Russian",language:"ru",keySet:D,geometry:r.STANDARD_102,variantOf:null,platform:"linux"},{id:"ru-typewriter",xid:113,
name:"Russian (Typewriter)",language:"ru",keySet:I,geometry:r.STANDARD_102,variantOf:null,platform:"windows"}]},{"../lib/lang":139,"./geometry":56,"./layout/english_uk-osx.json":63,
"./layout/english_uk-win.json":64,"./layout/english_uk_extended-win.json":65,"./layout/english_us.json":66,"./layout/english_us_colemak.json":67,"./layout/english_us_dvorak.json":68,
"./layout/english_us_dvorak_left_handed.json":69,"./layout/english_us_dvorak_right_handed.json":70,"./layout/english_us_international-win.json":71,"./layout/english_us_workman.json":72,
"./layout/french-win.json":73,"./layout/french_canada-win.json":74,"./layout/french_switzerland-win.json":75,"./layout/german-win.json":76,"./layout/german_switzerland-win.json":77,
"./layout/italian-win.json":78,"./layout/portuguese-win.json":79,"./layout/portuguese_brazilian_abtn2-win.json":80,"./layout/russian-osx.json":81,"./layout/russian-win.json":82,
"./layout/russian_typewriter-win.json":83,"./layout/spanish-win.json":84,"./layout/spanish_variation-win.json":85}],85:[function(e,t,a){t.exports={Backquote:{vk:220,a:39,b:183,c:92,d:0},Digit1:{vk:49,
a:49,b:170,c:124,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:47,c:35,d:0},Digit4:{vk:52,a:52,b:40,c:188,d:0},Digit5:{vk:53,a:53,b:41,c:189,d:0},Digit6:{vk:54,a:54,b:161,c:172,d:0},
Digit7:{vk:55,a:55,b:33,c:95,d:0},Digit8:{vk:56,a:56,b:191,c:35,d:0},Digit9:{vk:57,a:57,b:63,c:167,d:0},Digit0:{vk:48,a:48,b:8359,c:92,d:0},Minus:{vk:189,a:45,b:43,c:42,d:0},Equal:{vk:219,a:776,b:776,
c:771,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,
c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:221,a:247,b:215,c:91,d:0},BracketRight:{vk:186,
a:768,b:768,c:93,d:0},Backslash:{vk:191,a:769,b:769,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:36,d:0},KeyS:{vk:83,a:115,b:83,c:38,d:0},KeyD:{vk:68,a:100,b:68,c:64,d:0},KeyF:{vk:70,a:102,b:70,c:91,d:0},KeyG:{
vk:71,a:103,b:71,c:93,d:0},KeyH:{vk:72,a:104,b:72,c:124,d:0},KeyJ:{vk:74,a:106,b:74,c:163,d:0},KeyK:{vk:75,a:107,b:75,c:177,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:241,b:209,c:126,d:0
},Quote:{vk:222,a:231,b:199,c:123,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},
KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:770,d:0},Slash:{vk:223,a:61,b:37,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,
c:0,d:0}}},{}],84:[function(e,t,a){t.exports={Backquote:{vk:220,a:186,b:170,c:92,d:0},Digit1:{vk:49,a:49,b:33,c:124,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:183,c:35,d:0},Digit4:{
vk:52,a:52,b:36,c:771,d:0},Digit5:{vk:53,a:53,b:37,c:8364,d:0},Digit6:{vk:54,a:54,b:38,c:172,d:0},Digit7:{vk:55,a:55,b:47,c:0,d:0},Digit8:{vk:56,a:56,b:40,c:0,d:0},Digit9:{vk:57,a:57,b:41,c:0,d:0},
Digit0:{vk:48,a:48,b:61,c:0,d:0},Minus:{vk:219,a:39,b:63,c:0,d:0},Equal:{vk:221,a:161,b:191,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},
KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{
vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:186,a:768,b:770,c:91,d:0},BracketRight:{vk:187,a:43,b:42,c:93,d:0},Backslash:{vk:191,a:231,b:199,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,
b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,
c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:241,b:209,c:0,d:0},Quote:{vk:222,a:769,b:776,c:123,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,
b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,
c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:0,d:0}}},{}],83:[function(e,t,a){t.exports={Backquote:{vk:192,a:124,b:43,c:0,d:0},Digit1:{vk:49,a:8470,b:49,c:0,d:0},
Digit2:{vk:50,a:45,b:50,c:0,d:0},Digit3:{vk:51,a:47,b:51,c:0,d:0},Digit4:{vk:52,a:34,b:52,c:0,d:0},Digit5:{vk:53,a:58,b:53,c:0,d:0},Digit6:{vk:54,a:44,b:54,c:0,d:0},Digit7:{vk:55,a:46,b:55,c:0,d:0},
Digit8:{vk:56,a:95,b:56,c:8381,d:0},Digit9:{vk:57,a:63,b:57,c:0,d:0},Digit0:{vk:48,a:37,b:48,c:0,d:0},Minus:{vk:189,a:33,b:61,c:0,d:0},Equal:{vk:187,a:59,b:92,c:0,d:0},KeyQ:{vk:81,a:1081,b:1049,c:0,
d:0},KeyW:{vk:87,a:1094,b:1062,c:0,d:0},KeyE:{vk:69,a:1091,b:1059,c:0,d:0},KeyR:{vk:82,a:1082,b:1050,c:0,d:0},KeyT:{vk:84,a:1077,b:1045,c:0,d:0},KeyY:{vk:89,a:1085,b:1053,c:0,d:0},KeyU:{vk:85,a:1075,
b:1043,c:0,d:0},KeyI:{vk:73,a:1096,b:1064,c:0,d:0},KeyO:{vk:79,a:1097,b:1065,c:0,d:0},KeyP:{vk:80,a:1079,b:1047,c:0,d:0},BracketLeft:{vk:219,a:1093,b:1061,c:0,d:0},BracketRight:{vk:221,a:1098,b:1066,
c:0,d:0},Backslash:{vk:220,a:41,b:40,c:0,d:0},KeyA:{vk:65,a:1092,b:1060,c:0,d:0},KeyS:{vk:83,a:1099,b:1067,c:0,d:0},KeyD:{vk:68,a:1074,b:1042,c:0,d:0},KeyF:{vk:70,a:1072,b:1040,c:0,d:0},KeyG:{vk:71,
a:1087,b:1055,c:0,d:0},KeyH:{vk:72,a:1088,b:1056,c:0,d:0},KeyJ:{vk:74,a:1086,b:1054,c:0,d:0},KeyK:{vk:75,a:1083,b:1051,c:0,d:0},KeyL:{vk:76,a:1076,b:1044,c:0,d:0},Semicolon:{vk:186,a:1078,b:1046,c:0,
d:0},Quote:{vk:222,a:1101,b:1069,c:0,d:0},KeyZ:{vk:90,a:1103,b:1071,c:0,d:0},KeyX:{vk:88,a:1095,b:1063,c:0,d:0},KeyC:{vk:67,a:1089,b:1057,c:0,d:0},KeyV:{vk:86,a:1084,b:1052,c:0,d:0},KeyB:{vk:66,
a:1080,b:1048,c:0,d:0},KeyN:{vk:78,a:1090,b:1058,c:0,d:0},KeyM:{vk:77,a:1100,b:1068,c:0,d:0},Comma:{vk:188,a:1073,b:1041,c:0,d:0},Period:{vk:190,a:1102,b:1070,c:0,d:0},Slash:{vk:191,a:1105,b:1025,c:0,
d:0},IntlBackslash:{vk:226,a:41,b:40,c:0,d:0}}},{}],82:[function(e,t,a){t.exports={Backquote:{vk:192,a:1105,b:1025,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:0,d:0},Digit3:{
vk:51,a:51,b:8470,c:0,d:0},Digit4:{vk:52,a:52,b:59,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:58,c:0,d:0},Digit7:{vk:55,a:55,b:63,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:8381,d:0},
Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:1081,b:1049,c:0,d:0},KeyW:{vk:87,a:1094,b:1062,c:0,d:0
},KeyE:{vk:69,a:1091,b:1059,c:0,d:0},KeyR:{vk:82,a:1082,b:1050,c:0,d:0},KeyT:{vk:84,a:1077,b:1045,c:0,d:0},KeyY:{vk:89,a:1085,b:1053,c:0,d:0},KeyU:{vk:85,a:1075,b:1043,c:0,d:0},KeyI:{vk:73,a:1096,
b:1064,c:0,d:0},KeyO:{vk:79,a:1097,b:1065,c:0,d:0},KeyP:{vk:80,a:1079,b:1047,c:0,d:0},BracketLeft:{vk:219,a:1093,b:1061,c:0,d:0},BracketRight:{vk:221,a:1098,b:1066,c:0,d:0},Backslash:{vk:220,a:92,
b:47,c:0,d:0},KeyA:{vk:65,a:1092,b:1060,c:0,d:0},KeyS:{vk:83,a:1099,b:1067,c:0,d:0},KeyD:{vk:68,a:1074,b:1042,c:0,d:0},KeyF:{vk:70,a:1072,b:1040,c:0,d:0},KeyG:{vk:71,a:1087,b:1055,c:0,d:0},KeyH:{
vk:72,a:1088,b:1056,c:0,d:0},KeyJ:{vk:74,a:1086,b:1054,c:0,d:0},KeyK:{vk:75,a:1083,b:1051,c:0,d:0},KeyL:{vk:76,a:1076,b:1044,c:0,d:0},Semicolon:{vk:186,a:1078,b:1046,c:0,d:0},Quote:{vk:222,a:1101,
b:1069,c:0,d:0},KeyZ:{vk:90,a:1103,b:1071,c:0,d:0},KeyX:{vk:88,a:1095,b:1063,c:0,d:0},KeyC:{vk:67,a:1089,b:1057,c:0,d:0},KeyV:{vk:86,a:1084,b:1052,c:0,d:0},KeyB:{vk:66,a:1080,b:1048,c:0,d:0},KeyN:{
vk:78,a:1090,b:1058,c:0,d:0},KeyM:{vk:77,a:1100,b:1068,c:0,d:0},Comma:{vk:188,a:1073,b:1041,c:0,d:0},Period:{vk:190,a:1102,b:1070,c:0,d:0},Slash:{vk:191,a:46,b:44,c:0,d:0},IntlBackslash:{vk:226,a:92,
b:47,c:0,d:0}}},{}],81:[function(e,t,a){t.exports={Backquote:{vk:192,a:93,b:91,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:0,d:0},Digit3:{vk:51,a:51,b:8470,c:0,d:0},Digit4:{
vk:52,a:52,b:37,c:0,d:0},Digit5:{vk:53,a:53,b:58,c:0,d:0},Digit6:{vk:54,a:54,b:44,c:0,d:0},Digit7:{vk:55,a:55,b:46,c:0,d:0},Digit8:{vk:56,a:56,b:59,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{
vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:1081,b:1049,c:0,d:0},KeyW:{vk:87,a:1094,b:1062,c:0,d:0},KeyE:{vk:69,a:1091,b:1059,c:0,d:0},
KeyR:{vk:82,a:1082,b:1050,c:0,d:0},KeyT:{vk:84,a:1077,b:1045,c:0,d:0},KeyY:{vk:89,a:1085,b:1053,c:0,d:0},KeyU:{vk:85,a:1075,b:1043,c:0,d:0},KeyI:{vk:73,a:1096,b:1064,c:0,d:0},KeyO:{vk:79,a:1097,
b:1065,c:0,d:0},KeyP:{vk:80,a:1079,b:1047,c:0,d:0},BracketLeft:{vk:219,a:1093,b:1061,c:0,d:0},BracketRight:{vk:221,a:1098,b:1066,c:0,d:0},Backslash:{vk:220,a:1105,b:1025,c:0,d:0},KeyA:{vk:65,a:1092,
b:1060,c:0,d:0},KeyS:{vk:83,a:1099,b:1067,c:0,d:0},KeyD:{vk:68,a:1074,b:1042,c:0,d:0},KeyF:{vk:70,a:1072,b:1040,c:0,d:0},KeyG:{vk:71,a:1087,b:1055,c:0,d:0},KeyH:{vk:72,a:1088,b:1056,c:0,d:0},KeyJ:{
vk:74,a:1086,b:1054,c:0,d:0},KeyK:{vk:75,a:1083,b:1051,c:0,d:0},KeyL:{vk:76,a:1076,b:1044,c:0,d:0},Semicolon:{vk:186,a:1078,b:1046,c:0,d:0},Quote:{vk:222,a:1101,b:1069,c:0,d:0},KeyZ:{vk:90,a:1103,
b:1071,c:0,d:0},KeyX:{vk:88,a:1095,b:1063,c:0,d:0},KeyC:{vk:67,a:1089,b:1057,c:0,d:0},KeyV:{vk:86,a:1084,b:1052,c:0,d:0},KeyB:{vk:66,a:1080,b:1048,c:0,d:0},KeyN:{vk:78,a:1090,b:1058,c:0,d:0},KeyM:{
vk:77,a:1100,b:1068,c:0,d:0},Comma:{vk:188,a:1073,b:1041,c:0,d:0},Period:{vk:190,a:1102,b:1070,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0}}},{}],80:[function(e,t,a){t.exports={Backquote:{vk:192,a:39,
b:34,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:185,d:0},Digit2:{vk:50,a:50,b:64,c:178,d:0},Digit3:{vk:51,a:51,b:35,c:179,d:0},Digit4:{vk:52,a:52,b:36,c:163,d:0},Digit5:{vk:53,a:53,b:37,c:162,d:0},Digit6:{
vk:54,a:54,b:776,c:172,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{
vk:187,a:61,b:43,c:167,d:0},KeyQ:{vk:81,a:113,b:81,c:47,d:0},KeyW:{vk:87,a:119,b:87,c:63,d:0},KeyE:{vk:69,a:101,b:69,c:176,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{
vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:769,b:768,c:0,d:0},
BracketRight:{vk:221,a:91,b:123,c:170,d:0},Backslash:{vk:220,a:93,b:125,c:186,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,
b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:231,
b:199,c:0,d:0},Quote:{vk:222,a:771,b:770,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:8354,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,
b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:59,b:58,c:0,d:0},IntlBackslash:{vk:226,
a:92,b:124,c:0,d:0}}},{}],79:[function(e,t,a){t.exports={Backquote:{vk:220,a:92,b:124,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:35,c:163,d:0},
Digit4:{vk:52,a:52,b:36,c:167,d:0},Digit5:{vk:53,a:53,b:37,c:8364,d:0},Digit6:{vk:54,a:54,b:38,c:0,d:0},Digit7:{vk:55,a:55,b:47,c:123,d:0},Digit8:{vk:56,a:56,b:40,c:91,d:0},Digit9:{vk:57,a:57,b:41,
c:93,d:0},Digit0:{vk:48,a:48,b:61,c:125,d:0},Minus:{vk:219,a:39,b:63,c:0,d:0},Equal:{vk:221,a:171,b:187,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,
c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,
d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:187,a:43,b:42,c:776,d:0},BracketRight:{vk:186,a:769,b:768,c:93,d:0},Backslash:{vk:191,a:771,b:770,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{
vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,
a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:231,b:199,c:0,d:0},Quote:{vk:222,a:186,b:170,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{
vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,
a:46,b:58,c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:0,d:0}}},{}],78:[function(e,t,a){t.exports={Backquote:{vk:220,a:92,b:124,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0
},Digit2:{vk:50,a:50,b:34,c:0,d:0},Digit3:{vk:51,a:51,b:163,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:8364,d:0},Digit6:{vk:54,a:54,b:38,c:0,d:0},Digit7:{vk:55,a:55,b:47,c:0,
d:0},Digit8:{vk:56,a:56,b:40,c:0,d:0},Digit9:{vk:57,a:57,b:41,c:0,d:0},Digit0:{vk:48,a:48,b:61,c:0,d:0},Minus:{vk:219,a:39,b:63,c:0,d:0},Equal:{vk:221,a:236,b:94,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,
d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},
KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:186,a:232,b:233,c:91,d:123},BracketRight:{vk:187,a:43,b:42,c:93,d:125},Backslash:{
vk:191,a:249,b:167,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,
a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:242,b:231,c:64,d:0},Quote:{vk:222,a:224,b:176,c:35,d:0},KeyZ:{
vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,
a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:0,d:0}}},{}],77:[function(e,t,a){t.exports={
Backquote:{vk:191,a:167,b:176,c:0,d:0},Digit1:{vk:49,a:49,b:43,c:166,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:42,c:35,d:0},Digit4:{vk:52,a:52,b:231,c:176,d:0},Digit5:{vk:53,a:53,
b:37,c:167,d:0},Digit6:{vk:54,a:54,b:38,c:172,d:0},Digit7:{vk:55,a:55,b:47,c:124,d:0},Digit8:{vk:56,a:56,b:40,c:162,d:0},Digit9:{vk:57,a:57,b:41,c:0,d:0},Digit0:{vk:48,a:48,b:61,c:0,d:0},Minus:{
vk:219,a:39,b:63,c:769,d:0},Equal:{vk:221,a:770,b:768,c:771,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},
KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:90,a:122,b:90,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},
BracketLeft:{vk:186,a:220,b:200,c:91,d:0},BracketRight:{vk:192,a:776,b:33,c:93,d:0},Backslash:{vk:223,a:36,b:163,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,
a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,
b:76,c:0,d:0},Semicolon:{vk:222,a:214,b:201,c:0,d:0},Quote:{vk:220,a:196,b:192,c:123,d:0},KeyZ:{vk:89,a:121,b:89,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,
a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:0,d:0},Slash:{vk:189,
a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:92,d:0}}},{}],76:[function(e,t,a){t.exports={Backquote:{vk:220,a:770,b:176,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:178,
d:0},Digit3:{vk:51,a:51,b:167,c:179,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:38,c:0,d:0},Digit7:{vk:55,a:55,b:47,c:123,d:0},Digit8:{vk:56,a:56,b:40,
c:91,d:0},Digit9:{vk:57,a:57,b:41,c:93,d:0},Digit0:{vk:48,a:48,b:61,c:125,d:0},Minus:{vk:219,a:223,b:63,c:92,d:0},Equal:{vk:221,a:769,b:768,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:64,d:0},KeyW:{vk:87,a:119,
b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:90,a:122,b:90,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,
c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:186,a:252,b:220,c:0,d:0},BracketRight:{vk:187,a:43,b:42,c:126,d:0},Backslash:{vk:191,a:35,b:39,c:0,d:0},KeyA:{
vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,
a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:192,a:246,b:214,c:0,d:0},Quote:{vk:222,a:228,b:196,c:0,d:0},KeyZ:{vk:89,a:121,b:89,c:0,d:0},KeyX:{
vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:181,d:0},Comma:{vk:188,
a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:124,d:0}}},{}],75:[function(e,t,a){t.exports={Backquote:{vk:191,a:167,b:176,c:0,
d:0},Digit1:{vk:49,a:49,b:43,c:166,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:42,c:35,d:0},Digit4:{vk:52,a:52,b:231,c:176,d:0},Digit5:{vk:53,a:53,b:37,c:167,d:0},Digit6:{vk:54,a:54,
b:38,c:172,d:0},Digit7:{vk:55,a:55,b:47,c:124,d:0},Digit8:{vk:56,a:56,b:40,c:162,d:0},Digit9:{vk:57,a:57,b:41,c:0,d:0},Digit0:{vk:48,a:48,b:61,c:0,d:0},Minus:{vk:219,a:39,b:63,c:769,d:0},Equal:{
vk:221,a:770,b:768,c:771,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{
vk:90,a:122,b:90,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:186,a:232,b:252,c:91,d:0},
BracketRight:{vk:192,a:776,b:33,c:93,d:0},Backslash:{vk:223,a:36,b:163,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,
c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:222,a:233,b:246,
c:0,d:0},Quote:{vk:220,a:224,b:228,c:123,d:0},KeyZ:{vk:89,a:121,b:89,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,
d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:59,c:0,d:0},Period:{vk:190,a:46,b:58,c:0,d:0},Slash:{vk:189,a:45,b:95,c:0,d:0},IntlBackslash:{vk:226,a:60,
b:62,c:92,d:0}}},{}],74:[function(e,t,a){t.exports={Backquote:{vk:222,a:35,b:124,c:92,d:0},Digit1:{vk:49,a:49,b:33,c:177,d:0},Digit2:{vk:50,a:50,b:34,c:64,d:0},Digit3:{vk:51,a:51,b:47,c:163,d:0},
Digit4:{vk:52,a:52,b:36,c:162,d:0},Digit5:{vk:53,a:53,b:37,c:164,d:0},Digit6:{vk:54,a:54,b:63,c:172,d:0},Digit7:{vk:55,a:55,b:38,c:166,d:0},Digit8:{vk:56,a:56,b:42,c:178,d:0},Digit9:{vk:57,a:57,b:40,
c:179,d:0},Digit0:{vk:48,a:48,b:41,c:188,d:0},Minus:{vk:189,a:45,b:95,c:189,d:0},Equal:{vk:187,a:61,b:43,c:190,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,
b:69,c:0,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,
c:167,d:0},KeyP:{vk:80,a:112,b:80,c:182,d:0},BracketLeft:{vk:219,a:770,b:770,c:91,d:0},BracketRight:{vk:221,a:807,b:776,c:93,d:0},Backslash:{vk:220,a:60,b:62,c:125,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},
KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{
vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,c:126,d:0},Quote:{vk:192,a:768,b:768,c:123,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},
KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:181,d:0},Comma:{vk:188,a:44,b:39,c:175,d:0},
Period:{vk:190,a:46,b:46,c:173,d:0},Slash:{vk:191,a:233,b:201,c:769,d:0},IntlBackslash:{vk:226,a:171,b:187,c:176,d:0}}},{}],73:[function(e,t,a){t.exports={Backquote:{vk:222,a:178,b:0,c:0,d:0},Digit1:{
vk:49,a:38,b:49,c:0,d:0},Digit2:{vk:50,a:233,b:50,c:771,d:0},Digit3:{vk:51,a:34,b:51,c:35,d:0},Digit4:{vk:52,a:39,b:52,c:123,d:0},Digit5:{vk:53,a:40,b:53,c:91,d:0},Digit6:{vk:54,a:45,b:54,c:124,d:0},
Digit7:{vk:55,a:232,b:55,c:768,d:0},Digit8:{vk:56,a:95,b:56,c:92,d:0},Digit9:{vk:57,a:231,b:57,c:94,d:0},Digit0:{vk:48,a:224,b:48,c:64,d:0},Minus:{vk:219,a:41,b:176,c:93,d:0},Equal:{vk:187,a:61,b:43,
c:125,d:0},KeyQ:{vk:65,a:97,b:65,c:0,d:0},KeyW:{vk:90,a:122,b:90,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:8364,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,
d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:221,a:770,b:776,c:0,d:0},BracketRight:{vk:186,a:36,
b:163,c:164,d:0},Backslash:{vk:220,a:42,b:181,c:0,d:0},KeyA:{vk:81,a:113,b:81,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,
a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:77,a:109,b:77,c:0,d:0},Quote:{vk:192,
a:249,b:37,c:0,d:0},KeyZ:{vk:87,a:119,b:87,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,
b:78,c:0,d:0},KeyM:{vk:188,a:44,b:63,c:0,d:0},Comma:{vk:190,a:59,b:46,c:0,d:0},Period:{vk:191,a:58,b:47,c:0,d:0},Slash:{vk:223,a:33,b:167,c:0,d:0},IntlBackslash:{vk:226,a:60,b:62,c:0,d:0}}},{}],
72:[function(e,t,a){t.exports={Backquote:{vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0
},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},
Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:68,a:100,b:68,c:0,d:0},KeyE:{vk:82,a:114,b:82,c:0,d:0},KeyR:{vk:87,a:119,b:87,c:0,d:0},KeyT:{
vk:66,a:98,b:66,c:0,d:0},KeyY:{vk:74,a:106,b:74,c:0,d:0},KeyU:{vk:70,a:102,b:70,c:0,d:0},KeyI:{vk:85,a:117,b:85,c:0,d:0},KeyO:{vk:80,a:112,b:80,c:0,d:0},KeyP:{vk:186,a:59,b:58,c:0,d:0},BracketLeft:{
vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,b:125,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:72,a:104,b:72,c:0,d:0
},KeyF:{vk:84,a:116,b:84,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:89,a:121,b:89,c:0,d:0},KeyJ:{vk:78,a:110,b:78,c:0,d:0},KeyK:{vk:69,a:101,b:69,c:0,d:0},KeyL:{vk:79,a:111,b:79,c:0,d:0},
Semicolon:{vk:73,a:105,b:73,c:0,d:0},Quote:{vk:222,a:39,b:34,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:77,a:109,b:77,c:0,d:0},KeyV:{vk:67,a:99,b:67,c:0,d:0},
KeyB:{vk:86,a:118,b:86,c:0,d:0},KeyN:{vk:75,a:107,b:75,c:0,d:0},KeyM:{vk:76,a:108,b:76,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0}}
},{}],71:[function(e,t,a){t.exports={Backquote:{vk:192,a:768,b:771,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:161,d:185},Digit2:{vk:50,a:50,b:64,c:178,d:0},Digit3:{vk:51,a:51,b:35,c:179,d:0},Digit4:{vk:52,
a:52,b:36,c:164,d:163},Digit5:{vk:53,a:53,b:37,c:8364,d:0},Digit6:{vk:54,a:54,b:770,c:188,d:0},Digit7:{vk:55,a:55,b:38,c:189,d:0},Digit8:{vk:56,a:56,b:42,c:190,d:0},Digit9:{vk:57,a:57,b:40,c:8216,d:0
},Digit0:{vk:48,a:48,b:41,c:8217,d:0},Minus:{vk:189,a:45,b:95,c:165,d:0},Equal:{vk:187,a:61,b:43,c:215,d:247},KeyQ:{vk:81,a:113,b:81,c:228,d:196},KeyW:{vk:87,a:119,b:87,c:229,d:197},KeyE:{vk:69,a:101,
b:69,c:233,d:201},KeyR:{vk:82,a:114,b:82,c:174,d:0},KeyT:{vk:84,a:116,b:84,c:254,d:222},KeyY:{vk:89,a:121,b:89,c:252,d:220},KeyU:{vk:85,a:117,b:85,c:250,d:218},KeyI:{vk:73,a:105,b:73,c:237,d:205},
KeyO:{vk:79,a:111,b:79,c:243,d:211},KeyP:{vk:80,a:112,b:80,c:246,d:214},BracketLeft:{vk:219,a:91,b:123,c:171,d:0},BracketRight:{vk:221,a:93,b:125,c:187,d:0},Backslash:{vk:220,a:92,b:124,c:172,d:166},
KeyA:{vk:65,a:97,b:65,c:225,d:193},KeyS:{vk:83,a:115,b:83,c:223,d:167},KeyD:{vk:68,a:100,b:68,c:240,d:208},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,
d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:248,d:216},Semicolon:{vk:186,a:59,b:58,c:182,d:176},Quote:{vk:222,a:0,b:0,c:180,d:168},KeyZ:{vk:90,a:122,
b:90,c:230,d:198},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:169,d:162},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:241,d:209},KeyM:{vk:77,
a:109,b:77,c:181,d:0},Comma:{vk:188,a:44,b:60,c:231,d:199},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:191,d:0},IntlBackslash:{vk:226,a:92,b:124,c:0,d:0}}},{}],70:[function(e,t,a){
t.exports={Backquote:{vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:74,
a:106,b:74,c:0,d:0},Digit6:{vk:76,a:108,b:76,c:0,d:0},Digit7:{vk:77,a:109,b:77,c:0,d:0},Digit8:{vk:70,a:102,b:70,c:0,d:0},Digit9:{vk:80,a:112,b:80,c:0,d:0},Digit0:{vk:191,a:47,b:63,c:0,d:0},Minus:{
vk:219,a:91,b:123,c:0,d:0},Equal:{vk:221,a:93,b:125,c:0,d:0},KeyQ:{vk:53,a:53,b:37,c:0,d:0},KeyW:{vk:54,a:54,b:94,c:0,d:0},KeyE:{vk:81,a:113,b:81,c:0,d:0},KeyR:{vk:190,a:46,b:62,c:0,d:0},KeyT:{vk:79,
a:111,b:79,c:0,d:0},KeyY:{vk:82,a:114,b:82,c:0,d:0},KeyU:{vk:83,a:115,b:83,c:0,d:0},KeyI:{vk:85,a:117,b:85,c:0,d:0},KeyO:{vk:89,a:121,b:89,c:0,d:0},KeyP:{vk:66,a:98,b:66,c:0,d:0},BracketLeft:{vk:186,
a:59,b:58,c:0,d:0},BracketRight:{vk:187,a:61,b:43,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:55,a:55,b:38,c:0,d:0},KeyS:{vk:56,a:56,b:42,c:0,d:0},KeyD:{vk:90,a:122,b:90,c:0,d:0},KeyF:{
vk:65,a:97,b:65,c:0,d:0},KeyG:{vk:69,a:101,b:69,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:84,a:116,b:84,c:0,d:0},KeyK:{vk:68,a:100,b:68,c:0,d:0},KeyL:{vk:67,a:99,b:67,c:0,d:0},Semicolon:{
vk:75,a:107,b:75,c:0,d:0},Quote:{vk:189,a:45,b:95,c:0,d:0},KeyZ:{vk:57,a:57,b:40,c:0,d:0},KeyX:{vk:48,a:48,b:41,c:0,d:0},KeyC:{vk:88,a:120,b:88,c:0,d:0},KeyV:{vk:188,a:44,b:60,c:0,d:0},KeyB:{vk:73,
a:105,b:73,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:87,a:119,b:87,c:0,d:0},Comma:{vk:86,a:118,b:86,c:0,d:0},Period:{vk:71,a:103,b:71,c:0,d:0},Slash:{vk:222,a:39,b:34,c:0,d:0},IntlBackslash:{
vk:226,a:92,b:124,c:0,d:0}}},{}],69:[function(e,t,a){t.exports={Backquote:{vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:219,a:91,b:123,c:0,d:0},Digit2:{vk:221,a:93,b:125,c:0,d:0},Digit3:{vk:191,a:47,b:63,
c:0,d:0},Digit4:{vk:80,a:112,b:80,c:0,d:0},Digit5:{vk:70,a:102,b:70,c:0,d:0},Digit6:{vk:77,a:109,b:77,c:0,d:0},Digit7:{vk:76,a:108,b:76,c:0,d:0},Digit8:{vk:74,a:106,b:74,c:0,d:0},Digit9:{vk:52,a:52,
b:36,c:0,d:0},Digit0:{vk:51,a:51,b:35,c:0,d:0},Minus:{vk:50,a:50,b:64,c:0,d:0},Equal:{vk:49,a:49,b:33,c:0,d:0},KeyQ:{vk:186,a:59,b:58,c:0,d:0},KeyW:{vk:81,a:113,b:81,c:0,d:0},KeyE:{vk:66,a:98,b:66,
c:0,d:0},KeyR:{vk:89,a:121,b:89,c:0,d:0},KeyT:{vk:85,a:117,b:85,c:0,d:0},KeyY:{vk:82,a:114,b:82,c:0,d:0},KeyU:{vk:83,a:115,b:83,c:0,d:0},KeyI:{vk:79,a:111,b:79,c:0,d:0},KeyO:{vk:190,a:46,b:62,c:0,d:0
},KeyP:{vk:54,a:54,b:94,c:0,d:0},BracketLeft:{vk:53,a:53,b:37,c:0,d:0},BracketRight:{vk:187,a:61,b:43,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:189,a:45,b:95,c:0,d:0},KeyS:{vk:75,a:107,
b:75,c:0,d:0},KeyD:{vk:67,a:99,b:67,c:0,d:0},KeyF:{vk:68,a:100,b:68,c:0,d:0},KeyG:{vk:84,a:116,b:84,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:69,a:101,b:69,c:0,d:0},KeyK:{vk:65,a:97,b:65,c:0,
d:0},KeyL:{vk:90,a:122,b:90,c:0,d:0},Semicolon:{vk:56,a:56,b:42,c:0,d:0},Quote:{vk:55,a:55,b:38,c:0,d:0},KeyZ:{vk:222,a:39,b:34,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:71,a:103,b:71,c:0,d:0
},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:87,a:119,b:87,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:73,a:105,b:73,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:48,a:48,b:41,c:0,d:0},
Slash:{vk:57,a:57,b:40,c:0,d:0},IntlBackslash:{vk:226,a:92,b:124,c:0,d:0}}},{}],68:[function(e,t,a){t.exports={Backquote:{vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,
a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,
a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:219,a:91,b:123,c:0,d:0},Equal:{vk:221,a:93,b:125,c:0,d:0},KeyQ:{vk:222,a:39,b:34,c:0,d:0},KeyW:{vk:188,
a:44,b:60,c:0,d:0},KeyE:{vk:190,a:46,b:62,c:0,d:0},KeyR:{vk:80,a:112,b:80,c:0,d:0},KeyT:{vk:89,a:121,b:89,c:0,d:0},KeyY:{vk:70,a:102,b:70,c:0,d:0},KeyU:{vk:71,a:103,b:71,c:0,d:0},KeyI:{vk:67,a:99,
b:67,c:0,d:0},KeyO:{vk:82,a:114,b:82,c:0,d:0},KeyP:{vk:76,a:108,b:76,c:0,d:0},BracketLeft:{vk:191,a:47,b:63,c:0,d:0},BracketRight:{vk:187,a:61,b:43,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},
KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:79,a:111,b:79,c:0,d:0},KeyD:{vk:69,a:101,b:69,c:0,d:0},KeyF:{vk:85,a:117,b:85,c:0,d:0},KeyG:{vk:73,a:105,b:73,c:0,d:0},KeyH:{vk:68,a:100,b:68,c:0,d:0},KeyJ:{
vk:72,a:104,b:72,c:0,d:0},KeyK:{vk:84,a:116,b:84,c:0,d:0},KeyL:{vk:78,a:110,b:78,c:0,d:0},Semicolon:{vk:83,a:115,b:83,c:0,d:0},Quote:{vk:189,a:45,b:95,c:0,d:0},KeyZ:{vk:186,a:59,b:58,c:0,d:0},KeyX:{
vk:81,a:113,b:81,c:0,d:0},KeyC:{vk:74,a:106,b:74,c:0,d:0},KeyV:{vk:75,a:107,b:75,c:0,d:0},KeyB:{vk:88,a:120,b:88,c:0,d:0},KeyN:{vk:66,a:98,b:66,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:87,
a:119,b:87,c:0,d:0},Period:{vk:86,a:118,b:86,c:0,d:0},Slash:{vk:90,a:122,b:90,c:0,d:0},IntlBackslash:{vk:226,a:92,b:124,c:0,d:0}}},{}],67:[function(e,t,a){t.exports={Backquote:{vk:192,a:96,b:126,c:0,
d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:0,
d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,
d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:70,a:102,b:70,c:0,d:0},KeyR:{vk:80,a:112,b:80,c:0,d:0},KeyT:{vk:71,a:103,b:71,c:0,d:0},KeyY:{vk:74,a:106,b:74,c:0,d:0},
KeyU:{vk:76,a:108,b:76,c:0,d:0},KeyI:{vk:85,a:117,b:85,c:0,d:0},KeyO:{vk:89,a:121,b:89,c:0,d:0},KeyP:{vk:186,a:59,b:58,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,b:125,
c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:82,a:114,b:82,c:0,d:0},KeyD:{vk:83,a:115,b:83,c:0,d:0},KeyF:{vk:84,a:116,b:84,c:0,d:0},KeyG:{vk:68,a:100,b:68,
c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:78,a:110,b:78,c:0,d:0},KeyK:{vk:69,a:101,b:69,c:0,d:0},KeyL:{vk:73,a:105,b:73,c:0,d:0},Semicolon:{vk:79,a:111,b:79,c:0,d:0},Quote:{vk:222,a:39,b:34,
c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:75,a:107,b:75,c:0,d:0},
KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0}}},{}],66:[function(e,t,a){t.exports={Backquote:{vk:192,a:96,b:126,
c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:35,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,
c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,
c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:0,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0
},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,
b:125,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,
b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,c:0,d:0},Quote:{vk:222,a:39,
b:34,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,
d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0},IntlBackslash:{vk:226,a:92,b:124,c:0,d:0}}},{}],
65:[function(e,t,a){t.exports={Backquote:{vk:223,a:768,b:172,c:166,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:34,c:776,d:0},Digit3:{vk:51,a:51,b:163,c:0,d:0},Digit4:{vk:52,a:52,b:36,
c:8364,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:770,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,
b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:7811,d:7810},KeyE:{vk:69,a:101,b:69,c:233,d:201},KeyR:{vk:82,
a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:253,d:221},KeyU:{vk:85,a:117,b:85,c:250,d:218},KeyI:{vk:73,a:105,b:73,c:237,d:205},KeyO:{vk:79,a:111,b:79,c:243,d:211},
KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,b:125,c:0,d:0},Backslash:{vk:222,a:35,b:126,c:771,d:0},KeyA:{vk:65,a:97,b:65,c:225,d:193},KeyS:{vk:83,
a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,
b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,c:0,d:0},Quote:{vk:192,a:39,b:64,c:769,d:96},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,
b:67,c:231,d:199},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,
b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0},IntlBackslash:{vk:220,a:92,b:124,c:0,d:0}}},{}],64:[function(e,t,a){t.exports={Backquote:{vk:223,a:96,b:172,c:166,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},
Digit2:{vk:50,a:50,b:34,c:0,d:0},Digit3:{vk:51,a:51,b:163,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:8364,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},Digit6:{vk:54,a:54,b:94,c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0
},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},
KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:201,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:218,d:0},
KeyI:{vk:73,a:105,b:73,c:205,d:0},KeyO:{vk:79,a:111,b:79,c:211,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},BracketRight:{vk:221,a:93,b:125,c:0,d:0},Backslash:{vk:222,
a:35,b:126,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:193,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,
b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,c:0,d:0},Quote:{vk:192,a:39,b:64,c:0,d:0},KeyZ:{vk:90,a:122,
b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,
d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0},IntlBackslash:{vk:220,a:92,b:124,c:0,d:0}}},{}],63:[function(e,t,a){t.exports={Backquote:{
vk:192,a:96,b:126,c:0,d:0},Digit1:{vk:49,a:49,b:33,c:0,d:0},Digit2:{vk:50,a:50,b:64,c:0,d:0},Digit3:{vk:51,a:51,b:163,c:0,d:0},Digit4:{vk:52,a:52,b:36,c:0,d:0},Digit5:{vk:53,a:53,b:37,c:0,d:0},
Digit6:{vk:54,a:54,b:94,c:0,d:0},Digit7:{vk:55,a:55,b:38,c:0,d:0},Digit8:{vk:56,a:56,b:42,c:0,d:0},Digit9:{vk:57,a:57,b:40,c:0,d:0},Digit0:{vk:48,a:48,b:41,c:0,d:0},Minus:{vk:189,a:45,b:95,c:0,d:0},
Equal:{vk:187,a:61,b:43,c:0,d:0},KeyQ:{vk:81,a:113,b:81,c:0,d:0},KeyW:{vk:87,a:119,b:87,c:0,d:0},KeyE:{vk:69,a:101,b:69,c:0,d:0},KeyR:{vk:82,a:114,b:82,c:0,d:0},KeyT:{vk:84,a:116,b:84,c:0,d:0},KeyY:{
vk:89,a:121,b:89,c:0,d:0},KeyU:{vk:85,a:117,b:85,c:0,d:0},KeyI:{vk:73,a:105,b:73,c:0,d:0},KeyO:{vk:79,a:111,b:79,c:0,d:0},KeyP:{vk:80,a:112,b:80,c:0,d:0},BracketLeft:{vk:219,a:91,b:123,c:0,d:0},
BracketRight:{vk:221,a:93,b:125,c:0,d:0},Backslash:{vk:220,a:92,b:124,c:0,d:0},KeyA:{vk:65,a:97,b:65,c:0,d:0},KeyS:{vk:83,a:115,b:83,c:0,d:0},KeyD:{vk:68,a:100,b:68,c:0,d:0},KeyF:{vk:70,a:102,b:70,
c:0,d:0},KeyG:{vk:71,a:103,b:71,c:0,d:0},KeyH:{vk:72,a:104,b:72,c:0,d:0},KeyJ:{vk:74,a:106,b:74,c:0,d:0},KeyK:{vk:75,a:107,b:75,c:0,d:0},KeyL:{vk:76,a:108,b:76,c:0,d:0},Semicolon:{vk:186,a:59,b:58,
c:0,d:0},Quote:{vk:222,a:39,b:34,c:0,d:0},KeyZ:{vk:90,a:122,b:90,c:0,d:0},KeyX:{vk:88,a:120,b:88,c:0,d:0},KeyC:{vk:67,a:99,b:67,c:0,d:0},KeyV:{vk:86,a:118,b:86,c:0,d:0},KeyB:{vk:66,a:98,b:66,c:0,d:0},
KeyN:{vk:78,a:110,b:78,c:0,d:0},KeyM:{vk:77,a:109,b:77,c:0,d:0},Comma:{vk:188,a:44,b:60,c:0,d:0},Period:{vk:190,a:46,b:62,c:0,d:0},Slash:{vk:191,a:47,b:63,c:0,d:0}}},{}],56:[function(e,t,a){
"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("../lib/lang"),r=n.map(e("./geometry/standard_101.json"));a.STANDARD_101=r;var i=n.map(e("./geometry/standard_102.json"))
;a.STANDARD_102=i;var c=n.map(e("./geometry/control_pad.json"));a.CONTROL_PAD=c;var o=n.map(e("./geometry/cursor_pad.json"));a.CURSOR_PAD=o;var s=n.map(e("./geometry/num_pad.json"));a.NUM_PAD=s},{
"../lib/lang":139,"./geometry/control_pad.json":57,"./geometry/cursor_pad.json":58,"./geometry/num_pad.json":59,"./geometry/standard_101.json":60,"./geometry/standard_102.json":61}],
61:[function(e,t,a){t.exports={Backquote:{x:0,y:0,shape:"key",zone:"z1"},Digit1:{x:42,y:0,shape:"key",zone:"z1"},Digit2:{x:84,y:0,shape:"key",zone:"z2"},Digit3:{x:126,y:0,shape:"key",zone:"z3"},
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
ControlRight:{x:566,y:168,shape:"key-ctrl",zone:null}}},{}],60:[function(e,t,a){t.exports={Backquote:{x:0,y:0,shape:"key",zone:"z1"},Digit1:{x:42,y:0,shape:"key",zone:"z1"},Digit2:{x:84,y:0,
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
y:168,shape:"key-ctrl",zone:null}}},{}],59:[function(e,t,a){t.exports={NumLock:{x:792,y:0,shape:"key-np-num-lock",zone:null},NumpadDivide:{x:834,y:0,shape:"key-np-divide",zone:null},NumpadMultiply:{
x:876,y:0,shape:"key-np-multiply",zone:null},NumpadSubtract:{x:918,y:0,shape:"key-np-subtract",zone:null},Numpad7:{x:792,y:42,shape:"key-np-7",zone:null},Numpad8:{x:834,y:42,shape:"key-np-8",zone:null
},Numpad9:{x:876,y:42,shape:"key-np-9",zone:null},NumpadAdd:{x:918,y:42,shape:"key-np-add",zone:null},Numpad4:{x:792,y:84,shape:"key-np-4",zone:null},Numpad5:{x:834,y:84,shape:"key-np-5",zone:null},
Numpad6:{x:876,y:84,shape:"key-np-6",zone:null},Numpad1:{x:792,y:126,shape:"key-np-1",zone:null},Numpad2:{x:834,y:126,shape:"key-np-2",zone:null},Numpad3:{x:876,y:126,shape:"key-np-3",zone:null},
NumpadEnter:{x:918,y:126,shape:"key-np-enter",zone:null},Numpad0:{x:792,y:168,shape:"key-np-0",zone:null},NumpadDecimal:{x:876,y:168,shape:"key-np-decimal",zone:null}}},{}],58:[function(e,t,a){
t.exports={ArrowUp:{x:690,y:126,shape:"key-up",zone:null},ArrowLeft:{x:648,y:168,shape:"key-left",zone:null},ArrowDown:{x:690,y:168,shape:"key-down",zone:null},ArrowRight:{x:732,y:168,
shape:"key-right",zone:null}}},{}],57:[function(e,t,a){t.exports={Insert:{x:648,y:0,shape:"key-insert",zone:null},Home:{x:690,y:0,shape:"key-home",zone:null},PageUp:{x:732,y:0,shape:"key-page-up",
zone:null},Delete:{x:648,y:42,shape:"key-delete",zone:null},End:{x:690,y:42,shape:"key-end",zone:null},PageDown:{x:732,y:42,shape:"key-page-down",zone:null}}},{}],51:[function(e,t,a){"use strict"
;Object.defineProperty(a,"__esModule",{value:!0});var n=e("../../lib/lang");a.byId=function(e,t,a){for(var r in e){var i=e[r];if(i.id===t)return i}if(n.isUndefined(a))throw new Error;return a},
a.byXId=function(e,t,a){for(var r in e){var i=e[r];if(i.xid===t)return i}if(n.isUndefined(a))throw new Error;return a}},{"../../lib/lang":139}],4:[function(e,t,a){"use strict";function n(e,t,a){
return Object.freeze({id:e,xid:t,name:a,toString:function(){return e}})}Object.defineProperty(a,"__esModule",{value:!0})
;var r=e("../../lib/lang"),i=n("en",16,"English"),c=n("de",32,"German"),o=n("fr",48,"French"),s=n("it",64,"Italian"),l=n("es",80,"Spanish"),u=n("pt",96,"Portuguese"),d=n("ru",112,"Russian")
;a.LANGUAGE=Object.freeze(r.map({EN:i,DE:c,FR:o,IT:s,ES:l,PT:u,RU:d}))},{"../../lib/lang":139}],139:[function(e,t,a){"use strict";function n(e){return i.call(e).match(/^\[object (.+)\]$/)[1]}
function r(e){return null!==e&&typeof e===a.S_OBJECT}Object.defineProperty(a,"__esModule",{value:!0}),a.S_UNDEFINED="undefined",a.S_STRING="string",a.S_NUMBER="number",a.S_BOOLEAN="boolean",
a.S_OBJECT="object",a.S_FUNCTION="function";var i=Object.prototype.toString;a.getType=n,a.isUndefined=function(e){return typeof e===a.S_UNDEFINED},a.isString=function(e){return typeof e===a.S_STRING},
a.isNumber=function(e){return typeof e===a.S_NUMBER},a.isBoolean=function(e){return typeof e===a.S_BOOLEAN},a.isObject=function(e){return null!==e&&typeof e===a.S_OBJECT&&!Array.isArray(e)},
a.isFunction=function(e){return typeof e===a.S_FUNCTION},a.isObjectLike=r,a.isPlainObject=function(e){if(r(e)&&"Object"===n(e)){var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}
return!1},a.map=function(e){return Object.assign(Object.create(null),e)}},{}],1:[function(e,t,a){"use strict";function n(){return __env}Object.defineProperty(a,"__esModule",{value:!0});var r={id:null,
email:null,userName:null,fullName:null,externalId:{}};a.currentEnv=n,a.currentUser=function(){var e=n();return null!=e.user?e.user:r}},{}]},{},[213]);
//# sourceMappingURL=multiplayer.js.map