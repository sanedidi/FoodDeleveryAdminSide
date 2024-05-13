import React from "react";
import s from "./CategoriesAdd.module.scss";
import { Header } from "components/Header/Header";
import { Box } from "@chakra-ui/react";
import { CreateIcon, FolderIcon } from "components/SvgComponents/SvgComponents";
import { Link } from "react-router-dom";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import UnderHeader from "components/UnderHeader/UnderHeader";
export const CategoriesAdd = () => {
  return (
    <>
      <Header
        title={
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "400",
            }}
          >
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "18px",
              }}
              to={"/admin/categories"}
            >
              <FolderIcon />
              Категории
            </Link>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "18px",
              }}
            >
              <CreateIcon />
              Создать
            </Link>
          </Box>
        }
        headerBtn2={<CustomBtn BtnContent={"Сохранить"} BgColor={"blue"} />}
      />
      <UnderHeader firstItem={<p>Общие сведения</p>} />
    </>
  );
};

export default CategoriesAdd;
