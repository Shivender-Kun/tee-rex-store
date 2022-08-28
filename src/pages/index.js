import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { fetchList } from "../api/products";
import Header from "../components/Header";

const Pages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchList()(dispatch);
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <main id="content__container">
        <Outlet />
      </main>
    </React.Fragment>
  );
};
export default Pages;
