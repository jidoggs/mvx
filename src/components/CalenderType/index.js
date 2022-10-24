import React from "react";

function CalenderType({className}) {
  const data = ["Notes", "Timeline", "Planner", "Goals"];
  return (
    <div className={`bg-white rounded-[10px] flex items-center justify-between pl-[50px] pr-8 big:pl-8 big:pr-5 ${className}`}>
      {data.map((itm, idx) => (
        <div
          className={`px-1 md:px-2 pt-4 pb-3.5 md:pt-6 mb:pb-[18px] text-150 mb:text-base mb:leading-5 font-medium  ${
            idx === 1 ? "text-purple-100 border-b-2 border-purple-100" : "text-gray-20"
          }`}
          key={itm}
        >
          {itm}
        </div>
      ))}
    </div>
  );
}

export default CalenderType;
