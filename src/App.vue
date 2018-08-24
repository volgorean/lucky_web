<template>
  <div class="middle" v-if="$d.user">
    <layoutNav></layoutNav>

    <div id="main">
      <router-view></router-view>
    </div>
  </div>

  <login v-else></login>
</template>

<style lang="scss">
  @import "./assets/css/global.scss";
  @import "./assets/css/font-awesome.css";
</style>

<script>
  import login from './components/auth/login.vue'
  import layoutNav from './components/shared/nav.vue'
  
  export default {
    components: {
      login,
      layoutNav,
    }
  }
</script>