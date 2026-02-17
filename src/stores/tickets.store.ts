import { TicketStatus } from '../enums';
import { defineStore } from 'pinia';
import { getTicketById, getTickets } from '../services/tickets.service';
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
    updateTicketStatus(ticketId: number, newStatus: TicketStatus) {
      const ticket = this.tickets.find((x) => x.id === ticketId);
      if (ticket) {
        ticket.status = newStatus;
      }
    },
    updateSelectedStatuses(status: TicketStatus | null) {
      this.selectedStatus = status;
    },
    async getTicketById(ticketId: number): Promise<Ticket | undefined> {
      let ticket = this.tickets.find((x) => x.id === ticketId);
      if (!ticket) {
        ticket = await getTicketById(ticketId);
        if (ticket) {
          this.tickets.push(ticket);
        }
      }
      return ticket;
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
