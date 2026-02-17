import type { TicketDto } from '../dtos';
import { TicketPriority, TicketStatus } from '../enums';
import { parseIsoDateToDateTime } from '../helpers';
import { DateTime } from 'luxon';

export class Ticket {
  id = 0;
  customerName = '';
  subject = '';
  description = '';
  priority: TicketPriority = TicketPriority.LOW;
  status: TicketStatus = TicketStatus.NEW;
  createdAt = DateTime.now();

  fromDto(dto: TicketDto): Ticket {
    this.id = dto.id;
    this.customerName = dto.customerName;
    this.subject = dto.subject;
    this.description = dto.description;
    this.priority = dto.priority;
    this.status = dto.status;
    this.createdAt = parseIsoDateToDateTime(dto.createdAt);
    return this;
  }
}
