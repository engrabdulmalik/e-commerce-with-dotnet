import { Box } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", gap:3,justifyContent:"center" }} 
    >
      {products.map((product) => (
       
       <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}

export default ProductList;
