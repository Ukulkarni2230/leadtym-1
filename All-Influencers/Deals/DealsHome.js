"use client";
import React, { useEffect, useState } from "react";
import DealsTable from "./DealsTable";
import DealCreator from "./DealCreator";
import { useRouter } from "next/navigation";

const DealsHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const editParam = new URLSearchParams(window.location.search).get("edit");
    if (editParam === "true") {
      setIsOpen(true);
    }
  }, [router]);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  return (
    <div>
      <DealsTable toggleDrawer={toggleDrawer} />
      {isOpen && (
        <DealCreator
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleDrawer={toggleDrawer}
        />
      )}
    </div>
  );
};

export default DealsHome;
