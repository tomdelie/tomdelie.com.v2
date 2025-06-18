<template>
  <div class="sep"></div>
</template>

<style scoped>
.sep {
  border: 1px solid rgba(var(--secondary-rgb), 0.1);
  background: repeating-linear-gradient(
    -45deg,
    rgba(var(--primary-rgb), 1) 0px,
    rgba(var(--primary-rgb), 1) 10px,
    rgba(var(--secondary-rgb), 0.1) 10px,
    rgba(var(--secondary-rgb), 0.1) 12px
  );
}
</style>