<template>
  <nav>
    <ul>
      <li class="left" :class="{ 'active': this.$route.path === '/home' }"><router-link to="/home">Homepage</router-link></li>
      <li class="left" :class="{ 'active': this.$route.path === '/about' }"><router-link to="/about">About</router-link>
      </li>
      <li class="left" :class="{ 'active': this.$route.path === '/welcome' }"><router-link
          to="/welcome">Welcome</router-link>
      </li>
      <li class="left" :class="{ 'active': $route.path === '/' }"><router-link to="/">Log out
          &nbsp;<font-awesome-icon :icon="['fas', 'power-off']" /></router-link></li>

          <!--Right Content-->
      <li class="right" :class="{ 'active': $route.path === '/' }"><router-link to="/">Student &nbsp;<font-awesome-icon
            :icon="['fas', 'graduation-cap']" /></router-link></li>
      <li class="right" :class="{ 'active': $route.path === '/' }"><router-link to="/">Professor &nbsp;<font-awesome-icon
            :icon="['fas', 'user-tie']" /></router-link></li>

    </ul>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
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
  color: orange;
}
</style>
