import { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/hooks/user-service/useUser";
import { setUserDetails } from "@/src/Redux/user/userReducer";
import { encrypt } from "@/src/utils/crypto";
import { Message } from "@/src/components/reuseable/ToastNotification";
import useApi from "@/src/Apicalls/apiCalls";
import useFetchUserDetails from "../user-service/useFetchUserDetails";

const useUserDetailsNavigation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { updateUserDetails } = useFetchUserDetails();

  const user = useUser();
  const { postApiCall } = useApi();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (endpoint, payload) => {
    setIsLoading(true);

    try {
      const response = await postApiCall(endpoint, payload);
      if (response.status === 200) {
        Message.success(response.message);

        const newUser = {
          ...user.userDetails,
          ...payload,
          categories: payload.category
            ? JSON.parse(payload.category)
            : user.userDetails.categories,
          userEligible: true,
          dynamicRoute: "dashboard",
          token: user.userDetails.token,
        };
        updateUserDetails();

        // Set user details in cookies early
        Cookies.set("userDetails", JSON.stringify(newUser), {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          path: "/",
        });

        // Set token in cookies early
        Cookies.set("token", newUser.token, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          path: "/",
        });

        // Update user details in Redux store
        dispatch(setUserDetails(newUser));

        // Redirect to user-specific dashboard early
        console.log(userRedirect(newUser.userType));
        router.push(userRedirect(newUser.userType));
      } else {
        Message.error(`Failed to submit details. Status: ${response.status}`);
      }
    } catch (error) {
      Message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserSubmit = async (payload) => {
    const userType = user.userDetails.userType;

    let endpoint;
    switch (userType) {
      case 1:
        endpoint = "update_brand";
        break;
      case 2:
        endpoint = "update_advertiser";
        break;
      case 3:
        endpoint = "update_publisher";
        break;
      case 4:
        endpoint = "update_influencer";
        break;
      case 5:
        endpoint = "update_individual";
        break;
      default:
        Message.error("Invalid user type");
        return;
    }

    await handleSubmit(endpoint, payload);
  };

  const userRedirect = (userType) => {
    let path;
    switch (userType) {
      case 1:
        path = `/brand/dashboard`;
        break;
      case 2:
        path = `/agency/dashboard`;
        break;
      case 3:
        path = `/affiliate/dashboard`;
        break;
      case 4:
        path = `/influencer/dashboard`;
        break;
      case 5:
        path = `/individual/dashboard`;
        break;
      default:
        path = "/"; // Default path if no specific user type is found
    }
    return path; // Return the determined path
  };

  return {
    handleUserSubmit,
    isLoading,
    setIsLoading,
  };
};

export default useUserDetailsNavigation;
