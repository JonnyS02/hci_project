<template>
    <div>
        <div class="main_content">
            <h1>Your courses <span :style="{ color: '#e8672c' }">{{ user ? `Prof. ${this.user.name}` : 'Guest' }}</span>
            </h1>
            <CourseList :courses="professorCourses" />
        </div>
    </div>
</template>
  
<script>
import Navbar from './components/navbar.vue';
import CourseList from "@/components/CourseList.vue";

export default {
    components: {
        Navbar,
        CourseList,
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        },
    },
    data() {
        return {
            professorCourses: [],
        };
    },
};
</script>

  