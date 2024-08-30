import React, { useEffect, useState } from "react";
import {
  BiArrowBack,
  BiChevronDown,
  BiChevronUp,
  BiCog,
  BiLogOut,
  BiMoon,
  BiSun,
  BiUser,
} from "react-icons/bi";
import WalletDisplay from "./WalletDisplay";
import { useRouter, usePathname } from "next/navigation";
import Notifications from "./notification/Notifications";
import { MdCampaign, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IconButton, Menu } from "@mui/material";
import NavInfluencer from "./NavInfluencer";
import NavSettings from "./NavSettings";
import NavBrandDeal from "./NavBrandDeal";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@/src/hooks/user-service/useUser";
import useLogout from "@/src/hooks/useLogout";
import InboxMessage from "./inbox-message/InboxMessage";
import { fetchWallet } from "@/src/Redux/wallet/walletSlice";

const Header = ({ expanded, setExpanded }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const pathname = usePathname();
  const [activeIcon, setActiveIcon] = useState(pathname);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userDetails.name);
  const { userDetails } = useUser();
  useEffect(() => {
    setActiveIcon(pathname);
  }, [pathname]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleBackClick = () => {
    router.back();
  };

  const handleLogout = useLogout();

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full overflow-hidden justify-between gap-2 border-b border-[#D8D9D4] bg-white h-[67.5px] items-center flex px-3 sm:pl-5 z-10`}
    >
      <div className={`w-full ${expanded ? "sm:ml-72" : "sm:ml-[66.5px]"}`}>
        <div className="block sm:hidden">
          {!expanded && (
            <IconButton
              onClick={() => setExpanded((curr) => !curr)}
              className="bg-[#F0F0F0] hover:bg-gray-200"
            >
              <MdKeyboardDoubleArrowRight
                size={22}
                className="text-[#666666]"
              />
            </IconButton>
          )}
        </div>
        {pathname.includes("/influencers") && (
          <div className="lg:block hidden  w-full ">
            <NavInfluencer activeIcon={activeIcon} />
          </div>
        )}
        {pathname.includes("/settings") && (
          <div className="lg:block hidden  w-full ">
            <NavSettings activeIcon={activeIcon} />
          </div>
        )}
        {pathname.includes("/brand-deal") && (
          <div className="lg:block hidden  w-full ">
            <NavBrandDeal activeIcon={activeIcon} />
          </div>
        )}
        {/* {!pathname.includes("/influencers") &&
          !pathname.includes("/settings") &&
          !pathname.includes("/brand-deal") && (
            <div className="flex items-center">
              <BiArrowBack
                className="text-[18px] text-[#21272A] cursor-pointer"
                onClick={handleBackClick}
              />
              <span className="ml-1 text-[#21272A] sm:text-base text-sm 2xl:text-lg">
                Dashboard
              </span>
            </div>
          )} */}
      </div>

      <div className="flex gap-1 sm:gap-1 h-full items-center">
        <button
          onClick={() => dispatch(fetchWallet())}
          className="p-4 rounded-xl bg-gray-300 text-black"
        >
          fetch balance
        </button>
        <WalletDisplay balance={8453.0} />
        <div className="flex gap-1 sm:gap-2 bg-[#F0F0F0] rounded-full p-2 py-[5px] justify-center">
          <div
            className="relative md:w-[68px] w-[46px] bg-white rounded-full sm:p-1 p-[0px]"
            onClick={toggleMode}
          >
            <div
              className={`absolute left-1 top-1 md:w-6 md:h-6 w-[16px] h-[16px] rounded-full transition-transform duration-300 gradient-bg text-white ${
                isDarkMode ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                transform: `translateX(${isDarkMode ? "0%" : "150%"})`,
                boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="absolute inset-0 rounded-full animate-pulse border-2 border-transparent border-l-purple-100"></div>
            </div>
            <BiMoon
              className={`absolute left-2 top-1.5 text-[14px] md:text-[20px] text-black transition-opacity duration-300 ${
                !isDarkMode ? "opacity-100" : "opacity-0"
              }`}
            />
            <BiSun
              className={`absolute right-2 top-1.5 text-[14px] md:text-[20px] text-black transition-opacity duration-300 ${
                !isDarkMode ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <Notifications />
          <InboxMessage />
        </div>
        <div>
          <div className="relative">
            <button
              className="flex items-center space-x-2 bg-[#F0F0F0] rounded-full md:px-1.5 md:py-1 p-1.5 py-[5px]"
              onClick={handleMenuOpen}
            >
              <div className="bg-white text-black rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-[14px] font-bold md:font-normal md:text-[14px]">
                {userName?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="md:block hidden">
                <p className="font-semibold text-black overflow-hidden whitespace-nowrap truncate w-[80px] 2xl:w-full text-start text-[12px] sm:text-[14px] 2xl:text-[16px]">
                  {userName || "User"}
                </p>
                {userDetails?.email && (
                  <div className="w-[120px] 2xl:w-full  text-start -mt-1 text-[#666666] block overflow-hidden whitespace-nowrap truncate font-extralight text-[12px]">
                    {userDetails.email}
                  </div>
                )}
              </div>
              {isMenuOpen ? (
                <BiChevronUp className="text-[#36434D] md:block hidden text-[18px] sm:text-[20px]" />
              ) : (
                <BiChevronDown className="text-[#36434D] md:block hidden text-[18px] sm:text-[20px]" />
              )}
            </button>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              PaperProps={{
                style: {
                  border: "1px solid rgba(0, 0, 0, 0.12)", // Add a border
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  minWidth: "150px", // Ensure a proper width
                  padding: "0 6px",
                },
              }}
            >
              <div
                onClick={handleMenuClose}
                className={`flex items-center px-4 text-sm sm:text-base mb-1 2xl:text-lg font-semibold py-1 rounded-full gap-2 cursor-pointer hover:bg-gray-200 ${
                  activeIcon.includes("/profile")
                    ? "gradient-bg text-white"
                    : ""
                }`}
              >
                <BiUser /> Profile
              </div>
              <div
                onClick={handleMenuClose}
                className={`flex items-center px-4 text-sm sm:text-base mb-1 2xl:text-lg font-semibold py-1 rounded-full gap-2 cursor-pointer hover:bg-gray-200 ${
                  activeIcon.includes("/campaign")
                    ? "gradient-bg text-white"
                    : ""
                }`}
              >
                <MdCampaign /> Campaign
              </div>
              <div
                onClick={handleMenuClose}
                className={`flex items-center px-4 text-sm sm:text-base mb-1 2xl:text-lg font-semibold py-1 rounded-full gap-2 cursor-pointer hover:bg-gray-200 ${
                  activeIcon.includes("/setting")
                    ? "gradient-bg text-white"
                    : ""
                }`}
              >
                <BiCog /> Setting
              </div>
              <div
                onClick={() => {
                  handleMenuClose();
                  handleLogout();
                }}
                className={`flex items-center px-4 text-sm sm:text-base mb-1 2xl:text-lg font-semibold py-1 rounded-full gap-2 cursor-pointer hover:bg-gray-200 ${
                  activeIcon.includes("/logout") ? "gradient-bg text-white" : ""
                }`}
              >
                <BiLogOut /> Logout
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
