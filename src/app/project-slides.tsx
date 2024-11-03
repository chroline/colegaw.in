import projectSlidesData from "../../data/project-slides.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slide = ({ id, title }: { id: string; title: string }) => (
  <div className="group relative transition hover:-translate-y-2">
    <div className="aspect-[2/1] w-72 overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-200 ease-in-out group-hover:shadow-lg md:w-80 lg:w-96">
      <a href={`https://by.colegaw.in/${id}`} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
        <Image
          src={`/img/project-slides/${id}.webp`}
          alt={title}
          fill
          className="h-full w-full rounded-lg object-cover"
        />
      </a>
    </div>
    <div className="absolute inset-0 flex items-end rounded-lg bg-black bg-opacity-0 p-2 transition duration-300 group-hover:bg-opacity-50">
      <span className="invisible text-sm text-white group-hover:visible">{title}</span>
    </div>
  </div>
);

export function ProjectSlides() {
  const [is2XL, setIs2XL] = useState(false);
  const [spaceBetween, setSpaceBetween] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIs2XL(width >= 1536); // 2XL breakpoint
      setSpaceBetween(width >= 1024 ? 30 : 20); // Adjust space between slides
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="projects-slides w-full">
      <Swiper
        initialSlide={is2XL ? Object.keys(projectSlidesData).length - 1 : 0}
        loop={!is2XL}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={spaceBetween}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {(is2XL ? Object.entries(projectSlidesData).reverse() : Object.entries(projectSlidesData)).map(
          ([id, title]) => (
            <SwiperSlide key={id}>
              <Slide id={id} title={title} />
            </SwiperSlide>
          )
        )}
      </Swiper>
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
          opacity: 0.333;
          transition: opacity 0.2s ease;
        }

        :global(.projects-slides .swiper-slide-prev),
        :global(.projects-slides .swiper-slide-next) {
          opacity: 0.75;
        }

        :global(.projects-slides .swiper-slide-active) {
          opacity: 1;
        }

        :global(.swiper-pagination) {
          bottom: -2rem !important;
        }

        :global(.swiper-pagination-bullet) {
          transition: all 0.2s ease;
        }

        :global(.swiper-pagination-bullet:not([class*="swiper-pagination-bullet-"])) {
          transform: scale(0.667) !important;
        }
      `}</style>
    </div>
  );
}
