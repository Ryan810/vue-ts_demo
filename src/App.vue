<template>
  <div id="app">
    <MenuBar />
    <ItemList />
    <MemoEidt v-if="$store.state.isShow" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from './components/MenuBar.vue'
import ItemList from './components/ItemList.vue'
import MemoEidt from './components/MemoEditor.vue'
@Component({
  components: {
    MenuBar,
    ItemList,
    MemoEidt
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
button {
  padding: 4px 8px;
}
</style>
