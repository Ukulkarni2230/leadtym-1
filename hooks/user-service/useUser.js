import { useSelector } from "react-redux";

// userTypeMapping.js
export const userTypeMapping = {
  1: "brand",
  2: "Agency",
  3: "affiliate",
  4: "Influencer",
  5: "individual",
};

export const userTypeReverseMapping = {
  brand: 1,
  Agency: 2,
  Publisher: 3,
  Influencer: 4,
  individual: 5,
};

export const getUserTypeString = (userType) =>
  userTypeMapping[userType] || "Unknown";

export const useUser = () => {
  const user = useSelector((state) => state?.user);
  const userType = getUserTypeString(user?.userDetails?.userType);

  return { ...user, userType };
};
