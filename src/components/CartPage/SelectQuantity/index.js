import React from "react";
import { useDispatch } from "react-redux";
import { FIX_QUANTITY } from "../../../store/actions";
import styles from "./index.module.scss";

const SelectQuantity = ({ maxQuantity, selected, id }) => {
  const dispatch = useDispatch();

  const quantityArr = Array.from(Array(maxQuantity).keys());

  const changeQuantitySelected = (quantitySelected) => {
    dispatch(FIX_QUANTITY({ id, quantitySelected }));
  };

  return (
    <select
      defaultValue={selected}
      className={styles["select__quantity"]}
      onChange={(e) => changeQuantitySelected(Number(e.target.value))}
    >
      {quantityArr.map((quantity) => {
        return (
          <option
            key={quantity}
            value={quantity + 1}
            className={styles["item__quantity"]}
          >
            Qty: {quantity + 1}
          </option>
        );
      })}
    </select>
  );
};

export default SelectQuantity;
