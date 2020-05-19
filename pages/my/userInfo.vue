<template>
	<view class="container">
		<view class="top_box" style="background-image: url(../../static/images/my/img15.png);">
			<view class="jus-end u-p-t-40 u-p-r-30">
				<u-badge type="error" class="badgeZindex" size="mini" :count="30" :absolute="true" :offset="[25,15]"></u-badge>
				<image src="../../static/images/my/img16.png" mode="widthFix" style="width: 48upx;"></image>
			</view>
			<view class="jus-start u-p-l-60">
				<view class="user_img_box">
					<image src="../../static/images/copy/list_head.png" mode="aspectFill" style="width: 114upx;height: 114upx;"></image>
				</view>
				<view class="u-m-l-30">
					<view class="u-font-30 text-fff u-m-b-20">
						花花美瞳店铺
					</view>
					<view class="u-font-26 text-fff">
						余额：<text class="text-FF4D4D">1000</text><text class="text-FEDEA1 inline_block u-p-l-15">充值</text>
					</view>
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
.top_box {
		background-size: 100% 100%;
		width: 100%;
		height: 364upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

	}

	.user_img_box {
		border-radius: 999px;
		overflow: hidden;
		border: 4upx solid #dbdbdb;
	}
</style>
