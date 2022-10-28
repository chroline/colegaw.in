import { Badge, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

import blogPost from "../../../data/blogPost.json";

export const HeroBlogCTA = () => (
  <Box as={"a"} href={"https://instructive.dev"} target={"_blank"} w={"full"}>
    <Stack direction={{ base: "column", md: "row" }} justify={"start"} w={"full"} spacing={4} isTruncated>
      <Box>
        <Badge colorScheme={"red"} fontSize={"normal"} px={2} borderRadius={"md"} textDecoration={"none !important"}>
          ON THE BLOG
        </Badge>
      </Box>
      <Flex overflow={"hidden"} align={"center"}>
        <Text color={"red.500"} fontWeight={"semibold"} isTruncated>
          {blogPost}
        </Text>
        <Text
          as={"span"}
          w={5}
          color={"red.500"}
          display={"inline-block"}
          flexShrink={0}
          sx={{ svg: { w: "full", h: "full" } }}
        >
          <HiChevronRight />
        </Text>
      </Flex>
    </Stack>
  </Box>
);
