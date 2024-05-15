import { Header } from "components/Header/Header";
import React from "react";
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
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Products = () => {
  return (
    <>
      <Header
        title={"Продукты "}
        headerBtn1={
          <Box className={s.Products__btn}>
            <CustomBtn
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
          <Link to={"/admin/categories/add"} className="header_btn1">
            <PlusIcon /> Добавить
          </Link>
        }
      />
      <UnderHeader
        firstItem={<CustomInput InputIcon={<Search2Icon color={"blue"} />} />}
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
                <p style={{ color: "#000", fontWeight: "500" }}>Фильтр</p>
              </Box>
            }
          />
        }
      />
      <div>Products</div>
    </>
  );
};

export default Products;
