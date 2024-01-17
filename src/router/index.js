
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../Welcome.vue"
import Home from '../Home.vue'
import About from '../About.vue'
import Login from '../Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/welcome",
            name: "Welcome",
            component: Welcome        
        },
        {
            path: "/",
            name: "Home",
            component: Home 
        },
        {
            path: "/about",
            name: "About",
            component: About 
        },
        {
            path: "/login",
            name: "Login",
            component: Login 
        }
    ]
})

export default router
