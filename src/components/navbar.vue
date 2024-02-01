<template>
  <nav>
    <ul>
      <li v-for="(item, index) in navItems" :key="index"
        :class="{ 'no_caret': index === 0, 'no-hover': currentPath === item.path }">
        <router-link :to="item.path"
          :class="{ 'active': currentPath === item.path, 'no-hover': currentPath === item.path }">
          <span>{{ item.label }}<span v-if="item.icon">&nbsp <font-awesome-icon :icon="item.icon" /></span></span>
        </router-link>
      </li>
      <li class="no_caret">
        <router-link to="/" class="off">
          <span>Log out<span>&nbsp <font-awesome-icon :icon="['fas', 'power-off']" /></span></span>
        </router-link>
      </li>
      <!-- Right Content -->
      <li class="right" style="margin-right: 15px;">
        <router-link to="/profil" :class="{ 'active': currentPath === '/profil', 'no-hover': currentPath === '/profil' }">
          {{ user.role === 'Professor' ? 'Prof. ' + user.lastName : user.name }}
          &nbsp;<font-awesome-icon v-if="user.role === 'Student'" :icon="['fas', 'graduation-cap']" style="color: #ff8045;" />
          <font-awesome-icon v-else :icon="['fas', 'user-tie']" style="color: #ff8045;" />
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
        { path: '/courseliststudi', label: 'Meine Kurse' },
        { path: '/leistungen', label: 'Leistungen' },
        { path: '/schedule', label: 'Stundenplan' },
        { path: '/postfach', label: 'Postfach' },
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
  padding-left: 25px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  max-width: 2000px;
}

@media only screen and (min-width: 2000px) {
  ul {
    margin: auto;
  }
}

li {
  margin-right: 30px;
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

.off:hover {
  background-color: #ff00004f;
  border-radius: 5px;
}
</style>
