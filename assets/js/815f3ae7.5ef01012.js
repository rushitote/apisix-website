"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90985],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87641:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l={title:"real-ip"},o=void 0,p={unversionedId:"plugins/real-ip",id:"version-2.11/plugins/real-ip",isDocsHomePage:!1,title:"real-ip",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.11/plugins/real-ip.md",sourceDirName:"plugins",slug:"/plugins/real-ip",permalink:"/docs/apisix/2.11/plugins/real-ip",editUrl:"https://github.com/apache/apisix/edit/release/2.11/docs/en/latest/plugins/real-ip.md",tags:[],version:"2.11",frontMatter:{title:"real-ip"},sidebar:"version-2.11/docs",previous:{title:"gzip",permalink:"/docs/apisix/2.11/plugins/gzip"},next:{title:"server-info",permalink:"/docs/apisix/2.11/plugins/server-info"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"real-ip")," plugin dynamically changes the client's IP and port seen by APISIX."),(0,i.kt)("p",null,"It works like Nginx's ",(0,i.kt)("inlineCode",{parentName:"p"},"ngx_http_realip_module"),", but is more flexible."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This plugin requires APISIX to run on ",(0,i.kt)("a",{parentName:"strong",href:"/docs/apisix/2.11/how-to-build#step-6-build-openresty-for-apache-apisix"},"APISIX-OpenResty"),".")),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Any Nginx variable like ",(0,i.kt)("inlineCode",{parentName:"td"},"arg_realip")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"http_x_forwarded_for")),(0,i.kt)("td",{parentName:"tr",align:null},"dynamically set the client's IP and port in APISIX's view, according to the value of variable. If the value doesn't contain a port, the client's port won't be changed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"trusted_addresses"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of IPs or CIDR ranges"),(0,i.kt)("td",{parentName:"tr",align:null},"dynamically set the ",(0,i.kt)("inlineCode",{parentName:"td"},"set_real_ip_from")," directive")))),(0,i.kt)("p",null,"If the remote address comes from ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," is missing or invalid, this plugin will just let it go and don't change the client address."),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"Here's an example, enable this plugin on the specified route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "real-ip": {\n            "source": "arg_realip",\n            "trusted_addresses": ["127.0.0.0/24"]\n        },\n        "response-rewrite": {\n            "headers": {\n                "remote_addr": "$remote_addr",\n                "remote_port": "$remote_port"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("p",null,"Use curl to access:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080/index.html?realip=1.2.3.4:9080' -I\n...\nremote-addr: 1.2.3.4\nremote-port: 9080\n")),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable this plugin, it is very simple,\nyou can delete the corresponding JSON configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"This plugin has been disabled now. It works for other plugins."))}d.isMDXComponent=!0}}]);