<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>

<template>
  <div
    :class="[
      'container mx-auto px-4 sm:px-6 lg:px-8',
      className
    ]"
  >
    <slot />
  </div>
</template>