<template lang="html">
  <div class="index-container">
    <!-- <img src="../assets/img/logo.png"> -->
    <!-- <p>一款轻量级、模块化的前端 UI 组件库</p> -->
    <!-- <router-link :to="{ name: 'icon', params: {} }">组件</router-link> -->
    <div style="height:450px;margin-bottom:-50px">
      <Logo></Logo>
    </div>
    <div class="actionBox">
      <span style="background-image: linear-gradient(45deg, #43e97b 0%, #38f9d7 99%, #38f9d7 100%);" @click="loadPage('https://vannvan.github.io/w-ui/dist/#/')">
        组件
      </span>
      <span style=" background-image: linear-gradient(45deg, #e0c3fc 0%, #8ec5fc 99%, #8ec5fc 100%);" @click="loadPage('https://github.com/vannvan/w-ui')">
        github
      </span>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/logo.vue'
export default {
  components: {
    Logo
  },
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

  },
  methods: {
    loadPage(url) {
      window.location.href = url
    }
  }



}
</script>

<style lang="scss">
.index-container{
  // padding: 50px;
  text-align: center;
  margin-top: -50px;
  margin-bottom:250px;
}
.actionBox{
  span{
    padding: 15px 50px;
    color: #fff;
    border-radius: 30px;
    cursor: pointer;
  }
  span:first-child{
    margin-right: 100px;
  }
}
</style>
