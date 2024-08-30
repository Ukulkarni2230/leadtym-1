import { format, formatDistanceToNow } from "date-fns";

const formatMessageTime = (createdAt) => {
  const createdAtDate = new Date(createdAt);

  // Fallback if the createdAt date is invalid
  if (isNaN(createdAtDate.getTime())) {
    return "Invalid date";
  }

  const now = new Date();

  let timeAgo;
  if (now - createdAtDate < 24 * 60 * 60 * 1000) {
    // Less than 24 hours ago
    timeAgo = `${formatDistanceToNow(createdAtDate, { addSuffix: true })}`;
  } else {
    // More than 24 hours ago
    timeAgo = format(createdAtDate, "dd MMM yyyy");
  }

  const formattedDate = format(createdAtDate, "dd MMM yyyy");

  return `${timeAgo} • ${formattedDate}`;
};

export default formatMessageTime;
