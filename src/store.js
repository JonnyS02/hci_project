// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: { id: 0, role: 'Student', name: 'Anna', lastName: 'Mars', email: 'anna@example.com', semester: 3, courses: [1, 3, 7, 0] },
    persons: [
      { id: 0, role: 'Student', name: 'Anna', lastName: 'Mars', email: 'anna@example.com', semester: 3, courses: [1, 3, 7, 0] },
      { id: 1, role: 'Student', name: 'David', lastName: 'Saturn', email: 'dave@example.com', semester: 4, courses: [2, 3, 7] },
      { id: 2, role: 'Student', name: 'Peter', lastName: 'Pluto', email: 'pluto@example.com', semester: 1, courses: [7, 0] },
      { id: 3, role: 'Student', name: 'Erika', lastName: 'Erde', email: 'dave@example.com', semester: 7, courses: [6, 8, 5, 7] },
      { id: 4, role: 'Professor', name: 'Masha', lastName: 'Merkur', email: 'prof@example.com', courses: [0, 5] },
      { id: 5, role: 'Professor', name: 'Jens', lastName: 'Jupiter', email: 'drjupiter@example.com', courses: [1, 6, 7] },
      { id: 6, role: 'Professor', name: 'Nils', lastName: 'Neptune', email: 'drneptune@example.com', courses: [2, 8] },
      { id: 7, role: 'Professor', name: 'Valeria', lastName: 'Venus', email: 'drvenus@example.com', courses: [3, 4] },
    ],
    courses: [
      { id: 0, name: 'Orbitalmechanik', prof: 'Merkur', raum: ''  },
      { id: 1, name: 'Raumfahrtsystemarchitektur', prof: 'Jupiter', raum: ''  },
      { id: 2, name: 'Raumfahrtmissionen und -planung', prof: 'Neptune', raum: ''  },
      { id: 3, name: 'Fortgeschrittene Satellitentechnik', prof: 'Venus', raum: ''  },
      { id: 4, name: 'Astronomie und Kosmologie', prof: 'Venus', raum: ''  },
      { id: 5, name: 'Exoplaneten Forschung', prof: 'Merkur', raum: ''  },
      { id: 6, name: 'Theoretische Astrophysik', prof: 'Jupiter', raum: ''  },
      { id: 7, name: 'Raumzeit und Relativität', prof: 'Jupiter', raum: ''  },
      { id: 8, name: 'Gravitationsphysik', prof: 'Neptune', raum: '' },
    ],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addCourse(state, course) {
      state.courses.push(course);
    },
  },
  actions: {
    loginUser({ commit }, { name, role, id, lastName, email, courses }) {
      user = { id, name, role, lastName, email, courses };
      commit('setUser', user);
    },
    addNewCourse({ commit }, course) {
      commit('addCourse', course);
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
});