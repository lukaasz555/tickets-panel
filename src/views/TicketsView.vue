<template>
  <div class="tickets-view">
    <TicketsListFilters />
    <TicketsList />
  </div>
</template>

<script lang="ts" setup>
import TicketsList from '../components/tickets/TicketsList.vue';
import TicketsListFilters from '../components/tickets/TicketsListFilters.vue';
</script>

<style scoped lang="scss">
.tickets-view {
  display: flex;
  flex-direction: column;
  gap: vars.$margin-xl;
}
</style>
