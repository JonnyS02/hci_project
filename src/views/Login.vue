<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <!-- Logo -->
        <v-img src="@/assets/space-logo.png" contain class="mb-4"></v-img>

        <!-- Karten für Student und Dozent -->
        <v-row>
          <v-col v-for="(role, index) in roles" :key="index" cols="12" md="6" class="mb-4">
            <v-card @click="login(role)">
              <v-card-title>{{ role }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      roles: ['Student', 'Employee'],
    };
  },
  methods: {
    login(role) {
      const icon = role.toLowerCase() === 'student' ? 'fa-user-graduate' : 'fa-user-tie';
      this.$store.commit('pochtaStore/SET_ROLE', {
        name: role.toLowerCase(),
        icon,
      });
      this.$router.push({ name: 'dashboard', params: { role: role.toLowerCase() } });
    },
  },
};
</script>

<style scoped>
/* Füge hier deine benutzerdefinierten CSS-Stile hinzu */
</style>
