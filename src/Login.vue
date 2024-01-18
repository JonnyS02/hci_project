<!-- Login.vue -->
<template>
  <div class="login-container">
    <img src="@/assets/space-logo.png" alt="Space Logo" class="logo" />

    <div class="role-cards">
      <div class="card-holder">
        <LoginComponent role="Student" :showRoleCard1="showRoleCard1" @roleCardClicked="handleRoleCardClicked" />
      </div>
      <div class="card-holder">
        <LoginComponent role="Professor" :showRoleCard2="showRoleCard2" @roleCardClicked="handleRoleCardClicked" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

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
    handleRoleCardClicked(selectedRole) {
      console.log(`Selected role: ${selectedRole}`);
      this.showRoleCard1 = false;
      this.showRoleCard2 = false;
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

.role-cards{
  width: 500px;
}

.card-holder{
  float: left;
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
