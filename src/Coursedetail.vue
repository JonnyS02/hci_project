<template>
      <div>
          <h1>Kursdetails</h1>
  
          <div class="orange_container" style="margin-bottom: 20px;">
              <div class="course-header">
                  <div class="course-name" style="color: #e8672c">{{ courseName }}</div>
                  <!-- Zeige den entsprechenden Button basierend auf dem Anmeldestatus -->
                  <button v-if="!enrolled" class="enroll-button" @click="showConfirmationModal">Zum Kurs anmelden</button>
                  <button v-else class="withdraw-button" @click="withdraw">Abmelden</button>
              </div>

                  <div class="separator"></div>

                  <div class="course-description">
                        <!-- Hier kommt deine Kursbeschreibung -->
                        <p style="font-size: 20px;">
                              Das Praktikum der Künstlichen Intelligenz bietet eine praxisorientierte Einführung in die Welt
                              der intelligenten Systeme. Studierende werden dabei unterstützt, grundlegende Konzepte der KI zu
                              verstehen und durch praxisnahe Aufgaben ihre Fähigkeiten in der Anwendung von Machine
                              Learning-Algorithmen zu vertiefen.
                        </p>
                  </div>

                  <div class="separator"></div>

                  <div class="course-details">
                        <div><strong>Datum/Uhrzeit:</strong> Dienstag 8:00 - 10:00 Uhr (C32)</div>
                        <div style="color: #e8672c; font-weight: 700;"><strong>Prof. Merkur</strong></div>
                  </div>
            </div>
      </div>
</template>
    
<script>
export default {
    data() {
        return {
            courseName: "Praktikum der künstlichen Intelligenz",
            showModal: false,
            enrolled: false, // Neue Variable für den Anmeldestatus
        };
    },
    methods: {
        showConfirmationModal() {
            // Hier könntest du Logik für die Anmeldung implementieren
            // Z.B. API-Aufruf, Status aktualisieren, etc.
            // Für dieses Beispiel setzen wir einfach den 'enrolled'-Status auf true.
            this.enrolled = true;
        },
        withdraw() {
            // Hier könntest du Logik für das Zurückziehen implementieren
            // Z.B. API-Aufruf, Status aktualisieren, etc.
            // Für dieses Beispiel setzen wir einfach den 'enrolled'-Status auf false.
            this.enrolled = false;
        },
    },
};
</script>
    
<style scoped>

.withdraw-button {
    font-size: 16px;
    cursor: pointer;
    padding: 10px 20px;
    background-color: #e8672c;
    color: rgb(17, 14, 14);
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.withdraw-button:hover {
    background-color: #ff3d0d;
    color: #000;
    /* Schriftfarbe schwarz */
}
.course-header {
      display: flex;
      justify-content: space-between;
}

.course-name {
      font-size: 24px;
      font-weight: bold;
}

.enroll-button {
      font-size: 16px;
      cursor: pointer;
      padding: 10px 20px;
      background-color: #fff2ec;
      color: rgb(17, 14, 14);
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;
}

.enroll-button:hover {
      background-color: #e8672c;
      color: #000;
      /* Schriftfarbe schwarz */
}

.course-description {
      margin-top: 20px;
      margin-bottom: 20px;
      padding-left: 1%;
}

.course-description p {
      font-size: 50px;
}

.course-details {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      font-size: 20px;
      padding-right: 5%;
      padding-left: 3%;
}

.separator {
      background-color: rgb(232, 104, 44);
      height: 1px;
      margin: 20px 0;
}
</style>
    