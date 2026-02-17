<template>
  <div class="ticket-view">
    <div v-if="!ticket" class="ticket-view__loading">Ładowanie...</div>

    <div v-else class="ticket-view__container">
      <div class="ticket-view__header">
        <Button @click="goBack" variant="outlined">
          <template #icon>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
          Powrót do listy</Button
        >
        <span class="ticket-view__id">#{{ ticket.id }}</span>
      </div>

      <div class="ticket-view__card">
        <div class="ticket-view__card-header">
          <h1 class="ticket-view__title">{{ ticket.subject }}</h1>
          <div class="ticket-view__badges">
            <TicketStatusBadge :status="ticket.status" />
            <TicketPriorityBadge :priority="ticket.priority" />
          </div>
        </div>

        <div class="ticket-view__info">
          <div class="ticket-view__info-item">
            <span class="ticket-view__info-label">Klient</span>
            <span class="ticket-view__info-value">{{ ticket.customerName }}</span>
          </div>
          <div class="ticket-view__info-item">
            <span class="ticket-view__info-label">Data utworzenia</span>
            <span class="ticket-view__info-value">{{
              ticket.createdAt.toFormat('d LLLL yyyy, HH:mm')
            }}</span>
          </div>
        </div>

        <div class="ticket-view__description">
          <h3 class="ticket-view__description-title">Opis zgłoszenia</h3>
          <p class="ticket-view__description-text">{{ ticket.description }}</p>
        </div>

        <div class="ticket-view__status-update">
          <h3 class="ticket-view__status-update-title">Zmień status</h3>
          <div class="ticket-view__status-update-controls">
            <Select
              v-model="selectedStatus"
              :options="statusOptions"
              label="Nowy status"
            />
            <Button @click="updateStatus">Zapisz zmiany</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { TicketStatus, RouteName } from '../enums';
import { useTicketsStore } from '../stores/tickets.store';
import { Ticket } from '../models';
import TicketPriorityBadge from '../components/tickets/TicketPriorityBadge.vue';
import TicketStatusBadge from '../components/tickets/TicketStatusBadge.vue';
import Select from '../components/UI/Select.vue';
import Button from '../components/UI/Button.vue';

const route = useRoute();
const router = useRouter();
const ticketsStore = useTicketsStore();

const ticket = ref<Ticket | null>(null);
const selectedStatus = ref<TicketStatus | null>(null);

const statusOptions = [
  { value: TicketStatus.NEW, label: 'Nowe' },
  { value: TicketStatus.IN_PROGRESS, label: 'W trakcie' },
  { value: TicketStatus.CLOSED, label: 'Zamknięte' },
];

watch(
  () => route.params.id,
  async (newId) => {
    const fetchedTicket = await ticketsStore.getTicketById(Number(newId));
    ticket.value = fetchedTicket || null;
    if (ticket.value) {
      selectedStatus.value = ticket.value.status;
    }
  },
  { immediate: true }
);

const goBack = () => router.push({ name: RouteName.TICKETS });

const updateStatus = () => {
  if (ticket.value && selectedStatus.value) {
    ticketsStore.updateTicketStatus(ticket.value.id, selectedStatus.value);
    ticket.value.status = selectedStatus.value;
  }
};
</script>

<style scoped lang="scss">
.ticket-view {
  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    font-size: vars.$font-size-l;
    color: vars.$text-secondary;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: vars.$margin-l;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: vars.$margin-l;
  }

  &__id {
    font-size: vars.$font-size-l;
    font-weight: 600;
    color: vars.$text-secondary;
  }

  &__card {
    background-color: vars.$background-light;
    border-radius: vars.$radius-l;
    padding: vars.$padding-xl;
    box-shadow: vars.$shadow-md;
    display: flex;
    flex-direction: column;
    gap: vars.$margin-xl;
  }

  &__card-header {
    display: flex;
    flex-direction: column;
    gap: vars.$margin-l;

    @media (min-width: vars.$breakpoint-mobile) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &__title {
    font-size: vars.$font-size-xl;
    font-weight: 700;
    color: vars.$text-primary;
    margin: 0;

    @media (min-width: vars.$breakpoint-mobile) {
      font-size: vars.$font-size-xxl;
    }
  }

  &__badges {
    display: flex;
    gap: vars.$margin-m;
    flex-wrap: wrap;
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr;
    gap: vars.$margin-l;
    padding: vars.$padding-l;
    background-color: vars.$background-hover;
    border-radius: vars.$radius-m;

    @media (min-width: vars.$breakpoint-mobile) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__info-item {
    display: flex;
    flex-direction: column;
    gap: vars.$margin-xs;
  }

  &__info-label {
    font-size: vars.$font-size-s;
    font-weight: 500;
    color: vars.$text-secondary;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__info-value {
    font-size: vars.$font-size-m;
    font-weight: 500;
    color: vars.$text-primary;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: vars.$margin-m;
  }

  &__description-title {
    font-size: vars.$font-size-l;
    font-weight: 600;
    color: vars.$text-primary;
    margin: 0;
  }

  &__description-text {
    font-size: vars.$font-size-m;
    line-height: 1.6;
    color: vars.$text-secondary;
    margin: 0;
  }

  &__status-update {
    display: flex;
    flex-direction: column;
    gap: vars.$margin-l;
    padding-top: vars.$padding-l;
    border-top: 1px solid vars.$border-color;
  }

  &__status-update-title {
    font-size: vars.$font-size-l;
    font-weight: 600;
    color: vars.$text-primary;
    margin: 0;
  }

  &__status-update-controls {
    display: flex;
    flex-direction: column;
    gap: vars.$margin-l;
    align-items: stretch;

    @media (min-width: vars.$breakpoint-mobile) {
      flex-direction: row;
      align-items: flex-end;
    }
  }

  &__save-button {
    padding: vars.$padding-m vars.$padding-xl;
    background-color: vars.$primary-color;
    color: white;
    border: none;
    border-radius: vars.$radius-m;
    font-size: vars.$font-size-m;
    font-weight: 600;
    cursor: pointer;
    transition: all vars.$transition-fast;
    box-shadow: vars.$shadow-sm;
    white-space: nowrap;

    &:hover {
      background-color: vars.$primary-hover;
      box-shadow: vars.$shadow-md;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }
}
</style>
