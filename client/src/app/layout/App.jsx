import { useEffect, useState } from "react"


function App() {
  
const [products, setProducts]= useState([])

const addProduct = () => {
  setProducts(...prevState => [...prevState, {id: products.length + 1, name: `Product ${products.length + 1}`}])
}

useEffect(() => {
 fetch('https://localhost:5001/api/products')
 .then(res => res.json())
 .then(data => setProducts(data))
}, [])

  return (
  
    <>
     <h1>EStore</h1>
      <ul>
        {products.map(product => <li key={product.id}>{product.name}</li>)}
      </ul>
     <button onClick={addProduct}>Add Product</button>
    </>
  )
}

export default App
