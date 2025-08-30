import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={200}
        
        color="green"
      >
      <Typography variant="h2">SWANZ</Typography>
      </Box>
      <Catalog products={products} />
    </Container>
  );
}

export default App;
