import React, { useState , useEffect  } from "react";
import { Menu, MenuItem, IconButton, Typography, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Account = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Extract user details, defaulting to Guest and N/A if not provided
  const { name, email } = user || { name: "Guest", email: "N/A" };

  const isMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    console.log("User:", user);
  }, [user]);

  return (
    <Box>
      {/* Account Icon Button */}
      <IconButton
        onClick={handleOpen}
        sx={{
          color: "white",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <AccountCircleIcon />
      </IconButton>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "#121212",
            color: "white",
            minWidth: 200,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            borderRadius: 2,
            mt: 1,
            overflow: "hidden",
          },
        }}
        MenuListProps={{
          sx: {
            padding: 0,
          },
        }}
      >
        {/* User Information Section */}
        <Box
          sx={{
            padding: "10px 15px",
            backgroundColor: "#1c1c1c",
            borderBottom: "1px solid #333",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="body2" color="gray">
            {email}
          </Typography>
        </Box>

        {/* Dropdown Menu Items */}
        <MenuItem
          onClick={handleClose}
          sx={{
            padding: "10px 15px",
            "&:hover": { backgroundColor: "#333", color: "#f82541" },
          }}
        >
          Game Download
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            padding: "10px 15px",
            "&:hover": { backgroundColor: "#333", color: "#f82541" },
          }}
        >
          Settings
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            padding: "10px 15px",
            "&:hover": { backgroundColor: "#333", color: "#f82541" },
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Account;
