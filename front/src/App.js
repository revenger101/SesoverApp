import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Components/Pages/Home";
import Account from "./Components/Pages/Account";
import LoginPage from "./Components/Sign_in/LoginPage";
import RegisterPage from "./Components/Sign_in/RegisterPage";
import { GlobalStyles } from "@mui/material";
import { AuthProvider } from "./Auth/AuthContext";
import PrivateRoute from "./Auth/PrivateRoute";
import Showdown from "./Components/Pages/Showdown/Showdown";
import GamingLoader from "./Components/Layout/GamingLoader";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const user = {
    name: "EXEMPLE USER",
    email: "Exemple@example.com",
  };

  if (loading) {
    return <GamingLoader />;
  }

  return (
    <AuthProvider>
      <GlobalStyles
        styles={{
          "::-webkit-scrollbar": {
            width: "10px",
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: "#212122",
            borderRadius: "5px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#f82541",
            borderRadius: "5px",
            border: "2px solid #212122",
          },
          "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#d11932",
          },
        }}
      />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/Showdown" element={<Showdown />} />
            <Route
              path="/account"
              element={
                <PrivateRoute user={user}>
                  <Account />
                </PrivateRoute>
              }
            />
            
          </Routes>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
