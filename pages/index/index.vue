<template>
	<view class="container">
		<view class="jus-spB u-p-30">
			<view class="jus-start">
				<image src="../../static/tabBar/shouye-a.png" mode="widthFix" style="width: 40upx;"></image>
				<view class="text-content u-font-sm u-m-l-20">
					花花美瞳店铺
				</view>
			</view>
			<view class="jus-start">
				<view class="jus-center border_radius_999 search_box">
					<image src="../../static/images/search_icon.png" mode="widthFix" style="width: 24upx;"></image>
					<view class="u-font-sm text-content u-m-l-20">
						搜索
					</view>
				</view>
				<view class="u-m-l-20">
					<image src="../../static/images/fenxiang.png" mode="aspectFit" style="width: 36upx;height: 36upx;"></image>
				</view>
			</view>
		</view>
		<view class="">
			<u-swiper :list="swiperList" height="600" border-radius="0"></u-swiper>
		</view>
		<view class="jus-center u-p-30">
			<view class="jus-start">
				<image src="../../static/images/copy/rengong.png" mode="widthFix" style="width: 28upx;"></image>
				<view class="u-font-24 u-m-l-20">
					人工优选
				</view>
			</view>
			<view class="u-m-l-30 u-m-r-30">
				/
			</view>
			<view class="jus-start">
				<image src="../../static/images/copy/pinzhi.png" mode="widthFix" style="width: 28upx;"></image>
				<view class="u-font-24 u-m-l-20">
					人工优选
				</view>
			</view>
			<view class="u-m-l-30 u-m-r-30">
				/
			</view>
			<view class="jus-start">
				<image src="../../static/images/copy/shouhou.png" mode="widthFix" style="width: 28upx;"></image>
				<view class="u-font-24 u-m-l-20">
					售后无忧
				</view>
			</view>
			<view class="">
				<u-icon name="arrow-right" color="#171718" size="24"></u-icon>
			</view>

		</view>
		<view class="u-p-l-30 u-p-r-30">
			<uni-swiper-dot :info="menuList" :current="current" field="content" mode="default" :dotsStyles="dotsStyles">
				<swiper :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000" style="height: 400upx;" @change="swiperChange">
					<swiper-item v-for="(item,index) in menuList" :key="index">
						<view class="swiper-item jus-start flex_warp">
							<view class="menu_item" v-for="(item1,index1) in item" :key="index1">
								<view class="menu_item_img">
									<image :src="item1.img" mode="widthFix"></image>
								</view>
								<view class="u-font-20 text-content u-text-center">
									{{item1.name}}
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="">
			1212
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"

	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				title: 'Hello',
				swiperList: [{
						image: '../../static/images/copy/images%20(10).png'
					},
					{
						image: '../../static/images/copy/images%20(12).png'
					},
				],
				menuList: [],
				current: 0,
				dotsStyles:{
					selectedBackgroundColor:'#667E87'
				}
			}
		},
		onLoad() {
			this.aa()
		},
		methods: {
			aa: function() {
				let menu_result = []
				var menu_arr = [{
						img: '../../static/images/menu/meitong.png',
						name: '美瞳',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/touming.png',
						name: '透明片',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/zhoubian.png',
						name: '护理周边',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/haiwai.png',
						name: '海外精品',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/jvjia.png',
						name: '居家生活',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/shengxian.png',
						name: '食物生鲜',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/hufu.png',
						name: '医美护肤',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/yinliu.png',
						name: '福利引流',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/fengge.png',
						name: '美瞳风格',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/sexi.png',
						name: '色系',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/caizhi.png',
						name: '材质',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/zhijing.png',
						name: '美瞳直径',
						url: 'pages/index/index?id=11'
					},

					{
						img: '../../static/images/menu/yuepao.png',
						name: '月抛美瞳',
						url: 'pages/index/index?id=11'
					}
				];
				console.log(menu_arr.length)
				for (var i = 0; i < menu_arr.length; i += 8) { //将数组重组，每一个为一个单独的数组
					menu_result.push(menu_arr.slice(i, i + 8));
				}
				this.menuList = menu_result
				console.log(menu_result)
			},
			swiperChange: function(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style>
	.search_box {
		padding: 10upx 20upx;
		background-color: #DFDFDF;
	}

	.menu_item {
		width: 25%;
		margin-bottom: 20upx;

	}

	.menu_item image {
		width: 110upx;
		height: 110upx;
		margin: 0 auto;
	}
</style>
