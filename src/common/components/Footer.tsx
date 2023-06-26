import { Box, Flex, Link, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { RiHeartFill } from "react-icons/ri";
import tinycolor from "tinycolor2";

import theme from "~/core/util/theme";

import { CheckOutMyLynk } from "~/common/components/CheckOutMyLynk";

export function Footer() {
  const backgroundColor = useColorModeValue("gray.100", "gray.800");
  const borderColor = tinycolor(useColorModeValue(theme.colors.gray[200], theme.colors.gray[700]))
    .setAlpha(0.75)
    .toString();

  return (
    <Flex
      as={"footer"}
      direction={"column"}
      justify={"start"}
      align={"center"}
      position={"relative"}
      backgroundColor={backgroundColor}
      borderTop={"1px solid"}
      borderColor={borderColor}
    >
      <VStack align={"center"} py={24} px={6}>
        <CheckOutMyLynk />
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
      </VStack>
    </Flex>
  );
}
