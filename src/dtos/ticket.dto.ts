import type { TicketPriority, TicketStatus } from '../enums';

export interface TicketDto {
  id: number;
  customerName: string;
  subject: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
}
