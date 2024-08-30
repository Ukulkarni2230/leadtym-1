import React, { useState } from "react";
import CompletionModal from "./add-app-steps/CompletionModal";
import AppAdder from "./app-adder";

const AddApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };

  const handleAddMyAppClick = () => {
    setIsOpen(false);
    setIsModalOpen(true);
  };

  return (
    <div className="h-[80vh] w-full flex justify-center items-center">
      <div className="w-full text-[#0E0E0E] text-xs sm:text-sm 2xl:text-base font-normal">
        <p className="text-center">
          Ready to set your campaign rule? Create your own rule
        </p>
        <p className="text-center">to manage campaign properly</p>
        <div className="flex justify-center w-full mt-4">
          <button
            onClick={toggleDrawer(true)}
            className="gradient-bg w-[127px] text-white text-sm sm:text-base 2xl:text-lg h-[42px] flex justify-center  items-center rounded-full px-4 text-center mx-auto"
          >
            + Add App
          </button>
        </div>
        {isOpen && (
          <AppAdder
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleDrawer={toggleDrawer}
            handleAddMyAppClick={handleAddMyAppClick}
          />
        )}
        <CompletionModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default AddApp;
