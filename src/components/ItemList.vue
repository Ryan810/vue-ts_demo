<template>
    <div>
        <MemoItem v-for="item in filterCate()" :key="item.id" :memo="item"/>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ItemData from '../model/ItemData'
import MemoItem from './MemoItem.vue'
@Component({
    components: {
        MemoItem
    }
})
export default class ItemList extends Vue {
    memoArr: Array<ItemData> = this.$store.state.aHelper.memoList
    filterCate() {
        if (this.$store.state.filterCateId === -1) {
            return this.memoArr
        } else {
            return this.$store.state.aHelper.memoList.filter((ele: ItemData) => {
                return ele.cateId === this.$store.state.filterCateId
            })
        }
    }
}
</script>
