import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import Spinner from './spinner';


const GoogleButton = ({ onClick, isLoading, className = "", ...props }) => {
  return (
    <button
      className={`bg-transparent flex h-[56px] items-center justify-center gap-1 sm:gap-4 w-full border-[1px] border-[#E8E8E8] rounded-full py-2 px-4 text-[#828282] font-bold text-[12px] sm:text-[14px] 2xl:text-[16px] transition-colors duration-150 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-800 ${className}`}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner /> // Show spinner when loading
      ) : (
        <>
          <FcGoogle className="sm:h-[25px] sm:w-[25px] h-[15px] w-[15px]" />
          Continue with Google
        </>
      )}
    </button>
  );
};

export default GoogleButton;
