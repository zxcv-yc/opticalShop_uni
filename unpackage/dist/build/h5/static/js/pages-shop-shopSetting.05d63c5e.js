(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-shopSetting"],{"15ec":function(t,i,e){var n=e("9c1d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("41ee65c8",n,!0,{sourceMap:!1,shadowMode:!1})},"59fd":function(t,i,e){var n=e("a6ea");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("36da1394",n,!0,{sourceMap:!1,shadowMode:!1})},"5c56":function(t,i,e){"use strict";var n={"u-icon":e("f138").default,"u-toast":e("8aec").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"shop_setting_list u-p-t-20"},t._l(t.settingList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage(i.url)}}},[e("v-uni-view",{staticClass:"jus-start"},[e("v-uni-view",{},[e("v-uni-image",{staticStyle:{width:"34upx",height:"auto"},attrs:{src:i.img,mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"u-font-30 text-main u-m-l-20"},[t._v(t._s(i.name))])],1),e("v-uni-view",{},[e("u-icon",{attrs:{name:"arrow-right",size:"24",color:"#666"}})],1)],1)})),1),e("v-uni-view",[e("u-toast",{ref:"uToast"})],1)],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},7374:function(t,i,e){"use strict";var n=e("59fd"),a=e.n(n);a.a},"89fc":function(t,i,e){"use strict";e.r(i);var n=e("d171"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"8aec":function(t,i,e){"use strict";e.r(i);var n=e("b29b"),a=e("cd0a");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("7374");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"466c000c",null,!1,n["a"],r);i["default"]=u.exports},"9c1d":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"uni-page-body[data-v-30fb685e]{background-color:#ededed}body.?%PAGE?%[data-v-30fb685e]{background-color:#ededed}",""]),t.exports=i},a6ea:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-toast[data-v-466c000c]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0}.u-toast.u-show[data-v-466c000c]{opacity:1;z-index:9999999}.u-text[data-v-466c000c]{word-break:keep-all;white-space:nowrap;line-height:normal}.u-icon[data-v-466c000c]{margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-466c000c]{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-top[data-v-466c000c]{left:50%;top:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-bottom[data-v-466c000c]{left:50%;bottom:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-type-primary[data-v-466c000c]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-466c000c]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-466c000c]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-466c000c]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-466c000c]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-466c000c]{color:#fff;background-color:#585858}',""]),t.exports=i},b29b:function(t,i,e){"use strict";var n={"u-icon":e("f138").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.config.type,"u-position-"+t.config.position],style:{padding:t.isShow?"0 40rpx":0,zIndex:t.uZIndex}},[e("v-uni-view",{staticClass:"u-icon-wrap"},[t.config.icon?e("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.$u.color[t.config.type]}}):t._e()],1),e("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.config.title))])],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},b8a2:function(t,i,e){"use strict";e("c975"),e("a9e3"),e("b64b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center"}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.config.type)>=0&&this.config.icon){var t=this.$u.type2icon(this.config.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"-1"}},methods:{show:function(t){var i=this;this.config=Object.assign(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){i.isShow=!1,clearTimeout(i.timer),i.timer=null,i.timeEnd()}),this.config.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.config.url){if("/"!=this.config.url[0]&&(this.config.url="/"+this.config.url),Object.keys(this.config.params).length){var t="";/.*\/.*\?.*=.*/.test(this.config.url)?(t=this.$u.queryParams(this.config.params,!1),this.config.url=this.config.url+"&"+t):(t=this.$u.queryParams(this.config.params),this.config.url+=t)}this.config.isTab?uni.switchTab({url:this.config.url}):uni.navigateTo({url:this.config.url})}}}};i.default=n},b9e2:function(t,i,e){"use strict";var n=e("15ec"),a=e.n(n);a.a},bfff:function(t,i,e){"use strict";e.r(i);var n=e("5c56"),a=e("89fc");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("b9e2");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"30fb685e",null,!1,n["a"],r);i["default"]=u.exports},cd0a:function(t,i,e){"use strict";e.r(i);var n=e("b8a2"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},d171:function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("5ed1")),o={data:function(){return{imgUrl:a.default.imgUrl,settingList:[{img:a.default.imgUrl+"images/shopSetting3.png",name:"基本设置",url:"null"},{img:a.default.imgUrl+"images/shopSetting4.png",name:"商品管理",url:"null"},{img:a.default.imgUrl+"images/shopSetting3.png",name:"基本设置",url:"null"},{img:a.default.imgUrl+"images/shopSetting5.png",name:"分销管理",url:"null"},{img:a.default.imgUrl+"images/shopSetting7.png",name:"门槛设置",url:"./thresholdSetting"},{img:a.default.imgUrl+"images/shopSetting8.png",name:"营销活动",url:"null"},{img:a.default.imgUrl+"images/shopSetting6.png",name:"评价管理",url:"null"},{img:a.default.imgUrl+"images/shopSetting2.png",name:"文案管理",url:"null"},{img:a.default.imgUrl+"images/shopSetting1.png",name:"SEO设置",url:"null"}]}},onLoad:function(){this.allRequest()},onShow:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{allRequest:function(){},aa:function(){uni.showLoading({title:"加载中"});var t={url:"",method:"post"},i={city_id:"370700"};a.default.httpTokenRequest(t,i).then((function(t){console.log(t.data),uni.hideLoading()}),(function(t){console.log(t),uni.hideLoading()}))},showToast:function(t,i,e,n){this.$refs.uToast.show({title:t,type:i,url:e,param:n})},goPage:function(t){"null"==t?this.showToast("开发中","info"):uni.navigateTo({url:t})}}};i.default=o}}]);