import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication status from localStorage
    localStorage.removeItem("isAuthenticated");

    // Optionally redirect to login page or home page
    navigate("/admin"); // or navigate("/login");
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <TextField label="Site Title" fullWidth margin="normal" />
      <TextField label="Admin Email" fullWidth margin="normal" />
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Save Changes
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{
          marginLeft: 2,
        }}
        onClick={handleLogout}
      >
        Logout Admin
      </Button>
    </Box>
  );
};

export default Settings;
