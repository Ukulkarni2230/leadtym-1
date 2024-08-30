import { useContext } from "react";
import { usePathname, useRouter } from "next/navigation"; // Import usePathname from next/navigation
import { SidebarContext } from "./Sidebar";

export default function SidebarChildItem({ text, path }) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname(); // Directly get the pathname
  const isActive = pathname.includes(path);
  const router = useRouter();

  return (
    <li
      className={` cursor-pointer border-l border-[#D8D9D4] ml-[0px]`}
      onClick={() => router.push(path)}
    >
      <li
        className={` ml-1.5 py-2  ${
          isActive
            ? "border-blue-500 text-white hover:text-gray-200  rounded-full border-none t gradient-bg"
            : " hover:text-black"
        } ${expanded ? "text-gray-500" : "text-gray-400"}  transition-colors`}
      >
        {expanded && (
          <div className="flex  px-4 whitespace-nowrap items-center">
            <span className="text-sm">{text}</span>
          </div>
        )}
      </li>
    </li>
  );
}
