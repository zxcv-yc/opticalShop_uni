import Vue from 'vue'
import App from './App'

import wechat from './common/wechat'
import fun from './common/fun.js'
if (wechat.isWechat()) {
	Vue.prototype.$wechat = wechat;
	
}
Vue.prototype.$fun = fun;
Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
import httpInterceptor from 'common/http.interceptor.js'
import util from './common/util.js'
Vue.use(uView, httpInterceptor, util);

const app = new Vue({
	...App
})
app.$mount()
