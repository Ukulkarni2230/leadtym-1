// File: useFetchRules.jsx
import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "../user-service/useUser";

const useFetchRules = () => {
  const { postApiCall } = useApi();
  const { userDetails } = useUser();
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState({});
  const [totalRules, setTotalRules] = useState(0);
  const [latestPayload, setLatestPayload] = useState(null);

  const fetchRules = async (
    page = 1,
    limit = 100,
    filters = {},
    searchTerm = "",
    sortField = "",
    sortOrder = "",
    startDate = "",
    endDate = ""
  ) => {
    try {
      setLoading(true);
      const payload = {
        user_id: userDetails.userId,
        page,
        limit,
        searchTerm,
        startDate,
        endDate,
      };

      if (filters) {
        payload.filters = filters;
      }

      if (sortField) payload.sortField = sortField;
      if (sortOrder) payload.sortOrder = sortOrder;

      setLatestPayload(payload);

      const response = await postApiCall("rules-list", payload);
      console.log(response, "api response");
      if (response.status === 200 || response.status === 201) {
        setRules(response.data.data); // Access the correct path here
        setTotalRules(response.data.totalRules);
      } else if (response.status === 204) {
        setRules([]);
        setTotalRules(0);
      } else {
        setRules([]);
        setTotalRules(0);
      }
    } catch (error) {
      setError(error);
      setRules([]);
      Message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    setLoadingStatus((prev) => ({ ...prev, [id]: true }));
    try {
      const response = await postApiCall("toggle-rule", {
        ruleId: id,
        isActive: !currentStatus,
      });
      Message.success(response.message);
      fetchRules();
    } catch (error) {
      Message.error(error.message);
    } finally {
      setLoadingStatus((prev) => ({ ...prev, [id]: false }));
    }
  };

  return {
    rules,
    loading,
    error,
    fetchRules,
    handleToggleStatus,
    latestPayload,
    loadingStatus,
    totalRules,
  };
};

export default useFetchRules;
