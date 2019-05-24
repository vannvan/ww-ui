<template lang="html">
  <div>
    <section>
      <h1>color 色调</h1>
      <hr>
      <h3>主色调</h3>
      <div style="width:100%;height:90px;">
        <div v-for="(item, index) in primaryColor" :class="['wui-color','wui-color__' + item.name]">
          <p>{{item.name}}</p>
          <p>{{item.color}}</p>
        </div>
      </div>
      <br>
      <h3>辅助色调</h3>
      <div style="width:100%;height:90px">
        <div v-for="(item, index) in otherColor" :key="index" :class="['wui-other-color','wui-other-color__' + item.name]">
          <p>{{item.name}}</p>
          <p>{{item.color}}</p>
        </div>
      </div>
      <br>
      <div class="grid">
        <!-- 5个卡片 -->
        <div class="item">00</div>
        <div class="item">11</div>
        <div class="item">22</div>
        <div class="item">33</div>
        <div class="item">44</div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      primaryColor:[
        {
          name:"primaryColor",
          color:"#35A785"
        },
        {
          name:"primaryLightColor",
          color:"#3EC29A"
        },
        {
          name:"primaryActiveColor",
          color:"#239E6D"
        }
      ],
      otherColor:[
        {
          name:'info',
          color:'#42E5D3'
        },
        {
          name:'success',
          color:'#13ce66'
        },
        {
          name:"warning",
          color:'#FFD82B'
        },
        {
          name:'error',
          color:'#FF422B'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// 三列布局
.grid {
    display: flex;
    flex-flow: wrap;
        // justify-content: space-between;
}
.item {
flex: 0 0 30%;
/* margin 改成下面这样就可以了 */
margin-top: 24px;
margin-left: calc((100% - 3 * 30%) / 4);

}
</style>
