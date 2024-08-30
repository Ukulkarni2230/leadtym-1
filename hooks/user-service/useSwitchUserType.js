// useSwitchUserType.js

import { useState } from "react";
import { useDispatch } from "react-redux";
import useApi from "@/src/Apicalls/apiCalls";
import { setUserDetails } from "@/src/Redux/user/userReducer";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Message } from "@/src/components/reuseable/ToastNotification";

const userTypeMapping = {
  brand: 1,
  agency: 2,
  affiliate: 3,
  influencer: 4,
  individual: 5,
};

const useSwitchUserType = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { postApiCall } = useApi();
  const router = useRouter();

  const switchUserType = async (userType, userTypeId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postApiCall("user-create-new-usertype", {
        user_type: userType,
        user_type_id: userTypeId,
      });
      Message.success(response.message);
      let userDetails;
      if (response.status == 201) {
        userDetails = response.data.userDetails;
      } else if (response.status == 200) {
        userDetails = response.data;
      }

      if (userDetails) {
        const updatedUserDetails = {
          userTypeString: userType,
          balance: userDetails?.balance,
          accountNumber: userDetails?.account_number,
          groupId: userDetails?.group_id,
          userId: userDetails?.user_id,
          userType: userTypeMapping[userDetails?.user_type],
        };

        Cookies.set("userDetails", JSON.stringify(updatedUserDetails), {
          expires: 30, // Set cookie to expire in 30 days
          path: "/",
        });

        dispatch(setUserDetails(updatedUserDetails));
        router.push(`/${userType}/dashboard`);
      }

      return response;
    } catch (err) {
      Message.error(error.message);

      setError(err);
      console.error("Failed to switch user type:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    switchUserType,
    loading,
    error,
  };
};

export default useSwitchUserType;
