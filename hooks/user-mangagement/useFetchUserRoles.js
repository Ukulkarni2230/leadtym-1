import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "../user-service/useUser";

const useFetchUserRoles = () => {
  const { postApiCall } = useApi();
  const { userDetails } = useUser();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState({});
  const [totalRoles, setTotalRoles] = useState(0);
  const [latestPayload, setLatestPayload] = useState(null);

  const fetchRoles = async (
    page = 1,
    limit = 100,
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
        startDate,
        endDate,
      };
      if (filters) {
        payload.filters = filters;
      }

      if (sortField) payload.sortField = sortField;
      if (sortOrder) payload.sortOrder = sortOrder;
      setLatestPayload(payload);

      const response = await postApiCall("user-role/getByUserId", payload);

      if (response.status === 200 || response.status === 201) {
        const formattedRoles = response.data.data.map((role, index) => ({
          id: role._id,
          srNo: `#${String((page - 1) * limit + index + 1).padStart(2, "0")}`,
          role_name: role.role_name,
          createdAt: new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }).format(new Date(role.createdAt)),
          status: role.status,
        }));
        setRoles(formattedRoles);
        setTotalRoles(response.data.totalRoles);
      } else if (response.status === 204) {
        setRoles([]);
        setTotalRoles(0);
      } else {
        setRoles([]);
        setTotalRoles(0);
      }
    } catch (error) {
      setError(error);
      setRoles([]);
      Message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles(1, 100);
  }, []);

  const handleToggleStatus = async (id, currentStatus) => {
    setLoadingStatus((prev) => ({ ...prev, [id]: true }));
    try {
      const response = await postApiCall("toggle-role-status", {
        roleId: id,
        status: !currentStatus,
      });
      Message.success(response.message);
      fetchRoles();
    } catch (error) {
      Message.error(error.message);
    } finally {
      setLoadingStatus((prev) => ({ ...prev, [id]: false }));
    }
  };

  return {
    roles,
    loading,
    error,
    fetchRoles,
    handleToggleStatus,
    latestPayload,
    loadingStatus,
    totalRoles,
  };
};

export default useFetchUserRoles;
