import React from "react";
import styles from "./index.module.scss";

import NavBar from "../NavBar";

const Header = () => (
  <header className={styles["page__header"]}>
    <h1 className={styles["page__header--logo"]}>TeeRex Store</h1>
    <NavBar />
  </header>
);

export default Header;
