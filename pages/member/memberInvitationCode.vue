<template>
	<view class="container">
		<view class="top_box" :style="'background-image: url('+imgUrl+'images/member2.png);'">
			<view class="jus-spB navBar">
				<view class="" style="width: 110upx;">
					<u-icon name="arrow-left" size="32" color="#fff" @click="goBack"></u-icon>
				</view>
				<view class="u-text-center u-font-34 text-bold" style="color: #FBFBFB;">
					会员邀请码
				</view>
				<view class="" style="width: 110upx;"></view>
			</view>
		</view>
	
		<view class="swiper_box">
			<special-banner :banner-list="bannerList" :swiper-config="swiperConfig"></special-banner>
		</view>
		<view class="jus-start u-p-30">
			<view class="u-m-r-15" @click="sdsd">
				会员保障
			</view>
			<view class="">
				<image :src="imgUrl+'images/member11.png'" mode="aspectFill" style="width: 20upx;height: 20upx;"></image>
			</view>
		</view>
		<view class="guarantee_box jus-start flex_warp">
			<view class="guarantee_item u-m-b-30" v-for="(item,index) in guaranteeList" :key="index">
				<image :src="item.img" mode="aspectFill" style="width: 108upx;height: 108upx;margin: 0 auto;"></image>
				<view class="u-font-20 u-text-center u-p-t-10">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	import specialBanner from '../../components/EtherealWheat-banner/specialBanner.vue'

	let timer = null; //设置全局定时器变量
	export default {
		components: {
			specialBanner
		},
		data() {
			return {
				imgUrl: http.imgUrl,
				socrll_l: 0,
				isRoll: 0,
				bannerList: [{
					picture: http.imgUrl + 'images/member23.png',
					title: '七夕将至：时光足够久，韧性也能炖出味',
					description: '一万年太久，就现在，给你爱',
					memberName: '普通会员',
					qrimg: http.imgUrl + 'images/qrcode.png',
					path: ''
				}, {
					picture: http.imgUrl + 'images/member22.png',
					title: '新菜上架：无边海洋，找到顺眼的那尾鱼',
					description: '花中樱，鱼乃鲷花中樱，鱼乃鲷',
					qrimg: http.imgUrl + 'images/qrcode.png',
					memberName: '白银会员',
					path: ''
				}, {
					picture: http.imgUrl + 'images/member1.png',
					title: '在湘西的烟火气里，发现苗族少女的神明',
					description: '取材自湘西苗族传统的烟熏文化',
					qrimg: http.imgUrl + 'images/qrcode.png',
					memberName: '黄金会员',
					path: ''
				}, {
					picture: http.imgUrl + 'images/member20.png',
					title: '一人宴福利降临，陪伴独自行走的丰盛旅程',
					description: '在自己的小世界里，日日好日，夜夜好清宵',
					qrimg: http.imgUrl + 'images/qrcode.png',
					memberName: '钻石会员',
					path: ''
				}],
				swiperConfig: {
					indicatorDots: false,
					indicatorColor: 'rgba(255, 255, 255, .4)',
					indicatorActiveColor: 'rgba(255, 255, 255, 1)',
					autoplay: false,
					interval: 3000,
					duration: 300,
					circular: false,
					previousMargin: '58rpx',
					nextMargin: '58rpx'
				},

				guaranteeList: [{
					img: http.imgUrl + 'images/member5.png',
					name: '永久制'
				}, {
					img: http.imgUrl + 'images/member4.png',
					name: '购物折扣'
				}, {
					img: http.imgUrl + 'images/member6.png',
					name: '积分折扣'
				}, {
					img: http.imgUrl + 'images/member9.png',
					name: '专属客服'
				}, {
					img: http.imgUrl + 'images/member10.png',
					name: '正品保障'
				}, {
					img: http.imgUrl + 'images/member3.png',
					name: '定期福利'
				}, {
					img: http.imgUrl + 'images/member7.png',
					name: '特惠价格'
				}, {
					img: http.imgUrl + 'images/member8.png',
					name: '专享权益'
				}],
				scrollLeft: 0
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
			}

		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.top_box {
		width: 100%;
		height: 280upx;
	}

	.scroll_item {
		width: 636upx;
		height: 418upx;
		background-size: 100% 100%;
		display: inline-block;
		transition: .5s;
	}

	.scroll_item image {
		width: 216upx;
		height: 216upx;
	}

	.scroll_item_samll {
		width: 471upx;
		height: 310upx;
		/* margin-top: 54upx; */
	}

	.scroll_item_samll image {
		transition: .5s;
		width: 150upx !important;
		height: 150upx !important;
	}

	.swiper_box {
		margin-top: -160upx;
	}

	.guarantee_box {
		padding: 30upx 50upx;
	}

	.guarantee_item {
		width: 25%;
	}
</style>
<style lang="scss">
	.scroll-view_H {
		white-space: nowrap;
		display: flex;
		align-items: center;

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
