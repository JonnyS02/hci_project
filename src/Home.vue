<!-- Home.vue -->
<template>
  <div>
    <Navbar />
    <div class="main_content">
      <h1>Welcome back <span :style="{ color: '#e8672c' }">{{ displayUserName }}</span></h1>
      <div class="card-container">
        <CardItem v-for="(card, index) in cardItems" :key="index" :title="card.title" :link="card.link"
          :delay="((index) / 50) + 0.01" />
      </div>
    </div>
    <footerC />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import CardItem from './components/CardItem.vue';
import footerC from './components/footerC.vue';



export default {
  components: {
    Navbar,
    CardItem,
    footerC,
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
        { title: "Card 1", link: "/courseprof" },
        { title: "Card 2", link: "/home" },
        { title: "Card 3", link: "/home" },
        { title: "Card 4", link: "/home" },
        { title: "Card 5", link: "/home" },
        { title: "Card 6", link: "/home" },
      ],
    };
  },
};
</script>

<style>
.card-container {
  padding-top: 12%;
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (max-width: 1300px) {
  .card-container {
    padding-left: 0%;
    padding-right: 0%;
  }
}

@media only screen and (max-width: 1700px) {
  .card-container {
    padding-left: 10%;
    padding-right: 10%;
  }
}

@media only screen and (max-width: 1900px) {
  .card-container {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>
