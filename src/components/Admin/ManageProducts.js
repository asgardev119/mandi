import React, { useState } from "react";
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$50", stock: "In Stock" },
    { id: 2, name: "Product 2", price: "$30", stock: "Out of Stock" },
    { id: 3, name: "Product 3", price: "$20", stock: "In Stock" },
    { id: 4, name: "Product 4", price: "$15", stock: "In Stock" },
    { id: 5, name: "Product 5", price: "$70", stock: "Out of Stock" },
    { id: 6, name: "Product 6", price: "$40", stock: "In Stock" },
    { id: 7, name: "Product 7", price: "$60", stock: "In Stock" },
    { id: 8, name: "Product 8", price: "$55", stock: "Out of Stock" },
    { id: 9, name: "Product 9", price: "$80", stock: "In Stock" },
    { id: 10, name: "Product 10", price: "$90", stock: "Out of Stock" },
    // Add more products as needed
  ]);

  const [rowsPerPage, setRowsPerPage] = useState(5); // Default 5 rows to display

  // Handle delete product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Handle change in the rows per page dropdown
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Manage Products
      </Typography>

      {/* Button to add new product */}
      <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
        Add New Product
      </Button>

      {/* Dropdown for selecting the number of rows to display */}
      <FormControl variant="outlined" sx={{ marginBottom: 2 }}>
        <InputLabel>Rows per page</InputLabel>
        <Select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          label="Rows per page"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>

      {/* Table container with scrollable table */}
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "100%", // Full width of the container
          overflowX: "auto", // Allow horizontal scrolling
          maxHeight: 400, // Set a max height for the table to enable scrolling vertically
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.slice(0, rowsPerPage).map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  {/* Edit Button */}
                  <IconButton
                    color="primary"
                    onClick={() => console.log("Edit product", product.id)}
                    sx={{ marginRight: 1 }}
                  >
                    <EditIcon />
                  </IconButton>

                  {/* Delete Button */}
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageProducts;
