<script setup>
import SanityCardGridComponent from "@/components/sanity/card-grid-component/SanityCardGridComponent.vue";

defineProps({content: Object})

const components = {
  types: {
    cardGridComponent: ({ value }) => h(SanityCardGridComponent, { cards: value?.cards, heading: value?.heading }),
  },
}
</script>
<template>
  <SanityContent :value="content" :components="components" />
</template>