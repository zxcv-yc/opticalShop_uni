let jweixin = require('./node_modules/jweixin-module/lib/index.js')

async function configWeiXin(callback) {
	let [errConfig, resConfig] = await api.wxConfig(window.location.href);
	if (resConfig) {
		let apiList = [ // 可能需要用到的能力
			'onMenuShareAppMessage',
			'onMenuShareTimeline',
			'hideOptionMenu',
			'showOptionMenu',
			'chooseWXPay'
		];

		let info = {
			debug: true, // 调试，发布的时候改为false
			appId: 'appid',
			nonceStr: resConfig.noncestr,
			timestamp: resConfig.timestamp,
			signature: resConfig.sign,
			jsApiList: apiList
		};
		jweixin.config(info);
		jweixin.error(err => {
			console.log('config fail:', err);
		});

		jweixin.ready(res => {
			if (callback) callback(jweixin); // 配置成功
		});
	}
}
