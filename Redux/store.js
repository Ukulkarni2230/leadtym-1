import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import themeReducer from "./theme/themeReducer";
import userReducer from "./user/userReducer";
import tableConfigReducer from "./table/tableConfigSlice";
import onboardingReducer from "./onboarding/onboardingSlice";
import titleReducer from "./title-management/titleSlice";
import campaignCreateFormReducer from "./reducers/campaignCreateFormReducer";
import lastDepositReducer from "./wallet/last-deposit/LastDepositSlice"; // Corrected import path
import expensesReducer from "./wallet/expensesSlice";
import earningsReducer from "./wallet/earningsSlice";
import walletReducer from "./wallet/walletSlice";

const encryptor = encryptTransform({
  secretKey: "my-super-secret-key",
  onError: function (error) {
    // Handle the encryption error
    console.log(error);
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "theme",
    "user",
    "tableConfig",
    "onboarding",
    "lastDeposit",
    "earnings",
    "expenses",
    "wallet",
  ],
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  tableConfig: tableConfigReducer,
  onboarding: onboardingReducer,
  title: titleReducer,
  campaignCreateForm: campaignCreateFormReducer,
  lastDeposit: lastDepositReducer,
  expenses: expensesReducer,
  earnings: earningsReducer,
  wallet: walletReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
