import type { TableHeader } from '../components/interfaces/TableHeader';
import type { Ticket } from '../models';

export const ticketsHeaders: TableHeader<Ticket>[] = [
  {
    value: 'id',
    label: 'ID'
  },
  {
    value: 'customerName',
    label: 'Klient'
  },
  {
    value: 'subject',
    label: 'Temat'
  },
  {
    value: 'status',
    label: 'Status'
  },
  {
    value: 'priority',
    label: 'Priorytet'
  }
];
