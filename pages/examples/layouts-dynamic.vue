<script>
definePageMeta({
  layout: false,
})
export default {
  data: () => ({
    layout: 'custom',
  }),
}
</script>

<template>
  <div class="p-4">
    Custom layout defined dynamically with the <code>NuxtLayout</code> component
    <br>
    <NuxtLayout :name="layout">
      Default slot
      <br>
      <button class="p-1 border rounded" @click="layout ? layout = null : layout = 'custom'">
        Switch layout
      </button>

      <template #header>
        Header slot
      </template>
    </NuxtLayout>
    <br>
    <NuxtLink to="/">
      Back to home
    </NuxtLink>
  </div>
</template>
