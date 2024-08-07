import { PaginationOptions } from "@shared/types/global";

const convertLimitOffset = ({
  limit,
  offset,
}: PaginationOptions): {
  page: number;
  page_size: number;
} => {
  return {
    page: offset / limit + 1,
    page_size: limit,
  };
};

export default convertLimitOffset;
