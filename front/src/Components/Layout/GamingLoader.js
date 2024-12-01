import React from "react";
import { Box, Typography } from "@mui/material";

const GamingLoader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a1a",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Pulsating Circle */}
      <Box
        sx={{
          width: "150px",
          height: "150px",
          border: "10px solid rgba(248, 37, 65, 0.6)",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          position: "absolute",
        }}
      ></Box>

      {/* Rotating Element */}
      <Box
        sx={{
          width: "150px",
          height: "150px",
          border: "5px solid transparent",
          borderTop: "5px solid #f82541",
          borderRadius: "50%",
          animation: "rotate 2s linear infinite",
          position: "absolute",
        }}
      ></Box>

      {/* Glowing Text */}
      <Typography
        variant="h4"
        sx={{
          color: "#f82541",
          fontWeight: "bold",
          textShadow:
            "0px 0px 10px rgba(248, 37, 65, 1), 0px 0px 20px rgba(248, 37, 65, 0.7)",
          zIndex: 1,
        }}
      >
        Loading...
      </Typography>

      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.7;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default GamingLoader;
