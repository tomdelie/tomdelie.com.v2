<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import Lettrine from './Lettrine.vue';

const scrollTop = () => {
  window.scrollTo(0, 0);
};

onMounted(() => {
  window.addEventListener('scroll', scrollTop);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollTop);
});
</script>

<template>
  <div class="bg-primary fixed top-0 left-0 w-full h-full z-10">
    <Lettrine id="lettrine-anim" class="w-[112px] absolute" />
  </div>
</template>

<style>
#lettrine-anim {
  animation: 2s move ease-in;
  top: 1.5rem;
  left: 1.5rem;
  transform: translate(0%, 0%);
}

#lettrine-anim .lettrine-letter {
  animation: 1s show linear;
}

@keyframes show {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes move {
  0% {
    width: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  10% {
    width: 250px;
  }

  30% {
    width: 112px;
  }

  60% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  80% {
    top: 1.5rem;
    left: 1.5rem;
    transform: translate(0%, 0%);
  }

  100% {
    width: 112px;
  }
}
</style>