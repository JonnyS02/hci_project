<template>
    <div class="courses-container">
        <div id="confirmModal" class="confirm-modal">
            <div class="modal-content">
                <p v-if="selectedCourse">
                    Möchten Sie sich wirklich zur Prüfung
                    <span :style="{ color: '#e8672c' }">{{ selectedCourse.name }}</span>
                    <span v-if="!selectedCourse.isEnrolled"> anmelden</span>
                    <span v-else> abmelden</span>?
                    <br><br>
                </p>
                <button id="confirmButton">OK</button>
                <button id="cancelButton">Abbrechen</button>
            </div>
        </div>
        <h1 class="no_caret">Your courses, <span :style="{ color: '#e8672c' }">{{ user ? user.name : 'Guest' }}</span></h1>

        <div class="content">

            <div class="signin-container">


                <div class="course-cards-container">
                    <transition-group appear @before-enter="beforeEnter" @enter="enter">
                        <div v-for="(course, index) in availableCourses" :key="course.id" class="course-cards"
                            :data-index="index" @click="handleCourseSelection(course)">
                            <span style="font-size: 18px;  color: #ff7d41;">{{ course.name
                            }}</span><br>

                            <table width="100%">
                                <tr>
                                    <td>Professor:</td>
                                    <td> {{ course.prof }}</td>
                                </tr>
                                <tr>
                                    <td>Raum:</td>
                                    <td>{{ course.raum }}</td>
                                </tr>
                                <tr>
                                    <td>Vorlesung:</td>
                                    <td>{{ course.day }}. {{ course.timeslot }}</td>
                                </tr>
                                <tr>
                                    <td><span style=" color: #ff7d41;">Prüfung:</span></td>
                                    <td>Freitag den 12.04.2024 um 10.15 Uhr</td>
                                </tr>
                                <tr>
                                    <td>Beschreibung:&nbsp&nbsp&nbsp</td>
                                    <td>{{ course.description }}</td>
                                </tr>
                            </table>
                            <div class="signup-overlay" @click="handleSignup(course)">
                                <!-- Button-Darstellung ändern -->
                                <button v-if="course.isEnrolled" class="withdraw-button">Abmelden</button>
                                <button v-else class="signup-button">Zur Prüfung anmelden</button>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>
  
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
            return courses.value.filter(course => userCourses.some(userCourse => userCourse.id === course.id));
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
        const body = document.body;
        const handleConfirmButtonClick = () => {
            confirmModal.value.style.opacity = '0';
            confirmModal.value.style.zIndex = '-1';
            setTimeout(() => {
                if (!selectedCourse.value.isEnrolled) {
                    // Aktionen für die Anmeldung implementieren
                    store.dispatch('enrollInExam', selectedCourse.value.id);

                    // Update the enrolled status in the courses array
                    courses.value = courses.value.map(course => {
                        if (course.id === selectedCourse.value.id) {
                            return { ...course, isEnrolled: true };
                        }
                        return course;
                    });
                } else {
                    // Aktionen für die Abmeldung implementieren
                    store.dispatch('unenrollFromExam', selectedCourse.value.id);

                    // Update the enrolled status in the courses array
                    courses.value = courses.value.map(course => {
                        if (course.id === selectedCourse.value.id) {
                            return { ...course, isEnrolled: false };
                        }
                        return course;
                    });
                }

                // Zurücksetzen der ausgewählten Option und des Body-Stils
                selectedCourse.value = null;
                body.style.overflow = '';
                body.style.backgroundColor = '';

                // Event-Listener entfernen
                confirmButton.value.removeEventListener('click', handleConfirmButtonClick);
                cancelButton.value.removeEventListener('click', handleCancelButtonClick);
            }, 250);
        };


        const handleCancelButtonClick = () => {
            confirmModal.value.style.opacity = '0';
            confirmModal.value.style.zIndex = '-1';
            console.log("Anmeldung abgebrochen");
            body.style.overflow = '';
            body.style.backgroundColor = '';
            selectedCourse.value = null;
            // Event-Listener entfernen
            confirmButton.value.removeEventListener('click', handleConfirmButtonClick);
            cancelButton.value.removeEventListener('click', handleCancelButtonClick);
        };

        const handleCourseSelection = (course) => {
            selectedCourse.value = course;
            body.style.overflow = 'hidden';
            confirmModal.value.style.opacity = '1';
            confirmModal.value.style.zIndex = '1';

            // Event-Listener hinzufügen
            confirmButton.value.addEventListener('click', handleConfirmButtonClick);
            cancelButton.value.addEventListener('click', handleCancelButtonClick);
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

<style scoped>
.course-cards-container {
    max-width: 1200px;
    margin: auto;
    padding-bottom: 20px;
    padding-top: 30px;
}

.confirm-modal {
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    transition: opacity 0.15s ease;
}

.modal-content {
    position: absolute;
    width: 30%;
    height: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    border: 2px solid #e8672c;
}

#confirmButton {
    margin-top: 10px;
    margin-right: 25px;
    padding: 8px 16px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
}

#cancelButton {
    margin-top: 10px;
    padding: 8px 16px;
    cursor: pointer;
    background-color: #FF0000;
    color: white;
    border: none;
    border-radius: 4px;
}

.content {
    display: flex;
    justify-content: space-between;
}

.list {
    padding-top: 4%;
    flex: 0 0 50%;
}

.course-card {
    color: #e2e2e2;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
}

.course-cards {
    background-color: rgb(43, 43, 43);
    font-size: 16px;
    padding: 10px;
    border: 2px solid #e8672c;
    margin-bottom: 10px;
    border-radius: 10px;
    position: relative;
    transition: background-color 0.15s ease-in-out;
    transition: color 0.15s ease-in-out;

}

.signup-overlay {
    color: #000;
    position: absolute;
    top: 10px;
    right: 10px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
}

.signup-button {
    cursor: pointer;
    padding: 10px;
    background-color: #fff2ec;
    color: rgb(17, 14, 14);
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.3s, color 0.3s;
    /* Fügt eine sanfte Animation hinzu */
}

.signup-button:hover {
    background-color: #e8672c;
    color: #000;
    /* Schriftfarbe schwarz */
}

.withdraw-button {
    cursor: pointer;
    padding: 10px;
    background-color: #e8672c;
    color: rgb(17, 14, 14);
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.3s, color 0.3s;
    /* Fügt eine sanfte Animation hinzu */
}

.withdraw-button:hover {
    background-color: #ff3d0d;
    color: #000;
    /* Schriftfarbe schwarz */
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
}

label {
    margin-top: 10px;
}
</style>