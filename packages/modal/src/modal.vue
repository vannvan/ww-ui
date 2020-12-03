<template>
  <div>
    <transition name="fade">
      <div class="public-mask" v-show="visible"></div>
    </transition>
    <transition name="modal-fade">
      <div class="modal-wrap" v-if="visible" @click="handleMask()">
        <div
          class="public-modal clearfix"
          :style="modalWidth"
          v-show="visible"
          @click.stop
        >
          <div :class="[prefixCls + '--header']" v-if="showHead">
            <slot name="header">{{ title }}</slot>
            <i
              class="icon-close"
              :class="[prefixCls + '__closeIcon']"
              @click="close()"
              v-if="closable"
            ></i>
          </div>
          <div :class="[prefixCls + '--content']">
            <slot></slot>
          </div>
          <div
            class="modal-footer"
            :class="[prefixCls + '--footer']"
            v-if="!footerHide"
          >
            <div
              :class="[prefixCls + '--btn', prefixCls + '--btn--cancel']"
              @click="close()"
            >
              取消
            </div>
            <div
              :class="[
                prefixCls + '--btn',
                prefixCls + '--btn--ok',
                prefixCls + '--btn--' + type,
              ]"
              @click="ok()"
            >
              {{ okText }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const prefixCls = "wui__modal";
export default {
  name: "WModal",
  data() {
    return {
      prefixCls: prefixCls,
      visible: this.value,
      showHead: true,
    };
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
    width: {
      type: String,
      default: "400",
    },
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    okText: {
      type: String,
      default: "确定",
    },
    content: {
      type: String,
      default: "这是弹框内容",
    },
    footerHide: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    maskClosable: {
      type: Boolean,
      default() {
        return !this.$WUI || this.$WUI.transfer === "" ? true : false;
      },
    },
  },
  watch: {
    value(val) {
      this.visible = val;
    },
  },
  computed: {
    modalWidth() {
      const style = {};
      style.width = this.width + "px";
      return style;
    },
  },
  mounted() {
    //do something after mounting vue instance
    // console.log(this.$slots.header)
    // console.log(this.footerHide)
    let showHead = true;
    if (this.$slots.header == undefined && !this.title) {
      showHead = false;
    }
    this.showHead = showHead;
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit("input", false); //this is important
    },
    handleMask() {
      // console.log('clicked mask')
      if (this.maskClosable) {
        this.close();
      }
    },
    ok() {
      this.$emit("on-ok");
      this.visible = false;
      this.$emit("input", false); //this is important
    },
  },
};
</script>

<style lang="scss">
.modal-wrap {
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  outline: 0;
  .public-modal {
    margin: 0 auto;
    position: relative;
    outline: 0;
    top: 100px;
    background: #fff;
    .modal-footer {
      height: 35px;
      width: 320px;
      margin: 25px auto;
    }
  }
}
</style>
