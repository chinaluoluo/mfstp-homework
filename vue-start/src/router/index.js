import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Home2 from '@/components/Home2'
import About2 from '@/components/About2'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home2',
            component: Home2
        },
        {
            path: '/home',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/about2',
            name: 'About2',
            component: About2
        }
    ]
})