<script setup lang="ts">
</script>

<template>
  <nav class="flex flex-col text-xs">
    <div class="flex flex-col items-center">
      <a target="_blank" href="https://malt.fr/profile/tomdelie" class="follower-trigger mb-5 -rotate-90 uppercase hover:line-through">Malt</a>
      <div class="line h-[10px]"></div>
      <a target="_blank" href="https://github.com/tomdelie" class="follower-trigger my-6 -rotate-90 uppercase hover:line-through">GitHub</a>
      <div class="line h-[10px]"></div>
      <a target="_blank" href="https://www.linkedin.com/in/tom-d%C3%A9li%C3%A9-44a298159/" class="follower-trigger my-8 -rotate-90 uppercase hover:line-through">LinkedIn</a>
      <div class="line h-[60px]"></div>
      <span class="mt-7 -rotate-90">©2025</span>
    </div>
  </nav>
</template>

<style scoped>
nav .line {
  flex-shrink: 0;
  width: 1px;
  background-color: var(--secondary);
}

</style>