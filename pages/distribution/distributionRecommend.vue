<template>
	<view class="container">
		<view class="top_box " style="background-image: url(../../static/images/fenxiaobg.png);">
			<view class="text-fff u-p-l-40 u-p-t-60 ">
				<view class="text-bold text-50upx u-m-b-30">
					分销俱乐部
				</view>
				<view class="u-font-24">
					成为分销,购买省钱,分享赚钱
				</view>
			</view>
		</view>
		<view class="u-p-t-30 u-p-b-30">
			<view class="row_item jus-start u-p-t-20 u-p-b-20 u-border-bottom">
				<image src="../../static/images/menu/touming.png" mode="aspectFill" style="width: 112upx; height: 112upx;"></image>
				<view class="u-font-30 u-m-l-20">
					享受高于钻石会员的最高折扣价格
				</view>
			</view>
			<view class="row_item jus-start u-p-t-20 u-p-b-20 u-border-bottom">
				<image src="../../static/images/menu/touming.png" mode="aspectFill" style="width: 112upx; height: 112upx;"></image>
				<view class="u-font-30 u-m-l-20">
					一键分享 自动结算 便可轻松收益
				</view>
			</view>
			<view class="row_item jus-start u-p-t-20 u-p-b-20 u-border-bottom">
				<image src="../../static/images/menu/touming.png" mode="aspectFill" style="width: 112upx; height: 112upx;"></image>
				<view class="u-font-30 u-m-l-20">
					升级代言人可拿团队总收益提成
				</view>
			</view>
			<view class="row_item jus-start u-p-t-20 u-p-b-20 u-border-bottom">
				<image src="../../static/images/menu/touming.png" mode="aspectFill" style="width: 112upx; height: 112upx;"></image>
				<view class="u-font-30 u-m-l-20">
					适合购物型用户 折扣最高 边用边赚
				</view>
			</view>
		</view>
		<view class="text-tips">
			开通方式
		</view>
		<u-radio-group v-model="type" @change="radioGroupChange" size="30">
			<view class="u-p-b-20 u-p-t-20">
				<view class="type_item border_radius_999  jus-spB u-m-b-30" v-for="(item,index) in list" :key="index">
					<view class="jus-start">
						<image src="../../static/images/copy/rengong.png" mode="aspectFill" style="width: 60upx;height: 60upx;"></image>
						<view class="text-main u-p-l-30">
							直接购买{{item.name}}
						</view>
					</view>
					<view class="">
						<u-radio :name="item.name" v-model="item.checked" shape="circle" active-color="#333"></u-radio>
					</view>
				</view>

			</view>

		</u-radio-group>
		<view class="submitBtn border_radius_999 u-font-36upx u-text-center text-bold">
			立即开通
		</view>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				che: false,
				type: '',

				list: [{
					name: 1
				}, {
					name: 2
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
			radioGroupChange: function(e) {
				console.log(e)
				console.log("type," + this.type)
			}
		}
	}
</script>

<style>
	.container {
		padding: 30upx;
	}

	.top_box {
		width: 100%;
		height: 260upx;
		background-size: 100% 100%;
	}

	.text-50upx {
		font-size: 50upx;
	}

	.type_item {
		border: 1upx solid #667E87;
		padding: 20upx 50upx;
		width: 690upx;
	}

	.submitBtn {
		background-color: #667E87;
		color: #fff;
		line-height: 100upx;
	}
</style>
