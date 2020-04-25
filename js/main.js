import Vue from 'vue';
import App from './App.vue';
import ItemData from './model/ItemData';
Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
}).$mount('#app');
let item1 = new ItemData(1, 2, 'TS学习课程', '大家一起来学习TS吧！');
console.log(item1);
//# sourceMappingURL=main.js.map