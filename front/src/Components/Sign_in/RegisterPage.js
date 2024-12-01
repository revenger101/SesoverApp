import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Link,InputAdornment ,IconButton, Snackbar, Alert , LinearProgress} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'; 
import zxcvbn from 'zxcvbn'; 
import { useNavigate } from "react-router-dom";



const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [toast, setToast] = useState({ open: false, severity: '', message: '' });
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
      setShowPassword(prevState => !prevState);
  };

  const handleClickShowRePassword = () => {
      setShowRePassword(prevState => !prevState);
  };

  const handleMouseDownPassword = event => {
      event.preventDefault();
  };

  const validatePasswordStrength = (password) => {
    const result = zxcvbn(password);  // Using zxcvbn to check password strength
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate all fields
    if (!userName || !lastName || !phone || !email || !password || !rePassword) {
      setError('All fields are required.');
      return;
    }
  
    // Check if passwords match
    if (password !== rePassword) {
      setError('Passwords do not match.');
      return;
    }
  
    // Check password strength
    const passwordStrength = validatePasswordStrength(password);
    if (passwordStrength.score < 2) {
      setError('Your password is too weak. Please use a stronger password.');
      return;
    }
  
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        nomMember: userName,
        prenomMember: lastName,
        emailMember: email,
        telephoneMember: phone,
        passwordMember: password,
        c_PasswordMember: rePassword,
      });
  
      setToast({ open: true, severity: 'success', message: 'User registered successfully!' });
      console.log('User registered successfully', response.data);
      navigate("/login");
  
      // Clear fields after successful registration
      setUserName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setPassword('');
      setRePassword('');
    } catch (err) {
      if (err.response && err.response.status === 409) {
        // Email already exists
        setToast({ open: true, severity: 'error', message: 'Email already exists. Please try a different email.' });
      } else {
        // Other registration errors
        setToast({ open: true, severity: 'error', message: 'Registration failed. Please try again.' });
      }
      console.error('Error registering user:', err);
    }
  };
  

  const passwordStrength = validatePasswordStrength(password);

  return (
    <Grid container sx={{ height: '100vh', backgroundColor: '#1a1a1a' }}>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: 'url(/red-bull-campus-clutch-valorant-agents.avif)',
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
        <Box
          sx={{
            width: '80%',
            maxWidth: 400,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, color: '#f82541' }}>
            Register
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            Rise your Legend
          </Typography>

          <TextField
  fullWidth
  label="Name"
  placeholder="Enter your Name"
  variant="outlined"
  margin="normal"
  value={userName}
  onChange={(e) => setUserName(e.target.value)}
  InputProps={{
    style: { color: 'white' },
  }}
  InputLabelProps={{
    style: { color: 'white' },
  }}
  inputProps={{
    style: { color: 'white' },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#f82541' },
      '&:hover fieldset': { borderColor: '#f82541' },
      '&.Mui-focused fieldset': { borderColor: '#f82541' },
    },
  }}
/>

          <TextField
            fullWidth
            label="Last Name"
            placeholder="Enter your Last Name"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' }, 
            }}
            inputProps={{
              style: { color: 'white' }, 
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#f82541' },
                '&:hover fieldset': { borderColor: '#f82541' },
                '&.Mui-focused fieldset': { borderColor: '#f82541' },
              },
            }}
          />
          <TextField
            fullWidth
            label="Phone"
            placeholder="Enter your Phone"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' }, 
            }}
            inputProps={{
              style: { color: 'white' }, 
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#f82541' },
                '&:hover fieldset': { borderColor: '#f82541' },
                '&.Mui-focused fieldset': { borderColor: '#f82541' },
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' }, 
            }}
            inputProps={{
              style: { color: 'white' }, 
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#f82541' },
                '&:hover fieldset': { borderColor: '#f82541' },
                '&.Mui-focused fieldset': { borderColor: '#f82541' },
              },
            }}
          />
          <TextField
        fullWidth
        label="Password"
        placeholder="Enter your password"
        variant="outlined"
        margin="normal"
        type={showPassword ? 'text' : 'password'} // Toggle between text and password type
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          style: { color: 'white' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword} // Toggle visibility for password field
                onMouseDown={handleMouseDownPassword} // Prevent focus loss
                edge="end"
                sx={{
                  color: 'white', // Set the icon color to white
                  '&:hover': {
                    color: '#f82541', // Change color on hover (optional)
                  },
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />} {/* Toggle between visibility icons */}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        inputProps={{
          style: { color: 'white' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#f82541' },
            '&:hover fieldset': { borderColor: '#f82541' },
            '&.Mui-focused fieldset': { borderColor: '#f82541' },
          },
        }}
      />
      <Box sx={{ width: '100%', mt: 2 }}>
            <LinearProgress
              variant="determinate"
              value={passwordStrength.score * 25} 
              color={passwordStrength.score < 2 ? 'error' : 'success'}
            />
            <Typography
              variant="body2"
              sx={{
                color: passwordStrength.score < 2 ? 'red' : 'green',
                mt: 1,
              }}
            >
              
            </Typography>
          </Box>

      <TextField
        fullWidth
        label="Re_Password"
        placeholder="Enter your password again"
        variant="outlined"
        margin="normal"
        type={showRePassword ? 'text' : 'password'} // Toggle between text and password type
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
        InputProps={{
          style: { color: 'white' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowRePassword} // Toggle visibility for re-password field
                onMouseDown={handleMouseDownPassword} // Prevent focus loss
                edge="end"
                sx={{
                  color: 'white', // Set the icon color to white
                  '&:hover': {
                    color: '#f82541', // Change color on hover (optional)
                  },
                }}
              >
                {showRePassword ? <VisibilityOff /> : <Visibility />} {/* Toggle between visibility icons */}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        inputProps={{
          style: { color: 'white' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#f82541' },
            '&:hover fieldset': { borderColor: '#f82541' },
            '&.Mui-focused fieldset': { borderColor: '#f82541' },
          },
        }}
      />
          
          {error && (
            <Typography variant="body2" sx={{ color: 'red', mb: 2 }}>
              {error}
            </Typography>
          )}
          
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: '#f82541',
              '&:hover': { backgroundColor: '#ff5757' },
            }}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Snackbar
  open={toast.open}
  autoHideDuration={4000}
  onClose={() => setToast({ ...toast, open: false })}
  anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position at the top center
  sx={{
    "& .MuiSnackbarContent-root": {
      backgroundColor: "#1c1c1c", // Dark background for gaming theme
      color: "#fff", // Light text for contrast
      border: "2px solid #f82541", // Red neon border
      boxShadow: "0px 0px 20px #f82541", // Vibrant red glow
      borderRadius: "10px", // Smooth corners
    },
  }}
>
  <Alert
    severity={toast.severity}
    sx={{
      width: "100%",
      backgroundColor: "#1c1c1c", // Matches Snackbar background
      color: "#fff", // Text color
      border: "1px solid #f82541", // Slightly softer border for Alert
      fontWeight: "bold", // Bold text for emphasis
      textTransform: "uppercase", // Gaming vibe
      boxShadow: "0px 0px 15px #f82541", // Slight glow around Alert
      "& .MuiAlert-icon": {
        color: "#f82541", // Red icon for severity indication
      },
    }}
  >
    {toast.message}
  </Alert>
</Snackbar>


          <Typography variant="body2">
            Don’t have an account?{' '}
            <Link href="/Login" underline="none" sx={{ color: '#f82541' }}>
              Login!
            </Link>
          </Typography>

          <Box 
  display="flex" 
  alignItems="center" 
  justifyContent="center" 
  my={2} 
>

  <Box 
    sx={{
      flex: 1, 
      height: "1px", 
      backgroundColor: "#ccc", 
      marginRight: "10px" 
    }}
  ></Box>

  
  <Typography 
    variant="body1" 
    sx={{
      color: "#aaa", 
      fontWeight: 500
    }}
  >
    OR SIGN IN WITH
  </Typography>

  <Box 
    sx={{
      flex: 1, 
      height: "1px", 
      backgroundColor: "#ccc", 
      marginLeft: "10px" 
    }}
  ></Box>
</Box>


<Box 
  display="flex" 
  justifyContent="center" 
  gap={2} 
  mt={2} 
>
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
        backgroundColor: "#f82541", 
        color: "#000",             
        borderColor: "#f82541",    
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
        backgroundColor: "#f82541", 
        color: "#000",             
        borderColor: "#f82541",    
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

export default RegisterPage;
