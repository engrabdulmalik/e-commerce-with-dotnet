import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, Typography } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
    <NavBar />
      <Container maxWidth="xl" sx={{ mt: 12 }}>
        <Catalog products={products} />
      </Container>
    </>
  );
}

export default App;
