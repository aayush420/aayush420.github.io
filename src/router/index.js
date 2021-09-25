import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Project from '/src/components/Project.vue'
import HistoryPath from '/src/views/HistoryPath.vue'
const routes = [
    {
        path: '/project',
        redirect: '/'
    },
    {
        path: '/project/:type/:item',
        name: 'Project',
        component: Project,
        props: true
    },
    {
        path: '/historypath',
        name: 'HistoryPath',
        component: HistoryPath,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
