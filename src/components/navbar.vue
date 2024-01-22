<template>
  <nav>
    <ul>
      <li class="no_caret"><router-link to="/home" :class="{ 'no-hover': currentPath === '/home' }"><span
            :class="{ 'active': currentPath === '/home' }">Homepage</span></router-link>
      </li>
      <li><router-link to="/verlaufsplan" :class="{ 'no-hover': currentPath === '/verlaufsplan' }"><span
            :class="{ 'active': currentPath === '/verlaufsplan', 'no-hover': currentPath === '/verlaufsplan' }">Verlaufsplan</span></router-link>
      </li>
      <li><router-link to="/meine_kurse" :class="{ 'no-hover': currentPath === '/meine_kurse' }"><span
            :class="{ 'active': currentPath === '/meine_kurse', 'no-hover': currentPath === '/meine_kurse' }">Meine
            Kurse</span></router-link>
      </li>
      <li><router-link to="/leistungen" :class="{ 'no-hover': currentPath === '/leistungen' }"><span
            :class="{ 'active': currentPath === '/leistungen', 'no-hover': currentPath === '/leistungen' }">Leistungen</span></router-link>
      </li>
      <li><router-link to="/stundenplan" :class="{ 'no-hover': currentPath === '/stundenplan' }"><span
            :class="{ 'active': currentPath === '/stundenplan', 'no-hover': currentPath === '/stundenplan' }">Stundenplan</span></router-link>
      </li>
      <li><router-link to="/postfach" :class="{ 'no-hover': currentPath === '/postfach' }"><span
            :class="{ 'active': currentPath === '/postfach', 'no-hover': currentPath === '/postfach' }">Postfach</span></router-link>
      </li>

      <li><router-link to="/" :class="{ 'no-hover': currentPath === '/' }"><span>Log out &nbsp;<font-awesome-icon
              :icon="['fas', 'power-off']" /></span></router-link></li>

      <!-- Right Content -->
      <li class="right">
        <router-link to="/">
          <span style="color: #ff8045;">
            {{ user.role === 'Professor' ? 'Prof. ' + user.lastName : user.name }}
            &nbsp;<font-awesome-icon :icon="['fas', 'graduation-cap']" style="color: #ff8045;" />
          </span>
        </router-link>
      </li>
      <!--<li class="right"><router-link to="/"><span>Professor
            &nbsp;<font-awesome-icon :icon="['fas', 'user-tie']" /></span></router-link></li>-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
}
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
  margin-right: 20px;
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
  padding: unset;
  cursor: default;
}
</style>
