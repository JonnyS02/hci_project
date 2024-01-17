<!-- navbar.vue -->

<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <!-- Weitere Navigationspunkte können hier hinzugefügt werden -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  }
  </script>
  
  <style scoped>
  /* Füge hier deine individuellen Stilregeln für die Navbar hinzu */
  nav {
    background-color: #333;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: inline;
    margin-right: 15px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  