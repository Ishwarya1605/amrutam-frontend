import React, { useRef, useState, useEffect } from "react";
import "../styles/ProductsCard.scss";
import ProductsData from "../data/products.json";
import StarImg from "../assets/images/Star.svg";
import NextArrow from "../assets/images/Nexticon.png";

export default function ProductCard({ cart, addToCart }) {
    const carouselRef = useRef(null);
    const [products, setProducts] = useState([]);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        setProducts(ProductsData);
        setRatings(ProductsData.map((p) => Math.round(p.rating / 10)));
    }, []);

    const getImage = (imageName) =>
        new URL(`../assets/images/${imageName}`, import.meta.url).href;

    const handleRatingClick = (productIndex, starIndex) => {
        const newRatings = [...ratings];
        newRatings[productIndex] = starIndex + 1;
        setRatings(newRatings);
    };

    const scrollNext = () => {
        const container = carouselRef.current;
        if (container && container.firstChild) {
            const cardWidth = container.firstChild.offsetWidth + 16; // gap
            container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    };

    const scrollPrev = () => {
        const container = carouselRef.current;
        if (container && container.firstChild) {
            const cardWidth = container.firstChild.offsetWidth + 16; // gap
            container.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    };

    return (
        <div className="shop-carousel-wrapper">
            <h3>Summer Collection</h3>

            <img
                src={NextArrow}
                alt="Prev"
                className="carousel-btn prev"
                onClick={scrollPrev}
                style={{ transform: "rotate(180deg)" }}
            />

            <div className="shop-products-container" ref={carouselRef}>
                {products.map((product, index) => (
                    <div className="shop-product-card" key={product.id}>
                        <img
                            src={getImage(product.image)}
                            alt={product.name}
                            className="shop-product-image"
                        />
                        <h3 className="shop-product-name">{product.name}</h3>
                        <p className="shop-product-desc">{product.desc}</p>
                        <div className="shop-product-details">
                            ₹{product.price} — {product.quantity}
                        </div>
                        <div className="shoprate-add">
                            <div className="shop-product-rating">
                                {Array(5)
                                    .fill(0)
                                    .map((_, starIndex) => (
                                        <img
                                            key={starIndex}
                                            src={StarImg}
                                            alt="star"
                                            className={`rating-star ${starIndex < ratings[index] ? "active" : ""
                                                }`}
                                            onClick={() => handleRatingClick(index, starIndex)}
                                        />
                                    ))}
                                <span className="rating-number">({ratings[index] * 10})</span>
                            </div>
                            <img
                                src={getImage(product.addToCartImg)}
                                alt="Add to Cart"
                                className="add-to-cart-img"
                                onClick={() => addToCart(product)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <img
                src={NextArrow}
                alt="Next"
                className="carousel-btn next"
                onClick={scrollNext}
            />
        </div>
    );
}








