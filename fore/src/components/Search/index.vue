<template>
  <div class="search">
    <a href="javascript:;">
      <i class="iconfont iconfont-magnifier"></i>
      <span>{{ val.txt }}</span>
    </a>
    <span class="search_action">
      <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" >
    </span>
  </div>
</template>

<script>
export default {
  props: ['val']
}
</script>

<style lang='scss'>
  .search {
    background: #fff;
    overflow: hidden;
    position: relative;
    display: block;
    a {
      margin: .4375rem 2.88rem .347rem 1.07rem;
      color: #999;
      background: #F5F5F5;
      border-radius: 1.25rem;
      height: 1.653rem;
      line-height: 1.653rem;
      position: relative;
      display: block;
      box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
      font-size: 14px;
      text-align: center;
      i {
        margin-right: 4px;
      }
    }
    .search_action {
      width: 1.28rem;
      height: .987rem;
      position: absolute;
      bottom: .78rem;
      right: .64rem;
      z-index: 12;
    }
  }
</style>
