<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

console.log(home)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" style="position: relative"/>
  <div v-else>Home not found</div>
</template>