<template>
    <div>
        <div style="float:left; margin:0 30px 30px 0;">
            <div>
                <button style="margin-right: 12px;" @click="showEdit">修改</button>
                <button @click="doDel(memo)">删除</button>
            </div>
            <div>{{memo.title}}</div>
            <div>{{memo.createTime}}</div>
            <div>分类：{{$store.state.aHelper.getCategory(memo.cateId)}}</div>
            <div>{{memo.content}}</div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ItemData from '../model/ItemData'
@Component
export default class MemoItem extends Vue {
    @Prop() memo!: ItemData
    doDel(item: ItemData): void {
        if (!confirm(`确定要删除[${item.title}]笔记吗？`)) return
        this.$store.state.aHelper.remove(item.id)
    }
    showEdit() {
        let newMemo = JSON.parse(JSON.stringify(this.memo))
        this.$store.commit('showEditMemo', newMemo)
    }
}
</script>