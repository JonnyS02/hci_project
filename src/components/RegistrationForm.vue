<template>
    <div>
      <h2>Registration Form</h2>
      <form @submit.prevent="submitForm">
        <!-- Formularelemente hier -->
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      submitForm() {
        // Logik für die Verarbeitung der Anmeldung
        console.log('Form submitted!');
      }
    }
  }
  </script>
  