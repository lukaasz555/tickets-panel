import { TicketPriority, TicketStatus } from '../enums';
import type { TicketDto } from '../dtos';

export const mockTickets: TicketDto[] = [
  {
    id: 21523,
    customerName: 'Jan Nowak',
    subject: 'Problem z logowaniem',
    description: 'Nie mogę się zalogować do mojego konta. Proszę o pomoc.',
    priority: TicketPriority.HIGH,
    status: TicketStatus.NEW,
    createdAt: '2026-02-14T08:23:14.000Z'
  },
  {
    id: 18235,
    customerName: 'Anna Kowalska',
    subject: 'Błąd podczas składania zamówienia',
    description:
      'Podczas próby złożenia zamówienia pojawia się błąd. Proszę o rozwiązanie tego problemu.',
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.CLOSED,
    createdAt: '2026-02-05T16:45:02.000Z'
  },
  {
    id: 19384,
    customerName: 'Piotr Wiśniewski',
    subject: 'Prośba o aktualizację danych',
    description:
      'Chciałbym zaktualizować moje dane kontaktowe. Proszę o instrukcje.',
    priority: TicketPriority.LOW,
    status: TicketStatus.IN_PROGRESS,
    createdAt: '2026-02-11T11:12:33.000Z'
  },
  {
    id: 20456,
    customerName: 'Katarzyna Zielińska',
    subject: 'Problem z płatnością',
    description:
      'Moja płatność została odrzucona, mimo że mam wystarczające środki. Proszę o pomoc.',
    priority: TicketPriority.HIGH,
    status: TicketStatus.NEW,
    createdAt: '2026-02-16T21:05:47.000Z'
  },
  {
    id: 21789,
    customerName: 'Marek Lewandowski',
    subject: 'Błąd w aplikacji mobilnej',
    description:
      'Aplikacja mobilna często się zawiesza. Proszę o rozwiązanie tego problemu.',
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.IN_PROGRESS,
    createdAt: '2026-02-09T09:30:55.000Z'
  },
  {
    id: 22345,
    customerName: 'Ewa Kaczmarek',
    subject: 'Prośba o zwrot pieniędzy',
    description: 'Jak w temacie',
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.IN_PROGRESS,
    createdAt: '2026-02-02T14:18:09.000Z'
  },
  {
    id: 23012,
    customerName: 'Tomasz Nowicki',
    subject: 'Problem z kontaktem',
    description:
      'Nie mogę się skontaktować z działem obsługi klienta. Proszę o pomoc.',
    priority: TicketPriority.LOW,
    status: TicketStatus.NEW,
    createdAt: '2026-02-13T07:55:41.000Z'
  },
  {
    id: 34534,
    customerName: 'Ewa Kaczmarek',
    subject: 'Problem z aktualizacją profilu',
    description: 'Nie mogę zaktualizować mojego profilu. Proszę o pomoc.',
    priority: TicketPriority.HIGH,
    status: TicketStatus.NEW,
    createdAt: '2026-02-15T18:42:26.000Z'
  },
  {
    id: 35678,
    customerName: 'Adam Nowak',
    subject: 'Błąd podczas rejestracji',
    description:
      'Podczas próby rejestracji pojawia się błąd. Proszę o rozwiązanie tego problemu.',
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.IN_PROGRESS,
    createdAt: '2026-02-12T12:01:19.000Z'
  },
  {
    id: 34345,
    customerName: 'Test Test',
    subject: 'Testowy ticket',
    description: 'To jest testowy ticket do celów demonstracyjnych.',
    priority: TicketPriority.LOW,
    status: TicketStatus.CLOSED,
    createdAt: '2026-02-07T10:10:10.000Z'
  }
];
