import React from "react";

export const HighlightText: React.FC<{
  color: keyof typeof theme.colors;
  children: React.ReactNode;
}> = ({ color, children }) => {
  return (
    <span className={`font-bold not-italic`}>
      <span className="highlight">
        {children}
        <style jsx>{`
          span.highlight {
            background: linear-gradient(
              transparent 0%,
              transparent 65%,
              currentColor 65%,
              currentColor 90%,
              transparent 90%
            );
          }
        `}</style>
      </span>
    </span>
  );
};
