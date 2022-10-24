import React from "react";
import { RiTimerFill } from "react-icons/ri";

function CalenderCard({ className }) {
  return (
    <div
      className={`border border-orange-100 rounded-xl bg-orange-50 text-orange-100 py-2 pr-4 pl-3 h-[58px] shadow-calenderorange w-[263px] ${className}`}
    >
      <h5 className="text-xs font-bold">Accounting/Personal Finance Class </h5>
      <div className="flex flex-col justify-center">
        <p className="font-medium text-200">8:00 AM - 9:00 AM</p>
        <RiTimerFill className="self-end" size={16} />
      </div>
    </div>
  );
}

export default CalenderCard;
