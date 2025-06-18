<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { gsap, Back, Bounce } from 'gsap';

const { locale } = useI18n();

onMounted(() => {
  const followerTrigger = document.querySelectorAll('.follower-trigger');
  followerTrigger.forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => {
      gsap.to(".cursor-follower", { scale: 0, duration: 0 });
      gsap.to(".dot-follower", { scale: 4.0, ease: Back.easeOut });
    });
    trigger.addEventListener("mouseleave", () => {
      gsap.to(".cursor-follower", { scale: 1.0, duration: 0 });
      gsap.to(".dot-follower", { scale: 1.0, ease: Bounce.easeOut });
    });
  });
});
</script>

<template>
  <div class="h-[100vh] flex flex-col items-center justify-center text-center">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl uppercase">{{ $t('404.title') }}</h1>
    <h2 class="leading-[1em] text-[80px] sm:text-[90px] lg:text-[110px] xl:text-[140px] font-bold text-secondary mb-16">{{ $t('404.subtitle') }}</h2>
    <RouterLink class="follower-trigger hover:line-through" :to="locale === 'fr' ? '/fr' : '/en'">{{ $t('404.button') }}</RouterLink>
  </div>
</template>