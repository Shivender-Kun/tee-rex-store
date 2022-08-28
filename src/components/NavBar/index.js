import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const NavBar = () => (
  <nav className={styles["page__nav"]}>
    <NavLink to="/" className={styles["page__nav--link"]}>
      Products
    </NavLink>
    <NavLink to="/cart" className={styles["page__nav--link"]}>
      Cart
    </NavLink>
  </nav>
);

export default NavBar;
