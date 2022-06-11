<script setup lang="ts">
const route = useRoute()
const timer = useState('timer', () => 0)
definePageMeta({
  layout: 'hancock',
})
</script>

<template>
  <NuxtExampleLayout example="routing/universal-router">
    A page...
    <br>

    <template v-if="timer">
      Processing navigation in 0.{{ timer }}s
    </template>

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
