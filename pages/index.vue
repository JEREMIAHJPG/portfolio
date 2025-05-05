<template>
  <v-app>
    <!-- 🌌 Background -->
    <div class="background-container">
      <div class="background-galaxy"></div>
      <!-- <div class="background-earth"></div> -->
    </div>

    <!-- 🔧 Sidebar Drawer -->
    <v-navigation-drawer v-model="drawer" app color="black lighten-4">
      <v-list dense>
        <v-sheet color="black" class="text-center py-4">
          <v-avatar size="99" color="black">
            <img src="/mylogomedium.jpg" alt="Logo">
          </v-avatar>
          <v-icon class="asastra-name">Asastra Dev</v-icon>
        </v-sheet>

        <v-divider></v-divider>

        <v-list-item v-for="(sidebar, index) in filteredSidebars" :key="index">
          <router-link class="topbar2 text-center" :to="sidebar.routename">
            <v-icon left>mdi-{{ sidebar.materialdesigniconname }}</v-icon>
            {{ sidebar.pagename }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 🌐 Main Content -->
    <v-main>
      <v-container>
        <Header :drawer="drawer" @toggle-drawer="drawer = !drawer" />
        <v-btn color="success"
            
            size="large" rounded 
            class="position-fixed bottom-0 callbtnwatsapp" 
            variant="elevated" 
            :href="whatsapp" 
           >
             <v-icon left>mdi-whatsapp</v-icon>
            
           </v-btn>
        <v-btn color="primary" 
            
            size="large" rounded 
            class="position-fixed bottom-0 callbtntelegram" 
            variant="elevated" 
            :href="telegram" 
           >
             <v-icon left>mdi-telegram</v-icon>
            
           </v-btn>
        <v-btn color="info"
            
            size="large" rounded 
            class="position-fixed bottom-0 callbtnlinkedin" 
            variant="elevated" 
            :href="linkedin"
           >
             <v-icon left>mdi-linkedin</v-icon>
             
           </v-btn>
        <HeroSVG />
        <Projects />
        <ContactLinks />
        <MainFooter />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue';
import GalaxyEarthBackground from '@/components/GalaxyEarthBackground.vue';
import Header from '@/components/Header.vue';
import HeroSVG from '@/components/HeroSVG.vue';
import Projects from '@/components/Projects.vue';
import ContactLinks from '@/components/ContactLinks.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'IndexPage',
  components: {
    GalaxyEarthBackground,
    Header,
    HeroSVG,
    Projects,
    ContactLinks,
    MainFooter
  },
  setup() {
    const drawer = ref(false);

    const filteredSidebars = [
      { pagename: 'Home', routename: '/', materialdesigniconname: 'home' },
      { pagename: 'About', routename: '/About', materialdesigniconname: 'account' },
  //    { pagename: 'Projects', routename: '/projects', materialdesigniconname: 'briefcase' },
 //     { pagename: 'Contact', routename: '/contact', materialdesigniconname: 'email' }
    ];
    const config = useRuntimeConfig()
const whatsapp = config.public.whatsappUrl
const telegram = config.public.telegramUrl
const linkedin = config.public.linkedInUrl
    return {
      drawer,
      filteredSidebars,
      whatsapp,
      telegram,
      linkedin
    };
  }
};
</script>

<style scoped>
.topbar2 {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
}
.asastra-name {
  font-size: 24px;
  font-weight: bold;
  color: white;
}
.callbtnwatsapp{
  top: 10rem;
  right: 0.5rem;
  position:fixed; 
  z-index:12;
}
.callbtntelegram{
  top: 20rem;
  right: 0.5rem;
  position:fixed; 
  z-index:12;
}
.callbtnlinkedin{
  top: 30rem;
  right: 0.5rem;
  position:fixed; 
  z-index:12;
}
</style>

<style>
/* Background Container */
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Galaxy JPG */
.background-galaxy {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/galaxy.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

/* Earth GIF */
.background-earth {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/earth.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  
}

/* Ensure Vuetify doesn't cover it */
.v-application,
.v-main {
  background-color: transparent !important;
  position: relative;
  z-index: 3;
}
</style>