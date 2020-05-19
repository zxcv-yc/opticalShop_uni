<template>
	<view class="container">
		<view class="text-bold text-main u-font-40 u-m-l-30 u-p-t-30 u-p-b-30">
			购物车
		</view>
		<view class="u-p-l-30 u-p-r-30">
			<u-notice-bar mode="horizontal" :is-circular="true" :list="noticeList" color="#000" bg-color="#fff" :show="noticeShow"
			 border-radius="999" :close-icon="true" @close="closeNotice" font-size="24"></u-notice-bar>
		</view>
		<view class="cart_box">
			<u-checkbox-group @change="checkboxGroupChange" active-color="#FC3B00" size="30">
				<view class="cart_item border_radius_10 bgc_fff u-p-20 jus-spB">
					<view class="u-m-r-20">
						<u-checkbox @change="checkboxChange" v-model="che" :name="1" shape="circle" ></u-checkbox>
					</view>
					<view class="jus-spB">
						<image src="../../static/images/copy/dssd.png" mode="aspectFill" style="width: 188upx;height: 152upx;" class="border_radius_10"></image>
						<view class="cart_item_info jus-spB-col">
							<view class="jus-spB">
								<view class="u-font-26 text-main u-line-2 cart_item_title">
									新款美瞳眼睛伴侣套装礼盒 影形彩色隐形眼镜
								</view>
								<view class="">
									<image src="../../static/images/delete.png" mode="widthFix" style="width: 26upx;"></image>
								</view>
							</view>

							<view class="u-font-22 text-tips">
								规格:1副,无彩色
							</view>
							<view class="jus-spB">
								<view class="text-FC3B00">
									<text class="u-font-20">¥</text>
									<text class="u-font-34">28.00</text>
								</view>
								<view class="">
									<u-number-box :input-width="60" :input-height="40"></u-number-box>
								</view>
							</view>
						</view>
					</view>
				</view>

			</u-checkbox-group>
		</view>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				noticeShow: true,
				che: true,
				noticeList: [
					"关于 xxxx产品完税订单更改地址更新说明 通知",
					"关于 xxxx产品完税订单更改地址更新说明 通知"
				]
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
			//关闭滚动通知
			closeNotice: function() {
				this.noticeShow = false
			},
			checkboxGroupChange: function(e) {
				console.log(e)
			},
			checkboxChange: function(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.cart_box {
		padding: 30upx;
	}
	.cart_item_info{
		width: calc(100% - 218upx);
	}
	.cart_item_title{
		width: calc(100% - 42upx);
	}
	.text-FC3B00{
		color: #FC3B00;
	}
</style>
