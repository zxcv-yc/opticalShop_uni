<template>
	<view class="container">
		<view class="jus-start u-p-l-30 u-p-t-20 u-p-b-20">
			<view class=" border_radius_999 top_img_box">
				<image :src="imgUrl+'images/copy/list_head.png'" mode="aspectFill" style="width: 52upx;height: 52upx;" class="border_radius_999"></image>
			</view>
			<view class="u-font-28 u-m-l-20" style="color: #474F6E;">
				花花美瞳店铺
			</view>
		</view>
		
		<view class="shop_setting_list ">
			<view class="shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff" @click="goPage('null')">
				<view class="jus-start">
					<view class="">
						<image :src="imgUrl+'images/accountSecuritySetting1.png'" mode="widthFix" style="width: 34upx;height:auto"></image>
					</view>
					<view class="u-font-30 text-main u-m-l-20">
						登录密码
					</view>
				</view>
				<view class="jus-spB">
					<view class="u-font-24 text-tips">
						建议您定期更改密码保护账户安全
					</view>
					<view class="u-p-b-2">
						<u-icon name="arrow-right" size="24" color="#666"></u-icon>
					</view>
				</view>
			</view>
			<view class="shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff" @click="goPage('null')">
				<view class="jus-start">
					<view class="">
						<image :src="imgUrl+'images/accountSecuritySetting2.png'" mode="widthFix" style="width: 34upx;height:auto"></image>
					</view>
					<view class="u-font-30 text-main u-m-l-20">
						支付密码
					</view>
				</view>
				<view class="jus-spB">
					<view class="u-font-24 text-tips">
						使用账户余额需要进行支付密码
					</view>
					<view class="u-p-b-2">
						<u-icon name="arrow-right" size="24" color="#666"></u-icon>
					</view>
				</view>
			</view>
			<view class="shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff" @click="goPage('null')">
				<view class="jus-start">
					<view class="">
						<image :src="imgUrl+'images/accountSecuritySetting3.png'" mode="widthFix" style="width: 34upx;height:auto"></image>
					</view>
					<view class="u-font-30 text-main u-m-l-20">
						手机认证
					</view>
				</view>
				<view class="jus-spB">
					<view class="u-font-24 text-tips">
						未完成认证
					</view>
					<view class="u-p-b-2">
						<u-icon name="arrow-right" size="24" color="#666"></u-icon>
					</view>
				</view>
			</view>
			<view class="shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff" @click="goPage('null')">
				<view class="jus-start">
					<view class="">
						<image :src="imgUrl+'images/accountSecuritySetting5.png'" mode="widthFix" style="width: 34upx;height:auto"></image>
					</view>
					<view class="u-font-30 text-main u-m-l-20">
						绑定用户名
					</view>
				</view>
				<view class="jus-spB">
					<view class="u-font-24 text-tips">
						请绑定用户名
					</view>
					<view class="u-p-b-2">
						<u-icon name="arrow-right" size="24" color="#666"></u-icon>
					</view>
				</view>
			</view>
			<view class="shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff" @click="goPage('./emailAuthentication')">
				<view class="jus-start">
					<view class="">
						<image :src="imgUrl+'images/accountSecuritySetting6.png'" mode="widthFix" style="width: 34upx;height:auto"></image>
					</view>
					<view class="u-font-30 text-main u-m-l-20">
						邮箱认证
					</view>
				</view>
				<view class="jus-spB">
					<view class="u-font-24 text-tips">
						认证邮箱可加强账户安全,快速找回密码
					</view>
					<view class="u-p-b-2">
						<u-icon name="arrow-right" size="24" color="#666"></u-icon>
					</view>
				</view>
			</view>
			<view class="shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff" @click="goPage('null')">
				<view class="jus-start">
					<view class="">
						<image :src="imgUrl+'images/accountSecuritySetting4.png'" mode="widthFix" style="width: 34upx;height:auto"></image>
					</view>
					<view class="u-font-30 text-main u-m-l-20">
						解绑
					</view>
				</view>
				<view class="jus-spB">
					<view class="u-font-24 text-tips">
						已绑定微信,如需换绑,请点击此项
					</view>
					<view class="u-p-b-2">
						<u-icon name="arrow-right" size="24" color="#666"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>

	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				settingList: [{
					img: http.imgUrl + 'images/accountSecuritySetting1.png',
					name: '登录密码',
					url: 'null'
				}, {
					img: http.imgUrl + 'images/accountSecuritySetting2.png',
					name: '支付密码',
					url: 'null'
				}, {
					img: http.imgUrl + 'images/accountSecuritySetting3.png',
					name: '手机认证',
					url: 'null'
				}, {
					img: http.imgUrl + 'images/accountSecuritySetting5.png',
					name: '绑定用户名',
					url: 'null'
				}, {
					img: http.imgUrl + 'images/accountSecuritySetting6.png',
					name: '邮箱认证',
					url: 'null'
				}, {
					img: http.imgUrl + 'images/accountSecuritySetting4.png',
					name: '解绑',
					url: 'null'
				}]
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
			goPage: function(e) {
				if (e == 'null') {
					this.showToast('开发中', 'info')
				} else {
					uni.navigateTo({
						url: e
					})
				}
			},
		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.top_img_box {
		border: 2upx solid #979797;
		box-sizing: content-box;
	}
</style>
