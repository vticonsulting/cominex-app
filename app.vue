<script setup lang="ts">
useHead({
  title: null,
  titleTemplate: (title) => {
    return title ? `${title} - App` : 'App'
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'An amazing app.' },
    { property: 'og:image', content: '/cover.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'theme-color', content: computed(() => isDark.value ? '#00aba9' : '#ffffff') },
  ],
  // https://www.gstatic.com/charts/loader.js
  link: [
    // {
    //   rel: 'stylesheet',
    //   href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
    //   integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay',
    //   crossorigin: 'anonymous',
    // },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: true,
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Flow+Circular&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Bungee&family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
  htmlAttrs: {
    class: 'h-full overflow-y-scroll',
  },
  bodyAttrs: {
    class: 'h-full font-sans',
  },
})
</script>

<template>
  <div class="p-16">
    <NuxtLayout>
      <NuxtPage />

      <div id="overlays" class="bg-red-500" />
      <client-only>
        <cookie-consent />
      </client-only>
    </NuxtLayout>
  </div>
</template>
