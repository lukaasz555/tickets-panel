export interface TableHeader<T> {
  value: keyof T | 'actions';
  label: string;
  order?: number;
}
