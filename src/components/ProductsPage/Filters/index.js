import { useSelector, useDispatch } from "react-redux";
import React from "react";

import { ADD_FILTER, DELETE_FILTER } from "../../../store/actions";
import { ALL_FILTERS } from "../../../constants";
import styles from "./index.module.scss";

const ProductFilters = ({ position = "side" }) => {
  const { general, price, search } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleFilter = (e, name, type) => {
    if (e.target.checked) dispatch(ADD_FILTER({ name, type }));
    else dispatch(DELETE_FILTER({ name, type }));
  };

  return (
    <aside className={styles["filter__container"]} id={`filter__${position}`}>
      {ALL_FILTERS.map((filter, index) => (
        <FilterCategory
          {...{ filter, handleFilter, general, price }}
          key={index}
        />
      ))}
    </aside>
  );
};

export default ProductFilters;

const FilterCategory = ({
  filter: { name, options },
  handleFilter,
  general,
  price,
}) => {
  return (
    <div className={styles["filter__type"]}>
      <h3 className={styles["filter__name"]}>{name}</h3>
      {options.map((option, index) => (
        <div className={styles["filter__option"]} key={index}>
          <input
            type="checkbox"
            name={option}
            className={styles["filter__input"]}
            onChange={(e) => handleFilter(e, option, name)}
            defaultChecked={
              name !== "Price"
                ? general.some((filter) => filter === option)
                : price.some((filter) => filter.name === option)
            }
          />
          <label htmlFor={option}> {option}</label>
        </div>
      ))}
    </div>
  );
};
