(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{2643:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.bind(n,6545))},4930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(1024);n(2265);let l=r._(n(4795));function o(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){let n=l.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let u=r.loader;return n({...r,loader:()=>null!=u?u().then(o):Promise.resolve(o(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6005:function(e,t,n){"use strict";function r(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return r}}),n(6491)},4795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(1024)._(n(2265)),l=n(6005),o=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,o=r.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),u=t.ssr?r.default.Fragment:l.NoSSR,a=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:o},r.default.createElement(u,null,r.default.createElement(a,e)))}return t.lazy=r.default.lazy(t.loader),n.displayName="LoadableComponent",n}},6545:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437),l=n(2265),o=n(7305),u=n(4930);let a=n.n(u)()(()=>Promise.all([n.e(749),n.e(778),n.e(438)]).then(n.bind(n,6165)),{loadableGenerated:{webpack:()=>[6165]},ssr:!1});function f(){let[e,t]=(0,l.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{onClick:()=>{t(!0)},children:"Add company"}),(0,r.jsx)(a,{onSubmit:console.log,show:e,onClose:()=>t(!1)})]})}},7305:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7437);n(2265);var l=function(){for(var e,t,n=0,r="",l=arguments.length;n<l;n++)(e=arguments[n])&&(t=function e(t){var n,r,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(n=0;n<o;n++)t[n]&&(r=e(t[n]))&&(l&&(l+=" "),l+=r)}else for(r in t)t[r]&&(l&&(l+=" "),l+=r)}return l}(e))&&(r&&(r+=" "),r+=t);return r};function o(e){let{disabled:t,...n}=e;return(0,r.jsx)("button",{...n,className:l("py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded",!t&&"hover:bg-gray-800 active:bg-gray-950",t&&"text-zinc-100")})}},622:function(e,t,n){"use strict";var r=n(2265),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,o={},i=null,s=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,r)&&!f.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:i,ref:s,props:o,_owner:a.current}}t.Fragment=o,t.jsx=i,t.jsxs=i},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[749,971,938,744],function(){return e(e.s=2643)}),_N_E=e.O()}]);