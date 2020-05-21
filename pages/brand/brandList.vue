<template>
	<view class="container">
		<view class="u-search-box">
			<u-search shape="square" :clearabled="true" :show-action="false" input-align="center" v-model="searchKeyWord"
			 placeholder="请输入您要搜索的内容" @search="searchStart" bg-color="#F5F6F7"></u-search>
		</view>
		<view class="">
			<image src="../../static/images/brand2.png" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="">
			<u-index-list :scrollTop="scrollTop" :showRightBar="showRightBar">
				<view v-for="(item, index) in indexList" :key="index">
					<u-index-anchor :index="item" />
					<view class="list-cell jus-start u-border-bottom" @click="goBrandInfo">
						<image src="../../static/images/brand.png" mode="aspectFill" style="width: 84upx; height: 84upx;"></image>
						<view class="u-font-28">
							{{item}}-ABFNG
						</view>
					</view>
					<view class="list-cell jus-start u-border-bottom" @click="goBrandInfo">
						<image src="../../static/images/brand.png" mode="aspectFill" style="width: 84upx; height: 84upx;"></image>
						<view class="u-font-28">
							{{item}}-ABFNG
						</view>
					</view>
				</view>
			</u-index-list>
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
			if (e.scrollTop > 300) {
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
</style>
