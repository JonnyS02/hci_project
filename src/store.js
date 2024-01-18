// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    persons: [
      { id: 1, role: 'student', name: 'John', lastName: 'Doe', email: 'john@example.com', semester: 3 },
      { id: 2, role: 'student', name: 'Jane', lastName: 'Smith', email: 'jane@example.com', semester: 4 },
      { id: 3, role: 'professor', name: 'Masha', lastName: 'Smith', email: 'prof@example.com' },
      { id: 4, role: 'professor', name: 'Eron', lastName: 'Jones', email: 'drjones@example.com' },
    ],
  },
  mutations: {
    // Hier können Mutationen für Datenänderungen hinzugefügt werden, falls benötigt.
  },
  actions: {
    async loginUser({ commit, state }, name) {
      // Simulieren einer API-Anfrage oder Datenbankabfrage
      const user = state.persons.find(person => person.name.toLowerCase() === name.toLowerCase());

      if (user) {
        // Hier kannst du weitere Aktionen ausführen, z.B. den Benutzer im Store speichern
        console.log('   successful:', user);
        return true; // Erfolgreicher Login
      } else {
        console.error('Login failed: User not found');
        return false; // Login fehlgeschlagen
      }
    },
  },
  getters: {
    // Hier können Getter für den Zugriff auf den Zustand mit bestimmten Transformationen hinzugefügt werden.
  },
});