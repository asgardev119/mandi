import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  CardMedia,
} from "@mui/material";
import { banners, ProductsCategories } from "../utils/mockProductApi"; // Ensure this import is correct
import { SearchInput } from "./SearchInput";

export const MiniBanner = ({ onCatogryChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const containerRef = useRef(null);

  const cardsToShow = isMobile ? 1 : 3;

  // Auto-scrolling logic

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % (banners.length - cardsToShow + 1)
      );
    }, 2000); // Change cards every 2 seconds

    return () => clearInterval(interval);
  }, [cardsToShow]);

  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].offsetWidth + 20;
      containerRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <>
      <Typography
        sx={{
          marginTop: "50px",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          textAlign: "center",
          fontSize: { xs: "18px", md: "45px" },
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        find your products
      </Typography>
      <SearchInput />

      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          textAlign: "start",
        }}
      >
        {/* Banner Container */}
        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",

            "&::-webkit-scrollbar": {
              display: "none",
            },
            width: "90%",
            margin: "auto",
          }}
        >
          {ProductsCategories.map((banner, index) => (
            <Box
              onClick={() => onCatogryChange(banner.category)}
              key={index}
              sx={{
                flex: `0 0 calc(${100 / cardsToShow}% - ${
                  (20 * (cardsToShow - 1)) / cardsToShow
                }px)`,

                scrollSnapAlign: "start",
                minHeight: "120px",
                borderRadius: "10px",
                cursor: "pointer",
                maxWidth: "100px",
                display: "flex",
                marginTop: "10px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                borderBottom: "1px solid #fff",
                background: "#2b4162",
                backgroundImage:
                  "linear-gradient(315deg, #2b4162 20%, #12100e 50%)",
                xs: { height: "100px", border: "1px solid" },
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                sizes="small"
                style={{ borderRadius: "10px" }}
                image={banner.imgUrl}
              />
              <Box sx={{ textWrap: "wrap", textAlign: "center" }}>
                <Typography fontSize="small" variant="h6">
                  {banner.category}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
