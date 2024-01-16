<!-- views/Login.vue -->

<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <!-- Logo -->
        <v-img src="@/assets/space-logo.png" contain class="mb-4"></v-img>

        <!-- Karten für Student und Dozent -->
        <v-row>
          <v-col v-for="(role, index) in roles" :key="index" cols="12" md="6" class="mb-4">
            <v-hover>
              <template v-slot="{ hover }">
                <v-card @click="login(role)" :class="{ 'elevation-13': hover }" class="d-flex align-center justify-center" style="height: 100%;">
                  <v-card-title>{{ role }}</v-card-title>
                </v-card>
              </template>
            </v-hover>
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
      roles: ['Student', 'Professor'],
    };
  },
  methods: {
    login(role) {
      const icon = role.toLowerCase() === 'student' ? 'fa-user-graduate' : 'fa-user-tie';
      this.$store.commit('pochtaStore/iam', {
        name: role.toLowerCase(),
        icon,
      });
      const route = { name: 'dashboard', params: { role: role.toLowerCase() } };
      window.location.href = this.$router.resolve(route).href;
    },
  },
};
</script>

<style scoped>
.elevation-13 {
  background-color: rgb(233, 138, 30); 
}
.elevation-13:hover {
  background-color: orange; 
}
</style>
