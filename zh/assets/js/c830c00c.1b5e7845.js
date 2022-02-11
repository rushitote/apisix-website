"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3577],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=u(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||l;return n?r.createElement(k,i(i({ref:e},m),{},{components:n})):r.createElement(k,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96242:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i={title:"APISIX variable"},o=void 0,p={unversionedId:"apisix-variable",id:"version-2.12/apisix-variable",isDocsHomePage:!1,title:"APISIX variable",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.12/apisix-variable.md",sourceDirName:".",slug:"/apisix-variable",permalink:"/zh/docs/apisix/apisix-variable",editUrl:"https://github.com/apache/apisix/edit/release/2.12/docs/zh/latest/apisix-variable.md",tags:[],version:"2.12",frontMatter:{title:"APISIX variable"},sidebar:"version-2.12/docs",previous:{title:"\u63d2\u4ef6\u5f00\u53d1",permalink:"/zh/docs/apisix/plugin-develop"},next:{title:"External Plugin",permalink:"/zh/docs/apisix/external-plugin"}},u=[],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Besides ",(0,l.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/varindex.html"},"Nginx variable"),", APISIX also provides\nadditional variables."),(0,l.kt)("p",null,"List in alphabetical order:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"balancer_ip"),(0,l.kt)("td",{parentName:"tr",align:null},"the IP of picked upstream server"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1.1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"balancer_port"),(0,l.kt)("td",{parentName:"tr",align:null},"the port of picked upstream server"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer_name"),(0,l.kt)("td",{parentName:"tr",align:null},"username of ",(0,l.kt)("inlineCode",{parentName:"td"},"consumer")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql_name"),(0,l.kt)("td",{parentName:"tr",align:null},"the ",(0,l.kt)("a",{parentName:"td",href:"https://graphql.org/learn/queries/#operation-name"},"operation name")," of GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},"HeroComparison")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql_operation"),(0,l.kt)("td",{parentName:"tr",align:null},"the operation type of GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},"mutation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql_root_fields"),(0,l.kt)("td",{parentName:"tr",align:null},"the top level fields of GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},'["hero"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mqtt_client_id"),(0,l.kt)("td",{parentName:"tr",align:null},"the client id in MQTT protocol"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"route_id"),(0,l.kt)("td",{parentName:"tr",align:null},"id of ",(0,l.kt)("inlineCode",{parentName:"td"},"route")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"route_name"),(0,l.kt)("td",{parentName:"tr",align:null},"name of ",(0,l.kt)("inlineCode",{parentName:"td"},"route")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_id"),(0,l.kt)("td",{parentName:"tr",align:null},"id of ",(0,l.kt)("inlineCode",{parentName:"td"},"service")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_name"),(0,l.kt)("td",{parentName:"tr",align:null},"name of ",(0,l.kt)("inlineCode",{parentName:"td"},"service")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"You can also ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugin-develop#register-custom-variable"},"register your own variable"),"."))}d.isMDXComponent=!0}}]);