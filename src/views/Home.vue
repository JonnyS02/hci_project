<!-- views/Home.vue -->

<template>
  <div class="home">
    <h1>Dashboard</h1>
    <p>Eingeloggt als {{ role }}</p>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import routes from '@/router/routes';
import { pochtaStore } from '@/store/localStorage/pochta-store'; // Pfade anpassen

export default {
  name: 'Home',
  components: {},
  data: () => ({
    routes,
    role: pochtaStore.role.name, // Hier die Benutzerrolle abrufen
  }),
};
</script>
