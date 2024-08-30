import { useContext, useState, useEffect } from "react";
import { SidebarContext } from "./Sidebar";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
import ConvertIconToImg from "@/src/utils/ConvertIconToImg";

export default function SidebarItem({
  icon,
  text,
  paths,
  alert,
  children,
  imgSrc,
}) {
  const { expanded, setExpanded } = useContext(SidebarContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const active = paths.some((path) => pathname.includes(path));
  useEffect(() => {
    if (active) {
      setDropdownOpen(true);
    }
  }, [active]);

  const handleNavigate = () => {
    if (children) {
    } else {
      router.push(paths[0]);
    }
  };

  return (
    <li
      className={`relative flex flex-col py- my-1 text-sm font-semibold cursor-pointer ${
        expanded ? "px-1" : "px-0"
      }`}
      onClick={handleNavigate}
    >
      <div
        className={`flex h-10 items-center px-3 py-2.5 
        ${!expanded ? "w-10 justify-center" : "justify-between"}
        ${
          active && !children
            ? " text-white gradient-bg "
            : "hover:text-black text-[#666666] px-3 py-2.5 "
        } ${
          active && "text-black font-semibold"
        } transition-colors rounded-full`}
        onClick={children && toggleDropdown}
      >
        <div className="flex items-center ">
          <span
            onClick={() => children && setExpanded(true)}
            className={` ${
              dropdownOpen && children && "text-black "
            } font-normal ${
              !expanded ? "justify-center text-xl" : "text-[18px]"
            }`}
            style={{ width: expanded ? "24px" : "auto" }} // Set a fixed width when expanded
          >
            {icon}
          </span>
          <span
            className={`overflow-hidden text-[12px] sm:text-[14px] 2xl:text-[16px] font-semibold ${
              dropdownOpen && children && "text-black "
            } transition-all ${
              expanded
                ? "mt-[1px] ml-2 w-full truncate whitespace-nowrap"
                : "w-0"
            }`}
          >
            {text}
          </span>
        </div>
        {expanded && children && (
          <span>
            {dropdownOpen ? (
              <BiChevronDown className="text-xl" />
            ) : (
              <BiChevronRight className="text-xl" />
            )}
          </span>
        )}
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-red-500 ${
              expanded ? "" : "top-2 right-1"
            }`}
          />
        )}
      </div>
      {dropdownOpen && expanded && (
        <div className="flex flex-col pl-4">{children}</div>
      )}
    </li>
  );
}
