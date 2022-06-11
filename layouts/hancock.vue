<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [{ name: 'og:title', content: `App - ${route.meta.title}` }],
})
</script>

<template>
  <div class="sm:py-10">
    <TheNavbar />
    <slot />
  </div>
</template>
