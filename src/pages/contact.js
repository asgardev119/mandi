import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../components/Header";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "../components/Footer";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [alerts, setAlerts] = useState(false);
  const handleChange = () => {
    return setAlerts(!alerts);
  };
  const onclose = () => {
    return setAlerts(false);
  };

  return (
    <>
      <Header />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",

          color: "#fff",
        }}
      >
        {/* Left Side - Contact Form */}

        <Box
          sx={{
            flex: 1,
            padding: isSmallScreen ? "20px" : "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Get in Touch
          </Typography>
          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
              }}
            />
            <TextField
              size="small"
              fullWidth
              label="Your Email"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
              }}
            />
            <TextField
              fullWidth
              label="Subject"
              size="small"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
              }}
            />
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
              }}
            />
            {alerts && (
              <Alert
                sx={{ background: "green" }}
                icon={<CheckIcon fontSize="inherit" />}
                onClose={() => {onclose()}}
                severity="success"                
              >
                message send successful.
              </Alert>
            )}
            <Button
              onClick={handleChange}
              variant="outlined"
              width="200"
              sx={{
                border: "1px solid #fff",
                width: "200px",
                padding: "5px",
                color: "#fff",
                margin: "auto",
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>

        {/* Right Side - Contact Information */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage:
              "url('https://img2.wallspic.com/crops/1/2/9/1/5/151921/151921-android-android_11-atmosphere-darkness-colorfulness-1080x1920.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            xs: { paddingBottom: "130px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: "28px",
              xs: { fontSize: "12px" },
            }}
          >
            Contact Information
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmailIcon sx={{ fontSize: "16px", color: "#ff4444" }} />
              <Typography variant="body1">iamasgar19@gmail.com</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <PhoneIcon sx={{ fontSize: "16px", color: "#ff4444" }} />
              <Typography variant="body1">+916205525335</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocationOnIcon sx={{ fontSize: "16px", color: "#ff4444" }} />
              <Typography variant="body1">Ramput West Champaran</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
