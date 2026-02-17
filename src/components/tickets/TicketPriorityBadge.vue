<template>
  <div class="badge-container">
    <span
      class="badge-container__badge"
      :class="`badge-container__badge--${priority} badge-container__badge--${size}`"
    >
      {{ getPriorityLabel(priority) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { TicketPriority } from '../../enums';
import { getPriorityLabel } from '../../helpers';

const props = defineProps({
  priority: { type: String as PropType<TicketPriority>, required: true },
  size: { type: String as PropType<'sm' | 'md'>, default: 'md' },
});
</script>

<style scoped lang="scss">
.badge-container {
  display: flex;
  align-items: center;
  justify-content: center;

  &__badge {
    display: inline-block;
    padding: vars.$padding-xs vars.$padding-m;
    border-radius: vars.$radius-s;
    font-size: vars.$font-size-s;
    font-weight: 500;
    text-transform: capitalize;
    white-space: nowrap;

    &--sm {
      padding: vars.$padding-xs vars.$padding-m;
      font-size: vars.$font-size-s;
    }

    &--md {
      padding: vars.$padding-s vars.$padding-l;
      font-size: vars.$font-size-m;
    }

    &--low {
      background-color: vars.$priority-low-bg;
      color: vars.$priority-low;
      border: 1px solid vars.$priority-low-border;
    }

    &--medium {
      background-color: vars.$priority-medium-bg;
      color: vars.$priority-medium;
      border: 1px solid vars.$priority-medium-border;
    }

    &--high {
      background-color: vars.$priority-high-bg;
      color: vars.$priority-high;
      border: 1px solid vars.$priority-high-border;
    }
  }
}
</style>
