import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper'
import ItemData from '@/model/ItemData'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        aHelper: new ActionHelper(),
        transMemo: null,
        isShow: false,
        filterCateId: -1
    },
    mutations: {
        showEditMemo(state: any, editMemo: any) {
            state.transMemo = editMemo
            state.isShow = true
        }
    }
})

export default store