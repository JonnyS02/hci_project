// person-store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        persons: [
            {
                img: '',
                mail: 'jdoe[at]space-university.edu',
                name: 'John Doe',
                phone: '(0)123 456-7890',
                projects: ['Space Travels'],
                role: 'professor',
                room: 'A 537',
                shortBio: '',
                title: 'Ph.D.',
            },
            {
                mail: 'doe[at]space-university.edu',
                name: 'Jane Doe',
                phone: '(0)123 456-7891',
                projects: ['Space Travel', 'Space Exploration EA-67347'],
                role: 'professor',
                room: 'A 541',
                shortBio: '',
                title: 'Prof.',
            },{
            mail: 'smith[at]space-university.edu',
            name: 'John Smith',
            phone: '(0)123 456-7891',
            projects: [''],
            role: 'professor',
            room: 'A 539',
            shortBio: '',
            title: 'B.Sc.',},
      // Add more persons as needed
    ],
  },
  getters: {
    getAllPersons: (state) => state.persons,
  },
  // You can add mutations, actions, and modules as needed
});
