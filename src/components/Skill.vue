<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  isFavorite: { type: Boolean, required: false, default: false },
  level: { type: Number, required: true }
})
</script>

<template>
  <div class="skill relative border-b border-secondary-40 py-1.5 flex items-center justify-between">
    <div class="info flex items-center transition duration-200">
      <img :src="image" :alt="`${title} icon`" width="16">
      <span class="mx-2">{{ title  }}</span>
      <img v-if="isFavorite" src="/icons/others/favorite.svg" alt="Favorite icon" width="16">
    </div>
    <div class="h-3 flex items-center ml-4">
      <div class="w-5 h-full" :class="[level >= 1 ? 'bg-secondary' : 'border border-secondary']"></div>
      <div class="w-5 h-full ml-1" :class="[level >= 2 ? 'bg-secondary' : 'border border-secondary']"></div>
      <div class="w-5 h-full ml-1" :class="[level >= 3 ? 'bg-secondary' : 'border border-secondary']"></div>
    </div>
  </div>
</template>

<style scoped>
.border-secondary {
  border-color: var(--secondary);
}

.border-secondary-40 {
  border-color: rgba(72,43,37, 0.4);
}
</style>
