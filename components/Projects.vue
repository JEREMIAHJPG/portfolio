<template>
    <v-container>
      <h2 class="text-h4 mb-4" style="color:white">Featured Projects</h2>
      <v-row>
        <v-col cols="12" md="5" v-for="(project, index) in projects" :key="index">
          <v-card >
            <iframe :src="project.iframe" height="517px" max-width="400px"></iframe>
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-subtitle>{{ project.description }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script setup>
const projects = [
  { title: 'Full-Stack E-commerce Company App', iframe: 'https://asastra.vercel.app', description: 'Built with Nuxt3 + Firebase' },
  { title: 'Portfolio Website', iframe: 'https://your-portfolio.vercel.app', description: 'Designed with Vuetify and SEO in mind' },
];
</script>