import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from "@mui/material";

const ManageOrders = () => {
  const orders = [
    { id: 1, customer: "Customer 1", total: "$120", status: "Completed" },
    { id: 2, customer: "Customer 2", total: "$50", status: "Pending" },
    // Add more orders as needed
  ];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
      ManageOrders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" size="small">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageOrders;
