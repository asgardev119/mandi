import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Badge,
  Drawer,
  List,
  Button,
} from "@mui/material";
import { ShoppingCart, Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
import "../App.css";

import BasicModal from "./Model";
import { useSelector } from "react-redux";
import { selectTotalCount } from "../features/cart/cartSlice";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const totalQuantity = useSelector(selectTotalCount);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  const handleChange = () => {
    setOpen(!open);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const handleProfile = () => {
    navigate("/userprofile");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedIn(true);
      setUsername(user.firstName);
    }
  }, []);
  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "darkblue",
            background: "#2b4162",
            backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
          }}
        >
          <Box
            sx={{ width: "auto", fontSize: "16px", sm: { fontSize: "12px" } }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              ᗰᗩᑎᗪI
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "13px",
              gap: 4,
              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            <Link
              to="/"
              color="inherit"
              sx={{ textDecoration: "none", cursor: "pointer" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              color="inherit"
              sx={{ textDecoration: "none", cursor: "pointer" }}
            >
              About
            </Link>
            <Link
              to="/contact"
              color="inherit"
              sx={{ textDecoration: "none", cursor: "pointer" }}
            >
              contact
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton color="inherit">
              <Badge
                badgeContent={totalQuantity}
                color="error"
                onClick={goToCart}
              >
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {loggedIn ? (
              <Button
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                }}
                onClick={handleProfile}
                variant="contained"
              >
                {username}
              </Button>
            ) : (
              <Button
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                }}
                variant="contained"
                onClick={handleChange}
              >
                signIn
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ background: "#2b4162" }}
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{
            height: "100vh",
            width: 200,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            background: "#2b4162",
          }}
        >
          {/* Mobile Navigation Links */}
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link to="/" color="inherit" sx={{ textDecoration: "none" }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/shop" color="inherit" sx={{ textDecoration: "none" }}>
              <Button color="inherit">Shop</Button>
            </Link>
            <Link to="/about" color="inherit" sx={{ textDecoration: "none" }}>
              <Button color="inherit">About</Button>
            </Link>

            <Box
              sx={{
                textTransform: "capitalize",
                backgroundColor: "transparent",
                position: "absolute",
                top: "100%",
                left:"30%",
                marginTop: "100%",
              }}
            >
              {loggedIn ? (
                <Button
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    marginBottom: "auto",
                  }}
                  onClick={handleProfile}
                  variant="contained"
                >
                  {username}
                </Button>
              ) : (
                <Button
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    marginBottom: "auto",
                  }}
                  variant="contained"
                  onClick={handleChange}
                >
                  signIn
                </Button>
              )}
            </Box>
          </List>
        </Box>
      </Drawer>

      {open && (
        <BasicModal
          open={open}
          setOpen={setOpen}
          handleClose={handleChange}
          setLoggedIn={setLoggedIn}
          setUsername={setUsername}
        />
      )}
    </>
  );
};

export default Header;
