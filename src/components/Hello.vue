<script setup lang="ts">
import LettrineCorner from './LettrineCorner.vue';
</script>

<template>
  <section class="hi relative text-center flex flex-col align-center justify-center">

    <div class="flowers">
      <LettrineCorner class="scale-x-[-1] w-[160px] sm:w-[200px] lg:w-[280px] absolute top-2 left-2 sm:top-4 sm:left-4" />
    </div>

    <div class="flex justify-center">
      <h1 class="relative flex items-end justify-center uppercase mb-1 mx-4">
        <div class="name-initial absolute heavy-rain text-[64px] sm:text-[98px] md:text-[120px] lg:text-[158px] 2xl:text-[212px]">T</div>
        <div class="pointer-events-none select-none opacity-0 heavy-rain text-[64px] sm:text-[98px] md:text-[120px] lg:text-[158px] 2xl:text-[212px]">T</div>
        <div class="flex flex-col items-start text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
          <div class="heavy-rain-text firstname">OM</div>
          <div class="heavy-rain-text lastname">DELIE</div>
        </div>
      </h1>
    </div>

    <h3 class="job ml-0 sm:ml-2.5 text-sm md:text-md lg:text-lg 2xl:text-xl font-medium uppercase mb-16 px-4 tracking-[0.2em] md:tracking-[0.37em] lg:tracking-[0.41em] 2xl:tracking-[0.61em] flex flex-col justify-center sm:flex-row">
      <span class="pr-0 sm:pr-3.5 lg:pr-4 2xl:pr-6">{{ $t('hello.job.1') }}</span>
      <span class="pr-0 sm:pr-3.5 lg:pr-4 2xl:pr-6">{{ $t('hello.job.2') }}</span>
      <span>{{ $t('hello.job.3') }}</span>
    </h3>

    <ul class="flex flex-col items-center text-sm lg:text-base">
      <li class="chapter1"><a class="flex items-center text-secondary hover:text-tertiary duration-100 mb-2" href="#projects">I. {{ $t('hello.chapter.1') }}</a></li>
      <li class="chapter2"><a class="flex items-center text-secondary hover:text-tertiary duration-100 mb-2" href="#skills">II. {{ $t('hello.chapter.2') }}</a></li>
      <li class="chapter3"><a class="flex items-center text-secondary hover:text-tertiary duration-100" href="#contact">III. {{ $t('hello.chapter.3') }}</a></li>
    </ul>

  </section>
</template>

<style>
:root {
  --y-pos: 8px;
}

.hi {
  min-height: 100vh;
}

.name-initial {
  animation: move 1.5s cubic-bezier(0.62, 0.34, 0.19, 0.99) forwards;
  transform: translate(-50%, var(--y-pos));
  left: 50%;
  opacity: 1;
}

@media (min-width: 640px) { /* sm */
  :root {
    --y-pos: 10px;
  }
}

@media (min-width: 768px) { /* md */
  :root {
    --y-pos: 12px;
  }
}

@media (min-width: 1024px) { /* lg */
  :root {
    --y-pos: 16px;
  }
}

@media (min-width: 1536px) { /* 2xl */
  :root {
    --y-pos: 22px;
  }

}

@keyframes move {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 0;
  }

  55% {
    opacity: 1;
  }

  60% {
    left: 50%;
    transform: translate(-50%, var(--y-pos));
  }

  100% {
    transform: translate(0%, var(--y-pos));
    left: 0%;
  }
}
</style>
