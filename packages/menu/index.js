import WMenu from './src/menu.vue';

WMenu.install = function (Vue) {
  Vue.component(WMenu.name, WMenu);
};

export default WMenu;
