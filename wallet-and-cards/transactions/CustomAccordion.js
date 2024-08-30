import React, { useState } from "react";
import { BsArrowsCollapse } from "react-icons/bs";
import { MdFindInPage } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import { FiChevronDown } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const CustomAccordion = () => {
  const [isPaymentDetailAccordionOpen, setPaymentDetailAccordionOpen] =
    useState(true);
  const [campaignAccordion, setCampaignAccordian] = useState(false);
  const [adjustAcc, setAdjustAcc] = useState(false);
  const [accordionStates, setAccordionStates] = useState({});

  const dummyData = {
    "August 2024": [
      {
        payment_sum: 10000,
        withdraw_sum: 5000,
        opening: 5000,
        payments: [
          {
            id: 1,
            transaction_date: "2024-08-10",
            transaction_method: "bank",
            transaction_status: "success",
            adjusted_amount: 5000,
          },
        ],
        campaigns: [
          {
            id: 1,
            campaign_name: "Campaign 1",
            amount: 3000,
          },
        ],
        tax: 500,
        refferel: 200,
        net_cost: 2500,
        closing: 7500,
        campaign_sum: 3000,
      },
    ],
    "July 2024": [
      {
        payment_sum: 12000,
        withdraw_sum: 6000,
        opening: 6000,
        payments: [
          {
            id: 2,
            transaction_date: "2024-07-15",
            transaction_method: "credit card",
            transaction_status: "failed",
            adjusted_amount: 6000,
          },
        ],
        campaigns: [
          {
            id: 2,
            campaign_name: "Campaign 2",
            amount: 4000,
          },
        ],
        tax: 600,
        refferel: 300,
        net_cost: 3200,
        closing: 8800,
        campaign_sum: 4000,
      },
    ],
    "June 2024": [
      {
        payment_sum: 15000,
        withdraw_sum: 7000,
        opening: 8000,
        payments: [
          {
            id: 3,
            transaction_date: "2024-06-20",
            transaction_method: "upi",
            transaction_status: "success",
            adjusted_amount: 7000,
          },
        ],
        campaigns: [
          {
            id: 3,
            campaign_name: "Campaign 3",
            amount: 5000,
          },
        ],
        tax: 700,
        refferel: 400,
        net_cost: 4200,
        closing: 10800,
        campaign_sum: 5000,
      },
    ],
  };

  const toggleMainAccordion = (month = "noData") => {
    setAccordionStates((prevStates) => ({
      ...prevStates,
      [month]: !prevStates[month],
    }));
  };

  const allSectionsLabel =
    isPaymentDetailAccordionOpen || campaignAccordion || adjustAcc
      ? "Collapse all sections"
      : "Expand all sections";

  const toggleAllAccordions = () => {
    // If any section is open, then close them all
    if (isPaymentDetailAccordionOpen || campaignAccordion || adjustAcc) {
      setPaymentDetailAccordionOpen(false);
      setCampaignAccordian(false);
      setAdjustAcc(false);
    } else {
      // If all sections are closed, then open them all
      setPaymentDetailAccordionOpen(true);
      setCampaignAccordian(true);
      setAdjustAcc(true);
    }
  };

  const paymentAcc = () => {
    setPaymentDetailAccordionOpen(!isPaymentDetailAccordionOpen);
  };

  const toggleCampAccordion = () => {
    setCampaignAccordian(!campaignAccordion);
  };

  const toggleAdjustAcc = () => {
    setAdjustAcc(!adjustAcc);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getPreviousMonth = (monthString) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const parts = monthString.split(" ");
    const monthIndex = months.indexOf(parts[0]);
    const year = parseInt(parts[1], 10);

    if (monthIndex === -1) {
      return "Invalid Month"; // Fallback in case of an error
    }

    const newMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;

    return `${months[newMonthIndex]}`;
  };

  const renderTransactions = (transactions) => {
    return transactions?.map((transaction) => (
      <div key={transaction.id} className="pl-7 py-2 sm:w-[80%]">
        <div className="text-black flex gap-3 flex-wrap items-center justify-between border-b pb-2.5 border-[#D1D1D1]">
          <div className="flex items-center flex-wrap gap-2 md:gap-10 sm:gap-4">
            <p className="sm:text-[16px] text-sm 2xl:text-[18px] text-[#666666]">
              {formatDate(transaction.transaction_date)}
            </p>
            <p
              className={`sm:text-[16px] text-sm 2xl:text-lg ${
                transaction.transaction_status === "failed"
                  ? "text-[#FF2E2E] flex gap-2 font-medium" // Red for failed
                  : transaction.transaction_status === "pending"
                  ? "text-[#EFB257] flex gap-2 font-medium" // Orange for pending
                  : transaction.transaction_status === "success"
                  ? "text-[#27CA40] flex gap-2 font-medium" // Green for success
                  : "text-[#0F62FE] flex gap-2 font-medium" // Blue for manual/other types
              }`}
            >
              {transaction.transaction_method?.charAt(0).toUpperCase() +
                transaction.transaction_method?.slice(1)}{" "}
              {transaction.razorpay_transaction_id}
              {transaction.transaction_status === "failed" && (
                <p>(Payment failed)</p>
              )}
            </p>
          </div>
          <p className="sm:text-[15px] text-[13px] 2xl:text-[17px] text-[#666666]">
            ₹{" "}
            {new Intl.NumberFormat("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(transaction.adjusted_amount)}
          </p>
        </div>
      </div>
    ));
  };

  const renderCampaigns = (campaigns) => {
    return campaigns.map((campaign) => (
      <div key={campaign.id} className=" ">
        <div className="pl-6 ">
          <div className="text-black flex gap-3 flex-wrap items-center justify-between border-b py-2.5  pb-2.5 border-[#D1D1D1]">
            <div className="flex items-center flex-wrap gap-1 sm:gap-2">
              <MdFindInPage color="#4F5D64" size={20} />
              <p className="sm:text-[16px] text-sm 2xl:text-lg text-[#666666] ">
                {campaign.campaign_name}
              </p>
            </div>
            <p className="sm:text-[15px] text-[13px] 2xl:text-[17px] text-[#666666]">
              ₹{campaign.amount}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="">
      {Object.keys(dummyData).length > 0 &&
        Object.entries(dummyData).map(([month, data], index) => (
          <div key={month} className="sm:mb-4 mb-2">
            <div
              onClick={() => toggleMainAccordion(month)}
              className={`cursor-pointer shadow-lg  shadow-[#5E17EB26]  ${
                accordionStates[month]
                  ? "rounded-t-md border border-[#D4DBDE] "
                  : "sm:rounded-full rounded-t-md border-b border-[#D4DBDE]"
              }   flex justify-between items-center px-4 sm:px-8 py-2  h-[75px] text-[#BABFC5] bg-white  focus:outline-none`}
            >
              <span className="font-semibold 2xl:text-[18px] sm:text-base text-sm text-[#4F5D64] ">
                {month} {index === 0 && "(Current Month)"}
              </span>
              <div className="flex sm:gap-14 gap-6 items-center">
                <div>
                  <p className="sm:text-[16px] text-sm 2xl:text-lg font-semibold text-[#999999]">
                    Payments
                  </p>
                  <p className="flex justify-end sm:text-[18px] text-base 2xl:text-xl   text-[#1C1C1C] font-semibold ">
                    ₹
                    {new Intl.NumberFormat("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(data[0].payment_sum || 0)}
                  </p>
                </div>
                <FiChevronDown
                  className={`h-6 w-6 transform transition-transform text-[#4F5D64] duration-500 ${
                    accordionStates[month] ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            <div
              className={`transition-max-height text-black duration-500 bg-white ease-in-out overflow-hidden  ${
                accordionStates[month]
                  ? "border border-[#D4DBDE] pb-8 rounded-b-md"
                  : "max-h-0"
              }`}
            >
              <div className="px-8 py-2">
                <div className="py-5">
                  <div
                    className="flex gap-3 cursor-pointer items-center"
                    onClick={toggleAllAccordions}
                  >
                    <BsArrowsCollapse className="h-5 w-5 text-[#21272A]" />
                    <p className="text-[#0F62FE] sm:text-[16px] text-sm 2xl:text-lg">
                      {allSectionsLabel}
                    </p>
                  </div>
                </div>
                <p className="text-[#666666] justify-between flex sm:w-[80%] sm:text-[16px] text-sm 2xl:text-lg pb-4 border-[#D1D1D1] border-b ">
                  <span>Funds from {getPreviousMonth(month)}</span>
                  <span className="font-semibold text-[#1C1C1C]">
                    ₹{data[0].opening || 0}
                  </span>
                </p>

                {/* Payment Detail Accordion */}
                <div className="mt-4 sm:w-[80%] border-b pb-2 border-white border-opacity-20">
                  <div
                    className="flex gap-3 cursor-pointer justify-between items-center"
                    onClick={paymentAcc}
                  >
                    <div className="flex items-center gap-3 ">
                      <FaChevronDown
                        size={16}
                        className={` text-[#4F5D64] transform transition-transform duration-500 ${
                          isPaymentDetailAccordionOpen ? "rotate-180" : ""
                        }`}
                      />
                      <p className="text-[#0F62FE] sm:text-[16px] text-sm 2xl:text-lg ">
                        Payments
                      </p>
                    </div>
                    <h4 className="sm:text-[15px] text-[13px] 2xl:text-base font-semibold text-[#1C1C1C]">
                      ₹
                      {new Intl.NumberFormat("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(data[0].payment_sum || 0)}
                    </h4>
                  </div>

                  {/* Content of Payment Detail Accordion */}
                </div>

                {isPaymentDetailAccordionOpen && (
                  <div>{renderTransactions(data[0].payments)}</div>
                )}

                {/* Campaign Details */}
                <div className=" sm:w-[80%] mt-3">
                  <div
                    className="flex gap-3 cursor-pointer justify-between items-center"
                    onClick={toggleCampAccordion}
                  >
                    <div className="flex items-center gap-3 ">
                      <FaChevronDown
                        size={16}
                        className={` text-[#4F5D64] transform transition-transform duration-500 ${
                          campaignAccordion ? "rotate-180" : ""
                        }`}
                      />

                      <p className="text-[#0F62FE] sm:text-[16px] text-sm 2xl:text-lg ">
                        Campaigns
                      </p>
                    </div>
                    <h4 className="sm:text-[15px] text-[13px] 2xl:text-base font-semibold text-[#1C1C1C]">
                      ₹{data[0].campaign_sum}
                    </h4>
                  </div>

                  <div
                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                      campaignAccordion ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="mt-2">
                      {renderCampaigns(data[0].campaigns)}
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex gap-2 items-center">
                  <h3 className="text-[#4F5D64] sm:text-[16px]  text-sm 2xl:text-lg">
                    Adjustment
                  </h3>

                  <Tooltip
                    title={
                      <div className="p-3 text-black">
                        <p className="text-[16px] font-semibold">
                          Payment declined
                        </p>
                        <p className="text-[#BABFC5] mt-2">
                          Your payment was declined because your credit card had
                          insufficient funds available.
                        </p>
                      </div>
                    }
                    arrow
                    placement="top"
                  >
                    <IoMdHelpCircleOutline
                      size={20}
                      className="cursor-pointer text-[#0F62FE] hover:text-black "
                    />
                  </Tooltip>
                </div>

                {/* Adjustment Details */}
                <div className="mt-4 sm:w-[80%] ">
                  <div
                    className="flex gap-3  cursor-pointer justify-between items-center"
                    onClick={toggleAdjustAcc}
                  >
                    <div className="flex items-center gap-3 ">
                      <FaChevronDown
                        size={16}
                        className={` text-[#4F5D64] transform transition-transform duration-500 ${
                          adjustAcc ? "rotate-180" : ""
                        }`}
                      />

                      <p className="text-[#0F62FE] sm:text-[16px]  text-sm 2xl:text-lg">
                        Taxes and fees
                      </p>
                    </div>
                    <h4 className="sm:text-[15px] text-[13px] 2xl:text-base font-semibold text-[#1C1C1C]">
                      ₹{data[0].tax}
                    </h4>
                  </div>

                  <div
                    className={`transition-max-height  duration-500 ease-in-out overflow-hidden ${
                      adjustAcc ? "max-h-96 pt-2 " : "max-h-0 "
                    }`}
                  >
                    <div className="pl-7 ">
                      <div className="text-white flex gap-3 flex-wrap items-center justify-between border-t py-2  pb-2.5 border-[#D1D1D1]">
                        <p className="sm:text-[16px] text-sm 2xl:text-lg text-[#666666] ">
                          Integrated GST
                        </p>

                        <p className="sm:text-[15px] text-[13px] 2xl:text-[17px] text-[#666666] ">
                          ₹{data[0].tax}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F2F2] mt-6 px-3 items-center h-[46px] flex justify-between rounded-md sm:w-[80%] ">
                  <p className="sm:text-[16px] text-sm 2xl:text-lg font-medium text-[#666666] ">
                    Net cost
                  </p>
                  <p className="sm:text-[15px] text-[13px] 2xl:text-[17px] text-[#666666] font-semibold">
                    ₹{data[0].net_cost || 0}
                  </p>
                </div>

                <div className="py-3 border-b sm:w-[80%] border-[#D1D1D1]"></div>

                <div className="bg-[#F2F2F2] mt-6 px-3 items-center h-[46px] flex justify-between rounded-md sm:w-[80%] ">
                  <p className="sm:text-[16px] text-sm 2xl:text-lg font-medium text-[#666666] ">
                    Closing balance
                  </p>
                  <p className="sm:text-[15px] text-[13px] 2xl:text-[17px] text-[#666666] font-semibold">
                    {" "}
                    ₹{data[0].closing || 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CustomAccordion;
