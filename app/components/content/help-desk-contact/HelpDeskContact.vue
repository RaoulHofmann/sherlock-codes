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
  <div ref="containerRef" class="youtrack-form-wrapper"/>
</template>

<style scoped>
.youtrack-form-wrapper {
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
  margin-top: 2rem;
  background: var(--card);
  border-top: 1px solid var(--copper-rich);
  position: relative;
}

/* Target the YouTrack form structure */
.youtrack-form-wrapper :deep(form) {
  width: 100%;
  max-width: 600px;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  position: relative;
  overflow: hidden;
}

/* Form header styling */
.youtrack-form-wrapper :deep(form)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--copper-rich), var(--accent), var(--copper-rich));
}

/* Form title */
.youtrack-form-wrapper :deep(h1) {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--foreground);
  margin: 0 0 2rem 0;
  letter-spacing: -0.025em;
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

/* Input wrapper styling */
.youtrack-form-wrapper :deep(div[data-test-title]) {
  margin-bottom: 1.5rem;
}

/* Label styling */
.youtrack-form-wrapper :deep(label) {
  display: block;
  margin-bottom: 0.5rem;
}

.youtrack-form-wrapper :deep(label span) {
  font-weight: 600;
  color: var(--foreground);
  font-size: 0.875rem;
}

/* Input and textarea styling */
.youtrack-form-wrapper :deep(input),
.youtrack-form-wrapper :deep(textarea) {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border);
  border-radius: 8px;
  background: var(--background);
  color: var(--foreground);
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  line-height: 1.5;
}

.youtrack-form-wrapper :deep(input:focus),
.youtrack-form-wrapper :deep(textarea:focus) {
  border-color: var(--copper-rich);
  box-shadow: 0 0 0 3px rgb(var(--copper-rich) / 0.1);
  outline: none;
}

.youtrack-form-wrapper :deep(textarea) {
  min-height: 120px;
  resize: vertical;
}

/* Container styling for inputs */
.youtrack-form-wrapper :deep(.container_d02a) {
  position: relative;
}

/* reCAPTCHA wrapper styling */
.youtrack-form-wrapper :deep(div[id*="captcha"]),
.youtrack-form-wrapper :deep(.captchaWrapper__bacc) {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

/* Submit button styling */
.youtrack-form-wrapper :deep(button[type="submit"]) {
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--copper-rich), var(--accent));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
}

.youtrack-form-wrapper :deep(button[type="submit"]:hover:not(:disabled)) {
  transform: translateY(-1px);
  box-shadow: 0 8px 16px -4px rgb(0 0 0 / 0.3);
}

.youtrack-form-wrapper :deep(button[type="submit"]:disabled) {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Button content styling */
.youtrack-form-wrapper :deep(button[type="submit"] span) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

/* Form field spacing */
.youtrack-form-wrapper :deep(.block__a771) {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Ensure proper spacing for wrapper elements */
.youtrack-form-wrapper :deep(.wrapper__bb06) {
  width: 100%;
}

/* Style the outer container for inputs */
.youtrack-form-wrapper :deep(.outerContainer_d799) {
  width: 100%;
}

/* Success/error message styling (if any) */
.youtrack-form-wrapper :deep(.message) {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
}

.youtrack-form-wrapper :deep(.success) {
  background: rgb(34 197 94 / 0.1);
  color: rgb(22 163 74);
  border: 1px solid rgb(34 197 94 / 0.2);
}

.youtrack-form-wrapper :deep(.error) {
  background: rgb(239 68 68 / 0.1);
  color: rgb(220 38 38);
  border: 1px solid rgb(239 68 68 / 0.2);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .youtrack-form-wrapper {
    padding: 2rem 1rem;
  }

  .youtrack-form-wrapper :deep(form) {
    padding: 1.5rem;
    border-radius: 8px;
  }

  .youtrack-form-wrapper :deep(h1) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .youtrack-form-wrapper :deep(textarea) {
    min-height: 100px;
  }
}

@media (max-width: 480px) {
  .youtrack-form-wrapper {
    padding: 1.5rem 0.75rem;
    margin-top: 1rem;
  }

  .youtrack-form-wrapper :deep(form) {
    padding: 1.25rem;
  }

  .youtrack-form-wrapper :deep(h1) {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
}

/* Dark mode considerations */
@media (prefers-color-scheme: dark) {
  .youtrack-form-wrapper :deep(input),
  .youtrack-form-wrapper :deep(textarea) {
    background: var(--background);
    border-color: var(--border);
    color: var(--foreground);
  }

  .youtrack-form-wrapper :deep(input::placeholder),
  .youtrack-form-wrapper :deep(textarea::placeholder) {
    color: var(--muted-foreground);
  }
}
</style>