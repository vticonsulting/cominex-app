<script setup>
const colorMode = useColorMode()
const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]
</script>

<template>
  <div class="flex gap-4 p-4">
    <button class="btn">
      Hello
    </button>
    <select v-model="colorMode.preference" class="w-full max-w-xs select">
      <option disabled selected>
        Theme
      </option>
      <option v-for="theme of themes" :key="theme">
        {{ theme }}
      </option>
    </select>
  </div>
</template>
