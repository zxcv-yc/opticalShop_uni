<template>
	<view class="container">
		<view class="text-bold text-main u-font-40 u-m-l-30 u-p-t-30 u-p-b-30">
			购物车
		</view>
		<view class="u-p-l-30 u-p-r-30">
			<u-notice-bar mode="horizontal" :is-circular="true" :list="noticeList" color="#000" bg-color="#fff" :show="noticeShow"
			 border-radius="999" :close-icon="true" @close="closeNotice" font-size="24"></u-notice-bar>
		</view>
		<u-modal v-model="deleteGoodsModalShow" content="您确定要删除吗" confirm-color="#FC3B00" @confirm="deleteGoods"
		 :show-cancel-button="true"></u-modal>
		<u-checkbox-group @change="checkboxGroupChange" active-color="#FC3B00" size="30">
			<view class="cart_box">
				<view class="cart_item border_radius_10 bgc_fff  jus-spB" v-for="(item,index) in cartList" :key="index">
					<view class="u-m-r-20">
						<u-checkbox @change="checkboxChange" v-model="item.checked" :name="item.id" shape="circle" icon-size="20"></u-checkbox>
					</view>
					<view class="jus-spB">
						<image :src="imgUrl+'images/copy/dssd.png'" mode="aspectFill" style="width: 188upx;height: 152upx;" class="border_radius_10"></image>
						<view class="cart_item_info jus-spB-col">
							<view class="jus-spB">
								<view class="u-font-26 text-main u-line-2 cart_item_title">
									新款美瞳眼睛伴侣套装礼盒 影形彩色隐形眼镜
								</view>
								<view class="" @click.stop="showDeleteGoodsModal()">
									<image :src="imgUrl+'images/delete.png'" mode="widthFix" style="width: 26upx;"></image>
								</view>
							</view>
							<view class="u-font-22 text-tips">
								规格:1副,无彩色
							</view>
							<view class="jus-spB">
								<view class="text-FC3B00">
									<text class="u-font-20">¥</text>
									<text class="u-font-34">28.00</text>
								</view>
								<view class="">
									<u-number-box :input-width="60" :input-height="40" color="#999" @plus="numberChange" :index="item.id"></u-number-box>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-checkbox-group>
		<view class="u-p-l-30  text-bold u-font-36 text-main">
			为您优选
		</view>
		<view class="goods_list jus-spB u-p-t-30 u-p-l-36  u-p-r-36 flex_warp">
			<view class="goods_item bgc_fff border_radius_10 ">
				<view class="">
					<image :src="imgUrl+'images/copy/dssd.png'" mode="aspectFill" style="width: 328upx;height: 260upx;"></image>
				</view>
				<view class="u-p-30">
					<view class="u-font-26 text-main u-line-2 u-m-b-30">
						新款美瞳眼睛伴侣套装礼盒
					</view>
					<view class="text-FC3B00">
						<text class="u-font-20">¥</text>
						<text class="u-font-32">28.00</text>
					</view>
				</view>
			</view>
			<view class="goods_item bgc_fff border_radius_10 ">
				<view class="">
					<image :src="imgUrl+'images/copy/dssd.png'" mode="aspectFill" style="width: 328upx;height: 260upx;"></image>
				</view>
				<view class="u-p-30">
					<view class="u-font-26 text-main u-line-2 u-m-b-30">
						新款美瞳眼睛伴侣套装礼盒
					</view>
					<view class="text-FC3B00">
						<text class="u-font-20">¥</text>
						<text class="u-font-32">28.00</text>
					</view>
				</view>
			</view>
			<view class="goods_item bgc_fff border_radius_10 ">
				<view class="">
					<image :src="imgUrl+'images/copy/dssd.png'" mode="aspectFill" style="width: 328upx;height: 260upx;"></image>
				</view>
				<view class="u-p-30">
					<view class="u-font-26 text-main u-line-2 u-m-b-30">
						新款美瞳眼睛伴侣套装礼盒
					</view>
					<view class="text-FC3B00">
						<text class="u-font-20">¥</text>
						<text class="u-font-32">28.00</text>
					</view>
				</view>
			</view>
			<view class="goods_item bgc_fff border_radius_10 ">
				<view class="">
					<image :src="imgUrl+'images/copy/dssd.png'" mode="aspectFill" style="width: 328upx;height: 260upx;"></image>
				</view>
				<view class="u-p-30">
					<view class="u-font-26 text-main u-line-2 u-m-b-30">
						新款美瞳眼睛伴侣套装礼盒
					</view>
					<view class="text-FC3B00">
						<text class="u-font-20">¥</text>
						<text class="u-font-32">28.00</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom_bar jus-spB bgc_fff">
			<view class="" @click="allChecked">
				<view class="u-p-15 jus-spB">
					<view class="">
						<image :src="checkImgUrl" mode="widthFix" style="width: 30upx;"></image>
					</view>
					<view class="u-font-28 text-tips u-m-l-15">
						全选
					</view>
				</view>
			</view>
			<view class="jus-end">
				<view class="text-tips u-font-24">
					共<text class="text-FC3B00">3</text>件，合计：<text class="text-FC3B00">¥</text><text class="text-FC3B00 u-font-34">28.00</text>
				</view>
				<view class="settlement_btn">
					结算
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
				noticeShow: true,
				che: true,
				deleteGoodsModalShow: false,
				noticeList: [
					"关于 xxxx产品完税订单更改地址更新说明 通知",
					"关于 xxxx产品完税订单更改地址更新说明 通知"
				],
				checkImgUrl: http.imgUrl+'images/check.png',
				cartList: [{
						img: http.imgUrl+'images/copy/dssd.png',
						id: '11',
						checked: false,
					},
					{
						img:http.imgUrl+'images/copy/dssd.png',
						id: '12',
						checked: false,
					},
					{
						img:http.imgUrl+'images/copy/dssd.png',
						id: '13',
						checked: false,
					}
				]
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
			//关闭滚动通知
			closeNotice: function() {
				this.noticeShow = false
			},
			checkboxGroupChange: function(e) {
				console.log(e)
				console.log(this.cartList)
			},
			checkboxChange: function(e) {
				// console.log(e)
			},
			//单个步进器监听
			numberChange: function(e) {
				console.log(e)
			},
			showDeleteGoodsModal: function() {
				this.deleteGoodsModalShow = true
			},
			deleteGoods: function() {
				console.log('点击确定')
			},
			allChecked: function() {
				console.log('点击')
				this.checkImgUrl = this.imgUrl+'images/check_a.png'
			},
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.cart_box {
		padding: 30upx;
	}

	.cart_item {
		padding: 30upx 20upx;
		margin-bottom: 30upx;
	}

	.cart_item_info {
		width: calc(100% - 218upx);
	}

	.cart_item_title {
		width: calc(100% - 42upx);
	}

	.text-FC3B00 {
		color: #FC3B00;
	}

	.bottom_bar {
		padding: 20upx;
		width: 100%;
		position: fixed;
		bottom:50px;
	}

	.settlement_btn {
		line-height: 66upx;
		width: 192upx;
		border-radius: 999px;
		color: #fff;
		background-color: #FE464A;
		font-size: 32upx;
		text-align: center;
		margin-left: 30upx;
	}

	.goods_list {
		padding-bottom: 130upx !important;
	}

	.goods_item {
		width: 328upx;
		overflow: hidden;
		margin-bottom: 20upx;
	}
</style>
