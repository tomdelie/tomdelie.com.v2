<script setup lang="ts">
import Hello from './components/Hello.vue';
import Project from './components/Project.vue';
import Skill from './components/Skill.vue';
import GitHub from './components/GitHub.vue';
import Linkedin from './components/Linkedin.vue';
import Malt from './components/Malt.vue';
import Lettrine from './components/Lettrine.vue';
import LettrineCorner from './components/LettrineCorner.vue';
import Contact from './components/Contact.vue';
import { ref } from 'vue';

const filter = ref();
const resizeObserver = new ResizeObserver(entries => {
  if (filter.value) {
    const bodyHeight = entries[0].target.clientHeight;
    filter.value.style.height = `${bodyHeight}px`;
  }
});

resizeObserver.observe(document.body);
</script>

<template>
  <header class="absolute top-0 left-0 right-0 w-full flex items-center justify-between">
    <Lettrine class="mt-0 ml-0 lg:ml-6 lg:mt-6" />
    <div></div>
  </header>
  <div class="absolute top-3 right-3 lg:top-12 lg:right-12">
    <LettrineCorner />
  </div>
  <div class="container w-full px-2 lg:px-0 lg:w-4/5 mx-auto">
    <Hello class="h-full" />

    <section class="projects mb-48 mt-48 flex flex-col items-center">
      <h2 class="text-3xl lg:text-4xl font-bold mb-16"><b class="text-4xl lg:text-5xl">P</b>rojets</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12">
        <Project
          id="ttg"
          :images="['/projects/ttg_1.png', '/projects/ttg_2.png', '/projects/ttg_3.png', '/projects/ttg_4.png']"
          title="Book a visit - Taittinger"
          link="https://book-a-visit.taittinger.fr/"
          description="Site web de réservation en ligne."
          :tags="['Typescript', 'Nuxt', 'NestJS', 'Stripe']"
        />
        <Project
          id="eatic"
          :images="['/projects/eatic.png']"
          title="Eatic"
          description="Application web et mobile de livraison de repas."
          :tags="['Typescript', 'Vue.js', 'Node.js', 'Stripe', 'Cordova']"
        />
        <Project
          id="alchimie"
          :images="['/projects/baccarat_alchimie_1.png', '/projects/baccarat_alchimie_2.png', '/projects/baccarat_alchimie_3.png']"
          title="Baccarat - Alchimie"
          link="https://baccarat-heritage.com/fr/alchimie/"
          description="Développement d'un thème Wordpress."
          :tags="['Wordpress', 'ACF', 'Polylang', 'CSS']"
        />
        <Project
          id="viking"
          :images="['/projects/viking_1.png', '/projects/viking_2.png', '/projects/viking_3.png']"
          title="Viking - Cités Immersives"
          link="https://viking.cites-immersives.fr/fr"
          description="Développement d'un thème Wordpress."
          :tags="['Wordpress', 'ACF', 'Polylang', 'CSS']"
        />
        <Project
          id="pixel"
          :images="['/projects/pixel_world_1.png', '/projects/pixel_world_2.png', '/projects/pixel_world_3.png']"
          title="Pixel World"
          link="https://tomdelie.itch.io/pixel-world"
          description="Projet personnel, jeu de plateforme en 2D."
          :tags="['Godot Engine', 'GDScript']"
        />
      </div>
    </section>

    <section class="skills mb-48 flex flex-col items-center">
      <h2 class="text-3xl lg:text-4xl font-bold mb-16"><b class="text-4xl lg:text-5xl">C</b>ompétences</h2>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 class="font-semibold text-lg mb-2">JavaScript</h3>
          <Skill :level="3" title="TypeScript" image="/icons/javascript/typescript.svg" :isFavorite="true" />
          <Skill :level="3" title="Vue.js" image="/icons/javascript/vuejs.svg" :isFavorite="true" />
          <Skill :level="3" title="Node.js" image="/icons/javascript/nodejs.svg" :isFavorite="true" />
          <Skill :level="2" title="NestJS" image="/icons/javascript/nestjs.svg" :isFavorite="true" />
          <Skill :level="2" title="Nuxt" image="/icons/javascript/nuxtjs.svg" />
          <Skill :level="2" title="Express" image="/icons/javascript/express.svg" />
          <Skill :level="1" title="Svelte" image="/icons/javascript/svelte.svg" />
          <Skill :level="1" title="React" image="/icons/javascript/react.svg" />
        </div>
        <div>
          <h3 class="font-semibold text-lg mb-2">Automatisation</h3>
          <Skill :level="3" title="Docker" image="/icons/automation/docker.svg" :isFavorite="true" />
          <Skill :level="3" title="Github Actions" image="/icons/automation/githubactions.svg" />
          <Skill :level="1" title="Terraform" image="/icons/automation/terraform.svg" />
          <Skill :level="1" title="Ansible" image="/icons/automation/ansible.svg" />
          <Skill :level="1" title="Gitlab CI" image="/icons/automation/gitlab.svg" />
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-2">PHP</h3>
          <Skill :level="2" title="PHP" image="/icons/php/php.svg" />
          <Skill :level="2" title="Laravel" image="/icons/php/laravel.svg" />
          <Skill :level="1" title="Symfony" image="/icons/php/symfony.svg" />
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-2">Autres</h3>
          <Skill :level="3" title="TailwindCSS" image="/icons/others/tailwindcss.svg" :isFavorite="true" />
          <Skill :level="2" title="Godot Engine" image="/icons/others/godotengine.svg" :isFavorite="true" />
          <Skill :level="2" title="Figma" image="/icons/others/figma.svg" />
        </div>
      </div>
    </section>

    <Contact class="mb-48" />
  </div>

  <footer class="bg-secondary text-primary h-48 flex items-center justify-center">
    <div>
      <p class="mb-3">Développé par <b class="font-semibold">Tom Délié</b></p>
      <div class="flex items-center justify-center">
        <a class="border rounded-lg bg-primary p-1 mr-3" href="https://github.com/tomdelie" target="_blank">
          <GitHub />
        </a>
        <a class="border rounded-lg bg-primary p-1 mr-3" href="https://www.linkedin.com/in/tom-d%C3%A9li%C3%A9-44a298159/" target="_blank">
          <Linkedin />
        </a>
        <a class="border rounded-lg bg-primary p-1" href="https://www.malt.fr/profile/tomdelie" target="_blank">
          <Malt />
        </a>
      </div>
    </div>
  </footer>

  <div ref="filter" class="filter"></div>
</template>

<style scoped>
.filter {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  opacity: 1;
  background-image: url("/exclusive-paper.png");
  user-select: none;
  pointer-events: none;
}
</style>
