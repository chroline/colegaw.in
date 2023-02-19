import React from "react";

import { Text } from "@chakra-ui/react";

export const HighlightText: React.FC<{ textColor: string; highlightColor: string; children: React.ReactNode }> = ({
  textColor,
  highlightColor,
  children,
}) => (
  <Text as={"span"} color={highlightColor}>
    <span className={"highlight"}>
      <Text as={"span"} color={textColor}>
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
