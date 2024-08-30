// src/components/Features.jsx

import React from "react";
import {
  FaServer,
  FaChartLine,
  FaLock,
  FaHeadset,
  FaCogs,
  FaDesktop,
} from "react-icons/fa";

const featuresData = [
  {
    icon: "/assets/landing/one.svg",
    title: "Streamlined Discovery",
    description:
      "LeadTym's AI-driven platform streamlines discovery, and cuts manual search and management time by 40% ",
    style:
      "md:row-start-1 md:absolute md:top-[30%] md:row-span-2 md:col-start-1 md:col-span-1",
  },
  {
    icon: "/assets/landing/two.svg",
    title: "Efficient Campaign Management",
    description:
      "LeadTym supercharges marketing efficiency by 60%, automating approval, contracts and payments of thousands of creators, ensuring Scalability ",
    style: "md:row-start-1 md:col-start-2 md:col-span-1",
  },
  {
    icon: "/assets/landing/three.svg",
    title: "Ad Fraud",
    description:
      "LeadTym's fraud detection algorithm cuts ad waste by 30%, maximizing budget efficiency.",
    style: "md:row-start-2 md:col-start-2 md:col-span-1",
  },

  {
    icon: "/assets/landing/four.svg",
    title: "Integrated Platform",
    description:
      "LeadTym offers a comprehensive, integrated platform connecting Brands, Content Creators, and Affiliates for seamless collaboration. ",
    style: "md:row-start-3 md:col-start-2 md:col-span-1",
  },
  {
    icon: "/assets/landing/five.svg",
    title: "Intuitive interface ",
    description:
      "Experience the simplicity of our intuitive interface designed for efficiency, ensuring every interaction enhances your marketing strategy. ",
    style:
      "md:row-start-2 md:absolute md:bottom-[62%] md:col-start-3 md:col-span-1",
  },
  {
    icon: "/assets/landing/six.svg",
    title: "AI-Driven Insights ",
    description:
      "LeadTym's analytics boost marketing ROI by 30%, increase targeting accuracy by 25%, campaign analysis efficiency by 40%",
    style:
      "md:row-start-3  md:absolute md:bottom-[30%] xl:bottom-[20%] md:col-start-3 md:col-span-1",
  },
];

const Features = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-lg md:text-xl 2xl:text-2xl font-bold text-black dark:text-white mb-2">
          Features
        </h2>
        <h3 className="text-2xl md:text-[46px] md  moreextrabold leading-tight md:leading-none   text-black dark:text-white mb-8">
          Empowering your business with cutting edge tools
          <br /> and functionalities.
        </h3>
        <div className="grid relative grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:gap-6 grid-rows-3">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`shadow-md bg-white dark:bg-black  p-4 rounded-xl border dark:border-[#C9C9C9] border-[#1C1C1C] ${feature.style}`}
            >
              <div className="flex items-center h-[80px] border-4 border-white w-[80px] bg-[#F0FAF4] text-black shadow-md  rounded-full justify-center mb-8 ">
                {/* {feature.icon} */}
                <img src={feature.icon} alt="icon" />
              </div>
              <h4 className="text-xl md:text-2xl text-left font-bold text-black dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="dark:text-[#E3E3E3] text-[#1C1C1C] text-base 2xl:text-lg  text-left mb-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
