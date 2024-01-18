<template>
  <Navbar />
  <div class="main_content">
    <h1>Hi <span :style="{ color: '#e8672c' }">{{ user.name }}</span></h1>
  </div>
</template>

<script>
import Links from './components/Links.vue';
import Navbar from './components/navbar.vue';


export default {
  components: {
    Links,
    Navbar,
  },computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style>
.main_content{
  padding: 10px;
  margin-left: 15px;
}
</style>