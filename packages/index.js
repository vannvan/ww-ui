// Copyright (c) 2019 by https://github.com/vannvan.
// All Rights Reserved.

import WButton from "./button/index.js";
import WModal from "./modal/index.js";
import WAlert from "./alert/index";
import WIcon from "./icon/index";
import WMessage from "./message/index";
import WNotice from "./notice/index";
import WLoading from "./loading/index";
import WMenu from "./menu/index";
const components = [
  WButton,
  WModal,
  WAlert,
  WMessage,
  WNotice,
  WIcon,
  WLoading,
  WMenu,
];

const install = function (Vue) {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
  Vue.prototype.$Modal = WModal;
  Vue.prototype.$Message = WMessage;
  Vue.prototype.$Notice = WNotice;
  Vue.prototype.$WUI = {
    transfer: "transfer" in opts ? opts.transfer : "",
    modal: {
      maskClosable: opts.modal
        ? "maskClosable" in opts.modal
          ? opts.modal.maskClosable
          : ""
        : "",
    },
  };
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  WButton,
  WAlert,
  WModal,
  WMessage,
  WNotice,
  WIcon,
  WLoading,
  WMenu,
};
