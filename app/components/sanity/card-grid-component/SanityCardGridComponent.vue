<script setup lang="ts">
import type { SimpleCard, Card} from '~/types/sanity/cardGridComponentType';

defineProps<{
  cards?: SimpleCard | Card
  heading?: string
}>()
</script>

<template>
  <div>
    <h2 v-if="heading">{{ heading }}</h2>
    <CardGrid>
      <Card v-for="card in cards" :key="card._id" :title="card?.title"
            class="flex justify-center text-center magnifying-glass-border">
        <CardTitle v-if="card.title" class="flex items-center justify-center gap-3 mb-3 card-title">
          {{ card.title }}
        </CardTitle>
        <CardContent v-if="card.description">
          {{ card.description }}
        </CardContent>
      </Card>
    </CardGrid>
  </div>
</template>

<style scoped>

</style>