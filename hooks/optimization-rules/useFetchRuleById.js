// File: useFetchRuleById.jsx
import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";

const useFetchRuleById = (ruleId) => {
  const { postApiCall } = useApi(); // Use postApiCall instead of getApiCall
  const [ruleDetails, setRuleDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRuleDetails = async () => {
      if (!ruleId) return;
      setLoading(true);
      try {
        const response = await postApiCall(`/rule-by-id`, { ruleId });
        if (response.status === 200) {
          setRuleDetails(response.data);
        } else {
          setError("Failed to fetch rule details");
        }
      } catch (err) {
        setError("Failed to fetch rule details");
      } finally {
        setLoading(false);
      }
    };

    fetchRuleDetails();
  }, [ruleId]);

  return { ruleDetails, loading, error };
};

export default useFetchRuleById;
