import './styles/global.scss';
import { router } from './plugins/router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

createApp(App).use(createPinia()).use(router).mount('#app');
