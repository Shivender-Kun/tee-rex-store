import React from "react";
import styles from "./index.module.scss";

const CartPageWrapper = ({ children }) => {
  return (
    <div className={styles["page__container"]}>
      <div className={styles["page__top"]}>
        <h2 className={styles["heading"]}>Shopping Cart</h2>
      </div>
      <div className={styles["page__bottom"]}>{children}</div>
    </div>
  );
};

export default CartPageWrapper;
