<script setup lang="ts">
import { onMounted, ref } from 'vue';

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
});
</script>

<template>
  <section class="text-center container">
    <h2 id="contact" class="pt-24 text-3xl lg:text-5xl font-bold mb-16 uppercase">III. Contact</h2>
    <p class="mt-3">
      Vous voulez en savoir plus ? Parler de votre projet ?<br>
      Envoyez-moi un message et discutons-en.
    </p>

    <form ref="contactForm" class="gform mt-6 flex flex-col max-w-[400px] w-full mx-auto" action="https://script.google.com/macros/s/AKfycbwwd9_5K6qq-q6x0N_RAajar6WDqGEbw01tD8aLfqTRpixiGRPndQDrxRj_1w-Ce6uo/exec" method="POST">
      <input class="form-hp" v-model="honeypot.url" autocomplete="off" type="text" tabindex="-1" name="url" />
      <input class="form-hp" v-model="honeypot.phone" autocomplete="off" type="text" tabindex="-1" name="phone" />

      <div class="flex flex-col items-start mb-5">
        <label class="text-sm mb-1" for="oazdjkazdojve">Email</label>
        <input class="px-3 py-1.5 border border-secondary bg-primary placeholder:text-secondary placeholder:opacity-70 text-sm w-full" v-model="form.email" :disabled="success || loading" required type="email" name="oazdjkazdojve" placeholder="contact@email.com" />
      </div>
      
      <div class="flex flex-col items-start">
        <label class="text-sm mb-1" for="oazdjkazdojve">Message</label>
        <textarea class="w-full p-3 border border-secondary bg-primary placeholder:text-secondary placeholder:opacity-70 text-sm min-h-[100px] max-h-[400px]" v-model="form.message" :disabled="success || loading" required rows="6" name="kqsdoiazcnize" placeholder="Bonjour,"></textarea>
      </div>

      <button type="submit" :disabled="success || loading" class="py-3 text-primary mt-6 mx-auto w-full flex items-center justify-center">
        <span v-if="!loading && !success" class="font-medium translate-y-[1px]">Envoyer</span>
        
        <img v-if="loading" id="loading" src="/icons/loading.svg" width="18" alt="Loading">

        <img v-if="success" class="mr-2" id="validate" src="/icons/validate.svg" width="18" alt="Validate">
        <span v-if="success" class="font-medium">Envoyé</span>
      </button>
      <span v-if="error" class="text-sm text-tertiary font-medium mt-3">Oops ! Une erreur s'est produite, veuillez réessayer.</span>
      <span v-if="!error && rateLimited" class="text-sm text-tertiary font-medium mt-3">Veuillez attendre quelques minutes avant de soumettre le formulaire de nouveau.</span>
    </form>

  </section>
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
