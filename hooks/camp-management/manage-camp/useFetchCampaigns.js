import { useState } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "../../user-service/useUser";

const useFetchCampaigns = () => {
  const { postApiCall } = useApi();
  const { userDetails } = useUser();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState({});
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [latestPayload, setLatestPayload] = useState(null);

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
      setLatestPayload(payload);
      const response = await postApiCall("list-advertiser-campaign", payload);

      if (response.status === 200 || response.status === 201) {
        const formattedCampaigns = response.data.campaigns.map((campaign) => ({
          id: campaign._id,
          campaignName: campaign.campaignName,
          categories: campaign.categories.map((cat) => cat.name).join(", "),
          device: campaign.targeting.deviceTypes.join(", "),
          countryCodes: campaign.targeting.countryCodes,
          createdAt: new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            day: "numeric",
            month: "numeric",
          }).format(new Date(campaign.createdAt)),
          clicks: campaign.clicksCount,
          uniqueClicks: campaign.uniqueClicksCount,
          conversions: campaign.conversionsCount,
          maxBid: campaign.goals?.maxBid || "-",
          status: campaign.is_draft ? "Draft" : campaign.campaign_status,
          state: campaign.is_active,
          imageUrl: campaign.creativeImages[0] || "",
          is_draft: campaign.is_draft,
        }));
        setCampaigns(formattedCampaigns);
        setTotalCampaigns(response.data.pagination.total);
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

  const handleToggleStatus = async (id, currentState) => {
    setLoadingStatus((prev) => ({ ...prev, [id]: true }));
    try {
      const response = await postApiCall("/active-deactive-campaign", {
        campaignId: id,
        isActive: !currentState,
      });
      Message.success(response.message);
      fetchCampaigns(); // Refresh the list after toggling status
    } catch (error) {
      Message.error(error.message);
    } finally {
      setLoadingStatus((prev) => ({ ...prev, [id]: false }));
    }
  };

  return {
    campaigns,
    loading,
    error,
    fetchCampaigns,
    handleToggleStatus,
    totalCampaigns,
    loadingStatus,
    setLoadingStatus,
    latestPayload,
  };
};

export default useFetchCampaigns;
