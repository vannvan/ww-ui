<template lang="html">
  <div class="footer">
    <img src="https://avatars.githubusercontent.com/u/43501134?v=4" alt="" style="height:40px;">
    <span>
      segmentfault系列文章：
      <a href="https://segmentfault.com/a/1190000019041312">从零开始构建自己的vue组件库</a>
    </span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.footer{
  width: 50%;
  position: fixed;
  bottom: 0;
  padding: 15px 25%;
  border-top: 1px #dbdbdb solid;
  text-align: center;
  background: #fff;
  img{
    float: left;
  }
  span{
    width: auto;
    line-height: 40px;
    height: 40px;
    display: block;
  }
}
</style>
