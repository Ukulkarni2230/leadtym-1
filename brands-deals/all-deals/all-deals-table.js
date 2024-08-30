"use client";
import DataTable from "@/src/components/Table/DataTable";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import {
  FaCheckCircle,
  FaPlusCircle,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { GoHeart, GoHeartFill, GoPlusCircle } from "react-icons/go";

// Placeholder images array
const placeholderImages = [
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
];

const initialDealColumns = [
  { id: 1, label: "Deals", field: "name", visible: true, locked: false },
  { id: 2, label: "Date", field: "date", visible: true, locked: false },
  {
    id: 3,
    label: "Product Category",
    field: "category",
    visible: true,
    locked: false,
  },
  {
    id: 4,
    label: "Deliverable",
    field: "deliverable",
    visible: true,
    locked: false,
  },
  { id: 5, label: "Budget", field: "budget", visible: true, locked: false },
  {
    id: 6,
    label: "Influencers",
    field: "influencers",
    visible: true,
    locked: false,
  },
  { id: 7, label: "Actions", field: "actions", visible: true, locked: false },
];

const dealData = [
  {
    id: "#0001",
    name: "T-Shirt",
    date: "13/05/2024",
    category: "T-Shirt",
    deliverable: "Story & Reel",
    budget: "₹5000",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[0] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[1] },
      { id: 3, name: "Influencer 3", imageUrl: placeholderImages[2] },
      { id: 4, name: "Influencer 4", imageUrl: placeholderImages[3] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "#0002",
    name: "Shoes",
    date: "22/05/2024",
    category: "Footwear",
    deliverable: "Story, Reel & Post",
    budget: "₹4000 - ₹7000",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[4] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[5] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "#0003",
    name: "Long Shoes",
    date: "15/06/2024",
    category: "Footwear",
    deliverable: "Story",
    budget: "₹12000",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[6] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[7] },
      { id: 3, name: "Influencer 3", imageUrl: placeholderImages[8] },
      { id: 4, name: "Influencer 4", imageUrl: placeholderImages[9] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "#0004",
    name: "Headphones",
    date: "15/06/2024",
    category: "Electronics",
    deliverable: "Reel & Post",
    budget: "₹2000 - ₹3000",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[0] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[1] },
      { id: 3, name: "Influencer 3", imageUrl: placeholderImages[2] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "#0005",
    name: "Mithra B",
    date: "15/06/2024",
    category: "T-Shirt",
    deliverable: "Story & Post",
    budget: "₹2500",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[3] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[4] },
      { id: 3, name: "Influencer 3", imageUrl: placeholderImages[5] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "#0006",
    name: "One Piece Dress",
    date: "15/06/2024",
    category: "Dress",
    deliverable: "Story, Reel & Post",
    budget: "₹8000",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[6] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[7] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "#0007",
    name: "Gloves",
    date: "15/06/2024",
    category: "Hand Gloves",
    deliverable: "Story, Reel & Post",
    budget: "₹5500",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[8] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[9] },
      { id: 3, name: "Influencer 3", imageUrl: placeholderImages[0] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "#0008",
    name: "T-shirt with Modal",
    date: "15/06/2024",
    category: "T-Shirt",
    deliverable: "Story, Reel & Post",
    budget: "₹5000",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[1] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[2] },
      { id: 3, name: "Influencer 3", imageUrl: placeholderImages[3] },
      { id: 4, name: "Influencer 4", imageUrl: placeholderImages[4] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "#0009",
    name: "T-Shirt Jersey",
    date: "15/06/2024",
    category: "Jersey",
    deliverable: "Story, Reel & Post",
    budget: "₹6500",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[5] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[6] },
      { id: 3, name: "Influencer 3", imageUrl: placeholderImages[7] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "#0010",
    name: "Mobile Brand",
    date: "22/01/2024",
    category: "Electronics",
    deliverable: "Story, Reel & Post",
    budget: "₹5000",
    influencers: [
      { id: 1, name: "Influencer 1", imageUrl: placeholderImages[8] },
      { id: 2, name: "Influencer 2", imageUrl: placeholderImages[9] },
    ],
    imageUrl: "https://via.placeholder.com/100",
  },
];

const AllDealsTable = () => {
  const router = useRouter();
  const [likedDeals, setLikedDeals] = useState({});
  const [checkedDeals, setCheckedDeals] = useState({});
  const [heartAnimation, setHeartAnimation] = useState(false);

  const handleLikeClick = (id) => {
    setLikedDeals((prev) => ({ ...prev, [id]: !prev[id] }));
    if (!likedDeals[id]) {
      setHeartAnimation(true);
      setTimeout(() => setHeartAnimation(false), 1000);
    }
  };

  const handleCheckClick = (id) => {
    setCheckedDeals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderDealRow = (row, columns, selectedRows, handleRowSelect) => (
    <tr
      key={row.id}
      className={`${selectedRows?.includes(row.id) ? "bg-[#ECECED]" : ""}`}
    >
      <td>
        <div className="py-3 flex justify-center">
          <CustomCheckbox
            label=""
            checked={selectedRows?.includes(row.id)}
            // onCheckedChange={() => handleRowSelect(row.id)}
            required={false}
            errorText=""
            id={`select-row-checkbox-${row.id}`}
                                  className="!rounded-[2.5px] !h-[16px] !w-[16px]"

          />
        </div>
      </td>
      {columns
        .filter((column) => column.visible)
        .map((column) => (
          <td
            key={column.id}
            className={`${column.locked ? "border-x border-[#D9D9DC]" : ""}`}
          >
            <div
              className={`px-2 ${
                column.field === "id" && "font-bold"
              } whitespace-nowrap py-3 text-[12px] sm:text-sm 2xl:text-base  text-[#35353A]`}
            >
              {column.field === "actions" ? (
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => handleLikeClick(row.id)}
                    className="hover:text-red-600 mt-[1.5px] text-[20px]"
                  >
                    {likedDeals[row.id] ? (
                      <GoHeartFill className="text-[#FF2E2E]" />
                    ) : (
                      <GoHeart />
                    )}
                  </button>
                  <button
                    onClick={() => handleCheckClick(row.id)}
                    className="hover:text-green-600 text-lg"
                  >
                    {checkedDeals[row.id] ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <CgAdd className="font-bold text-xl" />
                    )}
                  </button>
                </div>
              ) : column.field === "influencers" ? (
                <div className="flex -space-x-[7px]">
                  {row.influencers.slice(0, 3).map((influencer) => (
                    <img
                      key={influencer.id}
                      src={influencer.imageUrl}
                      alt={influencer.name}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  ))}
                  {row.influencers.length > 3 && (
                    <span className="w-[30px] h-[30px] flex items-center justify-center bg-[#ECECED] rounded-full text-xs font-bold">
                      +{row.influencers.length - 3}
                    </span>
                  )}
                </div>
              ) : column.field === "name" ? (
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() =>
                    router.push(`/influencer/brand-deal/deal-details/`)
                  }
                >
                  <img
                    src={row.imageUrl}
                    alt={row.name}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <span>{row.name}</span>
                </div>
              ) : (
                row[column.field]
              )}
            </div>
          </td>
        ))}
    </tr>
  );

  return (
    <div className="">
      <DataTable
        tableId="allDealsTable"
        initialColumns={initialDealColumns}
        data={dealData}
        onSearch={(query) => console.log("Search:", query)}
        renderRow={renderDealRow}
      />
    </div>
  );
};

export default AllDealsTable;
