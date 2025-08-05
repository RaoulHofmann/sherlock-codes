<script setup lang="ts">
interface Props {
  fixed?: boolean
  transparent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fixed: false,
  transparent: false
})

const headerClasses = computed(() => {
  let classes = 'w-full z-50 transition-all duration-300'

  if (props.fixed) {
    classes += ' fixed top-0 left-0'
  }

  if (props.transparent) {
    classes += ' bg-transparent backdrop-blur-md border-b border-border/50'
  } else {
    classes += ' bg-background/95 backdrop-blur-sm border-b border-border'
  }

  return classes
})

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header :class="headerClasses" >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-xl font-bold text-secondary">Sherlock Codes</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
<!--        <nav class="hidden md:flex items-center space-x-8">-->
<!--          <NuxtLink-->
<!--              to="#services"-->
<!--              class="text-muted-foreground hover:text-foreground transition-colors duration-200"-->
<!--          >-->
<!--            Services-->
<!--          </NuxtLink>-->
<!--          <NuxtLink-->
<!--              to="#about-me"-->
<!--              class="text-muted-foreground hover:text-foreground transition-colors duration-200"-->
<!--          >-->
<!--            About-->
<!--          </NuxtLink>-->
<!--        </nav>-->

        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink
              :to="{ hash: '#contact-me' }"
              class="px-4 py-2 rounded-md font-medium detective-cta hover:detective-cta:hover"
          >
            Get Started
          </NuxtLink>
        </div>

        <div class="md:hidden">
          <button
              class="text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Toggle mobile menu"
              @click="toggleMobileMenu"
          >
            <Icon
                :name="mobileMenuOpen ? 'material-symbols:cancel' : 'material-symbols:menu-rounded'"
                class="h-6 w-6"
            />
          </button>
        </div>
      </div>

      <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden mt-2 pt-2">
          <nav class="flex flex-col space-y-4 pb-4">
<!--            <NuxtLink-->
<!--                to="#services"-->
<!--                class="text-muted-foreground hover:text-foreground transition-colors duration-200"-->
<!--                @click="mobileMenuOpen = false"-->
<!--            >-->
<!--              Services-->
<!--            </NuxtLink>-->
<!--            <NuxtLink-->
<!--                to="#about-me"-->
<!--                class="text-muted-foreground hover:text-foreground transition-colors duration-200"-->
<!--                @click="mobileMenuOpen = false"-->
<!--            >-->
<!--              About-->
<!--            </NuxtLink>-->
            <NuxtLink
                :to="{ hash: '#contact-me' }"
                class="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors duration-200 text-center"
                @click="mobileMenuOpen = false"
            >
              Get Started
            </NuxtLink>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>