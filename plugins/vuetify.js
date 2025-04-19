import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // MDI Icons

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr:true, // Enable SSR for Vuetify
    theme: {
      defaultTheme: 'light', // Default theme
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            primary: '#6200EE',
            secondary: '#03DAC6',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
        dark: {
          dark: true,
          colors: {
            background: '#121212',
            surface: '#1E1E1E',
            primary: '#BB86FC',
            secondary: '#03DAC6',
            error: '#CF6679',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },
    },
    icons: {
      defaultSet: 'mdi', // Use Material Design Icons
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
