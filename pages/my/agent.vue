<template>
	<view class="container">
		<view class="u-search-box">
			<u-search shape="square" :clearabled="true" :show-action="false" input-align="center" v-model="searchKeyWord"
			 placeholder="请输入您要搜索的内容" @search="searchStart" bg-color="#fff"></u-search>
		</view>

		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="tabChange" bg-color="#ededed" active-color="#667E88"></u-tabs>
		</view>
		<view class="agent_list">
			<view class="agent_item">
				<view class="jus-spB">
					<view class="jus-start">
						<image src="../../static/images/copy/list_head.png" mode="aspectFill" style="width: 80upx; height: 80upx;" class="border_radius_10"></image>
						<view class="jus-spB-col u-m-l-20" style="height: 80upx;">
							<view class="u-font-30 text-main">
								<text>代理名称</text><text class="u-font-24 text-content">(220364121524)</text>
							</view>
							<view class="jus-start">
								<view class="u-font-24 text-content">
									<text>余额：</text><text class="text-FF2B22">100</text>
								</view>
								<view class="u-font-24 text-content u-m-l-15">
									<text>等级：</text><text class="text-main">VIP4</text>
								</view>
								<view class="u-font-24 text-content u-m-l-15">
									<text>余额：</text><text class="text-main">236</text>
								</view>
							</view>
						</view>
					</view>
					<view class="agent_item_btn">
						详情
					</view>
				</view>
				<view class="jus-center f8_block">
					<view class="f8_item">
						<view class="u-font-26 text-FF2B22">
							200
						</view>
						<view class="u-font-20">
							累计下单(单)
						</view>
					</view>
					<view class="f8_item">
						<view class="u-font-26 text-FF2B22">
							200
						</view>
						<view class="u-font-20">
							累计下单(单)
						</view>
					</view>
					<view class="f8_item">
						<view class="u-font-26 text-FF2B22">
							200
						</view>
						<view class="u-font-20">
							累计下单(单)
						</view>
					</view>
				</view>
				<view class="jus-spB">
					<view class="">
						<view class="jus-start">
							<view class="text-content u-font-20">
								升级下一级进度
							</view>
							<view class="u-m-l-20 u-m-r-20 u-p-b-10" style="width: 148upx; ">
								<u-line-progress active-color="#667E86" :percent="70" :round="false" height="8" :show-percent="false"></u-line-progress>
							</view>
							<view class="text-667E86 u-font-20">
								320/500
							</view>
						</view>
						<view class="u-font-20" style="color: #AAADAF;">
							加入时间：2020-5-20 11:33
						</view>
					</view>

					<view class="u-font-22 text-667E86 jus-start u-p-t-10">
						<view class="">
							邀请明细
						</view>
						<view class="">
							<u-icon size="20" color="#667E86" name="arrow-right"></u-icon>
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
				tabList: [{
					"name": "我的直属代理"
				}, {
					"name": "全部代理"
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
			searchStart: function() {
				console.log(this.searchKeyWord)
			},
			tabChange: function(e) {
				this.current = e;
			}
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.text-FF2B22 {
		color: #FF2B22;
	}

	.agent_item_btn {
		font-size: 24upx;
		color: #FEFFFF;
		width: 88upx;
		height: 42upx;
		line-height: 42upx;
		text-align: center;
		border-radius: 4upx;
		background-color: #667E86;
	}

	.agent_item {
		background-color: #fff;
		margin-top: 20upx;
		padding: 30upx;
	}

	.f8_block {
		background-color: #f8f8f8;
		padding: 20upx 0;
		margin: 20upx 0;
	}

	.text-667E86 {
		color: #667E86;
	}

	.f8_item {
		width: 30%;
		text-align: center;
	}
</style>
