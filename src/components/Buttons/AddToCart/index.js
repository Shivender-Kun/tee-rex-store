import React from "react";

const AddToCart = ({ addToCart }) => {
  return (
    <button className="btn__add-to-cart" onClick={addToCart}>
      Add to cart
    </button>
  );
};

export default AddToCart;
