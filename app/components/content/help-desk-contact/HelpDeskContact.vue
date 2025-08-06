<script setup lang="ts">
import { onMounted, ref } from 'vue'

const containerRef = ref<HTMLElement>()

onMounted(() => {
  if (containerRef.value) {
    // Create the script element
    const script = document.createElement('script')
    script.id = '0075689e-4ec7-46b3-98cb-e3a394391940'
    script.src = 'https://rdhofmann.youtrack.cloud/static/simplified/form/form-entry.js'
    script.setAttribute('data-yt-url', 'https://rdhofmann.youtrack.cloud')
    script.setAttribute('data-theme', 'light')
    script.setAttribute('data-lang', 'en')

    // Append to the container
    containerRef.value.appendChild(script)
  }
})
</script>

<template>
  <div ref="containerRef" style="display: flex; justify-content: center; padding-bottom: 1rem; margin-top: 2rem; background: var(--card); border-top: 1px solid var(--copper-rich);"/>
</template>