import React from "react";
import { Container, Grid, Typography,  Box, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router";

const Footer = () => {
  return (
    <FooterContainer
      style={{
        background: "#2b4162",
        backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
        margin: "0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="textPrimary"
              gutterBottom
              sx={{ color: "#fff" }}
            >
              Quick Links
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/" color="inherit" style={linkStyle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" color="inherit" style={linkStyle}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" color="inherit" style={linkStyle}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Company Info Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="textPrimary"
              gutterBottom
              sx={{ color: "#fff" }}
            >
              Company Information
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ color: "#fff" }}
              gutterBottom
            >
              ᗰᗩᑎᗪI is a leading e-commerce platform offering a wide range of
              high-quality products for everyday use
            </Typography>

            <Typography sx={{ color: "#fff", fontSize: "12px" }}>
              Email: asgar.ies.bpl@gmail.com
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              sx={{ color: "#fff", fontSize: "12px" }}
            >
              Phone: +916205525335, West Champaran Bihar
            </Typography>
          </Grid>

          {/* Social Media Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
              Follow Us
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  href="https://facebook.com"
                  color="inherit"
                  style={linkStyle}
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  color="inherit"
                  style={linkStyle}
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/iasgaransarii"
                  color="inherit"
                  style={linkStyle}
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ color: "#fff" }}
          >
            © {new Date().getFullYear()} ᗰᗩᑎᗪI , All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled("footer")({
  background: "#2b4162",
  backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
  color: "#fff",
  padding: "40px 0",
  marginTop: "40px",
});

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  display: "block",
};

export default Footer;
