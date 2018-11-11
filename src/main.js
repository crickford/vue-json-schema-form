import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import Autosize from 'autosize'

Vue.use(Buefy);

Vue.directive('autosize', {
  inserted: function (el) {
    const textarea = el.querySelector('textarea')
    Autosize(textarea)
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
