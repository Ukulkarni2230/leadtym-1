"use client";

import React from "react";
import { usePathname } from "next/navigation";

import UserSelectionPage from "@/src/components/pages/onBoard/UserSelectionPage";
import onboardRoutes from "@/src/components/pages/onBoard/onBoardRoutes";

const Page = () => {
  const section = usePathname();

  if (!onboardRoutes.includes(section)) {
    return <div>Page not found</div>;
  }

  return (
    <div className="md:h-screen">
      <UserSelectionPage />
    </div>
  );
};

export default Page;
