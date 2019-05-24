<template lang="html">
  <div class="index-container">
    <!-- <img src="../assets/img/logo.png"> -->
    <p>一款轻量级、模块化的前端 UI 组件库</p>
    <router-link :to="{ name: 'icon', params: {} }">组件</router-link>
    <div style="width:300px">
      <w-menu :router="router"></w-menu>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      router:[
      {
        name: "About",
        path: "/about",
        children: [
          {
            name: "About US",
            path: "/about/us"
          },
          {
            name: "About Comp",
            path: "/about/company",
            children: [
              {
                name: "About Comp A",
                path: "/about/company/A",
                children: [
                  {
                    name: "About Comp A 1",
                    path: "/about/company/A/1"
                  },
                  {
                    name: "About Comp A 2",
                    path: "/about/company/A/1"
                  }
                ]
              },
              {
                name: "About Comp B",
                path: "/about/company/A",
              }
            ]
          }
        ]
      },
      {
        name: "Link",
        path: "/link"
      }
    ]
    }
  },
  mounted() {

  }



}
</script>

<style lang="scss">
.index-container{
  padding: 50px;
  text-align: center;
}
</style>
