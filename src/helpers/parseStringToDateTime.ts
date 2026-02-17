import { DateTime } from 'luxon';

export const parseIsoDateToDateTime = (dateIso: string): DateTime<true> => {
  const parsed = DateTime.fromISO(dateIso, { zone: 'Europe/Warsaw' });
  if (!parsed.isValid) {
    throw new Error(`Invalid date string: ${dateIso}`);
  }
  return parsed;
};
