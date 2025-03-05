import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  searchQuery: "", // To store the search query
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    // Set all products in the state
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },

    // Filter products by category
    filterProductsByCategory: (state, action) => {
      const category = action.payload.toLowerCase();
      state.filteredProducts = state.allProducts.filter((product) =>
        product.name.some((nameItem) =>
          nameItem.toLowerCase().includes(category)
        )
      );
    },

    // Reset filtered products to all products
    resetFilteredProducts: (state) => {
      state.filteredProducts = state.allProducts;
    },

    // Set search query and filter products based on search input
    searchProducts: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      state.searchQuery = searchQuery;
      
      // Filter the products by search query
      state.filteredProducts = state.allProducts.filter((product) =>
        product.name.some((nameItem) =>
          nameItem.toLowerCase().includes(searchQuery)
        )
      );
    },

    // Reset search results
    resetSearch: (state) => {
      state.filteredProducts = state.allProducts;
      state.searchQuery = "";
    },
  },
});

export const {
  setProducts,
  filterProductsByCategory,
  resetFilteredProducts,
  searchProducts,
  resetSearch,
} = productSlice.actions;

export default productSlice.reducer;
