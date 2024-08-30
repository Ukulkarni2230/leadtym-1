// hooks/useSubmitCampaign.js

import { useDispatch, useSelector } from "react-redux";
import { resetCampaignCreateFormData } from "@/src/Redux/actions/campaignCreateFormActions";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "../../user-service/useUser";
import { useState } from "react";

const useSubmitCampaign = (campaignId, initialFormData) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.campaignCreateForm);
  const { postApiCall } = useApi();
  const { userDetails } = useUser();
  const [load, setLoad] = useState(false);

  const formatDate = (date) =>
    date ? new Date(date).toISOString().split("T")[0] : undefined;
  const formatTime = (time) =>
    time ? new Date(time).toISOString().split("T")[1].slice(0, 5) : undefined;

  const prepareCampaignData = () => {
    return {
      user_id: userDetails.userId,
      is_draft: formData.is_draft !== undefined ? formData.is_draft : false,
      is_active: formData.is_active !== undefined ? formData.is_active : false,
      campaign_status: formData.campaign_status || "pending",
      ...(formData.campaignDetails?.campaignName && {
        campaignName: formData.campaignDetails.campaignName,
      }),
      ...(formData.campaignDetails?.previewUrl && {
        previewURL: formData.campaignDetails.previewUrl,
      }),
      ...(formData.campaignDetails?.campaignUrl && {
        campaignURL: formData.campaignDetails.campaignUrl,
      }),
      ...(formData.campaignDetails?.description && {
        description: formData.campaignDetails.description,
      }),
      ...(formData.campaignDetails?.selectedCategories && {
        categories: formData.campaignDetails.selectedCategories.map(
          (category) => category.id
        ),
      }),
      ...(formData.campaignDetails?.selectedTrafficSources && {
        trafficSource: formData.campaignDetails.selectedTrafficSources.map(
          (source) => source.id
        ),
      }),
      ...(formData.creatives &&
        formData.creatives.length > 0 && {
          creativeImages: formData.creatives,
        }),
      goals: {
        ...(formData.goalPayout?.payableGoals && {
          payableGoals: formData.goalPayout.payableGoals,
        }),
        ...(formData.goalPayout?.currency && {
          currency: formData.goalPayout.currency,
        }),
        ...(formData.goalPayout?.advertiserRevenue && {
          advertiserRevenue: Number(formData.goalPayout.advertiserRevenue),
        }),
        ...(formData.goalPayout?.maxBids && {
          maxBid: Number(formData.goalPayout.maxBids),
        }),
        ...(formData.goalPayout?.totalBudget && {
          totalBudget: Number(formData.goalPayout.totalBudget),
        }),
        ...(formData.goalPayout?.budgetType && {
          budgetType: formData.goalPayout.budgetType,
        }),
        caps: {
          ...(formData.goalPayout?.caps && {
            total: Number(formData.goalPayout.caps),
          }),
          ...(formData.goalPayout?.dailyBudget && {
            daily: Number(formData.goalPayout.dailyBudget),
          }),
          ...(formData.goalPayout?.weeklyBudget && {
            weekly: Number(formData.goalPayout.weeklyBudget),
          }),
          ...(formData.goalPayout?.monthlyBudget && {
            monthly: Number(formData.goalPayout.monthlyBudget),
          }),
        },
      },
      targeting: {
        ...(formData.targeting?.selectedCountry && {
          countries: formData.targeting.selectedCountry,
        }),
        ...(formData.targeting?.selectedState && {
          states: formData.targeting.selectedState,
        }),
        ...(formData.targeting?.selectedCity && {
          cities: formData.targeting.selectedCity,
        }),
        ...(formData.targeting?.selectedDeviceTargeting && {
          deviceTypes: formData.targeting.selectedDeviceTargeting.map(
            (device) => device.id
          ),
        }),
        ...(formData.targeting?.selectedGenderTargeting && {
          genders: formData.targeting.selectedGenderTargeting.map(
            (gender) => gender.title
          ),
        }),
        ...(formData.targeting?.selectedAgeTargeting && {
          ageRanges: formData.targeting.selectedAgeTargeting.map(
            (age) => age.title
          ),
        }),
      },
      schedule: {
        ...(formData.timeSchedule?.timezone && {
          timezone: formData.timeSchedule.timezone,
        }),
        ...(formData.timeSchedule?.startDate && {
          startDate: formatDate(formData.timeSchedule.startDate),
        }),
        ...(formData.timeSchedule?.startTime && {
          startTime: formatTime(formData.timeSchedule.startTime),
        }),
        ...(formData.timeSchedule?.endDate && {
          endDate: formatDate(formData.timeSchedule.endDate),
        }),
        ...(formData.timeSchedule?.endTime && {
          endTime: formatTime(formData.timeSchedule.endTime),
        }),
      },
      ...(formData.campaign_trackier_id && {
        campaign_trackier_id: formData.campaign_trackier_id,
      }),
      ...(formData.platform_charges && {
        platform_charges: formData.platform_charges,
      }),
      ...(formData.approved_by && { approved_by: formData.approved_by }),
      ...(formData.advertiser_trackier_id && {
        advertiser_trackier_id: formData.advertiser_trackier_id,
      }),
      ...(formData.base_link && { base_link: formData.base_link }),
      ...(formData.jumps && { jumps: formData.jumps }),
      ...(campaignId && { campaignId }), // Add campaignId if updating
    };
  };
  const hasFormChanged = () => {
    return JSON.stringify(initialFormData) !== JSON.stringify(formData);
  };

  const submitCampaign = async () => {
    if (!hasFormChanged()) {
      Message.error("No changes made to the campaign.");
      return false;
    }
    setLoad(true);
    try {
      const campaignData = prepareCampaignData();
      const endpoint = campaignId ? "/update-campaign" : "/create-campaign";
      const response = await postApiCall(endpoint, campaignData);

      if (response.status >= 200 && response.status < 300) {
        Message.success(
          campaignId
            ? "Campaign updated successfully."
            : "Campaign created successfully."
        );
        dispatch(resetCampaignCreateFormData());
        return true;
      } else {
        Message.error(
          response.message ||
            `Failed to ${campaignId ? "update" : "create"} campaign`
        );
        return false;
      }
    } catch (error) {
      console.error("Error submitting campaign:", error);
      Message.error(
        "Failed to submit campaign: " + (error.message || "Unknown error")
      );
      return false;
    } finally {
      setLoad(false);
    }
  };

  const saveCampaignAsDraft = async () => {
    if (!hasFormChanged()) {
      Message.error("No changes made to the campaign.");
      return false;
    }

    try {
      const campaignData = { ...prepareCampaignData(), is_draft: true };
      const endpoint = campaignId
        ? "/update-campaign-as-draft"
        : "/create-campaign-as-draft";
      const response = await postApiCall(endpoint, campaignData);

      if (response.status >= 200 && response.status < 300) {
        Message.success(response.message);
        dispatch(resetCampaignCreateFormData());
        return true;
      } else {
        Message.error(`Failed to save campaign as draft`);
        return false;
      }
    } catch (error) {
      console.error("Error saving campaign as draft:", error);
      Message.error(
        "Failed to save campaign as draft: " +
          (error.message || "Unknown error")
      );
      return false;
    }
  };

  return { submitCampaign, saveCampaignAsDraft, hasFormChanged, load };
};

export default useSubmitCampaign;
