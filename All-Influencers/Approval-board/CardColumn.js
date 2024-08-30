import React, { useState, useEffect } from "react";
import CustomCheckbox from "@/src/components/reuseable/checkbox";
import ConvertIconToImg from "@/src/utils/ConvertIconToImg";
import { GrTag } from "react-icons/gr";

const CardColumn = ({
  title,
  count,
  cards,
  color,
  icon: Icon,
  iconBgColor,
  onCardSelect,
  selectedCards,
  isDraft = false, // Add a prop to identify if this is the draft column
}) => {
  const [checkedStates, setCheckedStates] = useState(
    cards.map((_, index) => selectedCards.includes(index))
  );

  useEffect(() => {
    setCheckedStates(cards.map((_, index) => selectedCards.includes(index)));
  }, [cards, selectedCards]);

  const handleCheckedChange = (index) => (checked) => {
    const newCheckedStates = cards.map(() => false);
    newCheckedStates[index] = checked;
    setCheckedStates(newCheckedStates);
    onCardSelect(title, index, checked);
  };

  return (
    <div className="w-[292px] bg-white rounded-md shadow-lg shadow-[#5E17EB26]">
      <div
        className={`flex items-center p-4 py-2.5 rounded-t-md`}
        style={{ backgroundColor: color }}
      >
        <div
          className={`p-[3px] flex rounded items-center text-white justify-center`}
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon size={16} />
        </div>
        <h2 className="text-[12px] w-full flex justify-center sm:text-sm 2xl:text-base font-semibold text-[#101018]">
          {title} ({count})
        </h2>
      </div>
      <div className="p-3 overflow-y-auto no-scrollbar max-h-[82vh]">
        {isDraft && (
          <button className="w-full gradient-bg  text-white py-2 rounded-full mb-4">
            New Post
          </button>
        )}
        {cards.map((card, index) => (
          <div key={index} className="bg-[#f8f9fa] p-2 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-0.5">
                <ConvertIconToImg
                  src="/assets/icons/tag.svg"
                  icon={GrTag}
                  size={16}
                  alt="tag"
                />
                <p className="text-[#101018] text-[10px] sm:text-xs font-semibold 2xl:text-sm">
                  {card.title}
                </p>
              </div>
              <CustomCheckbox
                checked={checkedStates[index]}
                onCheckedChange={handleCheckedChange(index)}
                id={`checkbox-${title}-${index}`}
              />
            </div>
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              {card.additionalImages && card.additionalImages.length > 0 && (
                <div className="absolute bottom-2 right-2 bg-[#D8D9D4] w-[30px] h-[30px] bg-opacity-50 text-[#000000] text-[10px] sm:text-[12px] 2xl:text-sm rounded-full flex justify-center items-center">
                  +{card.additionalImages.length}
                </div>
              )}
            </div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-0.5">
                <ConvertIconToImg
                  src="/assets/icons/influencer.svg"
                  icon={GrTag}
                  size={16}
                  alt="tag"
                />
                <p className="text-[8px] sm:text-[10px] 2xl:text-xs text-[#101018] font-semibold">
                  {card.author}
                </p>
              </div>
              <p className="text-xs text-[#101018] font-light text-[8px] sm:text-[10px] 2xl:text-xs">
                {card.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardColumn;
