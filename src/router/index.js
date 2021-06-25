import { createRouter, createWebHistory } from "vue-router";
import '../public-path'
const routes = [
    { path: "/", redirect: "/child" },
    {
        path: '/child',
        component: () =>
            import ('@/components/Child')
    }

]
export default createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    history: createWebHistory(),
    routes: routes
})