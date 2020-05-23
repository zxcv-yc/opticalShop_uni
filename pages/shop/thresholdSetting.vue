<template>
	<view class="container">
		<view class="jus-spB bgc_fff u-p-30 u-font-30 u-m-t-20">
			<view class="jus-start">
				<view class="u-font-30 text-content width_180">
					默认等级
				</view>
				<view class="">
					请选择进入商城的默认等级
				</view>
			</view>
			<view class="">
				<u-icon name="arrow-right" color="#667E86"></u-icon>
			</view>
		</view>
		<view class="u-p-l-30 u-p-r-30 u-p-t-20 u-p-b-20 u-font-30">
			<text>会员门槛</text><text class="u-font-24 u-tips-color inline_block u-m-l-15">(设置条件可单选也可多选)</text>
		</view>
		<u-checkbox-group @change="checkboxGroupChange" style="width: 100%;" size="30" active-color="#667E86">
			<view class="" style="width: 100%;">
				<view class="u-p-30 bgc_fff u-font-26 jus-spB u-m-b-15" v-for="(item,index) in memberList" :key="index" :style="index==memberList.length-1?'margin:0':''">
					<view class="text-667E86 u-font-30 width_180 height_132 text-bold">
						{{item.name}}
					</view>
					<view class="u-font-26 text-main u-flex-1 ">
						<view class="jus-start u-p-b-30 u-border-bottom">
							<view class="">
								<u-checkbox v-model="item.integral_check" :name="item.checkBoxName[0]"></u-checkbox>
							</view>
							<view class="u-m-l-15  width_154">
								满足积分
							</view>
							<view class="u-flex-1">
								<input type="number" value="" placeholder="请输入积分数量" class="u-font-26" :disabled="!item.integral_check" />
							</view>
						</view>
						<view class="jus-start u-p-t-30 ">
							<view class="">
								<u-checkbox v-model="item.invite_check" :name="item.checkBoxName[1]"></u-checkbox>
							</view>
							<view class="u-m-l-15  width_154">
								邀请会员
							</view>
							<view class="u-flex-1">
								<input type="number" value="" placeholder="请输入会员数量" class="u-font-26" :disabled="!item.invite_check" />
							</view>
						</view>
					</view>
				</view>
				<view class="u-p-l-30 u-p-r-30 u-p-t-20 u-p-b-20 u-font-30">
					<text>分销商门槛</text><text class="u-font-24 u-tips-color inline_block u-m-l-15">(设置条件可单选也可多选)</text>
				</view>
				<view class="u-p-30 bgc_fff u-font-26 jus-spB ">
					<view class="text-667E86 u-font-30 width_180 text-bold" style="height: 320upx;">
						经销商
					</view>
					<view class="u-font-26 text-main u-flex-1 ">
						<view class="jus-start u-p-b-30 u-border-bottom">
							<view class="">
								<u-checkbox v-model="dealerObj.noThreshold" name="noThreshold"></u-checkbox>
							</view>
							<view class="u-m-l-15  width_154">
								无门槛
							</view>
						</view>
						<view class="jus-start u-p-b-30 u-border-bottom u-m-t-30">
							<view class="">
								<u-checkbox v-model="dealerObj.prestore" name="prestore"></u-checkbox>
							</view>
							<view class="u-m-l-15  width_154">
								充值预存
							</view>
							<view class="u-flex-1">
								<input type="number" value="" placeholder="请输入预存金额" class="u-font-26" :disabled="!dealerObj.prestore" />
							</view>
						</view>
						<view class="jus-start u-p-b-30 u-border-bottom u-m-t-30">
							<view class="">
								<u-checkbox v-model="dealerObj.shopping" name="shopping"></u-checkbox>
							</view>
							<view class="u-m-l-15  width_154">
								购物满
							</view>
							<view class="u-flex-1">
								<input type="number" value="" placeholder="请输入购物金额" class="u-font-26" :disabled="!dealerObj.shopping" />
							</view>
						</view>
						<view class="jus-start u-p-t-30 ">
							<view class="">
								<u-checkbox v-model="dealerObj.buyGift" name="buyGift"></u-checkbox>
							</view>
							<view class="u-m-l-15  width_154">
								购买大礼包
							</view>
						</view>
					</view>
				</view>
				<view class="u-p-l-30 u-p-r-30 u-p-t-20 u-p-b-20 u-font-30">
					<text>代理门槛</text><text class="u-font-24 u-tips-color inline_block u-m-l-15">(设置条件可单选也可多选)</text>
				</view>
				<view class="u-p-30 bgc_fff u-font-26 jus-spB u-m-b-15" v-for="(item,index1) in agentList" :key="this">
					<view class="text-667E86 u-font-30 width_180 height_132 text-bold">
						{{item.name}}
					</view>
					<view class="u-font-26 text-main u-flex-1 ">
						<view class="jus-start u-p-b-30 u-border-bottom">
							<view class="">
								<u-checkbox v-model="item.prepay_check" :name="item.checkBoxName[0]"></u-checkbox>
							</view>
							<view class="u-m-l-15  width_154">
								满足积分
							</view>
							<view class="u-flex-1">
								<input type="number" value="" placeholder="请输入积分数量" class="u-font-26" :disabled="!item.prepay_check" />
							</view>
						</view>
						<view class="jus-start u-p-t-30 ">
							<view class="">
								<u-checkbox v-model="item.buy_check" :name="item.checkBoxName[1]"></u-checkbox>
							</view>
							<view class="u-m-l-15  width_154">
								邀请会员
							</view>
							<view class="u-flex-1">
								<input type="number" value="" placeholder="请输入会员数量" class="u-font-26" :disabled="!item.buy_check" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-checkbox-group>
		<view class="u-p-30">
			<u-button shape="square" :custom-style="btnStyle"  :ripple="true" :loading="btnLoading">保存修改</u-button>
		</view>

	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				btnLoading:false,
				btnStyle: {
					backgroundColor: '#667E86',
					fontSize: '32upx',
					color: '#fff',
					height: '90upx',
					border:'none'
				},
				memberList: [{
						name: '普通会员',
						checkBoxName: ['integral1', 'invite1'],
						integral_check: false,
						invite_check: false,
					},
					{
						name: '白银会员',
						checkBoxName: ['integral2', 'invite2'],
						integral_check: false,
						invite_check: false,
					},
					{
						name: '黄金会员',
						checkBoxName: ['integral3', 'invite3'],
						integral_check: false,
						invite_check: false,
					},
					{
						name: '钻石会员',
						checkBoxName: ['integral4', 'invite4'],
						integral_check: false,
						invite_check: false,
					}
				],
				dealerObj: {
					noThreshold: false,
					prestore: false,
					shopping: false,
					buyGift: false
				},
				agentList: [{
						name: 'VIP1',
						checkBoxName: ['prepay1', 'buy1'],
						prepay_check: false,
						buy_check: false,
					},
					{
						name: 'VIP2',
						checkBoxName: ['prepay2', 'buy2'],
						prepay_check: false,
						buy_check: false,
					},
					{
						name: 'VIP3',
						checkBoxName: ['prepay3', 'buy3'],
						prepay_check: false,
						buy_check: false,
					},
					{
						name: 'VIP4',
						checkBoxName: ['prepay4', 'buy4'],
						prepay_check: false,
						buy_check: false,
					}, {
						name: 'VIP5',
						checkBoxName: ['prepay5', 'buy5'],
						prepay_check: false,
						buy_check: false,
					}, {
						name: 'VIP6',
						checkBoxName: ['prepay6', 'buy6'],
						prepay_check: false,
						buy_check: false,
					}, {
						name: 'VIP7',
						checkBoxName: ['prepay7', 'buy7'],
						prepay_check: false,
						buy_check: false,
					},
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
			checkboxGroupChange: function(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	page {
		background-color: #EDEDED;
	}

	.text-667E86 {
		color: #667E86;
	}

	.width_180 {
		width: 180upx;
	}

	.height_132 {
		height: 132upx;
	}

	.width_154 {
		width: 144upx;
	}

	.input-placeholder {
		color: #666764;
		font-size: 26upx;
		margin: 0;
		padding: 0;
		line-height: 100%;
	}
</style>
