<template>
	<view class="container">
		<!-- <view class="shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff u-m-t-20 ">
			<view class="jus-start">
				<view class="">
					<image :src="imgUrl+'images/weixin.png'" mode="widthFix" style="width: 40upx;"></image>
				</view>
				<view class="u-font-30 text-main u-m-l-20">
					获取微信收货地址
				</view>
			</view>
			<view class="">
				<u-icon name="arrow-right" size="24" color="#666"></u-icon>
			</view>
		</view> -->

		<view class="address_list u-m-t-20">
			<view class="address_item jus-spB bgc_fff u-p-30 u-m-b-2" v-for="(item,index) in list" :key="index">
				<view class="jus-start u-flex-1">
					<image :src="imgUrl+'images/copy/cdjh.png'" mode="aspectFill" style="width: 60upx; height: 60upx;"></image>
					<view class="address_info u-m-l-20">
						<view class="jus-start u-m-b-10">
							<view class="u-font-30 text-main">
								名称
							</view>
							<view class="u-font-26 u-m-l-15" style="color: #A5A5A5;">
								17978372827
							</view>
						</view>
						<view class="u-line-2 u-font-24">
							<text class="inline_block default_tag u-font-20">默认</text>
							<text>山东省青岛市城阳区惜福镇街道王沙路安民小区2-2-202</text>
						</view>
					</view>
				</view>
				<view class="u-p-l-30 u-border-left u-p-t-15 u-p-b-15" style="color: #9E9E9E;" @click="editAddress(item)">
					编辑
				</view>
			</view>
		</view>
		<view class="bottom_bar text-fff jus-center" @click="addAddress">
			<view class="u-m-r-15">
				<u-icon name="plus" size="28" color="#fff"></u-icon>
			</view>
			<view class="u-font-32">
				新增地址
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
				list: [1, 1, 1, 1, 1, 1, 1]
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
			editAddress: function(e) {
				uni.navigateTo({
					url: './editAddress?address_id=' + e
				})
			},
			addAddress: function() {
				uni.navigateTo({
					url: './editAddress?address_id=0'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.address_list {
		padding-bottom: 100upx;
	}

	.default_tag {
		padding: 0upx 10upx;
		background-color: #FFE4E4;
		color: #FA4D4D;
		margin-right: 4upx;
		border-radius: 4upx;
		line-height: 30upx;
	}

	.address_info {
		width: calc(100% - 80upx);
		line-height: 40upx;
	}

	.bottom_bar {
		background-color: #667E86;
		height: 90upx;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
