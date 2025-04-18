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
    { id: 1, name: "Aloo (Potato)", price: "₹50", stock: "In Stock" },
    { id: 2, name: "Tamatar (Tomato)", price: "₹30", stock: "Out of Stock" },
    { id: 3, name: "Pyaaz (Onion)", price: "₹20", stock: "In Stock" },
    { id: 4, name: "Dhaniya (Coriander)", price: "₹15", stock: "In Stock" },
    { id: 5, name: "Cadbury Chocolate", price: "₹70", stock: "Out of Stock" },
    { id: 6, name: "Pepsi Cold Drink", price: "₹40", stock: "In Stock" },
    { id: 7, name: "Coca-Cola Bottle", price: "₹60", stock: "In Stock" },
    { id: 8, name: "Parle-G Biscuit", price: "₹55", stock: "Out of Stock" },
    { id: 9, name: "Nimboo (Lemon)", price: "₹80", stock: "In Stock" },
    {
      id: 10,
      name: "Green Mirchi (Chilli)",
      price: "₹90",
      stock: "Out of Stock",
    },
    { id: 11, name: "Bhindi (Lady Finger)", price: "₹25", stock: "In Stock" },
    { id: 12, name: "Kela (Banana)", price: "₹40", stock: "Out of Stock" },
    { id: 13, name: "Lauki (Bottle Gourd)", price: "₹35", stock: "In Stock" },
    { id: 14, name: "Kurkure Masala Munch", price: "₹10", stock: "In Stock" },
    { id: 15, name: "Sprite Cold Drink", price: "₹45", stock: "Out of Stock" },
    { id: 16, name: "Rasgulla Sweet Box", price: "₹120", stock: "In Stock" },
    { id: 17, name: "Atta (Wheat Flour)", price: "₹320", stock: "In Stock" },
    { id: 18, name: "Chini (Sugar)", price: "₹45", stock: "Out of Stock" },
    { id: 19, name: "Haldi Powder", price: "₹30", stock: "In Stock" },
    { id: 20, name: "Maggi 2-Minute Noodles", price: "₹14", stock: "In Stock" },
    // Add more products as needed
  ]);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Manage Products
      </Typography>

      <Button
        variant="outlined"
        sx={{
          marginBottom: 2,
          borderColor: "white",
          color: "white",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "white",
          },
        }}
      >
        Add New Product
      </Button>

      <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel>Rows per page</InputLabel>
        <Select
          sx={{ color: "white" }}
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          label="Rows per page"
        >
          <MenuItem sx={{ color: "black" }} value={5}>
            5
          </MenuItem>
          <MenuItem sx={{ color: "black" }} value={10}>
            10
          </MenuItem>
          <MenuItem sx={{ color: "black" }} value={15}>
            15
          </MenuItem>
          <MenuItem sx={{ color: "black" }} value={20}>
            20
          </MenuItem>
        </Select>
      </FormControl>

      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "100%", 
          overflowX: "auto", 
          maxHeight: 400,
          background: "grey", 
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
