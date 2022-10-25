import React from "react";
import CalenderCard from "../Cards/Calender";
import { Select, SelectItem } from "../CustomSelect";

const data = [
  {
    title: "Accounting/Personal Finance Class ",
    time: "8:00 AM - 9:00 AM",
    activity: "class",
  },
  {
    title: "Business/Business Management Class",
    time: "9:30 AM - 10:30 AM",
    activity: "event",
  },
  {
    title: "Intramural Sports teams Tournament ",
    time: "11:00 PM - 12:00 PM",
    activity: "event",
  },
  {
    title: "Dance Tournament for Freshmen ",
    time: "12:00 PM - 12:30 PM",
    activity: "event",
  },
  {
    title: "Communication/Speech",
    time: "1:00 PM - 2:00 PM",
    activity: "class",
  },
  {
    title: "History/Journalism",
    time: "3:00 PM - 4:00 PM",
    activity: "class",
  },
  {
    title: "Physical Education.",
    time: "5:00 PM - 6:00 PM",
    activity: "event",
  },
];

function LongCalender({ className }) {
  const time_range = [
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
  ];
  const nav = ["Day", "Week", "Month", "Year"];
  const mock = Array(130).fill(0);
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden self-start ${className}`}
    >
      <header className="hidden mini:flex items-center justify-between pt-7 pr-9 pb-[18px] pl-12 border-b border-gray-50">
        <h3 className="font-bold text-xl leading-none text-purple-100 relative before:absolute before:left-0 before:right-0 before:-bottom-[18px] before:bg-purple-100 before:rounded before:h-1 self-end">
          Calender
        </h3>
        <div className="flex items-center gap-x-4 text-xs font-medium">
          <p className="text-gray-20">Sort by:</p>
          {/* <div className="py-2.5 pr-14 pl-4 text-gray-60 border border-gray-50 rounded ">
            Events
          </div> */}
          <Select value="Events" className="py-2.5 pl-4 pr-1 w-[112px] text-gray-60 border border-gray-50 rounded flex items-center justify-between">
            <SelectItem>Classes</SelectItem>
            <SelectItem>Reminders</SelectItem>
          </Select>
        </div>
      </header>
      <nav className="flex items-center justify-between mini:pt-5 mini:pb-4 mini:pr-9 mini:pl-11 pt-6 pr-4 pb-5 pl-5">
        <div className="flex items-center gap-x-1 sm:gap-x-1.5">
          <h4 className="kshorty:text-xl kshorty:leading-[26px] mini:text-base text-xs font-medium text-gray-60">
            10 January 2022
          </h4>
          <div className="flex items-center">
            <button className="p-1.5 sm:p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left kshorty:w-6 kshorty:h-6 w-4 h-4"
                // width={24}
                // height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>
            <button className="p-1.5 sm:p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right kshorty:w-6 kshorty:h-6 w-4 h-4"
                // width={24}
                // height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>
        <ul className="flex items-center gap-x-2 sm:gap-x-5">
          {nav.map((itm, id) => (
            <li key={itm}>
              <button
                className={`py-1.5 sm:py-2.5 cursor-pointer mini:text-base mini:leading-5 text-250 font-medium  ${
                  id === 0
                    ? "bg-purple-100 text-white  px-2.5 sm:px-[22px] rounded"
                    : "text-gray-60"
                }`}
              >
                {itm}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grid fshorty:grid-cols-[max-content_repeat(10,minmax(0,1fr))] fshorty:auto-rows-[60px] grid-cols-[94px_1fr] w-full overflow-scroll  border-gray-50 pr-6">
        {time_range.map((time) => (
          <div
            className="col-start-1 col-end-2 border border-gray-50 border-l-transparent fshorty:border-x-transparent fshorty:flex justify-center items-center text-gray-60 mini:text-xs text-350 text-center  border-b-transparent pt-7 fshorty:pr-4 pb-4 fshorty:pl-3 px-5"
            key={time}
          >
            {time}
          </div>
        ))}
        <div className="col-start-2 col-end-[-1] fshorty:row-span-full grid fshorty:grid-cols-[max-content_repeat(9,minmax(0,1fr))] fshorty:auto-rows-[60px] grid-cols- row-start-1 row-end-[14]">
          {mock.map((itm, id) => (
            <div
              className={`border border-gray-50 border-b-transparent border-l-transparent ${
                id > 12 ? "hidden" : ""
              } fshorty:block`}
              key={id}
            />
          ))}
        </div>
        {data.map(({ title, time, activity }, idx) => (
          <CalenderCard
            key={idx}
            title={title}
            time={time}
            activity={activity}
            className={`${
              idx === 0
                ? "fshorty:col-start-3 fshorty:col-end-6 fshorty:row-start-2 fshorty:row-end-4 fshorty:place-self-center row-start-1 row-end-2"
                : ""
            } ${
              idx === 1
                ? "fshorty:col-start-3 fshorty:col-end-6 fshorty:row-start-5 fshorty:row-end-7 fshorty:place-self-center row-start-2 row-end-4"
                : ""
            } ${
              idx === 2
                ? "fshorty:col-start-4 fshorty:col-end-7 fshorty:row-start-[11] fshorty:row-end-[12] fshorty:place-self-center fshorty:mt-2 row-start-4 row-end-5"
                : ""
            }  ${
              idx === 3
                ? "fshorty:col-start-6 fshorty:col-end-9 fshorty:row-start-4 fshorty:row-end-5 fshorty:place-self-center fshorty:mb-3 row-start-5 row-end-6"
                : ""
            }  ${
              idx === 4
                ? "fshorty:col-start-6 fshorty:col-end-9 fshorty:row-start-7 fshorty:row-end-[8] fshorty:place-self-center fshorty:mt-4 row-start-6 row-end-7"
                : ""
            }  ${
              idx === 5
                ? "fshorty:col-start-8 fshorty:col-end-11 fshorty:row-start-[9] fshorty:row-end-[10] fshorty:place-self-center fshorty:mt-3 row-start-[8] row-end-[9]"
                : ""
            }  ${
              idx === 6
                ? "fshorty:col-start-8 fshorty:col-end-12 fshorty:row-start-6 fshorty:row-end-7 fshorty:place-self-center row-start-[10] row-end-[11]"
                : ""
            } ${
              time.split("-")[0].includes("00")
                ? "justify-self-start ml-2 fshorty:ml-0 my-0"
                : "justify-self-end my-0"
            }
            
            col-start-2 col-end-3
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default LongCalender;
