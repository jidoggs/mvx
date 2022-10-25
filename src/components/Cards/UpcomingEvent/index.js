import { Flag, Location, TimerStart } from "iconsax-react";
import React from "react";

function UpcomingEventCard({ facilitator, date_time, title, location, tag }) {
  return (
    <div
      className={`shadow-upcomingeventcardrounded-2xl bg-white py-4 pl-6 pr-7`}
    >
      <p className="text-gray-60 text-xs font-medium">{date_time}</p>
      <h4 className="text-100 font-bold text-black-100 mt-3">{title}</h4>
      <p className="text-gray-60 text-150 font-medium mt-0.5">
        Class Facilitator: <span>{facilitator}</span>
      </p>
      <div
        className={`flex items-center justify-between mt-6  ${
          tag === "class" ? "text-orange-100" : "text-green-100"
        } font-medium`}
      >
        <div className="text-50 flex items-center gap-x-1">
          <Location
            size="8"
            color={`${tag === "class" ? "#F56C22" : "#39BA62"}`}
            variant="Bold"
          />{" "}
          <span>{location}</span>
        </div>
        {tag === "class" ? (
          <TimerStart size="16" color="#F56C22" variant="Bold" />
        ) : (
          <Flag size="16" color="#39BA62" variant="Bold" />
        )}
      </div>
    </div>
  );
}

export default UpcomingEventCard;
