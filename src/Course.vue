<template>
    <div>
      <h2>Course List</h2>
      <ul>
        <li v-for="course in courses" :key="course.id">
          <button @click="showCourseDetails(course)">
            {{ course.title }} - {{ course.instructor }}
          </button>
        </li>
      </ul>
      <div v-if="selectedCourse">
        <h3>Details for {{ selectedCourse.title }}</h3>
        <p>{{ selectedCourse.description }}</p>
        <!-- More details? -->
      </div>
    </div>
  </template>
  
  <script>
  import coursesData from '@/data/courses.json'
  
  export default {
    data() {
      return {
        courses: coursesData.courses,
        selectedCourse: null
      }
    },
    methods: {
      showCourseDetails(course) {
        this.selectedCourse = course;
      }
    }
  }
  </script>
  