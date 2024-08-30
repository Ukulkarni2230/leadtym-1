// File path: /src/store/actions/campaignCreateFormActions.js

export const UPDATE_CAMPAIGN_CREATE_FORM_DATA =
  "UPDATE_CAMPAIGN_CREATE_FORM_DATA";
export const RESET_CAMPAIGN_CREATE_FORM_DATA =
  "RESET_CAMPAIGN_CREATE_FORM_DATA";

export const updateCampaignCreateFormData = (step, data) => ({
  type: UPDATE_CAMPAIGN_CREATE_FORM_DATA,
  payload: { step, data },
});

export const resetCampaignCreateFormData = () => ({
  type: RESET_CAMPAIGN_CREATE_FORM_DATA,
});
