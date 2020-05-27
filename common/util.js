// util.js
import http from './http.js'
class util {
	constructor() {

	}
}
// 微信公众号授权
util.wxAuthorize = function() {
	console.log('执行')
	let appid = null
	let link = window.location.href;
	let params = util.getUrlParam('code'); // 地址解析
	console.log(link)
	console.log(params)
	// 已经授权登录过的就不用再授权了
	// if (store.state.token) return;

	// 如果拿到code，调用授权接口，没有拿到就跳转微信授权链接获取
	if (params) {
		console.log('拿到了code===>' + params)
		// console.log(params)
		util.wxAuth(params) // 调用后台接口，授权
	} else {
		console.log('没拿到code')
		uni.showLoading({
			title: '加载中'
		})
		http.ajax({
			method: 'POST',
			url: 'GetJssdkConfig',
			data: {},
			success: function(res) {
				let data = JSON.parse(res).data
				appid = data.appId
				console.log(JSON.parse(res))
				uni.hideLoading()
				let uri = encodeURIComponent(link);
				let authURL =
					'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + uri +
					'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
				console.log(authURL)
				window.location.href = authURL;
			}
		})
	}
}
util.getUrlParam = function(name) {
	let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	let r = window.location.search.substr(1).match(reg)
	if (r != null) {
		return unescape(r[2])
	}
	return null
}
util.wxAuth = function(c) {
	http.ajax({
		method: 'POST',
		url: 'WxLogin',
		data: {
			code: c
		},
		success: function(res) {
			let r = JSON.parse(res)
			if (r.errno == 0) {
				let data = JSON.parse(res).data
				console.log(data)
				uni.setStorage({
					key: 'userInfo',
					data: data,
					success: function() {
						uni.showToast({
							title: '登录成功'
						})
					}
				});
			} else {
				uni.showToast({
					title: '获取您的信息失败,请稍后再试',
					icon: "none",
					duration: 2000,
					success: function() {
						setTimeout(function() {
							uni.navigateBack({
								delta: 1
							})
						}, 2000)
					}
				});
			}


		}
	})
}
export {
	util
};
