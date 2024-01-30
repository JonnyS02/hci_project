<template>
  <h1>Postfach für <span :style="{ color: '#e8672c' }">{{ user.email }}</span></h1>
  <div style="margin-top: 30px; margin-bottom: 30px;" class="orange_container">
    <div v-for="(email, index) in mails" :key="email" :class="{ 'email': true, 'seen': email.seen }"
      :style="{ 'border-top': index === 0 ? 'none' : '1px solid rgba(232, 104, 44, 0.374)', 'border-bottom': index === mails.length - 1 ? 'none' : '1px solid rgba(232, 104, 44, 0.374)' }">
      <table width="100%">
        <tr>
          <td style="width: 35%;"><span class="pointer">
              <font-awesome-icon v-if=!email.seen :icon="['fas', 'envelope']" />
              <font-awesome-icon v-else :icon="['fas', 'envelope-open']" />
              &nbsp
              <span class="pointer">{{ email.subject }}</span>
            </span>
          </td>
          <td style="width: 35%;"><span class="pointer">{{ email.sender }}</span></td>
          <td style="width: 25%;"><span class="pointer">{{ email.time }}</span></td>
          <td style="width: 5%;text-align: right;font-size: 1.3em;"><span class="pointer"><font-awesome-icon
                :icon="['fas', 'chevron-circle-down']" /></span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ref } from 'vue'

export default {
  computed: {
    user() {
      const user = this.$store.getters.getUser;
      return {
        email: user?.email,
      };
    },
  },
  setup() {
    const mails = ref([
      { sender: 'test.heimer@testhausen.org', time: '29.02.2023, 10:15', subject: 'Rückmeldung zum Test-Test', seen: false },
      { sender: 'admissions@space-university.com', time: '29.02.2023, 10:15', subject: 'Bestätigung deiner Bewerbung', seen: false },
      { sender: 'professorX@space-university.com', time: '29.02.2023, 11:30', subject: 'Vorlesungseinladung für Astrophysik', seen: false },
      { sender: 'admin@space-university.com', time: '29.02.2023, 14:45', subject: 'Informationen zur Einschreibung', seen: true },
      { sender: 'studentcouncil@space-university.com', time: '01.03.2023, 09:20', subject: 'Einladung zur Studentenversammlung', seen: false },
      { sender: 'professorY@space-university.com', time: '01.03.2023, 13:55', subject: 'Vorlesungsaufzeichnung verfügbar', seen: true },
      { sender: 'library@space-university.com', time: '02.03.2023, 08:00', subject: 'Bücher zurückgeben Erinnerung', seen: true },
      { sender: 'careercenter@space-university.com', time: '02.03.2023, 16:30', subject: 'Praktikumsangebote für Ingenieurwesen', seen: true },
      { sender: 'professorZ@space-university.com', time: '03.03.2023, 10:00', subject: 'Hausaufgaben für Raumfahrttechnik', seen: false },
      { sender: 'financialaid@space-university.com', time: '03.03.2023, 14:20', subject: 'Finanzielle Unterstützungsinformationen', seen: true },
      { sender: 'campusactivities@space-university.com', time: '04.03.2023, 15:45', subject: 'Einladung zur Mars-Exkursion', seen: true }
    ]);
    return { mails }
  }
};
</script>

<style scoped>
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
