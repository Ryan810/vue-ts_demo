import Category from './CategoryEnum'
class ItemData {
    id!: number
    cateId!: Category
    content!: string
    title!: string
    createTime!: string

    constructor(id: number = -1, cateId: Category = -1, title: string = '', content: string = '') {
        this.id = id
        this.cateId = cateId
        this.title = title
        this.content = content
        this.createTime = this.formatTime(Date.now())
    }

    formatTime(timeStamp: number): string {
        let date = new Date(timeStamp)
        let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
        return str
    }
}
export default ItemData
