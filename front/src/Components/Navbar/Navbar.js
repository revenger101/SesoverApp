import React, { useState, useEffect } from "react";
import { AppBar, Box, Button, Toolbar, Menu, MenuItem, Typography, IconButton , Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const {  logout } = useAuth();
  const [user, setUser] = useState({ name: "Guest", email: "N/A" }); // Default user state
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);



  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser) {
      setUser(storedUser); 
      setIsLoggedIn(true); 
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  



  const handleLogoutClick = () => {
    setOpenDialog(true); // Open the dialog when the logout button is clicked
  };

  // Close the dialog without logging out
  const handleDialogClose = () => {
    setOpenDialog(false); // Close the dialog
  };

  // Proceed with logout
  const handleLogoutConfirm = () => {
    logout(); 
    localStorage.removeItem('user'); 
    setUser({ name: "Guest", email: "N/A" });
    setOpenDialog(false); 
    
    navigate("/login");
    window.location.reload();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        color: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 3 }}></Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            backgroundColor: "#333333",
            borderRadius: "20px",
            padding: "5px 15px",
          }}
        >
          
                <Button
                    href="/Showdown"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": { color: "#f82541" },
                      display: isLoggedIn ? "block" : "none", 
                    }}
                  >
                    Showdown
                  </Button>

          {!isLoggedIn ? (
            <>
              <Button
                href="/login"
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#f82541" },
                }}
              >
                Login
              </Button>
              <Button
                href="/register"
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#f82541" },
                }}
              >
                Register
              </Button>
            </>
          ) : (
            <>
              <IconButton
                onClick={handleOpen}
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                <AccountCircleIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
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
                <Box
                  sx={{
                    padding: "10px 15px",
                    backgroundColor: "#1c1c1c",
                    borderBottom: "1px solid #333",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {user.email}
                  </Typography>
                </Box>


                <MenuItem
                  onClick={handleLogoutClick}
                  sx={{
                    padding: "10px 15px",
                    "&:hover": { backgroundColor: "#333", color: "#f82541" },
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>

      <Dialog
  open={openDialog}
  onClose={handleDialogClose}
  PaperProps={{
    style: {
      backgroundColor: "#1c1c1c", // Dark background
      color: "#fff", // Light text color
      border: "2px solid #f82541", // Vibrant red border
      boxShadow: "0px 0px 20px #f82541", // Neon-like glow
      borderRadius: "15px", // Smooth corners
      padding: "20px",
    },
  }}
>
  <DialogTitle
    style={{
      textAlign: "center",
      color: "#f82541", // Vibrant red color
      fontWeight: "bold",
      fontSize: "1.5rem",
      textTransform: "uppercase", // Modern esports style
      letterSpacing: "2px",
    }}
  >
    Confirm Logout
  </DialogTitle>

  <DialogContent>
    <Typography
      variant="body2"
      style={{
        textAlign: "center",
        color: "#cccccc", // Muted light gray for contrast
        fontSize: "1rem",
        marginBottom: "20px",
      }}
    >
      You will be logged out of your account and redirected to the login page.
    </Typography>
  </DialogContent>

  <DialogActions style={{ justifyContent: "center", gap: "20px" }}>
    <Button
      onClick={handleDialogClose}
      variant="outlined"
      style={{
        color: "#f82541",
        borderColor: "#f82541",
        padding: "10px 20px",
        textTransform: "uppercase",
        fontWeight: "bold",
        transition: "0.3s ease",
      }}
    >
      Stay
    </Button>

    <Button
      onClick={handleLogoutConfirm}
      variant="contained"
      style={{
        backgroundColor: "#f82541",
        color: "#ffffff",
        fontWeight: "bold",
        padding: "10px 20px",
        textTransform: "uppercase",
        transition: "0.3s ease",
        "&:hover": {
          backgroundColor: "#e32430", 
        },
      }}
    >
      Logout
    </Button>
  </DialogActions>
</Dialog>


    </AppBar>
  );
};

export default Navbar;
