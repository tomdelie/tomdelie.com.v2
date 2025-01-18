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
    <Lettrine id="lettrine-anim" class="w-[80px] lg:w-[100px] absolute" />
  </div>
</template>

<style>
#lettrine-anim {
  animation: 2s move ease-in;
  top: 0.75rem;
  left: 0.75rem;
  transform: translate(0%, 0%);
}

@media (min-width: 1024px) {
  #lettrine-anim {
    top: 1.5rem;
    left: 1.5rem;
    animation: 2s move-desktop ease-in;
  }
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
    width: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  10% {
    width: 200px;
  }

  30% {
    width: 80px;
  }

  60% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  80% {
    top: 0.75rem;
    left: 0.75rem;
    transform: translate(0%, 0%);
  }

  100% {
    width: 80px;
  }
}

@keyframes move-desktop {
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
    width: 100px;
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
    width: 100px;
  }
}
</style>