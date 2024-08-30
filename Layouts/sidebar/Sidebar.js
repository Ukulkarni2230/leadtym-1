"use client";
import { createContext, useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IconButton } from "@mui/material";
import SwitchUserType from "./switch-user-type/SwitchUserType";

export const SidebarContext = createContext();

export default function Sidebar({ children, expanded, setExpanded }) {
  return (
    <aside
      className={`h-screen fixed ${
        expanded ? "2xl:w-72 w-[250px] " : " hidden sm:block"
      }`}
    >
      <nav
        className={`h-full flex flex-col bg-white shadow-sm shadow-[#5E17EB26] ${
          expanded
            ? "overflow-y-auto no-scrollbar"
            : "overflow-y-auto no-scrollbar"
        }`}
      >
        <div
          className={`p-[14.5px] ${
            expanded && "2xl:w-72 w-[250px] py-[14.5px]"
          } border-b  border-[#D8D9D4] flex justify-between items-center`}
        >
          <img
            src="/assets/onboard/Logo.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "2xl:w-44 w-[146px] mt-[1px] h-[30px]" : "w-0"
            }`}
            alt=""
          />
          <button className=" " onClick={() => setExpanded((curr) => !curr)}>
            {expanded ? (
              <IconButton className="bg-[#F8F9FA] hover:bg-gray-200">
                <MdKeyboardDoubleArrowLeft
                  size={22}
                  className="text-[#666666]"
                />
              </IconButton>
            ) : (
              <IconButton className="bg-[#F8F9FA] hover:bg-gray-200">
                <MdKeyboardDoubleArrowRight
                  size={22}
                  className="text-[#666666]"
                />
              </IconButton>
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <ul className={`flex-1 px-3 mt-4`}>{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t">
          <div className="flex justify-center items-center p-3 w-full">
            <SwitchUserType expanded={expanded} setExpanded={setExpanded} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
