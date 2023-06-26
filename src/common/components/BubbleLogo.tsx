import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export function BubbleLogo({ src, alt }: { src: string; alt: string }) {
  const backgroundColor = useColorModeValue("unset", "gray.700");
  const borderColor = useColorModeValue("#ebebed", "gray.600");

  return (
    <Box
      p={1.5}
      border={"1px solid"}
      borderColor={borderColor}
      borderRadius={"50%"}
      shadow={"sm"}
      backgroundColor={backgroundColor}
    >
      <Box position={"relative"} w={7} h={7} borderRadius={"50%"} overflow={"hidden"}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </Box>
    </Box>
  );
}
