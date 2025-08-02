<script setup lang="ts">
interface Props {
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  height?: string
  backgroundColor?: string
  gradientFrom?: string
  gradientTo?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  corner: 'bottom-right',
  size: 'lg',
  height: '200px',
  backgroundColor: undefined,
  gradientFrom: 'var(--pumpkin)',
  gradientTo: 'var(--white)',
  class: ''
})

// Generate clip-path based on corner and size
const clipPath = computed(() => {
  const sizeMap = {
    sm: '50px',
    md: '100px',
    lg: '200px',
    xl: '300px'
  }

  const cutoutSize = sizeMap[props.size]

  switch (props.corner) {
    case 'top-left':
      return `polygon(${cutoutSize} 0, 100% 0, 100% 100%, 0 100%, 0 ${cutoutSize})`
    case 'top-right':
      return `polygon(0 0, calc(100% - ${cutoutSize}) 0, 100% ${cutoutSize}, 100% 100%, 0 100%)`
    case 'bottom-left':
      return `polygon(0 0, 100% 0, 100% 100%, ${cutoutSize} 100%, 0 calc(100% - ${cutoutSize}))`
    case 'bottom-right':
      return `polygon(0 0, 100% 0, 100% calc(100% - ${cutoutSize}), calc(100% - ${cutoutSize}) 100%, 0 100%)`
    default:
      return `polygon(0 0, calc(100% - ${cutoutSize}) 0, 100% ${cutoutSize}, 100% 100%, 0 100%)`
  }
})

const containerClasses = computed(() => {
  return [
    'w-full relative shadow-xl',
    props.class
  ].filter(Boolean).join(' ')
})

const backgroundStyle = computed(() => {
  if (props.backgroundColor) {
    return { backgroundColor: props.backgroundColor }
  }

  return {
    background: `linear-gradient(to bottom right, ${props.gradientFrom}, ${props.gradientTo})`
  }
})
</script>

<template>
  <div
      :class="containerClasses"
      :style="{ clipPath, ...backgroundStyle, height: props.height, zIndex: -1, position: 'absolute' }"
  >
    <slot />
  </div>
</template>