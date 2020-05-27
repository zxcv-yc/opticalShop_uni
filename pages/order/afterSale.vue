<template>
	<view class="container">
		<view class="bgc_fff jus-spB u-p-30 u-m-t-20">
			<image :src="imgUrl+'images/copy/list_head.png'" mode="aspectFill" style="width: 134upx;height: 134upx;" class="border_radius_10"></image>
			<view class="u-font-26" style="height: 134upx;width: calc(100% - 164upx);">
				日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径
			</view>
		</view>
		<view class="bgc_fff  u-p-l-30 u-p-r-30 u-m-t-20">
			<view class="picker_row jus-spB u-font-28 u-p-t-30 u-p-b-30 u-border-bottom">
				<view class="u-main-color">
					货物状态
				</view>
				<view class="text-tips jus-end">
					<view class="">
						请选择
					</view>
					<view class="u-m-l-15">
						<u-icon name="arrow-right" size="28" color="#999"></u-icon>
					</view>
				</view>
			</view>
			<view class="picker_row jus-spB u-font-28 u-p-t-30 u-p-b-30">
				<view class="u-main-color">
					货物状态
				</view>
				<view class="text-tips jus-end">
					<view class="">
						<picker @change="statusPicker" :value="0" :range="statusArr" range-key="text">
							<view class="uni-input">{{statusIndex!=null?statusArr[statusIndex].text:'请选择'}}</view>
						</picker>
					</view>
					<view class="u-m-l-15">
						<u-icon name="arrow-right" size="28" color="#999"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="bgc_fff  u-p-30 u-m-t-20">
			<view class="jus-spB">
				<view class="u-font-28 text-main">
					退款金额:
				</view>
				<view class="u-m-l-20 u-flex-1">
					<input type="text" value="¥ 99.90" disabled="true" style="font-size: 28upx; color: #F35E5E;" />
				</view>
			</view>
			<view class="u-font-24 text-tips u-p-t-30 u-p-b-30">
				不可修改,最多17.31,含发货邮费¥ 0.00
			</view>
			<view class="jus-spB">
				<view class="u-font-28 text-main">
					退款说明：
				</view>
				<view class="u-m-l-20 u-flex-1">
					<input type="text" placeholder="选填" style="font-size: 28upx;" />
				</view>
			</view>
		</view>
		<view class="bgc_fff  u-p-30 u-m-t-20">
			<view class="u-font-28 text-main">
				上传凭证
			</view>
			<view class="jus-start">
				<view class="u-m-t-20 " @click="upLoadImg" v-if="imgList.length<3">
					<image :src="imgUrl+'images/upimg.png'" mode="aspectFill" style="width: 120upx;height: 120upx;"></image>
				</view>
				<view class="jus-start u-p-t-15" v-if="imgList.length">
					<view class="u-m-l-20 border_radius_10 border_1" v-for="(item,index) in imgList" :key="index">
						<image :src="imgUrl+item" mode="aspectFill" style="width: 120upx;height: 120upx;" class="border_radius_10"></image>
						<view class="deleteUpImgBtn" @click="deleteUpImg(index)">
							删除
						</view>
					</view>
				</view>
				<view class="u-m-l-20 u-font-24" style="color: #A4B1B5;" v-else>
					点击上传凭证(最多3张)
				</view>
			</view>
		</view>
		<view class="bottom_btn">
			<u-button  :custom-style="btnStyle" :ripple="true" >提交</u-button>
		</view>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	import jwx from '../../common/node_modules/jweixin-module/lib/index.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				btnStyle: {
					backgroundColor: '#667E86',
					fontSize: '32upx',
					color: '#fff',
					height: '90upx',
					// borderColor: '#667E86',
					border:0,
					// borderRadius: 0,
				},
				status_arr: ['1', '2', '3'],
				statusIndex: null,
				imgList: ['images/copy/list_head.png', 'images/copy/list_head.png'],

				statusArr: [{
					id: 1,
					text: '第一个'
				}, {
					id: 2,
					text: '第二个'
				}, {
					id: 3,
					text: '第三个'
				}, {
					id: 4,
					text: '第四个'
				}],

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
				http.ajax({
					method: 'POST',
					url: '',
					data: {

					},
					success: function(res) {
						let r = JSON.parse(res)
						if (r.errno == 0) {
							let data = JSON.parse(res).data
							console.log(data)
						} else {

						}
						uni.hideLoading()
					}
				})

			},
			upLoadImg: function() {
				let _this = this
				if (this.$wechat && this.$wechat.isWechat()) {
					this.$wechat.initJssdk(function(res) {
						jwx.ready(function() {


							jwx.chooseImage({
								count: 3, // 默认9
								sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
								sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
								success: function(res) {
									var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
									// console.log(localIds)
									var uploadCount = 0;
									var localIdLength = localIds.length;
									var upload = function() {
										console.log('uoload执行')
										// 2.上传图片
										jwx.uploadImage({
											localId: localIds[uploadCount], //选择的图片标识
											success: function(upres) {
												http.ajax({
													method: 'POST',
													url: 'WechatPic',
													data: {
														serverId: upres.serverId
													},
													success: function(result) {
														let r = JSON.parse(result)
														if (r.errno == 0) {
															_this.imgList.push(r.data)
														} else {

														}
													}
												})
												console.log(upres.serverId)

												//如果还有照片，继续上传
												uploadCount++;
												if (uploadCount < localIdLength) {
													upload();
												}
											},
											fail: function(res) {
												alert(JSON.stringify(res));
											}
										});
									};
									//循环上传
									upload();
								},
								fail: function(res) {
									alert(JSON.stringify(res));

								}
							});
							// console.log(res)

						})

					})
				}
			},
			statusPicker: function(e) {
				this.statusIndex = e.detail.value
				console.log(e)
			},
			deleteUpImg: function(e) {
				let _this = this
				uni.showModal({
					title: '提示',
					content: '您确定要删除此图片吗？',
					success: function(res) {
						if (res.confirm) {
							_this.imgList.splice(e, 1)
						}
					}
				});
			}
		},

	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.input-placeholde {
		line-height: 100%;
		color: #999;
		font-size: 28upx;
	}

	.border_1 {
		position: relative;
		border: 1upx dashed #979797;
	}

	.deleteUpImgBtn {
		color: #fff;
		text-align: center;
		line-height: 40upx;
		font-size: 24upx;
		position: absolute;
		bottom: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, .5);
		border-radius: 0 0 10upx 10upx;
		box-sizing: border-box;
	}
	.bottom_btn{
		position: fixed;
		bottom: 40upx;
		width: 90%;
		left: 5%;
	}
</style>
