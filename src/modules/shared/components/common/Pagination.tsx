import { Flex, IconButton, Select, Text } from "@chakra-ui/react";
import { PageSize } from "@shared/constants";
import { getShowingPages } from "@shared/utils/getShowingPages";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

interface Props {
  offset: number;
  count: number;
  limit: PageSize;
  onLimitChange: (limit: PageSize) => void;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  offset,
  count,
  limit,
  onLimitChange,
  onPageChange,
}: Props) => {
  const noOfPages = Math.ceil(count / limit);
  const page = offset / limit + 1;
  const TO_SHOW = getShowingPages(page, noOfPages);

  const togglePage = (offset: number) => {
    onPageChange(offset);
  };

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={6}
      bg={"white"}
      px={6}
      py={2}
      borderRadius={"22px"}
      fontSize={"12px"}
    >
      <Flex gap={4} alignItems={"center"}>
        <Text>Show</Text>
        <Select
          size={"md"}
          borderRadius={"8px"}
          value={limit}
          onChange={(e) => onLimitChange(parseInt(e.target.value) as PageSize)}
          fontSize={"12px"}
        >
          <option value={12}>12</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </Select>
      </Flex>
      <Flex alignItems={"center"}>
        <IconButton
          aria-label="previous-button"
          borderRadius={"50%"}
          bg={"white.ghost"}
          cursor={"pointer"}
          _hover={{ bg: "white.ghost_hover" }}
          p={0}
          isDisabled={page === 1}
          onClick={() => togglePage(offset - limit)}
          icon={<FaAngleLeft />}
        />
        <Flex
          bg={"white"}
          py={1}
          px={4}
          borderRadius={"22px"}
          gap={2}
          alignItems={"center"}
          fontWeight={"600"}
        >
          {TO_SHOW.map((currentPage, index) => {
            const isActive = page === currentPage || count === 1;
            return (
              <IconButton
                key={currentPage ? currentPage : `no-value ${index}`}
                aria-label={currentPage ? currentPage?.toString() : ""}
                bg={isActive ? "primary.red" : "white.ghost"}
                size={"sm"}
                _hover={{ bg: isActive ? "" : "white.ghost_hover" }}
                isDisabled={!currentPage}
                onClick={() =>
                  currentPage && togglePage(limit * (currentPage - 1))
                }
                icon={
                  <Text
                    variant="h4"
                    color={isActive ? "white" : "black"}
                    fontWeight={isActive ? "semibold" : "normal"}
                    fontSize={"12px"}
                  >
                    {currentPage ? currentPage : "° ° °"}
                  </Text>
                }
              />
            );
          })}
        </Flex>
        <IconButton
          aria-label="next-button"
          borderRadius={"50%"}
          bg={"white.ghost"}
          cursor={"pointer"}
          _hover={{ bg: "white.ghost_hover" }}
          p={0}
          isDisabled={page === noOfPages}
          onClick={() => togglePage(offset + limit)}
          icon={<FaAngleRight />}
        />
      </Flex>
    </Flex>
  );
};

export default Pagination;
