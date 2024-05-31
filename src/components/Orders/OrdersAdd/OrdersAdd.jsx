import React from "react";
import s from "./OrdersAdd.module.scss";
import { Box, Header, Select } from "public/imports";
import { CloseIcon } from "@chakra-ui/icons";
import useOrdersAddProps from "./useOrdersAddProps";

export const OrdersAdd = () => {
  const { getCat } = useOrdersAddProps();

  return (
    <>
      <Header
        title={
          <Box display={"flex"} alignItems={"center"} gap={"15px"}>
            <CloseIcon fontSize={"14px"} />
            Список товаров
          </Box>
        }
        headerBtn1={
          <>
            <Select placeholder="skjndvksnvlknsdlcnvsdlvknsldkvnsdkl" />
          </>
        }
        headerBtn2={
          <>
            <Select placeholder="skdjv ksjdncaksnckn" />
          </>
        }
      />
    </>
  );
};

export default OrdersAdd;
