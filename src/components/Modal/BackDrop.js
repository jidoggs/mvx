import React from "react";

function BackDrop({ children, handleClose, className }) {
  return (
    <div
      onClick={handleClose}
      className=" fixed inset-0 h-screen overflow-y-hidden w-full flex  justify-center items-center z-20"
    >
      <div className="bg-black-100 opacity-20 fixed inset-0" />
      <section
        className={`${
          className ? className : ""
        }  rounded h-max z-20  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </section>
    </div>
  );
}

export default BackDrop;
