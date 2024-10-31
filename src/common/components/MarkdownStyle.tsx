import deepmerge from "deepmerge";

const styles = {
  "> *": "w-full opacity-100 text-md",
  a: "underline",
  "ul,ol": "pl-6 list-none",
  li: "mt-3 pl-3 counter-increment-section",
  "li:first-of-type": "mt-0",
  "ul li::marker": "content-['•'] text-xl leading-none text-gray-400",
  "ol li::marker": "content-[counter(section) '.'] text-lg leading-none text-gray-400",
};

const applyStyles = classNameMap =>
  Object.entries(classNameMap)
    .map(([selector, classNames]) => `${selector} { ${classNames} }`)
    .join(" ");

export const MarkdownStyle = ({ sx, children }) => {
  const mergedStyles = deepmerge(styles, sx || {});

  return (
    <div className="flex flex-col space-y-6">
      <style>{applyStyles(mergedStyles)}</style>
      {children}
    </div>
  );
};
