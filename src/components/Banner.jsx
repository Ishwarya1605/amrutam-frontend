import React, { useState } from "react";
import "../styles/Banner.scss";
import SearchIcon from "../assets/images/Search.svg";
import BagIcon from "../assets/images/SearchBag.svg";

export default function Banner() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <section className="banner-container">
      <div className="banner-overlay" />
      
      <div className="banner-content">
        <h1 className="banner-title">Store</h1>

        <form className="banner-search" onSubmit={handleSearch}>
          <div className="searchbar-wrapper">

            {/* Search Bar */}
            <div className="searchbar">
              <img src={SearchIcon} alt="search" className="search-icon" />
              <input
                type="text"
                placeholder="Search for Kuntal Care"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
            </div>
            <button type="button" className="bag-btn">
              <img src={BagIcon} alt="Bag" className="bag-icon" />
            </button>

          </div>
        </form>
      </div>
    </section>
  );
}

