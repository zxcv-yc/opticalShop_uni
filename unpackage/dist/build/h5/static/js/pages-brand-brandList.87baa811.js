(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-brand-brandList"],{"00a9":function(t,e,i){"use strict";var n=i("8e6e"),a=i.n(n);a.a},"08fc":function(t,e,i){"use strict";var n={"u-icon":i("f138").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-search"},[i("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:"search",color:"#909399"}})],1),i("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?i("v-uni-view",{staticClass:"u-close-wrap",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close",size:16,color:"#fff"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}})],1):t._e()],1),i("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"133b":function(t,e,i){var n=i("712f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2f589b23",n,!0,{sourceMap:!1,shadowMode:!1})},"232a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".list-cell[data-v-4cca89b0]{padding:%?20?%}.scroll_good_item[data-v-4cca89b0]{width:%?110?%;display:inline-block}",""]),t.exports=e},"2cec":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){this.keyword=""},search:function(){this.$emit("search",this.keyword),uni.hideKeyboard()},custom:function(){this.$emit("custom",this.keyword),uni.hideKeyboard()},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){this.focused=!1,this.show=!1,this.$emit("blur",this.keyword)}}};e.default=n},3489:function(t,e,i){"use strict";var n=i("ee27");i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("c964")),o={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:Number,default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current}},watch:{list:function(t,e){var i=this;this.$nextTick((function(){i.init()}))},current:{immediate:!0,handler:function(t){var e=this;this.$nextTick((function(){e.currentIndex=t,e.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var i={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1"};return e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),e==t.currentIndex?(i.color=t.activeColor,i=Object.assign(i,t.activeItemStyle)):i.color=t.inactiveColor,i}}},methods:{init:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:i=e.sent,t.parentLeft=i.left,t.componentWidth=i.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this.tabQueryInfo[this.currentIndex];if(t){var e=t.width,i=t.left-this.parentLeft,n=i-(this.componentWidth-e)/2;this.scrollLeft=n<0?0:n;var a=t.left+t.width/2-this.parentLeft;this.scrollBarLeft=a-uni.upx2px(this.barWidth)/2}}},mounted:function(){this.init()}};e.default=o},"386f":function(t,e,i){"use strict";var n=i("4ef3"),a=i.n(n);a.a},"3cf5":function(t,e,i){var n=i("e688");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("c6b55ba2",n,!0,{sourceMap:!1,shadowMode:!1})},4551:function(t,e,i){"use strict";i.r(e);var n=i("c03d"),a=i("4883");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("55e8");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"40430088",null,!1,n["a"],r);e["default"]=s.exports},"46f0":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-index-anchor",props:{useSlot:{type:Boolean,default:!1},index:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{active:!1,wrapperStyle:{},anchorStyle:{}}},inject:["UIndexList"],mounted:function(){this.UIndexList.children.push(this),this.UIndexList.updateData()},computed:{customAnchorStyle:function(){return Object.assign(this.anchorStyle,this.customStyle)}}};e.default=n},4883:function(t,e,i){"use strict";i.r(e);var n=i("caf6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"4ef3":function(t,e,i){var n=i("232a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f7dd1be8",n,!0,{sourceMap:!1,shadowMode:!1})},"55e8":function(t,e,i){"use strict";var n=i("133b"),a=i.n(n);a.a},"59fd":function(t,e,i){var n=i("a6ea");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("36da1394",n,!0,{sourceMap:!1,shadowMode:!1})},"5b78":function(t,e,i){"use strict";var n=i("ef22"),a=i.n(n);a.a},"5bd2":function(t,e,i){"use strict";i.r(e);var n=i("a910"),a=i("da5c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("8243");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"7184a370",null,!1,n["a"],r);e["default"]=s.exports},"664c":function(t,e,i){"use strict";i.r(e);var n=i("3489"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},7022:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-index-anchor[data-v-7184a370]{box-sizing:border-box;padding:%?14?% %?24?%;color:#606266;width:100%;font-weight:500;font-size:%?28?%;line-height:1.2;background-color:#fafafa}.u-index-anchor--active[data-v-7184a370]{right:0;left:0;color:#2979ff;background-color:#fff}',""]),t.exports=e},"712f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-index-bar[data-v-40430088]{position:relative}.u-index-bar__sidebar[data-v-40430088]{position:fixed;top:50%;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;user-select:none;z-index:99}.u-index-bar__index[data-v-40430088]{font-weight:500;padding:%?8?% %?18?%;font-size:%?22?%;line-height:1}.u-indexed-list-alert[data-v-40430088]{position:fixed;width:%?120?%;height:%?120?%;right:%?90?%;top:50%;margin-top:%?-60?%;border-radius:%?24?%;font-size:%?50?%;color:#fff;background-color:rgba(0,0,0,.65);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0;z-index:9999999}.u-indexed-list-alert uni-text[data-v-40430088]{line-height:%?50?%}',""]),t.exports=e},"716a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-27e0eaa2],\nuni-scroll-view[data-v-27e0eaa2]{box-sizing:border-box}[data-v-27e0eaa2]::-webkit-scrollbar,[data-v-27e0eaa2]::-webkit-scrollbar,[data-v-27e0eaa2]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-27e0eaa2]{position:relative}uni-scroll-view[data-v-27e0eaa2] ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-27e0eaa2]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-27e0eaa2]{position:relative;display:inline-block;text-align:center;-webkit-transition-property:background-color,color;transition-property:background-color,color}.u-tab-bar[data-v-27e0eaa2]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-27e0eaa2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}',""]),t.exports=e},7374:function(t,e,i){"use strict";var n=i("59fd"),a=i.n(n);a.a},8243:function(t,e,i){"use strict";var n=i("a3bf"),a=i.n(n);a.a},8803:function(t,e,i){"use strict";i.r(e);var n=i("08fc"),a=i("ea8f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5b78");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1921b593",null,!1,n["a"],r);e["default"]=s.exports},"8aec":function(t,e,i){"use strict";i.r(e);var n=i("b29b"),a=i("cd0a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("7374");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"466c000c",null,!1,n["a"],r);e["default"]=s.exports},"8e6e":function(t,e,i){var n=i("716a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f281ef40",n,!0,{sourceMap:!1,shadowMode:!1})},"951e":function(t,e,i){"use strict";var n=i("3cf5"),a=i.n(n);a.a},"99bf":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-search[data-v-1921b593]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-content[data-v-1921b593]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-1921b593]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-1921b593]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-1921b593]{width:%?34?%;height:%?34?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#c8cbcc;border-radius:50%}.u-placeholder-class[data-v-1921b593]{color:#909399}.u-action[data-v-1921b593]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-1921b593]{width:%?80?%;margin-left:%?10?%}',""]),t.exports=e},a3bf:function(t,e,i){var n=i("7022");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4ef198f2",n,!0,{sourceMap:!1,shadowMode:!1})},a6ea:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-toast[data-v-466c000c]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0}.u-toast.u-show[data-v-466c000c]{opacity:1;z-index:9999999}.u-text[data-v-466c000c]{word-break:keep-all;white-space:nowrap;line-height:normal}.u-icon[data-v-466c000c]{margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-466c000c]{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-top[data-v-466c000c]{left:50%;top:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-bottom[data-v-466c000c]{left:50%;bottom:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-type-primary[data-v-466c000c]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-466c000c]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-466c000c]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-466c000c]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-466c000c]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-466c000c]{color:#fff;background-color:#585858}',""]),t.exports=e},a910:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-index-anchor-wrapper",style:[t.wrapperStyle],attrs:{id:t.$u.guid()}},[i("v-uni-view",{staticClass:"u-index-anchor ",class:[t.active?"u-index-anchor--active":""],style:[t.customAnchorStyle]},[t.useSlot?t._t("default"):[i("v-uni-text",[t._v(t._s(t.index))])]],2)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},b29b:function(t,e,i){"use strict";var n={"u-icon":i("f138").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.config.type,"u-position-"+t.config.position],style:{padding:t.isShow?"0 40rpx":0,zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.config.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.$u.color[t.config.type]}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.config.title))])],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},b50e:function(t,e,i){"use strict";i.r(e);var n=i("cfb5"),a=i("d9fa");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("386f"),i("951e");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4cca89b0",null,!1,n["a"],r);e["default"]=s.exports},b8a2:function(t,e,i){"use strict";i("c975"),i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center"}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.config.type)>=0&&this.config.icon){var t=this.$u.type2icon(this.config.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"-1"}},methods:{show:function(t){var e=this;this.config=Object.assign(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,e.timeEnd()}),this.config.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.config.url){if("/"!=this.config.url[0]&&(this.config.url="/"+this.config.url),Object.keys(this.config.params).length){var t="";/.*\/.*\?.*=.*/.test(this.config.url)?(t=this.$u.queryParams(this.config.params,!1),this.config.url=this.config.url+"&"+t):(t=this.$u.queryParams(this.config.params),this.config.url+=t)}this.config.isTab?uni.switchTab({url:this.config.url}):uni.navigateTo({url:this.config.url})}}}};e.default=n},c03d:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-index-bar"},[t._t("default"),t.showRightBar?i("v-uni-view",{},[t.showSidebar?i("v-uni-view",{staticClass:"u-index-bar__sidebar",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.onTouchMove.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.onTouchMove.apply(void 0,arguments)},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.onTouchStop.apply(void 0,arguments)},touchcancel:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.onTouchStop.apply(void 0,arguments)}}},t._l(t.indexList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-index-bar__index",style:{zIndex:t.zIndex+1,color:t.activeAnchorIndex===n?t.activeColor:""},attrs:{"data-index":n}},[t._v(t._s(e))])})),1):t._e()],1):t._e(),t.touchmove&&t.indexList[t.touchmoveIndex]?i("v-uni-view",{staticClass:"u-indexed-list-alert",style:{zIndex:t.alertZIndex}},[i("v-uni-text",[t._v(t._s(t.indexList[t.touchmoveIndex]))])],1):t._e()],2)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},caf6:function(t,e,i){"use strict";i("7db0"),i("4160"),i("d81d"),i("a9e3"),i("d3b7"),i("3ca3"),i("159b"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){for(var t=[],e="A".charCodeAt(0),i=0;i<26;i++)t.push(String.fromCharCode(e+i));return t},a={name:"u-index-list",props:{sticky:{type:Boolean,default:!0},showRightBar:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},scrollTop:{type:[Number,String],default:0},offsetTop:{type:[Number,String],default:0},indexList:{type:Array,default:function(){return n()}},activeColor:{type:String,default:"#2979ff"}},created:function(){this.stickyOffsetTop=this.offsetTop?uni.upx2px(this.offsetTop):44,this.children=[]},provide:function(){return{UIndexList:this}},data:function(){return{activeAnchorIndex:0,showSidebar:!0,touchmove:!1,touchmoveIndex:0}},watch:{scrollTop:function(){this.updateData()}},computed:{alertZIndex:function(){return this.$u.zIndex.toast}},methods:{onLoad:function(){console.log(1212)},updateData:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.showSidebar=!!t.children.length,t.setRect().then((function(){t.onScroll()}))}),0)},setRect:function(){return Promise.all([this.setAnchorsRect(),this.setListRect(),this.setSiderbarRect()])},setAnchorsRect:function(){return Promise.all(this.children.map((function(t,e){return t.$uGetRect(".u-index-anchor-wrapper").then((function(e){Object.assign(t,{height:e.height,top:e.top})}))})))},setListRect:function(){var t=this;return this.$uGetRect(".u-index-bar").then((function(e){Object.assign(t,{height:e.height,top:e.top+t.scrollTop})}))},setSiderbarRect:function(){var t=this;return this.$uGetRect(".u-index-bar__sidebar").then((function(e){t.sidebar={height:e.height,top:e.top}}))},getActiveAnchorIndex:function(){for(var t=this.children,e=this.sticky,i=this.children.length-1;i>=0;i--){var n=i>0?t[i-1].height:0,a=e?n:0;if(a>=t[i].top)return i}return-1},onScroll:function(){var t=this,e=this.children,i=void 0===e?[]:e;if(i.length){var n=this.sticky,a=this.stickyOffsetTop,o=this.zIndex,r=(this.scrollTop,this.activeColor),c=this.getActiveAnchorIndex();if(this.activeAnchorIndex=c,n){var s=!1;-1!==c&&(s=i[c].top<=0),i.forEach((function(e,n){if(n===c){var u="",l={color:"".concat(r)};s&&(u={height:"".concat(i[n].height,"px")},l={position:"fixed",top:"".concat(a,"px"),zIndex:"".concat(o||t.$u.zIndex.indexListSticky),color:"".concat(r)}),e.active=c,e.wrapperStyle=u,e.anchorStyle=l}else if(n===c-1){var d=i[n],f=d.top,h=n===i.length-1?t.top:i[n+1].top,p=h-f,v=p-d.height,b={position:"relative",transform:"translate3d(0, ".concat(v,"px, 0)"),zIndex:"".concat(o||t.$u.zIndex.indexListSticky),color:"".concat(r)};e.active=c,e.anchorStyle=b}else e.active=!1,e.anchorStyle="",e.wrapperStyle=""}))}}},onTouchMove:function(t){this.touchmove=!0;var e=this.children.length,i=t.touches[0],n=this.sidebar.height/e,a=0;a=i.clientY;var o=Math.floor((a-this.sidebar.top)/n);o<0?o=0:o>e-1&&(o=e-1),this.touchmoveIndex=o,this.scrollToAnchor(o)},onTouchStop:function(){this.touchmove=!1,this.scrollToAnchorIndex=null},scrollToAnchor:function(t){var e=this;if(this.scrollToAnchorIndex!==t){this.scrollToAnchorIndex=t;var i=this.children.find((function(i){return i.index===e.indexList[t]}));i&&(this.$emit("select",i.index),uni.pageScrollTo({duration:0,scrollTop:i.top+this.scrollTop}))}}}};e.default=a},cd0a:function(t,e,i){"use strict";i.r(e);var n=i("b8a2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},cfb5:function(t,e,i){"use strict";var n={"u-search":i("8803").default,"u-tabs":i("dac9").default,"u-index-list":i("4551").default,"u-index-anchor":i("5bd2").default,"u-toast":i("8aec").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"u-search-box"},[i("u-search",{attrs:{shape:"square",clearabled:!0,"show-action":!1,"input-align":"center",placeholder:"请输入您要搜索的内容","bg-color":"#F5F6F7"},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.searchStart.apply(void 0,arguments)}},model:{value:t.searchKeyWord,callback:function(e){t.searchKeyWord=e},expression:"searchKeyWord"}})],1),i("v-uni-view",{},[i("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:t.imgUrl+"/images/brand2.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"u-p-30 u-text-center u-font-30 text-bold"},[t._v("推荐品牌")]),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticStyle:{padding:"30upx",overflow:"hidden"}},[i("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"100%"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)},scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower.apply(void 0,arguments)}}},t._l(t.indexList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"scroll_good_item u-text-center u-m-l-24 ",style:0==n?"margin-left:0":""},[i("v-uni-image",{staticStyle:{width:"110upx",height:"110upx",margin:"0 auto"},attrs:{src:t.imgUrl+"images/brand.png",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"u-line-1 u-font-26 u-m-t-20"},[t._v("SUNS")])],1)})),1)],1)],1),i("v-uni-view",{staticClass:"tabs"},[i("u-tabs",{attrs:{list:t.tabList,"is-scroll":!1,current:t.current,"bg-color":"#EDEDED","active-color":"#667E88",height:"100",bold:!1,"bar-width":"68","bar-height":"4"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{},[i("u-index-list",{attrs:{scrollTop:t.scrollTop,showRightBar:t.showRightBar,sticky:!1}},t._l(t.indexList,(function(e,n){return i("v-uni-view",{key:n},[i("u-index-anchor",{attrs:{index:e}}),i("v-uni-view",{staticClass:"list-cell jus-start u-border-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBrandInfo.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"84upx",height:"84upx"},attrs:{src:t.imgUrl+"images/brand.png",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"u-font-28"},[t._v(t._s(e)+"-ABFNG")])],1),i("v-uni-view",{staticClass:"list-cell jus-start u-border-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBrandInfo.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"84upx",height:"84upx"},attrs:{src:t.imgUrl+"images/brand.png",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"u-font-28"},[t._v(t._s(e)+"-ABFNG")])],1)],1)})),1)],1),i("v-uni-view",[i("u-toast",{ref:"uToast"})],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},d7b2:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor},attrs:{id:t.id}},[i("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-tab-item",style:[t.tabItemStyle(n)],attrs:{id:"u-tab-item-"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(n)}}},[t._v(t._s(e[t.name]||e["name"]))])})),t.showBar?i("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},d9fa:function(t,e,i){"use strict";i.r(e);var n=i("f4d2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},da5c:function(t,e,i){"use strict";i.r(e);var n=i("46f0"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},dac9:function(t,e,i){"use strict";i.r(e);var n=i("d7b2"),a=i("664c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("00a9");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"27e0eaa2",null,!1,n["a"],r);e["default"]=s.exports},e688:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.scroll-view_H[data-v-4cca89b0]{white-space:nowrap}.scroll-view_H .scroll-view-item_H[data-v-4cca89b0]{display:inline-block;width:30%;height:100px}.scroll-view_H .uni-bg-red[data-v-4cca89b0]{background:red}.scroll-view_H .uni-bg-green[data-v-4cca89b0]{background:green}.scroll-view_H .uni-bg-blue[data-v-4cca89b0]{background:#00f}',""]),t.exports=e},ea8f:function(t,e,i){"use strict";i.r(e);var n=i("2cec"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ef22:function(t,e,i){var n=i("99bf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("e8326ce6",n,!0,{sourceMap:!1,shadowMode:!1})},f4d2:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5ed1")),o={data:function(){return{imgUrl:a.default.imgUrl,scrollTop:0,showRightBar:!1,searchKeyWord:"",tabList:[{name:"全部品牌"},{name:"新入驻品牌"},{name:"热门品牌"}],current:0,indexList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]}},onLoad:function(){this.allRequest()},onShow:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onScroll:function(t){console.log(t)},onPageScroll:function(t){console.log(t),t.scrollTop>400?this.showRightBar=!0:this.showRightBar=!1,this.scrollTop=t.scrollTop},methods:{allRequest:function(){},aa:function(){uni.showLoading({title:"加载中"});var t={url:"",method:"post"},e={city_id:"370700"};a.default.httpTokenRequest(t,e).then((function(t){console.log(t.data),uni.hideLoading()}),(function(t){console.log(t),uni.hideLoading()}))},showToast:function(t,e,i,n){this.$refs.uToast.show({title:t,type:e,url:i,param:n})},tabChange:function(t){this.current=t},scroll:function(t){console.log(t.detail)},scrolltolower:function(){console.log(1111),this.showToast("没有更多了","warning")},scrolltoupper:function(){console.log(2222)},goBrandInfo:function(){uni.navigateTo({url:"./brandInfo"})}}};e.default=o}}]);