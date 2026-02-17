import { Ticket } from '../models';
import { mockTickets } from '../data/mock-tickets';
import { LocalStorage } from '../enums/local-storage.enum';
import type { TicketDto } from '../dtos';
import type { TicketStoreState } from '../stores/tickets.store';

const getTicketsFromLS = () => {
  const ticketsLs = localStorage.getItem(LocalStorage.TICKETS);
  if (!ticketsLs) return null;

  try {
    const parsed = JSON.parse(ticketsLs) as TicketStoreState;
    const resTickets = parsed.tickets as unknown as TicketDto[];
    return resTickets.length ? resTickets : null;
  } catch (err) {
    return null;
  }
};

export async function getTickets(shouldFail = false): Promise<Ticket[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Nie udało się pobrać zgłoszeń'));
      }
      const tickets = getTicketsFromLS() ?? mockTickets;
      const result = tickets.map((x) => new Ticket().fromDto(x));
      resolve(result);
    }, 700);
  });
}

export async function getTicketById(
  ticketId: number
): Promise<Ticket | undefined> {
  const ticket = mockTickets.find((x) => x.id === ticketId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ticket) {
        const transformed = new Ticket().fromDto(ticket);
        resolve(transformed);
      }
      reject(new Error('Nie znaleziono zgłoszenia o podanym ID'));
    }, 700);
  });
}
