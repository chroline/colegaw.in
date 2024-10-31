import React from "react";

interface SectionProps {
  borderColor?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children, borderColor }) => {
  return (
    <section
      className={`relative overflow-visible flex flex-col items-center ${borderColor ? "border-t" : ""}`}
      style={{ borderColor }}
    >
      {children}
    </section>
  );
};
