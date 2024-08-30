import React, { useState, useEffect } from "react";
import { GiQueenCrown } from "react-icons/gi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LeaderboardRanking = ({ title, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const getCrownColor = (rank) => {
    switch (rank) {
      case "01":
        return "text-[#CFC145]"; // Gold color for first place
      case "02":
        return "text-[#A9A8B0]"; // Silver color for second place
      case "03":
        return "text-[#CD7F32]"; // Bronze color for third place
      default:
        return "";
    }
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(data.length / entriesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const displayedData = data.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="shadow-lg rounded-lg shadow-[#5E17EB26] truncate">
      <div className="bg-white rounded-t-lg sm:p-4 p-2 border border-[#D8D9D4]">
        <p className="font-semibold text-base sm:text-lg 2xl:text-xl text-[#101018] ">
          {title}
        </p>
      </div>
      <table className="min-w-full bg-white border-x border-b ">
        <thead>
          <tr>
            <th className="py-2 px-2 border-b text-[#101018] text-[10px] sm:text-xs 2xl:text-sm">
              Ranking
            </th>
            <th className="py-2 px-2 border-b text-[#101018] text-[10px] sm:text-xs 2xl:text-sm">
              Publisher Id
            </th>
            <th className="py-2   border-b text-[#101018] text-[10px] sm:text-xs 2xl:text-sm">
              User
            </th>
            <th className="py-2 px-2 border-b text-[#101018] text-[10px] sm:text-xs 2xl:text-sm">
              {title.includes("Earning")
                ? "Earnings"
                : title.includes("Converting")
                ? "Conversion"
                : "Visits"}
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-2 border-b">
                {item.ranking <= 3 ? (
                  <GiQueenCrown
                    className={`inline-block text-[26px] sm:text-[28px] 2xl:text-[30px] ${getCrownColor(
                      item.ranking
                    )}`}
                  />
                ) : (
                  item.ranking
                )}
              </td>
              <td className="py-2 px-2 border-b text-[#35353A] sm:text-sm text-xs 2xl:text-base">
                {item.publisherId}
              </td>
              <td className="py-2 px-2 border-b  justify-center flex items-center ">
                <img
                  src={item.userImage}
                  alt={item.userName}
                  className="w-8 h-8 rounded-full inline-block mr-2"
                />
              </td>
              <td className="py-2 px-2 border-b text-[#35353A] text-xs sm:text-sm 2xl:text-base">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sm:p-4 p-2  border bg-white border-t flex justify-between items-center">
        <div>
          <label
            htmlFor="entries"
            className="mr-2 text-xs sm:text-sm  2xl:text-base"
          >
            Show entries:
          </label>
          <select
            id="entries"
            value={entriesPerPage}
            onChange={handleEntriesChange}
            className="border border-[#D8D9D4] rounded p-0.5"
          >
            {[10, 20, 30, 50].map((size) => (
              <option key={size} value={size}>
                <p className="text-xs sm:text-xs  2xl:text-sm">{size}</p>
              </option>
            ))}
          </select>
        </div>
        <span className="text-xs sm:text-sm  2xl:text-base">
          {currentPage} of {totalPages}
        </span>
        <div className="flex space-x-2 text-xs sm:text-sm  2xl:text-base">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-1  bg-gray-200 cursor-pointer rounded disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-1 bg-gray-200 rounded cursor-pointer disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardRanking;
