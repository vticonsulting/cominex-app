<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
console.log(navigation)
</script>

<template>
  <div class="sm:py-10">
    <TheNavbar />
    <slot />
  </div>
</template>
