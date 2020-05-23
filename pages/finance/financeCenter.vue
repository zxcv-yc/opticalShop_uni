<template>
	<view class="container">
		<view class="top_box jus-spB-col u-p-b-30" :style="'background-image: url('+imgUrl+'images/financeCenter_bg.png);'">
			<view class="jus-spB navBar">
				<view class="" style="width: 110upx;">
					<u-icon name="arrow-left" size="32" color="#fff" @click="goBack"></u-icon>
				</view>
			
			</view>
			<view class="jus-center">
				<view class="u-text-center">
					<view class="font_66 text-fff text-bold">
						960.00
					</view>
					<view class="u-font-26 text-fff">
						总资产（元）
					</view>
				</view>
			</view>
			<view class="jus-spB text-fff u-text-center u-p-l-80 u-p-r-80">
				<view class="">
					<view class="u-font-40 text-bold">
						600.00
					</view>
					<view class="u-font-26">
						可用余额
					</view>
				</view>
				<view class="">
					<view class="u-font-40 text-bold">
						360.00
					</view>
					<view class="jus-start">
						<view class="u-font-26">
							不可用余额
						</view>
						<view class="u-m-l-10">
							<image :src="imgUrl+'images/wenhao.png'" mode="widthFix" style="width: 23upx;"></image>
						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="u-p-30 jus-spB bgc_fff u-m-b-15">
			<view class="u-font-34 ">
				可提现600.00
			</view>
			<view class="jus-start">
				<view class="">
					<u-button shape="square" size="mini" :ripple="true" :custom-style="{width: '108upx',height: '53upx'}">提现</u-button>
				</view>
				<view class="u-m-l-30">
					<u-button shape="square" size="mini" :ripple="true" type="error" :custom-style="{width: '108upx',height: '53upx'}">充值</u-button>
				</view>
			</view>
		</view>
		<view class="u-p-l-30 u-p-r-30 bgc_fff u-m-b-15" v-for="(item,index) in list" :key="index">
			<view class="jus-spB u-border-bottom u-p-t-20 u-p-b-20">
				<view class="u-font-30">
					订单号：20292818191
				</view>
				<view class="u-font-32" style="color: #D42626;">
					+1.00
				</view>
			</view>
			<view class="jus-start  u-p-t-15">
				<view class="u-font-28 text-content">
					订单类型：
				</view>
				<view class="u-font-28 text-main">
					代理进货
				</view>
			</view>
			<view class="jus-start  u-p-t-15">
				<view class="u-font-28 text-content">
					订单备注：
				</view>
				<view class="u-font-28 text-main">
					暂无备注
				</view>
			</view>
			<view class="jus-start u-p-b-20 u-p-t-15">
				<view class="u-font-28 text-content">
					订单时间：
				</view>
				<view class="u-font-28 text-main">
					2020-5-22
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
				list:[1,1,1,1,1,1,1]
				
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
		background-color: #ededed;
	}

	.top_box {
		width: 100%;
		height: 400upx;
		background-size: 100% 100%;
	}

	.font_66 {
		font-size: 66upx;
	}
</style>
