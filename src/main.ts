import { createApp } from 'vue';
import './style.css';
import './assets/scrollreveal.js';
import App from './App.vue'
import { register } from 'swiper/element/bundle';

register();

createApp(App).mount('#app');
