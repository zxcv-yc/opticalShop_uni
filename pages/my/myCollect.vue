<template>
	<view class="container">
		<view class="jus-spB navBar">
			<view class="" style="width: 110upx;">
				<u-icon name="arrow-left" size="32" color="#060606" @click="goBack"></u-icon>
			</view>
			<view class="u-font-36 text-bold u-text-center">
				我的关注
			</view>
			<view class="jus-end" style="width: 110upx;">
				<view class="">
					<u-icon name="search" size="32" color="#3A3A3A"></u-icon>
				</view>
				<view class="u-font-28 text-main u-m-l-20" @click="showEdit">
					{{edit?'取消':'管理'}}
				</view>
			</view>
		</view>
		<view class="tabs">
			<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="tabChange" bg-color="#fff" active-color="#FB484F"
			 height="100" :bold="false" bar-width="54" bar-height="6"></u-tabs>
		</view>
		<u-checkbox-group @change="checkboxGroupChange" active-color="#FC3B00" size="30">
			<view class="goods_list u-p-30 ">
				<view class="goods_item jus-spB u-border-bottom u-p-b-30 u-p-t-30" v-for="(item,index) in tabList" :key="index">
					<view class="u-m-r-20">
						<u-checkbox @change="checkboxChange" v-model="item.checked" :name="item.id" shape="circle" icon-size="20" v-if="edit"></u-checkbox>
					</view>
					<view class="">
						<image src="../../static/images/copy/dssd.png" mode="aspectFill" style="width: 180upx;height: 180upx;"></image>
					</view>
					<view class="goods_item_info jus-spB-col" :class="edit?'width_edit':'width_noedit'">
						<view class="text-main u-font-26 u-line-2">
							日本美瞳日抛Flanmy隐形眼镜近视桥本环奈自然大直径
						</view>
						<view class="u-font-22" style="color: #AAACB1;">
							182人收藏 | 96人推荐
						</view>
						<view class="jus-spB">
							<view class="u-font-24 text-F25050">
								<text class="u-font-24">¥ </text><text class="u-font-32">16.00</text>
							</view>
							<view class="">
								<image src="../../static/images/cart.png" mode="aspectFill" style="width: 50upx;height: 50upx;"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-checkbox-group>
		<view class="bottom_bar" v-if="edit">
			删除
		</view>
	</view>



</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				edit: false,
				tabList: [{
					"name": "单品"
				}, {
					"name": "品牌"
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
			tabChange: function(e) {
				this.current = e;
			},
			// hideEdit: function() {
			// 	this.edit = false
			// },
			showEdit: function() {
				this.edit = !this.edit
			},
			goBack:function(){
				uni.navigateBack({
					delta:1
				})
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

	.width_edit {
		width: calc(100% - 260upx);
	}

	.width_noedit {
		width: calc(100% - 210upx);
	}

	.goods_item_info {
		/* width: calc(100% - 210upx); */
		/* width: calc(100% - 260upx); */
		height: 180upx;
	}


	.goods_list {
		padding-top: 0 !important;
	}

	.bottom_bar {
		line-height: 80upx;
		width: 100%;
		color: #fff;
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #FF2B22;
	}
</style>
