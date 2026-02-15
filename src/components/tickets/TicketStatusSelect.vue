<template>
  <Select
    v-model="ticketsStore.selectedStatus"
    :options="selectItems"
    label="Wybierz status"
    @update:model-value="ticketsStore.updateSelectedStatuses"
  />
</template>

<script lang="ts" setup>
import { TicketStatus } from '../../enums';
import { useTicketsStore } from '../../stores/tickets.store';
import Select from '../UI/Select.vue';

const ticketsStore = useTicketsStore();

const selectItems = [
  {
    value: TicketStatus.CLOSED,
    label: 'Zamknięte',
  },
  {
    value: TicketStatus.IN_PROGRESS,
    label: 'W trakcie',
  },
  {
    value: TicketStatus.NEW,
    label: 'Nowe',
  },
  {
    value: null,
    label: 'Wszystkie',
  },
];
</script>
