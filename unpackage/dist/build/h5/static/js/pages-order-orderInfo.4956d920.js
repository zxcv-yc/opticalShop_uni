(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-orderInfo"],{"0bf5":function(t,e,i){"use strict";i.r(e);var a=i("ef42"),n=i("a46e");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("0c23");var r,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"493ac7db",null,!1,a["a"],r);e["default"]=u.exports},"0c23":function(t,e,i){"use strict";var a=i("83b5"),n=i.n(a);n.a},"123d":function(t,e,i){var a=i("f368");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0c26056e",a,!0,{sourceMap:!1,shadowMode:!1})},"161e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-btn[data-v-493ac7db]::after{border:none}.u-btn[data-v-493ac7db]{position:relative;border:0;display:inline-block;overflow:hidden;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-hairline-border[data-v-493ac7db]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:0}.u-bold-border[data-v-493ac7db]{border:1px solid #fff}.u-wave-ripple[data-v-493ac7db]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-493ac7db]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-493ac7db]{border-radius:%?100?%}.u-round-circle[data-v-493ac7db]::after{border-radius:%?100?%}.u-loading[data-v-493ac7db]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-493ac7db]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-493ac7db]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-493ac7db]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-493ac7db]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-493ac7db]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-493ac7db]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-493ac7db]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-493ac7db]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-493ac7db]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-493ac7db]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-493ac7db]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-493ac7db]{background:#18b566!important;color:#fff}.u-info-hover[data-v-493ac7db]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-493ac7db]{background:#f29100!important;color:#fff}.u-error-hover[data-v-493ac7db]{background:#dd6161!important;color:#fff}',""]),t.exports=e},2207:function(t,e,i){"use strict";i.r(e);var a=i("ff75"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"49fb":function(t,e,i){"use strict";i.r(e);var a=i("fccb"),n=i("2207");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9834");var r,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"005568e2",null,!1,a["a"],r);e["default"]=u.exports},"4a47":function(t,e,i){"use strict";i("c975"),i("d3b7"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},buttonStyle:function(){var t={};return"default"==this.type?this.disabled?(t.color="#c0c4cc",t.backgroundColor="#ffffff",t.borderColor="#e4e7ed"):(t.color=this.$u.color["contentColor"],t.backgroundColor="#ffffff",t.borderColor="#c0c4cc"):this.disabled?this.plain?(t.color=this.$u.color[this.type+"Disabled"],t.backgroundColor=this.$u.color[this.type+"Light"],t.borderColor=this.$u.color[this.type+"Disabled"]):(t.color="#ffffff",t.backgroundColor=this.$u.color[this.type+"Disabled"],t.borderColor=this.$u.color[this.type+"Disabled"]):this.plain?(t.color=this.$u.color[this.type],t.backgroundColor=this.$u.color[this.type+"Light"],t.borderColor=this.$u.color[this.type+"Disabled"]):(t.color="#ffffff",t.backgroundColor=this.$u.color[this.type],t.borderColor=this.$u.color[this.type]),Object.assign(t,this.customStyle)},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){!0!==this.loading&&!0!==this.disabled&&(this.ripple&&(this.waveActive=!1,this.$nextTick((function(){this.getWaveQuery(t)}))),this.$emit("click"))},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(i){var a=i[0];if(a.width&&a.width&&(a.targetWidth=a.height>a.width?a.height:a.width,a.targetWidth)){e.fields=a;var n="",o="";n=t.touches[0].clientX,o=t.touches[0].clientY,e.rippleTop=o-a.top-a.targetWidth/2,e.rippleLeft=n-a.left-a.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var i="";i=uni.createSelectorQuery().in(t),i.select(".u-btn").boundingClientRect(),i.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=a},"83b5":function(t,e,i){var a=i("161e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5a2d9574",a,!0,{sourceMap:!1,shadowMode:!1})},9834:function(t,e,i){"use strict";var a=i("123d"),n=i.n(a);n.a},a46e:function(t,e,i){"use strict";i.r(e);var a=i("4a47"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},bebf:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAEnUlEQVR4nO2cXWgcVRTHZxPbhLTQWDSxVbSKfVCrqLF+RXHM/Z97ZzZsSMUp0gchiMVWxAeV1hhrFVrFl/gqUrAPRRAEQYSivklBqhW0llasLWrrRzBQU6vVJvn7MBuz2Z3ZbLo7d/NwD5zX3B+/e3dy95wz63ku5g/29CxhEKwnMERgO4GROnMzlbqHPT1LFszieS0UWUtgE0W21cUhMkyRJwj41HpZbQBheCOB9yjyE4E/CUwTYJ35N4HT1Pp9GnN9zTJ8v50ir1DkOwITFJmqk2O6yPILgU8o0kvPy6XtRI4ivQS+b4CA9BQ5WRVkhkdkNYH9mbIA4wQeYhS1VgIotZ7ADxkDzEg5QJHVVU7Gcoq8ReCCBZ4Jaj04F0DrZRT5yIqMOKcosi1ViNZC4JxFnkPs67uy9HgqAr9ZBCCBE2kfGwIfWGY5Q2BjqZAnCfxjGYL0/c4KGVG0lPHD3CbLJIHnSnfkBesyACY9Rzgw0N0UFmCkVMjIohES/3dxQpwQJ8QJcUKcECfECXFCnBAnxAlxQpyQeoWIDDcFYnCwsh6idVcTWKYJbC89IVsInLd8OsaTKmbFYrftAtFfBB4vPSG9BH62DLGnXEbJBu2zzHKKWt81C1AodFDkXYunY4zG3JkqROt7GbcIbAnZR99vnwsRhldR5FcLi1+gyC5G0dJUIWHYRuB1xrXOrHlO05hVaTvTQ+ArZtcPmSCwh8asTJPxP4vvX0ZgL4GzmW0M8CVFbk2H8LwcjbmJwGsU+aaBYs4wbi08WnNP1fM8RtFyGjNEkQ+Lf6MRLP9S5DBFdhO4Yb4OYgwShm1UqptBcAuVCgj0X3Qa8yCDYA2BFTUtnrRJvt9Jra+l1n11sSgVMJ+/mUp1V/vIunDhwkUmwShqpTErqVT3RafWXY14gJHM1c0ShpczDNsWvnih0EGttxD4mMARAkfrSpHPKLIr9QJUjSW+pA1RZH9DWICD1HqUWq+bf/EoaqXIA8WFG38ZEjlHYDMLhY6aWIy5nfFFMYuL2VmK7EiaQJiFEMkTOJERQDlIeyrHzp0tVCqgyMmMWS4Q2Mv+/ksrIfL5a4qDdlkCzOQfFNGpQjZs6CLwORsz8DffqZ2i1qMkZy+N9LwcgTctyZjJQ4nDbp7nUeunLLP8SOC2WQBjVhE4ZhmCFLkjUQjwtWWWsgIRcDeBU9aFaL01QcYK2vnaX5rTVGp4FkIpof2hO1JkR4WQRVJk1gTGmiDkZSfECXFCnBAnxAlxQpwQJ8QJcUKcECekUUKMAZvzbffFxSkEuI/2B2ZIkacrhAwOdjZBxiRFnikVcjWBb62DGHN/uZAiz3HLLGUvIcbth7ctQxxJq7xTqeetsogcZRCsKd+V6xjXFm1ATDIIBpJkeF5xmimr3lByPps4qkFgI4HfM178PIHRas0qel4LtX6E8Tv62bIo9Q59/5JkkPid2U0UOZwJgMgYgZeoVHeajDksWj9M4Atm058Zp8juece7GEWtzOevoNZbKXKA8a8p1Lv4MWr9KkXWLqTxTc/LFVkeo8inDWCZJHCcIm9Q63XVuocuXLioKf4D6VzKClmHG48AAAAASUVORK5CYII="},ef42:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-"+t.type+"-plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-bold-border"],style:[t.buttonStyle],attrs:{id:"u-wave-btn",disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?i("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},f368:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-005568e2]{background-color:#ededed}.unpaid_bg_box[data-v-005568e2]{width:100%;height:%?220?%;background-size:100% 100%}.address_info[data-v-005568e2]{width:calc(100% - %?60?%)}.text-787878[data-v-005568e2]{color:#787878}.order_info[data-v-005568e2]{background-color:#fbfbfb;padding:%?20?% %?30?%}.input-placeholder[data-v-005568e2]{font-size:%?26?%;color:#787878;line-height:100%}.order_info_text_box[data-v-005568e2]{width:calc(100% - %?170?%);height:%?140?%}.text-F25050[data-v-005568e2]{color:#f25050}.bottom_bar[data-v-005568e2]{padding:%?20?% %?30?%;background-color:#fff;width:100%;position:fixed;bottom:0;left:0}body.?%PAGE?%[data-v-005568e2]{background-color:#ededed}",""]),t.exports=e},fccb:function(t,e,i){"use strict";var a={"u-button":i("0bf5").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"unpaid_bg_box text-fff",style:"background-image: url("+t.imgUrl+"images/order_info_unpaid_bg.png);"},[a("v-uni-view",{staticClass:"u-p-30 u-font-32"},[t._v("待支付")]),a("v-uni-view",{staticClass:"u-p-l-30 u-p-r-30 u-font-28"},[t._v("订单已经提交,请在01时20分钟内完成支付,超时订单将自动取消")])],1),a("v-uni-view",{staticClass:"bgc_fff u-p-30"},[a("v-uni-view",{staticClass:"jus-start"},[a("v-uni-view",{staticClass:" u-font-26",staticStyle:{color:"#9D9D9D"}},[t._v("订单编号:")]),a("v-uni-view",{staticClass:"text-content u-font-26 u-m-l-20"},[t._v("2029181028102101")])],1),a("v-uni-view",{staticClass:"jus-start u-m-t-20"},[a("v-uni-view",{staticClass:" u-font-26",staticStyle:{color:"#9D9D9D"}},[t._v("创建时间:")]),a("v-uni-view",{staticClass:"text-content u-font-26 u-m-l-20"},[t._v("2020-5-25 13:16:41")])],1)],1),a("v-uni-view",{staticClass:"bgc_fff u-p-30 jus-start u-m-t-20"},[a("v-uni-view",{},[a("v-uni-image",{staticStyle:{width:"60upx",height:"60upx"},attrs:{src:t.imgUrl+"images/address.png",mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"u-m-l-20 address_info"},[a("v-uni-view",{},[a("v-uni-text",{staticClass:"u-font-30 text-main"},[t._v("洛奇")]),a("v-uni-text",{staticClass:"u-font-26 inline_block u-m-l-20"},[t._v("17978372827")])],1),a("v-uni-view",{staticClass:"text-tips u-font-24"},[t._v("山东省青岛市城阳区惜福镇街道王沙路安民小区2-2-202")])],1)],1),a("v-uni-view",{staticClass:"bgc_fff  u-m-t-20"},[a("v-uni-view",{staticClass:"jus-start u-p-l-30 u-p-t-20 u-p-r-30 u-p-b-20"},[a("v-uni-image",{staticStyle:{width:"26upx",height:"26upx"},attrs:{src:i("bebf"),mode:"aspectFill"}}),a("v-uni-view",{staticClass:"u-font-24 u-m-l-20",staticStyle:{color:"#787878"}},[t._v("订单商品")])],1),a("v-uni-view",{staticClass:"order_info jus-spB "},[a("v-uni-image",{staticStyle:{width:"140upx",height:"140upx"},attrs:{src:t.imgUrl+"images/copy/cdjh.png",mode:"aspectFill"}}),a("v-uni-view",{staticClass:"order_info_text_box jus-spB-col"},[a("v-uni-view",{staticClass:"jus-spB"},[a("v-uni-view",{staticClass:"text-main u-font-26 u-line-2"},[t._v("日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径…")]),a("v-uni-view",{staticClass:"u-text-right",staticStyle:{width:"80upx"}},[a("v-uni-view",{staticClass:"text-main u-font-26"},[t._v("¥399.00")]),a("v-uni-view",{staticClass:"u-font-26 text-tips"},[t._v("x1")])],1)],1),a("v-uni-view",{staticClass:"jus-spB text-tips"},[a("v-uni-view",{staticClass:"u-font-26"},[t._v("规格:1副,无彩色")]),a("v-uni-view",{staticClass:"u-font-22"},[t._v("退款/退货")])],1)],1)],1),a("v-uni-view",{staticClass:"u-p-30 u-font-24 text-787878"},[a("v-uni-view",{staticClass:"jus-spB u-m-b-20"},[a("v-uni-view",{},[t._v("商品小计")]),a("v-uni-view",{},[t._v("¥399.00")])],1),a("v-uni-view",{staticClass:"jus-spB u-m-b-20"},[a("v-uni-view",{},[t._v("运费")]),a("v-uni-view",{},[t._v("¥0.00")])],1),a("v-uni-view",{staticClass:"jus-spB"},[a("v-uni-view",{},[t._v("实付款(含运费)")]),a("v-uni-view",{staticClass:"text-F25050"},[t._v("¥399.00")])],1)],1)],1),a("v-uni-view",{staticClass:"u-p-30 bgc_fff u-m-t-20"},[a("v-uni-view",{staticClass:"text-content u-p-b-30 u-border-bottom u-font-28"},[t._v("添加留言")]),a("v-uni-view",{staticClass:"u-p-t-30   u-font-26 jus-start"},[a("v-uni-view",{},[t._v("留言:")]),a("v-uni-view",{staticClass:"u-flex-1 u-m-l-30"},[a("v-uni-input",{staticClass:"u-font-26",attrs:{type:"text",value:"",placeholder:"请输入留言信息"}})],1)],1)],1),a("v-uni-view",{staticClass:"bottom_bar jus-end"},[a("v-uni-view",{},[a("u-button",{attrs:{shape:"circle",type:"error",ripple:!0,"custom-style":{width:"166upx",height:"58upx",backgroundColor:"#fff",color:"#999",fontSize:"28upx",border:"1upx solid #999"}}},[t._v("取消订单")])],1),a("v-uni-view",{staticClass:"u-m-l-30"},[a("u-button",{attrs:{shape:"circle",type:"error",ripple:!0,"custom-style":{width:"166upx",height:"58upx",backgroundColor:"#F25050",color:"#fff",fontSize:"28upx"}}},[t._v("确认付款")])],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},ff75:function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5ed1")),o={data:function(){return{imgUrl:n.default.imgUrl}},onLoad:function(){this.allRequest()},onShow:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{allRequest:function(){},aa:function(){uni.showLoading({title:"加载中"});var t={url:"",method:"post"},e={city_id:"370700"};n.default.httpTokenRequest(t,e).then((function(t){console.log(t.data),uni.hideLoading()}),(function(t){console.log(t),uni.hideLoading()}))}}};e.default=o}}]);