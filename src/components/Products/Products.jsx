import { Header } from "components/Header/Header";
import React from "react";
import s from "./Products.module.scss";
import UnderHeader from "components/UnderHeader/UnderHeader";
export const Products = () => {
  return (
    <>
      <Header title={"Продукты "} />
      <UnderHeader />
      <div>Products</div>
    </>
  );
};

export default Products;
