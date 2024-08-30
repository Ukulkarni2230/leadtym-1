import React, { useState, useEffect } from "react";
import BenefitCard from "./sections/BenefitCard";

const benefitsData = {
  Brand: {
    imgSrc: "/assets/landing/bb.svg",
    imgAlt: "Brand Benefit",
    title: "For Brands",
    buttonLabel: "Request a demo",
    benefits: [
      {
        title: "Comprehensive Analytics:",
        description:
          " Track user behavior, sales, and campaign performance in real-time.",
      },
      {
        title: "Deep Linking:",
        description:
          " Seamlessly direct customers to specific pages, enhancing conversion rates.",
      },
      {
        title: "Ad Fraud Detection:",
        description:
          " Ensure your ad spend is protected with robust fraud detection mechanisms.",
      },
    ],
  },
  Agency: {
    imgSrc: "/assets/landing/ab.svg",
    imgAlt: "Agency Benefit",
    title: "For Agencies",
    buttonLabel: "Request a demo",
    benefits: [
      {
        title: "Efficient Campaign Management:",
        description:
          " Streamline campaign creation, management, and reporting.",
      },
      {
        title: "Detailed Reporting:",
        description:
          " Gain insights into campaign performance with detailed, customizable reports.",
      },
      {
        title: "Enhanced Collaboration:",
        description:
          " Foster better relationships with clients through transparent and effective communication tools.",
      },
    ],
  },
  Affiliate: {
    imgSrc: "/assets/landing/afb.svg",
    imgAlt: "Affiliate Benefit",
    title: "For Affiliates",
    buttonLabel: "Request a demo",
    benefits: [
      {
        title: "Automated Link Sharing:",
        description:
          " Easily share affiliate links directly into DMs or social media posts.",
      },
      {
        title: "Performance Tracking:",
        description:
          " Monitor your earnings and performance with comprehensive analytics.",
      },
      {
        title: "High-Quality Partnerships:",
        description:
          " Connect with top brands and agencies for lucrative partnerships.",
      },
    ],
  },
  Influencer: {
    imgSrc: "/assets/landing/ib.svg",
    imgAlt: "Influencer Benefit",
    title: "For Influencers",
    buttonLabel: "Request a demo",
    benefits: [
      {
        title: "Message Automation:",
        description:
          " Increase engagement with followers through automated, personalized messages.",
      },
      {
        title: "Affiliate Opportunities:",
        description:
          " Monetize your influence by sharing affiliate links and earning commissions.",
      },
      {
        title: "Insightful Analytics:",
        description:
          " Understand your audience better with in-depth analytics and improve your content strategy.",
      },
    ],
  },
  Individual: {
    imgSrc: "/assets/landing/indb.svg",
    imgAlt: "Individual Benefit",
    title: "For Individuals",
    buttonLabel: "Request a demo",
    benefits: [
      {
        title: "E-Commerce Store:",
        description:
          " Utilize our e-commerce store with commissions of up to 40% and discounts coupon to earn commissions up to 25%.",
      },
      {
        title: "Lead Generation Form:",
        description:
          " Generate leads without the need for investing in designers, domains, or hosting.",
      },
      {
        title: "Affiliate Marketing Campaigns:",
        description:
          " Access over 200+ affiliate marketing campaigns to promote and earn from.",
      },
    ],
  },
};

const Benefits = () => {
  const [activeTab, setActiveTab] = useState("Brand");
  const [transitionClass, setTransitionClass] = useState("benefit-card-enter");

  const tabData = Object.keys(benefitsData);

  useEffect(() => {
    setTransitionClass("benefit-card-exit");
    const timer = setTimeout(() => {
      setActiveTab((prevTab) => {
        setTransitionClass("benefit-card-enter");
        return prevTab;
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="sm:py-12 py-8 px-4">
      <h2 className="text-lg w-full justify-center flex md:text-xl 2xl:text-2xl font-bold text-black dark:text-white mb-2">
        Benefits
      </h2>
      <h3 className="text-lg mt-3 text-center sm:text-[26px] lg:text-[46px] moreextrabold leading-tight md:leading-none text-black dark:text-white mb-4 sm:mb-8">
        Unlock Growth: Tailored Solutions for Everyone
      </h3>
      <div className="grid grid-cols-3 sm:flex sm:justify-center xl:gap-10 gap-4 mb-8">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`sm:px-1 pt-2 pb-0.5 text-base sm:text-xl 2xl:text-xl ${
              activeTab === tab
                ? "border-b-4 font-bold border-[#5e17eb] text-black dark:text-white"
                : "text-gray-600 font-normal dark:text-gray-400 border-b-4 border-transparent"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {benefitsData[activeTab] && (
          <BenefitCard
            imgSrc={benefitsData[activeTab].imgSrc}
            imgAlt={benefitsData[activeTab].imgAlt}
            title={benefitsData[activeTab].title}
            benefits={benefitsData[activeTab].benefits}
            buttonLabel={benefitsData[activeTab].buttonLabel}
            transitionClass={transitionClass}
          />
        )}
      </div>
    </div>
  );
};

export default Benefits;
