import React from "react";
import SelectQuantity from "../SelectQuantity";
import styles from "./index.module.scss";

const CartItem = (props) => {
  const {
    imageURL,
    name,
    price,
    quantityInCart,
    id,
    deleteFromCart,
    quantity,
  } = props;

  return (
    <div className={styles["item__wrapper"]}>
      <div className={styles["item__image"]}>
        <img src={imageURL} alt={name} className={styles["image"]} />
      </div>
      <div className={styles["item__details"]}>
        <div className={styles["name"]}>{name} </div>
        <div className={styles["price"]}>{`Rs ${price}`}</div>
      </div>
      <div className={styles["item__quantity"]}>
        <SelectQuantity
          maxQuantity={quantity}
          selected={quantityInCart}
          id={id}
        />
      </div>
      <div className={styles["item__delete"]}>
        <button className={styles["delete"]} onClick={() => deleteFromCart(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
