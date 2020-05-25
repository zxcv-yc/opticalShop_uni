// util.js
import http from './http.js'
class util {
	constructor() {

	}
}
// 微信公众号授权
util.wxAuthorize = function(appid) {
	// console.log('执行')
	// let link = window.location.href;
	// let params = util.getUrlParam('code'); // 地址解析
	// console.log(link)
	// console.log(params)
	// // 已经授权登录过的就不用再授权了
	// // if (store.state.token) return;

	// // 如果拿到code，调用授权接口，没有拿到就跳转微信授权链接获取
	// if (params) {
	// 	console.log('拿到了code===>' + params)
	// 	// console.log(params)
	// 	// api.wxAuth(params.code); // 调用后台接口，授权
	// } else {
	// 	console.log('没拿到code')
	// 	// return
	// 	// let appid = 'xxx';
	// 	let uri = encodeURIComponent(link);
	// 	let authURL =
	// 		'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + uri +
	// 		'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
	// 	// window.location.href = authURL;
	// }
	uni.showLoading({
		title: '加载中'
	})
	http.ajax({
		method: 'POST',
		url: 'GetJssdkConfig',
		data: {},
		success: function(res) {
			console.log(res)
			uni.hideLoading()
		}
	})
}
util.getUrlParam = function(name) {
	let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	let r = window.location.search.substr(1).match(reg)
	if (r != null) {
		return unescape(r[2])
	}
	return null
}
export {
	util
};
