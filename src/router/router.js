
import {createRouter, createWebHistory} from 'vue-router'
import MainMenu from '../components/MainMenu'
import TestList from '../components/TestList'


let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainMenu
        },
        {
            path: '/test',
            component: TestList
        }
    ]
})

export default router;