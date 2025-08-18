<script setup lang="ts">
import type {SanityDocument} from "@sanity/client";
import {SanityCustomContent} from "@RaoulHofmann/sherlocks-sanity-library";

//const {data: home} = await useAsyncData(() => queryCollection('content').path('/').first())

const PAGE_QUERY = groq`*[
  _type == "basicPage"
  && slug.current == "/"][0]{
    title,
    subtitle,
    slug,
    body[]{
      ...,
      _type == "reference" => @->,
      _type == "image" => {
        asset->{
          _id,
          url
        }
      }
    }
  }`;

const {data: page} = await useLazySanityQuery<SanityDocument>(PAGE_QUERY);

useSeoMeta({
  title: page.value?.title || "Sherlock Codes: Code Detective & Software Consultant | Perth WA",
  description: "Code cleanup and software consulting in Perth, Western Australia. I solve messy codebases, reduce technical debt, and improve maintainability across PHP, Laravel, Vue.js, Next.js, and Node.js projects.",
})
</script>

<template>
  <main style="position: relative">
    <Hero v-if="page?.title" :title="page.title" :description="page?.subtitle"/>
    <Container class="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-3 flex justify-center flex-col">
      <SanityCustomContent v-if="page?.body" :content="page?.body"/>
    </Container>
    <!--    <ContentRenderer v-if="home" :value="home" style="position: relative"/>-->
    <!--    <div v-else>Home not found</div>-->
  </main>
</template>