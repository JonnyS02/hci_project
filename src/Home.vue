<!-- Home.vue -->
<template>
  <div>
    <Navbar />
    <div class="main_content">
      <h1>Welcome back <span :style="{ color: '#e8672c' }">{{ displayUserName }}</span></h1>
      <div class="card-container">
        <CardItem v-for="(card, index) in cardItems" :key="index" :title="card.title" :link="card.link" :delay="((index)/50)+0.01" />
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
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    displayUserName() {
      return this.user && this.user.name ? this.user.name : "Max";
    },
  },
  data() {
    return {
      cardItems: [
        { title: "Card 1", link: "/card1" },
        { title: "Card 2", link: "/card2" },
        { title: "Card 3", link: "/card3" },
        { title: "Card 4", link: "/card4" },
        { title: "Card 5", link: "/card5" },
        { title: "Card 6", link: "/card6" },
      ],
    };
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
  justify-content: center;
  /* Zentriere horizontal */
}

@media only screen and (max-width: 1300px) {
  .card-container {
    padding-left: 0%;
    padding-right: 0%;
  }
}
</style>
