<template>
    <div>
      <h2>Course List</h2>
      <div class="course-card">
        <div v-for="course in courses" :key="course.id">
          <h3>{{ course.name }}</h3>
          <p>Prof: {{ course.prof }}</p>
          <p>Raum: {{ course.raum }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      courses: Array, // Annahme: Die Kurse werden als Array übergeben
    },
  };
  </script>
  
  <style scoped>
  .course-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
  </style>
  