import React from "react";

const HighLighter = ({ text, highlight, highlightedItemClass }) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <>
      {parts.map((part, i) => {
        const highlightStyle =
          part.toLowerCase() === highlight.toLowerCase()
            ? highlightedItemClass
            : "";
        return (
          <span key={i} className={highlightStyle}>
            {part}
          </span>
        );
      })}
    </>
  );
};

export default HighLighter;