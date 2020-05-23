<template>
	<view class="container">
		<view class="address_info_box bgc_fff u-p-l-30 u-p-r-30">
			<view class="address_info_row jus-start u-border-bottom">
				<view class="u-font-28 text-content row_title">
					收货人：
				</view>
				<view class="u-flex-1">
					<input type="text" value="" placeholder="请输入收货人姓名" />
				</view>
			</view>
			<view class="address_info_row jus-start u-border-bottom">
				<view class="u-font-28 text-content row_title">
					手机号码：
				</view>
				<view class="u-flex-1">
					<input type="number" value="" placeholder="请输入手机号" maxlength="11" />
				</view>
			</view>
			<view class="address_info_row jus-spB u-border-bottom">
				<view class="jus-start u-flex-1">
					<view class="u-font-28 text-content row_title">
						所在地区：
					</view>
					<view class="u-font-32 u-flex-1" @click="regionModal = true">
					{{regionText}}

					</view>
				</view>
				<view class="">
					<u-icon name="arrow-right" size="28" color="#999"></u-icon>
				</view>
			</view>
			<view class="address_info_row jus-start u-border-bottom">
				<view class="u-font-28 text-content row_title item_top">
					详细地址：
				</view>
				<view class="u-flex-1 ">
					<textarea value="" placeholder="请输入详细地址" style="width: 100%; height: 100upx;" />
					</view>
			</view>
			<view class="address_info_row jus-spB ">
				<view class="u-font-28 text-content row_title ">
					设为默认：
				</view>
				<view class=" ">
					<u-switch v-model="is_default" size="40"  inactive-color="#D8D8D8"  active-color="#667E86"></u-switch>
				</view>
			</view>
		</view>
		<view class="u-m-t-80" style="width: 690upx;margin: 80upx auto;">
			<u-button shape="square" type="error" :ripple="true" :custom-style="{backgroundColor:'#FF5456'}">保存地址</u-button>
		</view>
		<u-picker mode="region" v-model="regionModal" @confirm="chooseRegion" ></u-picker>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				address_id: null,
				type: '',
				is_default:false,
				regionModal:false,
				regionText:'请选择',
				regionObj:{}
			}
		},
		onLoad: function(e) {
			console.log(e)
			if (e.address_id == "0") {
				this.type = 'add'
			} else {
				this.type = 'edit'
				this.address_id = e.address_id
				uni.setNavigationBarTitle({
					title: '编辑地址'
				});
			}
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
			chooseRegion:function(e){
				
				console.log(e)
				this.regionText=e.province.label+'-'+e.city.label+'-'+e.area.label
				this.regionObj = e
			}
		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.address_info_row {

		padding: 30upx 0;
	}

	.row_title {
		width: 150upx;
	}
	.item_top{
		height: 100upx;
	}
</style>
