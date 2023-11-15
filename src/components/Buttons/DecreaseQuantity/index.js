import React from "react";

const DecreaseQuantity = ({ decrease }) => (
  <button className="btn__decrease-quantity" onClick={decrease}>
    -
  </button>
);

export default DecreaseQuantity;
