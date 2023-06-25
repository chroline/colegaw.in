import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { RiHeartFill } from "react-icons/ri";

export const FooterCredits = () => (
  <Stack direction={{ base: "column", md: "row" }} textAlign={"center"} spacing={0} pt={6}>
    <Flex justify={"center"} align={"center"} fontWeight={"medium"} opacity={0.7}>
      <Text as={"span"}>made with</Text>
      <Box as={"span"} color={"pink.500"} mx={1}>
        <RiHeartFill />
      </Box>
      <Text as={"span"}>by Cole Gawin</Text>
      <Text as={"span"} display={{ base: "none", md: "initial" }}>
        &nbsp;·&nbsp;
      </Text>
    </Flex>
    <Link href={"https://github.com/chroline/colegaw.in"} isExternal opacity={0.5}>
      View source on Github
    </Link>
  </Stack>
);
