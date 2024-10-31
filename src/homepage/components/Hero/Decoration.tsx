export const HeroDecoration = () => {
  return (
    <div
      className="
        absolute w-full 
        lg:h-[120%] h-[50%] 
        mask-[radial-gradient(100%_100%_at_top_center,white,transparent)] 
        lg:mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]
      "
    >
      <svg className="w-full h-full stroke-gray-300">
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            className="lg:w-[100px] w-[80px] lg:h-[100px] h-[80px]"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
    </div>
  );
};
