<script setup lang="ts">
</script>

<template>
  <section class="hi text-center flex flex-col align-center justify-center">
    <h1 class="text-4xl font-bold mb-6"><b class="text-5xl">B</b>onjour, je suis <b class="text-tertiary">Tom Délié</b>.</h1>
    <h3 class="text-lg">Développeur JavaScript Full Stack</h3>
    <img class="transition" src="/icons/transition.svg" width="50" alt="Transition svg">
  </section>
</template>

<style scoped>
.hi {
  min-height: 100vh;
}

.transition {
  position: absolute;
  bottom: -10%;
  left: 48%;
  user-select: none;
  pointer-events: none;
}
</style>
