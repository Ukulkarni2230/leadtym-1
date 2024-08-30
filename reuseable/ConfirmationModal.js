import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  Box,
  Typography,
  Button,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const ModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  backgroundColor: "#fff",
  boxShadow: 24,
  padding: "24px",
  outline: "none",
  borderRadius: "12px",
});

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
});

const Actions = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "24px",
  gap: "8px",
});

const ConfirmationModal = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
  loading,
  icon,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalBox>
        <Header>
          <Box className="flex items-center gap-2">
            {icon}
            <Typography sx={{ fontWeight: 600 }} variant="h6" component="div">
              {title}
            </Typography>
          </Box>
          <IconButton onClick={onClose} disabled={loading}>
            <CloseIcon />
          </IconButton>
        </Header>
        <Typography sx={{ fontWeight: 500 }} variant="body1" className="mb-6">
          {message}
        </Typography>
        <Actions>
          <Button
            variant="contained"
            onClick={onClose}
            disabled={loading}
            style={{
              backgroundColor: "#E0E0E0",
              color: "#000",
              borderRadius: "25px",
              padding: "6px 20px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onConfirm}
            disabled={loading}
            style={{
              backgroundColor: "#735CFF",
              color: "#fff",
              borderRadius: "25px",
              padding: "6px 20px",
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Confirm"
            )}
          </Button>
        </Actions>
      </ModalBox>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.element,
};

export default ConfirmationModal;
