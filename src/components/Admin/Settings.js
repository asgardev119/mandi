import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Settings = () => {
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
    </Box>
  );
};

export default Settings;
