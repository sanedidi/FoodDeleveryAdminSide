import { Header } from "components/Header/Header";
import React, { useState } from "react";
import s from "./Products.module.scss";
import UnderHeader from "components/UnderHeader/UnderHeader";
import CustomInput from "components/Custom/CustomInput/CustomInput";
import { DownloadIcon, Search2Icon } from "@chakra-ui/icons";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import {
  FilterIcon,
  PlusIcon,
  ReloadIcon,
} from "components/SvgComponents/SvgComponents";
import { Box, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CustomTable } from "components/Custom/CustomTable/CustomTable";
import useProductsProps from "./useProductsProps";
import { Skeleton } from "antd";

export const Products = () => {
  const { data, columns, setSearchQuery } = useProductsProps();
  const [isLoading, setIsLoading] = useState(false); // State to track loading state

  const handleRefresh = () => {
    setIsLoading(true); // Set loading state to true
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after data is loaded
    }, 1000);
  };

  return (
    <>
      <Header
        title={"Продукты "}
        headerBtn1={
          <Box className={s.Products__btn}>
            <CustomBtn
              Onclick={handleRefresh}
              BgColor={"white"}
              type={"button"}
              BtnBorder={"1px solid #E5E9EB"}
              BtnContent={
                <Box
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <ReloadIcon />
                  <p style={{ color: "blue", fontWeight: "500" }}>
                    {" "}
                    Обновить CRM филиал
                  </p>
                </Box>
              }
            />
          </Box>
        }
        headerBtn2={
          <Link to={"/admin/categories/products/add"} className="header_btn1">
            <PlusIcon /> Добавить
          </Link>
        }
      />
      <UnderHeader
        firstItem={
          <CustomInput
            onChange={(e) => setSearchQuery(e.target.value)}
            InputIcon={<Search2Icon color={"blue"} />}
          />
        }
        secondItem={
          <CustomBtn
            BgColor={"white"}
            type={"button"}
            BtnBorder={"1px solid #E5E9EB"}
            BtnContent={
              <Box
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <FilterIcon />
                <p style={{ color: "#000", fontWeight: "500" }}>Фильтр</p>
              </Box>
            }
          />
        }
        thirdItem={
          <CustomBtn
            BgColor={"white"}
            type={"button"}
            BtnBorder={"1px solid #E5E9EB"}
            BtnContent={
              <Box
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <DownloadIcon color={"blue"} />
                <p style={{ color: "#000", fontWeight: "500" }}>Скачать</p>
              </Box>
            }
          />
        }
      />
      <Box className={s.products__wrapper}>
        {isLoading ? (
          <Stack className={s.skeletonWrapper}>
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
          </Stack>
        ) : (
          <CustomTable key={isLoading} columns={columns} data={data} />
        )}
      </Box>
    </>
  );
};

export default Products;
