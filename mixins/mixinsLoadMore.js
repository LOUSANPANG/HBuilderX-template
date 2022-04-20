/**
 * 使用
 * 	- 引入 import mixinsLoadMore from '@/mixins/mixinsLoadMore.js'
 * 	- 混入 mixins: [mixinsLoadMore]
 *  - 初始化分页数据 onLoad() { this.mixOnLoad() }
 *  - 下拉加载 onReachBottom() { this.mixOnReachBottom() }
 * 利用 <u-loadmore :status="mixLoadStatus" />
 */

import $API from '@/services/services-base/http-interceptors.js'
export default {
	data() {
		return {
			// 分页数据
			mixPage: {
				pageNum: 1,
				pageSize: 20
			},
			// 下拉加载更多
			mixShowLoadMore: false,
			mixLoadStatus: 'loadmore', // _loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
			// 数据
			mixDataList:[],
			mixList:[],
			// 请求接口地址
			mixUrl: 'xxx',
			// 返回 data 中的列表键名
			mixListKey: 'list', // _数据为空的时候为null，若为[]需要i修改服务返回的数据判断\
			// 最多调用次数, 0无次数限制
			mixMaxPage: 0,
		}
	},
	methods: {
		// 初始化数据
		mixOnLoad(){
			this.mixDataList = []
			this.mixPage.pageNum = 1
			this.getDataList()
		},
		// 触底执行
		mixOnReachBottom(){
			if (!this.mixShowLoadMore) {
				this.mixShowLoadMore = true
				this.mixPage.pageNum += 1
				this.getDataList()
			}
		},

		// 获取数据列表
		getDataList(){
			this.mixList = []

			if(this.mixMaxPage!=0 && this.mixPage.pageNum > this.mixMaxPage){
				console.error('超出最大调用次数,max ===>' + this.mixMaxPage)
				console.error('current ===>' + this.mixPage.pageNum)
				this.mixLoadStatus = 'nomore'
				this.mixShowLoadMore = true
				return
			}

			this.mixLoadStatus = 'loading'
			$API.post(this.mixUrl, {
				currPage: this.mixPage.pageNum,
				pageSize: this.mixPage.pageSize
			}).then(res=>{
				this.mixShowLoadMore = false
				this.mixLoadStatus = 'loadmore'

				// 如果列表为空，则不再获取
				// TIPS 数据为空的时候，mixListKey为null不可是[]
				if (!res.data[this.mixListKey]) {
					this.mixShowLoadMore = true
					this.mixLoadStatus = 'nomore'
					return
				}

				// 数据添加
				this.mixList = res.data[this.mixListKey]
				this.mixDataList.push(...this.mixList)

				// 如果请求数量小于分页数量，则不再请求
				if(this.mixList.length < this.mixPage.pageSize){
					this.mixShowLoadMore = true
					this.mixLoadStatus = 'nomore'
					return
				}
			}).catch(err => {
				console.error('请求下一页数据服务失败 ===>', err)
				this.mixShowLoadMore = false
				this.mixLoadStatus = 'loadmore'
			}).finally(()=>{})
		}

	}
}
