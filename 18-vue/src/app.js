import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',

  /**
   * h (named by convention) is 'createElement'.
   * It takes a Vue template.
   */
  render: h => h(App)
})