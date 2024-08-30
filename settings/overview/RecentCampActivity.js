import React from "react";

const statusStyles = {
  Approved: "bg-[#199C4D1A] text-[#199C4D]",
  Live: "bg-[#CBDCF9] text-[#103680]",
  Rejected: "bg-[#F3D4D1] text-[#70241D]",
  Pending: "bg-[#FFF3DD] text-[#AA8345]",
  "In Process": "bg-[#E6DD0033] text-[#A48310]",
  "In Review": "bg-[#D8D9D4] text-[#0F172A]",
};

const RecentCampActivity = () => {
  const campaigns = [
    {
      name: "Order now",
      conversions: 785,
      maxBid: "₹500",
      status: "In Process",
      imageUrl: "/path/to/order-now.jpg", // Update the image paths accordingly
    },
    {
      name: "Buy 2 Get 1 Free",
      conversions: 69,
      maxBid: "₹500",
      status: "Live",
      imageUrl: "/path/to/buy2get1.jpg",
    },
    {
      name: "New Product",
      conversions: 258,
      maxBid: "₹500",
      status: "Pending",
      imageUrl: "/path/to/new-product.jpg",
    },
    {
      name: "Only for Children",
      conversions: 456,
      maxBid: "₹500",
      status: "Approved",
      imageUrl: "/path/to/children.jpg",
    },
  ];

  return (
    <div className="bg-white shadow-md shadow-[#5E17EB26] rounded-lg w-full overflow-hidden md:mt-0">
      <h2 className="font-semibold text-[12px] sm:text-[14px] 2xl:text-[16px] px-4 pt-4 ">
        Recent Campaign Activity
      </h2>
      <div className="overflow-x-auto p-4 mb-2">
        <table className="sm:min-w-full min-w-[80%]">
          <thead className="border-t border-[#DDE1E6]">
            <tr className="text-left text-gray-700">
              <th className="py-4 pl-4">
                <p className="whitespace-nowrap w-[150px] font-normal text-[#0E0E0E] text-[12px] sm:text-[14px] 2xl:text-[16px]">
                  Campaign
                </p>
              </th>
              <th className="py-4">
                <p className="whitespace-nowrap flex justify-center text-center font-normal w-[100px] text-[#0E0E0E] text-[12px] sm:text-[14px] 2xl:text-[16px]">
                  Conversions
                </p>
              </th>
              <th className="py-4">
                <p className="whitespace-nowrap flex justify-center text-center font-normal w-[100px] text-[#0E0E0E] text-[12px] sm:text-[14px] 2xl:text-[16px]">
                  Max Bid
                </p>
              </th>
              <th className="py-4">
                <p className="whitespace-nowrap flex justify-center text-center font-normal w-[100px] text-[#0E0E0E] text-[12px] sm:text-[14px] 2xl:text-[16px]">
                  Status
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={index} className="border-t border-[#DDE1E6]">
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={
                      "https://tse4.mm.bing.net/th?id=OIP.FpBTdmS425XMYJ6kJH-fVAHaHd&pid=Api&P=0&h=180"
                    }
                    alt={campaign.name}
                    className="w-10 h-10 mr-4 rounded-full"
                  />
                  <p className="text-[#21272A] w-[150px] whitespace-nowrap text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal ">
                    {campaign.name}
                  </p>
                </td>
                <td className="py-2">
                  <p className="text-[#21272A] flex justify-center text-center w-[100px] whitespace-nowrap text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal ">
                    {campaign.conversions}
                  </p>
                </td>
                <td className="py-2">
                  <p className="text-[#21272A] w-[100px] flex justify-center text-center whitespace-nowrap text-[12px] sm:text-[14px] 2xl:text-[16px] font-normal ">
                    {campaign.maxBid}
                  </p>
                </td>
                <td className="py-2">
                  <span
                    className={`w-[100px] text-center flex justify-center flex-nowrap text-[10px] sm:text-[12px] 2xl:text-[14px] rounded-full px-3 py-[2px] ${
                      statusStyles[campaign.status]
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCampActivity;
