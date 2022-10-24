import { Flag, TimerStart } from "iconsax-react";
import React from "react";

function CalenderCard({ className, title, time, activity }) {
  return (
    <div
      className={`border ${
        activity === "class"
          ? "border-orange-100 bg-orange-50 text-orange-100 shadow-calenderorange"
          : "border-green-100 bg-green-50 text-green-100 shadow-calendergreen"
      }  rounded-xl  py-2 pr-4 pl-3 h-[58px]  w-[263px] ${className}`}
    >
      <h5 className="text-xs font-bold">{title}</h5>
      <div className="flex flex-col justify-center">
        <p className="font-medium text-200">{time}</p>
        {activity === "class" ? (
          <TimerStart className="self-end" size="16" color="#F56C22" variant="Bold" />
        ) : (
          <Flag size="16" className="self-end" color="#39BA62" variant="Bold" />
        )}
      </div>
    </div>
  );
}

export default CalenderCard;
