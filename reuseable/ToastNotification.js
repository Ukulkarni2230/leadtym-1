import { toast } from "react-hot-toast";

const truncateMessage = (message, maxLength) => {
  if (message.length <= maxLength) return message;
  return message.substring(0, maxLength) + "...";
};

const dismissAllAndShow = (message, type) => {
  const maxLength = 340; // Maximum length of the message before truncation
  const truncatedMessage = truncateMessage(message, maxLength);

  toast.dismiss(); // Dismiss all existing toasts
  toast[type](truncatedMessage, {
    style: {
      borderRadius: "9999px",
      background: "#f3f3f3",
      color: "black",
      fontWeight: "bold",
      boxShadow: "0 4px 6px 0 #5E17EB26",
    },
  });
};

export const Message = {
  success: (message) => dismissAllAndShow(message, "success"),
  error: (message) => dismissAllAndShow(message, "error"),
  info: (message) => dismissAllAndShow(message, "info"),

};
