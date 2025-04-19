<template>
    <v-container fluid class="pa-0 galaxy-wrapper">
      <!-- Background Image -->
      <v-img
        src="/galaxy.jpg"
        class="galaxy-bg"
        cover
      ></v-img>
  
      <!-- Animated Earth -->
      <v-img
        src="/earth.gif"
        class="earth-gif"
        max-width="200"
        aspect-ratio="1"
        :style="{ bottom: isMobile ? '5%' : '10%' }"
      ></v-img>
  
      <!-- Content Overlay -->
      <div class="overlay-content">
        <slot />
      </div>
    </v-container>
  </template>
  
  <script>
  import { useDisplay } from 'vuetify';
  
  export default {
    name: 'GalaxyEarthBackground',
    setup() {
      const { mobile } = useDisplay();
      return { isMobile: mobile.value };
    },
  };
  </script>
    
  <style scoped>
  .galaxy-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  
  .galaxy-bg {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
  }
  
  .earth-gif {
    position: absolute;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .overlay-content {
    position: relative;
    z-index: 3;
    color: white;
    text-align: center;
    padding-top: 20vh;
  }
  </style>
  