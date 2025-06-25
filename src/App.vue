<script setup lang="ts">
import NavLeft from './components/NavLeft.vue';
import Grid from './components/Grid.vue';
import Logo from './components/Logo.vue';
import { useHelper } from './composables/helper';
import { useI18n } from 'vue-i18n';
import SplashScreen from './components/SplashScreen.vue';
import { onMounted, ref } from 'vue';

const { locale } = useI18n();
const { switchLocalePath } = useHelper();
const isSplashScreenVisible = ref(true);

onMounted(() => {

});
</script>

<template>
  <div class="h-full">
    <SplashScreen v-model:value="isSplashScreenVisible" />
    <NavLeft class="w-16 hidden lg:flex fixed bottom-0 z-50 left-0 pt-16 pb-9" />

    <div class="fixed top-0 left-0 w-full h-12 border-b border-secondary border-opacity-10 z-[100] bg-primary">
      <div class="wrapper flex items-center justify-between h-full">
        <div class="flex items-center">
          <Logo />
          
          <RouterLink class="follower-trigger hover:line-through ml-6 text-sm" :to="switchLocalePath()">{{ locale.toUpperCase() }}</RouterLink>
        </div>

        <div class="flex items-center">
          <!-- <div class="follower-trigger hover:line-through text-sm cursor-pointer">Contact</div> -->
        </div>
      </div>
    </div>
    
    <div class="cursor-follower hidden lg:block"></div>
    <div class="dot-follower hidden lg:block"></div>

    <div id="smooth-wrapper">
      <div id="smooth-content" class="overflow-x-hidden bg-primary">
        
        <div class="relative wrapper bg-primary">
          <Grid class="absolute top-0 left-0 w-full h-full z-0" />

          <template v-if="!isSplashScreenVisible">
            <RouterView />
          </template>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.cursor-follower {
  position: fixed;
  border: 1px solid var(--secondary);
  z-index: 999;
  width: 26px;
  height: 26px;
  pointer-events: none;
  user-select: none;
}

.dot-follower {
  position: fixed;
  background-color: rgba(72, 43, 37, 0.5);
  z-index: 999;
  width: 10px;
  height: 10px;
  pointer-events: none;
  user-select: none;
  backdrop-filter: invert(1) grayscale(1);
}
</style>
