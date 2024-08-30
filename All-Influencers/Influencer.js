"use client";
import React from "react";
import FilterSidebar from "./FilterSidebar";
import InfluencerCards from "./InfluencerCards";
import { Button, Menu, MenuItem, IconButton, Drawer } from "@mui/material";
import { LuSettings2 } from "react-icons/lu";
import { ExpandMore } from "@mui/icons-material";

const Influencer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div className="flex p-2 sm:p-6">
      <div className="hidden sm:block md:w-1/3   lg:w-1/3   custome-width-filterBar xl:w-[23%] 2xl:w-[340px] ">
        <FilterSidebar />
      </div>
      <div className="flex-1 sm:ml-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[18px] sm:text-[20px] 2xl:text-[22px] font-bold text-[#303030]">
            Influencer
          </h1>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleClick}
              endIcon={<ExpandMore />}
              variant="text"
              sx={{ textTransform: "none", color: "#4A4A4A" }}
            >
              Sort By: All
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Price</MenuItem>
              <MenuItem onClick={handleClose}>Followers</MenuItem>
              <MenuItem onClick={handleClose}>Likes</MenuItem>
              <MenuItem onClick={handleClose}>Story</MenuItem>
            </Menu>
            <div className="sm:hidden">
              <IconButton onClick={toggleDrawer(true)}>
                <LuSettings2 className="text-[#666666]" size={20} />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                className="block sm:hidden"
              >
                <div className="w-64 p-4">
                  <FilterSidebar />
                </div>
              </Drawer>
            </div>
          </div>
        </div>
        <div className="pt-[0.4px]">
          <InfluencerCards />
        </div>
      </div>
    </div>
  );
};

export default Influencer;
