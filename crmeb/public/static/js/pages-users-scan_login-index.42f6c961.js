(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-scan_login-index"],{"34de":function(e,t,n){"use strict";n.r(t);var i=n("db7b"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"5b99":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"scan_login"},[n("v-uni-view",{staticClass:"head"},[n("v-uni-image",{attrs:{src:e.userInfo.avatar,mode:""}}),n("v-uni-view",{staticClass:"big"},[e._v(e._s(e.userInfo.nickname))]),n("v-uni-view",{staticClass:"small"},[e._v("点击授权登录您的客服工作台")]),n("v-uni-view",{staticClass:"sub_btn btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.scanLogin.apply(void 0,arguments)}}},[e._v("授权登录")]),n("v-uni-view",{staticClass:"out btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closePage.apply(void 0,arguments)}}},[e._v("取消")])],1)],1)},a=[]},"7b02":function(e,t,n){"use strict";n.r(t);var i=n("5b99"),o=n("34de");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("9cee");var c,u=n("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"0b0bebd6",null,!1,i["a"],c);t["default"]=r.exports},"9a95":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-0b0bebd6]{height:100%;background:#fff}.scan_login .head[data-v-0b0bebd6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:%?96?%}.scan_login .head uni-image[data-v-0b0bebd6]{width:%?178?%;height:%?178?%;border-radius:50%}.scan_login .head .big[data-v-0b0bebd6]{margin:%?20?% 0 %?10?%;font-size:%?32?%;color:#282828}.scan_login .head .small[data-v-0b0bebd6]{color:#9f9f9f;font-size:%?28?%}.scan_login .head .btn[data-v-0b0bebd6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?594?%;height:%?86?%;margin:%?28?% auto 0;font-size:%?30?%;color:#fff;border-radius:%?43?%;background:-webkit-linear-gradient(left,#3875ea,#1890fc);background:linear-gradient(90deg,#3875ea,#1890fc)}.scan_login .head .btn.out[data-v-0b0bebd6]{border:1px solid #3875ea;background:none;color:#3875ea}.scan_login .head .btn.sub_btn[data-v-0b0bebd6]{margin-top:%?96?%}body.?%PAGE?%[data-v-0b0bebd6]{background:#fff}",""]),e.exports=t},"9cee":function(e,t,n){"use strict";var i=n("aa4e"),o=n.n(i);o.a},aa4e:function(e,t,n){var i=n("9a95");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("3cf8ab62",i,!0,{sourceMap:!1,shadowMode:!1})},abc0:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.kefuLogin=a,t.record=c,t.speeChcraft=u,t.transferList=r,t.productCart=s,t.productHot=d,t.productVisit=f,t.serviceList=l,t.serviceTransfer=b,t.serviceInfo=v,t.serviceFeedBack=g,t.feedBackPost=h,t.codeStauts=p,t.kefuScanLogin=k;var o=i(n("0405"));function a(e){return o.default.post("/login",e,{noAuth:!0,kefu:!0})}function c(e){return o.default.get("/user/record",e,{noAuth:!0,kefu:!0})}function u(e){return o.default.get("/service/speechcraft",e,{noAuth:!0,kefu:!0})}function r(e){return o.default.get("/service/transfer_list",e,{noAuth:!0,kefu:!0})}function s(e,t){return o.default.get("/product/cart/"+e,t,{noAuth:!0,kefu:!0})}function d(e,t){return o.default.get("/product/hot/"+e,t,{noAuth:!0,kefu:!0})}function f(e,t){return o.default.get("/product/visit/"+e,t,{noAuth:!0,kefu:!0})}function l(e){return o.default.get("/service/list",e,{noAuth:!0,kefu:!0})}function b(e){return o.default.post("/service/transfer",e,{noAuth:!0,kefu:!0})}function v(e){return o.default.get("service/info",e,{noAuth:!0,kefu:!0})}function g(){return o.default.get("user/service/feedback")}function h(e){return o.default.post("user/service/feedback",e)}function p(e){return o.default.get("user/code",e)}function k(e){return o.default.post("user/code",e)}},db7b:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("57f0"),o=n("abc0"),a={name:"scan_login",data:function(){return{code:"",userInfo:{}}},onLoad:function(e){this.code=e.key,this.codeStauts(),this.getUserInfo()},methods:{codeStauts:function(){var e=this;(0,o.codeStauts)({code:this.code}).then((function(e){})).catch((function(t){e.openModel(t)}))},scanLogin:function(){var e=this;this.code?(0,o.kefuScanLogin)({code:this.code}).then((function(e){uni.showToast({title:e.msg,icon:"success"}),setTimeout((function(e){WeixinJSBridge.call("closeWindow")}),2e3)})).catch((function(t){e.openModel(t)})):this.openModel("没有登录的code，请重新扫码")},openModel:function(e){uni.showModal({title:"提示",content:e,success:function(e){e.confirm?WeixinJSBridge.call("closeWindow"):e.cancel}})},closePage:function(){WeixinJSBridge.call("closeWindow")},getUserInfo:function(){var e=this;(0,i.getUserInfo)().then((function(t){e.userInfo=t.data}))}}};t.default=a}).call(this,n("5a52")["default"])}}]);