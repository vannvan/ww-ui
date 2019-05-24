<!-- Menu -->
<template>
  <ul class="wrapper">
    <!-- 遍历 router 菜单数据 -->
    <MenuItem :key="index" v-for="(item, index) in router">
      <!-- 对于没有 children 子菜单的 item -->
      <span class="item-title" v-if="!item.children">{{item.name}}
      </span>
      <!-- 对于有 children 子菜单的 item -->
      <template v-else>
        <span @click="handleToggleShow" class="item-p-title">
          {{item.name}}
          <i class="icon-Cheveron cheveron"  v-if="!toggleShow"></i>
          <i class="icon-cheveron-down cheveron" v-else></i>
        </span>

        <!-- 递归操作 -->
        <WMenu :router="item.children" v-if="toggleShow"></WMenu>
      </template>
    </MenuItem>
  </ul>
</template>

<script>
  import MenuItem from "./menuItem";

  export default {
    name: "WMenu",
    props: ["router"], // Menu 组件接受一个 router 作为菜单数据
    components: { MenuItem },
    data() {
      return {
        toggleShow: false // toggle 状态
      };
    },
    methods: {
      handleToggleShow() {
        // 处理 toggle 状态的是否展开子菜单 handler
        this.toggleShow = !this.toggleShow;
      }
    }
  };
</script>
<style lang="scss">
.wrapper {
  cursor: pointer;
  // width: 300px;
  .item-title {
    display: block;
    font-size: 16px;
    padding: 10px 40px;
    border-bottom: 1px solid #ccc;
    &:hover{
      background: #3EC29A
    }
  }
  .item-p-title{
    display: block;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    // position: relative;
  }
  .cheveron{
    float: right;
    // position: absolute;
    // right: 0
  }
}
</style>
