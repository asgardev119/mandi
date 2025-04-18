import React, { useState, useEffect } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Container,
  IconButton,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Dashboard from "./Dashboard";
import ManageProducts from "./ManageProducts";
import ManageOrders from "./ManageOrders";
import ManageUsers from "./ManageUsers";
import Settings from "./Settings";
import "../../App.css";

const drawerWidth = 200;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #fff",
  p: 4,
  borderRadius: "10px",
  "@media (max-width:600px)": {
    width: 250,
  },
};

const AdminPanel = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Check if the user is already logged in using localStorage
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      setOpen(false); // If the user is authenticated, no need to show login form
    } else {
      setOpen(true); // If not, show the login form
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        <ListItem button component={NavLink} to="/admin/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/admin/manage-products">
          <ListItemText primary="Manage Products" />
        </ListItem>
        <ListItem button component={NavLink} to="/admin/manage-orders">
          <ListItemText primary="Manage Orders" />
        </ListItem>
        <ListItem button component={NavLink} to="/admin/manage-users">
          <ListItemText primary="Manage Users" />
        </ListItem>
        <ListItem button component={NavLink} to="/admin/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );

  const handleLogin = () => {
    if (email === "imran@gmail.com" && password === "imran123") {
      localStorage.setItem("isAuthenticated", "true");
      setOpen(false); // login successful
      setError("");
      navigate("/admin/dashboard"); // Redirect to dashboard after successful login
    } else {
      setError("Invalid email or password");
    }
  };



  return (
    <Box sx={{ height: "100vh", background: "#2a2a2a", width: "100%" }}>
      <Typography
        variant="h4"
        sx={{
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "80px",
          fontSize: { sm: "12px", md: "16px" },
        }}
      >
        Hi, Admin
      </Typography>

      {open ? (
        <Box sx={style}>

          <Typography variant="h6" gutterBottom color="white" textAlign="center">
            Admin Login
          </Typography>

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button
            variant="outlined"
            sx={{
              mt: 2,
              color: "white",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", backgroundColor: "#2a2a2a" }}>
          <AppBar
            position="fixed"
            sx={{ backgroundColor: "#2a2a2a" }}
          >
            <Toolbar>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Admin Panel
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            sx={{
              "@media (max-width:600px)": {
                marginTop: "60px",
              },
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#2a2a2a",
                borderRight: "1px solid #fff",
                marginTop: "65px",
              },
            }}
            variant={isMobile ? "temporary" : "permanent"}
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>

          <Box
            component="main"
            sx={{
              marginTop: "80px",
              transition: "margin-left 0.3s ease",
              width: "100%",
              height: "100vh",
            }}
          >
            <Container sx={{ backgroundColor: "#2a2a2a" }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/manage-products" element={<ManageProducts />} />
                <Route path="/manage-orders" element={<ManageOrders />} />
                <Route path="/manage-users" element={<ManageUsers />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AdminPanel;
