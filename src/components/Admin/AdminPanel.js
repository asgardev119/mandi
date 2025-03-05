import React, { useState } from "react";
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
  useTheme,
  useMediaQuery,
  Modal,
} from "@mui/material";
import { NavLink, Routes, Route } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Dashboard from "./Dashboard";
import ManageProducts from "./ManageProducts";
import ManageOrders from "./ManageOrders";
import ManageUsers from "./ManageUsers";
import Settings from "./Settings";
import "../../App.css";
import SignInForm from "../SignIn";

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
    width: 200,
  },
};

const AdminPanel = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Typography variant="h6" sx={{ padding: 2 }}>
        Admin Panel
      </Typography>
      <Divider /> */}

      <Divider />

      <List>
        {/* Use NavLink instead of Link for active class */}
        <ListItem
          button
          component={NavLink}
          to="/admin/dashboard"
          activeClassName="active"
        >
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/admin/manage-products"
          activeClassName="active"
        >
          <ListItemText primary="Manage Products" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/admin/manage-orders"
          activeClassName="active"
        >
          <ListItemText primary="Manage Orders" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/admin/manage-users"
          activeClassName="active"
        >
          <ListItemText primary="Manage Users" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/admin/settings"
          activeClassName="active"
        >
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ height: "100vh", background: "#2b4162", width: "100%" }}>
      <Typography
        variant="h4"
        sx={{
          width: "100%",
          textAlign: "center",
          position: "absolute",
          top: "100px",
          fontSize: { sm: "12px", md: "24px" },
        }}
      >
        Hi, Admin Please Sign In
      </Typography>
      {open ? (
        <Box sx={style}>
          <Typography
            onClick={handleChange}
            sx={{ width: "100%", textAlign: "end", cursor: "pointer" }}
          >
            X
          </Typography>
          <SignInForm />
        </Box>
      ) : (
        <Box sx={{ display: "flex", backgroundColor: "#2b4162" }}>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "#2b4162",
            }}
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
                // Apply marginTop for small screens (sm)
                marginTop: "60px",
              },
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#2b4162",
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
              // backgroundColor: "#2b4162",
              marginTop: "80px",
              transition: "margin-left 0.3s ease",
              width: "100%",
              height: "100vh",
            }}
          >
            <Container sx={{ backgroundColor: "#2b4162" }}>
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
