<template>
	<view class="container">
		<view class="bgc_fff">
			<view class="top_box jus-spB-col" style="background-image: url(../../static/images/brandBg.png);">
				<view class="jus-spB navBar text-fff">
					<view class="" style="width: 110upx;">
						<u-icon name="arrow-left" size="32" color="#fff" @click="goBack"></u-icon>
					</view>
					<view class="">
						<image src="../../static/images/share.png" mode="widthFix" style="width: 32upx;"></image>
					</view>
				</view>
				<view class="jus-end u-p-r-30 u-p-b-20">
					<view class="u-font-24 text-fff">
						粉丝：1w
					</view>
					<view class="jus-start u-m-l-20">
						<image src="../../static/images/xihuan.png" mode="widthFix" style="width: 28upx;"></image>
						<view class="u-font-24 text-fff u-m-l-10">
							收藏
						</view>
					</view>
				</view>
			</view>
			<view class="brand_content">
				<view class="jus-start u-m-l-30">
					<image src="../../static/images/brand.png" mode="aspectFill" style="width: 140upx;height: 140upx;"></image>
					<view class="u-m-l-20 u-m-t-20">
						<view class="u-font-26 ">
							日韩高端美瞳品牌
						</view>
						<view class="text-content u-font-22 u-p-t-10">
							共12件商品在售
						</view>
					</view>
				</view>
				<view class="u-p-30 u-font-24 text-main">
					<u-read-more show-height="80" :toggle="true" font-size="24" color="#9F9F9F" close-text="展开品牌信息">
						<rich-text :nodes="content" class="u-font-24"></rich-text>
					</u-read-more>
				</view>
				<view class="tabs u-border-bottom">
					<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="tabChange" bg-color="#fff" active-color="#667E88"
					 font-size="26" :bold="false"></u-tabs>
				</view>
				<view class="jus-spB u-font-26 u-p-l-80 u-p-r-80 u-p-t-30 ">
					<view class="text-main">
						综合
					</view>
					<view class="text-667E86">
						销量
					</view>
					<view class="text-main">
						价格
					</view>
				</view>
			</view>
		</view>
		<view class="goods_list jus-spB flex_warp">
			<view class="goods_item bgc_fff border_radius_20" v-for="(item,index) in tabList" :key="index">
				<image src="../../static/images/copy/dssd.png" mode="aspectFill" style="width: 100%; height: 352upx;"></image>
				<view class="u-p-20">
					<view class="u-font-26 text-main u-line-2">
						日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径
					</view>
					<view class="jus-start u-m-t-20">
						<view class="text-FF2B22">
							<text class="u-font-24">¥ </text><text class="u-font-34 inline_block u-m-l-10">99</text>
						</view>
						<view class="text-tips u-font-24 u-m-l-30">
							200人已付款
						</view>
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
				content: "NEO美瞳在众多美瞳品牌中可谓是一款具性价比的美瞳产品了。与那些国际大牌隐形眼镜相比，neo可能没有那么著名，但是，在一些中低端消费人群中，neo还是很有影响力的一款隐形眼镜。它的镜片透氧率极高，镜片超薄，佩戴起来舒适无感，它独特的花纹设计，佩戴起来效果自然大方，典雅而不失高贵气质。",
				tabList: [{
					"name": "品牌热卖"
				}, {
					"name": "新品"
				}, {
					"name": "周边"
				}, {
					"name": "研选指南"
				}],
				current: 0
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
			tabChange: function(e) {
				this.current = e;
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
		height: 220upx;
	}

	.brand_content {
		position: relative;
		top: -40upx;
	}

	.goods_list {
		background-color: #EDEDED;
		padding: 30upx 20upx;
	}

	.goods_item {
		width: calc(50% - 10upx);
		overflow: hidden;
		margin-bottom: 20upx;
	}
</style>
