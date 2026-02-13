import { DateTime } from 'luxon';
import { TicketPriority, TicketStatus } from '../enums';
import { Ticket } from '../models';

export const mockTickets: Ticket[] = [
  {
    id: 21523,
    customerName: 'Jan Nowak',
    subject: 'Problem z logowaniem',
    description: 'Nie mogę się zalogować do mojego konta. Proszę o pomoc.',
    priority: TicketPriority.HIGH,
    status: TicketStatus.NEW,
    createdAt: DateTime.now().minus({ days: 3 })
  },
  {
    id: 18235,
    customerName: 'Anna Kowalska',
    subject: 'Błąd podczas składania zamówienia',
    description:
      'Podczas próby złożenia zamówienia pojawia się błąd. Proszę o rozwiązanie tego problemu.',
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.CLOSED,
    createdAt: DateTime.now().minus({ days: 12 })
  },
  {
    id: 19384,
    customerName: 'Piotr Wiśniewski',
    subject: 'Prośba o aktualizację danych',
    description:
      'Chciałbym zaktualizować moje dane kontaktowe. Proszę o instrukcje.',
    priority: TicketPriority.LOW,
    status: TicketStatus.IN_PROGRESS,
    createdAt: DateTime.now().minus({ days: 6 })
  },
  {
    id: 20456,
    customerName: 'Katarzyna Zielińska',
    subject: 'Problem z płatnością',
    description:
      'Moja płatność została odrzucona, mimo że mam wystarczające środki. Proszę o pomoc.',
    priority: TicketPriority.HIGH,
    status: TicketStatus.NEW,
    createdAt: DateTime.now().minus({ days: 1 })
  },
  {
    id: 21789,
    customerName: 'Marek Lewandowski',
    subject: 'Błąd w aplikacji mobilnej',
    description:
      'Aplikacja mobilna często się zawiesza. Proszę o rozwiązanie tego problemu.',
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.IN_PROGRESS,
    createdAt: DateTime.now().minus({ days: 8 })
  },
  {
    id: 22345,
    customerName: 'Ewa Kaczmarek',
    subject: 'Prośba o zwrot pieniędzy',
    description: 'Jak w temacie',
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.IN_PROGRESS,
    createdAt: DateTime.now().minus({ days: 15 })
  },
  {
    id: 23012,
    customerName: 'Tomasz Nowicki',
    subject: 'Problem z kontaktem',
    description:
      'Nie mogę się skontaktować z działem obsługi klienta. Proszę o pomoc.',
    priority: TicketPriority.LOW,
    status: TicketStatus.NEW,
    createdAt: DateTime.now().minus({ days: 4 })
  },
  {
    id: 34534,
    customerName: 'Ewa Kaczmarek',
    subject: 'Problem z aktualizacją profilu',
    description: 'Nie mogę zaktualizować mojego profilu. Proszę o pomoc.',
    priority: TicketPriority.HIGH,
    status: TicketStatus.NEW,
    createdAt: DateTime.now().minus({ days: 2 })
  },
  {
    id: 35678,
    customerName: 'Adam Nowak',
    subject: 'Błąd podczas rejestracji',
    description:
      'Podczas próby rejestracji pojawia się błąd. Proszę o rozwiązanie tego problemu.',
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.IN_PROGRESS,
    createdAt: DateTime.now().minus({ days: 5 })
  },
  {
    id: 34345,
    customerName: 'Test Test',
    subject: 'Testowy ticket',
    description: 'To jest testowy ticket do celów demonstracyjnych.',
    priority: TicketPriority.LOW,
    status: TicketStatus.CLOSED,
    createdAt: DateTime.now().minus({ days: 10 })
  }
];
