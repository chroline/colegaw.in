import React from "react";

export const Logo = () => (
  <div className="w-8 sm:w-10 md:w-12">
    <div className="logo">
      <svg width="100%" height="100%" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <path
            d="M377.267 283.875H338.92C334.127 267.157 321.045 257.143 301.61 257.143C274.332 257.143 255.769 278.128 255.769 315.222C255.769 352.491 273.635 373.65 301.959 373.65C327.058 373.65 342.135 359.631 342.658 337.514H304.312V308.949H379V331.592C379 378.526 346.841 407 301.784 407C251.499 407 217.51 371.996 217.51 315.571C217.51 305.327 218.651 295.832 220.79 287.142C219.587 287.185 218.371 287.207 217.142 287.207C169.383 287.207 134 253.77 134 195.604C134 137.263 169.993 104 217.142 104C258.451 104 289.641 128.132 294.609 169.318H256.689C253.813 149.726 238.668 137.35 218.013 137.35C190.387 137.35 172.259 158.509 172.259 195.604C172.259 233.743 190.648 253.857 217.752 253.857C228.934 253.857 237.601 249.723 245.497 244.17C253.393 238.617 272.945 223.319 301 223.793C341.351 223.793 372.386 248.609 377.267 283.875Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="92.9266"
            y="80.8962"
            width="327.147"
            height="385.147"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="17.9696" />
            <feGaussianBlur stdDeviation="20.5367" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
    <style jsx>{`
      .logo {
        height: 100%;
        width: 100%;
        background: conic-gradient(
          from 128.8deg at 49.47% 51.06%,
          #1e88e5 -180deg,
          #14bb75 0deg,
          #1e88e5 180deg,
          #14bb75 360deg
        );
        box-shadow:
          0 14px 20px rgba(0, 0, 0, 0.125),
          inset 0px -3px 4px rgba(0, 0, 0, 0.25),
          inset 0px 4px 2px rgba(255, 255, 255, 0.44);
        border-radius: 50%;
      }
    `}</style>
  </div>
);
