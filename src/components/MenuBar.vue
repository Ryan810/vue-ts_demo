<template>
    <div class="top-bar">
        <div class="buttons">
            <button class="btn" @click="add">新建</button>
            <button class="btn" @click="show(-1)">全部（{{doFilter(-1)}}）</button>
            <button class="btn" @click="show(0)">工作（{{doFilter(0)}}）</button>
            <button class="btn" @click="show(1)">生活（{{doFilter(1)}}）</button>
            <button class="btn" @click="show(2)">学习（{{doFilter(2)}}）</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemData from '../model/ItemData'
@Component({
    components: {}
})
export default class Menubar extends Vue {
    add() {
        this.$store.state.transMemo = new ItemData(-1, 0)
        this.$store.state.isShow = true
    }
    doFilter(cid: number): number {
        if (cid === -1) {
            return this.$store.state.aHelper.memoList.length
        } else {
            return this.$store.state.aHelper.memoList.filter((ele:ItemData) => {
                return ele.cateId === cid
            }).length
        }
    }
    show(cid: number): void {
        this.$store.state.filterCateId  = cid
    }
}
</script>
<style scoped>
.top-bar {
    width: 100%;
    background-color: #eee;
    height: 50px;
    position: fixed;
    top: 0;
}
.buttons {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
}
.btn {
    display: inline-block;
    margin-right: 8px;
}

</style>