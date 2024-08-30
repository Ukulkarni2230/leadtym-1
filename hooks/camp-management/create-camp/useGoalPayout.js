import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCampaignCreateFormData } from "@/src/Redux/actions/campaignCreateFormActions";

const useGoalPayout = (setActiveTab) => {
  const dispatch = useDispatch();
  const goalPayoutDetails = useSelector(
    (state) => state.campaignCreateForm.goalPayout
  );

  const [formData, setFormData] = useState({
    payableGoals: goalPayoutDetails.payableGoals || "", // Should store id
    currency: goalPayoutDetails.currency || "",
    advertiserRevenue: goalPayoutDetails.advertiserRevenue || "",
    maxBids: goalPayoutDetails.maxBids || "",
    totalBudget: goalPayoutDetails.totalBudget || "",
    caps: goalPayoutDetails.caps || "",
    dailyBudget: goalPayoutDetails.dailyBudget || "",
    weeklyBudget: goalPayoutDetails.weeklyBudget || "",
    monthlyBudget: goalPayoutDetails.monthlyBudget || "",
    budgetType: goalPayoutDetails.budgetType || "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleValidation = () => {
    const errors = {};

    if (!formData.payableGoals) {
      errors.payableGoals = "Payable Goals are required";
    }

    if (!formData.currency) {
      errors.currency = "Currency is required";
    }

    if (!formData.advertiserRevenue) {
      errors.advertiserRevenue = "Advertiser Revenue is required";
    }

    if (!formData.budgetType) {
      errors.budgetType = "Budget Type is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const validateAndSave = () => {
    if (handleValidation()) {
      dispatch(updateCampaignCreateFormData("goalPayout", formData));
      setActiveTab(3);
    }
  };

  // Automatically update Redux store when formData changes
  useEffect(() => {
    dispatch(updateCampaignCreateFormData("goalPayout", formData));
  }, [formData, dispatch]);

  return {
    formData,
    formErrors,
    handleChange,
    validateAndSave,
  };
};

export default useGoalPayout;
