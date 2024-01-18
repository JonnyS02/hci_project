
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../Welcome.vue"
import Home from '../Home.vue'
import About from '../About.vue'
import Login from '../Login.vue'
import CourseProf from '../CourseProf.vue'

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
            path: "/courseprof",
            name: "CourseProf",
            component: CourseProf 
        }
    ]
})

export default router
