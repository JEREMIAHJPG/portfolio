// components/ContactLinks.vue
<template>
  <v-container class="text-center my-10">
    <h2 class="text-h5" style="color:white">Hire or Commission Me</h2>
    <v-btn color="success" class="ma-2" :href="whatsapp">WhatsApp</v-btn>
    <v-btn color="primary" class="ma-2" :href="telegram">Telegram</v-btn>
    <v-btn color="info" class="ma-2" :href="linkedin">LinkedIn</v-btn>
  </v-container>
</template>

<script setup>
const config = useRuntimeConfig()
const whatsapp = config.public.whatsappUrl
const telegram = config.public.telegramUrl
const linkedin = config.public.linkedInUrl
</script>