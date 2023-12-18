<template>
    <div>
      <h2>Exam Schedule</h2>
      <ul>
        <li v-for="exam in exams" :key="exam.id">
          {{ exam.course }} - {{ exam.date }} - {{ exam.location }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import examData from '@/data/exams.json'
  
  export default {
    data() {
      return {
        exams: examData.exams
      }
    }
  }
  </script>
  