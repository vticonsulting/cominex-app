<script setup lang="ts">
let count = $ref(0)

function inc() {
  count++
}
function dec() {
  count--
}
definePageMeta({
  layout: 'hancock',
})
</script>

<template>
  <NuxtExampleLayout example="experimental/reactivity-transform">
    <div>
      <Label :count="count" />
      <div class="flex justify-center gap-1">
        <NButton @click="inc()">
          Inc
        </NButton>
        <NButton @click="dec()">
          Dec
        </NButton>
      </div>
    </div>
  </NuxtExampleLayout>
</template>
