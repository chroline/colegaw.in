import React from "react";

import { SystemStyleObject, VStack } from "@chakra-ui/react";
import deepmerge from "deepmerge";

const styles = {
  "> *": { w: "full", opacity: 1, fontSize: "md" },
  a: {
    textDecoration: "underline",
  },
  "ul,ol": {
    pl: 6,
    counterReset: "section",
    listStyleType: "none",
  },
  li: {
    counterIncrement: "section",
    mt: 3,
    pl: 3,
    "&:nth-of-type(1)": {
      mt: 0,
    },
  },
  "ul li::marker": {
    content: `"•"`,
    fontSize: "xl",
    lineHeight: "0",
    color: "gray.400",
  },
  "ol li::marker": {
    content: `counter(section) "."`,
    fontSize: "lg",
    lineHeight: "0",
    color: "gray.400",
  },
};

export const MarkdownStyle = ({ sx, children }: { sx?: SystemStyleObject; children: React.ReactNode }) => (
  <VStack spacing={6} sx={deepmerge(styles, sx || {})}>
    {children}
  </VStack>
);
