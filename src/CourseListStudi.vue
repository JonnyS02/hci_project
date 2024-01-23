<template>
    <div>
        <h1 class="no_caret">Your courses, <span :style="{ color: '#e8672c' }">{{ user ? `Prof. ${user.lastName}` : 'Guest'
        }}</span></h1>
        <div class="cards">
            <div class="list">
                <ul>
                    <h2 style="color: #e8672c; font-size: 24px; font-weight: bold;">Courselist</h2>
                    <li class="card_holder" v-for="course in userCourses" :key="course.id">
                        <div class="course-card">
                            <span class="bullet" style="color: #ff8045;">&#8226;</span>
                            <span style="color: #ff8045;">{{ course.name }}</span><br> Raum: {{ course.raum }},
                            {{ course.day }} {{ course.timeslot }}
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h2 style="color: #e8672c; font-size: 24px; font-weight: bold; text-align: center;">Sign into a new course
                </h2>
                <div class="courses-container">
                    <div class="course-card" v-for="course in courses" :key="course.id"
                        @click="handleCourseSelection(course)">
                        <span style="font-size: 18px; font-weight: bold; color: #e8672c;">{{ course.name }}</span><br>
                        Professor: {{ course.prof }}<br>
                        Raum: {{ course.raum }}<br>
                        {{ course.day }} {{ course.timeslot }}<br>
                        {{ course.description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script>
import Navbar from './components/navbar.vue';

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
};
</script>
  
<style scoped>
.card {
    cursor: pointer;
    background-color: rgb(215, 215, 215);
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: 0.15s ease-in-out;
    border: 2px solid rgb(232, 104, 44);
    transition: background-color 0.15s ease-in-out;
}

.course-card {
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
}

.bullet {
    margin-right: 5px;
}

.card:hover {
    background-color: rgb(232, 104, 44);
}

.list {
    margin-right: 130px;
}

label {
    margin-top: 10px;
}

button {
    cursor: pointer;
    padding: 10px;
    background-color: #e8672c;
    color: white;
    border: none;
    border-radius: 5px;
}
</style>
  