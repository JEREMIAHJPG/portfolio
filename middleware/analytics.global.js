import { useNuxtApp } from "#app";
import { logEvent } from "firebase/analytics";

export default defineNuxtRouteMiddleware((to, from) => {
  const { $analytics } = useNuxtApp();

  if ($analytics) {
    logEvent($analytics, "page_view", {
      page_path: to.fullPath,
      page_title: to.name || "Unnamed Page",
    });
  }
});
