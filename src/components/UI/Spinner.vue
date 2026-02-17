<template>
  <div class="spinner-container">
    <svg
      class="spinner-container__spinner"
      :class="`spinner-container__spinner--${size}`"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="spinner-container__spinner__track"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="4"
      />
      <circle
        class="spinner-container__spinner__arc"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="4"
        stroke-linecap="round"
        stroke-dasharray="80 125"
      />
    </svg>
    <p class="spinner-container__text">Ładowanie...</p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg';
  }>(),
  {
    size: 'md',
  }
);
</script>

<style scoped lang="scss">
.spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: vars.$margin-m;

  &__spinner {
    animation: rotate 0.75s linear infinite;
    flex-shrink: 0;

    &--sm {
      width: 16px;
      height: 16px;
    }
    &--md {
      width: 32px;
      height: 32px;
    }
    &--lg {
      width: 48px;
      height: 48px;
    }

    &__track {
      stroke: vars.$border-color;
    }

    &__arc {
      stroke: vars.$primary-color;
      transform-origin: center;
    }
  }

  &__text {
    font-size: vars.$font-size-m;
    color: vars.$text-secondary;
    font-style: italic;
  }
}
</style>
