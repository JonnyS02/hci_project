<template>
    <div>
        <h1 class="no_caret">Kurs erstellen</h1>
        <div class="container">
            <div>
                <div class="orange_container">
                    <form>
                        <div class="form-row">
                            <div class="form-column">
                                <label for="name" style="color: #ffffff;">Name:</label>
                                <input type="text" id="name" name="name" required placeholder=" Kursname"
                                    style="border: 2px solid #ff8045; color: #ffffff;">

                                <label for="room" style="color: #ffffff;">Raum:</label>
                                <input type="text" id="room" name="room" required placeholder=" z.B C32"
                                    style="border: 2px solid #ff8045; color: #ffffff;">
                            </div>
                            <div class="form-column">
                                <label for="professor" style="color: #ffffff;">Professor:</label>
                                <input type="text" id="professor" name="professor" :value="user ? user.lastName : ''"
                                    required readonly placeholder="Professor's last name"
                                    style="border: 2px solid #ff8045; color: #ffffff;">

                                <label for="timeslot" style="color: #ffffff;">Zeit:</label>
                                <input type="text" id="timeslot" name="timeslot" required placeholder=" z.B 10-12 Uhr"
                                    style="border: 2px solid #ff8045; color: #ffffff;">
                                <label for="day" style="color: #ffffff;">Tag:</label>
                                <input type="text" id="day" name="day" required placeholder=" z.B Mo, Di"
                                    style="border: 2px solid #ff8045; color: #ffffff;">
                            </div>
                        </div>

                        <label for="description" style="color: #ffffff;">Beschreibung:</label>
                        <textarea id="description" name="description" required placeholder=" Beschreibung"
                            style="border: 2px solid #ff8045; color: #ffffff;"></textarea>

                        <button type="submit" class="button">
                            Kurs erstellen
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Navbar from './components/navbar.vue';

export default {
    components: {
        Navbar,
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        },
    },
};
</script>
  
<style scoped>
.card {
    cursor: pointer;
    background-color: rgb(215, 215, 215);
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: 0.15s ease-in-out;
    border: 2px solid rgb(232, 104, 44);
    transition: background-color 0.15s ease-in-out;
}

.course-card {
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
}

.bullet {
    margin-right: 5px;
}

.card:hover {
    background-color: rgb(232, 104, 44);
}

form {
    display: flex;
    flex-direction: column;
}

.form-row {
    display: flex;
    justify-content: space-between;
}

.form-column {
    flex: 1;
    margin-right: 10px;
}

label {
    margin-top: 10px;
}

input,
textarea {
    margin-bottom: 10px;
    width: 100%;
    background-color: #272727;

}

.button{
      float: right;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      padding: 5px;
      background-color: #696868;
      color: white;
      border: 1px solid black;
      border-radius: 5px;
      margin-top: 10px;
      transition: background-color 0.3s, color 0.3s;
      /* Fügt eine sanfte Animation hinzu */
}

.button:hover {
    background-color: #e8672c;
    color: white;
    /* Schriftfarbe schwarz */
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-right: 15%;
    padding-left: 15%;
}

.list {
    flex: 1;
    padding-left: 10px;
}

.form-container {
    width: 350px;
    padding: 20px;
    border: 2px solid #e8672c;
    border-radius: 5px;
    background-color: rgb(39, 38, 38);
    position: relative;
}</style>
  