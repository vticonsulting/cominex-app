<script setup lang="ts">
import { Icon } from '@iconify/vue'
const links = [
  {
    name: 'Home',
    icon: 'carbon:home',
    link: '/',
  },
  {
    name: 'Notes',
    icon: 'carbon:document',
    link: '/notes',
  },
  // {
  //   name: 'Example',
  //   icon: 'ion:shirt-outline',
  //   link: '/example',
  // },
  // {
  //   name: 'Forbidden',
  //   icon: 'ion:shirt-outline',
  //   link: '/forbidden',
  // },
  // {
  //   name: 'Layout',
  //   icon: 'ion:shirt-outline',
  //   link: '/layout',
  // },
  // {
  //   name: 'Redirect Me',
  //   icon: 'ion:shirt-outline',
  //   link: '/redirect',
  // },
  // {
  //   name: 'Catch all',
  //   icon: 'ion:shirt-outline',
  //   link: '/examples/catchall/blah',
  // },
  // {
  //   name: 'Layouts Custom',
  //   icon: 'ion:shirt-outline',
  //   link: '/examples/layouts-custom',
  // },
  // {
  //   name: 'Layouts Dynamic',
  //   icon: 'ion:shirt-outline',
  //   link: '/examples/layouts-dynamic',
  // },
  // {
  //   name: 'Locale',
  //   icon: 'ion:shirt-outline',
  //   link: '/examples/locale',
  // },
  // {
  //   name: 'Middleware',
  //   icon: 'ion:shirt-outline',
  //   link: '/examples/middleware',
  // },
  // {
  //   name: 'Reactivity Transform',
  //   icon: 'ion:shirt-outline',
  //   link: '/examples/reactivity-transform',
  // },
  // {
  //   name: 'Server Routes',
  //   icon: 'ion:shirt-outline',
  //   link: '/examples/server-routes',
  // },
  // {
  //   name: 'Teleport',
  //   icon: 'carbon:phone',
  //   link: '/examples/teleport',
  // },
  // {
  //   name: 'Universal Router',
  //   icon: 'ion:shirt-outline',
  //   link: '/examples/universal-router',
  // },
]
</script>

<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <div class="text-gray-700 dark:text-gray-200">
      <nav class="space-x-3">
        <template v-for="(n, i) in links" :key="`navLink-${i}`">
          <NuxtLink :to="n.link" class="inline-block nav-link hover:text-primary group">
            <div class="flex items-center space-x-1">
              <Icon :icon="n.icon" class="w-4 h-4" />
              <span class="font-medium"> {{ n.name }}</span>
            </div>
            <div
              class="h-0.5 w-5/5 bg-primary mt-0 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all"
            />
          </NuxtLink>
        </template>
      </nav>
    </div>
    <div class="space-x-3 text-gray-500 transition">
      <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300" />
    </div>
  </div>
</template>
