<script setup lang="ts">
const route = useRoute()
function enableCustomLayout() {
  route.meta.layout = 'custom'
}
definePageMeta({
  layout: false,
})
</script>

<template>
  <div>
    <ClientOnly>
      <Teleport to="#overlays">
        Layout Teleported to #overlays
      </Teleport>
    </ClientOnly>

    <button @click="enableCustomLayout">
      Update layout
    </button>
  </div>
</template>
