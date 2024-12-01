import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Snackbar, Alert , CircularProgress} from '@mui/material';
import axios from 'axios';
import { ReactComponent as FifaIcon } from '../../../assets/Pictures/fifa-svgrepo-com.svg';
import { ReactComponent as LolIcon } from '../../../assets/Pictures/league-of-legends-seeklogo.svg';
import { ReactComponent as ValoIcon } from '../../../assets/Pictures/valorant-logo-play-2-svgrepo-com.svg';

const Showdown = () => {

  const [toast, setToast] = useState({ open: false, severity: '', message: '' });
  const [selectedGame, setSelectedGame] = useState('');
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [memberNames, setMemberNames] = useState(['']);
  const [loading, setLoading] = useState(false); // Loader state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end validation
    if (!teamName || !leaderName || !selectedGame) {
      setToast({
        open: true,
        severity: 'error',
        message: 'Please fill all required fields.',
      });
      return;
    }

    if (memberNames.some((name) => !name.trim())) {
      setToast({
        open: true,
        severity: 'error',
        message: 'Please provide names for all members.',
      });
      return;
    }

    try {
      setLoading(true); // Start loader
      const response = await axios.post(`http://localhost:8080/teams/register`, {
        name: teamName,           
        leader: leaderName,       
        members: memberNames,
        game: selectedGame,
      });

      setToast({
        open: true,
        severity: 'success',
        message: 'Team registered successfully!',
      });

      // Reset form fields
      setTeamName('');
      setLeaderName('');
      setMemberNames(selectedGame === 'FIFA' ? [''] : ['', '', '', '']);
      setSelectedGame('');
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || 'Registration failed. Please try again.';
      setToast({
        open: true,
        severity: 'error',
        message: errorMessage,
      });
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const handleSelectGame = (game) => {
    setSelectedGame(game);
    setMemberNames(game === 'FIFA' ? [''] : ['', '', '', '']); // Set default members
  };

  const handleMemberNameChange = (index, value) => {
    const updatedMembers = [...memberNames];
    updatedMembers[index] = value;
    setMemberNames(updatedMembers);
  };

  return (
    
    
    <Grid container sx={{ height: '100vh', backgroundColor: '#1a1a1a' }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: 'url(/showdown.jpg)',
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

          {/* Team Name */}
          <TextField
            fullWidth
            label="Team Name"
            placeholder="Enter your Team Name"
            variant="outlined"
            margin="normal"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
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

          {/* Leader Name */}
          <TextField
            fullWidth
            label="Leader Name"
            placeholder="Enter your Leader Name"
            variant="outlined"
            margin="normal"
            value={leaderName}
            onChange={(e) => setLeaderName(e.target.value)}
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
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

          {/* Dynamic Inputs based on selected game */}
          {selectedGame === 'LOL' || selectedGame === 'VALO' ? (
            <>
              <TextField
                fullWidth
                label="Member 1"
                placeholder="Enter Member 1 Name"
                variant="outlined"
                margin="normal"
                value={memberNames[0]}
                onChange={(e) => handleMemberNameChange(0, e.target.value)}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
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
                label="Member 2"
                placeholder="Enter Member 2 Name"
                variant="outlined"
                margin="normal"
                value={memberNames[1]}
                onChange={(e) => handleMemberNameChange(1, e.target.value)}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
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
                label="Member 3"
                placeholder="Enter Member 3 Name"
                variant="outlined"
                margin="normal"
                value={memberNames[2]}
                onChange={(e) => handleMemberNameChange(2, e.target.value)}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
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
                label="Member 4"
                placeholder="Enter Member 4 Name"
                variant="outlined"
                margin="normal"
                value={memberNames[3]}
                onChange={(e) => handleMemberNameChange(3, e.target.value)}
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
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
            </>
          ) : selectedGame === 'FIFA' ? (
            <TextField
              fullWidth
              label="Member 1"
              placeholder="Enter Member 1 Name"
              variant="outlined"
              margin="normal"
              value={memberNames[0]}
              onChange={(e) => handleMemberNameChange(0, e.target.value)}
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
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
          ) : null}

          {/* Game Selection */}
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
            {['LOL', 'VALO', 'FIFA'].map((game) => (
              <Button
                key={game}
                sx={{
                  width: '100px', // Increased button width
                  height: '100px', // Increased button height
                  borderRadius: '12px', // Optional: make buttons more rounded
                  backgroundColor: selectedGame === game ? '#f82541' : 'transparent',
                  border: '2px solid #f82541', // Slightly thicker border
                  color: selectedGame === game ? 'white' : '#f82541',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: selectedGame === game ? '#f82541' : 'rgba(248, 37, 65, 0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
          
                onClick={() => handleSelectGame(game)}
              >
                {game === 'LOL' && <LolIcon style={{ height: 50, width: 50, fill: 'blue'}} />}
                {game === 'VALO' && (
                  <ValoIcon style={{ height: 50, width: 50, fill: 'red' }} />
                )}
                {game === 'FIFA' && (
                  <FifaIcon style={{  height: 50, width: 50, fill: 'white' }} />
                )}
              </Button>
            ))}
          </Box>



          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#f82541' }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Register'}
          </Button>
        </Box>
      </Grid>

      {/* Toast Notifications */}
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
    </Grid>
  );
};

export default Showdown;
