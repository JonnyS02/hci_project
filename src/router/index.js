
import { createRouter, createWebHistory } from "vue-router";
import Home from '../Home.vue'
import Login from '../Login.vue'
import CourseList from '../CourseList.vue'
import Schedule from '../Schedule.vue'
import Verlaufsplan from '../Verlaufsplan.vue'
import Postfach from '../Postfach.vue'
import Leistungen from '../Leistungen.vue'
import Profil from '../Profil.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [        
        {
            path: "/",
            name: "Login",
            component: Login 
        },
        {
            path: "/home",
            name: "Home",
            component: Home 
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
        },
        {
            path: "/verlaufsplan",
            name: "Verlaufsplan",
            component: Verlaufsplan 
        },
        {
            path: "/leistungen",
            name: "Leistungen",
            component: Leistungen 
        },
        {
            path: "/postfach",
            name: "Postfach",
            component: Postfach 
        },
        {
            path: "/profil",
            name: "Profil",
            component: Profil 
        },
    ]
})

export default router
