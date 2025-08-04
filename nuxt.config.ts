// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  site: {
    url: 'https://sherlock-codes.dev',
    name: 'The Case of the Messy Codebase: SOLVED'
  },
  gtag: {
    tags: [
      'GTM-57FXD4GT',
      'G-ZT6HS7Z85T'
    ]
  },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxt/icon',
    'nuxt-gtag',
    '@nuxtjs/sitemap'
  ],
  components: {
    dirs: ['~/components']
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-light-default',
          langs: ['php']
        }
      }
    },
    renderer: {
      anchorLinks: {
        h3: false,
        h4: false
      }
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: '~/components/ui'
  }
})