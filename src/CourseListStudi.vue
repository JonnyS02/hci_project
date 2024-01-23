<template>
    <div class="courses-container">
        <h1 class="no_caret">Your courses, <span :style="{ color: '#e8672c' }">{{ user ? user.name : 'Guest' }}</span></h1>

        <div class="content">
            <div class="list">
                <ul>
                    <li class="card_holder" v-for="course in userCourses" :key="course.id">
                        <div class="course-card">
                            <span class="bullet" style="color: #ff8045;">&#8226;</span>
                            <span style="color: #ff8045;">{{ course.name }}</span><br> Raum: {{ course.raum }},
                            {{ course.day }} {{ course.timeslot }}
                        </div>
                    </li>
                </ul>
            </div>

            <div class="signin-container">
                <h2 style="color: #e8672c; font-size: 24px; font-weight: bold; text-align: center;">Sign into a new course
                    <br><br>
                </h2>

                <div class="course-cards-container">
                    <transition-group appear @before-enter="beforeEnter" @enter="enter">
                        <li v-for="(course, index) in availableCourses" :key="course.id" class="course-cards"
                            :data-index="index" @click="handleCourseSelection(course)">
                            <span style="font-size: 18px; font-weight: bold; color: #e8672c;">{{ course.name }}</span><br>
                            Professor: {{ course.prof }}<br>
                            Raum: {{ course.raum }}, Zeit:
                            {{ course.day }} {{ course.timeslot }}<br>
                            <span style="font-size: 18px; color: #e8672c;">Beschreibung:</span>
                            {{ course.description }}
                            <div class="signup-overlay" @click="handleSignup">Anmelden</div>
                        </li>
                    </transition-group>
                </div>

            </div>
        </div>
    </div>
</template>
  
<style scoped>
.content {
    display: flex;
    justify-content: space-between;
    /* Neu: Platz zwischen den beiden Container */
}

.list {
    padding-top: 4%;
    flex: 0 0 50%;
}

.course-card {
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
}

.course-cards {
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    border: 1px solid #e8672c;
    margin-bottom: 10px;
    border-radius: 10px;
    position: relative;
    /* Neu: Position relativ für die Überlagerung */
}

.signup-overlay {
    display: none;
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #e8672c;
    color: white;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.course-cards:hover .signup-overlay {
    display: block;
}

.course-cards:hover {
    background-color: #8686863b;
    color: white;
}

.bullet {
    margin-right: 5px;
}

.list ul {
    list-style: none;
    padding: 0;
}

.signin-container {
    flex: 1;
    padding: 10px;
}

label {
    margin-top: 10px;
}
</style>
  
  
<script>
import { ref, computed } from 'vue';
import Navbar from './components/navbar.vue';
import gsap from 'gsap'
import store from './store';

export default {
    components: {
        Navbar,
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        },
        userCourses() {
            return this.$store.getters.getUserCourses(this.user.id);
        },
    },
    methods: {
        handleCourseClick(course) {
            // Aktion für das Klicken auf einen Kurs in der Courselist
            console.log("Clicked on course:", course);
        },
        handleCourseSelection(course) {
            // Aktion für das Klicken auf einen Kurs in der Sign-in-Liste
            console.log("Selected course:", course);
            // Hier kannst du die Logik für die Anmeldung zu einem Kurs implementieren
        },
    }, setup() {
        const user = store.getters.getUser; // To get user informations //klappt
        const userCourses = store.getters.getUserCourses(user.id); //To get courses from user //klappt

        const courses = ref([
            { id: 0, name: 'Orbitalmechanik', prof: 'Merkur', raum: 'C31', day: "Mo", timeslot: "10:15", description: "Erforschen Sie die Bewegung von Himmelskörpern im Weltraum und lernen Sie, wie Gravitation und Geschwindigkeit sie beeinflussen." },
            { id: 1, name: 'Raumfahrtsystemarchitektur', prof: 'Jupiter', raum: 'B404', day: "Di", timeslot: "10:15", description: "Gestalten Sie komplexe Raumfahrtmissionen und entwerfen Sie Systeme für den sicheren und effizienten Transport im Weltraum." },
            { id: 2, name: 'Raumfahrtmissionen und -planung', prof: 'Neptune', raum: 'K44', day: "Di", timeslot: "14:15", description: "Tauchen Sie ein in die Planung und Umsetzung von Raumfahrtmissionen, von der Konzeption bis zur Realisierung." },
            { id: 3, name: 'Fortgeschrittene Satellitentechnik', prof: 'Venus', raum: 'K19', day: "Mo", timeslot: "16:15", description: "Vertiefen Sie Ihr Verständnis für Satellitentechnologien und lernen Sie fortschrittliche Methoden für innovative Anwendungen kennen." },
            { id: 4, name: 'Astronomie und Kosmologie', prof: 'Venus', raum: 'F3', day: "Th", timeslot: "10:15", description: "Entdecken Sie die Geheimnisse des Universums, erforschen Sie ferne Galaxien und verstehen Sie die grundlegenden Prinzipien der Kosmologie." },
            { id: 5, name: 'Exoplaneten Forschung', prof: 'Merkur', raum: 'F7', day: "We", timeslot: "14:15", description: "Untersuchen Sie Planeten außerhalb unseres Sonnensystems und erkunden Sie die Vielfalt dieser faszinierenden Welten." },
            { id: 6, name: 'Theoretische Astrophysik', prof: 'Jupiter', raum: 'C24', day: "Sa", timeslot: "10:15", description: "Vertiefen Sie Ihr Verständnis für die physikalischen Prinzipien des Universums und erforschen Sie theoretische Modelle für astronomische Phänomene." },
            { id: 7, name: 'Raumzeit und Relativität', prof: 'Jupiter', raum: 'C1', day: "Fr", timeslot: "14:15", description: "Tauchen Sie ein in die faszinierende Welt von Raum und Zeit und verstehen Sie die Auswirkungen der allgemeinen Relativitätstheorie." },
            { id: 8, name: 'Gravitationsphysik', prof: 'Neptune', raum: 'F7', day: "Fr", timeslot: "10:15", description: "Erforschen Sie die Kräfte der Schwerkraft und ihre Auswirkungen auf die Struktur und Entwicklung des Universums." },
        ]);

        const availableCourses = computed(() => {
            // Filtere die Kurse, die der Nutzer noch nicht belegt hat
            console.log(courses.value.filter(course => !userCourses.includes(course.id)));
            return courses.value.filter(course => !userCourses.some(userCourse => userCourse.id === course.id));
        });

        const beforeEnter = (el) => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(100px)';
        };

        const enter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                onComplete: done,
                delay: el.dataset.index * 0.2,
            });
        };

        const handleCourseClick = (course) => {
            // Aktion für das Klicken auf einen Kurs in der Courselist
            console.log("Clicked on course:", course);
        };

        const handleCourseSelection = (course) => {
            console.log("Selected course:", course);
            store.dispatch('enrollInCourse', course.id);
            console.log("Hallo", store.getters.getUser.courses); // Nutze hier store.getters.getUser
        };

        return { user, userCourses, availableCourses, beforeEnter, enter, handleCourseClick, handleCourseSelection };
    },
};
</script>
