import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <main className="page-container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.desc}</p>
      <span>Price: ₹{product.price}</span>
    </main>
  );
}

