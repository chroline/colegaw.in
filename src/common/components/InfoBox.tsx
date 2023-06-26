import { Box, HStack, Heading, VStack, useColorModeValue } from "@chakra-ui/react";
import tinycolor from "tinycolor2";

import theme from "~/core/util/theme";

export function InfoBox({ icon, title, children }: { icon: JSX.Element; title: string; children?: React.ReactNode }) {
  const backgroundColor = useColorModeValue("white", "gray.800");
  const borderColor = tinycolor(useColorModeValue(theme.colors.gray[200], theme.colors.gray[700]))
    .setAlpha(0.75)
    .toString();

  return (
    <VStack
      spacing={7}
      align={"start"}
      p={7}
      background={backgroundColor}
      w={"full"}
      border={"1px solid"}
      borderColor={borderColor}
      borderRadius={"xl"}
    >
      <HStack spacing={4} opacity={0.9}>
        <Box w={5}>{icon}</Box>
        <Heading fontSize={"md"} fontWeight={500}>
          {title}
        </Heading>
      </HStack>
      {children}
    </VStack>
  );
}
