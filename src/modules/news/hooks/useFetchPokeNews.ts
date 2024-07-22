import axios, { AxiosError } from "axios";
import { api } from "../../shared/api";
import { reponseErrorHandler, ResponseData } from "../../shared/utils/helper";
import { useQuery } from "@tanstack/react-query";
import { PaginationOptions } from "../../shared/types/global";
import convertLimitOffset from "../../shared/utils/convertLimitOffset";
import { ArticleDetails, GlobalResponseNews } from "../types";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const fetchPokeNews = async (pagination: PaginationOptions) => {
  // Convert limit and offset to page size and page number
  const pageInfo = convertLimitOffset(pagination);

  try {
    const response = await axios.get<GlobalResponseNews<ArticleDetails[]>>(
      `${api.news.fetch_everything}?q=pokemon&pageSize=${pageInfo.page_size}&page=${pageInfo.page}&apiKey=${apiKey}`
    );
    return response;
  } catch (err) {
    console.error(err);
    reponseErrorHandler(err as AxiosError<ResponseData, unknown>);
  }
};

const useFetchPokeNews = (pagination: PaginationOptions) => {
  return useQuery({
    queryKey: [api.news.fetch_everything, pagination],
    queryFn: () => fetchPokeNews(pagination),
    select: (data) => data?.data,
  });
};

export default useFetchPokeNews;
