import React from "react";
import { HiDocumentText } from "react-icons/hi";

const ReferralTable = () => {
  const data = [
    {
      name: "Rajesh Thakur",
      role: "Brand",
      lastSeen: "13/05/2024 11:28 am",
      leads: 487,
      commissions: "78k",
      changes: "42%",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Abhishek Varma",
      role: "Influencer",
      lastSeen: "22/05/2024 12:56 pm",
      leads: 23,
      commissions: 12,
      changes: "2%",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Jhon Smith",
      role: "Publisher",
      lastSeen: "15/06/2024 14:07 am",
      leads: 344,
      commissions: 773,
      changes: "38%",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Rohit Singh",
      role: "Individual",
      lastSeen: "15/06/2024 15:32 pm",
      leads: 231,
      commissions: 2023,
      changes: "21%",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Arun Gill",
      role: "Advertiser",
      lastSeen: "15/06/2024 16:08 pm",
      leads: 58,
      commissions: 24,
      changes: "8%",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-2 sm:p-4 bg-white rounded-md border border-[#D8D9D4]  shadow-md">
      <div className="flex items-center gap-1 mb-4 text-[14px] sm:text-base 2xl:text-lg text-[#101018] font-semibold ">
        <HiDocumentText className="text-base sm:text-lg 2xl:text-xl" />
        <p className="">My Referral's Stats</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full  border-b">
              <th className="py-2 text-[#101018] text-xs 2xl:text-sm px-4 text-left">
                User Name
              </th>
              <th className="py-2 text-[#101018] text-xs 2xl:text-sm px-4 text-left">
                Last Seen
              </th>
              <th className="py-2 text-[#101018] text-xs 2xl:text-sm px-4 text-left">
                Leads
              </th>
              <th className="py-2 text-[#101018] text-xs 2xl:text-sm px-4 text-left">
                Commissions
              </th>
              <th className="py-2 text-[#101018] text-xs 2xl:text-sm px-4 text-left">
                Changes%
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className="border-b border-[#D8D9D4]">
                <td className="py-2 px-4 flex items-center">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full mr-2"
                  />
                  <div>
                    <div className="font-bold  text-[#35353A] text-xs sm:text-sm 2xl:text-base">
                      {user.name}
                    </div>
                    <div className="text-[10px] sm:text-xs 2xl:text-sm text-[#6E6E71]">
                      {user.role}
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 text-xs sm:text-sm 2xl:text-base  text-[#35353A]">
                  {user.lastSeen}
                </td>
                <td className="py-2 px-4 text-xs sm:text-sm 2xl:text-base  text-[#35353A]">
                  {user.leads}
                </td>
                <td className="py-2 px-4 text-xs sm:text-sm 2xl:text-base  text-[#35353A]">
                  {user.commissions}
                </td>
                <td className="py-2 px-4 text-xs sm:text-sm 2xl:text-base  text-[#35353A]">
                  {user.changes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralTable;
