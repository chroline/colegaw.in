import { Box, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import tinycolor from "tinycolor2";

import theme from "~/core/util/theme";

export const HeroDecoration = () => {
  const strokeColor = useColorModeValue(
    theme.colors.gray[300],
    tinycolor(theme.colors.gray[700]).setAlpha(0.6).toString()
  );
  const isLG = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: isLG ? "120%" : "50%",
        //background: theme.colors.blueGray[300],
        maskImage: `radial-gradient(100% 100% at top ${isLG ? "right" : "center"},white,transparent)`,
      }}
    >
      <Box
        as="svg"
        sx={{
          width: "100%",
          height: "100%",
          stroke: strokeColor,
        }}
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={isLG ? "100" : "80"}
            height={isLG ? "100" : "80"}
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"></rect>
      </Box>
    </Box>
  );
};
