import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vuex
import { store } from './store/store.js'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Moments
// import moment from 'moment'
// Vue.use(moment);


new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
