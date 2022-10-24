import React from "react";
import UpcomingEventCard from "../Cards/UpcomingEvent";
import { BsPlusSquare } from "react-icons/bs";
import { AddSquare, Flag, TimerStart } from "iconsax-react";

const events = [
  {
    date_time: "27 Jan 2022  |  8:00 AM - 9:00 AM",
    title: "Accounting/Personal Finance Class",
    facilitator: "Class Facilitator: Professor Adrian Furnham",
    location: "Campus 1 Wexham SL2 4QS, UK",
    activity: "class",
  },
  {
    date_time: "27 Jan 2022  |  9: 30 AM - 10:30 AM",
    title: "Business/Business Management Class",
    facilitator: "Class Facilitator: Professor Brendan Neiland",
    location: "Campus 2 Wexham SL2 4QS, UK",
    activity: "class",
  },
  {
    date_time: "27  Jan 2022  | 11:00 AM - 12:00 PM",
    title: "Intramural Sports teams Tournament",
    facilitator: "Class Facilitator: Charles Spence",
    location: "Campus 3 Wexham SL2 4QS, UK",
    activity: "event",
  },
  {
    date_time: "27  Jan 2022  | 12:00 PM - 12:30 PM",
    title: "Dance Tournament for Freshmen",
    facilitator: "Class Facilitator: Ted Mosbey",
    location: "Campus 4 Wexham SL2 4QS, UK",
    activity: "event",
  },
];

const event_types = [
  {
    name: "All Activities",
    icon: null,
  },
  {
    name: "Classes",
    icon: <TimerStart size="20" color="#F56C22" variant="Bold" />,
  },
  {
    name: "Events",
    icon: <Flag size="20" color="#39BA62" variant="Bold" />,
  },
];

function UpcomingEvent({ className }) {
  return (
    <section
      className={`big:max-w-[402px] flex flex-col gap-y-10 ${className}`}
    >
      <header className="flex items-center justify-between">
        <div>
          <h3 className="text-black-100 text-2xl font-bold">Upcoming events</h3>
          <p className="twxt-gray-60 font-medium text-100 mt-0.5">
            Don’t miss schedule events.{" "}
            <span className="underline">See all</span>
          </p>
        </div>
        <button className="flex items-center gap-x-1.5 py-4 px-6 text-150 bg-purple-100 rounded-[54px] text-white">
        <AddSquare size="16" color="#ffffff" variant="Outline"/> <span>Add new</span>
        </button>
      </header>
      <div className="flex flex-col gap-y-2.5">
        <div className="flex items-center gap-x-3">
          {event_types.map(({ icon, name }) => (
            <div
              key={name}
              className={`py-3.5 px-5 rounded-lg font-medium text-xs vmin:text-100 flex-1 flex items-center justify-center gap-x-2.5 ${
                icon === null ? "bg-purple-20 text-purple-100" : ""
              } ${name === "Classes" ? "bg-orange-50 text-orange-100" : ""} ${
                name === "Events" ? "bg-green-50 text-green-100" : ""
              } `}
            >
              {icon}
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="grid medium:grid-cols-1 short:grid-cols-2 lg:grid-cols-1 nshorty:grid-cols-2 grid-cols-1 gap-2.5 ">
          {events.map(
            ({ activity, date_time, facilitator, location, title }) => (
              <UpcomingEventCard
                key={activity}
                date_time={date_time}
                facilitator={facilitator}
                location={location}
                tag={activity}
                title={title}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvent;
