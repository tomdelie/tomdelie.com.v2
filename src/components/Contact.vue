<script setup lang="ts">
</script>

<template>
  <section class="text-center">
    <h2 class="text-3xl lg:text-4xl font-bold mb-16"><b class="text-4xl lg:text-5xl">E</b>nvoyer un message</h2>
    <p class="mt-3 mb-6">
      Vous voulez en savoir plus ? Parler de votre projet ?<br>
      Envoyez-moi un message et discutons-en.
    </p>
    <a href="mailto:tomdelie78+contact@gmail.com" target="_blank"><button class="px-12 py-3 text-primary">Contactez-moi</button></a>
  </section>
</template>

<style scoped>
button {
  box-shadow: 6px 6px 0px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--secondary);
  transition: .1s all linear;
  font-family: 'WorkSans', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
}
button:hover {
  transition: .1s all linear;
  background-color: var(--tertiary);
}
</style>
