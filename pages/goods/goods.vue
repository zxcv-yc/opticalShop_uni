<template>
	<view class="container">
		<view class="u-wrap">
			<view class="u-search-box">
				<u-search shape="square" :clearabled="true" :show-action="false" input-align="center" v-model="searchKeyWord"
				 placeholder="搜索商家或商品名称" @search="searchStart"></u-search>
			</view>
		</view>
		<!-- <u-sticky h5-nav-height="0" bg-color="#fff"> -->
		<view class="jus-spB screen_bar_box  bgc_fff">
			<view class="screen_bar_item" :class="screenIndex==1?'screen_bar_item_a':''" @click="screenToggle(1)">
				综合
			</view>
			<view class="screen_bar_item" :class="screenIndex==2?'screen_bar_item_a':''" @click="screenToggle(2)">
				最新
			</view>
			<view class="screen_bar_item" :class="screenIndex==3?'screen_bar_item_a':''" @click="screenToggle(3)">
				销量
			</view>
			<view class="screen_bar_item jus-start" :class="screenIndex==4?'screen_bar_item_a':''" @click="screenToggle(4)">
				<view class="">
					价格
				</view>
				<view class="u-m-l-15">
					<view class="" style="">
						<u-icon name="arrow-up-fill" size="16" :color="price==2?'#FF514E':'#999'"></u-icon>
					</view>
					<view class="" style="margin-top: -20upx;">
						<u-icon name="arrow-down-fill" size="16" :color="price==1?'#FF514E':'#999'"></u-icon>
					</view>
				</view>
			</view>
			<view class="screen_bar_item" :class="screenIndex==5?'screen_bar_item_a':''" @click="screenToggle(5)">
				<image :src="imgUrl+'images/list.png'" mode="widthFix" style="width: 30upx;"></image>
			</view>
		</view>
		<!-- </u-sticky> -->
		<u-popup v-model="screenModalShow" mode="right" close-icon-pos="bottom-right" :closeable="true">
			<view class="screen_modal">筛选条件</view>
		</u-popup>
		<view class="goods_list">
			<view class="goods_item jus-spB u-border-bottom" v-for="(item,index) in goodsList" :key="index">
				<image :src="imgUrl+item.thumb" mode="aspectFill"></image>
				<view class="goods_item_info jus-spB-col">
					<view class="u-font-28 u-line-2">
						{{item.title}}
					</view>
					<view class="u-font-22" style="color: #B8B8B8;">
						{{item.subtitle}}
					</view>
					<view class="">
						<u-tag text="IVHOICE" type="" size="mini" color="#A79A86" bg-color="#F7F6DD" />
					</view>
					<view class="jus-spB">
						<view class="text-FC3B00">
							<text class="u-font-22">¥</text>
							<text class="u-font-34">{{item.marketprice}}</text>
						</view>
						<view class="u-m-r-30">
							<image :src="imgUrl+'images/cart.png'" mode="widthFix" style="width: 50upx;"></image>
						</view>
					</view>
				</view>
			</view>

		</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				status: 'loadmore', //列表底部加载状态
				searchKeyWord: '',
				screenIndex: 1,
				pNum: 1, //页码
				sellnum: '', //销量
				new: '', //最新
				price: '', //价格
				screenModalShow: false,
				userInfo: null,
				goodsList: []
			}
		},
		onLoad: function() {
			this.userInfo = uni.getStorageSync('userInfo')
			this.allRequest()
			console.log(this.userInfo)
		},
		onShow: function() {

		},
		onPullDownRefresh: function() {

			// uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {
			if (this.status !== 'nomore') {
				++this.pNum
				this.getGoodsList()
			}
		},
		methods: {
			allRequest: function() {
				this.getGoodsList()
			},
			getGoodsList: function() {
				this.status = 'loading';
				uni.showLoading({
					title: '加载中'
				})
				let _this = this
				http.ajax({
					method: 'POST',
					url: 'GetGoodsList',
					data: {
						uid: _this.userInfo.uid,
						page: _this.pNum,
						sellnum: _this.sellnum,
						price: _this.price,
						new: _this.new,
						keywords:_this.searchKeyWord
					},
					success: function(res) {
						let r = JSON.parse(res)
						if (r.errno == 0) {
							let data = JSON.parse(res).data
							if (_this.pNum == 1) {
								_this.goodsList = []
							}
							if (data.list.length < 1) {
								_this.status = 'nomore';
							} else {
								_this.status = 'loadmore';
							}
							_this.goodsList = _this.goodsList.concat(data.list)
							console.log(data)
						}
						uni.hideLoading()
					}
				})
				
			},
			//搜索
			searchStart: function() {
				console.log(this.searchKeyWord)
				this.pNum = 1
				this.status = 'loadmore'
				this.getGoodsList()
			},
			screenToggle: function(e) {


				switch (e) {
					case 1:
						this.price = this.sellnum = this.new = ''
						break;
					case 2:
						this.price = this.sellnum = this.new = ''
						this.new = 1
						break;
					case 3:
						this.price = this.sellnum = this.new = ''
						this.sellnum = 1;
						break;
					case 4:
						this.sellnum = this.new = ''
						console.log(typeof(this.price))
						console.log(this.price == '1')
						console.log(this.price)

						this.price = (this.price == '1' ? 2 : 1)
						break;
					case 5:
						this.screenModalShow = true
						break;
					default:

				}
				this.pNum = 1
				this.status = 'loadmore'
				this.screenIndex = e
				this.getGoodsList()
			}
		}
	}
</script>

<style>
	.screen_bar_box {
		padding: 30upx 40upx;
		/* z-index: 1077; */
		/* position: relative; */
	}

	.screen_bar_item_a {
		color: #FF514E;
	}

	.text-FC3B00 {
		color: #FC3B00;
	}

	.screen_modal {
		padding: 80upx 30upx;
	}

	.goods_list {
		padding: 30upx;
	}

	.goods_item {
		padding-bottom: 30upx;
		border-bottom: 1upx solid #EDEDED;
		margin-bottom: 30upx;
	}

	.goods_item image {
		width: 220upx;
		height: 220upx;
		border-radius: 10upx;
	}

	.goods_item_info {
		width: calc(100% - 240upx);
		height: 220upx;
	}
</style>
<style lang="scss" scoped>
	.u-search-box {
		padding: 18rpx 30rpx;
	}
</style>
