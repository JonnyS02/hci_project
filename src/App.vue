<template>
  <Navbar :key="$route.fullPath" v-if="isNotLogin" />
  <div>
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
  </div>
  <footerC />
</template>

<style>
.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>

<script>

import Navbar from './components/navbar.vue';
import footerC from './components/footerC.vue';

export default {
  computed: {
    isNotLogin() {
      return this.$route.name != 'Login';
    }
  },
  components: {
    Navbar,
    footerC,
  }
}
</script>