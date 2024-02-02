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
import { faCaretDown, faChevronCircleDown, faEnvelope, faEnvelopeOpen, faEnvelopeOpenText, faGraduationCap, faInfoCircle, faCheck, faPenSquare, faPowerOff, faUserSecret, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret)
library.add(faGraduationCap)
library.add(faPowerOff)
library.add(faUserTie)
library.add(faGithub)
library.add(faChevronCircleDown)
library.add(faEnvelope)
library.add(faEnvelopeOpen)
library.add(faPenSquare)
library.add(faUserTie)
library.add(faInfoCircle)
library.add(faCheck)

const app = createApp(App);
app.use(router);
app.use(store); //Vuex-Store für Daten
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
