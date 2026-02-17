import { Ticket } from '../models';
import { mockTickets } from '../data/mock-tickets';

export async function getTickets(shouldFail = false): Promise<Ticket[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Failed to fetch tickets'));
      }
      const tickets = mockTickets.map((x) => new Ticket().fromDto(x));
      resolve(tickets);
    }, 500);
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
      reject(new Error('Ticket not found'));
    }, 500);
  });
}
