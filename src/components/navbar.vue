<template>
  <nav>
    <ul>
      <li v-for="(item, index) in navItems" :key="index" :class="{ 'no_caret': index === 0, 'no-hover': currentPath === item.path }">
        <router-link :to="item.path" :class="{ 'active': currentPath === item.path, 'no-hover': currentPath === item.path }">
          <span>{{ item.label }}<span v-if="item.icon">&nbsp <font-awesome-icon :icon="item.icon" /></span></span>
        </router-link>
      </li>
      <!-- Right Content -->
      <li class="right">
        <router-link to="/profil">
          <span style="color: #ff8045;">
            {{ user.role === 'Professor' ? 'Prof. ' + user.lastName : user.name }}
            &nbsp;<font-awesome-icon :icon="['fas', 'graduation-cap']" style="color: #ff8045;" />
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      currentPath: '',
      navItems: [
        { path: '/home', label: 'Homepage' },
        { path: '/verlaufsplan', label: 'Verlaufsplan' },
        { path: '/courselist', label: 'Meine Kurse' },
        { path: '/leistungen', label: 'Leistungen' },
        { path: '/schedule', label: 'Stundenplan' },
        { path: '/postfach', label: 'Postfach' },
        { path: '/', label: 'Log out', icon:['fas', 'power-off'] },
      ],
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
    },
  },
  created() {
    this.currentPath = this.$route.path;
  },
};
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
}

li {
  margin-left: 15px;
  margin-right: 15px;
}

a {
  color: white;
  text-decoration: none;
}

.right {
  margin-left: auto;
}

.active {
  color: #ff8045;
}

.no-hover:hover {
  background-color: unset;
  border-radius: unset;
  cursor: default;
}
</style>
