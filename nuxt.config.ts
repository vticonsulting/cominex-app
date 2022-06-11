import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // https://algolia.nuxtjs.org/
  algolia: {
    // apiKey: '0fd1c4eba2f831788333e77c9d855f1d',
    // applicationId: 'AGN9HUEKF3',
    apiKey: '0bdd840be2d7d4377e10b238bc731901',
    applicationId: 'WTEU7RU64C',
    // DocSearch key is used to configure DocSearch extension.
    docSearch: {
      indexName: 'indexName',
    },
    lite: true,
    instantSearch: true,
    crawler: {
      apiKey: '84cd67fa388e3c50b3a0a1710fae55ad',
      indexName: 'resources',
      meta: ['title', 'description'],
      include: () => true,
    },
    recommend: true,
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
    // preference: 'light', // default theme
    // dataValue: 'theme', // activate data-theme in <html> tag
  },

  // https://content.nuxtjs.org
  content: {
    // https://content.nuxtjs.org/api/configuration

    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula',
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    navigation: {
      fields: ['navTitle'],
    },
  },

  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },

  modules: [
    '@nuxt/content',
    // https://github.com/nuxt-community/color-mode-module#readme
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/supabase-module#readme
    '@nuxtjs/supabase',
    // https://github.com/nuxt-community/tailwindcss-module#readme
    '@nuxtjs/tailwindcss',
    // https://github.com/vuejs/pinia#readme
    '@pinia/nuxt',
    // https://github.com/vueuse/vueuse#readme
    '@vueuse/nuxt',
    '@nuxt/ui',
    // https://github.com/cipami/nuxt-lodash#readme
    'nuxt-lodash',
    'unplugin-icons/nuxt',
  ],

  privateRuntimeConfig: {
    supabaseKey: process.env.SUPABASE_KEY,
  },

  publicRuntimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabasePublicKey: process.env.SUPABASE_PUBLIC_KEY,
  },

  ssr: true,

  // https://supabase.nuxtjs.org/
  supabase: {
    // Options
  },

  // https://tailwindcss.nuxtjs.org/
  tailwindcss: {
    // Options
  },

  typescript: {
    shim: false,
  },

  ui: {
    colors: {
      primary: 'green',
    },
  },

  unocss: {
    preflight: true,
  },
})
