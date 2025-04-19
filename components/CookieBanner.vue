<template>
  <v-snackbar
    v-model="showBanner"
    :timeout="-1"
    color="primary"
    class="cookie-banner"
  >
    <div class="d-flex flex-column flex-md-row align-center justify-space-between">
      <div class="text-white text-body-2">
        We use cookies to ensure you get the best experience on our website.
        <div @click="CookiesPolicy()" class="text-yellow text-decoration-underline">
          Learn more
        </div>
      </div>
      <div class="button-group mt-2 mt-md-0">
        <v-btn color="success" class="mx-1" @click="acceptCookies">
          Accept
        </v-btn>
        <v-btn color="error" class="mx-1" @click="declineCookies">
          Decline
        </v-btn>
      </div>
    </div>
  </v-snackbar>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const showBanner = ref(false);
    const CookiesPolicy = () => {
      this.$router.push("/CookiesPolicy");
    };
    // Check if cookies were already accepted or declined
    onMounted(() => {
      if (!localStorage.getItem("cookiesAccepted")) {
        showBanner.value = true;
      }
    });

    const acceptCookies = () => {
      localStorage.setItem("cookiesAccepted", "true");
      showBanner.value = false;
    };

    const declineCookies = () => {
      localStorage.setItem("cookiesAccepted", "false");
      showBanner.value = false;
    };

    return {
      CookiesPolicy,
      showBanner,
      acceptCookies,
      declineCookies,
    };
  },
};
</script>

<style scoped>
.cookie-banner {
  max-width: 600px;
  width: 90%;
  border-radius: 8px;
}

.text-yellow {
  color: #ffc107 !important;
}

.button-group {
  display: flex;
  gap: 8px;
}
</style>
