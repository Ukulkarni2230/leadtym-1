// src/contexts/Providers.js
"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/src/Redux/store";
import { AuthProvider } from "./AuthContext";
import GlobalLoader from "../components/Loaders/GlobalLoader";

function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<GlobalLoader />} persistor={persistor}>
        <AuthProvider>{children}</AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default Providers;
