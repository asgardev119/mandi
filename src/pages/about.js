import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Header from "../components/Header";
import { reviews } from "../utils/mockProductApi";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />

      <div style={{ padding: "20px", background: " #12100e" }}>
        <Container>
          <Box
            sx={{
              textAlign: "center",
              padding: "40px 20px",
              background: " #2b4162",
              backgroundImage:
                "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              color: "white",
              marginBottom: "40px",
            }}
          >
            <Typography variant="h5" gutterBottom>
              About ᗰᗩᑎᗪI
            </Typography>
            <Typography variant="h6">
              Your one-stop shop for everything you need, delivered right to
              your doorstep.
            </Typography>
          </Box>

          {/* Introduction Section */}
          <Typography variant="h5" align="center" fontSize="medium">
            Welcome to Dukaan, your trusted e-commerce platform. We strive to
            offer high-quality products at affordable prices with excellent
            customer service. Whether you're looking for electronics, fashion,
            home essentials, or more, we have you covered.
          </Typography>

          {/* Cards Section */}
          <Grid container spacing={4} justifyContent="center">
            {/* Mission Card */}
            {reviews.map((obj, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <StyledCard
                    sx={{
                      background: " #2b4162",
                      backgroundImage:
                        "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        backgroundColor: "#3f51b5",
                        marginBottom: 2,
                        background: " #2b4162",
                        backgroundImage:
                          "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
                        border: "1px solid #fff",
                      }}
                    >
                      <Typography variant="h6" color="white">
                        {obj.dpText}
                      </Typography>
                    </Avatar>
                    <Typography variant="h6" color="white">
                      {obj.title}
                    </Typography>
                    <Typography color="white" fontSize="small">
                      {obj.para}
                    </Typography>
                  </StyledCard>
                </Grid>
              );
            })}
          </Grid>

          {/* Call-to-Action Button */}
          <Box sx={{ textAlign: "center", marginTop: "40px" }}>
            <Typography variant="h6" fontSize="small">
              Ready to start shopping with ᗰᗩᑎᗪI? Browse our amazing collection
              of products today!
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="contained"
              sx={{
                padding: "10px 20px",
                borderRadius: "5px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "black",
                border: "1px solid #fff",
              }}
            >
              Go to Home
            </Button>
          </Box>
        </Container>
      </div>
      <Footer />

    </>
  );
};

// Styled Card with shadow effect
const StyledCard = styled(Card)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
  },
}));

export default AboutPage;
