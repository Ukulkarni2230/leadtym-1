import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function ProgressBar(props) {
  const { value, fillColor = "#3EAF3F", height = 11 } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height,
            borderRadius: 5,
            backgroundColor: "#F2F4F8",
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
              backgroundColor: fillColor,
            },
            [`& .${linearProgressClasses.dashed}`]: {
              display: "none",
            },
            [`& .${linearProgressClasses.track}`]: {
              backgroundColor: "#F3F3F3",
              opacity: 1,
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <p className="text-[12px] sm:text-[14px] 2xl:text-[16px] text-[#21272A] roboto ml-1 mb-[2px]">{`${Math.round(
          value
        )}%`}</p>
      </Box>
    </Box>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  fillColor: PropTypes.string,
  height: PropTypes.number,
};

export default ProgressBar;
