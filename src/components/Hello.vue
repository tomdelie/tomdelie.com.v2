<script setup lang="ts">
import GitHub from './../components/GitHub.vue';
import Linkedin from './../components/Linkedin.vue';
import Malt from './../components/Malt.vue';
</script>

<template>
  <section class="hi text-center flex flex-col align-center justify-center">
    <h1 class="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4"><b class="text-5xl lg:text-6xl 2xl:text-7xl">B</b>onjour, je suis <b class="text-tertiary">Tom Délié</b>.</h1>
    <h3 class="text-lg 2xl:text-xl">Développeur JavaScript Full Stack</h3>

    <div class="flex items-center justify-center mt-8">
      <a class="border bg-secondary hover:bg-tertiary duration-100 p-1 mr-3" href="https://github.com/tomdelie" target="_blank">
        <GitHub :inversed="true" />
      </a>
      <a class="border bg-secondary hover:bg-tertiary duration-100 p-1 mr-3" href="https://www.linkedin.com/in/tom-d%C3%A9li%C3%A9-44a298159/" target="_blank">
        <Linkedin :inversed="true" />
      </a>
      <a class="border bg-secondary hover:bg-tertiary duration-100 p-1" href="https://www.malt.fr/profile/tomdelie" target="_blank">
        <Malt :inversed="true" />
      </a>
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
