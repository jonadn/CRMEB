(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33a0fffa"],{"1c2f":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"i-layout-page-header"},[e("div",{staticClass:"i-layout-page-header"},[e("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("Table",{ref:"selection",staticClass:"mt25",attrs:{columns:t.columns4,data:t.tabList,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"nickname",fn:function(n){var r=n.row;return[e("span",[t._v(t._s(r.admin_id+" / "+r.admin_name))])]}}])})],1)],1)},u=[],a=(e("96cf"),e("3b8d")),c=e("8593"),i={name:"systemFile",data:function(){return{loading:!1,tabList:[],columns4:[{title:"类型",key:"type",minWidth:100},{title:"文件地址",key:"filename",minWidth:250},{title:"校验码",key:"cthash",minWidth:200},{title:"上次访问时间",key:"atime",minWidth:150},{title:"上次修改时间",key:"mtime",minWidth:150},{title:"上次改变时间",key:"ctime",minWidth:150}]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,Object(c["o"])().then(function(){var n=Object(a["a"])(regeneratorRuntime.mark((function n(e){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.data,t.tabList=r.list,t.loading=!1;case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(n){t.loading=!1,t.$Message.error(n.msg)}))}}},o=i,s=e("2877"),d=Object(s["a"])(o,r,u,!1,null,"0872c630",null);n["default"]=d.exports},8593:function(t,n,e){"use strict";e.d(n,"j",(function(){return u})),e.d(n,"h",(function(){return a})),e.d(n,"i",(function(){return c})),e.d(n,"I",(function(){return i})),e.d(n,"n",(function(){return o})),e.d(n,"l",(function(){return s})),e.d(n,"m",(function(){return d})),e.d(n,"k",(function(){return f})),e.d(n,"B",(function(){return l})),e.d(n,"t",(function(){return m})),e.d(n,"A",(function(){return h})),e.d(n,"y",(function(){return g})),e.d(n,"v",(function(){return p})),e.d(n,"w",(function(){return b})),e.d(n,"x",(function(){return j})),e.d(n,"z",(function(){return O})),e.d(n,"G",(function(){return y})),e.d(n,"J",(function(){return _})),e.d(n,"o",(function(){return k})),e.d(n,"d",(function(){return v})),e.d(n,"f",(function(){return w})),e.d(n,"c",(function(){return T})),e.d(n,"e",(function(){return E})),e.d(n,"g",(function(){return G})),e.d(n,"r",(function(){return C})),e.d(n,"p",(function(){return W})),e.d(n,"q",(function(){return x})),e.d(n,"C",(function(){return L})),e.d(n,"D",(function(){return P})),e.d(n,"F",(function(){return J})),e.d(n,"E",(function(){return U})),e.d(n,"a",(function(){return $})),e.d(n,"b",(function(){return z})),e.d(n,"s",(function(){return F})),e.d(n,"H",(function(){return R})),e.d(n,"u",(function(){return S}));var r=e("6b6c");function u(t){return Object(r["a"])({url:"setting/config_class",method:"get",params:t})}function a(t){return Object(r["a"])({url:"setting/config_class/create",method:"get"})}function c(t){return Object(r["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function i(t){return Object(r["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function o(t){return Object(r["a"])({url:"setting/config",method:"get",params:t})}function s(t){return Object(r["a"])({url:"setting/config/create",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function f(t,n){return Object(r["a"])({url:"setting/config/set_status/".concat(t,"/").concat(n),method:"PUT"})}function l(t){return Object(r["a"])({url:"setting/group",method:"get",params:t})}function m(t){return Object(r["a"])({url:t.url,method:t.method,data:t.datas})}function h(t){return Object(r["a"])({url:"setting/group/".concat(t),method:"get"})}function g(t,n){return Object(r["a"])({url:n,method:"get",params:t})}function p(t,n){return Object(r["a"])({url:n,method:"get",params:t})}function b(t,n){return Object(r["a"])({url:n,method:"get",params:t})}function j(t,n){return Object(r["a"])({url:n,method:"get",params:t})}function O(t){return Object(r["a"])({url:t,method:"PUT"})}function y(t){return Object(r["a"])({url:"system/log/search_admin",method:"GET"})}function _(t){return Object(r["a"])({url:"system/log",method:"GET",params:t})}function k(){return Object(r["a"])({url:"system/file",method:"GET"})}function v(){return Object(r["a"])({url:"system/backup",method:"GET"})}function w(t){return Object(r["a"])({url:"system/backup/read",method:"GET",params:t})}function T(t){return Object(r["a"])({url:"system/backup/backup",method:"put",data:t})}function E(t){return Object(r["a"])({url:"system/backup/optimize",method:"put",data:t})}function G(t){return Object(r["a"])({url:"system/backup/repair",method:"put",data:t})}function C(t){return Object(r["a"])({url:"system/backup/file_list",method:"GET"})}function W(t){return Object(r["a"])({url:"backup/download",method:"get",params:t})}function x(t){return Object(r["a"])({url:"system/backup/import",method:"POST",data:t})}function L(t){return Object(r["a"])({url:"system/file/opendir",method:"GET",params:t})}function P(t){return Object(r["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function J(t){return Object(r["a"])({url:"system/file/savefile",method:"post",data:t})}function U(t){return Object(r["a"])({url:"system/replace_site_url",method:"post",data:t})}function $(){return Object(r["a"])({url:"auth",method:"get"})}function z(t){return Object(r["a"])({url:"auth_apply",method:"post",data:t})}function F(){return Object(r["a"])({url:"setting/get_kf_adv",method:"get"})}function R(t){return Object(r["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function S(){return Object(r["a"])({url:"setting/group_all",method:"get"})}}}]);