<template>
  <div class="tab-bar">
    <mt-navbar v-model="selected">
      <mt-tab-item v-for="item in titleArr" :key="item.id" :id="item.id">{{ item.title }}</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div>你好</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem, Cell } from 'mint-ui'

export default {
  name: 'tabBar',
  data () {
    return {
      selected: '1',
      titleArr: [
        {
          id: '1',
          title: '首页',
        },
        {
          id: '2',
          title: '极速免税店',
        },
        {
          id: '3',
          title: '母婴',
        },
        {
          id: '4',
          title: '轻奢',
        },
        {
          id: '5',
          title: '名品特卖',
        }
      ]
    }
  },
  components: {
    'mt-navbar': Navbar,
    'mt-tab-item': TabItem,
    'mt-tab-container': TabContainer,
    'mt-tab-container-item': TabContainerItem,
    'mt-cell': Cell
  }
}
</script>

<style>

</style>
