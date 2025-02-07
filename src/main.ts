import './style.css';
import { createApp } from 'vue';
import { register } from 'swiper/element/bundle';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './Home.vue';

register();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home, alias: ['/fr', '/en'] },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
});

const i18n = createI18n({ locale: 'fr', fallbackLocale: 'en', messages });
createApp(App).use(router).use(i18n).mount('#app');
