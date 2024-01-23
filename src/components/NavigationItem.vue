<template>
  <li>
    <router-link :to="to" :class="{ 'no-hover': currentPath === to }">
      <span :class="{ 'active': currentPath === to, 'no-hover': currentPath === to }">
        <font-awesome-icon :icon="['fas', icon]" />
        {{ label }}
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    to: String,
    label: String,
    icon: String,
    currentPath: String,
  },
  data() {
    return {
      currentPath: ''
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  watch: {
    $route(to, from) {
      this.currentPath = to.path;
    }
  },
  created() {
    this.currentPath = this.$route.path;
  }
};
</script>