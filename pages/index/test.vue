<template>
	<view class="container">
		<!-- <view class="waterfall-container">
			<view class="list_head" style="">
				<image :src="imgUrl+'images/copy/list_head.png'" mode="aspectFill" style="width: 100%;height: 312upx;"></image>
				<view class="row_go jus-center">
					<view class="u-font-26 text-fff">
						进入会场
					</view>
					<view class="u-m-l-10">
						<u-icon name="arrow-right" color="#fff" size="24"></u-icon>
					</view>
				</view>
			</view>
			<view class="waterfall-item" v-for="(item,index) in list" :key="index">
				<image :src="item.image" mode="widthFix" style="width: 100%;height: auto;"></image>
				<view class="u-p-t-30 u-p-l-20 u-p-r-20 u-p-b-26">
					<view class="u-line-2 text-main u-font-26">
						新款美瞳眼睛伴侣套装礼盒新款美瞳眼睛伴侣套装礼盒
					</view>
					<view class="u-p-t-30" style="color: #FC3B00;">
						<text class="u-font-22">¥</text><text class="u-font-32 inline_block u-m-l-10">{{item.price}}</text>
						<text class="u-font-22 text-tips inline_block u-m-l-20">{{item.price}}人已付款</text>
					</view>
				</view>
			</view>
		</view> -->
		<wfalls-flow :list="list" ref="wfalls" :listHeadUrl="imgUrl + 'images/copy/list_head.png'" @listHeadClick="goqqq"
		 @clickItem="goGoodsInfo"></wfalls-flow>
	</view>
</template>

<script>
	import http from '../../common/http.js';
	import wfallsFlow from '../../components/wfalls-flow/wfalls-flow';
	export default {
		components: {
			wfallsFlow
		},
		data() {
			return {
				imgUrl: http.imgUrl,
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
						shop: '李白杜甫白居易旗舰店李白杜甫白居易旗舰店李白杜甫白居易旗舰店李白杜甫白居易旗舰店',
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
						price: 1,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg'
					},
					{
						price: 2,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg'
					},
					{
						price: 3,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
					},
					{
						price: 4,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg'
					},
					{
						price: 5,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg'
					},
					{
						price: 6,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg'
					},
					{
						price: 7,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg'
					},
					{
						price: 8,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 9,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 10,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 11,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					}
				],
				add: true
			};
		},
		onLoad: function() {
			this.allRequest();
		},
		onShow: function() {},
		onPullDownRefresh: function() {
			// uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {
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
		},
		methods: {
			allRequest: function() {
				this.addRandomData();
				this.aba()
			},
			goqqq: function() {
				console.log(123);
			},
			goGoodsInfo: function(e) {
				console.log(e);
			},
			aba: function() {
				console.log('执行aba')
				//获取定位经纬度
				if (this.$wechat && this.$wechat.isWechat()) {
					this.$wechat.location(function(res){
						console.log(res)
					})
				}

			},
			addRandomData() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]));
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
				console.log(this.flowList);
			},
			aa: function() {
				uni.showLoading({
					title: '加载中'
				});
				let opts = {
					url: '',
					method: 'post'
				};
				let param = {
					city_id: '370700'
				};
				http.httpTokenRequest(opts, param).then(
					res => {
						console.log(res.data);
						uni.hideLoading();
					},
					error => {
						console.log(error);
						uni.hideLoading();
					}
				);
			}
		}
	};
</script>

<style>
	page {
		background-color: #ededed;
	}

	.list_head {
		position: relative;
		border-radius: 15upx;
		overflow: hidden;
		margin-bottom: 20upx;
	}

	.row_go {
		width: 178upx;
		height: 50upx;
		border-radius: 10upx;
		background-color: #c61d39;
		border: 1upx solid #ededed;
		position: absolute;
		bottom: 20upx;
		left: calc(50% - 90upx);
	}

	.waterfall-container {
		/*分几列*/
		column-count: 2;
		padding: 20upx;
	}

	.waterfall-item {
		/*不留白，不知道什么意思可以取消这个样式试试*/
		break-inside: avoid;
		background-color: #fff;
		/* padding: 50upx; */
		border-radius: 20upx;
		border-radius: 15upx;
		overflow: hidden;
		margin-bottom: 20upx;
	}
</style>
