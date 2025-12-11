import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiUser } from "react-icons/fi"; 

import "../styles/Navbar.scss";

import Phone from "../assets/images/Phone.svg";
import Cart from "../assets/images/Cart.svg";
import Timer from "../assets/images/Timer.svg";
import Bag from "../assets/images/Bag.svg";

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
    
      <div className="nav-left">
        <img src={Phone} alt="phone" />
        <span>+91 9826353231</span>
      </div>

    
      <div className="nav-center">
        <h1 className="nav-title">AMRUTAM</h1>

        <div className="center-bottom">
        
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>Home</NavLink>

            <NavLink to="/find-doctors" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>Find Doctors</NavLink>

            <NavLink to="/lab-tests" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>Lab Tests</NavLink>

            <NavLink to="/shop" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>Shop</NavLink>

            <NavLink to="/forum" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>Forum</NavLink>

            <NavLink to="/about" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>About</NavLink>
          </div>

         
          <div className="nav-right">
            <button className="icon-btn cart-btn">
              <img src={Cart} alt="cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>

            <button className="icon-btn"><img src={Bag} alt="bag" /></button>
            <button className="icon-btn"><img src={Timer} alt="timer" /></button>

          
            <NavLink to="/login" className="icon-btn login-icon">
              <FiUser size={22} />
            </NavLink>
          </div>
        </div>
      </div>

 
      <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
      </div>

     
      {menuOpen && (
        <div className="mobile-dropdown">
          <NavLink to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/find-doctors" className="mobile-link" onClick={() => setMenuOpen(false)}>Find Doctors</NavLink>
          <NavLink to="/lab-tests" className="mobile-link" onClick={() => setMenuOpen(false)}>Lab Tests</NavLink>
          <NavLink to="/shop" className="mobile-link" onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/forum" className="mobile-link" onClick={() => setMenuOpen(false)}>Forum</NavLink>
          <NavLink to="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>About</NavLink>

          <div className="mobile-icons">
            <div className="mobile-cart">
              <img src={Cart} alt="cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>

            <img src={Bag} alt="bag" />
            <img src={Timer} alt="timer" />

   
            <NavLink to="/login" className="login-icon">
              <FiUser size={22} />
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}














