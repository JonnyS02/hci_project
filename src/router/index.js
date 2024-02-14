
import { createRouter, createWebHistory } from "vue-router";
import Home from '../Home.vue'
import Login from '../Login.vue'
import CourseListProf from '../CourseListProf.vue'
import CourseListStudi from '../CourseListStudi.vue'
import Schedule from '../Schedule.vue'
import Schedule_prof from '../Schedule_prof.vue'
import Verlaufsplan from '../Verlaufsplan.vue'
import Verlaufsplan_prof from '../Verlaufsplan_prof.vue'
import Postfach from '../Postfach.vue'
import Leistungen from '../Leistungen.vue'
import Profil from '../Profil.vue'
import Coursedetail from '../Coursedetail.vue'
import Addcourse from '../Addcourse.vue'



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
        },
        {
            path: "/Schedule_prof",
            name: "Schedule_prof",
            component: Schedule_prof 
        },
        {
            path: "/verlaufsplan",
            name: "Verlaufsplan",
            component: Verlaufsplan 
        },
        {
            path: "/verlaufsplan_prof",
            name: "Verlaufsplan_prof",
            component: Verlaufsplan_prof 
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
        {
            path: "/coursedetail",
            name: "Coursedetail",
            component: Coursedetail 
        },
        {
            path: "/addcourse",
            name: "Addcourse",
            component: Addcourse 
        },
    ]
})

export default router
