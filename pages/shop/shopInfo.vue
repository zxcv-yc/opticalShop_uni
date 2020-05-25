<template>
	<view class="container">
		<view class="top_box" :style="'background-image: url('+imgUrl+'images/shop_info_bg.png'+');'">
			<view class="jus-spB navBar">
				<view class="" style="width: 110upx;">
					<u-icon name="arrow-left" size="32" color="#fff" @click="goBack"></u-icon>
				</view>
			</view>
		</view>
		<view class="jus-spB  shop_info_text_box u-p-l-30 u-p-r-30 u-m-b-20">
			<view class="jus-start">
				<!-- <view class="border_radius_999" style="overflow: hidden;"> -->
				<image :src="imgUrl+'images/copy/list_head.png'" mode="aspectFill" class="border_radius_999" style="width: 130upx;height: 130upx;"></image>
				<!-- </view> -->
				<view class="u-m-l-20 jus-spB-col " style="height: 100upx;">
					<view class="u-font-32 text-fff jus-start">
						<view class="">
							洛洛美瞳店
						</view>
						<view class="u-m-l-20">
							<u-icon name="arrow-right" size="30" color="#fff"></u-icon>
						</view>
					</view>
					<view class="u-font-20 text-tips">
						<text>全部商品 980</text><text class="inline_block u-m-l-15 u-m-r-15">|</text><text>上新 7</text>
					</view>
				</view>
			</view>
			<view class="jus-start" style="height: 100upx;">
				<view class="jus-start hei_100">
					<view class="hei_100">
						<u-icon name="star" size="36" color="#fff"></u-icon>
					</view>
					<view class="text-fff u-font-26 u-m-l-15 hei_100 u-p-t-2">
						收藏本店
					</view>
					<view class="u-m-l-30 hei_100" @click="shareModal = true">
						<image :src="imgUrl+'images/fenxiang_fff.png'" mode="aspectFill" style="width: 30upx; height: 30upx;"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="bgc_ed ">
			<view class="u-search-box">
				<u-search shape="square" :clearabled="true" :show-action="false" input-align="center" v-model="searchKeyWord"
				 placeholder="请输入您搜索的内容" @search="searchStart" bg-color="#fff"></u-search>
			</view>
			<view class="jus-spB screen_bar_box ">
				<view class="screen_bar_item" :class="screenIndex==1?'screen_bar_item_a':''" @click="screenToggle(1)">
					综合
				</view>
				<view class="screen_bar_item" :class="screenIndex==2?'screen_bar_item_a':''" @click="screenToggle(2)">
					最新
				</view>
				<view class="screen_bar_item" :class="screenIndex==3?'screen_bar_item_a':''" @click="screenToggle(3)">
					销量
				</view>
				<view class="screen_bar_item" :class="screenIndex==4?'screen_bar_item_a':''" @click="screenToggle(4)">
					价格
				</view>
				<view class="screen_bar_item" :class="screenIndex==5?'screen_bar_item_a':''" @click="screenToggle(5)">
					<image :src="imgUrl+'images/list.png'" mode="widthFix" style="width: 30upx;"></image>
				</view>
				<u-popup v-model="screenModalShow" mode="right" close-icon-pos="bottom-right" :closeable="true">
					<view class="screen_modal " style="width: 400upx;">筛选条件</view>
				</u-popup>
			</view>
			<view class="goods_list jus-spB flex_warp">
				<view class="goods_item" v-for="(item,index) in list" :key="index">
					<image :src="imgUrl+'images/copy/cdjh.png'" mode="aspectFill" style="width: 340upx;height: 340upx;"></image>
					<view class="u-p-15">
						<view class="u-line-2" style="width: 100%;">
							日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径
						</view>
						<view class="text-FF2B22 u-p-t-40">
							<text class="u-font-24">¥</text><text class="u-font-32">99</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="shareModal" mode="bottom" border-radius="20" z-index="999989">
			<view class="share_modal ">
				<view class="u-text-center u-font-26 u-p-t-40" style="color: #727272;">
					截屏然后分享给朋友或朋友圈
				</view>
				<view class="u-p-t-80 " style="margin: 0 auto;">
					<image :src="imgUrl+'images/qrcode.png'" mode="aspectFill" style="width: 400upx;height: 400upx;margin: 0 auto;"></image>
				</view>
				<view class="share_modal_btn u-font-30 u-text-center" @click="shareModal = false">
					确定
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				searchKeyWord: '',
				screenIndex: 1,
				shareModal: false,
				screenModalShow: false,
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
			goBack: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			//搜索
			searchStart: function() {
				console.log(this.searchKeyWord)
			},
			screenToggle: function(e) {
				this.screenIndex = e
				if (e == 5) {
					this.screenModalShow = true
				}
			}
		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.bgc_ed {
		background-color: #EDEDED;
	}

	.hei_100 {
		height: 100%;
	}

	.top_box {
		width: 100%;
		height: 400upx;
		background-size: 100% 100%;
	}

	.shop_info_text_box {
		margin-top: -70upx;
		z-index: -1;
	}

	.screen_bar_box {
		padding: 30upx 40upx;
		z-index: 1077;
		position: relative;
	}

	.screen_bar_item_a {
		color: #667E88;
	}

	.text-FF2B22 {
		color: #FF2B22;
	}

	.screen_modal {
		padding: 80upx 30upx;
	}

	.goods_list {
		padding: 24upx;
	}

	.goods_item {
		width: 340upx;
		background-color: #fff;
		overflow: hidden;
		border-radius: 20upx;
		margin-bottom: 20upx;
	}
	.share_modal_btn{
		color: #FB484F;
		line-height: 96upx;
		background-color: #F6F6F0;
		margin-top: 60upx;
	}
</style>
