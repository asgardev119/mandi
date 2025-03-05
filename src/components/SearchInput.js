import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { resetSearch, searchProducts } from "../features/products/productSlice";

export const SearchInput = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let newQuery = e.target.value;
    setQuery(newQuery);
    dispatch(searchProducts(newQuery));

    if (query.trim() === "" || query.length === 1) {
      dispatch(resetSearch());
    }
  };

  const handleSearch = () => {
    if (!query) {
      dispatch(resetSearch());
    } else {
      dispatch(searchProducts(query));
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "30px",
          width: ["90%", "50%"],
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "auto",
          border: "1px solid #fff",
          borderRadius: "5px",
          gap: "10px",
        }}
      >
        <TextField
          value={query}
          onChange={handleChange}
          variant="standard"
          size="small"
          placeholder="Search........"
          sx={{
            padding: "4px",
            width: "100%",
          }}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          InputProps={{
            style: { color: "#fff" },
          }}
        />
        <Button variant="outlined" size="small" color="" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Typography sx={{textAlign:"center" , marginTop:"10px"}}>select a catogry here</Typography>
    </>
  );
};
