import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "../Card";
import styles from "./index.module.scss";

const Products = () => {
  const [filteredList, setFilteredList] = useState([]);
  const dispatch = useDispatch();

  const {
    products: { list: products },
    filters: { general, search, price },
  } = useSelector((state) => state);

  const handleGeneralFilters = (filter, product) => {
    return filter.some(
      (filterValue) =>
        filterValue.toLowerCase() === product.gender.toLowerCase() ||
        filterValue.toLowerCase() === product.type.toLowerCase() ||
        filterValue.toLowerCase() === product.color.toLowerCase()
    );
  };

  const handlePriceFilters = (price, product) => {
    return price.some((price) => {
      if (price.min && price.max)
        return product.price <= price.max && product.price >= price.min;
      return product.price >= price.min;
    });
  };

  useEffect(() => {
    let productsListing = products;

    if (products.length && (general.length || price.length || search.length))
      productsListing = products.filter((product) => {
        return (
          handleGeneralFilters([...general, ...search], product) ||
          handlePriceFilters(price, product)
        );
      });

    return setFilteredList(productsListing);
  }, [products, general, price, search]);

  return (
    <ProductsContainer>
      {filteredList.map((product, index) => (
        <ProductCard {...{ product, key: index, dispatch, index }} />
      ))}
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = ({ children }) => {
  return (
    <div className={styles["products__wrapper"]}>
      <div className={styles["products__container"]} id="products__container">
        {children}
      </div>
    </div>
  );
};
