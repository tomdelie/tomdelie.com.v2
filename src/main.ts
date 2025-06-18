import './style.css';
import { createApp } from 'vue';
import { register } from 'swiper/element/bundle';
import { createRouter, createWebHistory } from 'vue-router';
import { gsap, Bounce } from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollTrigger from 'gsap/ScrollTrigger';
import i18n, { SUPPORTED_LOCALES } from './i18n';

import App from './App.vue';
import Home from './pages/Home.vue';
import Project from './pages/Project.vue';
import NotFound from './pages/NotFound.vue';

const app = createApp(App);

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/fr'
    },
    {
      path: '/:locale(fr|en)',
      children: [
        { path: '', name: 'Home', component: Home },
        { path: 'projects/:slug(taittinger|cite-immersive-viking|eatic|photocinelive|pixel-world)', name: 'Projects', component: Project },
        { path: ':pathMatch(.*)*', name: 'NotFoundLocale', component: NotFound },
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
});

app.use(router);
app.use(i18n);
app.mount('#app');

register();
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

router.beforeEach((to, from, next) => {
  const locale = to.params.locale as string;

  if (smoother) {
    smoother.kill();
    smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
  }

  gsap.to(".cursor-follower", { scale: 1.0, duration: 0 });
  gsap.to(".dot-follower", { scale: 1.0, ease: Bounce.easeOut });

  if (SUPPORTED_LOCALES.includes(locale) && i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale as 'fr' | 'en';
  }

  next();
});

gsap.set(".cursor-follower", {scale: 1.0, xPercent: -50, yPercent: -50});
gsap.set(".dot-follower", {scale: 1.0, xPercent: -50, yPercent: -44});

let xTo = gsap.quickTo(".cursor-follower", "x", {duration: 0.5, ease: "back"});
let yTo = gsap.quickTo(".cursor-follower", "y", {duration: 0.5, ease: "back"});

let dotX = gsap.quickTo(".dot-follower", "x", {duration: 0.2, ease: "back"});
let dotY = gsap.quickTo(".dot-follower", "y", {duration: 0.2, ease: "back"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
  dotX(e.clientX);
  dotY(e.clientY);
});