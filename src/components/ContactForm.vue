<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap, Power2 } from 'gsap';

const contactForm = ref();

const loading = ref(false);
const success = ref(false);
const rateLimited = ref(false);
const error = ref(false);

const form = ref({
  email: '',
  message: '',
});

const honeypot = ref({
  phone: '',
  url: '',
});

const lastSubmittedLsKey = 'iqjdmoazid';

onMounted(() => {
  const startDate = new Date();

  contactForm.value.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    // time restriction
    const endDate = new Date();
    const timeElapsed = (endDate.getTime() - startDate.getTime()) / 1000;
    if (timeElapsed < 3) return;

    // honeypot
    const hpUrlValue = honeypot.value.url;
    const hpPhoneValue = honeypot.value.phone;
    if (hpUrlValue || hpPhoneValue) return;

    // rate limiting
    const lastSubmitted = localStorage.getItem(lastSubmittedLsKey);
    const lastSubmittedTimeElapsedInS = (new Date().getTime() - Number(lastSubmitted)) / 1000;
    if (lastSubmittedTimeElapsedInS < 60*10) {
      rateLimited.value = true;
      return;
    }

    const email = form.value.email;
    const message = form.value.message;

    if (!email || !message) return;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);

    rateLimited.value = false;
    error.value = false;
    loading.value = true;

    fetch(contactForm.value.action, {
      method: 'POST',
      body: formData,
    })
    .then(() => {
      success.value = true;
      error.value = false;

      localStorage.setItem(lastSubmittedLsKey, new Date().getTime().toString());
    })
    .catch(() => {
      success.value = false;
      error.value = true;
    })
    .finally(() => {
      loading.value = false;
    });
  });

  gsap.fromTo(
    document.querySelectorAll('.form-element'),
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: Power2.easeOut,
      delay: 0.25,
      scrollTrigger: {
        trigger: contactForm.value,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    }
  );
});
</script>

<template>
  <form ref="contactForm" class="gform flex flex-col w-full mx-auto" action="https://script.google.com/macros/s/AKfycbwwd9_5K6qq-q6x0N_RAajar6WDqGEbw01tD8aLfqTRpixiGRPndQDrxRj_1w-Ce6uo/exec" method="POST">
    <input class="form-hp" v-model="honeypot.url" autocomplete="off" type="text" tabindex="-1" name="url" />
    <input class="form-hp" v-model="honeypot.phone" autocomplete="off" type="text" tabindex="-1" name="phone" />

    <div class="form-element flex flex-col items-start mb-5">
      <label class="text-sm mb-1 ml-2" for="oazdjkazdojve">{{ $t('contact.form.email') }}</label>
      <input id="oazdjkazdojve" name="oazdjkazdojve" class="follower-trigger p-4 border border-secondary bg-primary placeholder:text-secondary placeholder:opacity-70 text-sm w-full" v-model="form.email" :disabled="success || loading" required type="email" placeholder="contact@email.com" />
    </div>
    
    <div class="form-element flex flex-col items-start">
      <label class="text-sm mb-1 ml-2" for="kqsdoiazcnize">{{ $t('contact.form.message') }}</label>
      <textarea id="kqsdoiazcnize" name="kqsdoiazcnize" class="follower-trigger w-full p-4 border border-secondary bg-primary placeholder:text-secondary placeholder:opacity-70 text-sm min-h-[100px] max-h-[400px]" v-model="form.message" :disabled="success || loading" required rows="6" :placeholder="$t('contact.placeholder')"></textarea>
    </div>

    <button type="submit" :disabled="success || loading" class="form-element follower-trigger py-3 md:py-4 w-[150px] md:w-[200px] text-primary mt-12 mx-auto flex items-center justify-center rounded-full">
      <span v-if="!loading && !success" class="font-medium text-sm lg:translate-y-[1px]">{{ $t('contact.button') }}</span>
      
      <img v-if="loading" id="loading" src="/icons/loading.svg" width="18" alt="Loading">

      <img v-if="success" class="mr-2" id="validate" src="/icons/validate.svg" width="18" alt="Validate">
      <span v-if="success" class="font-medium">{{ $t('contact.sent') }}</span>
    </button>

    <span v-if="error" class="text-sm text-tertiary font-medium mt-3">{{ $t('contact.error') }}</span>
    <span v-if="!error && rateLimited" class="text-sm text-tertiary font-medium mt-3">{{ $t('contact.rateLimited') }}</span>
  </form>
</template>

<style scoped>
button {
  box-shadow: 6px 6px 0px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--secondary);
  transition: .1s all linear;
  font-family: 'Lora', serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
}
button:not(:disabled):hover {
  transition: .1s all linear;
  background-color: var(--tertiary);
}

textarea {
  font-family: 'Lora', serif;
}

#loading {
  animation: 2s loading linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.gform input:disabled, .gform textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  border-style: dashed;
}

.form-hp {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
</style>
