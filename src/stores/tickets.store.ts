import { TicketStatus } from '../enums';
import { defineStore } from 'pinia';
import { getTickets } from '../services/tickets.service';
import { Ticket } from '../models';

interface TicketStoreState {
  tickets: Ticket[];
  selectedStatus: TicketStatus | null;
}

const baseState = (): TicketStoreState => ({
  tickets: [],
  selectedStatus: null
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
        ticket.status = newStatus;
      }
    },
    updateSelectedStatuses(status: TicketStatus | null) {
      this.selectedStatus = status;
    }
  },
  getters: {
    filteredTickets: (state) => {
      if (!state.selectedStatus) {
        return state.tickets;
      }
      return state.tickets.filter(
        (ticket) => ticket.status === state.selectedStatus
      );
    }
  }
});
