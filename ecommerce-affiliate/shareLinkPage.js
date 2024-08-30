"use client";

import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiSend } from "react-icons/fi";
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';
import LinkCopiedCard from "./linkCopiedCard";
import LinkConvertedCard from "./linkConvertedCard";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function ShareLinkPage({ handleCloseSocial, openSocial, setOpenSocial }) {
  const [progress, setProgress] = useState(0);
  const [showLinkCopyCard, setShowLinkCopyCard] = useState(false);
  const [showLinkConvertedCard, setShowLinkConvertedCard] = useState(false);

  const linkCopyCardOpen = () => {
    setShowLinkCopyCard(true);
  };

  const linkCopyCardClose = () => {
    setShowLinkCopyCard(false);
  };

  const linkConvertedCardOpen = () => {
    setShowLinkConvertedCard(true);
  };

  const linkConvertedCardClose = () => {
    setShowLinkConvertedCard(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="w-[417px] h-max bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-primary font-bold text-lg leading-7">
            Your Link
          </h1>
          <RxCross2
            onClick={handleCloseSocial}
            className="cursor-pointer"
            size={24}
            color="gray"
            fontWeight={700}
          />
        </div>
        <p className="leading-5 mt-6 mb-6">
          The
          <span className="text-primary font-bold">
            &nbsp;Share button&nbsp;
          </span>
          will copy your affiliate link and take you to the social media
          platform to share it
        </p>
        <div className="flex flex-col">
          <div className="w-full flex items-center justify-between bg-gray-100 rounded-2xl mb-3 p-2">
            <div className="flex items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2495_162379)">
                  <path
                    d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.15547 8.07227H14.0506L19.1761 15.514L25.5892 8.07227H27.338L19.9105 16.5804L27.9019 28.1832H22.1399L16.672 20.3198L9.85034 28.1831H8.10156L15.9359 19.2613L8.15547 8.07227ZM10.5455 9.32139L22.7927 26.934H25.5248L13.3942 9.32139H10.5455Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2495_162379">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-3 text-tertiary leading-6 font-semibold">
                Twitter
              </span>
            </div>
            <button
              onClick={linkConvertedCardOpen}
              className="flex items-center gradient-bg border rounded-full border-none text-white p-3 pl-4 pr-4"
            >
              <span className="mr-2 leading-5 font-bold">Share</span>
              <FiSend size={18} />
            </button>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-100 rounded-2xl mb-3 p-2">
            <div className="flex items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2495_162392)">
                  <path
                    d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z"
                    fill="url(#paint0_radial_2495_162392)"
                  />
                  <path
                    d="M18.0046 9.14597C20.8904 9.14597 21.2291 9.15883 22.3697 9.21028C23.4246 9.25745 23.9949 9.43326 24.3765 9.58334C24.8825 9.78059 25.2427 10.0122 25.62 10.3895C25.9974 10.7669 26.2332 11.127 26.4262 11.633C26.572 12.0147 26.7521 12.585 26.7992 13.6398C26.8507 14.7804 26.8635 15.1192 26.8635 18.005C26.8635 20.8908 26.8507 21.2295 26.7992 22.3701C26.7521 23.425 26.5762 23.9953 26.4262 24.3769C26.2289 24.8829 25.9974 25.2431 25.62 25.6204C25.2427 25.9978 24.8825 26.2336 24.3765 26.4266C23.9949 26.5724 23.4246 26.7525 22.3697 26.7996C21.2291 26.8511 20.8904 26.8639 18.0046 26.8639C15.1187 26.8639 14.78 26.8511 13.6394 26.7996C12.5845 26.7525 12.0142 26.5766 11.6326 26.4266C11.1266 26.2293 10.7664 25.9978 10.3891 25.6204C10.0118 25.2431 9.77592 24.8829 9.58296 24.3769C9.43717 23.9953 9.25707 23.425 9.2099 22.3701C9.15845 21.2295 9.14559 20.8908 9.14559 18.005C9.14559 15.1192 9.15845 14.7804 9.2099 13.6398C9.25707 12.585 9.43288 12.0147 9.58296 11.633C9.7802 11.127 10.0118 10.7669 10.3891 10.3895C10.7664 10.0122 11.1266 9.7763 11.6326 9.58334C12.0142 9.43755 12.5845 9.25745 13.6394 9.21028C14.78 9.15454 15.123 9.14597 18.0046 9.14597ZM18.0046 7.19922C15.0716 7.19922 14.7028 7.21209 13.5493 7.26354C12.4002 7.315 11.6155 7.49938 10.9294 7.76523C10.2176 8.03967 9.61726 8.41272 9.01694 9.01304C8.41662 9.61336 8.04786 10.218 7.76914 10.9255C7.50328 11.6116 7.3189 12.3963 7.26744 13.5498C7.21599 14.6989 7.20312 15.0677 7.20312 18.0007C7.20312 20.9337 7.21599 21.3024 7.26744 22.4559C7.3189 23.6051 7.50328 24.3898 7.76914 25.0801C8.04357 25.7919 8.41662 26.3923 9.01694 26.9926C9.61726 27.5929 10.2219 27.9617 10.9294 28.2404C11.6155 28.5062 12.4002 28.6906 13.5536 28.7421C14.7071 28.7935 15.0716 28.8064 18.0088 28.8064C20.9461 28.8064 21.3106 28.7935 22.4641 28.7421C23.6132 28.6906 24.3979 28.5062 25.0883 28.2404C25.8001 27.966 26.4004 27.5929 27.0008 26.9926C27.6011 26.3923 27.9698 25.7877 28.2486 25.0801C28.5144 24.3941 28.6988 23.6094 28.7503 22.4559C28.8017 21.3024 28.8146 20.9379 28.8146 18.0007C28.8146 15.0634 28.8017 14.6989 28.7503 13.5455C28.6988 12.3963 28.5144 11.6116 28.2486 10.9212C27.9741 10.2094 27.6011 9.60907 27.0008 9.00875C26.4004 8.40843 25.7958 8.03967 25.0883 7.76095C24.4022 7.49509 23.6175 7.31071 22.4641 7.25925C21.3063 7.21209 20.9375 7.19922 18.0046 7.19922Z"
                    fill="white"
                  />
                  <path
                    d="M18.0018 12.457C14.9402 12.457 12.4531 14.9398 12.4531 18.0057C12.4531 21.0716 14.9359 23.5543 18.0018 23.5543C21.0677 23.5543 23.5504 21.0716 23.5504 18.0057C23.5504 14.9398 21.0677 12.457 18.0018 12.457ZM18.0018 21.6033C16.0122 21.6033 14.3999 19.991 14.3999 18.0014C14.3999 16.0118 16.0122 14.3995 18.0018 14.3995C19.9914 14.3995 21.6037 16.0118 21.6037 18.0014C21.6037 19.991 19.9914 21.6033 18.0018 21.6033Z"
                    fill="white"
                  />
                  <path
                    d="M23.7715 13.5295C24.4867 13.5295 25.0665 12.9497 25.0665 12.2345C25.0665 11.5193 24.4867 10.9395 23.7715 10.9395C23.0563 10.9395 22.4766 11.5193 22.4766 12.2345C22.4766 12.9497 23.0563 13.5295 23.7715 13.5295Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_2495_162392"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(6.3 32.4) rotate(-46.4203) scale(38.5138)"
                  >
                    <stop stop-color="#FFD954" />
                    <stop offset="0.385001" stop-color="#F34E55" />
                    <stop offset="0.767047" stop-color="#CC40CE" />
                    <stop offset="1" stop-color="#3148BE" />
                  </radialGradient>
                  <clipPath id="clip0_2495_162392">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-3 text-tertiary leading-6 font-semibold">
                Instagram
              </span>
            </div>
            <button
              onClick={linkConvertedCardOpen}
              className="flex items-center gradient-bg border rounded-full border-none text-white p-3 pl-4 pr-4"
            >
              <span className="mr-2 leading-5 font-bold">Share</span>
              <FiSend size={18} />
            </button>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-100 rounded-2xl mb-3 p-2">
            <div className="flex items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2495_162407)">
                  <path
                    d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z"
                    fill="#25D366"
                  />
                  <path
                    d="M7.08203 28.4718L8.62543 22.8672C7.67123 21.2222 7.17067 19.3592 7.17589 17.4547C7.17589 11.4869 12.0564 6.63477 18.0475 6.63477C20.957 6.63477 23.6892 7.76088 25.7384 9.80551C27.7928 11.8501 28.9243 14.5694 28.9191 17.4599C28.9191 23.4277 24.0386 28.2798 18.0423 28.2798H18.037C16.2173 28.2798 14.4288 27.8231 12.8385 26.9617L7.08203 28.4718ZM13.1148 25.0053L13.4433 25.2025C14.8303 26.0224 16.4206 26.4531 18.0423 26.4583H18.0475C23.027 26.4583 27.0837 22.4261 27.0837 17.4651C27.0837 15.0624 26.1451 12.805 24.4401 11.1028C22.735 9.40073 20.4616 8.46664 18.0475 8.46664C13.0679 8.46145 9.01128 12.4936 9.01128 17.4547C9.01128 19.1516 9.48577 20.807 10.393 22.2393L10.6068 22.5818L9.69434 25.8979L13.1148 25.0053Z"
                    fill="white"
                  />
                  <path
                    d="M7.46094 28.0931L8.9522 22.6805C8.02928 21.0977 7.54436 19.297 7.54436 17.4599C7.54958 11.6997 12.258 7.01367 18.0457 7.01367C20.8562 7.01367 23.4894 8.10345 25.4708 10.0754C27.4521 12.0474 28.5419 14.6732 28.5419 17.4651C28.5419 23.2254 23.8283 27.9114 18.0457 27.9114H18.0405C16.2833 27.9114 14.5575 27.4703 13.0245 26.64L7.46094 28.0931Z"
                    fill="#25D366"
                  />
                  <path
                    d="M7.08203 28.4718L8.62543 22.8672C7.67123 21.2222 7.17067 19.3592 7.17589 17.4547C7.17589 11.4869 12.0564 6.63477 18.0475 6.63477C20.957 6.63477 23.6892 7.76088 25.7384 9.80551C27.7928 11.8501 28.9243 14.5694 28.9191 17.4599C28.9191 23.4277 24.0386 28.2798 18.0423 28.2798H18.037C16.2173 28.2798 14.4288 27.8231 12.8385 26.9617L7.08203 28.4718ZM13.1148 25.0053L13.4433 25.2025C14.8303 26.0224 16.4206 26.4531 18.0423 26.4583H18.0475C23.027 26.4583 27.0837 22.4261 27.0837 17.4651C27.0837 15.0624 26.1451 12.805 24.4401 11.1028C22.735 9.40073 20.4616 8.46664 18.0475 8.46664C13.0679 8.46145 9.01128 12.4936 9.01128 17.4547C9.01128 19.1516 9.48577 20.807 10.393 22.2393L10.6068 22.5818L9.69434 25.8979L13.1148 25.0053Z"
                    fill="url(#paint0_linear_2495_162407)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.3326 12.9292C15.1292 12.4777 14.9154 12.4673 14.7225 12.4622C14.5661 12.457 14.3836 12.457 14.2011 12.457C14.0186 12.457 13.7266 12.5244 13.4763 12.7943C13.226 13.0641 12.5273 13.718 12.5273 15.0517C12.5273 16.3802 13.5024 17.6671 13.638 17.8488C13.7735 18.0304 15.5203 20.8482 18.2786 21.9328C20.5728 22.8358 21.0421 22.6542 21.5375 22.6075C22.0328 22.5608 23.1434 21.9536 23.3729 21.3205C23.5971 20.6874 23.5971 20.1477 23.5293 20.0335C23.4615 19.9193 23.279 19.8519 23.0079 19.717C22.7367 19.582 21.4019 18.9282 21.1516 18.8348C20.9013 18.7465 20.7188 18.6998 20.5416 18.9697C20.3591 19.2395 19.8376 19.8467 19.6812 20.0283C19.5248 20.2099 19.3631 20.2307 19.092 20.0958C18.8209 19.9609 17.9449 19.6754 16.9073 18.7517C16.0991 18.0356 15.5516 17.1482 15.3951 16.8783C15.2387 16.6085 15.3795 16.4632 15.5151 16.3283C15.635 16.2089 15.7862 16.0117 15.9218 15.856C16.0574 15.7003 16.1043 15.5862 16.1929 15.4046C16.2816 15.2229 16.2398 15.0672 16.1721 14.9323C16.1043 14.8026 15.5724 13.4637 15.3326 12.9292Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2495_162407"
                    x1="18.0027"
                    y1="28.4697"
                    x2="18.0027"
                    y2="6.63477"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9F9F9" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <clipPath id="clip0_2495_162407">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-3 text-tertiary leading-6 font-semibold">
                Whatsapp
              </span>
            </div>
            <button
              onClick={linkConvertedCardOpen}
              className="flex items-center gradient-bg border rounded-full border-none text-white p-3 pl-4 pr-4"
            >
              <span className="mr-2 leading-5 font-bold">Share</span>
              <FiSend size={18} />
            </button>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-100 rounded-2xl mb-3 p-2">
            <div onClick={linkConvertedCardOpen} className="flex items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2495_162423)">
                  <path
                    d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z"
                    fill="url(#paint0_linear_2495_162423)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.2771 17.8983C13.8673 15.8661 16.9282 14.5264 18.4597 13.8791C22.8325 12.0309 23.7412 11.7099 24.3334 11.6993C24.4636 11.6969 24.7549 11.7297 24.9435 11.8853C25.1028 12.0166 25.1467 12.1941 25.1676 12.3186C25.1886 12.4431 25.2147 12.7268 25.194 12.9485C24.957 15.4784 23.9317 21.618 23.41 24.4516C23.1893 25.6507 22.7547 26.0527 22.3339 26.092C21.4196 26.1775 20.7252 25.478 19.8396 24.8881C18.4537 23.965 17.6708 23.3903 16.3256 22.4896C14.771 21.4486 15.7788 20.8764 16.6648 19.9413C16.8966 19.6966 20.9255 15.973 21.0034 15.6352C21.0132 15.5929 21.0222 15.4354 20.9302 15.3523C20.8381 15.2691 20.7022 15.2976 20.6042 15.3202C20.4652 15.3522 18.2513 16.8392 13.9625 19.781C13.3341 20.2194 12.7649 20.4331 12.2549 20.4219C11.6927 20.4095 10.6112 20.0989 9.80727 19.8333C8.82118 19.5076 8.03746 19.3354 8.10571 18.7822C8.14125 18.4941 8.53172 18.1995 9.2771 17.8983Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2495_162423"
                    x1="18"
                    y1="0"
                    x2="18"
                    y2="35.733"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2AABEE" />
                    <stop offset="1" stop-color="#229ED9" />
                  </linearGradient>
                  <clipPath id="clip0_2495_162423">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-3 text-tertiary leading-6 font-semibold">
                Telegram
              </span>
            </div>
            <button className="flex items-center gradient-bg border rounded-full border-none text-white p-3 pl-4 pr-4">
              <span className="mr-2 leading-5 font-bold">Share</span>
              <FiSend size={18} />
            </button>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-100 rounded-2xl mb-3 p-2">
            <div className="flex items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2495_162436)">
                  <path
                    d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M26.4399 8.09961H9.56319C9.17554 8.09961 8.80377 8.2536 8.52966 8.52771C8.25555 8.80182 8.10156 9.17359 8.10156 9.56123V26.438C8.10156 26.8256 8.25555 27.1974 8.52966 27.4715C8.80377 27.7456 9.17554 27.8996 9.56319 27.8996H26.4399C26.8276 27.8996 27.1994 27.7456 27.4735 27.4715C27.7476 27.1974 27.9016 26.8256 27.9016 26.438V9.56123C27.9016 9.17359 27.7476 8.80182 27.4735 8.52771C27.1994 8.2536 26.8276 8.09961 26.4399 8.09961ZM14.0031 24.9667H11.0262V15.5108H14.0031V24.9667ZM12.5126 14.2005C12.1749 14.1986 11.8453 14.0967 11.5655 13.9077C11.2857 13.7187 11.0681 13.451 10.9403 13.1384C10.8124 12.8259 10.78 12.4825 10.8472 12.1515C10.9143 11.8206 11.078 11.517 11.3175 11.279C11.5571 11.041 11.8618 10.8792 12.1931 10.8142C12.5245 10.7492 12.8677 10.7838 13.1794 10.9137C13.4911 11.0435 13.7574 11.2628 13.9446 11.5438C14.1318 11.8249 14.2316 12.155 14.2313 12.4927C14.2345 12.7188 14.1921 12.9432 14.1067 13.1526C14.0214 13.3619 13.8947 13.5519 13.7343 13.7113C13.5739 13.8707 13.3831 13.9961 13.1732 14.0801C12.9633 14.1642 12.7386 14.2051 12.5126 14.2005ZM24.9756 24.975H22.0001V19.8091C22.0001 18.2856 21.3524 17.8153 20.5164 17.8153C19.6337 17.8153 18.7674 18.4808 18.7674 19.8476V24.975H15.7906V15.5177H18.6533V16.8281H18.6918C18.9792 16.2465 19.9857 15.2523 21.5216 15.2523C23.1826 15.2523 24.9769 16.2382 24.9769 19.1257L24.9756 24.975Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2495_162436">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-3 text-tertiary leading-6 font-semibold">
                LinkedIn
              </span>
            </div>
            <button
              onClick={linkConvertedCardOpen}
              className="flex items-center gradient-bg border rounded-full border-none text-white p-3 pl-4 pr-4"
            >
              <span className="mr-2 leading-5 font-bold">Share</span>
              <FiSend size={18} />
            </button>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-100 rounded-2xl mb-3 p-2">
            <div className="flex items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2495_162449)">
                  <path
                    d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M27.4939 13.2415C27.2655 12.3934 26.5968 11.7247 25.7487 11.4963C24.1993 11.0723 18.0016 11.0723 18.0016 11.0723C18.0016 11.0723 11.8039 11.0723 10.2545 11.48C9.42265 11.7084 8.73764 12.3934 8.50931 13.2415C8.10156 14.7909 8.10156 18.0039 8.10156 18.0039C8.10156 18.0039 8.10156 21.2333 8.50931 22.7664C8.73764 23.6145 9.40634 24.2832 10.2545 24.5115C11.8202 24.9356 18.0016 24.9356 18.0016 24.9356C18.0016 24.9356 24.1993 24.9356 25.7487 24.5278C26.5968 24.2995 27.2655 23.6308 27.4939 22.7827C27.9016 21.2333 27.9016 18.0202 27.9016 18.0202C27.9016 18.0202 27.9179 14.7909 27.4939 13.2415Z"
                    fill="white"
                  />
                  <path
                    d="M16.0273 20.9719L21.1812 18.0035L16.0273 15.0352V20.9719Z"
                    fill="#FF0000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2495_162449">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-3 text-tertiary leading-6 font-semibold">
                YouTube
              </span>
            </div>
            <button
              onClick={linkConvertedCardOpen}
              className="flex items-center gradient-bg border rounded-full border-none text-white p-3 pl-4 pr-4"
            >
              <span className="mr-2 leading-5 font-bold">Share</span>
              <FiSend size={18} />
            </button>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-100 rounded-2xl mb-3 p-2">
            <div className="flex items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2495_162463)">
                  <path
                    d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z"
                    fill="#5865F2"
                  />
                  <path
                    d="M25.4845 11.2433C24.1078 10.6217 22.6315 10.1638 21.0879 9.90149C21.0598 9.89643 21.0317 9.90908 21.0173 9.93438C20.8274 10.2667 20.6171 10.7002 20.4698 11.0409C18.8096 10.7963 17.1579 10.7963 15.5317 11.0409C15.3844 10.6926 15.1665 10.2667 14.9757 9.93438C14.9613 9.90992 14.9332 9.89727 14.9051 9.90149C13.3623 10.1629 11.886 10.6209 10.5085 11.2433C10.4965 11.2484 10.4863 11.2568 10.4795 11.2678C7.67927 15.3842 6.91216 19.3995 7.28848 23.365C7.29018 23.3844 7.30125 23.4029 7.31658 23.4147C9.16411 24.7498 10.9538 25.5602 12.7102 26.0974C12.7383 26.1059 12.7681 26.0958 12.786 26.073C13.2014 25.5147 13.5718 24.926 13.8893 24.307C13.9081 24.2707 13.8902 24.2277 13.8519 24.2134C13.2644 23.9941 12.7051 23.7268 12.167 23.4232C12.1244 23.3987 12.121 23.3388 12.1602 23.3101C12.2734 23.2266 12.3867 23.1398 12.4948 23.0521C12.5143 23.036 12.5416 23.0327 12.5646 23.0428C16.0996 24.6309 19.9266 24.6309 23.4199 23.0428C23.4429 23.0318 23.4701 23.0352 23.4905 23.0512C23.5987 23.1389 23.7119 23.2266 23.826 23.3101C23.8652 23.3388 23.8626 23.3987 23.8201 23.4232C23.282 23.7327 22.7226 23.9941 22.1343 24.2125C22.096 24.2269 22.0789 24.2707 22.0977 24.307C22.422 24.9252 22.7924 25.5138 23.2002 26.0722C23.2173 26.0958 23.2479 26.1059 23.276 26.0974C25.0409 25.5602 26.8306 24.7498 28.6781 23.4147C28.6943 23.4029 28.7045 23.3852 28.7062 23.3658C29.1566 18.7813 27.9519 14.7989 25.5126 11.2686C25.5066 11.2568 25.4965 11.2484 25.4845 11.2433ZM14.4172 20.9504C13.353 20.9504 12.476 19.989 12.476 18.8083C12.476 17.6275 13.336 16.6661 14.4172 16.6661C15.507 16.6661 16.3754 17.636 16.3584 18.8083C16.3584 19.989 15.4985 20.9504 14.4172 20.9504ZM21.5945 20.9504C20.5303 20.9504 19.6533 19.989 19.6533 18.8083C19.6533 17.6275 20.5132 16.6661 21.5945 16.6661C22.6843 16.6661 23.5527 17.636 23.5357 18.8083C23.5357 19.989 22.6843 20.9504 21.5945 20.9504Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2495_162463">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-3 text-tertiary leading-6 font-semibold">
                Discord
              </span>
            </div>
            <button
              onClick={linkConvertedCardOpen}
              className="flex items-center gradient-bg border rounded-full border-none text-white p-3 pl-4 pr-4"
            >
              <span className="mr-2 leading-5 font-bold">Share</span>
              <FiSend size={18} />
            </button>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-100 rounded-2xl mb-3 p-2">
            <div className="flex items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2495_162476)">
                  <path
                    d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18Z"
                    fill="#154DDD"
                  />
                  <path
                    d="M17.9992 7.19922C12.0322 7.19922 7.19922 12.0323 7.19922 17.9993C7.19922 23.9662 12.0322 28.7992 17.9992 28.7992C23.9662 28.7992 28.7992 23.9662 28.7992 17.9993C28.7992 12.0323 23.9662 7.19922 17.9992 7.19922ZM18.5392 13.6793C19.8082 13.6523 21.0502 13.4903 22.2112 13.2203C22.5892 14.4893 22.8052 15.9203 22.8592 17.4593H18.5392V13.6793ZM18.5392 12.5993V8.33322C19.8892 8.65722 21.0772 10.0883 21.8602 12.1673C20.8072 12.4103 19.7002 12.5723 18.5392 12.5993ZM17.4592 8.33322V12.5993C16.2982 12.5723 15.1912 12.4373 14.1382 12.1943C14.9212 10.1153 16.1092 8.65722 17.4592 8.33322ZM17.4592 13.6793V17.4593H13.1392C13.1932 15.9203 13.4092 14.4893 13.7872 13.2203C14.9482 13.4903 16.1902 13.6253 17.4592 13.6793ZM12.0592 17.4593H8.27922C8.38722 15.3803 9.14322 13.4903 10.3582 11.9783C11.0602 12.3563 11.8432 12.6803 12.7072 12.9503C12.3562 14.2733 12.1132 15.8123 12.0592 17.4593ZM12.0592 18.5393C12.1132 20.1863 12.3292 21.6983 12.7342 23.0753C11.8702 23.3453 11.0872 23.6693 10.3852 24.0473C9.17022 22.5083 8.41422 20.6182 8.30622 18.5662H12.0592V18.5393ZM13.1392 18.5393H17.4592V22.3193C16.1902 22.3463 14.9482 22.5082 13.7872 22.7782C13.4092 21.5092 13.1932 20.0782 13.1392 18.5393ZM17.4592 23.3993V27.6382C16.1092 27.3142 14.9212 25.8832 14.1382 23.8043C15.1912 23.5882 16.2982 23.4263 17.4592 23.3993ZM18.5392 27.6653V23.3993C19.7002 23.4263 20.8072 23.5613 21.8602 23.8043C21.0772 25.8832 19.8892 27.3413 18.5392 27.6653ZM18.5392 22.3193V18.5393H22.8592C22.8052 20.0782 22.5892 21.5092 22.2112 22.7782C21.0502 22.5082 19.8082 22.3733 18.5392 22.3193ZM23.9392 18.5393H27.7192C27.6112 20.6182 26.8552 22.5083 25.6402 24.0203C24.9382 23.6423 24.1552 23.3182 23.2912 23.0482C23.6422 21.6982 23.8852 20.1863 23.9392 18.5393ZM23.9392 17.4593C23.8852 15.8123 23.6692 14.3003 23.2642 12.9233C24.1282 12.6533 24.9112 12.3293 25.6132 11.9513C26.8282 13.4903 27.5842 15.3803 27.6922 17.4323L23.9392 17.4593ZM24.8842 11.1413C24.2902 11.4383 23.6422 11.7083 22.9402 11.9243C22.4812 10.6823 21.8872 9.62922 21.1582 8.81922C22.5622 9.30522 23.8312 10.1153 24.8842 11.1413ZM14.8402 8.81922C14.1382 9.60222 13.5442 10.6553 13.0582 11.9243C12.3562 11.7083 11.7082 11.4653 11.1142 11.1683C12.1672 10.0883 13.4362 9.30522 14.8402 8.81922ZM11.1142 24.8573C11.7082 24.5603 12.3562 24.2903 13.0582 24.0742C13.5172 25.3162 14.1112 26.3692 14.8402 27.1793C13.4362 26.6933 12.1672 25.8833 11.1142 24.8573ZM21.1582 27.1793C21.8602 26.3962 22.4812 25.3162 22.9402 24.0742C23.6422 24.2903 24.2902 24.5333 24.8842 24.8573C23.8312 25.8833 22.5622 26.6933 21.1582 27.1793Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2495_162476">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-3 text-tertiary leading-6 font-semibold">
                Global
              </span>
            </div>
            <button
              onClick={linkConvertedCardOpen}
              className="flex items-center gradient-bg border rounded-full border-none text-white p-3 pl-4 pr-4"
            >
              <span className="mr-2 leading-5 font-bold">Share</span>
              <FiSend size={18} />
            </button>
          </div>
        </div>
        <div className="primary h-[6px] w-[127px] border border-none rounded-2xl mt-4 mb-8 ml-auto mr-auto"></div>
        {/* <Box sx={{ width: '75%' }}>
                         <LinearProgress variant="determinate" value={progress} />
                    </Box> */}
        <div className="flex items-center justify-between border border-dotted rounded-full pl-3">
          <p className="text-primary leading-5 cursor-pointer font-normal">
            https://yourwesite.com
          </p>
          <button
            onClick={linkCopyCardOpen}
            className="flex items-center border-2 rounded-full p-2 w-[100] pr-6 pl-6 border-gradient"
          >
            <div>
              <span className="text-gradient mr-2 font-bold">Copy</span>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.747 14.6908L19.4911 12.4687C20.4186 11.7176 21.0098 10.6288 21.1345 9.44188C21.2593 8.25495 20.9074 7.06707 20.1563 6.13956C19.4053 5.21206 18.3165 4.62091 17.1296 4.49615C15.9426 4.3714 14.7547 4.72327 13.8272 5.47435L10.3301 8.30629C9.77022 8.75918 9.32721 9.33981 9.03828 9.99942C8.74936 10.659 8.62295 11.3783 8.66968 12.0969C8.71641 12.8155 8.93491 13.5124 9.30682 14.1291C9.67874 14.7457 10.1932 15.2641 10.807 15.6406L11.7746 14.8571C11.8756 14.7753 11.963 14.6846 12.0367 14.585C11.5527 14.3892 11.1281 14.0705 10.805 13.6604C10.4819 13.2502 10.2714 12.7629 10.1944 12.2464C10.1173 11.73 10.1764 11.2024 10.3658 10.7158C10.5551 10.2293 10.8682 9.80051 11.2741 9.47201L14.7712 6.64007C15.3896 6.13935 16.1815 5.90477 16.9728 5.98794C17.7641 6.07111 18.4899 6.46521 18.9906 7.08354C19.4913 7.70188 19.7259 8.4938 19.6427 9.28509C19.5596 10.0764 19.1655 10.8022 18.5471 11.3029L16.7578 12.752C16.8586 13.396 16.8559 14.0506 16.747 14.6908Z"
                  fill="url(#paint0_linear_2495_162494)"
                />
                <path
                  d="M13.6621 17.1889C14.222 16.736 14.665 16.1554 14.9539 15.4958C15.2429 14.8362 15.3693 14.1168 15.3225 13.3982C15.2758 12.6797 15.0573 11.9828 14.6854 11.3661C14.3135 10.7495 13.799 10.2311 13.1852 9.85455L11.9052 10.891C12.3969 11.0798 12.8302 11.3946 13.1616 11.8038C13.493 12.2131 13.7108 12.7023 13.7932 13.2224C13.8756 13.7426 13.8196 14.2752 13.6309 14.7668C13.4422 15.2585 13.1274 15.6918 12.7182 16.0232L9.221 18.8551C8.60267 19.3558 7.81075 19.5904 7.01946 19.5072C6.22817 19.4241 5.50232 19.03 5.00161 18.4116C4.50089 17.7933 4.26631 17.0014 4.34948 16.2101C4.43265 15.4188 4.82675 14.693 5.44508 14.1922L7.23446 12.7432C7.13319 12.1003 7.13721 11.4451 7.24637 10.8034L4.5011 13.0265C4.04185 13.3984 3.66034 13.8571 3.37837 14.3765C3.09639 14.8958 2.91946 15.4656 2.85769 16.0533C2.79592 16.641 2.85052 17.2351 3.01835 17.8017C3.18619 18.3684 3.46399 18.8964 3.83589 19.3556C4.20778 19.8149 4.66649 20.1964 5.18583 20.4784C5.70516 20.7603 6.27495 20.9373 6.86266 20.999C7.45038 21.0608 8.0445 21.0062 8.61111 20.8384C9.17773 20.6705 9.70573 20.3927 10.165 20.0208L13.6621 17.1889Z"
                  fill="url(#paint1_linear_2495_162494)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2495_162494"
                    x1="23.7076"
                    y1="9.05424"
                    x2="7.61448"
                    y2="16.3873"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9181F4" />
                    <stop offset="1" stop-color="#5038ED" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2495_162494"
                    x1="17.8804"
                    y1="13.773"
                    x2="1.78733"
                    y2="21.1061"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9181F4" />
                    <stop offset="1" stop-color="#5038ED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>
          {/* link copy pop-up show */}
          <BootstrapDialog
            onClose={linkCopyCardClose}
            aria-labelledby="customized-dialog-title"
            open={showLinkCopyCard}
          >
            <DialogContent>
              <LinkCopiedCard
                linkCopyCardClose={linkCopyCardClose}
                openSocial={openSocial}
                setOpenSocial={setOpenSocial}
              />
            </DialogContent>
          </BootstrapDialog>
          {/* link converted pop-up show */}
          <BootstrapDialog
            onClose={linkConvertedCardClose}
            aria-labelledby="customized-dialog-title"
            open={showLinkConvertedCard}
          >
            <DialogContent>
              <LinkConvertedCard
                linkConvertedCardClose={linkConvertedCardClose}
                openSocial={openSocial}
                setOpenSocial={setOpenSocial}
              />
            </DialogContent>
          </BootstrapDialog>
        </div>
      </div>
    </>
  );
}

export default ShareLinkPage;
