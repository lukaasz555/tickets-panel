import { TicketStatus } from '../enums';
import { defineStore } from 'pinia';
import { getTickets } from '../services/tickets.service';
import { Ticket } from '../models';

interface TicketStoreState {
  tickets: Ticket[];
  selectedStatuses: TicketStatus[];
}

const baseState = (): TicketStoreState => ({
  tickets: [],
  selectedStatuses: []
});

export const useTicketsStore = defineStore('tickets', {
  state: baseState,
  actions: {
    async fetchTickets() {
      this.tickets = await getTickets();
    },
    async updateTicketStatus(ticketId: number, newStatus: TicketStatus) {
      const ticket = this.tickets.find((x) => x.id === ticketId);
      if (ticket) {
        ticket.setStatus(newStatus);
      }
    }
  },
  getters: {
    filteredTickets: (state) => {
      if (!state.selectedStatuses.length) {
        return state.tickets;
      }
      return state.tickets.filter((ticket) =>
        state.selectedStatuses.includes(ticket.status)
      );
    }
  }
});
