(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-790160ea"],{"00f2":function(t,e,n){},8593:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return o})),n.d(e,"I",(function(){return c})),n.d(e,"n",(function(){return s})),n.d(e,"l",(function(){return i})),n.d(e,"m",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"B",(function(){return m})),n.d(e,"t",(function(){return f})),n.d(e,"A",(function(){return p})),n.d(e,"y",(function(){return h})),n.d(e,"v",(function(){return b})),n.d(e,"w",(function(){return g})),n.d(e,"x",(function(){return y})),n.d(e,"z",(function(){return j})),n.d(e,"G",(function(){return O})),n.d(e,"J",(function(){return _})),n.d(e,"o",(function(){return v})),n.d(e,"d",(function(){return k})),n.d(e,"f",(function(){return C})),n.d(e,"c",(function(){return x})),n.d(e,"e",(function(){return w})),n.d(e,"g",(function(){return N})),n.d(e,"r",(function(){return E})),n.d(e,"p",(function(){return T})),n.d(e,"q",(function(){return G})),n.d(e,"C",(function(){return P})),n.d(e,"D",(function(){return $})),n.d(e,"F",(function(){return M})),n.d(e,"E",(function(){return U})),n.d(e,"a",(function(){return B})),n.d(e,"b",(function(){return z})),n.d(e,"s",(function(){return F})),n.d(e,"H",(function(){return I})),n.d(e,"u",(function(){return J}));var r=n("6b6c");function a(t){return Object(r["a"])({url:"setting/config_class",method:"get",params:t})}function u(t){return Object(r["a"])({url:"setting/config_class/create",method:"get"})}function o(t){return Object(r["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function c(t){return Object(r["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function s(t){return Object(r["a"])({url:"setting/config",method:"get",params:t})}function i(t){return Object(r["a"])({url:"setting/config/create",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function d(t,e){return Object(r["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function m(t){return Object(r["a"])({url:"setting/group",method:"get",params:t})}function f(t){return Object(r["a"])({url:t.url,method:t.method,data:t.datas})}function p(t){return Object(r["a"])({url:"setting/group/".concat(t),method:"get"})}function h(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function b(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function g(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function y(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function j(t){return Object(r["a"])({url:t,method:"PUT"})}function O(t){return Object(r["a"])({url:"system/log/search_admin",method:"GET"})}function _(t){return Object(r["a"])({url:"system/log",method:"GET",params:t})}function v(){return Object(r["a"])({url:"system/file",method:"GET"})}function k(){return Object(r["a"])({url:"system/backup",method:"GET"})}function C(t){return Object(r["a"])({url:"system/backup/read",method:"GET",params:t})}function x(t){return Object(r["a"])({url:"system/backup/backup",method:"put",data:t})}function w(t){return Object(r["a"])({url:"system/backup/optimize",method:"put",data:t})}function N(t){return Object(r["a"])({url:"system/backup/repair",method:"put",data:t})}function E(t){return Object(r["a"])({url:"system/backup/file_list",method:"GET"})}function T(t){return Object(r["a"])({url:"backup/download",method:"get",params:t})}function G(t){return Object(r["a"])({url:"system/backup/import",method:"POST",data:t})}function P(t){return Object(r["a"])({url:"system/file/opendir",method:"GET",params:t})}function $(t){return Object(r["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function M(t){return Object(r["a"])({url:"system/file/savefile",method:"post",data:t})}function U(t){return Object(r["a"])({url:"system/replace_site_url",method:"post",data:t})}function B(){return Object(r["a"])({url:"auth",method:"get"})}function z(t){return Object(r["a"])({url:"auth_apply",method:"post",data:t})}function F(){return Object(r["a"])({url:"setting/get_kf_adv",method:"get"})}function I(t){return Object(r["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function J(){return Object(r["a"])({url:"setting/group_all",method:"get"})}},b4f0:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))]),n("div",{staticClass:"clear_tit"},[n("Icon",{attrs:{type:"md-information-circle",color:"#ED4014"}}),n("span",[t._v("清除数据请谨慎，清除就无法恢复哦！")])],1)])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Row",{attrs:{type:"flex",gutter:24}},t._l(t.tabList,(function(e,r){return n("Col",t._b({key:r,staticClass:"mb20"},"Col",t.grid,!1),[n("div",{staticClass:"clear_box"},[n("span",{staticClass:"clear_box_sp1",domProps:{textContent:t._s(e.title)}}),n("span",{staticClass:"clear_box_sp2",domProps:{textContent:t._s(e.tlt)}}),n("Button",{attrs:{type:e.typeName},domProps:{textContent:t._s("primary"===e.typeName?"立即更换":"立即清理")},on:{click:function(n){return t.onChange(e)}}})],1)])})),1)],1),n("Modal",{staticClass:"tableBox",attrs:{scrollable:"",closable:"",title:"更换域名","mask-closable":!1},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[n("div",{staticClass:"acea-row row-column"},[n("span",[t._v("请输入需要替换的域名，格式为：http://域名。")]),n("span",[t._v("替换规则：会使用当前[设置]里面的[网站域名]去替换成当前您输入的域名。")]),n("span",{staticClass:"mb15"},[t._v("替换成功后再去更换[网站域名]。")]),n("Input",{attrs:{type:"textarea",rows:4,placeholder:"请输入网站域名..."},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}})],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:t.changeYU}},[t._v("确定")])],1)])],1)},a=[],u=n("8593"),o={name:"systemCleardata",data:function(){return{value6:"",modals:!1,grid:{xl:6,lg:8,md:12,sm:24,xs:24},tabList:[{title:"更换域名",tlt:"替换所有本地上传的图片域名",typeName:"primary",type:"11"},{title:"清除用户生成的临时附件",tlt:"清除用户生成的临时附件，不会影响商品图",typeName:"error",type:"temp"},{title:"清除回收站商品",tlt:"清除回收站商品，谨慎操作",typeName:"error",type:"recycle"},{title:"清除商城数据",tlt:"清除商城数据，谨慎操作",typeName:"error",type:"store"},{title:"清除商品分类",tlt:"会清除所有商品分类，谨慎操作",typeName:"error",type:"category"},{title:"清除订单数据",tlt:"清除用户所有订单数据，谨慎操作",typeName:"error",type:"order"},{title:"清除客服数据",tlt:"清除添加的客服数据，谨慎操作",typeName:"error",type:"kefu"},{title:"清除微信数据",tlt:"清除微信菜单保存数据，微信关键字无效回复",typeName:"error",type:"wechat"},{title:"清除内容分类",tlt:"清除添加的文章和文章分类,谨慎操作",typeName:"error",type:"article"},{title:"清除所有附件",tlt:"清除所有附件用户生成和后台上传,谨慎操作",typeName:"error",type:"attachment"},{title:"清除系统记录",tlt:"清除系统记录,谨慎操作",typeName:"error",type:"system"}]}},methods:{onChange:function(t){"11"===t.type?this.modals=!0:this.clearFroms(t)},clearFroms:function(t){var e=this,n={title:t.title,url:"system/clear/".concat(t.type),method:"get",ids:""};this.$modalSure(n).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},changeYU:function(){var t=this;Object(u["E"])({url:this.value6}).then((function(e){t.modals=!1,t.$Message.success(e.msg)})).catch((function(e){t.$Message.error(e.msg)}))}}},c=o,s=(n("e5e2"),n("2877")),i=Object(s["a"])(c,r,a,!1,null,"1237648b",null);e["default"]=i.exports},e5e2:function(t,e,n){"use strict";n("00f2")}}]);