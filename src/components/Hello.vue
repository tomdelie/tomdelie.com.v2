<script setup lang="ts">
// import Flower from './Flower.vue';
</script>

<template>
  <section class="hi text-center flex flex-col align-center justify-center">
    <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-secondary uppercase mb-1 px-4 flex flex-col justify-center sm:flex-row">
      <div class="flex justify-center mr-0 sm:mr-8">
        <div class="relative">
          <!-- <Flower class="absolute -left-4 text-secondary -top-7 w-[130px]" /> -->
          <span>T</span>
        </div>
        om
      </div>
      <div>Délié</div>
    </h1>

    <h3 class="text-sm sm:text-base md:text-base lg:text-xl font-bold uppercase mb-16 px-4 tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.36em] lg:tracking-[0.42em] flex flex-col justify-center sm:flex-row">
      <span class="mr-2 lg:mr-3">Développeur JavaScript</span>
      <span>Full Stack</span>
    </h3>

    <div class="flex flex-col sm:flex-row items-center justify-center">
      <a class="flex items-center font-bold text-secondary hover:text-tertiary duration-100 sm:mr-12" href="#projects">I. voir mes projets</a>
      <a class="flex items-center font-bold text-secondary hover:text-tertiary duration-100 sm:mr-12" href="#skills">II. mes compétences</a>
      <a class="flex items-center font-bold text-secondary hover:text-tertiary duration-100" href="#contact">III. me contacter</a>
    </div>

    <img class="transition" src="/icons/transition.svg" width="35" alt="Transition svg">
  </section>
</template>

<style scoped>
.hi {
  min-height: 100vh;
}

.transition {
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  left: 48%;
  user-select: none;
  pointer-events: none;
}
</style>
