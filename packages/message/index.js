import Vue from 'vue';
import Message from './src/message.vue';
const defaults = {
    visible:false,
    content:undefined,
    duration:'3',
    type:'info',
    closable:false,
    closeTxt:null,
    top:20,
    iconType:''
};
const typeMap = {
  "info":'icon-info',
  "error":'icon-heart-broken',
  "warning":'icon-stopwatch',
  "success":'icon-checkmark-outline'
}
const MessageVueConstructor = Vue.extend(Message);

MessageVueConstructor.prototype.close = function() {
  var vm=this;
  this.$on('after-leave', _ => {
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el);
    }
    this.$destroy();
  });
    vm.visible = false;

};
const messageBox = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    options = Object.assign({}, defaults, options);
    let instance = new MessageVueConstructor({
      el: document.createElement('div'),
      data: options
    });
    if(!instance.type||!instance.content){return false}
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.visible = true;
      instance.iconType = typeMap[instance.type]
      // if duration is 0 means can't close
      if(instance.duration!=0){
        setTimeout(function(){
          instance.close();
        },options.duration*1000)
      }
    });
    return instance;
  };

export default messageBox;
