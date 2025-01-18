<script setup lang="ts">
import Loader from './components/Loader.vue';
import Hello from './components/Hello.vue';
import Project from './components/Project.vue';
import ProjectModal from './components/ProjectModal.vue';
import Skill from './components/Skill.vue';
import GitHub from './components/GitHub.vue';
import Linkedin from './components/Linkedin.vue';
import Malt from './components/Malt.vue';
import Lettrine from './components/Lettrine.vue';
import LettrineCorner from './components/LettrineCorner.vue';
import Contact from './components/Contact.vue';
import { ref, onMounted } from 'vue';

enum ProjectType {
  PRO = 1,
  PERSO = 2
}

const loaded = ref(false);
const filter = ref();
const cursorFollower = ref();
const projects = ref([
  {
    id: 'ttg',
    type: ProjectType.PRO,
    title: 'Book a visit - Taittinger',
    description: 'Site web de réservation en ligne.',
    link: 'https://book-a-visit.taittinger.fr/',
    images: ['/projects/ttg_1.png', '/projects/ttg_2.png', '/projects/ttg_3.png', '/projects/ttg_4.png'],
    tags: [
      { name: 'TypeScript', icon: '/icons/javascript/typescript.svg' },
      { name: 'Nuxt', icon: '/icons/javascript/nuxtjs.svg' },
      { name: 'NestJS', icon: '/icons/javascript/nestjs.svg' },
      { name: 'Stripe', icon: '/icons/others/stripe.svg' }
    ],
  },
  {
    id: 'eatic',
    type: ProjectType.PRO,
    title: 'Eatic',
    description: 'Application web et mobile de livraison de repas.',
    link: '',
    images: ['/projects/eatic.png'],
    tags: [
      { name: 'TypeScript', icon: '/icons/javascript/typescript.svg' },
      { name: 'Vue.js', icon: '/icons/javascript/vuejs.svg' },
      { name: 'Node.js', icon: '/icons/javascript/nodejs.svg' },
      { name: 'Stripe', icon: '/icons/others/stripe.svg' }
    ],
  },
  {
    id: 'alchimie',
    type: ProjectType.PRO,
    title: 'Baccarat - Alchimie',
    description: 'Développement d\'un thème Wordpress.',
    link: 'https://baccarat-heritage.com/fr/alchimie/',
    images: ['/projects/baccarat_alchimie_1.png', '/projects/baccarat_alchimie_2.png', '/projects/baccarat_alchimie_3.png'],
    tags: [
      { name: 'Wordpress', icon: '/icons/php/wordpress.svg' },
      { name: 'ACF', icon: '/icons/php/wordpress.svg' },
      { name: 'Polylang', icon: '/icons/php/wordpress.svg' },
      { name: 'CSS', icon: '/icons/others/css.svg' }
    ],
  },
  {
    id: 'viking',
    type: ProjectType.PRO,
    title: 'Viking - Cités Immersives',
    description: 'Développement d\'un thème Wordpress.',
    link: 'https://viking.cites-immersives.fr/fr',
    images: ['/projects/viking_1.png', '/projects/viking_2.png', '/projects/viking_3.png'],
    tags: [
      { name: 'Wordpress', icon: '/icons/php/wordpress.svg' },
      { name: 'ACF', icon: '/icons/php/wordpress.svg' },
      { name: 'Polylang', icon: '/icons/php/wordpress.svg' },
      { name: 'CSS', icon: '/icons/others/css.svg' }
    ],
  },
  {
    id: 'pixel',
    type: ProjectType.PERSO,
    title: 'Pixel World',
    description: 'Développement d\'un jeu de plateforme en 2D.',
    link: 'https://tomdelie.itch.io/pixel-world',
    images: ['/projects/pixel_world_1.png', '/projects/pixel_world_2.png', '/projects/pixel_world_3.png'],
    tags: [
      { name: 'Godot 3.2', icon: '/icons/others/godotengine.svg' },
      { name: 'GDScript', icon: '/icons/others/godotengine.svg' }
    ],
  },
  // {
  //   id: 'bomberman',
  //   type: ProjectType.PERSO,
  //   title: 'Bomberman en ligne',
  //   description: 'Développment d\'un bomberman multijoueur.',
  //   link: 'https://tomdelie.itch.io/pixel-world',
  //   images: ['/projects/placeholder.png'],
  //   tags: [
  //     { name: 'Godot 4.3', icon: '/icons/others/godotengine.svg' },
  //     { name: 'GDScript', icon: '/icons/others/godotengine.svg' }
  //   ],
  // },
  {
    id: 'shaders',
    type: ProjectType.PERSO,
    title: 'Shaders',
    description: 'Un peu d\'imagination et de maths avec les shaders.',
    link: 'https://www.shadertoy.com/user/tomdelie',
    images: ['/projects/snowflake.png'],
    tags: [
      { name: 'GLSL', icon: '/icons/others/opengl.svg' }
    ],
  },
]);
const projectSelected = ref();

const resizeObserver = new ResizeObserver(entries => {
  if (filter.value) {
    const bodyHeight = entries[0].target.clientHeight;
    filter.value.style.height = `${bodyHeight}px`;
  }
});

resizeObserver.observe(document.body);

const selectedType = ref(0);

const onProjectClick = (id: string) => {
  if (window.innerWidth <= 1024) return;
  
  const projectFound = projects.value.find(p => p.id === id);
  if (!projectFound) return;

  document.querySelector('body')?.classList.add('overflow-hidden');
  projectSelected.value = projectFound;
}

const onProjectClose = () => {
  projectSelected.value = null;
  document.querySelector('body')?.classList.remove('overflow-hidden');
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1024) {
    if (projectSelected.value) projectSelected.value = null;
  }
});

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 2000);

  animateFollower();

  document.querySelectorAll('.follower-trigger').forEach((trigger) => {
    trigger.addEventListener('mouseenter', () => {
      if (window.innerWidth < 1024) return;
      cursorFollower.value.classList.remove('scale-0');
      cursorFollower.value.classList.add('scale-100');
    });

    trigger.addEventListener('mouseleave', () => {
      if (window.innerWidth < 1024) return;
      cursorFollower.value.classList.remove('scale-100');
      cursorFollower.value.classList.add('scale-0');
    });
  });
});

// CURSOR FOLLOWER
const mouse = {
  x: 0,
  y: 0,
};
document.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX + 10;
  mouse.y = event.clientY + 10;
});

function animateFollower() {
  const deltaX = (mouse.x - cursorFollower.value.offsetLeft) * 0.1;
  const deltaY = (mouse.y - cursorFollower.value.offsetTop) * 0.1;

  cursorFollower.value.style.left = `${cursorFollower.value.offsetLeft + deltaX}px`;
  cursorFollower.value.style.top = `${cursorFollower.value.offsetTop + deltaY}px`;

  requestAnimationFrame(animateFollower);
}
</script>

<template>
  <Transition>
    <Loader v-if="!loaded" transition="fade" />
  </Transition>

  <div ref="cursorFollower" class="pointer-events-none select-none fixed w-[80px] h-[80px] z-[1000] rounded-full overflow-hidden shadow transition-transform scale-0 duration-300">
    <div class="border uppercase border-secondary rounded-full w-full h-full bg-blur bg-blur-full flex items-center justify-center text-secondary font-medium text-sm tracking-[0.15em]">
      Voir
    </div>
  </div>

  <header class="absolute top-0 left-0 right-0 w-full flex items-center justify-between">
    <Lettrine class="w-[80px] lg:w-[100px] mt-3 ml-3 lg:ml-6 lg:mt-6" />
    <div></div>
  </header>

  <ProjectModal class="project-modal" @close="onProjectClose" v-if="projectSelected" :project="projectSelected" />

  <div class="absolute top-3 right-3 lg:top-12 lg:right-12">
    <LettrineCorner />
  </div>

  <div class="container w-full px-2 lg:px-0 lg:w-4/5 mx-auto">
    <Hello class="h-full" />

    <section class="projects mb-48 mt-48 flex flex-col items-center">
      <h2 class="text-3xl lg:text-4xl font-bold mb-8"><b class="text-4xl lg:text-5xl">P</b>rojets</h2>

      <ul class="flex mb-8 select-none text-sm font-medium">
        <li class="px-3 py-1.5 border-secondary border cursor-pointer" :class="[selectedType === 0 ? 'bg-secondary text-primary' : 'bg-primary text-secondary hover:bg-tertiary hover:text-primary hover:border-tertiary duration-200']" @click="selectedType = 0">
          <span class="font-medium">Tous</span>
        </li>
        <li class="mx-3 px-3 py-1.5 border-secondary border cursor-pointer" :class="[selectedType === 1 ? 'bg-secondary text-primary' : 'bg-primary text-secondary hover:bg-tertiary hover:text-primary hover:border-tertiary duration-200']" @click="selectedType = 1">
          <span class="font-medium">Professionnel</span>
        </li>
        <li class="px-3 py-1.5 border-secondary border cursor-pointer" :class="[selectedType === 2 ? 'bg-secondary text-primary' : 'bg-primary text-secondary hover:bg-tertiary hover:text-primary hover:border-tertiary duration-200']" @click="selectedType = 2">
          <span class="font-medium">Personnel</span>
        </li>
      </ul>

      <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12">
        <Project 
          v-for="p in projects" :key="p.id"
          @sliderclick="onProjectClick(p.id)"
          v-show="selectedType === p.type || selectedType === 0"
          :id="p.id" :images="p.images" :title="p.title" :link="p.link" :description="p.description" :tags="p.tags"
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
          <Skill :level="2" title="NestJS" image="/icons/javascript/nestjs.svg" />
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
          <Skill :level="2" title="Wordpress" image="/icons/php/wordpress.svg" />
          <Skill :level="1" title="Symfony" image="/icons/php/symfony.svg" />
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-2">Autres</h3>
          <Skill :level="3" title="TailwindCSS" image="/icons/others/tailwindcss.svg" :isFavorite="true" />
          <Skill :level="2" title="Godot Engine" image="/icons/others/godotengine.svg" :isFavorite="true" />
          <Skill :level="2" title="Figma" image="/icons/others/figma.svg" />
          <Skill :level="1" title="GLSL" image="/icons/others/opengl.svg" />
        </div>
      </div>
    </section>

    <Contact class="mb-48" />
  </div>

  <footer class="bg-secondary text-primary h-48 flex items-center justify-center">
    <div>
      <p class="mb-3 text-center text-sm">Développé par Tom Délié</p>
      <div class="flex items-center justify-center">
        <a class="group flex items-center mr-6" href="https://github.com/tomdelie" target="_blank">
          <GitHub class="text-primary group-hover:text-tertiary duration-100 w-[16px]" />
          <span class="ml-1 text-primary group-hover:text-tertiary duration-100 text-sm font-medium translate-y-[1px]">GitHub</span>
        </a>
        <a class="group flex items-center mr-6" href="https://www.linkedin.com/in/tom-d%C3%A9li%C3%A9-44a298159/" target="_blank">
          <Linkedin class="text-primary group-hover:text-tertiary duration-100 w-[16px]" />
          <span class="ml-1 text-primary group-hover:text-tertiary duration-100 text-sm font-medium translate-y-[1px]">LinkedIn</span>
        </a>
        <a class="group flex items-center" href="https://www.malt.fr/profile/tomdelie" target="_blank">
          <Malt class="text-primary group-hover:text-tertiary duration-100 w-[16px]" />
          <span class="ml-1 text-primary group-hover:text-tertiary duration-100 text-sm font-medium translate-y-[1px]">Malt</span>
        </a>
      </div>
    </div>
  </footer>

  <div ref="filter" class="filter"></div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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

.project-modal {
  display: none;
}

@media (min-width: 1024px) {
  .project-modal {
    display: flex;
  }
}
</style>
