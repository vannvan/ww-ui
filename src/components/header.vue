<style type="text/less" lang="less">
  @import "../assets/less/index";
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
    }
  }
</style>
<template>
  <header class="page-header">
    <div class="header-container">
      <!-- <router-link :to="{name: 'index'}"><img src="../assets/img/banner.png" width="100"></router-link> -->
      <!-- <router-link :to="{name: 'giud'}">组件</router-link> -->
      <h1 class="" @click="showAlert()">Ww-UI</h1>
    </div>
    <!-- <W-Modal v-model="showModal" title="提示" showFooter=true></W-Modal> -->
  </header>
</template>

<script>
  export default {
    data () {
      return {
        showModal:true
      }
    },
    mounted() {
      //do something after mounting vue instance
      // this.$Modal.confirm({
      //     title:'警告',
      //     content: '数据删除后不可恢复',
      //     width:'300',
      //     onOk: () => {
      //        console.log('点击了ok')
      //     },
      //     onCancel: () => {
      //       return
      //     }
      // });
    }
  }
</script>
