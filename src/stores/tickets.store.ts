import { TicketStatus } from '../enums';
import { defineStore } from 'pinia';
import { getTicketById, getTickets } from '../services/tickets.service';
import { Ticket } from '../models';
import { LocalStorage } from '../enums/local-storage.enum';
import { parseIsoDateToDateTime } from '../helpers';

export interface TicketStoreState {
  tickets: Ticket[];
  selectedStatus: TicketStatus | null;
  isLoading: boolean;
  error: string | null;
}

const baseState = (): TicketStoreState => ({
  tickets: [],
  selectedStatus: null,
  isLoading: false,
  error: null
});

export const useTicketsStore = defineStore('tickets', {
  state: baseState,
  persist: {
    key: LocalStorage.TICKETS,
    pick: ['tickets'],
    afterHydrate: (ctx) => {
      ctx.store.tickets = ctx.store.tickets.map((ticket: Ticket) => ({
        ...ticket,
        createdAt: parseIsoDateToDateTime(ticket.createdAt as unknown as string)
      }));
    }
  },
  actions: {
    async fetchTickets() {
      this.isLoading = true;
      this.error = null;
      try {
        this.tickets = await getTickets();
      } catch (err) {
        this.error = (err as Error).message || 'Coś poszło nie tak';
      } finally {
        this.isLoading = false;
      }
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
        this.isLoading = true;
        this.error = null;
        try {
          ticket = await getTicketById(ticketId);
          if (ticket) {
            this.tickets.push(ticket);
          }
        } catch (err) {
          this.error = (err as Error).message || 'Coś poszło nie tak';
        } finally {
          this.isLoading = false;
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
