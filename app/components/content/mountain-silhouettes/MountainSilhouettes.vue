<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  height?: string
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  layers?: number
  style?: 'rolling' | 'sharp' | 'mixed'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  height: '200px',
  primaryColor: 'var(--viridian)',
  secondaryColor: 'var(--verdigris)',
  accentColor: 'var(--tea-green)',
  layers: 3,
  style: 'rolling',
  class: '',
})

const containerClasses = computed(() => {
  return [
    'w-full relative shadow-xl overflow-hidden',
    props.class
  ].filter(Boolean).join(' ')
})

const mountainPaths = computed(() => {
  const paths = {
    rolling: [
      'polygon(0 100%, 0 60%, 20% 40%, 40% 55%, 60% 35%, 80% 50%, 100% 30%, 100% 100%)',
      'polygon(0 100%, 0 80%, 15% 65%, 35% 75%, 55% 55%, 75% 65%, 90% 45%, 100% 60%, 100% 100%)',
      'polygon(0 100%, 0 90%, 25% 75%, 45% 85%, 65% 70%, 85% 80%, 100% 70%, 100% 100%)'
    ],
    sharp: [
      'polygon(0 100%, 0 70%, 15% 30%, 25% 45%, 40% 20%, 55% 40%, 70% 25%, 85% 45%, 100% 35%, 100% 100%)',
      'polygon(0 100%, 0 85%, 20% 60%, 35% 80%, 50% 50%, 65% 75%, 80% 55%, 95% 70%, 100% 65%, 100% 100%)',
      'polygon(0 100%, 0 95%, 30% 80%, 50% 90%, 70% 75%, 90% 85%, 100% 80%, 100% 100%)'
    ],
    mixed: [
      'polygon(0 100%, 0 65%, 18% 35%, 32% 50%, 48% 25%, 65% 45%, 82% 30%, 100% 40%, 100% 100%)',
      'polygon(0 100%, 0 82%, 22% 70%, 40% 78%, 58% 58%, 76% 68%, 88% 52%, 100% 62%, 100% 100%)',
      'polygon(0 100%, 0 92%, 28% 78%, 48% 88%, 68% 73%, 88% 83%, 100% 75%, 100% 100%)'
    ]
  }
  return paths[props.style]
})

const layerColors = computed(() => {
  const colors = [props.primaryColor, props.secondaryColor, props.accentColor]
  return colors.slice(0, props.layers)
})

const layerOpacities = computed(() => {
  const baseOpacities = [0.8, 0.6, 0.4, 0.3, 0.2]
  return baseOpacities.slice(0, props.layers)
})
</script>

<template>
  <div
      :class="containerClasses"
      :style="{ height: props.height, zIndex: -1, position: 'absolute' }"
  >
    <!-- Mountain Silhouettes Background -->
    <div class="absolute inset-0">
      <div
          v-for="(color, index) in layerColors"
          :key="index"
          class="absolute bottom-0 w-full h-full"
          :style="{
          background: color,
          clipPath: mountainPaths[index],
          opacity: layerOpacities[index]
        }"
      ></div>
    </div>

    <slot />
  </div>
</template>