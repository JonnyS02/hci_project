<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <Links />

  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="`You did it! ${this.$store.state.persons[1].lastName}`" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
</style>
<script>
import Links from './components/Links.vue';

export default {
  components: {
    Links,
  },
}
</script>