import './style.css';
import App from './App.vue';
import { createApp } from 'vue';
import { register } from 'swiper/element/bundle';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';

register();

const i18n = createI18n({ locale: 'en', fallbackLocale: 'en', messages });
createApp(App).use(i18n).mount('#app');
