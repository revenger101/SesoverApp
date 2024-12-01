import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Link, InputAdornment, IconButton
  , Snackbar, Alert, } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from "../../Auth/AuthContext";  
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth(); // Assuming you have login context
  const navigate = useNavigate();
  const [toast, setToast] = useState({ open: false, message: '', severity: 'error' }); // Toast state


  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/auth/login', { email, password });

        if (response.status === 200) {
            const { email, name, accessToken } = response.data;


            const userData = { name, email, token: accessToken };

            localStorage.setItem('user', JSON.stringify(userData)); // Save to localStorage
            login(userData);            

             navigate("/showdown");
             window.location.reload();  
        }
    } catch (error) {
        console.error("Login failed:", error);

        setToast({
          open: true,
          message: 'Invalid email or password. Please try again.',
          severity: 'error',
        });
    }
};

const handleKeyDown = (e) => {
  // Check if the key pressed is Enter (key code 13)
  if (e.key === 'Enter') {
      handleLogin(e);
  }
};
  
  
  return (
    <Grid container sx={{ height: '100vh', backgroundColor: '#1a1a1a' }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: 'url(/Background_Login_Signup.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Grid>

      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: '#121212', color: 'white', padding: 4 }}
      >
        <Box sx={{ width: '80%', maxWidth: 400, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2, color: '#27a9a8' }}>Login</Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>Seek your Legend</Typography>

          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#27a9a8' },
                '&:hover fieldset': { borderColor: '#27a9a8' },
                '&.Mui-focused fieldset': { borderColor: '#27a9a8' },
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            InputProps={{
              style: { color: 'white' },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ color: 'white', 
                      '&:hover': {
                        color: '#27a9a8', 
                      }, }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#27a9a8' },
                '&:hover fieldset': { borderColor: '#27a9a8' },
                '&.Mui-focused fieldset': { borderColor: '#27a9a8' },
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: '#27a9a8',
              '&:hover': { backgroundColor: '#f82541' },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          sx={{
            backgroundColor: '#1c1c1c',
            color: '#fff',
            borderColor: '#27a9a8',
            boxShadow: '0px 0px 15px #27a9a8',
            fontWeight: 'bold',
          }}
        >
          {toast.message}
        </Alert>
      </Snackbar> 

          <Typography variant="body2">
            Don’t have an account?{' '}
            <Link href="./register" underline="none" sx={{ color: '#27a9a8' }}>
              Create One!
            </Link>
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            <Link href="#" underline="none" sx={{ color: '#27a9a8' }}>
              Forgot password?
            </Link>
          </Typography>

          <Box display="flex" alignItems="center" justifyContent="center" my={2}>
            <Box sx={{ flex: 1, height: "1px", backgroundColor: "#ccc", marginRight: "10px" }}></Box>
            <Typography variant="body1" sx={{ color: "#aaa", fontWeight: 500 }}>
              OR SIGN IN WITH
            </Typography>
            <Box sx={{ flex: 1, height: "1px", backgroundColor: "#ccc", marginLeft: "10px" }}></Box>
          </Box>

          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                width: "150px",
                height: "50px",
                fontSize: "16px",
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: "#27a9a8",
                  color: "#000",
                  borderColor: "#27a9a8",
                },
              }}
            >
              Google
            </Button>

            <Button
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{
                width: "150px",
                height: "50px",
                fontSize: "16px",
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: "#27a9a8",
                  color: "#000",
                  borderColor: "#27a9a8",
                },
              }}
            >
              Facebook
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
    
  );
};

export default LoginPage;
