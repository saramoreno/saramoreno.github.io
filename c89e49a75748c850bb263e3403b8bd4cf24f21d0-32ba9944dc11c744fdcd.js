/*! For license information please see c89e49a75748c850bb263e3403b8bd4cf24f21d0-32ba9944dc11c744fdcd.js.LICENSE.txt */
(self.webpackChunkbonsai_web=self.webpackChunkbonsai_web||[]).push([[779],{7753:function(e,t,n){"use strict";n.d(t,{Ep:function(){return y},LX:function(){return b},PP:function(){return m},RQ:function(){return C},X3:function(){return x},Zn:function(){return w},aU:function(){return r},cP:function(){return g},kG:function(){return E},pC:function(){return O}});var r,a=n(3144),o=n(5671),i=n(136),c=n(6215),u=n(1120),s=n(2407),l=n(885);n(4687);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));var d;function m(e){void 0===e&&(e={});var t,n=e,a=n.initialEntries,o=void 0===a?["/"]:a,i=n.initialIndex,c=n.v5Compat,u=void 0!==c&&c;t=o.map((function(e,t){return m(e,"string"==typeof e?null:e.state,0===t?"default":void 0)}));var s=p(null==i?t.length-1:i),l=r.Pop,f=null;function p(e){return Math.min(Math.max(e,0),t.length-1)}function d(){return t[s]}function m(e,n,r){void 0===n&&(n=null);var a=v(t?d().pathname:"/",e,n,r);return h("/"===a.pathname.charAt(0),"relative pathnames are not supported in memory history: "+JSON.stringify(e)),a}return{get index(){return s},get action(){return l},get location(){return d()},createHref:function(e){return"string"==typeof e?e:y(e)},push:function(e,n){l=r.Push;var a=m(e,n);s+=1,t.splice(s,t.length,a),u&&f&&f({action:l,location:a})},replace:function(e,n){l=r.Replace;var a=m(e,n);t[s]=a,u&&f&&f({action:l,location:a})},go:function(e){l=r.Pop,s=p(s+e),f&&f({action:l,location:d()})},listen:function(e){return f=e,function(){f=null}}}}function h(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function v(e,t,n,r){return void 0===n&&(n=null),p({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?g(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function y(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,a=void 0===r?"":r,o=e.hash,i=void 0===o?"":o;return a&&"?"!==a&&(n+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(n+="#"===i.charAt(0)?i:"#"+i),n}function g(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(d||(d={}));function b(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});var n=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);T("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');var r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(function(e,t){return r.push(t),"([^\\/]+)"}));e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),r=(0,l.Z)(n,2),a=r[0],o=r[1],i=t.match(a);if(!i)return null;var c=i[0],u=c.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:o.reduce((function(e,t,n){if("*"===t){var r=s[n]||"";u=c.slice(0,c.length-r.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return T(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s[n]||"",t),e}),{}),pathname:c,pathnameBase:u,pattern:e}}function w(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;var n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function E(e,t){if(!1===e||null==e)throw new Error(t)}function T(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function O(e,t,n,r){void 0===r&&(r=!1);var a,o="string"==typeof e?g(e):p({},e),i=""===e||""===o.pathname,c=i?"/":o.pathname;if(r||null==c)a=n;else{var u=t.length-1;if(c.startsWith("..")){for(var s=c.split("/");".."===s[0];)s.shift(),u-=1;o.pathname=s.join("/")}a=u>=0?t[u]:"/"}var l=function(e,t){void 0===t&&(t="/");var n="string"==typeof e?g(e):e,r=n.pathname,a=n.search,o=void 0===a?"":a,i=n.hash,c=void 0===i?"":i,u=r?r.startsWith("/")?r:function(e,t){var n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((function(e){".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(r,t):t;return{pathname:u,search:S(o),hash:A(c)}}(o,a),f=c&&"/"!==c&&c.endsWith("/"),d=(i||"."===c)&&n.endsWith("/");return l.pathname.endsWith("/")||!f&&!d||(l.pathname+="/"),l}var C=function(e){return e.join("/").replace(/\/\/+/g,"/")},S=function(e){return e&&"?"!==e?e.startsWith("?")?e:"?"+e:""},A=function(e){return e&&"#"!==e?e.startsWith("#")?e:"#"+e:""},x=function(e){(0,i.Z)(n,e);var t=f(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n)}((0,s.Z)(Error))},6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!o(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],i[s[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},9380:function(e,t,n){"use strict";n.d(t,{fO:function(){return E}});var r=n(7294),a=n(356),o=n(7753);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var u=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],s=["aria-current","caseSensitive","className","end","style","to","children"];var l=r.forwardRef((function(e,t){var n=e.onClick,s=e.relative,l=e.reloadDocument,f=e.replace,p=e.state,d=e.target,m=e.to,h=e.preventScrollReset,v=c(e,u),y=(0,a.oQ)(m,{relative:s}),g=function(e,t){var n=void 0===t?{}:t,i=n.target,c=n.replace,u=n.state,s=n.preventScrollReset,l=n.relative,f=(0,a.s0)(),p=(0,a.TH)(),d=(0,a.WU)(e,{relative:l});return r.useCallback((function(t){if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,i)){t.preventDefault();var n=void 0!==c?c:(0,o.Ep)(p)===(0,o.Ep)(d);f(e,{replace:n,state:u,preventScrollReset:s,relative:l})}}),[p,f,d,c,u,i,e,s,l])}(m,{replace:f,state:p,target:d,preventScrollReset:h,relative:s});return r.createElement("a",i({},v,{href:y,onClick:l?n:function(e){n&&n(e),e.defaultPrevented||g(e)},ref:t,target:d}))}));var f=r.forwardRef((function(e,t){var n,u=e["aria-current"],f=void 0===u?"page":u,p=e.caseSensitive,d=void 0!==p&&p,m=e.className,h=void 0===m?"":m,v=e.end,y=void 0!==v&&v,g=e.style,b=e.to,w=e.children,E=c(e,s),T=(0,a.WU)(b),O=(0,a.bS)({path:T.pathname,end:y,caseSensitive:d}),C=r.useContext(a.FR),S=null==C?void 0:C.navigation.location,A=(0,a.WU)(S||""),x=null!=r.useMemo((function(){return S?(0,o.LX)({path:T.pathname,end:y,caseSensitive:d},A.pathname):null}),[S,T.pathname,d,y,A.pathname]),P=null!=O,j=P?f:void 0;n="function"==typeof h?h({isActive:P,isPending:x}):[h,P?"active":null,x?"pending":null].filter(Boolean).join(" ");var k="function"==typeof g?g({isActive:P,isPending:x}):g;return r.createElement(l,i({},E,{"aria-current":j,className:n,ref:t,style:k,to:b}),"function"==typeof w?w({isActive:P,isPending:x}):w)}));var p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)};var d="",m=null,h=null,v=null;function y(){d="",null!==m&&m.disconnect(),null!==h&&(window.clearTimeout(h),h=null)}function g(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function b(){var e=null;if("#"===d)e=document.body;else{var t=d.replace("#","");null===(e=document.getElementById(t))&&"#top"===d&&(e=document.body)}if(null!==e){v(e);var n=e.getAttribute("tabindex");return null!==n||g(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||g(e)||(e.blur(),e.removeAttribute("tabindex")),y(),!0}return!1}function w(e){return r.forwardRef((function(t,n){var a="";"string"==typeof t.to&&t.to.includes("#")?a="#"+t.to.split("#").slice(1).join("#"):"object"==typeof t.to&&"string"==typeof t.to.hash&&(a=t.to.hash);var o={};e===f&&(o.isActive=function(e,t){return e&&e.isExact&&t.hash===a});var i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["scroll","smooth","timeout","elementId"]);return r.createElement(e,p({},o,i,{onClick:function(e){var n;y(),d=t.elementId?"#"+t.elementId:a,t.onClick&&t.onClick(e),""===d||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(v=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===b()&&(null===m&&(m=new MutationObserver(b)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),h=window.setTimeout((function(){y()}),n||1e4))}),0))},ref:n}),t.children)}))}var E=w(l);w(f)},356:function(e,t,n){"use strict";var r;n.d(t,{FR:function(){return b},TH:function(){return x},VA:function(){return I},WU:function(){return R},bS:function(){return P},oQ:function(){return S},s0:function(){return k}});var a=n(5671),o=n(3144),i=n(136),c=n(6215),u=n(1120),s=n(885),l=n(7753),f=n(7294);function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var d="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},m=f.useState,h=f.useEffect,v=f.useLayoutEffect,y=f.useDebugValue;function g(e){var t=e.getSnapshot,n=e.value;try{var r=t();return!d(n,r)}catch(a){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement,(r||(r=n.t(f,2))).useSyncExternalStore;var b=f.createContext(null);var w=f.createContext(null);var E=f.createContext(null);var T=f.createContext(null);var O=f.createContext({outlet:null,matches:[]});var C=f.createContext(null);function S(e,t){var n=(void 0===t?{}:t).relative;A()||(0,l.kG)(!1);var r=f.useContext(E),a=r.basename,o=r.navigator,i=R(e,{relative:n}),c=i.hash,u=i.pathname,s=i.search,p=u;return"/"!==a&&(p="/"===u?a:(0,l.RQ)([a,u])),o.createHref({pathname:p,search:s,hash:c})}function A(){return null!=f.useContext(T)}function x(){return A()||(0,l.kG)(!1),f.useContext(T).location}function P(e){A()||(0,l.kG)(!1);var t=x().pathname;return f.useMemo((function(){return(0,l.LX)(e,t)}),[t,e])}function j(e){return e.filter((function(t,n){return 0===n||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase}))}function k(){A()||(0,l.kG)(!1);var e=f.useContext(E),t=e.basename,n=e.navigator,r=f.useContext(O).matches,a=x().pathname,o=JSON.stringify(j(r).map((function(e){return e.pathnameBase}))),i=f.useRef(!1);return f.useEffect((function(){i.current=!0})),f.useCallback((function(e,r){if(void 0===r&&(r={}),i.current)if("number"!=typeof e){var c=(0,l.pC)(e,JSON.parse(o),a,"path"===r.relative);"/"!==t&&(c.pathname="/"===c.pathname?t:(0,l.RQ)([t,c.pathname])),(r.replace?n.replace:n.push)(c,r.state,r)}else n.go(e)}),[t,n,o,a])}function R(e,t){var n=(void 0===t?{}:t).relative,r=f.useContext(O).matches,a=x().pathname,o=JSON.stringify(j(r).map((function(e){return e.pathnameBase})));return f.useMemo((function(){return(0,l.pC)(e,JSON.parse(o),a,"path"===n)}),[e,o,a,n])}var N;f.Component;!function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(N||(N={}));var L;function I(e){var t=e.basename,n=e.children,r=e.initialEntries,a=e.initialIndex,o=f.useRef();null==o.current&&(o.current=(0,l.PP)({initialEntries:r,initialIndex:a,v5Compat:!0}));var i=o.current,c=f.useState({action:i.action,location:i.location}),u=(0,s.Z)(c,2),p=u[0],d=u[1];return f.useLayoutEffect((function(){return i.listen(d)}),[i]),f.createElement(M,{basename:t,children:n,location:p.location,navigationType:p.action,navigator:i})}function M(e){var t=e.basename,n=void 0===t?"/":t,r=e.children,a=void 0===r?null:r,o=e.location,i=e.navigationType,c=void 0===i?l.aU.Pop:i,u=e.navigator,s=e.static,p=void 0!==s&&s;A()&&(0,l.kG)(!1);var d=n.replace(/^\/*/,"/"),m=f.useMemo((function(){return{basename:d,navigator:u,static:p}}),[d,u,p]);"string"==typeof o&&(o=(0,l.cP)(o));var h=o,v=h.pathname,y=void 0===v?"/":v,g=h.search,b=void 0===g?"":g,w=h.hash,O=void 0===w?"":w,C=h.state,S=void 0===C?null:C,x=h.key,P=void 0===x?"default":x,j=f.useMemo((function(){var e=(0,l.Zn)(y,d);return null==e?null:{pathname:e,search:b,hash:O,state:S,key:P}}),[d,y,b,O,S,P]);return null==j?null:f.createElement(E.Provider,{value:m},f.createElement(T.Provider,{children:a,value:{location:j,navigationType:c}}))}!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(L||(L={}));var B=new Promise((function(){}));f.Component},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},5785:function(e,t,n){"use strict";var r=n(7294),a=n(3698),o=n(8159),i=n(6553),c=n(9380);t.Z=function(e){var t=e.hasNav,n=(0,a.Z)();return r.createElement("header",{className:"footer"},r.createElement("div",{className:"footer-main"},r.createElement("div",{className:"wrapper"},r.createElement(i.Z,{to:"/",className:"logo"},r.createElement("img",{className:"logo",alt:"Bonsai",src:o.Z})),t?r.createElement("nav",{className:"footer-nav"},r.createElement(c.fO,{to:"#services",className:"nav-item"},n("services:name")),r.createElement(c.fO,{to:"#about",className:"nav-item"},n("about:name"))):null,r.createElement("div",{className:"footer-social"},r.createElement("a",{className:"link",href:"mailto:hola@bonsaitech.io"},"hola@bonsaitech.io")))),r.createElement("div",{className:"footer-extra"},r.createElement("div",{className:"wrapper"},r.createElement("div",{className:"left-slot"},r.createElement(i.Z,{className:"footer-caption",to:"/privacy"},n("info:privacy")),r.createElement(i.Z,{className:"footer-caption",to:"/legal"},n("info:legal")),r.createElement(i.Z,{className:"footer-caption",to:"/cookies"},n("info:cookies"))),r.createElement("div",{className:"right-slot"},r.createElement("span",{className:"footer-caption"},"bonsai 2022 © ",n("info:all-rights-reserved")),r.createElement("span",{className:"footer-caption"},n("info:based-madrid"))))))}},5063:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(5900),o=n.n(a),i=n(6733),c=n(1597),u=function(e){var t="undefined"==typeof window?"":window.location.pathname,n=(0,i.Z)(e)(t);return function(){"undefined"!=typeof window&&(localStorage.setItem("content-language",e),(0,c.navigate)(n))}},s=n(9785),l=function(){var e=u("en"),t=u("es"),n=(0,s.Z)().locale;return r.createElement("div",{className:"lang-selector"},r.createElement("button",{className:o()("lang-item",{active:"en"===n}),onClick:e,"aria-label":"button language selection",disabled:"en"===n},"EN"),r.createElement("button",{className:o()("lang-item",{active:"es"===n}),onClick:t,"aria-label":"button language selection",disabled:"es"===n},"ES"))}},6191:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r,a,o,i,c=n(7294),u=n(5697),s=n.n(u),l=n(4839),f=n.n(l),p=n(2993),d=n.n(p),m=n(6494),h=n.n(m),v="bodyAttributes",y="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),E="cssText",T="href",O="http-equiv",C="innerHTML",S="itemprop",A="name",x="property",P="rel",j="src",k="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",L="defer",I="encodeSpecialCharacters",M="onChangeClientState",B="titleTemplate",U=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),D=[b.NOSCRIPT,b.SCRIPT,b.STYLE],Z="data-react-helmet",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=Q(e,b.TITLE),n=Q(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,N);return t||r||void 0},G=function(e){return Q(e,M)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},z=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===P&&"canonical"===e[n].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=h()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(b.BODY,r),ue(b.HTML,a),ce(f,p);var d={baseTag:se(b.BASE,n),linkTags:se(b.LINK,o),metaTags:se(b.META,i),noscriptTags:se(b.NOSCRIPT,c),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(b.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Z),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(Z):n.getAttribute(Z)!==i.join(",")&&n.setAttribute(Z,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Z,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Z]=!0,a=fe(n,r),[c.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+q(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[Z]=!0,r);return Object.keys(t).forEach((function(e){var n=R[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(b.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(y,a,r),link:pe(b.LINK,o,r),meta:pe(b.META,i,r),noscript:pe(b.NOSCRIPT,c,r),script:pe(b.SCRIPT,u,r),style:pe(b.STYLE,s,r),title:pe(b.TITLE,{title:f,titleAttributes:p},r)}},me=f()((function(e){return{baseTag:z([T,k],e),bodyAttributes:V(v,e),defer:Q(e,L),encode:Q(e,I),htmlAttributes:V(y,e),linkTags:J(b.LINK,[P,T],e),metaTags:J(b.META,[A,w,O,x,S],e),noscriptTags:J(b.NOSCRIPT,[C],e),onChangeClientState:G(e),scriptTags:J(b.SCRIPT,[j,C],e),styleTags:J(b.STYLE,[E],e),title:Y(e),titleAttributes:V(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return W(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return K({},a,((t={})[r.type]=i,t.titleAttributes=K({},o),t));case b.BODY:return K({},a,{bodyAttributes:K({},o)});case b.HTML:return K({},a,{htmlAttributes:K({},o)})}return K({},a,((n={})[r.type]=K({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}($(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=$(e,["children"]),r=K({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ve=function(e){var t=e.description,n=e.page,r=e.title;return c.createElement(he,null,c.createElement("meta",{name:"viewport",content:"initial-scale=1.0 width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"}),c.createElement("meta",{charset:"utf-8"}),c.createElement("title",null,r),c.createElement("link",{rel:"canonical",href:"https://bonsaitech.io/"+n}),c.createElement("meta",{property:"og:title",content:"Bonsai Tech"}),c.createElement("meta",{property:"og:site_name",content:"Bonsai"}),c.createElement("meta",{property:"og:url",content:"https://bonsaitech.io/"+n}),c.createElement("meta",{name:"description",content:"Bonsai - Web development agency based in Madrid"}),c.createElement("meta",{name:"keywords",content:"web development, web design, desarrollo,React, apps, HTML, CSS, JavaScript"}),c.createElement("meta",{property:"og:description",content:"Bonsai development agency based in Madrid."}),c.createElement("meta",{property:"og:description",content:t}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{property:"og:image",itemprop:"image",content:"https://bonsaitech.io/og/og-921x518.png"}),c.createElement("meta",{property:"og:image",itemprop:"image",content:"https://bonsaitech.io/og/og-1200x1200.png"}),c.createElement("meta",{property:"og:image",itemprop:"image",content:"https://bonsaitech.io/og/og-400x400.png"}),c.createElement("meta",{property:"og:image",itemprop:"image",content:"https://bonsaitech.io/og/og-256x256.png"}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("meta",{name:"twitter:image",content:"https://bonsaitech.io/og/og-921x518.png"}),c.createElement("meta",{property:"twitter:title",content:"Bonsai"}),c.createElement("meta",{name:"twitter:image:alt",content:"Bonsai"}),c.createElement("meta",{property:"twitter:description",content:t}),c.createElement("script",{id:"cookieyes",type:"text/javascript",src:"https://cdn-cookieyes.com/client_data/f78cb06b7da6ecc0375f429d/script.js"}),c.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-7WSK4H6DL5"}),c.createElement("script",null,"window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'G-7WSK4H6DL5');"))}},4349:function(e,t,n){"use strict";t.Z=n.p+"static/grid-0f9aebb541bc4c2b2cad85e85c002028.png"}}]);
//# sourceMappingURL=c89e49a75748c850bb263e3403b8bd4cf24f21d0-32ba9944dc11c744fdcd.js.map