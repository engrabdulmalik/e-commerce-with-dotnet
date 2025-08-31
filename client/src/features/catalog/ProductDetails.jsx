import { useFetchProductDetailsQuery } from "./catalogApi";
import { useParams } from "react-router-dom";
import {
  Grid,
  Typography,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Button,
} from "@mui/material";

function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading } = useFetchProductDetailsQuery(id);

  if (!product || isLoading) return <h3>Loading...</h3>;

  const ProductDetails = [
    { name: "Name", value: product.name },
    { name: "Description", value: product.description },
    { name: "Type", value: product.type },
    { name: "Brand", value: product.brand },
    { name: "Quantity in stock", value: product.quantityInStock },
  ];

  return (
    <>
      <Grid container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
        <Grid size={6}>
          <img
            src={product?.pictureUrl}
            alt={product.name}
            style={{ width: "100%", height: "625px" }}
          />
        </Grid>
        <Grid size={6}>
          <Typography variant="h3">{product.name}</Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h4" color="secondary">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <TableContainer>
            <Table sx={{ "& td": { fontSize: "1.2rem" } }}>
              <TableBody>
                {ProductDetails.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
                <TableRow></TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container sx={{ mt: 4 }}>
            <Grid size={6}>
              <TextField
                label="Quantity in Cart"
                variant="outlined"
                type="number"
                fullWidth
                value={1}
              />
            </Grid>
            <Grid size={6} sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{ height: "55px", ml: 2 }}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductDetails;
