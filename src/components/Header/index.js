import React from "react";
import styles from "./index.module.scss";

import NavBar from "../Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles["page__header"]} id="page__header">
      <h1
        className={styles["page__header--logo"]}
        onClick={() => navigate("/")}
      >
        TeeRex Store
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
