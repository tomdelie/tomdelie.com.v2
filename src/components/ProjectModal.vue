<script setup lang="ts">
import { onMounted, ref } from 'vue';

defineProps({
  project: { type: Object, required: true },
});

onMounted(() => {
  const params = {
    spaceBetween: 40,
    navigation: {
      nextEl: `.swiper-next-modal`,
      prevEl: `.swiper-prev-modal`,
    },
    injectStyles: [
      `
      .swiper-wrapper {
        background-color: var(--secondary);
      }

      .swiper-button-prev, .swiper-button-next {
        display: none;
      }

      .swiper-pagination-bullet {
        opacity: 1 !important;
        background-color: var(--tertiary);
      }
      `,
    ],
  };

  const swiper = document.querySelector(`.swiper-modal`);
  Object.assign((swiper as any), params);
  (swiper as any).initialize();

  resizeSwiper();
});

// probably doable in css but idk how rn
const swiperModal = ref();
window.addEventListener('resize', () => {
  resizeSwiper();
});

const resizeSwiper = () => {
  if (swiperModal.value) {
    const maxWidth = window.innerWidth - 400; // 400px = 25rem
    const maxHeight = window.innerHeight - 64; // 64px = 4rem

    const aspectRatioHeight = maxWidth / (16/9);
    const targetHeight = (aspectRatioHeight > maxHeight) ? maxHeight : aspectRatioHeight;

    swiperModal.value.style.width = `${targetHeight * (16/9)}px`;
    swiperModal.value.style.height = `${targetHeight}px`;
  }
}
</script>

<template>
<div class="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" @click="$emit('close')">
  <div class="swiper-wrapper w-fit flex items-center justify-center h-full">
    <div @click.prevent.stop :class="`select-none swiper-prev-modal z-30 bg-primary rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center border-secondary border`">
      <img class="-scale-100" src="/icons/arrow-simple.svg" alt="Arrow left">
    </div>
    
    <swiper-container ref="swiperModal" class="swiper-modal mx-6" :init="false" navigation="true" pagination-dynamic-bullets="true">
      <swiper-slide v-for="image of project.images" @click.prevent.stop><img class="object-cover" :src="image" :alt="`Image ${image}`"></swiper-slide>
    </swiper-container>

    <div @click.prevent.stop :class="`select-none swiper-next-modal z-30 bg-primary rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center border-secondary border`">
      <img src="/icons/arrow-simple.svg" alt="Arrow right">
    </div>
  </div>
</div>
</template>

<style scoped>
.swiper-modal {
  max-width: 1920px;
  max-height: 1080px;
}

.swiper-button-disabled {
  opacity: 0.3;
}
</style>
