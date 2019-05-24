<template lang="html">
  <div class="footer">
    <img src="https://avatar-static.segmentfault.com/255/947/2559476360-5c30d358d524d_big64" alt="" style="height:40px;">
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
