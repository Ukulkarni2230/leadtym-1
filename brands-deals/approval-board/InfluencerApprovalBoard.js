"use client";
import React, { useState, useEffect } from "react";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdSchedule } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoArrowUndo } from "react-icons/io5";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import CardColumn from "../../All-Influencers/Approval-board/CardColumn";

const InfluencerApprovalBoard = () => {
  const [selectedCards, setSelectedCards] = useState({});
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    const count = Object.values(selectedCards).flat().length;
    setSelectedCount(count);
  }, [selectedCards]);

  const handleCardSelect = (column, index, checked) => {
    const newSelectedCards = { ...selectedCards };
    Object.keys(newSelectedCards).forEach((col) => {
      if (col !== column) {
        newSelectedCards[col] = [];
      }
    });
    if (!newSelectedCards[column]) {
      newSelectedCards[column] = [];
    }
    if (checked) {
      newSelectedCards[column].push(index);
    } else {
      newSelectedCards[column] = newSelectedCards[column].filter(
        (i) => i !== index
      );
    }
    setSelectedCards(newSelectedCards);
  };

  const draftCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Summer Vibes Collection",
      author: "Albert Flores",
      date: "7.5.2024, 06:48pm",
      additionalImages: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Summer Vibes Collection",
      author: "Albert Flores",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
  ];

  const pendingCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Makeup Essentials",
      author: "Jane Cooper",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Makeup Essentials",
      author: "Jane Cooper",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
  ];

  const reworkCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Food Photography",
      author: "Cameron Williamson",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Food Photography",
      author: "Cameron Williamson",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
  ];

  const scheduledCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Interior Design",
      author: "Theresa Webb",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Interior Design",
      author: "Theresa Webb",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
  ];

  const postedCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Fashion Lookbook",
      author: "Devon Lane",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Fashion Lookbook",
      author: "Devon Lane",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
  ];

  const completedCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Magazine Spread",
      author: "Courtney Henry",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Magazine Spread",
      author: "Courtney Henry",
      date: "7.5.2024, 06:48pm",
      additionalImages: [],
    },
  ];

  return (
    <div className="overflow-x-auto no-scrollbar p-2 sm:p-6">
      <div className="flex space-x-4 w-max">
        <CardColumn
          title="Draft"
          count={draftCards.length}
          cards={draftCards}
          color="#F3EDFF"
          icon={BsStars}
          iconBgColor="#C3A3FF"
          onCardSelect={handleCardSelect}
          selectedCards={selectedCards["Draft"] || []}
          isDraft
        />
        <CardColumn
          title="Pending for Approval"
          count={pendingCards.length}
          cards={pendingCards}
          color="#F3EDFF"
          icon={BiSolidTimeFive}
          iconBgColor="#C3A3FF"
          onCardSelect={handleCardSelect}
          selectedCards={selectedCards["Pending for Approval"] || []}
        />
        <CardColumn
          title="Rework"
          count={reworkCards.length}
          cards={reworkCards}
          color="#FFF9E6"
          icon={IoArrowUndo}
          iconBgColor="#AC9858"
          onCardSelect={handleCardSelect}
          selectedCards={selectedCards["Rework"] || []}
        />
        <CardColumn
          title="Scheduled"
          count={scheduledCards.length}
          cards={scheduledCards}
          color="#E9EDFD"
          icon={MdSchedule}
          iconBgColor="#4E5FA4"
          onCardSelect={handleCardSelect}
          selectedCards={selectedCards["Scheduled"] || []}
        />
        <CardColumn
          title="Posted"
          count={postedCards.length}
          cards={postedCards}
          color="#D6E3FF"
          icon={FaSquareArrowUpRight}
          iconBgColor="#175AE4"
          onCardSelect={handleCardSelect}
          selectedCards={selectedCards["Posted"] || []}
        />
        <CardColumn
          title="Completed"
          count={completedCards.length}
          cards={completedCards}
          color="#E9FDF3"
          icon={FaCheckCircle}
          iconBgColor="#4A8C6B"
          onCardSelect={handleCardSelect}
          selectedCards={selectedCards["Completed"] || []}
        />
      </div>
    </div>
  );
};

export default InfluencerApprovalBoard;
