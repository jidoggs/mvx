import {
  Book1,
  Calendar,
  Element3,
  LoginCurve,
  MonitorRecorder,
  Profile2User,
  Setting2,
  Sms,
  Star1,
} from "iconsax-react";
import React from "react";
import icon from "../../../assets/mvx.svg";

const items = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <Element3 size="32" color="#ffffff" variant="Bold" />,
  },
  {
    name: "Calender",
    link: "/calender",
    icon: <Calendar size="32" color="#ffffff" variant="Bold" />,
  },
  {
    name: "Live class",
    link: "/class",
    icon: <MonitorRecorder size="32" color="#ffffff" variant="Bold" />,
  },
  {
    name: "Courses",
    link: "/courses",
    icon: <Book1 size="32" color="#ffffff" variant="Bold" />,
  },
  {
    name: "Messages",
    link: "/messages",
    icon: <Sms size="32" color="#ffffff" variant="Bold" />,
  },
  {
    name: "Groups",
    link: "/groups",
    icon: <Profile2User size="32" color="#ffffff" variant="Bold" />,
  },
  {
    name: "Grades",
    link: "/grades",
    icon: <Star1 size="32" color="#ffffff" variant="Bold" />,
  },
];

const itms = [
  {
    name: "Settings",
    icon: <Setting2 size="32" color="#ffffff" variant="Bold" />,
  },
  {
    name: "Logout",
    icon: <LoginCurve size="32" color="#ffffff" variant="Bold" />,
  },
];

function SideNav({ className }) {
  return (
    <nav
      className={`bg-purple-100 h-screen lg:grid grid-rows-[1.67fr_max-content_1fr_max-content_2.22fr_max-content_2.52fr_max-content_1.37fr] before:absolute before:w-8 before:h-8 before:-right-3 before:bg-black-10 before:top-[10%] before:rounded-full before:content-['<'] before:text-purple-100 before:text-[1.25rem] before:flex before:items-center before:justify-center ${className}`}
    >
      <img
        src={icon}
        alt="mvx icon"
        className=" mx-auto h-[4.29vh] row-start-2 row-end-3"
      />
      <ul className="text-white row-start-4 row-end-5 h-[40vh] flex flex-col">
        {items.map(({ name, link, icon: icons }, id) => (
          <li key={link} className="flex-1">
            <div
              className={`flex items-center gap-x-9 h-full py-2 px-16 ${
                id === 0
                  ? "relative before:absolute before:w-full before:inset-0 before:bg-purple-10 before:opacity-20 after:absolute after:w-2 after:h-full after:bg-yellow-100 after:top-0 after:left-0"
                  : "border-b border-purple-90"
              }
              ${
                id === 1 || id === 4
                  ? "relative before:absolute before:bg-yellow-100 before:top-1/2 before:-translate-y-1/2 before:right-7 before:z-10 before:w-6 before:h-6 before:rounded-md before:text-purple-100 before:text-xs before:flex before:justify-center before:items-center before:font-medium"
                  : ""
              }
              ${id === 1 ? "before:content-['13']" : ""}
              ${id === 4 ? "before:content-['23']" : ""}
              `}
            >
              {icons}
              <div className="text-lg leading-6 font-medium">{name}</div>
            </div>
          </li>
        ))}
      </ul>
      <button className="py-5 px-10 rounded-full bg-purple-10 h-[6.4vh] flex items-center justify-center text-2xl text-purple-100 font-bold row-start-6 row-end-7 justify-self-center">
        Upgrade
      </button>
      <ul className="row-start-[8] row-end-[9] px-16 flex flex-col gap-y-5">
        {itms.map(({ name, icon: icons }) => (
          <li
            className="flex items-center gap-x-9 text-lg leading-6 font-medium text-white"
            key={name}
          >
            {icons}
            <div>{name}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;

const goat = ["90", "54", "120", "136", "74"];
const goats = ["1.67", "54", "2.22", "2.52", "1.37"];
