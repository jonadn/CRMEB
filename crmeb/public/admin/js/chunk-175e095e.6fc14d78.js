(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-175e095e"],{"29f2":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("router-link",{attrs:{to:{path:"/admin/marketing/live/live_room"}}},[a("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Col",{attrs:{span:"24"}},[a("Alert",{staticStyle:{width:"550px","margin-left":"17px","margin-bottom":"25px"},attrs:{type:"warning","show-icon":""}},[t._v("必须前往微信小程序官方后台开通直播权限，关注"),a("span",{staticStyle:{color:"red",cursor:"pointer"},on:{click:t.codeImg}},[t._v("【小程序直播】")]),t._v("须知直播状态")])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"选择主播："}},[a("Select",{staticStyle:{width:"300px"},attrs:{filterable:"",clearable:""},on:{"on-change":t.anchorName},model:{value:t.formValidate.anchor_wechat,callback:function(e){t.$set(t.formValidate,"anchor_wechat",e)},expression:"formValidate.anchor_wechat"}},t._l(t.liveList,(function(e,l){return a("Option",{key:l,attrs:{value:e.wechat}},[t._v(t._s(e.wechat))])})),1)],1)],1),a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"直播间名称："}},[a("Input",{staticStyle:{width:"300px"},attrs:{"enter-button":"",placeholder:"请输入直播间名称","element-id":"name"},model:{value:t.formValidate.name,callback:function(e){t.$set(t.formValidate,"name",e)},expression:"formValidate.name"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("div",{staticStyle:{display:"flex"}},[a("FormItem",{attrs:{label:"背景图："}},[a("div",{staticClass:"box",on:{click:function(e){return t.modalPicTap(0)}}},[t.formValidate.cover_img?a("img",{attrs:{src:t.formValidate.cover_img,alt:""}}):a("div",{staticClass:"upload-box"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1)])]),a("span",{staticStyle:{"margin-left":"20px",color:"#b0bac5"}},[t._v("尺寸：1080*1920px")])],1)]),a("Col",{attrs:{span:"24"}},[a("div",{staticStyle:{display:"flex"}},[a("FormItem",{attrs:{label:"分享图："}},[a("div",{staticClass:"box",on:{click:function(e){return t.modalPicTap(1)}}},[t.formValidate.share_img?a("img",{attrs:{src:t.formValidate.share_img,alt:""}}):a("div",{staticClass:"upload-box"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1)])]),a("span",{staticStyle:{"margin-left":"20px",color:"#b0bac5"}},[t._v("尺寸：800*640px")])],1)]),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"联系电话："}},[a("Input",{staticStyle:{width:"300px"},attrs:{"enter-button":"",placeholder:"请输入主播联系电话","element-id":"phone"},model:{value:t.formValidate.phone,callback:function(e){t.$set(t.formValidate,"phone",e)},expression:"formValidate.phone"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"直播时间："}},[a("DatePicker",{staticStyle:{width:"300px"},attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"请选择直播时间",value:t.timeVal},on:{"on-change":t.selectDate}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"排序："}},[a("Input",{staticStyle:{width:"300px"},attrs:{type:"number","enter-button":"",placeholder:"0","element-id":"phone"},model:{value:t.formValidate.sort,callback:function(e){t.$set(t.formValidate,"sort",e)},expression:"formValidate.sort"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"显示样式："}},[a("RadioGroup",{model:{value:t.formValidate.screen_type,callback:function(e){t.$set(t.formValidate,"screen_type",e)},expression:"formValidate.screen_type"}},t._l(t.screen_type,(function(e){return a("Radio",{attrs:{label:e.label}},[a("span",[t._v(t._s(e.value))])])})),1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"直播间类型："}},[a("RadioGroup",{model:{value:t.formValidate.type,callback:function(e){t.$set(t.formValidate,"type",e)},expression:"formValidate.type"}},t._l(t.type,(function(e){return a("Radio",{attrs:{label:e.label}},[a("span",[t._v(t._s(e.value))])])})),1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"直播间点赞："}},[a("RadioGroup",{model:{value:t.formValidate.close_like,callback:function(e){t.$set(t.formValidate,"close_like",e)},expression:"formValidate.close_like"}},t._l(t.close_like,(function(e){return a("Radio",{attrs:{label:e.label}},[a("span",[t._v(t._s(e.value))])])})),1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"直播卖货："}},[a("RadioGroup",{model:{value:t.formValidate.close_goods,callback:function(e){t.$set(t.formValidate,"close_goods",e)},expression:"formValidate.close_goods"}},t._l(t.close_goods,(function(e){return a("Radio",{attrs:{label:e.label}},[a("span",[t._v(t._s(e.value))])])})),1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"直播间评论："}},[a("RadioGroup",{model:{value:t.formValidate.close_comment,callback:function(e){t.$set(t.formValidate,"close_comment",e)},expression:"formValidate.close_comment"}},t._l(t.close_comment,(function(e){return a("Radio",{attrs:{label:e.label}},[a("span",[t._v(t._s(e.value))])])})),1)],1)],1)],1),a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",t._b({attrs:{span:"24"}},"Col",t.grid,!1),[a("Button",{staticStyle:{width:"19%","margin-left":"99px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formItem")}}},[t._v("提交")])],1)],1)],1)],1),a("div",[a("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":888},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1),a("Modal",{attrs:{title:"二维码","footer-hide":""},on:{"on-cancel":t.cancel},model:{value:t.modal3,callback:function(e){t.modal3=e},expression:"modal3"}},[a("div",{staticClass:"acea-row row-around"},[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"QRpic"},[a("img",{attrs:{src:"https://res.wx.qq.com/op_res/9rSix1dhHfK4rR049JL0PHJ7TpOvkuZ3mE0z7Ou_Etvjf-w1J_jVX0rZqeStLfwh"}})])]),t.spin?a("Spin",{attrs:{fix:""}}):t._e()],1)],1)},o=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),r=a("2f62"),s=a("b0e7"),n=a("47c5");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={name:"creat_live",components:{uploadPictures:s["a"]},computed:m(m({},Object(r["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},grid:{xl:10,lg:16,md:18,sm:24,xs:24},formValidate:{name:"",anchor_name:"",anchor_wechat:"",phone:"",screen_type:0,close_like:1,close_goods:1,close_comment:1,cover_img:"",share_img:"",sort:0,type:0,start_time:""},screen_type:[{value:"竖屏",label:0},{value:"横屏",label:1}],type:[{value:"手机直播",label:0}],close_like:[{value:"开启",label:1},{value:"关闭",label:0}],close_goods:[{value:"开启",label:1},{value:"关闭",label:0}],close_comment:[{value:"开启",label:1},{value:"关闭",label:0}],timeVal:"",modalPic:!1,isChoice:"单选",activeIndex:0,liveList:[],modal3:!1}},mounted:function(){this.getLive()},methods:{cancel:function(){this.modal3=!1},codeImg:function(){this.modal3=!0},anchorName:function(t){var e=this;this.liveList.filter((function(a,l){a.wechat===t&&(e.formValidate.anchor_name=a.name)}))},getLive:function(){var t=this,e={kerword:"",page:"",limit:""};Object(n["c"])(e).then((function(e){t.liveList=e.data.list})).catch((function(e){t.$Message.error(e.msg)}))},modalPicTap:function(t){this.activeIndex=t,this.modalPic=!0},selectDate:function(t){this.formValidate.start_time=t},getPic:function(t){var e=this;this.$nextTick((function(){0==e.activeIndex?e.formValidate.cover_img=t.att_dir:e.formValidate.share_img=t.att_dir,e.modalPic=!1}))},handleSubmit:function(t){var e=this;console.log("name",this.formValidate),Object(n["a"])(this.formValidate).then((function(t){console.log(t,"res")})).then((function(t){e.$Message.success("添加成功"),setTimeout((function(){e.$router.push({path:"/admin/marketing/live/live_room"})}),500)})).catch((function(t){e.$Message.error(t.msg)}))}}},u=d,p=(a("bc47"),a("2877")),f=Object(p["a"])(u,l,o,!1,null,"401427ee",null);e["default"]=f.exports},"91a5":function(t,e,a){},bc47:function(t,e,a){"use strict";a("91a5")}}]);