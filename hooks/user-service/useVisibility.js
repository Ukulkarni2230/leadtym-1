import { useSelector } from "react-redux";

const useVisibility = (allowedUserTypes) => {
  const userType = useSelector((state) =>
    state.user?.userDetails?.userTypeString?.toLowerCase()
  );

  return allowedUserTypes.includes(userType);
};

export default useVisibility;
