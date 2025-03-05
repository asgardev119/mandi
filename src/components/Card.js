import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { IncreamentDecermentBtn } from "./IncreamentDecermentBtn";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../features/cart/cartSlice";

export default function Cards({ mockApi }) {
  const [item, setItem] = useState(mockApi);
  const [cartValue, setCartValue] = React.useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (cardId, obj) => {
    setCartValue((prevValues) => ({
      ...prevValues,
      [cardId]: true,
    }));
    dispatch(addToCart(obj));
  };

  useEffect(() => {
    setItem(mockApi);
  }, [mockApi]);

  const handleIncrement = (id) => {
    console.log("Incrementing quantity for id:", id);
    dispatch(incrementQuantity(id));
  };
  
  const handleDecrement = (id) => {
    console.log("Decrementing quantity for id:", id);
    dispatch(decrementQuantity(id));
  };

  return (
    <>
      <Box
        sx={{
          padding: "30px 10px",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          margin: "auto",
          "@media (max-width: 600px)": {
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          },
        }}
      >
        {item.map((obj, i) => (
          <Card
            key={obj.id}
            sx={{
              marginTop: "5px",
              width: 150,
              "@media (max-width: 600px)": {
                width: "120px",
                fontSize: "12px",
              },
            }}
          >
            <CardMedia
              component="img"
              alt="product image"
              height="100"
              sx={{ objectFit: "contain" }}
              image={obj.imgUrl}
            />
            <CardContent sx={{ textAlign: "start", padding: "5px" }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {obj.para}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {obj.weight}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                padding: "2px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "text.secondary",
                }}
              >
                Rs. {obj.price}
              </Typography>
              {cartValue[i] ? (
                <IncreamentDecermentBtn
                  onIncrement={() => handleIncrement(obj.id)}
                  onDecrement={() => handleDecrement(obj.id)}
                  productId ={obj.id}
                />
              ) : (
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handleAddToCart(i, obj)}
                  sx={{ background: "#2b4162", color: "#fff" }}
                >
                  Add
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
