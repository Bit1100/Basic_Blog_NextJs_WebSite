(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5019:function(e,n,t){"use strict";var r=t(9008),o=t(5893),c=function(e){var n=e.title,t=e.description;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:n}),(0,o.jsx)("meta",{name:"description",content:t})]})})};c.defaultProps={title:"BiT Blog Website",description:"This is the new type of blog website."},n.Z=c},2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,c=(o=t(7294))&&o.__esModule?o:{default:o},i=t(1063),a=t(4651),u=t(7426);var l={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=a.useRouter(),f=c.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?i.resolveHref(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,j=e.scroll,y=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=(n=c.default.Children.only(v))&&"object"===typeof n&&n.ref,m=u.useIntersection({rootMargin:"200px"}),x=r(m,2),O=x[0],w=x[1],_=c.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);c.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,w,y,t,o]);var E={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,a,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[o?"replace":"push"](t,r,{shallow:c,locale:u,scroll:a}))}(e,o,d,p,h,b,j,y)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var P="undefined"!==typeof y?y:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(p,P,o&&o.locales,o&&o.domainLocales);E.href=L||i.addBasePath(i.addLocale(p,P,o&&o.defaultLocale))}return c.default.cloneElement(n,E)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,u=o.useRef(),l=o.useState(!1),s=r(l,2),f=s[0],d=s[1],p=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,i=r.elements;return i.set(e,n),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!i&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),c=t(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},1609:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{default:function(){return d}});t(3146),t(261);var o=t(1664),c=t(5893),i=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("nav",{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(o.default,{href:"/",children:"Home"})}),(0,c.jsx)("li",{children:(0,c.jsx)(o.default,{href:"/about",children:"About"})})]})})})},a=function(){return(0,c.jsx)("footer",{children:"CopyRight \xa9 2021/22. All Rights Reserved."})},u=t(5019),l=function(e){var n=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.Z,{}),(0,c.jsx)(i,{}),(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("main",{className:"main",children:n})}),(0,c.jsx)(a,{})]})};function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.Component,t=e.pageProps;return(0,c.jsxs)(l,{children:[(0,c.jsx)(n,f({},t)),");"]})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1609)}])},3146:function(){},261:function(){},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(4651)}));var t=e.O();_N_E=t}]);