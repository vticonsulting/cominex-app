import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('hello', (msg: string) => `Hello ${msg}!`)
})

declare module '#app' {
  interface NuxtApp {
    $hello (msg: string): string
  }
}
