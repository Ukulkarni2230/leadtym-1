import { useState } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "../../user-service/useUser";

const useFetchPremiumCampaigns = (endpoint) => {
  const { postApiCall } = useApi();
  const { userDetails } = useUser();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCampaigns, setTotalCampaigns] = useState(0);

  const fetchCampaigns = async (
    page = 1,
    limit = 10,
    filters = "",
    searchField = "",
    sortField = "",
    sortOrder = "",
    startDate = "",
    endDate = ""
  ) => {
    try {
      setLoading(true);
      const payload = {
        userId: userDetails.userId,
        page,
        limit,
        filters,
        searchField,
        sortField,
        sortOrder,
        startDate,
        endDate,
      };
      const response = await postApiCall(endpoint, payload);

      console.log(response, "resss");
      if (response.status === 200 || response.status === 201) {
        const formattedCampaigns = response?.data?.data?.map((campaign) => ({
          id: campaign._id,
          campaignId: campaign._id,
          campaignName: campaign.campaignName,
          categories: campaign.categories.map((cat) => cat.name).join(", "),
          campaignDevice: campaign.targeting.deviceTypes.join(", "),
          countryCodes: campaign.targeting.countryCodes,
          campaignDate: new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            day: "numeric",
            month: "numeric",
          }).format(new Date(campaign.createdAt)),
          advertiserRevenue: campaign.payout || "-",
          //   campaignStatus: campaign.campaign_status,
          imageUrl: campaign.creativeImages[0] || "", // Assuming an image URL is provided
        }));
        setCampaigns(formattedCampaigns);
        setTotalCampaigns(response.data.totalCampaigns);
      } else {
        setCampaigns([]);
        setTotalCampaigns(0);
      }
    } catch (err) {
      setError(err);
      setCampaigns([]);
      Message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    campaigns,
    loading,
    error,
    fetchCampaigns,
    totalCampaigns,
  };
};

export default useFetchPremiumCampaigns;
