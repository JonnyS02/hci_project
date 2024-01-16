<template>
  <div class="home">
    <h1>Dashboard</h1>
    <p>Eingeloggt als {{ role }}</p>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import routes from '@/router/routes';

export default {
  name: 'Home',
  components: {},
  data: () => ({
    routes,
  }),
};
</script>
