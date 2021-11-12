import React from "react";

import { Text, VStack } from "@chakra-ui/react";

import { Socials } from "~/components/shared/Socials";

export const Footer = () => (
  <VStack align={"center"} py={24}>
    <Socials />
    <Text verticalAlign={"text-top"} fontWeight={"medium"} color={"gray.700"} pt={6}>
      made with{" "}
      <Text as={"span"} color={"pink.500"} w={5} display={"inline-block"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </Text>{" "}
      by Cole Gawin
    </Text>
  </VStack>
);
