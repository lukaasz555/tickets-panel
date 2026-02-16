import { TicketPriority, TicketStatus } from '../enums';
import { DateTime } from 'luxon';

export class Ticket {
  id = 0;
  customerName = '';
  subject = '';
  description = '';
  priority: TicketPriority = TicketPriority.LOW;
  status: TicketStatus = TicketStatus.NEW;
  createdAt = DateTime.now();
}
