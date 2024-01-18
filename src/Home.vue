<template>
  <Navbar />
  <div class="main_content">
    <h1>Home</h1>
  </div>
</template>

<script>
import Links from './components/Links.vue';
import Navbar from './components/navbar.vue';


export default {
  components: {
    Links,
    Navbar,
  },
}
</script>

<style>
.main_content{
  padding: 10px;
  margin-left: 15px;
}
</style>