<script setup lang="ts">
import OpenInNew from './OpenInNew.vue';
import { onMounted } from 'vue';

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: Array<string>, required: true },
  link: { type: String, required: false },
  tags: { type: Array<{ name: string, icon: string }>, required: true },
  index: { type: Number, required: true },
});

// TODO: en fonction de l'index, appliquer une scale(1, 1) scale(-1, 1) scale(1, -1) scale(-1, -1) sur le cadre et le mask

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
    <h3 class="text-lg font-bold uppercase text-secondary mb-1">{{ title }}</h3>
    <div class="flex-shrink-0 relative" title="Agrandir">
      <div class="mask w-full h-full">
        <swiper-container :class="`swiper${id}`" :init="false" navigation="true" pagination-dynamic-bullets="true">
          <swiper-slide @click="$emit('sliderclick')" class="cursor-pointer follower-trigger" v-for="image of images"><img height="200" class="relative" :src="image" :alt="`Image ${title}`"></swiper-slide>
        </swiper-container>
        <div :class="`absolute select-none top-1/2 left-3 -translate-y-1/2 simple-swiper-prev-${id} z-30 bg-primary bg-opacity-50 rounded-full w-[30px] h-[30px] flex items-center justify-center border-secondary border brightness-150`">
          <img class="-scale-100" src="/icons/arrow-simple.svg" alt="Arrow left">
        </div>
        <div :class="`absolute select-none top-1/2 right-3 -translate-y-1/2 simple-swiper-next-${id} z-30 bg-primary bg-opacity-50 rounded-full w-[30px] h-[30px] flex items-center justify-center border-secondary border brightness-150`">
          <img class="-scale-1" src="/icons/arrow-simple.svg" alt="Arrow right">
        </div>
      </div>
      <img class="pointer-events-none absolute w-full h-full top-0 left-0 transform" src="/line_frame.png" alt="">
    </div>

    <div class="mt-1 text-secondary relative h-full">
      <a v-if="link" target="_blank" :href="link"><OpenInNew class="w-[18px] h-[19px] hover:text-tertiary duration-200 absolute top-0 right-0" /></a>
      
      <p class="text-sm">{{ description }}</p>

      <div class="flex flex-wrap">
        <div v-for="t of tags" :key="t.name" class="flex items-center bg-primary text-sm text-secondary mb-1.5 py-0.5 mr-3">
          <img class="w-[12px] h-[12px] mr-1 translate-y-[1px]" :src="t.icon" alt="Icon">
          <span>{{ t.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-button-disabled {
  opacity: 0.2;
}

.swiper-button-lock {
  display: none;
}

.project .mask {
  mask-image: url('/frame_mask.png');
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  background-color: var(--secondary);
}
</style>
