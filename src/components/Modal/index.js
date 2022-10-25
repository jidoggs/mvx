import { Add, Clock, Information, Profile2User } from "iconsax-react";
import React, { useContext } from "react";
import { ModalContex } from "../../App";
import BackDrop from "./BackDrop";

const buttons = ["Events", "Class", "Task"];

function Modal() {
  const [showModalHandler] = useContext(ModalContex);

  const submitHandler = (e) => {
    e.preventDefault();
    showModalHandler();
  };
  return (
    <BackDrop
      className="short:w-[952px] pshorty:w-[600px] mini:w-[464px] w-96 h-full max-h-[846px] mini:min-h-[660px] min-h-[600px]"
      handleClose={showModalHandler}
    >
      <div className="bg-white h-full max-h-[846px] min-h-[660px] w-full pb-12  relative rounded-[10px] overflow-hidden">
        <header className="bg-purple-210 pb-20 text-center relative bg-purple-100 pt-12 text-white  ">
          <h2 className="text-3xl font-bold">Add New Events</h2>
          <button onClick={showModalHandler} className="absolute top-3 right-6 rotate-45">
            <Add size="50" className="" color="#ffffff" variant="Outline" />
          </button>
        </header>
        <form
          className=" absolute left-0 right-0 pshorty:px-12 px-6 top-32 "
          onSubmit={submitHandler}
        >
          <div className="flex flex-col gap-y-9 p-9 z-40 pl-11 rounded-[10px] shadow-modalinput bg-white">
            <div className="flex mini:gap-x-10 ">
              <div className="flex mini:items-center mini:gap-x-2.5 flex-1 mini:flex-row flex-col mini:gap-y-0 gap-y-1">
                {buttons.map((btn, id) => (
                  <button
                    key={btn}
                    className={`py-3 px-7 rounded-md font-medium text-base leading-none z-0 flex-1 ${
                      id === 0
                        ? "bg-purple-10 text-purple-100"
                        : "bg-gray-10 text-gray-20"
                    }`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              <div className="short:flex-1 "></div>
            </div>
            <div className="flex short:flex-row flex-col short:gap-x-10 short:gap-y-0 gap-y-9 h-64 overflow-y-scroll">
              <div className="flex flex-col gap-y-9 flex-1">
                <div className="flex flex-col gap-y-7">
                  <div>
                    <label
                      className="inline-flex items-center gap-x-1.5 text-base leading-5 text-gray-60"
                      htmlFor="title"
                    >
                      Title
                      <Information
                        size="12"
                        color="#6A35FF"
                        variant="Outline"
                      />
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Name of event"
                      className="mt-2 p-3 pl-6 w-full border border-gray-20 placeholder:text-gray-50 placeholder:text-xs rounded-md"
                    />
                  </div>
                  <div>
                    <label
                      className="inline-flex items-center gap-x-1.5 text-base leading-5 text-gray-60"
                      htmlFor="title"
                    >
                      Title
                      <Information
                        size="12"
                        color="#6A35FF"
                        variant="Outline"
                      />
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Name of event"
                      className="mt-2 p-3 pl-6 w-full border border-gray-20 placeholder:text-gray-50 placeholder:text-xs rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-[30px]">
                  <div className="flex items-center gap-x-9 border-b border-gray-20">
                    <button className="pb-2.5 text-100 font-medium text-purple-100 relative before:absolute before:h-1 before:w-full before:rounded-t-md before:bottom-0 before:left-0 before:bg-purple-100  before:right-0 ">
                      Event Details
                    </button>
                    <button className="pb-2.5 text-100 font-medium text-gray-20 ">
                      Find a time{" "}
                    </button>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col gap-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                          <Clock size="16" color="#A0A6B1" variant="Outline" />
                          <p className="text-xs text-gray-20 font-medium">
                            Select time
                          </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <Profile2User
                            size="16"
                            color="#A0A6B1"
                            variant="Outline"
                          />
                          <p className="text-xs text-gray-20 font-medium">
                            Add classmate
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="py-2 pr-9 pl-2.5 rounded bg-purple-150 text-xs font-medium text-gray-50">
                          <span>Notification</span>
                        </div>
                        <div className="p-2 rounded bg-purple-150 text-xs font-medium text-gray-50">
                          30
                        </div>
                        <div className="p-2 px-5 flex-1 rounded bg-purple-150 text-xs font-medium text-gray-50">
                          Minutes
                        </div>
                      </div>
                    </div>
                    <div className="flex-1" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-7">
                  <div>
                    <label
                      className="inline-flex items-center gap-x-1.5 text-base leading-5 text-gray-60"
                      htmlFor="title"
                    >
                      Title
                      <Information
                        size="12"
                        color="#6A35FF"
                        variant="Outline"
                      />
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Name of event"
                      className="mt-2 p-3 pl-6 w-full border border-gray-20 placeholder:text-gray-50 placeholder:text-xs rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1  flex flex-col gap-y-4 h-full">
                <label
                  className="inline-flex items-center gap-x-1.5 text-base leading-5 text-gray-60"
                  htmlFor="title"
                >
                  Description/instructions
                  <Information size="12" color="#6A35FF" variant="Outline" />
                </label>
                <textarea
                  className="p-7 border rounded flex-1 placeholder:text-gray-50 border-gray-20 placeholder:text-xs"
                  placeholder="Write a summary and any details your should know about the event "
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center gap-x-2.5 justify-end">
              <button type="button" className="py-4 px-10 bg-gray-10 text-gray-60 rounded-md font-medium text-base leading-none">
                Cancel
              </button>
              <button className="py-4 px-7 bg-purple-100 text-white rounded-md font-medium text-base leading-none">
                Save more{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </BackDrop>
  );
}

export default Modal;
