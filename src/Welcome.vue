<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="main_content">
    <header>
      <img alt="Vue logo" class="logo no_caret" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld :msg="`You did it! ${this.$store.state.persons[1].lastName}`" />
      </div>
    </header>
    <main>
      <TheWelcome />
    </main>
  </div>
</template>

<style scoped></style>
<script>
import Navbar from './components/navbar.vue';

export default {
  components: {
    Navbar,
  },
}
</script>