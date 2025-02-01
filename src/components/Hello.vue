<script setup lang="ts">
import { onMounted } from 'vue';
import Lettrine from './Lettrine.vue';
import LettrineCorner from './LettrineCorner.vue';
</script>

<template>
  <section class="hi relative text-center flex flex-col align-center justify-center">
    <LettrineCorner class="w-[160px] sm:w-[200px] lg:w-[280px] absolute top-2 right-2 sm:top-4 sm:right-4" />

    <h1 class="name text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold text-secondary flex items-center sm:items-baseline uppercase mb-1 px-4 flex-col justify-center sm:flex-row">
      <div class="relative flex justify-center items-baseline mr-0 sm:mr-8">
        <Lettrine class="absolute w-[51px] md:w-[62px] lg:w-[83px] 2xl:w-[110px] left-[-5px] top-[-9px] md:left-[-7px] md:top-[-10px] lg:left-[-9px] lg:top-[-13px] 2xl:left-[-12px] 2xl:top-[-17px]" />
        <span class="ml-[2.5rem] md:ml-[3rem] lg:ml-[4rem] 2xl:ml-[5.5rem]">om</span>
      </div>
      <div>Délié</div>
    </h1>

    <h3 class="text-sm md:text-md lg:text-lg 2xl:text-xl font-medium uppercase mb-16 px-4 tracking-[0.15em] md:tracking-[0.30em] lg:tracking-[0.31em] 2xl:tracking-[0.51em] flex flex-col justify-center sm:flex-row">
      <span class="mr-2 lg:mr-3">Développeur JavaScript</span>
      <span>Full Stack</span>
    </h3>

    <div class="flex flex-col items-center text-sm lg:text-base">
      <a class="flex items-center text-secondary hover:text-tertiary duration-100 mb-2" href="#projects">I. voir mes projets</a>
      <a class="flex items-center text-secondary hover:text-tertiary duration-100 mb-2" href="#skills">II. mes compétences</a>
      <a class="flex items-center text-secondary hover:text-tertiary duration-100" href="#contact">III. me contacter</a>
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
  transform: translate(-50%, 50%);
  left: 50%;
  user-select: none;
  pointer-events: none;
}
</style>
