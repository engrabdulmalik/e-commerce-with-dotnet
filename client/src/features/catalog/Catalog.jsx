import ProductList from "./ProductList";

function Catalog({ products }) {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Catalog;
