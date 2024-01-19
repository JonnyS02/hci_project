<template>
  <nav>
    <ul>
      <li><router-link to="/home" :class="{ 'no-hover': currentPath === '/home' }"><span
            :class="{ 'active': currentPath === '/home'}">Homepage</span></router-link>
      </li>
      <li><router-link to="/about" :class="{ 'no-hover': currentPath === '/about' }"><span
            :class="{ 'active': currentPath === '/about', 'no-hover': currentPath === '/about' }">About</span></router-link>
      </li>
      <li><router-link to="/welcome" :class="{ 'no-hover': currentPath === '/welcome' }"><span
            :class="{ 'active': currentPath === '/welcome', 'no-hover': currentPath === '/welcome' }">Welcome</span></router-link>
      </li>

      <li><router-link to="/" :class="{ 'no-hover': currentPath === '/' }"><span>Log out &nbsp;<font-awesome-icon
              :icon="['fas', 'power-off']" /></span></router-link></li>

      <!-- Right Content -->
      <li class="right" ><router-link
          to="/"><span>Student
            &nbsp;<font-awesome-icon :icon="['fas', 'graduation-cap']" /></span></router-link></li>
      <li class="right" ><router-link
          to="/"><span>Professor
            &nbsp;<font-awesome-icon :icon="['fas', 'user-tie']" /></span></router-link></li>
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
  mounted() {
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
}</style>
