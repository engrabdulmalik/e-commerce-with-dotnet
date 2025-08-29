import { useEffect, useState } from "react"


function App() {
  
const [products, setProducts]= useState([])

const addProduct = () => {
  setProducts(...prevState => [...prevState, {id: products.length + 1, name: `Product ${products.length + 1}`}])
}

useEffect(() => {
 fetch('http://localhost:5000/api/products')
 .then(res => res.json())
 .then(data => setProducts(data))
}, [])

  return (
  
    <>
     <h1>EStore</h1>
     <button onClick={addProduct}></button>
    </>
  )
}

export default App
