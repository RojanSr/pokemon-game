import { Box, Flex } from "@chakra-ui/react";
import NewsCard from "./components/NewsCard";
import useFetchPokeNews from "./hooks/useFetchPokeNews";
import GlobalLoader from "../shared/components/common/GlobalLoader";
import { useState } from "react";
import Pagination from "../shared/components/common/Pagination";
import { PaginationOptions } from "../shared/types/global";
import { defaultPagination } from "../shared/constants";

const PokeNews = () => {
  const [pagination, setPagination] = useState<PaginationOptions>({
    ...defaultPagination,
    limit: 12,
  });

  const { data, isLoading } = useFetchPokeNews(pagination);
  if (isLoading) {
    return <GlobalLoader />;
  }
  return (
    <>
      <Flex gap={4} flexWrap={"wrap"} justifyContent={"center"}>
        {data?.articles?.map((post) => {
          return (
            <NewsCard
              post={post}
              key={`${post.author}_${post.publishedAt}.${post.title}`}
            />
          );
        })}
      </Flex>
      <Box mt={8} mb={6}>
        <Pagination
          offset={pagination.offset}
          count={data?.totalResults || 0}
          limit={pagination.limit}
          onLimitChange={(limit) =>
            setPagination(() => ({ limit: limit, offset: 0 }))
          }
          onPageChange={(offset) =>
            setPagination((prev) => ({ ...prev, offset: offset }))
          }
        />
      </Box>
    </>
  );
};

export default PokeNews;
