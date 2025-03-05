import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Box,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../features/cart/cartSlice";
import Header from "../components/Header";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleIncrease = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          padding: isSmallScreen ? "10px" : "20px",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #12100e 0%, #2b2b2b 100%)",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Your Cart
        </Typography>

        {/* Responsive Layout */}
        {isSmallScreen ? (
          // Card Layout for Small Screens
          <Box>
            {cart.map((item, i) => (
              <Card
                key={i}
                sx={{
                  mb: 2,
                  background:
                    "linear-gradient(135deg, #12100e 0%, #2b2b2b 100%)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                      <CardMedia
                        component="img"
                        image={item.imgUrl}
                        alt={item.para}
                        sx={{
                          width: "100%",
                          height: "80px",
                          borderRadius: "8px",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {item.para.length > 10
                          ? item.para.slice(0, 10) + "..."
                          : item.para}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        {item.weight}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        ₹{item.price} × {item.quantity} = ₹
                        {item.price * item.quantity}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1 }}
                      >
                        <IconButton
                          onClick={() => handleDecrease(item.id)}
                          sx={{
                            color: "#fff",
                            "&:hover": {
                              background: "rgba(255, 255, 255, 0.1)",
                            },
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography variant="body2" sx={{ mx: 1 }}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          onClick={() => handleIncrease(item.id)}
                          sx={{
                            color: "#fff",
                            "&:hover": {
                              background: "rgba(255, 255, 255, 0.1)",
                            },
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                  <IconButton
                    onClick={() => handleRemoveItem(item.id)}
                    sx={{
                      color: "#ff4444",
                      mt: 1,
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #12100e 0%, #2b2b2b 100%)",
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          // Table Layout for Larger Screens
          <TableContainer
            component={Paper}
            sx={{
              background: "linear-gradient(135deg, #12100e 0%, #2b2b2b 100%)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Image",
                    "Product",
                    "Price",
                    "Quantity",
                    "Total",
                    "Actions",
                  ].map((text) => (
                    <TableCell
                      key={text}
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                      }}
                    >
                      {text}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <img
                        src={item.imgUrl}
                        alt={item.para}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "8px",
                          objectFit: "cover",
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {item.para.length > 10
                          ? item.para.slice(0, 10) + "..."
                          : item.para}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        {item.weight}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>₹{item.price}</TableCell>
                    <TableCell>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item>
                          <IconButton
                            onClick={() => handleDecrease(item.id)}
                            sx={{
                              color: "#fff",
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.1)",
                              },
                            }}
                          >
                            <RemoveIcon />
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" sx={{ color: "#fff" }}>
                            {item.quantity}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <IconButton
                            onClick={() => handleIncrease(item.id)}
                            sx={{
                              color: "#fff",
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.1)",
                              },
                            }}
                          >
                            <AddIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      ₹{item.price * item.quantity}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleRemoveItem(item.id)}
                        sx={{
                          color: "#ff4444",
                          "&:hover": { background: "rgba(255, 68, 68, 0.1)" },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Total and Clear Cart Button */}
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total Price: ₹{calculateTotalPrice()}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClearCart}
            sx={{
              background: "#ff4444",
              color: "#fff",
              "&:hover": { background: "#cc0000" },
            }}
          >
            Clear Cart
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CartPage;
