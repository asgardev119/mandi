import React from "react";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice"; 

export const IncreamentDecermentBtn = ({ productId, onIncrement, onDecrement }) => {
  // Get the specific product's quantity from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const product = cartItems.find((item) => item.id === productId);
  const quantity = product ? product.quantity : 0;

  return (
    <div
      style={{
        height: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid",
        borderRadius: "5px",
        background: "#2b4162",
      }}
    >
      <Button
        onClick={onDecrement}
        style={{
          minHeight: "10px",
          borderRadius: "50%",
          minWidth: "10px",
          fontSize: "18px",
          border: "none",
        }}
      >
        -
      </Button>

      {/* Quantity display */}
      <Typography
        variant="body1"
        style={{
          textAlign: "center",
          fontSize: "12px", // Adjust the font size if necessary
        }}
      >
        {quantity}
      </Typography>

      <Button
        onClick={onIncrement}
        style={{
          minHeight: "10px",
          borderRadius: "50%",
          minWidth: "10px",
          fontSize: "12px",
          border: "none",
        }}
      >
        +
      </Button>
    </div>
  );
};
