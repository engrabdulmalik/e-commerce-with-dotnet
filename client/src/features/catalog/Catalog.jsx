import { useFetchProductsQuery } from "./catalogApi";
import ProductList from "./ProductList";

function Catalog() {
const { data: products, error, isLoading } = useFetchProductsQuery();

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error loading products</div>;
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Catalog;
