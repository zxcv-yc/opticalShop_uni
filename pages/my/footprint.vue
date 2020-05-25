<template>
	<view class="container">
		<view class="jus-spB navBar bgc_fff">
			<view class="" style="width: 110upx;">
				<u-icon name="arrow-left" size="32" color="#060606" @click="goBack"></u-icon>
			</view>
			<view class="u-font-36 text-bold u-text-center">
				我的足迹
			</view>
			<view class="jus-end" style="width: 110upx;">
				<view class="u-font-28 text-main u-m-l-20" @click="showEdit">
					{{edit?'取消':'管理'}}
				</view>
			</view>
		</view>
		<view class="">
			<zzx-calendar @selected-change="datechange" :dotList="doList" :dotStyle="{background: '#ED0330',borderRadius:'50%'}"></zzx-calendar>
		</view>
		<u-checkbox-group @change="checkboxGroupChange" size="30" style="width: 100%;" active-color="#FE98AE">
			<view class="goods_list flex_warp jus-start" style="width: 100%;">
				<view class="goods_item bgc_fff border_radius_10" v-for="(item,index) in doList " :key="index">
					<image :src="imgUrl+'images/copy/cdjh.png'" mode="aspectFill" style="width: 100%; height: 220upx;"></image>
					<view class="jus-spB u-p-l-10 u-p-r-10 u-p-b-20 u-p-t-40">
						<view class="text-FC3B00">
							<text class="u-font-22">¥</text>
							<text class="u-font-30">19.90</text>
						</view>
						<view class="" v-if="!edit">
							<u-icon name="more-dot-fill" color="#666"></u-icon>
						</view>
						<view class="" v-else>
							<u-checkbox v-model="ce" :name="item.date" shape="circle"></u-checkbox>
						</view>
					</view>
				</view>
			</view>
		</u-checkbox-group>
		<view class="bottom_btn" v-if="edit">
			<u-button shape="circle" type="error" :ripple="true" :loading="btmnLoading">删除</u-button>
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	import zzxCalendar from "@/components/zzx-calendar/zzx-calendar.vue"
	export default {
		components: {
			zzxCalendar
		},
		data() {
			return {
				imgUrl: http.imgUrl,
				edit: false,
				btmnLoading: false,
				ce: false,
				doList: [{
					date: '2020-05-18',
					xxx: 'xxx'
				}, {
					date: '2020-05-20',
					xxx: 'xxx'
				}, {
					date: '2020-04-28',
					xxx: 'xxx'
				}, {
					date: '2020-04-28',
					xxx: 'xxx'
				}],
				imgWidHei: {
					width: '',
					sheight: ''
				},
				checkboxGroupChange: function(e) {
					console.log(e)
				}
			}
		},
		onLoad: function() {

			this.allRequest()
		},
		onShow: function() {

		},
		onReady: function() {

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
			showToast: function(title, type, url, param) {
				this.$refs.uToast.show({
					title: title,
					type: type,
					url: url,
					param: param
				})
			},
			datechange: function(e) {
				console.log(e);
				this.showToast(e.fullDate, 'warning')
			},
			showEdit: function() {
				this.edit = !this.edit
			}
		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}


	.text-FC3B00 {
		color: #FC3B00;
	}

	.goods_list {
		/* padding: 0 20upx; */
		padding-bottom: 90upx;
	}

	.goods_item {
		width: calc(calc(100% / 3) - 20upx);
		margin: 10upx;
		overflow: hidden;
	}

	.bottom_btn {
		width: 90%;
		position: fixed;
		bottom: 30upx;
		left: 5%;
	}
</style>
