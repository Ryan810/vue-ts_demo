<template>
    <div class="edit">
        <div>
            <select v-model="memo.cateId">
                <option :value="0">工作</option>
                <option :value="1">生活</option>
                <option :value="2">学习</option>
            </select>
        </div>
        <div>
            <input style="width: 90%; height:30px; margin-top:20px;" type="text" v-model="memo.title" placeholder="标题">
            <textarea style="width: 90%; margin-top:20px;" v-model="memo.content" placeholder="内容" rows="5" />
        </div>
        <div>
            <button style="margin-right: 10px;" @click="save">保存</button>
            <button @click="close">关闭</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemData from '../model/ItemData'
@Component
export default class MemoEdit extends Vue {
    memo: ItemData = new ItemData(-1, 0)
    
    constructor() {
        super()
    }

    created():void {
        this.memo = this.$store.state.transMemo
        console.log('123', this.memo)
    }
    close():void {
        this.$store.state.isShow = false
    }
    save(): void {
        if (this.memo
            && this.memo.cateId > -1
            && this.memo.title.trim().length > 0
            && this.memo.content.trim().length > 0
        ) {
            if (this.memo.id === -1) {
                this.$store.state.aHelper.add(this.memo)
            } else {
                this.$store.state.aHelper.edit(this.memo)
            }
            this.$store.state.isShow = false
        } else {
            alert('对不起，请填写完整内容！')
        }
    }
}
</script>
<style scoped>
.edit {
    padding: 16px;
    width: 500px;
    height: 300px;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>