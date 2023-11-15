import { useDispatch, useSelector } from "react-redux";
import React from "react";

import { CartPageWrapper, CartItem } from "../../components";
import { DELETE_PRODUCT } from "../../store/actions";
import styles from "./index.module.scss";

const Cart = () => {
  const { list: productsList } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  const deleteFromCart = (id) => dispatch(DELETE_PRODUCT({ id }));

  return (
    <CartPageWrapper>
      <ProductsInCart {...{ productsList, deleteFromCart }} />
      <TotalCost />
    </CartPageWrapper>
  );
};

export default Cart;

const ProductsInCart = ({ productsList, deleteFromCart }) => (
  <div className={styles["cart__items--container"]}>
    {productsList.map(
      (product, index) =>
        product.addedInCart && (
          <CartItem {...{ key: index, deleteFromCart }} {...product} />
        )
    )}
  </div>
);

const TotalCost = () => {
  return <div>Total Cost</div>;
};
