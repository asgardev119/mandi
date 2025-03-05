import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  filterProductsByCategory,
} from "../features/products/productSlice";
import Header from "../components/Header";
import BannerSlider from "../components/BannerSlider ";
import { MiniBanner } from "../components/MiniBanner";
import Cards from "../components/Card";
import { productData } from "../utils/mockProductApi";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  background: "#2b4162",
  backgroundImage: "linear-gradient(315deg, #2b4162 20%, #12100e 50%)",
};

const bg = {
  background: " #12100e",
};

export const Home = () => {

  const dispatch = useDispatch();
  
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    dispatch(setProducts(productData)); // Load all products into Redux store
  }, [dispatch]);

  const onCategoryChange = (category) => {
    dispatch(filterProductsByCategory(category)); // Filter products based on category
  };

  return (
    <div style={bg}>
      <Header />
      <BannerSlider />
      <MiniBanner onCatogryChange={onCategoryChange} />
      <Cards mockApi={filteredProducts} />
      {/* Pass filtered products to Cards */}
      <Modal
        open={false}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}></Box>
      </Modal>
      <Footer />
    </div>
  );
};
