import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import LabTestsData from "../data/labtests.json";
import "../styles/LabTests.scss";

export default function LabTests() {
  const [bookedTests, setBookedTests] = useState({});

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const handleBookTest = (id) => {
    setBookedTests((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  return (
    <main className="labtests-page">
      <Link to="/" className="back-link">
        <FaArrowLeft className="arrow-icon" />
      </Link>

      <h1>Lab Tests</h1>
      <div className="labtests-list">
        {LabTestsData.map((test) => (
          <div key={test.id} className="labtest-card">
            <div className="labtest-image-placeholder">
              {getInitials(test.name)}
            </div>

            <h3>{test.name}</h3>
            <p>{test.desc}</p>
            <p>Price: ₹{test.price}</p>

            <button onClick={() => handleBookTest(test.id)}>
              <FaCheck className="check-icon" />
              {bookedTests[test.id]
                ? "ADDED"
                : "Book Test"}
            </button>

          
            {bookedTests[test.id] && bookedTests[test.id] > 1 && (
              <span className="book-count">{bookedTests[test.id]}</span>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}





