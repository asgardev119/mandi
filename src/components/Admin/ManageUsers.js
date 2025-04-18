import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,

} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ManageUsers = () => {
  const users = [
    { id: 1, name: "Rahul Sharma", email: "rahul.sharma@example.com", role: "Admin" },
    { id: 2, name: "Sneha Kapoor", email: "sneha.kapoor@example.com", role: "Customer" },
    { id: 3, name: "Aman Verma", email: "aman.verma@example.com", role: "Customer" },
    { id: 4, name: "Meera Joshi", email: "meera.joshi@example.com", role: "Admin" },
    { id: 5, name: "Vikram Rao", email: "vikram.rao@example.com", role: "Seller" },
    { id: 6, name: "Anjali Singh", email: "anjali.singh@example.com", role: "Customer" },
    { id: 7, name: "Rajesh Mehta", email: "rajesh.mehta@example.com", role: "Admin" },
    { id: 8, name: "Kriti Desai", email: "kriti.desai@example.com", role: "Customer" },
    { id: 9, name: "Dev Patel", email: "dev.patel@example.com", role: "Seller" },
    { id: 10, name: "Riya Malhotra", email: "riya.malhotra@example.com", role: "Customer" },
  ]
  

  const handleEditUser = (id) => {
    console.log(`Edit user with ID: ${id}`);
  };

  const handleDeleteUser = (id) => {
    console.log(`Delete user with ID: ${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Manage Users
      </Typography>

      
      <TableContainer

        sx={{
          maxWidth: "100%", 
          color:"#fff",
          overflowX: {
            xs: "auto", 
            sm: "unset", 
          },
         
          width: {
            xs: "100%", 
            sm: "100%", 
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell  sx={{ color: "white" }}>Name</TableCell>
              <TableCell  sx={{ color: "white" }}>Email</TableCell>
              <TableCell  sx={{ color: "white" }}>Role</TableCell>
              <TableCell  sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell  sx={{ color: "white" }}>{user.name}</TableCell>
                <TableCell  sx={{ color: "white" }}>{user.email}</TableCell>
                <TableCell  sx={{ color: "white" }}>{user.role}</TableCell>
                <TableCell>
                  {/* Edit Button */}
                  <IconButton
                    color="primary"
                    onClick={() => handleEditUser(user.id)}
                    style={{ marginRight: "10px" }}
                  >
                    <EditIcon />
                  </IconButton>

                  {/* Delete Button */}
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Example buttons */}
      <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Add User
      </Button>
    </div>
  );
};

export default ManageUsers;
