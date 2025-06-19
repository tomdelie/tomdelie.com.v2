<script setup lang="ts">
import { useHelper } from '../composables/helper';
import Project from '../components/Project.vue';
import ContactForm from '../components/ContactForm.vue';
import { onMounted } from 'vue';
import { gsap, Bounce, Back, Power2, Power4 } from 'gsap';

const { localePath } = useHelper();

onMounted(() => {
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
    document.querySelectorAll('.intro p'),
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: Back.easeOut, delay: 0.25 }
  );

  gsap.fromTo(
    document.querySelector('.intro .star'),
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: Power2.easeOut, delay: 1.5 }
  );

  gsap.fromTo(
    document.querySelectorAll('.contact-title span'),
    { y: '1em' },
    {
      y: 0,
      duration: 1,
      ease: Power4.easeOut,
      delay: 0.25,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.contact-title',
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    }
  );
});
</script>

<template>
  <div class="flex flex-col relative my-12">
    <img class="absolute top-20 lg:left-0 xl:left-20 2xl:left-40 lg:right-auto right-0 -translate-y-1/3 opacity-5 select-none w-[100px] scale-[6] sm:scale-[10] lg:scale-[13] 2xl:scale-[15] pointer-events-none" src="/icons/star.svg" alt="Star">

    <div class="flex flex-col pb-16">
      <div class="flex justify-between mt-16 lg:mt-64">
        <div></div>
        <div class="intro flex flex-col w-full lg:w-[50%] xl:w-[33.33%]">
          <div class="star"></div>
          <p class="max-w-[270px] text-sm">{{ $t('home.intro') }}</p>
          <p class="mt-1 text-xl min-[300px]:text-2xl lg:text-3xl 2xl:text-4xl" v-html="$t('home.title')"></p>
          <p class="mt-6 text-sm" v-html="$t('home.quote')"></p>
        </div>
      </div>
    </div>
  
    <section class="py-16 border-t border-secondary border-opacity-10">

      <div class="flex flex-col gap-16 2xl:gap-32">
        <Project :to="localePath('Projects', { slug: 'taittinger' })" class="z-10 w-full md:w-[83.34%] lg:w-[66.66%] min-h-[20rem] h-[60vw] md:h-[50vw] lg:h-[36vw] max-h-[980px]"
          name="Taittinger"
          id="ttg"
          url="https://book-a-visit.taittinger.fr"
          date="2024 — 2025"
          :tags="['TypeScript', 'Nuxt', 'NestJS']"
          image="/projects/ttg_1.png"
        />

        <div class="flex flex-col lg:flex-row justify-between gap-16 2xl:gap-0">
          <Project :to="localePath('Projects', { slug: 'cite-immersive-viking' })"
            class="z-10 flex-shrink-0 w-full md:w-[66.66%] lg:w-[58.31%] min-h-[20rem] h-[60vw] md:h-[40vw] lg:h-[30vw] max-h-[980px]"
            url="https://book-a-visit.taittinger.fr"
            name="Cité Immersive Viking"
            id="viking"
            date="2024" :tags="['Wordpress', 'ACF', 'Polylang']"
            image="/projects/viking_1.png"
          />

          <Project :to="localePath('Projects', { slug: 'eatic' })"
            class="z-10 w-full sm:w-[66.66%] md:w-[33.33%] min-h-[30rem] h-[110vw] md:h-[70vw] lg:h-[50vw] max-h-[1220px] md:self-end"
            url="https://book-a-visit.taittinger.fr"
            name="Eatic"
            id="eatic"
            date="2021 — 2023" :tags="['TypeScript', 'Vue.js', 'Node.js']"
            image="/projects/eatic_1.png"
          />
        </div>

        <div class="flex justify-end">
          <Project :to="localePath('Projects', { slug: 'photocinelive' })"
            class="z-10 w-full md:w-[83.34%] lg:w-[66.66%] min-h-[20rem] h-[60vw] md:h-[50vw] lg:h-[36vw] max-h-[980px]"
            url="https://book-a-visit.taittinger.fr"
            name="PhotoCineLive"
            id="pcl"
            date="2024"
            :tags="['Wordpress', 'ACF', 'Polylang']"
            image="/projects/pcl_1.png"
          />
        </div>

        <Project :to="localePath('Projects', { slug: 'pixel-world' })"
          class="z-10 w-full md:w-[83.34%] lg:w-[66.66%] min-h-[20rem] h-[60vw] md:h-[50vw] lg:h-[36vw] max-h-[980px]"
          url="https://book-a-visit.taittinger.fr"
          name="Pixel World"
          id="pixel"
          date="2021"
          :tags="['Godot 3.2', 'GDScript']"
          image="/projects/pixel_world_1.png"
        />
      </div>

    </section>

    <section class="relative pt-16 md:pt-32 2xl:pt-48 pb-24 border-t border-secondary border-opacity-10">
      <div class="flex flex-col items-center justify-center">
        <h3 class="contact-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl mb-16 text-center flex flex-col" v-html="$t('contact.title')"></h3>

        <ContactForm class="md:max-w-[66.66%] xl:max-w-[33.33%]" />
      </div>
    </section>
  </div>
</template>

<style>
ul > li > a {
  display: block;
  width: fit-content;
  height: 1em;
  transition: .3s transform ease-in;
}

ul > li > a:hover {
  transform: skewX(-15deg) translateX(1rem);
}

.contact-title > div {
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.contact-title > div > span {
  display: block;
}
</style>
