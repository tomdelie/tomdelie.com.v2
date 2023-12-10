<script setup lang="ts">
import OpenInNew from './OpenInNew.vue';
import { onMounted, ref } from 'vue';

const styles = [`
.swiper-button-prev {
  color: red;
}
`];

const swiperEl = ref();

onMounted(() => {
  const params = {
    injectStyles: [
      `
      .swiper-wrapper {
        background-color: var(--secondary);
      }

      .swiper-button-prev {
        color: var(--primary);
        width: 18px;
        height: 18px;
        padding: 1rem;
        background-color: var(--secondary);
        background-image: url("/exclusive-paper.png");
        box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
        border-radius: 1rem;
        transition: .1s all linear;
      }

      .swiper-button-next {
        color: var(--primary);
        width: 18px;
        height: 18px;
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--secondary);
        background-image: url("/exclusive-paper.png");
        box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
        transition: .1s all linear;
      }

      .swiper-button-prev:hover {
        color: var(--secondary);
        background-color: var(--primary);
        transition: .1s all linear;
      }

      .swiper-button-next:hover {
        color: var(--secondary);
        background-color: var(--primary);
        transition: .1s all linear;
      }

      .swiper-pagination-bullet {
        background-color: var(--secondary);
      }
      `,
    ],
  };

  Object.assign(swiperEl.value, params);

  swiperEl.value.initialize();
});

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: Array<string>, required: true },
  link: { type: String, required: false },
  tags: { type: Array<string>, required: true },
})
</script>

<template>
  <div class="project flex flex-col">
    <div class="z-20 relative">
      <swiper-container ref="swiperEl" :init="false" navigation="true" pagination-dynamic-bullets="true">
        <swiper-slide v-for="image of images"><img class="relative z-20" :src="image" :alt="`Image ${title}`"></swiper-slide>
      </swiper-container>
    </div>
    <div class="px-4 py-3 bg-secondary relative">
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
.project {
  border: 2px solid var(--secondary);
  box-shadow: 8px 8px 0px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
  color: var(--primary);
}
</style>
