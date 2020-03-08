import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import Antd from "ant-design-vue";
//import "ant-design-vue/dist/antd.less";全局引入占用大

import { Button, Layout, Icon, Drawer, Radio } from "ant-design-vue";

//import Buttob from "ant-design-vue/lib/button";
//import "ant-design-vue/lib/button/style"; 分开引用不方便 用babel

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

//Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
