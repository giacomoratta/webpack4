import Vue from 'vue'
import App from './App.vue'
import Profile from './components/profile'

new Vue({
  el: '#app',

  components: {
    Profile
  },

  /**
   * h (named by convention) is 'createElement'.
   * It takes a Vue template.
   */
  render: h => h(App)
})