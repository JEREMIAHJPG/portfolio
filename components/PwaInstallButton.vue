<template>
  <button v-if="isInstallable" @click="installPWA" class="install-btn">
    Install App
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isInstallable = ref(false);
let deferredPrompt = null;

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    isInstallable.value = true;
  });
});

const installPWA = () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      deferredPrompt = null;
    });
  }
};
</script>

<style scoped>
.install-btn {
  padding: 10px 15px;
  background: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
