<template>
  <transition name="route" mode="out-in">
    <Navbar v-if="shouldShowNavbar" />
  </transition>
  <router-view v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <div :key="route.name">
        <div class="main_content" :key="$route.fullPath" v-if="isNotLogin">
          <component :is="Component"></component>
        </div>
        <component :is="Component" :key="$route.fullPath" v-if="!isNotLogin"></component>
      </div>
    </transition>
  </router-view>
  <footerC />
</template>

<style>
.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.25s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.25s ease-in;
}
</style>

<script>

import Navbar from './components/navbar.vue';
import footerC from './components/footerC.vue';

export default {
  data() {
    return {
      shouldShowNavbar: false,
    };
  },
  computed: {
    isNotLogin() {
      return this.$route.name !== 'Login';
    }
  },
  created() {
    this.shouldShowNavbar = this.isNotLogin;
  },
  watch: {
    isNotLogin(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.shouldShowNavbar = true;
        }, 265);
      } else {
        setTimeout(() => {
          this.shouldShowNavbar = false;
        }, 0);
      }
    }
  },
  components: {
    Navbar,
    footerC,
  }
}
</script>
