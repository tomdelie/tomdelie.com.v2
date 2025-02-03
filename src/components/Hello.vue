<script setup lang="ts">
// import Lettrine from './Lettrine.vue';
// import Pillar from './Pillar.vue';
import LettrineCorner from './LettrineCorner.vue';
</script>

<template>
  <section class="hi relative text-center flex flex-col align-center justify-center">

    <LettrineCorner class="opacity-90 w-[160px] sm:w-[200px] lg:w-[280px] absolute top-2 right-2 sm:top-4 sm:right-4" />
    <LettrineCorner class="opacity-90 scale-x-[-1] w-[160px] sm:w-[200px] lg:w-[280px] absolute top-2 left-2 sm:top-4 sm:left-4" />

    <h1 class="name flex items-end justify-center uppercase mb-1 px-4">
      <div class="heavy-rain text-[64px] sm:text-[98px] md:text-[120px] lg:text-[158px] 2xl:text-[212px] translate-y-[6px] sm:translate-y-[10px] md:translate-y-[12px] lg:translate-y-[16px] 2xl:translate-y-[22px]">T</div>
      <div class="flex flex-col items-start text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
        <div class="heavy-rain-text">OM</div>
        <div class="heavy-rain-text">DELIE</div>
      </div>
    </h1>

    <h3 class="pr-[0.65rem] md:mr-[-0.85rem] lg:mr-[-1.2rem] 2xl:mr-[-2rem] text-sm md:text-md lg:text-lg 2xl:text-xl font-medium uppercase mb-16 px-4 tracking-[0.21em] md:tracking-[0.37em] lg:tracking-[0.41em] 2xl:tracking-[0.615em] flex flex-col justify-center sm:flex-row">
      <span class="md:mr-3.5 lg:mr-4 2xl:mr-6">Développeur</span>
      <span class="md:mr-3.5 lg:mr-4 2xl:mr-6">JavaScript</span>
      <span class="md:mr-3.5 lg:mr-4 2xl:mr-6">FullStack</span>
    </h3>

    <div class="flex flex-col items-center text-sm lg:text-base">
      <a class="flex items-center text-secondary hover:text-tertiary duration-100 mb-2" href="#projects">I. voir mes projets</a>
      <a class="flex items-center text-secondary hover:text-tertiary duration-100 mb-2" href="#skills">II. mes compétences</a>
      <a class="flex items-center text-secondary hover:text-tertiary duration-100" href="#contact">III. me contacter</a>
    </div>

  </section>
</template>

<style scoped>
.hi {
  min-height: 100vh;
}
</style>
