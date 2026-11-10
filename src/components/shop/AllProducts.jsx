import React from 'react'
import Product from '../common/Product';

const AllProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const products = data.products;
  return (
    <div>
        <div className="grid grid-cols-4 gap-4">
        {products.map((_, index) => (
         <Product key={index} item={_} />
        ))}
        </div>
    </div>
  )
}

export default AllProducts