import React, { useState, useEffect } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { banners, productData } from "../utils/mockProductApi";

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        marginTop: "20px",
      }}
    >
      {/* Banner Container */}
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <Box
            key={banner.id}
            sx={{
              flex: "0 0 100%", 
              minWidth: "20%", 
              height: isMobile ? "150px" : "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={banner.image}
              alt={banner.alt}
              style={{
                width: "90%", 
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Dots for Navigation */}
      <Box
        sx={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {banners.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:
                activeIndex === index ? "primary.main" : "grey.500",
              cursor: "pointer",
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BannerSlider;
