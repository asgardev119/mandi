import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const root = {
  backgroundColor: "#2b4162",
};

const Dashboard = () => {
  return (
    <div style={root}>
      <Typography variant="h5" gutterBottom>
        Admin Dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "space-between",
        }}
      >
        <Card
          sx={{
            flex: 1,
            minWidth: "250px",
            boxShadow: 3,

            backgroundColor: "#2b4162",
            border: "1px solid #fff",
          }}
        >
          <CardContent>
            <Typography fontSize="12px" color="darkblue" gutterBottom>
              Total Products
            </Typography>
            <Typography variant="h4">50</Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: 1,
            minWidth: "250px",
            boxShadow: 3,
            backgroundColor: "#2b4162",
            border: "1px solid #fff",
          }}
        >
          <CardContent>
            <Typography fontSize="12px" color="darkblue" gutterBottom>
              Total Orders
            </Typography>
            <Typography variant="h4">120</Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: 1,
            minWidth: "250px",
            boxShadow: 3,
            backgroundColor: "#2b4162",
            border: "1px solid #fff",
          }}
        >
          <CardContent>
            <Typography fontSize="12px" color="darkblue" gutterBottom>
              Total Users
            </Typography>
            <Typography variant="h4">500</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Dashboard;
