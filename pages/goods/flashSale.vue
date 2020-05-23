<template>
	<view class="container">
		<view class="">
			<image :src="imgUrl+'images/flashSale.png'" mode="widthFix" style="width: 100%;height: auto;"></image>
		</view>
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="tabChange" bg-color="#fff" active-color="#FB484F"
			 height="90" :bold="true" bar-width="90" bar-height="4" font-size="26"></u-tabs>
		</view>
		<view class="goods_list">
			<view class="goods_item jus-spB u-border-bottom" v-for="(item,index) in tabList" :key="index">
				<image :src="imgUrl+'images/copy/cdjh.png'" mode="aspectFill"></image>
				<view class="goods_item_info jus-spB-col">
					<view class="u-font-26 u-line-2">
						日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径
					</view>
					<view class="u-font-22" style="color: #AAACB1;">
						99/副,158/2副,全新震撼上市
					</view>

					<view class="jus-spB">
						<view class="" style="color: #FF2B22;">
							<text class="u-font-22">¥</text>
							<text class="u-font-34">19.90</text>
						</view>
						<!-- <view class="u-m-r-30">
							<image :src="imgUrl+'images/cart.png'" mode="widthFix" style="width: 50upx;"></image>
						</view> -->
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
				current: 0,
				tabList: [{
					"name": "99以下"
				}, {
					"name": "100-199"
				}, {
					"name": "200-299"
				}, {
					"name": "300以上"
				}],
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
			tabChange: function(e) {
				this.current = e;
			},
		}
	}
</script>

<style>
	page {
		/* background-color: #EDEDED; */
	}

	.goods_list {
		padding: 30upx;
	}

	.goods_item {
		padding-bottom: 30upx;
		border-bottom: 1upx solid #EDEDED;
		margin-bottom: 30upx;
	}

	.goods_item image {
		width: 180upx;
		height: 180upx;
		border-radius: 10upx;
	}

	.goods_item_info {
		width: calc(100% - 200upx);
		height: 180upx;
	}
</style>
