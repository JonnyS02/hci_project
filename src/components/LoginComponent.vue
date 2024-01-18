<!-- LoginComponent.vue -->
<template>
    <div>
      <div v-if="showRoleCard1" class="role-card" @click="showLoginComp">
        <h3 :style="{ color: hover ? '#000' : '#fff' }">{{ role }}</h3>
      </div>
  
      <div v-else class="login-comp">
        <input v-model="name" type="text" placeholder="Name" @focus="isFocused = true" @blur="isFocused = false" />
        <button @click="submit">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      role: String,
      showRoleCard1: Boolean,
      showRoleCard2: Boolean,
    },
    data() {
      return {
        hover: false,
        name: '',
        isFocused: false,
      };
    },
    methods: {
      showLoginComp() {
        this.$emit('roleCardClicked', this.role);
      },
      submit() {
        console.log('Name submitted:', this.name);
        this.$router.push('/welcome');
      },
    },
  };
  </script>
  
  <style scoped>
  .role-card {
    display: flex; /* Änderung hier */
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    box-shadow: 0 0 11px rgba(21, 45, 58, 255);
    background: linear-gradient(to right, rgba(231, 101, 44, 255) 0%, rgba(231, 101, 44, 255) 100%);
    color: rgb(255, 255, 255);
  }
  
  .login-comp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #152d3a;
    color: white;
  }
  
  input {
    flex: 1;
    padding: 10px;
    margin-bottom: 10px; /* Etwas Abstand zwischen Input und Button */
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
  