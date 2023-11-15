import { Outlet as Page } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";

import { useFetchProducts } from "../../api";
import { Header } from "../../components";

const Pages = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    useFetchProducts()(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header />
      <Page />
    </>
  );
};
export default Pages;
