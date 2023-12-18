<template>
    <div>
      <h2>Course List</h2>
      <ul v-if="courses.length">
        <li v-for="course in courses" :key="course.id">
          {{ course.title }} - {{ course.instructor }}
        </li>
      </ul>
      <p v-else>No course data available.</p>
    </div>
  </template>
  
  
  <script>
const coursesData = require('@/data/courses.json') // laden der Kursdaten aus der json datei mit dummy Datensätzen
//import coursesData from '@/data/courses.json' // alternative

export default {
  data() {
    return {
      courses: []
    }
  },
  mounted() {
    try {
      this.courses = coursesData.courses
    } catch (error) {
      console.error('Fehler beim Laden der Kursdaten:', error)
    }
  }
}
</script>

  