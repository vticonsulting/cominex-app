<script setup lang="ts">
// const { data } = await useAsyncData('hello', () => queryContent('/hello').findOne())
// const { data } = await useAsyncData('page-data', () => queryContent('/hello').findOne())

const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <div class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded">
    <!-- <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc> -->

    <!-- <ContentQuery v-slot="{ data }" path="/about/authors" :where="{ type: 'csv' }">
      <pre>{{ data }}</pre>
    </ContentQuery> -->

    <ContentRenderer v-if="data" :value="data" />

    <!-- <ContentRenderer :value="data" /> -->
    <!-- <ContentDoc path="/notes" class="prose prose-gray dark:prose-invert max-w-none">
      <template #not-found>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </template>
    </ContentDoc> -->

    <!-- <main>
      <ContentRenderer :value="data">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>

      <ContentDoc>
        <template #not-found>
          <h1>Document not found</h1>
        </template>

        <template #empty>
          <h1>Document is empty</h1>
        </template>
      </ContentDoc>
    </main> -->
  </div>
</template>
