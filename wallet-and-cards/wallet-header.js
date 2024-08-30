import React from "react";

function WalletHeader() {
  return (
    <>
      <div className="w-full sm:flex gap-6 py-1.5 sm:py-3 px-4 inline-block items-center justify-between alert-info">
        <div className="flex text-start gap-x-1">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.084 6.41634H11.9173V8.24967H10.084V6.41634ZM10.084 10.083H11.9173V15.583H10.084V10.083ZM11.0007 1.83301C5.94065 1.83301 1.83398 5.93967 1.83398 10.9997C1.83398 16.0597 5.94065 20.1663 11.0007 20.1663C16.0607 20.1663 20.1673 16.0597 20.1673 10.9997C20.1673 5.93967 16.0607 1.83301 11.0007 1.83301ZM11.0007 18.333C6.95815 18.333 3.66732 15.0422 3.66732 10.9997C3.66732 6.95717 6.95815 3.66634 11.0007 3.66634C15.0431 3.66634 18.334 6.95717 18.334 10.9997C18.334 15.0422 15.0431 18.333 11.0007 18.333Z"
              fill="#0288D1"
            />
          </svg>
          <span className="text-info sm:text-sm text-xs 2xl:text-base leading-5 font-normal">
            Click the link in the email we sent you to verifiy, or Click on
            Resend to request a new verification email.
          </span>
        </div>
        <div className="flex w-full sm:w-auto justify-end items-center">
          <button className="text-info-main">RESEND</button>
        </div>
      </div>
    </>
  );
}

export default WalletHeader;
