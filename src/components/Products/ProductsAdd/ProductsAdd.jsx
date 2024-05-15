import { Box } from "@chakra-ui/react";
import { ArrowLeftIcon } from "components/SvgComponents/SvgComponents";
import React, { useState } from "react";
import s from "./ProductsAdd.module.scss";

const ProductsAdd = () => {

  return (
    <>
      <header id="header" className={s.header}>
        <Box className={s.header__wrapper}>
          <Box
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h2 className={s.header__title}>
              {" "}
              <ArrowLeftIcon /> Добавить
            </h2>
         
          </Box>
          <Box
            gap={10}
            style={{ display: "flex" }}
            alignItems={"center"}
            className={s.header__wrapperLeft}
          >
            <Box style={{ display: "flex", height: "34px" }}></Box>
            <Box style={{ maxHeight: "34px" }}></Box>
          </Box>
        </Box>
      </header>
    </>
  );
};

export default ProductsAdd;
