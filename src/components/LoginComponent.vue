<!-- LoginComponent.vue -->
<template>
  <div>
    <div v-if="showRoleCard1 || showRoleCard2" class="role-card" @click="showLoginComp">
      <h3 :style="{ color: hover ? '#000' : '#fff' }">{{ role }}</h3>
    </div>

    <div v-else class="login-comp">
      <input v-model="name" type="text" placeholder="Name" @focus="isFocused = true" @blur="isFocused = false" />
      <button @click="submit">Submit</button>

      <div v-if="loginError" class="error-message">Login failed: User not found</div>
    </div>
  </div>
</template>

  
<script>
export default {
  props: {
    role: String,
    showRoleCard1: Boolean,
    showRoleCard2: Boolean,
  },
  data() {
    return {
      hover: false,
      name: '',
      isFocused: false,
      loginError: false,
    };
  },
  methods: {
    showLoginComp() {
      this.$emit('roleCardClicked', this.role);
      this.showRoleCard1 = true;
    },
    submit() {
      console.log('Name submitted:', this.name, this.role);

      // Überprüfe, ob der eingegebene Name in den Store-Daten existiert
      const user = this.$store.state.persons.find(person => {
        return person.role === this.role && person.name.toLowerCase() === this.name.toLowerCase();
      });

      if (user) {
        // Übergebe die Benutzerinformationen an die geroutete Seite
        console.log(user.id, this.name, this.role);
        this.$store.dispatch('loginUser', { name: this.name, role: this.role, id: user.id, lastName: user.lastName, email: user.email, courses: user.courses });
        this.$router.push({ path: '/home', params: { user: { id: user.id, name: this.name, role: this.role } } });
      } else {
        // Im Fehlerfall auch weiterleiten (ohne spezifische Benutzerinformationen)
        this.$store.dispatch('loginUser', { name: "Masha", role: "Professor", id: 4, lastName: "Merkur", email: "prof@example.com", courses: [0, 5] });
        this.$router.push('/home');

        this.loginError = true;
        console.error('Login failed: User not found');
      }
    },
  },
};
</script>
  
<style scoped>
.role-card {
  display: flex;
  /* Änderung hier */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
  background: #152d3a;
  margin: 5px;
  border: 1px solid #e8672c;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, background 0.5s ease;
}

.role-card:hover {
  box-shadow: 0 0 11px rgba(21, 45, 58, 255);
  background: linear-gradient(to right, rgba(231, 101, 44, 255) 0%, rgba(231, 101, 44, 255) 100%);
  color: rgb(255, 255, 255);
}

.login-comp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #152d3a;
  width: 300px;
  color: white;
  border: 2px solid #152d3a;
  /* Dunkelblaue Umrandung */
  border-radius: 10px;
  /* Runde Ecken */
  margin: 10px;
  /* Optional: Füge etwas Abstand um die Umrandung hinzu */
}

input {
  flex: 1;
  padding: 10px;
  margin-bottom: 10px;
  /* Etwas Abstand zwischen Input und Button */
  border: none;
  border-radius: 5px;
  background-color: #e8672c;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

input::placeholder {
  color: white;
}

input:focus {
  background-color: #e8490c;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #e8672c;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: #e8490c;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
  