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
      <Header :drawer="drawer" @toggle-drawer="drawer = !drawer" />
      <Analytics />
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import { Analytics } from '@vercel/analytics/nuxt'
export default {
  name: 'DefaultPage',
  components: { },
  setup() {
    const drawer = ref(false);

    const filteredSidebars = [
      { pagename: 'Home', routename: '/', materialdesigniconname: 'home' },
      { pagename: 'About', routename: '/About', materialdesigniconname: 'account' },
  //    { pagename: 'Projects', routename: '/projects', materialdesigniconname: 'briefcase' },
 //     { pagename: 'Contact', routename: '/Contact', materialdesigniconname: 'email' }
    ];
    return {
      drawer,
      filteredSidebars,
 
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
</style>

<style>
/* Ensure Vuetify doesn't cover it */
.v-application,
.v-main {
  background-color: transparent !important;
  position: relative;
  z-index: 3;
}
</style>