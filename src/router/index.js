
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../Welcome.vue"
import Home from '../Home.vue'
import About from '../About.vue'
import Login from '../Login.vue'
import CourseListProf from '../CourseListProf.vue'
import CourseListStudi from '../CourseListStudi.vue'
import Schedule from '../Schedule.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/welcome",
            name: "Welcome",
            component: Welcome        
        },
        {
            path: "/home",
            name: "Home",
            component: Home 
        },
        {
            path: "/about",
            name: "About",
            component: About 
        },
        {
            path: "/",
            name: "Login",
            component: Login 
        },
        {
            path: "/courselistprof",
            name: "CourseListProf",
            component: CourseListProf 
        },
        {
            path: "/courseliststudi",
            name: "CourseListStudi",
            component: CourseListStudi 
        },
        {
            path: "/schedule",
            name: "Schedule",
            component: Schedule 
        }
    ]
})

export default router
