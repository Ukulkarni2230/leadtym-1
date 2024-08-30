// src/hooks/user-status/useUserStatus.js
"use client";
import { useEffect } from "react";
import { database, ref, set, onDisconnect } from "@/lib/firebase";
import { useUser } from "../user-service/useUser";

const useUserStatus = () => {
  const { userDetails } = useUser();

  useEffect(() => {
    if (!userDetails || !userDetails.userId) {
      console.error("User is not authenticated or userDetails is missing", userDetails);
      return;
    }

    const userStatusRef = ref(database, `status/${userDetails.userId}`);
    console.log("Setting user status for user:", userDetails.userId);

    const setOnline = async () => {
      try {
        await set(userStatusRef, {
          state: "online",
          lastChanged: Date.now(),
        });
        onDisconnect(userStatusRef).set({
          state: "offline",
          lastChanged: Date.now(),
        });
        console.log("User status set to online");
      } catch (error) {
        console.error("Failed to set user status:", error);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        set(userStatusRef, {
          state: "offline",
          lastChanged: Date.now(),
        });
      } else {
        setOnline();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    setOnline();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [userDetails]);
};

export default useUserStatus;
