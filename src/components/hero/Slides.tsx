import React from "react";

import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useAsync } from "react-use";
import SwiperCore, { Autoplay, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image1 from "../../../public/img/me1.jpg";
import Image2 from "../../../public/img/me2.png";
import Image3 from "../../../public/img/me3.png";
import Image4 from "../../../public/img/me4.png";
import Image5 from "../../../public/img/me5.png";

const _ImageWrapper: React.FC = ({ children }) => (
  <Box
    w={"full"}
    h={"full"}
    sx={{ "> span": { height: "100% !important" }, img: { objectFit: "cover", objectPosition: "center" } }}
    borderRadius={"18px"}
    overflow={"hidden"}
  >
    {children}
  </Box>
);

export const HeroSlides = () => {
  const init = useAsync(async () => SwiperCore.use([EffectCards, Autoplay]));

  return (
    <Box className={"hero-slides"} w={{ base: "2xs", sm: "xs" }} h={{ base: "sm", sm: "md" }}>
      {!init.loading ? (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <_ImageWrapper>
              <Image src={Image1} alt={"Cole looking professional"} priority placeholder={"blur"} />
            </_ImageWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <_ImageWrapper>
              <Image src={Image2} alt={"Cole eating a poké bowl"} priority placeholder={"blur"} />
            </_ImageWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <_ImageWrapper>
              <Image src={Image3} alt={"Cole getting blown over on the Golden Gate Bridge"} priority placeholder={"blur"} />
            </_ImageWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <_ImageWrapper>
              <Image src={Image4} alt={"Cole sitting on a rock overlooking Vancouver"} priority
                     placeholder={"blur"} />
            </_ImageWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <_ImageWrapper>
              <Image src={Image5} alt={"Cole in his yearbook era"} priority placeholder={"blur"} />
            </_ImageWrapper>
          </SwiperSlide>
        </Swiper>
      ) : (
        <_ImageWrapper>
          <Image src={Image1} alt={"Cole looking professional"} priority />
        </_ImageWrapper>
      )}
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
