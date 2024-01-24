<template>
  <div>
    <h1 class="no_caret">Your courses, <span :style="{ color: '#e8672c' }">{{ user ? `Prof. ${user.lastName}` : 'Guest' }}</span></h1>
    <div class="cards">
      <div class="list">
        <ul>
          <h2 style="color: #e8672c; font-size: 24px; font-weight: bold;">Courselist</h2>
          <li class="card_holder" v-for="course in userCourses" :key="course.id">
            <div class="course-card">
              <span class="bullet" style="color: #ff8045;">&#8226;</span>
              <span style="color: #ff8045;">{{ course.name }}</span><br> Raum: {{ course.raum }},
              {{ course.day }} {{ course.timeslot }}
            </div>
          </li>
        </ul>
      </div>
      <div><h2 style="color: #e8672c; font-size: 24px; font-weight: bold; text-align: center;">Create new Course</h2>
      <div class="form-container">
        <form>
          <div class="form-row">
            <div class="form-column">
              <label for="name" style="color: #0c0907;">Name:</label>
              <input type="text" id="name" name="name" required style="border: 2px solid #ff8045; color: #ff8045;">

              <label for="room" style="color: #030302;">Room:</label>
              <input type="text" id="room" name="room" required style="border: 2px solid #ff8045; color: #ff8045;">

            </div>
            <div class="form-column">
              <label for="professor" style="color: #000000;">Professor:</label>
              <input type="text" id="professor" name="professor" :value="user ? user.lastName : ''" required readonly style="border: 2px solid #ff8045; color: #ff8045;">

              <label for="timeslot" style="color: #000000;">Timeslot:</label>
              <input type="text" id="timeslot" name="timeslot" required style="border: 2px solid #ff8045; color: #ff8045;">
              <label for="day" style="color: #000000;">Day:</label>
              <input type="text" id="day" name="day" required style="border: 2px solid #ff8045; color: #ff8045;">
            </div>
          </div>

          <label for="description" style="color: #000000;">Description:</label>
          <textarea id="description" name="description" required style="border: 2px solid #ff8045; color: #ff8045;"></textarea>

          <button type="submit" style="border: 1px solid #e8672c; color: #0e0906; background-color: #e8672c;">
            Submit
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
    userCourses() {
      return this.$store.getters.getUserCourses(this.user.id);
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

.list {
  margin-right: 130px;
}

.form-container {
  width: 350px;
  padding: 20px;
  border: 2px solid #e8672c;
  border-radius: 5px;
  background-color: rgb(215, 215, 215);
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

button {
  cursor: pointer;
  padding: 10px;
  background-color: #e8672c;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
