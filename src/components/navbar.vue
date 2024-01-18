<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <!-- Weitere Navigationspunkte können hier hinzugefügt werden -->
      <li class="student"><router-link to="/student">Student</router-link></li>
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
  display: flex; /* Flexbox hinzufügen, um Elemente nebeneinander anzuordnen */
  justify-content: flex-end; /* Elemente nach rechts ausrichten */
}

li {
  margin-left: 15px; /* Ändere margin-right zu margin-left */
}

a {
  color: white;
  text-decoration: none;
}

.student {
  margin-left: auto; /* Verschiebe das "Student"-Element ganz nach rechts */
}
</style>
