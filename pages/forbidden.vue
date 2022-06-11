<script setup lang="ts">
definePageMeta({
  title: 'Some Page',
  layout: 'hancock',
  // This is an example of inline middleware
  middleware: () => {
    console.log('Strictly forbidden.')
    return false
  },
})
</script>

<template>
  <div>
    Forbidden
  </div>
</template>
