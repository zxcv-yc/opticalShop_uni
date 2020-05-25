<template>
	<view class="container">
		<view class="unpaid_bg_box text-fff" :style="'background-image: url('+imgUrl+'images/order_info_unpaid_bg.png'+');'">
			<view class="u-p-30 u-font-32">
				待支付
			</view>
			<view class="u-p-l-30 u-p-r-30 u-font-28">
				订单已经提交,请在01时20分钟内完成支付,超时订单将自动取消
			</view>
		</view>
		<view class="bgc_fff u-p-30">
			<view class="jus-start">
				<view class=" u-font-26" style="color: #9D9D9D;">
					订单编号:
				</view>
				<view class="text-content u-font-26 u-m-l-20">
					2029181028102101
				</view>
			</view>
			<view class="jus-start u-m-t-20">
				<view class=" u-font-26" style="color: #9D9D9D;">
					创建时间:
				</view>
				<view class="text-content u-font-26 u-m-l-20">
					2020-5-25 13:16:41
				</view>
			</view>
		</view>
		<view class="bgc_fff u-p-30 jus-start u-m-t-20">
			<view class="">
				<image :src="imgUrl+'images/address.png'" mode="aspectFill" style="width: 60upx; height: 60upx;"></image>
			</view>
			<view class="u-m-l-20 address_info">
				<view class="">
					<text class="u-font-30 text-main">洛奇</text><text class="u-font-26 inline_block u-m-l-20">17978372827</text>
				</view>
				<view class="text-tips u-font-24">
					山东省青岛市城阳区惜福镇街道王沙路安民小区2-2-202
				</view>
			</view>
		</view>
		<view class="bgc_fff  u-m-t-20">
			<view class="jus-start u-p-l-30 u-p-t-20 u-p-r-30 u-p-b-20">
				<image src="../../static/tabBar/fenlei-a.png" mode="aspectFill" style="width: 26upx;height: 26upx;"></image>
				<view class="u-font-24 u-m-l-20" style="color: #787878;">订单商品</view>
			</view>
			<view class="order_info jus-spB ">
				<image :src="imgUrl+'images/copy/cdjh.png'" mode="aspectFill" style="width: 140upx;height: 140upx;"></image>
				<view class="order_info_text_box jus-spB-col">
					<view class="jus-spB">
						<view class="text-main u-font-26 u-line-2">
							日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径…
						</view>
						<view class="u-text-right" style="width: 80upx;">
							<view class="text-main u-font-26">
								¥399.00
							</view>
							<view class="u-font-26 text-tips">
								x1
							</view>
						</view>
					</view>
					<view class="jus-spB text-tips">
						<view class="u-font-26">
							规格:1副,无彩色
						</view>
						<view class="u-font-22">
							退款/退货
						</view>
					</view>
				</view>
			</view>
			<view class="u-p-30 u-font-24 text-787878">
				<view class="jus-spB u-m-b-20">
					<view class="">
						商品小计
					</view>
					<view class="">
						¥399.00
					</view>
				</view>
				<view class="jus-spB u-m-b-20">
					<view class="">
						运费
					</view>
					<view class="">
						¥0.00
					</view>
				</view>
				<view class="jus-spB">
					<view class="">
						实付款(含运费)
					</view>
					<view class="text-F25050">
						¥399.00
					</view>
				</view>
			</view>

		</view>
		<view class="u-p-30 bgc_fff u-m-t-20">
			<view class="text-content u-p-b-30 u-border-bottom u-font-28">
				添加留言
			</view>
			<view class="u-p-t-30   u-font-26 jus-start">
				<view class="">
					留言:
				</view>
				<view class="u-flex-1 u-m-l-30">
					<input type="text" value="" placeholder="请输入留言信息" class="u-font-26" />
				</view>
			</view>
		</view>
		<view class="bottom_bar jus-end">
			<view class="">
				<u-button shape="circle" type="error" :ripple="true" :custom-style="{width:'166upx',height:'58upx',backgroundColor:'#fff',color:'#999',fontSize:'28upx',border:'1upx solid #999'}">取消订单</u-button>
			</view>
			<view class="u-m-l-30">
				<u-button shape="circle" type="error" :ripple="true" :custom-style="{width:'166upx',height:'58upx',backgroundColor:'#F25050',color:'#fff',fontSize:'28upx'}">确认付款</u-button>
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
	page {
		background-color: #EDEDED;
	}

	.unpaid_bg_box {
		width: 100%;
		height: 220upx;
		background-size: 100% 100%;
	}

	.address_info {
		width: calc(100% - 60upx);
	}

	.text-787878 {
		color: #787878;
	}

	.order_info {
		background-color: #FBFBFB;
		padding: 20upx 30upx;
	}

	.input-placeholder {
		font-size: 26upx;
		color: #787878;
		line-height: 100%;
	}

	.order_info_text_box {
		width: calc(100% - 170upx);
		height: 140upx;
	}

	.text-F25050 {
		color: #F25050;
	}

	.bottom_bar {
		padding: 20upx 30upx;
		background-color: #fff;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
