export interface PaginationResponse<T> {
  count: number;
  next: string;
  previous: string | null;
  results: T;
}
