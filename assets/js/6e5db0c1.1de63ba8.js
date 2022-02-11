"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52562],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76451:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l={title:"wolf-rbac"},o=void 0,p={unversionedId:"plugins/wolf-rbac",id:"plugins/wolf-rbac",isDocsHomePage:!1,title:"wolf-rbac",description:"\x3c!--",source:"@site/docs/apisix/plugins/wolf-rbac.md",sourceDirName:"plugins",slug:"/plugins/wolf-rbac",permalink:"/docs/apisix/next/plugins/wolf-rbac",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/wolf-rbac.md",tags:[],version:"current",frontMatter:{title:"wolf-rbac"},sidebar:"docs",previous:{title:"authz-keycloak",permalink:"/docs/apisix/next/plugins/authz-keycloak"},next:{title:"openid-connect",permalink:"/docs/apisix/next/plugins/openid-connect"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"Dependencies",id:"dependencies",children:[{value:"Install wolf and start the service",id:"install-wolf-and-start-the-service",children:[]},{value:"Add <code>application</code>, <code>admin</code>, <code>normal user</code>, <code>permission</code>, <code>resource</code> and user authorize",id:"add-application-admin-normal-user-permission-resource-and-user-authorize",children:[]}]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#name"},(0,r.kt)("strong",{parentName:"a"},"Name"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attributes"},(0,r.kt)("strong",{parentName:"a"},"Attributes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dependencies"},(0,r.kt)("strong",{parentName:"a"},"Dependencies"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,r.kt)("strong",{parentName:"a"},"How To Enable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#test-plugin"},(0,r.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,r.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,r.kt)("h2",{id:"name"},"Name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," is an authentication and authorization (rbac) plugin. It needs to work with ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer"),". Also need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"route"),".\nThe rbac feature is provided by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf"),". For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"wolf"),", please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf documentation"),"."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"',(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:12180%22"},'http://127.0.0.1:12180"')),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Set the service address of ",(0,r.kt)("inlineCode",{parentName:"td"},"wolf-server"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"unset"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Set the app id. The app id must be added in wolf-console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header_prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"X-"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"prefix of custom HTTP header. After authentication is successful, three headers will be added to the request header (for backend) and response header (for frontend): ",(0,r.kt)("inlineCode",{parentName:"td"},"X-UserId"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Username"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Nickname"),".")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"This plugin will add several API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/login"),(0,r.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/change_pwd"),(0,r.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/user_info")),(0,r.kt)("p",null,"You may need to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/public-api"},"public-api")," plugin to expose it."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"install-wolf-and-start-the-service"},"Install wolf and start the service"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/quick-start-with-docker/README.md"},"Wolf quick start")),(0,r.kt)("h3",{id:"add-application-admin-normal-user-permission-resource-and-user-authorize"},"Add ",(0,r.kt)("inlineCode",{parentName:"h3"},"application"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"admin"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"normal user"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"permission"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"resource")," and user authorize"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/docs/usage.md"},"Wolf-console usage")),(0,r.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"set a consumer and config the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"wolf-rbac"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "username":"wolf_rbac",\n  "plugins":{\n    "wolf-rbac":{\n      "server":"http://127.0.0.1:12180",\n      "appid":"restful"\n    }\n  },\n  "desc":"wolf-rbac"\n}\'\n')),(0,r.kt)("p",null,"You also can complete the above operations through the web interface, first add a consumer:\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/wolf-rbac-1.png",alt:"add a consumer"})),(0,r.kt)("p",null,"Then add the wolf-rbac plugin to the consumer page:\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/wolf-rbac-2.png",alt:"enable wolf-rbac plugin"})),(0,r.kt)("p",null,"Notes: The ",(0,r.kt)("inlineCode",{parentName:"p"},"appid")," filled in above needs to already exist in the wolf system."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("inlineCode",{parentName:"li"},"Route")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Service")," and enable the wolf-rbac plugin.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n        "wolf-rbac": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,r.kt)("h4",{id:"login-and-get-wolf-rbac-token"},"Login and get ",(0,r.kt)("inlineCode",{parentName:"h4"},"wolf-rbac")," token:"),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"appid"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," must be real ones in the wolf system.\n",(0,r.kt)("inlineCode",{parentName:"p"},"authType")," is the authentication type, ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is password authentication, ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"LDAP")," authentication. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),".  ",(0,r.kt)("inlineCode",{parentName:"p"},"wolf")," supports ",(0,r.kt)("inlineCode",{parentName:"p"},"LDAP")," authentication since version 0.5.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login as ",(0,r.kt)("inlineCode",{parentName:"li"},"POST application/json"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H "Content-Type: application/json" \\\n-d \'{"appid": "restful", "username":"test", "password":"user-password", "authType":1}\'\n\nHTTP/1.1 200 OK\nDate: Wed, 24 Jul 2019 10:33:31 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n{"rbac_token":"V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts","user_info":{"nickname":"test","username":"test","id":"749"}}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login as ",(0,r.kt)("inlineCode",{parentName:"li"},"POST x-www-form-urlencoded"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H \"Content-Type: application/x-www-form-urlencoded\" \\\n-d 'appid=restful&username=test&password=user-password'\n")),(0,r.kt)("h4",{id:"try-request-with-token"},"try request with token"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"without token")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/ -H"Host: www.baidu.com" -i\n\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing rbac token in request"}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request header(Authorization) with token:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'Authorization: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request header(x-rbac-token) with token:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'x-rbac-token: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request params with token:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080?rbac_token=V1%23restful%23eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -H\"Host: www.baidu.com\" -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request cookie with token:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080 -H"Host: www.baidu.com" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n')),(0,r.kt)("h4",{id:"get-rbac-user-information"},"Get ",(0,r.kt)("inlineCode",{parentName:"h4"},"RBAC")," user information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/user_info \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n\n\nHTTP/1.1 200 OK\n{\n    "user_info":{\n        "nickname":"test",\n        "lastLogin":1582816780,\n        "id":749,\n        "username":"test",\n        "appIDs":["restful"],\n        "manager":"none",\n        "permissions":{"USER_LIST":true},\n        "profile":null,\n        "roles":{},\n        "createTime":1578820506,\n        "email":""\n    }\n}\n')),(0,r.kt)("h4",{id:"change-rbac-user-password"},"Change 'RBAC' user password"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/change_pwd \\\n-H "Content-Type: application/json" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i \\\n-X PUT -d \'{"oldPassword": "old password", "newPassword": "new password"}\'\n\n\nHTTP/1.1 200 OK\n{"message":"success to change password"}\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"When you want to disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);