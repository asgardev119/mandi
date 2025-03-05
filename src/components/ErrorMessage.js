// ErrorMessage.js
import React from 'react';
import { Grid, Typography } from '@mui/material';

const ErrorMessage = ({ message }) => (
  <Grid item xs={12}>
    <Typography color="error" sx={{ fontSize: "12px" }}>
      {message}
    </Typography>
  </Grid>
);

export default ErrorMessage;
