<template>
  <div class='home'>
    <router-view></router-view>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from '../components/Navbar/index'
export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>

<style lang='scss'>
 .home {
   display: flex;
   flex-direction: column;
   height: 100%;
 }
</style>
