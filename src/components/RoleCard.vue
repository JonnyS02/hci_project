<!-- RoleCard.vue -->
<template>
    <div class="role-card" @click="handleClick" @mouseover="hover = true" @mouseleave="hover = false">
      <h3 :style="{ color: hover ? '#000' : '#fff' }">{{ role }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      role: String,
    },
    data() {
      return {
        hover: false,
      };
    },
    computed: {
      link() {
        return `/${this.role.toLowerCase()}`;
      },
    },
    methods: {
      handleClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  
  <style scoped>
  .role-card {
    display: flex;
    flex-direction: column;
    align-items: center; /* Zentrieren Sie den Inhalt horizontal */
    justify-content: center; /* Zentrieren Sie den Inhalt vertikal */
    flex: 1;
    padding: 20px;
    background: #152d3a;
    margin: 5px;
    border: 1px solid #e8672c;
    border-radius: 5px;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, background 0.5s ease;
  }
  
  .role-card:hover {
    box-shadow: 0 0 11px rgba(21,45,58,255);
    background: linear-gradient(to right, rgba(231,101,44,255) 0%,rgba(231,101,44,255) 100%);
    color: rgb(255, 255, 255);
  }
  </style>
  