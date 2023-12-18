<template>
    <div>
      <h2>Course Details</h2>
      <p>{{ course.description }}</p>
      <p>Instructor: {{ course.instructor }}</p>
      <p>Schedule: {{ course.schedule }}</p>
      <!-- Weitere Details anzeigen -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      course: Object // Erwartet einen Kurs als Prop
    }
  }
  </script>