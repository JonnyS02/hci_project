<!-- In HomeView.vue -->
<template>
  <div>
    <h1>Welcome to Kursplanungssystem</h1>
    <button @click="navigateTo('courses')">Show Courses</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    navigateTo(view) {
      this.$emit('navigateTo', view); // Auslösen des Events
    }
  }
};
</script>
