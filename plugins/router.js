import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  router.afterEach((to) => {
    console.log(`Navigated to: ${to.fullPath}`);
  });

  router.onError((error) => {
    console.error("Router error:", error);
  });
});


