<template>
  <div class="tickets-list">
    <TicketsListItem
      v-for="ticket in ticketsStore.filteredTickets"
      :key="ticket.id"
      :ticket="ticket"
    />
  </div>
</template>

<script setup lang="ts">
import { useTicketsStore } from '../../stores/tickets.store';
import TicketsListItem from './TicketsListItem.vue';

const ticketsStore = useTicketsStore();
</script>

<style lang="scss" scoped>
.tickets-list {
  display: flex;
  flex-direction: column;
  margin-top: vars.$margin-s;
  row-gap: vars.$margin-s;
}
</style>
