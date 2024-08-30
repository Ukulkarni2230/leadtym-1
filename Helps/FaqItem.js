import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Loader from "../../Loaders/Loader";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <div className="border-b border-[#9E9EA2] py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h4 className="text-[#101018] text-sm sm:text-base 2xl:text-lg font-semibold">
          {question}
        </h4>
        <BsChevronDown
          className={`transition-transform text-[#BABFC5] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-700 mb-4">{answer}</p>
          <div className="video-container">
            {isLoading && <Loader />}
            <iframe
              className={`w-full sm:w-[500px] h-[300px] ${
                isLoading ? "hidden" : ""
              }`}
              src="https://www.youtube.com/embed/6OXfgu8uKnE?list=RDGMEMCMFH2exzjBeE_zAHHJOdxg"
              title="Saari Duniya Jalaa Denge(Extended Full Song) Ranbir K,Anil K,Bobby D|Sandeep|B Praak,Jaani|Bhushan K"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={handleIframeLoad} // Set loading to false when iframe loads
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
