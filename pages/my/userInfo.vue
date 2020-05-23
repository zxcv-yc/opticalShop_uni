<template>
	<view class="container">
		<view class="top_box" :style="'background-image: url('+imgUrl+'images/my/img15.png);'">
			<view class="jus-start u-p-t-40 u-p-l-30 ">
				<navigator open-type="navigateBack" hover-class="none">
					<image :src="imgUrl+'images/my/back.png'" mode="widthFix" style="width: 32upx;"></image>
				</navigator>
			</view>
			<view class="jus-center user_img_big_box">
				<view class="">
					<view class="" style="position: relative;">
						<view class="user_img_box">
							<image :src="imgUrl+'images/copy/list_head.png'" mode="aspectFill" style="width: 156upx;height: 156upx;border-radius: 999px;"></image>
						</view>
						<view class="edit_img" @click="editUserImg">
							<image :src="imgUrl+'images/my/bianji.png'" mode="aspectFit" style="width: 48upx;height: 48upx;"></image>
						</view>
					</view>
					<view class="u-font-36 text-fff u-m-t-20 u-bold-border u-text-center">把酒话东风</view>
				</view>
			</view>
		</view>
		<view class="row_list u-p-l-30 u-p-r-30">
			<view class="row_item u-p-t-30 u-p-b-30 u-border-bottom jus-spB">
				<view class="row_title text-tips">
					ID:
				</view>
				<view class="u-flex-1">
					<input type="text" value="" placeholder="id" placeholder-style="color:#ccc;" />
				</view>
			</view>
			<view class="row_item u-p-t-30 u-p-b-30 u-border-bottom jus-spB">
				<view class="row_title text-tips">
					昵称:
				</view>
				<view class="u-flex-1">
					<input type="text" value="" placeholder="请输入昵称" placeholder-style="color:#ccc;" />
				</view>
			</view>
			<view class="row_item u-p-t-30 u-p-b-30 u-border-bottom jus-spB">
				<view class="row_title text-tips">
					姓名:
				</view>
				<view class="u-flex-1">
					<input type="text" value="" placeholder="请输入您的姓名" placeholder-style="color:#ccc;" />
				</view>
			</view>
			<view class="row_item u-p-t-30 u-p-b-30 u-border-bottom jus-spB">
				<view class="row_title text-tips">
					QQ：
				</view>
				<view class="u-flex-1">
					<input type="text" value="" placeholder="请输入您的QQ号" placeholder-style="color:#ccc;" />
				</view>
			</view>
			<view class="row_item u-p-t-30 u-p-b-30 u-border-bottom jus-spB">
				<view class="row_title text-tips">
					微信：
				</view>
				<view class="u-flex-1 text-main">
					<text>188888888888</text><text style="color: #FF4D4D;">(已绑定)</text>
				</view>
				<view class="jus-end">
					<view class="u-font-26" style="color: #667E86;">
						更换
					</view>
					<view class="u-m-l-5">
						<u-icon name="arrow-right" size="20" color="#667E86"></u-icon>
					</view>
				</view>
			</view>
			<view class="row_item u-p-t-30 u-p-b-30 u-border-bottom jus-spB">
				<view class="row_title text-tips">
					手机号：
				</view>
				<view class="u-flex-1">
					<input type="text" value="" placeholder="请输入您的手机号" placeholder-style="color:#ccc;" />
				</view>
			</view>
			<view class="row_item u-p-t-30 u-p-b-30 u-border-bottom jus-spB">
				<view class="row_title text-tips">
					出生日期：
				</view>
				<view class="u-flex-1">
					<input type="text" value="" placeholder="请输入您的出生日期" placeholder-style="color:#ccc;" />
				</view>
			</view>
			<view class="row_item u-p-t-30 u-p-b-30 u-border-bottom jus-spB">
				<u-picker mode="region" v-model="showRegion" @confirm="chooseRegion"></u-picker>
				<view class="row_title text-tips">
					所在地区：
				</view>
				<view class="u-flex-1 u-font-33" :class="isChoose?'text-main':'text-ccc'" @click="showRegionModal">
					{{regionText}}
				</view>
				<view class="u-m-l-5">
					<u-icon name="arrow-right" size="20" color="#667E86"></u-icon>
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
				showRegion: false,
				isChoose: false,
				regionText: '请选择所在地区',
				regionObj:{}
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
			editUserImg: function() {
				console.log('更换用户头像')
			},
			showRegionModal: function() {
				this.showRegion = true
			},
			chooseRegion: function(e) {
				this.regionText = e.province.label + "-" + e.city.label + "-" + e.area.label
				this.isChoose = true
				this.regionObj = e
				console.log(e)
			}
		}
	}
</script>

<style>
	.top_box {
		background-size: 100% 100%;
		width: 100%;
		height: 364upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

	}

	.user_img_big_box {
		height: 292upx;
		position: relative;
	}

	.user_img_box {
		border-radius: 999px;
		overflow: hidden;
		margin: 0 auto;
		border: 4upx solid #dbdbdb;
		width: 156upx;
		height: 156upx;
		position: relative;
	}

	.edit_img {
		position: absolute;
		bottom: 5upx;
		right: 10upx;
	}

	.row_title {
		width: 160upx;
		font-size: 30upx;
	}

	.row_title input {
		font-size: 30upx;
	}

	.text-ccc {
		color: #ccc;
	}
</style>
