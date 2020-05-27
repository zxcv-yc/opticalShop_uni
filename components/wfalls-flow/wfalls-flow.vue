<template>
	<view class="list-container">
		<view id="wf-list" class="list" v-for="(list, listIndex) of viewList" :key="listIndex">
			<view class="list_head" v-if="listIndex==0" @click="listHeadClick">
				<image @load="handleViewRender" @error="handleViewRender" :src="listHeadUrl" mode="widthFix" style="width: 100%;height: auto;"></image>
				<view class="row_go jus-center">
					<view class="u-font-26 text-fff">
						进入会场
					</view>
					<view class="u-m-l-10">
						<u-icon name="arrow-right" color="#fff" size="24"></u-icon>
					</view>
				</view>
			</view>
			<view class="item" v-for="(item, index) of list.list" :key="index" @click="itemClick(item)">
				<image @load="handleViewRender" @error="handleViewRender" :src="item.image" mode="widthFix"></image>
				
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
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array //实际请求获取的列表数据
		},
		listHeadUrl: {
			type: String //实际请求获取的列表数据
		}
	},
	data() {
		return {
			viewList: [{ list: [] }, { list: [] }] //展示到视图的列表数据
		};
	},
	methods: {
		init() {
			this.viewList = [{ list: [] }, { list: [] }];
			setTimeout(() => {
				this.handleViewRender();
			}, 0);
		},
		handleViewRender() {
			const index = this.viewList.reduce((total, current) => total + current.list.length, 0);
			if (index > this.list.length - 1) {
				// 加载完成触发事件并返回加载过的图片数
				this.$emit('finishLoad', index);
				return;
			}
			const query = uni.createSelectorQuery().in(this);
			let listFlag = 0;
			query
				.selectAll('#wf-list')
				.boundingClientRect(data => {
					listFlag = data[0].bottom - data[1].bottom <= 0 ? 0 : 1;
					this.viewList[listFlag].list.push(this.list[index]);
				})
				.exec();
		},
		listHeadClick(){
			this.$emit('listHeadClick');
		},
		itemClick:function(e){
			this.$emit('clickItem', e);
		}
		
	},
	mounted() {
		if (this.list.length) {
			this.init();
		}
	}
};
</script>
<style>
	html{
	overflow:hidden;
	position:fixed;
	}
	.item{
		background-color: #fff;
		border-radius: 15upx;
		position: relative;
		overflow: hidden;
		margin-bottom: 20upx;
		width: 100%;
	}
	.list_head{
		position: relative;
		border-radius: 15upx;
		overflow: hidden;
		margin-bottom: 20upx;
	}
	.row_go {
		width: 178upx;
		height: 50upx;
		border-radius: 10upx;
		background-color: #C61D39;
		border: 1upx solid #EDEDED;
		position: absolute;
		bottom: 20upx;
		left: calc(50% - 90upx);
	}
	.list-container{
		display:flex;
		justify-content :space-between;
		align-items: flex-start;
	
	}
	.list{
		width: calc(50% - 15rpx);
		display: flex;
		flex-direction :column;
	}

	.item image{
		width: 100%;
	}
</style>

