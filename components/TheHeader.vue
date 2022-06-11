<script setup lang="ts">
const router = useRouter()
const client = useSupabaseClient()
const user = useSupabaseUser()
const colorMode = useColorMode()
const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
const colorModeIcon = computed(() => colorMode.preference === 'dark' ? 'heroicons-outline:moon' : 'heroicons-outline:sun')
const logout = async () => {
  await client.auth.signOut()
  router.push('/')
}
</script>

<template>
  <div>
    <div class="flex items-center justify-center md:justify-between">
      <div class="hidden md:block" />
      <div class="flex items-center">
        <NButton variant="transparent" :icon="colorModeIcon" @click="toggleDark" />
        <button v-if="user" class="u-text-white" variant="transparent" @click="logout">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
