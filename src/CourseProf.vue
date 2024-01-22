<template>
    <h1 class="no_caret">Your courses <span :style="{ color: '#e8672c' }">{{ user ? `Prof. ${this.user.lastName}` : 'Guest'
    }}</span>
    </h1>
</template>
  
<script>
import Navbar from './components/navbar.vue';
import store from './store';

export default {
    components: {
        Navbar,
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
  setup() {

    const user = store.getters.getUser; // To get user informations //klappt
    const userCourses = store.getters.getUserCourses(user.id); //To get courses from user //klappt
    console.log(user.id, user.name, user.role, user.courses);
    console.log(userCourses);
  }
}
</script>

  