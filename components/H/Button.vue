<script>
export default {
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    handleClick() {
      this.isLoading = true
      setTimeout(() => (this.isLoading = false), 3000)
    },
  },
}
</script>

<template>
  <button class="inline-flex items-center px-2 py-1 space-x-2 border" :disabled="isLoading" @click="handleClick">
    <div v-if="isLoading" class="w-4 h-4 border-b-2 border-gray-900 rounded-full animate-spin" />
    <div v-else class="w-4 h-4 border-b-2 border-gray-900 rounded-full" />
    <span>
      <slot>Button...</slot>
    </span>
  </button>
</template>

<style scoped>
button:disabled {
  font-style: italic;
}
</style>
