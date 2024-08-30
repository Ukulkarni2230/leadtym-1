import React from "react";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const SkeletonLoader = () => {
  return (
    <Box className="p-4 w-full rounded-md shadow-md border border-gray-200">
      <Skeleton variant="rectangular" width="100%" height={150} className="mb-4" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="40%" className="mb-4" />
      <Skeleton variant="text" width="30%" className="mb-2" />
      <Skeleton variant="rectangular" width="100%" height={20} className="mb-2" />
      <Skeleton variant="text" width="100%" className="mb-4" />
      <Skeleton variant="rectangular" width="100%" height={30} />
    </Box>
  );
};

export default SkeletonLoader;
