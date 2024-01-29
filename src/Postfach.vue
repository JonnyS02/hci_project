<template>
  <div>
    <h1>Postfach für <span :style="{ color: '#e8672c' }">{{ user.email }}</span></h1>
    <div style="margin-top: 30px; margin-bottom: 30px;">
      <div v-for="(email, index) in testEmails" :key="index" class="orange_container">
        <table width="100%">
          <tr>
            <td>{{ email.subject }}</td>
            <td>{{ email.sender }}</td>
            <td>{{ email.time }}</td>
            <td><font-awesome-icon :icon="['fas', 'circle-chevron-down']" /></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  computed: {
    user() {
      const user = this.$store.getters.getUser;
      return {
        email: user?.email,
      };
    },
    testEmails() {
      // Array von Test-E-Mails
      return [
        { sender: 'test.heimer@testhause.org', time: '10:15', subject: 'Rückmeldung ABM Übung' },
        { sender: 'example@example.com', time: '11:30', subject: 'Meeting Einladung' },
        { sender: 'info@company.com', time: '14:45', subject: 'Produktaktualisierung' },
      ];
    },
  },
};
</script>
    
<style scoped>
td {
  width: 25%;
}

table {
  width: 100%;
}

.orange_container {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
    