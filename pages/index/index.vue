<template>
	<view class="container">
		<view class="jus-spB u-p-30">
			<view class="jus-start">
				<image :src="imgUrl + 'tabBar/shouye-a.png'" mode="widthFix" style="width: 40upx;height: auto;"></image>
				<view class="text-content u-font-sm u-m-l-20">花花美瞳店铺</view>
			</view>
			<view class="jus-start">
				<view class="jus-center border_radius_999 search_box">
					<image :src="imgUrl + 'images/search_icon.png'" mode="widthFix" style="width: 24upx;"></image>
					<view class="u-font-sm text-content u-m-l-20">搜索</view>
				</view>
				<view class="u-m-l-20" @click="showShareModalFun">
					<image :src="imgUrl + 'images/fenxiang.png'" mode="aspectFit" style="width: 36upx;height: 36upx;"></image>
				</view>
			</view>
		</view>
		<view class="">
			<u-swiper :list="swiperList" height="600" border-radius="0"></u-swiper>
		</view>
		<view class="jus-center u-p-30">
			<view class="jus-start">
				<image :src="imgUrl + 'images/copy/rengong.png'" mode="widthFix" style="width: 28upx;height: auto;"></image>
				<view class="u-font-24 u-m-l-20">人工优选</view>
			</view>
			<view class="u-m-l-30 u-m-r-30">/</view>
			<view class="jus-start">
				<image :src="imgUrl + 'images/copy/pinzhi.png'" mode="widthFix" style="width: 28upx;height: auto;"></image>
				<view class="u-font-24 u-m-l-20">品质担保</view>
			</view>
			<view class="u-m-l-30 u-m-r-30">/</view>
			<view class="jus-start">
				<image :src="imgUrl + 'images/copy/shouhou.png'" mode="widthFix" style="width: 28upx;height: auto;"></image>
				<view class="u-font-24 u-m-l-20">售后无忧</view>
			</view>
			<view class="">
				<u-icon name="arrow-right" color="#171718" size="24"></u-icon>
			</view>
		</view>
		<view class="u-p-l-30 u-p-r-30">
			<uni-swiper-dot :info="menuList" :current="current" field="content" mode="default" :dotsStyles="dotsStyles">
				<swiper :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000" style="height: 400upx;" @change="swiperChange">
					<swiper-item v-for="(item, index) in menuList" :key="index">
						<view class="swiper-item jus-start flex_warp">
							<view class="menu_item" v-for="(item1, index1) in item" :key="index1">
								<view class="menu_item_img">
									<image :src="imgUrl+item1.advimg" mode="aspectFit" style="width: 110upx;height: 110upx;"></image>
								</view>
								<view class="u-font-20 text-content u-text-center">{{ item1.name }}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<navigator url="../order/afterSale">
			<view class="u-p-30">
				<image :src="imgUrl + 'images/copy/banner.png'" mode="widthFix" style="width: 100%;"></image>
			</view>
		</navigator>
		<view class="u-p-l-30 u-p-r-30">
			<view class="jus-start u-p-30 news_box border_radius_10">
				<image :src="imgUrl + 'images/copy/zaobao.png'" mode="widthFix" style="width: 130upx;"></image>
				<view class="u-m-l-20 u-m-r-20" style="color: #DDDDDD;">|</view>
				<view class="text-main u-font-26 u-line-1" style="width: 444upx;">{{newNotice}}</view>
			</view>
			<view class="jus-spB u-m-t-30 u-m-b-30">
				<view class="left_box border_radius_10" @click="goBrandList">
					<view class="jus-start u-p-l-40">
						<image :src="imgUrl + 'images/copy/hot.png'" mode="widthFix" style="width: 30upx;"></image>
						<view class="u-font-30 u-m-l-20 u-m-b-15">精选品牌</view>
					</view>
					<view class="text-tips u-font-22 u-p-l-40 u-p-b-40">必买订单，今日优选</view>
					<image :src="imgUrl + 'images/copy/asdf.png'" mode="aspectFill" style="width: 270upx;height: 168upx; margin: 0 auto;"></image>
				</view>
				<view class="right_box jus-spB-col">
					<view class="right_top_box border_radius_10 jus-spB" @click="goFlashSale">
						<view class="u-text-left">
							<view class="u-font-30 u-m-l-30 u-m-b-15">限时抢购</view>
							<view class="text-tips u-font-22 u-p-l-30 u-p-b-40">今日优选</view>
						</view>
						<image :src="imgUrl + 'images/copy/qwer.png'" mode="aspectFill" style="height: 124upx;width: 124upx;" class="u-m-r-30 u-m-t-30"></image>
					</view>
					<view class="right_bottom_box border_radius_10 jus-spB">
						<view class="u-text-left">
							<view class="u-font-30 u-m-l-30 u-m-b-15">单品爆款</view>
							<view class="text-tips u-font-22 u-p-l-30 u-p-b-40">必买订单</view>
						</view>
						<image :src="imgUrl + 'images/copy/zxc.png'" mode="aspectFill" style="height: 124upx;width: 124upx;" class="u-m-r-30 u-m-t-30"></image>
					</view>
				</view>
			</view>
		</view>
		<u-sticky @fixed="stickyActive" h5-nav-height="0">
			<u-tabs ref="tabs" :list="tabList" bar-height="6" bar-width="40" active-color="#FF0000" name="cate_name" :bg-color="tabBgColor"
			 @change="clickTab" :current="tabIndex" height="100"></u-tabs>
		</u-sticky>
		<view class="goods_list_box" v-if="tabIndex == 0">
			<view class="">
				<wfalls-flow :list="list" ref="wfalls" :listHeadUrl="imgUrl + 'images/copy/list_head.png'" @listHeadClick="listHeadClick"
				 @clickItem="goodItemClick"></wfalls-flow>
				<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="aa"></u-loadmore>
			</view>
		</view>
		<view class="" v-if="tabIndex == 1">
			<view class="jus-spB bgc_fff u-p-l-30 u-p-r-30 u-p-t-20  u-m-b-20" v-for="(item,index) in tabList">
				<image :src="imgUrl+'images/copy/list_head.png'" mode="aspectFill" style="width: 240upx;height: 240upx;" class="border_radius_10"></image>
				<view class="haowu_info jus-spB-col">
					<view class="text-tips text-main u-font-30 u-line-2 ">
						出门超值推荐装,明显同款推荐合照杀手出门超值推荐装,明显同款推荐合照杀手出门超值推荐装,明显同款推荐合照杀手
					</view>
					<view class="u-font-22 u-line-3" style="color: #7B7B7B;">
						那么下列这些有略微增大眼仁效果的棕色、黑色“心机款”，就非常适合这类人佩戴。那么下列这些有略微增大眼仁效果的棕色、黑色“心机款”，就非常适合这类人佩戴。那么下列这些有略微增大眼仁效果的棕色、黑色“心机款”，就非常适合这类人佩戴。
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="showShareModal" mode="bottom" :safe-area-inset-bottom="true" border-radius="0">
			<view class="bgc_fff">
				<view class="img_list_box jus-center u-p-t-40 u-p-b-40">
					<view class="img_item">
						<image :src="imgUrl + 'images/copy_link.png'" mode="aspectFill" class="share_img"></image>
						<view class="u-font-28 text-content u-text-center">复制链接</view>
					</view>
					<view class="img_item">
						<image :src="imgUrl + 'images/create_banner.png'" mode="aspectFill" class="share_img"></image>
						<view class="u-font-28 text-content u-text-center">生成海报</view>
					</view>
					<view class="img_item">
						<image :src="imgUrl + 'images/friend.png'" mode="aspectFill" class="share_img"></image>
						<view class="u-font-28 text-content u-text-center">分享给好友</view>
					</view>
				</view>
				<view class="" style="background-color: #F4F4F4; height: 24upx;"></view>
				<view class="u-p-26 bgc_fff u-text-center" @click="showShareModal = false">取消</view>
			</view>
		</u-popup>
		<u-popup v-model="ServiceModal" mode="bottom" :safe-area-inset-bottom="true" border-radius="40" z-index="99999">
			<view class="bgc_fff">
				<view class="u-p-40 u-font-34 text-main u-text-center">客服微信</view>
				<view class="jus-spB u-p-l-40 u-p-r-40">
					<view class="service_img_box">
						<image :src="imgUrl + 'images/qrcode.png'" mode="aspectFill" style="width: 216upx; height: 216upx;"></image>
					</view>
					<view class="service_info_box text-main u-font-30 jus-spB-col ">
						<view class="jus-start ">
							<view class="" style="width: 120upx;">姓名：</view>
							<view class="">把酒话东风</view>
						</view>
						<view class="jus-start">
							<view class="" style="width: 120upx;">微信号：</view>
							<view class="u-line-1" style="width: calc(100% - 210upx);">{{ wxNum }}</view>
							<view class="u-m-l-10">
								<u-button :ripple="true" :custom-style="{ width: '70upx', height: '32upx', color: '#667E86', borderColor: '#667E86', fontSize: '20upx' }"
								 shape="circle" @click="copyWX(wxNum)">
									复制
								</u-button>
							</view>
						</view>
						<view class="text-tips u-font-24">微信扫描右方二维码添加好友</view>
					</view>
				</view>
				<view class="u-p-40">
					<u-button :ripple="true" :custom-style="{ width: '100%', height: '90upx', color: '#fff', border: 'none', fontSize: '32upx', backgroundColor: '#667E86' }"
					 shape="square" @click="ServiceModal = false">
						我知道了
					</u-button>
				</view>
			</view>
		</u-popup>
		<view class="service_box jus-center" v-if="isShowTop" @click="ServiceModal = true">
			<image :src="imgUrl + 'images/service.png'" mode="aspectFill" style="width: 26upx;height: 26upx;"></image>
			<view class="u-font-24 text-fff u-m-l-6">在线客服</view>
		</view>
		<view class="backTop" @click="backTop" v-if="isShowTop">
			<image :src="imgUrl + 'images/zhiding.png'" mode="widthFix" style="height: auto;"></image>
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
	import h5Copy from '../../js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js';
	import wfallsFlow from '../../components/wfalls-flow/wfalls-flow';
	import http from '../../common/http.js';

	export default {
		components: {
			uniSwiperDot,
			wfallsFlow
		},
		data() {
			return {
				title: 'Hello',
				imgUrl: http.imgUrl,
				isShowTop: false,
				listTop: null,
				newNotice: '商城最新新品上新,各种特色美瞳上线',
				showShareModal: false, //分享弹框
				swiperList: [],
				wxNum: 'x769612131',
				ServiceModal: false,
				menuList: [],
				pNum: 1,
				current: 0,
				dotsStyles: {
					selectedBackgroundColor: '#667E87'
				},
				tabIndex: 0,
				tabList: [{
						cate_name: '热卖',
						id: 1
					}, {
						cate_name: '好物种草',
						id: 2
					},
					{
						cate_name: '伴侣盒',
						id: 3
					},
					{
						cate_name: '护理液',
						id: 4
					},
					{
						cate_name: '大牌精选',
						id: 5
					},
					{
						cate_name: '热卖',
						id: 6
					},
					{
						cate_name: '伴侣盒',
						id: 7
					}
				],
				tabBgColor: '#fff',
				loadStatus: 'loadmore',
				flowList: [],
				list: [{
						price: 35,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg'
					},
					{
						price: 75,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg'
					},
					{
						price: 385,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
					},
					{
						price: 784,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg'
					},
					{
						price: 7891,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg'
					},
					{
						price: 2341,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg'
					},
					{
						price: 661,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg'
					},
					{
						price: 1654,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 1678,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 924,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 8243,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					}
				],
				a_list: [{
						price: 0,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg'
					},
					{
						price: 1,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg'
					},
					{
						price: 2,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
					},
					{
						price: 3,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg'
					},
					{
						price: 4,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg'
					},
					{
						price: 5,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg'
					},
					{
						price: 6,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg'
					},
					{
						price: 7,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 8,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 9,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 10,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					}
				]
			};
		},
		onLoad: function() {
			this.allRequest();

		},
		onPageScroll: function(e) {

			if (e.scrollTop > 100) {
				this.isShowTop = 1;
			} else {
				this.isShowTop = false;
			}

		},

		mounted() {
			const query = uni.createSelectorQuery().in(this);
			query
				.select('.goods_list_box')
				.boundingClientRect(data => {
					// console.log(data);
					this.listTop = data.top;
				})
				.exec();
		},
		onReachBottom() {
			if (this.tabIndex == 0) {
				this.loadStatus = 'loading';
				uni.showLoading({
					title: '正在加载更多'
				});
				// 模拟分页请求 (加载更多)
				setTimeout(() => {
					const nextData = JSON.parse(JSON.stringify(this.a_list));
					this.list.push(...nextData);
					// this.$nextTick(()=>{
					//     this.$refs.wfalls.handleViewRender();
					// })
					// APP上触发不了还是setTimeout万能
					setTimeout(() => {
						this.$refs.wfalls.handleViewRender();
					}, 0);
					uni.hideLoading();
				}, 800);
			}

		},
		methods: {
			allRequest: function() {
				this.getMenu();
				this.getBanner()
				this.getNewNotice()
			},
			//获取轮播图
			getBanner: function() {
				let _this = this
				http.ajax({
					method: 'POST',
					url: 'GetBanner',
					data: {
						shopid: 0
					},
					success: function(res) {
						let data = JSON.parse(res).data
						for (let i in data) {
							data[i].image = _this.imgUrl + data[i].thumb
						}
						_this.swiperList = data
					}
				})
			},
			//获取商城早报
			getNewNotice: function() {
				let _this = this
				http.ajax({
					method: 'POST',
					url: 'GetNewNotice',
					data: {

					},
					success: function(res) {
						let data = JSON.parse(res).data
						_this.newNotice = data.title
						console.log(data)
					}
				})
			},
			//获取菜单
			getMenu: function() {
				let _this = this
				http.ajax({
					method: 'POST',
					url: 'GetCate',
					data: {
						parentid: 0
					},
					success: function(res) {
						let data = JSON.parse(res).data
						let menu_result = [];
						for (var i = 0; i < data.length; i += 8) {
							//将数组重组，每一个为一个单独的数组
							menu_result.push(data.slice(i, i + 8));
						}
						_this.menuList = menu_result;
					}
				})
			},

			swiperChange: function(e) {
				this.current = e.detail.current;
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop;
			},
			clickTab: function(e) {
				this.tabIndex = e;
				// uni.pageScrollTo({
				// 	scrollTop: 750,
				// 	duration: 300
				// });
			},
			stickyActive: function() {
				// this.tabBgColor = '#fff'
			},
			backTop: function() {
				this.isShowTop = false;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 200
				});
			},
			showShareModalFun: function() {
				this.showShareModal = true;
			},
			goBrandList: function() {
				uni.navigateTo({
					url: '../brand/choicenessBrand'
				});
			},
			goGoodInfo: function() {
				uni.navigateTo({
					url: '../goods/goodInfo'
				});
			},
			copyWX: function(e) {
				this.copyText(e);
			},
			copyText: function(e) {
				const result = h5Copy(e);
				if (result === false) {
					this.showToast('暂不支持', 'error');
				} else {
					this.showToast('复制成功！', 'success');
				}
			},
			showToast: function(title, type, url, param) {
				this.$refs.uToast.show({
					title: title,
					type: type,
					url: url,
					param: param
				});
			},
			goFlashSale: function() {
				uni.navigateTo({
					url: '../goods/flashSale'
				});
			},
			listHeadClick: function() {
				console.log('点击listHead');
			},
			//点击瀑布流商品
			goodItemClick: function(e) {
				uni.navigateTo({
					url: '../goods/goodInfo'
				})
			}
		}
	};
</script>

<style>
	.search_box {
		padding: 10upx 20upx;
		background-color: #dfdfdf;
	}

	.menu_item {
		width: 25%;
		margin-bottom: 20upx;
	}

	.menu_item image {
		width: 110upx;
		height: 110upx;
		margin: 0 auto;
	}

	.news_box {
		background-color: #f9f9f9;
	}

	.left_box {
		background-color: #fff9ec;
		padding-top: 40upx;
		width: calc(50% - 15upx);
		height: 340upx;
	}

	.right_top_box {
		height: calc(50% - 15upx);
		background-color: #fff6f4;
	}

	.right_box {
		height: 100%;
		width: calc(50% - 15upx);
		height: 340upx;
	}

	.right_bottom_box {
		height: calc(50% - 15upx);
		background-color: #e8f6ff;
	}

	.goods_list_box {
		padding: 30upx;
		background-color: #ededed;
	}

	.uni-bg-red {
		background: red;
	}

	.uni-bg-green {
		background: green;
	}

	.uni-bg-blue {
		background: blue;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 150px;
		height: 150px;
		padding-left: 10rpx;
		text-align: center;
	}

	.list_head {
		height: 328upx;
		background-size: 100% 100%;
		background-image: url(https://i.loli.net/2020/05/20/Wwa3b5g7SdsuVHx.png);
	}

	.list_head_btn {
		height: 52upx;
		width: 180upx;
		background-color: #c61d39;
		border-radius: 10upx;
		border: 1upx solid #ededed;
		box-sizing: border-box;
		margin-left: 60upx;
	}

	.text-FC3B00 {
		color: #fc3b00;
	}

	.img_item {
		width: 30%;
	}

	.share_img {
		width: 136upx;
		height: 136upx;
		margin: 0 auto;
	}

	.service_img_box {
		padding: 8upx;
		border: 1upx solid #dbdbdb;
	}

	.service_info_box {
		width: calc(100% - 264upx);
		height: 170upx;
	}

	.service_box {
		background-color: rgba(0, 0, 0, 0.6);
		width: 144upx;
		height: 49upx;
		position: fixed;
		bottom: 152upx;
		left: 30upx;
		border-radius: 999px;
		/* z-index: 1069; */
	}

	.backTop {
		position: fixed;
		bottom: 140upx;
		right: 30upx;
		/* z-index: 1069; */
	}

	.backTop image {
		width: 80upx;
	}

	.haowu_info {
		width: calc(100% - 260upx);
		height: 200upx;
	}
</style>
<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #ffffff;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>
