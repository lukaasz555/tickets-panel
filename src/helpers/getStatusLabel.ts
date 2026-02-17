import { TicketStatus } from '../enums';

export const getStatusLabel = (status: TicketStatus): string => {
  const labels: Record<TicketStatus, string> = {
    [TicketStatus.NEW]: 'Nowe',
    [TicketStatus.IN_PROGRESS]: 'W trakcie',
    [TicketStatus.CLOSED]: 'Zamknięte'
  };
  return labels[status] || status;
};
