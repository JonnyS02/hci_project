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
      <li class="no_caret" style="margin-left: auto; position: relative; display: inline-block;">
        <router-link to="/" class="off">
          <span>Log out<span>&nbsp <font-awesome-icon :icon="['fas', 'power-off']" /></span></span>
        </router-link>
      </li>
      <!-- Right Content -->
      <li class="dropdown" style="margin-right: 0px;">
        <router-link to="/profil" :class="{ 'active': currentPath === '/profil', 'no-hover': currentPath === '/profil' }">
          {{ user.role === 'Professor' ? 'Prof. ' + user.lastName : user.name }}
          &nbsp;<font-awesome-icon v-if="user.role === 'Student'" :icon="['fas', 'graduation-cap']" style="color: #ff8045;" />
          <font-awesome-icon v-else :icon="['fas', 'user-tie']" style="color: #ff8045;" />
        </router-link>
        <div class="dropdown-content">
            <p v-if="user.role === 'Student'">Bescheinigungen</p>
            <hr v-if="user.role === 'Student'">
            <p v-if="user.role === 'Student'">Zahlungen</p>
            <hr v-if="user.role === 'Student'">
            <p>Einstellungen</p>
            <hr>
        </div> 
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '../store';

export default {
  name: 'Navbar',
  data() {
    return {
      currentPath: '',
      navItems: [
        { path: '/home', label: 'Homepage' },
        { path: '/verlaufsplan', label: 'Verlaufsplan & Anmeldung' },
        { path: this.getUserCoursesLink() ?  "/courselistprof" : "/courseliststudi", label: "Meine Kurse" },
        { label: this.getUserCoursesLink() ? "Kurs erstellen" : "Leistungen", path: this.getUserCoursesLink() ? "/addcourse" : "/leistungen" },
        { path: '/schedule', label: 'Stundenplan' },
        { path: '/postfach', label: 'Postfach' },
      ],
    };
  },
  methods: {
    getUserCoursesLink() {
      const user = store.getters.getUser;
      return user.role === 'Professor';
    }
  },
  computed: {
    user() {
      return store.getters.getUser;
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
  padding-left: 50px;
  padding-right: 50px;

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
/* Dropdown Button*/
.dropdown {
  position: relative;
  display: inline-block;
  padding-left: 10px;
}

.dropdown-content {
  display: none;
  position:absolute;
  background-color:  #333;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px 20px;
  z-index: 1;
  right: 0;
  border-radius: 10px;
  border: thin solid black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

p{
  padding-top: 8px;
  transition: background-color 0.3s, color 0.3s;
}

p:hover{
  color: white;
  cursor:pointer;
}

hr{
  color:#ff8045;
  border-color: #ff8045;
}

</style>
