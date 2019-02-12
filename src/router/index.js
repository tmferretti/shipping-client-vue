import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VendorsList from '@/components/VendorsList'
import VendorsShow from '@/components/VendorsShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vendors',
      name: 'VendorsList',
      component: VendorsList
    },
    {
      path: '/vendors/:id',
      name: 'VendorsShow',
      component: VendorsShow
    }
  ]
})
