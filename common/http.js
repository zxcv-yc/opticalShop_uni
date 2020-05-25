const baseUrl = 'http://meitong.boyaokj.cn/app/index.php';
// const URL = 'https://hzdykj.boyaokj.cn/index.php/api/';
const imgUrl = 'http://twenty-eight.top/static/';
const httpRequest = (opts, data, loading = true) => {
	if (loading) {
		uni.showLoading()
	}
	let _p = {
		i: 1,
		c: entry,
		m: ewei_shopv2,
	}
	let httpDefaultOpts = {
		url: baseUrl + '?i=1&c=entry&m=ewei_shopv2&do=' + opts.url,
		data: data,
		method: opts.method,
		header: opts.method == 'get' ? {
			'X-Requested-With': 'XMLHttpRequest',
			"Accept": "application/json",
			"Content-Type": "application/json; charset=UTF-8"
		} : {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		dataType: 'json',
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				resolve(res[1])
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	if (loading) {
		uni.hideLoading()
	}
	return promise
};
//带Token请求
const httpTokenRequest = (opts, data) => {
	let token = "";
	uni.getStorage({
		key: 'token',
		success: function(ress) {
			token = ress.data
		}
	});
	//此token是登录成功后后台返回保存在storage中的
	let httpDefaultOpts = {
		url: baseUrl + opts.url,
		data: data,
		method: opts.method,
		header: opts.method == 'get' ? {
			'Token': token,
			'X-Requested-With': 'XMLHttpRequest',
			"Accept": "application/json",
			"Content-Type": "application/json; charset=UTF-8"
		} : {
			'Token': token,
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		dataType: 'json',
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				resolve(res[1])
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
};
const URL = 'http://meitong.boyaokj.cn/app/index.php';
const PARAM = 't=0&c=entry&from=wxapp&a=wxapp&m=ewei_shopv2&do=';

/* 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */

const ajax = function(opt) {
	opt = opt || {};
	opt.method = opt.method.toUpperCase() || 'POST';
	opt.url = URL + '?' + PARAM + opt.url || '';
	opt.async = opt.async || true;
	opt.data = opt.data || null;
	opt.success = opt.success || function() {};
	var xmlHttp = null;
	if (XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	var params = [];
	if (!opt.data.i) {
		opt.url = opt.url + '&' + 'i=2'
	}

	for (var key in opt.data) {
		opt.url = opt.url + '&' + key + '=' + opt.data[key]
		// params.push(key + '=' + opt.data[key]);
	}
	var postData = params.join('&');
	if (opt.method.toUpperCase() === 'POST') {
		xmlHttp.open(opt.method, opt.url, opt.async);
		xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		xmlHttp.send(postData);
	} else if (opt.method.toUpperCase() === 'GET') {
		xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
		xmlHttp.send(null);
	}
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			opt.success(xmlHttp.responseText);
		}
	};
}
export default {
	baseUrl,
	httpRequest,
	httpTokenRequest,
	imgUrl,
	ajax

}
