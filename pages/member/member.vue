<template>
	<view class="backImage">
		<view class="nav-title">
			<image class="go_back" src="../../static/meber_go_back.png" mode="widthFix"></image>
			<text>会员邀请码</text>
			<image class="go_back_" src="../../static/member_bgimg.png"></image>
		</view>
		<view>
			<swiper class="imageContainer" previous-margin="50rpx" next-margin="50rpx" :autoplay="false" :current="0" :circular="false" @changn="handleChange">
				<block v-for="(item, index) in membervipList">
					<swiper-item class="item">
						<view :style="'background-image: url('+item.img+');'">
							<text>{{item.title}}</text>
							<image class="img_towm" :src="item.img_towm"></image>
							<!-- <image :mode="aspectFill" :src="" class="itemImg" :class="[currentIndex == index ? 'active' : '']"></image> -->
							<text>{{item.text}}</text>
						</view>
						
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
		
</template>

<script>
	export default {
		data() {
			return {
				membervipList:[
					{
						title:'普通会员',
						img:'../../static/member_vip_1.png',
						img_towm:'../../static/member_towm.png',
						text:'使用微信扫一扫二维码  即刻成为会员'
					},
					{
						title:'普通会员',
						img:'../../static/member_vip_2.png',
						img_towm:'../../static/member_towm.png',
						text:'使用微信扫一扫二维码  即刻成为会员'
					},
					{
						title:'普通会员',
						img:'../../static/member_vip_3.png',
						img_towm:'../../static/member_towm.png',
						text:'使用微信扫一扫二维码  即刻成为会员'
					},
					{
						title:'普通会员',
						img:'../../static/member_vip_4.png',
						img_towm:'../../static/member_towm.png',
						text:'使用微信扫一扫二维码  即刻成为会员'
					},
				]
			}
		},
		methods: {
			addRandomData:function(e){
				
			}
		}
	}
</script>

<style>
	.backImage{
		background: url(../../static/member_bgimg.png) no-repeat;
		background-size: 100% 279upx;
		height: 100%;
	}
	.backImage .nav-title{
		display: flex;
		flex-direction: row;
		padding-top: 122upx;
		padding-left: 52upx;
		padding-right: 52upx;
		/* justify-content: space-around; */
		justify-content: space-between;
	}
	.backImage .go_back{
		width: 25upx;
		height: 50upx;
	}
	.backImage .go_back_{
		width: 2upx;
		height: 4upx;
	}
	.backImage text{
		font-size:34upx;
		font-family:Microsoft YaHei;
		font-weight:bold;
		color:rgba(251,251,251,1);
	}
	
	
	.imageContainer{
	 width: 100%;
	 height: 620rpx;
	}
	.item{
	 height: 500rpx;
	}
	.itemImg{
	 position: absolute;
	 width: 100%;
	 height: 380rpx;
	 border-radius: 15rpx;
	 z-index: 5;
	 top: 13%;
	}
	.active{
	 opacity: 1;
	 z-index: 10;
	 height: 836rpx;
	 top: 7%;
	 transition:all .2s ease-in 0s;
	}
	.img_towm{
		width: 229rpx;
		height: 220rpx;
		z-index: 100;
	}
</style>
