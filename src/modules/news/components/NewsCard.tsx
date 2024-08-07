import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { ArticleDetails } from "@news/types";
import timeAgo from "@shared/utils/timeAgo";
import { Link } from "react-router-dom";

interface NewsCardProps {
  post: ArticleDetails;
}

const NewsCard = ({ post }: NewsCardProps) => {
  return (
    <Link to={post.url} target="_blank" style={{ display: "inline-flex" }}>
      <Box
        w={{ base: "250px", xl: "280px" }}
        bg={"white"}
        borderRadius={"12px"}
        cursor={"pointer"}
      >
        <Image
          src={post.urlToImage}
          w={"inherit"}
          h={"160px"}
          objectFit={"cover"}
          borderTopRadius={"inherit"}
        />
        <Box px={4} mt={2} mb={4}>
          <Tooltip label={post.title} fontSize={"12px"}>
            <Text fontWeight={700} noOfLines={2} aria-label="post-title">
              {post.title}
            </Text>
          </Tooltip>
          <Text
            mt={2}
            fontSize={"12px"}
            aria-label="post-description"
            noOfLines={3}
          >
            {post.description}
          </Text>
          <Flex gap={8} mt={4} justifyContent={"space-between"}>
            <Text aria-label="posted-x-ago" fontSize={"12px"}>
              {timeAgo(post.publishedAt)}
            </Text>
            <Text aria-label="author" fontSize={"12px"} color={"grey"}>
              By {post.author || "Unknown."} |{" "}
              {post.source.name || "No source available"}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default NewsCard;
