<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import Grid from './Grid.vue';

defineProps({
  value: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:value']);

onMounted(() => {
  gsap.timeline()
    .from('.splash-logo', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
    .from('.splash-logo img', {
      y: -10,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
    .fromTo(
      '.splash-grid',
      { height: 0, top: 0 },
      {
        height: '100%',
        duration: 1,
        delay: -0.2,
        ease: 'power2.out'
      }
    );

  gsap.to('.spin', {
    rotation: 360,
    duration: 2,
    ease: 'linear',
    repeat: -1,
    transformOrigin: 'center center',
  });

  gsap.timeline({ repeat: -1, repeatDelay: 0.5, delay: 1 })
    .to('.splash-logo .letter', {
      y: -24,
      duration: 0.5,
      ease: 'power1.out',
      stagger: {
        each: 0.05,
        yoyo: true,
        repeat: 1,
        repeatDelay: 0,
      },
    });
  
  gsap.timeline()
    .to('.splash-logo', {
      y: -50,
      opacity: 0,
      duration: 0.5,
      delay: 3,
      ease: 'power2.in',
      onComplete: () => {
        emit('update:value', false);
      }
    })
    .to('.splash-screen', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.querySelector('.splash-screen')?.classList.add('hidden');
      }
    });

});
</script>

<template>
  <div class="splash-screen">
    <div class="relative wrapper flex items-center justify-center h-full">
      <Grid class="splash-grid absolute top-0 left-0 w-full h-full" />
      <div class="splash-logo font-bold tracking-[-0.05em] text-2xl flex items-start">
        <div class="flex">
          <span class="letter">T</span>
          <span class="letter">o</span>
          <span class="letter">m</span>
          <span>&nbsp;</span>
          <span class="letter">D</span>
          <span class="letter">é</span>
          <span class="letter">l</span>
          <span class="letter">i</span>
          <span class="letter">é</span>
        </div>
        <img class="spin letter translate-y-[4px] w-2" src="/icons/star-tertiary.svg" alt="Star">
      </div>

    </div>
  </div>
</template>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  z-index: 200;
}
</style>