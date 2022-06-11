<script setup>
const notesQuery = queryContent('notes')
/*
// If you'd prefer to pass along raw `QueryBuilderParams`:
const notesQuery = {
  where: [
    { _path: /^\/notes/ },
  ],
}
*/
</script>

<template>
  <ContentNavigation v-slot="{ navigation }" :query="notesQuery">
    <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path">
      {{ link.navTitle || link.title }}
    </NuxtLink>
  </ContentNavigation>
</template>
