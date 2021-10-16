import Vue from "vue";
import App from "./components/App";
import Vuelidate from "vuelidate"
import VueMask from 'v-mask'

Vue.config.productionTip = false;
Vue.use(Vuelidate)
Vue.use(VueMask)

new Vue({
  render: h => h(App)
}).$mount("#app");
