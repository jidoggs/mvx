import React from "react";

export default function ShortCalender({className}) {
  const header = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const data = [
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "1",
    "2",
    "3",
    "4",
    "5",
  ];
  return (
    <>
      {/* <div className="flex items-center justify-center"> */}
        {/* <div className="2xl:w-1/3 xl:w-1/2 lg:w-3/5 sm:w-4/5 w-full "> */}
          <div className={`${className} md:px-7 md:py-8 py-6 px-9 bg-white rounded-[20px] min-w-[390px] max-w-[400px] big:self-stretch self-start`}>
            <div className="px-4 flex items-center gap-x-4 md:gap-x-6 justify-center md:justify-between">
              <button className="px-2 py-1.5 md:p-2">
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
              <h3 className="md:text-2xl text-xl leading-6 font-bold text-gray-800">
                January 2022
              </h3>
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
            <div className=" pt-7 ">
              <div className="grid grid-cols-7 gap-y-1.5 text-200 md:text-150 font-medium">
                {header.map((itm) => (
                  <div className="place-self-center" key={itm}>
                    {itm}
                  </div>
                ))}
                {data.map((itm, idx) => (
                  <div
                    className={`h-11 md:h-12 w-full text-200 md:text-150 font-medium  ${
                      parseInt(itm) >= 10 && parseInt(itm) <= 18
                        ? "bg-purple-10 text-purple-100"
                        : ""
                    }
                    ${
                      parseInt(itm) === 10 || parseInt(itm) === 16
                        ? "rounded-l-full"
                        : ""
                    }
                    ${
                      parseInt(itm) === 15 || parseInt(itm) === 18
                        ? "rounded-r-full"
                        : ""
                    }
                    ${idx <= 4 || data.length - idx <= 5 ? "text-gray-50" : ""}
                    `}
                    key={itm}
                  >
                    <div
                      className={`w-full h-full flex justify-center items-center ${
                        parseInt(itm) === 10 || parseInt(itm) === 18
                          ? "bg-purple-100 rounded-[100%] text-white"
                          : ""
                      }`}
                    >
                      <div>{itm}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
}
