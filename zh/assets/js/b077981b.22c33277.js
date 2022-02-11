"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78840],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},38605:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i={title:"\u63d2\u4ef6"},c=void 0,l={unversionedId:"plugins",id:"version-2.11/plugins",isDocsHomePage:!1,title:"\u63d2\u4ef6",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.11/plugins.md",sourceDirName:".",slug:"/plugins",permalink:"/zh/docs/apisix/2.11/plugins",editUrl:"https://github.com/apache/apisix/edit/release/2.11/docs/zh/latest/plugins.md",tags:[],version:"2.11",frontMatter:{title:"\u63d2\u4ef6"}},u=[{value:"\u70ed\u52a0\u8f7d",id:"\u70ed\u52a0\u8f7d",children:[]},{value:"stand-alone \u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d",id:"stand-alone-\u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d",children:[]}],p={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u70ed\u52a0\u8f7d"},"\u70ed\u52a0\u8f7d"),(0,a.kt)("p",null,"APISIX \u7684\u63d2\u4ef6\u662f\u70ed\u52a0\u8f7d\u7684\uff0c\u4e0d\u7ba1\u4f60\u662f\u65b0\u589e\u3001\u5220\u9664\u8fd8\u662f\u4fee\u6539\u63d2\u4ef6\uff0c\u90fd\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u53ea\u9700\u8981\u901a\u8fc7 admin API \u53d1\u9001\u4e00\u4e2a HTTP \u8bf7\u6c42\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u5df2\u7ecf\u5728\u8def\u7531\u89c4\u5219\u91cc\u914d\u7f6e\u4e86\u67d0\u4e2a\u63d2\u4ef6\uff08\u6bd4\u5982\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u5b57\u6bb5\u91cc\u9762\u6dfb\u52a0\u4e86\u5b83\uff09\uff0c\u7136\u540e\n\u7981\u7528\u4e86\u8be5\u63d2\u4ef6\uff0c\u5728\u6267\u884c\u8def\u7531\u89c4\u5219\u7684\u65f6\u5019\u4f1a\u8df3\u8fc7\u8fd9\u4e2a\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"stand-alone-\u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d"},"stand-alone \u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d"),(0,a.kt)("p",null,"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.11/stand-alone"},"stand alone \u6a21\u5f0f")," \u6587\u6863\u91cc\u5173\u4e8e\u914d\u7f6e\u63d2\u4ef6\u7684\u5185\u5bb9\u3002"))}s.isMDXComponent=!0}}]);