import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

import { ICON } from "../../assets";
import styles from "./index.module.scss";

const NavBar = () => {
  const itemsInCart = useSelector((store) => store.products.cart);
  return (
    <nav className={styles["page__nav"]}>
      <NavLink to="shop" className={styles["page__nav--link"]}>
        Products
      </NavLink>
      <NavLink to="cart" className={styles["page__nav--link"]}>
        <img src={ICON.Cart} alt="Cart" className={styles["cart__icon"]} />
        {itemsInCart ? (
          <span className={styles["cart__items-quantity"]}>{itemsInCart}</span>
        ) : null}
      </NavLink>
    </nav>
  );
};

export default NavBar;
