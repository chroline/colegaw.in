import React from "react";

import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { RiHeartFill } from "react-icons/ri";

export const FooterCredits = () => (
  <Flex justify={"center"} align={"center"} fontWeight={"medium"} color={"gray.700"} pt={6}>
    <Text as={"span"}>made with</Text>
    <Box as={"span"} color={"pink.500"} mx={1}>
      <RiHeartFill />
    </Box>
    <Text as={"span"}>by Cole Gawin ·&nbsp;</Text>
    <Link href={"https://github.com/chroline/colegaw.in"} isExternal color={"gray.500"}>
      View source on Github
    </Link>
  </Flex>
);
