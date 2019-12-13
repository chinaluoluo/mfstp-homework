import Vue from 'vue'

Vue.config.productionTip = false

const NotFound = { template: '<p>Page not found</p>' }
import About from './components/About'
import Home from './components/Home'
const routes = {
    '/': Home,
    '/about': About
}

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) { return h(this.ViewComponent) }
})