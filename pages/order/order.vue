<template>
	<view class="container">
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="tabChange" bg-color="#fff" active-color="#667E88"
			 height="100" :bold="false" bar-width="72" bar-height="2"></u-tabs>
		</view>
		<view class="u-search-box">
			<u-search shape="square" :clearabled="true" :show-action="false" input-align="center" v-model="searchKeyWord"
			 placeholder="请输入您要搜索的内容" @search="searchStart" bg-color="#fff"></u-search>
		</view>
		<view class="order_list">
			<view class="order_item" v-for="(item,index) in tabList" :key="index">
				<view class="jus-spB u-p-30">
					<view class="jus-start">
						<view class="u-font-28">
							订单编号：2918291829
						</view>
						<view class="u-m-l-15">
							<u-tag text="余额支付" shape="circle" bg-color="#F25050" color="#fff" border-color="#F25050" size="mini" />
						</view>
					</view>
					<view class="u-font-28 text-667E86">
						待付款
					</view>
				</view>
				<view class="u-p-30 jus-spB" style="background-color: #FBFBFB;">
					<image src="../../static/images/copy/list_head.png" mode="aspectFill" style="width: 94upx;height: 94upx;"></image>
					<view class="jus-spB u-flex-1 u-m-l-20">
						<view class="" style="max-width: 400upx;">
							<view class="text-main u-font-28 u-line-1">
								日本美瞳日抛Flanmy隐形眼镜近视…日本美瞳日抛Flanmy隐形眼镜近视…
							</view>
							<view class="text-tips u-font-24 u-m-t-15">
								规格:1副,无彩色
							</view>
						</view>
						<view class="u-font-26">
							<view class="text-main ">
								¥ 399.00
							</view>
							<view class="text-tips u-text-right u-m-t-15">
								×1
							</view>
						</view>
					</view>
				</view>
				<view class="text-74777D u-font-24 u-p-l-30 u-p-r-30 u-p-t-20 u-p-b-20 u-border-bottom">
					<view class="u-p-b-15 ">
						买家昵称：卡密尔
					</view>
					<view class="u-p-b-15">
						下单时间：2020-5-20 14:51
					</view>
					<view class="jus-spB ">
						<view class="">
							配送方式：快递
						</view>
						<view class="text-content">
							<text>共<text class="text-F25050">1</text>件商品 合计：¥<text class="text-F25050">399.00</text></text>
						</view>
					</view>
				</view>
				<view class="jus-end u-p-l-30 u-p-r-30 u-p-t-20 u-p-b-20">
					<view class="order_btn_main">
						订单评价
					</view>
					<view class="order_btn_tips">
						留言
					</view>
					<view class="order_btn_tips">
						查看详情
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
					"name": "全部"
				}, {
					"name": "待付款"
				}, {
					"name": "待发货"
				}, {
					"name": "已完成"
				}, {
					"name": "已关闭"
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
	page {
		background-color: #ededed;
	}


</style>
