<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent('notes').where({ _path: path }).only(['title'])
  // .findOne()
})
definePageMeta({
  title: 'Home',
  layout: 'hancock',
})
</script>

<template>
  <div class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded">
    Home...
    <NotesQuery />

    <!-- // /api/_content/query?path=/hello -->
  </div>
</template>
