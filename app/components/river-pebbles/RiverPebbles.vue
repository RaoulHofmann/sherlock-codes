<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  height?: string
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  tertiaryColor?: string
  density?: 'sparse' | 'medium' | 'dense'
  animate?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  height: '200px',
  primaryColor: 'var(--tea-green)',
  secondaryColor: 'var(--verdigris)',
  accentColor: 'var(--celadon)',
  tertiaryColor: 'var(--viridian)',
  density: 'medium',
  animate: false,
  class: ''
})

const containerClasses = computed(() => {
  return [
    'w-full relative shadow-xl overflow-hidden',
    props.class
  ].filter(Boolean).join(' ')
})

const pebbleConfigs = computed(() => {
  const configs = {
    sparse: [
      { width: '30px', height: '25px', top: '15%', left: '80%', borderRadius: '60% 40% 50% 50%', color: 'primaryColor' },
      { width: '40px', height: '35px', top: '70%', left: '60%', borderRadius: '40% 60% 70% 30%', color: 'accentColor' },
      { width: '25px', height: '22px', top: '80%', left: '10%', borderRadius: '50% 50% 60% 40%', color: 'secondaryColor' }
    ],
    medium: [
      { width: '30px', height: '25px', top: '15%', left: '80%', borderRadius: '60% 40% 50% 50%', color: 'primaryColor' },
      { width: '20px', height: '20px', top: '40%', left: '20%', borderRadius: '50%', color: 'secondaryColor' },
      { width: '40px', height: '35px', top: '70%', left: '60%', borderRadius: '40% 60% 70% 30%', color: 'accentColor' },
      { width: '15px', height: '18px', top: '25%', left: '40%', borderRadius: '70% 30% 40% 60%', color: 'tertiaryColor' },
      { width: '25px', height: '22px', top: '80%', left: '10%', borderRadius: '50% 50% 60% 40%', color: 'primaryColor' },
      { width: '18px', height: '16px', top: '55%', left: '85%', borderRadius: '45% 55% 35% 65%', color: 'secondaryColor' }
    ],
    dense: [
      { width: '30px', height: '25px', top: '15%', left: '80%', borderRadius: '60% 40% 50% 50%', color: 'primaryColor' },
      { width: '20px', height: '20px', top: '40%', left: '20%', borderRadius: '50%', color: 'secondaryColor' },
      { width: '40px', height: '35px', top: '70%', left: '60%', borderRadius: '40% 60% 70% 30%', color: 'accentColor' },
      { width: '15px', height: '18px', top: '25%', left: '40%', borderRadius: '70% 30% 40% 60%', color: 'tertiaryColor' },
      { width: '25px', height: '22px', top: '80%', left: '10%', borderRadius: '50% 50% 60% 40%', color: 'primaryColor' },
      { width: '18px', height: '16px', top: '55%', left: '85%', borderRadius: '45% 55% 35% 65%', color: 'secondaryColor' },
      { width: '22px', height: '20px', top: '10%', left: '30%', borderRadius: '55% 45% 65% 35%', color: 'accentColor' },
      { width: '12px', height: '14px', top: '90%', left: '40%', borderRadius: '65% 35% 45% 55%', color: 'tertiaryColor' },
      { width: '28px', height: '24px', top: '50%', left: '5%', borderRadius: '40% 60% 50% 50%', color: 'primaryColor' },
      { width: '16px', height: '18px', top: '35%', left: '70%', borderRadius: '55% 45% 40% 60%', color: 'secondaryColor' }
    ]
  }
  return configs[props.density]
})

const getColorValue = (colorKey: string) => {
  const colorMap: Record<string, string> = {
    primaryColor: props.primaryColor,
    secondaryColor: props.secondaryColor,
    accentColor: props.accentColor,
    tertiaryColor: props.tertiaryColor
  }
  return colorMap[colorKey]
}
</script>

<template>
  <div
      :class="containerClasses"
      :style="{ height: props.height, zIndex: -1, position: 'absolute' }"
  >
    <!-- River Pebbles Background -->
    <div class="absolute inset-0 bg-[var(--eggshell)]">
      <div
          v-for="(pebble, index) in pebbleConfigs"
          :key="index"
          class="absolute opacity-50"
          :class="animate ? 'animate-pulse' : ''"
          :style="{
          width: pebble.width,
          height: pebble.height,
          top: pebble.top,
          left: pebble.left,
          borderRadius: pebble.borderRadius,
          background: getColorValue(pebble.color),
          animationDelay: animate ? `${index * 0.5}s` : '0s',
          animationDuration: animate ? `${3 + (index % 3)}s` : '0s'
        }"
      ></div>
    </div>

    <slot />
  </div>
</template>