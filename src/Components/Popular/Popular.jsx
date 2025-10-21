import React from "react";
import "./Popular.css";
import data_product from "../../assets/data";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <div className="price">
              <span className="new-price">${item.new_price}</span>
              <span className="old-price">${item.old_price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
