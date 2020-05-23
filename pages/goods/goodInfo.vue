<template>
	<view class="container">
		<view class="swiper_box">
			<u-swiper :list="swiperList" mode="number" border-radius="0" height="750" indicator-pos="bottomRight"></u-swiper>
		</view>
		<view class="block_item">
			<view class="u-font-32 u-line-2 text-main u-p-30">
				日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径
			</view>
			<view class="jus-spB u-p-l-30 ">
				<view class="">
					<view class="text-tips">
						99/副,158/2副,全新震撼上市
					</view>
					<view class="u-m-t-20">
						<text class="text-FF443C price text-bold">¥ 66.00</text><text class="u-font-30 text-tips inline_block u-m-l-15"><s>¥
								99.00</s></text>
					</view>
				</view>
				<view class="share_btn jus-center">
					<image :src="imgUrl+'images/shareimg.png'" mode="widthFix" style="width: 26upx;"></image>
					<view class="u-font-24 text-content u-m-l-15">分享</view>
				</view>
			</view>
			<view class="u-p-20 jus-start">

			</view>
		</view>
		<view class="bgc_fff p-20-30 jus-spB u-m-b-20">
			<view class="jus-start">
				<image :src="imgUrl+'images/brand.png'" mode="aspectFill" style="width: 70upx; height: 70upx;"></image>
				<view class="text-main u-font-26 u-m-l-20">
					GUESS
				</view>
			</view>
			<view class="jus-end">
				<view class="u-font-24 text-tips">
					进入品牌
				</view>
				<view class="">
					<u-icon name="arrow-right" size="24" color="#999"></u-icon>
				</view>
			</view>
		</view>
		<view class="bgc_fff p-20-30 jus-spB u-m-b-20 height_110">
			<view class="jus-start">
				<view class="u-font-26 text-tips">
					运费
				</view>
				<view class="text-main u-font-26 u-m-l-20">
					免运费
				</view>
			</view>
			<view class="jus-end">
				<view class="u-font-24 text-tips">
					已售3333
				</view>
				<view class="">
					<!-- <u-icon name="arrow-right" size="24" color="#999"></u-icon> -->
				</view>
			</view>
		</view>
		<view class="bgc_fff   u-m-b-20 ">
			<view class="jus-spB u-p-30">
				<view class="jus-start ">
					<view class="u-font-26 text-tips">
						服务
					</view>
					<view class="text-main u-font-26 u-m-l-20">
						收货后结算
					</view>
				</view>
				<view class="jus-end">
					<!-- <view class="u-font-24 text-tips">
						已售3333
					</view> -->
					<view class="">
						<u-icon name="arrow-right" size="24" color="#999"></u-icon>
					</view>
				</view>
			</view>
			<view class="jus-spB u-p-30">
				<view class="jus-start ">
					<view class="u-font-26 text-tips">
						类型
					</view>
					<view class="text-main u-font-26 u-m-l-20">
						年抛
					</view>
				</view>
				<view class="jus-end">
					<!-- <view class="u-font-24 text-tips">
						已售3333
					</view> -->
					<view class="">
						<u-icon name="arrow-right" size="24" color="#999"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="p-20-30 bgc_fff u-m-b-20 ">
			<view class="jus-spB u-p-b-20 u-border-bottom">
				<view class="jus-start">
					<image :src="imgUrl+'images/brand.png'" mode="aspectFill" style="width: 96upx ;height: 96upx;"></image>
					<view class="text-tips u-m-l-20" style="height: 96upx;">
						SWEETY EYE
					</view>
				</view>
				<view class="go_shop_btn border_radius_999">
					进店逛逛
				</view>
			</view>
			<view class="u-p-t-20 jus-start">
				<view class="jus-start">
					<image :src="imgUrl+'images/duihao.png'" mode="widthFix" style="width:18upx;"></image>
					<view class="text-content u-font-24 u-m-l-10">
						品质担保
					</view>
				</view>
				<view class="jus-start u-m-l-20">
					<image :src="imgUrl+'images/duihao.png'" mode="widthFix" style="width:18upx;"></image>
					<view class="text-content u-font-24 u-m-l-10">
						售后无忧
					</view>
				</view>
			</view>
		</view>
		<view class="tabs u-m-b-20">
			<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="tabChange" bg-color="#fff" active-color="#FB484F"
			 height="110" :bold="false" :show-bar="true" inactive-color="#737373" bar-height="4" bar-width="100"></u-tabs>
		</view>
		<view class="bgc_fff p-20-30">
			<view class="u-p-b-20">
				<text class="u-font-30">详情</text> <text class="u-font-30 inline_block u-m-l-15 u-m-r-15" style="color: #D3CFCF;">/</text><text
				 class="u-font-22 text-content">details</text>
			</view>
			<view class="details">
				商品详情。。。。。
			</view>
		</view>
		<view class="bottom_bar jus-spB">
			<view class="jus-spB" style="width: 35%;">
				<view class="" @click="goIndex">
					<image :src="imgUrl+'images/goodInfoIndex.png'" mode="aspectFill" style="width:40upx ;height: 40upx;margin: 0 auto;"></image>
					<view class="u-font-21 text-content u-text-center u-m-t-10">首页</view>
				</view>
				<view class="">
					<image :src="imgUrl+'images/goodInfoCollect.png'" mode="aspectFill" style="width:40upx ;height: 40upx;margin: 0 auto;"></image>
					<view class="u-font-21 text-content u-text-center u-m-t-10">关注</view>
				</view>
				<view class="">
					<image :src="imgUrl+'images/goodInfoCart.png'" mode="aspectFill" style="width:40upx ;height: 40upx;margin: 0 auto;"></image>
					<view class="u-font-21 text-content u-text-center u-m-t-10">购物车</view>
				</view>
			</view>
			<view class="jus-spB text-fff u-font-30 u-text-center u-flex-1 u-m-l-20">
				<view class="cart_btn" @click="showBuyModal(2)">
					加入购物车
				</view>
				<view class="buy_btn" @click="showBuyModal(1)">
					立即购买
				</view>
			</view>
		</view>
		<u-popup v-model="buyModal" mode="bottom" border-radius="30">
			<view class="u-p-30">
				<view class="jus-spB">
					<view class="">
						<image :src="imgUrl+'images/copy/images15.png'" mode="aspectFill" style="width: 172upx;height: 172upx; " class="border_radius_10"></image>
					</view>
					<view class="jus-spB-col buy_modal_goods_info" style="">
						<view class="jus-end">
							<view class="" @click="buyModal = false">
								<u-icon name="close" color="#999" size="30"></u-icon>
							</view>
						</view>
						<view class="">
							<view class="text-FF443C u-font-36 ">
								¥ 66.60
							</view>
							<view class="text-tips u-font-24 u-m-t-15">
								已售333
							</view>
						</view>
					</view>
				</view>
				<view class="u-p-b-20 u-border-bottom">
					<view class="buy_modal_title u-font-28 text-content u-p-b-20 u-p-t-20">
						{{specArr2.title}}
					</view>
					<view class="spec_box jus-start flex_warp">
						<view class="spec_item" v-for="(item,index) in specArr2.spec" :key="index" @click="specId2 = item.spec_id" :class="specId2 == item.spec_id?'spec_item_a':''">
							{{item.name}}
						</view>
					</view>
				</view>
				<view class="u-p-b-20 u-border-bottom">
					<view class="buy_modal_title u-font-28 text-content u-p-b-20 u-p-t-20">
						{{specArr.title}}
					</view>
					<view class="spec_box jus-start flex_warp">
						<view class="spec_item" v-for="(item,index) in specArr.spec" :key="index" @click="specId1 = item.spec_id" :class="specId1 == item.spec_id?'spec_item_a':''">
							{{item.name}}
						</view>
					</view>
				</view>
				<u-button :custom-style="btnStyle" shape="circle" type="error" :ripple="true">{{openBuyModalType==1?'下一步':'加入购物车'}}</u-button>
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
				btnStyle: {
					color: '#fff',
					backgroundColor: '#E01727',
				},
				openBuyModalType: null,
				tabList: [{
					"name": "产品详情"
				}, {
					"name": "库存"
				}, {
					"name": "周边产品"
				}, {
					"name": "等级价格"
				}],
				buyModal: false,
				current: 0,
				specId1: null,
				specId2: null,
				swiperList: [{
					image: http.imgUrl+'images/copy/list_head.png'
				}, {
					image: http.imgUrl+'images/brand1.png'
				}, ],
				specArr: {
					title: '颜色',
					spec: [{
						spec_id: 1,
						name: '蓝色'
					}, {
						spec_id: 2,
						name: '黑色'
					}, {
						spec_id: 3,
						name: '紫色'
					}, {
						spec_id: 4,
						name: '绿色'
					}, {
						spec_id: 5,
						name: '黄色'
					}, {
						spec_id: 6,
						name: '红色'
					}]
				},
				specArr2: {
					title: '规格',
					spec: [{
						spec_id: 7,
						name: '100'
					}, {
						spec_id: 8,
						name: '200'
					}, {
						spec_id: 9,
						name: '300'
					}, {
						spec_id: 10,
						name: '400'
					}, {
						spec_id: 11,
						name: '500'
					}, {
						spec_id: 12,
						name: '600'
					}]
				}

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
			showBuyModal: function(e) {
				console.log(e)
				if (e == 1) {
					this.openBuyModalType = 1;
					this.buyModal = true;
					this.btnStyle.backgroundColor = "#E01727"

				} else if (e == 2) {
					this.openBuyModalType = 2;
					this.buyModal = true;
					this.btnStyle.backgroundColor = "#CD9657"
				}
			},
			goIndex: function() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.container {
		padding-bottom: 140upx;
	}

	.block_item {
		background-color: #fff;
		/* padding: 20upx; */
		margin-bottom: 20upx;
	}

	.height_110 {
		height: 110upx;
	}

	.p-20-30 {
		padding: 20upx 30upx;
	}

	.text-FF443C {
		color: #FF443C;
	}

	.price {
		font-size: 44upx;
	}

	.share_btn {
		padding: 15upx 20upx;
		background-color: #F8F8F8;
		border-radius: 999px 0 0 999px;
	}

	.go_shop_btn {
		border: 1upx solid #FB484F;
		color: #FB484F;
		text-align: center;
		line-height: 48upx;
		width: 140upx;
		font-size: 26upx;
	}

	.bottom_bar {
		width: 100%;
		background-color: #fff;
		padding: 20upx 30upx;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1upx solid #EDEDED;
	}

	.cart_btn {
		background-color: #CD9657;
		width: 50%;
		border-radius: 999px 0 0 999px;
		line-height: 72upx;
	}

	.buy_btn {
		background-color: #E01727;
		width: 50%;
		border-radius: 0 999px 999px 0;
		line-height: 72upx;
	}

	.buy_modal_goods_info {
		height: 172upx;
		width: calc(100% - 202upx);
	}

	.spec_item {
		line-height: 52upx;
		padding: 0 20upx;
		border-radius: 6upx;
		background-color: #F7F7F7;
		margin-right: 20upx;
		margin-bottom: 20upx;
	}

	.spec_item_a {
		background-color: #E01727 !important;
		color: #fff !important;
	}
</style>
