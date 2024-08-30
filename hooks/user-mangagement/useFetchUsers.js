// File: useFetchUsers.jsx
import { useState, useEffect } from "react";
import useApi from "@/src/Apicalls/apiCalls";
import { Message } from "@/src/components/reuseable/ToastNotification";
import { useUser } from "../user-service/useUser";

const useFetchUsers = () => {
  const { postApiCall } = useApi();
  const { userDetails } = useUser();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState({});
  const [totalUsers, setTotalUsers] = useState(0);
  const [latestPayload, setLatestPayload] = useState(null);

  const fetchUsers = async (
    page = 1,
    limit = 100,
    filters = {},
    searchField = "",
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
        startDate,
        endDate,
      };

      if (filters) {
        if (filters.firstName) {
          const firstNameValue = filters.firstName;
          delete filters.firstName;
          filters["userInfo.firstName"] = firstNameValue;
        }
        payload.filters = filters;
      }

      if (sortField) payload.sortField = sortField;
      if (sortOrder) payload.sortOrder = sortOrder;

      setLatestPayload(payload);

      const response = await postApiCall("users", payload);

      if (response.status === 200 || response.status === 201) {
        const formattedUsers = response.data.data.map((user) => ({
          id: user._id,
          email: user.email,
          firstName: `${user.userInfo.firstName} ${user.userInfo.lastName}`,
          role_name: user.role_name,
          roleId: user.role_id,
          createdAt: new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }).format(new Date(user.createdAt)),
          status: user.status,
        }));
        setUsers(formattedUsers);
        setTotalUsers(response.data.totalUsers);
      } else if (response.status === 204) {
        setUsers([]);
        setTotalUsers(0);
      } else {
        setUsers([]);
        setTotalUsers(0);
      }
    } catch (error) {
      setError(error);
      setUsers([]);
      Message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    setLoadingStatus((prev) => ({ ...prev, [id]: true }));
    try {
      const response = await postApiCall("user-activate-deactivate", {
        userId: id,
        status: !currentStatus,
      });
      Message.success(response.message);
      fetchUsers();
    } catch (error) {
      Message.error(error.message);
    } finally {
      setLoadingStatus((prev) => ({ ...prev, [id]: false }));
    }
  };

  return {
    users,
    loading,
    error,
    fetchUsers,
    handleToggleStatus,
    latestPayload,
    loadingStatus,
    totalUsers,
  };
};

export default useFetchUsers;
