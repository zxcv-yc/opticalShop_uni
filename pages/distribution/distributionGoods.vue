<template>
	<view class="container">
		<view class="u-search-box">
			<u-search shape="square" :clearabled="true" :show-action="false" input-align="center" v-model="searchKeyWord"
			 placeholder="请输入您要搜索的内容" @search="searchStart" bg-color="#F5F6F7"></u-search>
		</view>
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="tabChange" bg-color="#fff" active-color="#667E88"
			 height="100" :bold="false" :show-bar="false" inactive-color="#6C6868"></u-tabs>
		</view>
		<view class="goods_list u-p-30 ">
			<view class="goods_item jus-spB u-border-bottom u-p-b-30 u-p-t-30" v-for="(item,index) in tabList" :key="index">
				<view class="">
					<image src="../../static/images/copy/dssd.png" mode="aspectFill" style="width: 180upx;height: 180upx;"></image>
				</view>
				<view class="goods_item_info jus-spB-col">
					<view class="text-main u-font-26 u-line-2">
						日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径
					</view>
					<view class="">
						<text class="u-font-24">¥</text><text class="u-font-34">99</text>
					</view>
					<view class="jus-spB">
						<view class="u-font-24">
							<text class="text-main">预计可赚</text><text class="text-F25050">¥ 16.00</text>
						</view>
						<view class="share_btn border_radius_999 u-text-center text-fff">
							分享
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
				tabList: [{
					"name": "营销"
				}, {
					"name": "佣金"
				}, {
					"name": "最新"
				}, {
					"name": "销量"
				}, {
					"name": "价格"
				}],
				searchKeyWord: '',
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
			tabChange: function(e) {
				this.current = e;
			},
			searchStart: function() {
				console.log(this.searchKeyWord)
			}
		}
	}
</script>

<style>
	.share_btn {
		background-color: #FB484F;
		line-height: 50upx;
		width: 144upx;
	}
	.goods_item_info{
		width: calc(100% - 210upx);
		height: 180upx;
	}
	.goods_list{
		padding-top: 0 !important;
	}
</style>
