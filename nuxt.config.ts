import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: "vercel", // ✅ Vercel for SSR

    externals: {
      inline: ['@fast-csv/format']
    }
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image-edge'
  ],

  plugins: ['@/plugins/vuetify'],

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
  ],

  vite: {
    plugins: [
      require('vite-svg-loader')() // enables inline SVGs as Vue components
    ],
    server: {
      proxy: {
        '/recaptcha': {
          target: 'https://www.google.com/recaptcha/api.js',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/recaptcha/, ''),
        },
        '/paystack': {
          target: 'https://paystack.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/paystack/, ''),
        },
      },
    },
  },

  runtimeConfig: {
    debug: false,
    csp: {
      policies: {
        'default-src': ["'self'"],
        'script-src': [
          "'self'",
          "https://checkout.paystack.com",
          "https://www.googletagmanager.com",
          "https://www.gstatic.com",
          "https://pagead2.googlesyndication.com"
        ],
        'frame-src': ["https://*.paystack.com"],
        'connect-src': [
          "'self'",
          "https://www.googleapis.com",
          "https://firestore.googleapis.com",
          "https://checkout.paystack.com"
        ],
        'img-src': ["'self'", "data:",
          "https://checkout.paystack.com",
          "https://pagead2.googlesyndication.com"
        ],
        'style-src': ["'self'", "'unsafe-inline'"],
        'font-src': ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"]
      }
    },
    public: {
      linkedInUrl: process.env.LINKEDIN_URL,
      telegramUrl: process.env.TELEGRAM_URL,
      whatsappUrl: process.env.WHATSAPP_URL,
      Emailpass: process.env.EMAILPASS,
      EmailUser: process.env.EMAILUSER,
    }
  },

  app: {
    head: {
      title: 'Asastra Dev - Web & Software Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio for modern responsive software solutions, SEO-ready and performance optimized' },
        { name: 'author', content: 'Jeremiah Chukwuebuka Okpala' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Asastra Dev - Software Developer' },
        { property: 'og:image', content: 'https://asastra-dev.vercel.app/mylogomedium.jpg' },
        { property: 'og:url', content: 'https://asastra-dev.vercel.app' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Asastra' },
        { name: 'twitter:description', content: 'Artists & Tech Platform' },
        { name: 'twitter:image', content: 'https://asastra-dev.vercel.app/mylogomedium.jpg' },
        { name: 'twitter:site', content: '@asastra' },
        { name: 'twitter:creator', content: '@asastra' },
        { name: 'pinterest-rich-pin', content: 'true' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      script: [
        { src: 'https://www.google.com/recaptcha/api.js', async: true, defer: true },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-ZL1JH23ZME', async: true }
      ],
      noscript: [{ innerHTML: 'This website requires JavaScript to work properly.' }]
    }
  },

  build: {
    transpile: ['vuetify']
  },

  typescript: {
    shim: false
  },

  compatibilityDate: '2025-01-22'
});
