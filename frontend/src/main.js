// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import store from './vuex'
import Vuex from 'vuex'
import App from './App'
import routes from './router'
import axios from 'axios'
import ImgLazyLoad from 'vue-lazyload'
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';

Vue.use(Router);
Vue.use(MuseUi);
Vue.use(axios);
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
// window.axios = axios;
Vue.use(ImgLazyLoad, {
  loading: 'http://image.heitem.com/timg.gif',
  })

const router = new Router({
  routes
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
