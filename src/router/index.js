
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../Welcome.vue"
import Home from '../Home.vue'
import About from '../About.vue'
import Login from '../Login.vue'
import CourseList from '../CourseList.vue'
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
            path: "/courselist",
            name: "CourseList",
            component: CourseList 
        },
        {
            path: "/schedule",
            name: "Schedule",
            component: Schedule 
        }
    ]
})

export default router
