<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(false)
</script>

<template>
  <div class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded">
    <button @click="open = true">
      Open Modal
    </button>
    <ClientOnly>
      <Teleport to="#overlays">
        <div>
          <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-10" @close="open = false">
              <TransitionChild
                as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0"
              >
                <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
              </TransitionChild>
              <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                  <TransitionChild
                    as="template" enter="ease-out duration-300"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <DialogPanel
                      class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-sm sm:w-full sm:p-6"
                    >
                      <div>
                        <div class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                          <!-- <CheckIcon class="w-6 h-6 text-green-600" aria-hidden="true" /> -->
                        </div>
                        <div class="mt-3 text-center sm:mt-5">
                          <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                            Payment successful
                          </DialogTitle>
                          <div class="mt-2">
                            <p class="text-sm text-gray-500">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Consequatur amet labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-5 sm:mt-6">
                        <button
                          type="button"
                          class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                          @click="open = false"
                        >
                          Go back to dashboard
                        </button>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>
