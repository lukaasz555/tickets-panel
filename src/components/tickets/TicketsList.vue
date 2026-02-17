<template>
  <div class="tickets-list">
    <div>
      <div class="tickets-list__table">
        <SimpleTable
          :headers="ticketsHeaders"
          :items="ticketsStore.filteredTickets"
          :isLoading="ticketsStore.isLoading"
          :error="ticketsStore.error"
          @rowClick="showTicketDetails"
        >
          <template #id="{ item: { id } }">
            <span style="font-weight: 600">#{{ id }}</span>
          </template>
          <template #status="{ item: { status } }">
            <TicketStatusBadge :status="status" size="sm" />
          </template>
          <template #priority="{ item: { priority } }">
            <TicketPriorityBadge :priority="priority" size="sm" />
          </template>
        </SimpleTable>
      </div>

      <TicketsCards @card-click="showTicketDetails" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from '../../models';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { RouteName } from '../../enums';
import { ticketsHeaders } from '../../data/tickets.headers';
import { useTicketsStore } from '../../stores/tickets.store';
import TicketPriorityBadge from './TicketPriorityBadge.vue';
import TicketStatusBadge from './TicketStatusBadge.vue';
import TicketsCards from './TicketsCards.vue';
import SimpleTable from '../UI/SimpleTable.vue';

const router = useRouter();
const ticketsStore = useTicketsStore();
const showTicketDetails = (ticket: Ticket) =>
  router.push({ name: RouteName.TICKET, params: { id: ticket.id } });

onMounted(() => {
  ticketsStore.fetchTickets();
});
</script>

<style scoped lang="scss">
.tickets-list {
  margin-top: vars.$margin-xl;

  &__table {
    display: none;

    @media (min-width: vars.$breakpoint-mobile) {
      display: block;
    }
  }
}
</style>
