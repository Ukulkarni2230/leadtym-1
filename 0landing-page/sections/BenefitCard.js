import { useRouter } from "next/navigation";
import React from "react";

const BenefitCard = ({
  imgSrc,
  imgAlt,
  title,
  benefits,
  buttonLabel,
  transitionClass,
}) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col items-center justify-center ${transitionClass}`}
    >
      <div className="flex flex-col text-start shadow-md dark:shadow-gray-500 items-center justify-center lg:justify-start mb-8 lg:mb-0 w-fit rounded-[10px] md:rounded-[42px] border-[#1C1C1C] bg-white sm:p-10 p-4 dark:bg-[#101010] dark:border-gray-100 border">
        <div className="w-full">
          <div className="flex flex-wrap items-start justify-between">
            <h3 className="moreextrabold text-xl sm:text-2xl text-black dark:text-white">
              {title}
            </h3>
            <button
              onClick={() => router.push("/contact-us")}
              className="gradient-bg text-white sm:px-6 sm:py-2 py-1.5 font-bold px-2 text-[14px] rounded-full sm:text-lg mb-4"
            >
              {buttonLabel}
            </button>
          </div>
          <div className="sm:pl-1 pl-0 sm:mb-8 mb-4">
            <ul className="list-disc pl-5 text-start sm:text-base text-sm text-black dark:text-white">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <span className="font-semibold">{benefit.title}</span>{" "}
                  <span className="font-light">{benefit.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img src={imgSrc} alt={imgAlt} className="w-full lg:w-auto mb-4" />
      </div>
    </div>
  );
};

export default BenefitCard;
