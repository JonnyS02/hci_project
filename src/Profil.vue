<template>
      <h1>Profil</h1>
      <div class="orange_container" id="outer_container">
            <img src="./assets/6644b34c91f57f8d40a4eaa94e3cb797.png" class="image" />
      
            <div class="personal">
                  <h1 class="no_caret">
                        <span :style="{ color: '#e8672c' }">{{ user.displayUserName }} {{ user.lastName }}</span>
                  </h1>
                  <hr>
                  <div>
                        <div class ="border">
                              <div class = "inner-left">
                                    Rolle:
                              </div>
                              <div class = "inner-right">
                                    {{ user.rolle }}
                              </div>
                        </div>
                        <div class ="border">
                              <div class = "inner-left">
                                    E-Mail:
                              </div>
                              <div class = "inner-right">
                                    {{ user.email }}
                              </div>
                        </div>
                        <div class ="border">
                              <div class = "inner-left">
                                    Matrikelnummer:
                              </div>
                              <div class = "inner-right">
                                    174056
                              </div>
                        </div>
                        <div class ="border">
                              <div class = "inner-left">
                                    Geburtsdatum:
                              </div>
                              <div class = "inner-right">
                                    31.12.2000
                              </div>
                        </div>
                        <div class ="border">
                              <div class = "inner-left">
                                    Persönliche E-Mail:
                              </div>
                              <div class = "inner-right">
                                    anna@example.com
                              </div>
                        </div>
                  </div>
            </div>
            <div class ="left-content">
                  <div class="light-border">
                        <div class ="inner-left">
                              Straße:
                        </div>
                        <div class="inner-right">
                              Musterstraße 19
                        </div>
                  </div>
                  <div class="light-border">
                        <div class ="inner-left">
                              Ort:
                        </div>
                        <div class="inner-right">
                              67443 Neustadt, Deutschland
                        </div>
                  </div>
                  <div class="light-border">
                        <div class ="inner-left">
                              Telefon:
                        </div>
                        <div class="inner-right">
                              09443 679340
                        </div>
                  </div>
                  <div class="light-border">
                        <div class ="inner-left">
                              Mobil:
                        </div>
                        <div class="inner-right">
                              0170 450620
                        </div>
                  </div>
                  <button class="button-class">Daten ändern&nbsp<font-awesome-icon :icon="['fas', 'pen-square']" /></button>
            </div>
      </div>

      <div class="orange_container">
            <table class="full-table">
                  <tr>
                        <th>Fach</th>
                        <th>Fachsemester</th>
                        <th>Fachkennzeichen</th>
                  </tr>
                  <tr>
                        <td>Astrophysik (PO 2021)</td>
                        <td>4</td>
                        <td>Hauptfach</td>
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
.left-content{
      grid-area: left-content;
      width: 90%;
      height: 100%;
      border: 1px solid rgb(232, 104, 44);
      border-radius: 10px;
      padding: 2%;
}
.inner-left{
      padding-left: 10px;
      width: 50%;
      display: inline-block;
      vertical-align: top;
}
.inner-right{
      width: 50%;
      display: inline-block;
}
.light-border{
      background-color: #8686863b;
      border-radius: 5px;
      margin-top: 10px;
}
.border{
      border-radius: 10px;
      padding: 5px;
      background-color: #8686863b;
      margin: auto;
      max-width: 1200px;
      margin-top: 30px;
      margin-bottom: 30px;
      color: white;
}

#outer_container{
      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-template-rows: 1fr 2fr;
      grid-template-areas: "image right-half"
                              "left-content right-half";
      max-width: 1000px;
      text-align: left;
      height: 32em;
}
.image {
      grid-area: image;
      width: 50%;
      border-radius: 20px;
      margin-left: 20%;
      margin-bottom: 5%;
}
.personal {
      grid-area: right-half;
      font-size: 18px;
}

.button-class{
      float: right;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      padding: 5px;
      background-color: #868686;
      color: black;
      border: 1px solid black;
      border-radius: 5px;
      margin-top: 10px;
      transition: background-color 0.3s, color 0.3s;
      /* Fügt eine sanfte Animation hinzu */
}

.button-class:hover {
    background-color: #e8672c;
    color: #000;
    /* Schriftfarbe schwarz */
}

/* Ab hier untere Tabelle */

table, th, td{
      border: thin solid grey;
      border-collapse: collapse;
      background-color: #3f3e3e3b;
}
th{
      background-color: #8686863b;
}
td{
      padding-top: 15px;
      padding-bottom: 20px;
      font-weight: 500;
}


.full-table{
      width: 100%;
      text-align: center;
}

th{
      font-size: 18px;
      font-weight: 700;
}

</style>
    