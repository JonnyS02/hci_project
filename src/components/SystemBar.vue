<template>
  <v-system-bar v-if="showSystemBar" app dark fixed color="primary" style="height: 28px; padding: 0">
    <span class="mx-4">Space Pochta</span>

    <v-btn text tile small to="/">Home</v-btn>

    <div class="d-flex align-center">
      <span :key="group" v-for="group of groups">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              tile
              small
              style="padding-right: 0"
              v-bind="attrs"
              v-on="on"
            >
              {{ group }}
              <v-icon v-text="'mdi-chevron-down'" />
            </v-btn>
          </template>
          <Navigation :group="group" />
        </v-menu>
      </span>
    </div>

    <v-spacer />

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text tile small v-bind="attrs" v-on="on">
          <v-icon x-small>{{ state.role.icon }}</v-icon>
          {{ state.role.name }}
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item v-for="role in roles" :key="role.name" @click="iam(role)">
          <v-list-item-icon>
            <v-icon v-text="role.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="role.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- <v-btn text tile small @click="close">
      <v-icon x-small>fa-times</v-icon>
      Close
    </v-btn> -->
  </v-system-bar>
</template>

<script>
import routes from '@/router/routes';
import { pochtaStore } from '@/store/localStorage/pochta-store';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'SystemBar',
  components: {
    Navigation,
  },
  computed: {
    showSystemBar() {
      return this.$route.meta.showSystemBar !== false;
    },
  },
  data: () => ({
    roles: [
      {
        name: 'student',
        icon: 'fa-user-graduate',
      },
      {
        name: 'employee',
        icon: 'fa-user-tie',
      },
    ],
    routes,
    groups: ['campus', 'study', 'playground', 'about'],
  }),
  setup() {
    const close = () => window.close();
    const state = pochtaStore.state;

    // Prüfen, ob die Rolle im Store festgelegt ist, und andernfalls die Standardrolle setzen
    if (!state.role) {
      pochtaStore.iam(this.roles[0]);
    }

    const iam = role => pochtaStore.iam(role);

    return {
      state,
      iam,
      close,
    };
  },
};
</script>
