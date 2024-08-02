<script setup lang="ts">
import OpenInNew from './OpenInNew.vue';
import { onMounted } from 'vue';

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: Array<string>, required: true },
  link: { type: String, required: false },
  tags: { type: Array<string>, required: true },
});

onMounted(() => {
  const params = {
    navigation: {
      nextEl: `.simple-swiper-next-${props.id}`,
      prevEl: `.simple-swiper-prev-${props.id}`,
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

  const swiper = document.querySelector(`.swiper${props.id}`);
  Object.assign((swiper as any), params);
  (swiper as any).initialize();
});
</script>

<template>
  <div class="project flex flex-col">
    <div class="relative">
      <swiper-container :class="`swiper${id}`" :init="false" navigation="true" pagination-dynamic-bullets="true">
        <swiper-slide v-for="image of images"><img class="relative" :src="image" :alt="`Image ${title}`"></swiper-slide>
      </swiper-container>
      <div :class="`absolute select-none top-1/2 left-3 -translate-y-1/2 simple-swiper-prev-${id} z-30 bg-primary bg-opacity-50 rounded-full w-[30px] h-[30px] flex items-center justify-center border-secondary border brightness-150`">
        <img class="-scale-100" src="/icons/arrow-simple.svg" alt="Arrow left">
      </div>
      <div :class="`absolute select-none top-1/2 right-3 -translate-y-1/2 simple-swiper-next-${id} z-30 bg-primary bg-opacity-50 rounded-full w-[30px] h-[30px] flex items-center justify-center border-secondary border brightness-150`">
        <img src="/icons/arrow-simple.svg" alt="Arrow right">
      </div>
    </div>
    <div class="px-4 py-3 bg-secondary relative h-full">
      <a v-if="link" target="_blank" :href="link"><OpenInNew class="absolute top-4 right-4" /></a>
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="mb-4 mt-2">{{ description }}</p>
      <div class="flex flex-wrap">
        <span v-for="tag of tags" :key="tag" class="bg-primary text-sm text-secondary px-1.5 mb-1.5 py-1 font-medium mr-1.5">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-button-disabled {
  opacity: 0.3;
}

.swiper-button-lock {
  display: none;
}

.project {
  border: 2px solid var(--secondary);
  box-shadow: 8px 8px 0px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
  color: var(--primary);
}
</style>
