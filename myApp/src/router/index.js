import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import Button from '@/components/Button'
import User from '@/components/User'
import Chart from '@/components/Chart'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sds',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    }
  ]
})
