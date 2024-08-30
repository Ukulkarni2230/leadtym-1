// useFetchUserDetails.js

import { useDispatch, useSelector } from "react-redux";
import useApi from "@/src/Apicalls/apiCalls";
import { setUserDetails } from "@/src/Redux/user/userReducer";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useFetchUserDetails = () => {
  const dispatch = useDispatch();
  const { postApiCall } = useApi();
  const user = useSelector((state) => state?.user);

  const updateUserDetails = async (userId, token) => {
    try {
      const response = await postApiCall(
        "user-detail",
        {
          user_id: userId || user.userDetails.userId,
        },
        token
      );

      if (response.status == 200) {
        console.log(response.data, "updated cuuuu");
        const responseData = response.data;
        const userDetails = responseData.userDetails[0];
        const userInfo = responseData.user.userInfo || {};
        const links = responseData.user || {};

        dispatch(
          setUserDetails({
            name: responseData.user.name,
            mobileNumber: responseData.user.mobile_number,
            status: responseData.user.status,
            userId: responseData.user._id,
            isEmailVerified: responseData.user.isEmailVerified,
            updatedAt: responseData.user.updatedAt,
            userTypeId: userDetails.user_type_id,
            groupId: userDetails.group_id,
            accountNumber: userDetails.account_number,
            balance: userDetails.balance,
            userApproval: userDetails.status,
            address: userInfo.address || "",
            firstName: userInfo.firstName || "",
            lastName: userInfo.lastName || "",
            middleName: userInfo.middleName || "",
            city: userInfo.city || "",
            state: userInfo.state || "",
            country: userInfo.country || "",
            country_id: userInfo.country_id || "",
            state_id: userInfo.state_id || "",
            city_id: userInfo.city_id || "",
            zipCode: userInfo.zipCode || "",
            email: userInfo.email || "",
            gender: userInfo.gender || "",
            designation: userInfo.designation || "",
            nationality: userInfo.nationality || "",
            companyName: userInfo.companyName || "",
            companyWebsite: userInfo.companyWebsite || "",
            gstNo: userInfo.gstNo || "",
            categories: userInfo.categories
              ? JSON.parse(userInfo.categories)
              : [],
            avatar: links.avatarUrl || "",
            picture: links.brandImageUrl || "",
          })
        );
      } else {
        console.error("Failed to fetch user details:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch user details:", error);
      Message.error(error.message);
    }
  };

  return { updateUserDetails };
};

export default useFetchUserDetails;
