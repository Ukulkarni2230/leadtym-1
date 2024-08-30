import React, { useState, useEffect } from "react";
import CardColumn from "./CardColumn";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdSchedule } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowUndo } from "react-icons/io5";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const ApprovalLayout = ({ setSelectedCount }) => {
  const [selectedCards, setSelectedCards] = useState({});

  useEffect(() => {
    const count = Object.values(selectedCards).flat().length;
    setSelectedCount(count);
  }, [selectedCards, setSelectedCount]);

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

  const pendingApprovalCards = [
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
      title: "Winter Wonderland",
      author: "Jenny Wilson",
      date: "8.5.2024, 07:20pm",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Autumn Collection",
      author: "Robert Fox",
      date: "9.5.2024, 08:10pm",
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
      title: "Spring Fling",
      author: "Kristin Watson",
      date: "10.5.2024, 09:30pm",
    },
  ];

  const reworkCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Retro Collection",
      author: "Darlene Robertson",
      date: "11.5.2024, 05:15pm",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Modern Art",
      author: "Marvin McKinney",
      date: "12.5.2024, 03:45pm",
    },
  ];

  const scheduledCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Urban Jungle",
      author: "Cameron Williamson",
      date: "13.5.2024, 11:00am",
      additionalImages: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Beachside Bash",
      author: "Jane Cooper",
      date: "14.5.2024, 01:30pm",
    },
  ];

  const postedCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Nature Walk",
      author: "Floyd Miles",
      date: "15.5.2024, 02:10pm",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "City Lights",
      author: "Ronald Richards",
      date: "16.5.2024, 04:00pm",
    },
  ];

  const completedCards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Country Roads",
      author: "Courtney Henry",
      date: "17.5.2024, 06:20pm",
      additionalImages: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Mountain Peaks",
      author: "Bessie Cooper",
      date: "18.5.2024, 07:50pm",
    },
  ];

  return (
    <div className="overflow-x-auto no-scrollbar px-2 sm:px-6 pt-2  pb-5">
      <div className="flex space-x-4 w-max">
        <CardColumn
          title="Pending for Approval"
          count={pendingApprovalCards.length}
          cards={pendingApprovalCards}
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

export default ApprovalLayout;
