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
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ManageUsers = () => {
  const users = [
    { id: 1, name: "User 1", email: "user1@example.com", role: "Admin" },
    { id: 2, name: "User 2", email: "user2@example.com", role: "Customer" },
    { id: 3, name: "User 3", email: "user3@example.com", role: "Customer" },
    { id: 4, name: "User 4", email: "user4@example.com", role: "Admin" },
    { id: 5, name: "User 5", email: "user5@example.com", role: "Admin" },
    // Add more users to test scrolling
  ];

  // Handle edit user (you can implement this function based on your app's logic)
  const handleEditUser = (id) => {
    console.log(`Edit user with ID: ${id}`);
    // Add edit functionality here (e.g., open a dialog or navigate to an edit page)
  };

  // Handle delete user
  const handleDeleteUser = (id) => {
    console.log(`Delete user with ID: ${id}`);
    // Add delete functionality here (e.g., make an API call to delete)
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Manage Users
      </Typography>

      {/* Table container with responsive overflow handling */}
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "100%", // Full width of the container
          overflowX: {
            xs: "auto", // For extra small screens (xs), enable horizontal scrolling
            sm: "unset", // For small and larger screens (sm+), remove overflow
          },
          // If you want the table to take full width on larger screens
          width: {
            xs: "100%", // For extra small screens (xs), take full width
            sm: "100%", // For small screens and larger, also take full width
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
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
