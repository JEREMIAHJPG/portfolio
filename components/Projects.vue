<template>
    <v-container>
      <h2 class="text-h4 mb-4" style="color:white">Featured Projects</h2>
      <v-row>
        <v-col cols="12" md="5" v-for="(project, index) in projects" :key="index">
          <v-card >
            <iframe :src="project.iframe" height="517px" max-width="400px"></iframe>
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-subtitle>{{ project.description }}</v-card-subtitle>
            <v-btn color="info"
            
            size="small" rounded 
            class="position-relative bottom-0 btnwebsite" 
            variant="elevated" 
            :href="project.iframe"
           >
             View page           
           </v-btn>

            <v-btn color="success"
            size="small" rounded 
            class="position-relative bottom-0 btngithub" 
            variant="elevated" 
            :href="project.github">
           GitHub
          </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script setup>
const projects = [
  { title: 'ASASTRA – E-Commerce Web App', iframe: 'https://asastra.vercel.app', description: 'Built with Nuxt3 + Firebase, Vuetify and SEO in mind', github: 'https://github.com/JEREMIAHJPG/ASASTRA_NEW.git'},
  { title: 'My Resume Website', iframe: 'https://asastra-dev.vercel.app/About', description: 'Designed with Vuetify and SEO in mind', github: 'https://github.com/JEREMIAHJPG/portfolio.git'},
  { title: 'ASASTRA – Sign-up form page', iframe: 'https://asastra.vercel.app/Signupformpage', description: 'Built with Nuxt3 + Firebase', github: 'https://github.com/JEREMIAHJPG/ASASTRA_NEW.git'},
  { title: 'ASASTRA – Login form page', iframe: 'https://asastra.vercel.app/Loginpage', description: 'Built with Nuxt3 + Firebase', github: 'https://github.com/JEREMIAHJPG/ASASTRA_NEW.git'},
  { title: 'ASASTRA – Terms and Conditions policy page', iframe: 'https://asastra.vercel.app/termsandconditions', description: 'Built with Nuxt3 + Firebase', github: 'https://github.com/JEREMIAHJPG/ASASTRA_NEW.git'},
];
</script>
<style scoped>

.btnwebsite{
  position: relative; 
  z-index:12;
}
.btngithub{
  position: relative; 
  z-index:12;
}
</style>