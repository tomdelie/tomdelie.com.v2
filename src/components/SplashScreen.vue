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

  gsap.timeline()
    .to('.splash-logo', {
      y: -50,
      opacity: 0,
      duration: 0.5,
      delay: 2,
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
      <div class="splash-logo font-bold tracking-[-0.05em] text-xl flex items-start"><span>Tom Délié</span><img class="translate-y-[4px] w-2" src="/icons/star-tertiary.svg" alt="Star"></div>
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