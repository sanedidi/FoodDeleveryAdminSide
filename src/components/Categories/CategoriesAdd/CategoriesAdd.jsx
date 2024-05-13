import React from "react";
import s from "./CategoriesAdd.module.scss";
import { Header } from "components/Header/Header";
import { Box } from "@chakra-ui/react";
import { CreateIcon, FolderIcon } from "components/SvgComponents/SvgComponents";
import { Link } from "react-router-dom";
export const CategoriesAdd = () => {
  return (
    <>
      <Header
        title={
          <Box style={{ display: "flex", alignItems: "center", gap:"10px"}}>
            <Link
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              to={"/admin/categories"}
            >
              <FolderIcon />
              Категория
            </Link>
            <Link
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <CreateIcon />
              Создать
            </Link>
          </Box>
        }
      />
      <div>CategoriesAdd</div>
    </>
  );
};

export default CategoriesAdd;
