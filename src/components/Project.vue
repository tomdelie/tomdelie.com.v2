<script setup lang="ts">
import { PropType, ref } from "vue";
import { RouteLocationRaw } from "vue-router";

defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  url: { type: String, required: true },
  tags: { type: Array<String>, required: true },
  image: { type: String, required: true },
  to: { type: Object as PropType<RouteLocationRaw>, required: true }
});

const project = ref<HTMLElement | null>(null);
</script>

<template>
  <RouterLink :to="to" :class="`flex flex-col group follower-trigger project-${id}`" ref="project">
    <div class="overflow-hidden h-full image">
      <div class="h-full shadow-lg">
        <div class="bg-cover bg-top w-full h-full hover:scale-[1.03] duration-1000 shadow-lg" :style="`background-image: url('${image}')`"></div>
      </div>
    </div>

    <div class="mt-2 description">
      <div class="flex justify-between">
        <div class="text-lg flex items-center font-bold">{{ name }}</div>
        <div class="text-sm">{{ date }}</div>
      </div>

      <ul class="flex flex-wrap text-sm tags">
        <li v-for="tag of tags">{{ tag }}</li>
      </ul>
    </div>
      
  </RouterLink>
</template>

<style scoped>
ul.tags > li:not(:last-child)::after {
  content: "—";
  padding-right: .25rem;
  padding-left: .25rem;
}
</style>