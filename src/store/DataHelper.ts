// DataHelper类 - 负责localStorage操作
class DataHelper {
    dataKey: string
    primaryKey: string
    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey
        this.primaryKey = primaryKey
    }
    readData():any {
        // 1、读取本场数据（根据dataKey读取）
        let strData: string | null = localStorage.getItem(this.dataKey)
        // 2、将读取的json数据字符串转换成数组对象
        let arrData: any = []
        if (strData !== null) {
            arrData = JSON.parse(strData)
        }
        // 3、将数组对象返回
        return arrData
    }
    saveData(arrData:object[]): void {
        // 1、将数据转换成JSON字符串
        let str: string = JSON.stringify(arrData)
        // 2、将字符串保存到本地localstorage
        localStorage.setItem(this.dataKey, str)
    }
    addData(item: any):number {
        // 1、读取本地现有数据
        let arr: any = this.readData()
        // 2、创建一个评论对象，并设置评论内容
        let obj: any = {
            content: item.content,
            title: item.title,
            cateId: item.cateId,
            createTime: item.createTime
        }
        // 3.1、自动生成主键id， {content: 'xxx'}
        let newId = arr[arr.length - 1] ? arr[arr.length - 1][this.primaryKey] + 1 : 1
        // 3.2、将id值添加到对象， {content: 'xxx', id: 1}
        obj[this.primaryKey] = newId
        // 4、将添加的对象添加到数组
        arr.push(obj)
        // 5、将 数据保存到localstorage中
        this.saveData(arr)
        // 6、返回 id
        return newId
    }
    removeData(id: number): boolean {
        // 读取本地数据
        let arr = this.readData()
        // 查找要删除评论对象的下标， 并保存到本地
        let index = arr.findIndex((item: any) => {
            return id === item[this.primaryKey]
        })
        // 如果下标大于-1， 则删除数组中该下标元素对象，并返回true
        if (index > -1) {
            arr.splice(index, 1)
            // 保存本地
            this.saveData(arr)
            return true
        }
        return false // 否则返回false
    }
}
export default DataHelper
