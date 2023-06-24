import React from "react";

import { Box } from "@chakra-ui/react";
import Image from "next/image";

import Image1 from "../../../public/img/me1.jpg";

const _ImageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    w={"full"}
    h={"full"}
    sx={{
      "> span": { height: "100% !important" },
      img: { objectFit: "cover", objectPosition: "center", w: "full", h: "full" },
    }}
    borderRadius={"18px"}
    overflow={"hidden"}
    shadow={"xl"}
  >
    {children}
  </Box>
);

export const HeroSlides = () => {
  return (
    <Box className={"hero-slides"} w={{ base: "2xs", sm: "xs" }} h={{ base: "sm", sm: "md" }}>
      <_ImageWrapper>
        <Image src={Image1} alt={"Cole looking professional"} priority quality={100} />
      </_ImageWrapper>
      <style jsx>{`
        :global(.hero-slides .swiper) {
          width: 100% !important;
          height: 100% !important;
          overflow: visible;
        }

        :global(.hero-slides .swiper-slide) {
          border-radius: 18px;
          overflow: hidden;
          width: 100% !important;
          height: 100% !important;
          box-shadow: var(--chakra-shadows-md);
        }
      `}</style>
    </Box>
  );
};
