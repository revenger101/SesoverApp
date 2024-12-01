import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212122",
        color: "white",
        padding: "20px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "#FFFFFF",
          opacity: 0.2,
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Social Media Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            href="https://www.facebook.com/profile.php?id=61566807837027"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              "&:hover": { color: "#f82541" },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://discord.gg/64YP2c6S"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              "&:hover": { color: "#f82541" },
            }}
          >
            <FaDiscord size={24} />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/sesover.sesame?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              "&:hover": { color: "#f82541" },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>

        {/* Learn More and Contact Us Section */}
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
              Learn More
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              About
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Terms of Service
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Gaming Club
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Club Sesame
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "right" }}>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            Powered by
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "10px" }}>
            <img
              src="/SESOVER.png" 
              alt="SESOVER Logo"
              style={{ height: "40px", marginRight: "8px" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              Ses'over
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "gray" }}>
            © 2024 Copyright Ses'over. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
