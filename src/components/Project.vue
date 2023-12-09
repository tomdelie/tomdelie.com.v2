<script setup lang="ts">
import OpenInNew from './OpenInNew.vue';

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: false },
  tags: { type: Array<string>, required: true },
})
</script>

<template>
  <div class="project flex flex-col">
    <div>
      <img :src="image" :alt="`Image ${title}`">
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
  /* background-color: var(--secondary); */
  color: var(--primary);
}
</style>
