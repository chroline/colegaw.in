import React from "react";

import { Text, useColorModeValue } from "@chakra-ui/react";

import theme from "~/util/theme";

export const HighlightText: React.FC<{ color: keyof typeof theme.colors; children: React.ReactNode }> = ({
  color,
  children,
}) => {
  const highlightColor = useColorModeValue(theme.colors[color][200], theme.colors[color][800]);

  return (
    <Text as={"span"} color={highlightColor} fontWeight={"bold"} fontStyle={"normal"}>
      <span className={"highlight"}>
        <Text as={"span"} color={theme.colors[color][500]}>
          {children}
        </Text>
        <style jsx>{`
          span.highlight {
            background: linear-gradient(
              transparent 0%,
              transparent 65%,
              currentColor 65%,
              currentColor 85%,
              transparent 85%
            );
          }
        `}</style>
      </span>
    </Text>
  );
};
