<template>
    <div class="courses-container">
        <div id="confirmModal" class="confirm-modal">
            <div class="modal-content">
                <p v-if="selectedCourse">Möchten Sie sich wirklich für den Kurs <span :style="{ color: '#e8672c' }">{{
                    selectedCourse.name }}</span> anmelden? <br><br></p>
                <button id="confirmButton">OK</button>
                <button id="cancelButton">Abbrechen</button>
            </div>
        </div>
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
                <h2 style="color: #e8672c; font-size: 24px; font-weight: bold; text-align: center;">Verfügbare Kurse
                    <br><br>
                </h2>

                <div class="course-cards-container">
                    <transition-group appear @before-enter="beforeEnter" @enter="enter">
                        <div v-for="(course, index) in availableCourses" :key="course.id" class="course-cards"
                            :data-index="index" @click="handleCourseSelection(course)">
                            <span style="font-size: 18px; font-weight: bold; color: #e8672c;">{{ course.name }}</span><br>
                            Professor: {{ course.prof }}<br>
                            Raum: {{ course.raum }}, Zeit:
                            {{ course.day }}. {{ course.timeslot }}<br>
                            <span style="font-size: 18px; color: #e8672c;">Beschreibung:</span>
                            {{ course.description }}
                            <div class="signup-overlay" @click="handleSignup">Anmelden</div>
                    </div>
                    </transition-group>
                </div>

            </div>
        </div>
    </div>
</template>
  
<style scoped>
.confirm-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.modal-content {
    position: absolute;
    width: 30%;
    height: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    /* Schwarzer Hintergrund */
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    border: 2px solid #e8672c;
    /* Orange Umrandung */
}

#confirmButton {
    margin-top: 10px;
    margin-right: 25px;
    /* Kleiner Abstand zwischen den Buttons */
    padding: 8px 16px;
    cursor: pointer;
    background-color: #4CAF50;
    /* Grüner Hintergrund für OK-Button */
    color: white;
    /* Weiße Schriftfarbe für OK-Button */
    border: none;
    border-radius: 4px;
}

#cancelButton {
    margin-top: 10px;
    padding: 8px 16px;
    cursor: pointer;
    background-color: #FF0000;
    /* Roter Hintergrund für Abbrechen-Button */
    color: white;
    /* Weiße Schriftfarbe für Abbrechen-Button */
    border: none;
    border-radius: 4px;
}

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
import { ref, computed, onMounted } from 'vue';
import Navbar from './components/navbar.vue';
import gsap from 'gsap'
import store from './store';
import { useRouter } from 'vue-router';

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
    setup() {
        const router = useRouter();
        const selectedCourse = ref(null);
        const user = store.getters.getUser;
        const userCourses = store.getters.getUserCourses(user.id);

        const courses = ref([
            { id: 0, name: 'Orbitalmechanik', prof: 'Merkur', raum: 'C31', day: "Mo", timeslot: "10:15", description: "Erforschen Sie die Bewegung von Himmelskörpern im Weltraum und lernen Sie, wie Gravitation und Geschwindigkeit sie beeinflussen." },
            { id: 1, name: 'Raumfahrtsystemarchitektur', prof: 'Jupiter', raum: 'B404', day: "Di", timeslot: "10:15", description: "Gestalten Sie komplexe Raumfahrtmissionen und entwerfen Sie Systeme für den sicheren und effizienten Transport im Weltraum." },
            { id: 2, name: 'Raumfahrtmissionen und -planung', prof: 'Neptune', raum: 'K44', day: "Di", timeslot: "14:15", description: "Tauchen Sie ein in die Planung und Umsetzung von Raumfahrtmissionen, von der Konzeption bis zur Realisierung." },
            { id: 3, name: 'Fortgeschrittene Satellitentechnik', prof: 'Venus', raum: 'K19', day: "Mo", timeslot: "16:15", description: "Vertiefen Sie Ihr Verständnis für Satellitentechnologien und lernen Sie fortschrittliche Methoden für innovative Anwendungen kennen." },
            { id: 4, name: 'Astronomie und Kosmologie', prof: 'Venus', raum: 'F3', day: "Do", timeslot: "10:15", description: "Entdecken Sie die Geheimnisse des Universums, erforschen Sie ferne Galaxien und verstehen Sie die grundlegenden Prinzipien der Kosmologie." },
            { id: 5, name: 'Exoplaneten Forschung', prof: 'Merkur', raum: 'F7', day: "Mi", timeslot: "14:15", description: "Untersuchen Sie Planeten außerhalb unseres Sonnensystems und erkunden Sie die Vielfalt dieser faszinierenden Welten." },
            { id: 6, name: 'Theoretische Astrophysik', prof: 'Jupiter', raum: 'C24', day: "Sa", timeslot: "10:15", description: "Vertiefen Sie Ihr Verständnis für die physikalischen Prinzipien des Universums und erforschen Sie theoretische Modelle für astronomische Phänomene." },
            { id: 7, name: 'Raumzeit und Relativität', prof: 'Jupiter', raum: 'C1', day: "Fr", timeslot: "14:15", description: "Tauchen Sie ein in die faszinierende Welt von Raum und Zeit und verstehen Sie die Auswirkungen der allgemeinen Relativitätstheorie." },
            { id: 8, name: 'Gravitationsphysik', prof: 'Neptune', raum: 'F7', day: "Fr", timeslot: "10:15", description: "Erforschen Sie die Kräfte der Schwerkraft und ihre Auswirkungen auf die Struktur und Entwicklung des Universums." },
        ]);

        const availableCourses = computed(() => {
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

        const confirmModal = ref(null);
        const confirmButton = ref(null);
        const cancelButton = ref(null);

        const handleCourseSelection = (course) => {
            selectedCourse.value = course;
            // Hier den Body des Dokuments abrufen
            const body = document.body;

            // Den Body blockieren und verdunkeln
            body.style.overflow = 'hidden';
            body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

            // Modal direkt zum Body hinzufügen
            body.appendChild(confirmModal.value);

            confirmModal.value.style.display = 'block';

            confirmButton.value.addEventListener('click', () => {
                // Kurs nur anmelden, wenn "OK" geklickt wurde
                store.dispatch('enrollInCourse', course.id);

                // Den Body entsperren und den Hintergrund zurücksetzen
                body.style.overflow = '';
                body.style.backgroundColor = '';

                // Modal aus dem Body entfernen
                body.removeChild(confirmModal.value);

                confirmModal.value.style.display = 'none';
                router.push('/home');
            });

            cancelButton.value.addEventListener('click', () => {
                console.log("Anmeldung abgebrochen");

                // Den Body entsperren und den Hintergrund zurücksetzen
                body.style.overflow = '';
                body.style.backgroundColor = '';
                selectedCourse.value = null;

                // Modal aus dem Body entfernen
                body.removeChild(confirmModal.value);

                confirmModal.value.style.display = 'none';
                router.push('/home');
            });
        };

        onMounted(() => {
            confirmModal.value = document.getElementById('confirmModal');
            confirmButton.value = document.getElementById('confirmButton');
            cancelButton.value = document.getElementById('cancelButton');
        });

        return { user, userCourses, availableCourses, beforeEnter, enter, handleCourseSelection, selectedCourse };
    },
};
</script>

