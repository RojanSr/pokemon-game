import { PageSize } from "@shared/constants";

export interface PaginationResponse<T> {
  count: number;
  next?: string;
  previous?: string | null;
  results: T;
}

export interface PaginationOptions {
  limit: PageSize;
  offset: number;
}
