import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/"); // If no user data in localStorage, redirect to home
    } else {
      setUser(storedUser); // Set user data if available
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // Redirect to home after logout
  };

  // Check if user data is still being loaded
  if (!user) {
    return (
      <Box sx={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Please log in to access your profile.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Header />
      <Box sx={{ padding: "20px", textAlign: "center",background: " #12100e"  }}>
        {/* Profile Avatar */}
        <Avatar
          alt={user.firstName}
          src=""
          sx={{
            width: 100,
            height: 100,
            margin: "0 auto",
            marginBottom: "20px",
          }}
        />

        {/* User Name */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          {user.firstName} {user.lastName}
        </Typography>

        {/* User Email */}
        <Typography
          variant="body1"
          sx={{ color: "gray", marginBottom: "20px" }}
        >
          {user.email}
        </Typography>

        <Divider sx={{ marginBottom: "20px" }} />

        {/* Log Out Button */}
        <Button
          variant="contained"
          color=""
          sx={{
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            fontSize: "16px",
            border:"1px solid"
          }}
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default UserProfile;
