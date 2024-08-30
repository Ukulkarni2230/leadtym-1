"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./sidebar/Sidebar";
import Header from "../pages/header/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Correct import
import SidebarItem from "./sidebar/SidebarItem";
import SidebarChildItem from "./sidebar/SidebarChildItem";
import { sidebarConfig } from "./sidebarConfig";
import { MenuToggle } from "./sidebar/SidebarMenu";
import useUserStatus from "@/src/hooks/user-status/useUserStatus";
import { useUser } from "@/src/hooks/user-service/useUser";
import useWalletBalanceListener from "@/src/hooks/firebase-listner/useWalletBalanceListener";
import { USER_ID } from "@/src/Redux/wallet/walletSlice";

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const userType = useSelector((state) => state.user?.userDetails?.userType);
  const { userDetails } = useUser();
  console.log(userDetails, "ssss");
  useWalletBalanceListener(USER_ID);

  useEffect(() => {
    const auth = getAuth(); // Initialize auth
    const unsubscribeAuth = onAuthStateChanged(auth, setUser);
    return () => unsubscribeAuth();
  }, []);

  useUserStatus();

  const renderSidebarItems = (items) => {
    if (!items || !Array.isArray(items)) {
      return null;
    }

    return items.map((item, index) => (
      <SidebarItem
        key={index}
        icon={item.icon}
        text={item.text}
        paths={item.paths}
        children={
          item.children && (
            <React.Fragment>
              {item.children.map((child, childIndex) => (
                <SidebarChildItem
                  key={childIndex}
                  text={child.text}
                  path={child.path}
                />
              ))}
            </React.Fragment>
          )
        }
      />
    ));
  };

  const userConfig = sidebarConfig[userType] || {};
  const { menu = [], master = [] } = userConfig;

  return (
    <div className="flex w-full">
      <div className="z-20">
        <Sidebar expanded={expanded} setExpanded={setExpanded}>
          <MenuToggle text="MENU" expanded={expanded}>
            {renderSidebarItems(menu)}
            {renderSidebarItems(sidebarConfig.global)}
          </MenuToggle>
          <MenuToggle text="MASTER" expanded={expanded}>
            {renderSidebarItems(master)}
          </MenuToggle>
        </Sidebar>
      </div>
      <div
        className={`${
          expanded ? "sm:ml-[250px] 2xl:ml-72 " : "sm:ml-[66.5px]"
        } w-full transition-all duration-300 overflow-hidden`}
      >
        <Header expanded={expanded} setExpanded={setExpanded} />
        <div className="bg-[#F8F9FA] min-h-screen overflow-hidden pt-[67.5px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
