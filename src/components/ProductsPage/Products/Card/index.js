import React from "react";

import {
  ADD_PRODUCT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../../../../store/actions";
import {
  AddToCart,
  DecreaseQuantity,
  IncreaseQuantity,
} from "../../../Buttons";
import styles from "./index.module.scss";

const ProductCard = ({ product, index, dispatch }) => {
  const addToCart = (product) => dispatch(ADD_PRODUCT(product));
  const decreaseQuantity = (product) => dispatch(DECREASE_QUANTITY(product));

  const increaseQuantity = (product) => {
    const { quantity, quantityInCart } = product;
    if (quantity === quantityInCart) return alert("Product out of stock!!!");
    dispatch(INCREASE_QUANTITY(product));
  };

  return (
    <div className={styles["product__card"]} key={index}>
      <ProductImage {...product} index={index} />
      <div className={styles["product__details"]}>
        <div className={styles["product__price"]}>Rs {product.price}</div>
        {!product.addedInCart ? (
          <AddToCart addToCart={() => addToCart(product)} />
        ) : (
          <ChangeProductQuantity
            increase={() => increaseQuantity(product)}
            decrease={() => decreaseQuantity(product)}
            quantity={product.quantityInCart}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;

const ProductImage = ({ index, imageURL, name }) => {
  return (
    <figure className={styles["product__details-wrapper"]}>
      <figcaption className={styles["product__name"]}>
        {`${index + 1}. ${name}`}
      </figcaption>
      <img
        src={imageURL}
        loading="lazy"
        alt={name}
        className={styles["product__image"]}
      />
    </figure>
  );
};

const ChangeProductQuantity = ({ increase, decrease, quantity }) => (
  <div className={styles["product__quantity-wrapper"]}>
    <DecreaseQuantity {...{ decrease }} />
    {quantity}
    <IncreaseQuantity {...{ increase }} />
  </div>
);
