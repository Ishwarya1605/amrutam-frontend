import React from "react";
import "../styles/Categories.scss";

import All from "../assets/images/All.svg";
import Bones from "../assets/images/Bones.svg";
import Hair from "../assets/images/Hair.svg";
import Skin from "../assets/images/Skin.svg";
import Digestion from "../assets/images/Digestion.svg";
import Immunity from "../assets/images/Immunity.svg";
import More from "../assets/images/More.svg";
;
export default function Categories() {
  const items = [
    { id: 1, label: "ALL", icon: All },
    { id: 2, label: "Hair", icon: Hair },
    { id: 3, label: "Skin", icon: Skin },
    { id: 4, label: "Digestion", icon: Digestion },
    { id: 5, label: "Bones", icon: Bones },
    { id: 6, label: "Immunity", icon: Immunity },
    { id: 7, label: "More", icon: More },
  ];

  return (
    <div className="categories-container">
      {items.map((item) => (
        <div className="category-card" key={item.id}>
          <div className="category-icon-wrap">
            <img src={item.icon} alt={item.label} className="category-icon" />
          </div>
          <p className="category-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
