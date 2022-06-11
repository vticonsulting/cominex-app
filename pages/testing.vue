<script setup lang="ts">
definePageMeta({
  title: null,
  layout: 'hancock',
})
// const { data: count } = await useFetch('/api/count')
</script>

<template>
  <div>
    <nuxt-link to="/layout">
      Layout
    </nuxt-link>
    <!-- Page visits: {{ count }} -->
    <ExampleMarkup class="prose-sm prose" />

    <CoreButton>
      Testing
    </CoreButton>

    <ClientOnly>
      <Teleport to="#overlays">
        From index Teleported to #overlays
      </Teleport>
    </ClientOnly>
  </div>
</template>
