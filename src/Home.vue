<template>
  <h1 class="no_caret">Willkommen zurück, <span :style="{ color: '#e8672c' }">{{ displayUserName }}</span></h1>
  <div class="cards">
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
      <li class="card_holder" v-for="(card, index) in cards" :key="card.link" :data-index="index">
        <router-link :to="card.link" class="card-link">
          <div class="card">
            <img src ="@/assets/Mitteilung_1.svg" v-if="card.title === 'Leistungen'" alt="Mitteilung" style="width: 28px; position: absolute; right: 2%; top: 8%;">
            <img src ="@/assets/Mitteilung_2.svg" v-if="card.title === 'Postfach'" alt="Mitteilung" style="width: 28px; position: absolute; right: 2%; top: 8%;">
            <h2>{{ card.title }}</h2>
          </div>
        </router-link>
      </li>
    </transition-group>
  </div>
  <transition-group appear @before-enter="beforeEnter" @enter="delay">
    <div style="margin-top: 5%; margin-bottom: 30px;" class="orange_container" key="card.link">
      <h2 style="padding-left:10px;">Aktuelle Meldungen:</h2>
      <div v-for="(email, index) in mails" :key="email" :class="{ 'email': true, 'seen': email.seen }"
        :style="{ 'border-top': index === 0 ? 'none' : '1px solid rgba(232, 104, 44, 0.374)', 'border-bottom': index === mails.length - 1 ? 'none' : '1px solid rgba(232, 104, 44, 0.374)' }">
        <table width="100%">
          <tr>
            <td style="width: 35%;"><span class="pointer">
                <font-awesome-icon :icon="['fas', 'info-circle']" />
                &nbsp
                <span class="pointer">{{ email.subject }}</span>
              </span>
            </td>
            <td style="width: 20%;"><span class="pointer">{{ email.sender }}</span></td>
            <td style="width: 10%;"><span class="pointer">{{ email.time }}</span></td>
            <td style="width: 5%;text-align: right;font-size: 1.3em;"><span class="pointer"><font-awesome-icon
                  :icon="['fas', 'chevron-circle-down']" /></span></td>
          </tr>
        </table>
      </div>
    </div>
  </transition-group>
</template>

<script>
import { ref } from 'vue'
import gsap from 'gsap'
import store from './store';

export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    displayUserName() {
      return this.user && this.user.name ? (this.user.role === 'Professor' ? 'Prof. ' + this.user.lastName : this.user.name) : "Max";
    },
  },
  setup() {
    const user = store.getters.getUser; // To get user informations //klappt
    const userCourses = store.getters.getUserCourses(user.id); //To get courses from user //klappt
    console.log(user.id, user.name, user.role, user.courses);
    console.log(userCourses);

    const cards = ref([
      { title: "Verlaufsplan & Anmeldung", link: "/verlaufsplan" },
      { title: user.role === 'Professor' ? "Meine Kurse" : "Meine Kurse", link: user.role === 'Professor' ? "/courselistprof" : "/courseliststudi" },
      { title: user.role === 'Professor' ? "Kurs erstellen" : "Leistungen", link: user.role === 'Professor' ? "/addcourse" : "/leistungen" },
      { title: "Stundenplan", link: "/schedule" },
      { title: "Profil & Studienservice", link: "/profil" },
      { title: "Postfach", link: "/postfach" },
    ]);

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

    const delay = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: 1.1,
      })
    }

    const mails = ref([
      { sender: 'Orbitalmechanik', time: '29.02.2023, 09:03', subject: 'Prüfungsanmeldung ist jetzt offen!', seen: false },
      { sender: 'Fortgeschrittene Satellitentechnik', time: '28.02.2023, 10:15', subject: 'Übung fällt aus am 02.03.2024', seen: false },
      { sender: 'Raumzeit und Relativität', time: '27.02.2023, 11:30', subject: 'Raumänderung für 07.03.2024', seen: true },
      { sender: 'Fortgeschrittene Satellitentechnik', time: '24.02.2023, 14:45', subject: 'Prüfungstermin wurde verschoben!', seen: true },
    ]);

    return { cards, beforeEnter, enter, delay, mails }
  }
}
</script>

<style scoped>
.cards {
  padding-top: 5%;
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

.card-link{
  padding: unset;
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

td {
  width: 25%;
}

table {
  width: 100%;
}

.email {
  padding: 5px;
  border-top: 1px solid rgba(232, 104, 44, 0.374);
  border-bottom: 1px solid rgba(232, 104, 44, 0.374);
}

.email.seen {
  color: rgb(160, 160, 160);
}

.orange_container {
  border: unset;
  padding: unset;
}

.pointer {
  cursor: pointer;
  transition: color 0.15s ease-in-out;
}

.pointer:hover {
  color: #e8672c;
}
</style>