<template>
	<view class="container">
		<view class="u-p-30 bgc_fff u-m-t-20">
			<view class="jus-spB  u-p-b-30 u-border-bottom">
				<view class="u-font-30 text-content width_180">
					邮箱地址
				</view>
				<view class="u-flex-1">
					<input type="text" value="" placeholder="请输入您的邮箱地址" class="u-font-30" />
				</view>
			</view>
			<view class="jus-spB  u-p-t-30 ">
				<view class="u-font-30 text-content width_180">
					邮箱地址
				</view>
				<view class="jus-end u-flex-1">
					<view class="u-flex-1">
						<input type="number" value="" placeholder="请输入验证码" class="u-font-30" />
					</view>
					<view class="u-font-28 u-text-right" style="width:180upx ; color: #667E86;" @click="getCode()">
						{{tips}}
					</view>
				</view>
			</view>
		</view>
		<view class="u-p-30 u-font-26" style="color: #667E86;">
			获取验证码后,登录邮箱输入验证码,完成绑定
		</view>
		<view class="u-p-l-30 u-p-r-30 u-p-t-20">
			<u-button shape="square" :custom-style="btnStyle" :ripple="true" :loading="btnLoading">保存修改</u-button>
		</view>
		<u-toast ref="uToast"></u-toast>
		<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				tips: '',
				// refCode: null,
				seconds: 10,
				btnStyle: {
					backgroundColor: '#667E86',
					fontSize: '32upx',
					color: '#fff',
					height: '90upx',
					border: 'none'
				},
				btnLoading: false,
			}
		},
		onLoad: function() {

			this.allRequest()
		},
		onShow: function() {

		},
		onPullDownRefresh: function() {

			// uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {

		},
		methods: {
			allRequest: function() {

			},
			aa: function() {
				uni.showLoading({
					title: '加载中'
				})
				let opts = {
					url: '',
					method: 'post'
				};
				let param = {
					city_id: '370700',
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					uni.hideLoading()
				}, error => {
					console.log(error);
					uni.hideLoading()
				})
			},
			showToast: function(title, type, url, param) {
				this.$refs.uToast.show({
					title: title,
					type: type,
					url: url,
					param: param
				})
			},
			codeChange: function(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						this.showToast('发送成功', 'success')
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.showToast('倒计时结束后再发送', 'error')
				}
			},
		}

	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.width_180 {
		width: 180upx;
	}

	.input-placeholder {
		color: #999B97;
		font-size: 30upx;
		margin: 0;
		padding: 0;
		line-height: 100%;
	}
</style>
