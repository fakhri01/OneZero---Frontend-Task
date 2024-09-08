import React, { useState } from "react";
import image from "../../assets/images/Frame2.png";
import "./modal.scss";

const Modal = ({ selectedProduct, closeModal, category }) => {
  if (!selectedProduct) return null;
  const { name, priceSell } = selectedProduct;
  const [quantity, setQuantity] = useState(1);
  const totalPrice = quantity * priceSell;

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          <img src={image} alt={name[0].value} />
        </div>
        <div className="desc">
          <h3 className="title">{name[0].value}</h3>
          <p className="category">{category}</p>
          <p className="price">₼ {totalPrice.toFixed(2)}</p>

          <div className="quantity">
            <button
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
            >
              <span>&minus;</span>
            </button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>
              <span>&#43;</span>
            </button>
          </div>
          <ul className="info">
            <li>Size: Large</li>
            <li>Nuts: Hazelnut, 2 x Almond, Macadamia</li>
            <li>Syrups: Vanilla, Honey</li>
            <li>Fruits: Banana, 2 x Raspberry</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Modal;
