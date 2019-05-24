<template lang="html">
  <transition name="message-fade">
    <div class="wui__message" :class="[prefixCls + '--' + type]" v-if="visible">
      <i  :class="[prefixCls + '__icon' + '--' + type,iconType]"></i>
      <div :class="[prefixCls + '__content']">
        <span :class="[prefixCls + '__content' + '__body']" v-html="content"></span>
        <span v-if="closeTxt" @click="close()" :class="[prefixCls + '__closeTxt']">
          {{closeTxt}}
        </span>
        <span v-if="closable" :class="[prefixCls + '__iconbox']">
          <i class="icon-close" :class="[prefixCls + '__icon']"  @click="close()"></i>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
const prefixCls = 'wui__message';
export default {
  name:'Message',
  data(){
    return {
      prefixCls:prefixCls,
    }
  },
  mounted() {
    //do something after mounting vue instance
    if(this.closeTxt){
      this.closable = false
    }
  },
  methods: {
    close() {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
