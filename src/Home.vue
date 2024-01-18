<template>
  <Navbar />
  <Links />
  <h1>Home</h1>
</template>

<script>
import Links from './components/Links.vue';
import Navbar from './components/navbar.vue';


export default {
  components: {
    Links,
    Navbar,
  },
}
</script>

<style>
/* In deiner CSS-Datei */

.navbar {
  position: fixed; /* Stellt sicher, dass die Navbar fixiert bleibt, während der Benutzer scrollt */
  top: 0; /* Platziert die Navbar oben am Fenster */
  width: 100%; /* Nimmt die volle Breite des Bildschirms ein */
  background-color: #333;
  padding: 10px;
  color: white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin-right: 20px;
  cursor: pointer;
}


</style>