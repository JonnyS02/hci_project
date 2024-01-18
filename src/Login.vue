<!-- Login.vue -->
<template>
  <div class="login-container">
    <img src="@/assets/space-logo.png" alt="Space Logo" class="logo" />

    <div class="role-cards">
      <div v-if="showRoleCard2" class="card-holder">
        <LoginComponent role="Student" :showRoleCard1="showRoleCard1" @roleCardClicked="handleRoleCardClicked" @submit="submitForm" />
      </div>
      <div v-if="showRoleCard1" class="card-holder">
        <LoginComponent role="Professor" :showRoleCard2="showRoleCard2" @roleCardClicked="handleRoleCardClicked" @submit="submitForm" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  components: {
    LoginComponent,
  },
  data() {
    return {
      showRoleCard1: true,
      showRoleCard2: true,
    };
  },
  methods: {
    ...mapActions(['loginUser']), // Map Vuex Action
    async submitForm(name) {
      try {
        const loginSuccessful = await this.loginUser(name);
        if (loginSuccessful) {
          // Führe hier die Aktionen nach einem erfolgreichen Login aus, z.B. Navigiere zu einer anderen Route
          this.$router.push('/');
        } else {
          // Hier kannst du eine Fehlermeldung anzeigen oder weitere Aktionen für einen fehlgeschlagenen Login durchführen
          console.error('Login failed: User not found');
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    },
    handleRoleCardClicked(selectedRole) {
      console.log(`Selected role: ${selectedRole}`);
      if (selectedRole === 'Student') {
        this.showRoleCard1 = false;
      } else if (selectedRole === 'Professor') {
        this.showRoleCard2 = false;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  color: #333;
}

.role-cards {
  width: 500px;
  display: flex; /* Flexbox für die .role-cards hinzufügen */
  justify-content: center; /* Horizontal zentrieren */
}

.card-holder {
  width: 50%;
  padding: 2.5%;
}

.logo {
  width: 90%;
  max-width: 460px;
  margin-bottom: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
