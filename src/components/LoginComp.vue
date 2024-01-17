<!-- LoginComp.vue -->
<template>
    <div class="login-comp">
      <input v-model="name" type="text" placeholder="Name" @focus="isFocused = true" @blur="isFocused = false" />
      <button @click="submit">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        isFocused: false,
      };
    },
    methods: {
      submit() {
        // Hier kannst du die Logik für das Einreichen der Daten implementieren
        console.log('Name submitted:', this.name);
        // Beispiel: Navigiere zu einer anderen Route
        this.$router.push('/welcome');
      },
    },
  };
  </script>
  
  <style scoped>
  .login-comp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #152d3a;
    color: white;
  }
  
  input {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: #e8672c;
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  input:focus {
    background-color: #e8490c;
  }
  
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #e8672c;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  button:hover {
    background-color: #e8490c;
  }
  </style>
  