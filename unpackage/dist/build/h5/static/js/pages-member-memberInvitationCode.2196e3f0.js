(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-memberInvitationCode"],{"0b08":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.scroll-view_H[data-v-c57ccecc]{white-space:nowrap;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.scroll-view_H .scroll-view-item_H[data-v-c57ccecc]{display:inline-block;width:30%;height:100px}.scroll-view_H .uni-bg-red[data-v-c57ccecc]{background:red}.scroll-view_H .uni-bg-green[data-v-c57ccecc]{background:green}.scroll-view_H .uni-bg-blue[data-v-c57ccecc]{background:#00f}',""]),t.exports=e},"11b3":function(t,e,i){"use strict";i.r(e);var n=i("6487"),a=i("fa97");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("a579"),i("c0e2");var c,s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"c57ccecc",null,!1,n["a"],c);e["default"]=o.exports},"1d3e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-c57ccecc]{background-color:#ededed}.top_box[data-v-c57ccecc]{width:100%;height:%?280?%}.scroll_item[data-v-c57ccecc]{width:%?636?%;height:%?418?%;background-size:100% 100%;display:inline-block;-webkit-transition:.5s;transition:.5s}.scroll_item uni-image[data-v-c57ccecc]{width:%?216?%;height:%?216?%}.scroll_item_samll[data-v-c57ccecc]{width:%?471?%;height:%?310?%\n\t/* margin-top: 54upx; */}.scroll_item_samll uni-image[data-v-c57ccecc]{-webkit-transition:.5s;transition:.5s;width:%?150?%!important;height:%?150?%!important}.swiper_box[data-v-c57ccecc]{margin-top:%?-160?%}.guarantee_box[data-v-c57ccecc]{padding:%?30?% %?50?%}.guarantee_item[data-v-c57ccecc]{width:25%}body.?%PAGE?%[data-v-c57ccecc]{background-color:#ededed}",""]),t.exports=e},3096:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pos_ab[data-v-14627986]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:201}",""]),t.exports=e},"31f9":function(t,e,i){"use strict";i("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{bannerList:{type:Array,default:function(){return[]}},swiperConfig:{type:Object,default:function(){return{indicatorDots:!0,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",autoplay:!1,interval:3e3,duration:300,circular:!0,previousMargin:"58rpx",nextMargin:"58rpx"}}},scaleX:{type:String,default:(634/550).toFixed(4)},scaleY:{type:String,default:(378/328).toFixed(4)}},computed:{listLen:function(){return this.bannerList.length}},data:function(){return{curIndex:0,descIndex:0,isDescAnimating:!1}},methods:{swiperChange:function(t){var e=this;this.curIndex=t.mp.detail.current,this.isDescAnimating=!0;var i=setTimeout((function(){e.descIndex=t.mp.detail.current,clearTimeout(i)}),150)},animationfinish:function(t){this.isDescAnimating=!1},getBannerDetail:function(t){uni.showLoading({title:"将前往详情页面",duration:2e3,mask:!0})}}};e.default=n},3883:function(t,e,i){"use strict";var n=i("be58"),a=i.n(n);a.a},6487:function(t,e,i){"use strict";var n={"u-icon":i("f138").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"top_box",style:"background-image: url("+t.imgUrl+"images/member2.png);"},[i("v-uni-view",{staticClass:"jus-spB navBar"},[i("v-uni-view",{staticStyle:{width:"110upx"}},[i("u-icon",{attrs:{name:"arrow-left",size:"32",color:"#fff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-text-center u-font-34 text-bold",staticStyle:{color:"#FBFBFB"}},[t._v("会员邀请码")]),i("v-uni-view",{staticStyle:{width:"110upx"}})],1)],1),i("v-uni-view",{staticClass:"swiper_box"},[i("special-banner",{attrs:{"banner-list":t.bannerList,"swiper-config":t.swiperConfig}})],1),i("v-uni-view",{staticClass:"jus-start u-p-30"},[i("v-uni-view",{staticClass:"u-m-r-15",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sdsd.apply(void 0,arguments)}}},[t._v("会员保障")]),i("v-uni-view",{},[i("v-uni-image",{staticStyle:{width:"20upx",height:"20upx"},attrs:{src:t.imgUrl+"images/member11.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"guarantee_box jus-start flex_warp"},t._l(t.guaranteeList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"guarantee_item u-m-b-30"},[i("v-uni-image",{staticStyle:{width:"108upx",height:"108upx",margin:"0 auto"},attrs:{src:e.img,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"u-font-20 u-text-center u-p-t-10"},[t._v(t._s(e.name))])],1)})),1)],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},"6da8":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner-container"},[i("v-uni-swiper",{style:{width:"100vw",height:"410rpx"},attrs:{"indicator-dots":t.swiperConfig.indicatorDots,"indicator-color":t.swiperConfig.indicatorColor,"indicator-active-color":t.swiperConfig.indicatorActiveColor,autoplay:t.swiperConfig.autoplay,interval:t.swiperConfig.interval,duration:t.swiperConfig.duration,circular:t.swiperConfig.circular,"previous-margin":t.swiperConfig.previousMargin,"next-margin":t.swiperConfig.nextMargin},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.bannerList,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("div",{staticClass:"image-container",class:[0===t.curIndex?n===t.listLen-1?"item-left":1===n?"item-right":"item-center":t.curIndex===t.listLen-1?0===n?"item-right":n===t.listLen-2?"item-left":"item-center":n===t.curIndex-1?"item-left":n===t.curIndex+1?"item-right":"item-center"]},[i("v-uni-image",{staticClass:"slide-image",style:{transform:t.curIndex===n?"scale("+t.scaleX+","+t.scaleY+")":"scale(1,1)",transitionDuration:".3s",transitionTimingFunction:"ease"},attrs:{src:e.picture},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getBannerDetail(n)}}}),i("v-uni-view",{staticClass:"pos_ab jus-spB-col"},[i("v-uni-view",{staticClass:"jus-spB-col",staticStyle:{height:"100%"}},[i("v-uni-view",{staticClass:"u-font-32 text-fff u-p-t-60 u-p-l-60 u-text-left ",staticStyle:{width:"100%"}},[t._v(t._s(e.memberName))]),i("v-uni-view",{staticClass:"jus-center",staticStyle:{width:"100%"}},[i("v-uni-image",{staticStyle:{width:"200upx",height:"200upx"},attrs:{src:e.qrimg,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"u-font-20 text-fff u-p-30 u-text-center",staticStyle:{width:"100%"}},[t._v("使用微信扫一扫二维码 即刻成为会员")])],1)],1)],1)])})),1)],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},"6e14":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.banner-container[data-v-14627986]{width:100vw;height:%?420?%}.banner-container .image-container[data-v-14627986]{box-sizing:border-box;position:relative;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.banner-container .image-container .slide-image[data-v-14627986]{width:%?550?%;height:%?328?%;z-index:200}.banner-container .item-left[data-v-14627986]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:%?56?% %?26?% 0 0}.banner-container .item-right[data-v-14627986]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?56?% 0 0 %?26?%}.banner-container .item-center[data-v-14627986]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?56?% 0 0 0}.banner-container .desc-wrap[data-v-14627986]{box-sizing:border-box;width:100%;height:%?98?%;padding:%?24?% %?66?% 0}.banner-container .desc-wrap .title[data-v-14627986]{width:100%;height:%?42?%;line-height:%?42?%;color:#222;font-size:%?30?%;font-family:PingFangTC-Regular;font-weight:600;text-align:left}.banner-container .desc-wrap .desc[data-v-14627986]{margin-top:%?4?%;width:100%;height:%?34?%;line-height:%?34?%;color:#999;font-size:%?24?%;font-family:PingFangTC-Regular;text-align:left}@keyframes descAnimation-data-v-14627986{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}100%{opacity:1}}@-webkit-keyframes descAnimation-data-v-14627986{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}100%{opacity:1}}.banner-container .hideAndShowDesc[data-v-14627986]{animation:descAnimation-data-v-14627986 .3s ease 1;-webkit-animation:descAnimation-data-v-14627986 .3s ease 1}',""]),t.exports=e},"88de":function(t,e,i){"use strict";var n=i("93ad"),a=i.n(n);a.a},"93ad":function(t,e,i){var n=i("3096");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("67c9b582",n,!0,{sourceMap:!1,shadowMode:!1})},a4af:function(t,e,i){var n=i("0b08");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("9ec15b34",n,!0,{sourceMap:!1,shadowMode:!1})},a579:function(t,e,i){"use strict";var n=i("e470"),a=i.n(n);a.a},be58:function(t,e,i){var n=i("6e14");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("47c5576a",n,!0,{sourceMap:!1,shadowMode:!1})},c0e2:function(t,e,i){"use strict";var n=i("a4af"),a=i.n(n);a.a},c207:function(t,e,i){"use strict";i.r(e);var n=i("6da8"),a=i("e9d1");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("88de"),i("3883");var c,s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"14627986",null,!1,n["a"],c);e["default"]=o.exports},e470:function(t,e,i){var n=i("1d3e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6df67dc7",n,!0,{sourceMap:!1,shadowMode:!1})},e9d1:function(t,e,i){"use strict";i.r(e);var n=i("31f9"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},f420:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5ed1")),r=n(i("c207")),c={components:{specialBanner:r.default},data:function(){return{imgUrl:a.default.imgUrl,socrll_l:0,isRoll:0,bannerList:[{picture:a.default.imgUrl+"images/member23.png",title:"七夕将至：时光足够久，韧性也能炖出味",description:"一万年太久，就现在，给你爱",memberName:"普通会员",qrimg:a.default.imgUrl+"images/qrcode.png",path:""},{picture:a.default.imgUrl+"images/member22.png",title:"新菜上架：无边海洋，找到顺眼的那尾鱼",description:"花中樱，鱼乃鲷花中樱，鱼乃鲷",qrimg:a.default.imgUrl+"images/qrcode.png",memberName:"白银会员",path:""},{picture:a.default.imgUrl+"images/member1.png",title:"在湘西的烟火气里，发现苗族少女的神明",description:"取材自湘西苗族传统的烟熏文化",qrimg:a.default.imgUrl+"images/qrcode.png",memberName:"黄金会员",path:""},{picture:a.default.imgUrl+"images/member20.png",title:"一人宴福利降临，陪伴独自行走的丰盛旅程",description:"在自己的小世界里，日日好日，夜夜好清宵",qrimg:a.default.imgUrl+"images/qrcode.png",memberName:"钻石会员",path:""}],swiperConfig:{indicatorDots:!1,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",autoplay:!1,interval:3e3,duration:300,circular:!1,previousMargin:"58rpx",nextMargin:"58rpx"},guaranteeList:[{img:a.default.imgUrl+"images/member5.png",name:"永久制"},{img:a.default.imgUrl+"images/member4.png",name:"购物折扣"},{img:a.default.imgUrl+"images/member6.png",name:"积分折扣"},{img:a.default.imgUrl+"images/member9.png",name:"专属客服"},{img:a.default.imgUrl+"images/member10.png",name:"正品保障"},{img:a.default.imgUrl+"images/member3.png",name:"定期福利"},{img:a.default.imgUrl+"images/member7.png",name:"特惠价格"},{img:a.default.imgUrl+"images/member8.png",name:"专享权益"}],scrollLeft:0}},onLoad:function(){this.allRequest()},onShow:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{allRequest:function(){},aa:function(){uni.showLoading({title:"加载中"});var t={url:"",method:"post"},e={city_id:"370700"};a.default.httpTokenRequest(t,e).then((function(t){console.log(t.data),uni.hideLoading()}),(function(t){console.log(t),uni.hideLoading()}))},goBack:function(){uni.navigateBack({delta:1})}}};e.default=c},fa97:function(t,e,i){"use strict";i.r(e);var n=i("f420"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a}}]);