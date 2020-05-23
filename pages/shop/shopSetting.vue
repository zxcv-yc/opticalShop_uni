<template>
	<view class="container">
		<view class="shop_setting_list u-p-t-20">
			<view class="shop_setting_item u-p-30 jus-spB u-border-bottom bgc_fff" v-for="(item,index) in settingList" :key="index" @click="goPage(item.url)">
				<view class="jus-start">
					<view class="">
						<image :src="item.img" mode="widthFix" style="width: 34upx;height:auto"></image>
					</view>
					<view class="u-font-30 text-main u-m-l-20">
						{{item.name}}
					</view>
				</view>
				<view class="">
					<u-icon name="arrow-right" size="24" color="#666"></u-icon>
				</view>
			</view>
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
				settingList: [{
					img: http.imgUrl+'images/shopSetting3.png',
					name: '基本设置',
					url: 'null'
				}, {
					img: http.imgUrl+'images/shopSetting4.png',
					name: '商品管理',
					url: 'null'
				}, {
					img: http.imgUrl+'images/shopSetting3.png',
					name: '基本设置',
					url: 'null'
				}, {
					img: http.imgUrl+'images/shopSetting5.png',
					name: '分销管理',
					url: 'null'
				}, {
					img: http.imgUrl+'images/shopSetting7.png',
					name: '门槛设置',
					url: './thresholdSetting'
				}, {
					img: http.imgUrl+'images/shopSetting8.png',
					name: '营销活动',
					url: 'null'
				}, {
					img: http.imgUrl+'images/shopSetting6.png',
					name: '评价管理',
					url: 'null'
				}, {
					img: http.imgUrl+'images/shopSetting2.png',
					name: '文案管理',
					url: 'null'
				}, {
					img: http.imgUrl+'images/shopSetting1.png',
					name: 'SEO设置',
					url: 'null'
				}]
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
			showToast: function(title, type, url, param) {
				this.$refs.uToast.show({
					title: title,
					type: type,
					url: url,
					param: param
				})
			},
			goPage: function(e) {
				if (e == 'null') {
					this.showToast('开发中', 'info')
				} else {
					uni.navigateTo({
						url: e
					})
				}
			},
		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}
</style>
