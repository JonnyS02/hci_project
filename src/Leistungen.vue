<template>
            <h1>Deine Leistungen</h1>

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
                        <td colspan="4"
                              style="background-color: rgb(232, 104, 44); height: 1px;padding: unset;margin: unset;"></td>
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