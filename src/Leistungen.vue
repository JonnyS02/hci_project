<template>
      <h1>Ihre aktuellen Leistungen</h1>

      <div class="orange_container" style="margin-bottom: 20px;">

            <table class="noten_table">
                  <tr style="font-size: 20px;">
                        <th>Fach</th>
                        <th>Note</th>
                        <th>Punkte</th>
                        <th>Datum</th>
                  </tr>
                  <tr>
                        <td colspan="4"
                              style="background-color: rgb(232, 104, 44); height: 1px;padding: unset;margin: unset;"></td>
                  </tr>
                  <tr>
                        <td>Astronomie</td>
                        <td>1,5</td>
                        <td>5</td>
                        <td>15.05.2023</td>
                  </tr>
                  <tr>
                        <td>Astrophysik</td>
                        <td>1,8</td>
                        <td>5</td>
                        <td>02.06.2023</td>
                  </tr>
                  <tr>
                        <td>Planetenwissenschaften</td>
                        <td>1,7</td>
                        <td>10</td>
                        <td>10.06.2023</td>
                  </tr>
                  <tr>
                        <td>Raumfahrttechnik</td>
                        <td>2,2</td>
                        <td>5</td>
                        <td>20.06.2023</td>
                  </tr>
                  <tr>
                        <td>Exobiologie</td>
                        <td>1,2</td>
                        <td>10</td>
                        <td>05.07.2023</td>
                  </tr>
                  <tr>
                        <td colspan="4"
                              style="background-color: rgb(232, 104, 44); height: 1px;padding: unset;margin: unset;"></td>
                  </tr>
                  <tr style="font-size: 20px;">
                        <th>Gesamt</th>
                        <th>1,6</th>
                        <th>35</th>
                        <th>{{ currentDate }}</th>
                  </tr>
            </table>
      </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: ''
    };
  },
  mounted() {
    this.setCurrentDate();
  },
  methods: {
    setCurrentDate() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      this.currentDate = `${day}.${month}.${year}`;
    }
  }
};
</script>

<style scoped>
.noten_table td,
.noten_table th {
      padding: 8px;
}

.noten_table tr:nth-child(even) {
      background-color: #f2f2f21f;
}

.noten_table {
      width: 100%;
}
</style>