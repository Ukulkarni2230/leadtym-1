"use client";
import React, { useState } from "react";
import InfluencerApprovalBoard from "./InfluencerApprovalBoard";
import NewPost from "./overview-popups/new-post";

const ApprovalBoard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };
  const post = {
    profilePicture: "https://via.placeholder.com/150",
    name: "Yelena G.",
    role: "Female / Photographer",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    dealName: "Summer Vibes Collection",
    productCategory: "Fashion and Apparel",
    budgetType: "Flexible",
    budgetAmount: "₹3,000 - ₹10,000",
  };
  return (
    <div>
      <button onClick={toggleDrawer(true)}>Open Drawer</button>
      <NewPost
        isOpen={isDrawerOpen}
        onClose={toggleDrawer(false)}
        post={post}
      />
      <InfluencerApprovalBoard />
    </div>
  );
};

export default ApprovalBoard;
