import Vue from 'vue'
import Router from 'vue-router'
import user from '../components/user'
// import VueTables from 'vuetable-2'
import Datatable from 'vue2-datatable-component'
Vue.use(Datatable)
Vue.use(Router)
// Vue.use(VueTables.client, options)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: user
    }
  ]
})
