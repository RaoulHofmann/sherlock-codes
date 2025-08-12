<script setup lang="ts">
import type {SanityDocument} from "@sanity/client";
import SanityCustomContent from "@/components/sanity/custom-content/SanityCustomContent.vue";

//const {data: home} = await useAsyncData(() => queryCollection('content').path('/').first())

const PAGE_QUERY = groq`*[
  _type == "basicPage"
  && slug.current == "/"][0]{
    title,
    subtitle,
    slug,
    body[]{
      ...,
      _type == "reference" => @->
    }
  }`;

const {data: page} = await useLazySanityQuery<SanityDocument>(PAGE_QUERY);

console.log(page.value)

useSeoMeta({
  title: page.value?.title || "Sherlock Codes: Code Detective & Software Consultant | Perth WA",
  description: "Code cleanup and software consulting in Perth, Western Australia. I solve messy codebases, reduce technical debt, and improve maintainability across PHP, Laravel, Vue.js, Next.js, and Node.js projects.",
})
</script>

<template>
  <main style="position: relative">
    <Hero v-if="page?.title" :title="page.title" :description="page?.subtitle" />
    <SanityCustomContent v-if="page?.body" :content="page?.body" />
<!--    <ContentRenderer v-if="home" :value="home" style="position: relative"/>-->
<!--    <div v-else>Home not found</div>-->
  </main>
</template>