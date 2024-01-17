// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    persons: [
      { id: 1, role: 'student', name: 'John', lastName: 'Doe', email: 'john@example.com', semester: 3 },
      { id: 2, role: 'student', name: 'Jane', lastName: 'Smith', email: 'jane@example.com', semester: 4 },
      { id: 3, role: 'professor', name: 'Prof', lastName: 'Smith', email: 'prof@example.com' },
      { id: 4, role: 'professor', name: 'Dr.', lastName: 'Jones', email: 'drjones@example.com' },
    ],
  },
  mutations: {
    // Hier können Mutationen für Datenänderungen hinzugefügt werden, falls benötigt.
  },
  actions: {
    // Hier können Actions für asynchrone Operationen hinzugefügt werden, falls benötigt.
  },
  getters: {
    // Hier können Getter für den Zugriff auf den Zustand mit bestimmten Transformationen hinzugefügt werden.
  },
});
