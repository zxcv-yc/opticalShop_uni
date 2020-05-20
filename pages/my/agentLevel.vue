<template>
	<view class="container">
		<view class="d2_block u-line-1 text-fff border_radius_10 u-m-b-20">
			公告：正常你的客户根据你的门槛设置，用户自行升级，本招商码会无条件直接招商
		</view>
		<view class="block_item jus-spB text-fff" :style="'background-image: url(../../static/images/my/level_bg'+item+'.png)'"
		 v-for="(item,index) in list" :key="index">
			<view class="jus-start">
				<view class="">
					<image src="../../static/images/my/king.png" mode="aspectFill" style="width: 64upx;height: 64upx;margin: 0 auto;"></image>
					<view class="u-font-26 ">
						VIP{{item}}
					</view>
				</view>
				<view class="u-font-20 u-m-l-30">
					<view class="">预付款：2400</view>
					<view class="">购买价60</view>
				</view>
			</view>
			<view class="u-font-30">
				代理邀请码
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
				list: [1, 2, 3, 4, 5, 6]
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
			}
		}
	}
</script>

<style>
	.container {
		padding: 30upx;
	}

	.d2_block {
		background-color: #D2D2D2;
		font-size: 20upx;
		line-height: 34upx;
		padding: 0 20upx;
	}

	.block_item {
		width: 100%;
		height: 180upx;
		background-size: 100% 100%;
		padding-left: 50upx;
		padding-right: 30upx;
		/* margin-top: 20upx; */
	}
</style>
