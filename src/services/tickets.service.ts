import { Ticket } from '../models';
import { mockTickets } from '../data/mock-tickets';

export async function getTickets(): Promise<Ticket[]> {
  return new Promise((resolve) => {
    setTimeout(() => {}, 1500);
    resolve(mockTickets);
  });
}

export async function getTicketById(
  ticketId: number
): Promise<Ticket | undefined> {
  const ticket = mockTickets.find((x) => x.id === ticketId);
  return new Promise((resolve) => {
    setTimeout(() => {}, 1500);
    resolve(ticket);
  });
}
