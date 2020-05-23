<template>
	<view class="container">
		<view class="top_box" :style="'background-image: url('+imgUrl+'images/my/img15.png);'">
			<view class="jus-end u-p-t-40 u-p-r-30">
				<u-badge type="error" class="badgeZindex" size="mini" :count="30" :absolute="true" :offset="[25,15]"></u-badge>
				<image :src="imgUrl+'images/my/img16.png'" mode="widthFix" style="width: 48upx;"></image>
			</view>
			<view class="jus-start u-p-l-60">
				<view class="user_img_box">
					<navigator url="./userInfo" hover-class="none">
						<image :src="imgUrl+'images/copy/list_head.png'" mode="aspectFill" style="width: 114upx;height: 114upx;border-radius: 999px;"></image>
					</navigator>
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
			<view class="vip_box jus-spB u-p-l-40 u-p-r-40" :style="'background-image: url('+imgUrl+'images/my/img21.png);'">
				<view class="jus-start">
					<image :src="imgUrl+'images/my/img2.png'" mode="widthFix" style="width: 28upx;"></image>
					<view class="u-m-l-15" style="color: #FFDDA4;">
						VIP特权
					</view>
				</view>


				<view class="jus-start u-font-24" style="color: #E8E5E1;">
					<view class="u-p-b-5">
						进入等级中心
					</view>
					<u-icon name="arrow-right" size="20" color="#E8E5E1 "></u-icon>
				</view>

			</view>
		</view>
		<view class=" u-p-30">
			<u-notice-bar mode="horizontal" :is-circular="true" :list="noticeList" color="#000" bg-color="#fff" :show="noticeShow"
			 border-radius="999" :close-icon="true" @close="closeNotice" font-size="24"></u-notice-bar>
		</view>
		<view class="u-tabs-box">
			<u-tabs-swiper activeColor="#212223" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false"
			 swiperWidth="750" bg-color="#ededed" :bold="true" inactive-color="#434343"></u-tabs-swiper>
		</view>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">

			<swiper-item class="swiper-item">
				<!-- 用户中心 -->
				<view class="my_center">

					<view class="my_center_item bgc_fff border_radius_10 ">
						<view class="u-p-30 jus-spB u-border-bottom">
							<view class="u-font-28 text-main text-bold">
								我的订单
							</view>
							<navigator url="../order/order">
								<view class="jus-start">
									<view class="u-p-b-2 u-font-22" style="color: #A9A9A9;">
										查看全部
									</view>
									<u-icon name="arrow-right" size="22" color="#A9A9A9"></u-icon>
								</view>
							</navigator>
						</view>
						<view class="jus-spB order_icon_box u-p-b-40 u-p-t-40 ">

							<view class="order_icon_item">
								<image :src="imgUrl+'images/my/gerenzhongxin6.png'" mode="widthFix" class="order_icon_img"></image>
								<view class="u-font-25 text-main">
									待付款
								</view>
							</view>
							<view class="order_icon_item">
								<image :src="imgUrl+'images/my/gerenzhongxin4.png'" mode="widthFix" class="order_icon_img"></image>
								<view class="u-font-25 text-main">
									待发货
								</view>
							</view>
							<view class="order_icon_item">
								<image :src="imgUrl+'images/my/gerenzhongxin3.png'" mode="widthFix" class="order_icon_img"></image>
								<view class="u-font-25 text-main">
									待收货
								</view>
							</view>
							<view class="order_icon_item">
								<image :src="imgUrl+'images/my/gerenzhongxin8.png'" mode="widthFix" class="order_icon_img"></image>
								<view class="u-font-25 text-main">
									退还款
								</view>
							</view>
						</view>
					</view>

					<view class="my_center_item bgc_fff border_radius_10 ">
						<view class="u-p-30 jus-spB u-border-bottom">
							<view class="u-font-28 text-main text-bold">
								我的服务
							</view>
						</view>
						<view class="jus-start order_icon_box flex_warp u-p-b-40 u-p-t-40" id="serviceBox">
							<view class="order_icon_item" @click="goPage('./myCollect')">
								<u-badge size="mini" type="warning" count="0" :absolute="true" :offset="[-20,30]"></u-badge>
								<image :src="imgUrl+'images/my/gerenzhongxin9.png'" mode="aspectFill" class="order_icon_img"></image>
								<view class="u-font-24 text-9F9F9F">
									我的关注
								</view>
							</view>
							<view class="order_icon_item" @click="goPage('./footprint')"> 
								<image :src="imgUrl+'images/my/gerenzhongxin10.png'" mode="aspectFill" class="order_icon_img"></image>
								<view class="u-font-24 text-9F9F9F">
									我的足迹
								</view>
							</view>
							<view class="order_icon_item" @click="goPage('../finance/financeCenter')">
								<image :src="imgUrl+'images/my/gerenzhongxin1.png'" mode="aspectFill" class="order_icon_img"></image>
								<view class="u-font-24 text-9F9F9F">
									财务中心
								</view>
							</view>
							<view class="order_icon_item">
								<image :src="imgUrl+'images/my/gerenzhongxin5.png'" mode="aspectFill" class="order_icon_img"></image>
								<view class="u-font-24 text-9F9F9F">
									客户服务
								</view>
							</view>
							<view class="order_icon_item u-m-t-40">
								<image :src="imgUrl+'images/my/gerenzhongxin2.png'" mode="aspectFill" class="order_icon_img"></image>
								<view class="u-font-24 text-9F9F9F">
									我的客户经理
								</view>
							</view>
							<view class="order_icon_item u-m-t-40" @click="goPage('./setting')">
								<image :src="imgUrl+'images/my/gerenzhongxin7.png'" mode="aspectFill" class="order_icon_img"></image>
								<view class="u-font-24 text-9F9F9F">
									设置
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<!-- 工作台 -->
				<view class="my_center">
					<view class="my_center_item bgc_fff border_radius_10 jus-spB posr">
						<view class="eye_box" @click="hideData">
							<u-icon :name="eye" size="30" color="#999"></u-icon>
						</view>
						<view class="my_center_item_item jus-center u-p-30">
							<image :src="imgUrl+'images/my/img11.png'" mode="widthFix" style="width: 53upx;"></image>
							<view class="text-FF4D4D u-m-l-15">
								<view class="u-font-28">
									+160
								</view>
								<view class="text-main u-font-22">
									累计收益
								</view>
							</view>
						</view>
						<view class="my_center_item_item jus-center u-p-30 u-border-left ">
							<image :src="imgUrl+'images/my/img17.png'" mode="widthFix" style="width: 53upx;"></image>
							<view class="text-FF4D4D u-m-l-15">
								<view class="u-font-28">
									+5000
								</view>
								<view class="text-main u-font-22">
									我的团队
								</view>
							</view>
						</view>
						<view class="my_center_item_item jus-center u-p-30 u-border-left">
							<image :src="imgUrl+'images/my/img5.png'" mode="widthFix" style="width: 53upx;"></image>
							<view class="text-FF4D4D u-m-l-15">
								<view class="u-font-28">
									+690
								</view>
								<view class="text-main u-font-22">
									累计订单
								</view>
							</view>
						</view>
					</view>
					<view class="my_center_item bgc_fff border_radius_10 ">
						<view class="u-p-30 jus-start u-border-bottom">
							<view class="u-font-28 text-main text-bold">
								分销中心
							</view>
							<view class="">
								<u-icon name="arrow-right" size="20" color="#333 "></u-icon>
							</view>
						</view>
						<view class="jus-spB">
							<view class="my_center_item_item jus-center u-p-t-40 u-p-b-40 ">
								<image :src="imgUrl+'images/my/img9.png'" mode="widthFix" style="width: 36upx;"></image>
								<view class="text-main u-m-l-15 u-font-26">
									分销邀请码
								</view>
							</view>
							<view class="my_center_item_item jus-center u-p-t-40 u-p-b-40 u-border-left " @click="goPage('../distribution/distributionGoods')">
								<image :src="imgUrl+'images/my/img3.png'" mode="widthFix" style="width: 36upx;"></image>
								<view class="text-main u-m-l-15 u-font-26">
									分销产品
								</view>
							</view>
							<view class="my_center_item_item jus-center u-p-t-40 u-p-b-40 u-border-left " @click="goPage('../distribution/distributionRecommend')">
								<image :src="imgUrl+'images/my/img12.png'" mode="widthFix" style="width: 36upx;"></image>
								<view class="text-main u-m-l-15 u-font-26">
									分销说明
								</view>
							</view>
						</view>
					</view>
					<view class="my_center_item bgc_fff border_radius_10 ">
						<navigator url="./agent" hover-class="none">
							<view class="u-p-30 jus-start u-border-bottom">
								<view class="u-font-28 text-main text-bold">
									代理中心
								</view>
								<view class="">
									<u-icon name="arrow-right" size="20" color="#333 "></u-icon>
								</view>
							</view>
						</navigator>
						<view class="jus-spB">
							<view class="my_center_item_item jus-center u-p-t-40 u-p-b-40 " @click="goPage('../member/memberInvitationCode')">
								<image :src="imgUrl+'images/my/img8.png'" mode="widthFix" style="width: 36upx;"></image>
								<view class="text-main u-m-l-15 u-font-26">
									会员邀请码
								</view>
							</view>
							<view class="my_center_item_item jus-center u-p-t-40 u-p-b-40 u-border-left ">
								<image :src="imgUrl+'images/my/img6.png'" mode="widthFix" style="width: 36upx;"></image>
								<view class="text-main u-m-l-15 u-font-26">
									代理邀请码
								</view>
							</view>

							<view class="my_center_item_item jus-center u-p-t-40 u-p-b-40 u-border-left " @click="goPage('./agentLevel')">
								<image :src="imgUrl+'images/my/img13.png'" mode="widthFix" style="width: 36upx;"></image>
								<view class="text-main u-m-l-15 u-font-26">
									等级升级
								</view>
							</view>
						</view>
					</view>
					<view class="my_center_item bgc_fff border_radius_10 ">
						<view class="u-p-30 jus-start u-border-bottom">
							<view class="u-font-28 text-main text-bold">
								我的店铺
							</view>
							<view class="">
								<u-icon name="arrow-right" size="20" color="#333 "></u-icon>
							</view>
						</view>
						<view class="jus-start">
							<view class="my_center_item_item jus-center u-p-t-40 u-p-b-40 ">
								<image :src="imgUrl+'images/my/img7.png'" mode="widthFix" style="width: 36upx;"></image>
								<view class="text-main u-m-l-15 u-font-26">
									店铺邀请码
								</view>
							</view>
							<view class="my_center_item_item jus-center u-p-t-40 u-p-b-40 u-border-left " @click="goPage('../shop/shopSetting')">
								<image :src="imgUrl+'images/my/img4.png'" mode="widthFix" style="width: 36upx;"></image>
								<view class="text-main u-m-l-15 u-font-26">
									店铺设置
								</view>
							</view>

						</view>
					</view>
				</view>
			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				noticeShow: true,
				eye: 'eye', //隐藏数据图标
				list: [{
						name: '用户中心'
					},
					{
						name: '工作台'
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				noticeList: [
					"关于 xxxx产品完税订单更改地址更新说明 通知",
					"关于 xxxx产品完税订单更改地址更新说明 通知"
				],
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
			//点击小眼睛
			hideData: function() {
				console.log(5124)
				this.eye = this.eye == 'eye' ? 'eye-fill' : 'eye'
				console.log(this.eye)
			},
			goPage:function(e){
				uni.navigateTo({
					url: e
				})
			},
	
	
		
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;

			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}


		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

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

	.text-FF4D4D {
		color: #FF4D4D;
	}

	.text-FEDEA1 {
		color: #FEDEA1;
	}

	.vip_box {
		width: 690upx;
		height: 73upx;
		background-size: 100% 100%;
		margin: 0 auto;
	}

	.my_center {
		padding: 30upx;
	}

	.my_center_item {
		margin-bottom: 20upx;
	}

	.my_center_item_item {
		width: calc(100% / 3);
	}

	.swiper-box {
		height: 912upx;
	}

	.swiper-item {
		height: 912upx;
	}

	.order_icon_item {
		width: 25%;
		text-align: center;
		position: relative;
	}

	.order_icon_img {
		width: 48upx;
		margin: 0 auto;
		margin-bottom: 10upx;
	}

	#serviceBox .order_icon_img {
		width: 50upx;
		height: 50upx;
	}

	.text-9F9F9F {
		color: #9F9F9F;
	}

	.badgeZindex {
		z-index: 10777;
	}

	.posr {
		position: relative;
		padding: 20upx 0;
	}

	.eye_box {
		position: absolute;
		top: 15upx;
		right: 15upx;
		z-index: 9999;
	}
</style>
