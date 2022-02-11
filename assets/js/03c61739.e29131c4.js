"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82110],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69010:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a={title:"Build an image from the source codes"},c=void 0,l={unversionedId:"build",id:"version-apisix-2.12.0/build",isDocsHomePage:!1,title:"Build an image from the source codes",description:"\x3c!--",source:"@site/docs-apisix-docker_versioned_docs/version-apisix-2.12.0/build.md",sourceDirName:".",slug:"/build",permalink:"/docs/docker/apisix-2.12.0/build",editUrl:"https://github.com/apache/apisix-docker/edit/release/apisix-2.12.0/docs/en/latest/build.md",tags:[],version:"apisix-2.12.0",frontMatter:{title:"Build an image from the source codes"},sidebar:"version-apisix-2.12.0/docs",next:{title:"Deploy Apache APISIX with Docker",permalink:"/docs/docker/apisix-2.12.0/manual"}},s=[{value:"Build an image from source",id:"build-an-image-from-source",children:[]}],u={toc:s};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"build-an-image-from-source"},"Build an image from source"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"install release version (Apache releases are beginning from version 0.9):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Assign Apache release version number to variable `APISIX_VERSION`, for example: 2.2. The latest version can be find at `https://github.com/apache/apisix/releases`\n\nexport APISIX_VERSION=2.9\nmake build-on-alpine\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"install master branch version, which has latest code(ONLY for the developer's convenience):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export APISIX_VERSION=master\nmake build-on-alpine\n")))}p.isMDXComponent=!0}}]);