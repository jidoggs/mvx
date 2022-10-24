import { Add, Calendar, Element3, Home2, MonitorRecorder } from "iconsax-react";
import React from "react";

function MobileNav() {
  return (
    <nav className="lg:hidden fixed inset-0 top-auto z-10 py-[18px] bg-white shadow-dahboardpanel">
      <ul className="flex items-center mx-auto w-max gap-x-[52px]">
        <li>
          <Home2 size="24" color="#6A35FF" variant="Bold" />
        </li>
        <li>
          <Calendar size="24" color="#A0A6B1" />
        </li>
        <li>
          <div className="w-14 h-14 bg-purple-100 flex items-center justify-center rounded-full">
            <Add size="36" color="#ffffff" />
          </div>
        </li>
        <li>
          <MonitorRecorder size="24" color="#A0A6B1" />
        </li>
        <li>
          <Element3 size="24" color="#A0A6B1" variant="Outline" />
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
