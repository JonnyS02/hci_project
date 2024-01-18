<!-- CardItem.vue -->
<template>
    <div class="card-item">
      <a :href="link" class="card-link">
        <h2>{{ title }}</h2>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      link: String,
    },
  };
  </script>
  
  <style scoped>
  .card-item {
    width: 300px;
    height: 100px;
    background-color: #e0e0e0;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
  
  .card-link {
    text-decoration: none;
    color: #333;
    text-align: center;
  }
  </style>
  