<template>
  <ul class="navbar">
    <router-link
      tag="li"
      v-for="(item,index) in bars"
      :key="index"
      :to="{ path: '/' + item.id }"
      active-class="active"
      :class="item.id"
    >
      <i class="iconfont" :class="item.icon"></i>
      <span v-text="item.name"></span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      bars: [
        {
          id: 'index',
          name: '首页',
          icon: 'iconfont-zhuye'
        },
        {
          id: 'group',
          name: '拼团',
          icon: 'iconfont-iconset0203'
        },
        {
          id: 'card',
          name: '购物车',
          icon: 'iconfont-gouwuche-01'
        },
        {
          id: 'center',
          name: '我的',
          icon: 'iconfont-wode1'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
.navbar {
  height: 50px;
  display: flex;
  background: #fff;
  text-align: center;
  font-size: 14px;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    i {
      font-size: 28px;
    }
  }
}
.active {
  color: rgb(254, 64, 112);
}
</style>
