import { TicketPriority } from '../enums';

export const getPriorityLabel = (priority: TicketPriority): string => {
  const labels: Record<TicketPriority, string> = {
    [TicketPriority.LOW]: 'Niski',
    [TicketPriority.MEDIUM]: 'Średni',
    [TicketPriority.HIGH]: 'Wysoki'
  };
  return labels[priority] || priority;
};
