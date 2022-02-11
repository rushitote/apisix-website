"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78138],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||c;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90280:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),o={title:"\u4f9d\u6258\u793e\u533a\u8ba9 Apache APISIX \u9ad8\u901f\u53d1\u5c55",date:new Date("2021-08-06T16:10:00.000Z"),keywords:["APISIX","API \u7f51\u5173","\u5f00\u6e90","\u793e\u533a","\u8d21\u732e\u8005"],description:"\u5728\u8fc7\u53bb\u7684\u4e00\u5e74\u91cc\uff0cAPISIX \u5df2\u7ecf\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684 API \u7f51\u5173\u9879\u76ee\uff0c\u9664\u4e86\u81ea\u8eab\u6280\u672f\u5148\u8fdb\u5916\uff0c\u66f4\u5f97\u610f\u4e8e\u793e\u533a\u7684\u9ad8\u5ea6\u6d3b\u8dc3\u3002\u622a\u6b62\u76ee\u524d\uff0c\u5df2\u7ecf\u6709\u6765\u81ea\u4e16\u754c\u5404\u5730 225 \u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u8d21\u732e\uff0c\u5e76\u4e14\u8fd8\u5728\u4fdd\u6301\u9ad8\u901f\u589e\u957f\u3002 \u672c\u6b21\u5206\u4eab\u4f1a\u4ecb\u7ecd APISIX \u5728\u8df5\u884c\u201c\u793e\u533a\u91cd\u4e8e\u4ee3\u7801\u201d\u8fc7\u7a0b\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002\u4f5c\u4e3a\u4e00\u4e2a\u7406\u60f3\u4e3b\u4e49\u521b\u4e1a\u8005\uff0c\u53c8\u662f\u5982\u4f55\u4e0e Apache \u6587\u5316\u7ed3\u5408\uff0c\u8ba9\u521b\u4e1a\u516c\u53f8\u4e5f\u80fd\u9ad8\u901f\u53d1\u5c55\u3002"},i=void 0,l={permalink:"/articles/Relying-On-The-Community-To-Get-Apache-APISIX-Up-Speed",source:"@site/articles/Relying-On-The-Community-To-Get-Apache-APISIX-Up-Speed.md",title:"\u4f9d\u6258\u793e\u533a\u8ba9 Apache APISIX \u9ad8\u901f\u53d1\u5c55",description:"\u5728\u8fc7\u53bb\u7684\u4e00\u5e74\u91cc\uff0cAPISIX \u5df2\u7ecf\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684 API \u7f51\u5173\u9879\u76ee\uff0c\u9664\u4e86\u81ea\u8eab\u6280\u672f\u5148\u8fdb\u5916\uff0c\u66f4\u5f97\u610f\u4e8e\u793e\u533a\u7684\u9ad8\u5ea6\u6d3b\u8dc3\u3002\u622a\u6b62\u76ee\u524d\uff0c\u5df2\u7ecf\u6709\u6765\u81ea\u4e16\u754c\u5404\u5730 225 \u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u8d21\u732e\uff0c\u5e76\u4e14\u8fd8\u5728\u4fdd\u6301\u9ad8\u901f\u589e\u957f\u3002 \u672c\u6b21\u5206\u4eab\u4f1a\u4ecb\u7ecd APISIX \u5728\u8df5\u884c\u201c\u793e\u533a\u91cd\u4e8e\u4ee3\u7801\u201d\u8fc7\u7a0b\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002\u4f5c\u4e3a\u4e00\u4e2a\u7406\u60f3\u4e3b\u4e49\u521b\u4e1a\u8005\uff0c\u53c8\u662f\u5982\u4f55\u4e0e Apache \u6587\u5316\u7ed3\u5408\uff0c\u8ba9\u521b\u4e1a\u516c\u53f8\u4e5f\u80fd\u9ad8\u901f\u53d1\u5c55\u3002",date:"2021-08-06T16:10:00.000Z",formattedDate:"August 6, 2021",tags:[],readingTime:.29,truncated:!1,authors:[],prevItem:{title:"Apache APISIX \u7684\u5b75\u5316\u5668\u4e4b\u65c5",permalink:"/articles/Apache-APISIX-Incubator-Journey"},nextItem:{title:"\u4f7f\u7528 ECharts \u5448\u73b0\u793e\u533a\u6d3b\u52a8\u7684\u6e32\u67d3\u56fe",permalink:"/articles/Rendering-Community-Events-Using-ECharts"}},p={authorsImageUrls:[]},u=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],s={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=762343193&bvid=BV1Q64y1Y7fF&cid=388411338&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,c.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,c.kt)("p",null,"\u738b\u9662\u751f\uff0c\u5f00\u6e90\u7231\u597d\u8005 Apache APISIX \u521b\u59cb\u4eba\u548c PMC \u6210\u5458"),(0,c.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,c.kt)("p",null,"\u5728\u8fc7\u53bb\u7684\u4e00\u5e74\u91cc\uff0cAPISIX \u5df2\u7ecf\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684 API \u7f51\u5173\u9879\u76ee\uff0c\u9664\u4e86\u81ea\u8eab\u6280\u672f\u5148\u8fdb\u5916\uff0c\u66f4\u5f97\u610f\u4e8e\u793e\u533a\u7684\u9ad8\u5ea6\u6d3b\u8dc3\u3002\u622a\u6b62\u76ee\u524d\uff0c\u5df2\u7ecf\u6709\u6765\u81ea\u4e16\u754c\u5404\u5730 225 \u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u8d21\u732e\uff0c\u5e76\u4e14\u8fd8\u5728\u4fdd\u6301\u9ad8\u901f\u589e\u957f\u3002 \u672c\u6b21\u5206\u4eab\u4f1a\u4ecb\u7ecd APISIX \u5728\u8df5\u884c\u201c\u793e\u533a\u91cd\u4e8e\u4ee3\u7801\u201d\u8fc7\u7a0b\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002\u4f5c\u4e3a\u4e00\u4e2a\u7406\u60f3\u4e3b\u4e49\u521b\u4e1a\u8005\uff0c\u53c8\u662f\u5982\u4f55\u4e0e Apache \u6587\u5316\u7ed3\u5408\uff0c\u8ba9\u521b\u4e1a\u516c\u53f8\u4e5f\u80fd\u9ad8\u901f\u53d1\u5c55\u3002"),(0,c.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,c.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,c.kt)("img",{src:"https://static.apiseven.com/202108/1639468506819-7f829080-19de-4d94-b103-e1d967e0baea.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}f.isMDXComponent=!0}}]);