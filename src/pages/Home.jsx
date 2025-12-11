import React from "react";
import Banner from "../components/Banner";
import "../styles/global.scss";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <title>Amrutam — Home</title>
      <meta name="description" content="Find doctors, lab tests, medicines, and more at Amrutam" />
      <main>
        <Banner/>
        <Categories/>
        <ProductCard/>
       
      </main>
    </>
  );
}
export default Home;




