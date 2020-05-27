<template>
	<view class="container">
		<view class="top_box u-m-t-30 u-p-l-30 u-p-r-30 u-p-t-30 padding_bottom_180" :style="'background-image: url('+imgUrl+'images/brand_img5.png);'">
			<view class="jus-spB" @click="goBrandList">
				<view class="u-font-40 text-main text-bold">
					全部品牌
				</view>
				<view class="">
					<u-icon size="28" name="arrow-right" color="#999"></u-icon>
				</view>
			</view>
			<view class="u-text-center text-fff u-font-28 text-bold u-p-t-20 u-m-b-40">
				海昌美瞳
			</view>
			<image :src="imgUrl+'images/brand_img1.png'" mode="aspectFill" style="width: 100%; height: 406upx;"></image>
			<image :src="imgUrl+'images/brand2.png'" mode="aspectFill" style="width: 100%;height: 300upx;"></image>
		</view>
		<view class="u-font-40 text-main text-bold u-p-t-30 u-p-l-30">
			精选品牌
		</view>
		<view class="brand_item" v-for="(item,index) in swiperList1" :key="index">
			<view class="jus-spB u-p-l-50 u-p-r-30 pos_r">
				<view class="jus-start">
					<image :src="imgUrl+'images/brand3.png'" mode="aspectFill" style="width: 176upx;height: 136upx;"></image>
					<view class="u-font-28">
						日韩高端美瞳品牌
					</view>
				</view>
				<view class="">
					<u-icon name="arrow-right" size="26" color="#242424"></u-icon>
				</view>

			</view>
			<view class="swiper_box u-p-l-30 u-p-r-30">
				<u-swiper :list="swiperList1" mode="rect" border-radius="0" height="360"></u-swiper>
			</view>
			<!-- 横向滚动条 -->
			<view class="uni-padding-wrap uni-common-mt">
				<view class="" style="padding: 30upx;overflow: hidden;">
					<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="100%" @scrolltolower="scrolltolower">
						<view class="scroll_good_item u-text-center u-m-l-24 " v-for="(item,index) in list" :key="index" :style="index==0?'margin-left:0':''">
							<image :src="imgUrl+'images/brand5.png'" mode="aspectFill" style="width: 165upx; height: 165upx;margin: 0 auto;"></image>
							<view class="u-line-1 u-font-26 u-m-t-20">
								日本美瞳日抛日本美瞳日抛
							</view>
							<view class="">
								<text style="color: #FC3B00;" class="u-font-24">¥ 19.90</text><text class="font_20 text-tips"><s>¥29.90</s></text>
							</view>
						</view>
					</scroll-view>
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
				list: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				swiperList1: [{
					image: http.imgUrl + 'images/brand_img3.png'
				}, {
					image: http.imgUrl + 'images/brand_img3.png'
				}, {
					image: http.imgUrl + 'images/brand_img3.png'
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
			showToast: function(_this, title, type, url, param) {
				this.$refs.uToast.show({
					title: title,
					type: type,
					url: url,
					param: param
				})
			},
			scroll(event) {
				//距离每个边界距离
				console.log(event.detail)
			},
			//滚动到底部/右边触发
			scrolltolower() {
				console.log(1111);
				this.$fun.showToast(this, '没有更多了', 'warning')
			},
			// 滚动到顶部/左边触发
			scrolltoupper() {
				console.log(2222);
			},
			goBrandList: function() {
				uni.navigateTo({
					url: './brandList'
				})
			}
		}
	}
</script>

<style>
	.top_box {
		width: 100%;
		height: 1066upx;
		background-size: 100% 100%;
	}

	.padding_bottom_180 {
		padding-bottom: 180upx;
	}

	.pos_r {
		z-index: 9999;
		position: relative;
		bottom: -30upx;
	}

	.scroll_good_item {
		width: 165upx;
		display: inline-block;
	}

	.font_20 {
		font-size: 20upx;
	}
</style>
<style lang="scss">
	.scroll-view_H {
		white-space: nowrap;

		.scroll-view-item_H {
			display: inline-block;
			width: 30%;
			height: 100px;
		}

		.uni-bg-red {
			background: red;
		}

		.uni-bg-green {
			background: green;
		}

		.uni-bg-blue {
			background: blue;
		}
	}
</style>
