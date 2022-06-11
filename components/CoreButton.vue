<script setup lang="ts">
const ExampleButton = resolveComponent('ExampleButton')
const clickable = ref(false)
</script>

<template>
  <component :is="clickable ? ExampleButton : 'div'">
    <slot>Slot for dynamic component</slot>
  </component>
</template>
