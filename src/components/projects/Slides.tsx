import React from "react";

import { AspectRatio, Box, LinkBox, LinkOverlay, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import NextImage from "next/image";
import { useAsync, useWindowSize } from "react-use";
import SwiperCore, { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import projectsData from "../../../data/projects.json";

const _Slide: React.FC<{ id: string; title: string }> = ({ id, title }) => (
  <Tooltip label={title}>
    <LinkBox>
      <AspectRatio
        w={{ base: 64, md: "sm", lg: "md" }}
        ratio={2}
        background={"white"}
        boxShadow={"md"}
        borderRadius={"lg"}
        overflow={"hidden"}
        transition={"all 0.2s ease !important"}
        _hover={{ shadow: "lg", mt: -2 }}
      >
        <LinkOverlay href={`https://projects.colegaw.in/${id}`} isExternal>
          <NextImage src={`/img/projects/${id}.webp`} alt={title} layout={"fill"} />
        </LinkOverlay>
      </AspectRatio>
    </LinkBox>
  </Tooltip>
);

export function ProjectsSlides() {
  const { width } = useWindowSize();
  const shouldLoop = useBreakpointValue({ base: true, "2xl": false }, "sm");

  const init = useAsync(async () => SwiperCore.use([Pagination, Mousewheel]));

  return (
    <Box className={"projects-slides"} w={"full"}>
      {!init.loading && (
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
            delay: 4500,
            disableOnInteraction: true,
          }}
        >
          {Object.entries(projectsData).map(([id, title]) => (
            <SwiperSlide key={id}>
              <_Slide id={id} title={title} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
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
}
