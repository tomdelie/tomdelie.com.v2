<script setup lang="ts">
import { useHelper } from '../composables/helper';


const { localePath } = useHelper();
</script>

<template>
  <RouterLink :to="localePath('Home')" class="follower-trigger w-fit nav-logo font-bold tracking-[-0.05em] text-lg">Tom Délié</RouterLink>
</template>

<style scoped>
.nav-logo {
  position: relative;
}

.nav-logo:hover {
  text-decoration: line-through;
}

.nav-logo::after {
  content: '*';
  font-size: 1rem;
  color: var(--tertiary);
  position: absolute;
  top: -0.1rem;
  right: -0.6rem;
  transform-origin: 50% 40%;
  animation: rotate 4s linear infinite;
}
</style>