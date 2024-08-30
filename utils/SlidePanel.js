import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { IoClose } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const SlidePanel = ({ open, onClose, children, dailog, name }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirmAndClose = () => {
    setConfirmOpen(false);
    onClose();
  };

  const handleDrawerClose = () => {
    handleConfirmOpen();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={dailog ? handleDrawerClose : handleConfirmAndClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          width: "100%",
          maxWidth: "100%",
          "@media (min-width: 768px)": {
            maxWidth: "75%",
          },
        },
      }}
    >
      {dailog && (
        <Dialog
          open={confirmOpen}
          onClose={handleConfirmClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirm Close"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dailog}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirmClose}>Cancel</Button>
            <Button onClick={handleConfirmAndClose}>Save as Draft</Button>
            <Button onClick={handleConfirmAndClose} autoFocus>
              Don't Save
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <div className="flex flex-col h-full">
        <div className="bg-white px-4 py-3 border-b border-gray-200 flex justify-start  items-center">
          <div
            onClick={dailog ? handleConfirmOpen : handleConfirmAndClose}
            className="gradient-bg text-white p-1 rounded-full cursor-pointer"
            style={{
            
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IoClose className="text-white text-[20px] sm:text-[25px]" />
          </div>
          <h2 className="ml-5  text-[#21272A] text-center text-[14px] sm:text-[16px] 2xl:text-[18px] font-semibold">
            {name}
          </h2>
        </div>
        <div className="overflow-auto p-4">{children}</div>
      </div>
    </Drawer>
  );
};

export default SlidePanel;
