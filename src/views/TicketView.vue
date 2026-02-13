<template>
  <div>TODO TICKET - {{ $route.params.id }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { getTicketById } from '../services/tickets.service';
import { Ticket } from '../models';

const route = useRoute();

const ticket = ref<Ticket | null>(null);

watch(
  () => route.params.id,
  async (newId) => {
    const fetchedTicket = await getTicketById(Number(newId));
    ticket.value = fetchedTicket || null;
  },
  { immediate: true }
);
</script>
