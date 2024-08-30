"use client";
import React, { useState } from "react";
import PostOverviewPopup from "./overview-popup/PostOverviewPopup";
import ApprovalToolbar from "./approval-toolbar/ApprovalToolbar";
import ApprovalLayout from "./approval-board-layout";

const ApprovalBoard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [columns, setColumns] = useState([
    { id: "pendingApproval", label: "Pending for Approval", visible: true },
    { id: "rework", label: "Rework", visible: true },
    { id: "scheduled", label: "Scheduled", visible: true },
    { id: "posted", label: "Posted", visible: true },
    { id: "completed", label: "Completed", visible: true },
  ]);
  const [filter, setFilter] = useState("");
  const [selectedCount, setSelectedCount] = useState(0);

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

  const handleFilterIconClick = (field) => {
    setFilter(field);
  };

  return (
    <div>
      <div className="px-2 sm:px-6 pt-2 sm:pt-6">
        <ApprovalToolbar
          columns={columns}
          setColumns={setColumns}
          filter={filter}
          setFilter={setFilter}
          handleFilterIconClick={handleFilterIconClick}
          selectedCount={selectedCount}
          datepicker={false}
          btnName="Add Item"
          onAddItem={() => console.log("Add Item clicked")}
        >
          {/* Add any additional children here */}
        </ApprovalToolbar>
        <button onClick={toggleDrawer(true)}>Open Drawer</button>
      </div>
      <PostOverviewPopup
        isOpen={isDrawerOpen}
        onClose={toggleDrawer(false)}
        post={post}
      />
      <ApprovalLayout setSelectedCount={setSelectedCount} />
    </div>
  );
};

export default ApprovalBoard;
