import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'

class ActionHelper {
    // 1、负责数据处理
    dataHelper: DataHelper = new DataHelper('memoData', 'id')
    // 1.1、笔记数组
    memoList!: ItemData[]
    // memoList!: Array<ItemData>
    constructor () {
        this.memoList = this.readData()
    }

    getCategory(cateId: number): string {
        const cateNames = ['工作', '生活', '学习']
        return cateNames[cateId]
    }

    /*
     * 细节：这里不能直接用dataHelper.readData()方法，因为它返回的类型是Array<Object>，要把它转成Array<ItemData>格式
    */ 
    readData(): Array<ItemData> {
        // 1、读取本地的Object数组  dataHelper
        let arrObj = this.dataHelper.readData()
        // 2、将Object数组转成ItemData 数组
        let arrItem = arrObj.map((ele:any) => {
            let item:ItemData = new ItemData()
            item.id = ele.id
            item.cateId = ele.cateId
            item.title = ele.title
            item.content = ele.content
            item.createTime = ele.createTime
            return item
        })
        return arrItem
    }

    // 2、负责业务处理
    // 2.1 新增
    add(item: ItemData): number {
        // 保存到本地，返回新生成的id
        item.id = this.dataHelper.addData(item)
        // 将笔记添加到笔记列表中
        this.memoList.push(item)
        // 将 笔记列表存到本地
        this.dataHelper.saveData(this.memoList)
        // 返回新增的笔记id
        return item.id
    }

    // 2.2 编辑
    edit(item:ItemData): void {
        // 找出数组中id相同的对象
        let editItem:ItemData | undefined = this.memoList.find((ele: any) => {
            return ele.id === item.id
        })
        // 修改对象的值
        if (editItem) {
            editItem.title = item.title
            editItem.cateId = item.cateId
            editItem.content = item.content
            // 保存更新后的数据
            this.dataHelper.saveData(this.memoList)
        }
    }

    // 2.3 删除
    remove(id: number): void {
        // 根据id找到删除对象的下标
        let removeIndex: number = this.memoList.findIndex((ele: ItemData) => {
            return ele.id === id
        })
        // 删除对象
        if (removeIndex > -1) {
            this.memoList.splice(removeIndex, 1)
            // 保存删除后的对象数组
            this.dataHelper.saveData(this.memoList)
        }
    }
}

export default ActionHelper
