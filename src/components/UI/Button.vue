<template>
  <button
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`, { 'btn--icon': !!$slots.icon }]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <span v-if="$slots.icon" class="btn__icon">
      <slot name="icon" />
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'outlined' | 'ghost' | 'error';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
  }
);
</script>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: vars.$margin-s;
  font-family: inherit;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  border-radius: vars.$radius-m;
  transition: all vars.$transition-fast;
  border: 1px solid transparent;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &--sm {
    padding: vars.$padding-xs vars.$padding-m;
    font-size: vars.$font-size-s;
  }

  &--md {
    padding: vars.$padding-m vars.$padding-xl;
    font-size: vars.$font-size-m;
  }

  &--lg {
    padding: vars.$padding-l vars.$padding-xl;
    font-size: vars.$font-size-l;
  }

  &--primary {
    background-color: vars.$primary-color;
    border-color: vars.$primary-color;
    color: #fff;
    box-shadow: vars.$shadow-sm;

    &:hover {
      background-color: vars.$primary-hover;
      border-color: vars.$primary-hover;
      box-shadow: vars.$shadow-md;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &--outlined {
    background-color: vars.$background-light;
    border-color: vars.$border-color;
    color: vars.$text-secondary;
    box-shadow: vars.$shadow-sm;

    &:hover {
      background-color: vars.$background-hover;
      border-color: vars.$border-hover;
      color: vars.$text-primary;
      box-shadow: vars.$shadow-md;
    }
  }

  &--ghost {
    background-color: transparent;
    border-color: transparent;
    color: vars.$text-secondary;

    &:hover {
      background-color: vars.$background-hover;
      color: vars.$text-primary;
    }
  }

  &--error {
    background-color: vars.$priority-high-bg;
    border-color: vars.$priority-high-border;
    color: vars.$priority-high;
    box-shadow: vars.$shadow-sm;

    &:hover {
      background-color: vars.$priority-high;
      border-color: vars.$priority-high;
      color: #fff;
      box-shadow: vars.$shadow-md;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
}
</style>
