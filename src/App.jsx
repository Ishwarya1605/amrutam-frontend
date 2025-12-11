import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.scss";
import Login from "./pages/Login";

const Home = lazy(() => import("./pages/Home"));
const FindDoctors = lazy(() => import("./pages/FindDoctors"));
const LabTests = lazy(() => import("./pages/LabTests"));
const Shop = lazy(() => import("./pages/Shop"));
const Forum = lazy(() => import("./pages/Forum"));
const About = lazy(() => import("./pages/About"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const DoctorProfile = lazy(() => import("./pages/DoctorProfile"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Contact = lazy(() => import("./pages/Contact"));
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  return (
    <>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/find-doctors" element={<FindDoctors />} />
        <Route path="/lab-tests" element={<LabTests />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} cart={cart} />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "5rem", fontSize: "1.5rem" }}>
              Page Not Found
            </div>
          }
        />
      </Routes>


      <Footer />
    </>
  );
}

export default App;




