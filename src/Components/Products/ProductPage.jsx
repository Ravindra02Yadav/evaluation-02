import React, { useEffect, useState } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import axios from "axios";
import ProductItem from "./ProductItem";

function ProductPage() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    .then(res =>{
      console.log(res.data.data)
      setData(res.data.data)
    })
    .catch(res => {
      console.log(err)
    })
  },[])
  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select"></select>
      </div>
      <Pagination />
      {data.map((el)=>(
        <ProductItem 
        key={el.id}
        image = {el.image}
        price = {el.price}
        title = {el.title}
        category = {el.category}
         />
      ))}
      {/* map products */}
      <ProductList />
    </div>
  );
}

export default ProductPage;
