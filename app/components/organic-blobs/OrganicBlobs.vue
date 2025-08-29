<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  height?: string
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  tertiaryColor?: string
  quaternaryColor?: string
  animate?: boolean
  intensity?: 'subtle' | 'medium' | 'strong'
  blobCount?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  height: '200px',
  primaryColor: 'var(--tea-green)',
  secondaryColor: 'var(--verdigris)',
  accentColor: 'var(--celadon)',
  tertiaryColor: 'var(--viridian)',
  quaternaryColor: 'var(--bone)',
  animate: true,
  intensity: 'medium',
  blobCount: 10,
  class: ''
})

const containerClasses = computed(() => {
  return [
    'w-full relative overflow-hidden',
    props.class
  ].filter(Boolean).join(' ')
})

const intensityOpacity = computed(() => {
  const opacityMap = {
    subtle: '0.4',
    medium: '0.6',
    strong: '0.8'
  }
  return opacityMap[props.intensity]
})

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min

const generateRandomBorderRadius = () => {
  const values = Array.from({ length: 8 }, () => Math.floor(randomBetween(35, 65)))
  return `${values[0]}% ${values[1]}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`
}

const blobConfigs = computed(() => {
  const colors = [
    props.primaryColor,
    props.secondaryColor,
    props.accentColor,
    props.tertiaryColor,
    props.quaternaryColor
  ]

  const animationTypes = ['float', 'float-reverse', 'drift', 'gentle-float']

  return Array.from({ length: props.blobCount }, (_, index) => {
    const size = randomBetween(30, 100)
    const aspectRatio = randomBetween(0.8, 1.2)

    return {
      id: `blob-${index}`,
      width: `${size}px`,
      height: `${size * aspectRatio}px`,
      top: `${randomBetween(-5, 85)}%`,
      left: `${randomBetween(-5, 85)}%`,
      color: colors[index % colors.length],
      borderRadius: generateRandomBorderRadius(),
      animationDuration: `${randomBetween(8, 16)}s`,
      animationDelay: `${randomBetween(0, 6)}s`,
      animationType: animationTypes[Math.floor(randomBetween(0, animationTypes.length))],
      transform: `rotate(${randomBetween(0, 360)}deg)`
    }
  })
})
</script>

<template>
  <div
      :class="containerClasses"
      :style="{ height: props.height, zIndex: -2, position: 'absolute' }"
  >
    <div class="absolute inset-0">
      <div
          v-for="blob in blobConfigs"
          :key="blob.id"
          class="absolute rounded-full"
          :class="animate ? `animate-${blob.animationType}` : ''"
          :style="{
          width: blob.width,
          height: blob.height,
          top: blob.top,
          left: blob.left,
          background: blob.color,
          borderRadius: blob.borderRadius,
          opacity: intensityOpacity,
          animationDuration: blob.animationDuration,
          animationDelay: blob.animationDelay,
          transform: blob.transform
        }"
      ></div>
    </div>

    <slot />
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-8px) rotate(1deg) scale(1.02);
  }
  50% {
    transform: translateY(-12px) rotate(-1deg) scale(0.98);
  }
  75% {
    transform: translateY(-6px) rotate(0.5deg) scale(1.01);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(6px) rotate(-1deg) scale(0.98);
  }
  50% {
    transform: translateY(10px) rotate(1deg) scale(1.02);
  }
  75% {
    transform: translateY(4px) rotate(-0.5deg) scale(0.99);
  }
}

@keyframes drift {
  0%, 100% {
    transform: translateX(0px) translateY(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateX(8px) translateY(-6px) rotate(1deg) scale(1.01);
  }
  50% {
    transform: translateX(-4px) translateY(-10px) rotate(-1deg) scale(0.99);
  }
  75% {
    transform: translateX(-6px) translateY(2px) rotate(0.5deg) scale(1.005);
  }
}

@keyframes gentle-float {
  0%, 100% {
    transform: translateX(0px) translateY(0px) rotate(0deg) scale(1);
  }
  33% {
    transform: translateX(-5px) translateY(-8px) rotate(-0.5deg) scale(1.01);
  }
  66% {
    transform: translateX(5px) translateY(-4px) rotate(0.5deg) scale(0.99);
  }
}

.animate-float {
  animation: float ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse ease-in-out infinite;
}

.animate-drift {
  animation: drift ease-in-out infinite;
}

.animate-gentle-float {
  animation: gentle-float ease-in-out infinite;
}
</style>