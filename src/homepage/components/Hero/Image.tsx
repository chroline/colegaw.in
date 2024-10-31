import Image from "next/image";
import React from "react";

import Image1 from "../../../../public/img/me1.jpg";

const ImageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full h-full rounded-[18px] overflow-hidden shadow-xl">
    <style jsx>{`
      div > span {
        height: 100% !important;
      }
      div img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    `}</style>
    {children}
  </div>
);

export const HeroImage = () => (
  <ImageWrapper>
    <Image src={Image1} alt="Cole looking professional" priority quality={100} placeholder="blur" unoptimized />
  </ImageWrapper>
);
