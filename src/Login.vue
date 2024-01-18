<!-- Login.vue -->
<template>
  <div class="login-container">
    <img src="@/assets/space-logo.png" alt="Space Logo" class="logo" />

    <div class="role-cards">
      <div class="card-holder">
        <RoleCard role="Student" @click="showLoginComp('Student')" />
      </div>
      <div class="card-holder">
        <RoleCard role="Professor" @click="showLoginComp('Professor')" />
      </div>
    </div>

    <transition name="fade">
      <LoginComp v-if="showLoginComp" @close="hideLoginComp" />
    </transition>
  </div>
</template>

<script>
import RoleCard from "@/components/RoleCard.vue";
import LoginComp from "@/components/LoginComp.vue";

export default {
  name: 'Login',
  components: {
    RoleCard,
    LoginComp,
  },
  data() {
    return {
      showLoginComp: false,
      selectedRole: '',
    };
  },
  methods: {
    showLoginComp(role) {
      console.log(`Clicked ${role} card`);
      this.selectedRole = role;
      this.showLoginComp = true;
    },
    hideLoginComp() {
      this.showLoginComp = false;
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
