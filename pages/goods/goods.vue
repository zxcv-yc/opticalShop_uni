<template>
	<view class="container">
		<view class="u-wrap">
			<view class="u-search-box">
				<u-search shape="square" :clearabled="true" :show-action="false" input-align="center" v-model="searchKeyWord"
				 placeholder="搜索商家或商品名称" @search="searchStart"></u-search>
			</view>
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
				<view class="screen_modal">筛选条件</view>
			</u-popup>
		</view>
		<view class="goods_list">
			<view class="goods_item jus-spB u-border-bottom">
				<image :src="imgUrl+'images/copy/cdjh.png'" mode="aspectFill"></image>
				<view class="goods_item_info jus-spB-col">
					<view class="u-font-28 u-line-2">
						日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径
					</view>
					<view class="u-font-22" style="color: #B8B8B8;">
						99/副,158/2副,全新震撼上市
					</view>
					<view class="">
						<u-tag text="IVHOICE" type="" size="mini" color="#A79A86" bg-color="#F7F6DD" />
					</view>
					<view class="jus-spB">
						<view class="text-FC3B00">
							<text class="u-font-22">¥</text>
							<text class="u-font-34">19.90</text>
						</view>
						<view class="u-m-r-30">
							<image :src="imgUrl+'images/cart.png'" mode="widthFix" style="width: 50upx;"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="goods_item jus-spB u-border-bottom">
				<image :src="imgUrl+'images/copy/cdjh.png'" mode="aspectFill"></image>
				<view class="goods_item_info jus-spB-col">
					<view class="u-font-28 u-line-2">
						日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径
					</view>
					<view class="u-font-22" style="color: #B8B8B8;">
						99/副,158/2副,全新震撼上市
					</view>
					<view class="">
						<u-tag text="IVHOICE" type="" size="mini" color="#A79A86" bg-color="#F7F6DD" />
					</view>
					<view class="jus-spB">
						<view class="text-FC3B00">
							<text class="u-font-22">¥</text>
							<text class="u-font-34">19.90</text>
						</view>
						<view class="u-m-r-30">
							<image :src="imgUrl+'images/cart.png'" mode="widthFix" style="width: 50upx;"></image>
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
				searchKeyWord: '',
				screenIndex: 1,
				screenModalShow: false
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
	.screen_bar_box {
		padding: 30upx 40upx;
		z-index: 1077;
		position: relative;
	}

	.screen_bar_item_a {
		color: #FF514E;
	}

	.text-FC3B00 {
		color: #FC3B00;
	}

	.screen_modal {
		padding: 80upx 30upx;
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
		width: 220upx;
		height: 220upx;
		border-radius: 10upx;
	}

	.goods_item_info {
		width: calc(100% - 240upx);
		height: 220upx;
	}
</style>
<style lang="scss" scoped>
	.u-search-box {
		padding: 18rpx 30rpx;
	}
</style>
