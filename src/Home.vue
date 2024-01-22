<template>
  <h1 class="no_caret">Welcome back <span :style="{ color: '#e8672c' }">{{ displayUserName }}</span></h1>
  <div class="cards">
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
      <li class="card_holder" v-for="(card, index) in cards" :key="card.link" :data-index="index">
        <router-link :to="card.link" class="card-link">
          <h2 class="card">{{ card.title }}</h2>
        </router-link>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { ref } from 'vue'
import gsap from 'gsap'
import Navbar from './components/navbar.vue';
import footerC from './components/footerC.vue';
import store from './store';

export default {
  components: {
    Navbar,
    footerC,
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
      return this.$store.getters.getUserCourses;
    },
    displayUserName() {
      return this.user && this.user.name ? this.user.name : "Max";
    },
  },
  setup() {
    const cards = ref([
      { title: "Verlaufsplan", link: "/card1" },
      { title: "Meine Kurse", link: "/courseprof" },
      { title: "Leistungen", link: "/card3" },
      { title: "Stundenplan", link: "/schedule" },
      { title: "Profil", link: "/card5" },
      { title: "Postfach", link: "/card6" },

    ])

    const user = store.getters.getUser; // To get user informations //klappt
    const userCourses = store.getters.getUserCourses(user.id); //To get courses from user //klappt
    console.log(user.id, user.name, user.role, user.courses);
    console.log(userCourses);

    const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }

    return { cards, beforeEnter, enter }
  }
}
</script>

<style>
.cards {
  padding-top: 20vh;
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  cursor: pointer;
  background-color: rgb(215, 215, 215);
  width: 300px;
  height: 100px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 0.15s ease-in-out;
  border: 2px solid rgb(232, 104, 44);
  transition: background-color 0.15s ease-in-out;
}

.card_holder {
  list-style-type: none;
}

.card:hover {
  background-color: rgb(232, 104, 44);
}

.cards a {
  color: #181818;
}

.cards a:hover {
  background-color: unset;
}

@media only screen and (max-width: 1300px) {
  .cards {
    padding-left: 0%;
    padding-right: 0%;
  }
}

@media only screen and (max-width: 1700px) {
  .cards {
    padding-left: 10%;
    padding-right: 10%;
  }
}

@media only screen and (max-width: 1900px) {
  .cards {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>