import React, { useState } from "react";
import {
  Button,
  Popover,
  Typography,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { IoShareOutline } from "react-icons/io5";
import {
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaGlobe,
} from "react-icons/fa";

const SharePopover = ({ blogId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [link, setLink] = useState(`http://13.200.163.238:3000/blog/${blogId}`);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "share-popover" : undefined;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      link
    )}&text=Check%20this%20out!`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      link
    )}`,
    youtube: `https://www.youtube.com/`,
    discord: `https://discord.com/channels/@me`,
    global: link,
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="hover:underline border border-transparent text-black dark:text-white px-6 py-3 sm:px-8 h-[46px] font-bold flex gap-1.5 items-center justify-center whitespace-nowrap rounded-full text-sm sm:text-base 2xl:text-lg"
      >
        <IoShareOutline className="-mt-[3px]" />
        Share
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box p={2} width="300px">
          <Typography variant="h6" gutterBottom>
            Share This Link
          </Typography>
          <Typography variant="body2" gutterBottom>
            Click on the social media platform to share your link or copy it.
          </Typography>
          <Box display="flex" flexDirection="column" gap={1} my={2}>
            {[
              {
                icon: <FaTwitter />,
                label: "Twitter",
                link: shareLinks.twitter,
              },
              {
                icon: <FaWhatsapp />,
                label: "Whatsapp",
                link: shareLinks.whatsapp,
              },
              {
                icon: <FaTelegram />,
                label: "Telegram",
                link: shareLinks.telegram,
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                link: shareLinks.linkedin,
              },
              {
                icon: <FaYoutube />,
                label: "YouTube",
                link: shareLinks.youtube,
              },
              {
                icon: <FaDiscord />,
                label: "Discord",
                link: shareLinks.discord,
              },
              { icon: <FaGlobe />, label: "Global", link: shareLinks.global },
            ].map((item, index) => (
              <Button
                key={index}
                startIcon={item.icon}
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => window.open(item.link, "_blank")}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <TextField
            fullWidth
            value={link}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => navigator.clipboard.writeText(link)}>
                  <IoShareOutline />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Popover>
    </div>
  );
};

export default SharePopover;
