import React from "react";

import { AspectRatio, Box, Image, LinkBox, LinkOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useWindowSize } from "react-use";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const _Slide: React.FC<{ id: string }> = ({ id }) => (
  <LinkBox>
    <AspectRatio
      w={{ base: 64, md: "sm", lg: "md" }}
      ratio={2}
      background={"white"}
      boxShadow={"md"}
      _hover={{ shadow: "lg", mt: -2 }}
      borderRadius={"lg"}
      overflow={"hidden"}
    >
      <LinkOverlay href={`https://projects.colegaw.in/${id}`} isExternal>
        <Image src={`/img/projects/${id}.png`} />
      </LinkOverlay>
    </AspectRatio>
  </LinkBox>
);

export const ProjectsSlides = () => {
  const { width } = useWindowSize();
  const shouldLoop = useBreakpointValue({ base: true, "2xl": false });

  return (
    <Box className={"projects-slides"} w={"full"}>
      <Swiper
        key={width}
        loop={shouldLoop}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        mousewheel={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {["well-app", "lightning-share", "visualizing-runtimes", "tandc-treats", "dhs-schedule", "aspect-hub"].map(
          id => (
            <SwiperSlide key={id}>
              <_Slide id={id} />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <style jsx>{`
        :global(.projects-slides .swiper) {
          overflow: visible;
        }

        :global(.projects-slides .swiper-slide) {
          display: inline-block;
          width: unset !important;
          opacity: 0.666;
        }

        :global(.projects-slides .swiper-slide-prev),
        :global(.projects-slides .swiper-slide-next) {
          opacity: 0.875;
        }

        :global(.projects-slides .swiper-slide-active) {
          opacity: 1;
        }
      `}</style>
    </Box>
  );
};
