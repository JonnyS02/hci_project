<template>
  <div id="app">
    <AppHeader />
    <div v-if="currentView === 'home'">
      <HomeView @navigateTo="navigateTo" />
    </div>
    <div v-else-if="currentView === 'courses'">
      <CourseList @navigateTo="navigateTo" />
    </div>
    <div v-else-if="currentView === 'courseDetails'">
      <CourseDetails :course="selectedCourse" />
    </div>
    <div v-else-if="currentView === 'examSchedule'">
      <ExamSchedule />
    </div>
    <div v-else-if="currentView === 'registrationForm'">
      <RegistrationForm />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import HomeView from '@/views/HomeView.vue'
import CourseList from '@/components/CourseList.vue'
import CourseDetails from '@/components/CourseDetails.vue'
import ExamSchedule from '@/components/ExamSchedule.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'

export default {
  data() {
    return {
      currentView: 'home',
      selectedCourse: null
    }
  },
  components: {
    AppHeader,
    HomeView,
    CourseList,
    CourseDetails,
    ExamSchedule,
    RegistrationForm
  },
  methods: {
    navigateTo(view, course = null) {
      console.log('Navigating to:', view);
      this.currentView = view;
      if (course) {
        this.selectedCourse = course;
      }
    }
  },
  created() {
    console.log('App.vue created'); 
  },
  mounted() {
    console.log('App.vue mounted');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
