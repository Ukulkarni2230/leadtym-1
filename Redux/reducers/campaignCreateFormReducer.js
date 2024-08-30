// File path: /src/store/reducers/campaignCreateFormReducer.js

import {
  UPDATE_CAMPAIGN_CREATE_FORM_DATA,
  RESET_CAMPAIGN_CREATE_FORM_DATA,
} from "../actions/campaignCreateFormActions";

const initialState = {
  campaignDetails: {},
  creatives: [],
  goalPayout: {},
  targeting: {},
  timeSchedule: {},
};

const campaignCreateFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CAMPAIGN_CREATE_FORM_DATA:
      return {
        ...state,
        [action.payload.step]: action.payload.data,
      };
    case RESET_CAMPAIGN_CREATE_FORM_DATA:
      return initialState;
    default:
      return state;
  }
};

export default campaignCreateFormReducer;
