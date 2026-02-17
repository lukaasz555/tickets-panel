<template>
  <div class="badge-container">
    <span
      class="badge-container__badge"
      :class="`badge-container__badge--${status} badge-container__badge--${size}`"
    >
      {{ getStatusLabel(status) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { TicketStatus } from '../../enums';
import { getStatusLabel } from '../../helpers';

const props = defineProps({
  status: { type: String as PropType<TicketStatus>, required: true },
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

    &--new {
      background-color: vars.$status-new-bg;
      color: vars.$status-new;
      border: 1px solid vars.$status-new-border;
    }

    &--in_progress {
      background-color: vars.$status-in-progress-bg;
      color: vars.$status-in-progress;
      border: 1px solid vars.$status-in-progress-border;
    }

    &--closed {
      background-color: vars.$status-closed-bg;
      color: vars.$status-closed;
      border: 1px solid vars.$status-closed-border;
    }
  }
}
</style>
