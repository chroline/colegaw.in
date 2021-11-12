import React from "react";

import { Box } from "@chakra-ui/react";
import Image from "next/image";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";

import Image1 from "../../../public/img/me1.png";
import Image2 from "../../../public/img/me2.png";
import Image3 from "../../../public/img/me3.png";

const _ImageWrapper: React.FC = ({ children }) => (
  <Box
    w={"full"}
    h={"full"}
    background={"blue.500"}
    sx={{ "> span": { height: "100% !important" }, img: { objectFit: "cover", objectPosition: "center" } }}
  >
    {children}
  </Box>
);

export const HeroSlides = () => (
  <Box className={"hero-slides"} w={{ base: "2xs", sm: "xs" }} h={{ base: "sm", sm: "md" }}>
    <Swiper
      effect={"cards"}
      grabCursor={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <_ImageWrapper>
          <Image src={Image1} />
        </_ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <_ImageWrapper>
          <Image src={Image2} />
        </_ImageWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <_ImageWrapper>
          <Image src={Image3} />
        </_ImageWrapper>
      </SwiperSlide>
    </Swiper>
    <style jsx>{`
      :global(.hero-slides .swiper) {
        width: 100% !important;
        height: 100% !important;
      }

      :global(.hero-slides .swiper-slide) {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        font-size: 22px;
        font-weight: bold;
        color: #fff;

        width: 100% !important;
        height: 100% !important;
      }
    `}</style>
  </Box>
);
