<template>
    <v-app-bar app flat color="primary">
      <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>

      <v-app-bar-title class="text-h5 text-white">Asastra Dev</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="/about"><v-icon>mdi-account</v-icon></v-btn>
      <v-btn icon href="/projects"><v-icon>mdi-briefcase</v-icon></v-btn>
      <v-btn icon href="/contact"><v-icon>mdi-message</v-icon></v-btn>
    </v-app-bar>
  </template>
  <script setup lang="ts">
defineProps({
  drawer: Boolean
})

defineEmits(['toggle-drawer'])
</script>