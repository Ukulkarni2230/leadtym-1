import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const FundsCalculationPopup = ({ open, handleClose }) => {
  return (
    <Dialog
      PaperProps={{
        style: {
          borderRadius: "8px",
        },
      }}
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle className="text-lg font-semibold">
        How your available funds are calculate
      </DialogTitle>
      <DialogContent>
        <div className="text-base mb-4">
          <div className="flex justify-between mb-2">
            <span>Funds from September</span>
            <span>₹19,352.97</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Payments</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Net cost</span>
            <span>₹10.51</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Funds from October</span>
            <span>₹19,363.48</span>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-1">Funds from September</h2>
          <p className="text-sm">
            Your remaining balance from last month, carried forward to this
            month.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-1">Payments</h2>
          <p className="text-sm">
            The total of any payments you've made in the current month.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-1">Net cost</h2>
          <p className="text-sm">
            Your net cost for a given month is the total of the following: Your
            campaign spend plus any taxes/fees, minus adjustments and
            promotional credits.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-1">Available funds</h2>
          <p className="text-sm">
            This is the amount of available funds you have to spend on running
            your ads.
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className="text-blue-600">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FundsCalculationPopup;
