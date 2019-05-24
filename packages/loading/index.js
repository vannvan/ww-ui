import WLoading from './src/loading.vue';

WLoading.install = function (Vue) {
  Vue.component(WLoading.name, WLoading);
};

export default WLoading;
