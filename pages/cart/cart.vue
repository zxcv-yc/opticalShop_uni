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
		<u-checkbox-group @change="checkboxGroupChange" active-color="#FC3B00" size="30" style="width: 100%;">
			<view class="cart_box" v-if="cartList.length" style="width: 100%;">
				<view class="cart_item border_radius_10 bgc_fff  jus-spB" v-for="(item,index) in cartList" :key="index">
					<view class="u-m-r-20">
						<u-checkbox @change="checkboxChange" v-model="item.checked" :name="item.id" shape="circle" icon-size="20"></u-checkbox>
					</view>
					<view class="jus-spB u-flex-1">
						<image :src="imgUrl+item.thumb" mode="aspectFill" style="width: 188upx;height: 152upx;" class="border_radius_10"></image>
						<view class="cart_item_info jus-spB-col ">
							<view class="jus-spB">
								<view class="u-font-26 text-main u-line-2 cart_item_title" style="height: 64upx;">
									{{item.title}}
								</view>
								<view class="" @click.stop="showDeleteGoodsModal()">
									<image :src="imgUrl+'images/delete.png'" mode="widthFix" style="width: 26upx;"></image>
								</view>
							</view>
							<view class="u-font-22 text-tips">
								规格:{{item.title}}
							</view>
							<view class="jus-spB">
								<view class="text-FC3B00">
									<text class="u-font-20">¥</text>
									<text class="u-font-34">{{item.marketprice}}</text>
								</view>
								<view class="">
									<u-number-box :input-width="60" :input-height="40" color="#999" @plus="numberChange" :index="index" :value="item.total"></u-number-box>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

		</u-checkbox-group>

		<view class="u-p-l-30  text-bold u-font-36 text-main" v-if="cartList.length">
			为您优选
		</view>
		<view class="cart_none " v-else>
			<image :src="imgUrl+'images/cart_none.png'" mode="widthFix" style="width: 560upx;height: auto;margin: 30upx auto;"></image>
			<view class="u-font-28 u-text-center" style="color: #5E6060;">
				购物车这么空,感觉整个人都不好了
			</view>
			<view class="" style="margin: 0 auto; margin-top: 80upx;">
				<u-button :ripple="true" shape="circle" :custom-style="{width:'212upx',height:'66upx',color:'#5E6060',fontSize:'28upx',backgroundColor:'#ededed'}">信息按钮</u-button>
			</view>
		</view>
		<view class="goods_list jus-spB u-p-t-30 u-p-l-36  u-p-r-36 flex_warp" v-if="cartList.length">
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
				userInfo: null,
				noticeList: [
					"关于 xxxx产品完税订单更改地址更新说明 通知",
					"关于 xxxx产品完税订单更改地址更新说明 通知"
				],
				checkImgUrl: http.imgUrl + 'images/check.png',
				// cartList: []
				cartList: [{
					checked: true,
					total: '3',
					marketprice: '99.80'
				}, {
					checked: false,
					total: '3',
					marketprice: '99.80'
				}, {
					checked: true,
					total: '2',
					marketprice: '30'
				}, {
					checked: true,
					total: '4',
					marketprice: '19.90'
				}]
			}
		},
		onLoad: function() {
			// console.log(this.getTotalPrice())
			console.log(this.$fun.accMul('3', '2.00'))
			this.userInfo = uni.getStorageSync('userInfo')
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
				this.getMemberCart()
			},
			getMemberCart: function() {
				uni.showLoading({
					title: '加载中'
				})
				let _this = this
				http.ajax({
					method: 'POST',
					url: 'MemberCartInfo',
					data: {
						uid: _this.userInfo.uid
					},
					success: function(res) {
						let r = JSON.parse(res)
						if (r.errno == 0) {
							let data = JSON.parse(res).data
							_this.cartList = data
							console.log(data)
						}
						uni.hideLoading()
					}
				})
			},
			//关闭滚动通知
			closeNotice: function() {
				this.noticeShow = false
			},
			checkboxGroupChange: function(e) {
				console.log(e)
				console.log(this.cartList)
				console.log(this.getTotalPrice())
			},
			checkboxChange: function(e) {
				// console.log(e)
			},
			//单个步进器监听
			numberChange: function(e) {
				console.log(e)
				this.cartList[e.index].total = e.value
			},
			showDeleteGoodsModal: function() {
				this.deleteGoodsModalShow = true
			},
			deleteGoods: function() {
				console.log('点击确定')
			},
			allChecked: function() {
				console.log('点击')
				this.checkImgUrl = this.imgUrl + 'images/check_a.png'
			},

			//取选中的对象
			getTotalPrice: function() {
				let t = this.cartList.filter(item => {
					return item.checked
				}).map(function(i) {
					return this.$fun.accMul(i.total, i.marketprice)
				}).reduce(function(preValue, n) {
					return this.$fun.accAdd(preValue, n)
				}, 0)
				return t
			}
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
		bottom: 50px;
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
