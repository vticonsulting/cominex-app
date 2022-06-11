<script setup lang="ts">
const { data: mountain } = await useFetch('/api/mountain')
definePageMeta({
  layout: 'hancock',
})
</script>

<template>
  <NuxtExampleLayout example="server/routes">
    <p>Fetched from <pre>/api/mountain</pre>: {{ mountain }}</p>
  </NuxtExampleLayout>
</template>
