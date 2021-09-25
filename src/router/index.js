import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Project from '/src/components/Project.vue'
import HistoryPath from '/src/views/HistoryPath.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/project',
        name: 'Project',
        component: Project,
    },
    {
        path: '/historypath',
        name: 'HistoryPath',
        component: HistoryPath,
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
