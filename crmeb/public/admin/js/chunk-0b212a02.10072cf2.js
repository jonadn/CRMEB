(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b212a02"],{4163:function(e,t,a){},"453a":function(e,t,a){"use strict";a("fb3e")},"669a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"i-layout-page-header"},[e._m(0),a("div",[a("Tabs",{on:{"on-click":e.onClickTab},model:{value:e.artFrom.type,callback:function(t){e.$set(e.artFrom,"type",t)},expression:"artFrom.type"}},[a("TabPane",{attrs:{label:e.headeNum.show.name+"("+e.headeNum.show.num+")",name:"0"}}),a("TabPane",{attrs:{label:e.headeNum.hide.name+"("+e.headeNum.hide.num+")",name:"1"}}),a("TabPane",{attrs:{label:e.headeNum.recycle.name+"("+e.headeNum.recycle.num+")",name:"2"}})],1)],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"artFrom",attrs:{model:e.artFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",e._b({staticClass:"mr"},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"提货点搜索：","label-for":"store_name"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入提货点名称,电话"},on:{"on-search":e.userSearchs},model:{value:e.artFrom.keywords,callback:function(t){e.$set(e.artFrom,"keywords",t)},expression:"artFrom.keywords"}})],1)],1)],1)],1),a("Row",{directives:[{name:"auth",rawName:"v-auth",value:["setting-merchant-system_store-save"],expression:"['setting-merchant-system_store-save']"}],attrs:{type:"flex"}},[a("Col",e._b({},"Col",e.grid,!1),[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-merchant-system_store-save"],expression:"['setting-merchant-system_store-save']"}],attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加提货点")])],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:e.columns,data:e.storeLists,loading:e.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"image",fn:function(e){var t=e.row;e.index;return[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"row.image"}]})])]}},{key:"is_show",fn:function(t){var r=t.row;t.index;return[a("i-switch",{attrs:{value:r.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(t){return e.onchangeIsShow(r.id,r.is_show)}},model:{value:r.is_show,callback:function(t){e.$set(r,"is_show",t)},expression:"row.is_show"}},[e._v(">\n                        "),a("span",{attrs:{slot:"open"},slot:"open"},[e._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("隐藏")])])]}},{key:"action",fn:function(t){var r=t.row,o=t.index;return[a("a",{on:{click:function(t){return e.edit(r.id)}}},[e._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),0==r.is_del?a("a",{on:{click:function(t){return e.del(r,"删除提货点",o)}}},[e._v("删除")]):a("a",{on:{click:function(t){return e.del(r,"恢复提货点",o)}}},[e._v("恢复")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:e.total,current:e.artFrom.page,"show-elevator":"","show-total":"","page-size":e.artFrom.limit},on:{"on-change":e.pageChange}})],1)],1),a("system-store",{ref:"template"})],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[e._v("提货点")])])}],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("2f62"),n=a("90e7"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:e.formItem.id?"编辑提货点":"添加提货点","z-index":1,width:"700"},on:{"on-cancel":e.cancel},model:{value:e.isTemplate,callback:function(t){e.isTemplate=t},expression:"isTemplate"}},[a("div",{staticClass:"article-manager"},[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formItem",attrs:{model:e.formItem,"label-width":120,"label-position":"right",rules:e.ruleValidate},nativeOn:{submit:function(e){e.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"提货点名称：",prop:"name","label-for":"name"}},[a("Input",{attrs:{placeholder:"请输入提货点名称"},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"提货点简介：","label-for":"introduction"}},[a("Input",{attrs:{placeholder:"请输入提货点简介"},model:{value:e.formItem.introduction,callback:function(t){e.$set(e.formItem,"introduction",t)},expression:"formItem.introduction"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"提货点手机号：","label-for":"phone",prop:"phone"}},[a("Input",{attrs:{placeholder:"请输入提货点手机号"},model:{value:e.formItem.phone,callback:function(t){e.$set(e.formItem,"phone",t)},expression:"formItem.phone"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"提货点地址：","label-for":"address",prop:"address"}},[a("Cascader",{attrs:{data:e.addresData,value:e.formItem.address},on:{"on-change":e.handleChange},model:{value:e.formItem.address,callback:function(t){e.$set(e.formItem,"address",t)},expression:"formItem.address"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"详细地址：","label-for":"detailed_address",prop:"detailed_address"}},[a("Input",{attrs:{placeholder:"请输入详细地址"},model:{value:e.formItem.detailed_address,callback:function(t){e.$set(e.formItem,"detailed_address",t)},expression:"formItem.detailed_address"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"提货点营业：","label-for":"day_time"}},[a("TimePicker",{attrs:{type:"timerange",format:"HH:mm:ss",value:e.formItem.day_time,placement:"bottom-end",placeholder:"请选择营业时间"},on:{"on-change":e.onchangeTime},model:{value:e.formItem.day_time,callback:function(t){e.$set(e.formItem,"day_time",t)},expression:"formItem.day_time"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"提货点logo：",prop:"image"}},[a("div",{staticClass:"picBox",on:{click:function(t){return e.modalPicTap("单选","logo")}}},[e.formItem.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.formItem.image,expression:"formItem.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"提货点大图：",prop:"image"}},[a("div",{staticClass:"picBox",on:{click:function(t){return e.modalPicTap("单选","oblong")}}},[e.formItem.oblong_image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.formItem.oblong_image,expression:"formItem.oblong_image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"经纬度：","label-for":"status2",prop:"latlng"}},[a("Tooltip",[a("Input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"查找位置",placeholder:"请查找位置"},on:{"on-search":e.onSearch},model:{value:e.formItem.latlng,callback:function(t){e.$set(e.formItem,"latlng",t)},expression:"formItem.latlng"}}),a("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n                                            请点击查找位置选择位置\n                                        ")])],1)],1)],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",e._b({},"Col",e.grid,!1),[a("Button",{staticClass:"ml20",attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formItem")}}},[e._v(e._s(e.formItem.id?"修改":"提交"))])],1)],1),e.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1),a("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":888},model:{value:e.modalPic,callback:function(t){e.modalPic=t},expression:"modalPic"}},[e.modalPic?a("uploadPictures",{attrs:{isChoice:e.isChoice,gridBtn:e.gridBtn,gridPic:e.gridPic},on:{getPic:e.getPic}}):e._e()],1),a("Modal",{staticClass:"mapBox",attrs:{scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":1},model:{value:e.modalMap,callback:function(t){e.modalMap=t},expression:"modalMap"}},[a("iframe",{attrs:{id:"mapPage",width:"100%",height:"100%",frameborder:"0",src:e.keyUrl}})])],1)])],1)},m=[],c=(a("7f7f"),a("96cf"),a("3b8d")),d=a("2e8e"),u=a("b0e7"),f={name:"systemStore",components:{uploadPictures:u["a"]},props:{},data:function(){var e=this,t=function(e,t,a){if(!t)return a(new Error("请填写手机号"));/^1[3456789]\d{9}$/.test(t)?a():a(new Error("手机号格式不正确!"))},a=function(t,a,r){e.formItem.image?r():r(new Error("请上传提货点logo"))};return{isTemplate:!1,spinShow:!1,modalMap:!1,addresData:[],formItem:{name:"",introduction:"",phone:"",address:[],address2:[],detailed_address:"",valid_time:[],day_time:[],latlng:"",id:0},ruleValidate:{name:[{required:!0,message:"请输入提货点名称",trigger:"blur"}],mail:[{required:!0,message:"Mailbox cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"}],address:[{required:!0,message:"请选择提货点地址",type:"array",trigger:"change"}],valid_time:[{required:!0,type:"array",message:"请选择核销时效",trigger:"change",fields:{0:{type:"date",required:!0,message:"请选择年度范围"},1:{type:"date",required:!0,message:"请选择年度范围"}}}],day_time:[{required:!0,type:"array",message:"请选择提货点营业时间",trigger:"change"}],phone:[{required:!0,validator:t,trigger:"blur"}],detailed_address:[{required:!0,message:"请输入详细地址",trigger:"blur"}],image:[{required:!0,validator:a,trigger:"change"}],latlng:[{required:!0,message:"请选择经纬度",trigger:"blur"}]},keyUrl:"",grid:{xl:20,lg:20,md:20,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},modalPic:!1,isChoice:"单选"}},created:function(){var e=this;d["a"].map((function(e){e.value=e.label,e.children&&e.children.length&&e.children.map((function(e){e.value=e.label,e.children&&e.children.length&&e.children.map((function(e){e.value=e.label}))}))})),setTimeout((function(){e.addresData=d["a"]}),10),this.getKey()},computed:{},mounted:function(){window.addEventListener("message",(function(e){var t=e.data;t&&"locationPicker"===t.module&&window.parent.selectAdderss(t)}),!1),window.selectAdderss=this.selectAdderss},methods:{cancel:function(){this.$refs["formItem"].resetFields(),this.clearFrom()},clearFrom:function(){this.formItem.introduction="",this.formItem.day_time=[],this.formItem.oblong_image="",this.formItem.id=0},selectAdderss:function(e){this.formItem.latlng=e.latlng.lat+","+e.latlng.lng,this.modalMap=!1},getKey:function(){var e=this;Object(n["C"])().then(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=a.data.key,e.keyUrl="https://apis.map.qq.com/tools/locpicker?type=1&key=".concat(r,"&referer=myapp");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},getInfo:function(e){var t=this;t.formItem.id=e,t.spinShow=!0,Object(n["fb"])(e).then((function(e){var a=e.data.info||null;t.formItem=a||t.formItem,t.formItem.address=a.address2,t.spinShow=!1})).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},modalPicTap:function(e,t){this.modalPic=!0,this.picTit=t},getPic:function(e){switch(this.picTit){case"logo":this.formItem.image=e.att_dir;break;case"oblong":this.formItem.oblong_image=e.att_dir;break}this.modalPic=!1},handleChange:function(e,t){this.formItem.address=t.map((function(e){return e.label}))},onchangeDate:function(e){this.formItem.valid_time=e},onchangeTime:function(e){this.formItem.day_time=e},onSearch:function(){this.modalMap=!0},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(a){if(!a)return!1;Object(n["cb"])(t.formItem).then(function(){var a=Object(c["a"])(regeneratorRuntime.mark((function a(r){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$Message.success(r.msg),t.isTemplate=!1,t.$parent.getList(),t.$refs[e].resetFields(),t.clearFrom();case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))}))}}},h=f,p=(a("dc69"),a("2877")),g=Object(p["a"])(h,l,m,!1,null,"35991853",null),b=g.exports;function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w={name:"setting_store",components:{systemStore:b},computed:y(y(y({},Object(s["e"])("media",["isMobile"])),Object(s["e"])("userLevel",["categoryId"])),{},{labelWidth:function(){return this.isMobile?void 0:85},labelPosition:function(){return this.isMobile?"top":"left"}}),data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},headeNum:{show:{name:"",num:0},hide:{name:"",num:0},recycle:{name:"",num:0}},artFrom:{page:1,limit:15,type:"0",keywords:""},loading:!1,columns:[{title:"ID",key:"id",width:80,sortable:!0},{title:"提货点图片",slot:"image",minWidth:100},{title:"提货点名称",key:"name",minWidth:100},{title:"提货点电话",key:"phone",minWidth:100},{title:"地址",key:"detailed_address",minWidth:100},{title:"营业时间",key:"day_time",minWidth:100},{title:"是否显示",slot:"is_show",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:120}],storeLists:[],total:0}},mounted:function(){this.storeHeade(),this.getList()},methods:{storeHeade:function(){var e=this,t=this;Object(n["eb"])().then((function(e){t.headeNum=e.data.count})).catch((function(t){e.$Message.error(t.msg)}))},getList:function(){var e=this,t=this;t.loading=!0,Object(n["F"])(t.artFrom).then((function(e){t.loading=!1,t.storeLists=e.data.list,t.total=e.data.count})).catch((function(t){e.$Message.error(t.msg)}))},userSearchs:function(){this.artFrom.page=1,this.getList()},onClickTab:function(){this.artFrom.page=1,this.artFrom.keywords="",this.getList()},pageChange:function(e){this.artFrom.page=e,this.getList()},del:function(e,t,a){var r=this,o={title:t,num:a,url:"merchant/store/del/".concat(e.id),method:"DELETE",ids:""};this.$modalSure(o).then((function(e){r.$Message.success(e.msg),r.storeLists.splice(a,1),r.storeHeade()})).catch((function(e){r.$Message.error(e.msg)}))},add:function(){this.$refs.template.isTemplate=!0},onchangeIsShow:function(e,t){var a=this;Object(n["gb"])(e,t).then((function(e){a.$Message.success(e.msg),a.getList(),a.storeHeade()}))},edit:function(e){this.$refs.template.isTemplate=!0,this.$refs.template.getInfo(e)}}},I=w,_=(a("453a"),Object(p["a"])(I,r,o,!1,null,"3b885990",null));t["default"]=_.exports},dc69:function(e,t,a){"use strict";a("4163")},fb3e:function(e,t,a){}}]);