import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-accentSoft dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden">
      <div className="roll 1s linear infinite w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text, index) => (
          <div key={index}>
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;