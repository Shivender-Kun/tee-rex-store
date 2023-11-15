import React from "react";

import { Products, Filters, Search } from "../../components";
import styles from "./index.module.scss";

const Shop = () => {
  return (
    <ShopWrapper>
      <Search />
      {window.innerWidth > 855 ? <Filters /> : null}
      <Products />
    </ShopWrapper>
  );
};

const ShopWrapper = ({ children }) => (
  <div className={styles["home__page"]} id="home__page">
    {children}
  </div>
);

export default Shop;
