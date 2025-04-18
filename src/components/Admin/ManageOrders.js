import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from "@mui/material";

const ManageOrders = () => {
  const orders = [
    { id: 1, customer: "Amit Sharma", total: "₹120", status: "Completed" },
    { id: 2, customer: "Pooja Verma", total: "₹50", status: "Pending" },
    { id: 3, customer: "Ravi Singh", total: "₹90", status: "Cancelled" },
    { id: 4, customer: "Neha Dubey", total: "₹200", status: "Completed" },
    { id: 5, customer: "Karan Patel", total: "₹75", status: "Pending" },
    { id: 6, customer: "Anjali Mehta", total: "₹300", status: "Completed" },
    { id: 7, customer: "Suresh Yadav", total: "₹60", status: "Pending" },
    { id: 8, customer: "Priya Jaiswal", total: "₹180", status: "Cancelled" },
    { id: 9, customer: "Manish Gupta", total: "₹95", status: "Completed" },
    { id: 10, customer: "Ritika Singh", total: "₹130", status: "Pending" },
  ]
  

  return (
    <div>
      <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
        ManageOrders
      </Typography>
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Customer</TableCell>
              <TableCell sx={{ color: "white" }}>Total</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell sx={{ color: "white" }}>{order.customer}</TableCell>
                <TableCell sx={{ color: "white" }}>{order.total}</TableCell>
                <TableCell sx={{ color: "white" }}>{order.status}</TableCell>
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
