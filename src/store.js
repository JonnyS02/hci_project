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
      { id: 0, name: 'Orbitalmechanik', prof: 'Merkur', raum: 'C31', day: "Mo", timeslot: "10:15", description: "Erforschen Sie die Bewegung von Himmelskörpern im Weltraum und lernen Sie, wie Gravitation und Geschwindigkeit sie beeinflussen." },
      { id: 1, name: 'Raumfahrtsystemarchitektur', prof: 'Jupiter', raum: 'B404', day: "Di", timeslot: "10:15", description: "Gestalten Sie komplexe Raumfahrtmissionen und entwerfen Sie Systeme für den sicheren und effizienten Transport im Weltraum." },
      { id: 2, name: 'Raumfahrtmissionen und -planung', prof: 'Neptune', raum: 'K44', day: "Di", timeslot: "14:15", description: "Tauchen Sie ein in die Planung und Umsetzung von Raumfahrtmissionen, von der Konzeption bis zur Realisierung." },
      { id: 3, name: 'Fortgeschrittene Satellitentechnik', prof: 'Venus', raum: 'K19', day: "Mo", timeslot: "16:15", description: "Vertiefen Sie Ihr Verständnis für Satellitentechnologien und lernen Sie fortschrittliche Methoden für innovative Anwendungen kennen." },
      { id: 4, name: 'Astronomie und Kosmologie', prof: 'Venus', raum: 'F3', day: "Do", timeslot: "10:15", description: "Entdecken Sie die Geheimnisse des Universums, erforschen Sie ferne Galaxien und verstehen Sie die grundlegenden Prinzipien der Kosmologie." },
      { id: 5, name: 'Exoplaneten Forschung', prof: 'Merkur', raum: 'F7', day: "Mi", timeslot: "14:15", description: "Untersuchen Sie Planeten außerhalb unseres Sonnensystems und erkunden Sie die Vielfalt dieser faszinierenden Welten." },
      { id: 6, name: 'Theoretische Astrophysik', prof: 'Jupiter', raum: 'C24', day: "Sa", timeslot: "10:15", description: "Vertiefen Sie Ihr Verständnis für die physikalischen Prinzipien des Universums und erforschen Sie theoretische Modelle für astronomische Phänomene." },
      { id: 7, name: 'Raumzeit und Relativität', prof: 'Jupiter', raum: 'C1', day: "Fr", timeslot: "14:15", description: "Tauchen Sie ein in die faszinierende Welt von Raum und Zeit und verstehen Sie die Auswirkungen der allgemeinen Relativitätstheorie." },
      { id: 8, name: 'Gravitationsphysik', prof: 'Neptune', raum: 'F7', day: "Fr", timeslot: "10:15", description: "Erforschen Sie die Kräfte der Schwerkraft und ihre Auswirkungen auf die Struktur und Entwicklung des Universums." },
    ],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addCourse(state, course) {
      state.courses.push(course);
    },
    enrollCourse(state, { userId, courseId }) {
      const user = state.persons.find(person => person.id === userId);

      if (user) {
        // Annahme: Der Benutzer ist bereits angemeldet, daher fügen wir den Kurs einfach hinzu
        user.courses.push(courseId);
      }
    },
  },
  actions: {
    loginUser({ commit }, { name, role, id, lastName, email, courses }) {
      const user = { id, name, role, lastName, email, courses };
      commit('setUser', user);
    },
    addNewCourse({ commit }, course) {
      commit('addCourse', course);
    },
    enrollInCourse({ commit, state }, courseId) {
      const userId = state.user.id; // Hier setzt du die userId auf die aktuelle Benutzer-ID
      commit('enrollCourse', { userId, courseId });
    },
  },
  getters: {
    getUser: (state) => state.user,
    getUserCourses: (state) => (userId) => {
      const user = state.persons.find(person => person.id === userId);

      if (user) {
        return user.courses.map(courseId => {
          const course = state.courses.find(course => course.id === courseId);
          return {
            id: course.id,
            name: course.name,
            prof: course.prof,
            raum: course.raum,
            day: course.day,
            timeslot: course.timeslot,
            description: course.description
          };
        });
      } else {
        return [];
      }
    },
  },
});