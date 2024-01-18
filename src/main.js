import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChalkboardUser, faGraduationCap, faPowerOff, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faGraduationCap)
library.add(faPowerOff)
library.add(faChalkboardUser)



const app = createApp(App);
app.use(router);
app.use(store); //Vuex-Store für Daten
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
