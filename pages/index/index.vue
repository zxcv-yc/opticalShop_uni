<template>
	<view class="container">
		<view class="backTop" @click="backTop" v-if="isShowTop">
			<image src="../../static/images/zhiding.png" mode="widthFix"></image>
		</view>
		<view class="jus-spB u-p-30">
			<view class="jus-start">
				<image src="../../static/tabBar/shouye-a.png" mode="widthFix" style="width: 40upx;"></image>
				<view class="text-content u-font-sm u-m-l-20">
					花花美瞳店铺
				</view>
			</view>
			<view class="jus-start">
				<view class="jus-center border_radius_999 search_box">
					<image src="../../static/images/search_icon.png" mode="widthFix" style="width: 24upx;"></image>
					<view class="u-font-sm text-content u-m-l-20">
						搜索
					</view>
				</view>
				<view class="u-m-l-20" @click="showShareModalFun">
					<image src="../../static/images/fenxiang.png" mode="aspectFit" style="width: 36upx;height: 36upx;"></image>
				</view>
			</view>
		</view>
		<view class="">
			<u-swiper :list="swiperList" height="600" border-radius="0"></u-swiper>
		</view>
		<view class="jus-center u-p-30">
			<view class="jus-start">
				<image src="../../static/images/copy/rengong.png" mode="widthFix" style="width: 28upx;"></image>
				<view class="u-font-24 u-m-l-20">
					人工优选
				</view>
			</view>
			<view class="u-m-l-30 u-m-r-30">
				/
			</view>
			<view class="jus-start">
				<image src="../../static/images/copy/pinzhi.png" mode="widthFix" style="width: 28upx;"></image>
				<view class="u-font-24 u-m-l-20">
					人工优选
				</view>
			</view>
			<view class="u-m-l-30 u-m-r-30">
				/
			</view>
			<view class="jus-start">
				<image src="../../static/images/copy/shouhou.png" mode="widthFix" style="width: 28upx;"></image>
				<view class="u-font-24 u-m-l-20">
					售后无忧
				</view>
			</view>
			<view class="">
				<u-icon name="arrow-right" color="#171718" size="24"></u-icon>
			</view>

		</view>
		<view class="u-p-l-30 u-p-r-30">
			<uni-swiper-dot :info="menuList" :current="current" field="content" mode="default" :dotsStyles="dotsStyles">
				<swiper :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000" style="height: 400upx;" @change="swiperChange">
					<swiper-item v-for="(item,index) in menuList" :key="index">
						<view class="swiper-item jus-start flex_warp">
							<view class="menu_item" v-for="(item1,index1) in item" :key="index1">
								<view class="menu_item_img">
									<image :src="item1.img" mode="widthFix"></image>
								</view>
								<view class="u-font-20 text-content u-text-center">
									{{item1.name}}
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="u-p-30">
			<image src="../../static/images/copy/banner.png" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="u-p-l-30 u-p-r-30">
			<view class="jus-start u-p-30 news_box border_radius_10">
				<image src="../../static/images/copy/zaobao.png" mode="widthFix" style="width: 130upx;"></image>
				<view class="u-m-l-20 u-m-r-20" style="color: #DDDDDD;">|</view>
				<view class="text-main u-font-26">
					商城最新新品上新,各种特色美瞳上线
				</view>
			</view>
			<view class="jus-spB u-m-t-30 u-m-b-30">
				<view class="left_box border_radius_10" @click="goBrandList">
					<view class="jus-start u-p-l-40">
						<image src="../../static/images/copy/hot.png" mode="widthFix" style="width: 30upx;"></image>
						<view class="u-font-30 u-m-l-20 u-m-b-15">
							精选品牌
						</view>
					</view>
					<view class="text-tips u-font-22 u-p-l-40 u-p-b-40">
						必买订单，今日优选
					</view>
					<image src="../../static/images/copy/asdf.png" mode="aspectFill" style="width: 270upx;height: 168upx; margin: 0 auto;"></image>
				</view>
				<view class="right_box jus-spB-col">
					<view class="right_top_box border_radius_10 jus-spB">
						<view class="u-text-left">
							<view class="u-font-30 u-m-l-30 u-m-b-15">
								限时抢购
							</view>
							<view class="text-tips u-font-22 u-p-l-30 u-p-b-40">
								今日优选
							</view>
						</view>
						<image src="../../static/images/copy/qwer.png" mode="aspectFill" style="height: 124upx;width: 124upx;" class="u-m-r-30 u-m-t-30"></image>
					</view>
					<view class="right_bottom_box border_radius_10 jus-spB">
						<view class="u-text-left">
							<view class="u-font-30 u-m-l-30 u-m-b-15">
								限时抢购
							</view>
							<view class="text-tips u-font-22 u-p-l-30 u-p-b-40">
								今日优选
							</view>
						</view>
						<image src="../../static/images/copy/zxc.png" mode="aspectFill" style="height: 124upx;width: 124upx;" class="u-m-r-30 u-m-t-30"></image>
					</view>
				</view>
			</view>
		</view>
		<u-sticky @fixed="stickyActive" h5-nav-height="0">
			<u-tabs ref="tabs" :list="tabList" bar-height="6" bar-width="40" active-color="#FF0000" name="cate_name" :bg-color="tabBgColor"
			 @change="clickTab" :current="tabIndex" height="100"></u-tabs>
		</u-sticky>
		<view class="goods_list_box">

			<view class="" v-if="tabIndex==0">
				<u-waterfall :flowList="flowList">
					<template v-slot:left="{leftList}">
						<view class="demo-warter list_head jus-spB-end" style="background-image: url(https://i.loli.net/2020/05/20/Wwa3b5g7SdsuVHx.png);">
							<view class="list_head_btn jus-center">
								<view class="text-fff u-font-lg">
									进入会场
								</view>
								<view class="u-m-l-10">
									<u-icon name="arrow-right" color="#fff" size="22"></u-icon>
								</view>
							</view>
						</view>
						<view class="demo-warter" v-for="(item, index) in leftList" :key="index">

							<view class="demo-img-wrap">
								<image class="demo-image" :src="item.image" mode="widthFix"></image>
							</view>

							<view class="demo-title u-font-26 u-m-b-30">
								{{item.title}}
							</view>
							<view class="jus-start u-m-b-20">
								<view class="text-FC3B00">
									<text class="u-font-20">¥</text>
									<text class="u-font-32">{{item.price}}元</text>
								</view>
								<view class="text-tips u-m-l-15 u-font-22">
									{{item.price}}人已付款
								</view>
							</view>

						</view>
					</template>
					<template v-slot:right="{rightList}">
						<view class="demo-warter" v-for="(item, index) in rightList" :key="index">

							<view class="demo-img-wrap">
								<image class="demo-image" :src="item.image" mode="widthFix"></image>
							</view>

							<view class="demo-title">
								{{item.title}}
							</view>
							<view class="demo-price">
								{{item.price}}
							</view>
							<view class="demo-tag">
								<view class="demo-tag-owner">
									自营
								</view>
								<view class="demo-tag-text">
									放心购
								</view>
							</view>
							<view class="demo-shop">
								{{item.shop}}
							</view>
						</view>
					</template>
				</u-waterfall>
				<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="aa"></u-loadmore>
			</view>
		</view>
		<u-popup v-model="showShareModal" mode="bottom" :safe-area-inset-bottom="true" border-radius="0">
			<view class="bgc_fff">
				<view class="img_list_box jus-center u-p-t-40 u-p-b-40">
					<view class="img_item">
						<image src="../../static/images/copy_link.png" mode="aspectFill" class="share_img"></image>
						<view class="u-font-28 text-content u-text-center">
							复制链接
						</view>
					</view>
					<view class="img_item">
						<image src="../../static/images/create_banner.png" mode="aspectFill" class="share_img"></image>
						<view class="u-font-28 text-content u-text-center">
							生成海报
						</view>
					</view>
					<view class="img_item">
						<image src="../../static/images/friend.png" mode="aspectFill" class="share_img"></image>
						<view class="u-font-28 text-content u-text-center">
							分享给好友
						</view>
					</view>
				</view>
				<view class="" style="background-color: #F4F4F4; height: 24upx;"></view>
				<view class="u-p-26 bgc_fff u-text-center" @click="showShareModal = false">取消</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import bgImg from "../../static/images/copy/list_head.png"
	export default {
		components: {
			uniSwiperDot,
			bgImg: bgImg
		},
		data() {
			return {
				title: 'Hello',
				isShowTop: false,
				listTop: null,
				showShareModal: false, //分享弹框
				swiperList: [{
						image: '../../static/images/copy/dssd.png'
					},
					{
						image: '../../static/images/copy/list_head.png'
					},
				],
				menuList: [],
				current: 0,
				dotsStyles: {
					selectedBackgroundColor: '#667E87'
				},
				tabIndex: 0,
				tabList: [{
					cate_name: '热卖',
					id: 1,
				}, {
					cate_name: '好物种草',
					id: 2,
				}, {
					cate_name: '伴侣盒',
					id: 3,
				}, {
					cate_name: '护理液',
					id: 4,
				}, {
					cate_name: '大牌精选',
					id: 5,
				}, {
					cate_name: '热卖',
					id: 6,
				}, {
					cate_name: '伴侣盒',
					id: 7,
				}, ],
				tabBgColor: '#fff',
				loadStatus: 'loadmore',
				flowList: [],
				list: [{
						price: 35,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						price: 75,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						price: 385,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						price: 784,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					},
					{
						price: 7891,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
					},
					{
						price: 2341,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
					},
					{
						price: 661,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
					},
					{
						price: 1654,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 1678,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 924,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 8243,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
				],
				a_list: [{
						price: 0,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						price: 1,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						price: 2,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						price: 3,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					},
					{
						price: 4,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
					},
					{
						price: 5,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
					},
					{
						price: 6,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
					},
					{
						price: 7,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 8,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 9,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 10,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
				]
			}
		},
		onLoad() {
			this.allRequest()
			console.log(this.bgImg)
		},
		onPageScroll(e) {
			if (e.scrollTop > this.listTop) {
				this.isShowTop = 1
			} else {
				this.isShowTop = false
			}
			console.log(e)
		},

		mounted() {
			console.log('mounted 组件挂载完毕状态===============》');
			const query = uni.createSelectorQuery().in(this);
			query.select('.goods_list_box').boundingClientRect(data => {
				console.log(data);
				this.listTop = data.top
			}).exec();
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.aa();

				this.a_list = []
			}, 1000)
		},
		methods: {
			allRequest: function() {
				this.getMenu()
				this.addRandomData()
			},
			getMenu: function() {
				let menu_result = []
				var menu_arr = [{
						img: '../../static/images/menu/meitong.png',
						name: '美瞳',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/touming.png',
						name: '透明片',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/zhoubian.png',
						name: '护理周边',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/haiwai.png',
						name: '海外精品',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/jvjia.png',
						name: '居家生活',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/shengxian.png',
						name: '食物生鲜',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/hufu.png',
						name: '医美护肤',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/yinliu.png',
						name: '福利引流',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/fengge.png',
						name: '美瞳风格',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/sexi.png',
						name: '色系',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/caizhi.png',
						name: '材质',
						url: 'pages/index/index?id=11'
					},
					{
						img: '../../static/images/menu/zhijing.png',
						name: '美瞳直径',
						url: 'pages/index/index?id=11'
					},

					{
						img: '../../static/images/menu/yuepao.png',
						name: '月抛美瞳',
						url: 'pages/index/index?id=11'
					}
				];
				console.log(menu_arr.length)
				for (var i = 0; i < menu_arr.length; i += 8) { //将数组重组，每一个为一个单独的数组
					menu_result.push(menu_arr.slice(i, i + 8));
				}
				this.menuList = menu_result
				console.log(menu_result)
			},
			aa: function() {
				if (this.a_list.length < 1) {
					this.loadStatus = 'nomore'
				} else {
					for (let i = 0; i < 10; i++) {
						let index = this.$u.random(0, this.a_list.length - 1);
						// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
						let item = JSON.parse(JSON.stringify(this.a_list[index]))
						item.id = this.$u.guid();
						this.flowList.push(item);
					}
					this.loadStatus = 'loadmore';
				}

			},
			addRandomData: function() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			swiperChange: function(e) {
				this.current = e.detail.current;
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			clickTab: function(e) {
				this.tabIndex = e;
			},
			stickyActive: function() {
				// this.tabBgColor = '#fff'
			},
			backTop: function() {
				this.isShowTop = false
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			showShareModalFun: function() {
				this.showShareModal = true
			},
			goBrandList:function(){
				uni.navigateTo({
				url:"../goods/brandList"
				})
			}
		}
	}
</script>

<style>
	.search_box {
		padding: 10upx 20upx;
		background-color: #DFDFDF;
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
		background-color: #F9F9F9;
	}

	.left_box {
		background-color: #FFF9EC;
		padding-top: 40upx;
		width: calc(50% - 15upx);
		height: 340upx;
	}

	.right_top_box {
		height: calc(50% - 15upx);
		background-color: #FFF6F4;
	}

	.right_box {
		height: 100%;
		width: calc(50% - 15upx);
		height: 340upx;
	}

	.right_bottom_box {
		height: calc(50% - 15upx);
		background-color: #E8F6FF;
	}

	.goods_list_box {
		padding: 30upx;
		background-color: #EDEDED;
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
		background-color: #C61D39;
		border-radius: 10upx;
		border: 1upx solid #EDEDED;
		box-sizing: border-box;
		margin-left: 60upx;
	}

	.text-FC3B00 {
		color: #FC3B00;
	}

	.backTop {
		position: fixed;
		bottom: 140upx;
		right: 30upx;
		z-index: 9999;
	}

	.backTop image {
		width: 80upx;
	}

	.img_item {
		width: 30%;
	}

	.share_img {
		width: 136upx;
		height: 136upx;
		margin: 0 auto;
	}
</style>
<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #FFFFFF;
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
		color: #FFFFFF;
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
