import { VStack } from "@chakra-ui/react";

import _AboutContent from "../../../data/aboutContent.mdx";

const styles = {
  "*": { w: "full", color: "gray.500", fontSize: "lg" },
  p: {
    "&:nth-child(1)": { fontSize: "xl" },
  },
  "ul,ol": {
    pl: 6,
    counterReset: "section",
    listStyleType: "none",
  },
  li: {
    counterIncrement: "section",
    mt: 6,
    pl: 3,
    "&:nth-child(1)": {
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

export const AboutContent = () => {
  return (
    <VStack spacing={6} sx={styles}>
      <_AboutContent />
    </VStack>
  );
};
