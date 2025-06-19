<script setup lang="ts">
import ScrollTrigger from 'gsap/ScrollTrigger';
import { computed, onBeforeUnmount, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import gsap, { Bounce, Back } from 'gsap';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

type ProjectName = 'taittinger' | 'cite-immersive-viking' | 'eatic' | 'photocinelive' | 'pixel-world';
type Project = {
  name: string;
  description: string;
  url: string;
  date: string;
  tags: string[];
  images: string[];
  landscape: boolean;
};

const projects = reactive<{ [key in ProjectName]: Project }>({
  'taittinger': {
    name: 'Taittinger',
    description: t('projects.taittinger'),
    url: 'https://book-a-visit.taittinger.fr',
    date: '2024 — 2025',
    tags: ['Vue.js', 'Nuxt', 'NestJS'],
    images: ['/projects/ttg_1.png', '/projects/ttg_2.png', '/projects/ttg_3.png'],
    landscape: true
  },
  'cite-immersive-viking': {
    name: 'Cité Immersive Viking',
    description: t('projects.cite-immersive-viking'),
    url: 'https://viking.cites-immersives.fr',
    date: '2024',
    tags: ['Wordpress', 'ACF', 'Polylang'],
    images: ['/projects/viking_1.png', '/projects/viking_2.png', '/projects/viking_3.png'],
    landscape: true
  },
  'eatic': {
    name: 'Eatic',
    description: t('projects.eatic'),
    url: 'https://www.instagram.com/eatic_eat_ethic',
    date: '2021 — 2023',
    tags: ['TypeScript', 'Vue.js', 'Node.js'],
    images: ['/projects/eatic_1.png', '/projects/eatic_2.png', '/projects/eatic_3.png', '/projects/eatic_4.png'],
    landscape: false
  },
  'photocinelive': {
    name: 'PhotoCineLive',
    description: t('projects.photocinelive'),
    url: 'https://www.photocinelive.com',
    date: '2025',
    tags: ['Wordpress', 'ACF', 'Polylang'],
    images: ['/projects/pcl_1.png', '/projects/pcl_2.png', '/projects/pcl_3.png'],
    landscape: true
  },
  'pixel-world': {
    name: 'Pixel World',
    description: t('projects.pixel-world'),
    url: 'https://tomdelie.itch.io/pixel-world',
    date: '2021',
    tags: ['Godot 3.2', 'GDScript'],
    images: ['/projects/pixel_world_1.png', '/projects/pixel_world_2.png', '/projects/pixel_world_3.png'],
    landscape: true
  }
});

const project = computed(() => {
  const slug = route.params.slug as ProjectName;
  return projects[slug];
});

onMounted(() => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    ScrollTrigger.create({
      trigger: '.pin',
      start: "top top",
      end: "99999px",
      pin: true,
      markers: false,
    });
  });

  const followerTrigger = document.querySelectorAll('.follower-trigger');
  followerTrigger.forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => {
      gsap.to(".cursor-follower", { scale: 0, duration: 0 });
      gsap.to(".dot-follower", { scale: 4.0, ease: Back.easeOut });
    });
    trigger.addEventListener("mouseleave", () => {
      gsap.to(".cursor-follower", { scale: 1.0, duration: 0 });
      gsap.to(".dot-follower", { scale: 1.0, ease: Bounce.easeOut });
    });
  });

  gsap.fromTo(
    document.querySelectorAll('.info'),
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
  );

  gsap.fromTo(
    document.querySelector('.images'),
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: 'power2.out', delay: 1 }
  );
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<template>
  <div>
    
    <div class="w-full h-full">
      <div class="flex flex-col lg:flex-row justify-between relative h-full w-full">

        <div class="pin flex flex-col items-start pb-16 lg:h-[100vh] w-full sm:w-[50%] lg:w-[33.33%]">
          <img class="z-10 absolute top-10 sm:top-20 lg:top-auto lg:bottom-20 right-0 lg:right-auto lg:left-10 opacity-5 select-none w-[100px] scale-[6.0] sm:scale-[10.0] lg:scale-[15.0] pointer-events-none" src="/icons/star.svg" alt="Star">

          <div class="flex flex-col items-start text-sm mb-8 mt-24 lg:mt-32">
            <a class="mb-3 follower-trigger cursor-pointer hover:line-through flex items-center group" @click="router.go(-1)">
              <img class="group-hover:-translate-x-2 h-5 duration-500" src="/icons/arrow.svg" alt="Back Arrow">
              <span class="pl-2">{{ $t('projects.back') }}</span>
            </a>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium">{{ project.name }}</h1>

            <div class="info mt-8 lg:mt-16">
              <ul class="flex flex-wrap tags">
                <li>{{ project.description }}</li>
              </ul>
            </div>

            <div class="info mt-6">
              <h2 class="uppercase font-bold">Stack</h2>
              <ul class="flex flex-wrap tags">
                <li v-for="tag of project.tags">{{ tag }}</li>
              </ul>
            </div>

            <div class="info mt-6">
              <h2 class="uppercase font-bold">Année</h2>
              <ul class="flex flex-wrap tags">
                <li>{{ project.date }}</li>
              </ul>
            </div>
          </div>

          <div class="info">
            <a class="follower-trigger py-3 px-6 text-primary bg-secondary hover:bg-tertiary duration-300 text-center text-sm uppercase" :href="project.url" target="_blank" rel="noopener noreferrer">Visit website</a>
          </div>
        </div>

        <div class="images w-full lg:w-[50%] grid gap-8 xl:gap-16 pb-16 lg:mt-32" :class="project.landscape ? 'grid-cols-1' : 'grid-cols-1 min-[450px]:grid-cols-2'">
          <img v-for="(img, index) of project.images" class="z-20 shadow-lg w-full" :src="img" :alt="`Project Image ${ index+1 }`">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul.tags > li:not(:last-child)::after {
  content: "—";
  padding-right: .25rem;
  padding-left: .25rem;
}
</style>