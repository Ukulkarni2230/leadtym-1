import { useState, useEffect, use } from "react";
import useApi from "@/src/Apicalls/apiCalls"; // Ensure the correct path to useApi
import { useUser } from "../user-service/useUser";
import { Message } from "@/src/components/reuseable/ToastNotification";

const useRequestPayoutOffer = (initialPayout, refetchCampaignDetails) => {
  const [demandedPayout, setDemandedPayout] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { postApiCall } = useApi();
  const [loading, setLoading] = useState(false);
  const { userDetails } = useUser();

  const handlePayoutChange = (e) => {
    const value = e.target.value;
    setDemandedPayout(value);
  };

  useEffect(() => {
    const isPayoutValid =
      parseFloat(demandedPayout) > parseFloat(initialPayout);
    setIsValid(isPayoutValid);
  }, [demandedPayout, initialPayout]);

  const handleMakeOffer = async (campaignId, advertiserName) => {
    if (!isValid) return;

    const payload = {
      campaignId,
      advertiserName,
      publisherId: userDetails.userId,
      amount: parseFloat(demandedPayout),
      publisherName:
        userDetails.firstName && userDetails.lastName
          ? `${userDetails.firstName} ${userDetails.lastName}`
          : userDetails.name,
    };
    setLoading(true);
    try {
      const response = await postApiCall("create-offer", payload);
      if (response.status == 200 || response.status == 201) {
        setDemandedPayout("");
        refetchCampaignDetails();
        Message.success(response.message);
      } else {
        Message.success(response.message);
      }
    } catch (error) {
      Message.error(error.message || "Error creating offer");
      console.error("Error creating offer:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    demandedPayout,
    handlePayoutChange,
    isValid,
    handleMakeOffer,
  };
};

export default useRequestPayoutOffer;
