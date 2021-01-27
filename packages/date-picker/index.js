import DatePicker from "./src/date-picker.vue";

DatePicker.install = function(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;
