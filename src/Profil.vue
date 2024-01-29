<template>
      <h1>Profil</h1>
      <div class="profil">
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
      <div class="noten" style="margin-bottom: 20px;">
            <h2 style="width: 100%; float: left;color: white;">Noten & Leistungen</h2>
            <hr>
            <table class="noten_table">
                  <tr style="font-size: 20px;">
                        <th>Fach</th>
                        <th>Note</th>
                        <th>Punkte</th>
                        <th>Datum</th>
                  </tr>
                  <tr>
                        <td colspan="4" style="background-color: rgb(232, 104, 44); height: 1px;padding: unset;margin: unset;"></td>
                  </tr>
                  <tr>
                        <td>Mathematik</td>
                        <td>1,3</td>
                        <td>85</td>
                        <td>2023-05-15</td>
                  </tr>
                  <tr>
                        <td>Englisch</td>
                        <td>2,0</td>
                        <td>78</td>
                        <td>2023-06-02</td>
                  </tr>
                  <tr>
                        <td>Deutsch</td>
                        <td>1,7</td>
                        <td>82</td>
                        <td>2023-06-10</td>
                  </tr>
                  <tr>
                        <td>Geschichte</td>
                        <td>2,5</td>
                        <td>75</td>
                        <td>2023-06-20</td>
                  </tr>
                  <tr>
                        <td>Biologie</td>
                        <td>1,0</td>
                        <td>90</td>
                        <td>2023-07-05</td>
                  </tr>
                  <tr>
                        <td colspan="4" style="background-color: rgb(232, 104, 44); height: 1px;padding: unset;margin: unset;"></td>
                  </tr>
                  <tr style="font-size: 20px;">
                        <th>Gesamt</th>
                        <th>2.3</th>
                        <th>456</th>
                        <th>25.01.2024</th>
                  </tr>
            </table>
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
.special {
      border-top: 2px solid black;
      border-right: none;
      border-bottom: none;
      border-left: none;
}

.noten_table td,
.noten_table th {
      padding: 8px;
}

.noten_table tr:nth-child(even) {
      background-color: #f2f2f21f;
}

.noten_table {
      color: white;
      width: 100%;
}


.noten {
      margin: auto;
      max-width: 700px;
      text-align: left;
      border: 2px solid rgb(232, 104, 44);
      border-radius: 20px;
      padding: 20px;
      background-color: #8686863b;
      margin-top: 30px;
}

.profil {
      display: flex;
      margin: auto;
      max-width: 700px;
      text-align: left;
      border: 2px solid rgb(232, 104, 44);
      border-radius: 20px;
      padding: 20px;
      background-color: #8686863b;
}

img {
      width: calc(50% - 20px);
      border-radius: 20px;
      max-width: 400px;
      margin-right: 20px;
}

.personal {
      color: white;
      font-size: 20px;
      flex-grow: 1;
}
</style>
    