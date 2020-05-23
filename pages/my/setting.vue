<template>
	<view class="container">
		<view class="shop_setting_list u-p-t-20">
			<view class="shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff" v-for="(item,index) in settingList" :key="index"
			 @click="goPage(item.url)">
				<view class="jus-start">
					<view class="">
						<image :src="item.img" mode="widthFix" style="width: 34upx;height:auto"></image>
					</view>
					<view class="u-font-30 text-main u-m-l-20">
						{{item.name}}
					</view>
				</view>
				<view class="">
					<u-icon name="arrow-right" size="24" color="#666"></u-icon>
				</view>
			</view>
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
					img: http.imgUrl+'images/setting3.png',
					name: '个人信息',
					url: 'null'
				}, {
					img: http.imgUrl+'images/setting1.png',
					name: '收货地址',
					url: './addressList'
				}, {
					img: http.imgUrl+'images/setting2.png',
					name: '账户安全',
					url: './accountSecuritySetting'
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
			goPage: function(e) {
				if (e == 'null') {
					uni.showToast({
						title: "开发中",
						icon:'none'
					})
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
</style>
