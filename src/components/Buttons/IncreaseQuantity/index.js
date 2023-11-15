import React from "react";

const IncreaseQuantity = ({ increase }) => (
  <button className="btn__increase-quantity" onClick={increase}>
    +
  </button>
);

export default IncreaseQuantity;
