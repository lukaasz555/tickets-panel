<template>
  <div class="tickets-card-list">
    <div
      v-if="ticketsStore.isLoading"
      v-for="n in 5"
      :key="n"
      class="tickets-card-list__card tickets-card-list__card--skeleton"
    >
      <div
        class="tickets-card-list__skeleton-line tickets-card-list__skeleton-line--short"
      />
      <div class="tickets-card-list__skeleton-line" />
      <div
        class="tickets-card-list__skeleton-line tickets-card-list__skeleton-line--medium"
      />
    </div>

    <div v-else-if="ticketsStore.error" class="tickets-card-list__error">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 6v4m0 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>{{ ticketsStore.error }}</span>
    </div>

    <div
      v-else-if="!ticketsStore.filteredTickets.length"
      class="tickets-card-list__empty"
    >
      Lista jest pusta
    </div>

    <div
      v-for="ticket in ticketsStore.filteredTickets"
      :key="ticket.id"
      class="tickets-card-list__card"
      @click="emit('card-click', ticket)"
    >
      <div class="tickets-card-list__card-top">
        <span class="tickets-card-list__card-id">#{{ ticket.id }}</span>
        <TicketStatusBadge :status="ticket.status" size="sm" />
      </div>

      <div class="tickets-card-list__card-body">
        <p class="tickets-card-list__card-customer">{{ ticket.customerName }}</p>
        <h3 class="tickets-card-list__card-subject">{{ ticket.subject }}</h3>
      </div>

      <div class="tickets-card-list__card-footer">
        <TicketPriorityBadge :priority="ticket.priority" size="sm" />
        <span class="tickets-card-list__card-date">
          {{ ticket.createdAt.toFormat('dd MMM yyyy') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from '../../models';
import { useTicketsStore } from '../../stores/tickets.store';
import TicketStatusBadge from './TicketStatusBadge.vue';
import TicketPriorityBadge from './TicketPriorityBadge.vue';

const emit = defineEmits<{
  (e: 'card-click', ticket: Ticket): void;
}>();

const ticketsStore = useTicketsStore();
</script>

<style scoped lang="scss">
.tickets-card-list {
  display: flex;
  flex-direction: column;
  gap: vars.$margin-m;

  @media (min-width: vars.$breakpoint-mobile) {
    display: none;
  }

  &__empty {
    text-align: center;
    padding: vars.$padding-xl;
    background-color: vars.$background-light;
    border-radius: vars.$radius-l;
    color: vars.$text-muted;
    font-size: vars.$font-size-m;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: vars.$margin-m;
    background-color: vars.$background-light;
    border-radius: vars.$radius-l;
    padding: vars.$padding-l;
    box-shadow: vars.$shadow-md;
    cursor: pointer;
    transition: all vars.$transition-fast;

    &:hover {
      box-shadow: vars.$shadow-lg;
      transform: translateY(-2px);
    }

    &--skeleton {
      cursor: default;
      pointer-events: none;
      gap: vars.$margin-m;

      &:hover {
        box-shadow: vars.$shadow-md;
        transform: none;
      }
    }
  }

  &__card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__card-id {
    font-size: vars.$font-size-s;
    font-weight: 600;
    color: vars.$text-muted;
  }

  &__card-body {
    display: flex;
    flex-direction: column;
    gap: vars.$margin-xs;
  }

  &__card-customer {
    font-size: vars.$font-size-s;
    color: vars.$text-secondary;
    margin: 0;
  }

  &__card-subject {
    font-size: vars.$font-size-m;
    font-weight: 600;
    color: vars.$text-primary;
    margin: 0;
    line-height: 1.4;
  }

  &__card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: vars.$padding-s;
    border-top: 1px solid vars.$border-color;
  }

  &__card-date {
    font-size: vars.$font-size-xs;
    color: vars.$text-muted;
  }
  &__skeleton-line {
    height: 16px;
    width: 100%;
    border-radius: vars.$radius-xs;
    background: linear-gradient(
      90deg,
      vars.$border-color 25%,
      vars.$background-hover 50%,
      vars.$border-color 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    &--short {
      width: 30%;
    }
    &--medium {
      width: 55%;
    }
  }

  &__error {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: vars.$margin-s;
    padding: vars.$padding-xl;
    background-color: vars.$background-light;
    border-radius: vars.$radius-l;
    box-shadow: vars.$shadow-md;
    color: vars.$priority-high;
    font-size: vars.$font-size-m;
    font-weight: 500;
  }
}
</style>
