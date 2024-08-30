// File: src/hooks/navigate/useDynamicNavigate.js

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const useDynamicNavigate = () => {
  const router = useRouter();
  const userType = useSelector((state) =>
    state.user?.userDetails?.userTypeString?.toLowerCase()
  );

  const navigate = (
    path,
    allowedUserTypes = [
      "brand",
      "agency",
      "affiliate",
      "influencer",
      "individual",
    ]
  ) => {
    if (allowedUserTypes.includes(userType)) {
      // Uncomment the line below to actually navigate
      router.push(`/${userType}${path}`);
    } else {
      console.warn(`Navigation not allowed for user type: ${userType}`);
    }
  };

  return navigate;
};

export default useDynamicNavigate;



