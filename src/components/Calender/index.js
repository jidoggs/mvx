import React from "react";
import CalenderCard from "../Cards/Calender";

function LongCalender({className}) {
  const data = [
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
    <div className={`bg-white rounded-2xl overflow-hidden self-start ${className}`}>
      <header className="flex items-center justify-between pt-7 pr-9 pb-[18px] pl-12 border-b border-gray-50">
        <h3 className="font-bold text-xl leading-none text-purple-100 relative before:absolute before:left-0 before:right-0 before:-bottom-[18px] before:bg-purple-100 before:rounded before:h-1">Calender</h3>
        <div className="flex items-center gap-x-4 text-xs font-medium">
          <p>Sort by:</p>
          <div className="py-2.5 pr-14 pl-4 text-gray-60 border border-gray-50 rounded ">Events</div>
        </div>
      </header>
      <nav className="flex items-center justify-between pt-5 pb-4 pr-9 pl-11">
        <div className="flex items-center gap-x-1.5">
          <h4 className="text-xl leading-[26px] font-medium text-gray-60">
            10 January 2022
          </h4>
          <div className="flex items-center">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width={24}
                height={24}
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
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler ml-3 icon-tabler-chevron-right"
                width={24}
                height={24}
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
        <ul className="flex items-center gap-x-2">
          {nav.map((itm, id) => (
            <li key={itm}>
              <button className={`py-1.5 cursor-pointer text-base leading-5 font-medium  ${id === 0 ? "bg-purple-100 text-white  px-2.5 rounded":"text-gray-60"}`}>{itm}</button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grid grid-cols-[max-content_repeat(10,minmax(0,1fr))] auto-rows-[60px] border-b border-gray-50 pr-6">
        {data.map((time) => (
          <div
            className="col-start-1 col-end-2 border border-gray-50 border-x-transparent flex justify-center items-center text-gray-60 border-b-transparent pt-7 pr-4 pb-4 pl-3"
            key={time}
          >
            {time}
          </div>
        ))}
        <div className="col-start-2 col-end-[-1] row-span-full grid grid-cols-[max-content_repeat(9,minmax(0,1fr))] auto-rows-[60px]">
          {mock.map((itm, id) => (
            <div
              className="border border-gray-50 border-b-transparent border-l-transparent "
              key={id}
            />
          ))}
        </div>
        <CalenderCard className="col-start-3 col-end-6 row-start-2 row-end-4 place-self-center" />
        <CalenderCard className="col-start-3 col-end-6 row-start-5 row-end-7 place-self-center " />
        <CalenderCard className="col-start-4 col-end-7 row-start-[11] row-end-[12] place-self-center mt-2" />
        <CalenderCard className="col-start-6 col-end-9 row-start-4 row-end-5 place-self-center mb-3" />
        <CalenderCard className="col-start-6 col-end-9 row-start-7 row-end-[8] place-self-center mt-4" />
        <CalenderCard className="col-start-8 col-end-11 row-start-[9] row-end-[10] place-self-center mt-3" />
        <CalenderCard className="col-start-8 col-end-12 row-start-6 row-end-7 place-self-center " />
      </div>
    </div>
  );
}

export default LongCalender;
