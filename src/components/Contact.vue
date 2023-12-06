<script setup lang="ts">
</script>

<template>
  <section class="text-center">
    <h2 class="text-2xl font-medium mb-6">Envoyer un message</h2>
    <p class="mt-3 mb-12">
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
}
button:hover {
  transition: .1s all linear;
  background-color: var(--tertiary);
}
</style>
