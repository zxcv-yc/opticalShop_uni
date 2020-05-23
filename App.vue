<script>
	import util from './common/util.js'
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log(util)
			util.wxAuthorize();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
</style>

<style>
	@import "src/css/public.css";
	/* @import "src/css/iconfont.css"; */

	/* 	page {
		background-color: #f5efef;
	}

	.container {
		background-color: #f5efef;
		color: #303133;
	} */

	/* @import "src/css/public.css"; */
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
</style>
