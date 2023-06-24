import { Box } from "@chakra-ui/react";

export const HeroDecoration = () => (
  <Box display={{ base: "none", md: "block" }} pos={"absolute"} top={0} bottom={0} w={"full"} h={"full"}>
    <Box pos={"absolute"} left={"85%"} color={"purple.500"} opacity={0.3}>
      <svg width="400" height="400" fill="none" viewBox="0 0 400 400">
        <defs>
          <pattern
            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            {/* <rect x="0" y="0" width="4" height="4" fill="blue" className="css-20bm7s" /> */}
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
      </svg>
    </Box>
  </Box>
);
