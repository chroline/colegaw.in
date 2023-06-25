import React from "react";

import { AspectRatio, Box, LinkBox, LinkOverlay, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import NextImage from "next/image";
import { useAsync, useWindowSize } from "react-use";
import SwiperCore, { Autoplay, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import projectsData from "../../../data/projects.json";

const _Slide: React.FC<{ id: string; title: string }> = ({ id, title }) => (
  <Tooltip label={title}>
    <LinkBox>
      <AspectRatio
        w={{ base: 72, md: "xs", lg: "sm" }}
        ratio={2}
        background={"white"}
        boxShadow={"md"}
        borderRadius={"lg"}
        overflow={"hidden"}
        transition={"all 0.2s ease !important"}
        _hover={{ shadow: "lg", mt: -2 }}
      >
        <LinkOverlay href={`https://by.colegaw.in/${id}`} isExternal>
          <NextImage src={`/img/projects/${id}.webp`} alt={title} layout={"fill"} />
        </LinkOverlay>
      </AspectRatio>
    </LinkBox>
  </Tooltip>
);

export function ProjectsSlides() {
  const { width } = useWindowSize();
  const shouldLoop = useBreakpointValue({ base: true, "2xl": false }, "sm");
  const spaceBetween = useBreakpointValue({ base: 20, lg: 30 }, "sm");

  const init = useAsync(async () => SwiperCore.use([Autoplay, Pagination, Mousewheel]));
  console.log(init);

  return (
    <Box className={"projects-slides"} w={"full"} sx={{}}>
      {!init.loading && (
        <Swiper
          key={width}
          loop={shouldLoop}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={spaceBetween}
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

        :global(.projects-slides .swiper-pagination) {
          bottom: -1.6rem;
        }

        :global(.projects-slides .swiper-slide) {
          display: inline-block;
          width: unset !important;
          opacity: 0.666;
          transition: opacity 0.2s ease;
        }

        :global(.projects-slides .swiper-slide-prev),
        :global(.projects-slides .swiper-slide-next) {
          opacity: 0.875;
        }

        :global(.projects-slides .swiper-slide-active) {
          opacity: 1;
        }

        :global(body.chakra-ui-dark .swiper-pagination-bullet:not([class*="swiper-pagination-bullet-active-main"])) {
          background: white !important;
        }

        :global(.swiper-pagination-bullet:not([class*="swiper-pagination-bullet-"])) {
          transform: scale(0) !important;
        }
      `}</style>
    </Box>
  );
}
