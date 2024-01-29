<template>
      <h1>Profil</h1>
      <div class="orange_container">
            <img src="./assets/6644b34c91f57f8d40a4eaa94e3cb797.png" />

            <div class="personal">
                  <h1 class="no_caret">
                        <span :style="{ color: '#e8672c' }">{{ user.displayUserName }} {{ user.lastName }}</span>
                  </h1>
                  <hr>
                  <table style="width: 100%;">
                        <tr>
                              <th>Rolle</th>
                              <th>{{ user.rolle }}</th>
                        </tr>
                        <tr>
                              <td>Email</td>
                              <td>{{ user.email }}</td>
                        </tr>
                        <tr>
                              <td>Semester</td>
                              <td>{{ user.semester }}.</td>
                        </tr>
                  </table>
            </div>
      </div>
</template>
    
<script>
export default {
      computed: {
            user() {
                  const user = this.$store.getters.getUser;
                  return {
                        displayUserName: user?.name || "Max",
                        lastName: user?.lastName,
                        rolle: user?.role,
                        email: user?.email,
                        semester: user?.semester
                  };
            }
      }
}
</script>
    
<style scoped>
.orange_container {
      display: flex;
      max-width: 700px;
      text-align: left;
}

img {
      width: calc(50% - 20px);
      border-radius: 20px;
      max-width: 400px;
      margin-right: 20px;
}

.personal {
      font-size: 18px;
      flex-grow: 1;
}
</style>
    