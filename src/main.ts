import Vue from 'vue'
import App from './App.vue'
import ItemData from './model/ItemData'
import CateEnum from './model/CategoryEnum'
import ActionHelper from './store/ActionHelper'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

let ah = new ActionHelper()
console.log(ah.memoList)
// 测试新增
// let newItem = new ItemData(3, CateEnum.Life, '你喜欢单手打飞机', '吹牛')
// let newId = ah.add(newItem)
// console.log(newId)

// 测试修改
// let newItem = new ItemData(3, CateEnum.Work, '来做前端开发吧', '招聘')
// ah.edit(newItem)

// 测试删除
// ah.remove(3)
