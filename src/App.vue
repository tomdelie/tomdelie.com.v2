<script setup lang="ts">
import Hello from './components/Hello.vue';
import Project from './components/Project.vue';
import ProjectEmpty from './components/ProjectEmpty.vue';
import Skill from './components/Skill.vue';
import Contact from './components/Contact.vue';
</script>

<template>
  <div class="container w-full px-2 lg:px-0 lg:w-4/5 mx-auto">
    <Hello class="h-full" />

    <section class="projects mb-48 mt-12 flex flex-col items-center">
      <h2 class="text-xl font-medium mb-12">Projets</h2>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-12">
        <Project
          image="/projects/eatic.png"
          title="Eatic"
          link="https://eatic.fr/"
          description="Développement d'une application web et mobile de livraison de repas végétarien"
          :tags="['Typescript', 'Vue.js', 'Node.js', 'SQL', 'Paiement en ligne']"
        />
        <Project
          image="/projects/pixel_world.png"
          title="Pixel World"
          link="https://tomdelie.itch.io/pixel-world"
          description="Projet personnel. Jeu de plateforme en 2D réalisé avec Godot Engine."
          :tags="['Godot Engine']"
        />
        <ProjectEmpty />
      </div>
    </section>

    <section class="skills mb-48 flex flex-col items-center">
      <h2 class="text-xl font-medium mb-12">Compétences</h2>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 class="font-semibold mb-2">JavaScript</h3>
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
          <h3 class="font-semibold mb-2">Automatisation</h3>
          <Skill :level="3" title="Docker" image="/icons/automation/docker.svg" :isFavorite="true" />
          <Skill :level="3" title="Github Actions" image="/icons/automation/githubactions.svg" />
          <Skill :level="1" title="Terraform" image="/icons/automation/terraform.svg" />
          <Skill :level="1" title="Ansible" image="/icons/automation/ansible.svg" />
          <Skill :level="1" title="Gitlab CI" image="/icons/automation/gitlab.svg" />
        </div>

        <div>
          <h3 class="font-semibold mb-2">PHP</h3>
          <Skill :level="2" title="PHP" image="/icons/php/php.svg" />
          <Skill :level="2" title="Laravel" image="/icons/php/laravel.svg" />
          <Skill :level="1" title="Symfony" image="/icons/php/symfony.svg" />
        </div>

        <div>
          <h3 class="font-semibold mb-2">Autres</h3>
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
      <p class="mb-3">Imaginé et développé par <span class="font-medium">Tom Délié</span></p>
      <div class="flex items-center justify-center">
        <a class="mr-3" href="https://github.com/tomdelie" target="_blank">
          <img src="/icons/others/github.svg" alt="GitHub icon" width="24">
        </a>
        <a href="https://www.linkedin.com/in/tom-d%C3%A9li%C3%A9-44a298159/" target="_blank">
          <img src="/icons/others/linkedin.svg" alt="Linkedin icon" width="24">
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
