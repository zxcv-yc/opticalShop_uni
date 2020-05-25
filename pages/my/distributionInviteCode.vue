<template>
	<view class="container">
		
		<u-popup v-model="shareModal" mode="bottom" border-radius="60" z-index="999989" :mask="false">
			<view class=" top_box jus-center">
				<view class="">
					<image :src="imgUrl+'images/dengpao.png'" mode="widthFix" style="width: 42upx;height: auto;"></image>
				</view>
				<view class="text-main u-font-26 u-m-l-20">
					长按图片分享给朋友
				</view>
			</view>
			<view class="share_modal u-p-l-50 u-p-r-50 u-p-b-30 u-p-t-30">
				
				<view class="jus-start">
					<image :src="imgUrl+'images/zopy/list_head.png'" mode="aspectFill" style="width: 124upx;height: 124upx;" class="border_radius_999"></image>
					<view class="u-m-l-30">
						<view class="u-font-30 u-m-b-15" style="color: #545353;">
							店铺名字
						</view>
						<view class="jus-start">
							<view class="jus-start">
								<image :src="imgUrl+'images/check_green.png'" mode="aspectFill" style="width: 23upx;height: 23upx;"></image>
								<view class="u-font-20 u-m-l-10" style="color: #808080;">
									品质担保
								</view>
							</view>
							<view class="jus-start u-m-l-30">
								<image :src="imgUrl+'images/check_green.png'" mode="aspectFill" style="width: 23upx;height: 23upx;"></image>
								<view class="u-font-20 u-m-l-10" style="color: #808080;">
									售后无忧
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="u-p-t-40 u-p-b-60" style="margin: 0 auto;">
					<image :src="imgUrl+'images/qrcode.png'" mode="aspectFill" style="width: 380upx;height: 380upx;margin: 0 auto;"></image>
				</view>
				<view class="jus-start">
					<image :src="imgUrl+'images/shop_info_bg.png'" mode="aspectFill" style="width: 124upx;height: 124upx;" class="border_radius_999"></image>
					<view class="u-m-l-30">
						<view class="u-font-30 u-m-b-15" style="color: #545353; ">
							您的好友小张：
						</view>
						<view class="jus-start u-font-22" style="color: #545353;">
							向您推荐一家好店，快点扫描上方二维码可查看吧
						</view>
					</view>
				</view>
				<view class="u-p-t-60 ">
					<view class="u-font-22 u-m-b-10" style="color: #758C94;line-height: 36upx;" v-for="(item,index) in list" :key="index" >
						{{index+1}}、{{item.text}}
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				shareModal: false,
				list: [{
					text: '长按图片或者截图 分享给朋友'
				}, {
					text: '您的好友通过你分享后购买任何产品，您都会有佣金分成'
				}, {
					text: '以最早发展客户为准，您的好友一旦绑定则该好友即绑定于您账户下。'
				}, {
					text: '成为代理后您为您上家分销的功能会关闭，但不影响您的下线为您分销。真正成为代理后拥有自己的店铺，不在为其他用户分销* '
				}]
			}
		},
		onLoad: function() {

			this.allRequest()
		},
		onShow: function() {
			this.shareModal = true
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
			}
		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.top_box {
		padding: 20upx 30upx;
		/* box-shadow: 4upx 0 10upx rgba(100, 99, 99, .45); */
	}
</style>
