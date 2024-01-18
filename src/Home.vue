<!-- Home.vue -->
<template>
  <div>
    <Navbar />
    <div class="main_content">
      <h1>Welcome back <span :style="{ color: '#e8672c' }">{{ user.name }}</span></h1>
      <div class="card-container">
        <CardItem title="Card 1" link="/card1" />
        <CardItem title="Card 2" link="/card2" />
        <CardItem title="Card 3" link="/card3" />
        <CardItem title="Card 4" link="/card4" />
        <CardItem title="Card 5" link="/card5" />
        <CardItem title="Card 6" link="/card6" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import CardItem from './components/CardItem.vue';

export default {
  components: {
    Navbar,
    CardItem,
  },computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style>
.main_content {
  padding: 10px;
  margin-left: 15px;
}

.card-container {
  padding-top: 12%;
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Zentriere horizontal */
}
</style>
