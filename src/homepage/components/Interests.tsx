import { Button, VStack } from "@chakra-ui/react";

import _Interests from "~/data/content/interests.mdx";

import { MarkdownStyle } from "~/common/components/MarkdownStyle";

export function Interests() {
  return (
    <VStack spacing={8} align={"end"} w={"full"}>
      <MarkdownStyle>
        <_Interests />
      </MarkdownStyle>
      <a href={"https://linkedin.com/in/colegawin"} target={"_blank"}>
        <Button size={"lg"} colorScheme={"blue"} variant={"link"}>
          View my resume →
        </Button>
      </a>
    </VStack>
  );
}
