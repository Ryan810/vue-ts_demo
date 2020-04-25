class ItemData {
    constructor(id = -1, cateId = -1, title = '', content = '') {
        this.id = id;
        this.cateId = cateId;
        this.title = title;
        this.content = content;
        this.createTime = this.formatTime(Date.now());
    }
    formatTime(timeStamp) {
        let date = new Date(timeStamp);
        let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
        return str;
    }
}
export default ItemData;
//# sourceMappingURL=ItemData.js.map