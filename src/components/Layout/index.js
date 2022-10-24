import React from "react";
import LongCalender from "../Calender";
import ShortCalender from "../Calender/ShortCalender";
import CalenderType from "../CalenderType";
import Tracker from "../Tracker";
import UpcomingEvent from "../UpcomingEvent";
import Header from "./Header";
import SideNav from "./SideNav";

function Layout() {
  return (
    <div className="flex relative bg-purple-150">
      <SideNav className="fixed w-[318px]" />
      <div className="ml-[318px] grid grid-cols-1 grid-rows-[max-content_20px_max-content_20px_max-content_20px_max-content_20px_max-content_20px_max-content] mid:grid-rows-[max-content_64px_20px_max-content_20px_max-content_20px_max-content] mid:grid-cols-[max-content_28px_max-content_28px_1fr] albig:grid-cols-[1.15fr_28px_1.57fr_16px_1fr] big:grid-rows-[max-content_max-content_20px_max-content_2rem_max-content] albig:grid-rows-[max-content_64px_20px_64px_20px_max-content_2rem_max-content] medium:grid-rows-[max-content_max-content_20px_max-content_2rem_max-content]  px-7 pb-5 w-full">
        <Header className="col-span-full row-start-1 row-end-2" />
        <ShortCalender className="col-span-full mid:col-start-1 mid:col-end-2 row-span-7 row-end-[8] mid:row-start-4 mid:row-end-5 big:row-start-2 albig:row-start-2 big:row-end-5 albig:row-end-7" />
        <UpcomingEvent className="col-span-full row-start-[9] row-end-[10] mid:row-start-6 mid:row-end-7 medium:col-start-3 medium:col-end-6 medium:row-start-4 albig:col-start-1 albig:col-end-2 medium:row-end-5 big:row-start-6 albig:row-start-[8] big:row-end-7 albig:row-end-[9]" />
        <CalenderType className="col-span-full row-start-3 row-end-4 mid:col-start-1 mid:col-end-4 albig:col-start-3 big:col-end-4 albig:col-end-6 mid:row-start-2 mid:row-end-3" />
        <Tracker className="col-span-full row-start-5 row-end-6 big:col-start-5 albig:col-start-3 albig:col-end-6 mid:col-start-5 mid:col-end-6 mid:row-start-2 mid:row-end-3 big:row-start-2 albig:row-start-4 big:row-end-3 albig:row-end-5" />
        <LongCalender className="col-span-full row-start-[11] row-end-[12] albig:col-start-3 albig:col-end-6 big:row-start-4 medium:row-start-6 big:row-end-7 mid:row-start-[8] mid:row-end-[9]" />
        {/* <ShortCalender className="col-start-1 col-end-6 albig:col-end-5 row-start-2 big:row-end-4 row-end-3  self-start"  />
            <UpcomingEvent className="col-start-6 albig:col-start-5 col-end-13 self-end row-start-2 row-end-3 big:col-start-1 big:col-end-5 bi:row-start-4 big:row-end-5 big:self-end" />
            <CalenderType className="big:col-start-5 big:col-end-9 row-start-3 big:row-start-2 " />
            <Tracker className=" big:col-start-9 big:col-end-13 row-start-3 big:row-start-2 " />
            <LongCalender className="big:col-start-5 big:col-end-13 big:row-start-3 big:row-end-5 row-start-5 col-span-full" /> */}
      </div>
    </div>
  );
}

export default Layout;
