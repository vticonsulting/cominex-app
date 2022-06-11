<script setup lang="ts">
const route = useRoute()
definePageMeta({
  layout: 'hancock',
})
</script>

<template>
  <NuxtExampleLayout example="routing/middleware">
    <NuxtPage />

    <template #nav>
      <nav class="flex gap-4 p-4 align-center">
        <NuxtLink to="/" class="n-link-base">
          Home
        </NuxtLink>
        <NuxtLink to="/forbidden" class="n-link-base">
          Forbidden
        </NuxtLink>
        <NuxtLink to="/redirect" class="n-link-base">
          Redirect
        </NuxtLink>
      </nav>
    </template>

    <template #footer>
      <div class="p-4 text-center op-50">
        Current route: <code>{{ route.path }}</code>
      </div>
    </template>
  </NuxtExampleLayout>
</template>
