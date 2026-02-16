<template>
  <div class="tickets-view">
    <TicketsListFilters />
    <TicketsList />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import TicketsList from '../components/tickets/TicketsList.vue';
import TicketsListFilters from '../components/tickets/TicketsListFilters.vue';
import { useTicketsStore } from '../stores/tickets.store';

const ticketsStore = useTicketsStore();

onMounted(() => {
  ticketsStore.fetchTickets();
});
</script>

<style scoped lang="scss">
.tickets-view {
  display: flex;
  flex-direction: column;
  gap: vars.$margin-xl;
}
</style>
