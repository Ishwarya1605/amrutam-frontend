import React, { useState, useEffect } from "react";
import "../styles/Shop.scss";
import { Link } from "react-router-dom";
import gokhruImg from "../assets/images/Gokhru.png";
import ShampooImg from "../assets/images/Shampoo.png";
import HairoilImg from "../assets/images/Hairoil.png";
import MaltImg from "../assets/images/Malt.png";
import AloeImg from "../assets/images/Aloe.webp";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const IMAGE_MAP = {
  "Gokhru.png": gokhruImg,
  "Shampoo.png": ShampooImg,
  "Hairoil.png": HairoilImg,
  "Malt.png": MaltImg,
  "Aloe.webp": AloeImg,
};

const Shop = ({ cart, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    import("../data/products.json")
      .then((data) => setProducts(data.default))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const ingredient = {
    name: "Gokhru",
    desc: `Also known as Tribulus, it's used to prevent infections and manage diabetes. It's known for its potential to boost testosterone levels and improve reproductive health`,
    image: gokhruImg,
  };

  const totalPrice = cart.reduce((sum, p) => sum + (p.price || 0), 0);

  return (
    <div className="shop-page">
      <Link to="/" className="back-link">
        <FaArrowLeft className="arrow-icon" />
      </Link>

      <div className="shop-container">
        <div className="left-column">
          <div className="ingredient-detail">
            <div className="ingredient-image">
              <img src={ingredient.image} alt={ingredient.name} />
            </div>
            <h2 className="ingredient-name">{ingredient.name}</h2>
            <p className="ingredient-desc">{ingredient.desc}</p>
          </div>
        </div>

        <div className="right-column">
          <h3>Products with "{ingredient.name}"</h3>

          <div className="product-list">
            {products.map((product) => {
              const imgSrc = IMAGE_MAP[product.image];
              return (
                <div key={product.id} className="product-card">
                  {imgSrc && <img src={imgSrc} alt={product.name} />}
                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">₹{product.price}</p>
                  </div>
                  <button
                    className="add-btn"
                    onClick={() => addToCart(product)}
                  >
                    <FaPlus className="icon" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="cart-summary">
            Total Items: {cart.length} | Total Price: ₹{totalPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;











