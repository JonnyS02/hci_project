<template>
  <div class="login-container">
    <img src="@/assets/space-logo.png" alt="Space Logo" class="logo no_caret">

    <div class="role-cards">
      <div v-if="showRoleCard2" class="card-holder">
        <LoginComponent role="Student" :showRoleCard1="showRoleCard1" @roleCardClicked="handleRoleCardClicked"
          @submit="submitForm" />
      </div>
      <div v-if="showRoleCard1" class="card-holder">
        <LoginComponent role="Professor" :showRoleCard2="showRoleCard2" @roleCardClicked="handleRoleCardClicked"
          @submit="submitForm" />
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
    handleRoleCardClicked(selectedRole) {
      console.log(`Selected role: ${selectedRole}`);
      if (selectedRole === 'Student') {
        this.showRoleCard1 = false;
      } else if (selectedRole === 'Professor') {
        this.showRoleCard2 = false;
      }
      const cardHolders = document.querySelectorAll('.card-holder');
      if (cardHolders) {
        cardHolders.forEach(cardHolder => {
          cardHolder.classList = []; // Setze die Klassen auf ein leeres Array zurück
        });
      }

    },
  },
};
</script>

<style scoped>
.login-container {
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 44px);
  width: 100%;
  background-color: #fff;
  color: #333;
}

.role-cards {
  width: 500px;
  display: flex;
  /* Flexbox für die .role-cards hinzufügen */
  justify-content: center;
  /* Horizontal zentrieren */
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

@media only screen and (max-height: 800px) {
  .login-container {
    padding-top: 0;
  }
}

</style>
