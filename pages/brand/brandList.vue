<template>
	<view class="container">
		<view class="u-search-box">
			<u-search shape="square" :clearabled="true" :show-action="false" input-align="center" v-model="searchKeyWord"
			 placeholder="请输入您要搜索的内容" @search="searchStart" bg-color="#F5F6F7"></u-search>
		</view>
		<view class="">
			<image :src="imgUrl+'/images/brand2.png'" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="u-p-30 u-text-center u-font-30 text-bold">
			推荐品牌
		</view>
		<!-- 横向滚动条 -->
		<view class="uni-padding-wrap uni-common-mt">
			<view class="" style="padding: 30upx;overflow: hidden;">
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="100%" @scrolltolower="scrolltolower">
					<view class="scroll_good_item u-text-center u-m-l-24 " v-for="(item,index) in indexList" :key="index" :style="index==0?'margin-left:0':''">
						<image :src="imgUrl+'images/brand.png'" mode="aspectFill" style="width: 110upx; height: 110upx;margin: 0 auto;"></image>
						<view class="u-line-1 u-font-26 u-m-t-20">
							SUNS
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="tabChange" bg-color="#EDEDED" active-color="#667E88"
			 height="100" :bold="false" bar-width="68" bar-height="4"></u-tabs>
		</view>
		<view class="">
			<u-index-list :scrollTop="scrollTop" :showRightBar="showRightBar" :sticky="false">
				<view v-for="(item, index) in indexList" :key="index">
					<u-index-anchor :index="item" />
					<view class="list-cell jus-start u-border-bottom" @click="goBrandInfo">
						<image :src="imgUrl+'images/brand.png'" mode="aspectFill" style="width: 84upx; height: 84upx;"></image>
						<view class="u-font-28">
							{{item}}-ABFNG
						</view>
					</view>
					<view class="list-cell jus-start u-border-bottom" @click="goBrandInfo">
						<image :src="imgUrl+'images/brand.png'" mode="aspectFill" style="width: 84upx; height: 84upx;"></image>
						<view class="u-font-28">
							{{item}}-ABFNG
						</view>
					</view>
				</view>
			</u-index-list>
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
				scrollTop: 0,
				showRightBar: false,
				searchKeyWord: '',
				tabList: [{
					"name": "全部品牌"
				}, {
					"name": "新入驻品牌"
				}, {
					"name": "热门品牌"
				}],
				current: 0,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V", "W", "X", "Y", "Z"
				]
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
		onScroll(e) {
			console.log(e)
		},
		onPageScroll(e) {
			console.log(e)
			if (e.scrollTop > 400) {
				this.showRightBar = true
			} else {
				this.showRightBar = false
			}
			this.scrollTop = e.scrollTop;
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
			showToast: function(title, type, url, param) {
				this.$refs.uToast.show({
					title: title,
					type: type,
					url: url,
					param: param
				})
			},
			tabChange: function(e) {
				this.current = e;
			},
			scroll(event) {
				//距离每个边界距离
				console.log(event.detail)
			},
			//滚动到底部/右边触发
			scrolltolower() {
				console.log(1111);
				this.$fun.showToast(this,'没有更多了', 'warning')
				// this.showToast('没有更多了', 'warning')
			},
			// 滚动到顶部/左边触发
			scrolltoupper() {
				console.log(2222);
			},
			goBrandInfo: function() {
				uni.navigateTo({
					url: "./brandInfo"
				})
			}
		}
	}
</script>

<style>
	.list-cell {
		padding: 20upx;
	}

	.scroll_good_item {
		width: 110upx;
		display: inline-block;
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
