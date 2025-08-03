<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  className?: string
}>()
</script>

<template>
  <section :class="['pt-6 md:pt-12 lg:pt-24 flex justify-center', className]">
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center space-y-4 text-center">
        <div class="space-y-2">
          <h1 v-if="title" class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            {{ title }}
          </h1>
          <p v-if="description" class="mx-auto max-w-[800px] text-gray-600 md:text-xl dark:text-gray-400">
            {{ description }}
          </p>
        </div>
        <div v-if="$slots.extra" class="w-full max-w-sm space-y-2">
          <slot name="extra" />
        </div>
      </div>
    </div>
  </section>
</template>