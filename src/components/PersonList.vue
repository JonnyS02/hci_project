<!-- PersonList.vue -->

<template>
    <div>
      <h2>Personenliste</h2>
      <ul>
        <li v-for="person in persons" :key="person.name">
          {{ person.name }} - {{ person.role }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getAllPersons']),
      persons() {
        return this.getAllPersons;
      },
    },
  };
  </script>
  