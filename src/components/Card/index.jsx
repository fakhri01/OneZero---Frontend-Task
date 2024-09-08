import React from "react";
import image from "../../assets/images/Frame1.png";
import "./card.scss";

const Card = ({ title, price, onClick }) => {
  return (
    <article className="card" onClick={onClick}>
      <div className="card-header">
        <img src={image} alt={title} />
        <span className="price">₼ {price.toFixed(2)}</span>
      </div>
      <h3 className="title">{title}</h3>
    </article>
  );
};

export default Card;
