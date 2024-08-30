// hooks/useFetchCampaignDetails.js

import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useDispatch } from "react-redux";
import { updateCampaignCreateFormData } from "@/src/Redux/actions/campaignCreateFormActions";

const useFetchCampaignDetails = (campaignId) => {
  const { postApiCall } = useApi();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialData, setInitialData] = useState(null); // Track initial data
  const dispatch = useDispatch();

  const fetchCampaignDetails = async () => {
    if (campaignId) {
      setLoading(true);
      try {
        const response = await postApiCall("campaign-detail", {
          campaignId,
        });
        const data = response.data;
        console.log(data, "data drom baccc");
        // Transform and dispatch data to Redux
        const transformedCampaignDetails = {
          profilePicture:
            data?.userData?.user?.avatarUrl ||
            "/assets/profile/defaultprofile.svg",
          creatorId: data?.userData?.userDetails?.group_id || "#brand1",
          creatorName:
            data?.userData?.userDetails?.about?.brandName ||
            data?.userData?.user.userInfo.companyName ||
            "",
          advertiserName:
            data?.userData?.user.userInfo.firstName +
              " " +
              data?.userData?.user.userInfo.lastName || "",
          demandedPayout: data?.demandedPayout || "",
          payout: data?.payout || "",
          existingOffer: data?.existingOffer,
          campaignName: data?.campaignName || "",
          previewUrl: data?.previewURL || "",
          campaignUrl: data?.campaignURL || "",
          description: data?.description || "",
          selectedCategories: (data?.categories || []).map((cat) => ({
            title: cat.name,
            id: cat._id,
          })),
          selectedTrafficSources: (data?.trafficSource || []).map((src) => ({
            title: src.name,
            id: src._id,
          })),
        };

        const transformedCreatives = data?.creativeImages || [];

        const transformedGoalPayout = {
          payableGoals: data.goals?.payableGoals?._id || "",
          payGoalString: data.goals?.payableGoals?.name || "",
          currency: data.goals?.currency || "",
          advertiserRevenue: String(data.goals?.advertiserRevenue || ""),
          maxBids: String(data.goals?.maxBid || ""),
          totalBudget: String(data.goals?.totalBudget || ""),
          budgetType: data.goals?.budgetType || "",
          caps: data.goals?.caps?.total || "",
          dailyBudget: data.goals?.caps?.daily || "",
          weeklyBudget: data.goals?.caps?.weekly || "",
          monthlyBudget: data.goals?.caps?.monthly || "",
        };

        const transformedTargeting = {
          selectedCountry: data.targeting?.countries || [],
          selectedState: data.targeting?.states || [],
          selectedCity: data.targeting?.cities || [],
          selectedDeviceTargeting: (data.targeting?.deviceTypes || []).map(
            (type) => ({
              id: type,
              title: type.charAt(0).toUpperCase() + type.slice(1),
            })
          ),
          selectedGenderTargeting: (data.targeting?.genders || []).map(
            (gender) => ({
              id: gender.toLowerCase(),
              title: gender,
            })
          ),
          selectedAgeTargeting: (data.targeting?.ageRanges || []).map(
            (range) => ({
              id: range,
              title: range,
            })
          ),
          countryDetails: (data.targeting?.countries || []).map((countryId) => {
            const country = data.countryData.find((c) => c._id === countryId);
            return {
              id: countryId,
              name: country ? country.name : "",
            };
          }),

          stateDetails: (data.targeting?.states || []).map((stateId) => {
            const state = data.stateData.find((s) => s._id === stateId);
            return {
              id: stateId,
              name: state ? state.name : "",
            };
          }),

          cityDetails: (data.targeting?.cities || []).map((cityId) => {
            const city = data.cityData.find((c) => c._id === cityId);
            return {
              id: cityId,
              name: city ? city.name : "",
            };
          }),
        };

        const transformedTimeSchedule = {
          timezone: data.schedule?.timezone || "",
          dateRange: [],
          startTime: data.schedule?.startTime
            ? new Date(
                `1970-01-01T${data.schedule.startTime.padStart(5, "0")}:00Z`
              ).toISOString()
            : "",
          endTime: data.schedule?.endTime
            ? new Date(
                `1970-01-01T${data.schedule.endTime.padStart(5, "0")}:00Z`
              ).toISOString()
            : "",
        };

        dispatch(
          updateCampaignCreateFormData(
            "campaignDetails",
            transformedCampaignDetails
          )
        );
        dispatch(
          updateCampaignCreateFormData("creatives", transformedCreatives)
        );
        dispatch(
          updateCampaignCreateFormData("goalPayout", transformedGoalPayout)
        );
        dispatch(
          updateCampaignCreateFormData("targeting", transformedTargeting)
        );
        dispatch(
          updateCampaignCreateFormData("timeSchedule", transformedTimeSchedule)
        );

        setInitialData({
          campaignDetails: transformedCampaignDetails,
          creatives: transformedCreatives,
          goalPayout: transformedGoalPayout,
          targeting: transformedTargeting,
          timeSchedule: transformedTimeSchedule,
        });
        setError(null);
      } catch (err) {
        setError(err);
        Message.error(err.message);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    fetchCampaignDetails();
  }, [campaignId]);

  return { loading, error, initialData, fetchCampaignDetails };
};

export default useFetchCampaignDetails;
