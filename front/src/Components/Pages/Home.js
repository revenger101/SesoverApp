import React from "react";
import { Box, Typography, Grid, Button, Avatar, Card, CardContent } from "@mui/material";
import backgroundImage from "../../assets/Pictures/Background.jpg";

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,          
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        
      >
        
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#f82541",
            textShadow: "0px 0px 20px #f82541",
          }}
        >
          SESOVER
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: "#ddd",
            fontWeight: 500,
            maxWidth: "600px",
            textShadow: "0px 0px 10px #000",
          }}
        >
          Your ultimate hub for competitive esports gaming. Join the battle and
          prove your skills!
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 5,
            py: 2,
            fontSize: "18px",
            backgroundColor: "#f82541",
            "&:hover": {
              backgroundColor: "#1c1c1c",
              color: "#f82541",
            },
          }}
        >
          Explore Tournaments
        </Button>
      </Box>

      {/* Esports Games Section */}
      <Box sx={{ py: 10, px: 3 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#f82541",
            fontWeight: "bold",
            mb: 5,
            textShadow: "0px 0px 15px #f82541",
          }}
        >
          Popular Esports Games
        </Typography>
        <Grid container spacing={4}>
          {["League of Legends", "Valorant", "CS:GO", "Dota 2", "Fortnite"].map(
            (game) => (
              <Grid item xs={12} sm={6} md={4} key={game}>
                <Card
                  sx={{
                    backgroundColor: "#1c1c1c",
                    boxShadow: "0px 0px 15px #f82541",
                    color: "white",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        color: "#f82541",
                      }}
                    >
                      {game}
                    </Typography>
                    <Typography align="center" sx={{ mt: 2 }}>
                      Join the action in {game}. Compete, climb the ranks, and
                      dominate!
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      {/* About Us Section */}
      <Box
        sx={{
          py: 10,
          px: 3,
          backgroundColor: "#1a1a1a",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#f82541",
            fontWeight: "bold",
            mb: 5,
            textShadow: "0px 0px 15px #f82541",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            lineHeight: "1.8",
            color: "#ddd",
          }}
        >
          SESOVER is a community-driven esports platform dedicated to
          competitive gaming. From tournaments to community events, we bring
          gamers together to showcase their skills and rise to glory.
        </Typography>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: 10, px: 3 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#f82541",
            fontWeight: "bold",
            mb: 5,
            textShadow: "0px 0px 15px #f82541",
          }}
        >
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { name: "Player1", role: "Team Captain", img: "/team1.jpg" },
            { name: "Player2", role: "Strategist", img: "/team2.jpg" },
            { name: "Player3", role: "Support", img: "/team3.jpg" },
            { name: "Player4", role: "DPS Expert", img: "/team4.jpg" },
          ].map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <Box
                sx={{
                  textAlign: "center",
                  backgroundColor: "#1c1c1c",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 15px #f82541",
                }}
              >
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    mb: 2,
                    boxShadow: "0px 0px 10px #f82541",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ color: "#f82541", fontWeight: "bold" }}
                >
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ddd" }}>
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
