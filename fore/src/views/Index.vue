<template>
  <div class="index">
    <Search :val=searchVal></Search>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Search from '../components/Search/index'
import Tabbar from '../components/Tabbar/index'
export default {
  name: 'index',
  data () {
    return {
      searchVal: {
        txt: '搜索商品 分类 功效'
      }
    }
  },
  components: {
    Search,
    Tabbar
  }
}
</script>

<style lang='scss'>
  .index {
    height: 100%;
    flex: 1;
    overflow-y: auto;
  }
</style>
