<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <mainHeader></mainHeader>
    <div class="container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
      <transition   name="slide-fade" mode="in-out">
        <router-view class="view"></router-view>
      </transition>
    </div>
    <router-view class="page" v-else></router-view>
    <Footer></Footer>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import sideNav from './components/side-nav.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  data () {
    return {
      isIndex: true,
    }
  },
  watch: {
    $route (to,from) {
      this.isIndex = this.$route.name === 'index'
    }
  },
  components: {
    sideNav,mainHeader,Footer
  }
}
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
  .container {
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      float: left;
      width: 210px;
    }
    .view {
      float: left;
      width: calc(~'100% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(calc(~'100% - 215px'));
    opacity: 0;
  }

</style>
