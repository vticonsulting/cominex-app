<script setup lang="ts">
useHead({
  title: 'Example Page',
})
definePageMeta({
  // title: 'Example Page',
  // layout: false,
  middleware: () => {
    console.log('Example page inline middleware.')
    // return false
  },
})
const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>

<template>
  <div class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded">
    Page visits: {{ data }}
  </div>
</template>
